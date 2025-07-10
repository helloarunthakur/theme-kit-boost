import React from "react"
import ProjectCard from "../components/common/ProjectCard"
import { projectsList } from "../utils/projects"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import { graphql, useStaticQuery } from "gatsby"

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          frontmatter {
            category
            image
            heading
          }
          id
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Projects" />
      <div className="container">
        <div className="row">
          {projects.map((data, i) => (
            <div className="col-xl-4 col-md-6 col-sm-6 col-12" key={data.id}>
              <ProjectCard
                key={data.id}
                heading={data.frontmatter.heading}
                image={data.frontmatter.image}
                category={data.frontmatter.category}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
