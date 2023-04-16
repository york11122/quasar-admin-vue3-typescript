import{bs as h,bt as v,ac as E,aJ as A,aB as R,a1 as P,bu as e,f as D,bv as O,bw as T}from"./index.087eefd6.js";import{u as p}from"./user.01f33e37.js";import{d as V}from"./tagView.984816b9.js";import{u as b}from"./permission.f32d402f.js";import{u as g}from"./user.48ef1663.js";const I=h("routes",{state:()=>({permissionRoutes:[]}),getters:{getPermissionRoutes(i){return i.permissionRoutes}},actions:{setRoutes(i){this.permissionRoutes=i}}}),L=E({name:"Layout"});function k(i,a,t,o,n,d){const r=A("router-view");return R(),P(r)}var s=v(L,[["render",k]]);const _=[{component:()=>e(()=>import("./Dashboard.4d783cd7.js"),["assets/Dashboard.4d783cd7.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/eCharts.db9f8657.js","assets/user.48ef1663.js","assets/user.01f33e37.js","assets/tagView.984816b9.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"/",name:"home",meta:{title:"\u9996\u9801",icon:"home"}},{component:()=>e(()=>import("./Chart.b9500553.js"),["assets/Chart.b9500553.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/eCharts.db9f8657.js","assets/user.48ef1663.js","assets/user.01f33e37.js","assets/tagView.984816b9.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"/chart",name:"Chart",meta:{title:"\u5716\u8868",icon:"insert_chart_outlined"}},{component:()=>e(()=>import("./FitTable.45480e28.js"),["assets/FitTable.45480e28.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QList.3732f607.js","assets/QSelect.4f86de4d.js","assets/QMenu.c68a7d05.js","assets/position-engine.3e66795b.js","assets/selection.6d3c7637.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js"]),path:"/table",name:"FitTable",meta:{title:"Table",icon:"table_view"}},{component:()=>e(()=>import("./Calendar.6f501cb1.js"),["assets/Calendar.6f501cb1.js","assets/Calendar.c38e0be3.css","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js","assets/user.48ef1663.js","assets/user.01f33e37.js","assets/tagView.984816b9.js"]),path:"/calendar",name:"Calendar",meta:{title:"\u6708\u66C6",icon:"fa-solid fa-calendar-days"}},{component:s,path:"/permission",name:"Permission",meta:{title:"\u6B0A\u9650\u63A7\u7BA1",icon:"verified_user",isOpen:!0},children:[{component:()=>e(()=>import("./Directive.f298ea20.js"),["assets/Directive.f298ea20.js","assets/QSelect.4f86de4d.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QMenu.c68a7d05.js","assets/position-engine.3e66795b.js","assets/selection.6d3c7637.js","assets/user.01f33e37.js","assets/tagView.984816b9.js","assets/app.836a50d3.js","assets/permission.f32d402f.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js"]),path:"directive",name:"Directive",meta:{title:"\u7D44\u4EF6\u6B0A\u9650",icon:"how_to_reg",keepAlive:!0}},{component:()=>e(()=>import("./Permission.eaff9377.js"),["assets/Permission.eaff9377.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"permission",name:"Permission",meta:{title:"\u8DEF\u7531\u6B0A\u9650",icon:"where_to_vote",keepAlive:!0,roles:["admin"]}}]},{component:s,path:"/markdown",name:"markdown",meta:{title:"markdown",icon:"fa-brands fa-markdown",keepAlive:!1,isOpen:!0},children:[{component:()=>e(()=>import("./MDViewer.6d083749.js"),["assets/MDViewer.6d083749.js","assets/MDViewer.658a86f0.css","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/fetch.b05f9924.js","assets/fetch.0a895612.css","assets/user.48ef1663.js","assets/user.01f33e37.js","assets/tagView.984816b9.js","assets/prism-typescript.c6c5edc7.js","assets/_commonjsHelpers.825a3ddb.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"md-viewer",name:"MDViewer",meta:{title:"MD\u5448\u73FE",icon:"article",keepAlive:!0}},{component:()=>e(()=>import("./MDEditor.a2319246.js"),["assets/MDEditor.a2319246.js","assets/MDEditor.cd1283db.css","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/user.48ef1663.js","assets/user.01f33e37.js","assets/tagView.984816b9.js","assets/fetch.b05f9924.js","assets/fetch.0a895612.css","assets/prism-typescript.c6c5edc7.js","assets/_commonjsHelpers.825a3ddb.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"md-editor",name:"MDEditor",meta:{title:"\u7DE8\u8F2F\u5668",icon:"edit_note",keepAlive:!0}}]},{component:()=>e(()=>import("./Lottie.54687ed0.js"),["assets/Lottie.54687ed0.js","assets/QSkeleton.f2aa62dd.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QBadge.d4ef1bcc.js","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js","assets/QTooltip.4b5bce7f.js","assets/position-engine.3e66795b.js","assets/LottieWeb.3025cbcb.js","assets/_commonjsHelpers.825a3ddb.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css"]),path:"/lottie",name:"Lottie",meta:{title:"Lottie\u52D5\u756B",icon:"animation",keepAlive:!1,roles:["admin"]}},{component:s,path:"/menu1",name:"menu1",meta:{title:"\u647A\u758A\u76EE\u9304",icon:"filter_1",isOpen:!1},children:[{component:s,path:"menu2",name:"menu2",meta:{title:"\u7B2C\u4E00\u5C64",icon:"filter_2"},children:[{component:()=>e(()=>import("./ExpansionMenu.8443d25c.js"),["assets/ExpansionMenu.8443d25c.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"menu3",name:"menu3",meta:{title:"\u7B2C\u4E8C\u5C64",icon:"filter_3"}}]}]},{component:s,path:"/docs",name:"docs",meta:{title:"\u5916\u90E8\u8CC7\u8A0A",icon:"description",isOpen:!1},children:[{component:()=>e(()=>import("./TypeScript.19b91ddc.js"),["assets/TypeScript.19b91ddc.js","assets/Iframe.7c4755e0.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QSkeleton.f2aa62dd.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"ts",name:"TypeScript",meta:{title:"TypeScript",icon:"fa-brands fa-js"}},{component:()=>e(()=>import("./Vite.69e9ac37.js"),["assets/Vite.69e9ac37.js","assets/Iframe.7c4755e0.js","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QSkeleton.f2aa62dd.js","assets/BaseContent.d221f542.js","assets/BaseContent.63f3edf9.css","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js"]),path:"vite",name:"Vite",meta:{title:"Vite",icon:"fa-solid fa-file-code"}},{path:"https://vuejs.org/",name:"Vue3",meta:{title:"Vue3",icon:"fa-brands fa-vuejs"}},{path:"https://quasar.dev/",name:"Quasar",meta:{title:"Quasar",icon:"fa-solid fa-file-code"}}]}],c=[{component:()=>e(()=>import("./MainLayout.1354bfc1.js"),["assets/MainLayout.1354bfc1.js","assets/MainLayout.dfcbfe75.css","assets/index.087eefd6.js","assets/index.f018ed54.css","assets/QList.3732f607.js","assets/QScrollArea.f3180bf9.js","assets/selection.6d3c7637.js","assets/keep-alive.c23b0c12.js","assets/tagView.984816b9.js","assets/app.836a50d3.js","assets/QMenu.c68a7d05.js","assets/position-engine.3e66795b.js","assets/QTooltip.4b5bce7f.js","assets/QBadge.d4ef1bcc.js","assets/user.01f33e37.js","assets/DarkMode.e2b98dd6.js","assets/user.48ef1663.js","assets/permission.f32d402f.js"]),path:"/",name:"index",redirect:"/",children:_}];function l(i){p();const{hasPermission:a}=b();let t=i.filter(o=>{var n;return!((n=o.meta)!=null&&n.roles)||o.meta.roles.length===0?!0:a(o.meta.roles)});for(const o in t)t[o].children&&(t[o].children=l(t[o].children));return t}var C=D(async({router:i})=>{const a=I(),t=p(),{me:o}=g();i.beforeEach(async(n,d,r)=>{if(O.getItem("access_token"))if(n.path==="/login"&&r({path:"/"}),t.getUserRoles.length>0&&a.getPermissionRoutes.length)r();else{if(t.getUserRoles.length<=0){const{data:u,error:f}=await o();f.value||t.setUserInfo(u.value)}const m=V(_);c[0].children=l(m),a.setRoutes(c);for(let u of c)i.addRoute(u);r({...n,replace:!0})}else T.some(m=>m.path===n.path)?r():r({path:"/login"})})}),U=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{U as p,I as u};