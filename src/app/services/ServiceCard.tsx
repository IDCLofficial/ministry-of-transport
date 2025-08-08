import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

const services = [
  {
    title: "Road Transport Regulation",
    description:
      "Regulating road transport operations, including registration, licensing, and monitoring of commercial vehicles and transport unions across Imo State.",
  },
  {
    title: "Traffic Management and Safety",
    description:
      "Collaborating with traffic enforcement agencies to ensure smooth vehicular movement, reduce road accidents, and promote safety awareness among road users.",
  },
  {
    title: "Urban Mass Transit Development",
    description:
      "Promoting efficient and affordable public transportation systems such as Buses and Tricycles to ease commuter movement within cities and rural areas.",
  },
  {
    title: "Motor Park Administration",
    description:
      "Establishing, organizing, and maintaining government-approved motor parks while eliminating illegal ones to ensure orderliness and security.",
  },
  {
    title: "Transport Infrastructure Planning",
    description:
      "Designing and supporting the development of modern transport infrastructure including bus terminals, transport hubs, and rural access roads.",
  },
  {
    title: "Stakeholder Engagement and Union Management",
    description:
      "Engaging with transport unions, operators, and community leaders to ensure peaceful coexistence, policy compliance, and continuous service improvement.",
  },
  {
    title: "Policy Formulation and Implementation",
    description:
      "Developing and enforcing transport policies that align with the state’s development goals, focusing on ease of movement, economic growth, and public convenience.",
  },
];



const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
 <AnimatedSection>
 <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
  </div>
  </AnimatedSection>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}