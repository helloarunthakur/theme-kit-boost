import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/common/services"
import Cta from "../components/common/Cta"
import BrandCarousel from "../components/common/BrandCarousel"
import OurTeam from "../components/common/OurTeam"
import Stats from "../components/common/Stats"
import ProjectSection from "../components/common/ProjectSection"
import Updates from "../components/common/Updates"
import FloatingAbout from "../components/common/FloatingAbout"
import About from "../components/common/About"
import VideoBanner from "../components/common/VideoBanner"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to our homepage! Discover our services, team, and latest updates."
        image="https://logosandtypes.com/wp-content/uploads/2020/11/Gatsby.png"
        url="https://theme-kit.netlify.app/"
      />
      <VideoBanner />
      {/* <FloatingAbout /> */}
      <About />
      <Services />
      <Cta />
      <BrandCarousel />
      <ProjectSection />
      <Stats />
      <OurTeam />
      <Updates />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
