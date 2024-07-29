import React from "react";

function FeatureTab({ item }) {
  return (
    <article className="w-full text-start items-center justify-end flex flex-col xl:flex-row xl:pl-5 xl:h-[30rem] z-10">
      {/* TODO */}
      <div className="hidden xl:block bg-soft-blue rounded-r-full w-[42rem] 2xl:w-[56rem] h-[22rem] absolute bottom-[2.5rem] -left-[9.5rem]"></div>
      <div className="flex-1 z-10 pb-10 xl:pb-0">
        <img src={item.img} alt={item.name + " image"} />
      </div>
      <header className="flex h-[20rem] w-full bg-re-d200 xl:w-[28rem] text-center xl:text-start items-center xl:items-start gap-5 flex-col justify-center">
        <h1 className="text-2xl  xl:text-3xl xltext-4xl font-semibold text-very-dark-blue">
          {item.title}
        </h1>
        <p className="">{item.description}</p>
        <button className="px-5 py-3 mt-2 rounded-md bg-soft-blue text-white font-[500] border-2 border-soft-blue hover:bg-white hover:text-soft-blue transition-all duration-150">
          More Info
        </button>
      </header>
    </article>
  );
}

export default FeatureTab;
