import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Button = (onClick, icon, label) => {
  return (
    <>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        <label>{label}</label>
      </button>
    </>
  );
};
