import React from "react"
import "../../style/VideoBanner.css"
export default function VideoBanner() {
  return (
    <section class="hero-banner">
      <div
        class="plyr plyr--full-ui plyr--video plyr--youtube plyr--fullscreen-enabled"
        id="player"
      >
        <div class="plyr__video-wrapper plyr__video-embed">
          <iframe
            id="youtube-iframe"
            src="https://www.youtube.com/embed/2EPqn-k9Pjk?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=2EPqn-k9Pjk&amp;modestbranding=1&amp;rel=0&amp;playsinline=1&amp;disablekb=1&amp;cc_load_policy=0"
            allowfullscreen=""
            allow="autoplay; fullscreen; encrypted-media"
            data-gtm-yt-inspected-8="true"
          ></iframe>
          <div class="plyr__poster"></div>
        </div>
      </div>
      <div class="hero-text truncate-lines" style={{ webkitLineClamp: "2" }}>
        <h2 style={{ fontFamily: "var(--primary-font) !important" }}>
          Think Solar, Think Us.
        </h2>
      </div>
    </section>
  )
}
