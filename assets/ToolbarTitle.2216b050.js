import{Q as g}from"./QTooltip.525562f3.js";import{a4 as k,a5 as _,a6 as h,k as d,o as T,a7 as l,n as r,l as n,O as o,W as c,f as u,X as m,Y as p,B as b,c as S,h as $,E as v,a8 as y,V as B,Z as C}from"./index.1847bb47.js";import{u as Q}from"./theme.67d43349.js";const f=k.has.webStorage===!1?_():h("local"),i={install({$q:a}){a.localStorage=f}};Object.assign(i,f);const D=d({name:"DarkMode",__name:"DarkMode",setup(a){T(()=>{const e=i.getItem("dark");e!==null&&l.set(e)});const t=()=>{l.toggle(),i.set("dark",l.isActive)};return(e,s)=>(r(),n(c,{dense:"",flat:"",icon:e.$q.dark.isActive?"light_mode":"dark_mode",onClick:t},{default:o(()=>[u(g,null,{default:o(()=>[m(p(e.$q.dark.isActive?e.$t("layout.lightMode"):e.$t("layout.darkMode")),1)]),_:1})]),_:1},8,["icon"]))}});var M=b({name:"QToolbarTitle",props:{shrink:Boolean},setup(a,{slots:t}){const e=S(()=>"q-toolbar__title ellipsis"+(a.shrink===!0?" col-shrink":""));return()=>$("div",{class:e.value},v(t.default))}});const N=d({name:"ToolbarTitle",__name:"ToolbarTitle",props:{title:{default:""},mini:{type:Boolean,default:!1}},setup(a){const t=Q();return y(t),(e,s)=>(r(),n(c,{flat:"","no-caps":"","no-wrap":"",onClick:s[0]||(s[0]=w=>e.$router.push("/"))},{default:o(()=>[u(B,{name:"fa-solid fa-shield-dog"}),e.mini?C("",!0):(r(),n(M,{key:0,shrink:"",class:"text-weight-bold"},{default:o(()=>[m(p(e.title),1)]),_:1}))]),_:1}))}});export{i as P,D as _,N as a};