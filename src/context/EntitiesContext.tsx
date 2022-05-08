import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useSession } from "next-auth/react";
import { EntitiesAction, NodePath } from "../types/EntitiesContext";
import {
  TreeNodeInfo,
  Tree,
  Icon,
  Checkbox,
  Intent,
  Classes,
  IconName,
  ITreeNodeProps,
} from "@blueprintjs/core";
import { cloneDeep } from "lodash-es";
import { EntityType, Folder, Map } from "../types";
import { useMapContext } from "./MapContext";
import { AppToaster } from "../components/Toaster";
import { QueryFoldersGQL } from "../../graphql/client/queries";
import { useLazyQuery } from "@apollo/client";
import { Color } from "react-color";

const EntitiesContext = createContext<EntitiesContext | undefined>(undefined);

interface EntitiesContext {
  entitiesState: EntitiesState[];
  entitiesDispatch: Dispatch<EntitiesAction>;
}

export interface EntitiesState extends TreeNodeInfo {
  nodeData: {
    isVisible?: "CHECKED" | "INDETERMINATE" | "UNCHECKED";
    color?: Color;
    icon?: IconName;
    position?: [];
    type?: EntityType | "FOLDER" | "ADDFOLDER";
    parentFolder?: {
      id: string;
      name: string;
      color: Color;
      icon: IconName;
    };
  };
  childNodes?: EntitiesState[];
}

function forEachNode(
  nodes: EntitiesState[] | undefined,
  callback: (node: EntitiesState) => void
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
  nodes: EntitiesState[],
  path: NodePath,
  callback: (node: EntitiesState) => void
) {
  callback(Tree.nodeFromPath(path, nodes) as EntitiesState);
}

const EntitiesReducer = (
  state: EntitiesState[],
  action: EntitiesAction
): EntitiesState[] => {
  switch (action.type) {
    case "FETCH":
      return action.payload.data;
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

    case "SET_SELECT_VISIBLE":
      const newState4 = cloneDeep(state);
      const nodeProps = action.payload.props;
      // forNodeAtPath(
      //   newState4,
      //   nodeProps.path,
      //   (node) =>
      //     (node.nodeData.isVisible =
      //       node.nodeData.isVisible === "CHECKED" ? "UNCHECKED" : "CHECKED")
      // );

      const recursiveFolderCheck = (folder: EntitiesState, check: boolean) => {
        const tempFolder = cloneDeep(folder);
        if (tempFolder.childNodes) {
          tempFolder.childNodes.forEach((node, index) => {
            recursiveFolderCheck(node, check);
          });
        }
        tempFolder.nodeData.isVisible = check ? "CHECKED" : "UNCHECKED";
        // console.log(tempFolder);
        return tempFolder;
      };

      if (action.payload.isFolder) {
        forNodeAtPath(newState4, nodeProps.path, (node) => {
          node = recursiveFolderCheck(
            node,
            nodeProps.nodeData.isVisible === "UNCHECKED" ? true : false
          );
          console.log(node);
        });
      } else {
        forNodeAtPath(
          newState4,
          nodeProps.path,
          (node) =>
            (node.nodeData.isVisible =
              node.nodeData.isVisible === "CHECKED" ? "UNCHECKED" : "CHECKED")
        );
      }
      // TODO:  Indeterminate Checkboxes
      //   const recursiveSelect = (folder: EntitiesState) => {
      //     folder.childNodes?.forEach((node) => {
      //       node.nodeData.isVisible = "CHECKED";
      //       if (node.nodeData.type === "FOLDER") recursiveSelect(node);
      //     });
      //   };
      //   if (nodeProps.nodeData.type === "FOLDER") {
      //   }
      //   forNodeAtPath(newState4, nodeProps.path, (node) => {
      //     node.nodeData.isVisible = "CHECKED";
      //     const tempPath = nodeProps.path;
      //     for (let i = tempPath.length; i > 0; i--) {
      //       tempPath.pop();
      //       forNodeAtPath(newState4, tempPath, (childNode) => {
      //         childNode.nodeData.isVisible;
      //       });
      //     }
      //   });
      //   console.log(action.payload.props);
      //   newState4.forEach(
      //     (node) => (node.nodeData.isVisible = !node.nodeData.isVisible)
      //   );
      console.log(newState4);
      return newState4;
    default:
      return state;
  }
};

