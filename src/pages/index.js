import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SideUi from "../components/SideUi/SideUi";
import MarkerEditOverlay from "../components/Edit/MarkerEditOverlay";
import AuthBoxOverlay from "../components/AuthBox/AuthBoxOverlay";
import { gql, useLazyQuery } from "@apollo/client";
import FolderEditOverlay from "../components/Edit/FolderEditOverlay";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  return (
    <main className="bp4-dark">
      <FolderEditOverlay />
      <AuthBoxOverlay />
      <MarkerEditOverlay />
      <SideUi />
      <MapWithNoSSR />
    </main>
  );
}
