import Image from "next/image";
import React from "react";

const pillars = [
  {
    name: "Shahadah",
    color: "text-blue-500",
    imageSrc: "/images/shadah.png",
  },
  {
    name: "Salah",
    color: "text-orange-500",
    imageSrc: "/images/salah.png",
  },
  {
    name: "Sawm",
    color: "text-purple-500",
    imageSrc: "/images/sawm.png",
  },
  {
    name: "Zakah",
    color: "text-pink-500",
    imageSrc: "/images/zakah.png",
  },
  {
    name: "Hajj",
    color: "text-green-500",
    imageSrc: "/images/hajj.png",
  },
];

const FivePillars = () => {
  return (
    <section className="container mx-auto text-center my-24">
      <h2 className="text-4xl md:text-6xl font-bold text-primary pb-12">
        Five Pillars Of Islam
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.name} className="flex flex-col items-center">
            {/* Circular Image */}
            <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Image
                src={pillar.imageSrc}
                alt={pillar.name}
                className="w-64 h-64 rounded-full object-contain"
                width={80}
                height={80}
              />
            </div>
            {/* Pillar Name */}
            <p className={`mt-4 font-semibold ${pillar.color}`}>
              {pillar.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FivePillars;
