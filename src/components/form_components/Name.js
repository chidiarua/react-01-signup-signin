import React from "react";

const Name = () => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="name" className="text-gray-700">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
        placeholder="Enter your name"
        required
      />
    </div>
  );
};

export default Name;
