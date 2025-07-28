'use client'

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Modernization of Motor Parks",
    description: "Comprehensive upgrade of motor parks across Imo State with modern facilities, improved infrastructure, and enhanced security to provide better services for commuters and operators.",
    status: "active",
  },
  {
    title: "Road Safety Campaigns",
    description: "Implementation of comprehensive road safety awareness programs and enforcement initiatives to reduce accidents and promote responsible driving behavior across the state.",
    status: "active",
  },
  {
    title: "Urban Transportation Planning",
    description: "Development of strategic urban transport plans including the implementation of 56 designated bus stops in Owerri to decongest traffic and streamline intra/inter-state transport operations.",
    status: "active",
  },
  {
    title: "ISTMA Enforcement Operations",
    description: "Strengthening the Imo State Traffic Management Authority (ISTMA) as a single enforcement body to eliminate redundant task forces and streamline transport regulation.",
    status: "active",
  },
  {
    title: "Partnerships with NURTW, VIO, FRSC",
    description: "Strategic collaboration with National Union of Road Transport Workers (NURTW), Vehicle Inspection Office (VIO), and Federal Road Safety Corps (FRSC) to enhance transport regulation and safety standards.",
    status: "closed",
  },
  {
    title: "Heavy-Duty Vehicle Restrictions",
    description: "Implementation of peak-hour restrictions (6 a.m. to 6 p.m.) on heavy-duty vehicles with waiver provisions for essential service operators to reduce congestion and improve traffic flow.",
    status: "closed",
  },
];

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === "active");
  const closedProjects = projects.filter(p => p.status === "closed");

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="w-full md:w-[90vw] flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-700 mb-6">Projects & Initiatives</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Active Projects</h2>
            <div className="space-y-4">
              {activeProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:bg-green-100 transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg text-green-800 mb-1">{project.title}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Closed Projects</h2>
            <div className="space-y-4">
              {closedProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-gray-100 rounded-xl border-l-4 border-gray-400 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Images Side */}
        <div className="flex-1 flex flex-col items-center justify-center lg:w-[20%] gap-6 py-4">
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
            <Image src="/images/commisioner.png" alt="Projects 1" fill className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
            <Image src="/images/truck.png" alt="Projects 2" fill className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
            <Image src="/images/bus.png" alt="Projects 3" fill className="object-cover hover:scale-110 transition-transform duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
} 