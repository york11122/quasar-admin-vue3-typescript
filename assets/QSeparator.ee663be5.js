import{u as h,a as x}from"./use-dark.091cae76.js";import{bz as $,g as b,c as o,h as w}from"./index.5c1d204d.js";let c,s=0;const e=new Array(256);for(let t=0;t<256;t++)e[t]=(t+256).toString(16).substring(1);const B=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return n=>{const a=new Uint8Array(n);return t.getRandomValues(a),a}}return n=>{const a=[];for(let r=n;r>0;r--)a.push(Math.floor(Math.random()*256));return a}})(),m=4096;function C(){(c===void 0||s+16>m)&&(s=0,c=B(m));const t=Array.prototype.slice.call(c,s,s+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,e[t[0]]+e[t[1]]+e[t[2]]+e[t[3]]+"-"+e[t[4]]+e[t[5]]+"-"+e[t[6]]+e[t[7]]+"-"+e[t[8]]+e[t[9]]+"-"+e[t[10]]+e[t[11]]+e[t[12]]+e[t[13]]+e[t[14]]+e[t[15]]}const S={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},l={xs:2,sm:4,md:8,lg:16,xl:24};var k=$({name:"QSeparator",props:{...h,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const n=b(),a=x(t,n.proxy.$q),r=o(()=>t.vertical===!0?"vertical":"horizontal"),u=o(()=>` q-separator--${r.value}`),f=o(()=>t.inset!==!1?`${u.value}-${S[t.inset]}`:""),v=o(()=>`q-separator${u.value}${f.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(a.value===!0?" q-separator--dark":"")),y=o(()=>{const i={};if(t.size!==void 0&&(i[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const g=t.spaced===!0?`${l.md}px`:t.spaced in l?`${l[t.spaced]}px`:t.spaced,d=t.vertical===!0?["Left","Right"]:["Top","Bottom"];i[`margin${d[0]}`]=i[`margin${d[1]}`]=g}return i});return()=>w("hr",{class:v.value,style:y.value,"aria-orientation":r.value})}});export{k as Q,C as u};