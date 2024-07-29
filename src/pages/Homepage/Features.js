import React, { useState } from "react";

// Components
import FeatureTab from "./FeatureTab";

// tab images
import tab1Img from "../../Assets/images/illustration-features-tab-1.svg";
import tab2Img from "../../Assets/images/illustration-features-tab-2.svg";
import tab3Img from "../../Assets/images/illustration-features-tab-3.svg";

const featuresItems = [
  {
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: tab1Img,
  },
  {
    name: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: tab2Img,
  },
  {
    name: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: tab3Img,
  },
];

function Features() {
  const [tab, setTab] = useState(0);
  return (
    <section
      className="flex justify-center relative overflow-hidden"
      id="Features"
    >
      <div className="container my-[5rem] xl:my-[8rem] flex gap-5 flex-col items-center text-center">
        <header className="xl:w-[35rem]">
          <h1 className="text-4xl font-semibold text-very-dark-blue">
            Features
          </h1>
          <p className="py-8 text-grayish-blue text-[1.10rem]">
            Our aim is to make it quick and easy for you to access your <br />
            favourite websites. Your bookmarks sync between your devices <br />{" "}
            so you can access them on the go.
          </p>
        </header>
        <ul className="flex mb-[3rem] gap-5 xl:gap-0 flex-col xl:flex-row xl:border-b-2 items-center justify-center">
          {featuresItems.map((featureItem, index) => (
            <li
              key={index}
              onClick={() => setTab(index)}
              className={`px-5 w-[14rem] xl:w-[16rem] transition-all duration-150 pb-3 border-b-4 cursor-pointer text-very-dark-blue hover:text-soft-red ${
                index === tab
                  ? "border-red-500 border-solid"
                  : "border-gray-200 xl:border-transparent border-solid"
              }`}
            >
              {featureItem.name}
            </li>
          ))}
        </ul>
        <FeatureTab item={featuresItems[tab]} />
      </div>
    </section>
  );
}

export default Features;
