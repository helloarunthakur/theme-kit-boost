import React from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import About from "../components/common/About"

export default function AboutUs() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="About Us" />
      <About />
    </Layout>
  )
}
