import React from "react";

import PropertyFinderClient from "./propertyfinderdata";

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

// Fetch properties function (you can keep it the same)
const fetchProperties = async (): Promise<Property[]> => {
  let properties: Property[] = [];

  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/properties`;
    
    if (!endpoint) {
      throw new Error('API URL is not defined in the environment variables');
    }
    const res = await fetch(endpoint, { cache: "force-cache" });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch properties: ${res.status} - ${res.statusText}`,
      );
    }

    const data = await res.json();

    properties = data.records || [];

    console.log(data)
  } catch (error) {
    throw new Error(
      `Failed to fetch properties: ${error instanceof Error ? error.message : error}`,
    );
  }

  return properties;
};

export const dynamic = "force-dynamic";

export default async function PropertyFinderPage() {
  const properties = await fetchProperties();

  return <PropertyFinderClient properties={properties} />;
}
