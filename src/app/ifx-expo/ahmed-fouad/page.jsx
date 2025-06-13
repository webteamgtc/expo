import BannerSection from '@/app/components/homePage/Banner'
import PartnerBanner from '@/app/components/homePage/PartnerBanner'
import PartnerSectionTwo from '@/app/components/homePage/PartnerBanner2'
import GoodPartner from '@/app/components/homePage/GoodPartner'
import TalkTrendsSection from '@/app/components/homePage/TalkTrade'
import RegulationBar from '@/app/components/homePage/RegularBar'
import React from 'react'
import Header from '@/app/components/Header'

const page = () => {
  return (
    <>
    <Header calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
     <BannerSection calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <PartnerBanner calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <PartnerSectionTwo calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <GoodPartner calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <TalkTrendsSection calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <RegulationBar />
     
    </>
  )
}

export default page