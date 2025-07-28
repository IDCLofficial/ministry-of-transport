
import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Transforming Transportation Across Imo State" titleLabel="Events" />
      <EventsListSection />
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
