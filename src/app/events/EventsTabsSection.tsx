"use client";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    name: "ISTMA Stakeholders Forum",
    image: "/images/commisioner.png",
    description:
      "A comprehensive forum bringing together transport operators, unions, and regulatory bodies to discuss ISTMA operations, compliance requirements, and collaborative approaches to improving transport services across Imo State."
  },
  {
    name: "Road Safety Awareness Campaign",
    image: "/images/frsc.png",
    description: "A statewide campaign in collaboration with FRSC to promote road safety, responsible driving, and traffic law compliance. Features demonstrations, workshops, and community engagement activities."
  },
  {
    name: "Commercial Vehicle Operators Training",
    image: "/images/nurtw.png",
    description: "A training program for commercial vehicle operators covering safety protocols, regulatory compliance, customer service standards, and modern transport management practices."
  },
  {
    name: "Transport Infrastructure Development Summit",
    image: "/images/gov.png",
    description: "A summit focused on transport infrastructure planning, featuring presentations on road development projects, park modernization, and future transport initiatives in Imo State."
  },
  {
    name: "Traffic Management Innovation Workshop",
    image: "/images/commisioner.png",
    description: "A workshop showcasing innovative traffic management solutions, digital ticketing systems, and smart transport technologies to enhance efficiency and reduce congestion."
  },
];


export default function EventsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = events[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {events.map((event, idx) => (
            <li key={event.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {event.name}
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