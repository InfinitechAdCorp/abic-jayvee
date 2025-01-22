import React, { Suspense } from "react";
import SinglePropertyClient from "./propertyclient";
import { Metadata } from "next";

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
  user_id: string;
}

// Fetch properties function
const fetchProperties = async (): Promise<Property[]> => {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/properties`;

    if (!endpoint) {
      throw new Error('API URL is not defined in the environment variables');
    }
    const res = await fetch(endpoint, { cache: "no-store" });

    if (!res.ok) {
      console.error("Failed to fetch properties:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    console.log(data)
    return data.records || [];


  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return [];
  }
};

export const dynamic = "force-dynamic";

export default async function SinglePropertyPage() {
  const properties = await fetchProperties();


  return (
    <Suspense fallback={<div>Loading...</div>}>
      {properties.length > 0 ? (
        <SinglePropertyClient properties={properties} />
      ) : (
        <p>No properties available or failed to load.</p>
      )}
    </Suspense>
  );
}
