(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function wg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ou={exports:{}},Va={},zu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Y0(){if(Mp)return ft;Mp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function _(N,V,ye){this.props=N,this.context=V,this.refs=b,this.updater=ye||w}_.prototype.isReactComponent={},_.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=_.prototype;function P(N,V,ye){this.props=N,this.context=V,this.refs=b,this.updater=ye||w}var R=P.prototype=new S;R.constructor=P,E(R,_.prototype),R.isPureReactComponent=!0;var D=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function oe(N,V,ye){var q,le={},fe=null,be=null;if(V!=null)for(q in V.ref!==void 0&&(be=V.ref),V.key!==void 0&&(fe=""+V.key),V)G.call(V,q)&&!F.hasOwnProperty(q)&&(le[q]=V[q]);var Te=arguments.length-2;if(Te===1)le.children=ye;else if(1<Te){for(var Ee=Array(Te),Qe=0;Qe<Te;Qe++)Ee[Qe]=arguments[Qe+2];le.children=Ee}if(N&&N.defaultProps)for(q in Te=N.defaultProps,Te)le[q]===void 0&&(le[q]=Te[q]);return{$$typeof:r,type:N,key:fe,ref:be,props:le,_owner:O.current}}function de(N,V){return{$$typeof:r,type:N.type,key:V,ref:N.ref,props:N.props,_owner:N._owner}}function T(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function k(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return V[ye]})}var ce=/\/+/g;function ue(N,V){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):V.toString(36)}function j(N,V,ye,q,le){var fe=typeof N;(fe==="undefined"||fe==="boolean")&&(N=null);var be=!1;if(N===null)be=!0;else switch(fe){case"string":case"number":be=!0;break;case"object":switch(N.$$typeof){case r:case e:be=!0}}if(be)return be=N,le=le(be),N=q===""?"."+ue(be,0):q,D(le)?(ye="",N!=null&&(ye=N.replace(ce,"$&/")+"/"),j(le,V,ye,"",function(Qe){return Qe})):le!=null&&(T(le)&&(le=de(le,ye+(!le.key||be&&be.key===le.key?"":(""+le.key).replace(ce,"$&/")+"/")+N)),V.push(le)),1;if(be=0,q=q===""?".":q+":",D(N))for(var Te=0;Te<N.length;Te++){fe=N[Te];var Ee=q+ue(fe,Te);be+=j(fe,V,ye,Ee,le)}else if(Ee=y(N),typeof Ee=="function")for(N=Ee.call(N),Te=0;!(fe=N.next()).done;)fe=fe.value,Ee=q+ue(fe,Te++),be+=j(fe,V,ye,Ee,le);else if(fe==="object")throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return be}function re(N,V,ye){if(N==null)return N;var q=[],le=0;return j(N,q,"","",function(fe){return V.call(ye,fe,le++)}),q}function W(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var te={current:null},B={transition:null},Q={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function X(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:re,forEach:function(N,V,ye){re(N,function(){V.apply(this,arguments)},ye)},count:function(N){var V=0;return re(N,function(){V++}),V},toArray:function(N){return re(N,function(V){return V})||[]},only:function(N){if(!T(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=_,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=P,ft.StrictMode=s,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ft.act=X,ft.cloneElement=function(N,V,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var q=E({},N.props),le=N.key,fe=N.ref,be=N._owner;if(V!=null){if(V.ref!==void 0&&(fe=V.ref,be=O.current),V.key!==void 0&&(le=""+V.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ee in V)G.call(V,Ee)&&!F.hasOwnProperty(Ee)&&(q[Ee]=V[Ee]===void 0&&Te!==void 0?Te[Ee]:V[Ee])}var Ee=arguments.length-2;if(Ee===1)q.children=ye;else if(1<Ee){Te=Array(Ee);for(var Qe=0;Qe<Ee;Qe++)Te[Qe]=arguments[Qe+2];q.children=Te}return{$$typeof:r,type:N.type,key:le,ref:fe,props:q,_owner:be}},ft.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ft.createElement=oe,ft.createFactory=function(N){var V=oe.bind(null,N);return V.type=N,V},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:d,render:N}},ft.isValidElement=T,ft.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:W}},ft.memo=function(N,V){return{$$typeof:m,type:N,compare:V===void 0?null:V}},ft.startTransition=function(N){var V=B.transition;B.transition={};try{N()}finally{B.transition=V}},ft.unstable_act=X,ft.useCallback=function(N,V){return te.current.useCallback(N,V)},ft.useContext=function(N){return te.current.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N){return te.current.useDeferredValue(N)},ft.useEffect=function(N,V){return te.current.useEffect(N,V)},ft.useId=function(){return te.current.useId()},ft.useImperativeHandle=function(N,V,ye){return te.current.useImperativeHandle(N,V,ye)},ft.useInsertionEffect=function(N,V){return te.current.useInsertionEffect(N,V)},ft.useLayoutEffect=function(N,V){return te.current.useLayoutEffect(N,V)},ft.useMemo=function(N,V){return te.current.useMemo(N,V)},ft.useReducer=function(N,V,ye){return te.current.useReducer(N,V,ye)},ft.useRef=function(N){return te.current.useRef(N)},ft.useState=function(N){return te.current.useState(N)},ft.useSyncExternalStore=function(N,V,ye){return te.current.useSyncExternalStore(N,V,ye)},ft.useTransition=function(){return te.current.useTransition()},ft.version="18.3.1",ft}var Ep;function Hd(){return Ep||(Ep=1,zu.exports=Y0()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function K0(){if(Tp)return Va;Tp=1;var r=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,m){var g,x={},y=null,w=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(w=p.ref);for(g in p)s.call(p,g)&&!l.hasOwnProperty(g)&&(x[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:e,type:d,key:y,ref:w,props:x,_owner:o.current}}return Va.Fragment=t,Va.jsx=h,Va.jsxs=h,Va}var bp;function Z0(){return bp||(bp=1,Ou.exports=K0()),Ou.exports}var u=Z0(),Re=Hd();const ia=wg(Re);var fl={},Bu={exports:{}},Ln={},ju={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Q0(){return Ap||(Ap=1,(function(r){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var N=X-1>>>1,V=B[N];if(0<o(V,Q))B[N]=Q,B[X]=V,X=N;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var N=0,V=B.length,ye=V>>>1;N<ye;){var q=2*(N+1)-1,le=B[q],fe=q+1,be=B[fe];if(0>o(le,X))fe<V&&0>o(be,le)?(B[N]=be,B[fe]=X,N=fe):(B[N]=le,B[q]=X,N=q);else if(fe<V&&0>o(be,X))B[N]=be,B[fe]=X,N=fe;else break e}}return Q}function o(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,y=3,w=!1,E=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var Q=t(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=B)s(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=t(m)}}function D(B){if(b=!1,R(B),!E)if(t(p)!==null)E=!0,W(G);else{var Q=t(m);Q!==null&&te(D,Q.startTime-B)}}function G(B,Q){E=!1,b&&(b=!1,S(oe),oe=-1),w=!0;var X=y;try{for(R(Q),x=t(p);x!==null&&(!(x.expirationTime>Q)||B&&!k());){var N=x.callback;if(typeof N=="function"){x.callback=null,y=x.priorityLevel;var V=N(x.expirationTime<=Q);Q=r.unstable_now(),typeof V=="function"?x.callback=V:x===t(p)&&s(p),R(Q)}else s(p);x=t(p)}if(x!==null)var ye=!0;else{var q=t(m);q!==null&&te(D,q.startTime-Q),ye=!1}return ye}finally{x=null,y=X,w=!1}}var O=!1,F=null,oe=-1,de=5,T=-1;function k(){return!(r.unstable_now()-T<de)}function ce(){if(F!==null){var B=r.unstable_now();T=B;var Q=!0;try{Q=F(!0,B)}finally{Q?ue():(O=!1,F=null)}}else O=!1}var ue;if(typeof P=="function")ue=function(){P(ce)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,re=j.port2;j.port1.onmessage=ce,ue=function(){re.postMessage(null)}}else ue=function(){_(ce,0)};function W(B){F=B,O||(O=!0,ue())}function te(B,Q){oe=_(function(){B(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||w||(E=!0,W(G))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var X=y;y=Q;try{return B()}finally{y=X}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=y;y=B;try{return Q()}finally{y=X}},r.unstable_scheduleCallback=function(B,Q,X){var N=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?N+X:N):X=N,B){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=X+V,B={id:g++,callback:Q,priorityLevel:B,startTime:X,expirationTime:V,sortIndex:-1},X>N?(B.sortIndex=X,e(m,B),t(p)===null&&B===t(m)&&(b?(S(oe),oe=-1):b=!0,te(D,X-N))):(B.sortIndex=V,e(p,B),E||w||(E=!0,W(G))),B},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(B){var Q=y;return function(){var X=y;y=Q;try{return B.apply(this,arguments)}finally{y=X}}}})(Hu)),Hu}var Rp;function J0(){return Rp||(Rp=1,ju.exports=Q0()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function ex(){if(Cp)return Ln;Cp=1;var r=Hd(),e=J0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function y(n){return p.call(x,n)?!0:p.call(g,n)?!1:m.test(n)?x[n]=!0:(g[n]=!0,!1)}function w(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||w(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,f,v,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,P);_[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,P);_[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,P);_[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),k=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),B=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,N;function V(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var ye=!1;function q(n,i){if(!n||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),v=c.stack.split(`
`),M=f.length-1,I=v.length-1;1<=M&&0<=I&&f[M]!==v[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==v[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==v[I]){var z=`
`+f[M].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=M&&0<=I);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function le(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case O:return"Portal";case de:return"Profiler";case oe:return"StrictMode";case ue:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,v.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=Qe(n))}function Z(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ee(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ve(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ge(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Ct(n,i){Ge(n,i);var a=Te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?L(n,i.type,a):i.hasOwnProperty("defaultValue")&&L(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function at(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function L(n,i,a){(i!=="number"||zt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var A=Array.isArray;function ee(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function xe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ge(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(A(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function _e(n,i){var a=Te(i.value),c=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ze(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $e,ot=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($e=$e||document.createElement("div"),$e.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$e.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ht=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(n){ht.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),mt[i]=mt[n]})});function nt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||mt.hasOwnProperty(n)&&mt[n]?(""+i).trim():i+"px"}function We(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=nt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var ke=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function xt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Et=null,U=null,Se=null;function Me(n){if(n=Ca(n)){if(typeof Et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ro(i),Et(n.stateNode,n.type,i))}}function Oe(n){U?Se?Se.push(n):Se=[n]:U=n}function qe(){if(U){var n=U,i=Se;if(Se=U=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function yt(n,i){return n(i)}function bt(){}var Ht=!1;function vn(n,i,a){if(Ht)return n(i,a);Ht=!0;try{return yt(n,i,a)}finally{Ht=!1,(U!==null||Se!==null)&&(bt(),qe())}}function St(n,i){var a=n.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qt=!1;if(d)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){qt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{qt=!1}function ao(n,i,a,c,f,v,M,I,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(pe){this.onError(pe)}}var kr=!1,Pi=null,Fr=!1,er=null,oo={onError:function(n){kr=!0,Pi=n}};function lo(n,i,a,c,f,v,M,I,z){kr=!1,Pi=null,ao.apply(oo,arguments)}function ac(n,i,a,c,f,v,M,I,z){if(lo.apply(this,arguments),kr){if(kr){var ne=Pi;kr=!1,Pi=null}else throw Error(t(198));Fr||(Fr=!0,er=ne)}}function Li(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function co(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(Li(n)!==n)throw Error(t(188))}function K(n){var i=n.alternate;if(!i){if(i=Li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var v=f.alternate;if(v===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===a)return C(f),n;if(v===c)return C(f),i;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=v;else{for(var M=!1,I=f.child;I;){if(I===a){M=!0,a=f,c=v;break}if(I===c){M=!0,c=f,a=v;break}I=I.sibling}if(!M){for(I=v.child;I;){if(I===a){M=!0,a=v,c=f;break}if(I===c){M=!0,c=v,a=f;break}I=I.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function se(n){return n=K(n),n!==null?ae(n):null}function ae(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ae(n);if(i!==null)return i;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,He=e.unstable_shouldYield,Ze=e.unstable_requestPaint,Ne=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,it=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,xn=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,En=null,gt=null;function ut(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(En,n,void 0,(n.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:uo,Ut=Math.log,Ni=Math.LN2;function uo(n){return n>>>=0,n===0?32:31-(Ut(n)/Ni|0)|0}var yi=64,tr=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $n(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,v=n.pingedLanes,M=a&268435455;if(M!==0){var I=M&~f;I!==0?c=Bt(I):(v&=M,v!==0&&(c=Bt(v)))}else M=a&~f,M!==0?c=Bt(M):v!==0&&(c=Bt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,v=i&-i,f>=v||f===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-_n(i),f=1<<a,c|=n[a],i&=~f;return c}function da(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,v=n.pendingLanes;0<v;){var M=31-_n(v),I=1<<M,z=f[M];z===-1?((I&a)===0||(I&c)!==0)&&(f[M]=da(I,i)):z<=i&&(n.expiredLanes|=I),v&=~I}}function Or(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ho(){var n=yi;return yi<<=1,(yi&4194240)===0&&(yi=64),n}function ds(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ha(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-_n(i),n[i]=a}function gv(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-_n(a),v=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~v}}function oc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-_n(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var At=0;function eh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var th,lc,nh,ih,rh,cc=!1,fo=[],nr=null,ir=null,rr=null,fa=new Map,pa=new Map,sr=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(i.pointerId)}}function ma(n,i,a,c,f,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[f]},i!==null&&(i=Ca(i),i!==null&&lc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function xv(n,i,a,c,f){switch(i){case"focusin":return nr=ma(nr,n,i,a,c,f),!0;case"dragenter":return ir=ma(ir,n,i,a,c,f),!0;case"mouseover":return rr=ma(rr,n,i,a,c,f),!0;case"pointerover":var v=f.pointerId;return fa.set(v,ma(fa.get(v)||null,n,i,a,c,f)),!0;case"gotpointercapture":return v=f.pointerId,pa.set(v,ma(pa.get(v)||null,n,i,a,c,f)),!0}return!1}function ah(n){var i=zr(n.target);if(i!==null){var a=Li(i);if(a!==null){if(i=a.tag,i===13){if(i=co(a),i!==null){n.blockedOn=i,rh(n.priority,function(){nh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Tt=c,a.target.dispatchEvent(c),Tt=null}else return i=Ca(a),i!==null&&lc(i),n.blockedOn=a,!1;i.shift()}return!0}function oh(n,i,a){po(n)&&a.delete(i)}function _v(){cc=!1,nr!==null&&po(nr)&&(nr=null),ir!==null&&po(ir)&&(ir=null),rr!==null&&po(rr)&&(rr=null),fa.forEach(oh),pa.forEach(oh)}function ga(n,i){n.blockedOn===i&&(n.blockedOn=null,cc||(cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_v)))}function va(n){function i(f){return ga(f,n)}if(0<fo.length){ga(fo[0],n);for(var a=1;a<fo.length;a++){var c=fo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(nr!==null&&ga(nr,n),ir!==null&&ga(ir,n),rr!==null&&ga(rr,n),fa.forEach(i),pa.forEach(i),a=0;a<sr.length;a++)c=sr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)ah(a),a.blockedOn===null&&sr.shift()}var hs=D.ReactCurrentBatchConfig,mo=!0;function yv(n,i,a,c){var f=At,v=hs.transition;hs.transition=null;try{At=1,uc(n,i,a,c)}finally{At=f,hs.transition=v}}function Sv(n,i,a,c){var f=At,v=hs.transition;hs.transition=null;try{At=4,uc(n,i,a,c)}finally{At=f,hs.transition=v}}function uc(n,i,a,c){if(mo){var f=dc(n,i,a,c);if(f===null)Rc(n,i,c,go,a),sh(n,c);else if(xv(f,n,i,a,c))c.stopPropagation();else if(sh(n,c),i&4&&-1<vv.indexOf(n)){for(;f!==null;){var v=Ca(f);if(v!==null&&th(v),v=dc(n,i,a,c),v===null&&Rc(n,i,c,go,a),v===f)break;f=v}f!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var go=null;function dc(n,i,a,c){if(go=null,n=ct(c),n=zr(n),n!==null)if(i=Li(n),i===null)n=null;else if(a=i.tag,a===13){if(n=co(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function lh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case it:return 1;case st:return 4;case Pt:case xn:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var ar=null,hc=null,vo=null;function ch(){if(vo)return vo;var n,i=hc,a=i.length,c,f="value"in ar?ar.value:ar.textContent,v=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===f[v-c];c++);return vo=f.slice(n,1<c?1-c:void 0)}function xo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _o(){return!0}function uh(){return!1}function zn(n){function i(a,c,f,v,M){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=v,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?_o:uh,this.isPropagationStopped=uh,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=zn(fs),xa=X({},fs,{view:0,detail:0}),wv=zn(xa),pc,mc,_a,yo=X({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_a&&(_a&&n.type==="mousemove"?(pc=n.screenX-_a.screenX,mc=n.screenY-_a.screenY):mc=pc=0,_a=n),pc)},movementY:function(n){return"movementY"in n?n.movementY:mc}}),dh=zn(yo),Mv=X({},yo,{dataTransfer:0}),Ev=zn(Mv),Tv=X({},xa,{relatedTarget:0}),gc=zn(Tv),bv=X({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=zn(bv),Rv=X({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cv=zn(Rv),Pv=X({},fs,{data:0}),hh=zn(Pv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Dv[n])?!!i[n]:!1}function vc(){return Iv}var Uv=X({},xa,{key:function(n){if(n.key){var i=Lv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?xo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kv=zn(Uv),Fv=X({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=zn(Fv),Ov=X({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),zv=zn(Ov),Bv=X({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=zn(Bv),Hv=X({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=zn(Hv),Vv=[9,13,27,32],xc=d&&"CompositionEvent"in window,ya=null;d&&"documentMode"in document&&(ya=document.documentMode);var Wv=d&&"TextEvent"in window&&!ya,ph=d&&(!xc||ya&&8<ya&&11>=ya),mh=" ",gh=!1;function vh(n,i){switch(n){case"keyup":return Vv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function Xv(n,i){switch(n){case"compositionend":return xh(i);case"keypress":return i.which!==32?null:(gh=!0,mh);case"textInput":return n=i.data,n===mh&&gh?null:n;default:return null}}function qv(n,i){if(ps)return n==="compositionend"||!xc&&vh(n,i)?(n=ch(),vo=hc=ar=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ph&&i.locale!=="ko"?null:i.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!$v[n.type]:i==="textarea"}function yh(n,i,a,c){Oe(c),i=To(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Sa=null,wa=null;function Yv(n){Oh(n,0)}function So(n){var i=_s(n);if(Z(i))return n}function Kv(n,i){if(n==="change")return i}var Sh=!1;if(d){var _c;if(d){var yc="oninput"in document;if(!yc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),yc=typeof wh.oninput=="function"}_c=yc}else _c=!1;Sh=_c&&(!document.documentMode||9<document.documentMode)}function Mh(){Sa&&(Sa.detachEvent("onpropertychange",Eh),wa=Sa=null)}function Eh(n){if(n.propertyName==="value"&&So(wa)){var i=[];yh(i,wa,n,ct(n)),vn(Yv,i)}}function Zv(n,i,a){n==="focusin"?(Mh(),Sa=i,wa=a,Sa.attachEvent("onpropertychange",Eh)):n==="focusout"&&Mh()}function Qv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So(wa)}function Jv(n,i){if(n==="click")return So(i)}function e0(n,i){if(n==="input"||n==="change")return So(i)}function t0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:t0;function Ma(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!si(n[f],i[f]))return!1}return!0}function Th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bh(n,i){var a=Th(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Th(a)}}function Ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Rh(){for(var n=window,i=zt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zt(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function n0(n){var i=Rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ah(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,v=Math.min(c.start,f);c=c.end===void 0?v:Math.min(c.end,f),!n.extend&&v>c&&(f=c,c=v,v=f),f=bh(a,v);var M=bh(a,c);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var i0=d&&"documentMode"in document&&11>=document.documentMode,ms=null,wc=null,Ea=null,Mc=!1;function Ch(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||ms==null||ms!==zt(c)||(c=ms,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&Ma(Ea,c)||(Ea=c,c=To(wc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var gs={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Ec={},Ph={};d&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Mo(n){if(Ec[n])return Ec[n];if(!gs[n])return n;var i=gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ph)return Ec[n]=i[a];return n}var Lh=Mo("animationend"),Nh=Mo("animationiteration"),Dh=Mo("animationstart"),Ih=Mo("transitionend"),Uh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){Uh.set(n,i),l(i,[n])}for(var Tc=0;Tc<kh.length;Tc++){var bc=kh[Tc],r0=bc.toLowerCase(),s0=bc[0].toUpperCase()+bc.slice(1);or(r0,"on"+s0)}or(Lh,"onAnimationEnd"),or(Nh,"onAnimationIteration"),or(Dh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Ih,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Fh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ac(c,i,void 0,n),n.currentTarget=null}function Oh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var M=c.length-1;0<=M;M--){var I=c[M],z=I.instance,ne=I.currentTarget;if(I=I.listener,z!==v&&f.isPropagationStopped())break e;Fh(f,I,ne),v=z}else for(M=0;M<c.length;M++){if(I=c[M],z=I.instance,ne=I.currentTarget,I=I.listener,z!==v&&f.isPropagationStopped())break e;Fh(f,I,ne),v=z}}}if(Fr)throw n=er,Fr=!1,er=null,n}function Nt(n,i){var a=i[Ic];a===void 0&&(a=i[Ic]=new Set);var c=n+"__bubble";a.has(c)||(zh(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),zh(a,n,c,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[Eo]){n[Eo]=!0,s.forEach(function(a){a!=="selectionchange"&&(a0.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,Ac("selectionchange",!1,i))}}function zh(n,i,a,c){switch(lh(i)){case 1:var f=yv;break;case 4:f=Sv;break;default:f=uc}a=f.bind(null,i,a,n),f=void 0,!qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,f){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;M=M.return}for(;I!==null;){if(M=zr(I),M===null)return;if(z=M.tag,z===5||z===6){c=v=M;continue e}I=I.parentNode}}c=c.return}vn(function(){var ne=v,pe=ct(a),ve=[];e:{var he=Uh.get(n);if(he!==void 0){var Le=fc,Ue=n;switch(n){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":Le=kv;break;case"focusin":Ue="focus",Le=gc;break;case"focusout":Ue="blur",Le=gc;break;case"beforeblur":case"afterblur":Le=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=zv;break;case Lh:case Nh:case Dh:Le=Av;break;case Ih:Le=jv;break;case"scroll":Le=wv;break;case"wheel":Le=Gv;break;case"copy":case"cut":case"paste":Le=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=fh}var Fe=(i&4)!==0,Vt=!Fe&&n==="scroll",Y=Fe?he!==null?he+"Capture":null:he;Fe=[];for(var H=ne,J;H!==null;){J=H;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,Y!==null&&(we=St(H,Y),we!=null&&Fe.push(Aa(H,we,J)))),Vt)break;H=H.return}0<Fe.length&&(he=new Le(he,Ue,null,a,pe),ve.push({event:he,listeners:Fe}))}}if((i&7)===0){e:{if(he=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",he&&a!==Tt&&(Ue=a.relatedTarget||a.fromElement)&&(zr(Ue)||Ue[Di]))break e;if((Le||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,Le?(Ue=a.relatedTarget||a.toElement,Le=ne,Ue=Ue?zr(Ue):null,Ue!==null&&(Vt=Li(Ue),Ue!==Vt||Ue.tag!==5&&Ue.tag!==6)&&(Ue=null)):(Le=null,Ue=ne),Le!==Ue)){if(Fe=dh,we="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Fe=fh,we="onPointerLeave",Y="onPointerEnter",H="pointer"),Vt=Le==null?he:_s(Le),J=Ue==null?he:_s(Ue),he=new Fe(we,H+"leave",Le,a,pe),he.target=Vt,he.relatedTarget=J,we=null,zr(pe)===ne&&(Fe=new Fe(Y,H+"enter",Ue,a,pe),Fe.target=J,Fe.relatedTarget=Vt,we=Fe),Vt=we,Le&&Ue)t:{for(Fe=Le,Y=Ue,H=0,J=Fe;J;J=vs(J))H++;for(J=0,we=Y;we;we=vs(we))J++;for(;0<H-J;)Fe=vs(Fe),H--;for(;0<J-H;)Y=vs(Y),J--;for(;H--;){if(Fe===Y||Y!==null&&Fe===Y.alternate)break t;Fe=vs(Fe),Y=vs(Y)}Fe=null}else Fe=null;Le!==null&&Bh(ve,he,Le,Fe,!1),Ue!==null&&Vt!==null&&Bh(ve,Vt,Ue,Fe,!0)}}e:{if(he=ne?_s(ne):window,Le=he.nodeName&&he.nodeName.toLowerCase(),Le==="select"||Le==="input"&&he.type==="file")var Be=Kv;else if(_h(he))if(Sh)Be=e0;else{Be=Qv;var Ye=Zv}else(Le=he.nodeName)&&Le.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Be=Jv);if(Be&&(Be=Be(n,ne))){yh(ve,Be,a,pe);break e}Ye&&Ye(n,he,ne),n==="focusout"&&(Ye=he._wrapperState)&&Ye.controlled&&he.type==="number"&&L(he,"number",he.value)}switch(Ye=ne?_s(ne):window,n){case"focusin":(_h(Ye)||Ye.contentEditable==="true")&&(ms=Ye,wc=ne,Ea=null);break;case"focusout":Ea=wc=ms=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,Ch(ve,a,pe);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":Ch(ve,a,pe)}var Ke;if(xc)e:{switch(n){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ps?vh(n,a)&&(Je="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(ph&&a.locale!=="ko"&&(ps||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ps&&(Ke=ch()):(ar=pe,hc="value"in ar?ar.value:ar.textContent,ps=!0)),Ye=To(ne,Je),0<Ye.length&&(Je=new hh(Je,n,null,a,pe),ve.push({event:Je,listeners:Ye}),Ke?Je.data=Ke:(Ke=xh(a),Ke!==null&&(Je.data=Ke)))),(Ke=Wv?Xv(n,a):qv(n,a))&&(ne=To(ne,"onBeforeInput"),0<ne.length&&(pe=new hh("onBeforeInput","beforeinput",null,a,pe),ve.push({event:pe,listeners:ne}),pe.data=Ke))}Oh(ve,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function To(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=St(n,a),v!=null&&c.unshift(Aa(n,v,f)),v=St(n,i),v!=null&&c.push(Aa(n,v,f))),n=n.return}return c}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bh(n,i,a,c,f){for(var v=i._reactName,M=[];a!==null&&a!==c;){var I=a,z=I.alternate,ne=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&ne!==null&&(I=ne,f?(z=St(a,v),z!=null&&M.unshift(Aa(a,z,I))):f||(z=St(a,v),z!=null&&M.push(Aa(a,z,I)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var o0=/\r\n?/g,l0=/\u0000|\uFFFD/g;function jh(n){return(typeof n=="string"?n:""+n).replace(o0,`
`).replace(l0,"")}function bo(n,i,a){if(i=jh(i),jh(n)!==i&&a)throw Error(t(425))}function Ao(){}var Cc=null,Pc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(n){return Hh.resolve(null).then(n).catch(d0)}:Nc;function d0(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),va(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);va(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Si="__reactFiber$"+xs,Ra="__reactProps$"+xs,Di="__reactContainer$"+xs,Ic="__reactEvents$"+xs,h0="__reactListeners$"+xs,f0="__reactHandles$"+xs;function zr(n){var i=n[Si];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Di]||a[Si]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Gh(n);n!==null;){if(a=n[Si])return a;n=Gh(n)}return i}n=a,a=n.parentNode}return null}function Ca(n){return n=n[Si]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ro(n){return n[Ra]||null}var Uc=[],ys=-1;function cr(n){return{current:n}}function Dt(n){0>ys||(n.current=Uc[ys],Uc[ys]=null,ys--)}function Lt(n,i){ys++,Uc[ys]=n.current,n.current=i}var ur={},cn=cr(ur),bn=cr(!1),Br=ur;function Ss(n,i){var a=n.type.contextTypes;if(!a)return ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in a)f[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function An(n){return n=n.childContextTypes,n!=null}function Co(){Dt(bn),Dt(cn)}function Vh(n,i,a){if(cn.current!==ur)throw Error(t(168));Lt(cn,i),Lt(bn,a)}function Wh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,be(n)||"Unknown",f));return X({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Br=cn.current,Lt(cn,n),Lt(bn,bn.current),!0}function Xh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Wh(n,i,Br),c.__reactInternalMemoizedMergedChildContext=n,Dt(bn),Dt(cn),Lt(cn,n)):Dt(bn),Lt(bn,a)}var Ii=null,Lo=!1,kc=!1;function qh(n){Ii===null?Ii=[n]:Ii.push(n)}function p0(n){Lo=!0,qh(n)}function dr(){if(!kc&&Ii!==null){kc=!0;var n=0,i=At;try{var a=Ii;for(At=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ii=null,Lo=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(n+1)),ie(it,dr),f}finally{At=i,kc=!1}}return null}var ws=[],Ms=0,No=null,Do=0,Yn=[],Kn=0,jr=null,Ui=1,ki="";function Hr(n,i){ws[Ms++]=Do,ws[Ms++]=No,No=n,Do=i}function $h(n,i,a){Yn[Kn++]=Ui,Yn[Kn++]=ki,Yn[Kn++]=jr,jr=n;var c=Ui;n=ki;var f=32-_n(c)-1;c&=~(1<<f),a+=1;var v=32-_n(i)+f;if(30<v){var M=f-f%5;v=(c&(1<<M)-1).toString(32),c>>=M,f-=M,Ui=1<<32-_n(i)+f|a<<f|c,ki=v+n}else Ui=1<<v|a<<f|c,ki=n}function Fc(n){n.return!==null&&(Hr(n,1),$h(n,1,0))}function Oc(n){for(;n===No;)No=ws[--Ms],ws[Ms]=null,Do=ws[--Ms],ws[Ms]=null;for(;n===jr;)jr=Yn[--Kn],Yn[Kn]=null,ki=Yn[--Kn],Yn[Kn]=null,Ui=Yn[--Kn],Yn[Kn]=null}var Bn=null,jn=null,kt=!1,ai=null;function Yh(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,jn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=jr!==null?{id:Ui,overflow:ki}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,jn=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(kt){var i=jn;if(i){var a=i;if(!Kh(n,i)){if(zc(n))throw Error(t(418));i=lr(a.nextSibling);var c=Bn;i&&Kh(n,i)?Yh(c,a):(n.flags=n.flags&-4097|2,kt=!1,Bn=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Bn=n}}}function Zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Io(n){if(n!==Bn)return!1;if(!kt)return Zh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=jn)){if(zc(n))throw Qh(),Error(t(418));for(;i;)Yh(n,i),i=lr(i.nextSibling)}if(Zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jn=lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Bn?lr(n.stateNode.nextSibling):null;return!0}function Qh(){for(var n=jn;n;)n=lr(n.nextSibling)}function Es(){jn=Bn=null,kt=!1}function jc(n){ai===null?ai=[n]:ai.push(n)}var m0=D.ReactCurrentBatchConfig;function Pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(M){var I=f.refs;M===null?delete I[v]:I[v]=M},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jh(n){var i=n._init;return i(n._payload)}function ef(n){function i(Y,H){if(n){var J=Y.deletions;J===null?(Y.deletions=[H],Y.flags|=16):J.push(H)}}function a(Y,H){if(!n)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function c(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function f(Y,H){return Y=_r(Y,H),Y.index=0,Y.sibling=null,Y}function v(Y,H,J){return Y.index=J,n?(J=Y.alternate,J!==null?(J=J.index,J<H?(Y.flags|=2,H):J):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,H,J,we){return H===null||H.tag!==6?(H=Nu(J,Y.mode,we),H.return=Y,H):(H=f(H,J),H.return=Y,H)}function z(Y,H,J,we){var Be=J.type;return Be===F?pe(Y,H,J.props.children,we,J.key):H!==null&&(H.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===W&&Jh(Be)===H.type)?(we=f(H,J.props),we.ref=Pa(Y,H,J),we.return=Y,we):(we=sl(J.type,J.key,J.props,null,Y.mode,we),we.ref=Pa(Y,H,J),we.return=Y,we)}function ne(Y,H,J,we){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=Du(J,Y.mode,we),H.return=Y,H):(H=f(H,J.children||[]),H.return=Y,H)}function pe(Y,H,J,we,Be){return H===null||H.tag!==7?(H=Kr(J,Y.mode,we,Be),H.return=Y,H):(H=f(H,J),H.return=Y,H)}function ve(Y,H,J){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Nu(""+H,Y.mode,J),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return J=sl(H.type,H.key,H.props,null,Y.mode,J),J.ref=Pa(Y,null,H),J.return=Y,J;case O:return H=Du(H,Y.mode,J),H.return=Y,H;case W:var we=H._init;return ve(Y,we(H._payload),J)}if(A(H)||Q(H))return H=Kr(H,Y.mode,J,null),H.return=Y,H;Uo(Y,H)}return null}function he(Y,H,J,we){var Be=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Be!==null?null:I(Y,H,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case G:return J.key===Be?z(Y,H,J,we):null;case O:return J.key===Be?ne(Y,H,J,we):null;case W:return Be=J._init,he(Y,H,Be(J._payload),we)}if(A(J)||Q(J))return Be!==null?null:pe(Y,H,J,we,null);Uo(Y,J)}return null}function Le(Y,H,J,we,Be){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(J)||null,I(H,Y,""+we,Be);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return Y=Y.get(we.key===null?J:we.key)||null,z(H,Y,we,Be);case O:return Y=Y.get(we.key===null?J:we.key)||null,ne(H,Y,we,Be);case W:var Ye=we._init;return Le(Y,H,J,Ye(we._payload),Be)}if(A(we)||Q(we))return Y=Y.get(J)||null,pe(H,Y,we,Be,null);Uo(H,we)}return null}function Ue(Y,H,J,we){for(var Be=null,Ye=null,Ke=H,Je=H=0,tn=null;Ke!==null&&Je<J.length;Je++){Ke.index>Je?(tn=Ke,Ke=null):tn=Ke.sibling;var wt=he(Y,Ke,J[Je],we);if(wt===null){Ke===null&&(Ke=tn);break}n&&Ke&&wt.alternate===null&&i(Y,Ke),H=v(wt,H,Je),Ye===null?Be=wt:Ye.sibling=wt,Ye=wt,Ke=tn}if(Je===J.length)return a(Y,Ke),kt&&Hr(Y,Je),Be;if(Ke===null){for(;Je<J.length;Je++)Ke=ve(Y,J[Je],we),Ke!==null&&(H=v(Ke,H,Je),Ye===null?Be=Ke:Ye.sibling=Ke,Ye=Ke);return kt&&Hr(Y,Je),Be}for(Ke=c(Y,Ke);Je<J.length;Je++)tn=Le(Ke,Y,Je,J[Je],we),tn!==null&&(n&&tn.alternate!==null&&Ke.delete(tn.key===null?Je:tn.key),H=v(tn,H,Je),Ye===null?Be=tn:Ye.sibling=tn,Ye=tn);return n&&Ke.forEach(function(yr){return i(Y,yr)}),kt&&Hr(Y,Je),Be}function Fe(Y,H,J,we){var Be=Q(J);if(typeof Be!="function")throw Error(t(150));if(J=Be.call(J),J==null)throw Error(t(151));for(var Ye=Be=null,Ke=H,Je=H=0,tn=null,wt=J.next();Ke!==null&&!wt.done;Je++,wt=J.next()){Ke.index>Je?(tn=Ke,Ke=null):tn=Ke.sibling;var yr=he(Y,Ke,wt.value,we);if(yr===null){Ke===null&&(Ke=tn);break}n&&Ke&&yr.alternate===null&&i(Y,Ke),H=v(yr,H,Je),Ye===null?Be=yr:Ye.sibling=yr,Ye=yr,Ke=tn}if(wt.done)return a(Y,Ke),kt&&Hr(Y,Je),Be;if(Ke===null){for(;!wt.done;Je++,wt=J.next())wt=ve(Y,wt.value,we),wt!==null&&(H=v(wt,H,Je),Ye===null?Be=wt:Ye.sibling=wt,Ye=wt);return kt&&Hr(Y,Je),Be}for(Ke=c(Y,Ke);!wt.done;Je++,wt=J.next())wt=Le(Ke,Y,Je,wt.value,we),wt!==null&&(n&&wt.alternate!==null&&Ke.delete(wt.key===null?Je:wt.key),H=v(wt,H,Je),Ye===null?Be=wt:Ye.sibling=wt,Ye=wt);return n&&Ke.forEach(function($0){return i(Y,$0)}),kt&&Hr(Y,Je),Be}function Vt(Y,H,J,we){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case G:e:{for(var Be=J.key,Ye=H;Ye!==null;){if(Ye.key===Be){if(Be=J.type,Be===F){if(Ye.tag===7){a(Y,Ye.sibling),H=f(Ye,J.props.children),H.return=Y,Y=H;break e}}else if(Ye.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===W&&Jh(Be)===Ye.type){a(Y,Ye.sibling),H=f(Ye,J.props),H.ref=Pa(Y,Ye,J),H.return=Y,Y=H;break e}a(Y,Ye);break}else i(Y,Ye);Ye=Ye.sibling}J.type===F?(H=Kr(J.props.children,Y.mode,we,J.key),H.return=Y,Y=H):(we=sl(J.type,J.key,J.props,null,Y.mode,we),we.ref=Pa(Y,H,J),we.return=Y,Y=we)}return M(Y);case O:e:{for(Ye=J.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(Y,H.sibling),H=f(H,J.children||[]),H.return=Y,Y=H;break e}else{a(Y,H);break}else i(Y,H);H=H.sibling}H=Du(J,Y.mode,we),H.return=Y,Y=H}return M(Y);case W:return Ye=J._init,Vt(Y,H,Ye(J._payload),we)}if(A(J))return Ue(Y,H,J,we);if(Q(J))return Fe(Y,H,J,we);Uo(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,H!==null&&H.tag===6?(a(Y,H.sibling),H=f(H,J),H.return=Y,Y=H):(a(Y,H),H=Nu(J,Y.mode,we),H.return=Y,Y=H),M(Y)):a(Y,H)}return Vt}var Ts=ef(!0),tf=ef(!1),ko=cr(null),Fo=null,bs=null,Hc=null;function Gc(){Hc=bs=Fo=null}function Vc(n){var i=ko.current;Dt(ko),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function As(n,i){Fo=n,Hc=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Fo===null)throw Error(t(308));bs=n,Fo.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var Gr=null;function Xc(n){Gr===null?Gr=[n]:Gr.push(n)}function nf(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Xc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Fi(n,c)}function Fi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(_t&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Fi(n,a)}return f=c.interleaved,f===null?(i.next=i,Xc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Fi(n,a)}function Oo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,oc(n,a)}}function sf(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?f=v=M:v=v.next=M,a=a.next}while(a!==null);v===null?f=v=i:v=v.next=i}else f=v=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zo(n,i,a,c){var f=n.updateQueue;hr=!1;var v=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,ne=z.next;z.next=null,M===null?v=ne:M.next=ne,M=z;var pe=n.alternate;pe!==null&&(pe=pe.updateQueue,I=pe.lastBaseUpdate,I!==M&&(I===null?pe.firstBaseUpdate=ne:I.next=ne,pe.lastBaseUpdate=z))}if(v!==null){var ve=f.baseState;M=0,pe=ne=z=null,I=v;do{var he=I.lane,Le=I.eventTime;if((c&he)===he){pe!==null&&(pe=pe.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ue=n,Fe=I;switch(he=i,Le=a,Fe.tag){case 1:if(Ue=Fe.payload,typeof Ue=="function"){ve=Ue.call(Le,ve,he);break e}ve=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=Fe.payload,he=typeof Ue=="function"?Ue.call(Le,ve,he):Ue,he==null)break e;ve=X({},ve,he);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,he=f.effects,he===null?f.effects=[I]:he.push(I))}else Le={eventTime:Le,lane:he,tag:I.tag,payload:I.payload,callback:I.callback,next:null},pe===null?(ne=pe=Le,z=ve):pe=pe.next=Le,M|=he;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;he=I,I=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);if(pe===null&&(z=ve),f.baseState=z,f.firstBaseUpdate=ne,f.lastBaseUpdate=pe,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else v===null&&(f.shared.lanes=0);Xr|=M,n.lanes=M,n.memoizedState=ve}}function af(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var La={},wi=cr(La),Na=cr(La),Da=cr(La);function Vr(n){if(n===La)throw Error(t(174));return n}function $c(n,i){switch(Lt(Da,i),Lt(Na,n),Lt(wi,La),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ie(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ie(i,n)}Dt(wi),Lt(wi,i)}function Rs(){Dt(wi),Dt(Na),Dt(Da)}function of(n){Vr(Da.current);var i=Vr(wi.current),a=Ie(i,n.type);i!==a&&(Lt(Na,n),Lt(wi,a))}function Yc(n){Na.current===n&&(Dt(wi),Dt(Na))}var Ft=cr(0);function Bo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var jo=D.ReactCurrentDispatcher,Qc=D.ReactCurrentBatchConfig,Wr=0,Ot=null,$t=null,Jt=null,Ho=!1,Ia=!1,Ua=0,g0=0;function un(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function eu(n,i,a,c,f,v){if(Wr=v,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=n===null||n.memoizedState===null?y0:S0,n=a(c,f),Ia){v=0;do{if(Ia=!1,Ua=0,25<=v)throw Error(t(301));v+=1,Jt=$t=null,i.updateQueue=null,jo.current=w0,n=a(c,f)}while(Ia)}if(jo.current=Wo,i=$t!==null&&$t.next!==null,Wr=0,Jt=$t=Ot=null,Ho=!1,i)throw Error(t(300));return n}function tu(){var n=Ua!==0;return Ua=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ot.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Qn(){if($t===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Jt===null?Ot.memoizedState:Jt.next;if(i!==null)Jt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Ot.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function ka(n,i){return typeof i=="function"?i(n):i}function nu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=$t,f=c.baseQueue,v=a.pending;if(v!==null){if(f!==null){var M=f.next;f.next=v.next,v.next=M}c.baseQueue=f=v,a.pending=null}if(f!==null){v=f.next,c=c.baseState;var I=M=null,z=null,ne=v;do{var pe=ne.lane;if((Wr&pe)===pe)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var ve={lane:pe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(I=z=ve,M=c):z=z.next=ve,Ot.lanes|=pe,Xr|=pe}ne=ne.next}while(ne!==null&&ne!==v);z===null?M=c:z.next=I,si(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do v=f.lane,Ot.lanes|=v,Xr|=v,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,v=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do v=n(v,M.action),M=M.next;while(M!==f);si(v,i.memoizedState)||(Rn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function lf(){}function cf(n,i){var a=Ot,c=Qn(),f=i(),v=!si(c.memoizedState,f);if(v&&(c.memoizedState=f,Rn=!0),c=c.queue,ru(hf.bind(null,a,c,n),[n]),c.getSnapshot!==i||v||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Fa(9,df.bind(null,a,c,f,i),void 0,null),en===null)throw Error(t(349));(Wr&30)!==0||uf(a,i,f)}return f}function uf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function df(n,i,a,c){i.value=a,i.getSnapshot=c,ff(i)&&pf(n)}function hf(n,i,a){return a(function(){ff(i)&&pf(n)})}function ff(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function pf(n){var i=Fi(n,1);i!==null&&ui(i,n,1,-1)}function mf(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i.queue=n,n=n.dispatch=_0.bind(null,Ot,n),[i.memoizedState,n]}function Fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function gf(){return Qn().memoizedState}function Go(n,i,a,c){var f=Mi();Ot.flags|=n,f.memoizedState=Fa(1|i,a,void 0,c===void 0?null:c)}function Vo(n,i,a,c){var f=Qn();c=c===void 0?null:c;var v=void 0;if($t!==null){var M=$t.memoizedState;if(v=M.destroy,c!==null&&Jc(c,M.deps)){f.memoizedState=Fa(i,a,v,c);return}}Ot.flags|=n,f.memoizedState=Fa(1|i,a,v,c)}function vf(n,i){return Go(8390656,8,n,i)}function ru(n,i){return Vo(2048,8,n,i)}function xf(n,i){return Vo(4,2,n,i)}function _f(n,i){return Vo(4,4,n,i)}function yf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Sf(n,i,a){return a=a!=null?a.concat([n]):null,Vo(4,4,yf.bind(null,i,n),a)}function su(){}function wf(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Mf(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Ef(n,i,a){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(si(a,i)||(a=ho(),Ot.lanes|=a,Xr|=a,n.baseState=!0),i)}function v0(n,i){var a=At;At=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{At=a,Qc.transition=c}}function Tf(){return Qn().memoizedState}function x0(n,i,a){var c=vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bf(n))Af(i,a);else if(a=nf(n,i,a,c),a!==null){var f=Sn();ui(a,n,c,f),Rf(a,i,c)}}function _0(n,i,a){var c=vr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bf(n))Af(i,f);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var M=i.lastRenderedState,I=v(M,a);if(f.hasEagerState=!0,f.eagerState=I,si(I,M)){var z=i.interleaved;z===null?(f.next=f,Xc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=nf(n,i,f,c),a!==null&&(f=Sn(),ui(a,n,c,f),Rf(a,i,c))}}function bf(n){var i=n.alternate;return n===Ot||i!==null&&i===Ot}function Af(n,i){Ia=Ho=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Rf(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,oc(n,a)}}var Wo={readContext:Zn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},y0={readContext:Zn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:vf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,yf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Mi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=x0.bind(null,Ot,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:mf,useDebugValue:su,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=mf(!1),i=n[0];return n=v0.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ot,f=Mi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Wr&30)!==0||uf(c,i,a)}f.memoizedState=a;var v={value:a,getSnapshot:i};return f.queue=v,vf(hf.bind(null,c,v,n),[n]),c.flags|=2048,Fa(9,df.bind(null,c,v,a,i),void 0,null),a},useId:function(){var n=Mi(),i=en.identifierPrefix;if(kt){var a=ki,c=Ui;a=(c&~(1<<32-_n(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ua++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=g0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},S0={readContext:Zn,useCallback:wf,useContext:Zn,useEffect:ru,useImperativeHandle:Sf,useInsertionEffect:xf,useLayoutEffect:_f,useMemo:Mf,useReducer:nu,useRef:gf,useState:function(){return nu(ka)},useDebugValue:su,useDeferredValue:function(n){var i=Qn();return Ef(i,$t.memoizedState,n)},useTransition:function(){var n=nu(ka)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:lf,useSyncExternalStore:cf,useId:Tf,unstable_isNewReconciler:!1},w0={readContext:Zn,useCallback:wf,useContext:Zn,useEffect:ru,useImperativeHandle:Sf,useInsertionEffect:xf,useLayoutEffect:_f,useMemo:Mf,useReducer:iu,useRef:gf,useState:function(){return iu(ka)},useDebugValue:su,useDeferredValue:function(n){var i=Qn();return $t===null?i.memoizedState=n:Ef(i,$t.memoizedState,n)},useTransition:function(){var n=iu(ka)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:lf,useSyncExternalStore:cf,useId:Tf,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xo={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Sn(),f=vr(n),v=Oi(c,f);v.payload=i,a!=null&&(v.callback=a),i=fr(n,v,f),i!==null&&(ui(i,n,f,c),Oo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Sn(),f=vr(n),v=Oi(c,f);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=fr(n,v,f),i!==null&&(ui(i,n,f,c),Oo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Sn(),c=vr(n),f=Oi(a,c);f.tag=2,i!=null&&(f.callback=i),i=fr(n,f,c),i!==null&&(ui(i,n,c,a),Oo(i,n,c))}};function Cf(n,i,a,c,f,v,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,M):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(f,v):!0}function Pf(n,i,a){var c=!1,f=ur,v=i.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(f=An(i)?Br:cn.current,c=i.contextTypes,v=(c=c!=null)?Ss(n,f):ur),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=v),i}function Lf(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Xo.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},qc(n);var v=i.contextType;typeof v=="object"&&v!==null?f.context=Zn(v):(v=An(i)?Br:cn.current,f.context=Ss(n,v)),f.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(au(n,i,v,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Xo.enqueueReplaceState(f,f.state,null),zo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,i){try{var a="",c=i;do a+=le(c),c=c.return;while(c);var f=a}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:f,digest:null}}function lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function Nf(n,i,a){a=Oi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jo||(Jo=!0,Eu=c),cu(n,i)},a}function Df(n,i,a){a=Oi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){cu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){cu(n,i),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function If(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new M0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=F0.bind(null,n,i,a),i.then(n,n))}function Uf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function kf(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Oi(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var E0=D.ReactCurrentOwner,Rn=!1;function yn(n,i,a,c){i.child=n===null?tf(i,null,a,c):Ts(i,n.child,a,c)}function Ff(n,i,a,c,f){a=a.render;var v=i.ref;return As(i,f),c=eu(n,i,a,c,v,f),a=tu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,zi(n,i,f)):(kt&&a&&Fc(i),i.flags|=1,yn(n,i,c,f),i.child)}function Of(n,i,a,c,f){if(n===null){var v=a.type;return typeof v=="function"&&!Lu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,zf(n,i,v,c,f)):(n=sl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&f)===0){var M=v.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(M,c)&&n.ref===i.ref)return zi(n,i,f)}return i.flags|=1,n=_r(v,c),n.ref=i.ref,n.return=i,i.child=n}function zf(n,i,a,c,f){if(n!==null){var v=n.memoizedProps;if(Ma(v,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=v,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,zi(n,i,f)}return uu(n,i,a,c,f)}function Bf(n,i,a){var c=i.pendingProps,f=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ls,Hn),Hn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ls,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Lt(Ls,Hn),Hn|=c}else v!==null?(c=v.baseLanes|a,i.memoizedState=null):c=a,Lt(Ls,Hn),Hn|=c;return yn(n,i,f,a),i.child}function jf(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(n,i,a,c,f){var v=An(a)?Br:cn.current;return v=Ss(i,v),As(i,f),a=eu(n,i,a,c,v,f),c=tu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,zi(n,i,f)):(kt&&c&&Fc(i),i.flags|=1,yn(n,i,a,f),i.child)}function Hf(n,i,a,c,f){if(An(a)){var v=!0;Po(i)}else v=!1;if(As(i,f),i.stateNode===null)$o(n,i),Pf(i,a,c),ou(i,a,c,f),c=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var z=M.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Zn(ne):(ne=An(a)?Br:cn.current,ne=Ss(i,ne));var pe=a.getDerivedStateFromProps,ve=typeof pe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==c||z!==ne)&&Lf(i,M,c,ne),hr=!1;var he=i.memoizedState;M.state=he,zo(i,c,M,f),z=i.memoizedState,I!==c||he!==z||bn.current||hr?(typeof pe=="function"&&(au(i,a,pe,c),z=i.memoizedState),(I=hr||Cf(i,a,I,c,he,z,ne))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),M.props=c,M.state=z,M.context=ne,c=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,rf(n,i),I=i.memoizedProps,ne=i.type===i.elementType?I:oi(i.type,I),M.props=ne,ve=i.pendingProps,he=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=Zn(z):(z=An(a)?Br:cn.current,z=Ss(i,z));var Le=a.getDerivedStateFromProps;(pe=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ve||he!==z)&&Lf(i,M,c,z),hr=!1,he=i.memoizedState,M.state=he,zo(i,c,M,f);var Ue=i.memoizedState;I!==ve||he!==Ue||bn.current||hr?(typeof Le=="function"&&(au(i,a,Le,c),Ue=i.memoizedState),(ne=hr||Cf(i,a,ne,c,he,Ue,z)||!1)?(pe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ue,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ue,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ue),M.props=c,M.state=Ue,M.context=z,c=ne):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),c=!1)}return du(n,i,a,c,v,f)}function du(n,i,a,c,f,v){jf(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&Xh(i,a,!1),zi(n,i,v);c=i.stateNode,E0.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=Ts(i,n.child,null,v),i.child=Ts(i,null,I,v)):yn(n,i,I,v),i.memoizedState=c.state,f&&Xh(i,a,!0),i.child}function Gf(n){var i=n.stateNode;i.pendingContext?Vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Vh(n,i.context,!1),$c(n,i.containerInfo)}function Vf(n,i,a,c,f){return Es(),jc(f),i.flags|=256,yn(n,i,a,c),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wf(n,i,a){var c=i.pendingProps,f=Ft.current,v=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Lt(Ft,f&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,v?(c=i.mode,v=i.child,M={mode:"hidden",children:M},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=M):v=al(M,c,0,null),n=Kr(n,c,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=fu(a),i.memoizedState=hu,n):pu(i,M));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return T0(n,i,M,c,I,f,a);if(v){v=c.fallback,M=i.mode,f=n.child,I=f.sibling;var z={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=_r(f,z),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?v=_r(I,v):(v=Kr(v,M,a,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,M=n.child.memoizedState,M=M===null?fu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},v.memoizedState=M,v.childLanes=n.childLanes&~a,i.memoizedState=hu,c}return v=n.child,n=v.sibling,c=_r(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function pu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function qo(n,i,a,c){return c!==null&&jc(c),Ts(i,n.child,null,a),n=pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function T0(n,i,a,c,f,v,M){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(t(422))),qo(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,f=i.mode,c=al({mode:"visible",children:c.children},f,0,null),v=Kr(v,f,M,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,M),i.child.memoizedState=fu(M),i.memoizedState=hu,v);if((i.mode&1)===0)return qo(n,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,v=Error(t(419)),c=lu(v,c,void 0),qo(n,i,M,c)}if(I=(M&n.childLanes)!==0,Rn||I){if(c=en,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Fi(n,f),ui(c,n,f,-1))}return Pu(),c=lu(Error(t(421))),qo(n,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=O0.bind(null,n),f._reactRetry=i,null):(n=v.treeContext,jn=lr(f.nextSibling),Bn=i,kt=!0,ai=null,n!==null&&(Yn[Kn++]=Ui,Yn[Kn++]=ki,Yn[Kn++]=jr,Ui=n.id,ki=n.overflow,jr=i),i=pu(i,c.children),i.flags|=4096,i)}function Xf(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function mu(n,i,a,c,f){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=f)}function qf(n,i,a){var c=i.pendingProps,f=c.revealOrder,v=c.tail;if(yn(n,i,c.children,a),c=Ft.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xf(n,a,i);else if(n.tag===19)Xf(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Lt(Ft,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Bo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),mu(i,!1,f,a,v);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Bo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}mu(i,!0,a,null,v);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $o(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function b0(n,i,a){switch(i.tag){case 3:Gf(i),Es();break;case 5:of(i);break;case 1:An(i.type)&&Po(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Lt(ko,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Wf(n,i,a):(Lt(Ft,Ft.current&1),n=zi(n,i,a),n!==null?n.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return qf(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Ft,Ft.current),c)break;return null;case 22:case 23:return i.lanes=0,Bf(n,i,a)}return zi(n,i,a)}var $f,gu,Yf,Kf;$f=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Yf=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Vr(wi.current);var v=null;switch(a){case"input":f=Ve(n,f),c=Ve(n,c),v=[];break;case"select":f=X({},f,{value:void 0}),c=X({},c,{value:void 0}),v=[];break;case"textarea":f=xe(n,f),c=xe(n,c),v=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ao)}rt(a,c);var M;a=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var I=f[ne];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?v||(v=[]):(v=v||[]).push(ne,null));for(ne in c){var z=c[ne];if(I=f!=null?f[ne]:void 0,c.hasOwnProperty(ne)&&z!==I&&(z!=null||I!=null))if(ne==="style")if(I){for(M in I)!I.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&I[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(v||(v=[]),v.push(ne,a)),a=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(v=v||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Nt("scroll",n),v||I===z||(v=[])):(v=v||[]).push(ne,z))}a&&(v=v||[]).push("style",a);var ne=v;(i.updateQueue=ne)&&(i.flags|=4)}},Kf=function(n,i,a,c){a!==c&&(i.flags|=4)};function Oa(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function A0(n,i,a){var c=i.pendingProps;switch(Oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return An(i.type)&&Co(),dn(i),null;case 3:return c=i.stateNode,Rs(),Dt(bn),Dt(cn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Au(ai),ai=null))),gu(n,i),dn(i),null;case 5:Yc(i);var f=Vr(Da.current);if(a=i.type,n!==null&&i.stateNode!=null)Yf(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Vr(wi.current),Io(i)){c=i.stateNode,a=i.type;var v=i.memoizedProps;switch(c[Si]=i,c[Ra]=v,n=(i.mode&1)!==0,a){case"dialog":Nt("cancel",c),Nt("close",c);break;case"iframe":case"object":case"embed":Nt("load",c);break;case"video":case"audio":for(f=0;f<Ta.length;f++)Nt(Ta[f],c);break;case"source":Nt("error",c);break;case"img":case"image":case"link":Nt("error",c),Nt("load",c);break;case"details":Nt("toggle",c);break;case"input":tt(c,v),Nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Nt("invalid",c);break;case"textarea":ge(c,v),Nt("invalid",c)}rt(a,v),f=null;for(var M in v)if(v.hasOwnProperty(M)){var I=v[M];M==="children"?typeof I=="string"?c.textContent!==I&&(v.suppressHydrationWarning!==!0&&bo(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&bo(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Nt("scroll",c)}switch(a){case"input":et(c),at(c,v,!0);break;case"textarea":et(c),ze(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=Ao)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[Si]=i,n[Ra]=c,$f(n,i,!1,!1),i.stateNode=n;e:{switch(M=xt(a,c),a){case"dialog":Nt("cancel",n),Nt("close",n),f=c;break;case"iframe":case"object":case"embed":Nt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ta.length;f++)Nt(Ta[f],n);f=c;break;case"source":Nt("error",n),f=c;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),f=c;break;case"details":Nt("toggle",n),f=c;break;case"input":tt(n,c),f=Ve(n,c),Nt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=X({},c,{value:void 0}),Nt("invalid",n);break;case"textarea":ge(n,c),f=xe(n,c),Nt("invalid",n);break;default:f=c}rt(a,f),I=f;for(v in I)if(I.hasOwnProperty(v)){var z=I[v];v==="style"?We(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ot(n,z)):v==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&me(n,z):typeof z=="number"&&me(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Nt("scroll",n):z!=null&&R(n,v,z,M))}switch(a){case"input":et(n),at(n,c,!1);break;case"textarea":et(n),ze(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?ee(n,!!c.multiple,v,!1):c.defaultValue!=null&&ee(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)Kf(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(Da.current),Vr(wi.current),Io(i)){if(c=i.stateNode,a=i.memoizedProps,c[Si]=i,(v=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:bo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bo(c.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Si]=i,i.stateNode=c}return dn(i),null;case 13:if(Dt(Ft),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Qh(),Es(),i.flags|=98560,v=!1;else if(v=Io(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Si]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),v=!1}else ai!==null&&(Au(ai),ai=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ft.current&1)!==0?Yt===0&&(Yt=3):Pu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return Rs(),gu(n,i),n===null&&ba(i.stateNode.containerInfo),dn(i),null;case 10:return Vc(i.type._context),dn(i),null;case 17:return An(i.type)&&Co(),dn(i),null;case 19:if(Dt(Ft),v=i.memoizedState,v===null)return dn(i),null;if(c=(i.flags&128)!==0,M=v.rendering,M===null)if(c)Oa(v,!1);else{if(Yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Bo(n),M!==null){for(i.flags|=128,Oa(v,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)v=a,n=c,v.flags&=14680066,M=v.alternate,M===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=M.childLanes,v.lanes=M.lanes,v.child=M.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=M.memoizedProps,v.memoizedState=M.memoizedState,v.updateQueue=M.updateQueue,v.type=M.type,n=M.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Lt(Ft,Ft.current&1|2),i.child}n=n.sibling}v.tail!==null&&Ne()>Ns&&(i.flags|=128,c=!0,Oa(v,!1),i.lanes=4194304)}else{if(!c)if(n=Bo(M),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!M.alternate&&!kt)return dn(i),null}else 2*Ne()-v.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Oa(v,!1),i.lanes=4194304);v.isBackwards?(M.sibling=i.child,i.child=M):(a=v.last,a!==null?a.sibling=M:i.child=M,v.last=M)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Ne(),i.sibling=null,a=Ft.current,Lt(Ft,c?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function R0(n,i){switch(Oc(i),i.tag){case 1:return An(i.type)&&Co(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),Dt(bn),Dt(cn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(Dt(Ft),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Dt(Ft),null;case 4:return Rs(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Yo=!1,hn=!1,C0=typeof WeakSet=="function"?WeakSet:Set,De=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(n,i,c)}else a.current=null}function vu(n,i,a){try{a()}catch(c){jt(n,i,c)}}var Zf=!1;function P0(n,i){if(Cc=mo,n=Rh(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var M=0,I=-1,z=-1,ne=0,pe=0,ve=n,he=null;t:for(;;){for(var Le;ve!==a||f!==0&&ve.nodeType!==3||(I=M+f),ve!==v||c!==0&&ve.nodeType!==3||(z=M+c),ve.nodeType===3&&(M+=ve.nodeValue.length),(Le=ve.firstChild)!==null;)he=ve,ve=Le;for(;;){if(ve===n)break t;if(he===a&&++ne===f&&(I=M),he===v&&++pe===c&&(z=M),(Le=ve.nextSibling)!==null)break;ve=he,he=ve.parentNode}ve=Le}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},mo=!1,De=i;De!==null;)if(i=De,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,De=n;else for(;De!==null;){i=De;try{var Ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ue!==null){var Fe=Ue.memoizedProps,Vt=Ue.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Fe:oi(i.type,Fe),Vt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,De=n;break}De=i.return}return Ue=Zf,Zf=!1,Ue}function za(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var v=f.destroy;f.destroy=void 0,v!==void 0&&vu(i,a,v)}f=f.next}while(f!==c)}}function Ko(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Qf(n){var i=n.alternate;i!==null&&(n.alternate=null,Qf(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Si],delete i[Ra],delete i[Ic],delete i[h0],delete i[f0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jf(n){return n.tag===5||n.tag===3||n.tag===4}function ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}var rn=null,li=!1;function pr(n,i,a){for(a=a.child;a!==null;)tp(n,i,a),a=a.sibling}function tp(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(En,a)}catch{}switch(a.tag){case 5:hn||Ps(a,i);case 6:var c=rn,f=li;rn=null,pr(n,i,a),rn=c,li=f,rn!==null&&(li?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(li?(n=rn,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),va(n)):Dc(rn,a.stateNode));break;case 4:c=rn,f=li,rn=a.stateNode.containerInfo,li=!0,pr(n,i,a),rn=c,li=f;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var v=f,M=v.destroy;v=v.tag,M!==void 0&&((v&2)!==0||(v&4)!==0)&&vu(a,i,M),f=f.next}while(f!==c)}pr(n,i,a);break;case 1:if(!hn&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,i,I)}pr(n,i,a);break;case 21:pr(n,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,pr(n,i,a),hn=c):pr(n,i,a);break;default:pr(n,i,a)}}function np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new C0),i.forEach(function(c){var f=z0.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var v=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:rn=I.stateNode,li=!1;break e;case 3:rn=I.stateNode.containerInfo,li=!0;break e;case 4:rn=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(rn===null)throw Error(t(160));tp(v,M,f),rn=null,li=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ne){jt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ip(i,n),i=i.sibling}function ip(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Ei(n),c&4){try{za(3,n,n.return),Ko(3,n)}catch(Fe){jt(n,n.return,Fe)}try{za(5,n,n.return)}catch(Fe){jt(n,n.return,Fe)}}break;case 1:ci(i,n),Ei(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(ci(i,n),Ei(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var f=n.stateNode;try{me(f,"")}catch(Fe){jt(n,n.return,Fe)}}if(c&4&&(f=n.stateNode,f!=null)){var v=n.memoizedProps,M=a!==null?a.memoizedProps:v,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&Ge(f,v),xt(I,M);var ne=xt(I,v);for(M=0;M<z.length;M+=2){var pe=z[M],ve=z[M+1];pe==="style"?We(f,ve):pe==="dangerouslySetInnerHTML"?ot(f,ve):pe==="children"?me(f,ve):R(f,pe,ve,ne)}switch(I){case"input":Ct(f,v);break;case"textarea":_e(f,v);break;case"select":var he=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?ee(f,!!v.multiple,Le,!1):he!==!!v.multiple&&(v.defaultValue!=null?ee(f,!!v.multiple,v.defaultValue,!0):ee(f,!!v.multiple,v.multiple?[]:"",!1))}f[Ra]=v}catch(Fe){jt(n,n.return,Fe)}}break;case 6:if(ci(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,v=n.memoizedProps;try{f.nodeValue=v}catch(Fe){jt(n,n.return,Fe)}}break;case 3:if(ci(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch(Fe){jt(n,n.return,Fe)}break;case 4:ci(i,n),Ei(n);break;case 13:ci(i,n),Ei(n),f=n.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Mu=Ne())),c&4&&np(n);break;case 22:if(pe=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(ne=hn)||pe,ci(i,n),hn=ne):ci(i,n),Ei(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!pe&&(n.mode&1)!==0)for(De=n,pe=n.child;pe!==null;){for(ve=De=pe;De!==null;){switch(he=De,Le=he.child,he.tag){case 0:case 11:case 14:case 15:za(4,he,he.return);break;case 1:Ps(he,he.return);var Ue=he.stateNode;if(typeof Ue.componentWillUnmount=="function"){c=he,a=he.return;try{i=c,Ue.props=i.memoizedProps,Ue.state=i.memoizedState,Ue.componentWillUnmount()}catch(Fe){jt(c,a,Fe)}}break;case 5:Ps(he,he.return);break;case 22:if(he.memoizedState!==null){ap(ve);continue}}Le!==null?(Le.return=he,De=Le):ap(ve)}pe=pe.sibling}e:for(pe=null,ve=n;;){if(ve.tag===5){if(pe===null){pe=ve;try{f=ve.stateNode,ne?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ve.stateNode,z=ve.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=nt("display",M))}catch(Fe){jt(n,n.return,Fe)}}}else if(ve.tag===6){if(pe===null)try{ve.stateNode.nodeValue=ne?"":ve.memoizedProps}catch(Fe){jt(n,n.return,Fe)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;pe===ve&&(pe=null),ve=ve.return}pe===ve&&(pe=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ci(i,n),Ei(n),c&4&&np(n);break;case 21:break;default:ci(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Jf(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(me(f,""),c.flags&=-33);var v=ep(n);yu(n,v,f);break;case 3:case 4:var M=c.stateNode.containerInfo,I=ep(n);_u(n,I,M);break;default:throw Error(t(161))}}catch(z){jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function L0(n,i,a){De=n,rp(n)}function rp(n,i,a){for(var c=(n.mode&1)!==0;De!==null;){var f=De,v=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||Yo;if(!M){var I=f.alternate,z=I!==null&&I.memoizedState!==null||hn;I=Yo;var ne=hn;if(Yo=M,(hn=z)&&!ne)for(De=f;De!==null;)M=De,z=M.child,M.tag===22&&M.memoizedState!==null?op(f):z!==null?(z.return=M,De=z):op(f);for(;v!==null;)De=v,rp(v),v=v.sibling;De=f,Yo=I,hn=ne}sp(n)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,De=v):sp(n)}}function sp(n){for(;De!==null;){var i=De;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ko(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&af(i,v,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}af(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var pe=ne.memoizedState;if(pe!==null){var ve=pe.dehydrated;ve!==null&&va(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&xu(i)}catch(he){jt(i,i.return,he)}}if(i===n){De=null;break}if(a=i.sibling,a!==null){a.return=i.return,De=a;break}De=i.return}}function ap(n){for(;De!==null;){var i=De;if(i===n){De=null;break}var a=i.sibling;if(a!==null){a.return=i.return,De=a;break}De=i.return}}function op(n){for(;De!==null;){var i=De;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(z){jt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){jt(i,f,z)}}var v=i.return;try{xu(i)}catch(z){jt(i,v,z)}break;case 5:var M=i.return;try{xu(i)}catch(z){jt(i,M,z)}}}catch(z){jt(i,i.return,z)}if(i===n){De=null;break}var I=i.sibling;if(I!==null){I.return=i.return,De=I;break}De=i.return}}var N0=Math.ceil,Zo=D.ReactCurrentDispatcher,Su=D.ReactCurrentOwner,Jn=D.ReactCurrentBatchConfig,_t=0,en=null,Wt=null,sn=0,Hn=0,Ls=cr(0),Yt=0,Ba=null,Xr=0,Qo=0,wu=0,ja=null,Cn=null,Mu=0,Ns=1/0,Bi=null,Jo=!1,Eu=null,mr=null,el=!1,gr=null,tl=0,Ha=0,Tu=null,nl=-1,il=0;function Sn(){return(_t&6)!==0?Ne():nl!==-1?nl:nl=Ne()}function vr(n){return(n.mode&1)===0?1:(_t&2)!==0&&sn!==0?sn&-sn:m0.transition!==null?(il===0&&(il=ho()),il):(n=At,n!==0||(n=window.event,n=n===void 0?16:lh(n.type)),n)}function ui(n,i,a,c){if(50<Ha)throw Ha=0,Tu=null,Error(t(185));ha(n,a,c),((_t&2)===0||n!==en)&&(n===en&&((_t&2)===0&&(Qo|=a),Yt===4&&xr(n,sn)),Pn(n,c),a===1&&_t===0&&(i.mode&1)===0&&(Ns=Ne()+500,Lo&&dr()))}function Pn(n,i){var a=n.callbackNode;Tn(n,i);var c=$n(n,n===en?sn:0);if(c===0)a!==null&&Pe(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Pe(a),i===1)n.tag===0?p0(cp.bind(null,n)):qh(cp.bind(null,n)),u0(function(){(_t&6)===0&&dr()}),a=null;else{switch(eh(c)){case 1:a=it;break;case 4:a=st;break;case 16:a=Pt;break;case 536870912:a=Gt;break;default:a=Pt}a=vp(a,lp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function lp(n,i){if(nl=-1,il=0,(_t&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ds()&&n.callbackNode!==a)return null;var c=$n(n,n===en?sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=rl(n,c);else{i=c;var f=_t;_t|=2;var v=dp();(en!==n||sn!==i)&&(Bi=null,Ns=Ne()+500,$r(n,i));do try{U0();break}catch(I){up(n,I)}while(!0);Gc(),Zo.current=v,_t=f,Wt!==null?i=0:(en=null,sn=0,i=Yt)}if(i!==0){if(i===2&&(f=Or(n),f!==0&&(c=f,i=bu(n,f))),i===1)throw a=Ba,$r(n,0),xr(n,c),Pn(n,Ne()),a;if(i===6)xr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!D0(f)&&(i=rl(n,c),i===2&&(v=Or(n),v!==0&&(c=v,i=bu(n,v))),i===1))throw a=Ba,$r(n,0),xr(n,c),Pn(n,Ne()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Cn,Bi);break;case 3:if(xr(n,c),(c&130023424)===c&&(i=Mu+500-Ne(),10<i)){if($n(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Sn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Nc(Yr.bind(null,n,Cn,Bi),i);break}Yr(n,Cn,Bi);break;case 4:if(xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var M=31-_n(c);v=1<<M,M=i[M],M>f&&(f=M),c&=~v}if(c=f,c=Ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*N0(c/1960))-c,10<c){n.timeoutHandle=Nc(Yr.bind(null,n,Cn,Bi),c);break}Yr(n,Cn,Bi);break;case 5:Yr(n,Cn,Bi);break;default:throw Error(t(329))}}}return Pn(n,Ne()),n.callbackNode===a?lp.bind(null,n):null}function bu(n,i){var a=ja;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&Au(i)),n}function Au(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function D0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],v=f.getSnapshot;f=f.value;try{if(!si(v(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~wu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-_n(i),c=1<<a;n[a]=-1,i&=~c}}function cp(n){if((_t&6)!==0)throw Error(t(327));Ds();var i=$n(n,0);if((i&1)===0)return Pn(n,Ne()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var c=Or(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=Ba,$r(n,0),xr(n,i),Pn(n,Ne()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Cn,Bi),Pn(n,Ne()),null}function Ru(n,i){var a=_t;_t|=1;try{return n(i)}finally{_t=a,_t===0&&(Ns=Ne()+500,Lo&&dr())}}function qr(n){gr!==null&&gr.tag===0&&(_t&6)===0&&Ds();var i=_t;_t|=1;var a=Jn.transition,c=At;try{if(Jn.transition=null,At=1,n)return n()}finally{At=c,Jn.transition=a,_t=i,(_t&6)===0&&dr()}}function Cu(){Hn=Ls.current,Dt(Ls)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,c0(a)),Wt!==null)for(a=Wt.return;a!==null;){var c=a;switch(Oc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Co();break;case 3:Rs(),Dt(bn),Dt(cn),Zc();break;case 5:Yc(c);break;case 4:Rs();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:Vc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(en=n,Wt=n=_r(n.current,null),sn=Hn=i,Yt=0,Ba=null,wu=Qo=Xr=0,Cn=ja=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,v=a.pending;if(v!==null){var M=v.next;v.next=f,c.next=M}a.pending=c}Gr=null}return n}function up(n,i){do{var a=Wt;try{if(Gc(),jo.current=Wo,Ho){for(var c=Ot.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ho=!1}if(Wr=0,Jt=$t=Ot=null,Ia=!1,Ua=0,Su.current=null,a===null||a.return===null){Yt=1,Ba=i,Wt=null;break}e:{var v=n,M=a.return,I=a,z=i;if(i=sn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,pe=I,ve=pe.tag;if((pe.mode&1)===0&&(ve===0||ve===11||ve===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Le=Uf(M);if(Le!==null){Le.flags&=-257,kf(Le,M,I,v,i),Le.mode&1&&If(v,ne,i),i=Le,z=ne;var Ue=i.updateQueue;if(Ue===null){var Fe=new Set;Fe.add(z),i.updateQueue=Fe}else Ue.add(z);break e}else{if((i&1)===0){If(v,ne,i),Pu();break e}z=Error(t(426))}}else if(kt&&I.mode&1){var Vt=Uf(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),kf(Vt,M,I,v,i),jc(Cs(z,I));break e}}v=z=Cs(z,I),Yt!==4&&(Yt=2),ja===null?ja=[v]:ja.push(v),v=M;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var Y=Nf(v,z,i);sf(v,Y);break e;case 1:I=z;var H=v.type,J=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(mr===null||!mr.has(J)))){v.flags|=65536,i&=-i,v.lanes|=i;var we=Df(v,I,i);sf(v,we);break e}}v=v.return}while(v!==null)}fp(a)}catch(Be){i=Be,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function dp(){var n=Zo.current;return Zo.current=Wo,n===null?Wo:n}function Pu(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Xr&268435455)===0&&(Qo&268435455)===0||xr(en,sn)}function rl(n,i){var a=_t;_t|=2;var c=dp();(en!==n||sn!==i)&&(Bi=null,$r(n,i));do try{I0();break}catch(f){up(n,f)}while(!0);if(Gc(),_t=a,Zo.current=c,Wt!==null)throw Error(t(261));return en=null,sn=0,Yt}function I0(){for(;Wt!==null;)hp(Wt)}function U0(){for(;Wt!==null&&!He();)hp(Wt)}function hp(n){var i=gp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?fp(n):Wt=i,Su.current=null}function fp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=A0(a,i,Hn),a!==null){Wt=a;return}}else{if(a=R0(a,i),a!==null){a.flags&=32767,Wt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Yt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);Yt===0&&(Yt=5)}function Yr(n,i,a){var c=At,f=Jn.transition;try{Jn.transition=null,At=1,k0(n,i,a,c)}finally{Jn.transition=f,At=c}return null}function k0(n,i,a,c){do Ds();while(gr!==null);if((_t&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(gv(n,v),n===en&&(Wt=en=null,sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,vp(Pt,function(){return Ds(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Jn.transition,Jn.transition=null;var M=At;At=1;var I=_t;_t|=4,Su.current=null,P0(n,a),ip(a,n),n0(Pc),mo=!!Cc,Pc=Cc=null,n.current=a,L0(a),Ze(),_t=I,At=M,Jn.transition=v}else n.current=a;if(el&&(el=!1,gr=n,tl=f),v=n.pendingLanes,v===0&&(mr=null),ut(a.stateNode),Pn(n,Ne()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Jo)throw Jo=!1,n=Eu,Eu=null,n;return(tl&1)!==0&&n.tag!==0&&Ds(),v=n.pendingLanes,(v&1)!==0?n===Tu?Ha++:(Ha=0,Tu=n):Ha=0,dr(),null}function Ds(){if(gr!==null){var n=eh(tl),i=Jn.transition,a=At;try{if(Jn.transition=null,At=16>n?16:n,gr===null)var c=!1;else{if(n=gr,gr=null,tl=0,(_t&6)!==0)throw Error(t(331));var f=_t;for(_t|=4,De=n.current;De!==null;){var v=De,M=v.child;if((De.flags&16)!==0){var I=v.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ne=I[z];for(De=ne;De!==null;){var pe=De;switch(pe.tag){case 0:case 11:case 15:za(8,pe,v)}var ve=pe.child;if(ve!==null)ve.return=pe,De=ve;else for(;De!==null;){pe=De;var he=pe.sibling,Le=pe.return;if(Qf(pe),pe===ne){De=null;break}if(he!==null){he.return=Le,De=he;break}De=Le}}}var Ue=v.alternate;if(Ue!==null){var Fe=Ue.child;if(Fe!==null){Ue.child=null;do{var Vt=Fe.sibling;Fe.sibling=null,Fe=Vt}while(Fe!==null)}}De=v}}if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,De=M;else e:for(;De!==null;){if(v=De,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:za(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,De=Y;break e}De=v.return}}var H=n.current;for(De=H;De!==null;){M=De;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,De=J;else e:for(M=H;De!==null;){if(I=De,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ko(9,I)}}catch(Be){jt(I,I.return,Be)}if(I===M){De=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,De=we;break e}De=I.return}}if(_t=f,dr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(En,n)}catch{}c=!0}return c}finally{At=a,Jn.transition=i}}return!1}function pp(n,i,a){i=Cs(a,i),i=Nf(n,i,1),n=fr(n,i,1),i=Sn(),n!==null&&(ha(n,1,i),Pn(n,i))}function jt(n,i,a){if(n.tag===3)pp(n,n,a);else for(;i!==null;){if(i.tag===3){pp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=Cs(a,n),n=Df(i,n,1),i=fr(i,n,1),n=Sn(),i!==null&&(ha(i,1,n),Pn(i,n));break}}i=i.return}}function F0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Sn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(sn&a)===a&&(Yt===4||Yt===3&&(sn&130023424)===sn&&500>Ne()-Mu?$r(n,0):wu|=a),Pn(n,i)}function mp(n,i){i===0&&((n.mode&1)===0?i=1:(i=tr,tr<<=1,(tr&130023424)===0&&(tr=4194304)));var a=Sn();n=Fi(n,i),n!==null&&(ha(n,i,a),Pn(n,a))}function O0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),mp(n,a)}function z0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),mp(n,a)}var gp;gp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Rn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,b0(n,i,a);Rn=(n.flags&131072)!==0}else Rn=!1,kt&&(i.flags&1048576)!==0&&$h(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$o(n,i),n=i.pendingProps;var f=Ss(i,cn.current);As(i,a),f=eu(null,i,c,n,f,a);var v=tu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(c)?(v=!0,Po(i)):v=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,qc(i),f.updater=Xo,i.stateNode=f,f._reactInternals=i,ou(i,c,n,a),i=du(null,i,c,!0,v,a)):(i.tag=0,kt&&v&&Fc(i),yn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch($o(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=j0(c),n=oi(c,n),f){case 0:i=uu(null,i,c,n,a);break e;case 1:i=Hf(null,i,c,n,a);break e;case 11:i=Ff(null,i,c,n,a);break e;case 14:i=Of(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),uu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),Hf(n,i,c,f,a);case 3:e:{if(Gf(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,f=v.element,rf(n,i),zo(i,c,null,a);var M=i.memoizedState;if(c=M.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){f=Cs(Error(t(423)),i),i=Vf(n,i,c,a,f);break e}else if(c!==f){f=Cs(Error(t(424)),i),i=Vf(n,i,c,a,f);break e}else for(jn=lr(i.stateNode.containerInfo.firstChild),Bn=i,kt=!0,ai=null,a=tf(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),c===f){i=zi(n,i,a);break e}yn(n,i,c,a)}i=i.child}return i;case 5:return of(i),n===null&&Bc(i),c=i.type,f=i.pendingProps,v=n!==null?n.memoizedProps:null,M=f.children,Lc(c,f)?M=null:v!==null&&Lc(c,v)&&(i.flags|=32),jf(n,i),yn(n,i,M,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return Wf(n,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):yn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),Ff(n,i,c,f,a);case 7:return yn(n,i,i.pendingProps,a),i.child;case 8:return yn(n,i,i.pendingProps.children,a),i.child;case 12:return yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,v=i.memoizedProps,M=f.value,Lt(ko,c._currentValue),c._currentValue=M,v!==null)if(si(v.value,M)){if(v.children===f.children&&!bn.current){i=zi(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var I=v.dependencies;if(I!==null){M=v.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(v.tag===1){z=Oi(-1,a&-a),z.tag=2;var ne=v.updateQueue;if(ne!==null){ne=ne.shared;var pe=ne.pending;pe===null?z.next=z:(z.next=pe.next,pe.next=z),ne.pending=z}}v.lanes|=a,z=v.alternate,z!==null&&(z.lanes|=a),Wc(v.return,a,i),I.lanes|=a;break}z=z.next}}else if(v.tag===10)M=v.type===i.type?null:v.child;else if(v.tag===18){if(M=v.return,M===null)throw Error(t(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Wc(M,a,i),M=v.sibling}else M=v.child;if(M!==null)M.return=v;else for(M=v;M!==null;){if(M===i){M=null;break}if(v=M.sibling,v!==null){v.return=M.return,M=v;break}M=M.return}v=M}yn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,As(i,a),f=Zn(f),c=c(f),i.flags|=1,yn(n,i,c,a),i.child;case 14:return c=i.type,f=oi(c,i.pendingProps),f=oi(c.type,f),Of(n,i,c,f,a);case 15:return zf(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:oi(c,f),$o(n,i),i.tag=1,An(c)?(n=!0,Po(i)):n=!1,As(i,a),Pf(i,c,f),ou(i,c,f,a),du(null,i,c,!0,n,a);case 19:return qf(n,i,a);case 22:return Bf(n,i,a)}throw Error(t(156,i.tag))};function vp(n,i){return ie(n,i)}function B0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,c){return new B0(n,i,a,c)}function Lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function j0(n){if(typeof n=="function")return Lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===re)return 14}return 2}function _r(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,c,f,v){var M=2;if(c=n,typeof n=="function")Lu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Kr(a.children,f,v,i);case oe:M=8,f|=8;break;case de:return n=ei(12,a,i,f|2),n.elementType=de,n.lanes=v,n;case ue:return n=ei(13,a,i,f),n.elementType=ue,n.lanes=v,n;case j:return n=ei(19,a,i,f),n.elementType=j,n.lanes=v,n;case te:return al(a,f,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:M=10;break e;case k:M=9;break e;case ce:M=11;break e;case re:M=14;break e;case W:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(M,a,i,f),i.elementType=n,i.type=c,i.lanes=v,i}function Kr(n,i,a,c){return n=ei(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=ei(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function Nu(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function H0(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ds(0),this.expirationTimes=ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Iu(n,i,a,c,f,v,M,I,z){return n=new H0(n,i,a,I,z),i===1?(i=1,v===!0&&(i|=8)):i=0,v=ei(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(v),n}function G0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function xp(n){if(!n)return ur;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return Wh(n,a,i)}return i}function _p(n,i,a,c,f,v,M,I,z){return n=Iu(a,c,!0,n,f,v,M,I,z),n.context=xp(null),a=n.current,c=Sn(),f=vr(a),v=Oi(c,f),v.callback=i??null,fr(a,v,f),n.current.lanes=f,ha(n,f,c),Pn(n,c),n}function ol(n,i,a,c){var f=i.current,v=Sn(),M=vr(f);return a=xp(a),i.context===null?i.context=a:i.pendingContext=a,i=Oi(v,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=fr(f,i,M),n!==null&&(ui(n,f,M,v),Oo(n,f,M)),M}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uu(n,i){yp(n,i),(n=n.alternate)&&yp(n,i)}function V0(){return null}var Sp=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}cl.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},cl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){ol(null,n,null,null)}),i[Di]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ih();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,n),a===0&&ah(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wp(){}function W0(n,i,a,c,f){if(f){if(typeof c=="function"){var v=c;c=function(){var ne=ll(M);v.call(ne)}}var M=_p(i,c,n,0,null,!1,!1,"",wp);return n._reactRootContainer=M,n[Di]=M.current,ba(n.nodeType===8?n.parentNode:n),qr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ne=ll(z);I.call(ne)}}var z=Iu(n,0,!1,null,null,!1,!1,"",wp);return n._reactRootContainer=z,n[Di]=z.current,ba(n.nodeType===8?n.parentNode:n),qr(function(){ol(i,z,a,c)}),z}function dl(n,i,a,c,f){var v=a._reactRootContainer;if(v){var M=v;if(typeof f=="function"){var I=f;f=function(){var z=ll(M);I.call(z)}}ol(i,M,n,f)}else M=W0(a,i,n,f,c);return ll(M)}th=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Bt(i.pendingLanes);a!==0&&(oc(i,a|1),Pn(i,Ne()),(_t&6)===0&&(Ns=Ne()+500,dr()))}break;case 13:qr(function(){var c=Fi(n,1);if(c!==null){var f=Sn();ui(c,n,1,f)}}),Uu(n,1)}},lc=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var a=Sn();ui(i,n,134217728,a)}Uu(n,134217728)}},nh=function(n){if(n.tag===13){var i=vr(n),a=Fi(n,i);if(a!==null){var c=Sn();ui(a,n,i,c)}Uu(n,i)}},ih=function(){return At},rh=function(n,i){var a=At;try{return At=n,i()}finally{At=a}},Et=function(n,i,a){switch(i){case"input":if(Ct(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ro(c);if(!f)throw Error(t(90));Z(c),Ct(c,f)}}}break;case"textarea":_e(n,a);break;case"select":i=a.value,i!=null&&ee(n,!!a.multiple,i,!1)}},yt=Ru,bt=qr;var X0={usingClientEntryPoint:!1,Events:[Ca,_s,Ro,Oe,qe,Ru]},Ga={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q0={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=se(n),n===null?null:n.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||V0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{En=hl.inject(q0),gt=hl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0,Ln.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return G0(n,i,null,a)},Ln.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",f=Sp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Iu(n,1,!1,null,null,a,!1,c,f),n[Di]=i.current,ba(n.nodeType===8?n.parentNode:n),new ku(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=se(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return qr(n)},Ln.hydrate=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!0,a)},Ln.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,v="",M=Sp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=_p(i,null,n,1,a??null,f,!1,v,M),n[Di]=i.current,ba(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new cl(i)},Ln.render=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!1,a)},Ln.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},Ln.unstable_batchedUpdates=Ru,Ln.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,a,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Pp;function tx(){if(Pp)return Bu.exports;Pp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bu.exports=ex(),Bu.exports}var Lp;function nx(){if(Lp)return fl;Lp=1;var r=tx();return fl.createRoot=r.createRoot,fl.hydrateRoot=r.hydrateRoot,fl}var ix=nx();const rx=wg(ix),Gd=Re.createContext({path:"/",navigate:()=>{}});function sx({children:r}){const[e,t]=Re.useState(()=>window.location.pathname);Re.useEffect(()=>{const o=()=>t(window.location.pathname);return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]);const s=Re.useCallback((o,{replace:l=!1}={})=>{o!==window.location.pathname&&(window.history[l?"replaceState":"pushState"]({},"",o),t(o),window.scrollTo(0,0))},[]);return u.jsx(Gd.Provider,{value:{path:e,navigate:s},children:r})}function ax(){return Re.useContext(Gd)}function ox(){return Re.useContext(Gd).path}function Jl({to:r,children:e,onClick:t,...s}){const{navigate:o}=ax(),l=r&&r.startsWith("/")&&!r.startsWith("//"),h=d=>{t==null||t(d),l&&(d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey||(d.preventDefault(),o(r)))};return u.jsx("a",{href:r,onClick:h,...s,children:e})}const Rr="ykshetty.design@gmail.com",Gu={name:"Yogesh Shetty",logo:"/logos/header_logo.svg"},lx={lines:["Hello — I'm Yogesh Shetty.","A Senior Product Designer","practicing systems thinking,","where business, users, and AI","meet in one design."]},cx={heading:"Products I've contributed to",items:[{name:"Posten Bring"},{name:"ABN AMRO"},{name:"TCS"},{name:"Qualcomm"},{name:"Johnson & Johnson"},{name:"USAA"},{name:"Microsoft"},{name:"JPMorgan Chase"},{name:"HCLTech"},{name:"Swiss Re"}]},ux=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],Wa={askLabel:"What the client asked for",brief:"Make the button bigger.",replyLabel:"What the system revealed →",replyMain:"Can't tap with gloves on — so I used the scanner they had.",replyFoot:"Warehouse sorting — solved the system, not the screen."},pl=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",href:"/case-studies/swiftsort",brief:"More training, better equipment.",card:"Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",cover:"/case-studies/swiftsort/images/cover.jpg",insight:"Moved the decision out of their heads and into the system.",problem:"Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.",solution:"Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${Rr}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",href:"/case-studies/cards",brief:"Put a login on every action.",card:"A 2-hour banking task cut to 60 seconds of self-service.",cover:null,insight:"Authenticated only where the risk is — the rest stays instant.",problem:"Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.",solution:"Added authentication only where the real risk was — browsing stays free, blocking takes seconds.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~90%",label:"Calls deflected"}],mailto:`mailto:${Rr}?subject=Self-service%20cards`,seed:{x:.96,y:.33,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",href:"/case-studies/postoffice",brief:"Rebuild the old terminal, screen by screen.",card:"Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.",cover:null,insight:"Mapped the system first — one frame the whole suite reuses.",problem:"A legacy desktop terminal chained managers to one location and took weeks to learn.",solution:"Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${Rr}?subject=Post-office%20portal`,seed:{x:.02,y:.61,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",href:"/case-studies/postbox",brief:"Sort documents the bank's way, by type.",card:"A complex document archive made self-service — across all three platforms.",cover:null,insight:"Organised by life event — the way clients actually search.",problem:"Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.",solution:"Reorganised around life events — the way clients actually think — so they self-serve.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${Rr}?subject=Postbox`,seed:{x:.98,y:.89,r:-1.6}}],dx=[{id:"alignment",num:"01 · THE SEED",title:"Alignment",callout:{label:"◎ Find the overlap",text:"The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them."},human:["User research","Read the data","Find the real need"],ai:["Cluster the notes","Surface patterns"],desc:"A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant."},{id:"foundation",num:"02 · THE ROOTS",title:"Foundation",callout:{label:"↺ Find the real problem",text:"Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving."},human:["Problem statement","In / out of scope","Feasibility check"],ai:["Edge-case list","Flag tech limits"],desc:"Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up."},{id:"explore",num:"03 · THE SPROUT",title:"Explore",callout:{label:"⚑ Try many, keep one",text:"I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong."},human:["Explore directions","Prototype","Usability testing"],ai:["Mockup variants","First-draft copy"],desc:"First shoots test the air in every direction. The strongest one keeps growing."},{id:"scale",num:"04 · THE CANOPY",title:"Scale",callout:{label:"⧉ Build it once",text:"I turn each decision into a design system, so the team can build the rest without me in the room."},human:["Craft & visual","Design system","Component review"],ai:["Token propagation","Doc automation"],desc:"Branches spread and repeat the same pattern. The system carries it across every limb."},{id:"loop",num:"05 · THE HARVEST",title:"Loop",callout:{label:"⟳ Learn from real use",text:"Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief."},human:["Track metrics","Watch real sessions","Feed the next brief"],ai:["Error & QA sweep","Analytics → insight"],desc:"Fruit ripens and falls, dissolving back into soil — feeding the next brief."}],hx=[{id:"tokenmap",logo:"/logos/tokenmap.svg",alt:"Token Map",logoStyle:{height:20,width:126},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes.",href:"https://www.figma.com/community/plugin/1614997660400970378/token-map"},{id:"intent",logo:"/logos/intent.svg",alt:"Intent",logoStyle:{height:26,width:82},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically.",href:"https://www.figma.com/community/plugin/1610840315625561207/intent"},{id:"focal",logo:"/logos/focalai.svg",alt:"Focal AI",logoStyle:{height:18,width:99},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second.",href:"https://www.figma.com/community/plugin/1651583678533726308/focal-ai"}],Ti={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"/assets/portrait.jpg",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},Td=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],fx="https://linkedin.com/in/ykshetty/details/recommendations/",Zs={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:Rr,href:`mailto:${Rr}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},bd="ys-theme",Mg=Re.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function px(){if(typeof window>"u")return"light";try{const r=window.localStorage.getItem(bd);if(r==="light"||r==="dark")return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function mx({children:r}){const[e,t]=Re.useState(px);Re.useEffect(()=>{const h=document.documentElement;h.setAttribute("data-theme",e),h.style.colorScheme=e;try{window.localStorage.setItem(bd,e)}catch{}},[e]),Re.useEffect(()=>{if(!window.matchMedia)return;const h=window.matchMedia("(prefers-color-scheme: dark)"),d=p=>{let m=!1;try{m=!!window.localStorage.getItem(bd)}catch{m=!1}m||t(p.matches?"dark":"light")};return h.addEventListener("change",d),()=>h.removeEventListener("change",d)},[]);const s=Re.useCallback(h=>{t(d=>h==="light"||h==="dark"?h:d)},[]),o=Re.useCallback(()=>{t(h=>h==="dark"?"light":"dark")},[]),l=Re.useMemo(()=>({theme:e,setTheme:s,toggleTheme:o}),[e,s,o]);return u.jsx(Mg.Provider,{value:l,children:r})}function Eg(){return Re.useContext(Mg)}const Np={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function Tg({subpage:r=!1}){const[e,t]=Re.useState(!1),{theme:s,toggleTheme:o}=Eg(),l=Re.useCallback(()=>t(y=>!y),[]),h=Re.useCallback(()=>t(!1),[]),[d,p]=Re.useState(!1);Re.useEffect(()=>{if(r)return;let y=window.scrollY,w=null;const E=()=>{w=null;const _=window.scrollY,S=_-y;_<80?p(!1):S>4?p(!0):S<-4&&p(!1),y=_},b=()=>{w==null&&(w=requestAnimationFrame(E))};return window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),w&&cancelAnimationFrame(w)}},[r]);const m=y=>r?`/${y}`:y,g=u.jsxs(u.Fragment,{children:[u.jsx("img",{src:Gu.logo,alt:Gu.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),u.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Gu.name})]}),x={display:"flex",alignItems:"center",gap:10,height:20};return u.jsx("header",{className:e?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)",transform:d&&!e?"translateY(-100%)":"translateY(0)",transition:"transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:r?u.jsx(Jl,{to:"/",style:x,children:g}):u.jsx("a",{href:"#top",style:x,children:g})}),u.jsx("button",{className:"hamburger",onClick:l,"aria-label":"Menu","aria-expanded":e,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),u.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[ux.map(y=>u.jsx("a",{href:m(y.href),onClick:h,className:"nav-link",style:Np,children:y.label},y.href)),u.jsx("a",{href:`mailto:${Rr}`,onClick:h,className:"cta-pill",style:{...Np,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),u.jsx("button",{type:"button",onClick:o,title:s==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":s==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:s==="dark"?u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"12",r:"4.2"}),u.jsx("path",{d:"M12 2v2.2M12 19.8V22M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2.2M19.8 12H22M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"})]}):u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:u.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"})})})]})]})})}const gx=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function vx(){const[r,e]=Re.useState(0),t=Re.useRef([]),s=Re.useRef(null),o=Re.useCallback(()=>{t.current.forEach(h=>clearTimeout(h)),t.current=[],s.current&&(cancelAnimationFrame(s.current),s.current=null)},[]),l=Re.useCallback(()=>{o(),e(0),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>{gx.forEach(([h,d])=>{t.current.push(setTimeout(()=>e(h),d))})})})},[o]);return Re.useEffect(()=>(l(),o),[l,o]),{step:r,replay:l}}function xx(r,e,t){Re.useEffect(()=>{const s=r.current,o=e.current,l=o?Array.from(o.querySelectorAll("[data-drift]")):[],h=P=>Math.max(0,Math.min(1,P)),d=()=>{const P=window.innerHeight||1,R=h(window.scrollY/P),D=1-R*.28,G=1-R*.65;if(s&&(s.style.transform=`translateX(-50%) scale(${D.toFixed(3)})`,s.style.opacity=G.toFixed(3)),t&&t.current){const O=h(window.scrollY/(P*.15));t.current.style.opacity=(1-O).toFixed(3)}};let p=1,m=1,g=null,x=!1,y=window.scrollY,w=performance.now();const E=()=>{p+=(m-p)*.12,m+=(1-m)*.04,l.forEach(P=>{P.getAnimations&&P.getAnimations().forEach(R=>{R.playbackRate=p})}),Math.abs(p-1)>.02||Math.abs(m-1)>.02?g=requestAnimationFrame(E):(p=1,m=1,l.forEach(P=>{P.getAnimations&&P.getAnimations().forEach(R=>{R.playbackRate=1})}),x=!1)},b=()=>{x||!l.length||(x=!0,g=requestAnimationFrame(E))},_=()=>{const P=performance.now(),R=Math.abs(window.scrollY-y),D=Math.max(16,P-w),G=R/D;m=Math.min(9,1+G*20),y=window.scrollY,w=P,b()},S=()=>{d(),_()};return window.addEventListener("scroll",S,{passive:!0}),d(),()=>{window.removeEventListener("scroll",S),g&&cancelAnimationFrame(g)}},[r,e,t])}const _x=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],Dp=()=>u.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]});function yx(){const{step:r}=vx(),e=Re.useRef(null),t=Re.useRef(null),s=Re.useRef(null);return xx(e,t,s),u.jsx("div",{style:{position:"relative",height:"100vh"},children:u.jsxs("section",{className:"hero-section","data-hero-step":r,style:{position:"sticky",top:0,zIndex:1,height:"100vh",overflow:"hidden",background:"var(--bg-page)"},children:[u.jsx("div",{ref:t,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:_x.map((o,l)=>u.jsx("div",{"data-drift":"",style:{position:"absolute",width:o.w,height:o.w,maxWidth:o.maxW,maxHeight:o.maxW,top:o.top,bottom:o.bottom,left:o.left,right:o.right,borderRadius:"50%",background:`radial-gradient(circle, ${o.color}, transparent 70%)`,filter:`blur(${o.blur}px)`,animation:o.anim,willChange:"transform"}},l))}),u.jsxs("div",{ref:e,className:"hero-cluster",children:[u.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:Wa.askLabel}),u.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[u.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:u.jsx(Dp,{})}),u.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:u.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:Wa.brief})})]}),u.jsxs("div",{style:{position:"relative",minHeight:72},children:[u.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),u.jsx(Dp,{})]}),u.jsxs("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12},children:Wa.replyLabel}),u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(21px,2.9vw,32px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em"},children:Wa.replyMain}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.5,color:"var(--text-muted)",marginTop:12},children:Wa.replyFoot})]})]})]}),u.jsxs("div",{ref:s,className:"hero-scroll-cue","aria-hidden":"true",children:[u.jsx("span",{className:"hero-scroll-cue__label",children:"Scroll"}),u.jsx("span",{className:"hero-scroll-cue__track",children:u.jsx("span",{className:"hero-scroll-cue__thumb"})})]})]})})}const Ip=.18,Up=1,Sx=1,wx=6,Mx=10,ml=(r,e,t)=>Math.min(t,Math.max(e,r));function Ex(r,e){Re.useEffect(()=>{var m;const t=r.current,s=((m=e.current)==null?void 0:m.filter(Boolean))??[];if(!t||s.length===0)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(g=>{g.style.color=`rgba(255, 255, 255, ${Up})`,g.style.filter="none",g.style.transform="none"});return}const l=s.length-1;let h=!1;const d=()=>{h=!1;const g=t.offsetHeight-window.innerHeight;if(g<=0)return;const x=-t.getBoundingClientRect().top,y=ml(x/g,0,1),w=ml(y/Sx,0,1),E=1/s.length;s.forEach((b,_)=>{const S=ml((w-_*E)/E,0,1),P=Ip+(Up-Ip)*S,R=(1-S)*wx,D=(1-S)*Mx;if(b.style.color=`rgba(255, 255, 255, ${P.toFixed(3)})`,b.style.filter=R>.05?`blur(${R.toFixed(2)}px)`:"none",b.style.transform=`translateY(${D.toFixed(2)}px)`,_===l){const G=ml((S-.6)/.4,0,1);b.style.textShadow=G>0?`0 0 ${(G*24).toFixed(1)}px rgba(255, 255, 255, ${(G*.5).toFixed(3)})`:"none"}})},p=()=>{h||(h=!0,requestAnimationFrame(d))};return d(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[r,e])}const kp=r=>Math.max(0,Math.min(1,r)),Fp=.9,Tx=1;function bx({sectionRef:r}){const e=Re.useRef(null);return Re.useEffect(()=>{const t=e.current,s=r==null?void 0:r.current;if(!t||!s)return;let o=!1;const l=()=>{o=!1;const d=window.innerHeight||1,p=s.offsetHeight-d,m=p>0?kp(-s.getBoundingClientRect().top/p):0,g=1-kp((m-Fp)/(Tx-Fp));t.style.opacity=g.toFixed(3)},h=()=>{o||(o=!0,requestAnimationFrame(l))};return l(),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[r]),u.jsxs("div",{ref:e,className:"hero-scroll-cue hero-scroll-cue--light","aria-hidden":"true",children:[u.jsx("span",{className:"hero-scroll-cue__label",children:"Scroll"}),u.jsx("span",{className:"hero-scroll-cue__track",children:u.jsx("span",{className:"hero-scroll-cue__thumb"})})]})}function Ax({onAccent:r=!1}){const{heading:e,items:t}=cx,s=[...t,...t];return u.jsxs("section",{className:`clients${r?" clients--on-accent":""}`,"aria-label":"Products and companies worked with",children:[u.jsx("div",{className:"clients__eyebrow",children:e}),u.jsx("div",{className:"clients__marquee",children:u.jsx("ul",{className:"clients__track",children:s.map((o,l)=>{const h=l>=t.length;return u.jsx("li",{className:"clients__item","aria-hidden":h?"true":void 0,children:o.logo?u.jsx("img",{src:o.logo,alt:o.name,className:"clients__logo",loading:"lazy"}):u.jsx("span",{className:"clients__word",children:o.name})},`${o.name}-${l}`)})})})]})}function Rx(){const r=Re.useRef(null),e=Re.useRef([]);return Ex(r,e),u.jsx("section",{ref:r,className:"statement-section","aria-label":"Statement",children:u.jsxs("div",{className:"statement-sticky",children:[u.jsxs("div",{className:"statement-content",children:[u.jsx("p",{className:"statement-text",children:lx.lines.map((t,s)=>u.jsx("span",{ref:o=>{e.current[s]=o},className:"statement-line",style:{color:"rgba(255, 255, 255, 0.18)"},children:t},s))}),u.jsx(Ax,{onAccent:!0})]}),u.jsx(bx,{sectionRef:r})]})})}const gl=(r,e,t)=>Math.min(t,Math.max(e,r)),Cx=.5;function Px(r){Re.useEffect(()=>{const e=r.current;if(!e)return;const t=Array.from(e.querySelectorAll(".deck__card")),s=Array.from(e.querySelectorAll(".deck-lead__item")),o=t.length;if(o===0)return;const l=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.matchMedia("(max-width: 760px)").matches,h=()=>{t.forEach(g=>{g.style.transform="",g.style.opacity="",g.style.zIndex="",g.style.pointerEvents="";const x=g.querySelector(".deck__tint");x&&(x.style.opacity="");const y=g.querySelector(".deck__content");y&&(y.style.opacity="")}),s.forEach(g=>{g.style.opacity="",g.style.transform="",g.style.removeProperty("--reveal")})};let d=!1;const p=()=>{if(d=!1,l()){h();return}const g=window.innerHeight,x=e.offsetHeight-g;if(x<=0)return;const w=gl(-e.getBoundingClientRect().top/x,0,1)*(o-1);t.forEach((_,S)=>{const P=S-w;let R=0,D,G,O,F,oe;if(P>=0){const ue=Math.min(P,3);G=-ue*4.5,D=-ue*9,O=1-ue*.035,F=P>3.4?0:1,oe=100-Math.round(ue*10)}else{const ue=Math.min(-P,1);G=ue*14,D=-ue*(g*1.25),R=-ue*60,O=1+ue*.05,F=1,oe=160}const de=gl(1-Math.max(P,0),0,1),T=P>=0?gl(Math.min(P,3)/3,0,1)*Cx:0;_.style.transform=`translate(${R.toFixed(2)}px, ${D.toFixed(2)}px) rotate(${G.toFixed(2)}deg) scale(${O.toFixed(4)})`,_.style.opacity=F.toFixed(3),_.style.zIndex=String(oe),_.style.pointerEvents=de>.6?"auto":"none";const k=_.querySelector(".deck__tint");k&&(k.style.opacity=T.toFixed(3));const ce=_.querySelector(".deck__content");ce&&(ce.style.opacity=de.toFixed(3))});const E=s[0]?s[0].parentElement:null,b=E?E.offsetHeight:0;s.forEach((_,S)=>{_.style.transform=`translateY(${((S-w)*b).toFixed(1)}px)`;const P=gl(1-Math.abs(S-w)/.45,0,1);_.style.setProperty("--reveal",P.toFixed(3))})},m=()=>{d||(d=!0,requestAnimationFrame(p))};return p(),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[r])}const Op=["linear-gradient(135deg, #8b7bff 0%, #5b46c4 100%)","linear-gradient(135deg, #35c2b0 0%, #0d7d72 100%)","linear-gradient(135deg, #7c8bff 0%, #3b3aa0 100%)","linear-gradient(135deg, #b58bff 0%, #7a3fd0 100%)"];function Lx(){const r=Re.useRef(null);return Px(r),u.jsxs("section",{id:"work",className:"case-stack-section",children:[u.jsxs("div",{className:"case-stack__intro","data-reveal":"",children:[u.jsx("div",{className:"case-stack__eyebrow",children:"Case studies"}),u.jsx("h2",{className:"case-stack__heading",children:"Real problems, solved at the root."})]}),u.jsx("div",{ref:r,className:"deck-track",style:{height:`${pl.length*90}vh`},children:u.jsx("div",{className:"deck-sticky",children:u.jsxs("div",{className:"deck-inner",children:[u.jsx("div",{className:"deck-lead","aria-hidden":"true",children:pl.map(e=>u.jsx("div",{className:"deck-lead__item",children:u.jsxs("div",{className:"lead-problem",children:[u.jsx("span",{className:"lead-problem__label",children:"The problem"}),u.jsx("p",{className:"lead-problem__text",children:e.problem})]})},e.id))}),u.jsx("div",{className:"deck",children:pl.map((e,t)=>u.jsxs("article",{className:"deck__card",style:{zIndex:pl.length-t},children:[u.jsx("div",{className:"deck__tint","aria-hidden":"true"}),u.jsxs(Jl,{to:e.href||"#work",className:"deck__content","aria-label":`Read case study: ${e.card}`,children:[u.jsx("div",{className:"deck__meta",children:e.metaLong||e.meta}),u.jsx("div",{className:"deck__label",children:"Design solution"}),u.jsx("p",{className:"deck__solution-headline",children:e.solution}),u.jsxs("div",{className:`deck__media${e.cover?"":" deck__media--ph"}`,style:e.cover?void 0:{backgroundImage:Op[t%Op.length]},children:[e.cover?u.jsx("img",{src:e.cover,alt:"",loading:"lazy"}):u.jsx("span",{className:"deck__ph-index","aria-hidden":"true",children:e.index}),u.jsx("div",{className:"deck__metrics","aria-hidden":"true",children:e.stats.map(s=>u.jsxs("div",{className:"deck__metric",children:[u.jsx("span",{className:"deck__metric-value",children:s.value}),u.jsx("span",{className:"deck__metric-label",children:s.label})]},s.label))})]})]})]},e.id))})]})})})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="161",Nx=0,zp=1,Dx=2,bg=1,Ix=2,Xi=3,Ir=0,kn=1,$i=2,Pr=0,ea=1,eo=2,Bp=3,jp=4,Ux=5,is=100,kx=101,Fx=102,Hp=103,Gp=104,Ox=200,zx=201,Bx=202,jx=203,Ad=204,Rd=205,Hx=206,Gx=207,Vx=208,Wx=209,Xx=210,qx=211,$x=212,Yx=213,Kx=214,Zx=0,Qx=1,Jx=2,ql=3,e_=4,t_=5,n_=6,i_=7,Ag=0,r_=1,s_=2,Lr=0,a_=1,o_=2,l_=3,Rg=4,c_=5,u_=6,Cg=300,ra=301,sa=302,Cd=303,Pd=304,ec=306,Ld=1e3,mi=1001,Nd=1002,Mn=1003,Vp=1004,Xa=1005,In=1006,Vu=1007,ss=1008,Nr=1009,d_=1010,h_=1011,Wd=1012,Pg=1013,Cr=1014,Yi=1015,to=1016,Lg=1017,Ng=1018,as=1020,f_=1021,gi=1023,p_=1024,m_=1025,os=1026,aa=1027,g_=1028,Dg=1029,v_=1030,Ig=1031,Ug=1033,Wu=33776,Xu=33777,qu=33778,$u=33779,Wp=35840,Xp=35841,qp=35842,$p=35843,kg=36196,Yp=37492,Kp=37496,Zp=37808,Qp=37809,Jp=37810,em=37811,tm=37812,nm=37813,im=37814,rm=37815,sm=37816,am=37817,om=37818,lm=37819,cm=37820,um=37821,Yu=36492,dm=36494,hm=36495,x_=36283,fm=36284,pm=36285,mm=36286,Fg=3e3,ls=3001,__=3200,y_=3201,S_=0,w_=1,ii="",an="srgb",Qi="srgb-linear",Xd="display-p3",tc="display-p3-linear",$l="linear",It="srgb",Yl="rec709",Kl="p3",Is=7680,gm=519,M_=512,E_=513,T_=514,Og=515,b_=516,A_=517,R_=518,C_=519,vm=35044,xm="300 es",Dd=1035,Ki=2e3,Zl=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,Id=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function P_(r,e){return(r%e+e)%e}function Zu(r,e,t){return(1-t)*r+t*e}function _m(r){return(r&r-1)===0&&r!==0}function Ud(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,h=this.y-e.y;return this.x=l*s-h*o+e.x,this.y=l*o+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,s,o,l,h,d,p,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m)}set(e,t,s,o,l,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],x=s[7],y=s[2],w=s[5],E=s[8],b=o[0],_=o[3],S=o[6],P=o[1],R=o[4],D=o[7],G=o[2],O=o[5],F=o[8];return l[0]=h*b+d*P+p*G,l[3]=h*_+d*R+p*O,l[6]=h*S+d*D+p*F,l[1]=m*b+g*P+x*G,l[4]=m*_+g*R+x*O,l[7]=m*S+g*D+x*F,l[2]=y*b+w*P+E*G,l[5]=y*_+w*R+E*O,l[8]=y*S+w*D+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return t*h*g-t*d*m-s*l*g+s*d*p+o*l*m-o*h*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=g*h-d*m,y=d*p-g*l,w=m*l-h*p,E=t*x+s*y+o*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=x*b,e[1]=(o*m-g*s)*b,e[2]=(d*s-o*h)*b,e[3]=y*b,e[4]=(g*t-o*p)*b,e[5]=(o*l-d*t)*b,e[6]=w*b,e[7]=(s*p-m*t)*b,e[8]=(h*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,h,d){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-o*m,o*p,-o*(-m*h+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Qu.makeScale(e,t)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new pt;function zg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function L_(){const r=Ql("canvas");return r.style.display="block",r}const ym={};function ta(r){r in ym||(ym[r]=!0,console.warn(r))}const Sm=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wm=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vl={[Qi]:{transfer:$l,primaries:Yl,toReference:r=>r,fromReference:r=>r},[an]:{transfer:It,primaries:Yl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[tc]:{transfer:$l,primaries:Kl,toReference:r=>r.applyMatrix3(wm),fromReference:r=>r.applyMatrix3(Sm)},[Xd]:{transfer:It,primaries:Kl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(wm),fromReference:r=>r.applyMatrix3(Sm).convertLinearToSRGB()}},N_=new Set([Qi,tc]),Rt={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!N_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=vl[e].toReference,o=vl[t].fromReference;return o(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return vl[r].primaries},getTransfer:function(r){return r===ii?$l:vl[r].transfer}};function na(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ju(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class Bg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Ql("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=na(l[h]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(na(t[s]/255)*255):t[s]=na(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D_=0;class jg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,d=o.length;h<d;h++)o[h].isDataTexture?l.push(ed(o[h].image)):l.push(ed(o[h]))}else l=ed(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function ed(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I_=0;class Fn extends la{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=mi,o=mi,l=In,h=ss,d=gi,p=Nr,m=Fn.DEFAULT_ANISOTROPY,g=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=no(),this.name="",this.source=new jg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===ls?an:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?ls:Fg}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ls?an:ii}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Cg;Fn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,s=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,h=e.elements;return this.x=h[0]*t+h[4]*s+h[8]*o+h[12]*l,this.y=h[1]*t+h[5]*s+h[9]*o+h[13]*l,this.z=h[2]*t+h[6]*s+h[10]*o+h[14]*l,this.w=h[3]*t+h[7]*s+h[11]*o+h[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,m=p[0],g=p[4],x=p[8],y=p[1],w=p[5],E=p[9],b=p[2],_=p[6],S=p[10];if(Math.abs(g-y)<.01&&Math.abs(x-b)<.01&&Math.abs(E-_)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+b)<.1&&Math.abs(E+_)<.1&&Math.abs(m+w+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(m+1)/2,D=(w+1)/2,G=(S+1)/2,O=(g+y)/4,F=(x+b)/4,oe=(E+_)/4;return R>D&&R>G?R<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(R),o=O/s,l=F/s):D>G?D<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),s=O/o,l=oe/o):G<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(G),s=F/l,o=oe/l),this.set(s,o,l,t),this}let P=Math.sqrt((_-E)*(_-E)+(x-b)*(x-b)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(_-E)/P,this.y=(x-b)/P,this.z=(y-g)/P,this.w=Math.acos((m+w+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends la{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const o={width:e,height:t,depth:1};s.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ls?an:ii),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Fn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends U_{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Hg extends Fn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class k_ extends Fn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,h,d){let p=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];const y=l[h+0],w=l[h+1],E=l[h+2],b=l[h+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d===1){e[t+0]=y,e[t+1]=w,e[t+2]=E,e[t+3]=b;return}if(x!==b||p!==y||m!==w||g!==E){let _=1-d;const S=p*y+m*w+g*E+x*b,P=S>=0?1:-1,R=1-S*S;if(R>Number.EPSILON){const G=Math.sqrt(R),O=Math.atan2(G,S*P);_=Math.sin(_*O)/G,d=Math.sin(d*O)/G}const D=d*P;if(p=p*_+y*D,m=m*_+w*D,g=g*_+E*D,x=x*_+b*D,_===1-d){const G=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=G,m*=G,g*=G,x*=G}}e[t]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,h){const d=s[o],p=s[o+1],m=s[o+2],g=s[o+3],x=l[h],y=l[h+1],w=l[h+2],E=l[h+3];return e[t]=d*E+g*x+p*w-m*y,e[t+1]=p*E+g*y+m*x-d*w,e[t+2]=m*E+g*w+d*y-p*x,e[t+3]=g*E-d*x-p*y-m*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(o/2),x=d(l/2),y=p(s/2),w=p(o/2),E=p(l/2);switch(h){case"XYZ":this._x=y*g*x+m*w*E,this._y=m*w*x-y*g*E,this._z=m*g*E+y*w*x,this._w=m*g*x-y*w*E;break;case"YXZ":this._x=y*g*x+m*w*E,this._y=m*w*x-y*g*E,this._z=m*g*E-y*w*x,this._w=m*g*x+y*w*E;break;case"ZXY":this._x=y*g*x-m*w*E,this._y=m*w*x+y*g*E,this._z=m*g*E+y*w*x,this._w=m*g*x-y*w*E;break;case"ZYX":this._x=y*g*x-m*w*E,this._y=m*w*x+y*g*E,this._z=m*g*E-y*w*x,this._w=m*g*x+y*w*E;break;case"YZX":this._x=y*g*x+m*w*E,this._y=m*w*x+y*g*E,this._z=m*g*E-y*w*x,this._w=m*g*x-y*w*E;break;case"XZY":this._x=y*g*x-m*w*E,this._y=m*w*x-y*g*E,this._z=m*g*E+y*w*x,this._w=m*g*x+y*w*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],h=t[1],d=t[5],p=t[9],m=t[2],g=t[6],x=t[10],y=s+d+x;if(y>0){const w=.5/Math.sqrt(y+1);this._w=.25/w,this._x=(g-p)*w,this._y=(l-m)*w,this._z=(h-o)*w}else if(s>d&&s>x){const w=2*Math.sqrt(1+s-d-x);this._w=(g-p)/w,this._x=.25*w,this._y=(o+h)/w,this._z=(l+m)/w}else if(d>x){const w=2*Math.sqrt(1+d-s-x);this._w=(l-m)/w,this._x=(o+h)/w,this._y=.25*w,this._z=(p+g)/w}else{const w=2*Math.sqrt(1+x-s-d);this._w=(h-o)/w,this._x=(l+m)/w,this._y=(p+g)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,h=e._w,d=t._x,p=t._y,m=t._z,g=t._w;return this._x=s*g+h*d+o*m-l*p,this._y=o*g+h*p+l*d-s*m,this._z=l*g+h*m+s*p-o*d,this._w=h*g-s*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,h=this._w;let d=h*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const w=1-t;return this._w=w*h+t*this._w,this._x=w*s+t*this._x,this._y=w*o+t*this._y,this._z=w*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-t)*g)/m,y=Math.sin(t*g)/m;return this._w=h*x+this._w*y,this._x=s*x+this._x*y,this._y=o*x+this._y*y,this._z=l*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,h=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*h,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*h,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*h,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*o-d*s),g=2*(d*t-l*o),x=2*(l*s-h*t);return this.x=t+p*m+h*x-d*g,this.y=s+p*g+d*m-l*x,this.z=o+p*x+l*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,h=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*h-s*p,this.z=s*d-o*h,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new $,Mm=new ca;class io{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=l.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(l,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xl.copy(s.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),_l.subVectors(this.max,$a),ks.subVectors(e.a,$a),Fs.subVectors(e.b,$a),Os.subVectors(e.c,$a),Sr.subVectors(Fs,ks),wr.subVectors(Os,Fs),Zr.subVectors(ks,Os);let t=[0,-Sr.z,Sr.y,0,-wr.z,wr.y,0,-Zr.z,Zr.y,Sr.z,0,-Sr.x,wr.z,0,-wr.x,Zr.z,0,-Zr.x,-Sr.y,Sr.x,0,-wr.y,wr.x,0,-Zr.y,Zr.x,0];return!nd(t,ks,Fs,Os,_l)||(t=[1,0,0,0,1,0,0,0,1],!nd(t,ks,Fs,Os,_l))?!1:(yl.crossVectors(Sr,wr),t=[yl.x,yl.y,yl.z],nd(t,ks,Fs,Os,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new $,new $,new $,new $,new $,new $,new $,new $],di=new $,xl=new io,ks=new $,Fs=new $,Os=new $,Sr=new $,wr=new $,Zr=new $,$a=new $,_l=new $,yl=new $,Qr=new $;function nd(r,e,t,s,o){for(let l=0,h=r.length-3;l<=h;l+=3){Qr.fromArray(r,l);const d=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),p=e.dot(Qr),m=t.dot(Qr),g=s.dot(Qr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const F_=new io,Ya=new $,id=new $;class nc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):F_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,h=e.length;l<h;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ya,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(id)),this.expandByPoint(Ya.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new $,rd=new $,Sl=new $,Mr=new $,sd=new $,wl=new $,ad=new $;class Gg{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){rd.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(rd);const l=e.distanceTo(t)*.5,h=-this.direction.dot(Sl),d=Mr.dot(this.direction),p=-Mr.dot(Sl),m=Mr.lengthSq(),g=Math.abs(1-h*h);let x,y,w,E;if(g>0)if(x=h*p-d,y=h*d-p,E=l*g,x>=0)if(y>=-E)if(y<=E){const b=1/g;x*=b,y*=b,w=x*(x+h*y+2*d)+y*(h*x+y+2*p)+m}else y=l,x=Math.max(0,-(h*y+d)),w=-x*x+y*(y+2*p)+m;else y=-l,x=Math.max(0,-(h*y+d)),w=-x*x+y*(y+2*p)+m;else y<=-E?(x=Math.max(0,-(-h*l+d)),y=x>0?-l:Math.min(Math.max(-l,-p),l),w=-x*x+y*(y+2*p)+m):y<=E?(x=0,y=Math.min(Math.max(-l,-p),l),w=y*(y+2*p)+m):(x=Math.max(0,-(h*l+d)),y=x>0?l:Math.min(Math.max(-l,-p),l),w=-x*x+y*(y+2*p)+m);else y=h>0?-l:l,x=Math.max(0,-(h*y+d)),w=-x*x+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(rd).addScaledVector(Sl,y),w}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),o=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(o>l)return null;const h=Math.sqrt(l-o),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,h=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,h=(e.min.y-y.y)*g),s>h||l>o||((l>s||isNaN(s))&&(s=l),(h<o||isNaN(o))&&(o=h),x>=0?(d=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,o,l){sd.subVectors(t,e),wl.subVectors(s,e),ad.crossVectors(sd,wl);let h=this.direction.dot(ad),d;if(h>0){if(o)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Mr.subVectors(this.origin,e);const p=d*this.direction.dot(wl.crossVectors(Mr,wl));if(p<0)return null;const m=d*this.direction.dot(sd.cross(Mr));if(m<0||p+m>h)return null;const g=-d*Mr.dot(ad);return g<0?null:this.at(g/h,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,s,o,l,h,d,p,m,g,x,y,w,E,b,_){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m,g,x,y,w,E,b,_)}set(e,t,s,o,l,h,d,p,m,g,x,y,w,E,b,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=g,S[10]=x,S[14]=y,S[3]=w,S[7]=E,S[11]=b,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),h=1/zs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*h,t[9]=s[9]*h,t[10]=s[10]*h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const y=h*g,w=h*x,E=d*g,b=d*x;t[0]=p*g,t[4]=-p*x,t[8]=m,t[1]=w+E*m,t[5]=y-b*m,t[9]=-d*p,t[2]=b-y*m,t[6]=E+w*m,t[10]=h*p}else if(e.order==="YXZ"){const y=p*g,w=p*x,E=m*g,b=m*x;t[0]=y+b*d,t[4]=E*d-w,t[8]=h*m,t[1]=h*x,t[5]=h*g,t[9]=-d,t[2]=w*d-E,t[6]=b+y*d,t[10]=h*p}else if(e.order==="ZXY"){const y=p*g,w=p*x,E=m*g,b=m*x;t[0]=y-b*d,t[4]=-h*x,t[8]=E+w*d,t[1]=w+E*d,t[5]=h*g,t[9]=b-y*d,t[2]=-h*m,t[6]=d,t[10]=h*p}else if(e.order==="ZYX"){const y=h*g,w=h*x,E=d*g,b=d*x;t[0]=p*g,t[4]=E*m-w,t[8]=y*m+b,t[1]=p*x,t[5]=b*m+y,t[9]=w*m-E,t[2]=-m,t[6]=d*p,t[10]=h*p}else if(e.order==="YZX"){const y=h*p,w=h*m,E=d*p,b=d*m;t[0]=p*g,t[4]=b-y*x,t[8]=E*x+w,t[1]=x,t[5]=h*g,t[9]=-d*g,t[2]=-m*g,t[6]=w*x+E,t[10]=y-b*x}else if(e.order==="XZY"){const y=h*p,w=h*m,E=d*p,b=d*m;t[0]=p*g,t[4]=-x,t[8]=m*g,t[1]=y*x+b,t[5]=h*g,t[9]=w*x-E,t[2]=E*x-w,t[6]=d*g,t[10]=b*x+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,z_)}lookAt(e,t,s){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Er.crossVectors(s,Gn),Er.lengthSq()===0&&(Math.abs(s.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Er.crossVectors(s,Gn)),Er.normalize(),Ml.crossVectors(Gn,Er),o[0]=Er.x,o[4]=Ml.x,o[8]=Gn.x,o[1]=Er.y,o[5]=Ml.y,o[9]=Gn.y,o[2]=Er.z,o[6]=Ml.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],x=s[5],y=s[9],w=s[13],E=s[2],b=s[6],_=s[10],S=s[14],P=s[3],R=s[7],D=s[11],G=s[15],O=o[0],F=o[4],oe=o[8],de=o[12],T=o[1],k=o[5],ce=o[9],ue=o[13],j=o[2],re=o[6],W=o[10],te=o[14],B=o[3],Q=o[7],X=o[11],N=o[15];return l[0]=h*O+d*T+p*j+m*B,l[4]=h*F+d*k+p*re+m*Q,l[8]=h*oe+d*ce+p*W+m*X,l[12]=h*de+d*ue+p*te+m*N,l[1]=g*O+x*T+y*j+w*B,l[5]=g*F+x*k+y*re+w*Q,l[9]=g*oe+x*ce+y*W+w*X,l[13]=g*de+x*ue+y*te+w*N,l[2]=E*O+b*T+_*j+S*B,l[6]=E*F+b*k+_*re+S*Q,l[10]=E*oe+b*ce+_*W+S*X,l[14]=E*de+b*ue+_*te+S*N,l[3]=P*O+R*T+D*j+G*B,l[7]=P*F+R*k+D*re+G*Q,l[11]=P*oe+R*ce+D*W+G*X,l[15]=P*de+R*ue+D*te+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],x=e[6],y=e[10],w=e[14],E=e[3],b=e[7],_=e[11],S=e[15];return E*(+l*p*x-o*m*x-l*d*y+s*m*y+o*d*w-s*p*w)+b*(+t*p*w-t*m*y+l*h*y-o*h*w+o*m*g-l*p*g)+_*(+t*m*x-t*d*w-l*h*x+s*h*w+l*d*g-s*m*g)+S*(-o*d*g-t*p*x+t*d*y+o*h*x-s*h*y+s*p*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=e[9],y=e[10],w=e[11],E=e[12],b=e[13],_=e[14],S=e[15],P=x*_*m-b*y*m+b*p*w-d*_*w-x*p*S+d*y*S,R=E*y*m-g*_*m-E*p*w+h*_*w+g*p*S-h*y*S,D=g*b*m-E*x*m+E*d*w-h*b*w-g*d*S+h*x*S,G=E*x*p-g*b*p-E*d*y+h*b*y+g*d*_-h*x*_,O=t*P+s*R+o*D+l*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=P*F,e[1]=(b*y*l-x*_*l-b*o*w+s*_*w+x*o*S-s*y*S)*F,e[2]=(d*_*l-b*p*l+b*o*m-s*_*m-d*o*S+s*p*S)*F,e[3]=(x*p*l-d*y*l-x*o*m+s*y*m+d*o*w-s*p*w)*F,e[4]=R*F,e[5]=(g*_*l-E*y*l+E*o*w-t*_*w-g*o*S+t*y*S)*F,e[6]=(E*p*l-h*_*l-E*o*m+t*_*m+h*o*S-t*p*S)*F,e[7]=(h*y*l-g*p*l+g*o*m-t*y*m-h*o*w+t*p*w)*F,e[8]=D*F,e[9]=(E*x*l-g*b*l-E*s*w+t*b*w+g*s*S-t*x*S)*F,e[10]=(h*b*l-E*d*l+E*s*m-t*b*m-h*s*S+t*d*S)*F,e[11]=(g*d*l-h*x*l-g*s*m+t*x*m+h*s*w-t*d*w)*F,e[12]=G*F,e[13]=(g*b*o-E*x*o+E*s*y-t*b*y-g*s*_+t*x*_)*F,e[14]=(E*d*o-h*b*o-E*s*p+t*b*p+h*s*_-t*d*_)*F,e[15]=(h*x*o-g*d*o+g*s*p-t*x*p-h*s*y+t*d*y)*F,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,h=e.x,d=e.y,p=e.z,m=l*h,g=l*d;return this.set(m*h+s,m*d-o*p,m*p+o*d,0,m*d+o*p,g*d+s,g*p-o*h,0,m*p-o*d,g*p+o*h,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,h){return this.set(1,s,l,0,e,1,h,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,h=t._y,d=t._z,p=t._w,m=l+l,g=h+h,x=d+d,y=l*m,w=l*g,E=l*x,b=h*g,_=h*x,S=d*x,P=p*m,R=p*g,D=p*x,G=s.x,O=s.y,F=s.z;return o[0]=(1-(b+S))*G,o[1]=(w+D)*G,o[2]=(E-R)*G,o[3]=0,o[4]=(w-D)*O,o[5]=(1-(y+S))*O,o[6]=(_+P)*O,o[7]=0,o[8]=(E+R)*F,o[9]=(_-P)*F,o[10]=(1-(y+b))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=zs.set(o[0],o[1],o[2]).length();const h=zs.set(o[4],o[5],o[6]).length(),d=zs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const m=1/l,g=1/h,x=1/d;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,t.setFromRotationMatrix(hi),s.x=l,s.y=h,s.z=d,this}makePerspective(e,t,s,o,l,h,d=Ki){const p=this.elements,m=2*l/(t-e),g=2*l/(s-o),x=(t+e)/(t-e),y=(s+o)/(s-o);let w,E;if(d===Ki)w=-(h+l)/(h-l),E=-2*h*l/(h-l);else if(d===Zl)w=-h/(h-l),E=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,h,d=Ki){const p=this.elements,m=1/(t-e),g=1/(s-o),x=1/(h-l),y=(t+e)*m,w=(s+o)*g;let E,b;if(d===Ki)E=(h+l)*x,b=-2*x;else if(d===Zl)E=l*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-w,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const zs=new $,hi=new Kt,O_=new $(0,0,0),z_=new $(1,1,1),Er=new $,Ml=new $,Gn=new $,Em=new Kt,Tm=new ca;class ic{constructor(e=0,t=0,s=0,o=ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],h=o[4],d=o[8],p=o[1],m=o[5],g=o[9],x=o[2],y=o[6],w=o[10];switch(t){case"XYZ":this._y=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,w),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,w),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(gn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,w),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-gn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,w),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(gn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,w));break;case"XZY":this._z=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ic.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B_=0;const bm=new $,Bs=new ca,Gi=new Kt,El=new $,Ka=new $,j_=new $,H_=new ca,Am=new $(1,0,0),Rm=new $(0,1,0),Cm=new $(0,0,1),G_={type:"added"},V_={type:"removed"};class On extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new $,t=new ic,s=new ca,o=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function h(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?El.copy(e):El.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ka,El,this.up):Gi.lookAt(El,Ka,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(G_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const h=this.children[s].getObjectByProperty(e,t);if(h!==void 0)return h}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,H_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++){const d=o[l];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),x=h(e.shapes),y=h(e.skeletons),w=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),w.length>0&&(s.animations=w),E.length>0&&(s.nodes=E)}return s.object=o,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}On.DEFAULT_UP=new $(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new $,Vi=new $,od=new $,Wi=new $,js=new $,Hs=new $,Pm=new $,ld=new $,cd=new $,ud=new $;class Ri{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){fi.subVectors(o,t),Vi.subVectors(s,t),od.subVectors(e,t);const h=fi.dot(fi),d=fi.dot(Vi),p=fi.dot(od),m=Vi.dot(Vi),g=Vi.dot(od),x=h*m-d*d;if(x===0)return l.set(0,0,0),null;const y=1/x,w=(m*p-d*g)*y,E=(h*g-d*p)*y;return l.set(1-w-E,E,w)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,s,o,l,h,d,p){return this.getBarycoord(e,t,s,o,Wi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Wi.x),p.addScaledVector(h,Wi.y),p.addScaledVector(d,Wi.z),p)}static isFrontFacing(e,t,s,o){return fi.subVectors(s,t),Vi.subVectors(e,t),fi.cross(Vi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),fi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ri.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let h,d;js.subVectors(o,s),Hs.subVectors(l,s),ld.subVectors(e,s);const p=js.dot(ld),m=Hs.dot(ld);if(p<=0&&m<=0)return t.copy(s);cd.subVectors(e,o);const g=js.dot(cd),x=Hs.dot(cd);if(g>=0&&x<=g)return t.copy(o);const y=p*x-g*m;if(y<=0&&p>=0&&g<=0)return h=p/(p-g),t.copy(s).addScaledVector(js,h);ud.subVectors(e,l);const w=js.dot(ud),E=Hs.dot(ud);if(E>=0&&w<=E)return t.copy(l);const b=w*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(s).addScaledVector(Hs,d);const _=g*E-w*x;if(_<=0&&x-g>=0&&w-E>=0)return Pm.subVectors(l,o),d=(x-g)/(x-g+(w-E)),t.copy(o).addScaledVector(Pm,d);const S=1/(_+b+y);return h=b*S,d=y*S,t.copy(s).addScaledVector(js,h).addScaledVector(Hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function dd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Rt.workingColorSpace){if(e=P_(e,1),t=gn(t,0,1),s=gn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,h=2*s-l;this.r=dd(h,l,e+1/3),this.g=dd(h,l,e),this.b=dd(h,l,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=an){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const h=o[1],d=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(h===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const s=Wg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Rt.fromWorkingColorSpace(pn.copy(this),e),Math.round(gn(pn.r*255,0,255))*65536+Math.round(gn(pn.g*255,0,255))*256+Math.round(gn(pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,o=pn.g,l=pn.b,h=Math.max(s,o,l),d=Math.min(s,o,l);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case s:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-s)/x+2;break;case l:p=(s-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=an){Rt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,o=pn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Tl);const s=Zu(Tr.h,Tl.h,t),o=Zu(Tr.s,Tl.s,t),l=Zu(Tr.l,Tl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new je;je.NAMES=Wg;let W_=0;class ro extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=no(),this.name="",this.type="Material",this.blending=ea,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(s.blending=this.blending),this.side!==Ir&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==Rd&&(s.blendDst=this.blendDst),this.blendEquation!==is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}if(t){const l=o(e.textures),h=o(e.images);l.length>0&&(s.textures=l),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xg extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new $,bl=new Mt;class xi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=vm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ta("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=qa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class qg extends xi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class $g extends xi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Un extends xi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let X_=0;const ti=new Kt,hd=new On,Gs=new $,Vn=new io,Za=new io,nn=new $;class _i extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?$g:qg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,s){return ti.makeTranslation(e,t,s),this.applyMatrix4(ti),this}scale(e,t,s){return ti.makeScale(e,t,s),this.applyMatrix4(ti),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,h=t.length;l<h;l++){const d=t[l];Za.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(Vn.min,Za.min),Vn.expandByPoint(nn),nn.addVectors(Vn.max,Za.max),Vn.expandByPoint(nn)):(Vn.expandByPoint(Za.min),Vn.expandByPoint(Za.max))}Vn.getCenter(s);let o=0;for(let l=0,h=e.count;l<h;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,h=t.length;l<h;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)nn.fromBufferAttribute(d,m),p&&(Gs.fromBufferAttribute(e,m),nn.add(Gs)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,h=t.uv.array,d=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let T=0;T<d;T++)m[T]=new $,g[T]=new $;const x=new $,y=new $,w=new $,E=new Mt,b=new Mt,_=new Mt,S=new $,P=new $;function R(T,k,ce){x.fromArray(o,T*3),y.fromArray(o,k*3),w.fromArray(o,ce*3),E.fromArray(h,T*2),b.fromArray(h,k*2),_.fromArray(h,ce*2),y.sub(x),w.sub(x),b.sub(E),_.sub(E);const ue=1/(b.x*_.y-_.x*b.y);isFinite(ue)&&(S.copy(y).multiplyScalar(_.y).addScaledVector(w,-b.y).multiplyScalar(ue),P.copy(w).multiplyScalar(b.x).addScaledVector(y,-_.x).multiplyScalar(ue),m[T].add(S),m[k].add(S),m[ce].add(S),g[T].add(P),g[k].add(P),g[ce].add(P))}let D=this.groups;D.length===0&&(D=[{start:0,count:s.length}]);for(let T=0,k=D.length;T<k;++T){const ce=D[T],ue=ce.start,j=ce.count;for(let re=ue,W=ue+j;re<W;re+=3)R(s[re+0],s[re+1],s[re+2])}const G=new $,O=new $,F=new $,oe=new $;function de(T){F.fromArray(l,T*3),oe.copy(F);const k=m[T];G.copy(k),G.sub(F.multiplyScalar(F.dot(k))).normalize(),O.crossVectors(oe,k);const ue=O.dot(g[T])<0?-1:1;p[T*4]=G.x,p[T*4+1]=G.y,p[T*4+2]=G.z,p[T*4+3]=ue}for(let T=0,k=D.length;T<k;++T){const ce=D[T],ue=ce.start,j=ce.count;for(let re=ue,W=ue+j;re<W;re+=3)de(s[re+0]),de(s[re+1]),de(s[re+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,w=s.count;y<w;y++)s.setXYZ(y,0,0,0);const o=new $,l=new $,h=new $,d=new $,p=new $,m=new $,g=new $,x=new $;if(e)for(let y=0,w=e.count;y<w;y+=3){const E=e.getX(y+0),b=e.getX(y+1),_=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),h.fromBufferAttribute(t,_),g.subVectors(h,l),x.subVectors(o,l),g.cross(x),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,_),d.add(g),p.add(g),m.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,w=t.count;y<w;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),h.fromBufferAttribute(t,y+2),g.subVectors(h,l),x.subVectors(o,l),g.cross(x),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,x=d.normalized,y=new m.constructor(p.length*g);let w=0,E=0;for(let b=0,_=p.length;b<_;b++){d.isInterleavedBufferAttribute?w=p[b]*d.data.stride+d.offset:w=p[b]*g;for(let S=0;S<g;S++)y[E++]=m[w++]}return new xi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let g=0,x=m.length;g<x;g++){const y=m[g],w=e(y,s);p.push(w)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,y=m.length;x<y;x++){const w=m[x];g.push(w.toJSON(e.data))}g.length>0&&(o[p]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],x=l[m];for(let y=0,w=x.length;y<w;y++)g.push(x[y].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Kt,Jr=new Gg,Al=new nc,Nm=new $,Vs=new $,Ws=new $,Xs=new $,fd=new $,Rl=new $,Cl=new Mt,Pl=new Mt,Ll=new Mt,Dm=new $,Im=new $,Um=new $,Nl=new $,Dl=new $;class Zi extends On{constructor(e=new _i,t=new Xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,h=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Rl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const g=d[p],x=l[p];g!==0&&(fd.fromBufferAttribute(x,e),h?Rl.addScaledVector(fd,g):Rl.addScaledVector(fd.sub(t),g))}t.add(Rl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Al.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Al,Nm)===null||Jr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Lm),!(s.boundingBox!==null&&Jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,h=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,y=l.groups,w=l.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const _=y[E],S=h[_.materialIndex],P=Math.max(_.start,w.start),R=Math.min(d.count,Math.min(_.start+_.count,w.start+w.count));for(let D=P,G=R;D<G;D+=3){const O=d.getX(D),F=d.getX(D+1),oe=d.getX(D+2);o=Il(this,S,e,s,m,g,x,O,F,oe),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),b=Math.min(d.count,w.start+w.count);for(let _=E,S=b;_<S;_+=3){const P=d.getX(_),R=d.getX(_+1),D=d.getX(_+2);o=Il(this,h,e,s,m,g,x,P,R,D),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const _=y[E],S=h[_.materialIndex],P=Math.max(_.start,w.start),R=Math.min(p.count,Math.min(_.start+_.count,w.start+w.count));for(let D=P,G=R;D<G;D+=3){const O=D,F=D+1,oe=D+2;o=Il(this,S,e,s,m,g,x,O,F,oe),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),b=Math.min(p.count,w.start+w.count);for(let _=E,S=b;_<S;_+=3){const P=_,R=_+1,D=_+2;o=Il(this,h,e,s,m,g,x,P,R,D),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function q_(r,e,t,s,o,l,h,d){let p;if(e.side===kn?p=s.intersectTriangle(h,l,o,!0,d):p=s.intersectTriangle(o,l,h,e.side===Ir,d),p===null)return null;Dl.copy(d),Dl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Dl);return m<t.near||m>t.far?null:{distance:m,point:Dl.clone(),object:r}}function Il(r,e,t,s,o,l,h,d,p,m){r.getVertexPosition(d,Vs),r.getVertexPosition(p,Ws),r.getVertexPosition(m,Xs);const g=q_(r,e,t,s,Vs,Ws,Xs,Nl);if(g){o&&(Cl.fromBufferAttribute(o,d),Pl.fromBufferAttribute(o,p),Ll.fromBufferAttribute(o,m),g.uv=Ri.getInterpolation(Nl,Vs,Ws,Xs,Cl,Pl,Ll,new Mt)),l&&(Cl.fromBufferAttribute(l,d),Pl.fromBufferAttribute(l,p),Ll.fromBufferAttribute(l,m),g.uv1=Ri.getInterpolation(Nl,Vs,Ws,Xs,Cl,Pl,Ll,new Mt),g.uv2=g.uv1),h&&(Dm.fromBufferAttribute(h,d),Im.fromBufferAttribute(h,p),Um.fromBufferAttribute(h,m),g.normal=Ri.getInterpolation(Nl,Vs,Ws,Xs,Dm,Im,Um,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new $,materialIndex:0};Ri.getNormal(Vs,Ws,Xs,x.normal),g.face=x}return g}class so extends _i{constructor(e=1,t=1,s=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:h};const d=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const p=[],m=[],g=[],x=[];let y=0,w=0;E("z","y","x",-1,-1,s,t,e,h,l,0),E("z","y","x",1,-1,s,t,-e,h,l,1),E("x","z","y",1,1,e,s,t,o,h,2),E("x","z","y",1,-1,e,s,-t,o,h,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(x,2));function E(b,_,S,P,R,D,G,O,F,oe,de){const T=D/F,k=G/oe,ce=D/2,ue=G/2,j=O/2,re=F+1,W=oe+1;let te=0,B=0;const Q=new $;for(let X=0;X<W;X++){const N=X*k-ue;for(let V=0;V<re;V++){const ye=V*T-ce;Q[b]=ye*P,Q[_]=N*R,Q[S]=j,m.push(Q.x,Q.y,Q.z),Q[b]=0,Q[_]=0,Q[S]=O>0?1:-1,g.push(Q.x,Q.y,Q.z),x.push(V/F),x.push(1-X/oe),te+=1}}for(let X=0;X<oe;X++)for(let N=0;N<F;N++){const V=y+N+re*X,ye=y+N+re*(X+1),q=y+(N+1)+re*(X+1),le=y+(N+1)+re*X;p.push(V,ye,le),p.push(ye,q,le),B+=6}d.addGroup(w,B,de),w+=B,y+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=oa(r[t]);for(const o in s)e[o]=s[o]}return e}function $_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yg(r){return r.getRenderTarget()===null?r.outputColorSpace:Rt.workingColorSpace}const Y_={clone:oa,merge:wn};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=Z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=$_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?t.uniforms[o]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?t.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?t.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?t.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?t.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?t.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?t.uniforms[o]={type:"m4",value:h.toArray()}:t.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Kg extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new $,km=new Mt,Fm=new Mt;class ni extends Kg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,km,Fm),t.subVectors(Fm,km)}setViewOffset(e,t,s,o,l,h){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ku*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;l+=h.offsetX*o/p,t-=h.offsetY*s/m,o*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,$s=1;class Q_ extends On{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(qs,$s,e,t);o.layers=this.layers,this.add(o);const l=new ni(qs,$s,e,t);l.layers=this.layers,this.add(l);const h=new ni(qs,$s,e,t);h.layers=this.layers,this.add(h);const d=new ni(qs,$s,e,t);d.layers=this.layers,this.add(d);const p=new ni(qs,$s,e,t);p.layers=this.layers,this.add(p);const m=new ni(qs,$s,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,h,d,p]=t;for(const m of t)this.remove(m);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Zl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,h,d,p,m,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,h),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,p),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(x,y,w),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Zg extends Fn{constructor(e,t,s,o,l,h,d,p,m,g){e=e!==void 0?e:[],t=t!==void 0?t:ra,super(e,t,s,o,l,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J_ extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];t.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ls?an:ii),this.texture=new Zg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new so(5,5,5),l=new Ci({name:"CubemapFromEquirect",uniforms:oa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Pr});l.uniforms.tEquirect.value=t;const h=new Zi(o,l),d=t.minFilter;return t.minFilter===ss&&(t.minFilter=In),new Q_(1,10,this).update(e,h),t.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(t,s,o);e.setRenderTarget(l)}}const pd=new $,ey=new $,ty=new pt;class ts{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=pd.subVectors(s,t).cross(ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(pd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ty.getNormalMatrix(e),o=this.coplanarPoint(pd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new nc,Ul=new $;class Qg{constructor(e=new ts,t=new ts,s=new ts,o=new ts,l=new ts,h=new ts){this.planes=[e,t,s,o,l,h]}set(e,t,s,o,l,h){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(h),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ki){const s=this.planes,o=e.elements,l=o[0],h=o[1],d=o[2],p=o[3],m=o[4],g=o[5],x=o[6],y=o[7],w=o[8],E=o[9],b=o[10],_=o[11],S=o[12],P=o[13],R=o[14],D=o[15];if(s[0].setComponents(p-l,y-m,_-w,D-S).normalize(),s[1].setComponents(p+l,y+m,_+w,D+S).normalize(),s[2].setComponents(p+h,y+g,_+E,D+P).normalize(),s[3].setComponents(p-h,y-g,_-E,D-P).normalize(),s[4].setComponents(p-d,y-x,_-b,D-R).normalize(),t===Ki)s[5].setComponents(p+d,y+x,_+b,D+R).normalize();else if(t===Zl)s[5].setComponents(d,x,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jg(){let r=null,e=!1,t=null,s=null;function o(l,h){t(l,h),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function ny(r,e){const t=e.isWebGL2,s=new WeakMap;function o(m,g){const x=m.array,y=m.usage,w=x.byteLength,E=r.createBuffer();r.bindBuffer(g,E),r.bufferData(g,x,y),m.onUploadCallback();let b;if(x instanceof Float32Array)b=r.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)b=r.SHORT;else if(x instanceof Uint32Array)b=r.UNSIGNED_INT;else if(x instanceof Int32Array)b=r.INT;else if(x instanceof Int8Array)b=r.BYTE;else if(x instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:E,type:b,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:w}}function l(m,g,x){const y=g.array,w=g._updateRange,E=g.updateRanges;if(r.bindBuffer(x,m),w.count===-1&&E.length===0&&r.bufferSubData(x,0,y),E.length!==0){for(let b=0,_=E.length;b<_;b++){const S=E[b];t?r.bufferSubData(x,S.start*y.BYTES_PER_ELEMENT,y,S.start,S.count):r.bufferSubData(x,S.start*y.BYTES_PER_ELEMENT,y.subarray(S.start,S.start+S.count))}g.clearUpdateRanges()}w.count!==-1&&(t?r.bufferSubData(x,w.offset*y.BYTES_PER_ELEMENT,y,w.offset,w.count):r.bufferSubData(x,w.offset*y.BYTES_PER_ELEMENT,y.subarray(w.offset,w.offset+w.count)),w.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(r.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const y=s.get(m);(!y||y.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=s.get(m);if(x===void 0)s.set(m,o(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(x.buffer,m,g),x.version=m.version}}return{get:h,remove:d,update:p}}class rc extends _i{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,h=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,g=p+1,x=e/d,y=t/p,w=[],E=[],b=[],_=[];for(let S=0;S<g;S++){const P=S*y-h;for(let R=0;R<m;R++){const D=R*x-l;E.push(D,-P,0),b.push(0,0,1),_.push(R/d),_.push(1-S/p)}}for(let S=0;S<p;S++)for(let P=0;P<d;P++){const R=P+m*S,D=P+m*(S+1),G=P+1+m*(S+1),O=P+1+m*S;w.push(R,D,O),w.push(D,G,O)}this.setIndex(w),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(b,3)),this.setAttribute("uv",new Un(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,by=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ry=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Uy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ky=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,US=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Aw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:iy,alphahash_pars_fragment:ry,alphamap_fragment:sy,alphamap_pars_fragment:ay,alphatest_fragment:oy,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:dy,batching_vertex:hy,begin_vertex:fy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:vy,clipping_planes_fragment:xy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:yy,clipping_planes_vertex:Sy,color_fragment:wy,color_pars_fragment:My,color_pars_vertex:Ey,color_vertex:Ty,common:by,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ry,displacementmap_pars_vertex:Cy,displacementmap_vertex:Py,emissivemap_fragment:Ly,emissivemap_pars_fragment:Ny,colorspace_fragment:Dy,colorspace_pars_fragment:Iy,envmap_fragment:Uy,envmap_common_pars_fragment:ky,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Ky,envmap_vertex:zy,fog_vertex:By,fog_pars_vertex:jy,fog_fragment:Hy,fog_pars_fragment:Gy,gradientmap_pars_fragment:Vy,lightmap_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:$y,lights_pars_begin:Yy,lights_toon_fragment:Zy,lights_toon_pars_fragment:Qy,lights_phong_fragment:Jy,lights_phong_pars_fragment:eS,lights_physical_fragment:tS,lights_physical_pars_fragment:nS,lights_fragment_begin:iS,lights_fragment_maps:rS,lights_fragment_end:sS,logdepthbuf_fragment:aS,logdepthbuf_pars_fragment:oS,logdepthbuf_pars_vertex:lS,logdepthbuf_vertex:cS,map_fragment:uS,map_pars_fragment:dS,map_particle_fragment:hS,map_particle_pars_fragment:fS,metalnessmap_fragment:pS,metalnessmap_pars_fragment:mS,morphcolor_vertex:gS,morphnormal_vertex:vS,morphtarget_pars_vertex:xS,morphtarget_vertex:_S,normal_fragment_begin:yS,normal_fragment_maps:SS,normal_pars_fragment:wS,normal_pars_vertex:MS,normal_vertex:ES,normalmap_pars_fragment:TS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:RS,iridescence_pars_fragment:CS,opaque_fragment:PS,packing:LS,premultiplied_alpha_fragment:NS,project_vertex:DS,dithering_fragment:IS,dithering_pars_fragment:US,roughnessmap_fragment:kS,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:zS,shadowmap_vertex:BS,shadowmask_pars_fragment:jS,skinbase_vertex:HS,skinning_pars_vertex:GS,skinning_vertex:VS,skinnormal_vertex:WS,specularmap_fragment:XS,specularmap_pars_fragment:qS,tonemapping_fragment:$S,tonemapping_pars_fragment:YS,transmission_fragment:KS,transmission_pars_fragment:ZS,uv_pars_fragment:QS,uv_pars_vertex:JS,uv_vertex:ew,worldpos_vertex:tw,background_vert:nw,background_frag:iw,backgroundCube_vert:rw,backgroundCube_frag:sw,cube_vert:aw,cube_frag:ow,depth_vert:lw,depth_frag:cw,distanceRGBA_vert:uw,distanceRGBA_frag:dw,equirect_vert:hw,equirect_frag:fw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:vw,meshlambert_vert:xw,meshlambert_frag:_w,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:ww,meshnormal_frag:Mw,meshphong_vert:Ew,meshphong_frag:Tw,meshphysical_vert:bw,meshphysical_frag:Aw,meshtoon_vert:Rw,meshtoon_frag:Cw,points_vert:Pw,points_frag:Lw,shadow_vert:Nw,shadow_frag:Dw,sprite_vert:Iw,sprite_frag:Uw},Ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ai={basic:{uniforms:wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Ae.points,Ae.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Ae.common,Ae.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Ae.sprite,Ae.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:wn([Ae.common,Ae.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:wn([Ae.lights,Ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ai.physical={uniforms:wn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const kl={r:0,b:0,g:0};function kw(r,e,t,s,o,l,h){const d=new je(0);let p=l===!0?0:1,m,g,x=null,y=0,w=null;function E(_,S){let P=!1,R=S.isScene===!0?S.background:null;R&&R.isTexture&&(R=(S.backgroundBlurriness>0?t:e).get(R)),R===null?b(d,p):R&&R.isColor&&(b(R,1),P=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||P)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ec)?(g===void 0&&(g=new Zi(new so(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:oa(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,g.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,(x!==R||y!==R.version||w!==r.toneMapping)&&(g.material.needsUpdate=!0,x=R,y=R.version,w=r.toneMapping),g.layers.enableAll(),_.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Zi(new rc(2,2),new Ci({name:"BackgroundMaterial",uniforms:oa(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||y!==R.version||w!==r.toneMapping)&&(m.material.needsUpdate=!0,x=R,y=R.version,w=r.toneMapping),m.layers.enableAll(),_.unshift(m,m.geometry,m.material,0,0,null))}function b(_,S){_.getRGB(kl,Yg(r)),s.buffers.color.setClear(kl.r,kl.g,kl.b,S,h)}return{getClearColor:function(){return d},setClearColor:function(_,S=1){d.set(_),p=S,b(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(_){p=_,b(d,p)},render:E}}function Fw(r,e,t,s){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),h=s.isWebGL2||l!==null,d={},p=_(null);let m=p,g=!1;function x(j,re,W,te,B){let Q=!1;if(h){const X=b(te,W,re);m!==X&&(m=X,w(m.object)),Q=S(j,te,W,B),Q&&P(j,te,W,B)}else{const X=re.wireframe===!0;(m.geometry!==te.id||m.program!==W.id||m.wireframe!==X)&&(m.geometry=te.id,m.program=W.id,m.wireframe=X,Q=!0)}B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(Q||g)&&(g=!1,oe(j,re,W,te),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function y(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function w(j){return s.isWebGL2?r.bindVertexArray(j):l.bindVertexArrayOES(j)}function E(j){return s.isWebGL2?r.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function b(j,re,W){const te=W.wireframe===!0;let B=d[j.id];B===void 0&&(B={},d[j.id]=B);let Q=B[re.id];Q===void 0&&(Q={},B[re.id]=Q);let X=Q[te];return X===void 0&&(X=_(y()),Q[te]=X),X}function _(j){const re=[],W=[],te=[];for(let B=0;B<o;B++)re[B]=0,W[B]=0,te[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:W,attributeDivisors:te,object:j,attributes:{},index:null}}function S(j,re,W,te){const B=m.attributes,Q=re.attributes;let X=0;const N=W.getAttributes();for(const V in N)if(N[V].location>=0){const q=B[V];let le=Q[V];if(le===void 0&&(V==="instanceMatrix"&&j.instanceMatrix&&(le=j.instanceMatrix),V==="instanceColor"&&j.instanceColor&&(le=j.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;X++}return m.attributesNum!==X||m.index!==te}function P(j,re,W,te){const B={},Q=re.attributes;let X=0;const N=W.getAttributes();for(const V in N)if(N[V].location>=0){let q=Q[V];q===void 0&&(V==="instanceMatrix"&&j.instanceMatrix&&(q=j.instanceMatrix),V==="instanceColor"&&j.instanceColor&&(q=j.instanceColor));const le={};le.attribute=q,q&&q.data&&(le.data=q.data),B[V]=le,X++}m.attributes=B,m.attributesNum=X,m.index=te}function R(){const j=m.newAttributes;for(let re=0,W=j.length;re<W;re++)j[re]=0}function D(j){G(j,0)}function G(j,re){const W=m.newAttributes,te=m.enabledAttributes,B=m.attributeDivisors;W[j]=1,te[j]===0&&(r.enableVertexAttribArray(j),te[j]=1),B[j]!==re&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,re),B[j]=re)}function O(){const j=m.newAttributes,re=m.enabledAttributes;for(let W=0,te=re.length;W<te;W++)re[W]!==j[W]&&(r.disableVertexAttribArray(W),re[W]=0)}function F(j,re,W,te,B,Q,X){X===!0?r.vertexAttribIPointer(j,re,W,B,Q):r.vertexAttribPointer(j,re,W,te,B,Q)}function oe(j,re,W,te){if(s.isWebGL2===!1&&(j.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const B=te.attributes,Q=W.getAttributes(),X=re.defaultAttributeValues;for(const N in Q){const V=Q[N];if(V.location>=0){let ye=B[N];if(ye===void 0&&(N==="instanceMatrix"&&j.instanceMatrix&&(ye=j.instanceMatrix),N==="instanceColor"&&j.instanceColor&&(ye=j.instanceColor)),ye!==void 0){const q=ye.normalized,le=ye.itemSize,fe=t.get(ye);if(fe===void 0)continue;const be=fe.buffer,Te=fe.type,Ee=fe.bytesPerElement,Qe=s.isWebGL2===!0&&(Te===r.INT||Te===r.UNSIGNED_INT||ye.gpuType===Pg);if(ye.isInterleavedBufferAttribute){const et=ye.data,Z=et.stride,zt=ye.offset;if(et.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)G(V.location+Ve,et.meshPerAttribute);j.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)D(V.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Ve=0;Ve<V.locationSize;Ve++)F(V.location+Ve,le/V.locationSize,Te,q,Z*Ee,(zt+le/V.locationSize*Ve)*Ee,Qe)}else{if(ye.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)G(V.location+et,ye.meshPerAttribute);j.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<V.locationSize;et++)D(V.location+et);r.bindBuffer(r.ARRAY_BUFFER,be);for(let et=0;et<V.locationSize;et++)F(V.location+et,le/V.locationSize,Te,q,le*Ee,le/V.locationSize*et*Ee,Qe)}}else if(X!==void 0){const q=X[N];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(V.location,q);break;case 3:r.vertexAttrib3fv(V.location,q);break;case 4:r.vertexAttrib4fv(V.location,q);break;default:r.vertexAttrib1fv(V.location,q)}}}}O()}function de(){ce();for(const j in d){const re=d[j];for(const W in re){const te=re[W];for(const B in te)E(te[B].object),delete te[B];delete re[W]}delete d[j]}}function T(j){if(d[j.id]===void 0)return;const re=d[j.id];for(const W in re){const te=re[W];for(const B in te)E(te[B].object),delete te[B];delete re[W]}delete d[j.id]}function k(j){for(const re in d){const W=d[re];if(W[j.id]===void 0)continue;const te=W[j.id];for(const B in te)E(te[B].object),delete te[B];delete W[j.id]}}function ce(){ue(),g=!0,m!==p&&(m=p,w(m.object))}function ue(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ce,resetDefaultState:ue,dispose:de,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:D,disableUnusedAttributes:O}}function Ow(r,e,t,s){const o=s.isWebGL2;let l;function h(g){l=g}function d(g,x){r.drawArrays(l,g,x),t.update(x,l,1)}function p(g,x,y){if(y===0)return;let w,E;if(o)w=r,E="drawArraysInstanced";else if(w=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[E](l,g,x,y),t.update(x,l,y)}function m(g,x,y){if(y===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let E=0;E<y;E++)this.render(g[E],x[E]);else{w.multiDrawArraysWEBGL(l,g,0,x,0,y);let E=0;for(let b=0;b<y;b++)E+=x[b];t.update(E,l,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function zw(r,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let d=t.precision!==void 0?t.precision:"highp";const p=l(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,D=h||e.has("OES_texture_float"),G=R&&D,O=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:P,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:G,maxSamples:O}}function Bw(r){const e=this;let t=null,s=0,o=!1,l=!1;const h=new ts,d=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const w=x.length!==0||y||s!==0||o;return o=y,s=x.length,w},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,y){t=g(x,y,0)},this.setState=function(x,y,w){const E=x.clippingPlanes,b=x.clipIntersection,_=x.clipShadows,S=r.get(x);if(!o||E===null||E.length===0||l&&!_)l?g(null):m();else{const P=l?0:s,R=P*4;let D=S.clippingState||null;p.value=D,D=g(E,y,R,w);for(let G=0;G!==R;++G)D[G]=t[G];S.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,y,w,E){const b=x!==null?x.length:0;let _=null;if(b!==0){if(_=p.value,E!==!0||_===null){const S=w+b*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(_===null||_.length<S)&&(_=new Float32Array(S));for(let R=0,D=w;R!==b;++R,D+=4)h.copy(x[R]).applyMatrix4(P,d),h.normal.toArray(_,D),_[D+3]=h.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function jw(r){let e=new WeakMap;function t(h,d){return d===Cd?h.mapping=ra:d===Pd&&(h.mapping=sa),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Cd||d===Pd)if(e.has(h)){const p=e.get(h).texture;return t(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new J_(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",o),t(m.texture,h.mapping)}else return null}}return h}function o(h){const d=h.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Hw extends Kg{constructor(e=-1,t=1,s=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,h=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,h=l+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=4,Om=[.125,.215,.35,.446,.526,.582],rs=20,md=new Hw,zm=new je;let gd=null,vd=0,xd=0;const ns=(1+Math.sqrt(5))/2,Ys=1/ns,Bm=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,ns,Ys),new $(0,ns,-Ys),new $(Ys,0,ns),new $(-Ys,0,ns),new $(ns,Ys,0),new $(-ns,Ys,0)];class jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,xd),e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:to,format:gi,colorSpace:Qi,depthBuffer:!1},o=Hm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gw(l)),this._blurMaterial=Vw(l,e,t)}return o}_compileMaterial(e){const t=new Zi(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,s,o){const d=new ni(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(zm),g.toneMapping=Lr,g.autoClear=!1;const w=new Xg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new Zi(new so,w);let b=!1;const _=e.background;_?_.isColor&&(w.color.copy(_),e.background=null,b=!0):(w.color.copy(zm),b=!0);for(let S=0;S<6;S++){const P=S%3;P===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):P===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const R=this._cubeSize;Fl(o,P*R,S>2?R:0,R,R),g.setRenderTarget(o),b&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=_}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ra||e.mapping===sa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=o?this._cubemapMaterial:this._equirectMaterial,h=new Zi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Fl(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(h,md)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Bm[(o-1)%Bm.length];this._blur(e,o-1,o,l,h)}t.autoClear=s}_blur(e,t,s,o,l){const h=this._pingPongRenderTarget;this._halfBlur(e,h,t,s,o,"latitudinal",l),this._halfBlur(h,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Zi(this._lodPlanes[o],m),y=m.uniforms,w=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*w):2*Math.PI/(2*rs-1),b=l/E,_=isFinite(l)?1+Math.floor(g*b):rs;_>rs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rs}`);const S=[];let P=0;for(let F=0;F<rs;++F){const oe=F/b,de=Math.exp(-oe*oe/2);S.push(de),F===0?P+=de:F<_&&(P+=2*de)}for(let F=0;F<S.length;F++)S[F]=S[F]/P;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-s;const D=this._sizeLods[o],G=3*D*(o>R-Qs?o-R+Qs:0),O=4*(this._cubeSize-D);Fl(t,G,O,3*D,2*D),p.setRenderTarget(t),p.render(x,md)}}function Gw(r){const e=[],t=[],s=[];let o=r;const l=r-Qs+1+Om.length;for(let h=0;h<l;h++){const d=Math.pow(2,o);t.push(d);let p=1/d;h>r-Qs?p=Om[h-r+Qs-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,x=1+m,y=[g,g,x,g,x,x,g,g,x,x,g,x],w=6,E=6,b=3,_=2,S=1,P=new Float32Array(b*E*w),R=new Float32Array(_*E*w),D=new Float32Array(S*E*w);for(let O=0;O<w;O++){const F=O%3*2/3-1,oe=O>2?0:-1,de=[F,oe,0,F+2/3,oe,0,F+2/3,oe+1,0,F,oe,0,F+2/3,oe+1,0,F,oe+1,0];P.set(de,b*E*O),R.set(y,_*E*O);const T=[O,O,O,O,O,O];D.set(T,S*E*O)}const G=new _i;G.setAttribute("position",new xi(P,b)),G.setAttribute("uv",new xi(R,_)),G.setAttribute("faceIndex",new xi(D,S)),e.push(G),o>Qs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Hm(r,e,t){const s=new us(r,e,t);return s.texture.mapping=ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function Vw(r,e,t){const s=new Float32Array(rs),o=new $(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Gm(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Vm(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ww(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Cd||p===Pd,g=p===ra||p===sa;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=e.get(d);return t===null&&(t=new jm(r)),x=m?t.fromEquirectangular(d,x):t.fromCubemap(d,x),e.set(d,x),x.texture}else{if(e.has(d))return e.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||g&&x&&o(x)){t===null&&(t=new jm(r));const y=m?t.fromEquirectangular(d):t.fromCubemap(d);return e.set(d,y),d.addEventListener("dispose",l),y.texture}else return null}}}return d}function o(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:h}}function Xw(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function qw(r,e,t,s){const o={},l=new WeakMap;function h(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const b=y.morphAttributes[E];for(let _=0,S=b.length;_<S;_++)e.remove(b[_])}y.removeEventListener("dispose",h),delete o[y.id];const w=l.get(y);w&&(e.remove(w),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(x,y){return o[y.id]===!0||(y.addEventListener("dispose",h),o[y.id]=!0,t.memory.geometries++),y}function p(x){const y=x.attributes;for(const E in y)e.update(y[E],r.ARRAY_BUFFER);const w=x.morphAttributes;for(const E in w){const b=w[E];for(let _=0,S=b.length;_<S;_++)e.update(b[_],r.ARRAY_BUFFER)}}function m(x){const y=[],w=x.index,E=x.attributes.position;let b=0;if(w!==null){const P=w.array;b=w.version;for(let R=0,D=P.length;R<D;R+=3){const G=P[R+0],O=P[R+1],F=P[R+2];y.push(G,O,O,F,F,G)}}else if(E!==void 0){const P=E.array;b=E.version;for(let R=0,D=P.length/3-1;R<D;R+=3){const G=R+0,O=R+1,F=R+2;y.push(G,O,O,F,F,G)}}else return;const _=new(zg(y)?$g:qg)(y,1);_.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,_)}function g(x){const y=l.get(x);if(y){const w=x.index;w!==null&&y.version<w.version&&m(x)}else m(x);return l.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function $w(r,e,t,s){const o=s.isWebGL2;let l;function h(w){l=w}let d,p;function m(w){d=w.type,p=w.bytesPerElement}function g(w,E){r.drawElements(l,E,d,w*p),t.update(E,l,1)}function x(w,E,b){if(b===0)return;let _,S;if(o)_=r,S="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](l,E,d,w*p,b),t.update(E,l,b)}function y(w,E,b){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<b;S++)this.render(w[S]/p,E[S]);else{_.multiDrawElementsWEBGL(l,E,0,d,w,0,b);let S=0;for(let P=0;P<b;P++)S+=E[P];t.update(S,l,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=y}function Yw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,h,d){switch(t.calls++,h){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function Kw(r,e){return r[0]-e[0]}function Zw(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Qw(r,e,t){const s={},o=new Float32Array(8),l=new WeakMap,h=new on,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,x){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=E!==void 0?E.length:0;let _=l.get(g);if(_===void 0||_.count!==b){let re=function(){ue.dispose(),l.delete(g),g.removeEventListener("dispose",re)};var w=re;_!==void 0&&_.texture.dispose();const R=g.morphAttributes.position!==void 0,D=g.morphAttributes.normal!==void 0,G=g.morphAttributes.color!==void 0,O=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],oe=g.morphAttributes.color||[];let de=0;R===!0&&(de=1),D===!0&&(de=2),G===!0&&(de=3);let T=g.attributes.position.count*de,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ce=new Float32Array(T*k*4*b),ue=new Hg(ce,T,k,b);ue.type=Yi,ue.needsUpdate=!0;const j=de*4;for(let W=0;W<b;W++){const te=O[W],B=F[W],Q=oe[W],X=T*k*4*W;for(let N=0;N<te.count;N++){const V=N*j;R===!0&&(h.fromBufferAttribute(te,N),ce[X+V+0]=h.x,ce[X+V+1]=h.y,ce[X+V+2]=h.z,ce[X+V+3]=0),D===!0&&(h.fromBufferAttribute(B,N),ce[X+V+4]=h.x,ce[X+V+5]=h.y,ce[X+V+6]=h.z,ce[X+V+7]=0),G===!0&&(h.fromBufferAttribute(Q,N),ce[X+V+8]=h.x,ce[X+V+9]=h.y,ce[X+V+10]=h.z,ce[X+V+11]=Q.itemSize===4?h.w:1)}}_={count:b,texture:ue,size:new Mt(T,k)},l.set(g,_),g.addEventListener("dispose",re)}let S=0;for(let R=0;R<y.length;R++)S+=y[R];const P=g.morphTargetsRelative?1:1-S;x.getUniforms().setValue(r,"morphTargetBaseInfluence",P),x.getUniforms().setValue(r,"morphTargetInfluences",y),x.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const E=y===void 0?0:y.length;let b=s[g.id];if(b===void 0||b.length!==E){b=[];for(let D=0;D<E;D++)b[D]=[D,0];s[g.id]=b}for(let D=0;D<E;D++){const G=b[D];G[0]=D,G[1]=y[D]}b.sort(Zw);for(let D=0;D<8;D++)D<E&&b[D][1]?(d[D][0]=b[D][0],d[D][1]=b[D][1]):(d[D][0]=Number.MAX_SAFE_INTEGER,d[D][1]=0);d.sort(Kw);const _=g.morphAttributes.position,S=g.morphAttributes.normal;let P=0;for(let D=0;D<8;D++){const G=d[D],O=G[0],F=G[1];O!==Number.MAX_SAFE_INTEGER&&F?(_&&g.getAttribute("morphTarget"+D)!==_[O]&&g.setAttribute("morphTarget"+D,_[O]),S&&g.getAttribute("morphNormal"+D)!==S[O]&&g.setAttribute("morphNormal"+D,S[O]),o[D]=F,P+=F):(_&&g.hasAttribute("morphTarget"+D)===!0&&g.deleteAttribute("morphTarget"+D),S&&g.hasAttribute("morphNormal"+D)===!0&&g.deleteAttribute("morphNormal"+D),o[D]=0)}const R=g.morphTargetsRelative?1:1-P;x.getUniforms().setValue(r,"morphTargetBaseInfluence",R),x.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:p}}function Jw(r,e,t,s){let o=new WeakMap;function l(p){const m=s.render.frame,g=p.geometry,x=e.get(p,g);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return x}function h(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:h}}class ev extends Fn{constructor(e,t,s,o,l,h,d,p,m,g){if(g=g!==void 0?g:os,g!==os&&g!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===os&&(s=Cr),s===void 0&&g===aa&&(s=as),super(null,o,l,h,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Mn,this.minFilter=p!==void 0?p:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tv=new Fn,nv=new ev(1,1);nv.compareFunction=Og;const iv=new Hg,rv=new k_,sv=new Zg,Wm=[],Xm=[],qm=new Float32Array(16),$m=new Float32Array(9),Ym=new Float32Array(4);function ua(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Wm[o];if(l===void 0&&(l=new Float32Array(o),Wm[o]=l),e!==0){s.toArray(l,0);for(let h=1,d=0;h!==e;++h)d+=t,r[h].toArray(l,d)}return l}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function sc(r,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function eM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function rM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Ym.set(s),r.uniformMatrix2fv(this.addr,!1,Ym),Qt(t,s)}}function sM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;$m.set(s),r.uniformMatrix3fv(this.addr,!1,$m),Qt(t,s)}}function aM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;qm.set(s),r.uniformMatrix4fv(this.addr,!1,qm),Qt(t,s)}}function oM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function dM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function pM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function mM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);const l=this.type===r.SAMPLER_2D_SHADOW?nv:tv;t.setTexture2D(e||l,o)}function gM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||rv,o)}function vM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||sv,o)}function xM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||iv,o)}function _M(r){switch(r){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return oM;case 35667:case 35671:return lM;case 35668:case 35672:return cM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return hM;case 36295:return fM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function yM(r,e){r.uniform1fv(this.addr,e)}function SM(r,e){const t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function wM(r,e){const t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function MM(r,e){const t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function EM(r,e){const t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function TM(r,e){const t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function bM(r,e){const t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function AM(r,e){r.uniform1iv(this.addr,e)}function RM(r,e){r.uniform2iv(this.addr,e)}function CM(r,e){r.uniform3iv(this.addr,e)}function PM(r,e){r.uniform4iv(this.addr,e)}function LM(r,e){r.uniform1uiv(this.addr,e)}function NM(r,e){r.uniform2uiv(this.addr,e)}function DM(r,e){r.uniform3uiv(this.addr,e)}function IM(r,e){r.uniform4uiv(this.addr,e)}function UM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2D(e[h]||tv,l[h])}function kM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture3D(e[h]||rv,l[h])}function FM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTextureCube(e[h]||sv,l[h])}function OM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2DArray(e[h]||iv,l[h])}function zM(r){switch(r){case 5126:return yM;case 35664:return SM;case 35665:return wM;case 35666:return MM;case 35674:return EM;case 35675:return TM;case 35676:return bM;case 5124:case 35670:return AM;case 35667:case 35671:return RM;case 35668:case 35672:return CM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return NM;case 36295:return DM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}}class jM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Km(r,e){r.seq.push(e),r.map[e.id]=e}function GM(r,e,t){const s=r.name,o=s.length;for(_d.lastIndex=0;;){const l=_d.exec(s),h=_d.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===o){Km(t,m===void 0?new BM(d,r,e):new jM(d,r,e));break}else{let x=t.map[d];x===void 0&&(x=new HM(d),Km(t,x)),t=x}}}class Wl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),h=e.getUniformLocation(t,l.name);GM(l,h,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,h=t.length;l!==h;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const h=e[o];h.id in t&&s.push(h)}return s}}function Zm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const VM=37297;let WM=0;function XM(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let h=o;h<l;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${t[h]}`)}return s.join(`
`)}function qM(r){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(r);let s;switch(e===t?s="":e===Kl&&t===Yl?s="LinearDisplayP3ToLinearSRGB":e===Yl&&t===Kl&&(s="LinearSRGBToLinearDisplayP3"),r){case Qi:case tc:return[s,"LinearTransferOETF"];case an:case Xd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Qm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const h=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+XM(r.getShaderSource(e),h)}else return o}function $M(r,e){const t=qM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function YM(r,e){let t;switch(e){case a_:t="Linear";break;case o_:t="Reinhard";break;case l_:t="OptimizedCineon";break;case Rg:t="ACESFilmic";break;case u_:t="AgX";break;case c_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function ZM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function QM(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function JM(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),h=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[h]={type:l.type,location:r.getAttribLocation(e,h),locationSize:d}}return t}function Js(r){return r!==""}function Jm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(e1,n1)}const t1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n1(r,e){let t=dt[e];if(t===void 0){const s=t1.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kd(t)}const i1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(r){return r.replace(i1,r1)}function r1(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ng(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ix?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function a1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ra:case sa:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function l1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ag:e="ENVMAP_BLENDING_MULTIPLY";break;case r_:e="ENVMAP_BLENDING_MIX";break;case s_:e="ENVMAP_BLENDING_ADD";break}return e}function c1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function u1(r,e,t,s){const o=r.getContext(),l=t.defines;let h=t.vertexShader,d=t.fragmentShader;const p=s1(t),m=a1(t),g=o1(t),x=l1(t),y=c1(t),w=t.isWebGL2?"":KM(t),E=ZM(t),b=QM(l),_=o.createProgram();let S,P,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Js).join(`
`),S.length>0&&(S+=`
`),P=[w,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Js).join(`
`),P.length>0&&(P+=`
`)):(S=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),P=[w,ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?dt.tonemapping_pars_fragment:"",t.toneMapping!==Lr?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),h=kd(h),h=Jm(h,t),h=eg(h,t),d=kd(d),d=Jm(d,t),d=eg(d,t),h=tg(h),d=tg(d),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const D=R+S+h,G=R+P+d,O=Zm(o,o.VERTEX_SHADER,D),F=Zm(o,o.FRAGMENT_SHADER,G);o.attachShader(_,O),o.attachShader(_,F),t.index0AttributeName!==void 0?o.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function oe(ce){if(r.debug.checkShaderErrors){const ue=o.getProgramInfoLog(_).trim(),j=o.getShaderInfoLog(O).trim(),re=o.getShaderInfoLog(F).trim();let W=!0,te=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,_,O,F);else{const B=Qm(o,O,"vertex"),Q=Qm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Material Name: `+ce.name+`
Material Type: `+ce.type+`

Program Info Log: `+ue+`
`+B+`
`+Q)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(j===""||re==="")&&(te=!1);te&&(ce.diagnostics={runnable:W,programLog:ue,vertexShader:{log:j,prefix:S},fragmentShader:{log:re,prefix:P}})}o.deleteShader(O),o.deleteShader(F),de=new Wl(o,_),T=JM(o,_)}let de;this.getUniforms=function(){return de===void 0&&oe(this),de};let T;this.getAttributes=function(){return T===void 0&&oe(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(_,VM)),k},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=F,this}let d1=0;class h1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new f1(e),t.set(e,s)),s}}class f1{constructor(e){this.id=d1++,this.code=e,this.usedTimes=0}}function p1(r,e,t,s,o,l,h){const d=new Vg,p=new h1,m=new Set,g=[],x=o.isWebGL2,y=o.logarithmicDepthBuffer,w=o.vertexTextures;let E=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return m.add(T),T===0?"uv":`uv${T}`}function S(T,k,ce,ue,j){const re=ue.fog,W=j.geometry,te=T.isMeshStandardMaterial?ue.environment:null,B=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),Q=B&&B.mapping===ec?B.image.height:null,X=b[T.type];T.precision!==null&&(E=o.getMaxPrecision(T.precision),E!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const N=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,V=N!==void 0?N.length:0;let ye=0;W.morphAttributes.position!==void 0&&(ye=1),W.morphAttributes.normal!==void 0&&(ye=2),W.morphAttributes.color!==void 0&&(ye=3);let q,le,fe,be;if(X){const bt=Ai[X];q=bt.vertexShader,le=bt.fragmentShader}else q=T.vertexShader,le=T.fragmentShader,p.update(T),fe=p.getVertexShaderID(T),be=p.getFragmentShaderID(T);const Te=r.getRenderTarget(),Ee=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,et=!!T.map,Z=!!T.matcap,zt=!!B,Ve=!!T.aoMap,tt=!!T.lightMap,Ge=!!T.bumpMap,Ct=!!T.normalMap,at=!!T.displacementMap,L=!!T.emissiveMap,A=!!T.metalnessMap,ee=!!T.roughnessMap,xe=T.anisotropy>0,ge=T.clearcoat>0,_e=T.iridescence>0,ze=T.sheen>0,Ce=T.transmission>0,Ie=xe&&!!T.anisotropyMap,$e=ge&&!!T.clearcoatMap,ot=ge&&!!T.clearcoatNormalMap,me=ge&&!!T.clearcoatRoughnessMap,mt=_e&&!!T.iridescenceMap,ht=_e&&!!T.iridescenceThicknessMap,nt=ze&&!!T.sheenColorMap,We=ze&&!!T.sheenRoughnessMap,ke=!!T.specularMap,rt=!!T.specularColorMap,xt=!!T.specularIntensityMap,Tt=Ce&&!!T.transmissionMap,ct=Ce&&!!T.thicknessMap,Et=!!T.gradientMap,U=!!T.alphaMap,Se=T.alphaTest>0,Me=!!T.alphaHash,Oe=!!T.extensions;let qe=Lr;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(qe=r.toneMapping);const yt={isWebGL2:x,shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:q,fragmentShader:le,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:Qe,instancing:Ee,instancingColor:Ee&&j.instanceColor!==null,supportsVertexTextures:w,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Qi,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:Z,envMap:zt,envMapMode:zt&&B.mapping,envMapCubeUVHeight:Q,aoMap:Ve,lightMap:tt,bumpMap:Ge,normalMap:Ct,displacementMap:w&&at,emissiveMap:L,normalMapObjectSpace:Ct&&T.normalMapType===w_,normalMapTangentSpace:Ct&&T.normalMapType===S_,metalnessMap:A,roughnessMap:ee,anisotropy:xe,anisotropyMap:Ie,clearcoat:ge,clearcoatMap:$e,clearcoatNormalMap:ot,clearcoatRoughnessMap:me,iridescence:_e,iridescenceMap:mt,iridescenceThicknessMap:ht,sheen:ze,sheenColorMap:nt,sheenRoughnessMap:We,specularMap:ke,specularColorMap:rt,specularIntensityMap:xt,transmission:Ce,transmissionMap:Tt,thicknessMap:ct,gradientMap:Et,opaque:T.transparent===!1&&T.blending===ea&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:Se,alphaHash:Me,combine:T.combine,mapUv:et&&_(T.map.channel),aoMapUv:Ve&&_(T.aoMap.channel),lightMapUv:tt&&_(T.lightMap.channel),bumpMapUv:Ge&&_(T.bumpMap.channel),normalMapUv:Ct&&_(T.normalMap.channel),displacementMapUv:at&&_(T.displacementMap.channel),emissiveMapUv:L&&_(T.emissiveMap.channel),metalnessMapUv:A&&_(T.metalnessMap.channel),roughnessMapUv:ee&&_(T.roughnessMap.channel),anisotropyMapUv:Ie&&_(T.anisotropyMap.channel),clearcoatMapUv:$e&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(T.sheenRoughnessMap.channel),specularMapUv:ke&&_(T.specularMap.channel),specularColorMapUv:rt&&_(T.specularColorMap.channel),specularIntensityMapUv:xt&&_(T.specularIntensityMap.channel),transmissionMapUv:Tt&&_(T.transmissionMap.channel),thicknessMapUv:ct&&_(T.thicknessMap.channel),alphaMapUv:U&&_(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ct||xe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(et||U),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ye,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ce.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$i,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Oe&&T.extensions.derivatives===!0,extensionFragDepth:Oe&&T.extensions.fragDepth===!0,extensionDrawBuffers:Oe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Oe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&T.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return yt.vertexUv1s=m.has(1),yt.vertexUv2s=m.has(2),yt.vertexUv3s=m.has(3),m.clear(),yt}function P(T){const k=[];if(T.shaderID?k.push(T.shaderID):(k.push(T.customVertexShaderID),k.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)k.push(ce),k.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(R(k,T),D(k,T),k.push(r.outputColorSpace)),k.push(T.customProgramCacheKey),k.join()}function R(T,k){T.push(k.precision),T.push(k.outputColorSpace),T.push(k.envMapMode),T.push(k.envMapCubeUVHeight),T.push(k.mapUv),T.push(k.alphaMapUv),T.push(k.lightMapUv),T.push(k.aoMapUv),T.push(k.bumpMapUv),T.push(k.normalMapUv),T.push(k.displacementMapUv),T.push(k.emissiveMapUv),T.push(k.metalnessMapUv),T.push(k.roughnessMapUv),T.push(k.anisotropyMapUv),T.push(k.clearcoatMapUv),T.push(k.clearcoatNormalMapUv),T.push(k.clearcoatRoughnessMapUv),T.push(k.iridescenceMapUv),T.push(k.iridescenceThicknessMapUv),T.push(k.sheenColorMapUv),T.push(k.sheenRoughnessMapUv),T.push(k.specularMapUv),T.push(k.specularColorMapUv),T.push(k.specularIntensityMapUv),T.push(k.transmissionMapUv),T.push(k.thicknessMapUv),T.push(k.combine),T.push(k.fogExp2),T.push(k.sizeAttenuation),T.push(k.morphTargetsCount),T.push(k.morphAttributeCount),T.push(k.numDirLights),T.push(k.numPointLights),T.push(k.numSpotLights),T.push(k.numSpotLightMaps),T.push(k.numHemiLights),T.push(k.numRectAreaLights),T.push(k.numDirLightShadows),T.push(k.numPointLightShadows),T.push(k.numSpotLightShadows),T.push(k.numSpotLightShadowsWithMaps),T.push(k.numLightProbes),T.push(k.shadowMapType),T.push(k.toneMapping),T.push(k.numClippingPlanes),T.push(k.numClipIntersection),T.push(k.depthPacking)}function D(T,k){d.disableAll(),k.isWebGL2&&d.enable(0),k.supportsVertexTextures&&d.enable(1),k.instancing&&d.enable(2),k.instancingColor&&d.enable(3),k.matcap&&d.enable(4),k.envMap&&d.enable(5),k.normalMapObjectSpace&&d.enable(6),k.normalMapTangentSpace&&d.enable(7),k.clearcoat&&d.enable(8),k.iridescence&&d.enable(9),k.alphaTest&&d.enable(10),k.vertexColors&&d.enable(11),k.vertexAlphas&&d.enable(12),k.vertexUv1s&&d.enable(13),k.vertexUv2s&&d.enable(14),k.vertexUv3s&&d.enable(15),k.vertexTangents&&d.enable(16),k.anisotropy&&d.enable(17),k.alphaHash&&d.enable(18),k.batching&&d.enable(19),T.push(d.mask),d.disableAll(),k.fog&&d.enable(0),k.useFog&&d.enable(1),k.flatShading&&d.enable(2),k.logarithmicDepthBuffer&&d.enable(3),k.skinning&&d.enable(4),k.morphTargets&&d.enable(5),k.morphNormals&&d.enable(6),k.morphColors&&d.enable(7),k.premultipliedAlpha&&d.enable(8),k.shadowMapEnabled&&d.enable(9),k.useLegacyLights&&d.enable(10),k.doubleSided&&d.enable(11),k.flipSided&&d.enable(12),k.useDepthPacking&&d.enable(13),k.dithering&&d.enable(14),k.transmission&&d.enable(15),k.sheen&&d.enable(16),k.opaque&&d.enable(17),k.pointsUvs&&d.enable(18),k.decodeVideoTexture&&d.enable(19),k.alphaToCoverage&&d.enable(20),T.push(d.mask)}function G(T){const k=b[T.type];let ce;if(k){const ue=Ai[k];ce=Y_.clone(ue.uniforms)}else ce=T.uniforms;return ce}function O(T,k){let ce;for(let ue=0,j=g.length;ue<j;ue++){const re=g[ue];if(re.cacheKey===k){ce=re,++ce.usedTimes;break}}return ce===void 0&&(ce=new u1(r,k,T,l),g.push(ce)),ce}function F(T){if(--T.usedTimes===0){const k=g.indexOf(T);g[k]=g[g.length-1],g.pop(),T.destroy()}}function oe(T){p.remove(T)}function de(){p.dispose()}return{getParameters:S,getProgramCacheKey:P,getUniforms:G,acquireProgram:O,releaseProgram:F,releaseShaderCache:oe,programs:g,dispose:de}}function m1(){let r=new WeakMap;function e(l){let h=r.get(l);return h===void 0&&(h={},r.set(l,h)),h}function t(l){r.delete(l)}function s(l,h,d){r.get(l)[h]=d}function o(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function g1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function h(x,y,w,E,b,_){let S=r[e];return S===void 0?(S={id:x.id,object:x,geometry:y,material:w,groupOrder:E,renderOrder:x.renderOrder,z:b,group:_},r[e]=S):(S.id=x.id,S.object=x,S.geometry=y,S.material=w,S.groupOrder=E,S.renderOrder=x.renderOrder,S.z=b,S.group=_),e++,S}function d(x,y,w,E,b,_){const S=h(x,y,w,E,b,_);w.transmission>0?s.push(S):w.transparent===!0?o.push(S):t.push(S)}function p(x,y,w,E,b,_){const S=h(x,y,w,E,b,_);w.transmission>0?s.unshift(S):w.transparent===!0?o.unshift(S):t.unshift(S)}function m(x,y){t.length>1&&t.sort(x||g1),s.length>1&&s.sort(y||ig),o.length>1&&o.sort(y||ig)}function g(){for(let x=e,y=r.length;x<y;x++){const w=r[x];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:p,finish:g,sort:m}}function v1(){let r=new WeakMap;function e(s,o){const l=r.get(s);let h;return l===void 0?(h=new rg,r.set(s,[h])):o>=l.length?(h=new rg,l.push(h)):h=l[o],h}function t(){r=new WeakMap}return{get:e,dispose:t}}function x1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new je};break;case"SpotLight":t={position:new $,direction:new $,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function _1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let y1=0;function S1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function w1(r,e){const t=new x1,s=_1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)o.probe.push(new $);const l=new $,h=new Kt,d=new Kt;function p(g,x){let y=0,w=0,E=0;for(let ce=0;ce<9;ce++)o.probe[ce].set(0,0,0);let b=0,_=0,S=0,P=0,R=0,D=0,G=0,O=0,F=0,oe=0,de=0;g.sort(S1);const T=x===!0?Math.PI:1;for(let ce=0,ue=g.length;ce<ue;ce++){const j=g[ce],re=j.color,W=j.intensity,te=j.distance,B=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)y+=re.r*W*T,w+=re.g*W*T,E+=re.b*W*T;else if(j.isLightProbe){for(let Q=0;Q<9;Q++)o.probe[Q].addScaledVector(j.sh.coefficients[Q],W);de++}else if(j.isDirectionalLight){const Q=t.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity*T),j.castShadow){const X=j.shadow,N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,o.directionalShadow[b]=N,o.directionalShadowMap[b]=B,o.directionalShadowMatrix[b]=j.shadow.matrix,D++}o.directional[b]=Q,b++}else if(j.isSpotLight){const Q=t.get(j);Q.position.setFromMatrixPosition(j.matrixWorld),Q.color.copy(re).multiplyScalar(W*T),Q.distance=te,Q.coneCos=Math.cos(j.angle),Q.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Q.decay=j.decay,o.spot[S]=Q;const X=j.shadow;if(j.map&&(o.spotLightMap[F]=j.map,F++,X.updateMatrices(j),j.castShadow&&oe++),o.spotLightMatrix[S]=X.matrix,j.castShadow){const N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,o.spotShadow[S]=N,o.spotShadowMap[S]=B,O++}S++}else if(j.isRectAreaLight){const Q=t.get(j);Q.color.copy(re).multiplyScalar(W),Q.halfWidth.set(j.width*.5,0,0),Q.halfHeight.set(0,j.height*.5,0),o.rectArea[P]=Q,P++}else if(j.isPointLight){const Q=t.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity*T),Q.distance=j.distance,Q.decay=j.decay,j.castShadow){const X=j.shadow,N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,o.pointShadow[_]=N,o.pointShadowMap[_]=B,o.pointShadowMatrix[_]=j.shadow.matrix,G++}o.point[_]=Q,_++}else if(j.isHemisphereLight){const Q=t.get(j);Q.skyColor.copy(j.color).multiplyScalar(W*T),Q.groundColor.copy(j.groundColor).multiplyScalar(W*T),o.hemi[R]=Q,R++}}P>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=y,o.ambient[1]=w,o.ambient[2]=E;const k=o.hash;(k.directionalLength!==b||k.pointLength!==_||k.spotLength!==S||k.rectAreaLength!==P||k.hemiLength!==R||k.numDirectionalShadows!==D||k.numPointShadows!==G||k.numSpotShadows!==O||k.numSpotMaps!==F||k.numLightProbes!==de)&&(o.directional.length=b,o.spot.length=S,o.rectArea.length=P,o.point.length=_,o.hemi.length=R,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=G,o.pointShadowMap.length=G,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=G,o.spotLightMatrix.length=O+F-oe,o.spotLightMap.length=F,o.numSpotLightShadowsWithMaps=oe,o.numLightProbes=de,k.directionalLength=b,k.pointLength=_,k.spotLength=S,k.rectAreaLength=P,k.hemiLength=R,k.numDirectionalShadows=D,k.numPointShadows=G,k.numSpotShadows=O,k.numSpotMaps=F,k.numLightProbes=de,o.version=y1++)}function m(g,x){let y=0,w=0,E=0,b=0,_=0;const S=x.matrixWorldInverse;for(let P=0,R=g.length;P<R;P++){const D=g[P];if(D.isDirectionalLight){const G=o.directional[y];G.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),G.direction.sub(l),G.direction.transformDirection(S),y++}else if(D.isSpotLight){const G=o.spot[E];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(S),G.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),G.direction.sub(l),G.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const G=o.rectArea[b];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(S),d.identity(),h.copy(D.matrixWorld),h.premultiply(S),d.extractRotation(h),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),G.halfWidth.applyMatrix4(d),G.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const G=o.point[w];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(S),w++}else if(D.isHemisphereLight){const G=o.hemi[_];G.direction.setFromMatrixPosition(D.matrixWorld),G.direction.transformDirection(S),_++}}}return{setup:p,setupView:m,state:o}}function sg(r,e){const t=new w1(r,e),s=[],o=[];function l(){s.length=0,o.length=0}function h(x){s.push(x)}function d(x){o.push(x)}function p(x){t.setup(s,x)}function m(x){t.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function M1(r,e){let t=new WeakMap;function s(l,h=0){const d=t.get(l);let p;return d===void 0?(p=new sg(r,e),t.set(l,[p])):h>=d.length?(p=new sg(r,e),d.push(p)):p=d[h],p}function o(){t=new WeakMap}return{get:s,dispose:o}}class E1 extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=__,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T1 extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R1(r,e,t){let s=new Qg;const o=new Mt,l=new Mt,h=new on,d=new E1({depthPacking:y_}),p=new T1,m={},g=t.maxTextureSize,x={[Ir]:kn,[kn]:Ir,[$i]:$i},y=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:b1,fragmentShader:A1}),w=y.clone();w.defines.HORIZONTAL_PASS=1;const E=new _i;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Zi(E,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bg;let S=this.type;this.render=function(O,F,oe){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const de=r.getRenderTarget(),T=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(Pr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ue=S!==Xi&&this.type===Xi,j=S===Xi&&this.type!==Xi;for(let re=0,W=O.length;re<W;re++){const te=O[re],B=te.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const Q=B.getFrameExtents();if(o.multiply(Q),l.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Q.x),o.x=l.x*Q.x,B.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Q.y),o.y=l.y*Q.y,B.mapSize.y=l.y)),B.map===null||ue===!0||j===!0){const N=this.type!==Xi?{minFilter:Mn,magFilter:Mn}:{};B.map!==null&&B.map.dispose(),B.map=new us(o.x,o.y,N),B.map.texture.name=te.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const X=B.getViewportCount();for(let N=0;N<X;N++){const V=B.getViewport(N);h.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),ce.viewport(h),B.updateMatrices(te,N),s=B.getFrustum(),D(F,oe,B.camera,te,this.type)}B.isPointLightShadow!==!0&&this.type===Xi&&P(B,oe),B.needsUpdate=!1}S=this.type,_.needsUpdate=!1,r.setRenderTarget(de,T,k)};function P(O,F){const oe=e.update(b);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,w.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,w.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new us(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,oe,y,b,null),w.uniforms.shadow_pass.value=O.mapPass.texture,w.uniforms.resolution.value=O.mapSize,w.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,oe,w,b,null)}function R(O,F,oe,de){let T=null;const k=oe.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)T=k;else if(T=oe.isPointLight===!0?p:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ce=T.uuid,ue=F.uuid;let j=m[ce];j===void 0&&(j={},m[ce]=j);let re=j[ue];re===void 0&&(re=T.clone(),j[ue]=re,F.addEventListener("dispose",G)),T=re}if(T.visible=F.visible,T.wireframe=F.wireframe,de===Xi?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:x[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,oe.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ce=r.properties.get(T);ce.light=oe}return T}function D(O,F,oe,de,T){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Xi)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,O.matrixWorld);const ue=e.update(O),j=O.material;if(Array.isArray(j)){const re=ue.groups;for(let W=0,te=re.length;W<te;W++){const B=re[W],Q=j[B.materialIndex];if(Q&&Q.visible){const X=R(O,Q,de,T);O.onBeforeShadow(r,O,F,oe,ue,X,B),r.renderBufferDirect(oe,null,ue,X,O,B),O.onAfterShadow(r,O,F,oe,ue,X,B)}}}else if(j.visible){const re=R(O,j,de,T);O.onBeforeShadow(r,O,F,oe,ue,re,null),r.renderBufferDirect(oe,null,ue,re,O,null),O.onAfterShadow(r,O,F,oe,ue,re,null)}}const ce=O.children;for(let ue=0,j=ce.length;ue<j;ue++)D(ce[ue],F,oe,de,T)}function G(O){O.target.removeEventListener("dispose",G);for(const oe in m){const de=m[oe],T=O.target.uuid;T in de&&(de[T].dispose(),delete de[T])}}}function C1(r,e,t){const s=t.isWebGL2;function o(){let U=!1;const Se=new on;let Me=null;const Oe=new on(0,0,0,0);return{setMask:function(qe){Me!==qe&&!U&&(r.colorMask(qe,qe,qe,qe),Me=qe)},setLocked:function(qe){U=qe},setClear:function(qe,yt,bt,Ht,vn){vn===!0&&(qe*=Ht,yt*=Ht,bt*=Ht),Se.set(qe,yt,bt,Ht),Oe.equals(Se)===!1&&(r.clearColor(qe,yt,bt,Ht),Oe.copy(Se))},reset:function(){U=!1,Me=null,Oe.set(-1,0,0,0)}}}function l(){let U=!1,Se=null,Me=null,Oe=null;return{setTest:function(qe){qe?Ee(r.DEPTH_TEST):Qe(r.DEPTH_TEST)},setMask:function(qe){Se!==qe&&!U&&(r.depthMask(qe),Se=qe)},setFunc:function(qe){if(Me!==qe){switch(qe){case Zx:r.depthFunc(r.NEVER);break;case Qx:r.depthFunc(r.ALWAYS);break;case Jx:r.depthFunc(r.LESS);break;case ql:r.depthFunc(r.LEQUAL);break;case e_:r.depthFunc(r.EQUAL);break;case t_:r.depthFunc(r.GEQUAL);break;case n_:r.depthFunc(r.GREATER);break;case i_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=qe}},setLocked:function(qe){U=qe},setClear:function(qe){Oe!==qe&&(r.clearDepth(qe),Oe=qe)},reset:function(){U=!1,Se=null,Me=null,Oe=null}}}function h(){let U=!1,Se=null,Me=null,Oe=null,qe=null,yt=null,bt=null,Ht=null,vn=null;return{setTest:function(St){U||(St?Ee(r.STENCIL_TEST):Qe(r.STENCIL_TEST))},setMask:function(St){Se!==St&&!U&&(r.stencilMask(St),Se=St)},setFunc:function(St,qt,ln){(Me!==St||Oe!==qt||qe!==ln)&&(r.stencilFunc(St,qt,ln),Me=St,Oe=qt,qe=ln)},setOp:function(St,qt,ln){(yt!==St||bt!==qt||Ht!==ln)&&(r.stencilOp(St,qt,ln),yt=St,bt=qt,Ht=ln)},setLocked:function(St){U=St},setClear:function(St){vn!==St&&(r.clearStencil(St),vn=St)},reset:function(){U=!1,Se=null,Me=null,Oe=null,qe=null,yt=null,bt=null,Ht=null,vn=null}}}const d=new o,p=new l,m=new h,g=new WeakMap,x=new WeakMap;let y={},w={},E=new WeakMap,b=[],_=null,S=!1,P=null,R=null,D=null,G=null,O=null,F=null,oe=null,de=new je(0,0,0),T=0,k=!1,ce=null,ue=null,j=null,re=null,W=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=Q>=2);let N=null,V={};const ye=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),le=new on().fromArray(ye),fe=new on().fromArray(q);function be(U,Se,Me,Oe){const qe=new Uint8Array(4),yt=r.createTexture();r.bindTexture(U,yt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<Me;bt++)s&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,qe):r.texImage2D(Se+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,qe);return yt}const Te={};Te[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Te[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ee(r.DEPTH_TEST),p.setFunc(ql),at(!1),L(zp),Ee(r.CULL_FACE),Ge(Pr);function Ee(U){y[U]!==!0&&(r.enable(U),y[U]=!0)}function Qe(U){y[U]!==!1&&(r.disable(U),y[U]=!1)}function et(U,Se){return w[U]!==Se?(r.bindFramebuffer(U,Se),w[U]=Se,s&&(U===r.DRAW_FRAMEBUFFER&&(w[r.FRAMEBUFFER]=Se),U===r.FRAMEBUFFER&&(w[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Z(U,Se){let Me=b,Oe=!1;if(U)if(Me=E.get(Se),Me===void 0&&(Me=[],E.set(Se,Me)),U.isWebGLMultipleRenderTargets){const qe=U.texture;if(Me.length!==qe.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,bt=qe.length;yt<bt;yt++)Me[yt]=r.COLOR_ATTACHMENT0+yt;Me.length=qe.length,Oe=!0}}else Me[0]!==r.COLOR_ATTACHMENT0&&(Me[0]=r.COLOR_ATTACHMENT0,Oe=!0);else Me[0]!==r.BACK&&(Me[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function zt(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const Ve={[is]:r.FUNC_ADD,[kx]:r.FUNC_SUBTRACT,[Fx]:r.FUNC_REVERSE_SUBTRACT};if(s)Ve[Hp]=r.MIN,Ve[Gp]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ve[Hp]=U.MIN_EXT,Ve[Gp]=U.MAX_EXT)}const tt={[Ox]:r.ZERO,[zx]:r.ONE,[Bx]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[Xx]:r.SRC_ALPHA_SATURATE,[Vx]:r.DST_COLOR,[Hx]:r.DST_ALPHA,[jx]:r.ONE_MINUS_SRC_COLOR,[Rd]:r.ONE_MINUS_SRC_ALPHA,[Wx]:r.ONE_MINUS_DST_COLOR,[Gx]:r.ONE_MINUS_DST_ALPHA,[qx]:r.CONSTANT_COLOR,[$x]:r.ONE_MINUS_CONSTANT_COLOR,[Yx]:r.CONSTANT_ALPHA,[Kx]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(U,Se,Me,Oe,qe,yt,bt,Ht,vn,St){if(U===Pr){S===!0&&(Qe(r.BLEND),S=!1);return}if(S===!1&&(Ee(r.BLEND),S=!0),U!==Ux){if(U!==P||St!==k){if((R!==is||O!==is)&&(r.blendEquation(r.FUNC_ADD),R=is,O=is),St)switch(U){case ea:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.ONE,r.ONE);break;case Bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}D=null,G=null,F=null,oe=null,de.set(0,0,0),T=0,P=U,k=St}return}qe=qe||Se,yt=yt||Me,bt=bt||Oe,(Se!==R||qe!==O)&&(r.blendEquationSeparate(Ve[Se],Ve[qe]),R=Se,O=qe),(Me!==D||Oe!==G||yt!==F||bt!==oe)&&(r.blendFuncSeparate(tt[Me],tt[Oe],tt[yt],tt[bt]),D=Me,G=Oe,F=yt,oe=bt),(Ht.equals(de)===!1||vn!==T)&&(r.blendColor(Ht.r,Ht.g,Ht.b,vn),de.copy(Ht),T=vn),P=U,k=!1}function Ct(U,Se){U.side===$i?Qe(r.CULL_FACE):Ee(r.CULL_FACE);let Me=U.side===kn;Se&&(Me=!Me),at(Me),U.blending===ea&&U.transparent===!1?Ge(Pr):Ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const Oe=U.stencilWrite;m.setTest(Oe),Oe&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(U){ce!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),ce=U)}function L(U){U!==Nx?(Ee(r.CULL_FACE),U!==ue&&(U===zp?r.cullFace(r.BACK):U===Dx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Qe(r.CULL_FACE),ue=U}function A(U){U!==j&&(B&&r.lineWidth(U),j=U)}function ee(U,Se,Me){U?(Ee(r.POLYGON_OFFSET_FILL),(re!==Se||W!==Me)&&(r.polygonOffset(Se,Me),re=Se,W=Me)):Qe(r.POLYGON_OFFSET_FILL)}function xe(U){U?Ee(r.SCISSOR_TEST):Qe(r.SCISSOR_TEST)}function ge(U){U===void 0&&(U=r.TEXTURE0+te-1),N!==U&&(r.activeTexture(U),N=U)}function _e(U,Se,Me){Me===void 0&&(N===null?Me=r.TEXTURE0+te-1:Me=N);let Oe=V[Me];Oe===void 0&&(Oe={type:void 0,texture:void 0},V[Me]=Oe),(Oe.type!==U||Oe.texture!==Se)&&(N!==Me&&(r.activeTexture(Me),N=Me),r.bindTexture(U,Se||Te[U]),Oe.type=U,Oe.texture=Se)}function ze(){const U=V[N];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(U){le.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function xt(U){fe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),fe.copy(U))}function Tt(U,Se){let Me=x.get(Se);Me===void 0&&(Me=new WeakMap,x.set(Se,Me));let Oe=Me.get(U);Oe===void 0&&(Oe=r.getUniformBlockIndex(Se,U.name),Me.set(U,Oe))}function ct(U,Se){const Oe=x.get(Se).get(U);g.get(Se)!==Oe&&(r.uniformBlockBinding(Se,Oe,U.__bindingPointIndex),g.set(Se,Oe))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),y={},N=null,V={},w={},E=new WeakMap,b=[],_=null,S=!1,P=null,R=null,D=null,G=null,O=null,F=null,oe=null,de=new je(0,0,0),T=0,k=!1,ce=null,ue=null,j=null,re=null,W=null,le.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Ee,disable:Qe,bindFramebuffer:et,drawBuffers:Z,useProgram:zt,setBlending:Ge,setMaterial:Ct,setFlipSided:at,setCullFace:L,setLineWidth:A,setPolygonOffset:ee,setScissorTest:xe,activeTexture:ge,bindTexture:_e,unbindTexture:ze,compressedTexImage2D:Ce,compressedTexImage3D:Ie,texImage2D:We,texImage3D:ke,updateUBOMapping:Tt,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:nt,texSubImage2D:$e,texSubImage3D:ot,compressedTexSubImage2D:me,compressedTexSubImage3D:mt,scissor:rt,viewport:xt,reset:Et}}function P1(r,e,t,s,o,l,h){const d=o.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return w?new OffscreenCanvas(L,A):Ql("canvas")}function b(L,A,ee,xe){let ge=1;if((L.width>xe||L.height>xe)&&(ge=xe/Math.max(L.width,L.height)),ge<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const _e=A?Ud:Math.floor,ze=_e(ge*L.width),Ce=_e(ge*L.height);x===void 0&&(x=E(ze,Ce));const Ie=ee?E(ze,Ce):x;return Ie.width=ze,Ie.height=Ce,Ie.getContext("2d").drawImage(L,0,0,ze,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ze+"x"+Ce+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function _(L){return _m(L.width)&&_m(L.height)}function S(L){return d?!1:L.wrapS!==mi||L.wrapT!==mi||L.minFilter!==Mn&&L.minFilter!==In}function P(L,A){return L.generateMipmaps&&A&&L.minFilter!==Mn&&L.minFilter!==In}function R(L){r.generateMipmap(L)}function D(L,A,ee,xe,ge=!1){if(d===!1)return A;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=A;if(A===r.RED&&(ee===r.FLOAT&&(_e=r.R32F),ee===r.HALF_FLOAT&&(_e=r.R16F),ee===r.UNSIGNED_BYTE&&(_e=r.R8)),A===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.R8UI),ee===r.UNSIGNED_SHORT&&(_e=r.R16UI),ee===r.UNSIGNED_INT&&(_e=r.R32UI),ee===r.BYTE&&(_e=r.R8I),ee===r.SHORT&&(_e=r.R16I),ee===r.INT&&(_e=r.R32I)),A===r.RG&&(ee===r.FLOAT&&(_e=r.RG32F),ee===r.HALF_FLOAT&&(_e=r.RG16F),ee===r.UNSIGNED_BYTE&&(_e=r.RG8)),A===r.RGBA){const ze=ge?$l:Rt.getTransfer(xe);ee===r.FLOAT&&(_e=r.RGBA32F),ee===r.HALF_FLOAT&&(_e=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(_e=ze===It?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function G(L,A,ee){return P(L,ee)===!0||L.isFramebufferTexture&&L.minFilter!==Mn&&L.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){return L===Mn||L===Vp||L===Xa?r.NEAREST:r.LINEAR}function F(L){const A=L.target;A.removeEventListener("dispose",F),de(A),A.isVideoTexture&&g.delete(A)}function oe(L){const A=L.target;A.removeEventListener("dispose",oe),k(A)}function de(L){const A=s.get(L);if(A.__webglInit===void 0)return;const ee=L.source,xe=y.get(ee);if(xe){const ge=xe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&T(L),Object.keys(xe).length===0&&y.delete(ee)}s.remove(L)}function T(L){const A=s.get(L);r.deleteTexture(A.__webglTexture);const ee=L.source,xe=y.get(ee);delete xe[A.__cacheKey],h.memory.textures--}function k(L){const A=L.texture,ee=s.get(L),xe=s.get(A);if(xe.__webglTexture!==void 0&&(r.deleteTexture(xe.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(ee.__webglFramebuffer[ge]))for(let _e=0;_e<ee.__webglFramebuffer[ge].length;_e++)r.deleteFramebuffer(ee.__webglFramebuffer[ge][_e]);else r.deleteFramebuffer(ee.__webglFramebuffer[ge]);ee.__webglDepthbuffer&&r.deleteRenderbuffer(ee.__webglDepthbuffer[ge])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ge=0;ge<ee.__webglFramebuffer.length;ge++)r.deleteFramebuffer(ee.__webglFramebuffer[ge]);else r.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&r.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ge=0;ge<ee.__webglColorRenderbuffer.length;ge++)ee.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(ee.__webglColorRenderbuffer[ge]);ee.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ge=0,_e=A.length;ge<_e;ge++){const ze=s.get(A[ge]);ze.__webglTexture&&(r.deleteTexture(ze.__webglTexture),h.memory.textures--),s.remove(A[ge])}s.remove(A),s.remove(L)}let ce=0;function ue(){ce=0}function j(){const L=ce;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),ce+=1,L}function re(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function W(L,A){const ee=s.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const xe=L.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(ee,L,A);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+A)}function te(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){le(ee,L,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+A)}function B(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){le(ee,L,A);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+A)}function Q(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){fe(ee,L,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+A)}const X={[Ld]:r.REPEAT,[mi]:r.CLAMP_TO_EDGE,[Nd]:r.MIRRORED_REPEAT},N={[Mn]:r.NEAREST,[Vp]:r.NEAREST_MIPMAP_NEAREST,[Xa]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Vu]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},V={[M_]:r.NEVER,[C_]:r.ALWAYS,[E_]:r.LESS,[Og]:r.LEQUAL,[T_]:r.EQUAL,[R_]:r.GEQUAL,[b_]:r.GREATER,[A_]:r.NOTEQUAL};function ye(L,A,ee){if(A.type===Yi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===Vu||A.magFilter===Xa||A.magFilter===ss||A.minFilter===In||A.minFilter===Vu||A.minFilter===Xa||A.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(L,r.TEXTURE_WRAP_S,X[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,X[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,X[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,N[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,N[A.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==mi||A.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,O(A.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,O(A.minFilter)),A.minFilter!==Mn&&A.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Mn||A.minFilter!==Xa&&A.minFilter!==ss||A.type===Yi&&e.has("OES_texture_float_linear")===!1||d===!1&&A.type===to&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(r.texParameterf(L,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function q(L,A){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",F));const xe=A.source;let ge=y.get(xe);ge===void 0&&(ge={},y.set(xe,ge));const _e=re(A);if(_e!==L.__cacheKey){ge[_e]===void 0&&(ge[_e]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),ge[_e].usedTimes++;const ze=ge[L.__cacheKey];ze!==void 0&&(ge[L.__cacheKey].usedTimes--,ze.usedTimes===0&&T(A)),L.__cacheKey=_e,L.__webglTexture=ge[_e].texture}return ee}function le(L,A,ee){let xe=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=r.TEXTURE_3D);const ge=q(L,A),_e=A.source;t.bindTexture(xe,L.__webglTexture,r.TEXTURE0+ee);const ze=s.get(_e);if(_e.version!==ze.__version||ge===!0){t.activeTexture(r.TEXTURE0+ee);const Ce=Rt.getPrimaries(Rt.workingColorSpace),Ie=A.colorSpace===ii?null:Rt.getPrimaries(A.colorSpace),$e=A.colorSpace===ii||Ce===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const ot=S(A)&&_(A.image)===!1;let me=b(A.image,ot,!1,o.maxTextureSize);me=at(A,me);const mt=_(me)||d,ht=l.convert(A.format,A.colorSpace);let nt=l.convert(A.type),We=D(A.internalFormat,ht,nt,A.colorSpace,A.isVideoTexture);ye(xe,A,mt);let ke;const rt=A.mipmaps,xt=d&&A.isVideoTexture!==!0&&We!==kg,Tt=ze.__version===void 0||ge===!0,ct=_e.dataReady,Et=G(A,me,mt);if(A.isDepthTexture)We=r.DEPTH_COMPONENT,d?A.type===Yi?We=r.DEPTH_COMPONENT32F:A.type===Cr?We=r.DEPTH_COMPONENT24:A.type===as?We=r.DEPTH24_STENCIL8:We=r.DEPTH_COMPONENT16:A.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===os&&We===r.DEPTH_COMPONENT&&A.type!==Wd&&A.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Cr,nt=l.convert(A.type)),A.format===aa&&We===r.DEPTH_COMPONENT&&(We=r.DEPTH_STENCIL,A.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=as,nt=l.convert(A.type))),Tt&&(xt?t.texStorage2D(r.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,We,me.width,me.height,0,ht,nt,null));else if(A.isDataTexture)if(rt.length>0&&mt){xt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,rt[0].width,rt[0].height);for(let U=0,Se=rt.length;U<Se;U++)ke=rt[U],xt?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,ke.width,ke.height,ht,nt,ke.data):t.texImage2D(r.TEXTURE_2D,U,We,ke.width,ke.height,0,ht,nt,ke.data);A.generateMipmaps=!1}else xt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,me.width,me.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,ht,nt,me.data)):t.texImage2D(r.TEXTURE_2D,0,We,me.width,me.height,0,ht,nt,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,We,rt[0].width,rt[0].height,me.depth);for(let U=0,Se=rt.length;U<Se;U++)ke=rt[U],A.format!==gi?ht!==null?xt?ct&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,ke.width,ke.height,me.depth,ht,ke.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,U,We,ke.width,ke.height,me.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,ke.width,ke.height,me.depth,ht,nt,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,U,We,ke.width,ke.height,me.depth,0,ht,nt,ke.data)}else{xt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,rt[0].width,rt[0].height);for(let U=0,Se=rt.length;U<Se;U++)ke=rt[U],A.format!==gi?ht!==null?xt?ct&&t.compressedTexSubImage2D(r.TEXTURE_2D,U,0,0,ke.width,ke.height,ht,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,U,We,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,ke.width,ke.height,ht,nt,ke.data):t.texImage2D(r.TEXTURE_2D,U,We,ke.width,ke.height,0,ht,nt,ke.data)}else if(A.isDataArrayTexture)xt?(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,We,me.width,me.height,me.depth),ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ht,nt,me.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,ht,nt,me.data);else if(A.isData3DTexture)xt?(Tt&&t.texStorage3D(r.TEXTURE_3D,Et,We,me.width,me.height,me.depth),ct&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ht,nt,me.data)):t.texImage3D(r.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,ht,nt,me.data);else if(A.isFramebufferTexture){if(Tt)if(xt)t.texStorage2D(r.TEXTURE_2D,Et,We,me.width,me.height);else{let U=me.width,Se=me.height;for(let Me=0;Me<Et;Me++)t.texImage2D(r.TEXTURE_2D,Me,We,U,Se,0,ht,nt,null),U>>=1,Se>>=1}}else if(rt.length>0&&mt){xt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,rt[0].width,rt[0].height);for(let U=0,Se=rt.length;U<Se;U++)ke=rt[U],xt?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,ht,nt,ke):t.texImage2D(r.TEXTURE_2D,U,We,ht,nt,ke);A.generateMipmaps=!1}else xt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,me.width,me.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,nt,me)):t.texImage2D(r.TEXTURE_2D,0,We,ht,nt,me);P(A,mt)&&R(xe),ze.__version=_e.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function fe(L,A,ee){if(A.image.length!==6)return;const xe=q(L,A),ge=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+ee);const _e=s.get(ge);if(ge.version!==_e.__version||xe===!0){t.activeTexture(r.TEXTURE0+ee);const ze=Rt.getPrimaries(Rt.workingColorSpace),Ce=A.colorSpace===ii?null:Rt.getPrimaries(A.colorSpace),Ie=A.colorSpace===ii||ze===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,me=[];for(let U=0;U<6;U++)!$e&&!ot?me[U]=b(A.image[U],!1,!0,o.maxCubemapSize):me[U]=ot?A.image[U].image:A.image[U],me[U]=at(A,me[U]);const mt=me[0],ht=_(mt)||d,nt=l.convert(A.format,A.colorSpace),We=l.convert(A.type),ke=D(A.internalFormat,nt,We,A.colorSpace),rt=d&&A.isVideoTexture!==!0,xt=_e.__version===void 0||xe===!0,Tt=ge.dataReady;let ct=G(A,mt,ht);ye(r.TEXTURE_CUBE_MAP,A,ht);let Et;if($e){rt&&xt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ke,mt.width,mt.height);for(let U=0;U<6;U++){Et=me[U].mipmaps;for(let Se=0;Se<Et.length;Se++){const Me=Et[Se];A.format!==gi?nt!==null?rt?Tt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,0,0,Me.width,Me.height,nt,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,0,0,Me.width,Me.height,nt,We,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,ke,Me.width,Me.height,0,nt,We,Me.data)}}}else{Et=A.mipmaps,rt&&xt&&(Et.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ke,me[0].width,me[0].height));for(let U=0;U<6;U++)if(ot){rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,me[U].width,me[U].height,nt,We,me[U].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,ke,me[U].width,me[U].height,0,nt,We,me[U].data);for(let Se=0;Se<Et.length;Se++){const Oe=Et[Se].image[U].image;rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,0,0,Oe.width,Oe.height,nt,We,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,ke,Oe.width,Oe.height,0,nt,We,Oe.data)}}else{rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,nt,We,me[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,ke,nt,We,me[U]);for(let Se=0;Se<Et.length;Se++){const Me=Et[Se];rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,0,0,nt,We,Me.image[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,ke,nt,We,Me.image[U])}}}P(A,ht)&&R(r.TEXTURE_CUBE_MAP),_e.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function be(L,A,ee,xe,ge,_e){const ze=l.convert(ee.format,ee.colorSpace),Ce=l.convert(ee.type),Ie=D(ee.internalFormat,ze,Ce,ee.colorSpace);if(!s.get(A).__hasExternalTextures){const ot=Math.max(1,A.width>>_e),me=Math.max(1,A.height>>_e);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,_e,Ie,ot,me,A.depth,0,ze,Ce,null):t.texImage2D(ge,_e,Ie,ot,me,0,ze,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ge,s.get(ee).__webglTexture,0,tt(A)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,ge,s.get(ee).__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(L,A,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let xe=d===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||Ge(A)){const ge=A.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Yi?xe=r.DEPTH_COMPONENT32F:ge.type===Cr&&(xe=r.DEPTH_COMPONENT24));const _e=tt(A);Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,xe,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,xe,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,xe,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const xe=tt(A);ee&&Ge(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,r.DEPTH24_STENCIL8,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const xe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ge=0;ge<xe.length;ge++){const _e=xe[ge],ze=l.convert(_e.format,_e.colorSpace),Ce=l.convert(_e.type),Ie=D(_e.internalFormat,ze,Ce,_e.colorSpace),$e=tt(A);ee&&Ge(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ie,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Ie,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const xe=s.get(A.depthTexture).__webglTexture,ge=tt(A);if(A.depthTexture.format===os)Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(A.depthTexture.format===aa)Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Qe(L){const A=s.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ee(A.__webglFramebuffer,L)}else if(ee){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]=r.createRenderbuffer(),Te(A.__webglDepthbuffer[xe],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Te(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(L,A,ee){const xe=s.get(L);A!==void 0&&be(xe.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Qe(L)}function Z(L){const A=L.texture,ee=s.get(L),xe=s.get(A);L.addEventListener("dispose",oe),L.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=A.version,h.memory.textures++);const ge=L.isWebGLCubeRenderTarget===!0,_e=L.isWebGLMultipleRenderTargets===!0,ze=_(L)||d;if(ge){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(d&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ee.__webglFramebuffer[Ce][Ie]=r.createFramebuffer()}else ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(d&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(_e)if(o.drawBuffers){const Ce=L.texture;for(let Ie=0,$e=Ce.length;Ie<$e;Ie++){const ot=s.get(Ce[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&L.samples>0&&Ge(L)===!1){const Ce=_e?A:[A];ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ce.length;Ie++){const $e=Ce[Ie];ee.__webglColorRenderbuffer[Ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const ot=l.convert($e.format,$e.colorSpace),me=l.convert($e.type),mt=D($e.internalFormat,ot,me,$e.colorSpace,L.isXRRenderTarget===!0),ht=tt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(r.TEXTURE_CUBE_MAP,A,ze);for(let Ce=0;Ce<6;Ce++)if(d&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)be(ee.__webglFramebuffer[Ce][Ie],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ie);else be(ee.__webglFramebuffer[Ce],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);P(A,ze)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const Ce=L.texture;for(let Ie=0,$e=Ce.length;Ie<$e;Ie++){const ot=Ce[Ie],me=s.get(ot);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),ye(r.TEXTURE_2D,ot,ze),be(ee.__webglFramebuffer,L,ot,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,0),P(ot,ze)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(d?Ce=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,xe.__webglTexture),ye(Ce,A,ze),d&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)be(ee.__webglFramebuffer[Ie],L,A,r.COLOR_ATTACHMENT0,Ce,Ie);else be(ee.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,Ce,0);P(A,ze)&&R(Ce),t.unbindTexture()}L.depthBuffer&&Qe(L)}function zt(L){const A=_(L)||d,ee=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let xe=0,ge=ee.length;xe<ge;xe++){const _e=ee[xe];if(P(_e,A)){const ze=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=s.get(_e).__webglTexture;t.bindTexture(ze,Ce),R(ze),t.unbindTexture()}}}function Ve(L){if(d&&L.samples>0&&Ge(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ee=L.width,xe=L.height;let ge=r.COLOR_BUFFER_BIT;const _e=[],ze=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=s.get(L),Ie=L.isWebGLMultipleRenderTargets===!0;if(Ie)for(let $e=0;$e<A.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){_e.push(r.COLOR_ATTACHMENT0+$e),L.depthBuffer&&_e.push(ze);const ot=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(ot===!1&&(L.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),Ie&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[$e]),ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ze]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ze])),Ie){const me=s.get(A[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,ee,xe,0,0,ee,xe,ge,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ie)for(let $e=0;$e<A.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[$e]);const ot=s.get(A[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function tt(L){return Math.min(o.maxSamples,L.samples)}function Ge(L){const A=s.get(L);return d&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(L){const A=h.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function at(L,A){const ee=L.colorSpace,xe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dd||ee!==Qi&&ee!==ii&&(Rt.getTransfer(ee)===It?d===!1?e.has("EXT_sRGB")===!0&&xe===gi?(L.format=Dd,L.minFilter=In,L.generateMipmaps=!1):A=Bg.sRGBToLinear(A):(xe!==gi||ge!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=j,this.resetTextureUnits=ue,this.setTexture2D=W,this.setTexture2DArray=te,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=et,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ge}function L1(r,e,t){const s=t.isWebGL2;function o(l,h=ii){let d;const p=Rt.getTransfer(h);if(l===Nr)return r.UNSIGNED_BYTE;if(l===Lg)return r.UNSIGNED_SHORT_4_4_4_4;if(l===Ng)return r.UNSIGNED_SHORT_5_5_5_1;if(l===d_)return r.BYTE;if(l===h_)return r.SHORT;if(l===Wd)return r.UNSIGNED_SHORT;if(l===Pg)return r.INT;if(l===Cr)return r.UNSIGNED_INT;if(l===Yi)return r.FLOAT;if(l===to)return s?r.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(l===f_)return r.ALPHA;if(l===gi)return r.RGBA;if(l===p_)return r.LUMINANCE;if(l===m_)return r.LUMINANCE_ALPHA;if(l===os)return r.DEPTH_COMPONENT;if(l===aa)return r.DEPTH_STENCIL;if(l===Dd)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(l===g_)return r.RED;if(l===Dg)return r.RED_INTEGER;if(l===v_)return r.RG;if(l===Ig)return r.RG_INTEGER;if(l===Ug)return r.RGBA_INTEGER;if(l===Wu||l===Xu||l===qu||l===$u)if(p===It)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(l===Wu)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Xu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===qu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===$u)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(l===Wu)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Xu)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===qu)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===$u)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Wp||l===Xp||l===qp||l===$p)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(l===Wp)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Xp)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===qp)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===$p)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===kg)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Yp||l===Kp)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(l===Yp)return p===It?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(l===Kp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Zp||l===Qp||l===Jp||l===em||l===tm||l===nm||l===im||l===rm||l===sm||l===am||l===om||l===lm||l===cm||l===um)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(l===Zp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Qp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Jp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===em)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===tm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===nm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===im)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===rm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===sm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===am)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===om)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===lm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===cm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===um)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Yu||l===dm||l===hm)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(l===Yu)return p===It?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===dm)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===hm)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===x_||l===fm||l===pm||l===mm)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(l===Yu)return d.COMPRESSED_RED_RGTC1_EXT;if(l===fm)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===pm)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===mm)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===as?s?r.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:o}}class N1 extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qa extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,s),S=this._getHandJoint(m,b);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=g.position.distanceTo(x.position),w=.02,E=.005;m.inputState.pinching&&y>w+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=w-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Qa;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const I1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Fn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const s=t.cameras[0].viewport,o=new Ci({extensions:{fragDepth:!0},vertexShader:I1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new Zi(new rc(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class F1 extends la{constructor(e,t){super();const s=this;let o=null,l=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,y=null,w=null,E=null;const b=new k1,_=t.getContextAttributes();let S=null,P=null;const R=[],D=[],G=new Mt;let O=null;const F=new ni;F.layers.enable(1),F.viewport=new on;const oe=new ni;oe.layers.enable(2),oe.viewport=new on;const de=[F,oe],T=new N1;T.layers.enable(1),T.layers.enable(2);let k=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=R[q];return le===void 0&&(le=new yd,R[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=R[q];return le===void 0&&(le=new yd,R[q]=le),le.getGripSpace()},this.getHand=function(q){let le=R[q];return le===void 0&&(le=new yd,R[q]=le),le.getHandSpace()};function ue(q){const le=D.indexOf(q.inputSource);if(le===-1)return;const fe=R[le];fe!==void 0&&(fe.update(q.inputSource,q.frame,m||h),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",re);for(let q=0;q<R.length;q++){const le=D[q];le!==null&&(D[q]=null,R[q].disconnect(le))}k=null,ce=null,b.reset(),e.setRenderTarget(S),w=null,y=null,x=null,o=null,P=null,ye.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return y!==null?y:w},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",j),o.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:o.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),P=new us(w.framebufferWidth,w.framebufferHeight,{format:gi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,fe=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?aa:os,fe=_.stencil?as:Cr);const Te={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};x=new XRWebGLBinding(o,t),y=x.createProjectionLayer(Te),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new us(y.textureWidth,y.textureHeight,{format:gi,type:Nr,depthTexture:new ev(y.textureWidth,y.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ee=e.properties.get(P);Ee.__ignoreDepthValues=y.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await o.requestReferenceSpace(d),ye.setContext(o),ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function re(q){for(let le=0;le<q.removed.length;le++){const fe=q.removed[le],be=D.indexOf(fe);be>=0&&(D[be]=null,R[be].disconnect(fe))}for(let le=0;le<q.added.length;le++){const fe=q.added[le];let be=D.indexOf(fe);if(be===-1){for(let Ee=0;Ee<R.length;Ee++)if(Ee>=D.length){D.push(fe),be=Ee;break}else if(D[Ee]===null){D[Ee]=fe,be=Ee;break}if(be===-1)break}const Te=R[be];Te&&Te.connect(fe)}}const W=new $,te=new $;function B(q,le,fe){W.setFromMatrixPosition(le.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);const be=W.distanceTo(te),Te=le.projectionMatrix.elements,Ee=fe.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),et=Te[14]/(Te[10]+1),Z=(Te[9]+1)/Te[5],zt=(Te[9]-1)/Te[5],Ve=(Te[8]-1)/Te[0],tt=(Ee[8]+1)/Ee[0],Ge=Qe*Ve,Ct=Qe*tt,at=be/(-Ve+tt),L=at*-Ve;le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(L),q.translateZ(at),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Qe+at,ee=et+at,xe=Ge-L,ge=Ct+(be-L),_e=Z*et/ee*A,ze=zt*et/ee*A;q.projectionMatrix.makePerspective(xe,ge,_e,ze,A,ee),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;b.texture!==null&&(q.near=b.depthNear,q.far=b.depthFar),T.near=oe.near=F.near=q.near,T.far=oe.far=F.far=q.far,(k!==T.near||ce!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),k=T.near,ce=T.far,F.near=k,F.far=ce,oe.near=k,oe.far=ce,F.updateProjectionMatrix(),oe.updateProjectionMatrix(),q.updateProjectionMatrix());const le=q.parent,fe=T.cameras;Q(T,le);for(let be=0;be<fe.length;be++)Q(fe[be],le);fe.length===2?B(T,F,oe):T.projectionMatrix.copy(F.projectionMatrix),X(q,T,le)};function X(q,le,fe){fe===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Id*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&w===null))return p},this.setFoveation=function(q){p=q,y!==null&&(y.fixedFoveation=q),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null};let N=null;function V(q,le){if(g=le.getViewerPose(m||h),E=le,g!==null){const fe=g.views;w!==null&&(e.setRenderTargetFramebuffer(P,w.framebuffer),e.setRenderTarget(P));let be=!1;fe.length!==T.cameras.length&&(T.cameras.length=0,be=!0);for(let Ee=0;Ee<fe.length;Ee++){const Qe=fe[Ee];let et=null;if(w!==null)et=w.getViewport(Qe);else{const zt=x.getViewSubImage(y,Qe);et=zt.viewport,Ee===0&&(e.setRenderTargetTextures(P,zt.colorTexture,y.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(P))}let Z=de[Ee];Z===void 0&&(Z=new ni,Z.layers.enable(Ee),Z.viewport=new on,de[Ee]=Z),Z.matrix.fromArray(Qe.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Qe.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(et.x,et.y,et.width,et.height),Ee===0&&(T.matrix.copy(Z.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),be===!0&&T.cameras.push(Z)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ee=x.getDepthInformation(fe[0]);Ee&&Ee.isValid&&Ee.texture&&b.init(e,Ee,o.renderState)}}for(let fe=0;fe<R.length;fe++){const be=D[fe],Te=R[fe];be!==null&&Te!==void 0&&Te.update(be,le,m||h)}b.render(e,T),N&&N(q,le),le.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:le}),E=null}const ye=new Jg;ye.setAnimationLoop(V),this.setAnimationLoop=function(q){N=q},this.dispose=function(){}}}function O1(r,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function s(_,S){S.color.getRGB(_.fogColor.value,Yg(r)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function o(_,S,P,R,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(_,S):S.isMeshToonMaterial?(l(_,S),x(_,S)):S.isMeshPhongMaterial?(l(_,S),g(_,S)):S.isMeshStandardMaterial?(l(_,S),y(_,S),S.isMeshPhysicalMaterial&&w(_,S,D)):S.isMeshMatcapMaterial?(l(_,S),E(_,S)):S.isMeshDepthMaterial?l(_,S):S.isMeshDistanceMaterial?(l(_,S),b(_,S)):S.isMeshNormalMaterial?l(_,S):S.isLineBasicMaterial?(h(_,S),S.isLineDashedMaterial&&d(_,S)):S.isPointsMaterial?p(_,S,P,R):S.isSpriteMaterial?m(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===kn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===kn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const P=e.get(S).envMap;if(P&&(_.envMap.value=P,_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap){_.lightMap.value=S.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=S.lightMapIntensity*R,t(S.lightMap,_.lightMapTransform)}S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function h(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function d(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function p(_,S,P,R){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*P,_.scale.value=R*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function g(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function x(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function y(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),e.get(S).envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function w(_,S,P){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&_.clearcoatNormalScale.value.negate())),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,S){S.matcap&&(_.matcap.value=S.matcap)}function b(_,S){const P=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function z1(r,e,t,s){let o={},l={},h=[];const d=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(P,R){const D=R.program;s.uniformBlockBinding(P,D)}function m(P,R){let D=o[P.id];D===void 0&&(E(P),D=g(P),o[P.id]=D,P.addEventListener("dispose",_));const G=R.program;s.updateUBOMapping(P,G);const O=e.render.frame;l[P.id]!==O&&(y(P),l[P.id]=O)}function g(P){const R=x();P.__bindingPointIndex=R;const D=r.createBuffer(),G=P.__size,O=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,D),D}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const R=o[P.id],D=P.uniforms,G=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let O=0,F=D.length;O<F;O++){const oe=Array.isArray(D[O])?D[O]:[D[O]];for(let de=0,T=oe.length;de<T;de++){const k=oe[de];if(w(k,O,de,G)===!0){const ce=k.__offset,ue=Array.isArray(k.value)?k.value:[k.value];let j=0;for(let re=0;re<ue.length;re++){const W=ue[re],te=b(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,ce+j,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,j),j+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function w(P,R,D,G){const O=P.value,F=R+"_"+D;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:G[F]=O.clone(),!0;{const oe=G[F];if(typeof O=="number"||typeof O=="boolean"){if(oe!==O)return G[F]=O,!0}else if(oe.equals(O)===!1)return oe.copy(O),!0}return!1}function E(P){const R=P.uniforms;let D=0;const G=16;for(let F=0,oe=R.length;F<oe;F++){const de=Array.isArray(R[F])?R[F]:[R[F]];for(let T=0,k=de.length;T<k;T++){const ce=de[T],ue=Array.isArray(ce.value)?ce.value:[ce.value];for(let j=0,re=ue.length;j<re;j++){const W=ue[j],te=b(W),B=D%G;B!==0&&G-B<te.boundary&&(D+=G-B),ce.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=te.storage}}}const O=D%G;return O>0&&(D+=G-O),P.__size=D,P.__cache={},this}function b(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function _(P){const R=P.target;R.removeEventListener("dispose",_);const D=h.indexOf(R.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function S(){for(const P in o)r.deleteBuffer(o[P]);h=[],o={},l={}}return{bind:p,update:m,dispose:S}}class av{constructor(e={}){const{canvas:t=L_(),context:s=null,depth:o=!0,stencil:l=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=h;const w=new Uint32Array(4),E=new Int32Array(4);let b=null,_=null;const S=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Lr,this.toneMappingExposure=1;const R=this;let D=!1,G=0,O=0,F=null,oe=-1,de=null;const T=new on,k=new on;let ce=null;const ue=new je(0);let j=0,re=t.width,W=t.height,te=1,B=null,Q=null;const X=new on(0,0,re,W),N=new on(0,0,re,W);let V=!1;const ye=new Qg;let q=!1,le=!1,fe=null;const be=new Kt,Te=new Mt,Ee=new $,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return F===null?te:1}let Z=s;function zt(C,K){for(let se=0;se<C.length;se++){const ae=C[se],ie=t.getContext(ae,K);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vd}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Se,!1),Z===null){const K=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&K.shift(),Z=zt(K,C),Z===null)throw zt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ve,tt,Ge,Ct,at,L,A,ee,xe,ge,_e,ze,Ce,Ie,$e,ot,me,mt,ht,nt,We,ke,rt,xt;function Tt(){Ve=new Xw(Z),tt=new zw(Z,Ve,e),Ve.init(tt),ke=new L1(Z,Ve,tt),Ge=new C1(Z,Ve,tt),Ct=new Yw(Z),at=new m1,L=new P1(Z,Ve,Ge,at,tt,ke,Ct),A=new jw(R),ee=new Ww(R),xe=new ny(Z,tt),rt=new Fw(Z,Ve,xe,tt),ge=new qw(Z,xe,Ct,rt),_e=new Jw(Z,ge,xe,Ct),ht=new Qw(Z,tt,L),ot=new Bw(at),ze=new p1(R,A,ee,Ve,tt,rt,ot),Ce=new O1(R,at),Ie=new v1,$e=new M1(Ve,tt),mt=new kw(R,A,ee,Ge,_e,y,p),me=new R1(R,_e,tt),xt=new z1(Z,Ct,tt,Ge),nt=new Ow(Z,Ve,Ct,tt),We=new $w(Z,Ve,Ct,tt),Ct.programs=ze.programs,R.capabilities=tt,R.extensions=Ve,R.properties=at,R.renderLists=Ie,R.shadowMap=me,R.state=Ge,R.info=Ct}Tt();const ct=new F1(R,Z);this.xr=ct,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=Ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize(re,W,!1))},this.getSize=function(C){return C.set(re,W)},this.setSize=function(C,K,se=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,W=K,t.width=Math.floor(C*te),t.height=Math.floor(K*te),se===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(re*te,W*te).floor()},this.setDrawingBufferSize=function(C,K,se){re=C,W=K,te=se,t.width=Math.floor(C*se),t.height=Math.floor(K*se),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,K,se,ae){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,K,se,ae),Ge.viewport(T.copy(X).multiplyScalar(te).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,K,se,ae){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,K,se,ae),Ge.scissor(k.copy(N).multiplyScalar(te).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){Ge.setScissorTest(V=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(C=!0,K=!0,se=!0){let ae=0;if(C){let ie=!1;if(F!==null){const Pe=F.texture.format;ie=Pe===Ug||Pe===Ig||Pe===Dg}if(ie){const Pe=F.texture.type,He=Pe===Nr||Pe===Cr||Pe===Wd||Pe===as||Pe===Lg||Pe===Ng,Ze=mt.getClearColor(),Ne=mt.getClearAlpha(),lt=Ze.r,it=Ze.g,st=Ze.b;He?(w[0]=lt,w[1]=it,w[2]=st,w[3]=Ne,Z.clearBufferuiv(Z.COLOR,0,w)):(E[0]=lt,E[1]=it,E[2]=st,E[3]=Ne,Z.clearBufferiv(Z.COLOR,0,E))}else ae|=Z.COLOR_BUFFER_BIT}K&&(ae|=Z.DEPTH_BUFFER_BIT),se&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),$e.dispose(),at.dispose(),A.dispose(),ee.dispose(),_e.dispose(),rt.dispose(),xt.dispose(),ze.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",vn),ct.removeEventListener("sessionend",St),fe&&(fe.dispose(),fe=null),qt.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=Ct.autoReset,K=me.enabled,se=me.autoUpdate,ae=me.needsUpdate,ie=me.type;Tt(),Ct.autoReset=C,me.enabled=K,me.autoUpdate=se,me.needsUpdate=ae,me.type=ie}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const K=C.target;K.removeEventListener("dispose",Me),Oe(K)}function Oe(C){qe(C),at.remove(C)}function qe(C){const K=at.get(C).programs;K!==void 0&&(K.forEach(function(se){ze.releaseProgram(se)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,se,ae,ie,Pe){K===null&&(K=Qe);const He=ie.isMesh&&ie.matrixWorld.determinant()<0,Ze=ac(C,K,se,ae,ie);Ge.setMaterial(ae,He);let Ne=se.index,lt=1;if(ae.wireframe===!0){if(Ne=ge.getWireframeAttribute(se),Ne===void 0)return;lt=2}const it=se.drawRange,st=se.attributes.position;let Pt=it.start*lt,xn=(it.start+it.count)*lt;Pe!==null&&(Pt=Math.max(Pt,Pe.start*lt),xn=Math.min(xn,(Pe.start+Pe.count)*lt)),Ne!==null?(Pt=Math.max(Pt,0),xn=Math.min(xn,Ne.count)):st!=null&&(Pt=Math.max(Pt,0),xn=Math.min(xn,st.count));const Gt=xn-Pt;if(Gt<0||Gt===1/0)return;rt.setup(ie,ae,Ze,se,Ne);let En,gt=nt;if(Ne!==null&&(En=xe.get(Ne),gt=We,gt.setIndex(En)),ie.isMesh)ae.wireframe===!0?(Ge.setLineWidth(ae.wireframeLinewidth*et()),gt.setMode(Z.LINES)):gt.setMode(Z.TRIANGLES);else if(ie.isLine){let ut=ae.linewidth;ut===void 0&&(ut=1),Ge.setLineWidth(ut*et()),ie.isLineSegments?gt.setMode(Z.LINES):ie.isLineLoop?gt.setMode(Z.LINE_LOOP):gt.setMode(Z.LINE_STRIP)}else ie.isPoints?gt.setMode(Z.POINTS):ie.isSprite&&gt.setMode(Z.TRIANGLES);if(ie.isBatchedMesh)gt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)gt.renderInstances(Pt,Gt,ie.count);else if(se.isInstancedBufferGeometry){const ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,_n=Math.min(se.instanceCount,ut);gt.renderInstances(Pt,Gt,_n)}else gt.render(Pt,Gt)};function yt(C,K,se){C.transparent===!0&&C.side===$i&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,er(C,K,se),C.side=Ir,C.needsUpdate=!0,er(C,K,se),C.side=$i):er(C,K,se)}this.compile=function(C,K,se=null){se===null&&(se=C),_=$e.get(se),_.init(),P.push(_),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),C!==se&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),_.setupLights(R._useLegacyLights);const ae=new Set;return C.traverse(function(ie){const Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Ze=Pe[He];yt(Ze,se,ie),ae.add(Ze)}else yt(Pe,se,ie),ae.add(Pe)}),P.pop(),_=null,ae},this.compileAsync=function(C,K,se=null){const ae=this.compile(C,K,se);return new Promise(ie=>{function Pe(){if(ae.forEach(function(He){at.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){ie(C);return}setTimeout(Pe,10)}Ve.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let bt=null;function Ht(C){bt&&bt(C)}function vn(){qt.stop()}function St(){qt.start()}const qt=new Jg;qt.setAnimationLoop(Ht),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(C){bt=C,ct.setAnimationLoop(C),C===null?qt.stop():qt.start()},ct.addEventListener("sessionstart",vn),ct.addEventListener("sessionend",St),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,K,F),_=$e.get(C,P.length),_.init(),P.push(_),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ye.setFromProjectionMatrix(be),le=this.localClippingEnabled,q=ot.init(this.clippingPlanes,le),b=Ie.get(C,S.length),b.init(),S.push(b),ln(C,K,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(B,Q),this.info.render.frame++,q===!0&&ot.beginShadows();const se=_.state.shadowsArray;if(me.render(se,C,K),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&mt.render(b,C),_.setupLights(R._useLegacyLights),K.isArrayCamera){const ae=K.cameras;for(let ie=0,Pe=ae.length;ie<Pe;ie++){const He=ae[ie];ao(b,C,He,He.viewport)}}else ao(b,C,K);F!==null&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(R,C,K),rt.resetDefaultState(),oe=-1,de=null,P.pop(),P.length>0?_=P[P.length-1]:_=null,S.pop(),S.length>0?b=S[S.length-1]:b=null};function ln(C,K,se,ae){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){ae&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const He=_e.update(C),Ze=C.material;Ze.visible&&b.push(C,He,Ze,se,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const He=_e.update(C),Ze=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ee.copy(He.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(Ze)){const Ne=He.groups;for(let lt=0,it=Ne.length;lt<it;lt++){const st=Ne[lt],Pt=Ze[st.materialIndex];Pt&&Pt.visible&&b.push(C,He,Pt,se,Ee.z,st)}}else Ze.visible&&b.push(C,He,Ze,se,Ee.z,null)}}const Pe=C.children;for(let He=0,Ze=Pe.length;He<Ze;He++)ln(Pe[He],K,se,ae)}function ao(C,K,se,ae){const ie=C.opaque,Pe=C.transmissive,He=C.transparent;_.setupLightsView(se),q===!0&&ot.setGlobalState(R.clippingPlanes,se),Pe.length>0&&kr(ie,Pe,K,se),ae&&Ge.viewport(T.copy(ae)),ie.length>0&&Pi(ie,K,se),Pe.length>0&&Pi(Pe,K,se),He.length>0&&Pi(He,K,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function kr(C,K,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Pe=tt.isWebGL2;fe===null&&(fe=new us(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?to:Nr,minFilter:ss,samples:Pe?4:0})),R.getDrawingBufferSize(Te),Pe?fe.setSize(Te.x,Te.y):fe.setSize(Ud(Te.x),Ud(Te.y));const He=R.getRenderTarget();R.setRenderTarget(fe),R.getClearColor(ue),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear();const Ze=R.toneMapping;R.toneMapping=Lr,Pi(C,se,ae),L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe);let Ne=!1;for(let lt=0,it=K.length;lt<it;lt++){const st=K[lt],Pt=st.object,xn=st.geometry,Gt=st.material,En=st.group;if(Gt.side===$i&&Pt.layers.test(ae.layers)){const gt=Gt.side;Gt.side=kn,Gt.needsUpdate=!0,Fr(Pt,se,ae,xn,Gt,En),Gt.side=gt,Gt.needsUpdate=!0,Ne=!0}}Ne===!0&&(L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe)),R.setRenderTarget(He),R.setClearColor(ue,j),R.toneMapping=Ze}function Pi(C,K,se){const ae=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Pe=C.length;ie<Pe;ie++){const He=C[ie],Ze=He.object,Ne=He.geometry,lt=ae===null?He.material:ae,it=He.group;Ze.layers.test(se.layers)&&Fr(Ze,K,se,Ne,lt,it)}}function Fr(C,K,se,ae,ie,Pe){C.onBeforeRender(R,K,se,ae,ie,Pe),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(R,K,se,ae,C,Pe),ie.transparent===!0&&ie.side===$i&&ie.forceSinglePass===!1?(ie.side=kn,ie.needsUpdate=!0,R.renderBufferDirect(se,K,ae,ie,C,Pe),ie.side=Ir,ie.needsUpdate=!0,R.renderBufferDirect(se,K,ae,ie,C,Pe),ie.side=$i):R.renderBufferDirect(se,K,ae,ie,C,Pe),C.onAfterRender(R,K,se,ae,ie,Pe)}function er(C,K,se){K.isScene!==!0&&(K=Qe);const ae=at.get(C),ie=_.state.lights,Pe=_.state.shadowsArray,He=ie.state.version,Ze=ze.getParameters(C,ie.state,Pe,K,se),Ne=ze.getProgramCacheKey(Ze);let lt=ae.programs;ae.environment=C.isMeshStandardMaterial?K.environment:null,ae.fog=K.fog,ae.envMap=(C.isMeshStandardMaterial?ee:A).get(C.envMap||ae.environment),lt===void 0&&(C.addEventListener("dispose",Me),lt=new Map,ae.programs=lt);let it=lt.get(Ne);if(it!==void 0){if(ae.currentProgram===it&&ae.lightsStateVersion===He)return lo(C,Ze),it}else Ze.uniforms=ze.getUniforms(C),C.onBuild(se,Ze,R),C.onBeforeCompile(Ze,R),it=ze.acquireProgram(Ze,Ne),lt.set(Ne,it),ae.uniforms=Ze.uniforms;const st=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=ot.uniform),lo(C,Ze),ae.needsLights=co(C),ae.lightsStateVersion=He,ae.needsLights&&(st.ambientLightColor.value=ie.state.ambient,st.lightProbe.value=ie.state.probe,st.directionalLights.value=ie.state.directional,st.directionalLightShadows.value=ie.state.directionalShadow,st.spotLights.value=ie.state.spot,st.spotLightShadows.value=ie.state.spotShadow,st.rectAreaLights.value=ie.state.rectArea,st.ltc_1.value=ie.state.rectAreaLTC1,st.ltc_2.value=ie.state.rectAreaLTC2,st.pointLights.value=ie.state.point,st.pointLightShadows.value=ie.state.pointShadow,st.hemisphereLights.value=ie.state.hemi,st.directionalShadowMap.value=ie.state.directionalShadowMap,st.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,st.spotShadowMap.value=ie.state.spotShadowMap,st.spotLightMatrix.value=ie.state.spotLightMatrix,st.spotLightMap.value=ie.state.spotLightMap,st.pointShadowMap.value=ie.state.pointShadowMap,st.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.currentProgram=it,ae.uniformsList=null,it}function oo(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Wl.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function lo(C,K){const se=at.get(C);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function ac(C,K,se,ae,ie){K.isScene!==!0&&(K=Qe),L.resetTextureUnits();const Pe=K.fog,He=ae.isMeshStandardMaterial?K.environment:null,Ze=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qi,Ne=(ae.isMeshStandardMaterial?ee:A).get(ae.envMap||He),lt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),st=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,xn=!!se.morphAttributes.color;let Gt=Lr;ae.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const En=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gt=En!==void 0?En.length:0,ut=at.get(ae),_n=_.state.lights;if(q===!0&&(le===!0||C!==de)){const Tn=C===de&&ae.id===oe;ot.setState(ae,C,Tn)}let Ut=!1;ae.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==_n.state.version||ut.outputColorSpace!==Ze||ie.isBatchedMesh&&ut.batching===!1||!ie.isBatchedMesh&&ut.batching===!0||ie.isInstancedMesh&&ut.instancing===!1||!ie.isInstancedMesh&&ut.instancing===!0||ie.isSkinnedMesh&&ut.skinning===!1||!ie.isSkinnedMesh&&ut.skinning===!0||ie.isInstancedMesh&&ut.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ut.instancingColor===!1&&ie.instanceColor!==null||ut.envMap!==Ne||ae.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ot.numPlanes||ut.numIntersection!==ot.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==it||ut.morphTargets!==st||ut.morphNormals!==Pt||ut.morphColors!==xn||ut.toneMapping!==Gt||tt.isWebGL2===!0&&ut.morphTargetsCount!==gt)&&(Ut=!0):(Ut=!0,ut.__version=ae.version);let Ni=ut.currentProgram;Ut===!0&&(Ni=er(ae,K,ie));let uo=!1,yi=!1,tr=!1;const Bt=Ni.getUniforms(),$n=ut.uniforms;if(Ge.useProgram(Ni.program)&&(uo=!0,yi=!0,tr=!0),ae.id!==oe&&(oe=ae.id,yi=!0),uo||de!==C){Bt.setValue(Z,"projectionMatrix",C.projectionMatrix),Bt.setValue(Z,"viewMatrix",C.matrixWorldInverse);const Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(Z,Ee.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Bt.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,yi=!0,tr=!0)}if(ie.isSkinnedMesh){Bt.setOptional(Z,ie,"bindMatrix"),Bt.setOptional(Z,ie,"bindMatrixInverse");const Tn=ie.skeleton;Tn&&(tt.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Bt.setValue(Z,"boneTexture",Tn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Bt.setOptional(Z,ie,"batchingTexture"),Bt.setValue(Z,"batchingTexture",ie._matricesTexture,L));const da=se.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0&&tt.isWebGL2===!0)&&ht.update(ie,se,Ni),(yi||ut.receiveShadow!==ie.receiveShadow)&&(ut.receiveShadow=ie.receiveShadow,Bt.setValue(Z,"receiveShadow",ie.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&($n.envMap.value=Ne,$n.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),yi&&(Bt.setValue(Z,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&Li($n,tr),Pe&&ae.fog===!0&&Ce.refreshFogUniforms($n,Pe),Ce.refreshMaterialUniforms($n,ae,te,W,fe),Wl.upload(Z,oo(ut),$n,L)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Wl.upload(Z,oo(ut),$n,L),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(Z,"center",ie.center),Bt.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),Bt.setValue(Z,"normalMatrix",ie.normalMatrix),Bt.setValue(Z,"modelMatrix",ie.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Tn=ae.uniformsGroups;for(let Or=0,ho=Tn.length;Or<ho;Or++)if(tt.isWebGL2){const ds=Tn[Or];xt.update(ds,Ni),xt.bind(ds,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function Li(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function co(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,K,se){at.get(C.texture).__webglTexture=K,at.get(C.depthTexture).__webglTexture=se;const ae=at.get(C);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const se=at.get(C);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,se=0){F=C,G=K,O=se;let ae=!0,ie=null,Pe=!1,He=!1;if(C){const Ne=at.get(C);Ne.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(Z.FRAMEBUFFER,null),ae=!1):Ne.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ne.__hasExternalTextures&&L.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(He=!0);const it=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[K])?ie=it[K][se]:ie=it[K],Pe=!0):tt.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?ie=at.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?ie=it[se]:ie=it,T.copy(C.viewport),k.copy(C.scissor),ce=C.scissorTest}else T.copy(X).multiplyScalar(te).floor(),k.copy(N).multiplyScalar(te).floor(),ce=V;if(Ge.bindFramebuffer(Z.FRAMEBUFFER,ie)&&tt.drawBuffers&&ae&&Ge.drawBuffers(C,ie),Ge.viewport(T),Ge.scissor(k),Ge.setScissorTest(ce),Pe){const Ne=at.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,se)}else if(He){const Ne=at.get(C.texture),lt=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ne.__webglTexture,se||0,lt)}oe=-1},this.readRenderTargetPixels=function(C,K,se,ae,ie,Pe,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){Ge.bindFramebuffer(Z.FRAMEBUFFER,Ze);try{const Ne=C.texture,lt=Ne.format,it=Ne.type;if(lt!==gi&&ke.convert(lt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=it===to&&(Ve.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(it!==Nr&&ke.convert(it)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Yi&&(tt.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ae&&se>=0&&se<=C.height-ie&&Z.readPixels(K,se,ae,ie,ke.convert(lt),ke.convert(it),Pe)}finally{const Ne=F!==null?at.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(Z.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,K,se=0){const ae=Math.pow(2,-se),ie=Math.floor(K.image.width*ae),Pe=Math.floor(K.image.height*ae);L.setTexture2D(K,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,C.x,C.y,ie,Pe),Ge.unbindTexture()},this.copyTextureToTexture=function(C,K,se,ae=0){const ie=K.image.width,Pe=K.image.height,He=ke.convert(se.format),Ze=ke.convert(se.type);L.setTexture2D(se,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,se.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ae,C.x,C.y,ie,Pe,He,Ze,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ae,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,He,K.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ae,C.x,C.y,He,Ze,K.image),ae===0&&se.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,K,se,ae,ie=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,He=C.max.y-C.min.y+1,Ze=C.max.z-C.min.z+1,Ne=ke.convert(ae.format),lt=ke.convert(ae.type);let it;if(ae.isData3DTexture)L.setTexture3D(ae,0),it=Z.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)L.setTexture2DArray(ae,0),it=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ae.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ae.unpackAlignment);const st=Z.getParameter(Z.UNPACK_ROW_LENGTH),Pt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),xn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Gt=Z.getParameter(Z.UNPACK_SKIP_ROWS),En=Z.getParameter(Z.UNPACK_SKIP_IMAGES),gt=se.isCompressedTexture?se.mipmaps[ie]:se.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,gt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,gt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,C.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,C.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?Z.texSubImage3D(it,ie,K.x,K.y,K.z,Pe,He,Ze,Ne,lt,gt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(it,ie,K.x,K.y,K.z,Pe,He,Ze,Ne,gt.data)):Z.texSubImage3D(it,ie,K.x,K.y,K.z,Pe,He,Ze,Ne,lt,gt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,st),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Pt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,xn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Gt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,En),ie===0&&ae.generateMipmaps&&Z.generateMipmap(it),Ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){G=0,O=0,F=null,Ge.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xd?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?ls:Fg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ls?an:Qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class B1 extends av{}B1.prototype.isWebGL1Renderer=!0;class $d{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new $d(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class j1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ov extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ag=new Kt,Fd=new Gg,Ol=new nc,zl=new $;class Od extends On{constructor(e=new _i,t=new ov){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ol.copy(s.boundingSphere),Ol.applyMatrix4(o),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;ag.copy(o).invert(),Fd.copy(e.ray).applyMatrix4(ag);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,x=s.attributes.position;if(m!==null){const y=Math.max(0,h.start),w=Math.min(m.count,h.start+h.count);for(let E=y,b=w;E<b;E++){const _=m.getX(E);zl.fromBufferAttribute(x,_),og(zl,_,p,o,e,t,this)}}else{const y=Math.max(0,h.start),w=Math.min(x.count,h.start+h.count);for(let E=y,b=w;E<b;E++)zl.fromBufferAttribute(x,E),og(zl,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function og(r,e,t,s,o,l,h){const d=Fd.distanceSqToPoint(r);if(d<t){const p=new $;Fd.closestPointToPoint(r,p),p.applyMatrix4(s);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class H1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let o=0;const l=s.length;let h;t?h=t:h=e*s[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=s[o]-h,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,s[o]===h)return o/(l-1);const g=s[o],y=s[o+1]-g,w=(h-g)/y;return(o+w)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const h=this.getPoint(o),d=this.getPoint(l),p=t||(h.isVector2?new Mt:new $);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new $,o=[],l=[],h=[],d=new $,p=new Kt;for(let w=0;w<=e;w++){const E=w/e;o[w]=this.getTangentAt(E,new $)}l[0]=new $,h[0]=new $;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),y=Math.abs(o[0].z);g<=m&&(m=g,s.set(1,0,0)),x<=m&&(m=x,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],d),h[0].crossVectors(o[0],l[0]);for(let w=1;w<=e;w++){if(l[w]=l[w-1].clone(),h[w]=h[w-1].clone(),d.crossVectors(o[w-1],o[w]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gn(o[w-1].dot(o[w]),-1,1));l[w].applyMatrix4(p.makeRotationAxis(d,E))}h[w].crossVectors(o[w],l[w])}if(t===!0){let w=Math.acos(gn(l[0].dot(l[e]),-1,1));w/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(w=-w);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],w*E)),h[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Yd(){let r=0,e=0,t=0,s=0;function o(l,h,d,p){r=l,e=d,t=-3*l+3*h-2*d-p,s=2*l-2*h+d+p}return{initCatmullRom:function(l,h,d,p,m){o(h,d,m*(d-l),m*(p-h))},initNonuniformCatmullRom:function(l,h,d,p,m,g,x){let y=(h-l)/m-(d-l)/(m+g)+(d-h)/g,w=(d-h)/g-(p-h)/(g+x)+(p-d)/x;y*=g,w*=g,o(h,d,y,w)},calc:function(l){const h=l*l,d=h*l;return r+e*l+t*h+s*d}}}const Bl=new $,Sd=new Yd,wd=new Yd,Md=new Yd;class Xl extends H1{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new $){const s=t,o=this.points,l=o.length,h=(l-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,g;this.closed||d>0?m=o[(d-1)%l]:(Bl.subVectors(o[0],o[1]).add(o[0]),m=Bl);const x=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?g=o[(d+2)%l]:(Bl.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const w=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(x),w),b=Math.pow(x.distanceToSquared(y),w),_=Math.pow(y.distanceToSquared(g),w);b<1e-4&&(b=1),E<1e-4&&(E=b),_<1e-4&&(_=b),Sd.initNonuniformCatmullRom(m.x,x.x,y.x,g.x,E,b,_),wd.initNonuniformCatmullRom(m.y,x.y,y.y,g.y,E,b,_),Md.initNonuniformCatmullRom(m.z,x.z,y.z,g.z,E,b,_)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(m.x,x.x,y.x,g.x,this.tension),wd.initCatmullRom(m.y,x.y,y.y,g.y,this.tension),Md.initCatmullRom(m.z,x.z,y.z,g.z,this.tension));return s.set(Sd.calc(p),wd.calc(p),Md.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(new $().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class G1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);const bi={bg:new je("#04060a"),fog:new je("#04060a"),soil:new je("#241813"),soilDeep:new je("#0c0806"),scan:new je("#37e6d0"),node:new je("#7bffd6"),seed:new je("#8a5a32"),bark:new je("#5b4327"),barkTip:new je("#8fe6b0"),leaf:new je("#2f9e46"),leafGloss:new je("#7fffa8"),blossom:new je("#fff3c4"),appleUnripe:new je("#7cae3a"),appleRipe:new je("#cf2130"),appleBlush:new je("#f2544a")},cs=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Ks=(r,e,t)=>r+(e-r)*t;function mn(r,e,t){const s=cs((r-e)/(t-e));return s*s*(3-2*s)}function V1(r,e,t){const s=cs((r-e)/(t-e));return Math.sin(s*Math.PI)}function W1(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function X1(r=7,e={}){const{trunkHeight:t=5.2,branchLenMul:s=1,tiltMul:o=1,leafCountMul:l=1,leafScaleMul:h=1}=e,d=W1(r),p=(S,P)=>S+d()*(P-S),m=[],g=[],x=[];let y=1e-4;function w(S,P,R,D,G,O,F){const de=[],T=new $(0,1,0),k=new $(p(-1,1),0,p(-1,1)).normalize(),ce=O===0?0:p(.08,.22);S.clone(),P.clone().normalize().multiplyScalar(R/7);for(let X=0;X<=7;X++){const N=X/7,V=S.clone().addScaledVector(P.clone().normalize(),R*N);V.addScaledVector(k,Math.sin(N*Math.PI)*R*.06*p(.5,1.2)),V.y-=ce*R*N*N,de.push(V)}const ue=new Xl(de),j=F+R,re={curve:ue,r0:D,r1:G,depth:O,startDist:F,endDist:j,gStart:0,gEnd:0};m.push(re);const W=m.length-1;y=Math.max(y,j);const te=de[de.length-1],B=te.clone().sub(de[de.length-2]).normalize();if(O>=2){const X=Math.floor(p(3,7)*l);for(let N=0;N<X;N++){const V=p(.35,1),ye=ue.getPoint(V),q=F+R*V,fe=new $(ye.x,0,ye.z).normalize().clone().lerp(T,.35).addScaledVector(new $(p(-1,1),p(-.3,1),p(-1,1)),.5).normalize();g.push({pos:ye,normal:fe,scale:p(.7,1.25)*h,spin:p(0,Math.PI*2),growth:q,branchIndex:W,branchT:V})}}if(O>=2&&d()<.55){const X=te.clone();X.y-=G*2+.15,x.push({pos:X,scale:p(.8,1.15),growth:j,anchor:te.clone(),branchIndex:W})}if(O<4){const X=O===0?4:O===1?3:2;for(let N=0;N<X;N++){const V=O===0?p(.82,1):p(.45,.95),ye=ue.getPoint(V),q=F+R*V,le=N/X*Math.PI*2+p(-.5,.5),fe=(O===0?p(.5,.9):p(.6,1.15))*o,be=new $(Math.cos(le)*Math.sin(fe),Math.cos(fe)+.35,Math.sin(le)*Math.sin(fe)).normalize();be.lerp(B,.25).normalize();const Te=R*p(.55,.75)*s,Ee=G*p(.7,.95),Qe=Ee*.55;w(ye,be,Te,Ee,Qe,O+1,q)}}}w(new $(0,0,0),new $(.05,1,.02),t,.55,.34,0,0);for(const S of m)S.gStart=S.startDist/y,S.gEnd=S.endDist/y;for(const S of g)S.growth/=y;for(const S of x)S.growth/=y;let E=0,b=-1/0;x.forEach((S,P)=>{const R=S.pos.y+S.pos.z*.4-Math.abs(S.pos.x)*.2;R>b&&(b=R,E=P)});const _=x.length?x[E].branchIndex:-1;return{branches:m,leaves:g,fruits:x,fallIndex:E,fallBranchIndex:_,maxDist:y}}function q1(r={}){return new Ci({transparent:!0,depthWrite:!1,depthTest:!0,blending:eo,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:r.size??2},uDrift:{value:r.drift??.14},uOpacity:{value:r.opacity??1},uFall:{value:1},uFallHeight:{value:r.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new je("#7cae3a")},uRipe:{value:new je("#cf2130")},uBlush:{value:new je("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
      attribute float aGrowth;
      attribute vec3 aColor;
      attribute float aRand;
      attribute float aSize;

      uniform float uReveal, uTime, uSize, uDrift, uFall, uFallHeight, uRipen;
      uniform vec3 uUnripe, uRipe, uBlush;

      varying float vAppear;
      varying vec3 vColor;
      varying float vRand;

      void main() {
        float w = 0.16;                        // per-particle reveal window
        float start = aGrowth * (1.0 - w);
        float appear = smoothstep(start, start + w, uReveal);
        vAppear = appear;
        vRand = aRand;

        // colour: ripen mode for fruit, else the baked colour
        vec3 col = aColor;
        if (uRipen >= 0.0) {
          col = mix(uUnripe, uRipe, uRipen);
          col = mix(col, uBlush, uRipen * 0.3 * (0.5 + 0.5 * sin(aRand * 30.0)));
        }
        vColor = col;

        vec3 pos = position;
        // seed drop-in from above
        pos.y += (1.0 - uFall) * uFallHeight;
        // floating dust drift (always a little, more once revealed)
        vec3 d = vec3(
          sin(uTime * 0.6 + aRand * 40.0),
          sin(uTime * 0.5 + aRand * 57.0),
          sin(uTime * 0.45 + aRand * 31.0)
        );
        pos += d * uDrift * (0.4 + 0.6 * appear);

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        // grow in: scale with appearance, attenuate with distance (kept small
        // so dense dust reads as haze, not a solid blown-out mass)
        gl_PointSize = uSize * aSize * (0.3 + 0.7 * appear) * (150.0 / -mv.z);
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uOpacity, uAlpha, uDarken;
      varying float vAppear;
      varying vec3 vColor;
      varying float vRand;

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float dd = length(uv);
        if (dd > 0.5) discard;
        float a = smoothstep(0.5, 0.0, dd);
        a = pow(a, 1.9);
        float tw = 0.75 + 0.25 * sin(vRand * 90.0);
        // uDarken pulls colours down for light mode (so they read on white);
        // uAlpha sets per-point coverage (low for additive dark, high for normal light)
        vec3 col = vColor * uDarken * (0.55 + 0.35 * tw);
        gl_FragColor = vec4(col, a * vAppear * uOpacity * uAlpha);
      }
    `})}const jl=new $,cg=new ca,$1=new $(0,1,0);class Ar{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,t,s,o,l,h){this.pos.push(e,t,s),this.growth.push(o),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(h)}addCurve(e,t,s,o,l,h,d,p){for(let m=0;m<s;m++){const g=Math.random(),x=e.getPoint(g),y=t*(.3+Math.pow(Math.random(),.5))*1.1,w=Math.random()*Math.PI*2,E=(Math.random()-.5)*t;x.x+=Math.cos(w)*y,x.z+=Math.sin(w)*y,x.y+=E;const b=o+(l-o)*g;this.push(x.x,x.y,x.z,b,h,d+Math.random()*(p-d))}}addLeafPuff(e,t,s,o,l,h,d,p,m){cg.setFromUnitVectors($1,t);for(let g=0;g<l;g++){const x=Math.pow(Math.random(),.75),y=Math.sin(Math.max(0,x)*Math.PI),w=(Math.random()*2-1)*y*o,E=x*s,b=(Math.random()*2-1)*y*o*.4;jl.set(w,E,b).applyQuaternion(cg).add(e),this.push(jl.x,jl.y,jl.z,h,d,p+Math.random()*(m-p))}}addBlob(e,t,s,o,l,h,d,p,m){for(let g=0;g<l;g++){const x=Math.random(),y=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1),E=Math.pow(x,.6),b=e.x+E*Math.sin(w)*Math.cos(y)*t,_=e.y+E*Math.cos(w)*s,S=e.z+E*Math.sin(w)*Math.sin(y)*o;this.push(b,_,S,h,d,p+Math.random()*(m-p))}}build(e){const t=new _i;t.setAttribute("position",new Un(this.pos,3)),t.setAttribute("aGrowth",new Un(this.growth,1)),t.setAttribute("aColor",new Un(this.color,3)),t.setAttribute("aRand",new Un(this.rand,1)),t.setAttribute("aSize",new Un(this.size,1));const s=new Od(t,e);return s.frustumCulled=!1,s}}const pi=(r,e,t)=>new $(r,e,t),Hl=pi(1.2,-1,0);class Y1{constructor(e){this.scene=e,this.tree=X1(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Qa,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const t=q1(e);return this.mats.push(t),t}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new $d(new je("#04060a"),.013);const t=1300,s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*46,s[l*3+1]=Math.random()*26-4,s[l*3+2]=(Math.random()-.5)*46;const o=new _i;o.setAttribute("position",new xi(s,3)),this.ambient=new Od(o,new ov({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:eo})),e.add(this.ambient)}buildWaveField(){const s=[],o=[];for(let h=0;h<176;h++)for(let d=0;d<176;d++){const p=-15+h/175*2*15,m=-15+d/175*2*15;Math.hypot(p,m)>15||(s.push(p,0,m),o.push(Math.random()))}const l=new _i;l.setAttribute("position",new Un(s,3)),l.setAttribute("aRand",new Un(o,1)),this.waveMat=new Ci({transparent:!0,depthWrite:!1,blending:eo,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uRippleCenter:{value:new Mt(0,0)},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new je("#0b3f7a")},uHigh:{value:new je("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
        uniform float uTime, uAmp, uRipple, uRippleAmp, uSize;
        uniform vec2 uRippleCenter;
        attribute float aRand;
        varying float vH;
        varying float vEdge;
        void main() {
          vec3 p = position;
          float r = length(p.xz);
          // soft radial fade so the disc dissolves into the background
          // instead of ending in a hard circular cut
          vEdge = smoothstep(15.0, 9.0, r);
          // rolling dusty swell
          float w = sin(p.x * 0.5 + uTime * 0.9) * 0.5
                  + sin(p.z * 0.6 - uTime * 0.7) * 0.5
                  + sin((p.x + p.z) * 0.33 + uTime * 1.1) * 0.4;
          float rim = smoothstep(15.0, 3.0, r);
          // single expanding ripple ring, measured from its own origin (the
          // seed at the trunk, or the apple's landing point) — not the disc centre
          float rr = length(p.xz - uRippleCenter);
          float ringR = uRipple * 14.0;
          float ring = exp(-pow((rr - ringR) * 1.1, 2.0)) * uRippleAmp * (1.0 - uRipple);
          p.y = w * uAmp * rim + ring;
          vH = p.y;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.55 + 0.6 * aRand) * (150.0 / -mv.z);
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uLow, uHigh;
        uniform float uOpacity, uAlpha, uDarken;
        varying float vH;
        varying float vEdge;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          a = pow(a, 1.8);
          float h = clamp(vH * 0.7 + 0.45, 0.0, 1.0);
          vec3 col = mix(uLow, uHigh, h) * uDarken;
          gl_FragColor = vec4(col * (0.7 + 0.5 * h), a * uOpacity * uAlpha * vEdge);
        }
      `}),this.wave=new Od(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new Ar,t=new je("#5c3418"),s=.45;for(let o=0;o<3200;o++){const l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),d=.7+.3*Math.pow(Math.random(),.85);let p=Math.cos(l)*Math.sin(h)*d,m=Math.cos(h)*d,g=Math.sin(l)*Math.sin(h)*d;const x=(m+1)/2,y=1-.72*Math.pow(1-x,1.8);p*=.44*y,g*=.34*y,m*=.62,e.push(p,s+m,g,0,t,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new Ar,t=(x,y)=>x+Math.random()*(y-x),s=[];let o=.001;const l=(x,y,w,E,b,_)=>{const P=[],R=new $(t(-1,1),0,t(-1,1)).normalize(),D=y.clone().normalize();for(let oe=0;oe<=6;oe++){const de=oe/6,T=x.clone().addScaledVector(D,w*de);T.y-=Math.pow(de,1.3)*w*.22,T.addScaledVector(R,Math.sin(de*Math.PI)*w*.13*t(.4,1.1)),P.push(T)}const G=new Xl(P),O=E*.14,F=b+w;if(s.push({curve:G,r0:E,r1:O,startDist:b,endDist:F,depth:_}),o=Math.max(o,F),_<4){const oe=_===0||Math.random()<.45?3:2;for(let de=0;de<oe;de++){const T=t(.35,.94),k=G.getPoint(T),ce=b+w*T,ue=t(0,Math.PI*2),j=t(.55,1.15),re=new $(Math.cos(ue)*Math.sin(j),-Math.abs(Math.cos(j))-.3,Math.sin(ue)*Math.sin(j)).normalize(),W=w*t(.5,.72),te=Ks(E,O,T)*t(.72,.95);l(k,re,W,te,ce,_+1)}}};l(pi(0,-.4,0),pi(.05,-1,.03),2.6,.16,0,0);const h=bi.seed.clone(),d=new je("#d9a066"),p=new je;for(const x of s){const y=x.startDist/o,w=x.endDist/o,E=x.curve.getLength(),b=Math.max(50,Math.floor(E*460));for(let _=0;_<b;_++){const S=Math.random(),P=x.curve.getPoint(S),R=Ks(x.r0,x.r1,S),D=R*Math.pow(Math.random(),.6),G=Math.random()*Math.PI*2;P.x+=Math.cos(G)*D,P.z+=Math.sin(G)*D,P.y+=(Math.random()-.5)*R*.4,p.copy(h).lerp(d,S*.5);const O=Ks(1.9,.45,S)*(x.depth>=2?.8:1);e.push(P.x,P.y,P.z,Ks(y,w,S),p,O)}}const m=s[0],g=new je("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const x of this.nodeAlong){const y=m.curve.getPoint(x),w=(m.startDist+x*(m.endDist-m.startDist))/o;e.addBlob(y,.15,.15,.15,140,w,g,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new Ar,t=new je("#6fce63"),s=bi.leafGloss.clone(),o=new Xl([pi(0,0,0),pi(.04,.5,.02),pi(-.03,1,-.02),pi(0,1.5,0)]);e.addCurve(o,.05,1100,0,.65,t,.8,1.8);const l=pi(0,1.5,0),h=pi(-.9,.7,.15).normalize(),d=pi(.9,.7,-.15).normalize();e.addLeafPuff(l,h,.85,.4,900,.72,s,.8,2),e.addLeafPuff(l,d,.85,.4,900,.78,s,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new Ar,t=new je("#8a6636"),s=new je("#5e441f"),o=new je;this.tree.branches.forEach((l,h)=>{const d=l.curve.getLength(),p=Math.max(l.r1,(l.r0+l.r1)*.5),m=l.depth===0?900:230,g=Math.floor(d*m)+40,x=l.depth===0?.15:.55;o.copy(t).lerp(s,x+Math.random()*.3);let y=l.curve;if(h===this.tree.fallBranchIndex){const w=l.curve.points,E=w.map((b,_)=>b.clone().addScaledVector(Hl,_/(w.length-1)));y=new Xl(E)}e.addCurve(y,p,g,l.gStart,l.gEnd,o,1,2.6)}),this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new Ar,t=bi.leaf.clone(),s=bi.leafGloss.clone(),o=new je,l=new $;for(const d of this.tree.leaves){l.add(d.pos),o.copy(t).lerp(s,Math.random()*.5);const p=1.15*d.scale,m=.55*d.scale,g=d.branchIndex===this.tree.fallBranchIndex?d.pos.clone().addScaledVector(Hl,d.branchT):d.pos;e.addLeafPuff(g,d.normal,p,m,70,d.growth,o,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const h=4.6;for(let d=0;d<16e3;d++){const p=new $(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),m=Math.pow(Math.random(),.6)*h,g=l.clone().addScaledVector(p,m);g.y+=(h-m)*.15,o.copy(t).lerp(s,Math.random()*.6);const x=cs(.55+m/h*.45);e.push(g.x,g.y,g.z,x,o,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new Ar,t=bi.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone().add(Hl),this.tree.fruits.forEach((s,o)=>{o!==this.fallIndex&&e.addBlob(s.pos,.42*s.scale,.36*s.scale,.42*s.scale,200,s.growth,t,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(bi.appleUnripe),e.uniforms.uRipe.value.copy(bi.appleRipe),e.uniforms.uBlush.value.copy(bi.appleBlush)}buildBlossoms(){const e=new Ar,t=bi.blossom.clone();this.tree.fruits.forEach((s,o)=>{const l=o===this.tree.fallIndex?s.anchor.clone().add(Hl):s.anchor;e.addBlob(l,.16,.16,.16,40,0,t,1.6,3.6)}),this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new Ar,t=bi.appleRipe.clone();e.addBlob(pi(0,0,0),.44,.38,.44,340,0,t,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,t){for(const E of this.mats)E.uniforms.uTime.value=t;this.waveMat.uniforms.uTime.value=t;const s=mn(e,0,.1);this.seedMat.uniforms.uFall.value=s;const o=mn(e,.1,.28);this.seed.position.y=-o*.8;const l=mn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=Ks(.55,.12,mn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*mn(e,.55,.72);let h=0,d=0;e<.5&&(h=mn(e,.08,.42),d=.7),this.rootMat.uniforms.uReveal.value=mn(e,.2,.4),this.roots.visible=e<.52;const p=mn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=p,this.seedlingMat.uniforms.uOpacity.value=1-mn(e,.56,.66),this.seedling.visible=p>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=mn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=mn(e,.56,.78);const m=mn(e,.72,.8)*(1-mn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=m,this.blossoms.visible=m>.01;const g=mn(e,.72,.86),x=mn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=g,this.fruitMat.uniforms.uRipen.value=x,this.fallMat.uniforms.uRipen.value=x;const y=cs((e-.86)/(.94-.86)),w=y*y;this.fall.visible=g>.01,this.fall.position.set(this.fallAnchor.x,Ks(this.fallAnchor.y,.3,w),this.fallAnchor.z),this.fall.rotation.z=y*3,e>=.94?(h=mn(e,.94,1),d=1.8,this.waveMat.uniforms.uRippleCenter.value.set(this.fallAnchor.x,this.fallAnchor.z)):this.waveMat.uniforms.uRippleCenter.value.set(0,0),this.waveMat.uniforms.uRipple.value=h,this.waveMat.uniforms.uRippleAmp.value=d,this.ambient.rotation.y=t*.008}}const Dn=(r,e,t)=>new $(r,e,t),Gl=[{p:0,pos:Dn(0,6.5,21),tgt:Dn(0,1.6,0)},{p:.16,pos:Dn(2.2,5.2,18),tgt:Dn(0,.6,0)},{p:.34,pos:Dn(4.5,-1.2,14),tgt:Dn(0,-2.4,0)},{p:.5,pos:Dn(2.6,2.6,13),tgt:Dn(0,1.2,0)},{p:.72,pos:Dn(-3.2,7.5,27),tgt:Dn(0,7,0)},{p:.86,pos:Dn(6,11.5,23),tgt:Dn(.4,9.5,0)},{p:1,pos:Dn(0,8.5,34),tgt:Dn(0,8,0)}],K1=r=>r*r*(3-2*r);function Z1(r){return r<.2?0:r<.4?1:r<.58?2:r<.78?3:4}function Q1(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function J1(r){r.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(s=>{Object.values(s).forEach(o=>{o&&o.isTexture&&o.dispose()}),s.dispose()})})}function eE({sectionRef:r,onStageChange:e,onAnnotationChange:t,onWebGLUnavailable:s}){const o=Re.useRef(null),l=Re.useRef(e);l.current=e;const h=Re.useRef(t);h.current=t;const d=Re.useRef(s);return d.current=s,Re.useEffect(()=>{const p=o.current,m=r.current;if(!p||!m)return;const g=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let x;try{x=new av({canvas:p,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{d.current&&d.current();return}x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(window.innerWidth,window.innerHeight),x.setClearColor(0,0),x.toneMapping=Rg,x.toneMappingExposure=1.1;const y=new j1,w=new ni(50,window.innerWidth/window.innerHeight,.1,400);w.position.set(0,5,12);const E=new Y1(y);let b=!1;const _=new $,S=new $,P=(W,te)=>{let B=0;for(;B<Gl.length-2&&W>Gl[B+1].p;)B++;const Q=Gl[B],X=Gl[B+1],N=K1(cs((W-Q.p)/(X.p-Q.p)));_.lerpVectors(Q.pos,X.pos,N),S.lerpVectors(Q.tgt,X.tgt,N);const V=V1(W,.5,.72);S.y+=V*1.7,_.y+=V*.9,_.z+=V*3.2,_.x+=Math.sin(te*.22)*.3,_.y+=Math.cos(te*.18)*.18,b&&_.sub(S).multiplyScalar(1.28).add(S),w.position.copy(_),w.lookAt(S)},R=()=>{const W=window.innerWidth,te=window.innerHeight;b=W<821,w.aspect=W/te,w.clearViewOffset(),x.setSize(W,te),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),b?w.setViewOffset(W,te,0,te*.2,W,te):w.setViewOffset(W,te,W*.22,0,W,te),w.updateProjectionMatrix()};R();const D=()=>{const W=m.getBoundingClientRect(),te=m.offsetHeight-window.innerHeight,B=cs(-W.top,0,Math.max(0,te));return te>0?cs(B/te):0};let G=-1,O=-1;const F=W=>{const te=Z1(W);te!==G&&(G=te,l.current&&l.current(te));const B=Q1(W);B!==O&&(O=B,h.current&&h.current(B))},oe=new G1;let de=D(),T=null;const k=()=>{const W=D();de=W,E.update(W,0),P(W,0),F(W),x.render(y,w)},ce=()=>{const W=Math.min(oe.getDelta(),.05),te=oe.elapsedTime,B=D(),Q=1-Math.pow(.0015,W);de+=(B-de)*Q,E.update(de,te),P(de,te),F(de),x.render(y,w),T=requestAnimationFrame(ce)},ue=()=>{R(),g&&k()};window.addEventListener("resize",ue);const j=W=>{W.preventDefault(),T&&(cancelAnimationFrame(T),T=null)};p.addEventListener("webglcontextlost",j,!1);let re=null;return g?(re=()=>k(),window.addEventListener("scroll",re,{passive:!0}),k()):T=requestAnimationFrame(ce),()=>{var W;T&&cancelAnimationFrame(T),window.removeEventListener("resize",ue),re&&window.removeEventListener("scroll",re),p.removeEventListener("webglcontextlost",j,!1),J1(y),y.clear(),x.dispose(),(W=x.forceContextLoss)==null||W.call(x)}},[r]),u.jsx("canvas",{ref:o,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class lv extends ia.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){const{error:e}=this.state;if(e){const{fallback:t}=this.props;return typeof t=="function"?t(e):t!==void 0?t:null}return this.props.children}}const tE=560,nE=[0,-1.5,1.5,-2,2],iE=[0,-6,5,-5,6];function rE(r,e,t){const s=t?"0px":"-50%";if(r<=e){const l=nE[r]??0;return{transform:`translate(${iE[r]??0}px, ${t?"0px":s}) rotate(${l}deg)`,opacity:1,zIndex:10+r}}return{transform:`translate(0, ${t?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function sE({card:r,style:e}){return u.jsxs("article",{className:"story-card",style:e,children:[u.jsx("div",{className:"sc-accent"}),u.jsxs("div",{className:"sc-body",children:[u.jsx("p",{className:"sc-num",children:r.num}),u.jsx("h3",{className:"sc-title",children:r.title}),r.callout&&u.jsxs("div",{className:"sc-callout",children:[u.jsx("span",{className:"sc-callout-label",children:r.callout.label}),u.jsx("p",{className:"sc-callout-text",children:r.callout.text})]}),u.jsx("div",{className:"sc-chips",children:r.human.map(t=>u.jsx("span",{className:"chip chip-human",children:t},t))}),u.jsxs("div",{className:"sc-ai",children:[u.jsxs("div",{className:"sc-ai-head",children:[u.jsx("span",{className:"sc-ai-star",children:"✦"}),u.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),u.jsx("div",{className:"sc-chips",style:{margin:0},children:r.ai.map(t=>u.jsx("span",{className:"chip chip-ai",children:t},t))})]})]})]})}function aE(){const r=Re.useRef(null),{theme:e}=Eg(),[t,s]=Re.useState(0),[o,l]=Re.useState(typeof window<"u"?window.innerWidth<821:!1);Re.useEffect(()=>{const x=()=>l(window.innerWidth<821);return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const h=Re.useCallback(x=>s(x),[]),[d,p]=Re.useState(!1),m=Re.useCallback(()=>p(!0),[]),g=Re.useRef(null);return u.jsxs("section",{id:"practice",ref:r,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(40px,6vw,72px) clamp(22px,5vw,44px) clamp(28px,4.5vw,52px)",textAlign:"center"},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"Practice"}),u.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.05,letterSpacing:"-0.03em",margin:"0 auto",maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),u.jsx("div",{ref:g,style:{position:"relative",height:`${tE}vh`},children:u.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[d&&u.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),u.jsx(lv,{fallback:null,children:u.jsx(eE,{sectionRef:g,onStageChange:h,onWebGLUnavailable:m})}),u.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:u.jsx("div",{className:"practice-card-shell",children:dx.map((x,y)=>u.jsx(sE,{card:x,style:rE(y,t,o)},x.id))})})]})}),u.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const Vl={fontFamily:"var(--font-mono)"};function oE(){return u.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[u.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[u.jsx("div",{style:{...Vl,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"Instruments"}),u.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."}),u.jsxs("p",{style:{fontFamily:"var(--font-body)",fontSize:"clamp(15px,1.6vw,17px)",lineHeight:1.55,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"52ch"},children:["Three tools I designed and built for my own workflow — then published to the"," ",u.jsx("span",{style:{color:"var(--text-primary)"},children:"Figma Community"}),", where other designers use them too."]})]}),u.jsx("div",{className:"instruments-grid",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)"},children:hx.map((r,e)=>u.jsx("div",{"data-reveal":"",style:{transitionDelay:`${e*.09}s`,display:"flex"},children:u.jsxs("a",{href:r.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${r.alt} on the Figma Community`,className:"instrument-card",style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)",color:"inherit",width:"100%"},children:[u.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:u.jsx("img",{src:r.logo,alt:r.alt,className:"theme-logo",style:{...r.logoStyle,opacity:1}})}),u.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[u.jsx("div",{style:{...Vl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:r.problem}),u.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),u.jsx("div",{style:{...Vl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:r.result}),u.jsxs("div",{className:"instrument-cta",style:{...Vl,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginTop:20,display:"flex",alignItems:"center",gap:6},children:["View on Figma Community ",u.jsx("span",{className:"instrument-cta-arrow","aria-hidden":"true",children:"↗"})]})]})]})},r.id))})]})})}const lE=144,ug=40;function cE(r){const[e,t]=Re.useState(-1),s=Re.useCallback(h=>t(h),[]),o=Re.useCallback(()=>t(-1),[]),l=Re.useCallback((h,d)=>{const p=h*lE,m=r[h%r.length];if(e===-1)return{x:p,rot:m,scale:1,z:h};const g=h-e;return g===0?{x:p,rot:0,scale:1.04,z:100}:{x:p+(g<0?-ug:ug),rot:m,scale:.98,z:50-Math.abs(g)}},[e,r]);return{activeIndex:e,focus:s,rest:o,getTransform:l}}const uE=Td.map(r=>r.rot);function dE(){const{focus:r,rest:e,getTransform:t}=cE(uE),s=Td.length;return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...dg,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),u.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:u.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:Td.map((o,l)=>{const h=t(l,s);return u.jsxs("article",{onMouseEnter:()=>r(l),onClick:()=>r(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${h.x}px) rotate(${h.rot}deg) scale(${h.scale})`,zIndex:h.z},children:[u.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:o.quote}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[u.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...dg,fontSize:10,fontWeight:700,flex:"none"},children:o.initials}),u.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[u.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:o.name}),u.jsx("br",{}),u.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:o.title})]})]})]},o.id)})})}),u.jsx("div",{style:{marginTop:16,textAlign:"right"},children:u.jsxs("a",{href:fx,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",u.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const dg={fontFamily:"var(--font-mono)"},hg={fontFamily:"var(--font-mono)"};function hE(){return u.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[u.jsx("div",{style:{...hg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),u.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[u.jsxs("div",{children:[u.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[Ti.quoteLead,u.jsx("span",{style:{color:"var(--accent)"},children:Ti.quoteAccent}),Ti.quoteTail]}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:Ti.paragraphs[0]}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:Ti.paragraphs[1]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"portrait-reveal",style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[u.jsx("img",{src:Ti.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),u.jsxs("div",{style:{padding:"16px 18px"},children:[u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),u.jsx("div",{style:{...hg,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),u.jsx("div",{style:{marginTop:14},children:Ti.facts.map(r=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[u.jsx("span",{style:{color:"var(--text-secondary)"},children:r.label}),u.jsx("span",{style:{color:r.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:r.value})]},r.label))}),u.jsx("a",{href:Ti.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),u.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:u.jsx(dE,{})}),u.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[Ti.careerLine,u.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:Ti.careerHighlight})]})]})})}const fg={fontFamily:"var(--font-mono)"};function fE(){return u.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[u.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[u.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),u.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[u.jsx("div",{"data-reveal":"",style:{...fg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),u.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[Zs.heading," ",u.jsx("span",{style:{color:"var(--accent)"},children:Zs.headingAccent})]}),u.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:Zs.links.map(r=>u.jsx("a",{href:r.href,className:`text-link ${r.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:r.variant==="primary"?{paddingBottom:3}:void 0,...r.external?{target:"_blank",rel:"noopener noreferrer"}:{},...r.download?{download:!0}:{},children:r.label},r.label))}),u.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...fg,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:Zs.copyright})]})]})}function cv(r){Re.useEffect(()=>{const e=r.current;if(!e||typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.setAttribute("data-reveal","visible"),t.unobserve(o.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(s=>t.observe(s)),()=>t.disconnect()},[r])}const pE="modulepreload",mE=function(r){return"/"+r},pg={},gE=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=h(t.map(m=>{if(m=mE(m),m in pg)return;pg[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":pE,g||(y.as="script"),y.crossOrigin="",y.href=m,p&&y.setAttribute("nonce",p),document.head.appendChild(y),g)return new Promise((w,E)=>{y.addEventListener("load",w),y.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return o.then(h=>{for(const d of h||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};function vE(r){Re.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e,t,s=!1;return gE(async()=>{const{default:o}=await import("./lenis-niKyKZQP.js");return{default:o}},[]).then(({default:o})=>{if(s)return;e=new o({lerp:.1,smoothWheel:!0});const l=h=>{e.raf(h),t=requestAnimationFrame(l)};t=requestAnimationFrame(l)}),()=>{s=!0,t&&cancelAnimationFrame(t),e&&e.destroy()}},[r])}const xE=!0;function _E(){const r=Re.useRef(null);return cv(r),vE(xE),Re.useEffect(()=>{const e=window.location.hash.slice(1);if(!e)return;let t=!1;const s=()=>{t=!0};window.addEventListener("wheel",s,{passive:!0,once:!0}),window.addEventListener("touchmove",s,{passive:!0,once:!0});const o=[0,120,300,600].map(l=>setTimeout(()=>{var h;t||(h=document.getElementById(e))==null||h.scrollIntoView()},l));return()=>{o.forEach(clearTimeout),window.removeEventListener("wheel",s),window.removeEventListener("touchmove",s)}},[]),u.jsxs("div",{id:"top",ref:r,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[u.jsx(Tg,{}),u.jsxs("main",{children:[u.jsx(yx,{}),u.jsx(Rx,{}),u.jsx(Lx,{}),u.jsx(aE,{}),u.jsx(oE,{}),u.jsx(hE,{})]}),u.jsx(fE,{})]})}const zd={},uv=ia.createContext(zd);function Ji(r){const e=ia.useContext(uv);return ia.useMemo(function(){return typeof r=="function"?r(e):{...e,...r}},[e,r])}function yE(r){let e;return r.disableParentContext?e=typeof r.components=="function"?r.components(zd):r.components||zd:e=Ji(r.components),ia.createElement(uv.Provider,{value:e},r.children)}function dv(){return u.jsx(Tg,{subpage:!0})}const vt=r=>u.jsx("path",{d:r},r),SE={user:[vt("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"),u.jsx("circle",{cx:"12",cy:"7",r:"4"},"c")],users:[vt("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"),u.jsx("circle",{cx:"9",cy:"7",r:"4"},"c"),vt("M22 21v-2a4 4 0 0 0-3-3.87"),vt("M16 3.13a4 4 0 0 1 0 7.75")],pin:[vt("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"),u.jsx("circle",{cx:"12",cy:"10",r:"3"},"c")],device:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),vt("M12 18h.01")],calendar:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"},"r"),vt("M16 2v4M8 2v4M3 10h18")],wrench:[vt("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")],rocket:[vt("M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"),vt("M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"),vt("M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"),vt("M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5")],trendUp:[u.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"},"a"),u.jsx("polyline",{points:"16 7 22 7 22 13"},"b")],cube:[vt("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"),vt("M3.27 6.96 12 12.01l8.73-5.05"),vt("M12 22.08V12")],layers:[u.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"},"a"),u.jsx("polyline",{points:"2 17 12 22 22 17"},"b"),u.jsx("polyline",{points:"2 12 12 17 22 12"},"c")],check:[vt("M22 11.08V12a10 10 0 1 1-5.93-9.14"),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"},"p")],ban:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),u.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},"l")],shield:[vt("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],zap:[u.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},"p")],alert:[vt("M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"),u.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"},"a"),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},"b")],compass:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},"p")],eye:[vt("M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"),u.jsx("circle",{cx:"12",cy:"12",r:"3"},"c")],refresh:[vt("M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"),vt("M21 3v5h-5"),vt("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"),vt("M8 16H3v5")],merge:[u.jsx("circle",{cx:"18",cy:"18",r:"3"},"a"),u.jsx("circle",{cx:"6",cy:"6",r:"3"},"b"),vt("M6 21V9a9 9 0 0 0 9 9")],minimize:[u.jsx("polyline",{points:"4 14 10 14 10 20"},"a"),u.jsx("polyline",{points:"20 10 14 10 14 4"},"b"),u.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"},"c"),u.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"},"d")],sliders:[u.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"},"a"),u.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"},"b"),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"},"c"),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"},"d"),u.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"},"e"),u.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"},"f"),u.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"},"g"),u.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"},"h"),u.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"},"i")],filter:[u.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},"p")],sparkles:[vt("M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7L12 3z"),vt("M19 15l.6 1.6L21 17.2l-1.4.6L19 19l-.6-1.6L17 17.8l1.4-.6L19 15z")],flask:[vt("M9 3h6"),vt("M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3"),vt("M7 15h10")],chart:[u.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"},"a"),u.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"},"b"),u.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"},"c")],flag:[vt("M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"),u.jsx("line",{x1:"4",y1:"22",x2:"4",y2:"15"},"l")],target:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"a"),u.jsx("circle",{cx:"12",cy:"12",r:"6"},"b"),u.jsx("circle",{cx:"12",cy:"12",r:"2"},"c")],smartphone:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),vt("M12 18h.01")],lightbulb:[vt("M9 18h6"),vt("M10 22h4"),vt("M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14")]},mg={quote:"M9.5 5C6.5 5 4 7.5 4 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.6 19.5 13 16 13 10.6 13 7.3 11.6 5 9.5 5Zm10 0C16.5 5 14 7.5 14 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.6 19.5 23 16 23 10.6 23 7.3 21.6 5 19.5 5Z"};function Ur({name:r,size:e=18,strokeWidth:t=1.75,className:s,style:o,...l}){if(mg[r])return u.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false",...l,children:u.jsx("path",{d:mg[r]})});const h=SE[r];return h?u.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...l,children:h}):null}const hv=Re.createContext({});function Bd(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(Bd).join(" "):r&&r.props?Bd(r.props.children):""}function fv(r){return Bd(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function wE({children:r,eyebrow:e,icon:t,id:s,...o}){const l=s||fv(r),h=Re.useContext(hv),d=t||h[l];return u.jsxs("div",{className:"cs-heading",id:l,...o,children:[u.jsxs("div",{className:"cs-heading-eyebrow",children:[u.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),d?u.jsx(Ur,{name:d,size:14,className:"cs-heading-icon"}):null,e?u.jsx("span",{children:e}):null]}),u.jsx("h2",{className:"cs-heading-title",children:u.jsx("a",{href:`#${l}`,className:"cs-heading-anchor",children:r})})]})}function ME({children:r,id:e,...t}){const s=e||fv(r);return u.jsx("h3",{className:"cs-subheading",id:s,...t,children:r})}function Kd({label:r="The outcome",icon:e="rocket",items:t=[],...s}){return u.jsxs("section",{className:"cs-outcomeband","aria-label":r,...s,children:[u.jsxs("div",{className:"cs-outcomeband-label",children:[u.jsx(Ur,{name:e,size:15}),u.jsx("span",{children:r})]}),u.jsx("div",{className:"cs-outcomeband-list",children:t.map((o,l)=>u.jsxs("div",{className:"cs-outcome",children:[u.jsx("span",{className:"cs-outcome-icon","aria-hidden":"true",children:u.jsx(Ur,{name:o.icon,size:20})}),u.jsx("div",{className:"cs-outcome-text",children:o.text})]},l))})]})}function Xe({children:r,lead:e=!1,className:t="",...s}){return u.jsx("div",{className:`cs-prose${e?" cs-prose--lead":""}${t?` ${t}`:""}`,...s,children:r})}function vi({children:r,variant:e="principle",cite:t,...s}){const o=e==="user"?"user":"principle";return u.jsxs("figure",{className:`cs-pullquote cs-pullquote--${o}`,...s,children:[o==="user"?u.jsx("span",{className:"cs-pullquote-glyph","aria-hidden":"true",children:u.jsx(Ur,{name:"quote",size:40})}):u.jsx("span",{className:"cs-pullquote-chip","aria-hidden":"true",children:u.jsx(Ur,{name:"lightbulb",size:18})}),u.jsx("blockquote",{className:"cs-pullquote-text",children:r}),t?u.jsx("figcaption",{className:"cs-pullquote-cite",children:t}):null]})}function Dr({src:r,alt:e="",loading:t="lazy"}){const[s,o]=Re.useState(!1);return r&&!s?u.jsx("span",{className:"cs-figure-media",children:u.jsx("img",{src:r,alt:e,loading:t,decoding:"async",onError:()=>o(!0)})}):u.jsx(EE,{alt:e,file:r})}function EE({alt:r="",file:e,bare:t=!1}){const s=typeof e=="string"?e.split("/").pop():null;return u.jsxs("div",{className:`cs-placeholder${t?" cs-placeholder--bare":""}`,role:"img","aria-label":r||"Image placeholder",children:[u.jsx("span",{className:"cs-placeholder-tag",children:"Image"}),r?u.jsx("span",{className:"cs-placeholder-alt",children:r}):null,s?u.jsx("span",{className:"cs-placeholder-file",children:s}):null]})}function qn({src:r,alt:e="",caption:t,fullBleed:s=!1,wide:o=!1,...l}){const h=`cs-figure${s?" cs-figure--full":o?" cs-figure--wide":""}`;return u.jsxs("figure",{className:h,...l,children:[u.jsx(Dr,{src:r,alt:e}),t?u.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function Zd({src:r,alt:e="",chip:t,secondary:s,bare:o,...l}){const h=["cs-hero",s&&!o?"cs-hero--multi":"",o?"cs-hero--bare":""].filter(Boolean).join(" ");return u.jsxs("div",{className:h,...l,children:[u.jsx("span",{className:"cs-hero-grid","aria-hidden":"true"}),u.jsx("span",{className:"cs-hero-glow","aria-hidden":"true"}),u.jsx("div",{className:"cs-hero-stage",children:o?u.jsx(Dr,{src:r,alt:e,loading:"eager"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"cs-hero-device cs-hero-device--tablet",children:u.jsx("div",{className:"cs-hero-screen",children:u.jsx(Dr,{src:r,alt:e,loading:"eager"})})}),s?u.jsx("div",{className:"cs-hero-device cs-hero-device--phone",children:u.jsx("div",{className:"cs-hero-screen cs-hero-screen--phone",children:u.jsx(Dr,{src:s.src,alt:s.alt})})}):null]})}),t?u.jsxs("span",{className:"cs-hero-chip",children:[u.jsx("span",{className:"cs-hero-chip-dot","aria-hidden":"true"}),t]}):null]})}function TE({items:r=[],caption:e,...t}){const s=Math.min(Math.max(r.length,1),4);return u.jsxs("figure",{className:"cs-illrow",style:{"--cs-cols":s},...t,children:[u.jsx("div",{className:"cs-illrow-grid",children:r.map((o,l)=>u.jsxs("div",{className:"cs-illrow-cell",children:[u.jsx(Dr,{src:o.src,alt:o.alt}),o.title||o.tag?u.jsxs("div",{className:"cs-illrow-meta",children:[o.title?u.jsx("div",{className:"cs-illrow-title",children:o.title}):null,o.tag?u.jsx("span",{className:`cs-illrow-tag cs-illrow-tag--${o.tone||"neutral"}`,children:o.tag}):null]}):null]},l))}),e?u.jsx("figcaption",{className:"cs-caption",children:e}):null]})}function pv({before:r={},after:e={},caption:t,beforeLabel:s="Before",afterLabel:o="After",...l}){return u.jsxs("figure",{className:"cs-beforeafter",...l,children:[u.jsxs("div",{className:"cs-beforeafter-grid",children:[u.jsxs("div",{className:"cs-ba-col",children:[u.jsx("span",{className:"cs-ba-tag cs-ba-tag--before",children:s}),u.jsx(Dr,{src:r.src,alt:r.alt})]}),u.jsxs("div",{className:"cs-ba-col",children:[u.jsx("span",{className:"cs-ba-tag cs-ba-tag--after",children:o}),u.jsx(Dr,{src:e.src,alt:e.alt})]})]}),t?u.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function ri({title:r,index:e,media:t,tradeoff:s,children:o,...l}){return u.jsxs("section",{className:"cs-decision",...l,children:[u.jsxs("div",{className:"cs-decision-rail",children:[e?u.jsx("div",{className:"cs-decision-index",children:e}):null,r?u.jsx("h3",{className:"cs-decision-title",children:r}):null]}),u.jsxs("div",{className:"cs-decision-main",children:[u.jsx("div",{className:"cs-decision-body",children:o}),t?u.jsxs("div",{className:"cs-decision-media",children:[u.jsx(Dr,{src:t.src,alt:t.alt}),t.caption?u.jsx("div",{className:"cs-caption",children:t.caption}):null]}):null,s?u.jsxs("div",{className:"cs-tradeoff",children:[s.considered?u.jsxs("div",{className:"cs-tradeoff-row",children:[u.jsx("span",{className:"cs-tradeoff-label",children:"Alternative considered"}),u.jsx("p",{className:"cs-tradeoff-text",children:s.considered})]}):null,s.why?u.jsxs("div",{className:"cs-tradeoff-row",children:[u.jsx("span",{className:"cs-tradeoff-label",children:"Why we didn’t"}),u.jsx("p",{className:"cs-tradeoff-text",children:s.why})]}):null]}):null]})]})}function bE(r){return typeof r=="string"||typeof r=="number"?String(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""):""}function Qd({heading:r,eyebrow:e,icon:t,intro:s,coda:o,id:l,children:h,...d}){const p=l||bE(r);return u.jsxs("section",{className:"cs-decisionlist",id:p,...d,children:[u.jsxs("div",{className:"cs-decisionlist-head",children:[u.jsxs("div",{className:"cs-heading-eyebrow",children:[u.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),t?u.jsx(Ur,{name:t,size:14,className:"cs-heading-icon"}):null,e?u.jsx("span",{children:e}):null]}),r?u.jsx("h2",{className:"cs-decisionlist-title",children:u.jsx("a",{href:`#${p}`,className:"cs-heading-anchor",children:r})}):null,s?u.jsx("div",{className:"cs-prose cs-decisionlist-intro",children:s}):null]}),u.jsx("div",{className:"cs-decisionlist-rows",children:h}),o?u.jsxs("div",{className:"cs-decisionlist-coda",children:[o.title?u.jsx("h3",{className:"cs-subheading cs-decisionlist-coda-title",children:o.title}):null,o.body?u.jsx("div",{className:"cs-prose cs-decisionlist-coda-body",children:o.body}):null]}):null]})}function jd({caption:r,head:e=[],rows:t=[],rowHeader:s=!0,minWidth:o,...l}){return u.jsx("div",{className:"cs-table-wrap",...l,children:u.jsx("div",{className:"cs-table-scroll",children:u.jsxs("table",{className:"cs-table",style:o?{minWidth:o}:void 0,children:[r?u.jsx("caption",{children:r}):null,e.length?u.jsx("thead",{children:u.jsx("tr",{children:e.map((h,d)=>u.jsx("th",{scope:"col",children:h},d))})}):null,u.jsx("tbody",{children:t.map((h,d)=>u.jsx("tr",{children:h.map((p,m)=>m===0&&s?u.jsx("th",{scope:"row",children:p},m):u.jsx("td",{children:p},m))},d))})]})})})}function Jd({items:r=[],...e}){return u.jsx("div",{className:"cs-metricrow",...e,children:u.jsx("div",{className:"cs-metricrow-grid",children:r.map((t,s)=>u.jsxs("div",{className:"cs-metric",children:[t.icon?u.jsx("span",{className:"cs-metric-icon","aria-hidden":"true",children:u.jsx(Ur,{name:t.icon,size:18})}):null,t.value!=null?u.jsx("div",{className:`cs-metric-value${t.valueText?" cs-metric-value--text":""}`,children:t.value}):null,t.label?u.jsx("div",{className:"cs-metric-label",children:t.label}):null,t.note?u.jsx("div",{className:"cs-metric-note",children:t.note}):null]},s))})})}const AE={h2:r=>u.jsx(wE,{...r}),h3:r=>u.jsx(ME,{...r})},RE={Role:"user",Team:"users",Region:"pin",Platform:"device",Timeline:"calendar",Tools:"wrench"};function CE({meta:r={},next:e,children:t}){const{title:s,subtitle:o,tags:l=[],glance:h=[],accent:d}=r,p=d?{"--cs-accent":d}:void 0,m=Re.useRef(null);return Re.useEffect(()=>{const g=m.current;g&&g.querySelectorAll(".cs-content > *").forEach(x=>{!x.classList.contains("cs-figure--full")&&!x.classList.contains("cs-hero")&&x.setAttribute("data-reveal","")})},[]),cv(m),u.jsxs("div",{className:"cs-page",style:p,ref:m,children:[u.jsx(PE,{}),u.jsx(dv,{}),u.jsxs("main",{children:[u.jsxs("header",{className:"cs-wrap",children:[u.jsxs("div",{className:"cs-masthead",children:[l.length?u.jsx("div",{className:"cs-tags",children:l.join("  ·  ")}):null,s?u.jsx("h1",{className:"cs-title",children:s}):null,o?u.jsx("p",{className:"cs-subtitle",children:o}):null]}),h.length?u.jsx("dl",{className:"cs-glance",children:h.map(g=>u.jsxs("div",{className:"cs-glance-item",children:[u.jsx("span",{className:"cs-glance-icon","aria-hidden":"true",children:u.jsx(Ur,{name:g.icon||RE[g.label],size:16})}),u.jsxs("div",{className:"cs-glance-textwrap",children:[u.jsx("dt",{className:"cs-glance-label",children:g.label}),u.jsx("dd",{className:"cs-glance-value",children:g.value})]})]},g.label))}):null]}),u.jsx("div",{className:"cs-wrap",children:u.jsx("article",{className:"cs-content",children:t})})]}),u.jsx(LE,{next:e})]})}function PE(){const r=Re.useRef(null);return Re.useEffect(()=>{let e=0;const t=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{const s=document.documentElement,o=s.scrollHeight-s.clientHeight,l=o>0?Math.min(Math.max(s.scrollTop/o,0),1):0;r.current&&(r.current.style.transform=`scaleX(${l})`)})};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),cancelAnimationFrame(e)}},[]),u.jsx("div",{className:"cs-progress","aria-hidden":"true",children:u.jsx("i",{ref:r})})}function LE({next:r}){var e;return u.jsx("footer",{className:"cs-footer",children:u.jsxs("div",{className:"cs-footer-inner",children:[u.jsx("div",{className:"cs-next-label",children:r?"Next project":"More work"}),r?u.jsxs(Jl,{to:`/case-studies/${r.slug}`,className:"cs-next-link",children:[u.jsx("span",{children:((e=r.meta)==null?void 0:e.title)||r.slug}),u.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}):u.jsxs("a",{href:"/#work",className:"cs-next-link",children:[u.jsx("span",{children:"See all work"}),u.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}),u.jsx("div",{className:"cs-footer-contact",children:Zs.links.map(t=>u.jsx("a",{href:t.href,className:`text-link ${t.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:t.variant==="primary"?{paddingBottom:3}:void 0,...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},...t.download?{download:!0}:{},children:t.label},t.label))}),u.jsxs("div",{className:"cs-footer-meta",children:[u.jsx("span",{children:Zs.copyright}),u.jsx("a",{href:"/#top",className:"text-link text-link--muted",children:"Back to top ↑"})]})]})})}const Wn="/case-studies/cards/images",NE={order:2,title:"Self-service card management — a two-hour banking task, resolved in taps",subtitle:"Giving Neuflize OBC private-banking clients direct control of their debit cards — without loosening a single guardrail.",tags:["Private Banking","Native iOS & Android","Self-service","End-to-end ownership"],glance:[{label:"Role",value:"Sole designer, end to end — workshop facilitation, user flows, interaction and visual design, and design–engineering alignment"},{label:"Team",value:"1 Designer (me) · Engineering / tech lead · RMs & Operations as research stakeholders"},{label:"Client",value:"Neuflize OBC — ABN AMRO Private Banking, France"},{label:"Platform",value:"Native iOS & Android"},{label:"Design system",value:"ABN AMRO Emerald"},{label:"Status",value:"Live in production"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-hard-part-was-translation-not-requirements":"refresh","built-on-emerald":"layers","what-we-kept-with-a-human-on-purpose":"flag","the-impact-in-the-operation":"chart","the-takeaway":"target"}};function gg(r){const e={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...Ji(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,u.jsx(Zd,{src:`${Wn}/01-hero.png`,alt:"The Manage card screen: a Neuflize OBC Visa Infinite card, a green ‘This card is active’ status, Card details and Block actions, and live payment and cash-withdrawal limits with progress bars.",secondary:{src:`${Wn}/02-all-cards.png`,alt:"The All cards overview — a client’s debit cards as tappable tiles, each showing the last four digits and holder name."},chip:"Live in production"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["At Neuflize OBC — ABN AMRO's private bank in France — clients had ",u.jsx(e.strong,{children:"no way to manage their own debit cards"}),". Adjusting a limit, blocking a lost card, turning on payments abroad: each one meant contacting a relationship manager and waiting."]}),u.jsxs(e.p,{children:["The feature I designed is ",u.jsx(e.strong,{children:"live in production"})," on native iOS and Android. It takes a change that used to run through two people and up to two hours, and resolves it in a few taps — while keeping every check a private bank needs."]})]}),`
`,u.jsx(Kd,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Shipped and live"})," on iOS and Android — clients now manage their own cards, not a prototype or a stalled pilot"]})},{icon:"zap",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Up to two hours → a matter of taps"})," — the client acts directly, with no relationship-manager handoff in the loop"]})},{icon:"users",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Routine work off two teams' desks"})," — thousands of card requests a year no longer route through RMs and operations by hand"]})}]}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"One principle held the whole thing together:"})})}),`
`,u.jsx(vi,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Self-service doesn't mean removing friction everywhere."})," It means putting friction exactly where the ",u.jsx("em",{children:"risk"})," is — and nowhere else."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"Picture being a private-banking client who wants to raise a card limit before a large purchase. You can't just do it. You call — or email — your relationship manager (RM). They pick up, eventually. You explain. They pass it to the operations team, who log into the card-management back office and make the change by hand, then tell the RM, who tells you it's done."}),u.jsxs(e.p,{children:["Nothing about that request was complex. The wait was ",u.jsx(e.strong,{children:"entirely structural"})," — the client simply had no door into the system."]})]}),`
`,u.jsx(vi,{variant:"user",children:"Clients weren't asking for anything clever. They wanted to change a limit or block a card — and felt powerless that they couldn't."}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"What that cost, measured across the operation:"}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:["A client could wait ",u.jsx(e.strong,{children:"up to two hours"})," for a change as small as a limit bump."]}),`
`,u.jsxs(e.li,{children:["RMs fielded ",u.jsx(e.strong,{children:"2,000+ card requests a year"})," — routine work pulling them off the advisory conversations they're actually there for."]}),`
`,u.jsxs(e.li,{children:["Operations spent roughly ",u.jsx(e.strong,{children:"80 hours a week"})," processing those requests by hand, acting as a manual layer between the client and a system that could have taken the instruction directly."]}),`
`]}),u.jsxs(e.p,{children:["The core question was blunt: ",u.jsx(e.em,{children:"could card management become fully self-service — without a private bank giving up any of its control?"})]})]}),`
`,u.jsx(qn,{wide:!0,src:`${Wn}/03-current-journey.png`,alt:"A service blueprint of the current journey for raising a card limit: client → relationship manager → operations team → card back-office → back again, with a row of frowning faces and pain-point notes across every handoff.",caption:"The old journey for one limit change. Every column is a handoff; every handoff is a place it can stall — and the client can't act at any point in the chain."}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["Laid out end to end, the diagnosis was obvious: ",u.jsx(e.strong,{children:"every step was a handoff, and every handoff was a failure point"})," — a person to reach, a queue to wait in, a verbal instruction that could be misheard, and no status the client could see. The job wasn't to speed the chain up. It was to collapse it into a single self-contained flow the client runs alone."]})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"I started with interviews on both sides of the counter — clients, RMs, operations, and digital support — to map where the friction actually lived rather than where the business assumed it did. Two pictures lined up: clients felt powerless over trivial tasks, and the internal teams knew these requests were routine and repetitive but still had to touch every one."}),u.jsxs(e.p,{children:["Then, before drawing anything, I ran a ",u.jsx(e.strong,{children:"workshop with stakeholders"})," to pressure-test the problem space — mapping the card tasks clients actually did against the problems they actually hit, so we designed for real behaviour, not an assumed feature list."]})]}),`
`,u.jsx(qn,{src:`${Wn}/04-workshop.png`,alt:"A whiteboard from the discovery workshop: clustered sticky notes under Usage and Problem columns, with ‘How might we…’ questions written alongside for lost cards, managing multiple cards, changing limits, forgotten PINs and payment errors.",caption:"Mapping usage against real problems — the input that decided what to build first, and what to leave for later."}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["That mapping is where the ",u.jsx(e.strong,{children:"scope decision"})," got made. Clients hit a long tail of card problems, but four rose to the top on frequency and on how cleanly they could be solved self-service:"]}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Limit change"})," — the single most common request"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Block / unblock"})," — urgent and time-sensitive by nature"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Card removal"})," — rare, but entirely manual today"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Payments abroad"})," — recurring friction for travelling clients"]}),`
`]}),u.jsx(e.p,{children:"Everything else stayed out of v1 on purpose. Choosing four and defending the boundary mattered as much as the design itself."}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"One boundary worth naming:"})," I owned the client-facing design across those flows and the card landing page. The routing and limit ",u.jsx(e.em,{children:"policy"}),", the card-management back office, and the identity/authentication service were the bank's systems — engineering owned whether the app could even reach them, and the entire self-service premise rode on that access being there. Knowing exactly where my slice started and ended shaped every trade-off below."]})]}),`
`,u.jsx(e.h2,{children:"The hard part was translation, not requirements"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["I'll be honest about where the difficulty was on this one. The ",u.jsx(e.em,{children:"requirement"})," was never ambiguous: make card management self-service, keep it bank-grade secure. The challenge was entirely in the ",u.jsx(e.strong,{children:"design"})," — turning a task that had always been mediated by a person, with all the verification and reassurance that person quietly provided, into a screen a client trusts enough to act on alone."]}),u.jsx(e.p,{children:"Two surfaces carried most of that weight, and I explored both widely before committing:"}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The card landing page"})," had to answer a client's first two questions at a glance — ",u.jsx(e.em,{children:"what can I do here, and is my card okay?"})," — without burying the state under a menu."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The limit-change interaction"})," had to hold a surprising amount: how much, for how long, whether it's permanent or temporary, and proof that it's really you — all without feeling like the phone call it replaced."]})]}),`
`,u.jsx(qn,{wide:!0,src:`${Wn}/05-landing-explorations.png`,alt:"Six explorations of the card landing page side by side, varying how card state, limits, management actions and payment toggles are ordered and grouped.",caption:"Landing-page explorations. The question every variant was tested against: does a client see their card's state and their next action without thinking?"}),`
`,u.jsx(qn,{wide:!0,src:`${Wn}/06-limit-explorations.png`,alt:"Explorations of the limit-change component: different ways of showing the current limit, a new amount, preset chips, and the temporary-versus-permanent choice.",caption:"Limit-change explorations — the hardest single component, because it had to carry amount, duration and identity at once."}),`
`,u.jsx(e.h2,{children:"The design decisions"}),`
`,u.jsxs(Qd,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"Every decision below is the same principle applied at a different level of risk: keep the low-risk actions instant, and spend the client's attention only where a mistake would actually cost them."}),coda:{title:"Built to survive real banking states",body:u.jsx(u.Fragment,{children:"Underneath all of it, the interface had to hold states the phone call used to absorb: a blocked card, a limit that's only temporary, missing contact details, an identity that still needs proving. One decision per screen, and the card's current state visible at every step."})},children:[u.jsx(ri,{index:"01",title:"The landing page shows state first, actions second",media:{src:`${Wn}/08-manage-card-final.png`,alt:"The final Manage card landing: the card itself, an active/blocked status line, Card details and Block, then live limits with progress bars, then payment toggles, then Delete card."},tradeoff:{considered:"A flat menu of card actions — the conventional pattern.",why:u.jsxs(u.Fragment,{children:["A menu hides the one thing clients open the screen to see: ",u.jsx(e.strong,{children:"is my card okay, and what's left on it?"})," It also flattens risk — listing “view details” and “raise my limit by €30k” as equal rows. Leading with live state, then ordering actions by how often they're used, answered the real first question."]})},children:u.jsxs(e.p,{children:["The landing page opens with the card and a plain status line — ",u.jsx(e.em,{children:"this card is active"})," — then live payment and cash-withdrawal limits as progress bars, then management actions, and only then the destructive ones. It reads top to bottom as ",u.jsx(e.em,{children:"reassurance → routine → rare"}),"."]})}),u.jsx(ri,{index:"02",title:"Authenticate at the point of commitment — not on the way in",media:{src:`${Wn}/09-manage-payments.png`,alt:"The Manage payments section: simple on/off toggles for Remote payment, Cash withdrawal and Payment abroad, with no authentication step."},tradeoff:{considered:"Gating the whole feature behind a verification wall — the compliance-safe instinct to lock every action.",why:u.jsxs(u.Fragment,{children:["Uniform friction would have rebuilt the exact wait we were removing. Most card actions are low-risk and reversible; a few aren't. So I put the identity step where the ",u.jsx(e.strong,{children:"commitment"})," is — raising a limit, deleting a card — and left browsing, viewing and toggling free."]})},children:u.jsx(e.p,{children:"Viewing card state and flipping low-risk controls — remote payment, cash withdrawal, payments abroad — happen instantly, because they're reversible and carry little exposure. The identity check appears only when a client is about to do something that would actually cost them if it were the wrong person. Same feature, friction calibrated to the stakes."})}),u.jsx(ri,{index:"03",title:"Default the limit change to temporary, not permanent",media:{src:`${Wn}/10-limit-change-final.png`,alt:"The limit-change flow across screens: enter a new amount within a shown ceiling, a summary of current versus new limit with an end date, a 5-digit PIN identity step, and a success confirmation.",caption:"Enter an amount within the ceiling → confirm the summary → prove identity → done. The end date is part of the request, not an afterthought."},tradeoff:{considered:"A single permanent “new limit” field, the simplest possible control.",why:u.jsxs(u.Fragment,{children:["Watching the real requests, most limit bumps are for one reason — a large purchase, a trip — not a permanent change. A permanent-only field either over-exposes the client indefinitely or forces a ",u.jsx(e.em,{children:"second"})," call to put it back. Foregrounding a temporary increase with an automatic end date fit what clients actually needed."]})},children:u.jsxs(e.p,{children:["The flow makes duration a first-class part of the request: a client raises the limit ",u.jsx(e.em,{children:"for seven days"}),", or ",u.jsx(e.em,{children:"for thirty"}),", up to a clearly shown ceiling, and it reverts on its own. The card landing then carries a quiet “temporarily valid until…” marker so the temporary state is never a surprise. Identity is proven with a PIN step folded into the flow — not a separate hoop."]})}),u.jsx(ri,{index:"04",title:"Block is instant and reversible — cancelling stays with a human",media:{src:`${Wn}/11-block-card.png`,alt:"The block flow: a confirmation sheet to block the card, and the resulting blocked state with a padlock over the card, an Unblock action, and a note to call support to fully cancel."},tradeoff:{considered:"Treating block as a single destructive “cancel card” action.",why:u.jsxs(u.Fragment,{children:["Blocking is usually a ",u.jsx(e.em,{children:"panic"})," action — a card that's briefly missing. It should be instant and, just as importantly, ",u.jsx(e.strong,{children:"reversible in seconds"})," when the card turns up. Cancellation is destructive and rare, so it deliberately stays a call. Collapsing the two would make the common, urgent case as heavy as the rare one."]})},children:u.jsx(e.p,{children:"A client blocks a card in one confirmation, and the card visibly locks. If it resurfaces, they unblock it just as fast — no call, no wait. Permanent cancellation, which can't be undone, still routes to support on purpose."})}),u.jsxs(ri,{index:"05",title:"When verification is missing, fall back — don't dead-end",children:[u.jsx(e.p,{children:"A sensitive change needs verified contact details to confirm it's really the client. Rather than let someone reach the end of a flow and hit a wall, the design checks up front: if a verified email or phone number is on file, the change proceeds and the identity step confirms it; if not, the flow routes cleanly to the bank to sort the details out first."}),u.jsx(e.p,{children:"It's the unglamorous decision that keeps a security requirement from becoming a dead end — the app degrades to a human hand-off gracefully, instead of failing the client at the last step."})]})]}),`
`,u.jsx(e.h2,{children:"Built on Emerald"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["None of this shipped as bespoke UI. Every screen is built on ",u.jsx(e.strong,{children:"ABN AMRO's Emerald design system"}),", so the feature reads as part of the wider app rather than a bolt-on, and it moved into development faster because engineering was assembling known, governed components rather than interpreting one-off designs."]}),u.jsxs(e.p,{children:["That's the quiet leverage of designing inside a system: my slice was the ",u.jsx(e.em,{children:"flows and the decisions"}),"; the system carried the consistency and cut the handoff cost. On a regulated private-banking app, that's not a constraint to work around — it's what makes the work trustworthy and shippable."]})]}),`
`,u.jsx(qn,{src:`${Wn}/13-emerald-cards.png`,alt:"The Neuflize OBC card family rendered in the Emerald system — Visa Classic, Visa Infinite, Visa Business and Premier variants, consistent in type, layout and treatment.",caption:"The card family in Emerald — consistent with the broader digital ecosystem, and faster to hand off because of it."}),`
`,u.jsx(e.h2,{children:"What we kept with a human, on purpose"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["The honest boundary of this release: ",u.jsx(e.strong,{children:"not every card action became self-service, and that was a design choice, not a gap I missed."})]}),u.jsxs(e.p,{children:["Two things still route to a person. ",u.jsx(e.strong,{children:"Permanently cancelling a card"})," stays with the support team — it's irreversible and identity-sensitive, and the seconds saved by automating it aren't worth the risk of getting it wrong. And ",u.jsx(e.strong,{children:"correcting stale contact details"})," — a wrong email or phone number on file — routes to the relationship manager rather than letting the client edit the very data used to verify them."]}),u.jsxs(e.p,{children:["Both are deliberate. In a private bank, the right MVP isn't the one that automates the most actions — it's the one that automates every action where self-service is clearly ",u.jsx(e.em,{children:"safer and faster"}),", and knows precisely where to stop. Naming that line is the point, not apologising for it."]})]}),`
`,u.jsx(qn,{wide:!0,src:`${Wn}/14-delete-card.png`,alt:"The delete-card flow: choose a reason (stolen, lost, fraud), opt into a replacement and a new PIN, confirm the details on file, review a summary, and a success screen — with a route to contact the RM if the details are wrong.",caption:"The most sensitive flow carries the most steps — reason, replacement, identity, and a confirm — with a human hand-off kept in reach when the details don't match."}),`
`,u.jsx(e.h2,{children:"The impact, in the operation"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"The change isn't just faster for the client — it changes who does the work."})}),`
`,u.jsx(Jd,{items:[{icon:"zap",value:"2h → taps",label:"Time to change a card limit",note:"Client acts directly — no RM in the loop"},{icon:"users",value:"2,000+/yr",label:"Card requests off RMs’ desks",note:"Freeing them for advisory work"},{icon:"ban",value:"~80 hrs/wk",label:"Manual operations work removed",note:"The middle layer, automated away"}]}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["The figures above are the operation's own numbers — measured internally rather than estimated by me, and the reason the project got prioritised. Beyond the time saved, the ",u.jsx(e.em,{children:"shape"})," of the work shifted: RMs got hours back for the advisory conversations that justify a private bank, operations stopped being a manual relay, and the client got something a phone call never gave them — the ability to act the moment they needed to."]}),u.jsx(e.p,{children:"It also set the pattern. Proving that a genuinely sensitive banking task could be made self-service — securely, inside the design system — laid the groundwork for the next self-service capabilities on the platform."})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["This wasn't a task made prettier. It was a ",u.jsx(e.strong,{children:"handoff chain collapsed into a flow the client runs alone"})," — and the discipline that made it safe to do was refusing to spread friction evenly."]}),u.jsxs(e.p,{children:["The clearest lesson: on a regulated product, self-service is a question of ",u.jsx(e.em,{children:"placement"}),", not addition. Put the guardrail exactly where the risk is, make everything else instant, and know — precisely — which few actions still belong with a human. That's what turns a two-hour call into a few taps without a bank giving up an ounce of control."]})]}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on the card-management feature, end to end."})})})]})}function DE(r={}){const{wrapper:e}={...Ji(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(gg,{...r})}):gg(r)}const IE=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Wn,default:DE,meta:NE},Symbol.toStringTag,{value:"Module"})),UE={order:4,title:"Postbox — a complex document archive, made self-service",subtitle:"Reorganising a private-bank document archive around life events — the way clients actually think — across iOS, Android and web.",tags:["Private banking","Information architecture","Multi-platform","Self-service"],glance:[{label:"Client",value:"ABN AMRO"},{label:"Platform",value:"iOS · Android · Web"},{label:"Focus",value:"Document archive · information architecture"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-takeaway":"target"}};function vg(r){const e={em:"em",h2:"h2",p:"p",...Ji(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"A complex document archive made self-service — across all three platforms."})}),`
`,u.jsx(Jd,{items:[{icon:"smartphone",value:"3 platforms",valueText:!0,label:"iOS · Android · Web"},{icon:"target",value:"Self-serve",valueText:!0,label:"Was banker-led"}]}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"Clients needed their banker to find every document, because files were sorted the bank's way, not theirs."})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job."})}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsx(vi,{variant:"principle",children:u.jsx(e.p,{children:"Organise by life event — the client's mental model."})}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer"})})})]})}function kE(r={}){const{wrapper:e}={...Ji(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(vg,{...r})}):vg(r)}const FE=Object.freeze(Object.defineProperty({__proto__:null,default:kE,meta:UE},Symbol.toStringTag,{value:"Module"})),qi="/case-studies/postoffice/images",OE={order:3,title:"Modernizing post-office management — a legacy counter terminal, re-architected as a cloud portal",subtitle:"A mandatory technical migration turned into operational freedom — moving staff management off a desk-bound terminal and into a device-agnostic cloud portal.",tags:["Enterprise portal","Responsive web","Workforce management","Systems thinking"],glance:[{label:"Role",value:"Design Consultant — owned the UX end to end: field research, interaction design, and design–engineering alignment against a hard deadline"},{label:"Region",value:"Norway"},{label:"Platform",value:"Responsive web portal (mobile-first)"},{label:"Timeline",value:"1 month"},{label:"Tools",value:"Figma, Generative AI for early ideation"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-insight-that-changed-the-scope":"refresh","the-design-decisions":"sliders","how-the-work-got-made":"sparkles","the-impact":"chart","the-takeaway":"target"}};function xg(r){const e={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...Ji(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,`
`,u.jsx(Zd,{src:`${qi}/01-hero.png`,alt:"The finished post-office management portal shown on a desktop browser and a phone side by side — the same staff-management workflow, responsive across both.",bare:!0,chip:"Mandatory migration, delivered in 1 month"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["A legacy, counter-bound desktop terminal was re-architected into a modern, standalone cloud portal — one managers could run from any device, anywhere. What started as a ",u.jsx(e.em,{children:"mandatory technical migration"})," became a genuine shift in how post-office managers worked."]})}),`
`,u.jsx(Kd,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"100% remote-ready portal"})," — admin work no longer chained to the physical front counter"]})},{icon:"trendUp",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"~65% faster onboarding"})," — user creation and staff setup, down from a slow counter-only process"]})},{icon:"shield",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"0% accidental data loss"})," — a new 7-day recovery window replaced irreversible hard deletes"]})}]}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"The whole project ran on one objective:"})})}),`
`,u.jsx(vi,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Operational freedom"})," — move staff management off a single desk-bound terminal and into a device-agnostic cloud, so a manager's location stops deciding what they can get done."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["On paper this was a migration: lift a legacy desktop terminal into the cloud. But the terminal wasn't just old — it was ",u.jsx(e.em,{children:"physically trapping"})," the people who depended on it."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The counter-lock bottleneck."})," Managers could only do admin work at the physical front counter — the one machine, in the one spot, that ran the terminal. Every staffing task competed directly with serving customers standing at that same counter."]})]}),`
`,u.jsx(qn,{src:`${qi}/02-counter-lock.png`,alt:"A post-office manager at the front counter, split between a customer waiting to be served and the legacy staff-management terminal — the single point where admin work could happen.",caption:"The counter-lock: admin work and customer service fought over the same desk, the same minute."}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"That single constraint produced everything else:"}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"A shadow system."})," With no remote access, managers copied private staff details into personal paper notebooks so they could do the work at home — sensitive data walking out the door, off any secure system"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Interrupted service."})," Any staffing change meant stepping away from the customer in front of them"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Rehiring friction."})," Old database rules blocked managers from easily re-onboarding seasonal staff — a recurring, predictable need the system treated as an exception"]}),`
`]}),u.jsxs(e.p,{children:["The instinct with a mandatory migration is to port the thing faithfully and move on. But the paper notebooks were the tell: the real failure wasn't the technology, it was ",u.jsx(e.em,{children:"where"})," the work was allowed to happen."]})]}),`
`,u.jsx(vi,{variant:"principle",children:u.jsx(e.p,{children:`This was never just a migration. The terminal's real defect was that it bound critical work to one physical location — so the design goal wasn't "recreate the terminal in a browser," it was "unbind the work from the counter."`})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"One month, a hard deadline, and a system with real legacy constraints underneath it. I ran this as a lead UX process built for rapid, grounded execution — not a long discovery, but never a blind one either."}),u.jsxs(e.p,{children:["The move that mattered most: I went to the stores. During physical site visits and face-to-face interviews, one thing became unambiguous — managers weren't using paper because they ",u.jsx(e.em,{children:"preferred"})," it. They used it because the system was inaccessible anywhere but the counter."]})]}),`
`,u.jsx(qn,{wide:!0,src:`${qi}/03-site-visit.png`,alt:"Field notes and photos from in-store visits — a manager walking through their real workflow at the counter, with the paper notebook and terminal both in frame.",caption:"Talking to managers in their actual workspace confirmed the priority I couldn't have ranked from a desk: mobile access came first."}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["That visit reset the platform priority. ",u.jsx(e.strong,{children:"Mobile access was the #1 request"})," — not a nicer desktop screen. So the portal became mobile-first, not desktop-first-then-shrunk. The whole layout strategy pivoted on a finding I could only have gotten by standing where the work happens."]})}),`
`,u.jsx(e.h2,{children:"The insight that changed the scope"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"The most important decision wasn't a screen — it was a scope call about the shadow system."}),u.jsxs(e.p,{children:[`The easy read was: "managers keep paper notebooks, so digitize the list and the notebooks disappear." But the field interviews said something subtler. Managers didn't want paper for its own sake — they wanted a `,u.jsx(e.strong,{children:"physical copy they could rely on"})," when they were away from the counter, offline, or handling an emergency. Take that away with nothing in its place and the notebooks come right back."]}),u.jsxs(e.p,{children:["So I didn't just digitize the list. I designed a secure ",u.jsx(e.strong,{children:"Download / Export"})," feature into the portal."]})]}),`
`,u.jsx(qn,{src:`${qi}/04-export-feature.png`,alt:"The portal's staff list with a secure Download / Export action — producing a physical-copy export while the live record stays in the cloud as the source of truth.",caption:"Export gives managers the physical copy they actually needed — while the source of truth stays digital and secure."}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["That one addition is what genuinely ",u.jsx(e.em,{children:"eliminated"})," the shadow system instead of just competing with it. It met the real need — a backup they could hold — while keeping the ",u.jsx(e.strong,{children:"source of truth"})," digital, current, and secure. The paper habit had somewhere legitimate to go."]})}),`
`,u.jsx(vi,{variant:"principle",children:u.jsx(e.p,{children:"You don't kill a workaround by banning it. You kill it by understanding the need underneath it and serving that need better — here, a secure export beat an insecure notebook on its own terms."})}),`
`,u.jsx(e.h2,{children:"The design decisions"}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["Post offices are high-stress, high-distraction retail floors — often being used one-handed, on a small screen, between customers. Every interaction choice below came from designing for ",u.jsx(e.em,{children:"that"})," environment, not a calm desktop."]})}),`
`,u.jsxs(Qd,{heading:"Adaptive interaction design",eyebrow:"Three decisions, and what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"The portal had to feel fast and forgiving under pressure. These are the choices that made it so."}),coda:{title:"Designed against a real database",body:u.jsx(u.Fragment,{children:"None of this lived in a vacuum — every concept was pressure-tested against the legacy database's actual limits before it went to high fidelity, so what I designed was also what could ship in a month."})},children:[u.jsx(ri,{index:"01",title:"Role inheritance — one choice, not two",media:{src:`${qi}/05-role-inheritance.png`,alt:'The add-user form where selecting the "Admin" role automatically toggles on "Standard User" permissions underneath it.'},children:u.jsxs(e.p,{children:["Selecting ",u.jsx(e.strong,{children:'"Admin"'})," automatically toggles on ",u.jsx(e.strong,{children:'"Standard User"'})," permissions beneath it — because an admin is always also a standard user. A small logic tweak, but during hiring peaks it removed a whole class of clicks and configuration errors: managers couldn't accidentally create an admin who lacked the base permissions to actually work."]})}),u.jsx(ri,{index:"02",title:"Full-row click targets",media:{src:`${qi}/06-full-row-click.png`,alt:"A staff table on a small mobile screen where the entire row is a tap target, not just the name link."},tradeoff:{considered:'A conventional table with a small "edit" link or icon per row.',why:u.jsx(u.Fragment,{children:"On a phone, between customers, a tiny target is a missed tap and a lost second. Making the whole row tappable was the higher-reliability choice for the environment this actually runs in."})},children:u.jsxs(e.p,{children:["I made the ",u.jsx(e.strong,{children:"entire row"})," a tap target across every staff table (Fitts's Law in practice — the bigger and closer the target, the faster and safer the hit). For a busy manager on a small mobile screen in a high-distraction space, it means fast, error-free navigation instead of hunting for a link."]})}),u.jsxs(ri,{index:"03",title:"The 7-day safety net for deletes",children:[u.jsxs(e.p,{children:["The legacy behavior was a ",u.jsx(e.strong,{children:"hard delete"})," — remove a staff member and the record was gone, no recovery. In a system managers now run one-handed between customers, that's a data-loss incident waiting to happen."]}),u.jsxs(e.p,{children:["So I replaced it with a ",u.jsx(e.strong,{children:"soft delete on a 7-day recovery window"}),", and designed the confirmation to make the stakes unmistakable: ",u.jsx(e.em,{children:'"The account will be permanently removed in 7 days. You can undo the deletion anytime."'})]}),u.jsxs(e.p,{children:["The modal itself does deliberate work: the ",u.jsx(e.strong,{children:"Remove"})," button is high-contrast ",u.jsx(e.strong,{children:"red"})," to signal the seriousness of the action, while ",u.jsx(e.strong,{children:"Cancel"})," stays visually neutral. That asymmetry forces a conscious ",u.jsx(e.em,{children:"stop-and-think"})," moment — you can't fat-finger your way through a destructive action."]})]})]}),`
`,u.jsx(pv,{before:{src:`${qi}/07-delete-before.png`,alt:"The legacy hard-delete: a plain confirmation that permanently removes a staff record with no way back."},after:{src:`${qi}/08-delete-after.png`,alt:"The new delete modal: a 7-day recovery notice, a high-contrast red Remove button, and a neutral Cancel button."},caption:"From irreversible to recoverable — and a modal that makes the weight of the action obvious."}),`
`,u.jsx(e.h2,{children:"How the work got made"}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["A one-month deadline forces sharp choices about ",u.jsx(e.em,{children:"where"})," the time goes. Mine went to the field and the engineering loop — and AI absorbed the slow start."]})}),`
`,u.jsx(jd,{head:["Phase","How I moved fast","What it protected"],rows:[["AI-accelerated ideation","Used generative AI to brainstorm layout variations for complex staff tables",u.jsx(u.Fragment,{children:"Skipped the blank-page phase entirely — more time for the decisions that actually mattered"})],["Technical feasibility sync","Ran a tight loop with engineering to stress-test concepts against legacy DB limits",u.jsx(u.Fragment,{children:"Nothing reached high-fidelity that the old database couldn't actually support"})],["Physical validation","Visited the stores and interviewed managers in their real workspace",u.jsx(u.Fragment,{children:"Confirmed mobile access as the #1 priority — the finding that set the whole layout strategy"})]]}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["The honest version: AI got me ",u.jsx(e.em,{children:"out of the gate"})," faster, engineering kept the ideas ",u.jsx(e.em,{children:"buildable"}),", and the store visits made sure I was solving the right problem. None of those three could carry the project alone — the speed came from the sequence."]})}),`
`,u.jsx(e.h2,{children:"The impact"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"For a mandatory migration, the wins landed where they change how the operation actually runs — not just a screen that looks newer."})}),`
`,u.jsx(Jd,{items:[{icon:"chart",value:"~65%",label:"Faster user creation & onboarding"},{icon:"shield",value:"~0%",label:"Accidental data loss, via the 7-day window"},{icon:"layers",value:"Shadow system",valueText:!0,label:"Eliminated — data secured, off paper"}]}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"Three outcomes, one through-line:"}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Efficiency"})," — onboarding and user creation got roughly ",u.jsx(e.strong,{children:"65% faster"}),", freeing manager time back to customers"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Risk mitigation"})," — the 7-day recovery window drove accidental data loss to ",u.jsx(e.strong,{children:"near zero"})]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Security compliance"})," — the paper-based shadow system was ",u.jsx(e.strong,{children:"eliminated"}),", bringing all personal staff information back onto a secure, digital source of truth"]}),`
`]})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"This project looked like a technical chore — port a legacy terminal to the cloud. The design work was refusing to treat it that way."}),u.jsxs(e.p,{children:["The terminal's real defect wasn't that it was old; it was that it bound critical work to one physical spot, which is why the paper notebooks existed at all. Once the goal became ",u.jsx(e.em,{children:"operational freedom"})," rather than ",u.jsx(e.em,{children:"faithful migration"}),", everything followed — mobile-first because that's what managers asked for, a secure export because that's what the notebooks were really for, and a recoverable delete because the system now runs in someone's hand between customers."]})]}),`
`,u.jsx(vi,{variant:"principle",children:u.jsx(e.p,{children:"The best migration doesn't reproduce the old system faithfully — it fixes the constraint the old system forced people to live with. Unbind the work, and the workarounds disappear on their own."})}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Design Consultant — UX lead on the post-office management portal, end to end"})})})]})}function zE(r={}){const{wrapper:e}={...Ji(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(xg,{...r})}):xg(r)}const BE=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:qi,default:zE,meta:OE},Symbol.toStringTag,{value:"Module"})),Xn="/case-studies/swiftsort/images",jE={order:1,title:"SwiftSort — from memorized routes to instant, system-guided action",subtitle:"Shifting sorting decisions from workers to the system, across high-volume Nordic logistics terminals.",tags:["Logistics UX","Mobile & wearable","End-to-end ownership","POC → production"],glance:[{label:"Role",value:"Sole designer on this project (part of a wider design team) — owned research, UX strategy, interaction design, and design–engineering alignment end to end"},{label:"Team",value:"1 Product Manager · 4 Engineers · 2 Operations Leads"},{label:"Region",value:"Nordic"},{label:"Platform",value:"Android tablet + ProGlove wearable scanner"},{label:"Timeline",value:"3 months, proof-of-concept through to production"},{label:"Tools",value:"Figma, Figma Make, Banani, MS Copilot"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","what-the-old-workflow-actually-looked-like":"eye","the-moment-that-changed-the-design":"refresh","working-with-engineering":"merge","how-the-workflow-shrank":"minimize","one-solution-two-form-factors":"smartphone","a-second-win-surfaced-by-the-business":"layers","how-the-work-got-made":"sparkles","exploring-then-discarding":"filter","how-ai-fit-into-the-process":"sparkles","testing-on-the-floor":"flask",outcomes:"chart","what-we-shipped-knowingly-incomplete":"flag","the-takeaway":"target"}};function _g(r){const e={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Ji(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,`
`,u.jsx(Zd,{src:`${Xn}/01-hero.png`,alt:"The finished SwiftSort screen on a terminal tablet alongside the handheld TC57, two form factors, one sorting workflow.",bare:!0,chip:"Live in production"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["SwiftSort is ",u.jsx(e.strong,{children:"live in production"}),", running across the client's Nordic terminals. It replaced memory-dependent sorting with a scan-guided workflow — and the operations side felt the difference firsthand."]})}),`
`,u.jsx(Kd,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Shipped and running in live terminals"})," — not a prototype or a pilot that stalled"]})},{icon:"trendUp",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Faster onboarding and fewer gate errors"})," — reported by terminal managers to business stakeholders, not just observed by the design team"]})},{icon:"cube",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Zero new hardware, zero layout changes"})," — it ran on scanners workers already used"]})}]}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"The whole project ran on one principle:"})})}),`
`,u.jsx(vi,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Find the behavior that already exists, and build the system around it"})," — so workers have less to learn, not more."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["Imagine standing on a warehouse floor as parcels pour in. Every box looks the same — nothing tells you which has to leave ",u.jsx(e.em,{children:"today"})," and which can wait. You just have to ",u.jsx(e.em,{children:"know"}),", from experience, which gate each postal code maps to and in what order to stack."]}),u.jsx(e.p,{children:"That was the daily reality. Sorting depended entirely on what workers had memorized. When I asked one operator how he kept it all straight, he shrugged:"})]}),`
`,u.jsx(vi,{variant:"user",children:"I just memorize it. When I forget, I ask someone."}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"That one sentence is the whole problem. Critical operational knowledge wasn't in the system — it was in people's heads, and it walked out the door every time someone changed shifts or left."}),u.jsx(e.p,{children:u.jsx(e.strong,{children:"What that cost the business:"})}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Slow throughput"})," during peak hours, because every parcel required a mental lookup"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Frequent errors"})," — urgent and low-priority goods mixed at the gate, so time-sensitive deliveries missed their trucks"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Painful onboarding"})," — a new hire couldn't be useful until they'd memorized the routes, which took weeks"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Inconsistent terminals"})," — experienced operators were fast; everyone else was slow, and no two sites ran the same way"]}),`
`]}),u.jsx(e.p,{children:"Solving this the obvious way — new equipment, more training, a redesigned floor — would have been slow, costly, and hard to roll out across sites. The stronger play was to handle more volume with what the terminals already had."}),u.jsx(e.p,{children:u.jsx(e.strong,{children:"The reframe that shaped everything:"})})]}),`
`,u.jsx(vi,{variant:"principle",children:u.jsxs(e.p,{children:["Sorting was never a screen problem. It was a ",u.jsx(e.em,{children:"decision"})," problem. Workers were doing system-level thinking — mapping, remembering, sequencing — manually, under pressure. The real opportunity wasn't to show them information faster. It was to move the thinking out of their heads and into the system."]})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"I started on the terminal floor, not in Figma — shadowing forklift operators through full shifts, watching how goods and pallets actually got stacked, and sitting with terminal managers and ops leads to find where the informal workarounds lived."}),u.jsxs(e.p,{children:["The job wasn't to invent a new way to sort, but to find the behavior that ",u.jsx(e.em,{children:"already worked"})," — the principle that drove every decision below."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"One boundary worth naming:"})," SwiftSort doesn't decide ",u.jsx(e.em,{children:"where"})," a parcel goes — planners set routing upstream. My slice was the worker-facing decision layer: the moment upstream data becomes a physical action on a noisy floor. Knowing exactly where that slice started and ended shaped every trade-off below."]})]}),`
`,u.jsx(qn,{wide:!0,src:`${Xn}/05-research-synthesis.png`,alt:"A clustered affinity view of field observations grouped into themes such as memory dependence, environmental constraints, and LIFO stacking behaviour.",caption:"Field observations, clustered into themes — memory dependence, environmental constraints, LIFO stacking behaviour."}),`
`,u.jsx(e.h2,{children:"What the old workflow actually looked like"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"A single parcel took three steps — one physical, two mental. Watch the mental load grow:"})}),`
`,u.jsx(TE,{items:[{src:`${Xn}/02-illustration-scan.png`,alt:"Comic panel — the driver calmly scans the box, an empty thought-bubble above them: no mental effort.",title:"Scan the barcode",tag:"Physical",tone:"neutral"},{src:`${Xn}/03-illustration-read.png`,alt:"Comic panel — the driver reads the label, a small thought-bubble with a magnifying glass and a question mark: mild effort.",title:"Read the postal code off the label",tag:"Mental",tone:"mental"},{src:`${Xn}/04-illustration-mental-lookup.png`,alt:"Comic panel — the driver looks overwhelmed, a huge chaotic thought-bubble tangled with gate numbers, routes and arrows.",title:"Recall which gate, which route, which order",tag:"Mental — the bottleneck",tone:"bottleneck"}]}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"Steps 2 and 3 were invisible work — and that's where the time, the errors, and the training cost all lived, none of it written down anywhere the system could see."})}),`
`,u.jsx(e.h2,{children:"The moment that changed the design"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"The most important decision in this project didn't come from the brief. It came from watching a mistake."})}),`
`,u.jsx(e.h3,{children:"The wrong direction"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"During proof-of-concept testing, forklift drivers kept struggling to reach a button on the mounted tablet — bolted in the only spot it physically fit, which wasn't a spot a human arm could reach mid-operation."}),u.jsxs(e.p,{children:["The team's instinct was everyone's: ",u.jsx(e.strong,{children:"make the button bigger, move the tablet, add a second one."})," We spent days on placement — and no one asked whether the button should exist at all."]})]}),`
`,u.jsx(e.h3,{children:"The reframe"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["I opened the session recording from that day and watched it again the next morning — and saw what I'd missed live: ",u.jsx(e.strong,{children:"every worker was already wearing a ProGlove scanner."})," Activated, in the workflow. They weren't reaching for the tablet because they wanted to touch it — the system was asking them to confirm with a tap."]}),u.jsxs(e.p,{children:["So I asked a different question: ",u.jsx(e.em,{children:"what if the button didn't have to be reachable?"})]}),u.jsxs(e.p,{children:["I proposed a ",u.jsx(e.strong,{children:"static QR code"})," as the last card in the list — scan it with the ProGlove already on your hand, ",u.jsx(e.em,{children:"or"})," tap it. On a tablet that's sometimes out of arm's reach, the scan path makes reach irrelevant: a button you can trigger from wherever you're standing."]}),u.jsx(e.p,{children:'Getting the team there took more than the idea. The button debate had days of momentum — so rather than argue placement, I brought everyone back to the recording and let them watch the glove do the work. The question shifted from "where does the button go" to "why is reach the constraint," and the room moved on its own.'}),u.jsx(e.p,{children:"I'll be honest: it was a hunch, not a proven answer — the kind of idea that's either elegant or redundant, and I couldn't tell which from a meeting room. It hinged on one thing I couldn't settle at a desk: would a worker mid-shift, gloves on, actually reach for the scan? That question sent it to the floor instead of a polished mockup."})]}),`
`,u.jsx(vi,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"The insight came from watching a recording a second time — not from the brief."})," The fix wasn't a bigger button or a better mount. It was giving the worker a second way in, so the mounting distance stopped being a problem to solve."]})}),`
`,u.jsx(pv,{before:{src:`${Xn}/06-reframe-before.png`,alt:"The out-of-reach button mounted on the forklift tablet — a worker stretching to reach it mid-operation."},after:{src:`${Xn}/07-reframe-after.png`,alt:"The QR “DROP” card that gives a scannable path to the same confirmation action."},caption:"Scan or tap. Reach stops mattering."}),`
`,u.jsx(e.h2,{children:"Working with engineering"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"The static-QR idea only worked because engineering pressure-tested it early."}),u.jsxs(e.p,{children:["Engineering's first instinct was a ",u.jsx(e.strong,{children:"dynamic QR"})," — a unique code generated for every scanned parcel. Within a day, they flagged the problems: significant backend complexity, scalability concerns, and a timeline we couldn't hit."]}),u.jsxs(e.p,{children:["We landed on ",u.jsx(e.strong,{children:"static QR"})," together — and it turned out to be not just simpler but genuinely ",u.jsx(e.em,{children:"better"}),":"]}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Reliable"})," — no backend to fail, works offline"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Scalable"})," — print, attach, deploy; the same code works at every terminal"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Zero-config"})," — operations can place codes anywhere without involving IT"]}),`
`]}),u.jsxs(e.p,{children:["The constraint didn't compromise the design — it ",u.jsx(e.em,{children:"improved"})," it: the thing easiest to build was also the most robust on the floor."]})]}),`
`,u.jsx(e.h2,{children:"How the workflow shrank"}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"Same three steps — the two mental ones designed away, and the confirmation freed from reach."})}),`
`,u.jsx(jd,{head:["","Old workflow","Final design"],rows:[["Scan the parcel","✅","✅ (unchanged)"],["Read the postal code","Manual, from the label",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Eliminated"})," — destination shown instantly"]})],["Recall gate & route","Mental lookup",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Eliminated"})," — no memory needed"]})],["Confirm drop-off","Tap a button you had to reach",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Scan or tap"})," — the QR works from anywhere"]})]]}),`
`,u.jsxs(Qd,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"Every choice below came from that same principle. None of them asked workers to learn something new."}),coda:{title:"Designed for an industrial floor",body:u.jsx(u.Fragment,{children:"Underpinning all of it, the interface had to survive the environment: readable at 1–2 meters, high-contrast for outdoor glare, large glove-friendly targets, and one decision per screen."})},children:[u.jsx(ri,{index:"01",title:"The QR code doubles as the button",media:{src:`${Xn}/09-qr-scan-or-tap.png`,alt:"The QR “DROP” card as the final item in the tablet drop list — scan it with the ProGlove, or tap to confirm."},tradeoff:{considered:"ProGlove gesture events — a wave or motion to confirm.",why:u.jsx(u.Fragment,{children:"Engineering flagged them as unstable in a noisy, fast-moving environment. A scannable, tappable QR was simply more reliable."})},children:u.jsxs(e.p,{children:["The QR sits as the ",u.jsx(e.strong,{children:"last card"})," in the drop list, and the dual input is deliberate: scan it with the ProGlove, or tap it. That redundancy is the point — if one input fails, the other still works, and reach never decides whether a worker can confirm."]})}),u.jsx(ri,{index:"02",title:"Scan-first — not voice",tradeoff:{considered:"Voice commands.",why:u.jsxs(u.Fragment,{children:["In a loud warehouse, reading barcode values aloud introduced ",u.jsx(e.strong,{children:"more"})," errors than it removed — missed or forgotten, especially when a worker handles several drop-offs at once. The clearest “no” in the project."]})},children:u.jsxs(e.p,{children:["Workers already scanned barcodes constantly, so making the ",u.jsx(e.em,{children:"scan itself"})," the trigger required no new behavior."]})}),u.jsxs(ri,{index:"03",title:"The screen mirrors the physical stack (LIFO)",media:{src:`${Xn}/10-lifo-layout.png`,alt:"The main screen: a large top card “12 CD, 1726 Sarpsborg” with smaller “06 AB” and “18 CD” cards beneath — largest card = last scanned = next dropped."},children:[u.jsxs(e.p,{children:["During research I saw that forklift drivers almost always drop off the ",u.jsx(e.strong,{children:"most recently scanned"})," item first — roughly 95–99% of the time, last-in is first-out."]}),u.jsxs(e.p,{children:["So the design puts the ",u.jsx(e.strong,{children:"latest scanned pallet as the largest card at the top"}),", with smaller cards beneath. The order on screen matches the order on the forklift — no mental translation."]}),u.jsxs(e.p,{children:[u.jsx(e.em,{children:"The honest edge case:"})," that leaves 1–5% of cases where last-scanned ",u.jsx(e.em,{children:"isn't"})," next-dropped. Workers can scan any card directly to override — but the override rate is the one assumption I'd want to instrument over a full peak season before calling it settled."]})]}),u.jsxs(ri,{index:"04",title:"Priority surfaces at the moment of sorting",children:[u.jsxs(e.p,{children:["Time-sensitive shipments now appear with a distinct accent treatment, floating to the top of the stack — ",u.jsx(e.strong,{children:"before"})," the worker decides where to place the parcel."]}),u.jsx(e.p,{children:"The priority signal used to live in dispatch, far upstream. Moving it to the sorting moment is why urgent and low-priority goods stopped mixing at the gate."}),u.jsx(e.p,{children:u.jsx(e.em,{children:"Not in the brief. Found in the field."})})]})]}),`
`,u.jsx(e.h2,{children:"One solution, two form factors"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["The QR-as-button was never meant to be everywhere — it solved a ",u.jsx(e.em,{children:"specific"})," physical problem: a tablet out of reach on a forklift. Some workers don't use a mounted tablet at all; they carry a handheld ",u.jsx(e.strong,{children:"TC57"})," with a built-in scanner, already in hand. So that version ",u.jsx(e.strong,{children:"drops the QR entirely"})," and confirms with a tap on the green ",u.jsx(e.strong,{children:"Drop"})," button."]}),u.jsx(e.p,{children:"The same task, designed twice:"})]}),`
`,u.jsx(jd,{head:["","Mounted tablet + ProGlove","Handheld TC57"],rows:[["Where the device lives","Bolted to the forklift, sometimes out of reach","In the worker’s hand"],["How you confirm a drop","Scan the QR card, or tap it","Tap the Drop button"],["Why","Reach varies by vehicle — the scan path removes that variable","Reach is never in question — so no QR needed"]]}),`
`,u.jsx(Xe,{children:u.jsxs(e.p,{children:["This is the part I'm most deliberate about: the clever solution was matched to the context that ",u.jsx(e.em,{children:"needed"})," it, and withheld from the one that didn't. A QR on the TC57 would have been a solution in search of a problem. Match the input to the device's reality; don't standardize one pattern everywhere."]})}),`
`,u.jsx(qn,{wide:!0,src:`${Xn}/12-tc57-stacking.png`,alt:"Three TC57 handheld screens side by side: the sort list with parcel cards, the stack mode showing grouped parcels at a destination, and the drop zone grid for manual zone lookup.",caption:"The full TC57 flow: sort, stack, and drop zone lookup, all tap-driven, no QR needed."}),`
`,u.jsx(e.h2,{children:"A second win, surfaced by the business"}),`
`,u.jsxs(Xe,{children:[u.jsx(e.p,{children:"The QR insight came from watching the floor. This one came from the other direction — a discovery session with the business."}),u.jsxs(e.p,{children:["Going through how the terminals actually ran with managers and ops leads, a pattern surfaced that observation alone had missed: when a driver had ",u.jsx(e.strong,{children:"several loose items headed to the same destination"}),", the app made them handle each one separately — a card per item, scanned and dropped one at a time. Quietly repetitive, and slower than it needed to be at volume."]}),u.jsxs(e.p,{children:["The idea didn't come from me alone. In a brainstorm with the ",u.jsx(e.strong,{children:"tech lead and product owner"}),", we shaped the high-level solution together — let a driver ",u.jsx(e.strong,{children:"group everything bound for one destination and drop it in a single scan"}),", triggered by a barcode embedded in the primary card. Engineering pressure-tested feasibility in the room; the PO kept us anchored on what mattered most; I designed the flow around both."]})]}),`
`,u.jsx(qn,{src:`${Xn}/11-stacking-mode.png`,alt:"The split-screen stacking view: the main sort list on the left, a “Stacking Mode” panel on the right grouping multiple parcels under one destination.",caption:"Stacking mode — group loose items under one destination, drop them in a single scan."}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:"It's the clearest example of a decision that came from the room, not the brief — and the reason I treat discovery meetings as design research, not status updates."})}),`
`,u.jsx(e.h2,{children:"How the work got made"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["AI compressed the slow early phase; the field decided what shipped. ",u.jsx(e.strong,{children:"Figma Make"})," generated six LIFO card layouts fast — and I killed most against one test: could a worker read it at arm's length, in motion, wearing gloves? The variants that looked richer on a desktop screen were the first to go. ",u.jsx(e.strong,{children:"MS Copilot"}),` clustered raw field notes into themes (that's how the "priority at the sorting moment" finding surfaced); `,u.jsx(e.strong,{children:"Banani"})," structured the stacking flow before I committed it to Figma."]}),u.jsxs(e.p,{children:["Net effect: roughly ",u.jsx(e.strong,{children:"30% faster early exploration"})," — but every decision that shipped came from on-site testing, not a generated mockup."]})]}),`
`,u.jsx(qn,{wide:!0,src:`${Xn}/14-discarded-variants.png`,alt:"A grid of early LIFO card layout explorations with the rejected variants visibly marked.",caption:"The range Figma Make gave me. Most were killed against one test: readable at arm's length, in motion, wearing gloves."}),`
`,u.jsx(e.h2,{children:"Outcomes"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["The wins up top aren't self-assessment — the faster onboarding and fewer gate errors came from ",u.jsx(e.strong,{children:"terminal managers"}),", who raised them with business stakeholders as proof the system was working. That's the validation I trust most: the people running the operation found it real enough to report upward."]}),u.jsxs(e.p,{children:["Beyond that, the ",u.jsx(e.em,{children:"shape"})," of the operation changed. Delivery priority became visible at the moment it mattered, so time-sensitive shipments left on time; and low-volume routes could be consolidated instead of dispatched half-empty — which made fast-delivery commitments more scalable."]})]}),`
`,u.jsx(e.h2,{children:"What we shipped knowingly incomplete"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["We went live as an MVP with one known, unresolved issue: ",u.jsx(e.strong,{children:"changing a drop-off location isn't intuitive yet, and parcels don't group as cleanly as they should."})," We knew this before launch — and shipped anyway, on purpose."]}),u.jsxs(e.p,{children:["Drop-off locations come from planners upstream, and we couldn't predict how that data would behave at real volume. So rather than guess at the grouping model in a design tool, we shipped the core workflow and used the first release to ",u.jsx(e.em,{children:"learn how the data behaves in the wild"})," — then optimize grouping and location-editing against real patterns, not assumptions."]}),u.jsx(e.p,{children:`It's the trade-off I'd defend hardest: an MVP with a named, understood gap that generates real learning beats a "complete" design built on guesses about data we didn't control.`})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(Xe,{children:[u.jsxs(e.p,{children:["SwiftSort wasn't a UI redesign. It was a redesign of ",u.jsx(e.strong,{children:"how a decision gets made"})," on a warehouse floor."]}),u.jsxs(e.p,{children:["By moving the thinking out of workers' heads and into the system — triggered by behavior they already had — sorting shifted from ",u.jsx(e.em,{children:"memory-based"})," to ",u.jsx(e.em,{children:"system-guided"}),", from ",u.jsx(e.em,{children:"experience-dependent"})," to ",u.jsx(e.em,{children:"scalable"}),"."]}),u.jsxs(e.p,{children:["The clearest lesson: in operational systems, great design usually isn't about adding features. It's about ",u.jsx(e.strong,{children:"removing constraints"})," — and the best removal in this project came from watching a recording twice and asking why ",u.jsx(e.em,{children:"reach"})," had to be the thing we designed around at all."]})]}),`
`,u.jsx(Xe,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on SwiftSort, end to end"})})})]})}function HE(r={}){const{wrapper:e}={...Ji(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(_g,{...r})}):_g(r)}const GE=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Xn,default:HE,meta:jE},Symbol.toStringTag,{value:"Module"})),VE=Object.assign({"./cards/index.mdx":IE,"./postbox/index.mdx":FE,"./postoffice/index.mdx":BE,"./swiftsort/index.mdx":GE}),Ja=Object.entries(VE).map(([r,e])=>{var s;const t=(s=r.match(/\.\/([^/]+)\/index\.mdx$/))==null?void 0:s[1];return{slug:t,Component:e.default,meta:{slug:t,...e.meta||{}}}}).filter(r=>r.slug).sort((r,e)=>(r.meta.order??999)-(e.meta.order??999));function WE(r){return Ja.find(e=>e.slug===r)||null}function XE(r){if(Ja.length<2)return null;const e=Ja.findIndex(t=>t.slug===r);return e===-1?null:Ja[(e+1)%Ja.length]}const qE=new Set(["swiftsort"]),$E=["5787deaa7a8ea2bd70a681eed552e3ea03c59dca5ecffa7dcab1365afe4433c1","2742ce32dae07660045ae5247b21e600b5c4834d7c665335ac1c98893e5eaf11"],mv="cs-unlocked";function yg(r){return qE.has(r)}async function YE(r){const e=new TextEncoder().encode(r),t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(s=>s.toString(16).padStart(2,"0")).join("")}async function KE(r){const e=(r??"").trim();if(!e)return!1;try{const t=await YE(e);return $E.includes(t)}catch{return!1}}function Sg(){try{return sessionStorage.getItem(mv)==="1"}catch{return!1}}function ZE(){try{sessionStorage.setItem(mv,"1")}catch{}}const QE="https://www.linkedin.com/in/ykshetty/";function Ed({mood:r="",avatarRef:e}){const t=`gate-avatar${r?` is-${r}`:""}`;return u.jsxs("div",{className:t,ref:e,"aria-hidden":"true",children:[u.jsx("div",{className:"gate-eye l",children:u.jsx("span",{className:"gate-pupil"})}),u.jsx("div",{className:"gate-eye r",children:u.jsx("span",{className:"gate-pupil"})})]})}function JE({title:r,onUnlock:e}){const[t,s]=Re.useState(""),[o,l]=Re.useState(!1),[h,d]=Re.useState(!1),[p,m]=Re.useState(!1),[g,x]=Re.useState(""),y=Re.useRef(null),w=Re.useRef([]),E=P=>{P&&!w.current.includes(P)&&w.current.push(P)},b=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;Re.useEffect(()=>{const P=setTimeout(()=>m(!0),b?200:1200);return()=>clearTimeout(P)},[b]),Re.useEffect(()=>{if(b)return;let P=0,R=window.innerWidth/2,D=window.innerHeight/2;const G=F=>{R=F.clientX,D=F.clientY};window.addEventListener("mousemove",G);const O=()=>{w.current.forEach(F=>{const oe=F.getBoundingClientRect();if(!oe.width)return;const de=oe.left+oe.width/2,T=oe.top+oe.height/2,k=Math.atan2(D-T,R-de),ce=Math.min(2.6,Math.hypot(R-de,D-T)/40);F.querySelectorAll(".gate-pupil").forEach(ue=>{ue.style.transform=`translate(calc(-50% + ${Math.cos(k)*ce}px), calc(-50% + ${Math.sin(k)*ce}px))`})}),P=requestAnimationFrame(O)};return P=requestAnimationFrame(O),()=>{window.removeEventListener("mousemove",G),cancelAnimationFrame(P)}},[b]);const _=P=>{const R=P.target.value;s(R),h&&d(!1),g!=="happy"&&x(R.length?"closed":"")},S=async P=>{if(P.preventDefault(),await KE(t)){ZE(),x("happy"),setTimeout(e,b?0:420);return}d(!0),x("squint"),setTimeout(()=>x(t?"closed":""),700)};return u.jsxs("div",{className:"cs-page",children:[u.jsx(dv,{}),u.jsx("div",{className:"gate-stage",children:u.jsxs("div",{className:"gate-card",children:[u.jsxs("div",{className:"gate-chrome",children:[u.jsxs("div",{className:"gate-dots",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsx("div",{className:"gate-chrome-label",children:r?`${r.split(" ")[0]} · protected`:"Protected case study"})]}),u.jsxs("div",{className:"gate-thread",children:[u.jsx("div",{className:"gate-row them",style:{animationDelay:".05s"},children:u.jsx("div",{className:"gate-bubble",children:"Can I read the full case study?"})}),p?u.jsxs("div",{className:"gate-row me",children:[u.jsx(Ed,{avatarRef:E,mood:g}),u.jsxs("div",{className:"gate-bubble",children:[u.jsx("span",{className:"gate-kicker",children:"A quick note"}),"This one belongs to the client — I keep it behind a password out of respect for their confidentiality.",u.jsxs("small",{children:["You’ll find the password in my résumé or cover letter. Otherwise, just"," ",u.jsx("a",{href:QE,target:"_blank",rel:"noopener noreferrer",children:"ping me on LinkedIn"}),"."]})]})]}):u.jsxs("div",{className:"gate-row me",children:[u.jsx(Ed,{avatarRef:E,mood:g}),u.jsxs("div",{className:"gate-typing",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]}),h&&u.jsxs("div",{className:"gate-row me",role:"alert",children:[u.jsx(Ed,{avatarRef:E,mood:g}),u.jsx("div",{className:"gate-bubble",children:"That’s not the one — check the résumé header, it’s there. 🙂"})]})]}),u.jsxs("div",{className:"gate-composer",children:[u.jsxs("form",{className:`gate-field${h?" is-err":""}`,onSubmit:S,autoComplete:"off",children:[u.jsx("input",{ref:y,type:o?"text":"password",value:t,onChange:_,placeholder:"Type the password…","aria-label":"Case study password","aria-invalid":h,autoFocus:!0}),u.jsx("button",{type:"button",className:"gate-peek",onClick:()=>l(P=>!P),"aria-label":o?"Hide password":"Show password",title:o?"Hide":"Show",children:o?u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),u.jsx("button",{type:"submit",className:"gate-send","aria-label":"Unlock case study",title:"Unlock",children:"↑"})]}),u.jsx("a",{href:"/#work",className:"gate-back",children:"← Back to work"})]})]})})]})}function eT({slug:r}){const e=WE(r),t=yg(r),[s,o]=Re.useState(()=>!t||Sg());if(Re.useEffect(()=>{o(!yg(r)||Sg())},[r]),Re.useEffect(()=>{var p;if((p=e==null?void 0:e.meta)!=null&&p.title){const m=document.title;return document.title=`${e.meta.title} · Yogesh Shetty`,()=>{document.title=m}}},[e]),!e)return u.jsx(tT,{slug:r});const{Component:l,meta:h}=e,d=XE(r);return t&&!s?u.jsx(JE,{title:h.title,onUnlock:()=>o(!0)}):u.jsx(CE,{meta:h,next:d,children:u.jsx(hv.Provider,{value:h.sectionIcons||{},children:u.jsx(yE,{components:AE,children:u.jsx(l,{})})})})}function tT({slug:r}){return u.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",textAlign:"center"},children:u.jsxs("div",{style:{maxWidth:460},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:14},children:"Case study not found"}),u.jsxs("h1",{style:{fontSize:28,fontWeight:600,margin:"0 0 16px",letterSpacing:"-0.02em"},children:["No case study “",r,"”"]}),u.jsx(Jl,{to:"/",className:"text-link text-link--primary",style:{fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,paddingBottom:3},children:"← Back to portfolio"})]})})}function nT(){const e=ox().match(/^\/case-studies\/([^/]+)\/?$/);return e?u.jsx(eT,{slug:decodeURIComponent(e[1])}):u.jsx(_E,{})}function iT(){return u.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:u.jsxs("div",{style:{maxWidth:520},children:[u.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),u.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),u.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[u.jsx("a",{href:`mailto:${Rr}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),u.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}rx.createRoot(document.getElementById("root")).render(u.jsx(ia.StrictMode,{children:u.jsx(lv,{fallback:u.jsx(iT,{}),children:u.jsx(mx,{children:u.jsx(sx,{children:u.jsx(nT,{})})})})}));
