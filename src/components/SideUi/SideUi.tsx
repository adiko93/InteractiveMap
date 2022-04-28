import React from "react";
import { Divider, Panel, PanelStack2 } from "@blueprintjs/core";
import MapsPanel from "./MapsPanel";
import AuthSection from "./AuthSection";
import { useMapContext } from "../../context/MapContext";

const SideUi: React.FC = () => {
  const { mapDispatch, mapState } = useMapContext();
  const [currentPanelStack, setCurrentPanelStack] = React.useState<
    Panel<object>[]
  >([
    {
      renderPanel: MapsPanel,
      title: "Mapy",
    },
  ]);
  const addToPanelStack = (newPanel: Panel<object>) =>
    setCurrentPanelStack((stack) => [...stack, newPanel]);

  const removeFromPanelStack = () => {
    setCurrentPanelStack((stack) => stack.slice(0, -1));
    mapDispatch({
      type: "currentMap",
      payload: {
        data: null,
      },
    });
  };

  return (
    <div className="sideUi">
      <AuthSection />

      <PanelStack2
        className="sideUi__panelStack"
        onOpen={addToPanelStack}
        onClose={removeFromPanelStack}
        renderActivePanelOnly
        stack={currentPanelStack}
      />
    </div>
  );
};

export default SideUi;
