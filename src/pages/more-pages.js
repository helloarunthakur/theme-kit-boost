import React from "react"
import MorePagesComp from "../components/common/MorepagesComp"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"
import "../style/morepages.css"

export default function morepages() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="More Pages" />
      <section className="brchr-section sec-padd">
        <div className="container">
          <div className="row padding-brochure">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <MorePagesComp />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <MorePagesComp />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <MorePagesComp />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <MorePagesComp />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <MorePagesComp />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <MorePagesComp />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
