import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IconName, ITreeNodeProps } from "@blueprintjs/core";
import { Color } from "react-color";
import { EntitiesState } from "../context/EntitiesContext";
import { EntityType } from "./Entity";
import { Map } from "./Map";

export type NodePath = number[];

export interface TreeNodeProps extends ITreeNodeProps {
  nodeData: {
    isVisible: "CHECKED" | "INDETERMINATE" | "UNCHECKED";
    color: Color;
    icon: IconName;
    position?: [];
    type?: EntityType | "FOLDER";
  };
  childNodes?: EntitiesState[];
}

export type EntitiesAction =
  | {
      type: "SET_IS_EXPANDED";
      payload: { path: NodePath; isExpanded: boolean };
    }
  | { type: "DESELECT_ALL" }
  | {
      type: "SET_IS_SELECTED";
      payload: { path: NodePath; isSelected: boolean };
    }
  | {
      type: "FETCH";
      payload: { data: EntitiesState[] };
    }
  | {
      type: "SET_SELECT_VISIBLE";
      payload: { props: TreeNodeProps; isFolder: boolean };
    };
