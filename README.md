<p align="center">
  <br>
  <a href="https://acadetech.netlify.com">
    AcadeTech Gridsome Site
  </a>
</p>




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

### Configure with Contentful content named `Blog Post`with fields:
+ title
+ slug
+ description
+ body
+ heroImage
+ publishDate

In 'scr/pages/bBlogs.vue`

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

In `scr/templates/ContefulBlogPost.vue`
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

Config markdown-it in `scr/compontents/GridsomeMarkdownIt.vue`



## Scripts

```bash
yarn develop
yarn build
yarn lint
```