export const EntitiesContextProvider: React.FC = ({ children }) => {
  const [entitiesState, entitiesDispatch] = useReducer(EntitiesReducer, []);
  const { data: session } = useSession();
  const { mapState, mapDispatch } = useMapContext();
  const [queryFolders, { refetch }] = useLazyQuery(QueryFoldersGQL, {
    notifyOnNetworkStatusChange: true,
    onError(error) {
      AppToaster?.show({
        intent: Intent.DANGER,
        message: `Wystąpił problem: ${error}`,
      });
    },
    onCompleted(data: { map: Map }) {
      entitiesDispatch({
        type: "FETCH",
        payload: {
          data: renderFolder(data.map.rootFolder!),
        },
      });
    },
  });

  const renderFolder: (folder: Folder) => EntitiesState[] = (folder) => {
    const contents: EntitiesState[] = [];
    folder.childs?.forEach((folder, index) => {
      contents.push({
        id: folder.id!,
        label: folder.name!,
        icon: (
          <Icon
            icon={folder.icon}
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
            color={folder.color as string}
          />
        ),
        // TODO:  Indeterminate Checkboxes
        secondaryLabel: (props) => {
          return (
            <Checkbox
              checked={props.nodeData.isVisible === "CHECKED"}
              onChange={() =>
                entitiesDispatch({
                  type: "SET_SELECT_VISIBLE",
                  payload: { props, isFolder: true },
                })
              }
              style={{ marginBottom: "0" }}
            />
          );
        },
        childNodes: renderFolder(folder),
        isExpanded: false,
        hasCaret: true,
        nodeData: {
          isVisible: "CHECKED",
          color: folder.color!,
          icon: folder.icon!,
          type: "FOLDER",
        },
      });
    });
    folder.entities?.forEach((entity) => {
      contents.push({
        id: entity.id!,
        label: entity.name!,
        nodeData: {
          isVisible: "CHECKED",
          color: entity.color!,
          icon: entity.icon!,
          position: entity.position?.values,
          type: entity.type,
        },
        secondaryLabel: (props) => (
          <Checkbox
            checked={props.nodeData.isVisible === "CHECKED"}
            onChange={() =>
              entitiesDispatch({
                type: "SET_SELECT_VISIBLE",
                payload: { props, isFolder: false },
              })
            }
            style={{ marginBottom: "0" }}
          />
        ),
        icon: (
          <Icon
            icon={entity.icon}
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
            color={entity.color}
          />
        ),
      });
    });
    contents.push({
      id: `ADDFOLDER${folder.id}`,
      label: <span style={{ color: "white" }}>Dodaj folder</span>,
      icon: (
        <Icon
          icon="plus"
          intent={Intent.PRIMARY}
          className={Classes.TREE_NODE_ICON}
          color="white"
        />
      ),
      nodeData: {
        color: "white",
        icon: "plus",
        isVisible: "CHECKED",
        type: "ADDFOLDER",
        parentFolder: {
          color: folder.color!,
          icon: folder.icon!,
          id: folder.id!,
          name: folder.name!,
        },
      },
    });
    return contents;
  };

  useEffect(() => {
    if (mapState.currentMap) {
      queryFolders({ variables: { mapId: mapState.currentMap } });
      mapDispatch({
        type: "setRefetchFolders",
        payload: {
          data: refetch,
        },
      });
    } else {
      entitiesDispatch({
        type: "FETCH",
        payload: {
          data: [],
        },
      });
      mapDispatch({
        type: "setRefetchFolders",
        payload: {
          data: null,
        },
      });
    }
  }, [mapState.currentMap]);

  return (
    <EntitiesContext.Provider value={{ entitiesState, entitiesDispatch }}>
      {children}
    </EntitiesContext.Provider>
  );
};

export function useEntitiesContext() {
  const entitiesContext = useContext(EntitiesContext);
  if (!entitiesContext) throw new Error("Component beyond EntitiesContext!");
  return entitiesContext;
}
