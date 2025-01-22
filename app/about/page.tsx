import ContactSection from "../home/contactsection";

import AbicSection from "./abicsection";
import CoreValuesSection from "./corevalues";
import MissionVissionSection from "./vm";
import StorySection from "./storysection";
import OurPartnerSection from "./partner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This page provides detailed information about ABIC Realty, showcasing the services and values we offer. Learn more about our commitment to providing exceptional real estate solutions.",
  openGraph: {
    title: "About",
    description: "This page provides detailed information about ABIC Realty, showcasing the services and values we offer. Learn more about our commitment to providing exceptional real estate solutions.",
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


export default function AboutPage() {
  return (
    <section className="flex flex-col items-center w-full">
      <AbicSection />
      <StorySection />
      <MissionVissionSection />
      <CoreValuesSection />
      <OurPartnerSection />
      <ContactSection />
    </section>
  );
}
