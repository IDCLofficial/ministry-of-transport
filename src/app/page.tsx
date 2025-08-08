import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";

import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
        backgroundVideo="/videos/home.mp4"
        overlayText="Imo State Ministry of Transport"
        heading="Transforming Transportation. "
        description="At the Imo State Ministry of Transport, we are committed to transforming transportation in Imo through safety, innovation, and accountability."
      />
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Transport"
        description="Welcome to the Imo State Ministry of Transport
We regulate transport activities in Imo State to ensure safety, revenue efficiency, and infrastructure growth. Our ministry is dedicated to transforming transportation through innovative policies, modern infrastructure, and strict regulatory compliance.

Established through the restructuring of former transport affairs, social welfare, and community development departments, this Ministry brings focus to the vast opportunities in Imo’s social landscape—empowerment, protection, and more.
"
        buttonText="See More"
        image1="/images/truck.png"
        image2="/images/bus.png"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.jpg"
        imageAlt="Chief Emeka Okoronkwo, Commissioner for Transport, Imo State Government"
        title="About The Commissioner"
        bio="Chief Emeka Okoronkwo is the current Commissioner for Transport in Imo State, appointed in January 2025 by Governor Hope Uzodimma. Known for his disciplined leadership, he previously served as Commissioner for Youth and Sports before being redeployed to the transport sector."
        details="Since taking office, Chief Okoronkwo has restored order to Imo’s transport system, earning praise for managing an accident-free 2024–2025 festive season. He led reforms including the election of new ISTOA executives, elimination of illegal motor parks, and enforcement of the Treasury Single Account (TSA) policy. Known for his hands-on leadership, he regularly visits terminals and engages with drivers to ensure policies serve the public effectively."
        
buttonText="What We Do"
        buttonHref="/services"
      />
      <div className="bg-white">

      {/* Skill Up Section */}
      <SkillUpSection />
      {/* Quick Links Section */}
      <QuickLinksSection />
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

      {/* Stats Section */}
      <Stats />
      {/* Featured Partners Section */}
      <FeaturedPartners />
      {/* CTASection */}
      <CTASection
        heading="Collaborate on Transport Reform"
        subtext="Be part of our mission to transform transportation in Imo State through safety, innovation, and accountability."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
