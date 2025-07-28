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
        backgroundImage="/images/bus.png"
        overlayText="Imo State Ministry of Transport"
        heading="Transforming Transportation. "
        subheading="Ensuring Safety & Innovation."
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
        imageSrc="/images/commisioner.png"
        imageAlt="Chief Emeka Okoronkwo, Commissioner for Transport, Imo State Government"
        title="About The Commissioner"
        bio="Chief Emeka Okoronkwo is the current Commissioner for Transport in Imo State, appointed in January 2025 by Governor Hope Uzodimma. Known for his disciplined leadership, he previously served as Commissioner for Youth and Sports before being redeployed to the transport sector."
        details="Since taking office, he has focused on restoring order and efficiency to the transport system. His coordination efforts led to a smooth, accident-free 2024–2025 festive season in Imo, earning him praise for effective traffic management. He also oversaw the successful election and inauguration of new executives in the Imo State Tricycle Operators Association (ISTOA), urging them to uphold peace and obey traffic laws.  Under his leadership, the Ministry of Transport has intensified efforts to eliminate illegal motor parks, reduce congestion in major towns, and enforce the Treasury Single Account (TSA) policy to curb revenue leakages. He believes that a clean and well-organized transport system is vital to the state’s development and public safety.

Chief Okoronkwo’s approach combines enforcement with education. He regularly holds meetings with transport unions, tricycle operators, and commercial drivers, reminding them that government policies are not meant to punish, but to improve the system for everyone. He is known for visiting terminals unannounced, interacting directly with drivers and commuters to understand their daily experiences. This hands-on style has endeared him to many, as it shows he is not just issuing directives from an office, but actively listening and responding to the needs of the people."
        buttonText="Contact Details"
        buttonHref="/contact-us"
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
