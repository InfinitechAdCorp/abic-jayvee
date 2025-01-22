"use client";
import React from "react";
import { Card, CardBody, Image, Link } from "@nextui-org/react";

const servicesData = [
  {
    key: 1,
    title: "Transfer Title Service",
    image: "https://i.ibb.co/ZLz74gw/1733888187.png",
    description:
      "We assist in transferring the title of properties, including residential, commercial, and industrial real estate. This includes handling all legal documentation, liaising with government authorities, and ensuring that all obligations related to taxes, fees, and liens are resolved before the transfer is finalized.",
    number: "09172561725",
  },
  {
    key: 2,
    title: "FINANCING SERVICES",
    image: "",
    description:
      "Whether you're facing a sudden crisis or seeking long-term financial stability, we are here to support you every step of the way. We offers !!! 📌CAR FINANCING LOAN 📌HOUSE FINANCING 📌PERSONAL LOAN 📌SANGLA 🙋🏻QUALITY SERVICE ✈️FAST SERVICE 📥LOW LOAN INTEREST 📋MINIMAL REQUIREMENTS",
    number: "09455493651",
  },
];

const ServicesCard = () => {
  return (
    <>
      {servicesData.map((data, index) => (
        <Link key={index} href={`/view/services?id=${data.key}`}>
          <Card>
            <CardBody className="overflow-visible py-2">
              <Image
                isBlurred
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                fallbackSrc="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/default.jpg"
                height={250}
                src={data.image || "/fallback-image.jpg"}
              />

              <div className="py-4">
                <h4 className="font-bold text-large">{data.title}</h4>
                <small className="text-default-500 line-clamp-2">
                  {data.description}
                </small>

                <p className="text-tiny uppercase font-bold pt-4">
                  If you have any concerns please contact: {data.number}
                </p>
              </div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ServicesCard;
