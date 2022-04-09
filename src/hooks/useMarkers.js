import { cloneDeep } from "lodash-es";
import React, { useState } from "react";

const testingInitialState = [
  { position: [5376, 1288], deletePopup: false },
  { position: [226, 1212], deletePopup: false },
  { position: [3000, 2200], deletePopup: false },
];

function useMarkers() {
  const [markers, setMarkers] = useState(testingInitialState);

  const updateMarker = (index, marker) => {
    setMarkers((prevMarkers) => {
      const tempMarkers = cloneDeep(prevMarkers);
      tempMarkers[index] = marker;
      return tempMarkers;
    });
  };

  const deleteMarker = (index) => {
    setMarkers((prevMarkers) => {
      const tempMarkers = cloneDeep(prevMarkers);
      tempMarkers.splice(index, 1);
      return tempMarkers;
    });
  };

  const handleToggleDeletePopup = (index) => {
    const tempMarker = cloneDeep(markers[index]);
    tempMarker.deletePopup = !tempMarker.deletePopup;
    updateMarker(index, tempMarker);
  };

  const addMarker = (position) => {
    setMarkers((oldMarkers) => {
      const tempMarkers = cloneDeep(oldMarkers);
      tempMarkers.push({ position, deletePopup: false });
      return tempMarkers;
    });
  };

  return {
    markers,
    addMarker,
    handleToggleDeletePopup,
    deleteMarker,
  };
}

export default useMarkers;
