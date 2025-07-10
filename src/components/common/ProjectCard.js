import { Link } from "gatsby"
import React from "react"

const ProjectCard = ({ heading, image, category }) => {
  const noImage =
    "https://web.s-cdn.boostkit.dev/webaction-files/590eb16267962d794869f304_projects/vaisala-s5-office-solar-67f6b40d802c5abe13a89998.jpg"
  return (
    <div
      class="project__item mt-30 wow fadeInUp2"
      data-wow-delay="0.2s"
      itemscope=""
      itemtype="http://schema.org/CreativeWork"
      k-partial=""
      style={{
        visibility: "visible",
        animationDelay: "0.2s",
        animationName: "fadeInUp2",
      }}
    >
      <img src="" alt="" itemprop="image" style={{ display: "none" }} />
      <Link to="/projects/detail"></Link>
      <div
        class="project__img bg-center bg-cover"
        style={{
          backgroundImage: `url(${image ? image : noImage})`,
        }}
      >
        <div class="project__content">
          <p class="truncate-lines" style={{ lineClamp: 1 }}>
            {category}
          </p>
          <h3 class="truncate-lines" style={{ lineClamp: 2 }} itemprop="name">
            {heading}
          </h3>
          <div class="text-end">
            <Link to="/projects/detail" itemprop="url">
              View Details<i class="fas fa-chevron-double-right"></i>
            </Link>
          </div>
          <div class="element">
            <img
              src="//kitsune-cdn-demo.com/6792228e101b6a6540e12c77/cwd/assets/img/home6/vector_06.svg?v=3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
