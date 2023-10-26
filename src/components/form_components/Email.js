import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="email" className="text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
        placeholder="Enter your email"
        required
      />
    </div>
  );
};

export default Email;
