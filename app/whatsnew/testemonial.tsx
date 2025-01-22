import React from "react";

import TestimonyCard from "@/components/card/testimony";
const testemonialData = [
  {
    key: 1,
    message:
      "Gabriel Mercado was incredible! He assisted me every step of the way in selling my property quickly and effortlessly. His expertise and dedication made all the difference. Highly recommended!",
    name: "- John and Sarah Doe",
  },
  {
    key: 2,
    message:
      "I couldn't have asked for a better experience! Gabriel Mercado helped me find the perfect home and made the entire process stress-free. Thank you for your patience and professionalism!",
    name: "- Emily Johnson",
  },
  {
    key: 3,
    message:
      "Working with Gabriel Mercado was the best decision I made when selling my property. He handled everything with care and kept me informed throughout the process. Truly exceptional service!",
    name: "- Michael Smith",
  },
  {
    key: 4,
    message:
      "Gabriel was amazing! From finding potential buyers to closing the deal, he went above and beyond to ensure everything went smoothly. I highly recommend his services!",
    name: "- Linda and Robert Brown",
  },
];
const TestemonialSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Testimonies
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Hear from our satisfied clients about their experience with us.
          </p>
        </div>

        <div className="py-12 ">
          <TestimonyCard testimony={testemonialData} />
        </div>
      </div>
    </section>
  );
};

export default TestemonialSection;
