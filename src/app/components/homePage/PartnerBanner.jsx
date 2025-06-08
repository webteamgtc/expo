import React from 'react';

const PartnerBanner = () => {
    return (
        <section className="bg-[#f4f6fe] w-full py-24 flex justify-center">
            <div className="container mx-auto  text-center">
                <div className=' max-w-3xl mx-auto'>
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#1A1A1A] leading-snug">
                        Let 2025 be the year you partner <br />
                        with a real FX leader.
                    </h2>
                    <p className="text-sm md:text-base text-[#4B4B4B] mt-6 leading-relaxed">
                        We’ve got unbeatable deals, super-fast payouts, and a team that actually has your back. Whether you’re
                        looking to grow faster or just want a better partner, let’s talk. No hard pitch, just real conversations that
                        could lead to real results. Come say hi, you won’t regret it.
                    </p>
                    <div className="mt-10">
                        <button className="bg-[#263f8f] text-white text-sm md:text-base font-semibold px-10 py-3 rounded-full hover:bg-[#142053] transition-colors duration-300">
                            Book a Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerBanner;
