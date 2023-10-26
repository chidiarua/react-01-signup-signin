import React from "react";
import { useState } from "react";
import ImageVec from "./form_components/ImageVec";
import Name from "./form_components/Name";
import Email from "./form_components/Email";
import Password1 from "./form_components/Password1";
import Terms from "./form_components/Terms";
import SignUpButton from "./form_components/SignUpButton";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="bg-gray-200 w-full min-h-screen md:flex md:flex-row-reverse  md:items-center">
      <ImageVec />

      <div className="w-5/6 mt-3 mx-auto px-5 py-8 md:w-1/3">
        <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
          Sign Up
        </h2>
        <p className="text-center text-xs text-gray-600 mt-2">
          Already have an account?<span className="mr-1"></span>
          <a
            href="/signin"
            className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
            title="Sign In"
          >
            Login
          </a>
        </p>

        <form className="my-8 text-sm">
          <Name />
          <Email />
          <Password1 handleShow={handleShow} show={show} />
          <Terms />
          <SignUpButton />
        </form>
      </div>
    </div>
  );
};

export default Signup;
