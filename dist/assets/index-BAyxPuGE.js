(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Eg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ou={exports:{}},Va={},zu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Q0(){if(Mp)return ft;Mp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(N,z,de){this.props=N,this.context=z,this.refs=T,this.updater=de||w}y.prototype.isReactComponent={},y.prototype.setState=function(N,z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,z,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=y.prototype;function C(N,z,de){this.props=N,this.context=z,this.refs=T,this.updater=de||w}var R=C.prototype=new S;R.constructor=C,E(R,y.prototype),R.isPureReactComponent=!0;var D=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function oe(N,z,de){var W,ae={},fe=null,Ae=null;if(z!=null)for(W in z.ref!==void 0&&(Ae=z.ref),z.key!==void 0&&(fe=""+z.key),z)G.call(z,W)&&!F.hasOwnProperty(W)&&(ae[W]=z[W]);var Te=arguments.length-2;if(Te===1)ae.children=de;else if(1<Te){for(var Ee=Array(Te),Qe=0;Qe<Te;Qe++)Ee[Qe]=arguments[Qe+2];ae.children=Ee}if(N&&N.defaultProps)for(W in Te=N.defaultProps,Te)ae[W]===void 0&&(ae[W]=Te[W]);return{$$typeof:r,type:N,key:fe,ref:Ae,props:ae,_owner:O.current}}function he(N,z){return{$$typeof:r,type:N.type,key:z,ref:N.ref,props:N.props,_owner:N._owner}}function b(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function U(N){var z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(de){return z[de]})}var le=/\/+/g;function ue(N,z){return typeof N=="object"&&N!==null&&N.key!=null?U(""+N.key):z.toString(36)}function j(N,z,de,W,ae){var fe=typeof N;(fe==="undefined"||fe==="boolean")&&(N=null);var Ae=!1;if(N===null)Ae=!0;else switch(fe){case"string":case"number":Ae=!0;break;case"object":switch(N.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=N,ae=ae(Ae),N=W===""?"."+ue(Ae,0):W,D(ae)?(de="",N!=null&&(de=N.replace(le,"$&/")+"/"),j(ae,z,de,"",function(Qe){return Qe})):ae!=null&&(b(ae)&&(ae=he(ae,de+(!ae.key||Ae&&Ae.key===ae.key?"":(""+ae.key).replace(le,"$&/")+"/")+N)),z.push(ae)),1;if(Ae=0,W=W===""?".":W+":",D(N))for(var Te=0;Te<N.length;Te++){fe=N[Te];var Ee=W+ue(fe,Te);Ae+=j(fe,z,de,Ee,ae)}else if(Ee=_(N),typeof Ee=="function")for(N=Ee.call(N),Te=0;!(fe=N.next()).done;)fe=fe.value,Ee=W+ue(fe,Te++),Ae+=j(fe,z,de,Ee,ae);else if(fe==="object")throw z=String(N),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Ae}function ie(N,z,de){if(N==null)return N;var W=[],ae=0;return j(N,W,"","",function(fe){return z.call(de,fe,ae++)}),W}function J(N){if(N._status===-1){var z=N._result;z=z(),z.then(function(de){(N._status===0||N._status===-1)&&(N._status=1,N._result=de)},function(de){(N._status===0||N._status===-1)&&(N._status=2,N._result=de)}),N._status===-1&&(N._status=0,N._result=z)}if(N._status===1)return N._result.default;throw N._result}var ce={current:null},V={transition:null},Q={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function X(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ie,forEach:function(N,z,de){ie(N,function(){z.apply(this,arguments)},de)},count:function(N){var z=0;return ie(N,function(){z++}),z},toArray:function(N){return ie(N,function(z){return z})||[]},only:function(N){if(!b(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=y,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=C,ft.StrictMode=s,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ft.act=X,ft.cloneElement=function(N,z,de){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var W=E({},N.props),ae=N.key,fe=N.ref,Ae=N._owner;if(z!=null){if(z.ref!==void 0&&(fe=z.ref,Ae=O.current),z.key!==void 0&&(ae=""+z.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ee in z)G.call(z,Ee)&&!F.hasOwnProperty(Ee)&&(W[Ee]=z[Ee]===void 0&&Te!==void 0?Te[Ee]:z[Ee])}var Ee=arguments.length-2;if(Ee===1)W.children=de;else if(1<Ee){Te=Array(Ee);for(var Qe=0;Qe<Ee;Qe++)Te[Qe]=arguments[Qe+2];W.children=Te}return{$$typeof:r,type:N.type,key:ae,ref:fe,props:W,_owner:Ae}},ft.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ft.createElement=oe,ft.createFactory=function(N){var z=oe.bind(null,N);return z.type=N,z},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:d,render:N}},ft.isValidElement=b,ft.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:J}},ft.memo=function(N,z){return{$$typeof:m,type:N,compare:z===void 0?null:z}},ft.startTransition=function(N){var z=V.transition;V.transition={};try{N()}finally{V.transition=z}},ft.unstable_act=X,ft.useCallback=function(N,z){return ce.current.useCallback(N,z)},ft.useContext=function(N){return ce.current.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N){return ce.current.useDeferredValue(N)},ft.useEffect=function(N,z){return ce.current.useEffect(N,z)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(N,z,de){return ce.current.useImperativeHandle(N,z,de)},ft.useInsertionEffect=function(N,z){return ce.current.useInsertionEffect(N,z)},ft.useLayoutEffect=function(N,z){return ce.current.useLayoutEffect(N,z)},ft.useMemo=function(N,z){return ce.current.useMemo(N,z)},ft.useReducer=function(N,z,de){return ce.current.useReducer(N,z,de)},ft.useRef=function(N){return ce.current.useRef(N)},ft.useState=function(N){return ce.current.useState(N)},ft.useSyncExternalStore=function(N,z,de){return ce.current.useSyncExternalStore(N,z,de)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var Ep;function Gd(){return Ep||(Ep=1,zu.exports=Q0()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function J0(){if(Tp)return Va;Tp=1;var r=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,m){var g,x={},_=null,w=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(w=p.ref);for(g in p)s.call(p,g)&&!l.hasOwnProperty(g)&&(x[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:e,type:d,key:_,ref:w,props:x,_owner:o.current}}return Va.Fragment=t,Va.jsx=h,Va.jsxs=h,Va}var bp;function ex(){return bp||(bp=1,Ou.exports=J0()),Ou.exports}var c=ex(),be=Gd();const Ir=Eg(be);var fl={},Bu={exports:{}},Dn={},ju={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function tx(){return Ap||(Ap=1,(function(r){function e(V,Q){var X=V.length;V.push(Q);e:for(;0<X;){var N=X-1>>>1,z=V[N];if(0<o(z,Q))V[N]=Q,V[X]=z,X=N;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var Q=V[0],X=V.pop();if(X!==Q){V[0]=X;e:for(var N=0,z=V.length,de=z>>>1;N<de;){var W=2*(N+1)-1,ae=V[W],fe=W+1,Ae=V[fe];if(0>o(ae,X))fe<z&&0>o(Ae,ae)?(V[N]=Ae,V[fe]=X,N=fe):(V[N]=ae,V[W]=X,N=W);else if(fe<z&&0>o(Ae,X))V[N]=Ae,V[fe]=X,N=fe;else break e}}return Q}function o(V,Q){var X=V.sortIndex-Q.sortIndex;return X!==0?X:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,x=null,_=3,w=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(V){for(var Q=t(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=V)s(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=t(m)}}function D(V){if(T=!1,R(V),!E)if(t(p)!==null)E=!0,J(G);else{var Q=t(m);Q!==null&&ce(D,Q.startTime-V)}}function G(V,Q){E=!1,T&&(T=!1,S(oe),oe=-1),w=!0;var X=_;try{for(R(Q),x=t(p);x!==null&&(!(x.expirationTime>Q)||V&&!U());){var N=x.callback;if(typeof N=="function"){x.callback=null,_=x.priorityLevel;var z=N(x.expirationTime<=Q);Q=r.unstable_now(),typeof z=="function"?x.callback=z:x===t(p)&&s(p),R(Q)}else s(p);x=t(p)}if(x!==null)var de=!0;else{var W=t(m);W!==null&&ce(D,W.startTime-Q),de=!1}return de}finally{x=null,_=X,w=!1}}var O=!1,F=null,oe=-1,he=5,b=-1;function U(){return!(r.unstable_now()-b<he)}function le(){if(F!==null){var V=r.unstable_now();b=V;var Q=!0;try{Q=F(!0,V)}finally{Q?ue():(O=!1,F=null)}}else O=!1}var ue;if(typeof C=="function")ue=function(){C(le)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ie=j.port2;j.port1.onmessage=le,ue=function(){ie.postMessage(null)}}else ue=function(){y(le,0)};function J(V){F=V,O||(O=!0,ue())}function ce(V,Q){oe=y(function(){V(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||w||(E=!0,J(G))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(V){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var X=_;_=Q;try{return V()}finally{_=X}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=_;_=V;try{return Q()}finally{_=X}},r.unstable_scheduleCallback=function(V,Q,X){var N=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?N+X:N):X=N,V){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=X+z,V={id:g++,callback:Q,priorityLevel:V,startTime:X,expirationTime:z,sortIndex:-1},X>N?(V.sortIndex=X,e(m,V),t(p)===null&&V===t(m)&&(T?(S(oe),oe=-1):T=!0,ce(D,X-N))):(V.sortIndex=z,e(p,V),E||w||(E=!0,J(G))),V},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(V){var Q=_;return function(){var X=_;_=Q;try{return V.apply(this,arguments)}finally{_=X}}}})(Hu)),Hu}var Rp;function nx(){return Rp||(Rp=1,ju.exports=tx()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function ix(){if(Cp)return Dn;Cp=1;var r=Gd(),e=nx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function _(n){return p.call(x,n)?!0:p.call(g,n)?!1:m.test(n)?x[n]=!0:(g[n]=!0,!1)}function w(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||w(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,f,v,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,C);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,C);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,C);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,u)&&(a=null),u||f===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var D=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),U=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,N;function z(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var de=!1;function W(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var u=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){u=te}n.call(i.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),v=u.stack.split(`
`),M=f.length-1,I=v.length-1;1<=M&&0<=I&&f[M]!==v[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==v[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==v[I]){var B=`
`+f[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=I);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function ae(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=W(n.type,!1),n;case 11:return n=W(n.type.render,!1),n;case 1:return n=W(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case O:return"Portal";case he:return"Profiler";case oe:return"StrictMode";case ue:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case J:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function Ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,v.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=Qe(n))}function K(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ee(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function zt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ve(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ge(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Ct(n,i){Ge(n,i);var a=Te(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?L(n,i.type,a):i.hasOwnProperty("defaultValue")&&L(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function at(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function L(n,i,a){(i!=="number"||zt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var A=Array.isArray;function ee(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function _e(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ve(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(A(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function ye(n,i){var a=Te(i.value),u=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ze(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $e,ot=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($e=$e||document.createElement("div"),$e.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$e.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ht=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(n){ht.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),mt[i]=mt[n]})});function nt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||mt.hasOwnProperty(n)&&mt[n]?(""+i).trim():i+"px"}function We(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=nt(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var ke=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function xt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Et=null,k=null,Se=null;function Me(n){if(n=Ca(n)){if(typeof Et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ro(i),Et(n.stateNode,n.type,i))}}function Oe(n){k?Se?Se.push(n):Se=[n]:k=n}function qe(){if(k){var n=k,i=Se;if(Se=k=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function yt(n,i){return n(i)}function bt(){}var Ht=!1;function xn(n,i,a){if(Ht)return n(i,a);Ht=!0;try{return yt(n,i,a)}finally{Ht=!1,(k!==null||Se!==null)&&(bt(),qe())}}function St(n,i){var a=n.stateNode;if(a===null)return null;var u=Ro(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qt=!1;if(d)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){qt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{qt=!1}function ao(n,i,a,u,f,v,M,I,B){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(me){this.onError(me)}}var kr=!1,Li=null,Fr=!1,er=null,oo={onError:function(n){kr=!0,Li=n}};function lo(n,i,a,u,f,v,M,I,B){kr=!1,Li=null,ao.apply(oo,arguments)}function ac(n,i,a,u,f,v,M,I,B){if(lo.apply(this,arguments),kr){if(kr){var te=Li;kr=!1,Li=null}else throw Error(t(198));Fr||(Fr=!0,er=te)}}function Ni(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function co(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function P(n){if(Ni(n)!==n)throw Error(t(188))}function Y(n){var i=n.alternate;if(!i){if(i=Ni(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var v=f.alternate;if(v===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===a)return P(f),n;if(v===u)return P(f),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=v;else{for(var M=!1,I=f.child;I;){if(I===a){M=!0,a=f,u=v;break}if(I===u){M=!0,u=f,a=v;break}I=I.sibling}if(!M){for(I=v.child;I;){if(I===a){M=!0,a=v,u=f;break}if(I===u){M=!0,u=v,a=f;break}I=I.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function re(n){return n=Y(n),n!==null?se(n):null}function se(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=se(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,He=e.unstable_shouldYield,Ze=e.unstable_requestPaint,Ne=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,it=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,_n=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,bn=null,gt=null;function ut(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(bn,n,void 0,(n.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:uo,Ut=Math.log,Di=Math.LN2;function uo(n){return n>>>=0,n===0?32:31-(Ut(n)/Di|0)|0}var yi=64,tr=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,v=n.pingedLanes,M=a&268435455;if(M!==0){var I=M&~f;I!==0?u=Bt(I):(v&=M,v!==0&&(u=Bt(v)))}else M=a&~f,M!==0?u=Bt(M):v!==0&&(u=Bt(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,v=i&-i,f>=v||f===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-yn(i),f=1<<a,u|=n[a],i&=~f;return u}function da(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,v=n.pendingLanes;0<v;){var M=31-yn(v),I=1<<M,B=f[M];B===-1?((I&a)===0||(I&u)!==0)&&(f[M]=da(I,i)):B<=i&&(n.expiredLanes|=I),v&=~I}}function Or(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ho(){var n=yi;return yi<<=1,(yi&4194240)===0&&(yi=64),n}function hs(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ha(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-yn(i),n[i]=a}function _v(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-yn(a),v=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~v}}function oc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-yn(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var At=0;function eh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var th,lc,nh,ih,rh,cc=!1,fo=[],nr=null,ir=null,rr=null,fa=new Map,pa=new Map,sr=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(i.pointerId)}}function ma(n,i,a,u,f,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[f]},i!==null&&(i=Ca(i),i!==null&&lc(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Sv(n,i,a,u,f){switch(i){case"focusin":return nr=ma(nr,n,i,a,u,f),!0;case"dragenter":return ir=ma(ir,n,i,a,u,f),!0;case"mouseover":return rr=ma(rr,n,i,a,u,f),!0;case"pointerover":var v=f.pointerId;return fa.set(v,ma(fa.get(v)||null,n,i,a,u,f)),!0;case"gotpointercapture":return v=f.pointerId,pa.set(v,ma(pa.get(v)||null,n,i,a,u,f)),!0}return!1}function ah(n){var i=zr(n.target);if(i!==null){var a=Ni(i);if(a!==null){if(i=a.tag,i===13){if(i=co(a),i!==null){n.blockedOn=i,rh(n.priority,function(){nh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Tt=u,a.target.dispatchEvent(u),Tt=null}else return i=Ca(a),i!==null&&lc(i),n.blockedOn=a,!1;i.shift()}return!0}function oh(n,i,a){po(n)&&a.delete(i)}function wv(){cc=!1,nr!==null&&po(nr)&&(nr=null),ir!==null&&po(ir)&&(ir=null),rr!==null&&po(rr)&&(rr=null),fa.forEach(oh),pa.forEach(oh)}function ga(n,i){n.blockedOn===i&&(n.blockedOn=null,cc||(cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wv)))}function va(n){function i(f){return ga(f,n)}if(0<fo.length){ga(fo[0],n);for(var a=1;a<fo.length;a++){var u=fo[a];u.blockedOn===n&&(u.blockedOn=null)}}for(nr!==null&&ga(nr,n),ir!==null&&ga(ir,n),rr!==null&&ga(rr,n),fa.forEach(i),pa.forEach(i),a=0;a<sr.length;a++)u=sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)ah(a),a.blockedOn===null&&sr.shift()}var fs=D.ReactCurrentBatchConfig,mo=!0;function Mv(n,i,a,u){var f=At,v=fs.transition;fs.transition=null;try{At=1,uc(n,i,a,u)}finally{At=f,fs.transition=v}}function Ev(n,i,a,u){var f=At,v=fs.transition;fs.transition=null;try{At=4,uc(n,i,a,u)}finally{At=f,fs.transition=v}}function uc(n,i,a,u){if(mo){var f=dc(n,i,a,u);if(f===null)Rc(n,i,u,go,a),sh(n,u);else if(Sv(f,n,i,a,u))u.stopPropagation();else if(sh(n,u),i&4&&-1<yv.indexOf(n)){for(;f!==null;){var v=Ca(f);if(v!==null&&th(v),v=dc(n,i,a,u),v===null&&Rc(n,i,u,go,a),v===f)break;f=v}f!==null&&u.stopPropagation()}else Rc(n,i,u,null,a)}}var go=null;function dc(n,i,a,u){if(go=null,n=ct(u),n=zr(n),n!==null)if(i=Ni(n),i===null)n=null;else if(a=i.tag,a===13){if(n=co(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function lh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case it:return 1;case st:return 4;case Pt:case _n:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var ar=null,hc=null,vo=null;function ch(){if(vo)return vo;var n,i=hc,a=i.length,u,f="value"in ar?ar.value:ar.textContent,v=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(u=1;u<=M&&i[a-u]===f[v-u];u++);return vo=f.slice(n,1<u?1-u:void 0)}function xo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _o(){return!0}function uh(){return!1}function Hn(n){function i(a,u,f,v,M){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=v,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?_o:uh,this.isPropagationStopped=uh,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Hn(ps),xa=X({},ps,{view:0,detail:0}),Tv=Hn(xa),pc,mc,_a,yo=X({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_a&&(_a&&n.type==="mousemove"?(pc=n.screenX-_a.screenX,mc=n.screenY-_a.screenY):mc=pc=0,_a=n),pc)},movementY:function(n){return"movementY"in n?n.movementY:mc}}),dh=Hn(yo),bv=X({},yo,{dataTransfer:0}),Av=Hn(bv),Rv=X({},xa,{relatedTarget:0}),gc=Hn(Rv),Cv=X({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Hn(Cv),Lv=X({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nv=Hn(Lv),Dv=X({},ps,{data:0}),hh=Hn(Dv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=kv[n])?!!i[n]:!1}function vc(){return Fv}var Ov=X({},xa,{key:function(n){if(n.key){var i=Iv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Uv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(n){return n.type==="keypress"?xo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zv=Hn(Ov),Bv=X({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Hn(Bv),jv=X({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Hv=Hn(jv),Gv=X({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Hn(Gv),Wv=X({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Hn(Wv),qv=[9,13,27,32],xc=d&&"CompositionEvent"in window,ya=null;d&&"documentMode"in document&&(ya=document.documentMode);var $v=d&&"TextEvent"in window&&!ya,ph=d&&(!xc||ya&&8<ya&&11>=ya),mh=" ",gh=!1;function vh(n,i){switch(n){case"keyup":return qv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Yv(n,i){switch(n){case"compositionend":return xh(i);case"keypress":return i.which!==32?null:(gh=!0,mh);case"textInput":return n=i.data,n===mh&&gh?null:n;default:return null}}function Kv(n,i){if(ms)return n==="compositionend"||!xc&&vh(n,i)?(n=ch(),vo=hc=ar=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ph&&i.locale!=="ko"?null:i.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Zv[n.type]:i==="textarea"}function yh(n,i,a,u){Oe(u),i=To(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Sa=null,wa=null;function Qv(n){Oh(n,0)}function So(n){var i=ys(n);if(K(i))return n}function Jv(n,i){if(n==="change")return i}var Sh=!1;if(d){var _c;if(d){var yc="oninput"in document;if(!yc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),yc=typeof wh.oninput=="function"}_c=yc}else _c=!1;Sh=_c&&(!document.documentMode||9<document.documentMode)}function Mh(){Sa&&(Sa.detachEvent("onpropertychange",Eh),wa=Sa=null)}function Eh(n){if(n.propertyName==="value"&&So(wa)){var i=[];yh(i,wa,n,ct(n)),xn(Qv,i)}}function e0(n,i,a){n==="focusin"?(Mh(),Sa=i,wa=a,Sa.attachEvent("onpropertychange",Eh)):n==="focusout"&&Mh()}function t0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So(wa)}function n0(n,i){if(n==="click")return So(i)}function i0(n,i){if(n==="input"||n==="change")return So(i)}function r0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:r0;function Ma(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!p.call(i,f)||!ai(n[f],i[f]))return!1}return!0}function Th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bh(n,i){var a=Th(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Th(a)}}function Ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Rh(){for(var n=window,i=zt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zt(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function s0(n){var i=Rh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ah(a.ownerDocument.documentElement,a)){if(u!==null&&Sc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,v=Math.min(u.start,f);u=u.end===void 0?v:Math.min(u.end,f),!n.extend&&v>u&&(f=u,u=v,v=f),f=bh(a,v);var M=bh(a,u);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var a0=d&&"documentMode"in document&&11>=document.documentMode,gs=null,wc=null,Ea=null,Mc=!1;function Ch(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||gs==null||gs!==zt(u)||(u=gs,"selectionStart"in u&&Sc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ea&&Ma(Ea,u)||(Ea=u,u=To(wc,"onSelect"),0<u.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=gs)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var vs={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Ec={},Ph={};d&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Mo(n){if(Ec[n])return Ec[n];if(!vs[n])return n;var i=vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ph)return Ec[n]=i[a];return n}var Lh=Mo("animationend"),Nh=Mo("animationiteration"),Dh=Mo("animationstart"),Ih=Mo("transitionend"),Uh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){Uh.set(n,i),l(i,[n])}for(var Tc=0;Tc<kh.length;Tc++){var bc=kh[Tc],o0=bc.toLowerCase(),l0=bc[0].toUpperCase()+bc.slice(1);or(o0,"on"+l0)}or(Lh,"onAnimationEnd"),or(Nh,"onAnimationIteration"),or(Dh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Ih,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Fh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ac(u,i,void 0,n),n.currentTarget=null}function Oh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var M=u.length-1;0<=M;M--){var I=u[M],B=I.instance,te=I.currentTarget;if(I=I.listener,B!==v&&f.isPropagationStopped())break e;Fh(f,I,te),v=B}else for(M=0;M<u.length;M++){if(I=u[M],B=I.instance,te=I.currentTarget,I=I.listener,B!==v&&f.isPropagationStopped())break e;Fh(f,I,te),v=B}}}if(Fr)throw n=er,Fr=!1,er=null,n}function Nt(n,i){var a=i[Ic];a===void 0&&(a=i[Ic]=new Set);var u=n+"__bubble";a.has(u)||(zh(i,n,2,!1),a.add(u))}function Ac(n,i,a){var u=0;i&&(u|=4),zh(a,n,u,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[Eo]){n[Eo]=!0,s.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,Ac("selectionchange",!1,i))}}function zh(n,i,a,u){switch(lh(i)){case 1:var f=Mv;break;case 4:f=Ev;break;default:f=uc}a=f.bind(null,i,a,n),f=void 0,!qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Rc(n,i,a,u,f){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;I!==null;){if(M=zr(I),M===null)return;if(B=M.tag,B===5||B===6){u=v=M;continue e}I=I.parentNode}}u=u.return}xn(function(){var te=v,me=ct(a),xe=[];e:{var pe=Uh.get(n);if(pe!==void 0){var Le=fc,Ue=n;switch(n){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":Le=zv;break;case"focusin":Ue="focus",Le=gc;break;case"focusout":Ue="blur",Le=gc;break;case"beforeblur":case"afterblur":Le=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Hv;break;case Lh:case Nh:case Dh:Le=Pv;break;case Ih:Le=Vv;break;case"scroll":Le=Tv;break;case"wheel":Le=Xv;break;case"copy":case"cut":case"paste":Le=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=fh}var Fe=(i&4)!==0,Vt=!Fe&&n==="scroll",$=Fe?pe!==null?pe+"Capture":null:pe;Fe=[];for(var H=te,Z;H!==null;){Z=H;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,$!==null&&(we=St(H,$),we!=null&&Fe.push(Aa(H,we,Z)))),Vt)break;H=H.return}0<Fe.length&&(pe=new Le(pe,Ue,null,a,me),xe.push({event:pe,listeners:Fe}))}}if((i&7)===0){e:{if(pe=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",pe&&a!==Tt&&(Ue=a.relatedTarget||a.fromElement)&&(zr(Ue)||Ue[Ii]))break e;if((Le||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Le?(Ue=a.relatedTarget||a.toElement,Le=te,Ue=Ue?zr(Ue):null,Ue!==null&&(Vt=Ni(Ue),Ue!==Vt||Ue.tag!==5&&Ue.tag!==6)&&(Ue=null)):(Le=null,Ue=te),Le!==Ue)){if(Fe=dh,we="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Fe=fh,we="onPointerLeave",$="onPointerEnter",H="pointer"),Vt=Le==null?pe:ys(Le),Z=Ue==null?pe:ys(Ue),pe=new Fe(we,H+"leave",Le,a,me),pe.target=Vt,pe.relatedTarget=Z,we=null,zr(me)===te&&(Fe=new Fe($,H+"enter",Ue,a,me),Fe.target=Z,Fe.relatedTarget=Vt,we=Fe),Vt=we,Le&&Ue)t:{for(Fe=Le,$=Ue,H=0,Z=Fe;Z;Z=xs(Z))H++;for(Z=0,we=$;we;we=xs(we))Z++;for(;0<H-Z;)Fe=xs(Fe),H--;for(;0<Z-H;)$=xs($),Z--;for(;H--;){if(Fe===$||$!==null&&Fe===$.alternate)break t;Fe=xs(Fe),$=xs($)}Fe=null}else Fe=null;Le!==null&&Bh(xe,pe,Le,Fe,!1),Ue!==null&&Vt!==null&&Bh(xe,Vt,Ue,Fe,!0)}}e:{if(pe=te?ys(te):window,Le=pe.nodeName&&pe.nodeName.toLowerCase(),Le==="select"||Le==="input"&&pe.type==="file")var Be=Jv;else if(_h(pe))if(Sh)Be=i0;else{Be=t0;var Ye=e0}else(Le=pe.nodeName)&&Le.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Be=n0);if(Be&&(Be=Be(n,te))){yh(xe,Be,a,me);break e}Ye&&Ye(n,pe,te),n==="focusout"&&(Ye=pe._wrapperState)&&Ye.controlled&&pe.type==="number"&&L(pe,"number",pe.value)}switch(Ye=te?ys(te):window,n){case"focusin":(_h(Ye)||Ye.contentEditable==="true")&&(gs=Ye,wc=te,Ea=null);break;case"focusout":Ea=wc=gs=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,Ch(xe,a,me);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Ch(xe,a,me)}var Ke;if(xc)e:{switch(n){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ms?vh(n,a)&&(Je="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(ph&&a.locale!=="ko"&&(ms||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ms&&(Ke=ch()):(ar=me,hc="value"in ar?ar.value:ar.textContent,ms=!0)),Ye=To(te,Je),0<Ye.length&&(Je=new hh(Je,n,null,a,me),xe.push({event:Je,listeners:Ye}),Ke?Je.data=Ke:(Ke=xh(a),Ke!==null&&(Je.data=Ke)))),(Ke=$v?Yv(n,a):Kv(n,a))&&(te=To(te,"onBeforeInput"),0<te.length&&(me=new hh("onBeforeInput","beforeinput",null,a,me),xe.push({event:me,listeners:te}),me.data=Ke))}Oh(xe,i)})}function Aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function To(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=St(n,a),v!=null&&u.unshift(Aa(n,v,f)),v=St(n,i),v!=null&&u.push(Aa(n,v,f))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bh(n,i,a,u,f){for(var v=i._reactName,M=[];a!==null&&a!==u;){var I=a,B=I.alternate,te=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&te!==null&&(I=te,f?(B=St(a,v),B!=null&&M.unshift(Aa(a,B,I))):f||(B=St(a,v),B!=null&&M.push(Aa(a,B,I)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var u0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function jh(n){return(typeof n=="string"?n:""+n).replace(u0,`
`).replace(d0,"")}function bo(n,i,a){if(i=jh(i),jh(n)!==i&&a)throw Error(t(425))}function Ao(){}var Cc=null,Pc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,f0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(n){return Hh.resolve(null).then(n).catch(p0)}:Nc;function p0(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),va(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);va(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Si="__reactFiber$"+_s,Ra="__reactProps$"+_s,Ii="__reactContainer$"+_s,Ic="__reactEvents$"+_s,m0="__reactListeners$"+_s,g0="__reactHandles$"+_s;function zr(n){var i=n[Si];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ii]||a[Si]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Gh(n);n!==null;){if(a=n[Si])return a;n=Gh(n)}return i}n=a,a=n.parentNode}return null}function Ca(n){return n=n[Si]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ro(n){return n[Ra]||null}var Uc=[],Ss=-1;function cr(n){return{current:n}}function Dt(n){0>Ss||(n.current=Uc[Ss],Uc[Ss]=null,Ss--)}function Lt(n,i){Ss++,Uc[Ss]=n.current,n.current=i}var ur={},cn=cr(ur),Rn=cr(!1),Br=ur;function ws(n,i){var a=n.type.contextTypes;if(!a)return ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in a)f[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Cn(n){return n=n.childContextTypes,n!=null}function Co(){Dt(Rn),Dt(cn)}function Vh(n,i,a){if(cn.current!==ur)throw Error(t(168));Lt(cn,i),Lt(Rn,a)}function Wh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,Ae(n)||"Unknown",f));return X({},a,u)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Br=cn.current,Lt(cn,n),Lt(Rn,Rn.current),!0}function Xh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Wh(n,i,Br),u.__reactInternalMemoizedMergedChildContext=n,Dt(Rn),Dt(cn),Lt(cn,n)):Dt(Rn),Lt(Rn,a)}var Ui=null,Lo=!1,kc=!1;function qh(n){Ui===null?Ui=[n]:Ui.push(n)}function v0(n){Lo=!0,qh(n)}function dr(){if(!kc&&Ui!==null){kc=!0;var n=0,i=At;try{var a=Ui;for(At=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ui=null,Lo=!1}catch(f){throw Ui!==null&&(Ui=Ui.slice(n+1)),ne(it,dr),f}finally{At=i,kc=!1}}return null}var Ms=[],Es=0,No=null,Do=0,Kn=[],Zn=0,jr=null,ki=1,Fi="";function Hr(n,i){Ms[Es++]=Do,Ms[Es++]=No,No=n,Do=i}function $h(n,i,a){Kn[Zn++]=ki,Kn[Zn++]=Fi,Kn[Zn++]=jr,jr=n;var u=ki;n=Fi;var f=32-yn(u)-1;u&=~(1<<f),a+=1;var v=32-yn(i)+f;if(30<v){var M=f-f%5;v=(u&(1<<M)-1).toString(32),u>>=M,f-=M,ki=1<<32-yn(i)+f|a<<f|u,Fi=v+n}else ki=1<<v|a<<f|u,Fi=n}function Fc(n){n.return!==null&&(Hr(n,1),$h(n,1,0))}function Oc(n){for(;n===No;)No=Ms[--Es],Ms[Es]=null,Do=Ms[--Es],Ms[Es]=null;for(;n===jr;)jr=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null,ki=Kn[--Zn],Kn[Zn]=null}var Gn=null,Vn=null,kt=!1,oi=null;function Yh(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Vn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=jr!==null?{id:ki,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Gn=n,Vn=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(kt){var i=Vn;if(i){var a=i;if(!Kh(n,i)){if(zc(n))throw Error(t(418));i=lr(a.nextSibling);var u=Gn;i&&Kh(n,i)?Yh(u,a):(n.flags=n.flags&-4097|2,kt=!1,Gn=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Gn=n}}}function Zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function Io(n){if(n!==Gn)return!1;if(!kt)return Zh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=Vn)){if(zc(n))throw Qh(),Error(t(418));for(;i;)Yh(n,i),i=lr(i.nextSibling)}if(Zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Gn?lr(n.stateNode.nextSibling):null;return!0}function Qh(){for(var n=Vn;n;)n=lr(n.nextSibling)}function Ts(){Vn=Gn=null,kt=!1}function jc(n){oi===null?oi=[n]:oi.push(n)}var x0=D.ReactCurrentBatchConfig;function Pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(M){var I=f.refs;M===null?delete I[v]:I[v]=M},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jh(n){var i=n._init;return i(n._payload)}function ef(n){function i($,H){if(n){var Z=$.deletions;Z===null?($.deletions=[H],$.flags|=16):Z.push(H)}}function a($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function u($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function f($,H){return $=_r($,H),$.index=0,$.sibling=null,$}function v($,H,Z){return $.index=Z,n?(Z=$.alternate,Z!==null?(Z=Z.index,Z<H?($.flags|=2,H):Z):($.flags|=2,H)):($.flags|=1048576,H)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,Z,we){return H===null||H.tag!==6?(H=Nu(Z,$.mode,we),H.return=$,H):(H=f(H,Z),H.return=$,H)}function B($,H,Z,we){var Be=Z.type;return Be===F?me($,H,Z.props.children,we,Z.key):H!==null&&(H.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===J&&Jh(Be)===H.type)?(we=f(H,Z.props),we.ref=Pa($,H,Z),we.return=$,we):(we=sl(Z.type,Z.key,Z.props,null,$.mode,we),we.ref=Pa($,H,Z),we.return=$,we)}function te($,H,Z,we){return H===null||H.tag!==4||H.stateNode.containerInfo!==Z.containerInfo||H.stateNode.implementation!==Z.implementation?(H=Du(Z,$.mode,we),H.return=$,H):(H=f(H,Z.children||[]),H.return=$,H)}function me($,H,Z,we,Be){return H===null||H.tag!==7?(H=Kr(Z,$.mode,we,Be),H.return=$,H):(H=f(H,Z),H.return=$,H)}function xe($,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Nu(""+H,$.mode,Z),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return Z=sl(H.type,H.key,H.props,null,$.mode,Z),Z.ref=Pa($,null,H),Z.return=$,Z;case O:return H=Du(H,$.mode,Z),H.return=$,H;case J:var we=H._init;return xe($,we(H._payload),Z)}if(A(H)||Q(H))return H=Kr(H,$.mode,Z,null),H.return=$,H;Uo($,H)}return null}function pe($,H,Z,we){var Be=H!==null?H.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Be!==null?null:I($,H,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case G:return Z.key===Be?B($,H,Z,we):null;case O:return Z.key===Be?te($,H,Z,we):null;case J:return Be=Z._init,pe($,H,Be(Z._payload),we)}if(A(Z)||Q(Z))return Be!==null?null:me($,H,Z,we,null);Uo($,Z)}return null}function Le($,H,Z,we,Be){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(Z)||null,I(H,$,""+we,Be);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return $=$.get(we.key===null?Z:we.key)||null,B(H,$,we,Be);case O:return $=$.get(we.key===null?Z:we.key)||null,te(H,$,we,Be);case J:var Ye=we._init;return Le($,H,Z,Ye(we._payload),Be)}if(A(we)||Q(we))return $=$.get(Z)||null,me(H,$,we,Be,null);Uo(H,we)}return null}function Ue($,H,Z,we){for(var Be=null,Ye=null,Ke=H,Je=H=0,tn=null;Ke!==null&&Je<Z.length;Je++){Ke.index>Je?(tn=Ke,Ke=null):tn=Ke.sibling;var wt=pe($,Ke,Z[Je],we);if(wt===null){Ke===null&&(Ke=tn);break}n&&Ke&&wt.alternate===null&&i($,Ke),H=v(wt,H,Je),Ye===null?Be=wt:Ye.sibling=wt,Ye=wt,Ke=tn}if(Je===Z.length)return a($,Ke),kt&&Hr($,Je),Be;if(Ke===null){for(;Je<Z.length;Je++)Ke=xe($,Z[Je],we),Ke!==null&&(H=v(Ke,H,Je),Ye===null?Be=Ke:Ye.sibling=Ke,Ye=Ke);return kt&&Hr($,Je),Be}for(Ke=u($,Ke);Je<Z.length;Je++)tn=Le(Ke,$,Je,Z[Je],we),tn!==null&&(n&&tn.alternate!==null&&Ke.delete(tn.key===null?Je:tn.key),H=v(tn,H,Je),Ye===null?Be=tn:Ye.sibling=tn,Ye=tn);return n&&Ke.forEach(function(yr){return i($,yr)}),kt&&Hr($,Je),Be}function Fe($,H,Z,we){var Be=Q(Z);if(typeof Be!="function")throw Error(t(150));if(Z=Be.call(Z),Z==null)throw Error(t(151));for(var Ye=Be=null,Ke=H,Je=H=0,tn=null,wt=Z.next();Ke!==null&&!wt.done;Je++,wt=Z.next()){Ke.index>Je?(tn=Ke,Ke=null):tn=Ke.sibling;var yr=pe($,Ke,wt.value,we);if(yr===null){Ke===null&&(Ke=tn);break}n&&Ke&&yr.alternate===null&&i($,Ke),H=v(yr,H,Je),Ye===null?Be=yr:Ye.sibling=yr,Ye=yr,Ke=tn}if(wt.done)return a($,Ke),kt&&Hr($,Je),Be;if(Ke===null){for(;!wt.done;Je++,wt=Z.next())wt=xe($,wt.value,we),wt!==null&&(H=v(wt,H,Je),Ye===null?Be=wt:Ye.sibling=wt,Ye=wt);return kt&&Hr($,Je),Be}for(Ke=u($,Ke);!wt.done;Je++,wt=Z.next())wt=Le(Ke,$,Je,wt.value,we),wt!==null&&(n&&wt.alternate!==null&&Ke.delete(wt.key===null?Je:wt.key),H=v(wt,H,Je),Ye===null?Be=wt:Ye.sibling=wt,Ye=wt);return n&&Ke.forEach(function(Z0){return i($,Z0)}),kt&&Hr($,Je),Be}function Vt($,H,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case G:e:{for(var Be=Z.key,Ye=H;Ye!==null;){if(Ye.key===Be){if(Be=Z.type,Be===F){if(Ye.tag===7){a($,Ye.sibling),H=f(Ye,Z.props.children),H.return=$,$=H;break e}}else if(Ye.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===J&&Jh(Be)===Ye.type){a($,Ye.sibling),H=f(Ye,Z.props),H.ref=Pa($,Ye,Z),H.return=$,$=H;break e}a($,Ye);break}else i($,Ye);Ye=Ye.sibling}Z.type===F?(H=Kr(Z.props.children,$.mode,we,Z.key),H.return=$,$=H):(we=sl(Z.type,Z.key,Z.props,null,$.mode,we),we.ref=Pa($,H,Z),we.return=$,$=we)}return M($);case O:e:{for(Ye=Z.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===Z.containerInfo&&H.stateNode.implementation===Z.implementation){a($,H.sibling),H=f(H,Z.children||[]),H.return=$,$=H;break e}else{a($,H);break}else i($,H);H=H.sibling}H=Du(Z,$.mode,we),H.return=$,$=H}return M($);case J:return Ye=Z._init,Vt($,H,Ye(Z._payload),we)}if(A(Z))return Ue($,H,Z,we);if(Q(Z))return Fe($,H,Z,we);Uo($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,H!==null&&H.tag===6?(a($,H.sibling),H=f(H,Z),H.return=$,$=H):(a($,H),H=Nu(Z,$.mode,we),H.return=$,$=H),M($)):a($,H)}return Vt}var bs=ef(!0),tf=ef(!1),ko=cr(null),Fo=null,As=null,Hc=null;function Gc(){Hc=As=Fo=null}function Vc(n){var i=ko.current;Dt(ko),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Fo=n,Hc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(Fo===null)throw Error(t(308));As=n,Fo.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Gr=null;function Xc(n){Gr===null?Gr=[n]:Gr.push(n)}function nf(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,Xc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Oi(n,u)}function Oi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(_t&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Oi(n,a)}return f=u.interleaved,f===null?(i.next=i,Xc(u)):(i.next=f.next,f.next=i),u.interleaved=i,Oi(n,a)}function Oo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,oc(n,a)}}function sf(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?f=v=M:v=v.next=M,a=a.next}while(a!==null);v===null?f=v=i:v=v.next=i}else f=v=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zo(n,i,a,u){var f=n.updateQueue;hr=!1;var v=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,te=B.next;B.next=null,M===null?v=te:M.next=te,M=B;var me=n.alternate;me!==null&&(me=me.updateQueue,I=me.lastBaseUpdate,I!==M&&(I===null?me.firstBaseUpdate=te:I.next=te,me.lastBaseUpdate=B))}if(v!==null){var xe=f.baseState;M=0,me=te=B=null,I=v;do{var pe=I.lane,Le=I.eventTime;if((u&pe)===pe){me!==null&&(me=me.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ue=n,Fe=I;switch(pe=i,Le=a,Fe.tag){case 1:if(Ue=Fe.payload,typeof Ue=="function"){xe=Ue.call(Le,xe,pe);break e}xe=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=Fe.payload,pe=typeof Ue=="function"?Ue.call(Le,xe,pe):Ue,pe==null)break e;xe=X({},xe,pe);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,pe=f.effects,pe===null?f.effects=[I]:pe.push(I))}else Le={eventTime:Le,lane:pe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},me===null?(te=me=Le,B=xe):me=me.next=Le,M|=pe;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;pe=I,I=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);if(me===null&&(B=xe),f.baseState=B,f.firstBaseUpdate=te,f.lastBaseUpdate=me,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else v===null&&(f.shared.lanes=0);Xr|=M,n.lanes=M,n.memoizedState=xe}}function af(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var La={},wi=cr(La),Na=cr(La),Da=cr(La);function Vr(n){if(n===La)throw Error(t(174));return n}function $c(n,i){switch(Lt(Da,i),Lt(Na,n),Lt(wi,La),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ie(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ie(i,n)}Dt(wi),Lt(wi,i)}function Cs(){Dt(wi),Dt(Na),Dt(Da)}function of(n){Vr(Da.current);var i=Vr(wi.current),a=Ie(i,n.type);i!==a&&(Lt(Na,n),Lt(wi,a))}function Yc(n){Na.current===n&&(Dt(wi),Dt(Na))}var Ft=cr(0);function Bo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var jo=D.ReactCurrentDispatcher,Qc=D.ReactCurrentBatchConfig,Wr=0,Ot=null,$t=null,Jt=null,Ho=!1,Ia=!1,Ua=0,_0=0;function un(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ai(n[a],i[a]))return!1;return!0}function eu(n,i,a,u,f,v){if(Wr=v,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=n===null||n.memoizedState===null?M0:E0,n=a(u,f),Ia){v=0;do{if(Ia=!1,Ua=0,25<=v)throw Error(t(301));v+=1,Jt=$t=null,i.updateQueue=null,jo.current=T0,n=a(u,f)}while(Ia)}if(jo.current=Wo,i=$t!==null&&$t.next!==null,Wr=0,Jt=$t=Ot=null,Ho=!1,i)throw Error(t(300));return n}function tu(){var n=Ua!==0;return Ua=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ot.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Jn(){if($t===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Jt===null?Ot.memoizedState:Jt.next;if(i!==null)Jt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Ot.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function ka(n,i){return typeof i=="function"?i(n):i}function nu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=$t,f=u.baseQueue,v=a.pending;if(v!==null){if(f!==null){var M=f.next;f.next=v.next,v.next=M}u.baseQueue=f=v,a.pending=null}if(f!==null){v=f.next,u=u.baseState;var I=M=null,B=null,te=v;do{var me=te.lane;if((Wr&me)===me)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var xe={lane:me,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(I=B=xe,M=u):B=B.next=xe,Ot.lanes|=me,Xr|=me}te=te.next}while(te!==null&&te!==v);B===null?M=u:B.next=I,ai(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do v=f.lane,Ot.lanes|=v,Xr|=v,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,v=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do v=n(v,M.action),M=M.next;while(M!==f);ai(v,i.memoizedState)||(Pn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function lf(){}function cf(n,i){var a=Ot,u=Jn(),f=i(),v=!ai(u.memoizedState,f);if(v&&(u.memoizedState=f,Pn=!0),u=u.queue,ru(hf.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Fa(9,df.bind(null,a,u,f,i),void 0,null),en===null)throw Error(t(349));(Wr&30)!==0||uf(a,i,f)}return f}function uf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function df(n,i,a,u){i.value=a,i.getSnapshot=u,ff(i)&&pf(n)}function hf(n,i,a){return a(function(){ff(i)&&pf(n)})}function ff(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ai(n,a)}catch{return!0}}function pf(n){var i=Oi(n,1);i!==null&&di(i,n,1,-1)}function mf(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i.queue=n,n=n.dispatch=w0.bind(null,Ot,n),[i.memoizedState,n]}function Fa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function gf(){return Jn().memoizedState}function Go(n,i,a,u){var f=Mi();Ot.flags|=n,f.memoizedState=Fa(1|i,a,void 0,u===void 0?null:u)}function Vo(n,i,a,u){var f=Jn();u=u===void 0?null:u;var v=void 0;if($t!==null){var M=$t.memoizedState;if(v=M.destroy,u!==null&&Jc(u,M.deps)){f.memoizedState=Fa(i,a,v,u);return}}Ot.flags|=n,f.memoizedState=Fa(1|i,a,v,u)}function vf(n,i){return Go(8390656,8,n,i)}function ru(n,i){return Vo(2048,8,n,i)}function xf(n,i){return Vo(4,2,n,i)}function _f(n,i){return Vo(4,4,n,i)}function yf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Sf(n,i,a){return a=a!=null?a.concat([n]):null,Vo(4,4,yf.bind(null,i,n),a)}function su(){}function wf(n,i){var a=Jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Jc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Mf(n,i){var a=Jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Jc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Ef(n,i,a){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(ai(a,i)||(a=ho(),Ot.lanes|=a,Xr|=a,n.baseState=!0),i)}function y0(n,i){var a=At;At=a!==0&&4>a?a:4,n(!0);var u=Qc.transition;Qc.transition={};try{n(!1),i()}finally{At=a,Qc.transition=u}}function Tf(){return Jn().memoizedState}function S0(n,i,a){var u=vr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},bf(n))Af(i,a);else if(a=nf(n,i,a,u),a!==null){var f=wn();di(a,n,u,f),Rf(a,i,u)}}function w0(n,i,a){var u=vr(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(bf(n))Af(i,f);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var M=i.lastRenderedState,I=v(M,a);if(f.hasEagerState=!0,f.eagerState=I,ai(I,M)){var B=i.interleaved;B===null?(f.next=f,Xc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=nf(n,i,f,u),a!==null&&(f=wn(),di(a,n,u,f),Rf(a,i,u))}}function bf(n){var i=n.alternate;return n===Ot||i!==null&&i===Ot}function Af(n,i){Ia=Ho=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Rf(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,oc(n,a)}}var Wo={readContext:Qn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},M0={readContext:Qn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:vf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,yf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Mi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=S0.bind(null,Ot,n),[u.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:mf,useDebugValue:su,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=mf(!1),i=n[0];return n=y0.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Ot,f=Mi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Wr&30)!==0||uf(u,i,a)}f.memoizedState=a;var v={value:a,getSnapshot:i};return f.queue=v,vf(hf.bind(null,u,v,n),[n]),u.flags|=2048,Fa(9,df.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Mi(),i=en.identifierPrefix;if(kt){var a=Fi,u=ki;a=(u&~(1<<32-yn(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ua++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},E0={readContext:Qn,useCallback:wf,useContext:Qn,useEffect:ru,useImperativeHandle:Sf,useInsertionEffect:xf,useLayoutEffect:_f,useMemo:Mf,useReducer:nu,useRef:gf,useState:function(){return nu(ka)},useDebugValue:su,useDeferredValue:function(n){var i=Jn();return Ef(i,$t.memoizedState,n)},useTransition:function(){var n=nu(ka)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:lf,useSyncExternalStore:cf,useId:Tf,unstable_isNewReconciler:!1},T0={readContext:Qn,useCallback:wf,useContext:Qn,useEffect:ru,useImperativeHandle:Sf,useInsertionEffect:xf,useLayoutEffect:_f,useMemo:Mf,useReducer:iu,useRef:gf,useState:function(){return iu(ka)},useDebugValue:su,useDeferredValue:function(n){var i=Jn();return $t===null?i.memoizedState=n:Ef(i,$t.memoizedState,n)},useTransition:function(){var n=iu(ka)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:lf,useSyncExternalStore:cf,useId:Tf,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xo={isMounted:function(n){return(n=n._reactInternals)?Ni(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=wn(),f=vr(n),v=zi(u,f);v.payload=i,a!=null&&(v.callback=a),i=fr(n,v,f),i!==null&&(di(i,n,f,u),Oo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=wn(),f=vr(n),v=zi(u,f);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=fr(n,v,f),i!==null&&(di(i,n,f,u),Oo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),u=vr(n),f=zi(a,u);f.tag=2,i!=null&&(f.callback=i),i=fr(n,f,u),i!==null&&(di(i,n,u,a),Oo(i,n,u))}};function Cf(n,i,a,u,f,v,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,M):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,u)||!Ma(f,v):!0}function Pf(n,i,a){var u=!1,f=ur,v=i.contextType;return typeof v=="object"&&v!==null?v=Qn(v):(f=Cn(i)?Br:cn.current,u=i.contextTypes,v=(u=u!=null)?ws(n,f):ur),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=v),i}function Lf(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Xo.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},qc(n);var v=i.contextType;typeof v=="object"&&v!==null?f.context=Qn(v):(v=Cn(i)?Br:cn.current,f.context=ws(n,v)),f.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(au(n,i,v,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Xo.enqueueReplaceState(f,f.state,null),zo(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",u=i;do a+=ae(u),u=u.return;while(u);var f=a}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:f,digest:null}}function lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function Nf(n,i,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Jo||(Jo=!0,Eu=u),cu(n,i)},a}function Df(n,i,a){a=zi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){cu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){cu(n,i),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function If(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new b0;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=B0.bind(null,n,i,a),i.then(n,n))}function Uf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function kf(n,i,a,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=zi(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var A0=D.ReactCurrentOwner,Pn=!1;function Sn(n,i,a,u){i.child=n===null?tf(i,null,a,u):bs(i,n.child,a,u)}function Ff(n,i,a,u,f){a=a.render;var v=i.ref;return Rs(i,f),u=eu(n,i,a,u,v,f),a=tu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(kt&&a&&Fc(i),i.flags|=1,Sn(n,i,u,f),i.child)}function Of(n,i,a,u,f){if(n===null){var v=a.type;return typeof v=="function"&&!Lu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,zf(n,i,v,u,f)):(n=sl(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&f)===0){var M=v.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(M,u)&&n.ref===i.ref)return Bi(n,i,f)}return i.flags|=1,n=_r(v,u),n.ref=i.ref,n.return=i,i.child=n}function zf(n,i,a,u,f){if(n!==null){var v=n.memoizedProps;if(Ma(v,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=v,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,Bi(n,i,f)}return uu(n,i,a,u,f)}function Bf(n,i,a){var u=i.pendingProps,f=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ns,Wn),Wn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ns,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Lt(Ns,Wn),Wn|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Lt(Ns,Wn),Wn|=u;return Sn(n,i,f,a),i.child}function jf(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(n,i,a,u,f){var v=Cn(a)?Br:cn.current;return v=ws(i,v),Rs(i,f),a=eu(n,i,a,u,v,f),u=tu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(kt&&u&&Fc(i),i.flags|=1,Sn(n,i,a,f),i.child)}function Hf(n,i,a,u,f){if(Cn(a)){var v=!0;Po(i)}else v=!1;if(Rs(i,f),i.stateNode===null)$o(n,i),Pf(i,a,u),ou(i,a,u,f),u=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var B=M.context,te=a.contextType;typeof te=="object"&&te!==null?te=Qn(te):(te=Cn(a)?Br:cn.current,te=ws(i,te));var me=a.getDerivedStateFromProps,xe=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||B!==te)&&Lf(i,M,u,te),hr=!1;var pe=i.memoizedState;M.state=pe,zo(i,u,M,f),B=i.memoizedState,I!==u||pe!==B||Rn.current||hr?(typeof me=="function"&&(au(i,a,me,u),B=i.memoizedState),(I=hr||Cf(i,a,I,u,pe,B,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=te,u=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,rf(n,i),I=i.memoizedProps,te=i.type===i.elementType?I:li(i.type,I),M.props=te,xe=i.pendingProps,pe=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=Cn(a)?Br:cn.current,B=ws(i,B));var Le=a.getDerivedStateFromProps;(me=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==xe||pe!==B)&&Lf(i,M,u,B),hr=!1,pe=i.memoizedState,M.state=pe,zo(i,u,M,f);var Ue=i.memoizedState;I!==xe||pe!==Ue||Rn.current||hr?(typeof Le=="function"&&(au(i,a,Le,u),Ue=i.memoizedState),(te=hr||Cf(i,a,te,u,pe,Ue,B)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ue,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ue,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ue),M.props=u,M.state=Ue,M.context=B,u=te):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&pe===n.memoizedState||(i.flags|=1024),u=!1)}return du(n,i,a,u,v,f)}function du(n,i,a,u,f,v){jf(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&Xh(i,a,!1),Bi(n,i,v);u=i.stateNode,A0.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=bs(i,n.child,null,v),i.child=bs(i,null,I,v)):Sn(n,i,I,v),i.memoizedState=u.state,f&&Xh(i,a,!0),i.child}function Gf(n){var i=n.stateNode;i.pendingContext?Vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Vh(n,i.context,!1),$c(n,i.containerInfo)}function Vf(n,i,a,u,f){return Ts(),jc(f),i.flags|=256,Sn(n,i,a,u),i.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wf(n,i,a){var u=i.pendingProps,f=Ft.current,v=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Lt(Ft,f&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,v?(u=i.mode,v=i.child,M={mode:"hidden",children:M},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=M):v=al(M,u,0,null),n=Kr(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=fu(a),i.memoizedState=hu,n):pu(i,M));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return R0(n,i,M,u,I,f,a);if(v){v=u.fallback,M=i.mode,f=n.child,I=f.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=_r(f,B),u.subtreeFlags=f.subtreeFlags&14680064),I!==null?v=_r(I,v):(v=Kr(v,M,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,M=n.child.memoizedState,M=M===null?fu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},v.memoizedState=M,v.childLanes=n.childLanes&~a,i.memoizedState=hu,u}return v=n.child,n=v.sibling,u=_r(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function pu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function qo(n,i,a,u){return u!==null&&jc(u),bs(i,n.child,null,a),n=pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function R0(n,i,a,u,f,v,M){if(a)return i.flags&256?(i.flags&=-257,u=lu(Error(t(422))),qo(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,f=i.mode,u=al({mode:"visible",children:u.children},f,0,null),v=Kr(v,f,M,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&bs(i,n.child,null,M),i.child.memoizedState=fu(M),i.memoizedState=hu,v);if((i.mode&1)===0)return qo(n,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var I=u.dgst;return u=I,v=Error(t(419)),u=lu(v,u,void 0),qo(n,i,M,u)}if(I=(M&n.childLanes)!==0,Pn||I){if(u=en,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Oi(n,f),di(u,n,f,-1))}return Pu(),u=lu(Error(t(421))),qo(n,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=j0.bind(null,n),f._reactRetry=i,null):(n=v.treeContext,Vn=lr(f.nextSibling),Gn=i,kt=!0,oi=null,n!==null&&(Kn[Zn++]=ki,Kn[Zn++]=Fi,Kn[Zn++]=jr,ki=n.id,Fi=n.overflow,jr=i),i=pu(i,u.children),i.flags|=4096,i)}function Xf(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Wc(n.return,i,a)}function mu(n,i,a,u,f){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=f)}function qf(n,i,a){var u=i.pendingProps,f=u.revealOrder,v=u.tail;if(Sn(n,i,u.children,a),u=Ft.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xf(n,a,i);else if(n.tag===19)Xf(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Lt(Ft,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Bo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),mu(i,!1,f,a,v);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Bo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}mu(i,!0,a,null,v);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $o(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=_r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=_r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function C0(n,i,a){switch(i.tag){case 3:Gf(i),Ts();break;case 5:of(i);break;case 1:Cn(i.type)&&Po(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Lt(ko,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Wf(n,i,a):(Lt(Ft,Ft.current&1),n=Bi(n,i,a),n!==null?n.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return qf(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Ft,Ft.current),u)break;return null;case 22:case 23:return i.lanes=0,Bf(n,i,a)}return Bi(n,i,a)}var $f,gu,Yf,Kf;$f=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Yf=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Vr(wi.current);var v=null;switch(a){case"input":f=Ve(n,f),u=Ve(n,u),v=[];break;case"select":f=X({},f,{value:void 0}),u=X({},u,{value:void 0}),v=[];break;case"textarea":f=_e(n,f),u=_e(n,u),v=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ao)}rt(a,u);var M;a=null;for(te in f)if(!u.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var I=f[te];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?v||(v=[]):(v=v||[]).push(te,null));for(te in u){var B=u[te];if(I=f!=null?f[te]:void 0,u.hasOwnProperty(te)&&B!==I&&(B!=null||I!=null))if(te==="style")if(I){for(M in I)!I.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&I[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(v||(v=[]),v.push(te,a)),a=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(v=v||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Nt("scroll",n),v||I===B||(v=[])):(v=v||[]).push(te,B))}a&&(v=v||[]).push("style",a);var te=v;(i.updateQueue=te)&&(i.flags|=4)}},Kf=function(n,i,a,u){a!==u&&(i.flags|=4)};function Oa(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function P0(n,i,a){var u=i.pendingProps;switch(Oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Cn(i.type)&&Co(),dn(i),null;case 3:return u=i.stateNode,Cs(),Dt(Rn),Dt(cn),Zc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(Au(oi),oi=null))),gu(n,i),dn(i),null;case 5:Yc(i);var f=Vr(Da.current);if(a=i.type,n!==null&&i.stateNode!=null)Yf(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Vr(wi.current),Io(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Si]=i,u[Ra]=v,n=(i.mode&1)!==0,a){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(f=0;f<Ta.length;f++)Nt(Ta[f],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":tt(u,v),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Nt("invalid",u);break;case"textarea":ve(u,v),Nt("invalid",u)}rt(a,v),f=null;for(var M in v)if(v.hasOwnProperty(M)){var I=v[M];M==="children"?typeof I=="string"?u.textContent!==I&&(v.suppressHydrationWarning!==!0&&bo(u.textContent,I,n),f=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&bo(u.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Nt("scroll",u)}switch(a){case"input":et(u),at(u,v,!0);break;case"textarea":et(u),ze(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Ao)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[Si]=i,n[Ra]=u,$f(n,i,!1,!1),i.stateNode=n;e:{switch(M=xt(a,u),a){case"dialog":Nt("cancel",n),Nt("close",n),f=u;break;case"iframe":case"object":case"embed":Nt("load",n),f=u;break;case"video":case"audio":for(f=0;f<Ta.length;f++)Nt(Ta[f],n);f=u;break;case"source":Nt("error",n),f=u;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),f=u;break;case"details":Nt("toggle",n),f=u;break;case"input":tt(n,u),f=Ve(n,u),Nt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=X({},u,{value:void 0}),Nt("invalid",n);break;case"textarea":ve(n,u),f=_e(n,u),Nt("invalid",n);break;default:f=u}rt(a,f),I=f;for(v in I)if(I.hasOwnProperty(v)){var B=I[v];v==="style"?We(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ot(n,B)):v==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ge(n,B):typeof B=="number"&&ge(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Nt("scroll",n):B!=null&&R(n,v,B,M))}switch(a){case"input":et(n),at(n,u,!1);break;case"textarea":et(n),ze(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?ee(n,!!u.multiple,v,!1):u.defaultValue!=null&&ee(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)Kf(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(Da.current),Vr(wi.current),Io(i)){if(u=i.stateNode,a=i.memoizedProps,u[Si]=i,(v=u.nodeValue!==a)&&(n=Gn,n!==null))switch(n.tag){case 3:bo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bo(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Si]=i,i.stateNode=u}return dn(i),null;case 13:if(Dt(Ft),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Qh(),Ts(),i.flags|=98560,v=!1;else if(v=Io(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Si]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),v=!1}else oi!==null&&(Au(oi),oi=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ft.current&1)!==0?Yt===0&&(Yt=3):Pu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return Cs(),gu(n,i),n===null&&ba(i.stateNode.containerInfo),dn(i),null;case 10:return Vc(i.type._context),dn(i),null;case 17:return Cn(i.type)&&Co(),dn(i),null;case 19:if(Dt(Ft),v=i.memoizedState,v===null)return dn(i),null;if(u=(i.flags&128)!==0,M=v.rendering,M===null)if(u)Oa(v,!1);else{if(Yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Bo(n),M!==null){for(i.flags|=128,Oa(v,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,M=v.alternate,M===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=M.childLanes,v.lanes=M.lanes,v.child=M.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=M.memoizedProps,v.memoizedState=M.memoizedState,v.updateQueue=M.updateQueue,v.type=M.type,n=M.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Lt(Ft,Ft.current&1|2),i.child}n=n.sibling}v.tail!==null&&Ne()>Ds&&(i.flags|=128,u=!0,Oa(v,!1),i.lanes=4194304)}else{if(!u)if(n=Bo(M),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!M.alternate&&!kt)return dn(i),null}else 2*Ne()-v.renderingStartTime>Ds&&a!==1073741824&&(i.flags|=128,u=!0,Oa(v,!1),i.lanes=4194304);v.isBackwards?(M.sibling=i.child,i.child=M):(a=v.last,a!==null?a.sibling=M:i.child=M,v.last=M)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Ne(),i.sibling=null,a=Ft.current,Lt(Ft,u?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return Cu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function L0(n,i){switch(Oc(i),i.tag){case 1:return Cn(i.type)&&Co(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),Dt(Rn),Dt(cn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(Dt(Ft),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ts()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Dt(Ft),null;case 4:return Cs(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Yo=!1,hn=!1,N0=typeof WeakSet=="function"?WeakSet:Set,De=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){jt(n,i,u)}else a.current=null}function vu(n,i,a){try{a()}catch(u){jt(n,i,u)}}var Zf=!1;function D0(n,i){if(Cc=mo,n=Rh(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var M=0,I=-1,B=-1,te=0,me=0,xe=n,pe=null;t:for(;;){for(var Le;xe!==a||f!==0&&xe.nodeType!==3||(I=M+f),xe!==v||u!==0&&xe.nodeType!==3||(B=M+u),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)pe=xe,xe=Le;for(;;){if(xe===n)break t;if(pe===a&&++te===f&&(I=M),pe===v&&++me===u&&(B=M),(Le=xe.nextSibling)!==null)break;xe=pe,pe=xe.parentNode}xe=Le}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pc={focusedElem:n,selectionRange:a},mo=!1,De=i;De!==null;)if(i=De,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,De=n;else for(;De!==null;){i=De;try{var Ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ue!==null){var Fe=Ue.memoizedProps,Vt=Ue.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?Fe:li(i.type,Fe),Vt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,De=n;break}De=i.return}return Ue=Zf,Zf=!1,Ue}function za(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var v=f.destroy;f.destroy=void 0,v!==void 0&&vu(i,a,v)}f=f.next}while(f!==u)}}function Ko(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Qf(n){var i=n.alternate;i!==null&&(n.alternate=null,Qf(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Si],delete i[Ra],delete i[Ic],delete i[m0],delete i[g0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jf(n){return n.tag===5||n.tag===3||n.tag===4}function ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(u!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function yu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}var rn=null,ci=!1;function pr(n,i,a){for(a=a.child;a!==null;)tp(n,i,a),a=a.sibling}function tp(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(bn,a)}catch{}switch(a.tag){case 5:hn||Ls(a,i);case 6:var u=rn,f=ci;rn=null,pr(n,i,a),rn=u,ci=f,rn!==null&&(ci?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(ci?(n=rn,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),va(n)):Dc(rn,a.stateNode));break;case 4:u=rn,f=ci,rn=a.stateNode.containerInfo,ci=!0,pr(n,i,a),rn=u,ci=f;break;case 0:case 11:case 14:case 15:if(!hn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var v=f,M=v.destroy;v=v.tag,M!==void 0&&((v&2)!==0||(v&4)!==0)&&vu(a,i,M),f=f.next}while(f!==u)}pr(n,i,a);break;case 1:if(!hn&&(Ls(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){jt(a,i,I)}pr(n,i,a);break;case 21:pr(n,i,a);break;case 22:a.mode&1?(hn=(u=hn)||a.memoizedState!==null,pr(n,i,a),hn=u):pr(n,i,a);break;default:pr(n,i,a)}}function np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new N0),i.forEach(function(u){var f=H0.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function ui(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var v=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:rn=I.stateNode,ci=!1;break e;case 3:rn=I.stateNode.containerInfo,ci=!0;break e;case 4:rn=I.stateNode.containerInfo,ci=!0;break e}I=I.return}if(rn===null)throw Error(t(160));tp(v,M,f),rn=null,ci=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(te){jt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ip(i,n),i=i.sibling}function ip(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),Ei(n),u&4){try{za(3,n,n.return),Ko(3,n)}catch(Fe){jt(n,n.return,Fe)}try{za(5,n,n.return)}catch(Fe){jt(n,n.return,Fe)}}break;case 1:ui(i,n),Ei(n),u&512&&a!==null&&Ls(a,a.return);break;case 5:if(ui(i,n),Ei(n),u&512&&a!==null&&Ls(a,a.return),n.flags&32){var f=n.stateNode;try{ge(f,"")}catch(Fe){jt(n,n.return,Fe)}}if(u&4&&(f=n.stateNode,f!=null)){var v=n.memoizedProps,M=a!==null?a.memoizedProps:v,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&Ge(f,v),xt(I,M);var te=xt(I,v);for(M=0;M<B.length;M+=2){var me=B[M],xe=B[M+1];me==="style"?We(f,xe):me==="dangerouslySetInnerHTML"?ot(f,xe):me==="children"?ge(f,xe):R(f,me,xe,te)}switch(I){case"input":Ct(f,v);break;case"textarea":ye(f,v);break;case"select":var pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?ee(f,!!v.multiple,Le,!1):pe!==!!v.multiple&&(v.defaultValue!=null?ee(f,!!v.multiple,v.defaultValue,!0):ee(f,!!v.multiple,v.multiple?[]:"",!1))}f[Ra]=v}catch(Fe){jt(n,n.return,Fe)}}break;case 6:if(ui(i,n),Ei(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,v=n.memoizedProps;try{f.nodeValue=v}catch(Fe){jt(n,n.return,Fe)}}break;case 3:if(ui(i,n),Ei(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch(Fe){jt(n,n.return,Fe)}break;case 4:ui(i,n),Ei(n);break;case 13:ui(i,n),Ei(n),f=n.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Mu=Ne())),u&4&&np(n);break;case 22:if(me=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(te=hn)||me,ui(i,n),hn=te):ui(i,n),Ei(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!me&&(n.mode&1)!==0)for(De=n,me=n.child;me!==null;){for(xe=De=me;De!==null;){switch(pe=De,Le=pe.child,pe.tag){case 0:case 11:case 14:case 15:za(4,pe,pe.return);break;case 1:Ls(pe,pe.return);var Ue=pe.stateNode;if(typeof Ue.componentWillUnmount=="function"){u=pe,a=pe.return;try{i=u,Ue.props=i.memoizedProps,Ue.state=i.memoizedState,Ue.componentWillUnmount()}catch(Fe){jt(u,a,Fe)}}break;case 5:Ls(pe,pe.return);break;case 22:if(pe.memoizedState!==null){ap(xe);continue}}Le!==null?(Le.return=pe,De=Le):ap(xe)}me=me.sibling}e:for(me=null,xe=n;;){if(xe.tag===5){if(me===null){me=xe;try{f=xe.stateNode,te?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=nt("display",M))}catch(Fe){jt(n,n.return,Fe)}}}else if(xe.tag===6){if(me===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Fe){jt(n,n.return,Fe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;me===xe&&(me=null),xe=xe.return}me===xe&&(me=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ui(i,n),Ei(n),u&4&&np(n);break;case 21:break;default:ui(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Jf(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ge(f,""),u.flags&=-33);var v=ep(n);yu(n,v,f);break;case 3:case 4:var M=u.stateNode.containerInfo,I=ep(n);_u(n,I,M);break;default:throw Error(t(161))}}catch(B){jt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function I0(n,i,a){De=n,rp(n)}function rp(n,i,a){for(var u=(n.mode&1)!==0;De!==null;){var f=De,v=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Yo;if(!M){var I=f.alternate,B=I!==null&&I.memoizedState!==null||hn;I=Yo;var te=hn;if(Yo=M,(hn=B)&&!te)for(De=f;De!==null;)M=De,B=M.child,M.tag===22&&M.memoizedState!==null?op(f):B!==null?(B.return=M,De=B):op(f);for(;v!==null;)De=v,rp(v),v=v.sibling;De=f,Yo=I,hn=te}sp(n)}else(f.subtreeFlags&8772)!==0&&v!==null?(v.return=f,De=v):sp(n)}}function sp(n){for(;De!==null;){var i=De;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Ko(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!hn)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&af(i,v,u);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}af(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var me=te.memoizedState;if(me!==null){var xe=me.dehydrated;xe!==null&&va(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&xu(i)}catch(pe){jt(i,i.return,pe)}}if(i===n){De=null;break}if(a=i.sibling,a!==null){a.return=i.return,De=a;break}De=i.return}}function ap(n){for(;De!==null;){var i=De;if(i===n){De=null;break}var a=i.sibling;if(a!==null){a.return=i.return,De=a;break}De=i.return}}function op(n){for(;De!==null;){var i=De;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(B){jt(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){jt(i,f,B)}}var v=i.return;try{xu(i)}catch(B){jt(i,v,B)}break;case 5:var M=i.return;try{xu(i)}catch(B){jt(i,M,B)}}}catch(B){jt(i,i.return,B)}if(i===n){De=null;break}var I=i.sibling;if(I!==null){I.return=i.return,De=I;break}De=i.return}}var U0=Math.ceil,Zo=D.ReactCurrentDispatcher,Su=D.ReactCurrentOwner,ei=D.ReactCurrentBatchConfig,_t=0,en=null,Wt=null,sn=0,Wn=0,Ns=cr(0),Yt=0,Ba=null,Xr=0,Qo=0,wu=0,ja=null,Ln=null,Mu=0,Ds=1/0,ji=null,Jo=!1,Eu=null,mr=null,el=!1,gr=null,tl=0,Ha=0,Tu=null,nl=-1,il=0;function wn(){return(_t&6)!==0?Ne():nl!==-1?nl:nl=Ne()}function vr(n){return(n.mode&1)===0?1:(_t&2)!==0&&sn!==0?sn&-sn:x0.transition!==null?(il===0&&(il=ho()),il):(n=At,n!==0||(n=window.event,n=n===void 0?16:lh(n.type)),n)}function di(n,i,a,u){if(50<Ha)throw Ha=0,Tu=null,Error(t(185));ha(n,a,u),((_t&2)===0||n!==en)&&(n===en&&((_t&2)===0&&(Qo|=a),Yt===4&&xr(n,sn)),Nn(n,u),a===1&&_t===0&&(i.mode&1)===0&&(Ds=Ne()+500,Lo&&dr()))}function Nn(n,i){var a=n.callbackNode;An(n,i);var u=Yn(n,n===en?sn:0);if(u===0)a!==null&&Pe(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Pe(a),i===1)n.tag===0?v0(cp.bind(null,n)):qh(cp.bind(null,n)),f0(function(){(_t&6)===0&&dr()}),a=null;else{switch(eh(u)){case 1:a=it;break;case 4:a=st;break;case 16:a=Pt;break;case 536870912:a=Gt;break;default:a=Pt}a=vp(a,lp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function lp(n,i){if(nl=-1,il=0,(_t&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var u=Yn(n,n===en?sn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=rl(n,u);else{i=u;var f=_t;_t|=2;var v=dp();(en!==n||sn!==i)&&(ji=null,Ds=Ne()+500,$r(n,i));do try{O0();break}catch(I){up(n,I)}while(!0);Gc(),Zo.current=v,_t=f,Wt!==null?i=0:(en=null,sn=0,i=Yt)}if(i!==0){if(i===2&&(f=Or(n),f!==0&&(u=f,i=bu(n,f))),i===1)throw a=Ba,$r(n,0),xr(n,u),Nn(n,Ne()),a;if(i===6)xr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!k0(f)&&(i=rl(n,u),i===2&&(v=Or(n),v!==0&&(u=v,i=bu(n,v))),i===1))throw a=Ba,$r(n,0),xr(n,u),Nn(n,Ne()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Ln,ji);break;case 3:if(xr(n,u),(u&130023424)===u&&(i=Mu+500-Ne(),10<i)){if(Yn(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Nc(Yr.bind(null,n,Ln,ji),i);break}Yr(n,Ln,ji);break;case 4:if(xr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var M=31-yn(u);v=1<<M,M=i[M],M>f&&(f=M),u&=~v}if(u=f,u=Ne()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*U0(u/1960))-u,10<u){n.timeoutHandle=Nc(Yr.bind(null,n,Ln,ji),u);break}Yr(n,Ln,ji);break;case 5:Yr(n,Ln,ji);break;default:throw Error(t(329))}}}return Nn(n,Ne()),n.callbackNode===a?lp.bind(null,n):null}function bu(n,i){var a=ja;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Au(i)),n}function Au(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function k0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],v=f.getSnapshot;f=f.value;try{if(!ai(v(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~wu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-yn(i),u=1<<a;n[a]=-1,i&=~u}}function cp(n){if((_t&6)!==0)throw Error(t(327));Is();var i=Yn(n,0);if((i&1)===0)return Nn(n,Ne()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var u=Or(n);u!==0&&(i=u,a=bu(n,u))}if(a===1)throw a=Ba,$r(n,0),xr(n,i),Nn(n,Ne()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Ln,ji),Nn(n,Ne()),null}function Ru(n,i){var a=_t;_t|=1;try{return n(i)}finally{_t=a,_t===0&&(Ds=Ne()+500,Lo&&dr())}}function qr(n){gr!==null&&gr.tag===0&&(_t&6)===0&&Is();var i=_t;_t|=1;var a=ei.transition,u=At;try{if(ei.transition=null,At=1,n)return n()}finally{At=u,ei.transition=a,_t=i,(_t&6)===0&&dr()}}function Cu(){Wn=Ns.current,Dt(Ns)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,h0(a)),Wt!==null)for(a=Wt.return;a!==null;){var u=a;switch(Oc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Co();break;case 3:Cs(),Dt(Rn),Dt(cn),Zc();break;case 5:Yc(u);break;case 4:Cs();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:Vc(u.type._context);break;case 22:case 23:Cu()}a=a.return}if(en=n,Wt=n=_r(n.current,null),sn=Wn=i,Yt=0,Ba=null,wu=Qo=Xr=0,Ln=ja=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,v=a.pending;if(v!==null){var M=v.next;v.next=f,u.next=M}a.pending=u}Gr=null}return n}function up(n,i){do{var a=Wt;try{if(Gc(),jo.current=Wo,Ho){for(var u=Ot.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ho=!1}if(Wr=0,Jt=$t=Ot=null,Ia=!1,Ua=0,Su.current=null,a===null||a.return===null){Yt=1,Ba=i,Wt=null;break}e:{var v=n,M=a.return,I=a,B=i;if(i=sn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,me=I,xe=me.tag;if((me.mode&1)===0&&(xe===0||xe===11||xe===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Le=Uf(M);if(Le!==null){Le.flags&=-257,kf(Le,M,I,v,i),Le.mode&1&&If(v,te,i),i=Le,B=te;var Ue=i.updateQueue;if(Ue===null){var Fe=new Set;Fe.add(B),i.updateQueue=Fe}else Ue.add(B);break e}else{if((i&1)===0){If(v,te,i),Pu();break e}B=Error(t(426))}}else if(kt&&I.mode&1){var Vt=Uf(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),kf(Vt,M,I,v,i),jc(Ps(B,I));break e}}v=B=Ps(B,I),Yt!==4&&(Yt=2),ja===null?ja=[v]:ja.push(v),v=M;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var $=Nf(v,B,i);sf(v,$);break e;case 1:I=B;var H=v.type,Z=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(mr===null||!mr.has(Z)))){v.flags|=65536,i&=-i,v.lanes|=i;var we=Df(v,I,i);sf(v,we);break e}}v=v.return}while(v!==null)}fp(a)}catch(Be){i=Be,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function dp(){var n=Zo.current;return Zo.current=Wo,n===null?Wo:n}function Pu(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Xr&268435455)===0&&(Qo&268435455)===0||xr(en,sn)}function rl(n,i){var a=_t;_t|=2;var u=dp();(en!==n||sn!==i)&&(ji=null,$r(n,i));do try{F0();break}catch(f){up(n,f)}while(!0);if(Gc(),_t=a,Zo.current=u,Wt!==null)throw Error(t(261));return en=null,sn=0,Yt}function F0(){for(;Wt!==null;)hp(Wt)}function O0(){for(;Wt!==null&&!He();)hp(Wt)}function hp(n){var i=gp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?fp(n):Wt=i,Su.current=null}function fp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=P0(a,i,Wn),a!==null){Wt=a;return}}else{if(a=L0(a,i),a!==null){a.flags&=32767,Wt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Yt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);Yt===0&&(Yt=5)}function Yr(n,i,a){var u=At,f=ei.transition;try{ei.transition=null,At=1,z0(n,i,a,u)}finally{ei.transition=f,At=u}return null}function z0(n,i,a,u){do Is();while(gr!==null);if((_t&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(_v(n,v),n===en&&(Wt=en=null,sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,vp(Pt,function(){return Is(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=ei.transition,ei.transition=null;var M=At;At=1;var I=_t;_t|=4,Su.current=null,D0(n,a),ip(a,n),s0(Pc),mo=!!Cc,Pc=Cc=null,n.current=a,I0(a),Ze(),_t=I,At=M,ei.transition=v}else n.current=a;if(el&&(el=!1,gr=n,tl=f),v=n.pendingLanes,v===0&&(mr=null),ut(a.stateNode),Nn(n,Ne()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(Jo)throw Jo=!1,n=Eu,Eu=null,n;return(tl&1)!==0&&n.tag!==0&&Is(),v=n.pendingLanes,(v&1)!==0?n===Tu?Ha++:(Ha=0,Tu=n):Ha=0,dr(),null}function Is(){if(gr!==null){var n=eh(tl),i=ei.transition,a=At;try{if(ei.transition=null,At=16>n?16:n,gr===null)var u=!1;else{if(n=gr,gr=null,tl=0,(_t&6)!==0)throw Error(t(331));var f=_t;for(_t|=4,De=n.current;De!==null;){var v=De,M=v.child;if((De.flags&16)!==0){var I=v.deletions;if(I!==null){for(var B=0;B<I.length;B++){var te=I[B];for(De=te;De!==null;){var me=De;switch(me.tag){case 0:case 11:case 15:za(8,me,v)}var xe=me.child;if(xe!==null)xe.return=me,De=xe;else for(;De!==null;){me=De;var pe=me.sibling,Le=me.return;if(Qf(me),me===te){De=null;break}if(pe!==null){pe.return=Le,De=pe;break}De=Le}}}var Ue=v.alternate;if(Ue!==null){var Fe=Ue.child;if(Fe!==null){Ue.child=null;do{var Vt=Fe.sibling;Fe.sibling=null,Fe=Vt}while(Fe!==null)}}De=v}}if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,De=M;else e:for(;De!==null;){if(v=De,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:za(9,v,v.return)}var $=v.sibling;if($!==null){$.return=v.return,De=$;break e}De=v.return}}var H=n.current;for(De=H;De!==null;){M=De;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,De=Z;else e:for(M=H;De!==null;){if(I=De,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ko(9,I)}}catch(Be){jt(I,I.return,Be)}if(I===M){De=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,De=we;break e}De=I.return}}if(_t=f,dr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(bn,n)}catch{}u=!0}return u}finally{At=a,ei.transition=i}}return!1}function pp(n,i,a){i=Ps(a,i),i=Nf(n,i,1),n=fr(n,i,1),i=wn(),n!==null&&(ha(n,1,i),Nn(n,i))}function jt(n,i,a){if(n.tag===3)pp(n,n,a);else for(;i!==null;){if(i.tag===3){pp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=Ps(a,n),n=Df(i,n,1),i=fr(i,n,1),n=wn(),i!==null&&(ha(i,1,n),Nn(i,n));break}}i=i.return}}function B0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(sn&a)===a&&(Yt===4||Yt===3&&(sn&130023424)===sn&&500>Ne()-Mu?$r(n,0):wu|=a),Nn(n,i)}function mp(n,i){i===0&&((n.mode&1)===0?i=1:(i=tr,tr<<=1,(tr&130023424)===0&&(tr=4194304)));var a=wn();n=Oi(n,i),n!==null&&(ha(n,i,a),Nn(n,a))}function j0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),mp(n,a)}function H0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),mp(n,a)}var gp;gp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,C0(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,kt&&(i.flags&1048576)!==0&&$h(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;$o(n,i),n=i.pendingProps;var f=ws(i,cn.current);Rs(i,a),f=eu(null,i,u,n,f,a);var v=tu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(u)?(v=!0,Po(i)):v=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,qc(i),f.updater=Xo,i.stateNode=f,f._reactInternals=i,ou(i,u,n,a),i=du(null,i,u,!0,v,a)):(i.tag=0,kt&&v&&Fc(i),Sn(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch($o(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=V0(u),n=li(u,n),f){case 0:i=uu(null,i,u,n,a);break e;case 1:i=Hf(null,i,u,n,a);break e;case 11:i=Ff(null,i,u,n,a);break e;case 14:i=Of(null,i,u,li(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),uu(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),Hf(n,i,u,f,a);case 3:e:{if(Gf(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,f=v.element,rf(n,i),zo(i,u,null,a);var M=i.memoizedState;if(u=M.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){f=Ps(Error(t(423)),i),i=Vf(n,i,u,a,f);break e}else if(u!==f){f=Ps(Error(t(424)),i),i=Vf(n,i,u,a,f);break e}else for(Vn=lr(i.stateNode.containerInfo.firstChild),Gn=i,kt=!0,oi=null,a=tf(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),u===f){i=Bi(n,i,a);break e}Sn(n,i,u,a)}i=i.child}return i;case 5:return of(i),n===null&&Bc(i),u=i.type,f=i.pendingProps,v=n!==null?n.memoizedProps:null,M=f.children,Lc(u,f)?M=null:v!==null&&Lc(u,v)&&(i.flags|=32),jf(n,i),Sn(n,i,M,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return Wf(n,i,a);case 4:return $c(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=bs(i,null,u,a):Sn(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),Ff(n,i,u,f,a);case 7:return Sn(n,i,i.pendingProps,a),i.child;case 8:return Sn(n,i,i.pendingProps.children,a),i.child;case 12:return Sn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,v=i.memoizedProps,M=f.value,Lt(ko,u._currentValue),u._currentValue=M,v!==null)if(ai(v.value,M)){if(v.children===f.children&&!Rn.current){i=Bi(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var I=v.dependencies;if(I!==null){M=v.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(v.tag===1){B=zi(-1,a&-a),B.tag=2;var te=v.updateQueue;if(te!==null){te=te.shared;var me=te.pending;me===null?B.next=B:(B.next=me.next,me.next=B),te.pending=B}}v.lanes|=a,B=v.alternate,B!==null&&(B.lanes|=a),Wc(v.return,a,i),I.lanes|=a;break}B=B.next}}else if(v.tag===10)M=v.type===i.type?null:v.child;else if(v.tag===18){if(M=v.return,M===null)throw Error(t(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Wc(M,a,i),M=v.sibling}else M=v.child;if(M!==null)M.return=v;else for(M=v;M!==null;){if(M===i){M=null;break}if(v=M.sibling,v!==null){v.return=M.return,M=v;break}M=M.return}v=M}Sn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Rs(i,a),f=Qn(f),u=u(f),i.flags|=1,Sn(n,i,u,a),i.child;case 14:return u=i.type,f=li(u,i.pendingProps),f=li(u.type,f),Of(n,i,u,f,a);case 15:return zf(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),$o(n,i),i.tag=1,Cn(u)?(n=!0,Po(i)):n=!1,Rs(i,a),Pf(i,u,f),ou(i,u,f,a),du(null,i,u,!0,n,a);case 19:return qf(n,i,a);case 22:return Bf(n,i,a)}throw Error(t(156,i.tag))};function vp(n,i){return ne(n,i)}function G0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,u){return new G0(n,i,a,u)}function Lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function V0(n){if(typeof n=="function")return Lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ie)return 14}return 2}function _r(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,u,f,v){var M=2;if(u=n,typeof n=="function")Lu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Kr(a.children,f,v,i);case oe:M=8,f|=8;break;case he:return n=ti(12,a,i,f|2),n.elementType=he,n.lanes=v,n;case ue:return n=ti(13,a,i,f),n.elementType=ue,n.lanes=v,n;case j:return n=ti(19,a,i,f),n.elementType=j,n.lanes=v,n;case ce:return al(a,f,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:M=10;break e;case U:M=9;break e;case le:M=11;break e;case ie:M=14;break e;case J:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(M,a,i,f),i.elementType=n,i.type=u,i.lanes=v,i}function Kr(n,i,a,u){return n=ti(7,n,u,i),n.lanes=a,n}function al(n,i,a,u){return n=ti(22,n,u,i),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function Nu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function W0(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Iu(n,i,a,u,f,v,M,I,B){return n=new W0(n,i,a,I,B),i===1?(i=1,v===!0&&(i|=8)):i=0,v=ti(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(v),n}function X0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function xp(n){if(!n)return ur;n=n._reactInternals;e:{if(Ni(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Cn(a))return Wh(n,a,i)}return i}function _p(n,i,a,u,f,v,M,I,B){return n=Iu(a,u,!0,n,f,v,M,I,B),n.context=xp(null),a=n.current,u=wn(),f=vr(a),v=zi(u,f),v.callback=i??null,fr(a,v,f),n.current.lanes=f,ha(n,f,u),Nn(n,u),n}function ol(n,i,a,u){var f=i.current,v=wn(),M=vr(f);return a=xp(a),i.context===null?i.context=a:i.pendingContext=a,i=zi(v,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=fr(f,i,M),n!==null&&(di(n,f,M,v),Oo(n,f,M)),M}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uu(n,i){yp(n,i),(n=n.alternate)&&yp(n,i)}function q0(){return null}var Sp=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}cl.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},cl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){ol(null,n,null,null)}),i[Ii]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ih();n={blockedOn:null,target:n,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,n),a===0&&ah(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wp(){}function $0(n,i,a,u,f){if(f){if(typeof u=="function"){var v=u;u=function(){var te=ll(M);v.call(te)}}var M=_p(i,u,n,0,null,!1,!1,"",wp);return n._reactRootContainer=M,n[Ii]=M.current,ba(n.nodeType===8?n.parentNode:n),qr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var I=u;u=function(){var te=ll(B);I.call(te)}}var B=Iu(n,0,!1,null,null,!1,!1,"",wp);return n._reactRootContainer=B,n[Ii]=B.current,ba(n.nodeType===8?n.parentNode:n),qr(function(){ol(i,B,a,u)}),B}function dl(n,i,a,u,f){var v=a._reactRootContainer;if(v){var M=v;if(typeof f=="function"){var I=f;f=function(){var B=ll(M);I.call(B)}}ol(i,M,n,f)}else M=$0(a,i,n,f,u);return ll(M)}th=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Bt(i.pendingLanes);a!==0&&(oc(i,a|1),Nn(i,Ne()),(_t&6)===0&&(Ds=Ne()+500,dr()))}break;case 13:qr(function(){var u=Oi(n,1);if(u!==null){var f=wn();di(u,n,1,f)}}),Uu(n,1)}},lc=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var a=wn();di(i,n,134217728,a)}Uu(n,134217728)}},nh=function(n){if(n.tag===13){var i=vr(n),a=Oi(n,i);if(a!==null){var u=wn();di(a,n,i,u)}Uu(n,i)}},ih=function(){return At},rh=function(n,i){var a=At;try{return At=n,i()}finally{At=a}},Et=function(n,i,a){switch(i){case"input":if(Ct(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=Ro(u);if(!f)throw Error(t(90));K(u),Ct(u,f)}}}break;case"textarea":ye(n,a);break;case"select":i=a.value,i!=null&&ee(n,!!a.multiple,i,!1)}},yt=Ru,bt=qr;var Y0={usingClientEntryPoint:!1,Events:[Ca,ys,Ro,Oe,qe,Ru]},Ga={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K0={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=re(n),n===null?null:n.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{bn=hl.inject(K0),gt=hl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0,Dn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return X0(n,i,null,a)},Dn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,u="",f=Sp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Iu(n,1,!1,null,null,a,!1,u,f),n[Ii]=i.current,ba(n.nodeType===8?n.parentNode:n),new ku(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=re(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return qr(n)},Dn.hydrate=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!0,a)},Dn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,v="",M=Sp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=_p(i,null,n,1,a??null,f,!1,v,M),n[Ii]=i.current,ba(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new cl(i)},Dn.render=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!1,a)},Dn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},Dn.unstable_batchedUpdates=Ru,Dn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Pp;function rx(){if(Pp)return Bu.exports;Pp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bu.exports=ix(),Bu.exports}var Lp;function sx(){if(Lp)return fl;Lp=1;var r=rx();return fl.createRoot=r.createRoot,fl.hydrateRoot=r.hydrateRoot,fl}var ax=sx();const ox=Eg(ax),Vd=be.createContext({path:"/",navigate:()=>{}});function lx({children:r}){const[e,t]=be.useState(()=>window.location.pathname);be.useEffect(()=>{const o=()=>t(window.location.pathname);return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]);const s=be.useCallback((o,{replace:l=!1}={})=>{o!==window.location.pathname&&(window.history[l?"replaceState":"pushState"]({},"",o),t(o),window.scrollTo(0,0))},[]);return c.jsx(Vd.Provider,{value:{path:e,navigate:s},children:r})}function cx(){return be.useContext(Vd)}function ux(){return be.useContext(Vd).path}function Jl({to:r,children:e,onClick:t,...s}){const{navigate:o}=cx(),l=r&&r.startsWith("/")&&!r.startsWith("//"),h=d=>{t==null||t(d),l&&(d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey||(d.preventDefault(),o(r)))};return c.jsx("a",{href:r,onClick:h,...s,children:e})}const Rr="ykshetty.design@gmail.com",Gu={name:"Yogesh Shetty",logo:"/logos/header_logo.svg"},dx={lines:["Hello — I'm Yogesh Shetty.","A Senior Product Designer","practicing systems thinking,","where business, users, and AI","meet in one design."]},hx={heading:"Products I've contributed to",items:[{name:"Posten Bring"},{name:"ABN AMRO"},{name:"TCS"},{name:"Qualcomm"},{name:"Johnson & Johnson"},{name:"USAA"},{name:"Microsoft"},{name:"JPMorgan Chase"},{name:"HCLTech"},{name:"Swiss Re"}]},fx=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],Wa={askLabel:"What the client asked for",brief:"Make the button bigger.",replyLabel:"What the system revealed →",replyMain:"Can't tap with gloves on — so I used the scanner they had.",replyFoot:"Warehouse sorting — solved the system, not the screen."},pl=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",href:"/case-studies/swiftsort",brief:"More training, better equipment.",card:"Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",cover:"/case-studies/swiftsort/images/cover.jpg",insight:"Moved the decision out of their heads and into the system.",problem:"Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.",solution:"Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${Rr}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",href:"/case-studies/cards",brief:"Put a login on every action.",card:"A 2-hour banking task cut to 60 seconds of self-service.",cover:"/case-studies/cards/images/cover.jpg",insight:"Authenticated only where the risk is — the rest stays instant.",problem:"Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.",solution:"Added authentication only where the real risk was — browsing stays free, blocking takes seconds.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~85%",label:"Requests self-served"}],mailto:`mailto:${Rr}?subject=Self-service%20cards`,seed:{x:.96,y:.33,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",href:"/case-studies/postoffice",brief:"Rebuild the old terminal, screen by screen.",card:"Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.",cover:"/case-studies/postoffice/images/cover.jpg",insight:"Mapped the system first — one frame the whole suite reuses.",problem:"A legacy desktop terminal chained managers to one location and took weeks to learn.",solution:"Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${Rr}?subject=Post-office%20portal`,seed:{x:.02,y:.61,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",href:"/case-studies/postbox",brief:"Sort documents the bank's way, by type.",card:"A complex document archive made self-service — across all three platforms.",cover:"/case-studies/postbox/images/cover.jpg",insight:"Organised by life event — the way clients actually search.",problem:"Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.",solution:"Reorganised around life events — the way clients actually think — so they self-serve.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${Rr}?subject=Postbox`,seed:{x:.98,y:.89,r:-1.6}}],px=[{id:"alignment",num:"01 · THE SEED",title:"Alignment",callout:{label:"◎ Find the overlap",text:"The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them."},human:["User research","Read the data","Find the real need"],ai:["Cluster the notes","Surface patterns"],desc:"A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant."},{id:"foundation",num:"02 · THE ROOTS",title:"Foundation",callout:{label:"↺ Find the real problem",text:"Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving."},human:["Problem statement","In / out of scope","Feasibility check"],ai:["Edge-case list","Flag tech limits"],desc:"Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up."},{id:"explore",num:"03 · THE SPROUT",title:"Explore",callout:{label:"⚑ Try many, keep one",text:"I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong."},human:["Explore directions","Prototype","Usability testing"],ai:["Mockup variants","First-draft copy"],desc:"First shoots test the air in every direction. The strongest one keeps growing."},{id:"scale",num:"04 · THE CANOPY",title:"Scale",callout:{label:"⧉ Build it once",text:"I turn each decision into a design system, so the team can build the rest without me in the room."},human:["Craft & visual","Design system","Component review"],ai:["Token propagation","Doc automation"],desc:"Branches spread and repeat the same pattern. The system carries it across every limb."},{id:"loop",num:"05 · THE HARVEST",title:"Loop",callout:{label:"⟳ Learn from real use",text:"Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief."},human:["Track metrics","Watch real sessions","Feed the next brief"],ai:["Error & QA sweep","Analytics → insight"],desc:"Fruit ripens and falls, dissolving back into soil — feeding the next brief."}],mx=[{id:"tokenmap",logo:"/logos/tokenmap.svg",alt:"Token Map",logoStyle:{height:20,width:126},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes.",href:"https://www.figma.com/community/plugin/1614997660400970378/token-map"},{id:"intent",logo:"/logos/intent.svg",alt:"Intent",logoStyle:{height:26,width:82},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically.",href:"https://www.figma.com/community/plugin/1610840315625561207/intent"},{id:"focal",logo:"/logos/focalai.svg",alt:"Focal AI",logoStyle:{height:18,width:99},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second.",href:"https://www.figma.com/community/plugin/1651583678533726308/focal-ai"}],Ti={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"/assets/portrait.jpg",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},Td=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],gx="https://linkedin.com/in/ykshetty/details/recommendations/",Qs={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:Rr,href:`mailto:${Rr}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},bd="ys-theme",Tg=be.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function vx(){if(typeof window>"u")return"light";try{const r=window.localStorage.getItem(bd);if(r==="light"||r==="dark")return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function xx({children:r}){const[e,t]=be.useState(vx);be.useEffect(()=>{const h=document.documentElement;h.setAttribute("data-theme",e),h.style.colorScheme=e;try{window.localStorage.setItem(bd,e)}catch{}},[e]),be.useEffect(()=>{if(!window.matchMedia)return;const h=window.matchMedia("(prefers-color-scheme: dark)"),d=p=>{let m=!1;try{m=!!window.localStorage.getItem(bd)}catch{m=!1}m||t(p.matches?"dark":"light")};return h.addEventListener("change",d),()=>h.removeEventListener("change",d)},[]);const s=be.useCallback(h=>{t(d=>h==="light"||h==="dark"?h:d)},[]),o=be.useCallback(()=>{t(h=>h==="dark"?"light":"dark")},[]),l=be.useMemo(()=>({theme:e,setTheme:s,toggleTheme:o}),[e,s,o]);return c.jsx(Tg.Provider,{value:l,children:r})}function bg(){return be.useContext(Tg)}const Np={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function Ag({subpage:r=!1}){const[e,t]=be.useState(!1),{theme:s,toggleTheme:o}=bg(),l=be.useCallback(()=>t(_=>!_),[]),h=be.useCallback(()=>t(!1),[]),[d,p]=be.useState(!1);be.useEffect(()=>{if(r)return;let _=window.scrollY,w=null;const E=()=>{w=null;const y=window.scrollY,S=y-_;y<80?p(!1):S>4?p(!0):S<-4&&p(!1),_=y},T=()=>{w==null&&(w=requestAnimationFrame(E))};return window.addEventListener("scroll",T,{passive:!0}),()=>{window.removeEventListener("scroll",T),w&&cancelAnimationFrame(w)}},[r]);const m=_=>r?`/${_}`:_,g=c.jsxs(c.Fragment,{children:[c.jsx("img",{src:Gu.logo,alt:Gu.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),c.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:Gu.name})]}),x={display:"flex",alignItems:"center",gap:10,height:20};return c.jsx("header",{className:e?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)",transform:d&&!e?"translateY(-100%)":"translateY(0)",transition:"transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform"},children:c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:r?c.jsx(Jl,{to:"/",style:x,children:g}):c.jsx("a",{href:"#top",style:x,children:g})}),c.jsx("button",{className:"hamburger",onClick:l,"aria-label":"Menu","aria-expanded":e,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),c.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[fx.map(_=>c.jsx("a",{href:m(_.href),onClick:h,className:"nav-link",style:Np,children:_.label},_.href)),c.jsx("a",{href:`mailto:${Rr}`,onClick:h,className:"cta-pill",style:{...Np,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),c.jsx("button",{type:"button",onClick:o,title:s==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":s==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:s==="dark"?c.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"12",r:"4.2"}),c.jsx("path",{d:"M12 2v2.2M12 19.8V22M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2.2M19.8 12H22M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"})]}):c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:c.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"})})})]})]})})}const _x=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function yx(){const[r,e]=be.useState(0),t=be.useRef([]),s=be.useRef(null),o=be.useCallback(()=>{t.current.forEach(h=>clearTimeout(h)),t.current=[],s.current&&(cancelAnimationFrame(s.current),s.current=null)},[]),l=be.useCallback(()=>{o(),e(0),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>{_x.forEach(([h,d])=>{t.current.push(setTimeout(()=>e(h),d))})})})},[o]);return be.useEffect(()=>(l(),o),[l,o]),{step:r,replay:l}}function Sx(r,e,t){be.useEffect(()=>{const s=r.current,o=e.current,l=o?Array.from(o.querySelectorAll("[data-drift]")):[],h=C=>Math.max(0,Math.min(1,C)),d=()=>{const C=window.innerHeight||1,R=h(window.scrollY/C),D=1-R*.28,G=1-R*.65;if(s&&(s.style.transform=`translateX(-50%) scale(${D.toFixed(3)})`,s.style.opacity=G.toFixed(3)),t&&t.current){const O=h(window.scrollY/(C*.15));t.current.style.opacity=(1-O).toFixed(3)}};let p=1,m=1,g=null,x=!1,_=window.scrollY,w=performance.now();const E=()=>{p+=(m-p)*.12,m+=(1-m)*.04,l.forEach(C=>{C.getAnimations&&C.getAnimations().forEach(R=>{R.playbackRate=p})}),Math.abs(p-1)>.02||Math.abs(m-1)>.02?g=requestAnimationFrame(E):(p=1,m=1,l.forEach(C=>{C.getAnimations&&C.getAnimations().forEach(R=>{R.playbackRate=1})}),x=!1)},T=()=>{x||!l.length||(x=!0,g=requestAnimationFrame(E))},y=()=>{const C=performance.now(),R=Math.abs(window.scrollY-_),D=Math.max(16,C-w),G=R/D;m=Math.min(9,1+G*20),_=window.scrollY,w=C,T()},S=()=>{d(),y()};return window.addEventListener("scroll",S,{passive:!0}),d(),()=>{window.removeEventListener("scroll",S),g&&cancelAnimationFrame(g)}},[r,e,t])}const wx=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],Dp=()=>c.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]});function Mx(){const{step:r}=yx(),e=be.useRef(null),t=be.useRef(null),s=be.useRef(null);return Sx(e,t,s),c.jsx("div",{style:{position:"relative",height:"100vh"},children:c.jsxs("section",{className:"hero-section","data-hero-step":r,style:{position:"sticky",top:0,zIndex:1,height:"100vh",overflow:"hidden",background:"var(--bg-page)"},children:[c.jsx("div",{ref:t,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:wx.map((o,l)=>c.jsx("div",{"data-drift":"",style:{position:"absolute",width:o.w,height:o.w,maxWidth:o.maxW,maxHeight:o.maxW,top:o.top,bottom:o.bottom,left:o.left,right:o.right,borderRadius:"50%",background:`radial-gradient(circle, ${o.color}, transparent 70%)`,filter:`blur(${o.blur}px)`,animation:o.anim,willChange:"transform"}},l))}),c.jsxs("div",{ref:e,className:"hero-cluster",children:[c.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:Wa.askLabel}),c.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[c.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:c.jsx(Dp,{})}),c.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:c.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:Wa.brief})})]}),c.jsxs("div",{style:{position:"relative",minHeight:72},children:[c.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[c.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),c.jsx(Dp,{})]}),c.jsxs("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:[c.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12},children:Wa.replyLabel}),c.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(21px,2.9vw,32px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em"},children:Wa.replyMain}),c.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.5,color:"var(--text-muted)",marginTop:12},children:Wa.replyFoot})]})]})]}),c.jsxs("div",{ref:s,className:"hero-scroll-cue","aria-hidden":"true",children:[c.jsx("span",{className:"hero-scroll-cue__label",children:"Scroll"}),c.jsx("span",{className:"hero-scroll-cue__track",children:c.jsx("span",{className:"hero-scroll-cue__thumb"})})]})]})})}const Ip=.18,Up=1,Ex=1,Tx=6,bx=10,ml=(r,e,t)=>Math.min(t,Math.max(e,r));function Ax(r,e){be.useEffect(()=>{var m;const t=r.current,s=((m=e.current)==null?void 0:m.filter(Boolean))??[];if(!t||s.length===0)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(g=>{g.style.color=`rgba(255, 255, 255, ${Up})`,g.style.filter="none",g.style.transform="none"});return}const l=s.length-1;let h=!1;const d=()=>{h=!1;const g=t.offsetHeight-window.innerHeight;if(g<=0)return;const x=-t.getBoundingClientRect().top,_=ml(x/g,0,1),w=ml(_/Ex,0,1),E=1/s.length;s.forEach((T,y)=>{const S=ml((w-y*E)/E,0,1),C=Ip+(Up-Ip)*S,R=(1-S)*Tx,D=(1-S)*bx;if(T.style.color=`rgba(255, 255, 255, ${C.toFixed(3)})`,T.style.filter=R>.05?`blur(${R.toFixed(2)}px)`:"none",T.style.transform=`translateY(${D.toFixed(2)}px)`,y===l){const G=ml((S-.6)/.4,0,1);T.style.textShadow=G>0?`0 0 ${(G*24).toFixed(1)}px rgba(255, 255, 255, ${(G*.5).toFixed(3)})`:"none"}})},p=()=>{h||(h=!0,requestAnimationFrame(d))};return d(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[r,e])}const kp=r=>Math.max(0,Math.min(1,r)),Fp=.9,Rx=1;function Cx({sectionRef:r}){const e=be.useRef(null);return be.useEffect(()=>{const t=e.current,s=r==null?void 0:r.current;if(!t||!s)return;let o=!1;const l=()=>{o=!1;const d=window.innerHeight||1,p=s.offsetHeight-d,m=p>0?kp(-s.getBoundingClientRect().top/p):0,g=1-kp((m-Fp)/(Rx-Fp));t.style.opacity=g.toFixed(3)},h=()=>{o||(o=!0,requestAnimationFrame(l))};return l(),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[r]),c.jsxs("div",{ref:e,className:"hero-scroll-cue hero-scroll-cue--light","aria-hidden":"true",children:[c.jsx("span",{className:"hero-scroll-cue__label",children:"Scroll"}),c.jsx("span",{className:"hero-scroll-cue__track",children:c.jsx("span",{className:"hero-scroll-cue__thumb"})})]})}function Px({onAccent:r=!1}){const{heading:e,items:t}=hx,s=[...t,...t];return c.jsxs("section",{className:`clients${r?" clients--on-accent":""}`,"aria-label":"Products and companies worked with",children:[c.jsx("div",{className:"clients__eyebrow",children:e}),c.jsx("div",{className:"clients__marquee",children:c.jsx("ul",{className:"clients__track",children:s.map((o,l)=>{const h=l>=t.length;return c.jsx("li",{className:"clients__item","aria-hidden":h?"true":void 0,children:o.logo?c.jsx("img",{src:o.logo,alt:o.name,className:"clients__logo",loading:"lazy"}):c.jsx("span",{className:"clients__word",children:o.name})},`${o.name}-${l}`)})})})]})}function Lx(){const r=be.useRef(null),e=be.useRef([]);return Ax(r,e),c.jsx("section",{ref:r,className:"statement-section","aria-label":"Statement",children:c.jsxs("div",{className:"statement-sticky",children:[c.jsxs("div",{className:"statement-content",children:[c.jsx("p",{className:"statement-text",children:dx.lines.map((t,s)=>c.jsx("span",{ref:o=>{e.current[s]=o},className:"statement-line",style:{color:"rgba(255, 255, 255, 0.18)"},children:t},s))}),c.jsx(Px,{onAccent:!0})]}),c.jsx(Cx,{sectionRef:r})]})})}const gl=(r,e,t)=>Math.min(t,Math.max(e,r)),Nx=.5;function Dx(r){be.useEffect(()=>{const e=r.current;if(!e)return;const t=Array.from(e.querySelectorAll(".deck__card")),s=Array.from(e.querySelectorAll(".deck-lead__item")),o=t.length;if(o===0)return;const l=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||window.matchMedia("(max-width: 760px)").matches,h=()=>{t.forEach(g=>{g.style.transform="",g.style.opacity="",g.style.zIndex="",g.style.pointerEvents="";const x=g.querySelector(".deck__tint");x&&(x.style.opacity="");const _=g.querySelector(".deck__content");_&&(_.style.opacity="")}),s.forEach(g=>{g.style.opacity="",g.style.transform="",g.style.removeProperty("--reveal")})};let d=!1;const p=()=>{if(d=!1,l()){h();return}const g=window.innerHeight,x=e.offsetHeight-g;if(x<=0)return;const w=gl(-e.getBoundingClientRect().top/x,0,1)*(o-1);t.forEach((y,S)=>{const C=S-w;let R=0,D,G,O,F,oe;if(C>=0){const ue=Math.min(C,3);G=-ue*4.5,D=-ue*9,O=1-ue*.035,F=C>3.4?0:1,oe=100-Math.round(ue*10)}else{const ue=Math.min(-C,1);G=ue*14,D=-ue*(g*1.25),R=-ue*60,O=1+ue*.05,F=1,oe=160}const he=gl(1-Math.max(C,0),0,1),b=C>=0?gl(Math.min(C,3)/3,0,1)*Nx:0;y.style.transform=`translate(${R.toFixed(2)}px, ${D.toFixed(2)}px) rotate(${G.toFixed(2)}deg) scale(${O.toFixed(4)})`,y.style.opacity=F.toFixed(3),y.style.zIndex=String(oe),y.style.pointerEvents=he>.6?"auto":"none";const U=y.querySelector(".deck__tint");U&&(U.style.opacity=b.toFixed(3));const le=y.querySelector(".deck__content");le&&(le.style.opacity=he.toFixed(3))});const E=s[0]?s[0].parentElement:null,T=E?E.offsetHeight:0;s.forEach((y,S)=>{y.style.transform=`translateY(${((S-w)*T).toFixed(1)}px)`;const C=gl(1-Math.abs(S-w)/.45,0,1);y.style.setProperty("--reveal",C.toFixed(3))})},m=()=>{d||(d=!0,requestAnimationFrame(p))};return p(),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[r])}const Op=["linear-gradient(135deg, #8b7bff 0%, #5b46c4 100%)","linear-gradient(135deg, #35c2b0 0%, #0d7d72 100%)","linear-gradient(135deg, #7c8bff 0%, #3b3aa0 100%)","linear-gradient(135deg, #b58bff 0%, #7a3fd0 100%)"];function Ix(){const r=be.useRef(null),[e,t]=be.useState({});return Dx(r),c.jsxs("section",{id:"work",className:"case-stack-section",children:[c.jsxs("div",{className:"case-stack__intro","data-reveal":"",children:[c.jsx("div",{className:"case-stack__eyebrow",children:"Case studies"}),c.jsx("h2",{className:"case-stack__heading",children:"Real problems, solved at the root."})]}),c.jsx("div",{ref:r,className:"deck-track",style:{height:`${pl.length*90}vh`},children:c.jsx("div",{className:"deck-sticky",children:c.jsxs("div",{className:"deck-inner",children:[c.jsx("div",{className:"deck-lead","aria-hidden":"true",children:pl.map(s=>c.jsx("div",{className:"deck-lead__item",children:c.jsxs("div",{className:"lead-problem",children:[c.jsx("span",{className:"lead-problem__label",children:"The problem"}),c.jsx("p",{className:"lead-problem__text",children:s.problem})]})},s.id))}),c.jsx("div",{className:"deck",children:pl.map((s,o)=>{const l=s.cover&&!e[s.id];return c.jsxs("article",{className:"deck__card",style:{zIndex:pl.length-o},children:[c.jsx("div",{className:"deck__tint","aria-hidden":"true"}),c.jsxs(Jl,{to:s.href||"#work",className:"deck__content","aria-label":`Read case study: ${s.card}`,children:[c.jsx("div",{className:"deck__meta",children:s.metaLong||s.meta}),c.jsx("div",{className:"deck__label",children:"Design solution"}),c.jsx("p",{className:"deck__solution-headline",children:s.solution}),c.jsxs("div",{className:`deck__media${l?"":" deck__media--ph"}`,style:l?void 0:{backgroundImage:Op[o%Op.length]},children:[l?c.jsx("img",{src:s.cover,alt:"",onError:()=>t(h=>({...h,[s.id]:!0}))}):c.jsx("span",{className:"deck__ph-index","aria-hidden":"true",children:s.index}),c.jsx("div",{className:"deck__metrics","aria-hidden":"true",children:s.stats.map(h=>c.jsxs("div",{className:"deck__metric",children:[c.jsx("span",{className:"deck__metric-value",children:h.value}),c.jsx("span",{className:"deck__metric-label",children:h.label})]},h.label))})]})]})]},s.id)})})]})})})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="161",Ux=0,zp=1,kx=2,Rg=1,Fx=2,qi=3,Ur=0,zn=1,$i=2,Pr=0,ta=1,eo=2,Bp=3,jp=4,Ox=5,is=100,zx=101,Bx=102,Hp=103,Gp=104,jx=200,Hx=201,Gx=202,Vx=203,Ad=204,Rd=205,Wx=206,Xx=207,qx=208,$x=209,Yx=210,Kx=211,Zx=212,Qx=213,Jx=214,e_=0,t_=1,n_=2,ql=3,i_=4,r_=5,s_=6,a_=7,Cg=0,o_=1,l_=2,Lr=0,c_=1,u_=2,d_=3,Pg=4,h_=5,f_=6,Lg=300,ra=301,sa=302,Cd=303,Pd=304,ec=306,Ld=1e3,gi=1001,Nd=1002,Tn=1003,Vp=1004,Xa=1005,kn=1006,Vu=1007,ss=1008,Nr=1009,p_=1010,m_=1011,Xd=1012,Ng=1013,Cr=1014,Yi=1015,to=1016,Dg=1017,Ig=1018,as=1020,g_=1021,vi=1023,v_=1024,x_=1025,os=1026,aa=1027,__=1028,Ug=1029,y_=1030,kg=1031,Fg=1033,Wu=33776,Xu=33777,qu=33778,$u=33779,Wp=35840,Xp=35841,qp=35842,$p=35843,Og=36196,Yp=37492,Kp=37496,Zp=37808,Qp=37809,Jp=37810,em=37811,tm=37812,nm=37813,im=37814,rm=37815,sm=37816,am=37817,om=37818,lm=37819,cm=37820,um=37821,Yu=36492,dm=36494,hm=36495,S_=36283,fm=36284,pm=36285,mm=36286,zg=3e3,ls=3001,w_=3200,M_=3201,E_=0,T_=1,ri="",an="srgb",Qi="srgb-linear",qd="display-p3",tc="display-p3-linear",$l="linear",It="srgb",Yl="rec709",Kl="p3",Us=7680,gm=519,b_=512,A_=513,R_=514,Bg=515,C_=516,P_=517,L_=518,N_=519,vm=35044,xm="300 es",Dd=1035,Ki=2e3,Zl=2001;class la{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,Id=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function vn(r,e,t){return Math.max(e,Math.min(t,r))}function D_(r,e){return(r%e+e)%e}function Zu(r,e,t){return(1-t)*r+t*e}function _m(r){return(r&r-1)===0&&r!==0}function Ud(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,h=this.y-e.y;return this.x=l*s-h*o+e.x,this.y=l*o+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,s,o,l,h,d,p,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m)}set(e,t,s,o,l,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],x=s[7],_=s[2],w=s[5],E=s[8],T=o[0],y=o[3],S=o[6],C=o[1],R=o[4],D=o[7],G=o[2],O=o[5],F=o[8];return l[0]=h*T+d*C+p*G,l[3]=h*y+d*R+p*O,l[6]=h*S+d*D+p*F,l[1]=m*T+g*C+x*G,l[4]=m*y+g*R+x*O,l[7]=m*S+g*D+x*F,l[2]=_*T+w*C+E*G,l[5]=_*y+w*R+E*O,l[8]=_*S+w*D+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return t*h*g-t*d*m-s*l*g+s*d*p+o*l*m-o*h*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=g*h-d*m,_=d*p-g*l,w=m*l-h*p,E=t*x+s*_+o*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(o*m-g*s)*T,e[2]=(d*s-o*h)*T,e[3]=_*T,e[4]=(g*t-o*p)*T,e[5]=(o*l-d*t)*T,e[6]=w*T,e[7]=(s*p-m*t)*T,e[8]=(h*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,h,d){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-o*m,o*p,-o*(-m*h+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Qu.makeScale(e,t)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new pt;function jg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function I_(){const r=Ql("canvas");return r.style.display="block",r}const ym={};function na(r){r in ym||(ym[r]=!0,console.warn(r))}const Sm=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wm=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vl={[Qi]:{transfer:$l,primaries:Yl,toReference:r=>r,fromReference:r=>r},[an]:{transfer:It,primaries:Yl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[tc]:{transfer:$l,primaries:Kl,toReference:r=>r.applyMatrix3(wm),fromReference:r=>r.applyMatrix3(Sm)},[qd]:{transfer:It,primaries:Kl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(wm),fromReference:r=>r.applyMatrix3(Sm).convertLinearToSRGB()}},U_=new Set([Qi,tc]),Rt={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!U_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=vl[e].toReference,o=vl[t].fromReference;return o(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return vl[r].primaries},getTransfer:function(r){return r===ri?$l:vl[r].transfer}};function ia(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ju(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class Hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=Ql("canvas")),ks.width=e.width,ks.height=e.height;const s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=ia(l[h]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ia(t[s]/255)*255):t[s]=ia(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class Gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,d=o.length;h<d;h++)o[h].isDataTexture?l.push(ed(o[h].image)):l.push(ed(o[h]))}else l=ed(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function ed(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F_=0;class Bn extends la{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,s=gi,o=gi,l=kn,h=ss,d=vi,p=Nr,m=Bn.DEFAULT_ANISOTROPY,g=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=no(),this.name="",this.source=new Gg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===ls?an:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?ls:zg}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ls?an:ri}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Lg;Bn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,s=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,h=e.elements;return this.x=h[0]*t+h[4]*s+h[8]*o+h[12]*l,this.y=h[1]*t+h[5]*s+h[9]*o+h[13]*l,this.z=h[2]*t+h[6]*s+h[10]*o+h[14]*l,this.w=h[3]*t+h[7]*s+h[11]*o+h[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,m=p[0],g=p[4],x=p[8],_=p[1],w=p[5],E=p[9],T=p[2],y=p[6],S=p[10];if(Math.abs(g-_)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+w+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(m+1)/2,D=(w+1)/2,G=(S+1)/2,O=(g+_)/4,F=(x+T)/4,oe=(E+y)/4;return R>D&&R>G?R<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(R),o=O/s,l=F/s):D>G?D<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),s=O/o,l=oe/o):G<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(G),s=F/l,o=oe/l),this.set(s,o,l,t),this}let C=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(_-g)*(_-g));return Math.abs(C)<.001&&(C=1),this.x=(y-E)/C,this.y=(x-T)/C,this.z=(_-g)/C,this.w=Math.acos((m+w+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends la{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const o={width:e,height:t,depth:1};s.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ls?an:ri),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Bn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends O_{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Vg extends Bn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z_ extends Bn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,h,d){let p=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];const _=l[h+0],w=l[h+1],E=l[h+2],T=l[h+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d===1){e[t+0]=_,e[t+1]=w,e[t+2]=E,e[t+3]=T;return}if(x!==T||p!==_||m!==w||g!==E){let y=1-d;const S=p*_+m*w+g*E+x*T,C=S>=0?1:-1,R=1-S*S;if(R>Number.EPSILON){const G=Math.sqrt(R),O=Math.atan2(G,S*C);y=Math.sin(y*O)/G,d=Math.sin(d*O)/G}const D=d*C;if(p=p*y+_*D,m=m*y+w*D,g=g*y+E*D,x=x*y+T*D,y===1-d){const G=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=G,m*=G,g*=G,x*=G}}e[t]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,h){const d=s[o],p=s[o+1],m=s[o+2],g=s[o+3],x=l[h],_=l[h+1],w=l[h+2],E=l[h+3];return e[t]=d*E+g*x+p*w-m*_,e[t+1]=p*E+g*_+m*x-d*w,e[t+2]=m*E+g*w+d*_-p*x,e[t+3]=g*E-d*x-p*_-m*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(o/2),x=d(l/2),_=p(s/2),w=p(o/2),E=p(l/2);switch(h){case"XYZ":this._x=_*g*x+m*w*E,this._y=m*w*x-_*g*E,this._z=m*g*E+_*w*x,this._w=m*g*x-_*w*E;break;case"YXZ":this._x=_*g*x+m*w*E,this._y=m*w*x-_*g*E,this._z=m*g*E-_*w*x,this._w=m*g*x+_*w*E;break;case"ZXY":this._x=_*g*x-m*w*E,this._y=m*w*x+_*g*E,this._z=m*g*E+_*w*x,this._w=m*g*x-_*w*E;break;case"ZYX":this._x=_*g*x-m*w*E,this._y=m*w*x+_*g*E,this._z=m*g*E-_*w*x,this._w=m*g*x+_*w*E;break;case"YZX":this._x=_*g*x+m*w*E,this._y=m*w*x+_*g*E,this._z=m*g*E-_*w*x,this._w=m*g*x-_*w*E;break;case"XZY":this._x=_*g*x-m*w*E,this._y=m*w*x-_*g*E,this._z=m*g*E+_*w*x,this._w=m*g*x+_*w*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],h=t[1],d=t[5],p=t[9],m=t[2],g=t[6],x=t[10],_=s+d+x;if(_>0){const w=.5/Math.sqrt(_+1);this._w=.25/w,this._x=(g-p)*w,this._y=(l-m)*w,this._z=(h-o)*w}else if(s>d&&s>x){const w=2*Math.sqrt(1+s-d-x);this._w=(g-p)/w,this._x=.25*w,this._y=(o+h)/w,this._z=(l+m)/w}else if(d>x){const w=2*Math.sqrt(1+d-s-x);this._w=(l-m)/w,this._x=(o+h)/w,this._y=.25*w,this._z=(p+g)/w}else{const w=2*Math.sqrt(1+x-s-d);this._w=(h-o)/w,this._x=(l+m)/w,this._y=(p+g)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,h=e._w,d=t._x,p=t._y,m=t._z,g=t._w;return this._x=s*g+h*d+o*m-l*p,this._y=o*g+h*p+l*d-s*m,this._z=l*g+h*m+s*p-o*d,this._w=h*g-s*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,h=this._w;let d=h*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const w=1-t;return this._w=w*h+t*this._w,this._x=w*s+t*this._x,this._y=w*o+t*this._y,this._z=w*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-t)*g)/m,_=Math.sin(t*g)/m;return this._w=h*x+this._w*_,this._x=s*x+this._x*_,this._y=o*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,s=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,h=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*h,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*h,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*h,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*o-d*s),g=2*(d*t-l*o),x=2*(l*s-h*t);return this.x=t+p*m+h*x-d*g,this.y=s+p*g+d*m-l*x,this.z=o+p*x+l*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,h=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*h-s*p,this.z=s*d-o*h,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new q,Mm=new ca;class io{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=l.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(l,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xl.copy(s.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),_l.subVectors(this.max,$a),Fs.subVectors(e.a,$a),Os.subVectors(e.b,$a),zs.subVectors(e.c,$a),Sr.subVectors(Os,Fs),wr.subVectors(zs,Os),Zr.subVectors(Fs,zs);let t=[0,-Sr.z,Sr.y,0,-wr.z,wr.y,0,-Zr.z,Zr.y,Sr.z,0,-Sr.x,wr.z,0,-wr.x,Zr.z,0,-Zr.x,-Sr.y,Sr.x,0,-wr.y,wr.x,0,-Zr.y,Zr.x,0];return!nd(t,Fs,Os,zs,_l)||(t=[1,0,0,0,1,0,0,0,1],!nd(t,Fs,Os,zs,_l))?!1:(yl.crossVectors(Sr,wr),t=[yl.x,yl.y,yl.z],nd(t,Fs,Os,zs,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new q,new q,new q,new q,new q,new q,new q,new q],hi=new q,xl=new io,Fs=new q,Os=new q,zs=new q,Sr=new q,wr=new q,Zr=new q,$a=new q,_l=new q,yl=new q,Qr=new q;function nd(r,e,t,s,o){for(let l=0,h=r.length-3;l<=h;l+=3){Qr.fromArray(r,l);const d=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),p=e.dot(Qr),m=t.dot(Qr),g=s.dot(Qr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const B_=new io,Ya=new q,id=new q;class nc{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):B_.setFromPoints(e).getCenter(s);let o=0;for(let l=0,h=e.length;l<h;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ya,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(id)),this.expandByPoint(Ya.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new q,rd=new q,Sl=new q,Mr=new q,sd=new q,wl=new q,ad=new q;class Wg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){rd.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(rd);const l=e.distanceTo(t)*.5,h=-this.direction.dot(Sl),d=Mr.dot(this.direction),p=-Mr.dot(Sl),m=Mr.lengthSq(),g=Math.abs(1-h*h);let x,_,w,E;if(g>0)if(x=h*p-d,_=h*d-p,E=l*g,x>=0)if(_>=-E)if(_<=E){const T=1/g;x*=T,_*=T,w=x*(x+h*_+2*d)+_*(h*x+_+2*p)+m}else _=l,x=Math.max(0,-(h*_+d)),w=-x*x+_*(_+2*p)+m;else _=-l,x=Math.max(0,-(h*_+d)),w=-x*x+_*(_+2*p)+m;else _<=-E?(x=Math.max(0,-(-h*l+d)),_=x>0?-l:Math.min(Math.max(-l,-p),l),w=-x*x+_*(_+2*p)+m):_<=E?(x=0,_=Math.min(Math.max(-l,-p),l),w=_*(_+2*p)+m):(x=Math.max(0,-(h*l+d)),_=x>0?l:Math.min(Math.max(-l,-p),l),w=-x*x+_*(_+2*p)+m);else _=h>0?-l:l,x=Math.max(0,-(h*_+d)),w=-x*x+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(rd).addScaledVector(Sl,_),w}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),o=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(o>l)return null;const h=Math.sqrt(l-o),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,h=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,h=(e.min.y-_.y)*g),s>h||l>o||((l>s||isNaN(s))&&(s=l),(h<o||isNaN(o))&&(o=h),x>=0?(d=(e.min.z-_.z)*x,p=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,p=(e.min.z-_.z)*x),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,o,l){sd.subVectors(t,e),wl.subVectors(s,e),ad.crossVectors(sd,wl);let h=this.direction.dot(ad),d;if(h>0){if(o)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Mr.subVectors(this.origin,e);const p=d*this.direction.dot(wl.crossVectors(Mr,wl));if(p<0)return null;const m=d*this.direction.dot(sd.cross(Mr));if(m<0||p+m>h)return null;const g=-d*Mr.dot(ad);return g<0?null:this.at(g/h,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,s,o,l,h,d,p,m,g,x,_,w,E,T,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m,g,x,_,w,E,T,y)}set(e,t,s,o,l,h,d,p,m,g,x,_,w,E,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=g,S[10]=x,S[14]=_,S[3]=w,S[7]=E,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),h=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*h,t[9]=s[9]*h,t[10]=s[10]*h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=h*g,w=h*x,E=d*g,T=d*x;t[0]=p*g,t[4]=-p*x,t[8]=m,t[1]=w+E*m,t[5]=_-T*m,t[9]=-d*p,t[2]=T-_*m,t[6]=E+w*m,t[10]=h*p}else if(e.order==="YXZ"){const _=p*g,w=p*x,E=m*g,T=m*x;t[0]=_+T*d,t[4]=E*d-w,t[8]=h*m,t[1]=h*x,t[5]=h*g,t[9]=-d,t[2]=w*d-E,t[6]=T+_*d,t[10]=h*p}else if(e.order==="ZXY"){const _=p*g,w=p*x,E=m*g,T=m*x;t[0]=_-T*d,t[4]=-h*x,t[8]=E+w*d,t[1]=w+E*d,t[5]=h*g,t[9]=T-_*d,t[2]=-h*m,t[6]=d,t[10]=h*p}else if(e.order==="ZYX"){const _=h*g,w=h*x,E=d*g,T=d*x;t[0]=p*g,t[4]=E*m-w,t[8]=_*m+T,t[1]=p*x,t[5]=T*m+_,t[9]=w*m-E,t[2]=-m,t[6]=d*p,t[10]=h*p}else if(e.order==="YZX"){const _=h*p,w=h*m,E=d*p,T=d*m;t[0]=p*g,t[4]=T-_*x,t[8]=E*x+w,t[1]=x,t[5]=h*g,t[9]=-d*g,t[2]=-m*g,t[6]=w*x+E,t[10]=_-T*x}else if(e.order==="XZY"){const _=h*p,w=h*m,E=d*p,T=d*m;t[0]=p*g,t[4]=-x,t[8]=m*g,t[1]=_*x+T,t[5]=h*g,t[9]=w*x-E,t[2]=E*x-w,t[6]=d*g,t[10]=T*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,H_)}lookAt(e,t,s){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Er.crossVectors(s,Xn),Er.lengthSq()===0&&(Math.abs(s.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Er.crossVectors(s,Xn)),Er.normalize(),Ml.crossVectors(Xn,Er),o[0]=Er.x,o[4]=Ml.x,o[8]=Xn.x,o[1]=Er.y,o[5]=Ml.y,o[9]=Xn.y,o[2]=Er.z,o[6]=Ml.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],x=s[5],_=s[9],w=s[13],E=s[2],T=s[6],y=s[10],S=s[14],C=s[3],R=s[7],D=s[11],G=s[15],O=o[0],F=o[4],oe=o[8],he=o[12],b=o[1],U=o[5],le=o[9],ue=o[13],j=o[2],ie=o[6],J=o[10],ce=o[14],V=o[3],Q=o[7],X=o[11],N=o[15];return l[0]=h*O+d*b+p*j+m*V,l[4]=h*F+d*U+p*ie+m*Q,l[8]=h*oe+d*le+p*J+m*X,l[12]=h*he+d*ue+p*ce+m*N,l[1]=g*O+x*b+_*j+w*V,l[5]=g*F+x*U+_*ie+w*Q,l[9]=g*oe+x*le+_*J+w*X,l[13]=g*he+x*ue+_*ce+w*N,l[2]=E*O+T*b+y*j+S*V,l[6]=E*F+T*U+y*ie+S*Q,l[10]=E*oe+T*le+y*J+S*X,l[14]=E*he+T*ue+y*ce+S*N,l[3]=C*O+R*b+D*j+G*V,l[7]=C*F+R*U+D*ie+G*Q,l[11]=C*oe+R*le+D*J+G*X,l[15]=C*he+R*ue+D*ce+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],x=e[6],_=e[10],w=e[14],E=e[3],T=e[7],y=e[11],S=e[15];return E*(+l*p*x-o*m*x-l*d*_+s*m*_+o*d*w-s*p*w)+T*(+t*p*w-t*m*_+l*h*_-o*h*w+o*m*g-l*p*g)+y*(+t*m*x-t*d*w-l*h*x+s*h*w+l*d*g-s*m*g)+S*(-o*d*g-t*p*x+t*d*_+o*h*x-s*h*_+s*p*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],x=e[9],_=e[10],w=e[11],E=e[12],T=e[13],y=e[14],S=e[15],C=x*y*m-T*_*m+T*p*w-d*y*w-x*p*S+d*_*S,R=E*_*m-g*y*m-E*p*w+h*y*w+g*p*S-h*_*S,D=g*T*m-E*x*m+E*d*w-h*T*w-g*d*S+h*x*S,G=E*x*p-g*T*p-E*d*_+h*T*_+g*d*y-h*x*y,O=t*C+s*R+o*D+l*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=C*F,e[1]=(T*_*l-x*y*l-T*o*w+s*y*w+x*o*S-s*_*S)*F,e[2]=(d*y*l-T*p*l+T*o*m-s*y*m-d*o*S+s*p*S)*F,e[3]=(x*p*l-d*_*l-x*o*m+s*_*m+d*o*w-s*p*w)*F,e[4]=R*F,e[5]=(g*y*l-E*_*l+E*o*w-t*y*w-g*o*S+t*_*S)*F,e[6]=(E*p*l-h*y*l-E*o*m+t*y*m+h*o*S-t*p*S)*F,e[7]=(h*_*l-g*p*l+g*o*m-t*_*m-h*o*w+t*p*w)*F,e[8]=D*F,e[9]=(E*x*l-g*T*l-E*s*w+t*T*w+g*s*S-t*x*S)*F,e[10]=(h*T*l-E*d*l+E*s*m-t*T*m-h*s*S+t*d*S)*F,e[11]=(g*d*l-h*x*l-g*s*m+t*x*m+h*s*w-t*d*w)*F,e[12]=G*F,e[13]=(g*T*o-E*x*o+E*s*_-t*T*_-g*s*y+t*x*y)*F,e[14]=(E*d*o-h*T*o-E*s*p+t*T*p+h*s*y-t*d*y)*F,e[15]=(h*x*o-g*d*o+g*s*p-t*x*p-h*s*_+t*d*_)*F,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,h=e.x,d=e.y,p=e.z,m=l*h,g=l*d;return this.set(m*h+s,m*d-o*p,m*p+o*d,0,m*d+o*p,g*d+s,g*p-o*h,0,m*p-o*d,g*p+o*h,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,h){return this.set(1,s,l,0,e,1,h,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,h=t._y,d=t._z,p=t._w,m=l+l,g=h+h,x=d+d,_=l*m,w=l*g,E=l*x,T=h*g,y=h*x,S=d*x,C=p*m,R=p*g,D=p*x,G=s.x,O=s.y,F=s.z;return o[0]=(1-(T+S))*G,o[1]=(w+D)*G,o[2]=(E-R)*G,o[3]=0,o[4]=(w-D)*O,o[5]=(1-(_+S))*O,o[6]=(y+C)*O,o[7]=0,o[8]=(E+R)*F,o[9]=(y-C)*F,o[10]=(1-(_+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Bs.set(o[0],o[1],o[2]).length();const h=Bs.set(o[4],o[5],o[6]).length(),d=Bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fi.copy(this);const m=1/l,g=1/h,x=1/d;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=x,fi.elements[9]*=x,fi.elements[10]*=x,t.setFromRotationMatrix(fi),s.x=l,s.y=h,s.z=d,this}makePerspective(e,t,s,o,l,h,d=Ki){const p=this.elements,m=2*l/(t-e),g=2*l/(s-o),x=(t+e)/(t-e),_=(s+o)/(s-o);let w,E;if(d===Ki)w=-(h+l)/(h-l),E=-2*h*l/(h-l);else if(d===Zl)w=-h/(h-l),E=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,h,d=Ki){const p=this.elements,m=1/(t-e),g=1/(s-o),x=1/(h-l),_=(t+e)*m,w=(s+o)*g;let E,T;if(d===Ki)E=(h+l)*x,T=-2*x;else if(d===Zl)E=l*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-w,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Bs=new q,fi=new Kt,j_=new q(0,0,0),H_=new q(1,1,1),Er=new q,Ml=new q,Xn=new q,Em=new Kt,Tm=new ca;class ic{constructor(e=0,t=0,s=0,o=ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],h=o[4],d=o[8],p=o[1],m=o[5],g=o[9],x=o[2],_=o[6],w=o[10];switch(t){case"XYZ":this._y=Math.asin(vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,w),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,w),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,w),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-vn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,w),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(vn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,w));break;case"XZY":this._z=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ic.DEFAULT_ORDER="XYZ";class Xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G_=0;const bm=new q,js=new ca,Vi=new Kt,El=new q,Ka=new q,V_=new q,W_=new ca,Am=new q(1,0,0),Rm=new q(0,1,0),Cm=new q(0,0,1),X_={type:"added"},q_={type:"removed"};class jn extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new q,t=new ic,s=new ca,o=new q(1,1,1);function l(){s.setFromEuler(t,!1)}function h(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?El.copy(e):El.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ka,El,this.up):Vi.lookAt(El,Ka,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),js.setFromRotationMatrix(Vi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(X_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const h=this.children[s].getObjectByProperty(e,t);if(h!==void 0)return h}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,W_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++){const d=o[l];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),x=h(e.shapes),_=h(e.skeletons),w=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),w.length>0&&(s.animations=w),E.length>0&&(s.nodes=E)}return s.object=o,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}jn.DEFAULT_UP=new q(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new q,Wi=new q,od=new q,Xi=new q,Hs=new q,Gs=new q,Pm=new q,ld=new q,cd=new q,ud=new q;class Ci{constructor(e=new q,t=new q,s=new q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),Wi.subVectors(s,t),od.subVectors(e,t);const h=pi.dot(pi),d=pi.dot(Wi),p=pi.dot(od),m=Wi.dot(Wi),g=Wi.dot(od),x=h*m-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,w=(m*p-d*g)*_,E=(h*g-d*p)*_;return l.set(1-w-E,E,w)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,o,l,h,d,p){return this.getBarycoord(e,t,s,o,Xi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Xi.x),p.addScaledVector(h,Xi.y),p.addScaledVector(d,Xi.z),p)}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),Wi.subVectors(e,t),pi.cross(Wi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let h,d;Hs.subVectors(o,s),Gs.subVectors(l,s),ld.subVectors(e,s);const p=Hs.dot(ld),m=Gs.dot(ld);if(p<=0&&m<=0)return t.copy(s);cd.subVectors(e,o);const g=Hs.dot(cd),x=Gs.dot(cd);if(g>=0&&x<=g)return t.copy(o);const _=p*x-g*m;if(_<=0&&p>=0&&g<=0)return h=p/(p-g),t.copy(s).addScaledVector(Hs,h);ud.subVectors(e,l);const w=Hs.dot(ud),E=Gs.dot(ud);if(E>=0&&w<=E)return t.copy(l);const T=w*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(s).addScaledVector(Gs,d);const y=g*E-w*x;if(y<=0&&x-g>=0&&w-E>=0)return Pm.subVectors(l,o),d=(x-g)/(x-g+(w-E)),t.copy(o).addScaledVector(Pm,d);const S=1/(y+T+_);return h=T*S,d=_*S,t.copy(s).addScaledVector(Hs,h).addScaledVector(Gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function dd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Rt.workingColorSpace){if(e=D_(e,1),t=vn(t,0,1),s=vn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,h=2*s-l;this.r=dd(h,l,e+1/3),this.g=dd(h,l,e),this.b=dd(h,l,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=an){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const h=o[1],d=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(h===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const s=qg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Rt.fromWorkingColorSpace(pn.copy(this),e),Math.round(vn(pn.r*255,0,255))*65536+Math.round(vn(pn.g*255,0,255))*256+Math.round(vn(pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,o=pn.g,l=pn.b,h=Math.max(s,o,l),d=Math.min(s,o,l);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const x=h-d;switch(m=g<=.5?x/(h+d):x/(2-h-d),h){case s:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-s)/x+2;break;case l:p=(s-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=an){Rt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,o=pn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Tl);const s=Zu(Tr.h,Tl.h,t),o=Zu(Tr.s,Tl.s,t),l=Zu(Tr.l,Tl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new je;je.NAMES=qg;let $_=0;class ro extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=no(),this.name="",this.type="Material",this.blending=ta,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(s.blending=this.blending),this.side!==Ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==Rd&&(s.blendDst=this.blendDst),this.blendEquation!==is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}if(t){const l=o(e.textures),h=o(e.images);l.length>0&&(s.textures=l),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $g extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new q,bl=new Mt;class xi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=vm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return na("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=qa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class Yg extends xi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Kg extends xi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class On extends xi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Y_=0;const ni=new Kt,hd=new jn,Vs=new q,qn=new io,Za=new io,nn=new q;class _i extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Kg:Yg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,s){return ni.makeTranslation(e,t,s),this.applyMatrix4(ni),this}scale(e,t,s){return ni.makeScale(e,t,s),this.applyMatrix4(ni),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new On(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,h=t.length;l<h;l++){const d=t[l];Za.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(qn.min,Za.min),qn.expandByPoint(nn),nn.addVectors(qn.max,Za.max),qn.expandByPoint(nn)):(qn.expandByPoint(Za.min),qn.expandByPoint(Za.max))}qn.getCenter(s);let o=0;for(let l=0,h=e.count;l<h;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,h=t.length;l<h;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)nn.fromBufferAttribute(d,m),p&&(Vs.fromBufferAttribute(e,m),nn.add(Vs)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,h=t.uv.array,d=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],g=[];for(let b=0;b<d;b++)m[b]=new q,g[b]=new q;const x=new q,_=new q,w=new q,E=new Mt,T=new Mt,y=new Mt,S=new q,C=new q;function R(b,U,le){x.fromArray(o,b*3),_.fromArray(o,U*3),w.fromArray(o,le*3),E.fromArray(h,b*2),T.fromArray(h,U*2),y.fromArray(h,le*2),_.sub(x),w.sub(x),T.sub(E),y.sub(E);const ue=1/(T.x*y.y-y.x*T.y);isFinite(ue)&&(S.copy(_).multiplyScalar(y.y).addScaledVector(w,-T.y).multiplyScalar(ue),C.copy(w).multiplyScalar(T.x).addScaledVector(_,-y.x).multiplyScalar(ue),m[b].add(S),m[U].add(S),m[le].add(S),g[b].add(C),g[U].add(C),g[le].add(C))}let D=this.groups;D.length===0&&(D=[{start:0,count:s.length}]);for(let b=0,U=D.length;b<U;++b){const le=D[b],ue=le.start,j=le.count;for(let ie=ue,J=ue+j;ie<J;ie+=3)R(s[ie+0],s[ie+1],s[ie+2])}const G=new q,O=new q,F=new q,oe=new q;function he(b){F.fromArray(l,b*3),oe.copy(F);const U=m[b];G.copy(U),G.sub(F.multiplyScalar(F.dot(U))).normalize(),O.crossVectors(oe,U);const ue=O.dot(g[b])<0?-1:1;p[b*4]=G.x,p[b*4+1]=G.y,p[b*4+2]=G.z,p[b*4+3]=ue}for(let b=0,U=D.length;b<U;++b){const le=D[b],ue=le.start,j=le.count;for(let ie=ue,J=ue+j;ie<J;ie+=3)he(s[ie+0]),he(s[ie+1]),he(s[ie+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,w=s.count;_<w;_++)s.setXYZ(_,0,0,0);const o=new q,l=new q,h=new q,d=new q,p=new q,m=new q,g=new q,x=new q;if(e)for(let _=0,w=e.count;_<w;_+=3){const E=e.getX(_+0),T=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),h.fromBufferAttribute(t,y),g.subVectors(h,l),x.subVectors(o,l),g.cross(x),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,y),d.add(g),p.add(g),m.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,w=t.count;_<w;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),h.fromBufferAttribute(t,_+2),g.subVectors(h,l),x.subVectors(o,l),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,x=d.normalized,_=new m.constructor(p.length*g);let w=0,E=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?w=p[T]*d.data.stride+d.offset:w=p[T]*g;for(let S=0;S<g;S++)_[E++]=m[w++]}return new xi(_,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let g=0,x=m.length;g<x;g++){const _=m[g],w=e(_,s);p.push(w)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,_=m.length;x<_;x++){const w=m[x];g.push(w.toJSON(e.data))}g.length>0&&(o[p]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],x=l[m];for(let _=0,w=x.length;_<w;_++)g.push(x[_].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const x=h[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Kt,Jr=new Wg,Al=new nc,Nm=new q,Ws=new q,Xs=new q,qs=new q,fd=new q,Rl=new q,Cl=new Mt,Pl=new Mt,Ll=new Mt,Dm=new q,Im=new q,Um=new q,Nl=new q,Dl=new q;class Zi extends jn{constructor(e=new _i,t=new $g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,h=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Rl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const g=d[p],x=l[p];g!==0&&(fd.fromBufferAttribute(x,e),h?Rl.addScaledVector(fd,g):Rl.addScaledVector(fd.sub(t),g))}t.add(Rl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Al.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Al,Nm)===null||Jr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Lm),!(s.boundingBox!==null&&Jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,h=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,_=l.groups,w=l.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const y=_[E],S=h[y.materialIndex],C=Math.max(y.start,w.start),R=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let D=C,G=R;D<G;D+=3){const O=d.getX(D),F=d.getX(D+1),oe=d.getX(D+2);o=Il(this,S,e,s,m,g,x,O,F,oe),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),T=Math.min(d.count,w.start+w.count);for(let y=E,S=T;y<S;y+=3){const C=d.getX(y),R=d.getX(y+1),D=d.getX(y+2);o=Il(this,h,e,s,m,g,x,C,R,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const y=_[E],S=h[y.materialIndex],C=Math.max(y.start,w.start),R=Math.min(p.count,Math.min(y.start+y.count,w.start+w.count));for(let D=C,G=R;D<G;D+=3){const O=D,F=D+1,oe=D+2;o=Il(this,S,e,s,m,g,x,O,F,oe),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),T=Math.min(p.count,w.start+w.count);for(let y=E,S=T;y<S;y+=3){const C=y,R=y+1,D=y+2;o=Il(this,h,e,s,m,g,x,C,R,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function K_(r,e,t,s,o,l,h,d){let p;if(e.side===zn?p=s.intersectTriangle(h,l,o,!0,d):p=s.intersectTriangle(o,l,h,e.side===Ur,d),p===null)return null;Dl.copy(d),Dl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Dl);return m<t.near||m>t.far?null:{distance:m,point:Dl.clone(),object:r}}function Il(r,e,t,s,o,l,h,d,p,m){r.getVertexPosition(d,Ws),r.getVertexPosition(p,Xs),r.getVertexPosition(m,qs);const g=K_(r,e,t,s,Ws,Xs,qs,Nl);if(g){o&&(Cl.fromBufferAttribute(o,d),Pl.fromBufferAttribute(o,p),Ll.fromBufferAttribute(o,m),g.uv=Ci.getInterpolation(Nl,Ws,Xs,qs,Cl,Pl,Ll,new Mt)),l&&(Cl.fromBufferAttribute(l,d),Pl.fromBufferAttribute(l,p),Ll.fromBufferAttribute(l,m),g.uv1=Ci.getInterpolation(Nl,Ws,Xs,qs,Cl,Pl,Ll,new Mt),g.uv2=g.uv1),h&&(Dm.fromBufferAttribute(h,d),Im.fromBufferAttribute(h,p),Um.fromBufferAttribute(h,m),g.normal=Ci.getInterpolation(Nl,Ws,Xs,qs,Dm,Im,Um,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new q,materialIndex:0};Ci.getNormal(Ws,Xs,qs,x.normal),g.face=x}return g}class so extends _i{constructor(e=1,t=1,s=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:h};const d=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const p=[],m=[],g=[],x=[];let _=0,w=0;E("z","y","x",-1,-1,s,t,e,h,l,0),E("z","y","x",1,-1,s,t,-e,h,l,1),E("x","z","y",1,1,e,s,t,o,h,2),E("x","z","y",1,-1,e,s,-t,o,h,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new On(m,3)),this.setAttribute("normal",new On(g,3)),this.setAttribute("uv",new On(x,2));function E(T,y,S,C,R,D,G,O,F,oe,he){const b=D/F,U=G/oe,le=D/2,ue=G/2,j=O/2,ie=F+1,J=oe+1;let ce=0,V=0;const Q=new q;for(let X=0;X<J;X++){const N=X*U-ue;for(let z=0;z<ie;z++){const de=z*b-le;Q[T]=de*C,Q[y]=N*R,Q[S]=j,m.push(Q.x,Q.y,Q.z),Q[T]=0,Q[y]=0,Q[S]=O>0?1:-1,g.push(Q.x,Q.y,Q.z),x.push(z/F),x.push(1-X/oe),ce+=1}}for(let X=0;X<oe;X++)for(let N=0;N<F;N++){const z=_+N+ie*X,de=_+N+ie*(X+1),W=_+(N+1)+ie*(X+1),ae=_+(N+1)+ie*X;p.push(z,de,ae),p.push(de,W,ae),V+=6}d.addGroup(w,V,he),w+=V,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const s=oa(r[t]);for(const o in s)e[o]=s[o]}return e}function Z_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Zg(r){return r.getRenderTarget()===null?r.outputColorSpace:Rt.workingColorSpace}const Q_={clone:oa,merge:En};var J_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J_,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?t.uniforms[o]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?t.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?t.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?t.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?t.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?t.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?t.uniforms[o]={type:"m4",value:h.toArray()}:t.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Qg extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new q,km=new Mt,Fm=new Mt;class ii extends Qg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,km,Fm),t.subVectors(Fm,km)}setViewOffset(e,t,s,o,l,h){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ku*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;l+=h.offsetX*o/p,t-=h.offsetY*s/m,o*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class ty extends jn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii($s,Ys,e,t);o.layers=this.layers,this.add(o);const l=new ii($s,Ys,e,t);l.layers=this.layers,this.add(l);const h=new ii($s,Ys,e,t);h.layers=this.layers,this.add(h);const d=new ii($s,Ys,e,t);d.layers=this.layers,this.add(d);const p=new ii($s,Ys,e,t);p.layers=this.layers,this.add(p);const m=new ii($s,Ys,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,h,d,p]=t;for(const m of t)this.remove(m);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Zl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,h,d,p,m,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,h),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,p),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(x,_,w),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Jg extends Bn{constructor(e,t,s,o,l,h,d,p,m,g){e=e!==void 0?e:[],t=t!==void 0?t:ra,super(e,t,s,o,l,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ny extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];t.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ls?an:ri),this.texture=new Jg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new so(5,5,5),l=new Pi({name:"CubemapFromEquirect",uniforms:oa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:zn,blending:Pr});l.uniforms.tEquirect.value=t;const h=new Zi(o,l),d=t.minFilter;return t.minFilter===ss&&(t.minFilter=kn),new ty(1,10,this).update(e,h),t.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(t,s,o);e.setRenderTarget(l)}}const pd=new q,iy=new q,ry=new pt;class ts{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=pd.subVectors(s,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(pd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ry.getNormalMatrix(e),o=this.coplanarPoint(pd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new nc,Ul=new q;class ev{constructor(e=new ts,t=new ts,s=new ts,o=new ts,l=new ts,h=new ts){this.planes=[e,t,s,o,l,h]}set(e,t,s,o,l,h){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(h),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ki){const s=this.planes,o=e.elements,l=o[0],h=o[1],d=o[2],p=o[3],m=o[4],g=o[5],x=o[6],_=o[7],w=o[8],E=o[9],T=o[10],y=o[11],S=o[12],C=o[13],R=o[14],D=o[15];if(s[0].setComponents(p-l,_-m,y-w,D-S).normalize(),s[1].setComponents(p+l,_+m,y+w,D+S).normalize(),s[2].setComponents(p+h,_+g,y+E,D+C).normalize(),s[3].setComponents(p-h,_-g,y-E,D-C).normalize(),s[4].setComponents(p-d,_-x,y-T,D-R).normalize(),t===Ki)s[5].setComponents(p+d,_+x,y+T,D+R).normalize();else if(t===Zl)s[5].setComponents(d,x,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tv(){let r=null,e=!1,t=null,s=null;function o(l,h){t(l,h),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function sy(r,e){const t=e.isWebGL2,s=new WeakMap;function o(m,g){const x=m.array,_=m.usage,w=x.byteLength,E=r.createBuffer();r.bindBuffer(g,E),r.bufferData(g,x,_),m.onUploadCallback();let T;if(x instanceof Float32Array)T=r.FLOAT;else if(x instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)T=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)T=r.SHORT;else if(x instanceof Uint32Array)T=r.UNSIGNED_INT;else if(x instanceof Int32Array)T=r.INT;else if(x instanceof Int8Array)T=r.BYTE;else if(x instanceof Uint8Array)T=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)T=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:E,type:T,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:w}}function l(m,g,x){const _=g.array,w=g._updateRange,E=g.updateRanges;if(r.bindBuffer(x,m),w.count===-1&&E.length===0&&r.bufferSubData(x,0,_),E.length!==0){for(let T=0,y=E.length;T<y;T++){const S=E[T];t?r.bufferSubData(x,S.start*_.BYTES_PER_ELEMENT,_,S.start,S.count):r.bufferSubData(x,S.start*_.BYTES_PER_ELEMENT,_.subarray(S.start,S.start+S.count))}g.clearUpdateRanges()}w.count!==-1&&(t?r.bufferSubData(x,w.offset*_.BYTES_PER_ELEMENT,_,w.offset,w.count):r.bufferSubData(x,w.offset*_.BYTES_PER_ELEMENT,_.subarray(w.offset,w.offset+w.count)),w.count=-1),g.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=s.get(m);g&&(r.deleteBuffer(g.buffer),s.delete(m))}function p(m,g){if(m.isGLBufferAttribute){const _=s.get(m);(!_||_.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const x=s.get(m);if(x===void 0)s.set(m,o(m,g));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(x.buffer,m,g),x.version=m.version}}return{get:h,remove:d,update:p}}class rc extends _i{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,h=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,g=p+1,x=e/d,_=t/p,w=[],E=[],T=[],y=[];for(let S=0;S<g;S++){const C=S*_-h;for(let R=0;R<m;R++){const D=R*x-l;E.push(D,-C,0),T.push(0,0,1),y.push(R/d),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let C=0;C<d;C++){const R=C+m*S,D=C+m*(S+1),G=C+1+m*(S+1),O=C+1+m*S;w.push(R,D,O),w.push(D,G,O)}this.setIndex(w),this.setAttribute("position",new On(E,3)),this.setAttribute("normal",new On(T,3)),this.setAttribute("uv",new On(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_y=`#ifdef USE_IRIDESCENCE
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
#endif`,yy=`#ifdef USE_BUMPMAP
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`
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
}`,Oy=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
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
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rS=`PhysicalMaterial material;
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
#endif`,sS=`struct PhysicalMaterial {
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
}`,aS=`
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
#endif`,oS=`#if defined( RE_IndirectDiffuse )
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gS=`#if defined( USE_POINTS_UV )
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
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
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
#endif`,SS=`#ifdef USE_MORPHTARGETS
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
#endif`,wS=`#ifdef USE_MORPHTARGETS
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
#endif`,MS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ES=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
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
#endif`,CS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VS=`float getShadowMask() {
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
}`,WS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XS=`#ifdef USE_SKINNING
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
#endif`,qS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$S=`#ifdef USE_SKINNING
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
#endif`,YS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JS=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
}`,fw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,xw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#define LAMBERT
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
}`,ww=`#define LAMBERT
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
}`,Mw=`#define MATCAP
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
}`,Ew=`#define MATCAP
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
}`,Tw=`#define NORMAL
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
}`,bw=`#define NORMAL
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
}`,Aw=`#define PHONG
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
}`,Rw=`#define PHONG
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
}`,Cw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
}`,Lw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Dw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Uw=`#include <common>
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
}`,kw=`uniform vec3 color;
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
}`,Fw=`uniform float rotation;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:ay,alphahash_pars_fragment:oy,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:dy,aomap_fragment:hy,aomap_pars_fragment:fy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:vy,bsdfs:xy,iridescence_fragment:_y,bumpmap_pars_fragment:yy,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:My,clipping_planes_vertex:Ey,color_fragment:Ty,color_pars_fragment:by,color_pars_vertex:Ay,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Ny,displacementmap_vertex:Dy,emissivemap_fragment:Iy,emissivemap_pars_fragment:Uy,colorspace_fragment:ky,colorspace_pars_fragment:Fy,envmap_fragment:Oy,envmap_common_pars_fragment:zy,envmap_pars_fragment:By,envmap_pars_vertex:jy,envmap_physical_pars_fragment:Jy,envmap_vertex:Hy,fog_vertex:Gy,fog_pars_vertex:Vy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_fragment:$y,lightmap_pars_fragment:Yy,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:Zy,lights_pars_begin:Qy,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:rS,lights_physical_pars_fragment:sS,lights_fragment_begin:aS,lights_fragment_maps:oS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:hS,map_fragment:fS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:xS,morphcolor_vertex:_S,morphnormal_vertex:yS,morphtarget_pars_vertex:SS,morphtarget_vertex:wS,normal_fragment_begin:MS,normal_fragment_maps:ES,normal_pars_fragment:TS,normal_pars_vertex:bS,normal_vertex:AS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:CS,clearcoat_normal_fragment_maps:PS,clearcoat_pars_fragment:LS,iridescence_pars_fragment:NS,opaque_fragment:DS,packing:IS,premultiplied_alpha_fragment:US,project_vertex:kS,dithering_fragment:FS,dithering_pars_fragment:OS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:HS,shadowmap_vertex:GS,shadowmask_pars_fragment:VS,skinbase_vertex:WS,skinning_pars_vertex:XS,skinning_vertex:qS,skinnormal_vertex:$S,specularmap_fragment:YS,specularmap_pars_fragment:KS,tonemapping_fragment:ZS,tonemapping_pars_fragment:QS,transmission_fragment:JS,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:rw,background_vert:sw,background_frag:aw,backgroundCube_vert:ow,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:dw,depth_frag:hw,distanceRGBA_vert:fw,distanceRGBA_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:vw,linedashed_frag:xw,meshbasic_vert:_w,meshbasic_frag:yw,meshlambert_vert:Sw,meshlambert_frag:ww,meshmatcap_vert:Mw,meshmatcap_frag:Ew,meshnormal_vert:Tw,meshnormal_frag:bw,meshphong_vert:Aw,meshphong_frag:Rw,meshphysical_vert:Cw,meshphysical_frag:Pw,meshtoon_vert:Lw,meshtoon_frag:Nw,points_vert:Dw,points_frag:Iw,shadow_vert:Uw,shadow_frag:kw,sprite_vert:Fw,sprite_frag:Ow},Re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ri={basic:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:En([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:En([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:En([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:En([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:En([Re.points,Re.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:En([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:En([Re.common,Re.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:En([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:En([Re.sprite,Re.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:En([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:En([Re.lights,Re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ri.physical={uniforms:En([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const kl={r:0,b:0,g:0};function zw(r,e,t,s,o,l,h){const d=new je(0);let p=l===!0?0:1,m,g,x=null,_=0,w=null;function E(y,S){let C=!1,R=S.isScene===!0?S.background:null;R&&R.isTexture&&(R=(S.backgroundBlurriness>0?t:e).get(R)),R===null?T(d,p):R&&R.isColor&&(T(R,1),C=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||C)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ec)?(g===void 0&&(g=new Zi(new so(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:oa(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,g.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,(x!==R||_!==R.version||w!==r.toneMapping)&&(g.material.needsUpdate=!0,x=R,_=R.version,w=r.toneMapping),g.layers.enableAll(),y.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Zi(new rc(2,2),new Pi({name:"BackgroundMaterial",uniforms:oa(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||_!==R.version||w!==r.toneMapping)&&(m.material.needsUpdate=!0,x=R,_=R.version,w=r.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function T(y,S){y.getRGB(kl,Zg(r)),s.buffers.color.setClear(kl.r,kl.g,kl.b,S,h)}return{getClearColor:function(){return d},setClearColor:function(y,S=1){d.set(y),p=S,T(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,T(d,p)},render:E}}function Bw(r,e,t,s){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),h=s.isWebGL2||l!==null,d={},p=y(null);let m=p,g=!1;function x(j,ie,J,ce,V){let Q=!1;if(h){const X=T(ce,J,ie);m!==X&&(m=X,w(m.object)),Q=S(j,ce,J,V),Q&&C(j,ce,J,V)}else{const X=ie.wireframe===!0;(m.geometry!==ce.id||m.program!==J.id||m.wireframe!==X)&&(m.geometry=ce.id,m.program=J.id,m.wireframe=X,Q=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(Q||g)&&(g=!1,oe(j,ie,J,ce),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function _(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function w(j){return s.isWebGL2?r.bindVertexArray(j):l.bindVertexArrayOES(j)}function E(j){return s.isWebGL2?r.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function T(j,ie,J){const ce=J.wireframe===!0;let V=d[j.id];V===void 0&&(V={},d[j.id]=V);let Q=V[ie.id];Q===void 0&&(Q={},V[ie.id]=Q);let X=Q[ce];return X===void 0&&(X=y(_()),Q[ce]=X),X}function y(j){const ie=[],J=[],ce=[];for(let V=0;V<o;V++)ie[V]=0,J[V]=0,ce[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:J,attributeDivisors:ce,object:j,attributes:{},index:null}}function S(j,ie,J,ce){const V=m.attributes,Q=ie.attributes;let X=0;const N=J.getAttributes();for(const z in N)if(N[z].location>=0){const W=V[z];let ae=Q[z];if(ae===void 0&&(z==="instanceMatrix"&&j.instanceMatrix&&(ae=j.instanceMatrix),z==="instanceColor"&&j.instanceColor&&(ae=j.instanceColor)),W===void 0||W.attribute!==ae||ae&&W.data!==ae.data)return!0;X++}return m.attributesNum!==X||m.index!==ce}function C(j,ie,J,ce){const V={},Q=ie.attributes;let X=0;const N=J.getAttributes();for(const z in N)if(N[z].location>=0){let W=Q[z];W===void 0&&(z==="instanceMatrix"&&j.instanceMatrix&&(W=j.instanceMatrix),z==="instanceColor"&&j.instanceColor&&(W=j.instanceColor));const ae={};ae.attribute=W,W&&W.data&&(ae.data=W.data),V[z]=ae,X++}m.attributes=V,m.attributesNum=X,m.index=ce}function R(){const j=m.newAttributes;for(let ie=0,J=j.length;ie<J;ie++)j[ie]=0}function D(j){G(j,0)}function G(j,ie){const J=m.newAttributes,ce=m.enabledAttributes,V=m.attributeDivisors;J[j]=1,ce[j]===0&&(r.enableVertexAttribArray(j),ce[j]=1),V[j]!==ie&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ie),V[j]=ie)}function O(){const j=m.newAttributes,ie=m.enabledAttributes;for(let J=0,ce=ie.length;J<ce;J++)ie[J]!==j[J]&&(r.disableVertexAttribArray(J),ie[J]=0)}function F(j,ie,J,ce,V,Q,X){X===!0?r.vertexAttribIPointer(j,ie,J,V,Q):r.vertexAttribPointer(j,ie,J,ce,V,Q)}function oe(j,ie,J,ce){if(s.isWebGL2===!1&&(j.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const V=ce.attributes,Q=J.getAttributes(),X=ie.defaultAttributeValues;for(const N in Q){const z=Q[N];if(z.location>=0){let de=V[N];if(de===void 0&&(N==="instanceMatrix"&&j.instanceMatrix&&(de=j.instanceMatrix),N==="instanceColor"&&j.instanceColor&&(de=j.instanceColor)),de!==void 0){const W=de.normalized,ae=de.itemSize,fe=t.get(de);if(fe===void 0)continue;const Ae=fe.buffer,Te=fe.type,Ee=fe.bytesPerElement,Qe=s.isWebGL2===!0&&(Te===r.INT||Te===r.UNSIGNED_INT||de.gpuType===Ng);if(de.isInterleavedBufferAttribute){const et=de.data,K=et.stride,zt=de.offset;if(et.isInstancedInterleavedBuffer){for(let Ve=0;Ve<z.locationSize;Ve++)G(z.location+Ve,et.meshPerAttribute);j.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ve=0;Ve<z.locationSize;Ve++)D(z.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ve=0;Ve<z.locationSize;Ve++)F(z.location+Ve,ae/z.locationSize,Te,W,K*Ee,(zt+ae/z.locationSize*Ve)*Ee,Qe)}else{if(de.isInstancedBufferAttribute){for(let et=0;et<z.locationSize;et++)G(z.location+et,de.meshPerAttribute);j.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let et=0;et<z.locationSize;et++)D(z.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let et=0;et<z.locationSize;et++)F(z.location+et,ae/z.locationSize,Te,W,ae*Ee,ae/z.locationSize*et*Ee,Qe)}}else if(X!==void 0){const W=X[N];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(z.location,W);break;case 3:r.vertexAttrib3fv(z.location,W);break;case 4:r.vertexAttrib4fv(z.location,W);break;default:r.vertexAttrib1fv(z.location,W)}}}}O()}function he(){le();for(const j in d){const ie=d[j];for(const J in ie){const ce=ie[J];for(const V in ce)E(ce[V].object),delete ce[V];delete ie[J]}delete d[j]}}function b(j){if(d[j.id]===void 0)return;const ie=d[j.id];for(const J in ie){const ce=ie[J];for(const V in ce)E(ce[V].object),delete ce[V];delete ie[J]}delete d[j.id]}function U(j){for(const ie in d){const J=d[ie];if(J[j.id]===void 0)continue;const ce=J[j.id];for(const V in ce)E(ce[V].object),delete ce[V];delete J[j.id]}}function le(){ue(),g=!0,m!==p&&(m=p,w(m.object))}function ue(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:x,reset:le,resetDefaultState:ue,dispose:he,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:D,disableUnusedAttributes:O}}function jw(r,e,t,s){const o=s.isWebGL2;let l;function h(g){l=g}function d(g,x){r.drawArrays(l,g,x),t.update(x,l,1)}function p(g,x,_){if(_===0)return;let w,E;if(o)w=r,E="drawArraysInstanced";else if(w=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[E](l,g,x,_),t.update(x,l,_)}function m(g,x,_){if(_===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let E=0;E<_;E++)this.render(g[E],x[E]);else{w.multiDrawArraysWEBGL(l,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=x[T];t.update(E,l,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function Hw(r,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let d=t.precision!==void 0?t.precision:"highp";const p=l(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),T=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,D=h||e.has("OES_texture_float"),G=R&&D,O=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:E,maxAttributes:T,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:C,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:G,maxSamples:O}}function Gw(r){const e=this;let t=null,s=0,o=!1,l=!1;const h=new ts,d=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const w=x.length!==0||_||s!==0||o;return o=_,s=x.length,w},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=g(x,_,0)},this.setState=function(x,_,w){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!o||E===null||E.length===0||l&&!y)l?g(null):m();else{const C=l?0:s,R=C*4;let D=S.clippingState||null;p.value=D,D=g(E,_,R,w);for(let G=0;G!==R;++G)D[G]=t[G];S.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,_,w,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=p.value,E!==!0||y===null){const S=w+T*4,C=_.matrixWorldInverse;d.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let R=0,D=w;R!==T;++R,D+=4)h.copy(x[R]).applyMatrix4(C,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function Vw(r){let e=new WeakMap;function t(h,d){return d===Cd?h.mapping=ra:d===Pd&&(h.mapping=sa),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Cd||d===Pd)if(e.has(h)){const p=e.get(h).texture;return t(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new ny(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",o),t(m.texture,h.mapping)}else return null}}return h}function o(h){const d=h.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Ww extends Qg{constructor(e=-1,t=1,s=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,h=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,h=l+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Js=4,Om=[.125,.215,.35,.446,.526,.582],rs=20,md=new Ww,zm=new je;let gd=null,vd=0,xd=0;const ns=(1+Math.sqrt(5))/2,Ks=1/ns,Bm=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,ns,Ks),new q(0,ns,-Ks),new q(Ks,0,ns),new q(-Ks,0,ns),new q(ns,Ks,0),new q(-ns,Ks,0)];class jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,xd),e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:to,format:vi,colorSpace:Qi,depthBuffer:!1},o=Hm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xw(l)),this._blurMaterial=qw(l,e,t)}return o}_compileMaterial(e){const t=new Zi(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,s,o){const d=new ii(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,_=g.toneMapping;g.getClearColor(zm),g.toneMapping=Lr,g.autoClear=!1;const w=new $g({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),E=new Zi(new so,w);let T=!1;const y=e.background;y?y.isColor&&(w.color.copy(y),e.background=null,T=!0):(w.color.copy(zm),T=!0);for(let S=0;S<6;S++){const C=S%3;C===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):C===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const R=this._cubeSize;Fl(o,C*R,S>2?R:0,R,R),g.setRenderTarget(o),T&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ra||e.mapping===sa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=o?this._cubemapMaterial:this._equirectMaterial,h=new Zi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Fl(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(h,md)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Bm[(o-1)%Bm.length];this._blur(e,o-1,o,l,h)}t.autoClear=s}_blur(e,t,s,o,l){const h=this._pingPongRenderTarget;this._halfBlur(e,h,t,s,o,"latitudinal",l),this._halfBlur(h,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Zi(this._lodPlanes[o],m),_=m.uniforms,w=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*w):2*Math.PI/(2*rs-1),T=l/E,y=isFinite(l)?1+Math.floor(g*T):rs;y>rs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rs}`);const S=[];let C=0;for(let F=0;F<rs;++F){const oe=F/T,he=Math.exp(-oe*oe/2);S.push(he),F===0?C+=he:F<y&&(C+=2*he)}for(let F=0;F<S.length;F++)S[F]=S[F]/C;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:R}=this;_.dTheta.value=E,_.mipInt.value=R-s;const D=this._sizeLods[o],G=3*D*(o>R-Js?o-R+Js:0),O=4*(this._cubeSize-D);Fl(t,G,O,3*D,2*D),p.setRenderTarget(t),p.render(x,md)}}function Xw(r){const e=[],t=[],s=[];let o=r;const l=r-Js+1+Om.length;for(let h=0;h<l;h++){const d=Math.pow(2,o);t.push(d);let p=1/d;h>r-Js?p=Om[h-r+Js-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,x=1+m,_=[g,g,x,g,x,x,g,g,x,x,g,x],w=6,E=6,T=3,y=2,S=1,C=new Float32Array(T*E*w),R=new Float32Array(y*E*w),D=new Float32Array(S*E*w);for(let O=0;O<w;O++){const F=O%3*2/3-1,oe=O>2?0:-1,he=[F,oe,0,F+2/3,oe,0,F+2/3,oe+1,0,F,oe,0,F+2/3,oe+1,0,F,oe+1,0];C.set(he,T*E*O),R.set(_,y*E*O);const b=[O,O,O,O,O,O];D.set(b,S*E*O)}const G=new _i;G.setAttribute("position",new xi(C,T)),G.setAttribute("uv",new xi(R,y)),G.setAttribute("faceIndex",new xi(D,S)),e.push(G),o>Js&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Hm(r,e,t){const s=new ds(r,e,t);return s.texture.mapping=ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function qw(r,e,t){const s=new Float32Array(rs),o=new q(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Gm(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Vm(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function $w(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Cd||p===Pd,g=p===ra||p===sa;if(m||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=e.get(d);return t===null&&(t=new jm(r)),x=m?t.fromEquirectangular(d,x):t.fromCubemap(d,x),e.set(d,x),x.texture}else{if(e.has(d))return e.get(d).texture;{const x=d.image;if(m&&x&&x.height>0||g&&x&&o(x)){t===null&&(t=new jm(r));const _=m?t.fromEquirectangular(d):t.fromCubemap(d);return e.set(d,_),d.addEventListener("dispose",l),_.texture}else return null}}}return d}function o(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:h}}function Yw(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function Kw(r,e,t,s){const o={},l=new WeakMap;function h(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let y=0,S=T.length;y<S;y++)e.remove(T[y])}_.removeEventListener("dispose",h),delete o[_.id];const w=l.get(_);w&&(e.remove(w),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",h),o[_.id]=!0,t.memory.geometries++),_}function p(x){const _=x.attributes;for(const E in _)e.update(_[E],r.ARRAY_BUFFER);const w=x.morphAttributes;for(const E in w){const T=w[E];for(let y=0,S=T.length;y<S;y++)e.update(T[y],r.ARRAY_BUFFER)}}function m(x){const _=[],w=x.index,E=x.attributes.position;let T=0;if(w!==null){const C=w.array;T=w.version;for(let R=0,D=C.length;R<D;R+=3){const G=C[R+0],O=C[R+1],F=C[R+2];_.push(G,O,O,F,F,G)}}else if(E!==void 0){const C=E.array;T=E.version;for(let R=0,D=C.length/3-1;R<D;R+=3){const G=R+0,O=R+1,F=R+2;_.push(G,O,O,F,F,G)}}else return;const y=new(jg(_)?Kg:Yg)(_,1);y.version=T;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function g(x){const _=l.get(x);if(_){const w=x.index;w!==null&&_.version<w.version&&m(x)}else m(x);return l.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function Zw(r,e,t,s){const o=s.isWebGL2;let l;function h(w){l=w}let d,p;function m(w){d=w.type,p=w.bytesPerElement}function g(w,E){r.drawElements(l,E,d,w*p),t.update(E,l,1)}function x(w,E,T){if(T===0)return;let y,S;if(o)y=r,S="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[S](l,E,d,w*p,T),t.update(E,l,T)}function _(w,E,T){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<T;S++)this.render(w[S]/p,E[S]);else{y.multiDrawElementsWEBGL(l,E,0,d,w,0,T);let S=0;for(let C=0;C<T;C++)S+=E[C];t.update(S,l,1)}}this.setMode=h,this.setIndex=m,this.render=g,this.renderInstances=x,this.renderMultiDraw=_}function Qw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,h,d){switch(t.calls++,h){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function Jw(r,e){return r[0]-e[0]}function eM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function tM(r,e,t){const s={},o=new Float32Array(8),l=new WeakMap,h=new on,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,g,x){const _=m.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=E!==void 0?E.length:0;let y=l.get(g);if(y===void 0||y.count!==T){let ie=function(){ue.dispose(),l.delete(g),g.removeEventListener("dispose",ie)};var w=ie;y!==void 0&&y.texture.dispose();const R=g.morphAttributes.position!==void 0,D=g.morphAttributes.normal!==void 0,G=g.morphAttributes.color!==void 0,O=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],oe=g.morphAttributes.color||[];let he=0;R===!0&&(he=1),D===!0&&(he=2),G===!0&&(he=3);let b=g.attributes.position.count*he,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const le=new Float32Array(b*U*4*T),ue=new Vg(le,b,U,T);ue.type=Yi,ue.needsUpdate=!0;const j=he*4;for(let J=0;J<T;J++){const ce=O[J],V=F[J],Q=oe[J],X=b*U*4*J;for(let N=0;N<ce.count;N++){const z=N*j;R===!0&&(h.fromBufferAttribute(ce,N),le[X+z+0]=h.x,le[X+z+1]=h.y,le[X+z+2]=h.z,le[X+z+3]=0),D===!0&&(h.fromBufferAttribute(V,N),le[X+z+4]=h.x,le[X+z+5]=h.y,le[X+z+6]=h.z,le[X+z+7]=0),G===!0&&(h.fromBufferAttribute(Q,N),le[X+z+8]=h.x,le[X+z+9]=h.y,le[X+z+10]=h.z,le[X+z+11]=Q.itemSize===4?h.w:1)}}y={count:T,texture:ue,size:new Mt(b,U)},l.set(g,y),g.addEventListener("dispose",ie)}let S=0;for(let R=0;R<_.length;R++)S+=_[R];const C=g.morphTargetsRelative?1:1-S;x.getUniforms().setValue(r,"morphTargetBaseInfluence",C),x.getUniforms().setValue(r,"morphTargetInfluences",_),x.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const E=_===void 0?0:_.length;let T=s[g.id];if(T===void 0||T.length!==E){T=[];for(let D=0;D<E;D++)T[D]=[D,0];s[g.id]=T}for(let D=0;D<E;D++){const G=T[D];G[0]=D,G[1]=_[D]}T.sort(eM);for(let D=0;D<8;D++)D<E&&T[D][1]?(d[D][0]=T[D][0],d[D][1]=T[D][1]):(d[D][0]=Number.MAX_SAFE_INTEGER,d[D][1]=0);d.sort(Jw);const y=g.morphAttributes.position,S=g.morphAttributes.normal;let C=0;for(let D=0;D<8;D++){const G=d[D],O=G[0],F=G[1];O!==Number.MAX_SAFE_INTEGER&&F?(y&&g.getAttribute("morphTarget"+D)!==y[O]&&g.setAttribute("morphTarget"+D,y[O]),S&&g.getAttribute("morphNormal"+D)!==S[O]&&g.setAttribute("morphNormal"+D,S[O]),o[D]=F,C+=F):(y&&g.hasAttribute("morphTarget"+D)===!0&&g.deleteAttribute("morphTarget"+D),S&&g.hasAttribute("morphNormal"+D)===!0&&g.deleteAttribute("morphNormal"+D),o[D]=0)}const R=g.morphTargetsRelative?1:1-C;x.getUniforms().setValue(r,"morphTargetBaseInfluence",R),x.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:p}}function nM(r,e,t,s){let o=new WeakMap;function l(p){const m=s.render.frame,g=p.geometry,x=e.get(p,g);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return x}function h(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:h}}class nv extends Bn{constructor(e,t,s,o,l,h,d,p,m,g){if(g=g!==void 0?g:os,g!==os&&g!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===os&&(s=Cr),s===void 0&&g===aa&&(s=as),super(null,o,l,h,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Tn,this.minFilter=p!==void 0?p:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const iv=new Bn,rv=new nv(1,1);rv.compareFunction=Bg;const sv=new Vg,av=new z_,ov=new Jg,Wm=[],Xm=[],qm=new Float32Array(16),$m=new Float32Array(9),Ym=new Float32Array(4);function ua(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Wm[o];if(l===void 0&&(l=new Float32Array(o),Wm[o]=l),e!==0){s.toArray(l,0);for(let h=1,d=0;h!==e;++h)d+=t,r[h].toArray(l,d)}return l}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function sc(r,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function iM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function oM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Ym.set(s),r.uniformMatrix2fv(this.addr,!1,Ym),Qt(t,s)}}function lM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;$m.set(s),r.uniformMatrix3fv(this.addr,!1,$m),Qt(t,s)}}function cM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;qm.set(s),r.uniformMatrix4fv(this.addr,!1,qm),Qt(t,s)}}function uM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function pM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function gM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function vM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function xM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);const l=this.type===r.SAMPLER_2D_SHADOW?rv:iv;t.setTexture2D(e||l,o)}function _M(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||av,o)}function yM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||ov,o)}function SM(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||sv,o)}function wM(r){switch(r){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return aM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return dM;case 35668:case 35672:return hM;case 35669:case 35673:return fM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return SM}}function MM(r,e){r.uniform1fv(this.addr,e)}function EM(r,e){const t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function TM(r,e){const t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function bM(r,e){const t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function AM(r,e){const t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function RM(r,e){const t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function CM(r,e){const t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function PM(r,e){r.uniform1iv(this.addr,e)}function LM(r,e){r.uniform2iv(this.addr,e)}function NM(r,e){r.uniform3iv(this.addr,e)}function DM(r,e){r.uniform4iv(this.addr,e)}function IM(r,e){r.uniform1uiv(this.addr,e)}function UM(r,e){r.uniform2uiv(this.addr,e)}function kM(r,e){r.uniform3uiv(this.addr,e)}function FM(r,e){r.uniform4uiv(this.addr,e)}function OM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2D(e[h]||iv,l[h])}function zM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture3D(e[h]||av,l[h])}function BM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTextureCube(e[h]||ov,l[h])}function jM(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2DArray(e[h]||sv,l[h])}function HM(r){switch(r){case 5126:return MM;case 35664:return EM;case 35665:return TM;case 35666:return bM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return NM;case 35669:case 35673:return DM;case 5125:return IM;case 36294:return UM;case 36295:return kM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return jM}}class GM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=wM(t.type)}}class VM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HM(t.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Km(r,e){r.seq.push(e),r.map[e.id]=e}function XM(r,e,t){const s=r.name,o=s.length;for(_d.lastIndex=0;;){const l=_d.exec(s),h=_d.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===o){Km(t,m===void 0?new GM(d,r,e):new VM(d,r,e));break}else{let x=t.map[d];x===void 0&&(x=new WM(d),Km(t,x)),t=x}}}class Wl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),h=e.getUniformLocation(t,l.name);XM(l,h,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,h=t.length;l!==h;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const h=e[o];h.id in t&&s.push(h)}return s}}function Zm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const qM=37297;let $M=0;function YM(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let h=o;h<l;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${t[h]}`)}return s.join(`
`)}function KM(r){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(r);let s;switch(e===t?s="":e===Kl&&t===Yl?s="LinearDisplayP3ToLinearSRGB":e===Yl&&t===Kl&&(s="LinearSRGBToLinearDisplayP3"),r){case Qi:case tc:return[s,"LinearTransferOETF"];case an:case qd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Qm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const h=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+YM(r.getShaderSource(e),h)}else return o}function ZM(r,e){const t=KM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function QM(r,e){let t;switch(e){case c_:t="Linear";break;case u_:t="Reinhard";break;case d_:t="OptimizedCineon";break;case Pg:t="ACESFilmic";break;case f_:t="AgX";break;case h_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ea).join(`
`)}function eE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function tE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function nE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),h=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[h]={type:l.type,location:r.getAttribLocation(e,h),locationSize:d}}return t}function ea(r){return r!==""}function Jm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(iE,sE)}const rE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sE(r,e){let t=dt[e];if(t===void 0){const s=rE.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kd(t)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(r){return r.replace(aE,oE)}function oE(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ng(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function lE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function cE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ra:case sa:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function dE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cg:e="ENVMAP_BLENDING_MULTIPLY";break;case o_:e="ENVMAP_BLENDING_MIX";break;case l_:e="ENVMAP_BLENDING_ADD";break}return e}function hE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function fE(r,e,t,s){const o=r.getContext(),l=t.defines;let h=t.vertexShader,d=t.fragmentShader;const p=lE(t),m=cE(t),g=uE(t),x=dE(t),_=hE(t),w=t.isWebGL2?"":JM(t),E=eE(t),T=tE(l),y=o.createProgram();let S,C,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ea).join(`
`),S.length>0&&(S+=`
`),C=[w,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ea).join(`
`),C.length>0&&(C+=`
`)):(S=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),C=[w,ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?dt.tonemapping_pars_fragment:"",t.toneMapping!==Lr?QM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),h=kd(h),h=Jm(h,t),h=eg(h,t),d=kd(d),d=Jm(d,t),d=eg(d,t),h=tg(h),d=tg(d),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const D=R+S+h,G=R+C+d,O=Zm(o,o.VERTEX_SHADER,D),F=Zm(o,o.FRAGMENT_SHADER,G);o.attachShader(y,O),o.attachShader(y,F),t.index0AttributeName!==void 0?o.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function oe(le){if(r.debug.checkShaderErrors){const ue=o.getProgramInfoLog(y).trim(),j=o.getShaderInfoLog(O).trim(),ie=o.getShaderInfoLog(F).trim();let J=!0,ce=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,y,O,F);else{const V=Qm(o,O,"vertex"),Q=Qm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+le.name+`
Material Type: `+le.type+`

Program Info Log: `+ue+`
`+V+`
`+Q)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(j===""||ie==="")&&(ce=!1);ce&&(le.diagnostics={runnable:J,programLog:ue,vertexShader:{log:j,prefix:S},fragmentShader:{log:ie,prefix:C}})}o.deleteShader(O),o.deleteShader(F),he=new Wl(o,y),b=nE(o,y)}let he;this.getUniforms=function(){return he===void 0&&oe(this),he};let b;this.getAttributes=function(){return b===void 0&&oe(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(y,qM)),U},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=F,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new gE(e),t.set(e,s)),s}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function vE(r,e,t,s,o,l,h){const d=new Xg,p=new mE,m=new Set,g=[],x=o.isWebGL2,_=o.logarithmicDepthBuffer,w=o.vertexTextures;let E=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return m.add(b),b===0?"uv":`uv${b}`}function S(b,U,le,ue,j){const ie=ue.fog,J=j.geometry,ce=b.isMeshStandardMaterial?ue.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),Q=V&&V.mapping===ec?V.image.height:null,X=T[b.type];b.precision!==null&&(E=o.getMaxPrecision(b.precision),E!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",E,"instead."));const N=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,z=N!==void 0?N.length:0;let de=0;J.morphAttributes.position!==void 0&&(de=1),J.morphAttributes.normal!==void 0&&(de=2),J.morphAttributes.color!==void 0&&(de=3);let W,ae,fe,Ae;if(X){const bt=Ri[X];W=bt.vertexShader,ae=bt.fragmentShader}else W=b.vertexShader,ae=b.fragmentShader,p.update(b),fe=p.getVertexShaderID(b),Ae=p.getFragmentShaderID(b);const Te=r.getRenderTarget(),Ee=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,et=!!b.map,K=!!b.matcap,zt=!!V,Ve=!!b.aoMap,tt=!!b.lightMap,Ge=!!b.bumpMap,Ct=!!b.normalMap,at=!!b.displacementMap,L=!!b.emissiveMap,A=!!b.metalnessMap,ee=!!b.roughnessMap,_e=b.anisotropy>0,ve=b.clearcoat>0,ye=b.iridescence>0,ze=b.sheen>0,Ce=b.transmission>0,Ie=_e&&!!b.anisotropyMap,$e=ve&&!!b.clearcoatMap,ot=ve&&!!b.clearcoatNormalMap,ge=ve&&!!b.clearcoatRoughnessMap,mt=ye&&!!b.iridescenceMap,ht=ye&&!!b.iridescenceThicknessMap,nt=ze&&!!b.sheenColorMap,We=ze&&!!b.sheenRoughnessMap,ke=!!b.specularMap,rt=!!b.specularColorMap,xt=!!b.specularIntensityMap,Tt=Ce&&!!b.transmissionMap,ct=Ce&&!!b.thicknessMap,Et=!!b.gradientMap,k=!!b.alphaMap,Se=b.alphaTest>0,Me=!!b.alphaHash,Oe=!!b.extensions;let qe=Lr;b.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(qe=r.toneMapping);const yt={isWebGL2:x,shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:ae,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:E,batching:Qe,instancing:Ee,instancingColor:Ee&&j.instanceColor!==null,supportsVertexTextures:w,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Qi,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:K,envMap:zt,envMapMode:zt&&V.mapping,envMapCubeUVHeight:Q,aoMap:Ve,lightMap:tt,bumpMap:Ge,normalMap:Ct,displacementMap:w&&at,emissiveMap:L,normalMapObjectSpace:Ct&&b.normalMapType===T_,normalMapTangentSpace:Ct&&b.normalMapType===E_,metalnessMap:A,roughnessMap:ee,anisotropy:_e,anisotropyMap:Ie,clearcoat:ve,clearcoatMap:$e,clearcoatNormalMap:ot,clearcoatRoughnessMap:ge,iridescence:ye,iridescenceMap:mt,iridescenceThicknessMap:ht,sheen:ze,sheenColorMap:nt,sheenRoughnessMap:We,specularMap:ke,specularColorMap:rt,specularIntensityMap:xt,transmission:Ce,transmissionMap:Tt,thicknessMap:ct,gradientMap:Et,opaque:b.transparent===!1&&b.blending===ta&&b.alphaToCoverage===!1,alphaMap:k,alphaTest:Se,alphaHash:Me,combine:b.combine,mapUv:et&&y(b.map.channel),aoMapUv:Ve&&y(b.aoMap.channel),lightMapUv:tt&&y(b.lightMap.channel),bumpMapUv:Ge&&y(b.bumpMap.channel),normalMapUv:Ct&&y(b.normalMap.channel),displacementMapUv:at&&y(b.displacementMap.channel),emissiveMapUv:L&&y(b.emissiveMap.channel),metalnessMapUv:A&&y(b.metalnessMap.channel),roughnessMapUv:ee&&y(b.roughnessMap.channel),anisotropyMapUv:Ie&&y(b.anisotropyMap.channel),clearcoatMapUv:$e&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:We&&y(b.sheenRoughnessMap.channel),specularMapUv:ke&&y(b.specularMap.channel),specularColorMapUv:rt&&y(b.specularColorMap.channel),specularIntensityMapUv:xt&&y(b.specularIntensityMap.channel),transmissionMapUv:Tt&&y(b.transmissionMap.channel),thicknessMapUv:ct&&y(b.thicknessMap.channel),alphaMapUv:k&&y(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ct||_e),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(et||k),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:j.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:de,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&le.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$i,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Oe&&b.extensions.derivatives===!0,extensionFragDepth:Oe&&b.extensions.fragDepth===!0,extensionDrawBuffers:Oe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Oe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&b.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return yt.vertexUv1s=m.has(1),yt.vertexUv2s=m.has(2),yt.vertexUv3s=m.has(3),m.clear(),yt}function C(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const le in b.defines)U.push(le),U.push(b.defines[le]);return b.isRawShaderMaterial===!1&&(R(U,b),D(U,b),U.push(r.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function R(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function D(b,U){d.disableAll(),U.isWebGL2&&d.enable(0),U.supportsVertexTextures&&d.enable(1),U.instancing&&d.enable(2),U.instancingColor&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),b.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.skinning&&d.enable(4),U.morphTargets&&d.enable(5),U.morphNormals&&d.enable(6),U.morphColors&&d.enable(7),U.premultipliedAlpha&&d.enable(8),U.shadowMapEnabled&&d.enable(9),U.useLegacyLights&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.alphaToCoverage&&d.enable(20),b.push(d.mask)}function G(b){const U=T[b.type];let le;if(U){const ue=Ri[U];le=Q_.clone(ue.uniforms)}else le=b.uniforms;return le}function O(b,U){let le;for(let ue=0,j=g.length;ue<j;ue++){const ie=g[ue];if(ie.cacheKey===U){le=ie,++le.usedTimes;break}}return le===void 0&&(le=new fE(r,U,b,l),g.push(le)),le}function F(b){if(--b.usedTimes===0){const U=g.indexOf(b);g[U]=g[g.length-1],g.pop(),b.destroy()}}function oe(b){p.remove(b)}function he(){p.dispose()}return{getParameters:S,getProgramCacheKey:C,getUniforms:G,acquireProgram:O,releaseProgram:F,releaseShaderCache:oe,programs:g,dispose:he}}function xE(){let r=new WeakMap;function e(l){let h=r.get(l);return h===void 0&&(h={},r.set(l,h)),h}function t(l){r.delete(l)}function s(l,h,d){r.get(l)[h]=d}function o(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function _E(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function h(x,_,w,E,T,y){let S=r[e];return S===void 0?(S={id:x.id,object:x,geometry:_,material:w,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},r[e]=S):(S.id=x.id,S.object=x,S.geometry=_,S.material=w,S.groupOrder=E,S.renderOrder=x.renderOrder,S.z=T,S.group=y),e++,S}function d(x,_,w,E,T,y){const S=h(x,_,w,E,T,y);w.transmission>0?s.push(S):w.transparent===!0?o.push(S):t.push(S)}function p(x,_,w,E,T,y){const S=h(x,_,w,E,T,y);w.transmission>0?s.unshift(S):w.transparent===!0?o.unshift(S):t.unshift(S)}function m(x,_){t.length>1&&t.sort(x||_E),s.length>1&&s.sort(_||ig),o.length>1&&o.sort(_||ig)}function g(){for(let x=e,_=r.length;x<_;x++){const w=r[x];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:p,finish:g,sort:m}}function yE(){let r=new WeakMap;function e(s,o){const l=r.get(s);let h;return l===void 0?(h=new rg,r.set(s,[h])):o>=l.length?(h=new rg,l.push(h)):h=l[o],h}function t(){r=new WeakMap}return{get:e,dispose:t}}function SE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new je};break;case"SpotLight":t={position:new q,direction:new q,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function wE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ME=0;function EE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TE(r,e){const t=new SE,s=wE(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)o.probe.push(new q);const l=new q,h=new Kt,d=new Kt;function p(g,x){let _=0,w=0,E=0;for(let le=0;le<9;le++)o.probe[le].set(0,0,0);let T=0,y=0,S=0,C=0,R=0,D=0,G=0,O=0,F=0,oe=0,he=0;g.sort(EE);const b=x===!0?Math.PI:1;for(let le=0,ue=g.length;le<ue;le++){const j=g[le],ie=j.color,J=j.intensity,ce=j.distance,V=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)_+=ie.r*J*b,w+=ie.g*J*b,E+=ie.b*J*b;else if(j.isLightProbe){for(let Q=0;Q<9;Q++)o.probe[Q].addScaledVector(j.sh.coefficients[Q],J);he++}else if(j.isDirectionalLight){const Q=t.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity*b),j.castShadow){const X=j.shadow,N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,o.directionalShadow[T]=N,o.directionalShadowMap[T]=V,o.directionalShadowMatrix[T]=j.shadow.matrix,D++}o.directional[T]=Q,T++}else if(j.isSpotLight){const Q=t.get(j);Q.position.setFromMatrixPosition(j.matrixWorld),Q.color.copy(ie).multiplyScalar(J*b),Q.distance=ce,Q.coneCos=Math.cos(j.angle),Q.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Q.decay=j.decay,o.spot[S]=Q;const X=j.shadow;if(j.map&&(o.spotLightMap[F]=j.map,F++,X.updateMatrices(j),j.castShadow&&oe++),o.spotLightMatrix[S]=X.matrix,j.castShadow){const N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,o.spotShadow[S]=N,o.spotShadowMap[S]=V,O++}S++}else if(j.isRectAreaLight){const Q=t.get(j);Q.color.copy(ie).multiplyScalar(J),Q.halfWidth.set(j.width*.5,0,0),Q.halfHeight.set(0,j.height*.5,0),o.rectArea[C]=Q,C++}else if(j.isPointLight){const Q=t.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity*b),Q.distance=j.distance,Q.decay=j.decay,j.castShadow){const X=j.shadow,N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,o.pointShadow[y]=N,o.pointShadowMap[y]=V,o.pointShadowMatrix[y]=j.shadow.matrix,G++}o.point[y]=Q,y++}else if(j.isHemisphereLight){const Q=t.get(j);Q.skyColor.copy(j.color).multiplyScalar(J*b),Q.groundColor.copy(j.groundColor).multiplyScalar(J*b),o.hemi[R]=Q,R++}}C>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_FLOAT_1,o.rectAreaLTC2=Re.LTC_FLOAT_2):(o.rectAreaLTC1=Re.LTC_HALF_1,o.rectAreaLTC2=Re.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_FLOAT_1,o.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Re.LTC_HALF_1,o.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=w,o.ambient[2]=E;const U=o.hash;(U.directionalLength!==T||U.pointLength!==y||U.spotLength!==S||U.rectAreaLength!==C||U.hemiLength!==R||U.numDirectionalShadows!==D||U.numPointShadows!==G||U.numSpotShadows!==O||U.numSpotMaps!==F||U.numLightProbes!==he)&&(o.directional.length=T,o.spot.length=S,o.rectArea.length=C,o.point.length=y,o.hemi.length=R,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=G,o.pointShadowMap.length=G,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=G,o.spotLightMatrix.length=O+F-oe,o.spotLightMap.length=F,o.numSpotLightShadowsWithMaps=oe,o.numLightProbes=he,U.directionalLength=T,U.pointLength=y,U.spotLength=S,U.rectAreaLength=C,U.hemiLength=R,U.numDirectionalShadows=D,U.numPointShadows=G,U.numSpotShadows=O,U.numSpotMaps=F,U.numLightProbes=he,o.version=ME++)}function m(g,x){let _=0,w=0,E=0,T=0,y=0;const S=x.matrixWorldInverse;for(let C=0,R=g.length;C<R;C++){const D=g[C];if(D.isDirectionalLight){const G=o.directional[_];G.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),G.direction.sub(l),G.direction.transformDirection(S),_++}else if(D.isSpotLight){const G=o.spot[E];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(S),G.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),G.direction.sub(l),G.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const G=o.rectArea[T];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(S),d.identity(),h.copy(D.matrixWorld),h.premultiply(S),d.extractRotation(h),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),G.halfWidth.applyMatrix4(d),G.halfHeight.applyMatrix4(d),T++}else if(D.isPointLight){const G=o.point[w];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(S),w++}else if(D.isHemisphereLight){const G=o.hemi[y];G.direction.setFromMatrixPosition(D.matrixWorld),G.direction.transformDirection(S),y++}}}return{setup:p,setupView:m,state:o}}function sg(r,e){const t=new TE(r,e),s=[],o=[];function l(){s.length=0,o.length=0}function h(x){s.push(x)}function d(x){o.push(x)}function p(x){t.setup(s,x)}function m(x){t.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function bE(r,e){let t=new WeakMap;function s(l,h=0){const d=t.get(l);let p;return d===void 0?(p=new sg(r,e),t.set(l,[p])):h>=d.length?(p=new sg(r,e),d.push(p)):p=d[h],p}function o(){t=new WeakMap}return{get:s,dispose:o}}class AE extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RE extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
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
}`;function LE(r,e,t){let s=new ev;const o=new Mt,l=new Mt,h=new on,d=new AE({depthPacking:M_}),p=new RE,m={},g=t.maxTextureSize,x={[Ur]:zn,[zn]:Ur,[$i]:$i},_=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:CE,fragmentShader:PE}),w=_.clone();w.defines.HORIZONTAL_PASS=1;const E=new _i;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Zi(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rg;let S=this.type;this.render=function(O,F,oe){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const he=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Pr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ue=S!==qi&&this.type===qi,j=S===qi&&this.type!==qi;for(let ie=0,J=O.length;ie<J;ie++){const ce=O[ie],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Q=V.getFrameExtents();if(o.multiply(Q),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Q.x),o.x=l.x*Q.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Q.y),o.y=l.y*Q.y,V.mapSize.y=l.y)),V.map===null||ue===!0||j===!0){const N=this.type!==qi?{minFilter:Tn,magFilter:Tn}:{};V.map!==null&&V.map.dispose(),V.map=new ds(o.x,o.y,N),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const X=V.getViewportCount();for(let N=0;N<X;N++){const z=V.getViewport(N);h.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),le.viewport(h),V.updateMatrices(ce,N),s=V.getFrustum(),D(F,oe,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===qi&&C(V,oe),V.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(he,b,U)};function C(O,F){const oe=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,w.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,w.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ds(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,oe,_,T,null),w.uniforms.shadow_pass.value=O.mapPass.texture,w.uniforms.resolution.value=O.mapSize,w.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,oe,w,T,null)}function R(O,F,oe,he){let b=null;const U=oe.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(U!==void 0)b=U;else if(b=oe.isPointLight===!0?p:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=b.uuid,ue=F.uuid;let j=m[le];j===void 0&&(j={},m[le]=j);let ie=j[ue];ie===void 0&&(ie=b.clone(),j[ue]=ie,F.addEventListener("dispose",G)),b=ie}if(b.visible=F.visible,b.wireframe=F.wireframe,he===qi?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:x[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,oe.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const le=r.properties.get(b);le.light=oe}return b}function D(O,F,oe,he,b){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&b===qi)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,O.matrixWorld);const ue=e.update(O),j=O.material;if(Array.isArray(j)){const ie=ue.groups;for(let J=0,ce=ie.length;J<ce;J++){const V=ie[J],Q=j[V.materialIndex];if(Q&&Q.visible){const X=R(O,Q,he,b);O.onBeforeShadow(r,O,F,oe,ue,X,V),r.renderBufferDirect(oe,null,ue,X,O,V),O.onAfterShadow(r,O,F,oe,ue,X,V)}}}else if(j.visible){const ie=R(O,j,he,b);O.onBeforeShadow(r,O,F,oe,ue,ie,null),r.renderBufferDirect(oe,null,ue,ie,O,null),O.onAfterShadow(r,O,F,oe,ue,ie,null)}}const le=O.children;for(let ue=0,j=le.length;ue<j;ue++)D(le[ue],F,oe,he,b)}function G(O){O.target.removeEventListener("dispose",G);for(const oe in m){const he=m[oe],b=O.target.uuid;b in he&&(he[b].dispose(),delete he[b])}}}function NE(r,e,t){const s=t.isWebGL2;function o(){let k=!1;const Se=new on;let Me=null;const Oe=new on(0,0,0,0);return{setMask:function(qe){Me!==qe&&!k&&(r.colorMask(qe,qe,qe,qe),Me=qe)},setLocked:function(qe){k=qe},setClear:function(qe,yt,bt,Ht,xn){xn===!0&&(qe*=Ht,yt*=Ht,bt*=Ht),Se.set(qe,yt,bt,Ht),Oe.equals(Se)===!1&&(r.clearColor(qe,yt,bt,Ht),Oe.copy(Se))},reset:function(){k=!1,Me=null,Oe.set(-1,0,0,0)}}}function l(){let k=!1,Se=null,Me=null,Oe=null;return{setTest:function(qe){qe?Ee(r.DEPTH_TEST):Qe(r.DEPTH_TEST)},setMask:function(qe){Se!==qe&&!k&&(r.depthMask(qe),Se=qe)},setFunc:function(qe){if(Me!==qe){switch(qe){case e_:r.depthFunc(r.NEVER);break;case t_:r.depthFunc(r.ALWAYS);break;case n_:r.depthFunc(r.LESS);break;case ql:r.depthFunc(r.LEQUAL);break;case i_:r.depthFunc(r.EQUAL);break;case r_:r.depthFunc(r.GEQUAL);break;case s_:r.depthFunc(r.GREATER);break;case a_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=qe}},setLocked:function(qe){k=qe},setClear:function(qe){Oe!==qe&&(r.clearDepth(qe),Oe=qe)},reset:function(){k=!1,Se=null,Me=null,Oe=null}}}function h(){let k=!1,Se=null,Me=null,Oe=null,qe=null,yt=null,bt=null,Ht=null,xn=null;return{setTest:function(St){k||(St?Ee(r.STENCIL_TEST):Qe(r.STENCIL_TEST))},setMask:function(St){Se!==St&&!k&&(r.stencilMask(St),Se=St)},setFunc:function(St,qt,ln){(Me!==St||Oe!==qt||qe!==ln)&&(r.stencilFunc(St,qt,ln),Me=St,Oe=qt,qe=ln)},setOp:function(St,qt,ln){(yt!==St||bt!==qt||Ht!==ln)&&(r.stencilOp(St,qt,ln),yt=St,bt=qt,Ht=ln)},setLocked:function(St){k=St},setClear:function(St){xn!==St&&(r.clearStencil(St),xn=St)},reset:function(){k=!1,Se=null,Me=null,Oe=null,qe=null,yt=null,bt=null,Ht=null,xn=null}}}const d=new o,p=new l,m=new h,g=new WeakMap,x=new WeakMap;let _={},w={},E=new WeakMap,T=[],y=null,S=!1,C=null,R=null,D=null,G=null,O=null,F=null,oe=null,he=new je(0,0,0),b=0,U=!1,le=null,ue=null,j=null,ie=null,J=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Q>=2);let N=null,z={};const de=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),ae=new on().fromArray(de),fe=new on().fromArray(W);function Ae(k,Se,Me,Oe){const qe=new Uint8Array(4),yt=r.createTexture();r.bindTexture(k,yt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<Me;bt++)s&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,qe):r.texImage2D(Se+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,qe);return yt}const Te={};Te[r.TEXTURE_2D]=Ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=Ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Te[r.TEXTURE_2D_ARRAY]=Ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=Ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ee(r.DEPTH_TEST),p.setFunc(ql),at(!1),L(zp),Ee(r.CULL_FACE),Ge(Pr);function Ee(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Qe(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function et(k,Se){return w[k]!==Se?(r.bindFramebuffer(k,Se),w[k]=Se,s&&(k===r.DRAW_FRAMEBUFFER&&(w[r.FRAMEBUFFER]=Se),k===r.FRAMEBUFFER&&(w[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function K(k,Se){let Me=T,Oe=!1;if(k)if(Me=E.get(Se),Me===void 0&&(Me=[],E.set(Se,Me)),k.isWebGLMultipleRenderTargets){const qe=k.texture;if(Me.length!==qe.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,bt=qe.length;yt<bt;yt++)Me[yt]=r.COLOR_ATTACHMENT0+yt;Me.length=qe.length,Oe=!0}}else Me[0]!==r.COLOR_ATTACHMENT0&&(Me[0]=r.COLOR_ATTACHMENT0,Oe=!0);else Me[0]!==r.BACK&&(Me[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function zt(k){return y!==k?(r.useProgram(k),y=k,!0):!1}const Ve={[is]:r.FUNC_ADD,[zx]:r.FUNC_SUBTRACT,[Bx]:r.FUNC_REVERSE_SUBTRACT};if(s)Ve[Hp]=r.MIN,Ve[Gp]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Ve[Hp]=k.MIN_EXT,Ve[Gp]=k.MAX_EXT)}const tt={[jx]:r.ZERO,[Hx]:r.ONE,[Gx]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[Yx]:r.SRC_ALPHA_SATURATE,[qx]:r.DST_COLOR,[Wx]:r.DST_ALPHA,[Vx]:r.ONE_MINUS_SRC_COLOR,[Rd]:r.ONE_MINUS_SRC_ALPHA,[$x]:r.ONE_MINUS_DST_COLOR,[Xx]:r.ONE_MINUS_DST_ALPHA,[Kx]:r.CONSTANT_COLOR,[Zx]:r.ONE_MINUS_CONSTANT_COLOR,[Qx]:r.CONSTANT_ALPHA,[Jx]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(k,Se,Me,Oe,qe,yt,bt,Ht,xn,St){if(k===Pr){S===!0&&(Qe(r.BLEND),S=!1);return}if(S===!1&&(Ee(r.BLEND),S=!0),k!==Ox){if(k!==C||St!==U){if((R!==is||O!==is)&&(r.blendEquation(r.FUNC_ADD),R=is,O=is),St)switch(k){case ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.ONE,r.ONE);break;case Bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}D=null,G=null,F=null,oe=null,he.set(0,0,0),b=0,C=k,U=St}return}qe=qe||Se,yt=yt||Me,bt=bt||Oe,(Se!==R||qe!==O)&&(r.blendEquationSeparate(Ve[Se],Ve[qe]),R=Se,O=qe),(Me!==D||Oe!==G||yt!==F||bt!==oe)&&(r.blendFuncSeparate(tt[Me],tt[Oe],tt[yt],tt[bt]),D=Me,G=Oe,F=yt,oe=bt),(Ht.equals(he)===!1||xn!==b)&&(r.blendColor(Ht.r,Ht.g,Ht.b,xn),he.copy(Ht),b=xn),C=k,U=!1}function Ct(k,Se){k.side===$i?Qe(r.CULL_FACE):Ee(r.CULL_FACE);let Me=k.side===zn;Se&&(Me=!Me),at(Me),k.blending===ta&&k.transparent===!1?Ge(Pr):Ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),p.setFunc(k.depthFunc),p.setTest(k.depthTest),p.setMask(k.depthWrite),d.setMask(k.colorWrite);const Oe=k.stencilWrite;m.setTest(Oe),Oe&&(m.setMask(k.stencilWriteMask),m.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),m.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){le!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),le=k)}function L(k){k!==Ux?(Ee(r.CULL_FACE),k!==ue&&(k===zp?r.cullFace(r.BACK):k===kx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Qe(r.CULL_FACE),ue=k}function A(k){k!==j&&(V&&r.lineWidth(k),j=k)}function ee(k,Se,Me){k?(Ee(r.POLYGON_OFFSET_FILL),(ie!==Se||J!==Me)&&(r.polygonOffset(Se,Me),ie=Se,J=Me)):Qe(r.POLYGON_OFFSET_FILL)}function _e(k){k?Ee(r.SCISSOR_TEST):Qe(r.SCISSOR_TEST)}function ve(k){k===void 0&&(k=r.TEXTURE0+ce-1),N!==k&&(r.activeTexture(k),N=k)}function ye(k,Se,Me){Me===void 0&&(N===null?Me=r.TEXTURE0+ce-1:Me=N);let Oe=z[Me];Oe===void 0&&(Oe={type:void 0,texture:void 0},z[Me]=Oe),(Oe.type!==k||Oe.texture!==Se)&&(N!==Me&&(r.activeTexture(Me),N=Me),r.bindTexture(k,Se||Te[k]),Oe.type=k,Oe.texture=Se)}function ze(){const k=z[N];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(k){ae.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ae.copy(k))}function xt(k){fe.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),fe.copy(k))}function Tt(k,Se){let Me=x.get(Se);Me===void 0&&(Me=new WeakMap,x.set(Se,Me));let Oe=Me.get(k);Oe===void 0&&(Oe=r.getUniformBlockIndex(Se,k.name),Me.set(k,Oe))}function ct(k,Se){const Oe=x.get(Se).get(k);g.get(Se)!==Oe&&(r.uniformBlockBinding(Se,Oe,k.__bindingPointIndex),g.set(Se,Oe))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},N=null,z={},w={},E=new WeakMap,T=[],y=null,S=!1,C=null,R=null,D=null,G=null,O=null,F=null,oe=null,he=new je(0,0,0),b=0,U=!1,le=null,ue=null,j=null,ie=null,J=null,ae.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Ee,disable:Qe,bindFramebuffer:et,drawBuffers:K,useProgram:zt,setBlending:Ge,setMaterial:Ct,setFlipSided:at,setCullFace:L,setLineWidth:A,setPolygonOffset:ee,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:ze,compressedTexImage2D:Ce,compressedTexImage3D:Ie,texImage2D:We,texImage3D:ke,updateUBOMapping:Tt,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:nt,texSubImage2D:$e,texSubImage3D:ot,compressedTexSubImage2D:ge,compressedTexSubImage3D:mt,scissor:rt,viewport:xt,reset:Et}}function DE(r,e,t,s,o,l,h){const d=o.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const _=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return w?new OffscreenCanvas(L,A):Ql("canvas")}function T(L,A,ee,_e){let ve=1;if((L.width>_e||L.height>_e)&&(ve=_e/Math.max(L.width,L.height)),ve<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ye=A?Ud:Math.floor,ze=ye(ve*L.width),Ce=ye(ve*L.height);x===void 0&&(x=E(ze,Ce));const Ie=ee?E(ze,Ce):x;return Ie.width=ze,Ie.height=Ce,Ie.getContext("2d").drawImage(L,0,0,ze,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ze+"x"+Ce+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return _m(L.width)&&_m(L.height)}function S(L){return d?!1:L.wrapS!==gi||L.wrapT!==gi||L.minFilter!==Tn&&L.minFilter!==kn}function C(L,A){return L.generateMipmaps&&A&&L.minFilter!==Tn&&L.minFilter!==kn}function R(L){r.generateMipmap(L)}function D(L,A,ee,_e,ve=!1){if(d===!1)return A;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ye=A;if(A===r.RED&&(ee===r.FLOAT&&(ye=r.R32F),ee===r.HALF_FLOAT&&(ye=r.R16F),ee===r.UNSIGNED_BYTE&&(ye=r.R8)),A===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(ye=r.R8UI),ee===r.UNSIGNED_SHORT&&(ye=r.R16UI),ee===r.UNSIGNED_INT&&(ye=r.R32UI),ee===r.BYTE&&(ye=r.R8I),ee===r.SHORT&&(ye=r.R16I),ee===r.INT&&(ye=r.R32I)),A===r.RG&&(ee===r.FLOAT&&(ye=r.RG32F),ee===r.HALF_FLOAT&&(ye=r.RG16F),ee===r.UNSIGNED_BYTE&&(ye=r.RG8)),A===r.RGBA){const ze=ve?$l:Rt.getTransfer(_e);ee===r.FLOAT&&(ye=r.RGBA32F),ee===r.HALF_FLOAT&&(ye=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(ye=ze===It?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function G(L,A,ee){return C(L,ee)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==kn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){return L===Tn||L===Vp||L===Xa?r.NEAREST:r.LINEAR}function F(L){const A=L.target;A.removeEventListener("dispose",F),he(A),A.isVideoTexture&&g.delete(A)}function oe(L){const A=L.target;A.removeEventListener("dispose",oe),U(A)}function he(L){const A=s.get(L);if(A.__webglInit===void 0)return;const ee=L.source,_e=_.get(ee);if(_e){const ve=_e[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(L),Object.keys(_e).length===0&&_.delete(ee)}s.remove(L)}function b(L){const A=s.get(L);r.deleteTexture(A.__webglTexture);const ee=L.source,_e=_.get(ee);delete _e[A.__cacheKey],h.memory.textures--}function U(L){const A=L.texture,ee=s.get(L),_e=s.get(A);if(_e.__webglTexture!==void 0&&(r.deleteTexture(_e.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(ee.__webglFramebuffer[ve]))for(let ye=0;ye<ee.__webglFramebuffer[ve].length;ye++)r.deleteFramebuffer(ee.__webglFramebuffer[ve][ye]);else r.deleteFramebuffer(ee.__webglFramebuffer[ve]);ee.__webglDepthbuffer&&r.deleteRenderbuffer(ee.__webglDepthbuffer[ve])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ve=0;ve<ee.__webglFramebuffer.length;ve++)r.deleteFramebuffer(ee.__webglFramebuffer[ve]);else r.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&r.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ve=0;ve<ee.__webglColorRenderbuffer.length;ve++)ee.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(ee.__webglColorRenderbuffer[ve]);ee.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ve=0,ye=A.length;ve<ye;ve++){const ze=s.get(A[ve]);ze.__webglTexture&&(r.deleteTexture(ze.__webglTexture),h.memory.textures--),s.remove(A[ve])}s.remove(A),s.remove(L)}let le=0;function ue(){le=0}function j(){const L=le;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),le+=1,L}function ie(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function J(L,A){const ee=s.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const _e=L.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(ee,L,A);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+A)}function ce(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){ae(ee,L,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+A)}function V(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){ae(ee,L,A);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+A)}function Q(L,A){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){fe(ee,L,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+A)}const X={[Ld]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[Nd]:r.MIRRORED_REPEAT},N={[Tn]:r.NEAREST,[Vp]:r.NEAREST_MIPMAP_NEAREST,[Xa]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[Vu]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},z={[b_]:r.NEVER,[N_]:r.ALWAYS,[A_]:r.LESS,[Bg]:r.LEQUAL,[R_]:r.EQUAL,[L_]:r.GEQUAL,[C_]:r.GREATER,[P_]:r.NOTEQUAL};function de(L,A,ee){if(A.type===Yi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===kn||A.magFilter===Vu||A.magFilter===Xa||A.magFilter===ss||A.minFilter===kn||A.minFilter===Vu||A.minFilter===Xa||A.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(L,r.TEXTURE_WRAP_S,X[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,X[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,X[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,N[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,N[A.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==gi||A.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,O(A.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,O(A.minFilter)),A.minFilter!==Tn&&A.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Tn||A.minFilter!==Xa&&A.minFilter!==ss||A.type===Yi&&e.has("OES_texture_float_linear")===!1||d===!1&&A.type===to&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(r.texParameterf(L,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function W(L,A){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",F));const _e=A.source;let ve=_.get(_e);ve===void 0&&(ve={},_.set(_e,ve));const ye=ie(A);if(ye!==L.__cacheKey){ve[ye]===void 0&&(ve[ye]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),ve[ye].usedTimes++;const ze=ve[L.__cacheKey];ze!==void 0&&(ve[L.__cacheKey].usedTimes--,ze.usedTimes===0&&b(A)),L.__cacheKey=ye,L.__webglTexture=ve[ye].texture}return ee}function ae(L,A,ee){let _e=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=r.TEXTURE_3D);const ve=W(L,A),ye=A.source;t.bindTexture(_e,L.__webglTexture,r.TEXTURE0+ee);const ze=s.get(ye);if(ye.version!==ze.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const Ce=Rt.getPrimaries(Rt.workingColorSpace),Ie=A.colorSpace===ri?null:Rt.getPrimaries(A.colorSpace),$e=A.colorSpace===ri||Ce===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const ot=S(A)&&y(A.image)===!1;let ge=T(A.image,ot,!1,o.maxTextureSize);ge=at(A,ge);const mt=y(ge)||d,ht=l.convert(A.format,A.colorSpace);let nt=l.convert(A.type),We=D(A.internalFormat,ht,nt,A.colorSpace,A.isVideoTexture);de(_e,A,mt);let ke;const rt=A.mipmaps,xt=d&&A.isVideoTexture!==!0&&We!==Og,Tt=ze.__version===void 0||ve===!0,ct=ye.dataReady,Et=G(A,ge,mt);if(A.isDepthTexture)We=r.DEPTH_COMPONENT,d?A.type===Yi?We=r.DEPTH_COMPONENT32F:A.type===Cr?We=r.DEPTH_COMPONENT24:A.type===as?We=r.DEPTH24_STENCIL8:We=r.DEPTH_COMPONENT16:A.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===os&&We===r.DEPTH_COMPONENT&&A.type!==Xd&&A.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Cr,nt=l.convert(A.type)),A.format===aa&&We===r.DEPTH_COMPONENT&&(We=r.DEPTH_STENCIL,A.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=as,nt=l.convert(A.type))),Tt&&(xt?t.texStorage2D(r.TEXTURE_2D,1,We,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,We,ge.width,ge.height,0,ht,nt,null));else if(A.isDataTexture)if(rt.length>0&&mt){xt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,rt[0].width,rt[0].height);for(let k=0,Se=rt.length;k<Se;k++)ke=rt[k],xt?ct&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ke.width,ke.height,ht,nt,ke.data):t.texImage2D(r.TEXTURE_2D,k,We,ke.width,ke.height,0,ht,nt,ke.data);A.generateMipmaps=!1}else xt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,ge.width,ge.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge.width,ge.height,ht,nt,ge.data)):t.texImage2D(r.TEXTURE_2D,0,We,ge.width,ge.height,0,ht,nt,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,We,rt[0].width,rt[0].height,ge.depth);for(let k=0,Se=rt.length;k<Se;k++)ke=rt[k],A.format!==vi?ht!==null?xt?ct&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ke.width,ke.height,ge.depth,ht,ke.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,We,ke.width,ke.height,ge.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,ke.width,ke.height,ge.depth,ht,nt,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,We,ke.width,ke.height,ge.depth,0,ht,nt,ke.data)}else{xt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,rt[0].width,rt[0].height);for(let k=0,Se=rt.length;k<Se;k++)ke=rt[k],A.format!==vi?ht!==null?xt?ct&&t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,ke.width,ke.height,ht,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,k,We,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?ct&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ke.width,ke.height,ht,nt,ke.data):t.texImage2D(r.TEXTURE_2D,k,We,ke.width,ke.height,0,ht,nt,ke.data)}else if(A.isDataArrayTexture)xt?(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,We,ge.width,ge.height,ge.depth),ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ht,nt,ge.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,ge.width,ge.height,ge.depth,0,ht,nt,ge.data);else if(A.isData3DTexture)xt?(Tt&&t.texStorage3D(r.TEXTURE_3D,Et,We,ge.width,ge.height,ge.depth),ct&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ht,nt,ge.data)):t.texImage3D(r.TEXTURE_3D,0,We,ge.width,ge.height,ge.depth,0,ht,nt,ge.data);else if(A.isFramebufferTexture){if(Tt)if(xt)t.texStorage2D(r.TEXTURE_2D,Et,We,ge.width,ge.height);else{let k=ge.width,Se=ge.height;for(let Me=0;Me<Et;Me++)t.texImage2D(r.TEXTURE_2D,Me,We,k,Se,0,ht,nt,null),k>>=1,Se>>=1}}else if(rt.length>0&&mt){xt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,rt[0].width,rt[0].height);for(let k=0,Se=rt.length;k<Se;k++)ke=rt[k],xt?ct&&t.texSubImage2D(r.TEXTURE_2D,k,0,0,ht,nt,ke):t.texImage2D(r.TEXTURE_2D,k,We,ht,nt,ke);A.generateMipmaps=!1}else xt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,ge.width,ge.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,nt,ge)):t.texImage2D(r.TEXTURE_2D,0,We,ht,nt,ge);C(A,mt)&&R(_e),ze.__version=ye.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function fe(L,A,ee){if(A.image.length!==6)return;const _e=W(L,A),ve=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+ee);const ye=s.get(ve);if(ve.version!==ye.__version||_e===!0){t.activeTexture(r.TEXTURE0+ee);const ze=Rt.getPrimaries(Rt.workingColorSpace),Ce=A.colorSpace===ri?null:Rt.getPrimaries(A.colorSpace),Ie=A.colorSpace===ri||ze===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let k=0;k<6;k++)!$e&&!ot?ge[k]=T(A.image[k],!1,!0,o.maxCubemapSize):ge[k]=ot?A.image[k].image:A.image[k],ge[k]=at(A,ge[k]);const mt=ge[0],ht=y(mt)||d,nt=l.convert(A.format,A.colorSpace),We=l.convert(A.type),ke=D(A.internalFormat,nt,We,A.colorSpace),rt=d&&A.isVideoTexture!==!0,xt=ye.__version===void 0||_e===!0,Tt=ve.dataReady;let ct=G(A,mt,ht);de(r.TEXTURE_CUBE_MAP,A,ht);let Et;if($e){rt&&xt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ke,mt.width,mt.height);for(let k=0;k<6;k++){Et=ge[k].mipmaps;for(let Se=0;Se<Et.length;Se++){const Me=Et[Se];A.format!==vi?nt!==null?rt?Tt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se,0,0,Me.width,Me.height,nt,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se,0,0,Me.width,Me.height,nt,We,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se,ke,Me.width,Me.height,0,nt,We,Me.data)}}}else{Et=A.mipmaps,rt&&xt&&(Et.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ke,ge[0].width,ge[0].height));for(let k=0;k<6;k++)if(ot){rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ge[k].width,ge[k].height,nt,We,ge[k].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ke,ge[k].width,ge[k].height,0,nt,We,ge[k].data);for(let Se=0;Se<Et.length;Se++){const Oe=Et[Se].image[k].image;rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se+1,0,0,Oe.width,Oe.height,nt,We,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se+1,ke,Oe.width,Oe.height,0,nt,We,Oe.data)}}else{rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,nt,We,ge[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ke,nt,We,ge[k]);for(let Se=0;Se<Et.length;Se++){const Me=Et[Se];rt?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se+1,0,0,nt,We,Me.image[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se+1,ke,nt,We,Me.image[k])}}}C(A,ht)&&R(r.TEXTURE_CUBE_MAP),ye.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ae(L,A,ee,_e,ve,ye){const ze=l.convert(ee.format,ee.colorSpace),Ce=l.convert(ee.type),Ie=D(ee.internalFormat,ze,Ce,ee.colorSpace);if(!s.get(A).__hasExternalTextures){const ot=Math.max(1,A.width>>ye),ge=Math.max(1,A.height>>ye);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,ye,Ie,ot,ge,A.depth,0,ze,Ce,null):t.texImage2D(ve,ye,Ie,ot,ge,0,ze,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ve,s.get(ee).__webglTexture,0,tt(A)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ve,s.get(ee).__webglTexture,ye),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(L,A,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let _e=d===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||Ge(A)){const ve=A.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Yi?_e=r.DEPTH_COMPONENT32F:ve.type===Cr&&(_e=r.DEPTH_COMPONENT24));const ye=tt(A);Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,_e,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,_e,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,_e,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const _e=tt(A);ee&&Ge(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,r.DEPTH24_STENCIL8,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const _e=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ve=0;ve<_e.length;ve++){const ye=_e[ve],ze=l.convert(ye.format,ye.colorSpace),Ce=l.convert(ye.type),Ie=D(ye.internalFormat,ze,Ce,ye.colorSpace),$e=tt(A);ee&&Ge(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ie,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Ie,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const _e=s.get(A.depthTexture).__webglTexture,ve=tt(A);if(A.depthTexture.format===os)Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(A.depthTexture.format===aa)Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Qe(L){const A=s.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ee(A.__webglFramebuffer,L)}else if(ee){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=r.createRenderbuffer(),Te(A.__webglDepthbuffer[_e],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Te(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(L,A,ee){const _e=s.get(L);A!==void 0&&Ae(_e.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Qe(L)}function K(L){const A=L.texture,ee=s.get(L),_e=s.get(A);L.addEventListener("dispose",oe),L.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=A.version,h.memory.textures++);const ve=L.isWebGLCubeRenderTarget===!0,ye=L.isWebGLMultipleRenderTargets===!0,ze=y(L)||d;if(ve){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(d&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ee.__webglFramebuffer[Ce][Ie]=r.createFramebuffer()}else ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(d&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(ye)if(o.drawBuffers){const Ce=L.texture;for(let Ie=0,$e=Ce.length;Ie<$e;Ie++){const ot=s.get(Ce[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&L.samples>0&&Ge(L)===!1){const Ce=ye?A:[A];ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ce.length;Ie++){const $e=Ce[Ie];ee.__webglColorRenderbuffer[Ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const ot=l.convert($e.format,$e.colorSpace),ge=l.convert($e.type),mt=D($e.internalFormat,ot,ge,$e.colorSpace,L.isXRRenderTarget===!0),ht=tt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ve){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),de(r.TEXTURE_CUBE_MAP,A,ze);for(let Ce=0;Ce<6;Ce++)if(d&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ae(ee.__webglFramebuffer[Ce][Ie],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ie);else Ae(ee.__webglFramebuffer[Ce],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);C(A,ze)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){const Ce=L.texture;for(let Ie=0,$e=Ce.length;Ie<$e;Ie++){const ot=Ce[Ie],ge=s.get(ot);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),de(r.TEXTURE_2D,ot,ze),Ae(ee.__webglFramebuffer,L,ot,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,0),C(ot,ze)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(d?Ce=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,_e.__webglTexture),de(Ce,A,ze),d&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ae(ee.__webglFramebuffer[Ie],L,A,r.COLOR_ATTACHMENT0,Ce,Ie);else Ae(ee.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,Ce,0);C(A,ze)&&R(Ce),t.unbindTexture()}L.depthBuffer&&Qe(L)}function zt(L){const A=y(L)||d,ee=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let _e=0,ve=ee.length;_e<ve;_e++){const ye=ee[_e];if(C(ye,A)){const ze=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=s.get(ye).__webglTexture;t.bindTexture(ze,Ce),R(ze),t.unbindTexture()}}}function Ve(L){if(d&&L.samples>0&&Ge(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ee=L.width,_e=L.height;let ve=r.COLOR_BUFFER_BIT;const ye=[],ze=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=s.get(L),Ie=L.isWebGLMultipleRenderTargets===!0;if(Ie)for(let $e=0;$e<A.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){ye.push(r.COLOR_ATTACHMENT0+$e),L.depthBuffer&&ye.push(ze);const ot=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(ot===!1&&(L.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ie&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[$e]),ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ze]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ze])),Ie){const ge=s.get(A[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,ve,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ie)for(let $e=0;$e<A.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[$e]);const ot=s.get(A[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function tt(L){return Math.min(o.maxSamples,L.samples)}function Ge(L){const A=s.get(L);return d&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(L){const A=h.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function at(L,A){const ee=L.colorSpace,_e=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dd||ee!==Qi&&ee!==ri&&(Rt.getTransfer(ee)===It?d===!1?e.has("EXT_sRGB")===!0&&_e===vi?(L.format=Dd,L.minFilter=kn,L.generateMipmaps=!1):A=Hg.sRGBToLinear(A):(_e!==vi||ve!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=j,this.resetTextureUnits=ue,this.setTexture2D=J,this.setTexture2DArray=ce,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=et,this.setupRenderTarget=K,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ge}function IE(r,e,t){const s=t.isWebGL2;function o(l,h=ri){let d;const p=Rt.getTransfer(h);if(l===Nr)return r.UNSIGNED_BYTE;if(l===Dg)return r.UNSIGNED_SHORT_4_4_4_4;if(l===Ig)return r.UNSIGNED_SHORT_5_5_5_1;if(l===p_)return r.BYTE;if(l===m_)return r.SHORT;if(l===Xd)return r.UNSIGNED_SHORT;if(l===Ng)return r.INT;if(l===Cr)return r.UNSIGNED_INT;if(l===Yi)return r.FLOAT;if(l===to)return s?r.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(l===g_)return r.ALPHA;if(l===vi)return r.RGBA;if(l===v_)return r.LUMINANCE;if(l===x_)return r.LUMINANCE_ALPHA;if(l===os)return r.DEPTH_COMPONENT;if(l===aa)return r.DEPTH_STENCIL;if(l===Dd)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(l===__)return r.RED;if(l===Ug)return r.RED_INTEGER;if(l===y_)return r.RG;if(l===kg)return r.RG_INTEGER;if(l===Fg)return r.RGBA_INTEGER;if(l===Wu||l===Xu||l===qu||l===$u)if(p===It)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(l===Wu)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Xu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===qu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===$u)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(l===Wu)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Xu)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===qu)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===$u)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Wp||l===Xp||l===qp||l===$p)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(l===Wp)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Xp)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===qp)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===$p)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Og)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Yp||l===Kp)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(l===Yp)return p===It?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(l===Kp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Zp||l===Qp||l===Jp||l===em||l===tm||l===nm||l===im||l===rm||l===sm||l===am||l===om||l===lm||l===cm||l===um)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(l===Zp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Qp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Jp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===em)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===tm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===nm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===im)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===rm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===sm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===am)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===om)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===lm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===cm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===um)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Yu||l===dm||l===hm)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(l===Yu)return p===It?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===dm)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===hm)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===S_||l===fm||l===pm||l===mm)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(l===Yu)return d.COMPRESSED_RED_RGTC1_EXT;if(l===fm)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===pm)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===mm)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===as?s?r.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:o}}class UE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qa extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),S=this._getHandJoint(m,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=g.position.distanceTo(x.position),w=.02,E=.005;m.inputState.pinching&&_>w+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=w-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Qa;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`;class zE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const s=t.cameras[0].viewport,o=new Pi({extensions:{fragDepth:!0},vertexShader:FE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new Zi(new rc(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class BE extends la{constructor(e,t){super();const s=this;let o=null,l=1,h=null,d="local-floor",p=1,m=null,g=null,x=null,_=null,w=null,E=null;const T=new zE,y=t.getContextAttributes();let S=null,C=null;const R=[],D=[],G=new Mt;let O=null;const F=new ii;F.layers.enable(1),F.viewport=new on;const oe=new ii;oe.layers.enable(2),oe.viewport=new on;const he=[F,oe],b=new UE;b.layers.enable(1),b.layers.enable(2);let U=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ae=R[W];return ae===void 0&&(ae=new yd,R[W]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(W){let ae=R[W];return ae===void 0&&(ae=new yd,R[W]=ae),ae.getGripSpace()},this.getHand=function(W){let ae=R[W];return ae===void 0&&(ae=new yd,R[W]=ae),ae.getHandSpace()};function ue(W){const ae=D.indexOf(W.inputSource);if(ae===-1)return;const fe=R[ae];fe!==void 0&&(fe.update(W.inputSource,W.frame,m||h),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",ie);for(let W=0;W<R.length;W++){const ae=D[W];ae!==null&&(D[W]=null,R[W].disconnect(ae))}U=null,le=null,T.reset(),e.setRenderTarget(S),w=null,_=null,x=null,o=null,C=null,de.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return _!==null?_:w},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",j),o.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:o.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,t,ae),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),C=new ds(w.framebufferWidth,w.framebufferHeight,{format:vi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ae=null,fe=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?aa:os,fe=y.stencil?as:Cr);const Te={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};x=new XRWebGLBinding(o,t),_=x.createProjectionLayer(Te),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new ds(_.textureWidth,_.textureHeight,{format:vi,type:Nr,depthTexture:new nv(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ee=e.properties.get(C);Ee.__ignoreDepthValues=_.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await o.requestReferenceSpace(d),de.setContext(o),de.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function ie(W){for(let ae=0;ae<W.removed.length;ae++){const fe=W.removed[ae],Ae=D.indexOf(fe);Ae>=0&&(D[Ae]=null,R[Ae].disconnect(fe))}for(let ae=0;ae<W.added.length;ae++){const fe=W.added[ae];let Ae=D.indexOf(fe);if(Ae===-1){for(let Ee=0;Ee<R.length;Ee++)if(Ee>=D.length){D.push(fe),Ae=Ee;break}else if(D[Ee]===null){D[Ee]=fe,Ae=Ee;break}if(Ae===-1)break}const Te=R[Ae];Te&&Te.connect(fe)}}const J=new q,ce=new q;function V(W,ae,fe){J.setFromMatrixPosition(ae.matrixWorld),ce.setFromMatrixPosition(fe.matrixWorld);const Ae=J.distanceTo(ce),Te=ae.projectionMatrix.elements,Ee=fe.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),et=Te[14]/(Te[10]+1),K=(Te[9]+1)/Te[5],zt=(Te[9]-1)/Te[5],Ve=(Te[8]-1)/Te[0],tt=(Ee[8]+1)/Ee[0],Ge=Qe*Ve,Ct=Qe*tt,at=Ae/(-Ve+tt),L=at*-Ve;ae.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(L),W.translateZ(at),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Qe+at,ee=et+at,_e=Ge-L,ve=Ct+(Ae-L),ye=K*et/ee*A,ze=zt*et/ee*A;W.projectionMatrix.makePerspective(_e,ve,ye,ze,A,ee),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Q(W,ae){ae===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ae.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;T.texture!==null&&(W.near=T.depthNear,W.far=T.depthFar),b.near=oe.near=F.near=W.near,b.far=oe.far=F.far=W.far,(U!==b.near||le!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,le=b.far,F.near=U,F.far=le,oe.near=U,oe.far=le,F.updateProjectionMatrix(),oe.updateProjectionMatrix(),W.updateProjectionMatrix());const ae=W.parent,fe=b.cameras;Q(b,ae);for(let Ae=0;Ae<fe.length;Ae++)Q(fe[Ae],ae);fe.length===2?V(b,F,oe):b.projectionMatrix.copy(F.projectionMatrix),X(W,b,ae)};function X(W,ae,fe){fe===null?W.matrix.copy(ae.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ae.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ae.projectionMatrix),W.projectionMatrixInverse.copy(ae.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Id*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&w===null))return p},this.setFoveation=function(W){p=W,_!==null&&(_.fixedFoveation=W),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=W)},this.hasDepthSensing=function(){return T.texture!==null};let N=null;function z(W,ae){if(g=ae.getViewerPose(m||h),E=ae,g!==null){const fe=g.views;w!==null&&(e.setRenderTargetFramebuffer(C,w.framebuffer),e.setRenderTarget(C));let Ae=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,Ae=!0);for(let Ee=0;Ee<fe.length;Ee++){const Qe=fe[Ee];let et=null;if(w!==null)et=w.getViewport(Qe);else{const zt=x.getViewSubImage(_,Qe);et=zt.viewport,Ee===0&&(e.setRenderTargetTextures(C,zt.colorTexture,_.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(C))}let K=he[Ee];K===void 0&&(K=new ii,K.layers.enable(Ee),K.viewport=new on,he[Ee]=K),K.matrix.fromArray(Qe.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Qe.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(et.x,et.y,et.width,et.height),Ee===0&&(b.matrix.copy(K.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ae===!0&&b.cameras.push(K)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ee=x.getDepthInformation(fe[0]);Ee&&Ee.isValid&&Ee.texture&&T.init(e,Ee,o.renderState)}}for(let fe=0;fe<R.length;fe++){const Ae=D[fe],Te=R[fe];Ae!==null&&Te!==void 0&&Te.update(Ae,ae,m||h)}T.render(e,b),N&&N(W,ae),ae.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ae}),E=null}const de=new tv;de.setAnimationLoop(z),this.setAnimationLoop=function(W){N=W},this.dispose=function(){}}}function jE(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Zg(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,C,R,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(y,S):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),g(y,S)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&w(y,S,D)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),T(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?p(y,S,C,R):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===zn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===zn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S).envMap;if(C&&(y.envMap.value=C,y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap){y.lightMap.value=S.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=S.lightMapIntensity*R,t(S.lightMap,y.lightMapTransform)}S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,C,R){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=R*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),e.get(S).envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function w(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===zn&&y.clearcoatNormalScale.value.negate())),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function HE(r,e,t,s){let o={},l={},h=[];const d=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(C,R){const D=R.program;s.uniformBlockBinding(C,D)}function m(C,R){let D=o[C.id];D===void 0&&(E(C),D=g(C),o[C.id]=D,C.addEventListener("dispose",y));const G=R.program;s.updateUBOMapping(C,G);const O=e.render.frame;l[C.id]!==O&&(_(C),l[C.id]=O)}function g(C){const R=x();C.__bindingPointIndex=R;const D=r.createBuffer(),G=C.__size,O=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,D),D}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const R=o[C.id],D=C.uniforms,G=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let O=0,F=D.length;O<F;O++){const oe=Array.isArray(D[O])?D[O]:[D[O]];for(let he=0,b=oe.length;he<b;he++){const U=oe[he];if(w(U,O,he,G)===!0){const le=U.__offset,ue=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let ie=0;ie<ue.length;ie++){const J=ue[ie],ce=T(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,le+j,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,j),j+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function w(C,R,D,G){const O=C.value,F=R+"_"+D;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:G[F]=O.clone(),!0;{const oe=G[F];if(typeof O=="number"||typeof O=="boolean"){if(oe!==O)return G[F]=O,!0}else if(oe.equals(O)===!1)return oe.copy(O),!0}return!1}function E(C){const R=C.uniforms;let D=0;const G=16;for(let F=0,oe=R.length;F<oe;F++){const he=Array.isArray(R[F])?R[F]:[R[F]];for(let b=0,U=he.length;b<U;b++){const le=he[b],ue=Array.isArray(le.value)?le.value:[le.value];for(let j=0,ie=ue.length;j<ie;j++){const J=ue[j],ce=T(J),V=D%G;V!==0&&G-V<ce.boundary&&(D+=G-V),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=D,D+=ce.storage}}}const O=D%G;return O>0&&(D+=G-O),C.__size=D,C.__cache={},this}function T(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function y(C){const R=C.target;R.removeEventListener("dispose",y);const D=h.indexOf(R.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function S(){for(const C in o)r.deleteBuffer(o[C]);h=[],o={},l={}}return{bind:p,update:m,dispose:S}}class lv{constructor(e={}){const{canvas:t=I_(),context:s=null,depth:o=!0,stencil:l=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let _;s!==null?_=s.getContextAttributes().alpha:_=h;const w=new Uint32Array(4),E=new Int32Array(4);let T=null,y=null;const S=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Lr,this.toneMappingExposure=1;const R=this;let D=!1,G=0,O=0,F=null,oe=-1,he=null;const b=new on,U=new on;let le=null;const ue=new je(0);let j=0,ie=t.width,J=t.height,ce=1,V=null,Q=null;const X=new on(0,0,ie,J),N=new on(0,0,ie,J);let z=!1;const de=new ev;let W=!1,ae=!1,fe=null;const Ae=new Kt,Te=new Mt,Ee=new q,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return F===null?ce:1}let K=s;function zt(P,Y){for(let re=0;re<P.length;re++){const se=P[re],ne=t.getContext(se,Y);if(ne!==null)return ne}return null}try{const P={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wd}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Se,!1),K===null){const Y=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Y.shift(),K=zt(Y,P),K===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ve,tt,Ge,Ct,at,L,A,ee,_e,ve,ye,ze,Ce,Ie,$e,ot,ge,mt,ht,nt,We,ke,rt,xt;function Tt(){Ve=new Yw(K),tt=new Hw(K,Ve,e),Ve.init(tt),ke=new IE(K,Ve,tt),Ge=new NE(K,Ve,tt),Ct=new Qw(K),at=new xE,L=new DE(K,Ve,Ge,at,tt,ke,Ct),A=new Vw(R),ee=new $w(R),_e=new sy(K,tt),rt=new Bw(K,Ve,_e,tt),ve=new Kw(K,_e,Ct,rt),ye=new nM(K,ve,_e,Ct),ht=new tM(K,tt,L),ot=new Gw(at),ze=new vE(R,A,ee,Ve,tt,rt,ot),Ce=new jE(R,at),Ie=new yE,$e=new bE(Ve,tt),mt=new zw(R,A,ee,Ge,ye,_,p),ge=new LE(R,ye,tt),xt=new HE(K,Ct,tt,Ge),nt=new jw(K,Ve,Ct,tt),We=new Zw(K,Ve,Ct,tt),Ct.programs=ze.programs,R.capabilities=tt,R.extensions=Ve,R.properties=at,R.renderLists=Ie,R.shadowMap=ge,R.state=Ge,R.info=Ct}Tt();const ct=new BE(R,K);this.xr=ct,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const P=Ve.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ve.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(P){P!==void 0&&(ce=P,this.setSize(ie,J,!1))},this.getSize=function(P){return P.set(ie,J)},this.setSize=function(P,Y,re=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=P,J=Y,t.width=Math.floor(P*ce),t.height=Math.floor(Y*ce),re===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(ie*ce,J*ce).floor()},this.setDrawingBufferSize=function(P,Y,re){ie=P,J=Y,ce=re,t.width=Math.floor(P*re),t.height=Math.floor(Y*re),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,Y,re,se){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,Y,re,se),Ge.viewport(b.copy(X).multiplyScalar(ce).floor())},this.getScissor=function(P){return P.copy(N)},this.setScissor=function(P,Y,re,se){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,Y,re,se),Ge.scissor(U.copy(N).multiplyScalar(ce).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(P){Ge.setScissorTest(z=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(P=!0,Y=!0,re=!0){let se=0;if(P){let ne=!1;if(F!==null){const Pe=F.texture.format;ne=Pe===Fg||Pe===kg||Pe===Ug}if(ne){const Pe=F.texture.type,He=Pe===Nr||Pe===Cr||Pe===Xd||Pe===as||Pe===Dg||Pe===Ig,Ze=mt.getClearColor(),Ne=mt.getClearAlpha(),lt=Ze.r,it=Ze.g,st=Ze.b;He?(w[0]=lt,w[1]=it,w[2]=st,w[3]=Ne,K.clearBufferuiv(K.COLOR,0,w)):(E[0]=lt,E[1]=it,E[2]=st,E[3]=Ne,K.clearBufferiv(K.COLOR,0,E))}else se|=K.COLOR_BUFFER_BIT}Y&&(se|=K.DEPTH_BUFFER_BIT),re&&(se|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),$e.dispose(),at.dispose(),A.dispose(),ee.dispose(),ye.dispose(),rt.dispose(),xt.dispose(),ze.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",xn),ct.removeEventListener("sessionend",St),fe&&(fe.dispose(),fe=null),qt.stop()};function Et(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const P=Ct.autoReset,Y=ge.enabled,re=ge.autoUpdate,se=ge.needsUpdate,ne=ge.type;Tt(),Ct.autoReset=P,ge.enabled=Y,ge.autoUpdate=re,ge.needsUpdate=se,ge.type=ne}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Me(P){const Y=P.target;Y.removeEventListener("dispose",Me),Oe(Y)}function Oe(P){qe(P),at.remove(P)}function qe(P){const Y=at.get(P).programs;Y!==void 0&&(Y.forEach(function(re){ze.releaseProgram(re)}),P.isShaderMaterial&&ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,re,se,ne,Pe){Y===null&&(Y=Qe);const He=ne.isMesh&&ne.matrixWorld.determinant()<0,Ze=ac(P,Y,re,se,ne);Ge.setMaterial(se,He);let Ne=re.index,lt=1;if(se.wireframe===!0){if(Ne=ve.getWireframeAttribute(re),Ne===void 0)return;lt=2}const it=re.drawRange,st=re.attributes.position;let Pt=it.start*lt,_n=(it.start+it.count)*lt;Pe!==null&&(Pt=Math.max(Pt,Pe.start*lt),_n=Math.min(_n,(Pe.start+Pe.count)*lt)),Ne!==null?(Pt=Math.max(Pt,0),_n=Math.min(_n,Ne.count)):st!=null&&(Pt=Math.max(Pt,0),_n=Math.min(_n,st.count));const Gt=_n-Pt;if(Gt<0||Gt===1/0)return;rt.setup(ne,se,Ze,re,Ne);let bn,gt=nt;if(Ne!==null&&(bn=_e.get(Ne),gt=We,gt.setIndex(bn)),ne.isMesh)se.wireframe===!0?(Ge.setLineWidth(se.wireframeLinewidth*et()),gt.setMode(K.LINES)):gt.setMode(K.TRIANGLES);else if(ne.isLine){let ut=se.linewidth;ut===void 0&&(ut=1),Ge.setLineWidth(ut*et()),ne.isLineSegments?gt.setMode(K.LINES):ne.isLineLoop?gt.setMode(K.LINE_LOOP):gt.setMode(K.LINE_STRIP)}else ne.isPoints?gt.setMode(K.POINTS):ne.isSprite&&gt.setMode(K.TRIANGLES);if(ne.isBatchedMesh)gt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)gt.renderInstances(Pt,Gt,ne.count);else if(re.isInstancedBufferGeometry){const ut=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,yn=Math.min(re.instanceCount,ut);gt.renderInstances(Pt,Gt,yn)}else gt.render(Pt,Gt)};function yt(P,Y,re){P.transparent===!0&&P.side===$i&&P.forceSinglePass===!1?(P.side=zn,P.needsUpdate=!0,er(P,Y,re),P.side=Ur,P.needsUpdate=!0,er(P,Y,re),P.side=$i):er(P,Y,re)}this.compile=function(P,Y,re=null){re===null&&(re=P),y=$e.get(re),y.init(),C.push(y),re.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),P!==re&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights(R._useLegacyLights);const se=new Set;return P.traverse(function(ne){const Pe=ne.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Ze=Pe[He];yt(Ze,re,ne),se.add(Ze)}else yt(Pe,re,ne),se.add(Pe)}),C.pop(),y=null,se},this.compileAsync=function(P,Y,re=null){const se=this.compile(P,Y,re);return new Promise(ne=>{function Pe(){if(se.forEach(function(He){at.get(He).currentProgram.isReady()&&se.delete(He)}),se.size===0){ne(P);return}setTimeout(Pe,10)}Ve.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let bt=null;function Ht(P){bt&&bt(P)}function xn(){qt.stop()}function St(){qt.start()}const qt=new tv;qt.setAnimationLoop(Ht),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){bt=P,ct.setAnimationLoop(P),P===null?qt.stop():qt.start()},ct.addEventListener("sessionstart",xn),ct.addEventListener("sessionend",St),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Y),Y=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,Y,F),y=$e.get(P,C.length),y.init(),C.push(y),Ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),de.setFromProjectionMatrix(Ae),ae=this.localClippingEnabled,W=ot.init(this.clippingPlanes,ae),T=Ie.get(P,S.length),T.init(),S.push(T),ln(P,Y,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(V,Q),this.info.render.frame++,W===!0&&ot.beginShadows();const re=y.state.shadowsArray;if(ge.render(re,P,Y),W===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&mt.render(T,P),y.setupLights(R._useLegacyLights),Y.isArrayCamera){const se=Y.cameras;for(let ne=0,Pe=se.length;ne<Pe;ne++){const He=se[ne];ao(T,P,He,He.viewport)}}else ao(T,P,Y);F!==null&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(R,P,Y),rt.resetDefaultState(),oe=-1,he=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,S.pop(),S.length>0?T=S[S.length-1]:T=null};function ln(P,Y,re,se){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||de.intersectsSprite(P)){se&&Ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ae);const He=ye.update(P),Ze=P.material;Ze.visible&&T.push(P,He,Ze,re,Ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||de.intersectsObject(P))){const He=ye.update(P),Ze=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ee.copy(P.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ee.copy(He.boundingSphere.center)),Ee.applyMatrix4(P.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ze)){const Ne=He.groups;for(let lt=0,it=Ne.length;lt<it;lt++){const st=Ne[lt],Pt=Ze[st.materialIndex];Pt&&Pt.visible&&T.push(P,He,Pt,re,Ee.z,st)}}else Ze.visible&&T.push(P,He,Ze,re,Ee.z,null)}}const Pe=P.children;for(let He=0,Ze=Pe.length;He<Ze;He++)ln(Pe[He],Y,re,se)}function ao(P,Y,re,se){const ne=P.opaque,Pe=P.transmissive,He=P.transparent;y.setupLightsView(re),W===!0&&ot.setGlobalState(R.clippingPlanes,re),Pe.length>0&&kr(ne,Pe,Y,re),se&&Ge.viewport(b.copy(se)),ne.length>0&&Li(ne,Y,re),Pe.length>0&&Li(Pe,Y,re),He.length>0&&Li(He,Y,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function kr(P,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const Pe=tt.isWebGL2;fe===null&&(fe=new ds(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?to:Nr,minFilter:ss,samples:Pe?4:0})),R.getDrawingBufferSize(Te),Pe?fe.setSize(Te.x,Te.y):fe.setSize(Ud(Te.x),Ud(Te.y));const He=R.getRenderTarget();R.setRenderTarget(fe),R.getClearColor(ue),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear();const Ze=R.toneMapping;R.toneMapping=Lr,Li(P,re,se),L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe);let Ne=!1;for(let lt=0,it=Y.length;lt<it;lt++){const st=Y[lt],Pt=st.object,_n=st.geometry,Gt=st.material,bn=st.group;if(Gt.side===$i&&Pt.layers.test(se.layers)){const gt=Gt.side;Gt.side=zn,Gt.needsUpdate=!0,Fr(Pt,re,se,_n,Gt,bn),Gt.side=gt,Gt.needsUpdate=!0,Ne=!0}}Ne===!0&&(L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe)),R.setRenderTarget(He),R.setClearColor(ue,j),R.toneMapping=Ze}function Li(P,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,Pe=P.length;ne<Pe;ne++){const He=P[ne],Ze=He.object,Ne=He.geometry,lt=se===null?He.material:se,it=He.group;Ze.layers.test(re.layers)&&Fr(Ze,Y,re,Ne,lt,it)}}function Fr(P,Y,re,se,ne,Pe){P.onBeforeRender(R,Y,re,se,ne,Pe),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(R,Y,re,se,P,Pe),ne.transparent===!0&&ne.side===$i&&ne.forceSinglePass===!1?(ne.side=zn,ne.needsUpdate=!0,R.renderBufferDirect(re,Y,se,ne,P,Pe),ne.side=Ur,ne.needsUpdate=!0,R.renderBufferDirect(re,Y,se,ne,P,Pe),ne.side=$i):R.renderBufferDirect(re,Y,se,ne,P,Pe),P.onAfterRender(R,Y,re,se,ne,Pe)}function er(P,Y,re){Y.isScene!==!0&&(Y=Qe);const se=at.get(P),ne=y.state.lights,Pe=y.state.shadowsArray,He=ne.state.version,Ze=ze.getParameters(P,ne.state,Pe,Y,re),Ne=ze.getProgramCacheKey(Ze);let lt=se.programs;se.environment=P.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(P.isMeshStandardMaterial?ee:A).get(P.envMap||se.environment),lt===void 0&&(P.addEventListener("dispose",Me),lt=new Map,se.programs=lt);let it=lt.get(Ne);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===He)return lo(P,Ze),it}else Ze.uniforms=ze.getUniforms(P),P.onBuild(re,Ze,R),P.onBeforeCompile(Ze,R),it=ze.acquireProgram(Ze,Ne),lt.set(Ne,it),se.uniforms=Ze.uniforms;const st=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(st.clippingPlanes=ot.uniform),lo(P,Ze),se.needsLights=co(P),se.lightsStateVersion=He,se.needsLights&&(st.ambientLightColor.value=ne.state.ambient,st.lightProbe.value=ne.state.probe,st.directionalLights.value=ne.state.directional,st.directionalLightShadows.value=ne.state.directionalShadow,st.spotLights.value=ne.state.spot,st.spotLightShadows.value=ne.state.spotShadow,st.rectAreaLights.value=ne.state.rectArea,st.ltc_1.value=ne.state.rectAreaLTC1,st.ltc_2.value=ne.state.rectAreaLTC2,st.pointLights.value=ne.state.point,st.pointLightShadows.value=ne.state.pointShadow,st.hemisphereLights.value=ne.state.hemi,st.directionalShadowMap.value=ne.state.directionalShadowMap,st.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,st.spotShadowMap.value=ne.state.spotShadowMap,st.spotLightMatrix.value=ne.state.spotLightMatrix,st.spotLightMap.value=ne.state.spotLightMap,st.pointShadowMap.value=ne.state.pointShadowMap,st.pointShadowMatrix.value=ne.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function oo(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Wl.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function lo(P,Y){const re=at.get(P);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function ac(P,Y,re,se,ne){Y.isScene!==!0&&(Y=Qe),L.resetTextureUnits();const Pe=Y.fog,He=se.isMeshStandardMaterial?Y.environment:null,Ze=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qi,Ne=(se.isMeshStandardMaterial?ee:A).get(se.envMap||He),lt=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,it=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),st=!!re.morphAttributes.position,Pt=!!re.morphAttributes.normal,_n=!!re.morphAttributes.color;let Gt=Lr;se.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const bn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=bn!==void 0?bn.length:0,ut=at.get(se),yn=y.state.lights;if(W===!0&&(ae===!0||P!==he)){const An=P===he&&se.id===oe;ot.setState(se,P,An)}let Ut=!1;se.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==yn.state.version||ut.outputColorSpace!==Ze||ne.isBatchedMesh&&ut.batching===!1||!ne.isBatchedMesh&&ut.batching===!0||ne.isInstancedMesh&&ut.instancing===!1||!ne.isInstancedMesh&&ut.instancing===!0||ne.isSkinnedMesh&&ut.skinning===!1||!ne.isSkinnedMesh&&ut.skinning===!0||ne.isInstancedMesh&&ut.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ut.instancingColor===!1&&ne.instanceColor!==null||ut.envMap!==Ne||se.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ot.numPlanes||ut.numIntersection!==ot.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==it||ut.morphTargets!==st||ut.morphNormals!==Pt||ut.morphColors!==_n||ut.toneMapping!==Gt||tt.isWebGL2===!0&&ut.morphTargetsCount!==gt)&&(Ut=!0):(Ut=!0,ut.__version=se.version);let Di=ut.currentProgram;Ut===!0&&(Di=er(se,Y,ne));let uo=!1,yi=!1,tr=!1;const Bt=Di.getUniforms(),Yn=ut.uniforms;if(Ge.useProgram(Di.program)&&(uo=!0,yi=!0,tr=!0),se.id!==oe&&(oe=se.id,yi=!0),uo||he!==P){Bt.setValue(K,"projectionMatrix",P.projectionMatrix),Bt.setValue(K,"viewMatrix",P.matrixWorldInverse);const An=Bt.map.cameraPosition;An!==void 0&&An.setValue(K,Ee.setFromMatrixPosition(P.matrixWorld)),tt.logarithmicDepthBuffer&&Bt.setValue(K,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Bt.setValue(K,"isOrthographic",P.isOrthographicCamera===!0),he!==P&&(he=P,yi=!0,tr=!0)}if(ne.isSkinnedMesh){Bt.setOptional(K,ne,"bindMatrix"),Bt.setOptional(K,ne,"bindMatrixInverse");const An=ne.skeleton;An&&(tt.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Bt.setValue(K,"boneTexture",An.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Bt.setOptional(K,ne,"batchingTexture"),Bt.setValue(K,"batchingTexture",ne._matricesTexture,L));const da=re.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0&&tt.isWebGL2===!0)&&ht.update(ne,re,Di),(yi||ut.receiveShadow!==ne.receiveShadow)&&(ut.receiveShadow=ne.receiveShadow,Bt.setValue(K,"receiveShadow",ne.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Yn.envMap.value=Ne,Yn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),yi&&(Bt.setValue(K,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&Ni(Yn,tr),Pe&&se.fog===!0&&Ce.refreshFogUniforms(Yn,Pe),Ce.refreshMaterialUniforms(Yn,se,ce,J,fe),Wl.upload(K,oo(ut),Yn,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Wl.upload(K,oo(ut),Yn,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Bt.setValue(K,"center",ne.center),Bt.setValue(K,"modelViewMatrix",ne.modelViewMatrix),Bt.setValue(K,"normalMatrix",ne.normalMatrix),Bt.setValue(K,"modelMatrix",ne.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const An=se.uniformsGroups;for(let Or=0,ho=An.length;Or<ho;Or++)if(tt.isWebGL2){const hs=An[Or];xt.update(hs,Di),xt.bind(hs,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Ni(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function co(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,Y,re){at.get(P.texture).__webglTexture=Y,at.get(P.depthTexture).__webglTexture=re;const se=at.get(P);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){const re=at.get(P);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,re=0){F=P,G=Y,O=re;let se=!0,ne=null,Pe=!1,He=!1;if(P){const Ne=at.get(P);Ne.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(K.FRAMEBUFFER,null),se=!1):Ne.__webglFramebuffer===void 0?L.setupRenderTarget(P):Ne.__hasExternalTextures&&L.rebindTextures(P,at.get(P.texture).__webglTexture,at.get(P.depthTexture).__webglTexture);const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(He=!0);const it=at.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?ne=it[Y][re]:ne=it[Y],Pe=!0):tt.isWebGL2&&P.samples>0&&L.useMultisampledRTT(P)===!1?ne=at.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ne=it[re]:ne=it,b.copy(P.viewport),U.copy(P.scissor),le=P.scissorTest}else b.copy(X).multiplyScalar(ce).floor(),U.copy(N).multiplyScalar(ce).floor(),le=z;if(Ge.bindFramebuffer(K.FRAMEBUFFER,ne)&&tt.drawBuffers&&se&&Ge.drawBuffers(P,ne),Ge.viewport(b),Ge.scissor(U),Ge.setScissorTest(le),Pe){const Ne=at.get(P.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,re)}else if(He){const Ne=at.get(P.texture),lt=Y||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ne.__webglTexture,re||0,lt)}oe=-1},this.readRenderTargetPixels=function(P,Y,re,se,ne,Pe,He){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=at.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){Ge.bindFramebuffer(K.FRAMEBUFFER,Ze);try{const Ne=P.texture,lt=Ne.format,it=Ne.type;if(lt!==vi&&ke.convert(lt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=it===to&&(Ve.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(it!==Nr&&ke.convert(it)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Yi&&(tt.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-se&&re>=0&&re<=P.height-ne&&K.readPixels(Y,re,se,ne,ke.convert(lt),ke.convert(it),Pe)}finally{const Ne=F!==null?at.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(K.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(P,Y,re=0){const se=Math.pow(2,-re),ne=Math.floor(Y.image.width*se),Pe=Math.floor(Y.image.height*se);L.setTexture2D(Y,0),K.copyTexSubImage2D(K.TEXTURE_2D,re,0,0,P.x,P.y,ne,Pe),Ge.unbindTexture()},this.copyTextureToTexture=function(P,Y,re,se=0){const ne=Y.image.width,Pe=Y.image.height,He=ke.convert(re.format),Ze=ke.convert(re.type);L.setTexture2D(re,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,re.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,re.unpackAlignment),Y.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,se,P.x,P.y,ne,Pe,He,Ze,Y.image.data):Y.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,se,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,He,Y.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,se,P.x,P.y,He,Ze,Y.image),se===0&&re.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,re,se,ne=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=P.max.x-P.min.x+1,He=P.max.y-P.min.y+1,Ze=P.max.z-P.min.z+1,Ne=ke.convert(se.format),lt=ke.convert(se.type);let it;if(se.isData3DTexture)L.setTexture3D(se,0),it=K.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)L.setTexture2DArray(se,0),it=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,se.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,se.unpackAlignment);const st=K.getParameter(K.UNPACK_ROW_LENGTH),Pt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),_n=K.getParameter(K.UNPACK_SKIP_PIXELS),Gt=K.getParameter(K.UNPACK_SKIP_ROWS),bn=K.getParameter(K.UNPACK_SKIP_IMAGES),gt=re.isCompressedTexture?re.mipmaps[ne]:re.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,gt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,gt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,P.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,P.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,P.min.z),re.isDataTexture||re.isData3DTexture?K.texSubImage3D(it,ne,Y.x,Y.y,Y.z,Pe,He,Ze,Ne,lt,gt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(it,ne,Y.x,Y.y,Y.z,Pe,He,Ze,Ne,gt.data)):K.texSubImage3D(it,ne,Y.x,Y.y,Y.z,Pe,He,Ze,Ne,lt,gt),K.pixelStorei(K.UNPACK_ROW_LENGTH,st),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Pt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,_n),K.pixelStorei(K.UNPACK_SKIP_ROWS,Gt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,bn),ne===0&&se.generateMipmaps&&K.generateMipmap(it),Ge.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),Ge.unbindTexture()},this.resetState=function(){G=0,O=0,F=null,Ge.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qd?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?ls:zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ls?an:Qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class GE extends lv{}GE.prototype.isWebGL1Renderer=!0;class Yd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Yd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VE extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cv extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ag=new Kt,Fd=new Wg,Ol=new nc,zl=new q;class Od extends jn{constructor(e=new _i,t=new cv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ol.copy(s.boundingSphere),Ol.applyMatrix4(o),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;ag.copy(o).invert(),Fd.copy(e.ray).applyMatrix4(ag);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,x=s.attributes.position;if(m!==null){const _=Math.max(0,h.start),w=Math.min(m.count,h.start+h.count);for(let E=_,T=w;E<T;E++){const y=m.getX(E);zl.fromBufferAttribute(x,y),og(zl,y,p,o,e,t,this)}}else{const _=Math.max(0,h.start),w=Math.min(x.count,h.start+h.count);for(let E=_,T=w;E<T;E++)zl.fromBufferAttribute(x,E),og(zl,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function og(r,e,t,s,o,l,h){const d=Fd.distanceSqToPoint(r);if(d<t){const p=new q;Fd.closestPointToPoint(r,p),p.applyMatrix4(s);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class WE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let o=0;const l=s.length;let h;t?h=t:h=e*s[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=s[o]-h,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,s[o]===h)return o/(l-1);const g=s[o],_=s[o+1]-g,w=(h-g)/_;return(o+w)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const h=this.getPoint(o),d=this.getPoint(l),p=t||(h.isVector2?new Mt:new q);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new q,o=[],l=[],h=[],d=new q,p=new Kt;for(let w=0;w<=e;w++){const E=w/e;o[w]=this.getTangentAt(E,new q)}l[0]=new q,h[0]=new q;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=m&&(m=g,s.set(1,0,0)),x<=m&&(m=x,s.set(0,1,0)),_<=m&&s.set(0,0,1),d.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],d),h[0].crossVectors(o[0],l[0]);for(let w=1;w<=e;w++){if(l[w]=l[w-1].clone(),h[w]=h[w-1].clone(),d.crossVectors(o[w-1],o[w]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(vn(o[w-1].dot(o[w]),-1,1));l[w].applyMatrix4(p.makeRotationAxis(d,E))}h[w].crossVectors(o[w],l[w])}if(t===!0){let w=Math.acos(vn(l[0].dot(l[e]),-1,1));w/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(w=-w);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],w*E)),h[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Kd(){let r=0,e=0,t=0,s=0;function o(l,h,d,p){r=l,e=d,t=-3*l+3*h-2*d-p,s=2*l-2*h+d+p}return{initCatmullRom:function(l,h,d,p,m){o(h,d,m*(d-l),m*(p-h))},initNonuniformCatmullRom:function(l,h,d,p,m,g,x){let _=(h-l)/m-(d-l)/(m+g)+(d-h)/g,w=(d-h)/g-(p-h)/(g+x)+(p-d)/x;_*=g,w*=g,o(h,d,_,w)},calc:function(l){const h=l*l,d=h*l;return r+e*l+t*h+s*d}}}const Bl=new q,Sd=new Kd,wd=new Kd,Md=new Kd;class Xl extends WE{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new q){const s=t,o=this.points,l=o.length,h=(l-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,g;this.closed||d>0?m=o[(d-1)%l]:(Bl.subVectors(o[0],o[1]).add(o[0]),m=Bl);const x=o[d%l],_=o[(d+1)%l];if(this.closed||d+2<l?g=o[(d+2)%l]:(Bl.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const w=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(x),w),T=Math.pow(x.distanceToSquared(_),w),y=Math.pow(_.distanceToSquared(g),w);T<1e-4&&(T=1),E<1e-4&&(E=T),y<1e-4&&(y=T),Sd.initNonuniformCatmullRom(m.x,x.x,_.x,g.x,E,T,y),wd.initNonuniformCatmullRom(m.y,x.y,_.y,g.y,E,T,y),Md.initNonuniformCatmullRom(m.z,x.z,_.z,g.z,E,T,y)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(m.x,x.x,_.x,g.x,this.tension),wd.initCatmullRom(m.y,x.y,_.y,g.y,this.tension),Md.initCatmullRom(m.z,x.z,_.z,g.z,this.tension));return s.set(Sd.calc(p),wd.calc(p),Md.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(new q().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class XE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);const bi={bg:new je("#04060a"),fog:new je("#04060a"),soil:new je("#241813"),soilDeep:new je("#0c0806"),scan:new je("#37e6d0"),node:new je("#7bffd6"),seed:new je("#8a5a32"),bark:new je("#5b4327"),barkTip:new je("#8fe6b0"),leaf:new je("#2f9e46"),leafGloss:new je("#7fffa8"),blossom:new je("#fff3c4"),appleUnripe:new je("#7cae3a"),appleRipe:new je("#cf2130"),appleBlush:new je("#f2544a")},cs=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Zs=(r,e,t)=>r+(e-r)*t;function mn(r,e,t){const s=cs((r-e)/(t-e));return s*s*(3-2*s)}function qE(r,e,t){const s=cs((r-e)/(t-e));return Math.sin(s*Math.PI)}function $E(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function YE(r=7,e={}){const{trunkHeight:t=5.2,branchLenMul:s=1,tiltMul:o=1,leafCountMul:l=1,leafScaleMul:h=1}=e,d=$E(r),p=(S,C)=>S+d()*(C-S),m=[],g=[],x=[];let _=1e-4;function w(S,C,R,D,G,O,F){const he=[],b=new q(0,1,0),U=new q(p(-1,1),0,p(-1,1)).normalize(),le=O===0?0:p(.08,.22);S.clone(),C.clone().normalize().multiplyScalar(R/7);for(let X=0;X<=7;X++){const N=X/7,z=S.clone().addScaledVector(C.clone().normalize(),R*N);z.addScaledVector(U,Math.sin(N*Math.PI)*R*.06*p(.5,1.2)),z.y-=le*R*N*N,he.push(z)}const ue=new Xl(he),j=F+R,ie={curve:ue,r0:D,r1:G,depth:O,startDist:F,endDist:j,gStart:0,gEnd:0};m.push(ie);const J=m.length-1;_=Math.max(_,j);const ce=he[he.length-1],V=ce.clone().sub(he[he.length-2]).normalize();if(O>=2){const X=Math.floor(p(3,7)*l);for(let N=0;N<X;N++){const z=p(.35,1),de=ue.getPoint(z),W=F+R*z,fe=new q(de.x,0,de.z).normalize().clone().lerp(b,.35).addScaledVector(new q(p(-1,1),p(-.3,1),p(-1,1)),.5).normalize();g.push({pos:de,normal:fe,scale:p(.7,1.25)*h,spin:p(0,Math.PI*2),growth:W,branchIndex:J,branchT:z})}}if(O>=2&&d()<.55){const X=ce.clone();X.y-=G*2+.15,x.push({pos:X,scale:p(.8,1.15),growth:j,anchor:ce.clone(),branchIndex:J})}if(O<4){const X=O===0?4:O===1?3:2;for(let N=0;N<X;N++){const z=O===0?p(.82,1):p(.45,.95),de=ue.getPoint(z),W=F+R*z,ae=N/X*Math.PI*2+p(-.5,.5),fe=(O===0?p(.5,.9):p(.6,1.15))*o,Ae=new q(Math.cos(ae)*Math.sin(fe),Math.cos(fe)+.35,Math.sin(ae)*Math.sin(fe)).normalize();Ae.lerp(V,.25).normalize();const Te=R*p(.55,.75)*s,Ee=G*p(.7,.95),Qe=Ee*.55;w(de,Ae,Te,Ee,Qe,O+1,W)}}}w(new q(0,0,0),new q(.05,1,.02),t,.55,.34,0,0);for(const S of m)S.gStart=S.startDist/_,S.gEnd=S.endDist/_;for(const S of g)S.growth/=_;for(const S of x)S.growth/=_;let E=0,T=-1/0;x.forEach((S,C)=>{const R=S.pos.y+S.pos.z*.4-Math.abs(S.pos.x)*.2;R>T&&(T=R,E=C)});const y=x.length?x[E].branchIndex:-1;return{branches:m,leaves:g,fruits:x,fallIndex:E,fallBranchIndex:y,maxDist:_}}function KE(r={}){return new Pi({transparent:!0,depthWrite:!1,depthTest:!0,blending:eo,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:r.size??2},uDrift:{value:r.drift??.14},uOpacity:{value:r.opacity??1},uFall:{value:1},uFallHeight:{value:r.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new je("#7cae3a")},uRipe:{value:new je("#cf2130")},uBlush:{value:new je("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
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
    `})}const jl=new q,cg=new ca,ZE=new q(0,1,0);class Ar{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,t,s,o,l,h){this.pos.push(e,t,s),this.growth.push(o),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(h)}addCurve(e,t,s,o,l,h,d,p){for(let m=0;m<s;m++){const g=Math.random(),x=e.getPoint(g),_=t*(.3+Math.pow(Math.random(),.5))*1.1,w=Math.random()*Math.PI*2,E=(Math.random()-.5)*t;x.x+=Math.cos(w)*_,x.z+=Math.sin(w)*_,x.y+=E;const T=o+(l-o)*g;this.push(x.x,x.y,x.z,T,h,d+Math.random()*(p-d))}}addLeafPuff(e,t,s,o,l,h,d,p,m){cg.setFromUnitVectors(ZE,t);for(let g=0;g<l;g++){const x=Math.pow(Math.random(),.75),_=Math.sin(Math.max(0,x)*Math.PI),w=(Math.random()*2-1)*_*o,E=x*s,T=(Math.random()*2-1)*_*o*.4;jl.set(w,E,T).applyQuaternion(cg).add(e),this.push(jl.x,jl.y,jl.z,h,d,p+Math.random()*(m-p))}}addBlob(e,t,s,o,l,h,d,p,m){for(let g=0;g<l;g++){const x=Math.random(),_=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1),E=Math.pow(x,.6),T=e.x+E*Math.sin(w)*Math.cos(_)*t,y=e.y+E*Math.cos(w)*s,S=e.z+E*Math.sin(w)*Math.sin(_)*o;this.push(T,y,S,h,d,p+Math.random()*(m-p))}}build(e){const t=new _i;t.setAttribute("position",new On(this.pos,3)),t.setAttribute("aGrowth",new On(this.growth,1)),t.setAttribute("aColor",new On(this.color,3)),t.setAttribute("aRand",new On(this.rand,1)),t.setAttribute("aSize",new On(this.size,1));const s=new Od(t,e);return s.frustumCulled=!1,s}}const mi=(r,e,t)=>new q(r,e,t),Hl=mi(1.2,-1,0);class QE{constructor(e){this.scene=e,this.tree=YE(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Qa,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const t=KE(e);return this.mats.push(t),t}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new Yd(new je("#04060a"),.013);const t=1300,s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*46,s[l*3+1]=Math.random()*26-4,s[l*3+2]=(Math.random()-.5)*46;const o=new _i;o.setAttribute("position",new xi(s,3)),this.ambient=new Od(o,new cv({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:eo})),e.add(this.ambient)}buildWaveField(){const s=[],o=[];for(let h=0;h<176;h++)for(let d=0;d<176;d++){const p=-15+h/175*2*15,m=-15+d/175*2*15;Math.hypot(p,m)>15||(s.push(p,0,m),o.push(Math.random()))}const l=new _i;l.setAttribute("position",new On(s,3)),l.setAttribute("aRand",new On(o,1)),this.waveMat=new Pi({transparent:!0,depthWrite:!1,blending:eo,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uRippleCenter:{value:new Mt(0,0)},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new je("#0b3f7a")},uHigh:{value:new je("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
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
      `}),this.wave=new Od(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new Ar,t=new je("#5c3418"),s=.45;for(let o=0;o<3200;o++){const l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),d=.7+.3*Math.pow(Math.random(),.85);let p=Math.cos(l)*Math.sin(h)*d,m=Math.cos(h)*d,g=Math.sin(l)*Math.sin(h)*d;const x=(m+1)/2,_=1-.72*Math.pow(1-x,1.8);p*=.44*_,g*=.34*_,m*=.62,e.push(p,s+m,g,0,t,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new Ar,t=(x,_)=>x+Math.random()*(_-x),s=[];let o=.001;const l=(x,_,w,E,T,y)=>{const C=[],R=new q(t(-1,1),0,t(-1,1)).normalize(),D=_.clone().normalize();for(let oe=0;oe<=6;oe++){const he=oe/6,b=x.clone().addScaledVector(D,w*he);b.y-=Math.pow(he,1.3)*w*.22,b.addScaledVector(R,Math.sin(he*Math.PI)*w*.13*t(.4,1.1)),C.push(b)}const G=new Xl(C),O=E*.14,F=T+w;if(s.push({curve:G,r0:E,r1:O,startDist:T,endDist:F,depth:y}),o=Math.max(o,F),y<4){const oe=y===0||Math.random()<.45?3:2;for(let he=0;he<oe;he++){const b=t(.35,.94),U=G.getPoint(b),le=T+w*b,ue=t(0,Math.PI*2),j=t(.55,1.15),ie=new q(Math.cos(ue)*Math.sin(j),-Math.abs(Math.cos(j))-.3,Math.sin(ue)*Math.sin(j)).normalize(),J=w*t(.5,.72),ce=Zs(E,O,b)*t(.72,.95);l(U,ie,J,ce,le,y+1)}}};l(mi(0,-.4,0),mi(.05,-1,.03),2.6,.16,0,0);const h=bi.seed.clone(),d=new je("#d9a066"),p=new je;for(const x of s){const _=x.startDist/o,w=x.endDist/o,E=x.curve.getLength(),T=Math.max(50,Math.floor(E*460));for(let y=0;y<T;y++){const S=Math.random(),C=x.curve.getPoint(S),R=Zs(x.r0,x.r1,S),D=R*Math.pow(Math.random(),.6),G=Math.random()*Math.PI*2;C.x+=Math.cos(G)*D,C.z+=Math.sin(G)*D,C.y+=(Math.random()-.5)*R*.4,p.copy(h).lerp(d,S*.5);const O=Zs(1.9,.45,S)*(x.depth>=2?.8:1);e.push(C.x,C.y,C.z,Zs(_,w,S),p,O)}}const m=s[0],g=new je("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const x of this.nodeAlong){const _=m.curve.getPoint(x),w=(m.startDist+x*(m.endDist-m.startDist))/o;e.addBlob(_,.15,.15,.15,140,w,g,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new Ar,t=new je("#6fce63"),s=bi.leafGloss.clone(),o=new Xl([mi(0,0,0),mi(.04,.5,.02),mi(-.03,1,-.02),mi(0,1.5,0)]);e.addCurve(o,.05,1100,0,.65,t,.8,1.8);const l=mi(0,1.5,0),h=mi(-.9,.7,.15).normalize(),d=mi(.9,.7,-.15).normalize();e.addLeafPuff(l,h,.85,.4,900,.72,s,.8,2),e.addLeafPuff(l,d,.85,.4,900,.78,s,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new Ar,t=new je("#8a6636"),s=new je("#5e441f"),o=new je;this.tree.branches.forEach((l,h)=>{const d=l.curve.getLength(),p=Math.max(l.r1,(l.r0+l.r1)*.5),m=l.depth===0?900:230,g=Math.floor(d*m)+40,x=l.depth===0?.15:.55;o.copy(t).lerp(s,x+Math.random()*.3);let _=l.curve;if(h===this.tree.fallBranchIndex){const w=l.curve.points,E=w.map((T,y)=>T.clone().addScaledVector(Hl,y/(w.length-1)));_=new Xl(E)}e.addCurve(_,p,g,l.gStart,l.gEnd,o,1,2.6)}),this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new Ar,t=bi.leaf.clone(),s=bi.leafGloss.clone(),o=new je,l=new q;for(const d of this.tree.leaves){l.add(d.pos),o.copy(t).lerp(s,Math.random()*.5);const p=1.15*d.scale,m=.55*d.scale,g=d.branchIndex===this.tree.fallBranchIndex?d.pos.clone().addScaledVector(Hl,d.branchT):d.pos;e.addLeafPuff(g,d.normal,p,m,70,d.growth,o,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const h=4.6;for(let d=0;d<16e3;d++){const p=new q(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),m=Math.pow(Math.random(),.6)*h,g=l.clone().addScaledVector(p,m);g.y+=(h-m)*.15,o.copy(t).lerp(s,Math.random()*.6);const x=cs(.55+m/h*.45);e.push(g.x,g.y,g.z,x,o,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new Ar,t=bi.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone().add(Hl),this.tree.fruits.forEach((s,o)=>{o!==this.fallIndex&&e.addBlob(s.pos,.42*s.scale,.36*s.scale,.42*s.scale,200,s.growth,t,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(bi.appleUnripe),e.uniforms.uRipe.value.copy(bi.appleRipe),e.uniforms.uBlush.value.copy(bi.appleBlush)}buildBlossoms(){const e=new Ar,t=bi.blossom.clone();this.tree.fruits.forEach((s,o)=>{const l=o===this.tree.fallIndex?s.anchor.clone().add(Hl):s.anchor;e.addBlob(l,.16,.16,.16,40,0,t,1.6,3.6)}),this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new Ar,t=bi.appleRipe.clone();e.addBlob(mi(0,0,0),.44,.38,.44,340,0,t,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,t){for(const E of this.mats)E.uniforms.uTime.value=t;this.waveMat.uniforms.uTime.value=t;const s=mn(e,0,.1);this.seedMat.uniforms.uFall.value=s;const o=mn(e,.1,.28);this.seed.position.y=-o*.8;const l=mn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=Zs(.55,.12,mn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*mn(e,.55,.72);let h=0,d=0;e<.5&&(h=mn(e,.08,.42),d=.7),this.rootMat.uniforms.uReveal.value=mn(e,.2,.4),this.roots.visible=e<.52;const p=mn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=p,this.seedlingMat.uniforms.uOpacity.value=1-mn(e,.56,.66),this.seedling.visible=p>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=mn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=mn(e,.56,.78);const m=mn(e,.72,.8)*(1-mn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=m,this.blossoms.visible=m>.01;const g=mn(e,.72,.86),x=mn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=g,this.fruitMat.uniforms.uRipen.value=x,this.fallMat.uniforms.uRipen.value=x;const _=cs((e-.86)/(.94-.86)),w=_*_;this.fall.visible=g>.01,this.fall.position.set(this.fallAnchor.x,Zs(this.fallAnchor.y,.3,w),this.fallAnchor.z),this.fall.rotation.z=_*3,e>=.94?(h=mn(e,.94,1),d=1.8,this.waveMat.uniforms.uRippleCenter.value.set(this.fallAnchor.x,this.fallAnchor.z)):this.waveMat.uniforms.uRippleCenter.value.set(0,0),this.waveMat.uniforms.uRipple.value=h,this.waveMat.uniforms.uRippleAmp.value=d,this.ambient.rotation.y=t*.008}}const Un=(r,e,t)=>new q(r,e,t),Gl=[{p:0,pos:Un(0,6.5,21),tgt:Un(0,1.6,0)},{p:.16,pos:Un(2.2,5.2,18),tgt:Un(0,.6,0)},{p:.34,pos:Un(4.5,-1.2,14),tgt:Un(0,-2.4,0)},{p:.5,pos:Un(2.6,2.6,13),tgt:Un(0,1.2,0)},{p:.72,pos:Un(-3.2,7.5,27),tgt:Un(0,7,0)},{p:.86,pos:Un(6,11.5,23),tgt:Un(.4,9.5,0)},{p:1,pos:Un(0,8.5,34),tgt:Un(0,8,0)}],JE=r=>r*r*(3-2*r);function e1(r){return r<.2?0:r<.4?1:r<.58?2:r<.78?3:4}function t1(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function n1(r){r.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(s=>{Object.values(s).forEach(o=>{o&&o.isTexture&&o.dispose()}),s.dispose()})})}function i1({sectionRef:r,onStageChange:e,onAnnotationChange:t,onWebGLUnavailable:s}){const o=be.useRef(null),l=be.useRef(e);l.current=e;const h=be.useRef(t);h.current=t;const d=be.useRef(s);return d.current=s,be.useEffect(()=>{const p=o.current,m=r.current;if(!p||!m)return;const g=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let x;try{x=new lv({canvas:p,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{d.current&&d.current();return}x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(window.innerWidth,window.innerHeight),x.setClearColor(0,0),x.toneMapping=Pg,x.toneMappingExposure=1.1;const _=new VE,w=new ii(50,window.innerWidth/window.innerHeight,.1,400);w.position.set(0,5,12);const E=new QE(_);let T=!1;const y=new q,S=new q,C=(z,de)=>{let W=0;for(;W<Gl.length-2&&z>Gl[W+1].p;)W++;const ae=Gl[W],fe=Gl[W+1],Ae=JE(cs((z-ae.p)/(fe.p-ae.p)));y.lerpVectors(ae.pos,fe.pos,Ae),S.lerpVectors(ae.tgt,fe.tgt,Ae);const Te=qE(z,.5,.72);S.y+=Te*1.7,y.y+=Te*.9,y.z+=Te*3.2,y.x+=Math.sin(de*.22)*.3,y.y+=Math.cos(de*.18)*.18,T&&y.sub(S).multiplyScalar(1.28).add(S),w.position.copy(y),w.lookAt(S)},R=()=>{const z=window.innerWidth,de=window.innerHeight;T=z<821,w.aspect=z/de,w.clearViewOffset(),x.setSize(z,de),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),T?w.setViewOffset(z,de,0,de*.2,z,de):w.setViewOffset(z,de,z*.22,0,z,de),w.updateProjectionMatrix()};R();const D=()=>{const z=m.getBoundingClientRect(),de=m.offsetHeight-window.innerHeight,W=cs(-z.top,0,Math.max(0,de));return de>0?cs(W/de):0};let G=-1,O=-1;const F=z=>{const de=e1(z);de!==G&&(G=de,l.current&&l.current(de));const W=t1(z);W!==O&&(O=W,h.current&&h.current(W))},oe=new XE;let he=D(),b=null,U=!1;const le=()=>{const z=D();he=z,E.update(z,0),C(z,0),F(z),x.render(_,w)},ue=()=>{if(!U)return;const z=Math.min(oe.getDelta(),.05),de=oe.elapsedTime,W=D(),ae=1-Math.pow(.0015,z);he+=(W-he)*ae,E.update(he,de),C(he,de),F(he),x.render(_,w),b=requestAnimationFrame(ue)},j=()=>{U||g||(U=!0,oe.getDelta(),b=requestAnimationFrame(ue))},ie=()=>{U=!1,b&&(cancelAnimationFrame(b),b=null)},J=()=>{const z=m.getBoundingClientRect(),de=200;return z.bottom>-de&&z.top<window.innerHeight+de},ce=()=>{R(),g&&le()};window.addEventListener("resize",ce);const V=z=>{z.preventDefault(),ie()};p.addEventListener("webglcontextlost",V,!1);let Q=null,X=null,N=null;return g?(Q=()=>le(),window.addEventListener("scroll",Q,{passive:!0}),le()):(X=new IntersectionObserver(z=>{z.some(W=>W.isIntersecting)&&!document.hidden?j():ie()},{rootMargin:"200px 0px 200px 0px"}),X.observe(m),N=()=>{document.hidden?ie():J()&&j()},document.addEventListener("visibilitychange",N)),()=>{var z;ie(),window.removeEventListener("resize",ce),Q&&window.removeEventListener("scroll",Q),X&&X.disconnect(),N&&document.removeEventListener("visibilitychange",N),p.removeEventListener("webglcontextlost",V,!1),n1(_),_.clear(),x.dispose(),(z=x.forceContextLoss)==null||z.call(x)}},[r]),c.jsx("canvas",{ref:o,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class uv extends Ir.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){const{error:e}=this.state;if(e){const{fallback:t}=this.props;return typeof t=="function"?t(e):t!==void 0?t:null}return this.props.children}}const r1=560,s1=[0,-1.5,1.5,-2,2],a1=[0,-6,5,-5,6];function o1(r,e,t){const s=t?"0px":"-50%";if(r<=e){const l=s1[r]??0;return{transform:`translate(${a1[r]??0}px, ${t?"0px":s}) rotate(${l}deg)`,opacity:1,zIndex:10+r}}return{transform:`translate(0, ${t?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function l1({card:r,style:e}){return c.jsxs("article",{className:"story-card",style:e,children:[c.jsx("div",{className:"sc-accent"}),c.jsxs("div",{className:"sc-body",children:[c.jsx("p",{className:"sc-num",children:r.num}),c.jsx("h3",{className:"sc-title",children:r.title}),r.callout&&c.jsxs("div",{className:"sc-callout",children:[c.jsx("span",{className:"sc-callout-label",children:r.callout.label}),c.jsx("p",{className:"sc-callout-text",children:r.callout.text})]}),c.jsx("div",{className:"sc-chips",children:r.human.map(t=>c.jsx("span",{className:"chip chip-human",children:t},t))}),c.jsxs("div",{className:"sc-ai",children:[c.jsxs("div",{className:"sc-ai-head",children:[c.jsx("span",{className:"sc-ai-star",children:"✦"}),c.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),c.jsx("div",{className:"sc-chips",style:{margin:0},children:r.ai.map(t=>c.jsx("span",{className:"chip chip-ai",children:t},t))})]})]})]})}function c1(){const r=be.useRef(null),{theme:e}=bg(),[t,s]=be.useState(0),[o,l]=be.useState(typeof window<"u"?window.innerWidth<821:!1);be.useEffect(()=>{const x=()=>l(window.innerWidth<821);return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const h=be.useCallback(x=>s(x),[]),[d,p]=be.useState(!1),m=be.useCallback(()=>p(!0),[]),g=be.useRef(null);return c.jsxs("section",{id:"practice",ref:r,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(40px,6vw,72px) clamp(22px,5vw,44px) clamp(28px,4.5vw,52px)",textAlign:"center"},children:[c.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"Practice"}),c.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.05,letterSpacing:"-0.03em",margin:"0 auto",maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),c.jsx("div",{ref:g,style:{position:"relative",height:`${r1}vh`},children:c.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[d&&c.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),c.jsx(uv,{fallback:null,children:c.jsx(i1,{sectionRef:g,onStageChange:h,onWebGLUnavailable:m})}),c.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:c.jsx("div",{className:"practice-card-shell",children:px.map((x,_)=>c.jsx(l1,{card:x,style:o1(_,t,o)},x.id))})})]})}),c.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const Vl={fontFamily:"var(--font-mono)"};function u1(){return c.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[c.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[c.jsx("div",{style:{...Vl,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"Instruments"}),c.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."}),c.jsxs("p",{style:{fontFamily:"var(--font-body)",fontSize:"clamp(15px,1.6vw,17px)",lineHeight:1.55,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"52ch"},children:["Three tools I designed and built for my own workflow — then published to the"," ",c.jsx("span",{style:{color:"var(--text-primary)"},children:"Figma Community"}),", where other designers use them too."]})]}),c.jsx("div",{className:"instruments-grid",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)"},children:mx.map((r,e)=>c.jsx("div",{"data-reveal":"",style:{transitionDelay:`${e*.09}s`,display:"flex"},children:c.jsxs("a",{href:r.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${r.alt} on the Figma Community`,className:"instrument-card",style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)",color:"inherit",width:"100%"},children:[c.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:c.jsx("img",{src:r.logo,alt:r.alt,className:"theme-logo",style:{...r.logoStyle,opacity:1}})}),c.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[c.jsx("div",{style:{...Vl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),c.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:r.problem}),c.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),c.jsx("div",{style:{...Vl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),c.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:r.result}),c.jsxs("div",{className:"instrument-cta",style:{...Vl,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginTop:20,display:"flex",alignItems:"center",gap:6},children:["View on Figma Community ",c.jsx("span",{className:"instrument-cta-arrow","aria-hidden":"true",children:"↗"})]})]})]})},r.id))})]})})}const d1=144,ug=40;function h1(r){const[e,t]=be.useState(-1),s=be.useCallback(h=>t(h),[]),o=be.useCallback(()=>t(-1),[]),l=be.useCallback((h,d)=>{const p=h*d1,m=r[h%r.length];if(e===-1)return{x:p,rot:m,scale:1,z:h};const g=h-e;return g===0?{x:p,rot:0,scale:1.04,z:100}:{x:p+(g<0?-ug:ug),rot:m,scale:.98,z:50-Math.abs(g)}},[e,r]);return{activeIndex:e,focus:s,rest:o,getTransform:l}}const f1=Td.map(r=>r.rot);function p1(){const{focus:r,rest:e,getTransform:t}=h1(f1),s=Td.length;return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{...dg,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),c.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:c.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:Td.map((o,l)=>{const h=t(l,s);return c.jsxs("article",{onMouseEnter:()=>r(l),onClick:()=>r(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${h.x}px) rotate(${h.rot}deg) scale(${h.scale})`,zIndex:h.z},children:[c.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),c.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:o.quote}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[c.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...dg,fontSize:10,fontWeight:700,flex:"none"},children:o.initials}),c.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[c.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:o.name}),c.jsx("br",{}),c.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:o.title})]})]})]},o.id)})})}),c.jsx("div",{style:{marginTop:16,textAlign:"right"},children:c.jsxs("a",{href:gx,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",c.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const dg={fontFamily:"var(--font-mono)"},hg={fontFamily:"var(--font-mono)"};function m1(){return c.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[c.jsx("div",{style:{...hg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),c.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[c.jsxs("div",{children:[c.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[Ti.quoteLead,c.jsx("span",{style:{color:"var(--accent)"},children:Ti.quoteAccent}),Ti.quoteTail]}),c.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:Ti.paragraphs[0]}),c.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:Ti.paragraphs[1]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"portrait-reveal",style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[c.jsx("img",{src:Ti.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),c.jsxs("div",{style:{padding:"16px 18px"},children:[c.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),c.jsx("div",{style:{...hg,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),c.jsx("div",{style:{marginTop:14},children:Ti.facts.map(r=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[c.jsx("span",{style:{color:"var(--text-secondary)"},children:r.label}),c.jsx("span",{style:{color:r.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:r.value})]},r.label))}),c.jsx("a",{href:Ti.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),c.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:c.jsx(p1,{})}),c.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[Ti.careerLine,c.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:Ti.careerHighlight})]})]})})}const fg={fontFamily:"var(--font-mono)"};function g1(){return c.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[c.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[c.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),c.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),c.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[c.jsx("div",{"data-reveal":"",style:{...fg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),c.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[Qs.heading," ",c.jsx("span",{style:{color:"var(--accent)"},children:Qs.headingAccent})]}),c.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:Qs.links.map(r=>c.jsx("a",{href:r.href,className:`text-link ${r.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:r.variant==="primary"?{paddingBottom:3}:void 0,...r.external?{target:"_blank",rel:"noopener noreferrer"}:{},...r.download?{download:!0}:{},children:r.label},r.label))}),c.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...fg,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:Qs.copyright})]})]})}function dv(r){be.useEffect(()=>{const e=r.current;if(!e||typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.setAttribute("data-reveal","visible"),t.unobserve(o.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(s=>t.observe(s)),()=>t.disconnect()},[r])}const v1="modulepreload",x1=function(r){return"/"+r},pg={},_1=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let h=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=h(t.map(m=>{if(m=x1(m),m in pg)return;pg[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":v1,g||(_.as="script"),_.crossOrigin="",_.href=m,p&&_.setAttribute("nonce",p),document.head.appendChild(_),g)return new Promise((w,E)=>{_.addEventListener("load",w),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return o.then(h=>{for(const d of h||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};function y1(r){be.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e,t,s=!1;return _1(async()=>{const{default:o}=await import("./lenis-niKyKZQP.js");return{default:o}},[]).then(({default:o})=>{if(s)return;e=new o({lerp:.1,smoothWheel:!0});const l=h=>{e.raf(h),t=requestAnimationFrame(l)};t=requestAnimationFrame(l)}),()=>{s=!0,t&&cancelAnimationFrame(t),e&&e.destroy()}},[r])}const S1=!0;function w1(){const r=be.useRef(null);return dv(r),y1(S1),be.useEffect(()=>{const e=window.location.hash.slice(1);if(!e)return;let t=!1;const s=()=>{t=!0};window.addEventListener("wheel",s,{passive:!0,once:!0}),window.addEventListener("touchmove",s,{passive:!0,once:!0});const o=[0,120,300,600].map(l=>setTimeout(()=>{var h;t||(h=document.getElementById(e))==null||h.scrollIntoView()},l));return()=>{o.forEach(clearTimeout),window.removeEventListener("wheel",s),window.removeEventListener("touchmove",s)}},[]),c.jsxs("div",{id:"top",ref:r,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[c.jsx(Ag,{}),c.jsxs("main",{children:[c.jsx(Mx,{}),c.jsx(Lx,{}),c.jsx(Ix,{}),c.jsx(c1,{}),c.jsx(u1,{}),c.jsx(m1,{})]}),c.jsx(g1,{})]})}const zd={},hv=Ir.createContext(zd);function Ji(r){const e=Ir.useContext(hv);return Ir.useMemo(function(){return typeof r=="function"?r(e):{...e,...r}},[e,r])}function M1(r){let e;return r.disableParentContext?e=typeof r.components=="function"?r.components(zd):r.components||zd:e=Ji(r.components),Ir.createElement(hv.Provider,{value:e},r.children)}function fv(){return c.jsx(Ag,{subpage:!0})}const vt=r=>c.jsx("path",{d:r},r),E1={user:[vt("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"),c.jsx("circle",{cx:"12",cy:"7",r:"4"},"c")],users:[vt("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"),c.jsx("circle",{cx:"9",cy:"7",r:"4"},"c"),vt("M22 21v-2a4 4 0 0 0-3-3.87"),vt("M16 3.13a4 4 0 0 1 0 7.75")],pin:[vt("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"),c.jsx("circle",{cx:"12",cy:"10",r:"3"},"c")],device:[c.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),vt("M12 18h.01")],calendar:[c.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"},"r"),vt("M16 2v4M8 2v4M3 10h18")],wrench:[vt("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")],rocket:[vt("M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"),vt("M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"),vt("M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"),vt("M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5")],trendUp:[c.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"},"a"),c.jsx("polyline",{points:"16 7 22 7 22 13"},"b")],cube:[vt("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"),vt("M3.27 6.96 12 12.01l8.73-5.05"),vt("M12 22.08V12")],layers:[c.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"},"a"),c.jsx("polyline",{points:"2 17 12 22 22 17"},"b"),c.jsx("polyline",{points:"2 12 12 17 22 12"},"c")],check:[vt("M22 11.08V12a10 10 0 1 1-5.93-9.14"),c.jsx("polyline",{points:"22 4 12 14.01 9 11.01"},"p")],ban:[c.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),c.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},"l")],shield:[vt("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],zap:[c.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},"p")],alert:[vt("M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"),c.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"},"a"),c.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},"b")],compass:[c.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),c.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},"p")],eye:[vt("M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"),c.jsx("circle",{cx:"12",cy:"12",r:"3"},"c")],refresh:[vt("M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"),vt("M21 3v5h-5"),vt("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"),vt("M8 16H3v5")],merge:[c.jsx("circle",{cx:"18",cy:"18",r:"3"},"a"),c.jsx("circle",{cx:"6",cy:"6",r:"3"},"b"),vt("M6 21V9a9 9 0 0 0 9 9")],minimize:[c.jsx("polyline",{points:"4 14 10 14 10 20"},"a"),c.jsx("polyline",{points:"20 10 14 10 14 4"},"b"),c.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"},"c"),c.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"},"d")],sliders:[c.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"},"a"),c.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"},"b"),c.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"},"c"),c.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"},"d"),c.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"},"e"),c.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"},"f"),c.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"},"g"),c.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"},"h"),c.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"},"i")],filter:[c.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},"p")],sparkles:[vt("M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7L12 3z"),vt("M19 15l.6 1.6L21 17.2l-1.4.6L19 19l-.6-1.6L17 17.8l1.4-.6L19 15z")],flask:[vt("M9 3h6"),vt("M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3"),vt("M7 15h10")],chart:[c.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"},"a"),c.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"},"b"),c.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"},"c")],flag:[vt("M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"),c.jsx("line",{x1:"4",y1:"22",x2:"4",y2:"15"},"l")],target:[c.jsx("circle",{cx:"12",cy:"12",r:"10"},"a"),c.jsx("circle",{cx:"12",cy:"12",r:"6"},"b"),c.jsx("circle",{cx:"12",cy:"12",r:"2"},"c")],smartphone:[c.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),vt("M12 18h.01")],lightbulb:[vt("M9 18h6"),vt("M10 22h4"),vt("M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14")]},mg={quote:"M9.5 5C6.5 5 4 7.5 4 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.6 19.5 13 16 13 10.6 13 7.3 11.6 5 9.5 5Zm10 0C16.5 5 14 7.5 14 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.6 19.5 23 16 23 10.6 23 7.3 21.6 5 19.5 5Z"};function si({name:r,size:e=18,strokeWidth:t=1.75,className:s,style:o,...l}){if(mg[r])return c.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false",...l,children:c.jsx("path",{d:mg[r]})});const h=E1[r];return h?c.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...l,children:h}):null}const pv=be.createContext({});function Bd(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(Bd).join(" "):r&&r.props?Bd(r.props.children):""}function mv(r){return Bd(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function T1({children:r,eyebrow:e,icon:t,id:s,...o}){const l=s||mv(r),h=be.useContext(pv),d=t||h[l];return c.jsxs("div",{className:"cs-heading",id:l,...o,children:[c.jsxs("div",{className:"cs-heading-eyebrow",children:[c.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),d?c.jsx(si,{name:d,size:14,className:"cs-heading-icon"}):null,e?c.jsx("span",{children:e}):null]}),c.jsx("h2",{className:"cs-heading-title",children:c.jsx("a",{href:`#${l}`,className:"cs-heading-anchor",children:r})})]})}function b1({children:r,id:e,...t}){const s=e||mv(r);return c.jsx("h3",{className:"cs-subheading",id:s,...t,children:r})}function gv({label:r="The outcome",icon:e="rocket",items:t=[],...s}){return c.jsxs("section",{className:"cs-outcomeband","aria-label":r,...s,children:[c.jsxs("div",{className:"cs-outcomeband-label",children:[c.jsx(si,{name:e,size:15}),c.jsx("span",{children:r})]}),c.jsx("div",{className:"cs-outcomeband-list",children:t.map((o,l)=>c.jsxs("div",{className:"cs-outcome",children:[c.jsx("span",{className:"cs-outcome-icon","aria-hidden":"true",children:c.jsx(si,{name:o.icon,size:20})}),c.jsx("div",{className:"cs-outcome-text",children:o.text})]},l))})]})}function Xe({children:r,lead:e=!1,className:t="",...s}){return c.jsx("div",{className:`cs-prose${e?" cs-prose--lead":""}${t?` ${t}`:""}`,...s,children:r})}function us({children:r,variant:e="principle",cite:t,...s}){const o=e==="user"?"user":"principle";return c.jsxs("figure",{className:`cs-pullquote cs-pullquote--${o}`,...s,children:[o==="user"?c.jsx("span",{className:"cs-pullquote-glyph","aria-hidden":"true",children:c.jsx(si,{name:"quote",size:40})}):c.jsx("span",{className:"cs-pullquote-chip","aria-hidden":"true",children:c.jsx(si,{name:"lightbulb",size:18})}),c.jsx("blockquote",{className:"cs-pullquote-text",children:r}),t?c.jsx("figcaption",{className:"cs-pullquote-cite",children:t}):null]})}function Dr({src:r,alt:e="",loading:t="lazy",phone:s=!1}){const[o,l]=be.useState(!1),h=r&&!o?c.jsx("span",{className:"cs-figure-media",children:c.jsx("img",{src:r,alt:e,loading:t,decoding:"async",onError:()=>l(!0)})}):c.jsx(A1,{alt:e,file:r});return s?c.jsx("span",{className:"cs-phone",children:c.jsx("span",{className:"cs-phone-screen",children:h})}):h}function A1({alt:r="",file:e,bare:t=!1}){const s=typeof e=="string"?e.split("/").pop():null;return c.jsxs("div",{className:`cs-placeholder${t?" cs-placeholder--bare":""}`,role:"img","aria-label":r||"Image placeholder",children:[c.jsx("span",{className:"cs-placeholder-tag",children:"Image"}),r?c.jsx("span",{className:"cs-placeholder-alt",children:r}):null,s?c.jsx("span",{className:"cs-placeholder-file",children:s}):null]})}function gn({src:r,alt:e="",caption:t,fullBleed:s=!1,wide:o=!1,phone:l=!1,...h}){const d=`cs-figure${s?" cs-figure--full":o?" cs-figure--wide":""}${l?" cs-figure--phone":""}`;return c.jsxs("figure",{className:d,...h,children:[c.jsx(Dr,{src:r,alt:e,phone:l}),t?c.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function Zd({src:r,alt:e="",chip:t,secondary:s,bare:o,light:l,...h}){const d=["cs-hero",s&&!o?"cs-hero--multi":"",o?"cs-hero--bare":"",l?"cs-hero--light":""].filter(Boolean).join(" ");return c.jsxs("div",{className:d,...h,children:[c.jsx("span",{className:"cs-hero-grid","aria-hidden":"true"}),c.jsx("span",{className:"cs-hero-glow","aria-hidden":"true"}),c.jsx("div",{className:"cs-hero-stage",children:o?c.jsx(Dr,{src:r,alt:e,loading:"eager"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"cs-hero-device cs-hero-device--tablet",children:c.jsx("div",{className:"cs-hero-screen",children:c.jsx(Dr,{src:r,alt:e,loading:"eager"})})}),s?c.jsx("div",{className:"cs-hero-device cs-hero-device--phone",children:c.jsx("div",{className:"cs-hero-screen cs-hero-screen--phone",children:c.jsx(Dr,{src:s.src,alt:s.alt})})}):null]})}),t?c.jsxs("span",{className:"cs-hero-chip",children:[c.jsx("span",{className:"cs-hero-chip-dot","aria-hidden":"true"}),t]}):null]})}function R1({items:r=[],caption:e,...t}){const s=Math.min(Math.max(r.length,1),4);return c.jsxs("figure",{className:"cs-illrow",style:{"--cs-cols":s},...t,children:[c.jsx("div",{className:"cs-illrow-grid",children:r.map((o,l)=>c.jsxs("div",{className:"cs-illrow-cell",children:[c.jsx(Dr,{src:o.src,alt:o.alt}),o.title||o.tag?c.jsxs("div",{className:"cs-illrow-meta",children:[o.title?c.jsx("div",{className:"cs-illrow-title",children:o.title}):null,o.tag?c.jsx("span",{className:`cs-illrow-tag cs-illrow-tag--${o.tone||"neutral"}`,children:o.tag}):null]}):null]},l))}),e?c.jsx("figcaption",{className:"cs-caption",children:e}):null]})}function vv({before:r={},after:e={},caption:t,beforeLabel:s="Before",afterLabel:o="After",...l}){return c.jsxs("figure",{className:"cs-beforeafter",...l,children:[c.jsxs("div",{className:"cs-beforeafter-grid",children:[c.jsxs("div",{className:"cs-ba-col",children:[c.jsx("span",{className:"cs-ba-tag cs-ba-tag--before",children:s}),c.jsx(Dr,{src:r.src,alt:r.alt})]}),c.jsxs("div",{className:"cs-ba-col",children:[c.jsx("span",{className:"cs-ba-tag cs-ba-tag--after",children:o}),c.jsx(Dr,{src:e.src,alt:e.alt})]})]}),t?c.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function Fn({title:r,index:e,tag:t,media:s,tradeoff:o,children:l,...h}){return c.jsxs("section",{className:"cs-decision",...h,children:[c.jsxs("div",{className:"cs-decision-rail",children:[e?c.jsx("div",{className:"cs-decision-index",children:e}):null,r?c.jsx("h3",{className:"cs-decision-title",children:r}):null,t?c.jsx("span",{className:"cs-decision-tag",children:t}):null]}),c.jsxs("div",{className:"cs-decision-main",children:[c.jsx("div",{className:"cs-decision-body",children:l}),s?c.jsxs("div",{className:`cs-decision-media${s.portrait?" cs-decision-media--portrait":""}`,children:[c.jsx(Dr,{src:s.src,alt:s.alt}),s.caption?c.jsx("div",{className:"cs-caption",children:s.caption}):null]}):null,o?c.jsxs("div",{className:"cs-tradeoff",children:[o.considered?c.jsxs("div",{className:"cs-tradeoff-row",children:[c.jsx("span",{className:"cs-tradeoff-label",children:"Alternative considered"}),c.jsx("p",{className:"cs-tradeoff-text",children:o.considered})]}):null,o.why?c.jsxs("div",{className:"cs-tradeoff-row",children:[c.jsx("span",{className:"cs-tradeoff-label",children:"Why we didn’t"}),c.jsx("p",{className:"cs-tradeoff-text",children:o.why})]}):null]}):null]})]})}function C1(r){return typeof r=="string"||typeof r=="number"?String(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""):""}function Qd({heading:r,eyebrow:e,icon:t,intro:s,coda:o,id:l,children:h,...d}){const p=l||C1(r);return c.jsxs("section",{className:"cs-decisionlist",id:p,...d,children:[c.jsxs("div",{className:"cs-decisionlist-head",children:[c.jsxs("div",{className:"cs-heading-eyebrow",children:[c.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),t?c.jsx(si,{name:t,size:14,className:"cs-heading-icon"}):null,e?c.jsx("span",{children:e}):null]}),r?c.jsx("h2",{className:"cs-decisionlist-title",children:c.jsx("a",{href:`#${p}`,className:"cs-heading-anchor",children:r})}):null,s?c.jsx("div",{className:"cs-prose cs-decisionlist-intro",children:s}):null]}),c.jsx("div",{className:"cs-decisionlist-rows",children:h}),o?c.jsxs("div",{className:"cs-decisionlist-coda",children:[o.title?c.jsx("h3",{className:"cs-subheading cs-decisionlist-coda-title",children:o.title}):null,o.body?c.jsx("div",{className:"cs-prose cs-decisionlist-coda-body",children:o.body}):null]}):null]})}function jd({caption:r,head:e=[],rows:t=[],rowHeader:s=!0,minWidth:o,...l}){return c.jsx("div",{className:"cs-table-wrap",...l,children:c.jsx("div",{className:"cs-table-scroll",children:c.jsxs("table",{className:"cs-table",style:o?{minWidth:o}:void 0,children:[r?c.jsx("caption",{children:r}):null,e.length?c.jsx("thead",{children:c.jsx("tr",{children:e.map((h,d)=>c.jsx("th",{scope:"col",children:h},d))})}):null,c.jsx("tbody",{children:t.map((h,d)=>c.jsx("tr",{children:h.map((p,m)=>m===0&&s?c.jsx("th",{scope:"row",children:p},m):c.jsx("td",{children:p},m))},d))})]})})})}function Jd({items:r=[],band:e=!1,caption:t,...s}){return c.jsxs("div",{className:`cs-metricrow${e?" cs-metricrow--band":""}`,...s,children:[c.jsx("div",{className:"cs-metricrow-grid",children:r.map((o,l)=>c.jsxs("div",{className:"cs-metric",children:[o.before?c.jsx("div",{className:"cs-metric-before",children:o.before}):null,o.icon?c.jsx("span",{className:"cs-metric-icon","aria-hidden":"true",children:c.jsx(si,{name:o.icon,size:18})}):null,o.value!=null?c.jsx("div",{className:`cs-metric-value${o.valueText?" cs-metric-value--text":""}`,children:o.value}):null,o.label?c.jsx("div",{className:"cs-metric-label",children:o.label}):null,o.note?c.jsx("div",{className:"cs-metric-note",children:o.note}):null]},l))}),t?c.jsx("div",{className:"cs-metricrow-caption",children:t}):null]})}function P1({eyebrow:r,heading:e,items:t=[],...s}){return c.jsxs("section",{className:"cs-insights","aria-label":e||"Research insights",...s,children:[r||e?c.jsxs("div",{className:"cs-insights-header",children:[r?c.jsxs("div",{className:"cs-heading-eyebrow",children:[c.jsx(si,{name:"lightbulb",size:14}),c.jsx("span",{children:r})]}):null,e?c.jsx("h3",{className:"cs-insights-title",children:e}):null]}):null,c.jsx("div",{className:"cs-insights-grid",children:t.map((o,l)=>c.jsxs("div",{className:"cs-insight",children:[c.jsxs("div",{className:"cs-insight-theme",children:[o.icon?c.jsx("span",{className:"cs-insight-icon",children:c.jsx(si,{name:o.icon,size:20})}):null,c.jsx("h4",{className:"cs-insight-title",children:o.title}),o.bullets?c.jsx("ul",{className:"cs-insight-bullets",children:o.bullets.map((h,d)=>c.jsx("li",{children:h},d))}):null]}),o.quotes&&o.quotes.length>0?c.jsx("div",{className:"cs-insight-quotes",children:o.quotes.map((h,d)=>c.jsxs("div",{className:"cs-insight-quote",children:[c.jsx(si,{name:"quote",size:16,className:"cs-insight-quote-mark"}),c.jsxs("div",{children:[c.jsx("p",{className:"cs-insight-quote-text",children:h.text}),h.source?c.jsx("span",{className:"cs-insight-quote-src",children:h.source}):null]})]},d))}):null]},l))})]})}function gg(){return c.jsx("svg",{className:"cs-wf-arrow",width:"32",height:"20",viewBox:"0 0 32 20",fill:"none","aria-hidden":"true",children:c.jsx("path",{d:"M0 10h26m0 0l-6-6m6 6l-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function vg({label:r,sub:e,tone:t}){return c.jsxs("div",{className:"cs-wf-step-wrap",children:[c.jsx("div",{className:`cs-wf-step cs-wf-step--${t}`,children:c.jsx("span",{children:r})}),e?c.jsx("span",{className:"cs-wf-step-sub",children:e}):null]})}function L1({old:r,new:e}){return c.jsxs("div",{className:"cs-wf-comparison",children:[c.jsxs("div",{className:"cs-wf-panel cs-wf-panel--old",children:[c.jsx("span",{className:"cs-wf-badge cs-wf-badge--old",children:"Old Workflow"}),c.jsxs("div",{className:"cs-wf-content",children:[c.jsx("div",{className:"cs-wf-flow",children:r.steps.map((t,s)=>c.jsxs(Ir.Fragment,{children:[s>0?c.jsx(gg,{}):null,c.jsx(vg,{label:t.label,sub:t.sub,tone:t.tone})]},s))}),r.note?c.jsx("p",{className:"cs-wf-note",children:r.note}):null]})]}),c.jsxs("div",{className:"cs-wf-panel cs-wf-panel--new",children:[c.jsx("span",{className:"cs-wf-badge cs-wf-badge--new",children:"New Workflow"}),c.jsx("div",{className:"cs-wf-content",children:c.jsxs("div",{className:"cs-wf-new-layout",children:[c.jsx("div",{className:"cs-wf-flow",children:e.steps.map((t,s)=>c.jsxs(Ir.Fragment,{children:[s>0?c.jsx(gg,{}):null,c.jsx(vg,{label:t.label,sub:t.sub,tone:t.tone})]},s))}),e.eliminated?c.jsxs("div",{className:"cs-wf-eliminated",children:[c.jsx("h4",{className:"cs-wf-eliminated-title",children:"What was eliminated"}),c.jsx("ul",{className:"cs-wf-eliminated-list",children:e.eliminated.map((t,s)=>c.jsxs("li",{children:[c.jsx("span",{className:"cs-wf-x",children:"×"})," ",t]},s))})]}):null]})})]})]})}function Hd({eyebrow:r,icon:e,items:t=[],...s}){return c.jsxs("section",{className:"cs-snapshot",...r?{"aria-label":r}:{},...s,children:[r?c.jsxs("div",{className:"cs-snapshot-eyebrow",children:[e?c.jsx(si,{name:e,size:14}):null,c.jsx("span",{children:r})]}):null,c.jsx("div",{className:"cs-snapshot-grid","data-cells":t.length,children:t.map((o,l)=>c.jsxs("div",{className:"cs-snapshot-cell",children:[c.jsx("div",{className:"cs-snapshot-label",children:o.label}),c.jsx("div",{className:"cs-snapshot-value",children:o.value})]},l))})]})}function N1({keySections:r=[]}){const[e,t]=be.useState([]),[s,o]=be.useState(""),[l,h]=be.useState(!1),d=new Set(r);be.useEffect(()=>{const g=document.querySelectorAll(".cs-content .cs-heading[id], .cs-content .cs-decisionlist[id]"),x=[];if(g.forEach(y=>{var C;const S=(((C=y.querySelector(".cs-heading-title, .cs-decisionlist-title"))==null?void 0:C.textContent)||"").trim();y.id&&S&&x.push({id:y.id,label:S})}),t(x),!x.length)return;const _=x.map(y=>document.getElementById(y.id)),w=()=>{let S=x[0].id;for(let C=0;C<_.length&&(_[C]&&_[C].getBoundingClientRect().top-130<=0);C+=1)S=x[C].id;return S};let E=0;const T=()=>{cancelAnimationFrame(E),E=requestAnimationFrame(()=>o(w()))};return o(w()),window.addEventListener("scroll",T,{passive:!0}),window.addEventListener("resize",T),()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),cancelAnimationFrame(E)}},[]);const p=be.useCallback(g=>{const x=document.getElementById(g);if(!x)return;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;x.scrollIntoView({behavior:_?"auto":"smooth",block:"start"}),h(!1);try{window.history.replaceState(null,"",`#${g}`)}catch{}},[]);if(e.length<3)return null;const m=(g,x)=>{const _=d.has(g.id);return c.jsx("li",{children:c.jsxs("button",{type:"button",className:`cs-rail-item${s===g.id?" is-active":""}${_?" is-key":""}`,"aria-current":s===g.id?"true":void 0,title:_?`${g.label} — key section`:g.label,onClick:()=>p(g.id),children:[x?c.jsx("span",{className:"cs-rail-dot","aria-hidden":"true"}):null,c.jsx("span",{className:"cs-rail-label",children:g.label})]})},g.id)};return c.jsxs(c.Fragment,{children:[c.jsxs("nav",{className:"cs-rail","aria-label":"On this page",children:[c.jsx("div",{className:"cs-rail-title",children:"On this page"}),c.jsx("ul",{className:"cs-rail-list",children:e.map(g=>m(g,!0))})]}),c.jsxs("div",{className:`cs-rail-mobile${l?" is-open":""}`,children:[l?c.jsx("ul",{className:"cs-rail-sheet","aria-label":"On this page",children:e.map(g=>m(g,!1))}):null,c.jsxs("button",{type:"button",className:"cs-rail-pill","aria-expanded":l,"aria-label":l?"Close section list":"Open section list",onClick:()=>h(g=>!g),children:[c.jsx("span",{className:"cs-rail-pill-icon","aria-hidden":"true",children:l?"×":"☰"}),"Contents"]})]})]})}const D1={h2:r=>c.jsx(T1,{...r}),h3:r=>c.jsx(b1,{...r})},I1={Role:"user",Team:"users",Region:"pin",Platform:"device",Timeline:"calendar",Tools:"wrench"};function U1({meta:r={},next:e,children:t}){const{title:s,subtitle:o,tags:l=[],glance:h=[],accent:d,keySections:p=[]}=r,m=d?{"--cs-accent":d}:void 0,g=be.useRef(null);return be.useEffect(()=>{const x=g.current;x&&x.querySelectorAll(".cs-content > *").forEach(_=>{!_.classList.contains("cs-figure--full")&&!_.classList.contains("cs-hero")&&_.setAttribute("data-reveal","")})},[]),dv(g),c.jsxs("div",{className:"cs-page",style:m,ref:g,children:[c.jsx(k1,{}),c.jsx(fv,{}),c.jsxs("main",{children:[c.jsxs("header",{className:"cs-wrap",children:[c.jsxs("div",{className:"cs-masthead",children:[l.length?c.jsx("div",{className:"cs-tags",children:l.join("  ·  ")}):null,s?c.jsx("h1",{className:"cs-title",children:s}):null,o?c.jsx("p",{className:"cs-subtitle",children:o}):null]}),h.length?c.jsx("dl",{className:"cs-glance",children:h.map(x=>c.jsxs("div",{className:"cs-glance-item",children:[c.jsx("span",{className:"cs-glance-icon","aria-hidden":"true",children:c.jsx(si,{name:x.icon||I1[x.label],size:16})}),c.jsxs("div",{className:"cs-glance-textwrap",children:[c.jsx("dt",{className:"cs-glance-label",children:x.label}),c.jsx("dd",{className:"cs-glance-value",children:x.value})]})]},x.label))}):null]}),c.jsx("div",{className:"cs-wrap",children:c.jsx("article",{className:"cs-content",children:t})})]}),c.jsx(N1,{keySections:p}),c.jsx(F1,{next:e})]})}function k1(){const r=be.useRef(null);return be.useEffect(()=>{let e=0;const t=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{const s=document.documentElement,o=s.scrollHeight-s.clientHeight,l=o>0?Math.min(Math.max(s.scrollTop/o,0),1):0;r.current&&(r.current.style.transform=`scaleX(${l})`)})};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),cancelAnimationFrame(e)}},[]),c.jsx("div",{className:"cs-progress","aria-hidden":"true",children:c.jsx("i",{ref:r})})}function F1({next:r}){var e;return c.jsx("footer",{className:"cs-footer",children:c.jsxs("div",{className:"cs-footer-inner",children:[c.jsx("div",{className:"cs-next-label",children:r?"Next project":"More work"}),r?c.jsxs(Jl,{to:`/case-studies/${r.slug}`,className:"cs-next-link",children:[c.jsx("span",{children:((e=r.meta)==null?void 0:e.title)||r.slug}),c.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}):c.jsxs("a",{href:"/#work",className:"cs-next-link",children:[c.jsx("span",{children:"See all work"}),c.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}),c.jsx("div",{className:"cs-footer-contact",children:Qs.links.map(t=>c.jsx("a",{href:t.href,className:`text-link ${t.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:t.variant==="primary"?{paddingBottom:3}:void 0,...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},...t.download?{download:!0}:{},children:t.label},t.label))}),c.jsxs("div",{className:"cs-footer-meta",children:[c.jsx("span",{children:Qs.copyright}),c.jsx("a",{href:"/#top",className:"text-link text-link--muted",children:"Back to top ↑"})]})]})})}const $n="/case-studies/cards/images",O1={order:2,title:"Self-service card management — a two-hour banking task, resolved in taps",subtitle:"Giving Neuflize OBC private-banking clients direct control of their debit cards — without loosening a single guardrail.",tags:["Private Banking","Native iOS & Android","Self-service","End-to-end ownership"],glance:[{label:"Role",value:"Sole designer, end to end — workshop facilitation, user flows, interaction and visual design, and design–engineering alignment"},{label:"Team",value:"1 Designer (me) · Engineering / tech lead · RMs & Operations as research stakeholders"},{label:"Client",value:"Neuflize OBC — ABN AMRO Private Banking, France"},{label:"Platform",value:"Native iOS & Android"},{label:"Design system",value:"ABN AMRO Emerald"},{label:"Status",value:"Live in production"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-hard-part-was-translation-not-requirements":"refresh","built-on-emerald":"layers","what-we-kept-with-a-human-on-purpose":"flag","the-impact-in-the-operation":"chart","the-takeaway":"target"},keySections:["the-outcome","the-design-decisions","what-we-kept-with-a-human-on-purpose","the-takeaway"]};function xg(r){const e={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...Ji(),...r.components};return c.jsxs(c.Fragment,{children:[`
`,`
`,`
`,c.jsx(Zd,{bare:!0,light:!0,src:`${$n}/01-hero.png`,alt:"Card Management hero — a hand holding a phone showing the Neuflize OBC Manage card screen, with the feature's other screens fanned behind it."}),`
`,c.jsx(e.h2,{children:"The outcome"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["At Neuflize OBC — ABN AMRO's private bank in France — clients had ",c.jsx(e.strong,{children:"no way to manage their own debit cards"}),". Adjusting a limit, blocking a lost card, turning on payments abroad: each one meant contacting a relationship manager and waiting."]}),c.jsxs(e.p,{children:["The feature I designed is ",c.jsx(e.strong,{children:"live in production"})," on native iOS and Android — not a prototype or a stalled pilot. It takes a change that used to run through two people and up to two hours, and resolves it in seconds, while keeping every check a private bank needs."]})]}),`
`,c.jsx(Jd,{band:!0,items:[{before:"2-hour wait",value:"< 60 sec",note:"to complete any card-management task"},{before:"2,000+ manual requests / yr",value:"~85%",note:"of card-related RM requests moved to self-service"},{before:"~80 ops hours / week",value:"~75%",note:"of manual processing automated end-to-end"}],caption:"Before → after · figures reported by the client's customer-service department"}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:c.jsx(e.em,{children:"One principle held the whole thing together:"})})}),`
`,c.jsx(us,{variant:"principle",children:c.jsxs(e.p,{children:[c.jsx("strong",{children:"Self-service doesn't mean removing friction everywhere."})," It means putting friction exactly where the ",c.jsx("em",{children:"risk"})," is — and nowhere else."]})}),`
`,c.jsx(e.h2,{children:"The problem"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"Picture being a private-banking client who wants to raise a card's spending limit before a big purchase. You can't do it yourself. You call — or email — your relationship manager, the personal banker every client is assigned. Eventually they pick up. You explain. They pass it to the operations team, who open the bank's internal system and make the change by hand, then report back up the chain to you."}),c.jsxs(e.p,{children:["Nothing about that request was complex. The wait was ",c.jsx(e.strong,{children:"entirely structural"})," — the client simply had no door into the system."]})]}),`
`,c.jsx(us,{variant:"user",children:"Clients weren't asking for anything clever. They wanted to change a limit or block a card — and felt powerless that they couldn't."}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"What that cost, measured across the operation:"}),c.jsxs(e.ul,{children:[`
`,c.jsxs(e.li,{children:["A client could wait ",c.jsx(e.strong,{children:"up to two hours"})," for a change as small as a limit bump."]}),`
`,c.jsxs(e.li,{children:["RMs fielded ",c.jsx(e.strong,{children:"2,000+ card requests a year"})," — routine work pulling them off the advisory conversations they're actually there for."]}),`
`,c.jsxs(e.li,{children:["Operations spent roughly ",c.jsx(e.strong,{children:"80 hours a week"})," processing those requests by hand, acting as a manual layer between the client and a system that could have taken the instruction directly."]}),`
`]}),c.jsxs(e.p,{children:["The core question was blunt: ",c.jsx(e.em,{children:"could card management become fully self-service — without a private bank giving up any of its control?"})]})]}),`
`,c.jsx(gn,{wide:!0,src:`${$n}/03-current-journey.png`,alt:"A service blueprint of the current journey for raising a card limit: client → relationship manager → operations team → card back-office → back again, with a row of frowning faces and pain-point notes across every handoff.",caption:"The old journey for one limit change: every column is a handoff, and the client can't act at any point in the chain."}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["The pattern was the whole problem: ",c.jsx(e.strong,{children:"every step was a handoff, and every handoff was a place it could stall."})," The fix wasn't to speed the chain up — it was to remove it, and let the client do the whole thing themselves."]})}),`
`,c.jsx(e.h2,{children:"How I approached it"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"I started with interviews on both sides of the counter — clients, bankers, operations, digital support — to find where the friction actually lived, not where the business assumed it did. Both sides agreed: clients felt powerless over trivial tasks, and the internal teams knew these requests were routine but still had to touch every one."}),c.jsxs(e.p,{children:["Then, before drawing anything, I ran a ",c.jsx(e.strong,{children:"workshop with stakeholders"})," — mapping the tasks clients actually did against the problems they actually hit, so we built for real behaviour, not an assumed feature list."]})]}),`
`,c.jsx(gn,{src:`${$n}/04-workshop.png`,alt:"A whiteboard from the discovery workshop: clustered sticky notes under Usage and Problem columns, with ‘How might we…’ questions written alongside for lost cards, managing multiple cards, changing limits, forgotten PINs and payment errors.",caption:"Mapping usage against real problems — the input that decided what to build first, and what to leave for later."}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["That mapping is where the ",c.jsx(e.strong,{children:"scope decision"})," got made. Four problems rose to the top — on how often they happened, and how cleanly they could go self-service:"]}),c.jsxs(e.ul,{children:[`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Limit change"})," — the single most common request"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Block / unblock"})," — urgent and time-sensitive by nature"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Card removal"})," — rare, but entirely manual today"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Payments abroad"})," — recurring friction for travelling clients"]}),`
`]}),c.jsx(e.p,{children:"Everything else stayed out of the first release on purpose. Choosing four and defending the boundary mattered as much as the design itself."}),c.jsxs(e.p,{children:[c.jsx(e.strong,{children:"One boundary worth naming:"})," I owned the client-facing design — the flows and the screens. The bank's back-end systems — the ones that set the limits, hold the card data, and check a client's identity — belonged to engineering, and the whole idea depended on the app being able to reach them. Knowing where my slice started and ended shaped every trade-off below."]})]}),`
`,c.jsx(e.h2,{children:"The hard part was translation, not requirements"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["I'll be honest about where the difficulty was. The ",c.jsx(e.em,{children:"ask"})," was never ambiguous: make card management self-service, keep it bank-grade secure. The hard part was the ",c.jsx(e.strong,{children:"design"})," — turning a task that had always been handled by a person, with all the checking and reassurance that person quietly provided, into a screen a client trusts enough to act on alone."]}),c.jsxs(e.p,{children:["Two surfaces carried most of that weight, and I explored both widely before committing. ",c.jsx(e.strong,{children:"The card landing page"})," had to answer a client's first two questions at a glance — ",c.jsx(e.em,{children:"what can I do here, and is my card okay?"})," ",c.jsx(e.strong,{children:"The limit-change flow"})," had to hold a lot at once — how much, for how long, and proof it's really you — without feeling like the phone call it replaced."]})]}),`
`,c.jsx(gn,{wide:!0,src:`${$n}/05-landing-explorations.png`,alt:"Six explorations of the card landing page side by side, varying how card state, limits, management actions and payment toggles are ordered and grouped.",caption:"Landing-page explorations, each tested against one question: does a client see their card's state and next action without thinking?"}),`
`,c.jsx(gn,{wide:!0,src:`${$n}/06-limit-explorations.png`,alt:"Explorations of the limit-change component: different ways of showing the current limit, a new amount, preset chips, and the temporary-versus-permanent choice.",caption:"Limit-change explorations — the hardest single component, because it had to carry amount, duration and identity at once."}),`
`,c.jsxs(Qd,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:c.jsx(c.Fragment,{children:"Every decision below is the same principle applied at a different level of risk: keep the low-risk actions instant, and spend the client's attention only where a mistake would actually cost them."}),coda:{title:"Built to survive real banking states",body:c.jsx(c.Fragment,{children:"Underneath all of it, the interface had to hold states the phone call used to absorb: a blocked card, a limit that's only temporary, missing contact details, an identity that still needs proving. One decision per screen, and the card's current state visible at every step."})},children:[c.jsx(Fn,{index:"01",tag:"Interaction",title:"The landing page shows state first, actions second",media:{src:`${$n}/08-manage-card-final.png`,portrait:!0,alt:"The final Manage card landing: the card itself, an active/blocked status line, Card details and Block, then live limits with progress bars, then payment toggles, then Delete card."},children:c.jsxs(e.p,{children:["The landing page opens with the card and a plain status line — ",c.jsx(e.em,{children:"this card is active"})," — then live payment and cash-withdrawal limits as progress bars, then management actions, and only then the ones you can't undo. It reads top to bottom as ",c.jsx(e.em,{children:"reassurance → routine → rare"}),": the client sees their card is okay, and what's left on it, before anything else — not an undifferentiated list where viewing details looks no different from raising a limit by €30k."]})}),c.jsx(Fn,{index:"02",tag:"Interaction",title:"Show current usage and the ceiling before any input",media:{src:`${$n}/12-limit-context.png`,alt:"The limit context card shown before input: “Remaining balance €5.750,00” with a progress bar reading “You spent €29.430 out of €30.000 within your current payment limit.”",caption:"Context before the field — what you’ve used and how high you’re allowed to go — so the number a client enters is an informed one."},children:c.jsx(e.p,{children:`Before the client types anything, the limit screen shows what they've already used and the ceiling they're allowed to reach. It's the same "state first" instinct as the landing page, applied to the riskiest input in the feature. This was the fix for the most common error we saw — clients setting a limit without understanding its bounds, then calling to sort it out afterwards.`})}),c.jsx(Fn,{index:"03",tag:"Security",title:"Authenticate at the point of commitment — not on the way in",media:{src:`${$n}/09-manage-payments.png`,portrait:!0,alt:"The Manage payments section: simple on/off toggles for Remote payment, Cash withdrawal and Payment abroad, with no authentication step."},tradeoff:{considered:"Gating the whole feature behind a verification wall — the compliance-safe instinct to lock every action.",why:c.jsxs(c.Fragment,{children:["Uniform friction would have rebuilt the exact wait we were removing. Most card actions are low-risk and reversible; a few aren't. So I put the identity step where the ",c.jsx(e.strong,{children:"commitment"})," is — raising a limit, deleting a card — and left browsing, viewing and toggling free."]})},children:c.jsx(e.p,{children:"Viewing your card and flipping low-risk switches — remote payment, cash withdrawal, payments abroad — happen instantly. The identity check appears only when a client is about to do something that would actually cost them if it were the wrong person. Same feature, friction matched to the stakes."})}),c.jsx(Fn,{index:"04",tag:"Compliance",title:"Default the limit change to temporary, not permanent",tradeoff:{considered:"A single permanent “new limit” field, the simplest possible control.",why:c.jsxs(c.Fragment,{children:["Watching the real requests, most limit bumps are for one reason — a large purchase, a trip — not a permanent change. A permanent-only field either over-exposes the client indefinitely or forces a ",c.jsx(e.em,{children:"second"})," call to put it back. Foregrounding a temporary increase with an automatic end date fit what clients actually needed."]})},children:c.jsxs(e.p,{children:["The flow makes duration part of the request: a client raises the limit ",c.jsx(e.em,{children:"for seven days"}),", or ",c.jsx(e.em,{children:"for thirty"}),", up to a clearly shown ceiling, and it reverts on its own. The card screen then shows a quiet “temporarily valid until…” note, so the temporary state is never a surprise. Identity is proven with a PIN step folded into the flow — not a separate hoop."]})}),c.jsx(gn,{wide:!0,src:`${$n}/10-limit-change-final.png`,alt:"The limit-change flow across screens: enter a new amount within a shown ceiling, a summary of current versus new limit with an end date, a 5-digit PIN identity step, and a success confirmation.",caption:"The limit-change flow — enter an amount within the ceiling → confirm the summary → prove identity → done. The end date is part of the request, not an afterthought."}),c.jsx(Fn,{index:"05",tag:"Interaction",title:"Block is instant and reversible — cancelling stays with a human",media:{src:`${$n}/11-block-card.png`,alt:"The block flow: a confirmation sheet to block the card, and the resulting blocked state with a padlock over the card, an Unblock action, and a note to call support to fully cancel."},children:c.jsx(e.p,{children:"A client blocks a card in one confirmation, and it visibly locks. Blocking is usually a moment of panic — a card briefly missing — so it's built to be undone in seconds: if it turns up, they unblock it just as fast, no call, no wait. Permanent cancellation can't be undone, so it deliberately stays a call to support."})}),c.jsxs(Fn,{index:"06",tag:"Trust",title:"Keep the human reachable — and hand off gracefully",children:[c.jsxs(e.p,{children:["Self-service should never feel like abandonment — least of all in private banking, where the relationship-manager bond carries real value. So a ",c.jsx(e.strong,{children:"Call customer service shortcut sits at the bottom of every screen"}),": the client is always one tap from a person, even mid-flow."]}),c.jsx(e.p,{children:"The same instinct shows up in how the flows fail safely. A sensitive change needs verified contact details — so the app checks up front, and if they're missing, it sends the client to the bank to fix that first, instead of dead-ending them at the last step."}),c.jsx(e.p,{children:"The vast majority of cases now resolve in the app. This decision is for the ones that don't: give them a clean exit, not a dead end."})]})]}),`
`,c.jsx(e.h2,{children:"Built on Emerald"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["None of this shipped as custom, one-off design. Every screen is built from ",c.jsx(e.strong,{children:"ABN AMRO's Emerald design system"})," — the bank's shared library of ready-made, approved components — so the feature feels part of the wider app, and it reached development faster because engineers were assembling known pieces rather than interpreting new ones."]}),c.jsxs(e.p,{children:["That's the quiet leverage of working inside a system: I owned the ",c.jsx(e.em,{children:"flows and the decisions"}),"; the system carried the consistency and cut the build cost. On a regulated banking app, that's not a constraint to work around — it's what makes the work shippable."]}),c.jsxs(e.p,{children:["One piece of craft worth calling out: the digital cards deliberately ",c.jsx(e.strong,{children:"mirror the physical ones"})," — each product's real colour and pattern (Visa Infinite, Premier, Business…). A client finds ",c.jsx(e.em,{children:"their"})," card in the list by its look, not by reading the number. Recognition, not recall — a small thing that removes a real moment of friction every time they open the app."]})]}),`
`,c.jsx(gn,{src:`${$n}/13-card-designs.png`,alt:"The Neuflize OBC card designs — Visa Classic, Visa Infinite, Visa Business, Premier and Gold — each digital card replicating the colour and pattern of its physical counterpart.",caption:"Each digital card replicates its physical counterpart — so a client recognises their card by sight, without reading the number."}),`
`,c.jsx(e.h2,{children:"What we kept with a human, on purpose"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["The honest boundary of this release: ",c.jsx(e.strong,{children:"not every card action became self-service, and that was a design choice, not a gap I missed."})]}),c.jsxs(e.p,{children:["Two things still route to a person — ",c.jsx(e.strong,{children:"permanently cancelling a card"}),", and ",c.jsx(e.strong,{children:"fixing a wrong email or phone number"})," on file. Both are irreversible or identity-sensitive: cancellation can't be undone, and letting a client edit the very details used to verify them would defeat the check. The seconds saved by automating either aren't worth the risk."]}),c.jsxs(e.p,{children:["Both are deliberate. In a private bank, the right first release isn't the one that automates the most actions — it's the one that automates every action where doing it yourself is clearly ",c.jsx(e.em,{children:"safer and faster"}),", and knows exactly where to stop. Naming that line is the point, not apologising for it."]})]}),`
`,c.jsx(gn,{wide:!0,src:`${$n}/14-delete-card.png`,alt:"The delete-card flow: choose a reason (stolen, lost, fraud), opt into a replacement and a new PIN, confirm the details on file, review a summary, and a success screen — with a route to contact the RM if the details are wrong.",caption:"The most sensitive flow carries the most steps — reason, replacement, identity, and a confirm — with a human hand-off kept in reach when the details don't match."}),`
`,c.jsx(e.h2,{children:"The impact, in the operation"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["Those figures came from the client's customer-service department — the people who used to field the work — which is the validation I trust most. But the number I care about is ",c.jsx(e.em,{children:"who does the work"})," now: bankers got hours back for the advisory conversations that justify a private bank, operations stopped being a manual relay, and clients got something a phone call never gave them — the ability to act the moment they needed to."]}),c.jsx(e.p,{children:"The work also laid the groundwork for further self-service across the platform — and showed stakeholders that a frictionless client experience and the compliance demands of a regulated private bank aren't in opposition. They can be designed for together."})]}),`
`,c.jsx(e.h2,{children:"The takeaway"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["This wasn't a task made prettier. It was a ",c.jsx(e.strong,{children:"handoff chain collapsed into a flow the client runs alone"})," — and the discipline that made it safe to do was refusing to spread friction evenly."]}),c.jsxs(e.p,{children:["The clearest lesson: on a regulated product, self-service is a question of ",c.jsx(e.em,{children:"placement"}),", not addition. Put the guardrail exactly where the risk is, make everything else instant, and know — precisely — which few actions still belong with a human. That's what turns a two-hour call into a few taps without a bank giving up an ounce of control."]})]}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:c.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on the card-management feature, end to end."})})})]})}function z1(r={}){const{wrapper:e}={...Ji(),...r.components};return e?c.jsx(e,{...r,children:c.jsx(xg,{...r})}):xg(r)}const B1=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:$n,default:z1,meta:O1},Symbol.toStringTag,{value:"Module"})),j1={order:4,title:"Postbox — a complex document archive, made self-service",subtitle:"Reorganising a private-bank document archive around life events — the way clients actually think — across iOS, Android and web.",tags:["Private banking","Information architecture","Multi-platform","Self-service"],glance:[{label:"Client",value:"ABN AMRO"},{label:"Platform",value:"iOS · Android · Web"},{label:"Focus",value:"Document archive · information architecture"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-takeaway":"target"}};function _g(r){const e={em:"em",h2:"h2",p:"p",...Ji(),...r.components};return c.jsxs(c.Fragment,{children:[`
`,`
`,c.jsx(e.h2,{children:"The outcome"}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"A complex document archive made self-service — across all three platforms."})}),`
`,c.jsx(Jd,{items:[{icon:"smartphone",value:"3 platforms",valueText:!0,label:"iOS · Android · Web"},{icon:"target",value:"Self-serve",valueText:!0,label:"Was banker-led"}]}),`
`,c.jsx(e.h2,{children:"The problem"}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"Clients needed their banker to find every document, because files were sorted the bank's way, not theirs."})}),`
`,c.jsx(e.h2,{children:"How I approached it"}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job."})}),`
`,c.jsx(e.h2,{children:"The takeaway"}),`
`,c.jsx(us,{variant:"principle",children:c.jsx(e.p,{children:"Organise by life event — the client's mental model."})}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:c.jsx(e.em,{children:"Yogesh Shetty · Product Designer"})})})]})}function H1(r={}){const{wrapper:e}={...Ji(),...r.components};return e?c.jsx(e,{...r,children:c.jsx(_g,{...r})}):_g(r)}const G1=Object.freeze(Object.defineProperty({__proto__:null,default:H1,meta:j1},Symbol.toStringTag,{value:"Module"})),Ai="/case-studies/postoffice/images",V1={order:3,title:"Modernizing post-office management — a legacy counter terminal, re-architected as a cloud portal",subtitle:"A mandatory technical migration turned into operational freedom — moving staff management off a desk-bound terminal and into a device-agnostic cloud portal, then testing it with the people who run the counter.",tags:["Enterprise portal","Responsive web","Workforce management","Usability testing"],glance:[{label:"Role",value:"Design Consultant — owned the UX end to end: field research, interaction design, usability testing, and design–engineering alignment against a hard deadline"},{label:"Region",value:"Norway"},{label:"Platform",value:"Responsive web portal (mobile-first)"},{label:"Timeline",value:"1 month"},{label:"Tools",value:"Figma, Generative AI for early ideation"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-insight-that-changed-the-scope":"refresh","the-design-decisions":"sliders","what-testing-changed":"flask","how-the-work-got-made":"sparkles","the-impact":"chart","the-honest-limits":"flag","the-takeaway":"target"}};function yg(r){const e={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...Ji(),...r.components};return c.jsxs(c.Fragment,{children:[`
`,`
`,`
`,`
`,c.jsx(Zd,{src:`${Ai}/01-hero.png`,alt:"The finished staff-management portal shown on a desktop browser and a phone side by side — the same admin workflow, responsive across both.",bare:!0,chip:"Mandatory migration, delivered in 1 month"}),`
`,c.jsx(Hd,{eyebrow:"The 60-second version",icon:"compass",items:[{label:"The problem",value:c.jsxs(c.Fragment,{children:["A legacy in-store terminal chained staff admin to the front counter — no remote access, so managers kept private staff data in ",c.jsx(e.strong,{children:"paper notebooks"})," to work from home."]})},{label:"What I did",value:c.jsxs(c.Fragment,{children:['Reframed a "port the old tool" brief into ',c.jsx(e.strong,{children:"unbinding the work from the counter"})," — field research, the scope call, all interaction design, and a usability test that reshaped what shipped."]})},{label:"The result",value:c.jsxs(c.Fragment,{children:["A responsive, ",c.jsx(e.strong,{children:"remote-ready admin portal"}),". ~65% faster onboarding, and irreversible deletes replaced with a recoverable 7-day window."]})}]}),`
`,c.jsx(e.h2,{children:"The outcome"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["A legacy, counter-bound desktop terminal was re-architected into a modern, standalone cloud portal — one store admins could run from any device, anywhere. What started as a ",c.jsx(e.em,{children:"mandatory technical migration"})," became a genuine shift in how the people who run a shop actually work."]})}),`
`,c.jsx(gv,{items:[{icon:"rocket",text:c.jsxs(c.Fragment,{children:[c.jsx(e.strong,{children:"100% remote-ready portal"})," — admin work no longer chained to the physical service desk"]})},{icon:"trendUp",text:c.jsxs(c.Fragment,{children:[c.jsx(e.strong,{children:"~65% faster onboarding"})," — user creation and staff setup, down from a slow counter-only process"]})},{icon:"shield",text:c.jsxs(c.Fragment,{children:[c.jsx(e.strong,{children:"0% accidental data loss"})," — a 7-day recovery window (surfaced in testing) replaced irreversible hard deletes"]})}]}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["The whole project ran on one objective — ",c.jsx(e.strong,{children:"operational freedom"}),": move staff management off a single desk-bound terminal and into a device-agnostic cloud, so an admin's location stops deciding what they can get done."]})}),`
`,c.jsx(e.h2,{children:"The problem"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["On paper this was a migration: lift a legacy in-store desktop tool into the cloud. But the tool wasn't just old — it was ",c.jsx(e.em,{children:"physically trapping"})," the people who depended on it."]}),c.jsxs(e.p,{children:["Picture a store admin running the counter of a busy shop. They're managing around ",c.jsx(e.strong,{children:"eight staff accounts"})," and serving customers — from the ",c.jsx(e.em,{children:"same machine, at the same desk"}),". Every bit of admin work happens in the gaps between customers, and the old tool made those gaps expensive."]})]}),`
`,c.jsx(gn,{src:`${Ai}/02-counter-lock.png`,alt:"A store admin at the service desk, split between a customer waiting to be served and the legacy staff-management terminal — the single point where admin work could happen.",caption:"The counter-lock: admin work and customer service fought over the same desk, the same minute."}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:'Shadowing that work, the friction was specific — not "the UI is dated," but a stack of concrete blocks:'}),c.jsxs(e.ul,{children:[`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"No remote access."})," Everything had to be done at the service desk — so admin work and serving customers competed for the same minute"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"A login tax on every task."})," To act as admin, they had to log the current user ",c.jsx(e.em,{children:"out"})," and log back ",c.jsx(e.em,{children:"in"})," as admin on the counter machine — a context-switch before the real work even started"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Deleted users couldn't come back."})," Remove someone, and the system refused to re-add them under the same username. For a shop that rehires seasonal staff every peak, a routine rehire became a workaround"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Service accounts mixed in with people."})," System and service users sat in the same list as real staff, so finding the right person meant hunting"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"A paper shadow system."})," With no remote access, admins copied private staff details into personal notebooks to work from home — sensitive data walking out the door, off any secure system"]}),`
`]}),c.jsxs(e.p,{children:["The instinct with a mandatory migration is to port the thing faithfully and move on. But the notebooks were the tell: the real failure wasn't the technology, it was ",c.jsx(e.em,{children:"where"})," — and ",c.jsx(e.em,{children:"as whom"})," — the work was allowed to happen. ",c.jsx(e.strong,{children:"This was never just a migration."}),` The terminal's real defect was that it bound critical work to one physical location and one login — so the goal wasn't "recreate the terminal in a browser," it was "unbind the work from the counter."`]})]}),`
`,c.jsx(e.h2,{children:"How I approached it"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"One month, a hard deadline, and a system with real legacy constraints underneath it. I ran this as a lead UX process built for rapid, grounded execution — not a long discovery, but never a blind one either."}),c.jsxs(e.p,{children:[c.jsx(e.strong,{children:'My default lens on any "modernize the old system" brief:'})," find the constraint the old tool forced on the people using it, and design to ",c.jsx(e.em,{children:"remove"})," it — not to reproduce the tool faithfully. Everything below is that lens applied."]}),c.jsxs(e.p,{children:["The move that mattered most: I went to the stores. During physical site visits and face-to-face interviews, one thing became unambiguous — admins weren't using paper because they ",c.jsx(e.em,{children:"preferred"})," it. They used it because the system was inaccessible anywhere but the counter."]})]}),`
`,c.jsx(gn,{wide:!0,src:`${Ai}/03-site-visit.png`,alt:"Field notes and photos from in-store visits — an admin walking through their real workflow at the counter, with the paper notebook and terminal both in frame.",caption:"Talking to admins in their actual workspace confirmed the priority I couldn't have ranked from a desk: mobile access came first."}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["That visit reset the platform priority. ",c.jsx(e.strong,{children:"Mobile access was the #1 request"})," — not a nicer desktop screen. So the portal became mobile-first, not desktop-first-then-shrunk. The whole layout strategy pivoted on a finding I could only have gotten by standing where the work happens."]})}),`
`,c.jsx(e.h2,{children:"The insight that changed the scope"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"The most important decision wasn't a screen — it was a scope call about the shadow system."}),c.jsxs(e.p,{children:[`The easy read was: "admins keep paper notebooks, so digitize the list and the notebooks disappear." But the field interviews said something subtler. Admins didn't want paper for its own sake — they wanted a `,c.jsx(e.strong,{children:"physical copy they could rely on"})," when they were away from the counter, offline, or handling an emergency. Take that away with nothing in its place and the notebooks come right back."]}),c.jsxs(e.p,{children:["So I didn't just digitize the list. I designed a secure ",c.jsx(e.strong,{children:"Download / Export"})," feature into the portal."]})]}),`
`,c.jsx(gn,{src:`${Ai}/04-export-feature.png`,alt:"The portal's staff list with a secure Download / Export action — producing a physical-copy export while the live record stays in the cloud as the source of truth.",caption:"Export gives admins the physical copy they actually needed — while the source of truth stays digital and secure."}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["That one addition is what set out to ",c.jsx(e.em,{children:"eliminate"})," the shadow system instead of just competing with it: meet the real need — a backup they could hold — while keeping the ",c.jsx(e.strong,{children:"source of truth"})," digital, current, and secure. Whether it actually worked wasn't mine to assert; it was a question for testing. (It held up — more below.)"]})}),`
`,c.jsx(us,{variant:"principle",children:c.jsx(e.p,{children:"You don't kill a workaround by banning it. You kill it by understanding the need underneath it and serving that need better — here, a secure export beat an insecure notebook on its own terms."})}),`
`,c.jsx(e.h2,{children:"The design decisions"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["Post offices are high-stress, high-distraction retail floors — often used one-handed, on a small screen, between customers. Every interaction choice below came from designing for ",c.jsx(e.em,{children:"that"})," environment, not a calm desktop."]})}),`
`,c.jsxs(Qd,{heading:"Adaptive interaction design",eyebrow:"Four decisions, and what each one traded off",icon:"sliders",intro:c.jsx(c.Fragment,{children:"The portal had to feel fast and forgiving under pressure. These are the choices that made it so — each one later put in front of real admins."}),coda:{title:"Designed against a real database",body:c.jsx(c.Fragment,{children:"None of this lived in a vacuum — every concept was pressure-tested against the legacy database's actual limits before it went to high fidelity, so what I designed was also what could ship in a month."})},children:[c.jsx(Fn,{index:"01",title:"Role inheritance — one choice, not two",media:{src:`${Ai}/05-role-inheritance.png`,alt:'The add-user form where selecting the "Admin" role automatically toggles on "Standard User" permissions underneath it.'},children:c.jsxs(e.p,{children:["Selecting ",c.jsx(e.strong,{children:'"Admin"'})," automatically toggles on ",c.jsx(e.strong,{children:'"Standard User"'})," permissions beneath it — because an admin is always also a standard user. A small logic tweak, but during hiring peaks it removed a whole class of clicks and configuration errors: admins couldn't accidentally create an admin who lacked the base permissions to actually work. (Testing confirmed this matched how admins already expected it to behave.)"]})}),c.jsx(Fn,{index:"02",title:"Full-row click targets",media:{src:`${Ai}/06-full-row-click.png`,alt:"A staff table on a small mobile screen where the entire row is a tap target, not just the name link."},tradeoff:{considered:'A conventional table with a small "edit" link or icon per row.',why:c.jsx(c.Fragment,{children:"On a phone, between customers, a tiny target is a missed tap and a lost second. Making the whole row tappable was the higher-reliability choice for the environment this actually runs in."})},children:c.jsxs(e.p,{children:["I made the ",c.jsx(e.strong,{children:"entire row"})," a tap target across every staff table (Fitts's Law in practice — the bigger and closer the target, the faster and safer the hit). Paired with ",c.jsx(e.strong,{children:"color-coded role chips"}),", an admin can scan a list and act on the right person without hunting. Both landed cleanly in testing."]})}),c.jsxs(Fn,{index:"03",title:"A delete you have to mean",tradeoff:{considered:"A standard confirm dialog with the destructive action as the default button.",why:c.jsx(c.Fragment,{children:'In a system now run one-handed between customers, a default-styled "delete" is a fat-fingered data-loss incident waiting to happen. The safeguard had to be in the layout, not just the copy.'})},children:[c.jsxs(e.p,{children:["Removing a staff member is destructive, so I made the confirmation ",c.jsx(e.em,{children:"work for its click"}),": the ",c.jsx(e.strong,{children:"Remove"})," button is high-contrast ",c.jsx(e.strong,{children:"red"})," to signal the weight of the action, while ",c.jsx(e.strong,{children:"Cancel"})," stays visually neutral and is ",c.jsx(e.em,{children:"not"})," the primary button. That asymmetry forces a conscious ",c.jsx(e.em,{children:"stop-and-think"})," moment."]}),c.jsxs(e.p,{children:["That was the first line of defense. Testing would tell me it wasn't enough on its own — ",c.jsx(e.a,{href:"#what-testing-changed",children:"see below"}),"."]})]}),c.jsx(Fn,{index:"04",title:"Bulk creation for hiring peaks",media:{src:`${Ai}/10-bulk-create.png`,alt:"The bulk / import user-creation flow — adding many staff accounts at once from a single import instead of one form at a time."},children:c.jsxs(e.p,{children:["Onboarding is spiky: a shop hires a wave of seasonal staff at once, not one a week. The old tool made you create each account individually. So I designed ",c.jsx(e.strong,{children:"bulk / import creation"}),` — set up many users in a single pass — aimed squarely at the peak when admin time is scarcest. In testing it was the feature that drew a genuine "I don't remember creating them all in one go" — the good kind of surprise.`]})})]}),`
`,c.jsx(e.h2,{children:"What testing changed"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["Designed isn't done. I put the portal in front of the people who'd live in it — ",c.jsx(e.strong,{children:"store admins, the exact role I'd been shadowing"})," — and ran a usability test on the flows that carried the most risk: the landing page, editing a user, resetting a password, and removing a user. The questions were blunt: ",c.jsx(e.em,{children:"Does the landing page show what you need? Is export actually useful? Would you trust bulk-creating users?"})]}),c.jsx(e.p,{children:"Here's the whole point of testing, laid out honestly — what held up, and what I had to change:"})]}),`
`,c.jsx(jd,{head:["Flow tested","What held up","What I changed after"],rows:[["Landing page","Clean layout, logical navigation, right info surfaced","—"],["Export",c.jsx(c.Fragment,{children:"Useful for offline records & printing lists — the shadow-system fix, confirmed by the people who'd kept the notebooks"}),"—"],["Edit user","Full-row click, color-coded chips, admin-implies-standard",c.jsxs(c.Fragment,{children:["Default new users to ",c.jsx(e.strong,{children:"Standard"}),"; auto-fill usernames; add a last-name column; hide the unit ID most staff never needed"]})],["Reset password","Easy to find; confirm-before-reset reassured",c.jsxs(c.Fragment,{children:["Auto-generated ",c.jsx(e.strong,{children:"complex"})," passwords → ",c.jsx(e.strong,{children:"simple, admin-defined"})," ones"]})],["Remove user",c.jsx(c.Fragment,{children:"Confirm isn't the primary button — read as a deliberate safeguard"}),c.jsxs(c.Fragment,{children:["Added a ",c.jsx(e.strong,{children:"7-day soft-delete"})," recovery window"]})]]}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"Two of those changes are worth more than a table cell, because they're the reason testing exists."}),c.jsxs(e.p,{children:[c.jsx(e.strong,{children:"The passwords — I was wrong."})," I'd designed ",c.jsx(e.strong,{children:"auto-generated, complex"})," passwords on the reasonable-sounding logic that stronger is safer. Admins pushed back immediately: too complex to read out or hand to a new hire on day one at a busy counter. They wanted ",c.jsx(e.strong,{children:"simple, admin-defined"})," passwords they could set and share on the spot. I changed it. A security instinct that ignored the counter reality, corrected by the counter."]}),c.jsxs(e.p,{children:[c.jsx(e.strong,{children:"The recovery window wasn't my idea."})," My delete had a careful confirmation — testers validated that, then went further and asked to ",c.jsx(e.em,{children:"keep deleted users for about a week before permanent removal"}),". That request became the ",c.jsx(e.strong,{children:"7-day soft delete"})," — and it quietly solved a ",c.jsx(e.em,{children:"second"})," problem I'd flagged much earlier: a seasonal worker returning within the window could now be ",c.jsx(e.strong,{children:"restored"}),`, instead of colliding with the "can't reuse that username" block. One change from the floor closed two gaps at once.`]})]}),`
`,c.jsx(us,{variant:"principle",children:c.jsxs(e.p,{children:[`The most useful hour of the project was the one where I got told I was wrong. The "correct" passwords were unusable, and the recovery window wasn't mine at all. Testing is where a design stops being what I `,c.jsx(e.em,{children:"think"})," will work and starts being what does."]})}),`
`,c.jsx(vv,{before:{src:`${Ai}/07-delete-before.png`,alt:"The legacy hard-delete: a plain confirmation that permanently removes a staff record with no way back."},after:{src:`${Ai}/08-delete-after.png`,alt:"The reshaped delete: a 7-day recovery notice, a high-contrast red Remove button, and a neutral, non-primary Cancel button."},caption:"The delete testing reshaped — from a careful confirm to a recoverable, restore-anytime action."}),`
`,c.jsx(e.h2,{children:"How the work got made"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["A one-month deadline forces sharp choices about ",c.jsx(e.em,{children:"where"})," the time goes. Mine went to the field, the test, and a tight engineering loop — with AI absorbing the slow start."]})}),`
`,c.jsx(jd,{head:["Lever","How I used it","What it protected"],rows:[["AI-accelerated ideation","Used generative AI to brainstorm layout variations for complex staff tables",c.jsx(c.Fragment,{children:"Skipped the blank-page phase entirely — more time for the decisions that actually mattered"})],["Technical feasibility sync","Ran a tight loop with engineering to stress-test concepts against legacy DB limits",c.jsx(c.Fragment,{children:"Nothing reached high-fidelity that the old database couldn't support — and its limits shaped the design"})]]}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["The honest version: AI got me ",c.jsx(e.em,{children:"out of the gate"})," faster, the field and the usability test made sure I was solving the right problem the right way, and engineering's constraints didn't just gate the work — they ",c.jsx(e.em,{children:"shaped"})," it. Knowing which legacy-database limits were immovable (username reuse being the sharpest) told me exactly where design could win and where it had to defer. None of them could carry the project alone — the speed came from the sequence."]})}),`
`,c.jsx(Hd,{eyebrow:"My contribution — an honest ledger",icon:"user",items:[{label:"What I owned",value:c.jsxs(e.ul,{children:[c.jsx(e.li,{children:"The reframe and scope call — including the Export decision that targeted the shadow system"}),c.jsx(e.li,{children:"Field research, and all interaction & visual design"}),c.jsx(e.li,{children:"Running the usability test and driving every change out of it"})]})},{label:"What was collaborative (not mine to claim)",value:c.jsxs(e.ul,{children:[c.jsx(e.li,{children:"Engineering pressure-tested feasibility against the legacy database and set its hard limits"}),c.jsxs(e.li,{children:["The 7-day recovery window came from a ",c.jsx(e.strong,{children:"tester's"})," suggestion, not me"]}),c.jsx(e.li,{children:"The migration mandate, deadline, and stakes were set by the business"})]})}]}),`
`,c.jsx(e.h2,{children:"The impact"}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"For a mandatory migration, the wins landed where they change how the operation actually runs — not just a screen that looks newer."})}),`
`,c.jsx(Jd,{items:[{icon:"chart",value:"~65%",label:"Faster user creation & onboarding"},{icon:"shield",value:"~0%",label:"Accidental permanent loss — via the 7-day window"},{icon:"layers",value:"Shadow system",valueText:!0,label:"Export validated by the admins who kept the notebooks"}]}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["A note on these numbers, because attribution is where case studies quietly overreach. Two of the three are ",c.jsx(e.strong,{children:"structural"})," — true the moment the design shipped, not claims about a trend I watched. A 7-day recovery window makes accidental ",c.jsx(e.em,{children:"permanent"})," loss almost impossible by construction, and moving staff data off paper back onto one secure record removed the shadow system's reason to exist (with usability testers confirming export met the need)."]}),c.jsxs(e.p,{children:["The efficiency figure is the softer one, and I'll flag it as such: ",c.jsx(e.strong,{children:"~65% faster onboarding"})," is the engagement's reported early indicator, not a number I tracked across a full staffing season. The honest read is a strong directional win that a longer runway would firm up — not a measured long-run result I'd defend to the decimal."]})]}),`
`,c.jsx(e.h2,{children:"The honest limits"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"A one-month migration buys focus by deferring things on purpose. Three I'd rather name than hide:"}),c.jsxs(e.ul,{children:[`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"The 7-day window came from a tester, and the exact number is still an assumption."})," Seven days felt right — long enough to catch a mistake or a quick rehire, short enough to actually purge data. But the ",c.jsx(e.em,{children:"correct"})," number is an operations question I'd pressure-test against real recovery and rehire patterns, not settle in a design tool."]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Export killing the shadow system is validated in the lab, not yet in the wild."})," Testers found it genuinely useful — a strong signal — but whether admins ",c.jsx(e.em,{children:"actually"})," stop keeping paper over a full season is a field question I'd instrument before calling it closed."]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Username reuse stayed bounded by the legacy database."})," Soft delete softens the returning-worker problem ",c.jsx(e.em,{children:"within"}),` the window; fully removing the "can't reuse that username" friction needed backend change that sat outside a one-month scope.`]}),`
`]})]}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["None of these are reasons the work wasn't ready. They're the line between what a migration can ",c.jsx(e.em,{children:"prove"})," in a month and what it can only ",c.jsx(e.em,{children:"set up"})," to learn — and being clear about which is which is the point."]})}),`
`,c.jsx(e.h2,{children:"The takeaway"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"This project looked like a technical chore — port a legacy terminal to the cloud. The design work was refusing to treat it that way."}),c.jsxs(e.p,{children:["The terminal's real defect wasn't that it was old; it was that it bound critical work to one physical spot and one login, which is why the paper notebooks existed at all. Once the goal became ",c.jsx(e.em,{children:"operational freedom"})," rather than ",c.jsx(e.em,{children:"faithful migration"}),", everything followed — mobile-first because that's what admins asked for, a secure export because that's what the notebooks were really for, and a recoverable delete because the floor told me a careful confirm wasn't enough."]}),c.jsxs(e.p,{children:["That last part is the lesson I'd underline: the decisions I'm proudest of here are the ones testing ",c.jsx(e.em,{children:"changed"}),". The confident design got sharper the moment I let the people at the counter be right."]})]}),`
`,c.jsx(us,{variant:"principle",cite:"— how I approach any legacy-modernization brief",children:c.jsx(e.p,{children:"The best migration doesn't reproduce the old system faithfully — it fixes the constraint the old system forced people to live with. Unbind the work, test it with the people who do it, and let them correct you."})}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:c.jsx(e.em,{children:"Yogesh Shetty · Design Consultant — UX lead on the staff-management portal, end to end"})})})]})}function W1(r={}){const{wrapper:e}={...Ji(),...r.components};return e?c.jsx(e,{...r,children:c.jsx(yg,{...r})}):yg(r)}const X1=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Ai,default:W1,meta:V1},Symbol.toStringTag,{value:"Module"})),Mn="/case-studies/swiftsort/images",q1={order:1,title:"SwiftSort — from memorized routes to instant, system-guided action",subtitle:"Shifting sorting decisions from workers to the system, across high-volume Nordic logistics terminals.",tags:["Logistics UX","Mobile & wearable","End-to-end ownership","POC → production"],glance:[{label:"Role",value:"Sole designer on this project (part of a wider design team) — owned research, UX strategy, interaction design, and design–engineering alignment end to end"},{label:"Team",value:"1 Product Manager · 4 Engineers · 2 Operations Leads"},{label:"Region",value:"Nordic"},{label:"Platform",value:"Android tablet + ProGlove wearable scanner"},{label:"Timeline",value:"3 months, proof-of-concept through to production"},{label:"Tools",value:"Figma, Figma Make, Banani, MS Copilot"}],sectionIcons:{"project-landscape":"layers","the-business-goal":"trendUp","the-problem":"alert","how-i-approached-it":"compass","the-moment-that-changed-the-design":"refresh","working-with-engineering":"merge","how-the-workflow-shrank":"minimize","one-solution-two-form-factors":"smartphone","a-second-win-surfaced-by-the-business":"layers","ai-in-the-process":"sparkles","exploring-then-discarding":"filter","testing-on-the-floor":"flask",outcomes:"chart","what-we-shipped-knowingly-incomplete":"flag","the-takeaway":"target"},keySections:["outcomes","the-moment-that-changed-the-design","the-design-decisions","what-we-shipped-knowingly-incomplete","the-takeaway"]};function Sg(r){const e={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Ji(),...r.components};return c.jsxs(c.Fragment,{children:[`
`,`
`,`
`,`
`,c.jsx(Zd,{src:`${Mn}/01-hero.png`,alt:"The finished SwiftSort screen on a terminal tablet alongside the handheld TC57, two form factors, one sorting workflow.",bare:!0,chip:"Live in production"}),`
`,c.jsx(e.h2,{children:"Project landscape"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["SwiftSort sits in the ",c.jsx(e.strong,{children:"mid-mile"})," of the logistics value chain — the terminal (warehouse), where incoming goods are sorted and placed at delivery gates for last-mile drivers to pick up."]}),c.jsx(e.p,{children:"Every gate is assigned to a set of postal codes. Workers read the address label on each parcel, determine the correct gate, and stage it for the driver. That gate-lookup — label to destination — is the decision this project redesigned."})]}),`
`,c.jsx(gn,{wide:!0,src:`${Mn}/00-terminal.jpg`,alt:"A Nordic parcel terminal from above — forklifts moving between pallets of goods, numbered delivery gates along the far wall with green postal-code signs.",caption:"The terminal floor: goods arrive, get sorted by gate, and wait for last-mile drivers."}),`
`,c.jsx(Hd,{eyebrow:"Operating context",icon:"layers",items:[{label:"Environment",value:"Cold, noisy, glove-required — workers drive forklifts with experienced operators relying on memorized route knowledge"},{label:"Devices",value:"Handheld TC57 scanners, tablets mounted on forklifts, and ProGlove wearable scanners built into work gloves"},{label:"Key constraint",value:"Long training time to learn the postal-code-to-gate routing — new hires took weeks to sort independently"},{label:"Users",value:"Forklift operators and terminal sorters"}]}),`
`,c.jsx(e.h2,{children:"The business goal"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"Drivers visited every customer stop daily — even for a single parcel. Too many stops, longer routes, underloaded trucks."}),c.jsxs(e.p,{children:["The business wanted to ",c.jsx(e.strong,{children:"accumulate goods by volume"})," and batch deliveries: instead of visiting stops A, B, C, D, E, F every day, a driver covers A, B one day, C, D the next, E, F the day after. Fewer stops, shorter routes, fuller trucks."]}),c.jsxs(e.p,{children:["For this to work, workers needed to be ",c.jsx(e.strong,{children:"informed about drop-zone assignments frequently"})," — which gate to place each parcel at, updated as volume changes."]})]}),`
`,c.jsx(e.h2,{children:"The problem"}),`
`,c.jsxs(Xe,{children:[c.jsx(e.p,{children:"Workers sorted entirely from memory. They read the address label, recalled which gate that postal code maps to, and decided the stacking order — all from experience. Gate assignments lived in their heads, not in any system."}),c.jsx(e.p,{children:"That made the business goal impossible: you can't dynamically reassign gates when the worker's only reference is what they've memorized. And asking them to override that muscle memory with changing gate numbers was confusing — every update fought against years of internalized routing."})]}),`
`,c.jsx(us,{variant:"user",children:"I just memorize it. When I forget, I ask someone."}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"Every parcel required three steps — one physical, two mental:"})}),`
`,c.jsx(R1,{items:[{src:`${Mn}/02-illustration-scan.png`,alt:"Comic panel — the driver calmly scans the box, an empty thought-bubble above them: no mental effort.",title:"Scan the barcode",tag:"Physical",tone:"neutral"},{src:`${Mn}/03-illustration-read.png`,alt:"Comic panel — the driver reads the label, a small thought-bubble with a magnifying glass and a question mark: mild effort.",title:"Read the postal code off the label",tag:"Mental",tone:"mental"},{src:`${Mn}/04-illustration-mental-lookup.png`,alt:"Comic panel — the driver looks overwhelmed, a huge chaotic thought-bubble tangled with gate numbers, routes and arrows.",title:"Recall which gate, which route, which order",tag:"Mental — the bottleneck",tone:"bottleneck"}]}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"Steps 2 and 3 were invisible cognitive work — no system log captured them, no KPI measured them. That is where the errors, the slow onboarding, and the throughput loss all came from."})}),`
`,c.jsx(e.h3,{children:"The POC that proved the model"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["We built a proof of concept with minimal UX effort: ",c.jsx(e.strong,{children:"show the gate number on scan"}),' so workers place goods where the system tells them, not where they remember. The POC displayed the destination gate (e.g. "26CD") and two buttons — "Confirm drop off" and "Alternate drop off."']})}),`
`,c.jsx(gn,{src:`${Mn}/08-poc-screen.png`,alt:"The POC interface on a Zebra tablet mounted in the terminal — gate number 26CD displayed prominently, with Confirm drop off and Alternate drop off buttons below.",caption:"The POC: scan a parcel, see the gate, confirm the drop. Minimal UX — built to prove the business model."}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["The POC proved the business impact — fewer stops, shorter routes. Gate assignment became ",c.jsx(e.strong,{children:"programmable"}),": planners change routing based on volume, workers scan, see a gate, place it there."]}),c.jsx(e.p,{children:"For UX, the POC doubled as preliminary usability testing. Watching workers use it revealed interaction problems beyond memorization — reach to the confirmation button, cognitive overhead from multiple on-screen options, and confirmation friction with gloves on. These became the design brief for the production version."})]}),`
`,c.jsx(e.h2,{children:"How I approached it"}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:"I spoke with business stakeholders who were part of POC testing and watched session recordings from the pilot. The goal was to understand what the POC got right (system-guided sorting works) and what it got wrong (the interaction design)."})}),`
`,c.jsx(gn,{wide:!0,src:`${Mn}/05-research-synthesis.png`,alt:"A clustered affinity view of field observations grouped into themes such as memory dependence, environmental constraints, and LIFO stacking behaviour.",caption:"Affinity mapping of field observations — clustered into themes: memory dependence, environmental constraints, LIFO stacking behaviour, and invisible cognitive load."}),`
`,c.jsx(P1,{eyebrow:"Field synthesis",heading:"Key research insights",items:[{icon:"eye",title:"Tacit knowledge is the bottleneck",bullets:["Sorting accuracy depended on memorized postal-code-to-gate mappings — no system fallback existed","Experienced operators had internalized the routing heuristic; new hires had no scaffold","Knowledge was siloed and non-transferable — it degraded every shift change"],quotes:[]},{icon:"alert",title:"Cognitive load is invisible and compounding",bullets:["Two of three per-parcel steps were mental — reading labels and recalling routes","Each parcel added to running cognitive overhead; error rate climbed with volume","No visibility into workload or completion — workers compensated with manual counting"],quotes:[{text:"How many cages am I dealing with today?",source:"Driver — field observation"},{text:"Did I scan every parcel for this stop?",source:"Driver — ride-along"}]},{icon:"zap",title:"Existing affordances were underutilized",bullets:["Every worker already wore an activated ProGlove barcode scanner — the motor pattern was established","Workers reached for a mounted tablet to confirm actions the scanner could trigger","The physical-digital gap was a design failure, not a hardware limitation"],quotes:[{text:"Every operator scanned barcodes constantly — the motion was automatic, glove-compatible, and required zero visual attention.",source:"Field visit observation note"}]},{icon:"target",title:"Priority was invisible at the decision point",bullets:["Time-sensitive shipments had no visual differentiation at the sorting moment","Priority data existed upstream in dispatch but never surfaced to the floor","Urgent and standard goods mixed at the gate — missed departure windows were the downstream symptom"],quotes:[{text:"I am usually just interested in the delivery address — nothing else.",source:"Driver — semi-structured interview"}]}]}),`
`,c.jsx(e.h2,{children:"The moment that changed the design"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["During POC testing, operators struggled to reach the confirmation button on the mounted tablet — it was bolted in the only spot it fit, often out of arm's reach. The team's instinct: ",c.jsx(e.strong,{children:"make the button bigger, move the tablet."})]}),c.jsxs(e.p,{children:["When I revisited the session recording, I noticed ",c.jsx(e.strong,{children:"every worker was already wearing a ProGlove scanner"})," — an input device they used constantly, without thinking. The tablet wasn't the problem; forcing a tap on an out-of-reach screen was."]}),c.jsxs(e.p,{children:["I proposed a ",c.jsx(e.strong,{children:"static QR code"})," as the last card in the drop list. Scan it with the ProGlove, or tap it. Reach stops being a constraint."]})]}),`
`,c.jsx(vv,{before:{src:`${Mn}/06-reframe-before.png`,alt:"The out-of-reach button mounted on the forklift tablet — a worker stretching to reach it mid-operation."},after:{src:`${Mn}/07-reframe-after.png`,alt:'The QR "DROP" card that gives a scannable path to the same confirmation action.'},caption:"Scan or tap. Reach stops mattering."}),`
`,c.jsx(e.h2,{children:"Working with engineering"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["Engineering initially proposed a ",c.jsx(e.strong,{children:"dynamic QR"})," — one generated per parcel. They flagged the complexity themselves: backend overhead, scalability risk, tight timeline."]}),c.jsxs(e.p,{children:["We landed on ",c.jsx(e.strong,{children:"static QR"})," — simpler to build and better on the floor:"]}),c.jsxs(e.ul,{children:[`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Reliable"})," — no backend to fail, works offline"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Scalable"})," — same code works at every terminal"]}),`
`,c.jsxs(e.li,{children:[c.jsx(e.strong,{children:"Zero-config"})," — operations place codes without IT"]}),`
`]})]}),`
`,c.jsx(e.h2,{children:"How the workflow shrank"}),`
`,c.jsx(L1,{old:{steps:[{label:"Scan the barcode",sub:"Physical",tone:"physical"},{label:"Read postal code...",sub:"Mental",tone:"mental"},{label:"Recall gate & route from memory",sub:"Mental — bottleneck",tone:"bottleneck"},{label:"Confirm drop-off (tap out-of-reach button)",sub:"Physical — unreliable",tone:"unreliable"}],note:"Steps 2 & 3 are invisible work — no system support, pure memory. This is where time, errors, and training cost all lived."},new:{steps:[{label:"Scan parcel → destination shown instantly",sub:"Physical + System",tone:"system"},{label:"Confirm drop-off — Scan QR or tap",sub:"Physical — works from anywhere",tone:"system"}],eliminated:["Read postal code → System shows destination instantly","Recall gate assignment → No memory needed","Recall route priority → System handles sequencing","Reach to tap button → Scan QR from anywhere"]}}),`
`,c.jsxs(Qd,{heading:"The design decisions",eyebrow:"Research finding → design response",icon:"sliders",intro:c.jsx(c.Fragment,{children:"Each decision traces to a field observation — leveraging existing behavior or removing a cognitive step."}),coda:{title:"Designed for an industrial floor",body:c.jsx(c.Fragment,{children:"Readable at 1-2 meters, high-contrast for glare, glove-friendly targets, one decision per screen."})},children:[c.jsx(Fn,{index:"01",title:"The QR code doubles as the button",media:{src:`${Mn}/09-qr-scan-or-tap.png`,alt:'The QR "DROP" card as the final item in the tablet drop list — scan it with the ProGlove, or tap to confirm.'},tradeoff:{considered:"ProGlove gesture events — a wave or motion to confirm.",why:c.jsx(c.Fragment,{children:"Engineering flagged them as unstable in a noisy, fast-moving environment. A scannable, tappable QR was simply more reliable."})},children:c.jsxs(e.p,{children:["Reach to the tablet varied by vehicle and operator height. The QR sits as the ",c.jsx(e.strong,{children:"last card"})," in the drop list — scan it with the ProGlove, or tap it. If one input fails, the other works."]})}),c.jsx(Fn,{index:"02",title:"Scan-first — not voice",tradeoff:{considered:"Voice commands.",why:c.jsxs(c.Fragment,{children:["In a loud warehouse, reading barcode values aloud introduced ",c.jsx(e.strong,{children:"more"}),' errors than it removed — missed or forgotten, especially when a worker handles several drop-offs at once. The clearest "no" in the project.']})},children:c.jsx(e.p,{children:"Workers scanned barcodes constantly — automatic, glove-compatible, zero visual attention. Making the scan itself the trigger leveraged that existing behavior."})}),c.jsxs(Fn,{index:"03",title:"The screen mirrors the physical stack (LIFO)",media:{src:`${Mn}/10-lifo-layout.png`,alt:'The main screen: a large top card "12 CD, 1726 Sarpsborg" with smaller "06 AB" and "18 CD" cards beneath — largest card = last scanned = next dropped.'},children:[c.jsxs(e.p,{children:["Drivers drop off the ",c.jsx(e.strong,{children:"most recently scanned"})," item first ~95-99% of the time — a LIFO pattern. So the screen mirrors the physical stack: latest scanned = largest card on top."]}),c.jsx(e.p,{children:"The remaining 1-5% can override by scanning any card directly."})]}),c.jsx(Fn,{index:"04",title:"Priority surfaces at the moment of sorting",children:c.jsxs(e.p,{children:["Priority data existed upstream but never reached the worker. Time-sensitive shipments now surface with a distinct accent, floating to the top — ",c.jsx(e.strong,{children:"before"})," the sorting decision. Not in the brief; surfaced through research."]})})]}),`
`,c.jsx(e.h2,{children:"One solution, two form factors"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["The QR solves reach on a mounted tablet. Workers carrying a handheld ",c.jsx(e.strong,{children:"TC57"})," already have the screen in hand — so they just tap the ",c.jsx(e.strong,{children:"Drop"})," button. Same task, two input strategies matched to two physical realities:"]})}),`
`,c.jsx(jd,{head:["","Mounted tablet + ProGlove","Handheld TC57"],rows:[["Where the device lives","Bolted to the forklift, sometimes out of reach","In the worker’s hand"],["How you confirm a drop","Scan the QR card, or tap it","Tap the Drop button"],["Why","Reach varies by vehicle — scan removes that variable","Reach is never in question — no QR needed"]]}),`
`,c.jsx(gn,{wide:!0,src:`${Mn}/12-tc57-stacking.png`,alt:"Three TC57 handheld screens side by side: the sort list with parcel cards, the stack mode showing grouped parcels at a destination, and the drop zone grid for manual zone lookup.",caption:"The full TC57 flow: sort, stack, and drop zone lookup — all tap-driven, no QR needed."}),`
`,c.jsx(e.h2,{children:"A second win, surfaced by the business"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:["A discovery session with ops leads revealed that drivers with ",c.jsx(e.strong,{children:"several items for the same destination"})," had to scan and drop each one separately — repetitive and slow at volume."]}),c.jsxs(e.p,{children:["In a brainstorm with the tech lead and PO, we shaped the solution: ",c.jsx(e.strong,{children:"group everything bound for one destination and drop it in a single scan."})]})]}),`
`,c.jsx(gn,{src:`${Mn}/11-stacking-mode.png`,alt:"The split-screen stacking view: the main sort list on the left, a Stacking Mode panel on the right grouping multiple parcels under one destination.",caption:"Stacking mode — group loose items under one destination, drop them in a single scan."}),`
`,c.jsx(e.h2,{children:"AI in the process"}),`
`,c.jsxs(Xe,{children:[c.jsxs(e.p,{children:[c.jsx(e.strong,{children:"Figma Make"})," generated LIFO card layout variants — I tested each against one question: readable at arm's length, in motion, with gloves? ",c.jsx(e.strong,{children:"MS Copilot"})," clustered field notes into themes (that is how the priority insight surfaced). ",c.jsx(e.strong,{children:"Banani"})," structured the stacking flow before I committed it to high-fidelity in Figma."]}),c.jsx(e.p,{children:"~30% faster early exploration — but every shipped decision was validated on-site."})]}),`
`,c.jsx(gn,{wide:!0,src:`${Mn}/14-discarded-variants.png`,alt:"A grid of early LIFO card layout explorations with the rejected variants visibly marked.",caption:"The range Figma Make gave me. Most were killed against one test: readable at arm's length, in motion, wearing gloves."}),`
`,c.jsx(e.h2,{children:"Outcomes"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["SwiftSort is ",c.jsx(e.strong,{children:"live in production"})," across Nordic terminals."]})}),`
`,c.jsx(gv,{items:[{icon:"rocket",text:c.jsxs(c.Fragment,{children:[c.jsx(e.strong,{children:"Shipped and running in live terminals"})," — not a prototype that stalled"]})},{icon:"trendUp",text:c.jsxs(c.Fragment,{children:[c.jsx(e.strong,{children:"Faster onboarding and fewer gate errors"})," — reported by terminal managers, not self-assessed"]})},{icon:"cube",text:c.jsxs(c.Fragment,{children:[c.jsx(e.strong,{children:"Zero new hardware, zero layout changes"})," — ran on scanners workers already used"]})}]}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["These results were surfaced by ",c.jsx(e.strong,{children:"terminal managers"})," in stakeholder reviews — they found it significant enough to report upward unprompted. Priority also became visible at the sorting moment, so time-sensitive shipments met departure windows."]})}),`
`,c.jsx(e.h2,{children:"What we shipped knowingly incomplete"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["One known gap: ",c.jsx(e.strong,{children:"drop-off location editing and parcel grouping don't behave as cleanly as designed."})," We shipped deliberately — the data behavior at production volume was unpredictable from a design tool, so we instrumented the release to learn from real usage rather than model assumptions."]})}),`
`,c.jsx(e.h2,{children:"The takeaway"}),`
`,c.jsx(Xe,{children:c.jsxs(e.p,{children:["SwiftSort was not a UI redesign — it was a redesign of ",c.jsx(e.strong,{children:"decision architecture"}),". Sorting shifted from memory-dependent to system-guided, from tenure-correlated to scalable from day one. The highest-impact move: removing cognitive constraints by building on motor patterns workers already had."]})}),`
`,c.jsx(Xe,{children:c.jsx(e.p,{children:c.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on SwiftSort, end to end"})})})]})}function $1(r={}){const{wrapper:e}={...Ji(),...r.components};return e?c.jsx(e,{...r,children:c.jsx(Sg,{...r})}):Sg(r)}const Y1=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Mn,default:$1,meta:q1},Symbol.toStringTag,{value:"Module"})),K1=Object.assign({"./cards/index.mdx":B1,"./postbox/index.mdx":G1,"./postoffice/index.mdx":X1,"./swiftsort/index.mdx":Y1}),Ja=Object.entries(K1).map(([r,e])=>{var s;const t=(s=r.match(/\.\/([^/]+)\/index\.mdx$/))==null?void 0:s[1];return{slug:t,Component:e.default,meta:{slug:t,...e.meta||{}}}}).filter(r=>r.slug).sort((r,e)=>(r.meta.order??999)-(e.meta.order??999));function Z1(r){return Ja.find(e=>e.slug===r)||null}function Q1(r){if(Ja.length<2)return null;const e=Ja.findIndex(t=>t.slug===r);return e===-1?null:Ja[(e+1)%Ja.length]}const J1=new Set(["swiftsort"]),eT=["5787deaa7a8ea2bd70a681eed552e3ea03c59dca5ecffa7dcab1365afe4433c1","2742ce32dae07660045ae5247b21e600b5c4834d7c665335ac1c98893e5eaf11"],xv="cs-unlocked";function wg(r){return J1.has(r)}async function tT(r){const e=new TextEncoder().encode(r),t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(s=>s.toString(16).padStart(2,"0")).join("")}async function nT(r){const e=(r??"").trim();if(!e)return!1;try{const t=await tT(e);return eT.includes(t)}catch{return!1}}function Mg(){try{return sessionStorage.getItem(xv)==="1"}catch{return!1}}function iT(){try{sessionStorage.setItem(xv,"1")}catch{}}const rT="https://www.linkedin.com/in/ykshetty/";function Ed({mood:r="",avatarRef:e}){const t=`gate-avatar${r?` is-${r}`:""}`;return c.jsxs("div",{className:t,ref:e,"aria-hidden":"true",children:[c.jsx("div",{className:"gate-eye l",children:c.jsx("span",{className:"gate-pupil"})}),c.jsx("div",{className:"gate-eye r",children:c.jsx("span",{className:"gate-pupil"})})]})}function sT({title:r,onUnlock:e}){const[t,s]=be.useState(""),[o,l]=be.useState(!1),[h,d]=be.useState(!1),[p,m]=be.useState(!1),[g,x]=be.useState(""),_=be.useRef(null),w=be.useRef([]),E=C=>{C&&!w.current.includes(C)&&w.current.push(C)},T=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;be.useEffect(()=>{const C=setTimeout(()=>m(!0),T?200:1200);return()=>clearTimeout(C)},[T]),be.useEffect(()=>{if(T)return;let C=0,R=window.innerWidth/2,D=window.innerHeight/2;const G=F=>{R=F.clientX,D=F.clientY};window.addEventListener("mousemove",G);const O=()=>{w.current.forEach(F=>{const oe=F.getBoundingClientRect();if(!oe.width)return;const he=oe.left+oe.width/2,b=oe.top+oe.height/2,U=Math.atan2(D-b,R-he),le=Math.min(2.6,Math.hypot(R-he,D-b)/40);F.querySelectorAll(".gate-pupil").forEach(ue=>{ue.style.transform=`translate(calc(-50% + ${Math.cos(U)*le}px), calc(-50% + ${Math.sin(U)*le}px))`})}),C=requestAnimationFrame(O)};return C=requestAnimationFrame(O),()=>{window.removeEventListener("mousemove",G),cancelAnimationFrame(C)}},[T]);const y=C=>{const R=C.target.value;s(R),h&&d(!1),g!=="happy"&&x(R.length?"closed":"")},S=async C=>{if(C.preventDefault(),await nT(t)){iT(),x("happy"),setTimeout(e,T?0:420);return}d(!0),x("squint"),setTimeout(()=>x(t?"closed":""),700)};return c.jsxs("div",{className:"cs-page",children:[c.jsx(fv,{}),c.jsx("div",{className:"gate-stage",children:c.jsxs("div",{className:"gate-card",children:[c.jsxs("div",{className:"gate-chrome",children:[c.jsxs("div",{className:"gate-dots",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsx("div",{className:"gate-chrome-label",children:r?`${r.split(" ")[0]} · protected`:"Protected case study"})]}),c.jsxs("div",{className:"gate-thread",children:[c.jsx("div",{className:"gate-row them",style:{animationDelay:".05s"},children:c.jsx("div",{className:"gate-bubble",children:"Can I read the full case study?"})}),p?c.jsxs("div",{className:"gate-row me",children:[c.jsx(Ed,{avatarRef:E,mood:g}),c.jsxs("div",{className:"gate-bubble",children:[c.jsx("span",{className:"gate-kicker",children:"A quick note"}),"This one belongs to the client — I keep it behind a password out of respect for their confidentiality.",c.jsxs("small",{children:["You’ll find the password in my résumé or cover letter. Otherwise, just"," ",c.jsx("a",{href:rT,target:"_blank",rel:"noopener noreferrer",children:"ping me on LinkedIn"}),"."]})]})]}):c.jsxs("div",{className:"gate-row me",children:[c.jsx(Ed,{avatarRef:E,mood:g}),c.jsxs("div",{className:"gate-typing",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}),h&&c.jsxs("div",{className:"gate-row me",role:"alert",children:[c.jsx(Ed,{avatarRef:E,mood:g}),c.jsx("div",{className:"gate-bubble",children:"That’s not the one — check the résumé header, it’s there. 🙂"})]})]}),c.jsxs("div",{className:"gate-composer",children:[c.jsxs("form",{className:`gate-field${h?" is-err":""}`,onSubmit:S,autoComplete:"off",children:[c.jsx("input",{ref:_,type:o?"text":"password",value:t,onChange:y,placeholder:"Type the password…","aria-label":"Case study password","aria-invalid":h,autoFocus:!0}),c.jsx("button",{type:"button",className:"gate-peek",onClick:()=>l(C=>!C),"aria-label":o?"Hide password":"Show password",title:o?"Hide":"Show",children:o?c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),c.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"}),c.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),c.jsx("button",{type:"submit",className:"gate-send","aria-label":"Unlock case study",title:"Unlock",children:"↑"})]}),c.jsx("a",{href:"/#work",className:"gate-back",children:"← Back to work"})]})]})})]})}function aT({slug:r}){const e=Z1(r),t=wg(r),[s,o]=be.useState(()=>!t||Mg());if(be.useEffect(()=>{o(!wg(r)||Mg())},[r]),be.useEffect(()=>{var p;if((p=e==null?void 0:e.meta)!=null&&p.title){const m=document.title;return document.title=`${e.meta.title} · Yogesh Shetty`,()=>{document.title=m}}},[e]),!e)return c.jsx(oT,{slug:r});const{Component:l,meta:h}=e,d=Q1(r);return t&&!s?c.jsx(sT,{title:h.title,onUnlock:()=>o(!0)}):c.jsx(U1,{meta:h,next:d,children:c.jsx(pv.Provider,{value:h.sectionIcons||{},children:c.jsx(M1,{components:D1,children:c.jsx(l,{})})})})}function oT({slug:r}){return c.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",textAlign:"center"},children:c.jsxs("div",{style:{maxWidth:460},children:[c.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:14},children:"Case study not found"}),c.jsxs("h1",{style:{fontSize:28,fontWeight:600,margin:"0 0 16px",letterSpacing:"-0.02em"},children:["No case study “",r,"”"]}),c.jsx(Jl,{to:"/",className:"text-link text-link--primary",style:{fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,paddingBottom:3},children:"← Back to portfolio"})]})})}function lT(){const e=ux().match(/^\/case-studies\/([^/]+)\/?$/);return e?c.jsx(aT,{slug:decodeURIComponent(e[1])}):c.jsx(w1,{})}function cT(){return c.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:c.jsxs("div",{style:{maxWidth:520},children:[c.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),c.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),c.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[c.jsx("a",{href:`mailto:${Rr}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),c.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}ox.createRoot(document.getElementById("root")).render(c.jsx(Ir.StrictMode,{children:c.jsx(uv,{fallback:c.jsx(cT,{}),children:c.jsx(xx,{children:c.jsx(lx,{children:c.jsx(lT,{})})})})}));
