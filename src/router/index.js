import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import ContactView from "@/views/ContactView";
import BlogView from "@/views/BlogView";
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
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
