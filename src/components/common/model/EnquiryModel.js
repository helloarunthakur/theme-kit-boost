import React from "react"
import "./enquiryModel.css"
export default function EnquiryModel() {
  return (
    <div
      class="modal fade"
      id="enquiryModel"
      k-partial=""
      style={{ paddingRight: 15 }}
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-0 p-2">
          <div class="modal-body d-flex justify-content-between align-items-center pb-0">
            <h1
              class="modal-title fs-5 text-uppercase"
              id="enquiryModelLabel"
              style={{ fontFamily: "var(--primary-font) !important" }}
            >
              Send a message
            </h1>
            <button
              type="button"
              data-bs-dismiss="modal"
              width="25px"
              class="bg-transparent"
              //   onclick="closeModelHandle()"
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.68451 5.33359L11.1548 0.863259C11.3197 0.69837 11.3197 0.441876 11.1548 0.276987C10.9899 0.112098 10.7334 0.112098 10.5686 0.276987L6.09823 4.74731L1.62791 0.276987C1.46302 0.112098 1.20652 0.112098 1.04164 0.276987C0.876746 0.441876 0.876746 0.69837 1.04164 0.863259L5.51196 5.33359L1.04164 9.80391C0.876746 9.9688 0.876746 10.2253 1.04164 10.3902C1.11492 10.4635 1.22485 10.5184 1.33477 10.5184C1.4447 10.5184 1.55462 10.4818 1.62791 10.3902L6.09823 5.91986L10.5686 10.3902C10.6418 10.4635 10.7518 10.5184 10.8617 10.5184C10.9716 10.5184 11.0815 10.4818 11.1548 10.3902C11.3197 10.2253 11.3197 9.9688 11.1548 9.80391L6.68451 5.33359Z"
                  fill="var(--primary-color)"
                  stroke="var(--primary-color)"
                  stroke-width="0.266487"
                ></path>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <div class="" id="formSection">
              <div>
                <textarea
                  class="w-100 p-2"
                  id="enquiryTextArea"
                  placeholder="Enter your requirement here..."
                ></textarea>
              </div>
              <div class="d-flex flex-sm-row flex-column gap-2 mt-2">
                <input
                  placeholder="Your name"
                  type="text"
                  class="form-control rounded-0 enquiryInput"
                  id="name"
                />
                <input
                  placeholder="Your email address"
                  type="email"
                  class="form-control rounded-0 enquiryInput"
                  id="emailAddress"
                />
              </div>
              <div class="mt-3 pb-2">
                <button
                  class="model-submitBtn fw-semibold border-r-4 secondary-hover-btn"
                  id="enquirySubmitBtn"
                  style={{ fontFamily: "var(--secondary-font) !important" }}
                >
                  Submit
                </button>
                <div class="mt-3 d-none" id="errorMessage">
                  <span style={{ color: "#B53D4D" }} id="errorText"></span>
                </div>
              </div>
            </div>

            {/* <!--Thank You Screen--> */}

            <div class="d-none" id="successSection">
              <p
                class="model-p"
                style={{ fontFamily: "var(--secondary-font) !important" }}
              >
                Thank you for writing to us. One of our executive will reach
                back to you through your submitted medium. In case there’s an
                urgency, feel free to connect over WhatsApp for faster response.
              </p>
              <div class="mt-3 pb-2">
                <button
                  class="model-submitBtn-success d-flex align-items-center justify-content-center whatsapp-link border-r-4"
                  style={{
                    height: 60,
                    fontFamily: "var(--secondary-font) !important",
                  }}
                >
                  <span
                    class="d-block"
                    style={{ fontFamily: "var(--secondary-font) !important" }}
                  >
                    Chat with us on whatsapp
                  </span>
                  <img
                    src="//kitsune-cdn-demo.com/6792228e101b6a6540e12c77/cwd/assets/images/wa-icon.svg?v=28"
                    height="25px"
                    class="ms-1"
                  />
                </button>
                <span
                  class="mt-2 d-block"
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontFamily: "var(--secondary-font) !important",
                  }}
                >
                  Prefer calling? Dial +9108048033299 (International callers) or{" "}
                  <a
                    href="tel:08048033299"
                    style={{ fontFamily: "var(--secondary-font) !important" }}
                  >
                    08048033299
                  </a>{" "}
                  (Indian callers).
                </span>
              </div>
            </div>
            {/* <!--Thank You Screen--> */}
          </div>
        </div>
      </div>
    </div>
  )
}
