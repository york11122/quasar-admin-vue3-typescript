import { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    roles?: string[];
    title: string;
    icon: string;
    itemLabel?: string;
    keepAlive?: boolean;
    requiresAuth: boolean;
    isOpen?: boolean;
  }
}

const asyncRoutesChildren: RouteRecordRaw[] = [
  {
    component: () => import("pages/IndexPage.vue"),
    path: "/",
    name: "home",
    meta: {
      title: "首頁",
      icon: "home",
      requiresAuth: false,
    },
  },
  {
    component: () => import("src/pages/Markdown.vue"),
    path: "/markdown",
    name: "markdown",
    meta: {
      title: "markdown",
      icon: "article",
      requiresAuth: false,
      keepAlive: false,
    },
  },

  {
    component: () => import("src/pages/Lottie.vue"),
    path: "/lottie",
    name: "Lottie",
    meta: {
      title: "Lottie動畫",
      icon: "blur_on",
      requiresAuth: false,
      keepAlive: false,
    },
  },
  {
    component: () => import("components/Layout/Layout.vue"),
    path: "/page",
    name: "page",
    meta: {
      title: "第一層",
      icon: "filter_1",
      requiresAuth: false,
      isOpen: false,
    },
    children: [
      {
        component: () => import("components/Layout/Layout.vue"),
        path: "page2",
        name: "page2",
        meta: {
          title: "第二層",
          icon: "filter_2",
          requiresAuth: false,
        },
        children: [
          {
            component: () => import("src/pages/Markdown.vue"),
            path: "page3",
            name: "page3",
            meta: {
              title: "第三層",
              icon: "filter_3",
              requiresAuth: false,
            },
          },
        ]
      },

    ],
  },
];

const asyncRoutes: RouteRecordRaw[] = [
  {
    component: () => import("layouts/MainLayout.vue"),
    path: "/",
    name: "index",
    redirect: "/",
    children: asyncRoutesChildren,
  },
];

export default asyncRoutes;
