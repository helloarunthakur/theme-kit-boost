import React from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/common/Breadcrumb"

export default function cart() {
  return (
    <Layout>
      <Breadcrumb frompage="Home" topage="Cart" />
      <div id="product-cart" class="product-cart container-fluid">
        <div class="container">
          <div class="row cart-items-summary" style={{ display: "none" }}>
            {/* <!-- Order Summary --> */}
            <div class="col-md-8 col-sm-8 order-summary">
              <h3
                class=""
                style={{ fontFamily: "var(--primary-font) !important" }}
              >
                your shopping cart
              </h3>
              <div class="order-summary-content">
                <table class="shop_cart">
                  <thead>
                    <tr>
                      <th
                        colspan="3"
                        class="product-thumbnail"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Product
                      </th>
                      <th
                        class="product-price"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Price
                      </th>
                      <th
                        class="product-quantity"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Quantity
                      </th>
                      <th
                        class="product-subtotal"
                        style={{
                          fontFamily: "var(--secondary-font) !important",
                        }}
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            {/* <!-- Order Summary /- --> */}

            {/* <!-- Widget Area --> */}
            <div class="col-md-4 col-sm-5 col-xs-12 widget-area">
              <aside class="widget widget-proceed-checkout">
                <h3
                  class=""
                  style={{ fontFamily: "var(--primary-font) !important" }}
                >
                  cart total
                </h3>
                <div class="wc-proceed-to-checkout">
                  <table>
                    <tbody>
                      <tr class="">
                        <td
                          style={{
                            fontFamily: "var(--secondary-font) !important",
                          }}
                        >
                          Total
                        </td>
                        <td id="cart-total"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a
                  href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/all-products/1"
                  class="update-cart border-r-4 secondary-hover-btn"
                  style={{ fontFamily: "var(--secondary-font) !important" }}
                >
                  Continue shopping
                </a>
                <a
                  href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/Checkout"
                  class="proceed-to-checkout border-r-4 secondary-hover-btn"
                  style={{ fontFamily: "var(--secondary-font) !important" }}
                >
                  checkout
                </a>
              </aside>
            </div>
            {/* <!-- Widget Area /- --> */}
          </div>

          {/* <!--Empty Cart--> */}
          <div
            class="row text-center justify-content-center my-5 empty-cart"
            style={{ display: "block" }}
          >
            <div class="cartIcon my-5">
              <i class="fa fa-shopping-cart fa-5x"></i>
            </div>
            <h3
              class=""
              style={{
                opacity: "0.5",
                fontFamily: "var(--primary-font) !important",
              }}
            >
              There are no products in your cart!
            </h3>
            <a
              href="https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/all-products/1"
              class="cartBtn mt-5 border-r-4 secondary-hover-btn"
              style={{ fontFamily: "var(--secondary-font) !important" }}
            >
              Explore Our products
            </a>
          </div>
          {/* <!--Empty Cart--> */}
        </div>
      </div>
    </Layout>
  )
}
