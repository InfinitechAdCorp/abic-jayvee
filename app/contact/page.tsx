
import React from "react";

import ContactSection from "../home/contactsection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ABIC Realty for inquiries, support, or to learn more about our services. We are here to assist you.",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with ABIC Realty for inquiries, support, or to learn more about our services. We are here to assist you.",
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




const ContactPage = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto">
        <ContactSection />
      </div>

    </section>
  );
};

export default ContactPage;
