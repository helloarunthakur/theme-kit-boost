const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const {
  createProductMarkdown,
  commitAndPushToGitHub,
} = require("./src/utils/ProductWriter")

exports.onPreBootstrap = () => {
  const raw = process.env.INCOMING_HOOK_BODY
  if (!raw) return

  try {
    const payload = JSON.parse(raw)
    createProductMarkdown(payload)
    commitAndPushToGitHub(payload.title)
  } catch (e) {
    console.error("❌ Error writing product MD file:", e)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "products" })

    createNodeField({
      node,
      name: "slug",
      value: `/products${slug}`, // Example: /products/test-product/
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/" } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/ProductTemplate.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
