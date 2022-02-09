import React from "react";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="mt-2">
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} 
          mr-3 round-0 
          flex text-gray-700 flex-col mb-2`}
        >
          {label}
        </label>
      ) : null}
      <input
        type="text"
        className="
        bg-white p-3
        border-solid border border-gray-600 w-full
        focus:outline-gray-200 "
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
}
