import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Article from "./pages/Article.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/article/:slug", component: Article, name: "article" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
