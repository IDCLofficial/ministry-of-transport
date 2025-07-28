"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const newsData = [
  {
    title: "ISTMA Relaunch: New Transport Management Authority Takes Effect",
    description: "The Imo State Ministry of Transport has successfully relaunched the Imo State Traffic Management Authority (ISTMA) as a single enforcement body, eliminating redundant task forces and streamlining transport regulation across the state.",
    date: "Late June 2025",
    image: "/images/commisioner.png",
    category: "Latest Updates",
  },
  {
    title: "56 Designated Bus Stops Rolled Out Across Owerri",
    description: "The Ministry of Transport has implemented 56 designated bus stops within Owerri to decongest traffic zones and streamline intra/inter-state transport operations, improving commuter experience.",
    date: "Mid June 2025",
    image: "/images/gov.png",
    category: "Latest Updates",
  },
  
  {
    title: "Heavy-Duty Vehicle Restrictions Implemented During Peak Hours",
    description: "New regulations restricting heavy-duty vehicle movement during peak hours (6 a.m. to 6 p.m.) have been successfully implemented, with waiver provisions for essential service operators.",
    date: "Late May 2025",
    image: "/images/gov.png",
    category: "Latest Updates",
  },
  {
    title: "Partnership with NURTW, VIO, FRSC Strengthened",
    description: "The Ministry has strengthened strategic partnerships with National Union of Road Transport Workers (NURTW), Vehicle Inspection Office (VIO), and Federal Road Safety Corps (FRSC) to enhance transport regulation.",
    date: "Mid May 2025",
    image: "/images/frsc.png",
    category: "Policies",
  },
  {
    title: "Motor Park Modernization Project Commences",
    description: "Comprehensive modernization of motor parks across Imo State has commenced, with modern facilities, improved infrastructure, and enhanced security to provide better services for commuters and operators.",
    date: "Early May 2025",
    image: "/images/nurtw.png",
    category: "Policies",
  }
];

export default function NewsGrid() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  // Filter news based on selected category
  const filteredNews = selectedCategory 
    ? newsData.filter(item => item.category === selectedCategory)
    : newsData;

  return (
    <div className="w-full">
      {selectedCategory && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Category: {selectedCategory}</h2>
          <p className="text-gray-600">Showing {filteredNews.length} news items</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((item, idx) => (
          <Link
            key={idx}
            href={`/news/${slugify(item.title)}`}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
          >
            <div className="relative w-full h-48">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">{item.category}</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">{item.description}</p>
              <span className="text-gray-500 text-xs mt-auto">{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 