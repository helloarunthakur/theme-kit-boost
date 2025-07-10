import React from "react"
import ProductCard from "./ProductCard"
import { products } from "../../utils/products"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Services() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 3
        filter: { fileAbsolutePath: { regex: "/products/" } }
      ) {
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
    <div>
      <section class="our-service-wrapper section-padding bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="block-contents text-center">
                <div class="section-title">
                  <h5>Products</h5>
                  <span class=" d-block wow fadeInUp2" data-wow-delay="0.3s">
                    Featured Products
                  </span>
                  <h2 class="wow fadeInUp2" data-wow-delay="0.6s">
                    What We Do
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            {products.map(data => (
              <div class="col-xl-4 col-md-6 col-12" key={data.id}>
                <ProductCard
                  title={data.frontmatter.title}
                  image={data.frontmatter.imageURL}
                  description={data.frontmatter.description}
                  category={data.frontmatter.category}
                />
              </div>
            ))}
          </div>
          <div class="row">
            <div class="col-12 text-center mt-50">
              <Link
                to="/all-products"
                className="theme-btn rounded wow fadeInUp2"
                data-wow-delay="0.6s"
              >
                All Products
                <i class="fas fa-chevron-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
