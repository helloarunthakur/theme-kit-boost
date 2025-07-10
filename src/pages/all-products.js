import React from "react"
import Breadcrumb from "../components/common/Breadcrumb"
import ProductCard from "../components/common/ProductCard"
import "../style/allProducts.css"
import SubCategoryTags from "../components/common/SubCategoryTags"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

export default function AllProducts() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/" } }) {
        nodes {
          frontmatter {
            title
            imageURL
            description
            category
          }
          id
        }
      }
    }
  `)
  const products = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="All Products" />
      <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
          <div className="product-list-container mtm-40">
            <div className="list-div">
              <div class="custom-select-wrapper">
                <select class="form-select" id="serviceSelect">
                  <option value="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/all-Products/1">
                    All Products
                  </option>
                  <option value="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/rtrtret/1">
                    rtrtret
                  </option>
                </select>
                <button
                  class="close-btn"
                  id="clearBtn"
                  style={{
                    display: "none",
                    fontFamily: "var(--primary-font) !important",
                  }}
                >
                  ×
                </button>
              </div>
              <div className="row">
                {products.map(data => (
                  <div className="col-xl-6 col-md-6 col-12" key={data.id}>
                    <ProductCard
                      title={data.frontmatter.title}
                      image={data.frontmatter.imageURL}
                      description={data.frontmatter.description}
                      category={data.frontmatter.category}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="list-subcategory-div">
              <SubCategoryTags />
              <div class="service-details-sidebar service-details-sidebar-hide">
                <div
                  class="single-service-sidebar site_info_widget"
                  k-partial=""
                >
                  <div class="sidebar-title">
                    <h3
                      style={{ fontFamily: "var(--primary-font) !important;" }}
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
