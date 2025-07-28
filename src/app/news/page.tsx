import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Suspense } from "react";

import { TopHero } from "@/components/TopHero";

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Transforming Transportation Across Imo State" titleLabel="News" />
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <Suspense fallback={<div>Loading...</div>}>
          <NewsSidebar />
        </Suspense>
        <div className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>
            <NewsGrid />
          </Suspense>
        </div>
      </div>
      <CTASection
       heading="Join Us in Transforming Transportation Across Imo State"
       subtext="Join us in transforming transportation across Imo State through our projects and initiatives."
       buttonLabel="Contact Us"
       buttonHref="/contact-us"
      />
                    
      <Footer />
    </div>
  );
}
