import * as React from "react";
import {
  Classes,
  Icon,
  Intent,
  TreeNodeInfo,
  Tree,
  Checkbox,
  PanelProps,
  Menu,
  MenuItem,
  Alert,
} from "@blueprintjs/core";
import { useMapContext } from "../../context/MapContext";
import { EntityType, Folder } from "../../types";
import {
  EntitiesState,
  useEntitiesContext,
} from "../../context/EntitiesContext";
import { NodePath } from "../../types/EntitiesContext";
import { icon } from "leaflet";
import { useOverlayContext } from "../../context/OverlayContext";
import { ContextMenu2, ContextMenu2ChildrenProps } from "@blueprintjs/popover2";
import { type } from "os";
import { useMutation } from "@apollo/client";
import {
  deleteEnitityGQL,
  deleteFolderGQL,
} from "../../../graphql/client/mutations";
import { AppToaster } from "../Toaster";

interface ClickedContext {
  node: EntitiesState;
  path: number[];
}

export const FoldersPanel: React.FC<PanelProps<{ mapId: string }>> = () => {
  const [isAlertOpened, setIsAlertOpened] = React.useState(false);
  const { mapState, mapDispatch } = useMapContext();
  const [test, setTest] = React.useState(false);
  const { entitiesDispatch, entitiesState } = useEntitiesContext();
  const { overlayDispatch } = useOverlayContext();
  const [clickedContext, setClickedContext] =
    React.useState<ClickedContext | null>(null);
  const tree = React.useRef(null);
  const [deleteFolder] = useMutation(deleteFolderGQL, {
    onCompleted() {
      AppToaster?.show({
        intent: Intent.SUCCESS,
        message: "Pomyślnie usunięto folder i jego zawartość",
      });
      setIsAlertOpened(false);
      if (mapState.refetchFolders) mapState.refetchFolders();
    },
    onError(error) {
      AppToaster?.show({
        intent: Intent.DANGER,
        message: `Wystąpił błąd ${error}`,
      });
      setIsAlertOpened(false);
    },
  });
  const [deleteEntity] = useMutation(deleteEnitityGQL, {
    onCompleted() {
      AppToaster?.show({
        intent: Intent.SUCCESS,
        message: "Pomyślnie usunięto",
      });
      if (mapState.refetchFolders) mapState.refetchFolders();
    },
    onError(error) {
      AppToaster?.show({
        intent: Intent.DANGER,
        message: `Wystąpił błąd ${error}`,
      });
    },
  });

  const handleNodeClick = React.useCallback(
    (
      node: TreeNodeInfo,
      nodePath: NodePath,
      e: React.MouseEvent<HTMLElement>
    ) => {
      if ((node as EntitiesState).nodeData?.type === "ADDFOLDER") {
        overlayDispatch({
          type: "openFolderEditOverlay",
          payload: {
            path: nodePath,
          },
        });
        return;
      }
      const originallySelected = node.isSelected;
      if (!e.shiftKey) {
        entitiesDispatch({ type: "DESELECT_ALL" });
      }
      entitiesDispatch({
        payload: {
          path: nodePath,
          isSelected: originallySelected == null ? true : !originallySelected,
        },
        type: "SET_IS_SELECTED",
      });
    },
    []
  );
  // const handleNodeClick = React.useCallback(
  //   (
  //     node: TreeNodeInfo,
  //     nodePath: NodePath,
  //     e: React.MouseEvent<HTMLElement>
  //   ) => {
  //     //  contextMenu.
  //   },
  //   []
  // );

  const handleNodeCollapse = React.useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      entitiesDispatch({
        payload: { path: nodePath, isExpanded: false },
        type: "SET_IS_EXPANDED",
      });
    },
    []
  );

  const handleNodeExpand = React.useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      entitiesDispatch({
        payload: { path: nodePath, isExpanded: true },
        type: "SET_IS_EXPANDED",
      });
    },
    []
  );

  const contextMenu = (type: EntityType | "FOLDER" | "ADDFOLDER") => {
    switch (type) {
      case "FOLDER":
        return (
          <>
            <MenuItem
              icon="trash"
              text={`Usuń folder`}
              onClick={() => {
                setIsAlertOpened(true);
              }}
            />
            <MenuItem
              icon="edit"
              text={`Edytuj folder`}
              onClick={() => {
                // markers.addMarker(clickedPosition)
              }}
            />
          </>
        );
      case "MARKER":
        return (
          <>
            <MenuItem
              icon="trash"
              text={`Usuń marker`}
              onClick={() => {
                deleteEntity({
                  variables: {
                    deleteEntityId: clickedContext?.node.id,
                  },
                });
              }}
            />
            <MenuItem
              icon="edit"
              text={`Edytuj marker`}
              onClick={() => {
                // markers.addMarker(clickedPosition)
              }}
            />
          </>
        );
    }
  };

  return (
    <div>
      <Alert
        isOpen={isAlertOpened}
        cancelButtonText="Anuluj"
        confirmButtonText="Usuń"
        intent={Intent.DANGER}
        onConfirm={() =>
          deleteFolder({ variables: { folderId: clickedContext!.node.id } })
        }
        onCancel={() => setIsAlertOpened(false)}
        icon="trash"
        style={{
          padding: "10px",
        }}
      >
        <p>Jesteś pewny że chcesz usunąć ten folder i całą jego zawartość?</p>
      </Alert>
      <ContextMenu2
        onContextMenu={(event) => {
          console.log(event);
        }}
        content={
          <Menu>{contextMenu(clickedContext?.node?.nodeData?.type!)}</Menu>
        }
      >
        {(ctxMenuProps: ContextMenu2ChildrenProps) => {
          return (
            <>
              <Tree
                contents={entitiesState}
                onNodeClick={handleNodeClick}
                onNodeContextMenu={(node, path, e) => {
                  setClickedContext({
                    node: node as EntitiesState,
                    path,
                  });
                  ctxMenuProps.onContextMenu(e);
                }}
                onNodeCollapse={handleNodeCollapse}
                onNodeExpand={handleNodeExpand}
                className="bp4-dark"
                ref={ctxMenuProps.ref}
              />
              {ctxMenuProps.popover}
            </>
          );
        }}
      </ContextMenu2>
    </div>
  );
};

export default FoldersPanel;
