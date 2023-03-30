import{a as g,Q as s}from"./QCard.a1d03eaa.js";import{u as o}from"./eCharts.73c5e02c.js";import{B as x}from"./BaseContent.f38ea00b.js";import{ac as b,r as t,a as v,aB as k,a1 as _,b3 as r,d as n,a4 as l}from"./index.ce7443d9.js";import"./use-dark.e0c82e30.js";import"./myApi.41335db4.js";import"./user.5900e267.js";import"./tagView.1898a9b7.js";import"./QScrollArea.84a16b48.js";import"./scroll.fb54183e.js";const V=b({__name:"Chart",setup(A){const m=t(null),p=t({title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]});o(m,p);const a=[];for(let e=0;e<5;++e)a.push(Math.round(Math.random()*200));const d=t(null),f=t({title:{text:"Dynamic Bar Chart"},xAxis:{max:"dataMax"},yAxis:{type:"category",data:["A","B","C","D","E"],inverse:!0,animationDuration:300,animationDurationUpdate:300,max:2},series:[{realtimeSort:!0,name:"X",type:"bar",data:a,label:{show:!0,position:"right",valueAnimation:!0}}],legend:{show:!0},animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear"}),u=o(d,f),h=setInterval(()=>{var i;if(u.value){for(var e=0;e<a.length;++e)Math.random()>.9?a[e]+=Math.round(Math.random()*2e3):a[e]+=Math.round(Math.random()*200);(i=u.value)==null||i.setOption({series:[{type:"bar",data:a}]})}},1e3),c=t(null),y=t({title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]});return o(c,y),v(()=>{clearInterval(h)}),(e,i)=>(k(),_(x,null,{default:r(()=>[n(g,{flat:"",class:"q-gutter-md"},{default:r(()=>[n(s,null,{default:r(()=>[l("div",{ref_key:"barRef",ref:d,style:{height:"400px"}},null,512)]),_:1}),n(s,null,{default:r(()=>[l("div",{ref_key:"stackRef",ref:m,style:{height:"400px"}},null,512)]),_:1}),n(s,null,{default:r(()=>[l("div",{ref_key:"pieRef",ref:c,style:{height:"400px"}},null,512)]),_:1})]),_:1})]),_:1}))}});export{V as default};