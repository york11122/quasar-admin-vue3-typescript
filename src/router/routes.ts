import { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    roles?: string[];
    title: string;
    icon?: string;
    itemLabel?: string;
    keepAlive?: boolean;
    requiresAuth?: boolean;
    isOpen?: boolean;
  }
}

const asyncRoutesChildren: RouteRecordRaw[] = [
  {
    component: () => import("src/pages/Index.vue"),
    path: "/",
    name: "home",
    meta: {
      title: "首頁",
      icon: "sym_r_home",
      requiresAuth: false,
    },
  },
  {
    component: () => import("components/Layout/Layout.vue"),
    path: "/markdown",
    name: "markdown",
    meta: {
      title: "markdown",
      icon: "sym_r_pages",
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
          icon: "sym_r_article",
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
          icon: "sym_r_edit_note",
          requiresAuth: false,
          keepAlive: false,
        },
      },
    ],
  },

  {
    component: () => import("src/pages/lottie/Lottie.vue"),
    path: "/lottie",
    name: "Lottie",
    meta: {
      title: "Lottie動畫",
      icon: "sym_r_animation",
      requiresAuth: false,
      keepAlive: false,
      roles: ["admin"],
    },
  },
  {
    component: () => import("components/Layout/Layout.vue"),
    path: "/menu1",
    name: "menu1",
    meta: {
      title: "摺疊目錄",
      icon: "sym_r_filter_1",
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
          icon: "sym_r_filter_2",
          requiresAuth: false,
        },
        children: [
          {
            component: () => import("pages/expansion-menu/ExpansionMenu.vue"),
            path: "menu3",
            name: "menu3",
            meta: {
              title: "第二層",
              icon: "sym_r_filter_3",
              requiresAuth: false,
            },
          },
        ],
      },
    ],
  },
];

const asyncRootRoute: RouteRecordRaw[] = [
  {
    component: () => import("layouts/MainLayout.vue"),
    path: "/",
    name: "index",
    redirect: "/",
    children: asyncRoutesChildren,
  },
];

export { asyncRootRoute, asyncRoutesChildren };
