import React, { useState } from "react";

const questions = [
  {
    name: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    name: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    name: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    name: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function Questions() {
  const [showAnswer, setShowAnswer] = useState(null);

  const updateShowAnswer = (index) => {
    if (showAnswer === index) return setShowAnswer(null);
    setShowAnswer(index);
  };

  return (
    <section className="flex justify-center">
      <div className="container w-[53rem] py-20 flex gap-5 flex-col items-center text-center">
        <header>
          <h1 className="text-4xl font-semibold text-very-dark-blue">
            Frequently Asked Questions
          </h1>
          <p className="py-8 text-grayish-blue text-[1.10rem]">
            Here are some of our FAQs. If you have any other questions <br />{" "}
            you’d like answered please feel free to email us.
          </p>
        </header>
        <ul className="w-full text-start border-b-2">
          {questions.map((question, index) => (
            <li
              key={index}
              className="py-5 border-t-2 cursor-pointer select-none text-very-dark-blue hover:text-soft-red"
              onClick={() => updateShowAnswer(index)}
            >
              <div className="flex justify-between pr-5">
                <p className=" font-semibold">{question.name}</p>
                <button
                  className={`${
                    showAnswer === index
                      ? "rotate-180 text-soft-red"
                      : "text-soft-blue"
                  } transition-all duration-150 `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <title>Arrow Icon</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </button>
              </div>
              {showAnswer === index && (
                <p className="pt-5 text-grayish-blue text-[1.10rem]">
                  {question.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
        <button className="px-5 mt-10 py-3 rounded-md bg-soft-blue text-white font-[500] border-2 border-soft-blue hover:bg-white hover:text-soft-blue transition-all duration-150">
          More Info
        </button>
      </div>
    </section>
  );
}

export default Questions;
