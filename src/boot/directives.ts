import { boot } from "quasar/wrappers";
import { setupDirectives } from "src/directives/index"

export default boot(async ({ app }) => {
    setupDirectives(app)
});

