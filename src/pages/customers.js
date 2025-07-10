import React from "react"
import "../style/customer.css"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import { graphql, useStaticQuery } from "gatsby"

const Customers = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/testimonialbrands/" } }
      ) {
        nodes {
          frontmatter {
            title
            image
          }
          id
        }
      }
    }
  `)
  const logos = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Customers" />
      <section class="team sec-padd">
        <div class="container">
          <div className="row flex-wrapper">
            {logos.map((item, index) => (
              <article
                key={index}
                class="col-md-3 col-sm-6 col-xs-12"
                itemscope=""
                itemtype="http://schema.org/Person"
              >
                <div class="item tran5">
                  <div>
                    <figure class="img-box">
                      <a href="https://www.allianz.com/en.html" target="_blank">
                        <img
                          src={item.frontmatter.image}
                          alt=""
                          itemprop="image"
                        />
                      </a>
                    </figure>
                    <div class="member-info" style={{ textAlign: "center" }}>
                      <a
                        href="https://www.allianz.com/en.html"
                        target="_blank"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        <h5
                          class="customer-brand-title"
                          itemprop="name"
                          style={{
                            fontFamily: "var(--secondary-font) !important",
                          }}
                        >
                          {item.frontmatter.title}
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Customers
