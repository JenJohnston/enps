import * as React from "react"
import Hero from "../components/homepage/Hero"
import Seo from "../components/seo"



// markup
const IndexPage = () => {
  return (
    <>
      <Seo title="Home"/>
      <Hero/>
    </>
  )
}

export default IndexPage
