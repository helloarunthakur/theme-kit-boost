const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
const { default: slugify } = require("slugify")

function createProductMarkdown(payload) {
  const {
    title,
    description,
    imageURL,
    images = [],
    specifications,
    category,
    draft = false,
  } = payload

  const slug = slugify(title, {
    lower: true,
    strict: true,
  })
  const dirPath = path.join(__dirname, "../content/products")
  const filePath = path.join(dirPath, `${slug}.md`)

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`📂 Created folder: ${dirPath}`)
  }

  const markdown = `---
title: "${title}"
description: "${description}"
imageURL: "${imageURL}"
images: ${JSON.stringify(images)}
specifications: "${specifications}"
category: "${category}"
draft: ${draft}
---
`

  fs.writeFileSync(filePath, markdown, "utf8")
  console.log(`✅ Markdown written to: ${filePath}`)

  return { slug, title }
}

function commitAndPushToGitHub(title) {
  execSync('git config user.email "arunrajorya1999@gmail.com"')
  execSync('git config user.name "helloarunthakur"')

  execSync("git add src/content/products")
  execSync(
    `git diff --cached --quiet || git commit -m "📦 Added product: ${title} [skip netlify]"`
  )

  execSync(
    `git remote set-url origin https://${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}@github.com/helloarunthakur/theme-kit-boost.git`
  )
  try {
    execSync("git push origin HEAD:main")
    console.log(`✅ Git push successful : ${title}`)
  } catch (error) {
    console.error("🚨 Git push failed:", error)
  }
}

module.exports = { createProductMarkdown, commitAndPushToGitHub }
