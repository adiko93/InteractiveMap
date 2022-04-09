import React from "react";
import { Marker } from "react-leaflet";
import { Alert, Icon, Intent, Menu, MenuItem } from "@blueprintjs/core";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { ContextMenu2 } from "@blueprintjs/popover2";
const CustomMarker = ({ markers, marker, markerIndex }) => {
  return (
    <>
      <Alert
        cancelButtonText="Anuluj"
        confirmButtonText="Usuń"
        icon="trash"
        className="bp4-dark test"
        intent={Intent.DANGER}
        isOpen={marker.deletePopup}
        onCancel={() => markers.handleToggleDeletePopup(markerIndex)}
        onConfirm={() => markers.deleteMarker(markerIndex)}
        portalContainer={document.getElementById("overlay")}
      >
        <p>Jesteś pewny że chcesz usunąć ten marker?</p>
      </Alert>
      <ContextMenu2
        content={
          <Menu>
            <MenuItem icon="edit" text="Edytuj marker" />
            <MenuItem
              icon="trash"
              text="Usuń marker"
              onClick={() => markers.handleToggleDeletePopup(markerIndex)}
            />
          </Menu>
        }
      >
        {(ctxMenuProps) => (
          <>
            {ctxMenuProps.popover}
            <Marker
              eventHandlers={{
                contextmenu(event) {
                  event.originalEvent.persist = () => {};
                  ctxMenuProps.onContextMenu(event.originalEvent);
                },
              }}
              position={marker.position}
              zIndexOffset={99999999}
              icon={L.divIcon({
                html: ReactDOMServer.renderToString(
                  <>
                    <Icon
                      className={`marker`}
                      ref={ctxMenuProps.ref}
                      size={16}
                      icon="person"
                      color="white"
                    />
                    <img
                      alt="marker-shadow"
                      src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
                    />
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
