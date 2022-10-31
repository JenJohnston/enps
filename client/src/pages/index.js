import * as React from "react"
import Seo from "../components/seo"
import Hero from "../components/homepage/Hero"
import WildFlowerNews from "../components/homepage/WildFlowerNews"
import EventSection from "../components/homepage/EventSection"
import BlogsSection from '../components/homepage/BlogsSection'
import CommunitySection from "../components/homepage/CommunitySection"
import PlantInfoSection from "../components/homepage/PlantInfoSection"



// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Home"/>
      <Hero/>
      <WildFlowerNews/>
      <EventSection/>
      <PlantInfoSection/>
      <CommunitySection/>
    </>
  )
}

export default IndexPage
