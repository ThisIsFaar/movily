import React from "react";

//
//name
//type
//handleChanfe fx
const Input = ({ value, label, name, type, handleInput, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={handleInput}
        type={type}
        name={name}
        className="form-control"
        id={name}
      />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
