import React from "react";

import WhatsNewCard from "@/components/card/whatsnewcard";

const meetingsData = [
  {
    key: 1,
    title: "Meeting",
    image: "https://i.ibb.co/YNH1k5B/1733383253.jpg",
    description: "Meeting",
    date: "Dec 05, 2024",
  },
  {
    key: 2,
    title: "Meeting",
    image: "https://i.ibb.co/H7xDz2h/1733383325.jpg",
    description: "Meeting",
    date: "Dec 05, 2024",
  },
  {
    key: 3,
    title: "Selling Activities",
    image: "https://i.ibb.co/YfP4YYt/1733385213.jpg",
    description: "Look for current strategies. Marketing Ideas and Tips",
    date: "Dec 05, 2024",
  },
  {
    key: 4,
    title: "Meeting",
    image: "https://i.ibb.co/YNH1k5B/1733383253.jpg",
    description: "Meeting",
    date: "Dec 05, 2024",
  },
];

const MeetingSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Meetings
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Discover our collaborative meetings that foster communication,
            innovation, and problem-solving within the real estate industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 py-12 gap-4">
          <WhatsNewCard data={meetingsData} />
        </div>
      </div>
    </section>
  );
};

export default MeetingSection;
