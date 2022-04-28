import { LatLng } from "leaflet";

export interface OpenEditMarkerOverlay {
  type: "openEditMarkerOverlay";
  payload?: {
    position: LatLng;
  };
}
export interface CloseEditMarkerOverlay {
  type: "closeEditMarkerOverlay";
}
export interface OpenAuthOverlay {
  type: "openAuthOverlay";
}
export interface CloseAuthOverlay {
  type: "closeAuthOverlay";
}
export interface OpenFolderEditOverlay {
  type: "openFolderEditOverlay";
  payload: {
    path: number[];
  };
}
export interface CloseFolderEditOverlay {
  type: "closeFolderEditOverlay";
}

export type OverlayAction =
  | OpenEditMarkerOverlay
  | CloseEditMarkerOverlay
  | OpenAuthOverlay
  | CloseAuthOverlay
  | OpenFolderEditOverlay
  | CloseFolderEditOverlay;
