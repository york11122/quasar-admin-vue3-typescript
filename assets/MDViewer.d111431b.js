import{B as m}from"./BaseContent.d69dcb25.js";import{_ as l}from"./BaseSkelton.89dff318.js";import{M as d}from"./Markdown.8514f9ea.js";import{d as i}from"./user.a6d917b2.js";import{ac as s,aB as u,a1 as p,b3 as c,a4 as _,d as t,I as o,b as f}from"./index.eae2c33d.js";import"./QScrollArea.5b3d1d0d.js";import"./selection.919547f3.js";import"./QSkeleton.e223748a.js";const w={class:"base-markdown-content"},B=s({name:"MDViewer"}),g=s({...B,setup(V){const{data:e,isFetching:r}=i("data/md-editor-v3.md").text();return(h,a)=>(u(),p(m,null,{default:c(()=>[_("div",w,[t(l,{show:o(r)},null,8,["show"]),t(d,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=n=>f(e)?e.value=n:null),previewOnly:!0},null,8,["modelValue"])])]),_:1}))}});export{g as default};