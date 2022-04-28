import { useMutation } from "@apollo/client";
import {
  Button,
  Classes,
  H3,
  Icon,
  IconName,
  InputGroup,
  Intent,
  Tree,
} from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { Color } from "react-color";
import { createFolderGQL } from "../../../graphql/client/mutations";
import { useEntitiesContext } from "../../context/EntitiesContext";
import { useMapContext } from "../../context/MapContext";
import { useOverlayContext } from "../../context/OverlayContext";
import Overlay from "../Overlay";
import { AppToaster } from "../Toaster";
import ColorPicker from "./ColorPicker";
import IconPicker from "./IconPicker";

interface ParentFolder {
  id: string;
  name: string;
  icon: IconName;
  color: Color;
}

function FolderEditOverlay() {
  const { overlayDispatch, overlayState } = useOverlayContext();
  const { mapState } = useMapContext();
  const [name, setName] = useState("");
  const { entitiesState } = useEntitiesContext();
  const [parentFolder, setParentFolder] = useState<ParentFolder | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<IconName | null>(
    "folder-close"
  );
  const [color, setColor] = useState<Color | null>("#fff");

  const [createFolder] = useMutation(createFolderGQL, {
    onCompleted() {
      AppToaster?.show({
        intent: Intent.SUCCESS,
        message: "Folder dodany!",
      });
      if (mapState.refetchFolders) mapState.refetchFolders();
      overlayDispatch({
        type: "closeFolderEditOverlay",
      });
    },
    onError(err) {
      AppToaster?.show({
        intent: Intent.DANGER,
        message: `Wystąpił błąd: ${err}`,
      });
    },
  });

  const handleSubmit = () => {
    createFolder({
      variables: {
        parentFolder: parentFolder?.id,
        color: color,
        icon: selectedIcon,
        name: name,
      },
    });
  };

  const getParentFolder = () => {
    const node = Tree.nodeFromPath(overlayState.folderEditPath!, entitiesState);
    setParentFolder({
      id: node.nodeData?.parentFolder?.id!,
      name:
        overlayState.folderEditPath?.length === 1
          ? "Root"
          : node.nodeData?.parentFolder?.name!,
      icon: node.nodeData?.parentFolder?.icon!,
      color: node.nodeData?.parentFolder?.color!,
    });
  };

  useEffect(() => {
    if (overlayState.folderEdit) getParentFolder();
  }, [overlayState.folderEditPath]);

  return (
    <Overlay
      isOpen={overlayState.folderEdit}
      onClose={() =>
        overlayDispatch({
          type: "closeFolderEditOverlay",
        })
      }
      className="markerEdit"
    >
      <H3>Dodaj folder</H3>
      <InputGroup
        placeholder="Nazwa"
        leftIcon={<Icon icon={selectedIcon} color={color as string} />}
        style={{ marginBottom: "10px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="markerEdit__iconColorBar">
        <IconPicker
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
        <ColorPicker
          color={color!}
          onChange={(picked) => setColor(picked.hex)}
        />
      </div>
      <InputGroup
        leftIcon={
          <Icon
            icon={parentFolder?.icon}
            color={parentFolder?.color as string}
          />
        }
        style={{ marginBottom: "10px" }}
        value={`${parentFolder?.name}`}
        disabled
        // onChange={(e) => setName(e.target.value)}
      />

      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Button
          intent={Intent.DANGER}
          onClick={() =>
            overlayDispatch({
              type: "closeFolderEditOverlay",
            })
          }
          style={{ margin: "" }}
        >
          Anuluj
        </Button>
        <Button style={{ margin: "" }} onClick={() => handleSubmit()}>
          Zapisz
        </Button>
      </div>
    </Overlay>
  );
}

export default FolderEditOverlay;
