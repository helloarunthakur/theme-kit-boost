import React from "react"
import Layout from "../../components/layout"
import Breadcrumb from "../../components/common/Breadcrumb"

export default function detail() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Projects" />
      <section className="container my-4">
        <div class="header mb-3">
          <h6
            class="customer-name"
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            Swasthya Rural Clinic
          </h6>
          <h2
            class="project-title"
            style={{ fontFamily: "var(--primary-font) !important" }}
          >
            Remote Clinic Solar Power Supply
          </h2>
        </div>
        <div class="img-container gallery-container">
          <div style={{ width: "100%" }}>
            <img
              class="main-img gallery-image"
              loading="lazy"
              src="https://web.s-cdn.boostkit.dev/webaction-files/590eb16267962d794869f304_projects/future-of-solar-energy-in-hospitals-67f6b47d2f28aee6919d34a2.jpg"
              alt=""
            />
          </div>
          <div class="side-img-container multiple-img">
            <img
              class="side-img gallery-image single-side-img"
              loading="lazy"
              src="https://web.s-cdn.boostkit.dev/webaction-files/590eb16267962d794869f304_projects/hospital-rooftop-solar-plant-67f6b483f462a97cc0b7b858.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="main-content">
          {/* <!-- Left Section --> */}
          <div class="left-section">
            <div class="info-group">
              <div class="info-block">
                <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Customer:
                </h6>
                <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Swasthya Rural Clinic
                </p>
              </div>
              <div class="info-block">
                <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Project Category:
                </h6>
                <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Healthcare
                </p>
              </div>
              <div class="info-block">
                <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Customer Requirement:
                </h6>
                <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                  24x7 electricity for equipment
                </p>
              </div>
              <div class="info-block">
                <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Project Result:
                </h6>
                <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Clinic is no longer dependent on generators; cold storage and
                  ICU operations are uninterrupted.
                </p>
              </div>
              <div class="info-block">
                <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                  What we did:
                </h6>
                <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                  Installed life-support compliant hybrid inverter, established
                  backup protocol for power outages, and trained medical staff
                  on solar battery maintenance.
                </p>
              </div>
            </div>

            <div class="info-block">
              <h5 style={{ fontFamily: "var(--secondary-font) !important" }}>
                Project Description
              </h5>
              <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                This project supported a rural healthcare clinic that required
                round-the-clock electricity for life-saving equipment and
                refrigeration. We installed a 10kW hybrid system, complete with
                medical-grade voltage regulation and backup lithium batteries.
                The system now supports 24/7 operations and has helped the
                clinic reduce its diesel generator usage by 80%.
              </p>
            </div>
          </div>

          {/* <!-- Right Section --> */}
          <div class="right-section">
            <div class="info-block">
              <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                Project Budget:
              </h6>
              <p style={{ fontFamily: "var(--secondary-font) !important" }}>
                ₹6,00,000
              </p>
            </div>

            <div class="info-block">
              <h6 style={{ fontFamily: "var(--secondary-font) !important" }}>
                Completion Date:
              </h6>
              <p
                class="theme-upload-Date"
                style={{ fontFamily: "var(--secondary-font) !important" }}
              >
                <i class="fas fa-calendar"></i> &nbsp;Jun 05, 2024
              </p>
            </div>

            <div class="divider"></div>

            <div class="service-details-sidebar">
              <div class="single-service-sidebar site_info_widget">
                <div class="sidebar-title">
                  <h4 style={{ fontFamily: "var(--primary-font) !important" }}>
                    Contact Us
                  </h4>
                </div>
                <div class="contact-us">
                  <div class="single-contact-info">
                    <div class="icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div class="contact-info">
                      <span
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Phone Number
                      </span>
                      <a
                        href="tel:+918048033299"
                        style={{ fontFamily: "var(--primary-font) !important" }}
                      >
                        +918048033299
                      </a>
                    </div>
                  </div>
                  <div class="single-contact-info">
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-info">
                      <span
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Email Address
                      </span>
                      <a
                        href="mailto:braj.madhav@nowfloats.com"
                        style={{ fontFamily: "var(--primary-font) !important" }}
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
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Office Address
                      </span>
                      <a
                        href="#"
                        style={{ fontFamily: "var(--primary-font) !important" }}
                      >
                        A456, Poshetti's mansion street, Sri Ramji Nagar, Khari
                        Baoli
                      </a>
                      <p
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        New Delhi, India,500084
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
