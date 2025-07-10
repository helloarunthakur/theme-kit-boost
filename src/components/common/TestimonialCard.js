import React from "react"

export default function TestimonialCard() {
  return (
    <div class="card p-3 text-left px-4">
      <div class="user-image">
        <img
          itemprop="image"
          src="https://web.s-cdn.boostkit.dev/website-files/575ff4b59ec6680eec32aa27/673cf22e5d1979c3d2833185-673cf22fb30688123787cfc9.png"
          class="rounded-circle"
          alt="testimonial image"
        />
      </div>

      <div class="user-content">
        <h5
          class="mb-0"
          itemprop="author"
          style={{ fontFamily: "var(--secondary-font) !important;" }}
        >
          trtwr
        </h5>
        <span></span>
        <p
          itemprop="reviewBody"
          data-title=""
          data-description="rtrt"
          style={{ fontFamily: "var(--secondary-font) !important;" }}
        >
          rtrt
        </p>
      </div>
    </div>
  )
}
