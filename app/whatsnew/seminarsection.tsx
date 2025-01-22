import React from "react";

import WhatsNewCard from "@/components/card/whatsnewcard";

const seminarsData = [
  {
    key: 1,
    title: "Seminar",
    image: "https://i.ibb.co/tQgYkct/1733384957.jpg",
    date: "Dec 05, 2024",
  },
  {
    key: 2,
    title: "Smart Investing",
    image: "https://i.ibb.co/QKZ6nNF/1733385002.jpg",
    date: "Dec 05, 2024",
  },
  {
    key: 3,
    title: "Smart Investing",
    image: "https://i.ibb.co/LQwYTFx/1733385035.jpg",
    date: "Dec 05, 2024",
  },
  {
    key: 4,
    title: "Seminar",
    image: "https://i.ibb.co/DwKFNh5/1733385051.jpg",
    date: "Dec 05, 2024",
  },
];

const SeminarSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Seminars
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Explore our engaging seminars designed to inspire, educate, and
            empower individuals in real estate and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <WhatsNewCard data={seminarsData} />
        </div>
      </div>
    </section>
  );
};

export default SeminarSection;
