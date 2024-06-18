import{Q as h}from"./QSelect.2038ead4.js";import{k as $,r as g,bs as S,n as y,l as C,O as i,f as e,A as l,Y as u,u as r,S as d,a2 as p,W as a}from"./index.1847bb47.js";import{u as P}from"./user.59b9e8cc.js";import{u as k}from"./app.8ed32d12.js";import{u as B}from"./permission.2f3e0298.js";import{B as q}from"./BaseContent.86c350b7.js";import"./position-engine.61c866a2.js";import"./theme.67d43349.js";import"./tagView.47fabf98.js";import"./QScrollArea.9227f4e2.js";import"./plugin-vue_export-helper.21dcd24c.js";const D={class:"text-h6"},U={class:"text-subtitle2"},V=l("div",{class:"text-h6"},"v-permission",-1),Q={class:"q-gutter-sm"},w=l("div",{class:"text-h6"},"hasPermission",-1),R={class:"q-gutter-sm"},I=$({name:"Directive",__name:"Directive",setup(A){const t=P(),v=k(),{hasPermission:o}=B(),n=g(t.getUserRoles[0]),b=[{label:"super",value:"super"},{label:"admin",value:"admin"},{label:"user",value:"user"}],f=()=>{t.setUserRoles([n.value]),v.reloadPage(200)};return(s,c)=>{const m=S("permission");return y(),C(q,{scrollable:"",padding:""},{default:i(()=>[e(d,{class:"q-gutter-md"},{default:i(()=>[e(h,{style:{width:"200px"},outlined:"",label:"user role",modelValue:n.value,"onUpdate:modelValue":[c[0]||(c[0]=_=>n.value=_),f],options:b,"emit-value":""},null,8,["modelValue"]),l("div",D,u(s.$t("permission.currentPermission"))+": "+u(r(t).getUserRoles),1),l("div",U,u(s.$t("permission.description")),1)]),_:1}),e(d,{class:"q-gutter-md"},{default:i(()=>[V,l("div",Q,[p(e(a,{unelevated:"",color:"primary",label:`admin & user ${s.$t("permission.canSee")}`},null,8,["label"]),[[m,["admin","user"]]]),p(e(a,{unelevated:"",color:"primary",label:`admin ${s.$t("permission.canSee")}`},null,8,["label"]),[[m,["admin"]]]),p(e(a,{unelevated:"",color:"primary",label:`user ${s.$t("permission.canSee")}`},null,8,["label"]),[[m,["user"]]])])]),_:1}),e(d,{class:"q-gutter-md"},{default:i(()=>[w,l("div",R,[e(a,{disable:!r(o)(["admin","user"]),unelevated:"",color:"primary",label:`admin & user ${s.$t("permission.canClick")}`},null,8,["disable","label"]),e(a,{disable:!r(o)(["admin"]),unelevated:"",color:"primary",label:`admin ${s.$t("permission.canClick")}`},null,8,["disable","label"]),e(a,{disable:!r(o)(["user"]),unelevated:"",color:"primary",label:`user ${s.$t("permission.canClick")}`},null,8,["disable","label"])])]),_:1})]),_:1})}}});export{I as default};
