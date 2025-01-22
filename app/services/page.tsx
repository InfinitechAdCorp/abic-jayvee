import ServicesCard from "@/components/card/servicescard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover the range of real estate services offered by ABIC Realty, including property buying, selling, leasing, and investment advisory.",
  openGraph: {
    title: "Services",
    description: "Discover the range of real estate services offered by ABIC Realty, including property buying, selling, leasing, and investment advisory.",
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



export default function ServicesPage() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-4xl md:text-4xl text-violet-700 dark:text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-md text-default-500 max-w-2xl dark:text-gray-300 leading-relaxed">
            Experience exceptional real estate services, tailored to meet your
            needs and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 py-12 gap-4">
          <ServicesCard />
        </div>
      </div>
    </section>
  );
}
