import React from "react";

import WhatsNewCard from "@/components/card/whatsnewcard";

const tipsData = [
  {
    key: 1,
    title: "Market Growth and Investments",
    image: "https://i.ibb.co/p0vC9zR/1733395636.png",
    date: "Dec 05, 2024",
  },
];

const TipsSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Real Estate Tips
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Get expert advice and valuable tips to navigate the real estate
            market, whether you’re buying, selling, or investing in properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <WhatsNewCard data={tipsData} />
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
