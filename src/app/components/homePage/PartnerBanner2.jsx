import React from "react";
import CalendlyButton from "./CalendlyButton";

const PartnerSectionTwo = () => {
    return (
        <section className="w-full bg-white py-10 md:py-16 text-center">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
                        Good Partners are Hard to Find.<br />
                        Great Ones Show Up.
                    </h2>
                    <p className="text-sm md:text-base mt-6">
                        We get it. Finding a reliable partner in this space isn’t easy.
                        That’s why we don’t just talk numbers. We show up, stay consistent,
                        and actually care about your growth.
                    </p>
                    <p className="text-sm md:text-lg font-semibold text-primary max-w-xs mx-auto mt-6">
                        Let’s build something real, no drama, no excuses, just results.
                    </p>
                    <div className='pt-10'>
                                                               <CalendlyButton
                                                                   url="https://calendly.com/mohammad-zeeshan-gtcfx"
                                                                   text="Book a Meeting"
                                                                   className="bg-secondary text-white rounded-full cursor-pointer px-6 py-3 font-medium hover:bg-primary transition"
                                                               />
                                                           </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSectionTwo;
