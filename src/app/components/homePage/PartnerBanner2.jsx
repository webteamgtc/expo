import React from "react";

const PartnerSectionTwo = () => {
    return (
        <section className="w-full bg-white py-24 text-center">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#121212] mb-4 leading-tight">
                        Good Partners are Hard to Find.<br />
                        Great Ones Show Up.
                    </h2>
                    <p className="text-sm md:text-base text-[#666] mt-2 mb-3">
                        We get it. Finding a reliable partner in this space isn’t easy.
                        That’s why we don’t just talk numbers. We show up, stay consistent,
                        and actually care about your growth.
                    </p>
                    <p className="text-sm md:text-base font-semibold text-[#121212]">
                        Let’s build something real, no drama, no excuses, just results.
                    </p>
                    <button
                        className="mt-8 px-8 py-3 rounded-full bg-[#1E2F97] text-white font-semibold text-base hover:opacity-90 transition"
                    >
                        Count Me In
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PartnerSectionTwo;
