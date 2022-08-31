import{a as Q,Q as C}from"./QCard.eb67bb72.js";import{bz as D,i as G,bS as H,c as S,bT as Y,h as n,bE as J,bB as N,g as X,aC as Z,r as v,w as F,o as I,as as ee,bU as R,bV as P,bW as te,ab as A,a_ as ae,a as ie,aA as M,a2 as oe,O as ne,I as le,a0 as se,b2 as r,a3 as a,d as o,a9 as re}from"./index.81654597.js";import{u as de,a as ce}from"./use-dark.67412188.js";import{g as ue}from"./QScrollArea.dd7d6b46.js";import{u as O}from"./eCharts.730d6874.js";import{B as me}from"./BaseContent.a0964080.js";import{b as j,T as fe}from"./myApi.5a3b0f18.js";import"./user.6beb8972.js";import"./tagView.30d8709c.js";function U(e){let i=!1,t,l;function d(){l=arguments,i!==!0&&(i=!0,t=requestAnimationFrame(()=>{e.apply(this,l),l=void 0,i=!1}))}return d.cancel=()=>{window.cancelAnimationFrame(t),i=!1},d}var $=D({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:i}){const t=G(H,()=>{console.error("QTimelineEntry needs to be child of QTimeline")}),l=S(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),d=S(()=>`q-timeline__dot text-${e.color||t.color}`),p=S(()=>t.layout==="comfortable"&&t.side==="left");return()=>{const h=Y(i.default,[]);if(e.body!==void 0&&h.unshift(e.body),e.heading===!0){const _=[n("div"),n("div"),n(e.tag,{class:"q-timeline__heading-title"},h)];return n("div",{class:"q-timeline__heading"},p.value===!0?_.reverse():_)}let u;e.icon!==void 0?u=[n(J,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(u=[n("img",{class:"q-timeline__dot-img",src:e.avatar})]);const s=[n("div",{class:"q-timeline__subtitle"},[n("span",{},N(i.subtitle,[e.subtitle]))]),n("div",{class:d.value},u),n("div",{class:"q-timeline__content"},[n("h6",{class:"q-timeline__title"},N(i.title,[e.title]))].concat(h))];return n("li",{class:l.value},p.value===!0?s.reverse():s)}}}),ve=D({name:"QTimeline",props:{...de,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:i}){const t=X(),l=ce(e,t.proxy.$q);Z(H,e);const d=S(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(l.value===!0?" q-timeline--dark":""));return()=>n("ul",{class:d.value},N(i.default))}});const he={ratio:[String,Number]};function pe(e,i){return S(()=>{const t=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(t)!==!0&&t>0?{paddingBottom:`${100/t}%`}:null})}var ge=D({name:"QVideo",props:{...he,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const i=pe(e),t=S(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>n("div",{class:t.value,style:i.value},[n("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});const{passive:B}=te;var W=D({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:e=>e>=0&&e<=1},scrollTarget:{default:void 0},onScroll:Function},setup(e,{slots:i,emit:t}){const l=v(0),d=v(null),p=v(null),h=v(null);let u,s,_,w,y,m;F(()=>e.height,()=>{u===!0&&x()}),F(()=>e.scrollTarget,()=>{u===!0&&(q(),V())});let b=c=>{l.value=c,e.onScroll!==void 0&&t("scroll",c)};function x(){let c,f,T;m===window?(c=0,T=f=window.innerHeight):(c=R(m).top,f=P(m),T=c+f);const E=R(d.value).top,K=E+e.height;if(y!==void 0||K>c&&E<T){const L=(T-E)/(e.height+f);g((_-e.height)*L*e.speed),b(L)}}let g=c=>{s.style.transform=`translate3d(-50%,${Math.round(c)}px,0)`};function k(){_=s.naturalHeight||s.videoHeight||P(s),u===!0&&x()}function V(){u=!0,m=ue(d.value,e.scrollTarget),m.addEventListener("scroll",x,B),window.addEventListener("resize",w,B),x()}function q(){u===!0&&(u=!1,m.removeEventListener("scroll",x,B),window.removeEventListener("resize",w,B),m=void 0,g.cancel(),b.cancel(),w.cancel())}return I(()=>{g=U(g),b=U(b),w=U(k),s=i.media!==void 0?p.value.children[0]:h.value,s.onload=s.onloadstart=s.loadedmetadata=k,k(),s.style.display="initial",window.IntersectionObserver!==void 0?(y=new IntersectionObserver(c=>{(c[0].isIntersecting===!0?V:q)()}),y.observe(d.value)):V()}),ee(()=>{q(),y!==void 0&&y.disconnect(),s.onload=s.onloadstart=s.loadedmetadata=null}),()=>n("div",{ref:d,class:"q-parallax",style:{height:`${e.height}px`}},[n("div",{ref:p,class:"q-parallax__media absolute-full"},i.media!==void 0?i.media():[n("img",{ref:h,src:e.src})]),n("div",{class:"q-parallax__content absolute-full column flex-center"},i.content!==void 0?i.content({percentScrolled:l.value}):N(i.default))])}});function _e(e){return Object.prototype.toString.call(e)==="[object Number]"}const ye=A({name:"CountTo"}),z=A({...ye,props:{startValue:{default:0},endValue:{default:2021},duration:{default:1500},autoplay:{type:Boolean,default:!0},decimals:{default:0},prefix:{default:""},suffix:{default:""},separator:{default:","},decimal:{default:"."},useEasing:{type:Boolean,default:!0},transition:{default:"linear"}},emits:["on-started","on-finished"],setup(e,{emit:i}){const t=e,l=v(t.startValue);let d=j(l);const p=S(()=>_(d.value)),h=v(!1);function u(){d=j(l,{disabled:h,duration:t.duration,onStarted:()=>i("on-started"),onFinished:()=>i("on-finished"),...t.useEasing?{transition:fe[t.transition]}:{}})}function s(){u(),l.value=t.endValue}function _(m){if(!m)return"";const{decimals:b,decimal:x,separator:g,suffix:k,prefix:V}=t;let q=Number(m).toFixed(b);q=String(q);const c=q.split(".");let f=c[0];const T=c.length>1?x+c[1]:"",E=/(\d+)(\d{3})/;if(g&&!_e(g))for(;E.test(f);)f=f.replace(E,`$1${g}$2`);return V+f+T+k}const w=F([()=>t.startValue,()=>t.endValue],()=>{t.autoplay&&s()}),y=ae(()=>{l.value=t.startValue});return I(()=>{t.autoplay&&s()}),ie(()=>{w(),y()}),(m,b)=>(M(),oe("span",null,ne(le(p)),1))}}),be={class:"q-pl-sm q-pr-sm"},xe={class:"column q-gutter-y-sm"},qe={class:"row col q-gutter-sm"},Se={class:"col-12 col-md-8"},we={class:"row"},Te={class:"text-h5 text-weight-bold"},Ee=a("div",{class:"text-caption text-grey",style:{"font-size":"15px"}}," Current User ",-1),ke={class:"text-h5 text-weight-bold"},Ve=a("div",{class:"text-caption text-grey",style:{"font-size":"15px"}}," Monthly Register ",-1),Qe={class:"text-h5 text-weight-bold"},$e=a("div",{class:"text-caption text-grey",style:{"font-size":"15px"}}," Total Sales ",-1),Be={class:"col"},Ne={class:"col-12 col-md"},De={class:"row q-gutter-x-sm"},Ae={class:"col-12 col-md"},Ce={class:"q-px-lg q-pb-md"},Ue=re(" November, 2017 "),ze=a("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Fe=a("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Le=a("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Re={class:"col-12 col-md column"},Pe={class:"col"},Oe={class:"col"},je=a("video",{height:"440",poster:"https://cdn.quasar.dev/img/polina.jpg",autoplay:"",loop:"",muted:""},[a("source",{type:"video/webm",src:"https://cdn.quasar.dev/img/polina.webm"}),a("source",{type:"video/mp4",src:"https://cdn.quasar.dev/img/polina.mp4"})],-1),We=a("h3",{class:"text-white"},"Video",-1),He=a("img",{src:"https://cdn.quasar.dev/img/parallax1.jpg"},null,-1),Ie=a("h1",{class:"text-white"},"Docks",-1),Me=A({name:"Dashboard"}),it=A({...Me,setup(e){const i=v(null),t=v({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]});O(i,t);const l=v(null),d=v({tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"}]}]});return O(l,d),(p,h)=>(M(),se(me,null,{default:r(()=>[a("div",be,[a("div",xe,[a("div",qe,[a("div",Se,[o(Q,{flat:"",bordered:"",class:"q-pa-md"},{default:r(()=>[a("div",we,[o(Q,{flat:"",class:"col-4 col-md-2"},{default:r(()=>[o(C,null,{default:r(()=>[a("div",Te,[o(z,{"start-value":0,"end-value":7754})]),Ee]),_:1}),o(C,null,{default:r(()=>[a("div",ke,[o(z,{"start-value":0,"end-value":24593})]),Ve]),_:1}),o(C,null,{default:r(()=>[a("div",Qe,[o(z,{"start-value":0,"end-value":1546})]),$e]),_:1})]),_:1}),a("div",Be,[a("div",{ref_key:"stackRef",ref:i,style:{height:"400px"}},null,512)])])]),_:1})]),a("div",Ne,[o(Q,{flat:"",bordered:""},{default:r(()=>[a("div",{ref_key:"pieRef",ref:l,style:{height:"430px"}},null,512)]),_:1})])]),a("div",De,[a("div",Ae,[o(Q,{flat:"",bordered:""},{default:r(()=>[a("div",Ce,[o(ve,{layout:"comfortable",color:"secondary"},{default:r(()=>[o($,{heading:""},{default:r(()=>[Ue]),_:1}),o($,{title:"Event Title",subtitle:"February 22, 1986",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{default:r(()=>[ze]),_:1}),o($,{title:"Event Title",subtitle:"February 22, 1986"},{default:r(()=>[Fe]),_:1}),o($,{title:"Event Title",subtitle:"February 22, 1986",color:"orange",icon:"done_all"},{default:r(()=>[Le]),_:1})]),_:1})])]),_:1})]),a("div",Re,[a("div",Pe,[o(Q,{flat:"",bordered:""},{default:r(()=>[o(ge,{ratio:16/9,src:"https://www.youtube.com/embed/VYzuhhBKKWQ"})]),_:1})]),a("div",Oe,[o(W,{height:150},{media:r(()=>[je]),default:r(()=>[We]),_:1}),o(W,{height:200,speed:.5},{media:r(()=>[He]),default:r(()=>[Ie]),_:1},8,["speed"])])])])])])]),_:1}))}});export{it as default};
