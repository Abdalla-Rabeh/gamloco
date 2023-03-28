import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import ContactView from "@/views/ContactView";
import BlogView1 from "@/views/BlogView1";
import BlogView2 from "@/views/BlogView2";
import BlogView3 from "@/views/BlogView3";
import BlogView4 from "@/views/BlogView4";
import BlogView5 from "@/views/BlogView5";
import BlogView6 from "@/views/BlogView6";
import BlogView7 from "@/views/BlogView7";
import BlogView8 from "@/views/BlogView8";
// import BlogView9 from "@/views/BlogView9";
import BlogView10 from "@/views/BlogView10";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/blog/1",
    name: "Blog1",
    component: BlogView1,
  },
  {
    path: "/blog/2",
    name: "Blog2",
    component: BlogView2,
  },
  {
    path: "/blog/3",
    name: "Blog3",
    component: BlogView3,
  },
  {
    path: "/blog/4",
    name: "Blog4",
    component: BlogView4,
  },
  {
    path: "/blog/5",
    name: "Blog5",
    component: BlogView5,
  },
   {
    path: "/blog/6",
    name: "Blog6",
    component: BlogView6,
  },
  {
    path: "/blog/7",
    name: "Blog7",
    component: BlogView7,
  },
  {
    path: "/blog/8",
    name: "Blog8",
    component: BlogView8,
  },
  // {
  //   path: "/blog/9",
  //   name: "Blog9",
  //   component: BlogView9,
  // },
  {
    path: "/blog/10",
    name: "Blog10",
    component: BlogView10,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
