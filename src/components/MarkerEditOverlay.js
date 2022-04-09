import {
  Button,
  Classes,
  H3,
  InputGroup,
  Intent,
  Overlay,
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import React from "react";

function MarkerEditOverlay({ isOpen, setIsOpen }) {
  return (
    <Overlay
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      className={`${Classes.OVERLAY_SCROLL_CONTAINER} editOverlay bp4-dark`}
      portalClassName="overlay"
      transitionName="overlayAnimate"
    >
      <div className={`${Classes.CARD} ${Classes.ELEVATION_4}`}>
        <H3>Dodaj marker</H3>
        <InputGroup
          placeholder="Nazwa"
          leftIcon="map-marker"
          style={{ marginBottom: "10px" }}
        />
        <InputGroup placeholder="Koordynaty" leftIcon="map-marker" />
        <p>
          This is a simple container with some inline styles to position it on
          the screen. Its CSS transitions are customized for this example only
          to demonstrate how easily custom transitions can be implemented.
        </p>
        <p>
          Click the "Focus button" below to transfer focus to the "Show overlay"
          trigger button outside of this overlay. If persistent focus is
          enabled, focus will be constrained to the overlay. Use the key to move
          to the next focusable element to illustrate this effect.
        </p>
        <p>
          Click the "Make me scroll" button below to make this overlay's content
          really tall, which will make the overlay's container (but not the
          page) scrollable
        </p>
        <br />
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button
            intent={Intent.DANGER}
            onClick={() => setIsOpen(false)}
            style={{ margin: "" }}
          >
            Anuluj
          </Button>
          <Button style={{ margin: "" }}>Zapisz</Button>
        </div>
      </div>
    </Overlay>
  );
}

export default MarkerEditOverlay;
