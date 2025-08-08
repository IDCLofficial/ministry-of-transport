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
            aboutText="The Ministry of Transport in Imo State plays a pivotal role in shaping the state's economic development and ensuring the smooth movement of people and goods. Under the visionary leadership of His Excellency, Distinguished Senator Hope Uzodinma, the ministry has experienced a remarkable transformation, aligning with the administration’s broader goals of infrastructural renewal and people-focused governance.Governor Uzodinma has demonstrated an unwavering commitment to modernizing Imo State’s transport infrastructure. One of the landmark achievements of his administration is the successful rehabilitation and dualization of critical roads such as the Owerri-Orlu and Owerri-Okigwe roads, which have significantly eased traffic congestion, boosted trade, and enhanced regional connectivity. These major road projects, which were once thought impossible, have not only improved the aesthetic landscape of the state but have also opened up economic corridors that benefit millions.
The Ministry of Transport has also been instrumental in the reorganization of the public transportation system, introducing safer and more regulated transport services. The government has implemented measures to improve road safety, including the retraining of commercial drivers, enhanced traffic control strategies, and the installation of road signage and street lighting in key urban areas. Furthermore, the recent commissioning of modern transport terminals and the provision of new buses under the Urban Transit Scheme reflect the government’s determination to create a reliable and affordable public transport system for Imo citizens. These efforts have created jobs, reduced travel times, and ensured greater accessibility to essential services like education, healthcare, and markets.As Imo State continues to evolve into a model of urban development in the South-East, the Ministry of Transport remains at the heart of this transformation. Through effective policy implementation, stakeholder engagement, and Governor Uzodinma’s inclusive leadership, the ministry continues to make meaningful strides towards a safer, smarter, and more integrated transport system for all."

                imgSrc="/images/commisioner.jpg"
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