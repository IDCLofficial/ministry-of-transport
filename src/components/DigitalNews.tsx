import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function MissionVisionCard() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f7f9fa]">
      <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-[80vw] flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Ministry of Transport</h2>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-base">
              To regulate and transform transportation in Imo State through innovative policies, modern infrastructure, and strict regulatory compliance, ensuring safety, efficiency, and sustainable development for all citizens.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-base">
              A modern, efficient, and safe transportation system in Imo State that serves as a model for Nigeria, with seamless connectivity, reduced congestion, and enhanced economic opportunities for all stakeholders.
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 