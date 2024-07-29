import React from "react";
import heroImg from "../../Assets/images/illustration-hero.svg";
function Hero() {
  return (
    <section className="flex justify-center relative overflow-hidden">
      <div className="container pt-10 xl:pt-32 pb-14 flex items-center xl:items-start flex-col relative">
        <header className="order-2 h-[25rem] xl:w-[30rem] flex items-center xl:items-start text-center xl:text-start flex-col py-20 xl:py-6">
          <h1 className="text-3xl sm:text-5xl font-semibold text-very-dark-blue">
            A Simple Bookmark Manager
          </h1>
          <p className="py-8 text-grayish-blue text-[1.10rem]">
            {" "}
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center">
            <button className="px-2 sm:px-6 text-nowrap py-3 mr-5 border-2 transition-all duration-150 cursor-pointer rounded-md text-sm font-semibold shadow-md text-white bg-soft-blue border-soft-blue hover:border-soft-blue hover:text-soft-blue hover:bg-white ">
              Get it on Chrome
            </button>
            <button className="px-2 sm:px-6 text-nowrap py-3 mr-5 border-2 transition-all duration-150 cursor-pointer rounded-md text-sm font-semibold shadow-md text-very-dark-blue bg-[#F7F7F7] border-[#F7F7F7] hover:border-very-dark-blue hover:bg-white ">
              Get it on Firefox
            </button>
          </div>
        </header>
        <div className="order-1 flex items-center justify-center">
          <img
            src={heroImg}
            alt="hero-img"
            className="flex xl:absolute top-[5rem] right-[2rem] z-10"
          />
          {/* TODO */}
          {/* <div className="block xl:hidden bg-soft-red rounded-l-full w-[42rem] 2xl:w-[58rem] h-[22rem] absolute top-[10rem] -right-[9.5rem]"></div> */}
        </div>
      </div>
      <div className="hidden xl:block bg-soft-blue rounded-l-full w-[42rem] 2xl:w-[58rem] h-[22rem] absolute bottom-0 -right-[9.5rem]"></div>
    </section>
  );
}

export default Hero;
