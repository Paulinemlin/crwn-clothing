import React from "react";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    {...otherProps}
    type="button"
    className={`m-2 inline-flex items-center px-4 py-2 border border-transparent
    text-base font-medium rounded-md shadow-sm text-white 
    hover:bg-yellow-500 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
      isGoogleSignIn ? "bg-blue-600" : "bg-green-200"
    }
    `}
  >
    {children}
  </button>
);

export default CustomButton;
