import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/components/ObjectivesSection";
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
                aboutText="The Ministry of Transport in Imo State plays a crucial role in driving economic growth and improving mobility across the state. It is dedicated to developing sustainable transport systems, regulating road traffic, and ensuring the safety of commuters. The ministry is a key player in enhancing connectivity, supporting commerce, and improving access to essential services for residents. Over the years, successive governments have recognized the importance of investing in modern transport infrastructure, upgrading public transit, and implementing policies that make transportation safer, more efficient, and more inclusive for all citizens in Imo State."

                imgSrc="/images/IMSG-Logo.svg"
                altText="Our Story - Imo State Ministry of Transport conference event"
            />
            <MissionVisionCard />
           <TeamPage/>
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