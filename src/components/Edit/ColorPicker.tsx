import React, { HTMLAttributes, ReactPropTypes, useState } from "react";
import reactCSS from "reactcss";
import { Color, ColorChangeHandler, SketchPicker } from "react-color";

interface ColorPickerProps {
  color: Color;
  onChange: ColorChangeHandler;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `${color}`,
      },
      swatch: {
        padding: "5px",
        background: "#464d58",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const handleClick = () => {
    setDisplayColorPicker((current) => !current);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover as React.CSSProperties}>
          <div
            style={styles.cover as React.CSSProperties}
            onClick={handleClose}
          />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      ) : null}
    </>
  );
};

export default ColorPicker;
