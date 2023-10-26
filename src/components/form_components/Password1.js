import React from "react";

const Password1 = ({ show, handleShow }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="password" className="text-gray-700">
        Password
      </label>
      <div className="relative flex items-center mt-2">
        <input
          name="password"
          id="password"
          autoComplete="on"
          className="flex-1 p-2 border pr-10 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
          placeholder="Enter your password"
          type={show ? "text" : "password"}
          required
        />
        <label
          onClick={handleShow}
          className="absolute right-2 font-semibold text-xs cursor-pointer"
        >
          {show ? "hide" : "show"}
        </label>
      </div>
    </div>
  );
};

export default Password1;
