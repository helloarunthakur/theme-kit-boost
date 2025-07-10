// gatsby-ssr.js
import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />,
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />,
    <link
      href="https://fonts.googleapis.com/css2?family=Gloock&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />,
  ])

  setPostBodyComponents([
    <script src="https://cdn.plyr.io/3.7.8/plyr.js"></script>,
  ])
}
