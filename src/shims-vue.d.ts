/* eslint-disable */

/// <reference types="vite/client" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module "@kangc/v-md-editor";
declare module "@kangc/v-md-editor/lib/lang/zh-TW";
declare module "@kangc/v-md-editor/lib/plugins/tip/index";
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor/lib/theme/github.js";

declare module "@quasar/quasar-ui-qcalendar/src/index.js";
