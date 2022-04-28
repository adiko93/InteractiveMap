import { useLazyQuery, useMutation } from "@apollo/client";
import {
  Alignment,
  Button,
  Classes,
  H3,
  Icon,
  IconName,
  InputGroup,
  Intent,
  MenuItem,
  TextArea,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ItemPredicate, ItemRenderer, Select } from "@blueprintjs/select";
import React, { useMemo, useState } from "react";
import { Color } from "react-color";
import { createEntityGQL } from "../../../graphql/client/mutations";
import { useMapContext } from "../../context/MapContext";
import { useOverlayContext } from "../../context/OverlayContext";
import { Folder } from "../../types";
import Overlay from "../Overlay";
import { AppToaster } from "../Toaster";
import ColorPicker from "./ColorPicker";
import FolderSelect, { FolderListItem } from "./FolderSelect";
import IconPicker from "./IconPicker";
import ImageUpload from "./ImageUpload";

function MarkerEditOverlay() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<IconName | null>(null);
  const [color, setColor] = useState<Color>("#4A90E2");
  const [selectedFolder, setSelectedFolder] = useState<FolderListItem | null>(
    null
  );
  const [image, setImage] = useState<File | null>(null);
  const [createObjectURL, setCreateObjectURL] = useState<string | null>(null);
  const { mapDispatch, mapState } = useMapContext();
  const { overlayState, overlayDispatch } = useOverlayContext();

  const [createMarker, { data }] = useMutation(createEntityGQL, {
    onCompleted: () => {
      AppToaster?.show({
        intent: Intent.SUCCESS,
        message: `Marker dodany`,
      });
      if (mapState.refetchFolders) mapState.refetchFolders();
      overlayDispatch({
        type: "closeEditMarkerOverlay",
      });
    },
    onError: (error) => {
      AppToaster?.show({
        intent: Intent.DANGER,
        message: `Wystąpił problem: ${error}`,
      });
    },
  });

  const handleCreateMarker = async () => {
    createMarker({
      variables: {
        folder: selectedFolder?.id,
        type: "MARKER",
        name,
        color,
        icon: selectedIcon,
        description,
        position: {
          values: [
            overlayState.clickedPosition?.lat,
            overlayState.clickedPosition?.lng,
          ],
        },
        // TODO: Image Upload
        image: null,
      },
    });
  };

  return (
    <Overlay
      isOpen={overlayState.editMarker}
      onClose={() =>
        overlayDispatch({
          type: "closeEditMarkerOverlay",
        })
      }
      className="markerEdit"
    >
      <div className="marker--preview">
        <H3>Dodaj marker</H3>
        <Icon
          size={16}
          icon={selectedIcon ? selectedIcon : `person`}
          color="white"
        />
        <div
          className="marker--preview--after"
          style={{
            background: `linear-gradient(130deg, ${color} 0% 50%, rgba(10, 174, 238, 0.107) 99.5% 100%)`,
          }}
        ></div>
      </div>
      <InputGroup
        placeholder="Nazwa"
        leftIcon="map-marker"
        style={{ marginBottom: "10px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputGroup
        placeholder="Koordynaty"
        leftIcon="map-marker"
        disabled
        value={`[${overlayState.clickedPosition?.lat}, ${overlayState.clickedPosition?.lng}]`}
        style={{ marginBottom: "10px" }}
      />
      <div className="markerEdit__iconColorBar">
        <IconPicker
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
        <ColorPicker
          color={color}
          onChange={(picked) => setColor(picked.hex)}
        />
      </div>

      <FolderSelect
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />

      <TextArea
        className="markerEdit__textArea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <ImageUpload
        createObjectURL={createObjectURL}
        image={image}
        setCreateObjectURL={setCreateObjectURL}
        setImage={setImage}
      />
      <div className={Classes.DIALOG_FOOTER_ACTIONS}>
        <Button
          intent={Intent.DANGER}
          onClick={() =>
            overlayDispatch({
              type: "closeEditMarkerOverlay",
            })
          }
          style={{ margin: "" }}
        >
          Anuluj
        </Button>
        <Button style={{ margin: "" }} onClick={() => handleCreateMarker()}>
          Zapisz
        </Button>
      </div>
    </Overlay>
  );
}

export default MarkerEditOverlay;
