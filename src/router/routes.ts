import {
  RouteRecordName,
  RouteRecordRaw,
  RouteRecordRedirectOption,
  RouteMeta,
} from "vue-router";

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

interface Route {
  name: string;
  path: RouteRecordName | undefined;
  redirect?: RouteRecordRedirectOption | undefined;
  component?: any;
  children?: Route[];
  meta: RouteMeta;
  props?: boolean | Record<string, any> | ((to: any) => Record<string, any>);
}

const asyncRoutesChildren: Route[] = [
  {
    component: () => import("src/pages/Index.vue"),
    path: "/",
    name: "home",
    meta: {
      title: "首頁",
      icon: "home",
      requiresAuth: false,
    },
  },
  {
    component: () => import("src/pages/table/FitTable.vue"),
    path: "/fit-table",
    name: "FitTable",
    meta: {
      title: "FitTable",
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
      icon: "fa-brands fa-markdown",
      requiresAuth: false,
      keepAlive: false,
      isOpen: true,
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
          keepAlive: true,
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
      icon: "animation",
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
      },
    ],
  },
  {
    component: () => import("components/Layout/Layout.vue"),
    path: "/docs",
    name: "docs",
    meta: {
      title: "技術文件",
      icon: "description",
      isOpen: true,
    },
    children: [
      {
        component: () => import("pages/iframe/TypeScript.vue"),
        path: "ts",
        name: "TypeScript",
        meta: {
          title: "TypeScript",
          icon: "fa-brands fa-js",
        },
      },
      {
        component: () => import("pages/iframe/Vite.vue"),
        path: "vite",
        name: "Vite",
        meta: {
          title: "Vite",
          icon: "fa-solid fa-file-code",
        },
      },
      {
        path: "https://vuejs.org/",
        name: "Vue3",
        meta: {
          title: "Vue3",
          icon: "fa-brands fa-vuejs",
        },
      },
      {
        path: "https://quasar.dev/",
        name: "Quasar",
        meta: {
          title: "Quasar",
          icon: "fa-solid fa-file-code",
        },
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
