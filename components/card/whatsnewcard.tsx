"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

interface Data {
  key: number;
  title: string;
  image: string;
  date: string;
  description?: string | null;
}

interface DataProps {
  data: Data[];
}

const WhatsNewCard: React.FC<DataProps> = ({ data }) => {
  return (
    <>
      {data.map((data, index) => (
        <Card key={index}>
          <CardBody className="overflow-visible py-2">
            <Image
              isBlurred
              isZoomed
              alt="Card background"
              className="w-full object-cover object-top rounded-xl"
              height={250}
              src={data?.image || "/fallback-image.jpg"} // Ensure a fallback image if data.image is undefined
              width={500} // Add width if necessary to maintain aspect ratio
            />

            <div className="py-4">
              <p className="text-tiny uppercase text-default-500 font-bold">
                {data.date}
              </p>
              <h4 className="font-bold text-large line-clamp-2">
                {data.title}
              </h4>

              {data.description && (
                <p className="text-tiny uppercase text-default-500 font-bold line-clamp-1">
                  {data.description}
                </p>
              )}
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default WhatsNewCard;
