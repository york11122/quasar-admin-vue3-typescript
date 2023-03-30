import{i as pe,bC as ke,g as W,w as D,o as re,at as le,r as I,c as k,bI as ye,bJ as me,au as xe,bE as Ce,aq as Q,av as we,ar as Me,bK as Se,h as M,bL as J,bG as ue,bM as qe,bB as G,b8 as Re,bN as Ae,bO as Ve,bA as Fe,bP as ie}from"./index.ce7443d9.js";import{u as _e,a as Ee}from"./use-dark.e0c82e30.js";import{u as Be}from"./QSeparator.20bdd1c2.js";import{a as he,r as Oe}from"./position-engine.d6e1425c.js";import{u as Te,a as $e}from"./use-form.406b7cea.js";function Pe({validate:e,resetValidation:t,requiresQForm:u}){const s=pe(ke,!1);if(s!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),s.unbindComponent(d)):s.bindComponent(d)}),re(()=>{f.disable!==!0&&s.bindComponent(d)}),le(()=>{f.disable!==!0&&s.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,de=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>se.test(e),hexaColor:e=>de.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>X.test(e)||ee.test(e),hexOrRgbColor:e=>se.test(e)||X.test(e),hexaOrRgbaColor:e=>de.test(e)||ee.test(e),anyColor:e=>fe.test(e)||X.test(e)||ee.test(e)},Ie=[!0,!1,"ondemand"],De={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ie.includes(e)}};function je(e,t){const{props:u,proxy:s}=W(),f=I(!1),d=I(null),c=I(null);Pe({validate:O,resetValidation:_});let y=0,B;const q=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),x=k(()=>u.disable!==!0&&q.value===!0),b=k(()=>u.error===!0||f.value===!0),U=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:d.value);D(()=>u.modelValue,()=>{N()}),D(()=>u.reactiveRules,P=>{P===!0?B===void 0&&(B=D(()=>u.rules,()=>{N(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),D(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,x.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&$())});function _(){y++,t.value=!1,c.value=null,f.value=!1,d.value=null,$.cancel()}function O(P=u.modelValue){if(x.value!==!0)return!0;const A=++y,H=t.value!==!0?()=>{c.value=!0}:()=>{},z=(S,C)=>{S===!0&&H(),f.value=S,d.value=C||null,t.value=!1},j=[];for(let S=0;S<u.rules.length;S++){const C=u.rules[S];let E;if(typeof C=="function"?E=C(P,ne):typeof C=="string"&&ne[C]!==void 0&&(E=ne[C](P)),E===!1||typeof E=="string")return z(!0,E),!1;E!==!0&&E!==void 0&&j.push(E)}return j.length===0?(z(!1),!0):(t.value=!0,Promise.all(j).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===y&&z(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return A===y&&z(C!==void 0,C),C===void 0},S=>(A===y&&(console.error(S),z(!0)),!1)))}function N(P){x.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&$()}const $=ye(O,0);return le(()=>{B!==void 0&&B(),$.cancel()}),Object.assign(s,{resetValidation:_,validate:O}),me(s,"hasError",()=>b.value),{isDirtyModel:c,hasRules:q,hasError:b,errorMessage:U,validate:O,resetValidation:_}}const ce=/^on[A-Z]/;function ze(e,t){const u={listeners:I({}),attributes:I({})};function s(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ce.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ce.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return xe(s),s(),u}function ae(e){return e===void 0?`f_${Be()}`:e}function oe(e){return e!=null&&(""+e).length>0}const Ne={..._e,...De,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Le=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ke(){const{props:e,attrs:t,proxy:u,vnode:s}=W();return{isDark:Ee(e,u.$q),editable:k(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:ze(t,s),targetUid:I(ae(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function Ze(e){const{props:t,emit:u,slots:s,attrs:f,proxy:d}=W(),{$q:c}=d;let y=null;e.hasValue===void 0&&(e.hasValue=k(()=>oe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:a}),Object.assign(e,{clearValue:i,onControlFocusin:r,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:q,hasError:x,errorMessage:b,resetValidation:U}=je(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),O=k(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),N=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),$=k(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&O.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=k(()=>t.labelSlot===!0||t.label!==void 0),H=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),z=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=k(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});D(()=>t.for,l=>{e.targetUid.value=ae(l)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function C(){he(S)}function E(){Oe(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function r(l){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function i(l){Ce(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{U(),c.platform.is.mobile!==!0&&(B.value=!1)})}function o(){const l=[];return s.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},s.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),x.value===!0&&t.noErrorIcon===!1&&l.push(w("error",[M(ue,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(w("inner-loading-append",s.loading!==void 0?s.loading():[M(qe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(w("inner-clearable-append",[M(ue,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),s.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},s.append())),e.getInnerAppend!==void 0&&l.push(w("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):s.rawControl!==void 0?l.push(s.rawControl()):s.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},s.control(z.value))),A.value===!0&&l.push(M("div",{class:H.value},G(s.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(G(s.default))}function v(){let l,h;x.value===!0?b.value!==null?(l=[M("div",{role:"alert"},b.value)],h=`q--slot-error-${b.value}`):(l=G(s.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=G(s.hint),h="q--slot-hint"));const K=t.counter===!0||s.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&l===void 0)return;const p=M("div",{key:h,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?p:M(Re,{name:"q-transition--field-message"},()=>p),K===!0?M("div",{class:"q-field__counter"},s.counter!==void 0?s.counter():e.computedCounter.value):null])}function w(l,h){return h===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return we(()=>{m=!0}),Me(()=>{m===!0&&t.autofocus===!0&&d.focus()}),re(()=>{Se.value===!0&&t.for===void 0&&(e.targetUid.value=ae()),t.autofocus===!0&&d.focus()}),le(()=>{y!==null&&clearTimeout(y)}),Object.assign(d,{focus:C,blur:E}),function(){const h=e.getControl===void 0&&s.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return M("label",{ref:e.rootRef,class:[$.value,f.class],style:f.style,...h},[s.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},s.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},o()),O.value===!0?v():null]),s.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},s.after()):null])}}const ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},be=Object.keys(te);be.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ue=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+be.join("")+"])|(.)","g"),ge=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),He={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Qe(e,t,u,s){let f,d,c,y,B,q;const x=I(null),b=I(_());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,r=>{if(r!==void 0)$(b.value,!0);else{const a=C(b.value);N(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&$(b.value,!0)}),D(()=>e.unmaskedValue,()=>{x.value===!0&&$(b.value)});function _(){if(N(),x.value===!0){const r=j(C(e.modelValue));return e.fillMask!==!1?E(r):r}return e.modelValue}function O(r){if(r<f.length)return f.slice(-r);let a="",i=f;const o=i.indexOf(V);if(o>-1){for(let g=r-i.length;g>0;g--)a+=V;i=i.slice(0,o)+a+i.slice(o)}return i}function N(){if(x.value=e.mask!==void 0&&e.mask.length>0&&U(),x.value===!1){y=void 0,f="",d="";return}const r=ve[e.mask]===void 0?e.mask:ve[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",i=a.replace(ge,"\\$&"),o=[],g=[],v=[];let w=e.reverseFillMask===!0,m="",l="";r.replace(Ue,(F,n,R,Z,L)=>{if(Z!==void 0){const T=te[Z];v.push(T),l=T.negate,w===!0&&(g.push("(?:"+l+"+)?("+T.pattern+"+)?(?:"+l+"+)?("+T.pattern+"+)?"),w=!1),g.push("(?:"+l+"+)?("+T.pattern+")?")}else if(R!==void 0)m="\\"+(R==="\\"?"":R),v.push(R),o.push("([^"+m+"]+)?"+m+"?");else{const T=n!==void 0?n:L;m=T==="\\"?"\\\\\\\\":T.replace(ge,"\\\\$&"),v.push(T),o.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),K=g.length-1,p=g.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+F):n===K?new RegExp("^"+F+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+F));c=v,y=F=>{const n=h.exec(e.reverseFillMask===!0?F:F.slice(0,v.length+1));n!==null&&(F=n.slice(1).join(""));const R=[],Z=p.length;for(let L=0,T=F;L<Z;L++){const Y=p[L].exec(T);if(Y===null)break;T=T.slice(Y.shift().length),R.push(...Y)}return R.length>0?R.join(""):F},f=v.map(F=>typeof F=="string"?F:V).join(""),d=f.split(V).join(a)}function $(r,a,i){const o=s.value,g=o.selectionEnd,v=o.value.length-g,w=C(r);a===!0&&N();const m=j(w),l=e.fillMask!==!1?E(m):m,h=b.value!==l;o.value!==l&&(o.value=l),h===!0&&(b.value=l),document.activeElement===o&&Q(()=>{if(l===d){const p=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(p,p,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const p=o.selectionEnd;let F=g-1;for(let n=B;n<=F&&n<p;n++)f[n]!==V&&F++;A.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const p=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,v)+1))+1:g;o.setSelectionRange(p,p,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const p=Math.max(0,l.length-(l===d?0:Math.min(m.length,v+1)));p===1&&g===1?o.setSelectionRange(p,p,"forward"):A.rightReverse(o,p)}else{const p=l.length-v;o.setSelectionRange(p,p,"backward")}else if(h===!0){const p=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);A.right(o,p)}else{const p=g-1;A.right(o,p)}});const K=e.unmaskedValue===!0?C(l):l;String(e.modelValue)!==K&&u(K,!0)}function P(r,a,i){const o=j(C(r.value));a=Math.max(0,f.indexOf(V),Math.min(o.length,a)),B=a,r.setSelectionRange(a,i,"forward")}const A={left(r,a){const i=f.slice(a-1).indexOf(V)===-1;let o=Math.max(0,a-1);for(;o>=0;o--)if(f[o]===V){a=o,i===!0&&a++;break}if(o<0&&f[a]!==void 0&&f[a]!==V)return A.right(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},right(r,a){const i=r.value.length;let o=Math.min(i,a+1);for(;o<=i;o++)if(f[o]===V){a=o;break}else f[o-1]===V&&(a=o);if(o>i&&f[a-1]!==void 0&&f[a-1]!==V)return A.left(r,i);r.setSelectionRange(a,a,"forward")},leftReverse(r,a){const i=O(r.value.length);let o=Math.max(0,a-1);for(;o>=0;o--)if(i[o-1]===V){a=o;break}else if(i[o]===V&&(a=o,o===0))break;if(o<0&&i[a]!==void 0&&i[a]!==V)return A.rightReverse(r,0);a>=0&&r.setSelectionRange(a,a,"backward")},rightReverse(r,a){const i=r.value.length,o=O(i),g=o.slice(0,a+1).indexOf(V)===-1;let v=Math.min(i,a+1);for(;v<=i;v++)if(o[v-1]===V){a=v,a>0&&g===!0&&a--;break}if(v>i&&o[a-1]!==void 0&&o[a-1]!==V)return A.leftReverse(r,i);r.setSelectionRange(a,a,"forward")}};function H(r){t("click",r),q=void 0}function z(r){if(t("keydown",r),Ae(r)===!0)return;const a=s.value,i=a.selectionStart,o=a.selectionEnd;if(r.shiftKey||(q=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&q===void 0&&(q=a.selectionDirection==="forward"?i:o);const g=A[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),g(a,q===i?o:i),r.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(q,v),Math.max(q,v),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&i===o?(A.left(a,i),a.setSelectionRange(a.selectionStart,o,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&i===o&&(A.rightReverse(a,o),a.setSelectionRange(i,a.selectionEnd,"forward"))}function j(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const a=c;let i=0,o="";for(let g=0;g<a.length;g++){const v=r[i],w=a[g];if(typeof w=="string")o+=w,v===w&&i++;else if(v!==void 0&&w.regex.test(v))o+=w.transform!==void 0?w.transform(v):v,i++;else return o}return o}function S(r){const a=c,i=f.indexOf(V);let o=r.length-1,g="";for(let v=a.length-1;v>=0&&o>-1;v--){const w=a[v];let m=r[o];if(typeof w=="string")g=w+g,m===w&&o--;else if(m!==void 0&&w.regex.test(m))do g=(w.transform!==void 0?w.transform(m):m)+g,o--,m=r[o];while(i===v&&m!==void 0&&w.regex.test(m));else return g}return g}function C(r){return typeof r!="string"||y===void 0?typeof r=="number"?y(""+r):r:y(r)}function E(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length>0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:b,hasMask:x,moveCursorForPaste:P,updateMaskValue:$,onMaskedKeydown:z,onMaskedClick:H}}function Ye(e,t){function u(){const s=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(s)===s&&("length"in s?Array.from(s):[s]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return u()}):k(u)}const Je=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,We=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ge=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Xe=/[a-z0-9_ -]$/i;function et(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ve.is.firefox===!0?Xe.test(u.data)===!1:Je.test(u.data)===!0||We.test(u.data)===!0||Ge.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var rt=Fe({name:"QInput",inheritAttrs:!1,props:{...Ne,...He,...Te,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Le,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:s}=W(),{$q:f}=s,d={};let c=NaN,y,B,q=null,x;const b=I(null),U=$e(e),{innerValue:_,hasMask:O,moveCursorForPaste:N,updateMaskValue:$,onMaskedKeydown:P,onMaskedClick:A}=Qe(e,t,m,b),H=Ye(e,!0),z=k(()=>oe(_.value)),j=et(v),S=Ke(),C=k(()=>e.type==="textarea"||e.autogrow===!0),E=k(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),r=k(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:K,onFocus:ie};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=j,O.value===!0&&(n.onKeydown=P,n.onClick=A),e.autogrow===!0&&(n.onAnimationend=w),n}),a=k(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(O.value===!0){if(B===!0&&(B=!1,String(n)===c))return;$(n)}else _.value!==n&&(_.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete d.value));e.autogrow===!0&&Q(l)}),D(()=>e.autogrow,n=>{n===!0?Q(l):b.value!==null&&u.rows>0&&(b.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Q(l)});function i(){he(()=>{const n=document.activeElement;b.value!==null&&b.value!==n&&(n===null||n.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function g(n){if(O.value===!0&&e.reverseFillMask!==!0){const R=n.target;N(R,R.selectionStart,R.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const R=n.target.value;if(n.target.qComposing===!0){d.value=R;return}if(O.value===!0)$(R,!1,n.inputType);else if(m(R),E.value===!0&&n.target===document.activeElement){const{selectionStart:Z,selectionEnd:L}=n.target;Z!==void 0&&L!==void 0&&Q(()=>{n.target===document.activeElement&&R.indexOf(n.target.value)===0&&n.target.setSelectionRange(Z,L)})}e.autogrow===!0&&l()}function w(n){t("animationend",n),l()}function m(n,R){x=()=>{q=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,R===!0&&(B=!0),t("update:modelValue",n),Q(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(y=!0,d.value=n),e.debounce!==void 0?(q!==null&&clearTimeout(q),d.value=n,q=setTimeout(x,e.debounce)):x()}function l(){requestAnimationFrame(()=>{const n=b.value;if(n!==null){const R=n.parentNode.style,{scrollTop:Z}=n,{overflowY:L,maxHeight:T}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),Y=L!==void 0&&L!=="scroll";Y===!0&&(n.style.overflowY="hidden"),R.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",Y===!0&&(n.style.overflowY=parseInt(T,10)<n.scrollHeight?"auto":"hidden"),R.marginBottom="",n.scrollTop=Z}})}function h(n){j(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),t("change",n.target.value)}function K(n){n!==void 0&&ie(n),q!==null&&(clearTimeout(q),q=null),x!==void 0&&x(),y=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=_.value!==void 0?_.value:"")})}function p(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}le(()=>{K()}),re(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:_,fieldClass:k(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:b,emitValue:m,hasValue:z,floatingLabel:k(()=>z.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||oe(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...r.value,...e.type!=="file"?{value:p()}:H.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},p()),M("span",e.shadowText)])});const F=Ze(S);return Object.assign(s,{focus:i,select:o,getNativeElement:()=>b.value}),me(s,"nativeEl",()=>b.value),F}});export{rt as Q,Le as a,Ze as b,Ke as c,et as d,oe as f,Ne as u};