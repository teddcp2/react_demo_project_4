import React, { Fragment } from "react";
import "./userOutput.css";

export const UserOutput = ({ name, age, callIncrement, callDecrement }) => {
  return (
    <Fragment>
      <p>{name}</p>
      <p>
        <button onClick={callIncrement}>+</button>&nbsp; &nbsp;{age}{" "}
        &nbsp;&nbsp;
        <button onClick={callDecrement}>-</button>{" "}
      </p>
    </Fragment>
  );
};
