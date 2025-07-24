import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"

export default function ProductCard({ title, image, description, category }) {
  const slug = slugify(title, {
    lower: true,
    strict: true,
  })
  let productURL = `/products/${slug}`
  const noImage =
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
  return (
    <a role="button" href="#" style={{ display: "block" }}>
      <div
        class="single-service-card wow fadeInUp2"
        data-wow-delay="0.3s"
        style={{ cursor: "pointer" }}
      >
        <div
          class="service-cover-img bg-cover"
          style={{
            backgroundImage: `url(${image ? image : noImage})`,
          }}
        ></div>

        {/* <div
          class="service-cover-img bg-cover no-actual-img"
          
          style="background-image: url('[[Business.logo.tileimage.url]]')"
        ></div> */}

        <div class="content">
          <div class="category-div">{category}</div>
          <div class="icon-title">
            <div class="service-title">
              <h4>
                <Link
                  to={productURL}
                  class="truncate-lines"
                  style={{ lineClamp: 2 }}
                >
                  {title}
                </Link>
              </h4>
            </div>
          </div>
          <Link to={productURL}>
            <p class="truncate-lines" style={{ lineClamp: 1 }}>
              {description}
            </p>
          </Link>
          <span
            class="read-more py-1 pointer"
            data-bs-toggle="modal"
            data-bs-target="#enquiryModel"
            // onclick="sendEnquiryText('[[Business.products[i].name]]')"
          >
            Send Message
          </span>
        </div>
      </div>
    </a>
  )
}
