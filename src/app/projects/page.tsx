import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "./ProjectCard";

export default function Projects() {
    return (
        <div>

            <TopHero
                ministryName="Transforming Transportation Across Imo State"
                titleLabel="Projects"
            />

            {/* SkillUp Project */}
            <OngoingProjects />

            <CTASection
                heading="Join Us in Transforming Transportation Across Imo State"
                subtext="Be part of our mission to transform transportation across Imo State."
                buttonLabel="Contact Us"
                buttonHref="/contact-us"
            />
            {/* Footer */}
            <Footer />

        </div>
    )
}