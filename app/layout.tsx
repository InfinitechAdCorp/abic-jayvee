import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.template}`,
  },
  description: siteConfig.description,

  openGraph: {
    title: "Abic Realty - Your Trusted Real Estate Partner",
    description:
      "Explore a wide range of condos, offices, and properties for sale, lease, or rent. Abic Realty ensures seamless real estate transactions.",
    url: "https://www.abicrealty.com",
    siteName: "Abic Realty",
    images: [
      {
        url: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png",
        width: 1200,
        height: 630,
        alt: "Modern condos and offices offered by Abic Realty",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abic Realty - Real Estate Sales, Leasing, and Rentals",
    description:
      "Find your ideal condo, office, or property for sale, lease, or rent with Abic Realty. We make real estate simple.",
    images: ["https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/abic-realty-banner.png"],
  },
  icons: {
    icon: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-cover bg-center bg-no-repeat font-sans antialiased relative",
          fontSans.variable,
        )}
        style={{
          backgroundImage: "url('https://i.ibb.co/5Y2tMn3/bgimg.png')",
        }}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow md:ml-64">{children}</main>
            <Footer />
          </div>
          <Chatbot />
        </Providers>

        {/* Fixed Floating Icons on the right */}
        <div className="fixed top-1/2 right-2 transform -translate-y-1/2 sm:right-4 z-50">
          {/* <FloatingIcons /> */}
        </div>
      </body>
    </html>
  );
}
