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
      "Organize your bookmarks however you like. Our <br/> simple drag-and-drop interface gives you complete <br/> control over how you manage your favourite sites.",
    img: tab1Img,
  },
  {
    name: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved <br/> sites in no time at all. No need to trawl through all of <br/> your bookmarks.",
    img: tab2Img,
  },
  {
    name: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with <br/> others. Create a shareable link that you can send at <br/> the click of a button.",
    img: tab3Img,
  },
];

function Features() {
  const [tab, setTab] = useState(0);
  return (
    <section className="flex justify-center relative overflow-hidden">
      <div className="container pt-32 flex gap-5 flex-col items-center text-center">
        <header className="w-[35rem]">
          <h1 className="text-4xl font-semibold text-very-dark-blue">
            Features
          </h1>
          <p className="py-8 text-grayish-blue text-[1.10rem]">
            Our aim is to make it quick and easy for you to access your <br />
            favourite websites. Your bookmarks sync between your devices <br />{" "}
            so you can access them on the go.
          </p>
        </header>
        <ul className="flex mb-[3rem] border-b-2 items-center justify-center">
          {featuresItems.map((featureItem, index) => (
            <li
              key={index}
              onClick={() => setTab(index)}
              className={`px-5 w-[16rem] transition-all duration-150 pb-5 border-b-4 cursor-pointer text-very-dark-blue hover:text-soft-red ${
                index === tab
                  ? "border-red-500 border-solid"
                  : "border-transparent"
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
