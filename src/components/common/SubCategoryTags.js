import React from "react"

export default function SubCategoryTags() {
  const tags = [
    "metal sheet",
    "metal",
    "iPhone",
    "samsung",
    "laptop",
    "macbook",
    "tablet",
    "desktop",
    "monitor",
    "accessories",
    "gaming",
    "gaming laptop",
    "gaming desktop",
    "gaming monitor",
    "gaming accessories",
  ]
  return (
    <div class="">
      <h4 style={{ fontFamily: "var(--primary-font) !important;" }}>
        Subcategory Tags
      </h4>

      <div class="tags-content">
        <div class="tags-wrapper" id="tagsWrapper">
          {tags.map((tag, index) => (
            <a
              class="tag-btn"
              href={`https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/tag/${tag}/${index}`}
              key={index}
              style={{
                fontFamily: "var(--secondary-font) !important;",
              }}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
