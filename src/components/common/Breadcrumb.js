import React from "react"

const Breadcrumb = ({ frompage = "Home", topage = "" }) => {
  return (
    <div class="page-banner-wrap bg-cover">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-12">
            <div class="page-heading text-white">
              <h1 class="wow fadeInUp2 text-capitalize" data-wow-delay=".9s">
                {topage}
              </h1>
            </div>
            <div class="breadcrumb-wrap">
              <nav class="wow fadeInUp2" data-wow-delay="1s">
                <ol class="breadcrumb">
                  {/* <!--<li class="breadcrumb-item text-capitalize"><a href="[[Business.rootaliasurl.url]]">Home</a></li>--> */}
                  <li class="breadcrumb-item">
                    <a>{frompage}</a>
                  </li>
                  <li
                    class="breadcrumb-item active text-capitalize"
                    aria-current="page"
                  >
                    {topage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
