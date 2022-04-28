import { H2, PanelStack2, Panel, PanelProps } from "@blueprintjs/core";
import React, { useState } from "react";
import { useOverlayContext } from "../../context/OverlayContext";
import Overlay from "../Overlay";
import LoginPanel from "./LoginPanel";

export interface AuthPanelProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const AuthBoxOverlay = () => {
  const [title, setTitle] = useState("Zaloguj się");
  const { overlayState, overlayDispatch } = useOverlayContext();
  const initialPanel: Panel<AuthPanelProps> = {
    props: {
      setTitle,
    },
    renderPanel: LoginPanel,
    title: "Zaloguj się",
  };
  const [currentPanelStack, setCurrentPanelStack] = useState<
    Array<Panel<AuthPanelProps | Object> | any>
  >([initialPanel]);

  const addToPanelStack = (newPanel: Panel<AuthPanelProps | Object>) =>
    setCurrentPanelStack((stack) => [...stack, newPanel]);

  const removeFromPanelStack = () =>
    setCurrentPanelStack((stack) => stack.slice(0, -1));

  return (
    <Overlay
      isOpen={overlayState.auth}
      title={title}
      onClose={() => overlayDispatch({ type: "closeAuthOverlay" })}
    >
      <div
        className="authBox"
        style={{
          height: title === "Zaloguj się" ? "300px" : "240px",
          transition: "all 0.2s linear",
        }}
      >
        <PanelStack2
          onOpen={addToPanelStack}
          onClose={removeFromPanelStack}
          renderActivePanelOnly
          showPanelHeader={false}
          stack={currentPanelStack}
        />
      </div>
    </Overlay>
  );
};

export default AuthBoxOverlay;
