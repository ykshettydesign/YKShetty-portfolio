(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function fg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ku={exports:{}},Ha={},Ou={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function H0(){if(xp)return pt;xp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(L,H,we){this.props=L,this.context=H,this.refs=A,this.updater=we||w}y.prototype.isReactComponent={},y.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(L,H,we){this.props=L,this.context=H,this.refs=A,this.updater=we||w}var C=N.prototype=new _;C.constructor=N,E(C,y.prototype),C.isPureReactComponent=!0;var D=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function le(L,H,we){var q,ae={},ge=null,Pe=null;if(H!=null)for(q in H.ref!==void 0&&(Pe=H.ref),H.key!==void 0&&(ge=""+H.key),H)V.call(H,q)&&!k.hasOwnProperty(q)&&(ae[q]=H[q]);var Re=arguments.length-2;if(Re===1)ae.children=we;else if(1<Re){for(var Te=Array(Re),tt=0;tt<Re;tt++)Te[tt]=arguments[tt+2];ae.children=Te}if(L&&L.defaultProps)for(q in Re=L.defaultProps,Re)ae[q]===void 0&&(ae[q]=Re[q]);return{$$typeof:r,type:L,key:ge,ref:Pe,props:ae,_owner:O.current}}function pe(L,H){return{$$typeof:r,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function b(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function U(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(we){return H[we]})}var ce=/\/+/g;function ue(L,H){return typeof L=="object"&&L!==null&&L.key!=null?U(""+L.key):H.toString(36)}function B(L,H,we,q,ae){var ge=typeof L;(ge==="undefined"||ge==="boolean")&&(L=null);var Pe=!1;if(L===null)Pe=!0;else switch(ge){case"string":case"number":Pe=!0;break;case"object":switch(L.$$typeof){case r:case e:Pe=!0}}if(Pe)return Pe=L,ae=ae(Pe),L=q===""?"."+ue(Pe,0):q,D(ae)?(we="",L!=null&&(we=L.replace(ce,"$&/")+"/"),B(ae,H,we,"",function(tt){return tt})):ae!=null&&(b(ae)&&(ae=pe(ae,we+(!ae.key||Pe&&Pe.key===ae.key?"":(""+ae.key).replace(ce,"$&/")+"/")+L)),H.push(ae)),1;if(Pe=0,q=q===""?".":q+":",D(L))for(var Re=0;Re<L.length;Re++){ge=L[Re];var Te=q+ue(ge,Re);Pe+=B(ge,H,we,Te,ae)}else if(Te=S(L),typeof Te=="function")for(L=Te.call(L),Re=0;!(ge=L.next()).done;)ge=ge.value,Te=q+ue(ge,Re++),Pe+=B(ge,H,we,Te,ae);else if(ge==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Pe}function ne(L,H,we){if(L==null)return L;var q=[],ae=0;return B(L,q,"","",function(ge){return H.call(we,ge,ae++)}),q}function X(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(we){(L._status===0||L._status===-1)&&(L._status=1,L._result=we)},function(we){(L._status===0||L._status===-1)&&(L._status=2,L._result=we)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var te={current:null},j={transition:null},J={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:j,ReactCurrentOwner:O};function W(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ne,forEach:function(L,H,we){ne(L,function(){H.apply(this,arguments)},we)},count:function(L){var H=0;return ne(L,function(){H++}),H},toArray:function(L){return ne(L,function(H){return H})||[]},only:function(L){if(!b(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},pt.Component=y,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=N,pt.StrictMode=s,pt.Suspense=p,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,pt.act=W,pt.cloneElement=function(L,H,we){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var q=E({},L.props),ae=L.key,ge=L.ref,Pe=L._owner;if(H!=null){if(H.ref!==void 0&&(ge=H.ref,Pe=O.current),H.key!==void 0&&(ae=""+H.key),L.type&&L.type.defaultProps)var Re=L.type.defaultProps;for(Te in H)V.call(H,Te)&&!k.hasOwnProperty(Te)&&(q[Te]=H[Te]===void 0&&Re!==void 0?Re[Te]:H[Te])}var Te=arguments.length-2;if(Te===1)q.children=we;else if(1<Te){Re=Array(Te);for(var tt=0;tt<Te;tt++)Re[tt]=arguments[tt+2];q.children=Re}return{$$typeof:r,type:L.type,key:ae,ref:ge,props:q,_owner:Pe}},pt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},pt.createElement=le,pt.createFactory=function(L){var H=le.bind(null,L);return H.type=L,H},pt.createRef=function(){return{current:null}},pt.forwardRef=function(L){return{$$typeof:d,render:L}},pt.isValidElement=b,pt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:X}},pt.memo=function(L,H){return{$$typeof:m,type:L,compare:H===void 0?null:H}},pt.startTransition=function(L){var H=j.transition;j.transition={};try{L()}finally{j.transition=H}},pt.unstable_act=W,pt.useCallback=function(L,H){return te.current.useCallback(L,H)},pt.useContext=function(L){return te.current.useContext(L)},pt.useDebugValue=function(){},pt.useDeferredValue=function(L){return te.current.useDeferredValue(L)},pt.useEffect=function(L,H){return te.current.useEffect(L,H)},pt.useId=function(){return te.current.useId()},pt.useImperativeHandle=function(L,H,we){return te.current.useImperativeHandle(L,H,we)},pt.useInsertionEffect=function(L,H){return te.current.useInsertionEffect(L,H)},pt.useLayoutEffect=function(L,H){return te.current.useLayoutEffect(L,H)},pt.useMemo=function(L,H){return te.current.useMemo(L,H)},pt.useReducer=function(L,H,we){return te.current.useReducer(L,H,we)},pt.useRef=function(L){return te.current.useRef(L)},pt.useState=function(L){return te.current.useState(L)},pt.useSyncExternalStore=function(L,H,we){return te.current.useSyncExternalStore(L,H,we)},pt.useTransition=function(){return te.current.useTransition()},pt.version="18.3.1",pt}var _p;function Bd(){return _p||(_p=1,Ou.exports=H0()),Ou.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function G0(){if(yp)return Ha;yp=1;var r=Bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,m){var v,x={},S=null,w=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(w=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(x[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:d,key:S,ref:w,props:x,_owner:o.current}}return Ha.Fragment=t,Ha.jsx=h,Ha.jsxs=h,Ha}var Sp;function V0(){return Sp||(Sp=1,ku.exports=G0()),ku.exports}var u=V0(),Ae=Bd();const ta=fg(Ae);var fl={},zu={exports:{}},Ln={},Bu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function W0(){return wp||(wp=1,(function(r){function e(j,J){var W=j.length;j.push(J);e:for(;0<W;){var L=W-1>>>1,H=j[L];if(0<o(H,J))j[L]=J,j[W]=H,W=L;else break e}}function t(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],W=j.pop();if(W!==J){j[0]=W;e:for(var L=0,H=j.length,we=H>>>1;L<we;){var q=2*(L+1)-1,ae=j[q],ge=q+1,Pe=j[ge];if(0>o(ae,W))ge<H&&0>o(Pe,ae)?(j[L]=Pe,j[ge]=W,L=ge):(j[L]=ae,j[q]=W,L=q);else if(ge<H&&0>o(Pe,W))j[L]=Pe,j[ge]=W,L=ge;else break e}}return J}function o(j,J){var W=j.sortIndex-J.sortIndex;return W!==0?W:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,x=null,S=3,w=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(j){for(var J=t(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=j)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=t(m)}}function D(j){if(A=!1,C(j),!E)if(t(p)!==null)E=!0,X(V);else{var J=t(m);J!==null&&te(D,J.startTime-j)}}function V(j,J){E=!1,A&&(A=!1,_(le),le=-1),w=!0;var W=S;try{for(C(J),x=t(p);x!==null&&(!(x.expirationTime>J)||j&&!U());){var L=x.callback;if(typeof L=="function"){x.callback=null,S=x.priorityLevel;var H=L(x.expirationTime<=J);J=r.unstable_now(),typeof H=="function"?x.callback=H:x===t(p)&&s(p),C(J)}else s(p);x=t(p)}if(x!==null)var we=!0;else{var q=t(m);q!==null&&te(D,q.startTime-J),we=!1}return we}finally{x=null,S=W,w=!1}}var O=!1,k=null,le=-1,pe=5,b=-1;function U(){return!(r.unstable_now()-b<pe)}function ce(){if(k!==null){var j=r.unstable_now();b=j;var J=!0;try{J=k(!0,j)}finally{J?ue():(O=!1,k=null)}}else O=!1}var ue;if(typeof N=="function")ue=function(){N(ce)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ne=B.port2;B.port1.onmessage=ce,ue=function(){ne.postMessage(null)}}else ue=function(){y(ce,0)};function X(j){k=j,O||(O=!0,ue())}function te(j,J){le=y(function(){j(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){E||w||(E=!0,X(V))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(j){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var W=S;S=J;try{return j()}finally{S=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var W=S;S=j;try{return J()}finally{S=W}},r.unstable_scheduleCallback=function(j,J,W){var L=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?L+W:L):W=L,j){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=W+H,j={id:v++,callback:J,priorityLevel:j,startTime:W,expirationTime:H,sortIndex:-1},W>L?(j.sortIndex=W,e(m,j),t(p)===null&&j===t(m)&&(A?(_(le),le=-1):A=!0,te(D,W-L))):(j.sortIndex=H,e(p,j),E||w||(E=!0,X(V))),j},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(j){var J=S;return function(){var W=S;S=J;try{return j.apply(this,arguments)}finally{S=W}}}})(ju)),ju}var Mp;function X0(){return Mp||(Mp=1,Bu.exports=W0()),Bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function q0(){if(Ep)return Ln;Ep=1;var r=Bd(),e=X0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function S(n){return p.call(x,n)?!0:p.call(v,n)?!1:m.test(n)?x[n]=!0:(v[n]=!0,!1)}function w(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||w(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,f,g,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,N);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,N);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,N);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),U=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),j=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,L;function H(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var we=!1;function q(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),g=c.stack.split(`
`),M=f.length-1,I=g.length-1;1<=M&&0<=I&&f[M]!==g[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==g[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==g[I]){var z=`
`+f[M].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=M&&0<=I);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case O:return"Portal";case pe:return"Profiler";case le:return"StrictMode";case ue:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case X:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function Pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(n){var i=Te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,g.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=tt(n))}function $(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,i){var a=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function qe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Re(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xe(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function Ce(n,i){Xe(n,i);var a=Re(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?R(n,i.type,a):i.hasOwnProperty("defaultValue")&&R(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function me(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function R(n,i,a){(i!=="number"||Pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var T=Array.isArray;function Y(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function fe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function de(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(T(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Re(a)}}function he(n,i){var a=Re(i.value),c=Re(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function De(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ye(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ye(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var je,it=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(je=je||document.createElement("div"),je.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=je.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function xe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(et).forEach(function(n){rt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),et[i]=et[n]})});function at(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||et.hasOwnProperty(n)&&et[n]?(""+i).trim():i+"px"}function Ke(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=at(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var ze=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lt(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function _t(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function dt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Tt=null,F=null,Me=null;function be(n){if(n=Aa(n)){if(typeof Tt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ro(i),Tt(n.stateNode,n.type,i))}}function He(n){F?Me?Me.push(n):Me=[n]:F=n}function Ze(){if(F){var n=F,i=Me;if(Me=F=null,be(n),i)for(n=0;n<i.length;n++)be(i[n])}}function St(n,i){return n(i)}function At(){}var Ht=!1;function vn(n,i,a){if(Ht)return n(i,a);Ht=!0;try{return St(n,i,a)}finally{Ht=!1,(F!==null||Me!==null)&&(At(),Ze())}}function wt(n,i){var a=n.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qt=!1;if(d)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){qt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{qt=!1}function ao(n,i,a,c,f,g,M,I,z){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(_e){this.onError(_e)}}var Dr=!1,Ri=null,Ir=!1,Qi=null,oo={onError:function(n){Dr=!0,Ri=n}};function lo(n,i,a,c,f,g,M,I,z){Dr=!1,Ri=null,ao.apply(oo,arguments)}function sc(n,i,a,c,f,g,M,I,z){if(lo.apply(this,arguments),Dr){if(Dr){var ie=Ri;Dr=!1,Ri=null}else throw Error(t(198));Ir||(Ir=!0,Qi=ie)}}function Ci(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function co(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function P(n){if(Ci(n)!==n)throw Error(t(188))}function Q(n){var i=n.alternate;if(!i){if(i=Ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return P(f),n;if(g===c)return P(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var M=!1,I=f.child;I;){if(I===a){M=!0,a=f,c=g;break}if(I===c){M=!0,c=f,a=g;break}I=I.sibling}if(!M){for(I=g.child;I;){if(I===a){M=!0,a=g,c=f;break}if(I===c){M=!0,c=g,a=f;break}I=I.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function se(n){return n=Q(n),n!==null?oe(n):null}function oe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oe(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,Ie=e.unstable_cancelCallback,Ye=e.unstable_shouldYield,nt=e.unstable_requestPaint,Fe=e.unstable_now,ut=e.unstable_getCurrentPriorityLevel,ot=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,Lt=e.unstable_NormalPriority,xn=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,En=null,vt=null;function ht(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(En,n,void 0,(n.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:uo,Ft=Math.log,Pi=Math.LN2;function uo(n){return n>>>=0,n===0?32:31-(Ft(n)/Pi|0)|0}var vi=64,Ji=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,M=a&268435455;if(M!==0){var I=M&~f;I!==0?c=Bt(I):(g&=M,g!==0&&(c=Bt(g)))}else M=a&~f,M!==0?c=Bt(M):g!==0&&(c=Bt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-_n(i),f=1<<a,c|=n[a],i&=~f;return c}function ca(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-_n(g),I=1<<M,z=f[M];z===-1?((I&a)===0||(I&c)!==0)&&(f[M]=ca(I,i)):z<=i&&(n.expiredLanes|=I),g&=~I}}function Ur(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ho(){var n=vi;return vi<<=1,(vi&4194240)===0&&(vi=64),n}function ls(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ua(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-_n(i),n[i]=a}function cv(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-_n(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function ac(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-_n(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Rt=0;function $d(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Kd,oc,Zd,Qd,Jd,lc=!1,fo=[],er=null,tr=null,nr=null,da=new Map,ha=new Map,ir=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(n,i){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function fa(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Aa(i),i!==null&&oc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function dv(n,i,a,c,f){switch(i){case"focusin":return er=fa(er,n,i,a,c,f),!0;case"dragenter":return tr=fa(tr,n,i,a,c,f),!0;case"mouseover":return nr=fa(nr,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return da.set(g,fa(da.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,ha.set(g,fa(ha.get(g)||null,n,i,a,c,f)),!0}return!1}function th(n){var i=Fr(n.target);if(i!==null){var a=Ci(i);if(a!==null){if(i=a.tag,i===13){if(i=co(a),i!==null){n.blockedOn=i,Jd(n.priority,function(){Zd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);bt=c,a.target.dispatchEvent(c),bt=null}else return i=Aa(a),i!==null&&oc(i),n.blockedOn=a,!1;i.shift()}return!0}function nh(n,i,a){po(n)&&a.delete(i)}function hv(){lc=!1,er!==null&&po(er)&&(er=null),tr!==null&&po(tr)&&(tr=null),nr!==null&&po(nr)&&(nr=null),da.forEach(nh),ha.forEach(nh)}function pa(n,i){n.blockedOn===i&&(n.blockedOn=null,lc||(lc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hv)))}function ma(n){function i(f){return pa(f,n)}if(0<fo.length){pa(fo[0],n);for(var a=1;a<fo.length;a++){var c=fo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(er!==null&&pa(er,n),tr!==null&&pa(tr,n),nr!==null&&pa(nr,n),da.forEach(i),ha.forEach(i),a=0;a<ir.length;a++)c=ir[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)th(a),a.blockedOn===null&&ir.shift()}var cs=D.ReactCurrentBatchConfig,mo=!0;function fv(n,i,a,c){var f=Rt,g=cs.transition;cs.transition=null;try{Rt=1,cc(n,i,a,c)}finally{Rt=f,cs.transition=g}}function pv(n,i,a,c){var f=Rt,g=cs.transition;cs.transition=null;try{Rt=4,cc(n,i,a,c)}finally{Rt=f,cs.transition=g}}function cc(n,i,a,c){if(mo){var f=uc(n,i,a,c);if(f===null)Ac(n,i,c,go,a),eh(n,c);else if(dv(f,n,i,a,c))c.stopPropagation();else if(eh(n,c),i&4&&-1<uv.indexOf(n)){for(;f!==null;){var g=Aa(f);if(g!==null&&Kd(g),g=uc(n,i,a,c),g===null&&Ac(n,i,c,go,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var go=null;function uc(n,i,a,c){if(go=null,n=dt(c),n=Fr(n),n!==null)if(i=Ci(n),i===null)n=null;else if(a=i.tag,a===13){if(n=co(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function ih(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ut()){case ot:return 1;case ct:return 4;case Lt:case xn:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var rr=null,dc=null,vo=null;function rh(){if(vo)return vo;var n,i=dc,a=i.length,c,f="value"in rr?rr.value:rr.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===f[g-c];c++);return vo=f.slice(n,1<c?1-c:void 0)}function xo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _o(){return!0}function sh(){return!1}function zn(n){function i(a,c,f,g,M){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?_o:sh,this.isPropagationStopped=sh,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=zn(us),ga=W({},us,{view:0,detail:0}),mv=zn(ga),fc,pc,va,yo=W({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(fc=n.screenX-va.screenX,pc=n.screenY-va.screenY):pc=fc=0,va=n),fc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),ah=zn(yo),gv=W({},yo,{dataTransfer:0}),vv=zn(gv),xv=W({},ga,{relatedTarget:0}),mc=zn(xv),_v=W({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=zn(_v),Sv=W({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wv=zn(Sv),Mv=W({},us,{data:0}),oh=zn(Mv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bv[n])?!!i[n]:!1}function gc(){return Av}var Rv=W({},ga,{key:function(n){if(n.key){var i=Ev[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Tv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?xo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cv=zn(Rv),Pv=W({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=zn(Pv),Lv=W({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Nv=zn(Lv),Dv=W({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=zn(Dv),Uv=W({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=zn(Uv),kv=[9,13,27,32],vc=d&&"CompositionEvent"in window,xa=null;d&&"documentMode"in document&&(xa=document.documentMode);var Ov=d&&"TextEvent"in window&&!xa,ch=d&&(!vc||xa&&8<xa&&11>=xa),uh=" ",dh=!1;function hh(n,i){switch(n){case"keyup":return kv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function zv(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(dh=!0,uh);case"textInput":return n=i.data,n===uh&&dh?null:n;default:return null}}function Bv(n,i){if(ds)return n==="compositionend"||!vc&&hh(n,i)?(n=rh(),vo=dc=rr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ch&&i.locale!=="ko"?null:i.data;default:return null}}var jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!jv[n.type]:i==="textarea"}function mh(n,i,a,c){He(c),i=To(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var _a=null,ya=null;function Hv(n){Dh(n,0)}function So(n){var i=gs(n);if($(i))return n}function Gv(n,i){if(n==="change")return i}var gh=!1;if(d){var xc;if(d){var _c="oninput"in document;if(!_c){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),_c=typeof vh.oninput=="function"}xc=_c}else xc=!1;gh=xc&&(!document.documentMode||9<document.documentMode)}function xh(){_a&&(_a.detachEvent("onpropertychange",_h),ya=_a=null)}function _h(n){if(n.propertyName==="value"&&So(ya)){var i=[];mh(i,ya,n,dt(n)),vn(Hv,i)}}function Vv(n,i,a){n==="focusin"?(xh(),_a=i,ya=a,_a.attachEvent("onpropertychange",_h)):n==="focusout"&&xh()}function Wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So(ya)}function Xv(n,i){if(n==="click")return So(i)}function qv(n,i){if(n==="input"||n==="change")return So(i)}function Yv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:Yv;function Sa(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!ii(n[f],i[f]))return!1}return!0}function yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,i){var a=yh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yh(a)}}function wh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?wh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pt(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function $v(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&wh(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Sh(a,g);var M=Sh(a,c);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Kv=d&&"documentMode"in document&&11>=document.documentMode,hs=null,Sc=null,wa=null,wc=!1;function Eh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||hs==null||hs!==Pt(c)||(c=hs,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Sa(wa,c)||(wa=c,c=To(Sc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=hs)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var fs={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Mc={},Th={};d&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Mo(n){if(Mc[n])return Mc[n];if(!fs[n])return n;var i=fs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Th)return Mc[n]=i[a];return n}var bh=Mo("animationend"),Ah=Mo("animationiteration"),Rh=Mo("animationstart"),Ch=Mo("transitionend"),Ph=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,i){Ph.set(n,i),l(i,[n])}for(var Ec=0;Ec<Lh.length;Ec++){var Tc=Lh[Ec],Zv=Tc.toLowerCase(),Qv=Tc[0].toUpperCase()+Tc.slice(1);sr(Zv,"on"+Qv)}sr(bh,"onAnimationEnd"),sr(Ah,"onAnimationIteration"),sr(Rh,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(Ch,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Nh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,sc(c,i,void 0,n),n.currentTarget=null}function Dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var M=c.length-1;0<=M;M--){var I=c[M],z=I.instance,ie=I.currentTarget;if(I=I.listener,z!==g&&f.isPropagationStopped())break e;Nh(f,I,ie),g=z}else for(M=0;M<c.length;M++){if(I=c[M],z=I.instance,ie=I.currentTarget,I=I.listener,z!==g&&f.isPropagationStopped())break e;Nh(f,I,ie),g=z}}}if(Ir)throw n=Qi,Ir=!1,Qi=null,n}function Dt(n,i){var a=i[Dc];a===void 0&&(a=i[Dc]=new Set);var c=n+"__bubble";a.has(c)||(Ih(i,n,2,!1),a.add(c))}function bc(n,i,a){var c=0;i&&(c|=4),Ih(a,n,c,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Eo]){n[Eo]=!0,s.forEach(function(a){a!=="selectionchange"&&(Jv.has(a)||bc(a,!1,n),bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,bc("selectionchange",!1,i))}}function Ih(n,i,a,c){switch(ih(i)){case 1:var f=fv;break;case 4:f=pv;break;default:f=cc}a=f.bind(null,i,a,n),f=void 0,!qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;M=M.return}for(;I!==null;){if(M=Fr(I),M===null)return;if(z=M.tag,z===5||z===6){c=g=M;continue e}I=I.parentNode}}c=c.return}vn(function(){var ie=g,_e=dt(a),Se=[];e:{var ve=Ph.get(n);if(ve!==void 0){var Ue=hc,Oe=n;switch(n){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":Ue=Cv;break;case"focusin":Oe="focus",Ue=mc;break;case"focusout":Oe="blur",Ue=mc;break;case"beforeblur":case"afterblur":Ue=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Nv;break;case bh:case Ah:case Rh:Ue=yv;break;case Ch:Ue=Iv;break;case"scroll":Ue=mv;break;case"wheel":Ue=Fv;break;case"copy":case"cut":case"paste":Ue=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=lh}var Be=(i&4)!==0,Vt=!Be&&n==="scroll",Z=Be?ve!==null?ve+"Capture":null:ve;Be=[];for(var G=ie,ee;G!==null;){ee=G;var Ee=ee.stateNode;if(ee.tag===5&&Ee!==null&&(ee=Ee,Z!==null&&(Ee=wt(G,Z),Ee!=null&&Be.push(Ta(G,Ee,ee)))),Vt)break;G=G.return}0<Be.length&&(ve=new Ue(ve,Oe,null,a,_e),Se.push({event:ve,listeners:Be}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&a!==bt&&(Oe=a.relatedTarget||a.fromElement)&&(Fr(Oe)||Oe[Li]))break e;if((Ue||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Oe=a.relatedTarget||a.toElement,Ue=ie,Oe=Oe?Fr(Oe):null,Oe!==null&&(Vt=Ci(Oe),Oe!==Vt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(Ue=null,Oe=ie),Ue!==Oe)){if(Be=ah,Ee="onMouseLeave",Z="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Be=lh,Ee="onPointerLeave",Z="onPointerEnter",G="pointer"),Vt=Ue==null?ve:gs(Ue),ee=Oe==null?ve:gs(Oe),ve=new Be(Ee,G+"leave",Ue,a,_e),ve.target=Vt,ve.relatedTarget=ee,Ee=null,Fr(_e)===ie&&(Be=new Be(Z,G+"enter",Oe,a,_e),Be.target=ee,Be.relatedTarget=Vt,Ee=Be),Vt=Ee,Ue&&Oe)t:{for(Be=Ue,Z=Oe,G=0,ee=Be;ee;ee=ps(ee))G++;for(ee=0,Ee=Z;Ee;Ee=ps(Ee))ee++;for(;0<G-ee;)Be=ps(Be),G--;for(;0<ee-G;)Z=ps(Z),ee--;for(;G--;){if(Be===Z||Z!==null&&Be===Z.alternate)break t;Be=ps(Be),Z=ps(Z)}Be=null}else Be=null;Ue!==null&&Uh(Se,ve,Ue,Be,!1),Oe!==null&&Vt!==null&&Uh(Se,Vt,Oe,Be,!0)}}e:{if(ve=ie?gs(ie):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Ge=Gv;else if(ph(ve))if(gh)Ge=qv;else{Ge=Wv;var Qe=Vv}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ge=Xv);if(Ge&&(Ge=Ge(n,ie))){mh(Se,Ge,a,_e);break e}Qe&&Qe(n,ve,ie),n==="focusout"&&(Qe=ve._wrapperState)&&Qe.controlled&&ve.type==="number"&&R(ve,"number",ve.value)}switch(Qe=ie?gs(ie):window,n){case"focusin":(ph(Qe)||Qe.contentEditable==="true")&&(hs=Qe,Sc=ie,wa=null);break;case"focusout":wa=Sc=hs=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Eh(Se,a,_e);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Eh(Se,a,_e)}var Je;if(vc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ds?hh(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(ch&&a.locale!=="ko"&&(ds||st!=="onCompositionStart"?st==="onCompositionEnd"&&ds&&(Je=rh()):(rr=_e,dc="value"in rr?rr.value:rr.textContent,ds=!0)),Qe=To(ie,st),0<Qe.length&&(st=new oh(st,n,null,a,_e),Se.push({event:st,listeners:Qe}),Je?st.data=Je:(Je=fh(a),Je!==null&&(st.data=Je)))),(Je=Ov?zv(n,a):Bv(n,a))&&(ie=To(ie,"onBeforeInput"),0<ie.length&&(_e=new oh("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ie}),_e.data=Je))}Dh(Se,i)})}function Ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function To(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=wt(n,a),g!=null&&c.unshift(Ta(n,g,f)),g=wt(n,i),g!=null&&c.push(Ta(n,g,f))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uh(n,i,a,c,f){for(var g=i._reactName,M=[];a!==null&&a!==c;){var I=a,z=I.alternate,ie=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&ie!==null&&(I=ie,f?(z=wt(a,g),z!=null&&M.unshift(Ta(a,z,I))):f||(z=wt(a,g),z!=null&&M.push(Ta(a,z,I)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Fh(n){return(typeof n=="string"?n:""+n).replace(e0,`
`).replace(t0,"")}function bo(n,i,a){if(i=Fh(i),Fh(n)!==i&&a)throw Error(t(425))}function Ao(){}var Rc=null,Cc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(n){return kh.resolve(null).then(n).catch(r0)}:Lc;function r0(n){setTimeout(function(){throw n})}function Nc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ma(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ma(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),xi="__reactFiber$"+ms,ba="__reactProps$"+ms,Li="__reactContainer$"+ms,Dc="__reactEvents$"+ms,s0="__reactListeners$"+ms,a0="__reactHandles$"+ms;function Fr(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Li]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Oh(n);n!==null;){if(a=n[xi])return a;n=Oh(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[xi]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ro(n){return n[ba]||null}var Ic=[],vs=-1;function or(n){return{current:n}}function It(n){0>vs||(n.current=Ic[vs],Ic[vs]=null,vs--)}function Nt(n,i){vs++,Ic[vs]=n.current,n.current=i}var lr={},cn=or(lr),bn=or(!1),kr=lr;function xs(n,i){var a=n.type.contextTypes;if(!a)return lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function An(n){return n=n.childContextTypes,n!=null}function Co(){It(bn),It(cn)}function zh(n,i,a){if(cn.current!==lr)throw Error(t(168));Nt(cn,i),Nt(bn,a)}function Bh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Pe(n)||"Unknown",f));return W({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,kr=cn.current,Nt(cn,n),Nt(bn,bn.current),!0}function jh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,i,kr),c.__reactInternalMemoizedMergedChildContext=n,It(bn),It(cn),Nt(cn,n)):It(bn),Nt(bn,a)}var Ni=null,Lo=!1,Uc=!1;function Hh(n){Ni===null?Ni=[n]:Ni.push(n)}function o0(n){Lo=!0,Hh(n)}function cr(){if(!Uc&&Ni!==null){Uc=!0;var n=0,i=Rt;try{var a=Ni;for(Rt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ni=null,Lo=!1}catch(f){throw Ni!==null&&(Ni=Ni.slice(n+1)),re(ot,cr),f}finally{Rt=i,Uc=!1}}return null}var _s=[],ys=0,No=null,Do=0,Yn=[],$n=0,Or=null,Di=1,Ii="";function zr(n,i){_s[ys++]=Do,_s[ys++]=No,No=n,Do=i}function Gh(n,i,a){Yn[$n++]=Di,Yn[$n++]=Ii,Yn[$n++]=Or,Or=n;var c=Di;n=Ii;var f=32-_n(c)-1;c&=~(1<<f),a+=1;var g=32-_n(i)+f;if(30<g){var M=f-f%5;g=(c&(1<<M)-1).toString(32),c>>=M,f-=M,Di=1<<32-_n(i)+f|a<<f|c,Ii=g+n}else Di=1<<g|a<<f|c,Ii=n}function Fc(n){n.return!==null&&(zr(n,1),Gh(n,1,0))}function kc(n){for(;n===No;)No=_s[--ys],_s[ys]=null,Do=_s[--ys],_s[ys]=null;for(;n===Or;)Or=Yn[--$n],Yn[$n]=null,Ii=Yn[--$n],Yn[$n]=null,Di=Yn[--$n],Yn[$n]=null}var Bn=null,jn=null,kt=!1,ri=null;function Vh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,jn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:Di,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,jn=null,!0):!1;default:return!1}}function Oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(kt){var i=jn;if(i){var a=i;if(!Wh(n,i)){if(Oc(n))throw Error(t(418));i=ar(a.nextSibling);var c=Bn;i&&Wh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,kt=!1,Bn=n)}}else{if(Oc(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Bn=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Io(n){if(n!==Bn)return!1;if(!kt)return Xh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=jn)){if(Oc(n))throw qh(),Error(t(418));for(;i;)Vh(n,i),i=ar(i.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jn=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Bn?ar(n.stateNode.nextSibling):null;return!0}function qh(){for(var n=jn;n;)n=ar(n.nextSibling)}function Ss(){jn=Bn=null,kt=!1}function Bc(n){ri===null?ri=[n]:ri.push(n)}var l0=D.ReactCurrentBatchConfig;function Ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(M){var I=f.refs;M===null?delete I[g]:I[g]=M},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function $h(n){function i(Z,G){if(n){var ee=Z.deletions;ee===null?(Z.deletions=[G],Z.flags|=16):ee.push(G)}}function a(Z,G){if(!n)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function c(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function f(Z,G){return Z=vr(Z,G),Z.index=0,Z.sibling=null,Z}function g(Z,G,ee){return Z.index=ee,n?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<G?(Z.flags|=2,G):ee):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function M(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,G,ee,Ee){return G===null||G.tag!==6?(G=Lu(ee,Z.mode,Ee),G.return=Z,G):(G=f(G,ee),G.return=Z,G)}function z(Z,G,ee,Ee){var Ge=ee.type;return Ge===k?_e(Z,G,ee.props.children,Ee,ee.key):G!==null&&(G.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===X&&Yh(Ge)===G.type)?(Ee=f(G,ee.props),Ee.ref=Ra(Z,G,ee),Ee.return=Z,Ee):(Ee=sl(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=Ra(Z,G,ee),Ee.return=Z,Ee)}function ie(Z,G,ee,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=Nu(ee,Z.mode,Ee),G.return=Z,G):(G=f(G,ee.children||[]),G.return=Z,G)}function _e(Z,G,ee,Ee,Ge){return G===null||G.tag!==7?(G=qr(ee,Z.mode,Ee,Ge),G.return=Z,G):(G=f(G,ee),G.return=Z,G)}function Se(Z,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Lu(""+G,Z.mode,ee),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return ee=sl(G.type,G.key,G.props,null,Z.mode,ee),ee.ref=Ra(Z,null,G),ee.return=Z,ee;case O:return G=Nu(G,Z.mode,ee),G.return=Z,G;case X:var Ee=G._init;return Se(Z,Ee(G._payload),ee)}if(T(G)||J(G))return G=qr(G,Z.mode,ee,null),G.return=Z,G;Uo(Z,G)}return null}function ve(Z,G,ee,Ee){var Ge=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ge!==null?null:I(Z,G,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:return ee.key===Ge?z(Z,G,ee,Ee):null;case O:return ee.key===Ge?ie(Z,G,ee,Ee):null;case X:return Ge=ee._init,ve(Z,G,Ge(ee._payload),Ee)}if(T(ee)||J(ee))return Ge!==null?null:_e(Z,G,ee,Ee,null);Uo(Z,ee)}return null}function Ue(Z,G,ee,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(ee)||null,I(G,Z,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,z(G,Z,Ee,Ge);case O:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,ie(G,Z,Ee,Ge);case X:var Qe=Ee._init;return Ue(Z,G,ee,Qe(Ee._payload),Ge)}if(T(Ee)||J(Ee))return Z=Z.get(ee)||null,_e(G,Z,Ee,Ge,null);Uo(G,Ee)}return null}function Oe(Z,G,ee,Ee){for(var Ge=null,Qe=null,Je=G,st=G=0,tn=null;Je!==null&&st<ee.length;st++){Je.index>st?(tn=Je,Je=null):tn=Je.sibling;var Mt=ve(Z,Je,ee[st],Ee);if(Mt===null){Je===null&&(Je=tn);break}n&&Je&&Mt.alternate===null&&i(Z,Je),G=g(Mt,G,st),Qe===null?Ge=Mt:Qe.sibling=Mt,Qe=Mt,Je=tn}if(st===ee.length)return a(Z,Je),kt&&zr(Z,st),Ge;if(Je===null){for(;st<ee.length;st++)Je=Se(Z,ee[st],Ee),Je!==null&&(G=g(Je,G,st),Qe===null?Ge=Je:Qe.sibling=Je,Qe=Je);return kt&&zr(Z,st),Ge}for(Je=c(Z,Je);st<ee.length;st++)tn=Ue(Je,Z,st,ee[st],Ee),tn!==null&&(n&&tn.alternate!==null&&Je.delete(tn.key===null?st:tn.key),G=g(tn,G,st),Qe===null?Ge=tn:Qe.sibling=tn,Qe=tn);return n&&Je.forEach(function(xr){return i(Z,xr)}),kt&&zr(Z,st),Ge}function Be(Z,G,ee,Ee){var Ge=J(ee);if(typeof Ge!="function")throw Error(t(150));if(ee=Ge.call(ee),ee==null)throw Error(t(151));for(var Qe=Ge=null,Je=G,st=G=0,tn=null,Mt=ee.next();Je!==null&&!Mt.done;st++,Mt=ee.next()){Je.index>st?(tn=Je,Je=null):tn=Je.sibling;var xr=ve(Z,Je,Mt.value,Ee);if(xr===null){Je===null&&(Je=tn);break}n&&Je&&xr.alternate===null&&i(Z,Je),G=g(xr,G,st),Qe===null?Ge=xr:Qe.sibling=xr,Qe=xr,Je=tn}if(Mt.done)return a(Z,Je),kt&&zr(Z,st),Ge;if(Je===null){for(;!Mt.done;st++,Mt=ee.next())Mt=Se(Z,Mt.value,Ee),Mt!==null&&(G=g(Mt,G,st),Qe===null?Ge=Mt:Qe.sibling=Mt,Qe=Mt);return kt&&zr(Z,st),Ge}for(Je=c(Z,Je);!Mt.done;st++,Mt=ee.next())Mt=Ue(Je,Z,st,Mt.value,Ee),Mt!==null&&(n&&Mt.alternate!==null&&Je.delete(Mt.key===null?st:Mt.key),G=g(Mt,G,st),Qe===null?Ge=Mt:Qe.sibling=Mt,Qe=Mt);return n&&Je.forEach(function(j0){return i(Z,j0)}),kt&&zr(Z,st),Ge}function Vt(Z,G,ee,Ee){if(typeof ee=="object"&&ee!==null&&ee.type===k&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case V:e:{for(var Ge=ee.key,Qe=G;Qe!==null;){if(Qe.key===Ge){if(Ge=ee.type,Ge===k){if(Qe.tag===7){a(Z,Qe.sibling),G=f(Qe,ee.props.children),G.return=Z,Z=G;break e}}else if(Qe.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===X&&Yh(Ge)===Qe.type){a(Z,Qe.sibling),G=f(Qe,ee.props),G.ref=Ra(Z,Qe,ee),G.return=Z,Z=G;break e}a(Z,Qe);break}else i(Z,Qe);Qe=Qe.sibling}ee.type===k?(G=qr(ee.props.children,Z.mode,Ee,ee.key),G.return=Z,Z=G):(Ee=sl(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=Ra(Z,G,ee),Ee.return=Z,Z=Ee)}return M(Z);case O:e:{for(Qe=ee.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){a(Z,G.sibling),G=f(G,ee.children||[]),G.return=Z,Z=G;break e}else{a(Z,G);break}else i(Z,G);G=G.sibling}G=Nu(ee,Z.mode,Ee),G.return=Z,Z=G}return M(Z);case X:return Qe=ee._init,Vt(Z,G,Qe(ee._payload),Ee)}if(T(ee))return Oe(Z,G,ee,Ee);if(J(ee))return Be(Z,G,ee,Ee);Uo(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(a(Z,G.sibling),G=f(G,ee),G.return=Z,Z=G):(a(Z,G),G=Lu(ee,Z.mode,Ee),G.return=Z,Z=G),M(Z)):a(Z,G)}return Vt}var ws=$h(!0),Kh=$h(!1),Fo=or(null),ko=null,Ms=null,jc=null;function Hc(){jc=Ms=ko=null}function Gc(n){var i=Fo.current;It(Fo),n._currentValue=i}function Vc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Es(n,i){ko=n,jc=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},Ms===null){if(ko===null)throw Error(t(308));Ms=n,ko.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return i}var Br=null;function Wc(n){Br===null?Br=[n]:Br.push(n)}function Zh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Wc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ui(n,c)}function Ui(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ur=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(yt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ui(n,a)}return f=c.interleaved,f===null?(i.next=i,Wc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ui(n,a)}function Oo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ac(n,a)}}function Jh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=M:g=g.next=M,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zo(n,i,a,c){var f=n.updateQueue;ur=!1;var g=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,ie=z.next;z.next=null,M===null?g=ie:M.next=ie,M=z;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==M&&(I===null?_e.firstBaseUpdate=ie:I.next=ie,_e.lastBaseUpdate=z))}if(g!==null){var Se=f.baseState;M=0,_e=ie=z=null,I=g;do{var ve=I.lane,Ue=I.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Oe=n,Be=I;switch(ve=i,Ue=a,Be.tag){case 1:if(Oe=Be.payload,typeof Oe=="function"){Se=Oe.call(Ue,Se,ve);break e}Se=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Be.payload,ve=typeof Oe=="function"?Oe.call(Ue,Se,ve):Oe,ve==null)break e;Se=W({},Se,ve);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[I]:ve.push(I))}else Ue={eventTime:Ue,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ie=_e=Ue,z=Se):_e=_e.next=Ue,M|=ve;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(_e===null&&(z=Se),f.baseState=z,f.firstBaseUpdate=ie,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Gr|=M,n.lanes=M,n.memoizedState=Se}}function ef(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ca={},_i=or(Ca),Pa=or(Ca),La=or(Ca);function jr(n){if(n===Ca)throw Error(t(174));return n}function qc(n,i){switch(Nt(La,i),Nt(Pa,n),Nt(_i,Ca),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ne(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ne(i,n)}It(_i),Nt(_i,i)}function Ts(){It(_i),It(Pa),It(La)}function tf(n){jr(La.current);var i=jr(_i.current),a=Ne(i,n.type);i!==a&&(Nt(Pa,n),Nt(_i,a))}function Yc(n){Pa.current===n&&(It(_i),It(Pa))}var Ot=or(0);function Bo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function Kc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var jo=D.ReactCurrentDispatcher,Zc=D.ReactCurrentBatchConfig,Hr=0,zt=null,Yt=null,Jt=null,Ho=!1,Na=!1,Da=0,c0=0;function un(){throw Error(t(321))}function Qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function Jc(n,i,a,c,f,g){if(Hr=g,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=n===null||n.memoizedState===null?f0:p0,n=a(c,f),Na){g=0;do{if(Na=!1,Da=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,i.updateQueue=null,jo.current=m0,n=a(c,f)}while(Na)}if(jo.current=Wo,i=Yt!==null&&Yt.next!==null,Hr=0,Jt=Yt=zt=null,Ho=!1,i)throw Error(t(300));return n}function eu(){var n=Da!==0;return Da=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Zn(){if(Yt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Ia(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Yt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var M=f.next;f.next=g.next,g.next=M}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=M=null,z=null,ie=g;do{var _e=ie.lane;if((Hr&_e)===_e)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var Se={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(I=z=Se,M=c):z=z.next=Se,zt.lanes|=_e,Gr|=_e}ie=ie.next}while(ie!==null&&ie!==g);z===null?M=c:z.next=I,ii(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,zt.lanes|=g,Gr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do g=n(g,M.action),M=M.next;while(M!==f);ii(g,i.memoizedState)||(Rn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function nf(){}function rf(n,i){var a=zt,c=Zn(),f=i(),g=!ii(c.memoizedState,f);if(g&&(c.memoizedState=f,Rn=!0),c=c.queue,iu(of.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Ua(9,af.bind(null,a,c,f,i),void 0,null),en===null)throw Error(t(349));(Hr&30)!==0||sf(a,i,f)}return f}function sf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function af(n,i,a,c){i.value=a,i.getSnapshot=c,lf(i)&&cf(n)}function of(n,i,a){return a(function(){lf(i)&&cf(n)})}function lf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function cf(n){var i=Ui(n,1);i!==null&&li(i,n,1,-1)}function uf(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},i.queue=n,n=n.dispatch=h0.bind(null,zt,n),[i.memoizedState,n]}function Ua(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function df(){return Zn().memoizedState}function Go(n,i,a,c){var f=yi();zt.flags|=n,f.memoizedState=Ua(1|i,a,void 0,c===void 0?null:c)}function Vo(n,i,a,c){var f=Zn();c=c===void 0?null:c;var g=void 0;if(Yt!==null){var M=Yt.memoizedState;if(g=M.destroy,c!==null&&Qc(c,M.deps)){f.memoizedState=Ua(i,a,g,c);return}}zt.flags|=n,f.memoizedState=Ua(1|i,a,g,c)}function hf(n,i){return Go(8390656,8,n,i)}function iu(n,i){return Vo(2048,8,n,i)}function ff(n,i){return Vo(4,2,n,i)}function pf(n,i){return Vo(4,4,n,i)}function mf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function gf(n,i,a){return a=a!=null?a.concat([n]):null,Vo(4,4,mf.bind(null,i,n),a)}function ru(){}function vf(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function xf(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function _f(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(ii(a,i)||(a=ho(),zt.lanes|=a,Gr|=a,n.baseState=!0),i)}function u0(n,i){var a=Rt;Rt=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{Rt=a,Zc.transition=c}}function yf(){return Zn().memoizedState}function d0(n,i,a){var c=mr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sf(n))wf(i,a);else if(a=Zh(n,i,a,c),a!==null){var f=Sn();li(a,n,c,f),Mf(a,i,c)}}function h0(n,i,a){var c=mr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sf(n))wf(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var M=i.lastRenderedState,I=g(M,a);if(f.hasEagerState=!0,f.eagerState=I,ii(I,M)){var z=i.interleaved;z===null?(f.next=f,Wc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=Zh(n,i,f,c),a!==null&&(f=Sn(),li(a,n,c,f),Mf(a,i,c))}}function Sf(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function wf(n,i){Na=Ho=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Mf(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ac(n,a)}}var Wo={readContext:Kn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},f0={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:hf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,mf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=yi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=d0.bind(null,zt,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:uf,useDebugValue:ru,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=uf(!1),i=n[0];return n=u0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=zt,f=yi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Hr&30)!==0||sf(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,hf(of.bind(null,c,g,n),[n]),c.flags|=2048,Ua(9,af.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=yi(),i=en.identifierPrefix;if(kt){var a=Ii,c=Di;a=(c&~(1<<32-_n(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=c0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},p0={readContext:Kn,useCallback:vf,useContext:Kn,useEffect:iu,useImperativeHandle:gf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:xf,useReducer:tu,useRef:df,useState:function(){return tu(Ia)},useDebugValue:ru,useDeferredValue:function(n){var i=Zn();return _f(i,Yt.memoizedState,n)},useTransition:function(){var n=tu(Ia)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1},m0={readContext:Kn,useCallback:vf,useContext:Kn,useEffect:iu,useImperativeHandle:gf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:xf,useReducer:nu,useRef:df,useState:function(){return nu(Ia)},useDebugValue:ru,useDeferredValue:function(n){var i=Zn();return Yt===null?i.memoizedState=n:_f(i,Yt.memoizedState,n)},useTransition:function(){var n=nu(Ia)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:W({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xo={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Sn(),f=mr(n),g=Fi(c,f);g.payload=i,a!=null&&(g.callback=a),i=dr(n,g,f),i!==null&&(li(i,n,f,c),Oo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Sn(),f=mr(n),g=Fi(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=dr(n,g,f),i!==null&&(li(i,n,f,c),Oo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Sn(),c=mr(n),f=Fi(a,c);f.tag=2,i!=null&&(f.callback=i),i=dr(n,f,c),i!==null&&(li(i,n,c,a),Oo(i,n,c))}};function Ef(n,i,a,c,f,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,M):i.prototype&&i.prototype.isPureReactComponent?!Sa(a,c)||!Sa(f,g):!0}function Tf(n,i,a){var c=!1,f=lr,g=i.contextType;return typeof g=="object"&&g!==null?g=Kn(g):(f=An(i)?kr:cn.current,c=i.contextTypes,g=(c=c!=null)?xs(n,f):lr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function bf(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Xo.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Xc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Kn(g):(g=An(i)?kr:cn.current,f.context=xs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(su(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Xo.enqueueReplaceState(f,f.state,null),zo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",c=i;do a+=ae(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function Af(n,i,a){a=Fi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jo||(Jo=!0,Mu=c),lu(n,i)},a}function Rf(n,i,a){a=Fi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){lu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Cf(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new g0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=P0.bind(null,n,i,a),i.then(n,n))}function Pf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Lf(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Fi(-1,1),i.tag=2,dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var v0=D.ReactCurrentOwner,Rn=!1;function yn(n,i,a,c){i.child=n===null?Kh(i,null,a,c):ws(i,n.child,a,c)}function Nf(n,i,a,c,f){a=a.render;var g=i.ref;return Es(i,f),c=Jc(n,i,a,c,g,f),a=eu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(kt&&a&&Fc(i),i.flags|=1,yn(n,i,c,f),i.child)}function Df(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!Pu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,If(n,i,g,c,f)):(n=sl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var M=g.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(M,c)&&n.ref===i.ref)return ki(n,i,f)}return i.flags|=1,n=vr(g,c),n.ref=i.ref,n.return=i,i.child=n}function If(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(Sa(g,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,ki(n,i,f)}return cu(n,i,a,c,f)}function Uf(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Rs,Hn),Hn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Rs,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Nt(Rs,Hn),Hn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Nt(Rs,Hn),Hn|=c;return yn(n,i,f,a),i.child}function Ff(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,f){var g=An(a)?kr:cn.current;return g=xs(i,g),Es(i,f),a=Jc(n,i,a,c,g,f),c=eu(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(kt&&c&&Fc(i),i.flags|=1,yn(n,i,a,f),i.child)}function kf(n,i,a,c,f){if(An(a)){var g=!0;Po(i)}else g=!1;if(Es(i,f),i.stateNode===null)Yo(n,i),Tf(i,a,c),au(i,a,c,f),c=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var z=M.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Kn(ie):(ie=An(a)?kr:cn.current,ie=xs(i,ie));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==c||z!==ie)&&bf(i,M,c,ie),ur=!1;var ve=i.memoizedState;M.state=ve,zo(i,c,M,f),z=i.memoizedState,I!==c||ve!==z||bn.current||ur?(typeof _e=="function"&&(su(i,a,_e,c),z=i.memoizedState),(I=ur||Ef(i,a,I,c,ve,z,ie))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),M.props=c,M.state=z,M.context=ie,c=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Qh(n,i),I=i.memoizedProps,ie=i.type===i.elementType?I:si(i.type,I),M.props=ie,Se=i.pendingProps,ve=M.context,z=a.contextType,typeof z=="object"&&z!==null?z=Kn(z):(z=An(a)?kr:cn.current,z=xs(i,z));var Ue=a.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Se||ve!==z)&&bf(i,M,c,z),ur=!1,ve=i.memoizedState,M.state=ve,zo(i,c,M,f);var Oe=i.memoizedState;I!==Se||ve!==Oe||bn.current||ur?(typeof Ue=="function"&&(su(i,a,Ue,c),Oe=i.memoizedState),(ie=ur||Ef(i,a,ie,c,ve,Oe,z)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Oe,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Oe,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Oe),M.props=c,M.state=Oe,M.context=z,c=ie):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,g,f)}function uu(n,i,a,c,f,g){Ff(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&jh(i,a,!1),ki(n,i,g);c=i.stateNode,v0.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=ws(i,n.child,null,g),i.child=ws(i,null,I,g)):yn(n,i,I,g),i.memoizedState=c.state,f&&jh(i,a,!0),i.child}function Of(n){var i=n.stateNode;i.pendingContext?zh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&zh(n,i.context,!1),qc(n,i.containerInfo)}function zf(n,i,a,c,f){return Ss(),Bc(f),i.flags|=256,yn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bf(n,i,a){var c=i.pendingProps,f=Ot.current,g=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Nt(Ot,f&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,g?(c=i.mode,g=i.child,M={mode:"hidden",children:M},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=al(M,c,0,null),n=qr(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=hu(a),i.memoizedState=du,n):fu(i,M));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return x0(n,i,M,c,I,f,a);if(g){g=c.fallback,M=i.mode,f=n.child,I=f.sibling;var z={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=vr(f,z),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=vr(I,g):(g=qr(g,M,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,M=n.child.memoizedState,M=M===null?hu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~a,i.memoizedState=du,c}return g=n.child,n=g.sibling,c=vr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function fu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function qo(n,i,a,c){return c!==null&&Bc(c),ws(i,n.child,null,a),n=fu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function x0(n,i,a,c,f,g,M){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),qo(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=al({mode:"visible",children:c.children},f,0,null),g=qr(g,f,M,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&ws(i,n.child,null,M),i.child.memoizedState=hu(M),i.memoizedState=du,g);if((i.mode&1)===0)return qo(n,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=ou(g,c,void 0),qo(n,i,M,c)}if(I=(M&n.childLanes)!==0,Rn||I){if(c=en,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ui(n,f),li(c,n,f,-1))}return Cu(),c=ou(Error(t(421))),qo(n,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=L0.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,jn=ar(f.nextSibling),Bn=i,kt=!0,ri=null,n!==null&&(Yn[$n++]=Di,Yn[$n++]=Ii,Yn[$n++]=Or,Di=n.id,Ii=n.overflow,Or=i),i=fu(i,c.children),i.flags|=4096,i)}function jf(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Vc(n.return,i,a)}function pu(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Hf(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(yn(n,i,c.children,a),c=Ot.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jf(n,a,i);else if(n.tag===19)jf(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Nt(Ot,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Bo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),pu(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Bo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}pu(i,!0,a,null,g);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function _0(n,i,a){switch(i.tag){case 3:Of(i),Ss();break;case 5:tf(i);break;case 1:An(i.type)&&Po(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Nt(Fo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Nt(Ot,Ot.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Bf(n,i,a):(Nt(Ot,Ot.current&1),n=ki(n,i,a),n!==null?n.sibling:null);Nt(Ot,Ot.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Hf(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Nt(Ot,Ot.current),c)break;return null;case 22:case 23:return i.lanes=0,Uf(n,i,a)}return ki(n,i,a)}var Gf,mu,Vf,Wf;Gf=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},Vf=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,jr(_i.current);var g=null;switch(a){case"input":f=We(n,f),c=We(n,c),g=[];break;case"select":f=W({},f,{value:void 0}),c=W({},c,{value:void 0}),g=[];break;case"textarea":f=fe(n,f),c=fe(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ao)}lt(a,c);var M;a=null;for(ie in f)if(!c.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var I=f[ie];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in c){var z=c[ie];if(I=f!=null?f[ie]:void 0,c.hasOwnProperty(ie)&&z!==I&&(z!=null||I!=null))if(ie==="style")if(I){for(M in I)!I.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in z)z.hasOwnProperty(M)&&I[M]!==z[M]&&(a||(a={}),a[M]=z[M])}else a||(g||(g=[]),g.push(ie,a)),a=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(g=g||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Dt("scroll",n),g||I===z||(g=[])):(g=g||[]).push(ie,z))}a&&(g=g||[]).push("style",a);var ie=g;(i.updateQueue=ie)&&(i.flags|=4)}},Wf=function(n,i,a,c){a!==c&&(i.flags|=4)};function Fa(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function y0(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return An(i.type)&&Co(),dn(i),null;case 3:return c=i.stateNode,Ts(),It(bn),It(cn),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(bu(ri),ri=null))),mu(n,i),dn(i),null;case 5:Yc(i);var f=jr(La.current);if(a=i.type,n!==null&&i.stateNode!=null)Vf(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=jr(_i.current),Io(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[xi]=i,c[ba]=g,n=(i.mode&1)!==0,a){case"dialog":Dt("cancel",c),Dt("close",c);break;case"iframe":case"object":case"embed":Dt("load",c);break;case"video":case"audio":for(f=0;f<Ma.length;f++)Dt(Ma[f],c);break;case"source":Dt("error",c);break;case"img":case"image":case"link":Dt("error",c),Dt("load",c);break;case"details":Dt("toggle",c);break;case"input":qe(c,g),Dt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Dt("invalid",c);break;case"textarea":de(c,g),Dt("invalid",c)}lt(a,g),f=null;for(var M in g)if(g.hasOwnProperty(M)){var I=g[M];M==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&bo(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&bo(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Dt("scroll",c)}switch(a){case"input":$e(c),me(c,g,!0);break;case"textarea":$e(c),De(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ao)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ye(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[xi]=i,n[ba]=c,Gf(n,i,!1,!1),i.stateNode=n;e:{switch(M=_t(a,c),a){case"dialog":Dt("cancel",n),Dt("close",n),f=c;break;case"iframe":case"object":case"embed":Dt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ma.length;f++)Dt(Ma[f],n);f=c;break;case"source":Dt("error",n),f=c;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),f=c;break;case"details":Dt("toggle",n),f=c;break;case"input":qe(n,c),f=We(n,c),Dt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=W({},c,{value:void 0}),Dt("invalid",n);break;case"textarea":de(n,c),f=fe(n,c),Dt("invalid",n);break;default:f=c}lt(a,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var z=I[g];g==="style"?Ke(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&it(n,z)):g==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&xe(n,z):typeof z=="number"&&xe(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Dt("scroll",n):z!=null&&C(n,g,z,M))}switch(a){case"input":$e(n),me(n,c,!1);break;case"textarea":$e(n),De(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Re(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Y(n,!!c.multiple,g,!1):c.defaultValue!=null&&Y(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)Wf(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(La.current),jr(_i.current),Io(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(g=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:bo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return dn(i),null;case 13:if(It(Ot),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qh(),Ss(),i.flags|=98560,g=!1;else if(g=Io(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[xi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),g=!1}else ri!==null&&(bu(ri),ri=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?$t===0&&($t=3):Cu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return Ts(),mu(n,i),n===null&&Ea(i.stateNode.containerInfo),dn(i),null;case 10:return Gc(i.type._context),dn(i),null;case 17:return An(i.type)&&Co(),dn(i),null;case 19:if(It(Ot),g=i.memoizedState,g===null)return dn(i),null;if(c=(i.flags&128)!==0,M=g.rendering,M===null)if(c)Fa(g,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Bo(n),M!==null){for(i.flags|=128,Fa(g,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Nt(Ot,Ot.current&1|2),i.child}n=n.sibling}g.tail!==null&&Fe()>Cs&&(i.flags|=128,c=!0,Fa(g,!1),i.lanes=4194304)}else{if(!c)if(n=Bo(M),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!kt)return dn(i),null}else 2*Fe()-g.renderingStartTime>Cs&&a!==1073741824&&(i.flags|=128,c=!0,Fa(g,!1),i.lanes=4194304);g.isBackwards?(M.sibling=i.child,i.child=M):(a=g.last,a!==null?a.sibling=M:i.child=M,g.last=M)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Fe(),i.sibling=null,a=Ot.current,Nt(Ot,c?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return Ru(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function S0(n,i){switch(kc(i),i.tag){case 1:return An(i.type)&&Co(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),It(bn),It(cn),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(It(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return It(Ot),null;case 4:return Ts(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var $o=!1,hn=!1,w0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function As(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){jt(n,i,c)}}var Xf=!1;function M0(n,i){if(Rc=mo,n=Mh(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var M=0,I=-1,z=-1,ie=0,_e=0,Se=n,ve=null;t:for(;;){for(var Ue;Se!==a||f!==0&&Se.nodeType!==3||(I=M+f),Se!==g||c!==0&&Se.nodeType!==3||(z=M+c),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===n)break t;if(ve===a&&++ie===f&&(I=M),ve===g&&++_e===c&&(z=M),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},mo=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var Be=Oe.memoizedProps,Vt=Oe.memoizedState,Z=i.stateNode,G=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Be:si(i.type,Be),Vt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){jt(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Oe=Xf,Xf=!1,Oe}function ka(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&gu(i,a,g)}f=f.next}while(f!==c)}}function Ko(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function qf(n){var i=n.alternate;i!==null&&(n.alternate=null,qf(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[ba],delete i[Dc],delete i[s0],delete i[a0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yf(n){return n.tag===5||n.tag===3||n.tag===4}function $f(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var rn=null,ai=!1;function hr(n,i,a){for(a=a.child;a!==null;)Kf(n,i,a),a=a.sibling}function Kf(n,i,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(En,a)}catch{}switch(a.tag){case 5:hn||As(a,i);case 6:var c=rn,f=ai;rn=null,hr(n,i,a),rn=c,ai=f,rn!==null&&(ai?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(ai?(n=rn,a=a.stateNode,n.nodeType===8?Nc(n.parentNode,a):n.nodeType===1&&Nc(n,a),ma(n)):Nc(rn,a.stateNode));break;case 4:c=rn,f=ai,rn=a.stateNode.containerInfo,ai=!0,hr(n,i,a),rn=c,ai=f;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&gu(a,i,M),f=f.next}while(f!==c)}hr(n,i,a);break;case 1:if(!hn&&(As(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,i,I)}hr(n,i,a);break;case 21:hr(n,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,hr(n,i,a),hn=c):hr(n,i,a);break;default:hr(n,i,a)}}function Zf(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new w0),i.forEach(function(c){var f=N0.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:rn=I.stateNode,ai=!1;break e;case 3:rn=I.stateNode.containerInfo,ai=!0;break e;case 4:rn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(rn===null)throw Error(t(160));Kf(g,M,f),rn=null,ai=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ie){jt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qf(i,n),i=i.sibling}function Qf(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),Si(n),c&4){try{ka(3,n,n.return),Ko(3,n)}catch(Be){jt(n,n.return,Be)}try{ka(5,n,n.return)}catch(Be){jt(n,n.return,Be)}}break;case 1:oi(i,n),Si(n),c&512&&a!==null&&As(a,a.return);break;case 5:if(oi(i,n),Si(n),c&512&&a!==null&&As(a,a.return),n.flags&32){var f=n.stateNode;try{xe(f,"")}catch(Be){jt(n,n.return,Be)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,M=a!==null?a.memoizedProps:g,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Xe(f,g),_t(I,M);var ie=_t(I,g);for(M=0;M<z.length;M+=2){var _e=z[M],Se=z[M+1];_e==="style"?Ke(f,Se):_e==="dangerouslySetInnerHTML"?it(f,Se):_e==="children"?xe(f,Se):C(f,_e,Se,ie)}switch(I){case"input":Ce(f,g);break;case"textarea":he(f,g);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Ue=g.value;Ue!=null?Y(f,!!g.multiple,Ue,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Y(f,!!g.multiple,g.defaultValue,!0):Y(f,!!g.multiple,g.multiple?[]:"",!1))}f[ba]=g}catch(Be){jt(n,n.return,Be)}}break;case 6:if(oi(i,n),Si(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(Be){jt(n,n.return,Be)}}break;case 3:if(oi(i,n),Si(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ma(i.containerInfo)}catch(Be){jt(n,n.return,Be)}break;case 4:oi(i,n),Si(n);break;case 13:oi(i,n),Si(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(wu=Fe())),c&4&&Zf(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(ie=hn)||_e,oi(i,n),hn=ie):oi(i,n),Si(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!_e&&(n.mode&1)!==0)for(ke=n,_e=n.child;_e!==null;){for(Se=ke=_e;ke!==null;){switch(ve=ke,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:ka(4,ve,ve.return);break;case 1:As(ve,ve.return);var Oe=ve.stateNode;if(typeof Oe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Oe.props=i.memoizedProps,Oe.state=i.memoizedState,Oe.componentWillUnmount()}catch(Be){jt(c,a,Be)}}break;case 5:As(ve,ve.return);break;case 22:if(ve.memoizedState!==null){tp(Se);continue}}Ue!==null?(Ue.return=ve,ke=Ue):tp(Se)}_e=_e.sibling}e:for(_e=null,Se=n;;){if(Se.tag===5){if(_e===null){_e=Se;try{f=Se.stateNode,ie?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=at("display",M))}catch(Be){jt(n,n.return,Be)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(Be){jt(n,n.return,Be)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:oi(i,n),Si(n),c&4&&Zf(n);break;case 21:break;default:oi(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Yf(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(xe(f,""),c.flags&=-33);var g=$f(n);_u(n,g,f);break;case 3:case 4:var M=c.stateNode.containerInfo,I=$f(n);xu(n,I,M);break;default:throw Error(t(161))}}catch(z){jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function E0(n,i,a){ke=n,Jf(n)}function Jf(n,i,a){for(var c=(n.mode&1)!==0;ke!==null;){var f=ke,g=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||$o;if(!M){var I=f.alternate,z=I!==null&&I.memoizedState!==null||hn;I=$o;var ie=hn;if($o=M,(hn=z)&&!ie)for(ke=f;ke!==null;)M=ke,z=M.child,M.tag===22&&M.memoizedState!==null?np(f):z!==null?(z.return=M,ke=z):np(f);for(;g!==null;)ke=g,Jf(g),g=g.sibling;ke=f,$o=I,hn=ie}ep(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ke=g):ep(n)}}function ep(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ko(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&ef(i,g,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ef(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ma(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&vu(i)}catch(ve){jt(i,i.return,ve)}}if(i===n){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function tp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function np(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(z){jt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){jt(i,f,z)}}var g=i.return;try{vu(i)}catch(z){jt(i,g,z)}break;case 5:var M=i.return;try{vu(i)}catch(z){jt(i,M,z)}}}catch(z){jt(i,i.return,z)}if(i===n){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var T0=Math.ceil,Zo=D.ReactCurrentDispatcher,yu=D.ReactCurrentOwner,Qn=D.ReactCurrentBatchConfig,yt=0,en=null,Wt=null,sn=0,Hn=0,Rs=or(0),$t=0,Oa=null,Gr=0,Qo=0,Su=0,za=null,Cn=null,wu=0,Cs=1/0,Oi=null,Jo=!1,Mu=null,fr=null,el=!1,pr=null,tl=0,Ba=0,Eu=null,nl=-1,il=0;function Sn(){return(yt&6)!==0?Fe():nl!==-1?nl:nl=Fe()}function mr(n){return(n.mode&1)===0?1:(yt&2)!==0&&sn!==0?sn&-sn:l0.transition!==null?(il===0&&(il=ho()),il):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:ih(n.type)),n)}function li(n,i,a,c){if(50<Ba)throw Ba=0,Eu=null,Error(t(185));ua(n,a,c),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&(Qo|=a),$t===4&&gr(n,sn)),Pn(n,c),a===1&&yt===0&&(i.mode&1)===0&&(Cs=Fe()+500,Lo&&cr()))}function Pn(n,i){var a=n.callbackNode;Tn(n,i);var c=qn(n,n===en?sn:0);if(c===0)a!==null&&Ie(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ie(a),i===1)n.tag===0?o0(rp.bind(null,n)):Hh(rp.bind(null,n)),i0(function(){(yt&6)===0&&cr()}),a=null;else{switch($d(c)){case 1:a=ot;break;case 4:a=ct;break;case 16:a=Lt;break;case 536870912:a=Gt;break;default:a=Lt}a=hp(a,ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function ip(n,i){if(nl=-1,il=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ps()&&n.callbackNode!==a)return null;var c=qn(n,n===en?sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=rl(n,c);else{i=c;var f=yt;yt|=2;var g=ap();(en!==n||sn!==i)&&(Oi=null,Cs=Fe()+500,Wr(n,i));do try{R0();break}catch(I){sp(n,I)}while(!0);Hc(),Zo.current=g,yt=f,Wt!==null?i=0:(en=null,sn=0,i=$t)}if(i!==0){if(i===2&&(f=Ur(n),f!==0&&(c=f,i=Tu(n,f))),i===1)throw a=Oa,Wr(n,0),gr(n,c),Pn(n,Fe()),a;if(i===6)gr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!b0(f)&&(i=rl(n,c),i===2&&(g=Ur(n),g!==0&&(c=g,i=Tu(n,g))),i===1))throw a=Oa,Wr(n,0),gr(n,c),Pn(n,Fe()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Xr(n,Cn,Oi);break;case 3:if(gr(n,c),(c&130023424)===c&&(i=wu+500-Fe(),10<i)){if(qn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Sn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Lc(Xr.bind(null,n,Cn,Oi),i);break}Xr(n,Cn,Oi);break;case 4:if(gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var M=31-_n(c);g=1<<M,M=i[M],M>f&&(f=M),c&=~g}if(c=f,c=Fe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*T0(c/1960))-c,10<c){n.timeoutHandle=Lc(Xr.bind(null,n,Cn,Oi),c);break}Xr(n,Cn,Oi);break;case 5:Xr(n,Cn,Oi);break;default:throw Error(t(329))}}}return Pn(n,Fe()),n.callbackNode===a?ip.bind(null,n):null}function Tu(n,i){var a=za;return n.current.memoizedState.isDehydrated&&(Wr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&bu(i)),n}function bu(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function b0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!ii(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~Su,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-_n(i),c=1<<a;n[a]=-1,i&=~c}}function rp(n){if((yt&6)!==0)throw Error(t(327));Ps();var i=qn(n,0);if((i&1)===0)return Pn(n,Fe()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var c=Ur(n);c!==0&&(i=c,a=Tu(n,c))}if(a===1)throw a=Oa,Wr(n,0),gr(n,i),Pn(n,Fe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Xr(n,Cn,Oi),Pn(n,Fe()),null}function Au(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Cs=Fe()+500,Lo&&cr())}}function Vr(n){pr!==null&&pr.tag===0&&(yt&6)===0&&Ps();var i=yt;yt|=1;var a=Qn.transition,c=Rt;try{if(Qn.transition=null,Rt=1,n)return n()}finally{Rt=c,Qn.transition=a,yt=i,(yt&6)===0&&cr()}}function Ru(){Hn=Rs.current,It(Rs)}function Wr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,n0(a)),Wt!==null)for(a=Wt.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Co();break;case 3:Ts(),It(bn),It(cn),Kc();break;case 5:Yc(c);break;case 4:Ts();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Gc(c.type._context);break;case 22:case 23:Ru()}a=a.return}if(en=n,Wt=n=vr(n.current,null),sn=Hn=i,$t=0,Oa=null,Su=Qo=Gr=0,Cn=za=null,Br!==null){for(i=0;i<Br.length;i++)if(a=Br[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var M=g.next;g.next=f,c.next=M}a.pending=c}Br=null}return n}function sp(n,i){do{var a=Wt;try{if(Hc(),jo.current=Wo,Ho){for(var c=zt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ho=!1}if(Hr=0,Jt=Yt=zt=null,Na=!1,Da=0,yu.current=null,a===null||a.return===null){$t=1,Oa=i,Wt=null;break}e:{var g=n,M=a.return,I=a,z=i;if(i=sn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,_e=I,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Pf(M);if(Ue!==null){Ue.flags&=-257,Lf(Ue,M,I,g,i),Ue.mode&1&&Cf(g,ie,i),i=Ue,z=ie;var Oe=i.updateQueue;if(Oe===null){var Be=new Set;Be.add(z),i.updateQueue=Be}else Oe.add(z);break e}else{if((i&1)===0){Cf(g,ie,i),Cu();break e}z=Error(t(426))}}else if(kt&&I.mode&1){var Vt=Pf(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Lf(Vt,M,I,g,i),Bc(bs(z,I));break e}}g=z=bs(z,I),$t!==4&&($t=2),za===null?za=[g]:za.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Z=Af(g,z,i);Jh(g,Z);break e;case 1:I=z;var G=g.type,ee=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(fr===null||!fr.has(ee)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ee=Rf(g,I,i);Jh(g,Ee);break e}}g=g.return}while(g!==null)}lp(a)}catch(Ge){i=Ge,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function ap(){var n=Zo.current;return Zo.current=Wo,n===null?Wo:n}function Cu(){($t===0||$t===3||$t===2)&&($t=4),en===null||(Gr&268435455)===0&&(Qo&268435455)===0||gr(en,sn)}function rl(n,i){var a=yt;yt|=2;var c=ap();(en!==n||sn!==i)&&(Oi=null,Wr(n,i));do try{A0();break}catch(f){sp(n,f)}while(!0);if(Hc(),yt=a,Zo.current=c,Wt!==null)throw Error(t(261));return en=null,sn=0,$t}function A0(){for(;Wt!==null;)op(Wt)}function R0(){for(;Wt!==null&&!Ye();)op(Wt)}function op(n){var i=dp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?lp(n):Wt=i,yu.current=null}function lp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=y0(a,i,Hn),a!==null){Wt=a;return}}else{if(a=S0(a,i),a!==null){a.flags&=32767,Wt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);$t===0&&($t=5)}function Xr(n,i,a){var c=Rt,f=Qn.transition;try{Qn.transition=null,Rt=1,C0(n,i,a,c)}finally{Qn.transition=f,Rt=c}return null}function C0(n,i,a,c){do Ps();while(pr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(cv(n,g),n===en&&(Wt=en=null,sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,hp(Lt,function(){return Ps(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var M=Rt;Rt=1;var I=yt;yt|=4,yu.current=null,M0(n,a),Qf(a,n),$v(Cc),mo=!!Rc,Cc=Rc=null,n.current=a,E0(a),nt(),yt=I,Rt=M,Qn.transition=g}else n.current=a;if(el&&(el=!1,pr=n,tl=f),g=n.pendingLanes,g===0&&(fr=null),ht(a.stateNode),Pn(n,Fe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Jo)throw Jo=!1,n=Mu,Mu=null,n;return(tl&1)!==0&&n.tag!==0&&Ps(),g=n.pendingLanes,(g&1)!==0?n===Eu?Ba++:(Ba=0,Eu=n):Ba=0,cr(),null}function Ps(){if(pr!==null){var n=$d(tl),i=Qn.transition,a=Rt;try{if(Qn.transition=null,Rt=16>n?16:n,pr===null)var c=!1;else{if(n=pr,pr=null,tl=0,(yt&6)!==0)throw Error(t(331));var f=yt;for(yt|=4,ke=n.current;ke!==null;){var g=ke,M=g.child;if((ke.flags&16)!==0){var I=g.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ie=I[z];for(ke=ie;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:ka(8,_e,g)}var Se=_e.child;if(Se!==null)Se.return=_e,ke=Se;else for(;ke!==null;){_e=ke;var ve=_e.sibling,Ue=_e.return;if(qf(_e),_e===ie){ke=null;break}if(ve!==null){ve.return=Ue,ke=ve;break}ke=Ue}}}var Oe=g.alternate;if(Oe!==null){var Be=Oe.child;if(Be!==null){Oe.child=null;do{var Vt=Be.sibling;Be.sibling=null,Be=Vt}while(Be!==null)}}ke=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,ke=M;else e:for(;ke!==null;){if(g=ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ka(9,g,g.return)}var Z=g.sibling;if(Z!==null){Z.return=g.return,ke=Z;break e}ke=g.return}}var G=n.current;for(ke=G;ke!==null;){M=ke;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,ke=ee;else e:for(M=G;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ko(9,I)}}catch(Ge){jt(I,I.return,Ge)}if(I===M){ke=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,ke=Ee;break e}ke=I.return}}if(yt=f,cr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(En,n)}catch{}c=!0}return c}finally{Rt=a,Qn.transition=i}}return!1}function cp(n,i,a){i=bs(a,i),i=Af(n,i,1),n=dr(n,i,1),i=Sn(),n!==null&&(ua(n,1,i),Pn(n,i))}function jt(n,i,a){if(n.tag===3)cp(n,n,a);else for(;i!==null;){if(i.tag===3){cp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=bs(a,n),n=Rf(i,n,1),i=dr(i,n,1),n=Sn(),i!==null&&(ua(i,1,n),Pn(i,n));break}}i=i.return}}function P0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Sn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(sn&a)===a&&($t===4||$t===3&&(sn&130023424)===sn&&500>Fe()-wu?Wr(n,0):Su|=a),Pn(n,i)}function up(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var a=Sn();n=Ui(n,i),n!==null&&(ua(n,i,a),Pn(n,a))}function L0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),up(n,a)}function N0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),up(n,a)}var dp;dp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Rn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,_0(n,i,a);Rn=(n.flags&131072)!==0}else Rn=!1,kt&&(i.flags&1048576)!==0&&Gh(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yo(n,i),n=i.pendingProps;var f=xs(i,cn.current);Es(i,a),f=Jc(null,i,c,n,f,a);var g=eu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(c)?(g=!0,Po(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Xc(i),f.updater=Xo,i.stateNode=f,f._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,g,a)):(i.tag=0,kt&&g&&Fc(i),yn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=I0(c),n=si(c,n),f){case 0:i=cu(null,i,c,n,a);break e;case 1:i=kf(null,i,c,n,a);break e;case 11:i=Nf(null,i,c,n,a);break e;case 14:i=Df(null,i,c,si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),cu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),kf(n,i,c,f,a);case 3:e:{if(Of(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Qh(n,i),zo(i,c,null,a);var M=i.memoizedState;if(c=M.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=bs(Error(t(423)),i),i=zf(n,i,c,a,f);break e}else if(c!==f){f=bs(Error(t(424)),i),i=zf(n,i,c,a,f);break e}else for(jn=ar(i.stateNode.containerInfo.firstChild),Bn=i,kt=!0,ri=null,a=Kh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),c===f){i=ki(n,i,a);break e}yn(n,i,c,a)}i=i.child}return i;case 5:return tf(i),n===null&&zc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,M=f.children,Pc(c,f)?M=null:g!==null&&Pc(c,g)&&(i.flags|=32),Ff(n,i),yn(n,i,M,a),i.child;case 6:return n===null&&zc(i),null;case 13:return Bf(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ws(i,null,c,a):yn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Nf(n,i,c,f,a);case 7:return yn(n,i,i.pendingProps,a),i.child;case 8:return yn(n,i,i.pendingProps.children,a),i.child;case 12:return yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,M=f.value,Nt(Fo,c._currentValue),c._currentValue=M,g!==null)if(ii(g.value,M)){if(g.children===f.children&&!bn.current){i=ki(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){M=g.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(g.tag===1){z=Fi(-1,a&-a),z.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ie.pending=z}}g.lanes|=a,z=g.alternate,z!==null&&(z.lanes|=a),Vc(g.return,a,i),I.lanes|=a;break}z=z.next}}else if(g.tag===10)M=g.type===i.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Vc(M,a,i),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===i){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}yn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Es(i,a),f=Kn(f),c=c(f),i.flags|=1,yn(n,i,c,a),i.child;case 14:return c=i.type,f=si(c,i.pendingProps),f=si(c.type,f),Df(n,i,c,f,a);case 15:return If(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Yo(n,i),i.tag=1,An(c)?(n=!0,Po(i)):n=!1,Es(i,a),Tf(i,c,f),au(i,c,f,a),uu(null,i,c,!0,n,a);case 19:return Hf(n,i,a);case 22:return Uf(n,i,a)}throw Error(t(156,i.tag))};function hp(n,i){return re(n,i)}function D0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,c){return new D0(n,i,a,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function I0(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===ne)return 14}return 2}function vr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,c,f,g){var M=2;if(c=n,typeof n=="function")Pu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case k:return qr(a.children,f,g,i);case le:M=8,f|=8;break;case pe:return n=Jn(12,a,i,f|2),n.elementType=pe,n.lanes=g,n;case ue:return n=Jn(13,a,i,f),n.elementType=ue,n.lanes=g,n;case B:return n=Jn(19,a,i,f),n.elementType=B,n.lanes=g,n;case te:return al(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:M=10;break e;case U:M=9;break e;case ce:M=11;break e;case ne:M=14;break e;case X:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(M,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function qr(n,i,a,c){return n=Jn(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=Jn(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function Lu(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Nu(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function U0(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ls(0),this.expirationTimes=ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Du(n,i,a,c,f,g,M,I,z){return n=new U0(n,i,a,I,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Jn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(g),n}function F0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function fp(n){if(!n)return lr;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return Bh(n,a,i)}return i}function pp(n,i,a,c,f,g,M,I,z){return n=Du(a,c,!0,n,f,g,M,I,z),n.context=fp(null),a=n.current,c=Sn(),f=mr(a),g=Fi(c,f),g.callback=i??null,dr(a,g,f),n.current.lanes=f,ua(n,f,c),Pn(n,c),n}function ol(n,i,a,c){var f=i.current,g=Sn(),M=mr(f);return a=fp(a),i.context===null?i.context=a:i.pendingContext=a,i=Fi(g,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=dr(f,i,M),n!==null&&(li(n,f,M,g),Oo(n,f,M)),M}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){mp(n,i),(n=n.alternate)&&mp(n,i)}function k0(){return null}var gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}cl.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},cl.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vr(function(){ol(null,n,null,null)}),i[Li]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Qd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,n),a===0&&th(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vp(){}function O0(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ie=ll(M);g.call(ie)}}var M=pp(i,c,n,0,null,!1,!1,"",vp);return n._reactRootContainer=M,n[Li]=M.current,Ea(n.nodeType===8?n.parentNode:n),Vr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ie=ll(z);I.call(ie)}}var z=Du(n,0,!1,null,null,!1,!1,"",vp);return n._reactRootContainer=z,n[Li]=z.current,Ea(n.nodeType===8?n.parentNode:n),Vr(function(){ol(i,z,a,c)}),z}function dl(n,i,a,c,f){var g=a._reactRootContainer;if(g){var M=g;if(typeof f=="function"){var I=f;f=function(){var z=ll(M);I.call(z)}}ol(i,M,n,f)}else M=O0(a,i,n,f,c);return ll(M)}Kd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Bt(i.pendingLanes);a!==0&&(ac(i,a|1),Pn(i,Fe()),(yt&6)===0&&(Cs=Fe()+500,cr()))}break;case 13:Vr(function(){var c=Ui(n,1);if(c!==null){var f=Sn();li(c,n,1,f)}}),Iu(n,1)}},oc=function(n){if(n.tag===13){var i=Ui(n,134217728);if(i!==null){var a=Sn();li(i,n,134217728,a)}Iu(n,134217728)}},Zd=function(n){if(n.tag===13){var i=mr(n),a=Ui(n,i);if(a!==null){var c=Sn();li(a,n,i,c)}Iu(n,i)}},Qd=function(){return Rt},Jd=function(n,i){var a=Rt;try{return Rt=n,i()}finally{Rt=a}},Tt=function(n,i,a){switch(i){case"input":if(Ce(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ro(c);if(!f)throw Error(t(90));$(c),Ce(c,f)}}}break;case"textarea":he(n,a);break;case"select":i=a.value,i!=null&&Y(n,!!a.multiple,i,!1)}},St=Au,At=Vr;var z0={usingClientEntryPoint:!1,Events:[Aa,gs,Ro,He,Ze,Au]},ja={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=se(n),n===null?null:n.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||k0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{En=hl.inject(B0),vt=hl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0,Ln.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return F0(n,i,null,a)},Ln.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",f=gp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Du(n,1,!1,null,null,a,!1,c,f),n[Li]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Uu(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=se(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return Vr(n)},Ln.hydrate=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!0,a)},Ln.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",M=gp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=pp(i,null,n,1,a??null,f,!1,g,M),n[Li]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new cl(i)},Ln.render=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!1,a)},Ln.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1},Ln.unstable_batchedUpdates=Au,Ln.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,a,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Tp;function Y0(){if(Tp)return zu.exports;Tp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zu.exports=q0(),zu.exports}var bp;function $0(){if(bp)return fl;bp=1;var r=Y0();return fl.createRoot=r.createRoot,fl.hydrateRoot=r.hydrateRoot,fl}var K0=$0();const Z0=fg(K0),jd=Ae.createContext({path:"/",navigate:()=>{}});function Q0({children:r}){const[e,t]=Ae.useState(()=>window.location.pathname);Ae.useEffect(()=>{const o=()=>t(window.location.pathname);return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]);const s=Ae.useCallback((o,{replace:l=!1}={})=>{o!==window.location.pathname&&(window.history[l?"replaceState":"pushState"]({},"",o),t(o),window.scrollTo(0,0))},[]);return u.jsx(jd.Provider,{value:{path:e,navigate:s},children:r})}function J0(){return Ae.useContext(jd)}function ex(){return Ae.useContext(jd).path}function Hd({to:r,children:e,onClick:t,...s}){const{navigate:o}=J0(),l=r&&r.startsWith("/")&&!r.startsWith("//"),h=d=>{t==null||t(d),l&&(d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey||(d.preventDefault(),o(r)))};return u.jsx("a",{href:r,onClick:h,...s,children:e})}const Yi="ykshetty.design@gmail.com",Gl={name:"Yogesh Shetty",logo:"/logos/header_logo.svg",tagline:"Senior Product Designer. I practice systems thinking — looking past the apparent problem to the root cause, then designing the simplest fix the system already supports."},tx=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],Ga={askLabel:"What the client asked for",brief:"Make the button bigger.",replyLabel:"What the system revealed →",replyMain:"Can't tap with gloves on — so I used the scanner they had.",replyFoot:"Warehouse sorting — solved the system, not the screen."},Vl=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",href:"/case-studies/swiftsort",brief:"Make the button bigger.",card:"Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",cover:"/case-studies/swiftsort/images/cover.jpg",insight:"Delete touch — the scanner's already on their hand.",problem:"Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.",solution:"Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${Yi}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",href:"/case-studies/cards",brief:"Wall off the whole flow.",card:"A 2-hour banking task cut to 60 seconds of self-service.",cover:null,insight:"Gate only the destructive action.",problem:"Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.",solution:"Added authentication only where the real risk was — browsing stays free, blocking takes seconds.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~90%",label:"Calls deflected"}],mailto:`mailto:${Yi}?subject=Self-service%20cards`,seed:{x:.96,y:.33,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",brief:"Rebuild it screen by screen.",card:"Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.",cover:null,insight:"Map the system first, then design the shared frame.",problem:"A legacy desktop terminal chained managers to one location and took weeks to learn.",solution:"Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${Yi}?subject=Post-office%20portal`,seed:{x:.02,y:.61,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",brief:"Sort by document type.",card:"A complex document archive made self-service — across all three platforms.",cover:null,insight:"Organise by life event — the client's mental model.",problem:"Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.",solution:"Reorganised around life events — the way clients actually think — so they self-serve.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${Yi}?subject=Postbox`,seed:{x:.98,y:.89,r:-1.6}}],nx=[{id:"alignment",num:"01 · THE SEED",title:"Alignment",callout:{label:"◎ Find the overlap",text:"The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them."},human:["User research","Read the data","Find the real need"],ai:["Cluster the notes","Surface patterns"],desc:"A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant."},{id:"foundation",num:"02 · THE ROOTS",title:"Foundation",callout:{label:"↺ Find the real problem",text:"Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving."},human:["Problem statement","In / out of scope","Feasibility check"],ai:["Edge-case list","Flag tech limits"],desc:"Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up."},{id:"explore",num:"03 · THE SPROUT",title:"Explore",callout:{label:"⚑ Try many, keep one",text:"I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong."},human:["Explore directions","Prototype","Usability testing"],ai:["Mockup variants","First-draft copy"],desc:"First shoots test the air in every direction. The strongest one keeps growing."},{id:"scale",num:"04 · THE CANOPY",title:"Scale",callout:{label:"⧉ Build it once",text:"I turn each decision into a design system, so the team can build the rest without me in the room."},human:["Craft & visual","Design system","Component review"],ai:["Token propagation","Doc automation"],desc:"Branches spread and repeat the same pattern. The system carries it across every limb."},{id:"loop",num:"05 · THE HARVEST",title:"Loop",callout:{label:"⟳ Learn from real use",text:"Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief."},human:["Track metrics","Watch real sessions","Feed the next brief"],ai:["Error & QA sweep","Analytics → insight"],desc:"Fruit ripens and falls, dissolving back into soil — feeding the next brief."}],ix=[{id:"tokenmap",logo:"/logos/tokenmap.svg",alt:"Token Map",logoStyle:{height:20,width:126},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes.",href:"https://www.figma.com/community/plugin/1614997660400970378/token-map"},{id:"intent",logo:"/logos/intent.svg",alt:"Intent",logoStyle:{height:26,width:82},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically.",href:"https://www.figma.com/community/plugin/1610840315625561207/intent"},{id:"focal",logo:"/logos/focalai.svg",alt:"Focal AI",logoStyle:{height:18,width:99},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second.",href:"https://www.figma.com/community/plugin/1651583678533726308/focal-ai"}],wi={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"/assets/portrait.jpg",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},Md=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],rx="https://linkedin.com/in/ykshetty/details/recommendations/",Ys={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:Yi,href:`mailto:${Yi}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},Ed="ys-theme",pg=Ae.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function sx(){if(typeof window>"u")return"light";try{const r=window.localStorage.getItem(Ed);if(r==="light"||r==="dark")return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ax({children:r}){const[e,t]=Ae.useState(sx);Ae.useEffect(()=>{const h=document.documentElement;h.setAttribute("data-theme",e),h.style.colorScheme=e;try{window.localStorage.setItem(Ed,e)}catch{}},[e]),Ae.useEffect(()=>{if(!window.matchMedia)return;const h=window.matchMedia("(prefers-color-scheme: dark)"),d=p=>{let m=!1;try{m=!!window.localStorage.getItem(Ed)}catch{m=!1}m||t(p.matches?"dark":"light")};return h.addEventListener("change",d),()=>h.removeEventListener("change",d)},[]);const s=Ae.useCallback(h=>{t(d=>h==="light"||h==="dark"?h:d)},[]),o=Ae.useCallback(()=>{t(h=>h==="dark"?"light":"dark")},[]),l=Ae.useMemo(()=>({theme:e,setTheme:s,toggleTheme:o}),[e,s,o]);return u.jsx(pg.Provider,{value:l,children:r})}function mg(){return Ae.useContext(pg)}const Ap={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function gg({subpage:r=!1}){const[e,t]=Ae.useState(!1),{theme:s,toggleTheme:o}=mg(),l=Ae.useCallback(()=>t(S=>!S),[]),h=Ae.useCallback(()=>t(!1),[]),[d,p]=Ae.useState(!1);Ae.useEffect(()=>{if(r)return;let S=window.scrollY,w=null;const E=()=>{w=null;const y=window.scrollY,_=y-S;y<80?p(!1):_>4?p(!0):_<-4&&p(!1),S=y},A=()=>{w==null&&(w=requestAnimationFrame(E))};return window.addEventListener("scroll",A,{passive:!0}),()=>{window.removeEventListener("scroll",A),w&&cancelAnimationFrame(w)}},[r]);const m=S=>r?`/${S}`:S,v=u.jsxs(u.Fragment,{children:[u.jsx("img",{src:Gl.logo,alt:Gl.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),u.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Gl.name})]}),x={display:"flex",alignItems:"center",gap:10,height:20};return u.jsx("header",{className:e?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)",transform:d&&!e?"translateY(-100%)":"translateY(0)",transition:"transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:r?u.jsx(Hd,{to:"/",style:x,children:v}):u.jsx("a",{href:"#top",style:x,children:v})}),u.jsx("button",{className:"hamburger",onClick:l,"aria-label":"Menu","aria-expanded":e,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),u.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[tx.map(S=>u.jsx("a",{href:m(S.href),onClick:h,className:"nav-link",style:Ap,children:S.label},S.href)),u.jsx("a",{href:`mailto:${Yi}`,onClick:h,className:"cta-pill",style:{...Ap,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),u.jsx("button",{type:"button",onClick:o,title:s==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":s==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:s==="dark"?u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"12",r:"4.2"}),u.jsx("path",{d:"M12 2v2.2M12 19.8V22M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2.2M19.8 12H22M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"})]}):u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:u.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"})})})]})]})})}const ox=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function lx(){const[r,e]=Ae.useState(0),t=Ae.useRef([]),s=Ae.useRef(null),o=Ae.useCallback(()=>{t.current.forEach(h=>clearTimeout(h)),t.current=[],s.current&&(cancelAnimationFrame(s.current),s.current=null)},[]),l=Ae.useCallback(()=>{o(),e(0),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>{ox.forEach(([h,d])=>{t.current.push(setTimeout(()=>e(h),d))})})})},[o]);return Ae.useEffect(()=>(l(),o),[l,o]),{step:r,replay:l}}function cx(r,e){Ae.useEffect(()=>{const t=r.current,s=e.current,o=s?Array.from(s.querySelectorAll("[data-drift]")):[],l=_=>Math.max(0,Math.min(1,_)),h=()=>{const _=window.innerHeight||1,N=l(window.scrollY/_),C=1-N*.28,D=1-N*.65;t&&(t.style.transform=`translateX(-50%) scale(${C.toFixed(3)})`,t.style.opacity=D.toFixed(3))};let d=1,p=1,m=null,v=!1,x=window.scrollY,S=performance.now();const w=()=>{d+=(p-d)*.12,p+=(1-p)*.04,o.forEach(_=>{_.getAnimations&&_.getAnimations().forEach(N=>{N.playbackRate=d})}),Math.abs(d-1)>.02||Math.abs(p-1)>.02?m=requestAnimationFrame(w):(d=1,p=1,o.forEach(_=>{_.getAnimations&&_.getAnimations().forEach(N=>{N.playbackRate=1})}),v=!1)},E=()=>{v||!o.length||(v=!0,m=requestAnimationFrame(w))},A=()=>{const _=performance.now(),N=Math.abs(window.scrollY-x),C=Math.max(16,_-S),D=N/C;p=Math.min(9,1+D*20),x=window.scrollY,S=_,E()},y=()=>{h(),A()};return window.addEventListener("scroll",y,{passive:!0}),h(),()=>{window.removeEventListener("scroll",y),m&&cancelAnimationFrame(m)}},[r,e])}const ux=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],Rp=()=>u.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]});function dx(){const{step:r,replay:e}=lx(),t=Ae.useRef(null),s=Ae.useRef(null),o=Ae.useRef(null);return cx(t,s),u.jsx("div",{style:{position:"relative",height:"200vh"},children:u.jsxs("section",{className:"hero-section","data-hero-step":r,style:{position:"sticky",top:0,zIndex:1,height:"100vh",overflow:"hidden",background:"var(--bg-page)"},children:[u.jsx("div",{ref:s,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:ux.map((l,h)=>u.jsx("div",{"data-drift":"",style:{position:"absolute",width:l.w,height:l.w,maxWidth:l.maxW,maxHeight:l.maxW,top:l.top,bottom:l.bottom,left:l.left,right:l.right,borderRadius:"50%",background:`radial-gradient(circle, ${l.color}, transparent 70%)`,filter:`blur(${l.blur}px)`,animation:l.anim,willChange:"transform"}},h))}),u.jsxs("div",{ref:t,className:"hero-cluster",children:[u.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:Ga.askLabel}),u.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[u.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:u.jsx(Rp,{})}),u.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:u.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:Ga.brief})})]}),u.jsxs("div",{style:{position:"relative",minHeight:72},children:[u.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),u.jsx(Rp,{})]}),u.jsxs("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12},children:Ga.replyLabel}),u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(21px,2.9vw,32px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em"},children:Ga.replyMain}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.5,color:"var(--text-muted)",marginTop:12},children:Ga.replyFoot})]})]}),u.jsxs("div",{ref:o,className:"hero-post",style:{marginTop:"clamp(80px,12vw,128px)"},children:[u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.65,color:"var(--text-body)",margin:"0 0 24px",textAlign:"center"},children:Gl.tagline}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:22,alignItems:"center",fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,justifyContent:"center"},children:[u.jsx("a",{href:"#work",className:"text-link text-link--primary",style:{paddingBottom:3},children:"Case studies ↓"}),u.jsx("a",{href:`mailto:${Yi}`,className:"text-link text-link--muted",children:"Say hello"}),u.jsx("span",{onClick:e,role:"button",tabIndex:0,onKeyDown:l=>(l.key==="Enter"||l.key===" ")&&e(),className:"replay-btn",style:{cursor:"pointer",userSelect:"none",fontSize:12,color:"var(--text-muted)"},children:"↻ replay"})]})]})]})]})})}const hx="#7C5CFC",Cp="0 2px 12px -4px rgba(0,0,0,.08)",Pp=`0 0 0 1px ${hx}, 0 8px 24px -6px rgba(124,92,252,.18)`,fx=r=>Math.max(0,Math.min(1,r));function px(r,e){const{boardRef:t,scatterRef:s,targetRef:o,emptyRef:l,detailRef:h}=r,[d,p]=Ae.useState(null),m=Ae.useRef(null),v=Ae.useRef(()=>{}),x=Ae.useRef(()=>{}),S=Ae.useRef([]),w=Ae.useMemo(()=>e.map((_,N)=>C=>{S.current[N]=C}),[e]);Ae.useEffect(()=>{const _=t.current,N=s.current,C=o.current;if(!_||!N||!C)return;const D=S.current;if(D.length<e.length||D.some(Ce=>!Ce))return;const V=e.map(Ce=>({id:Ce.id,seed:Ce.seed}));let O=null,k,le,pe=-1,b=.62,U=null,ce=!1,ue=!1,B=!1,ne=null,X=!1,te=!1;const j=90,J=(Ce,me,R,T,Y)=>{const fe=(Ce+R)/2,de=Math.min(me,T)-j,he=1-Y;return[he*he*Ce+2*he*Y*fe+Y*Y*R,he*he*me+2*he*Y*de+Y*Y*T]},W=()=>l.current,L=()=>h.current,H=()=>{const Ce=N.getBoundingClientRect(),me=_.getBoundingClientRect(),R=Math.min(276,Math.max(170,(Ce.width||300)-80)),T=Ce.left-me.left+14,Y=Ce.right-me.left-14,fe=Ce.top-me.top+44,de=Ce.bottom-me.top-20;O={minX:T,maxX:Y-R-14,minY:fe,maxY:Math.max(fe,de-150)};const he=Math.max(0,O.maxX-O.minX);V.forEach((et,rt)=>{D[rt].style.width=`${R}px`});const De=V.map((et,rt)=>D[rt].offsetHeight),ye=De.reduce((et,rt)=>et+rt,0),Ne=V.length>1?Math.min(16,Math.max(24,(de-fe-ye)/(V.length-1))):0;let je=fe;V.forEach((et,rt)=>{et.sx=O.minX+et.seed.x*he,et.sy=je,et.sr=et.seed.r,je+=De[rt]+Ne,et.x===void 0&&(et.x=et.sx,et.y=et.sy,et.r=et.sr)});const it=C.getBoundingClientRect();b=.62;const xe=R*b;k=it.right-me.left-xe-30,le=it.top-me.top+42,pe=-1},we=(Ce,me)=>{const R=C.getBoundingClientRect();return Ce>R.left-28&&Ce<R.right+28&&me>R.top-28&&me<R.bottom+28},q=()=>{if(ue){ce=!1;return}let Ce=!1;V.forEach((me,R)=>{const T=D[R];if(!T)return;let Y,fe,de,he;const De=R===0&&ne!==null&&!X&&!me.drag&&k!==void 0;if(me.drag&&me.dragX!==void 0)Y=me.dragX,fe=me.dragY,de=B?-1:0,he=B?1.04:1,Ce=!0;else if(De){const[Ne,je]=J(me.sx,me.sy,k,le,ne);Y=Ne,fe=je,de=me.sr+(pe-me.sr)*ne,he=1+(b-1)*ne}else me.id===m.current&&k!==void 0?(Y=k,fe=le,de=pe,he=b):(Y=me.sx,fe=me.sy,de=me.sr,he=1);me.scale===void 0&&(me.scale=1);const ye=me.drag?.55:De?.4:me.id===m.current?.2:.16;me.x+=(Y-me.x)*ye,me.y+=(fe-me.y)*ye,me.r+=(de-me.r)*ye,me.scale+=(he-me.scale)*ye,Math.abs(Y-me.x)+Math.abs(fe-me.y)+Math.abs(de-me.r)+Math.abs(he-me.scale)>.05&&(Ce=!0),T.style.transformOrigin="top left",T.style.transform=`translate(${me.x}px,${me.y}px) rotate(${me.r}deg) scale(${me.scale})`}),Ce?U=requestAnimationFrame(q):ce=!1},ae=()=>{ce||ue||(ce=!0,U=requestAnimationFrame(q))},ge=Ce=>{X=!0,m.current=Ce,p(Ce),V.forEach((me,R)=>{const T=D[R];if(!T)return;const Y=me.id===Ce;T.style.boxShadow=Y?Pp:Cp,T.style.zIndex=Y?"9":"5",me.dragX=void 0}),L()&&(L().style.transition="opacity .35s",L().style.opacity=Ce?"1":"0",L().style.pointerEvents=Ce?"auto":"none"),N.style.overflow=Ce?"visible":"hidden",W()&&(W().style.opacity=Ce?"0":"1"),ae()};v.current=ge;const Pe=Ce=>{if(X||V[0].drag)return;const me=fx(Ce);ne=me;const R=V[0].id;if(me>.02&&m.current!==R){m.current=R,p(R);const T=D[0];T&&(T.style.boxShadow=Pp,T.style.zIndex="9"),L()&&(L().style.transition="opacity .4s ease",L().style.pointerEvents="auto"),N.style.overflow="visible",W()&&(W().style.opacity="0")}else if(me<=.02&&te){m.current=null,p(null);const T=D[0];T&&(T.style.boxShadow=Cp,T.style.zIndex="5"),L()&&(L().style.pointerEvents="none"),W()&&(W().style.opacity="1")}te=me>.02,L()&&(L().style.opacity=me>.9?"1":"0"),ae()};x.current=Pe;const Re=[],Te=(Ce,me)=>{const R=D[me];let T=0,Y=0,fe=!1;R.style.touchAction="none";const de=ye=>{ye.preventDefault(),Ce.drag=!0,fe=!1,T=ye.clientX,Y=ye.clientY;const Ne=_.getBoundingClientRect();Ce.grabDX=Ce.x-(ye.clientX-Ne.left),Ce.grabDY=Ce.y-(ye.clientY-Ne.top),R.setPointerCapture(ye.pointerId),R.style.cursor="grabbing",R.style.zIndex="50",N.style.zIndex="10",N.style.overflow="visible",ae()},he=ye=>{if(!Ce.drag)return;Math.abs(ye.clientX-T)+Math.abs(ye.clientY-Y)>6&&(fe=!0);const Ne=_.getBoundingClientRect();Ce.dragX=ye.clientX-Ne.left+Ce.grabDX,Ce.dragY=ye.clientY-Ne.top+Ce.grabDY,ae();const je=we(ye.clientX,ye.clientY);if(B=je,C.classList.toggle("drop-target-active",je),je){const it=C.querySelector(".drop-label");it&&(it.textContent=m.current?"Drop to swap":"Release to open")}},De=ye=>{if(!Ce.drag)return;Ce.drag=!1,R.style.cursor="grab",R.style.zIndex="5",N.style.zIndex="";const Ne=B;B=!1,C.classList.remove("drop-target-active"),Ne&&(C.classList.add("drop-flash"),setTimeout(()=>C.classList.remove("drop-flash"),300)),!fe||Ne?ge(Ce.id):(m.current===Ce.id&&ge(null),Ce.dragX=void 0),ae()};R.addEventListener("pointerdown",de),R.addEventListener("pointermove",he),R.addEventListener("pointerup",De),R.addEventListener("pointercancel",De),R.addEventListener("lostpointercapture",De),Re.push(()=>{R.removeEventListener("pointerdown",de),R.removeEventListener("pointermove",he),R.removeEventListener("pointerup",De),R.removeEventListener("pointercancel",De),R.removeEventListener("lostpointercapture",De)})};H(),L()&&(L().style.opacity="0",L().style.pointerEvents="none"),V.forEach((Ce,me)=>Te(Ce,me)),ae();const tt=()=>H();window.addEventListener("resize",tt,{passive:!0});let $e=null,$=null,Pt=!1,We=null;const qe=V[0],Xe=()=>{if(ne!==null||m.current||qe.drag||Pt)return;Pt=!0;const Ce=qe.sx,me=qe.sy,R=qe.sr;qe.sx=Ce+46,qe.sy=me-22,qe.sr=R+1.5;const T=D[0];T&&T.animate&&T.animate([{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"},{boxShadow:"0 8px 24px -4px rgba(124,92,252,.18)"},{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"}],{duration:1200,easing:"ease-in-out"}),ae(),setTimeout(()=>{m.current||qe.drag||(qe.sx=Ce,qe.sy=me,qe.sr=R,ae()),Pt=!1},760)};return typeof IntersectionObserver<"u"&&(We=new IntersectionObserver(Ce=>{Ce.forEach(me=>{me.isIntersecting?$e||($=setTimeout(Xe,600),$e=setInterval(Xe,3200)):$e&&(clearInterval($e),$e=null,$&&(clearTimeout($),$=null))})},{threshold:.35}),We.observe(_)),()=>{ue=!0,U&&cancelAnimationFrame(U),window.removeEventListener("resize",tt),Re.forEach(Ce=>Ce()),$e&&clearInterval($e),$&&clearTimeout($),We&&We.disconnect(),v.current=()=>{}}},[e]);const E=Ae.useCallback(()=>v.current(null),[]),A=Ae.useCallback(_=>v.current(_),[]),y=Ae.useCallback(_=>x.current(_),[]);return{active:d,setCardRefs:w,closeActive:E,activateCard:A,setDropProgress:y}}const pl={fontFamily:"var(--font-mono)"};function mx(){const[r,e]=Ae.useState(null);return u.jsx("div",{className:"mobile-cards",style:{display:"none",flexDirection:"column",gap:12},children:Vl.map(t=>{const s=r===t.id;return u.jsxs("div",{className:"lift-hover",onClick:()=>e(o=>o===t.id?null:t.id),style:{borderRadius:14,overflow:"hidden",background:"var(--bg-surface)",cursor:"pointer",boxShadow:"var(--shadow-card)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 20px"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{...pl,fontSize:10,letterSpacing:"0.04em",color:"var(--text-secondary)",marginBottom:6},children:t.meta}),u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:500,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--text-primary)"},children:t.card})]}),u.jsx("div",{style:{fontSize:22,color:"var(--text-tertiary)",flex:"none",marginLeft:16},children:s?"−":"+"})]}),s&&u.jsx("div",{style:{padding:"0 20px 22px",borderTop:"1px solid var(--border-subtle)"},children:u.jsxs("div",{style:{paddingTop:18},children:[u.jsx("div",{style:{...pl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--text-muted)",margin:"0 0 5px"},children:"The problem"}),u.jsx("p",{style:{fontFamily:"var(--font-display)",fontSize:17,fontWeight:400,lineHeight:1.3,color:"var(--text-secondary)",margin:0},children:t.problem}),u.jsx("div",{style:{...pl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--accent)",margin:"18px 0 5px"},children:"How I solved it"}),u.jsx("p",{style:{fontFamily:"var(--font-display)",fontSize:20,fontWeight:600,lineHeight:1.2,letterSpacing:"-0.02em",color:"var(--text-primary)",margin:0},children:t.solution}),u.jsxs("div",{className:"case-cover case-cover--placeholder",style:{position:"relative",overflow:"hidden",margin:"16px 0 0"},"aria-hidden":"true",children:[u.jsx("span",{children:"Cover image"}),t.cover&&u.jsx("img",{src:t.cover,alt:"",onError:o=>{o.currentTarget.style.display="none"},style:{position:"absolute",inset:-1,objectFit:"cover"}},t.cover)]}),u.jsx("div",{style:{display:"flex",gap:32,margin:"20px 0 18px"},children:t.stats.map(o=>u.jsxs("div",{children:[u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(22px,3vw,30px)",fontWeight:600,color:"var(--accent)"},children:o.value}),u.jsx("div",{style:{...pl,fontSize:10,color:"var(--text-secondary)",marginTop:6},children:o.label})]},o.label))}),u.jsx("a",{href:t.mailto,onClick:o=>o.stopPropagation(),style:{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,color:"var(--accent)"},children:"Request full case study →"})]})})]},t.id)})})}const Td={fontFamily:"var(--font-mono)"},Lp={...Td,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:7},gx={fontFamily:"var(--font-display)",fontWeight:400,lineHeight:1.3,color:"var(--text-secondary)",margin:0,maxWidth:"calc(100% - 170px)"};function vx({study:r}){return r?u.jsxs("div",{"data-detail":r.id,children:[u.jsx("div",{style:{...Td,fontSize:9,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:20},children:r.metaLong}),u.jsx("div",{style:{...Lp,color:"var(--text-muted)"},children:"The problem"}),u.jsx("p",{style:gx,children:r.problem}),u.jsxs("a",{href:r.href||r.mailto,className:"case-cover-hero",style:{margin:"18px 0 0"},"aria-label":r.href?"Read the full case study":"Request the case study",children:[r.cover&&u.jsxs(u.Fragment,{children:[u.jsx("img",{src:r.cover,alt:"",onError:e=>{e.currentTarget.style.display="none"}},r.cover),u.jsx("img",{className:"case-cover-hero__blurimg",src:r.cover,alt:"","aria-hidden":"true",onError:e=>{e.currentTarget.style.display="none"}})]}),u.jsxs("div",{className:"case-cover-hero__panel",children:[u.jsx("div",{className:"case-cover-hero__kicker",children:"How I solved it"}),u.jsx("p",{className:"case-cover-hero__solution",children:r.solution})]})]}),u.jsx("div",{style:{...Lp,color:"var(--text-muted)",margin:"20px 0 10px"},children:"Results"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:24,flexWrap:"wrap"},children:[u.jsx("div",{style:{display:"flex",gap:44},children:r.stats.map(e=>u.jsxs("div",{children:[u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(24px,3vw,34px)",fontWeight:600,color:"var(--text-primary)"},children:e.value}),u.jsx("div",{style:{...Td,fontSize:10,color:"var(--text-secondary)",marginTop:8},children:e.label})]},e.label))}),u.jsx("a",{href:r.href||r.mailto,className:"cta-pill",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 20px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,whiteSpace:"nowrap"},children:r.href?"Read case study →":"Request case study →"})]})]}):null}const Va={fontFamily:"var(--font-mono)"},xx=[{color:"var(--accent)",opacity:.5},{color:"var(--dot-amber)",opacity:.4},{color:"var(--teal)",opacity:.4}],_x={position:"absolute",left:0,top:0,width:276,cursor:"grab",userSelect:"none",willChange:"transform",zIndex:5,background:"var(--bg-surface)",boxShadow:"var(--shadow-float)",padding:"16px 18px 18px",borderRadius:14};function yx(){const r=Ae.useRef(null),e=Ae.useRef(null),t=Ae.useRef(null),s=Ae.useRef(null),o=Ae.useRef(null),{active:l,setCardRefs:h,closeActive:d,setDropProgress:p}=px({boardRef:r,scatterRef:e,targetRef:t,emptyRef:s,detailRef:o},Vl),m=Vl.find(v=>v.id===l)||null;return Ae.useEffect(()=>{const v=r.current;if(!v)return;const x=A=>Math.max(0,Math.min(1,A));let S=null;const w=()=>{S=null;const A=v.getBoundingClientRect(),y=window.innerHeight||1,_=x((y-A.top)/(y*.85)),N=.34,D=x((_-N)/(.58-N));p(D)},E=()=>{S==null&&(S=requestAnimationFrame(w))};return window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E),w(),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E),S&&cancelAnimationFrame(S)}},[p]),u.jsx("section",{id:"work",style:{position:"relative",zIndex:10,marginTop:"-100vh"},children:u.jsxs("div",{style:{maxWidth:1164,margin:"0 auto",padding:"0 clamp(22px,5vw,44px) 81px"},children:[u.jsx("div",{className:"work-mobile-title",style:{...Va,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:16},children:"Case studies"}),u.jsx(mx,{}),u.jsxs("div",{className:"work-panel","data-reveal":"",style:{borderRadius:"28px 28px 18px 18px",overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-panel)",transitionDelay:"0.1s"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)"},children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[u.jsx("div",{style:{display:"flex",gap:5},children:xx.map((v,x)=>u.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:v.color,opacity:v.opacity}},x))}),u.jsx("div",{style:{...Va,fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-tertiary)"},children:"Case studies"})]})}),u.jsxs("div",{ref:r,className:"board",style:{position:"relative",touchAction:"none",display:"grid",gridTemplateColumns:"minmax(250px,0.72fr) minmax(0,1.28fr)",minHeight:580,overflow:"hidden"},children:[u.jsxs("div",{ref:e,className:"scatter",style:{position:"relative",padding:"20px 16px",borderRight:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)",overflow:"hidden"},children:[u.jsx("div",{style:{...Va,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"Drop or click a card to the right panel"}),Vl.map((v,x)=>u.jsxs("div",{ref:h[x],"data-card":v.id,className:`case-card${l===v.id?"":" case-card-float"}`,style:{..._x,animationDelay:`${x*.6}s`},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,...Va,fontSize:10,color:"var(--text-secondary)"},children:[u.jsx("span",{children:v.meta}),u.jsx("svg",{className:"case-card-grip",width:"10",height:"14",viewBox:"0 0 10 14","aria-hidden":"true",children:u.jsxs("g",{fill:"currentColor",children:[u.jsx("circle",{cx:"2",cy:"2",r:"1.25"}),u.jsx("circle",{cx:"8",cy:"2",r:"1.25"}),u.jsx("circle",{cx:"2",cy:"7",r:"1.25"}),u.jsx("circle",{cx:"8",cy:"7",r:"1.25"}),u.jsx("circle",{cx:"2",cy:"12",r:"1.25"}),u.jsx("circle",{cx:"8",cy:"12",r:"1.25"})]})})]}),u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:15,fontWeight:400,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--text-primary)"},children:v.card})]},v.id))]}),u.jsxs("div",{ref:t,style:{position:"relative",padding:"26px 32px 32px",background:"var(--bg-surface)",transition:"background .25s"},children:[u.jsxs("div",{ref:s,style:{position:"absolute",inset:"30px 32px 32px",border:"1px dashed var(--border-dashed)",borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,transition:"opacity .3s",pointerEvents:"none",opacity:l?0:1},children:[u.jsx("div",{style:{fontSize:28,lineHeight:1,color:"var(--border-fade)",fontWeight:300},children:"↳"}),u.jsxs("div",{style:{textAlign:"center"},children:[u.jsx("div",{className:"drop-desktop",style:{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Drop a case to read it"}),u.jsx("div",{className:"drop-mobile",style:{display:"none",fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Tap a card to open"}),u.jsx("div",{style:{...Va,fontSize:10,color:"var(--text-muted)",marginTop:6},children:"the case opens"})]})]}),u.jsx("div",{ref:o,style:{position:"relative",paddingTop:0},children:u.jsx(vx,{study:m})}),u.jsx("div",{className:"drop-ring","aria-hidden":"true"}),u.jsx("div",{className:"drop-label","aria-hidden":"true"}),u.jsx("button",{type:"button",onClick:d,"aria-label":"Close case study",className:"replay-btn",style:{position:"absolute",top:22,right:28,zIndex:12,width:28,height:28,background:"var(--bg-hover)",color:"var(--text-secondary)",border:"none",borderRadius:"50%",display:"grid",placeItems:"center",cursor:"pointer",opacity:l?1:0,pointerEvents:l?"auto":"none",fontSize:14,transition:"opacity .25s"},children:"×"})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="161",Sx=0,Np=1,wx=2,vg=1,Mx=2,Vi=3,Lr=0,Fn=1,Wi=2,Ar=0,Qs=1,Ja=2,Dp=3,Ip=4,Ex=5,es=100,Tx=101,bx=102,Up=103,Fp=104,Ax=200,Rx=201,Cx=202,Px=203,bd=204,Ad=205,Lx=206,Nx=207,Dx=208,Ix=209,Ux=210,Fx=211,kx=212,Ox=213,zx=214,Bx=0,jx=1,Hx=2,ql=3,Gx=4,Vx=5,Wx=6,Xx=7,xg=0,qx=1,Yx=2,Rr=0,$x=1,Kx=2,Zx=3,_g=4,Qx=5,Jx=6,yg=300,na=301,ia=302,Rd=303,Cd=304,Jl=306,Pd=1e3,fi=1001,Ld=1002,Mn=1003,kp=1004,Wa=1005,In=1006,Hu=1007,ns=1008,Cr=1009,e_=1010,t_=1011,Vd=1012,Sg=1013,br=1014,Xi=1015,eo=1016,wg=1017,Mg=1018,is=1020,n_=1021,pi=1023,i_=1024,r_=1025,rs=1026,ra=1027,s_=1028,Eg=1029,a_=1030,Tg=1031,bg=1033,Gu=33776,Vu=33777,Wu=33778,Xu=33779,Op=35840,zp=35841,Bp=35842,jp=35843,Ag=36196,Hp=37492,Gp=37496,Vp=37808,Wp=37809,Xp=37810,qp=37811,Yp=37812,$p=37813,Kp=37814,Zp=37815,Qp=37816,Jp=37817,em=37818,tm=37819,nm=37820,im=37821,qu=36492,rm=36494,sm=36495,o_=36283,am=36284,om=36285,lm=36286,Rg=3e3,ss=3001,l_=3200,c_=3201,u_=0,d_=1,ni="",an="srgb",Zi="srgb-linear",Wd="display-p3",ec="display-p3-linear",Yl="linear",Ut="srgb",$l="rec709",Kl="p3",Ls=7680,cm=519,h_=512,f_=513,p_=514,Cg=515,m_=516,g_=517,v_=518,x_=519,um=35044,dm="300 es",Nd=1035,$i=2e3,Zl=2001;class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,Dd=180/Math.PI;function to(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function __(r,e){return(r%e+e)%e}function $u(r,e,t){return(1-t)*r+t*e}function hm(r){return(r&r-1)===0&&r!==0}function Id(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,h=this.y-e.y;return this.x=l*s-h*o+e.x,this.y=l*o+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,s,o,l,h,d,p,m){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m)}set(e,t,s,o,l,h,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],v=s[4],x=s[7],S=s[2],w=s[5],E=s[8],A=o[0],y=o[3],_=o[6],N=o[1],C=o[4],D=o[7],V=o[2],O=o[5],k=o[8];return l[0]=h*A+d*N+p*V,l[3]=h*y+d*C+p*O,l[6]=h*_+d*D+p*k,l[1]=m*A+v*N+x*V,l[4]=m*y+v*C+x*O,l[7]=m*_+v*D+x*k,l[2]=S*A+w*N+E*V,l[5]=S*y+w*C+E*O,l[8]=S*_+w*D+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return t*h*v-t*d*m-s*l*v+s*d*p+o*l*m-o*h*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=v*h-d*m,S=d*p-v*l,w=m*l-h*p,E=t*x+s*S+o*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(o*m-v*s)*A,e[2]=(d*s-o*h)*A,e[3]=S*A,e[4]=(v*t-o*p)*A,e[5]=(o*l-d*t)*A,e[6]=w*A,e[7]=(s*p-m*t)*A,e[8]=(h*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,h,d){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-o*m,o*p,-o*(-m*h+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new mt;function Pg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y_(){const r=Ql("canvas");return r.style.display="block",r}const fm={};function Js(r){r in fm||(fm[r]=!0,console.warn(r))}const pm=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mm=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ml={[Zi]:{transfer:Yl,primaries:$l,toReference:r=>r,fromReference:r=>r},[an]:{transfer:Ut,primaries:$l,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ec]:{transfer:Yl,primaries:Kl,toReference:r=>r.applyMatrix3(mm),fromReference:r=>r.applyMatrix3(pm)},[Wd]:{transfer:Ut,primaries:Kl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(mm),fromReference:r=>r.applyMatrix3(pm).convertLinearToSRGB()}},S_=new Set([Zi,ec]),Ct={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!S_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=ml[e].toReference,o=ml[t].fromReference;return o(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ml[r].primaries},getTransfer:function(r){return r===ni?Yl:ml[r].transfer}};function ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ns;class Lg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=Ql("canvas")),Ns.width=e.width,Ns.height=e.height;const s=Ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=ea(l[h]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ea(t[s]/255)*255):t[s]=ea(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w_=0;class Ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,d=o.length;h<d;h++)o[h].isDataTexture?l.push(Qu(o[h].image)):l.push(Qu(o[h]))}else l=Qu(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Qu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M_=0;class kn extends aa{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,s=fi,o=fi,l=In,h=ns,d=pi,p=Cr,m=kn.DEFAULT_ANISOTROPY,v=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=to(),this.name="",this.source=new Ng(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===ss?an:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?ss:Rg}set encoding(e){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?an:ni}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=yg;kn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,s=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,h=e.elements;return this.x=h[0]*t+h[4]*s+h[8]*o+h[12]*l,this.y=h[1]*t+h[5]*s+h[9]*o+h[13]*l,this.z=h[2]*t+h[6]*s+h[10]*o+h[14]*l,this.w=h[3]*t+h[7]*s+h[11]*o+h[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,m=p[0],v=p[4],x=p[8],S=p[1],w=p[5],E=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(v-S)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+w+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(m+1)/2,D=(w+1)/2,V=(_+1)/2,O=(v+S)/4,k=(x+A)/4,le=(E+y)/4;return C>D&&C>V?C<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(C),o=O/s,l=k/s):D>V?D<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),s=O/o,l=le/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=k/l,o=le/l),this.set(s,o,l,t),this}let N=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(S-v)*(S-v));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(x-A)/N,this.z=(S-v)/N,this.w=Math.acos((m+w+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends aa{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const o={width:e,height:t,depth:1};s.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ss?an:ni),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new kn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ng(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends E_{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Dg extends kn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class T_ extends kn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,h,d){let p=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];const S=l[h+0],w=l[h+1],E=l[h+2],A=l[h+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(d===1){e[t+0]=S,e[t+1]=w,e[t+2]=E,e[t+3]=A;return}if(x!==A||p!==S||m!==w||v!==E){let y=1-d;const _=p*S+m*w+v*E+x*A,N=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const V=Math.sqrt(C),O=Math.atan2(V,_*N);y=Math.sin(y*O)/V,d=Math.sin(d*O)/V}const D=d*N;if(p=p*y+S*D,m=m*y+w*D,v=v*y+E*D,x=x*y+A*D,y===1-d){const V=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=V,m*=V,v*=V,x*=V}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,h){const d=s[o],p=s[o+1],m=s[o+2],v=s[o+3],x=l[h],S=l[h+1],w=l[h+2],E=l[h+3];return e[t]=d*E+v*x+p*w-m*S,e[t+1]=p*E+v*S+m*x-d*w,e[t+2]=m*E+v*w+d*S-p*x,e[t+3]=v*E-d*x-p*S-m*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(o/2),x=d(l/2),S=p(s/2),w=p(o/2),E=p(l/2);switch(h){case"XYZ":this._x=S*v*x+m*w*E,this._y=m*w*x-S*v*E,this._z=m*v*E+S*w*x,this._w=m*v*x-S*w*E;break;case"YXZ":this._x=S*v*x+m*w*E,this._y=m*w*x-S*v*E,this._z=m*v*E-S*w*x,this._w=m*v*x+S*w*E;break;case"ZXY":this._x=S*v*x-m*w*E,this._y=m*w*x+S*v*E,this._z=m*v*E+S*w*x,this._w=m*v*x-S*w*E;break;case"ZYX":this._x=S*v*x-m*w*E,this._y=m*w*x+S*v*E,this._z=m*v*E-S*w*x,this._w=m*v*x+S*w*E;break;case"YZX":this._x=S*v*x+m*w*E,this._y=m*w*x+S*v*E,this._z=m*v*E-S*w*x,this._w=m*v*x-S*w*E;break;case"XZY":this._x=S*v*x-m*w*E,this._y=m*w*x-S*v*E,this._z=m*v*E+S*w*x,this._w=m*v*x+S*w*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],h=t[1],d=t[5],p=t[9],m=t[2],v=t[6],x=t[10],S=s+d+x;if(S>0){const w=.5/Math.sqrt(S+1);this._w=.25/w,this._x=(v-p)*w,this._y=(l-m)*w,this._z=(h-o)*w}else if(s>d&&s>x){const w=2*Math.sqrt(1+s-d-x);this._w=(v-p)/w,this._x=.25*w,this._y=(o+h)/w,this._z=(l+m)/w}else if(d>x){const w=2*Math.sqrt(1+d-s-x);this._w=(l-m)/w,this._x=(o+h)/w,this._y=.25*w,this._z=(p+v)/w}else{const w=2*Math.sqrt(1+x-s-d);this._w=(h-o)/w,this._x=(l+m)/w,this._y=(p+v)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,h=e._w,d=t._x,p=t._y,m=t._z,v=t._w;return this._x=s*v+h*d+o*m-l*p,this._y=o*v+h*p+l*d-s*m,this._z=l*v+h*m+s*p-o*d,this._w=h*v-s*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,h=this._w;let d=h*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const w=1-t;return this._w=w*h+t*this._w,this._x=w*s+t*this._x,this._y=w*o+t*this._y,this._z=w*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),x=Math.sin((1-t)*v)/m,S=Math.sin(t*v)/m;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=o*x+this._y*S,this._z=l*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,h=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*h,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*h,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*h,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*o-d*s),v=2*(d*t-l*o),x=2*(l*s-h*t);return this.x=t+p*m+h*x-d*v,this.y=s+p*v+d*m-l*x,this.z=o+p*x+l*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,h=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*h-s*p,this.z=s*d-o*h,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new K,gm=new oa;class no{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=l.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(l,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gl.copy(s.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const o=e.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),vl.subVectors(this.max,qa),Ds.subVectors(e.a,qa),Is.subVectors(e.b,qa),Us.subVectors(e.c,qa),_r.subVectors(Is,Ds),yr.subVectors(Us,Is),Yr.subVectors(Ds,Us);let t=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-Yr.z,Yr.y,_r.z,0,-_r.x,yr.z,0,-yr.x,Yr.z,0,-Yr.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-Yr.y,Yr.x,0];return!ed(t,Ds,Is,Us,vl)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,Ds,Is,Us,vl))?!1:(xl.crossVectors(_r,yr),t=[xl.x,xl.y,xl.z],ed(t,Ds,Is,Us,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new K,new K,new K,new K,new K,new K,new K,new K],ci=new K,gl=new no,Ds=new K,Is=new K,Us=new K,_r=new K,yr=new K,Yr=new K,qa=new K,vl=new K,xl=new K,$r=new K;function ed(r,e,t,s,o){for(let l=0,h=r.length-3;l<=h;l+=3){$r.fromArray(r,l);const d=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),p=e.dot($r),m=t.dot($r),v=s.dot($r);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const b_=new no,Ya=new K,td=new K;class tc{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):b_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,h=e.length;l<h;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ya,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(td)),this.expandByPoint(Ya.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new K,nd=new K,_l=new K,Sr=new K,id=new K,yl=new K,rd=new K;class Ig{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){nd.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(nd);const l=e.distanceTo(t)*.5,h=-this.direction.dot(_l),d=Sr.dot(this.direction),p=-Sr.dot(_l),m=Sr.lengthSq(),v=Math.abs(1-h*h);let x,S,w,E;if(v>0)if(x=h*p-d,S=h*d-p,E=l*v,x>=0)if(S>=-E)if(S<=E){const A=1/v;x*=A,S*=A,w=x*(x+h*S+2*d)+S*(h*x+S+2*p)+m}else S=l,x=Math.max(0,-(h*S+d)),w=-x*x+S*(S+2*p)+m;else S=-l,x=Math.max(0,-(h*S+d)),w=-x*x+S*(S+2*p)+m;else S<=-E?(x=Math.max(0,-(-h*l+d)),S=x>0?-l:Math.min(Math.max(-l,-p),l),w=-x*x+S*(S+2*p)+m):S<=E?(x=0,S=Math.min(Math.max(-l,-p),l),w=S*(S+2*p)+m):(x=Math.max(0,-(h*l+d)),S=x>0?l:Math.min(Math.max(-l,-p),l),w=-x*x+S*(S+2*p)+m);else S=h>0?-l:l,x=Math.max(0,-(h*S+d)),w=-x*x+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(nd).addScaledVector(_l,S),w}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const s=Bi.dot(this.direction),o=Bi.dot(Bi)-s*s,l=e.radius*e.radius;if(o>l)return null;const h=Math.sqrt(l-o),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),v>=0?(l=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||l>o||((l>s||isNaN(s))&&(s=l),(h<o||isNaN(o))&&(o=h),x>=0?(d=(e.min.z-S.z)*x,p=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,p=(e.min.z-S.z)*x),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,s,o,l){id.subVectors(t,e),yl.subVectors(s,e),rd.crossVectors(id,yl);let h=this.direction.dot(rd),d;if(h>0){if(o)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Sr.subVectors(this.origin,e);const p=d*this.direction.dot(yl.crossVectors(Sr,yl));if(p<0)return null;const m=d*this.direction.dot(id.cross(Sr));if(m<0||p+m>h)return null;const v=-d*Sr.dot(rd);return v<0?null:this.at(v/h,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,s,o,l,h,d,p,m,v,x,S,w,E,A,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m,v,x,S,w,E,A,y)}set(e,t,s,o,l,h,d,p,m,v,x,S,w,E,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=x,_[14]=S,_[3]=w,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),h=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*h,t[9]=s[9]*h,t[10]=s[10]*h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const S=h*v,w=h*x,E=d*v,A=d*x;t[0]=p*v,t[4]=-p*x,t[8]=m,t[1]=w+E*m,t[5]=S-A*m,t[9]=-d*p,t[2]=A-S*m,t[6]=E+w*m,t[10]=h*p}else if(e.order==="YXZ"){const S=p*v,w=p*x,E=m*v,A=m*x;t[0]=S+A*d,t[4]=E*d-w,t[8]=h*m,t[1]=h*x,t[5]=h*v,t[9]=-d,t[2]=w*d-E,t[6]=A+S*d,t[10]=h*p}else if(e.order==="ZXY"){const S=p*v,w=p*x,E=m*v,A=m*x;t[0]=S-A*d,t[4]=-h*x,t[8]=E+w*d,t[1]=w+E*d,t[5]=h*v,t[9]=A-S*d,t[2]=-h*m,t[6]=d,t[10]=h*p}else if(e.order==="ZYX"){const S=h*v,w=h*x,E=d*v,A=d*x;t[0]=p*v,t[4]=E*m-w,t[8]=S*m+A,t[1]=p*x,t[5]=A*m+S,t[9]=w*m-E,t[2]=-m,t[6]=d*p,t[10]=h*p}else if(e.order==="YZX"){const S=h*p,w=h*m,E=d*p,A=d*m;t[0]=p*v,t[4]=A-S*x,t[8]=E*x+w,t[1]=x,t[5]=h*v,t[9]=-d*v,t[2]=-m*v,t[6]=w*x+E,t[10]=S-A*x}else if(e.order==="XZY"){const S=h*p,w=h*m,E=d*p,A=d*m;t[0]=p*v,t[4]=-x,t[8]=m*v,t[1]=S*x+A,t[5]=h*v,t[9]=w*x-E,t[2]=E*x-w,t[6]=d*v,t[10]=A*x+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,R_)}lookAt(e,t,s){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),wr.crossVectors(s,Gn),wr.lengthSq()===0&&(Math.abs(s.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),wr.crossVectors(s,Gn)),wr.normalize(),Sl.crossVectors(Gn,wr),o[0]=wr.x,o[4]=Sl.x,o[8]=Gn.x,o[1]=wr.y,o[5]=Sl.y,o[9]=Gn.y,o[2]=wr.z,o[6]=Sl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],v=s[1],x=s[5],S=s[9],w=s[13],E=s[2],A=s[6],y=s[10],_=s[14],N=s[3],C=s[7],D=s[11],V=s[15],O=o[0],k=o[4],le=o[8],pe=o[12],b=o[1],U=o[5],ce=o[9],ue=o[13],B=o[2],ne=o[6],X=o[10],te=o[14],j=o[3],J=o[7],W=o[11],L=o[15];return l[0]=h*O+d*b+p*B+m*j,l[4]=h*k+d*U+p*ne+m*J,l[8]=h*le+d*ce+p*X+m*W,l[12]=h*pe+d*ue+p*te+m*L,l[1]=v*O+x*b+S*B+w*j,l[5]=v*k+x*U+S*ne+w*J,l[9]=v*le+x*ce+S*X+w*W,l[13]=v*pe+x*ue+S*te+w*L,l[2]=E*O+A*b+y*B+_*j,l[6]=E*k+A*U+y*ne+_*J,l[10]=E*le+A*ce+y*X+_*W,l[14]=E*pe+A*ue+y*te+_*L,l[3]=N*O+C*b+D*B+V*j,l[7]=N*k+C*U+D*ne+V*J,l[11]=N*le+C*ce+D*X+V*W,l[15]=N*pe+C*ue+D*te+V*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],h=e[1],d=e[5],p=e[9],m=e[13],v=e[2],x=e[6],S=e[10],w=e[14],E=e[3],A=e[7],y=e[11],_=e[15];return E*(+l*p*x-o*m*x-l*d*S+s*m*S+o*d*w-s*p*w)+A*(+t*p*w-t*m*S+l*h*S-o*h*w+o*m*v-l*p*v)+y*(+t*m*x-t*d*w-l*h*x+s*h*w+l*d*v-s*m*v)+_*(-o*d*v-t*p*x+t*d*S+o*h*x-s*h*S+s*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=e[9],S=e[10],w=e[11],E=e[12],A=e[13],y=e[14],_=e[15],N=x*y*m-A*S*m+A*p*w-d*y*w-x*p*_+d*S*_,C=E*S*m-v*y*m-E*p*w+h*y*w+v*p*_-h*S*_,D=v*A*m-E*x*m+E*d*w-h*A*w-v*d*_+h*x*_,V=E*x*p-v*A*p-E*d*S+h*A*S+v*d*y-h*x*y,O=t*N+s*C+o*D+l*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=N*k,e[1]=(A*S*l-x*y*l-A*o*w+s*y*w+x*o*_-s*S*_)*k,e[2]=(d*y*l-A*p*l+A*o*m-s*y*m-d*o*_+s*p*_)*k,e[3]=(x*p*l-d*S*l-x*o*m+s*S*m+d*o*w-s*p*w)*k,e[4]=C*k,e[5]=(v*y*l-E*S*l+E*o*w-t*y*w-v*o*_+t*S*_)*k,e[6]=(E*p*l-h*y*l-E*o*m+t*y*m+h*o*_-t*p*_)*k,e[7]=(h*S*l-v*p*l+v*o*m-t*S*m-h*o*w+t*p*w)*k,e[8]=D*k,e[9]=(E*x*l-v*A*l-E*s*w+t*A*w+v*s*_-t*x*_)*k,e[10]=(h*A*l-E*d*l+E*s*m-t*A*m-h*s*_+t*d*_)*k,e[11]=(v*d*l-h*x*l-v*s*m+t*x*m+h*s*w-t*d*w)*k,e[12]=V*k,e[13]=(v*A*o-E*x*o+E*s*S-t*A*S-v*s*y+t*x*y)*k,e[14]=(E*d*o-h*A*o-E*s*p+t*A*p+h*s*y-t*d*y)*k,e[15]=(h*x*o-v*d*o+v*s*p-t*x*p-h*s*S+t*d*S)*k,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,h=e.x,d=e.y,p=e.z,m=l*h,v=l*d;return this.set(m*h+s,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+s,v*p-o*h,0,m*p-o*d,v*p+o*h,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,h){return this.set(1,s,l,0,e,1,h,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,h=t._y,d=t._z,p=t._w,m=l+l,v=h+h,x=d+d,S=l*m,w=l*v,E=l*x,A=h*v,y=h*x,_=d*x,N=p*m,C=p*v,D=p*x,V=s.x,O=s.y,k=s.z;return o[0]=(1-(A+_))*V,o[1]=(w+D)*V,o[2]=(E-C)*V,o[3]=0,o[4]=(w-D)*O,o[5]=(1-(S+_))*O,o[6]=(y+N)*O,o[7]=0,o[8]=(E+C)*k,o[9]=(y-N)*k,o[10]=(1-(S+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Fs.set(o[0],o[1],o[2]).length();const h=Fs.set(o[4],o[5],o[6]).length(),d=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const m=1/l,v=1/h,x=1/d;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=v,ui.elements[5]*=v,ui.elements[6]*=v,ui.elements[8]*=x,ui.elements[9]*=x,ui.elements[10]*=x,t.setFromRotationMatrix(ui),s.x=l,s.y=h,s.z=d,this}makePerspective(e,t,s,o,l,h,d=$i){const p=this.elements,m=2*l/(t-e),v=2*l/(s-o),x=(t+e)/(t-e),S=(s+o)/(s-o);let w,E;if(d===$i)w=-(h+l)/(h-l),E=-2*h*l/(h-l);else if(d===Zl)w=-h/(h-l),E=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,h,d=$i){const p=this.elements,m=1/(t-e),v=1/(s-o),x=1/(h-l),S=(t+e)*m,w=(s+o)*v;let E,A;if(d===$i)E=(h+l)*x,A=-2*x;else if(d===Zl)E=l*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-w,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Fs=new K,ui=new Kt,A_=new K(0,0,0),R_=new K(1,1,1),wr=new K,Sl=new K,Gn=new K,vm=new Kt,xm=new oa;class nc{constructor(e=0,t=0,s=0,o=nc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],h=o[4],d=o[8],p=o[1],m=o[5],v=o[9],x=o[2],S=o[6],w=o[10];switch(t){case"XYZ":this._y=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,w),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,w),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(gn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,w),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-gn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,w),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(gn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,w));break;case"XZY":this._z=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nc.DEFAULT_ORDER="XYZ";class Ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const _m=new K,ks=new oa,ji=new Kt,wl=new K,$a=new K,P_=new K,L_=new oa,ym=new K(1,0,0),Sm=new K(0,1,0),wm=new K(0,0,1),N_={type:"added"},D_={type:"removed"};class On extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new K,t=new nc,s=new oa,o=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function h(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new mt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?wl.copy(e):wl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt($a,wl,this.up):ji.lookAt(wl,$a,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),ks.setFromRotationMatrix(ji),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(N_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const h=this.children[s].getObjectByProperty(e,t);if(h!==void 0)return h}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++){const d=o[l];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),v=h(e.images),x=h(e.shapes),S=h(e.skeletons),w=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),w.length>0&&(s.animations=w),E.length>0&&(s.nodes=E)}return s.object=o,s;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}On.DEFAULT_UP=new K(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new K,Hi=new K,sd=new K,Gi=new K,Os=new K,zs=new K,Mm=new K,ad=new K,od=new K,ld=new K;class bi{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){di.subVectors(o,t),Hi.subVectors(s,t),sd.subVectors(e,t);const h=di.dot(di),d=di.dot(Hi),p=di.dot(sd),m=Hi.dot(Hi),v=Hi.dot(sd),x=h*m-d*d;if(x===0)return l.set(0,0,0),null;const S=1/x,w=(m*p-d*v)*S,E=(h*v-d*p)*S;return l.set(1-w-E,E,w)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,s,o,l,h,d,p){return this.getBarycoord(e,t,s,o,Gi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Gi.x),p.addScaledVector(h,Gi.y),p.addScaledVector(d,Gi.z),p)}static isFrontFacing(e,t,s,o){return di.subVectors(s,t),Hi.subVectors(e,t),di.cross(Hi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let h,d;Os.subVectors(o,s),zs.subVectors(l,s),ad.subVectors(e,s);const p=Os.dot(ad),m=zs.dot(ad);if(p<=0&&m<=0)return t.copy(s);od.subVectors(e,o);const v=Os.dot(od),x=zs.dot(od);if(v>=0&&x<=v)return t.copy(o);const S=p*x-v*m;if(S<=0&&p>=0&&v<=0)return h=p/(p-v),t.copy(s).addScaledVector(Os,h);ld.subVectors(e,l);const w=Os.dot(ld),E=zs.dot(ld);if(E>=0&&w<=E)return t.copy(l);const A=w*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(s).addScaledVector(zs,d);const y=v*E-w*x;if(y<=0&&x-v>=0&&w-E>=0)return Mm.subVectors(l,o),d=(x-v)/(x-v+(w-E)),t.copy(o).addScaledVector(Mm,d);const _=1/(y+A+S);return h=A*_,d=S*_,t.copy(s).addScaledVector(Os,h).addScaledVector(zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function cd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Ct.workingColorSpace){if(e=__(e,1),t=gn(t,0,1),s=gn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,h=2*s-l;this.r=cd(h,l,e+1/3),this.g=cd(h,l,e),this.b=cd(h,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=an){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const h=o[1],d=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(h===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const s=Fg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Ct.fromWorkingColorSpace(pn.copy(this),e),Math.round(gn(pn.r*255,0,255))*65536+Math.round(gn(pn.g*255,0,255))*256+Math.round(gn(pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,o=pn.g,l=pn.b,h=Math.max(s,o,l),d=Math.min(s,o,l);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=v<=.5?x/(h+d):x/(2-h-d),h){case s:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-s)/x+2;break;case l:p=(s-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=an){Ct.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,o=pn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Ml);const s=$u(Mr.h,Ml.h,t),o=$u(Mr.s,Ml.s,t),l=$u(Mr.l,Ml.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ve;Ve.NAMES=Fg;let I_=0;class io extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Qs,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ad,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==Lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bd&&(s.blendSrc=this.blendSrc),this.blendDst!==Ad&&(s.blendDst=this.blendDst),this.blendEquation!==es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}if(t){const l=o(e.textures),h=o(e.images);l.length>0&&(s.textures=l),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kg extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new K,El=new Et;class mi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=um,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Js("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Xa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class Og extends mi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class zg extends mi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Un extends mi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let U_=0;const ei=new Kt,ud=new On,Bs=new K,Vn=new no,Ka=new no,nn=new K;class gi extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?zg:Og)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new mt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,h=t.length;l<h;l++){const d=t[l];Ka.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(Vn.min,Ka.min),Vn.expandByPoint(nn),nn.addVectors(Vn.max,Ka.max),Vn.expandByPoint(nn)):(Vn.expandByPoint(Ka.min),Vn.expandByPoint(Ka.max))}Vn.getCenter(s);let o=0;for(let l=0,h=e.count;l<h;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,h=t.length;l<h;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)nn.fromBufferAttribute(d,m),p&&(Bs.fromBufferAttribute(e,m),nn.add(Bs)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,h=t.uv.array,d=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],v=[];for(let b=0;b<d;b++)m[b]=new K,v[b]=new K;const x=new K,S=new K,w=new K,E=new Et,A=new Et,y=new Et,_=new K,N=new K;function C(b,U,ce){x.fromArray(o,b*3),S.fromArray(o,U*3),w.fromArray(o,ce*3),E.fromArray(h,b*2),A.fromArray(h,U*2),y.fromArray(h,ce*2),S.sub(x),w.sub(x),A.sub(E),y.sub(E);const ue=1/(A.x*y.y-y.x*A.y);isFinite(ue)&&(_.copy(S).multiplyScalar(y.y).addScaledVector(w,-A.y).multiplyScalar(ue),N.copy(w).multiplyScalar(A.x).addScaledVector(S,-y.x).multiplyScalar(ue),m[b].add(_),m[U].add(_),m[ce].add(_),v[b].add(N),v[U].add(N),v[ce].add(N))}let D=this.groups;D.length===0&&(D=[{start:0,count:s.length}]);for(let b=0,U=D.length;b<U;++b){const ce=D[b],ue=ce.start,B=ce.count;for(let ne=ue,X=ue+B;ne<X;ne+=3)C(s[ne+0],s[ne+1],s[ne+2])}const V=new K,O=new K,k=new K,le=new K;function pe(b){k.fromArray(l,b*3),le.copy(k);const U=m[b];V.copy(U),V.sub(k.multiplyScalar(k.dot(U))).normalize(),O.crossVectors(le,U);const ue=O.dot(v[b])<0?-1:1;p[b*4]=V.x,p[b*4+1]=V.y,p[b*4+2]=V.z,p[b*4+3]=ue}for(let b=0,U=D.length;b<U;++b){const ce=D[b],ue=ce.start,B=ce.count;for(let ne=ue,X=ue+B;ne<X;ne+=3)pe(s[ne+0]),pe(s[ne+1]),pe(s[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let S=0,w=s.count;S<w;S++)s.setXYZ(S,0,0,0);const o=new K,l=new K,h=new K,d=new K,p=new K,m=new K,v=new K,x=new K;if(e)for(let S=0,w=e.count;S<w;S+=3){const E=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),h.fromBufferAttribute(t,y),v.subVectors(h,l),x.subVectors(o,l),v.cross(x),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,w=t.count;S<w;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),h.fromBufferAttribute(t,S+2),v.subVectors(h,l),x.subVectors(o,l),v.cross(x),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,x=d.normalized,S=new m.constructor(p.length*v);let w=0,E=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?w=p[A]*d.data.stride+d.offset:w=p[A]*v;for(let _=0;_<v;_++)S[E++]=m[w++]}return new mi(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let v=0,x=m.length;v<x;v++){const S=m[v],w=e(S,s);p.push(w)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,S=m.length;x<S;x++){const w=m[x];v.push(w.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],x=l[m];for(let S=0,w=x.length;S<w;S++)v.push(x[S].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Em=new Kt,Kr=new Ig,Tl=new tc,Tm=new K,js=new K,Hs=new K,Gs=new K,dd=new K,bl=new K,Al=new Et,Rl=new Et,Cl=new Et,bm=new K,Am=new K,Rm=new K,Pl=new K,Ll=new K;class Ki extends On{constructor(e=new gi,t=new kg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,h=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){bl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=d[p],x=l[p];v!==0&&(dd.fromBufferAttribute(x,e),h?bl.addScaledVector(dd,v):bl.addScaledVector(dd.sub(t),v))}t.add(bl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tl.copy(s.boundingSphere),Tl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Tl,Tm)===null||Kr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(Em.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(Em),!(s.boundingBox!==null&&Kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,h=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,S=l.groups,w=l.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=S.length;E<A;E++){const y=S[E],_=h[y.materialIndex],N=Math.max(y.start,w.start),C=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let D=N,V=C;D<V;D+=3){const O=d.getX(D),k=d.getX(D+1),le=d.getX(D+2);o=Nl(this,_,e,s,m,v,x,O,k,le),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),A=Math.min(d.count,w.start+w.count);for(let y=E,_=A;y<_;y+=3){const N=d.getX(y),C=d.getX(y+1),D=d.getX(y+2);o=Nl(this,h,e,s,m,v,x,N,C,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,A=S.length;E<A;E++){const y=S[E],_=h[y.materialIndex],N=Math.max(y.start,w.start),C=Math.min(p.count,Math.min(y.start+y.count,w.start+w.count));for(let D=N,V=C;D<V;D+=3){const O=D,k=D+1,le=D+2;o=Nl(this,_,e,s,m,v,x,O,k,le),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),A=Math.min(p.count,w.start+w.count);for(let y=E,_=A;y<_;y+=3){const N=y,C=y+1,D=y+2;o=Nl(this,h,e,s,m,v,x,N,C,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function F_(r,e,t,s,o,l,h,d){let p;if(e.side===Fn?p=s.intersectTriangle(h,l,o,!0,d):p=s.intersectTriangle(o,l,h,e.side===Lr,d),p===null)return null;Ll.copy(d),Ll.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Ll);return m<t.near||m>t.far?null:{distance:m,point:Ll.clone(),object:r}}function Nl(r,e,t,s,o,l,h,d,p,m){r.getVertexPosition(d,js),r.getVertexPosition(p,Hs),r.getVertexPosition(m,Gs);const v=F_(r,e,t,s,js,Hs,Gs,Pl);if(v){o&&(Al.fromBufferAttribute(o,d),Rl.fromBufferAttribute(o,p),Cl.fromBufferAttribute(o,m),v.uv=bi.getInterpolation(Pl,js,Hs,Gs,Al,Rl,Cl,new Et)),l&&(Al.fromBufferAttribute(l,d),Rl.fromBufferAttribute(l,p),Cl.fromBufferAttribute(l,m),v.uv1=bi.getInterpolation(Pl,js,Hs,Gs,Al,Rl,Cl,new Et),v.uv2=v.uv1),h&&(bm.fromBufferAttribute(h,d),Am.fromBufferAttribute(h,p),Rm.fromBufferAttribute(h,m),v.normal=bi.getInterpolation(Pl,js,Hs,Gs,bm,Am,Rm,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new K,materialIndex:0};bi.getNormal(js,Hs,Gs,x.normal),v.face=x}return v}class ro extends gi{constructor(e=1,t=1,s=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:h};const d=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const p=[],m=[],v=[],x=[];let S=0,w=0;E("z","y","x",-1,-1,s,t,e,h,l,0),E("z","y","x",1,-1,s,t,-e,h,l,1),E("x","z","y",1,1,e,s,t,o,h,2),E("x","z","y",1,-1,e,s,-t,o,h,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(v,3)),this.setAttribute("uv",new Un(x,2));function E(A,y,_,N,C,D,V,O,k,le,pe){const b=D/k,U=V/le,ce=D/2,ue=V/2,B=O/2,ne=k+1,X=le+1;let te=0,j=0;const J=new K;for(let W=0;W<X;W++){const L=W*U-ue;for(let H=0;H<ne;H++){const we=H*b-ce;J[A]=we*N,J[y]=L*C,J[_]=B,m.push(J.x,J.y,J.z),J[A]=0,J[y]=0,J[_]=O>0?1:-1,v.push(J.x,J.y,J.z),x.push(H/k),x.push(1-W/le),te+=1}}for(let W=0;W<le;W++)for(let L=0;L<k;L++){const H=S+L+ne*W,we=S+L+ne*(W+1),q=S+(L+1)+ne*(W+1),ae=S+(L+1)+ne*W;p.push(H,we,ae),p.push(we,q,ae),j+=6}d.addGroup(w,j,pe),w+=j,S+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=sa(r[t]);for(const o in s)e[o]=s[o]}return e}function k_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Bg(r){return r.getRenderTarget()===null?r.outputColorSpace:Ct.workingColorSpace}const O_={clone:sa,merge:wn};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?t.uniforms[o]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?t.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?t.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?t.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?t.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?t.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?t.uniforms[o]={type:"m4",value:h.toArray()}:t.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class jg extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new K,Cm=new Et,Pm=new Et;class ti extends jg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Pm),t.subVectors(Pm,Cm)}setViewOffset(e,t,s,o,l,h){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;l+=h.offsetX*o/p,t-=h.offsetY*s/m,o*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Ws=1;class j_ extends On{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Vs,Ws,e,t);o.layers=this.layers,this.add(o);const l=new ti(Vs,Ws,e,t);l.layers=this.layers,this.add(l);const h=new ti(Vs,Ws,e,t);h.layers=this.layers,this.add(h);const d=new ti(Vs,Ws,e,t);d.layers=this.layers,this.add(d);const p=new ti(Vs,Ws,e,t);p.layers=this.layers,this.add(p);const m=new ti(Vs,Ws,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,h,d,p]=t;for(const m of t)this.remove(m);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Zl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,h,d,p,m,v]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,h),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,p),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),e.render(t,v),e.setRenderTarget(x,S,w),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Hg extends kn{constructor(e,t,s,o,l,h,d,p,m,v){e=e!==void 0?e:[],t=t!==void 0?t:na,super(e,t,s,o,l,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H_ extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];t.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?an:ni),this.texture=new Hg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ro(5,5,5),l=new Ai({name:"CubemapFromEquirect",uniforms:sa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Ar});l.uniforms.tEquirect.value=t;const h=new Ki(o,l),d=t.minFilter;return t.minFilter===ns&&(t.minFilter=In),new j_(1,10,this).update(e,h),t.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(t,s,o);e.setRenderTarget(l)}}const hd=new K,G_=new K,V_=new mt;class Qr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=hd.subVectors(s,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(hd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||V_.getNormalMatrix(e),o=this.coplanarPoint(hd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new tc,Dl=new K;class Gg{constructor(e=new Qr,t=new Qr,s=new Qr,o=new Qr,l=new Qr,h=new Qr){this.planes=[e,t,s,o,l,h]}set(e,t,s,o,l,h){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(h),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i){const s=this.planes,o=e.elements,l=o[0],h=o[1],d=o[2],p=o[3],m=o[4],v=o[5],x=o[6],S=o[7],w=o[8],E=o[9],A=o[10],y=o[11],_=o[12],N=o[13],C=o[14],D=o[15];if(s[0].setComponents(p-l,S-m,y-w,D-_).normalize(),s[1].setComponents(p+l,S+m,y+w,D+_).normalize(),s[2].setComponents(p+h,S+v,y+E,D+N).normalize(),s[3].setComponents(p-h,S-v,y-E,D-N).normalize(),s[4].setComponents(p-d,S-x,y-A,D-C).normalize(),t===$i)s[5].setComponents(p+d,S+x,y+A,D+C).normalize();else if(t===Zl)s[5].setComponents(d,x,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vg(){let r=null,e=!1,t=null,s=null;function o(l,h){t(l,h),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function W_(r,e){const t=e.isWebGL2,s=new WeakMap;function o(m,v){const x=m.array,S=m.usage,w=x.byteLength,E=r.createBuffer();r.bindBuffer(v,E),r.bufferData(v,x,S),m.onUploadCallback();let A;if(x instanceof Float32Array)A=r.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)A=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)A=r.SHORT;else if(x instanceof Uint32Array)A=r.UNSIGNED_INT;else if(x instanceof Int32Array)A=r.INT;else if(x instanceof Int8Array)A=r.BYTE;else if(x instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:E,type:A,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:w}}function l(m,v,x){const S=v.array,w=v._updateRange,E=v.updateRanges;if(r.bindBuffer(x,m),w.count===-1&&E.length===0&&r.bufferSubData(x,0,S),E.length!==0){for(let A=0,y=E.length;A<y;A++){const _=E[A];t?r.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):r.bufferSubData(x,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}v.clearUpdateRanges()}w.count!==-1&&(t?r.bufferSubData(x,w.offset*S.BYTES_PER_ELEMENT,S,w.offset,w.count):r.bufferSubData(x,w.offset*S.BYTES_PER_ELEMENT,S.subarray(w.offset,w.offset+w.count)),w.count=-1),v.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const v=s.get(m);v&&(r.deleteBuffer(v.buffer),s.delete(m))}function p(m,v){if(m.isGLBufferAttribute){const S=s.get(m);(!S||S.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=s.get(m);if(x===void 0)s.set(m,o(m,v));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(x.buffer,m,v),x.version=m.version}}return{get:h,remove:d,update:p}}class ic extends gi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,h=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,v=p+1,x=e/d,S=t/p,w=[],E=[],A=[],y=[];for(let _=0;_<v;_++){const N=_*S-h;for(let C=0;C<m;C++){const D=C*x-l;E.push(D,-N,0),A.push(0,0,1),y.push(C/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<d;N++){const C=N+m*_,D=N+m*(_+1),V=N+1+m*(_+1),O=N+1+m*_;w.push(C,D,O),w.push(D,V,O)}this.setIndex(w),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(A,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var X_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q_=`#ifdef USE_ALPHAHASH
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
#endif`,Y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
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
#endif`,J_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ry=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,ay=`#ifdef USE_BUMPMAP
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,my=`#define PI 3.141592653589793
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
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`
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
}`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
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
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Wy=`struct PhysicalMaterial {
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
}`,Xy=`
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ky=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nS=`#if defined( USE_POINTS_UV )
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
#endif`,iS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
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
#endif`,lS=`#ifdef USE_MORPHTARGETS
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
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
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
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PS=`float getShadowMask() {
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
}`,LS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IS=`#ifdef USE_SKINNING
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
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#ifdef USE_TRANSMISSION
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XS=`uniform sampler2D t2D;
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`#include <common>
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
}`,QS=`#if DEPTH_PACKING == 3200
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
}`,JS=`#define DISTANCE
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
}`,ew=`#define DISTANCE
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`uniform float scale;
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#include <common>
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
}`,aw=`uniform vec3 diffuse;
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
}`,ow=`#define LAMBERT
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
}`,lw=`#define LAMBERT
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
}`,cw=`#define MATCAP
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
}`,uw=`#define MATCAP
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
}`,dw=`#define NORMAL
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
}`,hw=`#define NORMAL
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
}`,fw=`#define PHONG
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
}`,pw=`#define PHONG
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
}`,mw=`#define STANDARD
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
}`,gw=`#define STANDARD
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
}`,vw=`#define TOON
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
}`,xw=`#define TOON
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
}`,_w=`uniform float size;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#include <common>
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
}`,ww=`uniform vec3 color;
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
}`,Mw=`uniform float rotation;
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
}`,Ew=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:X_,alphahash_pars_fragment:q_,alphamap_fragment:Y_,alphamap_pars_fragment:$_,alphatest_fragment:K_,alphatest_pars_fragment:Z_,aomap_fragment:Q_,aomap_pars_fragment:J_,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:ry,iridescence_fragment:sy,bumpmap_pars_fragment:ay,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:uy,color_fragment:dy,color_pars_fragment:hy,color_pars_vertex:fy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:vy,displacementmap_pars_vertex:xy,displacementmap_vertex:_y,emissivemap_fragment:yy,emissivemap_pars_fragment:Sy,colorspace_fragment:wy,colorspace_pars_fragment:My,envmap_fragment:Ey,envmap_common_pars_fragment:Ty,envmap_pars_fragment:by,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:zy,envmap_vertex:Ry,fog_vertex:Cy,fog_pars_vertex:Py,fog_fragment:Ly,fog_pars_fragment:Ny,gradientmap_pars_fragment:Dy,lightmap_fragment:Iy,lightmap_pars_fragment:Uy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:ky,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:jy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Gy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Wy,lights_fragment_begin:Xy,lights_fragment_maps:qy,lights_fragment_end:Yy,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:Ky,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Qy,map_fragment:Jy,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphcolor_vertex:sS,morphnormal_vertex:aS,morphtarget_pars_vertex:oS,morphtarget_vertex:lS,normal_fragment_begin:cS,normal_fragment_maps:uS,normal_pars_fragment:dS,normal_pars_vertex:hS,normal_vertex:fS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:vS,iridescence_pars_fragment:xS,opaque_fragment:_S,packing:yS,premultiplied_alpha_fragment:SS,project_vertex:wS,dithering_fragment:MS,dithering_pars_fragment:ES,roughnessmap_fragment:TS,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:RS,shadowmap_vertex:CS,shadowmask_pars_fragment:PS,skinbase_vertex:LS,skinning_pars_vertex:NS,skinning_vertex:DS,skinnormal_vertex:IS,specularmap_fragment:US,specularmap_pars_fragment:FS,tonemapping_fragment:kS,tonemapping_pars_fragment:OS,transmission_fragment:zS,transmission_pars_fragment:BS,uv_pars_fragment:jS,uv_pars_vertex:HS,uv_vertex:GS,worldpos_vertex:VS,background_vert:WS,background_frag:XS,backgroundCube_vert:qS,backgroundCube_frag:YS,cube_vert:$S,cube_frag:KS,depth_vert:ZS,depth_frag:QS,distanceRGBA_vert:JS,distanceRGBA_frag:ew,equirect_vert:tw,equirect_frag:nw,linedashed_vert:iw,linedashed_frag:rw,meshbasic_vert:sw,meshbasic_frag:aw,meshlambert_vert:ow,meshlambert_frag:lw,meshmatcap_vert:cw,meshmatcap_frag:uw,meshnormal_vert:dw,meshnormal_frag:hw,meshphong_vert:fw,meshphong_frag:pw,meshphysical_vert:mw,meshphysical_frag:gw,meshtoon_vert:vw,meshtoon_frag:xw,points_vert:_w,points_frag:yw,shadow_vert:Sw,shadow_frag:ww,sprite_vert:Mw,sprite_frag:Ew},Le={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ei={basic:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:wn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:wn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:wn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:wn([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:wn([Le.lights,Le.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ei.physical={uniforms:wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Il={r:0,b:0,g:0};function Tw(r,e,t,s,o,l,h){const d=new Ve(0);let p=l===!0?0:1,m,v,x=null,S=0,w=null;function E(y,_){let N=!1,C=_.isScene===!0?_.background:null;C&&C.isTexture&&(C=(_.backgroundBlurriness>0?t:e).get(C)),C===null?A(d,p):C&&C.isColor&&(A(C,1),N=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||N)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Jl)?(v===void 0&&(v=new Ki(new ro(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:sa(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,v.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Ut,(x!==C||S!==C.version||w!==r.toneMapping)&&(v.material.needsUpdate=!0,x=C,S=C.version,w=r.toneMapping),v.layers.enableAll(),y.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ki(new ic(2,2),new Ai({name:"BackgroundMaterial",uniforms:sa(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||S!==C.version||w!==r.toneMapping)&&(m.material.needsUpdate=!0,x=C,S=C.version,w=r.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function A(y,_){y.getRGB(Il,Bg(r)),s.buffers.color.setClear(Il.r,Il.g,Il.b,_,h)}return{getClearColor:function(){return d},setClearColor:function(y,_=1){d.set(y),p=_,A(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,A(d,p)},render:E}}function bw(r,e,t,s){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),h=s.isWebGL2||l!==null,d={},p=y(null);let m=p,v=!1;function x(B,ne,X,te,j){let J=!1;if(h){const W=A(te,X,ne);m!==W&&(m=W,w(m.object)),J=_(B,te,X,j),J&&N(B,te,X,j)}else{const W=ne.wireframe===!0;(m.geometry!==te.id||m.program!==X.id||m.wireframe!==W)&&(m.geometry=te.id,m.program=X.id,m.wireframe=W,J=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(J||v)&&(v=!1,le(B,ne,X,te),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function S(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function w(B){return s.isWebGL2?r.bindVertexArray(B):l.bindVertexArrayOES(B)}function E(B){return s.isWebGL2?r.deleteVertexArray(B):l.deleteVertexArrayOES(B)}function A(B,ne,X){const te=X.wireframe===!0;let j=d[B.id];j===void 0&&(j={},d[B.id]=j);let J=j[ne.id];J===void 0&&(J={},j[ne.id]=J);let W=J[te];return W===void 0&&(W=y(S()),J[te]=W),W}function y(B){const ne=[],X=[],te=[];for(let j=0;j<o;j++)ne[j]=0,X[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:X,attributeDivisors:te,object:B,attributes:{},index:null}}function _(B,ne,X,te){const j=m.attributes,J=ne.attributes;let W=0;const L=X.getAttributes();for(const H in L)if(L[H].location>=0){const q=j[H];let ae=J[H];if(ae===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;W++}return m.attributesNum!==W||m.index!==te}function N(B,ne,X,te){const j={},J=ne.attributes;let W=0;const L=X.getAttributes();for(const H in L)if(L[H].location>=0){let q=J[H];q===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(q=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(q=B.instanceColor));const ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),j[H]=ae,W++}m.attributes=j,m.attributesNum=W,m.index=te}function C(){const B=m.newAttributes;for(let ne=0,X=B.length;ne<X;ne++)B[ne]=0}function D(B){V(B,0)}function V(B,ne){const X=m.newAttributes,te=m.enabledAttributes,j=m.attributeDivisors;X[B]=1,te[B]===0&&(r.enableVertexAttribArray(B),te[B]=1),j[B]!==ne&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,ne),j[B]=ne)}function O(){const B=m.newAttributes,ne=m.enabledAttributes;for(let X=0,te=ne.length;X<te;X++)ne[X]!==B[X]&&(r.disableVertexAttribArray(X),ne[X]=0)}function k(B,ne,X,te,j,J,W){W===!0?r.vertexAttribIPointer(B,ne,X,j,J):r.vertexAttribPointer(B,ne,X,te,j,J)}function le(B,ne,X,te){if(s.isWebGL2===!1&&(B.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const j=te.attributes,J=X.getAttributes(),W=ne.defaultAttributeValues;for(const L in J){const H=J[L];if(H.location>=0){let we=j[L];if(we===void 0&&(L==="instanceMatrix"&&B.instanceMatrix&&(we=B.instanceMatrix),L==="instanceColor"&&B.instanceColor&&(we=B.instanceColor)),we!==void 0){const q=we.normalized,ae=we.itemSize,ge=t.get(we);if(ge===void 0)continue;const Pe=ge.buffer,Re=ge.type,Te=ge.bytesPerElement,tt=s.isWebGL2===!0&&(Re===r.INT||Re===r.UNSIGNED_INT||we.gpuType===Sg);if(we.isInterleavedBufferAttribute){const $e=we.data,$=$e.stride,Pt=we.offset;if($e.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)V(H.location+We,$e.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let We=0;We<H.locationSize;We++)D(H.location+We);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let We=0;We<H.locationSize;We++)k(H.location+We,ae/H.locationSize,Re,q,$*Te,(Pt+ae/H.locationSize*We)*Te,tt)}else{if(we.isInstancedBufferAttribute){for(let $e=0;$e<H.locationSize;$e++)V(H.location+$e,we.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let $e=0;$e<H.locationSize;$e++)D(H.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let $e=0;$e<H.locationSize;$e++)k(H.location+$e,ae/H.locationSize,Re,q,ae*Te,ae/H.locationSize*$e*Te,tt)}}else if(W!==void 0){const q=W[L];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(H.location,q);break;case 3:r.vertexAttrib3fv(H.location,q);break;case 4:r.vertexAttrib4fv(H.location,q);break;default:r.vertexAttrib1fv(H.location,q)}}}}O()}function pe(){ce();for(const B in d){const ne=d[B];for(const X in ne){const te=ne[X];for(const j in te)E(te[j].object),delete te[j];delete ne[X]}delete d[B]}}function b(B){if(d[B.id]===void 0)return;const ne=d[B.id];for(const X in ne){const te=ne[X];for(const j in te)E(te[j].object),delete te[j];delete ne[X]}delete d[B.id]}function U(B){for(const ne in d){const X=d[ne];if(X[B.id]===void 0)continue;const te=X[B.id];for(const j in te)E(te[j].object),delete te[j];delete X[B.id]}}function ce(){ue(),v=!0,m!==p&&(m=p,w(m.object))}function ue(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:ce,resetDefaultState:ue,dispose:pe,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:D,disableUnusedAttributes:O}}function Aw(r,e,t,s){const o=s.isWebGL2;let l;function h(v){l=v}function d(v,x){r.drawArrays(l,v,x),t.update(x,l,1)}function p(v,x,S){if(S===0)return;let w,E;if(o)w=r,E="drawArraysInstanced";else if(w=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[E](l,v,x,S),t.update(x,l,S)}function m(v,x,S){if(S===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let E=0;E<S;E++)this.render(v[E],x[E]);else{w.multiDrawArraysWEBGL(l,v,0,x,0,S);let E=0;for(let A=0;A<S;A++)E+=x[A];t.update(E,l,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function Rw(r,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let d=t.precision!==void 0?t.precision:"highp";const p=l(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),v=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=S>0,D=h||e.has("OES_texture_float"),V=C&&D,O=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:d,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:E,maxAttributes:A,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:N,vertexTextures:C,floatFragmentTextures:D,floatVertexTextures:V,maxSamples:O}}function Cw(r){const e=this;let t=null,s=0,o=!1,l=!1;const h=new Qr,d=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const w=x.length!==0||S||s!==0||o;return o=S,s=x.length,w},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,S){t=v(x,S,0)},this.setState=function(x,S,w){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,_=r.get(x);if(!o||E===null||E.length===0||l&&!y)l?v(null):m();else{const N=l?0:s,C=N*4;let D=_.clippingState||null;p.value=D,D=v(E,S,C,w);for(let V=0;V!==C;++V)D[V]=t[V];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,S,w,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=p.value,E!==!0||y===null){const _=w+A*4,N=S.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let C=0,D=w;C!==A;++C,D+=4)h.copy(x[C]).applyMatrix4(N,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function Pw(r){let e=new WeakMap;function t(h,d){return d===Rd?h.mapping=na:d===Cd&&(h.mapping=ia),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Rd||d===Cd)if(e.has(h)){const p=e.get(h).texture;return t(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new H_(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",o),t(m.texture,h.mapping)}else return null}}return h}function o(h){const d=h.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Lw extends jg{constructor(e=-1,t=1,s=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,h=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,h=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,Lm=[.125,.215,.35,.446,.526,.582],ts=20,fd=new Lw,Nm=new Ve;let pd=null,md=0,gd=0;const Jr=(1+Math.sqrt(5))/2,Xs=1/Jr,Dm=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Jr,Xs),new K(0,Jr,-Xs),new K(Xs,0,Jr),new K(-Xs,0,Jr),new K(Jr,Xs,0),new K(-Jr,Xs,0)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:eo,format:pi,colorSpace:Zi,depthBuffer:!1},o=Um(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nw(l)),this._blurMaterial=Dw(l,e,t)}return o}_compileMaterial(e){const t=new Ki(this._lodPlanes[0],e);this._renderer.compile(t,fd)}_sceneToCubeUV(e,t,s,o){const d=new ti(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Nm),v.toneMapping=Rr,v.autoClear=!1;const w=new kg({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),E=new Ki(new ro,w);let A=!1;const y=e.background;y?y.isColor&&(w.color.copy(y),e.background=null,A=!0):(w.color.copy(Nm),A=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):N===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const C=this._cubeSize;Ul(o,N*C,_>2?C:0,C,C),v.setRenderTarget(o),A&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===na||e.mapping===ia;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const l=o?this._cubemapMaterial:this._equirectMaterial,h=new Ki(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Ul(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(h,fd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Dm[(o-1)%Dm.length];this._blur(e,o-1,o,l,h)}t.autoClear=s}_blur(e,t,s,o,l){const h=this._pingPongRenderTarget;this._halfBlur(e,h,t,s,o,"latitudinal",l),this._halfBlur(h,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Ki(this._lodPlanes[o],m),S=m.uniforms,w=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*w):2*Math.PI/(2*ts-1),A=l/E,y=isFinite(l)?1+Math.floor(v*A):ts;y>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const _=[];let N=0;for(let k=0;k<ts;++k){const le=k/A,pe=Math.exp(-le*le/2);_.push(pe),k===0?N+=pe:k<y&&(N+=2*pe)}for(let k=0;k<_.length;k++)_[k]=_[k]/N;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:C}=this;S.dTheta.value=E,S.mipInt.value=C-s;const D=this._sizeLods[o],V=3*D*(o>C-$s?o-C+$s:0),O=4*(this._cubeSize-D);Ul(t,V,O,3*D,2*D),p.setRenderTarget(t),p.render(x,fd)}}function Nw(r){const e=[],t=[],s=[];let o=r;const l=r-$s+1+Lm.length;for(let h=0;h<l;h++){const d=Math.pow(2,o);t.push(d);let p=1/d;h>r-$s?p=Lm[h-r+$s-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,x=1+m,S=[v,v,x,v,x,x,v,v,x,x,v,x],w=6,E=6,A=3,y=2,_=1,N=new Float32Array(A*E*w),C=new Float32Array(y*E*w),D=new Float32Array(_*E*w);for(let O=0;O<w;O++){const k=O%3*2/3-1,le=O>2?0:-1,pe=[k,le,0,k+2/3,le,0,k+2/3,le+1,0,k,le,0,k+2/3,le+1,0,k,le+1,0];N.set(pe,A*E*O),C.set(S,y*E*O);const b=[O,O,O,O,O,O];D.set(b,_*E*O)}const V=new gi;V.setAttribute("position",new mi(N,A)),V.setAttribute("uv",new mi(C,y)),V.setAttribute("faceIndex",new mi(D,_)),e.push(V),o>$s&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Um(r,e,t){const s=new os(r,e,t);return s.texture.mapping=Jl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ul(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function Dw(r,e,t){const s=new Float32Array(ts),o=new K(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Fm(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function km(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Xd(){return`

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
	`}function Iw(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Rd||p===Cd,v=p===na||p===ia;if(m||v)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=e.get(d);return t===null&&(t=new Im(r)),x=m?t.fromEquirectangular(d,x):t.fromCubemap(d,x),e.set(d,x),x.texture}else{if(e.has(d))return e.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||v&&x&&o(x)){t===null&&(t=new Im(r));const S=m?t.fromEquirectangular(d):t.fromCubemap(d);return e.set(d,S),d.addEventListener("dispose",l),S.texture}else return null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:h}}function Uw(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function Fw(r,e,t,s){const o={},l=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);for(const E in S.morphAttributes){const A=S.morphAttributes[E];for(let y=0,_=A.length;y<_;y++)e.remove(A[y])}S.removeEventListener("dispose",h),delete o[S.id];const w=l.get(S);w&&(e.remove(w),l.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function d(x,S){return o[S.id]===!0||(S.addEventListener("dispose",h),o[S.id]=!0,t.memory.geometries++),S}function p(x){const S=x.attributes;for(const E in S)e.update(S[E],r.ARRAY_BUFFER);const w=x.morphAttributes;for(const E in w){const A=w[E];for(let y=0,_=A.length;y<_;y++)e.update(A[y],r.ARRAY_BUFFER)}}function m(x){const S=[],w=x.index,E=x.attributes.position;let A=0;if(w!==null){const N=w.array;A=w.version;for(let C=0,D=N.length;C<D;C+=3){const V=N[C+0],O=N[C+1],k=N[C+2];S.push(V,O,O,k,k,V)}}else if(E!==void 0){const N=E.array;A=E.version;for(let C=0,D=N.length/3-1;C<D;C+=3){const V=C+0,O=C+1,k=C+2;S.push(V,O,O,k,k,V)}}else return;const y=new(Pg(S)?zg:Og)(S,1);y.version=A;const _=l.get(x);_&&e.remove(_),l.set(x,y)}function v(x){const S=l.get(x);if(S){const w=x.index;w!==null&&S.version<w.version&&m(x)}else m(x);return l.get(x)}return{get:d,update:p,getWireframeAttribute:v}}function kw(r,e,t,s){const o=s.isWebGL2;let l;function h(w){l=w}let d,p;function m(w){d=w.type,p=w.bytesPerElement}function v(w,E){r.drawElements(l,E,d,w*p),t.update(E,l,1)}function x(w,E,A){if(A===0)return;let y,_;if(o)y=r,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](l,E,d,w*p,A),t.update(E,l,A)}function S(w,E,A){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<A;_++)this.render(w[_]/p,E[_]);else{y.multiDrawElementsWEBGL(l,E,0,d,w,0,A);let _=0;for(let N=0;N<A;N++)_+=E[N];t.update(_,l,1)}}this.setMode=h,this.setIndex=m,this.render=v,this.renderInstances=x,this.renderMultiDraw=S}function Ow(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,h,d){switch(t.calls++,h){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function zw(r,e){return r[0]-e[0]}function Bw(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jw(r,e,t){const s={},o=new Float32Array(8),l=new WeakMap,h=new on,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,v,x){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const E=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,A=E!==void 0?E.length:0;let y=l.get(v);if(y===void 0||y.count!==A){let ne=function(){ue.dispose(),l.delete(v),v.removeEventListener("dispose",ne)};var w=ne;y!==void 0&&y.texture.dispose();const C=v.morphAttributes.position!==void 0,D=v.morphAttributes.normal!==void 0,V=v.morphAttributes.color!==void 0,O=v.morphAttributes.position||[],k=v.morphAttributes.normal||[],le=v.morphAttributes.color||[];let pe=0;C===!0&&(pe=1),D===!0&&(pe=2),V===!0&&(pe=3);let b=v.attributes.position.count*pe,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const ce=new Float32Array(b*U*4*A),ue=new Dg(ce,b,U,A);ue.type=Xi,ue.needsUpdate=!0;const B=pe*4;for(let X=0;X<A;X++){const te=O[X],j=k[X],J=le[X],W=b*U*4*X;for(let L=0;L<te.count;L++){const H=L*B;C===!0&&(h.fromBufferAttribute(te,L),ce[W+H+0]=h.x,ce[W+H+1]=h.y,ce[W+H+2]=h.z,ce[W+H+3]=0),D===!0&&(h.fromBufferAttribute(j,L),ce[W+H+4]=h.x,ce[W+H+5]=h.y,ce[W+H+6]=h.z,ce[W+H+7]=0),V===!0&&(h.fromBufferAttribute(J,L),ce[W+H+8]=h.x,ce[W+H+9]=h.y,ce[W+H+10]=h.z,ce[W+H+11]=J.itemSize===4?h.w:1)}}y={count:A,texture:ue,size:new Et(b,U)},l.set(v,y),v.addEventListener("dispose",ne)}let _=0;for(let C=0;C<S.length;C++)_+=S[C];const N=v.morphTargetsRelative?1:1-_;x.getUniforms().setValue(r,"morphTargetBaseInfluence",N),x.getUniforms().setValue(r,"morphTargetInfluences",S),x.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const E=S===void 0?0:S.length;let A=s[v.id];if(A===void 0||A.length!==E){A=[];for(let D=0;D<E;D++)A[D]=[D,0];s[v.id]=A}for(let D=0;D<E;D++){const V=A[D];V[0]=D,V[1]=S[D]}A.sort(Bw);for(let D=0;D<8;D++)D<E&&A[D][1]?(d[D][0]=A[D][0],d[D][1]=A[D][1]):(d[D][0]=Number.MAX_SAFE_INTEGER,d[D][1]=0);d.sort(zw);const y=v.morphAttributes.position,_=v.morphAttributes.normal;let N=0;for(let D=0;D<8;D++){const V=d[D],O=V[0],k=V[1];O!==Number.MAX_SAFE_INTEGER&&k?(y&&v.getAttribute("morphTarget"+D)!==y[O]&&v.setAttribute("morphTarget"+D,y[O]),_&&v.getAttribute("morphNormal"+D)!==_[O]&&v.setAttribute("morphNormal"+D,_[O]),o[D]=k,N+=k):(y&&v.hasAttribute("morphTarget"+D)===!0&&v.deleteAttribute("morphTarget"+D),_&&v.hasAttribute("morphNormal"+D)===!0&&v.deleteAttribute("morphNormal"+D),o[D]=0)}const C=v.morphTargetsRelative?1:1-N;x.getUniforms().setValue(r,"morphTargetBaseInfluence",C),x.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:p}}function Hw(r,e,t,s){let o=new WeakMap;function l(p){const m=s.render.frame,v=p.geometry,x=e.get(p,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return x}function h(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:h}}class Wg extends kn{constructor(e,t,s,o,l,h,d,p,m,v){if(v=v!==void 0?v:rs,v!==rs&&v!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===rs&&(s=br),s===void 0&&v===ra&&(s=is),super(null,o,l,h,d,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Mn,this.minFilter=p!==void 0?p:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xg=new kn,qg=new Wg(1,1);qg.compareFunction=Cg;const Yg=new Dg,$g=new T_,Kg=new Hg,Om=[],zm=[],Bm=new Float32Array(16),jm=new Float32Array(9),Hm=new Float32Array(4);function la(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Om[o];if(l===void 0&&(l=new Float32Array(o),Om[o]=l),e!==0){s.toArray(l,0);for(let h=1,d=0;h!==e;++h)d+=t,r[h].toArray(l,d)}return l}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function rc(r,e){let t=zm[e];t===void 0&&(t=new Int32Array(e),zm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function Gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function Ww(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function Xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function qw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Hm.set(s),r.uniformMatrix2fv(this.addr,!1,Hm),Qt(t,s)}}function Yw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;jm.set(s),r.uniformMatrix3fv(this.addr,!1,jm),Qt(t,s)}}function $w(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Bm.set(s),r.uniformMatrix4fv(this.addr,!1,Bm),Qt(t,s)}}function Kw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function Qw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function Jw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function eM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function rM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);const l=this.type===r.SAMPLER_2D_SHADOW?qg:Xg;t.setTexture2D(e||l,o)}function sM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||$g,o)}function aM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Kg,o)}function oM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Yg,o)}function lM(r){switch(r){case 5126:return Gw;case 35664:return Vw;case 35665:return Ww;case 35666:return Xw;case 35674:return qw;case 35675:return Yw;case 35676:return $w;case 5124:case 35670:return Kw;case 35667:case 35671:return Zw;case 35668:case 35672:return Qw;case 35669:case 35673:return Jw;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}function cM(r,e){r.uniform1fv(this.addr,e)}function uM(r,e){const t=la(e,this.size,2);r.uniform2fv(this.addr,t)}function dM(r,e){const t=la(e,this.size,3);r.uniform3fv(this.addr,t)}function hM(r,e){const t=la(e,this.size,4);r.uniform4fv(this.addr,t)}function fM(r,e){const t=la(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pM(r,e){const t=la(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mM(r,e){const t=la(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gM(r,e){r.uniform1iv(this.addr,e)}function vM(r,e){r.uniform2iv(this.addr,e)}function xM(r,e){r.uniform3iv(this.addr,e)}function _M(r,e){r.uniform4iv(this.addr,e)}function yM(r,e){r.uniform1uiv(this.addr,e)}function SM(r,e){r.uniform2uiv(this.addr,e)}function wM(r,e){r.uniform3uiv(this.addr,e)}function MM(r,e){r.uniform4uiv(this.addr,e)}function EM(r,e,t){const s=this.cache,o=e.length,l=rc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2D(e[h]||Xg,l[h])}function TM(r,e,t){const s=this.cache,o=e.length,l=rc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture3D(e[h]||$g,l[h])}function bM(r,e,t){const s=this.cache,o=e.length,l=rc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTextureCube(e[h]||Kg,l[h])}function AM(r,e,t){const s=this.cache,o=e.length,l=rc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2DArray(e[h]||Yg,l[h])}function RM(r){switch(r){case 5126:return cM;case 35664:return uM;case 35665:return dM;case 35666:return hM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return _M;case 5125:return yM;case 36294:return SM;case 36295:return wM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return AM}}class CM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=lM(t.type)}}class PM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}}class LM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Gm(r,e){r.seq.push(e),r.map[e.id]=e}function NM(r,e,t){const s=r.name,o=s.length;for(vd.lastIndex=0;;){const l=vd.exec(s),h=vd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===o){Gm(t,m===void 0?new CM(d,r,e):new PM(d,r,e));break}else{let x=t.map[d];x===void 0&&(x=new LM(d),Gm(t,x)),t=x}}}class Wl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),h=e.getUniformLocation(t,l.name);NM(l,h,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,h=t.length;l!==h;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const h=e[o];h.id in t&&s.push(h)}return s}}function Vm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const DM=37297;let IM=0;function UM(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let h=o;h<l;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${t[h]}`)}return s.join(`
`)}function FM(r){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(r);let s;switch(e===t?s="":e===Kl&&t===$l?s="LinearDisplayP3ToLinearSRGB":e===$l&&t===Kl&&(s="LinearSRGBToLinearDisplayP3"),r){case Zi:case ec:return[s,"LinearTransferOETF"];case an:case Wd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Wm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const h=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+UM(r.getShaderSource(e),h)}else return o}function kM(r,e){const t=FM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function OM(r,e){let t;switch(e){case $x:t="Linear";break;case Kx:t="Reinhard";break;case Zx:t="OptimizedCineon";break;case _g:t="ACESFilmic";break;case Jx:t="AgX";break;case Qx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function BM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function jM(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function HM(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),h=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[h]={type:l.type,location:r.getAttribLocation(e,h),locationSize:d}}return t}function Ks(r){return r!==""}function Xm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(r){return r.replace(GM,WM)}const VM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WM(r,e){let t=ft[e];if(t===void 0){const s=VM.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(r){return r.replace(XM,qM)}function qM(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $m(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function YM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function ZM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case qx:e="ENVMAP_BLENDING_MIX";break;case Yx:e="ENVMAP_BLENDING_ADD";break}return e}function QM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function JM(r,e,t,s){const o=r.getContext(),l=t.defines;let h=t.vertexShader,d=t.fragmentShader;const p=YM(t),m=$M(t),v=KM(t),x=ZM(t),S=QM(t),w=t.isWebGL2?"":zM(t),E=BM(t),A=jM(l),y=o.createProgram();let _,N,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ks).join(`
`),_.length>0&&(_+=`
`),N=[w,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Ks).join(`
`),N.length>0&&(N+=`
`)):(_=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),N=[w,$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Rr?OM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),h=Ud(h),h=Xm(h,t),h=qm(h,t),d=Ud(d),d=Xm(d,t),d=qm(d,t),h=Ym(h),d=Ym(d),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,N=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const D=C+_+h,V=C+N+d,O=Vm(o,o.VERTEX_SHADER,D),k=Vm(o,o.FRAGMENT_SHADER,V);o.attachShader(y,O),o.attachShader(y,k),t.index0AttributeName!==void 0?o.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function le(ce){if(r.debug.checkShaderErrors){const ue=o.getProgramInfoLog(y).trim(),B=o.getShaderInfoLog(O).trim(),ne=o.getShaderInfoLog(k).trim();let X=!0,te=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,y,O,k);else{const j=Wm(o,O,"vertex"),J=Wm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+ce.name+`
Material Type: `+ce.type+`

Program Info Log: `+ue+`
`+j+`
`+J)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(B===""||ne==="")&&(te=!1);te&&(ce.diagnostics={runnable:X,programLog:ue,vertexShader:{log:B,prefix:_},fragmentShader:{log:ne,prefix:N}})}o.deleteShader(O),o.deleteShader(k),pe=new Wl(o,y),b=HM(o,y)}let pe;this.getUniforms=function(){return pe===void 0&&le(this),pe};let b;this.getAttributes=function(){return b===void 0&&le(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(y,DM)),U},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=k,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new n1(e),t.set(e,s)),s}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(r,e,t,s,o,l,h){const d=new Ug,p=new t1,m=new Set,v=[],x=o.isWebGL2,S=o.logarithmicDepthBuffer,w=o.vertexTextures;let E=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return m.add(b),b===0?"uv":`uv${b}`}function _(b,U,ce,ue,B){const ne=ue.fog,X=B.geometry,te=b.isMeshStandardMaterial?ue.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||te),J=j&&j.mapping===Jl?j.image.height:null,W=A[b.type];b.precision!==null&&(E=o.getMaxPrecision(b.precision),E!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",E,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,H=L!==void 0?L.length:0;let we=0;X.morphAttributes.position!==void 0&&(we=1),X.morphAttributes.normal!==void 0&&(we=2),X.morphAttributes.color!==void 0&&(we=3);let q,ae,ge,Pe;if(W){const At=Ei[W];q=At.vertexShader,ae=At.fragmentShader}else q=b.vertexShader,ae=b.fragmentShader,p.update(b),ge=p.getVertexShaderID(b),Pe=p.getFragmentShaderID(b);const Re=r.getRenderTarget(),Te=B.isInstancedMesh===!0,tt=B.isBatchedMesh===!0,$e=!!b.map,$=!!b.matcap,Pt=!!j,We=!!b.aoMap,qe=!!b.lightMap,Xe=!!b.bumpMap,Ce=!!b.normalMap,me=!!b.displacementMap,R=!!b.emissiveMap,T=!!b.metalnessMap,Y=!!b.roughnessMap,fe=b.anisotropy>0,de=b.clearcoat>0,he=b.iridescence>0,De=b.sheen>0,ye=b.transmission>0,Ne=fe&&!!b.anisotropyMap,je=de&&!!b.clearcoatMap,it=de&&!!b.clearcoatNormalMap,xe=de&&!!b.clearcoatRoughnessMap,et=he&&!!b.iridescenceMap,rt=he&&!!b.iridescenceThicknessMap,at=De&&!!b.sheenColorMap,Ke=De&&!!b.sheenRoughnessMap,ze=!!b.specularMap,lt=!!b.specularColorMap,_t=!!b.specularIntensityMap,bt=ye&&!!b.transmissionMap,dt=ye&&!!b.thicknessMap,Tt=!!b.gradientMap,F=!!b.alphaMap,Me=b.alphaTest>0,be=!!b.alphaHash,He=!!b.extensions;let Ze=Rr;b.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ze=r.toneMapping);const St={isWebGL2:x,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:ae,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:Pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:E,batching:tt,instancing:Te,instancingColor:Te&&B.instanceColor!==null,supportsVertexTextures:w,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:$,envMap:Pt,envMapMode:Pt&&j.mapping,envMapCubeUVHeight:J,aoMap:We,lightMap:qe,bumpMap:Xe,normalMap:Ce,displacementMap:w&&me,emissiveMap:R,normalMapObjectSpace:Ce&&b.normalMapType===d_,normalMapTangentSpace:Ce&&b.normalMapType===u_,metalnessMap:T,roughnessMap:Y,anisotropy:fe,anisotropyMap:Ne,clearcoat:de,clearcoatMap:je,clearcoatNormalMap:it,clearcoatRoughnessMap:xe,iridescence:he,iridescenceMap:et,iridescenceThicknessMap:rt,sheen:De,sheenColorMap:at,sheenRoughnessMap:Ke,specularMap:ze,specularColorMap:lt,specularIntensityMap:_t,transmission:ye,transmissionMap:bt,thicknessMap:dt,gradientMap:Tt,opaque:b.transparent===!1&&b.blending===Qs&&b.alphaToCoverage===!1,alphaMap:F,alphaTest:Me,alphaHash:be,combine:b.combine,mapUv:$e&&y(b.map.channel),aoMapUv:We&&y(b.aoMap.channel),lightMapUv:qe&&y(b.lightMap.channel),bumpMapUv:Xe&&y(b.bumpMap.channel),normalMapUv:Ce&&y(b.normalMap.channel),displacementMapUv:me&&y(b.displacementMap.channel),emissiveMapUv:R&&y(b.emissiveMap.channel),metalnessMapUv:T&&y(b.metalnessMap.channel),roughnessMapUv:Y&&y(b.roughnessMap.channel),anisotropyMapUv:Ne&&y(b.anisotropyMap.channel),clearcoatMapUv:je&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:at&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&y(b.sheenRoughnessMap.channel),specularMapUv:ze&&y(b.specularMap.channel),specularColorMapUv:lt&&y(b.specularColorMap.channel),specularIntensityMapUv:_t&&y(b.specularIntensityMap.channel),transmissionMapUv:bt&&y(b.transmissionMap.channel),thicknessMapUv:dt&&y(b.thicknessMap.channel),alphaMapUv:F&&y(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ce||fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&($e||F),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:we,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&ce.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wi,flipSided:b.side===Fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:He&&b.extensions.derivatives===!0,extensionFragDepth:He&&b.extensions.fragDepth===!0,extensionDrawBuffers:He&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:He&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:He&&b.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=m.has(1),St.vertexUv2s=m.has(2),St.vertexUv3s=m.has(3),m.clear(),St}function N(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ce in b.defines)U.push(ce),U.push(b.defines[ce]);return b.isRawShaderMaterial===!1&&(C(U,b),D(U,b),U.push(r.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function C(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function D(b,U){d.disableAll(),U.isWebGL2&&d.enable(0),U.supportsVertexTextures&&d.enable(1),U.instancing&&d.enable(2),U.instancingColor&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),b.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.skinning&&d.enable(4),U.morphTargets&&d.enable(5),U.morphNormals&&d.enable(6),U.morphColors&&d.enable(7),U.premultipliedAlpha&&d.enable(8),U.shadowMapEnabled&&d.enable(9),U.useLegacyLights&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.alphaToCoverage&&d.enable(20),b.push(d.mask)}function V(b){const U=A[b.type];let ce;if(U){const ue=Ei[U];ce=O_.clone(ue.uniforms)}else ce=b.uniforms;return ce}function O(b,U){let ce;for(let ue=0,B=v.length;ue<B;ue++){const ne=v[ue];if(ne.cacheKey===U){ce=ne,++ce.usedTimes;break}}return ce===void 0&&(ce=new JM(r,U,b,l),v.push(ce)),ce}function k(b){if(--b.usedTimes===0){const U=v.indexOf(b);v[U]=v[v.length-1],v.pop(),b.destroy()}}function le(b){p.remove(b)}function pe(){p.dispose()}return{getParameters:_,getProgramCacheKey:N,getUniforms:V,acquireProgram:O,releaseProgram:k,releaseShaderCache:le,programs:v,dispose:pe}}function r1(){let r=new WeakMap;function e(l){let h=r.get(l);return h===void 0&&(h={},r.set(l,h)),h}function t(l){r.delete(l)}function s(l,h,d){r.get(l)[h]=d}function o(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function s1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Km(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zm(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function h(x,S,w,E,A,y){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:w,groupOrder:E,renderOrder:x.renderOrder,z:A,group:y},r[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=w,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=y),e++,_}function d(x,S,w,E,A,y){const _=h(x,S,w,E,A,y);w.transmission>0?s.push(_):w.transparent===!0?o.push(_):t.push(_)}function p(x,S,w,E,A,y){const _=h(x,S,w,E,A,y);w.transmission>0?s.unshift(_):w.transparent===!0?o.unshift(_):t.unshift(_)}function m(x,S){t.length>1&&t.sort(x||s1),s.length>1&&s.sort(S||Km),o.length>1&&o.sort(S||Km)}function v(){for(let x=e,S=r.length;x<S;x++){const w=r[x];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:p,finish:v,sort:m}}function a1(){let r=new WeakMap;function e(s,o){const l=r.get(s);let h;return l===void 0?(h=new Zm,r.set(s,[h])):o>=l.length?(h=new Zm,l.push(h)):h=l[o],h}function t(){r=new WeakMap}return{get:e,dispose:t}}function o1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ve};break;case"SpotLight":t={position:new K,direction:new K,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function l1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let c1=0;function u1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function d1(r,e){const t=new o1,s=l1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)o.probe.push(new K);const l=new K,h=new Kt,d=new Kt;function p(v,x){let S=0,w=0,E=0;for(let ce=0;ce<9;ce++)o.probe[ce].set(0,0,0);let A=0,y=0,_=0,N=0,C=0,D=0,V=0,O=0,k=0,le=0,pe=0;v.sort(u1);const b=x===!0?Math.PI:1;for(let ce=0,ue=v.length;ce<ue;ce++){const B=v[ce],ne=B.color,X=B.intensity,te=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)S+=ne.r*X*b,w+=ne.g*X*b,E+=ne.b*X*b;else if(B.isLightProbe){for(let J=0;J<9;J++)o.probe[J].addScaledVector(B.sh.coefficients[J],X);pe++}else if(B.isDirectionalLight){const J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity*b),B.castShadow){const W=B.shadow,L=s.get(B);L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,o.directionalShadow[A]=L,o.directionalShadowMap[A]=j,o.directionalShadowMatrix[A]=B.shadow.matrix,D++}o.directional[A]=J,A++}else if(B.isSpotLight){const J=t.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(ne).multiplyScalar(X*b),J.distance=te,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,o.spot[_]=J;const W=B.shadow;if(B.map&&(o.spotLightMap[k]=B.map,k++,W.updateMatrices(B),B.castShadow&&le++),o.spotLightMatrix[_]=W.matrix,B.castShadow){const L=s.get(B);L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,o.spotShadow[_]=L,o.spotShadowMap[_]=j,O++}_++}else if(B.isRectAreaLight){const J=t.get(B);J.color.copy(ne).multiplyScalar(X),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),o.rectArea[N]=J,N++}else if(B.isPointLight){const J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity*b),J.distance=B.distance,J.decay=B.decay,B.castShadow){const W=B.shadow,L=s.get(B);L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,o.pointShadow[y]=L,o.pointShadowMap[y]=j,o.pointShadowMatrix[y]=B.shadow.matrix,V++}o.point[y]=J,y++}else if(B.isHemisphereLight){const J=t.get(B);J.skyColor.copy(B.color).multiplyScalar(X*b),J.groundColor.copy(B.groundColor).multiplyScalar(X*b),o.hemi[C]=J,C++}}N>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_FLOAT_1,o.rectAreaLTC2=Le.LTC_FLOAT_2):(o.rectAreaLTC1=Le.LTC_HALF_1,o.rectAreaLTC2=Le.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_FLOAT_1,o.rectAreaLTC2=Le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Le.LTC_HALF_1,o.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=S,o.ambient[1]=w,o.ambient[2]=E;const U=o.hash;(U.directionalLength!==A||U.pointLength!==y||U.spotLength!==_||U.rectAreaLength!==N||U.hemiLength!==C||U.numDirectionalShadows!==D||U.numPointShadows!==V||U.numSpotShadows!==O||U.numSpotMaps!==k||U.numLightProbes!==pe)&&(o.directional.length=A,o.spot.length=_,o.rectArea.length=N,o.point.length=y,o.hemi.length=C,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=V,o.pointShadowMap.length=V,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=V,o.spotLightMatrix.length=O+k-le,o.spotLightMap.length=k,o.numSpotLightShadowsWithMaps=le,o.numLightProbes=pe,U.directionalLength=A,U.pointLength=y,U.spotLength=_,U.rectAreaLength=N,U.hemiLength=C,U.numDirectionalShadows=D,U.numPointShadows=V,U.numSpotShadows=O,U.numSpotMaps=k,U.numLightProbes=pe,o.version=c1++)}function m(v,x){let S=0,w=0,E=0,A=0,y=0;const _=x.matrixWorldInverse;for(let N=0,C=v.length;N<C;N++){const D=v[N];if(D.isDirectionalLight){const V=o.directional[S];V.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(_),S++}else if(D.isSpotLight){const V=o.spot[E];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(_),V.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(_),E++}else if(D.isRectAreaLight){const V=o.rectArea[A];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(_),d.identity(),h.copy(D.matrixWorld),h.premultiply(_),d.extractRotation(h),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),V.halfWidth.applyMatrix4(d),V.halfHeight.applyMatrix4(d),A++}else if(D.isPointLight){const V=o.point[w];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(_),w++}else if(D.isHemisphereLight){const V=o.hemi[y];V.direction.setFromMatrixPosition(D.matrixWorld),V.direction.transformDirection(_),y++}}}return{setup:p,setupView:m,state:o}}function Qm(r,e){const t=new d1(r,e),s=[],o=[];function l(){s.length=0,o.length=0}function h(x){s.push(x)}function d(x){o.push(x)}function p(x){t.setup(s,x)}function m(x){t.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function h1(r,e){let t=new WeakMap;function s(l,h=0){const d=t.get(l);let p;return d===void 0?(p=new Qm(r,e),t.set(l,[p])):h>=d.length?(p=new Qm(r,e),d.push(p)):p=d[h],p}function o(){t=new WeakMap}return{get:s,dispose:o}}class f1 extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function v1(r,e,t){let s=new Gg;const o=new Et,l=new Et,h=new on,d=new f1({depthPacking:c_}),p=new p1,m={},v=t.maxTextureSize,x={[Lr]:Fn,[Fn]:Lr,[Wi]:Wi},S=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),w=S.clone();w.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ki(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let _=this.type;this.render=function(O,k,le){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const pe=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(Ar),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ue=_!==Vi&&this.type===Vi,B=_===Vi&&this.type!==Vi;for(let ne=0,X=O.length;ne<X;ne++){const te=O[ne],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const J=j.getFrameExtents();if(o.multiply(J),l.copy(j.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/J.x),o.x=l.x*J.x,j.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/J.y),o.y=l.y*J.y,j.mapSize.y=l.y)),j.map===null||ue===!0||B===!0){const L=this.type!==Vi?{minFilter:Mn,magFilter:Mn}:{};j.map!==null&&j.map.dispose(),j.map=new os(o.x,o.y,L),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const W=j.getViewportCount();for(let L=0;L<W;L++){const H=j.getViewport(L);h.set(l.x*H.x,l.y*H.y,l.x*H.z,l.y*H.w),ce.viewport(h),j.updateMatrices(te,L),s=j.getFrustum(),D(k,le,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===Vi&&N(j,le),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(pe,b,U)};function N(O,k){const le=e.update(A);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,w.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,w.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new os(o.x,o.y)),S.uniforms.shadow_pass.value=O.map.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(k,null,le,S,A,null),w.uniforms.shadow_pass.value=O.mapPass.texture,w.uniforms.resolution.value=O.mapSize,w.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(k,null,le,w,A,null)}function C(O,k,le,pe){let b=null;const U=le.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(U!==void 0)b=U;else if(b=le.isPointLight===!0?p:d,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ce=b.uuid,ue=k.uuid;let B=m[ce];B===void 0&&(B={},m[ce]=B);let ne=B[ue];ne===void 0&&(ne=b.clone(),B[ue]=ne,k.addEventListener("dispose",V)),b=ne}if(b.visible=k.visible,b.wireframe=k.wireframe,pe===Vi?b.side=k.shadowSide!==null?k.shadowSide:k.side:b.side=k.shadowSide!==null?k.shadowSide:x[k.side],b.alphaMap=k.alphaMap,b.alphaTest=k.alphaTest,b.map=k.map,b.clipShadows=k.clipShadows,b.clippingPlanes=k.clippingPlanes,b.clipIntersection=k.clipIntersection,b.displacementMap=k.displacementMap,b.displacementScale=k.displacementScale,b.displacementBias=k.displacementBias,b.wireframeLinewidth=k.wireframeLinewidth,b.linewidth=k.linewidth,le.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ce=r.properties.get(b);ce.light=le}return b}function D(O,k,le,pe,b){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&b===Vi)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,O.matrixWorld);const ue=e.update(O),B=O.material;if(Array.isArray(B)){const ne=ue.groups;for(let X=0,te=ne.length;X<te;X++){const j=ne[X],J=B[j.materialIndex];if(J&&J.visible){const W=C(O,J,pe,b);O.onBeforeShadow(r,O,k,le,ue,W,j),r.renderBufferDirect(le,null,ue,W,O,j),O.onAfterShadow(r,O,k,le,ue,W,j)}}}else if(B.visible){const ne=C(O,B,pe,b);O.onBeforeShadow(r,O,k,le,ue,ne,null),r.renderBufferDirect(le,null,ue,ne,O,null),O.onAfterShadow(r,O,k,le,ue,ne,null)}}const ce=O.children;for(let ue=0,B=ce.length;ue<B;ue++)D(ce[ue],k,le,pe,b)}function V(O){O.target.removeEventListener("dispose",V);for(const le in m){const pe=m[le],b=O.target.uuid;b in pe&&(pe[b].dispose(),delete pe[b])}}}function x1(r,e,t){const s=t.isWebGL2;function o(){let F=!1;const Me=new on;let be=null;const He=new on(0,0,0,0);return{setMask:function(Ze){be!==Ze&&!F&&(r.colorMask(Ze,Ze,Ze,Ze),be=Ze)},setLocked:function(Ze){F=Ze},setClear:function(Ze,St,At,Ht,vn){vn===!0&&(Ze*=Ht,St*=Ht,At*=Ht),Me.set(Ze,St,At,Ht),He.equals(Me)===!1&&(r.clearColor(Ze,St,At,Ht),He.copy(Me))},reset:function(){F=!1,be=null,He.set(-1,0,0,0)}}}function l(){let F=!1,Me=null,be=null,He=null;return{setTest:function(Ze){Ze?Te(r.DEPTH_TEST):tt(r.DEPTH_TEST)},setMask:function(Ze){Me!==Ze&&!F&&(r.depthMask(Ze),Me=Ze)},setFunc:function(Ze){if(be!==Ze){switch(Ze){case Bx:r.depthFunc(r.NEVER);break;case jx:r.depthFunc(r.ALWAYS);break;case Hx:r.depthFunc(r.LESS);break;case ql:r.depthFunc(r.LEQUAL);break;case Gx:r.depthFunc(r.EQUAL);break;case Vx:r.depthFunc(r.GEQUAL);break;case Wx:r.depthFunc(r.GREATER);break;case Xx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=Ze}},setLocked:function(Ze){F=Ze},setClear:function(Ze){He!==Ze&&(r.clearDepth(Ze),He=Ze)},reset:function(){F=!1,Me=null,be=null,He=null}}}function h(){let F=!1,Me=null,be=null,He=null,Ze=null,St=null,At=null,Ht=null,vn=null;return{setTest:function(wt){F||(wt?Te(r.STENCIL_TEST):tt(r.STENCIL_TEST))},setMask:function(wt){Me!==wt&&!F&&(r.stencilMask(wt),Me=wt)},setFunc:function(wt,qt,ln){(be!==wt||He!==qt||Ze!==ln)&&(r.stencilFunc(wt,qt,ln),be=wt,He=qt,Ze=ln)},setOp:function(wt,qt,ln){(St!==wt||At!==qt||Ht!==ln)&&(r.stencilOp(wt,qt,ln),St=wt,At=qt,Ht=ln)},setLocked:function(wt){F=wt},setClear:function(wt){vn!==wt&&(r.clearStencil(wt),vn=wt)},reset:function(){F=!1,Me=null,be=null,He=null,Ze=null,St=null,At=null,Ht=null,vn=null}}}const d=new o,p=new l,m=new h,v=new WeakMap,x=new WeakMap;let S={},w={},E=new WeakMap,A=[],y=null,_=!1,N=null,C=null,D=null,V=null,O=null,k=null,le=null,pe=new Ve(0,0,0),b=0,U=!1,ce=null,ue=null,B=null,ne=null,X=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=J>=2);let L=null,H={};const we=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),ae=new on().fromArray(we),ge=new on().fromArray(q);function Pe(F,Me,be,He){const Ze=new Uint8Array(4),St=r.createTexture();r.bindTexture(F,St),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<be;At++)s&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Ze):r.texImage2D(Me+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ze);return St}const Re={};Re[r.TEXTURE_2D]=Pe(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=Pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Re[r.TEXTURE_2D_ARRAY]=Pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=Pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Te(r.DEPTH_TEST),p.setFunc(ql),me(!1),R(Np),Te(r.CULL_FACE),Xe(Ar);function Te(F){S[F]!==!0&&(r.enable(F),S[F]=!0)}function tt(F){S[F]!==!1&&(r.disable(F),S[F]=!1)}function $e(F,Me){return w[F]!==Me?(r.bindFramebuffer(F,Me),w[F]=Me,s&&(F===r.DRAW_FRAMEBUFFER&&(w[r.FRAMEBUFFER]=Me),F===r.FRAMEBUFFER&&(w[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function $(F,Me){let be=A,He=!1;if(F)if(be=E.get(Me),be===void 0&&(be=[],E.set(Me,be)),F.isWebGLMultipleRenderTargets){const Ze=F.texture;if(be.length!==Ze.length||be[0]!==r.COLOR_ATTACHMENT0){for(let St=0,At=Ze.length;St<At;St++)be[St]=r.COLOR_ATTACHMENT0+St;be.length=Ze.length,He=!0}}else be[0]!==r.COLOR_ATTACHMENT0&&(be[0]=r.COLOR_ATTACHMENT0,He=!0);else be[0]!==r.BACK&&(be[0]=r.BACK,He=!0);He&&(t.isWebGL2?r.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Pt(F){return y!==F?(r.useProgram(F),y=F,!0):!1}const We={[es]:r.FUNC_ADD,[Tx]:r.FUNC_SUBTRACT,[bx]:r.FUNC_REVERSE_SUBTRACT};if(s)We[Up]=r.MIN,We[Fp]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(We[Up]=F.MIN_EXT,We[Fp]=F.MAX_EXT)}const qe={[Ax]:r.ZERO,[Rx]:r.ONE,[Cx]:r.SRC_COLOR,[bd]:r.SRC_ALPHA,[Ux]:r.SRC_ALPHA_SATURATE,[Dx]:r.DST_COLOR,[Lx]:r.DST_ALPHA,[Px]:r.ONE_MINUS_SRC_COLOR,[Ad]:r.ONE_MINUS_SRC_ALPHA,[Ix]:r.ONE_MINUS_DST_COLOR,[Nx]:r.ONE_MINUS_DST_ALPHA,[Fx]:r.CONSTANT_COLOR,[kx]:r.ONE_MINUS_CONSTANT_COLOR,[Ox]:r.CONSTANT_ALPHA,[zx]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(F,Me,be,He,Ze,St,At,Ht,vn,wt){if(F===Ar){_===!0&&(tt(r.BLEND),_=!1);return}if(_===!1&&(Te(r.BLEND),_=!0),F!==Ex){if(F!==N||wt!==U){if((C!==es||O!==es)&&(r.blendEquation(r.FUNC_ADD),C=es,O=es),wt)switch(F){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.ONE,r.ONE);break;case Dp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ip:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Dp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ip:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}D=null,V=null,k=null,le=null,pe.set(0,0,0),b=0,N=F,U=wt}return}Ze=Ze||Me,St=St||be,At=At||He,(Me!==C||Ze!==O)&&(r.blendEquationSeparate(We[Me],We[Ze]),C=Me,O=Ze),(be!==D||He!==V||St!==k||At!==le)&&(r.blendFuncSeparate(qe[be],qe[He],qe[St],qe[At]),D=be,V=He,k=St,le=At),(Ht.equals(pe)===!1||vn!==b)&&(r.blendColor(Ht.r,Ht.g,Ht.b,vn),pe.copy(Ht),b=vn),N=F,U=!1}function Ce(F,Me){F.side===Wi?tt(r.CULL_FACE):Te(r.CULL_FACE);let be=F.side===Fn;Me&&(be=!be),me(be),F.blending===Qs&&F.transparent===!1?Xe(Ar):Xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),p.setFunc(F.depthFunc),p.setTest(F.depthTest),p.setMask(F.depthWrite),d.setMask(F.colorWrite);const He=F.stencilWrite;m.setTest(He),He&&(m.setMask(F.stencilWriteMask),m.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),m.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(F){ce!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),ce=F)}function R(F){F!==Sx?(Te(r.CULL_FACE),F!==ue&&(F===Np?r.cullFace(r.BACK):F===wx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):tt(r.CULL_FACE),ue=F}function T(F){F!==B&&(j&&r.lineWidth(F),B=F)}function Y(F,Me,be){F?(Te(r.POLYGON_OFFSET_FILL),(ne!==Me||X!==be)&&(r.polygonOffset(Me,be),ne=Me,X=be)):tt(r.POLYGON_OFFSET_FILL)}function fe(F){F?Te(r.SCISSOR_TEST):tt(r.SCISSOR_TEST)}function de(F){F===void 0&&(F=r.TEXTURE0+te-1),L!==F&&(r.activeTexture(F),L=F)}function he(F,Me,be){be===void 0&&(L===null?be=r.TEXTURE0+te-1:be=L);let He=H[be];He===void 0&&(He={type:void 0,texture:void 0},H[be]=He),(He.type!==F||He.texture!==Me)&&(L!==be&&(r.activeTexture(be),L=be),r.bindTexture(F,Me||Re[F]),He.type=F,He.texture=Me)}function De(){const F=H[L];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(F){ae.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),ae.copy(F))}function _t(F){ge.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ge.copy(F))}function bt(F,Me){let be=x.get(Me);be===void 0&&(be=new WeakMap,x.set(Me,be));let He=be.get(F);He===void 0&&(He=r.getUniformBlockIndex(Me,F.name),be.set(F,He))}function dt(F,Me){const He=x.get(Me).get(F);v.get(Me)!==He&&(r.uniformBlockBinding(Me,He,F.__bindingPointIndex),v.set(Me,He))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},L=null,H={},w={},E=new WeakMap,A=[],y=null,_=!1,N=null,C=null,D=null,V=null,O=null,k=null,le=null,pe=new Ve(0,0,0),b=0,U=!1,ce=null,ue=null,B=null,ne=null,X=null,ae.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Te,disable:tt,bindFramebuffer:$e,drawBuffers:$,useProgram:Pt,setBlending:Xe,setMaterial:Ce,setFlipSided:me,setCullFace:R,setLineWidth:T,setPolygonOffset:Y,setScissorTest:fe,activeTexture:de,bindTexture:he,unbindTexture:De,compressedTexImage2D:ye,compressedTexImage3D:Ne,texImage2D:Ke,texImage3D:ze,updateUBOMapping:bt,uniformBlockBinding:dt,texStorage2D:rt,texStorage3D:at,texSubImage2D:je,texSubImage3D:it,compressedTexSubImage2D:xe,compressedTexSubImage3D:et,scissor:lt,viewport:_t,reset:Tt}}function _1(r,e,t,s,o,l,h){const d=o.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const S=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,T){return w?new OffscreenCanvas(R,T):Ql("canvas")}function A(R,T,Y,fe){let de=1;if((R.width>fe||R.height>fe)&&(de=fe/Math.max(R.width,R.height)),de<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const he=T?Id:Math.floor,De=he(de*R.width),ye=he(de*R.height);x===void 0&&(x=E(De,ye));const Ne=Y?E(De,ye):x;return Ne.width=De,Ne.height=ye,Ne.getContext("2d").drawImage(R,0,0,De,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+De+"x"+ye+")."),Ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return hm(R.width)&&hm(R.height)}function _(R){return d?!1:R.wrapS!==fi||R.wrapT!==fi||R.minFilter!==Mn&&R.minFilter!==In}function N(R,T){return R.generateMipmaps&&T&&R.minFilter!==Mn&&R.minFilter!==In}function C(R){r.generateMipmap(R)}function D(R,T,Y,fe,de=!1){if(d===!1)return T;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=T;if(T===r.RED&&(Y===r.FLOAT&&(he=r.R32F),Y===r.HALF_FLOAT&&(he=r.R16F),Y===r.UNSIGNED_BYTE&&(he=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(he=r.R8UI),Y===r.UNSIGNED_SHORT&&(he=r.R16UI),Y===r.UNSIGNED_INT&&(he=r.R32UI),Y===r.BYTE&&(he=r.R8I),Y===r.SHORT&&(he=r.R16I),Y===r.INT&&(he=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(he=r.RG32F),Y===r.HALF_FLOAT&&(he=r.RG16F),Y===r.UNSIGNED_BYTE&&(he=r.RG8)),T===r.RGBA){const De=de?Yl:Ct.getTransfer(fe);Y===r.FLOAT&&(he=r.RGBA32F),Y===r.HALF_FLOAT&&(he=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(he=De===Ut?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function V(R,T,Y){return N(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==In?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function O(R){return R===Mn||R===kp||R===Wa?r.NEAREST:r.LINEAR}function k(R){const T=R.target;T.removeEventListener("dispose",k),pe(T),T.isVideoTexture&&v.delete(T)}function le(R){const T=R.target;T.removeEventListener("dispose",le),U(T)}function pe(R){const T=s.get(R);if(T.__webglInit===void 0)return;const Y=R.source,fe=S.get(Y);if(fe){const de=fe[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&b(R),Object.keys(fe).length===0&&S.delete(Y)}s.remove(R)}function b(R){const T=s.get(R);r.deleteTexture(T.__webglTexture);const Y=R.source,fe=S.get(Y);delete fe[T.__cacheKey],h.memory.textures--}function U(R){const T=R.texture,Y=s.get(R),fe=s.get(T);if(fe.__webglTexture!==void 0&&(r.deleteTexture(fe.__webglTexture),h.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Y.__webglFramebuffer[de]))for(let he=0;he<Y.__webglFramebuffer[de].length;he++)r.deleteFramebuffer(Y.__webglFramebuffer[de][he]);else r.deleteFramebuffer(Y.__webglFramebuffer[de]);Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[de])}else{if(Array.isArray(Y.__webglFramebuffer))for(let de=0;de<Y.__webglFramebuffer.length;de++)r.deleteFramebuffer(Y.__webglFramebuffer[de]);else r.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let de=0;de<Y.__webglColorRenderbuffer.length;de++)Y.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[de]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let de=0,he=T.length;de<he;de++){const De=s.get(T[de]);De.__webglTexture&&(r.deleteTexture(De.__webglTexture),h.memory.textures--),s.remove(T[de])}s.remove(T),s.remove(R)}let ce=0;function ue(){ce=0}function B(){const R=ce;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),ce+=1,R}function ne(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function X(R,T){const Y=s.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const fe=R.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,R,T);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function te(R,T){const Y=s.get(R);if(R.version>0&&Y.__version!==R.version){ae(Y,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function j(R,T){const Y=s.get(R);if(R.version>0&&Y.__version!==R.version){ae(Y,R,T);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function J(R,T){const Y=s.get(R);if(R.version>0&&Y.__version!==R.version){ge(Y,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const W={[Pd]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[Ld]:r.MIRRORED_REPEAT},L={[Mn]:r.NEAREST,[kp]:r.NEAREST_MIPMAP_NEAREST,[Wa]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Hu]:r.LINEAR_MIPMAP_NEAREST,[ns]:r.LINEAR_MIPMAP_LINEAR},H={[h_]:r.NEVER,[x_]:r.ALWAYS,[f_]:r.LESS,[Cg]:r.LEQUAL,[p_]:r.EQUAL,[v_]:r.GEQUAL,[m_]:r.GREATER,[g_]:r.NOTEQUAL};function we(R,T,Y){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===In||T.magFilter===Hu||T.magFilter===Wa||T.magFilter===ns||T.minFilter===In||T.minFilter===Hu||T.minFilter===Wa||T.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(r.texParameteri(R,r.TEXTURE_WRAP_S,W[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,W[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,W[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[T.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==fi||T.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,O(T.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,O(T.minFilter)),T.minFilter!==Mn&&T.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Mn||T.minFilter!==Wa&&T.minFilter!==ns||T.type===Xi&&e.has("OES_texture_float_linear")===!1||d===!1&&T.type===eo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||s.get(T).__currentAnisotropy)&&(r.texParameterf(R,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy)}}function q(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",k));const fe=T.source;let de=S.get(fe);de===void 0&&(de={},S.set(fe,de));const he=ne(T);if(he!==R.__cacheKey){de[he]===void 0&&(de[he]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),de[he].usedTimes++;const De=de[R.__cacheKey];De!==void 0&&(de[R.__cacheKey].usedTimes--,De.usedTimes===0&&b(T)),R.__cacheKey=he,R.__webglTexture=de[he].texture}return Y}function ae(R,T,Y){let fe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=r.TEXTURE_3D);const de=q(R,T),he=T.source;t.bindTexture(fe,R.__webglTexture,r.TEXTURE0+Y);const De=s.get(he);if(he.version!==De.__version||de===!0){t.activeTexture(r.TEXTURE0+Y);const ye=Ct.getPrimaries(Ct.workingColorSpace),Ne=T.colorSpace===ni?null:Ct.getPrimaries(T.colorSpace),je=T.colorSpace===ni||ye===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const it=_(T)&&y(T.image)===!1;let xe=A(T.image,it,!1,o.maxTextureSize);xe=me(T,xe);const et=y(xe)||d,rt=l.convert(T.format,T.colorSpace);let at=l.convert(T.type),Ke=D(T.internalFormat,rt,at,T.colorSpace,T.isVideoTexture);we(fe,T,et);let ze;const lt=T.mipmaps,_t=d&&T.isVideoTexture!==!0&&Ke!==Ag,bt=De.__version===void 0||de===!0,dt=he.dataReady,Tt=V(T,xe,et);if(T.isDepthTexture)Ke=r.DEPTH_COMPONENT,d?T.type===Xi?Ke=r.DEPTH_COMPONENT32F:T.type===br?Ke=r.DEPTH_COMPONENT24:T.type===is?Ke=r.DEPTH24_STENCIL8:Ke=r.DEPTH_COMPONENT16:T.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===rs&&Ke===r.DEPTH_COMPONENT&&T.type!==Vd&&T.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=br,at=l.convert(T.type)),T.format===ra&&Ke===r.DEPTH_COMPONENT&&(Ke=r.DEPTH_STENCIL,T.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=is,at=l.convert(T.type))),bt&&(_t?t.texStorage2D(r.TEXTURE_2D,1,Ke,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ke,xe.width,xe.height,0,rt,at,null));else if(T.isDataTexture)if(lt.length>0&&et){_t&&bt&&t.texStorage2D(r.TEXTURE_2D,Tt,Ke,lt[0].width,lt[0].height);for(let F=0,Me=lt.length;F<Me;F++)ze=lt[F],_t?dt&&t.texSubImage2D(r.TEXTURE_2D,F,0,0,ze.width,ze.height,rt,at,ze.data):t.texImage2D(r.TEXTURE_2D,F,Ke,ze.width,ze.height,0,rt,at,ze.data);T.generateMipmaps=!1}else _t?(bt&&t.texStorage2D(r.TEXTURE_2D,Tt,Ke,xe.width,xe.height),dt&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,rt,at,xe.data)):t.texImage2D(r.TEXTURE_2D,0,Ke,xe.width,xe.height,0,rt,at,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_t&&bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ke,lt[0].width,lt[0].height,xe.depth);for(let F=0,Me=lt.length;F<Me;F++)ze=lt[F],T.format!==pi?rt!==null?_t?dt&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,0,ze.width,ze.height,xe.depth,rt,ze.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,F,Ke,ze.width,ze.height,xe.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?dt&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,F,0,0,0,ze.width,ze.height,xe.depth,rt,at,ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,F,Ke,ze.width,ze.height,xe.depth,0,rt,at,ze.data)}else{_t&&bt&&t.texStorage2D(r.TEXTURE_2D,Tt,Ke,lt[0].width,lt[0].height);for(let F=0,Me=lt.length;F<Me;F++)ze=lt[F],T.format!==pi?rt!==null?_t?dt&&t.compressedTexSubImage2D(r.TEXTURE_2D,F,0,0,ze.width,ze.height,rt,ze.data):t.compressedTexImage2D(r.TEXTURE_2D,F,Ke,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?dt&&t.texSubImage2D(r.TEXTURE_2D,F,0,0,ze.width,ze.height,rt,at,ze.data):t.texImage2D(r.TEXTURE_2D,F,Ke,ze.width,ze.height,0,rt,at,ze.data)}else if(T.isDataArrayTexture)_t?(bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ke,xe.width,xe.height,xe.depth),dt&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,rt,at,xe.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,xe.width,xe.height,xe.depth,0,rt,at,xe.data);else if(T.isData3DTexture)_t?(bt&&t.texStorage3D(r.TEXTURE_3D,Tt,Ke,xe.width,xe.height,xe.depth),dt&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,rt,at,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,xe.width,xe.height,xe.depth,0,rt,at,xe.data);else if(T.isFramebufferTexture){if(bt)if(_t)t.texStorage2D(r.TEXTURE_2D,Tt,Ke,xe.width,xe.height);else{let F=xe.width,Me=xe.height;for(let be=0;be<Tt;be++)t.texImage2D(r.TEXTURE_2D,be,Ke,F,Me,0,rt,at,null),F>>=1,Me>>=1}}else if(lt.length>0&&et){_t&&bt&&t.texStorage2D(r.TEXTURE_2D,Tt,Ke,lt[0].width,lt[0].height);for(let F=0,Me=lt.length;F<Me;F++)ze=lt[F],_t?dt&&t.texSubImage2D(r.TEXTURE_2D,F,0,0,rt,at,ze):t.texImage2D(r.TEXTURE_2D,F,Ke,rt,at,ze);T.generateMipmaps=!1}else _t?(bt&&t.texStorage2D(r.TEXTURE_2D,Tt,Ke,xe.width,xe.height),dt&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,at,xe)):t.texImage2D(r.TEXTURE_2D,0,Ke,rt,at,xe);N(T,et)&&C(fe),De.__version=he.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ge(R,T,Y){if(T.image.length!==6)return;const fe=q(R,T),de=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Y);const he=s.get(de);if(de.version!==he.__version||fe===!0){t.activeTexture(r.TEXTURE0+Y);const De=Ct.getPrimaries(Ct.workingColorSpace),ye=T.colorSpace===ni?null:Ct.getPrimaries(T.colorSpace),Ne=T.colorSpace===ni||De===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const je=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let F=0;F<6;F++)!je&&!it?xe[F]=A(T.image[F],!1,!0,o.maxCubemapSize):xe[F]=it?T.image[F].image:T.image[F],xe[F]=me(T,xe[F]);const et=xe[0],rt=y(et)||d,at=l.convert(T.format,T.colorSpace),Ke=l.convert(T.type),ze=D(T.internalFormat,at,Ke,T.colorSpace),lt=d&&T.isVideoTexture!==!0,_t=he.__version===void 0||fe===!0,bt=de.dataReady;let dt=V(T,et,rt);we(r.TEXTURE_CUBE_MAP,T,rt);let Tt;if(je){lt&&_t&&t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,ze,et.width,et.height);for(let F=0;F<6;F++){Tt=xe[F].mipmaps;for(let Me=0;Me<Tt.length;Me++){const be=Tt[Me];T.format!==pi?at!==null?lt?bt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me,0,0,be.width,be.height,at,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?bt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me,0,0,be.width,be.height,at,Ke,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me,ze,be.width,be.height,0,at,Ke,be.data)}}}else{Tt=T.mipmaps,lt&&_t&&(Tt.length>0&&dt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,ze,xe[0].width,xe[0].height));for(let F=0;F<6;F++)if(it){lt?bt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,xe[F].width,xe[F].height,at,Ke,xe[F].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ze,xe[F].width,xe[F].height,0,at,Ke,xe[F].data);for(let Me=0;Me<Tt.length;Me++){const He=Tt[Me].image[F].image;lt?bt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me+1,0,0,He.width,He.height,at,Ke,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me+1,ze,He.width,He.height,0,at,Ke,He.data)}}else{lt?bt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,at,Ke,xe[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ze,at,Ke,xe[F]);for(let Me=0;Me<Tt.length;Me++){const be=Tt[Me];lt?bt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me+1,0,0,at,Ke,be.image[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me+1,ze,at,Ke,be.image[F])}}}N(T,rt)&&C(r.TEXTURE_CUBE_MAP),he.__version=de.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Pe(R,T,Y,fe,de,he){const De=l.convert(Y.format,Y.colorSpace),ye=l.convert(Y.type),Ne=D(Y.internalFormat,De,ye,Y.colorSpace);if(!s.get(T).__hasExternalTextures){const it=Math.max(1,T.width>>he),xe=Math.max(1,T.height>>he);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,he,Ne,it,xe,T.depth,0,De,ye,null):t.texImage2D(de,he,Ne,it,xe,0,De,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Xe(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,de,s.get(Y).__webglTexture,0,qe(T)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,de,s.get(Y).__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(R,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let fe=d===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Y||Xe(T)){const de=T.depthTexture;de&&de.isDepthTexture&&(de.type===Xi?fe=r.DEPTH_COMPONENT32F:de.type===br&&(fe=r.DEPTH_COMPONENT24));const he=qe(T);Xe(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,fe,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,he,fe,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const fe=qe(T);Y&&Xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,r.DEPTH24_STENCIL8,T.width,T.height):Xe(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const fe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let de=0;de<fe.length;de++){const he=fe[de],De=l.convert(he.format,he.colorSpace),ye=l.convert(he.type),Ne=D(he.internalFormat,De,ye,he.colorSpace),je=qe(T);Y&&Xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Ne,T.width,T.height):Xe(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,Ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const fe=s.get(T.depthTexture).__webglTexture,de=qe(T);if(T.depthTexture.format===rs)Xe(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(T.depthTexture.format===ra)Xe(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function tt(R){const T=s.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,R)}else if(Y){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]=r.createRenderbuffer(),Re(T.__webglDepthbuffer[fe],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Re(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(R,T,Y){const fe=s.get(R);T!==void 0&&Pe(fe.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&tt(R)}function $(R){const T=R.texture,Y=s.get(R),fe=s.get(T);R.addEventListener("dispose",le),R.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=T.version,h.memory.textures++);const de=R.isWebGLCubeRenderTarget===!0,he=R.isWebGLMultipleRenderTargets===!0,De=y(R)||d;if(de){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(d&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)Y.__webglFramebuffer[ye][Ne]=r.createFramebuffer()}else Y.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(d&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(he)if(o.drawBuffers){const ye=R.texture;for(let Ne=0,je=ye.length;Ne<je;Ne++){const it=s.get(ye[Ne]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&R.samples>0&&Xe(R)===!1){const ye=he?T:[T];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ye.length;Ne++){const je=ye[Ne];Y.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne]);const it=l.convert(je.format,je.colorSpace),xe=l.convert(je.type),et=D(je.internalFormat,it,xe,je.colorSpace,R.isXRRenderTarget===!0),rt=qe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,et,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),we(r.TEXTURE_CUBE_MAP,T,De);for(let ye=0;ye<6;ye++)if(d&&T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Pe(Y.__webglFramebuffer[ye][Ne],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne);else Pe(Y.__webglFramebuffer[ye],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);N(T,De)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const ye=R.texture;for(let Ne=0,je=ye.length;Ne<je;Ne++){const it=ye[Ne],xe=s.get(it);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),we(r.TEXTURE_2D,it,De),Pe(Y.__webglFramebuffer,R,it,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,0),N(it,De)&&C(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(d?ye=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,fe.__webglTexture),we(ye,T,De),d&&T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Pe(Y.__webglFramebuffer[Ne],R,T,r.COLOR_ATTACHMENT0,ye,Ne);else Pe(Y.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ye,0);N(T,De)&&C(ye),t.unbindTexture()}R.depthBuffer&&tt(R)}function Pt(R){const T=y(R)||d,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0,de=Y.length;fe<de;fe++){const he=Y[fe];if(N(he,T)){const De=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=s.get(he).__webglTexture;t.bindTexture(De,ye),C(De),t.unbindTexture()}}}function We(R){if(d&&R.samples>0&&Xe(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,fe=R.height;let de=r.COLOR_BUFFER_BIT;const he=[],De=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=s.get(R),Ne=R.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<T.length;je++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let je=0;je<T.length;je++){he.push(r.COLOR_ATTACHMENT0+je),R.depthBuffer&&he.push(De);const it=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(it===!1&&(R.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[je]),it===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[De]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[De])),Ne){const xe=s.get(T[je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,de,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<T.length;je++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,ye.__webglColorRenderbuffer[je]);const it=s.get(T[je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,it,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function qe(R){return Math.min(o.maxSamples,R.samples)}function Xe(R){const T=s.get(R);return d&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(R){const T=h.render.frame;v.get(R)!==T&&(v.set(R,T),R.update())}function me(R,T){const Y=R.colorSpace,fe=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Nd||Y!==Zi&&Y!==ni&&(Ct.getTransfer(Y)===Ut?d===!1?e.has("EXT_sRGB")===!0&&fe===pi?(R.format=Nd,R.minFilter=In,R.generateMipmaps=!1):T=Lg.sRGBToLinear(T):(fe!==pi||de!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=$e,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Xe}function y1(r,e,t){const s=t.isWebGL2;function o(l,h=ni){let d;const p=Ct.getTransfer(h);if(l===Cr)return r.UNSIGNED_BYTE;if(l===wg)return r.UNSIGNED_SHORT_4_4_4_4;if(l===Mg)return r.UNSIGNED_SHORT_5_5_5_1;if(l===e_)return r.BYTE;if(l===t_)return r.SHORT;if(l===Vd)return r.UNSIGNED_SHORT;if(l===Sg)return r.INT;if(l===br)return r.UNSIGNED_INT;if(l===Xi)return r.FLOAT;if(l===eo)return s?r.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(l===n_)return r.ALPHA;if(l===pi)return r.RGBA;if(l===i_)return r.LUMINANCE;if(l===r_)return r.LUMINANCE_ALPHA;if(l===rs)return r.DEPTH_COMPONENT;if(l===ra)return r.DEPTH_STENCIL;if(l===Nd)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(l===s_)return r.RED;if(l===Eg)return r.RED_INTEGER;if(l===a_)return r.RG;if(l===Tg)return r.RG_INTEGER;if(l===bg)return r.RGBA_INTEGER;if(l===Gu||l===Vu||l===Wu||l===Xu)if(p===Ut)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(l===Gu)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Vu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Wu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Xu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(l===Gu)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Vu)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Wu)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Xu)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Op||l===zp||l===Bp||l===jp)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(l===Op)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===zp)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Bp)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===jp)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Ag)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Hp||l===Gp)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(l===Hp)return p===Ut?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(l===Gp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Vp||l===Wp||l===Xp||l===qp||l===Yp||l===$p||l===Kp||l===Zp||l===Qp||l===Jp||l===em||l===tm||l===nm||l===im)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(l===Vp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Wp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Xp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===qp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Yp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===$p)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Kp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Zp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Qp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Jp)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===em)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===tm)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===nm)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===im)return p===Ut?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===qu||l===rm||l===sm)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(l===qu)return p===Ut?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===rm)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===sm)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===o_||l===am||l===om||l===lm)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(l===qu)return d.COMPRESSED_RED_RGTC1_EXT;if(l===am)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===om)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===lm)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===is?s?r.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:o}}class S1 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,s),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=v.position.distanceTo(x.position),w=.02,E=.005;m.inputState.pinching&&S>w+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=w-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Za;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class T1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new kn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const s=t.cameras[0].viewport,o=new Ai({extensions:{fragDepth:!0},vertexShader:M1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new Ki(new ic(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class b1 extends aa{constructor(e,t){super();const s=this;let o=null,l=1,h=null,d="local-floor",p=1,m=null,v=null,x=null,S=null,w=null,E=null;const A=new T1,y=t.getContextAttributes();let _=null,N=null;const C=[],D=[],V=new Et;let O=null;const k=new ti;k.layers.enable(1),k.viewport=new on;const le=new ti;le.layers.enable(2),le.viewport=new on;const pe=[k,le],b=new S1;b.layers.enable(1),b.layers.enable(2);let U=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=C[q];return ae===void 0&&(ae=new xd,C[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=C[q];return ae===void 0&&(ae=new xd,C[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=C[q];return ae===void 0&&(ae=new xd,C[q]=ae),ae.getHandSpace()};function ue(q){const ae=D.indexOf(q.inputSource);if(ae===-1)return;const ge=C[ae];ge!==void 0&&(ge.update(q.inputSource,q.frame,m||h),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",ne);for(let q=0;q<C.length;q++){const ae=D[q];ae!==null&&(D[q]=null,C[q].disconnect(ae))}U=null,ce=null,A.reset(),e.setRenderTarget(_),w=null,S=null,x=null,o=null,N=null,we.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return S!==null?S:w},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",B),o.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:o.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,t,ae),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),N=new os(w.framebufferWidth,w.framebufferHeight,{format:pi,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ae=null,ge=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?ra:rs,ge=y.stencil?is:br);const Re={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};x=new XRWebGLBinding(o,t),S=x.createProjectionLayer(Re),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),N=new os(S.textureWidth,S.textureHeight,{format:pi,type:Cr,depthTexture:new Wg(S.textureWidth,S.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Te=e.properties.get(N);Te.__ignoreDepthValues=S.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await o.requestReferenceSpace(d),we.setContext(o),we.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function ne(q){for(let ae=0;ae<q.removed.length;ae++){const ge=q.removed[ae],Pe=D.indexOf(ge);Pe>=0&&(D[Pe]=null,C[Pe].disconnect(ge))}for(let ae=0;ae<q.added.length;ae++){const ge=q.added[ae];let Pe=D.indexOf(ge);if(Pe===-1){for(let Te=0;Te<C.length;Te++)if(Te>=D.length){D.push(ge),Pe=Te;break}else if(D[Te]===null){D[Te]=ge,Pe=Te;break}if(Pe===-1)break}const Re=C[Pe];Re&&Re.connect(ge)}}const X=new K,te=new K;function j(q,ae,ge){X.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const Pe=X.distanceTo(te),Re=ae.projectionMatrix.elements,Te=ge.projectionMatrix.elements,tt=Re[14]/(Re[10]-1),$e=Re[14]/(Re[10]+1),$=(Re[9]+1)/Re[5],Pt=(Re[9]-1)/Re[5],We=(Re[8]-1)/Re[0],qe=(Te[8]+1)/Te[0],Xe=tt*We,Ce=tt*qe,me=Pe/(-We+qe),R=me*-We;ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(R),q.translateZ(me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const T=tt+me,Y=$e+me,fe=Xe-R,de=Ce+(Pe-R),he=$*$e/Y*T,De=Pt*$e/Y*T;q.projectionMatrix.makePerspective(fe,de,he,De,T,Y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;A.texture!==null&&(q.near=A.depthNear,q.far=A.depthFar),b.near=le.near=k.near=q.near,b.far=le.far=k.far=q.far,(U!==b.near||ce!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,ce=b.far,k.near=U,k.far=ce,le.near=U,le.far=ce,k.updateProjectionMatrix(),le.updateProjectionMatrix(),q.updateProjectionMatrix());const ae=q.parent,ge=b.cameras;J(b,ae);for(let Pe=0;Pe<ge.length;Pe++)J(ge[Pe],ae);ge.length===2?j(b,k,le):b.projectionMatrix.copy(k.projectionMatrix),W(q,b,ae)};function W(q,ae,ge){ge===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(S===null&&w===null))return p},this.setFoveation=function(q){p=q,S!==null&&(S.fixedFoveation=q),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=q)},this.hasDepthSensing=function(){return A.texture!==null};let L=null;function H(q,ae){if(v=ae.getViewerPose(m||h),E=ae,v!==null){const ge=v.views;w!==null&&(e.setRenderTargetFramebuffer(N,w.framebuffer),e.setRenderTarget(N));let Pe=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,Pe=!0);for(let Te=0;Te<ge.length;Te++){const tt=ge[Te];let $e=null;if(w!==null)$e=w.getViewport(tt);else{const Pt=x.getViewSubImage(S,tt);$e=Pt.viewport,Te===0&&(e.setRenderTargetTextures(N,Pt.colorTexture,S.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(N))}let $=pe[Te];$===void 0&&($=new ti,$.layers.enable(Te),$.viewport=new on,pe[Te]=$),$.matrix.fromArray(tt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(tt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set($e.x,$e.y,$e.width,$e.height),Te===0&&(b.matrix.copy($.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Pe===!0&&b.cameras.push($)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Te=x.getDepthInformation(ge[0]);Te&&Te.isValid&&Te.texture&&A.init(e,Te,o.renderState)}}for(let ge=0;ge<C.length;ge++){const Pe=D[ge],Re=C[ge];Pe!==null&&Re!==void 0&&Re.update(Pe,ae,m||h)}A.render(e,b),L&&L(q,ae),ae.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ae}),E=null}const we=new Vg;we.setAnimationLoop(H),this.setAnimationLoop=function(q){L=q},this.dispose=function(){}}}function A1(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,Bg(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,N,C,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),x(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_)):_.isMeshStandardMaterial?(l(y,_),S(y,_),_.isMeshPhysicalMaterial&&w(y,_,D)):_.isMeshMatcapMaterial?(l(y,_),E(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,N,C):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_).envMap;if(N&&(y.envMap.value=N,y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const C=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*C,t(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,N,C){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=C*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function w(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function R1(r,e,t,s){let o={},l={},h=[];const d=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(N,C){const D=C.program;s.uniformBlockBinding(N,D)}function m(N,C){let D=o[N.id];D===void 0&&(E(N),D=v(N),o[N.id]=D,N.addEventListener("dispose",y));const V=C.program;s.updateUBOMapping(N,V);const O=e.render.frame;l[N.id]!==O&&(S(N),l[N.id]=O)}function v(N){const C=x();N.__bindingPointIndex=C;const D=r.createBuffer(),V=N.__size,O=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,V,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,D),D}function x(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const C=o[N.id],D=N.uniforms,V=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let O=0,k=D.length;O<k;O++){const le=Array.isArray(D[O])?D[O]:[D[O]];for(let pe=0,b=le.length;pe<b;pe++){const U=le[pe];if(w(U,O,pe,V)===!0){const ce=U.__offset,ue=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let ne=0;ne<ue.length;ne++){const X=ue[ne],te=A(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,ce+B,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function w(N,C,D,V){const O=N.value,k=C+"_"+D;if(V[k]===void 0)return typeof O=="number"||typeof O=="boolean"?V[k]=O:V[k]=O.clone(),!0;{const le=V[k];if(typeof O=="number"||typeof O=="boolean"){if(le!==O)return V[k]=O,!0}else if(le.equals(O)===!1)return le.copy(O),!0}return!1}function E(N){const C=N.uniforms;let D=0;const V=16;for(let k=0,le=C.length;k<le;k++){const pe=Array.isArray(C[k])?C[k]:[C[k]];for(let b=0,U=pe.length;b<U;b++){const ce=pe[b],ue=Array.isArray(ce.value)?ce.value:[ce.value];for(let B=0,ne=ue.length;B<ne;B++){const X=ue[B],te=A(X),j=D%V;j!==0&&V-j<te.boundary&&(D+=V-j),ce.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=te.storage}}}const O=D%V;return O>0&&(D+=V-O),N.__size=D,N.__cache={},this}function A(N){const C={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=48,C.storage=48):N.isMatrix4?(C.boundary=64,C.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),C}function y(N){const C=N.target;C.removeEventListener("dispose",y);const D=h.indexOf(C.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function _(){for(const N in o)r.deleteBuffer(o[N]);h=[],o={},l={}}return{bind:p,update:m,dispose:_}}class Zg{constructor(e={}){const{canvas:t=y_(),context:s=null,depth:o=!0,stencil:l=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=h;const w=new Uint32Array(4),E=new Int32Array(4);let A=null,y=null;const _=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Rr,this.toneMappingExposure=1;const C=this;let D=!1,V=0,O=0,k=null,le=-1,pe=null;const b=new on,U=new on;let ce=null;const ue=new Ve(0);let B=0,ne=t.width,X=t.height,te=1,j=null,J=null;const W=new on(0,0,ne,X),L=new on(0,0,ne,X);let H=!1;const we=new Gg;let q=!1,ae=!1,ge=null;const Pe=new Kt,Re=new Et,Te=new K,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return k===null?te:1}let $=s;function Pt(P,Q){for(let se=0;se<P.length;se++){const oe=P[se],re=t.getContext(oe,Q);if(re!==null)return re}return null}try{const P={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gd}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Me,!1),$===null){const Q=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&Q.shift(),$=Pt(Q,P),$===null)throw Pt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let We,qe,Xe,Ce,me,R,T,Y,fe,de,he,De,ye,Ne,je,it,xe,et,rt,at,Ke,ze,lt,_t;function bt(){We=new Uw($),qe=new Rw($,We,e),We.init(qe),ze=new y1($,We,qe),Xe=new x1($,We,qe),Ce=new Ow($),me=new r1,R=new _1($,We,Xe,me,qe,ze,Ce),T=new Pw(C),Y=new Iw(C),fe=new W_($,qe),lt=new bw($,We,fe,qe),de=new Fw($,fe,Ce,lt),he=new Hw($,de,fe,Ce),rt=new jw($,qe,R),it=new Cw(me),De=new i1(C,T,Y,We,qe,lt,it),ye=new A1(C,me),Ne=new a1,je=new h1(We,qe),et=new Tw(C,T,Y,Xe,he,S,p),xe=new v1(C,he,qe),_t=new R1($,Ce,qe,Xe),at=new Aw($,We,Ce,qe),Ke=new kw($,We,Ce,qe),Ce.programs=De.programs,C.capabilities=qe,C.extensions=We,C.properties=me,C.renderLists=Ne,C.shadowMap=xe,C.state=Xe,C.info=Ce}bt();const dt=new b1(C,$);this.xr=dt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=We.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=We.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(P){P!==void 0&&(te=P,this.setSize(ne,X,!1))},this.getSize=function(P){return P.set(ne,X)},this.setSize=function(P,Q,se=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=P,X=Q,t.width=Math.floor(P*te),t.height=Math.floor(Q*te),se===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(ne*te,X*te).floor()},this.setDrawingBufferSize=function(P,Q,se){ne=P,X=Q,te=se,t.width=Math.floor(P*se),t.height=Math.floor(Q*se),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(W)},this.setViewport=function(P,Q,se,oe){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,Q,se,oe),Xe.viewport(b.copy(W).multiplyScalar(te).floor())},this.getScissor=function(P){return P.copy(L)},this.setScissor=function(P,Q,se,oe){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,Q,se,oe),Xe.scissor(U.copy(L).multiplyScalar(te).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(P){Xe.setScissorTest(H=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(P=!0,Q=!0,se=!0){let oe=0;if(P){let re=!1;if(k!==null){const Ie=k.texture.format;re=Ie===bg||Ie===Tg||Ie===Eg}if(re){const Ie=k.texture.type,Ye=Ie===Cr||Ie===br||Ie===Vd||Ie===is||Ie===wg||Ie===Mg,nt=et.getClearColor(),Fe=et.getClearAlpha(),ut=nt.r,ot=nt.g,ct=nt.b;Ye?(w[0]=ut,w[1]=ot,w[2]=ct,w[3]=Fe,$.clearBufferuiv($.COLOR,0,w)):(E[0]=ut,E[1]=ot,E[2]=ct,E[3]=Fe,$.clearBufferiv($.COLOR,0,E))}else oe|=$.COLOR_BUFFER_BIT}Q&&(oe|=$.DEPTH_BUFFER_BIT),se&&(oe|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ne.dispose(),je.dispose(),me.dispose(),T.dispose(),Y.dispose(),he.dispose(),lt.dispose(),_t.dispose(),De.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",vn),dt.removeEventListener("sessionend",wt),ge&&(ge.dispose(),ge=null),qt.stop()};function Tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const P=Ce.autoReset,Q=xe.enabled,se=xe.autoUpdate,oe=xe.needsUpdate,re=xe.type;bt(),Ce.autoReset=P,xe.enabled=Q,xe.autoUpdate=se,xe.needsUpdate=oe,xe.type=re}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function be(P){const Q=P.target;Q.removeEventListener("dispose",be),He(Q)}function He(P){Ze(P),me.remove(P)}function Ze(P){const Q=me.get(P).programs;Q!==void 0&&(Q.forEach(function(se){De.releaseProgram(se)}),P.isShaderMaterial&&De.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,se,oe,re,Ie){Q===null&&(Q=tt);const Ye=re.isMesh&&re.matrixWorld.determinant()<0,nt=sc(P,Q,se,oe,re);Xe.setMaterial(oe,Ye);let Fe=se.index,ut=1;if(oe.wireframe===!0){if(Fe=de.getWireframeAttribute(se),Fe===void 0)return;ut=2}const ot=se.drawRange,ct=se.attributes.position;let Lt=ot.start*ut,xn=(ot.start+ot.count)*ut;Ie!==null&&(Lt=Math.max(Lt,Ie.start*ut),xn=Math.min(xn,(Ie.start+Ie.count)*ut)),Fe!==null?(Lt=Math.max(Lt,0),xn=Math.min(xn,Fe.count)):ct!=null&&(Lt=Math.max(Lt,0),xn=Math.min(xn,ct.count));const Gt=xn-Lt;if(Gt<0||Gt===1/0)return;lt.setup(re,oe,nt,se,Fe);let En,vt=at;if(Fe!==null&&(En=fe.get(Fe),vt=Ke,vt.setIndex(En)),re.isMesh)oe.wireframe===!0?(Xe.setLineWidth(oe.wireframeLinewidth*$e()),vt.setMode($.LINES)):vt.setMode($.TRIANGLES);else if(re.isLine){let ht=oe.linewidth;ht===void 0&&(ht=1),Xe.setLineWidth(ht*$e()),re.isLineSegments?vt.setMode($.LINES):re.isLineLoop?vt.setMode($.LINE_LOOP):vt.setMode($.LINE_STRIP)}else re.isPoints?vt.setMode($.POINTS):re.isSprite&&vt.setMode($.TRIANGLES);if(re.isBatchedMesh)vt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)vt.renderInstances(Lt,Gt,re.count);else if(se.isInstancedBufferGeometry){const ht=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,_n=Math.min(se.instanceCount,ht);vt.renderInstances(Lt,Gt,_n)}else vt.render(Lt,Gt)};function St(P,Q,se){P.transparent===!0&&P.side===Wi&&P.forceSinglePass===!1?(P.side=Fn,P.needsUpdate=!0,Qi(P,Q,se),P.side=Lr,P.needsUpdate=!0,Qi(P,Q,se),P.side=Wi):Qi(P,Q,se)}this.compile=function(P,Q,se=null){se===null&&(se=P),y=je.get(se),y.init(),N.push(y),se.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),P!==se&&P.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(C._useLegacyLights);const oe=new Set;return P.traverse(function(re){const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ye=0;Ye<Ie.length;Ye++){const nt=Ie[Ye];St(nt,se,re),oe.add(nt)}else St(Ie,se,re),oe.add(Ie)}),N.pop(),y=null,oe},this.compileAsync=function(P,Q,se=null){const oe=this.compile(P,Q,se);return new Promise(re=>{function Ie(){if(oe.forEach(function(Ye){me.get(Ye).currentProgram.isReady()&&oe.delete(Ye)}),oe.size===0){re(P);return}setTimeout(Ie,10)}We.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let At=null;function Ht(P){At&&At(P)}function vn(){qt.stop()}function wt(){qt.start()}const qt=new Vg;qt.setAnimationLoop(Ht),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){At=P,dt.setAnimationLoop(P),P===null?qt.stop():qt.start()},dt.addEventListener("sessionstart",vn),dt.addEventListener("sessionend",wt),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Q),Q=dt.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,Q,k),y=je.get(P,N.length),y.init(),N.push(y),Pe.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),we.setFromProjectionMatrix(Pe),ae=this.localClippingEnabled,q=it.init(this.clippingPlanes,ae),A=Ne.get(P,_.length),A.init(),_.push(A),ln(P,Q,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(j,J),this.info.render.frame++,q===!0&&it.beginShadows();const se=y.state.shadowsArray;if(xe.render(se,P,Q),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),(dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1)&&et.render(A,P),y.setupLights(C._useLegacyLights),Q.isArrayCamera){const oe=Q.cameras;for(let re=0,Ie=oe.length;re<Ie;re++){const Ye=oe[re];ao(A,P,Ye,Ye.viewport)}}else ao(A,P,Q);k!==null&&(R.updateMultisampleRenderTarget(k),R.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(C,P,Q),lt.resetDefaultState(),le=-1,pe=null,N.pop(),N.length>0?y=N[N.length-1]:y=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function ln(P,Q,se,oe){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||we.intersectsSprite(P)){oe&&Te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Pe);const Ye=he.update(P),nt=P.material;nt.visible&&A.push(P,Ye,nt,se,Te.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||we.intersectsObject(P))){const Ye=he.update(P),nt=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Te.copy(P.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Te.copy(Ye.boundingSphere.center)),Te.applyMatrix4(P.matrixWorld).applyMatrix4(Pe)),Array.isArray(nt)){const Fe=Ye.groups;for(let ut=0,ot=Fe.length;ut<ot;ut++){const ct=Fe[ut],Lt=nt[ct.materialIndex];Lt&&Lt.visible&&A.push(P,Ye,Lt,se,Te.z,ct)}}else nt.visible&&A.push(P,Ye,nt,se,Te.z,null)}}const Ie=P.children;for(let Ye=0,nt=Ie.length;Ye<nt;Ye++)ln(Ie[Ye],Q,se,oe)}function ao(P,Q,se,oe){const re=P.opaque,Ie=P.transmissive,Ye=P.transparent;y.setupLightsView(se),q===!0&&it.setGlobalState(C.clippingPlanes,se),Ie.length>0&&Dr(re,Ie,Q,se),oe&&Xe.viewport(b.copy(oe)),re.length>0&&Ri(re,Q,se),Ie.length>0&&Ri(Ie,Q,se),Ye.length>0&&Ri(Ye,Q,se),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Dr(P,Q,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Ie=qe.isWebGL2;ge===null&&(ge=new os(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?eo:Cr,minFilter:ns,samples:Ie?4:0})),C.getDrawingBufferSize(Re),Ie?ge.setSize(Re.x,Re.y):ge.setSize(Id(Re.x),Id(Re.y));const Ye=C.getRenderTarget();C.setRenderTarget(ge),C.getClearColor(ue),B=C.getClearAlpha(),B<1&&C.setClearColor(16777215,.5),C.clear();const nt=C.toneMapping;C.toneMapping=Rr,Ri(P,se,oe),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let Fe=!1;for(let ut=0,ot=Q.length;ut<ot;ut++){const ct=Q[ut],Lt=ct.object,xn=ct.geometry,Gt=ct.material,En=ct.group;if(Gt.side===Wi&&Lt.layers.test(oe.layers)){const vt=Gt.side;Gt.side=Fn,Gt.needsUpdate=!0,Ir(Lt,se,oe,xn,Gt,En),Gt.side=vt,Gt.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),C.setRenderTarget(Ye),C.setClearColor(ue,B),C.toneMapping=nt}function Ri(P,Q,se){const oe=Q.isScene===!0?Q.overrideMaterial:null;for(let re=0,Ie=P.length;re<Ie;re++){const Ye=P[re],nt=Ye.object,Fe=Ye.geometry,ut=oe===null?Ye.material:oe,ot=Ye.group;nt.layers.test(se.layers)&&Ir(nt,Q,se,Fe,ut,ot)}}function Ir(P,Q,se,oe,re,Ie){P.onBeforeRender(C,Q,se,oe,re,Ie),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),re.onBeforeRender(C,Q,se,oe,P,Ie),re.transparent===!0&&re.side===Wi&&re.forceSinglePass===!1?(re.side=Fn,re.needsUpdate=!0,C.renderBufferDirect(se,Q,oe,re,P,Ie),re.side=Lr,re.needsUpdate=!0,C.renderBufferDirect(se,Q,oe,re,P,Ie),re.side=Wi):C.renderBufferDirect(se,Q,oe,re,P,Ie),P.onAfterRender(C,Q,se,oe,re,Ie)}function Qi(P,Q,se){Q.isScene!==!0&&(Q=tt);const oe=me.get(P),re=y.state.lights,Ie=y.state.shadowsArray,Ye=re.state.version,nt=De.getParameters(P,re.state,Ie,Q,se),Fe=De.getProgramCacheKey(nt);let ut=oe.programs;oe.environment=P.isMeshStandardMaterial?Q.environment:null,oe.fog=Q.fog,oe.envMap=(P.isMeshStandardMaterial?Y:T).get(P.envMap||oe.environment),ut===void 0&&(P.addEventListener("dispose",be),ut=new Map,oe.programs=ut);let ot=ut.get(Fe);if(ot!==void 0){if(oe.currentProgram===ot&&oe.lightsStateVersion===Ye)return lo(P,nt),ot}else nt.uniforms=De.getUniforms(P),P.onBuild(se,nt,C),P.onBeforeCompile(nt,C),ot=De.acquireProgram(nt,Fe),ut.set(Fe,ot),oe.uniforms=nt.uniforms;const ct=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ct.clippingPlanes=it.uniform),lo(P,nt),oe.needsLights=co(P),oe.lightsStateVersion=Ye,oe.needsLights&&(ct.ambientLightColor.value=re.state.ambient,ct.lightProbe.value=re.state.probe,ct.directionalLights.value=re.state.directional,ct.directionalLightShadows.value=re.state.directionalShadow,ct.spotLights.value=re.state.spot,ct.spotLightShadows.value=re.state.spotShadow,ct.rectAreaLights.value=re.state.rectArea,ct.ltc_1.value=re.state.rectAreaLTC1,ct.ltc_2.value=re.state.rectAreaLTC2,ct.pointLights.value=re.state.point,ct.pointLightShadows.value=re.state.pointShadow,ct.hemisphereLights.value=re.state.hemi,ct.directionalShadowMap.value=re.state.directionalShadowMap,ct.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ct.spotShadowMap.value=re.state.spotShadowMap,ct.spotLightMatrix.value=re.state.spotLightMatrix,ct.spotLightMap.value=re.state.spotLightMap,ct.pointShadowMap.value=re.state.pointShadowMap,ct.pointShadowMatrix.value=re.state.pointShadowMatrix),oe.currentProgram=ot,oe.uniformsList=null,ot}function oo(P){if(P.uniformsList===null){const Q=P.currentProgram.getUniforms();P.uniformsList=Wl.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function lo(P,Q){const se=me.get(P);se.outputColorSpace=Q.outputColorSpace,se.batching=Q.batching,se.instancing=Q.instancing,se.instancingColor=Q.instancingColor,se.skinning=Q.skinning,se.morphTargets=Q.morphTargets,se.morphNormals=Q.morphNormals,se.morphColors=Q.morphColors,se.morphTargetsCount=Q.morphTargetsCount,se.numClippingPlanes=Q.numClippingPlanes,se.numIntersection=Q.numClipIntersection,se.vertexAlphas=Q.vertexAlphas,se.vertexTangents=Q.vertexTangents,se.toneMapping=Q.toneMapping}function sc(P,Q,se,oe,re){Q.isScene!==!0&&(Q=tt),R.resetTextureUnits();const Ie=Q.fog,Ye=oe.isMeshStandardMaterial?Q.environment:null,nt=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Zi,Fe=(oe.isMeshStandardMaterial?Y:T).get(oe.envMap||Ye),ut=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ct=!!se.morphAttributes.position,Lt=!!se.morphAttributes.normal,xn=!!se.morphAttributes.color;let Gt=Rr;oe.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Gt=C.toneMapping);const En=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,vt=En!==void 0?En.length:0,ht=me.get(oe),_n=y.state.lights;if(q===!0&&(ae===!0||P!==pe)){const Tn=P===pe&&oe.id===le;it.setState(oe,P,Tn)}let Ft=!1;oe.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==_n.state.version||ht.outputColorSpace!==nt||re.isBatchedMesh&&ht.batching===!1||!re.isBatchedMesh&&ht.batching===!0||re.isInstancedMesh&&ht.instancing===!1||!re.isInstancedMesh&&ht.instancing===!0||re.isSkinnedMesh&&ht.skinning===!1||!re.isSkinnedMesh&&ht.skinning===!0||re.isInstancedMesh&&ht.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ht.instancingColor===!1&&re.instanceColor!==null||ht.envMap!==Fe||oe.fog===!0&&ht.fog!==Ie||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==it.numPlanes||ht.numIntersection!==it.numIntersection)||ht.vertexAlphas!==ut||ht.vertexTangents!==ot||ht.morphTargets!==ct||ht.morphNormals!==Lt||ht.morphColors!==xn||ht.toneMapping!==Gt||qe.isWebGL2===!0&&ht.morphTargetsCount!==vt)&&(Ft=!0):(Ft=!0,ht.__version=oe.version);let Pi=ht.currentProgram;Ft===!0&&(Pi=Qi(oe,Q,re));let uo=!1,vi=!1,Ji=!1;const Bt=Pi.getUniforms(),qn=ht.uniforms;if(Xe.useProgram(Pi.program)&&(uo=!0,vi=!0,Ji=!0),oe.id!==le&&(le=oe.id,vi=!0),uo||pe!==P){Bt.setValue($,"projectionMatrix",P.projectionMatrix),Bt.setValue($,"viewMatrix",P.matrixWorldInverse);const Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue($,Te.setFromMatrixPosition(P.matrixWorld)),qe.logarithmicDepthBuffer&&Bt.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Bt.setValue($,"isOrthographic",P.isOrthographicCamera===!0),pe!==P&&(pe=P,vi=!0,Ji=!0)}if(re.isSkinnedMesh){Bt.setOptional($,re,"bindMatrix"),Bt.setOptional($,re,"bindMatrixInverse");const Tn=re.skeleton;Tn&&(qe.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Bt.setValue($,"boneTexture",Tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Bt.setOptional($,re,"batchingTexture"),Bt.setValue($,"batchingTexture",re._matricesTexture,R));const ca=se.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&qe.isWebGL2===!0)&&rt.update(re,se,Pi),(vi||ht.receiveShadow!==re.receiveShadow)&&(ht.receiveShadow=re.receiveShadow,Bt.setValue($,"receiveShadow",re.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(qn.envMap.value=Fe,qn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),vi&&(Bt.setValue($,"toneMappingExposure",C.toneMappingExposure),ht.needsLights&&Ci(qn,Ji),Ie&&oe.fog===!0&&ye.refreshFogUniforms(qn,Ie),ye.refreshMaterialUniforms(qn,oe,te,X,ge),Wl.upload($,oo(ht),qn,R)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Wl.upload($,oo(ht),qn,R),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Bt.setValue($,"center",re.center),Bt.setValue($,"modelViewMatrix",re.modelViewMatrix),Bt.setValue($,"normalMatrix",re.normalMatrix),Bt.setValue($,"modelMatrix",re.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Tn=oe.uniformsGroups;for(let Ur=0,ho=Tn.length;Ur<ho;Ur++)if(qe.isWebGL2){const ls=Tn[Ur];_t.update(ls,Pi),_t.bind(ls,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Ci(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function co(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,Q,se){me.get(P.texture).__webglTexture=Q,me.get(P.depthTexture).__webglTexture=se;const oe=me.get(P);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Q){const se=me.get(P);se.__webglFramebuffer=Q,se.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(P,Q=0,se=0){k=P,V=Q,O=se;let oe=!0,re=null,Ie=!1,Ye=!1;if(P){const Fe=me.get(P);Fe.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer($.FRAMEBUFFER,null),oe=!1):Fe.__webglFramebuffer===void 0?R.setupRenderTarget(P):Fe.__hasExternalTextures&&R.rebindTextures(P,me.get(P.texture).__webglTexture,me.get(P.depthTexture).__webglTexture);const ut=P.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Ye=!0);const ot=me.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ot[Q])?re=ot[Q][se]:re=ot[Q],Ie=!0):qe.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?re=me.get(P).__webglMultisampledFramebuffer:Array.isArray(ot)?re=ot[se]:re=ot,b.copy(P.viewport),U.copy(P.scissor),ce=P.scissorTest}else b.copy(W).multiplyScalar(te).floor(),U.copy(L).multiplyScalar(te).floor(),ce=H;if(Xe.bindFramebuffer($.FRAMEBUFFER,re)&&qe.drawBuffers&&oe&&Xe.drawBuffers(P,re),Xe.viewport(b),Xe.scissor(U),Xe.setScissorTest(ce),Ie){const Fe=me.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,se)}else if(Ye){const Fe=me.get(P.texture),ut=Q||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Fe.__webglTexture,se||0,ut)}le=-1},this.readRenderTargetPixels=function(P,Q,se,oe,re,Ie,Ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(nt=nt[Ye]),nt){Xe.bindFramebuffer($.FRAMEBUFFER,nt);try{const Fe=P.texture,ut=Fe.format,ot=Fe.type;if(ut!==pi&&ze.convert(ut)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=ot===eo&&(We.has("EXT_color_buffer_half_float")||qe.isWebGL2&&We.has("EXT_color_buffer_float"));if(ot!==Cr&&ze.convert(ot)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ot===Xi&&(qe.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-oe&&se>=0&&se<=P.height-re&&$.readPixels(Q,se,oe,re,ze.convert(ut),ze.convert(ot),Ie)}finally{const Fe=k!==null?me.get(k).__webglFramebuffer:null;Xe.bindFramebuffer($.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(P,Q,se=0){const oe=Math.pow(2,-se),re=Math.floor(Q.image.width*oe),Ie=Math.floor(Q.image.height*oe);R.setTexture2D(Q,0),$.copyTexSubImage2D($.TEXTURE_2D,se,0,0,P.x,P.y,re,Ie),Xe.unbindTexture()},this.copyTextureToTexture=function(P,Q,se,oe=0){const re=Q.image.width,Ie=Q.image.height,Ye=ze.convert(se.format),nt=ze.convert(se.type);R.setTexture2D(se,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,se.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,se.unpackAlignment),Q.isDataTexture?$.texSubImage2D($.TEXTURE_2D,oe,P.x,P.y,re,Ie,Ye,nt,Q.image.data):Q.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,oe,P.x,P.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Ye,Q.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,oe,P.x,P.y,Ye,nt,Q.image),oe===0&&se.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(P,Q,se,oe,re=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=P.max.x-P.min.x+1,Ye=P.max.y-P.min.y+1,nt=P.max.z-P.min.z+1,Fe=ze.convert(oe.format),ut=ze.convert(oe.type);let ot;if(oe.isData3DTexture)R.setTexture3D(oe,0),ot=$.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)R.setTexture2DArray(oe,0),ot=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,oe.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,oe.unpackAlignment);const ct=$.getParameter($.UNPACK_ROW_LENGTH),Lt=$.getParameter($.UNPACK_IMAGE_HEIGHT),xn=$.getParameter($.UNPACK_SKIP_PIXELS),Gt=$.getParameter($.UNPACK_SKIP_ROWS),En=$.getParameter($.UNPACK_SKIP_IMAGES),vt=se.isCompressedTexture?se.mipmaps[re]:se.image;$.pixelStorei($.UNPACK_ROW_LENGTH,vt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,vt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,P.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,P.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?$.texSubImage3D(ot,re,Q.x,Q.y,Q.z,Ie,Ye,nt,Fe,ut,vt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(ot,re,Q.x,Q.y,Q.z,Ie,Ye,nt,Fe,vt.data)):$.texSubImage3D(ot,re,Q.x,Q.y,Q.z,Ie,Ye,nt,Fe,ut,vt),$.pixelStorei($.UNPACK_ROW_LENGTH,ct),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Lt),$.pixelStorei($.UNPACK_SKIP_PIXELS,xn),$.pixelStorei($.UNPACK_SKIP_ROWS,Gt),$.pixelStorei($.UNPACK_SKIP_IMAGES,En),re===0&&oe.generateMipmaps&&$.generateMipmap(ot),Xe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Xe.unbindTexture()},this.resetState=function(){V=0,O=0,k=null,Xe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wd?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?ss:Rg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?an:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class C1 extends Zg{}C1.prototype.isWebGL1Renderer=!0;class qd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new qd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class P1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qg extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new Kt,Fd=new Ig,Fl=new tc,kl=new K;class kd extends On{constructor(e=new gi,t=new Qg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(o),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;Jm.copy(o).invert(),Fd.copy(e.ray).applyMatrix4(Jm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,x=s.attributes.position;if(m!==null){const S=Math.max(0,h.start),w=Math.min(m.count,h.start+h.count);for(let E=S,A=w;E<A;E++){const y=m.getX(E);kl.fromBufferAttribute(x,y),eg(kl,y,p,o,e,t,this)}}else{const S=Math.max(0,h.start),w=Math.min(x.count,h.start+h.count);for(let E=S,A=w;E<A;E++)kl.fromBufferAttribute(x,E),eg(kl,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function eg(r,e,t,s,o,l,h){const d=Fd.distanceSqToPoint(r);if(d<t){const p=new K;Fd.closestPointToPoint(r,p),p.applyMatrix4(s);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class L1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let o=0;const l=s.length;let h;t?h=t:h=e*s[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=s[o]-h,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,s[o]===h)return o/(l-1);const v=s[o],S=s[o+1]-v,w=(h-v)/S;return(o+w)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const h=this.getPoint(o),d=this.getPoint(l),p=t||(h.isVector2?new Et:new K);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new K,o=[],l=[],h=[],d=new K,p=new Kt;for(let w=0;w<=e;w++){const E=w/e;o[w]=this.getTangentAt(E,new K)}l[0]=new K,h[0]=new K;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),x=Math.abs(o[0].y),S=Math.abs(o[0].z);v<=m&&(m=v,s.set(1,0,0)),x<=m&&(m=x,s.set(0,1,0)),S<=m&&s.set(0,0,1),d.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],d),h[0].crossVectors(o[0],l[0]);for(let w=1;w<=e;w++){if(l[w]=l[w-1].clone(),h[w]=h[w-1].clone(),d.crossVectors(o[w-1],o[w]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gn(o[w-1].dot(o[w]),-1,1));l[w].applyMatrix4(p.makeRotationAxis(d,E))}h[w].crossVectors(o[w],l[w])}if(t===!0){let w=Math.acos(gn(l[0].dot(l[e]),-1,1));w/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(w=-w);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],w*E)),h[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Yd(){let r=0,e=0,t=0,s=0;function o(l,h,d,p){r=l,e=d,t=-3*l+3*h-2*d-p,s=2*l-2*h+d+p}return{initCatmullRom:function(l,h,d,p,m){o(h,d,m*(d-l),m*(p-h))},initNonuniformCatmullRom:function(l,h,d,p,m,v,x){let S=(h-l)/m-(d-l)/(m+v)+(d-h)/v,w=(d-h)/v-(p-h)/(v+x)+(p-d)/x;S*=v,w*=v,o(h,d,S,w)},calc:function(l){const h=l*l,d=h*l;return r+e*l+t*h+s*d}}}const Ol=new K,_d=new Yd,yd=new Yd,Sd=new Yd;class Xl extends L1{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new K){const s=t,o=this.points,l=o.length,h=(l-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,v;this.closed||d>0?m=o[(d-1)%l]:(Ol.subVectors(o[0],o[1]).add(o[0]),m=Ol);const x=o[d%l],S=o[(d+1)%l];if(this.closed||d+2<l?v=o[(d+2)%l]:(Ol.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Ol),this.curveType==="centripetal"||this.curveType==="chordal"){const w=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(x),w),A=Math.pow(x.distanceToSquared(S),w),y=Math.pow(S.distanceToSquared(v),w);A<1e-4&&(A=1),E<1e-4&&(E=A),y<1e-4&&(y=A),_d.initNonuniformCatmullRom(m.x,x.x,S.x,v.x,E,A,y),yd.initNonuniformCatmullRom(m.y,x.y,S.y,v.y,E,A,y),Sd.initNonuniformCatmullRom(m.z,x.z,S.z,v.z,E,A,y)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(m.x,x.x,S.x,v.x,this.tension),yd.initCatmullRom(m.y,x.y,S.y,v.y,this.tension),Sd.initCatmullRom(m.z,x.z,S.z,v.z,this.tension));return s.set(_d.calc(p),yd.calc(p),Sd.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class N1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);const Mi={bg:new Ve("#04060a"),fog:new Ve("#04060a"),soil:new Ve("#241813"),soilDeep:new Ve("#0c0806"),scan:new Ve("#37e6d0"),node:new Ve("#7bffd6"),seed:new Ve("#8a5a32"),bark:new Ve("#5b4327"),barkTip:new Ve("#8fe6b0"),leaf:new Ve("#2f9e46"),leafGloss:new Ve("#7fffa8"),blossom:new Ve("#fff3c4"),appleUnripe:new Ve("#7cae3a"),appleRipe:new Ve("#cf2130"),appleBlush:new Ve("#f2544a")},as=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),qs=(r,e,t)=>r+(e-r)*t;function mn(r,e,t){const s=as((r-e)/(t-e));return s*s*(3-2*s)}function D1(r,e,t){const s=as((r-e)/(t-e));return Math.sin(s*Math.PI)}function I1(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function U1(r=7,e={}){const{trunkHeight:t=5.2,branchLenMul:s=1,tiltMul:o=1,leafCountMul:l=1,leafScaleMul:h=1}=e,d=I1(r),p=(_,N)=>_+d()*(N-_),m=[],v=[],x=[];let S=1e-4;function w(_,N,C,D,V,O,k){const pe=[],b=new K(0,1,0),U=new K(p(-1,1),0,p(-1,1)).normalize(),ce=O===0?0:p(.08,.22);_.clone(),N.clone().normalize().multiplyScalar(C/7);for(let W=0;W<=7;W++){const L=W/7,H=_.clone().addScaledVector(N.clone().normalize(),C*L);H.addScaledVector(U,Math.sin(L*Math.PI)*C*.06*p(.5,1.2)),H.y-=ce*C*L*L,pe.push(H)}const ue=new Xl(pe),B=k+C,ne={curve:ue,r0:D,r1:V,depth:O,startDist:k,endDist:B,gStart:0,gEnd:0};m.push(ne);const X=m.length-1;S=Math.max(S,B);const te=pe[pe.length-1],j=te.clone().sub(pe[pe.length-2]).normalize();if(O>=2){const W=Math.floor(p(3,7)*l);for(let L=0;L<W;L++){const H=p(.35,1),we=ue.getPoint(H),q=k+C*H,ge=new K(we.x,0,we.z).normalize().clone().lerp(b,.35).addScaledVector(new K(p(-1,1),p(-.3,1),p(-1,1)),.5).normalize();v.push({pos:we,normal:ge,scale:p(.7,1.25)*h,spin:p(0,Math.PI*2),growth:q,branchIndex:X,branchT:H})}}if(O>=2&&d()<.55){const W=te.clone();W.y-=V*2+.15,x.push({pos:W,scale:p(.8,1.15),growth:B,anchor:te.clone(),branchIndex:X})}if(O<4){const W=O===0?4:O===1?3:2;for(let L=0;L<W;L++){const H=O===0?p(.82,1):p(.45,.95),we=ue.getPoint(H),q=k+C*H,ae=L/W*Math.PI*2+p(-.5,.5),ge=(O===0?p(.5,.9):p(.6,1.15))*o,Pe=new K(Math.cos(ae)*Math.sin(ge),Math.cos(ge)+.35,Math.sin(ae)*Math.sin(ge)).normalize();Pe.lerp(j,.25).normalize();const Re=C*p(.55,.75)*s,Te=V*p(.7,.95),tt=Te*.55;w(we,Pe,Re,Te,tt,O+1,q)}}}w(new K(0,0,0),new K(.05,1,.02),t,.55,.34,0,0);for(const _ of m)_.gStart=_.startDist/S,_.gEnd=_.endDist/S;for(const _ of v)_.growth/=S;for(const _ of x)_.growth/=S;let E=0,A=-1/0;x.forEach((_,N)=>{const C=_.pos.y+_.pos.z*.4-Math.abs(_.pos.x)*.2;C>A&&(A=C,E=N)});const y=x.length?x[E].branchIndex:-1;return{branches:m,leaves:v,fruits:x,fallIndex:E,fallBranchIndex:y,maxDist:S}}function F1(r={}){return new Ai({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ja,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:r.size??2},uDrift:{value:r.drift??.14},uOpacity:{value:r.opacity??1},uFall:{value:1},uFallHeight:{value:r.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new Ve("#7cae3a")},uRipe:{value:new Ve("#cf2130")},uBlush:{value:new Ve("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
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
    `})}const zl=new K,ng=new oa,k1=new K(0,1,0);class Tr{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,t,s,o,l,h){this.pos.push(e,t,s),this.growth.push(o),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(h)}addCurve(e,t,s,o,l,h,d,p){for(let m=0;m<s;m++){const v=Math.random(),x=e.getPoint(v),S=t*(.3+Math.pow(Math.random(),.5))*1.1,w=Math.random()*Math.PI*2,E=(Math.random()-.5)*t;x.x+=Math.cos(w)*S,x.z+=Math.sin(w)*S,x.y+=E;const A=o+(l-o)*v;this.push(x.x,x.y,x.z,A,h,d+Math.random()*(p-d))}}addLeafPuff(e,t,s,o,l,h,d,p,m){ng.setFromUnitVectors(k1,t);for(let v=0;v<l;v++){const x=Math.pow(Math.random(),.75),S=Math.sin(Math.max(0,x)*Math.PI),w=(Math.random()*2-1)*S*o,E=x*s,A=(Math.random()*2-1)*S*o*.4;zl.set(w,E,A).applyQuaternion(ng).add(e),this.push(zl.x,zl.y,zl.z,h,d,p+Math.random()*(m-p))}}addBlob(e,t,s,o,l,h,d,p,m){for(let v=0;v<l;v++){const x=Math.random(),S=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1),E=Math.pow(x,.6),A=e.x+E*Math.sin(w)*Math.cos(S)*t,y=e.y+E*Math.cos(w)*s,_=e.z+E*Math.sin(w)*Math.sin(S)*o;this.push(A,y,_,h,d,p+Math.random()*(m-p))}}build(e){const t=new gi;t.setAttribute("position",new Un(this.pos,3)),t.setAttribute("aGrowth",new Un(this.growth,1)),t.setAttribute("aColor",new Un(this.color,3)),t.setAttribute("aRand",new Un(this.rand,1)),t.setAttribute("aSize",new Un(this.size,1));const s=new kd(t,e);return s.frustumCulled=!1,s}}const hi=(r,e,t)=>new K(r,e,t),Bl=hi(1.2,-1,0);class O1{constructor(e){this.scene=e,this.tree=U1(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Za,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const t=F1(e);return this.mats.push(t),t}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new qd(new Ve("#04060a"),.013);const t=1300,s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*46,s[l*3+1]=Math.random()*26-4,s[l*3+2]=(Math.random()-.5)*46;const o=new gi;o.setAttribute("position",new mi(s,3)),this.ambient=new kd(o,new Qg({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:Ja})),e.add(this.ambient)}buildWaveField(){const s=[],o=[];for(let h=0;h<176;h++)for(let d=0;d<176;d++){const p=-15+h/175*2*15,m=-15+d/175*2*15;Math.hypot(p,m)>15||(s.push(p,0,m),o.push(Math.random()))}const l=new gi;l.setAttribute("position",new Un(s,3)),l.setAttribute("aRand",new Un(o,1)),this.waveMat=new Ai({transparent:!0,depthWrite:!1,blending:Ja,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uRippleCenter:{value:new Et(0,0)},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new Ve("#0b3f7a")},uHigh:{value:new Ve("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
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
      `}),this.wave=new kd(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new Tr,t=new Ve("#5c3418"),s=.45;for(let o=0;o<3200;o++){const l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),d=.7+.3*Math.pow(Math.random(),.85);let p=Math.cos(l)*Math.sin(h)*d,m=Math.cos(h)*d,v=Math.sin(l)*Math.sin(h)*d;const x=(m+1)/2,S=1-.72*Math.pow(1-x,1.8);p*=.44*S,v*=.34*S,m*=.62,e.push(p,s+m,v,0,t,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new Tr,t=(x,S)=>x+Math.random()*(S-x),s=[];let o=.001;const l=(x,S,w,E,A,y)=>{const N=[],C=new K(t(-1,1),0,t(-1,1)).normalize(),D=S.clone().normalize();for(let le=0;le<=6;le++){const pe=le/6,b=x.clone().addScaledVector(D,w*pe);b.y-=Math.pow(pe,1.3)*w*.22,b.addScaledVector(C,Math.sin(pe*Math.PI)*w*.13*t(.4,1.1)),N.push(b)}const V=new Xl(N),O=E*.14,k=A+w;if(s.push({curve:V,r0:E,r1:O,startDist:A,endDist:k,depth:y}),o=Math.max(o,k),y<4){const le=y===0||Math.random()<.45?3:2;for(let pe=0;pe<le;pe++){const b=t(.35,.94),U=V.getPoint(b),ce=A+w*b,ue=t(0,Math.PI*2),B=t(.55,1.15),ne=new K(Math.cos(ue)*Math.sin(B),-Math.abs(Math.cos(B))-.3,Math.sin(ue)*Math.sin(B)).normalize(),X=w*t(.5,.72),te=qs(E,O,b)*t(.72,.95);l(U,ne,X,te,ce,y+1)}}};l(hi(0,-.4,0),hi(.05,-1,.03),2.6,.16,0,0);const h=Mi.seed.clone(),d=new Ve("#d9a066"),p=new Ve;for(const x of s){const S=x.startDist/o,w=x.endDist/o,E=x.curve.getLength(),A=Math.max(50,Math.floor(E*460));for(let y=0;y<A;y++){const _=Math.random(),N=x.curve.getPoint(_),C=qs(x.r0,x.r1,_),D=C*Math.pow(Math.random(),.6),V=Math.random()*Math.PI*2;N.x+=Math.cos(V)*D,N.z+=Math.sin(V)*D,N.y+=(Math.random()-.5)*C*.4,p.copy(h).lerp(d,_*.5);const O=qs(1.9,.45,_)*(x.depth>=2?.8:1);e.push(N.x,N.y,N.z,qs(S,w,_),p,O)}}const m=s[0],v=new Ve("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const x of this.nodeAlong){const S=m.curve.getPoint(x),w=(m.startDist+x*(m.endDist-m.startDist))/o;e.addBlob(S,.15,.15,.15,140,w,v,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new Tr,t=new Ve("#6fce63"),s=Mi.leafGloss.clone(),o=new Xl([hi(0,0,0),hi(.04,.5,.02),hi(-.03,1,-.02),hi(0,1.5,0)]);e.addCurve(o,.05,1100,0,.65,t,.8,1.8);const l=hi(0,1.5,0),h=hi(-.9,.7,.15).normalize(),d=hi(.9,.7,-.15).normalize();e.addLeafPuff(l,h,.85,.4,900,.72,s,.8,2),e.addLeafPuff(l,d,.85,.4,900,.78,s,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new Tr,t=new Ve("#8a6636"),s=new Ve("#5e441f"),o=new Ve;this.tree.branches.forEach((l,h)=>{const d=l.curve.getLength(),p=Math.max(l.r1,(l.r0+l.r1)*.5),m=l.depth===0?900:230,v=Math.floor(d*m)+40,x=l.depth===0?.15:.55;o.copy(t).lerp(s,x+Math.random()*.3);let S=l.curve;if(h===this.tree.fallBranchIndex){const w=l.curve.points,E=w.map((A,y)=>A.clone().addScaledVector(Bl,y/(w.length-1)));S=new Xl(E)}e.addCurve(S,p,v,l.gStart,l.gEnd,o,1,2.6)}),this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new Tr,t=Mi.leaf.clone(),s=Mi.leafGloss.clone(),o=new Ve,l=new K;for(const d of this.tree.leaves){l.add(d.pos),o.copy(t).lerp(s,Math.random()*.5);const p=1.15*d.scale,m=.55*d.scale,v=d.branchIndex===this.tree.fallBranchIndex?d.pos.clone().addScaledVector(Bl,d.branchT):d.pos;e.addLeafPuff(v,d.normal,p,m,70,d.growth,o,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const h=4.6;for(let d=0;d<16e3;d++){const p=new K(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),m=Math.pow(Math.random(),.6)*h,v=l.clone().addScaledVector(p,m);v.y+=(h-m)*.15,o.copy(t).lerp(s,Math.random()*.6);const x=as(.55+m/h*.45);e.push(v.x,v.y,v.z,x,o,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new Tr,t=Mi.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone().add(Bl),this.tree.fruits.forEach((s,o)=>{o!==this.fallIndex&&e.addBlob(s.pos,.42*s.scale,.36*s.scale,.42*s.scale,200,s.growth,t,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(Mi.appleUnripe),e.uniforms.uRipe.value.copy(Mi.appleRipe),e.uniforms.uBlush.value.copy(Mi.appleBlush)}buildBlossoms(){const e=new Tr,t=Mi.blossom.clone();this.tree.fruits.forEach((s,o)=>{const l=o===this.tree.fallIndex?s.anchor.clone().add(Bl):s.anchor;e.addBlob(l,.16,.16,.16,40,0,t,1.6,3.6)}),this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new Tr,t=Mi.appleRipe.clone();e.addBlob(hi(0,0,0),.44,.38,.44,340,0,t,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,t){for(const E of this.mats)E.uniforms.uTime.value=t;this.waveMat.uniforms.uTime.value=t;const s=mn(e,0,.1);this.seedMat.uniforms.uFall.value=s;const o=mn(e,.1,.28);this.seed.position.y=-o*.8;const l=mn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=qs(.55,.12,mn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*mn(e,.55,.72);let h=0,d=0;e<.5&&(h=mn(e,.08,.42),d=.7),this.rootMat.uniforms.uReveal.value=mn(e,.2,.4),this.roots.visible=e<.52;const p=mn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=p,this.seedlingMat.uniforms.uOpacity.value=1-mn(e,.56,.66),this.seedling.visible=p>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=mn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=mn(e,.56,.78);const m=mn(e,.72,.8)*(1-mn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=m,this.blossoms.visible=m>.01;const v=mn(e,.72,.86),x=mn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=v,this.fruitMat.uniforms.uRipen.value=x,this.fallMat.uniforms.uRipen.value=x;const S=as((e-.86)/(.94-.86)),w=S*S;this.fall.visible=v>.01,this.fall.position.set(this.fallAnchor.x,qs(this.fallAnchor.y,.3,w),this.fallAnchor.z),this.fall.rotation.z=S*3,e>=.94?(h=mn(e,.94,1),d=1.8,this.waveMat.uniforms.uRippleCenter.value.set(this.fallAnchor.x,this.fallAnchor.z)):this.waveMat.uniforms.uRippleCenter.value.set(0,0),this.waveMat.uniforms.uRipple.value=h,this.waveMat.uniforms.uRippleAmp.value=d,this.ambient.rotation.y=t*.008}}const Dn=(r,e,t)=>new K(r,e,t),jl=[{p:0,pos:Dn(0,6.5,21),tgt:Dn(0,1.6,0)},{p:.16,pos:Dn(2.2,5.2,18),tgt:Dn(0,.6,0)},{p:.34,pos:Dn(4.5,-1.2,14),tgt:Dn(0,-2.4,0)},{p:.5,pos:Dn(2.6,2.6,13),tgt:Dn(0,1.2,0)},{p:.72,pos:Dn(-3.2,7.5,27),tgt:Dn(0,7,0)},{p:.86,pos:Dn(6,11.5,23),tgt:Dn(.4,9.5,0)},{p:1,pos:Dn(0,8.5,34),tgt:Dn(0,8,0)}],z1=r=>r*r*(3-2*r);function B1(r){return r<.2?0:r<.4?1:r<.58?2:r<.78?3:4}function j1(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function H1(r){r.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(s=>{Object.values(s).forEach(o=>{o&&o.isTexture&&o.dispose()}),s.dispose()})})}function G1({sectionRef:r,onStageChange:e,onAnnotationChange:t,onWebGLUnavailable:s}){const o=Ae.useRef(null),l=Ae.useRef(e);l.current=e;const h=Ae.useRef(t);h.current=t;const d=Ae.useRef(s);return d.current=s,Ae.useEffect(()=>{const p=o.current,m=r.current;if(!p||!m)return;const v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let x;try{x=new Zg({canvas:p,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{d.current&&d.current();return}x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(window.innerWidth,window.innerHeight),x.setClearColor(0,0),x.toneMapping=_g,x.toneMappingExposure=1.1;const S=new P1,w=new ti(50,window.innerWidth/window.innerHeight,.1,400);w.position.set(0,5,12);const E=new O1(S);let A=!1;const y=new K,_=new K,N=(X,te)=>{let j=0;for(;j<jl.length-2&&X>jl[j+1].p;)j++;const J=jl[j],W=jl[j+1],L=z1(as((X-J.p)/(W.p-J.p)));y.lerpVectors(J.pos,W.pos,L),_.lerpVectors(J.tgt,W.tgt,L);const H=D1(X,.5,.72);_.y+=H*1.7,y.y+=H*.9,y.z+=H*3.2,y.x+=Math.sin(te*.22)*.3,y.y+=Math.cos(te*.18)*.18,A&&y.sub(_).multiplyScalar(1.28).add(_),w.position.copy(y),w.lookAt(_)},C=()=>{const X=window.innerWidth,te=window.innerHeight;A=X<821,w.aspect=X/te,w.clearViewOffset(),x.setSize(X,te),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),A?w.setViewOffset(X,te,0,te*.2,X,te):w.setViewOffset(X,te,X*.22,0,X,te),w.updateProjectionMatrix()};C();const D=()=>{const X=m.getBoundingClientRect(),te=m.offsetHeight-window.innerHeight,j=as(-X.top,0,Math.max(0,te));return te>0?as(j/te):0};let V=-1,O=-1;const k=X=>{const te=B1(X);te!==V&&(V=te,l.current&&l.current(te));const j=j1(X);j!==O&&(O=j,h.current&&h.current(j))},le=new N1;let pe=D(),b=null;const U=()=>{const X=D();pe=X,E.update(X,0),N(X,0),k(X),x.render(S,w)},ce=()=>{const X=Math.min(le.getDelta(),.05),te=le.elapsedTime,j=D(),J=1-Math.pow(.0015,X);pe+=(j-pe)*J,E.update(pe,te),N(pe,te),k(pe),x.render(S,w),b=requestAnimationFrame(ce)},ue=()=>{C(),v&&U()};window.addEventListener("resize",ue);const B=X=>{X.preventDefault(),b&&(cancelAnimationFrame(b),b=null)};p.addEventListener("webglcontextlost",B,!1);let ne=null;return v?(ne=()=>U(),window.addEventListener("scroll",ne,{passive:!0}),U()):b=requestAnimationFrame(ce),()=>{var X;b&&cancelAnimationFrame(b),window.removeEventListener("resize",ue),ne&&window.removeEventListener("scroll",ne),p.removeEventListener("webglcontextlost",B,!1),H1(S),S.clear(),x.dispose(),(X=x.forceContextLoss)==null||X.call(x)}},[r]),u.jsx("canvas",{ref:o,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class Jg extends ta.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){const{error:e}=this.state;if(e){const{fallback:t}=this.props;return typeof t=="function"?t(e):t!==void 0?t:null}return this.props.children}}const V1=560,W1=[0,-1.5,1.5,-2,2],X1=[0,-6,5,-5,6];function q1(r,e,t){const s=t?"0px":"-50%";if(r<=e){const l=W1[r]??0;return{transform:`translate(${X1[r]??0}px, ${t?"0px":s}) rotate(${l}deg)`,opacity:1,zIndex:10+r}}return{transform:`translate(0, ${t?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function Y1({card:r,style:e}){return u.jsxs("article",{className:"story-card",style:e,children:[u.jsx("div",{className:"sc-accent"}),u.jsxs("div",{className:"sc-body",children:[u.jsx("p",{className:"sc-num",children:r.num}),u.jsx("h3",{className:"sc-title",children:r.title}),r.callout&&u.jsxs("div",{className:"sc-callout",children:[u.jsx("span",{className:"sc-callout-label",children:r.callout.label}),u.jsx("p",{className:"sc-callout-text",children:r.callout.text})]}),u.jsx("div",{className:"sc-chips",children:r.human.map(t=>u.jsx("span",{className:"chip chip-human",children:t},t))}),u.jsxs("div",{className:"sc-ai",children:[u.jsxs("div",{className:"sc-ai-head",children:[u.jsx("span",{className:"sc-ai-star",children:"✦"}),u.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),u.jsx("div",{className:"sc-chips",style:{margin:0},children:r.ai.map(t=>u.jsx("span",{className:"chip chip-ai",children:t},t))})]})]})]})}function $1(){const r=Ae.useRef(null),{theme:e}=mg(),[t,s]=Ae.useState(0),[o,l]=Ae.useState(typeof window<"u"?window.innerWidth<821:!1);Ae.useEffect(()=>{const x=()=>l(window.innerWidth<821);return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const h=Ae.useCallback(x=>s(x),[]),[d,p]=Ae.useState(!1),m=Ae.useCallback(()=>p(!0),[]),v=Ae.useRef(null);return u.jsxs("section",{id:"practice",ref:r,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(64px,9vw,120px) clamp(22px,5vw,44px) clamp(40px,6vw,72px)"},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"Practice"}),u.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),u.jsx("div",{ref:v,style:{position:"relative",height:`${V1}vh`},children:u.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[d&&u.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),u.jsx(Jg,{fallback:null,children:u.jsx(G1,{sectionRef:v,onStageChange:h,onWebGLUnavailable:m})}),u.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:u.jsx("div",{className:"practice-card-shell",children:nx.map((x,S)=>u.jsx(Y1,{card:x,style:q1(S,t,o)},x.id))})})]})}),u.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const Hl={fontFamily:"var(--font-mono)"};function K1(){return u.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[u.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[u.jsx("div",{style:{...Hl,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"Instruments"}),u.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."}),u.jsxs("p",{style:{fontFamily:"var(--font-body)",fontSize:"clamp(15px,1.6vw,17px)",lineHeight:1.55,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"52ch"},children:["Three tools I designed and built for my own workflow — then published to the"," ",u.jsx("span",{style:{color:"var(--text-primary)"},children:"Figma Community"}),", where other designers use them too."]})]}),u.jsx("div",{className:"instruments-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)",transitionDelay:"0.12s"},children:ix.map(r=>u.jsxs("a",{href:r.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${r.alt} on the Figma Community`,className:"instrument-card",style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)",color:"inherit"},children:[u.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:u.jsx("img",{src:r.logo,alt:r.alt,className:"theme-logo",style:{...r.logoStyle,opacity:1}})}),u.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[u.jsx("div",{style:{...Hl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:r.problem}),u.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),u.jsx("div",{style:{...Hl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:r.result}),u.jsxs("div",{className:"instrument-cta",style:{...Hl,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginTop:20,display:"flex",alignItems:"center",gap:6},children:["View on Figma Community ",u.jsx("span",{className:"instrument-cta-arrow","aria-hidden":"true",children:"↗"})]})]})]},r.id))})]})})}const Z1=144,ig=40;function Q1(r){const[e,t]=Ae.useState(-1),s=Ae.useCallback(h=>t(h),[]),o=Ae.useCallback(()=>t(-1),[]),l=Ae.useCallback((h,d)=>{const p=h*Z1,m=r[h%r.length];if(e===-1)return{x:p,rot:m,scale:1,z:h};const v=h-e;return v===0?{x:p,rot:0,scale:1.04,z:100}:{x:p+(v<0?-ig:ig),rot:m,scale:.98,z:50-Math.abs(v)}},[e,r]);return{activeIndex:e,focus:s,rest:o,getTransform:l}}const J1=Md.map(r=>r.rot);function eE(){const{focus:r,rest:e,getTransform:t}=Q1(J1),s=Md.length;return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...rg,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),u.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:u.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:Md.map((o,l)=>{const h=t(l,s);return u.jsxs("article",{onMouseEnter:()=>r(l),onClick:()=>r(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${h.x}px) rotate(${h.rot}deg) scale(${h.scale})`,zIndex:h.z},children:[u.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:o.quote}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[u.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...rg,fontSize:10,fontWeight:700,flex:"none"},children:o.initials}),u.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[u.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:o.name}),u.jsx("br",{}),u.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:o.title})]})]})]},o.id)})})}),u.jsx("div",{style:{marginTop:16,textAlign:"right"},children:u.jsxs("a",{href:rx,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",u.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const rg={fontFamily:"var(--font-mono)"},sg={fontFamily:"var(--font-mono)"};function tE(){return u.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[u.jsx("div",{style:{...sg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),u.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[u.jsxs("div",{children:[u.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[wi.quoteLead,u.jsx("span",{style:{color:"var(--accent)"},children:wi.quoteAccent}),wi.quoteTail]}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:wi.paragraphs[0]}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:wi.paragraphs[1]})]}),u.jsxs("div",{children:[u.jsxs("div",{style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[u.jsx("img",{src:wi.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),u.jsxs("div",{style:{padding:"16px 18px"},children:[u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),u.jsx("div",{style:{...sg,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),u.jsx("div",{style:{marginTop:14},children:wi.facts.map(r=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[u.jsx("span",{style:{color:"var(--text-secondary)"},children:r.label}),u.jsx("span",{style:{color:r.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:r.value})]},r.label))}),u.jsx("a",{href:wi.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),u.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:u.jsx(eE,{})}),u.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[wi.careerLine,u.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:wi.careerHighlight})]})]})})}const ag={fontFamily:"var(--font-mono)"};function nE(){return u.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[u.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[u.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),u.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[u.jsx("div",{"data-reveal":"",style:{...ag,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),u.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[Ys.heading," ",u.jsx("span",{style:{color:"var(--accent)"},children:Ys.headingAccent})]}),u.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:Ys.links.map(r=>u.jsx("a",{href:r.href,className:`text-link ${r.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:r.variant==="primary"?{paddingBottom:3}:void 0,...r.external?{target:"_blank",rel:"noopener noreferrer"}:{},...r.download?{download:!0}:{},children:r.label},r.label))}),u.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...ag,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:Ys.copyright})]})]})}function ev(r){Ae.useEffect(()=>{const e=r.current;if(!e||typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.setAttribute("data-reveal","visible"),t.unobserve(o.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(s=>t.observe(s)),()=>t.disconnect()},[r])}function iE(){const r=Ae.useRef(null);return ev(r),Ae.useEffect(()=>{const e=window.location.hash.slice(1);if(!e)return;let t=!1;const s=()=>{t=!0};window.addEventListener("wheel",s,{passive:!0,once:!0}),window.addEventListener("touchmove",s,{passive:!0,once:!0});const o=[0,120,300,600].map(l=>setTimeout(()=>{var h;t||(h=document.getElementById(e))==null||h.scrollIntoView()},l));return()=>{o.forEach(clearTimeout),window.removeEventListener("wheel",s),window.removeEventListener("touchmove",s)}},[]),u.jsxs("div",{id:"top",ref:r,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[u.jsx(gg,{}),u.jsxs("main",{children:[u.jsx(dx,{}),u.jsx(yx,{}),u.jsx($1,{}),u.jsx(K1,{}),u.jsx(tE,{})]}),u.jsx(nE,{})]})}const Od={},tv=ta.createContext(Od);function so(r){const e=ta.useContext(tv);return ta.useMemo(function(){return typeof r=="function"?r(e):{...e,...r}},[e,r])}function rE(r){let e;return r.disableParentContext?e=typeof r.components=="function"?r.components(Od):r.components||Od:e=so(r.components),ta.createElement(tv.Provider,{value:e},r.children)}function nv(){return u.jsx(gg,{subpage:!0})}const xt=r=>u.jsx("path",{d:r},r),sE={user:[xt("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"),u.jsx("circle",{cx:"12",cy:"7",r:"4"},"c")],users:[xt("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"),u.jsx("circle",{cx:"9",cy:"7",r:"4"},"c"),xt("M22 21v-2a4 4 0 0 0-3-3.87"),xt("M16 3.13a4 4 0 0 1 0 7.75")],pin:[xt("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"),u.jsx("circle",{cx:"12",cy:"10",r:"3"},"c")],device:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),xt("M12 18h.01")],calendar:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"},"r"),xt("M16 2v4M8 2v4M3 10h18")],wrench:[xt("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")],rocket:[xt("M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"),xt("M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"),xt("M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"),xt("M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5")],trendUp:[u.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"},"a"),u.jsx("polyline",{points:"16 7 22 7 22 13"},"b")],cube:[xt("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"),xt("M3.27 6.96 12 12.01l8.73-5.05"),xt("M12 22.08V12")],layers:[u.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"},"a"),u.jsx("polyline",{points:"2 17 12 22 22 17"},"b"),u.jsx("polyline",{points:"2 12 12 17 22 12"},"c")],check:[xt("M22 11.08V12a10 10 0 1 1-5.93-9.14"),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"},"p")],ban:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),u.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},"l")],shield:[xt("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],zap:[u.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},"p")],alert:[xt("M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"),u.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"},"a"),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},"b")],compass:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},"p")],eye:[xt("M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"),u.jsx("circle",{cx:"12",cy:"12",r:"3"},"c")],refresh:[xt("M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"),xt("M21 3v5h-5"),xt("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"),xt("M8 16H3v5")],merge:[u.jsx("circle",{cx:"18",cy:"18",r:"3"},"a"),u.jsx("circle",{cx:"6",cy:"6",r:"3"},"b"),xt("M6 21V9a9 9 0 0 0 9 9")],minimize:[u.jsx("polyline",{points:"4 14 10 14 10 20"},"a"),u.jsx("polyline",{points:"20 10 14 10 14 4"},"b"),u.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"},"c"),u.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"},"d")],sliders:[u.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"},"a"),u.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"},"b"),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"},"c"),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"},"d"),u.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"},"e"),u.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"},"f"),u.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"},"g"),u.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"},"h"),u.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"},"i")],filter:[u.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},"p")],sparkles:[xt("M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7L12 3z"),xt("M19 15l.6 1.6L21 17.2l-1.4.6L19 19l-.6-1.6L17 17.8l1.4-.6L19 15z")],flask:[xt("M9 3h6"),xt("M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3"),xt("M7 15h10")],chart:[u.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"},"a"),u.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"},"b"),u.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"},"c")],flag:[xt("M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"),u.jsx("line",{x1:"4",y1:"22",x2:"4",y2:"15"},"l")],target:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"a"),u.jsx("circle",{cx:"12",cy:"12",r:"6"},"b"),u.jsx("circle",{cx:"12",cy:"12",r:"2"},"c")],smartphone:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),xt("M12 18h.01")],lightbulb:[xt("M9 18h6"),xt("M10 22h4"),xt("M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14")]},og={quote:"M9.5 5C6.5 5 4 7.5 4 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.6 19.5 13 16 13 10.6 13 7.3 11.6 5 9.5 5Zm10 0C16.5 5 14 7.5 14 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.6 19.5 23 16 23 10.6 23 7.3 21.6 5 19.5 5Z"};function Nr({name:r,size:e=18,strokeWidth:t=1.75,className:s,style:o,...l}){if(og[r])return u.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false",...l,children:u.jsx("path",{d:og[r]})});const h=sE[r];return h?u.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...l,children:h}):null}const iv=Ae.createContext({});function zd(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(zd).join(" "):r&&r.props?zd(r.props.children):""}function rv(r){return zd(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function aE({children:r,eyebrow:e,icon:t,id:s,...o}){const l=s||rv(r),h=Ae.useContext(iv),d=t||h[l];return u.jsxs("div",{className:"cs-heading",id:l,...o,children:[u.jsxs("div",{className:"cs-heading-eyebrow",children:[u.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),d?u.jsx(Nr,{name:d,size:14,className:"cs-heading-icon"}):null,e?u.jsx("span",{children:e}):null]}),u.jsx("h2",{className:"cs-heading-title",children:u.jsx("a",{href:`#${l}`,className:"cs-heading-anchor",children:r})})]})}function oE({children:r,id:e,...t}){const s=e||rv(r);return u.jsx("h3",{className:"cs-subheading",id:s,...t,children:r})}function sv({label:r="The outcome",icon:e="rocket",items:t=[],...s}){return u.jsxs("section",{className:"cs-outcomeband","aria-label":r,...s,children:[u.jsxs("div",{className:"cs-outcomeband-label",children:[u.jsx(Nr,{name:e,size:15}),u.jsx("span",{children:r})]}),u.jsx("div",{className:"cs-outcomeband-list",children:t.map((o,l)=>u.jsxs("div",{className:"cs-outcome",children:[u.jsx("span",{className:"cs-outcome-icon","aria-hidden":"true",children:u.jsx(Nr,{name:o.icon,size:20})}),u.jsx("div",{className:"cs-outcome-text",children:o.text})]},l))})]})}function gt({children:r,lead:e=!1,className:t="",...s}){return u.jsx("div",{className:`cs-prose${e?" cs-prose--lead":""}${t?` ${t}`:""}`,...s,children:r})}function Zs({children:r,variant:e="principle",cite:t,...s}){const o=e==="user"?"user":"principle";return u.jsxs("figure",{className:`cs-pullquote cs-pullquote--${o}`,...s,children:[o==="user"?u.jsx("span",{className:"cs-pullquote-glyph","aria-hidden":"true",children:u.jsx(Nr,{name:"quote",size:40})}):u.jsx("span",{className:"cs-pullquote-chip","aria-hidden":"true",children:u.jsx(Nr,{name:"lightbulb",size:18})}),u.jsx("blockquote",{className:"cs-pullquote-text",children:r}),t?u.jsx("figcaption",{className:"cs-pullquote-cite",children:t}):null]})}function Pr({src:r,alt:e="",loading:t="lazy"}){const[s,o]=Ae.useState(!1);return r&&!s?u.jsx("span",{className:"cs-figure-media",children:u.jsx("img",{src:r,alt:e,loading:t,decoding:"async",onError:()=>o(!0)})}):u.jsx(lE,{alt:e,file:r})}function lE({alt:r="",file:e,bare:t=!1}){const s=typeof e=="string"?e.split("/").pop():null;return u.jsxs("div",{className:`cs-placeholder${t?" cs-placeholder--bare":""}`,role:"img","aria-label":r||"Image placeholder",children:[u.jsx("span",{className:"cs-placeholder-tag",children:"Image"}),r?u.jsx("span",{className:"cs-placeholder-alt",children:r}):null,s?u.jsx("span",{className:"cs-placeholder-file",children:s}):null]})}function Ti({src:r,alt:e="",caption:t,fullBleed:s=!1,wide:o=!1,...l}){const h=`cs-figure${s?" cs-figure--full":o?" cs-figure--wide":""}`;return u.jsxs("figure",{className:h,...l,children:[u.jsx(Pr,{src:r,alt:e}),t?u.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function av({src:r,alt:e="",chip:t,secondary:s,bare:o,...l}){const h=["cs-hero",s&&!o?"cs-hero--multi":"",o?"cs-hero--bare":""].filter(Boolean).join(" ");return u.jsxs("div",{className:h,...l,children:[u.jsx("span",{className:"cs-hero-grid","aria-hidden":"true"}),u.jsx("span",{className:"cs-hero-glow","aria-hidden":"true"}),u.jsx("div",{className:"cs-hero-stage",children:o?u.jsx(Pr,{src:r,alt:e,loading:"eager"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"cs-hero-device cs-hero-device--tablet",children:u.jsx("div",{className:"cs-hero-screen",children:u.jsx(Pr,{src:r,alt:e,loading:"eager"})})}),s?u.jsx("div",{className:"cs-hero-device cs-hero-device--phone",children:u.jsx("div",{className:"cs-hero-screen cs-hero-screen--phone",children:u.jsx(Pr,{src:s.src,alt:s.alt})})}):null]})}),t?u.jsxs("span",{className:"cs-hero-chip",children:[u.jsx("span",{className:"cs-hero-chip-dot","aria-hidden":"true"}),t]}):null]})}function cE({items:r=[],caption:e,...t}){const s=Math.min(Math.max(r.length,1),4);return u.jsxs("figure",{className:"cs-illrow",style:{"--cs-cols":s},...t,children:[u.jsx("div",{className:"cs-illrow-grid",children:r.map((o,l)=>u.jsxs("div",{className:"cs-illrow-cell",children:[u.jsx(Pr,{src:o.src,alt:o.alt}),o.title||o.tag?u.jsxs("div",{className:"cs-illrow-meta",children:[o.title?u.jsx("div",{className:"cs-illrow-title",children:o.title}):null,o.tag?u.jsx("span",{className:`cs-illrow-tag cs-illrow-tag--${o.tone||"neutral"}`,children:o.tag}):null]}):null]},l))}),e?u.jsx("figcaption",{className:"cs-caption",children:e}):null]})}function uE({before:r={},after:e={},caption:t,beforeLabel:s="Before",afterLabel:o="After",...l}){return u.jsxs("figure",{className:"cs-beforeafter",...l,children:[u.jsxs("div",{className:"cs-beforeafter-grid",children:[u.jsxs("div",{className:"cs-ba-col",children:[u.jsx("span",{className:"cs-ba-tag cs-ba-tag--before",children:s}),u.jsx(Pr,{src:r.src,alt:r.alt})]}),u.jsxs("div",{className:"cs-ba-col",children:[u.jsx("span",{className:"cs-ba-tag cs-ba-tag--after",children:o}),u.jsx(Pr,{src:e.src,alt:e.alt})]})]}),t?u.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function qi({title:r,index:e,media:t,tradeoff:s,children:o,...l}){return u.jsxs("section",{className:"cs-decision",...l,children:[u.jsxs("div",{className:"cs-decision-rail",children:[e?u.jsx("div",{className:"cs-decision-index",children:e}):null,r?u.jsx("h3",{className:"cs-decision-title",children:r}):null]}),u.jsxs("div",{className:"cs-decision-main",children:[u.jsx("div",{className:"cs-decision-body",children:o}),t?u.jsxs("div",{className:"cs-decision-media",children:[u.jsx(Pr,{src:t.src,alt:t.alt}),t.caption?u.jsx("div",{className:"cs-caption",children:t.caption}):null]}):null,s?u.jsxs("div",{className:"cs-tradeoff",children:[s.considered?u.jsxs("div",{className:"cs-tradeoff-row",children:[u.jsx("span",{className:"cs-tradeoff-label",children:"Alternative considered"}),u.jsx("p",{className:"cs-tradeoff-text",children:s.considered})]}):null,s.why?u.jsxs("div",{className:"cs-tradeoff-row",children:[u.jsx("span",{className:"cs-tradeoff-label",children:"Why we didn’t"}),u.jsx("p",{className:"cs-tradeoff-text",children:s.why})]}):null]}):null]})]})}function dE(r){return typeof r=="string"||typeof r=="number"?String(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""):""}function ov({heading:r,eyebrow:e,icon:t,intro:s,coda:o,id:l,children:h,...d}){const p=l||dE(r);return u.jsxs("section",{className:"cs-decisionlist",id:p,...d,children:[u.jsxs("div",{className:"cs-decisionlist-head",children:[u.jsxs("div",{className:"cs-heading-eyebrow",children:[u.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),t?u.jsx(Nr,{name:t,size:14,className:"cs-heading-icon"}):null,e?u.jsx("span",{children:e}):null]}),r?u.jsx("h2",{className:"cs-decisionlist-title",children:u.jsx("a",{href:`#${p}`,className:"cs-heading-anchor",children:r})}):null,s?u.jsx("div",{className:"cs-prose cs-decisionlist-intro",children:s}):null]}),u.jsx("div",{className:"cs-decisionlist-rows",children:h}),o?u.jsxs("div",{className:"cs-decisionlist-coda",children:[o.title?u.jsx("h3",{className:"cs-subheading cs-decisionlist-coda-title",children:o.title}):null,o.body?u.jsx("div",{className:"cs-prose cs-decisionlist-coda-body",children:o.body}):null]}):null]})}function lg({caption:r,head:e=[],rows:t=[],rowHeader:s=!0,minWidth:o,...l}){return u.jsx("div",{className:"cs-table-wrap",...l,children:u.jsx("div",{className:"cs-table-scroll",children:u.jsxs("table",{className:"cs-table",style:o?{minWidth:o}:void 0,children:[r?u.jsx("caption",{children:r}):null,e.length?u.jsx("thead",{children:u.jsx("tr",{children:e.map((h,d)=>u.jsx("th",{scope:"col",children:h},d))})}):null,u.jsx("tbody",{children:t.map((h,d)=>u.jsx("tr",{children:h.map((p,m)=>m===0&&s?u.jsx("th",{scope:"row",children:p},m):u.jsx("td",{children:p},m))},d))})]})})})}function hE({items:r=[],...e}){return u.jsx("div",{className:"cs-metricrow",...e,children:u.jsx("div",{className:"cs-metricrow-grid",children:r.map((t,s)=>u.jsxs("div",{className:"cs-metric",children:[t.icon?u.jsx("span",{className:"cs-metric-icon","aria-hidden":"true",children:u.jsx(Nr,{name:t.icon,size:18})}):null,t.value!=null?u.jsx("div",{className:`cs-metric-value${t.valueText?" cs-metric-value--text":""}`,children:t.value}):null,t.label?u.jsx("div",{className:"cs-metric-label",children:t.label}):null,t.note?u.jsx("div",{className:"cs-metric-note",children:t.note}):null]},s))})})}const fE={h2:r=>u.jsx(aE,{...r}),h3:r=>u.jsx(oE,{...r})},pE={Role:"user",Team:"users",Region:"pin",Platform:"device",Timeline:"calendar",Tools:"wrench"};function mE({meta:r={},next:e,children:t}){const{title:s,subtitle:o,tags:l=[],glance:h=[],accent:d}=r,p=d?{"--cs-accent":d}:void 0,m=Ae.useRef(null);return Ae.useEffect(()=>{const v=m.current;v&&v.querySelectorAll(".cs-content > *").forEach(x=>{!x.classList.contains("cs-figure--full")&&!x.classList.contains("cs-hero")&&x.setAttribute("data-reveal","")})},[]),ev(m),u.jsxs("div",{className:"cs-page",style:p,ref:m,children:[u.jsx(gE,{}),u.jsx(nv,{}),u.jsxs("main",{children:[u.jsxs("header",{className:"cs-wrap",children:[u.jsxs("div",{className:"cs-masthead",children:[l.length?u.jsx("div",{className:"cs-tags",children:l.join("  ·  ")}):null,s?u.jsx("h1",{className:"cs-title",children:s}):null,o?u.jsx("p",{className:"cs-subtitle",children:o}):null]}),h.length?u.jsx("dl",{className:"cs-glance",children:h.map(v=>u.jsxs("div",{className:"cs-glance-item",children:[u.jsx("span",{className:"cs-glance-icon","aria-hidden":"true",children:u.jsx(Nr,{name:v.icon||pE[v.label],size:16})}),u.jsxs("div",{className:"cs-glance-textwrap",children:[u.jsx("dt",{className:"cs-glance-label",children:v.label}),u.jsx("dd",{className:"cs-glance-value",children:v.value})]})]},v.label))}):null]}),u.jsx("div",{className:"cs-wrap",children:u.jsx("article",{className:"cs-content",children:t})})]}),u.jsx(vE,{next:e})]})}function gE(){const r=Ae.useRef(null);return Ae.useEffect(()=>{let e=0;const t=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{const s=document.documentElement,o=s.scrollHeight-s.clientHeight,l=o>0?Math.min(Math.max(s.scrollTop/o,0),1):0;r.current&&(r.current.style.transform=`scaleX(${l})`)})};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),cancelAnimationFrame(e)}},[]),u.jsx("div",{className:"cs-progress","aria-hidden":"true",children:u.jsx("i",{ref:r})})}function vE({next:r}){var e;return u.jsx("footer",{className:"cs-footer",children:u.jsxs("div",{className:"cs-footer-inner",children:[u.jsx("div",{className:"cs-next-label",children:r?"Next project":"More work"}),r?u.jsxs(Hd,{to:`/case-studies/${r.slug}`,className:"cs-next-link",children:[u.jsx("span",{children:((e=r.meta)==null?void 0:e.title)||r.slug}),u.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}):u.jsxs("a",{href:"/#work",className:"cs-next-link",children:[u.jsx("span",{children:"See all work"}),u.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}),u.jsx("div",{className:"cs-footer-contact",children:Ys.links.map(t=>u.jsx("a",{href:t.href,className:`text-link ${t.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:t.variant==="primary"?{paddingBottom:3}:void 0,...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},...t.download?{download:!0}:{},children:t.label},t.label))}),u.jsxs("div",{className:"cs-footer-meta",children:[u.jsx("span",{children:Ys.copyright}),u.jsx("a",{href:"/#top",className:"text-link text-link--muted",children:"Back to top ↑"})]})]})})}const Wn="/case-studies/cards/images",xE={order:2,title:"Self-service card management — a two-hour banking task, resolved in taps",subtitle:"Giving Neuflize OBC private-banking clients direct control of their debit cards — without loosening a single guardrail.",tags:["Private Banking","Native iOS & Android","Self-service","End-to-end ownership"],glance:[{label:"Role",value:"Sole designer, end to end — workshop facilitation, user flows, interaction and visual design, and design–engineering alignment"},{label:"Team",value:"1 Designer (me) · Engineering / tech lead · RMs & Operations as research stakeholders"},{label:"Client",value:"Neuflize OBC — ABN AMRO Private Banking, France"},{label:"Platform",value:"Native iOS & Android"},{label:"Design system",value:"ABN AMRO Emerald"},{label:"Status",value:"Live in production"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-hard-part-was-translation-not-requirements":"refresh","built-on-emerald":"layers","what-we-kept-with-a-human-on-purpose":"flag","the-impact-in-the-operation":"chart","the-takeaway":"target"}};function cg(r){const e={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...so(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,u.jsx(av,{src:`${Wn}/01-hero.png`,alt:"The Manage card screen: a Neuflize OBC Visa Infinite card, a green ‘This card is active’ status, Card details and Block actions, and live payment and cash-withdrawal limits with progress bars.",secondary:{src:`${Wn}/02-all-cards.png`,alt:"The All cards overview — a client’s debit cards as tappable tiles, each showing the last four digits and holder name."},chip:"Live in production"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["At Neuflize OBC — ABN AMRO's private bank in France — clients had ",u.jsx(e.strong,{children:"no way to manage their own debit cards"}),". Adjusting a limit, blocking a lost card, turning on payments abroad: each one meant contacting a relationship manager and waiting."]}),u.jsxs(e.p,{children:["The feature I designed is ",u.jsx(e.strong,{children:"live in production"})," on native iOS and Android. It takes a change that used to run through two people and up to two hours, and resolves it in a few taps — while keeping every check a private bank needs."]})]}),`
`,u.jsx(sv,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Shipped and live"})," on iOS and Android — clients now manage their own cards, not a prototype or a stalled pilot"]})},{icon:"zap",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Up to two hours → a matter of taps"})," — the client acts directly, with no relationship-manager handoff in the loop"]})},{icon:"users",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Routine work off two teams' desks"})," — thousands of card requests a year no longer route through RMs and operations by hand"]})}]}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"One principle held the whole thing together:"})})}),`
`,u.jsx(Zs,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Self-service doesn't mean removing friction everywhere."})," It means putting friction exactly where the ",u.jsx("em",{children:"risk"})," is — and nowhere else."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"Picture being a private-banking client who wants to raise a card limit before a large purchase. You can't just do it. You call — or email — your relationship manager (RM). They pick up, eventually. You explain. They pass it to the operations team, who log into the card-management back office and make the change by hand, then tell the RM, who tells you it's done."}),u.jsxs(e.p,{children:["Nothing about that request was complex. The wait was ",u.jsx(e.strong,{children:"entirely structural"})," — the client simply had no door into the system."]})]}),`
`,u.jsx(Zs,{variant:"user",children:"Clients weren't asking for anything clever. They wanted to change a limit or block a card — and felt powerless that they couldn't."}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"What that cost, measured across the operation:"}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:["A client could wait ",u.jsx(e.strong,{children:"up to two hours"})," for a change as small as a limit bump."]}),`
`,u.jsxs(e.li,{children:["RMs fielded ",u.jsx(e.strong,{children:"2,000+ card requests a year"})," — routine work pulling them off the advisory conversations they're actually there for."]}),`
`,u.jsxs(e.li,{children:["Operations spent roughly ",u.jsx(e.strong,{children:"80 hours a week"})," processing those requests by hand, acting as a manual layer between the client and a system that could have taken the instruction directly."]}),`
`]}),u.jsxs(e.p,{children:["The core question was blunt: ",u.jsx(e.em,{children:"could card management become fully self-service — without a private bank giving up any of its control?"})]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/03-current-journey.png`,alt:"A service blueprint of the current journey for raising a card limit: client → relationship manager → operations team → card back-office → back again, with a row of frowning faces and pain-point notes across every handoff.",caption:"The old journey for one limit change. Every column is a handoff; every handoff is a place it can stall — and the client can't act at any point in the chain."}),`
`,u.jsx(gt,{children:u.jsxs(e.p,{children:["Laid out end to end, the diagnosis was obvious: ",u.jsx(e.strong,{children:"every step was a handoff, and every handoff was a failure point"})," — a person to reach, a queue to wait in, a verbal instruction that could be misheard, and no status the client could see. The job wasn't to speed the chain up. It was to collapse it into a single self-contained flow the client runs alone."]})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"I started with interviews on both sides of the counter — clients, RMs, operations, and digital support — to map where the friction actually lived rather than where the business assumed it did. Two pictures lined up: clients felt powerless over trivial tasks, and the internal teams knew these requests were routine and repetitive but still had to touch every one."}),u.jsxs(e.p,{children:["Then, before drawing anything, I ran a ",u.jsx(e.strong,{children:"workshop with stakeholders"})," to pressure-test the problem space — mapping the card tasks clients actually did against the problems they actually hit, so we designed for real behaviour, not an assumed feature list."]})]}),`
`,u.jsx(Ti,{src:`${Wn}/04-workshop.png`,alt:"A whiteboard from the discovery workshop: clustered sticky notes under Usage and Problem columns, with ‘How might we…’ questions written alongside for lost cards, managing multiple cards, changing limits, forgotten PINs and payment errors.",caption:"Mapping usage against real problems — the input that decided what to build first, and what to leave for later."}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["That mapping is where the ",u.jsx(e.strong,{children:"scope decision"})," got made. Clients hit a long tail of card problems, but four rose to the top on frequency and on how cleanly they could be solved self-service:"]}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Limit change"})," — the single most common request"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Block / unblock"})," — urgent and time-sensitive by nature"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Card removal"})," — rare, but entirely manual today"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Payments abroad"})," — recurring friction for travelling clients"]}),`
`]}),u.jsx(e.p,{children:"Everything else stayed out of v1 on purpose. Choosing four and defending the boundary mattered as much as the design itself."}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"One boundary worth naming:"})," I owned the client-facing design across those flows and the card landing page. The routing and limit ",u.jsx(e.em,{children:"policy"}),", the card-management back office, and the identity/authentication service were the bank's systems — engineering owned whether the app could even reach them, and the entire self-service premise rode on that access being there. Knowing exactly where my slice started and ended shaped every trade-off below."]})]}),`
`,u.jsx(e.h2,{children:"The hard part was translation, not requirements"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["I'll be honest about where the difficulty was on this one. The ",u.jsx(e.em,{children:"requirement"})," was never ambiguous: make card management self-service, keep it bank-grade secure. The challenge was entirely in the ",u.jsx(e.strong,{children:"design"})," — turning a task that had always been mediated by a person, with all the verification and reassurance that person quietly provided, into a screen a client trusts enough to act on alone."]}),u.jsx(e.p,{children:"Two surfaces carried most of that weight, and I explored both widely before committing:"}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The card landing page"})," had to answer a client's first two questions at a glance — ",u.jsx(e.em,{children:"what can I do here, and is my card okay?"})," — without burying the state under a menu."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The limit-change interaction"})," had to hold a surprising amount: how much, for how long, whether it's permanent or temporary, and proof that it's really you — all without feeling like the phone call it replaced."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/05-landing-explorations.png`,alt:"Six explorations of the card landing page side by side, varying how card state, limits, management actions and payment toggles are ordered and grouped.",caption:"Landing-page explorations. The question every variant was tested against: does a client see their card's state and their next action without thinking?"}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/06-limit-explorations.png`,alt:"Explorations of the limit-change component: different ways of showing the current limit, a new amount, preset chips, and the temporary-versus-permanent choice.",caption:"Limit-change explorations — the hardest single component, because it had to carry amount, duration and identity at once."}),`
`,u.jsx(e.h2,{children:"The design decisions"}),`
`,u.jsxs(ov,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"Every decision below is the same principle applied at a different level of risk: keep the low-risk actions instant, and spend the client's attention only where a mistake would actually cost them."}),coda:{title:"Built to survive real banking states",body:u.jsx(u.Fragment,{children:"Underneath all of it, the interface had to hold states the phone call used to absorb: a blocked card, a limit that's only temporary, missing contact details, an identity that still needs proving. One decision per screen, and the card's current state visible at every step."})},children:[u.jsx(qi,{index:"01",title:"The landing page shows state first, actions second",media:{src:`${Wn}/08-manage-card-final.png`,alt:"The final Manage card landing: the card itself, an active/blocked status line, Card details and Block, then live limits with progress bars, then payment toggles, then Delete card."},tradeoff:{considered:"A flat menu of card actions — the conventional pattern.",why:u.jsxs(u.Fragment,{children:["A menu hides the one thing clients open the screen to see: ",u.jsx(e.strong,{children:"is my card okay, and what's left on it?"})," It also flattens risk — listing “view details” and “raise my limit by €30k” as equal rows. Leading with live state, then ordering actions by how often they're used, answered the real first question."]})},children:u.jsxs(e.p,{children:["The landing page opens with the card and a plain status line — ",u.jsx(e.em,{children:"this card is active"})," — then live payment and cash-withdrawal limits as progress bars, then management actions, and only then the destructive ones. It reads top to bottom as ",u.jsx(e.em,{children:"reassurance → routine → rare"}),"."]})}),u.jsx(qi,{index:"02",title:"Authenticate at the point of commitment — not on the way in",media:{src:`${Wn}/09-manage-payments.png`,alt:"The Manage payments section: simple on/off toggles for Remote payment, Cash withdrawal and Payment abroad, with no authentication step."},tradeoff:{considered:"Gating the whole feature behind a verification wall — the compliance-safe instinct to lock every action.",why:u.jsxs(u.Fragment,{children:["Uniform friction would have rebuilt the exact wait we were removing. Most card actions are low-risk and reversible; a few aren't. So I put the identity step where the ",u.jsx(e.strong,{children:"commitment"})," is — raising a limit, deleting a card — and left browsing, viewing and toggling free."]})},children:u.jsx(e.p,{children:"Viewing card state and flipping low-risk controls — remote payment, cash withdrawal, payments abroad — happen instantly, because they're reversible and carry little exposure. The identity check appears only when a client is about to do something that would actually cost them if it were the wrong person. Same feature, friction calibrated to the stakes."})}),u.jsx(qi,{index:"03",title:"Default the limit change to temporary, not permanent",media:{src:`${Wn}/10-limit-change-final.png`,alt:"The limit-change flow across screens: enter a new amount within a shown ceiling, a summary of current versus new limit with an end date, a 5-digit PIN identity step, and a success confirmation.",caption:"Enter an amount within the ceiling → confirm the summary → prove identity → done. The end date is part of the request, not an afterthought."},tradeoff:{considered:"A single permanent “new limit” field, the simplest possible control.",why:u.jsxs(u.Fragment,{children:["Watching the real requests, most limit bumps are for one reason — a large purchase, a trip — not a permanent change. A permanent-only field either over-exposes the client indefinitely or forces a ",u.jsx(e.em,{children:"second"})," call to put it back. Foregrounding a temporary increase with an automatic end date fit what clients actually needed."]})},children:u.jsxs(e.p,{children:["The flow makes duration a first-class part of the request: a client raises the limit ",u.jsx(e.em,{children:"for seven days"}),", or ",u.jsx(e.em,{children:"for thirty"}),", up to a clearly shown ceiling, and it reverts on its own. The card landing then carries a quiet “temporarily valid until…” marker so the temporary state is never a surprise. Identity is proven with a PIN step folded into the flow — not a separate hoop."]})}),u.jsx(qi,{index:"04",title:"Block is instant and reversible — cancelling stays with a human",media:{src:`${Wn}/11-block-card.png`,alt:"The block flow: a confirmation sheet to block the card, and the resulting blocked state with a padlock over the card, an Unblock action, and a note to call support to fully cancel."},tradeoff:{considered:"Treating block as a single destructive “cancel card” action.",why:u.jsxs(u.Fragment,{children:["Blocking is usually a ",u.jsx(e.em,{children:"panic"})," action — a card that's briefly missing. It should be instant and, just as importantly, ",u.jsx(e.strong,{children:"reversible in seconds"})," when the card turns up. Cancellation is destructive and rare, so it deliberately stays a call. Collapsing the two would make the common, urgent case as heavy as the rare one."]})},children:u.jsx(e.p,{children:"A client blocks a card in one confirmation, and the card visibly locks. If it resurfaces, they unblock it just as fast — no call, no wait. Permanent cancellation, which can't be undone, still routes to support on purpose."})}),u.jsxs(qi,{index:"05",title:"When verification is missing, fall back — don't dead-end",children:[u.jsx(e.p,{children:"A sensitive change needs verified contact details to confirm it's really the client. Rather than let someone reach the end of a flow and hit a wall, the design checks up front: if a verified email or phone number is on file, the change proceeds and the identity step confirms it; if not, the flow routes cleanly to the bank to sort the details out first."}),u.jsx(e.p,{children:"It's the unglamorous decision that keeps a security requirement from becoming a dead end — the app degrades to a human hand-off gracefully, instead of failing the client at the last step."})]})]}),`
`,u.jsx(e.h2,{children:"Built on Emerald"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["None of this shipped as bespoke UI. Every screen is built on ",u.jsx(e.strong,{children:"ABN AMRO's Emerald design system"}),", so the feature reads as part of the wider app rather than a bolt-on, and it moved into development faster because engineering was assembling known, governed components rather than interpreting one-off designs."]}),u.jsxs(e.p,{children:["That's the quiet leverage of designing inside a system: my slice was the ",u.jsx(e.em,{children:"flows and the decisions"}),"; the system carried the consistency and cut the handoff cost. On a regulated private-banking app, that's not a constraint to work around — it's what makes the work trustworthy and shippable."]})]}),`
`,u.jsx(Ti,{src:`${Wn}/13-emerald-cards.png`,alt:"The Neuflize OBC card family rendered in the Emerald system — Visa Classic, Visa Infinite, Visa Business and Premier variants, consistent in type, layout and treatment.",caption:"The card family in Emerald — consistent with the broader digital ecosystem, and faster to hand off because of it."}),`
`,u.jsx(e.h2,{children:"What we kept with a human, on purpose"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["The honest boundary of this release: ",u.jsx(e.strong,{children:"not every card action became self-service, and that was a design choice, not a gap I missed."})]}),u.jsxs(e.p,{children:["Two things still route to a person. ",u.jsx(e.strong,{children:"Permanently cancelling a card"})," stays with the support team — it's irreversible and identity-sensitive, and the seconds saved by automating it aren't worth the risk of getting it wrong. And ",u.jsx(e.strong,{children:"correcting stale contact details"})," — a wrong email or phone number on file — routes to the relationship manager rather than letting the client edit the very data used to verify them."]}),u.jsxs(e.p,{children:["Both are deliberate. In a private bank, the right MVP isn't the one that automates the most actions — it's the one that automates every action where self-service is clearly ",u.jsx(e.em,{children:"safer and faster"}),", and knows precisely where to stop. Naming that line is the point, not apologising for it."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/14-delete-card.png`,alt:"The delete-card flow: choose a reason (stolen, lost, fraud), opt into a replacement and a new PIN, confirm the details on file, review a summary, and a success screen — with a route to contact the RM if the details are wrong.",caption:"The most sensitive flow carries the most steps — reason, replacement, identity, and a confirm — with a human hand-off kept in reach when the details don't match."}),`
`,u.jsx(e.h2,{children:"The impact, in the operation"}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:"The change isn't just faster for the client — it changes who does the work."})}),`
`,u.jsx(hE,{items:[{icon:"zap",value:"2h → taps",label:"Time to change a card limit",note:"Client acts directly — no RM in the loop"},{icon:"users",value:"2,000+/yr",label:"Card requests off RMs’ desks",note:"Freeing them for advisory work"},{icon:"ban",value:"~80 hrs/wk",label:"Manual operations work removed",note:"The middle layer, automated away"}]}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["The figures above are the operation's own numbers — measured internally rather than estimated by me, and the reason the project got prioritised. Beyond the time saved, the ",u.jsx(e.em,{children:"shape"})," of the work shifted: RMs got hours back for the advisory conversations that justify a private bank, operations stopped being a manual relay, and the client got something a phone call never gave them — the ability to act the moment they needed to."]}),u.jsx(e.p,{children:"It also set the pattern. Proving that a genuinely sensitive banking task could be made self-service — securely, inside the design system — laid the groundwork for the next self-service capabilities on the platform."})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["This wasn't a task made prettier. It was a ",u.jsx(e.strong,{children:"handoff chain collapsed into a flow the client runs alone"})," — and the discipline that made it safe to do was refusing to spread friction evenly."]}),u.jsxs(e.p,{children:["The clearest lesson: on a regulated product, self-service is a question of ",u.jsx(e.em,{children:"placement"}),", not addition. Put the guardrail exactly where the risk is, make everything else instant, and know — precisely — which few actions still belong with a human. That's what turns a two-hour call into a few taps without a bank giving up an ounce of control."]})]}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on the card-management feature, end to end."})})})]})}function _E(r={}){const{wrapper:e}={...so(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(cg,{...r})}):cg(r)}const yE=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Wn,default:_E,meta:xE},Symbol.toStringTag,{value:"Module"})),Xn="/case-studies/swiftsort/images",SE={order:1,title:"SwiftSort — from memorized routes to instant, system-guided action",subtitle:"Shifting sorting decisions from workers to the system, across high-volume Nordic logistics terminals.",tags:["Logistics UX","Mobile & wearable","End-to-end ownership","POC → production"],glance:[{label:"Role",value:"Sole designer on this project (part of a wider design team) — owned research, UX strategy, interaction design, and design–engineering alignment end to end"},{label:"Team",value:"1 Product Manager · 4 Engineers · 2 Operations Leads"},{label:"Region",value:"Nordic"},{label:"Platform",value:"Android tablet + ProGlove wearable scanner"},{label:"Timeline",value:"3 months, proof-of-concept through to production"},{label:"Tools",value:"Figma, Figma Make, Banani, MS Copilot"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","what-the-old-workflow-actually-looked-like":"eye","the-moment-that-changed-the-design":"refresh","working-with-engineering":"merge","how-the-workflow-shrank":"minimize","one-solution-two-form-factors":"smartphone","a-second-win-surfaced-by-the-business":"layers","how-the-work-got-made":"sparkles","exploring-then-discarding":"filter","how-ai-fit-into-the-process":"sparkles","testing-on-the-floor":"flask",outcomes:"chart","what-we-shipped-knowingly-incomplete":"flag","the-takeaway":"target"}};function ug(r){const e={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...so(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,`
`,u.jsx(av,{src:`${Xn}/01-hero.png`,alt:"The finished SwiftSort screen on a terminal tablet alongside the handheld TC57, two form factors, one sorting workflow.",bare:!0,chip:"Live in production"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(gt,{children:u.jsxs(e.p,{children:["SwiftSort is ",u.jsx(e.strong,{children:"live in production"}),", running across the client's Nordic terminals. It replaced memory-dependent sorting with a scan-guided workflow — and the operations side felt the difference firsthand."]})}),`
`,u.jsx(sv,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Shipped and running in live terminals"})," — not a prototype or a pilot that stalled"]})},{icon:"trendUp",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Faster onboarding and fewer gate errors"})," — reported by terminal managers to business stakeholders, not just observed by the design team"]})},{icon:"cube",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Zero new hardware, zero layout changes"})," — it ran on scanners workers already used"]})}]}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"The whole project ran on one principle:"})})}),`
`,u.jsx(Zs,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Find the behavior that already exists, and build the system around it"})," — so workers have less to learn, not more."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["Imagine standing on a warehouse floor as parcels pour in. Every box looks the same — nothing tells you which has to leave ",u.jsx(e.em,{children:"today"})," and which can wait. You just have to ",u.jsx(e.em,{children:"know"}),", from experience, which gate each postal code maps to and in what order to stack."]}),u.jsx(e.p,{children:"That was the daily reality. Sorting depended entirely on what workers had memorized. When I asked one operator how he kept it all straight, he shrugged:"})]}),`
`,u.jsx(Zs,{variant:"user",children:"I just memorize it. When I forget, I ask someone."}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"That one sentence is the whole problem. Critical operational knowledge wasn't in the system — it was in people's heads, and it walked out the door every time someone changed shifts or left."}),u.jsx(e.p,{children:u.jsx(e.strong,{children:"What that cost the business:"})}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Slow throughput"})," during peak hours, because every parcel required a mental lookup"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Frequent errors"})," — urgent and low-priority goods mixed at the gate, so time-sensitive deliveries missed their trucks"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Painful onboarding"})," — a new hire couldn't be useful until they'd memorized the routes, which took weeks"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Inconsistent terminals"})," — experienced operators were fast; everyone else was slow, and no two sites ran the same way"]}),`
`]}),u.jsx(e.p,{children:"Solving this the obvious way — new equipment, more training, a redesigned floor — would have been slow, costly, and hard to roll out across sites. The stronger play was to handle more volume with what the terminals already had."}),u.jsx(e.p,{children:u.jsx(e.strong,{children:"The reframe that shaped everything:"})})]}),`
`,u.jsx(Zs,{variant:"principle",children:u.jsxs(e.p,{children:["Sorting was never a screen problem. It was a ",u.jsx(e.em,{children:"decision"})," problem. Workers were doing system-level thinking — mapping, remembering, sequencing — manually, under pressure. The real opportunity wasn't to show them information faster. It was to move the thinking out of their heads and into the system."]})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"I started on the terminal floor, not in Figma — shadowing forklift operators through full shifts, watching how goods and pallets actually got stacked, and sitting with terminal managers and ops leads to find where the informal workarounds lived."}),u.jsxs(e.p,{children:["The job wasn't to invent a new way to sort, but to find the behavior that ",u.jsx(e.em,{children:"already worked"})," — the principle that drove every decision below."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"One boundary worth naming:"})," SwiftSort doesn't decide ",u.jsx(e.em,{children:"where"})," a parcel goes — planners set routing upstream. My slice was the worker-facing decision layer: the moment upstream data becomes a physical action on a noisy floor. Knowing exactly where that slice started and ended shaped every trade-off below."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Xn}/05-research-synthesis.png`,alt:"A clustered affinity view of field observations grouped into themes such as memory dependence, environmental constraints, and LIFO stacking behaviour.",caption:"Field observations, clustered into themes — memory dependence, environmental constraints, LIFO stacking behaviour."}),`
`,u.jsx(e.h2,{children:"What the old workflow actually looked like"}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:"A single parcel took three steps — one physical, two mental. Watch the mental load grow:"})}),`
`,u.jsx(cE,{items:[{src:`${Xn}/02-illustration-scan.png`,alt:"Comic panel — the driver calmly scans the box, an empty thought-bubble above them: no mental effort.",title:"Scan the barcode",tag:"Physical",tone:"neutral"},{src:`${Xn}/03-illustration-read.png`,alt:"Comic panel — the driver reads the label, a small thought-bubble with a magnifying glass and a question mark: mild effort.",title:"Read the postal code off the label",tag:"Mental",tone:"mental"},{src:`${Xn}/04-illustration-mental-lookup.png`,alt:"Comic panel — the driver looks overwhelmed, a huge chaotic thought-bubble tangled with gate numbers, routes and arrows.",title:"Recall which gate, which route, which order",tag:"Mental — the bottleneck",tone:"bottleneck"}]}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:"Steps 2 and 3 were invisible work — and that's where the time, the errors, and the training cost all lived, none of it written down anywhere the system could see."})}),`
`,u.jsx(e.h2,{children:"The moment that changed the design"}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:"The most important decision in this project didn't come from the brief. It came from watching a mistake."})}),`
`,u.jsx(e.h3,{children:"The wrong direction"}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"During proof-of-concept testing, forklift drivers kept struggling to reach a button on the mounted tablet — bolted in the only spot it physically fit, which wasn't a spot a human arm could reach mid-operation."}),u.jsxs(e.p,{children:["The team's instinct was everyone's: ",u.jsx(e.strong,{children:"make the button bigger, move the tablet, add a second one."})," We spent days on placement — and no one asked whether the button should exist at all."]})]}),`
`,u.jsx(e.h3,{children:"The reframe"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["I opened the session recording from that day and watched it again the next morning — and saw what I'd missed live: ",u.jsx(e.strong,{children:"every worker was already wearing a ProGlove scanner."})," Activated, in the workflow. They weren't reaching for the tablet because they wanted to touch it — the system was asking them to confirm with a tap."]}),u.jsxs(e.p,{children:["So I asked a different question: ",u.jsx(e.em,{children:"what if the button didn't have to be reachable?"})]}),u.jsxs(e.p,{children:["I proposed a ",u.jsx(e.strong,{children:"static QR code"})," as the last card in the list — scan it with the ProGlove already on your hand, ",u.jsx(e.em,{children:"or"})," tap it. On a tablet that's sometimes out of arm's reach, the scan path makes reach irrelevant: a button you can trigger from wherever you're standing."]}),u.jsx(e.p,{children:'Getting the team there took more than the idea. The button debate had days of momentum — so rather than argue placement, I brought everyone back to the recording and let them watch the glove do the work. The question shifted from "where does the button go" to "why is reach the constraint," and the room moved on its own.'}),u.jsx(e.p,{children:"I'll be honest: it was a hunch, not a proven answer — the kind of idea that's either elegant or redundant, and I couldn't tell which from a meeting room. It hinged on one thing I couldn't settle at a desk: would a worker mid-shift, gloves on, actually reach for the scan? That question sent it to the floor instead of a polished mockup."})]}),`
`,u.jsx(Zs,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"The insight came from watching a recording a second time — not from the brief."})," The fix wasn't a bigger button or a better mount. It was giving the worker a second way in, so the mounting distance stopped being a problem to solve."]})}),`
`,u.jsx(uE,{before:{src:`${Xn}/06-reframe-before.png`,alt:"The out-of-reach button mounted on the forklift tablet — a worker stretching to reach it mid-operation."},after:{src:`${Xn}/07-reframe-after.png`,alt:"The QR “DROP” card that gives a scannable path to the same confirmation action."},caption:"Scan or tap. Reach stops mattering."}),`
`,u.jsx(e.h2,{children:"Working with engineering"}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"The static-QR idea only worked because engineering pressure-tested it early."}),u.jsxs(e.p,{children:["Engineering's first instinct was a ",u.jsx(e.strong,{children:"dynamic QR"})," — a unique code generated for every scanned parcel. Within a day, they flagged the problems: significant backend complexity, scalability concerns, and a timeline we couldn't hit."]}),u.jsxs(e.p,{children:["We landed on ",u.jsx(e.strong,{children:"static QR"})," together — and it turned out to be not just simpler but genuinely ",u.jsx(e.em,{children:"better"}),":"]}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Reliable"})," — no backend to fail, works offline"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Scalable"})," — print, attach, deploy; the same code works at every terminal"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Zero-config"})," — operations can place codes anywhere without involving IT"]}),`
`]}),u.jsxs(e.p,{children:["The constraint didn't compromise the design — it ",u.jsx(e.em,{children:"improved"})," it: the thing easiest to build was also the most robust on the floor."]})]}),`
`,u.jsx(e.h2,{children:"How the workflow shrank"}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:"Same three steps — the two mental ones designed away, and the confirmation freed from reach."})}),`
`,u.jsx(lg,{head:["","Old workflow","Final design"],rows:[["Scan the parcel","✅","✅ (unchanged)"],["Read the postal code","Manual, from the label",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Eliminated"})," — destination shown instantly"]})],["Recall gate & route","Mental lookup",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Eliminated"})," — no memory needed"]})],["Confirm drop-off","Tap a button you had to reach",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Scan or tap"})," — the QR works from anywhere"]})]]}),`
`,u.jsxs(ov,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"Every choice below came from that same principle. None of them asked workers to learn something new."}),coda:{title:"Designed for an industrial floor",body:u.jsx(u.Fragment,{children:"Underpinning all of it, the interface had to survive the environment: readable at 1–2 meters, high-contrast for outdoor glare, large glove-friendly targets, and one decision per screen."})},children:[u.jsx(qi,{index:"01",title:"The QR code doubles as the button",media:{src:`${Xn}/09-qr-scan-or-tap.png`,alt:"The QR “DROP” card as the final item in the tablet drop list — scan it with the ProGlove, or tap to confirm."},tradeoff:{considered:"ProGlove gesture events — a wave or motion to confirm.",why:u.jsx(u.Fragment,{children:"Engineering flagged them as unstable in a noisy, fast-moving environment. A scannable, tappable QR was simply more reliable."})},children:u.jsxs(e.p,{children:["The QR sits as the ",u.jsx(e.strong,{children:"last card"})," in the drop list, and the dual input is deliberate: scan it with the ProGlove, or tap it. That redundancy is the point — if one input fails, the other still works, and reach never decides whether a worker can confirm."]})}),u.jsx(qi,{index:"02",title:"Scan-first — not voice",tradeoff:{considered:"Voice commands.",why:u.jsxs(u.Fragment,{children:["In a loud warehouse, reading barcode values aloud introduced ",u.jsx(e.strong,{children:"more"})," errors than it removed — missed or forgotten, especially when a worker handles several drop-offs at once. The clearest “no” in the project."]})},children:u.jsxs(e.p,{children:["Workers already scanned barcodes constantly, so making the ",u.jsx(e.em,{children:"scan itself"})," the trigger required no new behavior."]})}),u.jsxs(qi,{index:"03",title:"The screen mirrors the physical stack (LIFO)",media:{src:`${Xn}/10-lifo-layout.png`,alt:"The main screen: a large top card “12 CD, 1726 Sarpsborg” with smaller “06 AB” and “18 CD” cards beneath — largest card = last scanned = next dropped."},children:[u.jsxs(e.p,{children:["During research I saw that forklift drivers almost always drop off the ",u.jsx(e.strong,{children:"most recently scanned"})," item first — roughly 95–99% of the time, last-in is first-out."]}),u.jsxs(e.p,{children:["So the design puts the ",u.jsx(e.strong,{children:"latest scanned pallet as the largest card at the top"}),", with smaller cards beneath. The order on screen matches the order on the forklift — no mental translation."]}),u.jsxs(e.p,{children:[u.jsx(e.em,{children:"The honest edge case:"})," that leaves 1–5% of cases where last-scanned ",u.jsx(e.em,{children:"isn't"})," next-dropped. Workers can scan any card directly to override — but the override rate is the one assumption I'd want to instrument over a full peak season before calling it settled."]})]}),u.jsxs(qi,{index:"04",title:"Priority surfaces at the moment of sorting",children:[u.jsxs(e.p,{children:["Time-sensitive shipments now appear with a distinct accent treatment, floating to the top of the stack — ",u.jsx(e.strong,{children:"before"})," the worker decides where to place the parcel."]}),u.jsx(e.p,{children:"The priority signal used to live in dispatch, far upstream. Moving it to the sorting moment is why urgent and low-priority goods stopped mixing at the gate."}),u.jsx(e.p,{children:u.jsx(e.em,{children:"Not in the brief. Found in the field."})})]})]}),`
`,u.jsx(e.h2,{children:"One solution, two form factors"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["The QR-as-button was never meant to be everywhere — it solved a ",u.jsx(e.em,{children:"specific"})," physical problem: a tablet out of reach on a forklift. Some workers don't use a mounted tablet at all; they carry a handheld ",u.jsx(e.strong,{children:"TC57"})," with a built-in scanner, already in hand. So that version ",u.jsx(e.strong,{children:"drops the QR entirely"})," and confirms with a tap on the green ",u.jsx(e.strong,{children:"Drop"})," button."]}),u.jsx(e.p,{children:"The same task, designed twice:"})]}),`
`,u.jsx(lg,{head:["","Mounted tablet + ProGlove","Handheld TC57"],rows:[["Where the device lives","Bolted to the forklift, sometimes out of reach","In the worker’s hand"],["How you confirm a drop","Scan the QR card, or tap it","Tap the Drop button"],["Why","Reach varies by vehicle — the scan path removes that variable","Reach is never in question — so no QR needed"]]}),`
`,u.jsx(gt,{children:u.jsxs(e.p,{children:["This is the part I'm most deliberate about: the clever solution was matched to the context that ",u.jsx(e.em,{children:"needed"})," it, and withheld from the one that didn't. A QR on the TC57 would have been a solution in search of a problem. Match the input to the device's reality; don't standardize one pattern everywhere."]})}),`
`,u.jsx(Ti,{wide:!0,src:`${Xn}/12-tc57-stacking.png`,alt:"Three TC57 handheld screens side by side: the sort list with parcel cards, the stack mode showing grouped parcels at a destination, and the drop zone grid for manual zone lookup.",caption:"The full TC57 flow: sort, stack, and drop zone lookup, all tap-driven, no QR needed."}),`
`,u.jsx(e.h2,{children:"A second win, surfaced by the business"}),`
`,u.jsxs(gt,{children:[u.jsx(e.p,{children:"The QR insight came from watching the floor. This one came from the other direction — a discovery session with the business."}),u.jsxs(e.p,{children:["Going through how the terminals actually ran with managers and ops leads, a pattern surfaced that observation alone had missed: when a driver had ",u.jsx(e.strong,{children:"several loose items headed to the same destination"}),", the app made them handle each one separately — a card per item, scanned and dropped one at a time. Quietly repetitive, and slower than it needed to be at volume."]}),u.jsxs(e.p,{children:["The idea didn't come from me alone. In a brainstorm with the ",u.jsx(e.strong,{children:"tech lead and product owner"}),", we shaped the high-level solution together — let a driver ",u.jsx(e.strong,{children:"group everything bound for one destination and drop it in a single scan"}),", triggered by a barcode embedded in the primary card. Engineering pressure-tested feasibility in the room; the PO kept us anchored on what mattered most; I designed the flow around both."]})]}),`
`,u.jsx(Ti,{src:`${Xn}/11-stacking-mode.png`,alt:"The split-screen stacking view: the main sort list on the left, a “Stacking Mode” panel on the right grouping multiple parcels under one destination.",caption:"Stacking mode — group loose items under one destination, drop them in a single scan."}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:"It's the clearest example of a decision that came from the room, not the brief — and the reason I treat discovery meetings as design research, not status updates."})}),`
`,u.jsx(e.h2,{children:"How the work got made"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["AI compressed the slow early phase; the field decided what shipped. ",u.jsx(e.strong,{children:"Figma Make"})," generated six LIFO card layouts fast — and I killed most against one test: could a worker read it at arm's length, in motion, wearing gloves? The variants that looked richer on a desktop screen were the first to go. ",u.jsx(e.strong,{children:"MS Copilot"}),` clustered raw field notes into themes (that's how the "priority at the sorting moment" finding surfaced); `,u.jsx(e.strong,{children:"Banani"})," structured the stacking flow before I committed it to Figma."]}),u.jsxs(e.p,{children:["Net effect: roughly ",u.jsx(e.strong,{children:"30% faster early exploration"})," — but every decision that shipped came from on-site testing, not a generated mockup."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Xn}/14-discarded-variants.png`,alt:"A grid of early LIFO card layout explorations with the rejected variants visibly marked.",caption:"The range Figma Make gave me. Most were killed against one test: readable at arm's length, in motion, wearing gloves."}),`
`,u.jsx(e.h2,{children:"Outcomes"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["The wins up top aren't self-assessment — the faster onboarding and fewer gate errors came from ",u.jsx(e.strong,{children:"terminal managers"}),", who raised them with business stakeholders as proof the system was working. That's the validation I trust most: the people running the operation found it real enough to report upward."]}),u.jsxs(e.p,{children:["Beyond that, the ",u.jsx(e.em,{children:"shape"})," of the operation changed. Delivery priority became visible at the moment it mattered, so time-sensitive shipments left on time; and low-volume routes could be consolidated instead of dispatched half-empty — which made fast-delivery commitments more scalable."]})]}),`
`,u.jsx(e.h2,{children:"What we shipped knowingly incomplete"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["We went live as an MVP with one known, unresolved issue: ",u.jsx(e.strong,{children:"changing a drop-off location isn't intuitive yet, and parcels don't group as cleanly as they should."})," We knew this before launch — and shipped anyway, on purpose."]}),u.jsxs(e.p,{children:["Drop-off locations come from planners upstream, and we couldn't predict how that data would behave at real volume. So rather than guess at the grouping model in a design tool, we shipped the core workflow and used the first release to ",u.jsx(e.em,{children:"learn how the data behaves in the wild"})," — then optimize grouping and location-editing against real patterns, not assumptions."]}),u.jsx(e.p,{children:`It's the trade-off I'd defend hardest: an MVP with a named, understood gap that generates real learning beats a "complete" design built on guesses about data we didn't control.`})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(gt,{children:[u.jsxs(e.p,{children:["SwiftSort wasn't a UI redesign. It was a redesign of ",u.jsx(e.strong,{children:"how a decision gets made"})," on a warehouse floor."]}),u.jsxs(e.p,{children:["By moving the thinking out of workers' heads and into the system — triggered by behavior they already had — sorting shifted from ",u.jsx(e.em,{children:"memory-based"})," to ",u.jsx(e.em,{children:"system-guided"}),", from ",u.jsx(e.em,{children:"experience-dependent"})," to ",u.jsx(e.em,{children:"scalable"}),"."]}),u.jsxs(e.p,{children:["The clearest lesson: in operational systems, great design usually isn't about adding features. It's about ",u.jsx(e.strong,{children:"removing constraints"})," — and the best removal in this project came from watching a recording twice and asking why ",u.jsx(e.em,{children:"reach"})," had to be the thing we designed around at all."]})]}),`
`,u.jsx(gt,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on SwiftSort, end to end"})})})]})}function wE(r={}){const{wrapper:e}={...so(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(ug,{...r})}):ug(r)}const ME=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Xn,default:wE,meta:SE},Symbol.toStringTag,{value:"Module"})),EE=Object.assign({"./cards/index.mdx":yE,"./swiftsort/index.mdx":ME}),Qa=Object.entries(EE).map(([r,e])=>{var s;const t=(s=r.match(/\.\/([^/]+)\/index\.mdx$/))==null?void 0:s[1];return{slug:t,Component:e.default,meta:{slug:t,...e.meta||{}}}}).filter(r=>r.slug).sort((r,e)=>(r.meta.order??999)-(e.meta.order??999));function TE(r){return Qa.find(e=>e.slug===r)||null}function bE(r){if(Qa.length<2)return null;const e=Qa.findIndex(t=>t.slug===r);return e===-1?null:Qa[(e+1)%Qa.length]}const AE=new Set(["swiftsort"]),RE=["5787deaa7a8ea2bd70a681eed552e3ea03c59dca5ecffa7dcab1365afe4433c1","2742ce32dae07660045ae5247b21e600b5c4834d7c665335ac1c98893e5eaf11"],lv="cs-unlocked";function dg(r){return AE.has(r)}async function CE(r){const e=new TextEncoder().encode(r),t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(s=>s.toString(16).padStart(2,"0")).join("")}async function PE(r){const e=(r??"").trim();if(!e)return!1;try{const t=await CE(e);return RE.includes(t)}catch{return!1}}function hg(){try{return sessionStorage.getItem(lv)==="1"}catch{return!1}}function LE(){try{sessionStorage.setItem(lv,"1")}catch{}}const NE="https://www.linkedin.com/in/ykshetty/";function wd({mood:r="",avatarRef:e}){const t=`gate-avatar${r?` is-${r}`:""}`;return u.jsxs("div",{className:t,ref:e,"aria-hidden":"true",children:[u.jsx("div",{className:"gate-eye l",children:u.jsx("span",{className:"gate-pupil"})}),u.jsx("div",{className:"gate-eye r",children:u.jsx("span",{className:"gate-pupil"})})]})}function DE({title:r,onUnlock:e}){const[t,s]=Ae.useState(""),[o,l]=Ae.useState(!1),[h,d]=Ae.useState(!1),[p,m]=Ae.useState(!1),[v,x]=Ae.useState(""),S=Ae.useRef(null),w=Ae.useRef([]),E=N=>{N&&!w.current.includes(N)&&w.current.push(N)},A=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;Ae.useEffect(()=>{const N=setTimeout(()=>m(!0),A?200:1200);return()=>clearTimeout(N)},[A]),Ae.useEffect(()=>{if(A)return;let N=0,C=window.innerWidth/2,D=window.innerHeight/2;const V=k=>{C=k.clientX,D=k.clientY};window.addEventListener("mousemove",V);const O=()=>{w.current.forEach(k=>{const le=k.getBoundingClientRect();if(!le.width)return;const pe=le.left+le.width/2,b=le.top+le.height/2,U=Math.atan2(D-b,C-pe),ce=Math.min(2.6,Math.hypot(C-pe,D-b)/40);k.querySelectorAll(".gate-pupil").forEach(ue=>{ue.style.transform=`translate(calc(-50% + ${Math.cos(U)*ce}px), calc(-50% + ${Math.sin(U)*ce}px))`})}),N=requestAnimationFrame(O)};return N=requestAnimationFrame(O),()=>{window.removeEventListener("mousemove",V),cancelAnimationFrame(N)}},[A]);const y=N=>{const C=N.target.value;s(C),h&&d(!1),v!=="happy"&&x(C.length?"closed":"")},_=async N=>{if(N.preventDefault(),await PE(t)){LE(),x("happy"),setTimeout(e,A?0:420);return}d(!0),x("squint"),setTimeout(()=>x(t?"closed":""),700)};return u.jsxs("div",{className:"cs-page",children:[u.jsx(nv,{}),u.jsx("div",{className:"gate-stage",children:u.jsxs("div",{className:"gate-card",children:[u.jsxs("div",{className:"gate-chrome",children:[u.jsxs("div",{className:"gate-dots",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsx("div",{className:"gate-chrome-label",children:r?`${r.split(" ")[0]} · protected`:"Protected case study"})]}),u.jsxs("div",{className:"gate-thread",children:[u.jsx("div",{className:"gate-row them",style:{animationDelay:".05s"},children:u.jsx("div",{className:"gate-bubble",children:"Can I read the full case study?"})}),p?u.jsxs("div",{className:"gate-row me",children:[u.jsx(wd,{avatarRef:E,mood:v}),u.jsxs("div",{className:"gate-bubble",children:[u.jsx("span",{className:"gate-kicker",children:"A quick note"}),"This one belongs to the client — I keep it behind a password out of respect for their confidentiality.",u.jsxs("small",{children:["You’ll find the password in my résumé or cover letter. Otherwise, just"," ",u.jsx("a",{href:NE,target:"_blank",rel:"noopener noreferrer",children:"ping me on LinkedIn"}),"."]})]})]}):u.jsxs("div",{className:"gate-row me",children:[u.jsx(wd,{avatarRef:E,mood:v}),u.jsxs("div",{className:"gate-typing",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]}),h&&u.jsxs("div",{className:"gate-row me",role:"alert",children:[u.jsx(wd,{avatarRef:E,mood:v}),u.jsx("div",{className:"gate-bubble",children:"That’s not the one — check the résumé header, it’s there. 🙂"})]})]}),u.jsxs("div",{className:"gate-composer",children:[u.jsxs("form",{className:`gate-field${h?" is-err":""}`,onSubmit:_,autoComplete:"off",children:[u.jsx("input",{ref:S,type:o?"text":"password",value:t,onChange:y,placeholder:"Type the password…","aria-label":"Case study password","aria-invalid":h,autoFocus:!0}),u.jsx("button",{type:"button",className:"gate-peek",onClick:()=>l(N=>!N),"aria-label":o?"Hide password":"Show password",title:o?"Hide":"Show",children:o?u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),u.jsx("button",{type:"submit",className:"gate-send","aria-label":"Unlock case study",title:"Unlock",children:"↑"})]}),u.jsx("a",{href:"/#work",className:"gate-back",children:"← Back to work"})]})]})})]})}function IE({slug:r}){const e=TE(r),t=dg(r),[s,o]=Ae.useState(()=>!t||hg());if(Ae.useEffect(()=>{o(!dg(r)||hg())},[r]),Ae.useEffect(()=>{var p;if((p=e==null?void 0:e.meta)!=null&&p.title){const m=document.title;return document.title=`${e.meta.title} · Yogesh Shetty`,()=>{document.title=m}}},[e]),!e)return u.jsx(UE,{slug:r});const{Component:l,meta:h}=e,d=bE(r);return t&&!s?u.jsx(DE,{title:h.title,onUnlock:()=>o(!0)}):u.jsx(mE,{meta:h,next:d,children:u.jsx(iv.Provider,{value:h.sectionIcons||{},children:u.jsx(rE,{components:fE,children:u.jsx(l,{})})})})}function UE({slug:r}){return u.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",textAlign:"center"},children:u.jsxs("div",{style:{maxWidth:460},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:14},children:"Case study not found"}),u.jsxs("h1",{style:{fontSize:28,fontWeight:600,margin:"0 0 16px",letterSpacing:"-0.02em"},children:["No case study “",r,"”"]}),u.jsx(Hd,{to:"/",className:"text-link text-link--primary",style:{fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,paddingBottom:3},children:"← Back to portfolio"})]})})}function FE(){const e=ex().match(/^\/case-studies\/([^/]+)\/?$/);return e?u.jsx(IE,{slug:decodeURIComponent(e[1])}):u.jsx(iE,{})}function kE(){return u.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:u.jsxs("div",{style:{maxWidth:520},children:[u.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),u.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),u.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[u.jsx("a",{href:`mailto:${Yi}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),u.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}Z0.createRoot(document.getElementById("root")).render(u.jsx(ta.StrictMode,{children:u.jsx(Jg,{fallback:u.jsx(kE,{}),children:u.jsx(ax,{children:u.jsx(Q0,{children:u.jsx(FE,{})})})})}));
