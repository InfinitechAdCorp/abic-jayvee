"use client";
import React from "react";

import CoreValuesCard from "@/components/card/corevaluescard";

const CoreValuesSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Our Core Values
          </h1>
          <p className="text-sm md:text-lg text-default-500 max-w-2xl dark:text-gray-300 leading-4">
            Integrity, excellence, and personalized service define us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-4">
          <CoreValuesCard />
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
