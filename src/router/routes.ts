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
      title: "home",
      icon: "blur_on",
      requiresAuth: false,
    },
  },
  {
    component: () => import("pages/Page1.vue"),
    path: "/page1",
    name: "page1",
    meta: {
      title: "page1",
      icon: "blur_on",
      requiresAuth: false,
      keepAlive: true,
    },
  },
  {
    component: () => import("components/Layout/Layout.vue"),
    path: "/page",
    name: "page",
    meta: {
      title: "page",
      icon: "blur_on",
      requiresAuth: false,
      isOpen: false,
    },
    children: [
      {
        component: () => import("pages/Page1.vue"),
        path: "aa",
        name: "aa",
        meta: {
          title: "page1",
          icon: "blur_on",
          requiresAuth: false,
        },
      },
      {
        component: () => import("pages/Page1.vue"),
        path: "page2",
        name: "page2",
        meta: {
          title: "page2",
          icon: "blur_on",
          requiresAuth: false,
        },
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
