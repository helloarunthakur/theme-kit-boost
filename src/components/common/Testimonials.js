import React from "react"

export default function Testimonials() {
  return (
    <div k-partial="">
      <section
        class="testimonial-carousel-wrapper section-padding pb-0"
        k-show="[[[Business.testimonials.length()>0]]"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3 text-center col-12">
              <div class="block-contents">
                <div class="section-title">
                  <span class="d-block wow fadeInUp2" data-wow-delay="0.3s">
                    04. Testimonials
                  </span>
                  <h2 class="wow fadeInUp2" data-wow-delay="0.6s">
                    What People say about us
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-12">
              <div
                class="testimonial-carousel-active owl-carousel"
                k-repeat="[[Business.testimonials, t, 0:5]]"
              >
                <div
                  class="single-testimonial-item"
                  itemscope=""
                  itemtype="http://schema.org/Review"
                >
                  <div
                    class="outer-circle"
                    itemprop="itemReviewed"
                    itemscope
                    itemtype="https://schema.org/Organization"
                  >
                    <div style={{ display: "none" }}>
                      <span itemprop="name">[[business.name]]</span>
                      <span itemprop="telephone">
                        [['+' + Business.countrycode ]][[
                        (Business.contacts[0].contactnumber.substr(0,1)=='0') &&
                        (Business.contacts[0].contacttype.tolower() == 'vmn')?
                        Business.contacts[0].contactnumber.substr(1,Business.contacts[0].contactnumber.length())
                        : Business.contacts[0].contactnumber ]]
                      </span>
                      <span itemprop="address">
                        [[business.address.fulladdress]]
                      </span>
                    </div>
                  </div>
                  <p
                    class="wow fadeInUp2"
                    data-wow-delay="0.3s"
                    itemprop="reviewBody"
                    data-description="[[Business.testimonials[t].testimonialbody]]"
                  >
                    [[Business.testimonials[t].testimonialbody]].
                  </p>
                  <div class="client-info">
                    <h5
                      class="wow fadeInUp2"
                      data-wow-delay="0.6s"
                      itemprop="author"
                    >
                      [[Business.testimonials[t].reviewername]]
                    </h5>
                    {/* <!--<span class="d-block wow fadeInUp2" data-wow-delay="0.9s">CEO, Snyder Digital</span>--> */}
                  </div>
                  <img
                    src="https://web.s-cdn.boostkit.dev/webaction-files/67dd161916df35677e31c42b_featuredclients/marlboro-logo-6809c6d6a25bcd3f27c6fb18.png"
                    alt="testimonial image"
                    itemprop="image"
                    style={{ display: "none" }}
                    loading="lazy"
                    k-hide="[[Business.testimonials[t].profileimage.tileimage.url == '' || Business.testimonials[t].profileimage.tileimage.url == null]]"
                  />
                  <div
                    k-hide="[[Business.testimonials[t].profileimage.tileimage.url == '' || Business.testimonials[t].profileimage.tileimage.url == null]]"
                    class="client-img bg-cover bg-center wow fadeInUp2"
                    data-wow-delay="1s"
                    style={{
                      backgroundImage: `url('https://web.s-cdn.boostkit.dev/webaction-files/67dd161916df35677e31c42b_featuredclients/marlboro-logo-6809c6d6a25bcd3f27c6fb18.png')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
