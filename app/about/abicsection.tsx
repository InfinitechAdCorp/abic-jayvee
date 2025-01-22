"use client";
import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const services = [
  "Expert guidance in buying and selling properties",
  "Comprehensive market analysis and insights",
  "Commitment to exceptional customer service",
];

const AbicSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <Image
              isBlurred
              isZoomed
              alt="NextUI hero Image"
              className="w-full"
              src="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-about.jpg"
            />
          </div>
          <div className="md:px-4">
            <h1 className="font-bold text-2xl text-violet-800 py-4 underline">
              Who is ABIC Realty & Consultancy Corporation
            </h1>
            <p>
              At <strong>ABIC Realty & Consultancy Corporation</strong>, we
              pride ourselves on being a leader in the real estate market. With
              over three decades of experience, our team is dedicated to helping
              you find the perfect home or investment property. We understand
              that real estate is not just about transactions; it’s about
              building relationships and ensuring satisfaction.
            </p>

            <div className="py-8 flex flex-col gap-2">
              {services.map((service, index) => (
                <Card key={index} className="max-w-md">
                  <CardBody className="px-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-violet-300 p-2 rounded-full">
                        <FaCheck className="text-violet-800" size={12} />
                      </div>
                      <span>{service}</span>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbicSection;
