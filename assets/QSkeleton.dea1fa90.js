import{C as r,D as d,E as u,c as n,h as c,G as g,g as k}from"./index.07f6d001.js";const m=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],h=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var S=r({name:"QSkeleton",props:{...d,tag:{type:String,default:"div"},type:{type:String,validator:e=>m.includes(e),default:"rect"},animation:{type:String,validator:e=>h.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:a}){const i=k(),s=u(e,i.proxy.$q),l=n(()=>{const t=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:t[0],height:t[1]}}),o=n(()=>`q-skeleton q-skeleton--${s.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>c(e.tag,{class:o.value,style:l.value},g(a.default))}});export{S as Q};
