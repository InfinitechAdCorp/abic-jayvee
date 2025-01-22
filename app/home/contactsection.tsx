'use client'
import React from "react";
import { Card, CardBody } from "@nextui-org/react";

import ContactCard from "@/components/card/contactcard";
import ContactInfoCard from "@/components/card/contactinfo";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center gap-6  md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-violet-700 dark:text-white">
            Contact us
          </h1>
          <p className="text-sm md:text-lg text-default-500 max-w-xl dark:text-gray-300 leading-4">
            Have questions or need assistance? Reach out to us, and our team
            will be happy to help you find your perfect home or property.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-6">
          <div className="col-span-1">
            <ContactInfoCard />
          </div>
          <div className="col-span-1">
            <Card>
              <CardBody className="py-8 px-4">
                <ContactCard />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
