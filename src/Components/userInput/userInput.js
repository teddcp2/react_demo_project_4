import React from "react";

export const UserInput = (props) => {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
