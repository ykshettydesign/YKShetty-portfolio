(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function og(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pu={exports:{}},zo={},Lu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function R0(){if(gp)return ht;gp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function _(L,V,ye){this.props=L,this.context=V,this.refs=b,this.updater=ye||M}_.prototype.isReactComponent={},_.prototype.setState=function(L,V){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,V,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=_.prototype;function D(L,V,ye){this.props=L,this.context=V,this.refs=b,this.updater=ye||M}var P=D.prototype=new y;P.constructor=D,w(P,_.prototype),P.isPureReactComponent=!0;var N=Array.isArray,W=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function de(L,V,ye){var q,ce={},he=null,be=null;if(V!=null)for(q in V.ref!==void 0&&(be=V.ref),V.key!==void 0&&(he=""+V.key),V)W.call(V,q)&&!O.hasOwnProperty(q)&&(ce[q]=V[q]);var ue=arguments.length-2;if(ue===1)ce.children=ye;else if(1<ue){for(var ae=Array(ue),Ce=0;Ce<ue;Ce++)ae[Ce]=arguments[Ce+2];ce.children=ae}if(L&&L.defaultProps)for(q in ue=L.defaultProps,ue)ce[q]===void 0&&(ce[q]=ue[q]);return{$$typeof:r,type:L,key:he,ref:be,props:ce,_owner:k.current}}function me(L,V){return{$$typeof:r,type:L.type,key:V,ref:L.ref,props:L.props,_owner:L._owner}}function T(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function F(L){var V={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return V[ye]})}var le=/\/+/g;function fe(L,V){return typeof L=="object"&&L!==null&&L.key!=null?F(""+L.key):V.toString(36)}function H(L,V,ye,q,ce){var he=typeof L;(he==="undefined"||he==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(he){case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case r:case e:be=!0}}if(be)return be=L,ce=ce(be),L=q===""?"."+fe(be,0):q,N(ce)?(ye="",L!=null&&(ye=L.replace(le,"$&/")+"/"),H(ce,V,ye,"",function(Ce){return Ce})):ce!=null&&(T(ce)&&(ce=me(ce,ye+(!ce.key||be&&be.key===ce.key?"":(""+ce.key).replace(le,"$&/")+"/")+L)),V.push(ce)),1;if(be=0,q=q===""?".":q+":",N(L))for(var ue=0;ue<L.length;ue++){he=L[ue];var ae=q+fe(he,ue);be+=H(he,V,ye,ae,ce)}else if(ae=S(L),typeof ae=="function")for(L=ae.call(L),ue=0;!(he=L.next()).done;)he=he.value,ae=q+fe(he,ue++),be+=H(he,V,ye,ae,ce);else if(he==="object")throw V=String(L),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return be}function ne(L,V,ye){if(L==null)return L;var q=[],ce=0;return H(L,q,"","",function(he){return V.call(ye,he,ce++)}),q}function j(L){if(L._status===-1){var V=L._result;V=V(),V.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=V)}if(L._status===1)return L._result.default;throw L._result}var ee={current:null},z={transition:null},$={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function X(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ne,forEach:function(L,V,ye){ne(L,function(){V.apply(this,arguments)},ye)},count:function(L){var V=0;return ne(L,function(){V++}),V},toArray:function(L){return ne(L,function(V){return V})||[]},only:function(L){if(!T(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ht.Component=_,ht.Fragment=t,ht.Profiler=a,ht.PureComponent=D,ht.StrictMode=s,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ht.act=X,ht.cloneElement=function(L,V,ye){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var q=w({},L.props),ce=L.key,he=L.ref,be=L._owner;if(V!=null){if(V.ref!==void 0&&(he=V.ref,be=k.current),V.key!==void 0&&(ce=""+V.key),L.type&&L.type.defaultProps)var ue=L.type.defaultProps;for(ae in V)W.call(V,ae)&&!O.hasOwnProperty(ae)&&(q[ae]=V[ae]===void 0&&ue!==void 0?ue[ae]:V[ae])}var ae=arguments.length-2;if(ae===1)q.children=ye;else if(1<ae){ue=Array(ae);for(var Ce=0;Ce<ae;Ce++)ue[Ce]=arguments[Ce+2];q.children=ue}return{$$typeof:r,type:L.type,key:ce,ref:he,props:q,_owner:be}},ht.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ht.createElement=de,ht.createFactory=function(L){var V=de.bind(null,L);return V.type=L,V},ht.createRef=function(){return{current:null}},ht.forwardRef=function(L){return{$$typeof:u,render:L}},ht.isValidElement=T,ht.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:j}},ht.memo=function(L,V){return{$$typeof:p,type:L,compare:V===void 0?null:V}},ht.startTransition=function(L){var V=z.transition;z.transition={};try{L()}finally{z.transition=V}},ht.unstable_act=X,ht.useCallback=function(L,V){return ee.current.useCallback(L,V)},ht.useContext=function(L){return ee.current.useContext(L)},ht.useDebugValue=function(){},ht.useDeferredValue=function(L){return ee.current.useDeferredValue(L)},ht.useEffect=function(L,V){return ee.current.useEffect(L,V)},ht.useId=function(){return ee.current.useId()},ht.useImperativeHandle=function(L,V,ye){return ee.current.useImperativeHandle(L,V,ye)},ht.useInsertionEffect=function(L,V){return ee.current.useInsertionEffect(L,V)},ht.useLayoutEffect=function(L,V){return ee.current.useLayoutEffect(L,V)},ht.useMemo=function(L,V){return ee.current.useMemo(L,V)},ht.useReducer=function(L,V,ye){return ee.current.useReducer(L,V,ye)},ht.useRef=function(L){return ee.current.useRef(L)},ht.useState=function(L){return ee.current.useState(L)},ht.useSyncExternalStore=function(L,V,ye){return ee.current.useSyncExternalStore(L,V,ye)},ht.useTransition=function(){return ee.current.useTransition()},ht.version="18.3.1",ht}var vp;function Fd(){return vp||(vp=1,Lu.exports=R0()),Lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function C0(){if(_p)return zo;_p=1;var r=Fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(u,h,p){var v,x={},S=null,M=null;p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(u&&u.defaultProps)for(v in h=u.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:u,key:S,ref:M,props:x,_owner:a.current}}return zo.Fragment=t,zo.jsx=d,zo.jsxs=d,zo}var xp;function P0(){return xp||(xp=1,Pu.exports=C0()),Pu.exports}var m=P0(),Ue=Fd();const Qs=og(Ue);var ll={},Du={exports:{}},Ln={},Nu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function L0(){return yp||(yp=1,(function(r){function e(z,$){var X=z.length;z.push($);e:for(;0<X;){var L=X-1>>>1,V=z[L];if(0<a(V,$))z[L]=$,z[X]=V,X=L;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var $=z[0],X=z.pop();if(X!==$){z[0]=X;e:for(var L=0,V=z.length,ye=V>>>1;L<ye;){var q=2*(L+1)-1,ce=z[q],he=q+1,be=z[he];if(0>a(ce,X))he<V&&0>a(be,ce)?(z[L]=be,z[he]=X,L=he):(z[L]=ce,z[q]=X,L=q);else if(he<V&&0>a(be,X))z[L]=be,z[he]=X,L=he;else break e}}return $}function a(z,$){var X=z.sortIndex-$.sortIndex;return X!==0?X:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();r.unstable_now=function(){return d.now()-u}}var h=[],p=[],v=1,x=null,S=3,M=!1,w=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var $=t(p);$!==null;){if($.callback===null)s(p);else if($.startTime<=z)s(p),$.sortIndex=$.expirationTime,e(h,$);else break;$=t(p)}}function N(z){if(b=!1,P(z),!w)if(t(h)!==null)w=!0,j(W);else{var $=t(p);$!==null&&ee(N,$.startTime-z)}}function W(z,$){w=!1,b&&(b=!1,y(de),de=-1),M=!0;var X=S;try{for(P($),x=t(h);x!==null&&(!(x.expirationTime>$)||z&&!F());){var L=x.callback;if(typeof L=="function"){x.callback=null,S=x.priorityLevel;var V=L(x.expirationTime<=$);$=r.unstable_now(),typeof V=="function"?x.callback=V:x===t(h)&&s(h),P($)}else s(h);x=t(h)}if(x!==null)var ye=!0;else{var q=t(p);q!==null&&ee(N,q.startTime-$),ye=!1}return ye}finally{x=null,S=X,M=!1}}var k=!1,O=null,de=-1,me=5,T=-1;function F(){return!(r.unstable_now()-T<me)}function le(){if(O!==null){var z=r.unstable_now();T=z;var $=!0;try{$=O(!0,z)}finally{$?fe():(k=!1,O=null)}}else k=!1}var fe;if(typeof D=="function")fe=function(){D(le)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ne=H.port2;H.port1.onmessage=le,fe=function(){ne.postMessage(null)}}else fe=function(){_(le,0)};function j(z){O=z,k||(k=!0,fe())}function ee(z,$){de=_(function(){z(r.unstable_now())},$)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){w||M||(w=!0,j(W))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(z){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var X=S;S=$;try{return z()}finally{S=X}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=S;S=z;try{return $()}finally{S=X}},r.unstable_scheduleCallback=function(z,$,X){var L=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?L+X:L):X=L,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=X+V,z={id:v++,callback:$,priorityLevel:z,startTime:X,expirationTime:V,sortIndex:-1},X>L?(z.sortIndex=X,e(p,z),t(h)===null&&z===t(p)&&(b?(y(de),de=-1):b=!0,ee(N,X-L))):(z.sortIndex=V,e(h,z),w||M||(w=!0,j(W))),z},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(z){var $=S;return function(){var X=S;S=$;try{return z.apply(this,arguments)}finally{S=X}}}})(Iu)),Iu}var Sp;function D0(){return Sp||(Sp=1,Nu.exports=L0()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function N0(){if(Mp)return Ln;Mp=1;var r=Fd(),e=D0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function S(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,o,c,f,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,D);_[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,D);_[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,D);_[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,c){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,c)&&(o=null),c||f===null?S(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var N=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),F=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),z=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,L;function V(n){if(L===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var ye=!1;function q(n,i){if(!n||ye)return"";ye=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),g=c.stack.split(`
`),E=f.length-1,I=g.length-1;1<=E&&0<=I&&f[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==g[I]){var B=`
`+f[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=I);break}}}finally{ye=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?V(n):""}function ce(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case k:return"Portal";case me:return"Profiler";case de:return"StrictMode";case fe:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case j:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(n){var i=ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=Ce(n))}function Y(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=ae(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Fe(n,i){var o=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function qe(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ue(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ne(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function tt(n,i){Ne(n,i);var o=ue(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?R(n,i.type,o):i.hasOwnProperty("defaultValue")&&R(n,i.type,ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function $e(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function R(n,i,o){(i!=="number"||mt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var A=Array.isArray;function te(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ue(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Se(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _e(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(A(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ue(o)}}function Me(n,i){var o=ue(i.value),c=ue(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Re(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Re(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Qe,at=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Qe=Qe||document.createElement("div"),Qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Qe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ve(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(gt).forEach(function(n){ft.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),gt[i]=gt[n]})});function it(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||gt.hasOwnProperty(n)&&gt[n]?(""+i).trim():i+"px"}function Ye(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=it(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function _t(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Et=null,U=null,Ee=null;function Te(n){if(n=wo(n)){if(typeof Et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ea(i),Et(n.stateNode,n.type,i))}}function Ge(n){U?Ee?Ee.push(n):Ee=[n]:U=n}function Ke(){if(U){var n=U,i=Ee;if(Ee=U=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function yt(n,i){return n(i)}function bt(){}var Ht=!1;function vn(n,i,o){if(Ht)return n(i,o);Ht=!0;try{return yt(n,i,o)}finally{Ht=!1,(U!==null||Ee!==null)&&(bt(),Ke())}}function St(n,i){var o=n.stateNode;if(o===null)return null;var c=Ea(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Xt=!1;if(u)try{var an={};Object.defineProperty(an,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Xt=!1}function na(n,i,o,c,f,g,E,I,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ge){this.onError(ge)}}var Rr=!1,Ai=null,Cr=!1,$i=null,ia={onError:function(n){Rr=!0,Ai=n}};function ra(n,i,o,c,f,g,E,I,B){Rr=!1,Ai=null,na.apply(ia,arguments)}function Zl(n,i,o,c,f,g,E,I,B){if(ra.apply(this,arguments),Rr){if(Rr){var ie=Ai;Rr=!1,Ai=null}else throw Error(t(198));Cr||(Cr=!0,$i=ie)}}function Ri(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function sa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(Ri(n)!==n)throw Error(t(188))}function Z(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return C(f),n;if(g===c)return C(f),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var E=!1,I=f.child;I;){if(I===o){E=!0,o=f,c=g;break}if(I===c){E=!0,c=f,o=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===o){E=!0,o=g,c=f;break}if(I===c){E=!0,c=g,o=f;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function se(n){return n=Z(n),n!==null?oe(n):null}function oe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oe(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,Xe=e.unstable_shouldYield,et=e.unstable_requestPaint,De=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,rt=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,Ct=e.unstable_NormalPriority,_n=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,wn=null,vt=null;function ut(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(wn,n,void 0,(n.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:oa,Ut=Math.log,Ci=Math.LN2;function oa(n){return n>>>=0,n===0?32:31-(Ut(n)/Ci|0)|0}var pi=64,Ki=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~f;I!==0?c=zt(I):(g&=E,g!==0&&(c=zt(g)))}else E=o&~f,E!==0?c=zt(E):g!==0&&(c=zt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-xn(i),f=1<<o,c|=n[o],i&=~f;return c}function so(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-xn(g),I=1<<E,B=f[E];B===-1?((I&o)===0||(I&c)!==0)&&(f[E]=so(I,i)):B<=i&&(n.expiredLanes|=I),g&=~I}}function Pr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function aa(){var n=pi;return pi<<=1,(pi&4194240)===0&&(pi=64),n}function is(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function oo(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-xn(i),n[i]=o}function $g(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-xn(o),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function Jl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-xn(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var At=0;function qd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yd,ec,$d,Kd,Qd,tc=!1,la=[],Qi=null,Zi=null,Ji=null,ao=new Map,lo=new Map,er=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function co(n,i,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=wo(i),i!==null&&ec(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Qg(n,i,o,c,f){switch(i){case"focusin":return Qi=co(Qi,n,i,o,c,f),!0;case"dragenter":return Zi=co(Zi,n,i,o,c,f),!0;case"mouseover":return Ji=co(Ji,n,i,o,c,f),!0;case"pointerover":var g=f.pointerId;return ao.set(g,co(ao.get(g)||null,n,i,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,lo.set(g,co(lo.get(g)||null,n,i,o,c,f)),!0}return!1}function Jd(n){var i=Lr(n.target);if(i!==null){var o=Ri(i);if(o!==null){if(i=o.tag,i===13){if(i=sa(o),i!==null){n.blockedOn=i,Qd(n.priority,function(){$d(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ca(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Tt=c,o.target.dispatchEvent(c),Tt=null}else return i=wo(o),i!==null&&ec(i),n.blockedOn=o,!1;i.shift()}return!0}function ef(n,i,o){ca(n)&&o.delete(i)}function Zg(){tc=!1,Qi!==null&&ca(Qi)&&(Qi=null),Zi!==null&&ca(Zi)&&(Zi=null),Ji!==null&&ca(Ji)&&(Ji=null),ao.forEach(ef),lo.forEach(ef)}function uo(n,i){n.blockedOn===i&&(n.blockedOn=null,tc||(tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function fo(n){function i(f){return uo(f,n)}if(0<la.length){uo(la[0],n);for(var o=1;o<la.length;o++){var c=la[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&uo(Qi,n),Zi!==null&&uo(Zi,n),Ji!==null&&uo(Ji,n),ao.forEach(i),lo.forEach(i),o=0;o<er.length;o++)c=er[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)Jd(o),o.blockedOn===null&&er.shift()}var rs=N.ReactCurrentBatchConfig,ua=!0;function Jg(n,i,o,c){var f=At,g=rs.transition;rs.transition=null;try{At=1,nc(n,i,o,c)}finally{At=f,rs.transition=g}}function ev(n,i,o,c){var f=At,g=rs.transition;rs.transition=null;try{At=4,nc(n,i,o,c)}finally{At=f,rs.transition=g}}function nc(n,i,o,c){if(ua){var f=ic(n,i,o,c);if(f===null)yc(n,i,c,da,o),Zd(n,c);else if(Qg(f,n,i,o,c))c.stopPropagation();else if(Zd(n,c),i&4&&-1<Kg.indexOf(n)){for(;f!==null;){var g=wo(f);if(g!==null&&Yd(g),g=ic(n,i,o,c),g===null&&yc(n,i,c,da,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else yc(n,i,c,null,o)}}var da=null;function ic(n,i,o,c){if(da=null,n=ct(c),n=Lr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(o=i.tag,o===13){if(n=sa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return da=n,null}function tf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case rt:return 1;case ot:return 4;case Ct:case _n:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var tr=null,rc=null,fa=null;function nf(){if(fa)return fa;var n,i=rc,o=i.length,c,f="value"in tr?tr.value:tr.textContent,g=f.length;for(n=0;n<o&&i[n]===f[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===f[g-c];c++);return fa=f.slice(n,1<c?1-c:void 0)}function ha(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function pa(){return!0}function rf(){return!1}function zn(n){function i(o,c,f,g,E){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?pa:rf,this.isPropagationStopped=rf,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=zn(ss),ho=X({},ss,{view:0,detail:0}),tv=zn(ho),oc,ac,po,ma=X({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(oc=n.screenX-po.screenX,ac=n.screenY-po.screenY):ac=oc=0,po=n),oc)},movementY:function(n){return"movementY"in n?n.movementY:ac}}),sf=zn(ma),nv=X({},ma,{dataTransfer:0}),iv=zn(nv),rv=X({},ho,{relatedTarget:0}),lc=zn(rv),sv=X({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=zn(sv),av=X({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lv=zn(av),cv=X({},ss,{data:0}),of=zn(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=fv[n])?!!i[n]:!1}function cc(){return hv}var pv=X({},ho,{key:function(n){if(n.key){var i=uv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(n){return n.type==="keypress"?ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mv=zn(pv),gv=X({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=zn(gv),vv=X({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),_v=zn(vv),xv=X({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=zn(xv),Sv=X({},ma,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=zn(Sv),Ev=[9,13,27,32],uc=u&&"CompositionEvent"in window,mo=null;u&&"documentMode"in document&&(mo=document.documentMode);var wv=u&&"TextEvent"in window&&!mo,lf=u&&(!uc||mo&&8<mo&&11>=mo),cf=" ",uf=!1;function df(n,i){switch(n){case"keyup":return Ev.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function Tv(n,i){switch(n){case"compositionend":return ff(i);case"keypress":return i.which!==32?null:(uf=!0,cf);case"textInput":return n=i.data,n===cf&&uf?null:n;default:return null}}function bv(n,i){if(os)return n==="compositionend"||!uc&&df(n,i)?(n=nf(),fa=rc=tr=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lf&&i.locale!=="ko"?null:i.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Av[n.type]:i==="textarea"}function pf(n,i,o,c){Ge(c),i=ya(i,"onChange"),0<i.length&&(o=new sc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var go=null,vo=null;function Rv(n){Df(n,0)}function ga(n){var i=ds(n);if(Y(i))return n}function Cv(n,i){if(n==="change")return i}var mf=!1;if(u){var dc;if(u){var fc="oninput"in document;if(!fc){var gf=document.createElement("div");gf.setAttribute("oninput","return;"),fc=typeof gf.oninput=="function"}dc=fc}else dc=!1;mf=dc&&(!document.documentMode||9<document.documentMode)}function vf(){go&&(go.detachEvent("onpropertychange",_f),vo=go=null)}function _f(n){if(n.propertyName==="value"&&ga(vo)){var i=[];pf(i,vo,n,ct(n)),vn(Rv,i)}}function Pv(n,i,o){n==="focusin"?(vf(),go=i,vo=o,go.attachEvent("onpropertychange",_f)):n==="focusout"&&vf()}function Lv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ga(vo)}function Dv(n,i){if(n==="click")return ga(i)}function Nv(n,i){if(n==="input"||n==="change")return ga(i)}function Iv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:Iv;function _o(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!ti(n[f],i[f]))return!1}return!0}function xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yf(n,i){var o=xf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xf(o)}}function Sf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mf(){for(var n=window,i=mt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=mt(n.document)}return i}function hc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Uv(n){var i=Mf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sf(o.ownerDocument.documentElement,o)){if(c!==null&&hc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=yf(o,g);var E=yf(o,c);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fv=u&&"documentMode"in document&&11>=document.documentMode,as=null,pc=null,xo=null,mc=!1;function Ef(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;mc||as==null||as!==mt(c)||(c=as,"selectionStart"in c&&hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xo&&_o(xo,c)||(xo=c,c=ya(pc,"onSelect"),0<c.length&&(i=new sc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=as)))}function va(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ls={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},gc={},wf={};u&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function _a(n){if(gc[n])return gc[n];if(!ls[n])return n;var i=ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in wf)return gc[n]=i[o];return n}var Tf=_a("animationend"),bf=_a("animationiteration"),Af=_a("animationstart"),Rf=_a("transitionend"),Cf=new Map,Pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){Cf.set(n,i),l(i,[n])}for(var vc=0;vc<Pf.length;vc++){var _c=Pf[vc],Ov=_c.toLowerCase(),kv=_c[0].toUpperCase()+_c.slice(1);nr(Ov,"on"+kv)}nr(Tf,"onAnimationEnd"),nr(bf,"onAnimationIteration"),nr(Af,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Rf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Lf(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Zl(c,i,void 0,n),n.currentTarget=null}function Df(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],B=I.instance,ie=I.currentTarget;if(I=I.listener,B!==g&&f.isPropagationStopped())break e;Lf(f,I,ie),g=B}else for(E=0;E<c.length;E++){if(I=c[E],B=I.instance,ie=I.currentTarget,I=I.listener,B!==g&&f.isPropagationStopped())break e;Lf(f,I,ie),g=B}}}if(Cr)throw n=$i,Cr=!1,$i=null,n}function Lt(n,i){var o=i[bc];o===void 0&&(o=i[bc]=new Set);var c=n+"__bubble";o.has(c)||(Nf(i,n,2,!1),o.add(c))}function xc(n,i,o){var c=0;i&&(c|=4),Nf(o,n,c,i)}var xa="_reactListening"+Math.random().toString(36).slice(2);function So(n){if(!n[xa]){n[xa]=!0,s.forEach(function(o){o!=="selectionchange"&&(zv.has(o)||xc(o,!1,n),xc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[xa]||(i[xa]=!0,xc("selectionchange",!1,i))}}function Nf(n,i,o,c){switch(tf(i)){case 1:var f=Jg;break;case 4:f=ev;break;default:f=nc}o=f.bind(null,i,o,n),f=void 0,!Xt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function yc(n,i,o,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Lr(I),E===null)return;if(B=E.tag,B===5||B===6){c=g=E;continue e}I=I.parentNode}}c=c.return}vn(function(){var ie=g,ge=ct(o),xe=[];e:{var pe=Cf.get(n);if(pe!==void 0){var Le=sc,ke=n;switch(n){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":Le=mv;break;case"focusin":ke="focus",Le=lc;break;case"focusout":ke="blur",Le=lc;break;case"beforeblur":case"afterblur":Le=lc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=_v;break;case Tf:case bf:case Af:Le=ov;break;case Rf:Le=yv;break;case"scroll":Le=tv;break;case"wheel":Le=Mv;break;case"copy":case"cut":case"paste":Le=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=af}var He=(i&4)!==0,Vt=!He&&n==="scroll",Q=He?pe!==null?pe+"Capture":null:pe;He=[];for(var G=ie,J;G!==null;){J=G;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,Q!==null&&(we=St(G,Q),we!=null&&He.push(Mo(G,we,J)))),Vt)break;G=G.return}0<He.length&&(pe=new Le(pe,ke,null,o,ge),xe.push({event:pe,listeners:He}))}}if((i&7)===0){e:{if(pe=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",pe&&o!==Tt&&(ke=o.relatedTarget||o.fromElement)&&(Lr(ke)||ke[Pi]))break e;if((Le||pe)&&(pe=ge.window===ge?ge:(pe=ge.ownerDocument)?pe.defaultView||pe.parentWindow:window,Le?(ke=o.relatedTarget||o.toElement,Le=ie,ke=ke?Lr(ke):null,ke!==null&&(Vt=Ri(ke),ke!==Vt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Le=null,ke=ie),Le!==ke)){if(He=sf,we="onMouseLeave",Q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(He=af,we="onPointerLeave",Q="onPointerEnter",G="pointer"),Vt=Le==null?pe:ds(Le),J=ke==null?pe:ds(ke),pe=new He(we,G+"leave",Le,o,ge),pe.target=Vt,pe.relatedTarget=J,we=null,Lr(ge)===ie&&(He=new He(Q,G+"enter",ke,o,ge),He.target=J,He.relatedTarget=Vt,we=He),Vt=we,Le&&ke)t:{for(He=Le,Q=ke,G=0,J=He;J;J=cs(J))G++;for(J=0,we=Q;we;we=cs(we))J++;for(;0<G-J;)He=cs(He),G--;for(;0<J-G;)Q=cs(Q),J--;for(;G--;){if(He===Q||Q!==null&&He===Q.alternate)break t;He=cs(He),Q=cs(Q)}He=null}else He=null;Le!==null&&If(xe,pe,Le,He,!1),ke!==null&&Vt!==null&&If(xe,Vt,ke,He,!0)}}e:{if(pe=ie?ds(ie):window,Le=pe.nodeName&&pe.nodeName.toLowerCase(),Le==="select"||Le==="input"&&pe.type==="file")var We=Cv;else if(hf(pe))if(mf)We=Nv;else{We=Lv;var Ze=Pv}else(Le=pe.nodeName)&&Le.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(We=Dv);if(We&&(We=We(n,ie))){pf(xe,We,o,ge);break e}Ze&&Ze(n,pe,ie),n==="focusout"&&(Ze=pe._wrapperState)&&Ze.controlled&&pe.type==="number"&&R(pe,"number",pe.value)}switch(Ze=ie?ds(ie):window,n){case"focusin":(hf(Ze)||Ze.contentEditable==="true")&&(as=Ze,pc=ie,xo=null);break;case"focusout":xo=pc=as=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Ef(xe,o,ge);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Ef(xe,o,ge)}var Je;if(uc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else os?df(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(lf&&o.locale!=="ko"&&(os||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&os&&(Je=nf()):(tr=ge,rc="value"in tr?tr.value:tr.textContent,os=!0)),Ze=ya(ie,nt),0<Ze.length&&(nt=new of(nt,n,null,o,ge),xe.push({event:nt,listeners:Ze}),Je?nt.data=Je:(Je=ff(o),Je!==null&&(nt.data=Je)))),(Je=wv?Tv(n,o):bv(n,o))&&(ie=ya(ie,"onBeforeInput"),0<ie.length&&(ge=new of("onBeforeInput","beforeinput",null,o,ge),xe.push({event:ge,listeners:ie}),ge.data=Je))}Df(xe,i)})}function Mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ya(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=St(n,o),g!=null&&c.unshift(Mo(n,g,f)),g=St(n,i),g!=null&&c.push(Mo(n,g,f))),n=n.return}return c}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function If(n,i,o,c,f){for(var g=i._reactName,E=[];o!==null&&o!==c;){var I=o,B=I.alternate,ie=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&ie!==null&&(I=ie,f?(B=St(o,g),B!=null&&E.unshift(Mo(o,B,I))):f||(B=St(o,g),B!=null&&E.push(Mo(o,B,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Bv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function Uf(n){return(typeof n=="string"?n:""+n).replace(Bv,`
`).replace(Hv,"")}function Sa(n,i,o){if(i=Uf(i),Uf(n)!==i&&o)throw Error(t(425))}function Ma(){}var Sc=null,Mc=null;function Ec(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(n){return Ff.resolve(null).then(n).catch(Wv)}:wc;function Wv(n){setTimeout(function(){throw n})}function Tc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),fo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);fo(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Of(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),mi="__reactFiber$"+us,Eo="__reactProps$"+us,Pi="__reactContainer$"+us,bc="__reactEvents$"+us,jv="__reactListeners$"+us,Xv="__reactHandles$"+us;function Lr(n){var i=n[mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Pi]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Of(n);n!==null;){if(o=n[mi])return o;n=Of(n)}return i}n=o,o=n.parentNode}return null}function wo(n){return n=n[mi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ea(n){return n[Eo]||null}var Ac=[],fs=-1;function rr(n){return{current:n}}function Dt(n){0>fs||(n.current=Ac[fs],Ac[fs]=null,fs--)}function Pt(n,i){fs++,Ac[fs]=n.current,n.current=i}var sr={},ln=rr(sr),bn=rr(!1),Dr=sr;function hs(n,i){var o=n.type.contextTypes;if(!o)return sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function An(n){return n=n.childContextTypes,n!=null}function wa(){Dt(bn),Dt(ln)}function kf(n,i,o){if(ln.current!==sr)throw Error(t(168));Pt(ln,i),Pt(bn,o)}function zf(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,be(n)||"Unknown",f));return X({},o,c)}function Ta(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Dr=ln.current,Pt(ln,n),Pt(bn,bn.current),!0}function Bf(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=zf(n,i,Dr),c.__reactInternalMemoizedMergedChildContext=n,Dt(bn),Dt(ln),Pt(ln,n)):Dt(bn),Pt(bn,o)}var Li=null,ba=!1,Rc=!1;function Hf(n){Li===null?Li=[n]:Li.push(n)}function qv(n){ba=!0,Hf(n)}function or(){if(!Rc&&Li!==null){Rc=!0;var n=0,i=At;try{var o=Li;for(At=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Li=null,ba=!1}catch(f){throw Li!==null&&(Li=Li.slice(n+1)),re(rt,or),f}finally{At=i,Rc=!1}}return null}var ps=[],ms=0,Aa=null,Ra=0,Xn=[],qn=0,Nr=null,Di=1,Ni="";function Ir(n,i){ps[ms++]=Ra,ps[ms++]=Aa,Aa=n,Ra=i}function Gf(n,i,o){Xn[qn++]=Di,Xn[qn++]=Ni,Xn[qn++]=Nr,Nr=n;var c=Di;n=Ni;var f=32-xn(c)-1;c&=~(1<<f),o+=1;var g=32-xn(i)+f;if(30<g){var E=f-f%5;g=(c&(1<<E)-1).toString(32),c>>=E,f-=E,Di=1<<32-xn(i)+f|o<<f|c,Ni=g+n}else Di=1<<g|o<<f|c,Ni=n}function Cc(n){n.return!==null&&(Ir(n,1),Gf(n,1,0))}function Pc(n){for(;n===Aa;)Aa=ps[--ms],ps[ms]=null,Ra=ps[--ms],ps[ms]=null;for(;n===Nr;)Nr=Xn[--qn],Xn[qn]=null,Ni=Xn[--qn],Xn[qn]=null,Di=Xn[--qn],Xn[qn]=null}var Bn=null,Hn=null,Ft=!1,ni=null;function Vf(n,i){var o=Qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Wf(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,Hn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Nr!==null?{id:Di,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Bn=n,Hn=null,!0):!1;default:return!1}}function Lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dc(n){if(Ft){var i=Hn;if(i){var o=i;if(!Wf(n,i)){if(Lc(n))throw Error(t(418));i=ir(o.nextSibling);var c=Bn;i&&Wf(n,i)?Vf(c,o):(n.flags=n.flags&-4097|2,Ft=!1,Bn=n)}}else{if(Lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Bn=n}}}function jf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Ca(n){if(n!==Bn)return!1;if(!Ft)return jf(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ec(n.type,n.memoizedProps)),i&&(i=Hn)){if(Lc(n))throw Xf(),Error(t(418));for(;i;)Vf(n,i),i=ir(i.nextSibling)}if(jf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Hn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=Bn?ir(n.stateNode.nextSibling):null;return!0}function Xf(){for(var n=Hn;n;)n=ir(n.nextSibling)}function gs(){Hn=Bn=null,Ft=!1}function Nc(n){ni===null?ni=[n]:ni.push(n)}var Yv=N.ReactCurrentBatchConfig;function To(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var I=f.refs;E===null?delete I[g]:I[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Pa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qf(n){var i=n._init;return i(n._payload)}function Yf(n){function i(Q,G){if(n){var J=Q.deletions;J===null?(Q.deletions=[G],Q.flags|=16):J.push(G)}}function o(Q,G){if(!n)return null;for(;G!==null;)i(Q,G),G=G.sibling;return null}function c(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function f(Q,G){return Q=pr(Q,G),Q.index=0,Q.sibling=null,Q}function g(Q,G,J){return Q.index=J,n?(J=Q.alternate,J!==null?(J=J.index,J<G?(Q.flags|=2,G):J):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function E(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,G,J,we){return G===null||G.tag!==6?(G=wu(J,Q.mode,we),G.return=Q,G):(G=f(G,J),G.return=Q,G)}function B(Q,G,J,we){var We=J.type;return We===O?ge(Q,G,J.props.children,we,J.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===j&&qf(We)===G.type)?(we=f(G,J.props),we.ref=To(Q,G,J),we.return=Q,we):(we=el(J.type,J.key,J.props,null,Q.mode,we),we.ref=To(Q,G,J),we.return=Q,we)}function ie(Q,G,J,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Tu(J,Q.mode,we),G.return=Q,G):(G=f(G,J.children||[]),G.return=Q,G)}function ge(Q,G,J,we,We){return G===null||G.tag!==7?(G=Gr(J,Q.mode,we,We),G.return=Q,G):(G=f(G,J),G.return=Q,G)}function xe(Q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=wu(""+G,Q.mode,J),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return J=el(G.type,G.key,G.props,null,Q.mode,J),J.ref=To(Q,null,G),J.return=Q,J;case k:return G=Tu(G,Q.mode,J),G.return=Q,G;case j:var we=G._init;return xe(Q,we(G._payload),J)}if(A(G)||$(G))return G=Gr(G,Q.mode,J,null),G.return=Q,G;Pa(Q,G)}return null}function pe(Q,G,J,we){var We=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return We!==null?null:I(Q,G,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case W:return J.key===We?B(Q,G,J,we):null;case k:return J.key===We?ie(Q,G,J,we):null;case j:return We=J._init,pe(Q,G,We(J._payload),we)}if(A(J)||$(J))return We!==null?null:ge(Q,G,J,we,null);Pa(Q,J)}return null}function Le(Q,G,J,we,We){if(typeof we=="string"&&we!==""||typeof we=="number")return Q=Q.get(J)||null,I(G,Q,""+we,We);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case W:return Q=Q.get(we.key===null?J:we.key)||null,B(G,Q,we,We);case k:return Q=Q.get(we.key===null?J:we.key)||null,ie(G,Q,we,We);case j:var Ze=we._init;return Le(Q,G,J,Ze(we._payload),We)}if(A(we)||$(we))return Q=Q.get(J)||null,ge(G,Q,we,We,null);Pa(G,we)}return null}function ke(Q,G,J,we){for(var We=null,Ze=null,Je=G,nt=G=0,en=null;Je!==null&&nt<J.length;nt++){Je.index>nt?(en=Je,Je=null):en=Je.sibling;var Mt=pe(Q,Je,J[nt],we);if(Mt===null){Je===null&&(Je=en);break}n&&Je&&Mt.alternate===null&&i(Q,Je),G=g(Mt,G,nt),Ze===null?We=Mt:Ze.sibling=Mt,Ze=Mt,Je=en}if(nt===J.length)return o(Q,Je),Ft&&Ir(Q,nt),We;if(Je===null){for(;nt<J.length;nt++)Je=xe(Q,J[nt],we),Je!==null&&(G=g(Je,G,nt),Ze===null?We=Je:Ze.sibling=Je,Ze=Je);return Ft&&Ir(Q,nt),We}for(Je=c(Q,Je);nt<J.length;nt++)en=Le(Je,Q,nt,J[nt],we),en!==null&&(n&&en.alternate!==null&&Je.delete(en.key===null?nt:en.key),G=g(en,G,nt),Ze===null?We=en:Ze.sibling=en,Ze=en);return n&&Je.forEach(function(mr){return i(Q,mr)}),Ft&&Ir(Q,nt),We}function He(Q,G,J,we){var We=$(J);if(typeof We!="function")throw Error(t(150));if(J=We.call(J),J==null)throw Error(t(151));for(var Ze=We=null,Je=G,nt=G=0,en=null,Mt=J.next();Je!==null&&!Mt.done;nt++,Mt=J.next()){Je.index>nt?(en=Je,Je=null):en=Je.sibling;var mr=pe(Q,Je,Mt.value,we);if(mr===null){Je===null&&(Je=en);break}n&&Je&&mr.alternate===null&&i(Q,Je),G=g(mr,G,nt),Ze===null?We=mr:Ze.sibling=mr,Ze=mr,Je=en}if(Mt.done)return o(Q,Je),Ft&&Ir(Q,nt),We;if(Je===null){for(;!Mt.done;nt++,Mt=J.next())Mt=xe(Q,Mt.value,we),Mt!==null&&(G=g(Mt,G,nt),Ze===null?We=Mt:Ze.sibling=Mt,Ze=Mt);return Ft&&Ir(Q,nt),We}for(Je=c(Q,Je);!Mt.done;nt++,Mt=J.next())Mt=Le(Je,Q,nt,Mt.value,we),Mt!==null&&(n&&Mt.alternate!==null&&Je.delete(Mt.key===null?nt:Mt.key),G=g(Mt,G,nt),Ze===null?We=Mt:Ze.sibling=Mt,Ze=Mt);return n&&Je.forEach(function(A0){return i(Q,A0)}),Ft&&Ir(Q,nt),We}function Vt(Q,G,J,we){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case W:e:{for(var We=J.key,Ze=G;Ze!==null;){if(Ze.key===We){if(We=J.type,We===O){if(Ze.tag===7){o(Q,Ze.sibling),G=f(Ze,J.props.children),G.return=Q,Q=G;break e}}else if(Ze.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===j&&qf(We)===Ze.type){o(Q,Ze.sibling),G=f(Ze,J.props),G.ref=To(Q,Ze,J),G.return=Q,Q=G;break e}o(Q,Ze);break}else i(Q,Ze);Ze=Ze.sibling}J.type===O?(G=Gr(J.props.children,Q.mode,we,J.key),G.return=Q,Q=G):(we=el(J.type,J.key,J.props,null,Q.mode,we),we.ref=To(Q,G,J),we.return=Q,Q=we)}return E(Q);case k:e:{for(Ze=J.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){o(Q,G.sibling),G=f(G,J.children||[]),G.return=Q,Q=G;break e}else{o(Q,G);break}else i(Q,G);G=G.sibling}G=Tu(J,Q.mode,we),G.return=Q,Q=G}return E(Q);case j:return Ze=J._init,Vt(Q,G,Ze(J._payload),we)}if(A(J))return ke(Q,G,J,we);if($(J))return He(Q,G,J,we);Pa(Q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(o(Q,G.sibling),G=f(G,J),G.return=Q,Q=G):(o(Q,G),G=wu(J,Q.mode,we),G.return=Q,Q=G),E(Q)):o(Q,G)}return Vt}var vs=Yf(!0),$f=Yf(!1),La=rr(null),Da=null,_s=null,Ic=null;function Uc(){Ic=_s=Da=null}function Fc(n){var i=La.current;Dt(La),n._currentValue=i}function Oc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function xs(n,i){Da=n,Ic=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(Ic!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Da===null)throw Error(t(308));_s=n,Da.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Ur=null;function kc(n){Ur===null?Ur=[n]:Ur.push(n)}function Kf(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,kc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ii(n,c)}function Ii(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ii(n,o)}return f=c.interleaved,f===null?(i.next=i,kc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ii(n,o)}function Na(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Jl(n,o)}}function Zf(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ia(n,i,o,c){var f=n.updateQueue;ar=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,ie=B.next;B.next=null,E===null?g=ie:E.next=ie,E=B;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,I=ge.lastBaseUpdate,I!==E&&(I===null?ge.firstBaseUpdate=ie:I.next=ie,ge.lastBaseUpdate=B))}if(g!==null){var xe=f.baseState;E=0,ge=ie=B=null,I=g;do{var pe=I.lane,Le=I.eventTime;if((c&pe)===pe){ge!==null&&(ge=ge.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ke=n,He=I;switch(pe=i,Le=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){xe=ke.call(Le,xe,pe);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,pe=typeof ke=="function"?ke.call(Le,xe,pe):ke,pe==null)break e;xe=X({},xe,pe);break e;case 2:ar=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,pe=f.effects,pe===null?f.effects=[I]:pe.push(I))}else Le={eventTime:Le,lane:pe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ge===null?(ie=ge=Le,B=xe):ge=ge.next=Le,E|=pe;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;pe=I,I=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);if(ge===null&&(B=xe),f.baseState=B,f.firstBaseUpdate=ie,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);kr|=E,n.lanes=E,n.memoizedState=xe}}function Jf(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var bo={},gi=rr(bo),Ao=rr(bo),Ro=rr(bo);function Fr(n){if(n===bo)throw Error(t(174));return n}function Bc(n,i){switch(Pt(Ro,i),Pt(Ao,n),Pt(gi,bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Oe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Oe(i,n)}Dt(gi),Pt(gi,i)}function ys(){Dt(gi),Dt(Ao),Dt(Ro)}function eh(n){Fr(Ro.current);var i=Fr(gi.current),o=Oe(i,n.type);i!==o&&(Pt(Ao,n),Pt(gi,o))}function Hc(n){Ao.current===n&&(Dt(gi),Dt(Ao))}var Ot=rr(0);function Ua(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gc=[];function Vc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var Fa=N.ReactCurrentDispatcher,Wc=N.ReactCurrentBatchConfig,Or=0,kt=null,qt=null,Zt=null,Oa=!1,Co=!1,Po=0,$v=0;function cn(){throw Error(t(321))}function jc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ti(n[o],i[o]))return!1;return!0}function Xc(n,i,o,c,f,g){if(Or=g,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fa.current=n===null||n.memoizedState===null?Jv:e0,n=o(c,f),Co){g=0;do{if(Co=!1,Po=0,25<=g)throw Error(t(301));g+=1,Zt=qt=null,i.updateQueue=null,Fa.current=t0,n=o(c,f)}while(Co)}if(Fa.current=Ba,i=qt!==null&&qt.next!==null,Or=0,Zt=qt=kt=null,Oa=!1,i)throw Error(t(300));return n}function qc(){var n=Po!==0;return Po=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?kt.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function $n(){if(qt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=qt.next;var i=Zt===null?kt.memoizedState:Zt.next;if(i!==null)Zt=i,qt=n;else{if(n===null)throw Error(t(310));qt=n,n={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Zt===null?kt.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function Lo(n,i){return typeof i=="function"?i(n):i}function Yc(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=qt,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=E=null,B=null,ie=g;do{var ge=ie.lane;if((Or&ge)===ge)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var xe={lane:ge,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(I=B=xe,E=c):B=B.next=xe,kt.lanes|=ge,kr|=ge}ie=ie.next}while(ie!==null&&ie!==g);B===null?E=c:B.next=I,ti(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,kt.lanes|=g,kr|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function $c(n){var i=$n(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do g=n(g,E.action),E=E.next;while(E!==f);ti(g,i.memoizedState)||(Rn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function th(){}function nh(n,i){var o=kt,c=$n(),f=i(),g=!ti(c.memoizedState,f);if(g&&(c.memoizedState=f,Rn=!0),c=c.queue,Kc(sh.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,Do(9,rh.bind(null,o,c,f,i),void 0,null),Jt===null)throw Error(t(349));(Or&30)!==0||ih(o,i,f)}return f}function ih(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function rh(n,i,o,c){i.value=o,i.getSnapshot=c,oh(i)&&ah(n)}function sh(n,i,o){return o(function(){oh(i)&&ah(n)})}function oh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ti(n,o)}catch{return!0}}function ah(n){var i=Ii(n,1);i!==null&&oi(i,n,1,-1)}function lh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},i.queue=n,n=n.dispatch=Zv.bind(null,kt,n),[i.memoizedState,n]}function Do(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function ch(){return $n().memoizedState}function ka(n,i,o,c){var f=vi();kt.flags|=n,f.memoizedState=Do(1|i,o,void 0,c===void 0?null:c)}function za(n,i,o,c){var f=$n();c=c===void 0?null:c;var g=void 0;if(qt!==null){var E=qt.memoizedState;if(g=E.destroy,c!==null&&jc(c,E.deps)){f.memoizedState=Do(i,o,g,c);return}}kt.flags|=n,f.memoizedState=Do(1|i,o,g,c)}function uh(n,i){return ka(8390656,8,n,i)}function Kc(n,i){return za(2048,8,n,i)}function dh(n,i){return za(4,2,n,i)}function fh(n,i){return za(4,4,n,i)}function hh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ph(n,i,o){return o=o!=null?o.concat([n]):null,za(4,4,hh.bind(null,i,n),o)}function Qc(){}function mh(n,i){var o=$n();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function gh(n,i){var o=$n();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function vh(n,i,o){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=o):(ti(o,i)||(o=aa(),kt.lanes|=o,kr|=o,n.baseState=!0),i)}function Kv(n,i){var o=At;At=o!==0&&4>o?o:4,n(!0);var c=Wc.transition;Wc.transition={};try{n(!1),i()}finally{At=o,Wc.transition=c}}function _h(){return $n().memoizedState}function Qv(n,i,o){var c=fr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},xh(n))yh(i,o);else if(o=Kf(n,i,o,c),o!==null){var f=Sn();oi(o,n,c,f),Sh(o,i,c)}}function Zv(n,i,o){var c=fr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(xh(n))yh(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,I=g(E,o);if(f.hasEagerState=!0,f.eagerState=I,ti(I,E)){var B=i.interleaved;B===null?(f.next=f,kc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=Kf(n,i,f,c),o!==null&&(f=Sn(),oi(o,n,c,f),Sh(o,i,c))}}function xh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function yh(n,i){Co=Oa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Sh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Jl(n,o)}}var Ba={readContext:Yn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Jv={readContext:Yn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:uh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ka(4194308,4,hh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return ka(4,2,n,i)},useMemo:function(n,i){var o=vi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=vi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Qv.bind(null,kt,n),[c.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:lh,useDebugValue:Qc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=lh(!1),i=n[0];return n=Kv.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=kt,f=vi();if(Ft){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Jt===null)throw Error(t(349));(Or&30)!==0||ih(c,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,uh(sh.bind(null,c,g,n),[n]),c.flags|=2048,Do(9,rh.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=vi(),i=Jt.identifierPrefix;if(Ft){var o=Ni,c=Di;o=(c&~(1<<32-xn(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Po++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=$v++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},e0={readContext:Yn,useCallback:mh,useContext:Yn,useEffect:Kc,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:fh,useMemo:gh,useReducer:Yc,useRef:ch,useState:function(){return Yc(Lo)},useDebugValue:Qc,useDeferredValue:function(n){var i=$n();return vh(i,qt.memoizedState,n)},useTransition:function(){var n=Yc(Lo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:th,useSyncExternalStore:nh,useId:_h,unstable_isNewReconciler:!1},t0={readContext:Yn,useCallback:mh,useContext:Yn,useEffect:Kc,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:fh,useMemo:gh,useReducer:$c,useRef:ch,useState:function(){return $c(Lo)},useDebugValue:Qc,useDeferredValue:function(n){var i=$n();return qt===null?i.memoizedState=n:vh(i,qt.memoizedState,n)},useTransition:function(){var n=$c(Lo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:th,useSyncExternalStore:nh,useId:_h,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Zc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:X({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ha={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Sn(),f=fr(n),g=Ui(c,f);g.payload=i,o!=null&&(g.callback=o),i=lr(n,g,f),i!==null&&(oi(i,n,f,c),Na(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Sn(),f=fr(n),g=Ui(c,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=lr(n,g,f),i!==null&&(oi(i,n,f,c),Na(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Sn(),c=fr(n),f=Ui(o,c);f.tag=2,i!=null&&(f.callback=i),i=lr(n,f,c),i!==null&&(oi(i,n,c,o),Na(i,n,c))}};function Mh(n,i,o,c,f,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!_o(o,c)||!_o(f,g):!0}function Eh(n,i,o){var c=!1,f=sr,g=i.contextType;return typeof g=="object"&&g!==null?g=Yn(g):(f=An(i)?Dr:ln.current,c=i.contextTypes,g=(c=c!=null)?hs(n,f):sr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function wh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Ha.enqueueReplaceState(i,i.state,null)}function Jc(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},zc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Yn(g):(g=An(i)?Dr:ln.current,f.context=hs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Zc(n,i,g,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ha.enqueueReplaceState(f,f.state,null),Ia(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var o="",c=i;do o+=ce(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function eu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function tu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Th(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Ya||(Ya=!0,gu=c),tu(n,i)},o}function bh(n,i,o){o=Ui(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){tu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){tu(n,i),typeof c!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Ah(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new n0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=g0.bind(null,n,i,o),i.then(n,n))}function Rh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ch(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var i0=N.ReactCurrentOwner,Rn=!1;function yn(n,i,o,c){i.child=n===null?$f(i,null,o,c):vs(i,n.child,o,c)}function Ph(n,i,o,c,f){o=o.render;var g=i.ref;return xs(i,f),c=Xc(n,i,o,c,g,f),o=qc(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(Ft&&o&&Cc(i),i.flags|=1,yn(n,i,c,f),i.child)}function Lh(n,i,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!Eu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Dh(n,i,g,c,f)):(n=el(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:_o,o(E,c)&&n.ref===i.ref)return Fi(n,i,f)}return i.flags|=1,n=pr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Dh(n,i,o,c,f){if(n!==null){var g=n.memoizedProps;if(_o(g,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,Fi(n,i,f)}return nu(n,i,o,c,f)}function Nh(n,i,o){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Es,Gn),Gn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Pt(Es,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Pt(Es,Gn),Gn|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Pt(Es,Gn),Gn|=c;return yn(n,i,f,o),i.child}function Ih(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function nu(n,i,o,c,f){var g=An(o)?Dr:ln.current;return g=hs(i,g),xs(i,f),o=Xc(n,i,o,c,g,f),c=qc(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(Ft&&c&&Cc(i),i.flags|=1,yn(n,i,o,f),i.child)}function Uh(n,i,o,c,f){if(An(o)){var g=!0;Ta(i)}else g=!1;if(xs(i,f),i.stateNode===null)Va(n,i),Eh(i,o,c),Jc(i,o,c,f),c=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Yn(ie):(ie=An(o)?Dr:ln.current,ie=hs(i,ie));var ge=o.getDerivedStateFromProps,xe=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||B!==ie)&&wh(i,E,c,ie),ar=!1;var pe=i.memoizedState;E.state=pe,Ia(i,c,E,f),B=i.memoizedState,I!==c||pe!==B||bn.current||ar?(typeof ge=="function"&&(Zc(i,o,ge,c),B=i.memoizedState),(I=ar||Mh(i,o,I,c,pe,B,ie))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=ie,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Qf(n,i),I=i.memoizedProps,ie=i.type===i.elementType?I:ii(i.type,I),E.props=ie,xe=i.pendingProps,pe=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=Yn(B):(B=An(o)?Dr:ln.current,B=hs(i,B));var Le=o.getDerivedStateFromProps;(ge=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||pe!==B)&&wh(i,E,c,B),ar=!1,pe=i.memoizedState,E.state=pe,Ia(i,c,E,f);var ke=i.memoizedState;I!==xe||pe!==ke||bn.current||ar?(typeof Le=="function"&&(Zc(i,o,Le,c),ke=i.memoizedState),(ie=ar||Mh(i,o,ie,c,pe,ke,B)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ke,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ke,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ke),E.props=c,E.state=ke,E.context=B,c=ie):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=1024),c=!1)}return iu(n,i,o,c,g,f)}function iu(n,i,o,c,f,g){Ih(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&Bf(i,o,!1),Fi(n,i,g);c=i.stateNode,i0.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=vs(i,n.child,null,g),i.child=vs(i,null,I,g)):yn(n,i,I,g),i.memoizedState=c.state,f&&Bf(i,o,!0),i.child}function Fh(n){var i=n.stateNode;i.pendingContext?kf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kf(n,i.context,!1),Bc(n,i.containerInfo)}function Oh(n,i,o,c,f){return gs(),Nc(f),i.flags|=256,yn(n,i,o,c),i.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function su(n){return{baseLanes:n,cachePool:null,transitions:null}}function kh(n,i,o){var c=i.pendingProps,f=Ot.current,g=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Pt(Ot,f&1),n===null)return Dc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=tl(E,c,0,null),n=Gr(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=su(o),i.memoizedState=ru,n):ou(i,E));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return r0(n,i,E,c,I,f,o);if(g){g=c.fallback,E=i.mode,f=n.child,I=f.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=pr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=pr(I,g):(g=Gr(g,E,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=n.child.memoizedState,E=E===null?su(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~o,i.memoizedState=ru,c}return g=n.child,n=g.sibling,c=pr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function ou(n,i){return i=tl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ga(n,i,o,c){return c!==null&&Nc(c),vs(i,n.child,null,o),n=ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function r0(n,i,o,c,f,g,E){if(o)return i.flags&256?(i.flags&=-257,c=eu(Error(t(422))),Ga(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=tl({mode:"visible",children:c.children},f,0,null),g=Gr(g,f,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&vs(i,n.child,null,E),i.child.memoizedState=su(E),i.memoizedState=ru,g);if((i.mode&1)===0)return Ga(n,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=eu(g,c,void 0),Ga(n,i,E,c)}if(I=(E&n.childLanes)!==0,Rn||I){if(c=Jt,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ii(n,f),oi(c,n,f,-1))}return Mu(),c=eu(Error(t(421))),Ga(n,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=v0.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,Hn=ir(f.nextSibling),Bn=i,Ft=!0,ni=null,n!==null&&(Xn[qn++]=Di,Xn[qn++]=Ni,Xn[qn++]=Nr,Di=n.id,Ni=n.overflow,Nr=i),i=ou(i,c.children),i.flags|=4096,i)}function zh(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Oc(n.return,i,o)}function au(n,i,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function Bh(n,i,o){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(yn(n,i,c.children,o),c=Ot.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zh(n,o,i);else if(n.tag===19)zh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Pt(Ot,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Ua(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),au(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ua(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}au(i,!0,o,null,g);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function s0(n,i,o){switch(i.tag){case 3:Fh(i),gs();break;case 5:eh(i);break;case 1:An(i.type)&&Ta(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Pt(La,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Pt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?kh(n,i,o):(Pt(Ot,Ot.current&1),n=Fi(n,i,o),n!==null?n.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bh(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Pt(Ot,Ot.current),c)break;return null;case 22:case 23:return i.lanes=0,Nh(n,i,o)}return Fi(n,i,o)}var Hh,lu,Gh,Vh;Hh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},lu=function(){},Gh=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Fr(gi.current);var g=null;switch(o){case"input":f=Fe(n,f),c=Fe(n,c),g=[];break;case"select":f=X({},f,{value:void 0}),c=X({},c,{value:void 0}),g=[];break;case"textarea":f=Se(n,f),c=Se(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ma)}st(o,c);var E;o=null;for(ie in f)if(!c.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var I=f[ie];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in c){var B=c[ie];if(I=f!=null?f[ie]:void 0,c.hasOwnProperty(ie)&&B!==I&&(B!=null||I!=null))if(ie==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(g||(g=[]),g.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(g=g||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(g=g||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Lt("scroll",n),g||I===B||(g=[])):(g=g||[]).push(ie,B))}o&&(g=g||[]).push("style",o);var ie=g;(i.updateQueue=ie)&&(i.flags|=4)}},Vh=function(n,i,o,c){o!==c&&(i.flags|=4)};function No(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function un(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function o0(n,i,o){var c=i.pendingProps;switch(Pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return An(i.type)&&wa(),un(i),null;case 3:return c=i.stateNode,ys(),Dt(bn),Dt(ln),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ca(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(xu(ni),ni=null))),lu(n,i),un(i),null;case 5:Hc(i);var f=Fr(Ro.current);if(o=i.type,n!==null&&i.stateNode!=null)Gh(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return un(i),null}if(n=Fr(gi.current),Ca(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[mi]=i,c[Eo]=g,n=(i.mode&1)!==0,o){case"dialog":Lt("cancel",c),Lt("close",c);break;case"iframe":case"object":case"embed":Lt("load",c);break;case"video":case"audio":for(f=0;f<yo.length;f++)Lt(yo[f],c);break;case"source":Lt("error",c);break;case"img":case"image":case"link":Lt("error",c),Lt("load",c);break;case"details":Lt("toggle",c);break;case"input":qe(c,g),Lt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Lt("invalid",c);break;case"textarea":_e(c,g),Lt("invalid",c)}st(o,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&Sa(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&Sa(c.textContent,I,n),f=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Lt("scroll",c)}switch(o){case"input":ze(c),$e(c,g,!0);break;case"textarea":ze(c),Ve(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ma)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Re(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[mi]=i,n[Eo]=c,Hh(n,i,!1,!1),i.stateNode=n;e:{switch(E=_t(o,c),o){case"dialog":Lt("cancel",n),Lt("close",n),f=c;break;case"iframe":case"object":case"embed":Lt("load",n),f=c;break;case"video":case"audio":for(f=0;f<yo.length;f++)Lt(yo[f],n);f=c;break;case"source":Lt("error",n),f=c;break;case"img":case"image":case"link":Lt("error",n),Lt("load",n),f=c;break;case"details":Lt("toggle",n),f=c;break;case"input":qe(n,c),f=Fe(n,c),Lt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=X({},c,{value:void 0}),Lt("invalid",n);break;case"textarea":_e(n,c),f=Se(n,c),Lt("invalid",n);break;default:f=c}st(o,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var B=I[g];g==="style"?Ye(n,B):g==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&at(n,B)):g==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ve(n,B):typeof B=="number"&&ve(n,""+B):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?B!=null&&g==="onScroll"&&Lt("scroll",n):B!=null&&P(n,g,B,E))}switch(o){case"input":ze(n),$e(n,c,!1);break;case"textarea":ze(n),Ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ue(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?te(n,!!c.multiple,g,!1):c.defaultValue!=null&&te(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ma)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(n&&i.stateNode!=null)Vh(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Fr(Ro.current),Fr(gi.current),Ca(i)){if(c=i.stateNode,o=i.memoizedProps,c[mi]=i,(g=c.nodeValue!==o)&&(n=Bn,n!==null))switch(n.tag){case 3:Sa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sa(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return un(i),null;case 13:if(Dt(Ot),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xf(),gs(),i.flags|=98560,g=!1;else if(g=Ca(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[mi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),g=!1}else ni!==null&&(xu(ni),ni=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?Yt===0&&(Yt=3):Mu())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return ys(),lu(n,i),n===null&&So(i.stateNode.containerInfo),un(i),null;case 10:return Fc(i.type._context),un(i),null;case 17:return An(i.type)&&wa(),un(i),null;case 19:if(Dt(Ot),g=i.memoizedState,g===null)return un(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)No(g,!1);else{if(Yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ua(n),E!==null){for(i.flags|=128,No(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Pt(Ot,Ot.current&1|2),i.child}n=n.sibling}g.tail!==null&&De()>ws&&(i.flags|=128,c=!0,No(g,!1),i.lanes=4194304)}else{if(!c)if(n=Ua(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),No(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Ft)return un(i),null}else 2*De()-g.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,c=!0,No(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(o=g.last,o!==null?o.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=De(),i.sibling=null,o=Ot.current,Pt(Ot,c?o&1|2:o&1),i):(un(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function a0(n,i){switch(Pc(i),i.tag){case 1:return An(i.type)&&wa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Dt(bn),Dt(ln),Vc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Hc(i),null;case 13:if(Dt(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Dt(Ot),null;case 4:return ys(),null;case 10:return Fc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var Wa=!1,dn=!1,l0=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Ms(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Bt(n,i,c)}else o.current=null}function cu(n,i,o){try{o()}catch(c){Bt(n,i,c)}}var Wh=!1;function c0(n,i){if(Sc=ua,n=Mf(),hc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,I=-1,B=-1,ie=0,ge=0,xe=n,pe=null;t:for(;;){for(var Le;xe!==o||f!==0&&xe.nodeType!==3||(I=E+f),xe!==g||c!==0&&xe.nodeType!==3||(B=E+c),xe.nodeType===3&&(E+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)pe=xe,xe=Le;for(;;){if(xe===n)break t;if(pe===o&&++ie===f&&(I=E),pe===g&&++ge===c&&(B=E),(Le=xe.nextSibling)!==null)break;xe=pe,pe=xe.parentNode}xe=Le}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Mc={focusedElem:n,selectionRange:o},ua=!1,Ie=i;Ie!==null;)if(i=Ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ie=n;else for(;Ie!==null;){i=Ie;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,Vt=ke.memoizedState,Q=i.stateNode,G=Q.getSnapshotBeforeUpdate(i.elementType===i.type?He:ii(i.type,He),Vt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Bt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ie=n;break}Ie=i.return}return ke=Wh,Wh=!1,ke}function Io(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&cu(i,o,g)}f=f.next}while(f!==c)}}function ja(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function uu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function jh(n){var i=n.alternate;i!==null&&(n.alternate=null,jh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[Eo],delete i[bc],delete i[jv],delete i[Xv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xh(n){return n.tag===5||n.tag===3||n.tag===4}function qh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function du(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ma));else if(c!==4&&(n=n.child,n!==null))for(du(n,i,o),n=n.sibling;n!==null;)du(n,i,o),n=n.sibling}function fu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fu(n,i,o),n=n.sibling;n!==null;)fu(n,i,o),n=n.sibling}var nn=null,ri=!1;function cr(n,i,o){for(o=o.child;o!==null;)Yh(n,i,o),o=o.sibling}function Yh(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(wn,o)}catch{}switch(o.tag){case 5:dn||Ms(o,i);case 6:var c=nn,f=ri;nn=null,cr(n,i,o),nn=c,ri=f,nn!==null&&(ri?(n=nn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):nn.removeChild(o.stateNode));break;case 18:nn!==null&&(ri?(n=nn,o=o.stateNode,n.nodeType===8?Tc(n.parentNode,o):n.nodeType===1&&Tc(n,o),fo(n)):Tc(nn,o.stateNode));break;case 4:c=nn,f=ri,nn=o.stateNode.containerInfo,ri=!0,cr(n,i,o),nn=c,ri=f;break;case 0:case 11:case 14:case 15:if(!dn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&cu(o,i,E),f=f.next}while(f!==c)}cr(n,i,o);break;case 1:if(!dn&&(Ms(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Bt(o,i,I)}cr(n,i,o);break;case 21:cr(n,i,o);break;case 22:o.mode&1?(dn=(c=dn)||o.memoizedState!==null,cr(n,i,o),dn=c):cr(n,i,o);break;default:cr(n,i,o)}}function $h(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new l0),i.forEach(function(c){var f=_0.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function si(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:nn=I.stateNode,ri=!1;break e;case 3:nn=I.stateNode.containerInfo,ri=!0;break e;case 4:nn=I.stateNode.containerInfo,ri=!0;break e}I=I.return}if(nn===null)throw Error(t(160));Yh(g,E,f),nn=null,ri=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ie){Bt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kh(i,n),i=i.sibling}function Kh(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),_i(n),c&4){try{Io(3,n,n.return),ja(3,n)}catch(He){Bt(n,n.return,He)}try{Io(5,n,n.return)}catch(He){Bt(n,n.return,He)}}break;case 1:si(i,n),_i(n),c&512&&o!==null&&Ms(o,o.return);break;case 5:if(si(i,n),_i(n),c&512&&o!==null&&Ms(o,o.return),n.flags&32){var f=n.stateNode;try{ve(f,"")}catch(He){Bt(n,n.return,He)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,E=o!==null?o.memoizedProps:g,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Ne(f,g),_t(I,E);var ie=_t(I,g);for(E=0;E<B.length;E+=2){var ge=B[E],xe=B[E+1];ge==="style"?Ye(f,xe):ge==="dangerouslySetInnerHTML"?at(f,xe):ge==="children"?ve(f,xe):P(f,ge,xe,ie)}switch(I){case"input":tt(f,g);break;case"textarea":Me(f,g);break;case"select":var pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Le=g.value;Le!=null?te(f,!!g.multiple,Le,!1):pe!==!!g.multiple&&(g.defaultValue!=null?te(f,!!g.multiple,g.defaultValue,!0):te(f,!!g.multiple,g.multiple?[]:"",!1))}f[Eo]=g}catch(He){Bt(n,n.return,He)}}break;case 6:if(si(i,n),_i(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(He){Bt(n,n.return,He)}}break;case 3:if(si(i,n),_i(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(He){Bt(n,n.return,He)}break;case 4:si(i,n),_i(n);break;case 13:si(i,n),_i(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(mu=De())),c&4&&$h(n);break;case 22:if(ge=o!==null&&o.memoizedState!==null,n.mode&1?(dn=(ie=dn)||ge,si(i,n),dn=ie):si(i,n),_i(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!ge&&(n.mode&1)!==0)for(Ie=n,ge=n.child;ge!==null;){for(xe=Ie=ge;Ie!==null;){switch(pe=Ie,Le=pe.child,pe.tag){case 0:case 11:case 14:case 15:Io(4,pe,pe.return);break;case 1:Ms(pe,pe.return);var ke=pe.stateNode;if(typeof ke.componentWillUnmount=="function"){c=pe,o=pe.return;try{i=c,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){Bt(c,o,He)}}break;case 5:Ms(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Jh(xe);continue}}Le!==null?(Le.return=pe,Ie=Le):Jh(xe)}ge=ge.sibling}e:for(ge=null,xe=n;;){if(xe.tag===5){if(ge===null){ge=xe;try{f=xe.stateNode,ie?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=it("display",E))}catch(He){Bt(n,n.return,He)}}}else if(xe.tag===6){if(ge===null)try{xe.stateNode.nodeValue=ie?"":xe.memoizedProps}catch(He){Bt(n,n.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ge===xe&&(ge=null),xe=xe.return}ge===xe&&(ge=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:si(i,n),_i(n),c&4&&$h(n);break;case 21:break;default:si(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Xh(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ve(f,""),c.flags&=-33);var g=qh(n);fu(n,g,f);break;case 3:case 4:var E=c.stateNode.containerInfo,I=qh(n);du(n,I,E);break;default:throw Error(t(161))}}catch(B){Bt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function u0(n,i,o){Ie=n,Qh(n)}function Qh(n,i,o){for(var c=(n.mode&1)!==0;Ie!==null;){var f=Ie,g=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||Wa;if(!E){var I=f.alternate,B=I!==null&&I.memoizedState!==null||dn;I=Wa;var ie=dn;if(Wa=E,(dn=B)&&!ie)for(Ie=f;Ie!==null;)E=Ie,B=E.child,E.tag===22&&E.memoizedState!==null?ep(f):B!==null?(B.return=E,Ie=B):ep(f);for(;g!==null;)Ie=g,Qh(g),g=g.sibling;Ie=f,Wa=I,dn=ie}Zh(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Ie=g):Zh(n)}}function Zh(n){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||ja(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!dn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Jf(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Jf(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ge=ie.memoizedState;if(ge!==null){var xe=ge.dehydrated;xe!==null&&fo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}dn||i.flags&512&&uu(i)}catch(pe){Bt(i,i.return,pe)}}if(i===n){Ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function Jh(n){for(;Ie!==null;){var i=Ie;if(i===n){Ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function ep(n){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ja(4,i)}catch(B){Bt(i,o,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Bt(i,f,B)}}var g=i.return;try{uu(i)}catch(B){Bt(i,g,B)}break;case 5:var E=i.return;try{uu(i)}catch(B){Bt(i,E,B)}}}catch(B){Bt(i,i.return,B)}if(i===n){Ie=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ie=I;break}Ie=i.return}}var d0=Math.ceil,Xa=N.ReactCurrentDispatcher,hu=N.ReactCurrentOwner,Kn=N.ReactCurrentBatchConfig,xt=0,Jt=null,Wt=null,rn=0,Gn=0,Es=rr(0),Yt=0,Uo=null,kr=0,qa=0,pu=0,Fo=null,Cn=null,mu=0,ws=1/0,Oi=null,Ya=!1,gu=null,ur=null,$a=!1,dr=null,Ka=0,Oo=0,vu=null,Qa=-1,Za=0;function Sn(){return(xt&6)!==0?De():Qa!==-1?Qa:Qa=De()}function fr(n){return(n.mode&1)===0?1:(xt&2)!==0&&rn!==0?rn&-rn:Yv.transition!==null?(Za===0&&(Za=aa()),Za):(n=At,n!==0||(n=window.event,n=n===void 0?16:tf(n.type)),n)}function oi(n,i,o,c){if(50<Oo)throw Oo=0,vu=null,Error(t(185));oo(n,o,c),((xt&2)===0||n!==Jt)&&(n===Jt&&((xt&2)===0&&(qa|=o),Yt===4&&hr(n,rn)),Pn(n,c),o===1&&xt===0&&(i.mode&1)===0&&(ws=De()+500,ba&&or()))}function Pn(n,i){var o=n.callbackNode;Tn(n,i);var c=jn(n,n===Jt?rn:0);if(c===0)o!==null&&Pe(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Pe(o),i===1)n.tag===0?qv(np.bind(null,n)):Hf(np.bind(null,n)),Vv(function(){(xt&6)===0&&or()}),o=null;else{switch(qd(c)){case 1:o=rt;break;case 4:o=ot;break;case 16:o=Ct;break;case 536870912:o=Gt;break;default:o=Ct}o=up(o,tp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function tp(n,i){if(Qa=-1,Za=0,(xt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ts()&&n.callbackNode!==o)return null;var c=jn(n,n===Jt?rn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ja(n,c);else{i=c;var f=xt;xt|=2;var g=rp();(Jt!==n||rn!==i)&&(Oi=null,ws=De()+500,Br(n,i));do try{p0();break}catch(I){ip(n,I)}while(!0);Uc(),Xa.current=g,xt=f,Wt!==null?i=0:(Jt=null,rn=0,i=Yt)}if(i!==0){if(i===2&&(f=Pr(n),f!==0&&(c=f,i=_u(n,f))),i===1)throw o=Uo,Br(n,0),hr(n,c),Pn(n,De()),o;if(i===6)hr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!f0(f)&&(i=Ja(n,c),i===2&&(g=Pr(n),g!==0&&(c=g,i=_u(n,g))),i===1))throw o=Uo,Br(n,0),hr(n,c),Pn(n,De()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Cn,Oi);break;case 3:if(hr(n,c),(c&130023424)===c&&(i=mu+500-De(),10<i)){if(jn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Sn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=wc(Hr.bind(null,n,Cn,Oi),i);break}Hr(n,Cn,Oi);break;case 4:if(hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var E=31-xn(c);g=1<<E,E=i[E],E>f&&(f=E),c&=~g}if(c=f,c=De()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*d0(c/1960))-c,10<c){n.timeoutHandle=wc(Hr.bind(null,n,Cn,Oi),c);break}Hr(n,Cn,Oi);break;case 5:Hr(n,Cn,Oi);break;default:throw Error(t(329))}}}return Pn(n,De()),n.callbackNode===o?tp.bind(null,n):null}function _u(n,i){var o=Fo;return n.current.memoizedState.isDehydrated&&(Br(n,i).flags|=256),n=Ja(n,i),n!==2&&(i=Cn,Cn=o,i!==null&&xu(i)),n}function xu(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function f0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!ti(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~pu,i&=~qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-xn(i),c=1<<o;n[o]=-1,i&=~c}}function np(n){if((xt&6)!==0)throw Error(t(327));Ts();var i=jn(n,0);if((i&1)===0)return Pn(n,De()),null;var o=Ja(n,i);if(n.tag!==0&&o===2){var c=Pr(n);c!==0&&(i=c,o=_u(n,c))}if(o===1)throw o=Uo,Br(n,0),hr(n,i),Pn(n,De()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Cn,Oi),Pn(n,De()),null}function yu(n,i){var o=xt;xt|=1;try{return n(i)}finally{xt=o,xt===0&&(ws=De()+500,ba&&or())}}function zr(n){dr!==null&&dr.tag===0&&(xt&6)===0&&Ts();var i=xt;xt|=1;var o=Kn.transition,c=At;try{if(Kn.transition=null,At=1,n)return n()}finally{At=c,Kn.transition=o,xt=i,(xt&6)===0&&or()}}function Su(){Gn=Es.current,Dt(Es)}function Br(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Gv(o)),Wt!==null)for(o=Wt.return;o!==null;){var c=o;switch(Pc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&wa();break;case 3:ys(),Dt(bn),Dt(ln),Vc();break;case 5:Hc(c);break;case 4:ys();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:Fc(c.type._context);break;case 22:case 23:Su()}o=o.return}if(Jt=n,Wt=n=pr(n.current,null),rn=Gn=i,Yt=0,Uo=null,pu=qa=kr=0,Cn=Fo=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var E=g.next;g.next=f,c.next=E}o.pending=c}Ur=null}return n}function ip(n,i){do{var o=Wt;try{if(Uc(),Fa.current=Ba,Oa){for(var c=kt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Oa=!1}if(Or=0,Zt=qt=kt=null,Co=!1,Po=0,hu.current=null,o===null||o.return===null){Yt=1,Uo=i,Wt=null;break}e:{var g=n,E=o.return,I=o,B=i;if(i=rn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,ge=I,xe=ge.tag;if((ge.mode&1)===0&&(xe===0||xe===11||xe===15)){var pe=ge.alternate;pe?(ge.updateQueue=pe.updateQueue,ge.memoizedState=pe.memoizedState,ge.lanes=pe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Le=Rh(E);if(Le!==null){Le.flags&=-257,Ch(Le,E,I,g,i),Le.mode&1&&Ah(g,ie,i),i=Le,B=ie;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(B),i.updateQueue=He}else ke.add(B);break e}else{if((i&1)===0){Ah(g,ie,i),Mu();break e}B=Error(t(426))}}else if(Ft&&I.mode&1){var Vt=Rh(E);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Ch(Vt,E,I,g,i),Nc(Ss(B,I));break e}}g=B=Ss(B,I),Yt!==4&&(Yt=2),Fo===null?Fo=[g]:Fo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Q=Th(g,B,i);Zf(g,Q);break e;case 1:I=B;var G=g.type,J=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ur===null||!ur.has(J)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=bh(g,I,i);Zf(g,we);break e}}g=g.return}while(g!==null)}op(o)}catch(We){i=We,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function rp(){var n=Xa.current;return Xa.current=Ba,n===null?Ba:n}function Mu(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Jt===null||(kr&268435455)===0&&(qa&268435455)===0||hr(Jt,rn)}function Ja(n,i){var o=xt;xt|=2;var c=rp();(Jt!==n||rn!==i)&&(Oi=null,Br(n,i));do try{h0();break}catch(f){ip(n,f)}while(!0);if(Uc(),xt=o,Xa.current=c,Wt!==null)throw Error(t(261));return Jt=null,rn=0,Yt}function h0(){for(;Wt!==null;)sp(Wt)}function p0(){for(;Wt!==null&&!Xe();)sp(Wt)}function sp(n){var i=cp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?op(n):Wt=i,hu.current=null}function op(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=o0(o,i,Gn),o!==null){Wt=o;return}}else{if(o=a0(o,i),o!==null){o.flags&=32767,Wt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Yt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);Yt===0&&(Yt=5)}function Hr(n,i,o){var c=At,f=Kn.transition;try{Kn.transition=null,At=1,m0(n,i,o,c)}finally{Kn.transition=f,At=c}return null}function m0(n,i,o,c){do Ts();while(dr!==null);if((xt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if($g(n,g),n===Jt&&(Wt=Jt=null,rn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||$a||($a=!0,up(Ct,function(){return Ts(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Kn.transition,Kn.transition=null;var E=At;At=1;var I=xt;xt|=4,hu.current=null,c0(n,o),Kh(o,n),Uv(Mc),ua=!!Sc,Mc=Sc=null,n.current=o,u0(o),et(),xt=I,At=E,Kn.transition=g}else n.current=o;if($a&&($a=!1,dr=n,Ka=f),g=n.pendingLanes,g===0&&(ur=null),ut(o.stateNode),Pn(n,De()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ya)throw Ya=!1,n=gu,gu=null,n;return(Ka&1)!==0&&n.tag!==0&&Ts(),g=n.pendingLanes,(g&1)!==0?n===vu?Oo++:(Oo=0,vu=n):Oo=0,or(),null}function Ts(){if(dr!==null){var n=qd(Ka),i=Kn.transition,o=At;try{if(Kn.transition=null,At=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,Ka=0,(xt&6)!==0)throw Error(t(331));var f=xt;for(xt|=4,Ie=n.current;Ie!==null;){var g=Ie,E=g.child;if((Ie.flags&16)!==0){var I=g.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ie=I[B];for(Ie=ie;Ie!==null;){var ge=Ie;switch(ge.tag){case 0:case 11:case 15:Io(8,ge,g)}var xe=ge.child;if(xe!==null)xe.return=ge,Ie=xe;else for(;Ie!==null;){ge=Ie;var pe=ge.sibling,Le=ge.return;if(jh(ge),ge===ie){Ie=null;break}if(pe!==null){pe.return=Le,Ie=pe;break}Ie=Le}}}var ke=g.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var Vt=He.sibling;He.sibling=null,He=Vt}while(He!==null)}}Ie=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ie=E;else e:for(;Ie!==null;){if(g=Ie,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Io(9,g,g.return)}var Q=g.sibling;if(Q!==null){Q.return=g.return,Ie=Q;break e}Ie=g.return}}var G=n.current;for(Ie=G;Ie!==null;){E=Ie;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Ie=J;else e:for(E=G;Ie!==null;){if(I=Ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:ja(9,I)}}catch(We){Bt(I,I.return,We)}if(I===E){Ie=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Ie=we;break e}Ie=I.return}}if(xt=f,or(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(wn,n)}catch{}c=!0}return c}finally{At=o,Kn.transition=i}}return!1}function ap(n,i,o){i=Ss(o,i),i=Th(n,i,1),n=lr(n,i,1),i=Sn(),n!==null&&(oo(n,1,i),Pn(n,i))}function Bt(n,i,o){if(n.tag===3)ap(n,n,o);else for(;i!==null;){if(i.tag===3){ap(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c))){n=Ss(o,n),n=bh(i,n,1),i=lr(i,n,1),n=Sn(),i!==null&&(oo(i,1,n),Pn(i,n));break}}i=i.return}}function g0(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Sn(),n.pingedLanes|=n.suspendedLanes&o,Jt===n&&(rn&o)===o&&(Yt===4||Yt===3&&(rn&130023424)===rn&&500>De()-mu?Br(n,0):pu|=o),Pn(n,i)}function lp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var o=Sn();n=Ii(n,i),n!==null&&(oo(n,i,o),Pn(n,o))}function v0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),lp(n,o)}function _0(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lp(n,o)}var cp;cp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Rn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,s0(n,i,o);Rn=(n.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&Gf(i,Ra,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Va(n,i),n=i.pendingProps;var f=hs(i,ln.current);xs(i,o),f=Xc(null,i,c,n,f,o);var g=qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(c)?(g=!0,Ta(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,zc(i),f.updater=Ha,i.stateNode=f,f._reactInternals=i,Jc(i,c,n,o),i=iu(null,i,c,!0,g,o)):(i.tag=0,Ft&&g&&Cc(i),yn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Va(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=y0(c),n=ii(c,n),f){case 0:i=nu(null,i,c,n,o);break e;case 1:i=Uh(null,i,c,n,o);break e;case 11:i=Ph(null,i,c,n,o);break e;case 14:i=Lh(null,i,c,ii(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),nu(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),Uh(n,i,c,f,o);case 3:e:{if(Fh(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Qf(n,i),Ia(i,c,null,o);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Ss(Error(t(423)),i),i=Oh(n,i,c,o,f);break e}else if(c!==f){f=Ss(Error(t(424)),i),i=Oh(n,i,c,o,f);break e}else for(Hn=ir(i.stateNode.containerInfo.firstChild),Bn=i,Ft=!0,ni=null,o=$f(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),c===f){i=Fi(n,i,o);break e}yn(n,i,c,o)}i=i.child}return i;case 5:return eh(i),n===null&&Dc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,E=f.children,Ec(c,f)?E=null:g!==null&&Ec(c,g)&&(i.flags|=32),Ih(n,i),yn(n,i,E,o),i.child;case 6:return n===null&&Dc(i),null;case 13:return kh(n,i,o);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=vs(i,null,c,o):yn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),Ph(n,i,c,f,o);case 7:return yn(n,i,i.pendingProps,o),i.child;case 8:return yn(n,i,i.pendingProps.children,o),i.child;case 12:return yn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,E=f.value,Pt(La,c._currentValue),c._currentValue=E,g!==null)if(ti(g.value,E)){if(g.children===f.children&&!bn.current){i=Fi(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(g.tag===1){B=Ui(-1,o&-o),B.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var ge=ie.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),ie.pending=B}}g.lanes|=o,B=g.alternate,B!==null&&(B.lanes|=o),Oc(g.return,o,i),I.lanes|=o;break}B=B.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Oc(E,o,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}yn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,xs(i,o),f=Yn(f),c=c(f),i.flags|=1,yn(n,i,c,o),i.child;case 14:return c=i.type,f=ii(c,i.pendingProps),f=ii(c.type,f),Lh(n,i,c,f,o);case 15:return Dh(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),Va(n,i),i.tag=1,An(c)?(n=!0,Ta(i)):n=!1,xs(i,o),Eh(i,c,f),Jc(i,c,f,o),iu(null,i,c,!0,n,o);case 19:return Bh(n,i,o);case 22:return Nh(n,i,o)}throw Error(t(156,i.tag))};function up(n,i){return re(n,i)}function x0(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,o,c){return new x0(n,i,o,c)}function Eu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function y0(n){if(typeof n=="function")return Eu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ne)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=Qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function el(n,i,o,c,f,g){var E=2;if(c=n,typeof n=="function")Eu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Gr(o.children,f,g,i);case de:E=8,f|=8;break;case me:return n=Qn(12,o,i,f|2),n.elementType=me,n.lanes=g,n;case fe:return n=Qn(13,o,i,f),n.elementType=fe,n.lanes=g,n;case H:return n=Qn(19,o,i,f),n.elementType=H,n.lanes=g,n;case ee:return tl(o,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:E=10;break e;case F:E=9;break e;case le:E=11;break e;case ne:E=14;break e;case j:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(E,o,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function Gr(n,i,o,c){return n=Qn(7,n,c,i),n.lanes=o,n}function tl(n,i,o,c){return n=Qn(22,n,c,i),n.elementType=ee,n.lanes=o,n.stateNode={isHidden:!1},n}function wu(n,i,o){return n=Qn(6,n,null,i),n.lanes=o,n}function Tu(n,i,o){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function S0(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(n,i,o,c,f,g,E,I,B){return n=new S0(n,i,o,I,B),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Qn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(g),n}function M0(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function dp(n){if(!n)return sr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return zf(n,o,i)}return i}function fp(n,i,o,c,f,g,E,I,B){return n=bu(o,c,!0,n,f,g,E,I,B),n.context=dp(null),o=n.current,c=Sn(),f=fr(o),g=Ui(c,f),g.callback=i??null,lr(o,g,f),n.current.lanes=f,oo(n,f,c),Pn(n,c),n}function nl(n,i,o,c){var f=i.current,g=Sn(),E=fr(f);return o=dp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(g,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=lr(f,i,E),n!==null&&(oi(n,f,E,g),Na(n,f,E)),E}function il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Au(n,i){hp(n,i),(n=n.alternate)&&hp(n,i)}function E0(){return null}var pp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ru(n){this._internalRoot=n}rl.prototype.render=Ru.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));nl(n,i,null,null)},rl.prototype.unmount=Ru.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){nl(null,n,null,null)}),i[Pi]=null}};function rl(n){this._internalRoot=n}rl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Kd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&Jd(n)}};function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mp(){}function w0(n,i,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ie=il(E);g.call(ie)}}var E=fp(i,c,n,0,null,!1,!1,"",mp);return n._reactRootContainer=E,n[Pi]=E.current,So(n.nodeType===8?n.parentNode:n),zr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ie=il(B);I.call(ie)}}var B=bu(n,0,!1,null,null,!1,!1,"",mp);return n._reactRootContainer=B,n[Pi]=B.current,So(n.nodeType===8?n.parentNode:n),zr(function(){nl(i,B,o,c)}),B}function ol(n,i,o,c,f){var g=o._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var I=f;f=function(){var B=il(E);I.call(B)}}nl(i,E,n,f)}else E=w0(o,i,n,f,c);return il(E)}Yd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=zt(i.pendingLanes);o!==0&&(Jl(i,o|1),Pn(i,De()),(xt&6)===0&&(ws=De()+500,or()))}break;case 13:zr(function(){var c=Ii(n,1);if(c!==null){var f=Sn();oi(c,n,1,f)}}),Au(n,1)}},ec=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var o=Sn();oi(i,n,134217728,o)}Au(n,134217728)}},$d=function(n){if(n.tag===13){var i=fr(n),o=Ii(n,i);if(o!==null){var c=Sn();oi(o,n,i,c)}Au(n,i)}},Kd=function(){return At},Qd=function(n,i){var o=At;try{return At=n,i()}finally{At=o}},Et=function(n,i,o){switch(i){case"input":if(tt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Ea(c);if(!f)throw Error(t(90));Y(c),tt(c,f)}}}break;case"textarea":Me(n,o);break;case"select":i=o.value,i!=null&&te(n,!!o.multiple,i,!1)}},yt=yu,bt=zr;var T0={usingClientEntryPoint:!1,Events:[wo,ds,Ea,Ge,Ke,yu]},ko={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b0={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=se(n),n===null?null:n.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{wn=al.inject(b0),vt=al}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0,Ln.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(t(200));return M0(n,i,null,o)},Ln.createRoot=function(n,i){if(!Cu(n))throw Error(t(299));var o=!1,c="",f=pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(n,1,!1,null,null,o,!1,c,f),n[Pi]=i.current,So(n.nodeType===8?n.parentNode:n),new Ru(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=se(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return zr(n)},Ln.hydrate=function(n,i,o){if(!sl(i))throw Error(t(200));return ol(null,n,i,!0,o)},Ln.hydrateRoot=function(n,i,o){if(!Cu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",E=pp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=fp(i,null,n,1,o??null,f,!1,g,E),n[Pi]=i.current,So(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new rl(i)},Ln.render=function(n,i,o){if(!sl(i))throw Error(t(200));return ol(null,n,i,!1,o)},Ln.unmountComponentAtNode=function(n){if(!sl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Ln.unstable_batchedUpdates=yu,Ln.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!sl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,i,o,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Ep;function I0(){if(Ep)return Du.exports;Ep=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Du.exports=N0(),Du.exports}var wp;function U0(){if(wp)return ll;wp=1;var r=I0();return ll.createRoot=r.createRoot,ll.hydrateRoot=r.hydrateRoot,ll}var F0=U0();const O0=og(F0),Od=Ue.createContext({path:"/",navigate:()=>{}});function k0({children:r}){const[e,t]=Ue.useState(()=>window.location.pathname);Ue.useEffect(()=>{const a=()=>t(window.location.pathname);return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]);const s=Ue.useCallback((a,{replace:l=!1}={})=>{a!==window.location.pathname&&(window.history[l?"replaceState":"pushState"]({},"",a),t(a),window.scrollTo(0,0))},[]);return m.jsx(Od.Provider,{value:{path:e,navigate:s},children:r})}function z0(){return Ue.useContext(Od)}function B0(){return Ue.useContext(Od).path}function kd({to:r,children:e,onClick:t,...s}){const{navigate:a}=z0(),l=r&&r.startsWith("/")&&!r.startsWith("//"),d=u=>{t==null||t(u),l&&(u.defaultPrevented||u.button!==0||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||(u.preventDefault(),a(r)))};return m.jsx("a",{href:r,onClick:d,...s,children:e})}const Ti="ykshetty.design@gmail.com",Zr={name:"Yogesh Shetty",logo:"/logos/header_logo.svg",tagline:"Senior Product Designer. I practice systems thinking — looking past the apparent problem to the root cause, then designing the simplest fix the system already supports."},ag=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],Bo={askLabel:"What the client asked for",brief:"Make the button bigger.",replyLabel:"What the system revealed →",replyMain:"Can't tap with gloves on — so I used the scanner they had.",replyFoot:"Warehouse sorting — solved the system, not the screen."},Ol=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",href:"/case-studies/swiftsort",brief:"Make the button bigger.",card:"Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",cover:null,insight:"Delete touch — the scanner's already on their hand.",problem:"Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.",solution:"Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${Ti}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",brief:"Wall off the whole flow.",card:"A 2-hour banking task cut to 60 seconds of self-service.",cover:null,insight:"Gate only the destructive action.",problem:"Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.",solution:"Added authentication only where the real risk was — browsing stays free, blocking takes seconds.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~90%",label:"Calls deflected"}],mailto:`mailto:${Ti}?subject=Self-service%20cards`,seed:{x:.96,y:.32,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",brief:"Rebuild it screen by screen.",card:"Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.",cover:null,insight:"Map the system first, then design the shared frame.",problem:"A legacy desktop terminal chained managers to one location and took weeks to learn.",solution:"Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${Ti}?subject=Post-office%20portal`,seed:{x:.02,y:.62,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",brief:"Sort by document type.",card:"A complex document archive made self-service — across all three platforms.",cover:null,insight:"Organise by life event — the client's mental model.",problem:"Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.",solution:"Reorganised around life events — the way clients actually think — so they self-serve.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${Ti}?subject=Postbox`,seed:{x:.98,y:.92,r:-1.6}}],H0=[{id:"alignment",num:"01 · THE SEED",title:"Alignment",callout:{label:"◎ Find the overlap",text:"The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them."},human:["User research","Read the data","Find the real need"],ai:["Cluster the notes","Surface patterns"],desc:"A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant."},{id:"foundation",num:"02 · THE ROOTS",title:"Foundation",callout:{label:"↺ Find the real problem",text:"Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving."},human:["Problem statement","In / out of scope","Feasibility check"],ai:["Edge-case list","Flag tech limits"],desc:"Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up."},{id:"explore",num:"03 · THE SPROUT",title:"Explore",callout:{label:"⚑ Try many, keep one",text:"I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong."},human:["Explore directions","Prototype","Usability testing"],ai:["Mockup variants","First-draft copy"],desc:"First shoots test the air in every direction. The strongest one keeps growing."},{id:"scale",num:"04 · THE CANOPY",title:"Scale",callout:{label:"⧉ Build it once",text:"I turn each decision into a design system, so the team can build the rest without me in the room."},human:["Craft & visual","Design system","Component review"],ai:["Token propagation","Doc automation"],desc:"Branches spread and repeat the same pattern. The system carries it across every limb."},{id:"loop",num:"05 · THE HARVEST",title:"Loop",callout:{label:"⟳ Learn from real use",text:"Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief."},human:["Track metrics","Watch real sessions","Feed the next brief"],ai:["Error & QA sweep","Analytics → insight"],desc:"Fruit ripens and falls, dissolving back into soil — feeding the next brief."}],G0=[{id:"tokenmap",logo:"/logos/tokenmap.svg",alt:"Token Map",logoStyle:{height:20,width:126},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes."},{id:"intent",logo:"/logos/intent.svg",alt:"Intent",logoStyle:{height:26,width:82},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically."},{id:"focal",logo:"/logos/focalai.svg",alt:"Focal AI",logoStyle:{height:18,width:99},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second."}],xi={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"/assets/portrait.jpg",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},_d=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],V0="https://linkedin.com/in/ykshetty/details/recommendations/",Ws={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:Ti,href:`mailto:${Ti}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},xd="ys-theme",lg=Ue.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function W0(){if(typeof window>"u")return"light";try{const r=window.localStorage.getItem(xd);if(r==="light"||r==="dark")return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function j0({children:r}){const[e,t]=Ue.useState(W0);Ue.useEffect(()=>{const d=document.documentElement;d.setAttribute("data-theme",e),d.style.colorScheme=e;try{window.localStorage.setItem(xd,e)}catch{}},[e]),Ue.useEffect(()=>{if(!window.matchMedia)return;const d=window.matchMedia("(prefers-color-scheme: dark)"),u=h=>{let p=!1;try{p=!!window.localStorage.getItem(xd)}catch{p=!1}p||t(h.matches?"dark":"light")};return d.addEventListener("change",u),()=>d.removeEventListener("change",u)},[]);const s=Ue.useCallback(d=>{t(u=>d==="light"||d==="dark"?d:u)},[]),a=Ue.useCallback(()=>{t(d=>d==="dark"?"light":"dark")},[]),l=Ue.useMemo(()=>({theme:e,setTheme:s,toggleTheme:a}),[e,s,a]);return m.jsx(lg.Provider,{value:l,children:r})}function zd(){return Ue.useContext(lg)}const Tp={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function X0(){const[r,e]=Ue.useState(!1),{theme:t,toggleTheme:s}=zd(),a=Ue.useCallback(()=>e(d=>!d),[]),l=Ue.useCallback(()=>e(!1),[]);return m.jsx("header",{className:r?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)"},children:m.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:m.jsxs("a",{href:"#top",style:{display:"flex",alignItems:"center",gap:10,height:20},children:[m.jsx("img",{src:Zr.logo,alt:Zr.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),m.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Zr.name})]})}),m.jsx("button",{className:"hamburger",onClick:a,"aria-label":"Menu","aria-expanded":r,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),m.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[ag.map(d=>m.jsx("a",{href:d.href,onClick:l,className:"nav-link",style:Tp,children:d.label},d.href)),m.jsx("a",{href:`mailto:${Ti}`,onClick:l,className:"cta-pill",style:{...Tp,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),m.jsx("button",{type:"button",onClick:s,title:t==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":t==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",fontSize:14,color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:t==="dark"?"☀️":"🌙"})]})]})})}const q0=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function Y0(){const[r,e]=Ue.useState(0),t=Ue.useRef([]),s=Ue.useRef(null),a=Ue.useCallback(()=>{t.current.forEach(d=>clearTimeout(d)),t.current=[],s.current&&(cancelAnimationFrame(s.current),s.current=null)},[]),l=Ue.useCallback(()=>{a(),e(0),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>{q0.forEach(([d,u])=>{t.current.push(setTimeout(()=>e(d),u))})})})},[a]);return Ue.useEffect(()=>(l(),a),[l,a]),{step:r,replay:l}}function $0(r,e){Ue.useEffect(()=>{const t=r.current,s=e.current,a=s?Array.from(s.querySelectorAll("[data-drift]")):[],l=y=>Math.max(0,Math.min(1,y)),d=()=>{const y=window.innerHeight||1,D=l(window.scrollY/y),P=1-D*.28,N=1-D*.65;t&&(t.style.transform=`translateX(-50%) scale(${P.toFixed(3)})`,t.style.opacity=N.toFixed(3))};let u=1,h=1,p=null,v=!1,x=window.scrollY,S=performance.now();const M=()=>{u+=(h-u)*.12,h+=(1-h)*.04,a.forEach(y=>{y.getAnimations&&y.getAnimations().forEach(D=>{D.playbackRate=u})}),Math.abs(u-1)>.02||Math.abs(h-1)>.02?p=requestAnimationFrame(M):(u=1,h=1,a.forEach(y=>{y.getAnimations&&y.getAnimations().forEach(D=>{D.playbackRate=1})}),v=!1)},w=()=>{v||!a.length||(v=!0,p=requestAnimationFrame(M))},b=()=>{const y=performance.now(),D=Math.abs(window.scrollY-x),P=Math.max(16,y-S),N=D/P;h=Math.min(9,1+N*20),x=window.scrollY,S=y,w()},_=()=>{d(),b()};return window.addEventListener("scroll",_,{passive:!0}),d(),()=>{window.removeEventListener("scroll",_),p&&cancelAnimationFrame(p)}},[r,e])}const K0=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],bp=()=>m.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]});function Q0(){const{step:r,replay:e}=Y0(),t=Ue.useRef(null),s=Ue.useRef(null),a=Ue.useRef(null);return $0(t,s),m.jsx("div",{style:{position:"relative",height:"200vh"},children:m.jsxs("section",{className:"hero-section","data-hero-step":r,style:{position:"sticky",top:0,zIndex:1,height:"100vh",overflow:"hidden",background:"var(--bg-page)"},children:[m.jsx("div",{ref:s,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:K0.map((l,d)=>m.jsx("div",{"data-drift":"",style:{position:"absolute",width:l.w,height:l.w,maxWidth:l.maxW,maxHeight:l.maxW,top:l.top,bottom:l.bottom,left:l.left,right:l.right,borderRadius:"50%",background:`radial-gradient(circle, ${l.color}, transparent 70%)`,filter:`blur(${l.blur}px)`,animation:l.anim,willChange:"transform"}},d))}),m.jsxs("div",{ref:t,className:"hero-cluster",children:[m.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:Bo.askLabel}),m.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[m.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:m.jsx(bp,{})}),m.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:m.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:Bo.brief})})]}),m.jsxs("div",{style:{position:"relative",minHeight:72},children:[m.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[m.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),m.jsx(bp,{})]}),m.jsxs("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:[m.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12},children:Bo.replyLabel}),m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(21px,2.9vw,32px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em"},children:Bo.replyMain}),m.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.5,color:"var(--text-muted)",marginTop:12},children:Bo.replyFoot})]})]}),m.jsxs("div",{ref:a,className:"hero-post",style:{marginTop:"clamp(40px,6vw,64px)"},children:[m.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.65,color:"var(--text-body)",margin:"0 0 24px",textAlign:"center"},children:Zr.tagline}),m.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:22,alignItems:"center",fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,justifyContent:"center"},children:[m.jsx("a",{href:"#work",className:"text-link text-link--primary",style:{paddingBottom:3},children:"Case studies ↓"}),m.jsx("a",{href:`mailto:${Ti}`,className:"text-link text-link--muted",children:"Say hello"}),m.jsx("span",{onClick:e,role:"button",tabIndex:0,onKeyDown:l=>(l.key==="Enter"||l.key===" ")&&e(),className:"replay-btn",style:{cursor:"pointer",userSelect:"none",fontSize:12,color:"var(--text-muted)"},children:"↻ replay"})]})]})]})]})})}const cg="#7C5CFC",Z0="0 2px 12px -4px rgba(0,0,0,.08)",J0=`0 0 0 1px ${cg}, 0 8px 24px -6px rgba(124,92,252,.18)`;function e_(r,e){const{boardRef:t,scatterRef:s,targetRef:a,emptyRef:l,detailRef:d}=r,[u,h]=Ue.useState(null),p=Ue.useRef(null),v=Ue.useRef(()=>{}),x=Ue.useRef([]),S=Ue.useMemo(()=>e.map((b,_)=>y=>{x.current[_]=y}),[e]);Ue.useEffect(()=>{const b=t.current,_=s.current,y=a.current;if(!b||!_||!y)return;const D=x.current;if(D.length<e.length||D.some(ue=>!ue))return;const P=e.map(ue=>({id:ue.id,seed:ue.seed}));let N=null,W,k,O=-1,de=.62,me=null,T=!1,F=!1;const le=()=>l.current,fe=()=>d.current,H=()=>{const ue=_.getBoundingClientRect(),ae=b.getBoundingClientRect(),Ce=Math.min(240,Math.max(170,(ue.width||300)-80)),ze=ue.left-ae.left+14,Y=ue.right-ae.left-14,mt=ue.top-ae.top+44,Fe=ue.bottom-ae.top-20;N={minX:ze,maxX:Y-Ce-14,minY:mt,maxY:Math.max(mt,Fe-150)};const qe=Math.max(0,N.maxX-N.minX),Ne=Math.max(0,N.maxY-N.minY);P.forEach((R,A)=>{D[A].style.width=`${Ce}px`,R.sx=N.minX+R.seed.x*qe,R.sy=N.minY+R.seed.y*Ne,R.sr=R.seed.r,R.x===void 0&&(R.x=R.sx,R.y=R.sy,R.r=R.sr)});const tt=y.getBoundingClientRect();de=.62;const $e=Ce*de;W=tt.right-ae.left-$e-30,k=tt.top-ae.top+42,O=-1},ne=(ue,ae)=>{const Ce=y.getBoundingClientRect();return ue>Ce.left-20&&ue<Ce.right+20&&ae>Ce.top-20&&ae<Ce.bottom+20},j=()=>{if(F){T=!1;return}let ue=!1;P.forEach((ae,Ce)=>{const ze=D[Ce];if(!ze)return;let Y,mt,Fe;ae.drag&&ae.dragX!==void 0?(Y=ae.dragX,mt=ae.dragY,Fe=0,ue=!0):ae.id===p.current&&W!==void 0?(Y=W,mt=k,Fe=O):(Y=ae.sx,mt=ae.sy,Fe=ae.sr);const qe=ae.id===p.current&&!ae.drag?de:1;ae.scale===void 0&&(ae.scale=1);const Ne=ae.drag?.55:ae.id===p.current?.2:.16;ae.x+=(Y-ae.x)*Ne,ae.y+=(mt-ae.y)*Ne,ae.r+=(Fe-ae.r)*Ne,ae.scale+=(qe-ae.scale)*Ne,Math.abs(Y-ae.x)+Math.abs(mt-ae.y)+Math.abs(Fe-ae.r)+Math.abs(qe-ae.scale)>.05&&(ue=!0),ze.style.transformOrigin="top left",ze.style.transform=`translate(${ae.x}px,${ae.y}px) rotate(${ae.r}deg) scale(${ae.scale})`}),ue?me=requestAnimationFrame(j):T=!1},ee=()=>{T||F||(T=!0,me=requestAnimationFrame(j))},z=ue=>{p.current=ue,h(ue),P.forEach((ae,Ce)=>{const ze=D[Ce];if(!ze)return;const Y=ae.id===ue;ze.style.boxShadow=Y?J0:Z0,ze.style.zIndex=Y?"9":"5",ae.dragX=void 0}),fe()&&(fe().style.opacity=ue?"1":"0",fe().style.pointerEvents=ue?"auto":"none"),_.style.overflow=ue?"visible":"hidden",le()&&(le().style.opacity=ue?"0":"1"),ee()};v.current=z;const $=[],X=(ue,ae)=>{const Ce=D[ae];let ze=0,Y=0,mt=!1;Ce.style.touchAction="none";const Fe=tt=>{tt.preventDefault(),ue.drag=!0,mt=!1,ze=tt.clientX,Y=tt.clientY;const $e=b.getBoundingClientRect();ue.grabDX=ue.x-(tt.clientX-$e.left),ue.grabDY=ue.y-(tt.clientY-$e.top),Ce.setPointerCapture(tt.pointerId),Ce.style.cursor="grabbing",Ce.style.zIndex="50",_.style.zIndex="10",_.style.overflow="visible",ee()},qe=tt=>{if(!ue.drag)return;Math.abs(tt.clientX-ze)+Math.abs(tt.clientY-Y)>6&&(mt=!0);const $e=b.getBoundingClientRect();ue.dragX=tt.clientX-$e.left+ue.grabDX,ue.dragY=tt.clientY-$e.top+ue.grabDY,ee();const R=ne(tt.clientX,tt.clientY);le()&&p.current===null&&(le().style.borderColor=R?cg:"",le().style.background=R?"rgba(124,92,252,0.04)":"transparent"),y.style.background=R?"var(--bg-target-active)":"var(--bg-surface)"},Ne=tt=>{if(!ue.drag)return;ue.drag=!1,Ce.style.cursor="grab",Ce.style.zIndex="5",_.style.zIndex="",le()&&(le().style.borderColor="",le().style.background="transparent"),y.style.background="var(--bg-surface)";const $e=ne(tt.clientX,tt.clientY);!mt||$e?z(ue.id):(p.current===ue.id&&z(null),ue.dragX=void 0),ee()};Ce.addEventListener("pointerdown",Fe),Ce.addEventListener("pointermove",qe),Ce.addEventListener("pointerup",Ne),$.push(()=>{Ce.removeEventListener("pointerdown",Fe),Ce.removeEventListener("pointermove",qe),Ce.removeEventListener("pointerup",Ne)})};H(),P.forEach((ue,ae)=>X(ue,ae)),ee();const L=()=>H();window.addEventListener("resize",L,{passive:!0});let V=null,ye=null,q=!1,ce=null;const he=P[0],be=()=>{if(p.current||he.drag||q)return;q=!0;const ue=he.sx,ae=he.sy,Ce=he.sr;he.sx=ue+46,he.sy=ae-22,he.sr=Ce+1.5;const ze=D[0];ze&&ze.animate&&ze.animate([{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"},{boxShadow:"0 8px 24px -4px rgba(124,92,252,.18)"},{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"}],{duration:1200,easing:"ease-in-out"}),ee(),setTimeout(()=>{p.current||he.drag||(he.sx=ue,he.sy=ae,he.sr=Ce,ee()),q=!1},760)};return typeof IntersectionObserver<"u"&&(ce=new IntersectionObserver(ue=>{ue.forEach(ae=>{ae.isIntersecting?V||(ye=setTimeout(be,600),V=setInterval(be,3200)):V&&(clearInterval(V),V=null,ye&&(clearTimeout(ye),ye=null))})},{threshold:.35}),ce.observe(b)),()=>{F=!0,me&&cancelAnimationFrame(me),window.removeEventListener("resize",L),$.forEach(ue=>ue()),V&&clearInterval(V),ye&&clearTimeout(ye),ce&&ce.disconnect(),v.current=()=>{}}},[e]);const M=Ue.useCallback(()=>v.current(null),[]),w=Ue.useCallback(b=>v.current(b),[]);return{active:u,setCardRefs:S,closeActive:M,activateCard:w}}const cl={fontFamily:"var(--font-mono)"};function t_(){const[r,e]=Ue.useState(null);return m.jsx("div",{className:"mobile-cards",style:{display:"none",flexDirection:"column",gap:12},children:Ol.map(t=>{const s=r===t.id;return m.jsxs("div",{className:"lift-hover",onClick:()=>e(a=>a===t.id?null:t.id),style:{borderRadius:14,overflow:"hidden",background:"var(--bg-surface)",cursor:"pointer",boxShadow:"var(--shadow-card)"},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 20px"},children:[m.jsxs("div",{children:[m.jsx("div",{style:{...cl,fontSize:10,letterSpacing:"0.04em",color:"var(--text-secondary)",marginBottom:6},children:t.meta}),m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:500,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--text-primary)"},children:t.card})]}),m.jsx("div",{style:{fontSize:22,color:"var(--text-tertiary)",flex:"none",marginLeft:16},children:s?"−":"+"})]}),s&&m.jsx("div",{style:{padding:"0 20px 22px",borderTop:"1px solid var(--border-subtle)"},children:m.jsxs("div",{style:{paddingTop:18},children:[m.jsx("div",{style:{...cl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--text-muted)",margin:"0 0 5px"},children:"The problem"}),m.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.65,color:"var(--text-body)",margin:0},children:t.problem}),m.jsx("div",{style:{...cl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--accent)",margin:"16px 0 5px"},children:"How I solved it"}),m.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.65,color:"var(--text-secondary)",margin:0},children:t.solution}),t.cover?m.jsx("img",{src:t.cover,alt:`${t.id} cover`,className:"case-cover",style:{margin:"16px 0 0"}}):m.jsx("div",{className:"case-cover case-cover--placeholder",style:{margin:"16px 0 0"},"aria-hidden":"true",children:m.jsx("span",{children:"Cover image"})}),m.jsx("div",{style:{display:"flex",gap:32,margin:"20px 0 18px"},children:t.stats.map(a=>m.jsxs("div",{children:[m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(22px,3vw,30px)",fontWeight:600,color:"var(--accent)"},children:a.value}),m.jsx("div",{style:{...cl,fontSize:10,color:"var(--text-secondary)",marginTop:6},children:a.label})]},a.label))}),m.jsx("a",{href:t.mailto,onClick:a=>a.stopPropagation(),style:{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,color:"var(--accent)"},children:"Request full case study →"})]})})]},t.id)})})}const yd={fontFamily:"var(--font-mono)"},Uu={...yd,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:7},Ap={fontFamily:"var(--font-body)",fontSize:14.5,lineHeight:1.7,color:"var(--text-body)",margin:0,maxWidth:"54ch"};function n_({study:r}){return r?m.jsxs("div",{"data-detail":r.id,children:[m.jsx("div",{style:{...yd,fontSize:9,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:22},children:r.metaLong}),m.jsx("div",{style:{...Uu,color:"var(--text-muted)"},children:"The problem"}),m.jsx("p",{style:Ap,children:r.problem}),m.jsx("div",{style:{...Uu,color:"var(--accent)",margin:"20px 0 6px"},children:"How I solved it"}),m.jsx("p",{style:{...Ap,color:"var(--text-secondary)"},children:r.solution}),r.cover?m.jsx("img",{src:r.cover,alt:`${r.id} cover`,className:"case-cover",style:{margin:"22px 0 0"}}):m.jsx("div",{className:"case-cover case-cover--placeholder",style:{margin:"22px 0 0"},"aria-hidden":"true",children:m.jsx("span",{children:"Cover image"})}),m.jsx("div",{style:{...Uu,color:"var(--text-muted)",margin:"24px 0 10px"},children:"Results"}),m.jsx("div",{style:{display:"flex",gap:44,marginBottom:26},children:r.stats.map(e=>m.jsxs("div",{children:[m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(24px,3vw,34px)",fontWeight:600,color:"var(--accent)"},children:e.value}),m.jsx("div",{style:{...yd,fontSize:10,color:"var(--text-secondary)",marginTop:8},children:e.label})]},e.label))}),m.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:16},children:[r.href?m.jsx("a",{href:r.href,className:"cta-pill",style:{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 20px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600},children:"Read the full case study →"}):null,m.jsx("a",{href:r.mailto,className:r.href?"text-link text-link--muted":"cta-pill",style:r.href?{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500}:{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 20px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600},children:r.href?"Request full case study":"Request full case study →"})]})]}):null}const bs={fontFamily:"var(--font-mono)"},i_=[{color:"var(--accent)",opacity:.5},{color:"var(--dot-amber)",opacity:.4},{color:"var(--teal)",opacity:.4}],r_={position:"absolute",left:0,top:0,width:240,cursor:"grab",userSelect:"none",willChange:"transform",zIndex:5,background:"var(--bg-surface)",boxShadow:"var(--shadow-float)",padding:"16px 18px 18px",borderRadius:14};function s_(){const r=Ue.useRef(null),e=Ue.useRef(null),t=Ue.useRef(null),s=Ue.useRef(null),a=Ue.useRef(null),{active:l,setCardRefs:d,closeActive:u}=e_({boardRef:r,scatterRef:e,targetRef:t,emptyRef:s,detailRef:a},Ol),h=Ol.find(p=>p.id===l)||null;return m.jsx("section",{id:"work",style:{position:"relative",zIndex:10,marginTop:"-100vh"},children:m.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px) 81px"},children:[m.jsx(t_,{}),m.jsxs("div",{"data-reveal":"",style:{borderRadius:"28px 28px 18px 18px",overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-panel)",transitionDelay:"0.1s"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[m.jsx("div",{style:{display:"flex",gap:5},children:i_.map((p,v)=>m.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:p.color,opacity:p.opacity}},v))}),m.jsx("div",{style:{...bs,fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-tertiary)"},children:"01 · Case studies"}),m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:13,fontWeight:500,color:"var(--text-secondary)",marginLeft:4},children:"— The problem, and how I solved it"})]}),m.jsxs("div",{style:{...bs,fontSize:9,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"},children:[m.jsx("span",{className:"drag-desktop",children:"Drag a case into the reader — or click one"}),m.jsx("span",{className:"drag-mobile",style:{display:"none"},children:"Tap a card to open"})]})]}),m.jsxs("div",{ref:r,className:"board",style:{position:"relative",touchAction:"none",display:"grid",gridTemplateColumns:"minmax(280px,0.86fr) minmax(0,1.14fr)",minHeight:600,overflow:"hidden"},children:[m.jsxs("div",{ref:e,className:"scatter",style:{position:"relative",padding:"20px 16px",borderRight:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)",overflow:"hidden"},children:[m.jsx("div",{style:{...bs,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"Cases · 04"}),Ol.map((p,v)=>m.jsxs("div",{ref:d[v],"data-card":p.id,style:r_,children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,...bs,fontSize:10,color:"var(--text-secondary)"},children:[m.jsx("span",{children:p.meta}),m.jsx("span",{style:{fontWeight:700,color:"var(--border-fade)"},children:p.index})]}),m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:15.5,fontWeight:500,lineHeight:1.3,letterSpacing:"-0.01em",color:"var(--text-primary)"},children:p.card})]},p.id))]}),m.jsxs("div",{ref:t,style:{position:"relative",padding:"26px 32px 32px",background:"var(--bg-surface)",transition:"background .25s"},children:[m.jsx("div",{style:{...bs,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"The case"}),m.jsxs("div",{ref:s,style:{position:"absolute",inset:"52px 32px 32px",border:"1px dashed var(--border-dashed)",borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,transition:"opacity .3s",pointerEvents:"none",opacity:l?0:1},children:[m.jsx("div",{style:{fontSize:28,lineHeight:1,color:"var(--border-fade)",fontWeight:300},children:"↳"}),m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("div",{className:"drop-desktop",style:{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Drop a case to read it"}),m.jsx("div",{className:"drop-mobile",style:{display:"none",fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Tap a card to open"}),m.jsx("div",{style:{...bs,fontSize:10,color:"var(--text-muted)",marginTop:6},children:"the case opens"})]})]}),m.jsx("div",{ref:a,style:{position:"relative",opacity:l?1:0,transition:"opacity .35s",pointerEvents:l?"auto":"none",paddingTop:22},children:m.jsx(n_,{study:h})}),m.jsx("button",{type:"button",onClick:u,"aria-label":"Close case study",className:"replay-btn",style:{position:"absolute",top:22,right:28,zIndex:12,width:28,height:28,background:"var(--bg-hover)",color:"var(--text-secondary)",border:"none",borderRadius:"50%",display:"grid",placeItems:"center",cursor:"pointer",opacity:l?1:0,pointerEvents:l?"auto":"none",fontSize:14,transition:"opacity .25s"},children:"×"})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="161",o_=0,Rp=1,a_=2,ug=1,l_=2,Vi=3,Ar=0,Fn=1,Wi=2,wr=0,qs=1,Ko=2,Cp=3,Pp=4,c_=5,$r=100,u_=101,d_=102,Lp=103,Dp=104,f_=200,h_=201,p_=202,m_=203,Sd=204,Md=205,g_=206,v_=207,__=208,x_=209,y_=210,S_=211,M_=212,E_=213,w_=214,T_=0,b_=1,A_=2,zl=3,R_=4,C_=5,P_=6,L_=7,dg=0,D_=1,N_=2,Tr=0,I_=1,U_=2,F_=3,fg=4,O_=5,k_=6,hg=300,Zs=301,Js=302,Ed=303,wd=304,Xl=306,Td=1e3,ui=1001,bd=1002,En=1003,Np=1004,Ho=1005,In=1006,Fu=1007,Qr=1008,br=1009,z_=1010,B_=1011,Hd=1012,pg=1013,Er=1014,ji=1015,Qo=1016,mg=1017,gg=1018,Jr=1020,H_=1021,di=1023,G_=1024,V_=1025,es=1026,eo=1027,W_=1028,vg=1029,j_=1030,_g=1031,xg=1033,Ou=33776,ku=33777,zu=33778,Bu=33779,Ip=35840,Up=35841,Fp=35842,Op=35843,yg=36196,kp=37492,zp=37496,Bp=37808,Hp=37809,Gp=37810,Vp=37811,Wp=37812,jp=37813,Xp=37814,qp=37815,Yp=37816,$p=37817,Kp=37818,Qp=37819,Zp=37820,Jp=37821,Hu=36492,em=36494,tm=36495,X_=36283,nm=36284,im=36285,rm=36286,Sg=3e3,ts=3001,q_=3200,Y_=3201,$_=0,K_=1,ei="",sn="srgb",Yi="srgb-linear",Gd="display-p3",ql="display-p3-linear",Bl="linear",It="srgb",Hl="rec709",Gl="p3",As=7680,sm=519,Q_=512,Z_=513,J_=514,Mg=515,ex=516,tx=517,nx=518,ix=519,om=35044,am="300 es",Ad=1035,Xi=2e3,Vl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,Rd=180/Math.PI;function Zo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function rx(r,e){return(r%e+e)%e}function Vu(r,e,t){return(1-t)*r+t*e}function lm(r){return(r&r-1)===0&&r!==0}function Cd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*a+e.x,this.y=l*a+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,s,a,l,d,u,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,d,u,h,p)}set(e,t,s,a,l,d,u,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=u,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,d=s[0],u=s[3],h=s[6],p=s[1],v=s[4],x=s[7],S=s[2],M=s[5],w=s[8],b=a[0],_=a[3],y=a[6],D=a[1],P=a[4],N=a[7],W=a[2],k=a[5],O=a[8];return l[0]=d*b+u*D+h*W,l[3]=d*_+u*P+h*k,l[6]=d*y+u*N+h*O,l[1]=p*b+v*D+x*W,l[4]=p*_+v*P+x*k,l[7]=p*y+v*N+x*O,l[2]=S*b+M*D+w*W,l[5]=S*_+M*P+w*k,l[8]=S*y+M*N+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],p=e[7],v=e[8];return t*d*v-t*u*p-s*l*v+s*u*h+a*l*p-a*d*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],p=e[7],v=e[8],x=v*d-u*p,S=u*h-v*l,M=p*l-d*h,w=t*x+s*S+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(a*p-v*s)*b,e[2]=(u*s-a*d)*b,e[3]=S*b,e[4]=(v*t-a*h)*b,e[5]=(a*l-u*t)*b,e[6]=M*b,e[7]=(s*h-p*t)*b,e[8]=(d*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,d,u){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*d+p*u)+d+e,-a*p,a*h,-a*(-p*d+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new pt;function Eg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sx(){const r=Wl("canvas");return r.style.display="block",r}const cm={};function Ys(r){r in cm||(cm[r]=!0,console.warn(r))}const um=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Yi]:{transfer:Bl,primaries:Hl,toReference:r=>r,fromReference:r=>r},[sn]:{transfer:It,primaries:Hl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ql]:{transfer:Bl,primaries:Gl,toReference:r=>r.applyMatrix3(dm),fromReference:r=>r.applyMatrix3(um)},[Gd]:{transfer:It,primaries:Gl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(dm),fromReference:r=>r.applyMatrix3(um).convertLinearToSRGB()}},ox=new Set([Yi,ql]),Rt={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ox.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=ul[e].toReference,a=ul[t].fromReference;return a(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ul[r].primaries},getTransfer:function(r){return r===ei?Bl:ul[r].transfer}};function $s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ju(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rs;class wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Wl("canvas")),Rs.width=e.width,Rs.height=e.height;const s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=$s(l[d]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor($s(t[s]/255)*255):t[s]=$s(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ax=0;class Tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,u=a.length;d<u;d++)a[d].isDataTexture?l.push(Xu(a[d].image)):l.push(Xu(a[d]))}else l=Xu(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Xu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;class On extends no{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,s=ui,a=ui,l=In,d=Qr,u=di,h=br,p=On.DEFAULT_ANISOTROPY,v=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Zo(),this.name="",this.source=new Tg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===ts?sn:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===sn?ts:Sg}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?sn:ei}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=hg;On.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,s=0,a=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*a+d[12]*l,this.y=d[1]*t+d[5]*s+d[9]*a+d[13]*l,this.z=d[2]*t+d[6]*s+d[10]*a+d[14]*l,this.w=d[3]*t+d[7]*s+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],v=h[4],x=h[8],S=h[1],M=h[5],w=h[9],b=h[2],_=h[6],y=h[10];if(Math.abs(v-S)<.01&&Math.abs(x-b)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+b)<.1&&Math.abs(w+_)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,N=(M+1)/2,W=(y+1)/2,k=(v+S)/4,O=(x+b)/4,de=(w+_)/4;return P>N&&P>W?P<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(P),a=k/s,l=O/s):N>W?N<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(N),s=k/a,l=de/a):W<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),s=O/l,a=de/l),this.set(s,a,l,t),this}let D=Math.sqrt((_-w)*(_-w)+(x-b)*(x-b)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(_-w)/D,this.y=(x-b)/D,this.z=(S-v)/D,this.w=Math.acos((p+M+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cx extends no{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const a={width:e,height:t,depth:1};s.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ts?sn:ei),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new On(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends cx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class bg extends On{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=En,this.minFilter=En,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ux extends On{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=En,this.minFilter=En,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,d,u){let h=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];const S=l[d+0],M=l[d+1],w=l[d+2],b=l[d+3];if(u===0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(u===1){e[t+0]=S,e[t+1]=M,e[t+2]=w,e[t+3]=b;return}if(x!==b||h!==S||p!==M||v!==w){let _=1-u;const y=h*S+p*M+v*w+x*b,D=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const W=Math.sqrt(P),k=Math.atan2(W,y*D);_=Math.sin(_*k)/W,u=Math.sin(u*k)/W}const N=u*D;if(h=h*_+S*N,p=p*_+M*N,v=v*_+w*N,x=x*_+b*N,_===1-u){const W=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=W,p*=W,v*=W,x*=W}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,d){const u=s[a],h=s[a+1],p=s[a+2],v=s[a+3],x=l[d],S=l[d+1],M=l[d+2],w=l[d+3];return e[t]=u*w+v*x+h*M-p*S,e[t+1]=h*w+v*S+p*x-u*M,e[t+2]=p*w+v*M+u*S-h*x,e[t+3]=v*w-u*x-h*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,d=e._order,u=Math.cos,h=Math.sin,p=u(s/2),v=u(a/2),x=u(l/2),S=h(s/2),M=h(a/2),w=h(l/2);switch(d){case"XYZ":this._x=S*v*x+p*M*w,this._y=p*M*x-S*v*w,this._z=p*v*w+S*M*x,this._w=p*v*x-S*M*w;break;case"YXZ":this._x=S*v*x+p*M*w,this._y=p*M*x-S*v*w,this._z=p*v*w-S*M*x,this._w=p*v*x+S*M*w;break;case"ZXY":this._x=S*v*x-p*M*w,this._y=p*M*x+S*v*w,this._z=p*v*w+S*M*x,this._w=p*v*x-S*M*w;break;case"ZYX":this._x=S*v*x-p*M*w,this._y=p*M*x+S*v*w,this._z=p*v*w-S*M*x,this._w=p*v*x+S*M*w;break;case"YZX":this._x=S*v*x+p*M*w,this._y=p*M*x+S*v*w,this._z=p*v*w-S*M*x,this._w=p*v*x-S*M*w;break;case"XZY":this._x=S*v*x-p*M*w,this._y=p*M*x-S*v*w,this._z=p*v*w+S*M*x,this._w=p*v*x+S*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],d=t[1],u=t[5],h=t[9],p=t[2],v=t[6],x=t[10],S=s+u+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(d-a)*M}else if(s>u&&s>x){const M=2*Math.sqrt(1+s-u-x);this._w=(v-h)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(l+p)/M}else if(u>x){const M=2*Math.sqrt(1+u-s-x);this._w=(l-p)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+x-s-u);this._w=(d-a)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,d=e._w,u=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+d*u+a*p-l*h,this._y=a*v+d*h+l*u-s*p,this._z=l*v+d*p+s*h-a*u,this._w=d*v-s*u-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,d=this._w;let u=d*e._w+s*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=s,this._y=a,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*s+t*this._x,this._y=M*a+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,u),x=Math.sin((1-t)*v)/p,S=Math.sin(t*v)/p;return this._w=d*x+this._w*S,this._x=s*x+this._x*S,this._y=a*x+this._y*S,this._z=l*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),s*Math.sin(l),s*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,d=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*d,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*d,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,d=e.y,u=e.z,h=e.w,p=2*(d*a-u*s),v=2*(u*t-l*a),x=2*(l*s-d*t);return this.x=t+h*p+d*x-u*v,this.y=s+h*v+u*p-l*x,this.z=a+h*x+l*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,d=t.x,u=t.y,h=t.z;return this.x=a*h-l*u,this.y=l*d-s*h,this.z=s*u-a*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new K,fm=new io;class Jo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=l.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,ai):ai.fromBufferAttribute(l,d),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),dl.copy(s.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),fl.subVectors(this.max,Vo),Cs.subVectors(e.a,Vo),Ps.subVectors(e.b,Vo),Ls.subVectors(e.c,Vo),gr.subVectors(Ps,Cs),vr.subVectors(Ls,Ps),Vr.subVectors(Cs,Ls);let t=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Vr.z,Vr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Vr.z,0,-Vr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Vr.y,Vr.x,0];return!Yu(t,Cs,Ps,Ls,fl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,Cs,Ps,Ls,fl))?!1:(hl.crossVectors(gr,vr),t=[hl.x,hl.y,hl.z],Yu(t,Cs,Ps,Ls,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new K,new K,new K,new K,new K,new K,new K,new K],ai=new K,dl=new Jo,Cs=new K,Ps=new K,Ls=new K,gr=new K,vr=new K,Vr=new K,Vo=new K,fl=new K,hl=new K,Wr=new K;function Yu(r,e,t,s,a){for(let l=0,d=r.length-3;l<=d;l+=3){Wr.fromArray(r,l);const u=a.x*Math.abs(Wr.x)+a.y*Math.abs(Wr.y)+a.z*Math.abs(Wr.z),h=e.dot(Wr),p=t.dot(Wr),v=s.dot(Wr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>u)return!1}return!0}const dx=new Jo,Wo=new K,$u=new K;class Yl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):dx.setFromPoints(e).getCenter(s);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Wo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add($u)),this.expandByPoint(Wo.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new K,Ku=new K,pl=new K,_r=new K,Qu=new K,ml=new K,Zu=new K;class Ag{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ku.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,d=-this.direction.dot(pl),u=_r.dot(this.direction),h=-_r.dot(pl),p=_r.lengthSq(),v=Math.abs(1-d*d);let x,S,M,w;if(v>0)if(x=d*h-u,S=d*u-h,w=l*v,x>=0)if(S>=-w)if(S<=w){const b=1/v;x*=b,S*=b,M=x*(x+d*S+2*u)+S*(d*x+S+2*h)+p}else S=l,x=Math.max(0,-(d*S+u)),M=-x*x+S*(S+2*h)+p;else S=-l,x=Math.max(0,-(d*S+u)),M=-x*x+S*(S+2*h)+p;else S<=-w?(x=Math.max(0,-(-d*l+u)),S=x>0?-l:Math.min(Math.max(-l,-h),l),M=-x*x+S*(S+2*h)+p):S<=w?(x=0,S=Math.min(Math.max(-l,-h),l),M=S*(S+2*h)+p):(x=Math.max(0,-(d*l+u)),S=x>0?l:Math.min(Math.max(-l,-h),l),M=-x*x+S*(S+2*h)+p);else S=d>0?-l:l,x=Math.max(0,-(d*S+u)),M=-x*x+S*(S+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Ku).addScaledVector(pl,S),M}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const s=zi.dot(this.direction),a=zi.dot(zi)-s*s,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),u=s-d,h=s+d;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,d,u,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,a=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,a=(e.min.x-S.x)*p),v>=0?(l=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||l>a||((l>s||isNaN(s))&&(s=l),(d<a||isNaN(a))&&(a=d),x>=0?(u=(e.min.z-S.z)*x,h=(e.max.z-S.z)*x):(u=(e.max.z-S.z)*x,h=(e.min.z-S.z)*x),s>h||u>a)||((u>s||s!==s)&&(s=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,s,a,l){Qu.subVectors(t,e),ml.subVectors(s,e),Zu.crossVectors(Qu,ml);let d=this.direction.dot(Zu),u;if(d>0){if(a)return null;u=1}else if(d<0)u=-1,d=-d;else return null;_r.subVectors(this.origin,e);const h=u*this.direction.dot(ml.crossVectors(_r,ml));if(h<0)return null;const p=u*this.direction.dot(Qu.cross(_r));if(p<0||h+p>d)return null;const v=-u*_r.dot(Zu);return v<0?null:this.at(v/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,s,a,l,d,u,h,p,v,x,S,M,w,b,_){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,d,u,h,p,v,x,S,M,w,b,_)}set(e,t,s,a,l,d,u,h,p,v,x,S,M,w,b,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=a,y[1]=l,y[5]=d,y[9]=u,y[13]=h,y[2]=p,y[6]=v,y[10]=x,y[14]=S,y[3]=M,y[7]=w,y[11]=b,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),d=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,d=Math.cos(s),u=Math.sin(s),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const S=d*v,M=d*x,w=u*v,b=u*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=M+w*p,t[5]=S-b*p,t[9]=-u*h,t[2]=b-S*p,t[6]=w+M*p,t[10]=d*h}else if(e.order==="YXZ"){const S=h*v,M=h*x,w=p*v,b=p*x;t[0]=S+b*u,t[4]=w*u-M,t[8]=d*p,t[1]=d*x,t[5]=d*v,t[9]=-u,t[2]=M*u-w,t[6]=b+S*u,t[10]=d*h}else if(e.order==="ZXY"){const S=h*v,M=h*x,w=p*v,b=p*x;t[0]=S-b*u,t[4]=-d*x,t[8]=w+M*u,t[1]=M+w*u,t[5]=d*v,t[9]=b-S*u,t[2]=-d*p,t[6]=u,t[10]=d*h}else if(e.order==="ZYX"){const S=d*v,M=d*x,w=u*v,b=u*x;t[0]=h*v,t[4]=w*p-M,t[8]=S*p+b,t[1]=h*x,t[5]=b*p+S,t[9]=M*p-w,t[2]=-p,t[6]=u*h,t[10]=d*h}else if(e.order==="YZX"){const S=d*h,M=d*p,w=u*h,b=u*p;t[0]=h*v,t[4]=b-S*x,t[8]=w*x+M,t[1]=x,t[5]=d*v,t[9]=-u*v,t[2]=-p*v,t[6]=M*x+w,t[10]=S-b*x}else if(e.order==="XZY"){const S=d*h,M=d*p,w=u*h,b=u*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=S*x+b,t[5]=d*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=u*v,t[10]=b*x+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,hx)}lookAt(e,t,s){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),xr.crossVectors(s,Vn),xr.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),xr.crossVectors(s,Vn)),xr.normalize(),gl.crossVectors(Vn,xr),a[0]=xr.x,a[4]=gl.x,a[8]=Vn.x,a[1]=xr.y,a[5]=gl.y,a[9]=Vn.y,a[2]=xr.z,a[6]=gl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,d=s[0],u=s[4],h=s[8],p=s[12],v=s[1],x=s[5],S=s[9],M=s[13],w=s[2],b=s[6],_=s[10],y=s[14],D=s[3],P=s[7],N=s[11],W=s[15],k=a[0],O=a[4],de=a[8],me=a[12],T=a[1],F=a[5],le=a[9],fe=a[13],H=a[2],ne=a[6],j=a[10],ee=a[14],z=a[3],$=a[7],X=a[11],L=a[15];return l[0]=d*k+u*T+h*H+p*z,l[4]=d*O+u*F+h*ne+p*$,l[8]=d*de+u*le+h*j+p*X,l[12]=d*me+u*fe+h*ee+p*L,l[1]=v*k+x*T+S*H+M*z,l[5]=v*O+x*F+S*ne+M*$,l[9]=v*de+x*le+S*j+M*X,l[13]=v*me+x*fe+S*ee+M*L,l[2]=w*k+b*T+_*H+y*z,l[6]=w*O+b*F+_*ne+y*$,l[10]=w*de+b*le+_*j+y*X,l[14]=w*me+b*fe+_*ee+y*L,l[3]=D*k+P*T+N*H+W*z,l[7]=D*O+P*F+N*ne+W*$,l[11]=D*de+P*le+N*j+W*X,l[15]=D*me+P*fe+N*ee+W*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],d=e[1],u=e[5],h=e[9],p=e[13],v=e[2],x=e[6],S=e[10],M=e[14],w=e[3],b=e[7],_=e[11],y=e[15];return w*(+l*h*x-a*p*x-l*u*S+s*p*S+a*u*M-s*h*M)+b*(+t*h*M-t*p*S+l*d*S-a*d*M+a*p*v-l*h*v)+_*(+t*p*x-t*u*M-l*d*x+s*d*M+l*u*v-s*p*v)+y*(-a*u*v-t*h*x+t*u*S+a*d*x-s*d*S+s*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],p=e[7],v=e[8],x=e[9],S=e[10],M=e[11],w=e[12],b=e[13],_=e[14],y=e[15],D=x*_*p-b*S*p+b*h*M-u*_*M-x*h*y+u*S*y,P=w*S*p-v*_*p-w*h*M+d*_*M+v*h*y-d*S*y,N=v*b*p-w*x*p+w*u*M-d*b*M-v*u*y+d*x*y,W=w*x*h-v*b*h-w*u*S+d*b*S+v*u*_-d*x*_,k=t*D+s*P+a*N+l*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=D*O,e[1]=(b*S*l-x*_*l-b*a*M+s*_*M+x*a*y-s*S*y)*O,e[2]=(u*_*l-b*h*l+b*a*p-s*_*p-u*a*y+s*h*y)*O,e[3]=(x*h*l-u*S*l-x*a*p+s*S*p+u*a*M-s*h*M)*O,e[4]=P*O,e[5]=(v*_*l-w*S*l+w*a*M-t*_*M-v*a*y+t*S*y)*O,e[6]=(w*h*l-d*_*l-w*a*p+t*_*p+d*a*y-t*h*y)*O,e[7]=(d*S*l-v*h*l+v*a*p-t*S*p-d*a*M+t*h*M)*O,e[8]=N*O,e[9]=(w*x*l-v*b*l-w*s*M+t*b*M+v*s*y-t*x*y)*O,e[10]=(d*b*l-w*u*l+w*s*p-t*b*p-d*s*y+t*u*y)*O,e[11]=(v*u*l-d*x*l-v*s*p+t*x*p+d*s*M-t*u*M)*O,e[12]=W*O,e[13]=(v*b*a-w*x*a+w*s*S-t*b*S-v*s*_+t*x*_)*O,e[14]=(w*u*a-d*b*a-w*s*h+t*b*h+d*s*_-t*u*_)*O,e[15]=(d*x*a-v*u*a+v*s*h-t*x*h-d*s*S+t*u*S)*O,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,d=e.x,u=e.y,h=e.z,p=l*d,v=l*u;return this.set(p*d+s,p*u-a*h,p*h+a*u,0,p*u+a*h,v*u+s,v*h-a*d,0,p*h-a*u,v*h+a*d,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,d){return this.set(1,s,l,0,e,1,d,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,d=t._y,u=t._z,h=t._w,p=l+l,v=d+d,x=u+u,S=l*p,M=l*v,w=l*x,b=d*v,_=d*x,y=u*x,D=h*p,P=h*v,N=h*x,W=s.x,k=s.y,O=s.z;return a[0]=(1-(b+y))*W,a[1]=(M+N)*W,a[2]=(w-P)*W,a[3]=0,a[4]=(M-N)*k,a[5]=(1-(S+y))*k,a[6]=(_+D)*k,a[7]=0,a[8]=(w+P)*O,a[9]=(_-D)*O,a[10]=(1-(S+b))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const d=Ds.set(a[4],a[5],a[6]).length(),u=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const p=1/l,v=1/d,x=1/u;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,t.setFromRotationMatrix(li),s.x=l,s.y=d,s.z=u,this}makePerspective(e,t,s,a,l,d,u=Xi){const h=this.elements,p=2*l/(t-e),v=2*l/(s-a),x=(t+e)/(t-e),S=(s+a)/(s-a);let M,w;if(u===Xi)M=-(d+l)/(d-l),w=-2*d*l/(d-l);else if(u===Vl)M=-d/(d-l),w=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,d,u=Xi){const h=this.elements,p=1/(t-e),v=1/(s-a),x=1/(d-l),S=(t+e)*p,M=(s+a)*v;let w,b;if(u===Xi)w=(d+l)*x,b=-2*x;else if(u===Vl)w=l*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=b,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ds=new K,li=new $t,fx=new K(0,0,0),hx=new K(1,1,1),xr=new K,gl=new K,Vn=new K,hm=new $t,pm=new io;class $l{constructor(e=0,t=0,s=0,a=$l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],d=a[4],u=a[8],h=a[1],p=a[5],v=a[9],x=a[2],S=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(gn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$l.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let px=0;const mm=new K,Ns=new io,Bi=new $t,vl=new K,jo=new K,mx=new K,gx=new io,gm=new K(1,0,0),vm=new K(0,1,0),_m=new K(0,0,1),vx={type:"added"},_x={type:"removed"};class kn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new K,t=new $l,s=new io,a=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new pt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?vl.copy(e):vl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(jo,vl,this.up):Bi.lookAt(vl,jo,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(l(e.materials,this.material[h]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(l(e.animations,h))}}if(t){const u=d(e.geometries),h=d(e.materials),p=d(e.textures),v=d(e.images),x=d(e.shapes),S=d(e.skeletons),M=d(e.animations),w=d(e.nodes);u.length>0&&(s.geometries=u),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=a,s;function d(u){const h=[];for(const p in u){const v=u[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}kn.DEFAULT_UP=new K(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new K,Hi=new K,Ju=new K,Gi=new K,Is=new K,Us=new K,xm=new K,ed=new K,td=new K,nd=new K;class wi{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ci.subVectors(e,t),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ci.subVectors(a,t),Hi.subVectors(s,t),Ju.subVectors(e,t);const d=ci.dot(ci),u=ci.dot(Hi),h=ci.dot(Ju),p=Hi.dot(Hi),v=Hi.dot(Ju),x=d*p-u*u;if(x===0)return l.set(0,0,0),null;const S=1/x,M=(p*h-u*v)*S,w=(d*v-u*h)*S;return l.set(1-M-w,w,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,s,a,l,d,u,h){return this.getBarycoord(e,t,s,a,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Gi.x),h.addScaledVector(d,Gi.y),h.addScaledVector(u,Gi.z),h)}static isFrontFacing(e,t,s,a){return ci.subVectors(s,t),Hi.subVectors(e,t),ci.cross(Hi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ci.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let d,u;Is.subVectors(a,s),Us.subVectors(l,s),ed.subVectors(e,s);const h=Is.dot(ed),p=Us.dot(ed);if(h<=0&&p<=0)return t.copy(s);td.subVectors(e,a);const v=Is.dot(td),x=Us.dot(td);if(v>=0&&x<=v)return t.copy(a);const S=h*x-v*p;if(S<=0&&h>=0&&v<=0)return d=h/(h-v),t.copy(s).addScaledVector(Is,d);nd.subVectors(e,l);const M=Is.dot(nd),w=Us.dot(nd);if(w>=0&&M<=w)return t.copy(l);const b=M*p-h*w;if(b<=0&&p>=0&&w<=0)return u=p/(p-w),t.copy(s).addScaledVector(Us,u);const _=v*w-M*x;if(_<=0&&x-v>=0&&M-w>=0)return xm.subVectors(l,a),u=(x-v)/(x-v+(M-w)),t.copy(a).addScaledVector(xm,u);const y=1/(_+b+S);return d=b*y,u=S*y,t.copy(s).addScaledVector(Is,d).addScaledVector(Us,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function id(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Rt.workingColorSpace){if(e=rx(e,1),t=gn(t,0,1),s=gn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,d=2*s-l;this.r=id(d,l,e+1/3),this.g=id(d,l,e),this.b=id(d,l,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,t=sn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],u=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const s=Cg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=ju(e.r),this.g=ju(e.g),this.b=ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Rt.fromWorkingColorSpace(hn.copy(this),e),Math.round(gn(hn.r*255,0,255))*65536+Math.round(gn(hn.g*255,0,255))*256+Math.round(gn(hn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(hn.copy(this),t);const s=hn.r,a=hn.g,l=hn.b,d=Math.max(s,a,l),u=Math.min(s,a,l);let h,p;const v=(u+d)/2;if(u===d)h=0,p=0;else{const x=d-u;switch(p=v<=.5?x/(d+u):x/(2-d-u),d){case s:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-s)/x+2;break;case l:h=(s-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=sn){Rt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,s=hn.g,a=hn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(_l);const s=Vu(yr.h,_l.h,t),a=Vu(yr.s,_l.s,t),l=Vu(yr.l,_l.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new je;je.NAMES=Cg;let xx=0;class ea extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=qs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(s.blending=this.blending),this.side!==Ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sd&&(s.blendSrc=this.blendSrc),this.blendDst!==Md&&(s.blendDst=this.blendDst),this.blendEquation!==$r&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(s.stencilFail=this.stencilFail),this.stencilZFail!==As&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const d=[];for(const u in l){const h=l[u];delete h.metadata,d.push(h)}return d}if(t){const l=a(e.textures),d=a(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pg extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new K,xl=new wt;class fi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=om,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ys("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Go(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Dn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array),a=Dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),s=Dn(s,this.array),a=Dn(a,this.array),l=Dn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class Lg extends fi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Dg extends fi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Un extends fi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let yx=0;const Zn=new $t,rd=new kn,Fs=new K,Wn=new Jo,Xo=new Jo,tn=new K;class hi extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Dg:Lg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,s){return Zn.makeTranslation(e,t,s),this.applyMatrix4(Zn),this}scale(e,t,s){return Zn.makeScale(e,t,s),this.applyMatrix4(Zn),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const u=t[l];Xo.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(Wn.min,Xo.min),Wn.expandByPoint(tn),tn.addVectors(Wn.max,Xo.max),Wn.expandByPoint(tn)):(Wn.expandByPoint(Xo.min),Wn.expandByPoint(Xo.max))}Wn.getCenter(s);let a=0;for(let l=0,d=e.count;l<d;l++)tn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(tn));if(t)for(let l=0,d=t.length;l<d;l++){const u=t[l],h=this.morphTargetsRelative;for(let p=0,v=u.count;p<v;p++)tn.fromBufferAttribute(u,p),h&&(Fs.fromBufferAttribute(e,p),tn.add(Fs)),a=Math.max(a,s.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,a=t.position.array,l=t.normal.array,d=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,p=[],v=[];for(let T=0;T<u;T++)p[T]=new K,v[T]=new K;const x=new K,S=new K,M=new K,w=new wt,b=new wt,_=new wt,y=new K,D=new K;function P(T,F,le){x.fromArray(a,T*3),S.fromArray(a,F*3),M.fromArray(a,le*3),w.fromArray(d,T*2),b.fromArray(d,F*2),_.fromArray(d,le*2),S.sub(x),M.sub(x),b.sub(w),_.sub(w);const fe=1/(b.x*_.y-_.x*b.y);isFinite(fe)&&(y.copy(S).multiplyScalar(_.y).addScaledVector(M,-b.y).multiplyScalar(fe),D.copy(M).multiplyScalar(b.x).addScaledVector(S,-_.x).multiplyScalar(fe),p[T].add(y),p[F].add(y),p[le].add(y),v[T].add(D),v[F].add(D),v[le].add(D))}let N=this.groups;N.length===0&&(N=[{start:0,count:s.length}]);for(let T=0,F=N.length;T<F;++T){const le=N[T],fe=le.start,H=le.count;for(let ne=fe,j=fe+H;ne<j;ne+=3)P(s[ne+0],s[ne+1],s[ne+2])}const W=new K,k=new K,O=new K,de=new K;function me(T){O.fromArray(l,T*3),de.copy(O);const F=p[T];W.copy(F),W.sub(O.multiplyScalar(O.dot(F))).normalize(),k.crossVectors(de,F);const fe=k.dot(v[T])<0?-1:1;h[T*4]=W.x,h[T*4+1]=W.y,h[T*4+2]=W.z,h[T*4+3]=fe}for(let T=0,F=N.length;T<F;++T){const le=N[T],fe=le.start,H=le.count;for(let ne=fe,j=fe+H;ne<j;ne+=3)me(s[ne+0]),me(s[ne+1]),me(s[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const a=new K,l=new K,d=new K,u=new K,h=new K,p=new K,v=new K,x=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const w=e.getX(S+0),b=e.getX(S+1),_=e.getX(S+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),d.fromBufferAttribute(t,_),v.subVectors(d,l),x.subVectors(a,l),v.cross(x),u.fromBufferAttribute(s,w),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,_),u.add(v),h.add(v),p.add(v),s.setXYZ(w,u.x,u.y,u.z),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let S=0,M=t.count;S<M;S+=3)a.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),v.subVectors(d,l),x.subVectors(a,l),v.cross(x),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(u,h){const p=u.array,v=u.itemSize,x=u.normalized,S=new p.constructor(h.length*v);let M=0,w=0;for(let b=0,_=h.length;b<_;b++){u.isInterleavedBufferAttribute?M=h[b]*u.data.stride+u.offset:M=h[b]*v;for(let y=0;y<v;y++)S[w++]=p[M++]}return new fi(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,s=this.index.array,a=this.attributes;for(const u in a){const h=a[u],p=e(h,s);t.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const h=[],p=l[u];for(let v=0,x=p.length;v<x;v++){const S=p[v],M=e(S,s);h.push(M)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,h=d.length;u<h;u++){const p=d[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let S=0,M=x.length;S<M;S++)v.push(x[S].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ym=new $t,jr=new Ag,yl=new Yl,Sm=new K,Os=new K,ks=new K,zs=new K,sd=new K,Sl=new K,Ml=new wt,El=new wt,wl=new wt,Mm=new K,Em=new K,wm=new K,Tl=new K,bl=new K;class qi extends kn{constructor(e=new hi,t=new Pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){Sl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=u[h],x=l[h];v!==0&&(sd.fromBufferAttribute(x,e),d?Sl.addScaledVector(sd,v):Sl.addScaledVector(sd.sub(t),v))}t.add(Sl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yl.copy(s.boundingSphere),yl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(yl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(yl,Sm)===null||jr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(ym.copy(l).invert(),jr.copy(e.ray).applyMatrix4(ym),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,d=this.material,u=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,S=l.groups,M=l.drawRange;if(u!==null)if(Array.isArray(d))for(let w=0,b=S.length;w<b;w++){const _=S[w],y=d[_.materialIndex],D=Math.max(_.start,M.start),P=Math.min(u.count,Math.min(_.start+_.count,M.start+M.count));for(let N=D,W=P;N<W;N+=3){const k=u.getX(N),O=u.getX(N+1),de=u.getX(N+2);a=Al(this,y,e,s,p,v,x,k,O,de),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),b=Math.min(u.count,M.start+M.count);for(let _=w,y=b;_<y;_+=3){const D=u.getX(_),P=u.getX(_+1),N=u.getX(_+2);a=Al(this,d,e,s,p,v,x,D,P,N),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let w=0,b=S.length;w<b;w++){const _=S[w],y=d[_.materialIndex],D=Math.max(_.start,M.start),P=Math.min(h.count,Math.min(_.start+_.count,M.start+M.count));for(let N=D,W=P;N<W;N+=3){const k=N,O=N+1,de=N+2;a=Al(this,y,e,s,p,v,x,k,O,de),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let _=w,y=b;_<y;_+=3){const D=_,P=_+1,N=_+2;a=Al(this,d,e,s,p,v,x,D,P,N),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Sx(r,e,t,s,a,l,d,u){let h;if(e.side===Fn?h=s.intersectTriangle(d,l,a,!0,u):h=s.intersectTriangle(a,l,d,e.side===Ar,u),h===null)return null;bl.copy(u),bl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:r}}function Al(r,e,t,s,a,l,d,u,h,p){r.getVertexPosition(u,Os),r.getVertexPosition(h,ks),r.getVertexPosition(p,zs);const v=Sx(r,e,t,s,Os,ks,zs,Tl);if(v){a&&(Ml.fromBufferAttribute(a,u),El.fromBufferAttribute(a,h),wl.fromBufferAttribute(a,p),v.uv=wi.getInterpolation(Tl,Os,ks,zs,Ml,El,wl,new wt)),l&&(Ml.fromBufferAttribute(l,u),El.fromBufferAttribute(l,h),wl.fromBufferAttribute(l,p),v.uv1=wi.getInterpolation(Tl,Os,ks,zs,Ml,El,wl,new wt),v.uv2=v.uv1),d&&(Mm.fromBufferAttribute(d,u),Em.fromBufferAttribute(d,h),wm.fromBufferAttribute(d,p),v.normal=wi.getInterpolation(Tl,Os,ks,zs,Mm,Em,wm,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:u,b:h,c:p,normal:new K,materialIndex:0};wi.getNormal(Os,ks,zs,x.normal),v.face=x}return v}class ta extends hi{constructor(e=1,t=1,s=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:d};const u=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],p=[],v=[],x=[];let S=0,M=0;w("z","y","x",-1,-1,s,t,e,d,l,0),w("z","y","x",1,-1,s,t,-e,d,l,1),w("x","z","y",1,1,e,s,t,a,d,2),w("x","z","y",1,-1,e,s,-t,a,d,3),w("x","y","z",1,-1,e,t,s,a,l,4),w("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(v,3)),this.setAttribute("uv",new Un(x,2));function w(b,_,y,D,P,N,W,k,O,de,me){const T=N/O,F=W/de,le=N/2,fe=W/2,H=k/2,ne=O+1,j=de+1;let ee=0,z=0;const $=new K;for(let X=0;X<j;X++){const L=X*F-fe;for(let V=0;V<ne;V++){const ye=V*T-le;$[b]=ye*D,$[_]=L*P,$[y]=H,p.push($.x,$.y,$.z),$[b]=0,$[_]=0,$[y]=k>0?1:-1,v.push($.x,$.y,$.z),x.push(V/O),x.push(1-X/de),ee+=1}}for(let X=0;X<de;X++)for(let L=0;L<O;L++){const V=S+L+ne*X,ye=S+L+ne*(X+1),q=S+(L+1)+ne*(X+1),ce=S+(L+1)+ne*X;h.push(V,ye,ce),h.push(ye,q,ce),z+=6}u.addGroup(M,z,me),M+=z,S+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const s=to(r[t]);for(const a in s)e[a]=s[a]}return e}function Mx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ng(r){return r.getRenderTarget()===null?r.outputColorSpace:Rt.workingColorSpace}const Ex={clone:to,merge:Mn};var wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wx,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Ig extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new K,Tm=new wt,bm=new wt;class Jn extends Ig{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Tm,bm),t.subVectors(bm,Tm)}setViewOffset(e,t,s,a,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gu*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,p=d.fullHeight;l+=d.offsetX*a/h,t-=d.offsetY*s/p,a*=d.width/h,s*=d.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,Hs=1;class bx extends kn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Jn(Bs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new Jn(Bs,Hs,e,t);l.layers=this.layers,this.add(l);const d=new Jn(Bs,Hs,e,t);d.layers=this.layers,this.add(d);const u=new Jn(Bs,Hs,e,t);u.layers=this.layers,this.add(u);const h=new Jn(Bs,Hs,e,t);h.layers=this.layers,this.add(h);const p=new Jn(Bs,Hs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,d,u,h]=t;for(const p of t)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,u,h,p,v]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,d),e.setRenderTarget(s,2,a),e.render(t,u),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,a),e.render(t,v),e.setRenderTarget(x,S,M),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class Ug extends On{constructor(e,t,s,a,l,d,u,h,p,v){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,s,a,l,d,u,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];t.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ts?sn:ei),this.texture=new Ug(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ta(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:wr});l.uniforms.tEquirect.value=t;const d=new qi(a,l),u=t.minFilter;return t.minFilter===Qr&&(t.minFilter=In),new bx(1,10,this).update(e,d),t.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,a);e.setRenderTarget(l)}}const od=new K,Rx=new K,Cx=new pt;class qr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=od.subVectors(s,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(od),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Cx.getNormalMatrix(e),a=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Yl,Rl=new K;class Fg{constructor(e=new qr,t=new qr,s=new qr,a=new qr,l=new qr,d=new qr){this.planes=[e,t,s,a,l,d]}set(e,t,s,a,l,d){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(s),u[3].copy(a),u[4].copy(l),u[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Xi){const s=this.planes,a=e.elements,l=a[0],d=a[1],u=a[2],h=a[3],p=a[4],v=a[5],x=a[6],S=a[7],M=a[8],w=a[9],b=a[10],_=a[11],y=a[12],D=a[13],P=a[14],N=a[15];if(s[0].setComponents(h-l,S-p,_-M,N-y).normalize(),s[1].setComponents(h+l,S+p,_+M,N+y).normalize(),s[2].setComponents(h+d,S+v,_+w,N+D).normalize(),s[3].setComponents(h-d,S-v,_-w,N-D).normalize(),s[4].setComponents(h-u,S-x,_-b,N-P).normalize(),t===Xi)s[5].setComponents(h+u,S+x,_+b,N+P).normalize();else if(t===Vl)s[5].setComponents(u,x,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Og(){let r=null,e=!1,t=null,s=null;function a(l,d){t(l,d),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Px(r,e){const t=e.isWebGL2,s=new WeakMap;function a(p,v){const x=p.array,S=p.usage,M=x.byteLength,w=r.createBuffer();r.bindBuffer(v,w),r.bufferData(v,x,S),p.onUploadCallback();let b;if(x instanceof Float32Array)b=r.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)b=r.SHORT;else if(x instanceof Uint32Array)b=r.UNSIGNED_INT;else if(x instanceof Int32Array)b=r.INT;else if(x instanceof Int8Array)b=r.BYTE;else if(x instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:w,type:b,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:M}}function l(p,v,x){const S=v.array,M=v._updateRange,w=v.updateRanges;if(r.bindBuffer(x,p),M.count===-1&&w.length===0&&r.bufferSubData(x,0,S),w.length!==0){for(let b=0,_=w.length;b<_;b++){const y=w[b];t?r.bufferSubData(x,y.start*S.BYTES_PER_ELEMENT,S,y.start,y.count):r.bufferSubData(x,y.start*S.BYTES_PER_ELEMENT,S.subarray(y.start,y.start+y.count))}v.clearUpdateRanges()}M.count!==-1&&(t?r.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):r.bufferSubData(x,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),v.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const v=s.get(p);v&&(r.deleteBuffer(v.buffer),s.delete(p))}function h(p,v){if(p.isGLBufferAttribute){const S=s.get(p);(!S||S.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=s.get(p);if(x===void 0)s.set(p,a(p,v));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(x.buffer,p,v),x.version=p.version}}return{get:d,remove:u,update:h}}class Kl extends hi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,d=t/2,u=Math.floor(s),h=Math.floor(a),p=u+1,v=h+1,x=e/u,S=t/h,M=[],w=[],b=[],_=[];for(let y=0;y<v;y++){const D=y*S-d;for(let P=0;P<p;P++){const N=P*x-l;w.push(N,-D,0),b.push(0,0,1),_.push(P/u),_.push(1-y/h)}}for(let y=0;y<h;y++)for(let D=0;D<u;D++){const P=D+p*y,N=D+p*(y+1),W=D+1+p*(y+1),k=D+1+p*y;M.push(P,N,k),M.push(N,W,k)}this.setIndex(M),this.setAttribute("position",new Un(w,3)),this.setAttribute("normal",new Un(b,3)),this.setAttribute("uv",new Un(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
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
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx=`#ifdef USE_BATCHING
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
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
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
#endif`,jx=`#ifdef USE_BUMPMAP
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ey=`#define PI 3.141592653589793
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
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ny=`vec3 transformedNormal = objectNormal;
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
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",ly=`
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
}`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ey=`uniform bool receiveShadow;
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
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cy=`PhysicalMaterial material;
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
#endif`,Py=`struct PhysicalMaterial {
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
}`,Ly=`
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mS=`float getShadowMask() {
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
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,_S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
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
}`,OS=`#if DEPTH_PACKING == 3200
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
}`,kS=`#define DISTANCE
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
}`,zS=`#define DISTANCE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
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
}`,VS=`uniform vec3 diffuse;
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
}`,WS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,YS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,KS=`#define NORMAL
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
}`,QS=`#define NORMAL
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
}`,ZS=`#define PHONG
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
}`,JS=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Lx,alphahash_pars_fragment:Dx,alphamap_fragment:Nx,alphamap_pars_fragment:Ix,alphatest_fragment:Ux,alphatest_pars_fragment:Fx,aomap_fragment:Ox,aomap_pars_fragment:kx,batching_pars_vertex:zx,batching_vertex:Bx,begin_vertex:Hx,beginnormal_vertex:Gx,bsdfs:Vx,iridescence_fragment:Wx,bumpmap_pars_fragment:jx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:$x,color_fragment:Kx,color_pars_fragment:Qx,color_pars_vertex:Zx,color_vertex:Jx,common:ey,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:oy,colorspace_fragment:ay,colorspace_pars_fragment:ly,envmap_fragment:cy,envmap_common_pars_fragment:uy,envmap_pars_fragment:dy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:wy,envmap_vertex:hy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:vy,gradientmap_pars_fragment:_y,lightmap_fragment:xy,lightmap_pars_fragment:yy,lights_lambert_fragment:Sy,lights_lambert_pars_fragment:My,lights_pars_begin:Ey,lights_toon_fragment:Ty,lights_toon_pars_fragment:by,lights_phong_fragment:Ay,lights_phong_pars_fragment:Ry,lights_physical_fragment:Cy,lights_physical_pars_fragment:Py,lights_fragment_begin:Ly,lights_fragment_maps:Dy,lights_fragment_end:Ny,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Uy,logdepthbuf_pars_vertex:Fy,logdepthbuf_vertex:Oy,map_fragment:ky,map_pars_fragment:zy,map_particle_fragment:By,map_particle_pars_fragment:Hy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Vy,morphcolor_vertex:Wy,morphnormal_vertex:jy,morphtarget_pars_vertex:Xy,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:$y,normal_pars_fragment:Ky,normal_pars_vertex:Qy,normal_vertex:Zy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:oS,project_vertex:aS,dithering_fragment:lS,dithering_pars_fragment:cS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:dS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:vS,skinning_vertex:_S,skinnormal_vertex:xS,specularmap_fragment:yS,specularmap_pars_fragment:SS,tonemapping_fragment:MS,tonemapping_pars_fragment:ES,transmission_fragment:wS,transmission_pars_fragment:TS,uv_pars_fragment:bS,uv_pars_vertex:AS,uv_vertex:RS,worldpos_vertex:CS,background_vert:PS,background_frag:LS,backgroundCube_vert:DS,backgroundCube_frag:NS,cube_vert:IS,cube_frag:US,depth_vert:FS,depth_frag:OS,distanceRGBA_vert:kS,distanceRGBA_frag:zS,equirect_vert:BS,equirect_frag:HS,linedashed_vert:GS,linedashed_frag:VS,meshbasic_vert:WS,meshbasic_frag:jS,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:YS,meshmatcap_frag:$S,meshnormal_vert:KS,meshnormal_frag:QS,meshphong_vert:ZS,meshphong_frag:JS,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},Ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Mn([Ae.points,Ae.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Mn([Ae.common,Ae.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Mn([Ae.sprite,Ae.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Mn([Ae.lights,Ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Cl={r:0,b:0,g:0};function uM(r,e,t,s,a,l,d){const u=new je(0);let h=l===!0?0:1,p,v,x=null,S=0,M=null;function w(_,y){let D=!1,P=y.isScene===!0?y.background:null;P&&P.isTexture&&(P=(y.backgroundBlurriness>0?t:e).get(P)),P===null?b(u,h):P&&P.isColor&&(b(P,1),D=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||D)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),P&&(P.isCubeTexture||P.mapping===Xl)?(v===void 0&&(v=new qi(new ta(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:to(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(W,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,v.material.toneMapped=Rt.getTransfer(P.colorSpace)!==It,(x!==P||S!==P.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,x=P,S=P.version,M=r.toneMapping),v.layers.enableAll(),_.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new qi(new Kl(2,2),new bi({name:"BackgroundMaterial",uniforms:to(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||S!==P.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,x=P,S=P.version,M=r.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null))}function b(_,y){_.getRGB(Cl,Ng(r)),s.buffers.color.setClear(Cl.r,Cl.g,Cl.b,y,d)}return{getClearColor:function(){return u},setClearColor:function(_,y=1){u.set(_),h=y,b(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,b(u,h)},render:w}}function dM(r,e,t,s){const a=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||l!==null,u={},h=_(null);let p=h,v=!1;function x(H,ne,j,ee,z){let $=!1;if(d){const X=b(ee,j,ne);p!==X&&(p=X,M(p.object)),$=y(H,ee,j,z),$&&D(H,ee,j,z)}else{const X=ne.wireframe===!0;(p.geometry!==ee.id||p.program!==j.id||p.wireframe!==X)&&(p.geometry=ee.id,p.program=j.id,p.wireframe=X,$=!0)}z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),($||v)&&(v=!1,de(H,ne,j,ee),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function S(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function M(H){return s.isWebGL2?r.bindVertexArray(H):l.bindVertexArrayOES(H)}function w(H){return s.isWebGL2?r.deleteVertexArray(H):l.deleteVertexArrayOES(H)}function b(H,ne,j){const ee=j.wireframe===!0;let z=u[H.id];z===void 0&&(z={},u[H.id]=z);let $=z[ne.id];$===void 0&&($={},z[ne.id]=$);let X=$[ee];return X===void 0&&(X=_(S()),$[ee]=X),X}function _(H){const ne=[],j=[],ee=[];for(let z=0;z<a;z++)ne[z]=0,j[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:j,attributeDivisors:ee,object:H,attributes:{},index:null}}function y(H,ne,j,ee){const z=p.attributes,$=ne.attributes;let X=0;const L=j.getAttributes();for(const V in L)if(L[V].location>=0){const q=z[V];let ce=$[V];if(ce===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(ce=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(ce=H.instanceColor)),q===void 0||q.attribute!==ce||ce&&q.data!==ce.data)return!0;X++}return p.attributesNum!==X||p.index!==ee}function D(H,ne,j,ee){const z={},$=ne.attributes;let X=0;const L=j.getAttributes();for(const V in L)if(L[V].location>=0){let q=$[V];q===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(q=H.instanceColor));const ce={};ce.attribute=q,q&&q.data&&(ce.data=q.data),z[V]=ce,X++}p.attributes=z,p.attributesNum=X,p.index=ee}function P(){const H=p.newAttributes;for(let ne=0,j=H.length;ne<j;ne++)H[ne]=0}function N(H){W(H,0)}function W(H,ne){const j=p.newAttributes,ee=p.enabledAttributes,z=p.attributeDivisors;j[H]=1,ee[H]===0&&(r.enableVertexAttribArray(H),ee[H]=1),z[H]!==ne&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,ne),z[H]=ne)}function k(){const H=p.newAttributes,ne=p.enabledAttributes;for(let j=0,ee=ne.length;j<ee;j++)ne[j]!==H[j]&&(r.disableVertexAttribArray(j),ne[j]=0)}function O(H,ne,j,ee,z,$,X){X===!0?r.vertexAttribIPointer(H,ne,j,z,$):r.vertexAttribPointer(H,ne,j,ee,z,$)}function de(H,ne,j,ee){if(s.isWebGL2===!1&&(H.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const z=ee.attributes,$=j.getAttributes(),X=ne.defaultAttributeValues;for(const L in $){const V=$[L];if(V.location>=0){let ye=z[L];if(ye===void 0&&(L==="instanceMatrix"&&H.instanceMatrix&&(ye=H.instanceMatrix),L==="instanceColor"&&H.instanceColor&&(ye=H.instanceColor)),ye!==void 0){const q=ye.normalized,ce=ye.itemSize,he=t.get(ye);if(he===void 0)continue;const be=he.buffer,ue=he.type,ae=he.bytesPerElement,Ce=s.isWebGL2===!0&&(ue===r.INT||ue===r.UNSIGNED_INT||ye.gpuType===pg);if(ye.isInterleavedBufferAttribute){const ze=ye.data,Y=ze.stride,mt=ye.offset;if(ze.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)W(V.location+Fe,ze.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)N(V.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Fe=0;Fe<V.locationSize;Fe++)O(V.location+Fe,ce/V.locationSize,ue,q,Y*ae,(mt+ce/V.locationSize*Fe)*ae,Ce)}else{if(ye.isInstancedBufferAttribute){for(let ze=0;ze<V.locationSize;ze++)W(V.location+ze,ye.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<V.locationSize;ze++)N(V.location+ze);r.bindBuffer(r.ARRAY_BUFFER,be);for(let ze=0;ze<V.locationSize;ze++)O(V.location+ze,ce/V.locationSize,ue,q,ce*ae,ce/V.locationSize*ze*ae,Ce)}}else if(X!==void 0){const q=X[L];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(V.location,q);break;case 3:r.vertexAttrib3fv(V.location,q);break;case 4:r.vertexAttrib4fv(V.location,q);break;default:r.vertexAttrib1fv(V.location,q)}}}}k()}function me(){le();for(const H in u){const ne=u[H];for(const j in ne){const ee=ne[j];for(const z in ee)w(ee[z].object),delete ee[z];delete ne[j]}delete u[H]}}function T(H){if(u[H.id]===void 0)return;const ne=u[H.id];for(const j in ne){const ee=ne[j];for(const z in ee)w(ee[z].object),delete ee[z];delete ne[j]}delete u[H.id]}function F(H){for(const ne in u){const j=u[ne];if(j[H.id]===void 0)continue;const ee=j[H.id];for(const z in ee)w(ee[z].object),delete ee[z];delete j[H.id]}}function le(){fe(),v=!0,p!==h&&(p=h,M(p.object))}function fe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:x,reset:le,resetDefaultState:fe,dispose:me,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:N,disableUnusedAttributes:k}}function fM(r,e,t,s){const a=s.isWebGL2;let l;function d(v){l=v}function u(v,x){r.drawArrays(l,v,x),t.update(x,l,1)}function h(v,x,S){if(S===0)return;let M,w;if(a)M=r,w="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[w](l,v,x,S),t.update(x,l,S)}function p(v,x,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<S;w++)this.render(v[w],x[w]);else{M.multiDrawArraysWEBGL(l,v,0,x,0,S);let w=0;for(let b=0;b<S;b++)w+=x[b];t.update(w,l,1)}}this.setMode=d,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function hM(r,e,t){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=d||e.has("WEBGL_draw_buffers"),v=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,N=d||e.has("OES_texture_float"),W=P&&N,k=d?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:w,maxAttributes:b,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:D,vertexTextures:P,floatFragmentTextures:N,floatVertexTextures:W,maxSamples:k}}function pM(r){const e=this;let t=null,s=0,a=!1,l=!1;const d=new qr,u=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||a;return a=S,s=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,S){t=v(x,S,0)},this.setState=function(x,S,M){const w=x.clippingPlanes,b=x.clipIntersection,_=x.clipShadows,y=r.get(x);if(!a||w===null||w.length===0||l&&!_)l?v(null):p();else{const D=l?0:s,P=D*4;let N=y.clippingState||null;h.value=N,N=v(w,S,P,M);for(let W=0;W!==P;++W)N[W]=t[W];y.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,S,M,w){const b=x!==null?x.length:0;let _=null;if(b!==0){if(_=h.value,w!==!0||_===null){const y=M+b*4,D=S.matrixWorldInverse;u.getNormalMatrix(D),(_===null||_.length<y)&&(_=new Float32Array(y));for(let P=0,N=M;P!==b;++P,N+=4)d.copy(x[P]).applyMatrix4(D,u),d.normal.toArray(_,N),_[N+3]=d.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function mM(r){let e=new WeakMap;function t(d,u){return u===Ed?d.mapping=Zs:u===wd&&(d.mapping=Js),d}function s(d){if(d&&d.isTexture){const u=d.mapping;if(u===Ed||u===wd)if(e.has(d)){const h=e.get(d).texture;return t(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const p=new Ax(h.height);return p.fromEquirectangularTexture(r,d),e.set(d,p),d.addEventListener("dispose",a),t(p.texture,d.mapping)}else return null}}return d}function a(d){const u=d.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class gM extends Ig{constructor(e=-1,t=1,s=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,d=s+e,u=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,u-=v*this.view.offsetY,h=u-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const js=4,Am=[.125,.215,.35,.446,.526,.582],Kr=20,ad=new gM,Rm=new je;let ld=null,cd=0,ud=0;const Yr=(1+Math.sqrt(5))/2,Gs=1/Yr,Cm=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,Yr,Gs),new K(0,Yr,-Gs),new K(Gs,0,Yr),new K(-Gs,0,Yr),new K(Yr,Gs,0),new K(-Yr,Gs,0)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Qo,format:di,colorSpace:Yi,depthBuffer:!1},a=Lm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vM(l)),this._blurMaterial=_M(l,e,t)}return a}_compileMaterial(e){const t=new qi(this._lodPlanes[0],e);this._renderer.compile(t,ad)}_sceneToCubeUV(e,t,s,a){const u=new Jn(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Rm),v.toneMapping=Tr,v.autoClear=!1;const M=new Pg({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),w=new qi(new ta,M);let b=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,b=!0):(M.color.copy(Rm),b=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(u.up.set(0,h[y],0),u.lookAt(p[y],0,0)):D===1?(u.up.set(0,0,h[y]),u.lookAt(0,p[y],0)):(u.up.set(0,h[y],0),u.lookAt(0,0,p[y]));const P=this._cubeSize;Pl(a,D*P,y>2?P:0,P,P),v.setRenderTarget(a),b&&v.render(w,u),v.render(e,u)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=_}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Zs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new qi(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;Pl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(d,ad)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Cm[(a-1)%Cm.length];this._blur(e,a-1,a,l,d)}t.autoClear=s}_blur(e,t,s,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,s,a,"latitudinal",l),this._halfBlur(d,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,d,u){const h=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new qi(this._lodPlanes[a],p),S=p.uniforms,M=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Kr-1),b=l/w,_=isFinite(l)?1+Math.floor(v*b):Kr;_>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kr}`);const y=[];let D=0;for(let O=0;O<Kr;++O){const de=O/b,me=Math.exp(-de*de/2);y.push(me),O===0?D+=me:O<_&&(D+=2*me)}for(let O=0;O<y.length;O++)y[O]=y[O]/D;S.envMap.value=e.texture,S.samples.value=_,S.weights.value=y,S.latitudinal.value=d==="latitudinal",u&&(S.poleAxis.value=u);const{_lodMax:P}=this;S.dTheta.value=w,S.mipInt.value=P-s;const N=this._sizeLods[a],W=3*N*(a>P-js?a-P+js:0),k=4*(this._cubeSize-N);Pl(t,W,k,3*N,2*N),h.setRenderTarget(t),h.render(x,ad)}}function vM(r){const e=[],t=[],s=[];let a=r;const l=r-js+1+Am.length;for(let d=0;d<l;d++){const u=Math.pow(2,a);t.push(u);let h=1/u;d>r-js?h=Am[d-r+js-1]:d===0&&(h=0),s.push(h);const p=1/(u-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,w=6,b=3,_=2,y=1,D=new Float32Array(b*w*M),P=new Float32Array(_*w*M),N=new Float32Array(y*w*M);for(let k=0;k<M;k++){const O=k%3*2/3-1,de=k>2?0:-1,me=[O,de,0,O+2/3,de,0,O+2/3,de+1,0,O,de,0,O+2/3,de+1,0,O,de+1,0];D.set(me,b*w*k),P.set(S,_*w*k);const T=[k,k,k,k,k,k];N.set(T,y*w*k)}const W=new hi;W.setAttribute("position",new fi(D,b)),W.setAttribute("uv",new fi(P,_)),W.setAttribute("faceIndex",new fi(N,y)),e.push(W),a>js&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Lm(r,e,t){const s=new ns(r,e,t);return s.texture.mapping=Xl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function _M(r,e,t){const s=new Float32Array(Kr),a=new K(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Dm(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Nm(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function xM(r){let e=new WeakMap,t=null;function s(u){if(u&&u.isTexture){const h=u.mapping,p=h===Ed||h===wd,v=h===Zs||h===Js;if(p||v)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let x=e.get(u);return t===null&&(t=new Pm(r)),x=p?t.fromEquirectangular(u,x):t.fromCubemap(u,x),e.set(u,x),x.texture}else{if(e.has(u))return e.get(u).texture;{const x=u.image;if(p&&x&&x.height>0||v&&x&&a(x)){t===null&&(t=new Pm(r));const S=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,S),u.addEventListener("dispose",l),S.texture}else return null}}}return u}function a(u){let h=0;const p=6;for(let v=0;v<p;v++)u[v]!==void 0&&h++;return h===p}function l(u){const h=u.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:d}}function yM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const a=t(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function SM(r,e,t,s){const a={},l=new WeakMap;function d(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);for(const w in S.morphAttributes){const b=S.morphAttributes[w];for(let _=0,y=b.length;_<y;_++)e.remove(b[_])}S.removeEventListener("dispose",d),delete a[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function u(x,S){return a[S.id]===!0||(S.addEventListener("dispose",d),a[S.id]=!0,t.memory.geometries++),S}function h(x){const S=x.attributes;for(const w in S)e.update(S[w],r.ARRAY_BUFFER);const M=x.morphAttributes;for(const w in M){const b=M[w];for(let _=0,y=b.length;_<y;_++)e.update(b[_],r.ARRAY_BUFFER)}}function p(x){const S=[],M=x.index,w=x.attributes.position;let b=0;if(M!==null){const D=M.array;b=M.version;for(let P=0,N=D.length;P<N;P+=3){const W=D[P+0],k=D[P+1],O=D[P+2];S.push(W,k,k,O,O,W)}}else if(w!==void 0){const D=w.array;b=w.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const W=P+0,k=P+1,O=P+2;S.push(W,k,k,O,O,W)}}else return;const _=new(Eg(S)?Dg:Lg)(S,1);_.version=b;const y=l.get(x);y&&e.remove(y),l.set(x,_)}function v(x){const S=l.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:u,update:h,getWireframeAttribute:v}}function MM(r,e,t,s){const a=s.isWebGL2;let l;function d(M){l=M}let u,h;function p(M){u=M.type,h=M.bytesPerElement}function v(M,w){r.drawElements(l,w,u,M*h),t.update(w,l,1)}function x(M,w,b){if(b===0)return;let _,y;if(a)_=r,y="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[y](l,w,u,M*h,b),t.update(w,l,b)}function S(M,w,b){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<b;y++)this.render(M[y]/h,w[y]);else{_.multiDrawElementsWEBGL(l,w,0,u,M,0,b);let y=0;for(let D=0;D<b;D++)y+=w[D];t.update(y,l,1)}}this.setMode=d,this.setIndex=p,this.render=v,this.renderInstances=x,this.renderMultiDraw=S}function EM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,u){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=u*(l/3);break;case r.LINES:t.lines+=u*(l/2);break;case r.LINE_STRIP:t.lines+=u*(l-1);break;case r.LINE_LOOP:t.lines+=u*l;break;case r.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function wM(r,e){return r[0]-e[0]}function TM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bM(r,e,t){const s={},a=new Float32Array(8),l=new WeakMap,d=new on,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function h(p,v,x){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,b=w!==void 0?w.length:0;let _=l.get(v);if(_===void 0||_.count!==b){let ne=function(){fe.dispose(),l.delete(v),v.removeEventListener("dispose",ne)};var M=ne;_!==void 0&&_.texture.dispose();const P=v.morphAttributes.position!==void 0,N=v.morphAttributes.normal!==void 0,W=v.morphAttributes.color!==void 0,k=v.morphAttributes.position||[],O=v.morphAttributes.normal||[],de=v.morphAttributes.color||[];let me=0;P===!0&&(me=1),N===!0&&(me=2),W===!0&&(me=3);let T=v.attributes.position.count*me,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const le=new Float32Array(T*F*4*b),fe=new bg(le,T,F,b);fe.type=ji,fe.needsUpdate=!0;const H=me*4;for(let j=0;j<b;j++){const ee=k[j],z=O[j],$=de[j],X=T*F*4*j;for(let L=0;L<ee.count;L++){const V=L*H;P===!0&&(d.fromBufferAttribute(ee,L),le[X+V+0]=d.x,le[X+V+1]=d.y,le[X+V+2]=d.z,le[X+V+3]=0),N===!0&&(d.fromBufferAttribute(z,L),le[X+V+4]=d.x,le[X+V+5]=d.y,le[X+V+6]=d.z,le[X+V+7]=0),W===!0&&(d.fromBufferAttribute($,L),le[X+V+8]=d.x,le[X+V+9]=d.y,le[X+V+10]=d.z,le[X+V+11]=$.itemSize===4?d.w:1)}}_={count:b,texture:fe,size:new wt(T,F)},l.set(v,_),v.addEventListener("dispose",ne)}let y=0;for(let P=0;P<S.length;P++)y+=S[P];const D=v.morphTargetsRelative?1:1-y;x.getUniforms().setValue(r,"morphTargetBaseInfluence",D),x.getUniforms().setValue(r,"morphTargetInfluences",S),x.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const w=S===void 0?0:S.length;let b=s[v.id];if(b===void 0||b.length!==w){b=[];for(let N=0;N<w;N++)b[N]=[N,0];s[v.id]=b}for(let N=0;N<w;N++){const W=b[N];W[0]=N,W[1]=S[N]}b.sort(TM);for(let N=0;N<8;N++)N<w&&b[N][1]?(u[N][0]=b[N][0],u[N][1]=b[N][1]):(u[N][0]=Number.MAX_SAFE_INTEGER,u[N][1]=0);u.sort(wM);const _=v.morphAttributes.position,y=v.morphAttributes.normal;let D=0;for(let N=0;N<8;N++){const W=u[N],k=W[0],O=W[1];k!==Number.MAX_SAFE_INTEGER&&O?(_&&v.getAttribute("morphTarget"+N)!==_[k]&&v.setAttribute("morphTarget"+N,_[k]),y&&v.getAttribute("morphNormal"+N)!==y[k]&&v.setAttribute("morphNormal"+N,y[k]),a[N]=O,D+=O):(_&&v.hasAttribute("morphTarget"+N)===!0&&v.deleteAttribute("morphTarget"+N),y&&v.hasAttribute("morphNormal"+N)===!0&&v.deleteAttribute("morphNormal"+N),a[N]=0)}const P=v.morphTargetsRelative?1:1-D;x.getUniforms().setValue(r,"morphTargetBaseInfluence",P),x.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:h}}function AM(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,v=h.geometry,x=e.get(h,v);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==p&&(S.update(),a.set(S,p))}return x}function d(){a=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:d}}class kg extends On{constructor(e,t,s,a,l,d,u,h,p,v){if(v=v!==void 0?v:es,v!==es&&v!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===es&&(s=Er),s===void 0&&v===eo&&(s=Jr),super(null,a,l,d,u,h,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:En,this.minFilter=h!==void 0?h:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zg=new On,Bg=new kg(1,1);Bg.compareFunction=Mg;const Hg=new bg,Gg=new ux,Vg=new Ug,Im=[],Um=[],Fm=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function ro(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Im[a];if(l===void 0&&(l=new Float32Array(a),Im[a]=l),e!==0){s.toArray(l,0);for(let d=1,u=0;d!==e;++d)u+=t,r[d].toArray(l,u)}return l}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Ql(r,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function RM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function CM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function PM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function DM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,s))return;km.set(s),r.uniformMatrix2fv(this.addr,!1,km),Qt(t,s)}}function NM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,s))return;Om.set(s),r.uniformMatrix3fv(this.addr,!1,Om),Qt(t,s)}}function IM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,s))return;Fm.set(s),r.uniformMatrix4fv(this.addr,!1,Fm),Qt(t,s)}}function UM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function zM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function VM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);const l=this.type===r.SAMPLER_2D_SHADOW?Bg:zg;t.setTexture2D(e||l,a)}function WM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Gg,a)}function jM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Vg,a)}function XM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Hg,a)}function qM(r){switch(r){case 5126:return RM;case 35664:return CM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return BM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return XM}}function YM(r,e){r.uniform1fv(this.addr,e)}function $M(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function KM(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function QM(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function ZM(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function JM(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function eE(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tE(r,e){r.uniform1iv(this.addr,e)}function nE(r,e){r.uniform2iv(this.addr,e)}function iE(r,e){r.uniform3iv(this.addr,e)}function rE(r,e){r.uniform4iv(this.addr,e)}function sE(r,e){r.uniform1uiv(this.addr,e)}function oE(r,e){r.uniform2uiv(this.addr,e)}function aE(r,e){r.uniform3uiv(this.addr,e)}function lE(r,e){r.uniform4uiv(this.addr,e)}function cE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);Kt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let d=0;d!==a;++d)t.setTexture2D(e[d]||zg,l[d])}function uE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);Kt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let d=0;d!==a;++d)t.setTexture3D(e[d]||Gg,l[d])}function dE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);Kt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let d=0;d!==a;++d)t.setTextureCube(e[d]||Vg,l[d])}function fE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);Kt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let d=0;d!==a;++d)t.setTexture2DArray(e[d]||Hg,l[d])}function hE(r){switch(r){case 5126:return YM;case 35664:return $M;case 35665:return KM;case 35666:return QM;case 35674:return ZM;case 35675:return JM;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 5125:return sE;case 36294:return oE;case 36295:return aE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return fE}}class pE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=qM(t.type)}}class mE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hE(t.type)}}class gE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const u=a[l];u.setValue(e,t[u.id],s)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function zm(r,e){r.seq.push(e),r.map[e.id]=e}function vE(r,e,t){const s=r.name,a=s.length;for(dd.lastIndex=0;;){const l=dd.exec(s),d=dd.lastIndex;let u=l[1];const h=l[2]==="]",p=l[3];if(h&&(u=u|0),p===void 0||p==="["&&d+2===a){zm(t,p===void 0?new pE(u,r,e):new mE(u,r,e));break}else{let x=t.map[u];x===void 0&&(x=new gE(u),zm(t,x)),t=x}}}class kl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),d=e.getUniformLocation(t,l.name);vE(l,d,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,d=t.length;l!==d;++l){const u=t[l],h=s[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in t&&s.push(d)}return s}}function Bm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const _E=37297;let xE=0;function yE(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=a;d<l;d++){const u=d+1;s.push(`${u===e?">":" "} ${u}: ${t[d]}`)}return s.join(`
`)}function SE(r){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(r);let s;switch(e===t?s="":e===Gl&&t===Hl?s="LinearDisplayP3ToLinearSRGB":e===Hl&&t===Gl&&(s="LinearSRGBToLinearDisplayP3"),r){case Yi:case ql:return[s,"LinearTransferOETF"];case sn:case Gd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Hm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+yE(r.getShaderSource(e),d)}else return a}function ME(r,e){const t=SE(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function EE(r,e){let t;switch(e){case I_:t="Linear";break;case U_:t="Reinhard";break;case F_:t="OptimizedCineon";break;case fg:t="ACESFilmic";break;case k_:t="AgX";break;case O_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wE(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function TE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function bE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function AE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),d=l.name;let u=1;l.type===r.FLOAT_MAT2&&(u=2),l.type===r.FLOAT_MAT3&&(u=3),l.type===r.FLOAT_MAT4&&(u=4),t[d]={type:l.type,location:r.getAttribLocation(e,d),locationSize:u}}return t}function Xs(r){return r!==""}function Gm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(r){return r.replace(RE,PE)}const CE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function PE(r,e){let t=dt[e];if(t===void 0){const s=CE.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(r){return r.replace(LE,DE)}function DE(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function jm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function NE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function IE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function FE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case D_:e="ENVMAP_BLENDING_MIX";break;case N_:e="ENVMAP_BLENDING_ADD";break}return e}function OE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function kE(r,e,t,s){const a=r.getContext(),l=t.defines;let d=t.vertexShader,u=t.fragmentShader;const h=NE(t),p=IE(t),v=UE(t),x=FE(t),S=OE(t),M=t.isWebGL2?"":wE(t),w=TE(t),b=bE(l),_=a.createProgram();let y,D,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xs).join(`
`),y.length>0&&(y+=`
`),D=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xs).join(`
`),D.length>0&&(D+=`
`)):(y=[jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),D=[M,jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?dt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?EE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ME("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),d=Pd(d),d=Gm(d,t),d=Vm(d,t),u=Pd(u),u=Gm(u,t),u=Vm(u,t),d=Wm(d),u=Wm(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const N=P+y+d,W=P+D+u,k=Bm(a,a.VERTEX_SHADER,N),O=Bm(a,a.FRAGMENT_SHADER,W);a.attachShader(_,k),a.attachShader(_,O),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function de(le){if(r.debug.checkShaderErrors){const fe=a.getProgramInfoLog(_).trim(),H=a.getShaderInfoLog(k).trim(),ne=a.getShaderInfoLog(O).trim();let j=!0,ee=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,_,k,O);else{const z=Hm(a,k,"vertex"),$=Hm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+fe+`
`+z+`
`+$)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(H===""||ne==="")&&(ee=!1);ee&&(le.diagnostics={runnable:j,programLog:fe,vertexShader:{log:H,prefix:y},fragmentShader:{log:ne,prefix:D}})}a.deleteShader(k),a.deleteShader(O),me=new kl(a,_),T=AE(a,_)}let me;this.getUniforms=function(){return me===void 0&&de(this),me};let T;this.getAttributes=function(){return T===void 0&&de(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=a.getProgramParameter(_,_E)),F},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=O,this}let zE=0;class BE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new HE(e),t.set(e,s)),s}}class HE{constructor(e){this.id=zE++,this.code=e,this.usedTimes=0}}function GE(r,e,t,s,a,l,d){const u=new Rg,h=new BE,p=new Set,v=[],x=a.isWebGL2,S=a.logarithmicDepthBuffer,M=a.vertexTextures;let w=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,F,le,fe,H){const ne=fe.fog,j=H.geometry,ee=T.isMeshStandardMaterial?fe.environment:null,z=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),$=z&&z.mapping===Xl?z.image.height:null,X=b[T.type];T.precision!==null&&(w=a.getMaxPrecision(T.precision),w!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",w,"instead."));const L=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,V=L!==void 0?L.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let q,ce,he,be;if(X){const bt=Ei[X];q=bt.vertexShader,ce=bt.fragmentShader}else q=T.vertexShader,ce=T.fragmentShader,h.update(T),he=h.getVertexShaderID(T),be=h.getFragmentShaderID(T);const ue=r.getRenderTarget(),ae=H.isInstancedMesh===!0,Ce=H.isBatchedMesh===!0,ze=!!T.map,Y=!!T.matcap,mt=!!z,Fe=!!T.aoMap,qe=!!T.lightMap,Ne=!!T.bumpMap,tt=!!T.normalMap,$e=!!T.displacementMap,R=!!T.emissiveMap,A=!!T.metalnessMap,te=!!T.roughnessMap,Se=T.anisotropy>0,_e=T.clearcoat>0,Me=T.iridescence>0,Ve=T.sheen>0,Re=T.transmission>0,Oe=Se&&!!T.anisotropyMap,Qe=_e&&!!T.clearcoatMap,at=_e&&!!T.clearcoatNormalMap,ve=_e&&!!T.clearcoatRoughnessMap,gt=Me&&!!T.iridescenceMap,ft=Me&&!!T.iridescenceThicknessMap,it=Ve&&!!T.sheenColorMap,Ye=Ve&&!!T.sheenRoughnessMap,Be=!!T.specularMap,st=!!T.specularColorMap,_t=!!T.specularIntensityMap,Tt=Re&&!!T.transmissionMap,ct=Re&&!!T.thicknessMap,Et=!!T.gradientMap,U=!!T.alphaMap,Ee=T.alphaTest>0,Te=!!T.alphaHash,Ge=!!T.extensions;let Ke=Tr;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const yt={isWebGL2:x,shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:q,fragmentShader:ce,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:w,batching:Ce,instancing:ae,instancingColor:ae&&H.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Yi,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:Y,envMap:mt,envMapMode:mt&&z.mapping,envMapCubeUVHeight:$,aoMap:Fe,lightMap:qe,bumpMap:Ne,normalMap:tt,displacementMap:M&&$e,emissiveMap:R,normalMapObjectSpace:tt&&T.normalMapType===K_,normalMapTangentSpace:tt&&T.normalMapType===$_,metalnessMap:A,roughnessMap:te,anisotropy:Se,anisotropyMap:Oe,clearcoat:_e,clearcoatMap:Qe,clearcoatNormalMap:at,clearcoatRoughnessMap:ve,iridescence:Me,iridescenceMap:gt,iridescenceThicknessMap:ft,sheen:Ve,sheenColorMap:it,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:st,specularIntensityMap:_t,transmission:Re,transmissionMap:Tt,thicknessMap:ct,gradientMap:Et,opaque:T.transparent===!1&&T.blending===qs&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:Ee,alphaHash:Te,combine:T.combine,mapUv:ze&&_(T.map.channel),aoMapUv:Fe&&_(T.aoMap.channel),lightMapUv:qe&&_(T.lightMap.channel),bumpMapUv:Ne&&_(T.bumpMap.channel),normalMapUv:tt&&_(T.normalMap.channel),displacementMapUv:$e&&_(T.displacementMap.channel),emissiveMapUv:R&&_(T.emissiveMap.channel),metalnessMapUv:A&&_(T.metalnessMap.channel),roughnessMapUv:te&&_(T.roughnessMap.channel),anisotropyMapUv:Oe&&_(T.anisotropyMap.channel),clearcoatMapUv:Qe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(T.sheenRoughnessMap.channel),specularMapUv:Be&&_(T.specularMap.channel),specularColorMapUv:st&&_(T.specularColorMap.channel),specularIntensityMapUv:_t&&_(T.specularIntensityMap.channel),transmissionMapUv:Tt&&_(T.transmissionMap.channel),thicknessMapUv:ct&&_(T.thicknessMap.channel),alphaMapUv:U&&_(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(tt||Se),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ze||U),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ye,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&le.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wi,flipSided:T.side===Fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ge&&T.extensions.derivatives===!0,extensionFragDepth:Ge&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ge&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ge&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&T.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return yt.vertexUv1s=p.has(1),yt.vertexUv2s=p.has(2),yt.vertexUv3s=p.has(3),p.clear(),yt}function D(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const le in T.defines)F.push(le),F.push(T.defines[le]);return T.isRawShaderMaterial===!1&&(P(F,T),N(F,T),F.push(r.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function P(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function N(T,F){u.disableAll(),F.isWebGL2&&u.enable(0),F.supportsVertexTextures&&u.enable(1),F.instancing&&u.enable(2),F.instancingColor&&u.enable(3),F.matcap&&u.enable(4),F.envMap&&u.enable(5),F.normalMapObjectSpace&&u.enable(6),F.normalMapTangentSpace&&u.enable(7),F.clearcoat&&u.enable(8),F.iridescence&&u.enable(9),F.alphaTest&&u.enable(10),F.vertexColors&&u.enable(11),F.vertexAlphas&&u.enable(12),F.vertexUv1s&&u.enable(13),F.vertexUv2s&&u.enable(14),F.vertexUv3s&&u.enable(15),F.vertexTangents&&u.enable(16),F.anisotropy&&u.enable(17),F.alphaHash&&u.enable(18),F.batching&&u.enable(19),T.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.skinning&&u.enable(4),F.morphTargets&&u.enable(5),F.morphNormals&&u.enable(6),F.morphColors&&u.enable(7),F.premultipliedAlpha&&u.enable(8),F.shadowMapEnabled&&u.enable(9),F.useLegacyLights&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.transmission&&u.enable(15),F.sheen&&u.enable(16),F.opaque&&u.enable(17),F.pointsUvs&&u.enable(18),F.decodeVideoTexture&&u.enable(19),F.alphaToCoverage&&u.enable(20),T.push(u.mask)}function W(T){const F=b[T.type];let le;if(F){const fe=Ei[F];le=Ex.clone(fe.uniforms)}else le=T.uniforms;return le}function k(T,F){let le;for(let fe=0,H=v.length;fe<H;fe++){const ne=v[fe];if(ne.cacheKey===F){le=ne,++le.usedTimes;break}}return le===void 0&&(le=new kE(r,F,T,l),v.push(le)),le}function O(T){if(--T.usedTimes===0){const F=v.indexOf(T);v[F]=v[v.length-1],v.pop(),T.destroy()}}function de(T){h.remove(T)}function me(){h.dispose()}return{getParameters:y,getProgramCacheKey:D,getUniforms:W,acquireProgram:k,releaseProgram:O,releaseShaderCache:de,programs:v,dispose:me}}function VE(){let r=new WeakMap;function e(l){let d=r.get(l);return d===void 0&&(d={},r.set(l,d)),d}function t(l){r.delete(l)}function s(l,d,u){r.get(l)[d]=u}function a(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function WE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qm(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function d(x,S,M,w,b,_){let y=r[e];return y===void 0?(y={id:x.id,object:x,geometry:S,material:M,groupOrder:w,renderOrder:x.renderOrder,z:b,group:_},r[e]=y):(y.id=x.id,y.object=x,y.geometry=S,y.material=M,y.groupOrder=w,y.renderOrder=x.renderOrder,y.z=b,y.group=_),e++,y}function u(x,S,M,w,b,_){const y=d(x,S,M,w,b,_);M.transmission>0?s.push(y):M.transparent===!0?a.push(y):t.push(y)}function h(x,S,M,w,b,_){const y=d(x,S,M,w,b,_);M.transmission>0?s.unshift(y):M.transparent===!0?a.unshift(y):t.unshift(y)}function p(x,S){t.length>1&&t.sort(x||WE),s.length>1&&s.sort(S||Xm),a.length>1&&a.sort(S||Xm)}function v(){for(let x=e,S=r.length;x<S;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:u,unshift:h,finish:v,sort:p}}function jE(){let r=new WeakMap;function e(s,a){const l=r.get(s);let d;return l===void 0?(d=new qm,r.set(s,[d])):a>=l.length?(d=new qm,l.push(d)):d=l[a],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function XE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new je};break;case"SpotLight":t={position:new K,direction:new K,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function qE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let YE=0;function $E(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KE(r,e){const t=new XE,s=qE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)a.probe.push(new K);const l=new K,d=new $t,u=new $t;function h(v,x){let S=0,M=0,w=0;for(let le=0;le<9;le++)a.probe[le].set(0,0,0);let b=0,_=0,y=0,D=0,P=0,N=0,W=0,k=0,O=0,de=0,me=0;v.sort($E);const T=x===!0?Math.PI:1;for(let le=0,fe=v.length;le<fe;le++){const H=v[le],ne=H.color,j=H.intensity,ee=H.distance,z=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)S+=ne.r*j*T,M+=ne.g*j*T,w+=ne.b*j*T;else if(H.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(H.sh.coefficients[$],j);me++}else if(H.isDirectionalLight){const $=t.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const X=H.shadow,L=s.get(H);L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,a.directionalShadow[b]=L,a.directionalShadowMap[b]=z,a.directionalShadowMatrix[b]=H.shadow.matrix,N++}a.directional[b]=$,b++}else if(H.isSpotLight){const $=t.get(H);$.position.setFromMatrixPosition(H.matrixWorld),$.color.copy(ne).multiplyScalar(j*T),$.distance=ee,$.coneCos=Math.cos(H.angle),$.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),$.decay=H.decay,a.spot[y]=$;const X=H.shadow;if(H.map&&(a.spotLightMap[O]=H.map,O++,X.updateMatrices(H),H.castShadow&&de++),a.spotLightMatrix[y]=X.matrix,H.castShadow){const L=s.get(H);L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,a.spotShadow[y]=L,a.spotShadowMap[y]=z,k++}y++}else if(H.isRectAreaLight){const $=t.get(H);$.color.copy(ne).multiplyScalar(j),$.halfWidth.set(H.width*.5,0,0),$.halfHeight.set(0,H.height*.5,0),a.rectArea[D]=$,D++}else if(H.isPointLight){const $=t.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity*T),$.distance=H.distance,$.decay=H.decay,H.castShadow){const X=H.shadow,L=s.get(H);L.shadowBias=X.bias,L.shadowNormalBias=X.normalBias,L.shadowRadius=X.radius,L.shadowMapSize=X.mapSize,L.shadowCameraNear=X.camera.near,L.shadowCameraFar=X.camera.far,a.pointShadow[_]=L,a.pointShadowMap[_]=z,a.pointShadowMatrix[_]=H.shadow.matrix,W++}a.point[_]=$,_++}else if(H.isHemisphereLight){const $=t.get(H);$.skyColor.copy(H.color).multiplyScalar(j*T),$.groundColor.copy(H.groundColor).multiplyScalar(j*T),a.hemi[P]=$,P++}}D>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=S,a.ambient[1]=M,a.ambient[2]=w;const F=a.hash;(F.directionalLength!==b||F.pointLength!==_||F.spotLength!==y||F.rectAreaLength!==D||F.hemiLength!==P||F.numDirectionalShadows!==N||F.numPointShadows!==W||F.numSpotShadows!==k||F.numSpotMaps!==O||F.numLightProbes!==me)&&(a.directional.length=b,a.spot.length=y,a.rectArea.length=D,a.point.length=_,a.hemi.length=P,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=W,a.pointShadowMap.length=W,a.spotShadow.length=k,a.spotShadowMap.length=k,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=W,a.spotLightMatrix.length=k+O-de,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=me,F.directionalLength=b,F.pointLength=_,F.spotLength=y,F.rectAreaLength=D,F.hemiLength=P,F.numDirectionalShadows=N,F.numPointShadows=W,F.numSpotShadows=k,F.numSpotMaps=O,F.numLightProbes=me,a.version=YE++)}function p(v,x){let S=0,M=0,w=0,b=0,_=0;const y=x.matrixWorldInverse;for(let D=0,P=v.length;D<P;D++){const N=v[D];if(N.isDirectionalLight){const W=a.directional[S];W.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),W.direction.sub(l),W.direction.transformDirection(y),S++}else if(N.isSpotLight){const W=a.spot[w];W.position.setFromMatrixPosition(N.matrixWorld),W.position.applyMatrix4(y),W.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),W.direction.sub(l),W.direction.transformDirection(y),w++}else if(N.isRectAreaLight){const W=a.rectArea[b];W.position.setFromMatrixPosition(N.matrixWorld),W.position.applyMatrix4(y),u.identity(),d.copy(N.matrixWorld),d.premultiply(y),u.extractRotation(d),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),W.halfWidth.applyMatrix4(u),W.halfHeight.applyMatrix4(u),b++}else if(N.isPointLight){const W=a.point[M];W.position.setFromMatrixPosition(N.matrixWorld),W.position.applyMatrix4(y),M++}else if(N.isHemisphereLight){const W=a.hemi[_];W.direction.setFromMatrixPosition(N.matrixWorld),W.direction.transformDirection(y),_++}}}return{setup:h,setupView:p,state:a}}function Ym(r,e){const t=new KE(r,e),s=[],a=[];function l(){s.length=0,a.length=0}function d(x){s.push(x)}function u(x){a.push(x)}function h(x){t.setup(s,x)}function p(x){t.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:d,pushShadow:u}}function QE(r,e){let t=new WeakMap;function s(l,d=0){const u=t.get(l);let h;return u===void 0?(h=new Ym(r,e),t.set(l,[h])):d>=u.length?(h=new Ym(r,e),u.push(h)):h=u[d],h}function a(){t=new WeakMap}return{get:s,dispose:a}}class ZE extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JE extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
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
}`;function nw(r,e,t){let s=new Fg;const a=new wt,l=new wt,d=new on,u=new ZE({depthPacking:Y_}),h=new JE,p={},v=t.maxTextureSize,x={[Ar]:Fn,[Fn]:Ar,[Wi]:Wi},S=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const w=new hi;w.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new qi(w,S),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug;let y=this.type;this.render=function(k,O,de){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;const me=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),le=r.state;le.setBlending(wr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const fe=y!==Vi&&this.type===Vi,H=y===Vi&&this.type!==Vi;for(let ne=0,j=k.length;ne<j;ne++){const ee=k[ne],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const $=z.getFrameExtents();if(a.multiply($),l.copy(z.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/$.x),a.x=l.x*$.x,z.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/$.y),a.y=l.y*$.y,z.mapSize.y=l.y)),z.map===null||fe===!0||H===!0){const L=this.type!==Vi?{minFilter:En,magFilter:En}:{};z.map!==null&&z.map.dispose(),z.map=new ns(a.x,a.y,L),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const X=z.getViewportCount();for(let L=0;L<X;L++){const V=z.getViewport(L);d.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),le.viewport(d),z.updateMatrices(ee,L),s=z.getFrustum(),N(O,de,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Vi&&D(z,de),z.needsUpdate=!1}y=this.type,_.needsUpdate=!1,r.setRenderTarget(me,T,F)};function D(k,O){const de=e.update(b);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ns(a.x,a.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(O,null,de,S,b,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(O,null,de,M,b,null)}function P(k,O,de,me){let T=null;const F=de.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)T=F;else if(T=de.isPointLight===!0?h:u,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const le=T.uuid,fe=O.uuid;let H=p[le];H===void 0&&(H={},p[le]=H);let ne=H[fe];ne===void 0&&(ne=T.clone(),H[fe]=ne,O.addEventListener("dispose",W)),T=ne}if(T.visible=O.visible,T.wireframe=O.wireframe,me===Vi?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:x[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,de.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const le=r.properties.get(T);le.light=de}return T}function N(k,O,de,me,T){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&T===Vi)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,k.matrixWorld);const fe=e.update(k),H=k.material;if(Array.isArray(H)){const ne=fe.groups;for(let j=0,ee=ne.length;j<ee;j++){const z=ne[j],$=H[z.materialIndex];if($&&$.visible){const X=P(k,$,me,T);k.onBeforeShadow(r,k,O,de,fe,X,z),r.renderBufferDirect(de,null,fe,X,k,z),k.onAfterShadow(r,k,O,de,fe,X,z)}}}else if(H.visible){const ne=P(k,H,me,T);k.onBeforeShadow(r,k,O,de,fe,ne,null),r.renderBufferDirect(de,null,fe,ne,k,null),k.onAfterShadow(r,k,O,de,fe,ne,null)}}const le=k.children;for(let fe=0,H=le.length;fe<H;fe++)N(le[fe],O,de,me,T)}function W(k){k.target.removeEventListener("dispose",W);for(const de in p){const me=p[de],T=k.target.uuid;T in me&&(me[T].dispose(),delete me[T])}}}function iw(r,e,t){const s=t.isWebGL2;function a(){let U=!1;const Ee=new on;let Te=null;const Ge=new on(0,0,0,0);return{setMask:function(Ke){Te!==Ke&&!U&&(r.colorMask(Ke,Ke,Ke,Ke),Te=Ke)},setLocked:function(Ke){U=Ke},setClear:function(Ke,yt,bt,Ht,vn){vn===!0&&(Ke*=Ht,yt*=Ht,bt*=Ht),Ee.set(Ke,yt,bt,Ht),Ge.equals(Ee)===!1&&(r.clearColor(Ke,yt,bt,Ht),Ge.copy(Ee))},reset:function(){U=!1,Te=null,Ge.set(-1,0,0,0)}}}function l(){let U=!1,Ee=null,Te=null,Ge=null;return{setTest:function(Ke){Ke?ae(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Ke){Ee!==Ke&&!U&&(r.depthMask(Ke),Ee=Ke)},setFunc:function(Ke){if(Te!==Ke){switch(Ke){case T_:r.depthFunc(r.NEVER);break;case b_:r.depthFunc(r.ALWAYS);break;case A_:r.depthFunc(r.LESS);break;case zl:r.depthFunc(r.LEQUAL);break;case R_:r.depthFunc(r.EQUAL);break;case C_:r.depthFunc(r.GEQUAL);break;case P_:r.depthFunc(r.GREATER);break;case L_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=Ke}},setLocked:function(Ke){U=Ke},setClear:function(Ke){Ge!==Ke&&(r.clearDepth(Ke),Ge=Ke)},reset:function(){U=!1,Ee=null,Te=null,Ge=null}}}function d(){let U=!1,Ee=null,Te=null,Ge=null,Ke=null,yt=null,bt=null,Ht=null,vn=null;return{setTest:function(St){U||(St?ae(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(St){Ee!==St&&!U&&(r.stencilMask(St),Ee=St)},setFunc:function(St,Xt,an){(Te!==St||Ge!==Xt||Ke!==an)&&(r.stencilFunc(St,Xt,an),Te=St,Ge=Xt,Ke=an)},setOp:function(St,Xt,an){(yt!==St||bt!==Xt||Ht!==an)&&(r.stencilOp(St,Xt,an),yt=St,bt=Xt,Ht=an)},setLocked:function(St){U=St},setClear:function(St){vn!==St&&(r.clearStencil(St),vn=St)},reset:function(){U=!1,Ee=null,Te=null,Ge=null,Ke=null,yt=null,bt=null,Ht=null,vn=null}}}const u=new a,h=new l,p=new d,v=new WeakMap,x=new WeakMap;let S={},M={},w=new WeakMap,b=[],_=null,y=!1,D=null,P=null,N=null,W=null,k=null,O=null,de=null,me=new je(0,0,0),T=0,F=!1,le=null,fe=null,H=null,ne=null,j=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=$>=2);let L=null,V={};const ye=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),ce=new on().fromArray(ye),he=new on().fromArray(q);function be(U,Ee,Te,Ge){const Ke=new Uint8Array(4),yt=r.createTexture();r.bindTexture(U,yt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<Te;bt++)s&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(Ee,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Ke):r.texImage2D(Ee+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ke);return yt}const ue={};ue[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(ue[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),ae(r.DEPTH_TEST),h.setFunc(zl),$e(!1),R(Rp),ae(r.CULL_FACE),Ne(wr);function ae(U){S[U]!==!0&&(r.enable(U),S[U]=!0)}function Ce(U){S[U]!==!1&&(r.disable(U),S[U]=!1)}function ze(U,Ee){return M[U]!==Ee?(r.bindFramebuffer(U,Ee),M[U]=Ee,s&&(U===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=Ee),U===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function Y(U,Ee){let Te=b,Ge=!1;if(U)if(Te=w.get(Ee),Te===void 0&&(Te=[],w.set(Ee,Te)),U.isWebGLMultipleRenderTargets){const Ke=U.texture;if(Te.length!==Ke.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,bt=Ke.length;yt<bt;yt++)Te[yt]=r.COLOR_ATTACHMENT0+yt;Te.length=Ke.length,Ge=!0}}else Te[0]!==r.COLOR_ATTACHMENT0&&(Te[0]=r.COLOR_ATTACHMENT0,Ge=!0);else Te[0]!==r.BACK&&(Te[0]=r.BACK,Ge=!0);Ge&&(t.isWebGL2?r.drawBuffers(Te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function mt(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const Fe={[$r]:r.FUNC_ADD,[u_]:r.FUNC_SUBTRACT,[d_]:r.FUNC_REVERSE_SUBTRACT};if(s)Fe[Lp]=r.MIN,Fe[Dp]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Fe[Lp]=U.MIN_EXT,Fe[Dp]=U.MAX_EXT)}const qe={[f_]:r.ZERO,[h_]:r.ONE,[p_]:r.SRC_COLOR,[Sd]:r.SRC_ALPHA,[y_]:r.SRC_ALPHA_SATURATE,[__]:r.DST_COLOR,[g_]:r.DST_ALPHA,[m_]:r.ONE_MINUS_SRC_COLOR,[Md]:r.ONE_MINUS_SRC_ALPHA,[x_]:r.ONE_MINUS_DST_COLOR,[v_]:r.ONE_MINUS_DST_ALPHA,[S_]:r.CONSTANT_COLOR,[M_]:r.ONE_MINUS_CONSTANT_COLOR,[E_]:r.CONSTANT_ALPHA,[w_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(U,Ee,Te,Ge,Ke,yt,bt,Ht,vn,St){if(U===wr){y===!0&&(Ce(r.BLEND),y=!1);return}if(y===!1&&(ae(r.BLEND),y=!0),U!==c_){if(U!==D||St!==F){if((P!==$r||k!==$r)&&(r.blendEquation(r.FUNC_ADD),P=$r,k=$r),St)switch(U){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ko:r.blendFunc(r.ONE,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ko:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}N=null,W=null,O=null,de=null,me.set(0,0,0),T=0,D=U,F=St}return}Ke=Ke||Ee,yt=yt||Te,bt=bt||Ge,(Ee!==P||Ke!==k)&&(r.blendEquationSeparate(Fe[Ee],Fe[Ke]),P=Ee,k=Ke),(Te!==N||Ge!==W||yt!==O||bt!==de)&&(r.blendFuncSeparate(qe[Te],qe[Ge],qe[yt],qe[bt]),N=Te,W=Ge,O=yt,de=bt),(Ht.equals(me)===!1||vn!==T)&&(r.blendColor(Ht.r,Ht.g,Ht.b,vn),me.copy(Ht),T=vn),D=U,F=!1}function tt(U,Ee){U.side===Wi?Ce(r.CULL_FACE):ae(r.CULL_FACE);let Te=U.side===Fn;Ee&&(Te=!Te),$e(Te),U.blending===qs&&U.transparent===!1?Ne(wr):Ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),h.setFunc(U.depthFunc),h.setTest(U.depthTest),h.setMask(U.depthWrite),u.setMask(U.colorWrite);const Ge=U.stencilWrite;p.setTest(Ge),Ge&&(p.setMask(U.stencilWriteMask),p.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),p.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){le!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),le=U)}function R(U){U!==o_?(ae(r.CULL_FACE),U!==fe&&(U===Rp?r.cullFace(r.BACK):U===a_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),fe=U}function A(U){U!==H&&(z&&r.lineWidth(U),H=U)}function te(U,Ee,Te){U?(ae(r.POLYGON_OFFSET_FILL),(ne!==Ee||j!==Te)&&(r.polygonOffset(Ee,Te),ne=Ee,j=Te)):Ce(r.POLYGON_OFFSET_FILL)}function Se(U){U?ae(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function _e(U){U===void 0&&(U=r.TEXTURE0+ee-1),L!==U&&(r.activeTexture(U),L=U)}function Me(U,Ee,Te){Te===void 0&&(L===null?Te=r.TEXTURE0+ee-1:Te=L);let Ge=V[Te];Ge===void 0&&(Ge={type:void 0,texture:void 0},V[Te]=Ge),(Ge.type!==U||Ge.texture!==Ee)&&(L!==Te&&(r.activeTexture(Te),L=Te),r.bindTexture(U,Ee||ue[U]),Ge.type=U,Ge.texture=Ee)}function Ve(){const U=V[L];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(U){ce.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function _t(U){he.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function Tt(U,Ee){let Te=x.get(Ee);Te===void 0&&(Te=new WeakMap,x.set(Ee,Te));let Ge=Te.get(U);Ge===void 0&&(Ge=r.getUniformBlockIndex(Ee,U.name),Te.set(U,Ge))}function ct(U,Ee){const Ge=x.get(Ee).get(U);v.get(Ee)!==Ge&&(r.uniformBlockBinding(Ee,Ge,U.__bindingPointIndex),v.set(Ee,Ge))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},L=null,V={},M={},w=new WeakMap,b=[],_=null,y=!1,D=null,P=null,N=null,W=null,k=null,O=null,de=null,me=new je(0,0,0),T=0,F=!1,le=null,fe=null,H=null,ne=null,j=null,ce.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:ae,disable:Ce,bindFramebuffer:ze,drawBuffers:Y,useProgram:mt,setBlending:Ne,setMaterial:tt,setFlipSided:$e,setCullFace:R,setLineWidth:A,setPolygonOffset:te,setScissorTest:Se,activeTexture:_e,bindTexture:Me,unbindTexture:Ve,compressedTexImage2D:Re,compressedTexImage3D:Oe,texImage2D:Ye,texImage3D:Be,updateUBOMapping:Tt,uniformBlockBinding:ct,texStorage2D:ft,texStorage3D:it,texSubImage2D:Qe,texSubImage3D:at,compressedTexSubImage2D:ve,compressedTexSubImage3D:gt,scissor:st,viewport:_t,reset:Et}}function rw(r,e,t,s,a,l,d){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,A){return M?new OffscreenCanvas(R,A):Wl("canvas")}function b(R,A,te,Se){let _e=1;if((R.width>Se||R.height>Se)&&(_e=Se/Math.max(R.width,R.height)),_e<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const Me=A?Cd:Math.floor,Ve=Me(_e*R.width),Re=Me(_e*R.height);x===void 0&&(x=w(Ve,Re));const Oe=te?w(Ve,Re):x;return Oe.width=Ve,Oe.height=Re,Oe.getContext("2d").drawImage(R,0,0,Ve,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ve+"x"+Re+")."),Oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function _(R){return lm(R.width)&&lm(R.height)}function y(R){return u?!1:R.wrapS!==ui||R.wrapT!==ui||R.minFilter!==En&&R.minFilter!==In}function D(R,A){return R.generateMipmaps&&A&&R.minFilter!==En&&R.minFilter!==In}function P(R){r.generateMipmap(R)}function N(R,A,te,Se,_e=!1){if(u===!1)return A;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me=A;if(A===r.RED&&(te===r.FLOAT&&(Me=r.R32F),te===r.HALF_FLOAT&&(Me=r.R16F),te===r.UNSIGNED_BYTE&&(Me=r.R8)),A===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(Me=r.R8UI),te===r.UNSIGNED_SHORT&&(Me=r.R16UI),te===r.UNSIGNED_INT&&(Me=r.R32UI),te===r.BYTE&&(Me=r.R8I),te===r.SHORT&&(Me=r.R16I),te===r.INT&&(Me=r.R32I)),A===r.RG&&(te===r.FLOAT&&(Me=r.RG32F),te===r.HALF_FLOAT&&(Me=r.RG16F),te===r.UNSIGNED_BYTE&&(Me=r.RG8)),A===r.RGBA){const Ve=_e?Bl:Rt.getTransfer(Se);te===r.FLOAT&&(Me=r.RGBA32F),te===r.HALF_FLOAT&&(Me=r.RGBA16F),te===r.UNSIGNED_BYTE&&(Me=Ve===It?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(Me=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(Me=r.RGB5_A1)}return(Me===r.R16F||Me===r.R32F||Me===r.RG16F||Me===r.RG32F||Me===r.RGBA16F||Me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function W(R,A,te){return D(R,te)===!0||R.isFramebufferTexture&&R.minFilter!==En&&R.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function k(R){return R===En||R===Np||R===Ho?r.NEAREST:r.LINEAR}function O(R){const A=R.target;A.removeEventListener("dispose",O),me(A),A.isVideoTexture&&v.delete(A)}function de(R){const A=R.target;A.removeEventListener("dispose",de),F(A)}function me(R){const A=s.get(R);if(A.__webglInit===void 0)return;const te=R.source,Se=S.get(te);if(Se){const _e=Se[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(R),Object.keys(Se).length===0&&S.delete(te)}s.remove(R)}function T(R){const A=s.get(R);r.deleteTexture(A.__webglTexture);const te=R.source,Se=S.get(te);delete Se[A.__cacheKey],d.memory.textures--}function F(R){const A=R.texture,te=s.get(R),Se=s.get(A);if(Se.__webglTexture!==void 0&&(r.deleteTexture(Se.__webglTexture),d.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(te.__webglFramebuffer[_e]))for(let Me=0;Me<te.__webglFramebuffer[_e].length;Me++)r.deleteFramebuffer(te.__webglFramebuffer[_e][Me]);else r.deleteFramebuffer(te.__webglFramebuffer[_e]);te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[_e])}else{if(Array.isArray(te.__webglFramebuffer))for(let _e=0;_e<te.__webglFramebuffer.length;_e++)r.deleteFramebuffer(te.__webglFramebuffer[_e]);else r.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let _e=0;_e<te.__webglColorRenderbuffer.length;_e++)te.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(te.__webglColorRenderbuffer[_e]);te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let _e=0,Me=A.length;_e<Me;_e++){const Ve=s.get(A[_e]);Ve.__webglTexture&&(r.deleteTexture(Ve.__webglTexture),d.memory.textures--),s.remove(A[_e])}s.remove(A),s.remove(R)}let le=0;function fe(){le=0}function H(){const R=le;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),le+=1,R}function ne(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function j(R,A){const te=s.get(R);if(R.isVideoTexture&&tt(R),R.isRenderTargetTexture===!1&&R.version>0&&te.__version!==R.version){const Se=R.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(te,R,A);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+A)}function ee(R,A){const te=s.get(R);if(R.version>0&&te.__version!==R.version){ce(te,R,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+A)}function z(R,A){const te=s.get(R);if(R.version>0&&te.__version!==R.version){ce(te,R,A);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+A)}function $(R,A){const te=s.get(R);if(R.version>0&&te.__version!==R.version){he(te,R,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+A)}const X={[Td]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[bd]:r.MIRRORED_REPEAT},L={[En]:r.NEAREST,[Np]:r.NEAREST_MIPMAP_NEAREST,[Ho]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Fu]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},V={[Q_]:r.NEVER,[ix]:r.ALWAYS,[Z_]:r.LESS,[Mg]:r.LEQUAL,[J_]:r.EQUAL,[nx]:r.GEQUAL,[ex]:r.GREATER,[tx]:r.NOTEQUAL};function ye(R,A,te){if(A.type===ji&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===Fu||A.magFilter===Ho||A.magFilter===Qr||A.minFilter===In||A.minFilter===Fu||A.minFilter===Ho||A.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(r.texParameteri(R,r.TEXTURE_WRAP_S,X[A.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,X[A.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,X[A.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[A.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[A.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==ui||A.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,k(A.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,k(A.minFilter)),A.minFilter!==En&&A.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===En||A.minFilter!==Ho&&A.minFilter!==Qr||A.type===ji&&e.has("OES_texture_float_linear")===!1||u===!1&&A.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(r.texParameterf(R,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function q(R,A){let te=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",O));const Se=A.source;let _e=S.get(Se);_e===void 0&&(_e={},S.set(Se,_e));const Me=ne(A);if(Me!==R.__cacheKey){_e[Me]===void 0&&(_e[Me]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,te=!0),_e[Me].usedTimes++;const Ve=_e[R.__cacheKey];Ve!==void 0&&(_e[R.__cacheKey].usedTimes--,Ve.usedTimes===0&&T(A)),R.__cacheKey=Me,R.__webglTexture=_e[Me].texture}return te}function ce(R,A,te){let Se=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=r.TEXTURE_3D);const _e=q(R,A),Me=A.source;t.bindTexture(Se,R.__webglTexture,r.TEXTURE0+te);const Ve=s.get(Me);if(Me.version!==Ve.__version||_e===!0){t.activeTexture(r.TEXTURE0+te);const Re=Rt.getPrimaries(Rt.workingColorSpace),Oe=A.colorSpace===ei?null:Rt.getPrimaries(A.colorSpace),Qe=A.colorSpace===ei||Re===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const at=y(A)&&_(A.image)===!1;let ve=b(A.image,at,!1,a.maxTextureSize);ve=$e(A,ve);const gt=_(ve)||u,ft=l.convert(A.format,A.colorSpace);let it=l.convert(A.type),Ye=N(A.internalFormat,ft,it,A.colorSpace,A.isVideoTexture);ye(Se,A,gt);let Be;const st=A.mipmaps,_t=u&&A.isVideoTexture!==!0&&Ye!==yg,Tt=Ve.__version===void 0||_e===!0,ct=Me.dataReady,Et=W(A,ve,gt);if(A.isDepthTexture)Ye=r.DEPTH_COMPONENT,u?A.type===ji?Ye=r.DEPTH_COMPONENT32F:A.type===Er?Ye=r.DEPTH_COMPONENT24:A.type===Jr?Ye=r.DEPTH24_STENCIL8:Ye=r.DEPTH_COMPONENT16:A.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===es&&Ye===r.DEPTH_COMPONENT&&A.type!==Hd&&A.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Er,it=l.convert(A.type)),A.format===eo&&Ye===r.DEPTH_COMPONENT&&(Ye=r.DEPTH_STENCIL,A.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Jr,it=l.convert(A.type))),Tt&&(_t?t.texStorage2D(r.TEXTURE_2D,1,Ye,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Ye,ve.width,ve.height,0,ft,it,null));else if(A.isDataTexture)if(st.length>0&&gt){_t&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,Ye,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],_t?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,Be.width,Be.height,ft,it,Be.data):t.texImage2D(r.TEXTURE_2D,U,Ye,Be.width,Be.height,0,ft,it,Be.data);A.generateMipmaps=!1}else _t?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,Ye,ve.width,ve.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,ft,it,ve.data)):t.texImage2D(r.TEXTURE_2D,0,Ye,ve.width,ve.height,0,ft,it,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){_t&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Ye,st[0].width,st[0].height,ve.depth);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],A.format!==di?ft!==null?_t?ct&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,Be.width,Be.height,ve.depth,ft,Be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,U,Ye,Be.width,Be.height,ve.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,Be.width,Be.height,ve.depth,ft,it,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,U,Ye,Be.width,Be.height,ve.depth,0,ft,it,Be.data)}else{_t&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,Ye,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],A.format!==di?ft!==null?_t?ct&&t.compressedTexSubImage2D(r.TEXTURE_2D,U,0,0,Be.width,Be.height,ft,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,U,Ye,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,Be.width,Be.height,ft,it,Be.data):t.texImage2D(r.TEXTURE_2D,U,Ye,Be.width,Be.height,0,ft,it,Be.data)}else if(A.isDataArrayTexture)_t?(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Ye,ve.width,ve.height,ve.depth),ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ft,it,ve.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ye,ve.width,ve.height,ve.depth,0,ft,it,ve.data);else if(A.isData3DTexture)_t?(Tt&&t.texStorage3D(r.TEXTURE_3D,Et,Ye,ve.width,ve.height,ve.depth),ct&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ft,it,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Ye,ve.width,ve.height,ve.depth,0,ft,it,ve.data);else if(A.isFramebufferTexture){if(Tt)if(_t)t.texStorage2D(r.TEXTURE_2D,Et,Ye,ve.width,ve.height);else{let U=ve.width,Ee=ve.height;for(let Te=0;Te<Et;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ye,U,Ee,0,ft,it,null),U>>=1,Ee>>=1}}else if(st.length>0&&gt){_t&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,Ye,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)Be=st[U],_t?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,ft,it,Be):t.texImage2D(r.TEXTURE_2D,U,Ye,ft,it,Be);A.generateMipmaps=!1}else _t?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,Ye,ve.width,ve.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,it,ve)):t.texImage2D(r.TEXTURE_2D,0,Ye,ft,it,ve);D(A,gt)&&P(Se),Ve.__version=Me.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function he(R,A,te){if(A.image.length!==6)return;const Se=q(R,A),_e=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+te);const Me=s.get(_e);if(_e.version!==Me.__version||Se===!0){t.activeTexture(r.TEXTURE0+te);const Ve=Rt.getPrimaries(Rt.workingColorSpace),Re=A.colorSpace===ei?null:Rt.getPrimaries(A.colorSpace),Oe=A.colorSpace===ei||Ve===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Qe=A.isCompressedTexture||A.image[0].isCompressedTexture,at=A.image[0]&&A.image[0].isDataTexture,ve=[];for(let U=0;U<6;U++)!Qe&&!at?ve[U]=b(A.image[U],!1,!0,a.maxCubemapSize):ve[U]=at?A.image[U].image:A.image[U],ve[U]=$e(A,ve[U]);const gt=ve[0],ft=_(gt)||u,it=l.convert(A.format,A.colorSpace),Ye=l.convert(A.type),Be=N(A.internalFormat,it,Ye,A.colorSpace),st=u&&A.isVideoTexture!==!0,_t=Me.__version===void 0||Se===!0,Tt=_e.dataReady;let ct=W(A,gt,ft);ye(r.TEXTURE_CUBE_MAP,A,ft);let Et;if(Qe){st&&_t&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Be,gt.width,gt.height);for(let U=0;U<6;U++){Et=ve[U].mipmaps;for(let Ee=0;Ee<Et.length;Ee++){const Te=Et[Ee];A.format!==di?it!==null?st?Tt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,0,0,Te.width,Te.height,it,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,0,0,Te.width,Te.height,it,Ye,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,Be,Te.width,Te.height,0,it,Ye,Te.data)}}}else{Et=A.mipmaps,st&&_t&&(Et.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Be,ve[0].width,ve[0].height));for(let U=0;U<6;U++)if(at){st?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ve[U].width,ve[U].height,it,Ye,ve[U].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Be,ve[U].width,ve[U].height,0,it,Ye,ve[U].data);for(let Ee=0;Ee<Et.length;Ee++){const Ge=Et[Ee].image[U].image;st?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,0,0,Ge.width,Ge.height,it,Ye,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,Be,Ge.width,Ge.height,0,it,Ye,Ge.data)}}else{st?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,it,Ye,ve[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Be,it,Ye,ve[U]);for(let Ee=0;Ee<Et.length;Ee++){const Te=Et[Ee];st?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,0,0,it,Ye,Te.image[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,Be,it,Ye,Te.image[U])}}}D(A,ft)&&P(r.TEXTURE_CUBE_MAP),Me.__version=_e.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function be(R,A,te,Se,_e,Me){const Ve=l.convert(te.format,te.colorSpace),Re=l.convert(te.type),Oe=N(te.internalFormat,Ve,Re,te.colorSpace);if(!s.get(A).__hasExternalTextures){const at=Math.max(1,A.width>>Me),ve=Math.max(1,A.height>>Me);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,Me,Oe,at,ve,A.depth,0,Ve,Re,null):t.texImage2D(_e,Me,Oe,at,ve,0,Ve,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ne(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,_e,s.get(te).__webglTexture,0,qe(A)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Se,_e,s.get(te).__webglTexture,Me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(R,A,te){if(r.bindRenderbuffer(r.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let Se=u===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(te||Ne(A)){const _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===ji?Se=r.DEPTH_COMPONENT32F:_e.type===Er&&(Se=r.DEPTH_COMPONENT24));const Me=qe(A);Ne(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,Se,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,Se,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,Se,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const Se=qe(A);te&&Ne(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,r.DEPTH24_STENCIL8,A.width,A.height):Ne(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const Se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0;_e<Se.length;_e++){const Me=Se[_e],Ve=l.convert(Me.format,Me.colorSpace),Re=l.convert(Me.type),Oe=N(Me.internalFormat,Ve,Re,Me.colorSpace),Qe=qe(A);te&&Ne(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Oe,A.width,A.height):Ne(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,Oe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);const Se=s.get(A.depthTexture).__webglTexture,_e=qe(A);if(A.depthTexture.format===es)Ne(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(A.depthTexture.format===eo)Ne(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const A=s.get(R),te=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ae(A.__webglFramebuffer,R)}else if(te){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]=r.createRenderbuffer(),ue(A.__webglDepthbuffer[Se],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),ue(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(R,A,te){const Se=s.get(R);A!==void 0&&be(Se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Ce(R)}function Y(R){const A=R.texture,te=s.get(R),Se=s.get(A);R.addEventListener("dispose",de),R.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture()),Se.__version=A.version,d.memory.textures++);const _e=R.isWebGLCubeRenderTarget===!0,Me=R.isWebGLMultipleRenderTargets===!0,Ve=_(R)||u;if(_e){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(u&&A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)te.__webglFramebuffer[Re][Oe]=r.createFramebuffer()}else te.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(u&&A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)te.__webglFramebuffer[Re]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Me)if(a.drawBuffers){const Re=R.texture;for(let Oe=0,Qe=Re.length;Oe<Qe;Oe++){const at=s.get(Re[Oe]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&R.samples>0&&Ne(R)===!1){const Re=Me?A:[A];te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Re.length;Oe++){const Qe=Re[Oe];te.__webglColorRenderbuffer[Oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Oe]);const at=l.convert(Qe.format,Qe.colorSpace),ve=l.convert(Qe.type),gt=N(Qe.internalFormat,at,ve,Qe.colorSpace,R.isXRRenderTarget===!0),ft=qe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,gt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,te.__webglColorRenderbuffer[Oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ue(te.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),ye(r.TEXTURE_CUBE_MAP,A,Ve);for(let Re=0;Re<6;Re++)if(u&&A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)be(te.__webglFramebuffer[Re][Oe],R,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Oe);else be(te.__webglFramebuffer[Re],R,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);D(A,Ve)&&P(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const Re=R.texture;for(let Oe=0,Qe=Re.length;Oe<Qe;Oe++){const at=Re[Oe],ve=s.get(at);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),ye(r.TEXTURE_2D,at,Ve),be(te.__webglFramebuffer,R,at,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,0),D(at,Ve)&&P(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(u?Re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,Se.__webglTexture),ye(Re,A,Ve),u&&A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)be(te.__webglFramebuffer[Oe],R,A,r.COLOR_ATTACHMENT0,Re,Oe);else be(te.__webglFramebuffer,R,A,r.COLOR_ATTACHMENT0,Re,0);D(A,Ve)&&P(Re),t.unbindTexture()}R.depthBuffer&&Ce(R)}function mt(R){const A=_(R)||u,te=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Se=0,_e=te.length;Se<_e;Se++){const Me=te[Se];if(D(Me,A)){const Ve=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Re=s.get(Me).__webglTexture;t.bindTexture(Ve,Re),P(Ve),t.unbindTexture()}}}function Fe(R){if(u&&R.samples>0&&Ne(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],te=R.width,Se=R.height;let _e=r.COLOR_BUFFER_BIT;const Me=[],Ve=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=s.get(R),Oe=R.isWebGLMultipleRenderTargets===!0;if(Oe)for(let Qe=0;Qe<A.length;Qe++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Qe=0;Qe<A.length;Qe++){Me.push(r.COLOR_ATTACHMENT0+Qe),R.depthBuffer&&Me.push(Ve);const at=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(at===!1&&(R.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Oe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Qe]),at===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ve])),Oe){const ve=s.get(A[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,te,Se,0,0,te,Se,_e,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Oe)for(let Qe=0;Qe<A.length;Qe++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,Re.__webglColorRenderbuffer[Qe]);const at=s.get(A[Qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function qe(R){return Math.min(a.maxSamples,R.samples)}function Ne(R){const A=s.get(R);return u&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(R){const A=d.render.frame;v.get(R)!==A&&(v.set(R,A),R.update())}function $e(R,A){const te=R.colorSpace,Se=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ad||te!==Yi&&te!==ei&&(Rt.getTransfer(te)===It?u===!1?e.has("EXT_sRGB")===!0&&Se===di?(R.format=Ad,R.minFilter=In,R.generateMipmaps=!1):A=wg.sRGBToLinear(A):(Se!==di||_e!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}this.allocateTextureUnit=H,this.resetTextureUnits=fe,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=ze,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ne}function sw(r,e,t){const s=t.isWebGL2;function a(l,d=ei){let u;const h=Rt.getTransfer(d);if(l===br)return r.UNSIGNED_BYTE;if(l===mg)return r.UNSIGNED_SHORT_4_4_4_4;if(l===gg)return r.UNSIGNED_SHORT_5_5_5_1;if(l===z_)return r.BYTE;if(l===B_)return r.SHORT;if(l===Hd)return r.UNSIGNED_SHORT;if(l===pg)return r.INT;if(l===Er)return r.UNSIGNED_INT;if(l===ji)return r.FLOAT;if(l===Qo)return s?r.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===H_)return r.ALPHA;if(l===di)return r.RGBA;if(l===G_)return r.LUMINANCE;if(l===V_)return r.LUMINANCE_ALPHA;if(l===es)return r.DEPTH_COMPONENT;if(l===eo)return r.DEPTH_STENCIL;if(l===Ad)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===W_)return r.RED;if(l===vg)return r.RED_INTEGER;if(l===j_)return r.RG;if(l===_g)return r.RG_INTEGER;if(l===xg)return r.RGBA_INTEGER;if(l===Ou||l===ku||l===zu||l===Bu)if(h===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===Ou)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===Ou)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Ip||l===Up||l===Fp||l===Op)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Ip)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Up)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Fp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Op)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===yg)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===kp||l===zp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===kp)return h===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===zp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Bp||l===Hp||l===Gp||l===Vp||l===Wp||l===jp||l===Xp||l===qp||l===Yp||l===$p||l===Kp||l===Qp||l===Zp||l===Jp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Bp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Hp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Gp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Vp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Wp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===jp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Xp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===qp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Yp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===$p)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Kp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Qp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Zp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Jp)return h===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Hu||l===em||l===tm)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===Hu)return h===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===em)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===tm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===X_||l===nm||l===im||l===rm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===Hu)return u.COMPRESSED_RED_RGTC1_EXT;if(l===nm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===im)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===rm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Jr?s?r.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:a}}class ow extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yo extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,d=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,s),y=this._getHandJoint(p,b);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&S>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Yo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new On,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const s=t.cameras[0].viewport,a=new bi({extensions:{fragDepth:!0},vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new qi(new Kl(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class dw extends no{constructor(e,t){super();const s=this;let a=null,l=1,d=null,u="local-floor",h=1,p=null,v=null,x=null,S=null,M=null,w=null;const b=new uw,_=t.getContextAttributes();let y=null,D=null;const P=[],N=[],W=new wt;let k=null;const O=new Jn;O.layers.enable(1),O.viewport=new on;const de=new Jn;de.layers.enable(2),de.viewport=new on;const me=[O,de],T=new ow;T.layers.enable(1),T.layers.enable(2);let F=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=P[q];return ce===void 0&&(ce=new fd,P[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=P[q];return ce===void 0&&(ce=new fd,P[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=P[q];return ce===void 0&&(ce=new fd,P[q]=ce),ce.getHandSpace()};function fe(q){const ce=N.indexOf(q.inputSource);if(ce===-1)return;const he=P[ce];he!==void 0&&(he.update(q.inputSource,q.frame,p||d),he.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",ne);for(let q=0;q<P.length;q++){const ce=N[q];ce!==null&&(N[q]=null,P[q].disconnect(ce))}F=null,le=null,b.reset(),e.setRenderTarget(y),M=null,S=null,x=null,a=null,D=null,ye.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",H),a.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ns(M.framebufferWidth,M.framebufferHeight,{format:di,type:br,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,he=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?eo:es,he=_.stencil?Jr:Er);const ue={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};x=new XRWebGLBinding(a,t),S=x.createProjectionLayer(ue),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new ns(S.textureWidth,S.textureHeight,{format:di,type:br,depthTexture:new kg(S.textureWidth,S.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ae=e.properties.get(D);ae.__ignoreDepthValues=S.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,d=await a.requestReferenceSpace(u),ye.setContext(a),ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ne(q){for(let ce=0;ce<q.removed.length;ce++){const he=q.removed[ce],be=N.indexOf(he);be>=0&&(N[be]=null,P[be].disconnect(he))}for(let ce=0;ce<q.added.length;ce++){const he=q.added[ce];let be=N.indexOf(he);if(be===-1){for(let ae=0;ae<P.length;ae++)if(ae>=N.length){N.push(he),be=ae;break}else if(N[ae]===null){N[ae]=he,be=ae;break}if(be===-1)break}const ue=P[be];ue&&ue.connect(he)}}const j=new K,ee=new K;function z(q,ce,he){j.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const be=j.distanceTo(ee),ue=ce.projectionMatrix.elements,ae=he.projectionMatrix.elements,Ce=ue[14]/(ue[10]-1),ze=ue[14]/(ue[10]+1),Y=(ue[9]+1)/ue[5],mt=(ue[9]-1)/ue[5],Fe=(ue[8]-1)/ue[0],qe=(ae[8]+1)/ae[0],Ne=Ce*Fe,tt=Ce*qe,$e=be/(-Fe+qe),R=$e*-Fe;ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(R),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Ce+$e,te=ze+$e,Se=Ne-R,_e=tt+(be-R),Me=Y*ze/te*A,Ve=mt*ze/te*A;q.projectionMatrix.makePerspective(Se,_e,Me,Ve,A,te),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;b.texture!==null&&(q.near=b.depthNear,q.far=b.depthFar),T.near=de.near=O.near=q.near,T.far=de.far=O.far=q.far,(F!==T.near||le!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,le=T.far,O.near=F,O.far=le,de.near=F,de.far=le,O.updateProjectionMatrix(),de.updateProjectionMatrix(),q.updateProjectionMatrix());const ce=q.parent,he=T.cameras;$(T,ce);for(let be=0;be<he.length;be++)$(he[be],ce);he.length===2?z(T,O,de):T.projectionMatrix.copy(O.projectionMatrix),X(q,T,ce)};function X(q,ce,he){he===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Rd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(q){h=q,S!==null&&(S.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null};let L=null;function V(q,ce){if(v=ce.getViewerPose(p||d),w=ce,v!==null){const he=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let be=!1;he.length!==T.cameras.length&&(T.cameras.length=0,be=!0);for(let ae=0;ae<he.length;ae++){const Ce=he[ae];let ze=null;if(M!==null)ze=M.getViewport(Ce);else{const mt=x.getViewSubImage(S,Ce);ze=mt.viewport,ae===0&&(e.setRenderTargetTextures(D,mt.colorTexture,S.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(D))}let Y=me[ae];Y===void 0&&(Y=new Jn,Y.layers.enable(ae),Y.viewport=new on,me[ae]=Y),Y.matrix.fromArray(Ce.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Ce.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ze.x,ze.y,ze.width,ze.height),ae===0&&(T.matrix.copy(Y.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),be===!0&&T.cameras.push(Y)}const ue=a.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const ae=x.getDepthInformation(he[0]);ae&&ae.isValid&&ae.texture&&b.init(e,ae,a.renderState)}}for(let he=0;he<P.length;he++){const be=N[he],ue=P[he];be!==null&&ue!==void 0&&ue.update(be,ce,p||d)}b.render(e,T),L&&L(q,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),w=null}const ye=new Og;ye.setAnimationLoop(V),this.setAnimationLoop=function(q){L=q},this.dispose=function(){}}}function fw(r,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function s(_,y){y.color.getRGB(_.fogColor.value,Ng(r)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function a(_,y,D,P,N){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(_,y):y.isMeshToonMaterial?(l(_,y),x(_,y)):y.isMeshPhongMaterial?(l(_,y),v(_,y)):y.isMeshStandardMaterial?(l(_,y),S(_,y),y.isMeshPhysicalMaterial&&M(_,y,N)):y.isMeshMatcapMaterial?(l(_,y),w(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),b(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(d(_,y),y.isLineDashedMaterial&&u(_,y)):y.isPointsMaterial?h(_,y,D,P):y.isSpriteMaterial?p(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Fn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Fn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const D=e.get(y).envMap;if(D&&(_.envMap.value=D,_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap){_.lightMap.value=y.lightMap;const P=r._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=y.lightMapIntensity*P,t(y.lightMap,_.lightMapTransform)}y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function d(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function u(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function h(_,y,D,P){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*D,_.scale.value=P*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function x(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function S(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),e.get(y).envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function M(_,y,D){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Fn&&_.clearcoatNormalScale.value.negate())),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,y){y.matcap&&(_.matcap.value=y.matcap)}function b(_,y){const D=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function hw(r,e,t,s){let a={},l={},d=[];const u=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,P){const N=P.program;s.uniformBlockBinding(D,N)}function p(D,P){let N=a[D.id];N===void 0&&(w(D),N=v(D),a[D.id]=N,D.addEventListener("dispose",_));const W=P.program;s.updateUBOMapping(D,W);const k=e.render.frame;l[D.id]!==k&&(S(D),l[D.id]=k)}function v(D){const P=x();D.__bindingPointIndex=P;const N=r.createBuffer(),W=D.__size,k=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,W,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,N),N}function x(){for(let D=0;D<u;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const P=a[D.id],N=D.uniforms,W=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let k=0,O=N.length;k<O;k++){const de=Array.isArray(N[k])?N[k]:[N[k]];for(let me=0,T=de.length;me<T;me++){const F=de[me];if(M(F,k,me,W)===!0){const le=F.__offset,fe=Array.isArray(F.value)?F.value:[F.value];let H=0;for(let ne=0;ne<fe.length;ne++){const j=fe[ne],ee=b(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,le+H,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):(j.toArray(F.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,P,N,W){const k=D.value,O=P+"_"+N;if(W[O]===void 0)return typeof k=="number"||typeof k=="boolean"?W[O]=k:W[O]=k.clone(),!0;{const de=W[O];if(typeof k=="number"||typeof k=="boolean"){if(de!==k)return W[O]=k,!0}else if(de.equals(k)===!1)return de.copy(k),!0}return!1}function w(D){const P=D.uniforms;let N=0;const W=16;for(let O=0,de=P.length;O<de;O++){const me=Array.isArray(P[O])?P[O]:[P[O]];for(let T=0,F=me.length;T<F;T++){const le=me[T],fe=Array.isArray(le.value)?le.value:[le.value];for(let H=0,ne=fe.length;H<ne;H++){const j=fe[H],ee=b(j),z=N%W;z!==0&&W-z<ee.boundary&&(N+=W-z),le.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=N,N+=ee.storage}}}const k=N%W;return k>0&&(N+=W-k),D.__size=N,D.__cache={},this}function b(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function _(D){const P=D.target;P.removeEventListener("dispose",_);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function y(){for(const D in a)r.deleteBuffer(a[D]);d=[],a={},l={}}return{bind:h,update:p,dispose:y}}class Wg{constructor(e={}){const{canvas:t=sx(),context:s=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=d;const M=new Uint32Array(4),w=new Int32Array(4);let b=null,_=null;const y=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=Tr,this.toneMappingExposure=1;const P=this;let N=!1,W=0,k=0,O=null,de=-1,me=null;const T=new on,F=new on;let le=null;const fe=new je(0);let H=0,ne=t.width,j=t.height,ee=1,z=null,$=null;const X=new on(0,0,ne,j),L=new on(0,0,ne,j);let V=!1;const ye=new Fg;let q=!1,ce=!1,he=null;const be=new $t,ue=new wt,ae=new K,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return O===null?ee:1}let Y=s;function mt(C,Z){for(let se=0;se<C.length;se++){const oe=C[se],re=t.getContext(oe,Z);if(re!==null)return re}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bd}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),Y===null){const Z=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&Z.shift(),Y=mt(Z,C),Y===null)throw mt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Fe,qe,Ne,tt,$e,R,A,te,Se,_e,Me,Ve,Re,Oe,Qe,at,ve,gt,ft,it,Ye,Be,st,_t;function Tt(){Fe=new yM(Y),qe=new hM(Y,Fe,e),Fe.init(qe),Be=new sw(Y,Fe,qe),Ne=new iw(Y,Fe,qe),tt=new EM(Y),$e=new VE,R=new rw(Y,Fe,Ne,$e,qe,Be,tt),A=new mM(P),te=new xM(P),Se=new Px(Y,qe),st=new dM(Y,Fe,Se,qe),_e=new SM(Y,Se,tt,st),Me=new AM(Y,_e,Se,tt),ft=new bM(Y,qe,R),at=new pM($e),Ve=new GE(P,A,te,Fe,qe,st,at),Re=new fw(P,$e),Oe=new jE,Qe=new QE(Fe,qe),gt=new uM(P,A,te,Ne,Me,S,h),ve=new nw(P,Me,qe),_t=new hw(Y,tt,qe,Ne),it=new fM(Y,Fe,tt,qe),Ye=new MM(Y,Fe,tt,qe),tt.programs=Ve.programs,P.capabilities=qe,P.extensions=Fe,P.properties=$e,P.renderLists=Oe,P.shadowMap=ve,P.state=Ne,P.info=tt}Tt();const ct=new dw(P,Y);this.xr=ct,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=Fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(ne,j,!1))},this.getSize=function(C){return C.set(ne,j)},this.setSize=function(C,Z,se=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,j=Z,t.width=Math.floor(C*ee),t.height=Math.floor(Z*ee),se===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(ne*ee,j*ee).floor()},this.setDrawingBufferSize=function(C,Z,se){ne=C,j=Z,ee=se,t.width=Math.floor(C*se),t.height=Math.floor(Z*se),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,Z,se,oe){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,Z,se,oe),Ne.viewport(T.copy(X).multiplyScalar(ee).floor())},this.getScissor=function(C){return C.copy(L)},this.setScissor=function(C,Z,se,oe){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,Z,se,oe),Ne.scissor(F.copy(L).multiplyScalar(ee).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){Ne.setScissorTest(V=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(C=!0,Z=!0,se=!0){let oe=0;if(C){let re=!1;if(O!==null){const Pe=O.texture.format;re=Pe===xg||Pe===_g||Pe===vg}if(re){const Pe=O.texture.type,Xe=Pe===br||Pe===Er||Pe===Hd||Pe===Jr||Pe===mg||Pe===gg,et=gt.getClearColor(),De=gt.getClearAlpha(),lt=et.r,rt=et.g,ot=et.b;Xe?(M[0]=lt,M[1]=rt,M[2]=ot,M[3]=De,Y.clearBufferuiv(Y.COLOR,0,M)):(w[0]=lt,w[1]=rt,w[2]=ot,w[3]=De,Y.clearBufferiv(Y.COLOR,0,w))}else oe|=Y.COLOR_BUFFER_BIT}Z&&(oe|=Y.DEPTH_BUFFER_BIT),se&&(oe|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Oe.dispose(),Qe.dispose(),$e.dispose(),A.dispose(),te.dispose(),Me.dispose(),st.dispose(),_t.dispose(),Ve.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",vn),ct.removeEventListener("sessionend",St),he&&(he.dispose(),he=null),Xt.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=tt.autoReset,Z=ve.enabled,se=ve.autoUpdate,oe=ve.needsUpdate,re=ve.type;Tt(),tt.autoReset=C,ve.enabled=Z,ve.autoUpdate=se,ve.needsUpdate=oe,ve.type=re}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Te(C){const Z=C.target;Z.removeEventListener("dispose",Te),Ge(Z)}function Ge(C){Ke(C),$e.remove(C)}function Ke(C){const Z=$e.get(C).programs;Z!==void 0&&(Z.forEach(function(se){Ve.releaseProgram(se)}),C.isShaderMaterial&&Ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,se,oe,re,Pe){Z===null&&(Z=Ce);const Xe=re.isMesh&&re.matrixWorld.determinant()<0,et=Zl(C,Z,se,oe,re);Ne.setMaterial(oe,Xe);let De=se.index,lt=1;if(oe.wireframe===!0){if(De=_e.getWireframeAttribute(se),De===void 0)return;lt=2}const rt=se.drawRange,ot=se.attributes.position;let Ct=rt.start*lt,_n=(rt.start+rt.count)*lt;Pe!==null&&(Ct=Math.max(Ct,Pe.start*lt),_n=Math.min(_n,(Pe.start+Pe.count)*lt)),De!==null?(Ct=Math.max(Ct,0),_n=Math.min(_n,De.count)):ot!=null&&(Ct=Math.max(Ct,0),_n=Math.min(_n,ot.count));const Gt=_n-Ct;if(Gt<0||Gt===1/0)return;st.setup(re,oe,et,se,De);let wn,vt=it;if(De!==null&&(wn=Se.get(De),vt=Ye,vt.setIndex(wn)),re.isMesh)oe.wireframe===!0?(Ne.setLineWidth(oe.wireframeLinewidth*ze()),vt.setMode(Y.LINES)):vt.setMode(Y.TRIANGLES);else if(re.isLine){let ut=oe.linewidth;ut===void 0&&(ut=1),Ne.setLineWidth(ut*ze()),re.isLineSegments?vt.setMode(Y.LINES):re.isLineLoop?vt.setMode(Y.LINE_LOOP):vt.setMode(Y.LINE_STRIP)}else re.isPoints?vt.setMode(Y.POINTS):re.isSprite&&vt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)vt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)vt.renderInstances(Ct,Gt,re.count);else if(se.isInstancedBufferGeometry){const ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,xn=Math.min(se.instanceCount,ut);vt.renderInstances(Ct,Gt,xn)}else vt.render(Ct,Gt)};function yt(C,Z,se){C.transparent===!0&&C.side===Wi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,$i(C,Z,se),C.side=Ar,C.needsUpdate=!0,$i(C,Z,se),C.side=Wi):$i(C,Z,se)}this.compile=function(C,Z,se=null){se===null&&(se=C),_=Qe.get(se),_.init(),D.push(_),se.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(_.pushLight(re),re.castShadow&&_.pushShadow(re))}),C!==se&&C.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(_.pushLight(re),re.castShadow&&_.pushShadow(re))}),_.setupLights(P._useLegacyLights);const oe=new Set;return C.traverse(function(re){const Pe=re.material;if(Pe)if(Array.isArray(Pe))for(let Xe=0;Xe<Pe.length;Xe++){const et=Pe[Xe];yt(et,se,re),oe.add(et)}else yt(Pe,se,re),oe.add(Pe)}),D.pop(),_=null,oe},this.compileAsync=function(C,Z,se=null){const oe=this.compile(C,Z,se);return new Promise(re=>{function Pe(){if(oe.forEach(function(Xe){$e.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){re(C);return}setTimeout(Pe,10)}Fe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let bt=null;function Ht(C){bt&&bt(C)}function vn(){Xt.stop()}function St(){Xt.start()}const Xt=new Og;Xt.setAnimationLoop(Ht),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(C){bt=C,ct.setAnimationLoop(C),C===null?Xt.stop():Xt.start()},ct.addEventListener("sessionstart",vn),ct.addEventListener("sessionend",St),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,Z,O),_=Qe.get(C,D.length),_.init(),D.push(_),be.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ye.setFromProjectionMatrix(be),ce=this.localClippingEnabled,q=at.init(this.clippingPlanes,ce),b=Oe.get(C,y.length),b.init(),y.push(b),an(C,Z,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(z,$),this.info.render.frame++,q===!0&&at.beginShadows();const se=_.state.shadowsArray;if(ve.render(se,C,Z),q===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&gt.render(b,C),_.setupLights(P._useLegacyLights),Z.isArrayCamera){const oe=Z.cameras;for(let re=0,Pe=oe.length;re<Pe;re++){const Xe=oe[re];na(b,C,Xe,Xe.viewport)}}else na(b,C,Z);O!==null&&(R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(P,C,Z),st.resetDefaultState(),de=-1,me=null,D.pop(),D.length>0?_=D[D.length-1]:_=null,y.pop(),y.length>0?b=y[y.length-1]:b=null};function an(C,Z,se,oe){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){oe&&ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Xe=Me.update(C),et=C.material;et.visible&&b.push(C,Xe,et,se,ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const Xe=Me.update(C),et=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ae.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ae.copy(Xe.boundingSphere.center)),ae.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(et)){const De=Xe.groups;for(let lt=0,rt=De.length;lt<rt;lt++){const ot=De[lt],Ct=et[ot.materialIndex];Ct&&Ct.visible&&b.push(C,Xe,Ct,se,ae.z,ot)}}else et.visible&&b.push(C,Xe,et,se,ae.z,null)}}const Pe=C.children;for(let Xe=0,et=Pe.length;Xe<et;Xe++)an(Pe[Xe],Z,se,oe)}function na(C,Z,se,oe){const re=C.opaque,Pe=C.transmissive,Xe=C.transparent;_.setupLightsView(se),q===!0&&at.setGlobalState(P.clippingPlanes,se),Pe.length>0&&Rr(re,Pe,Z,se),oe&&Ne.viewport(T.copy(oe)),re.length>0&&Ai(re,Z,se),Pe.length>0&&Ai(Pe,Z,se),Xe.length>0&&Ai(Xe,Z,se),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Rr(C,Z,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Pe=qe.isWebGL2;he===null&&(he=new ns(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Qo:br,minFilter:Qr,samples:Pe?4:0})),P.getDrawingBufferSize(ue),Pe?he.setSize(ue.x,ue.y):he.setSize(Cd(ue.x),Cd(ue.y));const Xe=P.getRenderTarget();P.setRenderTarget(he),P.getClearColor(fe),H=P.getClearAlpha(),H<1&&P.setClearColor(16777215,.5),P.clear();const et=P.toneMapping;P.toneMapping=Tr,Ai(C,se,oe),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let De=!1;for(let lt=0,rt=Z.length;lt<rt;lt++){const ot=Z[lt],Ct=ot.object,_n=ot.geometry,Gt=ot.material,wn=ot.group;if(Gt.side===Wi&&Ct.layers.test(oe.layers)){const vt=Gt.side;Gt.side=Fn,Gt.needsUpdate=!0,Cr(Ct,se,oe,_n,Gt,wn),Gt.side=vt,Gt.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),P.setRenderTarget(Xe),P.setClearColor(fe,H),P.toneMapping=et}function Ai(C,Z,se){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,Pe=C.length;re<Pe;re++){const Xe=C[re],et=Xe.object,De=Xe.geometry,lt=oe===null?Xe.material:oe,rt=Xe.group;et.layers.test(se.layers)&&Cr(et,Z,se,De,lt,rt)}}function Cr(C,Z,se,oe,re,Pe){C.onBeforeRender(P,Z,se,oe,re,Pe),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(P,Z,se,oe,C,Pe),re.transparent===!0&&re.side===Wi&&re.forceSinglePass===!1?(re.side=Fn,re.needsUpdate=!0,P.renderBufferDirect(se,Z,oe,re,C,Pe),re.side=Ar,re.needsUpdate=!0,P.renderBufferDirect(se,Z,oe,re,C,Pe),re.side=Wi):P.renderBufferDirect(se,Z,oe,re,C,Pe),C.onAfterRender(P,Z,se,oe,re,Pe)}function $i(C,Z,se){Z.isScene!==!0&&(Z=Ce);const oe=$e.get(C),re=_.state.lights,Pe=_.state.shadowsArray,Xe=re.state.version,et=Ve.getParameters(C,re.state,Pe,Z,se),De=Ve.getProgramCacheKey(et);let lt=oe.programs;oe.environment=C.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(C.isMeshStandardMaterial?te:A).get(C.envMap||oe.environment),lt===void 0&&(C.addEventListener("dispose",Te),lt=new Map,oe.programs=lt);let rt=lt.get(De);if(rt!==void 0){if(oe.currentProgram===rt&&oe.lightsStateVersion===Xe)return ra(C,et),rt}else et.uniforms=Ve.getUniforms(C),C.onBuild(se,et,P),C.onBeforeCompile(et,P),rt=Ve.acquireProgram(et,De),lt.set(De,rt),oe.uniforms=et.uniforms;const ot=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ot.clippingPlanes=at.uniform),ra(C,et),oe.needsLights=sa(C),oe.lightsStateVersion=Xe,oe.needsLights&&(ot.ambientLightColor.value=re.state.ambient,ot.lightProbe.value=re.state.probe,ot.directionalLights.value=re.state.directional,ot.directionalLightShadows.value=re.state.directionalShadow,ot.spotLights.value=re.state.spot,ot.spotLightShadows.value=re.state.spotShadow,ot.rectAreaLights.value=re.state.rectArea,ot.ltc_1.value=re.state.rectAreaLTC1,ot.ltc_2.value=re.state.rectAreaLTC2,ot.pointLights.value=re.state.point,ot.pointLightShadows.value=re.state.pointShadow,ot.hemisphereLights.value=re.state.hemi,ot.directionalShadowMap.value=re.state.directionalShadowMap,ot.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ot.spotShadowMap.value=re.state.spotShadowMap,ot.spotLightMatrix.value=re.state.spotLightMatrix,ot.spotLightMap.value=re.state.spotLightMap,ot.pointShadowMap.value=re.state.pointShadowMap,ot.pointShadowMatrix.value=re.state.pointShadowMatrix),oe.currentProgram=rt,oe.uniformsList=null,rt}function ia(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=kl.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function ra(C,Z){const se=$e.get(C);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Zl(C,Z,se,oe,re){Z.isScene!==!0&&(Z=Ce),R.resetTextureUnits();const Pe=Z.fog,Xe=oe.isMeshStandardMaterial?Z.environment:null,et=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Yi,De=(oe.isMeshStandardMaterial?te:A).get(oe.envMap||Xe),lt=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,rt=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ot=!!se.morphAttributes.position,Ct=!!se.morphAttributes.normal,_n=!!se.morphAttributes.color;let Gt=Tr;oe.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Gt=P.toneMapping);const wn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,vt=wn!==void 0?wn.length:0,ut=$e.get(oe),xn=_.state.lights;if(q===!0&&(ce===!0||C!==me)){const Tn=C===me&&oe.id===de;at.setState(oe,C,Tn)}let Ut=!1;oe.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==xn.state.version||ut.outputColorSpace!==et||re.isBatchedMesh&&ut.batching===!1||!re.isBatchedMesh&&ut.batching===!0||re.isInstancedMesh&&ut.instancing===!1||!re.isInstancedMesh&&ut.instancing===!0||re.isSkinnedMesh&&ut.skinning===!1||!re.isSkinnedMesh&&ut.skinning===!0||re.isInstancedMesh&&ut.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ut.instancingColor===!1&&re.instanceColor!==null||ut.envMap!==De||oe.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==at.numPlanes||ut.numIntersection!==at.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==rt||ut.morphTargets!==ot||ut.morphNormals!==Ct||ut.morphColors!==_n||ut.toneMapping!==Gt||qe.isWebGL2===!0&&ut.morphTargetsCount!==vt)&&(Ut=!0):(Ut=!0,ut.__version=oe.version);let Ci=ut.currentProgram;Ut===!0&&(Ci=$i(oe,Z,re));let oa=!1,pi=!1,Ki=!1;const zt=Ci.getUniforms(),jn=ut.uniforms;if(Ne.useProgram(Ci.program)&&(oa=!0,pi=!0,Ki=!0),oe.id!==de&&(de=oe.id,pi=!0),oa||me!==C){zt.setValue(Y,"projectionMatrix",C.projectionMatrix),zt.setValue(Y,"viewMatrix",C.matrixWorldInverse);const Tn=zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(Y,ae.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&zt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),me!==C&&(me=C,pi=!0,Ki=!0)}if(re.isSkinnedMesh){zt.setOptional(Y,re,"bindMatrix"),zt.setOptional(Y,re,"bindMatrixInverse");const Tn=re.skeleton;Tn&&(qe.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),zt.setValue(Y,"boneTexture",Tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(zt.setOptional(Y,re,"batchingTexture"),zt.setValue(Y,"batchingTexture",re._matricesTexture,R));const so=se.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0&&qe.isWebGL2===!0)&&ft.update(re,se,Ci),(pi||ut.receiveShadow!==re.receiveShadow)&&(ut.receiveShadow=re.receiveShadow,zt.setValue(Y,"receiveShadow",re.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(jn.envMap.value=De,jn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),pi&&(zt.setValue(Y,"toneMappingExposure",P.toneMappingExposure),ut.needsLights&&Ri(jn,Ki),Pe&&oe.fog===!0&&Re.refreshFogUniforms(jn,Pe),Re.refreshMaterialUniforms(jn,oe,ee,j,he),kl.upload(Y,ia(ut),jn,R)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(kl.upload(Y,ia(ut),jn,R),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(Y,"center",re.center),zt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),zt.setValue(Y,"normalMatrix",re.normalMatrix),zt.setValue(Y,"modelMatrix",re.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Tn=oe.uniformsGroups;for(let Pr=0,aa=Tn.length;Pr<aa;Pr++)if(qe.isWebGL2){const is=Tn[Pr];_t.update(is,Ci),_t.bind(is,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Ri(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function sa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,Z,se){$e.get(C.texture).__webglTexture=Z,$e.get(C.depthTexture).__webglTexture=se;const oe=$e.get(C);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const se=$e.get(C);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,se=0){O=C,W=Z,k=se;let oe=!0,re=null,Pe=!1,Xe=!1;if(C){const De=$e.get(C);De.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(Y.FRAMEBUFFER,null),oe=!1):De.__webglFramebuffer===void 0?R.setupRenderTarget(C):De.__hasExternalTextures&&R.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Xe=!0);const rt=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[Z])?re=rt[Z][se]:re=rt[Z],Pe=!0):qe.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?re=$e.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?re=rt[se]:re=rt,T.copy(C.viewport),F.copy(C.scissor),le=C.scissorTest}else T.copy(X).multiplyScalar(ee).floor(),F.copy(L).multiplyScalar(ee).floor(),le=V;if(Ne.bindFramebuffer(Y.FRAMEBUFFER,re)&&qe.drawBuffers&&oe&&Ne.drawBuffers(C,re),Ne.viewport(T),Ne.scissor(F),Ne.setScissorTest(le),Pe){const De=$e.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,De.__webglTexture,se)}else if(Xe){const De=$e.get(C.texture),lt=Z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,De.__webglTexture,se||0,lt)}de=-1},this.readRenderTargetPixels=function(C,Z,se,oe,re,Pe,Xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(et=et[Xe]),et){Ne.bindFramebuffer(Y.FRAMEBUFFER,et);try{const De=C.texture,lt=De.format,rt=De.type;if(lt!==di&&Be.convert(lt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=rt===Qo&&(Fe.has("EXT_color_buffer_half_float")||qe.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(rt!==br&&Be.convert(rt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===ji&&(qe.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-oe&&se>=0&&se<=C.height-re&&Y.readPixels(Z,se,oe,re,Be.convert(lt),Be.convert(rt),Pe)}finally{const De=O!==null?$e.get(O).__webglFramebuffer:null;Ne.bindFramebuffer(Y.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(C,Z,se=0){const oe=Math.pow(2,-se),re=Math.floor(Z.image.width*oe),Pe=Math.floor(Z.image.height*oe);R.setTexture2D(Z,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,C.x,C.y,re,Pe),Ne.unbindTexture()},this.copyTextureToTexture=function(C,Z,se,oe=0){const re=Z.image.width,Pe=Z.image.height,Xe=Be.convert(se.format),et=Be.convert(se.type);R.setTexture2D(se,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,se.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,oe,C.x,C.y,re,Pe,Xe,et,Z.image.data):Z.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,oe,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Xe,Z.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,oe,C.x,C.y,Xe,et,Z.image),oe===0&&se.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,se,oe,re=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,Xe=C.max.y-C.min.y+1,et=C.max.z-C.min.z+1,De=Be.convert(oe.format),lt=Be.convert(oe.type);let rt;if(oe.isData3DTexture)R.setTexture3D(oe,0),rt=Y.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)R.setTexture2DArray(oe,0),rt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,oe.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,oe.unpackAlignment);const ot=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ct=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),_n=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Gt=Y.getParameter(Y.UNPACK_SKIP_ROWS),wn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),vt=se.isCompressedTexture?se.mipmaps[re]:se.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,vt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,vt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,C.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,C.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?Y.texSubImage3D(rt,re,Z.x,Z.y,Z.z,Pe,Xe,et,De,lt,vt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(rt,re,Z.x,Z.y,Z.z,Pe,Xe,et,De,vt.data)):Y.texSubImage3D(rt,re,Z.x,Z.y,Z.z,Pe,Xe,et,De,lt,vt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ot),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ct),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,_n),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Gt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,wn),re===0&&oe.generateMipmaps&&Y.generateMipmap(rt),Ne.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){W=0,k=0,O=null,Ne.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===ql?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===sn?ts:Sg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?sn:Yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pw extends Wg{}pw.prototype.isWebGL1Renderer=!0;class Wd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Wd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mw extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jg extends ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $m=new $t,Ld=new Ag,Ll=new Yl,Dl=new K;class Dd extends kn{constructor(e=new hi,t=new jg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ll.copy(s.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;$m.copy(a).invert(),Ld.copy(e.ray).applyMatrix4($m);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=s.index,x=s.attributes.position;if(p!==null){const S=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let w=S,b=M;w<b;w++){const _=p.getX(w);Dl.fromBufferAttribute(x,_),Km(Dl,_,h,a,e,t,this)}}else{const S=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let w=S,b=M;w<b;w++)Dl.fromBufferAttribute(x,w),Km(Dl,w,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Km(r,e,t,s,a,l,d){const u=Ld.distanceSqToPoint(r);if(u<t){const h=new K;Ld.closestPointToPoint(r,h),h.applyMatrix4(s);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,object:d})}}class gw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let d=1;d<=e;d++)s=this.getPoint(d/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let d;t?d=t:d=e*s[l-1];let u=0,h=l-1,p;for(;u<=h;)if(a=Math.floor(u+(h-u)/2),p=s[a]-d,p<0)u=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,s[a]===d)return a/(l-1);const v=s[a],S=s[a+1]-v,M=(d-v)/S;return(a+M)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const d=this.getPoint(a),u=this.getPoint(l),h=t||(d.isVector2?new wt:new K);return h.copy(u).sub(d).normalize(),h}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new K,a=[],l=[],d=[],u=new K,h=new $t;for(let M=0;M<=e;M++){const w=M/e;a[M]=this.getTangentAt(w,new K)}l[0]=new K,d[0]=new K;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),x=Math.abs(a[0].y),S=Math.abs(a[0].z);v<=p&&(p=v,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),S<=p&&s.set(0,0,1),u.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],u),d[0].crossVectors(a[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),d[M]=d[M-1].clone(),u.crossVectors(a[M-1],a[M]),u.length()>Number.EPSILON){u.normalize();const w=Math.acos(gn(a[M-1].dot(a[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(u,w))}d[M].crossVectors(a[M],l[M])}if(t===!0){let M=Math.acos(gn(l[0].dot(l[e]),-1,1));M/=e,a[0].dot(u.crossVectors(l[0],l[e]))>0&&(M=-M);for(let w=1;w<=e;w++)l[w].applyMatrix4(h.makeRotationAxis(a[w],M*w)),d[w].crossVectors(a[w],l[w])}return{tangents:a,normals:l,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function jd(){let r=0,e=0,t=0,s=0;function a(l,d,u,h){r=l,e=u,t=-3*l+3*d-2*u-h,s=2*l-2*d+u+h}return{initCatmullRom:function(l,d,u,h,p){a(d,u,p*(u-l),p*(h-d))},initNonuniformCatmullRom:function(l,d,u,h,p,v,x){let S=(d-l)/p-(u-l)/(p+v)+(u-d)/v,M=(u-d)/v-(h-d)/(v+x)+(h-u)/x;S*=v,M*=v,a(d,u,S,M)},calc:function(l){const d=l*l,u=d*l;return r+e*l+t*d+s*u}}}const Nl=new K,hd=new jd,pd=new jd,md=new jd;class Nd extends gw{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new K){const s=t,a=this.points,l=a.length,d=(l-(this.closed?0:1))*e;let u=Math.floor(d),h=d-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:h===0&&u===l-1&&(u=l-2,h=1);let p,v;this.closed||u>0?p=a[(u-1)%l]:(Nl.subVectors(a[0],a[1]).add(a[0]),p=Nl);const x=a[u%l],S=a[(u+1)%l];if(this.closed||u+2<l?v=a[(u+2)%l]:(Nl.subVectors(a[l-1],a[l-2]).add(a[l-1]),v=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let w=Math.pow(p.distanceToSquared(x),M),b=Math.pow(x.distanceToSquared(S),M),_=Math.pow(S.distanceToSquared(v),M);b<1e-4&&(b=1),w<1e-4&&(w=b),_<1e-4&&(_=b),hd.initNonuniformCatmullRom(p.x,x.x,S.x,v.x,w,b,_),pd.initNonuniformCatmullRom(p.y,x.y,S.y,v.y,w,b,_),md.initNonuniformCatmullRom(p.z,x.z,S.z,v.z,w,b,_)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(p.x,x.x,S.x,v.x,this.tension),pd.initCatmullRom(p.y,x.y,S.y,v.y,this.tension),md.initCatmullRom(p.z,x.z,S.z,v.z,this.tension));return s.set(hd.calc(h),pd.calc(h),md.calc(h)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new K().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class vw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);const yi={bg:new je("#04060a"),fog:new je("#04060a"),soil:new je("#241813"),soilDeep:new je("#0c0806"),scan:new je("#37e6d0"),node:new je("#7bffd6"),seed:new je("#8a5a32"),bark:new je("#5b4327"),barkTip:new je("#8fe6b0"),leaf:new je("#2f9e46"),leafGloss:new je("#7fffa8"),blossom:new je("#fff3c4"),appleUnripe:new je("#7cae3a"),appleRipe:new je("#cf2130"),appleBlush:new je("#f2544a")},Ks=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Vs=(r,e,t)=>r+(e-r)*t;function pn(r,e,t){const s=Ks((r-e)/(t-e));return s*s*(3-2*s)}function _w(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function xw(r=7,e={}){const{trunkHeight:t=5.2,branchLenMul:s=1,tiltMul:a=1,leafCountMul:l=1,leafScaleMul:d=1}=e,u=_w(r),h=(_,y)=>_+u()*(y-_),p=[],v=[],x=[];let S=1e-4;function M(_,y,D,P,N,W,k){const de=[],me=new K(0,1,0),T=new K(h(-1,1),0,h(-1,1)).normalize(),F=W===0?0:h(.08,.22);_.clone(),y.clone().normalize().multiplyScalar(D/7);for(let z=0;z<=7;z++){const $=z/7,X=_.clone().addScaledVector(y.clone().normalize(),D*$);X.addScaledVector(T,Math.sin($*Math.PI)*D*.06*h(.5,1.2)),X.y-=F*D*$*$,de.push(X)}const le=new Nd(de),fe=k+D,H={curve:le,r0:P,r1:N,depth:W,startDist:k,endDist:fe,gStart:0,gEnd:0};p.push(H),S=Math.max(S,fe);const ne=de[de.length-1],j=ne.clone().sub(de[de.length-2]).normalize();if(W>=2){const z=Math.floor(h(3,7)*l);for(let $=0;$<z;$++){const X=h(.35,1),L=le.getPoint(X),V=k+D*X,q=new K(L.x,0,L.z).normalize().clone().lerp(me,.35).addScaledVector(new K(h(-1,1),h(-.3,1),h(-1,1)),.5).normalize();v.push({pos:L,normal:q,scale:h(.7,1.25)*d,spin:h(0,Math.PI*2),growth:V})}}if(W>=2&&u()<.55){const z=ne.clone();z.y-=N*2+.15,x.push({pos:z,scale:h(.8,1.15),growth:fe,anchor:ne.clone()})}if(W<4){const z=W===0?4:W===1?3:2;for(let $=0;$<z;$++){const X=W===0?h(.82,1):h(.45,.95),L=le.getPoint(X),V=k+D*X,ye=$/z*Math.PI*2+h(-.5,.5),q=(W===0?h(.5,.9):h(.6,1.15))*a,ce=new K(Math.cos(ye)*Math.sin(q),Math.cos(q)+.35,Math.sin(ye)*Math.sin(q)).normalize();ce.lerp(j,.25).normalize();const he=D*h(.55,.75)*s,be=N*h(.7,.95),ue=be*.55;M(L,ce,he,be,ue,W+1,V)}}}M(new K(0,0,0),new K(.05,1,.02),t,.55,.34,0,0);for(const _ of p)_.gStart=_.startDist/S,_.gEnd=_.endDist/S;for(const _ of v)_.growth/=S;for(const _ of x)_.growth/=S;let w=0,b=-1/0;return x.forEach((_,y)=>{const D=_.pos.y+_.pos.z*.4-Math.abs(_.pos.x)*.2;D>b&&(b=D,w=y)}),{branches:p,leaves:v,fruits:x,fallIndex:w,maxDist:S}}function yw(r={}){return new bi({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ko,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:r.size??2},uDrift:{value:r.drift??.14},uOpacity:{value:r.opacity??1},uFall:{value:1},uFallHeight:{value:r.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new je("#7cae3a")},uRipe:{value:new je("#cf2130")},uBlush:{value:new je("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
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
    `})}const Il=new K,Zm=new io,Sw=new K(0,1,0);class Mr{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,t,s,a,l,d){this.pos.push(e,t,s),this.growth.push(a),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(d)}addCurve(e,t,s,a,l,d,u,h){for(let p=0;p<s;p++){const v=Math.random(),x=e.getPoint(v),S=t*(.3+Math.pow(Math.random(),.5))*1.1,M=Math.random()*Math.PI*2,w=(Math.random()-.5)*t;x.x+=Math.cos(M)*S,x.z+=Math.sin(M)*S,x.y+=w;const b=a+(l-a)*v;this.push(x.x,x.y,x.z,b,d,u+Math.random()*(h-u))}}addLeafPuff(e,t,s,a,l,d,u,h,p){Zm.setFromUnitVectors(Sw,t);for(let v=0;v<l;v++){const x=Math.pow(Math.random(),.75),S=Math.sin(Math.max(0,x)*Math.PI),M=(Math.random()*2-1)*S*a,w=x*s,b=(Math.random()*2-1)*S*a*.4;Il.set(M,w,b).applyQuaternion(Zm).add(e),this.push(Il.x,Il.y,Il.z,d,u,h+Math.random()*(p-h))}}addBlob(e,t,s,a,l,d,u,h,p){for(let v=0;v<l;v++){const x=Math.random(),S=Math.random()*Math.PI*2,M=Math.acos(2*Math.random()-1),w=Math.pow(x,.6),b=e.x+w*Math.sin(M)*Math.cos(S)*t,_=e.y+w*Math.cos(M)*s,y=e.z+w*Math.sin(M)*Math.sin(S)*a;this.push(b,_,y,d,u,h+Math.random()*(p-h))}}build(e){const t=new hi;t.setAttribute("position",new Un(this.pos,3)),t.setAttribute("aGrowth",new Un(this.growth,1)),t.setAttribute("aColor",new Un(this.color,3)),t.setAttribute("aRand",new Un(this.rand,1)),t.setAttribute("aSize",new Un(this.size,1));const s=new Dd(t,e);return s.frustumCulled=!1,s}}const Si=(r,e,t)=>new K(r,e,t);class Mw{constructor(e){this.scene=e,this.tree=xw(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Yo,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const t=yw(e);return this.mats.push(t),t}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new Wd(new je("#04060a"),.013);const t=1300,s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*46,s[l*3+1]=Math.random()*26-4,s[l*3+2]=(Math.random()-.5)*46;const a=new hi;a.setAttribute("position",new fi(s,3)),this.ambient=new Dd(a,new jg({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:Ko})),e.add(this.ambient)}buildWaveField(){const s=[],a=[];for(let d=0;d<176;d++)for(let u=0;u<176;u++){const h=-15+d/175*2*15,p=-15+u/175*2*15;Math.hypot(h,p)>15||(s.push(h,0,p),a.push(Math.random()))}const l=new hi;l.setAttribute("position",new Un(s,3)),l.setAttribute("aRand",new Un(a,1)),this.waveMat=new bi({transparent:!0,depthWrite:!1,blending:Ko,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new je("#0b3f7a")},uHigh:{value:new je("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
        uniform float uTime, uAmp, uRipple, uRippleAmp, uSize;
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
          // single expanding ripple ring
          float ringR = uRipple * 14.0;
          float ring = exp(-pow((r - ringR) * 1.1, 2.0)) * uRippleAmp * (1.0 - uRipple);
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
      `}),this.wave=new Dd(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new Mr,t=new je("#5c3418"),s=.45;for(let a=0;a<3200;a++){const l=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),u=.7+.3*Math.pow(Math.random(),.85);let h=Math.cos(l)*Math.sin(d)*u,p=Math.cos(d)*u,v=Math.sin(l)*Math.sin(d)*u;const x=(p+1)/2,S=1-.72*Math.pow(1-x,1.8);h*=.44*S,v*=.34*S,p*=.62,e.push(h,s+p,v,0,t,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new Mr,t=(x,S)=>x+Math.random()*(S-x),s=[];let a=.001;const l=(x,S,M,w,b,_)=>{const D=[],P=new K(t(-1,1),0,t(-1,1)).normalize(),N=S.clone().normalize();for(let de=0;de<=6;de++){const me=de/6,T=x.clone().addScaledVector(N,M*me);T.y-=Math.pow(me,1.3)*M*.22,T.addScaledVector(P,Math.sin(me*Math.PI)*M*.13*t(.4,1.1)),D.push(T)}const W=new Nd(D),k=w*.14,O=b+M;if(s.push({curve:W,r0:w,r1:k,startDist:b,endDist:O,depth:_}),a=Math.max(a,O),_<4){const de=_===0||Math.random()<.45?3:2;for(let me=0;me<de;me++){const T=t(.35,.94),F=W.getPoint(T),le=b+M*T,fe=t(0,Math.PI*2),H=t(.55,1.15),ne=new K(Math.cos(fe)*Math.sin(H),-Math.abs(Math.cos(H))-.3,Math.sin(fe)*Math.sin(H)).normalize(),j=M*t(.5,.72),ee=Vs(w,k,T)*t(.72,.95);l(F,ne,j,ee,le,_+1)}}};l(Si(0,-.4,0),Si(.05,-1,.03),2.6,.16,0,0);const d=yi.seed.clone(),u=new je("#d9a066"),h=new je;for(const x of s){const S=x.startDist/a,M=x.endDist/a,w=x.curve.getLength(),b=Math.max(50,Math.floor(w*460));for(let _=0;_<b;_++){const y=Math.random(),D=x.curve.getPoint(y),P=Vs(x.r0,x.r1,y),N=P*Math.pow(Math.random(),.6),W=Math.random()*Math.PI*2;D.x+=Math.cos(W)*N,D.z+=Math.sin(W)*N,D.y+=(Math.random()-.5)*P*.4,h.copy(d).lerp(u,y*.5);const k=Vs(1.9,.45,y)*(x.depth>=2?.8:1);e.push(D.x,D.y,D.z,Vs(S,M,y),h,k)}}const p=s[0],v=new je("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const x of this.nodeAlong){const S=p.curve.getPoint(x),M=(p.startDist+x*(p.endDist-p.startDist))/a;e.addBlob(S,.15,.15,.15,140,M,v,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new Mr,t=new je("#6fce63"),s=yi.leafGloss.clone(),a=new Nd([Si(0,0,0),Si(.04,.5,.02),Si(-.03,1,-.02),Si(0,1.5,0)]);e.addCurve(a,.05,1100,0,.65,t,.8,1.8);const l=Si(0,1.5,0),d=Si(-.9,.7,.15).normalize(),u=Si(.9,.7,-.15).normalize();e.addLeafPuff(l,d,.85,.4,900,.72,s,.8,2),e.addLeafPuff(l,u,.85,.4,900,.78,s,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new Mr,t=new je("#8a6636"),s=new je("#5e441f"),a=new je;for(const l of this.tree.branches){const d=l.curve.getLength(),u=Math.max(l.r1,(l.r0+l.r1)*.5),h=l.depth===0?900:230,p=Math.floor(d*h)+40,v=l.depth===0?.15:.55;a.copy(t).lerp(s,v+Math.random()*.3),e.addCurve(l.curve,u,p,l.gStart,l.gEnd,a,1,2.6)}this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new Mr,t=yi.leaf.clone(),s=yi.leafGloss.clone(),a=new je,l=new K;for(const u of this.tree.leaves){l.add(u.pos),a.copy(t).lerp(s,Math.random()*.5);const h=1.15*u.scale,p=.55*u.scale;e.addLeafPuff(u.pos,u.normal,h,p,70,u.growth,a,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const d=4.6;for(let u=0;u<16e3;u++){const h=new K(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),p=Math.pow(Math.random(),.6)*d,v=l.clone().addScaledVector(h,p);v.y+=(d-p)*.15,a.copy(t).lerp(s,Math.random()*.6);const x=Ks(.55+p/d*.45);e.push(v.x,v.y,v.z,x,a,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new Mr,t=yi.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone(),this.tree.fruits.forEach((s,a)=>{a!==this.fallIndex&&e.addBlob(s.pos,.42*s.scale,.36*s.scale,.42*s.scale,200,s.growth,t,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(yi.appleUnripe),e.uniforms.uRipe.value.copy(yi.appleRipe),e.uniforms.uBlush.value.copy(yi.appleBlush)}buildBlossoms(){const e=new Mr,t=yi.blossom.clone();for(const s of this.tree.fruits)e.addBlob(s.anchor,.16,.16,.16,40,0,t,1.6,3.6);this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new Mr,t=yi.appleRipe.clone();e.addBlob(Si(0,0,0),.44,.38,.44,340,0,t,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,t){for(const w of this.mats)w.uniforms.uTime.value=t;this.waveMat.uniforms.uTime.value=t;const s=pn(e,0,.1);this.seedMat.uniforms.uFall.value=s;const a=pn(e,.1,.28);this.seed.position.y=-a*.8;const l=pn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=Vs(.55,.12,pn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*pn(e,.55,.72);let d=0,u=0;e<.5&&(d=pn(e,.08,.42),u=.7),this.rootMat.uniforms.uReveal.value=pn(e,.2,.4),this.roots.visible=e<.52;const h=pn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=h,this.seedlingMat.uniforms.uOpacity.value=1-pn(e,.56,.66),this.seedling.visible=h>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=pn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=pn(e,.56,.78);const p=pn(e,.72,.8)*(1-pn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=p,this.blossoms.visible=p>.01;const v=pn(e,.72,.86),x=pn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=v,this.fruitMat.uniforms.uRipen.value=x,this.fallMat.uniforms.uRipen.value=x;const S=Ks((e-.88)/(.98-.88)),M=S*S;this.fall.visible=v>.01,this.fall.position.set(this.fallAnchor.x,Vs(this.fallAnchor.y,.3,M),this.fallAnchor.z),this.fall.rotation.z=S*3,e>=.9&&(d=pn(e,.9,1),u=1.8),this.waveMat.uniforms.uRipple.value=d,this.waveMat.uniforms.uRippleAmp.value=u,this.ambient.rotation.y=t*.008}}const Nn=(r,e,t)=>new K(r,e,t),Ul=[{p:0,pos:Nn(0,6.5,21),tgt:Nn(0,1.6,0)},{p:.16,pos:Nn(2.2,5.2,18),tgt:Nn(0,.6,0)},{p:.34,pos:Nn(4.5,-1.2,14),tgt:Nn(0,-2.4,0)},{p:.5,pos:Nn(2.6,2.6,13),tgt:Nn(0,1.2,0)},{p:.72,pos:Nn(-3.2,7.5,27),tgt:Nn(0,7,0)},{p:.86,pos:Nn(6,11.5,23),tgt:Nn(.4,9.5,0)},{p:1,pos:Nn(0,8.5,34),tgt:Nn(0,8,0)}],Ew=r=>r*r*(3-2*r);function ww(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function Tw(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function bw(r){r.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(s=>{Object.values(s).forEach(a=>{a&&a.isTexture&&a.dispose()}),s.dispose()})})}function Aw({sectionRef:r,onStageChange:e,onAnnotationChange:t,onWebGLUnavailable:s}){const a=Ue.useRef(null),l=Ue.useRef(e);l.current=e;const d=Ue.useRef(t);d.current=t;const u=Ue.useRef(s);return u.current=s,Ue.useEffect(()=>{const h=a.current,p=r.current;if(!h||!p)return;const v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let x;try{x=new Wg({canvas:h,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{u.current&&u.current();return}x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(window.innerWidth,window.innerHeight),x.setClearColor(0,0),x.toneMapping=fg,x.toneMappingExposure=1.1;const S=new mw,M=new Jn(50,window.innerWidth/window.innerHeight,.1,400);M.position.set(0,5,12);const w=new Mw(S);let b=!1;const _=new K,y=new K,D=(j,ee)=>{let z=0;for(;z<Ul.length-2&&j>Ul[z+1].p;)z++;const $=Ul[z],X=Ul[z+1],L=Ew(Ks((j-$.p)/(X.p-$.p)));_.lerpVectors($.pos,X.pos,L),y.lerpVectors($.tgt,X.tgt,L),_.x+=Math.sin(ee*.22)*.3,_.y+=Math.cos(ee*.18)*.18,b&&_.sub(y).multiplyScalar(1.28).add(y),M.position.copy(_),M.lookAt(y)},P=()=>{const j=window.innerWidth,ee=window.innerHeight;b=j<821,M.aspect=j/ee,M.clearViewOffset(),x.setSize(j,ee),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),b?M.setViewOffset(j,ee,0,ee*.2,j,ee):M.setViewOffset(j,ee,j*.22,0,j,ee),M.updateProjectionMatrix()};P();const N=()=>{const j=p.getBoundingClientRect(),ee=p.offsetHeight-window.innerHeight,z=Ks(-j.top,0,Math.max(0,ee));return ee>0?Ks(z/ee):0};let W=-1,k=-1;const O=j=>{const ee=ww(j);ee!==W&&(W=ee,l.current&&l.current(ee));const z=Tw(j);z!==k&&(k=z,d.current&&d.current(z))},de=new vw;let me=N(),T=null;const F=()=>{const j=N();me=j,w.update(j,0),D(j,0),O(j),x.render(S,M)},le=()=>{const j=Math.min(de.getDelta(),.05),ee=de.elapsedTime,z=N(),$=1-Math.pow(.0015,j);me+=(z-me)*$,w.update(me,ee),D(me,ee),O(me),x.render(S,M),T=requestAnimationFrame(le)},fe=()=>{P(),v&&F()};window.addEventListener("resize",fe);const H=j=>{j.preventDefault(),T&&(cancelAnimationFrame(T),T=null)};h.addEventListener("webglcontextlost",H,!1);let ne=null;return v?(ne=()=>F(),window.addEventListener("scroll",ne,{passive:!0}),F()):T=requestAnimationFrame(le),()=>{var j;T&&cancelAnimationFrame(T),window.removeEventListener("resize",fe),ne&&window.removeEventListener("scroll",ne),h.removeEventListener("webglcontextlost",H,!1),bw(S),S.clear(),x.dispose(),(j=x.forceContextLoss)==null||j.call(x)}},[r]),m.jsx("canvas",{ref:a,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class Xg extends Qs.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){const{error:e}=this.state;if(e){const{fallback:t}=this.props;return typeof t=="function"?t(e):t!==void 0?t:null}return this.props.children}}const Rw=560,Jm=[-4,-1.5,2,5],Cw=[-10,-4,4,10],Pw=[8,4,2,0];function Lw(r,e,t){const s=t?"0px":"-50%";if(r===e)return{transform:`translate(0, ${s}) rotate(0deg) scale(1)`,opacity:1,zIndex:20};if(r<e){const l=e-r,d=Cw[r],u=1-Math.min(.06,l*.02);if(t){const p=-(6+l*11);return{transform:`translate(${d}px, ${p}px) rotate(${Jm[r]}deg) scale(${u})`,opacity:1,zIndex:19-l}}const h=Pw[r]+l*14;return{transform:`translate(${d}px, calc(-50% + ${h}px)) rotate(${Jm[r]}deg) scale(${u})`,opacity:1,zIndex:19-l}}return{transform:`translate(0, ${t?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function Dw({card:r,style:e}){return m.jsxs("article",{className:"story-card",style:e,children:[m.jsx("div",{className:"sc-accent"}),m.jsxs("div",{className:"sc-body",children:[m.jsx("p",{className:"sc-num",children:r.num}),m.jsx("h3",{className:"sc-title",children:r.title}),r.callout&&m.jsxs("div",{className:"sc-callout",children:[m.jsx("span",{className:"sc-callout-label",children:r.callout.label}),m.jsx("p",{className:"sc-callout-text",children:r.callout.text})]}),m.jsx("div",{className:"sc-chips",children:r.human.map(t=>m.jsx("span",{className:"chip chip-human",children:t},t))}),m.jsxs("div",{className:"sc-ai",children:[m.jsxs("div",{className:"sc-ai-head",children:[m.jsx("span",{className:"sc-ai-star",children:"✦"}),m.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),m.jsx("div",{className:"sc-chips",style:{margin:0},children:r.ai.map(t=>m.jsx("span",{className:"chip chip-ai",children:t},t))})]})]})]})}function Nw(){const r=Ue.useRef(null),{theme:e}=zd(),[t,s]=Ue.useState(0),[a,l]=Ue.useState(typeof window<"u"?window.innerWidth<821:!1);Ue.useEffect(()=>{const x=()=>l(window.innerWidth<821);return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const d=Ue.useCallback(x=>s(x),[]),[u,h]=Ue.useState(!1),p=Ue.useCallback(()=>h(!0),[]),v=Ue.useRef(null);return m.jsxs("section",{id:"practice",ref:r,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[m.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(64px,9vw,120px) clamp(22px,5vw,44px) clamp(40px,6vw,72px)"},children:[m.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"02 · Practice"}),m.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),m.jsx("div",{ref:v,style:{position:"relative",height:`${Rw}vh`},children:m.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[u&&m.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),m.jsx(Xg,{fallback:null,children:m.jsx(Aw,{sectionRef:v,onStageChange:d,onWebGLUnavailable:p})}),m.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:m.jsx("div",{className:"practice-card-shell",children:H0.map((x,S)=>m.jsx(Dw,{card:x,style:Lw(S,t,a)},x.id))})})]})}),m.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const gd={fontFamily:"var(--font-mono)"};function Iw(){return m.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:m.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[m.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[m.jsx("div",{style:{...gd,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"03 · Instruments"}),m.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."})]}),m.jsx("div",{className:"instruments-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)",transitionDelay:"0.12s"},children:G0.map(r=>m.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)"},children:[m.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:m.jsx("img",{src:r.logo,alt:r.alt,className:"theme-logo",style:{...r.logoStyle,opacity:1}})}),m.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[m.jsx("div",{style:{...gd,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),m.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:r.problem}),m.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),m.jsx("div",{style:{...gd,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),m.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:r.result})]})]},r.id))})]})})}const Uw=144,eg=40;function Fw(r){const[e,t]=Ue.useState(-1),s=Ue.useCallback(d=>t(d),[]),a=Ue.useCallback(()=>t(-1),[]),l=Ue.useCallback((d,u)=>{const h=d*Uw,p=r[d%r.length];if(e===-1)return{x:h,rot:p,scale:1,z:d};const v=d-e;return v===0?{x:h,rot:0,scale:1.04,z:100}:{x:h+(v<0?-eg:eg),rot:p,scale:.98,z:50-Math.abs(v)}},[e,r]);return{activeIndex:e,focus:s,rest:a,getTransform:l}}const Ow=_d.map(r=>r.rot);function kw(){const{focus:r,rest:e,getTransform:t}=Fw(Ow),s=_d.length;return m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{...tg,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),m.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:m.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:_d.map((a,l)=>{const d=t(l,s);return m.jsxs("article",{onMouseEnter:()=>r(l),onClick:()=>r(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${d.x}px) rotate(${d.rot}deg) scale(${d.scale})`,zIndex:d.z},children:[m.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),m.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:a.quote}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[m.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...tg,fontSize:10,fontWeight:700,flex:"none"},children:a.initials}),m.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[m.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:a.name}),m.jsx("br",{}),m.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:a.title})]})]})]},a.id)})})}),m.jsx("div",{style:{marginTop:16,textAlign:"right"},children:m.jsxs("a",{href:V0,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",m.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const tg={fontFamily:"var(--font-mono)"},ng={fontFamily:"var(--font-mono)"};function zw(){return m.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:m.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[m.jsx("div",{style:{...ng,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),m.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[m.jsxs("div",{children:[m.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[xi.quoteLead,m.jsx("span",{style:{color:"var(--accent)"},children:xi.quoteAccent}),xi.quoteTail]}),m.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:xi.paragraphs[0]}),m.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:xi.paragraphs[1]})]}),m.jsxs("div",{children:[m.jsxs("div",{style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[m.jsx("img",{src:xi.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),m.jsxs("div",{style:{padding:"16px 18px"},children:[m.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),m.jsx("div",{style:{...ng,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),m.jsx("div",{style:{marginTop:14},children:xi.facts.map(r=>m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[m.jsx("span",{style:{color:"var(--text-secondary)"},children:r.label}),m.jsx("span",{style:{color:r.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:r.value})]},r.label))}),m.jsx("a",{href:xi.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),m.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:m.jsx(kw,{})}),m.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[xi.careerLine,m.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:xi.careerHighlight})]})]})})}const ig={fontFamily:"var(--font-mono)"};function Bw(){return m.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[m.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[m.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),m.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),m.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[m.jsx("div",{"data-reveal":"",style:{...ig,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),m.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[Ws.heading," ",m.jsx("span",{style:{color:"var(--accent)"},children:Ws.headingAccent})]}),m.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:Ws.links.map(r=>m.jsx("a",{href:r.href,className:`text-link ${r.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:r.variant==="primary"?{paddingBottom:3}:void 0,...r.external?{target:"_blank",rel:"noopener noreferrer"}:{},...r.download?{download:!0}:{},children:r.label},r.label))}),m.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...ig,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:Ws.copyright})]})]})}function Hw(r){Ue.useEffect(()=>{const e=r.current;if(!e||typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.setAttribute("data-reveal","visible"),t.unobserve(a.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(s=>t.observe(s)),()=>t.disconnect()},[r])}function Gw(){const r=Ue.useRef(null);return Hw(r),m.jsxs("div",{id:"top",ref:r,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[m.jsx(X0,{}),m.jsxs("main",{children:[m.jsx(Q0,{}),m.jsx(s_,{}),m.jsx(Nw,{}),m.jsx(Iw,{}),m.jsx(zw,{})]}),m.jsx(Bw,{})]})}const Id={},qg=Qs.createContext(Id);function Xd(r){const e=Qs.useContext(qg);return Qs.useMemo(function(){return typeof r=="function"?r(e):{...e,...r}},[e,r])}function Vw(r){let e;return r.disableParentContext?e=typeof r.components=="function"?r.components(Id):r.components||Id:e=Xd(r.components),Qs.createElement(qg.Provider,{value:e},r.children)}const rg={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function Ww(){const[r,e]=Ue.useState(!1),{theme:t,toggleTheme:s}=zd(),a=Ue.useCallback(()=>e(d=>!d),[]),l=Ue.useCallback(()=>e(!1),[]);return m.jsx("header",{className:r?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)"},children:m.jsxs("div",{style:{maxWidth:1080,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsxs(kd,{to:"/",style:{display:"flex",alignItems:"center",gap:10,height:20},children:[m.jsx("img",{src:Zr.logo,alt:Zr.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),m.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Zr.name})]}),m.jsx("button",{className:"hamburger",onClick:a,"aria-label":"Menu","aria-expanded":r,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),m.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[ag.map(d=>m.jsx("a",{href:`/${d.href}`,onClick:l,className:"nav-link",style:rg,children:d.label},d.href)),m.jsx("a",{href:`mailto:${Ti}`,onClick:l,className:"cta-pill",style:{...rg,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),m.jsx("button",{type:"button",onClick:s,title:t==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":t==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",fontSize:14,color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:t==="dark"?"☀️":"🌙"})]})]})})}function jw({meta:r={},next:e,children:t}){const{title:s,subtitle:a,tags:l=[],glance:d=[],accent:u}=r,h=u?{"--cs-accent":u}:void 0;return m.jsxs("div",{className:"cs-page",style:h,children:[m.jsx(Ww,{}),m.jsxs("main",{children:[m.jsxs("header",{className:"cs-wrap",children:[m.jsxs("div",{className:"cs-masthead",children:[l.length?m.jsx("div",{className:"cs-tags",children:l.join("  ·  ")}):null,s?m.jsx("h1",{className:"cs-title",children:s}):null,a?m.jsx("p",{className:"cs-subtitle",children:a}):null]}),d.length?m.jsx("dl",{className:"cs-glance",children:d.map(p=>m.jsxs("div",{className:"cs-glance-item",children:[m.jsx("dt",{className:"cs-glance-label",children:p.label}),m.jsx("dd",{className:"cs-glance-value",style:{margin:0},children:p.value})]},p.label))}):null]}),m.jsx("div",{className:"cs-wrap",children:m.jsx("article",{className:"cs-content",children:t})})]}),m.jsx(Xw,{next:e})]})}function Xw({next:r}){var e;return m.jsx("footer",{className:"cs-footer",children:m.jsxs("div",{className:"cs-footer-inner",children:[m.jsx("div",{className:"cs-next-label",children:r?"Next project":"More work"}),r?m.jsxs(kd,{to:`/case-studies/${r.slug}`,className:"cs-next-link",children:[m.jsx("span",{children:((e=r.meta)==null?void 0:e.title)||r.slug}),m.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}):m.jsxs("a",{href:"/#work",className:"cs-next-link",children:[m.jsx("span",{children:"See all work"}),m.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}),m.jsx("div",{className:"cs-footer-contact",children:Ws.links.map(t=>m.jsx("a",{href:t.href,className:`text-link ${t.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:t.variant==="primary"?{paddingBottom:3}:void 0,...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},...t.download?{download:!0}:{},children:t.label},t.label))}),m.jsxs("div",{className:"cs-footer-meta",children:[m.jsx("span",{children:Ws.copyright}),m.jsx("a",{href:"/#top",className:"text-link text-link--muted",children:"Back to top ↑"})]})]})})}function Ud(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(Ud).join(" "):r&&r.props?Ud(r.props.children):""}function Yg(r){return Ud(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function qw({children:r,eyebrow:e,id:t,...s}){const a=t||Yg(r);return m.jsxs("div",{className:"cs-heading",id:a,...s,children:[e?m.jsx("div",{className:"cs-heading-eyebrow",children:e}):null,m.jsx("h2",{className:"cs-heading-title",children:m.jsx("a",{href:`#${a}`,className:"cs-heading-anchor",children:r})})]})}function Yw({children:r,id:e,...t}){const s=e||Yg(r);return m.jsx("h3",{className:"cs-subheading",id:s,...t,children:r})}function $w({label:r="The outcome",items:e=[],...t}){return m.jsxs("section",{className:"cs-outcomeband","aria-label":r,...t,children:[m.jsx("div",{className:"cs-outcomeband-label",children:r}),m.jsx("div",{className:"cs-outcomeband-list",children:e.map((s,a)=>m.jsxs("div",{className:"cs-outcomeband-item",children:[m.jsx("span",{className:"cs-outcomeband-mark","aria-hidden":"true"}),m.jsx("div",{className:"cs-outcomeband-text",children:s})]},a))})]})}function Nt({children:r,lead:e=!1,className:t="",...s}){return m.jsx("div",{className:`cs-prose${e?" cs-prose--lead":""}${t?` ${t}`:""}`,...s,children:r})}function Fl({children:r,variant:e="principle",cite:t,...s}){const a=e==="user"?"user":"principle";return m.jsxs("figure",{className:`cs-pullquote cs-pullquote--${a}`,...s,children:[m.jsx("blockquote",{className:"cs-pullquote-text",children:r}),t?m.jsx("figcaption",{className:"cs-pullquote-cite",children:t}):null]})}function jl({src:r,alt:e=""}){const[t,s]=Ue.useState(!1);return r&&!t?m.jsx("span",{className:"cs-figure-media",children:m.jsx("img",{src:r,alt:e,loading:"lazy",decoding:"async",onError:()=>s(!0)})}):m.jsx(Kw,{alt:e,file:r})}function Kw({alt:r="",file:e,bare:t=!1}){const s=typeof e=="string"?e.split("/").pop():null;return m.jsxs("div",{className:`cs-placeholder${t?" cs-placeholder--bare":""}`,role:"img","aria-label":r||"Image placeholder",children:[m.jsx("span",{className:"cs-placeholder-tag",children:"Image"}),r?m.jsx("span",{className:"cs-placeholder-alt",children:r}):null,s?m.jsx("span",{className:"cs-placeholder-file",children:s}):null]})}function Mi({src:r,alt:e="",caption:t,fullBleed:s=!1,wide:a=!1,...l}){const d=`cs-figure${s?" cs-figure--full":a?" cs-figure--wide":""}`;return m.jsxs("figure",{className:d,...l,children:[m.jsx(jl,{src:r,alt:e}),t?m.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function Qw({items:r=[],caption:e,...t}){const s=Math.min(Math.max(r.length,1),4);return m.jsxs("figure",{className:"cs-illrow",style:{"--cs-cols":s},...t,children:[m.jsx("div",{className:"cs-illrow-grid",children:r.map((a,l)=>m.jsx("div",{className:"cs-illrow-cell",children:m.jsx(jl,{src:a.src,alt:a.alt})},l))}),e?m.jsx("figcaption",{className:"cs-caption",children:e}):null]})}function Zw({before:r={},after:e={},caption:t,beforeLabel:s="Before",afterLabel:a="After",...l}){return m.jsxs("figure",{className:"cs-beforeafter",...l,children:[m.jsxs("div",{className:"cs-beforeafter-grid",children:[m.jsxs("div",{className:"cs-ba-col",children:[m.jsx("span",{className:"cs-ba-tag cs-ba-tag--before",children:s}),m.jsx(jl,{src:r.src,alt:r.alt})]}),m.jsxs("div",{className:"cs-ba-col",children:[m.jsx("span",{className:"cs-ba-tag cs-ba-tag--after",children:a}),m.jsx(jl,{src:e.src,alt:e.alt})]})]}),t?m.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function qo({title:r,index:e,tradeoff:t,children:s,...a}){return m.jsxs("section",{className:"cs-decision",...a,children:[e?m.jsx("div",{className:"cs-decision-index",children:e}):null,r?m.jsx("h3",{className:"cs-decision-title",children:r}):null,m.jsx("div",{className:"cs-decision-body",children:s}),t?m.jsxs("div",{className:"cs-tradeoff",children:[t.considered?m.jsxs("div",{className:"cs-tradeoff-row",children:[m.jsx("span",{className:"cs-tradeoff-label",children:"Alternative considered"}),m.jsx("p",{className:"cs-tradeoff-text",children:t.considered})]}):null,t.why?m.jsxs("div",{className:"cs-tradeoff-row",children:[m.jsx("span",{className:"cs-tradeoff-label",children:"Why we didn’t"}),m.jsx("p",{className:"cs-tradeoff-text",children:t.why})]}):null]}):null]})}function vd({caption:r,head:e=[],rows:t=[],rowHeader:s=!0,minWidth:a,...l}){return m.jsx("div",{className:"cs-table-wrap",...l,children:m.jsx("div",{className:"cs-table-scroll",children:m.jsxs("table",{className:"cs-table",style:a?{minWidth:a}:void 0,children:[r?m.jsx("caption",{children:r}):null,e.length?m.jsx("thead",{children:m.jsx("tr",{children:e.map((d,u)=>m.jsx("th",{scope:"col",children:d},u))})}):null,m.jsx("tbody",{children:t.map((d,u)=>m.jsx("tr",{children:d.map((h,p)=>p===0&&s?m.jsx("th",{scope:"row",children:h},p):m.jsx("td",{children:h},p))},u))})]})})})}function Jw({items:r=[],...e}){return m.jsx("div",{className:"cs-metricrow",...e,children:m.jsx("div",{className:"cs-metricrow-grid",children:r.map((t,s)=>m.jsxs("div",{className:"cs-metric",children:[t.value!=null?m.jsx("div",{className:`cs-metric-value${t.valueText?" cs-metric-value--text":""}`,children:t.value}):null,t.label?m.jsx("div",{className:"cs-metric-label",children:t.label}):null,t.note?m.jsx("div",{className:"cs-metric-note",children:t.note}):null]},s))})})}const eT={h2:r=>m.jsx(qw,{...r}),h3:r=>m.jsx(Yw,{...r})},mn="/case-studies/swiftsort/images",tT={order:1,title:"SwiftSort — from memorized routes to instant, system-guided action",subtitle:"Shifting sorting decisions from workers to the system, across high-volume Nordic logistics terminals.",tags:["Logistics UX","Mobile & wearable","End-to-end ownership","POC → production"],glance:[{label:"Role",value:"Sole designer on this project (part of a wider design team) — owned research, UX strategy, interaction design, and design–engineering alignment end to end"},{label:"Team",value:"1 Product Manager · 4 Engineers · 2 Operations Leads"},{label:"Region",value:"Nordic"},{label:"Platform",value:"Android tablet + ProGlove wearable scanner"},{label:"Timeline",value:"3 months, proof-of-concept through to production"},{label:"Tools",value:"Figma, Figma Make, Banani, MS Copilot"}]};function sg(r){const e={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Xd(),...r.components};return m.jsxs(m.Fragment,{children:[`
`,`
`,`
`,`
`,m.jsx(Mi,{fullBleed:!0,src:`${mn}/01-hero.png`,alt:"The finished SwiftSort screen on a terminal tablet: a large destination card reading “12 CD”, the address, a barcode, and a QR “DROP” code on the right.",caption:"The finished SwiftSort screen — a large destination card, address, barcode and a QR “DROP” code. The shipped product, before the story begins."}),`
`,m.jsx(e.h2,{children:"The outcome"}),`
`,m.jsx(Nt,{children:m.jsxs(e.p,{children:["SwiftSort is ",m.jsx(e.strong,{children:"live in production"}),", running across the client's Nordic terminals. It replaced memory-dependent sorting with a scan-guided workflow — and the operations side felt the difference firsthand."]})}),`
`,m.jsx($w,{items:[m.jsxs(m.Fragment,{children:[m.jsx(e.strong,{children:"Shipped and running in live terminals"})," — not a prototype or a pilot that stalled"]}),m.jsxs(m.Fragment,{children:[m.jsx(e.strong,{children:"Faster onboarding and fewer gate errors"})," — reported by terminal managers to business stakeholders, not just observed by the design team"]}),m.jsxs(m.Fragment,{children:[m.jsx(e.strong,{children:"Zero new hardware, zero layout changes"})," — it ran on scanners workers already used"]})]}),`
`,m.jsx(Nt,{lead:!0,children:m.jsxs(e.p,{children:[m.jsx(e.strong,{children:"The short version:"})," A major Nordic logistics provider needed to sort more parcels, faster, without buying equipment or retraining staff. The sorting knowledge lived in workers' heads — which route, which gate, which order. SwiftSort moved that knowledge into the system, and triggered it with a scan instead of a decision."]})}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:m.jsx(e.em,{children:"The whole project ran on one principle:"})})}),`
`,m.jsx(Fl,{variant:"principle",children:m.jsxs(e.p,{children:[m.jsx("strong",{children:"Find the behavior that already exists, and build the system around it"})," — so workers have less to learn, not more."]})}),`
`,m.jsx(e.h2,{children:"The problem"}),`
`,m.jsxs(Nt,{children:[m.jsxs(e.p,{children:["Imagine standing on a warehouse floor as parcels pour in. Every box looks the same. Nothing tells you which one has to leave ",m.jsx(e.em,{children:"today"})," and which one can wait. You have to ",m.jsx(e.em,{children:"know"})," — from experience — which gate each postal code maps to, and in what order to stack things."]}),m.jsx(e.p,{children:"That was the daily reality. Sorting depended entirely on what workers had memorized. When I asked one operator how he kept it all straight, he shrugged:"})]}),`
`,m.jsx(Fl,{variant:"user",children:"I just memorize it. When I forget, I ask someone."}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"That one sentence is the whole problem. Critical operational knowledge wasn't in the system — it was in people's heads, and it walked out the door every time someone changed shifts or left."}),m.jsx(e.p,{children:m.jsx(e.strong,{children:"What that cost the business:"})}),m.jsxs(e.ul,{children:[`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Slow throughput"})," during peak hours, because every parcel required a mental lookup"]}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Frequent errors"})," — urgent and low-priority goods mixed at the gate, so time-sensitive deliveries missed their trucks"]}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Painful onboarding"})," — a new hire couldn't be useful until they'd memorized the routes, which took weeks"]}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Inconsistent terminals"})," — experienced operators were fast; everyone else was slow, and no two sites ran the same way"]}),`
`]}),m.jsx(e.p,{children:"The company needed to handle more volume without buying new equipment, redesigning the floor, or adding training. Those constraints ruled out most obvious answers."}),m.jsx(e.p,{children:m.jsx(e.strong,{children:"The reframe that shaped everything:"})})]}),`
`,m.jsx(Fl,{variant:"principle",children:m.jsxs(e.p,{children:["Sorting was never a screen problem. It was a ",m.jsx(e.em,{children:"decision"})," problem. Workers were doing system-level thinking — mapping, remembering, sequencing — manually, under pressure. The real opportunity wasn't to show them information faster. It was to move the thinking out of their heads and into the system."]})}),`
`,m.jsx(e.h2,{children:"How I approached it"}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"I started on the terminal floor, not in Figma. Over the discovery phase I shadowed forklift operators through full shifts, watched how loose goods and pallets actually got stacked, and sat with terminal managers and operations leads to understand where the informal workarounds lived."}),m.jsxs(e.p,{children:["The job wasn't to invent a new way to sort. It was to find the behavior that ",m.jsx(e.em,{children:"already worked"})," and build the system around it. That principle — stated up top — ended up driving every major decision below."]}),m.jsxs(e.p,{children:[m.jsx(e.strong,{children:"One boundary worth naming."})," SwiftSort doesn't decide ",m.jsx(e.em,{children:"where"})," a parcel should go — routing and drop-off assignment are set by planners in a separate system, upstream of us. Our app's job is to take that data and make the right action obvious and instant at the sorting moment. I mention this because it defines what I actually owned: not the routing logic, but the worker-facing decision layer — the point where upstream data becomes a physical action on a noisy terminal floor. Knowing exactly where our slice started and ended shaped every trade-off that followed."]})]}),`
`,m.jsx(Mi,{wide:!0,src:`${mn}/05-research-synthesis.png`,alt:"A clustered affinity view of field observations grouped into themes such as memory dependence, environmental constraints, and LIFO stacking behaviour.",caption:"Field observations, clustered into themes — memory dependence, environmental constraints, LIFO stacking behaviour. The “how I made sense of it” artifact."}),`
`,m.jsx(e.h2,{children:"What the old workflow actually looked like"}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"A single parcel took three steps — one physical, two mental. Watch the mental load grow:"})}),`
`,m.jsx(Qw,{items:[{src:`${mn}/02-illustration-scan.png`,alt:"Comic panel — the driver calmly scans the box, an empty thought-bubble above them: no mental effort."},{src:`${mn}/03-illustration-read.png`,alt:"Comic panel — the driver reads the label, a small thought-bubble with a magnifying glass and a question mark: mild effort."},{src:`${mn}/04-illustration-mental-lookup.png`,alt:"Comic panel — the driver looks overwhelmed, a huge chaotic thought-bubble tangled with gate numbers, routes and arrows."}],caption:"One physical step, two mental ones — and the mental load is where the time, the errors, and the training cost all lived."}),`
`,m.jsx(vd,{head:["Step","What the worker did","Type"],rows:[["1. Scan","Scan the barcode","Physical"],["2. Read","Read the postal code off the label","Mental"],["3. Decide","Recall which gate, which route, which order",m.jsx(m.Fragment,{children:m.jsx(e.strong,{children:"Mental — the bottleneck"})})]]}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"Steps 2 and 3 were invisible work happening inside someone's head. That's where the time, the errors, and the training cost all lived — and none of it was written down anywhere the system could see."})}),`
`,m.jsx(e.h2,{children:"The moment that changed the design"}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"The most important decision in this project didn't come from the brief. It came from watching a mistake."})}),`
`,m.jsx(e.h3,{children:"The wrong direction"}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"During proof-of-concept testing, I watched forklift drivers struggle to reach a button on a mounted tablet. The tablet was bolted in the only spot it physically fit — which turned out not to be a spot a human arm could comfortably reach mid-operation."}),m.jsxs(e.p,{children:["The team's response was the response ",m.jsx(e.em,{children:"anyone"})," would give: ",m.jsx(e.strong,{children:"make the button bigger. Move the tablet. Add a second button."}),' We spent days debating button placement. Everyone was solving the problem as stated — "the button is hard to reach" — and no one was questioning whether the button should exist.']})]}),`
`,m.jsx(e.h3,{children:"The reframe"}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"I went home, opened the session recording from that day, and watched it again the next morning."}),m.jsxs(e.p,{children:["This time I noticed something I'd missed live: ",m.jsx(e.strong,{children:"every worker in the recording was already wearing a ProGlove scanner."})," Activated. In the workflow. They weren't reaching for the tablet because they wanted to touch it — they were reaching because the system asked them to confirm with a tap."]}),m.jsxs(e.p,{children:["So I asked a different question: ",m.jsx(e.em,{children:"what if the button didn't have to be reachable?"})]}),m.jsxs(e.p,{children:["I proposed adding a ",m.jsx(e.strong,{children:"static QR code"})," as the last card in the list — a code the worker could scan with the ProGlove already on their hand, ",m.jsx(e.em,{children:"or"})," tap like any other button. On a mounted tablet that's sometimes out of arm's reach, the scan path means reach stops mattering. The QR becomes, in effect, a physical button the worker can trigger from wherever they're standing — without giving up the tap for anyone who prefers it."]}),m.jsx(e.p,{children:'Getting the team there took more than the idea itself. The button debate had momentum — people had invested days in it. Rather than argue placement, I brought the group back to the recording and let them watch the glove do the work. Seeing it was faster than being told. The conversation shifted from "where does the button go" to "why does reach have to be the constraint," and the room moved on its own.'}),m.jsx(e.p,{children:"I want to be honest about the confidence level here: at that point it was a hunch, not a proven answer. Adding a scan path to a live operation is the kind of idea that's either elegant or redundant, and I couldn't tell which yet from a meeting room. The whole thing hinged on one question I couldn't answer at a desk — would a worker mid-shift, gloves on, actually reach for the scan instead of stretching for the button? That question is what sent the concept straight to the floor for testing rather than into a polished mockup."})]}),`
`,m.jsx(Fl,{variant:"principle",children:m.jsxs(e.p,{children:[m.jsx("strong",{children:"The insight came from watching a recording a second time — not from the brief."})," The fix wasn't a bigger button or a better mount. It was giving the worker a second way in, so the mounting distance stopped being a problem to solve."]})}),`
`,m.jsx(Zw,{before:{src:`${mn}/06-reframe-before.png`,alt:"The out-of-reach button mounted on the forklift tablet — a worker stretching to reach it mid-operation."},after:{src:`${mn}/07-reframe-after.png`,alt:"The QR “DROP” card that gives a scannable path to the same confirmation action."},caption:"Scan or tap. Reach stops mattering."}),`
`,m.jsx(e.h2,{children:"Working with engineering"}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"The static-QR idea only worked because engineering pressure-tested it early."}),m.jsxs(e.p,{children:["Engineering's first instinct was a ",m.jsx(e.strong,{children:"dynamic QR"})," — a unique code generated for every scanned parcel. Within a day, they flagged the problems: significant backend complexity, scalability concerns, and a timeline we couldn't hit."]}),m.jsxs(e.p,{children:["We landed on ",m.jsx(e.strong,{children:"static QR"})," together — and it turned out to be not just simpler but genuinely ",m.jsx(e.em,{children:"better"}),":"]}),m.jsxs(e.ul,{children:[`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Reliable"})," — no backend to fail, works offline"]}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Scalable"})," — print, attach, deploy; the same code works at every terminal"]}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Zero-config"})," — operations can place codes anywhere without involving IT"]}),`
`]}),m.jsxs(e.p,{children:["The engineering constraint didn't compromise the design. It ",m.jsx(e.em,{children:"improved"})," it. The thing that was easiest to build was also the thing that was most robust on the floor."]})]}),`
`,m.jsx(e.h2,{children:"How the workflow shrank"}),`
`,m.jsx(Nt,{children:m.jsxs(e.p,{children:["The proof-of-concept removed the ",m.jsx(e.em,{children:"recall"})," step. The final design removed the ",m.jsx(e.em,{children:"reaching"})," — the confirmation no longer depended on the worker being close enough to the screen."]})}),`
`,m.jsx(vd,{head:["","Old workflow","Final design"],rows:[["Scan the parcel","✅","✅ (unchanged)"],["Read the postal code","Manual, from the label",m.jsxs(m.Fragment,{children:[m.jsx(e.strong,{children:"Eliminated"})," — destination shown instantly"]})],["Recall gate & route","Mental lookup",m.jsxs(m.Fragment,{children:[m.jsx(e.strong,{children:"Eliminated"})," — no memory needed"]})],["Confirm drop-off","Tap a button you had to reach",m.jsxs(m.Fragment,{children:[m.jsx(e.strong,{children:"Scan or tap"})," — the QR works from anywhere"]})]]}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"Three steps, two of them mental, became a scan and a single confirmation that no longer depended on reach."})}),`
`,m.jsx(Mi,{wide:!0,src:`${mn}/08-workflow-after.png`,alt:"The three-step workflow diagram with steps 2 and 3 (read the postal code, recall gate and route) crossed out and greyed, ending in “Confirm by scan or tap.”",caption:"The same three steps — now with the two mental ones removed, ending in a single “confirm by scan or tap.”"}),`
`,m.jsx(e.h2,{children:"The design decisions (and what each one traded off)"}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"Every choice below came from that same principle — find the existing behavior, let the system follow it. None of these asked workers to learn something new."})}),`
`,m.jsx(qo,{index:"Decision 01",title:"The QR code doubles as the button",tradeoff:{considered:"ProGlove gesture events — a wave or motion to confirm.",why:m.jsx(m.Fragment,{children:"Engineering flagged them as unstable in a noisy, fast-moving environment. A scannable, tappable QR was more reliable — and it degraded gracefully, since if one input failed the other still worked."})},children:m.jsx(e.p,{children:"On the mounted tablet, the QR sits as the last card in the drop list — and it works two ways: scan it with the ProGlove, or tap it like any other button. That dual function is deliberate. Forklift mounts vary, and on some vehicles the tablet ends up too far for a comfortable mid-operation reach. The scan path means the confirmation works regardless of where the tablet had to be mounted; the tap stays for anyone close enough to use it. Reach stops being a design problem because the worker always has a path that fits their vehicle."})}),`
`,m.jsx(Mi,{src:`${mn}/09-qr-scan-or-tap.png`,alt:"The tablet drop list with the QR “DROP” card as the final item, annotated to show both paths: scan with ProGlove, or tap to confirm.",caption:"The QR “DROP” card as the final item in the list — annotated to show both paths: scan with the ProGlove, or tap to confirm."}),`
`,m.jsx(qo,{index:"Decision 02",title:"Scan-first — not voice",tradeoff:{considered:"Voice commands.",why:m.jsxs(m.Fragment,{children:["In a loud warehouse, reading barcode values aloud introduced ",m.jsx(e.strong,{children:"more"})," errors than it removed. Voice feedback would be missed or forgotten, especially when a worker handles several drop-offs at once. This was the clearest “no” in the project — a good idea the environment rejected."]})},children:m.jsxs(e.p,{children:["Workers already scanned barcodes constantly, so making the ",m.jsx(e.em,{children:"scan itself"})," the trigger required no new behavior."]})}),`
`,m.jsxs(qo,{index:"Decision 03",title:"The screen mirrors the physical stack (LIFO)",children:[m.jsxs(e.p,{children:["During research I saw that forklift drivers almost always drop off the ",m.jsx(e.strong,{children:"most recently scanned"})," item first — roughly 95–99% of the time, last-in is first-out."]}),m.jsxs(e.p,{children:["So the design puts the ",m.jsx(e.strong,{children:"latest scanned pallet as the largest card at the top"}),", with smaller cards beneath. The order on screen matches the order on the forklift — no mental translation."]}),m.jsxs(e.p,{children:[m.jsx(e.em,{children:"The honest edge case:"})," that leaves 1–5% of cases where last-scanned ",m.jsx(e.em,{children:"isn't"})," next-dropped. Workers can scan any card directly to override the default, but this is the assumption I'd most want to instrument over a longer run (more below)."]})]}),`
`,m.jsx(Mi,{src:`${mn}/10-lifo-layout.png`,alt:"The main screen showing the large top card “12 CD, 1726 Sarpsborg” with smaller cards beneath — “06 AB”, “18 CD”.",caption:"Largest card = last scanned = next dropped. The order on screen matches the order on the forklift."}),`
`,m.jsxs(qo,{index:"Decision 04",title:"Priority surfaces at the moment of sorting",children:[m.jsxs(e.p,{children:["Time-sensitive shipments now appear with a distinct accent treatment, floating to the top of the stack — ",m.jsx(e.strong,{children:"before"})," the worker decides where to place the parcel."]}),m.jsx(e.p,{children:"The priority signal used to live in dispatch, far upstream. Moving it to the sorting moment is why urgent and low-priority goods stopped mixing at the gate."}),m.jsx(e.p,{children:m.jsx(e.em,{children:"Not in the brief. Found in the field."})})]}),`
`,m.jsxs(qo,{index:"Decision 05",title:"Stacking mode for loose goods",children:[m.jsx(e.p,{children:"Drivers loading several loose items to the same destination used to create one card per item — slow and repetitive. Stacking mode lets them group everything and drop off in a single scan, triggered by a barcode embedded in the primary card."}),m.jsx(e.p,{children:m.jsx(e.em,{children:"Not in the brief. Found in the field."})})]}),`
`,m.jsx(Mi,{src:`${mn}/11-stacking-mode.png`,alt:"The split-screen stacking view: the main sort list on the left, a “Stacking Mode” panel on the right grouping multiple parcels under one destination.",caption:"Stacking mode — one scan, many items grouped under a single destination."}),`
`,m.jsx(e.h3,{children:"Designed for an industrial floor"}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"Underpinning all of it, the interface had to survive the environment: readable at 1–2 meters, high-contrast for outdoor glare, large glove-friendly targets, and one decision per screen so nothing competes for a worker's split-second attention."})}),`
`,m.jsx(e.h2,{children:"One solution, two form factors"}),`
`,m.jsxs(Nt,{children:[m.jsxs(e.p,{children:["The QR-as-button was never meant to be everywhere. It solved a ",m.jsx(e.em,{children:"specific"})," physical problem — a tablet mounted out of reach on a forklift — and the moment the physical context changed, so did the design."]}),m.jsxs(e.p,{children:["Some workers don't use a mounted tablet at all. They carry a handheld ",m.jsx(e.strong,{children:"TC57"}),", which has a scanner built in and no separate ProGlove. For them, reach is never a problem: the device is already in their hand. So the TC57 version deliberately ",m.jsx(e.strong,{children:"drops the QR entirely"})," and confirms drop-off with a simple tap on the green ",m.jsx(e.strong,{children:"Drop"})," button."]}),m.jsx(e.p,{children:"The same task, designed twice:"})]}),`
`,m.jsx(vd,{head:["","Mounted tablet + ProGlove","Handheld TC57"],rows:[["Where the device lives","Bolted to the forklift, sometimes out of reach","In the worker’s hand"],["How you confirm a drop","Scan the QR card, or tap it","Tap the Drop button"],["Why","Reach varies by vehicle — the scan path removes that variable","Reach is never in question — so no QR needed"]]}),`
`,m.jsx(Nt,{children:m.jsxs(e.p,{children:["This is the part I'm most deliberate about: the clever solution was matched to the context that ",m.jsx(e.em,{children:"needed"})," it, and withheld from the context that didn't. A QR on the TC57 would have been a solution in search of a problem — extra visual weight solving a constraint that doesn't exist in-hand. Matching the input to the device's physical reality, rather than standardizing one pattern everywhere, is the same principle as the rest of the project: ",m.jsx(e.em,{children:"let the existing reality decide the design."})]})}),`
`,m.jsx(Mi,{src:`${mn}/12-tc57-stacking.png`,alt:"The handheld TC57 stacking screen: a “23 CD” header, a green “Drop” button top-right, and the grouped parcel list for Fløyfjellsveien 178 / 9876 Bergen — with no QR card.",caption:"In-hand device — tap to drop, no QR needed."}),`
`,m.jsx(Mi,{wide:!0,src:`${mn}/13-tablet-vs-tc57.png`,alt:"The two form factors side by side: the tablet with the QR “DROP” card versus the TC57 with the tap-only Drop button.",caption:"Same task. The device's reach decided the input."}),`
`,m.jsx(e.h2,{children:"Exploring, then discarding"}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:"Not everything survived. Early on I used Figma Make to generate six LIFO card layouts fast, then killed most of them against a single test: could a worker read it at arm's length, in motion, wearing gloves? Most couldn't. The variants that packed in more information — the ones that looked richer on a desktop screen — were the first to go."})}),`
`,m.jsx(Mi,{wide:!0,src:`${mn}/14-discarded-variants.png`,alt:"A grid of early LIFO card layout explorations with the rejected variants visibly marked.",caption:"The range considered — and the judgment applied. Most explorations were killed against one test: readable at arm's length, in motion, wearing gloves."}),`
`,m.jsx(e.h2,{children:"How AI fit into the process"}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"AI tools compressed the slow early phase; the field decided what actually shipped."}),m.jsxs(e.ul,{children:[`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Figma Make"})," generated six LIFO card variants in the time it would've taken to build one cleanly"]}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"MS Copilot"}),' clustered raw field-research notes into themes — which is how the "priority at the sorting moment" finding surfaced']}),`
`,m.jsxs(e.li,{children:[m.jsx(e.strong,{children:"Banani"})," structured the stacking-mode flow before I committed it to Figma"]}),`
`]}),m.jsxs(e.p,{children:["Net effect: roughly ",m.jsx(e.strong,{children:"30% faster early exploration"}),". Every decision that shipped still came from on-site testing, not from a generated mockup."]})]}),`
`,m.jsx(e.h2,{children:"Testing on the floor"}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"This wasn't validated in a design tool. It was validated on Zebra devices, on the terminal floor, twice."}),m.jsxs(e.p,{children:[m.jsx(e.strong,{children:"Round 1 failed in useful ways."})," Workers struggled with controls ",m.jsx(e.em,{children:"while moving"}),", stacking interactions were too fiddly, and scan feedback wasn't clear enough. Nothing about the concept was wrong — the execution was too fine-grained for a glove and a moving forklift."]}),m.jsxs(e.p,{children:[m.jsx(e.strong,{children:"I iterated:"})," stronger visual hierarchy, clearer color coding, higher visibility for the latest scan, bigger targets, simpler interactions."]}),m.jsxs(e.p,{children:[m.jsx(e.strong,{children:"Round 2 confirmed the fix."})," Workers moved through sorting noticeably faster, preferred the guided flow over memorization, and stacking got measurably more consistent. This was the round that gave us the confidence to ship — the workflow held up under real movement, real gloves, real noise."]})]}),`
`,m.jsx(Mi,{wide:!0,src:`${mn}/15-round1-vs-round2.png`,alt:"A before/after of a screen that changed between test rounds — the stacking interaction or scan-feedback state — annotated with what Round 1 taught and how Round 2 answered it.",caption:"What the Round 1 failure taught, and how Round 2 answered it."}),`
`,m.jsx(e.h2,{children:"Outcomes"}),`
`,m.jsx(Jw,{items:[{value:"Live in production",valueText:!0,note:"Running across the client's Nordic terminals"},{value:"Faster onboarding",valueText:!0,note:"Reported by terminal managers — new starters productive sooner, nothing to memorize"},{value:"Fewer errors at the gate",valueText:!0,note:"Reported by terminal managers — urgent and low-priority goods stopped mixing"},{value:"None",label:"New hardware required"},{value:"None",label:"Terminal layout changes"}]}),`
`,m.jsxs(Nt,{children:[m.jsx(e.p,{children:"The onboarding and error improvements aren't design-team self-assessment — they came from terminal managers, who raised them with business stakeholders as evidence the system was working on the floor. That's the validation I trust most: the people running the operation found the change real enough to report upward."}),m.jsxs(e.p,{children:["Beyond that, the ",m.jsx(e.em,{children:"shape"})," of the operation changed. New starters reached confidence faster because there was nothing to memorize. Delivery priority became visible at the exact moment it mattered, so time-sensitive shipments left on time. Low-volume routes could be consolidated instead of dispatched half-empty — which is what made fast-delivery commitments more scalable."]})]}),`
`,m.jsx(e.h2,{children:"What we shipped knowingly incomplete"}),`
`,m.jsxs(Nt,{children:[m.jsxs(e.p,{children:["We went live as an MVP with one known, unresolved issue: ",m.jsx(e.strong,{children:"changing a drop-off location isn't intuitive yet, and parcels don't group as cleanly as they should."})," We knew this before launch — and shipped anyway, on purpose."]}),m.jsxs(e.p,{children:["The reasoning: drop-off locations are set upstream by planners, and we couldn't fully predict how that data would format and behave once it hit real terminals at volume. Rather than guess at the perfect grouping and re-editing model in a design tool, we shipped the core workflow, put it in front of real operations, and treated the first release as a way to ",m.jsx(e.em,{children:"learn how drop-off data actually behaves in the wild."})," The grouping and location-editing experience is the next thing to optimize, now that we have real formatting patterns to design against instead of assumptions."]}),m.jsx(e.p,{children:`This is the trade-off I'd defend hardest: an MVP with a named, understood gap that generates real learning beats a "complete" design built on guesses about data we didn't yet control. Shipping to learn — and being honest about what isn't solved yet — is how this kind of operational system actually gets better.`}),m.jsx(e.p,{children:m.jsx(e.em,{children:"The LIFO default (last-scanned = next-dropped) also rests on a 95–99% behavioral assumption. It held across observation and testing, with a manual override for the exception — but the override rate is another thing I'd want to instrument over a full peak season before calling it settled."})})]}),`
`,m.jsx(e.h2,{children:"The takeaway"}),`
`,m.jsxs(Nt,{children:[m.jsxs(e.p,{children:["SwiftSort wasn't a UI redesign. It was a redesign of ",m.jsx(e.strong,{children:"how a decision gets made"})," on a warehouse floor."]}),m.jsxs(e.p,{children:["By moving the thinking out of workers' heads and into the system — and by triggering it with behavior they already had — sorting shifted from ",m.jsx(e.em,{children:"memory-based"})," to ",m.jsx(e.em,{children:"system-guided"}),", from ",m.jsx(e.em,{children:"experience-dependent"})," to ",m.jsx(e.em,{children:"scalable"}),", from ",m.jsx(e.em,{children:"manual interpretation"})," to ",m.jsx(e.em,{children:"instant action"}),"."]}),m.jsxs(e.p,{children:["The clearest lesson: in operational systems, great design usually isn't about adding features. It's about ",m.jsx(e.strong,{children:"removing constraints"})," — and the best removal in this project came from watching a recording twice and asking why ",m.jsx(e.em,{children:"reach"})," had to be the thing we designed around at all."]})]}),`
`,m.jsx(Nt,{children:m.jsx(e.p,{children:m.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on SwiftSort, end to end"})})})]})}function nT(r={}){const{wrapper:e}={...Xd(),...r.components};return e?m.jsx(e,{...r,children:m.jsx(sg,{...r})}):sg(r)}const iT=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:mn,default:nT,meta:tT},Symbol.toStringTag,{value:"Module"})),rT=Object.assign({"./swiftsort/index.mdx":iT}),$o=Object.entries(rT).map(([r,e])=>{var s;const t=(s=r.match(/\.\/([^/]+)\/index\.mdx$/))==null?void 0:s[1];return{slug:t,Component:e.default,meta:{slug:t,...e.meta||{}}}}).filter(r=>r.slug).sort((r,e)=>(r.meta.order??999)-(e.meta.order??999));function sT(r){return $o.find(e=>e.slug===r)||null}function oT(r){if($o.length<2)return null;const e=$o.findIndex(t=>t.slug===r);return e===-1?null:$o[(e+1)%$o.length]}function aT({slug:r}){const e=sT(r);if(Ue.useEffect(()=>{var l;if((l=e==null?void 0:e.meta)!=null&&l.title){const d=document.title;return document.title=`${e.meta.title} · Yogesh Shetty`,()=>{document.title=d}}},[e]),!e)return m.jsx(lT,{slug:r});const{Component:t,meta:s}=e,a=oT(r);return m.jsx(jw,{meta:s,next:a,children:m.jsx(Vw,{components:eT,children:m.jsx(t,{})})})}function lT({slug:r}){return m.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",textAlign:"center"},children:m.jsxs("div",{style:{maxWidth:460},children:[m.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:14},children:"Case study not found"}),m.jsxs("h1",{style:{fontSize:28,fontWeight:600,margin:"0 0 16px",letterSpacing:"-0.02em"},children:["No case study “",r,"”"]}),m.jsx(kd,{to:"/",className:"text-link text-link--primary",style:{fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,paddingBottom:3},children:"← Back to portfolio"})]})})}function cT(){const e=B0().match(/^\/case-studies\/([^/]+)\/?$/);return e?m.jsx(aT,{slug:decodeURIComponent(e[1])}):m.jsx(Gw,{})}function uT(){return m.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:m.jsxs("div",{style:{maxWidth:520},children:[m.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),m.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),m.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[m.jsx("a",{href:`mailto:${Ti}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),m.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}O0.createRoot(document.getElementById("root")).render(m.jsx(Qs.StrictMode,{children:m.jsx(Xg,{fallback:m.jsx(uT,{}),children:m.jsx(j0,{children:m.jsx(k0,{children:m.jsx(cT,{})})})})}));
