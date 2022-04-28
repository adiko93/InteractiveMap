import { Menu, MenuItem } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { LatLng } from "leaflet";
import React, { useState } from "react";
import { useMapContext } from "../../context/MapContext";
import { useOverlayContext } from "../../context/OverlayContext";

const MapContextMenu: React.FC<{ toolMode: boolean }> = ({
  children,
  toolMode,
}) => {
  const { mapState, mapDispatch } = useMapContext();
  const [clickedPosition, setClickedPosition] = useState<LatLng>();
  const { overlayState, overlayDispatch } = useOverlayContext();
  return (
    <ContextMenu2
      onContextMenu={(e) => {
        if (mapState.mapRef?.current)
          setClickedPosition(
            mapState.mapRef.current.mouseEventToLatLng(e as never as MouseEvent)
          );
      }}
      disabled={toolMode}
      content={
        <Menu>
          <MenuItem
            icon="plus"
            text="Dodaj marker"
            onClick={() => {
              // markers.addMarker(clickedPosition)
              overlayDispatch({
                type: "openEditMarkerOverlay",
                payload: { position: clickedPosition! },
              });
            }}
          />
        </Menu>
      }
    >
      {children}
    </ContextMenu2>
  );
};

export default MapContextMenu;
