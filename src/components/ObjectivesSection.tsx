export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Ensure Road Safety & Traffic Order",
            description: "To establish and maintain a safe, orderly, and efficient transport system through effective traffic management, enforcement of regulations, and promotion of road safety awareness across Imo State."
        },
        {
            title: "Modernize Transport Infrastructure",
            description: "To develop and maintain modern transport infrastructure including roads, terminals, and facilities that enhance connectivity, reduce congestion, and support economic growth."
        },
        {
            title: "Streamline Vehicle & Driver Regulation",
            description: "To implement efficient vehicle registration, driver licensing, and inspection systems that ensure compliance with safety standards and regulatory requirements."
        },
        {
            title: "Enhance Revenue Collection & Efficiency",
            description: "To optimize revenue generation through transparent and efficient collection systems while ensuring proper resource allocation and financial accountability."
        },
        {
            title: "Strengthen Legal Framework & Compliance",
            description: "To develop and enforce robust legal frameworks that support transport regulation, protect public interest, and ensure compliance with transport laws and policies."
        },
        {
            title: "Improve Rural Access & Mobility",
            description: "To enhance rural connectivity through road rehabilitation, maintenance programs, and initiatives that improve access to markets, services, and opportunities for rural communities."
        }
    ];

        const coreValues = [
            "Empowerment",
            "Equity",
            "Compassion",
            "Integrity",
            "Collaboration",
            "Excellence"
        ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Imo State Ministry of Transport Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                        Imo State Ministry of Transport objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 