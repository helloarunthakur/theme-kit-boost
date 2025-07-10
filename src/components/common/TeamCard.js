import React from "react"

const TeamCard = ({ data }) => {
  return (
    <div
      class="single-team-member wow fadeInUp2"
      data-wow-delay="0.3s"
      itemscope=""
      itemtype="http://schema.org/person"
      k-partial=""
    >
      <div class="team-img">
        <a href="#">
          <img
            src={data.frontmatter.image}
            alt="team memmber image"
            itemprop="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </a>
      </div>
      <div class="team-details-bar">
        <div class="member-details">
          <div class="member-data">
            <span itemprop="jobTitle">{data.frontmatter.designation}</span>
            <h3 itemprop="name">{data.frontmatter.name}</h3>
          </div>
          <div class="social-profile">
            <a
              k-hide="[[WebActions.MyTeam[i].fbURL.url == '']]"
              href="[[WebActions.MyTeam[i].fbURL.url]]"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              k-hide="[[WebActions.MyTeam[i].twitterURL.url == '']]"
              href="[[WebActions.MyTeam[i].twitterURL.url]]"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              k-hide="[[WebActions.MyTeam[i].skypeHandle.url == '']]"
              href="[[WebActions.MyTeam[i].skypeHandle.url]]"
            >
              <i class="fab fa-skype"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
