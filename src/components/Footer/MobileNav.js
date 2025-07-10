import React, { useEffect, useState } from "react"
import "../../style/mobileNav.css"
import { Link } from "gatsby"
export default function MobileNav() {
  const [menuVisible, setMenuVisible] = useState("")
  const handleHandleMenu = menuName => {
    if (menuVisible === menuName) {
      setMenuVisible("")
    } else {
      setMenuVisible(menuName)
    }
  }
  useEffect(() => {
    const menuIcon = document.querySelector(".menuIcon")
    const menuBar = document.getElementById("menu-bar-nav-mobile")
    const overlay = document.querySelector(".overlay-menubar")
    const icon = document.querySelector(".menuIcon .tab-icon")
    const label = document.querySelector(".menuIcon .tab-label")
    document.body.classList.add("body-wrapper")

    const handleMenuClick = () => {
      if (!menuBar || !overlay || !icon || !label) return

      const isEnabled = menuBar.classList.contains("enable")

      menuBar.classList.toggle("enable")
      overlay.classList.toggle("enable")

      if (isEnabled) {
        icon.innerHTML = `<i class="fas fa-bars"></i>`
        label.innerText = `Menu`
        document.querySelector(".body-wrapper").style.overflow = "auto"
      } else {
        const color = "var(--primary-color)"
        icon.innerHTML = `<i class="fas fa-times-circle"></i>`
        label.innerText = `Close`
        document.querySelector(".body-wrapper").style.overflow = "hidden"
      }
    }

    menuIcon?.addEventListener("click", handleMenuClick)

    // Cleanup
    return () => {
      menuIcon?.removeEventListener("click", handleMenuClick)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    if (window.screen.width < 870) {
      const color = "var(--primary-color)"
      const homePage = document.querySelector(".home-page")?.innerText
      const productPage = document.querySelector(".product-page")?.innerText
      const contactPage = document.querySelector(".contact-page")?.innerText

      const setIconAndLabel = (
        iconSelector,
        labelSelector,
        iconHTML,
        labelText
      ) => {
        const iconEl = document.querySelector(`${iconSelector} .tab-icon`)
        const labelEl = document.querySelector(`${labelSelector} .tab-label`)
        if (iconEl && labelEl) {
          iconEl.innerHTML = iconHTML
          labelEl.innerHTML = `<span style="color:${color}">${labelText}</span>`
        }
      }

      const href = window.location.href

      if (homePage + "/" === href) {
        setIconAndLabel(
          ".hometab",
          ".tabhome",
          `<svg width="24" height="24" fill="${color}" ... />`,
          "Home"
        )
      } else if (productPage === href) {
        setIconAndLabel(
          ".producttab",
          ".tabproduct",
          `<svg width="25" height="25" fill="${color}" ... />`,
          "products"
        )
      } else if (contactPage === href) {
        setIconAndLabel(
          ".quotetab",
          ".tabquote",
          `<svg width="25" height="25" fill="${color}" ... />`,
          "Quote"
        )
      }
    }
  }, [])
  return (
    <div className="onMobile">
      <div class="nav-menu-bottom">
        <Link
          className="nav-links-tab tabhome"
          to="/"
          style={{ fontFamily: "var(--secondary-font) !important" }}
        >
          <div class="tab hometab">
            <div class="tab-icon">
              <i
                class="fa-store fas"
                style={{ color: "var(--primary-color)" }}
              ></i>
            </div>
            <div
              class="tab-label"
              style={{
                fontFamily: "var(--primary-font) !important",
                fontWeight: 600,
              }}
            >
              Home
            </div>
          </div>
        </Link>
        <Link
          className="nav-links-tab tabproduct"
          to="/all-products"
          style={{ fontFamily: "var(--secondary-font) !important" }}
        >
          <div class="tab producttab">
            <div class="tab-icon">
              <i class="far fa-tags"></i>
            </div>
            <div class="tab-label">products</div>
          </div>
        </Link>

        <Link
          className="nav-links-tab tabquote"
          data-bs-toggle="modal"
          data-bs-target="#enquiryModel"
          // onclick="sendEnquiryText()"
          style={{ fontFamily: "var(--secondary-font) !important" }}
        >
          <div class="tab quotetab">
            <div class="tab-icon">
              <i class="far fa-comment-alt"></i>
            </div>
            <div class="tab-label">Quote</div>
          </div>
        </Link>

        <div class="nav-links-tab menuIcon">
          <div class="tab-icon">
            <i class="fas fa-bars"></i>
          </div>
          <div class="tab-label">Menu</div>
        </div>
      </div>
      <div class="menu-navigations flex-column" id="menu-bar-nav-mobile">
        <div
          class="pb-5"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <a href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev">
              <img
                src="https://fplogoimages.withfloats.com/actual/68072c36156ae0beb703685b.png"
                width="125px"
              />
            </a>
          </div>

          <div className="d-flex"></div>
        </div>
        <ul class="flex-grow-1 overflow-y-scroll" style={{ maxHeight: "62%" }}>
          <li
            onClick={() => handleHandleMenu("about")}
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            <span style={{ fontFamily: "var(--secondary-font) !important" }}>
              About
            </span>{" "}
            <span class="caret"></span>
          </li>

          <ul
            class={`ul-sub-list about ${
              menuVisible === "about" ? "enable" : ""
            }`}
          >
            <Link
              to="/team"
              className="ul-menu-navigations"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                Our Team
              </li>
            </Link>
            <Link
              to="/customers"
              className="ul-menu-navigations"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                Our Customers
              </li>
            </Link>
            <Link
              to="/projects"
              className="ul-menu-navigations"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                Projects
              </li>
            </Link>
            <a
              class="ul-menu-navigations"
              href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/testimonials/1"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                Testimonials
              </li>
            </a>
            <Link
              to="/faq"
              className="ul-menu-navigations"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                FAQs
              </li>
            </Link>
          </ul>

          <Link
            to="/latest-updates"
            className="ul-menu-navigations"
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            <li style={{ fontFamily: "var(--secondary-font) !important" }}>
              Latest News
            </li>
          </Link>

          <li
            onClick={() => handleHandleMenu("gallery")}
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            <span style={{ fontFamily: "var(--secondary-font) !important" }}>
              Gallery
            </span>{" "}
            <span class="caret"></span>
          </li>
          <ul
            class={`ul-sub-list gallery ${
              menuVisible === "gallery" ? "enable" : ""
            }`}
          >
            <a
              class="ul-menu-navigations"
              href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/image-gallery/1"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                Photo Gallery
              </li>
            </a>
            <a
              class="ul-menu-navigations"
              href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/videos/1"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <li style={{ fontFamily: "var(--secondary-font) !important" }}>
                Video Gallery
              </li>
            </a>
          </ul>

          <a
            class="ul-menu-navigations"
            href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/brochure/1"
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            <li style={{ fontFamily: "var(--secondary-font) !important" }}>
              Brochure
            </li>
          </a>

          <a
            class="ul-menu-navigations"
            href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/pages/1"
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            <li
              class=""
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              More
            </li>
          </a>
          <Link
            to="/contact"
            className="ul-menu-navigations"
            href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/mapview/28-7040592/77-10249019999999"
            style={{ fontFamily: "var(--secondary-font) !important" }}
          >
            <li
              class="border-0"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div class="nav-menu-contact-details">
          <ul class="d-flex flex-column gap-3">
            <a
              href="mailto:braj.madhav@nowfloats.com"
              class="d-flex align-items-center gap-2"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <div class="contact-logo">
                <i class="fas fa-envelope"></i>
              </div>
              <li
                class="border-0 mb-0 pb-0 fw-semibold"
                style={{ fontFamily: "var(--secondary-font) !important" }}
              >
                braj.madhav@nowfloats.com
              </li>
            </a>
            <a
              href="tel:08048033299"
              class="d-flex align-items-center gap-2"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <div class="contact-logo">
                <i class="fas fa-phone"></i>
              </div>
              <li
                class="border-0 mb-0 pb-0 fw-semibold"
                style={{ fontFamily: "var(--secondary-font) !important" }}
              >
                08048033299
              </li>
            </a>
            <a
              href=""
              class="d-flex align-items-center gap-2"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              <div class="contact-logo">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <li
                class="border-0 mb-0 pb-0 fw-semibold"
                style={{ fontFamily: "var(--secondary-font) !important" }}
              >
                New Delhi, India
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div class="overlay-menubar"></div>
    </div>
  )
}
