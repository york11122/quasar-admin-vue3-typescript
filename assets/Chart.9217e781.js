import{ac as g,r as t,a as x,aB as b,a1 as v,b3 as n,d as r,bN as k,bK as i,a4 as o}from"./index.140ed43d.js";import{u as l}from"./eCharts.4932d34c.js";import{B as _}from"./BaseContent.d80bed7c.js";import"./user.88f915a1.js";import"./QScrollArea.ee901721.js";import"./selection.373c1d0c.js";const R=g({__name:"Chart",setup(A){const d=t(null),p=t({title:{text:"Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Email",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]});l(d,p);const a=[];for(let e=0;e<5;++e)a.push(Math.round(Math.random()*200));const u=t(null),f=t({title:{text:"Dynamic Bar Chart"},xAxis:{max:"dataMax"},yAxis:{type:"category",data:["A","B","C","D","E"],inverse:!0,animationDuration:300,animationDurationUpdate:300,max:2},series:[{realtimeSort:!0,name:"X",type:"bar",data:a,label:{show:!0,position:"right",valueAnimation:!0}}],legend:{show:!0},animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear"}),c=l(u,f),h=setInterval(()=>{var s;if(c.value){for(var e=0;e<a.length;++e)Math.random()>.9?a[e]+=Math.round(Math.random()*2e3):a[e]+=Math.round(Math.random()*200);(s=c.value)==null||s.setOption({series:[{type:"bar",data:a}]})}},1e3),m=t(null),y=t({title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]});return l(m,y),x(()=>{clearInterval(h)}),(e,s)=>(b(),v(_,null,{default:n(()=>[r(k,{flat:"",class:"q-gutter-md"},{default:n(()=>[r(i,null,{default:n(()=>[o("div",{ref_key:"barRef",ref:u,style:{height:"400px"}},null,512)]),_:1}),r(i,null,{default:n(()=>[o("div",{ref_key:"stackRef",ref:d,style:{height:"400px"}},null,512)]),_:1}),r(i,null,{default:n(()=>[o("div",{ref_key:"pieRef",ref:m,style:{height:"400px"}},null,512)]),_:1})]),_:1})]),_:1}))}});export{R as default};