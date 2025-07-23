import React from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import { products } from "../utils/products"
import ProductCard from "../components/common/ProductCard"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { slugify } from "../utils"

export default function ProductTemplate({ data }) {
  const product = data.markdownRemark
  const productPoster = product.frontmatter.imageURL
    ? product.frontmatter.imageURL
    : "https://productimages.withfloats.com/actual/6807322a3c3dc6d740228e43.png"
  const slug = slugify(product.frontmatter.title)
  return (
    <Layout>
      <SEO
        title={product.frontmatter.title}
        description={product.frontmatter.description}
        image={productPoster}
        url={`https://theme-kit.netlify.app/products/${slug}`}
      />
      <Breadcrumb frompage="Home" topage="Products" />
      <section className="service-details-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mt-5 mt-md-0 col-12 ">
              <div className="service-details-content-wrapper pl-0 pl-md-4">
                <div className="single-service-gallery">
                  <div
                    className="single-service-photo bg-cover wow fadeInUp2 w-100"
                    style={{
                      backgroundImage: `url(${productPoster})`,
                      backgroundSize: "contain",
                      height: "450px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5 mt-md-0 col-12 mt-m-0">
              <div>
                <h6
                  class="fw-bold"
                  style={{
                    textTransform: "inherit",
                    fontFamily: "var(--secondary-font) !important",
                  }}
                >
                  <a
                    href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/solar-panels/1"
                    style={{ fontFamily: "var(--secondary-font) !important" }}
                  >
                    {product.frontmatter.category}
                  </a>{" "}
                  <span
                    class="fw-medium"
                    style={{ fontFamily: "var(--secondary-font) !important" }}
                  >
                    by
                  </span>{" "}
                  Boost Solar Solutions
                </h6>
                <h2
                  class="fs-1 service-name truncate-lines fw-bold"
                  style={{
                    lineHeight: "45px",
                    webkitLineClamp: "4",
                    fontFamily: "var(--primary-font) !important",
                  }}
                >
                  {product.frontmatter.title}
                </h2>

                <div>
                  <div class="d-flex flex-wrap gap-2 mb-2 button-container-service">
                    <button
                      class="cartBtn color-primary text-white fw-bold show flex-button"
                      id="details-enquiry"
                      style={{
                        height: 60,
                        fontFamily: "var(--secondary-font) !important",
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#enquiryModel"
                      onclick="sendEnquiryText('Mono PERC 400W Solar Panel')"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2">
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
            <div className="col-lg-9 col-md-8 col-12 order-1">
              <div class="service-details-content-wrapper pl-0 pl-md-4">
                <h3
                  class="wow fadeInUp2"
                  data-wow-delay="0.3s"
                  style={{
                    fontFamily: "var(--primary-font) !important",
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp2",
                  }}
                >
                  Description
                </h3>
                <p
                  class="wow fadeInUp2 fw-normal text-theme-blue mb-3"
                  data-wow-delay="0.3s"
                  id="product-description"
                  style={{
                    fontFamily: "var(--secondary-font) !important",
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp2",
                  }}
                >
                  Boost Manufacturing is a leading solar energy solutions
                  provider specializing in residential, commercial, and
                  industrial solar plant installations across India. <br />
                  <br />
                  With a strong focus on sustainability, cost savings, and
                  energy independence, we design and deliver customized solar
                  power systems that meet your unique <br />
                  <br />
                  requirements—whether it is a 3BHK rooftop setup or a 100kW
                  commercial installation.
                </p>

                <div class="product-tab-box single-blog-post">
                  <h3
                    class="wow fadeInUp2"
                    data-wow-delay="0.3s"
                    style={{
                      fontFamily: "var(--primary-font) !important",
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp2",
                    }}
                  >
                    Specifications
                  </h3>
                  <div class="mb-3">
                    <table class="table">
                      <tbody class="bordertable">
                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Power Output
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            400W
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Cell Type
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            Monocrystalline PERC
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Power Output
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            400W
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Warranty
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            25 Years
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Power Output
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            400W
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Dimensions
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            1755 x 1038 x 35 mm
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Power Output
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            400W
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "30%",
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "var(--secondary-font) !important",
                              }}
                            >
                              Efficiency
                            </strong>
                          </td>
                          <td
                            style={{
                              fontFamily: "var(--secondary-font) !important",
                            }}
                          >
                            20.2%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div class="d-flex justify-content-between align-items-center">
              <h2
                class="wow fadeInUp2"
                data-wow-delay="0.3s"
                style={{
                  fontFamily: "var(--primary-font) !important",
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp2",
                }}
              >
                Other Products
              </h2>
              <a
                class="d-block text-uppercase text-theme fw-bold"
                href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/all-products/1"
                style={{ fontFamily: "var(--secondary-font) !important" }}
              >
                view all
              </a>
            </div>
            <div className="row">
              {products.map(item => (
                <div className="col-xl-4 col-md-6 col-12" key={item.id}>
                  <ProductCard
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    category={item.category}
                  />
                </div>
              ))}
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
        image
        imageURL
        description
        category
        specifications
      }
    }
  }
`
