import React from "react"
import UpdatesCard from "../components/common/updatesCard"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import { graphql, useStaticQuery } from "gatsby"

export default function LatestUpdates() {
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
    <Layout>
      <Breadcrumb frompage="Home" topage="Latest Updates" />
      <section className="blog__wrapper pt-3">
        <div className="container">
          <div className="row">
            {updates.map(data => (
              <div className="col-lg-4 col-md-6" key={data.id}>
                <UpdatesCard
                  date={data.frontmatter.createdOn}
                  title={data.frontmatter.title}
                  image={data.frontmatter.imageURL}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
