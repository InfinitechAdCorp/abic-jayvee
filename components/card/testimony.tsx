"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Testimony {
  key: number;
  message: string;
  name: string;
}

interface TestimonyProps {
  testimony: Testimony[];
}

const TestimonyCard: React.FC<TestimonyProps> = ({ testimony }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true, // Enable infinite looping

    breakpoints: {
      "(max-width: 400px)": {
        slides: { perView: 1, spacing: 10 }, // For small screens
      },
      "(min-width: 401px) and (max-width: 999px)": {
        slides: { perView: 1, spacing: 10 }, // For medium screens
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 20 }, // For large screens
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {testimony.map((data, index) => (
        <div key={index} className="keen-slider__slide">
          <figure className="max-w-screen-md mx-auto text-center py-8">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              fill="currentColor"
              viewBox="0 0 18 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-md italic font-medium text-gray-900 dark:text-white line-clamp-5">
                &apos;{data.message}&apos;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                  {data.name}
                </cite>
                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                  CEO at Google
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default TestimonyCard;
