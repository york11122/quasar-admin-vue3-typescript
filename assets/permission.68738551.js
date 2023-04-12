import{bs as f,bt as v,ac as E,aJ as A,aB as R,a1 as P,bu as e,f as D,bv as O,bw as b}from"./index.eae2c33d.js";import{u as p}from"./user.5689d14e.js";import{d as g}from"./tagView.aa7dcf53.js";import{u as T}from"./permission.106f7291.js";import{u as V}from"./user.a6d917b2.js";const k=f("routes",{state:()=>({permissionRoutes:[]}),getters:{getPermissionRoutes(i){return i.permissionRoutes}},actions:{setRoutes(i){this.permissionRoutes=i}}}),I=E({name:"Layout"});function L(i,a,t,o,n,d){const r=A("router-view");return R(),P(r)}var s=v(I,[["render",L]]);const _=[{component:()=>e(()=>import("./Dashboard.a1dc1702.js"),["assets/Dashboard.a1dc1702.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/eCharts.fd016084.js","assets/user.a6d917b2.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css","assets/QScrollArea.5b3d1d0d.js","assets/selection.919547f3.js"]),path:"/",name:"home",meta:{title:"\u9996\u9801",icon:"home"}},{component:()=>e(()=>import("./Chart.873816ff.js"),["assets/Chart.873816ff.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/eCharts.fd016084.js","assets/user.a6d917b2.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css","assets/QScrollArea.5b3d1d0d.js","assets/selection.919547f3.js"]),path:"/chart",name:"Chart",meta:{title:"\u5716\u8868",icon:"insert_chart_outlined"}},{component:()=>e(()=>import("./FitTable.c547580a.js"),["assets/FitTable.c547580a.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/QMenu.65c49a5d.js","assets/position-engine.bba2f7da.js","assets/selection.919547f3.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css","assets/QScrollArea.5b3d1d0d.js"]),path:"/table",name:"FitTable",meta:{title:"Table",icon:"table_view"}},{component:s,path:"/permission",name:"Permission",meta:{title:"\u6B0A\u9650\u63A7\u7BA1",icon:"verified_user",isOpen:!0},children:[{component:()=>e(()=>import("./Directive.c822c2c3.js"),["assets/Directive.c822c2c3.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/user.5689d14e.js","assets/tagView.aa7dcf53.js","assets/permission.106f7291.js"]),path:"directive",name:"Directive",meta:{title:"\u7D44\u4EF6\u6B0A\u9650",icon:"how_to_reg",keepAlive:!0}},{component:()=>e(()=>import("./Permission.2518cdcd.js"),["assets/Permission.2518cdcd.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/QScrollArea.5b3d1d0d.js","assets/selection.919547f3.js"]),path:"permission",name:"Permission",meta:{title:"\u8DEF\u7531\u6B0A\u9650",icon:"where_to_vote",keepAlive:!0,roles:["admin"]}}]},{component:s,path:"/markdown",name:"markdown",meta:{title:"markdown",icon:"fa-brands fa-markdown",keepAlive:!1,isOpen:!0},children:[{component:()=>e(()=>import("./MDViewer.d111431b.js"),["assets/MDViewer.d111431b.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/QScrollArea.5b3d1d0d.js","assets/selection.919547f3.js","assets/BaseSkelton.89dff318.js","assets/QSkeleton.e223748a.js","assets/Markdown.8514f9ea.js","assets/Markdown.e948c534.css","assets/user.a6d917b2.js"]),path:"md-viewer",name:"MDViewer",meta:{title:"MD\u5448\u73FE",icon:"article",keepAlive:!0}},{component:()=>e(()=>import("./MDEditor.ec53d541.js"),["assets/MDEditor.ec53d541.js","assets/Markdown.8514f9ea.js","assets/Markdown.e948c534.css","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/user.a6d917b2.js"]),path:"md-editor",name:"MDEditor",meta:{title:"\u7DE8\u8F2F\u5668",icon:"edit_note",keepAlive:!0}}]},{component:()=>e(()=>import("./Lottie.5e9e18ca.js"),["assets/Lottie.5e9e18ca.js","assets/QSkeleton.e223748a.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/QBadge.986f7777.js","assets/QScrollArea.5b3d1d0d.js","assets/selection.919547f3.js","assets/QTooltip.bf56040b.js","assets/position-engine.bba2f7da.js","assets/LottieWeb.6bbe1d3e.js","assets/_commonjsHelpers.825a3ddb.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css"]),path:"/lottie",name:"Lottie",meta:{title:"Lottie\u52D5\u756B",icon:"animation",keepAlive:!1,roles:["admin"]}},{component:s,path:"/menu1",name:"menu1",meta:{title:"\u647A\u758A\u76EE\u9304",icon:"filter_1",isOpen:!1},children:[{component:s,path:"menu2",name:"menu2",meta:{title:"\u7B2C\u4E00\u5C64",icon:"filter_2"},children:[{component:()=>e(()=>import("./ExpansionMenu.b104b52b.js"),["assets/ExpansionMenu.b104b52b.js","assets/BaseContent.d69dcb25.js","assets/BaseContent.e432ec0b.css","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/QScrollArea.5b3d1d0d.js","assets/selection.919547f3.js"]),path:"menu3",name:"menu3",meta:{title:"\u7B2C\u4E8C\u5C64",icon:"filter_3"}}]}]},{component:s,path:"/docs",name:"docs",meta:{title:"\u5916\u90E8\u8CC7\u8A0A",icon:"description",isOpen:!1},children:[{component:()=>e(()=>import("./TypeScript.d6510917.js"),["assets/TypeScript.d6510917.js","assets/Iframe.c5a9d21c.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/BaseSkelton.89dff318.js","assets/QSkeleton.e223748a.js"]),path:"ts",name:"TypeScript",meta:{title:"TypeScript",icon:"fa-brands fa-js"}},{component:()=>e(()=>import("./Vite.253b25ae.js"),["assets/Vite.253b25ae.js","assets/Iframe.c5a9d21c.js","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/BaseSkelton.89dff318.js","assets/QSkeleton.e223748a.js"]),path:"vite",name:"Vite",meta:{title:"Vite",icon:"fa-solid fa-file-code"}},{path:"https://vuejs.org/",name:"Vue3",meta:{title:"Vue3",icon:"fa-brands fa-vuejs"}},{path:"https://quasar.dev/",name:"Quasar",meta:{title:"Quasar",icon:"fa-solid fa-file-code"}}]}],c=[{component:()=>e(()=>import("./MainLayout.1f245d99.js"),["assets/MainLayout.1f245d99.js","assets/MainLayout.a3275645.css","assets/index.eae2c33d.js","assets/index.901a58f0.css","assets/QMenu.65c49a5d.js","assets/position-engine.bba2f7da.js","assets/selection.919547f3.js","assets/QScrollArea.5b3d1d0d.js","assets/tagView.aa7dcf53.js","assets/keep-alive.a44cf5bb.js","assets/QTooltip.bf56040b.js","assets/QBadge.986f7777.js","assets/user.5689d14e.js","assets/DarkMode.2de6d36d.js","assets/user.a6d917b2.js","assets/permission.106f7291.js"]),path:"/",name:"index",redirect:"/",children:_}];function l(i){p();const{hasPermission:a}=T();let t=i.filter(o=>{var n;return!((n=o.meta)!=null&&n.roles)||o.meta.roles.length===0?!0:a(o.meta.roles)});for(const o in t)t[o].children&&(t[o].children=l(t[o].children));return t}var w=D(async({router:i})=>{const a=k(),t=p(),{me:o}=V();i.beforeEach(async(n,d,r)=>{if(O.getItem("access_token"))if(n.path==="/login"&&r({path:"/"}),t.getUserRoles.length>0&&a.getPermissionRoutes.length)r();else{if(t.getUserRoles.length<=0){const{data:u,error:h}=await o();h.value||t.setUserInfo(u.value)}const m=g(_);c[0].children=l(m),a.setRoutes(c);for(let u of c)i.addRoute(u);r({...n,replace:!0})}else b.some(m=>m.path===n.path)?r():r({path:"/login"})})}),U=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{U as p,k as u};