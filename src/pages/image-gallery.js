import React from "react"
import "../style/imgGallery.css"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"

export default function imageGallery() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Image Gallery" />
      <div className="container">
        <div className="row">
          <section className="gallery-container">
            <div className="gallery-item">
              <img
                className="gallery-image"
                src="https://fpimages.withfloats.com/actual/67d9b11ad6015d67fc985cc2.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image"
                src="https://fpimages.withfloats.com/actual/67d9b11ace6fe59228dd2543.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image"
                src="https://fpimages.withfloats.com/actual/67d9b11aac61bcb0eef6600d.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image"
                src="https://fpimages.withfloats.com/actual/67d9b11b6b32e5c1f0a2f8bc.jpeg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image"
                src="https://fpimages.withfloats.com/actual/67d9b11a0e5be36a356b7d16.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
