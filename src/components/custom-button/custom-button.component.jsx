import React from "react";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    {...otherProps}
    type="button"
    className={`
    mt-4 mr-4  
    px-4 py-2 border border-transparent
    text-base font-medium shadow-sm 
    text-center text-white 
    hover:bg-gray-800 focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-gray-500 

    ${isGoogleSignIn ? "bg-blue-600 hover:bg-blue-800" : "bg-gray-800"}
    ${inverted ? "bg-gray-800 hover:bg-gray-900 w-full text-center   hover:block" : ""}
    
    `}
  >
    {children}
  </button>
);

export default CustomButton;
