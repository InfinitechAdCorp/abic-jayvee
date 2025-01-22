"use client";
import { Image } from "@nextui-org/react";
import React from "react";

const StorySection = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="text-start">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 py-12 gap-4">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white underline underline-offset-auto">
                Our Story
              </h1>
              <p className="text-sm md:text-lg text-default-500 dark:text-gray-300 leading-relaxed py-6">
                ABIC Realty Corporation and Consultancy is a leading real estate
                firm established in the early 2018, offering a range of services
                including property sales, leasing, project development, and
                consultancy. With a focus on transparency, professionalism, and
                sustainable development, ABIC has built a trusted reputation in
                the industry. Over the years, they have expanded to serve both
                individual clients and large corporations, providing expert
                advice on real estate investments and development. Their
                commitment to client success and innovation continues to drive
                their growth and impact in the real estate sector.
              </p>
            </div>

            <div>
              <Image
                isBlurred
                isZoomed
                alt="NextUI hero Image"
                className="w-full"
                src="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-ou-story.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
