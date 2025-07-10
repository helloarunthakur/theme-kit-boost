import React from "react"
import TeamCard from "../components/common/TeamCard"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import { graphql, useStaticQuery } from "gatsby"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ourteam/" } }) {
        nodes {
          frontmatter {
            name
            designation
            image
          }
        }
      }
    }
  `)
  const teams = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Team" />
      <section class="our-team-wrapper section-padding">
        <div class="container">
          <div class="row">
            {teams.map(team => {
              return (
                <div className="col-md-6 col-xl-4 col-12">
                  <TeamCard data={team} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Team
