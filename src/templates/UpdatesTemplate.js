import React from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import UpdatesCard from "../components/common/updatesCard"
import { graphql } from "gatsby"

export default function UpdatesTemplate({ data }) {
  const updates = []
  const updateData = data.markdownRemark.frontmatter
  const imageURL = updateData.imageURL
    ? updateData.imageURL
    : "https://bizimages.withfloats.com/actual/686f4dd9235401ec14be3563.jpg"
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Latest Updates" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div>
              <div className="blog-post-details border-wrap single-blog-content">
                <div className="single-blog-content-container">
                  <div class="single-blog-post post-details">
                    <img
                      class="albumImage image"
                      src={imageURL}
                      alt="update image"
                      loading="lazy"
                    />
                    {/* <!--htmlstring --> */}
                    <div
                      class="content details-Description"
                      k-widgetprop="details-Description"
                    >
                      <div>
                        <br /> {updateData.description}
                      </div>
                    </div>
                  </div>
                  <div class="row tag-share-wrap">
                    <div class="col-lg-8 col-12">
                      <span
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        <i class="fal fa-calendar-alt"></i> &nbsp;
                        <span
                          class="date-format content-posted-date"
                          id="update-posted-date"
                          title="Jul 10th, 2025 10:51 AM"
                          style={{
                            cursor: "pointer",
                            fontFamily: "var(--secondary-font) !important",
                          }}
                        >
                          Jul 10th, 2025 10:51 AM
                        </span>
                      </span>
                    </div>
                    <div class="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      {/* <!--<h4>Social Share</h4>--> */}
                      <div class="social-share">
                        <span
                          style={{
                            fontFamily: "var(--secondary-font) !important",
                          }}
                        >
                          Share this on :{" "}
                        </span>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/sharer/sharer.php?u=https://manufacturing.getboost360.com/latest-update/sloar-solutions/753"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                          target="_blank"
                          href="https://pinterest.com/pin/create/button/?url=https://manufacturing.getboost360.com/latest-update/sloar-solutions/753&amp;media=https://bizimages.withfloats.com/actual/686f4dd9235401ec14be3563.jpg&amp;description=this is solar best"
                        >
                          <i class="fab fa-pinterest-p"></i>
                        </a>
                        <a
                          target="_blank"
                          href="https://api.whatsapp.com/send?text=this is solar best%20https://manufacturing.getboost360.com/latest-update/sloar-solutions/753"
                        >
                          <i class="fab fa-whatsapp"></i>
                        </a>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/sharing/share-offsite/?url=https://manufacturing.getboost360.com/latest-update/sloar-solutions/753"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <h4
                      style={{ fontFamily: "var(--primary-font) !important" }}
                    >
                      Keywords
                    </h4>
                    <div class="tagcloud">
                      <a
                        href="https://manufacturing.getboost360.com/search/solar-solutions-for-efficient-energy/1"
                        class="update-keywords-tags"
                        title="SOLAR SOLUTIONS FOR EFFICIENT ENERGY"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        SOLAR SOLUTIONS FOR EFFICIENT ENERGY
                      </a>

                      <a
                        href="https://manufacturing.getboost360.com/search/solar-installation-and-services/1"
                        class="update-keywords-tags"
                        title="SOLAR INSTALLATION AND SERVICES"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        SOLAR INSTALLATION AND SERVICES
                      </a>

                      <a
                        href="https://manufacturing.getboost360.com/search/best-solar-energy-providers/1"
                        class="update-keywords-tags"
                        title="BEST SOLAR ENERGY PROVIDERS"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        BEST SOLAR ENERGY PROVIDERS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="related-post-wrap">
                <div className="single-blog-content-container">
                  <div class="suggested-update-v-f">
                    <h3
                      style={{ fontFamily: "var(--primary-font) !important" }}
                    >
                      Related Posts
                    </h3>
                    {/* <!--<a href="" class="view-all-detail-btn" style="margin-top: 10px;">View all posts</a>--> */}
                  </div>
                  <div class="row">
                    {updates.map(data => (
                      <div
                        class="col-xl-4 col-md-4 col-sm-6 col-12"
                        key={data.id}
                      >
                        <UpdatesCard
                          date={data.frontmatter.createdOn}
                          title={data.frontmatter.title}
                          image={data.frontmatter.imageURL}
                        />
                      </div>
                    ))}
                  </div>
                  <div class="suggested-update-v-l">
                    <a
                      href="https://manufacturing.getboost360.com/latest-updates/1"
                      class="view-all-detail-btn d-flex justify-content-end mt-5 text-uppercase"
                      style={{
                        marginTop: "10px",
                        fontFamily: "var(--secondary-font) !important",
                      }}
                    >
                      View all posts
                    </a>
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

export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        imageURL
        description
      }
    }
  }
`
