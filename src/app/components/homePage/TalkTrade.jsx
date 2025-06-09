import React from 'react';
import Image from 'next/image'; // If you're using Next.js; use <img> otherwise
import CalendlyButton from './CalendlyButton';

const TalkTrendsSection = () => {
    return (
        <section className="bg-primary text-white py-10 md:py-16 border-b border-[#ffffff1e]">
            <div className=' container mx-auto'>
                <div className=" flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Text Content */}
                    <div className="lg:max-w-xl text-center lg:text-left">
                        <h2 className="text-xl md:text-3xl font-semibold mb-5">
                            Talk Trends, Not Just Tactics.
                        </h2>
                        <p className="text-base leading-relaxed mb-10">
                            Everyone’s chasing the next big thing, AI tools, faster flows, smarter funnels. But not everyone’s talking about what’s actually working. We’re happy to share what we’re seeing across the industry, what’s changing, and where the smart money’s going.
                        </p>
                        <CalendlyButton
                            url="https://calendly.com/mohammad-zeeshan-gtcfx"
                            text="Book a Meeting"
                            className=" bg-white hover:bg-secondary text-primary hover:text-white rounded-full cursor-pointer px-6 py-3 font-medium hover:bg-primary-dark transition"
                        />
                    </div>

                    {/* Image */}
                    <div className="hidden md:block relative w-[280px] h-[280px] shrink-0 rounded-full overflow-hidden shadow-xl border-4 border-[#16225c]">
                        <Image
                            src={"/homepage/04.png"}
                            alt="Calendar"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalkTrendsSection;
