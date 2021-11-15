import React from "react";

const Confirmation = ({ children, onConfirmation, onCancel }) => {
  return (
    <div role="dialog">
      <h1>Confirmation</h1>
      <div>{children}</div>
      <button onClick={onConfirmation}>OK</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default Confirmation;
