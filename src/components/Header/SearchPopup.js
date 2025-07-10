import React from "react"

export default function SearchPopup() {
  return (
    <div class="search__popup" style={{ backgroundColor: "#FFFFFF" }}>
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="search__wrapper">
              <div class="search__top d-flex justify-content-between align-items-center">
                <div class="search__logo">
                  <a href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev">
                    <img
                      src="https://fplogoimages.withfloats.com/actual/68072c36156ae0beb703685b.png"
                      alt="Logo image"
                      style={{ height: "4rem" }}
                    />
                  </a>
                </div>

                <div class="search__close">
                  <button
                    type="button"
                    class="search__close-btn search-close-btn"
                    onClick={() => {
                      let element = document.querySelector(".search__popup")
                      element.classList.remove("search-opened")
                    }}
                  >
                    <i
                      class="fal fa-times"
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </button>
                </div>
              </div>
              <div class="search__form">
                <form action="#" onsubmit="event.preventDefault();">
                  <div class="search__input">
                    <input
                      class="search-input-field search-input"
                      type="text"
                      placeholder="Enter what you're looking for..."
                    />
                    <span class="search-focus-border"></span>
                    <button
                      type="submit"
                      id="search-form-submit"
                      style={{ paddingBottom: "12px" }}
                    >
                      <i
                        class="fas fa-search"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
