import React from "react";
import { EntitiesContextProvider } from "./EntitiesContext";
import { MapContextProvider } from "./MapContext";
import { OverlayContextProvider } from "./OverlayContext";

const ContextProviders: React.FC = ({ children }) => {
  return (
    <OverlayContextProvider>
      <MapContextProvider>
        <EntitiesContextProvider>{children}</EntitiesContextProvider>
      </MapContextProvider>
    </OverlayContextProvider>
  );
};

export default ContextProviders;
