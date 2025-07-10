import React, { useEffect } from "react"
import "./Header/header.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import SearchPopup from "./Header/SearchPopup"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            submenu {
              name
              link
            }
          }
        }
      }
    }
  `)
  const menuLinks = data.site.siteMetadata.menuLinks
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header-2")
      if (window.scrollY > 200) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    })
  }, [])
  return (
    <>
      <header className="header-wrap header-2">
        <div className="call-action" style={{ display: "none" }}>
          <a href="tel:08048033299">08048033299</a>
        </div>

        <div className="desktop-header">
          {/* Top Bar */}
          <div className="container-fluid top-bar d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center gap-3 top-menu"
              style={{ width: "33%", justifyContent: "start" }}
            >
              <div
                className="location-container"
                style={{
                  visibility: "visible",
                  opacity: 1,
                  transition: "visibility, opacity 1s",
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>New Delhi</span>
              </div>
              <a href="tel:08048033299">
                <i
                  className="fas fa-phone"
                  style={{ transform: "rotate(105deg)" }}
                ></i>{" "}
                08048033299
              </a>
            </div>

            <div className="row align-items-center">
              <div className="text-center">
                <a href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev">
                  <img
                    src="https://fplogoimages.withfloats.com/actual/68072c36156ae0beb703685b.png"
                    className="logo"
                    alt="Logo"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            <div
              className="d-flex align-items-center gap-3"
              style={{ width: "33%", justifyContent: "end" }}
            >
              <div className="cart">
                <Link to="/cart" className="text-decoration-none text-primary">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Link>
              </div>
              <a
                href="javascript:void(0)"
                className="text-decoration-none text-primary search-open-btn"
                onClick={() => {
                  let element = document.querySelector(".search__popup")
                  element.classList.add("search-opened")
                }}
              >
                <i className="fas fa-search"></i> Search
              </a>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="container-fluid nav-bar">
            <ul
              className="nav justify-content-center flex-wrap"
              style={{ gap: "10px" }}
            >
              {menuLinks.map((menuItem, index) => (
                <li key={index} className="nav-item">
                  {menuItem.submenu && menuItem.submenu.length > 0 ? (
                    <a
                      className="nav-link dropdown-toggle no-caret"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {menuItem.name} <i className="fas fa-chevron-down"></i>
                    </a>
                  ) : (
                    <Link
                      to={menuItem.link}
                      className="nav-link dropdown-toggle no-caret"
                    >
                      {menuItem.name}
                    </Link>
                  )}
                  {menuItem.submenu && menuItem.submenu.length > 0 && (
                    <ul className="dropdown-menu">
                      {menuItem.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          {subItem.link.startsWith("http") ? (
                            <a
                              className="dropdown-item"
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link to={subItem.link} className="dropdown-item">
                              {subItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="mobile-top">
          <div
            className="location-container-mobile"
            style={{
              visibility: "visible",
              opacity: 1,
              transition: "visibility, opacity 1s",
            }}
          >
            <i className="fas fa-map-marker-alt"></i> &nbsp;
            <span>New Delhi</span>
          </div>
          <a href="tel:08048033299">
            <i
              className="fas fa-phone me-1"
              style={{ transform: "rotate(105deg)" }}
            ></i>{" "}
            08048033299
          </a>
        </div>

        <div className="mobile-main">
          <div className="cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart fa-lg"></i>
            </Link>
          </div>

          <a href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev">
            <img
              src="https://fplogoimages.withfloats.com/actual/68072c36156ae0beb703685b.png"
              className="logo"
              loading="lazy"
              alt="Logo"
            />
          </a>

          <a
            href="javascript:void(0)"
            className="search-open-btn"
            onClick={() => {
              let element = document.querySelector(".search__popup")
              element.classList.add("search-opened")
            }}
          >
            <i className="fas fa-search fa-lg"></i>
          </a>
        </div>
      </header>
      <SearchPopup />
    </>
  )
}

export default Header
