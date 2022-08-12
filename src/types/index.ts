import {
  RouteRecordName,
  RouteRecordRaw,
  RouteRecordRedirectOption,
  RouteMeta,
} from "vue-router";

export interface Route {
  name: string;
  path: RouteRecordName | undefined;
  redirect?: RouteRecordRedirectOption | undefined;
  component?: any;
  children?: Route[];
  meta?: RouteMeta;
  props?: boolean | Record<string, any> | ((to: any) => Record<string, any>);
}

export interface RouteData {
  title: string;
  fullPath: string;
  icon?: string;
  keepAlive?: boolean;
  name: RouteRecordName | null | undefined;
}

export interface BreadCrumbsData {
  title: string;
  icon: string;
}

export interface User {
  username: string;
  role: string;
}
