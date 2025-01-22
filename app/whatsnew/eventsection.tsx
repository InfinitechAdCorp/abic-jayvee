import React from "react";

import WhatsNewCard from "@/components/card/whatsnewcard";

const eventsData = [
  {
    key: 1,
    title: "Jayvee Valeriano's Promotion",
    image: "https://i.ibb.co/0KJPd90/1733383739.jpg",
    description: "Promoted as Senior Sales Manager",
    date: "Dec 05, 2024",
  },
  {
    key: 2,
    title: "Ma'am Angie's Promotion",
    image: "https://i.ibb.co/FYRBpqR/1733383729.jpg",
    description: "Promoted as a Senior Sales Manager",
    date: "Dec 05, 2024",
  },
  {
    key: 3,
    title: "Gabriel Mercado's Promotion",
    image: "https://i.ibb.co/8XB7DKd/1733383714.jpg",
    description: "Promoted as a Senior Property Specialist",
    date: "Dec 05, 2024",
  },
  {
    key: 4,
    title: "Lloyd Moscare's Promotion",
    image: "https://i.ibb.co/ccsQFBY/1733383775.jpg",
    description: "Promoted as a Senior Property Specialist",
    date: "Dec 05, 2024",
  },
  {
    key: 5,
    title: "Lady Dianne Semacio's Promotion",
    image: "https://i.ibb.co/2WxNtvh/1733384008.jpg",
    description: "Promoted as a Senior Property Specialist",
    date: "Dec 05, 2024",
  },
  {
    key: 6,
    title: "Joelyn Rendon's Regularization",
    image: "https://i.ibb.co/R7THXFw/1733384504.jpg",
    description: "Joey's Regularization",
    date: "Dec 05, 2024",
  },
  {
    key: 7,
    title: "Rhea Jane Quintano's Regularization",
    image: "https://i.ibb.co/2qcZJKS/1733384847.jpg",
    description: "Rhea Jane Quintano's Regularization",
    date: "Dec 05, 2024",
  },
];

const EventSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Events
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Explore our exciting events that bring together industry leaders,
            provide valuable insights, and create opportunities for growth in
            real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <WhatsNewCard data={eventsData} />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
