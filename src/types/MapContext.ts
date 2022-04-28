import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MutableRefObject } from "react";
import { Map } from "./Map";

export interface MapFetchAction {
  type: "fetchMap";
  payload: {
    data: Map[];
  };
}
export interface SetMapRefAction {
  type: "setMapRef";
  payload: {
    ref: MutableRefObject<L.Map | null>;
  };
}
export interface ChangeCurrentMap {
  type: "currentMap";
  payload: {
    data: string | null;
  };
}

export interface RefetchFolders {
  type: "setRefetchFolders";
  payload: {
    data:
      | ((variables?: Partial<OperationVariables> | undefined) => Promise<
          ApolloQueryResult<{
            map: Map;
          }>
        >)
      | null;
  };
}

export type MapAction =
  | MapFetchAction
  | SetMapRefAction
  | ChangeCurrentMap
  | RefetchFolders;
