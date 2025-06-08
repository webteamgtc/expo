import React from 'react';
import Image from 'next/image'; // If you're using Next.js; use <img> otherwise

const TalkTrendsSection = () => {
    return (
        <section className="bg-[#0A1045] text-white py-20">
            <div className=' container mx-auto'>
                <div className=" flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Text Content */}
                    <div className="lg:max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
                            Talk Trends, Not Just Tactics.
                        </h2>
                        <p className="text-base leading-relaxed mb-12 text-[#D1D5DB]">
                            Everyone’s chasing the next big thing. AI tools, faster flows, smarter funnels.
                            But not everyone’s talking about what’s actually working. We’re happy to share what
                            we’re seeing across the industry, what’s changing, and where the smart money’s going.
                        </p>
                        <button className="bg-[#263f8f] text-white font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-all">
                            Book a Meeting
                        </button>
                    </div>

                    {/* Image */}
                    <div className="relative w-[280px] h-[280px] shrink-0 rounded-full overflow-hidden shadow-xl border-4 border-[#16225c]">
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
