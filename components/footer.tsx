"use client";
import { Image } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-violet-800 text-white overflow-hidden">
      {/* Triangle Background */}

      <div className="relative container mx-auto px-6 sm:ml-72 sm:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 sm:col-span-2">
            <h1 className="font-bold text-2xl mb-4">About</h1>
            <p className="max-w-md mb-6">
              With skill, passion, and unwavering dedication, we strive for
              engineering excellence in quality homebuilding and community
              development that will stand the test of time.
            </p>
            <Image
              alt="NextUI hero Image"
              className="py-6"
              src="https://abicrealtyph.com/images/downloadApp.png"
              width={150}
            />
          </div>

          {/* Head Office Section */}
          <div className="col-span-1">
            <h1 className="font-bold text-xl mb-4">Head Office</h1>
            <div className="space-y-2">
              <p className="text-sm flex items-center">
                Unit 202, Campos Rueda, Urban Ave., Makati City Metro Manila, PH
                1233
              </p>
              <p className="text-sm">Sales: 09651983796</p>
              <p className="text-sm">Leasings: 09651983796</p>
              <p className="text-sm">Employment Inquiry: 09455493651</p>
              <p className="text-sm">Customer Care (PHONE): 09651983796</p>
              <p className="text-sm">Customer Care (LANDLINE): 02-8646-6136</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1 px-6">
            <h1 className="font-bold text-xl mb-4">Quick Links</h1>
            <div className="space-y-2">
              <p className="text-sm">Home</p>
              <p className="text-sm">About Us</p>
              <p className="text-sm">What&apos;s New</p>
              <p className="text-sm">Properties</p>
              <p className="text-sm">Services</p>
              <p className="text-sm">Careers</p>
              <p className="text-sm">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-violet-900 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} ABIC Realty. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
