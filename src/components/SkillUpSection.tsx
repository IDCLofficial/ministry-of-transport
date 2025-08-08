import Image from "next/image";
import Link from 'next/link';
import AnimatedSection from "./AnimatedSection";

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-8 px-4">
      {/* Left: Green Card */}
      <div className="w-[90%] md:w-[40%] flex items-center">
        <div className="relative w-full h-[300px] md:h-[75%] min-h-[300px] ">
          <Image src="/images/bus.png" alt="Istma" fill className="object-cover rounded" />
        </div>
      </div>
      {/* Right: Text and Buttons */}
      <div className="w-[90%] md:w-[55%] py-20 flex-1 flex flex-col justify-center items-start max-w-2xl px-2 min-h-0">
      <AnimatedSection>
        
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">ISTMA Relaunch: Transforming Transport Management in Imo State
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-[700px]">
        The Imo State Transport Management Authority (ISTMA) relaunch represents a comprehensive overhaul of transport regulation and enforcement across the state. This initiative consolidates all transport-related enforcement activities under a single, efficient authority, eliminating redundant task forces and streamlining operations. The project includes the automation of daily ticketing systems for commercial vehicles, implementation of 56 designated bus stops across Owerri to reduce congestion, and enforcement of peak-hour restrictions on heavy-duty vehicles. Through strategic partnerships with the Ministry of Finance and Imo Internal Revenue Service (IIRS), ISTMA is modernizing transport operations while ensuring revenue efficiency and improved traffic flow for all citizens.
        </p>
      </AnimatedSection>

      <AnimatedSection>

        <div className="flex flex-row gap-4 mt-4 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/projects" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[140px] text-center">
            View Projects
          </Link>
          <Link href="/contact-us" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[160px] text-center">
            Contact Us
          </Link>
        </div>
      </AnimatedSection>
      </div>
    </section>
  );
} 