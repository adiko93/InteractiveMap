import React from "react";
import { Classes, Dialog, DialogProps } from "@blueprintjs/core";

const Overlay: React.FC<DialogProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Dialog
      {...rest}
      className={`editOverlay bp4-dark ${className}`}
      portalClassName="overlay"
      transitionName="overlayAnimate"
    >
      <div className={`${Classes.CARD}`} style={{ overflow: "hidden" }}>
        {children}
      </div>
    </Dialog>
  );
};

export default Overlay;
