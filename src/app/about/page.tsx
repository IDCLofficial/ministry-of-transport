import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import CommissionerSection from "@/components/CommissionerSection";
import { StructuresSection } from "@/components/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/components/DigitalNews";
import TeamPage from "./Team";

export default function AboutUs() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="Ministry of Transport"
                titleLabel="About Us"
            />
            {/* Section Hero */}
            <SectionHero
                aboutText="The Ministry of Transport in Imo State serves as a vital engine for social transformation, especially as the state seeks to promote gender equality and social inclusion. While there's still room for growth and reform, the ministry represents a key opportunity for empowerment and sustainable development in Imo State.\nThe Ministry of Transport in Imo State is a government agency responsible for promoting women empowerment and regulating social welfare programs within the state. It is a strategic part of the state's development plan, especially considering Imo's diverse population.\nThe ministry was likely formed from a merger or restructuring of previous departments such as the Ministry of Transport and sections of Social Welfare units.\nOver the years, successive governments in Imo State have recognized the importance of harnessing local resources and empowering women, children, and vulnerable groups, which are abundant in the region."
                imgSrc="/images/IMSG-Logo.svg"
                altText="Our Story - Imo State Ministry of Transport conference event"
            />
           <TeamPage/>
            <MissionVisionCard />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructuresSection
                imgSrc="/images/building.png"
            />
            {/* CTASection */}
            <CTASection
                heading="Collaborate on Transport Reform"
                buttonLabel="Contact Details"
                buttonHref="/contact-us"
            />
            {/* Footer */}
            <Footer />
        </div>
    )
}