import {
  RouteRecordName,
  RouteRecordRaw,
  RouteRecordRedirectOption,
  RouteMeta,
} from "vue-router";

export interface Route {
  name: string;
  path: string;
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
  isHidden: unknown;
}

export interface User {
  _id: string;
  username: string;
  roles: string[];
}
