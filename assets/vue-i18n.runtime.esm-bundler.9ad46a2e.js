import{h as nt,e as Kt,i as Xt,o as Yt,a as zt,r as ne,c as ae,w as ge,F as Jt,g as at,d as Qt,f as qt,T as Zt}from"./index.1847bb47.js";/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const de=typeof window!="undefined",en=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",K=e=>en?Symbol(e):e,se=e=>typeof e=="number"&&isFinite(e),ke=e=>rt(e)==="[object RegExp]",tn=e=>x(e)&&Object.keys(e).length===0,G=Object.assign,nn=Object.prototype.hasOwnProperty;function Le(e,t){return nn.call(e,t)}const $=Array.isArray,ce=e=>typeof e=="function",A=e=>typeof e=="string",B=e=>typeof e=="boolean",U=e=>e!==null&&typeof e=="object",an=Object.prototype.toString,rt=e=>an.call(e),x=e=>rt(e)==="[object Object]";/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const rn=(e,t,n)=>ln({l:e,k:t,s:n}),ln=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),v=e=>typeof e=="number"&&isFinite(e),sn=e=>Fe(e)==="[object Date]",ve=e=>Fe(e)==="[object RegExp]",ye=e=>y(e)&&Object.keys(e).length===0;function on(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const ue=Object.assign;function Pe(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const H=Array.isArray,k=e=>typeof e=="function",b=e=>typeof e=="string",P=e=>typeof e=="boolean",S=e=>e!==null&&typeof e=="object",lt=Object.prototype.toString,Fe=e=>lt.call(e),y=e=>Fe(e)==="[object Object]",cn=e=>e==null?"":H(e)||y(e)&&e.toString===lt?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const st={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function ot(e,t,n={}){const{domain:a,messages:r,args:s}=n,l=e,i=new SyntaxError(String(l));return i.code=e,t&&(i.location=t),i.domain=a,i}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const un={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const X=[];X[0]={w:[0],i:[3,0],["["]:[4],o:[7]};X[1]={w:[1],["."]:[2],["["]:[4],o:[7]};X[2]={w:[2],i:[3,0],[0]:[3,0]};X[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};X[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};X[5]={["'"]:[4,0],o:8,l:[5,0]};X[6]={['"']:[4,0],o:8,l:[6,0]};const mn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function fn(e){return mn.test(e)}function _n(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function gn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function dn(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:fn(t)?_n(t):"*"+t}function En(e){const t=[];let n=-1,a=0,r=0,s,l,i,c,m,g,d;const _=[];_[0]=()=>{l===void 0?l=i:l+=i},_[1]=()=>{l!==void 0&&(t.push(l),l=void 0)},_[2]=()=>{_[0](),r++},_[3]=()=>{if(r>0)r--,a=4,_[0]();else{if(r=0,l===void 0||(l=dn(l),l===!1))return!1;_[1]()}};function E(){const T=e[n+1];if(a===5&&T==="'"||a===6&&T==='"')return n++,i="\\"+T,_[0](),!0}for(;a!==null;)if(n++,s=e[n],!(s==="\\"&&E())){if(c=gn(s),d=X[a],m=d[c]||d.l||8,m===8||(a=m[0],m[1]!==void 0&&(g=_[m[1]],g&&(i=s,g()===!1))))return;if(a===7)return t}}const we=new Map;function bn(e,t){return S(e)?e[t]:null}function Nn(e,t){if(!S(e))return null;let n=we.get(t);if(n||(n=En(t),n&&we.set(t,n)),!n)return null;const a=n.length;let r=e,s=0;for(;s<a;){const l=r[n[s]];if(l===void 0)return null;r=l,s++}return r}const Tn=e=>e,In=e=>"",On="text",pn=e=>e.length===0?"":e.join(""),Ln=cn;function We(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function yn(e){const t=v(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(v(e.named.count)||v(e.named.n))?v(e.named.count)?e.named.count:v(e.named.n)?e.named.n:t:t}function Fn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function An(e={}){const t=e.locale,n=yn(e),a=S(e.pluralRules)&&b(t)&&k(e.pluralRules[t])?e.pluralRules[t]:We,r=S(e.pluralRules)&&b(t)&&k(e.pluralRules[t])?We:void 0,s=N=>N[a(n,N.length,r)],l=e.list||[],i=N=>l[N],c=e.named||{};v(e.pluralIndex)&&Fn(n,c);const m=N=>c[N];function g(N){const p=k(e.messages)?e.messages(N):S(e.messages)?e.messages[N]:!1;return p||(e.parent?e.parent.message(N):In)}const d=N=>e.modifiers?e.modifiers[N]:Tn,_=y(e.processor)&&k(e.processor.normalize)?e.processor.normalize:pn,E=y(e.processor)&&k(e.processor.interpolate)?e.processor.interpolate:Ln,T=y(e.processor)&&b(e.processor.type)?e.processor.type:On,L={list:i,named:m,plural:s,linked:(N,...p)=>{const[h,I]=p;let f="text",F="";p.length===1?S(h)?(F=h.modifier||F,f=h.type||f):b(h)&&(F=h||F):p.length===2&&(b(h)&&(F=h||F),b(I)&&(f=I||f));let R=g(N)(L);return f==="vnode"&&H(R)&&F&&(R=R[0]),F?d(F)(R,f):R},message:g,type:T,interpolate:E,normalize:_};return L}let hn=null;un.FunctionTranslate;function Cn(e){return t=>hn}const Rn={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Dn(e,t,n){return[...new Set([n,...H(t)?t:S(t)?Object.keys(t):b(t)?[t]:[n]])]}function ct(e,t,n){const a=b(n)?n:Ae,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(a);if(!s){s=[];let l=[n];for(;H(l);)l=Ue(s,l,t);const i=H(t)||!y(t)?t:t.default?t.default:null;l=b(i)?[i]:i,H(l)&&Ue(s,l,!1),r.__localeChainCache.set(a,s)}return s}function Ue(e,t,n){let a=!0;for(let r=0;r<t.length&&P(a);r++){const s=t[r];b(s)&&(a=Sn(e,t[r],n))}return a}function Sn(e,t,n){let a;const r=t.split("-");do{const s=r.join("-");a=Mn(e,s,n),r.splice(-1,1)}while(r.length&&a===!0);return a}function Mn(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(H(n)||y(n))&&n[r]&&(a=n[r])}return a}const kn="9.2.2",me=-1,Ae="en-US",Ve="",je=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function vn(){return{upper:(e,t)=>t==="text"&&b(e)?e.toUpperCase():t==="vnode"&&S(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&b(e)?e.toLowerCase():t==="vnode"&&S(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&b(e)?je(e):t==="vnode"&&S(e)&&"__v_isVNode"in e?je(e.children):e}}let Pn,it;function wn(e){it=e}let ut;function Wn(e){ut=e}let xe=0;function Un(e={}){const t=b(e.version)?e.version:kn,n=b(e.locale)?e.locale:Ae,a=H(e.fallbackLocale)||y(e.fallbackLocale)||b(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=y(e.messages)?e.messages:{[n]:{}},s=y(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},l=y(e.numberFormats)?e.numberFormats:{[n]:{}},i=ue({},e.modifiers||{},vn()),c=e.pluralRules||{},m=k(e.missing)?e.missing:null,g=P(e.missingWarn)||ve(e.missingWarn)?e.missingWarn:!0,d=P(e.fallbackWarn)||ve(e.fallbackWarn)?e.fallbackWarn:!0,_=!!e.fallbackFormat,E=!!e.unresolving,T=k(e.postTranslation)?e.postTranslation:null,O=y(e.processor)?e.processor:null,L=P(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter,p=k(e.messageCompiler)?e.messageCompiler:Pn,h=k(e.messageResolver)?e.messageResolver:it||bn,I=k(e.localeFallbacker)?e.localeFallbacker:ut||Dn,f=S(e.fallbackContext)?e.fallbackContext:void 0,F=k(e.onWarn)?e.onWarn:on,R=e,q=S(R.__datetimeFormatters)?R.__datetimeFormatters:new Map,Z=S(R.__numberFormatters)?R.__numberFormatters:new Map,ee=S(R.__meta)?R.__meta:{};xe++;const V={version:t,cid:xe,locale:n,fallbackLocale:a,messages:r,modifiers:i,pluralRules:c,missing:m,missingWarn:g,fallbackWarn:d,fallbackFormat:_,unresolving:E,postTranslation:T,processor:O,warnHtmlMessage:L,escapeParameter:N,messageCompiler:p,messageResolver:h,localeFallbacker:I,fallbackContext:f,onWarn:F,__meta:ee};return V.datetimeFormats=s,V.numberFormats=l,V.__datetimeFormatters=q,V.__numberFormatters=Z,V}function he(e,t,n,a,r){const{missing:s,onWarn:l}=e;if(s!==null){const i=s(e,n,t,r);return b(i)?i:t}else return t}function re(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let mt=st.__EXTEND_POINT__;const _e=()=>++mt,J={INVALID_ARGUMENT:mt,INVALID_DATE_ARGUMENT:_e(),INVALID_ISO_DATE_ARGUMENT:_e(),__EXTEND_POINT__:_e()};function Q(e){return ot(e,null,void 0)}const $e=()=>"",Y=e=>k(e);function Ge(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:r,messageCompiler:s,fallbackLocale:l,messages:i}=e,[c,m]=Ee(...t),g=P(m.missingWarn)?m.missingWarn:e.missingWarn,d=P(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,_=P(m.escapeParameter)?m.escapeParameter:e.escapeParameter,E=!!m.resolvedMessage,T=b(m.default)||P(m.default)?P(m.default)?s?c:()=>c:m.default:n?s?c:()=>c:"",O=n||T!=="",L=b(m.locale)?m.locale:e.locale;_&&Vn(m);let[N,p,h]=E?[c,L,i[L]||{}]:ft(e,c,L,l,d,g),I=N,f=c;if(!E&&!(b(I)||Y(I))&&O&&(I=T,f=I),!E&&(!(b(I)||Y(I))||!b(p)))return r?me:c;let F=!1;const R=()=>{F=!0},q=Y(I)?I:_t(e,c,p,I,f,R);if(F)return I;const Z=$n(e,p,h,m),ee=An(Z),V=jn(e,q,ee);return a?a(V,c):V}function Vn(e){H(e.list)?e.list=e.list.map(t=>b(t)?Pe(t):t):S(e.named)&&Object.keys(e.named).forEach(t=>{b(e.named[t])&&(e.named[t]=Pe(e.named[t]))})}function ft(e,t,n,a,r,s){const{messages:l,onWarn:i,messageResolver:c,localeFallbacker:m}=e,g=m(e,a,n);let d={},_,E=null;const T="translate";for(let O=0;O<g.length&&(_=g[O],d=l[_]||{},(E=c(d,t))===null&&(E=d[t]),!(b(E)||k(E)));O++){const L=he(e,t,_,s,T);L!==t&&(E=L)}return[E,_,d]}function _t(e,t,n,a,r,s){const{messageCompiler:l,warnHtmlMessage:i}=e;if(Y(a)){const m=a;return m.locale=m.locale||n,m.key=m.key||t,m}if(l==null){const m=()=>a;return m.locale=n,m.key=t,m}const c=l(a,xn(e,n,r,a,i,s));return c.locale=n,c.key=t,c.source=a,c}function jn(e,t,n){return t(n)}function Ee(...e){const[t,n,a]=e,r={};if(!b(t)&&!v(t)&&!Y(t))throw Q(J.INVALID_ARGUMENT);const s=v(t)?String(t):(Y(t),t);return v(n)?r.plural=n:b(n)?r.default=n:y(n)&&!ye(n)?r.named=n:H(n)&&(r.list=n),v(a)?r.plural=a:b(a)?r.default=a:y(a)&&ue(r,a),[s,r]}function xn(e,t,n,a,r,s){return{warnHtmlMessage:r,onError:l=>{throw s&&s(l),l},onCacheKey:l=>rn(t,n,l)}}function $n(e,t,n,a){const{modifiers:r,pluralRules:s,messageResolver:l,fallbackLocale:i,fallbackWarn:c,missingWarn:m,fallbackContext:g}=e,_={locale:t,modifiers:r,pluralRules:s,messages:E=>{let T=l(n,E);if(T==null&&g){const[,,O]=ft(g,E,t,i,c,m);T=l(O,E)}if(b(T)){let O=!1;const N=_t(e,E,t,T,E,()=>{O=!0});return O?$e:N}else return Y(T)?T:$e}};return e.processor&&(_.processor=e.processor),a.list&&(_.list=a.list),a.named&&(_.named=a.named),v(a.plural)&&(_.pluralIndex=a.plural),_}function He(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__datetimeFormatters:i}=e,[c,m,g,d]=be(...t),_=P(g.missingWarn)?g.missingWarn:e.missingWarn;P(g.fallbackWarn)?g.fallbackWarn:e.fallbackWarn;const E=!!g.part,T=b(g.locale)?g.locale:e.locale,O=l(e,r,T);if(!b(c)||c==="")return new Intl.DateTimeFormat(T,d).format(m);let L={},N,p=null;const h="datetime format";for(let F=0;F<O.length&&(N=O[F],L=n[N]||{},p=L[c],!y(p));F++)he(e,c,N,_,h);if(!y(p)||!b(N))return a?me:c;let I=`${N}__${c}`;ye(d)||(I=`${I}__${JSON.stringify(d)}`);let f=i.get(I);return f||(f=new Intl.DateTimeFormat(N,ue({},p,d)),i.set(I,f)),E?f.formatToParts(m):f.format(m)}const gt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function be(...e){const[t,n,a,r]=e,s={};let l={},i;if(b(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw Q(J.INVALID_ISO_DATE_ARGUMENT);const m=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();i=new Date(m);try{i.toISOString()}catch{throw Q(J.INVALID_ISO_DATE_ARGUMENT)}}else if(sn(t)){if(isNaN(t.getTime()))throw Q(J.INVALID_DATE_ARGUMENT);i=t}else if(v(t))i=t;else throw Q(J.INVALID_ARGUMENT);return b(n)?s.key=n:y(n)&&Object.keys(n).forEach(c=>{gt.includes(c)?l[c]=n[c]:s[c]=n[c]}),b(a)?s.locale=a:y(a)&&(l=a),y(r)&&(l=r),[s.key||"",i,s,l]}function Be(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__datetimeFormatters.has(s)||a.__datetimeFormatters.delete(s)}}function Ke(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__numberFormatters:i}=e,[c,m,g,d]=Ne(...t),_=P(g.missingWarn)?g.missingWarn:e.missingWarn;P(g.fallbackWarn)?g.fallbackWarn:e.fallbackWarn;const E=!!g.part,T=b(g.locale)?g.locale:e.locale,O=l(e,r,T);if(!b(c)||c==="")return new Intl.NumberFormat(T,d).format(m);let L={},N,p=null;const h="number format";for(let F=0;F<O.length&&(N=O[F],L=n[N]||{},p=L[c],!y(p));F++)he(e,c,N,_,h);if(!y(p)||!b(N))return a?me:c;let I=`${N}__${c}`;ye(d)||(I=`${I}__${JSON.stringify(d)}`);let f=i.get(I);return f||(f=new Intl.NumberFormat(N,ue({},p,d)),i.set(I,f)),E?f.formatToParts(m):f.format(m)}const dt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ne(...e){const[t,n,a,r]=e,s={};let l={};if(!v(t))throw Q(J.INVALID_ARGUMENT);const i=t;return b(n)?s.key=n:y(n)&&Object.keys(n).forEach(c=>{dt.includes(c)?l[c]=n[c]:s[c]=n[c]}),b(a)?s.locale=a:y(a)&&(l=a),y(r)&&(l=r),[s.key||"",i,s,l]}function Xe(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__numberFormatters.has(s)||a.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Gn="9.2.2";Rn.__EXTEND_POINT__;let Et=st.__EXTEND_POINT__;const M=()=>++Et,w={UNEXPECTED_RETURN_TYPE:Et,INVALID_ARGUMENT:M(),MUST_BE_CALL_SETUP_TOP:M(),NOT_INSLALLED:M(),NOT_AVAILABLE_IN_LEGACY_MODE:M(),REQUIRED_VALUE:M(),INVALID_VALUE:M(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:M(),NOT_INSLALLED_WITH_PROVIDE:M(),UNEXPECTED_ERROR:M(),NOT_COMPATIBLE_LEGACY_VUE_I18N:M(),BRIDGE_SUPPORT_VUE_2_ONLY:M(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:M(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:M(),__EXTEND_POINT__:M()};function W(e,...t){return ot(e,null,void 0)}const Te=K("__transrateVNode"),Ie=K("__datetimeParts"),Oe=K("__numberParts"),Hn=K("__setPluralRules");K("__intlifyMeta");const Bn=K("__injectWithOption");function pe(e){if(!U(e))return e;for(const t in e)if(!!Le(e,t))if(!t.includes("."))U(e[t])&&pe(e[t]);else{const n=t.split("."),a=n.length-1;let r=e;for(let s=0;s<a;s++)n[s]in r||(r[n[s]]={}),r=r[n[s]];r[n[a]]=e[t],delete e[t],U(r[n[a]])&&pe(r[n[a]])}return e}function bt(e,t){const{messages:n,__i18n:a,messageResolver:r,flatJson:s}=t,l=x(n)?n:$(a)?{}:{[e]:{}};if($(a)&&a.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:m}=i;c?(l[c]=l[c]||{},le(m,l[c])):le(m,l)}else A(i)&&le(JSON.parse(i),l)}),r==null&&s)for(const i in l)Le(l,i)&&pe(l[i]);return l}const ie=e=>!U(e)||$(e);function le(e,t){if(ie(e)||ie(t))throw W(w.INVALID_VALUE);for(const n in e)Le(e,n)&&(ie(e[n])||ie(t[n])?t[n]=e[n]:le(e[n],t[n]))}function Kn(e){return e.type}function Xn(e,t,n){let a=U(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=bt(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const r=Object.keys(a);r.length&&r.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(U(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(l=>{e.mergeDateTimeFormat(l,t.datetimeFormats[l])})}if(U(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(l=>{e.mergeNumberFormat(l,t.numberFormats[l])})}}}function Ye(e){return qt(Zt,null,e,0)}let ze=0;function Je(e){return(t,n,a,r)=>e(n,a,at()||void 0,r)}function Nt(e={},t){const{__root:n}=e,a=n===void 0;let r=B(e.inheritLocale)?e.inheritLocale:!0;const s=ne(n&&r?n.locale.value:A(e.locale)?e.locale:Ae),l=ne(n&&r?n.fallbackLocale.value:A(e.fallbackLocale)||$(e.fallbackLocale)||x(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),i=ne(bt(s.value,e)),c=ne(x(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),m=ne(x(e.numberFormats)?e.numberFormats:{[s.value]:{}});let g=n?n.missingWarn:B(e.missingWarn)||ke(e.missingWarn)?e.missingWarn:!0,d=n?n.fallbackWarn:B(e.fallbackWarn)||ke(e.fallbackWarn)?e.fallbackWarn:!0,_=n?n.fallbackRoot:B(e.fallbackRoot)?e.fallbackRoot:!0,E=!!e.fallbackFormat,T=ce(e.missing)?e.missing:null,O=ce(e.missing)?Je(e.missing):null,L=ce(e.postTranslation)?e.postTranslation:null,N=n?n.warnHtmlMessage:B(e.warnHtmlMessage)?e.warnHtmlMessage:!0,p=!!e.escapeParameter;const h=n?n.modifiers:x(e.modifiers)?e.modifiers:{};let I=e.pluralRules||n&&n.pluralRules,f;f=(()=>{const o={version:Gn,locale:s.value,fallbackLocale:l.value,messages:i.value,modifiers:h,pluralRules:I,missing:O===null?void 0:O,missingWarn:g,fallbackWarn:d,fallbackFormat:E,unresolving:!0,postTranslation:L===null?void 0:L,warnHtmlMessage:N,escapeParameter:p,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return o.datetimeFormats=c.value,o.numberFormats=m.value,o.__datetimeFormatters=x(f)?f.__datetimeFormatters:void 0,o.__numberFormatters=x(f)?f.__numberFormatters:void 0,Un(o)})(),re(f,s.value,l.value);function R(){return[s.value,l.value,i.value,c.value,m.value]}const q=ae({get:()=>s.value,set:o=>{s.value=o,f.locale=s.value}}),Z=ae({get:()=>l.value,set:o=>{l.value=o,f.fallbackLocale=l.value,re(f,s.value,o)}}),ee=ae(()=>i.value),V=ae(()=>c.value),De=ae(()=>m.value);function Ot(){return ce(L)?L:null}function pt(o){L=o,f.postTranslation=o}function Lt(){return T}function yt(o){o!==null&&(O=Je(o)),T=o,f.missing=O}const z=(o,u,j,D,fe,oe)=>{R();let te;if(te=o(f),se(te)&&te===me){const[Bt,ua]=u();return n&&_?D(n):fe(Bt)}else{if(oe(te))return te;throw W(w.UNEXPECTED_RETURN_TYPE)}};function Se(...o){return z(u=>Reflect.apply(Ge,null,[u,...o]),()=>Ee(...o),"translate",u=>Reflect.apply(u.t,u,[...o]),u=>u,u=>A(u))}function Ft(...o){const[u,j,D]=o;if(D&&!U(D))throw W(w.INVALID_ARGUMENT);return Se(u,j,G({resolvedMessage:!0},D||{}))}function At(...o){return z(u=>Reflect.apply(He,null,[u,...o]),()=>be(...o),"datetime format",u=>Reflect.apply(u.d,u,[...o]),()=>Ve,u=>A(u))}function ht(...o){return z(u=>Reflect.apply(Ke,null,[u,...o]),()=>Ne(...o),"number format",u=>Reflect.apply(u.n,u,[...o]),()=>Ve,u=>A(u))}function Ct(o){return o.map(u=>A(u)||se(u)||B(u)?Ye(String(u)):u)}const Rt={normalize:Ct,interpolate:o=>o,type:"vnode"};function Dt(...o){return z(u=>{let j;const D=u;try{D.processor=Rt,j=Reflect.apply(Ge,null,[D,...o])}finally{D.processor=null}return j},()=>Ee(...o),"translate",u=>u[Te](...o),u=>[Ye(u)],u=>$(u))}function St(...o){return z(u=>Reflect.apply(Ke,null,[u,...o]),()=>Ne(...o),"number format",u=>u[Oe](...o),()=>[],u=>A(u)||$(u))}function Mt(...o){return z(u=>Reflect.apply(He,null,[u,...o]),()=>be(...o),"datetime format",u=>u[Ie](...o),()=>[],u=>A(u)||$(u))}function kt(o){I=o,f.pluralRules=I}function vt(o,u){const j=A(u)?u:s.value,D=Me(j);return f.messageResolver(D,o)!==null}function Pt(o){let u=null;const j=ct(f,l.value,s.value);for(let D=0;D<j.length;D++){const fe=i.value[j[D]]||{},oe=f.messageResolver(fe,o);if(oe!=null){u=oe;break}}return u}function wt(o){const u=Pt(o);return u!=null?u:n?n.tm(o)||{}:{}}function Me(o){return i.value[o]||{}}function Wt(o,u){i.value[o]=u,f.messages=i.value}function Ut(o,u){i.value[o]=i.value[o]||{},le(u,i.value[o]),f.messages=i.value}function Vt(o){return c.value[o]||{}}function jt(o,u){c.value[o]=u,f.datetimeFormats=c.value,Be(f,o,u)}function xt(o,u){c.value[o]=G(c.value[o]||{},u),f.datetimeFormats=c.value,Be(f,o,u)}function $t(o){return m.value[o]||{}}function Gt(o,u){m.value[o]=u,f.numberFormats=m.value,Xe(f,o,u)}function Ht(o,u){m.value[o]=G(m.value[o]||{},u),f.numberFormats=m.value,Xe(f,o,u)}ze++,n&&de&&(ge(n.locale,o=>{r&&(s.value=o,f.locale=o,re(f,s.value,l.value))}),ge(n.fallbackLocale,o=>{r&&(l.value=o,f.fallbackLocale=o,re(f,s.value,l.value))}));const C={id:ze,locale:q,fallbackLocale:Z,get inheritLocale(){return r},set inheritLocale(o){r=o,o&&n&&(s.value=n.locale.value,l.value=n.fallbackLocale.value,re(f,s.value,l.value))},get availableLocales(){return Object.keys(i.value).sort()},messages:ee,get modifiers(){return h},get pluralRules(){return I||{}},get isGlobal(){return a},get missingWarn(){return g},set missingWarn(o){g=o,f.missingWarn=g},get fallbackWarn(){return d},set fallbackWarn(o){d=o,f.fallbackWarn=d},get fallbackRoot(){return _},set fallbackRoot(o){_=o},get fallbackFormat(){return E},set fallbackFormat(o){E=o,f.fallbackFormat=E},get warnHtmlMessage(){return N},set warnHtmlMessage(o){N=o,f.warnHtmlMessage=o},get escapeParameter(){return p},set escapeParameter(o){p=o,f.escapeParameter=o},t:Se,getLocaleMessage:Me,setLocaleMessage:Wt,mergeLocaleMessage:Ut,getPostTranslationHandler:Ot,setPostTranslationHandler:pt,getMissingHandler:Lt,setMissingHandler:yt,[Hn]:kt};return C.datetimeFormats=V,C.numberFormats=De,C.rt=Ft,C.te=vt,C.tm=wt,C.d=At,C.n=ht,C.getDateTimeFormat=Vt,C.setDateTimeFormat=jt,C.mergeDateTimeFormat=xt,C.getNumberFormat=$t,C.setNumberFormat=Gt,C.mergeNumberFormat=Ht,C[Bn]=e.__injectWithOption,C[Te]=Dt,C[Ie]=Mt,C[Oe]=St,C}const Ce={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Yn({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,r)=>a=[...a,...$(r.children)?r.children:[r]],[]):t.reduce((n,a)=>{const r=e[a];return r&&(n[a]=r()),n},{})}function Tt(e){return Jt}const Qe={name:"i18n-t",props:G({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>se(e)||!isNaN(e)}},Ce),setup(e,t){const{slots:n,attrs:a}=t,r=e.i18n||Re({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(d=>d!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=A(e.plural)?+e.plural:e.plural);const i=Yn(t,s),c=r[Te](e.keypath,i,l),m=G({},a),g=A(e.tag)||U(e.tag)?e.tag:Tt();return nt(g,m,c)}}};function zn(e){return $(e)&&!A(e[0])}function It(e,t,n,a){const{slots:r,attrs:s}=t;return()=>{const l={part:!0};let i={};e.locale&&(l.locale=e.locale),A(e.format)?l.key=e.format:U(e.format)&&(A(e.format.key)&&(l.key=e.format.key),i=Object.keys(e.format).reduce((_,E)=>n.includes(E)?G({},_,{[E]:e.format[E]}):_,{}));const c=a(e.value,l,i);let m=[l.key];$(c)?m=c.map((_,E)=>{const T=r[_.type],O=T?T({[_.type]:_.value,index:E,parts:c}):[_.value];return zn(O)&&(O[0].key=`${_.type}-${E}`),O}):A(c)&&(m=[c]);const g=G({},s),d=A(e.tag)||U(e.tag)?e.tag:Tt();return nt(d,g,m)}}const qe={name:"i18n-n",props:G({value:{type:Number,required:!0},format:{type:[String,Object]}},Ce),setup(e,t){const n=e.i18n||Re({useScope:"parent",__useComponent:!0});return It(e,t,dt,(...a)=>n[Oe](...a))}},Ze={name:"i18n-d",props:G({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ce),setup(e,t){const n=e.i18n||Re({useScope:"parent",__useComponent:!0});return It(e,t,gt,(...a)=>n[Ie](...a))}};function Jn(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function Qn(e){const t=l=>{const{instance:i,modifiers:c,value:m}=l;if(!i||!i.$)throw W(w.UNEXPECTED_ERROR);const g=Jn(e,i.$),d=et(m);return[Reflect.apply(g.t,g,[...tt(d)]),g]};return{created:(l,i)=>{const[c,m]=t(i);de&&e.global===m&&(l.__i18nWatcher=ge(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),l.__composer=m,l.textContent=c},unmounted:l=>{de&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:i})=>{if(l.__composer){const c=l.__composer,m=et(i);l.textContent=Reflect.apply(c.t,c,[...tt(m)])}},getSSRProps:l=>{const[i]=t(l);return{textContent:i}}}}function et(e){if(A(e))return{path:e};if(x(e)){if(!("path"in e))throw W(w.REQUIRED_VALUE,"path");return e}else throw W(w.INVALID_VALUE)}function tt(e){const{path:t,locale:n,args:a,choice:r,plural:s}=e,l={},i=a||{};return A(n)&&(l.locale=n),se(r)&&(l.plural=r),se(s)&&(l.plural=s),[t,i,l]}function qn(e,t,...n){const a=x(n[0])?n[0]:{},r=!!a.useI18nComponentName;(B(a.globalInstall)?a.globalInstall:!0)&&(e.component(r?"i18n":Qe.name,Qe),e.component(qe.name,qe),e.component(Ze.name,Ze)),e.directive("t",Qn(t))}const Zn=K("global-vue-i18n");function fa(e={},t){const n=B(e.globalInjection)?e.globalInjection:!0,a=!0,r=new Map,[s,l]=ea(e),i=K("");function c(d){return r.get(d)||null}function m(d,_){r.set(d,_)}function g(d){r.delete(d)}{const d={get mode(){return"composition"},get allowComposition(){return a},async install(_,...E){_.__VUE_I18N_SYMBOL__=i,_.provide(_.__VUE_I18N_SYMBOL__,d),n&&ca(_,d.global),qn(_,d,...E);const T=_.unmount;_.unmount=()=>{d.dispose(),T()}},get global(){return l},dispose(){s.stop()},__instances:r,__getInstance:c,__setInstance:m,__deleteInstance:g};return d}}function Re(e={}){const t=at();if(t==null)throw W(w.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw W(w.NOT_INSLALLED);const n=ta(t),a=aa(n),r=Kn(t),s=na(e,r);if(s==="global")return Xn(a,e,r),a;if(s==="parent"){let c=ra(n,t,e.__useComponent);return c==null&&(c=a),c}const l=n;let i=l.__getInstance(t);if(i==null){const c=G({},e);"__i18n"in r&&(c.__i18n=r.__i18n),a&&(c.__root=a),i=Nt(c),la(l,t),l.__setInstance(t,i)}return i}function ea(e,t,n){const a=Kt();{const r=a.run(()=>Nt(e));if(r==null)throw W(w.UNEXPECTED_ERROR);return[a,r]}}function ta(e){{const t=Xt(e.isCE?Zn:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw W(e.isCE?w.NOT_INSLALLED_WITH_PROVIDE:w.UNEXPECTED_ERROR);return t}}function na(e,t){return tn(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function aa(e){return e.mode==="composition"?e.global:e.global.__composer}function ra(e,t,n=!1){let a=null;const r=t.root;let s=t.parent;for(;s!=null;){const l=e;if(e.mode==="composition"&&(a=l.__getInstance(s)),a!=null||r===s)break;s=s.parent}return a}function la(e,t,n){Yt(()=>{},t),zt(()=>{e.__deleteInstance(t)},t)}const sa=["locale","fallbackLocale","availableLocales"],oa=["t","rt","d","n","tm"];function ca(e,t){const n=Object.create(null);sa.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw W(w.UNEXPECTED_ERROR);const s=Qt(r.value)?{get(){return r.value.value},set(l){r.value.value=l}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,oa.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw W(w.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,r)})}wn(Nn);Wn(ct);export{fa as c,Re as u};