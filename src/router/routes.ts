import { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    roles?: string[];
    title: string;
    icon: string;
    itemLabel?: string;
    keepAlive?: boolean;
    requiresAuth?: boolean;
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
    component: () => import("components/Layout/Layout.vue"),
    path: "/markdown",
    name: "markdown",
    meta: {
      title: "markdown",
      icon: "pages",
      requiresAuth: false,
      keepAlive: false,

    },
    children: [
      {
        component: () => import("pages/markdown/MDViewer.vue"),
        path: "md-viewer",
        name: "MDViewer",
        meta: {
          title: "MD呈現",
          icon: "article",
          requiresAuth: false,
          keepAlive: true,
        },
      },
      {
        component: () => import("pages/markdown/MDEditor.vue"),
        path: "md-editor",
        name: "MDEditor",
        meta: {
          title: "編輯器",
          icon: "edit_note",
          requiresAuth: false,
          keepAlive: false,
        },
      }]
  },

  {
    component: () => import("pages/Lottie.vue"),
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
    path: "/menu1",
    name: "menu1",
    meta: {
      title: "摺疊目錄",
      icon: "filter_1",
      requiresAuth: false,
      isOpen: false,
    },
    children: [
      {
        component: () => import("components/Layout/Layout.vue"),
        path: "menu2",
        name: "menu2",
        meta: {
          title: "第一層",
          icon: "filter_2",
          requiresAuth: false,
        },
        children: [
          {
            component: () => import("pages/expansion-menu/ExpansionMenu.vue"),
            path: "menu3",
            name: "menu3",
            meta: {
              title: "第二層",
              icon: "filter_3",
              requiresAuth: false,
            },
          },
        ],
      }
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
