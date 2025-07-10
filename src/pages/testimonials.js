import React from "react"
import "../style/testimonial.css"
import TestimonialCard from "../components/common/TestimonialCard"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"

export default function testimonials() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Testimonials" />
      <section className="blog__wrapper section-padding section-padding_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <TestimonialCard />
            </div>
            <div className="col-lg-4 col-md-6">
              <TestimonialCard />
            </div>
            <div className="col-lg-4 col-md-6">
              <TestimonialCard />
            </div>
            <div className="col-lg-4 col-md-6">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
