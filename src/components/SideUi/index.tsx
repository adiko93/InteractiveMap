import { cloneDeep } from "lodash-es";
import * as React from "react";

import {
  Classes,
  Icon,
  Intent,
  TreeNodeInfo,
  Tree,
  Checkbox,
  MenuItem,
  Menu,
} from "@blueprintjs/core";
import {
  Classes as Popover2Classes,
  ContextMenu2,
  Tooltip2,
} from "@blueprintjs/popover2";

const INITIAL_STATE: TreeNodeInfo[] = [
  {
    id: 0,
    hasCaret: true,
    icon: (
      <Icon
        icon="path-search"
        intent={Intent.PRIMARY}
        className={Classes.TREE_NODE_ICON}
        color="red"
      />
    ),
    label: (
      <ContextMenu2 content={<div>Hello there!</div>}>Folder 0</ContextMenu2>
    ),
  },
  {
    id: 1,
    icon: "folder-close",
    isExpanded: true,
    label: (
      <ContextMenu2 content={<div>Hello there!</div>}>
        <Tooltip2 content="I'm a folder <3" placement="left" usePortal>
          Pacific
        </Tooltip2>
      </ContextMenu2>
    ),
    childNodes: [
      {
        id: 2,
        icon: (
          <Icon className={Classes.TREE_NODE_ICON} icon="person" color="red" />
        ),
        label: (
          <ContextMenu2
            content={
              <Menu>
                <MenuItem icon="trash" text="Usuń marker" />
              </Menu>
            }
          >
            Item 0
          </ContextMenu2>
        ),
        secondaryLabel: (
          <Checkbox
            style={{
              marginBottom: "0",
            }}
          />
        ),
      },
      {
        id: 3,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
      {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: (
          <ContextMenu2 content={<div>Hello there!</div>}>
            <Tooltip2 content="foo" placement="right">
              Folder 2
            </Tooltip2>
          </ContextMenu2>
        ),
        childNodes: [
          { id: 5, label: "No-Icon Item" },
          { id: 6, icon: "tag", label: "Item 1" },
          {
            id: 7,
            hasCaret: true,
            icon: "folder-close",
            label: (
              <ContextMenu2 content={<div>Hello there!</div>}>
                Folder 3
              </ContextMenu2>
            ),
            childNodes: [
              { id: 8, icon: "document", label: "Item 0" },
              { id: 9, icon: "tag", label: "Item 1" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    hasCaret: true,
    icon: "folder-close",
    label: "Super secret files",
    disabled: true,
  },
];

type NodePath = number[];

type TreeAction =
  | {
      type: "SET_IS_EXPANDED";
      payload: { path: NodePath; isExpanded: boolean };
    }
  | { type: "DESELECT_ALL" }
  | {
      type: "SET_IS_SELECTED";
      payload: { path: NodePath; isSelected: boolean };
    };

function forEachNode(
  nodes: TreeNodeInfo[] | undefined,
  callback: (node: TreeNodeInfo) => void
) {
  if (nodes === undefined) {
    return;
  }

  for (const node of nodes) {
    callback(node);
    forEachNode(node.childNodes, callback);
  }
}

function forNodeAtPath(
  nodes: TreeNodeInfo[],
  path: NodePath,
  callback: (node: TreeNodeInfo) => void
) {
  callback(Tree.nodeFromPath(path, nodes));
}

function treeExampleReducer(state: TreeNodeInfo[], action: TreeAction) {
  switch (action.type) {
    case "DESELECT_ALL":
      const newState1 = cloneDeep(state);
      forEachNode(newState1, (node) => (node.isSelected = false));
      return newState1;
    case "SET_IS_EXPANDED":
      const newState2 = cloneDeep(state);
      forNodeAtPath(
        newState2,
        action.payload.path,
        (node) => (node.isExpanded = action.payload.isExpanded)
      );
      return newState2;
    case "SET_IS_SELECTED":
      const newState3 = cloneDeep(state);
      forNodeAtPath(
        newState3,
        action.payload.path,
        (node) => (node.isSelected = action.payload.isSelected)
      );
      return newState3;
    default:
      return state;
  }
}

export const SideUi: React.FC = (props) => {
  const [nodes, dispatch] = React.useReducer(treeExampleReducer, INITIAL_STATE);

  const handleNodeClick = React.useCallback(
    (
      node: TreeNodeInfo,
      nodePath: NodePath,
      e: React.MouseEvent<HTMLElement>
    ) => {
      const originallySelected = node.isSelected;
      if (!e.shiftKey) {
        dispatch({ type: "DESELECT_ALL" });
      }
      dispatch({
        payload: {
          path: nodePath,
          isSelected: originallySelected == null ? true : !originallySelected,
        },
        type: "SET_IS_SELECTED",
      });
    },
    []
  );

  const handleNodeCollapse = React.useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      dispatch({
        payload: { path: nodePath, isExpanded: false },
        type: "SET_IS_EXPANDED",
      });
    },
    []
  );

  const handleNodeExpand = React.useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      dispatch({
        payload: { path: nodePath, isExpanded: true },
        type: "SET_IS_EXPANDED",
      });
    },
    []
  );

  return (
    <div className="sideUi">
      <Tree
        contents={nodes}
        onNodeClick={handleNodeClick}
        onNodeCollapse={handleNodeCollapse}
        onNodeExpand={handleNodeExpand}
        className="bp4-dark"
      />
    </div>
  );
};

export default SideUi;
