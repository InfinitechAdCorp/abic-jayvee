import CareersCard from "@/components/card/careerscard";
import NoData from "@/components/error/nodata";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore exciting career opportunities at ABIC Realty. Join our team and contribute to delivering exceptional real estate solutions.",
  openGraph: {
    title: "Career",
    description: "Explore exciting career opportunities at ABIC Realty. Join our team and contribute to delivering exceptional real estate solutions.",
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




interface Career {
  id: string;
  position: string;
  slots: number;
  image: string;
}


const fetchCareers = async (): Promise<Career[]> => {
  try {
    const endpoint = `https://abicmanpowerservicecorp.com/api/main/careers`;
    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch careers:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    return data.records || [];
  } catch (error) {
    console.error(
      "Failed to fetch careers:",
      error instanceof Error ? error.message : error
    );
    return [];
  }
};



export default async function CareersPage() {
  const careers = await fetchCareers();

  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Careers
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-lg dark:text-gray-300 leading-relaxed">
            Experience exceptional real estate services, tailored to meet your
            needs and exceed expectations.
          </p>
        </div>

        <div className="w-full py-8">
          {careers.length > 0 ? (
            <CareersCard career={careers} />
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
