import { MapContainer, ImageOverlay } from "react-leaflet";
import { useRef, useState } from "react";
import L from "leaflet";
import Pointer from "./Pointer";
import SideUi from "./components/SideUi";
import { ContextMenu2 } from "@blueprintjs/popover2";
import {
  Button,
  Classes,
  H3,
  Intent,
  Menu,
  MenuItem,
  Overlay,
} from "@blueprintjs/core";
import CustomMarker from "./components/Map/CustomMarker";
import useMarkers from "./hooks/useMarkers";
import MarkerEditPopup from "./components/MarkerEditOverlay";
import MarkerEditOverlay from "./components/MarkerEditOverlay";

function App() {
  const [clickedPosition, setClickedPosition] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const markers = useMarkers();

  const bottomLeft = [-4000, -4000];
  const topRight = [8000, 6000];
  const bounds = [bottomLeft, topRight];

  const map = useRef(null);

  return (
    <>
      <SideUi data={markers} />
      <MarkerEditOverlay isOpen={openEdit} setIsOpen={setOpenEdit} />
      <ContextMenu2
        onContextMenu={(e) => {
          setClickedPosition(map.current.mouseEventToLatLng(e));
        }}
        content={
          <Menu>
            <MenuItem
              icon="plus"
              text="Dodaj marker"
              onClick={() => {
                // markers.addMarker(clickedPosition)
                setOpenEdit(true);
              }}
            />
          </Menu>
        }
      >
        <MapContainer
          whenCreated={(mapInstance) => {
            map.current = mapInstance;
          }}
          center={[51.505, -0.09]}
          zoom={-3}
          minZoom={-4}
          maxBounds={bounds}
          bounds={bounds}
          crs={L.CRS.Simple}
        >
          <ImageOverlay url="./map.jpg" bounds={bounds} />

          {markers.markers.map((marker, index) => (
            <CustomMarker
              markers={markers}
              markerIndex={index}
              marker={marker}
            />
          ))}

          <Pointer />
        </MapContainer>
      </ContextMenu2>
    </>
  );
}

export default App;
