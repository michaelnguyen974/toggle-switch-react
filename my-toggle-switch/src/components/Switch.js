import React from "react";
import "./Switch.css";
import cx from "classnames";

const Switch = ({ rounded = false, isToggled, onToggle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  // isToggled is the value of the input, onToggle is when the input changes
  return (
    <label className="switch">
      <input type="checkBox" checked={isToggled} onChange={onToggle} /> 
      <span className={sliderCX} />
    </label>
  );
};

export default Switch;
