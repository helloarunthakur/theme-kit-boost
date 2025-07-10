import React from "react"
import UpdatesCard from "./updatesCard"
import { graphql, Link, useStaticQuery } from "gatsby"
import { updates } from "../../utils/updates"

const Updates = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/updates/" } }) {
        nodes {
          frontmatter {
            title
            imageURL
            createdOn
          }
          id
        }
      }
    }
  `)
  const updates = data.allMarkdownRemark.nodes
  return (
    <section class="blog__wrapper section-padding section-padding_3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3 text-center">
            <div class="section-title_2">
              <h5 class="wow fadeInUp2" data-wow-delay="0.3s">
                Latest Updates
              </h5>
              <h2 class="text-capitalize wow fadeInUp2" data-wow-delay="0.6s">
                Read Our Latest Updates & News
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {updates.map(data => (
            <div class="col-xl-4 col-md-4 col-sm-6 col-12" key={data.id}>
              <UpdatesCard
                date={data.frontmatter.createdOn}
                title={data.frontmatter.title}
                image={data.frontmatter.imageURL}
              />
            </div>
          ))}
        </div>
        <div class="row">
          {/* <!--<div class="row" k-repeat="[[Business.updates,u,0:3]]" k-show="False">-->
              <!--   <div class="col-lg-4 col-md-6 mt-30" >-->
              <!--    [[partial('/partial/updates-card.html')]]-->
              <!--  </div>-->
              <!--</div>--> */}

          <div class="col-12 text-center mt-50">
            <Link
              to="/latest-updates"
              class="theme-btn rounded wow fadeInUp2"
              data-wow-delay="0.6s"
            >
              All Updates <i class="fas fa-chevron-double-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Updates
