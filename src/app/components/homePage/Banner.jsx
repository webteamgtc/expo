"use client";
import Image from "next/image";
import React, { useState } from "react";
import CalendlyButton from "./CalendlyButton";

const BannerSection = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());

  return (
    <div className="bg-img-banner">
      <section className="bg-[#ffffffc7] flex flex-col justify-center items-center py-4 relative container mx-auto">
        {/* Content Wrapper */}
        <div className="w-full flex flex-col-reverse md:flex-row gap-6 md:py-10 items-center">
          {/* Left Content */}
          <div className="md:w-2/4 w-full text-center md:text-left px-4">
            <h1 className="text-xl md:text-4xl font-medium mb-4 leading-tight">
              Meet Me at <span className="text-secondary font-black">iFX Expo 2025</span> <br />
              & I’ll Show You How GTC Can Grow Your Business
            </h1>

            <p className="text-sm md:text-base mb-4">
              We’re joining iFX Expo 2025 this June and we’d love to connect with you. Whether you’re a broker, affiliate, or just exploring new opportunities, let’s chat and see how we can grow together.
            </p>

            <p className="font-medium text-black mb-6 text-base">
              <strong>Save the dates: 17-18-19 June!</strong>
            </p>

           
             <div className="grid grid-cols-2 md:grid-cols-4 text-center text-sm">
                                <div>
                                    <img src="/icon-05.webp" alt="Trading" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Trusted & Regulated Worldwide</p>
                                </div>
                                <div>
                                    <img src="/icon-02.webp" alt="Tools" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Nearly 1 Million Active Traders Worldwide</p>
                                </div>
                                <div>
                                    <img src="/icon-03.webp" alt="Infrastructure" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Instant Deposits & Withdrawals</p>
                                </div>
                                <div>
                                    <img src="/icon-04.webp" alt="Rewards" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Secure, Instant & Super-Fast Execution</p>
                                </div>
                            </div>
          </div>

          {/* Right Image Section */}
          <div className="text-center md:w-2/4 w-full px-4">
            <Image
              src="/homepage/02.png"
              alt="Ahmed Fouad"
              width={300}
              height={400}
              className="mx-auto w-42 md:w-full lg:w-2/4 max-w-sm object-contain"
              priority
            />
            <div className="bg-[#263f8f] text-white rounded-tl-xl rounded-br-xl px-6 py-3 w-fit mx-auto text-sm font-medium shadow-md mt-2">
              Ahmed Fouad <br />
              <span className="text-xs">Head of Institutional Sales - Dubai</span>
            </div>
          </div>
        </div>

        <div className="py-5 md:mb-8">
          <CalendlyButton
            url="https://calendly.com/mohammad-zeeshan-gtcfx"
            text="Book a Meeting"
            className="mt-6 bg-secondary text-white rounded-full cursor-pointer px-6 py-3 font-medium hover:bg-primary transition"
          />
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
