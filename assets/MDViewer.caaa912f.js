import{ac as n,c as m,bS as _,r as s,w as p,o as f,a as v,aB as u,a3 as w,L as k,I as h,bt as V,a1 as g,b3 as x,d as y}from"./index.7940135a.js";import{T as b,c as B,u as M}from"./fetch.7f9ee169.js";import{P as E}from"./prism-typescript.c6c5edc7.js";import{B as T}from"./BaseContent.e314c0ee.js";import"./user.095a32b8.js";import"./user.fe4b5201.js";import"./tagView.a600b68a.js";import"./_commonjsHelpers.825a3ddb.js";import"./QScrollArea.1bd2efc9.js";import"./selection.a8b98b68.js";const C=n({name:"MarkdownViewerToast"}),I=n({...C,props:{modelValue:{default:""}},setup(c){const l=c,e=m(()=>`editor-panel-editor ${_.isActive?" toastui-editor-dark":""} `),a=s(null),o=s(!1);let t;const r=()=>{t=b.factory({el:a.value,viewer:!0,height:"100%",plugins:[[B,{highlighter:E}]]})},i=p(()=>l.modelValue,d=>{o.value||(t.setMarkdown(d),o.value=!0)});return f(()=>{r()}),v(()=>{t.destroy(),i()}),(d,S)=>(u(),w("div",{class:k(h(e)),ref_key:"viewerElement",ref:a},null,2))}});var P=V(I,[["__scopeId","data-v-3d30b28c"]]);const R=n({name:"MDViewer"}),j=n({...R,setup(c){const l=s(),e=s(""),{data:a,onFetchResponse:o}=M("data/md-editor-v3.md").text();return o(t=>{e.value=a.value}),(t,r)=>(u(),g(T,{scrollable:"",contentActiveStyle:""},{default:x(()=>[y(P,{class:"base-markdown-content",modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i),ref_key:"markdownRef",ref:l},null,8,["modelValue"])]),_:1}))}});export{j as default};
