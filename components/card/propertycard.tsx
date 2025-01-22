"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

interface Property {
  id: string;
  name: string;
  images: string;
  description: string;
  location: string;
  price: number;
  max_price: number;
  status: string;
  unit_type: string;
  unit_furnish: string;
  sale: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  let imageUrl = "";

  try {
    const images: string[] = JSON.parse(property.images || "[]");

    if (Array.isArray(images) && images.length > 0) {
      imageUrl = `https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/properties/images/${images[0]}`;
    }
  } catch (error) {
    throw new Error("Error parsing images: " + error);
  }

  return (
    <Link key={property.id} href={`/view/property?id=${property.id}`}>
      <Card>
        <CardBody className="overflow-visible">
          <div className="relative">
            <Image
              isBlurred
              isZoomed
              alt={property.name}
              className="object-cover rounded-xl h-32 md:h-52"
              fallbackSrc="https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/default.jpg"
              src={
                imageUrl ||
                "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/default.jpg"
              }
              width={450}
            />

            <small
              className={`absolute top-2 z-10 left-2 px-2 text-tiny line-clamp-1 py-0.5 font-semibold rounded-md ${
                {
                  "For Sale": "bg-green-200 text-green-700",
                  "For Rent": "bg-blue-500",
                  "For Lease": "bg-yellow-200 text-yellow-700",
                }[property.sale] || "bg-gray-500"
              }`}
            >
              {property.sale}
            </small>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-1">
              <small
                className={`px-2 text-tiny line-clamp-1 font-semibold rounded-md ${
                  {
                    "Fully Furnished": "bg-green-200 text-green-700",
                    "For Rent": "bg-blue-500",
                    "For Lease": "bg-yellow-200 text-yellow-700",
                  }[property.unit_furnish] || "bg-gray-500"
                }`}
              >
                {property.unit_furnish}
              </small>
            </div>

            <h4 className="font-bold text-base line-clamp-1 text-violet-800">
              {property.name} | {property.unit_type}
            </h4>

            <p className="text-default-500 text-tiny  leading-3 line-clamp-1">
              {property.location}
            </p>

            <p className="text-md text-violet-800 uppercase font-bold pt-3">
              {property.price !== undefined && property.price !== null
                ? Number(property.price)
                    .toLocaleString("en-PH", {
                      style: "currency",
                      currency: "PHP",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                    .replace("PHP", "")
                    .trim()
                : "0.00"}
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PropertyCard;
