"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

import NearbyFallback from "@/components/fallback/nearby";

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
  amenities: string;
}

interface PropertyProps {
  properties: Property[];
  currentPropertyId: string;
}

const Nearby: React.FC<PropertyProps> = ({ properties, currentPropertyId }) => {
  const currentProperty = properties.find(
    (property) => property.id === currentPropertyId,
  );

  if (!currentProperty) {
    return <div>No property found for the given ID.</div>;
  }

  const nearbyProperties = properties.filter(
    (property) =>
      property.location === currentProperty.location &&
      property.id !== currentPropertyId,
  );

  const defaultImage =
    "https://www.dmcihomes.com/uploads/media/executives-1563253639282.jpg";

  // Assuming the first property in the list contains the relevant images
  const parsedImages: string[] = (() => {
    try {
      // Parsing the images for the first property in the list
      return JSON.parse(properties[0]?.images || "[]");
    } catch (error) {
      throw new Error(
        `Failed to fetch properties: ${error instanceof Error ? error.message : error}`,
      );
    }
  })();

  return (
    <div className="flex flex-col gap-2">
      {nearbyProperties.length === 0 ? (
        <NearbyFallback />
      ) : (
        nearbyProperties.map((property, index) => (
          <Card
            key={index}
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt={`Property Image ${property.name}`}
                    className="object-cover"
                    height={100}
                    shadow="md"
                    src={
                      `https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/properties/images/${parsedImages}` ||
                      defaultImage
                    }
                    width="100%"
                  />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-bold text-lg line-clamp-1 text-violet-800">
                        {property.name} | {property.unit_type}
                      </h3>
                      <p className="text-tiny text-foreground/80 leading-3 line-clamp-1">
                        {property.location}
                      </p>
                      <h1 className="text-large font-medium mt-4">
                        &#8369;{property.price}
                      </h1>

                      <div className="flex items-center gap-2">
                        <small className="px-2 py-0.5 text-tiny line-clamp-1 font-semibold rounded-md bg-green-200 text-green-700">
                          {property.sale}
                        </small>

                        <small className="px-2 py-0.5 text-tiny line-clamp-1 font-semibold rounded-md bg-blue-200 text-blue-700">
                          {property.unit_furnish}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
};

export default Nearby;
