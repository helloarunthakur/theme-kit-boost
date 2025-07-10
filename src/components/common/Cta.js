import React from "react"

export default function Cta() {
  return (
    <section class="cta-wrapper cta-theme-bg" k-partial="">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-7 col-md-8 col-12">
            <div class="cta-text align-items-center d-md-flex text-center text-md-start">
              <i class="flaticon-email wow fadeInUp2" data-wow-delay="0.3s"></i>
              <h2 class="wow fadeInUp2" data-wow-delay="0.6s">
                Have any custom requirements?
              </h2>
            </div>
          </div>
          <div class="col-xl-5 col-md-4 text-center text-md-end">
            <a
              href="[[View('/contact.html').getUrl()]]"
              class="theme-btn border-btn text-center wow fadeInUp2"
              data-wow-delay="0.3s"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
