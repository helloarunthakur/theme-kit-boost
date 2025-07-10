import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const OurTeam = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 3
        filter: { fileAbsolutePath: { regex: "/ourteam/" } }
      ) {
        nodes {
          frontmatter {
            name
            designation
            image
          }
          id
        }
      }
    }
  `)
  const teams = data.allMarkdownRemark.nodes
  return (
    <section
      class="our_team__wrapper section-padding section-padding_3 bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://backgroundimages.withfloats.com/tile/68073358fd72d8bb5146082c.png')",
      }}
      k-partial=""
    >
      <div class="container">
        <div class="row">
          <div
            class="col-xl-3 col-md-4 col-sm-6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div class="team__content">
              <div class="team__title">
                <h5
                  class="d-block wow fadeInUp2"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp2",
                  }}
                >
                  OUR EXPERT STAFF
                </h5>
                <h2
                  class="wow fadeInUp2"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp2",
                  }}
                >
                  Our expert team members
                </h2>

                <Link
                  // href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/our-team/1"
                  className="theme-btn mt-20 wow fadeInUp2"
                  to="/team"
                  data-wow-delay="0.9s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp2",
                  }}
                >
                  Our Staff <i class="fas fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {teams.map(member => (
            <div class="col-xl-3 col-md-4 col-sm-6 mt-30" key={member.id}>
              <div
                class="team__element wow fadeInUp2"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp2",
                }}
              >
                <div
                  class="team_man__img bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${member.frontmatter.image})`,
                  }}
                ></div>
                <div class="team_content ">
                  <div class="single__member text-left">
                    <h4>{member.frontmatter.name}</h4>
                    <p>{member.frontmatter.designation}</p>
                    {/* <!--<a href="team-details.html" class="theme-btn">Know More <i class="fas fa-chevron-double-right"></i></a>--> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
