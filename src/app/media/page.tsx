"use client"

import React, { useState } from "react";
import MediaSearchBar from "./MediaSearchBar";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const mediaItems = [
  {
    image: "/images/okigwe.jpeg",
    title: "ISTMA Launch Ceremony - Imo State",
    isVideo: false,
  },
  {
    image: "/images/frsc.png",
    title: "Road Safety Awareness Campaign Launch",
    isVideo: false,
  },
  {
    image: "/images/nurtw.png",
    title: "Transport Operators Training Session",
    isVideo: true,
  },
  {
    image: "/images/download.jpeg",
    title: "Motor Park Modernization Project",
    isVideo: false,
  },
  {
    image: "/images/truck.png",
    title: "Traffic Management Innovation Workshop",
    isVideo: true,
  },
  {
    image: "/images/permsec.jpg",
    title: "Commercial Vehicle Inspection Exercise",
    isVideo: false,
  },
  {
    image: "/images/bus.png",
    title: "Transport Infrastructure Development Summit",
    isVideo: false,
  },
  {
    image: "/images/gov.png",
    title: "Press Release: New Transport Policy Framework",
    isVideo: false,
  },
  {
    image: "/images/commisioner.png",
    title: "Heavy-Duty Vehicle Restriction Implementation",
    isVideo: false,
  },
];


export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Media"
        subtitle="Explore our gallery"
        backgroundImage="/images/gradient.png"
        searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
      <CTASection
        heading="Join Us in Transforming Transportation Across Imo State"     
        subtext="Join us in transforming transportation across Imo State through our projects and initiatives."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
