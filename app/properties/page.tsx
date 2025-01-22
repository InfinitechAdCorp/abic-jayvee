import React from "react";
import PropertyCard from "@/components/card/propertycard";
import NoData from "@/components/error/nodata";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description: "Explore a wide range of properties available for sale or rent. Find your ideal home or investment with ABIC Realty's comprehensive listings.",
  openGraph: {
    title: "Properties",
    description: "Explore a wide range of properties available for sale or rent. Find your ideal home or investment with ABIC Realty's comprehensive listings.",
    url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
    siteName: "ABIC Realty",
    images: [
      {
        url: "https://yourwebsite.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
    type: "website",
  },
};



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

// Fetch properties with ISR
const fetchProperties = async (): Promise<Property[]> => {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/properties`;
    
    if (!endpoint) {
      throw new Error('API URL is not defined in the environment variables');
    }

    const res = await fetch(endpoint, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    return data.records || [];
  } catch (error) {
    throw new Error(
      `Failed to fetch properties: ${error instanceof Error ? error.message : error}`
    );
  }
};

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
  const properties = await fetchProperties();

  if (properties.length === 0) {
    return (
      <section>
        <p>No properties available or failed to load.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Properties
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-xl dark:text-gray-300 leading-relaxed">
            Discover the perfect property with unmatched quality, dedication,
            and personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-12 gap-4">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full">
              <NoData />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


