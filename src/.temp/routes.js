import NotFound from "C:\\WebWorkspace\\Gridsome\\gridsome-starter-contentful\\node_modules\\gridsome\\app\\pages\\404.vue"

export const routes = [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue"),
    meta: { data: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue")
  },
  {
    name: "contentfulBlogPost",
    path: "/blog-post/:slug",
    component: () => import(/* webpackChunkName: "component--contentful-blog-post" */ "~/templates/ContentfulBlogPost.vue"),
    meta: { data: true }
  }
]

export { NotFound }

