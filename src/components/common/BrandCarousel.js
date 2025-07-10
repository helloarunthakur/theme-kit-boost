import React from "react"
import BrandLogos from "./BrandLogos"
import { graphql, useStaticQuery } from "gatsby"
import OwlCarouselComp from "./OwlCarousel"
export default function BrandCarousel() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/testimonialbrands/" } }
      ) {
        nodes {
          frontmatter {
            title
            image
            link
          }
          id
        }
      }
    }
  `)
  const logos = data.allMarkdownRemark.nodes

  return (
    <div class="brande_logo__wrapper section-padding section-padding_3">
      <div class="container text-center">
        <OwlCarouselComp>
          {logos.map((item, index) => (
            <BrandLogos
              key={index}
              title={item.frontmatter.title}
              image={item.frontmatter.image}
            />
          ))}
        </OwlCarouselComp>
      </div>
    </div>
  )
}

export const config = {
  ssr: false,
}
// This config is necessary to disable server-side rendering for this component
