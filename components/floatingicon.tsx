"use client";
import { Image } from "@nextui-org/react";
import React from "react";

const social = [
  {
    key: 1,
    image: "https://abicrealtyph.com/assets/icon/facebook.png",
    link: "https://www.facebook.com/share/We79XYCKWCDWmhE2/?mibextid=JRoKGi",
  },
  {
    key: 2,
    image: "https://abicrealtyph.com/assets/icon/phone-call.png",
    link: "tel:+639175480999",
  },
  {
    key: 3,
    image: "https://abicrealtyph.com/assets/icon/communication.png",
    link: "mailto:elladmcihomes888@gmail.com",
  },
  {
    key: 4,
    image: "https://abicrealtyph.com/assets/icon/instagram.png",
    link: "https://www.instagram.com/ella.dmcihomes?igsh=MXdkOGhlcXJ6ZXJoaw%3D%3D&utm_source=qr",
  },
  {
    key: 5,
    image: "https://abicrealtyph.com/assets/img/icon/viber.png",
    link: "viber://chat?number=%2B639175480999",
  },

  {
    key: 6,
    image: "https://i.ibb.co/JHD6F50/telegram.png",
    link: "https://t.me/+639175480999",
  },
];

const FloatingIcons = () => {
  return (
    <div className="flex flex-col gap-4 fixed">
      {social.map((icon) => (
        <a
          key={icon.key}
          href={icon.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="bg-violet-700 p-2 rounded-full">
            <Image
              alt={`Social icon ${icon.key}`}
              height={32}
              src={icon.image}
              width={32}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default FloatingIcons;
