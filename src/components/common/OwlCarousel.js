import loadable from "@loadable/component"
import React from "react"
const OwlCarousel = loadable(() => import("react-owl-carousel"), {
  ssr: false,
})
export default function OwlCarouselComp({ children }) {
  return (
    <OwlCarousel className="owl-theme" loop margin={20} dots={false} items={6}>
      {children}
    </OwlCarousel>
  )
}
