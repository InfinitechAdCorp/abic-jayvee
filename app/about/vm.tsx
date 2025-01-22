import React from "react";

const MissionVissionSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:py-16 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="col-span-2 md:col-span-1 max-w-md mx-auto">
            <h1 className="font-bold text-violet-700 uppercase text-3xl py-4">
              Vision
            </h1>
            <p className="text-default-500 text-lg">
              We consistently strive to develop collaborative partnerships,
              based on transparency and mutual trust, which serve to build
              enduring client relationships. As we expand, we remain committed
              to these principles, which have served our company and clients
              through the years.
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 max-w-md mx-auto">
            <h1 className="font-bold text-violet-700 uppercase text-3xl py-4">
              Mission
            </h1>
            <p className="text-default-500 text-lg">
              Our ethics are built on our commitment to offering superior
              customer service, combining an entrepreneurial flair and bespoke
              service of a fast-growing organization. We measure our success by
              the results delivered to clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVissionSection;
