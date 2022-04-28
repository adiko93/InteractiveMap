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
} from "@blueprintjs/core";
import { useMapContext } from "../../context/MapContext";
import { Folder } from "../../types";
import {
  EntitiesState,
  useEntitiesContext,
} from "../../context/EntitiesContext";
import { NodePath } from "../../types/EntitiesContext";
import { icon } from "leaflet";
import { useOverlayContext } from "../../context/OverlayContext";
import { ContextMenu2, ContextMenu2ChildrenProps } from "@blueprintjs/popover2";
import { type } from "os";

export const FoldersPanel: React.FC<PanelProps<{ mapId: string }>> = () => {
  const { mapState, mapDispatch } = useMapContext();
  const [test, setTest] = React.useState(false);
  const { entitiesDispatch, entitiesState } = useEntitiesContext();
  const { overlayDispatch } = useOverlayContext();
  const [clickedContext, setClicedContext] = React.useState();
  const tree = React.useRef(null);

  const handleNodeClick = React.useCallback(
    (
      node: TreeNodeInfo,
      nodePath: NodePath,
      e: React.MouseEvent<HTMLElement>
    ) => {
      console.log(node);
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

  const contextMenu = (type) => {
    switch (type) {
      case "FOLDER":
        return (
          <>
            <MenuItem
              icon="trash"
              text={`Usuń folder`}
              onClick={() => {
                // markers.addMarker(clickedPosition)
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
                // markers.addMarker(clickedPosition)
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
      <ContextMenu2
        onContextMenu={(event) => {
          console.log(event);
        }}
        content={
          <Menu>{contextMenu(clickedContext?.node?.nodeData?.type)}</Menu>
        }
      >
        {(ctxMenuProps: ContextMenu2ChildrenProps) => {
          return (
            <>
              <Tree
                contents={entitiesState}
                onNodeClick={handleNodeClick}
                onNodeContextMenu={(node, path, e) => {
                  setClicedContext({
                    node,
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
