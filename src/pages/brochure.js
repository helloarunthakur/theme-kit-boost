import React from "react"
import BrochureComponent from "../components/common/BrochureComponent"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"

export default function Brochure() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Brochure" />
      <div className="container mt-5">
        <div className="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <BrochureComponent />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <BrochureComponent />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <BrochureComponent />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <BrochureComponent />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <BrochureComponent />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <BrochureComponent />
          </div>
        </div>
      </div>
    </Layout>
  )
}
