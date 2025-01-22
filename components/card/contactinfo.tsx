"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
import React from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaPhone,
  FaTelegram,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfoCard = () => {
  return (
    <div className="flex flex-col gap-2 justify-end">
      <Card className="max-w-xl relative overflow-visible">
        <CardBody>
          <iframe
            allowFullScreen
            className="w-full"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.686618330025!2d121.01093307574082!3d14.559904978070435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90b830e5f29%3A0x89fe307dfecd3c0d!2sCampos%20Rueda%20Building!5e0!3m2!1sen!2sph!4v1734658577068!5m2!1sen!2sph"
            style={{ border: 0 }}
            title="Google Maps Embed"
          />
        </CardBody>

        {/* Contact Cards Section */}
        <div className="md:absolute bottom-8 md:right-0 md:transform md:translate-x-1/4 space-y-4 z-10">
          {/* Sales Card */}
          <Card className="max-w-sm shadow-lg">
            <CardBody>
              <div className="flex items-center gap-4">
                <div className="bg-violet-300 p-3 rounded-md">
                  <FaPhone className="text-violet-600" size={24} />
                </div>
                <div>
                  <p className="text-default-500">Sales</p>
                  <p className="font-bold">
                    <Link className="text-md md:text-lg" href="tel:09651983796">
                      09651983796
                    </Link>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Email Card */}
          <Card className="max-w-sm shadow-lg">
            <CardBody>
              <div className="flex items-center gap-4">
                <div className="bg-violet-300 p-3 rounded-md">
                  <MdEmail className="text-violet-600" size={24} />
                </div>
                <div>
                  <p className="text-default-500">Email</p>
                  <p className="font-bold">
                    <Link
                      className="text-md md:text-lg"
                      href="mailto:abic.gabmercado@gmail.com"
                    >
                      abic.gabmercado@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Card>

      <div className="py-12">
        <h1 className="font-bold">Reach out us on:</h1>

        <div className="flex gap-4 py-4">
          <div className="bg-violet-300 p-2 rounded-md">
            <FaFacebookMessenger className="text-violet-600" size={24} />
          </div>

          <div className="bg-violet-300 p-2 rounded-md">
            <FaFacebookF className="text-violet-600" size={24} />
          </div>

          <div className="bg-violet-300 p-2 rounded-md">
            <FaTelegram className="text-violet-600" size={24} />
          </div>

          <div className="bg-violet-300 p-2 rounded-md">
            <FaWhatsapp className="text-violet-600" size={24} />
          </div>

          <div className="bg-violet-300 p-2 rounded-md">
            <FaViber className="text-violet-600" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
