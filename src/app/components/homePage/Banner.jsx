"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import BookingCalendar from './BookingCalendar';
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

import dynamic from 'next/dynamic';
import CalendlyButton from './CalendlyButton';



const BannerSection = () => {
    const [appointmentDate, setAppointmentDate] = useState(new Date());

    return (
        <>
            <div className='bg-img-banner'>
                <section className="bg-white flex flex-col justify-center items-center py-4 relative  container mx-auto">
                    {/* Book Now Button */}
                    <div className=" w-full flex justify-between items-center">
                        <div>
                            <Image
                                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
                                width={200}
                                height={72}
                                alt="GTCFX"
                                className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                            // onClick={() => {
                            //     router.push("/", { locale: locale });
                            // }}
                            />
                        </div>
                        <div className='calendar-div'>
                            <CalendlyButton
                                url="https://calendly.com/mohammad-zeeshan-gtcfx"
                                text="Book Now"
                                className="bg-[#0d153a] cursor-pointer px-5 py-2 rounded-full text-white text-sm font-medium shadow hover:bg-primary-dark transition"
                            />
                        </div>
                    </div>


                    {/* Content Wrapper */}
                    <div className="w-full flex flex-col md:flex-row gap-3 py-10 items-center">
                        {/* Left Content */}
                        <div className=' md:w-3/5 w-full'>

                            <h1 className="text-2xl md:text-3xl font-medium mb-4">
                                Meet Me at <span className="text-primary font-bold">iFX Expo 2025</span> <br />
                                & I’ll Show You How GTC Can Grow Your Business
                            </h1>

                            <p className="text-gray-600 mb-4">
                                We’re joining iFX Expo 2025 this June and we’d love to connect with you. Whether you’re a broker, affiliate, or just exploring new opportunities, let’s chat and see how we can grow together.
                            </p>

                            <p className="font-medium text-black mb-6">
                                <strong>Save the dates: 17-18-19 June!</strong>
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                                <div>
                                    <img src="/homepage/icon-05.svg" alt="Trading" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>All-in-One Trading Products & Packages</p>
                                </div>
                                <div>
                                    <img src="/homepage/icon-02.svg" alt="Tools" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Trading Tools & Affiliate Program Solutions</p>
                                </div>
                                <div>
                                    <img src="/homepage/icon-03.svg" alt="Infrastructure" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Powerful Back Office & Infrastructure</p>
                                </div>
                                <div>
                                    <img src="/homepage/icon-04.svg" alt="Rewards" className="mx-auto h-10 mb-2" />
                                    <p className='text-xs text-[#be9b74]'>Secure Rewards & Super Fast Execution</p>
                                </div>
                            </div>

                        </div>

                        {/* Right Image Section */}
                        <div className="text-center md:w-2/5 w-full">
                            <img
                                src="/homepage/02.png"
                                alt="Ahmed Fouad"
                                className="mx-auto w-60 lg:w-2/4 max-w-sm"
                            />
                            <div className="bg-[#263f8f] text-white rounded-tl-xl rounded-br-xl px-6 py-3 w-fit mx-auto text-sm font-medium shadow-md">
                                Ahmed Fouad <br /> <span className="text-xs">Head of Institutional Sales - Dubai</span>
                            </div>
                        </div>
                    </div>
                    <div className='pb-20'>
                        <CalendlyButton
                            url="https://calendly.com/mohammad-zeeshan-gtcfx"
                            text="Book a Meeting"
                            className="mt-6 bg-[#263f8f] text-white rounded-full cursor-pointer px-6 py-3 font-medium hover:bg-primary-dark transition"
                        />
                    </div>
                </section>

            </div>
        </>
    );
};

export default BannerSection;
