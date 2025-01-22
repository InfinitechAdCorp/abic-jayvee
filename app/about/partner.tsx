"use client";
import { Image } from "@nextui-org/react";
import React from "react";

const partnerData = [
  {
    key: 1,
    image: "https://abicrealtyph.com/images/partners/1734578001.png",
  },
  {
    key: 2,
    image: "https://abicrealtyph.com/images/partners/1734578020.png",
  },
  {
    key: 3,
    image: "https://abicrealtyph.com/images/partners/1734578029.jpg",
  },
  {
    key: 4,
    image: "https://abicrealtyph.com/images/partners/1734578037.png",
  },
  {
    key: 5,
    image: "https://abicrealtyph.com/images/partners/1734578064.png",
  },
  {
    key: 6,
    image: "https://abicrealtyph.com/images/partners/1734578075.png",
  },
  {
    key: 7,
    image: "https://abicrealtyph.com/images/partners/1734578088.png",
  },
  {
    key: 9,
    image: "https://abicrealtyph.com/images/partners/1734578097.jpg",
  },
  {
    key: 10,
    image: "https://abicrealtyph.com/images/partners/1734578210.png",
  },
  {
    key: 11,
    image: "https://abicrealtyph.com/images/partners/1734578120.png",
  },
];

const OurPartnerSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-violet-700 uppercase text-3xl py-4">
            Our Partner
          </h1>
          <p className="text-default-500 max-w-xl text-sm md:text-lg">
            Partnering with trusted names to deliver exceptional real estate
            services and opportunities.
          </p>
        </div>

        {/* Adjusted grid for centering and removing spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-2xl mx-auto py-12">
          {partnerData.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                alt={`Partner ${index + 1}`}
                className="object-contain text-center"
                src={partner.image}
                width={180}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnerSection;
