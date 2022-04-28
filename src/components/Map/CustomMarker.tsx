import React from "react";
import { Marker } from "react-leaflet";
import {
  Alert,
  Icon,
  IconName,
  Intent,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { ContextMenu2 } from "@blueprintjs/popover2";
import tinycolor from "tinycolor2";

export interface CustomMarkerProps {
  position: [number, number];
  name: string;
  icon: IconName;
  color: string;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  color,
  icon,
  name,
  position,
}) => {
  const tinyColor = tinycolor(color);
  return (
    <>
      {/* <Alert
        cancelButtonText="Anuluj"
        confirmButtonText="Usuń"
        icon="trash"
        className="bp4-dark test"
        intent={Intent.DANGER}
        isOpen={marker.deletePopup}
        onCancel={() => markers.handleToggleDeletePopup(markerIndex)}
        onConfirm={() => markers.deleteMarker(markerIndex)}
        portalContainer={document.getElementById("overlay")!}
      >
        <p>Jesteś pewny że chcesz usunąć ten marker?</p>
      </Alert> */}
      <ContextMenu2
        content={
          <Menu>
            <MenuItem icon="edit" text="Edytuj marker" />
            <MenuItem
              icon="trash"
              text="Usuń marker"
              // onClick={() => markers.handleToggleDeletePopup(markerIndex)}
            />
          </Menu>
        }
      >
        {(ctxMenuProps) => (
          <>
            {ctxMenuProps.popover}
            <Marker
              // eventHandlers={{
              //   contextmenu(event) {
              //     event.originalEvent.persist = () => {};
              //     ctxMenuProps.onContextMenu(event.originalEvent);
              //   },
              // }}
              position={position}
              zIndexOffset={99999999}
              icon={L.divIcon({
                html: ReactDOMServer.renderToString(
                  <>
                    <div className={`marker`}>
                      <Icon
                        ref={ctxMenuProps.ref}
                        size={16}
                        icon={icon}
                        color={"white"}
                        style={
                          tinyColor.isLight()
                            ? {
                                stroke: "#5a5a5a28",
                                strokeWidth: "3px",
                                strokeLinejoin: "round",
                              }
                            : {}
                        }
                      />
                      <div
                        className="marker__background"
                        style={{
                          background: `linear-gradient(130deg, ${color} 0% 50%, ${color}1b 99.5% 100%)`,
                        }}
                      />
                      <img
                        alt="marker-shadow"
                        src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
                      />
                    </div>
                  </>
                ),
              })}
            ></Marker>
          </>
        )}
      </ContextMenu2>
    </>
  );
};

export default CustomMarker;
