import React from "react";

const Terms = () => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="remember_me"
        id="remember_me"
        className="mr-2 focus:ring-0 rounded h-3 w-3"
        required
      />
      <label htmlFor="remember_me" className="text-gray-700 text-xs">
        I accept the<span className="mr-1"></span>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          terms
        </a>
        <span className="mr-1"></span>
        and<span className="mr-1"></span>
        <a
          href="/"
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          privacy policy
        </a>
      </label>
    </div>
  );
};

export default Terms;
