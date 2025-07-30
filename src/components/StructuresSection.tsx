import Image from "next/image";
import AnimatedSection from "./AnimatedSection2";
interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
  row1: [
    {
      title: "Traffic Control and Enforcement",
      description: "Oversees the Imo State Traffic Management Authority (ISTMA) and enforces motor park regulations to ensure road discipline and traffic order."
    },
    {
      title: "Transport Planning and Infrastructure",
      description: "Manages the development and maintenance of roads, parks, and transport terminals to improve connectivity and infrastructure quality."
    },
    {
      title: "Vehicle Licensing and Inspection Services",
      description: "Handles vehicle registration, driver licensing, and inspection duties, often in collaboration with the VIO to ensure road safety and compliance."
    },
  ],
  row2: [
    {
      title: "Finance and Administration",
      description: "Responsible for budgeting, procurement, human resources, and compliance to ensure efficient resource management and operational excellence."
    },
    {
      title: "Legal Services",
      description: "Provides legal backing for enforcement activities, regulatory matters, and legislative input to strengthen transport governance."
    },
  ]
};

    return (
      <section className="w-full bg-[#1D1D1D] py-20">
      <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
          {/* Header */}
          <h2 className="text-[43px] font-medium text-white">
              Our Structure
          </h2>
          <p className="text-white text-sm sm:text-base md:text-[1rem] mb-8 sm:mb-16 w-full sm:w-[80%] md:w-[70%] mx-auto">
            The Ministry of Transport is involved in the regulation of transport activities in Imo State to ensure safety, revenue efficiency, and infrastructure growth.
</p>

          {/* Main Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-20">
              <Image
                  src={imgSrc}
                  alt="Ministry Building"
                  fill
                  className="object-cover"
                  priority
              />
          </div>

          {/* Department Cards Grid */}
          <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                  {departments.row1.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
              <div className="flex flex-col md:flex-row w-full gap-2">
                  {departments.row2.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <AnimatedSection>
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                          </AnimatedSection>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/departments"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors shadow-md"
            >
              See More
            </a>
          </div>
      </div>
  </section>
    );
}; 