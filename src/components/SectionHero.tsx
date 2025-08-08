import Image from "next/image";

interface SectionHeroProps {
    aboutText: string;
    imgSrc: string;
    altText: string;
}

export const SectionHero = ({ aboutText, imgSrc, altText }: SectionHeroProps) => {
    return (
        <section className="w-full py-10 sm:py-20">
            <div className="mx-auto px-4 sm:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-6">
                    {/* Left Section - Text Content */}
                    <div className="w-full lg:w-2/3 p-4 sm:p-10 rounded-xl flex flex-col justify-center bg-white">
                        <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-black mb-4 sm:mb-8">
                            About the Ministry
                        </h2>
                        <p className="text-dark-primary-body text-base sm:text-[1rem] leading-7 sm:leading-8">
                            {aboutText}
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div className="relative w-full lg:w-1/3 flex items-stretch">
                        <div className="relative w-full h-auto">
                            <Image 
                                src={imgSrc}
                                alt={altText}                       
                                className="object-cover rounded-xl h-full w-full"
                                fill
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
