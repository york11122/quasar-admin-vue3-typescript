import{u as r,a as d}from"./use-dark.091cae76.js";import{bz as u,g as c,c as n,h as g,bB as k}from"./index.5c1d204d.js";const m=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],h=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var q=u({name:"QSkeleton",props:{...r,tag:{type:String,default:"div"},type:{type:String,validator:e=>m.includes(e),default:"rect"},animation:{type:String,validator:e=>h.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:a}){const i=c(),s=d(e,i.proxy.$q),o=n(()=>{const t=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:t[0],height:t[1]}}),l=n(()=>`q-skeleton q-skeleton--${s.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>g(e.tag,{class:l.value,style:o.value},k(a.default))}});export{q as Q};