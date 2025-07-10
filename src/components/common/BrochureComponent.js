import React from "react"

export default function BrochureComponent() {
  return (
    <div class="page-card page-card1 brochure-page-card page-card-hover">
      <div class="brochure-card-text">
        <div className="brochure-flex">
          <a
            href="https://web.s-cdn.boostkit.dev/webaction-files/597c6bbfee786c8284e8d3bb_uploadpdf/receipt_nf-fy2022-23-81828517-67570206800956157ab3694a.pdf"
            title="sujan"
            target="_blank"
            style={{ fontFamily: "var(--secondary-font) !important" }}
            className="d-flex align-items-center"
          >
            <img
              class="lazy"
              src="https://cdn.kitsune.tools/ThemeAssets/593ea4970e0a1a1c70365667/pdf.svg"
              width="25px"
              height="40px"
              alt="pdf icon"
            />
            <h5 style={{ fontFamily: "var(--secondary-font) !important" }}>
              sujan
            </h5>
          </a>
        </div>
      </div>
    </div>
  )
}
