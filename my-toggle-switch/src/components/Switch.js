import React from "react";
import "./Switch.css";
import cx from "classnames";

const Switch = ({ rounded = false }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });

  return (
    <label className="switch">
      <input type="checkBox" />
      <span className="slider rounded" />
    </label>
  );
};

export default Switch;
