import { RouteRecordName } from "vue-router";

export interface RouteData {
  title: string;
  fullPath: string;
  path: string;
  icon: string;
  keepAlive?: boolean;
  name: RouteRecordName | null | undefined;
}

export interface BreadCrumbsData {
  title: string;
  icon: string;
}
