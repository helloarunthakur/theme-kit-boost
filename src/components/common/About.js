import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
        frontmatter {
          title
          description
          imageURL
          heading
          about
        }
        html
      }
    }
  `)
  const frontmatter = data.markdownRemark.frontmatter
  return (
    <section className="about-section section-padding section-padding_3 padding-top-0">
      <div className="container">
        <div class="row">
          <div
            id="about-image-container"
            class="col-xl-6 col-md-6 col-12  mt-30 mobile-hide"
          >
            <div
              class="about-cover-bg bg-cover me-xl-5 wow fadeInUp2"
              data-wow-delay="0.05s"
              style={{
                backgroundImage: `url(${frontmatter.imageURL})`,
                visibility: "visible",
                animationDelay: "0.05s",
                animationName: "fadeInUp2",
              }}
            ></div>
          </div>
          <div
            id="about-text-container"
            class="col-xl-6 col-md-6 mt-30 col-12 "
          >
            <div class="block-contents">
              <div class="section-title section-title_2">
                <span
                  class="d-flex wow fadeInUp2"
                  data-wow-delay="0.05s"
                  style={{
                    fontFamily: "var(--secondary-font) !important",
                    visibility: "visible",
                    animationDelay: "0.05s",
                    animationName: "fadeInUp2",
                  }}
                >
                  About Boost Solar Solutions
                </span>

                <h1
                  class="wow fadeInUp2"
                  data-wow-delay="0.05s"
                  style={{
                    fontFamily: "var(--primary-font) !important",
                    visibility: "visible",
                    animationDelay: "0.05s",
                    animationName: "fadeInUp2",
                  }}
                >
                  {frontmatter.heading}
                  {/* The best Solar Energy Equipment Supplier in{" "}
                  <span
                    style={{
                      textTransform: "capitalize",
                      color: "rgb(74, 74, 74)",
                      fontFamily: "var(--primary-font) !important",
                    }}
                  >
                    new delhi
                  </span> */}
                </h1>
              </div>
            </div>

            <p
              class="mt-20 wow fadeInUp2 truncate-lines"
              data-wow-delay="0.05s"
              style={{
                webkitLineClamp: "8",
                fontFamily: "var(--secondary-font) !important",
                visibility: "visible",
                animationDelay: "0.05s",
                animationName: "fadeInUp2",
              }}
              id="about-description"
              dangerouslySetInnerHTML={{ __html: frontmatter.about }}
            ></p>

            <div id="know-more-about-cont">
              <Link
                // href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/about-us"
                to="/about-us"
                className="theme-btn rounded mt-35 wow fadeInUp2 border-r-4 secondary-hover-btn"
                data-wow-delay="0.05s"
                style={{
                  fontFamily: "var(--secondary-font) !important",
                  visibility: "visible",
                  animationDelay: "0.05s",
                  animationName: "fadeInUp2",
                }}
              >
                Know More About us <i class="fas fa-chevron-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
