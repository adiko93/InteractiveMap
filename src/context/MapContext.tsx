// src/context/state.js
import {
  createContext,
  Dispatch,
  MutableRefObject,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useSession, signOut } from "next-auth/react";
import { Folder, Map, MapAction, User } from "../types";
import {
  ApolloQueryResult,
  OperationVariables,
  useLazyQuery,
} from "@apollo/client";
import {
  QueryFoldersGQL,
  QueryUserMapsGQL,
} from "../../graphql/client/queries";
import { AppToaster } from "../components/Toaster";
import { Intent } from "@blueprintjs/core";

const MapContext = createContext<MapContext | undefined>(undefined);

interface MapContext {
  mapState: MapState;
  mapDispatch: Dispatch<MapAction>;
}

interface MapState {
  maps: Map[];
  mapRef: MutableRefObject<L.Map | null> | null;
  currentMap: string | null;
  refetchFolders:
    | ((variables?: Partial<OperationVariables> | undefined) => Promise<
        ApolloQueryResult<{
          map: Map;
        }>
      >)
    | null;
}

const MapStateInitial = {
  maps: [],
  mapRef: null,
  currentMap: null,
  refetchFolders: null,
};

const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "setMapRef":
      return { ...state, mapRef: action.payload.ref };
    case "fetchMap":
      return { ...state, maps: action.payload.data };
    case "currentMap":
      return { ...state, currentMap: action.payload.data };
    case "setRefetchFolders":
      return { ...state, refetchFolders: action.payload.data };
    default:
      return state;
  }
};

export const MapContextProvider: React.FC = ({ children }) => {
  const [mapState, mapDispatch] = useReducer(mapReducer, MapStateInitial);
  const { data: session } = useSession();
  const [fetchMaps] = useLazyQuery(QueryUserMapsGQL, {
    onError(error) {
      AppToaster?.show({
        intent: Intent.DANGER,
        message: `Wystąpił problem z twoją sesją, zostałeś wylogowany. ${error}`,
      });
      signOut();
    },
    onCompleted(data: { me: User }) {
      mapDispatch({
        type: "fetchMap",
        payload: {
          data: data.me?.mapsCreated?.map((map) => ({
            id: map.id,
            color: map.color,
            icon: map.icon,
            name: map.name,
            rootFolder: map.rootFolder,
          }))!,
        },
      });
    },
  });

  useEffect(() => {
    if (session) {
      fetchMaps();
    }
  }, [session]);

  return (
    <MapContext.Provider value={{ mapState, mapDispatch }}>
      {children}
    </MapContext.Provider>
  );
};

export function useMapContext() {
  const mapContext = useContext(MapContext);
  if (!mapContext) throw new Error("Component beyond MapContext!");
  return mapContext;
}
