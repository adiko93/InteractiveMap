import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useRef } from "react";
import { InputGroup } from "@blueprintjs/core";

const Pointer = () => {
  // function toGtaCoords({ lat, lng }) {
  //   return [8000 + 64 * lat, -4000 + 64 * lng];
  // }

  const marker = useRef<any | null>(null);
  const map = useMap();
  const handleEvent = {
    dragend() {
      const currMarker = marker.current;
      if (currMarker != null) {
        // console.log(toGtaCoords(currMarker.getLatLng()));
        console.log(currMarker.getLatLng());
        const { lat, lng } = currMarker.getLatLng();
        console.log(map.project([lat, lng], 3));
        // console.log(map.project(currMarker.getLatLng(), 3));
        // console.log(L.CRS.latLngToPoint(currMarker.getLatLng(), 1));
      }
    },
  };
  return (
    <Marker
      position={[-7.765625, 4.171875]}
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
