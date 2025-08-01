import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src={"/images/bus.png"}
                alt="ISTMA Relaunch"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              ISTMA Relaunch: New Transport Management Authority Takes Effect
            </h1>
            <p className="text-sm text-gray-500">Late June 2025</p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              In a significant development aimed at improving urban mobility and transport regulation, the Imo State Government has officially relaunched the Imo State Transport Management Authority (ISTMA). This relaunch marks a renewed commitment to effective traffic control, road safety, and transportation system modernization across the state.
            </p>
            <p className="text-gray-700 mb-6">
              The updated ISTMA is equipped with enhanced capabilities, including trained personnel, digital tools, and a clearer mandate to enforce transport regulations. This initiative is part of the state’s broader urban development and public service reform agenda.
            </p>
            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/bus.png"
                  alt="ISTMA Relaunch"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Features of the Relaunch:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Deployment of over 500 trained traffic officers across urban centers.</li>
                  <li>Introduction of body cameras and handheld devices for enforcement transparency.</li>
                  <li>New road signage, traffic lights, and lane demarcation in key areas.</li>
                  <li>Community engagement on road safety and driver responsibility.</li>
                  <li>Integration with emergency response systems for rapid incident management.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    “ISTMA’s revival is more than just enforcement; it’s about creating an organized, safe, and accountable transport system for every resident of Imo State.”
                  </span>
                </blockquote>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              The relaunch comes at a time when urban centers in the state face increasing transportation demands and safety concerns. ISTMA aims to fill critical gaps in managing road use while promoting civic responsibility among road users.
            </p>
            <p className="text-gray-700 mt-2">
              The government has assured that this reform will be sustained with regular training, infrastructure investment, and stakeholder collaboration.
            </p>
            <p className="text-gray-700 mt-2">
              As ISTMA resumes operations, residents and drivers are encouraged to support the agency efforts to restore order and promote a safer commuting experience across Imo State.
            </p>
          </div>
        </NewsBodySection>
      </section>

      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
              <div className="relative w-full h-28">
                <Image
                  src="/images/bus.png"
                  alt="ISTMA Relaunch"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-white text-xs font-semibold mb-2 line-clamp-2">
                  ISTMA Relaunch: New Transport Management Authority Takes Effect
                </div>
                <div className="text-gray-400 text-[10px]">Late June 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
