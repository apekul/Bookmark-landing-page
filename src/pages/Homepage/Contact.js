import React, { useState } from "react";

import errorImg from "../../Assets/images/icon-error.svg";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const updateEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  // Basic email validation regex
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") return "Email is required.";
    if (!regex.test(value)) return "Whoops, make sure it's an email";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    setError(validationError);
  };

  return (
    <section className="flex justify-center bg-soft-blue text-white mt-[4rem]">
      <div className="container xl:w-[53rem] py-20 xl:h-[26rem] flex gap-5 flex-col justify-start items-center text-center">
        <header>
          <p className="uppercase font-light">
            35,000+&nbsp; already&nbsp; joined
          </p>
          <h1 className="text-3xl xl:text-4xl font-[500] py-5 xl:py-10">
            Stay up-to-date with what we’re doing
          </h1>
        </header>
        <form
          className="flex flex-col xl:flex-row items-start gap-5"
          onSubmit={handleSubmit}
        >
          <div className="bg-soft-red rounded-md relative ">
            <input
              placeholder="Enter your email adress"
              className={`p-3 pr-10 rounded-md w-full xl:w-[23rem] border-2 text-very-dark-blue focus:outline-none ${
                error ? "border-soft-red" : "border-white"
              }`}
              value={email}
              type="text"
              onChange={updateEmail}
            />
            {error && (
              <>
                <img
                  className="absolute top-4 right-4"
                  src={errorImg}
                  alt="error-icon"
                />
                <p className="text-start px-3 py-1 bg-soft-red xl:w-[23rem] text-sm rounded-b-md">
                  {error}
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            className="bg-soft-red border-2 w-full py-3 transition-all duration-150 border-soft-red text-white px-5 rounded-md hover:bg-white hover:text-soft-red"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
