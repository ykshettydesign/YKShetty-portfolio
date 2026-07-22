(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Hm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Su={exports:{}},Uo={},Mu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function l0(){if(Jh)return ht;Jh=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function v(P,V,ye){this.props=P,this.context=V,this.refs=w,this.updater=ye||S}v.prototype.isReactComponent={},v.prototype.setState=function(P,V){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,V,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=v.prototype;function L(P,V,ye){this.props=P,this.context=V,this.refs=w,this.updater=ye||S}var b=L.prototype=new x;b.constructor=L,E(b,v.prototype),b.isPureReactComponent=!0;var D=Array.isArray,W=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function de(P,V,ye){var j,ue={},he=null,Ae=null;if(V!=null)for(j in V.ref!==void 0&&(Ae=V.ref),V.key!==void 0&&(he=""+V.key),V)W.call(V,j)&&!F.hasOwnProperty(j)&&(ue[j]=V[j]);var fe=arguments.length-2;if(fe===1)ue.children=ye;else if(1<fe){for(var le=Array(fe),be=0;be<fe;be++)le[be]=arguments[be+2];ue.children=le}if(P&&P.defaultProps)for(j in fe=P.defaultProps,fe)ue[j]===void 0&&(ue[j]=fe[j]);return{$$typeof:s,type:P,key:he,ref:Ae,props:ue,_owner:z.current}}function ve(P,V){return{$$typeof:s,type:P.type,key:V,ref:P.ref,props:P.props,_owner:P._owner}}function T(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function I(P){var V={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ye){return V[ye]})}var ae=/\/+/g;function se(P,V){return typeof P=="object"&&P!==null&&P.key!=null?I(""+P.key):V.toString(36)}function k(P,V,ye,j,ue){var he=typeof P;(he==="undefined"||he==="boolean")&&(P=null);var Ae=!1;if(P===null)Ae=!0;else switch(he){case"string":case"number":Ae=!0;break;case"object":switch(P.$$typeof){case s:case e:Ae=!0}}if(Ae)return Ae=P,ue=ue(Ae),P=j===""?"."+se(Ae,0):j,D(ue)?(ye="",P!=null&&(ye=P.replace(ae,"$&/")+"/"),k(ue,V,ye,"",function(be){return be})):ue!=null&&(T(ue)&&(ue=ve(ue,ye+(!ue.key||Ae&&Ae.key===ue.key?"":(""+ue.key).replace(ae,"$&/")+"/")+P)),V.push(ue)),1;if(Ae=0,j=j===""?".":j+":",D(P))for(var fe=0;fe<P.length;fe++){he=P[fe];var le=j+se(he,fe);Ae+=k(he,V,ye,le,ue)}else if(le=y(P),typeof le=="function")for(P=le.call(P),fe=0;!(he=P.next()).done;)he=he.value,le=j+se(he,fe++),Ae+=k(he,V,ye,le,ue);else if(he==="object")throw V=String(P),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Ae}function ee(P,V,ye){if(P==null)return P;var j=[],ue=0;return k(P,j,"","",function(he){return V.call(ye,he,ue++)}),j}function Q(P){if(P._status===-1){var V=P._result;V=V(),V.then(function(ye){(P._status===0||P._status===-1)&&(P._status=1,P._result=ye)},function(ye){(P._status===0||P._status===-1)&&(P._status=2,P._result=ye)}),P._status===-1&&(P._status=0,P._result=V)}if(P._status===1)return P._result.default;throw P._result}var ce={current:null},H={transition:null},$={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function X(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ee,forEach:function(P,V,ye){ee(P,function(){V.apply(this,arguments)},ye)},count:function(P){var V=0;return ee(P,function(){V++}),V},toArray:function(P){return ee(P,function(V){return V})||[]},only:function(P){if(!T(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ht.Component=v,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ht.act=X,ht.cloneElement=function(P,V,ye){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var j=E({},P.props),ue=P.key,he=P.ref,Ae=P._owner;if(V!=null){if(V.ref!==void 0&&(he=V.ref,Ae=z.current),V.key!==void 0&&(ue=""+V.key),P.type&&P.type.defaultProps)var fe=P.type.defaultProps;for(le in V)W.call(V,le)&&!F.hasOwnProperty(le)&&(j[le]=V[le]===void 0&&fe!==void 0?fe[le]:V[le])}var le=arguments.length-2;if(le===1)j.children=ye;else if(1<le){fe=Array(le);for(var be=0;be<le;be++)fe[be]=arguments[be+2];j.children=fe}return{$$typeof:s,type:P.type,key:ue,ref:he,props:j,_owner:Ae}},ht.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},ht.createElement=de,ht.createFactory=function(P){var V=de.bind(null,P);return V.type=P,V},ht.createRef=function(){return{current:null}},ht.forwardRef=function(P){return{$$typeof:u,render:P}},ht.isValidElement=T,ht.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Q}},ht.memo=function(P,V){return{$$typeof:p,type:P,compare:V===void 0?null:V}},ht.startTransition=function(P){var V=H.transition;H.transition={};try{P()}finally{H.transition=V}},ht.unstable_act=X,ht.useCallback=function(P,V){return ce.current.useCallback(P,V)},ht.useContext=function(P){return ce.current.useContext(P)},ht.useDebugValue=function(){},ht.useDeferredValue=function(P){return ce.current.useDeferredValue(P)},ht.useEffect=function(P,V){return ce.current.useEffect(P,V)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(P,V,ye){return ce.current.useImperativeHandle(P,V,ye)},ht.useInsertionEffect=function(P,V){return ce.current.useInsertionEffect(P,V)},ht.useLayoutEffect=function(P,V){return ce.current.useLayoutEffect(P,V)},ht.useMemo=function(P,V){return ce.current.useMemo(P,V)},ht.useReducer=function(P,V,ye){return ce.current.useReducer(P,V,ye)},ht.useRef=function(P){return ce.current.useRef(P)},ht.useState=function(P){return ce.current.useState(P)},ht.useSyncExternalStore=function(P,V,ye){return ce.current.useSyncExternalStore(P,V,ye)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var ep;function Ed(){return ep||(ep=1,Mu.exports=l0()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function c0(){if(tp)return Uo;tp=1;var s=Ed(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(u,h,p){var g,_={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(u&&u.defaultProps)for(g in h=u.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:u,key:y,ref:S,props:_,_owner:a.current}}return Uo.Fragment=n,Uo.jsx=d,Uo.jsxs=d,Uo}var np;function u0(){return np||(np=1,Su.exports=c0()),Su.exports}var O=u0(),Ye=Ed();const Gm=Hm(Ye);var el={},Eu={exports:{}},bn={},Tu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function d0(){return ip||(ip=1,(function(s){function e(H,$){var X=H.length;H.push($);e:for(;0<X;){var P=X-1>>>1,V=H[P];if(0<a(V,$))H[P]=$,H[X]=V,X=P;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var $=H[0],X=H.pop();if(X!==$){H[0]=X;e:for(var P=0,V=H.length,ye=V>>>1;P<ye;){var j=2*(P+1)-1,ue=H[j],he=j+1,Ae=H[he];if(0>a(ue,X))he<V&&0>a(Ae,ue)?(H[P]=Ae,H[he]=X,P=he):(H[P]=ue,H[j]=X,P=j);else if(he<V&&0>a(Ae,X))H[P]=Ae,H[he]=X,P=he;else break e}}return $}function a(H,$){var X=H.sortIndex-$.sortIndex;return X!==0?X:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();s.unstable_now=function(){return d.now()-u}}var h=[],p=[],g=1,_=null,y=3,S=!1,E=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var $=n(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=H)r(p),$.sortIndex=$.expirationTime,e(h,$);else break;$=n(p)}}function D(H){if(w=!1,b(H),!E)if(n(h)!==null)E=!0,Q(W);else{var $=n(p);$!==null&&ce(D,$.startTime-H)}}function W(H,$){E=!1,w&&(w=!1,x(de),de=-1),S=!0;var X=y;try{for(b($),_=n(h);_!==null&&(!(_.expirationTime>$)||H&&!I());){var P=_.callback;if(typeof P=="function"){_.callback=null,y=_.priorityLevel;var V=P(_.expirationTime<=$);$=s.unstable_now(),typeof V=="function"?_.callback=V:_===n(h)&&r(h),b($)}else r(h);_=n(h)}if(_!==null)var ye=!0;else{var j=n(p);j!==null&&ce(D,j.startTime-$),ye=!1}return ye}finally{_=null,y=X,S=!1}}var z=!1,F=null,de=-1,ve=5,T=-1;function I(){return!(s.unstable_now()-T<ve)}function ae(){if(F!==null){var H=s.unstable_now();T=H;var $=!0;try{$=F(!0,H)}finally{$?se():(z=!1,F=null)}}else z=!1}var se;if(typeof L=="function")se=function(){L(ae)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=ae,se=function(){ee.postMessage(null)}}else se=function(){v(ae,0)};function Q(H){F=H,z||(z=!0,se())}function ce(H,$){de=v(function(){H(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,Q(W))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var X=y;y=$;try{return H()}finally{y=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=y;y=H;try{return $()}finally{y=X}},s.unstable_scheduleCallback=function(H,$,X){var P=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,H){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=X+V,H={id:g++,callback:$,priorityLevel:H,startTime:X,expirationTime:V,sortIndex:-1},X>P?(H.sortIndex=X,e(p,H),n(h)===null&&H===n(p)&&(w?(x(de),de=-1):w=!0,ce(D,X-P))):(H.sortIndex=V,e(h,H),E||S||(E=!0,Q(W))),H},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(H){var $=y;return function(){var X=y;y=$;try{return H.apply(this,arguments)}finally{y=X}}}})(wu)),wu}var rp;function f0(){return rp||(rp=1,Tu.exports=d0()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function h0(){if(sp)return bn;sp=1;var s=Ed(),e=f0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function y(t){return h.call(_,t)?!0:h.call(g,t)?!1:p.test(t)?_[t]=!0:(g[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,c,f,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,L);v[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,L);v[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,L);v[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,c){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),I=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,P;function V(t){if(P===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+t}var ye=!1;function j(t,i){if(!t||ye)return"";ye=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){c=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}t()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),m=c.stack.split(`
`),M=f.length-1,N=m.length-1;1<=M&&0<=N&&f[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(f[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||f[M]!==m[N]){var B=`
`+f[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=N);break}}}finally{ye=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?V(t):""}function ue(t){switch(t.tag){case 5:return V(t.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return t=j(t.type,!1),t;case 11:return t=j(t.type.render,!1),t;case 1:return t=j(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case ve:return"Profiler";case de:return"StrictMode";case se:return"Suspense";case k:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I:return(t.displayName||"Context")+".Consumer";case T:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ee:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}function Ae(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(t){var i=le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ze(t){t._valueTracker||(t._valueTracker=be(t))}function q(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=le(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function mt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ie(t,i){var o=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function je(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ne(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function tt(t,i){Ne(t,i);var o=fe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?R(t,i.type,o):i.hasOwnProperty("defaultValue")&&R(t,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function R(t,i,o){(i!=="number"||mt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var A=Array.isArray;function te(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Se(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _e(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(A(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:fe(o)}}function Me(t,i){var o=fe(i.value),c=fe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ze,at=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ze.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ge(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(gt).forEach(function(t){ft.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),gt[i]=gt[t]})});function it(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||gt.hasOwnProperty(t)&&gt[t]?(""+i).trim():i+"px"}function qe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=it(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var ke=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function _t(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function ct(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Et=null,U=null,Ee=null;function we(t){if(t=xo(t)){if(typeof Et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Et(t.stateNode,t.type,i))}}function He(t){U?Ee?Ee.push(t):Ee=[t]:U=t}function Ke(){if(U){var t=U,i=Ee;if(Ee=U=null,we(t),i)for(t=0;t<i.length;t++)we(i[t])}}function yt(t,i){return t(i)}function At(){}var Bt=!1;function mn(t,i,o){if(Bt)return t(i,o);Bt=!0;try{return yt(t,i,o)}finally{Bt=!1,(U!==null||Ee!==null)&&(At(),Ke())}}function St(t,i){var o=t.stateNode;if(o===null)return null;var c=ma(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Xt=!1;if(u)try{var on={};Object.defineProperty(on,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Xt=!1}function Yo(t,i,o,c,f,m,M,N,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(me){this.onError(me)}}var wr=!1,Ei=null,Ar=!1,ji=null,$o={onError:function(t){wr=!0,Ei=t}};function Ko(t,i,o,c,f,m,M,N,B){wr=!1,Ei=null,Yo.apply($o,arguments)}function Vl(t,i,o,c,f,m,M,N,B){if(Ko.apply(this,arguments),wr){if(wr){var ne=Ei;wr=!1,Ei=null}else throw Error(n(198));Ar||(Ar=!0,ji=ne)}}function Ti(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(Ti(t)!==t)throw Error(n(188))}function Z(t){var i=t.alternate;if(!i){if(i=Ti(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return C(f),t;if(m===c)return C(f),i;m=m.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=m;else{for(var M=!1,N=f.child;N;){if(N===o){M=!0,o=f,c=m;break}if(N===c){M=!0,c=f,o=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===o){M=!0,o=m,c=f;break}if(N===c){M=!0,c=m,o=f;break}N=N.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function re(t){return t=Z(t),t!==null?oe(t):null}function oe(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=oe(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,Xe=e.unstable_shouldYield,et=e.unstable_requestPaint,De=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,rt=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,bt=e.unstable_NormalPriority,gn=e.unstable_LowPriority,Ht=e.unstable_IdlePriority,Mn=null,vt=null;function ut(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Mn,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Qo,Ut=Math.log,wi=Math.LN2;function Qo(t){return t>>>=0,t===0?32:31-(Ut(t)/wi|0)|0}var fi=64,qi=4194304;function zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,m=t.pingedLanes,M=o&268435455;if(M!==0){var N=M&~f;N!==0?c=zt(N):(m&=M,m!==0&&(c=zt(m)))}else M=o&~f,M!==0?c=zt(M):m!==0&&(c=zt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-vn(i),f=1<<o,c|=t[o],i&=~f;return c}function eo(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var M=31-vn(m),N=1<<M,B=f[M];B===-1?((N&o)===0||(N&c)!==0)&&(f[M]=eo(N,i)):B<=i&&(t.expiredLanes|=N),m&=~N}}function Rr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jo(){var t=fi;return fi<<=1,(fi&4194240)===0&&(fi=64),t}function es(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function to(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vn(i),t[i]=o}function bg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-vn(o),m=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~m}}function Wl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-vn(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var Rt=0;function Pd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ld,Xl,Dd,Nd,Ud,jl=!1,ea=[],Yi=null,$i=null,Ki=null,no=new Map,io=new Map,Zi=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":no.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(i.pointerId)}}function ro(t,i,o,c,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=xo(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Lg(t,i,o,c,f){switch(i){case"focusin":return Yi=ro(Yi,t,i,o,c,f),!0;case"dragenter":return $i=ro($i,t,i,o,c,f),!0;case"mouseover":return Ki=ro(Ki,t,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return no.set(m,ro(no.get(m)||null,t,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,io.set(m,ro(io.get(m)||null,t,i,o,c,f)),!0}return!1}function Fd(t){var i=Cr(t.target);if(i!==null){var o=Ti(i);if(o!==null){if(i=o.tag,i===13){if(i=Zo(o),i!==null){t.blockedOn=i,Ud(t.priority,function(){Dd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);wt=c,o.target.dispatchEvent(c),wt=null}else return i=xo(o),i!==null&&Xl(i),t.blockedOn=o,!1;i.shift()}return!0}function Od(t,i,o){ta(t)&&o.delete(i)}function Dg(){jl=!1,Yi!==null&&ta(Yi)&&(Yi=null),$i!==null&&ta($i)&&($i=null),Ki!==null&&ta(Ki)&&(Ki=null),no.forEach(Od),io.forEach(Od)}function so(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dg)))}function oo(t){function i(f){return so(f,t)}if(0<ea.length){so(ea[0],t);for(var o=1;o<ea.length;o++){var c=ea[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Yi!==null&&so(Yi,t),$i!==null&&so($i,t),Ki!==null&&so(Ki,t),no.forEach(i),io.forEach(i),o=0;o<Zi.length;o++)c=Zi[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Fd(o),o.blockedOn===null&&Zi.shift()}var ts=D.ReactCurrentBatchConfig,na=!0;function Ng(t,i,o,c){var f=Rt,m=ts.transition;ts.transition=null;try{Rt=1,ql(t,i,o,c)}finally{Rt=f,ts.transition=m}}function Ug(t,i,o,c){var f=Rt,m=ts.transition;ts.transition=null;try{Rt=4,ql(t,i,o,c)}finally{Rt=f,ts.transition=m}}function ql(t,i,o,c){if(na){var f=Yl(t,i,o,c);if(f===null)dc(t,i,c,ia,o),Id(t,c);else if(Lg(f,t,i,o,c))c.stopPropagation();else if(Id(t,c),i&4&&-1<Pg.indexOf(t)){for(;f!==null;){var m=xo(f);if(m!==null&&Ld(m),m=Yl(t,i,o,c),m===null&&dc(t,i,c,ia,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else dc(t,i,c,null,o)}}var ia=null;function Yl(t,i,o,c){if(ia=null,t=ct(c),t=Cr(t),t!==null)if(i=Ti(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Zo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function zd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case rt:return 1;case ot:return 4;case bt:case gn:return 16;case Ht:return 536870912;default:return 16}default:return 16}}var Qi=null,$l=null,ra=null;function kd(){if(ra)return ra;var t,i=$l,o=i.length,c,f="value"in Qi?Qi.value:Qi.textContent,m=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(c=1;c<=M&&i[o-c]===f[m-c];c++);return ra=f.slice(t,1<c?1-c:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Bd(){return!1}function On(t){function i(o,c,f,m,M){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?oa:Bd,this.isPropagationStopped=Bd,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=On(ns),ao=X({},ns,{view:0,detail:0}),Ig=On(ao),Zl,Ql,lo,aa=X({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Zl=t.screenX-lo.screenX,Ql=t.screenY-lo.screenY):Ql=Zl=0,lo=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Hd=On(aa),Fg=X({},aa,{dataTransfer:0}),Og=On(Fg),zg=X({},ao,{relatedTarget:0}),Jl=On(zg),kg=X({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=On(kg),Hg=X({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gg=On(Hg),Vg=X({},ns,{data:0}),Gd=On(Vg),Wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=jg[t])?!!i[t]:!1}function ec(){return qg}var Yg=X({},ao,{key:function(t){if(t.key){var i=Wg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$g=On(Yg),Kg=X({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=On(Kg),Zg=X({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),Qg=On(Zg),Jg=X({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=On(Jg),tv=X({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nv=On(tv),iv=[9,13,27,32],tc=u&&"CompositionEvent"in window,co=null;u&&"documentMode"in document&&(co=document.documentMode);var rv=u&&"TextEvent"in window&&!co,Wd=u&&(!tc||co&&8<co&&11>=co),Xd=" ",jd=!1;function qd(t,i){switch(t){case"keyup":return iv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function sv(t,i){switch(t){case"compositionend":return Yd(i);case"keypress":return i.which!==32?null:(jd=!0,Xd);case"textInput":return t=i.data,t===Xd&&jd?null:t;default:return null}}function ov(t,i){if(is)return t==="compositionend"||!tc&&qd(t,i)?(t=kd(),ra=$l=Qi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wd&&i.locale!=="ko"?null:i.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!av[t.type]:i==="textarea"}function Kd(t,i,o,c){He(c),i=fa(i,"onChange"),0<i.length&&(o=new Kl("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var uo=null,fo=null;function lv(t){mf(t,0)}function la(t){var i=ls(t);if(q(i))return t}function cv(t,i){if(t==="change")return i}var Zd=!1;if(u){var nc;if(u){var ic="oninput"in document;if(!ic){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),ic=typeof Qd.oninput=="function"}nc=ic}else nc=!1;Zd=nc&&(!document.documentMode||9<document.documentMode)}function Jd(){uo&&(uo.detachEvent("onpropertychange",ef),fo=uo=null)}function ef(t){if(t.propertyName==="value"&&la(fo)){var i=[];Kd(i,fo,t,ct(t)),mn(lv,i)}}function uv(t,i,o){t==="focusin"?(Jd(),uo=i,fo=o,uo.attachEvent("onpropertychange",ef)):t==="focusout"&&Jd()}function dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(fo)}function fv(t,i){if(t==="click")return la(i)}function hv(t,i){if(t==="input"||t==="change")return la(i)}function pv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:pv;function ho(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!Jn(t[f],i[f]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,i){var o=tf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tf(o)}}function rf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sf(){for(var t=window,i=mt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=mt(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function mv(t){var i=sf(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&rf(o.ownerDocument.documentElement,o)){if(c!==null&&rc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!t.extend&&m>c&&(f=c,c=m,m=f),f=nf(o,m);var M=nf(o,c);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>c?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gv=u&&"documentMode"in document&&11>=document.documentMode,rs=null,sc=null,po=null,oc=!1;function of(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;oc||rs==null||rs!==mt(c)||(c=rs,"selectionStart"in c&&rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),po&&ho(po,c)||(po=c,c=fa(sc,"onSelect"),0<c.length&&(i=new Kl("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=rs)))}function ca(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ss={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},ac={},af={};u&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ua(t){if(ac[t])return ac[t];if(!ss[t])return t;var i=ss[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in af)return ac[t]=i[o];return t}var lf=ua("animationend"),cf=ua("animationiteration"),uf=ua("animationstart"),df=ua("transitionend"),ff=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){ff.set(t,i),l(i,[t])}for(var lc=0;lc<hf.length;lc++){var cc=hf[lc],vv=cc.toLowerCase(),_v=cc[0].toUpperCase()+cc.slice(1);Ji(vv,"on"+_v)}Ji(lf,"onAnimationEnd"),Ji(cf,"onAnimationIteration"),Ji(uf,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(df,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function pf(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Vl(c,i,void 0,t),t.currentTarget=null}function mf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var N=c[M],B=N.instance,ne=N.currentTarget;if(N=N.listener,B!==m&&f.isPropagationStopped())break e;pf(f,N,ne),m=B}else for(M=0;M<c.length;M++){if(N=c[M],B=N.instance,ne=N.currentTarget,N=N.listener,B!==m&&f.isPropagationStopped())break e;pf(f,N,ne),m=B}}}if(Ar)throw t=ji,Ar=!1,ji=null,t}function Lt(t,i){var o=i[vc];o===void 0&&(o=i[vc]=new Set);var c=t+"__bubble";o.has(c)||(gf(i,t,2,!1),o.add(c))}function uc(t,i,o){var c=0;i&&(c|=4),gf(o,t,c,i)}var da="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[da]){t[da]=!0,r.forEach(function(o){o!=="selectionchange"&&(xv.has(o)||uc(o,!1,t),uc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[da]||(i[da]=!0,uc("selectionchange",!1,i))}}function gf(t,i,o,c){switch(zd(i)){case 1:var f=Ng;break;case 4:f=Ug;break;default:f=ql}o=f.bind(null,i,o,t),f=void 0,!Xt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function dc(t,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;N!==null;){if(M=Cr(N),M===null)return;if(B=M.tag,B===5||B===6){c=m=M;continue e}N=N.parentNode}}c=c.return}mn(function(){var ne=m,me=ct(o),xe=[];e:{var pe=ff.get(t);if(pe!==void 0){var Le=Kl,Oe=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":Le=$g;break;case"focusin":Oe="focus",Le=Jl;break;case"focusout":Oe="blur",Le=Jl;break;case"beforeblur":case"afterblur":Le=Jl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Qg;break;case lf:case cf:case uf:Le=Bg;break;case df:Le=ev;break;case"scroll":Le=Ig;break;case"wheel":Le=nv;break;case"copy":case"cut":case"paste":Le=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Vd}var Be=(i&4)!==0,Gt=!Be&&t==="scroll",K=Be?pe!==null?pe+"Capture":null:pe;Be=[];for(var G=ne,J;G!==null;){J=G;var Te=J.stateNode;if(J.tag===5&&Te!==null&&(J=Te,K!==null&&(Te=St(G,K),Te!=null&&Be.push(vo(G,Te,J)))),Gt)break;G=G.return}0<Be.length&&(pe=new Le(pe,Oe,null,o,me),xe.push({event:pe,listeners:Be}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",pe&&o!==wt&&(Oe=o.relatedTarget||o.fromElement)&&(Cr(Oe)||Oe[Ai]))break e;if((Le||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Le?(Oe=o.relatedTarget||o.toElement,Le=ne,Oe=Oe?Cr(Oe):null,Oe!==null&&(Gt=Ti(Oe),Oe!==Gt||Oe.tag!==5&&Oe.tag!==6)&&(Oe=null)):(Le=null,Oe=ne),Le!==Oe)){if(Be=Hd,Te="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Be=Vd,Te="onPointerLeave",K="onPointerEnter",G="pointer"),Gt=Le==null?pe:ls(Le),J=Oe==null?pe:ls(Oe),pe=new Be(Te,G+"leave",Le,o,me),pe.target=Gt,pe.relatedTarget=J,Te=null,Cr(me)===ne&&(Be=new Be(K,G+"enter",Oe,o,me),Be.target=J,Be.relatedTarget=Gt,Te=Be),Gt=Te,Le&&Oe)t:{for(Be=Le,K=Oe,G=0,J=Be;J;J=os(J))G++;for(J=0,Te=K;Te;Te=os(Te))J++;for(;0<G-J;)Be=os(Be),G--;for(;0<J-G;)K=os(K),J--;for(;G--;){if(Be===K||K!==null&&Be===K.alternate)break t;Be=os(Be),K=os(K)}Be=null}else Be=null;Le!==null&&vf(xe,pe,Le,Be,!1),Oe!==null&&Gt!==null&&vf(xe,Gt,Oe,Be,!0)}}e:{if(pe=ne?ls(ne):window,Le=pe.nodeName&&pe.nodeName.toLowerCase(),Le==="select"||Le==="input"&&pe.type==="file")var Ve=cv;else if($d(pe))if(Zd)Ve=hv;else{Ve=dv;var Qe=uv}else(Le=pe.nodeName)&&Le.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Ve=fv);if(Ve&&(Ve=Ve(t,ne))){Kd(xe,Ve,o,me);break e}Qe&&Qe(t,pe,ne),t==="focusout"&&(Qe=pe._wrapperState)&&Qe.controlled&&pe.type==="number"&&R(pe,"number",pe.value)}switch(Qe=ne?ls(ne):window,t){case"focusin":($d(Qe)||Qe.contentEditable==="true")&&(rs=Qe,sc=ne,po=null);break;case"focusout":po=sc=rs=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,of(xe,o,me);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":of(xe,o,me)}var Je;if(tc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else is?qd(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Wd&&o.locale!=="ko"&&(is||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&is&&(Je=kd()):(Qi=me,$l="value"in Qi?Qi.value:Qi.textContent,is=!0)),Qe=fa(ne,nt),0<Qe.length&&(nt=new Gd(nt,t,null,o,me),xe.push({event:nt,listeners:Qe}),Je?nt.data=Je:(Je=Yd(o),Je!==null&&(nt.data=Je)))),(Je=rv?sv(t,o):ov(t,o))&&(ne=fa(ne,"onBeforeInput"),0<ne.length&&(me=new Gd("onBeforeInput","beforeinput",null,o,me),xe.push({event:me,listeners:ne}),me.data=Je))}mf(xe,i)})}function vo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function fa(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=St(t,o),m!=null&&c.unshift(vo(t,m,f)),m=St(t,i),m!=null&&c.push(vo(t,m,f))),t=t.return}return c}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vf(t,i,o,c,f){for(var m=i._reactName,M=[];o!==null&&o!==c;){var N=o,B=N.alternate,ne=N.stateNode;if(B!==null&&B===c)break;N.tag===5&&ne!==null&&(N=ne,f?(B=St(o,m),B!=null&&M.unshift(vo(o,B,N))):f||(B=St(o,m),B!=null&&M.push(vo(o,B,N)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var yv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(yv,`
`).replace(Sv,"")}function ha(t,i,o){if(i=_f(i),_f(t)!==i&&o)throw Error(n(425))}function pa(){}var fc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,xf=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof xf<"u"?function(t){return xf.resolve(null).then(t).catch(Tv)}:mc;function Tv(t){setTimeout(function(){throw t})}function gc(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),oo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);oo(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),hi="__reactFiber$"+as,_o="__reactProps$"+as,Ai="__reactContainer$"+as,vc="__reactEvents$"+as,wv="__reactListeners$"+as,Av="__reactHandles$"+as;function Cr(t){var i=t[hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=yf(t);t!==null;){if(o=t[hi])return o;t=yf(t)}return i}t=o,o=t.parentNode}return null}function xo(t){return t=t[hi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[_o]||null}var _c=[],cs=-1;function tr(t){return{current:t}}function Dt(t){0>cs||(t.current=_c[cs],_c[cs]=null,cs--)}function Pt(t,i){cs++,_c[cs]=t.current,t.current=i}var nr={},an=tr(nr),Tn=tr(!1),br=nr;function us(t,i){var o=t.type.contextTypes;if(!o)return nr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function wn(t){return t=t.childContextTypes,t!=null}function ga(){Dt(Tn),Dt(an)}function Sf(t,i,o){if(an.current!==nr)throw Error(n(168));Pt(an,i),Pt(Tn,o)}function Mf(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,Ae(t)||"Unknown",f));return X({},o,c)}function va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,br=an.current,Pt(an,t),Pt(Tn,Tn.current),!0}function Ef(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=Mf(t,i,br),c.__reactInternalMemoizedMergedChildContext=t,Dt(Tn),Dt(an),Pt(an,t)):Dt(Tn),Pt(Tn,o)}var Ri=null,_a=!1,xc=!1;function Tf(t){Ri===null?Ri=[t]:Ri.push(t)}function Rv(t){_a=!0,Tf(t)}function ir(){if(!xc&&Ri!==null){xc=!0;var t=0,i=Rt;try{var o=Ri;for(Rt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ri=null,_a=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(t+1)),ie(rt,ir),f}finally{Rt=i,xc=!1}}return null}var ds=[],fs=0,xa=null,ya=0,Wn=[],Xn=0,Pr=null,Ci=1,bi="";function Lr(t,i){ds[fs++]=ya,ds[fs++]=xa,xa=t,ya=i}function wf(t,i,o){Wn[Xn++]=Ci,Wn[Xn++]=bi,Wn[Xn++]=Pr,Pr=t;var c=Ci;t=bi;var f=32-vn(c)-1;c&=~(1<<f),o+=1;var m=32-vn(i)+f;if(30<m){var M=f-f%5;m=(c&(1<<M)-1).toString(32),c>>=M,f-=M,Ci=1<<32-vn(i)+f|o<<f|c,bi=m+t}else Ci=1<<m|o<<f|c,bi=t}function yc(t){t.return!==null&&(Lr(t,1),wf(t,1,0))}function Sc(t){for(;t===xa;)xa=ds[--fs],ds[fs]=null,ya=ds[--fs],ds[fs]=null;for(;t===Pr;)Pr=Wn[--Xn],Wn[Xn]=null,bi=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null}var zn=null,kn=null,It=!1,ei=null;function Af(t,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Rf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,kn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,zn=t,kn=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(It){var i=kn;if(i){var o=i;if(!Rf(t,i)){if(Mc(t))throw Error(n(418));i=er(o.nextSibling);var c=zn;i&&Rf(t,i)?Af(c,o):(t.flags=t.flags&-4097|2,It=!1,zn=t)}}else{if(Mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,zn=t}}}function Cf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Sa(t){if(t!==zn)return!1;if(!It)return Cf(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=kn)){if(Mc(t))throw bf(),Error(n(418));for(;i;)Af(t,i),i=er(i.nextSibling)}if(Cf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=zn?er(t.stateNode.nextSibling):null;return!0}function bf(){for(var t=kn;t;)t=er(t.nextSibling)}function hs(){kn=zn=null,It=!1}function Tc(t){ei===null?ei=[t]:ei.push(t)}var Cv=D.ReactCurrentBatchConfig;function yo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=f.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Pf(t){var i=t._init;return i(t._payload)}function Lf(t){function i(K,G){if(t){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function o(K,G){if(!t)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function f(K,G){return K=dr(K,G),K.index=0,K.sibling=null,K}function m(K,G,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=2,G):J):(K.flags|=2,G)):(K.flags|=1048576,G)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function N(K,G,J,Te){return G===null||G.tag!==6?(G=mu(J,K.mode,Te),G.return=K,G):(G=f(G,J),G.return=K,G)}function B(K,G,J,Te){var Ve=J.type;return Ve===F?me(K,G,J.props.children,Te,J.key):G!==null&&(G.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Q&&Pf(Ve)===G.type)?(Te=f(G,J.props),Te.ref=yo(K,G,J),Te.return=K,Te):(Te=ja(J.type,J.key,J.props,null,K.mode,Te),Te.ref=yo(K,G,J),Te.return=K,Te)}function ne(K,G,J,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=gu(J,K.mode,Te),G.return=K,G):(G=f(G,J.children||[]),G.return=K,G)}function me(K,G,J,Te,Ve){return G===null||G.tag!==7?(G=kr(J,K.mode,Te,Ve),G.return=K,G):(G=f(G,J),G.return=K,G)}function xe(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=mu(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return J=ja(G.type,G.key,G.props,null,K.mode,J),J.ref=yo(K,null,G),J.return=K,J;case z:return G=gu(G,K.mode,J),G.return=K,G;case Q:var Te=G._init;return xe(K,Te(G._payload),J)}if(A(G)||$(G))return G=kr(G,K.mode,J,null),G.return=K,G;Ma(K,G)}return null}function pe(K,G,J,Te){var Ve=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ve!==null?null:N(K,G,""+J,Te);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case W:return J.key===Ve?B(K,G,J,Te):null;case z:return J.key===Ve?ne(K,G,J,Te):null;case Q:return Ve=J._init,pe(K,G,Ve(J._payload),Te)}if(A(J)||$(J))return Ve!==null?null:me(K,G,J,Te,null);Ma(K,J)}return null}function Le(K,G,J,Te,Ve){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(J)||null,N(G,K,""+Te,Ve);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return K=K.get(Te.key===null?J:Te.key)||null,B(G,K,Te,Ve);case z:return K=K.get(Te.key===null?J:Te.key)||null,ne(G,K,Te,Ve);case Q:var Qe=Te._init;return Le(K,G,J,Qe(Te._payload),Ve)}if(A(Te)||$(Te))return K=K.get(J)||null,me(G,K,Te,Ve,null);Ma(G,Te)}return null}function Oe(K,G,J,Te){for(var Ve=null,Qe=null,Je=G,nt=G=0,Jt=null;Je!==null&&nt<J.length;nt++){Je.index>nt?(Jt=Je,Je=null):Jt=Je.sibling;var Mt=pe(K,Je,J[nt],Te);if(Mt===null){Je===null&&(Je=Jt);break}t&&Je&&Mt.alternate===null&&i(K,Je),G=m(Mt,G,nt),Qe===null?Ve=Mt:Qe.sibling=Mt,Qe=Mt,Je=Jt}if(nt===J.length)return o(K,Je),It&&Lr(K,nt),Ve;if(Je===null){for(;nt<J.length;nt++)Je=xe(K,J[nt],Te),Je!==null&&(G=m(Je,G,nt),Qe===null?Ve=Je:Qe.sibling=Je,Qe=Je);return It&&Lr(K,nt),Ve}for(Je=c(K,Je);nt<J.length;nt++)Jt=Le(Je,K,nt,J[nt],Te),Jt!==null&&(t&&Jt.alternate!==null&&Je.delete(Jt.key===null?nt:Jt.key),G=m(Jt,G,nt),Qe===null?Ve=Jt:Qe.sibling=Jt,Qe=Jt);return t&&Je.forEach(function(fr){return i(K,fr)}),It&&Lr(K,nt),Ve}function Be(K,G,J,Te){var Ve=$(J);if(typeof Ve!="function")throw Error(n(150));if(J=Ve.call(J),J==null)throw Error(n(151));for(var Qe=Ve=null,Je=G,nt=G=0,Jt=null,Mt=J.next();Je!==null&&!Mt.done;nt++,Mt=J.next()){Je.index>nt?(Jt=Je,Je=null):Jt=Je.sibling;var fr=pe(K,Je,Mt.value,Te);if(fr===null){Je===null&&(Je=Jt);break}t&&Je&&fr.alternate===null&&i(K,Je),G=m(fr,G,nt),Qe===null?Ve=fr:Qe.sibling=fr,Qe=fr,Je=Jt}if(Mt.done)return o(K,Je),It&&Lr(K,nt),Ve;if(Je===null){for(;!Mt.done;nt++,Mt=J.next())Mt=xe(K,Mt.value,Te),Mt!==null&&(G=m(Mt,G,nt),Qe===null?Ve=Mt:Qe.sibling=Mt,Qe=Mt);return It&&Lr(K,nt),Ve}for(Je=c(K,Je);!Mt.done;nt++,Mt=J.next())Mt=Le(Je,K,nt,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Je.delete(Mt.key===null?nt:Mt.key),G=m(Mt,G,nt),Qe===null?Ve=Mt:Qe.sibling=Mt,Qe=Mt);return t&&Je.forEach(function(a0){return i(K,a0)}),It&&Lr(K,nt),Ve}function Gt(K,G,J,Te){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case W:e:{for(var Ve=J.key,Qe=G;Qe!==null;){if(Qe.key===Ve){if(Ve=J.type,Ve===F){if(Qe.tag===7){o(K,Qe.sibling),G=f(Qe,J.props.children),G.return=K,K=G;break e}}else if(Qe.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Q&&Pf(Ve)===Qe.type){o(K,Qe.sibling),G=f(Qe,J.props),G.ref=yo(K,Qe,J),G.return=K,K=G;break e}o(K,Qe);break}else i(K,Qe);Qe=Qe.sibling}J.type===F?(G=kr(J.props.children,K.mode,Te,J.key),G.return=K,K=G):(Te=ja(J.type,J.key,J.props,null,K.mode,Te),Te.ref=yo(K,G,J),Te.return=K,K=Te)}return M(K);case z:e:{for(Qe=J.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){o(K,G.sibling),G=f(G,J.children||[]),G.return=K,K=G;break e}else{o(K,G);break}else i(K,G);G=G.sibling}G=gu(J,K.mode,Te),G.return=K,K=G}return M(K);case Q:return Qe=J._init,Gt(K,G,Qe(J._payload),Te)}if(A(J))return Oe(K,G,J,Te);if($(J))return Be(K,G,J,Te);Ma(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(o(K,G.sibling),G=f(G,J),G.return=K,K=G):(o(K,G),G=mu(J,K.mode,Te),G.return=K,K=G),M(K)):o(K,G)}return Gt}var ps=Lf(!0),Df=Lf(!1),Ea=tr(null),Ta=null,ms=null,wc=null;function Ac(){wc=ms=Ta=null}function Rc(t){var i=Ea.current;Dt(Ea),t._currentValue=i}function Cc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function gs(t,i){Ta=t,wc=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(Ta===null)throw Error(n(308));ms=t,Ta.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var Dr=null;function bc(t){Dr===null?Dr=[t]:Dr.push(t)}function Nf(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,bc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Pi(t,c)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Pi(t,o)}return f=c.interleaved,f===null?(i.next=i,bc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Pi(t,o)}function wa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Wl(t,o)}}function If(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,c){var f=t.updateQueue;rr=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var B=N,ne=B.next;B.next=null,M===null?m=ne:M.next=ne,M=B;var me=t.alternate;me!==null&&(me=me.updateQueue,N=me.lastBaseUpdate,N!==M&&(N===null?me.firstBaseUpdate=ne:N.next=ne,me.lastBaseUpdate=B))}if(m!==null){var xe=f.baseState;M=0,me=ne=B=null,N=m;do{var pe=N.lane,Le=N.eventTime;if((c&pe)===pe){me!==null&&(me=me.next={eventTime:Le,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Oe=t,Be=N;switch(pe=i,Le=o,Be.tag){case 1:if(Oe=Be.payload,typeof Oe=="function"){xe=Oe.call(Le,xe,pe);break e}xe=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Be.payload,pe=typeof Oe=="function"?Oe.call(Le,xe,pe):Oe,pe==null)break e;xe=X({},xe,pe);break e;case 2:rr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,pe=f.effects,pe===null?f.effects=[N]:pe.push(N))}else Le={eventTime:Le,lane:pe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},me===null?(ne=me=Le,B=xe):me=me.next=Le,M|=pe;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;pe=N,N=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);if(me===null&&(B=xe),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=me,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Ir|=M,t.lanes=M,t.memoizedState=xe}}function Ff(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var So={},pi=tr(So),Mo=tr(So),Eo=tr(So);function Nr(t){if(t===So)throw Error(n(174));return t}function Lc(t,i){switch(Pt(Eo,i),Pt(Mo,t),Pt(pi,So),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Fe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Fe(i,t)}Dt(pi),Pt(pi,i)}function vs(){Dt(pi),Dt(Mo),Dt(Eo)}function Of(t){Nr(Eo.current);var i=Nr(pi.current),o=Fe(i,t.type);i!==o&&(Pt(Mo,t),Pt(pi,o))}function Dc(t){Mo.current===t&&(Dt(pi),Dt(Mo))}var Ft=tr(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Uc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Ca=D.ReactCurrentDispatcher,Ic=D.ReactCurrentBatchConfig,Ur=0,Ot=null,jt=null,Zt=null,ba=!1,To=!1,wo=0,bv=0;function ln(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Oc(t,i,o,c,f,m){if(Ur=m,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?Nv:Uv,t=o(c,f),To){m=0;do{if(To=!1,wo=0,25<=m)throw Error(n(301));m+=1,Zt=jt=null,i.updateQueue=null,Ca.current=Iv,t=o(c,f)}while(To)}if(Ca.current=Da,i=jt!==null&&jt.next!==null,Ur=0,Zt=jt=Ot=null,ba=!1,i)throw Error(n(300));return t}function zc(){var t=wo!==0;return wo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function qn(){if(jt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,jt=t;else{if(t===null)throw Error(n(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Ao(t,i){return typeof i=="function"?i(t):i}function kc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=jt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var N=M=null,B=null,ne=m;do{var me=ne.lane;if((Ur&me)===me)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:t(c,ne.action);else{var xe={lane:me,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(N=B=xe,M=c):B=B.next=xe,Ot.lanes|=me,Ir|=me}ne=ne.next}while(ne!==null&&ne!==m);B===null?M=c:B.next=N,Jn(c,i.memoizedState)||(An=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=B,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do m=f.lane,Ot.lanes|=m,Ir|=m,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Bc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);Jn(m,i.memoizedState)||(An=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function zf(){}function kf(t,i){var o=Ot,c=qn(),f=i(),m=!Jn(c.memoizedState,f);if(m&&(c.memoizedState=f,An=!0),c=c.queue,Hc(Gf.bind(null,o,c,t),[t]),c.getSnapshot!==i||m||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,Ro(9,Hf.bind(null,o,c,f,i),void 0,null),Qt===null)throw Error(n(349));(Ur&30)!==0||Bf(o,i,f)}return f}function Bf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Hf(t,i,o,c){i.value=o,i.getSnapshot=c,Vf(i)&&Wf(t)}function Gf(t,i,o){return o(function(){Vf(i)&&Wf(t)})}function Vf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function Wf(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function Xf(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=Dv.bind(null,Ot,t),[i.memoizedState,t]}function Ro(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function jf(){return qn().memoizedState}function Pa(t,i,o,c){var f=mi();Ot.flags|=t,f.memoizedState=Ro(1|i,o,void 0,c===void 0?null:c)}function La(t,i,o,c){var f=qn();c=c===void 0?null:c;var m=void 0;if(jt!==null){var M=jt.memoizedState;if(m=M.destroy,c!==null&&Fc(c,M.deps)){f.memoizedState=Ro(i,o,m,c);return}}Ot.flags|=t,f.memoizedState=Ro(1|i,o,m,c)}function qf(t,i){return Pa(8390656,8,t,i)}function Hc(t,i){return La(2048,8,t,i)}function Yf(t,i){return La(4,2,t,i)}function $f(t,i){return La(4,4,t,i)}function Kf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Zf(t,i,o){return o=o!=null?o.concat([t]):null,La(4,4,Kf.bind(null,i,t),o)}function Gc(){}function Qf(t,i){var o=qn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Jf(t,i){var o=qn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Fc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function eh(t,i,o){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=o):(Jn(o,i)||(o=Jo(),Ot.lanes|=o,Ir|=o,t.baseState=!0),i)}function Pv(t,i){var o=Rt;Rt=o!==0&&4>o?o:4,t(!0);var c=Ic.transition;Ic.transition={};try{t(!1),i()}finally{Rt=o,Ic.transition=c}}function th(){return qn().memoizedState}function Lv(t,i,o){var c=cr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},nh(t))ih(i,o);else if(o=Nf(t,i,o,c),o!==null){var f=xn();ri(o,t,c,f),rh(o,i,c)}}function Dv(t,i,o){var c=cr(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(nh(t))ih(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,o);if(f.hasEagerState=!0,f.eagerState=N,Jn(N,M)){var B=i.interleaved;B===null?(f.next=f,bc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=Nf(t,i,f,c),o!==null&&(f=xn(),ri(o,t,c,f),rh(o,i,c))}}function nh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function ih(t,i){To=ba=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function rh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Wl(t,o)}}var Da={readContext:jn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Nv={readContext:jn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:qf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4194308,4,Kf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Pa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Pa(4,2,t,i)},useMemo:function(t,i){var o=mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=mi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Lv.bind(null,Ot,t),[c.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:Xf,useDebugValue:Gc,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Xf(!1),i=t[0];return t=Pv.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=Ot,f=mi();if(It){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(Ur&30)!==0||Bf(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,qf(Gf.bind(null,c,m,t),[t]),c.flags|=2048,Ro(9,Hf.bind(null,c,m,o,i),void 0,null),o},useId:function(){var t=mi(),i=Qt.identifierPrefix;if(It){var o=bi,c=Ci;o=(c&~(1<<32-vn(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=wo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=bv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Uv={readContext:jn,useCallback:Qf,useContext:jn,useEffect:Hc,useImperativeHandle:Zf,useInsertionEffect:Yf,useLayoutEffect:$f,useMemo:Jf,useReducer:kc,useRef:jf,useState:function(){return kc(Ao)},useDebugValue:Gc,useDeferredValue:function(t){var i=qn();return eh(i,jt.memoizedState,t)},useTransition:function(){var t=kc(Ao)[0],i=qn().memoizedState;return[t,i]},useMutableSource:zf,useSyncExternalStore:kf,useId:th,unstable_isNewReconciler:!1},Iv={readContext:jn,useCallback:Qf,useContext:jn,useEffect:Hc,useImperativeHandle:Zf,useInsertionEffect:Yf,useLayoutEffect:$f,useMemo:Jf,useReducer:Bc,useRef:jf,useState:function(){return Bc(Ao)},useDebugValue:Gc,useDeferredValue:function(t){var i=qn();return jt===null?i.memoizedState=t:eh(i,jt.memoizedState,t)},useTransition:function(){var t=Bc(Ao)[0],i=qn().memoizedState;return[t,i]},useMutableSource:zf,useSyncExternalStore:kf,useId:th,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=X({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Vc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:X({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Na={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=xn(),f=cr(t),m=Li(c,f);m.payload=i,o!=null&&(m.callback=o),i=sr(t,m,f),i!==null&&(ri(i,t,f,c),wa(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=xn(),f=cr(t),m=Li(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=sr(t,m,f),i!==null&&(ri(i,t,f,c),wa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=xn(),c=cr(t),f=Li(o,c);f.tag=2,i!=null&&(f.callback=i),i=sr(t,f,c),i!==null&&(ri(i,t,c,o),wa(i,t,c))}};function sh(t,i,o,c,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!ho(o,c)||!ho(f,m):!0}function oh(t,i,o){var c=!1,f=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=jn(m):(f=wn(i)?br:an.current,c=i.contextTypes,m=(c=c!=null)?us(t,f):nr),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Na,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function ah(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Na.enqueueReplaceState(i,i.state,null)}function Wc(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Pc(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=jn(m):(m=wn(i)?br:an.current,f.context=us(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Vc(t,i,m,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Na.enqueueReplaceState(f,f.state,null),Aa(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",c=i;do o+=ue(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function Xc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function jc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Fv=typeof WeakMap=="function"?WeakMap:Map;function lh(t,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Ba||(Ba=!0,au=c),jc(t,i)},o}function ch(t,i,o){o=Li(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){jc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){jc(t,i),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function uh(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new Fv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=Kv.bind(null,t,i,o),i.then(t,t))}function dh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function fh(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Ov=D.ReactCurrentOwner,An=!1;function _n(t,i,o,c){i.child=t===null?Df(i,null,o,c):ps(i,t.child,o,c)}function hh(t,i,o,c,f){o=o.render;var m=i.ref;return gs(i,f),c=Oc(t,i,o,c,m,f),o=zc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(It&&o&&yc(i),i.flags|=1,_n(t,i,c,f),i.child)}function ph(t,i,o,c,f){if(t===null){var m=o.type;return typeof m=="function"&&!pu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,mh(t,i,m,c,f)):(t=ja(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:ho,o(M,c)&&t.ref===i.ref)return Di(t,i,f)}return i.flags|=1,t=dr(m,c),t.ref=i.ref,t.return=i,i.child=t}function mh(t,i,o,c,f){if(t!==null){var m=t.memoizedProps;if(ho(m,c)&&t.ref===i.ref)if(An=!1,i.pendingProps=c=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Di(t,i,f)}return qc(t,i,o,c,f)}function gh(t,i,o){var c=i.pendingProps,f=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ys,Bn),Bn|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(ys,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Pt(ys,Bn),Bn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Pt(ys,Bn),Bn|=c;return _n(t,i,f,o),i.child}function vh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,o,c,f){var m=wn(o)?br:an.current;return m=us(i,m),gs(i,f),o=Oc(t,i,o,c,m,f),c=zc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(It&&c&&yc(i),i.flags|=1,_n(t,i,o,f),i.child)}function _h(t,i,o,c,f){if(wn(o)){var m=!0;va(i)}else m=!1;if(gs(i,f),i.stateNode===null)Ia(t,i),oh(i,o,c),Wc(i,o,c,f),c=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var B=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=jn(ne):(ne=wn(o)?br:an.current,ne=us(i,ne));var me=o.getDerivedStateFromProps,xe=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==c||B!==ne)&&ah(i,M,c,ne),rr=!1;var pe=i.memoizedState;M.state=pe,Aa(i,c,M,f),B=i.memoizedState,N!==c||pe!==B||Tn.current||rr?(typeof me=="function"&&(Vc(i,o,me,c),B=i.memoizedState),(N=rr||sh(i,o,N,c,pe,B,ne))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),M.props=c,M.state=B,M.context=ne,c=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Uf(t,i),N=i.memoizedProps,ne=i.type===i.elementType?N:ti(i.type,N),M.props=ne,xe=i.pendingProps,pe=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=wn(o)?br:an.current,B=us(i,B));var Le=o.getDerivedStateFromProps;(me=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==xe||pe!==B)&&ah(i,M,c,B),rr=!1,pe=i.memoizedState,M.state=pe,Aa(i,c,M,f);var Oe=i.memoizedState;N!==xe||pe!==Oe||Tn.current||rr?(typeof Le=="function"&&(Vc(i,o,Le,c),Oe=i.memoizedState),(ne=rr||sh(i,o,ne,c,pe,Oe,B)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Oe,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Oe,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Oe),M.props=c,M.state=Oe,M.context=B,c=ne):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),c=!1)}return Yc(t,i,o,c,m,f)}function Yc(t,i,o,c,f,m){vh(t,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&Ef(i,o,!1),Di(t,i,m);c=i.stateNode,Ov.current=i;var N=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&M?(i.child=ps(i,t.child,null,m),i.child=ps(i,null,N,m)):_n(t,i,N,m),i.memoizedState=c.state,f&&Ef(i,o,!0),i.child}function xh(t){var i=t.stateNode;i.pendingContext?Sf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Sf(t,i.context,!1),Lc(t,i.containerInfo)}function yh(t,i,o,c,f){return hs(),Tc(f),i.flags|=256,_n(t,i,o,c),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sh(t,i,o){var c=i.pendingProps,f=Ft.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Pt(Ft,f&1),t===null)return Ec(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,t=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=qa(M,c,0,null),t=kr(t,c,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=Kc(o),i.memoizedState=$c,t):Zc(i,M));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return zv(t,i,M,c,N,f,o);if(m){m=c.fallback,M=i.mode,f=t.child,N=f.sibling;var B={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=dr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?m=dr(N,m):(m=kr(m,M,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=t.child.memoizedState,M=M===null?Kc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=t.childLanes&~o,i.memoizedState=$c,c}return m=t.child,t=m.sibling,c=dr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Zc(t,i){return i=qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,o,c){return c!==null&&Tc(c),ps(i,t.child,null,o),t=Zc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function zv(t,i,o,c,f,m,M){if(o)return i.flags&256?(i.flags&=-257,c=Xc(Error(n(422))),Ua(t,i,M,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=qa({mode:"visible",children:c.children},f,0,null),m=kr(m,f,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ps(i,t.child,null,M),i.child.memoizedState=Kc(M),i.memoizedState=$c,m);if((i.mode&1)===0)return Ua(t,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(n(419)),c=Xc(m,c,void 0),Ua(t,i,M,c)}if(N=(M&t.childLanes)!==0,An||N){if(c=Qt,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Pi(t,f),ri(c,t,f,-1))}return hu(),c=Xc(Error(n(421))),Ua(t,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Zv.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,kn=er(f.nextSibling),zn=i,It=!0,ei=null,t!==null&&(Wn[Xn++]=Ci,Wn[Xn++]=bi,Wn[Xn++]=Pr,Ci=t.id,bi=t.overflow,Pr=i),i=Zc(i,c.children),i.flags|=4096,i)}function Mh(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Cc(t.return,i,o)}function Qc(t,i,o,c,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Eh(t,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(_n(t,i,c.children,o),c=Ft.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mh(t,o,i);else if(t.tag===19)Mh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Pt(Ft,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Qc(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ra(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Qc(i,!0,o,null,m);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function kv(t,i,o){switch(i.tag){case 3:xh(i),hs();break;case 5:Of(i);break;case 1:wn(i.type)&&va(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Pt(Ea,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Pt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Sh(t,i,o):(Pt(Ft,Ft.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Pt(Ft,Ft.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Eh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Pt(Ft,Ft.current),c)break;return null;case 22:case 23:return i.lanes=0,gh(t,i,o)}return Di(t,i,o)}var Th,Jc,wh,Ah;Th=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Jc=function(){},wh=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Nr(pi.current);var m=null;switch(o){case"input":f=Ie(t,f),c=Ie(t,c),m=[];break;case"select":f=X({},f,{value:void 0}),c=X({},c,{value:void 0}),m=[];break;case"textarea":f=Se(t,f),c=Se(t,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=pa)}st(o,c);var M;o=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var N=f[ne];for(M in N)N.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in c){var B=c[ne];if(N=f!=null?f[ne]:void 0,c.hasOwnProperty(ne)&&B!==N&&(B!=null||N!=null))if(ne==="style")if(N){for(M in N)!N.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&N[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(m||(m=[]),m.push(ne,o)),o=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(m=m||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&Lt("scroll",t),m||N===B||(m=[])):(m=m||[]).push(ne,B))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},Ah=function(t,i,o,c){o!==c&&(i.flags|=4)};function Co(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function Bv(t,i,o){var c=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return wn(i.type)&&ga(),cn(i),null;case 3:return c=i.stateNode,vs(),Dt(Tn),Dt(an),Uc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(uu(ei),ei=null))),Jc(t,i),cn(i),null;case 5:Dc(i);var f=Nr(Eo.current);if(o=i.type,t!==null&&i.stateNode!=null)wh(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Nr(pi.current),Sa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[hi]=i,c[_o]=m,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",c),Lt("close",c);break;case"iframe":case"object":case"embed":Lt("load",c);break;case"video":case"audio":for(f=0;f<mo.length;f++)Lt(mo[f],c);break;case"source":Lt("error",c);break;case"img":case"image":case"link":Lt("error",c),Lt("load",c);break;case"details":Lt("toggle",c);break;case"input":je(c,m),Lt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Lt("invalid",c);break;case"textarea":_e(c,m),Lt("invalid",c)}st(o,m),f=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&ha(c.textContent,N,t),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&ha(c.textContent,N,t),f=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Lt("scroll",c)}switch(o){case"input":ze(c),$e(c,m,!0);break;case"textarea":ze(c),Ge(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=pa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=M.createElement(o,{is:c.is}):(t=M.createElement(o),o==="select"&&(M=t,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):t=M.createElementNS(t,o),t[hi]=i,t[_o]=c,Th(t,i,!1,!1),i.stateNode=t;e:{switch(M=_t(o,c),o){case"dialog":Lt("cancel",t),Lt("close",t),f=c;break;case"iframe":case"object":case"embed":Lt("load",t),f=c;break;case"video":case"audio":for(f=0;f<mo.length;f++)Lt(mo[f],t);f=c;break;case"source":Lt("error",t),f=c;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),f=c;break;case"details":Lt("toggle",t),f=c;break;case"input":je(t,c),f=Ie(t,c),Lt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=X({},c,{value:void 0}),Lt("invalid",t);break;case"textarea":_e(t,c),f=Se(t,c),Lt("invalid",t);break;default:f=c}st(o,f),N=f;for(m in N)if(N.hasOwnProperty(m)){var B=N[m];m==="style"?qe(t,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&at(t,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ge(t,B):typeof B=="number"&&ge(t,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Lt("scroll",t):B!=null&&b(t,m,B,M))}switch(o){case"input":ze(t),$e(t,c,!1);break;case"textarea":ze(t),Ge(t);break;case"option":c.value!=null&&t.setAttribute("value",""+fe(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?te(t,!!c.multiple,m,!1):c.defaultValue!=null&&te(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Ah(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Nr(Eo.current),Nr(pi.current),Sa(i)){if(c=i.stateNode,o=i.memoizedProps,c[hi]=i,(m=c.nodeValue!==o)&&(t=zn,t!==null))switch(t.tag){case 3:ha(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(c.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[hi]=i,i.stateNode=c}return cn(i),null;case 13:if(Dt(Ft),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bf(),hs(),i.flags|=98560,m=!1;else if(m=Sa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[hi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),m=!1}else ei!==null&&(uu(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?qt===0&&(qt=3):hu())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return vs(),Jc(t,i),t===null&&go(i.stateNode.containerInfo),cn(i),null;case 10:return Rc(i.type._context),cn(i),null;case 17:return wn(i.type)&&ga(),cn(i),null;case 19:if(Dt(Ft),m=i.memoizedState,m===null)return cn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)Co(m,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,Co(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,t=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,t=M.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pt(Ft,Ft.current&1|2),i.child}t=t.sibling}m.tail!==null&&De()>Ss&&(i.flags|=128,c=!0,Co(m,!1),i.lanes=4194304)}else{if(!c)if(t=Ra(M),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Co(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!It)return cn(i),null}else 2*De()-m.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,c=!0,Co(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=De(),i.sibling=null,o=Ft.current,Pt(Ft,c?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return fu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Hv(t,i){switch(Sc(i),i.tag){case 1:return wn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Dt(Tn),Dt(an),Uc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Dt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Ft),null;case 4:return vs(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Fa=!1,un=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function xs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){kt(t,i,c)}else o.current=null}function eu(t,i,o){try{o()}catch(c){kt(t,i,c)}}var Rh=!1;function Vv(t,i){if(fc=na,t=sf(),rc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,N=-1,B=-1,ne=0,me=0,xe=t,pe=null;t:for(;;){for(var Le;xe!==o||f!==0&&xe.nodeType!==3||(N=M+f),xe!==m||c!==0&&xe.nodeType!==3||(B=M+c),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)pe=xe,xe=Le;for(;;){if(xe===t)break t;if(pe===o&&++ne===f&&(N=M),pe===m&&++me===c&&(B=M),(Le=xe.nextSibling)!==null)break;xe=pe,pe=xe.parentNode}xe=Le}o=N===-1||B===-1?null:{start:N,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(hc={focusedElem:t,selectionRange:o},na=!1,Ue=i;Ue!==null;)if(i=Ue,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ue=t;else for(;Ue!==null;){i=Ue;try{var Oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Oe!==null){var Be=Oe.memoizedProps,Gt=Oe.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?Be:ti(i.type,Be),Gt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){kt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ue=t;break}Ue=i.return}return Oe=Rh,Rh=!1,Oe}function bo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&eu(i,o,m)}f=f.next}while(f!==c)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function tu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ch(t){var i=t.alternate;i!==null&&(t.alternate=null,Ch(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[_o],delete i[vc],delete i[wv],delete i[Av])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bh(t){return t.tag===5||t.tag===3||t.tag===4}function Ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(c!==4&&(t=t.child,t!==null))for(nu(t,i,o),t=t.sibling;t!==null;)nu(t,i,o),t=t.sibling}function iu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(iu(t,i,o),t=t.sibling;t!==null;)iu(t,i,o),t=t.sibling}var tn=null,ni=!1;function or(t,i,o){for(o=o.child;o!==null;)Lh(t,i,o),o=o.sibling}function Lh(t,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Mn,o)}catch{}switch(o.tag){case 5:un||xs(o,i);case 6:var c=tn,f=ni;tn=null,or(t,i,o),tn=c,ni=f,tn!==null&&(ni?(t=tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ni?(t=tn,o=o.stateNode,t.nodeType===8?gc(t.parentNode,o):t.nodeType===1&&gc(t,o),oo(t)):gc(tn,o.stateNode));break;case 4:c=tn,f=ni,tn=o.stateNode.containerInfo,ni=!0,or(t,i,o),tn=c,ni=f;break;case 0:case 11:case 14:case 15:if(!un&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&eu(o,i,M),f=f.next}while(f!==c)}or(t,i,o);break;case 1:if(!un&&(xs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){kt(o,i,N)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(un=(c=un)||o.memoizedState!==null,or(t,i,o),un=c):or(t,i,o);break;default:or(t,i,o)}}function Dh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Gv),i.forEach(function(c){var f=Qv.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:tn=N.stateNode,ni=!1;break e;case 3:tn=N.stateNode.containerInfo,ni=!0;break e;case 4:tn=N.stateNode.containerInfo,ni=!0;break e}N=N.return}if(tn===null)throw Error(n(160));Lh(m,M,f),tn=null,ni=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ne){kt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Nh(i,t),i=i.sibling}function Nh(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),gi(t),c&4){try{bo(3,t,t.return),Oa(3,t)}catch(Be){kt(t,t.return,Be)}try{bo(5,t,t.return)}catch(Be){kt(t,t.return,Be)}}break;case 1:ii(i,t),gi(t),c&512&&o!==null&&xs(o,o.return);break;case 5:if(ii(i,t),gi(t),c&512&&o!==null&&xs(o,o.return),t.flags&32){var f=t.stateNode;try{ge(f,"")}catch(Be){kt(t,t.return,Be)}}if(c&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,M=o!==null?o.memoizedProps:m,N=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&Ne(f,m),_t(N,M);var ne=_t(N,m);for(M=0;M<B.length;M+=2){var me=B[M],xe=B[M+1];me==="style"?qe(f,xe):me==="dangerouslySetInnerHTML"?at(f,xe):me==="children"?ge(f,xe):b(f,me,xe,ne)}switch(N){case"input":tt(f,m);break;case"textarea":Me(f,m);break;case"select":var pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Le=m.value;Le!=null?te(f,!!m.multiple,Le,!1):pe!==!!m.multiple&&(m.defaultValue!=null?te(f,!!m.multiple,m.defaultValue,!0):te(f,!!m.multiple,m.multiple?[]:"",!1))}f[_o]=m}catch(Be){kt(t,t.return,Be)}}break;case 6:if(ii(i,t),gi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(Be){kt(t,t.return,Be)}}break;case 3:if(ii(i,t),gi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{oo(i.containerInfo)}catch(Be){kt(t,t.return,Be)}break;case 4:ii(i,t),gi(t);break;case 13:ii(i,t),gi(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(ou=De())),c&4&&Dh(t);break;case 22:if(me=o!==null&&o.memoizedState!==null,t.mode&1?(un=(ne=un)||me,ii(i,t),un=ne):ii(i,t),gi(t),c&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!me&&(t.mode&1)!==0)for(Ue=t,me=t.child;me!==null;){for(xe=Ue=me;Ue!==null;){switch(pe=Ue,Le=pe.child,pe.tag){case 0:case 11:case 14:case 15:bo(4,pe,pe.return);break;case 1:xs(pe,pe.return);var Oe=pe.stateNode;if(typeof Oe.componentWillUnmount=="function"){c=pe,o=pe.return;try{i=c,Oe.props=i.memoizedProps,Oe.state=i.memoizedState,Oe.componentWillUnmount()}catch(Be){kt(c,o,Be)}}break;case 5:xs(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Fh(xe);continue}}Le!==null?(Le.return=pe,Ue=Le):Fh(xe)}me=me.sibling}e:for(me=null,xe=t;;){if(xe.tag===5){if(me===null){me=xe;try{f=xe.stateNode,ne?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=xe.stateNode,B=xe.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=it("display",M))}catch(Be){kt(t,t.return,Be)}}}else if(xe.tag===6){if(me===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(Be){kt(t,t.return,Be)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;me===xe&&(me=null),xe=xe.return}me===xe&&(me=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ii(i,t),gi(t),c&4&&Dh(t);break;case 21:break;default:ii(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bh(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ge(f,""),c.flags&=-33);var m=Ph(t);iu(t,m,f);break;case 3:case 4:var M=c.stateNode.containerInfo,N=Ph(t);nu(t,N,M);break;default:throw Error(n(161))}}catch(B){kt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Wv(t,i,o){Ue=t,Uh(t)}function Uh(t,i,o){for(var c=(t.mode&1)!==0;Ue!==null;){var f=Ue,m=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||Fa;if(!M){var N=f.alternate,B=N!==null&&N.memoizedState!==null||un;N=Fa;var ne=un;if(Fa=M,(un=B)&&!ne)for(Ue=f;Ue!==null;)M=Ue,B=M.child,M.tag===22&&M.memoizedState!==null?Oh(f):B!==null?(B.return=M,Ue=B):Oh(f);for(;m!==null;)Ue=m,Uh(m),m=m.sibling;Ue=f,Fa=N,un=ne}Ih(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ue=m):Ih(t)}}function Ih(t){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Oa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!un)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ff(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ff(i,M,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var me=ne.memoizedState;if(me!==null){var xe=me.dehydrated;xe!==null&&oo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&tu(i)}catch(pe){kt(i,i.return,pe)}}if(i===t){Ue=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function Fh(t){for(;Ue!==null;){var i=Ue;if(i===t){Ue=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function Oh(t){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Oa(4,i)}catch(B){kt(i,o,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){kt(i,f,B)}}var m=i.return;try{tu(i)}catch(B){kt(i,m,B)}break;case 5:var M=i.return;try{tu(i)}catch(B){kt(i,M,B)}}}catch(B){kt(i,i.return,B)}if(i===t){Ue=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ue=N;break}Ue=i.return}}var Xv=Math.ceil,za=D.ReactCurrentDispatcher,ru=D.ReactCurrentOwner,Yn=D.ReactCurrentBatchConfig,xt=0,Qt=null,Vt=null,nn=0,Bn=0,ys=tr(0),qt=0,Po=null,Ir=0,ka=0,su=0,Lo=null,Rn=null,ou=0,Ss=1/0,Ni=null,Ba=!1,au=null,ar=null,Ha=!1,lr=null,Ga=0,Do=0,lu=null,Va=-1,Wa=0;function xn(){return(xt&6)!==0?De():Va!==-1?Va:Va=De()}function cr(t){return(t.mode&1)===0?1:(xt&2)!==0&&nn!==0?nn&-nn:Cv.transition!==null?(Wa===0&&(Wa=Jo()),Wa):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:zd(t.type)),t)}function ri(t,i,o,c){if(50<Do)throw Do=0,lu=null,Error(n(185));to(t,o,c),((xt&2)===0||t!==Qt)&&(t===Qt&&((xt&2)===0&&(ka|=o),qt===4&&ur(t,nn)),Cn(t,c),o===1&&xt===0&&(i.mode&1)===0&&(Ss=De()+500,_a&&ir()))}function Cn(t,i){var o=t.callbackNode;En(t,i);var c=Vn(t,t===Qt?nn:0);if(c===0)o!==null&&Pe(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&Pe(o),i===1)t.tag===0?Rv(kh.bind(null,t)):Tf(kh.bind(null,t)),Ev(function(){(xt&6)===0&&ir()}),o=null;else{switch(Pd(c)){case 1:o=rt;break;case 4:o=ot;break;case 16:o=bt;break;case 536870912:o=Ht;break;default:o=bt}o=qh(o,zh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function zh(t,i){if(Va=-1,Wa=0,(xt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ms()&&t.callbackNode!==o)return null;var c=Vn(t,t===Qt?nn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Xa(t,c);else{i=c;var f=xt;xt|=2;var m=Hh();(Qt!==t||nn!==i)&&(Ni=null,Ss=De()+500,Or(t,i));do try{Yv();break}catch(N){Bh(t,N)}while(!0);Ac(),za.current=m,xt=f,Vt!==null?i=0:(Qt=null,nn=0,i=qt)}if(i!==0){if(i===2&&(f=Rr(t),f!==0&&(c=f,i=cu(t,f))),i===1)throw o=Po,Or(t,0),ur(t,c),Cn(t,De()),o;if(i===6)ur(t,c);else{if(f=t.current.alternate,(c&30)===0&&!jv(f)&&(i=Xa(t,c),i===2&&(m=Rr(t),m!==0&&(c=m,i=cu(t,m))),i===1))throw o=Po,Or(t,0),ur(t,c),Cn(t,De()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:zr(t,Rn,Ni);break;case 3:if(ur(t,c),(c&130023424)===c&&(i=ou+500-De(),10<i)){if(Vn(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){xn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=mc(zr.bind(null,t,Rn,Ni),i);break}zr(t,Rn,Ni);break;case 4:if(ur(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var M=31-vn(c);m=1<<M,M=i[M],M>f&&(f=M),c&=~m}if(c=f,c=De()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Xv(c/1960))-c,10<c){t.timeoutHandle=mc(zr.bind(null,t,Rn,Ni),c);break}zr(t,Rn,Ni);break;case 5:zr(t,Rn,Ni);break;default:throw Error(n(329))}}}return Cn(t,De()),t.callbackNode===o?zh.bind(null,t):null}function cu(t,i){var o=Lo;return t.current.memoizedState.isDehydrated&&(Or(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=Rn,Rn=o,i!==null&&uu(i)),t}function uu(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function jv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Jn(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~su,i&=~ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-vn(i),c=1<<o;t[o]=-1,i&=~c}}function kh(t){if((xt&6)!==0)throw Error(n(327));Ms();var i=Vn(t,0);if((i&1)===0)return Cn(t,De()),null;var o=Xa(t,i);if(t.tag!==0&&o===2){var c=Rr(t);c!==0&&(i=c,o=cu(t,c))}if(o===1)throw o=Po,Or(t,0),ur(t,i),Cn(t,De()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,zr(t,Rn,Ni),Cn(t,De()),null}function du(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(Ss=De()+500,_a&&ir())}}function Fr(t){lr!==null&&lr.tag===0&&(xt&6)===0&&Ms();var i=xt;xt|=1;var o=Yn.transition,c=Rt;try{if(Yn.transition=null,Rt=1,t)return t()}finally{Rt=c,Yn.transition=o,xt=i,(xt&6)===0&&ir()}}function fu(){Bn=ys.current,Dt(ys)}function Or(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Mv(o)),Vt!==null)for(o=Vt.return;o!==null;){var c=o;switch(Sc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ga();break;case 3:vs(),Dt(Tn),Dt(an),Uc();break;case 5:Dc(c);break;case 4:vs();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:Rc(c.type._context);break;case 22:case 23:fu()}o=o.return}if(Qt=t,Vt=t=dr(t.current,null),nn=Bn=i,qt=0,Po=null,su=ka=Ir=0,Rn=Lo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var M=m.next;m.next=f,c.next=M}o.pending=c}Dr=null}return t}function Bh(t,i){do{var o=Vt;try{if(Ac(),Ca.current=Da,ba){for(var c=Ot.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}ba=!1}if(Ur=0,Zt=jt=Ot=null,To=!1,wo=0,ru.current=null,o===null||o.return===null){qt=1,Po=i,Vt=null;break}e:{var m=t,M=o.return,N=o,B=i;if(i=nn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,me=N,xe=me.tag;if((me.mode&1)===0&&(xe===0||xe===11||xe===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Le=dh(M);if(Le!==null){Le.flags&=-257,fh(Le,M,N,m,i),Le.mode&1&&uh(m,ne,i),i=Le,B=ne;var Oe=i.updateQueue;if(Oe===null){var Be=new Set;Be.add(B),i.updateQueue=Be}else Oe.add(B);break e}else{if((i&1)===0){uh(m,ne,i),hu();break e}B=Error(n(426))}}else if(It&&N.mode&1){var Gt=dh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),fh(Gt,M,N,m,i),Tc(_s(B,N));break e}}m=B=_s(B,N),qt!==4&&(qt=2),Lo===null?Lo=[m]:Lo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=lh(m,B,i);If(m,K);break e;case 1:N=B;var G=m.type,J=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ar===null||!ar.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=ch(m,N,i);If(m,Te);break e}}m=m.return}while(m!==null)}Vh(o)}catch(Ve){i=Ve,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function Hh(){var t=za.current;return za.current=Da,t===null?Da:t}function hu(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(Ir&268435455)===0&&(ka&268435455)===0||ur(Qt,nn)}function Xa(t,i){var o=xt;xt|=2;var c=Hh();(Qt!==t||nn!==i)&&(Ni=null,Or(t,i));do try{qv();break}catch(f){Bh(t,f)}while(!0);if(Ac(),xt=o,za.current=c,Vt!==null)throw Error(n(261));return Qt=null,nn=0,qt}function qv(){for(;Vt!==null;)Gh(Vt)}function Yv(){for(;Vt!==null&&!Xe();)Gh(Vt)}function Gh(t){var i=jh(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Vh(t):Vt=i,ru.current=null}function Vh(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Bv(o,i,Bn),o!==null){Vt=o;return}}else{if(o=Hv(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);qt===0&&(qt=5)}function zr(t,i,o){var c=Rt,f=Yn.transition;try{Yn.transition=null,Rt=1,$v(t,i,o,c)}finally{Yn.transition=f,Rt=c}return null}function $v(t,i,o,c){do Ms();while(lr!==null);if((xt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(bg(t,m),t===Qt&&(Vt=Qt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,qh(bt,function(){return Ms(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var M=Rt;Rt=1;var N=xt;xt|=4,ru.current=null,Vv(t,o),Nh(o,t),mv(hc),na=!!fc,hc=fc=null,t.current=o,Wv(o),et(),xt=N,Rt=M,Yn.transition=m}else t.current=o;if(Ha&&(Ha=!1,lr=t,Ga=f),m=t.pendingLanes,m===0&&(ar=null),ut(o.stateNode),Cn(t,De()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ba)throw Ba=!1,t=au,au=null,t;return(Ga&1)!==0&&t.tag!==0&&Ms(),m=t.pendingLanes,(m&1)!==0?t===lu?Do++:(Do=0,lu=t):Do=0,ir(),null}function Ms(){if(lr!==null){var t=Pd(Ga),i=Yn.transition,o=Rt;try{if(Yn.transition=null,Rt=16>t?16:t,lr===null)var c=!1;else{if(t=lr,lr=null,Ga=0,(xt&6)!==0)throw Error(n(331));var f=xt;for(xt|=4,Ue=t.current;Ue!==null;){var m=Ue,M=m.child;if((Ue.flags&16)!==0){var N=m.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ne=N[B];for(Ue=ne;Ue!==null;){var me=Ue;switch(me.tag){case 0:case 11:case 15:bo(8,me,m)}var xe=me.child;if(xe!==null)xe.return=me,Ue=xe;else for(;Ue!==null;){me=Ue;var pe=me.sibling,Le=me.return;if(Ch(me),me===ne){Ue=null;break}if(pe!==null){pe.return=Le,Ue=pe;break}Ue=Le}}}var Oe=m.alternate;if(Oe!==null){var Be=Oe.child;if(Be!==null){Oe.child=null;do{var Gt=Be.sibling;Be.sibling=null,Be=Gt}while(Be!==null)}}Ue=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Ue=M;else e:for(;Ue!==null;){if(m=Ue,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:bo(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Ue=K;break e}Ue=m.return}}var G=t.current;for(Ue=G;Ue!==null;){M=Ue;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,Ue=J;else e:for(M=G;Ue!==null;){if(N=Ue,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Oa(9,N)}}catch(Ve){kt(N,N.return,Ve)}if(N===M){Ue=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Ue=Te;break e}Ue=N.return}}if(xt=f,ir(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Mn,t)}catch{}c=!0}return c}finally{Rt=o,Yn.transition=i}}return!1}function Wh(t,i,o){i=_s(o,i),i=lh(t,i,1),t=sr(t,i,1),i=xn(),t!==null&&(to(t,1,i),Cn(t,i))}function kt(t,i,o){if(t.tag===3)Wh(t,t,o);else for(;i!==null;){if(i.tag===3){Wh(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ar===null||!ar.has(c))){t=_s(o,t),t=ch(i,t,1),i=sr(i,t,1),t=xn(),i!==null&&(to(i,1,t),Cn(i,t));break}}i=i.return}}function Kv(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(nn&o)===o&&(qt===4||qt===3&&(nn&130023424)===nn&&500>De()-ou?Or(t,0):su|=o),Cn(t,i)}function Xh(t,i){i===0&&((t.mode&1)===0?i=1:(i=qi,qi<<=1,(qi&130023424)===0&&(qi=4194304)));var o=xn();t=Pi(t,i),t!==null&&(to(t,i,o),Cn(t,o))}function Zv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Xh(t,o)}function Qv(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Xh(t,o)}var jh;jh=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return An=!1,kv(t,i,o);An=(t.flags&131072)!==0}else An=!1,It&&(i.flags&1048576)!==0&&wf(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ia(t,i),t=i.pendingProps;var f=us(i,an.current);gs(i,o),f=Oc(null,i,c,t,f,o);var m=zc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(m=!0,va(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Pc(i),f.updater=Na,i.stateNode=f,f._reactInternals=i,Wc(i,c,t,o),i=Yc(null,i,c,!0,m,o)):(i.tag=0,It&&m&&yc(i),_n(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=e0(c),t=ti(c,t),f){case 0:i=qc(null,i,c,t,o);break e;case 1:i=_h(null,i,c,t,o);break e;case 11:i=hh(null,i,c,t,o);break e;case 14:i=ph(null,i,c,ti(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),qc(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),_h(t,i,c,f,o);case 3:e:{if(xh(i),t===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Uf(t,i),Aa(i,c,null,o);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=_s(Error(n(423)),i),i=yh(t,i,c,o,f);break e}else if(c!==f){f=_s(Error(n(424)),i),i=yh(t,i,c,o,f);break e}else for(kn=er(i.stateNode.containerInfo.firstChild),zn=i,It=!0,ei=null,o=Df(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),c===f){i=Di(t,i,o);break e}_n(t,i,c,o)}i=i.child}return i;case 5:return Of(i),t===null&&Ec(i),c=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,M=f.children,pc(c,f)?M=null:m!==null&&pc(c,m)&&(i.flags|=32),vh(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&Ec(i),null;case 13:return Sh(t,i,o);case 4:return Lc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ps(i,null,c,o):_n(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),hh(t,i,c,f,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,M=f.value,Pt(Ea,c._currentValue),c._currentValue=M,m!==null)if(Jn(m.value,M)){if(m.children===f.children&&!Tn.current){i=Di(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var B=N.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Li(-1,o&-o),B.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var me=ne.pending;me===null?B.next=B:(B.next=me.next,me.next=B),ne.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),Cc(m.return,o,i),N.lanes|=o;break}B=B.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(n(341));M.lanes|=o,N=M.alternate,N!==null&&(N.lanes|=o),Cc(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}_n(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,gs(i,o),f=jn(f),c=c(f),i.flags|=1,_n(t,i,c,o),i.child;case 14:return c=i.type,f=ti(c,i.pendingProps),f=ti(c.type,f),ph(t,i,c,f,o);case 15:return mh(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),Ia(t,i),i.tag=1,wn(c)?(t=!0,va(i)):t=!1,gs(i,o),oh(i,c,f),Wc(i,c,f,o),Yc(null,i,c,!0,t,o);case 19:return Eh(t,i,o);case 22:return gh(t,i,o)}throw Error(n(156,i.tag))};function qh(t,i){return ie(t,i)}function Jv(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,i,o,c){return new Jv(t,i,o,c)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e0(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===ee)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=$n(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ja(t,i,o,c,f,m){var M=2;if(c=t,typeof t=="function")pu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return kr(o.children,f,m,i);case de:M=8,f|=8;break;case ve:return t=$n(12,o,i,f|2),t.elementType=ve,t.lanes=m,t;case se:return t=$n(13,o,i,f),t.elementType=se,t.lanes=m,t;case k:return t=$n(19,o,i,f),t.elementType=k,t.lanes=m,t;case ce:return qa(o,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T:M=10;break e;case I:M=9;break e;case ae:M=11;break e;case ee:M=14;break e;case Q:M=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=$n(M,o,i,f),i.elementType=t,i.type=c,i.lanes=m,i}function kr(t,i,o,c){return t=$n(7,t,c,i),t.lanes=o,t}function qa(t,i,o,c){return t=$n(22,t,c,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function mu(t,i,o){return t=$n(6,t,null,i),t.lanes=o,t}function gu(t,i,o){return i=$n(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function t0(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vu(t,i,o,c,f,m,M,N,B){return t=new t0(t,i,o,N,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(m),t}function n0(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Yh(t){if(!t)return nr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wn(o))return Mf(t,o,i)}return i}function $h(t,i,o,c,f,m,M,N,B){return t=vu(o,c,!0,t,f,m,M,N,B),t.context=Yh(null),o=t.current,c=xn(),f=cr(o),m=Li(c,f),m.callback=i??null,sr(o,m,f),t.current.lanes=f,to(t,f,c),Cn(t,c),t}function Ya(t,i,o,c){var f=i.current,m=xn(),M=cr(f);return o=Yh(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(m,M),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=sr(f,i,M),t!==null&&(ri(t,f,M,m),wa(t,f,M)),M}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function _u(t,i){Kh(t,i),(t=t.alternate)&&Kh(t,i)}function i0(){return null}var Zh=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}Ka.prototype.render=xu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ya(t,i,null,null)},Ka.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Fr(function(){Ya(null,t,null,null)}),i[Ai]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var i=Nd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&Fd(t)}};function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function r0(t,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ne=$a(M);m.call(ne)}}var M=$h(i,c,t,0,null,!1,!1,"",Qh);return t._reactRootContainer=M,t[Ai]=M.current,go(t.nodeType===8?t.parentNode:t),Fr(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var ne=$a(B);N.call(ne)}}var B=vu(t,0,!1,null,null,!1,!1,"",Qh);return t._reactRootContainer=B,t[Ai]=B.current,go(t.nodeType===8?t.parentNode:t),Fr(function(){Ya(i,B,o,c)}),B}function Qa(t,i,o,c,f){var m=o._reactRootContainer;if(m){var M=m;if(typeof f=="function"){var N=f;f=function(){var B=$a(M);N.call(B)}}Ya(i,M,t,f)}else M=r0(o,i,t,f,c);return $a(M)}Ld=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=zt(i.pendingLanes);o!==0&&(Wl(i,o|1),Cn(i,De()),(xt&6)===0&&(Ss=De()+500,ir()))}break;case 13:Fr(function(){var c=Pi(t,1);if(c!==null){var f=xn();ri(c,t,1,f)}}),_u(t,1)}},Xl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=xn();ri(i,t,134217728,o)}_u(t,134217728)}},Dd=function(t){if(t.tag===13){var i=cr(t),o=Pi(t,i);if(o!==null){var c=xn();ri(o,t,i,c)}_u(t,i)}},Nd=function(){return Rt},Ud=function(t,i){var o=Rt;try{return Rt=t,i()}finally{Rt=o}},Et=function(t,i,o){switch(i){case"input":if(tt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=ma(c);if(!f)throw Error(n(90));q(c),tt(c,f)}}}break;case"textarea":Me(t,o);break;case"select":i=o.value,i!=null&&te(t,!!o.multiple,i,!1)}},yt=du,At=Fr;var s0={usingClientEntryPoint:!1,Events:[xo,ls,ma,He,Ke,du]},No={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=re(t),t===null?null:t.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Mn=Ja.inject(o0),vt=Ja}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0,bn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(i))throw Error(n(200));return n0(t,i,null,o)},bn.createRoot=function(t,i){if(!yu(t))throw Error(n(299));var o=!1,c="",f=Zh;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vu(t,1,!1,null,null,o,!1,c,f),t[Ai]=i.current,go(t.nodeType===8?t.parentNode:t),new xu(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=re(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Fr(t)},bn.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!0,o)},bn.hydrateRoot=function(t,i,o){if(!yu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",M=Zh;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=$h(i,null,t,1,o??null,f,!1,m,M),t[Ai]=i.current,go(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ka(i)},bn.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!1,o)},bn.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Fr(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},bn.unstable_batchedUpdates=du,bn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qa(t,i,o,!1,c)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var op;function p0(){if(op)return Eu.exports;op=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=h0(),Eu.exports}var ap;function m0(){if(ap)return el;ap=1;var s=p0();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var g0=m0();const v0=Hm(g0),Gi="ykshetty.design@gmail.com",Gs={name:"Yogesh Shetty",location:"Oslo",logo:"./assets/yogilogo.svg",tagline:"Senior Product Designer. I look past the brief to find the real problem — then design the system that solves it."},_0=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],lp={brief:"Make the button bigger",shift:"Let's make it work without a tap!"},bl=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",brief:"Make the button bigger.",insight:"Delete touch — the scanner's already on their hand.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${Gi}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",brief:"Wall off the whole flow.",insight:"Gate only the destructive action.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~90%",label:"Calls deflected"}],mailto:`mailto:${Gi}?subject=Self-service%20cards`,seed:{x:.96,y:.32,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",brief:"Rebuild it screen by screen.",insight:"Map the system first, then design the shared frame.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${Gi}?subject=Post-office%20portal`,seed:{x:.02,y:.62,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",brief:"Sort by document type.",insight:"Organise by life event — the client's mental model.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${Gi}?subject=Postbox`,seed:{x:.98,y:.92,r:-1.6}}],x0=[{id:"discover",num:"01 · THE SEED",title:"Discover",callout:null,human:["Stakeholder discovery","Field interviews","Context & pain mapping","Goals & success criteria"],ai:["Cluster interview notes","Surface recurring themes"],desc:"A hand drops the signal. We scan the soil — market, goals, human pain — and plant."},{id:"define",num:"02 · THE SPROUT",title:"Define",callout:{label:"↺ The rethink",text:"When the brief hands us a solution, we go back for the problem."},human:["Problem statement","Must / Should / Won't","Feasibility alignment"],ai:["Edge-case inventory","Constraint pre-check"],desc:"Roots anchor down, a first stem breaks ground. The invisible architecture that will hold everything."},{id:"design",num:"03 · THE CANOPY",title:"Design",callout:null,human:["Ideate variants","Craft & visual","Systematize into tokens","Component review"],ai:["Variant exploration","First-draft microcopy","Token & doc automation"],desc:"Branches spread, leaves fill in, flowers open. Automation duplicates the tokens across every limb."},{id:"ship",num:"04 · THE APPLES",title:"Ship & learn",callout:null,human:["Usability testing","MVP scope · UI validation","Pilot & monitor","Feed the next brief"],ai:["Error-state & QA sweep","Metrics → next brief"],desc:"Flowers become apples. Ripe fruit falls, dissolves back into soil — feeding the next brief."}],y0=[{id:"tokenmap",logo:"uploads/tokenmap.svg",alt:"Token Map",logoStyle:{height:22,width:140},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes."},{id:"intent",logo:"uploads/intent.svg",alt:"Intent",logoStyle:{height:30,width:95},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically."},{id:"focal",logo:"uploads/logos_focal.svg",alt:"Focal AI",logoStyle:{height:28,width:152},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second."}],vi={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"assets/portrait.png",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},ld=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],S0="https://linkedin.com/in/ykshetty/details/recommendations/",tl={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:Gi,href:`mailto:${Gi}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},cd="ys-theme",Vm=Ye.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function M0(){if(typeof window>"u")return"light";try{const s=window.localStorage.getItem(cd);if(s==="light"||s==="dark")return s}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function E0({children:s}){const[e,n]=Ye.useState(M0);Ye.useEffect(()=>{const d=document.documentElement;d.setAttribute("data-theme",e),d.style.colorScheme=e;try{window.localStorage.setItem(cd,e)}catch{}},[e]),Ye.useEffect(()=>{if(!window.matchMedia)return;const d=window.matchMedia("(prefers-color-scheme: dark)"),u=h=>{let p=!1;try{p=!!window.localStorage.getItem(cd)}catch{p=!1}p||n(h.matches?"dark":"light")};return d.addEventListener("change",u),()=>d.removeEventListener("change",u)},[]);const r=Ye.useCallback(d=>{n(u=>d==="light"||d==="dark"?d:u)},[]),a=Ye.useCallback(()=>{n(d=>d==="dark"?"light":"dark")},[]),l=Ye.useMemo(()=>({theme:e,setTheme:r,toggleTheme:a}),[e,r,a]);return O.jsx(Vm.Provider,{value:l,children:s})}function Wm(){return Ye.useContext(Vm)}const cp={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function T0(){const[s,e]=Ye.useState(!1),{theme:n,toggleTheme:r}=Wm(),a=Ye.useCallback(()=>e(d=>!d),[]),l=Ye.useCallback(()=>e(!1),[]);return O.jsx("header",{className:s?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)"},children:O.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[O.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:O.jsxs("a",{href:"#top",style:{display:"flex",alignItems:"center",gap:10,height:20},children:[O.jsx("img",{src:Gs.logo,alt:Gs.name,style:{height:22,width:22,display:"block"}}),O.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Gs.name})]})}),O.jsx("button",{className:"hamburger",onClick:a,"aria-label":"Menu","aria-expanded":s,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),O.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[_0.map(d=>O.jsx("a",{href:d.href,onClick:l,className:"nav-link",style:cp,children:d.label},d.href)),O.jsx("a",{href:`mailto:${Gi}`,onClick:l,className:"cta-pill",style:{...cp,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),O.jsx("button",{type:"button",onClick:r,title:n==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":n==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",fontSize:14,color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:n==="dark"?"☀️":"🌙"})]})]})})}const w0=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function A0(){const[s,e]=Ye.useState(0),n=Ye.useRef([]),r=Ye.useRef(null),a=Ye.useCallback(()=>{n.current.forEach(d=>clearTimeout(d)),n.current=[],r.current&&(cancelAnimationFrame(r.current),r.current=null)},[]),l=Ye.useCallback(()=>{a(),e(0),r.current=requestAnimationFrame(()=>{r.current=requestAnimationFrame(()=>{w0.forEach(([d,u])=>{n.current.push(setTimeout(()=>e(d),u))})})})},[a]);return Ye.useEffect(()=>(l(),a),[l,a]),{step:s,replay:l}}function R0(s,e){Ye.useEffect(()=>{const n=s.current,r=e.current,a=r?Array.from(r.querySelectorAll("[data-drift]")):[];let l=1,d=1,u=null,h=!1,p=window.scrollY,g=performance.now();const _=()=>{if(!n)return;const v=window.innerHeight||1,x=Math.min(1,Math.max(0,window.scrollY/v)),L=1-x*.28,b=1-x*.65;n.style.transform=`scale(${L.toFixed(3)})`,n.style.opacity=b.toFixed(3)},y=()=>{l+=(d-l)*.12,d+=(1-d)*.04,a.forEach(v=>{v.getAnimations&&v.getAnimations().forEach(x=>{x.playbackRate=l})}),Math.abs(l-1)>.02||Math.abs(d-1)>.02?u=requestAnimationFrame(y):(l=1,d=1,a.forEach(v=>{v.getAnimations&&v.getAnimations().forEach(x=>{x.playbackRate=1})}),h=!1)},S=()=>{h||!a.length||(h=!0,u=requestAnimationFrame(y))},E=()=>{const v=performance.now(),x=Math.abs(window.scrollY-p),L=Math.max(16,v-g),b=x/L;d=Math.min(9,1+b*20),p=window.scrollY,g=v,S()},w=()=>{_(),E()};return window.addEventListener("scroll",w,{passive:!0}),_(),()=>{window.removeEventListener("scroll",w),u&&cancelAnimationFrame(u)}},[s,e])}const C0=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],up=()=>O.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[O.jsx("span",{}),O.jsx("span",{}),O.jsx("span",{})]});function b0(){const{step:s,replay:e}=A0(),n=Ye.useRef(null),r=Ye.useRef(null);return R0(n,r),O.jsx("div",{style:{position:"relative",height:"200vh"},children:O.jsxs("section",{className:"hero-section","data-hero-step":s,style:{position:"sticky",top:0,zIndex:1,height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"var(--bg-page)"},children:[O.jsx("div",{ref:r,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:C0.map((a,l)=>O.jsx("div",{"data-drift":"",style:{position:"absolute",width:a.w,height:a.w,maxWidth:a.maxW,maxHeight:a.maxW,top:a.top,bottom:a.bottom,left:a.left,right:a.right,borderRadius:"50%",background:`radial-gradient(circle, ${a.color}, transparent 70%)`,filter:`blur(${a.blur}px)`,animation:a.anim,willChange:"transform"}},l))}),O.jsxs("div",{ref:n,style:{position:"relative",zIndex:2,maxWidth:520,width:"100%",padding:"0 clamp(22px,5vw,44px)",margin:"0 auto",willChange:"transform, opacity",transformOrigin:"center 40%"},children:[O.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:"The brief"}),O.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[O.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:O.jsx(up,{})}),O.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:O.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:lp.brief})})]}),O.jsxs("div",{style:{position:"relative",minHeight:72},children:[O.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[O.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),O.jsx(up,{})]}),O.jsx("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.8vw,42px)",fontWeight:600,lineHeight:1.12,letterSpacing:"-0.02em",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:lp.shift})]}),O.jsxs("div",{className:"hero-post",style:{marginTop:"clamp(44px,6vw,68px)"},children:[O.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10,textAlign:"center"},children:[Gs.name," · ",Gs.location]}),O.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.65,color:"var(--text-body)",margin:"0 0 24px",textAlign:"center"},children:Gs.tagline}),O.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:22,alignItems:"center",fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,justifyContent:"center"},children:[O.jsx("a",{href:"#work",className:"text-link text-link--primary",style:{paddingBottom:3},children:"Case studies ↓"}),O.jsx("a",{href:`mailto:${Gi}`,className:"text-link text-link--muted",children:"Say hello"}),O.jsx("span",{onClick:e,role:"button",tabIndex:0,onKeyDown:a=>(a.key==="Enter"||a.key===" ")&&e(),className:"replay-btn",style:{cursor:"pointer",userSelect:"none",fontSize:12,color:"var(--text-muted)"},children:"↻ replay"})]})]})]})]})})}function P0(s){if(!s)return;const e=s.querySelector("[data-strike]"),n=s.querySelector("[data-obvious]"),r=s.querySelector("[data-insight]");e&&e.animate([{transform:"scaleX(0)"},{transform:"scaleX(1)"}],{duration:500,easing:"cubic-bezier(.65,.05,.25,1)",fill:"both"}),n&&n.animate([{opacity:1},{opacity:.5}],{duration:420,delay:440,easing:"ease",fill:"both"}),r&&r.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:620,delay:540,easing:"cubic-bezier(.2,.7,.2,1)",fill:"both"})}const Xm="#7C5CFC",L0="0 2px 12px -4px rgba(0,0,0,.08)",D0=`0 0 0 1px ${Xm}, 0 8px 24px -6px rgba(124,92,252,.18)`;function N0(s,e){const{boardRef:n,scatterRef:r,targetRef:a,emptyRef:l,detailRef:d}=s,[u,h]=Ye.useState(null),p=Ye.useRef(null),g=Ye.useRef(()=>{}),_=Ye.useRef([]),y=Ye.useMemo(()=>e.map((w,v)=>x=>{_.current[v]=x}),[e]);Ye.useEffect(()=>{const w=n.current,v=r.current,x=a.current;if(!w||!v||!x)return;const L=_.current;if(L.length<e.length||L.some(fe=>!fe))return;const b=e.map(fe=>({id:fe.id,seed:fe.seed}));let D=null,W,z,F=-1,de=.62,ve=null,T=!1,I=!1;const ae=()=>l.current,se=()=>d.current,k=()=>{const fe=v.getBoundingClientRect(),le=w.getBoundingClientRect(),be=Math.min(240,Math.max(170,(fe.width||300)-80)),ze=fe.left-le.left+14,q=fe.right-le.left-14,mt=fe.top-le.top+44,Ie=fe.bottom-le.top-20;D={minX:ze,maxX:q-be-14,minY:mt,maxY:Math.max(mt,Ie-150)};const je=Math.max(0,D.maxX-D.minX),Ne=Math.max(0,D.maxY-D.minY);b.forEach((R,A)=>{L[A].style.width=`${be}px`,R.sx=D.minX+R.seed.x*je,R.sy=D.minY+R.seed.y*Ne,R.sr=R.seed.r,R.x===void 0&&(R.x=R.sx,R.y=R.sy,R.r=R.sr)});const tt=x.getBoundingClientRect();de=.62;const $e=be*de;W=tt.right-le.left-$e-30,z=tt.top-le.top+42,F=-1},ee=(fe,le)=>{const be=x.getBoundingClientRect();return fe>be.left-20&&fe<be.right+20&&le>be.top-20&&le<be.bottom+20},Q=()=>{if(I){T=!1;return}let fe=!1;b.forEach((le,be)=>{const ze=L[be];if(!ze)return;let q,mt,Ie;le.drag&&le.dragX!==void 0?(q=le.dragX,mt=le.dragY,Ie=0,fe=!0):le.id===p.current&&W!==void 0?(q=W,mt=z,Ie=F):(q=le.sx,mt=le.sy,Ie=le.sr);const je=le.id===p.current&&!le.drag?de:1;le.scale===void 0&&(le.scale=1);const Ne=le.drag?.55:le.id===p.current?.2:.16;le.x+=(q-le.x)*Ne,le.y+=(mt-le.y)*Ne,le.r+=(Ie-le.r)*Ne,le.scale+=(je-le.scale)*Ne,Math.abs(q-le.x)+Math.abs(mt-le.y)+Math.abs(Ie-le.r)+Math.abs(je-le.scale)>.05&&(fe=!0),ze.style.transformOrigin="top left",ze.style.transform=`translate(${le.x}px,${le.y}px) rotate(${le.r}deg) scale(${le.scale})`}),fe?ve=requestAnimationFrame(Q):T=!1},ce=()=>{T||I||(T=!0,ve=requestAnimationFrame(Q))},H=fe=>{p.current=fe,h(fe),b.forEach((le,be)=>{const ze=L[be];if(!ze)return;const q=le.id===fe;ze.style.boxShadow=q?D0:L0,ze.style.zIndex=q?"9":"5",le.dragX=void 0}),se()&&(se().style.opacity=fe?"1":"0",se().style.pointerEvents=fe?"auto":"none"),v.style.overflow=fe?"visible":"hidden",ae()&&(ae().style.opacity=fe?"0":"1"),ce()};g.current=H;const $=[],X=(fe,le)=>{const be=L[le];let ze=0,q=0,mt=!1;be.style.touchAction="none";const Ie=tt=>{tt.preventDefault(),fe.drag=!0,mt=!1,ze=tt.clientX,q=tt.clientY;const $e=w.getBoundingClientRect();fe.grabDX=fe.x-(tt.clientX-$e.left),fe.grabDY=fe.y-(tt.clientY-$e.top),be.setPointerCapture(tt.pointerId),be.style.cursor="grabbing",be.style.zIndex="50",v.style.zIndex="10",v.style.overflow="visible",ce()},je=tt=>{if(!fe.drag)return;Math.abs(tt.clientX-ze)+Math.abs(tt.clientY-q)>6&&(mt=!0);const $e=w.getBoundingClientRect();fe.dragX=tt.clientX-$e.left+fe.grabDX,fe.dragY=tt.clientY-$e.top+fe.grabDY,ce();const R=ee(tt.clientX,tt.clientY);ae()&&p.current===null&&(ae().style.borderColor=R?Xm:"",ae().style.background=R?"rgba(124,92,252,0.04)":"transparent"),x.style.background=R?"var(--bg-target-active)":"var(--bg-surface)"},Ne=tt=>{if(!fe.drag)return;fe.drag=!1,be.style.cursor="grab",be.style.zIndex="5",v.style.zIndex="",ae()&&(ae().style.borderColor="",ae().style.background="transparent"),x.style.background="var(--bg-surface)";const $e=ee(tt.clientX,tt.clientY);!mt||$e?H(fe.id):(p.current===fe.id&&H(null),fe.dragX=void 0),ce()};be.addEventListener("pointerdown",Ie),be.addEventListener("pointermove",je),be.addEventListener("pointerup",Ne),$.push(()=>{be.removeEventListener("pointerdown",Ie),be.removeEventListener("pointermove",je),be.removeEventListener("pointerup",Ne)})};k(),b.forEach((fe,le)=>X(fe,le)),ce();const P=()=>k();window.addEventListener("resize",P,{passive:!0});let V=null,ye=null,j=!1,ue=null;const he=b[0],Ae=()=>{if(p.current||he.drag||j)return;j=!0;const fe=he.sx,le=he.sy,be=he.sr;he.sx=fe+46,he.sy=le-22,he.sr=be+1.5;const ze=L[0];ze&&ze.animate&&ze.animate([{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"},{boxShadow:"0 8px 24px -4px rgba(124,92,252,.18)"},{boxShadow:"0 2px 12px -4px rgba(0,0,0,.08)"}],{duration:1200,easing:"ease-in-out"}),ce(),setTimeout(()=>{p.current||he.drag||(he.sx=fe,he.sy=le,he.sr=be,ce()),j=!1},760)};return typeof IntersectionObserver<"u"&&(ue=new IntersectionObserver(fe=>{fe.forEach(le=>{le.isIntersecting?V||(ye=setTimeout(Ae,600),V=setInterval(Ae,3200)):V&&(clearInterval(V),V=null,ye&&(clearTimeout(ye),ye=null))})},{threshold:.35}),ue.observe(w)),()=>{I=!0,ve&&cancelAnimationFrame(ve),window.removeEventListener("resize",P),$.forEach(fe=>fe()),V&&clearInterval(V),ye&&clearTimeout(ye),ue&&ue.disconnect(),g.current=()=>{}}},[e]);const S=Ye.useCallback(()=>g.current(null),[]),E=Ye.useCallback(w=>g.current(w),[]);return{active:u,setCardRefs:y,closeActive:S,activateCard:E}}const Au={fontFamily:"var(--font-mono)"};function U0(){const[s,e]=Ye.useState(null);return O.jsx("div",{className:"mobile-cards",style:{display:"none",flexDirection:"column",gap:12},children:bl.map(n=>{const r=s===n.id;return O.jsxs("div",{className:"lift-hover",onClick:()=>e(a=>a===n.id?null:n.id),style:{borderRadius:14,overflow:"hidden",background:"var(--bg-surface)",cursor:"pointer",boxShadow:"var(--shadow-card)"},children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 20px"},children:[O.jsxs("div",{children:[O.jsx("div",{style:{...Au,fontSize:10,letterSpacing:"0.04em",color:"var(--text-secondary)",marginBottom:6},children:n.meta}),O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,lineHeight:1.2,color:"var(--text-primary)"},children:n.brief})]}),O.jsx("div",{style:{fontSize:22,color:"var(--text-tertiary)",flex:"none",marginLeft:16},children:r?"−":"+"})]}),r&&O.jsx("div",{style:{padding:"0 20px 22px",borderTop:"1px solid var(--border-subtle)"},children:O.jsxs("div",{style:{paddingTop:18},children:[O.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:16,color:"var(--text-tertiary)",textDecoration:"line-through",textDecorationColor:"var(--accent)"},children:n.brief}),O.jsx("div",{style:{...Au,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--accent)",margin:"16px 0 5px"},children:"The shift"}),O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:20,fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em",color:"var(--text-primary)"},children:n.insight}),O.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.65,color:"var(--text-body)",margin:"16px 0 0"},children:n.body}),O.jsx("div",{style:{display:"flex",gap:32,margin:"20px 0 18px"},children:n.stats.map(a=>O.jsxs("div",{children:[O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(22px,3vw,30px)",fontWeight:600,color:"var(--accent)"},children:a.value}),O.jsx("div",{style:{...Au,fontSize:10,color:"var(--text-secondary)",marginTop:6},children:a.label})]},a.label))}),O.jsx("a",{href:n.mailto,onClick:a=>a.stopPropagation(),style:{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,color:"var(--accent)"},children:"Request full case study →"})]})})]},n.id)})})}const nl={fontFamily:"var(--font-mono)"};function I0({study:s}){return s?O.jsxs("div",{"data-detail":s.id,children:[O.jsx("div",{style:{...nl,fontSize:9,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:22},children:s.metaLong}),O.jsx("div",{style:{...nl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:7},children:"The brief"}),O.jsxs("div",{"data-obvious":"",style:{position:"relative",display:"inline-block",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,26px)",fontWeight:400,lineHeight:1.15,color:"var(--text-secondary)"},children:[s.brief,O.jsx("span",{"data-strike":"",style:{position:"absolute",left:-1,right:-1,top:"53%",height:2,background:"var(--accent)",transform:"scaleX(0)",transformOrigin:"left"}})]}),O.jsx("div",{style:{...nl,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--accent)",margin:"20px 0 6px"},children:"The shift"}),O.jsx("div",{"data-insight":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(20px,2.4vw,28px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em",color:"var(--text-primary)",opacity:0},children:s.insight}),O.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14.5,lineHeight:1.7,color:"var(--text-body)",margin:"20px 0 0",maxWidth:"50ch"},children:s.body}),O.jsx("div",{style:{display:"flex",gap:44,margin:"24px 0"},children:s.stats.map(e=>O.jsxs("div",{children:[O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(24px,3vw,34px)",fontWeight:600,color:"var(--accent)"},children:e.value}),O.jsx("div",{style:{...nl,fontSize:10,color:"var(--text-secondary)",marginTop:8},children:e.label})]},e.label))}),O.jsx("a",{href:s.mailto,style:{fontFamily:"var(--font-body)",fontSize:14,fontWeight:500,color:"var(--accent)"},children:"Request full case study →"})]}):null}const Br={fontFamily:"var(--font-mono)"},F0=[{color:"var(--accent)",opacity:.5},{color:"var(--dot-amber)",opacity:.4},{color:"var(--teal)",opacity:.4}],O0={position:"absolute",left:0,top:0,width:240,cursor:"grab",userSelect:"none",willChange:"transform",zIndex:5,background:"var(--bg-surface)",boxShadow:"var(--shadow-float)",padding:"16px 18px 18px",borderRadius:14};function z0(){const s=Ye.useRef(null),e=Ye.useRef(null),n=Ye.useRef(null),r=Ye.useRef(null),a=Ye.useRef(null),{active:l,setCardRefs:d,closeActive:u}=N0({boardRef:s,scatterRef:e,targetRef:n,emptyRef:r,detailRef:a},bl),h=bl.find(p=>p.id===l)||null;return Ye.useEffect(()=>{if(!l)return;const p=setTimeout(()=>{var _;const g=(_=a.current)==null?void 0:_.querySelector(`[data-detail="${l}"]`);P0(g)},180);return()=>clearTimeout(p)},[l]),O.jsx("section",{id:"work",style:{position:"relative",zIndex:10,marginTop:"-100vh"},children:O.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px) 81px"},children:[O.jsx(U0,{}),O.jsxs("div",{"data-reveal":"",style:{borderRadius:"28px 28px 18px 18px",overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-panel)",transitionDelay:"0.1s"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",borderBottom:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[O.jsx("div",{style:{display:"flex",gap:5},children:F0.map((p,g)=>O.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:p.color,opacity:p.opacity}},g))}),O.jsx("div",{style:{...Br,fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-tertiary)"},children:"01 · Case studies"}),O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:13,fontWeight:500,color:"var(--text-secondary)",marginLeft:4},children:"— The brief vs. the shift"})]}),O.jsxs("div",{style:{...Br,fontSize:9,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"},children:[O.jsx("span",{className:"drag-desktop",children:"Drag a brief into the reader — or click one"}),O.jsx("span",{className:"drag-mobile",style:{display:"none"},children:"Tap a card to open"})]})]}),O.jsxs("div",{ref:s,className:"board",style:{position:"relative",touchAction:"none",display:"grid",gridTemplateColumns:"minmax(280px,0.86fr) minmax(0,1.14fr)",minHeight:600,overflow:"hidden"},children:[O.jsxs("div",{ref:e,className:"scatter",style:{position:"relative",padding:"20px 16px",borderRight:"1px solid var(--border-subtle)",background:"var(--bg-surface-alt)",overflow:"hidden"},children:[O.jsx("div",{style:{...Br,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"Briefs · 04"}),bl.map((p,g)=>O.jsxs("div",{ref:d[g],"data-card":p.id,style:O0,children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,...Br,fontSize:10,color:"var(--text-secondary)"},children:[O.jsx("span",{children:p.meta}),O.jsx("span",{style:{fontWeight:700,color:"var(--border-fade)"},children:p.index})]}),O.jsx("div",{style:{...Br,fontSize:9,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:8},children:"The brief"}),O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,lineHeight:1.2,color:"var(--text-primary)"},children:p.brief})]},p.id))]}),O.jsxs("div",{ref:n,style:{position:"relative",padding:"26px 32px 32px",background:"var(--bg-surface)",transition:"background .25s"},children:[O.jsx("div",{style:{...Br,fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)"},children:"The shift"}),O.jsxs("div",{ref:r,style:{position:"absolute",inset:"52px 32px 32px",border:"1px dashed var(--border-dashed)",borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,transition:"opacity .3s",pointerEvents:"none",opacity:l?0:1},children:[O.jsx("div",{style:{fontSize:28,lineHeight:1,color:"var(--border-fade)",fontWeight:300},children:"↳"}),O.jsxs("div",{style:{textAlign:"center"},children:[O.jsx("div",{className:"drop-desktop",style:{fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Drop a card to read the case study"}),O.jsx("div",{className:"drop-mobile",style:{display:"none",fontFamily:"var(--font-display)",fontSize:18,fontWeight:500,color:"var(--text-primary)"},children:"Tap a card to open"}),O.jsx("div",{style:{...Br,fontSize:10,color:"var(--text-muted)",marginTop:6},children:"the answer glows"})]})]}),O.jsx("div",{ref:a,style:{position:"relative",opacity:l?1:0,transition:"opacity .35s",pointerEvents:l?"auto":"none",paddingTop:22},children:O.jsx(I0,{study:h})}),O.jsx("button",{type:"button",onClick:u,"aria-label":"Close case study",className:"replay-btn",style:{position:"absolute",top:22,right:28,zIndex:12,width:28,height:28,background:"var(--bg-hover)",color:"var(--text-secondary)",border:"none",borderRadius:"50%",display:"grid",placeItems:"center",cursor:"pointer",opacity:l?1:0,pointerEvents:l?"auto":"none",fontSize:14,transition:"opacity .25s"},children:"×"})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="161",k0=0,dp=1,B0=2,jm=1,H0=2,ki=3,Tr=0,Un=1,Bi=2,Sr=0,Vs=1,Go=2,fp=3,hp=4,G0=5,qr=100,V0=101,W0=102,pp=103,mp=104,X0=200,j0=201,q0=202,Y0=203,ud=204,dd=205,$0=206,K0=207,Z0=208,Q0=209,J0=210,e_=211,t_=212,n_=213,i_=214,r_=0,s_=1,o_=2,Ll=3,a_=4,l_=5,c_=6,u_=7,qm=0,d_=1,f_=2,Mr=0,h_=1,p_=2,m_=3,Ym=4,g_=5,v_=6,$m=300,qs=301,Ys=302,fd=303,hd=304,Ol=306,pd=1e3,li=1001,md=1002,Sn=1003,gp=1004,Io=1005,Dn=1006,Ru=1007,$r=1008,Er=1009,__=1010,x_=1011,wd=1012,Km=1013,yr=1014,Hi=1015,Vo=1016,Zm=1017,Qm=1018,Kr=1020,y_=1021,ci=1023,S_=1024,M_=1025,Zr=1026,$s=1027,E_=1028,Jm=1029,T_=1030,eg=1031,tg=1033,Cu=33776,bu=33777,Pu=33778,Lu=33779,vp=35840,_p=35841,xp=35842,yp=35843,ng=36196,Sp=37492,Mp=37496,Ep=37808,Tp=37809,wp=37810,Ap=37811,Rp=37812,Cp=37813,bp=37814,Pp=37815,Lp=37816,Dp=37817,Np=37818,Up=37819,Ip=37820,Fp=37821,Du=36492,Op=36494,zp=36495,w_=36283,kp=36284,Bp=36285,Hp=36286,ig=3e3,Qr=3001,A_=3200,R_=3201,C_=0,b_=1,Qn="",rn="srgb",Xi="srgb-linear",Ad="display-p3",zl="display-p3-linear",Dl="linear",Nt="srgb",Nl="rec709",Ul="p3",Es=7680,Gp=519,P_=512,L_=513,D_=514,rg=515,N_=516,U_=517,I_=518,F_=519,Vp=35044,Wp="300 es",gd=1035,Vi=2e3,Il=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=Math.PI/180,vd=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function pn(s,e,n){return Math.max(e,Math.min(n,s))}function O_(s,e){return(s%e+e)%e}function Uu(s,e,n){return(1-n)*s+n*e}function Xp(s){return(s&s-1)===0&&s!==0}function _d(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,r,a,l,d,u,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,u,h,p)}set(e,n,r,a,l,d,u,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=u,g[3]=n,g[4]=l,g[5]=h,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],u=r[3],h=r[6],p=r[1],g=r[4],_=r[7],y=r[2],S=r[5],E=r[8],w=a[0],v=a[3],x=a[6],L=a[1],b=a[4],D=a[7],W=a[2],z=a[5],F=a[8];return l[0]=d*w+u*L+h*W,l[3]=d*v+u*b+h*z,l[6]=d*x+u*D+h*F,l[1]=p*w+g*L+_*W,l[4]=p*v+g*b+_*z,l[7]=p*x+g*D+_*F,l[2]=y*w+S*L+E*W,l[5]=y*v+S*b+E*z,l[8]=y*x+S*D+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],p=e[7],g=e[8];return n*d*g-n*u*p-r*l*g+r*u*h+a*l*p-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],p=e[7],g=e[8],_=g*d-u*p,y=u*h-g*l,S=p*l-d*h,E=n*_+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(a*p-g*r)*w,e[2]=(u*r-a*d)*w,e[3]=y*w,e[4]=(g*n-a*h)*w,e[5]=(a*l-u*n)*w,e[6]=S*w,e[7]=(r*h-p*n)*w,e[8]=(d*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,d,u){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*d+p*u)+d+e,-a*p,a*h,-a*(-p*d+h*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Iu.makeScale(e,n)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new pt;function sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function z_(){const s=Fl("canvas");return s.style.display="block",s}const jp={};function Ws(s){s in jp||(jp[s]=!0,console.warn(s))}const qp=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yp=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[Xi]:{transfer:Dl,primaries:Nl,toReference:s=>s,fromReference:s=>s},[rn]:{transfer:Nt,primaries:Nl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zl]:{transfer:Dl,primaries:Ul,toReference:s=>s.applyMatrix3(Yp),fromReference:s=>s.applyMatrix3(qp)},[Ad]:{transfer:Nt,primaries:Ul,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Yp),fromReference:s=>s.applyMatrix3(qp).convertLinearToSRGB()}},k_=new Set([Xi,zl]),Ct={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!k_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=il[e].toReference,a=il[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return il[s].primaries},getTransfer:function(s){return s===Qn?Dl:il[s].transfer}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class og{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Fl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Xs(l[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xs(n[r]/255)*255):n[r]=Xs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,u=a.length;d<u;d++)a[d].isDataTexture?l.push(Ou(a[d].image)):l.push(Ou(a[d]))}else l=Ou(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?og.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H_=0;class In extends Zs{constructor(e=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,r=li,a=li,l=Dn,d=$r,u=ci,h=Er,p=In.DEFAULT_ANISOTROPY,g=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Wo(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Qr?rn:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rn?Qr:ig}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qr?rn:Qn}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=$m;In.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,r=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,p=h[0],g=h[4],_=h[8],y=h[1],S=h[5],E=h[9],w=h[2],v=h[6],x=h[10];if(Math.abs(g-y)<.01&&Math.abs(_-w)<.01&&Math.abs(E-v)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+w)<.1&&Math.abs(E+v)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(p+1)/2,D=(S+1)/2,W=(x+1)/2,z=(g+y)/4,F=(_+w)/4,de=(E+v)/4;return b>D&&b>W?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=z/r,l=F/r):D>W?D<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(D),r=z/a,l=de/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=F/l,a=de/l),this.set(r,a,l,n),this}let L=Math.sqrt((v-E)*(v-E)+(_-w)*(_-w)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(v-E)/L,this.y=(_-w)/L,this.z=(y-g)/L,this.w=Math.acos((p+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G_ extends Zs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Qr?rn:Qn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new In(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ag(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends G_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class lg extends In{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V_ extends In{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,d,u){let h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];const y=l[d+0],S=l[d+1],E=l[d+2],w=l[d+3];if(u===0){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(u===1){e[n+0]=y,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(_!==w||h!==y||p!==S||g!==E){let v=1-u;const x=h*y+p*S+g*E+_*w,L=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const W=Math.sqrt(b),z=Math.atan2(W,x*L);v=Math.sin(v*z)/W,u=Math.sin(u*z)/W}const D=u*L;if(h=h*v+y*D,p=p*v+S*D,g=g*v+E*D,_=_*v+w*D,v===1-u){const W=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=W,p*=W,g*=W,_*=W}}e[n]=h,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,l,d){const u=r[a],h=r[a+1],p=r[a+2],g=r[a+3],_=l[d],y=l[d+1],S=l[d+2],E=l[d+3];return e[n]=u*E+g*_+h*S-p*y,e[n+1]=h*E+g*y+p*_-u*S,e[n+2]=p*E+g*S+u*y-h*_,e[n+3]=g*E-u*_-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,d=e._order,u=Math.cos,h=Math.sin,p=u(r/2),g=u(a/2),_=u(l/2),y=h(r/2),S=h(a/2),E=h(l/2);switch(d){case"XYZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"YXZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"ZXY":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"ZYX":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"YZX":this._x=y*g*_+p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_-y*S*E;break;case"XZY":this._x=y*g*_-p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],d=n[1],u=n[5],h=n[9],p=n[2],g=n[6],_=n[10],y=r+u+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(d-a)*S}else if(r>u&&r>_){const S=2*Math.sqrt(1+r-u-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+p)/S}else if(u>_){const S=2*Math.sqrt(1+u-r-_);this._w=(l-p)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-u);this._w=(d-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,d=e._w,u=n._x,h=n._y,p=n._z,g=n._w;return this._x=r*g+d*u+a*p-l*h,this._y=a*g+d*h+l*u-r*p,this._z=l*g+d*p+r*h-a*u,this._w=d*g-r*u-a*h-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let u=d*e._w+r*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,u),_=Math.sin((1-n)*g)/p,y=Math.sin(n*g)/p;return this._w=d*_+this._w*y,this._x=r*_+this._x*y,this._y=a*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(l),r*Math.cos(l),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,d=e.y,u=e.z,h=e.w,p=2*(d*a-u*r),g=2*(u*n-l*a),_=2*(l*r-d*n);return this.x=n+h*p+d*_-u*g,this.y=r+h*g+u*p-l*_,this.z=a+h*_+l*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,d=n.x,u=n.y,h=n.z;return this.x=a*h-l*u,this.y=l*d-r*h,this.z=r*u-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new Y,$p=new Qs;class Xo{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=l.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,si):si.fromBufferAttribute(l,d),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),sl.subVectors(this.max,Oo),ws.subVectors(e.a,Oo),As.subVectors(e.b,Oo),Rs.subVectors(e.c,Oo),hr.subVectors(As,ws),pr.subVectors(Rs,As),Hr.subVectors(ws,Rs);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Hr.z,Hr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Hr.z,0,-Hr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Hr.y,Hr.x,0];return!ku(n,ws,As,Rs,sl)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,ws,As,Rs,sl))?!1:(ol.crossVectors(hr,pr),n=[ol.x,ol.y,ol.z],ku(n,ws,As,Rs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],si=new Y,rl=new Xo,ws=new Y,As=new Y,Rs=new Y,hr=new Y,pr=new Y,Hr=new Y,Oo=new Y,sl=new Y,ol=new Y,Gr=new Y;function ku(s,e,n,r,a){for(let l=0,d=s.length-3;l<=d;l+=3){Gr.fromArray(s,l);const u=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),p=n.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>u)return!1}return!0}const W_=new Xo,zo=new Y,Bu=new Y;class kl{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):W_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Bu)),this.expandByPoint(zo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Y,Hu=new Y,al=new Y,mr=new Y,Gu=new Y,ll=new Y,Vu=new Y;class cg{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Hu.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Hu);const l=e.distanceTo(n)*.5,d=-this.direction.dot(al),u=mr.dot(this.direction),h=-mr.dot(al),p=mr.lengthSq(),g=Math.abs(1-d*d);let _,y,S,E;if(g>0)if(_=d*h-u,y=d*u-h,E=l*g,_>=0)if(y>=-E)if(y<=E){const w=1/g;_*=w,y*=w,S=_*(_+d*y+2*u)+y*(d*_+y+2*h)+p}else y=l,_=Math.max(0,-(d*y+u)),S=-_*_+y*(y+2*h)+p;else y=-l,_=Math.max(0,-(d*y+u)),S=-_*_+y*(y+2*h)+p;else y<=-E?(_=Math.max(0,-(-d*l+u)),y=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+y*(y+2*h)+p):y<=E?(_=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(_=Math.max(0,-(d*l+u)),y=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+y*(y+2*h)+p);else y=d>0?-l:l,_=Math.max(0,-(d*y+u)),S=-_*_+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Hu).addScaledVector(al,y),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),u=r-d,h=r+d;return h<0?null:u<0?this.at(h,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,d,u,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),g>=0?(l=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),_>=0?(u=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(u=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),r>h||u>a)||((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,l){Gu.subVectors(n,e),ll.subVectors(r,e),Vu.crossVectors(Gu,ll);let d=this.direction.dot(Vu),u;if(d>0){if(a)return null;u=1}else if(d<0)u=-1,d=-d;else return null;mr.subVectors(this.origin,e);const h=u*this.direction.dot(ll.crossVectors(mr,ll));if(h<0)return null;const p=u*this.direction.dot(Gu.cross(mr));if(p<0||h+p>d)return null;const g=-u*mr.dot(Vu);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,a,l,d,u,h,p,g,_,y,S,E,w,v){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,u,h,p,g,_,y,S,E,w,v)}set(e,n,r,a,l,d,u,h,p,g,_,y,S,E,w,v){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=a,x[1]=l,x[5]=d,x[9]=u,x[13]=h,x[2]=p,x[6]=g,x[10]=_,x[14]=y,x[3]=S,x[7]=E,x[11]=w,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),l=1/Cs.setFromMatrixColumn(e,1).length(),d=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),u=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=d*g,S=d*_,E=u*g,w=u*_;n[0]=h*g,n[4]=-h*_,n[8]=p,n[1]=S+E*p,n[5]=y-w*p,n[9]=-u*h,n[2]=w-y*p,n[6]=E+S*p,n[10]=d*h}else if(e.order==="YXZ"){const y=h*g,S=h*_,E=p*g,w=p*_;n[0]=y+w*u,n[4]=E*u-S,n[8]=d*p,n[1]=d*_,n[5]=d*g,n[9]=-u,n[2]=S*u-E,n[6]=w+y*u,n[10]=d*h}else if(e.order==="ZXY"){const y=h*g,S=h*_,E=p*g,w=p*_;n[0]=y-w*u,n[4]=-d*_,n[8]=E+S*u,n[1]=S+E*u,n[5]=d*g,n[9]=w-y*u,n[2]=-d*p,n[6]=u,n[10]=d*h}else if(e.order==="ZYX"){const y=d*g,S=d*_,E=u*g,w=u*_;n[0]=h*g,n[4]=E*p-S,n[8]=y*p+w,n[1]=h*_,n[5]=w*p+y,n[9]=S*p-E,n[2]=-p,n[6]=u*h,n[10]=d*h}else if(e.order==="YZX"){const y=d*h,S=d*p,E=u*h,w=u*p;n[0]=h*g,n[4]=w-y*_,n[8]=E*_+S,n[1]=_,n[5]=d*g,n[9]=-u*g,n[2]=-p*g,n[6]=S*_+E,n[10]=y-w*_}else if(e.order==="XZY"){const y=d*h,S=d*p,E=u*h,w=u*p;n[0]=h*g,n[4]=-_,n[8]=p*g,n[1]=y*_+w,n[5]=d*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=u*g,n[10]=w*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,j_)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),gr.crossVectors(r,Hn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),gr.crossVectors(r,Hn)),gr.normalize(),cl.crossVectors(Hn,gr),a[0]=gr.x,a[4]=cl.x,a[8]=Hn.x,a[1]=gr.y,a[5]=cl.y,a[9]=Hn.y,a[2]=gr.z,a[6]=cl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],u=r[4],h=r[8],p=r[12],g=r[1],_=r[5],y=r[9],S=r[13],E=r[2],w=r[6],v=r[10],x=r[14],L=r[3],b=r[7],D=r[11],W=r[15],z=a[0],F=a[4],de=a[8],ve=a[12],T=a[1],I=a[5],ae=a[9],se=a[13],k=a[2],ee=a[6],Q=a[10],ce=a[14],H=a[3],$=a[7],X=a[11],P=a[15];return l[0]=d*z+u*T+h*k+p*H,l[4]=d*F+u*I+h*ee+p*$,l[8]=d*de+u*ae+h*Q+p*X,l[12]=d*ve+u*se+h*ce+p*P,l[1]=g*z+_*T+y*k+S*H,l[5]=g*F+_*I+y*ee+S*$,l[9]=g*de+_*ae+y*Q+S*X,l[13]=g*ve+_*se+y*ce+S*P,l[2]=E*z+w*T+v*k+x*H,l[6]=E*F+w*I+v*ee+x*$,l[10]=E*de+w*ae+v*Q+x*X,l[14]=E*ve+w*se+v*ce+x*P,l[3]=L*z+b*T+D*k+W*H,l[7]=L*F+b*I+D*ee+W*$,l[11]=L*de+b*ae+D*Q+W*X,l[15]=L*ve+b*se+D*ce+W*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],d=e[1],u=e[5],h=e[9],p=e[13],g=e[2],_=e[6],y=e[10],S=e[14],E=e[3],w=e[7],v=e[11],x=e[15];return E*(+l*h*_-a*p*_-l*u*y+r*p*y+a*u*S-r*h*S)+w*(+n*h*S-n*p*y+l*d*y-a*d*S+a*p*g-l*h*g)+v*(+n*p*_-n*u*S-l*d*_+r*d*S+l*u*g-r*p*g)+x*(-a*u*g-n*h*_+n*u*y+a*d*_-r*d*y+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],u=e[5],h=e[6],p=e[7],g=e[8],_=e[9],y=e[10],S=e[11],E=e[12],w=e[13],v=e[14],x=e[15],L=_*v*p-w*y*p+w*h*S-u*v*S-_*h*x+u*y*x,b=E*y*p-g*v*p-E*h*S+d*v*S+g*h*x-d*y*x,D=g*w*p-E*_*p+E*u*S-d*w*S-g*u*x+d*_*x,W=E*_*h-g*w*h-E*u*y+d*w*y+g*u*v-d*_*v,z=n*L+r*b+a*D+l*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=L*F,e[1]=(w*y*l-_*v*l-w*a*S+r*v*S+_*a*x-r*y*x)*F,e[2]=(u*v*l-w*h*l+w*a*p-r*v*p-u*a*x+r*h*x)*F,e[3]=(_*h*l-u*y*l-_*a*p+r*y*p+u*a*S-r*h*S)*F,e[4]=b*F,e[5]=(g*v*l-E*y*l+E*a*S-n*v*S-g*a*x+n*y*x)*F,e[6]=(E*h*l-d*v*l-E*a*p+n*v*p+d*a*x-n*h*x)*F,e[7]=(d*y*l-g*h*l+g*a*p-n*y*p-d*a*S+n*h*S)*F,e[8]=D*F,e[9]=(E*_*l-g*w*l-E*r*S+n*w*S+g*r*x-n*_*x)*F,e[10]=(d*w*l-E*u*l+E*r*p-n*w*p-d*r*x+n*u*x)*F,e[11]=(g*u*l-d*_*l-g*r*p+n*_*p+d*r*S-n*u*S)*F,e[12]=W*F,e[13]=(g*w*a-E*_*a+E*r*y-n*w*y-g*r*v+n*_*v)*F,e[14]=(E*u*a-d*w*a-E*r*h+n*w*h+d*r*v-n*u*v)*F,e[15]=(d*_*a-g*u*a+g*r*h-n*_*h-d*r*y+n*u*y)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,d=e.x,u=e.y,h=e.z,p=l*d,g=l*u;return this.set(p*d+r,p*u-a*h,p*h+a*u,0,p*u+a*h,g*u+r,g*h-a*d,0,p*h-a*u,g*h+a*d,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,d=n._y,u=n._z,h=n._w,p=l+l,g=d+d,_=u+u,y=l*p,S=l*g,E=l*_,w=d*g,v=d*_,x=u*_,L=h*p,b=h*g,D=h*_,W=r.x,z=r.y,F=r.z;return a[0]=(1-(w+x))*W,a[1]=(S+D)*W,a[2]=(E-b)*W,a[3]=0,a[4]=(S-D)*z,a[5]=(1-(y+x))*z,a[6]=(v+L)*z,a[7]=0,a[8]=(E+b)*F,a[9]=(v-L)*F,a[10]=(1-(y+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Cs.set(a[0],a[1],a[2]).length();const d=Cs.set(a[4],a[5],a[6]).length(),u=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/l,g=1/d,_=1/u;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,n.setFromRotationMatrix(oi),r.x=l,r.y=d,r.z=u,this}makePerspective(e,n,r,a,l,d,u=Vi){const h=this.elements,p=2*l/(n-e),g=2*l/(r-a),_=(n+e)/(n-e),y=(r+a)/(r-a);let S,E;if(u===Vi)S=-(d+l)/(d-l),E=-2*d*l/(d-l);else if(u===Il)S=-d/(d-l),E=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,d,u=Vi){const h=this.elements,p=1/(n-e),g=1/(r-a),_=1/(d-l),y=(n+e)*p,S=(r+a)*g;let E,w;if(u===Vi)E=(d+l)*_,w=-2*_;else if(u===Il)E=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new Y,oi=new Yt,X_=new Y(0,0,0),j_=new Y(1,1,1),gr=new Y,cl=new Y,Hn=new Y,Kp=new Yt,Zp=new Qs;class Bl{constructor(e=0,n=0,r=0,a=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],u=a[8],h=a[1],p=a[5],g=a[9],_=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(pn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q_=0;const Qp=new Y,bs=new Qs,Fi=new Yt,ul=new Y,ko=new Y,Y_=new Y,$_=new Qs,Jp=new Y(1,0,0),em=new Y(0,1,0),tm=new Y(0,0,1),K_={type:"added"},Z_={type:"removed"};class Fn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new Y,n=new Bl,r=new Qs,a=new Y(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new pt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ko,ul,this.up):Fi.lookAt(ul,ko,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Fi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(K_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const l=n[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(l(e.materials,this.material[h]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(l(e.animations,h))}}if(n){const u=d(e.geometries),h=d(e.materials),p=d(e.textures),g=d(e.images),_=d(e.shapes),y=d(e.skeletons),S=d(e.animations),E=d(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function d(u){const h=[];for(const p in u){const g=u[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Fn.DEFAULT_UP=new Y(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Y,Oi=new Y,Wu=new Y,zi=new Y,Ps=new Y,Ls=new Y,nm=new Y,Xu=new Y,ju=new Y,qu=new Y;class Si{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ai.subVectors(a,n),Oi.subVectors(r,n),Wu.subVectors(e,n);const d=ai.dot(ai),u=ai.dot(Oi),h=ai.dot(Wu),p=Oi.dot(Oi),g=Oi.dot(Wu),_=d*p-u*u;if(_===0)return l.set(0,0,0),null;const y=1/_,S=(p*h-u*g)*y,E=(d*g-u*h)*y;return l.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,r,a,l,d,u,h){return this.getBarycoord(e,n,r,a,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,zi.x),h.addScaledVector(d,zi.y),h.addScaledVector(u,zi.z),h)}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Oi.subVectors(e,n),ai.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return Si.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let d,u;Ps.subVectors(a,r),Ls.subVectors(l,r),Xu.subVectors(e,r);const h=Ps.dot(Xu),p=Ls.dot(Xu);if(h<=0&&p<=0)return n.copy(r);ju.subVectors(e,a);const g=Ps.dot(ju),_=Ls.dot(ju);if(g>=0&&_<=g)return n.copy(a);const y=h*_-g*p;if(y<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(Ps,d);qu.subVectors(e,l);const S=Ps.dot(qu),E=Ls.dot(qu);if(E>=0&&S<=E)return n.copy(l);const w=S*p-h*E;if(w<=0&&p>=0&&E<=0)return u=p/(p-E),n.copy(r).addScaledVector(Ls,u);const v=g*E-S*_;if(v<=0&&_-g>=0&&S-E>=0)return nm.subVectors(l,a),u=(_-g)/(_-g+(S-E)),n.copy(a).addScaledVector(nm,u);const x=1/(v+w+y);return d=w*x,u=y*x,n.copy(r).addScaledVector(Ps,d).addScaledVector(Ls,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Yu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class We{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ct.workingColorSpace){if(e=O_(e,1),n=pn(n,0,1),r=pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=Yu(d,l,e+1/3),this.g=Yu(d,l,e),this.b=Yu(d,l,e-1/3)}return Ct.toWorkingColorSpace(this,a),this}setStyle(e,n=rn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],u=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=rn){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Fu(e.r),this.g=Fu(e.g),this.b=Fu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ct.fromWorkingColorSpace(fn.copy(this),e),Math.round(pn(fn.r*255,0,255))*65536+Math.round(pn(fn.g*255,0,255))*256+Math.round(pn(fn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,l=fn.b,d=Math.max(r,a,l),u=Math.min(r,a,l);let h,p;const g=(u+d)/2;if(u===d)h=0,p=0;else{const _=d-u;switch(p=g<=.5?_/(d+u):_/(2-d-u),d){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=rn){Ct.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==rn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(dl);const r=Uu(vr.h,dl.h,n),a=Uu(vr.s,dl.s,n),l=Uu(vr.l,dl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new We;We.NAMES=dg;let Q_=0;class jo extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Vs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ud&&(r.blendSrc=this.blendSrc),this.blendDst!==dd&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ll&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const u in l){const h=l[u];delete h.metadata,d.push(h)}return d}if(n){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fg extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new Y,fl=new Tt;class ui{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Vp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ws("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),l=Pn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class hg extends ui{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class pg extends ui{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Nn extends ui{constructor(e,n,r){super(new Float32Array(e),n,r)}}let J_=0;const Kn=new Yt,$u=new Fn,Ds=new Y,Gn=new Xo,Bo=new Xo,en=new Y;class di extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?pg:hg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,r){return Kn.makeTranslation(e,n,r),this.applyMatrix4(Kn),this}scale(e,n,r){return Kn.makeScale(e,n,r),this.applyMatrix4(Kn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const u=n[l];Bo.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(Gn.min,Bo.min),Gn.expandByPoint(en),en.addVectors(Gn.max,Bo.max),Gn.expandByPoint(en)):(Gn.expandByPoint(Bo.min),Gn.expandByPoint(Bo.max))}Gn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)en.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(en));if(n)for(let l=0,d=n.length;l<d;l++){const u=n[l],h=this.morphTargetsRelative;for(let p=0,g=u.count;p<g;p++)en.fromBufferAttribute(u,p),h&&(Ds.fromBufferAttribute(e,p),en.add(Ds)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,l=n.normal.array,d=n.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,p=[],g=[];for(let T=0;T<u;T++)p[T]=new Y,g[T]=new Y;const _=new Y,y=new Y,S=new Y,E=new Tt,w=new Tt,v=new Tt,x=new Y,L=new Y;function b(T,I,ae){_.fromArray(a,T*3),y.fromArray(a,I*3),S.fromArray(a,ae*3),E.fromArray(d,T*2),w.fromArray(d,I*2),v.fromArray(d,ae*2),y.sub(_),S.sub(_),w.sub(E),v.sub(E);const se=1/(w.x*v.y-v.x*w.y);isFinite(se)&&(x.copy(y).multiplyScalar(v.y).addScaledVector(S,-w.y).multiplyScalar(se),L.copy(S).multiplyScalar(w.x).addScaledVector(y,-v.x).multiplyScalar(se),p[T].add(x),p[I].add(x),p[ae].add(x),g[T].add(L),g[I].add(L),g[ae].add(L))}let D=this.groups;D.length===0&&(D=[{start:0,count:r.length}]);for(let T=0,I=D.length;T<I;++T){const ae=D[T],se=ae.start,k=ae.count;for(let ee=se,Q=se+k;ee<Q;ee+=3)b(r[ee+0],r[ee+1],r[ee+2])}const W=new Y,z=new Y,F=new Y,de=new Y;function ve(T){F.fromArray(l,T*3),de.copy(F);const I=p[T];W.copy(I),W.sub(F.multiplyScalar(F.dot(I))).normalize(),z.crossVectors(de,I);const se=z.dot(g[T])<0?-1:1;h[T*4]=W.x,h[T*4+1]=W.y,h[T*4+2]=W.z,h[T*4+3]=se}for(let T=0,I=D.length;T<I;++T){const ae=D[T],se=ae.start,k=ae.count;for(let ee=se,Q=se+k;ee<Q;ee+=3)ve(r[ee+0]),ve(r[ee+1]),ve(r[ee+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new Y,l=new Y,d=new Y,u=new Y,h=new Y,p=new Y,g=new Y,_=new Y;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),v=e.getX(y+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,v),g.subVectors(d,l),_.subVectors(a,l),g.cross(_),u.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,v),u.add(g),h.add(g),p.add(g),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),g.subVectors(d,l),_.subVectors(a,l),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(u,h){const p=u.array,g=u.itemSize,_=u.normalized,y=new p.constructor(h.length*g);let S=0,E=0;for(let w=0,v=h.length;w<v;w++){u.isInterleavedBufferAttribute?S=h[w]*u.data.stride+u.offset:S=h[w]*g;for(let x=0;x<g;x++)y[E++]=p[S++]}return new ui(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,r=this.index.array,a=this.attributes;for(const u in a){const h=a[u],p=e(h,r);n.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const h=[],p=l[u];for(let g=0,_=p.length;g<_;g++){const y=p[g],S=e(y,r);h.push(S)}n.morphAttributes[u]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,h=d.length;u<h;u++){const p=d[u];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(n))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Yt,Vr=new cg,hl=new kl,rm=new Y,Ns=new Y,Us=new Y,Is=new Y,Ku=new Y,pl=new Y,ml=new Tt,gl=new Tt,vl=new Tt,sm=new Y,om=new Y,am=new Y,_l=new Y,xl=new Y;class Wi extends Fn{constructor(e=new di,n=new fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){pl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=u[h],_=l[h];g!==0&&(Ku.fromBufferAttribute(_,e),d?pl.addScaledVector(Ku,g):pl.addScaledVector(Ku.sub(n),g))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(hl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(hl,rm)===null||Vr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,d=this.material,u=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,y=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(d))for(let E=0,w=y.length;E<w;E++){const v=y[E],x=d[v.materialIndex],L=Math.max(v.start,S.start),b=Math.min(u.count,Math.min(v.start+v.count,S.start+S.count));for(let D=L,W=b;D<W;D+=3){const z=u.getX(D),F=u.getX(D+1),de=u.getX(D+2);a=yl(this,x,e,r,p,g,_,z,F,de),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let v=E,x=w;v<x;v+=3){const L=u.getX(v),b=u.getX(v+1),D=u.getX(v+2);a=yl(this,d,e,r,p,g,_,L,b,D),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let E=0,w=y.length;E<w;E++){const v=y[E],x=d[v.materialIndex],L=Math.max(v.start,S.start),b=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let D=L,W=b;D<W;D+=3){const z=D,F=D+1,de=D+2;a=yl(this,x,e,r,p,g,_,z,F,de),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let v=E,x=w;v<x;v+=3){const L=v,b=v+1,D=v+2;a=yl(this,d,e,r,p,g,_,L,b,D),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function ex(s,e,n,r,a,l,d,u){let h;if(e.side===Un?h=r.intersectTriangle(d,l,a,!0,u):h=r.intersectTriangle(a,l,d,e.side===Tr,u),h===null)return null;xl.copy(u),xl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(xl);return p<n.near||p>n.far?null:{distance:p,point:xl.clone(),object:s}}function yl(s,e,n,r,a,l,d,u,h,p){s.getVertexPosition(u,Ns),s.getVertexPosition(h,Us),s.getVertexPosition(p,Is);const g=ex(s,e,n,r,Ns,Us,Is,_l);if(g){a&&(ml.fromBufferAttribute(a,u),gl.fromBufferAttribute(a,h),vl.fromBufferAttribute(a,p),g.uv=Si.getInterpolation(_l,Ns,Us,Is,ml,gl,vl,new Tt)),l&&(ml.fromBufferAttribute(l,u),gl.fromBufferAttribute(l,h),vl.fromBufferAttribute(l,p),g.uv1=Si.getInterpolation(_l,Ns,Us,Is,ml,gl,vl,new Tt),g.uv2=g.uv1),d&&(sm.fromBufferAttribute(d,u),om.fromBufferAttribute(d,h),am.fromBufferAttribute(d,p),g.normal=Si.getInterpolation(_l,Ns,Us,Is,sm,om,am,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:u,b:h,c:p,normal:new Y,materialIndex:0};Si.getNormal(Ns,Us,Is,_.normal),g.face=_}return g}class qo extends di{constructor(e=1,n=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const u=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],p=[],g=[],_=[];let y=0,S=0;E("z","y","x",-1,-1,r,n,e,d,l,0),E("z","y","x",1,-1,r,n,-e,d,l,1),E("x","z","y",1,1,e,r,n,a,d,2),E("x","z","y",1,-1,e,r,-n,a,d,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(_,2));function E(w,v,x,L,b,D,W,z,F,de,ve){const T=D/F,I=W/de,ae=D/2,se=W/2,k=z/2,ee=F+1,Q=de+1;let ce=0,H=0;const $=new Y;for(let X=0;X<Q;X++){const P=X*I-se;for(let V=0;V<ee;V++){const ye=V*T-ae;$[w]=ye*L,$[v]=P*b,$[x]=k,p.push($.x,$.y,$.z),$[w]=0,$[v]=0,$[x]=z>0?1:-1,g.push($.x,$.y,$.z),_.push(V/F),_.push(1-X/de),ce+=1}}for(let X=0;X<de;X++)for(let P=0;P<F;P++){const V=y+P+ee*X,ye=y+P+ee*(X+1),j=y+(P+1)+ee*(X+1),ue=y+(P+1)+ee*X;h.push(V,ye,ue),h.push(ye,j,ue),H+=6}u.addGroup(S,H,ve),S+=H,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function tx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function mg(s){return s.getRenderTarget()===null?s.outputColorSpace:Ct.workingColorSpace}const nx={clone:Ks,merge:yn};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gg extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new Y,lm=new Tt,cm=new Tt;class Zn extends gg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vd*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,lm,cm),n.subVectors(cm,lm)}setViewOffset(e,n,r,a,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,p=d.fullHeight;l+=d.offsetX*a/h,n-=d.offsetY*r/p,a*=d.width/h,r*=d.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class sx extends Fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const l=new Zn(Fs,Os,e,n);l.layers=this.layers,this.add(l);const d=new Zn(Fs,Os,e,n);d.layers=this.layers,this.add(d);const u=new Zn(Fs,Os,e,n);u.layers=this.layers,this.add(u);const h=new Zn(Fs,Os,e,n);h.layers=this.layers,this.add(h);const p=new Zn(Fs,Os,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,d,u,h]=n;for(const p of n)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,u,h,p,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,u),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(_,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vg extends In{constructor(e,n,r,a,l,d,u,h,p,g){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,r,a,l,d,u,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qr?rn:Qn),this.texture=new vg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qo(5,5,5),l=new Mi({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Sr});l.uniforms.tEquirect.value=n;const d=new Wi(a,l),u=n.minFilter;return n.minFilter===$r&&(n.minFilter=Dn),new sx(1,10,this).update(e,d),n.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(l)}}const Zu=new Y,ax=new Y,lx=new pt;class Xr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Zu.subVectors(r,n).cross(ax.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||lx.getNormalMatrix(e),a=this.coplanarPoint(Zu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new kl,Sl=new Y;class _g{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,l=new Xr,d=new Xr){this.planes=[e,n,r,a,l,d]}set(e,n,r,a,l,d){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(a),u[4].copy(l),u[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,l=a[0],d=a[1],u=a[2],h=a[3],p=a[4],g=a[5],_=a[6],y=a[7],S=a[8],E=a[9],w=a[10],v=a[11],x=a[12],L=a[13],b=a[14],D=a[15];if(r[0].setComponents(h-l,y-p,v-S,D-x).normalize(),r[1].setComponents(h+l,y+p,v+S,D+x).normalize(),r[2].setComponents(h+d,y+g,v+E,D+L).normalize(),r[3].setComponents(h-d,y-g,v-E,D-L).normalize(),r[4].setComponents(h-u,y-_,v-w,D-b).normalize(),n===Vi)r[5].setComponents(h+u,y+_,v+w,D+b).normalize();else if(n===Il)r[5].setComponents(u,_,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xg(){let s=null,e=!1,n=null,r=null;function a(l,d){n(l,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function cx(s,e){const n=e.isWebGL2,r=new WeakMap;function a(p,g){const _=p.array,y=p.usage,S=_.byteLength,E=s.createBuffer();s.bindBuffer(g,E),s.bufferData(g,_,y),p.onUploadCallback();let w;if(_ instanceof Float32Array)w=s.FLOAT;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=s.SHORT;else if(_ instanceof Uint32Array)w=s.UNSIGNED_INT;else if(_ instanceof Int32Array)w=s.INT;else if(_ instanceof Int8Array)w=s.BYTE;else if(_ instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,g,_){const y=g.array,S=g._updateRange,E=g.updateRanges;if(s.bindBuffer(_,p),S.count===-1&&E.length===0&&s.bufferSubData(_,0,y),E.length!==0){for(let w=0,v=E.length;w<v;w++){const x=E[w];n?s.bufferSubData(_,x.start*y.BYTES_PER_ELEMENT,y,x.start,x.count):s.bufferSubData(_,x.start*y.BYTES_PER_ELEMENT,y.subarray(x.start,x.start+x.count))}g.clearUpdateRanges()}S.count!==-1&&(n?s.bufferSubData(_,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(_,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(s.deleteBuffer(g.buffer),r.delete(p))}function h(p,g){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);if(_===void 0)r.set(p,a(p,g));else if(_.version<p.version){if(_.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(_.buffer,p,g),_.version=p.version}}return{get:d,remove:u,update:h}}class Hl extends di{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,d=n/2,u=Math.floor(r),h=Math.floor(a),p=u+1,g=h+1,_=e/u,y=n/h,S=[],E=[],w=[],v=[];for(let x=0;x<g;x++){const L=x*y-d;for(let b=0;b<p;b++){const D=b*_-l;E.push(D,-L,0),w.push(0,0,1),v.push(b/u),v.push(1-x/h)}}for(let x=0;x<h;x++)for(let L=0;L<u;L++){const b=L+p*x,D=L+p*(x+1),W=L+1+p*(x+1),z=L+1+p*x;S.push(b,D,z),S.push(D,W,z)}this.setIndex(S),this.setAttribute("position",new Nn(E,3)),this.setAttribute("normal",new Nn(w,3)),this.setAttribute("uv",new Nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
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
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
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
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ex=`#ifdef USE_IRIDESCENCE
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
#endif`,Tx=`#ifdef USE_BUMPMAP
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nx=`#define PI 3.141592653589793
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`
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
}`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
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
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ly=`PhysicalMaterial material;
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
#endif`,cy=`struct PhysicalMaterial {
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
}`,uy=`
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`#ifdef USE_MORPHTARGETS
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
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
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
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,CS=`#define MATCAP
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
}`,bS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,NS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,FS=`#define TOON
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
}`,OS=`uniform float size;
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
}`,zS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,BS=`uniform vec3 color;
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
}`,HS=`uniform float rotation;
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
}`,GS=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:fx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:vx,batching_pars_vertex:_x,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:Sx,bsdfs:Mx,iridescence_fragment:Ex,bumpmap_pars_fragment:Tx,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:bx,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Dx,common:Nx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Fx,displacementmap_vertex:Ox,emissivemap_fragment:zx,emissivemap_pars_fragment:kx,colorspace_fragment:Bx,colorspace_pars_fragment:Hx,envmap_fragment:Gx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:iy,envmap_vertex:jx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:$x,fog_pars_fragment:Kx,gradientmap_pars_fragment:Zx,lightmap_fragment:Qx,lightmap_pars_fragment:Jx,lights_lambert_fragment:ey,lights_lambert_pars_fragment:ty,lights_pars_begin:ny,lights_toon_fragment:ry,lights_toon_pars_fragment:sy,lights_phong_fragment:oy,lights_phong_pars_fragment:ay,lights_physical_fragment:ly,lights_physical_pars_fragment:cy,lights_fragment_begin:uy,lights_fragment_maps:dy,lights_fragment_end:fy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:vy,map_pars_fragment:_y,map_particle_fragment:xy,map_particle_pars_fragment:yy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:My,morphcolor_vertex:Ey,morphnormal_vertex:Ty,morphtarget_pars_vertex:wy,morphtarget_vertex:Ay,normal_fragment_begin:Ry,normal_fragment_maps:Cy,normal_pars_fragment:by,normal_pars_vertex:Py,normal_vertex:Ly,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Fy,opaque_fragment:Oy,packing:zy,premultiplied_alpha_fragment:ky,project_vertex:By,dithering_fragment:Hy,dithering_pars_fragment:Gy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:jy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:$y,skinning_pars_vertex:Ky,skinning_vertex:Zy,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:vS,distanceRGBA_frag:_S,equirect_vert:xS,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:wS,meshlambert_frag:AS,meshmatcap_vert:RS,meshmatcap_frag:CS,meshnormal_vert:bS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:DS,meshphysical_vert:NS,meshphysical_frag:US,meshtoon_vert:IS,meshtoon_frag:FS,points_vert:OS,points_frag:zS,shadow_vert:kS,shadow_frag:BS,sprite_vert:HS,sprite_frag:GS},Re={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},yi={basic:{uniforms:yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:yn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:yn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:yn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:yn([Re.points,Re.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:yn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:yn([Re.common,Re.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:yn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:yn([Re.sprite,Re.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:yn([Re.common,Re.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:yn([Re.lights,Re.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ml={r:0,b:0,g:0};function VS(s,e,n,r,a,l,d){const u=new We(0);let h=l===!0?0:1,p,g,_=null,y=0,S=null;function E(v,x){let L=!1,b=x.isScene===!0?x.background:null;b&&b.isTexture&&(b=(x.backgroundBlurriness>0?n:e).get(b)),b===null?w(u,h):b&&b.isColor&&(w(b,1),L=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||L)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ol)?(g===void 0&&(g=new Wi(new qo(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ks(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(W,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),g.material.uniforms.envMap.value=b,g.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(b.colorSpace)!==Nt,(_!==b||y!==b.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=b,y=b.version,S=s.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Wi(new Hl(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ks(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||y!==b.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=b,y=b.version,S=s.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function w(v,x){v.getRGB(Ml,mg(s)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,x,d)}return{getClearColor:function(){return u},setClearColor:function(v,x=1){u.set(v),h=x,w(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,w(u,h)},render:E}}function WS(s,e,n,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||l!==null,u={},h=v(null);let p=h,g=!1;function _(k,ee,Q,ce,H){let $=!1;if(d){const X=w(ce,Q,ee);p!==X&&(p=X,S(p.object)),$=x(k,ce,Q,H),$&&L(k,ce,Q,H)}else{const X=ee.wireframe===!0;(p.geometry!==ce.id||p.program!==Q.id||p.wireframe!==X)&&(p.geometry=ce.id,p.program=Q.id,p.wireframe=X,$=!0)}H!==null&&n.update(H,s.ELEMENT_ARRAY_BUFFER),($||g)&&(g=!1,de(k,ee,Q,ce),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(k){return r.isWebGL2?s.bindVertexArray(k):l.bindVertexArrayOES(k)}function E(k){return r.isWebGL2?s.deleteVertexArray(k):l.deleteVertexArrayOES(k)}function w(k,ee,Q){const ce=Q.wireframe===!0;let H=u[k.id];H===void 0&&(H={},u[k.id]=H);let $=H[ee.id];$===void 0&&($={},H[ee.id]=$);let X=$[ce];return X===void 0&&(X=v(y()),$[ce]=X),X}function v(k){const ee=[],Q=[],ce=[];for(let H=0;H<a;H++)ee[H]=0,Q[H]=0,ce[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Q,attributeDivisors:ce,object:k,attributes:{},index:null}}function x(k,ee,Q,ce){const H=p.attributes,$=ee.attributes;let X=0;const P=Q.getAttributes();for(const V in P)if(P[V].location>=0){const j=H[V];let ue=$[V];if(ue===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),j===void 0||j.attribute!==ue||ue&&j.data!==ue.data)return!0;X++}return p.attributesNum!==X||p.index!==ce}function L(k,ee,Q,ce){const H={},$=ee.attributes;let X=0;const P=Q.getAttributes();for(const V in P)if(P[V].location>=0){let j=$[V];j===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(j=k.instanceColor));const ue={};ue.attribute=j,j&&j.data&&(ue.data=j.data),H[V]=ue,X++}p.attributes=H,p.attributesNum=X,p.index=ce}function b(){const k=p.newAttributes;for(let ee=0,Q=k.length;ee<Q;ee++)k[ee]=0}function D(k){W(k,0)}function W(k,ee){const Q=p.newAttributes,ce=p.enabledAttributes,H=p.attributeDivisors;Q[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),H[k]!==ee&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ee),H[k]=ee)}function z(){const k=p.newAttributes,ee=p.enabledAttributes;for(let Q=0,ce=ee.length;Q<ce;Q++)ee[Q]!==k[Q]&&(s.disableVertexAttribArray(Q),ee[Q]=0)}function F(k,ee,Q,ce,H,$,X){X===!0?s.vertexAttribIPointer(k,ee,Q,H,$):s.vertexAttribPointer(k,ee,Q,ce,H,$)}function de(k,ee,Q,ce){if(r.isWebGL2===!1&&(k.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const H=ce.attributes,$=Q.getAttributes(),X=ee.defaultAttributeValues;for(const P in $){const V=$[P];if(V.location>=0){let ye=H[P];if(ye===void 0&&(P==="instanceMatrix"&&k.instanceMatrix&&(ye=k.instanceMatrix),P==="instanceColor"&&k.instanceColor&&(ye=k.instanceColor)),ye!==void 0){const j=ye.normalized,ue=ye.itemSize,he=n.get(ye);if(he===void 0)continue;const Ae=he.buffer,fe=he.type,le=he.bytesPerElement,be=r.isWebGL2===!0&&(fe===s.INT||fe===s.UNSIGNED_INT||ye.gpuType===Km);if(ye.isInterleavedBufferAttribute){const ze=ye.data,q=ze.stride,mt=ye.offset;if(ze.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)W(V.location+Ie,ze.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)D(V.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Ie=0;Ie<V.locationSize;Ie++)F(V.location+Ie,ue/V.locationSize,fe,j,q*le,(mt+ue/V.locationSize*Ie)*le,be)}else{if(ye.isInstancedBufferAttribute){for(let ze=0;ze<V.locationSize;ze++)W(V.location+ze,ye.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<V.locationSize;ze++)D(V.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ze=0;ze<V.locationSize;ze++)F(V.location+ze,ue/V.locationSize,fe,j,ue*le,ue/V.locationSize*ze*le,be)}}else if(X!==void 0){const j=X[P];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(V.location,j);break;case 3:s.vertexAttrib3fv(V.location,j);break;case 4:s.vertexAttrib4fv(V.location,j);break;default:s.vertexAttrib1fv(V.location,j)}}}}z()}function ve(){ae();for(const k in u){const ee=u[k];for(const Q in ee){const ce=ee[Q];for(const H in ce)E(ce[H].object),delete ce[H];delete ee[Q]}delete u[k]}}function T(k){if(u[k.id]===void 0)return;const ee=u[k.id];for(const Q in ee){const ce=ee[Q];for(const H in ce)E(ce[H].object),delete ce[H];delete ee[Q]}delete u[k.id]}function I(k){for(const ee in u){const Q=u[ee];if(Q[k.id]===void 0)continue;const ce=Q[k.id];for(const H in ce)E(ce[H].object),delete ce[H];delete Q[k.id]}}function ae(){se(),g=!0,p!==h&&(p=h,S(p.object))}function se(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:_,reset:ae,resetDefaultState:se,dispose:ve,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:D,disableUnusedAttributes:z}}function XS(s,e,n,r){const a=r.isWebGL2;let l;function d(g){l=g}function u(g,_){s.drawArrays(l,g,_),n.update(_,l,1)}function h(g,_,y){if(y===0)return;let S,E;if(a)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,g,_,y),n.update(_,l,y)}function p(g,_,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<y;E++)this.render(g[E],_[E]);else{S.multiDrawArraysWEBGL(l,g,0,_,0,y);let E=0;for(let w=0;w<y;w++)E+=_[w];n.update(E,l,1)}}this.setMode=d,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function jS(s,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=y>0,D=d||e.has("OES_texture_float"),W=b&&D,z=d?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:L,vertexTextures:b,floatFragmentTextures:D,floatVertexTextures:W,maxSamples:z}}function qS(s){const e=this;let n=null,r=0,a=!1,l=!1;const d=new Xr,u=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||a;return a=y,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){n=g(_,y,0)},this.setState=function(_,y,S){const E=_.clippingPlanes,w=_.clipIntersection,v=_.clipShadows,x=s.get(_);if(!a||E===null||E.length===0||l&&!v)l?g(null):p();else{const L=l?0:r,b=L*4;let D=x.clippingState||null;h.value=D,D=g(E,y,b,S);for(let W=0;W!==b;++W)D[W]=n[W];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,y,S,E){const w=_!==null?_.length:0;let v=null;if(w!==0){if(v=h.value,E!==!0||v===null){const x=S+w*4,L=y.matrixWorldInverse;u.getNormalMatrix(L),(v===null||v.length<x)&&(v=new Float32Array(x));for(let b=0,D=S;b!==w;++b,D+=4)d.copy(_[b]).applyMatrix4(L,u),d.normal.toArray(v,D),v[D+3]=d.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function YS(s){let e=new WeakMap;function n(d,u){return u===fd?d.mapping=qs:u===hd&&(d.mapping=Ys),d}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===fd||u===hd)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const p=new ox(h.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",a),n(p.texture,d.mapping)}else return null}}return d}function a(d){const u=d.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class $S extends gg{constructor(e=-1,n=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,u=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,u-=g*this.view.offsetY,h=u-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=4,um=[.125,.215,.35,.446,.526,.582],Yr=20,Qu=new $S,dm=new We;let Ju=null,ed=0,td=0;const jr=(1+Math.sqrt(5))/2,zs=1/jr,fm=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,jr,zs),new Y(0,jr,-zs),new Y(zs,0,jr),new Y(-zs,0,jr),new Y(jr,zs,0),new Y(-jr,zs,0)];class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ed,td),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Vo,format:ci,colorSpace:Xi,depthBuffer:!1},a=pm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KS(l)),this._blurMaterial=ZS(l,e,n)}return a}_compileMaterial(e){const n=new Wi(this._lodPlanes[0],e);this._renderer.compile(n,Qu)}_sceneToCubeUV(e,n,r,a){const u=new Zn(90,1,n,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(dm),g.toneMapping=Mr,g.autoClear=!1;const S=new fg({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new Wi(new qo,S);let w=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,w=!0):(S.color.copy(dm),w=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(u.up.set(0,h[x],0),u.lookAt(p[x],0,0)):L===1?(u.up.set(0,0,h[x]),u.lookAt(0,p[x],0)):(u.up.set(0,h[x],0),u.lookAt(0,0,p[x]));const b=this._cubeSize;El(a,L*b,x>2?b:0,b,b),g.setRenderTarget(a),w&&g.render(E,u),g.render(e,u)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===qs||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mm());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new Wi(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;El(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Qu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=fm[(a-1)%fm.length];this._blur(e,a-1,a,l,d)}n.autoClear=r}_blur(e,n,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,d,u){const h=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Wi(this._lodPlanes[a],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Yr-1),w=l/E,v=isFinite(l)?1+Math.floor(g*w):Yr;v>Yr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Yr}`);const x=[];let L=0;for(let F=0;F<Yr;++F){const de=F/w,ve=Math.exp(-de*de/2);x.push(ve),F===0?L+=ve:F<v&&(L+=2*ve)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=x,y.latitudinal.value=d==="latitudinal",u&&(y.poleAxis.value=u);const{_lodMax:b}=this;y.dTheta.value=E,y.mipInt.value=b-r;const D=this._sizeLods[a],W=3*D*(a>b-Bs?a-b+Bs:0),z=4*(this._cubeSize-D);El(n,W,z,3*D,2*D),h.setRenderTarget(n),h.render(_,Qu)}}function KS(s){const e=[],n=[],r=[];let a=s;const l=s-Bs+1+um.length;for(let d=0;d<l;d++){const u=Math.pow(2,a);n.push(u);let h=1/u;d>s-Bs?h=um[d-s+Bs-1]:d===0&&(h=0),r.push(h);const p=1/(u-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,v=2,x=1,L=new Float32Array(w*E*S),b=new Float32Array(v*E*S),D=new Float32Array(x*E*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,de=z>2?0:-1,ve=[F,de,0,F+2/3,de,0,F+2/3,de+1,0,F,de,0,F+2/3,de+1,0,F,de+1,0];L.set(ve,w*E*z),b.set(y,v*E*z);const T=[z,z,z,z,z,z];D.set(T,x*E*z)}const W=new di;W.setAttribute("position",new ui(L,w)),W.setAttribute("uv",new ui(b,v)),W.setAttribute("faceIndex",new ui(D,x)),e.push(W),a>Bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function pm(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function ZS(s,e,n){const r=new Float32Array(Yr),a=new Y(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function mm(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function gm(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function QS(s){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const h=u.mapping,p=h===fd||h===hd,g=h===qs||h===Ys;if(p||g)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let _=e.get(u);return n===null&&(n=new hm(s)),_=p?n.fromEquirectangular(u,_):n.fromCubemap(u,_),e.set(u,_),_.texture}else{if(e.has(u))return e.get(u).texture;{const _=u.image;if(p&&_&&_.height>0||g&&_&&a(_)){n===null&&(n=new hm(s));const y=p?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,y),u.addEventListener("dispose",l),y.texture}else return null}}}return u}function a(u){let h=0;const p=6;for(let g=0;g<p;g++)u[g]!==void 0&&h++;return h===p}function l(u){const h=u.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function JS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function eM(s,e,n,r){const a={},l=new WeakMap;function d(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const w=y.morphAttributes[E];for(let v=0,x=w.length;v<x;v++)e.remove(w[v])}y.removeEventListener("dispose",d),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function u(_,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function h(_){const y=_.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const E in S){const w=S[E];for(let v=0,x=w.length;v<x;v++)e.update(w[v],s.ARRAY_BUFFER)}}function p(_){const y=[],S=_.index,E=_.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let b=0,D=L.length;b<D;b+=3){const W=L[b+0],z=L[b+1],F=L[b+2];y.push(W,z,z,F,F,W)}}else if(E!==void 0){const L=E.array;w=E.version;for(let b=0,D=L.length/3-1;b<D;b+=3){const W=b+0,z=b+1,F=b+2;y.push(W,z,z,F,F,W)}}else return;const v=new(sg(y)?pg:hg)(y,1);v.version=w;const x=l.get(_);x&&e.remove(x),l.set(_,v)}function g(_){const y=l.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:u,update:h,getWireframeAttribute:g}}function tM(s,e,n,r){const a=r.isWebGL2;let l;function d(S){l=S}let u,h;function p(S){u=S.type,h=S.bytesPerElement}function g(S,E){s.drawElements(l,E,u,S*h),n.update(E,l,1)}function _(S,E,w){if(w===0)return;let v,x;if(a)v=s,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](l,E,u,S*h,w),n.update(E,l,w)}function y(S,E,w){if(w===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<w;x++)this.render(S[x]/h,E[x]);else{v.multiDrawElementsWEBGL(l,E,0,u,S,0,w);let x=0;for(let L=0;L<w;L++)x+=E[L];n.update(x,l,1)}}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=_,this.renderMultiDraw=y}function nM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,u){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=u*(l/3);break;case s.LINES:n.lines+=u*(l/2);break;case s.LINE_STRIP:n.lines+=u*(l-1);break;case s.LINE_LOOP:n.lines+=u*l;break;case s.POINTS:n.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function iM(s,e){return s[0]-e[0]}function rM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function sM(s,e,n){const r={},a=new Float32Array(8),l=new WeakMap,d=new sn,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function h(p,g,_){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=E!==void 0?E.length:0;let v=l.get(g);if(v===void 0||v.count!==w){let ee=function(){se.dispose(),l.delete(g),g.removeEventListener("dispose",ee)};var S=ee;v!==void 0&&v.texture.dispose();const b=g.morphAttributes.position!==void 0,D=g.morphAttributes.normal!==void 0,W=g.morphAttributes.color!==void 0,z=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],de=g.morphAttributes.color||[];let ve=0;b===!0&&(ve=1),D===!0&&(ve=2),W===!0&&(ve=3);let T=g.attributes.position.count*ve,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ae=new Float32Array(T*I*4*w),se=new lg(ae,T,I,w);se.type=Hi,se.needsUpdate=!0;const k=ve*4;for(let Q=0;Q<w;Q++){const ce=z[Q],H=F[Q],$=de[Q],X=T*I*4*Q;for(let P=0;P<ce.count;P++){const V=P*k;b===!0&&(d.fromBufferAttribute(ce,P),ae[X+V+0]=d.x,ae[X+V+1]=d.y,ae[X+V+2]=d.z,ae[X+V+3]=0),D===!0&&(d.fromBufferAttribute(H,P),ae[X+V+4]=d.x,ae[X+V+5]=d.y,ae[X+V+6]=d.z,ae[X+V+7]=0),W===!0&&(d.fromBufferAttribute($,P),ae[X+V+8]=d.x,ae[X+V+9]=d.y,ae[X+V+10]=d.z,ae[X+V+11]=$.itemSize===4?d.w:1)}}v={count:w,texture:se,size:new Tt(T,I)},l.set(g,v),g.addEventListener("dispose",ee)}let x=0;for(let b=0;b<y.length;b++)x+=y[b];const L=g.morphTargetsRelative?1:1-x;_.getUniforms().setValue(s,"morphTargetBaseInfluence",L),_.getUniforms().setValue(s,"morphTargetInfluences",y),_.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),_.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const E=y===void 0?0:y.length;let w=r[g.id];if(w===void 0||w.length!==E){w=[];for(let D=0;D<E;D++)w[D]=[D,0];r[g.id]=w}for(let D=0;D<E;D++){const W=w[D];W[0]=D,W[1]=y[D]}w.sort(rM);for(let D=0;D<8;D++)D<E&&w[D][1]?(u[D][0]=w[D][0],u[D][1]=w[D][1]):(u[D][0]=Number.MAX_SAFE_INTEGER,u[D][1]=0);u.sort(iM);const v=g.morphAttributes.position,x=g.morphAttributes.normal;let L=0;for(let D=0;D<8;D++){const W=u[D],z=W[0],F=W[1];z!==Number.MAX_SAFE_INTEGER&&F?(v&&g.getAttribute("morphTarget"+D)!==v[z]&&g.setAttribute("morphTarget"+D,v[z]),x&&g.getAttribute("morphNormal"+D)!==x[z]&&g.setAttribute("morphNormal"+D,x[z]),a[D]=F,L+=F):(v&&g.hasAttribute("morphTarget"+D)===!0&&g.deleteAttribute("morphTarget"+D),x&&g.hasAttribute("morphNormal"+D)===!0&&g.deleteAttribute("morphNormal"+D),a[D]=0)}const b=g.morphTargetsRelative?1:1-L;_.getUniforms().setValue(s,"morphTargetBaseInfluence",b),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function oM(s,e,n,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==p&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return _}function d(){a=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:d}}class yg extends In{constructor(e,n,r,a,l,d,u,h,p,g){if(g=g!==void 0?g:Zr,g!==Zr&&g!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Zr&&(r=yr),r===void 0&&g===$s&&(r=Kr),super(null,a,l,d,u,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:Sn,this.minFilter=h!==void 0?h:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sg=new In,Mg=new yg(1,1);Mg.compareFunction=rg;const Eg=new lg,Tg=new V_,wg=new vg,vm=[],_m=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=vm[a];if(l===void 0&&(l=new Float32Array(a),vm[a]=l),e!==0){r.toArray(l,0);for(let d=1,u=0;d!==e;++d)u+=n,s[d].toArray(l,u)}return l}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function aM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Kt(n,r)}}function fM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;ym.set(r),s.uniformMatrix3fv(this.addr,!1,ym),Kt(n,r)}}function hM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;xm.set(r),s.uniformMatrix4fv(this.addr,!1,xm),Kt(n,r)}}function pM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function _M(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function SM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function MM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Mg:Sg;n.setTexture2D(e||l,a)}function EM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Tg,a)}function TM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||wg,a)}function wM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Eg,a)}function AM(s){switch(s){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return uM;case 35674:return dM;case 35675:return fM;case 35676:return hM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return vM;case 5125:return _M;case 36294:return xM;case 36295:return yM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return wM}}function RM(s,e){s.uniform1fv(this.addr,e)}function CM(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function bM(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function PM(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function LM(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function DM(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function NM(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function UM(s,e){s.uniform1iv(this.addr,e)}function IM(s,e){s.uniform2iv(this.addr,e)}function FM(s,e){s.uniform3iv(this.addr,e)}function OM(s,e){s.uniform4iv(this.addr,e)}function zM(s,e){s.uniform1uiv(this.addr,e)}function kM(s,e){s.uniform2uiv(this.addr,e)}function BM(s,e){s.uniform3uiv(this.addr,e)}function HM(s,e){s.uniform4uiv(this.addr,e)}function GM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);$t(r,l)||(s.uniform1iv(this.addr,l),Kt(r,l));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Sg,l[d])}function VM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);$t(r,l)||(s.uniform1iv(this.addr,l),Kt(r,l));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Tg,l[d])}function WM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);$t(r,l)||(s.uniform1iv(this.addr,l),Kt(r,l));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||wg,l[d])}function XM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);$t(r,l)||(s.uniform1iv(this.addr,l),Kt(r,l));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Eg,l[d])}function jM(s){switch(s){case 5126:return RM;case 35664:return CM;case 35665:return bM;case 35666:return PM;case 35674:return LM;case 35675:return DM;case 35676:return NM;case 5124:case 35670:return UM;case 35667:case 35671:return IM;case 35668:case 35672:return FM;case 35669:case 35673:return OM;case 5125:return zM;case 36294:return kM;case 36295:return BM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}class qM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=AM(n.type)}}class YM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jM(n.type)}}class $M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const u=a[l];u.setValue(e,n[u.id],r)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function KM(s,e,n){const r=s.name,a=r.length;for(nd.lastIndex=0;;){const l=nd.exec(r),d=nd.lastIndex;let u=l[1];const h=l[2]==="]",p=l[3];if(h&&(u=u|0),p===void 0||p==="["&&d+2===a){Mm(n,p===void 0?new qM(u,s,e):new YM(u,s,e));break}else{let _=n.map[u];_===void 0&&(_=new $M(u),Mm(n,_)),n=_}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),d=e.getUniformLocation(n,l.name);KM(l,d,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,d=n.length;l!==d;++l){const u=n[l],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const ZM=37297;let QM=0;function JM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=a;d<l;d++){const u=d+1;r.push(`${u===e?">":" "} ${u}: ${n[d]}`)}return r.join(`
`)}function eE(s){const e=Ct.getPrimaries(Ct.workingColorSpace),n=Ct.getPrimaries(s);let r;switch(e===n?r="":e===Ul&&n===Nl?r="LinearDisplayP3ToLinearSRGB":e===Nl&&n===Ul&&(r="LinearSRGBToLinearDisplayP3"),s){case Xi:case zl:return[r,"LinearTransferOETF"];case rn:case Ad:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+JM(s.getShaderSource(e),d)}else return a}function tE(s,e){const n=eE(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nE(s,e){let n;switch(e){case h_:n="Linear";break;case p_:n="Reinhard";break;case m_:n="OptimizedCineon";break;case Ym:n="ACESFilmic";break;case v_:n="AgX";break;case g_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function rE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function sE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function oE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),d=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),n[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:u}}return n}function Hs(s){return s!==""}function wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(s){return s.replace(aE,cE)}const lE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cE(s,e){let n=dt[e];if(n===void 0){const r=lE.get(e);if(r!==void 0)n=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xd(n)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(s){return s.replace(uE,dE)}function dE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Cm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function hE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function mE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qm:e="ENVMAP_BLENDING_MULTIPLY";break;case d_:e="ENVMAP_BLENDING_MIX";break;case f_:e="ENVMAP_BLENDING_ADD";break}return e}function gE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function vE(s,e,n,r){const a=s.getContext(),l=n.defines;let d=n.vertexShader,u=n.fragmentShader;const h=fE(n),p=hE(n),g=pE(n),_=mE(n),y=gE(n),S=n.isWebGL2?"":iE(n),E=rE(n),w=sE(l),v=a.createProgram();let x,L,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Hs).join(`
`),x.length>0&&(x+=`
`),L=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Hs).join(`
`),L.length>0&&(L+=`
`)):(x=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),L=[S,Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?dt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?nE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,tE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hs).join(`
`)),d=xd(d),d=wm(d,n),d=Am(d,n),u=xd(u),u=wm(u,n),u=Am(u,n),d=Rm(d),u=Rm(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,L=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const D=b+x+d,W=b+L+u,z=Em(a,a.VERTEX_SHADER,D),F=Em(a,a.FRAGMENT_SHADER,W);a.attachShader(v,z),a.attachShader(v,F),n.index0AttributeName!==void 0?a.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function de(ae){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(v).trim(),k=a.getShaderInfoLog(z).trim(),ee=a.getShaderInfoLog(F).trim();let Q=!0,ce=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,v,z,F);else{const H=Tm(a,z,"vertex"),$=Tm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+ae.name+`
Material Type: `+ae.type+`

Program Info Log: `+se+`
`+H+`
`+$)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(k===""||ee==="")&&(ce=!1);ce&&(ae.diagnostics={runnable:Q,programLog:se,vertexShader:{log:k,prefix:x},fragmentShader:{log:ee,prefix:L}})}a.deleteShader(z),a.deleteShader(F),ve=new Pl(a,v),T=oE(a,v)}let ve;this.getUniforms=function(){return ve===void 0&&de(this),ve};let T;this.getAttributes=function(){return T===void 0&&de(this),T};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(v,ZM)),I},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=z,this.fragmentShader=F,this}let _E=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new yE(e),n.set(e,r)),r}}class yE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function SE(s,e,n,r,a,l,d){const u=new ug,h=new xE,p=new Set,g=[],_=a.isWebGL2,y=a.logarithmicDepthBuffer,S=a.vertexTextures;let E=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return p.add(T),T===0?"uv":`uv${T}`}function x(T,I,ae,se,k){const ee=se.fog,Q=k.geometry,ce=T.isMeshStandardMaterial?se.environment:null,H=(T.isMeshStandardMaterial?n:e).get(T.envMap||ce),$=H&&H.mapping===Ol?H.image.height:null,X=w[T.type];T.precision!==null&&(E=a.getMaxPrecision(T.precision),E!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const P=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,V=P!==void 0?P.length:0;let ye=0;Q.morphAttributes.position!==void 0&&(ye=1),Q.morphAttributes.normal!==void 0&&(ye=2),Q.morphAttributes.color!==void 0&&(ye=3);let j,ue,he,Ae;if(X){const At=yi[X];j=At.vertexShader,ue=At.fragmentShader}else j=T.vertexShader,ue=T.fragmentShader,h.update(T),he=h.getVertexShaderID(T),Ae=h.getFragmentShaderID(T);const fe=s.getRenderTarget(),le=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,ze=!!T.map,q=!!T.matcap,mt=!!H,Ie=!!T.aoMap,je=!!T.lightMap,Ne=!!T.bumpMap,tt=!!T.normalMap,$e=!!T.displacementMap,R=!!T.emissiveMap,A=!!T.metalnessMap,te=!!T.roughnessMap,Se=T.anisotropy>0,_e=T.clearcoat>0,Me=T.iridescence>0,Ge=T.sheen>0,Ce=T.transmission>0,Fe=Se&&!!T.anisotropyMap,Ze=_e&&!!T.clearcoatMap,at=_e&&!!T.clearcoatNormalMap,ge=_e&&!!T.clearcoatRoughnessMap,gt=Me&&!!T.iridescenceMap,ft=Me&&!!T.iridescenceThicknessMap,it=Ge&&!!T.sheenColorMap,qe=Ge&&!!T.sheenRoughnessMap,ke=!!T.specularMap,st=!!T.specularColorMap,_t=!!T.specularIntensityMap,wt=Ce&&!!T.transmissionMap,ct=Ce&&!!T.thicknessMap,Et=!!T.gradientMap,U=!!T.alphaMap,Ee=T.alphaTest>0,we=!!T.alphaHash,He=!!T.extensions;let Ke=Mr;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const yt={isWebGL2:_,shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:j,fragmentShader:ue,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:be,instancing:le,instancingColor:le&&k.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Xi,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:q,envMap:mt,envMapMode:mt&&H.mapping,envMapCubeUVHeight:$,aoMap:Ie,lightMap:je,bumpMap:Ne,normalMap:tt,displacementMap:S&&$e,emissiveMap:R,normalMapObjectSpace:tt&&T.normalMapType===b_,normalMapTangentSpace:tt&&T.normalMapType===C_,metalnessMap:A,roughnessMap:te,anisotropy:Se,anisotropyMap:Fe,clearcoat:_e,clearcoatMap:Ze,clearcoatNormalMap:at,clearcoatRoughnessMap:ge,iridescence:Me,iridescenceMap:gt,iridescenceThicknessMap:ft,sheen:Ge,sheenColorMap:it,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:st,specularIntensityMap:_t,transmission:Ce,transmissionMap:wt,thicknessMap:ct,gradientMap:Et,opaque:T.transparent===!1&&T.blending===Vs&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:Ee,alphaHash:we,combine:T.combine,mapUv:ze&&v(T.map.channel),aoMapUv:Ie&&v(T.aoMap.channel),lightMapUv:je&&v(T.lightMap.channel),bumpMapUv:Ne&&v(T.bumpMap.channel),normalMapUv:tt&&v(T.normalMap.channel),displacementMapUv:$e&&v(T.displacementMap.channel),emissiveMapUv:R&&v(T.emissiveMap.channel),metalnessMapUv:A&&v(T.metalnessMap.channel),roughnessMapUv:te&&v(T.roughnessMap.channel),anisotropyMapUv:Fe&&v(T.anisotropyMap.channel),clearcoatMapUv:Ze&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:it&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(T.sheenRoughnessMap.channel),specularMapUv:ke&&v(T.specularMap.channel),specularColorMapUv:st&&v(T.specularColorMap.channel),specularIntensityMapUv:_t&&v(T.specularIntensityMap.channel),transmissionMapUv:wt&&v(T.transmissionMap.channel),thicknessMapUv:ct&&v(T.thicknessMap.channel),alphaMapUv:U&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(tt||Se),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(ze||U),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ye,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ae.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:He&&T.extensions.derivatives===!0,extensionFragDepth:He&&T.extensions.fragDepth===!0,extensionDrawBuffers:He&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:He&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:He&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return yt.vertexUv1s=p.has(1),yt.vertexUv2s=p.has(2),yt.vertexUv3s=p.has(3),p.clear(),yt}function L(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ae in T.defines)I.push(ae),I.push(T.defines[ae]);return T.isRawShaderMaterial===!1&&(b(I,T),D(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function b(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function D(T,I){u.disableAll(),I.isWebGL2&&u.enable(0),I.supportsVertexTextures&&u.enable(1),I.instancing&&u.enable(2),I.instancingColor&&u.enable(3),I.matcap&&u.enable(4),I.envMap&&u.enable(5),I.normalMapObjectSpace&&u.enable(6),I.normalMapTangentSpace&&u.enable(7),I.clearcoat&&u.enable(8),I.iridescence&&u.enable(9),I.alphaTest&&u.enable(10),I.vertexColors&&u.enable(11),I.vertexAlphas&&u.enable(12),I.vertexUv1s&&u.enable(13),I.vertexUv2s&&u.enable(14),I.vertexUv3s&&u.enable(15),I.vertexTangents&&u.enable(16),I.anisotropy&&u.enable(17),I.alphaHash&&u.enable(18),I.batching&&u.enable(19),T.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.skinning&&u.enable(4),I.morphTargets&&u.enable(5),I.morphNormals&&u.enable(6),I.morphColors&&u.enable(7),I.premultipliedAlpha&&u.enable(8),I.shadowMapEnabled&&u.enable(9),I.useLegacyLights&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.alphaToCoverage&&u.enable(20),T.push(u.mask)}function W(T){const I=w[T.type];let ae;if(I){const se=yi[I];ae=nx.clone(se.uniforms)}else ae=T.uniforms;return ae}function z(T,I){let ae;for(let se=0,k=g.length;se<k;se++){const ee=g[se];if(ee.cacheKey===I){ae=ee,++ae.usedTimes;break}}return ae===void 0&&(ae=new vE(s,I,T,l),g.push(ae)),ae}function F(T){if(--T.usedTimes===0){const I=g.indexOf(T);g[I]=g[g.length-1],g.pop(),T.destroy()}}function de(T){h.remove(T)}function ve(){h.dispose()}return{getParameters:x,getProgramCacheKey:L,getUniforms:W,acquireProgram:z,releaseProgram:F,releaseShaderCache:de,programs:g,dispose:ve}}function ME(){let s=new WeakMap;function e(l){let d=s.get(l);return d===void 0&&(d={},s.set(l,d)),d}function n(l){s.delete(l)}function r(l,d,u){s.get(l)[d]=u}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function EE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function d(_,y,S,E,w,v){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:S,groupOrder:E,renderOrder:_.renderOrder,z:w,group:v},s[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=w,x.group=v),e++,x}function u(_,y,S,E,w,v){const x=d(_,y,S,E,w,v);S.transmission>0?r.push(x):S.transparent===!0?a.push(x):n.push(x)}function h(_,y,S,E,w,v){const x=d(_,y,S,E,w,v);S.transmission>0?r.unshift(x):S.transparent===!0?a.unshift(x):n.unshift(x)}function p(_,y){n.length>1&&n.sort(_||EE),r.length>1&&r.sort(y||bm),a.length>1&&a.sort(y||bm)}function g(){for(let _=e,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:u,unshift:h,finish:g,sort:p}}function TE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let d;return l===void 0?(d=new Pm,s.set(r,[d])):a>=l.length?(d=new Pm,l.push(d)):d=l[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new We};break;case"SpotLight":n={position:new Y,direction:new Y,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let RE=0;function CE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bE(s,e){const n=new wE,r=AE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new Y);const l=new Y,d=new Yt,u=new Yt;function h(g,_){let y=0,S=0,E=0;for(let ae=0;ae<9;ae++)a.probe[ae].set(0,0,0);let w=0,v=0,x=0,L=0,b=0,D=0,W=0,z=0,F=0,de=0,ve=0;g.sort(CE);const T=_===!0?Math.PI:1;for(let ae=0,se=g.length;ae<se;ae++){const k=g[ae],ee=k.color,Q=k.intensity,ce=k.distance,H=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)y+=ee.r*Q*T,S+=ee.g*Q*T,E+=ee.b*Q*T;else if(k.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(k.sh.coefficients[$],Q);ve++}else if(k.isDirectionalLight){const $=n.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const X=k.shadow,P=r.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,a.directionalShadow[w]=P,a.directionalShadowMap[w]=H,a.directionalShadowMatrix[w]=k.shadow.matrix,D++}a.directional[w]=$,w++}else if(k.isSpotLight){const $=n.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(ee).multiplyScalar(Q*T),$.distance=ce,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,a.spot[x]=$;const X=k.shadow;if(k.map&&(a.spotLightMap[F]=k.map,F++,X.updateMatrices(k),k.castShadow&&de++),a.spotLightMatrix[x]=X.matrix,k.castShadow){const P=r.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,a.spotShadow[x]=P,a.spotShadowMap[x]=H,z++}x++}else if(k.isRectAreaLight){const $=n.get(k);$.color.copy(ee).multiplyScalar(Q),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),a.rectArea[L]=$,L++}else if(k.isPointLight){const $=n.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*T),$.distance=k.distance,$.decay=k.decay,k.castShadow){const X=k.shadow,P=r.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,a.pointShadow[v]=P,a.pointShadowMap[v]=H,a.pointShadowMatrix[v]=k.shadow.matrix,W++}a.point[v]=$,v++}else if(k.isHemisphereLight){const $=n.get(k);$.skyColor.copy(k.color).multiplyScalar(Q*T),$.groundColor.copy(k.groundColor).multiplyScalar(Q*T),a.hemi[b]=$,b++}}L>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_FLOAT_1,a.rectAreaLTC2=Re.LTC_FLOAT_2):(a.rectAreaLTC1=Re.LTC_HALF_1,a.rectAreaLTC2=Re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_FLOAT_1,a.rectAreaLTC2=Re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Re.LTC_HALF_1,a.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=E;const I=a.hash;(I.directionalLength!==w||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==L||I.hemiLength!==b||I.numDirectionalShadows!==D||I.numPointShadows!==W||I.numSpotShadows!==z||I.numSpotMaps!==F||I.numLightProbes!==ve)&&(a.directional.length=w,a.spot.length=x,a.rectArea.length=L,a.point.length=v,a.hemi.length=b,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=W,a.pointShadowMap.length=W,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=W,a.spotLightMatrix.length=z+F-de,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=de,a.numLightProbes=ve,I.directionalLength=w,I.pointLength=v,I.spotLength=x,I.rectAreaLength=L,I.hemiLength=b,I.numDirectionalShadows=D,I.numPointShadows=W,I.numSpotShadows=z,I.numSpotMaps=F,I.numLightProbes=ve,a.version=RE++)}function p(g,_){let y=0,S=0,E=0,w=0,v=0;const x=_.matrixWorldInverse;for(let L=0,b=g.length;L<b;L++){const D=g[L];if(D.isDirectionalLight){const W=a.directional[y];W.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),W.direction.sub(l),W.direction.transformDirection(x),y++}else if(D.isSpotLight){const W=a.spot[E];W.position.setFromMatrixPosition(D.matrixWorld),W.position.applyMatrix4(x),W.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),W.direction.sub(l),W.direction.transformDirection(x),E++}else if(D.isRectAreaLight){const W=a.rectArea[w];W.position.setFromMatrixPosition(D.matrixWorld),W.position.applyMatrix4(x),u.identity(),d.copy(D.matrixWorld),d.premultiply(x),u.extractRotation(d),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),W.halfWidth.applyMatrix4(u),W.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const W=a.point[S];W.position.setFromMatrixPosition(D.matrixWorld),W.position.applyMatrix4(x),S++}else if(D.isHemisphereLight){const W=a.hemi[v];W.direction.setFromMatrixPosition(D.matrixWorld),W.direction.transformDirection(x),v++}}}return{setup:h,setupView:p,state:a}}function Lm(s,e){const n=new bE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function d(_){r.push(_)}function u(_){a.push(_)}function h(_){n.setup(r,_)}function p(_){n.setupView(r,_)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:p,pushLight:d,pushShadow:u}}function PE(s,e){let n=new WeakMap;function r(l,d=0){const u=n.get(l);let h;return u===void 0?(h=new Lm(s,e),n.set(l,[h])):d>=u.length?(h=new Lm(s,e),u.push(h)):h=u[d],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class LE extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DE extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
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
}`;function IE(s,e,n){let r=new _g;const a=new Tt,l=new Tt,d=new sn,u=new LE({depthPacking:R_}),h=new DE,p={},g=n.maxTextureSize,_={[Tr]:Un,[Un]:Tr,[Bi]:Bi},y=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:NE,fragmentShader:UE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wi(E,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let x=this.type;this.render=function(z,F,de){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||z.length===0)return;const ve=s.getRenderTarget(),T=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Sr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const se=x!==ki&&this.type===ki,k=x===ki&&this.type!==ki;for(let ee=0,Q=z.length;ee<Q;ee++){const ce=z[ee],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const $=H.getFrameExtents();if(a.multiply($),l.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/$.x),a.x=l.x*$.x,H.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/$.y),a.y=l.y*$.y,H.mapSize.y=l.y)),H.map===null||se===!0||k===!0){const P=this.type!==ki?{minFilter:Sn,magFilter:Sn}:{};H.map!==null&&H.map.dispose(),H.map=new Jr(a.x,a.y,P),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const X=H.getViewportCount();for(let P=0;P<X;P++){const V=H.getViewport(P);d.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),ae.viewport(d),H.updateMatrices(ce,P),r=H.getFrustum(),D(F,de,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&L(H,de),H.needsUpdate=!1}x=this.type,v.needsUpdate=!1,s.setRenderTarget(ve,T,I)};function L(z,F){const de=e.update(w);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Jr(a.x,a.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,de,y,w,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,de,S,w,null)}function b(z,F,de,ve){let T=null;const I=de.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)T=I;else if(T=de.isPointLight===!0?h:u,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=T.uuid,se=F.uuid;let k=p[ae];k===void 0&&(k={},p[ae]=k);let ee=k[se];ee===void 0&&(ee=T.clone(),k[se]=ee,F.addEventListener("dispose",W)),T=ee}if(T.visible=F.visible,T.wireframe=F.wireframe,ve===ki?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:_[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,de.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ae=s.properties.get(T);ae.light=de}return T}function D(z,F,de,ve,T){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===ki)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,z.matrixWorld);const se=e.update(z),k=z.material;if(Array.isArray(k)){const ee=se.groups;for(let Q=0,ce=ee.length;Q<ce;Q++){const H=ee[Q],$=k[H.materialIndex];if($&&$.visible){const X=b(z,$,ve,T);z.onBeforeShadow(s,z,F,de,se,X,H),s.renderBufferDirect(de,null,se,X,z,H),z.onAfterShadow(s,z,F,de,se,X,H)}}}else if(k.visible){const ee=b(z,k,ve,T);z.onBeforeShadow(s,z,F,de,se,ee,null),s.renderBufferDirect(de,null,se,ee,z,null),z.onAfterShadow(s,z,F,de,se,ee,null)}}const ae=z.children;for(let se=0,k=ae.length;se<k;se++)D(ae[se],F,de,ve,T)}function W(z){z.target.removeEventListener("dispose",W);for(const de in p){const ve=p[de],T=z.target.uuid;T in ve&&(ve[T].dispose(),delete ve[T])}}}function FE(s,e,n){const r=n.isWebGL2;function a(){let U=!1;const Ee=new sn;let we=null;const He=new sn(0,0,0,0);return{setMask:function(Ke){we!==Ke&&!U&&(s.colorMask(Ke,Ke,Ke,Ke),we=Ke)},setLocked:function(Ke){U=Ke},setClear:function(Ke,yt,At,Bt,mn){mn===!0&&(Ke*=Bt,yt*=Bt,At*=Bt),Ee.set(Ke,yt,At,Bt),He.equals(Ee)===!1&&(s.clearColor(Ke,yt,At,Bt),He.copy(Ee))},reset:function(){U=!1,we=null,He.set(-1,0,0,0)}}}function l(){let U=!1,Ee=null,we=null,He=null;return{setTest:function(Ke){Ke?le(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Ke){Ee!==Ke&&!U&&(s.depthMask(Ke),Ee=Ke)},setFunc:function(Ke){if(we!==Ke){switch(Ke){case r_:s.depthFunc(s.NEVER);break;case s_:s.depthFunc(s.ALWAYS);break;case o_:s.depthFunc(s.LESS);break;case Ll:s.depthFunc(s.LEQUAL);break;case a_:s.depthFunc(s.EQUAL);break;case l_:s.depthFunc(s.GEQUAL);break;case c_:s.depthFunc(s.GREATER);break;case u_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Ke}},setLocked:function(Ke){U=Ke},setClear:function(Ke){He!==Ke&&(s.clearDepth(Ke),He=Ke)},reset:function(){U=!1,Ee=null,we=null,He=null}}}function d(){let U=!1,Ee=null,we=null,He=null,Ke=null,yt=null,At=null,Bt=null,mn=null;return{setTest:function(St){U||(St?le(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(St){Ee!==St&&!U&&(s.stencilMask(St),Ee=St)},setFunc:function(St,Xt,on){(we!==St||He!==Xt||Ke!==on)&&(s.stencilFunc(St,Xt,on),we=St,He=Xt,Ke=on)},setOp:function(St,Xt,on){(yt!==St||At!==Xt||Bt!==on)&&(s.stencilOp(St,Xt,on),yt=St,At=Xt,Bt=on)},setLocked:function(St){U=St},setClear:function(St){mn!==St&&(s.clearStencil(St),mn=St)},reset:function(){U=!1,Ee=null,we=null,He=null,Ke=null,yt=null,At=null,Bt=null,mn=null}}}const u=new a,h=new l,p=new d,g=new WeakMap,_=new WeakMap;let y={},S={},E=new WeakMap,w=[],v=null,x=!1,L=null,b=null,D=null,W=null,z=null,F=null,de=null,ve=new We(0,0,0),T=0,I=!1,ae=null,se=null,k=null,ee=null,Q=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=$>=2);let P=null,V={};const ye=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ue=new sn().fromArray(ye),he=new sn().fromArray(j);function Ae(U,Ee,we,He){const Ke=new Uint8Array(4),yt=s.createTexture();s.bindTexture(U,yt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<we;At++)r&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ee,0,s.RGBA,1,1,He,0,s.RGBA,s.UNSIGNED_BYTE,Ke):s.texImage2D(Ee+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ke);return yt}const fe={};fe[s.TEXTURE_2D]=Ae(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=Ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(fe[s.TEXTURE_2D_ARRAY]=Ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=Ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),le(s.DEPTH_TEST),h.setFunc(Ll),$e(!1),R(dp),le(s.CULL_FACE),Ne(Sr);function le(U){y[U]!==!0&&(s.enable(U),y[U]=!0)}function be(U){y[U]!==!1&&(s.disable(U),y[U]=!1)}function ze(U,Ee){return S[U]!==Ee?(s.bindFramebuffer(U,Ee),S[U]=Ee,r&&(U===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ee),U===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function q(U,Ee){let we=w,He=!1;if(U)if(we=E.get(Ee),we===void 0&&(we=[],E.set(Ee,we)),U.isWebGLMultipleRenderTargets){const Ke=U.texture;if(we.length!==Ke.length||we[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,At=Ke.length;yt<At;yt++)we[yt]=s.COLOR_ATTACHMENT0+yt;we.length=Ke.length,He=!0}}else we[0]!==s.COLOR_ATTACHMENT0&&(we[0]=s.COLOR_ATTACHMENT0,He=!0);else we[0]!==s.BACK&&(we[0]=s.BACK,He=!0);He&&(n.isWebGL2?s.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function mt(U){return v!==U?(s.useProgram(U),v=U,!0):!1}const Ie={[qr]:s.FUNC_ADD,[V0]:s.FUNC_SUBTRACT,[W0]:s.FUNC_REVERSE_SUBTRACT};if(r)Ie[pp]=s.MIN,Ie[mp]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ie[pp]=U.MIN_EXT,Ie[mp]=U.MAX_EXT)}const je={[X0]:s.ZERO,[j0]:s.ONE,[q0]:s.SRC_COLOR,[ud]:s.SRC_ALPHA,[J0]:s.SRC_ALPHA_SATURATE,[Z0]:s.DST_COLOR,[$0]:s.DST_ALPHA,[Y0]:s.ONE_MINUS_SRC_COLOR,[dd]:s.ONE_MINUS_SRC_ALPHA,[Q0]:s.ONE_MINUS_DST_COLOR,[K0]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(U,Ee,we,He,Ke,yt,At,Bt,mn,St){if(U===Sr){x===!0&&(be(s.BLEND),x=!1);return}if(x===!1&&(le(s.BLEND),x=!0),U!==G0){if(U!==L||St!==I){if((b!==qr||z!==qr)&&(s.blendEquation(s.FUNC_ADD),b=qr,z=qr),St)switch(U){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.ONE,s.ONE);break;case fp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}D=null,W=null,F=null,de=null,ve.set(0,0,0),T=0,L=U,I=St}return}Ke=Ke||Ee,yt=yt||we,At=At||He,(Ee!==b||Ke!==z)&&(s.blendEquationSeparate(Ie[Ee],Ie[Ke]),b=Ee,z=Ke),(we!==D||He!==W||yt!==F||At!==de)&&(s.blendFuncSeparate(je[we],je[He],je[yt],je[At]),D=we,W=He,F=yt,de=At),(Bt.equals(ve)===!1||mn!==T)&&(s.blendColor(Bt.r,Bt.g,Bt.b,mn),ve.copy(Bt),T=mn),L=U,I=!1}function tt(U,Ee){U.side===Bi?be(s.CULL_FACE):le(s.CULL_FACE);let we=U.side===Un;Ee&&(we=!we),$e(we),U.blending===Vs&&U.transparent===!1?Ne(Sr):Ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),h.setFunc(U.depthFunc),h.setTest(U.depthTest),h.setMask(U.depthWrite),u.setMask(U.colorWrite);const He=U.stencilWrite;p.setTest(He),He&&(p.setMask(U.stencilWriteMask),p.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),p.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){ae!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),ae=U)}function R(U){U!==k0?(le(s.CULL_FACE),U!==se&&(U===dp?s.cullFace(s.BACK):U===B0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),se=U}function A(U){U!==k&&(H&&s.lineWidth(U),k=U)}function te(U,Ee,we){U?(le(s.POLYGON_OFFSET_FILL),(ee!==Ee||Q!==we)&&(s.polygonOffset(Ee,we),ee=Ee,Q=we)):be(s.POLYGON_OFFSET_FILL)}function Se(U){U?le(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function _e(U){U===void 0&&(U=s.TEXTURE0+ce-1),P!==U&&(s.activeTexture(U),P=U)}function Me(U,Ee,we){we===void 0&&(P===null?we=s.TEXTURE0+ce-1:we=P);let He=V[we];He===void 0&&(He={type:void 0,texture:void 0},V[we]=He),(He.type!==U||He.texture!==Ee)&&(P!==we&&(s.activeTexture(we),P=we),s.bindTexture(U,Ee||fe[U]),He.type=U,He.texture=Ee)}function Ge(){const U=V[P];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(U){ue.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function _t(U){he.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function wt(U,Ee){let we=_.get(Ee);we===void 0&&(we=new WeakMap,_.set(Ee,we));let He=we.get(U);He===void 0&&(He=s.getUniformBlockIndex(Ee,U.name),we.set(U,He))}function ct(U,Ee){const He=_.get(Ee).get(U);g.get(Ee)!==He&&(s.uniformBlockBinding(Ee,He,U.__bindingPointIndex),g.set(Ee,He))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},P=null,V={},S={},E=new WeakMap,w=[],v=null,x=!1,L=null,b=null,D=null,W=null,z=null,F=null,de=null,ve=new We(0,0,0),T=0,I=!1,ae=null,se=null,k=null,ee=null,Q=null,ue.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:le,disable:be,bindFramebuffer:ze,drawBuffers:q,useProgram:mt,setBlending:Ne,setMaterial:tt,setFlipSided:$e,setCullFace:R,setLineWidth:A,setPolygonOffset:te,setScissorTest:Se,activeTexture:_e,bindTexture:Me,unbindTexture:Ge,compressedTexImage2D:Ce,compressedTexImage3D:Fe,texImage2D:qe,texImage3D:ke,updateUBOMapping:wt,uniformBlockBinding:ct,texStorage2D:ft,texStorage3D:it,texSubImage2D:Ze,texSubImage3D:at,compressedTexSubImage2D:ge,compressedTexSubImage3D:gt,scissor:st,viewport:_t,reset:Et}}function OE(s,e,n,r,a,l,d){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,A){return S?new OffscreenCanvas(R,A):Fl("canvas")}function w(R,A,te,Se){let _e=1;if((R.width>Se||R.height>Se)&&(_e=Se/Math.max(R.width,R.height)),_e<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const Me=A?_d:Math.floor,Ge=Me(_e*R.width),Ce=Me(_e*R.height);_===void 0&&(_=E(Ge,Ce));const Fe=te?E(Ge,Ce):_;return Fe.width=Ge,Fe.height=Ce,Fe.getContext("2d").drawImage(R,0,0,Ge,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ge+"x"+Ce+")."),Fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function v(R){return Xp(R.width)&&Xp(R.height)}function x(R){return u?!1:R.wrapS!==li||R.wrapT!==li||R.minFilter!==Sn&&R.minFilter!==Dn}function L(R,A){return R.generateMipmaps&&A&&R.minFilter!==Sn&&R.minFilter!==Dn}function b(R){s.generateMipmap(R)}function D(R,A,te,Se,_e=!1){if(u===!1)return A;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me=A;if(A===s.RED&&(te===s.FLOAT&&(Me=s.R32F),te===s.HALF_FLOAT&&(Me=s.R16F),te===s.UNSIGNED_BYTE&&(Me=s.R8)),A===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(Me=s.R8UI),te===s.UNSIGNED_SHORT&&(Me=s.R16UI),te===s.UNSIGNED_INT&&(Me=s.R32UI),te===s.BYTE&&(Me=s.R8I),te===s.SHORT&&(Me=s.R16I),te===s.INT&&(Me=s.R32I)),A===s.RG&&(te===s.FLOAT&&(Me=s.RG32F),te===s.HALF_FLOAT&&(Me=s.RG16F),te===s.UNSIGNED_BYTE&&(Me=s.RG8)),A===s.RGBA){const Ge=_e?Dl:Ct.getTransfer(Se);te===s.FLOAT&&(Me=s.RGBA32F),te===s.HALF_FLOAT&&(Me=s.RGBA16F),te===s.UNSIGNED_BYTE&&(Me=Ge===Nt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)}return(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function W(R,A,te){return L(R,te)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function z(R){return R===Sn||R===gp||R===Io?s.NEAREST:s.LINEAR}function F(R){const A=R.target;A.removeEventListener("dispose",F),ve(A),A.isVideoTexture&&g.delete(A)}function de(R){const A=R.target;A.removeEventListener("dispose",de),I(A)}function ve(R){const A=r.get(R);if(A.__webglInit===void 0)return;const te=R.source,Se=y.get(te);if(Se){const _e=Se[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&T(R),Object.keys(Se).length===0&&y.delete(te)}r.remove(R)}function T(R){const A=r.get(R);s.deleteTexture(A.__webglTexture);const te=R.source,Se=y.get(te);delete Se[A.__cacheKey],d.memory.textures--}function I(R){const A=R.texture,te=r.get(R),Se=r.get(A);if(Se.__webglTexture!==void 0&&(s.deleteTexture(Se.__webglTexture),d.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(te.__webglFramebuffer[_e]))for(let Me=0;Me<te.__webglFramebuffer[_e].length;Me++)s.deleteFramebuffer(te.__webglFramebuffer[_e][Me]);else s.deleteFramebuffer(te.__webglFramebuffer[_e]);te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer[_e])}else{if(Array.isArray(te.__webglFramebuffer))for(let _e=0;_e<te.__webglFramebuffer.length;_e++)s.deleteFramebuffer(te.__webglFramebuffer[_e]);else s.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&s.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let _e=0;_e<te.__webglColorRenderbuffer.length;_e++)te.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(te.__webglColorRenderbuffer[_e]);te.__webglDepthRenderbuffer&&s.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let _e=0,Me=A.length;_e<Me;_e++){const Ge=r.get(A[_e]);Ge.__webglTexture&&(s.deleteTexture(Ge.__webglTexture),d.memory.textures--),r.remove(A[_e])}r.remove(A),r.remove(R)}let ae=0;function se(){ae=0}function k(){const R=ae;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),ae+=1,R}function ee(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function Q(R,A){const te=r.get(R);if(R.isVideoTexture&&tt(R),R.isRenderTargetTexture===!1&&R.version>0&&te.__version!==R.version){const Se=R.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(te,R,A);return}}n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function ce(R,A){const te=r.get(R);if(R.version>0&&te.__version!==R.version){ue(te,R,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function H(R,A){const te=r.get(R);if(R.version>0&&te.__version!==R.version){ue(te,R,A);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function $(R,A){const te=r.get(R);if(R.version>0&&te.__version!==R.version){he(te,R,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}const X={[pd]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[md]:s.MIRRORED_REPEAT},P={[Sn]:s.NEAREST,[gp]:s.NEAREST_MIPMAP_NEAREST,[Io]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},V={[P_]:s.NEVER,[F_]:s.ALWAYS,[L_]:s.LESS,[rg]:s.LEQUAL,[D_]:s.EQUAL,[I_]:s.GEQUAL,[N_]:s.GREATER,[U_]:s.NOTEQUAL};function ye(R,A,te){if(A.type===Hi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===Ru||A.magFilter===Io||A.magFilter===$r||A.minFilter===Dn||A.minFilter===Ru||A.minFilter===Io||A.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(s.texParameteri(R,s.TEXTURE_WRAP_S,X[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,X[A.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,X[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,P[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,P[A.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==li||A.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,z(A.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,z(A.minFilter)),A.minFilter!==Sn&&A.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Sn||A.minFilter!==Io&&A.minFilter!==$r||A.type===Hi&&e.has("OES_texture_float_linear")===!1||u===!1&&A.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(s.texParameterf(R,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function j(R,A){let te=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",F));const Se=A.source;let _e=y.get(Se);_e===void 0&&(_e={},y.set(Se,_e));const Me=ee(A);if(Me!==R.__cacheKey){_e[Me]===void 0&&(_e[Me]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),_e[Me].usedTimes++;const Ge=_e[R.__cacheKey];Ge!==void 0&&(_e[R.__cacheKey].usedTimes--,Ge.usedTimes===0&&T(A)),R.__cacheKey=Me,R.__webglTexture=_e[Me].texture}return te}function ue(R,A,te){let Se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=s.TEXTURE_3D);const _e=j(R,A),Me=A.source;n.bindTexture(Se,R.__webglTexture,s.TEXTURE0+te);const Ge=r.get(Me);if(Me.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+te);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Fe=A.colorSpace===Qn?null:Ct.getPrimaries(A.colorSpace),Ze=A.colorSpace===Qn||Ce===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const at=x(A)&&v(A.image)===!1;let ge=w(A.image,at,!1,a.maxTextureSize);ge=$e(A,ge);const gt=v(ge)||u,ft=l.convert(A.format,A.colorSpace);let it=l.convert(A.type),qe=D(A.internalFormat,ft,it,A.colorSpace,A.isVideoTexture);ye(Se,A,gt);let ke;const st=A.mipmaps,_t=u&&A.isVideoTexture!==!0&&qe!==ng,wt=Ge.__version===void 0||_e===!0,ct=Me.dataReady,Et=W(A,ge,gt);if(A.isDepthTexture)qe=s.DEPTH_COMPONENT,u?A.type===Hi?qe=s.DEPTH_COMPONENT32F:A.type===yr?qe=s.DEPTH_COMPONENT24:A.type===Kr?qe=s.DEPTH24_STENCIL8:qe=s.DEPTH_COMPONENT16:A.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Zr&&qe===s.DEPTH_COMPONENT&&A.type!==wd&&A.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=yr,it=l.convert(A.type)),A.format===$s&&qe===s.DEPTH_COMPONENT&&(qe=s.DEPTH_STENCIL,A.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Kr,it=l.convert(A.type))),wt&&(_t?n.texStorage2D(s.TEXTURE_2D,1,qe,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,qe,ge.width,ge.height,0,ft,it,null));else if(A.isDataTexture)if(st.length>0&&gt){_t&&wt&&n.texStorage2D(s.TEXTURE_2D,Et,qe,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)ke=st[U],_t?ct&&n.texSubImage2D(s.TEXTURE_2D,U,0,0,ke.width,ke.height,ft,it,ke.data):n.texImage2D(s.TEXTURE_2D,U,qe,ke.width,ke.height,0,ft,it,ke.data);A.generateMipmaps=!1}else _t?(wt&&n.texStorage2D(s.TEXTURE_2D,Et,qe,ge.width,ge.height),ct&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,ft,it,ge.data)):n.texImage2D(s.TEXTURE_2D,0,qe,ge.width,ge.height,0,ft,it,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){_t&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Et,qe,st[0].width,st[0].height,ge.depth);for(let U=0,Ee=st.length;U<Ee;U++)ke=st[U],A.format!==ci?ft!==null?_t?ct&&n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,0,ke.width,ke.height,ge.depth,ft,ke.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,U,qe,ke.width,ke.height,ge.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?ct&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,U,0,0,0,ke.width,ke.height,ge.depth,ft,it,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,U,qe,ke.width,ke.height,ge.depth,0,ft,it,ke.data)}else{_t&&wt&&n.texStorage2D(s.TEXTURE_2D,Et,qe,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)ke=st[U],A.format!==ci?ft!==null?_t?ct&&n.compressedTexSubImage2D(s.TEXTURE_2D,U,0,0,ke.width,ke.height,ft,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,U,qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?ct&&n.texSubImage2D(s.TEXTURE_2D,U,0,0,ke.width,ke.height,ft,it,ke.data):n.texImage2D(s.TEXTURE_2D,U,qe,ke.width,ke.height,0,ft,it,ke.data)}else if(A.isDataArrayTexture)_t?(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Et,qe,ge.width,ge.height,ge.depth),ct&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ft,it,ge.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,ge.width,ge.height,ge.depth,0,ft,it,ge.data);else if(A.isData3DTexture)_t?(wt&&n.texStorage3D(s.TEXTURE_3D,Et,qe,ge.width,ge.height,ge.depth),ct&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ft,it,ge.data)):n.texImage3D(s.TEXTURE_3D,0,qe,ge.width,ge.height,ge.depth,0,ft,it,ge.data);else if(A.isFramebufferTexture){if(wt)if(_t)n.texStorage2D(s.TEXTURE_2D,Et,qe,ge.width,ge.height);else{let U=ge.width,Ee=ge.height;for(let we=0;we<Et;we++)n.texImage2D(s.TEXTURE_2D,we,qe,U,Ee,0,ft,it,null),U>>=1,Ee>>=1}}else if(st.length>0&&gt){_t&&wt&&n.texStorage2D(s.TEXTURE_2D,Et,qe,st[0].width,st[0].height);for(let U=0,Ee=st.length;U<Ee;U++)ke=st[U],_t?ct&&n.texSubImage2D(s.TEXTURE_2D,U,0,0,ft,it,ke):n.texImage2D(s.TEXTURE_2D,U,qe,ft,it,ke);A.generateMipmaps=!1}else _t?(wt&&n.texStorage2D(s.TEXTURE_2D,Et,qe,ge.width,ge.height),ct&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,it,ge)):n.texImage2D(s.TEXTURE_2D,0,qe,ft,it,ge);L(A,gt)&&b(Se),Ge.__version=Me.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function he(R,A,te){if(A.image.length!==6)return;const Se=j(R,A),_e=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+te);const Me=r.get(_e);if(_e.version!==Me.__version||Se===!0){n.activeTexture(s.TEXTURE0+te);const Ge=Ct.getPrimaries(Ct.workingColorSpace),Ce=A.colorSpace===Qn?null:Ct.getPrimaries(A.colorSpace),Fe=A.colorSpace===Qn||Ge===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ze=A.isCompressedTexture||A.image[0].isCompressedTexture,at=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let U=0;U<6;U++)!Ze&&!at?ge[U]=w(A.image[U],!1,!0,a.maxCubemapSize):ge[U]=at?A.image[U].image:A.image[U],ge[U]=$e(A,ge[U]);const gt=ge[0],ft=v(gt)||u,it=l.convert(A.format,A.colorSpace),qe=l.convert(A.type),ke=D(A.internalFormat,it,qe,A.colorSpace),st=u&&A.isVideoTexture!==!0,_t=Me.__version===void 0||Se===!0,wt=_e.dataReady;let ct=W(A,gt,ft);ye(s.TEXTURE_CUBE_MAP,A,ft);let Et;if(Ze){st&&_t&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ct,ke,gt.width,gt.height);for(let U=0;U<6;U++){Et=ge[U].mipmaps;for(let Ee=0;Ee<Et.length;Ee++){const we=Et[Ee];A.format!==ci?it!==null?st?wt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,0,0,we.width,we.height,it,we.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,0,0,we.width,we.height,it,qe,we.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee,ke,we.width,we.height,0,it,qe,we.data)}}}else{Et=A.mipmaps,st&&_t&&(Et.length>0&&ct++,n.texStorage2D(s.TEXTURE_CUBE_MAP,ct,ke,ge[0].width,ge[0].height));for(let U=0;U<6;U++)if(at){st?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,ge[U].width,ge[U].height,it,qe,ge[U].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,ke,ge[U].width,ge[U].height,0,it,qe,ge[U].data);for(let Ee=0;Ee<Et.length;Ee++){const He=Et[Ee].image[U].image;st?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,0,0,He.width,He.height,it,qe,He.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,ke,He.width,He.height,0,it,qe,He.data)}}else{st?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,it,qe,ge[U]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,ke,it,qe,ge[U]);for(let Ee=0;Ee<Et.length;Ee++){const we=Et[Ee];st?wt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,0,0,it,qe,we.image[U]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee+1,ke,it,qe,we.image[U])}}}L(A,ft)&&b(s.TEXTURE_CUBE_MAP),Me.__version=_e.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Ae(R,A,te,Se,_e,Me){const Ge=l.convert(te.format,te.colorSpace),Ce=l.convert(te.type),Fe=D(te.internalFormat,Ge,Ce,te.colorSpace);if(!r.get(A).__hasExternalTextures){const at=Math.max(1,A.width>>Me),ge=Math.max(1,A.height>>Me);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,Me,Fe,at,ge,A.depth,0,Ge,Ce,null):n.texImage2D(_e,Me,Fe,at,ge,0,Ge,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),Ne(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,_e,r.get(te).__webglTexture,0,je(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,_e,r.get(te).__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(R,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let Se=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(te||Ne(A)){const _e=A.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Hi?Se=s.DEPTH_COMPONENT32F:_e.type===yr&&(Se=s.DEPTH_COMPONENT24));const Me=je(A);Ne(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,Se,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,Se,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,Se,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const Se=je(A);te&&Ne(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,s.DEPTH24_STENCIL8,A.width,A.height):Ne(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const Se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0;_e<Se.length;_e++){const Me=Se[_e],Ge=l.convert(Me.format,Me.colorSpace),Ce=l.convert(Me.type),Fe=D(Me.internalFormat,Ge,Ce,Me.colorSpace),Ze=je(A);te&&Ne(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Fe,A.width,A.height):Ne(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q(A.depthTexture,0);const Se=r.get(A.depthTexture).__webglTexture,_e=je(A);if(A.depthTexture.format===Zr)Ne(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(A.depthTexture.format===$s)Ne(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function be(R){const A=r.get(R),te=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");le(A.__webglFramebuffer,R)}else if(te){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]=s.createRenderbuffer(),fe(A.__webglDepthbuffer[Se],R,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),fe(A.__webglDepthbuffer,R,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(R,A,te){const Se=r.get(R);A!==void 0&&Ae(Se.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&be(R)}function q(R){const A=R.texture,te=r.get(R),Se=r.get(A);R.addEventListener("dispose",de),R.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=A.version,d.memory.textures++);const _e=R.isWebGLCubeRenderTarget===!0,Me=R.isWebGLMultipleRenderTargets===!0,Ge=v(R)||u;if(_e){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(u&&A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)te.__webglFramebuffer[Ce][Fe]=s.createFramebuffer()}else te.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(u&&A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Me)if(a.drawBuffers){const Ce=R.texture;for(let Fe=0,Ze=Ce.length;Fe<Ze;Fe++){const at=r.get(Ce[Fe]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&R.samples>0&&Ne(R)===!1){const Ce=Me?A:[A];te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Ce.length;Fe++){const Ze=Ce[Fe];te.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Fe]);const at=l.convert(Ze.format,Ze.colorSpace),ge=l.convert(Ze.type),gt=D(Ze.internalFormat,at,ge,Ze.colorSpace,R.isXRRenderTarget===!0),ft=je(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,gt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,te.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(te.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){n.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),ye(s.TEXTURE_CUBE_MAP,A,Ge);for(let Ce=0;Ce<6;Ce++)if(u&&A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ae(te.__webglFramebuffer[Ce][Fe],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else Ae(te.__webglFramebuffer[Ce],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);L(A,Ge)&&b(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){const Ce=R.texture;for(let Fe=0,Ze=Ce.length;Fe<Ze;Fe++){const at=Ce[Fe],ge=r.get(at);n.bindTexture(s.TEXTURE_2D,ge.__webglTexture),ye(s.TEXTURE_2D,at,Ge),Ae(te.__webglFramebuffer,R,at,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,0),L(at,Ge)&&b(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(u?Ce=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,Se.__webglTexture),ye(Ce,A,Ge),u&&A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ae(te.__webglFramebuffer[Fe],R,A,s.COLOR_ATTACHMENT0,Ce,Fe);else Ae(te.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,Ce,0);L(A,Ge)&&b(Ce),n.unbindTexture()}R.depthBuffer&&be(R)}function mt(R){const A=v(R)||u,te=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Se=0,_e=te.length;Se<_e;Se++){const Me=te[Se];if(L(Me,A)){const Ge=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ce=r.get(Me).__webglTexture;n.bindTexture(Ge,Ce),b(Ge),n.unbindTexture()}}}function Ie(R){if(u&&R.samples>0&&Ne(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],te=R.width,Se=R.height;let _e=s.COLOR_BUFFER_BIT;const Me=[],Ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(R),Fe=R.isWebGLMultipleRenderTargets===!0;if(Fe)for(let Ze=0;Ze<A.length;Ze++)n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ze=0;Ze<A.length;Ze++){Me.push(s.COLOR_ATTACHMENT0+Ze),R.depthBuffer&&Me.push(Ge);const at=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(at===!1&&(R.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ze]),at===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ge]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ge])),Fe){const ge=r.get(A[Ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,te,Se,0,0,te,Se,_e,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me)}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Fe)for(let Ze=0;Ze<A.length;Ze++){n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ze]);const at=r.get(A[Ze]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ze,s.TEXTURE_2D,at,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function je(R){return Math.min(a.maxSamples,R.samples)}function Ne(R){const A=r.get(R);return u&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function tt(R){const A=d.render.frame;g.get(R)!==A&&(g.set(R,A),R.update())}function $e(R,A){const te=R.colorSpace,Se=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===gd||te!==Xi&&te!==Qn&&(Ct.getTransfer(te)===Nt?u===!1?e.has("EXT_sRGB")===!0&&Se===ci?(R.format=gd,R.minFilter=Dn,R.generateMipmaps=!1):A=og.sRGBToLinear(A):(Se!==ci||_e!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}this.allocateTextureUnit=k,this.resetTextureUnits=se,this.setTexture2D=Q,this.setTexture2DArray=ce,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=ze,this.setupRenderTarget=q,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ne}function zE(s,e,n){const r=n.isWebGL2;function a(l,d=Qn){let u;const h=Ct.getTransfer(d);if(l===Er)return s.UNSIGNED_BYTE;if(l===Zm)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Qm)return s.UNSIGNED_SHORT_5_5_5_1;if(l===__)return s.BYTE;if(l===x_)return s.SHORT;if(l===wd)return s.UNSIGNED_SHORT;if(l===Km)return s.INT;if(l===yr)return s.UNSIGNED_INT;if(l===Hi)return s.FLOAT;if(l===Vo)return r?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===y_)return s.ALPHA;if(l===ci)return s.RGBA;if(l===S_)return s.LUMINANCE;if(l===M_)return s.LUMINANCE_ALPHA;if(l===Zr)return s.DEPTH_COMPONENT;if(l===$s)return s.DEPTH_STENCIL;if(l===gd)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===E_)return s.RED;if(l===Jm)return s.RED_INTEGER;if(l===T_)return s.RG;if(l===eg)return s.RG_INTEGER;if(l===tg)return s.RGBA_INTEGER;if(l===Cu||l===bu||l===Pu||l===Lu)if(h===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===Cu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===Cu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===bu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Pu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Lu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===vp||l===_p||l===xp||l===yp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===vp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===_p)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===xp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===yp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===ng)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Sp||l===Mp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Sp)return h===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Mp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Ep||l===Tp||l===wp||l===Ap||l===Rp||l===Cp||l===bp||l===Pp||l===Lp||l===Dp||l===Np||l===Up||l===Ip||l===Fp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Ep)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Tp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===wp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Ap)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Rp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Cp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===bp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Pp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Lp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Dp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Np)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Up)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Ip)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Fp)return h===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Du||l===Op||l===zp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===Du)return h===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Op)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===zp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===w_||l===kp||l===Bp||l===Hp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===Du)return u.COMPRESSED_RED_RGTC1_EXT;if(l===kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Bp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Hp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Kr?r?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class kE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,d=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,r),x=this._getHandJoint(p,w);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ho;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
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

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new In,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,a=new Mi({extensions:{fragDepth:!0},vertexShader:HE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Wi(new Hl(20,20),a)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class WE extends Zs{constructor(e,n){super();const r=this;let a=null,l=1,d=null,u="local-floor",h=1,p=null,g=null,_=null,y=null,S=null,E=null;const w=new VE,v=n.getContextAttributes();let x=null,L=null;const b=[],D=[],W=new Tt;let z=null;const F=new Zn;F.layers.enable(1),F.viewport=new sn;const de=new Zn;de.layers.enable(2),de.viewport=new sn;const ve=[F,de],T=new kE;T.layers.enable(1),T.layers.enable(2);let I=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=b[j];return ue===void 0&&(ue=new id,b[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=b[j];return ue===void 0&&(ue=new id,b[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=b[j];return ue===void 0&&(ue=new id,b[j]=ue),ue.getHandSpace()};function se(j){const ue=D.indexOf(j.inputSource);if(ue===-1)return;const he=b[ue];he!==void 0&&(he.update(j.inputSource,j.frame,p||d),he.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){a.removeEventListener("select",se),a.removeEventListener("selectstart",se),a.removeEventListener("selectend",se),a.removeEventListener("squeeze",se),a.removeEventListener("squeezestart",se),a.removeEventListener("squeezeend",se),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",ee);for(let j=0;j<b.length;j++){const ue=D[j];ue!==null&&(D[j]=null,b[j].disconnect(ue))}I=null,ae=null,w.reset(),e.setRenderTarget(x),S=null,y=null,_=null,a=null,L=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",se),a.addEventListener("selectstart",se),a.addEventListener("selectend",se),a.addEventListener("squeeze",se),a.addEventListener("squeezestart",se),a.addEventListener("squeezeend",se),a.addEventListener("end",k),a.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(W),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Jr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ue=null,he=null,Ae=null;v.depth&&(Ae=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=v.stencil?$s:Zr,he=v.stencil?Kr:yr);const fe={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:l};_=new XRWebGLBinding(a,n),y=_.createProjectionLayer(fe),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Jr(y.textureWidth,y.textureHeight,{format:ci,type:Er,depthTexture:new yg(y.textureWidth,y.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const le=e.properties.get(L);le.__ignoreDepthValues=y.ignoreDepthValues}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,d=await a.requestReferenceSpace(u),ye.setContext(a),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ee(j){for(let ue=0;ue<j.removed.length;ue++){const he=j.removed[ue],Ae=D.indexOf(he);Ae>=0&&(D[Ae]=null,b[Ae].disconnect(he))}for(let ue=0;ue<j.added.length;ue++){const he=j.added[ue];let Ae=D.indexOf(he);if(Ae===-1){for(let le=0;le<b.length;le++)if(le>=D.length){D.push(he),Ae=le;break}else if(D[le]===null){D[le]=he,Ae=le;break}if(Ae===-1)break}const fe=b[Ae];fe&&fe.connect(he)}}const Q=new Y,ce=new Y;function H(j,ue,he){Q.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);const Ae=Q.distanceTo(ce),fe=ue.projectionMatrix.elements,le=he.projectionMatrix.elements,be=fe[14]/(fe[10]-1),ze=fe[14]/(fe[10]+1),q=(fe[9]+1)/fe[5],mt=(fe[9]-1)/fe[5],Ie=(fe[8]-1)/fe[0],je=(le[8]+1)/le[0],Ne=be*Ie,tt=be*je,$e=Ae/(-Ie+je),R=$e*-Ie;ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(R),j.translateZ($e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=be+$e,te=ze+$e,Se=Ne-R,_e=tt+(Ae-R),Me=q*ze/te*A,Ge=mt*ze/te*A;j.projectionMatrix.makePerspective(Se,_e,Me,Ge,A,te),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function $(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;w.texture!==null&&(j.near=w.depthNear,j.far=w.depthFar),T.near=de.near=F.near=j.near,T.far=de.far=F.far=j.far,(I!==T.near||ae!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,ae=T.far,F.near=I,F.far=ae,de.near=I,de.far=ae,F.updateProjectionMatrix(),de.updateProjectionMatrix(),j.updateProjectionMatrix());const ue=j.parent,he=T.cameras;$(T,ue);for(let Ae=0;Ae<he.length;Ae++)$(he[Ae],ue);he.length===2?H(T,F,de):T.projectionMatrix.copy(F.projectionMatrix),X(j,T,ue)};function X(j,ue,he){he===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(j){h=j,y!==null&&(y.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null};let P=null;function V(j,ue){if(g=ue.getViewerPose(p||d),E=ue,g!==null){const he=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ae=!1;he.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let le=0;le<he.length;le++){const be=he[le];let ze=null;if(S!==null)ze=S.getViewport(be);else{const mt=_.getViewSubImage(y,be);ze=mt.viewport,le===0&&(e.setRenderTargetTextures(L,mt.colorTexture,y.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(L))}let q=ve[le];q===void 0&&(q=new Zn,q.layers.enable(le),q.viewport=new sn,ve[le]=q),q.matrix.fromArray(be.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(be.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ze.x,ze.y,ze.width,ze.height),le===0&&(T.matrix.copy(q.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(q)}const fe=a.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const le=_.getDepthInformation(he[0]);le&&le.isValid&&le.texture&&w.init(e,le,a.renderState)}}for(let he=0;he<b.length;he++){const Ae=D[he],fe=b[he];Ae!==null&&fe!==void 0&&fe.update(Ae,ue,p||d)}w.render(e,T),P&&P(j,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const ye=new xg;ye.setAnimationLoop(V),this.setAnimationLoop=function(j){P=j},this.dispose=function(){}}}function XE(s,e){function n(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,mg(s)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function a(v,x,L,b,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(v,x):x.isMeshToonMaterial?(l(v,x),_(v,x)):x.isMeshPhongMaterial?(l(v,x),g(v,x)):x.isMeshStandardMaterial?(l(v,x),y(v,x),x.isMeshPhysicalMaterial&&S(v,x,D)):x.isMeshMatcapMaterial?(l(v,x),E(v,x)):x.isMeshDepthMaterial?l(v,x):x.isMeshDistanceMaterial?(l(v,x),w(v,x)):x.isMeshNormalMaterial?l(v,x):x.isLineBasicMaterial?(d(v,x),x.isLineDashedMaterial&&u(v,x)):x.isPointsMaterial?h(v,x,L,b):x.isSpriteMaterial?p(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,n(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Un&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,n(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Un&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,n(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,n(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const L=e.get(x).envMap;if(L&&(v.envMap.value=L,v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap){v.lightMap.value=x.lightMap;const b=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=x.lightMapIntensity*b,n(x.lightMap,v.lightMapTransform)}x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,v.aoMapTransform))}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform))}function u(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function h(v,x,L,b){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*L,v.scale.value=b*.5,x.map&&(v.map.value=x.map,n(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function g(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function _(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function y(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,v.roughnessMapTransform)),e.get(x).envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function S(v,x,L){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&v.clearcoatNormalScale.value.negate())),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,x){x.matcap&&(v.matcap.value=x.matcap)}function w(v,x){const L=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jE(s,e,n,r){let a={},l={},d=[];const u=n.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(L,b){const D=b.program;r.uniformBlockBinding(L,D)}function p(L,b){let D=a[L.id];D===void 0&&(E(L),D=g(L),a[L.id]=D,L.addEventListener("dispose",v));const W=b.program;r.updateUBOMapping(L,W);const z=e.render.frame;l[L.id]!==z&&(y(L),l[L.id]=z)}function g(L){const b=_();L.__bindingPointIndex=b;const D=s.createBuffer(),W=L.__size,z=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,W,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,D),D}function _(){for(let L=0;L<u;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const b=a[L.id],D=L.uniforms,W=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let z=0,F=D.length;z<F;z++){const de=Array.isArray(D[z])?D[z]:[D[z]];for(let ve=0,T=de.length;ve<T;ve++){const I=de[ve];if(S(I,z,ve,W)===!0){const ae=I.__offset,se=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let ee=0;ee<se.length;ee++){const Q=se[ee],ce=w(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,ae+k,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,k),k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,b,D,W){const z=L.value,F=b+"_"+D;if(W[F]===void 0)return typeof z=="number"||typeof z=="boolean"?W[F]=z:W[F]=z.clone(),!0;{const de=W[F];if(typeof z=="number"||typeof z=="boolean"){if(de!==z)return W[F]=z,!0}else if(de.equals(z)===!1)return de.copy(z),!0}return!1}function E(L){const b=L.uniforms;let D=0;const W=16;for(let F=0,de=b.length;F<de;F++){const ve=Array.isArray(b[F])?b[F]:[b[F]];for(let T=0,I=ve.length;T<I;T++){const ae=ve[T],se=Array.isArray(ae.value)?ae.value:[ae.value];for(let k=0,ee=se.length;k<ee;k++){const Q=se[k],ce=w(Q),H=D%W;H!==0&&W-H<ce.boundary&&(D+=W-H),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=D,D+=ce.storage}}}const z=D%W;return z>0&&(D+=W-z),L.__size=D,L.__cache={},this}function w(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function v(L){const b=L.target;b.removeEventListener("dispose",v);const D=d.indexOf(b.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function x(){for(const L in a)s.deleteBuffer(a[L]);d=[],a={},l={}}return{bind:h,update:p,dispose:x}}class Ag{constructor(e={}){const{canvas:n=z_(),context:r=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=d;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,v=null;const x=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const b=this;let D=!1,W=0,z=0,F=null,de=-1,ve=null;const T=new sn,I=new sn;let ae=null;const se=new We(0);let k=0,ee=n.width,Q=n.height,ce=1,H=null,$=null;const X=new sn(0,0,ee,Q),P=new sn(0,0,ee,Q);let V=!1;const ye=new _g;let j=!1,ue=!1,he=null;const Ae=new Yt,fe=new Tt,le=new Y,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return F===null?ce:1}let q=r;function mt(C,Z){for(let re=0;re<C.length;re++){const oe=C[re],ie=n.getContext(oe,Z);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Td}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),q===null){const Z=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&Z.shift(),q=mt(Z,C),q===null)throw mt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ie,je,Ne,tt,$e,R,A,te,Se,_e,Me,Ge,Ce,Fe,Ze,at,ge,gt,ft,it,qe,ke,st,_t;function wt(){Ie=new JS(q),je=new jS(q,Ie,e),Ie.init(je),ke=new zE(q,Ie,je),Ne=new FE(q,Ie,je),tt=new nM(q),$e=new ME,R=new OE(q,Ie,Ne,$e,je,ke,tt),A=new YS(b),te=new QS(b),Se=new cx(q,je),st=new WS(q,Ie,Se,je),_e=new eM(q,Se,tt,st),Me=new oM(q,_e,Se,tt),ft=new sM(q,je,R),at=new qS($e),Ge=new SE(b,A,te,Ie,je,st,at),Ce=new XE(b,$e),Fe=new TE,Ze=new PE(Ie,je),gt=new VS(b,A,te,Ne,Me,y,h),ge=new IE(b,Me,je),_t=new jE(q,tt,je,Ne),it=new XS(q,Ie,tt,je),qe=new tM(q,Ie,tt,je),tt.programs=Ge.programs,b.capabilities=je,b.extensions=Ie,b.properties=$e,b.renderLists=Fe,b.shadowMap=ge,b.state=Ne,b.info=tt}wt();const ct=new WE(b,q);this.xr=ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(C){C!==void 0&&(ce=C,this.setSize(ee,Q,!1))},this.getSize=function(C){return C.set(ee,Q)},this.setSize=function(C,Z,re=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,Q=Z,n.width=Math.floor(C*ce),n.height=Math.floor(Z*ce),re===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(ee*ce,Q*ce).floor()},this.setDrawingBufferSize=function(C,Z,re){ee=C,Q=Z,ce=re,n.width=Math.floor(C*re),n.height=Math.floor(Z*re),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,Z,re,oe){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,Z,re,oe),Ne.viewport(T.copy(X).multiplyScalar(ce).floor())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,Z,re,oe){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,Z,re,oe),Ne.scissor(I.copy(P).multiplyScalar(ce).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(C){Ne.setScissorTest(V=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(C=!0,Z=!0,re=!0){let oe=0;if(C){let ie=!1;if(F!==null){const Pe=F.texture.format;ie=Pe===tg||Pe===eg||Pe===Jm}if(ie){const Pe=F.texture.type,Xe=Pe===Er||Pe===yr||Pe===wd||Pe===Kr||Pe===Zm||Pe===Qm,et=gt.getClearColor(),De=gt.getClearAlpha(),lt=et.r,rt=et.g,ot=et.b;Xe?(S[0]=lt,S[1]=rt,S[2]=ot,S[3]=De,q.clearBufferuiv(q.COLOR,0,S)):(E[0]=lt,E[1]=rt,E[2]=ot,E[3]=De,q.clearBufferiv(q.COLOR,0,E))}else oe|=q.COLOR_BUFFER_BIT}Z&&(oe|=q.DEPTH_BUFFER_BIT),re&&(oe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Fe.dispose(),Ze.dispose(),$e.dispose(),A.dispose(),te.dispose(),Me.dispose(),st.dispose(),_t.dispose(),Ge.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",mn),ct.removeEventListener("sessionend",St),he&&(he.dispose(),he=null),Xt.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=tt.autoReset,Z=ge.enabled,re=ge.autoUpdate,oe=ge.needsUpdate,ie=ge.type;wt(),tt.autoReset=C,ge.enabled=Z,ge.autoUpdate=re,ge.needsUpdate=oe,ge.type=ie}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const Z=C.target;Z.removeEventListener("dispose",we),He(Z)}function He(C){Ke(C),$e.remove(C)}function Ke(C){const Z=$e.get(C).programs;Z!==void 0&&(Z.forEach(function(re){Ge.releaseProgram(re)}),C.isShaderMaterial&&Ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,re,oe,ie,Pe){Z===null&&(Z=be);const Xe=ie.isMesh&&ie.matrixWorld.determinant()<0,et=Vl(C,Z,re,oe,ie);Ne.setMaterial(oe,Xe);let De=re.index,lt=1;if(oe.wireframe===!0){if(De=_e.getWireframeAttribute(re),De===void 0)return;lt=2}const rt=re.drawRange,ot=re.attributes.position;let bt=rt.start*lt,gn=(rt.start+rt.count)*lt;Pe!==null&&(bt=Math.max(bt,Pe.start*lt),gn=Math.min(gn,(Pe.start+Pe.count)*lt)),De!==null?(bt=Math.max(bt,0),gn=Math.min(gn,De.count)):ot!=null&&(bt=Math.max(bt,0),gn=Math.min(gn,ot.count));const Ht=gn-bt;if(Ht<0||Ht===1/0)return;st.setup(ie,oe,et,re,De);let Mn,vt=it;if(De!==null&&(Mn=Se.get(De),vt=qe,vt.setIndex(Mn)),ie.isMesh)oe.wireframe===!0?(Ne.setLineWidth(oe.wireframeLinewidth*ze()),vt.setMode(q.LINES)):vt.setMode(q.TRIANGLES);else if(ie.isLine){let ut=oe.linewidth;ut===void 0&&(ut=1),Ne.setLineWidth(ut*ze()),ie.isLineSegments?vt.setMode(q.LINES):ie.isLineLoop?vt.setMode(q.LINE_LOOP):vt.setMode(q.LINE_STRIP)}else ie.isPoints?vt.setMode(q.POINTS):ie.isSprite&&vt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)vt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)vt.renderInstances(bt,Ht,ie.count);else if(re.isInstancedBufferGeometry){const ut=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,vn=Math.min(re.instanceCount,ut);vt.renderInstances(bt,Ht,vn)}else vt.render(bt,Ht)};function yt(C,Z,re){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=Un,C.needsUpdate=!0,ji(C,Z,re),C.side=Tr,C.needsUpdate=!0,ji(C,Z,re),C.side=Bi):ji(C,Z,re)}this.compile=function(C,Z,re=null){re===null&&(re=C),v=Ze.get(re),v.init(),L.push(v),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(v.pushLight(ie),ie.castShadow&&v.pushShadow(ie))}),C!==re&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(v.pushLight(ie),ie.castShadow&&v.pushShadow(ie))}),v.setupLights(b._useLegacyLights);const oe=new Set;return C.traverse(function(ie){const Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let Xe=0;Xe<Pe.length;Xe++){const et=Pe[Xe];yt(et,re,ie),oe.add(et)}else yt(Pe,re,ie),oe.add(Pe)}),L.pop(),v=null,oe},this.compileAsync=function(C,Z,re=null){const oe=this.compile(C,Z,re);return new Promise(ie=>{function Pe(){if(oe.forEach(function(Xe){$e.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){ie(C);return}setTimeout(Pe,10)}Ie.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let At=null;function Bt(C){At&&At(C)}function mn(){Xt.stop()}function St(){Xt.start()}const Xt=new xg;Xt.setAnimationLoop(Bt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(C){At=C,ct.setAnimationLoop(C),C===null?Xt.stop():Xt.start()},ct.addEventListener("sessionstart",mn),ct.addEventListener("sessionend",St),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,Z,F),v=Ze.get(C,L.length),v.init(),L.push(v),Ae.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ye.setFromProjectionMatrix(Ae),ue=this.localClippingEnabled,j=at.init(this.clippingPlanes,ue),w=Fe.get(C,x.length),w.init(),x.push(w),on(C,Z,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(H,$),this.info.render.frame++,j===!0&&at.beginShadows();const re=v.state.shadowsArray;if(ge.render(re,C,Z),j===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&gt.render(w,C),v.setupLights(b._useLegacyLights),Z.isArrayCamera){const oe=Z.cameras;for(let ie=0,Pe=oe.length;ie<Pe;ie++){const Xe=oe[ie];Yo(w,C,Xe,Xe.viewport)}}else Yo(w,C,Z);F!==null&&(R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(b,C,Z),st.resetDefaultState(),de=-1,ve=null,L.pop(),L.length>0?v=L[L.length-1]:v=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function on(C,Z,re,oe){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){oe&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Xe=Me.update(C),et=C.material;et.visible&&w.push(C,Xe,et,re,le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const Xe=Me.update(C),et=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),le.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),le.copy(Xe.boundingSphere.center)),le.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(et)){const De=Xe.groups;for(let lt=0,rt=De.length;lt<rt;lt++){const ot=De[lt],bt=et[ot.materialIndex];bt&&bt.visible&&w.push(C,Xe,bt,re,le.z,ot)}}else et.visible&&w.push(C,Xe,et,re,le.z,null)}}const Pe=C.children;for(let Xe=0,et=Pe.length;Xe<et;Xe++)on(Pe[Xe],Z,re,oe)}function Yo(C,Z,re,oe){const ie=C.opaque,Pe=C.transmissive,Xe=C.transparent;v.setupLightsView(re),j===!0&&at.setGlobalState(b.clippingPlanes,re),Pe.length>0&&wr(ie,Pe,Z,re),oe&&Ne.viewport(T.copy(oe)),ie.length>0&&Ei(ie,Z,re),Pe.length>0&&Ei(Pe,Z,re),Xe.length>0&&Ei(Xe,Z,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function wr(C,Z,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const Pe=je.isWebGL2;he===null&&(he=new Jr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Vo:Er,minFilter:$r,samples:Pe?4:0})),b.getDrawingBufferSize(fe),Pe?he.setSize(fe.x,fe.y):he.setSize(_d(fe.x),_d(fe.y));const Xe=b.getRenderTarget();b.setRenderTarget(he),b.getClearColor(se),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();const et=b.toneMapping;b.toneMapping=Mr,Ei(C,re,oe),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let De=!1;for(let lt=0,rt=Z.length;lt<rt;lt++){const ot=Z[lt],bt=ot.object,gn=ot.geometry,Ht=ot.material,Mn=ot.group;if(Ht.side===Bi&&bt.layers.test(oe.layers)){const vt=Ht.side;Ht.side=Un,Ht.needsUpdate=!0,Ar(bt,re,oe,gn,Ht,Mn),Ht.side=vt,Ht.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),b.setRenderTarget(Xe),b.setClearColor(se,k),b.toneMapping=et}function Ei(C,Z,re){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,Pe=C.length;ie<Pe;ie++){const Xe=C[ie],et=Xe.object,De=Xe.geometry,lt=oe===null?Xe.material:oe,rt=Xe.group;et.layers.test(re.layers)&&Ar(et,Z,re,De,lt,rt)}}function Ar(C,Z,re,oe,ie,Pe){C.onBeforeRender(b,Z,re,oe,ie,Pe),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(b,Z,re,oe,C,Pe),ie.transparent===!0&&ie.side===Bi&&ie.forceSinglePass===!1?(ie.side=Un,ie.needsUpdate=!0,b.renderBufferDirect(re,Z,oe,ie,C,Pe),ie.side=Tr,ie.needsUpdate=!0,b.renderBufferDirect(re,Z,oe,ie,C,Pe),ie.side=Bi):b.renderBufferDirect(re,Z,oe,ie,C,Pe),C.onAfterRender(b,Z,re,oe,ie,Pe)}function ji(C,Z,re){Z.isScene!==!0&&(Z=be);const oe=$e.get(C),ie=v.state.lights,Pe=v.state.shadowsArray,Xe=ie.state.version,et=Ge.getParameters(C,ie.state,Pe,Z,re),De=Ge.getProgramCacheKey(et);let lt=oe.programs;oe.environment=C.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(C.isMeshStandardMaterial?te:A).get(C.envMap||oe.environment),lt===void 0&&(C.addEventListener("dispose",we),lt=new Map,oe.programs=lt);let rt=lt.get(De);if(rt!==void 0){if(oe.currentProgram===rt&&oe.lightsStateVersion===Xe)return Ko(C,et),rt}else et.uniforms=Ge.getUniforms(C),C.onBuild(re,et,b),C.onBeforeCompile(et,b),rt=Ge.acquireProgram(et,De),lt.set(De,rt),oe.uniforms=et.uniforms;const ot=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ot.clippingPlanes=at.uniform),Ko(C,et),oe.needsLights=Zo(C),oe.lightsStateVersion=Xe,oe.needsLights&&(ot.ambientLightColor.value=ie.state.ambient,ot.lightProbe.value=ie.state.probe,ot.directionalLights.value=ie.state.directional,ot.directionalLightShadows.value=ie.state.directionalShadow,ot.spotLights.value=ie.state.spot,ot.spotLightShadows.value=ie.state.spotShadow,ot.rectAreaLights.value=ie.state.rectArea,ot.ltc_1.value=ie.state.rectAreaLTC1,ot.ltc_2.value=ie.state.rectAreaLTC2,ot.pointLights.value=ie.state.point,ot.pointLightShadows.value=ie.state.pointShadow,ot.hemisphereLights.value=ie.state.hemi,ot.directionalShadowMap.value=ie.state.directionalShadowMap,ot.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ot.spotShadowMap.value=ie.state.spotShadowMap,ot.spotLightMatrix.value=ie.state.spotLightMatrix,ot.spotLightMap.value=ie.state.spotLightMap,ot.pointShadowMap.value=ie.state.pointShadowMap,ot.pointShadowMatrix.value=ie.state.pointShadowMatrix),oe.currentProgram=rt,oe.uniformsList=null,rt}function $o(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Pl.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Ko(C,Z){const re=$e.get(C);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function Vl(C,Z,re,oe,ie){Z.isScene!==!0&&(Z=be),R.resetTextureUnits();const Pe=Z.fog,Xe=oe.isMeshStandardMaterial?Z.environment:null,et=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xi,De=(oe.isMeshStandardMaterial?te:A).get(oe.envMap||Xe),lt=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ot=!!re.morphAttributes.position,bt=!!re.morphAttributes.normal,gn=!!re.morphAttributes.color;let Ht=Mr;oe.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ht=b.toneMapping);const Mn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,vt=Mn!==void 0?Mn.length:0,ut=$e.get(oe),vn=v.state.lights;if(j===!0&&(ue===!0||C!==ve)){const En=C===ve&&oe.id===de;at.setState(oe,C,En)}let Ut=!1;oe.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==vn.state.version||ut.outputColorSpace!==et||ie.isBatchedMesh&&ut.batching===!1||!ie.isBatchedMesh&&ut.batching===!0||ie.isInstancedMesh&&ut.instancing===!1||!ie.isInstancedMesh&&ut.instancing===!0||ie.isSkinnedMesh&&ut.skinning===!1||!ie.isSkinnedMesh&&ut.skinning===!0||ie.isInstancedMesh&&ut.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ut.instancingColor===!1&&ie.instanceColor!==null||ut.envMap!==De||oe.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==at.numPlanes||ut.numIntersection!==at.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==rt||ut.morphTargets!==ot||ut.morphNormals!==bt||ut.morphColors!==gn||ut.toneMapping!==Ht||je.isWebGL2===!0&&ut.morphTargetsCount!==vt)&&(Ut=!0):(Ut=!0,ut.__version=oe.version);let wi=ut.currentProgram;Ut===!0&&(wi=ji(oe,Z,ie));let Qo=!1,fi=!1,qi=!1;const zt=wi.getUniforms(),Vn=ut.uniforms;if(Ne.useProgram(wi.program)&&(Qo=!0,fi=!0,qi=!0),oe.id!==de&&(de=oe.id,fi=!0),Qo||ve!==C){zt.setValue(q,"projectionMatrix",C.projectionMatrix),zt.setValue(q,"viewMatrix",C.matrixWorldInverse);const En=zt.map.cameraPosition;En!==void 0&&En.setValue(q,le.setFromMatrixPosition(C.matrixWorld)),je.logarithmicDepthBuffer&&zt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),ve!==C&&(ve=C,fi=!0,qi=!0)}if(ie.isSkinnedMesh){zt.setOptional(q,ie,"bindMatrix"),zt.setOptional(q,ie,"bindMatrixInverse");const En=ie.skeleton;En&&(je.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),zt.setValue(q,"boneTexture",En.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(zt.setOptional(q,ie,"batchingTexture"),zt.setValue(q,"batchingTexture",ie._matricesTexture,R));const eo=re.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0&&je.isWebGL2===!0)&&ft.update(ie,re,wi),(fi||ut.receiveShadow!==ie.receiveShadow)&&(ut.receiveShadow=ie.receiveShadow,zt.setValue(q,"receiveShadow",ie.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Vn.envMap.value=De,Vn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),fi&&(zt.setValue(q,"toneMappingExposure",b.toneMappingExposure),ut.needsLights&&Ti(Vn,qi),Pe&&oe.fog===!0&&Ce.refreshFogUniforms(Vn,Pe),Ce.refreshMaterialUniforms(Vn,oe,ce,Q,he),Pl.upload(q,$o(ut),Vn,R)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Pl.upload(q,$o(ut),Vn,R),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(q,"center",ie.center),zt.setValue(q,"modelViewMatrix",ie.modelViewMatrix),zt.setValue(q,"normalMatrix",ie.normalMatrix),zt.setValue(q,"modelMatrix",ie.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const En=oe.uniformsGroups;for(let Rr=0,Jo=En.length;Rr<Jo;Rr++)if(je.isWebGL2){const es=En[Rr];_t.update(es,wi),_t.bind(es,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function Ti(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Zo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,Z,re){$e.get(C.texture).__webglTexture=Z,$e.get(C.depthTexture).__webglTexture=re;const oe=$e.get(C);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const re=$e.get(C);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,re=0){F=C,W=Z,z=re;let oe=!0,ie=null,Pe=!1,Xe=!1;if(C){const De=$e.get(C);De.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(q.FRAMEBUFFER,null),oe=!1):De.__webglFramebuffer===void 0?R.setupRenderTarget(C):De.__hasExternalTextures&&R.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Xe=!0);const rt=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[Z])?ie=rt[Z][re]:ie=rt[Z],Pe=!0):je.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?ie=$e.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?ie=rt[re]:ie=rt,T.copy(C.viewport),I.copy(C.scissor),ae=C.scissorTest}else T.copy(X).multiplyScalar(ce).floor(),I.copy(P).multiplyScalar(ce).floor(),ae=V;if(Ne.bindFramebuffer(q.FRAMEBUFFER,ie)&&je.drawBuffers&&oe&&Ne.drawBuffers(C,ie),Ne.viewport(T),Ne.scissor(I),Ne.setScissorTest(ae),Pe){const De=$e.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,De.__webglTexture,re)}else if(Xe){const De=$e.get(C.texture),lt=Z||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,De.__webglTexture,re||0,lt)}de=-1},this.readRenderTargetPixels=function(C,Z,re,oe,ie,Pe,Xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(et=et[Xe]),et){Ne.bindFramebuffer(q.FRAMEBUFFER,et);try{const De=C.texture,lt=De.format,rt=De.type;if(lt!==ci&&ke.convert(lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=rt===Vo&&(Ie.has("EXT_color_buffer_half_float")||je.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(rt!==Er&&ke.convert(rt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Hi&&(je.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-oe&&re>=0&&re<=C.height-ie&&q.readPixels(Z,re,oe,ie,ke.convert(lt),ke.convert(rt),Pe)}finally{const De=F!==null?$e.get(F).__webglFramebuffer:null;Ne.bindFramebuffer(q.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(C,Z,re=0){const oe=Math.pow(2,-re),ie=Math.floor(Z.image.width*oe),Pe=Math.floor(Z.image.height*oe);R.setTexture2D(Z,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,C.x,C.y,ie,Pe),Ne.unbindTexture()},this.copyTextureToTexture=function(C,Z,re,oe=0){const ie=Z.image.width,Pe=Z.image.height,Xe=ke.convert(re.format),et=ke.convert(re.type);R.setTexture2D(re,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,re.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,re.unpackAlignment),Z.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,oe,C.x,C.y,ie,Pe,Xe,et,Z.image.data):Z.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,oe,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Xe,Z.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,oe,C.x,C.y,Xe,et,Z.image),oe===0&&re.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,re,oe,ie=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,Xe=C.max.y-C.min.y+1,et=C.max.z-C.min.z+1,De=ke.convert(oe.format),lt=ke.convert(oe.type);let rt;if(oe.isData3DTexture)R.setTexture3D(oe,0),rt=q.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)R.setTexture2DArray(oe,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,oe.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,oe.unpackAlignment);const ot=q.getParameter(q.UNPACK_ROW_LENGTH),bt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),gn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ht=q.getParameter(q.UNPACK_SKIP_ROWS),Mn=q.getParameter(q.UNPACK_SKIP_IMAGES),vt=re.isCompressedTexture?re.mipmaps[ie]:re.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,vt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),re.isDataTexture||re.isData3DTexture?q.texSubImage3D(rt,ie,Z.x,Z.y,Z.z,Pe,Xe,et,De,lt,vt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(rt,ie,Z.x,Z.y,Z.z,Pe,Xe,et,De,vt.data)):q.texSubImage3D(rt,ie,Z.x,Z.y,Z.z,Pe,Xe,et,De,lt,vt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ot),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,bt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,gn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ht),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Mn),ie===0&&oe.generateMipmaps&&q.generateMipmap(rt),Ne.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){W=0,z=0,F=null,Ne.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ad?"display-p3":"srgb",n.unpackColorSpace=Ct.workingColorSpace===zl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rn?Qr:ig}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qr?rn:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qE extends Ag{}qE.prototype.isWebGL1Renderer=!0;class Cd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=n}clone(){return new Cd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class YE extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Rg extends jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dm=new Yt,yd=new cg,Tl=new kl,wl=new Y;class Sd extends Fn{constructor(e=new di,n=new Rg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(a),Tl.radius+=l,e.ray.intersectsSphere(Tl)===!1)return;Dm.copy(a).invert(),yd.copy(e.ray).applyMatrix4(Dm);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=r.index,_=r.attributes.position;if(p!==null){const y=Math.max(0,d.start),S=Math.min(p.count,d.start+d.count);for(let E=y,w=S;E<w;E++){const v=p.getX(E);wl.fromBufferAttribute(_,v),Nm(wl,v,h,a,e,n,this)}}else{const y=Math.max(0,d.start),S=Math.min(_.count,d.start+d.count);for(let E=y,w=S;E<w;E++)wl.fromBufferAttribute(_,E),Nm(wl,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Nm(s,e,n,r,a,l,d){const u=yd.distanceSqToPoint(s);if(u<n){const h=new Y;yd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,object:d})}}class $E{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,a=this.getPoint(0),l=0;n.push(0);for(let d=1;d<=e;d++)r=this.getPoint(d/e),l+=r.distanceTo(a),n.push(l),a=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const r=this.getLengths();let a=0;const l=r.length;let d;n?d=n:d=e*r[l-1];let u=0,h=l-1,p;for(;u<=h;)if(a=Math.floor(u+(h-u)/2),p=r[a]-d,p<0)u=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===d)return a/(l-1);const g=r[a],y=r[a+1]-g,S=(d-g)/y;return(a+S)/(l-1)}getTangent(e,n){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const d=this.getPoint(a),u=this.getPoint(l),h=n||(d.isVector2?new Tt:new Y);return h.copy(u).sub(d).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n){const r=new Y,a=[],l=[],d=[],u=new Y,h=new Yt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new Y)}l[0]=new Y,d[0]=new Y;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),_=Math.abs(a[0].y),y=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),y<=p&&r.set(0,0,1),u.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],u),d[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),d[S]=d[S-1].clone(),u.crossVectors(a[S-1],a[S]),u.length()>Number.EPSILON){u.normalize();const E=Math.acos(pn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(u,E))}d[S].crossVectors(a[S],l[S])}if(n===!0){let S=Math.acos(pn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(u.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),d[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function bd(){let s=0,e=0,n=0,r=0;function a(l,d,u,h){s=l,e=u,n=-3*l+3*d-2*u-h,r=2*l-2*d+u+h}return{initCatmullRom:function(l,d,u,h,p){a(d,u,p*(u-l),p*(h-d))},initNonuniformCatmullRom:function(l,d,u,h,p,g,_){let y=(d-l)/p-(u-l)/(p+g)+(u-d)/g,S=(u-d)/g-(h-d)/(g+_)+(h-u)/_;y*=g,S*=g,a(d,u,y,S)},calc:function(l){const d=l*l,u=d*l;return s+e*l+n*d+r*u}}}const Al=new Y,rd=new bd,sd=new bd,od=new bd;class Md extends $E{constructor(e=[],n=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=a}getPoint(e,n=new Y){const r=n,a=this.points,l=a.length,d=(l-(this.closed?0:1))*e;let u=Math.floor(d),h=d-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:h===0&&u===l-1&&(u=l-2,h=1);let p,g;this.closed||u>0?p=a[(u-1)%l]:(Al.subVectors(a[0],a[1]).add(a[0]),p=Al);const _=a[u%l],y=a[(u+1)%l];if(this.closed||u+2<l?g=a[(u+2)%l]:(Al.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Al),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),w=Math.pow(_.distanceToSquared(y),S),v=Math.pow(y.distanceToSquared(g),S);w<1e-4&&(w=1),E<1e-4&&(E=w),v<1e-4&&(v=w),rd.initNonuniformCatmullRom(p.x,_.x,y.x,g.x,E,w,v),sd.initNonuniformCatmullRom(p.y,_.y,y.y,g.y,E,w,v),od.initNonuniformCatmullRom(p.z,_.z,y.z,g.z,E,w,v)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(p.x,_.x,y.x,g.x,this.tension),sd.initCatmullRom(p.y,_.y,y.y,g.y,this.tension),od.initCatmullRom(p.z,_.z,y.z,g.z,this.tension));return r.set(rd.calc(h),sd.calc(h),od.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class KE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Um(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Um();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Um(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);const _i={bg:new We("#04060a"),fog:new We("#04060a"),soil:new We("#241813"),soilDeep:new We("#0c0806"),scan:new We("#37e6d0"),node:new We("#7bffd6"),seed:new We("#8a5a32"),bark:new We("#5b4327"),barkTip:new We("#8fe6b0"),leaf:new We("#2f9e46"),leafGloss:new We("#7fffa8"),blossom:new We("#fff3c4"),appleUnripe:new We("#7cae3a"),appleRipe:new We("#cf2130"),appleBlush:new We("#f2544a")},js=(s,e=0,n=1)=>Math.min(n,Math.max(e,s)),ks=(s,e,n)=>s+(e-s)*n;function hn(s,e,n){const r=js((s-e)/(n-e));return r*r*(3-2*r)}function ZE(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function QE(s=7,e={}){const{trunkHeight:n=5.2,branchLenMul:r=1,tiltMul:a=1,leafCountMul:l=1,leafScaleMul:d=1}=e,u=ZE(s),h=(v,x)=>v+u()*(x-v),p=[],g=[],_=[];let y=1e-4;function S(v,x,L,b,D,W,z){const de=[],ve=new Y(0,1,0),T=new Y(h(-1,1),0,h(-1,1)).normalize(),I=W===0?0:h(.08,.22);v.clone(),x.clone().normalize().multiplyScalar(L/7);for(let H=0;H<=7;H++){const $=H/7,X=v.clone().addScaledVector(x.clone().normalize(),L*$);X.addScaledVector(T,Math.sin($*Math.PI)*L*.06*h(.5,1.2)),X.y-=I*L*$*$,de.push(X)}const ae=new Md(de),se=z+L,k={curve:ae,r0:b,r1:D,depth:W,startDist:z,endDist:se,gStart:0,gEnd:0};p.push(k),y=Math.max(y,se);const ee=de[de.length-1],Q=ee.clone().sub(de[de.length-2]).normalize();if(W>=2){const H=Math.floor(h(3,7)*l);for(let $=0;$<H;$++){const X=h(.35,1),P=ae.getPoint(X),V=z+L*X,j=new Y(P.x,0,P.z).normalize().clone().lerp(ve,.35).addScaledVector(new Y(h(-1,1),h(-.3,1),h(-1,1)),.5).normalize();g.push({pos:P,normal:j,scale:h(.7,1.25)*d,spin:h(0,Math.PI*2),growth:V})}}if(W>=2&&u()<.55){const H=ee.clone();H.y-=D*2+.15,_.push({pos:H,scale:h(.8,1.15),growth:se,anchor:ee.clone()})}if(W<4){const H=W===0?4:W===1?3:2;for(let $=0;$<H;$++){const X=W===0?h(.82,1):h(.45,.95),P=ae.getPoint(X),V=z+L*X,ye=$/H*Math.PI*2+h(-.5,.5),j=(W===0?h(.5,.9):h(.6,1.15))*a,ue=new Y(Math.cos(ye)*Math.sin(j),Math.cos(j)+.35,Math.sin(ye)*Math.sin(j)).normalize();ue.lerp(Q,.25).normalize();const he=L*h(.55,.75)*r,Ae=D*h(.7,.95),fe=Ae*.55;S(P,ue,he,Ae,fe,W+1,V)}}}S(new Y(0,0,0),new Y(.05,1,.02),n,.55,.34,0,0);for(const v of p)v.gStart=v.startDist/y,v.gEnd=v.endDist/y;for(const v of g)v.growth/=y;for(const v of _)v.growth/=y;let E=0,w=-1/0;return _.forEach((v,x)=>{const L=v.pos.y+v.pos.z*.4-Math.abs(v.pos.x)*.2;L>w&&(w=L,E=x)}),{branches:p,leaves:g,fruits:_,fallIndex:E,maxDist:y}}function JE(s={}){return new Mi({transparent:!0,depthWrite:!1,depthTest:!0,blending:Go,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:s.size??2},uDrift:{value:s.drift??.14},uOpacity:{value:s.opacity??1},uFall:{value:1},uFallHeight:{value:s.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new We("#7cae3a")},uRipe:{value:new We("#cf2130")},uBlush:{value:new We("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
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
    `})}const Rl=new Y,Im=new Qs,e1=new Y(0,1,0);class xr{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,n,r,a,l,d){this.pos.push(e,n,r),this.growth.push(a),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(d)}addCurve(e,n,r,a,l,d,u,h){for(let p=0;p<r;p++){const g=Math.random(),_=e.getPoint(g),y=n*(.3+Math.pow(Math.random(),.5))*1.1,S=Math.random()*Math.PI*2,E=(Math.random()-.5)*n;_.x+=Math.cos(S)*y,_.z+=Math.sin(S)*y,_.y+=E;const w=a+(l-a)*g;this.push(_.x,_.y,_.z,w,d,u+Math.random()*(h-u))}}addLeafPuff(e,n,r,a,l,d,u,h,p){Im.setFromUnitVectors(e1,n);for(let g=0;g<l;g++){const _=Math.pow(Math.random(),.75),y=Math.sin(Math.max(0,_)*Math.PI),S=(Math.random()*2-1)*y*a,E=_*r,w=(Math.random()*2-1)*y*a*.4;Rl.set(S,E,w).applyQuaternion(Im).add(e),this.push(Rl.x,Rl.y,Rl.z,d,u,h+Math.random()*(p-h))}}addBlob(e,n,r,a,l,d,u,h,p){for(let g=0;g<l;g++){const _=Math.random(),y=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1),E=Math.pow(_,.6),w=e.x+E*Math.sin(S)*Math.cos(y)*n,v=e.y+E*Math.cos(S)*r,x=e.z+E*Math.sin(S)*Math.sin(y)*a;this.push(w,v,x,d,u,h+Math.random()*(p-h))}}build(e){const n=new di;n.setAttribute("position",new Nn(this.pos,3)),n.setAttribute("aGrowth",new Nn(this.growth,1)),n.setAttribute("aColor",new Nn(this.color,3)),n.setAttribute("aRand",new Nn(this.rand,1)),n.setAttribute("aSize",new Nn(this.size,1));const r=new Sd(n,e);return r.frustumCulled=!1,r}}const xi=(s,e,n)=>new Y(s,e,n);class t1{constructor(e){this.scene=e,this.tree=QE(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Ho,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const n=JE(e);return this.mats.push(n),n}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new Cd(new We("#04060a"),.013);const n=1300,r=new Float32Array(n*3);for(let l=0;l<n;l++)r[l*3]=(Math.random()-.5)*46,r[l*3+1]=Math.random()*26-4,r[l*3+2]=(Math.random()-.5)*46;const a=new di;a.setAttribute("position",new ui(r,3)),this.ambient=new Sd(a,new Rg({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:Go})),e.add(this.ambient)}buildWaveField(){const r=[],a=[];for(let d=0;d<176;d++)for(let u=0;u<176;u++){const h=-15+d/175*2*15,p=-15+u/175*2*15;Math.hypot(h,p)>15||(r.push(h,0,p),a.push(Math.random()))}const l=new di;l.setAttribute("position",new Nn(r,3)),l.setAttribute("aRand",new Nn(a,1)),this.waveMat=new Mi({transparent:!0,depthWrite:!1,blending:Go,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new We("#0b3f7a")},uHigh:{value:new We("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
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
      `}),this.wave=new Sd(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new xr,n=new We("#5c3418"),r=.45;for(let a=0;a<3200;a++){const l=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),u=.7+.3*Math.pow(Math.random(),.85);let h=Math.cos(l)*Math.sin(d)*u,p=Math.cos(d)*u,g=Math.sin(l)*Math.sin(d)*u;const _=(p+1)/2,y=1-.72*Math.pow(1-_,1.8);h*=.44*y,g*=.34*y,p*=.62,e.push(h,r+p,g,0,n,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new xr,n=(_,y)=>_+Math.random()*(y-_),r=[];let a=.001;const l=(_,y,S,E,w,v)=>{const L=[],b=new Y(n(-1,1),0,n(-1,1)).normalize(),D=y.clone().normalize();for(let de=0;de<=6;de++){const ve=de/6,T=_.clone().addScaledVector(D,S*ve);T.y-=Math.pow(ve,1.3)*S*.22,T.addScaledVector(b,Math.sin(ve*Math.PI)*S*.13*n(.4,1.1)),L.push(T)}const W=new Md(L),z=E*.14,F=w+S;if(r.push({curve:W,r0:E,r1:z,startDist:w,endDist:F,depth:v}),a=Math.max(a,F),v<4){const de=v===0||Math.random()<.45?3:2;for(let ve=0;ve<de;ve++){const T=n(.35,.94),I=W.getPoint(T),ae=w+S*T,se=n(0,Math.PI*2),k=n(.55,1.15),ee=new Y(Math.cos(se)*Math.sin(k),-Math.abs(Math.cos(k))-.3,Math.sin(se)*Math.sin(k)).normalize(),Q=S*n(.5,.72),ce=ks(E,z,T)*n(.72,.95);l(I,ee,Q,ce,ae,v+1)}}};l(xi(0,-.4,0),xi(.05,-1,.03),2.6,.16,0,0);const d=_i.seed.clone(),u=new We("#d9a066"),h=new We;for(const _ of r){const y=_.startDist/a,S=_.endDist/a,E=_.curve.getLength(),w=Math.max(50,Math.floor(E*460));for(let v=0;v<w;v++){const x=Math.random(),L=_.curve.getPoint(x),b=ks(_.r0,_.r1,x),D=b*Math.pow(Math.random(),.6),W=Math.random()*Math.PI*2;L.x+=Math.cos(W)*D,L.z+=Math.sin(W)*D,L.y+=(Math.random()-.5)*b*.4,h.copy(d).lerp(u,x*.5);const z=ks(1.9,.45,x)*(_.depth>=2?.8:1);e.push(L.x,L.y,L.z,ks(y,S,x),h,z)}}const p=r[0],g=new We("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const _ of this.nodeAlong){const y=p.curve.getPoint(_),S=(p.startDist+_*(p.endDist-p.startDist))/a;e.addBlob(y,.15,.15,.15,140,S,g,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new xr,n=new We("#6fce63"),r=_i.leafGloss.clone(),a=new Md([xi(0,0,0),xi(.04,.5,.02),xi(-.03,1,-.02),xi(0,1.5,0)]);e.addCurve(a,.05,1100,0,.65,n,.8,1.8);const l=xi(0,1.5,0),d=xi(-.9,.7,.15).normalize(),u=xi(.9,.7,-.15).normalize();e.addLeafPuff(l,d,.85,.4,900,.72,r,.8,2),e.addLeafPuff(l,u,.85,.4,900,.78,r,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new xr,n=new We("#8a6636"),r=new We("#5e441f"),a=new We;for(const l of this.tree.branches){const d=l.curve.getLength(),u=Math.max(l.r1,(l.r0+l.r1)*.5),h=l.depth===0?900:230,p=Math.floor(d*h)+40,g=l.depth===0?.15:.55;a.copy(n).lerp(r,g+Math.random()*.3),e.addCurve(l.curve,u,p,l.gStart,l.gEnd,a,1,2.6)}this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new xr,n=_i.leaf.clone(),r=_i.leafGloss.clone(),a=new We,l=new Y;for(const u of this.tree.leaves){l.add(u.pos),a.copy(n).lerp(r,Math.random()*.5);const h=1.15*u.scale,p=.55*u.scale;e.addLeafPuff(u.pos,u.normal,h,p,70,u.growth,a,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const d=4.6;for(let u=0;u<16e3;u++){const h=new Y(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),p=Math.pow(Math.random(),.6)*d,g=l.clone().addScaledVector(h,p);g.y+=(d-p)*.15,a.copy(n).lerp(r,Math.random()*.6);const _=js(.55+p/d*.45);e.push(g.x,g.y,g.z,_,a,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new xr,n=_i.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone(),this.tree.fruits.forEach((r,a)=>{a!==this.fallIndex&&e.addBlob(r.pos,.42*r.scale,.36*r.scale,.42*r.scale,200,r.growth,n,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(_i.appleUnripe),e.uniforms.uRipe.value.copy(_i.appleRipe),e.uniforms.uBlush.value.copy(_i.appleBlush)}buildBlossoms(){const e=new xr,n=_i.blossom.clone();for(const r of this.tree.fruits)e.addBlob(r.anchor,.16,.16,.16,40,0,n,1.6,3.6);this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new xr,n=_i.appleRipe.clone();e.addBlob(xi(0,0,0),.44,.38,.44,340,0,n,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,n){for(const E of this.mats)E.uniforms.uTime.value=n;this.waveMat.uniforms.uTime.value=n;const r=hn(e,0,.1);this.seedMat.uniforms.uFall.value=r;const a=hn(e,.1,.28);this.seed.position.y=-a*.8;const l=hn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=ks(.55,.12,hn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*hn(e,.55,.72);let d=0,u=0;e<.5&&(d=hn(e,.08,.42),u=.7),this.rootMat.uniforms.uReveal.value=hn(e,.2,.4),this.roots.visible=e<.52;const h=hn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=h,this.seedlingMat.uniforms.uOpacity.value=1-hn(e,.56,.66),this.seedling.visible=h>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=hn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=hn(e,.56,.78);const p=hn(e,.72,.8)*(1-hn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=p,this.blossoms.visible=p>.01;const g=hn(e,.72,.86),_=hn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=g,this.fruitMat.uniforms.uRipen.value=_,this.fallMat.uniforms.uRipen.value=_;const y=js((e-.88)/(.98-.88)),S=y*y;this.fall.visible=g>.01,this.fall.position.set(this.fallAnchor.x,ks(this.fallAnchor.y,.3,S),this.fallAnchor.z),this.fall.rotation.z=y*3,e>=.9&&(d=hn(e,.9,1),u=1.8),this.waveMat.uniforms.uRipple.value=d,this.waveMat.uniforms.uRippleAmp.value=u,this.ambient.rotation.y=n*.008}}const Ln=(s,e,n)=>new Y(s,e,n),Cl=[{p:0,pos:Ln(0,6.5,21),tgt:Ln(0,1.6,0)},{p:.16,pos:Ln(2.2,5.2,18),tgt:Ln(0,.6,0)},{p:.34,pos:Ln(4.5,-1.2,14),tgt:Ln(0,-2.4,0)},{p:.5,pos:Ln(2.6,2.6,13),tgt:Ln(0,1.2,0)},{p:.72,pos:Ln(-3.2,7.5,27),tgt:Ln(0,7,0)},{p:.86,pos:Ln(6,11.5,23),tgt:Ln(.4,9.5,0)},{p:1,pos:Ln(0,8.5,34),tgt:Ln(0,8,0)}],n1=s=>s*s*(3-2*s);function i1(s){return s<.18?0:s<.5?1:s<.78?2:3}function r1(s){s.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(r=>{Object.values(r).forEach(a=>{a&&a.isTexture&&a.dispose()}),r.dispose()})})}function s1({sectionRef:s,onStageChange:e,onWebGLUnavailable:n}){const r=Ye.useRef(null),a=Ye.useRef(e);a.current=e;const l=Ye.useRef(n);return l.current=n,Ye.useEffect(()=>{const d=r.current,u=s.current;if(!d||!u)return;const h=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let p;try{p=new Ag({canvas:d,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{l.current&&l.current();return}p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(window.innerWidth,window.innerHeight),p.setClearColor(0,0),p.toneMapping=Ym,p.toneMappingExposure=1.1;const g=new YE,_=new Zn(50,window.innerWidth/window.innerHeight,.1,400);_.position.set(0,5,12);const y=new t1(g);let S=!1;const E=new Y,w=new Y,v=(se,k)=>{let ee=0;for(;ee<Cl.length-2&&se>Cl[ee+1].p;)ee++;const Q=Cl[ee],ce=Cl[ee+1],H=n1(js((se-Q.p)/(ce.p-Q.p)));E.lerpVectors(Q.pos,ce.pos,H),w.lerpVectors(Q.tgt,ce.tgt,H),E.x+=Math.sin(k*.22)*.3,E.y+=Math.cos(k*.18)*.18,S&&E.sub(w).multiplyScalar(1.28).add(w),_.position.copy(E),_.lookAt(w)},x=()=>{const se=window.innerWidth,k=window.innerHeight;S=se<821,_.aspect=se/k,_.clearViewOffset(),p.setSize(se,k),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),S?_.setViewOffset(se,k,0,k*.2,se,k):_.setViewOffset(se,k,se*.22,0,se,k),_.updateProjectionMatrix()};x();const L=()=>{const se=u.getBoundingClientRect(),k=u.offsetHeight-window.innerHeight,ee=js(-se.top,0,Math.max(0,k));return k>0?js(ee/k):0};let b=-1;const D=se=>{const k=i1(se);k!==b&&(b=k,a.current&&a.current(k))},W=new KE;let z=L(),F=null;const de=()=>{const se=L();z=se,y.update(se,0),v(se,0),D(se),p.render(g,_)},ve=()=>{const se=Math.min(W.getDelta(),.05),k=W.elapsedTime,ee=L(),Q=1-Math.pow(.0015,se);z+=(ee-z)*Q,y.update(z,k),v(z,k),D(z),p.render(g,_),F=requestAnimationFrame(ve)},T=()=>{x(),h&&de()};window.addEventListener("resize",T);const I=se=>{se.preventDefault(),F&&(cancelAnimationFrame(F),F=null)};d.addEventListener("webglcontextlost",I,!1);let ae=null;return h?(ae=()=>de(),window.addEventListener("scroll",ae,{passive:!0}),de()):F=requestAnimationFrame(ve),()=>{var se;F&&cancelAnimationFrame(F),window.removeEventListener("resize",T),ae&&window.removeEventListener("scroll",ae),d.removeEventListener("webglcontextlost",I,!1),r1(g),g.clear(),p.dispose(),(se=p.forceContextLoss)==null||se.call(p)}},[s]),O.jsx("canvas",{ref:r,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class Cg extends Gm.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){}render(){const{error:e}=this.state;if(e){const{fallback:n}=this.props;return typeof n=="function"?n(e):n!==void 0?n:null}return this.props.children}}const o1=560,Fm=[-4,-1.5,2,5],a1=[-10,-4,4,10],l1=[8,4,2,0];function c1(s,e,n){const r=n?"0px":"-50%";if(s===e)return{transform:`translate(0, ${r}) rotate(0deg) scale(1)`,opacity:1,zIndex:20};if(s<e){const l=e-s,d=a1[s],u=1-Math.min(.06,l*.02);if(n){const p=-(6+l*11);return{transform:`translate(${d}px, ${p}px) rotate(${Fm[s]}deg) scale(${u})`,opacity:1,zIndex:19-l}}const h=l1[s]+l*14;return{transform:`translate(${d}px, calc(-50% + ${h}px)) rotate(${Fm[s]}deg) scale(${u})`,opacity:1,zIndex:19-l}}return{transform:`translate(0, ${n?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function u1({card:s,style:e}){return O.jsxs("article",{className:"story-card",style:e,children:[O.jsx("div",{className:"sc-accent"}),O.jsxs("div",{className:"sc-body",children:[O.jsx("p",{className:"sc-num",children:s.num}),O.jsx("h3",{className:"sc-title",children:s.title}),s.callout&&O.jsxs("div",{className:"sc-callout",children:[O.jsx("span",{className:"sc-callout-label",children:s.callout.label}),O.jsx("p",{className:"sc-callout-text",children:s.callout.text})]}),O.jsx("div",{className:"sc-chips",children:s.human.map(n=>O.jsx("span",{className:"chip chip-human",children:n},n))}),O.jsxs("div",{className:"sc-ai",children:[O.jsxs("div",{className:"sc-ai-head",children:[O.jsx("span",{className:"sc-ai-star",children:"✦"}),O.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),O.jsx("div",{className:"sc-chips",style:{margin:0},children:s.ai.map(n=>O.jsx("span",{className:"chip chip-ai",children:n},n))})]}),O.jsx("p",{className:"sc-desc",children:s.desc})]})]})}function d1(){const s=Ye.useRef(null),{theme:e}=Wm(),[n,r]=Ye.useState(0),[a,l]=Ye.useState(typeof window<"u"?window.innerWidth<821:!1);Ye.useEffect(()=>{const _=()=>l(window.innerWidth<821);return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const d=Ye.useCallback(_=>r(_),[]),[u,h]=Ye.useState(!1),p=Ye.useCallback(()=>h(!0),[]),g=Ye.useRef(null);return O.jsxs("section",{id:"practice",ref:s,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[O.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(64px,9vw,120px) clamp(22px,5vw,44px) clamp(40px,6vw,72px)"},children:[O.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"02 · Practice"}),O.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),O.jsx("div",{ref:g,style:{position:"relative",height:`${o1}vh`},children:O.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[u&&O.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),O.jsx(Cg,{fallback:null,children:O.jsx(s1,{sectionRef:g,onStageChange:d,onWebGLUnavailable:p})}),O.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:O.jsx("div",{className:"practice-card-shell",children:x0.map((_,y)=>O.jsx(u1,{card:_,style:c1(y,n,a)},_.id))})})]})}),O.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const ad={fontFamily:"var(--font-mono)"};function f1(){return O.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:O.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[O.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[O.jsx("div",{style:{...ad,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"03 · Instruments"}),O.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."})]}),O.jsx("div",{className:"instruments-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)",transitionDelay:"0.12s"},children:y0.map(s=>O.jsxs("div",{style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)"},children:[O.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:O.jsx("img",{src:s.logo,alt:s.alt,style:{...s.logoStyle,opacity:1}})}),O.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[O.jsx("div",{style:{...ad,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),O.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:s.problem}),O.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),O.jsx("div",{style:{...ad,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),O.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:s.result})]})]},s.id))})]})})}const h1=144,Om=40;function p1(s){const[e,n]=Ye.useState(-1),r=Ye.useCallback(d=>n(d),[]),a=Ye.useCallback(()=>n(-1),[]),l=Ye.useCallback((d,u)=>{const h=d*h1,p=s[d%s.length];if(e===-1)return{x:h,rot:p,scale:1,z:d};const g=d-e;return g===0?{x:h,rot:0,scale:1.04,z:100}:{x:h+(g<0?-Om:Om),rot:p,scale:.98,z:50-Math.abs(g)}},[e,s]);return{activeIndex:e,focus:r,rest:a,getTransform:l}}const m1=ld.map(s=>s.rot);function g1(){const{focus:s,rest:e,getTransform:n}=p1(m1),r=ld.length;return O.jsxs(O.Fragment,{children:[O.jsx("div",{style:{...zm,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),O.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:O.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:ld.map((a,l)=>{const d=n(l,r);return O.jsxs("article",{onMouseEnter:()=>s(l),onClick:()=>s(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${d.x}px) rotate(${d.rot}deg) scale(${d.scale})`,zIndex:d.z},children:[O.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),O.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:a.quote}),O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[O.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...zm,fontSize:10,fontWeight:700,flex:"none"},children:a.initials}),O.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[O.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:a.name}),O.jsx("br",{}),O.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:a.title})]})]})]},a.id)})})}),O.jsx("div",{style:{marginTop:16,textAlign:"right"},children:O.jsxs("a",{href:S0,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",O.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const zm={fontFamily:"var(--font-mono)"},km={fontFamily:"var(--font-mono)"};function v1(){return O.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:O.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[O.jsx("div",{style:{...km,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),O.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[O.jsxs("div",{children:[O.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[vi.quoteLead,O.jsx("span",{style:{color:"var(--accent)"},children:vi.quoteAccent}),vi.quoteTail]}),O.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:vi.paragraphs[0]}),O.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:vi.paragraphs[1]})]}),O.jsxs("div",{children:[O.jsxs("div",{style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[O.jsx("img",{src:vi.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),O.jsxs("div",{style:{padding:"16px 18px"},children:[O.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),O.jsx("div",{style:{...km,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),O.jsx("div",{style:{marginTop:14},children:vi.facts.map(s=>O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[O.jsx("span",{style:{color:"var(--text-secondary)"},children:s.label}),O.jsx("span",{style:{color:s.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:s.value})]},s.label))}),O.jsx("a",{href:vi.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),O.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:O.jsx(g1,{})}),O.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[vi.careerLine,O.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:vi.careerHighlight})]})]})})}const Bm={fontFamily:"var(--font-mono)"};function _1(){return O.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[O.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[O.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),O.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),O.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[O.jsx("div",{"data-reveal":"",style:{...Bm,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),O.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[tl.heading," ",O.jsx("span",{style:{color:"var(--accent)"},children:tl.headingAccent})]}),O.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:tl.links.map(s=>O.jsx("a",{href:s.href,className:`text-link ${s.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:s.variant==="primary"?{paddingBottom:3}:void 0,...s.external?{target:"_blank",rel:"noopener noreferrer"}:{},...s.download?{download:!0}:{},children:s.label},s.label))}),O.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...Bm,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:tl.copyright})]})]})}function x1(s){Ye.useEffect(()=>{const e=s.current;if(!e||typeof IntersectionObserver>"u")return;const n=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&(a.target.setAttribute("data-reveal","visible"),n.unobserve(a.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(r=>n.observe(r)),()=>n.disconnect()},[s])}function y1(){const s=Ye.useRef(null);return x1(s),O.jsxs("div",{id:"top",ref:s,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[O.jsx(T0,{}),O.jsxs("main",{children:[O.jsx(b0,{}),O.jsx(z0,{}),O.jsx(d1,{}),O.jsx(f1,{}),O.jsx(v1,{})]}),O.jsx(_1,{})]})}function S1(){return O.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:O.jsxs("div",{style:{maxWidth:520},children:[O.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),O.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),O.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[O.jsx("a",{href:`mailto:${Gi}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),O.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}v0.createRoot(document.getElementById("root")).render(O.jsx(Gm.StrictMode,{children:O.jsx(Cg,{fallback:O.jsx(S1,{}),children:O.jsx(E0,{children:O.jsx(y1,{})})})}));
