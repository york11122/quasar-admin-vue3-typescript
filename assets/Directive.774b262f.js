import{Q as f}from"./QSelect.bffe7228.js";import{k as m,r as h,bs as g,m as y,n as x,Q as a,f as e,B as l,Z as B,u as t,X as u,a2 as d,U as s}from"./index.72517aaa.js";import{u as S}from"./user.d886d8ee.js";import{u as k}from"./app.8ee8d337.js";import{u as P}from"./permission.e376d305.js";import{B as U}from"./BaseContent.8061c5e4.js";import"./position-engine.b2031195.js";import"./selection.4c790e44.js";import"./tagView.cbd0cd07.js";import"./theme.0402b10c.js";const q={class:"text-h6"},C=l("div",{class:"text-subtitle2"},"*super user is fully eligible",-1),Q=l("div",{class:"text-h6"},"v-permission",-1),V={class:"q-gutter-sm"},D=l("div",{class:"text-h6"},"hasPermission",-1),w={class:"q-gutter-sm"},R=m({name:"Directive"}),J=m({...R,setup(N){const r=S(),p=k(),{hasPermission:o}=P(),i=h(r.getUserRoles[0]),_=[{label:"super",value:"super"},{label:"admin",value:"admin"},{label:"user",value:"user"}],v=()=>{r.setUserRoles([i.value]),p.reloadPage(200)};return(A,c)=>{const n=g("permission");return y(),x(U,{scrollable:"",padding:""},{default:a(()=>[e(u,{class:"q-gutter-md"},{default:a(()=>[e(f,{style:{width:"200px"},outlined:"",label:"change user role",modelValue:i.value,"onUpdate:modelValue":[c[0]||(c[0]=b=>i.value=b),v],options:_,"emit-value":""},null,8,["modelValue"]),l("div",q," current user permission: "+B(t(r).getUserRoles),1),C]),_:1}),e(u,{class:"q-gutter-md"},{default:a(()=>[Q,l("div",V,[d(e(s,{unelevated:"",color:"primary",label:"admin & user can see"},null,512),[[n,["admin","user"]]]),d(e(s,{unelevated:"",color:"primary",label:"only admin can see"},null,512),[[n,["admin"]]]),d(e(s,{unelevated:"",color:"primary",label:"only user can see"},null,512),[[n,["user"]]])])]),_:1}),e(u,{class:"q-gutter-md"},{default:a(()=>[D,l("div",w,[e(s,{disable:!t(o)(["admin","user"]),unelevated:"",color:"primary",label:"admin & user can click"},null,8,["disable"]),e(s,{disable:!t(o)(["admin"]),unelevated:"",color:"primary",label:"only admin can click"},null,8,["disable"]),e(s,{disable:!t(o)(["user"]),unelevated:"",color:"primary",label:"only user can click"},null,8,["disable"])])]),_:1})]),_:1})}}});export{J as default};