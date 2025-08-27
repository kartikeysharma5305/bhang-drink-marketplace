import React, { useState } from "react";
import faqsData from "../assets/data/FAQs";

const Faq = () => {
  // State to track which FAQ item is currently open (expanded)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    // If the clicked FAQ is already open, close it; otherwise, open the clicked FAQ
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full p-8">
        {/* FAQ Title */}
        <h1 className="text-center font-[Playwrite_HU] text-3xl font-bold text-[#23022E]">
          FAQ
        </h1>
        {/* FAQ List */}
        <div className="mt-8 space-y-8 text-center">
          {faqsData.map((faq, index) => (
            // Each FAQ item is clickable and toggles its answer
            <div
              key={index}
              className="cursor-pointer border-b-2 border-[#23022E] py-4"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center justify-between">
                {/* FAQ Question */}
                <span className="font-[Playwrite_HU] font-bold text-[#23022E]">
                  {faq.question}
                </span>
                {/* Icon changes based on whether the answer is open or closed */}
                <i
                  className={`fas fa-${
                    openIndex === index ? "minus" : "plus"
                  } text-[#23022E]`}
                ></i>
              </div>
              {/* FAQ Answer: expands/collapses with animation */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <span className="mt-3 block max-w-[65rem] text-left font-[poppins] text-sm font-bold text-[#23022E]">
                  {faq.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
