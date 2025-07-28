import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
  ministryName="Transforming Transportation Across Imo State"
  titleLabel="Departments"
/>
      <UnitsTabsSection />
    
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
