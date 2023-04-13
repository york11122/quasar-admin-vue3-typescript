import{bA as Y,bB as fe,cu as _t,bC as ge,c as r,r as M,cp as Pt,w as E,cv as Ne,cw as qt,c2 as Ct,h as i,bL as Ie,g as Z,bI as K,bD as xe,ca as kt,bJ as Re,c1 as xt,c4 as pe,as as He,o as Ue,ar as Bt,av as Rt,at as Ke,cr as We,cx as Tt,cy as Ft,cz as Vt,cA as Ee,cB as Be,cC as je,cD as Ot,aq as Ge,cE as $t,cF as ke,cG as te,bM as Lt,ac as Je,aB as Mt,a1 as Dt,b3 as ce,d as U,a4 as Nt,I as pt}from"./index.e4387ea1.js";import{Q as Et,a as jt}from"./QList.82b547e2.js";import{u as At,a as Qt,c as Xe,Q as zt}from"./QSelect.758af216.js";import{B as It}from"./BaseContent.12e6bd15.js";import"./QMenu.00954729.js";import"./position-engine.ac6bac36.js";import"./selection.57a36c23.js";import"./QScrollArea.6e430288.js";function de(e,l){return[!0,!1].includes(e)?e:l}var Ht=Y({name:"QPagination",props:{...fe,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||_t.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:l}){const{proxy:o}=Z(),{$q:v}=o,s=ge(e,v),f=r(()=>parseInt(e.min,10)),n=r(()=>parseInt(e.max,10)),u=r(()=>parseInt(e.maxPages,10)),c=r(()=>k.value+" / "+n.value),g=r(()=>de(e.boundaryLinks,e.input)),a=r(()=>de(e.boundaryNumbers,!e.input)),m=r(()=>de(e.directionLinks,e.input)),q=r(()=>de(e.ellipses,!e.input)),C=M(null),k=r({get:()=>e.modelValue,set:h=>{if(h=parseInt(h,10),e.disable||isNaN(h))return;const _=Pt(h,f.value,n.value);e.modelValue!==_&&l("update:modelValue",_)}});E(()=>`${f.value}|${n.value}`,()=>{k.value=e.modelValue});const P=r(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),S=r(()=>e.gutter in Ne?`${Ne[e.gutter]}px`:e.gutter||null),O=r(()=>S.value!==null?`--q-pagination-gutter-parent:-${S.value};--q-pagination-gutter-child:${S.value}`:null),T=r(()=>{const h=[e.iconFirst||v.iconSet.pagination.first,e.iconPrev||v.iconSet.pagination.prev,e.iconNext||v.iconSet.pagination.next,e.iconLast||v.iconSet.pagination.last];return v.lang.rtl===!0?h.reverse():h}),L=r(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),x=r(()=>qt(e,"flat")),F=r(()=>({[x.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),W=r(()=>{const h={[x.value]:!1};return e.activeDesign!==""&&(h[e.activeDesign]=!0),h}),be=r(()=>({...W.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),j=r(()=>{let h=Math.max(u.value,1+(q.value?2:0)+(a.value?2:0));const _={pgFrom:f.value,pgTo:n.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(n.value).length)}em`}};return u.value&&h<n.value-f.value+1&&(h=1+Math.floor(h/2)*2,_.pgFrom=Math.max(f.value,Math.min(n.value-h+1,e.modelValue-Math.floor(h/2))),_.pgTo=Math.min(n.value,_.pgFrom+h-1),a.value&&(_.boundaryStart=!0,_.pgFrom++),q.value&&_.pgFrom>f.value+(a.value?1:0)&&(_.ellipsesStart=!0,_.pgFrom++),a.value&&(_.boundaryEnd=!0,_.pgTo--),q.value&&_.pgTo<n.value-(a.value?1:0)&&(_.ellipsesEnd=!0,_.pgTo--)),_});function ee(h){k.value=h}function p(h){k.value=k.value+h}const z=r(()=>{function h(){k.value=C.value,C.value=null}return{"onUpdate:modelValue":_=>{C.value=_},onKeyup:_=>{Ct(_,13)===!0&&h()},onBlur:h}});function D(h,_,I){const N={"aria-label":_,"aria-current":"false",...F.value,...h};return I===!0&&Object.assign(N,{"aria-current":"true",...be.value}),_!==void 0&&(e.toFn!==void 0?N.to=e.toFn(_):N.onClick=()=>{ee(_)}),i(K,N)}return Object.assign(o,{set:ee,setByOffset:p}),()=>{const h=[],_=[];let I;if(g.value===!0&&(h.push(D({key:"bls",disable:e.disable||e.modelValue<=f.value,icon:T.value[0]},f.value)),_.unshift(D({key:"ble",disable:e.disable||e.modelValue>=n.value,icon:T.value[3]},n.value))),m.value===!0&&(h.push(D({key:"bdp",disable:e.disable||e.modelValue<=f.value,icon:T.value[1]},e.modelValue-1)),_.unshift(D({key:"bdn",disable:e.disable||e.modelValue>=n.value,icon:T.value[2]},e.modelValue+1))),e.input!==!0){I=[];const{pgFrom:N,pgTo:G,marginalStyle:H}=j.value;if(j.value.boundaryStart===!0){const V=f.value===e.modelValue;h.push(D({key:"bns",style:H,disable:e.disable,label:f.value},f.value,V))}if(j.value.boundaryEnd===!0){const V=n.value===e.modelValue;_.unshift(D({key:"bne",style:H,disable:e.disable,label:n.value},n.value,V))}j.value.ellipsesStart===!0&&h.push(D({key:"bes",style:H,disable:e.disable,label:"\u2026",ripple:!1},N-1)),j.value.ellipsesEnd===!0&&_.unshift(D({key:"bee",style:H,disable:e.disable,label:"\u2026",ripple:!1},G+1));for(let V=N;V<=G;V++)I.push(D({key:`bpg${V}`,style:H,disable:e.disable,label:V},V,V===e.modelValue))}return i("div",{class:P.value,...L.value},[i("div",{class:"q-pagination__content row no-wrap items-center",style:O.value},[...h,e.input===!0?i(Ie,{class:"inline",style:{width:`${c.value.length/1.5}em`},type:"number",dense:!0,value:C.value,disable:e.disable,dark:s.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:c.value,min:f.value,max:n.value,...z.value}):i("div",{class:"q-pagination__middle row justify-center"},I),..._])])}}}),Ut=Y({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:o}){const v=Z(),{proxy:{$q:s}}=v,f=n=>{o("click",n)};return()=>{if(e.props===void 0)return i("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},xe(l.default));let n,u;const c=v.vnode.key;if(c){if(n=e.props.colsMap[c],n===void 0)return}else n=e.props.col;if(n.sortable===!0){const a=n.align==="right"?"unshift":"push";u=kt(l.default,[]),u[a](i(Re,{class:n.__iconClass,name:s.iconSet.table.arrowUp}))}else u=xe(l.default);const g={class:n.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:n.headerStyle,onClick:a=>{n.sortable===!0&&e.props.sort(n),f(a)}};return i("th",g,u)}}});const Kt=["horizontal","vertical","cell","none"];var Wt=Y({name:"QMarkupTable",props:{...fe,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Kt.includes(e)}},setup(e,{slots:l}){const o=Z(),v=ge(e,o.proxy.$q),s=r(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>i("div",{class:s.value},[i("table",{class:"q-table"},xe(l.default))])}});function Ye(e,l){return i("div",e,[i("table",{class:"q-table"},l)])}const Gt={list:Et,table:Wt},Jt=["list","table","__qtable"];var Xt=Y({name:"QVirtualScroll",props:{...At,type:{type:String,default:"list",validator:e=>Jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:o}){let v;const s=M(null),f=r(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:n,localResetVirtualScroll:u,padVirtualScroll:c,onVirtualScrollEvt:g}=Qt({virtualScrollLength:f,getVirtualScrollTarget:k,getVirtualScrollEl:C}),a=r(()=>{if(f.value===0)return[];const T=(L,x)=>({index:n.value.from+x,item:L});return e.itemsFn===void 0?e.items.slice(n.value.from,n.value.to).map(T):e.itemsFn(n.value.from,n.value.to-n.value.from).map(T)}),m=r(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=r(()=>e.scrollTarget!==void 0?{}:{tabindex:0});E(f,()=>{u()}),E(()=>e.scrollTarget,()=>{S(),P()});function C(){return s.value.$el||s.value}function k(){return v}function P(){v=xt(C(),e.scrollTarget),v.addEventListener("scroll",g,pe.passive)}function S(){v!==void 0&&(v.removeEventListener("scroll",g,pe.passive),v=void 0)}function O(){let T=c(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(T=l.before().concat(T)),We(l.after,T)}return He(()=>{u()}),Ue(()=>{P()}),Bt(()=>{P()}),Rt(()=>{S()}),Ke(()=>{S()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ye({ref:s,class:"q-table__middle "+m.value},O()):i(Gt[e.type],{...o,ref:s,class:[o.class,m.value],...q.value},O)}}});const Yt={xs:2,sm:4,md:6,lg:10,xl:14};function Ae(e,l,o){return{transform:l===!0?`translateX(${o.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Zt=Y({name:"QLinearProgress",props:{...fe,...Tt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:o}=Z(),v=ge(e,o.$q),s=Ft(e,Yt),f=r(()=>e.indeterminate===!0||e.query===!0),n=r(()=>e.reverse!==e.query),u=r(()=>({...s.value!==null?s.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=r(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),g=r(()=>Ae(e.buffer!==void 0?e.buffer:1,n.value,o.$q)),a=r(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=r(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=r(()=>Ae(f.value===!0?1:e.value,n.value,o.$q)),C=r(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),k=r(()=>({width:`${e.value*100}%`})),P=r(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const S=[i("div",{class:m.value,style:g.value}),i("div",{class:C.value,style:q.value})];return e.stripe===!0&&f.value===!1&&S.push(i("div",{class:P.value,style:k.value})),i("div",{class:c.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},We(l.default,S))}}});let le=0;const el={fullscreen:Boolean,noRouteFullscreenExit:Boolean},tl=["update:fullscreen","fullscreen"];function ll(){const e=Z(),{props:l,emit:o,proxy:v}=e;let s,f,n;const u=M(!1);Vt(e)===!0&&E(()=>v.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),E(()=>l.fullscreen,m=>{u.value!==m&&c()}),E(u,m=>{o("update:fullscreen",m),o("fullscreen",m)});function c(){u.value===!0?a():g()}function g(){u.value!==!0&&(u.value=!0,n=v.$el.parentNode,n.replaceChild(f,v.$el),document.body.appendChild(v.$el),le++,le===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:a},Ee.add(s))}function a(){u.value===!0&&(s!==void 0&&(Ee.remove(s),s=void 0),n.replaceChild(v.$el,f),u.value=!1,le=Math.max(0,le-1),le===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return He(()=>{f=document.createElement("span")}),Ue(()=>{l.fullscreen===!0&&g()}),Ke(a),Object.assign(v,{toggleFullscreen:c,setFullscreen:g,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:c}}function al(e,l){return new Date(e)-new Date(l)}const nl={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function rl(e,l,o,v){const s=r(()=>{const{sortBy:u}=l.value;return u&&o.value.find(c=>c.name===u)||null}),f=r(()=>e.sortMethod!==void 0?e.sortMethod:(u,c,g)=>{const a=o.value.find(C=>C.name===c);if(a===void 0||a.field===void 0)return u;const m=g===!0?-1:1,q=typeof a.field=="function"?C=>a.field(C):C=>C[a.field];return u.sort((C,k)=>{let P=q(C),S=q(k);return P==null?-1*m:S==null?1*m:a.sort!==void 0?a.sort(P,S,C,k)*m:Be(P)===!0&&Be(S)===!0?(P-S)*m:je(P)===!0&&je(S)===!0?al(P,S)*m:typeof P=="boolean"&&typeof S=="boolean"?(P-S)*m:([P,S]=[P,S].map(O=>(O+"").toLocaleString().toLowerCase()),P<S?-1*m:P===S?0:m)})});function n(u){let c=e.columnSortOrder;if(Ot(u)===!0)u.sortOrder&&(c=u.sortOrder),u=u.name;else{const m=o.value.find(q=>q.name===u);m!==void 0&&m.sortOrder&&(c=m.sortOrder)}let{sortBy:g,descending:a}=l.value;g!==u?(g=u,a=c==="da"):e.binaryStateSort===!0?a=!a:a===!0?c==="ad"?g=null:a=!1:c==="ad"?a=!0:g=null,v({sortBy:g,descending:a,page:1})}return{columnToSort:s,computedSortMethod:f,sort:n}}const ol={filter:[String,Object],filterMethod:Function};function il(e,l){const o=r(()=>e.filterMethod!==void 0?e.filterMethod:(v,s,f,n)=>{const u=s?s.toLowerCase():"";return v.filter(c=>f.some(g=>{const a=n(g,c)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return E(()=>e.filter,()=>{Ge(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:o}}function ul(e,l){for(const o in l)if(l[o]!==e[o])return!1;return!0}function Qe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const sl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function cl(e,l){const{props:o,emit:v}=e,s=M(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:o.rowsPerPageOptions.length>0?o.rowsPerPageOptions[0]:5},o.pagination)),f=r(()=>{const a=o["onUpdate:pagination"]!==void 0?{...s.value,...o.pagination}:s.value;return Qe(a)}),n=r(()=>f.value.rowsNumber!==void 0);function u(a){c({pagination:a,filter:o.filter})}function c(a={}){Ge(()=>{v("request",{pagination:a.pagination||f.value,filter:a.filter||o.filter,getCellValue:l})})}function g(a,m){const q=Qe({...f.value,...a});if(ul(f.value,q)===!0){n.value===!0&&m===!0&&u(q);return}if(n.value===!0){u(q);return}o.pagination!==void 0&&o["onUpdate:pagination"]!==void 0?v("update:pagination",q):s.value=q}return{innerPagination:s,computedPagination:f,isServerSide:n,requestServerInteraction:c,setPagination:g}}function dl(e,l,o,v,s,f){const{props:n,emit:u,proxy:{$q:c}}=e,g=r(()=>v.value===!0?o.value.rowsNumber||0:f.value),a=r(()=>{const{page:x,rowsPerPage:F}=o.value;return(x-1)*F}),m=r(()=>{const{page:x,rowsPerPage:F}=o.value;return x*F}),q=r(()=>o.value.page===1),C=r(()=>o.value.rowsPerPage===0?1:Math.max(1,Math.ceil(g.value/o.value.rowsPerPage))),k=r(()=>m.value===0?!0:o.value.page>=C.value),P=r(()=>(n.rowsPerPageOptions.includes(l.value.rowsPerPage)?n.rowsPerPageOptions:[l.value.rowsPerPage].concat(n.rowsPerPageOptions)).map(F=>({label:F===0?c.lang.table.allRows:""+F,value:F})));E(C,(x,F)=>{if(x===F)return;const W=o.value.page;x&&!W?s({page:1}):x<W&&s({page:x})});function S(){s({page:1})}function O(){const{page:x}=o.value;x>1&&s({page:x-1})}function T(){const{page:x,rowsPerPage:F}=o.value;m.value>0&&x*F<g.value&&s({page:x+1})}function L(){s({page:C.value})}return n["onUpdate:pagination"]!==void 0&&u("update:pagination",{...o.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:q,isLastPage:k,pagesNumber:C,computedRowsPerPageOptions:P,computedRowsNumber:g,firstPage:S,prevPage:O,nextPage:T,lastPage:L}}const vl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},fl=["update:selected","selection"];function gl(e,l,o,v){const s=r(()=>{const k={};return e.selected.map(v.value).forEach(P=>{k[P]=!0}),k}),f=r(()=>e.selection!=="none"),n=r(()=>e.selection==="single"),u=r(()=>e.selection==="multiple"),c=r(()=>o.value.length>0&&o.value.every(k=>s.value[v.value(k)]===!0)),g=r(()=>c.value!==!0&&o.value.some(k=>s.value[v.value(k)]===!0)),a=r(()=>e.selected.length);function m(k){return s.value[k]===!0}function q(){l("update:selected",[])}function C(k,P,S,O){l("selection",{rows:P,added:S,keys:k,evt:O});const T=n.value===!0?S===!0?P:[]:S===!0?e.selected.concat(P):e.selected.filter(L=>k.includes(v.value(L))===!1);l("update:selected",T)}return{hasSelectionMode:f,singleSelection:n,multipleSelection:u,allRowsSelected:c,someRowsSelected:g,rowsSelectedNumber:a,isRowSelected:m,clearSelection:q,updateSelection:C}}function ze(e){return Array.isArray(e)?e.slice():[]}const bl={expanded:Array},ml=["update:expanded"];function yl(e,l){const o=M(ze(e.expanded));E(()=>e.expanded,n=>{o.value=ze(n)});function v(n){return o.value.includes(n)}function s(n){e.expanded!==void 0?l("update:expanded",n):o.value=n}function f(n,u){const c=o.value.slice(),g=c.indexOf(n);u===!0?g===-1&&(c.push(n),s(c)):g!==-1&&(c.splice(g,1),s(c))}return{isRowExpanded:v,setExpanded:s,updateExpanded:f}}const Sl={visibleColumns:Array};function hl(e,l,o){const v=r(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(c=>({name:c,label:c.toUpperCase(),field:c,align:Be(u[c])?"right":"left",sortable:!0})):[]}),s=r(()=>{const{sortBy:u,descending:c}=l.value;return(e.visibleColumns!==void 0?v.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):v.value).map(a=>{const m=a.align||"right",q=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:q+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>q+" "+a.classes:C=>q+" "+a.classes(C):()=>q}})}),f=r(()=>{const u={};return s.value.forEach(c=>{u[c.name]=c}),u}),n=r(()=>e.tableColspan!==void 0?e.tableColspan:s.value.length+(o.value===!0?1:0));return{colList:v,computedCols:s,computedColsMap:f,computedColspan:n}}const ve="q-table__bottom row items-center",Ze={};Xe.forEach(e=>{Ze[e]={}});var wl=Y({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...fe,...el,...Sl,...ol,...sl,...bl,...vl,...nl},emits:["request","virtualScroll",...tl,...ml,...fl],setup(e,{slots:l,emit:o}){const v=Z(),{proxy:{$q:s}}=v,f=ge(e,s),{inFullscreen:n,toggleFullscreen:u}=ll(),c=r(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),g=M(null),a=M(null),m=r(()=>e.grid!==!0&&e.virtualScroll===!0),q=r(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=r(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(n.value===!0?" fullscreen scroll":"")),k=r(()=>C.value+(e.loading===!0?" q-table--loading":""));E(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:P,computedPagination:S,isServerSide:O,requestServerInteraction:T,setPagination:L}=cl(v,J),{computedFilterMethod:x}=il(e,L),{isRowExpanded:F,setExpanded:W,updateExpanded:be}=yl(e,o),j=r(()=>{let t=e.rows;if(O.value===!0||t.length===0)return t;const{sortBy:d,descending:b}=S.value;return e.filter&&(t=x.value(t,e.filter,A.value,J)),tt.value!==null&&(t=lt.value(e.rows===t?t.slice():t,d,b)),t}),ee=r(()=>j.value.length),p=r(()=>{let t=j.value;if(O.value===!0)return t;const{rowsPerPage:d}=S.value;return d!==0&&(ae.value===0&&e.rows!==t?t.length>ne.value&&(t=t.slice(0,ne.value)):t=t.slice(ae.value,ne.value)),t}),{hasSelectionMode:z,singleSelection:D,multipleSelection:h,allRowsSelected:_,someRowsSelected:I,rowsSelectedNumber:N,isRowSelected:G,clearSelection:H,updateSelection:V}=gl(e,o,p,c),{colList:et,computedCols:A,computedColsMap:Te,computedColspan:Fe}=hl(e,S,z),{columnToSort:tt,computedSortMethod:lt,sort:me}=rl(e,S,et,L),{firstRowIndex:ae,lastRowIndex:ne,isFirstPage:ye,isLastPage:Se,pagesNumber:re,computedRowsPerPageOptions:at,computedRowsNumber:oe,firstPage:he,prevPage:we,nextPage:_e,lastPage:Pe}=dl(v,P,S,O,L,ee),nt=r(()=>p.value.length===0),rt=r(()=>{const t={};return Xe.forEach(d=>{t[d]=e[d]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function ot(){m.value===!0&&a.value.reset()}function it(){if(e.grid===!0)return ht();const t=e.hideHeader!==!0?Me:null;if(m.value===!0){const b=l["top-row"],y=l["bottom-row"],w={default:R=>Oe(R.item,l.body,R.index)};if(b!==void 0){const R=i("tbody",b({cols:A.value}));w.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(w.before=t);return y!==void 0&&(w.after=()=>i("tbody",y({cols:A.value}))),i(Xt,{ref:a,class:e.tableClass,style:e.tableStyle,...rt.value,scrollTarget:e.virtualScrollTarget,items:p.value,type:"__qtable",tableColspan:Fe.value,onVirtualScroll:st},w)}const d=[ct()];return t!==null&&d.unshift(t()),Ye({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},d)}function ut(t,d){if(a.value!==null){a.value.scrollTo(t,d);return}t=parseInt(t,10);const b=g.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(b!==null){const y=g.value.querySelector(".q-table__middle.scroll"),w=b.offsetTop-e.virtualScrollStickySizeStart,R=w<y.scrollTop?"decrease":"increase";y.scrollTop=w,o("virtualScroll",{index:t,from:0,to:P.value.rowsPerPage-1,direction:R})}}function st(t){o("virtualScroll",t)}function Ve(){return[i(Zt,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Oe(t,d,b){const y=c.value(t),w=G(y);if(d!==void 0)return d($e({key:y,row:t,pageIndex:b,__trClass:w?"selected":""}));const R=l["body-cell"],B=A.value.map($=>{const ue=l[`body-cell-${$.name}`],se=ue!==void 0?ue:R;return se!==void 0?se(dt({key:y,row:t,pageIndex:b,col:$})):i("td",{class:$.__tdClass(t),style:$.__tdStyle(t)},J($,t))});if(z.value===!0){const $=l["body-selection"],ue=$!==void 0?$(vt({key:y,row:t,pageIndex:b})):[i(ke,{modelValue:w,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(se,wt)=>{V([y],[t],se,wt)}})];B.unshift(i("td",{class:"q-table--col-auto-width"},ue))}const Q={key:y,class:{selected:w}};return e.onRowClick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onClick=$=>{o("RowClick",$,t,b)}),e.onRowDblclick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onDblclick=$=>{o("RowDblclick",$,t,b)}),e.onRowContextmenu!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onContextmenu=$=>{o("RowContextmenu",$,t,b)}),i("tr",Q,B)}function ct(){const t=l.body,d=l["top-row"],b=l["bottom-row"];let y=p.value.map((w,R)=>Oe(w,t,R));return d!==void 0&&(y=d({cols:A.value}).concat(y)),b!==void 0&&(y=y.concat(b({cols:A.value}))),i("tbody",y)}function $e(t){return qe(t),t.cols=t.cols.map(d=>te({...d},"value",()=>J(d,t.row))),t}function dt(t){return qe(t),te(t,"value",()=>J(t.col,t.row)),t}function vt(t){return qe(t),t}function qe(t){Object.assign(t,{cols:A.value,colsMap:Te.value,sort:me,rowIndex:ae.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),z.value===!0&&te(t,"selected",()=>G(t.key),(d,b)=>{V([t.key],[t.row],d,b)}),te(t,"expand",()=>F(t.key),d=>{be(t.key,d)})}function J(t,d){const b=typeof t.field=="function"?t.field(d):d[t.field];return t.format!==void 0?t.format(b,d):b}const X=r(()=>({pagination:S.value,pagesNumber:re.value,isFirstPage:ye.value,isLastPage:Se.value,firstPage:he,prevPage:we,nextPage:_e,lastPage:Pe,inFullscreen:n.value,toggleFullscreen:u}));function ft(){const t=l.top,d=l["top-left"],b=l["top-right"],y=l["top-selection"],w=z.value===!0&&y!==void 0&&N.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return i("div",{class:R},[t(X.value)]);let B;if(w===!0?B=y(X.value).slice():(B=[],d!==void 0?B.push(i("div",{class:"q-table__control"},[d(X.value)])):e.title&&B.push(i("div",{class:"q-table__control"},[i("div",{class:["q-table__title",e.titleClass]},e.title)]))),b!==void 0&&(B.push(i("div",{class:"q-table__separator col"})),B.push(i("div",{class:"q-table__control"},[b(X.value)]))),B.length!==0)return i("div",{class:R},B)}const Le=r(()=>I.value===!0?null:_.value);function Me(){const t=gt();return e.loading===!0&&l.loading===void 0&&t.push(i("tr",{class:"q-table__progress"},[i("th",{class:"relative-position",colspan:Fe.value},Ve())])),i("thead",t)}function gt(){const t=l.header,d=l["header-cell"];if(t!==void 0)return t(Ce({header:!0})).slice();const b=A.value.map(y=>{const w=l[`header-cell-${y.name}`],R=w!==void 0?w:d,B=Ce({col:y});return R!==void 0?R(B):i(Ut,{key:y.name,props:B},()=>y.label)});if(D.value===!0&&e.grid!==!0)b.unshift(i("th",{class:"q-table--col-auto-width"}," "));else if(h.value===!0){const y=l["header-selection"],w=y!==void 0?y(Ce({})):[i(ke,{color:e.color,modelValue:Le.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":De})];b.unshift(i("th",{class:"q-table--col-auto-width"},w))}return[i("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},b)]}function Ce(t){return Object.assign(t,{cols:A.value,sort:me,colsMap:Te.value,color:e.color,dark:f.value,dense:e.dense}),h.value===!0&&te(t,"selected",()=>Le.value,De),t}function De(t){I.value===!0&&(t=!1),V(p.value.map(c.value),p.value,t)}const ie=r(()=>{const t=[e.iconFirstPage||s.iconSet.table.firstPage,e.iconPrevPage||s.iconSet.table.prevPage,e.iconNextPage||s.iconSet.table.nextPage,e.iconLastPage||s.iconSet.table.lastPage];return s.lang.rtl===!0?t.reverse():t});function bt(){if(e.hideBottom===!0)return;if(nt.value===!0){if(e.hideNoData===!0)return;const b=e.loading===!0?e.loadingLabel||s.lang.table.loading:e.filter?e.noResultsLabel||s.lang.table.noResults:e.noDataLabel||s.lang.table.noData,y=l["no-data"],w=y!==void 0?[y({message:b,icon:s.iconSet.table.warning,filter:e.filter})]:[i(Re,{class:"q-table__bottom-nodata-icon",name:s.iconSet.table.warning}),b];return i("div",{class:ve+" q-table__bottom--nodata"},w)}const t=l.bottom;if(t!==void 0)return i("div",{class:ve},[t(X.value)]);const d=e.hideSelectedBanner!==!0&&z.value===!0&&N.value>0?[i("div",{class:"q-table__control"},[i("div",[(e.selectedRowsLabel||s.lang.table.selectedRecords)(N.value)])])]:[];if(e.hidePagination!==!0)return i("div",{class:ve+" justify-end"},yt(d));if(d.length>0)return i("div",{class:ve},d)}function mt(t){L({page:1,rowsPerPage:t.value})}function yt(t){let d;const{rowsPerPage:b}=S.value,y=e.paginationLabel||s.lang.table.pagination,w=l.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(i("div",{class:"q-table__separator col"})),R===!0&&t.push(i("div",{class:"q-table__control"},[i("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||s.lang.table.recordsPerPage]),i(zt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:b,options:at.value,displayValue:b===0?s.lang.table.allRows:b,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":mt})])),w!==void 0)d=w(X.value);else if(d=[i("span",b!==0?{class:"q-table__bottom-item"}:{},[b?y(ae.value+1,Math.min(ne.value,oe.value),oe.value):y(1,ee.value,oe.value)])],b!==0&&re.value>1){const B={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(B.size="sm"),re.value>2&&d.push(i(K,{key:"pgFirst",...B,icon:ie.value[0],disable:ye.value,onClick:he})),d.push(i(K,{key:"pgPrev",...B,icon:ie.value[1],disable:ye.value,onClick:we}),i(K,{key:"pgNext",...B,icon:ie.value[2],disable:Se.value,onClick:_e})),re.value>2&&d.push(i(K,{key:"pgLast",...B,icon:ie.value[3],disable:Se.value,onClick:Pe}))}return t.push(i("div",{class:"q-table__control"},d)),t}function St(){const t=e.gridHeader===!0?[i("table",{class:"q-table"},[Me()])]:e.loading===!0&&l.loading===void 0?Ve():void 0;return i("div",{class:"q-table__middle"},t)}function ht(){const t=l.item!==void 0?l.item:d=>{const b=d.cols.map(w=>i("div",{class:"q-table__grid-item-row"},[i("div",{class:"q-table__grid-item-title"},[w.label]),i("div",{class:"q-table__grid-item-value"},[w.value])]));if(z.value===!0){const w=l["body-selection"],R=w!==void 0?w(d):[i(ke,{modelValue:d.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(B,Q)=>{V([d.key],[d.row],B,Q)}})];b.unshift(i("div",{class:"q-table__grid-item-row"},R),i(Lt,{dark:f.value}))}const y={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(y.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(y.onClick=w=>{o("RowClick",w,d.row,d.pageIndex)}),e.onRowDblclick!==void 0&&(y.onDblclick=w=>{o("RowDblclick",w,d.row,d.pageIndex)})),i("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(d.selected===!0?" q-table__grid-item--selected":"")},[i("div",y,b)])};return i("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},p.value.map((d,b)=>t($e({key:c.value(d),row:d,pageIndex:b}))))}return Object.assign(v.proxy,{requestServerInteraction:T,setPagination:L,firstPage:he,prevPage:we,nextPage:_e,lastPage:Pe,isRowSelected:G,clearSelection:H,isRowExpanded:F,setExpanded:W,sort:me,resetVirtualScroll:ot,scrollTo:ut,getCellValue:J}),$t(v.proxy,{filteredSortedRows:()=>j.value,computedRows:()=>p.value,computedRowsNumber:()=>oe.value}),()=>{const t=[ft()],d={ref:g,class:k.value};return e.grid===!0?t.push(St()):Object.assign(d,{class:[d.class,e.cardClass],style:e.cardStyle}),t.push(it(),bt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),i("div",d,t)}}});const _l={class:"full-width row justify-center"},Pl=Je({name:"FitTable"}),Vl=Je({...Pl,setup(e){const l=M({sortBy:"desc",descending:!1,page:1,rowsPerPage:100}),o=r(()=>Math.ceil(n.value.length/l.value.rowsPerPage)),v=M(""),s=M([]),f=M([{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:u=>u.name,format:u=>`${u}`,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0}]),n=M([]);for(let u=0;u<500;u++)n.value.push({name:"Frozen Yogurt "+u,calories:Math.floor(Math.random()*100)+1,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"});return(u,c)=>(Mt(),Dt(It,{class:"q-pa-sm"},{default:ce(()=>[U(wl,{class:"fit sticky-header-table",selection:"multiple",selected:s.value,"onUpdate:selected":c[2]||(c[2]=g=>s.value=g),dense:u.$q.screen.lt.md,separator:"cell",flat:"",bordered:"",rows:n.value,filter:v.value,columns:f.value,"row-key":"name",pagination:l.value,"onUpdate:pagination":c[3]||(c[3]=g=>l.value=g)},{top:ce(()=>[U(K,{color:"primary",label:"Add row"}),U(K,{class:"q-ml-sm",color:"primary",label:"Remove row"}),U(jt),U(Ie,{dense:"",outlined:"",debounce:"300",modelValue:v.value,"onUpdate:modelValue":c[0]||(c[0]=g=>v.value=g)},{append:ce(()=>[U(Re,{name:"search"})]),_:1},8,["modelValue"])]),bottom:ce(()=>[Nt("div",_l,[U(Ht,{modelValue:l.value.page,"onUpdate:modelValue":c[1]||(c[1]=g=>l.value.page=g),input:"",max:pt(o)},null,8,["modelValue","max"])])]),_:1},8,["selected","dense","rows","filter","columns","pagination"])]),_:1}))}});export{Vl as default};
