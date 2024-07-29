import React from "react";

function FeatureTab({ item }) {
  return (
    <article className="w-full text-start justify-end flex pl-5 h-[30rem] z-10">
      <div className="bg-soft-blue rounded-r-full w-[42rem] 2xl:w-[56rem] h-[22rem] absolute bottom-[2.5rem] -left-[9.5rem]"></div>
      <div className="flex-1 z-10">
        <img src={item.img} alt={item.name + " image"} />
      </div>
      <header className="flex h-[20rem] w-[28rem] items-start gap-5 flex-col justify-center">
        <h1 className="text-4xl font-semibold text-very-dark-blue">
          {item.title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
        <button className="px-5 py-3 mt-2 rounded-md bg-soft-blue text-white font-[500] border-2 border-soft-blue hover:bg-white hover:text-soft-blue transition-all duration-150">
          More Info
        </button>
      </header>
    </article>
  );
}

export default FeatureTab;
