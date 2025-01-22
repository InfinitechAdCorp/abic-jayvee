// app/view/property/page.tsx
import React, { Suspense } from "react";
import HeroSection from "./home/herosection";
import PropertySection from "./home/propertysection";
import FAQSection from "./home/faqsection";
import RatingSection from "./home/ratingsection";
import ContactSection from "./home/contactsection";

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


const fetchProperties = async (): Promise<Property[]> => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_API_URL;
    
    if (!endpoint) {
      throw new Error('API URL is not defined in the environment variables');
    }

    const res = await fetch(`${endpoint}/properties`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch properties`);
    }

    const data = await res.json();
    return data.records || [];
    console.log(data)
  } catch (error) {
    console.error(error);
    return []; 
  }
};

export const dynamic = "force-dynamic";


export default async function SinglePropertyPage() {
  const properties = await fetchProperties();

  return (
    <Suspense fallback={<div>Loading sections...</div>}>
      <section>
        <HeroSection/>
        <PropertySection properties={properties} />
        <FAQSection/>
        <RatingSection/>
        <ContactSection/>
      </section>
    </Suspense>
  );
}
