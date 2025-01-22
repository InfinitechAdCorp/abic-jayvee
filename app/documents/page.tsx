import React from "react";

import DocumentTable from "@/components/table/documenttable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCI Documents",
  description: "Access important documents related to DMCI properties, including agreements, floor plans, and other essential information.",
  openGraph: {
    title: "DMCI Documents",
    description: "Access important documents related to DMCI properties, including agreements, floor plans, and other essential information.",
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



const DocumentsPage = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            DMCI Documents
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Access and manage important DMCI documents with ease, ensuring
            seamless transactions and peace of mind.
          </p>
        </div>

        <div className="py-8">
          <DocumentTable />
        </div>
      </div>
    </section>
  );
};

export default DocumentsPage;
