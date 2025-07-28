import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/components/projects/Projects";

export default function Projects() {
    return (
        <div>
            {/* top hero */}
            <TopHero ministryName="Transforming Transportation Across Imo State" titleLabel="Projects" />
          
            {/* SkillUp Project */}
            <OngoingProjects />
            {/* Digital section */}
            <CTASection
                heading="Join Us in Transforming Transportation Across Imo State"
        subtext="Join us in transforming transportation across Imo State through our projects and initiatives."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />

        </div>
    )
}