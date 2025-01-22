import React from "react";

import SubmitPropertyCard from "@/components/card/submitpropertycard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Property",
  description: "Submit your property listing to ABIC Realty and connect with potential buyers or renters. Showcase your property to a wider audience.",
  openGraph: {
    title: "Submit Property",
    description: "Submit your property listing to ABIC Realty and connect with potential buyers or renters. Showcase your property to a wider audience.",
    url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
    siteName: "ABIC Realty",
    images: [
      {
        url: "https://yourwebsite.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
    type: "website",
  },
};


const SubmitPropertyPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="container mx-auto px-6 text-center">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Submit Property
          </h1>
          <p className="text-md md:text-lg text-default-500 max-w-2xl mx-auto dark:text-gray-300 leading-relaxed">
            Share your property details with ease and reach potential buyers or
            renters in no time.
          </p>
        </div>

        <div className="flex justify-center items-center py-12 w-full">
          <SubmitPropertyCard />
        </div>
      </div>
    </section>
  );
};

export default SubmitPropertyPage;
