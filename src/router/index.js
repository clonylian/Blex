import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../view/home.vue"),
  },
  {
    path: "/stake",
    name: "stake",
    component: () => import("../view/stake.vue"),
  },
  {
    path: "/claim",
    name: "claim",
    component: () => import("../view/claim.vue"),
  },
  {
    path: "/airdrop",
    name: "airdrop",
    component: () => import("../view/airdrop.vue"),
  },
  {
    path: "/Ido",
    name: "Ido",
    component: () => import("../view/ido.vue"),
  },
  {
    path: "/rewards",
    name: "rewards",
    component: () => import("../view/Leaderboard.vue"),
  },
  {
    path: "/Newstake",
    name: "Newstake",
    component: () => import("../view/Newstake.vue"),
  },
  {
    path: "/Newairdrop",
    name: "Newairdrop",
    component: () => import("../view/newairdrop.vue"),
  },
  {
    path: "/launch",
    name: "launch",
    component: () => import("../view/launch.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../view/terms.vue"),
  },
  {
    path: "/eigenlayer",
    name: "eigenlayer",
    component: () => import("../view/eigenlayer.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return false; // 阻止默认的滚动行为
      }
    }
    return { top: 0 }; // 默认滚动到页面顶部
  },
});

router.beforeEach((to, from, next) => {
  const isTrue = localStorage.getItem("istrue") == "1";
  if (
    (to.path == "/Airdrop" ||
      to.path == "/Leaderboard" ||
      to.path == "/Stake") &&
    !isTrue
  ) {
    next("/");
  } else {
    next();
  }
});
export default router;
