import{i as ke,bA as ye,g as K,w as T,as as X,bG as pe,bz as fe,bH as xe,c as b,h as k,bI as Ce,bJ as we,r as P,bK as Se,bL as Me,at as qe,bC as Re,ap as U,au as _e,aq as Ve,o as ve,bM as Ae,bN as H,bE as ae,bO as Fe,bB as Q,b7 as Be,bP as Ee,bQ as $e,bR as re}from"./index.5fcf0ea0.js";import{u as Oe,a as Pe}from"./use-dark.29ba5a53.js";import{u as Te}from"./QSeparator.fbfc679f.js";import{a as me,r as ze}from"./focus-manager.387b0375.js";import{u as Ie,a as je}from"./use-form.2524c60e.js";function Ne({validate:e,resetValidation:t,requiresQForm:u}){const n=ke(ye,!1);if(n!==!1){const{props:f,proxy:h}=K();Object.assign(h,{validate:e,resetValidation:t}),T(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),n.unbindComponent(h)):n.bindComponent(h)}),f.disable!==!0&&n.bindComponent(h),X(()=>{f.disable!==!0&&n.unbindComponent(h)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const oe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ne=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ue=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,W=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,J=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ie={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>oe.test(e),hexaColor:e=>ne.test(e),hexOrHexaColor:e=>ue.test(e),rgbColor:e=>W.test(e),rgbaColor:e=>J.test(e),rgbOrRgbaColor:e=>W.test(e)||J.test(e),hexOrRgbColor:e=>oe.test(e)||W.test(e),hexaOrRgbaColor:e=>ne.test(e)||J.test(e),anyColor:e=>ue.test(e)||W.test(e)||J.test(e)},De={...pe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ee=50,ge=2*ee,he=ge*Math.PI,Le=Math.round(he*1e3)/1e3;fe({name:"QCircularProgress",props:{...De,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=K(),n=xe(e),f=b(()=>{const M=(u.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),h=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=b(()=>ge/(1-e.thickness/2)),S=b(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=b(()=>we(e.value,e.min,e.max)),y=b(()=>he*(1-(p.value-e.min)/(e.max-e.min))),A=b(()=>e.thickness/2*v.value);function R({thickness:M,offset:F,color:B,cls:N}){return k("circle",{class:"q-circular-progress__"+N+(B!==void 0?` text-${B}`:""),style:h.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":Le,"stroke-dashoffset":F,cx:v.value,cy:v.value,r:ee})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(k("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ee-A.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(R({cls:"track",thickness:A.value,offset:0,color:e.trackColor})),M.push(R({cls:"circle",thickness:A.value,offset:y.value,color:e.color}));const F=[k("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&F.push(k("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[k("div",p.value)])),k("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:n.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Ce(t.internal,F))}}});const Ze=["rejected"],Ue=[...Ze,"start","finish","added","removed"],Ke=()=>!0;function He(e){const t={};return e.forEach(u=>{t[u]=Ke}),t}He(Ue);const Qe=[!0,!1,"ondemand"],We={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Qe.includes(e)}};function Je(e,t){const{props:u,proxy:n}=K(),f=P(!1),h=P(null),v=P(null);Ne({validate:B,resetValidation:F});let S=0,p;const y=b(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),A=b(()=>u.disable!==!0&&y.value===!0),R=b(()=>u.error===!0||f.value===!0),M=b(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:h.value);T(()=>u.modelValue,()=>{N()}),T(()=>u.reactiveRules,O=>{O===!0?p===void 0&&(p=T(()=>u.rules,()=>{N(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),T(e,O=>{O===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,A.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&_())});function F(){S++,t.value=!1,v.value=null,f.value=!1,h.value=null,_.cancel()}function B(O=u.modelValue){if(A.value!==!0)return!0;const z=++S;t.value!==!0&&u.lazyRules!==!0&&(v.value=!0);const $=(q,a)=>{f.value!==q&&(f.value=q);const o=a||void 0;h.value!==o&&(h.value=o),t.value=!1},E=[];for(let q=0;q<u.rules.length;q++){const a=u.rules[q];let o;if(typeof a=="function"?o=a(O):typeof a=="string"&&ie[a]!==void 0&&(o=ie[a](O)),o===!1||typeof o=="string")return $(!0,o),!1;o!==!0&&o!==void 0&&E.push(o)}return E.length===0?($(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return z===S&&$(!1),!0;const a=q.find(o=>o===!1||typeof o=="string");return z===S&&$(a!==void 0,a),a===void 0},q=>(z===S&&(console.error(q),$(!0)),!1)))}function N(O){A.value===!0&&u.lazyRules!=="ondemand"&&(v.value===!0||u.lazyRules!==!0&&O!==!0)&&_()}const _=Se(B,0);return X(()=>{p!==void 0&&p(),_.cancel()}),Object.assign(n,{resetValidation:F,validate:B}),Me(n,"hasError",()=>R.value),{isDirtyModel:v,hasRules:y,hasError:R,errorMessage:M,validate:B,resetValidation:F}}const se=/^on[A-Z]/;function Ge(e,t){const u={listeners:P({}),attributes:P({})};function n(){const f={},h={};for(const v in e)v!=="class"&&v!=="style"&&se.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)se.test(v)===!0&&(h[v]=t.props[v]);u.attributes.value=f,u.listeners.value=h}return qe(n),n(),u}function te(e){return e===void 0?`f_${Te()}`:e}function le(e){return e!=null&&(""+e).length>0}const Xe={...Oe,...We,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ye=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function et(){const{props:e,attrs:t,proxy:u,vnode:n}=K();return{isDark:Pe(e,u.$q),editable:b(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:P(!1),focused:P(!1),hasPopupOpen:!1,splitAttrs:Ge(t,n),targetUid:P(te(e.for)),rootRef:P(null),targetRef:P(null),controlRef:P(null)}}function tt(e){const{props:t,emit:u,slots:n,attrs:f,proxy:h}=K(),{$q:v}=h;let S;e.hasValue===void 0&&(e.hasValue=b(()=>le(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:o}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:p,hasRules:y,hasError:A,errorMessage:R,resetValidation:M}=Je(e.focused,e.innerLoading),F=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=b(()=>t.bottomSlots===!0||t.hint!==void 0||y.value===!0||t.counter===!0||t.error!==null),N=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),_=b(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(F.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(A.value===!0?" q-field--error":"")+(A.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(A.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=b(()=>t.labelSlot===!0||t.label!==void 0),$=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&A.value!==!0?` text-${t.labelColor}`:"")),E=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:F.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=b(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});T(()=>t.for,l=>{e.targetUid.value=te(l)});function a(){const l=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(l===null||l.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==l&&m.focus({preventScroll:!0}))}function o(){me(a)}function c(){ze(a);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function s(l){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function d(l,m){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),m!==void 0&&m())})}function i(l){Re(l),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),U(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const l=[];return n.prepend!==void 0&&l.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:H},n.prepend())),l.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),A.value===!0&&t.noErrorIcon===!1&&l.push(I("error",[k(ae,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(I("inner-loading-append",n.loading!==void 0?n.loading():[k(Fe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(I("inner-clearable-append",[k(ae,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),n.append!==void 0&&l.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:H},n.append())),e.getInnerAppend!==void 0&&l.push(I("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):n.rawControl!==void 0?l.push(n.rawControl()):n.control!==void 0&&l.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(E.value))),z.value===!0&&l.push(k("div",{class:$.value},Q(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(Q(n.default))}function w(){let l,m;A.value===!0?R.value!==null?(l=[k("div",{role:"alert"},R.value)],m=`q--slot-error-${R.value}`):(l=Q(n.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[k("div",t.hint)],m=`q--slot-hint-${t.hint}`):(l=Q(n.hint),m="q--slot-hint"));const r=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&r===!1&&l===void 0)return;const C=k("div",{key:m,class:"q-field__messages col"},l);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?C:k(Be,{name:"q-transition--field-message"},()=>C),r===!0?k("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function I(l,m){return m===null?null:k("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}Object.assign(h,{focus:o,blur:c});let D=!1;return _e(()=>{D=!0}),Ve(()=>{D===!0&&t.autofocus===!0&&h.focus()}),ve(()=>{Ae.value===!0&&t.for===void 0&&(e.targetUid.value=te()),t.autofocus===!0&&h.focus()}),X(()=>{clearTimeout(S)}),function(){const m=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return k("label",{ref:e.rootRef,class:[_.value,f.class],style:f.style,...m},[n.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:H},n.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:O.value,tabindex:-1,...e.controlEvents},x()),B.value===!0?w():null]),n.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:H},n.after()):null])}}const de={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},be=Object.keys(G);be.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const lt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+be.join("")+"])|(.)","g"),ce=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),at={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function rt(e,t,u,n){let f,h,v,S;const p=P(null),y=P(R());function A(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}T(()=>e.type+e.autogrow,F),T(()=>e.mask,a=>{if(a!==void 0)B(y.value,!0);else{const o=E(y.value);F(),e.modelValue!==o&&t("update:modelValue",o)}}),T(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(y.value,!0)}),T(()=>e.unmaskedValue,()=>{p.value===!0&&B(y.value)});function R(){if(F(),p.value===!0){const a=z(E(e.modelValue));return e.fillMask!==!1?q(a):a}return e.modelValue}function M(a){if(a<f.length)return f.slice(-a);let o="",c=f;const s=c.indexOf(V);if(s>-1){for(let d=a-c.length;d>0;d--)o+=V;c=c.slice(0,s)+o+c.slice(s)}return c}function F(){if(p.value=e.mask!==void 0&&e.mask.length>0&&A(),p.value===!1){S=void 0,f="",h="";return}const a=de[e.mask]===void 0?e.mask:de[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=o.replace(ce,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,g="",w="";a.replace(lt,(m,r,C,L,Z)=>{if(L!==void 0){const j=G[L];i.push(j),w=j.negate,x===!0&&(d.push("(?:"+w+"+)?("+j.pattern+"+)?(?:"+w+"+)?("+j.pattern+"+)?"),x=!1),d.push("(?:"+w+"+)?("+j.pattern+")?")}else if(C!==void 0)g="\\"+(C==="\\"?"":C),i.push(C),s.push("([^"+g+"]+)?"+g+"?");else{const j=r!==void 0?r:Z;g=j==="\\"?"\\\\\\\\":j.replace(ce,"\\\\$&"),i.push(j),s.push("([^"+g+"]+)?"+g+"?")}});const I=new RegExp("^"+s.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?$"),D=d.length-1,l=d.map((m,r)=>r===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+m):r===D?new RegExp("^"+m+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+m));v=i,S=m=>{const r=I.exec(m);r!==null&&(m=r.slice(1).join(""));const C=[],L=l.length;for(let Z=0,j=m;Z<L;Z++){const Y=l[Z].exec(j);if(Y===null)break;j=j.slice(Y.shift().length),C.push(...Y)}return C.length>0?C.join(""):m},f=i.map(m=>typeof m=="string"?m:V).join(""),h=f.split(V).join(o)}function B(a,o,c){const s=n.value,d=s.selectionEnd,i=s.value.length-d,x=E(a);o===!0&&F();const g=z(x),w=e.fillMask!==!1?q(g):g,I=y.value!==w;s.value!==w&&(s.value=w),I===!0&&(y.value=w),document.activeElement===s&&U(()=>{if(w===h){const l=e.reverseFillMask===!0?h.length:0;s.setSelectionRange(l,l,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const l=d-1;_.right(s,l,l);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const l=e.reverseFillMask===!0?d===0?w.length>g.length?1:0:Math.max(0,w.length-(w===h?0:Math.min(g.length,i)+1))+1:d;s.setSelectionRange(l,l,"forward");return}if(e.reverseFillMask===!0)if(I===!0){const l=Math.max(0,w.length-(w===h?0:Math.min(g.length,i+1)));l===1&&d===1?s.setSelectionRange(l,l,"forward"):_.rightReverse(s,l,l)}else{const l=w.length-i;s.setSelectionRange(l,l,"backward")}else if(I===!0){const l=Math.max(0,f.indexOf(V),Math.min(g.length,d)-1);_.right(s,l,l)}else{const l=d-1;_.right(s,l,l)}});const D=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==D&&u(D,!0)}function N(a,o,c){const s=z(E(a.value));o=Math.max(0,f.indexOf(V),Math.min(s.length,o)),a.setSelectionRange(o,c,"forward")}const _={left(a,o,c,s){const d=f.slice(o-1).indexOf(V)===-1;let i=Math.max(0,o-1);for(;i>=0;i--)if(f[i]===V){o=i,d===!0&&o++;break}if(i<0&&f[o]!==void 0&&f[o]!==V)return _.right(a,0,0);o>=0&&a.setSelectionRange(o,s===!0?c:o,"backward")},right(a,o,c,s){const d=a.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===V){c=i;break}else f[i-1]===V&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==V)return _.left(a,d,d);a.setSelectionRange(s?o:c,c,"forward")},leftReverse(a,o,c,s){const d=M(a.value.length);let i=Math.max(0,o-1);for(;i>=0;i--)if(d[i-1]===V){o=i;break}else if(d[i]===V&&(o=i,i===0))break;if(i<0&&d[o]!==void 0&&d[o]!==V)return _.rightReverse(a,0,0);o>=0&&a.setSelectionRange(o,s===!0?c:o,"backward")},rightReverse(a,o,c,s){const d=a.value.length,i=M(d),x=i.slice(0,c+1).indexOf(V)===-1;let g=Math.min(d,c+1);for(;g<=d;g++)if(i[g-1]===V){c=g,c>0&&x===!0&&c--;break}if(g>d&&i[c-1]!==void 0&&i[c-1]!==V)return _.leftReverse(a,d,d);a.setSelectionRange(s===!0?o:c,c,"forward")}};function O(a){if(Ee(a)===!0)return;const o=n.value,c=o.selectionStart,s=o.selectionEnd;if(a.keyCode===37||a.keyCode===39){const d=_[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),d(o,c,s,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&c===s?_.left(o,c,s,!0):a.keyCode===46&&e.reverseFillMask===!0&&c===s&&_.rightReverse(o,c,s,!0)}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return $(a);const o=v;let c=0,s="";for(let d=0;d<o.length;d++){const i=a[c],x=o[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function $(a){const o=v,c=f.indexOf(V);let s=a.length-1,d="";for(let i=o.length-1;i>=0&&s>-1;i--){const x=o[i];let g=a[s];if(typeof x=="string")d=x+d,g===x&&s--;else if(g!==void 0&&x.regex.test(g))do d=(x.transform!==void 0?x.transform(g):g)+d,s--,g=a[s];while(c===i&&g!==void 0&&x.regex.test(g));else return d}return d}function E(a){return typeof a!="string"||S===void 0?typeof a=="number"?S(""+a):a:S(a)}function q(a){return h.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?h.slice(0,-a.length)+a:a+h.slice(a.length)}return{innerValue:y,hasMask:p,moveCursorForPaste:N,updateMaskValue:B,onMaskedKeydown:O}}function ot(e,t){function u(){const n=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(h=>{f.items.add(h)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return u()}):b(u)}const nt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ut=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,it=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,st=/[a-z0-9_ -]$/i;function dt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&($e.is.firefox===!0?st.test(u.data)===!1:nt.test(u.data)===!0||ut.test(u.data)===!0||it.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ht=fe({name:"QInput",inheritAttrs:!1,props:{...Xe,...at,...Ie,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ye,"paste","change"],setup(e,{emit:t,attrs:u}){const n={};let f=NaN,h,v,S,p;const y=P(null),A=je(e),{innerValue:R,hasMask:M,moveCursorForPaste:F,updateMaskValue:B,onMaskedKeydown:N}=rt(e,t,x,y),_=ot(e,!0),O=b(()=>le(R.value)),z=dt(i),$=et(),E=b(()=>e.type==="textarea"||e.autogrow===!0),q=b(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),a=b(()=>{const r={...$.splitAttrs.listeners.value,onInput:i,onPaste:d,onChange:w,onBlur:I,onFocus:re};return r.onCompositionstart=r.onCompositionupdate=r.onCompositionend=z,M.value===!0&&(r.onKeydown=N),e.autogrow===!0&&(r.onAnimationend=g),r}),o=b(()=>{const r={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:A.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(r.type=e.type),e.autogrow===!0&&(r.rows=1),r});T(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),T(()=>e.modelValue,r=>{if(M.value===!0){if(v===!0&&(v=!1,String(r)===f))return;B(r)}else R.value!==r&&(R.value=r,e.type==="number"&&n.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete n.value));e.autogrow===!0&&U(g)}),T(()=>e.autogrow,r=>{r===!0?U(g):y.value!==null&&u.rows>0&&(y.value.style.height="auto")}),T(()=>e.dense,()=>{e.autogrow===!0&&U(g)});function c(){me(()=>{const r=document.activeElement;y.value!==null&&y.value!==r&&(r===null||r.id!==$.targetUid.value)&&y.value.focus({preventScroll:!0})})}function s(){y.value!==null&&y.value.select()}function d(r){if(M.value===!0&&e.reverseFillMask!==!0){const C=r.target;F(C,C.selectionStart,C.selectionEnd)}t("paste",r)}function i(r){if(!r||!r.target)return;if(e.type==="file"){t("update:modelValue",r.target.files);return}const C=r.target.value;if(r.target.qComposing===!0){n.value=C;return}if(M.value===!0)B(C,!1,r.inputType);else if(x(C),q.value===!0&&r.target===document.activeElement){const{selectionStart:L,selectionEnd:Z}=r.target;L!==void 0&&Z!==void 0&&U(()=>{r.target===document.activeElement&&C.indexOf(r.target.value)===0&&r.target.setSelectionRange(L,Z)})}e.autogrow===!0&&g()}function x(r,C){p=()=>{e.type!=="number"&&n.hasOwnProperty("value")===!0&&delete n.value,e.modelValue!==r&&f!==r&&(f=r,C===!0&&(v=!0),t("update:modelValue",r),U(()=>{f===r&&(f=NaN)})),p=void 0},e.type==="number"&&(h=!0,n.value=r),e.debounce!==void 0?(clearTimeout(S),n.value=r,S=setTimeout(p,e.debounce)):p()}function g(){const r=y.value;if(r!==null){const C=r.parentNode.style,{overflow:L}=r.style;C.marginBottom=r.scrollHeight-1+"px",r.style.height="1px",r.style.overflow="hidden",r.style.height=r.scrollHeight+"px",r.style.overflow=L,C.marginBottom=""}}function w(r){z(r),clearTimeout(S),p!==void 0&&p(),t("change",r.target.value)}function I(r){r!==void 0&&re(r),clearTimeout(S),p!==void 0&&p(),h=!1,v=!1,delete n.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=R.value!==void 0?R.value:"")})}function D(){return n.hasOwnProperty("value")===!0?n.value:R.value!==void 0?R.value:""}X(()=>{I()}),ve(()=>{e.autogrow===!0&&g()}),Object.assign($,{innerValue:R,fieldClass:b(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:y,emitValue:x,hasValue:O,floatingLabel:b(()=>O.value===!0||le(e.displayValue)),getControl:()=>k(E.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:D()}:_.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},D()),k("span",e.shadowText)])});const l=tt($),m=K();return Object.assign(m.proxy,{focus:c,select:s,getNativeElement:()=>y.value}),l}});export{ht as Q,Ye as a,tt as b,et as c,dt as d,le as f,Xe as u};
