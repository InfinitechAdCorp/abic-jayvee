import React from "react";

import LoanCalculator from "@/components/card/calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Calculator",
  description: "Use our loan calculator to estimate monthly payments for your real estate purchase. Get accurate results to help you plan your financials.",
  openGraph: {
    title: "Loan Calculator",
    description: "Use our loan calculator to estimate monthly payments for your real estate purchase. Get accurate results to help you plan your financials.",
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


const CalculatorPage = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="text-start">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Loan Calculator
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Calculate your loan payments effortlessly and plan your finances
            with confidence.
          </p>
        </div>

        <div className="py-12">
          <LoanCalculator />
        </div>
      </div>
    </section>
  );
};

export default CalculatorPage;
