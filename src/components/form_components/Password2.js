import React from "react";

const Password2 = ({ show, handleShow }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="password_confirmation" className="text-gray-700">
        Password Confirmation
      </label>
      <div className="relative flex items-center mt-2">
        <input
          name="password2"
          id="password2"
          autoComplete="on"
          className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
          placeholder="Comfirm password"
          type="password"
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

export default Password2;
