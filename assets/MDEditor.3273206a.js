import{k as u,r as s,c as v,a7 as _,o as w,w as k,a as h,n as c,z as g,bt as y,l as E,O as M,f as V}from"./index.1847bb47.js";import{e as x}from"./user.0d7655e6.js";import{T as B,c as T,P as C,u as S}from"./fetch.f98e2903.js";import{B as z}from"./BaseContent.86c350b7.js";import"./user.59b9e8cc.js";import"./tagView.47fabf98.js";import"./_commonjsHelpers.4e997714.js";import"./QScrollArea.9227f4e2.js";import"./theme.67d43349.js";import"./plugin-vue_export-helper.21dcd24c.js";const P=u({name:"MarkdownEditorToast",__name:"MarkdownEditorToast",props:{modelValue:{default:""},previewOnly:{type:Boolean,default:!1}},emits:["update:modelValue","onSave"],setup(d,{emit:n}){const a=x(d,"modelValue",n),r=s(null),t=s(!1),l=v(()=>`editor-panel-editor ${_.isActive?" toastui-editor-dark":""} `);let e;const p=()=>{e=new B({el:r.value,initialEditType:"wysiwyg",previewStyle:"vertical",height:"100%",events:{change:()=>{a.value=e.getMarkdown()}},plugins:[[T,{highlighter:C}]]})};w(()=>{p()});const f=k(()=>a.value,i=>{!t.value&&i!==e.getMarkdown()&&(e.setMarkdown(i),e.moveCursorToStart(),t.value=!0)});return h(()=>{e.destroy(),f()}),(i,R)=>(c(),g("div",{class:y(l.value),ref_key:"editorElement",ref:r},null,2))}}),I=u({name:"MDEditor",__name:"MDEditor",setup(d){const n=s(),o=s(""),{data:m,onFetchResponse:a}=S("data/md-editor-v3.md").text();return a(r=>{o.value=m.value}),(r,t)=>(c(),E(z,{class:"q-pa-sm"},{default:M(()=>[V(P,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l),ref_key:"markdownRef",ref:n,"preview-only":""},null,8,["modelValue"])]),_:1}))}});export{I as default};
