import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import MarkerEditPopup from "./components/MarkerEditOverlay";
import { Popover2 } from "@blueprintjs/popover2";
import { InputGroup } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";

const Pointer = () => {
  const CategorySelect = Select.ofType();
  const marker = useRef(null);
  const map = useMap();
  const handleEvent = {
    dragend() {
      const currMarker = marker.current;
      if (marker != null) {
        console.log(currMarker.getLatLng());
        // console.log(map.project(currMarker.getLatLng(), 3));
        // console.log(L.CRS.latLngToPoint(currMarker.getLatLng(), 1));
      }
    },
  };
  return (
    <Marker
      position={[-144, 144]}
      draggable
      ref={marker}
      eventHandlers={handleEvent}
    >
      <Popup className="edit_popup">
        <InputGroup
          small
          placeholder="Nazwa"
          leftIcon="map-marker"
          style={{
            paddingInline: "30px",
          }}
        />
      </Popup>
    </Marker>
  );
};

export default Pointer;
