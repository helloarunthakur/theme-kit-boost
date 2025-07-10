import React from "react"

export default function BrandLogos({ title, image }) {
  const noImage =
    "https://web.s-cdn.boostkit.dev/webaction-files/67dd161916df35677e31c42b_featuredclients/marlboro-logo-6809c6d6a25bcd3f27c6fb18.png"
  return (
    <div class="single-brand-logo">
      <a target="_blank" itemprop="url">
        <img
          src={image ? image : noImage}
          alt={title}
          itemprop="customer"
          loading="lazy"
          height={100}
          width={100}
        />
      </a>
    </div>
  )
}
