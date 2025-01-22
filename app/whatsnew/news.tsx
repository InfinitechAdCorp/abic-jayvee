import React from "react";

import WhatsNewCard from "@/components/card/whatsnewcard";

const newsData = [
  {
    key: 1,
    title: "Philippines set to become upper-middle income economy by 2025",
    image: "https://i.ibb.co/qyn2K1M/1733386656.jpg",
    description:
      "The Philippines has a good chance of attaining the upper-middle income status next year if economic growth targets will be attained, National Economic and Development Authority (NEDA) Secretary Arsenio Balisacan said in a report by Philippine News Agency. 'We have a good chance of attaining upper middle-income country (UMIC) status in 2025,' Balisacan said during the year-end briefing held at the NEDA office in Mandaluyong City. The World Bank defines UMIC economies as those with GNI per capita ranging between $4,516 and $14,005 for the fiscal year 2025.",
    date: "Dec 05, 2024",
  },
  {
    key: 2,
    title: "DOT promotes Philippine dive experience",
    image: "https://i.ibb.co/6gbwhYn/1733387008.jpg",
    description:
      "The Department of Tourism (DOT) launched on Thursday the first Philippine Dive Experience program, gathering diplomats from more than a dozen countries to showcase the award-winning underwater landscape of Anilao in Batangas, according to a report by Philippine News Agency. The Philippine Dive Experience draws inspiration from the DOT’s flagship program the Philippine Experience, except this time it is to market and elevate Philippine diving as a unique and purposeful experience by incorporating heritage and conservation activities. 'In that we are pushing for the sustainability of dive by ensuring that it has a conservation component—a coastal cleanup, and also an education component,' Tourism Secretary Christina Frasco told reporters.",
    date: "Dec 05, 2024",
  },
  {
    key: 3,
    title: "November Inflation seen within target",
    image: "https://i.ibb.co/2qv2frx/1733387563.jpg",
    description:
      "Headline inflation may slightly pick up but will continue to settle within the government's target in November, National Economic and Development Authority (NEDA) Secretary Arsenio Balisacan said in a report by Philippine News Agency. 'We don't think that the new number will breach our target of 2 to 4 percent. It's probably still within that range,' he said during a briefing. Balisacan said that if ever inflation picks up, it will be marginal.",
    date: "Dec 05, 2024",
  },
  {
    key: 4,
    title: "The visionary developers leading Philippine real estate",
    image: "https://i.ibb.co/Ns1rFgF/1733387652.jpg",
    description:
      "In the competitive landscape of Philippine real estate, certain developers are not merely constructing buildings—they are crafting the future of living. From premium condominiums to innovative housing solutions, these standout projects underscore the industry’s dedication to quality, sustainability and community. This article delves into the PropertyGuru Philippines Property Award-winning developments reshaping how Filipinos live, work and thrive.",
    date: "Dec 05, 2024",
  },
  {
    key: 5,
    title: "Building wealth, One Property at a time",
    image: "https://i.ibb.co/85Mn6VM/1733387769.jpg",
    description:
      "Are you working hard for a good future? Beyond saving up money, making a good investment is a practical way to expand your assets and to grow your wealth. This way, you are able to earn more and set up a good future for yourself and your loved ones. There are many investment instruments out there but investing in real estate is an effective way to see your money grow over time. It’s also a practical option since you can live in the property too as it appreciates in value.",
    date: "Dec 05, 2024",
  },
];

const NewsSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Real Estate News
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Stay updated with the latest trends, insights, and developments in
            the real estate market to make informed decisions and seize new
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <WhatsNewCard data={newsData} />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
