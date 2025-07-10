import React from "react"
import "../../style/updates-card.css"
import { Link } from "gatsby"
const UpdatesCard = ({ date = "no date", title = "no title", image }) => {
  let noImage =
    "https://fplogoimages.withfloats.com/tile/68072c36156ae0beb703685b.png"
  return (
    <Link to="/latest-updates">
      <div
        class="single-service-card single-service-card_2 update_theme_card wow fadeInUp2"
        data-wow-delay="0.2s"
        k-partial=""
        style={{
          visibility: "visible",
          animationDelay: "0.2s",
          animationName: "fadeInUp2",
        }}
      >
        <div
          class="service-cover-img bg-cover " //no-actual-img for img not found
          style={{
            backgroundImage: `url(${image ? image : noImage})`,
          }}
        ></div>
        <div class="content update-content">
          <div class="icon-title">
            <div class="service-title">
              <h4
                class="truncate-lines"
                style={{ lineClamp: 4, fontFamily: " var(--secondary-font)" }}
              >
                {title}
              </h4>
            </div>
          </div>
          <span style={{ marginTop: 8 }}>
            <i class="fal fa-calendar-alt"></i> &nbsp;
            <span
              class="date-format content-posted-date"
              id="update-posted-date"
              title="Apr 24, 2025, 05:49 PM"
              style={{ cursor: "pointer" }}
            >
              {date}
            </span>
          </span>
          {/* <!--<p class="truncate-lines" style="-webkit-line-clamp: 2;"></p>--> */}
          {/* <!--<a href="" class="theme-btn">Learn More <i class="fal fa-arrow-right"></i></a>--> */}
        </div>
      </div>
    </Link>
  )
}

export default UpdatesCard
