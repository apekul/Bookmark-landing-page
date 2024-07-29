import React from "react";
import heroImg from "../../Assets/images/illustration-hero.svg";
function Hero() {
  return (
    <section className="flex justify-center relative overflow-hidden">
      <div className="container pt-32 pb-14 relative">
        <header className="h-[25rem] w-[30rem] flex flex-col  py-6">
          <h1 className="text-5xl font-semibold text-very-dark-blue">
            A Simple Bookmark Manager
          </h1>
          <p className="py-8 text-grayish-blue text-[1.10rem]">
            {" "}
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="">
            <button className="border-2 cursor-pointer rounded-md text-sm font-semibold shadow-md text-grayish-blue border-grayish-blue hover:border-soft-blue hover:text-soft-blue px-6 py-3 mr-5">
              Get it on Chrome
            </button>
            <button className="border-2 cursor-pointer rounded-md text-sm font-semibold shadow-md text-grayish-blue border-grayish-blue hover:border-soft-blue hover:text-soft-blue px-6 py-3 mr-5">
              Get it on Firefox
            </button>
          </div>
        </header>
        <img
          src={heroImg}
          alt="hero-img"
          className="absolute top-[5rem] right-[2rem] z-10"
        />
      </div>
      <div className="bg-soft-blue rounded-l-full w-[42rem] 2xl:w-[56rem] h-[22rem] absolute bottom-[0rem] -right-[9.5rem]"></div>
    </section>
  );
}

export default Hero;
