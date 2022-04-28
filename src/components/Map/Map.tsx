import { MapContainer, MapConsumer } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import L, { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import Pointer from "./Pointer";
import { useMapContext } from "../../context/MapContext";
import { TileLayer } from "react-leaflet";

import Toolbar from "./Toolbar";

import "leaflet-paintpolygon";
import "leaflet-pather";
import MapContextMenu from "./MapContextMenu";
import { Entity, EntityType, Folder } from "../../types";
import CustomMarker, { CustomMarkerProps } from "./CustomMarker";
import { TreeNodeInfo } from "@blueprintjs/core";
import {
  EntitiesState,
  useEntitiesContext,
} from "../../context/EntitiesContext";

function Map() {
  const bounds: LatLngBoundsExpression = [
    [-0, -0],
    [-13.9375, 9.6875],
  ];
  const [toolMode, setToolMode] = useState(false);
  const [addedPather, setAddedPather] = useState(false);

  const { mapState, mapDispatch } = useMapContext();

  const { entitiesState } = useEntitiesContext();
  const map = useRef<L.Map | null>(null);
  const paintPolygon = useRef(null);
  const paintPath = useRef<any | null>(null);

  useEffect(() => {
    if (map.current)
      mapDispatch({
        type: "setMapRef",
        payload: { ref: map },
      });
  }, [map.current]);

  const getMarkers: (folders: EntitiesState[]) => CustomMarkerProps[] = (
    folders
  ) => {
    const entries: CustomMarkerProps[] = [];

    const recursiveMarkersFind = (folder: EntitiesState[]) => {
      folder.forEach((entry) => {
        if (entry.childNodes && entry.childNodes?.length > 0)
          recursiveMarkersFind(entry.childNodes);
        if (
          !entry?.hasCaret &&
          entry.nodeData.type === ("MARKER" as unknown as EntityType) &&
          entry.nodeData?.isVisible === "CHECKED"
        )
          entries.push({
            color: entry.nodeData.color as string,
            icon: entry.nodeData.icon,
            name: entry.label as string,
            position: entry.nodeData.position as never as [number, number],
          });
      });
    };
    recursiveMarkersFind(folders);
    return entries;
  };

  return (
    <>
      <MapContextMenu toolMode={toolMode}>
        <MapContainer
          whenCreated={(mapInstance) => {
            if (!map.current) map.current = mapInstance;
            if (!paintPolygon.current)
              paintPolygon.current = L.control
                .paintPolygon({
                  menu: false,
                })
                .addTo(mapInstance);
            if (!addedPather && mapInstance?.style) {
              console.log(map.current);
              paintPath.current = new L.Pather({
                smoothFactor: 5,
                mode: L.Pather.MODE.DELETE,
                moduleClass: "leaflet-pather",
              });
              mapInstance.addLayer(paintPath.current);
              setAddedPather(true);
            }
          }}
          center={[-7.765625, 4.171875]}
          zoom={7}
          minZoom={6}
          maxZoom={11}
          maxBounds={bounds}
          bounds={bounds}
          crs={L.CRS.Simple}
        >
          <TileLayer
            url={`./tiles/{z}/{x}/{y}.png`}
            tileSize={256}
            bounds={bounds}
            zoomOffset={-4}
          ></TileLayer>
          <MapConsumer>
            {(mapInstance) => {
              // if (paintPath.current)
              //   paintPath.current.setMode(L.Pather.MODE.CREATE);
              // map.current = mapInstance;

              // if (!addedPather) {
              //   mapInstance.addLayer(paintPath);
              //   setAddedPather(true);
              // }
              // map.addLayer(freeDraw);
              return null;
            }}
          </MapConsumer>
          {entitiesState.length > 0
            ? getMarkers(entitiesState).map((marker, index) => (
                <CustomMarker
                  color={marker.color!}
                  name={marker.name!}
                  position={marker.position}
                  icon={marker.icon!}
                  key={index}
                />
              ))
            : null}

          {/* {markers.markers.map((marker, index) => (
            <CustomMarker
              key={index}
              markers={markers}
              markerIndex={index}
              marker={marker}
            />
          ))} */}
          <Pointer />
        </MapContainer>
      </MapContextMenu>
      <Toolbar
        paintPolygon={paintPolygon}
        setToolMode={setToolMode}
        paintPath={paintPath}
        map={map}
      />
    </>
  );
}

export default Map;
