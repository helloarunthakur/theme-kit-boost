import React from "react"
import ProjectCard from "./ProjectCard"
import { graphql, useStaticQuery } from "gatsby"
import OwlCarouselComp from "./OwlCarousel"

const ProjectSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 10
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
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
    <section
      class="our_project__wrapper section-padding section-padding_3 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://kitsune-cdn-demo.com/6792228e101b6a6540e12c77/cwd/assets/img/home6/line_01.svg?v=3')",
      }}
      k-partial=""
    >
      <div class="container">
        <div class="row align-items-center mb-30">
          <div class="col-lg-7 col-md-7">
            <div class="block-contents">
              <div class="section-title section-title_2">
                <span class="d-block fadeInUp2" data-wow-delay="0.3s">
                  Case Studies
                </span>
                <h2 class="wow fadeInUp2" data-wow-delay="0.6s">
                  Checkout Our Projects
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 text-md-end text-start mt-5 mt-md-0">
            <a
              href="[[View('/projects.html').getUrl()]]"
              class="theme-btn theme_btn__3 me-sm-4 wow fadeInUp2"
              data-wow-duration="1.2s"
              data-wow-delay=".8s"
            >
              View All Projects <i class="fas fa-chevron-double-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <OwlCarouselComp
          class="project__slider owl-carousel owl-theme"
          loop
          margin={10}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              category={project.frontmatter.category}
              image={project.frontmatter.image}
              heading={project.frontmatter.heading}
            />
          ))}
        </OwlCarouselComp>
      </div>
    </section>
  )
}

export default ProjectSection
export const config = {
  ssr: false,
}
