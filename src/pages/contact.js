import React from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import ContactMap from "../components/common/contactMap"

export default function contact() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Contact" />
      <div className="contact-us-wrapper section-padding">
        <div className="container">
          <div className="row eq-height">
            <div class="col-lg-8 col-12">
              <div class="contact-form">
                <h2 style={{ fontFamily: "var(--primary-font) !important;" }}>
                  Get in Touch
                </h2>
                <form
                  action="https://example.com/Bizpro/mail.php"
                  method="POST"
                  class="row"
                  id="contact-form"
                >
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Number"
                        id="contactNumberGetInTouch"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div class="col-md-12 col-12">
                    <div class="single-personal-info">
                      <textarea name="message" placeholder="message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 col-12">
                    <input
                      class="submit-btn border-r-4 secondary-hover-btn"
                      type="submit"
                      value="Submit Now"
                    />
                  </div>
                </form>
                <span class="form-message"></span>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="contact-us-sidebar mt-5 mt-lg-0">
                <div class="service-details-sidebar service-details-sidebar-hide">
                  <div
                    class="single-service-sidebar site_info_widget"
                    k-partial=""
                  >
                    <div class="sidebar-title">
                      <h3
                        style={{
                          fontFamily: "var(--primary-font) !important;",
                        }}
                      >
                        Contact Us
                      </h3>
                    </div>
                    <div class="contact-us">
                      <div class="single-contact-info">
                        <div class="icon">
                          <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-info">
                          <span
                            style={{
                              fontFamily: "var(--secondary-font) !important;",
                            }}
                          >
                            Phone Number
                          </span>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "cloumn",
                              gap: "4px",
                            }}
                          >
                            <a
                              href="tel:08048033299"
                              style={{
                                fontFamily: "var(--primary-font) !important;",
                              }}
                            >
                              08048033299
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="single-contact-info">
                        <div class="icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-info">
                          <span
                            style={{
                              fontFamily: "var(--secondary-font) !important;",
                            }}
                          >
                            Email Address
                          </span>
                          <a
                            style={{
                              wordBreak: "break-word",
                              fontFamily: "var(--primary-font) !important;",
                            }}
                            href="mailto:braj.madhav@nowfloats.com"
                          >
                            braj.madhav@nowfloats.com
                          </a>
                        </div>
                      </div>
                      <div class="single-contact-info">
                        <div class="icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-info">
                          <span
                            style={{
                              fontFamily: "var(--secondary-font) !important;",
                            }}
                          >
                            Office Address
                          </span>
                          <a
                            href="#"
                            style={{
                              fontFamily: "var(--primary-font) !important;",
                            }}
                          >
                            A456, Poshetti's mansion street, Sri Ramji Nagar,
                            Khari Baoli
                          </a>
                          <p
                            style={{
                              fontFamily: "var(--secondary-font) !important;",
                            }}
                          >
                            New Delhi, India,500084
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="live-chat whatsapp-link">
                  <h2
                    style={{
                      fontFamily: "var(--primary-font) !important;",
                    }}
                  >
                    Live Chat
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--secondary-font) !important;",
                    }}
                  >
                    Connect over WhatsApp to resolve your queries realtime.
                  </p>
                  <a
                    class="border-rs"
                    href="#"
                    style={{
                      fontFamily: "var(--secondary-font) !important;",
                    }}
                  >
                    <img
                      src="//kitsune-cdn-demo.com/6792228e101b6a6540e12c77/cwd/assets/images/wa-icon.svg?v=20"
                      height="22px"
                      width="22px"
                      class="me-1"
                    />{" "}
                    <span
                      class="d-block"
                      style={{
                        fontFamily: "var(--secondary-font) !important;",
                      }}
                    >
                      Live WhatsApp Chat
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
    </Layout>
  )
}
