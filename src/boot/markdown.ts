import { boot } from "quasar/wrappers";
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";

export default boot(async ({ app }) => {
  VueMarkdownEditor.use(vuepressTheme, {
    Prism,
  });

  app.use(VueMarkdownEditor);
});

export { VueMarkdownEditor };
