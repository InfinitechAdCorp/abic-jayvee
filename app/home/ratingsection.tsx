"use client";
import React from "react";
import { Image, Link } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";

const RatingSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-aut px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Share Your Experience
          </h1>
          <p className="text-sm md:text-lg text-default-500 max-w-2xl dark:text-gray-300 leading-4">
            We&apos;d love to hear your feedback! Share your rating and help us
            improve our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-violet-300 p-4 rounded-full">
                <FaCheck />
              </div>
              <div>
                <h1 className="font-bold text-xl">
                  Improves Products/Services:
                </h1>
                <p className="text-default-500">
                  Helps identify areas for improvement.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-violet-300 p-4 rounded-full">
                <FaCheck />
              </div>
              <div>
                <h1 className="font-bold text-xl">
                  Enhances Customer Experience:
                </h1>
                <p className="text-default-500">
                  Shows what customers value and what needs adjustment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-violet-300 p-4 rounded-full">
                <FaCheck />
              </div>
              <div>
                <h1 className="font-bold text-xl">Builds Customer Loyalty:</h1>
                <p className="text-default-500">
                  Demonstrates that the business values customer opinions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-violet-300 p-4 rounded-full">
                <FaCheck />
              </div>
              <div>
                <h1 className="font-bold text-xl">
                  Guides Business Decisions:{" "}
                </h1>
                <p className="text-default-500">
                  Provides data-driven insights for strategic planning.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-bold">
              Scan QR Code to give feedback!
            </p>
            <Image
              alt="NextUI hero Image"
              className="mx-auto block"
              src="https://abicrealtyph.com/images/qr-codes/feedback-qr.png"
            />
            <Link className="text-sm" href="">
              https://abicrealtyph.com/?openModal=feedback
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
