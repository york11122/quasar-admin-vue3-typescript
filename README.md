## Quasar Admin

Demo: [https://york11122.github.io/quasar-admin-vue3-typescript/](https://york11122.github.io/quasar-admin-vue3-typescript/)

記錄過往遇過的功能
使用 [Vue3](https://vuejs.org/) + [Pinia ](https://pinia.vuejs.org/)+ [TypeScript ](https://www.typescriptlang.org/)+ [Quasar ](https://quasar.dev/)
重新封裝組件，當做學習紀錄
專案建立使用 [quasar-cli](https://quasar.dev/start/quasar-cli)

**目錄結構**
``` 
src
 |-assets        # 靜態文件
 |-boot          # quasar boot files
 |-components 	 # 组件 (組件封裝)
 |-composables 	 # 組合式函數 (功能封裝) 
 |-css           # css files
 |-i18n          # 多國語系
 |-layouts       # main layout
 |-pages         # 頁面
 |-router        # 路由相關
 |-stores        # pinia 共用狀態
 |-utils         # 通用
 |-types         # ts類型定義
 quasar.conf.js  # quasar設定檔案
``` 
::: tip
[quasar boot file](https://quasar.dev/quasar-cli-webpack/boot-files)
quasar框架對於vue instance初始化前預先執行的檔案