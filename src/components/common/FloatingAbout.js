import React from "react"
import "../../style/floating-about.css"
const FloatingAbout = () => {
  return (
    <div class="container banner-text-container " k-partial="">
      <div class="slide-content-box">
        <h1
          class="business-title-banner-overloay wow fadeInUp2"
          data-wow-delay="0.3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp2",
          }}
        >
          Boost Solar Solutions
        </h1>
        <p
          itemprop="description"
          class="description-banner-2 wow fadeInUp2"
          data-wow-delay="0.32s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp2",
          }}
        >
          Boost Manufacturing is a leading solar energy solutions provider
          specializing in residential, commercial, and industrial solar plant
          installations across India. With a strong focus on sustainability,
          cost savings, and energy ind
          <span>
            ...
            <a
              style={{ color: "var(--primary-color)", fontSize: "14px" }}
              itemprop="url"
              href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/about-us"
            >
              Read More
            </a>
          </span>
        </p>
        <div
          class="d-flex slide-content-btns"
          style={{ justifyContent: "center", alignItems: "center", gap: 16 }}
        >
          <a
            class="theme-btn rounded wow fadeInUp2"
            data-wow-delay="0.33s"
            itemprop="url"
            href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/all-products/1"
            style={{
              visibility: "visible",
              animationDelay: " 0.35s",
              animationName: "fadeInUp2",
            }}
          >
            View products
          </a>
          <button
            class="theme-btn rounded wow fadeInUp2"
            style={{
              backgroundColor: "rgb(74, 74, 74)",
              visibility: "visible",
              animationDelay: " 0.35s",
              animationName: "fadeInUp2",
            }}
            data-wow-delay="0.35s"
            data-bs-toggle="modal"
            data-bs-target="#enquiryModel"
            onclick="sendEnquiryText()"
          >
            Send enquiry
          </button>
        </div>
      </div>
    </div>
  )
}

export default FloatingAbout
