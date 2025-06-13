import BannerSection from '@/app/components/homePage/Banner'
import PartnerBanner from '@/app/components/homePage/PartnerBanner'
import PartnerSectionTwo from '@/app/components/homePage/PartnerBanner2'
import GoodPartner from '@/app/components/homePage/GoodPartner'
import TalkTrendsSection from '@/app/components/homePage/TalkTrade'
import RegulationBar from '@/app/components/homePage/RegularBar'
import React from 'react'

const page = () => {
  return (
    <>
     <BannerSection />
      <PartnerBanner />
      <PartnerSectionTwo />
      <GoodPartner />
      <TalkTrendsSection />
      <RegulationBar />
     
    </>
  )
}

export default page