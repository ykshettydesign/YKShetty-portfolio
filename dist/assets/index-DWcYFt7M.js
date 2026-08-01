(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function cg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Iu={exports:{}},Go={},Uu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function D0(){if(_p)return ht;_p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(L,G,xe){this.props=L,this.context=G,this.refs=A,this.updater=xe||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(L,G,xe){this.props=L,this.context=G,this.refs=A,this.updater=xe||M}var R=D.prototype=new x;R.constructor=D,w(R,y.prototype),R.isPureReactComponent=!0;var N=Array.isArray,X=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function de(L,G,xe){var Y,le={},he=null,Ae=null;if(G!=null)for(Y in G.ref!==void 0&&(Ae=G.ref),G.key!==void 0&&(he=""+G.key),G)X.call(G,Y)&&!O.hasOwnProperty(Y)&&(le[Y]=G[Y]);var ue=arguments.length-2;if(ue===1)le.children=xe;else if(1<ue){for(var oe=Array(ue),Re=0;Re<ue;Re++)oe[Re]=arguments[Re+2];le.children=oe}if(L&&L.defaultProps)for(Y in ue=L.defaultProps,ue)le[Y]===void 0&&(le[Y]=ue[Y]);return{$$typeof:r,type:L,key:he,ref:Ae,props:le,_owner:k.current}}function pe(L,G){return{$$typeof:r,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function T(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function F(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xe){return G[xe]})}var ce=/\/+/g;function fe(L,G){return typeof L=="object"&&L!==null&&L.key!=null?F(""+L.key):G.toString(36)}function H(L,G,xe,Y,le){var he=typeof L;(he==="undefined"||he==="boolean")&&(L=null);var Ae=!1;if(L===null)Ae=!0;else switch(he){case"string":case"number":Ae=!0;break;case"object":switch(L.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=L,le=le(Ae),L=Y===""?"."+fe(Ae,0):Y,N(le)?(xe="",L!=null&&(xe=L.replace(ce,"$&/")+"/"),H(le,G,xe,"",function(Re){return Re})):le!=null&&(T(le)&&(le=pe(le,xe+(!le.key||Ae&&Ae.key===le.key?"":(""+le.key).replace(ce,"$&/")+"/")+L)),G.push(le)),1;if(Ae=0,Y=Y===""?".":Y+":",N(L))for(var ue=0;ue<L.length;ue++){he=L[ue];var oe=Y+fe(he,ue);Ae+=H(he,G,xe,oe,le)}else if(oe=S(L),typeof oe=="function")for(L=oe.call(L),ue=0;!(he=L.next()).done;)he=he.value,oe=Y+fe(he,ue++),Ae+=H(he,G,xe,oe,le);else if(he==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ae}function ie(L,G,xe){if(L==null)return L;var Y=[],le=0;return H(L,Y,"","",function(he){return G.call(xe,he,le++)}),Y}function j(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(xe){(L._status===0||L._status===-1)&&(L._status=1,L._result=xe)},function(xe){(L._status===0||L._status===-1)&&(L._status=2,L._result=xe)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var ee={current:null},B={transition:null},Z={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function W(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ie,forEach:function(L,G,xe){ie(L,function(){G.apply(this,arguments)},xe)},count:function(L){var G=0;return ie(L,function(){G++}),G},toArray:function(L){return ie(L,function(G){return G})||[]},only:function(L){if(!T(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ht.Component=y,ht.Fragment=t,ht.Profiler=a,ht.PureComponent=D,ht.StrictMode=s,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ht.act=W,ht.cloneElement=function(L,G,xe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Y=w({},L.props),le=L.key,he=L.ref,Ae=L._owner;if(G!=null){if(G.ref!==void 0&&(he=G.ref,Ae=k.current),G.key!==void 0&&(le=""+G.key),L.type&&L.type.defaultProps)var ue=L.type.defaultProps;for(oe in G)X.call(G,oe)&&!O.hasOwnProperty(oe)&&(Y[oe]=G[oe]===void 0&&ue!==void 0?ue[oe]:G[oe])}var oe=arguments.length-2;if(oe===1)Y.children=xe;else if(1<oe){ue=Array(oe);for(var Re=0;Re<oe;Re++)ue[Re]=arguments[Re+2];Y.children=ue}return{$$typeof:r,type:L.type,key:le,ref:he,props:Y,_owner:Ae}},ht.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ht.createElement=de,ht.createFactory=function(L){var G=de.bind(null,L);return G.type=L,G},ht.createRef=function(){return{current:null}},ht.forwardRef=function(L){return{$$typeof:u,render:L}},ht.isValidElement=T,ht.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:j}},ht.memo=function(L,G){return{$$typeof:m,type:L,compare:G===void 0?null:G}},ht.startTransition=function(L){var G=B.transition;B.transition={};try{L()}finally{B.transition=G}},ht.unstable_act=W,ht.useCallback=function(L,G){return ee.current.useCallback(L,G)},ht.useContext=function(L){return ee.current.useContext(L)},ht.useDebugValue=function(){},ht.useDeferredValue=function(L){return ee.current.useDeferredValue(L)},ht.useEffect=function(L,G){return ee.current.useEffect(L,G)},ht.useId=function(){return ee.current.useId()},ht.useImperativeHandle=function(L,G,xe){return ee.current.useImperativeHandle(L,G,xe)},ht.useInsertionEffect=function(L,G){return ee.current.useInsertionEffect(L,G)},ht.useLayoutEffect=function(L,G){return ee.current.useLayoutEffect(L,G)},ht.useMemo=function(L,G){return ee.current.useMemo(L,G)},ht.useReducer=function(L,G,xe){return ee.current.useReducer(L,G,xe)},ht.useRef=function(L){return ee.current.useRef(L)},ht.useState=function(L){return ee.current.useState(L)},ht.useSyncExternalStore=function(L,G,xe){return ee.current.useSyncExternalStore(L,G,xe)},ht.useTransition=function(){return ee.current.useTransition()},ht.version="18.3.1",ht}var xp;function kd(){return xp||(xp=1,Uu.exports=D0()),Uu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function I0(){if(yp)return Go;yp=1;var r=kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(u,h,m){var v,_={},S=null,M=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(u&&u.defaultProps)for(v in h=u.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:u,key:S,ref:M,props:_,_owner:a.current}}return Go.Fragment=t,Go.jsx=d,Go.jsxs=d,Go}var Sp;function U0(){return Sp||(Sp=1,Iu.exports=I0()),Iu.exports}var p=U0(),Pe=kd();const eo=cg(Pe);var ul={},Fu={exports:{}},Nn={},Ou={exports:{}},ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function F0(){return Mp||(Mp=1,(function(r){function e(B,Z){var W=B.length;B.push(Z);e:for(;0<W;){var L=W-1>>>1,G=B[L];if(0<a(G,Z))B[L]=Z,B[W]=G,W=L;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Z=B[0],W=B.pop();if(W!==Z){B[0]=W;e:for(var L=0,G=B.length,xe=G>>>1;L<xe;){var Y=2*(L+1)-1,le=B[Y],he=Y+1,Ae=B[he];if(0>a(le,W))he<G&&0>a(Ae,le)?(B[L]=Ae,B[he]=W,L=he):(B[L]=le,B[Y]=W,L=Y);else if(he<G&&0>a(Ae,W))B[L]=Ae,B[he]=W,L=he;else break e}}return Z}function a(B,Z){var W=B.sortIndex-Z.sortIndex;return W!==0?W:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();r.unstable_now=function(){return d.now()-u}}var h=[],m=[],v=1,_=null,S=3,M=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var Z=t(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=B)s(m),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=t(m)}}function N(B){if(A=!1,R(B),!w)if(t(h)!==null)w=!0,j(X);else{var Z=t(m);Z!==null&&ee(N,Z.startTime-B)}}function X(B,Z){w=!1,A&&(A=!1,x(de),de=-1),M=!0;var W=S;try{for(R(Z),_=t(h);_!==null&&(!(_.expirationTime>Z)||B&&!F());){var L=_.callback;if(typeof L=="function"){_.callback=null,S=_.priorityLevel;var G=L(_.expirationTime<=Z);Z=r.unstable_now(),typeof G=="function"?_.callback=G:_===t(h)&&s(h),R(Z)}else s(h);_=t(h)}if(_!==null)var xe=!0;else{var Y=t(m);Y!==null&&ee(N,Y.startTime-Z),xe=!1}return xe}finally{_=null,S=W,M=!1}}var k=!1,O=null,de=-1,pe=5,T=-1;function F(){return!(r.unstable_now()-T<pe)}function ce(){if(O!==null){var B=r.unstable_now();T=B;var Z=!0;try{Z=O(!0,B)}finally{Z?fe():(k=!1,O=null)}}else k=!1}var fe;if(typeof D=="function")fe=function(){D(ce)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ie=H.port2;H.port1.onmessage=ce,fe=function(){ie.postMessage(null)}}else fe=function(){y(ce,0)};function j(B){O=B,k||(k=!0,fe())}function ee(B,Z){de=y(function(){B(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){w||M||(w=!0,j(X))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var W=S;S=Z;try{return B()}finally{S=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=S;S=B;try{return Z()}finally{S=W}},r.unstable_scheduleCallback=function(B,Z,W){var L=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?L+W:L):W=L,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=W+G,B={id:v++,callback:Z,priorityLevel:B,startTime:W,expirationTime:G,sortIndex:-1},W>L?(B.sortIndex=W,e(m,B),t(h)===null&&B===t(m)&&(A?(x(de),de=-1):A=!0,ee(N,W-L))):(B.sortIndex=G,e(h,B),w||M||(w=!0,j(X))),B},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(B){var Z=S;return function(){var W=S;S=Z;try{return B.apply(this,arguments)}finally{S=W}}}})(ku)),ku}var Ep;function O0(){return Ep||(Ep=1,Ou.exports=F0()),Ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function k0(){if(wp)return Nn;wp=1;var r=kd(),e=O0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function S(n){return h.call(_,n)?!0:h.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,o,c,f,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,c)&&(o=null),c||f===null?S(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var N=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),F=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),B=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,L;function G(n){if(L===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var xe=!1;function Y(n,i){if(!n||xe)return"";xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),g=c.stack.split(`
`),E=f.length-1,I=g.length-1;1<=E&&0<=I&&f[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==g[I]){var z=`
`+f[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=I);break}}}finally{xe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?G(n):""}function le(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case k:return"Portal";case pe:return"Profiler";case de:return"StrictMode";case fe:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case j:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}function Ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(n){var i=oe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=Re(n))}function q(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=oe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Fe(n,i){var o=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function qe(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ue(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ie(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function tt(n,i){Ie(n,i);var o=ue(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?C(n,i.type,o):i.hasOwnProperty("defaultValue")&&C(n,i.type,ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function $e(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function C(n,i,o){(i!=="number"||mt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var b=Array.isArray;function te(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ue(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Se(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _e(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(b(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ue(o)}}function Me(n,i){var o=ue(i.value),c=ue(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Qe,at=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Qe=Qe||document.createElement("div"),Qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Qe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ve(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(gt).forEach(function(n){ft.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),gt[i]=gt[n]})});function it(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||gt.hasOwnProperty(n)&&gt[n]?(""+i).trim():i+"px"}function Ye(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=it(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function xt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Tt=null,U=null,Ee=null;function Te(n){if(n=bo(n)){if(typeof Tt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ta(i),Tt(n.stateNode,n.type,i))}}function Ge(n){U?Ee?Ee.push(n):Ee=[n]:U=n}function Ke(){if(U){var n=U,i=Ee;if(Ee=U=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function St(n,i){return n(i)}function bt(){}var Gt=!1;function _n(n,i,o){if(Gt)return n(i,o);Gt=!0;try{return St(n,i,o)}finally{Gt=!1,(U!==null||Ee!==null)&&(bt(),Ke())}}function Mt(n,i){var o=n.stateNode;if(o===null)return null;var c=Ta(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var qt=!1;if(u)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){qt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{qt=!1}function ra(n,i,o,c,f,g,E,I,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(ge){this.onError(ge)}}var Rr=!1,bi=null,Cr=!1,$i=null,sa={onError:function(n){Rr=!0,bi=n}};function oa(n,i,o,c,f,g,E,I,z){Rr=!1,bi=null,ra.apply(sa,arguments)}function nc(n,i,o,c,f,g,E,I,z){if(oa.apply(this,arguments),Rr){if(Rr){var ne=bi;Rr=!1,bi=null}else throw Error(t(198));Cr||(Cr=!0,$i=ne)}}function Ri(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function aa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function P(n){if(Ri(n)!==n)throw Error(t(188))}function Q(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return P(f),n;if(g===c)return P(f),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var E=!1,I=f.child;I;){if(I===o){E=!0,o=f,c=g;break}if(I===c){E=!0,c=f,o=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===o){E=!0,o=g,c=f;break}if(I===c){E=!0,c=g,o=f;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function se(n){return n=Q(n),n!==null?ae(n):null}function ae(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ae(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,Le=e.unstable_cancelCallback,Xe=e.unstable_shouldYield,et=e.unstable_requestPaint,De=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,rt=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,xn=e.unstable_LowPriority,Vt=e.unstable_IdlePriority,Tn=null,vt=null;function ut(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Tn,n,void 0,(n.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:la,Ut=Math.log,Ci=Math.LN2;function la(n){return n>>>=0,n===0?32:31-(Ut(n)/Ci|0)|0}var gi=64,Ki=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~f;I!==0?c=zt(I):(g&=E,g!==0&&(c=zt(g)))}else E=o&~f,E!==0?c=zt(E):g!==0&&(c=zt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-yn(i),f=1<<o,c|=n[o],i&=~f;return c}function lo(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-yn(g),I=1<<E,z=f[E];z===-1?((I&o)===0||(I&c)!==0)&&(f[E]=lo(I,i)):z<=i&&(n.expiredLanes|=I),g&=~I}}function Pr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ca(){var n=gi;return gi<<=1,(gi&4194240)===0&&(gi=64),n}function os(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function co(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-yn(i),n[i]=o}function ev(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-yn(o),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function ic(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-yn(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Rt=0;function $d(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Kd,rc,Qd,Zd,Jd,sc=!1,ua=[],Qi=null,Zi=null,Ji=null,uo=new Map,fo=new Map,er=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(n,i,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=bo(i),i!==null&&rc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function nv(n,i,o,c,f){switch(i){case"focusin":return Qi=ho(Qi,n,i,o,c,f),!0;case"dragenter":return Zi=ho(Zi,n,i,o,c,f),!0;case"mouseover":return Ji=ho(Ji,n,i,o,c,f),!0;case"pointerover":var g=f.pointerId;return uo.set(g,ho(uo.get(g)||null,n,i,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,fo.set(g,ho(fo.get(g)||null,n,i,o,c,f)),!0}return!1}function tf(n){var i=Lr(n.target);if(i!==null){var o=Ri(i);if(o!==null){if(i=o.tag,i===13){if(i=aa(o),i!==null){n.blockedOn=i,Jd(n.priority,function(){Qd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);At=c,o.target.dispatchEvent(c),At=null}else return i=bo(o),i!==null&&rc(i),n.blockedOn=o,!1;i.shift()}return!0}function nf(n,i,o){da(n)&&o.delete(i)}function iv(){sc=!1,Qi!==null&&da(Qi)&&(Qi=null),Zi!==null&&da(Zi)&&(Zi=null),Ji!==null&&da(Ji)&&(Ji=null),uo.forEach(nf),fo.forEach(nf)}function po(n,i){n.blockedOn===i&&(n.blockedOn=null,sc||(sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iv)))}function mo(n){function i(f){return po(f,n)}if(0<ua.length){po(ua[0],n);for(var o=1;o<ua.length;o++){var c=ua[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&po(Qi,n),Zi!==null&&po(Zi,n),Ji!==null&&po(Ji,n),uo.forEach(i),fo.forEach(i),o=0;o<er.length;o++)c=er[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)tf(o),o.blockedOn===null&&er.shift()}var as=N.ReactCurrentBatchConfig,fa=!0;function rv(n,i,o,c){var f=Rt,g=as.transition;as.transition=null;try{Rt=1,oc(n,i,o,c)}finally{Rt=f,as.transition=g}}function sv(n,i,o,c){var f=Rt,g=as.transition;as.transition=null;try{Rt=4,oc(n,i,o,c)}finally{Rt=f,as.transition=g}}function oc(n,i,o,c){if(fa){var f=ac(n,i,o,c);if(f===null)wc(n,i,c,ha,o),ef(n,c);else if(nv(f,n,i,o,c))c.stopPropagation();else if(ef(n,c),i&4&&-1<tv.indexOf(n)){for(;f!==null;){var g=bo(f);if(g!==null&&Kd(g),g=ac(n,i,o,c),g===null&&wc(n,i,c,ha,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else wc(n,i,c,null,o)}}var ha=null;function ac(n,i,o,c){if(ha=null,n=ct(c),n=Lr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(o=i.tag,o===13){if(n=aa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ha=n,null}function rf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case rt:return 1;case ot:return 4;case Pt:case xn:return 16;case Vt:return 536870912;default:return 16}default:return 16}}var tr=null,lc=null,pa=null;function sf(){if(pa)return pa;var n,i=lc,o=i.length,c,f="value"in tr?tr.value:tr.textContent,g=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===f[g-c];c++);return pa=f.slice(n,1<c?1-c:void 0)}function ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ga(){return!0}function of(){return!1}function Bn(n){function i(o,c,f,g,E){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ga:of,this.isPropagationStopped=of,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Bn(ls),go=W({},ls,{view:0,detail:0}),ov=Bn(go),uc,dc,vo,va=W({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(uc=n.screenX-vo.screenX,dc=n.screenY-vo.screenY):dc=uc=0,vo=n),uc)},movementY:function(n){return"movementY"in n?n.movementY:dc}}),af=Bn(va),av=W({},va,{dataTransfer:0}),lv=Bn(av),cv=W({},go,{relatedTarget:0}),fc=Bn(cv),uv=W({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=Bn(uv),fv=W({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hv=Bn(fv),pv=W({},ls,{data:0}),lf=Bn(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vv[n])?!!i[n]:!1}function hc(){return _v}var xv=W({},go,{key:function(n){if(n.key){var i=mv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yv=Bn(xv),Sv=W({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=Bn(Sv),Mv=W({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),Ev=Bn(Mv),wv=W({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=Bn(wv),Av=W({},va,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=Bn(Av),Rv=[9,13,27,32],pc=u&&"CompositionEvent"in window,_o=null;u&&"documentMode"in document&&(_o=document.documentMode);var Cv=u&&"TextEvent"in window&&!_o,uf=u&&(!pc||_o&&8<_o&&11>=_o),df=" ",ff=!1;function hf(n,i){switch(n){case"keyup":return Rv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function Pv(n,i){switch(n){case"compositionend":return pf(i);case"keypress":return i.which!==32?null:(ff=!0,df);case"textInput":return n=i.data,n===df&&ff?null:n;default:return null}}function Lv(n,i){if(cs)return n==="compositionend"||!pc&&hf(n,i)?(n=sf(),pa=lc=tr=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return uf&&i.locale!=="ko"?null:i.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Nv[n.type]:i==="textarea"}function gf(n,i,o,c){Ge(c),i=Ma(i,"onChange"),0<i.length&&(o=new cc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var xo=null,yo=null;function Dv(n){If(n,0)}function _a(n){var i=ps(n);if(q(i))return n}function Iv(n,i){if(n==="change")return i}var vf=!1;if(u){var mc;if(u){var gc="oninput"in document;if(!gc){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),gc=typeof _f.oninput=="function"}mc=gc}else mc=!1;vf=mc&&(!document.documentMode||9<document.documentMode)}function xf(){xo&&(xo.detachEvent("onpropertychange",yf),yo=xo=null)}function yf(n){if(n.propertyName==="value"&&_a(yo)){var i=[];gf(i,yo,n,ct(n)),_n(Dv,i)}}function Uv(n,i,o){n==="focusin"?(xf(),xo=i,yo=o,xo.attachEvent("onpropertychange",yf)):n==="focusout"&&xf()}function Fv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _a(yo)}function Ov(n,i){if(n==="click")return _a(i)}function kv(n,i){if(n==="input"||n==="change")return _a(i)}function zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:zv;function So(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!ni(n[f],i[f]))return!1}return!0}function Sf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mf(n,i){var o=Sf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sf(o)}}function Ef(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ef(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function wf(){for(var n=window,i=mt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=mt(n.document)}return i}function vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=wf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ef(o.ownerDocument.documentElement,o)){if(c!==null&&vc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Mf(o,g);var E=Mf(o,c);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hv=u&&"documentMode"in document&&11>=document.documentMode,us=null,_c=null,Mo=null,xc=!1;function Tf(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xc||us==null||us!==mt(c)||(c=us,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Mo&&So(Mo,c)||(Mo=c,c=Ma(_c,"onSelect"),0<c.length&&(i=new cc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=us)))}function xa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ds={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},yc={},Af={};u&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function ya(n){if(yc[n])return yc[n];if(!ds[n])return n;var i=ds[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Af)return yc[n]=i[o];return n}var bf=ya("animationend"),Rf=ya("animationiteration"),Cf=ya("animationstart"),Pf=ya("transitionend"),Lf=new Map,Nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){Lf.set(n,i),l(i,[n])}for(var Sc=0;Sc<Nf.length;Sc++){var Mc=Nf[Sc],Gv=Mc.toLowerCase(),Vv=Mc[0].toUpperCase()+Mc.slice(1);nr(Gv,"on"+Vv)}nr(bf,"onAnimationEnd"),nr(Rf,"onAnimationIteration"),nr(Cf,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Pf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Df(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,nc(c,i,void 0,n),n.currentTarget=null}function If(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],z=I.instance,ne=I.currentTarget;if(I=I.listener,z!==g&&f.isPropagationStopped())break e;Df(f,I,ne),g=z}else for(E=0;E<c.length;E++){if(I=c[E],z=I.instance,ne=I.currentTarget,I=I.listener,z!==g&&f.isPropagationStopped())break e;Df(f,I,ne),g=z}}}if(Cr)throw n=$i,Cr=!1,$i=null,n}function Nt(n,i){var o=i[Pc];o===void 0&&(o=i[Pc]=new Set);var c=n+"__bubble";o.has(c)||(Uf(i,n,2,!1),o.add(c))}function Ec(n,i,o){var c=0;i&&(c|=4),Uf(o,n,c,i)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function wo(n){if(!n[Sa]){n[Sa]=!0,s.forEach(function(o){o!=="selectionchange"&&(jv.has(o)||Ec(o,!1,n),Ec(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sa]||(i[Sa]=!0,Ec("selectionchange",!1,i))}}function Uf(n,i,o,c){switch(rf(i)){case 1:var f=rv;break;case 4:f=sv;break;default:f=oc}o=f.bind(null,i,o,n),f=void 0,!qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function wc(n,i,o,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Lr(I),E===null)return;if(z=E.tag,z===5||z===6){c=g=E;continue e}I=I.parentNode}}c=c.return}_n(function(){var ne=g,ge=ct(o),ye=[];e:{var me=Lf.get(n);if(me!==void 0){var Ne=cc,ke=n;switch(n){case"keypress":if(ma(o)===0)break e;case"keydown":case"keyup":Ne=yv;break;case"focusin":ke="focus",Ne=fc;break;case"focusout":ke="blur",Ne=fc;break;case"beforeblur":case"afterblur":Ne=fc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Ev;break;case bf:case Rf:case Cf:Ne=dv;break;case Pf:Ne=Tv;break;case"scroll":Ne=ov;break;case"wheel":Ne=bv;break;case"copy":case"cut":case"paste":Ne=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=cf}var He=(i&4)!==0,jt=!He&&n==="scroll",K=He?me!==null?me+"Capture":null:me;He=[];for(var V=ne,J;V!==null;){J=V;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,K!==null&&(we=Mt(V,K),we!=null&&He.push(To(V,we,J)))),jt)break;V=V.return}0<He.length&&(me=new Ne(me,ke,null,o,ge),ye.push({event:me,listeners:He}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",me&&o!==At&&(ke=o.relatedTarget||o.fromElement)&&(Lr(ke)||ke[Pi]))break e;if((Ne||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ne?(ke=o.relatedTarget||o.toElement,Ne=ne,ke=ke?Lr(ke):null,ke!==null&&(jt=Ri(ke),ke!==jt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ne=null,ke=ne),Ne!==ke)){if(He=af,we="onMouseLeave",K="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(He=cf,we="onPointerLeave",K="onPointerEnter",V="pointer"),jt=Ne==null?me:ps(Ne),J=ke==null?me:ps(ke),me=new He(we,V+"leave",Ne,o,ge),me.target=jt,me.relatedTarget=J,we=null,Lr(ge)===ne&&(He=new He(K,V+"enter",ke,o,ge),He.target=J,He.relatedTarget=jt,we=He),jt=we,Ne&&ke)t:{for(He=Ne,K=ke,V=0,J=He;J;J=fs(J))V++;for(J=0,we=K;we;we=fs(we))J++;for(;0<V-J;)He=fs(He),V--;for(;0<J-V;)K=fs(K),J--;for(;V--;){if(He===K||K!==null&&He===K.alternate)break t;He=fs(He),K=fs(K)}He=null}else He=null;Ne!==null&&Ff(ye,me,Ne,He,!1),ke!==null&&jt!==null&&Ff(ye,jt,ke,He,!0)}}e:{if(me=ne?ps(ne):window,Ne=me.nodeName&&me.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&me.type==="file")var je=Iv;else if(mf(me))if(vf)je=kv;else{je=Fv;var Ze=Uv}else(Ne=me.nodeName)&&Ne.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=Ov);if(je&&(je=je(n,ne))){gf(ye,je,o,ge);break e}Ze&&Ze(n,me,ne),n==="focusout"&&(Ze=me._wrapperState)&&Ze.controlled&&me.type==="number"&&C(me,"number",me.value)}switch(Ze=ne?ps(ne):window,n){case"focusin":(mf(Ze)||Ze.contentEditable==="true")&&(us=Ze,_c=ne,Mo=null);break;case"focusout":Mo=_c=us=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Tf(ye,o,ge);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":Tf(ye,o,ge)}var Je;if(pc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else cs?hf(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(uf&&o.locale!=="ko"&&(cs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&cs&&(Je=sf()):(tr=ge,lc="value"in tr?tr.value:tr.textContent,cs=!0)),Ze=Ma(ne,nt),0<Ze.length&&(nt=new lf(nt,n,null,o,ge),ye.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=pf(o),Je!==null&&(nt.data=Je)))),(Je=Cv?Pv(n,o):Lv(n,o))&&(ne=Ma(ne,"onBeforeInput"),0<ne.length&&(ge=new lf("onBeforeInput","beforeinput",null,o,ge),ye.push({event:ge,listeners:ne}),ge.data=Je))}If(ye,i)})}function To(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ma(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Mt(n,o),g!=null&&c.unshift(To(n,g,f)),g=Mt(n,i),g!=null&&c.push(To(n,g,f))),n=n.return}return c}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ff(n,i,o,c,f){for(var g=i._reactName,E=[];o!==null&&o!==c;){var I=o,z=I.alternate,ne=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&ne!==null&&(I=ne,f?(z=Mt(o,g),z!=null&&E.unshift(To(o,z,I))):f||(z=Mt(o,g),z!=null&&E.push(To(o,z,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Wv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Of(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(Xv,"")}function Ea(n,i,o){if(i=Of(i),Of(n)!==i&&o)throw Error(t(425))}function wa(){}var Tc=null,Ac=null;function bc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(n){return kf.resolve(null).then(n).catch($v)}:Rc;function $v(n){setTimeout(function(){throw n})}function Cc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),mo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);mo(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function zf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),vi="__reactFiber$"+hs,Ao="__reactProps$"+hs,Pi="__reactContainer$"+hs,Pc="__reactEvents$"+hs,Kv="__reactListeners$"+hs,Qv="__reactHandles$"+hs;function Lr(n){var i=n[vi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Pi]||o[vi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=zf(n);n!==null;){if(o=n[vi])return o;n=zf(n)}return i}n=o,o=n.parentNode}return null}function bo(n){return n=n[vi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ta(n){return n[Ao]||null}var Lc=[],ms=-1;function rr(n){return{current:n}}function Dt(n){0>ms||(n.current=Lc[ms],Lc[ms]=null,ms--)}function Lt(n,i){ms++,Lc[ms]=n.current,n.current=i}var sr={},cn=rr(sr),bn=rr(!1),Nr=sr;function gs(n,i){var o=n.type.contextTypes;if(!o)return sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Rn(n){return n=n.childContextTypes,n!=null}function Aa(){Dt(bn),Dt(cn)}function Bf(n,i,o){if(cn.current!==sr)throw Error(t(168));Lt(cn,i),Lt(bn,o)}function Hf(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Ae(n)||"Unknown",f));return W({},o,c)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Nr=cn.current,Lt(cn,n),Lt(bn,bn.current),!0}function Gf(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Hf(n,i,Nr),c.__reactInternalMemoizedMergedChildContext=n,Dt(bn),Dt(cn),Lt(cn,n)):Dt(bn),Lt(bn,o)}var Li=null,Ra=!1,Nc=!1;function Vf(n){Li===null?Li=[n]:Li.push(n)}function Zv(n){Ra=!0,Vf(n)}function or(){if(!Nc&&Li!==null){Nc=!0;var n=0,i=Rt;try{var o=Li;for(Rt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Li=null,Ra=!1}catch(f){throw Li!==null&&(Li=Li.slice(n+1)),re(rt,or),f}finally{Rt=i,Nc=!1}}return null}var vs=[],_s=0,Ca=null,Pa=0,qn=[],Yn=0,Dr=null,Ni=1,Di="";function Ir(n,i){vs[_s++]=Pa,vs[_s++]=Ca,Ca=n,Pa=i}function jf(n,i,o){qn[Yn++]=Ni,qn[Yn++]=Di,qn[Yn++]=Dr,Dr=n;var c=Ni;n=Di;var f=32-yn(c)-1;c&=~(1<<f),o+=1;var g=32-yn(i)+f;if(30<g){var E=f-f%5;g=(c&(1<<E)-1).toString(32),c>>=E,f-=E,Ni=1<<32-yn(i)+f|o<<f|c,Di=g+n}else Ni=1<<g|o<<f|c,Di=n}function Dc(n){n.return!==null&&(Ir(n,1),jf(n,1,0))}function Ic(n){for(;n===Ca;)Ca=vs[--_s],vs[_s]=null,Pa=vs[--_s],vs[_s]=null;for(;n===Dr;)Dr=qn[--Yn],qn[Yn]=null,Di=qn[--Yn],qn[Yn]=null,Ni=qn[--Yn],qn[Yn]=null}var Hn=null,Gn=null,Ft=!1,ii=null;function Wf(n,i){var o=Zn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Xf(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Gn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:Ni,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Zn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Hn=n,Gn=null,!0):!1;default:return!1}}function Uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fc(n){if(Ft){var i=Gn;if(i){var o=i;if(!Xf(n,i)){if(Uc(n))throw Error(t(418));i=ir(o.nextSibling);var c=Hn;i&&Xf(n,i)?Wf(c,o):(n.flags=n.flags&-4097|2,Ft=!1,Hn=n)}}else{if(Uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Hn=n}}}function qf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function La(n){if(n!==Hn)return!1;if(!Ft)return qf(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!bc(n.type,n.memoizedProps)),i&&(i=Gn)){if(Uc(n))throw Yf(),Error(t(418));for(;i;)Wf(n,i),i=ir(i.nextSibling)}if(qf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Gn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Hn?ir(n.stateNode.nextSibling):null;return!0}function Yf(){for(var n=Gn;n;)n=ir(n.nextSibling)}function xs(){Gn=Hn=null,Ft=!1}function Oc(n){ii===null?ii=[n]:ii.push(n)}var Jv=N.ReactCurrentBatchConfig;function Ro(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var I=f.refs;E===null?delete I[g]:I[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Na(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function $f(n){var i=n._init;return i(n._payload)}function Kf(n){function i(K,V){if(n){var J=K.deletions;J===null?(K.deletions=[V],K.flags|=16):J.push(V)}}function o(K,V){if(!n)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function c(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function f(K,V){return K=pr(K,V),K.index=0,K.sibling=null,K}function g(K,V,J){return K.index=J,n?(J=K.alternate,J!==null?(J=J.index,J<V?(K.flags|=2,V):J):(K.flags|=2,V)):(K.flags|=1048576,V)}function E(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,V,J,we){return V===null||V.tag!==6?(V=Ru(J,K.mode,we),V.return=K,V):(V=f(V,J),V.return=K,V)}function z(K,V,J,we){var je=J.type;return je===O?ge(K,V,J.props.children,we,J.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===j&&$f(je)===V.type)?(we=f(V,J.props),we.ref=Ro(K,V,J),we.return=K,we):(we=nl(J.type,J.key,J.props,null,K.mode,we),we.ref=Ro(K,V,J),we.return=K,we)}function ne(K,V,J,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Cu(J,K.mode,we),V.return=K,V):(V=f(V,J.children||[]),V.return=K,V)}function ge(K,V,J,we,je){return V===null||V.tag!==7?(V=Gr(J,K.mode,we,je),V.return=K,V):(V=f(V,J),V.return=K,V)}function ye(K,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Ru(""+V,K.mode,J),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return J=nl(V.type,V.key,V.props,null,K.mode,J),J.ref=Ro(K,null,V),J.return=K,J;case k:return V=Cu(V,K.mode,J),V.return=K,V;case j:var we=V._init;return ye(K,we(V._payload),J)}if(b(V)||Z(V))return V=Gr(V,K.mode,J,null),V.return=K,V;Na(K,V)}return null}function me(K,V,J,we){var je=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:I(K,V,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case X:return J.key===je?z(K,V,J,we):null;case k:return J.key===je?ne(K,V,J,we):null;case j:return je=J._init,me(K,V,je(J._payload),we)}if(b(J)||Z(J))return je!==null?null:ge(K,V,J,we,null);Na(K,J)}return null}function Ne(K,V,J,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get(J)||null,I(V,K,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case X:return K=K.get(we.key===null?J:we.key)||null,z(V,K,we,je);case k:return K=K.get(we.key===null?J:we.key)||null,ne(V,K,we,je);case j:var Ze=we._init;return Ne(K,V,J,Ze(we._payload),je)}if(b(we)||Z(we))return K=K.get(J)||null,ge(V,K,we,je,null);Na(V,we)}return null}function ke(K,V,J,we){for(var je=null,Ze=null,Je=V,nt=V=0,tn=null;Je!==null&&nt<J.length;nt++){Je.index>nt?(tn=Je,Je=null):tn=Je.sibling;var Et=me(K,Je,J[nt],we);if(Et===null){Je===null&&(Je=tn);break}n&&Je&&Et.alternate===null&&i(K,Je),V=g(Et,V,nt),Ze===null?je=Et:Ze.sibling=Et,Ze=Et,Je=tn}if(nt===J.length)return o(K,Je),Ft&&Ir(K,nt),je;if(Je===null){for(;nt<J.length;nt++)Je=ye(K,J[nt],we),Je!==null&&(V=g(Je,V,nt),Ze===null?je=Je:Ze.sibling=Je,Ze=Je);return Ft&&Ir(K,nt),je}for(Je=c(K,Je);nt<J.length;nt++)tn=Ne(Je,K,nt,J[nt],we),tn!==null&&(n&&tn.alternate!==null&&Je.delete(tn.key===null?nt:tn.key),V=g(tn,V,nt),Ze===null?je=tn:Ze.sibling=tn,Ze=tn);return n&&Je.forEach(function(mr){return i(K,mr)}),Ft&&Ir(K,nt),je}function He(K,V,J,we){var je=Z(J);if(typeof je!="function")throw Error(t(150));if(J=je.call(J),J==null)throw Error(t(151));for(var Ze=je=null,Je=V,nt=V=0,tn=null,Et=J.next();Je!==null&&!Et.done;nt++,Et=J.next()){Je.index>nt?(tn=Je,Je=null):tn=Je.sibling;var mr=me(K,Je,Et.value,we);if(mr===null){Je===null&&(Je=tn);break}n&&Je&&mr.alternate===null&&i(K,Je),V=g(mr,V,nt),Ze===null?je=mr:Ze.sibling=mr,Ze=mr,Je=tn}if(Et.done)return o(K,Je),Ft&&Ir(K,nt),je;if(Je===null){for(;!Et.done;nt++,Et=J.next())Et=ye(K,Et.value,we),Et!==null&&(V=g(Et,V,nt),Ze===null?je=Et:Ze.sibling=Et,Ze=Et);return Ft&&Ir(K,nt),je}for(Je=c(K,Je);!Et.done;nt++,Et=J.next())Et=Ne(Je,K,nt,Et.value,we),Et!==null&&(n&&Et.alternate!==null&&Je.delete(Et.key===null?nt:Et.key),V=g(Et,V,nt),Ze===null?je=Et:Ze.sibling=Et,Ze=Et);return n&&Je.forEach(function(N0){return i(K,N0)}),Ft&&Ir(K,nt),je}function jt(K,V,J,we){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case X:e:{for(var je=J.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=J.type,je===O){if(Ze.tag===7){o(K,Ze.sibling),V=f(Ze,J.props.children),V.return=K,K=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===j&&$f(je)===Ze.type){o(K,Ze.sibling),V=f(Ze,J.props),V.ref=Ro(K,Ze,J),V.return=K,K=V;break e}o(K,Ze);break}else i(K,Ze);Ze=Ze.sibling}J.type===O?(V=Gr(J.props.children,K.mode,we,J.key),V.return=K,K=V):(we=nl(J.type,J.key,J.props,null,K.mode,we),we.ref=Ro(K,V,J),we.return=K,K=we)}return E(K);case k:e:{for(Ze=J.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){o(K,V.sibling),V=f(V,J.children||[]),V.return=K,K=V;break e}else{o(K,V);break}else i(K,V);V=V.sibling}V=Cu(J,K.mode,we),V.return=K,K=V}return E(K);case j:return Ze=J._init,jt(K,V,Ze(J._payload),we)}if(b(J))return ke(K,V,J,we);if(Z(J))return He(K,V,J,we);Na(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(o(K,V.sibling),V=f(V,J),V.return=K,K=V):(o(K,V),V=Ru(J,K.mode,we),V.return=K,K=V),E(K)):o(K,V)}return jt}var ys=Kf(!0),Qf=Kf(!1),Da=rr(null),Ia=null,Ss=null,kc=null;function zc(){kc=Ss=Ia=null}function Bc(n){var i=Da.current;Dt(Da),n._currentValue=i}function Hc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ms(n,i){Ia=n,kc=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(kc!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(Ia===null)throw Error(t(308));Ss=n,Ia.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Ur=null;function Gc(n){Ur===null?Ur=[n]:Ur.push(n)}function Zf(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Gc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ii(n,c)}function Ii(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ii(n,o)}return f=c.interleaved,f===null?(i.next=i,Gc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ii(n,o)}function Ua(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ic(n,o)}}function eh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Fa(n,i,o,c){var f=n.updateQueue;ar=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,ne=z.next;z.next=null,E===null?g=ne:E.next=ne,E=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,I=ge.lastBaseUpdate,I!==E&&(I===null?ge.firstBaseUpdate=ne:I.next=ne,ge.lastBaseUpdate=z))}if(g!==null){var ye=f.baseState;E=0,ge=ne=z=null,I=g;do{var me=I.lane,Ne=I.eventTime;if((c&me)===me){ge!==null&&(ge=ge.next={eventTime:Ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ke=n,He=I;switch(me=i,Ne=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){ye=ke.call(Ne,ye,me);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,me=typeof ke=="function"?ke.call(Ne,ye,me):ke,me==null)break e;ye=W({},ye,me);break e;case 2:ar=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=f.effects,me===null?f.effects=[I]:me.push(I))}else Ne={eventTime:Ne,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ge===null?(ne=ge=Ne,z=ye):ge=ge.next=Ne,E|=me;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;me=I,I=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ge===null&&(z=ye),f.baseState=z,f.firstBaseUpdate=ne,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);kr|=E,n.lanes=E,n.memoizedState=ye}}function th(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Co={},_i=rr(Co),Po=rr(Co),Lo=rr(Co);function Fr(n){if(n===Co)throw Error(t(174));return n}function jc(n,i){switch(Lt(Lo,i),Lt(Po,n),Lt(_i,Co),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Oe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Oe(i,n)}Dt(_i),Lt(_i,i)}function Es(){Dt(_i),Dt(Po),Dt(Lo)}function nh(n){Fr(Lo.current);var i=Fr(_i.current),o=Oe(i,n.type);i!==o&&(Lt(Po,n),Lt(_i,o))}function Wc(n){Po.current===n&&(Dt(_i),Dt(Po))}var Ot=rr(0);function Oa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function qc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var ka=N.ReactCurrentDispatcher,Yc=N.ReactCurrentBatchConfig,Or=0,kt=null,Yt=null,Jt=null,za=!1,No=!1,Do=0,e0=0;function un(){throw Error(t(321))}function $c(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ni(n[o],i[o]))return!1;return!0}function Kc(n,i,o,c,f,g){if(Or=g,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ka.current=n===null||n.memoizedState===null?r0:s0,n=o(c,f),No){g=0;do{if(No=!1,Do=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,i.updateQueue=null,ka.current=o0,n=o(c,f)}while(No)}if(ka.current=Ga,i=Yt!==null&&Yt.next!==null,Or=0,Jt=Yt=kt=null,za=!1,i)throw Error(t(300));return n}function Qc(){var n=Do!==0;return Do=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?kt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Kn(){if(Yt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?kt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?kt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Io(n,i){return typeof i=="function"?i(n):i}function Zc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Yt,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=E=null,z=null,ne=g;do{var ge=ne.lane;if((Or&ge)===ge)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var ye={lane:ge,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(I=z=ye,E=c):z=z.next=ye,kt.lanes|=ge,kr|=ge}ne=ne.next}while(ne!==null&&ne!==g);z===null?E=c:z.next=I,ni(c,i.memoizedState)||(Cn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=z,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,kt.lanes|=g,kr|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Jc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do g=n(g,E.action),E=E.next;while(E!==f);ni(g,i.memoizedState)||(Cn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function ih(){}function rh(n,i){var o=kt,c=Kn(),f=i(),g=!ni(c.memoizedState,f);if(g&&(c.memoizedState=f,Cn=!0),c=c.queue,eu(ah.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,Uo(9,oh.bind(null,o,c,f,i),void 0,null),en===null)throw Error(t(349));(Or&30)!==0||sh(o,i,f)}return f}function sh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function oh(n,i,o,c){i.value=o,i.getSnapshot=c,lh(i)&&ch(n)}function ah(n,i,o){return o(function(){lh(i)&&ch(n)})}function lh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ni(n,o)}catch{return!0}}function ch(n){var i=Ii(n,1);i!==null&&ai(i,n,1,-1)}function uh(n){var i=xi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},i.queue=n,n=n.dispatch=i0.bind(null,kt,n),[i.memoizedState,n]}function Uo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function dh(){return Kn().memoizedState}function Ba(n,i,o,c){var f=xi();kt.flags|=n,f.memoizedState=Uo(1|i,o,void 0,c===void 0?null:c)}function Ha(n,i,o,c){var f=Kn();c=c===void 0?null:c;var g=void 0;if(Yt!==null){var E=Yt.memoizedState;if(g=E.destroy,c!==null&&$c(c,E.deps)){f.memoizedState=Uo(i,o,g,c);return}}kt.flags|=n,f.memoizedState=Uo(1|i,o,g,c)}function fh(n,i){return Ba(8390656,8,n,i)}function eu(n,i){return Ha(2048,8,n,i)}function hh(n,i){return Ha(4,2,n,i)}function ph(n,i){return Ha(4,4,n,i)}function mh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function gh(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4,4,mh.bind(null,i,n),o)}function tu(){}function vh(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function _h(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function xh(n,i,o){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=o):(ni(o,i)||(o=ca(),kt.lanes|=o,kr|=o,n.baseState=!0),i)}function t0(n,i){var o=Rt;Rt=o!==0&&4>o?o:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),i()}finally{Rt=o,Yc.transition=c}}function yh(){return Kn().memoizedState}function n0(n,i,o){var c=fr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Sh(n))Mh(i,o);else if(o=Zf(n,i,o,c),o!==null){var f=Mn();ai(o,n,c,f),Eh(o,i,c)}}function i0(n,i,o){var c=fr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sh(n))Mh(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,I=g(E,o);if(f.hasEagerState=!0,f.eagerState=I,ni(I,E)){var z=i.interleaved;z===null?(f.next=f,Gc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}o=Zf(n,i,f,c),o!==null&&(f=Mn(),ai(o,n,c,f),Eh(o,i,c))}}function Sh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function Mh(n,i){No=za=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Eh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ic(n,o)}}var Ga={readContext:$n,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},r0={readContext:$n,useCallback:function(n,i){return xi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:fh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ba(4194308,4,mh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ba(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ba(4,2,n,i)},useMemo:function(n,i){var o=xi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=xi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=n0.bind(null,kt,n),[c.memoizedState,n]},useRef:function(n){var i=xi();return n={current:n},i.memoizedState=n},useState:uh,useDebugValue:tu,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=uh(!1),i=n[0];return n=t0.bind(null,n[1]),xi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=kt,f=xi();if(Ft){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),en===null)throw Error(t(349));(Or&30)!==0||sh(c,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,fh(ah.bind(null,c,g,n),[n]),c.flags|=2048,Uo(9,oh.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=xi(),i=en.identifierPrefix;if(Ft){var o=Di,c=Ni;o=(c&~(1<<32-yn(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Do++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=e0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},s0={readContext:$n,useCallback:vh,useContext:$n,useEffect:eu,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:_h,useReducer:Zc,useRef:dh,useState:function(){return Zc(Io)},useDebugValue:tu,useDeferredValue:function(n){var i=Kn();return xh(i,Yt.memoizedState,n)},useTransition:function(){var n=Zc(Io)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1},o0={readContext:$n,useCallback:vh,useContext:$n,useEffect:eu,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:_h,useReducer:Jc,useRef:dh,useState:function(){return Jc(Io)},useDebugValue:tu,useDeferredValue:function(n){var i=Kn();return Yt===null?i.memoizedState=n:xh(i,Yt.memoizedState,n)},useTransition:function(){var n=Jc(Io)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function nu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:W({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Va={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Mn(),f=fr(n),g=Ui(c,f);g.payload=i,o!=null&&(g.callback=o),i=lr(n,g,f),i!==null&&(ai(i,n,f,c),Ua(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Mn(),f=fr(n),g=Ui(c,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=lr(n,g,f),i!==null&&(ai(i,n,f,c),Ua(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),c=fr(n),f=Ui(o,c);f.tag=2,i!=null&&(f.callback=i),i=lr(n,f,c),i!==null&&(ai(i,n,c,o),Ua(i,n,c))}};function wh(n,i,o,c,f,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!So(o,c)||!So(f,g):!0}function Th(n,i,o){var c=!1,f=sr,g=i.contextType;return typeof g=="object"&&g!==null?g=$n(g):(f=Rn(i)?Nr:cn.current,c=i.contextTypes,g=(c=c!=null)?gs(n,f):sr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Va,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ah(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Va.enqueueReplaceState(i,i.state,null)}function iu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Vc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=$n(g):(g=Rn(i)?Nr:cn.current,f.context=gs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(nu(n,i,g,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Va.enqueueReplaceState(f,f.state,null),Fa(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",c=i;do o+=le(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function ru(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function su(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var a0=typeof WeakMap=="function"?WeakMap:Map;function bh(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Ka||(Ka=!0,yu=c),su(n,i)},o}function Rh(n,i,o){o=Ui(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){su(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){su(n,i),typeof c!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Ch(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new a0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=S0.bind(null,n,i,o),i.then(n,n))}function Ph(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Lh(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var l0=N.ReactCurrentOwner,Cn=!1;function Sn(n,i,o,c){i.child=n===null?Qf(i,null,o,c):ys(i,n.child,o,c)}function Nh(n,i,o,c,f){o=o.render;var g=i.ref;return Ms(i,f),c=Kc(n,i,o,c,g,f),o=Qc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(Ft&&o&&Dc(i),i.flags|=1,Sn(n,i,c,f),i.child)}function Dh(n,i,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!bu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Ih(n,i,g,c,f)):(n=nl(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:So,o(E,c)&&n.ref===i.ref)return Fi(n,i,f)}return i.flags|=1,n=pr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Ih(n,i,o,c,f){if(n!==null){var g=n.memoizedProps;if(So(g,c)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Fi(n,i,f)}return ou(n,i,o,c,f)}function Uh(n,i,o){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(As,Vn),Vn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(As,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Lt(As,Vn),Vn|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Lt(As,Vn),Vn|=c;return Sn(n,i,f,o),i.child}function Fh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ou(n,i,o,c,f){var g=Rn(o)?Nr:cn.current;return g=gs(i,g),Ms(i,f),o=Kc(n,i,o,c,g,f),c=Qc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(Ft&&c&&Dc(i),i.flags|=1,Sn(n,i,o,f),i.child)}function Oh(n,i,o,c,f){if(Rn(o)){var g=!0;ba(i)}else g=!1;if(Ms(i,f),i.stateNode===null)Wa(n,i),Th(i,o,c),iu(i,o,c,f),c=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var z=E.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=$n(ne):(ne=Rn(o)?Nr:cn.current,ne=gs(i,ne));var ge=o.getDerivedStateFromProps,ye=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||z!==ne)&&Ah(i,E,c,ne),ar=!1;var me=i.memoizedState;E.state=me,Fa(i,c,E,f),z=i.memoizedState,I!==c||me!==z||bn.current||ar?(typeof ge=="function"&&(nu(i,o,ge,c),z=i.memoizedState),(I=ar||wh(i,o,I,c,me,z,ne))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),E.props=c,E.state=z,E.context=ne,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Jf(n,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ri(i.type,I),E.props=ne,ye=i.pendingProps,me=E.context,z=o.contextType,typeof z=="object"&&z!==null?z=$n(z):(z=Rn(o)?Nr:cn.current,z=gs(i,z));var Ne=o.getDerivedStateFromProps;(ge=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||me!==z)&&Ah(i,E,c,z),ar=!1,me=i.memoizedState,E.state=me,Fa(i,c,E,f);var ke=i.memoizedState;I!==ye||me!==ke||bn.current||ar?(typeof Ne=="function"&&(nu(i,o,Ne,c),ke=i.memoizedState),(ne=ar||wh(i,o,ne,c,me,ke,z)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ke,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ke,z)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ke),E.props=c,E.state=ke,E.context=z,c=ne):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),c=!1)}return au(n,i,o,c,g,f)}function au(n,i,o,c,f,g){Fh(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&Gf(i,o,!1),Fi(n,i,g);c=i.stateNode,l0.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=ys(i,n.child,null,g),i.child=ys(i,null,I,g)):Sn(n,i,I,g),i.memoizedState=c.state,f&&Gf(i,o,!0),i.child}function kh(n){var i=n.stateNode;i.pendingContext?Bf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bf(n,i.context,!1),jc(n,i.containerInfo)}function zh(n,i,o,c,f){return xs(),Oc(f),i.flags|=256,Sn(n,i,o,c),i.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bh(n,i,o){var c=i.pendingProps,f=Ot.current,g=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Lt(Ot,f&1),n===null)return Fc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=il(E,c,0,null),n=Gr(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=cu(o),i.memoizedState=lu,n):uu(i,E));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return c0(n,i,E,c,I,f,o);if(g){g=c.fallback,E=i.mode,f=n.child,I=f.sibling;var z={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=pr(f,z),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=pr(I,g):(g=Gr(g,E,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=n.child.memoizedState,E=E===null?cu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~o,i.memoizedState=lu,c}return g=n.child,n=g.sibling,c=pr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function uu(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ja(n,i,o,c){return c!==null&&Oc(c),ys(i,n.child,null,o),n=uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function c0(n,i,o,c,f,g,E){if(o)return i.flags&256?(i.flags&=-257,c=ru(Error(t(422))),ja(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=il({mode:"visible",children:c.children},f,0,null),g=Gr(g,f,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,E),i.child.memoizedState=cu(E),i.memoizedState=lu,g);if((i.mode&1)===0)return ja(n,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=ru(g,c,void 0),ja(n,i,E,c)}if(I=(E&n.childLanes)!==0,Cn||I){if(c=en,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ii(n,f),ai(c,n,f,-1))}return Au(),c=ru(Error(t(421))),ja(n,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=M0.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,Gn=ir(f.nextSibling),Hn=i,Ft=!0,ii=null,n!==null&&(qn[Yn++]=Ni,qn[Yn++]=Di,qn[Yn++]=Dr,Ni=n.id,Di=n.overflow,Dr=i),i=uu(i,c.children),i.flags|=4096,i)}function Hh(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hc(n.return,i,o)}function du(n,i,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function Gh(n,i,o){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Sn(n,i,c.children,o),c=Ot.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hh(n,o,i);else if(n.tag===19)Hh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Lt(Ot,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Oa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),du(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Oa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}du(i,!0,o,null,g);break;case"together":du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function u0(n,i,o){switch(i.tag){case 3:kh(i),xs();break;case 5:nh(i);break;case 1:Rn(i.type)&&ba(i);break;case 4:jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Lt(Da,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Bh(n,i,o):(Lt(Ot,Ot.current&1),n=Fi(n,i,o),n!==null?n.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Gh(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Ot,Ot.current),c)break;return null;case 22:case 23:return i.lanes=0,Uh(n,i,o)}return Fi(n,i,o)}var Vh,fu,jh,Wh;Vh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fu=function(){},jh=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Fr(_i.current);var g=null;switch(o){case"input":f=Fe(n,f),c=Fe(n,c),g=[];break;case"select":f=W({},f,{value:void 0}),c=W({},c,{value:void 0}),g=[];break;case"textarea":f=Se(n,f),c=Se(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=wa)}st(o,c);var E;o=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var I=f[ne];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?g||(g=[]):(g=g||[]).push(ne,null));for(ne in c){var z=c[ne];if(I=f!=null?f[ne]:void 0,c.hasOwnProperty(ne)&&z!==I&&(z!=null||I!=null))if(ne==="style")if(I){for(E in I)!I.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in z)z.hasOwnProperty(E)&&I[E]!==z[E]&&(o||(o={}),o[E]=z[E])}else o||(g||(g=[]),g.push(ne,o)),o=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(g=g||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Nt("scroll",n),g||I===z||(g=[])):(g=g||[]).push(ne,z))}o&&(g=g||[]).push("style",o);var ne=g;(i.updateQueue=ne)&&(i.flags|=4)}},Wh=function(n,i,o,c){o!==c&&(i.flags|=4)};function Fo(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function d0(n,i,o){var c=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Rn(i.type)&&Aa(),dn(i),null;case 3:return c=i.stateNode,Es(),Dt(bn),Dt(cn),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(La(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(Eu(ii),ii=null))),fu(n,i),dn(i),null;case 5:Wc(i);var f=Fr(Lo.current);if(o=i.type,n!==null&&i.stateNode!=null)jh(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Fr(_i.current),La(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[vi]=i,c[Ao]=g,n=(i.mode&1)!==0,o){case"dialog":Nt("cancel",c),Nt("close",c);break;case"iframe":case"object":case"embed":Nt("load",c);break;case"video":case"audio":for(f=0;f<Eo.length;f++)Nt(Eo[f],c);break;case"source":Nt("error",c);break;case"img":case"image":case"link":Nt("error",c),Nt("load",c);break;case"details":Nt("toggle",c);break;case"input":qe(c,g),Nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Nt("invalid",c);break;case"textarea":_e(c,g),Nt("invalid",c)}st(o,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&Ea(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&Ea(c.textContent,I,n),f=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Nt("scroll",c)}switch(o){case"input":ze(c),$e(c,g,!0);break;case"textarea":ze(c),Ve(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=wa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ce(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[vi]=i,n[Ao]=c,Vh(n,i,!1,!1),i.stateNode=n;e:{switch(E=xt(o,c),o){case"dialog":Nt("cancel",n),Nt("close",n),f=c;break;case"iframe":case"object":case"embed":Nt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Eo.length;f++)Nt(Eo[f],n);f=c;break;case"source":Nt("error",n),f=c;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),f=c;break;case"details":Nt("toggle",n),f=c;break;case"input":qe(n,c),f=Fe(n,c),Nt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=W({},c,{value:void 0}),Nt("invalid",n);break;case"textarea":_e(n,c),f=Se(n,c),Nt("invalid",n);break;default:f=c}st(o,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var z=I[g];g==="style"?Ye(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&at(n,z)):g==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&ve(n,z):typeof z=="number"&&ve(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Nt("scroll",n):z!=null&&R(n,g,z,E))}switch(o){case"input":ze(n),$e(n,c,!1);break;case"textarea":ze(n),Ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ue(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?te(n,!!c.multiple,g,!1):c.defaultValue!=null&&te(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=wa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)Wh(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Fr(Lo.current),Fr(_i.current),La(i)){if(c=i.stateNode,o=i.memoizedProps,c[vi]=i,(g=c.nodeValue!==o)&&(n=Hn,n!==null))switch(n.tag){case 3:Ea(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ea(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[vi]=i,i.stateNode=c}return dn(i),null;case 13:if(Dt(Ot),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Yf(),xs(),i.flags|=98560,g=!1;else if(g=La(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[vi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),g=!1}else ii!==null&&(Eu(ii),ii=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?$t===0&&($t=3):Au())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return Es(),fu(n,i),n===null&&wo(i.stateNode.containerInfo),dn(i),null;case 10:return Bc(i.type._context),dn(i),null;case 17:return Rn(i.type)&&Aa(),dn(i),null;case 19:if(Dt(Ot),g=i.memoizedState,g===null)return dn(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)Fo(g,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Oa(n),E!==null){for(i.flags|=128,Fo(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}n=n.sibling}g.tail!==null&&De()>bs&&(i.flags|=128,c=!0,Fo(g,!1),i.lanes=4194304)}else{if(!c)if(n=Oa(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Fo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ft)return dn(i),null}else 2*De()-g.renderingStartTime>bs&&o!==1073741824&&(i.flags|=128,c=!0,Fo(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(o=g.last,o!==null?o.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=De(),i.sibling=null,o=Ot.current,Lt(Ot,c?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return Tu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function f0(n,i){switch(Ic(i),i.tag){case 1:return Rn(i.type)&&Aa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),Dt(bn),Dt(cn),qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Wc(i),null;case 13:if(Dt(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Dt(Ot),null;case 4:return Es(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Xa=!1,fn=!1,h0=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Bt(n,i,c)}else o.current=null}function hu(n,i,o){try{o()}catch(c){Bt(n,i,c)}}var Xh=!1;function p0(n,i){if(Tc=fa,n=wf(),vc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,I=-1,z=-1,ne=0,ge=0,ye=n,me=null;t:for(;;){for(var Ne;ye!==o||f!==0&&ye.nodeType!==3||(I=E+f),ye!==g||c!==0&&ye.nodeType!==3||(z=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)me=ye,ye=Ne;for(;;){if(ye===n)break t;if(me===o&&++ne===f&&(I=E),me===g&&++ge===c&&(z=E),(Ne=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ne}o=I===-1||z===-1?null:{start:I,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ac={focusedElem:n,selectionRange:o},fa=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,jt=ke.memoizedState,K=i.stateNode,V=K.getSnapshotBeforeUpdate(i.elementType===i.type?He:ri(i.type,He),jt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Bt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return ke=Xh,Xh=!1,ke}function Oo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&hu(i,o,g)}f=f.next}while(f!==c)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function pu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function qh(n){var i=n.alternate;i!==null&&(n.alternate=null,qh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[vi],delete i[Ao],delete i[Pc],delete i[Kv],delete i[Qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yh(n){return n.tag===5||n.tag===3||n.tag===4}function $h(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wa));else if(c!==4&&(n=n.child,n!==null))for(mu(n,i,o),n=n.sibling;n!==null;)mu(n,i,o),n=n.sibling}function gu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,o),n=n.sibling;n!==null;)gu(n,i,o),n=n.sibling}var rn=null,si=!1;function cr(n,i,o){for(o=o.child;o!==null;)Kh(n,i,o),o=o.sibling}function Kh(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Tn,o)}catch{}switch(o.tag){case 5:fn||Ts(o,i);case 6:var c=rn,f=si;rn=null,cr(n,i,o),rn=c,si=f,rn!==null&&(si?(n=rn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(si?(n=rn,o=o.stateNode,n.nodeType===8?Cc(n.parentNode,o):n.nodeType===1&&Cc(n,o),mo(n)):Cc(rn,o.stateNode));break;case 4:c=rn,f=si,rn=o.stateNode.containerInfo,si=!0,cr(n,i,o),rn=c,si=f;break;case 0:case 11:case 14:case 15:if(!fn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&hu(o,i,E),f=f.next}while(f!==c)}cr(n,i,o);break;case 1:if(!fn&&(Ts(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Bt(o,i,I)}cr(n,i,o);break;case 21:cr(n,i,o);break;case 22:o.mode&1?(fn=(c=fn)||o.memoizedState!==null,cr(n,i,o),fn=c):cr(n,i,o);break;default:cr(n,i,o)}}function Qh(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new h0),i.forEach(function(c){var f=E0.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function oi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:rn=I.stateNode,si=!1;break e;case 3:rn=I.stateNode.containerInfo,si=!0;break e;case 4:rn=I.stateNode.containerInfo,si=!0;break e}I=I.return}if(rn===null)throw Error(t(160));Kh(g,E,f),rn=null,si=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ne){Bt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zh(i,n),i=i.sibling}function Zh(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),yi(n),c&4){try{Oo(3,n,n.return),qa(3,n)}catch(He){Bt(n,n.return,He)}try{Oo(5,n,n.return)}catch(He){Bt(n,n.return,He)}}break;case 1:oi(i,n),yi(n),c&512&&o!==null&&Ts(o,o.return);break;case 5:if(oi(i,n),yi(n),c&512&&o!==null&&Ts(o,o.return),n.flags&32){var f=n.stateNode;try{ve(f,"")}catch(He){Bt(n,n.return,He)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,E=o!==null?o.memoizedProps:g,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Ie(f,g),xt(I,E);var ne=xt(I,g);for(E=0;E<z.length;E+=2){var ge=z[E],ye=z[E+1];ge==="style"?Ye(f,ye):ge==="dangerouslySetInnerHTML"?at(f,ye):ge==="children"?ve(f,ye):R(f,ge,ye,ne)}switch(I){case"input":tt(f,g);break;case"textarea":Me(f,g);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Ne=g.value;Ne!=null?te(f,!!g.multiple,Ne,!1):me!==!!g.multiple&&(g.defaultValue!=null?te(f,!!g.multiple,g.defaultValue,!0):te(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ao]=g}catch(He){Bt(n,n.return,He)}}break;case 6:if(oi(i,n),yi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(He){Bt(n,n.return,He)}}break;case 3:if(oi(i,n),yi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(He){Bt(n,n.return,He)}break;case 4:oi(i,n),yi(n);break;case 13:oi(i,n),yi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(xu=De())),c&4&&Qh(n);break;case 22:if(ge=o!==null&&o.memoizedState!==null,n.mode&1?(fn=(ne=fn)||ge,oi(i,n),fn=ne):oi(i,n),yi(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!ge&&(n.mode&1)!==0)for(Ue=n,ge=n.child;ge!==null;){for(ye=Ue=ge;Ue!==null;){switch(me=Ue,Ne=me.child,me.tag){case 0:case 11:case 14:case 15:Oo(4,me,me.return);break;case 1:Ts(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){c=me,o=me.return;try{i=c,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){Bt(c,o,He)}}break;case 5:Ts(me,me.return);break;case 22:if(me.memoizedState!==null){tp(ye);continue}}Ne!==null?(Ne.return=me,Ue=Ne):tp(ye)}ge=ge.sibling}e:for(ge=null,ye=n;;){if(ye.tag===5){if(ge===null){ge=ye;try{f=ye.stateNode,ne?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ye.stateNode,z=ye.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=it("display",E))}catch(He){Bt(n,n.return,He)}}}else if(ye.tag===6){if(ge===null)try{ye.stateNode.nodeValue=ne?"":ye.memoizedProps}catch(He){Bt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ge===ye&&(ge=null),ye=ye.return}ge===ye&&(ge=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,n),yi(n),c&4&&Qh(n);break;case 21:break;default:oi(i,n),yi(n)}}function yi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Yh(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ve(f,""),c.flags&=-33);var g=$h(n);gu(n,g,f);break;case 3:case 4:var E=c.stateNode.containerInfo,I=$h(n);mu(n,I,E);break;default:throw Error(t(161))}}catch(z){Bt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function m0(n,i,o){Ue=n,Jh(n)}function Jh(n,i,o){for(var c=(n.mode&1)!==0;Ue!==null;){var f=Ue,g=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||Xa;if(!E){var I=f.alternate,z=I!==null&&I.memoizedState!==null||fn;I=Xa;var ne=fn;if(Xa=E,(fn=z)&&!ne)for(Ue=f;Ue!==null;)E=Ue,z=E.child,E.tag===22&&E.memoizedState!==null?np(f):z!==null?(z.return=E,Ue=z):np(f);for(;g!==null;)Ue=g,Jh(g),g=g.sibling;Ue=f,Xa=I,fn=ne}ep(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Ue=g):ep(n)}}function ep(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||qa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!fn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&th(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}th(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var ge=ne.memoizedState;if(ge!==null){var ye=ge.dehydrated;ye!==null&&mo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||i.flags&512&&pu(i)}catch(me){Bt(i,i.return,me)}}if(i===n){Ue=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function tp(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function np(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(z){Bt(i,o,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){Bt(i,f,z)}}var g=i.return;try{pu(i)}catch(z){Bt(i,g,z)}break;case 5:var E=i.return;try{pu(i)}catch(z){Bt(i,E,z)}}}catch(z){Bt(i,i.return,z)}if(i===n){Ue=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ue=I;break}Ue=i.return}}var g0=Math.ceil,Ya=N.ReactCurrentDispatcher,vu=N.ReactCurrentOwner,Qn=N.ReactCurrentBatchConfig,yt=0,en=null,Wt=null,sn=0,Vn=0,As=rr(0),$t=0,ko=null,kr=0,$a=0,_u=0,zo=null,Pn=null,xu=0,bs=1/0,Oi=null,Ka=!1,yu=null,ur=null,Qa=!1,dr=null,Za=0,Bo=0,Su=null,Ja=-1,el=0;function Mn(){return(yt&6)!==0?De():Ja!==-1?Ja:Ja=De()}function fr(n){return(n.mode&1)===0?1:(yt&2)!==0&&sn!==0?sn&-sn:Jv.transition!==null?(el===0&&(el=ca()),el):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:rf(n.type)),n)}function ai(n,i,o,c){if(50<Bo)throw Bo=0,Su=null,Error(t(185));co(n,o,c),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&($a|=o),$t===4&&hr(n,sn)),Ln(n,c),o===1&&yt===0&&(i.mode&1)===0&&(bs=De()+500,Ra&&or()))}function Ln(n,i){var o=n.callbackNode;An(n,i);var c=Xn(n,n===en?sn:0);if(c===0)o!==null&&Le(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Le(o),i===1)n.tag===0?Zv(rp.bind(null,n)):Vf(rp.bind(null,n)),Yv(function(){(yt&6)===0&&or()}),o=null;else{switch($d(c)){case 1:o=rt;break;case 4:o=ot;break;case 16:o=Pt;break;case 536870912:o=Vt;break;default:o=Pt}o=fp(o,ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function ip(n,i){if(Ja=-1,el=0,(yt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Rs()&&n.callbackNode!==o)return null;var c=Xn(n,n===en?sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=tl(n,c);else{i=c;var f=yt;yt|=2;var g=op();(en!==n||sn!==i)&&(Oi=null,bs=De()+500,Br(n,i));do try{x0();break}catch(I){sp(n,I)}while(!0);zc(),Ya.current=g,yt=f,Wt!==null?i=0:(en=null,sn=0,i=$t)}if(i!==0){if(i===2&&(f=Pr(n),f!==0&&(c=f,i=Mu(n,f))),i===1)throw o=ko,Br(n,0),hr(n,c),Ln(n,De()),o;if(i===6)hr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!v0(f)&&(i=tl(n,c),i===2&&(g=Pr(n),g!==0&&(c=g,i=Mu(n,g))),i===1))throw o=ko,Br(n,0),hr(n,c),Ln(n,De()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Pn,Oi);break;case 3:if(hr(n,c),(c&130023424)===c&&(i=xu+500-De(),10<i)){if(Xn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Mn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Rc(Hr.bind(null,n,Pn,Oi),i);break}Hr(n,Pn,Oi);break;case 4:if(hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var E=31-yn(c);g=1<<E,E=i[E],E>f&&(f=E),c&=~g}if(c=f,c=De()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*g0(c/1960))-c,10<c){n.timeoutHandle=Rc(Hr.bind(null,n,Pn,Oi),c);break}Hr(n,Pn,Oi);break;case 5:Hr(n,Pn,Oi);break;default:throw Error(t(329))}}}return Ln(n,De()),n.callbackNode===o?ip.bind(null,n):null}function Mu(n,i){var o=zo;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=tl(n,i),n!==2&&(i=Pn,Pn=o,i!==null&&Eu(i)),n}function Eu(n){Pn===null?Pn=n:Pn.push.apply(Pn,n)}function v0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!ni(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~_u,i&=~$a,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-yn(i),c=1<<o;n[o]=-1,i&=~c}}function rp(n){if((yt&6)!==0)throw Error(t(327));Rs();var i=Xn(n,0);if((i&1)===0)return Ln(n,De()),null;var o=tl(n,i);if(n.tag!==0&&o===2){var c=Pr(n);c!==0&&(i=c,o=Mu(n,c))}if(o===1)throw o=ko,Br(n,0),hr(n,i),Ln(n,De()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Pn,Oi),Ln(n,De()),null}function wu(n,i){var o=yt;yt|=1;try{return n(i)}finally{yt=o,yt===0&&(bs=De()+500,Ra&&or())}}function zr(n){dr!==null&&dr.tag===0&&(yt&6)===0&&Rs();var i=yt;yt|=1;var o=Qn.transition,c=Rt;try{if(Qn.transition=null,Rt=1,n)return n()}finally{Rt=c,Qn.transition=o,yt=i,(yt&6)===0&&or()}}function Tu(){Vn=As.current,Dt(As)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,qv(o)),Wt!==null)for(o=Wt.return;o!==null;){var c=o;switch(Ic(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Aa();break;case 3:Es(),Dt(bn),Dt(cn),qc();break;case 5:Wc(c);break;case 4:Es();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:Bc(c.type._context);break;case 22:case 23:Tu()}o=o.return}if(en=n,Wt=n=pr(n.current,null),sn=Vn=i,$t=0,ko=null,_u=$a=kr=0,Pn=zo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var E=g.next;g.next=f,c.next=E}o.pending=c}Ur=null}return n}function sp(n,i){do{var o=Wt;try{if(zc(),ka.current=Ga,za){for(var c=kt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}za=!1}if(Or=0,Jt=Yt=kt=null,No=!1,Do=0,vu.current=null,o===null||o.return===null){$t=1,ko=i,Wt=null;break}e:{var g=n,E=o.return,I=o,z=i;if(i=sn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,ge=I,ye=ge.tag;if((ge.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ne=Ph(E);if(Ne!==null){Ne.flags&=-257,Lh(Ne,E,I,g,i),Ne.mode&1&&Ch(g,ne,i),i=Ne,z=ne;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(z),i.updateQueue=He}else ke.add(z);break e}else{if((i&1)===0){Ch(g,ne,i),Au();break e}z=Error(t(426))}}else if(Ft&&I.mode&1){var jt=Ph(E);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Lh(jt,E,I,g,i),Oc(ws(z,I));break e}}g=z=ws(z,I),$t!==4&&($t=2),zo===null?zo=[g]:zo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var K=bh(g,z,i);eh(g,K);break e;case 1:I=z;var V=g.type,J=g.stateNode;if((g.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ur===null||!ur.has(J)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=Rh(g,I,i);eh(g,we);break e}}g=g.return}while(g!==null)}lp(o)}catch(je){i=je,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function op(){var n=Ya.current;return Ya.current=Ga,n===null?Ga:n}function Au(){($t===0||$t===3||$t===2)&&($t=4),en===null||(kr&268435455)===0&&($a&268435455)===0||hr(en,sn)}function tl(n,i){var o=yt;yt|=2;var c=op();(en!==n||sn!==i)&&(Oi=null,Br(n,i));do try{_0();break}catch(f){sp(n,f)}while(!0);if(zc(),yt=o,Ya.current=c,Wt!==null)throw Error(t(261));return en=null,sn=0,$t}function _0(){for(;Wt!==null;)ap(Wt)}function x0(){for(;Wt!==null&&!Xe();)ap(Wt)}function ap(n){var i=dp(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?lp(n):Wt=i,vu.current=null}function lp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=d0(o,i,Vn),o!==null){Wt=o;return}}else{if(o=f0(o,i),o!==null){o.flags&=32767,Wt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);$t===0&&($t=5)}function Hr(n,i,o){var c=Rt,f=Qn.transition;try{Qn.transition=null,Rt=1,y0(n,i,o,c)}finally{Qn.transition=f,Rt=c}return null}function y0(n,i,o,c){do Rs();while(dr!==null);if((yt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(ev(n,g),n===en&&(Wt=en=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qa||(Qa=!0,fp(Pt,function(){return Rs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var E=Rt;Rt=1;var I=yt;yt|=4,vu.current=null,p0(n,o),Zh(o,n),Bv(Ac),fa=!!Tc,Ac=Tc=null,n.current=o,m0(o),et(),yt=I,Rt=E,Qn.transition=g}else n.current=o;if(Qa&&(Qa=!1,dr=n,Za=f),g=n.pendingLanes,g===0&&(ur=null),ut(o.stateNode),Ln(n,De()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ka)throw Ka=!1,n=yu,yu=null,n;return(Za&1)!==0&&n.tag!==0&&Rs(),g=n.pendingLanes,(g&1)!==0?n===Su?Bo++:(Bo=0,Su=n):Bo=0,or(),null}function Rs(){if(dr!==null){var n=$d(Za),i=Qn.transition,o=Rt;try{if(Qn.transition=null,Rt=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,Za=0,(yt&6)!==0)throw Error(t(331));var f=yt;for(yt|=4,Ue=n.current;Ue!==null;){var g=Ue,E=g.child;if((Ue.flags&16)!==0){var I=g.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ne=I[z];for(Ue=ne;Ue!==null;){var ge=Ue;switch(ge.tag){case 0:case 11:case 15:Oo(8,ge,g)}var ye=ge.child;if(ye!==null)ye.return=ge,Ue=ye;else for(;Ue!==null;){ge=Ue;var me=ge.sibling,Ne=ge.return;if(qh(ge),ge===ne){Ue=null;break}if(me!==null){me.return=Ne,Ue=me;break}Ue=Ne}}}var ke=g.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var jt=He.sibling;He.sibling=null,He=jt}while(He!==null)}}Ue=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ue=E;else e:for(;Ue!==null;){if(g=Ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Oo(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ue=K;break e}Ue=g.return}}var V=n.current;for(Ue=V;Ue!==null;){E=Ue;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Ue=J;else e:for(E=V;Ue!==null;){if(I=Ue,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:qa(9,I)}}catch(je){Bt(I,I.return,je)}if(I===E){Ue=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Ue=we;break e}Ue=I.return}}if(yt=f,or(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Tn,n)}catch{}c=!0}return c}finally{Rt=o,Qn.transition=i}}return!1}function cp(n,i,o){i=ws(o,i),i=bh(n,i,1),n=lr(n,i,1),i=Mn(),n!==null&&(co(n,1,i),Ln(n,i))}function Bt(n,i,o){if(n.tag===3)cp(n,n,o);else for(;i!==null;){if(i.tag===3){cp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c))){n=ws(o,n),n=Rh(i,n,1),i=lr(i,n,1),n=Mn(),i!==null&&(co(i,1,n),Ln(i,n));break}}i=i.return}}function S0(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,en===n&&(sn&o)===o&&($t===4||$t===3&&(sn&130023424)===sn&&500>De()-xu?Br(n,0):_u|=o),Ln(n,i)}function up(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var o=Mn();n=Ii(n,i),n!==null&&(co(n,i,o),Ln(n,o))}function M0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),up(n,o)}function E0(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),up(n,o)}var dp;dp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Cn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Cn=!1,u0(n,i,o);Cn=(n.flags&131072)!==0}else Cn=!1,Ft&&(i.flags&1048576)!==0&&jf(i,Pa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wa(n,i),n=i.pendingProps;var f=gs(i,cn.current);Ms(i,o),f=Kc(null,i,c,n,f,o);var g=Qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(g=!0,ba(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Vc(i),f.updater=Va,i.stateNode=f,f._reactInternals=i,iu(i,c,n,o),i=au(null,i,c,!0,g,o)):(i.tag=0,Ft&&g&&Dc(i),Sn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Wa(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=T0(c),n=ri(c,n),f){case 0:i=ou(null,i,c,n,o);break e;case 1:i=Oh(null,i,c,n,o);break e;case 11:i=Nh(null,i,c,n,o);break e;case 14:i=Dh(null,i,c,ri(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),ou(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),Oh(n,i,c,f,o);case 3:e:{if(kh(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Jf(n,i),Fa(i,c,null,o);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=ws(Error(t(423)),i),i=zh(n,i,c,o,f);break e}else if(c!==f){f=ws(Error(t(424)),i),i=zh(n,i,c,o,f);break e}else for(Gn=ir(i.stateNode.containerInfo.firstChild),Hn=i,Ft=!0,ii=null,o=Qf(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),c===f){i=Fi(n,i,o);break e}Sn(n,i,c,o)}i=i.child}return i;case 5:return nh(i),n===null&&Fc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,E=f.children,bc(c,f)?E=null:g!==null&&bc(c,g)&&(i.flags|=32),Fh(n,i),Sn(n,i,E,o),i.child;case 6:return n===null&&Fc(i),null;case 13:return Bh(n,i,o);case 4:return jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,o):Sn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),Nh(n,i,c,f,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,E=f.value,Lt(Da,c._currentValue),c._currentValue=E,g!==null)if(ni(g.value,E)){if(g.children===f.children&&!bn.current){i=Fi(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(g.tag===1){z=Ui(-1,o&-o),z.tag=2;var ne=g.updateQueue;if(ne!==null){ne=ne.shared;var ge=ne.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),ne.pending=z}}g.lanes|=o,z=g.alternate,z!==null&&(z.lanes|=o),Hc(g.return,o,i),I.lanes|=o;break}z=z.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Hc(E,o,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Sn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ms(i,o),f=$n(f),c=c(f),i.flags|=1,Sn(n,i,c,o),i.child;case 14:return c=i.type,f=ri(c,i.pendingProps),f=ri(c.type,f),Dh(n,i,c,f,o);case 15:return Ih(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),Wa(n,i),i.tag=1,Rn(c)?(n=!0,ba(i)):n=!1,Ms(i,o),Th(i,c,f),iu(i,c,f,o),au(null,i,c,!0,n,o);case 19:return Gh(n,i,o);case 22:return Uh(n,i,o)}throw Error(t(156,i.tag))};function fp(n,i){return re(n,i)}function w0(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,o,c){return new w0(n,i,o,c)}function bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T0(n){if(typeof n=="function")return bu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===ie)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=Zn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function nl(n,i,o,c,f,g){var E=2;if(c=n,typeof n=="function")bu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Gr(o.children,f,g,i);case de:E=8,f|=8;break;case pe:return n=Zn(12,o,i,f|2),n.elementType=pe,n.lanes=g,n;case fe:return n=Zn(13,o,i,f),n.elementType=fe,n.lanes=g,n;case H:return n=Zn(19,o,i,f),n.elementType=H,n.lanes=g,n;case ee:return il(o,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:E=10;break e;case F:E=9;break e;case ce:E=11;break e;case ie:E=14;break e;case j:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(E,o,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function Gr(n,i,o,c){return n=Zn(7,n,c,i),n.lanes=o,n}function il(n,i,o,c){return n=Zn(22,n,c,i),n.elementType=ee,n.lanes=o,n.stateNode={isHidden:!1},n}function Ru(n,i,o){return n=Zn(6,n,null,i),n.lanes=o,n}function Cu(n,i,o){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function A0(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=os(0),this.expirationTimes=os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Pu(n,i,o,c,f,g,E,I,z){return n=new A0(n,i,o,I,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Zn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(g),n}function b0(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function hp(n){if(!n)return sr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return Hf(n,o,i)}return i}function pp(n,i,o,c,f,g,E,I,z){return n=Pu(o,c,!0,n,f,g,E,I,z),n.context=hp(null),o=n.current,c=Mn(),f=fr(o),g=Ui(c,f),g.callback=i??null,lr(o,g,f),n.current.lanes=f,co(n,f,c),Ln(n,c),n}function rl(n,i,o,c){var f=i.current,g=Mn(),E=fr(f);return o=hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(g,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=lr(f,i,E),n!==null&&(ai(n,f,E,g),Ua(n,f,E)),E}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Lu(n,i){mp(n,i),(n=n.alternate)&&mp(n,i)}function R0(){return null}var gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nu(n){this._internalRoot=n}ol.prototype.render=Nu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},ol.prototype.unmount=Nu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){rl(null,n,null,null)}),i[Pi]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=Zd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&tf(n)}};function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vp(){}function C0(n,i,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ne=sl(E);g.call(ne)}}var E=pp(i,c,n,0,null,!1,!1,"",vp);return n._reactRootContainer=E,n[Pi]=E.current,wo(n.nodeType===8?n.parentNode:n),zr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ne=sl(z);I.call(ne)}}var z=Pu(n,0,!1,null,null,!1,!1,"",vp);return n._reactRootContainer=z,n[Pi]=z.current,wo(n.nodeType===8?n.parentNode:n),zr(function(){rl(i,z,o,c)}),z}function ll(n,i,o,c,f){var g=o._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var I=f;f=function(){var z=sl(E);I.call(z)}}rl(i,E,n,f)}else E=C0(o,i,n,f,c);return sl(E)}Kd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=zt(i.pendingLanes);o!==0&&(ic(i,o|1),Ln(i,De()),(yt&6)===0&&(bs=De()+500,or()))}break;case 13:zr(function(){var c=Ii(n,1);if(c!==null){var f=Mn();ai(c,n,1,f)}}),Lu(n,1)}},rc=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var o=Mn();ai(i,n,134217728,o)}Lu(n,134217728)}},Qd=function(n){if(n.tag===13){var i=fr(n),o=Ii(n,i);if(o!==null){var c=Mn();ai(o,n,i,c)}Lu(n,i)}},Zd=function(){return Rt},Jd=function(n,i){var o=Rt;try{return Rt=n,i()}finally{Rt=o}},Tt=function(n,i,o){switch(i){case"input":if(tt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Ta(c);if(!f)throw Error(t(90));q(c),tt(c,f)}}}break;case"textarea":Me(n,o);break;case"select":i=o.value,i!=null&&te(n,!!o.multiple,i,!1)}},St=wu,bt=zr;var P0={usingClientEntryPoint:!1,Events:[bo,ps,Ta,Ge,Ke,wu]},Ho={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=se(n),n===null?null:n.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Tn=cl.inject(L0),vt=cl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0,Nn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(i))throw Error(t(200));return b0(n,i,null,o)},Nn.createRoot=function(n,i){if(!Du(n))throw Error(t(299));var o=!1,c="",f=gp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Pu(n,1,!1,null,null,o,!1,c,f),n[Pi]=i.current,wo(n.nodeType===8?n.parentNode:n),new Nu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=se(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return zr(n)},Nn.hydrate=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!0,o)},Nn.hydrateRoot=function(n,i,o){if(!Du(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",E=gp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=pp(i,null,n,1,o??null,f,!1,g,E),n[Pi]=i.current,wo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ol(i)},Nn.render=function(n,i,o){if(!al(i))throw Error(t(200));return ll(null,n,i,!1,o)},Nn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Nn.unstable_batchedUpdates=wu,Nn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!al(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,o,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Tp;function z0(){if(Tp)return Fu.exports;Tp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fu.exports=k0(),Fu.exports}var Ap;function B0(){if(Ap)return ul;Ap=1;var r=z0();return ul.createRoot=r.createRoot,ul.hydrateRoot=r.hydrateRoot,ul}var H0=B0();const G0=cg(H0),zd=Pe.createContext({path:"/",navigate:()=>{}});function V0({children:r}){const[e,t]=Pe.useState(()=>window.location.pathname);Pe.useEffect(()=>{const a=()=>t(window.location.pathname);return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]);const s=Pe.useCallback((a,{replace:l=!1}={})=>{a!==window.location.pathname&&(window.history[l?"replaceState":"pushState"]({},"",a),t(a),window.scrollTo(0,0))},[]);return p.jsx(zd.Provider,{value:{path:e,navigate:s},children:r})}function j0(){return Pe.useContext(zd)}function W0(){return Pe.useContext(zd).path}function Bd({to:r,children:e,onClick:t,...s}){const{navigate:a}=j0(),l=r&&r.startsWith("/")&&!r.startsWith("//"),d=u=>{t==null||t(u),l&&(u.defaultPrevented||u.button!==0||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||(u.preventDefault(),a(r)))};return p.jsx("a",{href:r,onClick:d,...s,children:e})}const Ti="ykshetty.design@gmail.com",Zr={name:"Yogesh Shetty",logo:"/logos/header_logo.svg",tagline:"Senior Product Designer. I practice systems thinking — looking past the apparent problem to the root cause, then designing the simplest fix the system already supports."},ug=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],Vo={askLabel:"What the client asked for",brief:"Make the button bigger.",replyLabel:"What the system revealed →",replyMain:"Can't tap with gloves on — so I used the scanner they had.",replyFoot:"Warehouse sorting — solved the system, not the screen."},Hl=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",href:"/case-studies/swiftsort",brief:"Make the button bigger.",card:"Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",cover:null,insight:"Delete touch — the scanner's already on their hand.",problem:"Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.",solution:"Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${Ti}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",brief:"Wall off the whole flow.",card:"A 2-hour banking task cut to 60 seconds of self-service.",cover:null,insight:"Gate only the destructive action.",problem:"Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.",solution:"Added authentication only where the real risk was — browsing stays free, blocking takes seconds.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~90%",label:"Calls deflected"}],mailto:`mailto:${Ti}?subject=Self-service%20cards`,seed:{x:.96,y:.32,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",brief:"Rebuild it screen by screen.",card:"Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.",cover:null,insight:"Map the system first, then design the shared frame.",problem:"A legacy desktop terminal chained managers to one location and took weeks to learn.",solution:"Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${Ti}?subject=Post-office%20portal`,seed:{x:.02,y:.62,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",brief:"Sort by document type.",card:"A complex document archive made self-service — across all three platforms.",cover:null,insight:"Organise by life event — the client's mental model.",problem:"Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.",solution:"Reorganised around life events — the way clients actually think — so they self-serve.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${Ti}?subject=Postbox`,seed:{x:.98,y:.92,r:-1.6}}],X0=[{id:"alignment",num:"01 · THE SEED",title:"Alignment",callout:{label:"◎ Find the overlap",text:"The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them."},human:["User research","Read the data","Find the real need"],ai:["Cluster the notes","Surface patterns"],desc:"A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant."},{id:"foundation",num:"02 · THE ROOTS",title:"Foundation",callout:{label:"↺ Find the real problem",text:"Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving."},human:["Problem statement","In / out of scope","Feasibility check"],ai:["Edge-case list","Flag tech limits"],desc:"Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up."},{id:"explore",num:"03 · THE SPROUT",title:"Explore",callout:{label:"⚑ Try many, keep one",text:"I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong."},human:["Explore directions","Prototype","Usability testing"],ai:["Mockup variants","First-draft copy"],desc:"First shoots test the air in every direction. The strongest one keeps growing."},{id:"scale",num:"04 · THE CANOPY",title:"Scale",callout:{label:"⧉ Build it once",text:"I turn each decision into a design system, so the team can build the rest without me in the room."},human:["Craft & visual","Design system","Component review"],ai:["Token propagation","Doc automation"],desc:"Branches spread and repeat the same pattern. The system carries it across every limb."},{id:"loop",num:"05 · THE HARVEST",title:"Loop",callout:{label:"⟳ Learn from real use",text:"Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief."},human:["Track metrics","Watch real sessions","Feed the next brief"],ai:["Error & QA sweep","Analytics → insight"],desc:"Fruit ripens and falls, dissolving back into soil — feeding the next brief."}],q0=[{id:"tokenmap",logo:"/logos/tokenmap.svg",alt:"Token Map",logoStyle:{height:20,width:126},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes."},{id:"intent",logo:"/logos/intent.svg",alt:"Intent",logoStyle:{height:26,width:82},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically."},{id:"focal",logo:"/logos/focalai.svg",alt:"Focal AI",logoStyle:{height:18,width:99},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second."}],Si={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"/assets/portrait.jpg",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},Sd=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],Y0="https://linkedin.com/in/ykshetty/details/recommendations/",Ys={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:Ti,href:`mailto:${Ti}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},Md="ys-theme",dg=Pe.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function $0(){if(typeof window>"u")return"light";try{const r=window.localStorage.getItem(Md);if(r==="light"||r==="dark")return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function K0({children:r}){const[e,t]=Pe.useState($0);Pe.useEffect(()=>{const d=document.documentElement;d.setAttribute("data-theme",e),d.style.colorScheme=e;try{window.localStorage.setItem(Md,e)}catch{}},[e]),Pe.useEffect(()=>{if(!window.matchMedia)return;const d=window.matchMedia("(prefers-color-scheme: dark)"),u=h=>{let m=!1;try{m=!!window.localStorage.getItem(Md)}catch{m=!1}m||t(h.matches?"dark":"light")};return d.addEventListener("change",u),()=>d.removeEventListener("change",u)},[]);const s=Pe.useCallback(d=>{t(u=>d==="light"||d==="dark"?d:u)},[]),a=Pe.useCallback(()=>{t(d=>d==="dark"?"light":"dark")},[]),l=Pe.useMemo(()=>({theme:e,setTheme:s,toggleTheme:a}),[e,s,a]);return p.jsx(dg.Provider,{value:l,children:r})}function Hd(){return Pe.useContext(dg)}const bp={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function Q0(){const[r,e]=Pe.useState(!1),{theme:t,toggleTheme:s}=Hd(),a=Pe.useCallback(()=>e(d=>!d),[]),l=Pe.useCallback(()=>e(!1),[]);return p.jsx("header",{className:r?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)"},children:p.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:p.jsxs("a",{href:"#top",style:{display:"flex",alignItems:"center",gap:10,height:20},children:[p.jsx("img",{src:Zr.logo,alt:Zr.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),p.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Zr.name})]})}),p.jsx("button",{className:"hamburger",onClick:a,"aria-label":"Menu","aria-expanded":r,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),p.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[ug.map(d=>p.jsx("a",{href:d.href,onClick:l,className:"nav-link",style:bp,children:d.label},d.href)),p.jsx("a",{href:`mailto:${Ti}`,onClick:l,className:"cta-pill",style:{...bp,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),p.jsx("button",{type:"button",onClick:s,title:t==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":t==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",fontSize:14,color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:t==="dark"?"☀️":"🌙"})]})]})})}const Z0=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function J0(){const[r,e]=Pe.useState(0),t=Pe.useRef([]),s=Pe.useRef(null),a=Pe.useCallback(()=>{t.current.forEach(d=>clearTimeout(d)),t.current=[],s.current&&(cancelAnimationFrame(s.current),s.current=null)},[]),l=Pe.useCallback(()=>{a(),e(0),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>{Z0.forEach(([d,u])=>{t.current.push(setTimeout(()=>e(d),u))})})})},[a]);return Pe.useEffect(()=>(l(),a),[l,a]),{step:r,replay:l}}function e_(r,e){Pe.useEffect(()=>{const t=r.current,s=e.current,a=s?Array.from(s.querySelectorAll("[data-drift]")):[],l=x=>Math.max(0,Math.min(1,x)),d=()=>{const x=window.innerHeight||1,D=l(window.scrollY/x),R=1-D*.28,N=1-D*.65;t&&(t.style.transform=`translateX(-50%) scale(${R.toFixed(3)})`,t.style.opacity=N.toFixed(3))};let u=1,h=1,m=null,v=!1,_=window.scrollY,S=performance.now();const M=()=>{u+=(h-u)*.12,h+=(1-h)*.04,a.forEach(x=>{x.getAnimations&&x.getAnimations().forEach(D=>{D.playbackRate=u})}),Math.abs(u-1)>.02||Math.abs(h-1)>.02?m=requestAnimationFrame(M):(u=1,h=1,a.forEach(x=>{x.getAnimations&&x.getAnimations().forEach(D=>{D.playbackRate=1})}),v=!1)},w=()=>{v||!a.length||(v=!0,m=requestAnimationFrame(M))},A=()=>{const x=performance.now(),D=Math.abs(window.scrollY-_),R=Math.max(16,x-S),N=D/R;h=Math.min(9,1+N*20),_=window.scrollY,S=x,w()},y=()=>{d(),A()};return window.addEventListener("scroll",y,{passive:!0}),d(),()=>{window.removeEventListener("scroll",y),m&&cancelAnimationFrame(m)}},[r,e])}const t_=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],Rp=()=>p.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]});function n_(){const{step:r,replay:e}=J0(),t=Pe.useRef(null),s=Pe.useRef(null),a=Pe.useRef(null);return e_(t,s),p.jsx("div",{style:{position:"relative",height:"200vh"},children:p.jsxs("section",{className:"hero-section","data-hero-step":r,style:{position:"sticky",top:0,zIndex:1,height:"100vh",overflow:"hidden",background:"var(--bg-page)"},children:[p.jsx("div",{ref:s,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:t_.map((l,d)=>p.jsx("div",{"data-drift":"",style:{position:"absolute",width:l.w,height:l.w,maxWidth:l.maxW,maxHeight:l.maxW,top:l.top,bottom:l.bottom,left:l.left,right:l.right,borderRadius:"50%",background:`radial-gradient(circle, ${l.color}, transparent 70%)`,filter:`blur(${l.blur}px)`,animation:l.anim,willChange:"transform"}},d))}),p.jsxs("div",{ref:t,className:"hero-cluster",children:[p.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:Vo.askLabel}),p.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[p.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:p.jsx(Rp,{})}),p.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:p.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:Vo.brief})})]}),p.jsxs("div",{style:{position:"relative",minHeight:72},children:[p.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[p.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),p.jsx(Rp,{})]}),p.jsxs("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:[p.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12},children:Vo.replyLabel}),p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(21px,2.9vw,32px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em"},children:Vo.replyMain}),p.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.5,color:"var(--text-muted)",marginTop:12},children:Vo.replyFoot})]})]}),p.jsxs("div",{ref:a,className:"hero-post",style:{marginTop:"clamp(40px,6vw,64px)"},children:[p.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.65,color:"var(--text-body)",margin:"0 0 24px",textAlign:"center"},children:Zr.tagline}),p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:22,alignItems:"center",fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,justifyContent:"center"},children:[p.jsx("a",{href:"#work",className:"text-link text-link--primary",style:{paddingBottom:3},children:"Case studies ↓"}),p.jsx("a",{href:`mailto:${Ti}`,className:"text-link text-link--muted",children:"Say hello"}),p.jsx("span",{onClick:e,role:"button",tabIndex:0,onKeyDown:l=>(l.key==="Enter"||l.key===" ")&&e(),className:"replay-btn",style:{cursor:"pointer",userSelect:"none",fontSize:12,color:"var(--text-muted)"},children:"↻ replay"})]})]})]})]})})}const fg="#7C5CFC",i_="0 2px 12px -4px rgba(0,0,0,.08)",r_=`0 0 0 1px ${fg}, 0 8px 24px -6px rgba(124,92,252,.18)`;function s_(r,e){const{boardRef:t,scatterRef:s,targetRef:a,emptyRef:l,detailRef:d}=r,[u,h]=Pe.useState(null),m=Pe.useRef(null),v=Pe.useRef(()=>{}),_=Pe.useRef([]),S=Pe.useMemo(()=>e.map((A,y)=>x=>{_.current[y]=x}),[e]);Pe.useEffect(()=>{const A=t.current,y=s.current,x=a.current;if(!A||!y||!x)return;const D=_.current;if(D.length<e.length||D.some(ue=>!ue))return;const R=e.map(ue=>({id:ue.id,seed:ue.seed}));let N=null,X,k,O=-1,de=.62,pe=null,T=!1,F=!1;const ce=()=>l.current,fe=()=>d.current,H=()=>{const ue=y.getBoundingClientRect(),oe=A.getBoundingClientRect(),Re=Math.min(240,Math.max(170,(ue.width||300)-80)),ze=ue.left-oe.left+14,q=ue.right-oe.left-14,mt=ue.top-oe.top+44,Fe=ue.bottom-oe.top-20;N={minX:ze,maxX:q-Re-14,minY:mt,maxY:Math.max(mt,Fe-150)};const qe=Math.max(0,N.maxX-N.minX),Ie=Math.max(0,N.maxY-N.minY);R.forEach((C,b)=>{D[b].style.width=`${Re}px`,C.sx=N.minX+C.seed.x*qe,C.sy=N.minY+C.seed.y*Ie,C.sr=C.seed.r,C.x===void 0&&(C.x=C.sx,C.y=C.sy,C.r=C.sr)});const tt=x.getBoundingClientRect();de=.62;const $e=Re*de;X=tt.right-oe.left-$e-30,k=tt.top-oe.top+42,O=-1},ie=(ue,oe)=>{const Re=x.getBoundingClientRect();return ue>Re.left-20&&ue<Re.right+20&&oe>Re.top-20&&oe<Re.bottom+20},j=()=>{if(F){T=!1;return}let ue=!1;R.forEach((oe,Re)=>{const ze=D[Re];if(!ze)return;let q,mt,Fe;oe.drag&&oe.dragX!==void 0?(q=oe.dragX,mt=oe.dragY,Fe=0,ue=!0):oe.id===m.current&&X!==void 0?(q=X,mt=k,Fe=O):(q=oe.sx,mt=oe.sy,Fe=oe.sr);const qe=oe.id===m.current&&!oe.drag?de:1;oe.scale===void 0&&(oe.scale=1);const Ie=oe.drag?.55:oe.id===m.current?.2:.16;oe.x+=(q-oe.x)*Ie,oe.y+=(mt-oe.y)*Ie,oe.r+=(Fe-oe.r)*Ie,oe.scale+=(qe-oe.scale)*Ie,Math.abs(q-oe.x)+Math.abs(mt-oe.y)+Math.abs(Fe-oe.r)+Math.abs(qe-oe.scale)>.05&&(ue=!0),ze.style.transformOrigin="top left",ze.style.transform=`translate(${oe.x}px,${oe.y}px) rotate(${oe.r}deg) scale(${oe.scale})`}),ue?pe=requestAnimationFrame(j):T=!1},ee=()=>{T||F||(T=!0,pe=requestAnimationFrame(j))},B=ue=>{m.current=ue,h(ue),R.forEach((oe,Re)=>{const ze=D[Re];if(!ze)return;const q=oe.id===ue;ze.style.boxShadow=q?r_:i_,ze.style.zIndex=q?"9":"5",oe.dragX=void 0}),fe()&&(fe().style.opacity=ue?"1":"0",fe().style.pointerEvents=ue?"auto":"none"),y.style.overflow=ue?"visible":"hidden",ce()&&(ce().style.opacity=ue?"0":"1"),ee()};v.current=B;const Z=[],W=(ue,oe)=>{const Re=D[oe];let ze=0,q=0,mt=!1;Re.style.touchAction="none";const Fe=tt=>{tt.preventDefault(),ue.drag=!0,mt=!1,ze=tt.clientX,q=tt.clientY;const $e=A.getBoundingClientRect();ue.grabDX=ue.x-(tt.clientX-$e.left),ue.grabDY=ue.y-(tt.clientY-$e.top),Re.setPointerCapture(tt.pointerId),Re.style.cursor="grabbing",Re.style.zIndex="50",y.style.zIndex="10",y.style.overflow="visible",ee()},qe=tt=>{if(!ue.drag)return;Math.abs(tt.clientX-ze)+Math.abs(tt.clientY-q)>6&&(mt=!0);const $e=A.getBoundingClientRect();ue.dragX=tt.clientX-$e.left+ue.grabDX,ue.dragY=tt.clientY-$e.top+ue.grabDY,ee();const C=ie(tt.clientX,tt.clientY);ce()&&m.current===null&&(ce().style.borderColor=C?fg:"",ce().style.background=C?"rgba(124,92,252,0.04)":"transparent"),x.style.background=C?"var(--bg-target-active)":"var(--bg-surface)"},Ie=tt=>{if(!ue.drag)return;ue.drag=!1,Re.style.cursor="grab",Re.style.zIndex="5",y.style.zIndex="",ce()&&(ce().style.borderColor="",ce().style.background="transparent"),x.style.background="var(--bg-surface)";const $e=ie(tt.clientX,tt.clientY);!mt||$e?B(ue.id):(m.current===ue.id&&B(null),ue.dragX=void 0),ee()};Re.addEventListener("pointerdown",Fe),Re.addEventListener("pointermove",qe),Re.addEventListener("pointerup",Ie),Z.push(()=>{Re.removeEventListener("pointerdown",Fe),Re.removeEventListener("pointermove",qe),Re.removeEventListener("pointerup",Ie)})};H(),R.forEach((ue,oe)=>W(ue,oe)),ee();const L=()=>H();window.addEventListener("resize",L,{passive:!0});let G=null,xe=null,Y=!1,le=null;const he=R[0],Ae=()=>{if(m.current||he.drag||Y)return;Y=!0;const ue=he.sx,oe=he.sy,Re=he.sr;he.sx=ue+46,he.sy=oe-22,he.sr=Re+1.5;const ze=D[0];ze&&ze.animate&&ze.animate([{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"},{boxShadow:"0 8px 24px -4px rgba(124,92,252,.18)"},{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"}],{duration:1200,easing:"ease-in-out"}),ee(),setTimeout(()=>{m.current||he.drag||(he.sx=ue,he.sy=oe,he.sr=Re,ee()),Y=!1},760)};return typeof IntersectionObserver<"u"&&(le=new IntersectionObserver(ue=>{ue.forEach(oe=>{oe.isIntersecting?G||(xe=setTimeout(Ae,600),G=setInterval(Ae,3200)):G&&(clearInterval(G),G=null,xe&&(clearTimeout(xe),xe=null))})},{threshold:.35}),le.observe(A)),()=>{F=!0,pe&&cancelAnimationFrame(pe),window.removeEventListener("resize",L),Z.forEach(ue=>ue()),G&&clearInterval(G),xe&&clearTimeout(xe),le&&le.disconnect(),v.current=()=>{}}},[e]);const M=Pe.useCallback(()=>v.current(null),[]),w=Pe.useCallback(A=>v.current(A),[]);return{active:u,setCardRefs:S,closeActive:M,activateCard:w}}const dl={fontFamily:"var(--font-mono)"};function o_(){const[r,e]=Pe.useState(null);return p.jsx("div",{className:"mobile-cards",style:{display:"none",flexDirection:"column",gap:12},children:Hl.map(t=>{const s=r===t.id;return p.jsxs("div",{className:"lift-hover",onClick:()=>e(a=>a===t.id?null:t.id),style:{borderRadius:14,overflow:"hidden",background:"var(--bg-surface)",cursor:"pointer",boxShadow:"var(--shadow-card)"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 20px"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{...dl,fontSize:10,letterSpacing:"0.04em",color:"var(--text-secondary)",marginBottom:6},children:t.meta}),p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:500,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--text-primary)"},children:t.card})]}),p.jsx("div",{style:{fontSize:22,color:"var(--text-tertiary)",flex:"none",marginLeft:16},children:s?"−":"+"})]}),s&&p.jsx("div",{style:{padding:"0 20px 22px",borderTop:"1px solid var(--border-subtle)"},children:p.jsxs("div",{style:{paddingTop:18},children:[p.jsx("div",{style:{...dl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--text-muted)",margin:"0 0 5px"},children:"The problem"}),p.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.65,color:"var(--text-body)",margin:0},children:t.problem}),p.jsx("div",{style:{...dl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--accent)",margin:"16px 0 5px"},children:"How I solved it"}),p.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.65,color:"var(--text-secondary)",margin:0},children:t.solution}),t.cover?p.jsx("img",{src:t.cover,alt:`${t.id} cover`,className:"case-cover",style:{margin:"16px 0 0"}}):p.jsx("div",{className:"case-cover case-cover--placeholder",style:{margin:"16px 0 0"},"aria-hidden":"true",children:p.jsx("span",{children:"Cover image"})}),p.jsx("div",{style:{display:"flex",gap:32,margin:"20px 0 18px"},children:t.stats.map(a=>p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(22px,3vw,30px)",fontWeight:600,color:"var(--accent)"},children:a.value}),p.jsx("div",{style:{...dl,fontSize:10,color:"var(--text-secondary)",marginTop:6},children:a.label})]},a.label))}),p.jsx("a",{href:t.mailto,onClick:a=>a.stopPropagation(),style:{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,color:"var(--accent)"},children:"Request full case study →"})]})})]},t.id)})})}const Ed={fontFamily:"var(--font-mono)"},zu={...Ed,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:7},Cp={fontFamily:"var(--font-body)",fontSize:14.5,lineHeight:1.7,color:"var(--text-body)",margin:0,maxWidth:"54ch"};function a_({study:r}){return r?p.jsxs("div",{"data-detail":r.id,children:[p.jsx("div",{style:{...Ed,fontSize:9,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:22},children:r.metaLong}),p.jsx("div",{style:{...zu,color:"var(--text-muted)"},children:"The problem"}),p.jsx("p",{style:Cp,children:r.problem}),p.jsx("div",{style:{...zu,color:"var(--accent)",margin:"20px 0 6px"},children:"How I solved it"}),p.jsx("p",{style:{...Cp,color:"var(--text-secondary)"},children:r.solution}),r.cover?p.jsx("img",{src:r.cover,alt:`${r.id} cover`,className:"case-cover",style:{margin:"22px 0 0"}}):p.jsx("div",{className:"case-cover case-cover--placeholder",style:{margin:"22px 0 0"},"aria-hidden":"true",children:p.jsx("span",{children:"Cover image"})}),p.jsx("div",{style:{...zu,color:"var(--text-muted)",margin:"24px 0 10px"},children:"Results"}),p.jsx("div",{style:{display:"flex",gap:44,marginBottom:26},children:r.stats.map(e=>p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(24px,3vw,34px)",fontWeight:600,color:"var(--accent)"},children:e.value}),p.jsx("div",{style:{...Ed,fontSize:10,color:"var(--text-secondary)",marginTop:8},children:e.label})]},e.label))}),p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:16},children:[r.href?p.jsx("a",{href:r.href,className:"cta-pill",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 20px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600},children:"Read the full case study →"}):null,p.jsx("a",{href:r.mailto,className:r.href?"text-link text-link--muted":"cta-pill",style:r.href?{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500}:{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 20px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600},children:r.href?"Request full case study":"Request full case study →"})]})]}):null}const Cs={fontFamily:"var(--font-mono)"},l_=[{color:"var(--accent)",opacity:.5},{color:"var(--dot-amber)",opacity:.4},{color:"var(--teal)",opacity:.4}],c_={position:"absolute",left:0,top:0,width:240,cursor:"grab",userSelect:"none",willChange:"transform",zIndex:5,background:"var(--bg-surface)",boxShadow:"var(--shadow-float)",padding:"16px 18px 18px",borderRadius:14};function u_(){const r=Pe.useRef(null),e=Pe.useRef(null),t=Pe.useRef(null),s=Pe.useRef(null),a=Pe.useRef(null),{active:l,setCardRefs:d,closeActive:u}=s_({boardRef:r,scatterRef:e,targetRef:t,emptyRef:s,detailRef:a},Hl),h=Hl.find(m=>m.id===l)||null;return p.jsx("section",{id:"work",style:{position:"relative",zIndex:10,marginTop:"-100vh"},children:p.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px) 81px"},children:[p.jsx(o_,{}),p.jsxs("div",{"data-reveal":"",style:{borderRadius:"28px 28px 18px 18px",overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-panel)",transitionDelay:"0.1s"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[p.jsx("div",{style:{display:"flex",gap:5},children:l_.map((m,v)=>p.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:m.color,opacity:m.opacity}},v))}),p.jsx("div",{style:{...Cs,fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-tertiary)"},children:"01 · Case studies"}),p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:13,fontWeight:500,color:"var(--text-secondary)",marginLeft:4},children:"— The problem, and how I solved it"})]}),p.jsxs("div",{style:{...Cs,fontSize:9,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"},children:[p.jsx("span",{className:"drag-desktop",children:"Drag a case into the reader — or click one"}),p.jsx("span",{className:"drag-mobile",style:{display:"none"},children:"Tap a card to open"})]})]}),p.jsxs("div",{ref:r,className:"board",style:{position:"relative",touchAction:"none",display:"grid",gridTemplateColumns:"minmax(280px,0.86fr) minmax(0,1.14fr)",minHeight:600,overflow:"hidden"},children:[p.jsxs("div",{ref:e,className:"scatter",style:{position:"relative",padding:"20px 16px",borderRight:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)",overflow:"hidden"},children:[p.jsx("div",{style:{...Cs,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"Cases · 04"}),Hl.map((m,v)=>p.jsxs("div",{ref:d[v],"data-card":m.id,style:c_,children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,...Cs,fontSize:10,color:"var(--text-secondary)"},children:[p.jsx("span",{children:m.meta}),p.jsx("span",{style:{fontWeight:700,color:"var(--border-fade)"},children:m.index})]}),p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:15.5,fontWeight:500,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--text-primary)"},children:m.card})]},m.id))]}),p.jsxs("div",{ref:t,style:{position:"relative",padding:"26px 32px 32px",background:"var(--bg-surface)",transition:"background .25s"},children:[p.jsx("div",{style:{...Cs,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"The case"}),p.jsxs("div",{ref:s,style:{position:"absolute",inset:"52px 32px 32px",border:"1px dashed var(--border-dashed)",borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,transition:"opacity .3s",pointerEvents:"none",opacity:l?0:1},children:[p.jsx("div",{style:{fontSize:28,lineHeight:1,color:"var(--border-fade)",fontWeight:300},children:"↳"}),p.jsxs("div",{style:{textAlign:"center"},children:[p.jsx("div",{className:"drop-desktop",style:{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Drop a case to read it"}),p.jsx("div",{className:"drop-mobile",style:{display:"none",fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Tap a card to open"}),p.jsx("div",{style:{...Cs,fontSize:10,color:"var(--text-muted)",marginTop:6},children:"the case opens"})]})]}),p.jsx("div",{ref:a,style:{position:"relative",opacity:l?1:0,transition:"opacity .35s",pointerEvents:l?"auto":"none",paddingTop:22},children:p.jsx(a_,{study:h})}),p.jsx("button",{type:"button",onClick:u,"aria-label":"Close case study",className:"replay-btn",style:{position:"absolute",top:22,right:28,zIndex:12,width:28,height:28,background:"var(--bg-hover)",color:"var(--text-secondary)",border:"none",borderRadius:"50%",display:"grid",placeItems:"center",cursor:"pointer",opacity:l?1:0,pointerEvents:l?"auto":"none",fontSize:14,transition:"opacity .25s"},children:"×"})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="161",d_=0,Pp=1,f_=2,hg=1,h_=2,Vi=3,br=0,On=1,ji=2,wr=0,Qs=1,Zo=2,Lp=3,Np=4,p_=5,$r=100,m_=101,g_=102,Dp=103,Ip=104,v_=200,__=201,x_=202,y_=203,wd=204,Td=205,S_=206,M_=207,E_=208,w_=209,T_=210,A_=211,b_=212,R_=213,C_=214,P_=0,L_=1,N_=2,jl=3,D_=4,I_=5,U_=6,F_=7,pg=0,O_=1,k_=2,Tr=0,z_=1,B_=2,H_=3,mg=4,G_=5,V_=6,gg=300,to=301,no=302,Ad=303,bd=304,Kl=306,Rd=1e3,fi=1001,Cd=1002,wn=1003,Up=1004,jo=1005,Un=1006,Bu=1007,Qr=1008,Ar=1009,j_=1010,W_=1011,Vd=1012,vg=1013,Er=1014,Wi=1015,Jo=1016,_g=1017,xg=1018,Jr=1020,X_=1021,hi=1023,q_=1024,Y_=1025,es=1026,io=1027,$_=1028,yg=1029,K_=1030,Sg=1031,Mg=1033,Hu=33776,Gu=33777,Vu=33778,ju=33779,Fp=35840,Op=35841,kp=35842,zp=35843,Eg=36196,Bp=37492,Hp=37496,Gp=37808,Vp=37809,jp=37810,Wp=37811,Xp=37812,qp=37813,Yp=37814,$p=37815,Kp=37816,Qp=37817,Zp=37818,Jp=37819,em=37820,tm=37821,Wu=36492,nm=36494,im=36495,Q_=36283,rm=36284,sm=36285,om=36286,wg=3e3,ts=3001,Z_=3200,J_=3201,ex=0,tx=1,ti="",on="srgb",Yi="srgb-linear",jd="display-p3",Ql="display-p3-linear",Wl="linear",It="srgb",Xl="rec709",ql="p3",Ps=7680,am=519,nx=512,ix=513,rx=514,Tg=515,sx=516,ox=517,ax=518,lx=519,lm=35044,cm="300 es",Pd=1035,Xi=2e3,Yl=2001;class so{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=Math.PI/180,Ld=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]).toLowerCase()}function vn(r,e,t){return Math.max(e,Math.min(t,r))}function cx(r,e){return(r%e+e)%e}function qu(r,e,t){return(1-t)*r+t*e}function um(r){return(r&r-1)===0&&r!==0}function Nd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*a+e.x,this.y=l*a+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,s,a,l,d,u,h,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,d,u,h,m)}set(e,t,s,a,l,d,u,h,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=u,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,d=s[0],u=s[3],h=s[6],m=s[1],v=s[4],_=s[7],S=s[2],M=s[5],w=s[8],A=a[0],y=a[3],x=a[6],D=a[1],R=a[4],N=a[7],X=a[2],k=a[5],O=a[8];return l[0]=d*A+u*D+h*X,l[3]=d*y+u*R+h*k,l[6]=d*x+u*N+h*O,l[1]=m*A+v*D+_*X,l[4]=m*y+v*R+_*k,l[7]=m*x+v*N+_*O,l[2]=S*A+M*D+w*X,l[5]=S*y+M*R+w*k,l[8]=S*x+M*N+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],m=e[7],v=e[8];return t*d*v-t*u*m-s*l*v+s*u*h+a*l*m-a*d*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],m=e[7],v=e[8],_=v*d-u*m,S=u*h-v*l,M=m*l-d*h,w=t*_+s*S+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=_*A,e[1]=(a*m-v*s)*A,e[2]=(u*s-a*d)*A,e[3]=S*A,e[4]=(v*t-a*h)*A,e[5]=(a*l-u*t)*A,e[6]=M*A,e[7]=(s*h-m*t)*A,e[8]=(d*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,d,u){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*d+m*u)+d+e,-a*m,a*h,-a*(-m*d+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Yu.makeScale(e,t)),this}rotate(e){return this.premultiply(Yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yu=new pt;function Ag(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $l(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ux(){const r=$l("canvas");return r.style.display="block",r}const dm={};function Zs(r){r in dm||(dm[r]=!0,console.warn(r))}const fm=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hm=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fl={[Yi]:{transfer:Wl,primaries:Xl,toReference:r=>r,fromReference:r=>r},[on]:{transfer:It,primaries:Xl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ql]:{transfer:Wl,primaries:ql,toReference:r=>r.applyMatrix3(hm),fromReference:r=>r.applyMatrix3(fm)},[jd]:{transfer:It,primaries:ql,toReference:r=>r.convertSRGBToLinear().applyMatrix3(hm),fromReference:r=>r.applyMatrix3(fm).convertLinearToSRGB()}},dx=new Set([Yi,Ql]),Ct={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!dx.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=fl[e].toReference,a=fl[t].fromReference;return a(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return fl[r].primaries},getTransfer:function(r){return r===ti?Wl:fl[r].transfer}};function Js(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $u(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class bg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=$l("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$l("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Js(l[d]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Js(t[s]/255)*255):t[s]=Js(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class Rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,u=a.length;d<u;d++)a[d].isDataTexture?l.push(Ku(a[d].image)):l.push(Ku(a[d]))}else l=Ku(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ku(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;class kn extends so{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,s=fi,a=fi,l=Un,d=Qr,u=hi,h=Ar,m=kn.DEFAULT_ANISOTROPY,v=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ea(),this.name="",this.source=new Rg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=u,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===ts?on:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?ts:wg}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?on:ti}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=gg;kn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,t=0,s=0,a=1){an.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*a+d[12]*l,this.y=d[1]*t+d[5]*s+d[9]*a+d[13]*l,this.z=d[2]*t+d[6]*s+d[10]*a+d[14]*l,this.w=d[3]*t+d[7]*s+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,m=h[0],v=h[4],_=h[8],S=h[1],M=h[5],w=h[9],A=h[2],y=h[6],x=h[10];if(Math.abs(v-S)<.01&&Math.abs(_-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+A)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(m+1)/2,N=(M+1)/2,X=(x+1)/2,k=(v+S)/4,O=(_+A)/4,de=(w+y)/4;return R>N&&R>X?R<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(R),a=k/s,l=O/s):N>X?N<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(N),s=k/a,l=de/a):X<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(X),s=O/l,a=de/l),this.set(s,a,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(_-A)*(_-A)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(_-A)/D,this.z=(S-v)/D,this.w=Math.acos((m+M+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class px extends so{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t);const a={width:e,height:t,depth:1};s.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ts?on:ti),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new kn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends px{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Cg extends kn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mx extends kn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,d,u){let h=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];const S=l[d+0],M=l[d+1],w=l[d+2],A=l[d+3];if(u===0){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u===1){e[t+0]=S,e[t+1]=M,e[t+2]=w,e[t+3]=A;return}if(_!==A||h!==S||m!==M||v!==w){let y=1-u;const x=h*S+m*M+v*w+_*A,D=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const X=Math.sqrt(R),k=Math.atan2(X,x*D);y=Math.sin(y*k)/X,u=Math.sin(u*k)/X}const N=u*D;if(h=h*y+S*N,m=m*y+M*N,v=v*y+w*N,_=_*y+A*N,y===1-u){const X=1/Math.sqrt(h*h+m*m+v*v+_*_);h*=X,m*=X,v*=X,_*=X}}e[t]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,a,l,d){const u=s[a],h=s[a+1],m=s[a+2],v=s[a+3],_=l[d],S=l[d+1],M=l[d+2],w=l[d+3];return e[t]=u*w+v*_+h*M-m*S,e[t+1]=h*w+v*S+m*_-u*M,e[t+2]=m*w+v*M+u*S-h*_,e[t+3]=v*w-u*_-h*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,d=e._order,u=Math.cos,h=Math.sin,m=u(s/2),v=u(a/2),_=u(l/2),S=h(s/2),M=h(a/2),w=h(l/2);switch(d){case"XYZ":this._x=S*v*_+m*M*w,this._y=m*M*_-S*v*w,this._z=m*v*w+S*M*_,this._w=m*v*_-S*M*w;break;case"YXZ":this._x=S*v*_+m*M*w,this._y=m*M*_-S*v*w,this._z=m*v*w-S*M*_,this._w=m*v*_+S*M*w;break;case"ZXY":this._x=S*v*_-m*M*w,this._y=m*M*_+S*v*w,this._z=m*v*w+S*M*_,this._w=m*v*_-S*M*w;break;case"ZYX":this._x=S*v*_-m*M*w,this._y=m*M*_+S*v*w,this._z=m*v*w-S*M*_,this._w=m*v*_+S*M*w;break;case"YZX":this._x=S*v*_+m*M*w,this._y=m*M*_+S*v*w,this._z=m*v*w-S*M*_,this._w=m*v*_-S*M*w;break;case"XZY":this._x=S*v*_-m*M*w,this._y=m*M*_-S*v*w,this._z=m*v*w+S*M*_,this._w=m*v*_+S*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],d=t[1],u=t[5],h=t[9],m=t[2],v=t[6],_=t[10],S=s+u+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-m)*M,this._z=(d-a)*M}else if(s>u&&s>_){const M=2*Math.sqrt(1+s-u-_);this._w=(v-h)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(l+m)/M}else if(u>_){const M=2*Math.sqrt(1+u-s-_);this._w=(l-m)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+_-s-u);this._w=(d-a)/M,this._x=(l+m)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,d=e._w,u=t._x,h=t._y,m=t._z,v=t._w;return this._x=s*v+d*u+a*m-l*h,this._y=a*v+d*h+l*u-s*m,this._z=l*v+d*m+s*h-a*u,this._w=d*v-s*u-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,d=this._w;let u=d*e._w+s*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=s,this._y=a,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*s+t*this._x,this._y=M*a+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),v=Math.atan2(m,u),_=Math.sin((1-t)*v)/m,S=Math.sin(t*v)/m;return this._w=d*_+this._w*S,this._x=s*_+this._x*S,this._y=a*_+this._y*S,this._z=l*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),s*Math.sin(l),s*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,d=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*d,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*d,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,d=e.y,u=e.z,h=e.w,m=2*(d*a-u*s),v=2*(u*t-l*a),_=2*(l*s-d*t);return this.x=t+h*m+d*_-u*v,this.y=s+h*v+u*m-l*_,this.z=a+h*_+l*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,d=t.x,u=t.y,h=t.z;return this.x=a*h-l*u,this.y=l*d-s*h,this.z=s*u-a*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new $,pm=new oo;class ta{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=l.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,li):li.fromBufferAttribute(l,d),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hl.copy(s.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),pl.subVectors(this.max,Xo),Ns.subVectors(e.a,Xo),Ds.subVectors(e.b,Xo),Is.subVectors(e.c,Xo),gr.subVectors(Ds,Ns),vr.subVectors(Is,Ds),Vr.subVectors(Ns,Is);let t=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Vr.z,Vr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Vr.z,0,-Vr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Vr.y,Vr.x,0];return!Zu(t,Ns,Ds,Is,pl)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,Ns,Ds,Is,pl))?!1:(ml.crossVectors(gr,vr),t=[ml.x,ml.y,ml.z],Zu(t,Ns,Ds,Is,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new $,new $,new $,new $,new $,new $,new $,new $],li=new $,hl=new ta,Ns=new $,Ds=new $,Is=new $,gr=new $,vr=new $,Vr=new $,Xo=new $,pl=new $,ml=new $,jr=new $;function Zu(r,e,t,s,a){for(let l=0,d=r.length-3;l<=d;l+=3){jr.fromArray(r,l);const u=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),h=e.dot(jr),m=t.dot(jr),v=s.dot(jr);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>u)return!1}return!0}const gx=new ta,qo=new $,Ju=new $;class Zl{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):gx.setFromPoints(e).getCenter(s);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(qo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Ju)),this.expandByPoint(qo.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new $,ed=new $,gl=new $,_r=new $,td=new $,vl=new $,nd=new $;class Pg{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){ed.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(ed);const l=e.distanceTo(t)*.5,d=-this.direction.dot(gl),u=_r.dot(this.direction),h=-_r.dot(gl),m=_r.lengthSq(),v=Math.abs(1-d*d);let _,S,M,w;if(v>0)if(_=d*h-u,S=d*u-h,w=l*v,_>=0)if(S>=-w)if(S<=w){const A=1/v;_*=A,S*=A,M=_*(_+d*S+2*u)+S*(d*_+S+2*h)+m}else S=l,_=Math.max(0,-(d*S+u)),M=-_*_+S*(S+2*h)+m;else S=-l,_=Math.max(0,-(d*S+u)),M=-_*_+S*(S+2*h)+m;else S<=-w?(_=Math.max(0,-(-d*l+u)),S=_>0?-l:Math.min(Math.max(-l,-h),l),M=-_*_+S*(S+2*h)+m):S<=w?(_=0,S=Math.min(Math.max(-l,-h),l),M=S*(S+2*h)+m):(_=Math.max(0,-(d*l+u)),S=_>0?l:Math.min(Math.max(-l,-h),l),M=-_*_+S*(S+2*h)+m);else S=d>0?-l:l,_=Math.max(0,-(d*S+u)),M=-_*_+S*(S+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(ed).addScaledVector(gl,S),M}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const s=zi.dot(this.direction),a=zi.dot(zi)-s*s,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),u=s-d,h=s+d;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,d,u,h;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,a=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,a=(e.min.x-S.x)*m),v>=0?(l=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||l>a||((l>s||isNaN(s))&&(s=l),(d<a||isNaN(a))&&(a=d),_>=0?(u=(e.min.z-S.z)*_,h=(e.max.z-S.z)*_):(u=(e.max.z-S.z)*_,h=(e.min.z-S.z)*_),s>h||u>a)||((u>s||s!==s)&&(s=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,s,a,l){td.subVectors(t,e),vl.subVectors(s,e),nd.crossVectors(td,vl);let d=this.direction.dot(nd),u;if(d>0){if(a)return null;u=1}else if(d<0)u=-1,d=-d;else return null;_r.subVectors(this.origin,e);const h=u*this.direction.dot(vl.crossVectors(_r,vl));if(h<0)return null;const m=u*this.direction.dot(td.cross(_r));if(m<0||h+m>d)return null;const v=-u*_r.dot(nd);return v<0?null:this.at(v/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,s,a,l,d,u,h,m,v,_,S,M,w,A,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,d,u,h,m,v,_,S,M,w,A,y)}set(e,t,s,a,l,d,u,h,m,v,_,S,M,w,A,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=d,x[9]=u,x[13]=h,x[2]=m,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=w,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),d=1/Us.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,d=Math.cos(s),u=Math.sin(s),h=Math.cos(a),m=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const S=d*v,M=d*_,w=u*v,A=u*_;t[0]=h*v,t[4]=-h*_,t[8]=m,t[1]=M+w*m,t[5]=S-A*m,t[9]=-u*h,t[2]=A-S*m,t[6]=w+M*m,t[10]=d*h}else if(e.order==="YXZ"){const S=h*v,M=h*_,w=m*v,A=m*_;t[0]=S+A*u,t[4]=w*u-M,t[8]=d*m,t[1]=d*_,t[5]=d*v,t[9]=-u,t[2]=M*u-w,t[6]=A+S*u,t[10]=d*h}else if(e.order==="ZXY"){const S=h*v,M=h*_,w=m*v,A=m*_;t[0]=S-A*u,t[4]=-d*_,t[8]=w+M*u,t[1]=M+w*u,t[5]=d*v,t[9]=A-S*u,t[2]=-d*m,t[6]=u,t[10]=d*h}else if(e.order==="ZYX"){const S=d*v,M=d*_,w=u*v,A=u*_;t[0]=h*v,t[4]=w*m-M,t[8]=S*m+A,t[1]=h*_,t[5]=A*m+S,t[9]=M*m-w,t[2]=-m,t[6]=u*h,t[10]=d*h}else if(e.order==="YZX"){const S=d*h,M=d*m,w=u*h,A=u*m;t[0]=h*v,t[4]=A-S*_,t[8]=w*_+M,t[1]=_,t[5]=d*v,t[9]=-u*v,t[2]=-m*v,t[6]=M*_+w,t[10]=S-A*_}else if(e.order==="XZY"){const S=d*h,M=d*m,w=u*h,A=u*m;t[0]=h*v,t[4]=-_,t[8]=m*v,t[1]=S*_+A,t[5]=d*v,t[9]=M*_-w,t[2]=w*_-M,t[6]=u*v,t[10]=A*_+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,_x)}lookAt(e,t,s){const a=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),xr.crossVectors(s,jn),xr.lengthSq()===0&&(Math.abs(s.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),xr.crossVectors(s,jn)),xr.normalize(),_l.crossVectors(jn,xr),a[0]=xr.x,a[4]=_l.x,a[8]=jn.x,a[1]=xr.y,a[5]=_l.y,a[9]=jn.y,a[2]=xr.z,a[6]=_l.z,a[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,d=s[0],u=s[4],h=s[8],m=s[12],v=s[1],_=s[5],S=s[9],M=s[13],w=s[2],A=s[6],y=s[10],x=s[14],D=s[3],R=s[7],N=s[11],X=s[15],k=a[0],O=a[4],de=a[8],pe=a[12],T=a[1],F=a[5],ce=a[9],fe=a[13],H=a[2],ie=a[6],j=a[10],ee=a[14],B=a[3],Z=a[7],W=a[11],L=a[15];return l[0]=d*k+u*T+h*H+m*B,l[4]=d*O+u*F+h*ie+m*Z,l[8]=d*de+u*ce+h*j+m*W,l[12]=d*pe+u*fe+h*ee+m*L,l[1]=v*k+_*T+S*H+M*B,l[5]=v*O+_*F+S*ie+M*Z,l[9]=v*de+_*ce+S*j+M*W,l[13]=v*pe+_*fe+S*ee+M*L,l[2]=w*k+A*T+y*H+x*B,l[6]=w*O+A*F+y*ie+x*Z,l[10]=w*de+A*ce+y*j+x*W,l[14]=w*pe+A*fe+y*ee+x*L,l[3]=D*k+R*T+N*H+X*B,l[7]=D*O+R*F+N*ie+X*Z,l[11]=D*de+R*ce+N*j+X*W,l[15]=D*pe+R*fe+N*ee+X*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],d=e[1],u=e[5],h=e[9],m=e[13],v=e[2],_=e[6],S=e[10],M=e[14],w=e[3],A=e[7],y=e[11],x=e[15];return w*(+l*h*_-a*m*_-l*u*S+s*m*S+a*u*M-s*h*M)+A*(+t*h*M-t*m*S+l*d*S-a*d*M+a*m*v-l*h*v)+y*(+t*m*_-t*u*M-l*d*_+s*d*M+l*u*v-s*m*v)+x*(-a*u*v-t*h*_+t*u*S+a*d*_-s*d*S+s*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],m=e[7],v=e[8],_=e[9],S=e[10],M=e[11],w=e[12],A=e[13],y=e[14],x=e[15],D=_*y*m-A*S*m+A*h*M-u*y*M-_*h*x+u*S*x,R=w*S*m-v*y*m-w*h*M+d*y*M+v*h*x-d*S*x,N=v*A*m-w*_*m+w*u*M-d*A*M-v*u*x+d*_*x,X=w*_*h-v*A*h-w*u*S+d*A*S+v*u*y-d*_*y,k=t*D+s*R+a*N+l*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=D*O,e[1]=(A*S*l-_*y*l-A*a*M+s*y*M+_*a*x-s*S*x)*O,e[2]=(u*y*l-A*h*l+A*a*m-s*y*m-u*a*x+s*h*x)*O,e[3]=(_*h*l-u*S*l-_*a*m+s*S*m+u*a*M-s*h*M)*O,e[4]=R*O,e[5]=(v*y*l-w*S*l+w*a*M-t*y*M-v*a*x+t*S*x)*O,e[6]=(w*h*l-d*y*l-w*a*m+t*y*m+d*a*x-t*h*x)*O,e[7]=(d*S*l-v*h*l+v*a*m-t*S*m-d*a*M+t*h*M)*O,e[8]=N*O,e[9]=(w*_*l-v*A*l-w*s*M+t*A*M+v*s*x-t*_*x)*O,e[10]=(d*A*l-w*u*l+w*s*m-t*A*m-d*s*x+t*u*x)*O,e[11]=(v*u*l-d*_*l-v*s*m+t*_*m+d*s*M-t*u*M)*O,e[12]=X*O,e[13]=(v*A*a-w*_*a+w*s*S-t*A*S-v*s*y+t*_*y)*O,e[14]=(w*u*a-d*A*a-w*s*h+t*A*h+d*s*y-t*u*y)*O,e[15]=(d*_*a-v*u*a+v*s*h-t*_*h-d*s*S+t*u*S)*O,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,d=e.x,u=e.y,h=e.z,m=l*d,v=l*u;return this.set(m*d+s,m*u-a*h,m*h+a*u,0,m*u+a*h,v*u+s,v*h-a*d,0,m*h-a*u,v*h+a*d,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,d){return this.set(1,s,l,0,e,1,d,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,d=t._y,u=t._z,h=t._w,m=l+l,v=d+d,_=u+u,S=l*m,M=l*v,w=l*_,A=d*v,y=d*_,x=u*_,D=h*m,R=h*v,N=h*_,X=s.x,k=s.y,O=s.z;return a[0]=(1-(A+x))*X,a[1]=(M+N)*X,a[2]=(w-R)*X,a[3]=0,a[4]=(M-N)*k,a[5]=(1-(S+x))*k,a[6]=(y+D)*k,a[7]=0,a[8]=(w+R)*O,a[9]=(y-D)*O,a[10]=(1-(S+A))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Us.set(a[0],a[1],a[2]).length();const d=Us.set(a[4],a[5],a[6]).length(),u=Us.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ci.copy(this);const m=1/l,v=1/d,_=1/u;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=v,ci.elements[5]*=v,ci.elements[6]*=v,ci.elements[8]*=_,ci.elements[9]*=_,ci.elements[10]*=_,t.setFromRotationMatrix(ci),s.x=l,s.y=d,s.z=u,this}makePerspective(e,t,s,a,l,d,u=Xi){const h=this.elements,m=2*l/(t-e),v=2*l/(s-a),_=(t+e)/(t-e),S=(s+a)/(s-a);let M,w;if(u===Xi)M=-(d+l)/(d-l),w=-2*d*l/(d-l);else if(u===Yl)M=-d/(d-l),w=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,d,u=Xi){const h=this.elements,m=1/(t-e),v=1/(s-a),_=1/(d-l),S=(t+e)*m,M=(s+a)*v;let w,A;if(u===Xi)w=(d+l)*_,A=-2*_;else if(u===Yl)w=l*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Us=new $,ci=new Kt,vx=new $(0,0,0),_x=new $(1,1,1),xr=new $,_l=new $,jn=new $,mm=new Kt,gm=new oo;class Jl{constructor(e=0,t=0,s=0,a=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],d=a[4],u=a[8],h=a[1],m=a[5],v=a[9],_=a[2],S=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xx=0;const vm=new $,Fs=new oo,Bi=new Kt,xl=new $,Yo=new $,yx=new $,Sx=new oo,_m=new $(1,0,0),xm=new $(0,1,0),ym=new $(0,0,1),Mx={type:"added"},Ex={type:"removed"};class zn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new $,t=new Jl,s=new oo,a=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?xl.copy(e):xl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Yo,xl,this.up):Bi.lookAt(xl,Yo,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ex)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,m=this.material.length;h<m;h++)u.push(l(e.materials,this.material[h]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(l(e.animations,h))}}if(t){const u=d(e.geometries),h=d(e.materials),m=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),M=d(e.animations),w=d(e.nodes);u.length>0&&(s.geometries=u),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=a,s;function d(u){const h=[];for(const m in u){const v=u[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}zn.DEFAULT_UP=new $(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new $,Hi=new $,id=new $,Gi=new $,Os=new $,ks=new $,Sm=new $,rd=new $,sd=new $,od=new $;class wi{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ui.subVectors(a,t),Hi.subVectors(s,t),id.subVectors(e,t);const d=ui.dot(ui),u=ui.dot(Hi),h=ui.dot(id),m=Hi.dot(Hi),v=Hi.dot(id),_=d*m-u*u;if(_===0)return l.set(0,0,0),null;const S=1/_,M=(m*h-u*v)*S,w=(d*v-u*h)*S;return l.set(1-M-w,w,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,s,a,l,d,u,h){return this.getBarycoord(e,t,s,a,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Gi.x),h.addScaledVector(d,Gi.y),h.addScaledVector(u,Gi.z),h)}static isFrontFacing(e,t,s,a){return ui.subVectors(s,t),Hi.subVectors(e,t),ui.cross(Hi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ui.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let d,u;Os.subVectors(a,s),ks.subVectors(l,s),rd.subVectors(e,s);const h=Os.dot(rd),m=ks.dot(rd);if(h<=0&&m<=0)return t.copy(s);sd.subVectors(e,a);const v=Os.dot(sd),_=ks.dot(sd);if(v>=0&&_<=v)return t.copy(a);const S=h*_-v*m;if(S<=0&&h>=0&&v<=0)return d=h/(h-v),t.copy(s).addScaledVector(Os,d);od.subVectors(e,l);const M=Os.dot(od),w=ks.dot(od);if(w>=0&&M<=w)return t.copy(l);const A=M*m-h*w;if(A<=0&&m>=0&&w<=0)return u=m/(m-w),t.copy(s).addScaledVector(ks,u);const y=v*w-M*_;if(y<=0&&_-v>=0&&M-w>=0)return Sm.subVectors(l,a),u=(_-v)/(_-v+(M-w)),t.copy(a).addScaledVector(Sm,u);const x=1/(y+A+S);return d=A*x,u=S*x,t.copy(s).addScaledVector(Os,d).addScaledVector(ks,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function ad(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class We{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ct.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Ct.workingColorSpace){if(e=cx(e,1),t=vn(t,0,1),s=vn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,d=2*s-l;this.r=ad(d,l,e+1/3),this.g=ad(d,l,e),this.b=ad(d,l,e-1/3)}return Ct.toWorkingColorSpace(this,a),this}setStyle(e,t=on){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],u=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const s=Ng[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=$u(e.r),this.g=$u(e.g),this.b=$u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Ct.fromWorkingColorSpace(pn.copy(this),e),Math.round(vn(pn.r*255,0,255))*65536+Math.round(vn(pn.g*255,0,255))*256+Math.round(vn(pn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,a=pn.g,l=pn.b,d=Math.max(s,a,l),u=Math.min(s,a,l);let h,m;const v=(u+d)/2;if(u===d)h=0,m=0;else{const _=d-u;switch(m=v<=.5?_/(d+u):_/(2-d-u),d){case s:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-s)/_+2;break;case l:h=(s-a)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=on){Ct.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,a=pn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(yl);const s=qu(yr.h,yl.h,t),a=qu(yr.s,yl.s,t),l=qu(yr.l,yl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new We;We.NAMES=Ng;let wx=0;class na extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Qs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Td,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wd&&(s.blendSrc=this.blendSrc),this.blendDst!==Td&&(s.blendDst=this.blendDst),this.blendEquation!==$r&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const d=[];for(const u in l){const h=l[u];delete h.metadata,d.push(h)}return d}if(t){const l=a(e.textures),d=a(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dg extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new $,Sl=new wt;class pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=lm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Dn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array),a=Dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array),a=Dn(a,this.array),l=Dn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class Ig extends pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Ug extends pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Fn extends pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Tx=0;const Jn=new Kt,ld=new zn,zs=new $,Wn=new ta,$o=new ta,nn=new $;class mi extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Ug:Ig)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,s){return Jn.makeTranslation(e,t,s),this.applyMatrix4(Jn),this}scale(e,t,s){return Jn.makeScale(e,t,s),this.applyMatrix4(Jn),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const u=t[l];$o.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(Wn.min,$o.min),Wn.expandByPoint(nn),nn.addVectors(Wn.max,$o.max),Wn.expandByPoint(nn)):(Wn.expandByPoint($o.min),Wn.expandByPoint($o.max))}Wn.getCenter(s);let a=0;for(let l=0,d=e.count;l<d;l++)nn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(nn));if(t)for(let l=0,d=t.length;l<d;l++){const u=t[l],h=this.morphTargetsRelative;for(let m=0,v=u.count;m<v;m++)nn.fromBufferAttribute(u,m),h&&(zs.fromBufferAttribute(e,m),nn.add(zs)),a=Math.max(a,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,a=t.position.array,l=t.normal.array,d=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,m=[],v=[];for(let T=0;T<u;T++)m[T]=new $,v[T]=new $;const _=new $,S=new $,M=new $,w=new wt,A=new wt,y=new wt,x=new $,D=new $;function R(T,F,ce){_.fromArray(a,T*3),S.fromArray(a,F*3),M.fromArray(a,ce*3),w.fromArray(d,T*2),A.fromArray(d,F*2),y.fromArray(d,ce*2),S.sub(_),M.sub(_),A.sub(w),y.sub(w);const fe=1/(A.x*y.y-y.x*A.y);isFinite(fe)&&(x.copy(S).multiplyScalar(y.y).addScaledVector(M,-A.y).multiplyScalar(fe),D.copy(M).multiplyScalar(A.x).addScaledVector(S,-y.x).multiplyScalar(fe),m[T].add(x),m[F].add(x),m[ce].add(x),v[T].add(D),v[F].add(D),v[ce].add(D))}let N=this.groups;N.length===0&&(N=[{start:0,count:s.length}]);for(let T=0,F=N.length;T<F;++T){const ce=N[T],fe=ce.start,H=ce.count;for(let ie=fe,j=fe+H;ie<j;ie+=3)R(s[ie+0],s[ie+1],s[ie+2])}const X=new $,k=new $,O=new $,de=new $;function pe(T){O.fromArray(l,T*3),de.copy(O);const F=m[T];X.copy(F),X.sub(O.multiplyScalar(O.dot(F))).normalize(),k.crossVectors(de,F);const fe=k.dot(v[T])<0?-1:1;h[T*4]=X.x,h[T*4+1]=X.y,h[T*4+2]=X.z,h[T*4+3]=fe}for(let T=0,F=N.length;T<F;++T){const ce=N[T],fe=ce.start,H=ce.count;for(let ie=fe,j=fe+H;ie<j;ie+=3)pe(s[ie+0]),pe(s[ie+1]),pe(s[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const a=new $,l=new $,d=new $,u=new $,h=new $,m=new $,v=new $,_=new $;if(e)for(let S=0,M=e.count;S<M;S+=3){const w=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),v.subVectors(d,l),_.subVectors(a,l),v.cross(_),u.fromBufferAttribute(s,w),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),u.add(v),h.add(v),m.add(v),s.setXYZ(w,u.x,u.y,u.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)a.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),v.subVectors(d,l),_.subVectors(a,l),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(u,h){const m=u.array,v=u.itemSize,_=u.normalized,S=new m.constructor(h.length*v);let M=0,w=0;for(let A=0,y=h.length;A<y;A++){u.isInterleavedBufferAttribute?M=h[A]*u.data.stride+u.offset:M=h[A]*v;for(let x=0;x<v;x++)S[w++]=m[M++]}return new pi(S,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,s=this.index.array,a=this.attributes;for(const u in a){const h=a[u],m=e(h,s);t.setAttribute(u,m)}const l=this.morphAttributes;for(const u in l){const h=[],m=l[u];for(let v=0,_=m.length;v<_;v++){const S=m[v],M=e(S,s);h.push(M)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,h=d.length;u<h;u++){const m=d[u];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let _=0,S=m.length;_<S;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new Kt,Wr=new Pg,Ml=new Zl,Em=new $,Bs=new $,Hs=new $,Gs=new $,cd=new $,El=new $,wl=new wt,Tl=new wt,Al=new wt,wm=new $,Tm=new $,Am=new $,bl=new $,Rl=new $;class qi extends zn{constructor(e=new mi,t=new Dg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){El.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const v=u[h],_=l[h];v!==0&&(cd.fromBufferAttribute(_,e),d?El.addScaledVector(cd,v):El.addScaledVector(cd.sub(t),v))}t.add(El)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ml.copy(s.boundingSphere),Ml.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Ml,Em)===null||Wr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(Mm),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,d=this.material,u=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,S=l.groups,M=l.drawRange;if(u!==null)if(Array.isArray(d))for(let w=0,A=S.length;w<A;w++){const y=S[w],x=d[y.materialIndex],D=Math.max(y.start,M.start),R=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,X=R;N<X;N+=3){const k=u.getX(N),O=u.getX(N+1),de=u.getX(N+2);a=Cl(this,x,e,s,m,v,_,k,O,de),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(u.count,M.start+M.count);for(let y=w,x=A;y<x;y+=3){const D=u.getX(y),R=u.getX(y+1),N=u.getX(y+2);a=Cl(this,d,e,s,m,v,_,D,R,N),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let w=0,A=S.length;w<A;w++){const y=S[w],x=d[y.materialIndex],D=Math.max(y.start,M.start),R=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=D,X=R;N<X;N+=3){const k=N,O=N+1,de=N+2;a=Cl(this,x,e,s,m,v,_,k,O,de),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let y=w,x=A;y<x;y+=3){const D=y,R=y+1,N=y+2;a=Cl(this,d,e,s,m,v,_,D,R,N),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Ax(r,e,t,s,a,l,d,u){let h;if(e.side===On?h=s.intersectTriangle(d,l,a,!0,u):h=s.intersectTriangle(a,l,d,e.side===br,u),h===null)return null;Rl.copy(u),Rl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Rl);return m<t.near||m>t.far?null:{distance:m,point:Rl.clone(),object:r}}function Cl(r,e,t,s,a,l,d,u,h,m){r.getVertexPosition(u,Bs),r.getVertexPosition(h,Hs),r.getVertexPosition(m,Gs);const v=Ax(r,e,t,s,Bs,Hs,Gs,bl);if(v){a&&(wl.fromBufferAttribute(a,u),Tl.fromBufferAttribute(a,h),Al.fromBufferAttribute(a,m),v.uv=wi.getInterpolation(bl,Bs,Hs,Gs,wl,Tl,Al,new wt)),l&&(wl.fromBufferAttribute(l,u),Tl.fromBufferAttribute(l,h),Al.fromBufferAttribute(l,m),v.uv1=wi.getInterpolation(bl,Bs,Hs,Gs,wl,Tl,Al,new wt),v.uv2=v.uv1),d&&(wm.fromBufferAttribute(d,u),Tm.fromBufferAttribute(d,h),Am.fromBufferAttribute(d,m),v.normal=wi.getInterpolation(bl,Bs,Hs,Gs,wm,Tm,Am,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:u,b:h,c:m,normal:new $,materialIndex:0};wi.getNormal(Bs,Hs,Gs,_.normal),v.face=_}return v}class ia extends mi{constructor(e=1,t=1,s=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:d};const u=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],m=[],v=[],_=[];let S=0,M=0;w("z","y","x",-1,-1,s,t,e,d,l,0),w("z","y","x",1,-1,s,t,-e,d,l,1),w("x","z","y",1,1,e,s,t,a,d,2),w("x","z","y",1,-1,e,s,-t,a,d,3),w("x","y","z",1,-1,e,t,s,a,l,4),w("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(_,2));function w(A,y,x,D,R,N,X,k,O,de,pe){const T=N/O,F=X/de,ce=N/2,fe=X/2,H=k/2,ie=O+1,j=de+1;let ee=0,B=0;const Z=new $;for(let W=0;W<j;W++){const L=W*F-fe;for(let G=0;G<ie;G++){const xe=G*T-ce;Z[A]=xe*D,Z[y]=L*R,Z[x]=H,m.push(Z.x,Z.y,Z.z),Z[A]=0,Z[y]=0,Z[x]=k>0?1:-1,v.push(Z.x,Z.y,Z.z),_.push(G/O),_.push(1-W/de),ee+=1}}for(let W=0;W<de;W++)for(let L=0;L<O;L++){const G=S+L+ie*W,xe=S+L+ie*(W+1),Y=S+(L+1)+ie*(W+1),le=S+(L+1)+ie*W;h.push(G,xe,le),h.push(xe,Y,le),B+=6}u.addGroup(M,B,pe),M+=B,S+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const s=ro(r[t]);for(const a in s)e[a]=s[a]}return e}function bx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Fg(r){return r.getRenderTarget()===null?r.outputColorSpace:Ct.workingColorSpace}const Rx={clone:ro,merge:En};var Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Og extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new $,bm=new wt,Rm=new wt;class ei extends Og{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,bm,Rm),t.subVectors(Rm,bm)}setViewOffset(e,t,s,a,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xu*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;l+=d.offsetX*a/h,t-=d.offsetY*s/m,a*=d.width/h,s*=d.height/m}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,js=1;class Lx extends zn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(Vs,js,e,t);a.layers=this.layers,this.add(a);const l=new ei(Vs,js,e,t);l.layers=this.layers,this.add(l);const d=new ei(Vs,js,e,t);d.layers=this.layers,this.add(d);const u=new ei(Vs,js,e,t);u.layers=this.layers,this.add(u);const h=new ei(Vs,js,e,t);h.layers=this.layers,this.add(h);const m=new ei(Vs,js,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,d,u,h]=t;for(const m of t)this.remove(m);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Yl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,u,h,m,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,d),e.setRenderTarget(s,2,a),e.render(t,u),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,a),e.render(t,v),e.setRenderTarget(_,S,M),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class kg extends kn{constructor(e,t,s,a,l,d,u,h,m,v){e=e!==void 0?e:[],t=t!==void 0?t:to,super(e,t,s,a,l,d,u,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nx extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];t.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ts?on:ti),this.texture=new kg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ia(5,5,5),l=new Ai({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:wr});l.uniforms.tEquirect.value=t;const d=new qi(a,l),u=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Un),new Lx(1,10,this).update(e,d),t.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,a);e.setRenderTarget(l)}}const ud=new $,Dx=new $,Ix=new pt;class qr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=ud.subVectors(s,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(ud),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ix.getNormalMatrix(e),a=this.coplanarPoint(ud).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Zl,Pl=new $;class zg{constructor(e=new qr,t=new qr,s=new qr,a=new qr,l=new qr,d=new qr){this.planes=[e,t,s,a,l,d]}set(e,t,s,a,l,d){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(s),u[3].copy(a),u[4].copy(l),u[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Xi){const s=this.planes,a=e.elements,l=a[0],d=a[1],u=a[2],h=a[3],m=a[4],v=a[5],_=a[6],S=a[7],M=a[8],w=a[9],A=a[10],y=a[11],x=a[12],D=a[13],R=a[14],N=a[15];if(s[0].setComponents(h-l,S-m,y-M,N-x).normalize(),s[1].setComponents(h+l,S+m,y+M,N+x).normalize(),s[2].setComponents(h+d,S+v,y+w,N+D).normalize(),s[3].setComponents(h-d,S-v,y-w,N-D).normalize(),s[4].setComponents(h-u,S-_,y-A,N-R).normalize(),t===Xi)s[5].setComponents(h+u,S+_,y+A,N+R).normalize();else if(t===Yl)s[5].setComponents(u,_,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bg(){let r=null,e=!1,t=null,s=null;function a(l,d){t(l,d),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Ux(r,e){const t=e.isWebGL2,s=new WeakMap;function a(m,v){const _=m.array,S=m.usage,M=_.byteLength,w=r.createBuffer();r.bindBuffer(v,w),r.bufferData(v,_,S),m.onUploadCallback();let A;if(_ instanceof Float32Array)A=r.FLOAT;else if(_ instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)A=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)A=r.SHORT;else if(_ instanceof Uint32Array)A=r.UNSIGNED_INT;else if(_ instanceof Int32Array)A=r.INT;else if(_ instanceof Int8Array)A=r.BYTE;else if(_ instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:w,type:A,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:M}}function l(m,v,_){const S=v.array,M=v._updateRange,w=v.updateRanges;if(r.bindBuffer(_,m),M.count===-1&&w.length===0&&r.bufferSubData(_,0,S),w.length!==0){for(let A=0,y=w.length;A<y;A++){const x=w[A];t?r.bufferSubData(_,x.start*S.BYTES_PER_ELEMENT,S,x.start,x.count):r.bufferSubData(_,x.start*S.BYTES_PER_ELEMENT,S.subarray(x.start,x.start+x.count))}v.clearUpdateRanges()}M.count!==-1&&(t?r.bufferSubData(_,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):r.bufferSubData(_,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),v.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const v=s.get(m);v&&(r.deleteBuffer(v.buffer),s.delete(m))}function h(m,v){if(m.isGLBufferAttribute){const S=s.get(m);(!S||S.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const _=s.get(m);if(_===void 0)s.set(m,a(m,v));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(_.buffer,m,v),_.version=m.version}}return{get:d,remove:u,update:h}}class ec extends mi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,d=t/2,u=Math.floor(s),h=Math.floor(a),m=u+1,v=h+1,_=e/u,S=t/h,M=[],w=[],A=[],y=[];for(let x=0;x<v;x++){const D=x*S-d;for(let R=0;R<m;R++){const N=R*_-l;w.push(N,-D,0),A.push(0,0,1),y.push(R/u),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let D=0;D<u;D++){const R=D+m*x,N=D+m*(x+1),X=D+1+m*(x+1),k=D+1+m*x;M.push(R,N,k),M.push(N,X,k)}this.setIndex(M),this.setAttribute("position",new Fn(w,3)),this.setAttribute("normal",new Fn(A,3)),this.setAttribute("uv",new Fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
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
#endif`,kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
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
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jx=`#ifdef USE_BATCHING
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
#endif`,Wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$x=`#ifdef USE_IRIDESCENCE
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
#endif`,Kx=`#ifdef USE_BUMPMAP
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sy=`#define PI 3.141592653589793
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
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ay=`vec3 transformedNormal = objectNormal;
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
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`
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
}`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
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
}`,wy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ry=`uniform bool receiveShadow;
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
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#endif`,Uy=`struct PhysicalMaterial {
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
}`,Fy=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xy=`#if defined( USE_POINTS_UV )
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
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
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
#endif`,Qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
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
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,PS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FS=`uniform sampler2D t2D;
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
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
}`,GS=`#if DEPTH_PACKING == 3200
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
}`,VS=`#define DISTANCE
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
}`,jS=`#define DISTANCE
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
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
}`,YS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,KS=`uniform vec3 diffuse;
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
}`,QS=`#define LAMBERT
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
}`,ZS=`#define LAMBERT
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
}`,JS=`#define MATCAP
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
}`,eM=`#define MATCAP
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
}`,tM=`#define NORMAL
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
}`,nM=`#define NORMAL
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
}`,iM=`#define PHONG
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
}`,rM=`#define PHONG
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
}`,sM=`#define STANDARD
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
}`,oM=`#define STANDARD
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
}`,aM=`#define TOON
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
}`,lM=`#define TOON
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
}`,cM=`uniform float size;
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
}`,uM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,fM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,pM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:kx,alphamap_pars_fragment:zx,alphatest_fragment:Bx,alphatest_pars_fragment:Hx,aomap_fragment:Gx,aomap_pars_fragment:Vx,batching_pars_vertex:jx,batching_vertex:Wx,begin_vertex:Xx,beginnormal_vertex:qx,bsdfs:Yx,iridescence_fragment:$x,bumpmap_pars_fragment:Kx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:ey,color_fragment:ty,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ry,common:sy,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ay,displacementmap_pars_vertex:ly,displacementmap_vertex:cy,emissivemap_fragment:uy,emissivemap_pars_fragment:dy,colorspace_fragment:fy,colorspace_pars_fragment:hy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:vy,envmap_physical_pars_fragment:Cy,envmap_vertex:_y,fog_vertex:xy,fog_pars_vertex:yy,fog_fragment:Sy,fog_pars_fragment:My,gradientmap_pars_fragment:Ey,lightmap_fragment:wy,lightmap_pars_fragment:Ty,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:by,lights_pars_begin:Ry,lights_toon_fragment:Py,lights_toon_pars_fragment:Ly,lights_phong_fragment:Ny,lights_phong_pars_fragment:Dy,lights_physical_fragment:Iy,lights_physical_pars_fragment:Uy,lights_fragment_begin:Fy,lights_fragment_maps:Oy,lights_fragment_end:ky,logdepthbuf_fragment:zy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Gy,map_fragment:Vy,map_pars_fragment:jy,map_particle_fragment:Wy,map_particle_pars_fragment:Xy,metalnessmap_fragment:qy,metalnessmap_pars_fragment:Yy,morphcolor_vertex:$y,morphnormal_vertex:Ky,morphtarget_pars_vertex:Qy,morphtarget_vertex:Zy,normal_fragment_begin:Jy,normal_fragment_maps:eS,normal_pars_fragment:tS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:lS,opaque_fragment:cS,packing:uS,premultiplied_alpha_fragment:dS,project_vertex:fS,dithering_fragment:hS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:vS,shadowmap_pars_vertex:_S,shadowmap_vertex:xS,shadowmask_pars_fragment:yS,skinbase_vertex:SS,skinning_pars_vertex:MS,skinning_vertex:ES,skinnormal_vertex:wS,specularmap_fragment:TS,specularmap_pars_fragment:AS,tonemapping_fragment:bS,tonemapping_pars_fragment:RS,transmission_fragment:CS,transmission_pars_fragment:PS,uv_pars_fragment:LS,uv_pars_vertex:NS,uv_vertex:DS,worldpos_vertex:IS,background_vert:US,background_frag:FS,backgroundCube_vert:OS,backgroundCube_frag:kS,cube_vert:zS,cube_frag:BS,depth_vert:HS,depth_frag:GS,distanceRGBA_vert:VS,distanceRGBA_frag:jS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:qS,linedashed_frag:YS,meshbasic_vert:$S,meshbasic_frag:KS,meshlambert_vert:QS,meshlambert_frag:ZS,meshmatcap_vert:JS,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:dM,shadow_frag:fM,sprite_vert:hM,sprite_frag:pM},be={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ei={basic:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:En([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:En([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:En([be.points,be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:En([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:En([be.common,be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:En([be.sprite,be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:En([be.common,be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:En([be.lights,be.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ei.physical={uniforms:En([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ll={r:0,b:0,g:0};function mM(r,e,t,s,a,l,d){const u=new We(0);let h=l===!0?0:1,m,v,_=null,S=0,M=null;function w(y,x){let D=!1,R=x.isScene===!0?x.background:null;R&&R.isTexture&&(R=(x.backgroundBlurriness>0?t:e).get(R)),R===null?A(u,h):R&&R.isColor&&(A(R,1),D=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||D)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Kl)?(v===void 0&&(v=new qi(new ia(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ro(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(X,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,v.material.toneMapped=Ct.getTransfer(R.colorSpace)!==It,(_!==R||S!==R.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,_=R,S=R.version,M=r.toneMapping),v.layers.enableAll(),y.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new qi(new ec(2,2),new Ai({name:"BackgroundMaterial",uniforms:ro(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||S!==R.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,_=R,S=R.version,M=r.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function A(y,x){y.getRGB(Ll,Fg(r)),s.buffers.color.setClear(Ll.r,Ll.g,Ll.b,x,d)}return{getClearColor:function(){return u},setClearColor:function(y,x=1){u.set(y),h=x,A(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,A(u,h)},render:w}}function gM(r,e,t,s){const a=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||l!==null,u={},h=y(null);let m=h,v=!1;function _(H,ie,j,ee,B){let Z=!1;if(d){const W=A(ee,j,ie);m!==W&&(m=W,M(m.object)),Z=x(H,ee,j,B),Z&&D(H,ee,j,B)}else{const W=ie.wireframe===!0;(m.geometry!==ee.id||m.program!==j.id||m.wireframe!==W)&&(m.geometry=ee.id,m.program=j.id,m.wireframe=W,Z=!0)}B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(Z||v)&&(v=!1,de(H,ie,j,ee),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function S(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function M(H){return s.isWebGL2?r.bindVertexArray(H):l.bindVertexArrayOES(H)}function w(H){return s.isWebGL2?r.deleteVertexArray(H):l.deleteVertexArrayOES(H)}function A(H,ie,j){const ee=j.wireframe===!0;let B=u[H.id];B===void 0&&(B={},u[H.id]=B);let Z=B[ie.id];Z===void 0&&(Z={},B[ie.id]=Z);let W=Z[ee];return W===void 0&&(W=y(S()),Z[ee]=W),W}function y(H){const ie=[],j=[],ee=[];for(let B=0;B<a;B++)ie[B]=0,j[B]=0,ee[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:j,attributeDivisors:ee,object:H,attributes:{},index:null}}function x(H,ie,j,ee){const B=m.attributes,Z=ie.attributes;let W=0;const L=j.getAttributes();for(const G in L)if(L[G].location>=0){const Y=B[G];let le=Z[G];if(le===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(le=H.instanceColor)),Y===void 0||Y.attribute!==le||le&&Y.data!==le.data)return!0;W++}return m.attributesNum!==W||m.index!==ee}function D(H,ie,j,ee){const B={},Z=ie.attributes;let W=0;const L=j.getAttributes();for(const G in L)if(L[G].location>=0){let Y=Z[G];Y===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor));const le={};le.attribute=Y,Y&&Y.data&&(le.data=Y.data),B[G]=le,W++}m.attributes=B,m.attributesNum=W,m.index=ee}function R(){const H=m.newAttributes;for(let ie=0,j=H.length;ie<j;ie++)H[ie]=0}function N(H){X(H,0)}function X(H,ie){const j=m.newAttributes,ee=m.enabledAttributes,B=m.attributeDivisors;j[H]=1,ee[H]===0&&(r.enableVertexAttribArray(H),ee[H]=1),B[H]!==ie&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,ie),B[H]=ie)}function k(){const H=m.newAttributes,ie=m.enabledAttributes;for(let j=0,ee=ie.length;j<ee;j++)ie[j]!==H[j]&&(r.disableVertexAttribArray(j),ie[j]=0)}function O(H,ie,j,ee,B,Z,W){W===!0?r.vertexAttribIPointer(H,ie,j,B,Z):r.vertexAttribPointer(H,ie,j,ee,B,Z)}function de(H,ie,j,ee){if(s.isWebGL2===!1&&(H.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const B=ee.attributes,Z=j.getAttributes(),W=ie.defaultAttributeValues;for(const L in Z){const G=Z[L];if(G.location>=0){let xe=B[L];if(xe===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(xe=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(xe=H.instanceColor)),xe!==void 0){const Y=xe.normalized,le=xe.itemSize,he=t.get(xe);if(he===void 0)continue;const Ae=he.buffer,ue=he.type,oe=he.bytesPerElement,Re=s.isWebGL2===!0&&(ue===r.INT||ue===r.UNSIGNED_INT||xe.gpuType===vg);if(xe.isInterleavedBufferAttribute){const ze=xe.data,q=ze.stride,mt=xe.offset;if(ze.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)X(G.location+Fe,ze.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)N(G.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Fe=0;Fe<G.locationSize;Fe++)O(G.location+Fe,le/G.locationSize,ue,Y,q*oe,(mt+le/G.locationSize*Fe)*oe,Re)}else{if(xe.isInstancedBufferAttribute){for(let ze=0;ze<G.locationSize;ze++)X(G.location+ze,xe.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<G.locationSize;ze++)N(G.location+ze);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let ze=0;ze<G.locationSize;ze++)O(G.location+ze,le/G.locationSize,ue,Y,le*oe,le/G.locationSize*ze*oe,Re)}}else if(W!==void 0){const Y=W[L];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(G.location,Y);break;case 3:r.vertexAttrib3fv(G.location,Y);break;case 4:r.vertexAttrib4fv(G.location,Y);break;default:r.vertexAttrib1fv(G.location,Y)}}}}k()}function pe(){ce();for(const H in u){const ie=u[H];for(const j in ie){const ee=ie[j];for(const B in ee)w(ee[B].object),delete ee[B];delete ie[j]}delete u[H]}}function T(H){if(u[H.id]===void 0)return;const ie=u[H.id];for(const j in ie){const ee=ie[j];for(const B in ee)w(ee[B].object),delete ee[B];delete ie[j]}delete u[H.id]}function F(H){for(const ie in u){const j=u[ie];if(j[H.id]===void 0)continue;const ee=j[H.id];for(const B in ee)w(ee[B].object),delete ee[B];delete j[H.id]}}function ce(){fe(),v=!0,m!==h&&(m=h,M(m.object))}function fe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:_,reset:ce,resetDefaultState:fe,dispose:pe,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:N,disableUnusedAttributes:k}}function vM(r,e,t,s){const a=s.isWebGL2;let l;function d(v){l=v}function u(v,_){r.drawArrays(l,v,_),t.update(_,l,1)}function h(v,_,S){if(S===0)return;let M,w;if(a)M=r,w="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[w](l,v,_,S),t.update(_,l,S)}function m(v,_,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<S;w++)this.render(v[w],_[w]);else{M.multiDrawArraysWEBGL(l,v,0,_,0,S);let w=0;for(let A=0;A<S;A++)w+=_[A];t.update(w,l,1)}}this.setMode=d,this.render=u,this.renderInstances=h,this.renderMultiDraw=m}function _M(r,e,t){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=d||e.has("WEBGL_draw_buffers"),v=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=S>0,N=d||e.has("OES_texture_float"),X=R&&N,k=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:v,maxTextures:_,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:w,maxAttributes:A,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:D,vertexTextures:R,floatFragmentTextures:N,floatVertexTextures:X,maxSamples:k}}function xM(r){const e=this;let t=null,s=0,a=!1,l=!1;const d=new qr,u=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||a;return a=S,s=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,S){t=v(_,S,0)},this.setState=function(_,S,M){const w=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!a||w===null||w.length===0||l&&!y)l?v(null):m();else{const D=l?0:s,R=D*4;let N=x.clippingState||null;h.value=N,N=v(w,S,R,M);for(let X=0;X!==R;++X)N[X]=t[X];x.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,S,M,w){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=h.value,w!==!0||y===null){const x=M+A*4,D=S.matrixWorldInverse;u.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let R=0,N=M;R!==A;++R,N+=4)d.copy(_[R]).applyMatrix4(D,u),d.normal.toArray(y,N),y[N+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function yM(r){let e=new WeakMap;function t(d,u){return u===Ad?d.mapping=to:u===bd&&(d.mapping=no),d}function s(d){if(d&&d.isTexture){const u=d.mapping;if(u===Ad||u===bd)if(e.has(d)){const h=e.get(d).texture;return t(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new Nx(h.height);return m.fromEquirectangularTexture(r,d),e.set(d,m),d.addEventListener("dispose",a),t(m.texture,d.mapping)}else return null}}return d}function a(d){const u=d.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class SM extends Og{constructor(e=-1,t=1,s=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,d=s+e,u=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,u-=v*this.view.offsetY,h=u-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,Cm=[.125,.215,.35,.446,.526,.582],Kr=20,dd=new SM,Pm=new We;let fd=null,hd=0,pd=0;const Yr=(1+Math.sqrt(5))/2,Ws=1/Yr,Lm=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,Yr,Ws),new $(0,Yr,-Ws),new $(Ws,0,Yr),new $(-Ws,0,Yr),new $(Yr,Ws,0),new $(-Yr,Ws,0)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,hd,pd),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Jo,format:hi,colorSpace:Yi,depthBuffer:!1},a=Dm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(l)),this._blurMaterial=EM(l,e,t)}return a}_compileMaterial(e){const t=new qi(this._lodPlanes[0],e);this._renderer.compile(t,dd)}_sceneToCubeUV(e,t,s,a){const u=new ei(90,1,t,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(Pm),v.toneMapping=Tr,v.autoClear=!1;const M=new Dg({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),w=new qi(new ia,M);let A=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,A=!0):(M.color.copy(Pm),A=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(u.up.set(0,h[x],0),u.lookAt(m[x],0,0)):D===1?(u.up.set(0,0,h[x]),u.lookAt(0,m[x],0)):(u.up.set(0,h[x],0),u.lookAt(0,0,m[x]));const R=this._cubeSize;Nl(a,D*R,x>2?R:0,R,R),v.setRenderTarget(a),A&&v.render(w,u),v.render(e,u)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===to||e.mapping===no;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new qi(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;Nl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(d,dd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Lm[(a-1)%Lm.length];this._blur(e,a-1,a,l,d)}t.autoClear=s}_blur(e,t,s,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,s,a,"latitudinal",l),this._halfBlur(d,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,d,u){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new qi(this._lodPlanes[a],m),S=m.uniforms,M=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Kr-1),A=l/w,y=isFinite(l)?1+Math.floor(v*A):Kr;y>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const x=[];let D=0;for(let O=0;O<Kr;++O){const de=O/A,pe=Math.exp(-de*de/2);x.push(pe),O===0?D+=pe:O<y&&(D+=2*pe)}for(let O=0;O<x.length;O++)x[O]=x[O]/D;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",u&&(S.poleAxis.value=u);const{_lodMax:R}=this;S.dTheta.value=w,S.mipInt.value=R-s;const N=this._sizeLods[a],X=3*N*(a>R-$s?a-R+$s:0),k=4*(this._cubeSize-N);Nl(t,X,k,3*N,2*N),h.setRenderTarget(t),h.render(_,dd)}}function MM(r){const e=[],t=[],s=[];let a=r;const l=r-$s+1+Cm.length;for(let d=0;d<l;d++){const u=Math.pow(2,a);t.push(u);let h=1/u;d>r-$s?h=Cm[d-r+$s-1]:d===0&&(h=0),s.push(h);const m=1/(u-2),v=-m,_=1+m,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,w=6,A=3,y=2,x=1,D=new Float32Array(A*w*M),R=new Float32Array(y*w*M),N=new Float32Array(x*w*M);for(let k=0;k<M;k++){const O=k%3*2/3-1,de=k>2?0:-1,pe=[O,de,0,O+2/3,de,0,O+2/3,de+1,0,O,de,0,O+2/3,de+1,0,O,de+1,0];D.set(pe,A*w*k),R.set(S,y*w*k);const T=[k,k,k,k,k,k];N.set(T,x*w*k)}const X=new mi;X.setAttribute("position",new pi(D,A)),X.setAttribute("uv",new pi(R,y)),X.setAttribute("faceIndex",new pi(N,x)),e.push(X),a>$s&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Dm(r,e,t){const s=new is(r,e,t);return s.texture.mapping=Kl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function EM(r,e,t){const s=new Float32Array(Kr),a=new $(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Im(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Um(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function wM(r){let e=new WeakMap,t=null;function s(u){if(u&&u.isTexture){const h=u.mapping,m=h===Ad||h===bd,v=h===to||h===no;if(m||v)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let _=e.get(u);return t===null&&(t=new Nm(r)),_=m?t.fromEquirectangular(u,_):t.fromCubemap(u,_),e.set(u,_),_.texture}else{if(e.has(u))return e.get(u).texture;{const _=u.image;if(m&&_&&_.height>0||v&&_&&a(_)){t===null&&(t=new Nm(r));const S=m?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,S),u.addEventListener("dispose",l),S.texture}else return null}}}return u}function a(u){let h=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&h++;return h===m}function l(u){const h=u.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:d}}function TM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const a=t(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function AM(r,e,t,s){const a={},l=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);for(const w in S.morphAttributes){const A=S.morphAttributes[w];for(let y=0,x=A.length;y<x;y++)e.remove(A[y])}S.removeEventListener("dispose",d),delete a[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function u(_,S){return a[S.id]===!0||(S.addEventListener("dispose",d),a[S.id]=!0,t.memory.geometries++),S}function h(_){const S=_.attributes;for(const w in S)e.update(S[w],r.ARRAY_BUFFER);const M=_.morphAttributes;for(const w in M){const A=M[w];for(let y=0,x=A.length;y<x;y++)e.update(A[y],r.ARRAY_BUFFER)}}function m(_){const S=[],M=_.index,w=_.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let R=0,N=D.length;R<N;R+=3){const X=D[R+0],k=D[R+1],O=D[R+2];S.push(X,k,k,O,O,X)}}else if(w!==void 0){const D=w.array;A=w.version;for(let R=0,N=D.length/3-1;R<N;R+=3){const X=R+0,k=R+1,O=R+2;S.push(X,k,k,O,O,X)}}else return;const y=new(Ag(S)?Ug:Ig)(S,1);y.version=A;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const S=l.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:u,update:h,getWireframeAttribute:v}}function bM(r,e,t,s){const a=s.isWebGL2;let l;function d(M){l=M}let u,h;function m(M){u=M.type,h=M.bytesPerElement}function v(M,w){r.drawElements(l,w,u,M*h),t.update(w,l,1)}function _(M,w,A){if(A===0)return;let y,x;if(a)y=r,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](l,w,u,M*h,A),t.update(w,l,A)}function S(M,w,A){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<A;x++)this.render(M[x]/h,w[x]);else{y.multiDrawElementsWEBGL(l,w,0,u,M,0,A);let x=0;for(let D=0;D<A;D++)x+=w[D];t.update(x,l,1)}}this.setMode=d,this.setIndex=m,this.render=v,this.renderInstances=_,this.renderMultiDraw=S}function RM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,u){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=u*(l/3);break;case r.LINES:t.lines+=u*(l/2);break;case r.LINE_STRIP:t.lines+=u*(l-1);break;case r.LINE_LOOP:t.lines+=u*l;break;case r.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function CM(r,e){return r[0]-e[0]}function PM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function LM(r,e,t){const s={},a=new Float32Array(8),l=new WeakMap,d=new an,u=[];for(let m=0;m<8;m++)u[m]=[m,0];function h(m,v,_){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,A=w!==void 0?w.length:0;let y=l.get(v);if(y===void 0||y.count!==A){let ie=function(){fe.dispose(),l.delete(v),v.removeEventListener("dispose",ie)};var M=ie;y!==void 0&&y.texture.dispose();const R=v.morphAttributes.position!==void 0,N=v.morphAttributes.normal!==void 0,X=v.morphAttributes.color!==void 0,k=v.morphAttributes.position||[],O=v.morphAttributes.normal||[],de=v.morphAttributes.color||[];let pe=0;R===!0&&(pe=1),N===!0&&(pe=2),X===!0&&(pe=3);let T=v.attributes.position.count*pe,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ce=new Float32Array(T*F*4*A),fe=new Cg(ce,T,F,A);fe.type=Wi,fe.needsUpdate=!0;const H=pe*4;for(let j=0;j<A;j++){const ee=k[j],B=O[j],Z=de[j],W=T*F*4*j;for(let L=0;L<ee.count;L++){const G=L*H;R===!0&&(d.fromBufferAttribute(ee,L),ce[W+G+0]=d.x,ce[W+G+1]=d.y,ce[W+G+2]=d.z,ce[W+G+3]=0),N===!0&&(d.fromBufferAttribute(B,L),ce[W+G+4]=d.x,ce[W+G+5]=d.y,ce[W+G+6]=d.z,ce[W+G+7]=0),X===!0&&(d.fromBufferAttribute(Z,L),ce[W+G+8]=d.x,ce[W+G+9]=d.y,ce[W+G+10]=d.z,ce[W+G+11]=Z.itemSize===4?d.w:1)}}y={count:A,texture:fe,size:new wt(T,F)},l.set(v,y),v.addEventListener("dispose",ie)}let x=0;for(let R=0;R<S.length;R++)x+=S[R];const D=v.morphTargetsRelative?1:1-x;_.getUniforms().setValue(r,"morphTargetBaseInfluence",D),_.getUniforms().setValue(r,"morphTargetInfluences",S),_.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const w=S===void 0?0:S.length;let A=s[v.id];if(A===void 0||A.length!==w){A=[];for(let N=0;N<w;N++)A[N]=[N,0];s[v.id]=A}for(let N=0;N<w;N++){const X=A[N];X[0]=N,X[1]=S[N]}A.sort(PM);for(let N=0;N<8;N++)N<w&&A[N][1]?(u[N][0]=A[N][0],u[N][1]=A[N][1]):(u[N][0]=Number.MAX_SAFE_INTEGER,u[N][1]=0);u.sort(CM);const y=v.morphAttributes.position,x=v.morphAttributes.normal;let D=0;for(let N=0;N<8;N++){const X=u[N],k=X[0],O=X[1];k!==Number.MAX_SAFE_INTEGER&&O?(y&&v.getAttribute("morphTarget"+N)!==y[k]&&v.setAttribute("morphTarget"+N,y[k]),x&&v.getAttribute("morphNormal"+N)!==x[k]&&v.setAttribute("morphNormal"+N,x[k]),a[N]=O,D+=O):(y&&v.hasAttribute("morphTarget"+N)===!0&&v.deleteAttribute("morphTarget"+N),x&&v.hasAttribute("morphNormal"+N)===!0&&v.deleteAttribute("morphNormal"+N),a[N]=0)}const R=v.morphTargetsRelative?1:1-D;_.getUniforms().setValue(r,"morphTargetBaseInfluence",R),_.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:h}}function NM(r,e,t,s){let a=new WeakMap;function l(h){const m=s.render.frame,v=h.geometry,_=e.get(h,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==m&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==m&&(S.update(),a.set(S,m))}return _}function d(){a=new WeakMap}function u(h){const m=h.target;m.removeEventListener("dispose",u),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}class Hg extends kn{constructor(e,t,s,a,l,d,u,h,m,v){if(v=v!==void 0?v:es,v!==es&&v!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===es&&(s=Er),s===void 0&&v===io&&(s=Jr),super(null,a,l,d,u,h,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:wn,this.minFilter=h!==void 0?h:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gg=new kn,Vg=new Hg(1,1);Vg.compareFunction=Tg;const jg=new Cg,Wg=new mx,Xg=new kg,Fm=[],Om=[],km=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function ao(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Fm[a];if(l===void 0&&(l=new Float32Array(a),Fm[a]=l),e!==0){s.toArray(l,0);for(let d=1,u=0;d!==e;++d)u+=t,r[d].toArray(l,u)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function tc(r,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function DM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function OM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Qt(t,s))return;Bm.set(s),r.uniformMatrix2fv(this.addr,!1,Bm),Zt(t,s)}}function kM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Qt(t,s))return;zm.set(s),r.uniformMatrix3fv(this.addr,!1,zm),Zt(t,s)}}function zM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Qt(t,s))return;km.set(s),r.uniformMatrix4fv(this.addr,!1,km),Zt(t,s)}}function BM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function jM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function WM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function YM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);const l=this.type===r.SAMPLER_2D_SHADOW?Vg:Gg;t.setTexture2D(e||l,a)}function $M(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Wg,a)}function KM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Xg,a)}function QM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||jg,a)}function ZM(r){switch(r){case 5126:return DM;case 35664:return IM;case 35665:return UM;case 35666:return FM;case 35674:return OM;case 35675:return kM;case 35676:return zM;case 5124:case 35670:return BM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return VM;case 5125:return jM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return QM}}function JM(r,e){r.uniform1fv(this.addr,e)}function e1(r,e){const t=ao(e,this.size,2);r.uniform2fv(this.addr,t)}function t1(r,e){const t=ao(e,this.size,3);r.uniform3fv(this.addr,t)}function n1(r,e){const t=ao(e,this.size,4);r.uniform4fv(this.addr,t)}function i1(r,e){const t=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function r1(r,e){const t=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function s1(r,e){const t=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function o1(r,e){r.uniform1iv(this.addr,e)}function a1(r,e){r.uniform2iv(this.addr,e)}function l1(r,e){r.uniform3iv(this.addr,e)}function c1(r,e){r.uniform4iv(this.addr,e)}function u1(r,e){r.uniform1uiv(this.addr,e)}function d1(r,e){r.uniform2uiv(this.addr,e)}function f1(r,e){r.uniform3uiv(this.addr,e)}function h1(r,e){r.uniform4uiv(this.addr,e)}function p1(r,e,t){const s=this.cache,a=e.length,l=tc(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let d=0;d!==a;++d)t.setTexture2D(e[d]||Gg,l[d])}function m1(r,e,t){const s=this.cache,a=e.length,l=tc(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let d=0;d!==a;++d)t.setTexture3D(e[d]||Wg,l[d])}function g1(r,e,t){const s=this.cache,a=e.length,l=tc(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let d=0;d!==a;++d)t.setTextureCube(e[d]||Xg,l[d])}function v1(r,e,t){const s=this.cache,a=e.length,l=tc(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Zt(s,l));for(let d=0;d!==a;++d)t.setTexture2DArray(e[d]||jg,l[d])}function _1(r){switch(r){case 5126:return JM;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return v1}}class x1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=ZM(t.type)}}class y1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_1(t.type)}}class S1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const u=a[l];u.setValue(e,t[u.id],s)}}}const md=/(\w+)(\])?(\[|\.)?/g;function Hm(r,e){r.seq.push(e),r.map[e.id]=e}function M1(r,e,t){const s=r.name,a=s.length;for(md.lastIndex=0;;){const l=md.exec(s),d=md.lastIndex;let u=l[1];const h=l[2]==="]",m=l[3];if(h&&(u=u|0),m===void 0||m==="["&&d+2===a){Hm(t,m===void 0?new x1(u,r,e):new y1(u,r,e));break}else{let _=t.map[u];_===void 0&&(_=new S1(u),Hm(t,_)),t=_}}}class Gl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),d=e.getUniformLocation(t,l.name);M1(l,d,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,d=t.length;l!==d;++l){const u=t[l],h=s[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in t&&s.push(d)}return s}}function Gm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const E1=37297;let w1=0;function T1(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=a;d<l;d++){const u=d+1;s.push(`${u===e?">":" "} ${u}: ${t[d]}`)}return s.join(`
`)}function A1(r){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(r);let s;switch(e===t?s="":e===ql&&t===Xl?s="LinearDisplayP3ToLinearSRGB":e===Xl&&t===ql&&(s="LinearSRGBToLinearDisplayP3"),r){case Yi:case Ql:return[s,"LinearTransferOETF"];case on:case jd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Vm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+T1(r.getShaderSource(e),d)}else return a}function b1(r,e){const t=A1(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function R1(r,e){let t;switch(e){case z_:t="Linear";break;case B_:t="Reinhard";break;case H_:t="OptimizedCineon";break;case mg:t="ACESFilmic";break;case V_:t="AgX";break;case G_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function C1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function P1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function L1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function N1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),d=l.name;let u=1;l.type===r.FLOAT_MAT2&&(u=2),l.type===r.FLOAT_MAT3&&(u=3),l.type===r.FLOAT_MAT4&&(u=4),t[d]={type:l.type,location:r.getAttribLocation(e,d),locationSize:u}}return t}function Ks(r){return r!==""}function jm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(r){return r.replace(D1,U1)}const I1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function U1(r,e){let t=dt[e];if(t===void 0){const s=I1.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(r){return r.replace(F1,O1)}function O1(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function qm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function k1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function z1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function H1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pg:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case k_:e="ENVMAP_BLENDING_ADD";break}return e}function G1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function V1(r,e,t,s){const a=r.getContext(),l=t.defines;let d=t.vertexShader,u=t.fragmentShader;const h=k1(t),m=z1(t),v=B1(t),_=H1(t),S=G1(t),M=t.isWebGL2?"":C1(t),w=P1(t),A=L1(l),y=a.createProgram();let x,D,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ks).join(`
`),x.length>0&&(x+=`
`),D=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ks).join(`
`),D.length>0&&(D+=`
`)):(x=[qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),D=[M,qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?dt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?R1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),d=Dd(d),d=jm(d,t),d=Wm(d,t),u=Dd(u),u=jm(u,t),u=Wm(u,t),d=Xm(d),u=Xm(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const N=R+x+d,X=R+D+u,k=Gm(a,a.VERTEX_SHADER,N),O=Gm(a,a.FRAGMENT_SHADER,X);a.attachShader(y,k),a.attachShader(y,O),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function de(ce){if(r.debug.checkShaderErrors){const fe=a.getProgramInfoLog(y).trim(),H=a.getShaderInfoLog(k).trim(),ie=a.getShaderInfoLog(O).trim();let j=!0,ee=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,y,k,O);else{const B=Vm(a,k,"vertex"),Z=Vm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+ce.name+`
Material Type: `+ce.type+`

Program Info Log: `+fe+`
`+B+`
`+Z)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(H===""||ie==="")&&(ee=!1);ee&&(ce.diagnostics={runnable:j,programLog:fe,vertexShader:{log:H,prefix:x},fragmentShader:{log:ie,prefix:D}})}a.deleteShader(k),a.deleteShader(O),pe=new Gl(a,y),T=N1(a,y)}let pe;this.getUniforms=function(){return pe===void 0&&de(this),pe};let T;this.getAttributes=function(){return T===void 0&&de(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=a.getProgramParameter(y,E1)),F},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=k,this.fragmentShader=O,this}let j1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new X1(e),t.set(e,s)),s}}class X1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function q1(r,e,t,s,a,l,d){const u=new Lg,h=new W1,m=new Set,v=[],_=a.isWebGL2,S=a.logarithmicDepthBuffer,M=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return m.add(T),T===0?"uv":`uv${T}`}function x(T,F,ce,fe,H){const ie=fe.fog,j=H.geometry,ee=T.isMeshStandardMaterial?fe.environment:null,B=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),Z=B&&B.mapping===Kl?B.image.height:null,W=A[T.type];T.precision!==null&&(w=a.getMaxPrecision(T.precision),w!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",w,"instead."));const L=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,G=L!==void 0?L.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let Y,le,he,Ae;if(W){const bt=Ei[W];Y=bt.vertexShader,le=bt.fragmentShader}else Y=T.vertexShader,le=T.fragmentShader,h.update(T),he=h.getVertexShaderID(T),Ae=h.getFragmentShaderID(T);const ue=r.getRenderTarget(),oe=H.isInstancedMesh===!0,Re=H.isBatchedMesh===!0,ze=!!T.map,q=!!T.matcap,mt=!!B,Fe=!!T.aoMap,qe=!!T.lightMap,Ie=!!T.bumpMap,tt=!!T.normalMap,$e=!!T.displacementMap,C=!!T.emissiveMap,b=!!T.metalnessMap,te=!!T.roughnessMap,Se=T.anisotropy>0,_e=T.clearcoat>0,Me=T.iridescence>0,Ve=T.sheen>0,Ce=T.transmission>0,Oe=Se&&!!T.anisotropyMap,Qe=_e&&!!T.clearcoatMap,at=_e&&!!T.clearcoatNormalMap,ve=_e&&!!T.clearcoatRoughnessMap,gt=Me&&!!T.iridescenceMap,ft=Me&&!!T.iridescenceThicknessMap,it=Ve&&!!T.sheenColorMap,Ye=Ve&&!!T.sheenRoughnessMap,Be=!!T.specularMap,st=!!T.specularColorMap,xt=!!T.specularIntensityMap,At=Ce&&!!T.transmissionMap,ct=Ce&&!!T.thicknessMap,Tt=!!T.gradientMap,U=!!T.alphaMap,Ee=T.alphaTest>0,Te=!!T.alphaHash,Ge=!!T.extensions;let Ke=Tr;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const St={isWebGL2:_,shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:Y,fragmentShader:le,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:w,batching:Re,instancing:oe,instancingColor:oe&&H.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Yi,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:q,envMap:mt,envMapMode:mt&&B.mapping,envMapCubeUVHeight:Z,aoMap:Fe,lightMap:qe,bumpMap:Ie,normalMap:tt,displacementMap:M&&$e,emissiveMap:C,normalMapObjectSpace:tt&&T.normalMapType===tx,normalMapTangentSpace:tt&&T.normalMapType===ex,metalnessMap:b,roughnessMap:te,anisotropy:Se,anisotropyMap:Oe,clearcoat:_e,clearcoatMap:Qe,clearcoatNormalMap:at,clearcoatRoughnessMap:ve,iridescence:Me,iridescenceMap:gt,iridescenceThicknessMap:ft,sheen:Ve,sheenColorMap:it,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:st,specularIntensityMap:xt,transmission:Ce,transmissionMap:At,thicknessMap:ct,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Qs&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:Ee,alphaHash:Te,combine:T.combine,mapUv:ze&&y(T.map.channel),aoMapUv:Fe&&y(T.aoMap.channel),lightMapUv:qe&&y(T.lightMap.channel),bumpMapUv:Ie&&y(T.bumpMap.channel),normalMapUv:tt&&y(T.normalMap.channel),displacementMapUv:$e&&y(T.displacementMap.channel),emissiveMapUv:C&&y(T.emissiveMap.channel),metalnessMapUv:b&&y(T.metalnessMap.channel),roughnessMapUv:te&&y(T.roughnessMap.channel),anisotropyMapUv:Oe&&y(T.anisotropyMap.channel),clearcoatMapUv:Qe&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:at&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&y(T.sheenRoughnessMap.channel),specularMapUv:Be&&y(T.specularMap.channel),specularColorMapUv:st&&y(T.specularColorMap.channel),specularIntensityMapUv:xt&&y(T.specularIntensityMap.channel),transmissionMapUv:At&&y(T.transmissionMap.channel),thicknessMapUv:ct&&y(T.thicknessMap.channel),alphaMapUv:U&&y(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(tt||Se),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ze||U),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:xe,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ce.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ji,flipSided:T.side===On,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ge&&T.extensions.derivatives===!0,extensionFragDepth:Ge&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ge&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ge&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&T.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return St.vertexUv1s=m.has(1),St.vertexUv2s=m.has(2),St.vertexUv3s=m.has(3),m.clear(),St}function D(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)F.push(ce),F.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(R(F,T),N(F,T),F.push(r.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function R(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function N(T,F){u.disableAll(),F.isWebGL2&&u.enable(0),F.supportsVertexTextures&&u.enable(1),F.instancing&&u.enable(2),F.instancingColor&&u.enable(3),F.matcap&&u.enable(4),F.envMap&&u.enable(5),F.normalMapObjectSpace&&u.enable(6),F.normalMapTangentSpace&&u.enable(7),F.clearcoat&&u.enable(8),F.iridescence&&u.enable(9),F.alphaTest&&u.enable(10),F.vertexColors&&u.enable(11),F.vertexAlphas&&u.enable(12),F.vertexUv1s&&u.enable(13),F.vertexUv2s&&u.enable(14),F.vertexUv3s&&u.enable(15),F.vertexTangents&&u.enable(16),F.anisotropy&&u.enable(17),F.alphaHash&&u.enable(18),F.batching&&u.enable(19),T.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.skinning&&u.enable(4),F.morphTargets&&u.enable(5),F.morphNormals&&u.enable(6),F.morphColors&&u.enable(7),F.premultipliedAlpha&&u.enable(8),F.shadowMapEnabled&&u.enable(9),F.useLegacyLights&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.transmission&&u.enable(15),F.sheen&&u.enable(16),F.opaque&&u.enable(17),F.pointsUvs&&u.enable(18),F.decodeVideoTexture&&u.enable(19),F.alphaToCoverage&&u.enable(20),T.push(u.mask)}function X(T){const F=A[T.type];let ce;if(F){const fe=Ei[F];ce=Rx.clone(fe.uniforms)}else ce=T.uniforms;return ce}function k(T,F){let ce;for(let fe=0,H=v.length;fe<H;fe++){const ie=v[fe];if(ie.cacheKey===F){ce=ie,++ce.usedTimes;break}}return ce===void 0&&(ce=new V1(r,F,T,l),v.push(ce)),ce}function O(T){if(--T.usedTimes===0){const F=v.indexOf(T);v[F]=v[v.length-1],v.pop(),T.destroy()}}function de(T){h.remove(T)}function pe(){h.dispose()}return{getParameters:x,getProgramCacheKey:D,getUniforms:X,acquireProgram:k,releaseProgram:O,releaseShaderCache:de,programs:v,dispose:pe}}function Y1(){let r=new WeakMap;function e(l){let d=r.get(l);return d===void 0&&(d={},r.set(l,d)),d}function t(l){r.delete(l)}function s(l,d,u){r.get(l)[d]=u}function a(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function $1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $m(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function d(_,S,M,w,A,y){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:w,renderOrder:_.renderOrder,z:A,group:y},r[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=w,x.renderOrder=_.renderOrder,x.z=A,x.group=y),e++,x}function u(_,S,M,w,A,y){const x=d(_,S,M,w,A,y);M.transmission>0?s.push(x):M.transparent===!0?a.push(x):t.push(x)}function h(_,S,M,w,A,y){const x=d(_,S,M,w,A,y);M.transmission>0?s.unshift(x):M.transparent===!0?a.unshift(x):t.unshift(x)}function m(_,S){t.length>1&&t.sort(_||$1),s.length>1&&s.sort(S||Ym),a.length>1&&a.sort(S||Ym)}function v(){for(let _=e,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:u,unshift:h,finish:v,sort:m}}function K1(){let r=new WeakMap;function e(s,a){const l=r.get(s);let d;return l===void 0?(d=new $m,r.set(s,[d])):a>=l.length?(d=new $m,l.push(d)):d=l[a],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function Q1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new We};break;case"SpotLight":t={position:new $,direction:new $,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function Z1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let J1=0;function eE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tE(r,e){const t=new Q1,s=Z1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)a.probe.push(new $);const l=new $,d=new Kt,u=new Kt;function h(v,_){let S=0,M=0,w=0;for(let ce=0;ce<9;ce++)a.probe[ce].set(0,0,0);let A=0,y=0,x=0,D=0,R=0,N=0,X=0,k=0,O=0,de=0,pe=0;v.sort(eE);const T=_===!0?Math.PI:1;for(let ce=0,fe=v.length;ce<fe;ce++){const H=v[ce],ie=H.color,j=H.intensity,ee=H.distance,B=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)S+=ie.r*j*T,M+=ie.g*j*T,w+=ie.b*j*T;else if(H.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(H.sh.coefficients[Z],j);pe++}else if(H.isDirectionalLight){const Z=t.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const W=H.shadow,L=s.get(H);L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,a.directionalShadow[A]=L,a.directionalShadowMap[A]=B,a.directionalShadowMatrix[A]=H.shadow.matrix,N++}a.directional[A]=Z,A++}else if(H.isSpotLight){const Z=t.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(ie).multiplyScalar(j*T),Z.distance=ee,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,a.spot[x]=Z;const W=H.shadow;if(H.map&&(a.spotLightMap[O]=H.map,O++,W.updateMatrices(H),H.castShadow&&de++),a.spotLightMatrix[x]=W.matrix,H.castShadow){const L=s.get(H);L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,a.spotShadow[x]=L,a.spotShadowMap[x]=B,k++}x++}else if(H.isRectAreaLight){const Z=t.get(H);Z.color.copy(ie).multiplyScalar(j),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),a.rectArea[D]=Z,D++}else if(H.isPointLight){const Z=t.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*T),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const W=H.shadow,L=s.get(H);L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,a.pointShadow[y]=L,a.pointShadowMap[y]=B,a.pointShadowMatrix[y]=H.shadow.matrix,X++}a.point[y]=Z,y++}else if(H.isHemisphereLight){const Z=t.get(H);Z.skyColor.copy(H.color).multiplyScalar(j*T),Z.groundColor.copy(H.groundColor).multiplyScalar(j*T),a.hemi[R]=Z,R++}}D>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=be.LTC_FLOAT_1,a.rectAreaLTC2=be.LTC_FLOAT_2):(a.rectAreaLTC1=be.LTC_HALF_1,a.rectAreaLTC2=be.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=be.LTC_FLOAT_1,a.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=be.LTC_HALF_1,a.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=S,a.ambient[1]=M,a.ambient[2]=w;const F=a.hash;(F.directionalLength!==A||F.pointLength!==y||F.spotLength!==x||F.rectAreaLength!==D||F.hemiLength!==R||F.numDirectionalShadows!==N||F.numPointShadows!==X||F.numSpotShadows!==k||F.numSpotMaps!==O||F.numLightProbes!==pe)&&(a.directional.length=A,a.spot.length=x,a.rectArea.length=D,a.point.length=y,a.hemi.length=R,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=X,a.pointShadowMap.length=X,a.spotShadow.length=k,a.spotShadowMap.length=k,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=X,a.spotLightMatrix.length=k+O-de,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=pe,F.directionalLength=A,F.pointLength=y,F.spotLength=x,F.rectAreaLength=D,F.hemiLength=R,F.numDirectionalShadows=N,F.numPointShadows=X,F.numSpotShadows=k,F.numSpotMaps=O,F.numLightProbes=pe,a.version=J1++)}function m(v,_){let S=0,M=0,w=0,A=0,y=0;const x=_.matrixWorldInverse;for(let D=0,R=v.length;D<R;D++){const N=v[D];if(N.isDirectionalLight){const X=a.directional[S];X.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),X.direction.sub(l),X.direction.transformDirection(x),S++}else if(N.isSpotLight){const X=a.spot[w];X.position.setFromMatrixPosition(N.matrixWorld),X.position.applyMatrix4(x),X.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),X.direction.sub(l),X.direction.transformDirection(x),w++}else if(N.isRectAreaLight){const X=a.rectArea[A];X.position.setFromMatrixPosition(N.matrixWorld),X.position.applyMatrix4(x),u.identity(),d.copy(N.matrixWorld),d.premultiply(x),u.extractRotation(d),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),X.halfWidth.applyMatrix4(u),X.halfHeight.applyMatrix4(u),A++}else if(N.isPointLight){const X=a.point[M];X.position.setFromMatrixPosition(N.matrixWorld),X.position.applyMatrix4(x),M++}else if(N.isHemisphereLight){const X=a.hemi[y];X.direction.setFromMatrixPosition(N.matrixWorld),X.direction.transformDirection(x),y++}}}return{setup:h,setupView:m,state:a}}function Km(r,e){const t=new tE(r,e),s=[],a=[];function l(){s.length=0,a.length=0}function d(_){s.push(_)}function u(_){a.push(_)}function h(_){t.setup(s,_)}function m(_){t.setupView(s,_)}return{init:l,state:{lightsArray:s,shadowsArray:a,lights:t},setupLights:h,setupLightsView:m,pushLight:d,pushShadow:u}}function nE(r,e){let t=new WeakMap;function s(l,d=0){const u=t.get(l);let h;return u===void 0?(h=new Km(r,e),t.set(l,[h])):d>=u.length?(h=new Km(r,e),u.push(h)):h=u[d],h}function a(){t=new WeakMap}return{get:s,dispose:a}}class iE extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
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
}`;function aE(r,e,t){let s=new zg;const a=new wt,l=new wt,d=new an,u=new iE({depthPacking:J_}),h=new rE,m={},v=t.maxTextureSize,_={[br]:On,[On]:br,[ji]:ji},S=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:sE,fragmentShader:oE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const w=new mi;w.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new qi(w,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let x=this.type;this.render=function(k,O,de){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const pe=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(wr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const fe=x!==Vi&&this.type===Vi,H=x===Vi&&this.type!==Vi;for(let ie=0,j=k.length;ie<j;ie++){const ee=k[ie],B=ee.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const Z=B.getFrameExtents();if(a.multiply(Z),l.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/Z.x),a.x=l.x*Z.x,B.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/Z.y),a.y=l.y*Z.y,B.mapSize.y=l.y)),B.map===null||fe===!0||H===!0){const L=this.type!==Vi?{minFilter:wn,magFilter:wn}:{};B.map!==null&&B.map.dispose(),B.map=new is(a.x,a.y,L),B.map.texture.name=ee.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const W=B.getViewportCount();for(let L=0;L<W;L++){const G=B.getViewport(L);d.set(l.x*G.x,l.y*G.y,l.x*G.z,l.y*G.w),ce.viewport(d),B.updateMatrices(ee,L),s=B.getFrustum(),N(O,de,B.camera,ee,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&D(B,de),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(pe,T,F)};function D(k,O){const de=e.update(A);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new is(a.x,a.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(O,null,de,S,A,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(O,null,de,M,A,null)}function R(k,O,de,pe){let T=null;const F=de.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)T=F;else if(T=de.isPointLight===!0?h:u,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ce=T.uuid,fe=O.uuid;let H=m[ce];H===void 0&&(H={},m[ce]=H);let ie=H[fe];ie===void 0&&(ie=T.clone(),H[fe]=ie,O.addEventListener("dispose",X)),T=ie}if(T.visible=O.visible,T.wireframe=O.wireframe,pe===Vi?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:_[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,de.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ce=r.properties.get(T);ce.light=de}return T}function N(k,O,de,pe,T){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&T===Vi)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,k.matrixWorld);const fe=e.update(k),H=k.material;if(Array.isArray(H)){const ie=fe.groups;for(let j=0,ee=ie.length;j<ee;j++){const B=ie[j],Z=H[B.materialIndex];if(Z&&Z.visible){const W=R(k,Z,pe,T);k.onBeforeShadow(r,k,O,de,fe,W,B),r.renderBufferDirect(de,null,fe,W,k,B),k.onAfterShadow(r,k,O,de,fe,W,B)}}}else if(H.visible){const ie=R(k,H,pe,T);k.onBeforeShadow(r,k,O,de,fe,ie,null),r.renderBufferDirect(de,null,fe,ie,k,null),k.onAfterShadow(r,k,O,de,fe,ie,null)}}const ce=k.children;for(let fe=0,H=ce.length;fe<H;fe++)N(ce[fe],O,de,pe,T)}function X(k){k.target.removeEventListener("dispose",X);for(const de in m){const pe=m[de],T=k.target.uuid;T in pe&&(pe[T].dispose(),delete pe[T])}}}function lE(r,e,t){const s=t.isWebGL2;function a(){let U=!1;const Ee=new an;let Te=null;const Ge=new an(0,0,0,0);return{setMask:function(Ke){Te!==Ke&&!U&&(r.colorMask(Ke,Ke,Ke,Ke),Te=Ke)},setLocked:function(Ke){U=Ke},setClear:function(Ke,St,bt,Gt,_n){_n===!0&&(Ke*=Gt,St*=Gt,bt*=Gt),Ee.set(Ke,St,bt,Gt),Ge.equals(Ee)===!1&&(r.clearColor(Ke,St,bt,Gt),Ge.copy(Ee))},reset:function(){U=!1,Te=null,Ge.set(-1,0,0,0)}}}function l(){let U=!1,Ee=null,Te=null,Ge=null;return{setTest:function(Ke){Ke?oe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Ke){Ee!==Ke&&!U&&(r.depthMask(Ke),Ee=Ke)},setFunc:function(Ke){if(Te!==Ke){switch(Ke){case P_:r.depthFunc(r.NEVER);break;case L_:r.depthFunc(r.ALWAYS);break;case N_:r.depthFunc(r.LESS);break;case jl:r.depthFunc(r.LEQUAL);break;case D_:r.depthFunc(r.EQUAL);break;case I_:r.depthFunc(r.GEQUAL);break;case U_:r.depthFunc(r.GREATER);break;case F_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=Ke}},setLocked:function(Ke){U=Ke},setClear:function(Ke){Ge!==Ke&&(r.clearDepth(Ke),Ge=Ke)},reset:function(){U=!1,Ee=null,Te=null,Ge=null}}}function d(){let U=!1,Ee=null,Te=null,Ge=null,Ke=null,St=null,bt=null,Gt=null,_n=null;return{setTest:function(Mt){U||(Mt?oe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Mt){Ee!==Mt&&!U&&(r.stencilMask(Mt),Ee=Mt)},setFunc:function(Mt,qt,ln){(Te!==Mt||Ge!==qt||Ke!==ln)&&(r.stencilFunc(Mt,qt,ln),Te=Mt,Ge=qt,Ke=ln)},setOp:function(Mt,qt,ln){(St!==Mt||bt!==qt||Gt!==ln)&&(r.stencilOp(Mt,qt,ln),St=Mt,bt=qt,Gt=ln)},setLocked:function(Mt){U=Mt},setClear:function(Mt){_n!==Mt&&(r.clearStencil(Mt),_n=Mt)},reset:function(){U=!1,Ee=null,Te=null,Ge=null,Ke=null,St=null,bt=null,Gt=null,_n=null}}}const u=new a,h=new l,m=new d,v=new WeakMap,_=new WeakMap;let S={},M={},w=new WeakMap,A=[],y=null,x=!1,D=null,R=null,N=null,X=null,k=null,O=null,de=null,pe=new We(0,0,0),T=0,F=!1,ce=null,fe=null,H=null,ie=null,j=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let L=null,G={};const xe=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),le=new an().fromArray(xe),he=new an().fromArray(Y);function Ae(U,Ee,Te,Ge){const Ke=new Uint8Array(4),St=r.createTexture();r.bindTexture(U,St),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<Te;bt++)s&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(Ee,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Ke):r.texImage2D(Ee+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ke);return St}const ue={};ue[r.TEXTURE_2D]=Ae(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=Ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(ue[r.TEXTURE_2D_ARRAY]=Ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=Ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),m.setClear(0),oe(r.DEPTH_TEST),h.setFunc(jl),$e(!1),C(Pp),oe(r.CULL_FACE),Ie(wr);function oe(U){S[U]!==!0&&(r.enable(U),S[U]=!0)}function Re(U){S[U]!==!1&&(r.disable(U),S[U]=!1)}function ze(U,Ee){return M[U]!==Ee?(r.bindFramebuffer(U,Ee),M[U]=Ee,s&&(U===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=Ee),U===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function q(U,Ee){let Te=A,Ge=!1;if(U)if(Te=w.get(Ee),Te===void 0&&(Te=[],w.set(Ee,Te)),U.isWebGLMultipleRenderTargets){const Ke=U.texture;if(Te.length!==Ke.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let St=0,bt=Ke.length;St<bt;St++)Te[St]=r.COLOR_ATTACHMENT0+St;Te.length=Ke.length,Ge=!0}}else Te[0]!==r.COLOR_ATTACHMENT0&&(Te[0]=r.COLOR_ATTACHMENT0,Ge=!0);else Te[0]!==r.BACK&&(Te[0]=r.BACK,Ge=!0);Ge&&(t.isWebGL2?r.drawBuffers(Te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function mt(U){return y!==U?(r.useProgram(U),y=U,!0):!1}const Fe={[$r]:r.FUNC_ADD,[m_]:r.FUNC_SUBTRACT,[g_]:r.FUNC_REVERSE_SUBTRACT};if(s)Fe[Dp]=r.MIN,Fe[Ip]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Fe[Dp]=U.MIN_EXT,Fe[Ip]=U.MAX_EXT)}const qe={[v_]:r.ZERO,[__]:r.ONE,[x_]:r.SRC_COLOR,[wd]:r.SRC_ALPHA,[T_]:r.SRC_ALPHA_SATURATE,[E_]:r.DST_COLOR,[S_]:r.DST_ALPHA,[y_]:r.ONE_MINUS_SRC_COLOR,[Td]:r.ONE_MINUS_SRC_ALPHA,[w_]:r.ONE_MINUS_DST_COLOR,[M_]:r.ONE_MINUS_DST_ALPHA,[A_]:r.CONSTANT_COLOR,[b_]:r.ONE_MINUS_CONSTANT_COLOR,[R_]:r.CONSTANT_ALPHA,[C_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(U,Ee,Te,Ge,Ke,St,bt,Gt,_n,Mt){if(U===wr){x===!0&&(Re(r.BLEND),x=!1);return}if(x===!1&&(oe(r.BLEND),x=!0),U!==p_){if(U!==D||Mt!==F){if((R!==$r||k!==$r)&&(r.blendEquation(r.FUNC_ADD),R=$r,k=$r),Mt)switch(U){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zo:r.blendFunc(r.ONE,r.ONE);break;case Lp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Np:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Lp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Np:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}N=null,X=null,O=null,de=null,pe.set(0,0,0),T=0,D=U,F=Mt}return}Ke=Ke||Ee,St=St||Te,bt=bt||Ge,(Ee!==R||Ke!==k)&&(r.blendEquationSeparate(Fe[Ee],Fe[Ke]),R=Ee,k=Ke),(Te!==N||Ge!==X||St!==O||bt!==de)&&(r.blendFuncSeparate(qe[Te],qe[Ge],qe[St],qe[bt]),N=Te,X=Ge,O=St,de=bt),(Gt.equals(pe)===!1||_n!==T)&&(r.blendColor(Gt.r,Gt.g,Gt.b,_n),pe.copy(Gt),T=_n),D=U,F=!1}function tt(U,Ee){U.side===ji?Re(r.CULL_FACE):oe(r.CULL_FACE);let Te=U.side===On;Ee&&(Te=!Te),$e(Te),U.blending===Qs&&U.transparent===!1?Ie(wr):Ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),h.setFunc(U.depthFunc),h.setTest(U.depthTest),h.setMask(U.depthWrite),u.setMask(U.colorWrite);const Ge=U.stencilWrite;m.setTest(Ge),Ge&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){ce!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),ce=U)}function C(U){U!==d_?(oe(r.CULL_FACE),U!==fe&&(U===Pp?r.cullFace(r.BACK):U===f_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),fe=U}function b(U){U!==H&&(B&&r.lineWidth(U),H=U)}function te(U,Ee,Te){U?(oe(r.POLYGON_OFFSET_FILL),(ie!==Ee||j!==Te)&&(r.polygonOffset(Ee,Te),ie=Ee,j=Te)):Re(r.POLYGON_OFFSET_FILL)}function Se(U){U?oe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function _e(U){U===void 0&&(U=r.TEXTURE0+ee-1),L!==U&&(r.activeTexture(U),L=U)}function Me(U,Ee,Te){Te===void 0&&(L===null?Te=r.TEXTURE0+ee-1:Te=L);let Ge=G[Te];Ge===void 0&&(Ge={type:void 0,texture:void 0},G[Te]=Ge),(Ge.type!==U||Ge.texture!==Ee)&&(L!==Te&&(r.activeTexture(Te),L=Te),r.bindTexture(U,Ee||ue[U]),Ge.type=U,Ge.texture=Ee)}function Ve(){const U=G[L];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(U){le.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function xt(U){he.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function At(U,Ee){let Te=_.get(Ee);Te===void 0&&(Te=new WeakMap,_.set(Ee,Te));let Ge=Te.get(U);Ge===void 0&&(Ge=r.getUniformBlockIndex(Ee,U.name),Te.set(U,Ge))}function ct(U,Ee){const Ge=_.get(Ee).get(U);v.get(Ee)!==Ge&&(r.uniformBlockBinding(Ee,Ge,U.__bindingPointIndex),v.set(Ee,Ge))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},L=null,G={},M={},w=new WeakMap,A=[],y=null,x=!1,D=null,R=null,N=null,X=null,k=null,O=null,de=null,pe=new We(0,0,0),T=0,F=!1,ce=null,fe=null,H=null,ie=null,j=null,le.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),m.reset()}return{buffers:{color:u,depth:h,stencil:m},enable:oe,disable:Re,bindFramebuffer:ze,drawBuffers:q,useProgram:mt,setBlending:Ie,setMaterial:tt,setFlipSided:$e,setCullFace:C,setLineWidth:b,setPolygonOffset:te,setScissorTest:Se,activeTexture:_e,bindTexture:Me,unbindTexture:Ve,compressedTexImage2D:Ce,compressedTexImage3D:Oe,texImage2D:Ye,texImage3D:Be,updateUBOMapping:At,uniformBlockBinding:ct,texStorage2D:ft,texStorage3D:it,texSubImage2D:Qe,texSubImage3D:at,compressedTexSubImage2D:ve,compressedTexSubImage3D:gt,scissor:st,viewport:xt,reset:Tt}}function cE(r,e,t,s,a,l,d){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,b){return M?new OffscreenCanvas(C,b):$l("canvas")}function A(C,b,te,Se){let _e=1;if((C.width>Se||C.height>Se)&&(_e=Se/Math.max(C.width,C.height)),_e<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const Me=b?Nd:Math.floor,Ve=Me(_e*C.width),Ce=Me(_e*C.height);_===void 0&&(_=w(Ve,Ce));const Oe=te?w(Ve,Ce):_;return Oe.width=Ve,Oe.height=Ce,Oe.getContext("2d").drawImage(C,0,0,Ve,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ve+"x"+Ce+")."),Oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return um(C.width)&&um(C.height)}function x(C){return u?!1:C.wrapS!==fi||C.wrapT!==fi||C.minFilter!==wn&&C.minFilter!==Un}function D(C,b){return C.generateMipmaps&&b&&C.minFilter!==wn&&C.minFilter!==Un}function R(C){r.generateMipmap(C)}function N(C,b,te,Se,_e=!1){if(u===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Me=b;if(b===r.RED&&(te===r.FLOAT&&(Me=r.R32F),te===r.HALF_FLOAT&&(Me=r.R16F),te===r.UNSIGNED_BYTE&&(Me=r.R8)),b===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(Me=r.R8UI),te===r.UNSIGNED_SHORT&&(Me=r.R16UI),te===r.UNSIGNED_INT&&(Me=r.R32UI),te===r.BYTE&&(Me=r.R8I),te===r.SHORT&&(Me=r.R16I),te===r.INT&&(Me=r.R32I)),b===r.RG&&(te===r.FLOAT&&(Me=r.RG32F),te===r.HALF_FLOAT&&(Me=r.RG16F),te===r.UNSIGNED_BYTE&&(Me=r.RG8)),b===r.RGBA){const Ve=_e?Wl:Ct.getTransfer(Se);te===r.FLOAT&&(Me=r.RGBA32F),te===r.HALF_FLOAT&&(Me=r.RGBA16F),te===r.UNSIGNED_BYTE&&(Me=Ve===It?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(Me=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(Me=r.RGB5_A1)}return(Me===r.R16F||Me===r.R32F||Me===r.RG16F||Me===r.RG32F||Me===r.RGBA16F||Me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function X(C,b,te){return D(C,te)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function k(C){return C===wn||C===Up||C===jo?r.NEAREST:r.LINEAR}function O(C){const b=C.target;b.removeEventListener("dispose",O),pe(b),b.isVideoTexture&&v.delete(b)}function de(C){const b=C.target;b.removeEventListener("dispose",de),F(b)}function pe(C){const b=s.get(C);if(b.__webglInit===void 0)return;const te=C.source,Se=S.get(te);if(Se){const _e=Se[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(C),Object.keys(Se).length===0&&S.delete(te)}s.remove(C)}function T(C){const b=s.get(C);r.deleteTexture(b.__webglTexture);const te=C.source,Se=S.get(te);delete Se[b.__cacheKey],d.memory.textures--}function F(C){const b=C.texture,te=s.get(C),Se=s.get(b);if(Se.__webglTexture!==void 0&&(r.deleteTexture(Se.__webglTexture),d.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(te.__webglFramebuffer[_e]))for(let Me=0;Me<te.__webglFramebuffer[_e].length;Me++)r.deleteFramebuffer(te.__webglFramebuffer[_e][Me]);else r.deleteFramebuffer(te.__webglFramebuffer[_e]);te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[_e])}else{if(Array.isArray(te.__webglFramebuffer))for(let _e=0;_e<te.__webglFramebuffer.length;_e++)r.deleteFramebuffer(te.__webglFramebuffer[_e]);else r.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let _e=0;_e<te.__webglColorRenderbuffer.length;_e++)te.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(te.__webglColorRenderbuffer[_e]);te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let _e=0,Me=b.length;_e<Me;_e++){const Ve=s.get(b[_e]);Ve.__webglTexture&&(r.deleteTexture(Ve.__webglTexture),d.memory.textures--),s.remove(b[_e])}s.remove(b),s.remove(C)}let ce=0;function fe(){ce=0}function H(){const C=ce;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),ce+=1,C}function ie(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function j(C,b){const te=s.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&te.__version!==C.version){const Se=C.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(te,C,b);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+b)}function ee(C,b){const te=s.get(C);if(C.version>0&&te.__version!==C.version){le(te,C,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+b)}function B(C,b){const te=s.get(C);if(C.version>0&&te.__version!==C.version){le(te,C,b);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+b)}function Z(C,b){const te=s.get(C);if(C.version>0&&te.__version!==C.version){he(te,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+b)}const W={[Rd]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[Cd]:r.MIRRORED_REPEAT},L={[wn]:r.NEAREST,[Up]:r.NEAREST_MIPMAP_NEAREST,[jo]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Bu]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},G={[nx]:r.NEVER,[lx]:r.ALWAYS,[ix]:r.LESS,[Tg]:r.LEQUAL,[rx]:r.EQUAL,[ax]:r.GEQUAL,[sx]:r.GREATER,[ox]:r.NOTEQUAL};function xe(C,b,te){if(b.type===Wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===Bu||b.magFilter===jo||b.magFilter===Qr||b.minFilter===Un||b.minFilter===Bu||b.minFilter===jo||b.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(r.texParameteri(C,r.TEXTURE_WRAP_S,W[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,W[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,W[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[b.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==fi||b.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,k(b.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,k(b.minFilter)),b.minFilter!==wn&&b.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,G[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wn||b.minFilter!==jo&&b.minFilter!==Qr||b.type===Wi&&e.has("OES_texture_float_linear")===!1||u===!1&&b.type===Jo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||s.get(b).__currentAnisotropy)&&(r.texParameterf(C,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy)}}function Y(C,b){let te=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",O));const Se=b.source;let _e=S.get(Se);_e===void 0&&(_e={},S.set(Se,_e));const Me=ie(b);if(Me!==C.__cacheKey){_e[Me]===void 0&&(_e[Me]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,te=!0),_e[Me].usedTimes++;const Ve=_e[C.__cacheKey];Ve!==void 0&&(_e[C.__cacheKey].usedTimes--,Ve.usedTimes===0&&T(b)),C.__cacheKey=Me,C.__webglTexture=_e[Me].texture}return te}function le(C,b,te){let Se=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Se=r.TEXTURE_3D);const _e=Y(C,b),Me=b.source;t.bindTexture(Se,C.__webglTexture,r.TEXTURE0+te);const Ve=s.get(Me);if(Me.version!==Ve.__version||_e===!0){t.activeTexture(r.TEXTURE0+te);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Oe=b.colorSpace===ti?null:Ct.getPrimaries(b.colorSpace),Qe=b.colorSpace===ti||Ce===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const at=x(b)&&y(b.image)===!1;let ve=A(b.image,at,!1,a.maxTextureSize);ve=$e(b,ve);const gt=y(ve)||u,ft=l.convert(b.format,b.colorSpace);let it=l.convert(b.type),Ye=N(b.internalFormat,ft,it,b.colorSpace,b.isVideoTexture);xe(Se,b,gt);let Be;const st=b.mipmaps,xt=u&&b.isVideoTexture!==!0&&Ye!==Eg,At=Ve.__version===void 0||_e===!0,ct=Me.dataReady,Tt=X(b,ve,gt);if(b.isDepthTexture)Ye=r.DEPTH_COMPONENT,u?b.type===Wi?Ye=r.DEPTH_COMPONENT32F:b.type===Er?Ye=r.DEPTH_COMPONENT24:b.type===Jr?Ye=r.DEPTH24_STENCIL8:Ye=r.DEPTH_COMPONENT16:b.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===es&&Ye===r.DEPTH_COMPONENT&&b.type!==Vd&&b.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Er,it=l.convert(b.type)),b.format===io&&Ye===r.DEPTH_COMPONENT&&(Ye=r.DEPTH_STENCIL,b.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Jr,it=l.convert(b.type))),At&&(xt?t.texStorage2D(r.TEXTURE_2D,1,Ye,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Ye,ve.width,ve.height,0,ft,it,null));else if(b.isDataTexture)if(st.length>0&&gt){xt&&At&&t.texStorage2D(r.TEXTURE_2D,Tt,Ye,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],xt?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,Be.width,Be.height,ft,it,Be.data):t.texImage2D(r.TEXTURE_2D,U,Ye,Be.width,Be.height,0,ft,it,Be.data);b.generateMipmaps=!1}else xt?(At&&t.texStorage2D(r.TEXTURE_2D,Tt,Ye,ve.width,ve.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,ft,it,ve.data)):t.texImage2D(r.TEXTURE_2D,0,Ye,ve.width,ve.height,0,ft,it,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){xt&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ye,st[0].width,st[0].height,ve.depth);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],b.format!==hi?ft!==null?xt?ct&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,Be.width,Be.height,ve.depth,ft,Be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,U,Ye,Be.width,Be.height,ve.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,Be.width,Be.height,ve.depth,ft,it,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,U,Ye,Be.width,Be.height,ve.depth,0,ft,it,Be.data)}else{xt&&At&&t.texStorage2D(r.TEXTURE_2D,Tt,Ye,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],b.format!==hi?ft!==null?xt?ct&&t.compressedTexSubImage2D(r.TEXTURE_2D,U,0,0,Be.width,Be.height,ft,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,U,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,Be.width,Be.height,ft,it,Be.data):t.texImage2D(r.TEXTURE_2D,U,Ye,Be.width,Be.height,0,ft,it,Be.data)}else if(b.isDataArrayTexture)xt?(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ye,ve.width,ve.height,ve.depth),ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ft,it,ve.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ye,ve.width,ve.height,ve.depth,0,ft,it,ve.data);else if(b.isData3DTexture)xt?(At&&t.texStorage3D(r.TEXTURE_3D,Tt,Ye,ve.width,ve.height,ve.depth),ct&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ft,it,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Ye,ve.width,ve.height,ve.depth,0,ft,it,ve.data);else if(b.isFramebufferTexture){if(At)if(xt)t.texStorage2D(r.TEXTURE_2D,Tt,Ye,ve.width,ve.height);else{let U=ve.width,Ee=ve.height;for(let Te=0;Te<Tt;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ye,U,Ee,0,ft,it,null),U>>=1,Ee>>=1}}else if(st.length>0&&gt){xt&&At&&t.texStorage2D(r.TEXTURE_2D,Tt,Ye,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],xt?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,ft,it,Be):t.texImage2D(r.TEXTURE_2D,U,Ye,ft,it,Be);b.generateMipmaps=!1}else xt?(At&&t.texStorage2D(r.TEXTURE_2D,Tt,Ye,ve.width,ve.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,it,ve)):t.texImage2D(r.TEXTURE_2D,0,Ye,ft,it,ve);D(b,gt)&&R(Se),Ve.__version=Me.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function he(C,b,te){if(b.image.length!==6)return;const Se=Y(C,b),_e=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+te);const Me=s.get(_e);if(_e.version!==Me.__version||Se===!0){t.activeTexture(r.TEXTURE0+te);const Ve=Ct.getPrimaries(Ct.workingColorSpace),Ce=b.colorSpace===ti?null:Ct.getPrimaries(b.colorSpace),Oe=b.colorSpace===ti||Ve===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Qe=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let U=0;U<6;U++)!Qe&&!at?ve[U]=A(b.image[U],!1,!0,a.maxCubemapSize):ve[U]=at?b.image[U].image:b.image[U],ve[U]=$e(b,ve[U]);const gt=ve[0],ft=y(gt)||u,it=l.convert(b.format,b.colorSpace),Ye=l.convert(b.type),Be=N(b.internalFormat,it,Ye,b.colorSpace),st=u&&b.isVideoTexture!==!0,xt=Me.__version===void 0||Se===!0,At=_e.dataReady;let ct=X(b,gt,ft);xe(r.TEXTURE_CUBE_MAP,b,ft);let Tt;if(Qe){st&&xt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Be,gt.width,gt.height);for(let U=0;U<6;U++){Tt=ve[U].mipmaps;for(let Ee=0;Ee<Tt.length;Ee++){const Te=Tt[Ee];b.format!==hi?it!==null?st?At&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,0,0,Te.width,Te.height,it,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,0,0,Te.width,Te.height,it,Ye,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,Be,Te.width,Te.height,0,it,Ye,Te.data)}}}else{Tt=b.mipmaps,st&&xt&&(Tt.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Be,ve[0].width,ve[0].height));for(let U=0;U<6;U++)if(at){st?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ve[U].width,ve[U].height,it,Ye,ve[U].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Be,ve[U].width,ve[U].height,0,it,Ye,ve[U].data);for(let Ee=0;Ee<Tt.length;Ee++){const Ge=Tt[Ee].image[U].image;st?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,0,0,Ge.width,Ge.height,it,Ye,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,Be,Ge.width,Ge.height,0,it,Ye,Ge.data)}}else{st?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,it,Ye,ve[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Be,it,Ye,ve[U]);for(let Ee=0;Ee<Tt.length;Ee++){const Te=Tt[Ee];st?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,0,0,it,Ye,Te.image[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,Be,it,Ye,Te.image[U])}}}D(b,ft)&&R(r.TEXTURE_CUBE_MAP),Me.__version=_e.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ae(C,b,te,Se,_e,Me){const Ve=l.convert(te.format,te.colorSpace),Ce=l.convert(te.type),Oe=N(te.internalFormat,Ve,Ce,te.colorSpace);if(!s.get(b).__hasExternalTextures){const at=Math.max(1,b.width>>Me),ve=Math.max(1,b.height>>Me);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,Me,Oe,at,ve,b.depth,0,Ve,Ce,null):t.texImage2D(_e,Me,Oe,at,ve,0,Ve,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ie(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,_e,s.get(te).__webglTexture,0,qe(b)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,_e,s.get(te).__webglTexture,Me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(C,b,te){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Se=u===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(te||Ie(b)){const _e=b.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Wi?Se=r.DEPTH_COMPONENT32F:_e.type===Er&&(Se=r.DEPTH_COMPONENT24));const Me=qe(b);Ie(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,Se,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Se,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,Se,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const Se=qe(b);te&&Ie(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,r.DEPTH24_STENCIL8,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const Se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let _e=0;_e<Se.length;_e++){const Me=Se[_e],Ve=l.convert(Me.format,Me.colorSpace),Ce=l.convert(Me.type),Oe=N(Me.internalFormat,Ve,Ce,Me.colorSpace),Qe=qe(b);te&&Ie(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Oe,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,Oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const Se=s.get(b.depthTexture).__webglTexture,_e=qe(b);if(b.depthTexture.format===es)Ie(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(b.depthTexture.format===io)Ie(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Re(C){const b=s.get(C),te=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,C)}else if(te){b.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Se]),b.__webglDepthbuffer[Se]=r.createRenderbuffer(),ue(b.__webglDepthbuffer[Se],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),ue(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(C,b,te){const Se=s.get(C);b!==void 0&&Ae(Se.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Re(C)}function q(C){const b=C.texture,te=s.get(C),Se=s.get(b);C.addEventListener("dispose",de),C.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=b.version,d.memory.textures++);const _e=C.isWebGLCubeRenderTarget===!0,Me=C.isWebGLMultipleRenderTargets===!0,Ve=y(C)||u;if(_e){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(u&&b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)te.__webglFramebuffer[Ce][Oe]=r.createFramebuffer()}else te.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(u&&b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Me)if(a.drawBuffers){const Ce=C.texture;for(let Oe=0,Qe=Ce.length;Oe<Qe;Oe++){const at=s.get(Ce[Oe]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&C.samples>0&&Ie(C)===!1){const Ce=Me?b:[b];te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Ce.length;Oe++){const Qe=Ce[Oe];te.__webglColorRenderbuffer[Oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Oe]);const at=l.convert(Qe.format,Qe.colorSpace),ve=l.convert(Qe.type),gt=N(Qe.internalFormat,at,ve,Qe.colorSpace,C.isXRRenderTarget===!0),ft=qe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,gt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,te.__webglColorRenderbuffer[Oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ue(te.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),xe(r.TEXTURE_CUBE_MAP,b,Ve);for(let Ce=0;Ce<6;Ce++)if(u&&b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)Ae(te.__webglFramebuffer[Ce][Oe],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Ae(te.__webglFramebuffer[Ce],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);D(b,Ve)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const Ce=C.texture;for(let Oe=0,Qe=Ce.length;Oe<Qe;Oe++){const at=Ce[Oe],ve=s.get(at);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),xe(r.TEXTURE_2D,at,Ve),Ae(te.__webglFramebuffer,C,at,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,0),D(at,Ve)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(u?Ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,Se.__webglTexture),xe(Ce,b,Ve),u&&b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)Ae(te.__webglFramebuffer[Oe],C,b,r.COLOR_ATTACHMENT0,Ce,Oe);else Ae(te.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,Ce,0);D(b,Ve)&&R(Ce),t.unbindTexture()}C.depthBuffer&&Re(C)}function mt(C){const b=y(C)||u,te=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Se=0,_e=te.length;Se<_e;Se++){const Me=te[Se];if(D(Me,b)){const Ve=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=s.get(Me).__webglTexture;t.bindTexture(Ve,Ce),R(Ve),t.unbindTexture()}}}function Fe(C){if(u&&C.samples>0&&Ie(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],te=C.width,Se=C.height;let _e=r.COLOR_BUFFER_BIT;const Me=[],Ve=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=s.get(C),Oe=C.isWebGLMultipleRenderTargets===!0;if(Oe)for(let Qe=0;Qe<b.length;Qe++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Qe=0;Qe<b.length;Qe++){Me.push(r.COLOR_ATTACHMENT0+Qe),C.depthBuffer&&Me.push(Ve);const at=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(at===!1&&(C.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Oe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Qe]),at===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ve])),Oe){const ve=s.get(b[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,te,Se,0,0,te,Se,_e,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Oe)for(let Qe=0;Qe<b.length;Qe++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Qe]);const at=s.get(b[Qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function qe(C){return Math.min(a.maxSamples,C.samples)}function Ie(C){const b=s.get(C);return u&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(C){const b=d.render.frame;v.get(C)!==b&&(v.set(C,b),C.update())}function $e(C,b){const te=C.colorSpace,Se=C.format,_e=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Pd||te!==Yi&&te!==ti&&(Ct.getTransfer(te)===It?u===!1?e.has("EXT_sRGB")===!0&&Se===hi?(C.format=Pd,C.minFilter=Un,C.generateMipmaps=!1):b=bg.sRGBToLinear(b):(Se!==hi||_e!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}this.allocateTextureUnit=H,this.resetTextureUnits=fe,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=ze,this.setupRenderTarget=q,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ie}function uE(r,e,t){const s=t.isWebGL2;function a(l,d=ti){let u;const h=Ct.getTransfer(d);if(l===Ar)return r.UNSIGNED_BYTE;if(l===_g)return r.UNSIGNED_SHORT_4_4_4_4;if(l===xg)return r.UNSIGNED_SHORT_5_5_5_1;if(l===j_)return r.BYTE;if(l===W_)return r.SHORT;if(l===Vd)return r.UNSIGNED_SHORT;if(l===vg)return r.INT;if(l===Er)return r.UNSIGNED_INT;if(l===Wi)return r.FLOAT;if(l===Jo)return s?r.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===X_)return r.ALPHA;if(l===hi)return r.RGBA;if(l===q_)return r.LUMINANCE;if(l===Y_)return r.LUMINANCE_ALPHA;if(l===es)return r.DEPTH_COMPONENT;if(l===io)return r.DEPTH_STENCIL;if(l===Pd)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===$_)return r.RED;if(l===yg)return r.RED_INTEGER;if(l===K_)return r.RG;if(l===Sg)return r.RG_INTEGER;if(l===Mg)return r.RGBA_INTEGER;if(l===Hu||l===Gu||l===Vu||l===ju)if(h===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===Hu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===Hu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Gu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Vu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Fp||l===Op||l===kp||l===zp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Fp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Op)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===kp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===zp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Eg)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Bp||l===Hp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Bp)return h===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Hp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Gp||l===Vp||l===jp||l===Wp||l===Xp||l===qp||l===Yp||l===$p||l===Kp||l===Qp||l===Zp||l===Jp||l===em||l===tm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Gp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Vp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===jp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Wp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Xp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===qp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Yp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===$p)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Kp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Qp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Zp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Jp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===em)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===tm)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Wu||l===nm||l===im)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===Wu)return h===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===nm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===im)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Q_||l===rm||l===sm||l===om)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===Wu)return u.COMPRESSED_RED_RGTC1_EXT;if(l===rm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===sm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===om)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Jr?s?r.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:a}}class dE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ko extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,d=null;const u=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,s),x=this._getHandJoint(m,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,w=.005;m.inputState.pinching&&S>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Ko;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const hE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new kn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const s=t.cameras[0].viewport,a=new Ai({extensions:{fragDepth:!0},vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new qi(new ec(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class gE extends so{constructor(e,t){super();const s=this;let a=null,l=1,d=null,u="local-floor",h=1,m=null,v=null,_=null,S=null,M=null,w=null;const A=new mE,y=t.getContextAttributes();let x=null,D=null;const R=[],N=[],X=new wt;let k=null;const O=new ei;O.layers.enable(1),O.viewport=new an;const de=new ei;de.layers.enable(2),de.viewport=new an;const pe=[O,de],T=new dE;T.layers.enable(1),T.layers.enable(2);let F=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let le=R[Y];return le===void 0&&(le=new gd,R[Y]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Y){let le=R[Y];return le===void 0&&(le=new gd,R[Y]=le),le.getGripSpace()},this.getHand=function(Y){let le=R[Y];return le===void 0&&(le=new gd,R[Y]=le),le.getHandSpace()};function fe(Y){const le=N.indexOf(Y.inputSource);if(le===-1)return;const he=R[le];he!==void 0&&(he.update(Y.inputSource,Y.frame,m||d),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<R.length;Y++){const le=N[Y];le!==null&&(N[Y]=null,R[Y].disconnect(le))}F=null,ce=null,A.reset(),e.setRenderTarget(x),M=null,S=null,_=null,a=null,D=null,xe.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",H),a.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(X),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:a.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,le),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new is(M.framebufferWidth,M.framebufferHeight,{format:hi,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let le=null,he=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=y.stencil?io:es,he=y.stencil?Jr:Er);const ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};_=new XRWebGLBinding(a,t),S=_.createProjectionLayer(ue),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new is(S.textureWidth,S.textureHeight,{format:hi,type:Ar,depthTexture:new Hg(S.textureWidth,S.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const oe=e.properties.get(D);oe.__ignoreDepthValues=S.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(u),xe.setContext(a),xe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ie(Y){for(let le=0;le<Y.removed.length;le++){const he=Y.removed[le],Ae=N.indexOf(he);Ae>=0&&(N[Ae]=null,R[Ae].disconnect(he))}for(let le=0;le<Y.added.length;le++){const he=Y.added[le];let Ae=N.indexOf(he);if(Ae===-1){for(let oe=0;oe<R.length;oe++)if(oe>=N.length){N.push(he),Ae=oe;break}else if(N[oe]===null){N[oe]=he,Ae=oe;break}if(Ae===-1)break}const ue=R[Ae];ue&&ue.connect(he)}}const j=new $,ee=new $;function B(Y,le,he){j.setFromMatrixPosition(le.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const Ae=j.distanceTo(ee),ue=le.projectionMatrix.elements,oe=he.projectionMatrix.elements,Re=ue[14]/(ue[10]-1),ze=ue[14]/(ue[10]+1),q=(ue[9]+1)/ue[5],mt=(ue[9]-1)/ue[5],Fe=(ue[8]-1)/ue[0],qe=(oe[8]+1)/oe[0],Ie=Re*Fe,tt=Re*qe,$e=Ae/(-Fe+qe),C=$e*-Fe;le.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(C),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Re+$e,te=ze+$e,Se=Ie-C,_e=tt+(Ae-C),Me=q*ze/te*b,Ve=mt*ze/te*b;Y.projectionMatrix.makePerspective(Se,_e,Me,Ve,b,te),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Z(Y,le){le===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(le.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;A.texture!==null&&(Y.near=A.depthNear,Y.far=A.depthFar),T.near=de.near=O.near=Y.near,T.far=de.far=O.far=Y.far,(F!==T.near||ce!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,ce=T.far,O.near=F,O.far=ce,de.near=F,de.far=ce,O.updateProjectionMatrix(),de.updateProjectionMatrix(),Y.updateProjectionMatrix());const le=Y.parent,he=T.cameras;Z(T,le);for(let Ae=0;Ae<he.length;Ae++)Z(he[Ae],le);he.length===2?B(T,O,de):T.projectionMatrix.copy(O.projectionMatrix),W(Y,T,le)};function W(Y,le,he){he===null?Y.matrix.copy(le.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(le.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ld*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(Y){h=Y,S!==null&&(S.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return A.texture!==null};let L=null;function G(Y,le){if(v=le.getViewerPose(m||d),w=le,v!==null){const he=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Ae=!1;he.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let oe=0;oe<he.length;oe++){const Re=he[oe];let ze=null;if(M!==null)ze=M.getViewport(Re);else{const mt=_.getViewSubImage(S,Re);ze=mt.viewport,oe===0&&(e.setRenderTargetTextures(D,mt.colorTexture,S.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(D))}let q=pe[oe];q===void 0&&(q=new ei,q.layers.enable(oe),q.viewport=new an,pe[oe]=q),q.matrix.fromArray(Re.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Re.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ze.x,ze.y,ze.width,ze.height),oe===0&&(T.matrix.copy(q.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(q)}const ue=a.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const oe=_.getDepthInformation(he[0]);oe&&oe.isValid&&oe.texture&&A.init(e,oe,a.renderState)}}for(let he=0;he<R.length;he++){const Ae=N[he],ue=R[he];Ae!==null&&ue!==void 0&&ue.update(Ae,le,m||d)}A.render(e,T),L&&L(Y,le),le.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:le}),w=null}const xe=new Bg;xe.setAnimationLoop(G),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}function vE(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Fg(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,D,R,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x)):x.isMeshStandardMaterial?(l(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,N)):x.isMeshMatcapMaterial?(l(y,x),w(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),A(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?h(y,x,D,R):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===On&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===On&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x).envMap;if(D&&(y.envMap.value=D,y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap){y.lightMap.value=x.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=x.lightMapIntensity*R,t(x.lightMap,y.lightMapTransform)}x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,D,R){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=R*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),e.get(x).envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&y.clearcoatNormalScale.value.negate())),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function _E(r,e,t,s){let a={},l={},d=[];const u=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,R){const N=R.program;s.uniformBlockBinding(D,N)}function m(D,R){let N=a[D.id];N===void 0&&(w(D),N=v(D),a[D.id]=N,D.addEventListener("dispose",y));const X=R.program;s.updateUBOMapping(D,X);const k=e.render.frame;l[D.id]!==k&&(S(D),l[D.id]=k)}function v(D){const R=_();D.__bindingPointIndex=R;const N=r.createBuffer(),X=D.__size,k=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,X,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,N),N}function _(){for(let D=0;D<u;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const R=a[D.id],N=D.uniforms,X=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let k=0,O=N.length;k<O;k++){const de=Array.isArray(N[k])?N[k]:[N[k]];for(let pe=0,T=de.length;pe<T;pe++){const F=de[pe];if(M(F,k,pe,X)===!0){const ce=F.__offset,fe=Array.isArray(F.value)?F.value:[F.value];let H=0;for(let ie=0;ie<fe.length;ie++){const j=fe[ie],ee=A(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,ce+H,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,R,N,X){const k=D.value,O=R+"_"+N;if(X[O]===void 0)return typeof k=="number"||typeof k=="boolean"?X[O]=k:X[O]=k.clone(),!0;{const de=X[O];if(typeof k=="number"||typeof k=="boolean"){if(de!==k)return X[O]=k,!0}else if(de.equals(k)===!1)return de.copy(k),!0}return!1}function w(D){const R=D.uniforms;let N=0;const X=16;for(let O=0,de=R.length;O<de;O++){const pe=Array.isArray(R[O])?R[O]:[R[O]];for(let T=0,F=pe.length;T<F;T++){const ce=pe[T],fe=Array.isArray(ce.value)?ce.value:[ce.value];for(let H=0,ie=fe.length;H<ie;H++){const j=fe[H],ee=A(j),B=N%X;B!==0&&X-B<ee.boundary&&(N+=X-B),ce.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=N,N+=ee.storage}}}const k=N%X;return k>0&&(N+=X-k),D.__size=N,D.__cache={},this}function A(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function y(D){const R=D.target;R.removeEventListener("dispose",y);const N=d.indexOf(R.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function x(){for(const D in a)r.deleteBuffer(a[D]);d=[],a={},l={}}return{bind:h,update:m,dispose:x}}class qg{constructor(e={}){const{canvas:t=ux(),context:s=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=d;const M=new Uint32Array(4),w=new Int32Array(4);let A=null,y=null;const x=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=Tr,this.toneMappingExposure=1;const R=this;let N=!1,X=0,k=0,O=null,de=-1,pe=null;const T=new an,F=new an;let ce=null;const fe=new We(0);let H=0,ie=t.width,j=t.height,ee=1,B=null,Z=null;const W=new an(0,0,ie,j),L=new an(0,0,ie,j);let G=!1;const xe=new zg;let Y=!1,le=!1,he=null;const Ae=new Kt,ue=new wt,oe=new $,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return O===null?ee:1}let q=s;function mt(P,Q){for(let se=0;se<P.length;se++){const ae=P[se],re=t.getContext(ae,Q);if(re!==null)return re}return null}try{const P={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gd}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),q===null){const Q=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Q.shift(),q=mt(Q,P),q===null)throw mt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Fe,qe,Ie,tt,$e,C,b,te,Se,_e,Me,Ve,Ce,Oe,Qe,at,ve,gt,ft,it,Ye,Be,st,xt;function At(){Fe=new TM(q),qe=new _M(q,Fe,e),Fe.init(qe),Be=new uE(q,Fe,qe),Ie=new lE(q,Fe,qe),tt=new RM(q),$e=new Y1,C=new cE(q,Fe,Ie,$e,qe,Be,tt),b=new yM(R),te=new wM(R),Se=new Ux(q,qe),st=new gM(q,Fe,Se,qe),_e=new AM(q,Se,tt,st),Me=new NM(q,_e,Se,tt),ft=new LM(q,qe,C),at=new xM($e),Ve=new q1(R,b,te,Fe,qe,st,at),Ce=new vE(R,$e),Oe=new K1,Qe=new nE(Fe,qe),gt=new mM(R,b,te,Ie,Me,S,h),ve=new aE(R,Me,qe),xt=new _E(q,tt,qe,Ie),it=new vM(q,Fe,tt,qe),Ye=new bM(q,Fe,tt,qe),tt.programs=Ve.programs,R.capabilities=qe,R.extensions=Fe,R.properties=$e,R.renderLists=Oe,R.shadowMap=ve,R.state=Ie,R.info=tt}At();const ct=new gE(R,q);this.xr=ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=Fe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Fe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(P){P!==void 0&&(ee=P,this.setSize(ie,j,!1))},this.getSize=function(P){return P.set(ie,j)},this.setSize=function(P,Q,se=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=P,j=Q,t.width=Math.floor(P*ee),t.height=Math.floor(Q*ee),se===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(ie*ee,j*ee).floor()},this.setDrawingBufferSize=function(P,Q,se){ie=P,j=Q,ee=se,t.width=Math.floor(P*se),t.height=Math.floor(Q*se),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(W)},this.setViewport=function(P,Q,se,ae){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,Q,se,ae),Ie.viewport(T.copy(W).multiplyScalar(ee).floor())},this.getScissor=function(P){return P.copy(L)},this.setScissor=function(P,Q,se,ae){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,Q,se,ae),Ie.scissor(F.copy(L).multiplyScalar(ee).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(P){Ie.setScissorTest(G=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(P=!0,Q=!0,se=!0){let ae=0;if(P){let re=!1;if(O!==null){const Le=O.texture.format;re=Le===Mg||Le===Sg||Le===yg}if(re){const Le=O.texture.type,Xe=Le===Ar||Le===Er||Le===Vd||Le===Jr||Le===_g||Le===xg,et=gt.getClearColor(),De=gt.getClearAlpha(),lt=et.r,rt=et.g,ot=et.b;Xe?(M[0]=lt,M[1]=rt,M[2]=ot,M[3]=De,q.clearBufferuiv(q.COLOR,0,M)):(w[0]=lt,w[1]=rt,w[2]=ot,w[3]=De,q.clearBufferiv(q.COLOR,0,w))}else ae|=q.COLOR_BUFFER_BIT}Q&&(ae|=q.DEPTH_BUFFER_BIT),se&&(ae|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Oe.dispose(),Qe.dispose(),$e.dispose(),b.dispose(),te.dispose(),Me.dispose(),st.dispose(),xt.dispose(),Ve.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",_n),ct.removeEventListener("sessionend",Mt),he&&(he.dispose(),he=null),qt.stop()};function Tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const P=tt.autoReset,Q=ve.enabled,se=ve.autoUpdate,ae=ve.needsUpdate,re=ve.type;At(),tt.autoReset=P,ve.enabled=Q,ve.autoUpdate=se,ve.needsUpdate=ae,ve.type=re}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Te(P){const Q=P.target;Q.removeEventListener("dispose",Te),Ge(Q)}function Ge(P){Ke(P),$e.remove(P)}function Ke(P){const Q=$e.get(P).programs;Q!==void 0&&(Q.forEach(function(se){Ve.releaseProgram(se)}),P.isShaderMaterial&&Ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,se,ae,re,Le){Q===null&&(Q=Re);const Xe=re.isMesh&&re.matrixWorld.determinant()<0,et=nc(P,Q,se,ae,re);Ie.setMaterial(ae,Xe);let De=se.index,lt=1;if(ae.wireframe===!0){if(De=_e.getWireframeAttribute(se),De===void 0)return;lt=2}const rt=se.drawRange,ot=se.attributes.position;let Pt=rt.start*lt,xn=(rt.start+rt.count)*lt;Le!==null&&(Pt=Math.max(Pt,Le.start*lt),xn=Math.min(xn,(Le.start+Le.count)*lt)),De!==null?(Pt=Math.max(Pt,0),xn=Math.min(xn,De.count)):ot!=null&&(Pt=Math.max(Pt,0),xn=Math.min(xn,ot.count));const Vt=xn-Pt;if(Vt<0||Vt===1/0)return;st.setup(re,ae,et,se,De);let Tn,vt=it;if(De!==null&&(Tn=Se.get(De),vt=Ye,vt.setIndex(Tn)),re.isMesh)ae.wireframe===!0?(Ie.setLineWidth(ae.wireframeLinewidth*ze()),vt.setMode(q.LINES)):vt.setMode(q.TRIANGLES);else if(re.isLine){let ut=ae.linewidth;ut===void 0&&(ut=1),Ie.setLineWidth(ut*ze()),re.isLineSegments?vt.setMode(q.LINES):re.isLineLoop?vt.setMode(q.LINE_LOOP):vt.setMode(q.LINE_STRIP)}else re.isPoints?vt.setMode(q.POINTS):re.isSprite&&vt.setMode(q.TRIANGLES);if(re.isBatchedMesh)vt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)vt.renderInstances(Pt,Vt,re.count);else if(se.isInstancedBufferGeometry){const ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,yn=Math.min(se.instanceCount,ut);vt.renderInstances(Pt,Vt,yn)}else vt.render(Pt,Vt)};function St(P,Q,se){P.transparent===!0&&P.side===ji&&P.forceSinglePass===!1?(P.side=On,P.needsUpdate=!0,$i(P,Q,se),P.side=br,P.needsUpdate=!0,$i(P,Q,se),P.side=ji):$i(P,Q,se)}this.compile=function(P,Q,se=null){se===null&&(se=P),y=Qe.get(se),y.init(),D.push(y),se.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),P!==se&&P.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(R._useLegacyLights);const ae=new Set;return P.traverse(function(re){const Le=re.material;if(Le)if(Array.isArray(Le))for(let Xe=0;Xe<Le.length;Xe++){const et=Le[Xe];St(et,se,re),ae.add(et)}else St(Le,se,re),ae.add(Le)}),D.pop(),y=null,ae},this.compileAsync=function(P,Q,se=null){const ae=this.compile(P,Q,se);return new Promise(re=>{function Le(){if(ae.forEach(function(Xe){$e.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){re(P);return}setTimeout(Le,10)}Fe.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let bt=null;function Gt(P){bt&&bt(P)}function _n(){qt.stop()}function Mt(){qt.start()}const qt=new Bg;qt.setAnimationLoop(Gt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){bt=P,ct.setAnimationLoop(P),P===null?qt.stop():qt.start()},ct.addEventListener("sessionstart",_n),ct.addEventListener("sessionend",Mt),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Q),Q=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,Q,O),y=Qe.get(P,D.length),y.init(),D.push(y),Ae.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),xe.setFromProjectionMatrix(Ae),le=this.localClippingEnabled,Y=at.init(this.clippingPlanes,le),A=Oe.get(P,x.length),A.init(),x.push(A),ln(P,Q,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(B,Z),this.info.render.frame++,Y===!0&&at.beginShadows();const se=y.state.shadowsArray;if(ve.render(se,P,Q),Y===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&gt.render(A,P),y.setupLights(R._useLegacyLights),Q.isArrayCamera){const ae=Q.cameras;for(let re=0,Le=ae.length;re<Le;re++){const Xe=ae[re];ra(A,P,Xe,Xe.viewport)}}else ra(A,P,Q);O!==null&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(R,P,Q),st.resetDefaultState(),de=-1,pe=null,D.pop(),D.length>0?y=D[D.length-1]:y=null,x.pop(),x.length>0?A=x[x.length-1]:A=null};function ln(P,Q,se,ae){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||xe.intersectsSprite(P)){ae&&oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ae);const Xe=Me.update(P),et=P.material;et.visible&&A.push(P,Xe,et,se,oe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||xe.intersectsObject(P))){const Xe=Me.update(P),et=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),oe.copy(P.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),oe.copy(Xe.boundingSphere.center)),oe.applyMatrix4(P.matrixWorld).applyMatrix4(Ae)),Array.isArray(et)){const De=Xe.groups;for(let lt=0,rt=De.length;lt<rt;lt++){const ot=De[lt],Pt=et[ot.materialIndex];Pt&&Pt.visible&&A.push(P,Xe,Pt,se,oe.z,ot)}}else et.visible&&A.push(P,Xe,et,se,oe.z,null)}}const Le=P.children;for(let Xe=0,et=Le.length;Xe<et;Xe++)ln(Le[Xe],Q,se,ae)}function ra(P,Q,se,ae){const re=P.opaque,Le=P.transmissive,Xe=P.transparent;y.setupLightsView(se),Y===!0&&at.setGlobalState(R.clippingPlanes,se),Le.length>0&&Rr(re,Le,Q,se),ae&&Ie.viewport(T.copy(ae)),re.length>0&&bi(re,Q,se),Le.length>0&&bi(Le,Q,se),Xe.length>0&&bi(Xe,Q,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Rr(P,Q,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Le=qe.isWebGL2;he===null&&(he=new is(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Jo:Ar,minFilter:Qr,samples:Le?4:0})),R.getDrawingBufferSize(ue),Le?he.setSize(ue.x,ue.y):he.setSize(Nd(ue.x),Nd(ue.y));const Xe=R.getRenderTarget();R.setRenderTarget(he),R.getClearColor(fe),H=R.getClearAlpha(),H<1&&R.setClearColor(16777215,.5),R.clear();const et=R.toneMapping;R.toneMapping=Tr,bi(P,se,ae),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he);let De=!1;for(let lt=0,rt=Q.length;lt<rt;lt++){const ot=Q[lt],Pt=ot.object,xn=ot.geometry,Vt=ot.material,Tn=ot.group;if(Vt.side===ji&&Pt.layers.test(ae.layers)){const vt=Vt.side;Vt.side=On,Vt.needsUpdate=!0,Cr(Pt,se,ae,xn,Vt,Tn),Vt.side=vt,Vt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he)),R.setRenderTarget(Xe),R.setClearColor(fe,H),R.toneMapping=et}function bi(P,Q,se){const ae=Q.isScene===!0?Q.overrideMaterial:null;for(let re=0,Le=P.length;re<Le;re++){const Xe=P[re],et=Xe.object,De=Xe.geometry,lt=ae===null?Xe.material:ae,rt=Xe.group;et.layers.test(se.layers)&&Cr(et,Q,se,De,lt,rt)}}function Cr(P,Q,se,ae,re,Le){P.onBeforeRender(R,Q,se,ae,re,Le),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),re.onBeforeRender(R,Q,se,ae,P,Le),re.transparent===!0&&re.side===ji&&re.forceSinglePass===!1?(re.side=On,re.needsUpdate=!0,R.renderBufferDirect(se,Q,ae,re,P,Le),re.side=br,re.needsUpdate=!0,R.renderBufferDirect(se,Q,ae,re,P,Le),re.side=ji):R.renderBufferDirect(se,Q,ae,re,P,Le),P.onAfterRender(R,Q,se,ae,re,Le)}function $i(P,Q,se){Q.isScene!==!0&&(Q=Re);const ae=$e.get(P),re=y.state.lights,Le=y.state.shadowsArray,Xe=re.state.version,et=Ve.getParameters(P,re.state,Le,Q,se),De=Ve.getProgramCacheKey(et);let lt=ae.programs;ae.environment=P.isMeshStandardMaterial?Q.environment:null,ae.fog=Q.fog,ae.envMap=(P.isMeshStandardMaterial?te:b).get(P.envMap||ae.environment),lt===void 0&&(P.addEventListener("dispose",Te),lt=new Map,ae.programs=lt);let rt=lt.get(De);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===Xe)return oa(P,et),rt}else et.uniforms=Ve.getUniforms(P),P.onBuild(se,et,R),P.onBeforeCompile(et,R),rt=Ve.acquireProgram(et,De),lt.set(De,rt),ae.uniforms=et.uniforms;const ot=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ot.clippingPlanes=at.uniform),oa(P,et),ae.needsLights=aa(P),ae.lightsStateVersion=Xe,ae.needsLights&&(ot.ambientLightColor.value=re.state.ambient,ot.lightProbe.value=re.state.probe,ot.directionalLights.value=re.state.directional,ot.directionalLightShadows.value=re.state.directionalShadow,ot.spotLights.value=re.state.spot,ot.spotLightShadows.value=re.state.spotShadow,ot.rectAreaLights.value=re.state.rectArea,ot.ltc_1.value=re.state.rectAreaLTC1,ot.ltc_2.value=re.state.rectAreaLTC2,ot.pointLights.value=re.state.point,ot.pointLightShadows.value=re.state.pointShadow,ot.hemisphereLights.value=re.state.hemi,ot.directionalShadowMap.value=re.state.directionalShadowMap,ot.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ot.spotShadowMap.value=re.state.spotShadowMap,ot.spotLightMatrix.value=re.state.spotLightMatrix,ot.spotLightMap.value=re.state.spotLightMap,ot.pointShadowMap.value=re.state.pointShadowMap,ot.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.currentProgram=rt,ae.uniformsList=null,rt}function sa(P){if(P.uniformsList===null){const Q=P.currentProgram.getUniforms();P.uniformsList=Gl.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function oa(P,Q){const se=$e.get(P);se.outputColorSpace=Q.outputColorSpace,se.batching=Q.batching,se.instancing=Q.instancing,se.instancingColor=Q.instancingColor,se.skinning=Q.skinning,se.morphTargets=Q.morphTargets,se.morphNormals=Q.morphNormals,se.morphColors=Q.morphColors,se.morphTargetsCount=Q.morphTargetsCount,se.numClippingPlanes=Q.numClippingPlanes,se.numIntersection=Q.numClipIntersection,se.vertexAlphas=Q.vertexAlphas,se.vertexTangents=Q.vertexTangents,se.toneMapping=Q.toneMapping}function nc(P,Q,se,ae,re){Q.isScene!==!0&&(Q=Re),C.resetTextureUnits();const Le=Q.fog,Xe=ae.isMeshStandardMaterial?Q.environment:null,et=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Yi,De=(ae.isMeshStandardMaterial?te:b).get(ae.envMap||Xe),lt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ot=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,xn=!!se.morphAttributes.color;let Vt=Tr;ae.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Vt=R.toneMapping);const Tn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,vt=Tn!==void 0?Tn.length:0,ut=$e.get(ae),yn=y.state.lights;if(Y===!0&&(le===!0||P!==pe)){const An=P===pe&&ae.id===de;at.setState(ae,P,An)}let Ut=!1;ae.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==yn.state.version||ut.outputColorSpace!==et||re.isBatchedMesh&&ut.batching===!1||!re.isBatchedMesh&&ut.batching===!0||re.isInstancedMesh&&ut.instancing===!1||!re.isInstancedMesh&&ut.instancing===!0||re.isSkinnedMesh&&ut.skinning===!1||!re.isSkinnedMesh&&ut.skinning===!0||re.isInstancedMesh&&ut.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ut.instancingColor===!1&&re.instanceColor!==null||ut.envMap!==De||ae.fog===!0&&ut.fog!==Le||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==at.numPlanes||ut.numIntersection!==at.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==rt||ut.morphTargets!==ot||ut.morphNormals!==Pt||ut.morphColors!==xn||ut.toneMapping!==Vt||qe.isWebGL2===!0&&ut.morphTargetsCount!==vt)&&(Ut=!0):(Ut=!0,ut.__version=ae.version);let Ci=ut.currentProgram;Ut===!0&&(Ci=$i(ae,Q,re));let la=!1,gi=!1,Ki=!1;const zt=Ci.getUniforms(),Xn=ut.uniforms;if(Ie.useProgram(Ci.program)&&(la=!0,gi=!0,Ki=!0),ae.id!==de&&(de=ae.id,gi=!0),la||pe!==P){zt.setValue(q,"projectionMatrix",P.projectionMatrix),zt.setValue(q,"viewMatrix",P.matrixWorldInverse);const An=zt.map.cameraPosition;An!==void 0&&An.setValue(q,oe.setFromMatrixPosition(P.matrixWorld)),qe.logarithmicDepthBuffer&&zt.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),pe!==P&&(pe=P,gi=!0,Ki=!0)}if(re.isSkinnedMesh){zt.setOptional(q,re,"bindMatrix"),zt.setOptional(q,re,"bindMatrixInverse");const An=re.skeleton;An&&(qe.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),zt.setValue(q,"boneTexture",An.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(zt.setOptional(q,re,"batchingTexture"),zt.setValue(q,"batchingTexture",re._matricesTexture,C));const lo=se.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&qe.isWebGL2===!0)&&ft.update(re,se,Ci),(gi||ut.receiveShadow!==re.receiveShadow)&&(ut.receiveShadow=re.receiveShadow,zt.setValue(q,"receiveShadow",re.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Xn.envMap.value=De,Xn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),gi&&(zt.setValue(q,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&Ri(Xn,Ki),Le&&ae.fog===!0&&Ce.refreshFogUniforms(Xn,Le),Ce.refreshMaterialUniforms(Xn,ae,ee,j,he),Gl.upload(q,sa(ut),Xn,C)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Gl.upload(q,sa(ut),Xn,C),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(q,"center",re.center),zt.setValue(q,"modelViewMatrix",re.modelViewMatrix),zt.setValue(q,"normalMatrix",re.normalMatrix),zt.setValue(q,"modelMatrix",re.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const An=ae.uniformsGroups;for(let Pr=0,ca=An.length;Pr<ca;Pr++)if(qe.isWebGL2){const os=An[Pr];xt.update(os,Ci),xt.bind(os,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Ri(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function aa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,Q,se){$e.get(P.texture).__webglTexture=Q,$e.get(P.depthTexture).__webglTexture=se;const ae=$e.get(P);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Q){const se=$e.get(P);se.__webglFramebuffer=Q,se.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(P,Q=0,se=0){O=P,X=Q,k=se;let ae=!0,re=null,Le=!1,Xe=!1;if(P){const De=$e.get(P);De.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(q.FRAMEBUFFER,null),ae=!1):De.__webglFramebuffer===void 0?C.setupRenderTarget(P):De.__hasExternalTextures&&C.rebindTextures(P,$e.get(P.texture).__webglTexture,$e.get(P.depthTexture).__webglTexture);const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Xe=!0);const rt=$e.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[Q])?re=rt[Q][se]:re=rt[Q],Le=!0):qe.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?re=$e.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?re=rt[se]:re=rt,T.copy(P.viewport),F.copy(P.scissor),ce=P.scissorTest}else T.copy(W).multiplyScalar(ee).floor(),F.copy(L).multiplyScalar(ee).floor(),ce=G;if(Ie.bindFramebuffer(q.FRAMEBUFFER,re)&&qe.drawBuffers&&ae&&Ie.drawBuffers(P,re),Ie.viewport(T),Ie.scissor(F),Ie.setScissorTest(ce),Le){const De=$e.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Q,De.__webglTexture,se)}else if(Xe){const De=$e.get(P.texture),lt=Q||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,De.__webglTexture,se||0,lt)}de=-1},this.readRenderTargetPixels=function(P,Q,se,ae,re,Le,Xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=$e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(et=et[Xe]),et){Ie.bindFramebuffer(q.FRAMEBUFFER,et);try{const De=P.texture,lt=De.format,rt=De.type;if(lt!==hi&&Be.convert(lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=rt===Jo&&(Fe.has("EXT_color_buffer_half_float")||qe.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(rt!==Ar&&Be.convert(rt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Wi&&(qe.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ae&&se>=0&&se<=P.height-re&&q.readPixels(Q,se,ae,re,Be.convert(lt),Be.convert(rt),Le)}finally{const De=O!==null?$e.get(O).__webglFramebuffer:null;Ie.bindFramebuffer(q.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(P,Q,se=0){const ae=Math.pow(2,-se),re=Math.floor(Q.image.width*ae),Le=Math.floor(Q.image.height*ae);C.setTexture2D(Q,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,P.x,P.y,re,Le),Ie.unbindTexture()},this.copyTextureToTexture=function(P,Q,se,ae=0){const re=Q.image.width,Le=Q.image.height,Xe=Be.convert(se.format),et=Be.convert(se.type);C.setTexture2D(se,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,se.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,se.unpackAlignment),Q.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ae,P.x,P.y,re,Le,Xe,et,Q.image.data):Q.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ae,P.x,P.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Xe,Q.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,ae,P.x,P.y,Xe,et,Q.image),ae===0&&se.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,Q,se,ae,re=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=P.max.x-P.min.x+1,Xe=P.max.y-P.min.y+1,et=P.max.z-P.min.z+1,De=Be.convert(ae.format),lt=Be.convert(ae.type);let rt;if(ae.isData3DTexture)C.setTexture3D(ae,0),rt=q.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)C.setTexture2DArray(ae,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ae.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ae.unpackAlignment);const ot=q.getParameter(q.UNPACK_ROW_LENGTH),Pt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),xn=q.getParameter(q.UNPACK_SKIP_PIXELS),Vt=q.getParameter(q.UNPACK_SKIP_ROWS),Tn=q.getParameter(q.UNPACK_SKIP_IMAGES),vt=se.isCompressedTexture?se.mipmaps[re]:se.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,vt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,P.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,P.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?q.texSubImage3D(rt,re,Q.x,Q.y,Q.z,Le,Xe,et,De,lt,vt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(rt,re,Q.x,Q.y,Q.z,Le,Xe,et,De,vt.data)):q.texSubImage3D(rt,re,Q.x,Q.y,Q.z,Le,Xe,et,De,lt,vt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ot),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Pt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,xn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Vt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Tn),re===0&&ae.generateMipmaps&&q.generateMipmap(rt),Ie.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){X=0,k=0,O=null,Ie.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jd?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Ql?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?ts:wg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?on:Yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xE extends qg{}xE.prototype.isWebGL1Renderer=!0;class Xd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Xd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yE extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yg extends na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new Kt,Id=new Pg,Dl=new Zl,Il=new $;class Ud extends zn{constructor(e=new mi,t=new Yg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dl.copy(s.boundingSphere),Dl.applyMatrix4(a),Dl.radius+=l,e.ray.intersectsSphere(Dl)===!1)return;Qm.copy(a).invert(),Id.copy(e.ray).applyMatrix4(Qm);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,m=s.index,_=s.attributes.position;if(m!==null){const S=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let w=S,A=M;w<A;w++){const y=m.getX(w);Il.fromBufferAttribute(_,y),Zm(Il,y,h,a,e,t,this)}}else{const S=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let w=S,A=M;w<A;w++)Il.fromBufferAttribute(_,w),Zm(Il,w,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Zm(r,e,t,s,a,l,d){const u=Id.distanceSqToPoint(r);if(u<t){const h=new $;Id.closestPointToPoint(r,h),h.applyMatrix4(s);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,object:d})}}class SE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let d=1;d<=e;d++)s=this.getPoint(d/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let d;t?d=t:d=e*s[l-1];let u=0,h=l-1,m;for(;u<=h;)if(a=Math.floor(u+(h-u)/2),m=s[a]-d,m<0)u=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,s[a]===d)return a/(l-1);const v=s[a],S=s[a+1]-v,M=(d-v)/S;return(a+M)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const d=this.getPoint(a),u=this.getPoint(l),h=t||(d.isVector2?new wt:new $);return h.copy(u).sub(d).normalize(),h}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new $,a=[],l=[],d=[],u=new $,h=new Kt;for(let M=0;M<=e;M++){const w=M/e;a[M]=this.getTangentAt(w,new $)}l[0]=new $,d[0]=new $;let m=Number.MAX_VALUE;const v=Math.abs(a[0].x),_=Math.abs(a[0].y),S=Math.abs(a[0].z);v<=m&&(m=v,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),S<=m&&s.set(0,0,1),u.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],u),d[0].crossVectors(a[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),d[M]=d[M-1].clone(),u.crossVectors(a[M-1],a[M]),u.length()>Number.EPSILON){u.normalize();const w=Math.acos(vn(a[M-1].dot(a[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(u,w))}d[M].crossVectors(a[M],l[M])}if(t===!0){let M=Math.acos(vn(l[0].dot(l[e]),-1,1));M/=e,a[0].dot(u.crossVectors(l[0],l[e]))>0&&(M=-M);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(a[w],M*w)),d[w].crossVectors(a[w],l[w])}return{tangents:a,normals:l,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function qd(){let r=0,e=0,t=0,s=0;function a(l,d,u,h){r=l,e=u,t=-3*l+3*d-2*u-h,s=2*l-2*d+u+h}return{initCatmullRom:function(l,d,u,h,m){a(d,u,m*(u-l),m*(h-d))},initNonuniformCatmullRom:function(l,d,u,h,m,v,_){let S=(d-l)/m-(u-l)/(m+v)+(u-d)/v,M=(u-d)/v-(h-d)/(v+_)+(h-u)/_;S*=v,M*=v,a(d,u,S,M)},calc:function(l){const d=l*l,u=d*l;return r+e*l+t*d+s*u}}}const Ul=new $,vd=new qd,_d=new qd,xd=new qd;class Vl extends SE{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new $){const s=t,a=this.points,l=a.length,d=(l-(this.closed?0:1))*e;let u=Math.floor(d),h=d-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:h===0&&u===l-1&&(u=l-2,h=1);let m,v;this.closed||u>0?m=a[(u-1)%l]:(Ul.subVectors(a[0],a[1]).add(a[0]),m=Ul);const _=a[u%l],S=a[(u+1)%l];if(this.closed||u+2<l?v=a[(u+2)%l]:(Ul.subVectors(a[l-1],a[l-2]).add(a[l-1]),v=Ul),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let w=Math.pow(m.distanceToSquared(_),M),A=Math.pow(_.distanceToSquared(S),M),y=Math.pow(S.distanceToSquared(v),M);A<1e-4&&(A=1),w<1e-4&&(w=A),y<1e-4&&(y=A),vd.initNonuniformCatmullRom(m.x,_.x,S.x,v.x,w,A,y),_d.initNonuniformCatmullRom(m.y,_.y,S.y,v.y,w,A,y),xd.initNonuniformCatmullRom(m.z,_.z,S.z,v.z,w,A,y)}else this.curveType==="catmullrom"&&(vd.initCatmullRom(m.x,_.x,S.x,v.x,this.tension),_d.initCatmullRom(m.y,_.y,S.y,v.y,this.tension),xd.initCatmullRom(m.z,_.z,S.z,v.z,this.tension));return s.set(vd.calc(h),_d.calc(h),xd.calc(h)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ME{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);const Mi={bg:new We("#04060a"),fog:new We("#04060a"),soil:new We("#241813"),soilDeep:new We("#0c0806"),scan:new We("#37e6d0"),node:new We("#7bffd6"),seed:new We("#8a5a32"),bark:new We("#5b4327"),barkTip:new We("#8fe6b0"),leaf:new We("#2f9e46"),leafGloss:new We("#7fffa8"),blossom:new We("#fff3c4"),appleUnripe:new We("#7cae3a"),appleRipe:new We("#cf2130"),appleBlush:new We("#f2544a")},ns=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Xs=(r,e,t)=>r+(e-r)*t;function mn(r,e,t){const s=ns((r-e)/(t-e));return s*s*(3-2*s)}function EE(r,e,t){const s=ns((r-e)/(t-e));return Math.sin(s*Math.PI)}function wE(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function TE(r=7,e={}){const{trunkHeight:t=5.2,branchLenMul:s=1,tiltMul:a=1,leafCountMul:l=1,leafScaleMul:d=1}=e,u=wE(r),h=(x,D)=>x+u()*(D-x),m=[],v=[],_=[];let S=1e-4;function M(x,D,R,N,X,k,O){const pe=[],T=new $(0,1,0),F=new $(h(-1,1),0,h(-1,1)).normalize(),ce=k===0?0:h(.08,.22);x.clone(),D.clone().normalize().multiplyScalar(R/7);for(let W=0;W<=7;W++){const L=W/7,G=x.clone().addScaledVector(D.clone().normalize(),R*L);G.addScaledVector(F,Math.sin(L*Math.PI)*R*.06*h(.5,1.2)),G.y-=ce*R*L*L,pe.push(G)}const fe=new Vl(pe),H=O+R,ie={curve:fe,r0:N,r1:X,depth:k,startDist:O,endDist:H,gStart:0,gEnd:0};m.push(ie);const j=m.length-1;S=Math.max(S,H);const ee=pe[pe.length-1],B=ee.clone().sub(pe[pe.length-2]).normalize();if(k>=2){const W=Math.floor(h(3,7)*l);for(let L=0;L<W;L++){const G=h(.35,1),xe=fe.getPoint(G),Y=O+R*G,he=new $(xe.x,0,xe.z).normalize().clone().lerp(T,.35).addScaledVector(new $(h(-1,1),h(-.3,1),h(-1,1)),.5).normalize();v.push({pos:xe,normal:he,scale:h(.7,1.25)*d,spin:h(0,Math.PI*2),growth:Y,branchIndex:j,branchT:G})}}if(k>=2&&u()<.55){const W=ee.clone();W.y-=X*2+.15,_.push({pos:W,scale:h(.8,1.15),growth:H,anchor:ee.clone(),branchIndex:j})}if(k<4){const W=k===0?4:k===1?3:2;for(let L=0;L<W;L++){const G=k===0?h(.82,1):h(.45,.95),xe=fe.getPoint(G),Y=O+R*G,le=L/W*Math.PI*2+h(-.5,.5),he=(k===0?h(.5,.9):h(.6,1.15))*a,Ae=new $(Math.cos(le)*Math.sin(he),Math.cos(he)+.35,Math.sin(le)*Math.sin(he)).normalize();Ae.lerp(B,.25).normalize();const ue=R*h(.55,.75)*s,oe=X*h(.7,.95),Re=oe*.55;M(xe,Ae,ue,oe,Re,k+1,Y)}}}M(new $(0,0,0),new $(.05,1,.02),t,.55,.34,0,0);for(const x of m)x.gStart=x.startDist/S,x.gEnd=x.endDist/S;for(const x of v)x.growth/=S;for(const x of _)x.growth/=S;let w=0,A=-1/0;_.forEach((x,D)=>{const R=x.pos.y+x.pos.z*.4-Math.abs(x.pos.x)*.2;R>A&&(A=R,w=D)});const y=_.length?_[w].branchIndex:-1;return{branches:m,leaves:v,fruits:_,fallIndex:w,fallBranchIndex:y,maxDist:S}}function AE(r={}){return new Ai({transparent:!0,depthWrite:!1,depthTest:!0,blending:Zo,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:r.size??2},uDrift:{value:r.drift??.14},uOpacity:{value:r.opacity??1},uFall:{value:1},uFallHeight:{value:r.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new We("#7cae3a")},uRipe:{value:new We("#cf2130")},uBlush:{value:new We("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
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
    `})}const Fl=new $,eg=new oo,bE=new $(0,1,0);class Mr{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,t,s,a,l,d){this.pos.push(e,t,s),this.growth.push(a),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(d)}addCurve(e,t,s,a,l,d,u,h){for(let m=0;m<s;m++){const v=Math.random(),_=e.getPoint(v),S=t*(.3+Math.pow(Math.random(),.5))*1.1,M=Math.random()*Math.PI*2,w=(Math.random()-.5)*t;_.x+=Math.cos(M)*S,_.z+=Math.sin(M)*S,_.y+=w;const A=a+(l-a)*v;this.push(_.x,_.y,_.z,A,d,u+Math.random()*(h-u))}}addLeafPuff(e,t,s,a,l,d,u,h,m){eg.setFromUnitVectors(bE,t);for(let v=0;v<l;v++){const _=Math.pow(Math.random(),.75),S=Math.sin(Math.max(0,_)*Math.PI),M=(Math.random()*2-1)*S*a,w=_*s,A=(Math.random()*2-1)*S*a*.4;Fl.set(M,w,A).applyQuaternion(eg).add(e),this.push(Fl.x,Fl.y,Fl.z,d,u,h+Math.random()*(m-h))}}addBlob(e,t,s,a,l,d,u,h,m){for(let v=0;v<l;v++){const _=Math.random(),S=Math.random()*Math.PI*2,M=Math.acos(2*Math.random()-1),w=Math.pow(_,.6),A=e.x+w*Math.sin(M)*Math.cos(S)*t,y=e.y+w*Math.cos(M)*s,x=e.z+w*Math.sin(M)*Math.sin(S)*a;this.push(A,y,x,d,u,h+Math.random()*(m-h))}}build(e){const t=new mi;t.setAttribute("position",new Fn(this.pos,3)),t.setAttribute("aGrowth",new Fn(this.growth,1)),t.setAttribute("aColor",new Fn(this.color,3)),t.setAttribute("aRand",new Fn(this.rand,1)),t.setAttribute("aSize",new Fn(this.size,1));const s=new Ud(t,e);return s.frustumCulled=!1,s}}const di=(r,e,t)=>new $(r,e,t),Ol=di(1.2,-1,0);class RE{constructor(e){this.scene=e,this.tree=TE(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Ko,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const t=AE(e);return this.mats.push(t),t}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new Xd(new We("#04060a"),.013);const t=1300,s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*46,s[l*3+1]=Math.random()*26-4,s[l*3+2]=(Math.random()-.5)*46;const a=new mi;a.setAttribute("position",new pi(s,3)),this.ambient=new Ud(a,new Yg({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:Zo})),e.add(this.ambient)}buildWaveField(){const s=[],a=[];for(let d=0;d<176;d++)for(let u=0;u<176;u++){const h=-15+d/175*2*15,m=-15+u/175*2*15;Math.hypot(h,m)>15||(s.push(h,0,m),a.push(Math.random()))}const l=new mi;l.setAttribute("position",new Fn(s,3)),l.setAttribute("aRand",new Fn(a,1)),this.waveMat=new Ai({transparent:!0,depthWrite:!1,blending:Zo,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uRippleCenter:{value:new wt(0,0)},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new We("#0b3f7a")},uHigh:{value:new We("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
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
      `}),this.wave=new Ud(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new Mr,t=new We("#5c3418"),s=.45;for(let a=0;a<3200;a++){const l=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),u=.7+.3*Math.pow(Math.random(),.85);let h=Math.cos(l)*Math.sin(d)*u,m=Math.cos(d)*u,v=Math.sin(l)*Math.sin(d)*u;const _=(m+1)/2,S=1-.72*Math.pow(1-_,1.8);h*=.44*S,v*=.34*S,m*=.62,e.push(h,s+m,v,0,t,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new Mr,t=(_,S)=>_+Math.random()*(S-_),s=[];let a=.001;const l=(_,S,M,w,A,y)=>{const D=[],R=new $(t(-1,1),0,t(-1,1)).normalize(),N=S.clone().normalize();for(let de=0;de<=6;de++){const pe=de/6,T=_.clone().addScaledVector(N,M*pe);T.y-=Math.pow(pe,1.3)*M*.22,T.addScaledVector(R,Math.sin(pe*Math.PI)*M*.13*t(.4,1.1)),D.push(T)}const X=new Vl(D),k=w*.14,O=A+M;if(s.push({curve:X,r0:w,r1:k,startDist:A,endDist:O,depth:y}),a=Math.max(a,O),y<4){const de=y===0||Math.random()<.45?3:2;for(let pe=0;pe<de;pe++){const T=t(.35,.94),F=X.getPoint(T),ce=A+M*T,fe=t(0,Math.PI*2),H=t(.55,1.15),ie=new $(Math.cos(fe)*Math.sin(H),-Math.abs(Math.cos(H))-.3,Math.sin(fe)*Math.sin(H)).normalize(),j=M*t(.5,.72),ee=Xs(w,k,T)*t(.72,.95);l(F,ie,j,ee,ce,y+1)}}};l(di(0,-.4,0),di(.05,-1,.03),2.6,.16,0,0);const d=Mi.seed.clone(),u=new We("#d9a066"),h=new We;for(const _ of s){const S=_.startDist/a,M=_.endDist/a,w=_.curve.getLength(),A=Math.max(50,Math.floor(w*460));for(let y=0;y<A;y++){const x=Math.random(),D=_.curve.getPoint(x),R=Xs(_.r0,_.r1,x),N=R*Math.pow(Math.random(),.6),X=Math.random()*Math.PI*2;D.x+=Math.cos(X)*N,D.z+=Math.sin(X)*N,D.y+=(Math.random()-.5)*R*.4,h.copy(d).lerp(u,x*.5);const k=Xs(1.9,.45,x)*(_.depth>=2?.8:1);e.push(D.x,D.y,D.z,Xs(S,M,x),h,k)}}const m=s[0],v=new We("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const _ of this.nodeAlong){const S=m.curve.getPoint(_),M=(m.startDist+_*(m.endDist-m.startDist))/a;e.addBlob(S,.15,.15,.15,140,M,v,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new Mr,t=new We("#6fce63"),s=Mi.leafGloss.clone(),a=new Vl([di(0,0,0),di(.04,.5,.02),di(-.03,1,-.02),di(0,1.5,0)]);e.addCurve(a,.05,1100,0,.65,t,.8,1.8);const l=di(0,1.5,0),d=di(-.9,.7,.15).normalize(),u=di(.9,.7,-.15).normalize();e.addLeafPuff(l,d,.85,.4,900,.72,s,.8,2),e.addLeafPuff(l,u,.85,.4,900,.78,s,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new Mr,t=new We("#8a6636"),s=new We("#5e441f"),a=new We;this.tree.branches.forEach((l,d)=>{const u=l.curve.getLength(),h=Math.max(l.r1,(l.r0+l.r1)*.5),m=l.depth===0?900:230,v=Math.floor(u*m)+40,_=l.depth===0?.15:.55;a.copy(t).lerp(s,_+Math.random()*.3);let S=l.curve;if(d===this.tree.fallBranchIndex){const M=l.curve.points,w=M.map((A,y)=>A.clone().addScaledVector(Ol,y/(M.length-1)));S=new Vl(w)}e.addCurve(S,h,v,l.gStart,l.gEnd,a,1,2.6)}),this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new Mr,t=Mi.leaf.clone(),s=Mi.leafGloss.clone(),a=new We,l=new $;for(const u of this.tree.leaves){l.add(u.pos),a.copy(t).lerp(s,Math.random()*.5);const h=1.15*u.scale,m=.55*u.scale,v=u.branchIndex===this.tree.fallBranchIndex?u.pos.clone().addScaledVector(Ol,u.branchT):u.pos;e.addLeafPuff(v,u.normal,h,m,70,u.growth,a,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const d=4.6;for(let u=0;u<16e3;u++){const h=new $(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),m=Math.pow(Math.random(),.6)*d,v=l.clone().addScaledVector(h,m);v.y+=(d-m)*.15,a.copy(t).lerp(s,Math.random()*.6);const _=ns(.55+m/d*.45);e.push(v.x,v.y,v.z,_,a,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new Mr,t=Mi.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone().add(Ol),this.tree.fruits.forEach((s,a)=>{a!==this.fallIndex&&e.addBlob(s.pos,.42*s.scale,.36*s.scale,.42*s.scale,200,s.growth,t,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(Mi.appleUnripe),e.uniforms.uRipe.value.copy(Mi.appleRipe),e.uniforms.uBlush.value.copy(Mi.appleBlush)}buildBlossoms(){const e=new Mr,t=Mi.blossom.clone();this.tree.fruits.forEach((s,a)=>{const l=a===this.tree.fallIndex?s.anchor.clone().add(Ol):s.anchor;e.addBlob(l,.16,.16,.16,40,0,t,1.6,3.6)}),this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new Mr,t=Mi.appleRipe.clone();e.addBlob(di(0,0,0),.44,.38,.44,340,0,t,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,t){for(const w of this.mats)w.uniforms.uTime.value=t;this.waveMat.uniforms.uTime.value=t;const s=mn(e,0,.1);this.seedMat.uniforms.uFall.value=s;const a=mn(e,.1,.28);this.seed.position.y=-a*.8;const l=mn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=Xs(.55,.12,mn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*mn(e,.55,.72);let d=0,u=0;e<.5&&(d=mn(e,.08,.42),u=.7),this.rootMat.uniforms.uReveal.value=mn(e,.2,.4),this.roots.visible=e<.52;const h=mn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=h,this.seedlingMat.uniforms.uOpacity.value=1-mn(e,.56,.66),this.seedling.visible=h>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=mn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=mn(e,.56,.78);const m=mn(e,.72,.8)*(1-mn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=m,this.blossoms.visible=m>.01;const v=mn(e,.72,.86),_=mn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=v,this.fruitMat.uniforms.uRipen.value=_,this.fallMat.uniforms.uRipen.value=_;const S=ns((e-.86)/(.94-.86)),M=S*S;this.fall.visible=v>.01,this.fall.position.set(this.fallAnchor.x,Xs(this.fallAnchor.y,.3,M),this.fallAnchor.z),this.fall.rotation.z=S*3,e>=.94?(d=mn(e,.94,1),u=1.8,this.waveMat.uniforms.uRippleCenter.value.set(this.fallAnchor.x,this.fallAnchor.z)):this.waveMat.uniforms.uRippleCenter.value.set(0,0),this.waveMat.uniforms.uRipple.value=d,this.waveMat.uniforms.uRippleAmp.value=u,this.ambient.rotation.y=t*.008}}const In=(r,e,t)=>new $(r,e,t),kl=[{p:0,pos:In(0,6.5,21),tgt:In(0,1.6,0)},{p:.16,pos:In(2.2,5.2,18),tgt:In(0,.6,0)},{p:.34,pos:In(4.5,-1.2,14),tgt:In(0,-2.4,0)},{p:.5,pos:In(2.6,2.6,13),tgt:In(0,1.2,0)},{p:.72,pos:In(-3.2,7.5,27),tgt:In(0,7,0)},{p:.86,pos:In(6,11.5,23),tgt:In(.4,9.5,0)},{p:1,pos:In(0,8.5,34),tgt:In(0,8,0)}],CE=r=>r*r*(3-2*r);function PE(r){return r<.2?0:r<.4?1:r<.58?2:r<.78?3:4}function LE(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function NE(r){r.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(s=>{Object.values(s).forEach(a=>{a&&a.isTexture&&a.dispose()}),s.dispose()})})}function DE({sectionRef:r,onStageChange:e,onAnnotationChange:t,onWebGLUnavailable:s}){const a=Pe.useRef(null),l=Pe.useRef(e);l.current=e;const d=Pe.useRef(t);d.current=t;const u=Pe.useRef(s);return u.current=s,Pe.useEffect(()=>{const h=a.current,m=r.current;if(!h||!m)return;const v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _;try{_=new qg({canvas:h,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{u.current&&u.current();return}_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,0),_.toneMapping=mg,_.toneMappingExposure=1.1;const S=new yE,M=new ei(50,window.innerWidth/window.innerHeight,.1,400);M.position.set(0,5,12);const w=new RE(S);let A=!1;const y=new $,x=new $,D=(j,ee)=>{let B=0;for(;B<kl.length-2&&j>kl[B+1].p;)B++;const Z=kl[B],W=kl[B+1],L=CE(ns((j-Z.p)/(W.p-Z.p)));y.lerpVectors(Z.pos,W.pos,L),x.lerpVectors(Z.tgt,W.tgt,L);const G=EE(j,.5,.72);x.y+=G*1.7,y.y+=G*.9,y.z+=G*3.2,y.x+=Math.sin(ee*.22)*.3,y.y+=Math.cos(ee*.18)*.18,A&&y.sub(x).multiplyScalar(1.28).add(x),M.position.copy(y),M.lookAt(x)},R=()=>{const j=window.innerWidth,ee=window.innerHeight;A=j<821,M.aspect=j/ee,M.clearViewOffset(),_.setSize(j,ee),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),A?M.setViewOffset(j,ee,0,ee*.2,j,ee):M.setViewOffset(j,ee,j*.22,0,j,ee),M.updateProjectionMatrix()};R();const N=()=>{const j=m.getBoundingClientRect(),ee=m.offsetHeight-window.innerHeight,B=ns(-j.top,0,Math.max(0,ee));return ee>0?ns(B/ee):0};let X=-1,k=-1;const O=j=>{const ee=PE(j);ee!==X&&(X=ee,l.current&&l.current(ee));const B=LE(j);B!==k&&(k=B,d.current&&d.current(B))},de=new ME;let pe=N(),T=null;const F=()=>{const j=N();pe=j,w.update(j,0),D(j,0),O(j),_.render(S,M)},ce=()=>{const j=Math.min(de.getDelta(),.05),ee=de.elapsedTime,B=N(),Z=1-Math.pow(.0015,j);pe+=(B-pe)*Z,w.update(pe,ee),D(pe,ee),O(pe),_.render(S,M),T=requestAnimationFrame(ce)},fe=()=>{R(),v&&F()};window.addEventListener("resize",fe);const H=j=>{j.preventDefault(),T&&(cancelAnimationFrame(T),T=null)};h.addEventListener("webglcontextlost",H,!1);let ie=null;return v?(ie=()=>F(),window.addEventListener("scroll",ie,{passive:!0}),F()):T=requestAnimationFrame(ce),()=>{var j;T&&cancelAnimationFrame(T),window.removeEventListener("resize",fe),ie&&window.removeEventListener("scroll",ie),h.removeEventListener("webglcontextlost",H,!1),NE(S),S.clear(),_.dispose(),(j=_.forceContextLoss)==null||j.call(_)}},[r]),p.jsx("canvas",{ref:a,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class $g extends eo.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){const{error:e}=this.state;if(e){const{fallback:t}=this.props;return typeof t=="function"?t(e):t!==void 0?t:null}return this.props.children}}const IE=560,UE=[0,-1.5,1.5,-2,2],FE=[0,-6,5,-5,6];function OE(r,e,t){const s=t?"0px":"-50%";if(r<=e){const l=UE[r]??0;return{transform:`translate(${FE[r]??0}px, ${t?"0px":s}) rotate(${l}deg)`,opacity:1,zIndex:10+r}}return{transform:`translate(0, ${t?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function kE({card:r,style:e}){return p.jsxs("article",{className:"story-card",style:e,children:[p.jsx("div",{className:"sc-accent"}),p.jsxs("div",{className:"sc-body",children:[p.jsx("p",{className:"sc-num",children:r.num}),p.jsx("h3",{className:"sc-title",children:r.title}),r.callout&&p.jsxs("div",{className:"sc-callout",children:[p.jsx("span",{className:"sc-callout-label",children:r.callout.label}),p.jsx("p",{className:"sc-callout-text",children:r.callout.text})]}),p.jsx("div",{className:"sc-chips",children:r.human.map(t=>p.jsx("span",{className:"chip chip-human",children:t},t))}),p.jsxs("div",{className:"sc-ai",children:[p.jsxs("div",{className:"sc-ai-head",children:[p.jsx("span",{className:"sc-ai-star",children:"✦"}),p.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),p.jsx("div",{className:"sc-chips",style:{margin:0},children:r.ai.map(t=>p.jsx("span",{className:"chip chip-ai",children:t},t))})]})]})]})}function zE(){const r=Pe.useRef(null),{theme:e}=Hd(),[t,s]=Pe.useState(0),[a,l]=Pe.useState(typeof window<"u"?window.innerWidth<821:!1);Pe.useEffect(()=>{const _=()=>l(window.innerWidth<821);return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const d=Pe.useCallback(_=>s(_),[]),[u,h]=Pe.useState(!1),m=Pe.useCallback(()=>h(!0),[]),v=Pe.useRef(null);return p.jsxs("section",{id:"practice",ref:r,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[p.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(64px,9vw,120px) clamp(22px,5vw,44px) clamp(40px,6vw,72px)"},children:[p.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"02 · Practice"}),p.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),p.jsx("div",{ref:v,style:{position:"relative",height:`${IE}vh`},children:p.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[u&&p.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),p.jsx($g,{fallback:null,children:p.jsx(DE,{sectionRef:v,onStageChange:d,onWebGLUnavailable:m})}),p.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:p.jsx("div",{className:"practice-card-shell",children:X0.map((_,S)=>p.jsx(kE,{card:_,style:OE(S,t,a)},_.id))})})]})}),p.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const yd={fontFamily:"var(--font-mono)"};function BE(){return p.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:p.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[p.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[p.jsx("div",{style:{...yd,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"03 · Instruments"}),p.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."})]}),p.jsx("div",{className:"instruments-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)",transitionDelay:"0.12s"},children:q0.map(r=>p.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)"},children:[p.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:p.jsx("img",{src:r.logo,alt:r.alt,className:"theme-logo",style:{...r.logoStyle,opacity:1}})}),p.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[p.jsx("div",{style:{...yd,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),p.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:r.problem}),p.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),p.jsx("div",{style:{...yd,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),p.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:r.result})]})]},r.id))})]})})}const HE=144,tg=40;function GE(r){const[e,t]=Pe.useState(-1),s=Pe.useCallback(d=>t(d),[]),a=Pe.useCallback(()=>t(-1),[]),l=Pe.useCallback((d,u)=>{const h=d*HE,m=r[d%r.length];if(e===-1)return{x:h,rot:m,scale:1,z:d};const v=d-e;return v===0?{x:h,rot:0,scale:1.04,z:100}:{x:h+(v<0?-tg:tg),rot:m,scale:.98,z:50-Math.abs(v)}},[e,r]);return{activeIndex:e,focus:s,rest:a,getTransform:l}}const VE=Sd.map(r=>r.rot);function jE(){const{focus:r,rest:e,getTransform:t}=GE(VE),s=Sd.length;return p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{...ng,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),p.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:p.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:Sd.map((a,l)=>{const d=t(l,s);return p.jsxs("article",{onMouseEnter:()=>r(l),onClick:()=>r(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${d.x}px) rotate(${d.rot}deg) scale(${d.scale})`,zIndex:d.z},children:[p.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),p.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:a.quote}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[p.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...ng,fontSize:10,fontWeight:700,flex:"none"},children:a.initials}),p.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[p.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:a.name}),p.jsx("br",{}),p.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:a.title})]})]})]},a.id)})})}),p.jsx("div",{style:{marginTop:16,textAlign:"right"},children:p.jsxs("a",{href:Y0,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",p.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const ng={fontFamily:"var(--font-mono)"},ig={fontFamily:"var(--font-mono)"};function WE(){return p.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:p.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[p.jsx("div",{style:{...ig,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),p.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[p.jsxs("div",{children:[p.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[Si.quoteLead,p.jsx("span",{style:{color:"var(--accent)"},children:Si.quoteAccent}),Si.quoteTail]}),p.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:Si.paragraphs[0]}),p.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:Si.paragraphs[1]})]}),p.jsxs("div",{children:[p.jsxs("div",{style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[p.jsx("img",{src:Si.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),p.jsxs("div",{style:{padding:"16px 18px"},children:[p.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),p.jsx("div",{style:{...ig,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),p.jsx("div",{style:{marginTop:14},children:Si.facts.map(r=>p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[p.jsx("span",{style:{color:"var(--text-secondary)"},children:r.label}),p.jsx("span",{style:{color:r.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:r.value})]},r.label))}),p.jsx("a",{href:Si.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),p.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:p.jsx(jE,{})}),p.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[Si.careerLine,p.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:Si.careerHighlight})]})]})})}const rg={fontFamily:"var(--font-mono)"};function XE(){return p.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[p.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[p.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),p.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),p.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[p.jsx("div",{"data-reveal":"",style:{...rg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),p.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[Ys.heading," ",p.jsx("span",{style:{color:"var(--accent)"},children:Ys.headingAccent})]}),p.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:Ys.links.map(r=>p.jsx("a",{href:r.href,className:`text-link ${r.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:r.variant==="primary"?{paddingBottom:3}:void 0,...r.external?{target:"_blank",rel:"noopener noreferrer"}:{},...r.download?{download:!0}:{},children:r.label},r.label))}),p.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...rg,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:Ys.copyright})]})]})}function Kg(r){Pe.useEffect(()=>{const e=r.current;if(!e||typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.setAttribute("data-reveal","visible"),t.unobserve(a.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(s=>t.observe(s)),()=>t.disconnect()},[r])}function qE(){const r=Pe.useRef(null);return Kg(r),p.jsxs("div",{id:"top",ref:r,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[p.jsx(Q0,{}),p.jsxs("main",{children:[p.jsx(n_,{}),p.jsx(u_,{}),p.jsx(zE,{}),p.jsx(BE,{}),p.jsx(WE,{})]}),p.jsx(XE,{})]})}const Fd={},Qg=eo.createContext(Fd);function Yd(r){const e=eo.useContext(Qg);return eo.useMemo(function(){return typeof r=="function"?r(e):{...e,...r}},[e,r])}function YE(r){let e;return r.disableParentContext?e=typeof r.components=="function"?r.components(Fd):r.components||Fd:e=Yd(r.components),eo.createElement(Qg.Provider,{value:e},r.children)}const sg={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function $E(){const[r,e]=Pe.useState(!1),{theme:t,toggleTheme:s}=Hd(),a=Pe.useCallback(()=>e(d=>!d),[]),l=Pe.useCallback(()=>e(!1),[]);return p.jsx("header",{className:r?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)"},children:p.jsxs("div",{style:{maxWidth:1080,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsxs(Bd,{to:"/",style:{display:"flex",alignItems:"center",gap:10,height:20},children:[p.jsx("img",{src:Zr.logo,alt:Zr.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),p.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Zr.name})]}),p.jsx("button",{className:"hamburger",onClick:a,"aria-label":"Menu","aria-expanded":r,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),p.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[ug.map(d=>p.jsx("a",{href:`/${d.href}`,onClick:l,className:"nav-link",style:sg,children:d.label},d.href)),p.jsx("a",{href:`mailto:${Ti}`,onClick:l,className:"cta-pill",style:{...sg,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),p.jsx("button",{type:"button",onClick:s,title:t==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":t==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",fontSize:14,color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:t==="dark"?"☀️":"🌙"})]})]})})}const _t=r=>p.jsx("path",{d:r},r),KE={user:[_t("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"),p.jsx("circle",{cx:"12",cy:"7",r:"4"},"c")],users:[_t("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"),p.jsx("circle",{cx:"9",cy:"7",r:"4"},"c"),_t("M22 21v-2a4 4 0 0 0-3-3.87"),_t("M16 3.13a4 4 0 0 1 0 7.75")],pin:[_t("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"),p.jsx("circle",{cx:"12",cy:"10",r:"3"},"c")],device:[p.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),_t("M12 18h.01")],calendar:[p.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"},"r"),_t("M16 2v4M8 2v4M3 10h18")],wrench:[_t("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")],rocket:[_t("M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"),_t("M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"),_t("M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"),_t("M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5")],trendUp:[p.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"},"a"),p.jsx("polyline",{points:"16 7 22 7 22 13"},"b")],cube:[_t("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"),_t("M3.27 6.96 12 12.01l8.73-5.05"),_t("M12 22.08V12")],layers:[p.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"},"a"),p.jsx("polyline",{points:"2 17 12 22 22 17"},"b"),p.jsx("polyline",{points:"2 12 12 17 22 12"},"c")],check:[_t("M22 11.08V12a10 10 0 1 1-5.93-9.14"),p.jsx("polyline",{points:"22 4 12 14.01 9 11.01"},"p")],ban:[p.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),p.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},"l")],shield:[_t("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],zap:[p.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},"p")],alert:[_t("M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"),p.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"},"a"),p.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},"b")],compass:[p.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),p.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},"p")],eye:[_t("M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"),p.jsx("circle",{cx:"12",cy:"12",r:"3"},"c")],refresh:[_t("M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"),_t("M21 3v5h-5"),_t("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"),_t("M8 16H3v5")],merge:[p.jsx("circle",{cx:"18",cy:"18",r:"3"},"a"),p.jsx("circle",{cx:"6",cy:"6",r:"3"},"b"),_t("M6 21V9a9 9 0 0 0 9 9")],minimize:[p.jsx("polyline",{points:"4 14 10 14 10 20"},"a"),p.jsx("polyline",{points:"20 10 14 10 14 4"},"b"),p.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"},"c"),p.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"},"d")],sliders:[p.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"},"a"),p.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"},"b"),p.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"},"c"),p.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"},"d"),p.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"},"e"),p.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"},"f"),p.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"},"g"),p.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"},"h"),p.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"},"i")],filter:[p.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},"p")],sparkles:[_t("M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7L12 3z"),_t("M19 15l.6 1.6L21 17.2l-1.4.6L19 19l-.6-1.6L17 17.8l1.4-.6L19 15z")],flask:[_t("M9 3h6"),_t("M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3"),_t("M7 15h10")],chart:[p.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"},"a"),p.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"},"b"),p.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"},"c")],flag:[_t("M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"),p.jsx("line",{x1:"4",y1:"22",x2:"4",y2:"15"},"l")],target:[p.jsx("circle",{cx:"12",cy:"12",r:"10"},"a"),p.jsx("circle",{cx:"12",cy:"12",r:"6"},"b"),p.jsx("circle",{cx:"12",cy:"12",r:"2"},"c")],smartphone:[p.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),_t("M12 18h.01")],lightbulb:[_t("M9 18h6"),_t("M10 22h4"),_t("M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14")]},og={quote:"M9.5 5C6.5 5 4 7.5 4 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.6 19.5 13 16 13 10.6 13 7.3 11.6 5 9.5 5Zm10 0C16.5 5 14 7.5 14 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.6 19.5 23 16 23 10.6 23 7.3 21.6 5 19.5 5Z"};function rs({name:r,size:e=18,strokeWidth:t=1.75,className:s,style:a,...l}){if(og[r])return p.jsx("svg",{className:s,style:a,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false",...l,children:p.jsx("path",{d:og[r]})});const d=KE[r];return d?p.jsx("svg",{className:s,style:a,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...l,children:d}):null}const Zg=Pe.createContext({});function Od(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(Od).join(" "):r&&r.props?Od(r.props.children):""}function Jg(r){return Od(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function QE({children:r,eyebrow:e,icon:t,id:s,...a}){const l=s||Jg(r),d=Pe.useContext(Zg),u=t||d[l];return p.jsxs("div",{className:"cs-heading",id:l,...a,children:[p.jsxs("div",{className:"cs-heading-eyebrow",children:[p.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),u?p.jsx(rs,{name:u,size:14,className:"cs-heading-icon"}):null,e?p.jsx("span",{children:e}):null]}),p.jsx("h2",{className:"cs-heading-title",children:p.jsx("a",{href:`#${l}`,className:"cs-heading-anchor",children:r})})]})}function ZE({children:r,id:e,...t}){const s=e||Jg(r);return p.jsx("h3",{className:"cs-subheading",id:s,...t,children:r})}function JE({label:r="The outcome",icon:e="rocket",items:t=[],...s}){return p.jsxs("section",{className:"cs-outcomeband","aria-label":r,...s,children:[p.jsxs("div",{className:"cs-outcomeband-label",children:[p.jsx(rs,{name:e,size:15}),p.jsx("span",{children:r})]}),p.jsx("div",{className:"cs-outcomeband-list",children:t.map((a,l)=>p.jsxs("div",{className:"cs-outcome",children:[p.jsx("span",{className:"cs-outcome-icon","aria-hidden":"true",children:p.jsx(rs,{name:a.icon,size:20})}),p.jsx("div",{className:"cs-outcome-text",children:a.text})]},l))})]})}function Ht({children:r,lead:e=!1,className:t="",...s}){return p.jsx("div",{className:`cs-prose${e?" cs-prose--lead":""}${t?` ${t}`:""}`,...s,children:r})}function zl({children:r,variant:e="principle",cite:t,...s}){const a=e==="user"?"user":"principle";return p.jsxs("figure",{className:`cs-pullquote cs-pullquote--${a}`,...s,children:[a==="user"?p.jsx("span",{className:"cs-pullquote-glyph","aria-hidden":"true",children:p.jsx(rs,{name:"quote",size:40})}):p.jsx("span",{className:"cs-pullquote-chip","aria-hidden":"true",children:p.jsx(rs,{name:"lightbulb",size:18})}),p.jsx("blockquote",{className:"cs-pullquote-text",children:r}),t?p.jsx("figcaption",{className:"cs-pullquote-cite",children:t}):null]})}function ss({src:r,alt:e=""}){const[t,s]=Pe.useState(!1);return r&&!t?p.jsx("span",{className:"cs-figure-media",children:p.jsx("img",{src:r,alt:e,loading:"lazy",decoding:"async",onError:()=>s(!0)})}):p.jsx(ew,{alt:e,file:r})}function ew({alt:r="",file:e,bare:t=!1}){const s=typeof e=="string"?e.split("/").pop():null;return p.jsxs("div",{className:`cs-placeholder${t?" cs-placeholder--bare":""}`,role:"img","aria-label":r||"Image placeholder",children:[p.jsx("span",{className:"cs-placeholder-tag",children:"Image"}),r?p.jsx("span",{className:"cs-placeholder-alt",children:r}):null,s?p.jsx("span",{className:"cs-placeholder-file",children:s}):null]})}function qs({src:r,alt:e="",caption:t,fullBleed:s=!1,wide:a=!1,...l}){const d=`cs-figure${s?" cs-figure--full":a?" cs-figure--wide":""}`;return p.jsxs("figure",{className:d,...l,children:[p.jsx(ss,{src:r,alt:e}),t?p.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function tw({src:r,alt:e="",chip:t,secondary:s,...a}){return p.jsxs("div",{className:`cs-hero${s?" cs-hero--multi":""}`,...a,children:[p.jsx("span",{className:"cs-hero-grid","aria-hidden":"true"}),p.jsx("span",{className:"cs-hero-glow","aria-hidden":"true"}),p.jsxs("div",{className:"cs-hero-stage",children:[p.jsx("div",{className:"cs-hero-device cs-hero-device--tablet",children:p.jsx("div",{className:"cs-hero-screen",children:p.jsx(ss,{src:r,alt:e})})}),s?p.jsx("div",{className:"cs-hero-device cs-hero-device--phone",children:p.jsx("div",{className:"cs-hero-screen cs-hero-screen--phone",children:p.jsx(ss,{src:s.src,alt:s.alt})})}):null]}),t?p.jsxs("span",{className:"cs-hero-chip",children:[p.jsx("span",{className:"cs-hero-chip-dot","aria-hidden":"true"}),t]}):null]})}function nw({items:r=[],caption:e,...t}){const s=Math.min(Math.max(r.length,1),4);return p.jsxs("figure",{className:"cs-illrow",style:{"--cs-cols":s},...t,children:[p.jsx("div",{className:"cs-illrow-grid",children:r.map((a,l)=>p.jsxs("div",{className:"cs-illrow-cell",children:[p.jsx(ss,{src:a.src,alt:a.alt}),a.title||a.tag?p.jsxs("div",{className:"cs-illrow-meta",children:[a.title?p.jsx("div",{className:"cs-illrow-title",children:a.title}):null,a.tag?p.jsx("span",{className:`cs-illrow-tag cs-illrow-tag--${a.tone||"neutral"}`,children:a.tag}):null]}):null]},l))}),e?p.jsx("figcaption",{className:"cs-caption",children:e}):null]})}function iw({before:r={},after:e={},caption:t,beforeLabel:s="Before",afterLabel:a="After",...l}){return p.jsxs("figure",{className:"cs-beforeafter",...l,children:[p.jsxs("div",{className:"cs-beforeafter-grid",children:[p.jsxs("div",{className:"cs-ba-col",children:[p.jsx("span",{className:"cs-ba-tag cs-ba-tag--before",children:s}),p.jsx(ss,{src:r.src,alt:r.alt})]}),p.jsxs("div",{className:"cs-ba-col",children:[p.jsx("span",{className:"cs-ba-tag cs-ba-tag--after",children:a}),p.jsx(ss,{src:e.src,alt:e.alt})]})]}),t?p.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function Bl({title:r,index:e,media:t,tradeoff:s,children:a,...l}){return p.jsxs("section",{className:"cs-decision",...l,children:[p.jsxs("div",{className:"cs-decision-rail",children:[e?p.jsx("div",{className:"cs-decision-index",children:e}):null,r?p.jsx("h3",{className:"cs-decision-title",children:r}):null]}),p.jsxs("div",{className:"cs-decision-main",children:[p.jsx("div",{className:"cs-decision-body",children:a}),t?p.jsxs("div",{className:"cs-decision-media",children:[p.jsx(ss,{src:t.src,alt:t.alt}),t.caption?p.jsx("div",{className:"cs-caption",children:t.caption}):null]}):null,s?p.jsxs("div",{className:"cs-tradeoff",children:[s.considered?p.jsxs("div",{className:"cs-tradeoff-row",children:[p.jsx("span",{className:"cs-tradeoff-label",children:"Alternative considered"}),p.jsx("p",{className:"cs-tradeoff-text",children:s.considered})]}):null,s.why?p.jsxs("div",{className:"cs-tradeoff-row",children:[p.jsx("span",{className:"cs-tradeoff-label",children:"Why we didn’t"}),p.jsx("p",{className:"cs-tradeoff-text",children:s.why})]}):null]}):null]})]})}function rw(r){return typeof r=="string"||typeof r=="number"?String(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""):""}function sw({heading:r,eyebrow:e,icon:t,intro:s,coda:a,id:l,children:d,...u}){const h=l||rw(r);return p.jsxs("section",{className:"cs-decisionlist",id:h,...u,children:[p.jsxs("div",{className:"cs-decisionlist-head",children:[p.jsxs("div",{className:"cs-heading-eyebrow",children:[p.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),t?p.jsx(rs,{name:t,size:14,className:"cs-heading-icon"}):null,e?p.jsx("span",{children:e}):null]}),r?p.jsx("h2",{className:"cs-decisionlist-title",children:p.jsx("a",{href:`#${h}`,className:"cs-heading-anchor",children:r})}):null,s?p.jsx("div",{className:"cs-prose cs-decisionlist-intro",children:s}):null]}),p.jsx("div",{className:"cs-decisionlist-rows",children:d}),a?p.jsxs("div",{className:"cs-decisionlist-coda",children:[a.title?p.jsx("h3",{className:"cs-subheading cs-decisionlist-coda-title",children:a.title}):null,a.body?p.jsx("div",{className:"cs-prose cs-decisionlist-coda-body",children:a.body}):null]}):null]})}function ag({caption:r,head:e=[],rows:t=[],rowHeader:s=!0,minWidth:a,...l}){return p.jsx("div",{className:"cs-table-wrap",...l,children:p.jsx("div",{className:"cs-table-scroll",children:p.jsxs("table",{className:"cs-table",style:a?{minWidth:a}:void 0,children:[r?p.jsx("caption",{children:r}):null,e.length?p.jsx("thead",{children:p.jsx("tr",{children:e.map((d,u)=>p.jsx("th",{scope:"col",children:d},u))})}):null,p.jsx("tbody",{children:t.map((d,u)=>p.jsx("tr",{children:d.map((h,m)=>m===0&&s?p.jsx("th",{scope:"row",children:h},m):p.jsx("td",{children:h},m))},u))})]})})})}const ow={h2:r=>p.jsx(QE,{...r}),h3:r=>p.jsx(ZE,{...r})},aw={Role:"user",Team:"users",Region:"pin",Platform:"device",Timeline:"calendar",Tools:"wrench"};function lw({meta:r={},next:e,children:t}){const{title:s,subtitle:a,tags:l=[],glance:d=[],accent:u}=r,h=u?{"--cs-accent":u}:void 0,m=Pe.useRef(null);return Pe.useEffect(()=>{const v=m.current;v&&v.querySelectorAll(".cs-content > *").forEach(_=>{!_.classList.contains("cs-figure--full")&&!_.classList.contains("cs-hero")&&_.setAttribute("data-reveal","")})},[]),Kg(m),p.jsxs("div",{className:"cs-page",style:h,ref:m,children:[p.jsx(cw,{}),p.jsx($E,{}),p.jsxs("main",{children:[p.jsxs("header",{className:"cs-wrap",children:[p.jsxs("div",{className:"cs-masthead",children:[l.length?p.jsx("div",{className:"cs-tags",children:l.join("  ·  ")}):null,s?p.jsx("h1",{className:"cs-title",children:s}):null,a?p.jsx("p",{className:"cs-subtitle",children:a}):null]}),d.length?p.jsx("dl",{className:"cs-glance",children:d.map(v=>p.jsxs("div",{className:"cs-glance-item",children:[p.jsx("span",{className:"cs-glance-icon","aria-hidden":"true",children:p.jsx(rs,{name:v.icon||aw[v.label],size:16})}),p.jsxs("div",{className:"cs-glance-textwrap",children:[p.jsx("dt",{className:"cs-glance-label",children:v.label}),p.jsx("dd",{className:"cs-glance-value",children:v.value})]})]},v.label))}):null]}),p.jsx("div",{className:"cs-wrap",children:p.jsx("article",{className:"cs-content",children:t})})]}),p.jsx(uw,{next:e})]})}function cw(){const r=Pe.useRef(null);return Pe.useEffect(()=>{let e=0;const t=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{const s=document.documentElement,a=s.scrollHeight-s.clientHeight,l=a>0?Math.min(Math.max(s.scrollTop/a,0),1):0;r.current&&(r.current.style.transform=`scaleX(${l})`)})};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),cancelAnimationFrame(e)}},[]),p.jsx("div",{className:"cs-progress","aria-hidden":"true",children:p.jsx("i",{ref:r})})}function uw({next:r}){var e;return p.jsx("footer",{className:"cs-footer",children:p.jsxs("div",{className:"cs-footer-inner",children:[p.jsx("div",{className:"cs-next-label",children:r?"Next project":"More work"}),r?p.jsxs(Bd,{to:`/case-studies/${r.slug}`,className:"cs-next-link",children:[p.jsx("span",{children:((e=r.meta)==null?void 0:e.title)||r.slug}),p.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}):p.jsxs("a",{href:"/#work",className:"cs-next-link",children:[p.jsx("span",{children:"See all work"}),p.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}),p.jsx("div",{className:"cs-footer-contact",children:Ys.links.map(t=>p.jsx("a",{href:t.href,className:`text-link ${t.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:t.variant==="primary"?{paddingBottom:3}:void 0,...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},...t.download?{download:!0}:{},children:t.label},t.label))}),p.jsxs("div",{className:"cs-footer-meta",children:[p.jsx("span",{children:Ys.copyright}),p.jsx("a",{href:"/#top",className:"text-link text-link--muted",children:"Back to top ↑"})]})]})})}const gn="/case-studies/swiftsort/images",dw={order:1,title:"SwiftSort — from memorized routes to instant, system-guided action",subtitle:"Shifting sorting decisions from workers to the system, across high-volume Nordic logistics terminals.",tags:["Logistics UX","Mobile & wearable","End-to-end ownership","POC → production"],glance:[{label:"Role",value:"Sole designer on this project (part of a wider design team) — owned research, UX strategy, interaction design, and design–engineering alignment end to end"},{label:"Team",value:"1 Product Manager · 4 Engineers · 2 Operations Leads"},{label:"Region",value:"Nordic"},{label:"Platform",value:"Android tablet + ProGlove wearable scanner"},{label:"Timeline",value:"3 months, proof-of-concept through to production"},{label:"Tools",value:"Figma, Figma Make, Banani, MS Copilot"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","what-the-old-workflow-actually-looked-like":"eye","the-moment-that-changed-the-design":"refresh","working-with-engineering":"merge","how-the-workflow-shrank":"minimize","one-solution-two-form-factors":"smartphone","a-second-win-surfaced-by-the-business":"layers","how-the-work-got-made":"sparkles","exploring-then-discarding":"filter","how-ai-fit-into-the-process":"sparkles","testing-on-the-floor":"flask",outcomes:"chart","what-we-shipped-knowingly-incomplete":"flag","the-takeaway":"target"}};function lg(r){const e={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Yd(),...r.components};return p.jsxs(p.Fragment,{children:[`
`,`
`,`
`,`
`,p.jsx(tw,{src:`${gn}/01-hero.png`,alt:"The finished SwiftSort screen on a terminal tablet: a large destination card reading “12 CD”, the address, a barcode, and a QR “DROP” code on the right.",secondary:{src:`${gn}/12-tc57-stacking.png`,alt:"The handheld TC57 screen — a green Drop button and no QR card (tap to drop, in-hand device)."},chip:"Live in production"}),`
`,p.jsx(e.h2,{children:"The outcome"}),`
`,p.jsx(Ht,{children:p.jsxs(e.p,{children:["SwiftSort is ",p.jsx(e.strong,{children:"live in production"}),", running across the client's Nordic terminals. It replaced memory-dependent sorting with a scan-guided workflow — and the operations side felt the difference firsthand."]})}),`
`,p.jsx(JE,{items:[{icon:"rocket",text:p.jsxs(p.Fragment,{children:[p.jsx(e.strong,{children:"Shipped and running in live terminals"})," — not a prototype or a pilot that stalled"]})},{icon:"trendUp",text:p.jsxs(p.Fragment,{children:[p.jsx(e.strong,{children:"Faster onboarding and fewer gate errors"})," — reported by terminal managers to business stakeholders, not just observed by the design team"]})},{icon:"cube",text:p.jsxs(p.Fragment,{children:[p.jsx(e.strong,{children:"Zero new hardware, zero layout changes"})," — it ran on scanners workers already used"]})}]}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:p.jsx(e.em,{children:"The whole project ran on one principle:"})})}),`
`,p.jsx(zl,{variant:"principle",children:p.jsxs(e.p,{children:[p.jsx("strong",{children:"Find the behavior that already exists, and build the system around it"})," — so workers have less to learn, not more."]})}),`
`,p.jsx(e.h2,{children:"The problem"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["Imagine standing on a warehouse floor as parcels pour in. Every box looks the same — nothing tells you which has to leave ",p.jsx(e.em,{children:"today"})," and which can wait. You just have to ",p.jsx(e.em,{children:"know"}),", from experience, which gate each postal code maps to and in what order to stack."]}),p.jsx(e.p,{children:"That was the daily reality. Sorting depended entirely on what workers had memorized. When I asked one operator how he kept it all straight, he shrugged:"})]}),`
`,p.jsx(zl,{variant:"user",children:"I just memorize it. When I forget, I ask someone."}),`
`,p.jsxs(Ht,{children:[p.jsx(e.p,{children:"That one sentence is the whole problem. Critical operational knowledge wasn't in the system — it was in people's heads, and it walked out the door every time someone changed shifts or left."}),p.jsx(e.p,{children:p.jsx(e.strong,{children:"What that cost the business:"})}),p.jsxs(e.ul,{children:[`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Slow throughput"})," during peak hours, because every parcel required a mental lookup"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Frequent errors"})," — urgent and low-priority goods mixed at the gate, so time-sensitive deliveries missed their trucks"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Painful onboarding"})," — a new hire couldn't be useful until they'd memorized the routes, which took weeks"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Inconsistent terminals"})," — experienced operators were fast; everyone else was slow, and no two sites ran the same way"]}),`
`]}),p.jsx(e.p,{children:"Solving this the obvious way — new equipment, more training, a redesigned floor — would have been slow, costly, and hard to roll out across sites. The stronger play was to handle more volume with what the terminals already had."}),p.jsx(e.p,{children:p.jsx(e.strong,{children:"The reframe that shaped everything:"})})]}),`
`,p.jsx(zl,{variant:"principle",children:p.jsxs(e.p,{children:["Sorting was never a screen problem. It was a ",p.jsx(e.em,{children:"decision"})," problem. Workers were doing system-level thinking — mapping, remembering, sequencing — manually, under pressure. The real opportunity wasn't to show them information faster. It was to move the thinking out of their heads and into the system."]})}),`
`,p.jsx(e.h2,{children:"How I approached it"}),`
`,p.jsxs(Ht,{children:[p.jsx(e.p,{children:"I started on the terminal floor, not in Figma — shadowing forklift operators through full shifts, watching how goods and pallets actually got stacked, and sitting with terminal managers and ops leads to find where the informal workarounds lived."}),p.jsxs(e.p,{children:["The job wasn't to invent a new way to sort, but to find the behavior that ",p.jsx(e.em,{children:"already worked"})," — the principle that drove every decision below."]}),p.jsxs(e.p,{children:[p.jsx(e.strong,{children:"One boundary worth naming:"})," SwiftSort doesn't decide ",p.jsx(e.em,{children:"where"})," a parcel goes — planners set routing upstream. My slice was the worker-facing decision layer: the moment upstream data becomes a physical action on a noisy floor. Knowing exactly where that slice started and ended shaped every trade-off below."]})]}),`
`,p.jsx(qs,{wide:!0,src:`${gn}/05-research-synthesis.png`,alt:"A clustered affinity view of field observations grouped into themes such as memory dependence, environmental constraints, and LIFO stacking behaviour.",caption:"Field observations, clustered into themes — memory dependence, environmental constraints, LIFO stacking behaviour."}),`
`,p.jsx(e.h2,{children:"What the old workflow actually looked like"}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:"A single parcel took three steps — one physical, two mental. Watch the mental load grow:"})}),`
`,p.jsx(nw,{items:[{src:`${gn}/02-illustration-scan.png`,alt:"Comic panel — the driver calmly scans the box, an empty thought-bubble above them: no mental effort.",title:"Scan the barcode",tag:"Physical",tone:"neutral"},{src:`${gn}/03-illustration-read.png`,alt:"Comic panel — the driver reads the label, a small thought-bubble with a magnifying glass and a question mark: mild effort.",title:"Read the postal code off the label",tag:"Mental",tone:"mental"},{src:`${gn}/04-illustration-mental-lookup.png`,alt:"Comic panel — the driver looks overwhelmed, a huge chaotic thought-bubble tangled with gate numbers, routes and arrows.",title:"Recall which gate, which route, which order",tag:"Mental — the bottleneck",tone:"bottleneck"}]}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:"Steps 2 and 3 were invisible work — and that's where the time, the errors, and the training cost all lived, none of it written down anywhere the system could see."})}),`
`,p.jsx(e.h2,{children:"The moment that changed the design"}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:"The most important decision in this project didn't come from the brief. It came from watching a mistake."})}),`
`,p.jsx(e.h3,{children:"The wrong direction"}),`
`,p.jsxs(Ht,{children:[p.jsx(e.p,{children:"During proof-of-concept testing, forklift drivers kept struggling to reach a button on the mounted tablet — bolted in the only spot it physically fit, which wasn't a spot a human arm could reach mid-operation."}),p.jsxs(e.p,{children:["The team's instinct was everyone's: ",p.jsx(e.strong,{children:"make the button bigger, move the tablet, add a second one."})," We spent days on placement — and no one asked whether the button should exist at all."]})]}),`
`,p.jsx(e.h3,{children:"The reframe"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["I opened the session recording from that day and watched it again the next morning — and saw what I'd missed live: ",p.jsx(e.strong,{children:"every worker was already wearing a ProGlove scanner."})," Activated, in the workflow. They weren't reaching for the tablet because they wanted to touch it — the system was asking them to confirm with a tap."]}),p.jsxs(e.p,{children:["So I asked a different question: ",p.jsx(e.em,{children:"what if the button didn't have to be reachable?"})]}),p.jsxs(e.p,{children:["I proposed a ",p.jsx(e.strong,{children:"static QR code"})," as the last card in the list — scan it with the ProGlove already on your hand, ",p.jsx(e.em,{children:"or"})," tap it. On a tablet that's sometimes out of arm's reach, the scan path makes reach irrelevant: a button you can trigger from wherever you're standing."]}),p.jsx(e.p,{children:'Getting the team there took more than the idea. The button debate had days of momentum — so rather than argue placement, I brought everyone back to the recording and let them watch the glove do the work. The question shifted from "where does the button go" to "why is reach the constraint," and the room moved on its own.'}),p.jsx(e.p,{children:"I'll be honest: it was a hunch, not a proven answer — the kind of idea that's either elegant or redundant, and I couldn't tell which from a meeting room. It hinged on one thing I couldn't settle at a desk: would a worker mid-shift, gloves on, actually reach for the scan? That question sent it to the floor instead of a polished mockup."})]}),`
`,p.jsx(zl,{variant:"principle",children:p.jsxs(e.p,{children:[p.jsx("strong",{children:"The insight came from watching a recording a second time — not from the brief."})," The fix wasn't a bigger button or a better mount. It was giving the worker a second way in, so the mounting distance stopped being a problem to solve."]})}),`
`,p.jsx(iw,{before:{src:`${gn}/06-reframe-before.png`,alt:"The out-of-reach button mounted on the forklift tablet — a worker stretching to reach it mid-operation."},after:{src:`${gn}/07-reframe-after.png`,alt:"The QR “DROP” card that gives a scannable path to the same confirmation action."},caption:"Scan or tap. Reach stops mattering."}),`
`,p.jsx(e.h2,{children:"Working with engineering"}),`
`,p.jsxs(Ht,{children:[p.jsx(e.p,{children:"The static-QR idea only worked because engineering pressure-tested it early."}),p.jsxs(e.p,{children:["Engineering's first instinct was a ",p.jsx(e.strong,{children:"dynamic QR"})," — a unique code generated for every scanned parcel. Within a day, they flagged the problems: significant backend complexity, scalability concerns, and a timeline we couldn't hit."]}),p.jsxs(e.p,{children:["We landed on ",p.jsx(e.strong,{children:"static QR"})," together — and it turned out to be not just simpler but genuinely ",p.jsx(e.em,{children:"better"}),":"]}),p.jsxs(e.ul,{children:[`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Reliable"})," — no backend to fail, works offline"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Scalable"})," — print, attach, deploy; the same code works at every terminal"]}),`
`,p.jsxs(e.li,{children:[p.jsx(e.strong,{children:"Zero-config"})," — operations can place codes anywhere without involving IT"]}),`
`]}),p.jsxs(e.p,{children:["The constraint didn't compromise the design — it ",p.jsx(e.em,{children:"improved"})," it: the thing easiest to build was also the most robust on the floor."]})]}),`
`,p.jsx(e.h2,{children:"How the workflow shrank"}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:"Same three steps — the two mental ones designed away, and the confirmation freed from reach."})}),`
`,p.jsx(ag,{head:["","Old workflow","Final design"],rows:[["Scan the parcel","✅","✅ (unchanged)"],["Read the postal code","Manual, from the label",p.jsxs(p.Fragment,{children:[p.jsx(e.strong,{children:"Eliminated"})," — destination shown instantly"]})],["Recall gate & route","Mental lookup",p.jsxs(p.Fragment,{children:[p.jsx(e.strong,{children:"Eliminated"})," — no memory needed"]})],["Confirm drop-off","Tap a button you had to reach",p.jsxs(p.Fragment,{children:[p.jsx(e.strong,{children:"Scan or tap"})," — the QR works from anywhere"]})]]}),`
`,p.jsxs(sw,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:p.jsx(p.Fragment,{children:"Every choice below came from that same principle. None of them asked workers to learn something new."}),coda:{title:"Designed for an industrial floor",body:p.jsx(p.Fragment,{children:"Underpinning all of it, the interface had to survive the environment: readable at 1–2 meters, high-contrast for outdoor glare, large glove-friendly targets, and one decision per screen."})},children:[p.jsx(Bl,{index:"01",title:"The QR code doubles as the button",media:{src:`${gn}/09-qr-scan-or-tap.png`,alt:"The QR “DROP” card as the final item in the tablet drop list — scan it with the ProGlove, or tap to confirm."},tradeoff:{considered:"ProGlove gesture events — a wave or motion to confirm.",why:p.jsx(p.Fragment,{children:"Engineering flagged them as unstable in a noisy, fast-moving environment. A scannable, tappable QR was simply more reliable."})},children:p.jsxs(e.p,{children:["The QR sits as the ",p.jsx(e.strong,{children:"last card"})," in the drop list, and the dual input is deliberate: scan it with the ProGlove, or tap it. That redundancy is the point — if one input fails, the other still works, and reach never decides whether a worker can confirm."]})}),p.jsx(Bl,{index:"02",title:"Scan-first — not voice",tradeoff:{considered:"Voice commands.",why:p.jsxs(p.Fragment,{children:["In a loud warehouse, reading barcode values aloud introduced ",p.jsx(e.strong,{children:"more"})," errors than it removed — missed or forgotten, especially when a worker handles several drop-offs at once. The clearest “no” in the project."]})},children:p.jsxs(e.p,{children:["Workers already scanned barcodes constantly, so making the ",p.jsx(e.em,{children:"scan itself"})," the trigger required no new behavior."]})}),p.jsxs(Bl,{index:"03",title:"The screen mirrors the physical stack (LIFO)",media:{src:`${gn}/10-lifo-layout.png`,alt:"The main screen: a large top card “12 CD, 1726 Sarpsborg” with smaller “06 AB” and “18 CD” cards beneath — largest card = last scanned = next dropped."},children:[p.jsxs(e.p,{children:["During research I saw that forklift drivers almost always drop off the ",p.jsx(e.strong,{children:"most recently scanned"})," item first — roughly 95–99% of the time, last-in is first-out."]}),p.jsxs(e.p,{children:["So the design puts the ",p.jsx(e.strong,{children:"latest scanned pallet as the largest card at the top"}),", with smaller cards beneath. The order on screen matches the order on the forklift — no mental translation."]}),p.jsxs(e.p,{children:[p.jsx(e.em,{children:"The honest edge case:"})," that leaves 1–5% of cases where last-scanned ",p.jsx(e.em,{children:"isn't"})," next-dropped. Workers can scan any card directly to override — but the override rate is the one assumption I'd want to instrument over a full peak season before calling it settled."]})]}),p.jsxs(Bl,{index:"04",title:"Priority surfaces at the moment of sorting",children:[p.jsxs(e.p,{children:["Time-sensitive shipments now appear with a distinct accent treatment, floating to the top of the stack — ",p.jsx(e.strong,{children:"before"})," the worker decides where to place the parcel."]}),p.jsx(e.p,{children:"The priority signal used to live in dispatch, far upstream. Moving it to the sorting moment is why urgent and low-priority goods stopped mixing at the gate."}),p.jsx(e.p,{children:p.jsx(e.em,{children:"Not in the brief. Found in the field."})})]})]}),`
`,p.jsx(e.h2,{children:"One solution, two form factors"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["The QR-as-button was never meant to be everywhere — it solved a ",p.jsx(e.em,{children:"specific"})," physical problem: a tablet out of reach on a forklift. Some workers don't use a mounted tablet at all; they carry a handheld ",p.jsx(e.strong,{children:"TC57"})," with a built-in scanner, already in hand. So that version ",p.jsx(e.strong,{children:"drops the QR entirely"})," and confirms with a tap on the green ",p.jsx(e.strong,{children:"Drop"})," button."]}),p.jsx(e.p,{children:"The same task, designed twice:"})]}),`
`,p.jsx(ag,{head:["","Mounted tablet + ProGlove","Handheld TC57"],rows:[["Where the device lives","Bolted to the forklift, sometimes out of reach","In the worker’s hand"],["How you confirm a drop","Scan the QR card, or tap it","Tap the Drop button"],["Why","Reach varies by vehicle — the scan path removes that variable","Reach is never in question — so no QR needed"]]}),`
`,p.jsx(Ht,{children:p.jsxs(e.p,{children:["This is the part I'm most deliberate about: the clever solution was matched to the context that ",p.jsx(e.em,{children:"needed"})," it, and withheld from the one that didn't. A QR on the TC57 would have been a solution in search of a problem. Match the input to the device's reality; don't standardize one pattern everywhere."]})}),`
`,p.jsx(qs,{src:`${gn}/12-tc57-stacking.png`,alt:"The handheld TC57 stacking screen: a “23 CD” header, a green “Drop” button top-right, and the grouped parcel list for Fløyfjellsveien 178 / 9876 Bergen — with no QR card.",caption:"In-hand device — tap to drop, no QR needed."}),`
`,p.jsx(qs,{wide:!0,src:`${gn}/13-tablet-vs-tc57.png`,alt:"The two form factors side by side: the tablet with the QR “DROP” card versus the TC57 with the tap-only Drop button.",caption:"Same task. The device's reach decided the input."}),`
`,p.jsx(e.h2,{children:"A second win, surfaced by the business"}),`
`,p.jsxs(Ht,{children:[p.jsx(e.p,{children:"The QR insight came from watching the floor. This one came from the other direction — a discovery session with the business."}),p.jsxs(e.p,{children:["Going through how the terminals actually ran with managers and ops leads, a pattern surfaced that observation alone had missed: when a driver had ",p.jsx(e.strong,{children:"several loose items headed to the same destination"}),", the app made them handle each one separately — a card per item, scanned and dropped one at a time. Quietly repetitive, and slower than it needed to be at volume."]}),p.jsxs(e.p,{children:["The idea didn't come from me alone. In a brainstorm with the ",p.jsx(e.strong,{children:"tech lead and product owner"}),", we shaped the high-level solution together — let a driver ",p.jsx(e.strong,{children:"group everything bound for one destination and drop it in a single scan"}),", triggered by a barcode embedded in the primary card. Engineering pressure-tested feasibility in the room; the PO kept us anchored on what mattered most; I designed the flow around both."]})]}),`
`,p.jsx(qs,{src:`${gn}/11-stacking-mode.png`,alt:"The split-screen stacking view: the main sort list on the left, a “Stacking Mode” panel on the right grouping multiple parcels under one destination.",caption:"Stacking mode — group loose items under one destination, drop them in a single scan."}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:"It's the clearest example of a decision that came from the room, not the brief — and the reason I treat discovery meetings as design research, not status updates."})}),`
`,p.jsx(e.h2,{children:"How the work got made"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["AI compressed the slow early phase; the field decided what shipped. ",p.jsx(e.strong,{children:"Figma Make"})," generated six LIFO card layouts fast — and I killed most against one test: could a worker read it at arm's length, in motion, wearing gloves? The variants that looked richer on a desktop screen were the first to go. ",p.jsx(e.strong,{children:"MS Copilot"}),` clustered raw field notes into themes (that's how the "priority at the sorting moment" finding surfaced); `,p.jsx(e.strong,{children:"Banani"})," structured the stacking flow before I committed it to Figma."]}),p.jsxs(e.p,{children:["Net effect: roughly ",p.jsx(e.strong,{children:"30% faster early exploration"})," — but every decision that shipped came from on-site testing, not a generated mockup."]})]}),`
`,p.jsx(qs,{wide:!0,src:`${gn}/14-discarded-variants.png`,alt:"A grid of early LIFO card layout explorations with the rejected variants visibly marked.",caption:"The range Figma Make gave me. Most were killed against one test: readable at arm's length, in motion, wearing gloves."}),`
`,p.jsx(e.h2,{children:"Testing on the floor"}),`
`,p.jsxs(Ht,{children:[p.jsx(e.p,{children:"Not validated in a design tool — validated on Zebra devices, on the terminal floor, twice."}),p.jsxs(e.p,{children:[p.jsx(e.strong,{children:"Round 1 failed in useful ways."})," Workers struggled with controls ",p.jsx(e.em,{children:"while moving"}),", stacking interactions were too fiddly, and scan feedback wasn't clear enough. Nothing about the concept was wrong — the execution was too fine-grained for a glove and a moving forklift."]}),p.jsxs(e.p,{children:[p.jsx(e.strong,{children:"I iterated:"})," stronger visual hierarchy, clearer color coding, higher visibility for the latest scan, bigger targets, simpler interactions."]}),p.jsxs(e.p,{children:[p.jsx(e.strong,{children:"Round 2 confirmed the fix."})," Workers moved through sorting noticeably faster, preferred the guided flow over memorization, and stacking got measurably more consistent — holding up under real movement, real gloves, real noise. That's what let us ship."]})]}),`
`,p.jsx(qs,{wide:!0,src:`${gn}/15-round1-vs-round2.png`,alt:"A before/after of a screen that changed between test rounds — the stacking interaction or scan-feedback state — annotated with what Round 1 taught and how Round 2 answered it.",caption:"What the Round 1 failure taught, and how Round 2 answered it."}),`
`,p.jsx(e.h2,{children:"Outcomes"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["The wins up top aren't self-assessment — the faster onboarding and fewer gate errors came from ",p.jsx(e.strong,{children:"terminal managers"}),", who raised them with business stakeholders as proof the system was working. That's the validation I trust most: the people running the operation found it real enough to report upward."]}),p.jsxs(e.p,{children:["Beyond that, the ",p.jsx(e.em,{children:"shape"})," of the operation changed. Delivery priority became visible at the moment it mattered, so time-sensitive shipments left on time; and low-volume routes could be consolidated instead of dispatched half-empty — which made fast-delivery commitments more scalable."]})]}),`
`,p.jsx(e.h2,{children:"What we shipped knowingly incomplete"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["We went live as an MVP with one known, unresolved issue: ",p.jsx(e.strong,{children:"changing a drop-off location isn't intuitive yet, and parcels don't group as cleanly as they should."})," We knew this before launch — and shipped anyway, on purpose."]}),p.jsxs(e.p,{children:["Drop-off locations come from planners upstream, and we couldn't predict how that data would behave at real volume. So rather than guess at the grouping model in a design tool, we shipped the core workflow and used the first release to ",p.jsx(e.em,{children:"learn how the data behaves in the wild"})," — then optimize grouping and location-editing against real patterns, not assumptions."]}),p.jsx(e.p,{children:`It's the trade-off I'd defend hardest: an MVP with a named, understood gap that generates real learning beats a "complete" design built on guesses about data we didn't control.`})]}),`
`,p.jsx(e.h2,{children:"The takeaway"}),`
`,p.jsxs(Ht,{children:[p.jsxs(e.p,{children:["SwiftSort wasn't a UI redesign. It was a redesign of ",p.jsx(e.strong,{children:"how a decision gets made"})," on a warehouse floor."]}),p.jsxs(e.p,{children:["By moving the thinking out of workers' heads and into the system — triggered by behavior they already had — sorting shifted from ",p.jsx(e.em,{children:"memory-based"})," to ",p.jsx(e.em,{children:"system-guided"}),", from ",p.jsx(e.em,{children:"experience-dependent"})," to ",p.jsx(e.em,{children:"scalable"}),"."]}),p.jsxs(e.p,{children:["The clearest lesson: in operational systems, great design usually isn't about adding features. It's about ",p.jsx(e.strong,{children:"removing constraints"})," — and the best removal in this project came from watching a recording twice and asking why ",p.jsx(e.em,{children:"reach"})," had to be the thing we designed around at all."]})]}),`
`,p.jsx(Ht,{children:p.jsx(e.p,{children:p.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on SwiftSort, end to end"})})})]})}function fw(r={}){const{wrapper:e}={...Yd(),...r.components};return e?p.jsx(e,{...r,children:p.jsx(lg,{...r})}):lg(r)}const hw=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:gn,default:fw,meta:dw},Symbol.toStringTag,{value:"Module"})),pw=Object.assign({"./swiftsort/index.mdx":hw}),Qo=Object.entries(pw).map(([r,e])=>{var s;const t=(s=r.match(/\.\/([^/]+)\/index\.mdx$/))==null?void 0:s[1];return{slug:t,Component:e.default,meta:{slug:t,...e.meta||{}}}}).filter(r=>r.slug).sort((r,e)=>(r.meta.order??999)-(e.meta.order??999));function mw(r){return Qo.find(e=>e.slug===r)||null}function gw(r){if(Qo.length<2)return null;const e=Qo.findIndex(t=>t.slug===r);return e===-1?null:Qo[(e+1)%Qo.length]}function vw({slug:r}){const e=mw(r);if(Pe.useEffect(()=>{var l;if((l=e==null?void 0:e.meta)!=null&&l.title){const d=document.title;return document.title=`${e.meta.title} · Yogesh Shetty`,()=>{document.title=d}}},[e]),!e)return p.jsx(_w,{slug:r});const{Component:t,meta:s}=e,a=gw(r);return p.jsx(lw,{meta:s,next:a,children:p.jsx(Zg.Provider,{value:s.sectionIcons||{},children:p.jsx(YE,{components:ow,children:p.jsx(t,{})})})})}function _w({slug:r}){return p.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",textAlign:"center"},children:p.jsxs("div",{style:{maxWidth:460},children:[p.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:14},children:"Case study not found"}),p.jsxs("h1",{style:{fontSize:28,fontWeight:600,margin:"0 0 16px",letterSpacing:"-0.02em"},children:["No case study “",r,"”"]}),p.jsx(Bd,{to:"/",className:"text-link text-link--primary",style:{fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,paddingBottom:3},children:"← Back to portfolio"})]})})}function xw(){const e=W0().match(/^\/case-studies\/([^/]+)\/?$/);return e?p.jsx(vw,{slug:decodeURIComponent(e[1])}):p.jsx(qE,{})}function yw(){return p.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:p.jsxs("div",{style:{maxWidth:520},children:[p.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),p.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),p.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[p.jsx("a",{href:`mailto:${Ti}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),p.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}G0.createRoot(document.getElementById("root")).render(p.jsx(eo.StrictMode,{children:p.jsx($g,{fallback:p.jsx(yw,{}),children:p.jsx(K0,{children:p.jsx(V0,{children:p.jsx(xw,{})})})})}));
