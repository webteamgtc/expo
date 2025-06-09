import React from 'react'
import Image from 'next/image'
import CalendlyButton from './homePage/CalendlyButton'

const Header = () => {
  return (
    <section className='p-2'>
        <div className='max-w-6xl mx-auto'>
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
                                text="Book a Meeting"
                                className="bg-secondary cursor-pointer px-5 py-2 rounded-full text-white text-sm font-medium shadow hover:bg-primary transition"
                            />
                        </div>
                    </div>


        </div>
    </section>
  )
}

export default Header