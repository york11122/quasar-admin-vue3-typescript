import{k as o,m as c,A as u,d as e,Q as n,X as i,S as f,$ as _,r,o as d,a2 as p,a3 as h,B as m}from"./index.91d82a25.js";import{Q as s}from"./QSkeleton.b1021544.js";const v={key:0,class:"q-pa-lg"},x=o({name:"BaseSkelton"}),w=o({...x,props:{show:{type:Boolean,default:!1}},setup(l){return(t,a)=>l.show?(c(),u("div",v,[e(f,{flat:""},{default:n(()=>[e(s,{height:"150px",square:""}),e(i,null,{default:n(()=>[e(s,{type:"text",class:"text-subtitle1"}),e(s,{type:"text",width:"50%",class:"text-subtitle1"}),e(s,{type:"text",class:"text-caption"})]),_:1})]),_:1})])):_("",!0)}}),k={class:"fit"},y=["src"],B=o({name:"Iframe"}),b=o({...B,props:{src:{default:""}},setup(l){const t=r(!1),a=r(null);return d(()=>{t.value=!0,a.attachEvent?a.value.attachEvent("onload",()=>{t.value=!1}):a.value.onload=()=>{t.value=!1}}),(C,Q)=>(c(),u("div",k,[e(w,{show:t.value},null,8,["show"]),p(m("iframe",{ref_key:"iframe",ref:a,class:"fit",style:{border:"none"},src:l.src},null,8,y),[[h,!t.value]])]))}});export{b as _};