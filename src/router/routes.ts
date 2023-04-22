import { Route } from "src/types/index";
import layout from "src/components/Layout/Layout.vue";

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
      title: "router.home",
      icon: "home",
    },
  },
  {
    component: () => import("pages/Chart.vue"),
    path: "/chart",
    name: "Chart",
    meta: {
      title: "router.chart",
      icon: "insert_chart_outlined",
    },
  },
  {
    component: () => import("pages/table/FitTable.vue"),
    path: "/table",
    name: "FitTable",
    meta: {
      title: "router.talbe",
      icon: "table_view",
    },
  },
  {
    component: () => import("pages/calendar/Calendar.vue"),
    path: "/calendar",
    name: "Calendar",
    meta: {
      title: "router.calendar",
      icon: "fa-solid fa-calendar-days",
    },
  },
  {
    component: layout,
    path: "/permission",
    name: "Permission",
    meta: {
      title: "router.permission",
      icon: "verified_user",
      isOpen: true,
    },
    children: [
      {
        component: () => import("pages/permission/Directive.vue"),
        path: "directive",
        name: "Directive",
        meta: {
          title: "router.directive",
          icon: "how_to_reg",
          keepAlive: true,
        },
      },
      {
        component: () => import("pages/permission/Permission.vue"),
        path: "router-permission",
        name: "Permission",
        meta: {
          title: "router.routerPermission",
          icon: "where_to_vote",
          keepAlive: true,
          roles: ["admin"],
        },
      },
    ],
  },
  {
    component: layout,
    path: "/markdown",
    name: "markdown",
    meta: {
      title: "router.markdown",
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
          title: "router.markdownViewer",
          icon: "article",
          keepAlive: true,
        },
      },
      {
        component: () => import("pages/markdown/MDEditor.vue"),
        path: "md-editor",
        name: "MDEditor",
        meta: {
          title: "router.markdownEditor",
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
      title: "router.lottie",
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
      title: "router.menu1",
      icon: "filter_1",
      isOpen: false,
    },
    children: [
      {
        component: layout,
        path: "menu2",
        name: "menu2",
        meta: {
          title: "router.menu2",
          icon: "filter_2",
        },
        children: [
          {
            component: () => import("pages/expansion-menu/ExpansionMenu.vue"),
            path: "menu3",
            name: "menu3",
            meta: {
              title: "router.menu3",
              icon: "filter_3",
            },
          },
        ],
      },
    ],
  },
  {
    component: layout,
    path: "/externalLink",
    name: "externalLink",
    meta: {
      title: "router.externalLink",
      icon: "description",
      isOpen: false,
    },
    children: [
      {
        component: () => import("pages/iframe/TypeScript.vue"),
        path: "ts",
        name: "TypeScript",
        meta: {
          title: "router.typeScript",
          icon: "fa-brands fa-js",
        },
      },
      {
        component: () => import("pages/iframe/Vite.vue"),
        path: "vite",
        name: "Vite",
        meta: {
          title: "router.vite",
          icon: "fa-solid fa-file-code",
        },
      },
      {
        path: "https://vuejs.org/",
        name: "Vue3",
        meta: {
          title: "router.vue3",
          icon: "fa-brands fa-vuejs",
        },
      },
      {
        path: "https://quasar.dev/",
        name: "Quasar",
        meta: {
          title: "router.quasar",
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
