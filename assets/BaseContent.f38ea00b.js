import{g as P,i as k,b$ as x,c5 as B,c,bB as C,h as $,bA as I,ac as S,c6 as Q,r as _,o as w,bv as d,a as A,ar as T,av as O,aB as q,a3 as R,d as g,b3 as b,aI as z,b8 as D,b5 as F,bF as j,bp as E,I as K,bt as L}from"./index.ce7443d9.js";import{Q as M}from"./QScrollArea.84a16b48.js";const N={position:{type:String,default:"bottom-right",validator:o=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(o)},offset:{type:Array,validator:o=>o.length===2},expand:Boolean};function U(){const{props:o,proxy:{$q:i}}=P(),a=k(B,x);if(a===x)return console.error("QPageSticky needs to be child of QLayout"),x;const v=c(()=>{const e=o.position;return{top:e.indexOf("top")>-1,right:e.indexOf("right")>-1,bottom:e.indexOf("bottom")>-1,left:e.indexOf("left")>-1,vertical:e==="top"||e==="bottom",horizontal:e==="left"||e==="right"}}),s=c(()=>a.header.offset),l=c(()=>a.right.offset),r=c(()=>a.footer.offset),u=c(()=>a.left.offset),h=c(()=>{let e=0,n=0;const f=v.value,y=i.lang.rtl===!0?-1:1;f.top===!0&&s.value!==0?n=`${s.value}px`:f.bottom===!0&&r.value!==0&&(n=`${-r.value}px`),f.left===!0&&u.value!==0?e=`${y*u.value}px`:f.right===!0&&l.value!==0&&(e=`${-y*l.value}px`);const p={transform:`translate(${e}, ${n})`};return o.offset&&(p.margin=`${o.offset[1]}px ${o.offset[0]}px`),f.vertical===!0?(u.value!==0&&(p[i.lang.rtl===!0?"right":"left"]=`${u.value}px`),l.value!==0&&(p[i.lang.rtl===!0?"left":"right"]=`${l.value}px`)):f.horizontal===!0&&(s.value!==0&&(p.top=`${s.value}px`),r.value!==0&&(p.bottom=`${r.value}px`)),p}),m=c(()=>`q-page-sticky row flex-center fixed-${o.position} q-page-sticky--${o.expand===!0?"expand":"shrink"}`);function t(e){const n=C(e.default);return $("div",{class:m.value,style:h.value},o.expand===!0?n:[$("div",n)])}return{$layout:a,getStickyContent:t}}var V=I({name:"QPageSticky",props:N,setup(o,{slots:i}){const{getStickyContent:a}=U();return()=>a(i)}});const X={class:"main-content"},Y=S({name:"BaseContent"}),G=S({...Y,setup(o){const i={right:"2px",borderRadius:"3px",width:"7px"},a=Q(),v=_(null),s=_(""),l=_(!1),r=(t,e=0)=>{var n;(n=v.value)==null||n.setScrollPosition("vertical",t,e)},u=()=>{var t;return(t=v.value)==null?void 0:t.getScrollPosition()},h=t=>{t.verticalPercentage>=.1?l.value=!0:l.value=!1},m=()=>{r(0,300)};return w(()=>{s.value=a.fullPath;const t=d.getItem(s.value);t&&r(t.top)}),A(()=>{d.remove(s.value)}),T(()=>{const t=d.getItem(a.fullPath);t&&r(t.top)}),O(()=>{const t=u();d.set(s.value,t)}),(t,e)=>(q(),R("div",X,[g(K(M),{ref_key:"scrollArea",ref:v,"thumb-style":i,visible:!1,style:{height:"100%"},onScroll:h},{default:b(()=>[z(t.$slots,"default",{},void 0,!0),g(V,{position:"bottom-right",offset:[18,18]},{default:b(()=>[g(D,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:b(()=>[F(g(j,{class:"toTopBtn",fab:"",padding:"10px",icon:"expand_less",onClick:m},null,512),[[E,l.value]])]),_:1})]),_:1})]),_:3},512)]))}});var W=L(G,[["__scopeId","data-v-72c2e9b8"]]);export{W as B};