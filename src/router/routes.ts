import { Route } from "src/types/index"
import layout from "src/components/Layout/Layout.vue"

declare module "vue-router" {
  interface RouteMeta {
    roles?: string[];
    title: string;
    icon?: string;
    itemLabel?: string;
    keepAlive?: boolean;
    isOpen?: boolean;
  }
}

const asyncRoutesChildren: Route[] = [
  {
    component: () => import("pages/dashboard/Dashboard.vue"),
    path: "/",
    name: "home",
    meta: {
      title: "首頁",
      icon: "home",
    },
  },
  {
    component: () => import("pages/Chart.vue"),
    path: "/chart",
    name: "Chart",
    meta: {
      title: "圖表",
      icon: "insert_chart_outlined",
    },
  },
  {
    component: () => import("pages/table/FitTable.vue"),
    path: "/table",
    name: "FitTable",
    meta: {
      title: "Table",
      icon: "table_view",
    },
  },
  {
    component: layout,
    path: "/permission",
    name: "Permission",
    meta: {
      title: "權限控管",
      icon: "verified_user",
      isOpen: true
    },
    children: [
      {
        component: () => import("pages/permission/Directive.vue"),
        path: "directive",
        name: "Directive",
        meta: {
          title: "組件權限",
          icon: "how_to_reg",
          keepAlive: true,
        },
      },
      {
        component: () => import("pages/permission/Permission.vue"),
        path: "permission",
        name: "Permission",
        meta: {
          title: "路由權限",
          icon: "where_to_vote",
          keepAlive: true,
          roles: ['admin']
        },
      },
    ],
  },
  {
    component: layout,
    path: "/markdown",
    name: "markdown",
    meta: {
      title: "markdown",
      icon: "fa-brands fa-markdown",
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
      keepAlive: false,
      roles: ["admin"],
    },
  },
  {
    component: layout,
    path: "/menu1",
    name: "menu1",
    meta: {
      title: "摺疊目錄",
      icon: "filter_1",
      isOpen: false,
    },
    children: [
      {
        component: layout,
        path: "menu2",
        name: "menu2",
        meta: {
          title: "第一層",
          icon: "filter_2",
        },
        children: [
          {
            component: () => import("pages/expansion-menu/ExpansionMenu.vue"),
            path: "menu3",
            name: "menu3",
            meta: {
              title: "第二層",
              icon: "filter_3",
            },
          },
        ],
      },
    ],
  },
  {
    component: layout,
    path: "/docs",
    name: "docs",
    meta: {
      title: "外部資訊",
      icon: "description",
      isOpen: false,
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

const asyncRootRoute: Route[] = [
  {
    component: () => import("layouts/MainLayout.vue"),
    path: "/",
    name: "index",
    redirect: "/",
    children: asyncRoutesChildren,
  },
];

export { asyncRootRoute, asyncRoutesChildren };
