import React from "react";

// Img's
import chromeIcon from "../../Assets/images/logo-chrome.svg";
import firefoxIcon from "../../Assets/images/logo-firefox.svg";
import operaIcon from "../../Assets/images/logo-opera.svg";
import dots from "../../Assets/images/bg-dots.svg";

const downloadItems = [
  { name: "Chrome", version: "62", img: chromeIcon },
  { name: "Firefox", version: "55", img: firefoxIcon },
  { name: "Opera", version: "46", img: operaIcon },
];

function Download() {
  return (
    <section className="flex justify-center relative overflow-hidden">
      <div className="container my-[8rem] flex flex-col items-center justify-center">
        <header className="w-[35rem] text-center">
          <h1 className="text-4xl font-semibold text-very-dark-blue">
            Download the extension
          </h1>
          <p className="py-8 text-grayish-blue text-[1.10rem]">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </header>
        <ul className="flex gap-8 mt-5">
          {downloadItems.map((item, index) => (
            <li
              key={index}
              className={`py-5 w-[18rem] h-[23rem] flex flex-col items-center justify-between bg-white rounded-lg shadow-lg `}
              style={{ marginTop: index > 0 && `${3 * index}rem` }}
            >
              <div className="flex items-center flex-col pt-5">
                <img
                  src={item.img}
                  alt={item.name + "logo"}
                  className="w-[9rem] px-5"
                />
                <span className="p-5 text-center">
                  <p className="text-2xl pb-3 font-semibold text-very-dark-blue">
                    Add to {item.name}
                  </p>
                  <p className="text-grayish-blue text-[1.10rem]">
                    Minimum version {item.version}
                  </p>
                </span>
              </div>
              <img src={dots} alt="background-dots" className="pb-5" />
              <button className="px-5 py-2 rounded-md text-white bg-soft-blue hover:bg-white border-2 border-soft-blue hover:text-soft-blue transition-all duration-150">
                Add & Install Extension
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Download;
