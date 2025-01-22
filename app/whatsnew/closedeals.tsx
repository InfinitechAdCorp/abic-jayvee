import React from "react";

import WhatsNewCard from "@/components/card/whatsnewcard";

const closedDealsData = [
  {
    key: 1,
    title: "Sold",
    image: "https://i.ibb.co/pfDGRN9/1733386378.jpg",
    description: "1BR in Prisma Residences Astra Tower",
    date: "Dec 05, 2024",
  },
  {
    key: 2,
    title: "Sold",
    image: "https://i.ibb.co/k4cSM6H/1733386288.jpg",
    description: "1BR in the Rise Makati",
    date: "Dec 05, 2024",
  },
  {
    key: 3,
    title: "Sold",
    image: "https://i.ibb.co/PchWBxb/1733386353.jpg",
    description: "Studio Type The Ellis Makati",
    date: "Dec 05, 2024",
  },
  {
    key: 4,
    title: "Sold",
    image: "https://i.ibb.co/QJW2fF3/1733386347.jpg",
    description: "3BR in Acqua Residences",
    date: "Dec 05, 2024",
  },
  {
    key: 5,
    title: "Sold",
    image: "https://i.ibb.co/pfDGRN9/1733386378.jpg",
    description: "1BR in Prisma Residences Astra Tower",
    date: "Dec 05, 2024",
  },
];

const CloseDeals = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Closed Deals
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Discover our successful real estate transactions, where we’ve helped
            clients secure their dream properties with expert guidance and
            exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <WhatsNewCard data={closedDealsData} />
        </div>
      </div>
    </section>
  );
};

export default CloseDeals;
