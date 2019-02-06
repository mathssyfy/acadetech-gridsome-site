<p align="center">
  <br>
  <a href="https://acadetech.netlify.com">
    AcadeTech Gridsome Site
  </a>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/mathssyfy/acadetech-gridsome-site.svg?branch=master)](https://travis-ci.org/mathssyfy/acadetech-gridsome-site)
[![Known Vulnerabilities](https://snyk.io/test/github/mathssyfy/acadetech-gridsome-site/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mathssyfy/acadetech-gridsome-site?targetFile=package.json)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

You can use this repo as a gridsome-contentful-starter

## Install

```bash
yarn #or npm install
```

## Basic usage

Edit `.env.sample` and rename it `.env`

```
CTF_SPACE_ID = YOUR SPACE ID
CTF_CDA_ACCESS_TOKEN = YOUR ACCESS TOKEN
```

Then:

```bash
yarn develop #Or npm run develop
```

### Configure with Contentful content named `Blog Post` with fields:

- title
- slug
- description
- body
- heroImage
- publishDate

In `src/pages/Blogs.vue`

```
<page-query>
  query IndexQuery {
    posts: allContentfulBlogPost {
      totalCount
      edges {
        node {
          id
          slug
          title
          createdAt(format: "D. MMMM YYYY")
         }
      }

    }
  }
</page-query>
```

In `src/templates/ContefulBlogPost.vue`

```
<page-query>
query postQuery($path: String!) {
    post: contentfulBlogPost(path: $path){
    title
    publishDate(format: "D. MMMM YYYY")
  heroImage{file{url}}
    body
    }
}
</page-query>
```

## Features

- [x] [Gridsome](https://gridsome.org/)
- [x] [Vuetify](https://vuetifyjs.com/en/)
- [x] markdown-it
- [x] markdown-it ... emoji, katex, prism, anchor, table-of-content, container, emoji

Config markdown-it in `src/components/GridsomeMarkdownIt.vue`

## Scripts

```bash
yarn develop
yarn build
yarn lint
```
