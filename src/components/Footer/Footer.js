import React from "react"
import "../../style/footer.css"
import loadable from "@loadable/component"
const MobileNav = loadable(() => import("./MobileNav"), { ssr: false })
export default function Footer() {
  return (
    <footer class="pt-3 pt-md-4 pt-xl-5" k-partial="">
      <p id="productCategoryVerbName" class="d-none">
        Products
      </p>
      {/* <!-- Logo & SM - Bootstrap Brain Component --> */}
      <div>
        <div class="container">
          <div class="d-flex gy-3 align-items-center footer-logo">
            <div class="col-12 col-sm-5 col-md-4 col-lg-3">
              <div class="footer-logo-wrapper text-start">
                <a href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev">
                  <img
                    src="https://fplogoimages.withfloats.com/actual/68072c36156ae0beb703685b.png"
                    alt="Boost Solar Solutions Logo"
                    height="85"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            {/* <!--        <div class="col-12 col-sm-7 col-md-8 col-lg-9">-->
<!--          <div class="social-media-wrapper">-->
<!--            <ul class="m-0 list-unstyled d-flex justify-content-start gap-4">-->
<!--              <li>-->
<!--                <a title="Check our google store" href="#!" class="link-opacity-75-hover link-primary">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">-->
<!--<path fill="#2196f3" d="M8,38c0,1.657,1.343,3,3,3h13.975L8,24.025V38z"></path><path fill="#1e88e5" d="M8,16v8.025L24.975,41H38c1.657,0,3-1.343,3-3V16H8z"></path><path fill="#81acea" d="M14.75,19.12c0,2.7-2.18,4.88-4.88,4.88C7.18,24,5,21.82,5,19.12V19h9.74 C14.75,19.04,14.75,19.08,14.75,19.12z"></path><path fill="#3f51b5" d="M24.5,19v0.12c0,2.7-2.18,4.88-4.88,4.88c-2.69,0-4.87-2.18-4.87-4.88c0-0.04,0-0.08,0.01-0.12H24.5 z"></path><path fill="#81acea" d="M34.25,19.12c0,2.7-2.18,4.88-4.88,4.88c-2.69,0-4.87-2.18-4.87-4.88V19h9.74 C34.25,19.04,34.25,19.08,34.25,19.12z"></path><path fill="#3f51b5" d="M44,19v0.12c0,2.7-2.18,4.88-4.88,4.88c-2.69,0-4.87-2.18-4.87-4.88c0-0.04,0-0.08,0.01-0.12H44z"></path><path fill="#82b1ff" d="M9.562,7c-0.918,0-1.718,0.625-1.94,1.516L5.01,18.98C5,18.99,5,18.99,5,19h9.766l1.5-12H9.562z"></path><polygon fill="#5c6bc0" points="16.266,7 14.766,19 24.5,19 24.5,7"></polygon><path fill="#5c6bc0" d="M44,19c0-0.01,0-0.01-0.01-0.02L41.378,8.516C41.156,7.625,40.356,7,39.438,7h-6.703l1.5,12H44z"></path><polygon fill="#82b1ff" points="32.735,7 24.5,7 24.5,19 34.235,19"></polygon><path fill="#ededed" d="M33.649,38.299c-2.563,0-4.649-2.086-4.649-4.649S31.086,29,33.649,29 c1.072,0,2.119,0.374,2.947,1.054l-1.269,1.547C34.85,31.207,34.269,31,33.649,31C32.188,31,31,32.188,31,33.649 s1.188,2.649,2.649,2.649c1.107,0,2.058-0.683,2.453-1.649h-2.1v-2h4.296v1C38.298,36.213,36.213,38.299,33.649,38.299z"></path>-->
<!--</svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#!" title="Follow our facebook page" class="link-opacity-75-hover link-primary">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#0866FF" class="bi bi-facebook" viewBox="0 0 16 16">-->
<!--                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li>-->
<!--                <a href="#!" class="link-opacity-75-hover link-primary" title="Follow our X handle">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" class="bi bi-twitter-x" viewBox="0 0 16 16">-->
<!--                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
             
<!--              <li>-->
<!--                <a href="#!" class="link-opacity-75-hover link-primary" title="Follow our instagram profile">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0069" class="bi bi-instagram" viewBox="0 0 16 16">-->
<!--                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>--> */}
          </div>
        </div>
      </div>

      {/* <!-- Widgets - Bootstrap Brain Component --> */}
      <section class="py-4 py-md-5 py-xl-6">
        <div class="container">
          <div class="row gy-3">
            <div class="col-12 col-lg-7 col-xl-6">
              <div class="widget">
                <h4 class="widget-title mb-3">
                  <a href="tel:08048033299">
                    <i
                      class="fas fa-phone"
                      style={{ transform: `rotate(105deg)` }}
                    ></i>{" "}
                    <span>08048033299</span>
                  </a>
                </h4>
                <h4 class="widget-title mb-3">
                  <a href="mailto:braj.madhav@nowfloats.com">
                    <i class="fas fa-envelope"></i>&nbsp;{" "}
                    <span>braj.madhav@nowfloats.com</span>
                  </a>
                </h4>
              </div>
              <div class="widget">
                <h4 class="widget-title mb-3 lowercase-except-first">
                  Subscribe to Our Newsletter
                </h4>
                {/* <!--<p class="mb-4">-->
            <!--  Don't miss out on the opportunity to be part of something great. <br>-->
            <!--  Subscribe now and let the journey begin!-->
            <!--</p>--> */}
                <form action="#!" id="subscription-form">
                  <div class="gy-4">
                    <div class="col-12">
                      <div class="input-group">
                        <span
                          class="input-group-text"
                          id="email-newsletter-addon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                          </svg>
                        </span>
                        <input
                          type="email"
                          class="form-control"
                          id="email-newsletter"
                          value=""
                          placeholder="Email Address"
                          aria-label="email-newsletter"
                          aria-describedby="email-newsletter-addon"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-12" style={{ marginTop: 16 }}>
                      <div class="d-grid mb-3 mb-lg-0">
                        <button class="btn btn-primary" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="captcha-div"
                    class="g-recaptcha"
                    data-sitekey="6LenqkskAAAAAAjKBV51eKoTpeyg24Lkw_zzr9Oz"
                    style={{
                      display: "none",
                      marginTop: 6,
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: 304, height: 78 }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-jf8ssihuu5xx"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LenqkskAAAAAAjKBV51eKoTpeyg24Lkw_zzr9Oz&amp;co=aHR0cHM6Ly81NzVmZjRiNTllYzY2ODBlZWMzMmFhMjcucHJldmlldy5ib29zdGtpdC5kZXY6NDQz&amp;hl=en&amp;v=w0_qmZVSdobukXrBwYd9dTF7&amp;size=normal&amp;cb=3tqpyel6jowl"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        class="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: " 10 25",
                          padding: 0,
                          resize: "none",
                          display: "none",
                        }}
                      ></textarea>
                    </div>
                    <iframe style={{ display: "none" }}></iframe>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-6 col-lg-2 col-xl-2">
              <div class="link-wrapper">
                <h4 class="widget-title mb-3">Recently updated products</h4>
                <ul class="m-0 list-unstyled">
                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/tag/ertert/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <i class="far fa-search"></i> &nbsp;<span>ertert</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/tag/machinery/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <i class="far fa-search"></i> &nbsp;<span>machinery</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/tag/yruru/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <i class="far fa-search"></i> &nbsp;<span>yruru</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/tag/uyruyru/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <i class="far fa-search"></i> &nbsp;<span>uyruyru</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/tag/dfdf/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <i class="far fa-search"></i> &nbsp;<span>dfdf</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-6 col-lg-3 col-xl-4">
              <div class="link-wrapper">
                <h4 class="widget-title mb-3 lowercase-except-first">
                  Top Products categories
                </h4>
                <ul class="m-0 list-unstyled">
                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/test/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <span>Test</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/hdjd/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <span>hdjd</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/test-cate/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <span>Test Cate</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/hdjdj/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <span>hdjdj</span>
                    </a>
                  </li>

                  <li class="mb-3">
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/products/category/sample-product-category/1"
                      class="link-dark text-decoration-none link-opacity-75-hover"
                    >
                      <span>Sample Product Category</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Copyright - Bootstrap Brain Component --> */}
      <div class="py-3 py-md-4 py-xl-5 bg-light">
        <div class="container">
          <div class="row g-3 align-items-center mobile-footer-copyright">
            <div class="col-12 col-lg-6 order-1 order-lg-0">
              <p id="hyperlink" style={{ display: "none" }}>
                ©2025. All Rights Reserved.
              </p>
            </div>
            <div class="col-12 col-lg-6 order-0 order-lg-1">
              <div class="link-wrapper">
                <ul class="m-0 list-unstyled d-flex justify-content-center justify-content-lg-end gap-2 gap-md-3">
                  <li>
                    <a
                      href="#!"
                      onclick="reportAbuse()"
                      title="Click here to report any content on this website"
                      class="link-underline-opacity-0 link-opacity-75-hover link-underline-opacity-100-hover link-offset-1 link-secondary fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border"
                    >
                      <span>Report Abuse</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/sitemap.xml"
                      title="Sitemap"
                      class="link-underline-opacity-0 link-opacity-75-hover link-underline-opacity-100-hover link-offset-1 link-secondary fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border"
                    >
                      <span>Sitemap</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span style={{ display: "none" }} id="GET-VALUE(TEMPLATE-ID)">
        68108b28e34dbe77f656ddb1
      </span>
      <MobileNav />
    </footer>
  )
}
