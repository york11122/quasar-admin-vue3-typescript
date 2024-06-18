import{c as K}from"./theme.67d43349.js";import{r as j,ap as N,aq as S,v as Q,ak as $,w as E,o as X,ai as R,g as Y,aj as D,ar as L,as as q,a4 as F,at as U}from"./index.1847bb47.js";const G={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},lt={...G,contextMenu:Boolean};function it({showing:t,avoidEmit:l,configureAnchorEl:i}){const{props:e,proxy:a,emit:s}=Y(),o=j(null);let c=null;function d(n){return o.value===null?!1:n===void 0||n.touches===void 0||n.touches.length<=1}const u={};i===void 0&&(Object.assign(u,{hide(n){a.hide(n)},toggle(n){a.toggle(n),n.qAnchorHandled=!0},toggleKey(n){N(n,13)===!0&&u.toggle(n)},contextClick(n){a.hide(n),S(n),Q(()=>{a.show(n),n.qAnchorHandled=!0})},prevent:S,mobileTouch(n){if(u.mobileCleanup(n),d(n)!==!0)return;a.hide(n),o.value.classList.add("non-selectable");const r=n.target;$(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,a.show(n),n.qAnchorHandled=!0},300)},mobileCleanup(n){o.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&n!==void 0&&K()}}),i=function(n=e.contextMenu){if(e.noParentEvent===!0||o.value===null)return;let r;n===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],$(u,"anchor",r)});function h(){D(u,"anchor")}function y(n){for(o.value=n;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function p(){if(e.target===!1||e.target===""||a.$el.parentNode===null)o.value=null;else if(e.target===!0)y(a.$el.parentNode);else{let n=e.target;if(typeof e.target=="string")try{n=document.querySelector(e.target)}catch{n=void 0}n!=null?(o.value=n.$el||n,i()):(o.value=null,console.error(`Anchor: target "${e.target}" not found`))}}return E(()=>e.contextMenu,n=>{o.value!==null&&(h(),i(n))}),E(()=>e.target,()=>{o.value!==null&&h(),p()}),E(()=>e.noParentEvent,n=>{o.value!==null&&(n===!0?h():i())}),X(()=>{p(),l!==!0&&e.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),R(()=>{c!==null&&clearTimeout(c),h()}),{anchorEl:o,canShow:d,anchorEvents:u}}function nt(t,l){const i=j(null);let e;function a(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,h=d!==void 0?d:e;c!==window&&c[u]("scroll",h,L.passive),window[u]("scroll",h,L.passive),e=d}function s(){i.value!==null&&(a(i.value),i.value=null)}const o=E(()=>t.noParentEvent,()=>{i.value!==null&&(s(),l())});return R(o),{localScrollTarget:i,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:W}=L,g=[];function M(t){const l=t.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let i=q.length-1;for(;i>=0;){const e=q[i].$;if(e.type.name==="QTooltip"){i--;continue}if(e.type.name!=="QDialog")break;if(e.props.seamless!==!0)return;i--}for(let e=g.length-1;e>=0;e--){const a=g[e];if((a.anchorEl.value===null||a.anchorEl.value.contains(l)===!1)&&(l===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(l)===!1))t.qClickOutside=!0,a.onClickOutside(t);else return}}function ot(t){g.push(t),g.length===1&&(document.addEventListener("mousedown",M,W),document.addEventListener("touchstart",M,W))}function at(t){const l=g.findIndex(i=>i===t);l!==-1&&(g.splice(l,1),g.length===0&&(document.removeEventListener("mousedown",M,W),document.removeEventListener("touchstart",M,W)))}let A,B;function rt(t){const l=t.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ut(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const k={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{k[`${t}#ltr`]=t,k[`${t}#rtl`]=t});function st(t,l){const i=t.split(" ");return{vertical:i[0],horizontal:k[`${i[1]}#${l===!0?"rtl":"ltr"}`]}}function J(t,l){let{top:i,left:e,right:a,bottom:s,width:o,height:c}=t.getBoundingClientRect();return l!==void 0&&(i-=l[1],e-=l[0],s+=l[1],a+=l[0],o+=l[0],c+=l[1]),{top:i,bottom:s,height:c,left:e,right:a,width:o,middle:e+(a-e)/2,center:i+(s-i)/2}}function Z(t,l,i){let{top:e,left:a}=t.getBoundingClientRect();return e+=l.top,a+=l.left,i!==void 0&&(e+=i[1],a+=i[0]),{top:e,bottom:e+1,height:1,left:a,right:a+1,width:1,middle:a,center:e}}function _(t,l){return{top:0,center:l/2,bottom:l,left:0,middle:t/2,right:t}}function P(t,l,i,e){return{top:t[i.vertical]-l[e.vertical],left:t[i.horizontal]-l[e.horizontal]}}function O(t,l=0){if(t.targetEl===null||t.anchorEl===null||l>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{O(t,l+1)},10);return}const{targetEl:i,offset:e,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:c,fit:d,cover:u,maxHeight:h,maxWidth:y}=t;if(F.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:b,offsetTop:v}=window.visualViewport;b!==A&&(H.setProperty("--q-pe-left",b+"px"),A=b),v!==B&&(H.setProperty("--q-pe-top",v+"px"),B=v)}const{scrollLeft:p,scrollTop:n}=i,r=c===void 0?J(a,u===!0?[0,0]:e):Z(a,c,e);Object.assign(i.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:z,offsetHeight:T}=i,{elWidth:V,elHeight:I}=d===!0||u===!0?{elWidth:Math.max(r.width,z),elHeight:u===!0?Math.max(r.height,T):T}:{elWidth:z,elHeight:T};let m={maxWidth:y,maxHeight:h};(d===!0||u===!0)&&(m.minWidth=r.width+"px",u===!0&&(m.minHeight=r.height+"px")),Object.assign(i.style,m);const x=_(V,I);let f=P(r,x,s,o);if(c===void 0||e===void 0)C(f,r,x,s,o);else{const{top:H,left:b}=f;C(f,r,x,s,o);let v=!1;if(f.top!==H){v=!0;const w=2*e[1];r.center=r.top-=w,r.bottom-=w+2}if(f.left!==b){v=!0;const w=2*e[0];r.middle=r.left-=w,r.right-=w+2}v===!0&&(f=P(r,x,s,o),C(f,r,x,s,o))}m={top:f.top+"px",left:f.left+"px"},f.maxHeight!==void 0&&(m.maxHeight=f.maxHeight+"px",r.height>f.maxHeight&&(m.minHeight=m.maxHeight)),f.maxWidth!==void 0&&(m.maxWidth=f.maxWidth+"px",r.width>f.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(i.style,m),i.scrollTop!==n&&(i.scrollTop=n),i.scrollLeft!==p&&(i.scrollLeft=p)}function C(t,l,i,e,a){const s=i.bottom,o=i.right,c=U(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(a.vertical==="center")t.top=l[e.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(l[e.vertical]>d/2){const h=Math.min(d,e.vertical==="center"?l.center:e.vertical===a.vertical?l.bottom:l.top);t.maxHeight=Math.min(s,h),t.top=Math.max(0,h-s)}else t.top=Math.max(0,e.vertical==="center"?l.center:e.vertical===a.vertical?l.top:l.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),a.horizontal==="middle")t.left=l[e.horizontal]>u/2?Math.max(0,u-o):0;else if(l[e.horizontal]>u/2){const h=Math.min(u,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.right:l.left);t.maxWidth=Math.min(o,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.left:l.right),t.maxWidth=Math.min(o,u-t.left)}export{ut as a,nt as b,it as c,ot as d,lt as e,st as p,at as r,O as s,G as u,rt as v};