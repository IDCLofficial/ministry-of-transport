"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Traffic Control and Enforcement",
    image: "/images/nurtw.png",
    description: "Oversees the Imo State Traffic Management Authority (ISTMA) and enforces motor park regulations to ensure road discipline and traffic order."
  },
  {
    name: "Transport Planning and Infrastructure",
    image: "/images/ocda.jpeg",
    description: "Manages the development and maintenance of roads, parks, and transport terminals to improve connectivity and infrastructure quality."
  },
  {
    name: "Vehicle Licensing and Inspection Services",
    image: "/images/frsc.png",
    description: "Handles vehicle registration, driver licensing, and inspection duties, often in collaboration with the VIO to ensure road safety and compliance."
  },
  {
    name: "Finance and Administration",
    image: "/images/frc.png",
    description: "Responsible for budgeting, procurement, human resources, and compliance to ensure efficient resource management and operational excellence."
  },
  {
    name: "Legal Services",
    image: "/images/bus.png",
    description: "Provides legal backing for enforcement activities, regulatory matters, and legislative input to strengthen transport governance."
  },
  {
    name: "Parastatals and Agencies",
    image: "/images/truck.png",
    description: "Oversees ISTMA, IRROMA, and RAAMP initiatives to ensure coordinated transport management and rural development."
  }
];

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border transition cursor-pointer
                  ${activeIdx === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black border-transparent hover:bg-green-50 hover:text-green-700'}
                `}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-base">{active.description}</p>
      </div>
    </section>
  );
} 