import { LatLng } from "leaflet";
import { createContext, Dispatch, useContext, useReducer } from "react";
import { OverlayAction } from "../types";

const OverlayContext = createContext<OverlayContext | undefined>(undefined);

interface OverlayContext {
  overlayState: OverlayState;
  overlayDispatch: Dispatch<OverlayAction>;
}

interface OverlayState {
  editMarker: boolean;
  auth: boolean;
  folderEdit: boolean;
  folderEditPath: number[] | null;
  clickedPosition: LatLng | null;
}

const OverlayStateInitial = {
  editMarker: false,
  auth: false,
  folderEdit: false,
  folderEditPath: null,
  clickedPosition: null,
};

const overlayReducer = (
  state: OverlayState,
  action: OverlayAction
): OverlayState => {
  switch (action.type) {
    case "openAuthOverlay":
      return {
        ...state,
        auth: true,
      };
    case "closeAuthOverlay":
      return {
        ...state,
        auth: false,
      };
    case "openFolderEditOverlay":
      return {
        ...state,
        folderEdit: true,
        folderEditPath: action.payload.path,
      };
    case "closeFolderEditOverlay":
      return {
        ...state,
        folderEdit: false,
      };
    case "openEditMarkerOverlay":
      return {
        ...state,
        editMarker: true,
        clickedPosition: action.payload?.position || null,
      };
    case "closeEditMarkerOverlay":
      return {
        ...state,
        editMarker: false,
      };
    default:
      return state;
  }
};

export const OverlayContextProvider: React.FC = ({ children }) => {
  const [overlayState, overlayDispatch] = useReducer(
    overlayReducer,
    OverlayStateInitial
  );
  return (
    <OverlayContext.Provider value={{ overlayState, overlayDispatch }}>
      {children}
    </OverlayContext.Provider>
  );
};

export function useOverlayContext() {
  const overlayContext = useContext(OverlayContext);
  if (!overlayContext) throw new Error("Component beyond OverlayContext!");
  return overlayContext;
}
