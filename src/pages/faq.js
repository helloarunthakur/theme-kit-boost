import React from "react"
import Breadcrumb from "../components/common/Breadcrumb"
import Layout from "../components/layout"

export default function faq() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="FAQs" />
      <section class="faq-wrapper section-padding pb-0">
        <div class="container">
          <div class="col-12 col-xl-12 text-center">
            <div class="block-contents mb-50">
              <div class="section-title">
                <span
                  class="d-block wow fadeInUp2"
                  data-wow-delay="0.3s"
                  style={{
                    fontFamily: "var(--secondary-font) !important",
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp2",
                  }}
                >
                  Common Queries Answered
                </span>
                <h2
                  class="wow fadeInUp2"
                  data-wow-delay="0.6s"
                  style={{
                    fontFamily: "var(--secondary-font) !important",
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp2",
                  }}
                >
                  Frequently Asked Questions?
                </h2>
              </div>
            </div>
          </div>

          <div class="row equal">
            <div class="col-lg-7 col-12 col-xl-8">
              <div class="faq-accordion">
                <div class="accordion no-border me-lg-5" id="accordion">
                  <div
                    class="accordion-item wow fadeInUp2"
                    data-wow-delay="0.2s"
                    style={{
                      fontFamily: "var(--secondary-font) !important",
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp2",
                    }}
                  >
                    <h4
                      class="accordion-header"
                      style={{ fontFamily: "var(--secondary-font) !important" }}
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-0"
                        aria-expanded="false"
                        aria-controls="faq-0"
                        style={{ fontFamily: "var(--primary-font) !important" }}
                      >
                        tyety?
                      </button>
                    </h4>
                    <div
                      id="faq-0"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div class="accordion-body">tyty</div>
                    </div>
                  </div>

                  <div
                    class="accordion-item wow fadeInUp2"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp2",
                    }}
                  >
                    <h4
                      class="accordion-header"
                      style={{ fontFamily: "var(--secondary-font) !important" }}
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-1"
                        aria-expanded="false"
                        aria-controls="faq-1"
                        style={{ fontFamily: "var(--primary-font) !important" }}
                      >
                        name?
                      </button>
                    </h4>
                    <div
                      id="faq-1"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div class="accordion-body">mihir</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 mt-5 mt-lg-0 col-lg-5 col-12">
              <div
                class="faq-sidebar wow fadeInUp2 faq-side-bar-sticky"
                data-wow-delay="0.6s"
                style={{
                  fontFamily: "var(--secondary-font) !important",
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp2",
                }}
              >
                <div class="icon mb-4">
                  <img
                    src="//kitsune-cdn-demo.com/6792228e101b6a6540e12c77/cwd/assets/img/newbie.png?v=11"
                    alt=""
                  />
                </div>
                <h3 style={{ fontFamily: "var(--primary-font) !important" }}>
                  Have a different query?
                </h3>
                <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Please feel free to contact us by submitting a business
                  inquiry.
                </p>

                <a
                  href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/mapview/28-7040592/77-10249019999999"
                  style={{ fontFamily: "var(--secondary-font) !important" }}
                >
                  <i class="fas fa-phone-square"></i> Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
