/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Boost Manufacturing`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        submenu: [
          { name: "Our Team", link: "/team" },
          { name: "Our Customers", link: "/customers" },
          { name: "Projects", link: "/projects" },
          { name: "Testimonials", link: "/testimonials" },
          { name: "FAQ", link: "/faq" },
        ],
      },
      {
        name: "Products",
        submenu: [
          { name: "Test", link: "/products" },
          { name: "View all", link: "/all-products" },
        ],
      },
      {
        name: "Latest News",
        link: "/latest-updates",
      },
      {
        name: "Gallery",
        submenu: [
          { name: "Photos", link: "/image-gallery" },
          {
            name: "Videos",
            link: "https://575ff4b59ec6680eec32aa27.preview.boostkit.dev/videos/1",
            external: true,
          },
        ],
      },
      {
        name: "Brochure",
        submenu: [
          { name: "Sujan", link: "/brochure", target: "_blank" },
          { name: "Bug Testing", link: "/brochure", target: "_blank" },
          { name: "View All", link: "/brochure" },
        ],
      },
      {
        name: "More",
        submenu: [
          { name: "Test", link: "/more-pages" },
          { name: "View All", link: "/more-pages" },
        ],
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-decap-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`, // root of all your md folders
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/content/products/`,
      },
    },
  ],
}
