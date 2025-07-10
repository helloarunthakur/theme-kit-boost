import React from "react"

export default function ContactMap() {
  return (
    <div class="contact-map-wrap">
      <div id="map">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          className="border-0"
          src="https://www.google.com/maps/embed/v1/place?q=28.7040592,77.10249019999999&amp;zoom=15&amp;key=AIzaSyDz5vOp_4ebrlGOV0FyuSf_w5jHBIQz5iQ"
        ></iframe>
      </div>
    </div>
  )
}
