import React from 'react';
import CalendlyButton from './CalendlyButton';

const PartnerBanner = () => {
    return (
        <section className="bg-[#f4f6fe] w-full py-10 md:py-16 flex justify-center">
            <div className="container mx-auto  text-center">
                <div className=' max-w-3xl mx-auto'>
                    <h2 className="text-xl md:text-4xl font-semibold text-primary leading-snug">
                        Let 2025 be the Year You Partner <br />
                        with a Real FX Leader.
                    </h2>
                    <p className="text-sm md:text-base mt-6 leading-relaxed">
                        We’ve got unbeatable deals, super-fast payouts, and a team that actually has your back. Whether you’re
                        looking to grow faster or just want a better partner, let’s talk. No hard pitch, just real conversations that
                        could lead to real results. Come say hi, you won’t regret it.
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

export default PartnerBanner;
