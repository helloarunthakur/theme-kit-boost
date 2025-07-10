import React from "react"

const Stats = () => {
  return (
    <section class="fun-fact-wrapper pb-100 text-center" k-partial="">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 mt-30 col-12">
            <div class="single-fun-fact">
              <h2 className="d-flex justify-content-center">
                <span class="odometer odometer-auto-theme" data-count="7">
                  <div class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">7</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                +
              </h2>
              <h3>PROJECT DONE</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-30 col-12">
            <div class="single-fun-fact">
              <h2 className="d-flex justify-content-center">
                <span class="odometer odometer-auto-theme" data-count="8">
                  <div class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">8</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                +
              </h2>
              <h3>HAPPY CLIENTS</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mt-30 col-12">
            <div class="single-fun-fact">
              <h2 className="d-flex justify-content-center">
                <span class="odometer odometer-auto-theme" data-count="3">
                  <div class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">3</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
                +
              </h2>
              <h3>SKILLED STAFF</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
