import React from "react";

function ValidationError(props) {
  return (
    <div style={{ color: "red" }}>
      {" "}
      <span> {props.children}</span>
    </div>
  );
}

export default ValidationError;
