import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer/Footer"
import "../style/styles.css"
import "../style/style.css"
import "../style/cart.css"
import "../style/checkout.css"
import "../style/meanmenu.css"
import "../utils"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import "../style/icon.min.css"
import EnquiryModel from "./common/model/EnquiryModel"

// const WOW = loadable(() => import("wowjs"), { ssr: false })

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // React.useEffect(() => {
  //   new WOW.WOW({ live: false }).init()
  // }, [WOW])

  React.useEffect(() => {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const token = params.get("access_token")
    if (token) {
      window.location.replace(`/admin/#access_token=${token}`)
    }
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <EnquiryModel />
        <Footer />
      </div>
    </>
  )
}

export default Layout
