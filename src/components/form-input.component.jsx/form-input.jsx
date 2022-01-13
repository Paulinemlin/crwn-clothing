import React from "react";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div>
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} mr-3 flex flex-col mb-2`}
        >
          {label}
        </label>
      ) : null}
      <input type="text" onChange={handleChange} {...otherProps} />
    </div>
  );
}
