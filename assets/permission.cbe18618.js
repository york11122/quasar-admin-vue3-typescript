import{bs as f,bt as v,ac as E,aJ as A,aB as R,a1 as P,bu as e,f as D,bv as O,bw as b}from"./index.56708ff0.js";import{u as p}from"./user.830c88d2.js";import{d as g}from"./tagView.41bd1cc2.js";import{u as T}from"./permission.19ee6018.js";import{u as V}from"./user.812861c2.js";const k=f("routes",{state:()=>({permissionRoutes:[]}),getters:{getPermissionRoutes(i){return i.permissionRoutes}},actions:{setRoutes(i){this.permissionRoutes=i}}}),I=E({name:"Layout"});function L(i,a,t,o,n,d){const r=A("router-view");return R(),P(r)}var s=v(I,[["render",L]]);const _=[{component:()=>e(()=>import("./Dashboard.8f6a119c.js"),["assets/Dashboard.8f6a119c.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/eCharts.82f92dd5.js","assets/user.812861c2.js","assets/user.830c88d2.js","assets/tagView.41bd1cc2.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css","assets/QScrollArea.123c785e.js","assets/selection.7ec1f70b.js"]),path:"/",name:"home",meta:{title:"\u9996\u9801",icon:"home"}},{component:()=>e(()=>import("./Chart.5902200b.js"),["assets/Chart.5902200b.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/eCharts.82f92dd5.js","assets/user.812861c2.js","assets/user.830c88d2.js","assets/tagView.41bd1cc2.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css","assets/QScrollArea.123c785e.js","assets/selection.7ec1f70b.js"]),path:"/chart",name:"Chart",meta:{title:"\u5716\u8868",icon:"insert_chart_outlined"}},{component:()=>e(()=>import("./FitTable.e47e5169.js"),["assets/FitTable.e47e5169.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/QMenu.f782d946.js","assets/position-engine.efa4a4fc.js","assets/selection.7ec1f70b.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css","assets/QScrollArea.123c785e.js"]),path:"/table",name:"FitTable",meta:{title:"Table",icon:"table_view"}},{component:s,path:"/permission",name:"Permission",meta:{title:"\u6B0A\u9650\u63A7\u7BA1",icon:"verified_user",isOpen:!0},children:[{component:()=>e(()=>import("./Directive.56928ef3.js"),["assets/Directive.56928ef3.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/user.830c88d2.js","assets/tagView.41bd1cc2.js","assets/permission.19ee6018.js"]),path:"directive",name:"Directive",meta:{title:"\u7D44\u4EF6\u6B0A\u9650",icon:"how_to_reg",keepAlive:!0}},{component:()=>e(()=>import("./Permission.2d6d9645.js"),["assets/Permission.2d6d9645.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/QScrollArea.123c785e.js","assets/selection.7ec1f70b.js"]),path:"permission",name:"Permission",meta:{title:"\u8DEF\u7531\u6B0A\u9650",icon:"where_to_vote",keepAlive:!0,roles:["admin"]}}]},{component:s,path:"/markdown",name:"markdown",meta:{title:"markdown",icon:"fa-brands fa-markdown",keepAlive:!1,isOpen:!0},children:[{component:()=>e(()=>import("./MDViewer.85a78cdc.js"),["assets/MDViewer.85a78cdc.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/QScrollArea.123c785e.js","assets/selection.7ec1f70b.js","assets/BaseSkelton.22503762.js","assets/QSkeleton.17e3a508.js","assets/fetch.476090bc.js","assets/fetch.84264b07.css","assets/user.812861c2.js","assets/user.830c88d2.js","assets/tagView.41bd1cc2.js"]),path:"md-viewer",name:"MDViewer",meta:{title:"MD\u5448\u73FE",icon:"article",keepAlive:!0}},{component:()=>e(()=>import("./MDEditor.d74391a2.js"),["assets/MDEditor.d74391a2.js","assets/fetch.476090bc.js","assets/fetch.84264b07.css","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/user.812861c2.js","assets/user.830c88d2.js","assets/tagView.41bd1cc2.js"]),path:"md-editor",name:"MDEditor",meta:{title:"\u7DE8\u8F2F\u5668",icon:"edit_note",keepAlive:!0}}]},{component:()=>e(()=>import("./Lottie.322ccfa3.js"),["assets/Lottie.322ccfa3.js","assets/QSkeleton.17e3a508.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/QBadge.04e2f893.js","assets/QScrollArea.123c785e.js","assets/selection.7ec1f70b.js","assets/QTooltip.711c804c.js","assets/position-engine.efa4a4fc.js","assets/LottieWeb.215ad13c.js","assets/_commonjsHelpers.825a3ddb.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css"]),path:"/lottie",name:"Lottie",meta:{title:"Lottie\u52D5\u756B",icon:"animation",keepAlive:!1,roles:["admin"]}},{component:s,path:"/menu1",name:"menu1",meta:{title:"\u647A\u758A\u76EE\u9304",icon:"filter_1",isOpen:!1},children:[{component:s,path:"menu2",name:"menu2",meta:{title:"\u7B2C\u4E00\u5C64",icon:"filter_2"},children:[{component:()=>e(()=>import("./ExpansionMenu.3428cd19.js"),["assets/ExpansionMenu.3428cd19.js","assets/BaseContent.ba5244ef.js","assets/BaseContent.e432ec0b.css","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/QScrollArea.123c785e.js","assets/selection.7ec1f70b.js"]),path:"menu3",name:"menu3",meta:{title:"\u7B2C\u4E8C\u5C64",icon:"filter_3"}}]}]},{component:s,path:"/docs",name:"docs",meta:{title:"\u5916\u90E8\u8CC7\u8A0A",icon:"description",isOpen:!1},children:[{component:()=>e(()=>import("./TypeScript.c49821cd.js"),["assets/TypeScript.c49821cd.js","assets/Iframe.997a5a54.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/BaseSkelton.22503762.js","assets/QSkeleton.17e3a508.js"]),path:"ts",name:"TypeScript",meta:{title:"TypeScript",icon:"fa-brands fa-js"}},{component:()=>e(()=>import("./Vite.c0c25e97.js"),["assets/Vite.c0c25e97.js","assets/Iframe.997a5a54.js","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/BaseSkelton.22503762.js","assets/QSkeleton.17e3a508.js"]),path:"vite",name:"Vite",meta:{title:"Vite",icon:"fa-solid fa-file-code"}},{path:"https://vuejs.org/",name:"Vue3",meta:{title:"Vue3",icon:"fa-brands fa-vuejs"}},{path:"https://quasar.dev/",name:"Quasar",meta:{title:"Quasar",icon:"fa-solid fa-file-code"}}]}],c=[{component:()=>e(()=>import("./MainLayout.808c3d18.js"),["assets/MainLayout.808c3d18.js","assets/MainLayout.a3275645.css","assets/index.56708ff0.js","assets/index.89e68f95.css","assets/QMenu.f782d946.js","assets/position-engine.efa4a4fc.js","assets/selection.7ec1f70b.js","assets/QScrollArea.123c785e.js","assets/tagView.41bd1cc2.js","assets/keep-alive.0ce344c2.js","assets/QTooltip.711c804c.js","assets/QBadge.04e2f893.js","assets/user.830c88d2.js","assets/DarkMode.d4dec48c.js","assets/user.812861c2.js","assets/permission.19ee6018.js"]),path:"/",name:"index",redirect:"/",children:_}];function l(i){p();const{hasPermission:a}=T();let t=i.filter(o=>{var n;return!((n=o.meta)!=null&&n.roles)||o.meta.roles.length===0?!0:a(o.meta.roles)});for(const o in t)t[o].children&&(t[o].children=l(t[o].children));return t}var w=D(async({router:i})=>{const a=k(),t=p(),{me:o}=V();i.beforeEach(async(n,d,r)=>{if(O.getItem("access_token"))if(n.path==="/login"&&r({path:"/"}),t.getUserRoles.length>0&&a.getPermissionRoutes.length)r();else{if(t.getUserRoles.length<=0){const{data:u,error:h}=await o();h.value||t.setUserInfo(u.value)}const m=g(_);c[0].children=l(m),a.setRoutes(c);for(let u of c)i.addRoute(u);r({...n,replace:!0})}else b.some(m=>m.path===n.path)?r():r({path:"/login"})})}),U=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{U as p,k as u};
