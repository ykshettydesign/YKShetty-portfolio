(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function pg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Iu={exports:{}},Ga={},Uu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function G0(){if(gp)return ft;gp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(N,G,ye){this.props=N,this.context=G,this.refs=b,this.updater=ye||M}x.prototype.isReactComponent={},x.prototype.setState=function(N,G){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,G,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=x.prototype;function L(N,G,ye){this.props=N,this.context=G,this.refs=b,this.updater=ye||M}var R=L.prototype=new S;R.constructor=L,E(R,x.prototype),R.isPureReactComponent=!0;var D=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function le(N,G,ye){var q,oe={},fe=null,be=null;if(G!=null)for(q in G.ref!==void 0&&(be=G.ref),G.key!==void 0&&(fe=""+G.key),G)V.call(G,q)&&!k.hasOwnProperty(q)&&(oe[q]=G[q]);var Te=arguments.length-2;if(Te===1)oe.children=ye;else if(1<Te){for(var Ee=Array(Te),Ze=0;Ze<Te;Ze++)Ee[Ze]=arguments[Ze+2];oe.children=Ee}if(N&&N.defaultProps)for(q in Te=N.defaultProps,Te)oe[q]===void 0&&(oe[q]=Te[q]);return{$$typeof:r,type:N,key:fe,ref:be,props:oe,_owner:O.current}}function de(N,G){return{$$typeof:r,type:N.type,key:G,ref:N.ref,props:N.props,_owner:N._owner}}function T(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function F(N){var G={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return G[ye]})}var ce=/\/+/g;function ue(N,G){return typeof N=="object"&&N!==null&&N.key!=null?F(""+N.key):G.toString(36)}function j(N,G,ye,q,oe){var fe=typeof N;(fe==="undefined"||fe==="boolean")&&(N=null);var be=!1;if(N===null)be=!0;else switch(fe){case"string":case"number":be=!0;break;case"object":switch(N.$$typeof){case r:case e:be=!0}}if(be)return be=N,oe=oe(be),N=q===""?"."+ue(be,0):q,D(oe)?(ye="",N!=null&&(ye=N.replace(ce,"$&/")+"/"),j(oe,G,ye,"",function(Ze){return Ze})):oe!=null&&(T(oe)&&(oe=de(oe,ye+(!oe.key||be&&be.key===oe.key?"":(""+oe.key).replace(ce,"$&/")+"/")+N)),G.push(oe)),1;if(be=0,q=q===""?".":q+":",D(N))for(var Te=0;Te<N.length;Te++){fe=N[Te];var Ee=q+ue(fe,Te);be+=j(fe,G,ye,Ee,oe)}else if(Ee=y(N),typeof Ee=="function")for(N=Ee.call(N),Te=0;!(fe=N.next()).done;)fe=fe.value,Ee=q+ue(fe,Te++),be+=j(fe,G,ye,Ee,oe);else if(fe==="object")throw G=String(N),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return be}function re(N,G,ye){if(N==null)return N;var q=[],oe=0;return j(N,q,"","",function(fe){return G.call(ye,fe,oe++)}),q}function W(N){if(N._status===-1){var G=N._result;G=G(),G.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=G)}if(N._status===1)return N._result.default;throw N._result}var te={current:null},B={transition:null},Q={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function X(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:re,forEach:function(N,G,ye){re(N,function(){G.apply(this,arguments)},ye)},count:function(N){var G=0;return re(N,function(){G++}),G},toArray:function(N){return re(N,function(G){return G})||[]},only:function(N){if(!T(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=x,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=L,ft.StrictMode=s,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ft.act=X,ft.cloneElement=function(N,G,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var q=E({},N.props),oe=N.key,fe=N.ref,be=N._owner;if(G!=null){if(G.ref!==void 0&&(fe=G.ref,be=O.current),G.key!==void 0&&(oe=""+G.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ee in G)V.call(G,Ee)&&!k.hasOwnProperty(Ee)&&(q[Ee]=G[Ee]===void 0&&Te!==void 0?Te[Ee]:G[Ee])}var Ee=arguments.length-2;if(Ee===1)q.children=ye;else if(1<Ee){Te=Array(Ee);for(var Ze=0;Ze<Ee;Ze++)Te[Ze]=arguments[Ze+2];q.children=Te}return{$$typeof:r,type:N.type,key:oe,ref:fe,props:q,_owner:be}},ft.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ft.createElement=le,ft.createFactory=function(N){var G=le.bind(null,N);return G.type=N,G},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:d,render:N}},ft.isValidElement=T,ft.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:W}},ft.memo=function(N,G){return{$$typeof:m,type:N,compare:G===void 0?null:G}},ft.startTransition=function(N){var G=B.transition;B.transition={};try{N()}finally{B.transition=G}},ft.unstable_act=X,ft.useCallback=function(N,G){return te.current.useCallback(N,G)},ft.useContext=function(N){return te.current.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N){return te.current.useDeferredValue(N)},ft.useEffect=function(N,G){return te.current.useEffect(N,G)},ft.useId=function(){return te.current.useId()},ft.useImperativeHandle=function(N,G,ye){return te.current.useImperativeHandle(N,G,ye)},ft.useInsertionEffect=function(N,G){return te.current.useInsertionEffect(N,G)},ft.useLayoutEffect=function(N,G){return te.current.useLayoutEffect(N,G)},ft.useMemo=function(N,G){return te.current.useMemo(N,G)},ft.useReducer=function(N,G,ye){return te.current.useReducer(N,G,ye)},ft.useRef=function(N){return te.current.useRef(N)},ft.useState=function(N){return te.current.useState(N)},ft.useSyncExternalStore=function(N,G,ye){return te.current.useSyncExternalStore(N,G,ye)},ft.useTransition=function(){return te.current.useTransition()},ft.version="18.3.1",ft}var vp;function Od(){return vp||(vp=1,Uu.exports=G0()),Uu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function V0(){if(_p)return Ga;_p=1;var r=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,m){var v,_={},y=null,M=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=h,Ga.jsxs=h,Ga}var xp;function W0(){return xp||(xp=1,Iu.exports=V0()),Iu.exports}var u=W0(),Re=Od();const na=pg(Re);var hl={},Fu={exports:{}},Ln={},ku={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function X0(){return yp||(yp=1,(function(r){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var N=X-1>>>1,G=B[N];if(0<o(G,Q))B[N]=Q,B[X]=G,X=N;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var N=0,G=B.length,ye=G>>>1;N<ye;){var q=2*(N+1)-1,oe=B[q],fe=q+1,be=B[fe];if(0>o(oe,X))fe<G&&0>o(be,oe)?(B[N]=be,B[fe]=X,N=fe):(B[N]=oe,B[q]=X,N=q);else if(fe<G&&0>o(be,X))B[N]=be,B[fe]=X,N=fe;else break e}}return Q}function o(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,_=null,y=3,M=!1,E=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var Q=t(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=B)s(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=t(m)}}function D(B){if(b=!1,R(B),!E)if(t(p)!==null)E=!0,W(V);else{var Q=t(m);Q!==null&&te(D,Q.startTime-B)}}function V(B,Q){E=!1,b&&(b=!1,S(le),le=-1),M=!0;var X=y;try{for(R(Q),_=t(p);_!==null&&(!(_.expirationTime>Q)||B&&!F());){var N=_.callback;if(typeof N=="function"){_.callback=null,y=_.priorityLevel;var G=N(_.expirationTime<=Q);Q=r.unstable_now(),typeof G=="function"?_.callback=G:_===t(p)&&s(p),R(Q)}else s(p);_=t(p)}if(_!==null)var ye=!0;else{var q=t(m);q!==null&&te(D,q.startTime-Q),ye=!1}return ye}finally{_=null,y=X,M=!1}}var O=!1,k=null,le=-1,de=5,T=-1;function F(){return!(r.unstable_now()-T<de)}function ce(){if(k!==null){var B=r.unstable_now();T=B;var Q=!0;try{Q=k(!0,B)}finally{Q?ue():(O=!1,k=null)}}else O=!1}var ue;if(typeof L=="function")ue=function(){L(ce)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,re=j.port2;j.port1.onmessage=ce,ue=function(){re.postMessage(null)}}else ue=function(){x(ce,0)};function W(B){k=B,O||(O=!0,ue())}function te(B,Q){le=x(function(){B(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,W(V))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var X=y;y=Q;try{return B()}finally{y=X}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=y;y=B;try{return Q()}finally{y=X}},r.unstable_scheduleCallback=function(B,Q,X){var N=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?N+X:N):X=N,B){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=X+G,B={id:v++,callback:Q,priorityLevel:B,startTime:X,expirationTime:G,sortIndex:-1},X>N?(B.sortIndex=X,e(m,B),t(p)===null&&B===t(m)&&(b?(S(le),le=-1):b=!0,te(D,X-N))):(B.sortIndex=G,e(p,B),E||M||(E=!0,W(V))),B},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(B){var Q=y;return function(){var X=y;y=Q;try{return B.apply(this,arguments)}finally{y=X}}}})(Ou)),Ou}var Sp;function q0(){return Sp||(Sp=1,ku.exports=X0()),ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Y0(){if(Mp)return Ln;Mp=1;var r=Od(),e=q0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(n){return p.call(_,n)?!0:p.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,f,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,L);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,L);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,L);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),F=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),B=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,N;function G(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var ye=!1;function q(n,i){if(!n||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),g=c.stack.split(`
`),w=f.length-1,I=g.length-1;1<=w&&0<=I&&f[w]!==g[I];)I--;for(;1<=w&&0<=I;w--,I--)if(f[w]!==g[I]){if(w!==1||I!==1)do if(w--,I--,0>I||f[w]!==g[I]){var z=`
`+f[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=I);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function oe(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case O:return"Portal";case de:return"Profiler";case le:return"StrictMode";case ue:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Ze(n))}function Z(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ee(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ve(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function et(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ge(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Ct(n,i){Ge(n,i);var a=Te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?P(n,i.type,a):i.hasOwnProperty("defaultValue")&&P(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function st(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function P(n,i,a){(i!=="number"||zt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var A=Array.isArray;function ee(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function _e(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ge(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(A(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function xe(n,i){var a=Te(i.value),c=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ze(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qe,ot=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(qe=qe||document.createElement("div"),qe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ht=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(n){ht.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),mt[i]=mt[n]})});function tt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||mt.hasOwnProperty(n)&&mt[n]?(""+i).trim():i+"px"}function We(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=tt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Fe=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function _t(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Et=null,U=null,Se=null;function we(n){if(n=Ra(n)){if(typeof Et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ao(i),Et(n.stateNode,n.type,i))}}function Oe(n){U?Se?Se.push(n):Se=[n]:U=n}function Xe(){if(U){var n=U,i=Se;if(Se=U=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function yt(n,i){return n(i)}function bt(){}var Ht=!1;function vn(n,i,a){if(Ht)return n(i,a);Ht=!0;try{return yt(n,i,a)}finally{Ht=!1,(U!==null||Se!==null)&&(bt(),Xe())}}function St(n,i){var a=n.stateNode;if(a===null)return null;var c=Ao(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var qt=!1;if(d)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){qt=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{qt=!1}function so(n,i,a,c,f,g,w,I,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(pe){this.onError(pe)}}var Ur=!1,Ri=null,Fr=!1,Qi=null,ao={onError:function(n){Ur=!0,Ri=n}};function oo(n,i,a,c,f,g,w,I,z){Ur=!1,Ri=null,so.apply(ao,arguments)}function nc(n,i,a,c,f,g,w,I,z){if(oo.apply(this,arguments),Ur){if(Ur){var ne=Ri;Ur=!1,Ri=null}else throw Error(t(198));Fr||(Fr=!0,Qi=ne)}}function Ci(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function lo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function C(n){if(Ci(n)!==n)throw Error(t(188))}function K(n){var i=n.alternate;if(!i){if(i=Ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return C(f),n;if(g===c)return C(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var w=!1,I=f.child;I;){if(I===a){w=!0,a=f,c=g;break}if(I===c){w=!0,c=f,a=g;break}I=I.sibling}if(!w){for(I=g.child;I;){if(I===a){w=!0,a=g,c=f;break}if(I===c){w=!0,c=g,a=f;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function se(n){return n=K(n),n!==null?ae(n):null}function ae(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ae(n);if(i!==null)return i;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,He=e.unstable_shouldYield,Ke=e.unstable_requestPaint,Ne=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,nt=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,_n=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,En=null,gt=null;function ut(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(En,n,void 0,(n.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:co,Ut=Math.log,Pi=Math.LN2;function co(n){return n>>>=0,n===0?32:31-(Ut(n)/Pi|0)|0}var vi=64,Ji=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~f;I!==0?c=Bt(I):(g&=w,g!==0&&(c=Bt(g)))}else w=a&~f,w!==0?c=Bt(w):g!==0&&(c=Bt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-xn(i),f=1<<a,c|=n[a],i&=~f;return c}function ua(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-xn(g),I=1<<w,z=f[w];z===-1?((I&a)===0||(I&c)!==0)&&(f[w]=ua(I,i)):z<=i&&(n.expiredLanes|=I),g&=~I}}function kr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function uo(){var n=vi;return vi<<=1,(vi&4194240)===0&&(vi=64),n}function us(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function da(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-xn(i),n[i]=a}function uv(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-xn(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function ic(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-xn(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var At=0;function qd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yd,rc,$d,Kd,Zd,sc=!1,ho=[],er=null,tr=null,nr=null,ha=new Map,fa=new Map,ir=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,i){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ha.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(i.pointerId)}}function pa(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Ra(i),i!==null&&rc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function hv(n,i,a,c,f){switch(i){case"focusin":return er=pa(er,n,i,a,c,f),!0;case"dragenter":return tr=pa(tr,n,i,a,c,f),!0;case"mouseover":return nr=pa(nr,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return ha.set(g,pa(ha.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,fa.set(g,pa(fa.get(g)||null,n,i,a,c,f)),!0}return!1}function Jd(n){var i=Or(n.target);if(i!==null){var a=Ci(i);if(a!==null){if(i=a.tag,i===13){if(i=lo(a),i!==null){n.blockedOn=i,Zd(n.priority,function(){$d(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=oc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Tt=c,a.target.dispatchEvent(c),Tt=null}else return i=Ra(a),i!==null&&rc(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){fo(n)&&a.delete(i)}function fv(){sc=!1,er!==null&&fo(er)&&(er=null),tr!==null&&fo(tr)&&(tr=null),nr!==null&&fo(nr)&&(nr=null),ha.forEach(eh),fa.forEach(eh)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,sc||(sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fv)))}function ga(n){function i(f){return ma(f,n)}if(0<ho.length){ma(ho[0],n);for(var a=1;a<ho.length;a++){var c=ho[a];c.blockedOn===n&&(c.blockedOn=null)}}for(er!==null&&ma(er,n),tr!==null&&ma(tr,n),nr!==null&&ma(nr,n),ha.forEach(i),fa.forEach(i),a=0;a<ir.length;a++)c=ir[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&ir.shift()}var ds=D.ReactCurrentBatchConfig,po=!0;function pv(n,i,a,c){var f=At,g=ds.transition;ds.transition=null;try{At=1,ac(n,i,a,c)}finally{At=f,ds.transition=g}}function mv(n,i,a,c){var f=At,g=ds.transition;ds.transition=null;try{At=4,ac(n,i,a,c)}finally{At=f,ds.transition=g}}function ac(n,i,a,c){if(po){var f=oc(n,i,a,c);if(f===null)Ec(n,i,c,mo,a),Qd(n,c);else if(hv(f,n,i,a,c))c.stopPropagation();else if(Qd(n,c),i&4&&-1<dv.indexOf(n)){for(;f!==null;){var g=Ra(f);if(g!==null&&Yd(g),g=oc(n,i,a,c),g===null&&Ec(n,i,c,mo,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ec(n,i,c,null,a)}}var mo=null;function oc(n,i,a,c){if(mo=null,n=ct(c),n=Or(n),n!==null)if(i=Ci(n),i===null)n=null;else if(a=i.tag,a===13){if(n=lo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return mo=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case nt:return 1;case rt:return 4;case Pt:case _n:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var rr=null,lc=null,go=null;function nh(){if(go)return go;var n,i=lc,a=i.length,c,f="value"in rr?rr.value:rr.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[g-c];c++);return go=f.slice(n,1<c?1-c:void 0)}function vo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _o(){return!0}function ih(){return!1}function zn(n){function i(a,c,f,g,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?_o:ih,this.isPropagationStopped=ih,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=zn(hs),va=X({},hs,{view:0,detail:0}),gv=zn(va),uc,dc,_a,xo=X({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_a&&(_a&&n.type==="mousemove"?(uc=n.screenX-_a.screenX,dc=n.screenY-_a.screenY):dc=uc=0,_a=n),uc)},movementY:function(n){return"movementY"in n?n.movementY:dc}}),rh=zn(xo),vv=X({},xo,{dataTransfer:0}),_v=zn(vv),xv=X({},va,{relatedTarget:0}),hc=zn(xv),yv=X({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=zn(yv),Mv=X({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wv=zn(Mv),Ev=X({},hs,{data:0}),sh=zn(Ev),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Av[n])?!!i[n]:!1}function fc(){return Rv}var Cv=X({},va,{key:function(n){if(n.key){var i=Tv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Pv=zn(Cv),Lv=X({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=zn(Lv),Nv=X({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),Dv=zn(Nv),Iv=X({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uv=zn(Iv),Fv=X({},xo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=zn(Fv),Ov=[9,13,27,32],pc=d&&"CompositionEvent"in window,xa=null;d&&"documentMode"in document&&(xa=document.documentMode);var zv=d&&"TextEvent"in window&&!xa,oh=d&&(!pc||xa&&8<xa&&11>=xa),lh=" ",ch=!1;function uh(n,i){switch(n){case"keyup":return Ov.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function Bv(n,i){switch(n){case"compositionend":return dh(i);case"keypress":return i.which!==32?null:(ch=!0,lh);case"textInput":return n=i.data,n===lh&&ch?null:n;default:return null}}function jv(n,i){if(fs)return n==="compositionend"||!pc&&uh(n,i)?(n=nh(),go=lc=rr=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Hv[n.type]:i==="textarea"}function fh(n,i,a,c){Oe(c),i=Eo(i,"onChange"),0<i.length&&(a=new cc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ya=null,Sa=null;function Gv(n){Lh(n,0)}function yo(n){var i=_s(n);if(Z(i))return n}function Vv(n,i){if(n==="change")return i}var ph=!1;if(d){var mc;if(d){var gc="oninput"in document;if(!gc){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),gc=typeof mh.oninput=="function"}mc=gc}else mc=!1;ph=mc&&(!document.documentMode||9<document.documentMode)}function gh(){ya&&(ya.detachEvent("onpropertychange",vh),Sa=ya=null)}function vh(n){if(n.propertyName==="value"&&yo(Sa)){var i=[];fh(i,Sa,n,ct(n)),vn(Gv,i)}}function Wv(n,i,a){n==="focusin"?(gh(),ya=i,Sa=a,ya.attachEvent("onpropertychange",vh)):n==="focusout"&&gh()}function Xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yo(Sa)}function qv(n,i){if(n==="click")return yo(i)}function Yv(n,i){if(n==="input"||n==="change")return yo(i)}function $v(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:$v;function Ma(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!ii(n[f],i[f]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xh(n,i){var a=_h(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_h(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Sh(){for(var n=window,i=zt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zt(n.document)}return i}function vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Kv(n){var i=Sh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=xh(a,g);var w=xh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zv=d&&"documentMode"in document&&11>=document.documentMode,ps=null,_c=null,wa=null,xc=!1;function Mh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||ps==null||ps!==zt(c)||(c=ps,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Ma(wa,c)||(wa=c,c=Eo(_c,"onSelect"),0<c.length&&(i=new cc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ps)))}function So(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ms={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},yc={},wh={};d&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Mo(n){if(yc[n])return yc[n];if(!ms[n])return n;var i=ms[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in wh)return yc[n]=i[a];return n}var Eh=Mo("animationend"),Th=Mo("animationiteration"),bh=Mo("animationstart"),Ah=Mo("transitionend"),Rh=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,i){Rh.set(n,i),l(i,[n])}for(var Sc=0;Sc<Ch.length;Sc++){var Mc=Ch[Sc],Qv=Mc.toLowerCase(),Jv=Mc[0].toUpperCase()+Mc.slice(1);sr(Qv,"on"+Jv)}sr(Eh,"onAnimationEnd"),sr(Th,"onAnimationIteration"),sr(bh,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(Ah,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,nc(c,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],z=I.instance,ne=I.currentTarget;if(I=I.listener,z!==g&&f.isPropagationStopped())break e;Ph(f,I,ne),g=z}else for(w=0;w<c.length;w++){if(I=c[w],z=I.instance,ne=I.currentTarget,I=I.listener,z!==g&&f.isPropagationStopped())break e;Ph(f,I,ne),g=z}}}if(Fr)throw n=Qi,Fr=!1,Qi=null,n}function Nt(n,i){var a=i[Pc];a===void 0&&(a=i[Pc]=new Set);var c=n+"__bubble";a.has(c)||(Nh(i,n,2,!1),a.add(c))}function wc(n,i,a){var c=0;i&&(c|=4),Nh(a,n,c,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[wo]){n[wo]=!0,s.forEach(function(a){a!=="selectionchange"&&(e0.has(a)||wc(a,!1,n),wc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wo]||(i[wo]=!0,wc("selectionchange",!1,i))}}function Nh(n,i,a,c){switch(th(i)){case 1:var f=pv;break;case 4:f=mv;break;default:f=ac}a=f.bind(null,i,a,n),f=void 0,!qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Ec(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;w=w.return}for(;I!==null;){if(w=Or(I),w===null)return;if(z=w.tag,z===5||z===6){c=g=w;continue e}I=I.parentNode}}c=c.return}vn(function(){var ne=g,pe=ct(a),ve=[];e:{var he=Rh.get(n);if(he!==void 0){var Le=cc,Ue=n;switch(n){case"keypress":if(vo(a)===0)break e;case"keydown":case"keyup":Le=Pv;break;case"focusin":Ue="focus",Le=hc;break;case"focusout":Ue="blur",Le=hc;break;case"beforeblur":case"afterblur":Le=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Dv;break;case Eh:case Th:case bh:Le=Sv;break;case Ah:Le=Uv;break;case"scroll":Le=gv;break;case"wheel":Le=kv;break;case"copy":case"cut":case"paste":Le=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=ah}var ke=(i&4)!==0,Vt=!ke&&n==="scroll",$=ke?he!==null?he+"Capture":null:he;ke=[];for(var H=ne,J;H!==null;){J=H;var Me=J.stateNode;if(J.tag===5&&Me!==null&&(J=Me,$!==null&&(Me=St(H,$),Me!=null&&ke.push(ba(H,Me,J)))),Vt)break;H=H.return}0<ke.length&&(he=new Le(he,Ue,null,a,pe),ve.push({event:he,listeners:ke}))}}if((i&7)===0){e:{if(he=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",he&&a!==Tt&&(Ue=a.relatedTarget||a.fromElement)&&(Or(Ue)||Ue[Li]))break e;if((Le||he)&&(he=pe.window===pe?pe:(he=pe.ownerDocument)?he.defaultView||he.parentWindow:window,Le?(Ue=a.relatedTarget||a.toElement,Le=ne,Ue=Ue?Or(Ue):null,Ue!==null&&(Vt=Ci(Ue),Ue!==Vt||Ue.tag!==5&&Ue.tag!==6)&&(Ue=null)):(Le=null,Ue=ne),Le!==Ue)){if(ke=rh,Me="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(ke=ah,Me="onPointerLeave",$="onPointerEnter",H="pointer"),Vt=Le==null?he:_s(Le),J=Ue==null?he:_s(Ue),he=new ke(Me,H+"leave",Le,a,pe),he.target=Vt,he.relatedTarget=J,Me=null,Or(pe)===ne&&(ke=new ke($,H+"enter",Ue,a,pe),ke.target=J,ke.relatedTarget=Vt,Me=ke),Vt=Me,Le&&Ue)t:{for(ke=Le,$=Ue,H=0,J=ke;J;J=gs(J))H++;for(J=0,Me=$;Me;Me=gs(Me))J++;for(;0<H-J;)ke=gs(ke),H--;for(;0<J-H;)$=gs($),J--;for(;H--;){if(ke===$||$!==null&&ke===$.alternate)break t;ke=gs(ke),$=gs($)}ke=null}else ke=null;Le!==null&&Dh(ve,he,Le,ke,!1),Ue!==null&&Vt!==null&&Dh(ve,Vt,Ue,ke,!0)}}e:{if(he=ne?_s(ne):window,Le=he.nodeName&&he.nodeName.toLowerCase(),Le==="select"||Le==="input"&&he.type==="file")var Be=Vv;else if(hh(he))if(ph)Be=Yv;else{Be=Xv;var Ye=Wv}else(Le=he.nodeName)&&Le.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Be=qv);if(Be&&(Be=Be(n,ne))){fh(ve,Be,a,pe);break e}Ye&&Ye(n,he,ne),n==="focusout"&&(Ye=he._wrapperState)&&Ye.controlled&&he.type==="number"&&P(he,"number",he.value)}switch(Ye=ne?_s(ne):window,n){case"focusin":(hh(Ye)||Ye.contentEditable==="true")&&(ps=Ye,_c=ne,wa=null);break;case"focusout":wa=_c=ps=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Mh(ve,a,pe);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":Mh(ve,a,pe)}var $e;if(pc)e:{switch(n){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else fs?uh(n,a)&&(Qe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Qe="onCompositionStart");Qe&&(oh&&a.locale!=="ko"&&(fs||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&fs&&($e=nh()):(rr=pe,lc="value"in rr?rr.value:rr.textContent,fs=!0)),Ye=Eo(ne,Qe),0<Ye.length&&(Qe=new sh(Qe,n,null,a,pe),ve.push({event:Qe,listeners:Ye}),$e?Qe.data=$e:($e=dh(a),$e!==null&&(Qe.data=$e)))),($e=zv?Bv(n,a):jv(n,a))&&(ne=Eo(ne,"onBeforeInput"),0<ne.length&&(pe=new sh("onBeforeInput","beforeinput",null,a,pe),ve.push({event:pe,listeners:ne}),pe.data=$e))}Lh(ve,i)})}function ba(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Eo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=St(n,a),g!=null&&c.unshift(ba(n,g,f)),g=St(n,i),g!=null&&c.push(ba(n,g,f))),n=n.return}return c}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dh(n,i,a,c,f){for(var g=i._reactName,w=[];a!==null&&a!==c;){var I=a,z=I.alternate,ne=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&ne!==null&&(I=ne,f?(z=St(a,g),z!=null&&w.unshift(ba(a,z,I))):f||(z=St(a,g),z!=null&&w.push(ba(a,z,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(t0,`
`).replace(n0,"")}function To(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function bo(){}var Tc=null,bc=null;function Ac(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(s0)}:Rc;function s0(n){setTimeout(function(){throw n})}function Cc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ga(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ga(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),_i="__reactFiber$"+vs,Aa="__reactProps$"+vs,Li="__reactContainer$"+vs,Pc="__reactEvents$"+vs,a0="__reactListeners$"+vs,o0="__reactHandles$"+vs;function Or(n){var i=n[_i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Li]||a[_i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[_i])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Ra(n){return n=n[_i]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ao(n){return n[Aa]||null}var Lc=[],xs=-1;function or(n){return{current:n}}function Dt(n){0>xs||(n.current=Lc[xs],Lc[xs]=null,xs--)}function Lt(n,i){xs++,Lc[xs]=n.current,n.current=i}var lr={},cn=or(lr),bn=or(!1),zr=lr;function ys(n,i){var a=n.type.contextTypes;if(!a)return lr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function An(n){return n=n.childContextTypes,n!=null}function Ro(){Dt(bn),Dt(cn)}function kh(n,i,a){if(cn.current!==lr)throw Error(t(168));Lt(cn,i),Lt(bn,a)}function Oh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,be(n)||"Unknown",f));return X({},a,c)}function Co(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,zr=cn.current,Lt(cn,n),Lt(bn,bn.current),!0}function zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Oh(n,i,zr),c.__reactInternalMemoizedMergedChildContext=n,Dt(bn),Dt(cn),Lt(cn,n)):Dt(bn),Lt(bn,a)}var Ni=null,Po=!1,Nc=!1;function Bh(n){Ni===null?Ni=[n]:Ni.push(n)}function l0(n){Po=!0,Bh(n)}function cr(){if(!Nc&&Ni!==null){Nc=!0;var n=0,i=At;try{var a=Ni;for(At=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ni=null,Po=!1}catch(f){throw Ni!==null&&(Ni=Ni.slice(n+1)),ie(nt,cr),f}finally{At=i,Nc=!1}}return null}var Ss=[],Ms=0,Lo=null,No=0,Yn=[],$n=0,Br=null,Di=1,Ii="";function jr(n,i){Ss[Ms++]=No,Ss[Ms++]=Lo,Lo=n,No=i}function jh(n,i,a){Yn[$n++]=Di,Yn[$n++]=Ii,Yn[$n++]=Br,Br=n;var c=Di;n=Ii;var f=32-xn(c)-1;c&=~(1<<f),a+=1;var g=32-xn(i)+f;if(30<g){var w=f-f%5;g=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Di=1<<32-xn(i)+f|a<<f|c,Ii=g+n}else Di=1<<g|a<<f|c,Ii=n}function Dc(n){n.return!==null&&(jr(n,1),jh(n,1,0))}function Ic(n){for(;n===Lo;)Lo=Ss[--Ms],Ss[Ms]=null,No=Ss[--Ms],Ss[Ms]=null;for(;n===Br;)Br=Yn[--$n],Yn[$n]=null,Ii=Yn[--$n],Yn[$n]=null,Di=Yn[--$n],Yn[$n]=null}var Bn=null,jn=null,Ft=!1,ri=null;function Hh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,jn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:Di,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,jn=null,!0):!1;default:return!1}}function Uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fc(n){if(Ft){var i=jn;if(i){var a=i;if(!Gh(n,i)){if(Uc(n))throw Error(t(418));i=ar(a.nextSibling);var c=Bn;i&&Gh(n,i)?Hh(c,a):(n.flags=n.flags&-4097|2,Ft=!1,Bn=n)}}else{if(Uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,Bn=n}}}function Vh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Do(n){if(n!==Bn)return!1;if(!Ft)return Vh(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ac(n.type,n.memoizedProps)),i&&(i=jn)){if(Uc(n))throw Wh(),Error(t(418));for(;i;)Hh(n,i),i=ar(i.nextSibling)}if(Vh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){jn=ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Bn?ar(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=jn;n;)n=ar(n.nextSibling)}function ws(){jn=Bn=null,Ft=!1}function kc(n){ri===null?ri=[n]:ri.push(n)}var c0=D.ReactCurrentBatchConfig;function Ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var I=f.refs;w===null?delete I[g]:I[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Io(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function qh(n){function i($,H){if(n){var J=$.deletions;J===null?($.deletions=[H],$.flags|=16):J.push(H)}}function a($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function c($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function f($,H){return $=vr($,H),$.index=0,$.sibling=null,$}function g($,H,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<H?($.flags|=2,H):J):($.flags|=2,H)):($.flags|=1048576,H)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function I($,H,J,Me){return H===null||H.tag!==6?(H=Ru(J,$.mode,Me),H.return=$,H):(H=f(H,J),H.return=$,H)}function z($,H,J,Me){var Be=J.type;return Be===k?pe($,H,J.props.children,Me,J.key):H!==null&&(H.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===W&&Xh(Be)===H.type)?(Me=f(H,J.props),Me.ref=Ca($,H,J),Me.return=$,Me):(Me=rl(J.type,J.key,J.props,null,$.mode,Me),Me.ref=Ca($,H,J),Me.return=$,Me)}function ne($,H,J,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=Cu(J,$.mode,Me),H.return=$,H):(H=f(H,J.children||[]),H.return=$,H)}function pe($,H,J,Me,Be){return H===null||H.tag!==7?(H=$r(J,$.mode,Me,Be),H.return=$,H):(H=f(H,J),H.return=$,H)}function ve($,H,J){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Ru(""+H,$.mode,J),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return J=rl(H.type,H.key,H.props,null,$.mode,J),J.ref=Ca($,null,H),J.return=$,J;case O:return H=Cu(H,$.mode,J),H.return=$,H;case W:var Me=H._init;return ve($,Me(H._payload),J)}if(A(H)||Q(H))return H=$r(H,$.mode,J,null),H.return=$,H;Io($,H)}return null}function he($,H,J,Me){var Be=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Be!==null?null:I($,H,""+J,Me);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return J.key===Be?z($,H,J,Me):null;case O:return J.key===Be?ne($,H,J,Me):null;case W:return Be=J._init,he($,H,Be(J._payload),Me)}if(A(J)||Q(J))return Be!==null?null:pe($,H,J,Me,null);Io($,J)}return null}function Le($,H,J,Me,Be){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return $=$.get(J)||null,I(H,$,""+Me,Be);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case V:return $=$.get(Me.key===null?J:Me.key)||null,z(H,$,Me,Be);case O:return $=$.get(Me.key===null?J:Me.key)||null,ne(H,$,Me,Be);case W:var Ye=Me._init;return Le($,H,J,Ye(Me._payload),Be)}if(A(Me)||Q(Me))return $=$.get(J)||null,pe(H,$,Me,Be,null);Io(H,Me)}return null}function Ue($,H,J,Me){for(var Be=null,Ye=null,$e=H,Qe=H=0,tn=null;$e!==null&&Qe<J.length;Qe++){$e.index>Qe?(tn=$e,$e=null):tn=$e.sibling;var Mt=he($,$e,J[Qe],Me);if(Mt===null){$e===null&&($e=tn);break}n&&$e&&Mt.alternate===null&&i($,$e),H=g(Mt,H,Qe),Ye===null?Be=Mt:Ye.sibling=Mt,Ye=Mt,$e=tn}if(Qe===J.length)return a($,$e),Ft&&jr($,Qe),Be;if($e===null){for(;Qe<J.length;Qe++)$e=ve($,J[Qe],Me),$e!==null&&(H=g($e,H,Qe),Ye===null?Be=$e:Ye.sibling=$e,Ye=$e);return Ft&&jr($,Qe),Be}for($e=c($,$e);Qe<J.length;Qe++)tn=Le($e,$,Qe,J[Qe],Me),tn!==null&&(n&&tn.alternate!==null&&$e.delete(tn.key===null?Qe:tn.key),H=g(tn,H,Qe),Ye===null?Be=tn:Ye.sibling=tn,Ye=tn);return n&&$e.forEach(function(_r){return i($,_r)}),Ft&&jr($,Qe),Be}function ke($,H,J,Me){var Be=Q(J);if(typeof Be!="function")throw Error(t(150));if(J=Be.call(J),J==null)throw Error(t(151));for(var Ye=Be=null,$e=H,Qe=H=0,tn=null,Mt=J.next();$e!==null&&!Mt.done;Qe++,Mt=J.next()){$e.index>Qe?(tn=$e,$e=null):tn=$e.sibling;var _r=he($,$e,Mt.value,Me);if(_r===null){$e===null&&($e=tn);break}n&&$e&&_r.alternate===null&&i($,$e),H=g(_r,H,Qe),Ye===null?Be=_r:Ye.sibling=_r,Ye=_r,$e=tn}if(Mt.done)return a($,$e),Ft&&jr($,Qe),Be;if($e===null){for(;!Mt.done;Qe++,Mt=J.next())Mt=ve($,Mt.value,Me),Mt!==null&&(H=g(Mt,H,Qe),Ye===null?Be=Mt:Ye.sibling=Mt,Ye=Mt);return Ft&&jr($,Qe),Be}for($e=c($,$e);!Mt.done;Qe++,Mt=J.next())Mt=Le($e,$,Qe,Mt.value,Me),Mt!==null&&(n&&Mt.alternate!==null&&$e.delete(Mt.key===null?Qe:Mt.key),H=g(Mt,H,Qe),Ye===null?Be=Mt:Ye.sibling=Mt,Ye=Mt);return n&&$e.forEach(function(H0){return i($,H0)}),Ft&&jr($,Qe),Be}function Vt($,H,J,Me){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case V:e:{for(var Be=J.key,Ye=H;Ye!==null;){if(Ye.key===Be){if(Be=J.type,Be===k){if(Ye.tag===7){a($,Ye.sibling),H=f(Ye,J.props.children),H.return=$,$=H;break e}}else if(Ye.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===W&&Xh(Be)===Ye.type){a($,Ye.sibling),H=f(Ye,J.props),H.ref=Ca($,Ye,J),H.return=$,$=H;break e}a($,Ye);break}else i($,Ye);Ye=Ye.sibling}J.type===k?(H=$r(J.props.children,$.mode,Me,J.key),H.return=$,$=H):(Me=rl(J.type,J.key,J.props,null,$.mode,Me),Me.ref=Ca($,H,J),Me.return=$,$=Me)}return w($);case O:e:{for(Ye=J.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a($,H.sibling),H=f(H,J.children||[]),H.return=$,$=H;break e}else{a($,H);break}else i($,H);H=H.sibling}H=Cu(J,$.mode,Me),H.return=$,$=H}return w($);case W:return Ye=J._init,Vt($,H,Ye(J._payload),Me)}if(A(J))return Ue($,H,J,Me);if(Q(J))return ke($,H,J,Me);Io($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,H!==null&&H.tag===6?(a($,H.sibling),H=f(H,J),H.return=$,$=H):(a($,H),H=Ru(J,$.mode,Me),H.return=$,$=H),w($)):a($,H)}return Vt}var Es=qh(!0),Yh=qh(!1),Uo=or(null),Fo=null,Ts=null,Oc=null;function zc(){Oc=Ts=Fo=null}function Bc(n){var i=Uo.current;Dt(Uo),n._currentValue=i}function jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function bs(n,i){Fo=n,Oc=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Rn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Fo===null)throw Error(t(308));Ts=n,Fo.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var Hr=null;function Hc(n){Hr===null?Hr=[n]:Hr.push(n)}function $h(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Hc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ui(n,c)}function Ui(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ur=!1;function Gc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ui(n,a)}return f=c.interleaved,f===null?(i.next=i,Hc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ui(n,a)}function ko(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ic(n,a)}}function Zh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Oo(n,i,a,c){var f=n.updateQueue;ur=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var z=I,ne=z.next;z.next=null,w===null?g=ne:w.next=ne,w=z;var pe=n.alternate;pe!==null&&(pe=pe.updateQueue,I=pe.lastBaseUpdate,I!==w&&(I===null?pe.firstBaseUpdate=ne:I.next=ne,pe.lastBaseUpdate=z))}if(g!==null){var ve=f.baseState;w=0,pe=ne=z=null,I=g;do{var he=I.lane,Le=I.eventTime;if((c&he)===he){pe!==null&&(pe=pe.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ue=n,ke=I;switch(he=i,Le=a,ke.tag){case 1:if(Ue=ke.payload,typeof Ue=="function"){ve=Ue.call(Le,ve,he);break e}ve=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=ke.payload,he=typeof Ue=="function"?Ue.call(Le,ve,he):Ue,he==null)break e;ve=X({},ve,he);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,he=f.effects,he===null?f.effects=[I]:he.push(I))}else Le={eventTime:Le,lane:he,tag:I.tag,payload:I.payload,callback:I.callback,next:null},pe===null?(ne=pe=Le,z=ve):pe=pe.next=Le,w|=he;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;he=I,I=he.next,he.next=null,f.lastBaseUpdate=he,f.shared.pending=null}}while(!0);if(pe===null&&(z=ve),f.baseState=z,f.firstBaseUpdate=ne,f.lastBaseUpdate=pe,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Wr|=w,n.lanes=w,n.memoizedState=ve}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Pa={},xi=or(Pa),La=or(Pa),Na=or(Pa);function Gr(n){if(n===Pa)throw Error(t(174));return n}function Vc(n,i){switch(Lt(Na,i),Lt(La,n),Lt(xi,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ie(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ie(i,n)}Dt(xi),Lt(xi,i)}function As(){Dt(xi),Dt(La),Dt(Na)}function Jh(n){Gr(Na.current);var i=Gr(xi.current),a=Ie(i,n.type);i!==a&&(Lt(La,n),Lt(xi,a))}function Wc(n){La.current===n&&(Dt(xi),Dt(La))}var kt=or(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function qc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var Bo=D.ReactCurrentDispatcher,Yc=D.ReactCurrentBatchConfig,Vr=0,Ot=null,Yt=null,Jt=null,jo=!1,Da=!1,Ia=0,u0=0;function un(){throw Error(t(321))}function $c(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function Kc(n,i,a,c,f,g){if(Vr=g,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Bo.current=n===null||n.memoizedState===null?p0:m0,n=a(c,f),Da){g=0;do{if(Da=!1,Ia=0,25<=g)throw Error(t(301));g+=1,Jt=Yt=null,i.updateQueue=null,Bo.current=g0,n=a(c,f)}while(Da)}if(Bo.current=Vo,i=Yt!==null&&Yt.next!==null,Vr=0,Jt=Yt=Ot=null,jo=!1,i)throw Error(t(300));return n}function Zc(){var n=Ia!==0;return Ia=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ot.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Zn(){if(Yt===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=Yt.next;var i=Jt===null?Ot.memoizedState:Jt.next;if(i!==null)Jt=i,Yt=n;else{if(n===null)throw Error(t(310));Yt=n,n={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Jt===null?Ot.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Ua(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Yt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=w=null,z=null,ne=g;do{var pe=ne.lane;if((Vr&pe)===pe)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var ve={lane:pe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(I=z=ve,w=c):z=z.next=ve,Ot.lanes|=pe,Wr|=pe}ne=ne.next}while(ne!==null&&ne!==g);z===null?w=c:z.next=I,ii(c,i.memoizedState)||(Rn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,Ot.lanes|=g,Wr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Jc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=n(g,w.action),w=w.next;while(w!==f);ii(g,i.memoizedState)||(Rn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function ef(){}function tf(n,i){var a=Ot,c=Zn(),f=i(),g=!ii(c.memoizedState,f);if(g&&(c.memoizedState=f,Rn=!0),c=c.queue,eu(sf.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,Fa(9,rf.bind(null,a,c,f,i),void 0,null),en===null)throw Error(t(349));(Vr&30)!==0||nf(a,i,f)}return f}function nf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rf(n,i,a,c){i.value=a,i.getSnapshot=c,af(i)&&of(n)}function sf(n,i,a){return a(function(){af(i)&&of(n)})}function af(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function of(n){var i=Ui(n,1);i!==null&&li(i,n,1,-1)}function lf(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=f0.bind(null,Ot,n),[i.memoizedState,n]}function Fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function cf(){return Zn().memoizedState}function Ho(n,i,a,c){var f=yi();Ot.flags|=n,f.memoizedState=Fa(1|i,a,void 0,c===void 0?null:c)}function Go(n,i,a,c){var f=Zn();c=c===void 0?null:c;var g=void 0;if(Yt!==null){var w=Yt.memoizedState;if(g=w.destroy,c!==null&&$c(c,w.deps)){f.memoizedState=Fa(i,a,g,c);return}}Ot.flags|=n,f.memoizedState=Fa(1|i,a,g,c)}function uf(n,i){return Ho(8390656,8,n,i)}function eu(n,i){return Go(2048,8,n,i)}function df(n,i){return Go(4,2,n,i)}function hf(n,i){return Go(4,4,n,i)}function ff(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pf(n,i,a){return a=a!=null?a.concat([n]):null,Go(4,4,ff.bind(null,i,n),a)}function tu(){}function mf(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gf(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function vf(n,i,a){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(ii(a,i)||(a=uo(),Ot.lanes|=a,Wr|=a,n.baseState=!0),i)}function d0(n,i){var a=At;At=a!==0&&4>a?a:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),i()}finally{At=a,Yc.transition=c}}function _f(){return Zn().memoizedState}function h0(n,i,a){var c=mr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xf(n))yf(i,a);else if(a=$h(n,i,a,c),a!==null){var f=Sn();li(a,n,c,f),Sf(a,i,c)}}function f0(n,i,a){var c=mr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xf(n))yf(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,I=g(w,a);if(f.hasEagerState=!0,f.eagerState=I,ii(I,w)){var z=i.interleaved;z===null?(f.next=f,Hc(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=$h(n,i,f,c),a!==null&&(f=Sn(),li(a,n,c,f),Sf(a,i,c))}}function xf(n){var i=n.alternate;return n===Ot||i!==null&&i===Ot}function yf(n,i){Da=jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sf(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ic(n,a)}}var Vo={readContext:Kn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},p0={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:uf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ho(4194308,4,ff.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ho(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ho(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=yi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=h0.bind(null,Ot,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:lf,useDebugValue:tu,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=lf(!1),i=n[0];return n=d0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ot,f=yi();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Vr&30)!==0||nf(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,uf(sf.bind(null,c,g,n),[n]),c.flags|=2048,Fa(9,rf.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=yi(),i=en.identifierPrefix;if(Ft){var a=Ii,c=Di;a=(c&~(1<<32-xn(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=u0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},m0={readContext:Kn,useCallback:mf,useContext:Kn,useEffect:eu,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:hf,useMemo:gf,useReducer:Qc,useRef:cf,useState:function(){return Qc(Ua)},useDebugValue:tu,useDeferredValue:function(n){var i=Zn();return vf(i,Yt.memoizedState,n)},useTransition:function(){var n=Qc(Ua)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ef,useSyncExternalStore:tf,useId:_f,unstable_isNewReconciler:!1},g0={readContext:Kn,useCallback:mf,useContext:Kn,useEffect:eu,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:hf,useMemo:gf,useReducer:Jc,useRef:cf,useState:function(){return Jc(Ua)},useDebugValue:tu,useDeferredValue:function(n){var i=Zn();return Yt===null?i.memoizedState=n:vf(i,Yt.memoizedState,n)},useTransition:function(){var n=Jc(Ua)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ef,useSyncExternalStore:tf,useId:_f,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function nu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wo={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Sn(),f=mr(n),g=Fi(c,f);g.payload=i,a!=null&&(g.callback=a),i=dr(n,g,f),i!==null&&(li(i,n,f,c),ko(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Sn(),f=mr(n),g=Fi(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=dr(n,g,f),i!==null&&(li(i,n,f,c),ko(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Sn(),c=mr(n),f=Fi(a,c);f.tag=2,i!=null&&(f.callback=i),i=dr(n,f,c),i!==null&&(li(i,n,c,a),ko(i,n,c))}};function Mf(n,i,a,c,f,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(f,g):!0}function wf(n,i,a){var c=!1,f=lr,g=i.contextType;return typeof g=="object"&&g!==null?g=Kn(g):(f=An(i)?zr:cn.current,c=i.contextTypes,g=(c=c!=null)?ys(n,f):lr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ef(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Wo.enqueueReplaceState(i,i.state,null)}function iu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Gc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Kn(g):(g=An(i)?zr:cn.current,f.context=ys(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(nu(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wo.enqueueReplaceState(f,f.state,null),Oo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,i){try{var a="",c=i;do a+=oe(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function ru(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function su(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function Tf(n,i,a){a=Fi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Qo||(Qo=!0,yu=c),su(n,i)},a}function bf(n,i,a){a=Fi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){su(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){su(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Af(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new v0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=L0.bind(null,n,i,a),i.then(n,n))}function Rf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cf(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Fi(-1,1),i.tag=2,dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var _0=D.ReactCurrentOwner,Rn=!1;function yn(n,i,a,c){i.child=n===null?Yh(i,null,a,c):Es(i,n.child,a,c)}function Pf(n,i,a,c,f){a=a.render;var g=i.ref;return bs(i,f),c=Kc(n,i,a,c,g,f),a=Zc(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(Ft&&a&&Dc(i),i.flags|=1,yn(n,i,c,f),i.child)}function Lf(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!Au(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Nf(n,i,g,c,f)):(n=rl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(w,c)&&n.ref===i.ref)return ki(n,i,f)}return i.flags|=1,n=vr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Nf(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(Ma(g,c)&&n.ref===i.ref)if(Rn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Rn=!0);else return i.lanes=n.lanes,ki(n,i,f)}return au(n,i,a,c,f)}function Df(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ps,Hn),Hn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ps,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Lt(Ps,Hn),Hn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Lt(Ps,Hn),Hn|=c;return yn(n,i,f,a),i.child}function If(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function au(n,i,a,c,f){var g=An(a)?zr:cn.current;return g=ys(i,g),bs(i,f),a=Kc(n,i,a,c,g,f),c=Zc(),n!==null&&!Rn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(Ft&&c&&Dc(i),i.flags|=1,yn(n,i,a,f),i.child)}function Uf(n,i,a,c,f){if(An(a)){var g=!0;Co(i)}else g=!1;if(bs(i,f),i.stateNode===null)qo(n,i),wf(i,a,c),iu(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var z=w.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Kn(ne):(ne=An(a)?zr:cn.current,ne=ys(i,ne));var pe=a.getDerivedStateFromProps,ve=typeof pe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ve||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||z!==ne)&&Ef(i,w,c,ne),ur=!1;var he=i.memoizedState;w.state=he,Oo(i,c,w,f),z=i.memoizedState,I!==c||he!==z||bn.current||ur?(typeof pe=="function"&&(nu(i,a,pe,c),z=i.memoizedState),(I=ur||Mf(i,a,I,c,he,z,ne))?(ve||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=ne,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Kh(n,i),I=i.memoizedProps,ne=i.type===i.elementType?I:si(i.type,I),w.props=ne,ve=i.pendingProps,he=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=Kn(z):(z=An(a)?zr:cn.current,z=ys(i,z));var Le=a.getDerivedStateFromProps;(pe=typeof Le=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==ve||he!==z)&&Ef(i,w,c,z),ur=!1,he=i.memoizedState,w.state=he,Oo(i,c,w,f);var Ue=i.memoizedState;I!==ve||he!==Ue||bn.current||ur?(typeof Le=="function"&&(nu(i,a,Le,c),Ue=i.memoizedState),(ne=ur||Mf(i,a,ne,c,he,Ue,z)||!1)?(pe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ue,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ue,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ue),w.props=c,w.state=Ue,w.context=z,c=ne):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),c=!1)}return ou(n,i,a,c,g,f)}function ou(n,i,a,c,f,g){If(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&zh(i,a,!1),ki(n,i,g);c=i.stateNode,_0.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Es(i,n.child,null,g),i.child=Es(i,null,I,g)):yn(n,i,I,g),i.memoizedState=c.state,f&&zh(i,a,!0),i.child}function Ff(n){var i=n.stateNode;i.pendingContext?kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kh(n,i.context,!1),Vc(n,i.containerInfo)}function kf(n,i,a,c,f){return ws(),kc(f),i.flags|=256,yn(n,i,a,c),i.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Of(n,i,a){var c=i.pendingProps,f=kt.current,g=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Lt(kt,f&1),n===null)return Fc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=sl(w,c,0,null),n=$r(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=cu(a),i.memoizedState=lu,n):uu(i,w));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return x0(n,i,w,c,I,f,a);if(g){g=c.fallback,w=i.mode,f=n.child,I=f.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=vr(f,z),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=vr(I,g):(g=$r(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?cu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=lu,c}return g=n.child,n=g.sibling,c=vr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function uu(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xo(n,i,a,c){return c!==null&&kc(c),Es(i,n.child,null,a),n=uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function x0(n,i,a,c,f,g,w){if(a)return i.flags&256?(i.flags&=-257,c=ru(Error(t(422))),Xo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=sl({mode:"visible",children:c.children},f,0,null),g=$r(g,f,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Es(i,n.child,null,w),i.child.memoizedState=cu(w),i.memoizedState=lu,g);if((i.mode&1)===0)return Xo(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=ru(g,c,void 0),Xo(n,i,w,c)}if(I=(w&n.childLanes)!==0,Rn||I){if(c=en,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ui(n,f),li(c,n,f,-1))}return bu(),c=ru(Error(t(421))),Xo(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=N0.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,jn=ar(f.nextSibling),Bn=i,Ft=!0,ri=null,n!==null&&(Yn[$n++]=Di,Yn[$n++]=Ii,Yn[$n++]=Br,Di=n.id,Ii=n.overflow,Br=i),i=uu(i,c.children),i.flags|=4096,i)}function zf(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),jc(n.return,i,a)}function du(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Bf(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(yn(n,i,c.children,a),c=kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zf(n,a,i);else if(n.tag===19)zf(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Lt(kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&zo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),du(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&zo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}du(i,!0,a,null,g);break;case"together":du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function y0(n,i,a){switch(i.tag){case 3:Ff(i),ws();break;case 5:Jh(i);break;case 1:An(i.type)&&Co(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Lt(Uo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Of(n,i,a):(Lt(kt,kt.current&1),n=ki(n,i,a),n!==null?n.sibling:null);Lt(kt,kt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bf(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(kt,kt.current),c)break;return null;case 22:case 23:return i.lanes=0,Df(n,i,a)}return ki(n,i,a)}var jf,hu,Hf,Gf;jf=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hu=function(){},Hf=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Gr(xi.current);var g=null;switch(a){case"input":f=Ve(n,f),c=Ve(n,c),g=[];break;case"select":f=X({},f,{value:void 0}),c=X({},c,{value:void 0}),g=[];break;case"textarea":f=_e(n,f),c=_e(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bo)}it(a,c);var w;a=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var I=f[ne];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?g||(g=[]):(g=g||[]).push(ne,null));for(ne in c){var z=c[ne];if(I=f!=null?f[ne]:void 0,c.hasOwnProperty(ne)&&z!==I&&(z!=null||I!=null))if(ne==="style")if(I){for(w in I)!I.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&I[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(g||(g=[]),g.push(ne,a)),a=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(g=g||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Nt("scroll",n),g||I===z||(g=[])):(g=g||[]).push(ne,z))}a&&(g=g||[]).push("style",a);var ne=g;(i.updateQueue=ne)&&(i.flags|=4)}},Gf=function(n,i,a,c){a!==c&&(i.flags|=4)};function ka(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function S0(n,i,a){var c=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return An(i.type)&&Ro(),dn(i),null;case 3:return c=i.stateNode,As(),Dt(bn),Dt(cn),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Do(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(wu(ri),ri=null))),hu(n,i),dn(i),null;case 5:Wc(i);var f=Gr(Na.current);if(a=i.type,n!==null&&i.stateNode!=null)Hf(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=Gr(xi.current),Do(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[_i]=i,c[Aa]=g,n=(i.mode&1)!==0,a){case"dialog":Nt("cancel",c),Nt("close",c);break;case"iframe":case"object":case"embed":Nt("load",c);break;case"video":case"audio":for(f=0;f<Ea.length;f++)Nt(Ea[f],c);break;case"source":Nt("error",c);break;case"img":case"image":case"link":Nt("error",c),Nt("load",c);break;case"details":Nt("toggle",c);break;case"input":et(c,g),Nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Nt("invalid",c);break;case"textarea":ge(c,g),Nt("invalid",c)}it(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var I=g[w];w==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&To(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&To(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Nt("scroll",c)}switch(a){case"input":Je(c),st(c,g,!0);break;case"textarea":Je(c),ze(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=bo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[_i]=i,n[Aa]=c,jf(n,i,!1,!1),i.stateNode=n;e:{switch(w=_t(a,c),a){case"dialog":Nt("cancel",n),Nt("close",n),f=c;break;case"iframe":case"object":case"embed":Nt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ea.length;f++)Nt(Ea[f],n);f=c;break;case"source":Nt("error",n),f=c;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),f=c;break;case"details":Nt("toggle",n),f=c;break;case"input":et(n,c),f=Ve(n,c),Nt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=X({},c,{value:void 0}),Nt("invalid",n);break;case"textarea":ge(n,c),f=_e(n,c),Nt("invalid",n);break;default:f=c}it(a,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var z=I[g];g==="style"?We(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ot(n,z)):g==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&me(n,z):typeof z=="number"&&me(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Nt("scroll",n):z!=null&&R(n,g,z,w))}switch(a){case"input":Je(n),st(n,c,!1);break;case"textarea":Je(n),ze(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?ee(n,!!c.multiple,g,!1):c.defaultValue!=null&&ee(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)Gf(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gr(Na.current),Gr(xi.current),Do(i)){if(c=i.stateNode,a=i.memoizedProps,c[_i]=i,(g=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:To(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&To(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return dn(i),null;case 13:if(Dt(kt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),ws(),i.flags|=98560,g=!1;else if(g=Do(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[_i]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),g=!1}else ri!==null&&(wu(ri),ri=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(kt.current&1)!==0?$t===0&&($t=3):bu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return As(),hu(n,i),n===null&&Ta(i.stateNode.containerInfo),dn(i),null;case 10:return Bc(i.type._context),dn(i),null;case 17:return An(i.type)&&Ro(),dn(i),null;case 19:if(Dt(kt),g=i.memoizedState,g===null)return dn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)ka(g,!1);else{if($t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=zo(n),w!==null){for(i.flags|=128,ka(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Lt(kt,kt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Ne()>Ls&&(i.flags|=128,c=!0,ka(g,!1),i.lanes=4194304)}else{if(!c)if(n=zo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ft)return dn(i),null}else 2*Ne()-g.renderingStartTime>Ls&&a!==1073741824&&(i.flags|=128,c=!0,ka(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ne(),i.sibling=null,a=kt.current,Lt(kt,c?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return Tu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function M0(n,i){switch(Ic(i),i.tag){case 1:return An(i.type)&&Ro(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return As(),Dt(bn),Dt(cn),qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Wc(i),null;case 13:if(Dt(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Dt(kt),null;case 4:return As(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Yo=!1,hn=!1,w0=typeof WeakSet=="function"?WeakSet:Set,De=null;function Cs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(n,i,c)}else a.current=null}function fu(n,i,a){try{a()}catch(c){jt(n,i,c)}}var Vf=!1;function E0(n,i){if(Tc=po,n=Sh(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,I=-1,z=-1,ne=0,pe=0,ve=n,he=null;t:for(;;){for(var Le;ve!==a||f!==0&&ve.nodeType!==3||(I=w+f),ve!==g||c!==0&&ve.nodeType!==3||(z=w+c),ve.nodeType===3&&(w+=ve.nodeValue.length),(Le=ve.firstChild)!==null;)he=ve,ve=Le;for(;;){if(ve===n)break t;if(he===a&&++ne===f&&(I=w),he===g&&++pe===c&&(z=w),(Le=ve.nextSibling)!==null)break;ve=he,he=ve.parentNode}ve=Le}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:n,selectionRange:a},po=!1,De=i;De!==null;)if(i=De,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,De=n;else for(;De!==null;){i=De;try{var Ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ue!==null){var ke=Ue.memoizedProps,Vt=Ue.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?ke:si(i.type,ke),Vt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){jt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,De=n;break}De=i.return}return Ue=Vf,Vf=!1,Ue}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&fu(i,a,g)}f=f.next}while(f!==c)}}function $o(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wf(n){var i=n.alternate;i!==null&&(n.alternate=null,Wf(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Aa],delete i[Pc],delete i[a0],delete i[o0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xf(n){return n.tag===5||n.tag===3||n.tag===4}function qf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(n=n.child,n!==null))for(mu(n,i,a),n=n.sibling;n!==null;)mu(n,i,a),n=n.sibling}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}var rn=null,ai=!1;function hr(n,i,a){for(a=a.child;a!==null;)Yf(n,i,a),a=a.sibling}function Yf(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(En,a)}catch{}switch(a.tag){case 5:hn||Cs(a,i);case 6:var c=rn,f=ai;rn=null,hr(n,i,a),rn=c,ai=f,rn!==null&&(ai?(n=rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rn.removeChild(a.stateNode));break;case 18:rn!==null&&(ai?(n=rn,a=a.stateNode,n.nodeType===8?Cc(n.parentNode,a):n.nodeType===1&&Cc(n,a),ga(n)):Cc(rn,a.stateNode));break;case 4:c=rn,f=ai,rn=a.stateNode.containerInfo,ai=!0,hr(n,i,a),rn=c,ai=f;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&fu(a,i,w),f=f.next}while(f!==c)}hr(n,i,a);break;case 1:if(!hn&&(Cs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,i,I)}hr(n,i,a);break;case 21:hr(n,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,hr(n,i,a),hn=c):hr(n,i,a);break;default:hr(n,i,a)}}function $f(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new w0),i.forEach(function(c){var f=D0.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:rn=I.stateNode,ai=!1;break e;case 3:rn=I.stateNode.containerInfo,ai=!0;break e;case 4:rn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(rn===null)throw Error(t(160));Yf(g,w,f),rn=null,ai=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ne){jt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kf(i,n),i=i.sibling}function Kf(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),Si(n),c&4){try{Oa(3,n,n.return),$o(3,n)}catch(ke){jt(n,n.return,ke)}try{Oa(5,n,n.return)}catch(ke){jt(n,n.return,ke)}}break;case 1:oi(i,n),Si(n),c&512&&a!==null&&Cs(a,a.return);break;case 5:if(oi(i,n),Si(n),c&512&&a!==null&&Cs(a,a.return),n.flags&32){var f=n.stateNode;try{me(f,"")}catch(ke){jt(n,n.return,ke)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Ge(f,g),_t(I,w);var ne=_t(I,g);for(w=0;w<z.length;w+=2){var pe=z[w],ve=z[w+1];pe==="style"?We(f,ve):pe==="dangerouslySetInnerHTML"?ot(f,ve):pe==="children"?me(f,ve):R(f,pe,ve,ne)}switch(I){case"input":Ct(f,g);break;case"textarea":xe(f,g);break;case"select":var he=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Le=g.value;Le!=null?ee(f,!!g.multiple,Le,!1):he!==!!g.multiple&&(g.defaultValue!=null?ee(f,!!g.multiple,g.defaultValue,!0):ee(f,!!g.multiple,g.multiple?[]:"",!1))}f[Aa]=g}catch(ke){jt(n,n.return,ke)}}break;case 6:if(oi(i,n),Si(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(ke){jt(n,n.return,ke)}}break;case 3:if(oi(i,n),Si(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(ke){jt(n,n.return,ke)}break;case 4:oi(i,n),Si(n);break;case 13:oi(i,n),Si(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(xu=Ne())),c&4&&$f(n);break;case 22:if(pe=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(ne=hn)||pe,oi(i,n),hn=ne):oi(i,n),Si(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!pe&&(n.mode&1)!==0)for(De=n,pe=n.child;pe!==null;){for(ve=De=pe;De!==null;){switch(he=De,Le=he.child,he.tag){case 0:case 11:case 14:case 15:Oa(4,he,he.return);break;case 1:Cs(he,he.return);var Ue=he.stateNode;if(typeof Ue.componentWillUnmount=="function"){c=he,a=he.return;try{i=c,Ue.props=i.memoizedProps,Ue.state=i.memoizedState,Ue.componentWillUnmount()}catch(ke){jt(c,a,ke)}}break;case 5:Cs(he,he.return);break;case 22:if(he.memoizedState!==null){Jf(ve);continue}}Le!==null?(Le.return=he,De=Le):Jf(ve)}pe=pe.sibling}e:for(pe=null,ve=n;;){if(ve.tag===5){if(pe===null){pe=ve;try{f=ve.stateNode,ne?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ve.stateNode,z=ve.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=tt("display",w))}catch(ke){jt(n,n.return,ke)}}}else if(ve.tag===6){if(pe===null)try{ve.stateNode.nodeValue=ne?"":ve.memoizedProps}catch(ke){jt(n,n.return,ke)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;pe===ve&&(pe=null),ve=ve.return}pe===ve&&(pe=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:oi(i,n),Si(n),c&4&&$f(n);break;case 21:break;default:oi(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xf(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(me(f,""),c.flags&=-33);var g=qf(n);gu(n,g,f);break;case 3:case 4:var w=c.stateNode.containerInfo,I=qf(n);mu(n,I,w);break;default:throw Error(t(161))}}catch(z){jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function T0(n,i,a){De=n,Zf(n)}function Zf(n,i,a){for(var c=(n.mode&1)!==0;De!==null;){var f=De,g=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Yo;if(!w){var I=f.alternate,z=I!==null&&I.memoizedState!==null||hn;I=Yo;var ne=hn;if(Yo=w,(hn=z)&&!ne)for(De=f;De!==null;)w=De,z=w.child,w.tag===22&&w.memoizedState!==null?ep(f):z!==null?(z.return=w,De=z):ep(f);for(;g!==null;)De=g,Zf(g),g=g.sibling;De=f,Yo=I,hn=ne}Qf(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,De=g):Qf(n)}}function Qf(n){for(;De!==null;){var i=De;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||$o(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Qh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var pe=ne.memoizedState;if(pe!==null){var ve=pe.dehydrated;ve!==null&&ga(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&pu(i)}catch(he){jt(i,i.return,he)}}if(i===n){De=null;break}if(a=i.sibling,a!==null){a.return=i.return,De=a;break}De=i.return}}function Jf(n){for(;De!==null;){var i=De;if(i===n){De=null;break}var a=i.sibling;if(a!==null){a.return=i.return,De=a;break}De=i.return}}function ep(n){for(;De!==null;){var i=De;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(z){jt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){jt(i,f,z)}}var g=i.return;try{pu(i)}catch(z){jt(i,g,z)}break;case 5:var w=i.return;try{pu(i)}catch(z){jt(i,w,z)}}}catch(z){jt(i,i.return,z)}if(i===n){De=null;break}var I=i.sibling;if(I!==null){I.return=i.return,De=I;break}De=i.return}}var b0=Math.ceil,Ko=D.ReactCurrentDispatcher,vu=D.ReactCurrentOwner,Qn=D.ReactCurrentBatchConfig,xt=0,en=null,Wt=null,sn=0,Hn=0,Ps=or(0),$t=0,za=null,Wr=0,Zo=0,_u=0,Ba=null,Cn=null,xu=0,Ls=1/0,Oi=null,Qo=!1,yu=null,fr=null,Jo=!1,pr=null,el=0,ja=0,Su=null,tl=-1,nl=0;function Sn(){return(xt&6)!==0?Ne():tl!==-1?tl:tl=Ne()}function mr(n){return(n.mode&1)===0?1:(xt&2)!==0&&sn!==0?sn&-sn:c0.transition!==null?(nl===0&&(nl=uo()),nl):(n=At,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function li(n,i,a,c){if(50<ja)throw ja=0,Su=null,Error(t(185));da(n,a,c),((xt&2)===0||n!==en)&&(n===en&&((xt&2)===0&&(Zo|=a),$t===4&&gr(n,sn)),Pn(n,c),a===1&&xt===0&&(i.mode&1)===0&&(Ls=Ne()+500,Po&&cr()))}function Pn(n,i){var a=n.callbackNode;Tn(n,i);var c=qn(n,n===en?sn:0);if(c===0)a!==null&&Pe(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Pe(a),i===1)n.tag===0?l0(np.bind(null,n)):Bh(np.bind(null,n)),r0(function(){(xt&6)===0&&cr()}),a=null;else{switch(qd(c)){case 1:a=nt;break;case 4:a=rt;break;case 16:a=Pt;break;case 536870912:a=Gt;break;default:a=Pt}a=up(a,tp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tp(n,i){if(tl=-1,nl=0,(xt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=qn(n,n===en?sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=il(n,c);else{i=c;var f=xt;xt|=2;var g=rp();(en!==n||sn!==i)&&(Oi=null,Ls=Ne()+500,qr(n,i));do try{C0();break}catch(I){ip(n,I)}while(!0);zc(),Ko.current=g,xt=f,Wt!==null?i=0:(en=null,sn=0,i=$t)}if(i!==0){if(i===2&&(f=kr(n),f!==0&&(c=f,i=Mu(n,f))),i===1)throw a=za,qr(n,0),gr(n,c),Pn(n,Ne()),a;if(i===6)gr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!A0(f)&&(i=il(n,c),i===2&&(g=kr(n),g!==0&&(c=g,i=Mu(n,g))),i===1))throw a=za,qr(n,0),gr(n,c),Pn(n,Ne()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Cn,Oi);break;case 3:if(gr(n,c),(c&130023424)===c&&(i=xu+500-Ne(),10<i)){if(qn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Sn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Rc(Yr.bind(null,n,Cn,Oi),i);break}Yr(n,Cn,Oi);break;case 4:if(gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-xn(c);g=1<<w,w=i[w],w>f&&(f=w),c&=~g}if(c=f,c=Ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*b0(c/1960))-c,10<c){n.timeoutHandle=Rc(Yr.bind(null,n,Cn,Oi),c);break}Yr(n,Cn,Oi);break;case 5:Yr(n,Cn,Oi);break;default:throw Error(t(329))}}}return Pn(n,Ne()),n.callbackNode===a?tp.bind(null,n):null}function Mu(n,i){var a=Ba;return n.current.memoizedState.isDehydrated&&(qr(n,i).flags|=256),n=il(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&wu(i)),n}function wu(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function A0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!ii(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~_u,i&=~Zo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-xn(i),c=1<<a;n[a]=-1,i&=~c}}function np(n){if((xt&6)!==0)throw Error(t(327));Ns();var i=qn(n,0);if((i&1)===0)return Pn(n,Ne()),null;var a=il(n,i);if(n.tag!==0&&a===2){var c=kr(n);c!==0&&(i=c,a=Mu(n,c))}if(a===1)throw a=za,qr(n,0),gr(n,i),Pn(n,Ne()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Cn,Oi),Pn(n,Ne()),null}function Eu(n,i){var a=xt;xt|=1;try{return n(i)}finally{xt=a,xt===0&&(Ls=Ne()+500,Po&&cr())}}function Xr(n){pr!==null&&pr.tag===0&&(xt&6)===0&&Ns();var i=xt;xt|=1;var a=Qn.transition,c=At;try{if(Qn.transition=null,At=1,n)return n()}finally{At=c,Qn.transition=a,xt=i,(xt&6)===0&&cr()}}function Tu(){Hn=Ps.current,Dt(Ps)}function qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,i0(a)),Wt!==null)for(a=Wt.return;a!==null;){var c=a;switch(Ic(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ro();break;case 3:As(),Dt(bn),Dt(cn),qc();break;case 5:Wc(c);break;case 4:As();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:Bc(c.type._context);break;case 22:case 23:Tu()}a=a.return}if(en=n,Wt=n=vr(n.current,null),sn=Hn=i,$t=0,za=null,_u=Zo=Wr=0,Cn=Ba=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,c.next=w}a.pending=c}Hr=null}return n}function ip(n,i){do{var a=Wt;try{if(zc(),Bo.current=Vo,jo){for(var c=Ot.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}jo=!1}if(Vr=0,Jt=Yt=Ot=null,Da=!1,Ia=0,vu.current=null,a===null||a.return===null){$t=1,za=i,Wt=null;break}e:{var g=n,w=a.return,I=a,z=i;if(i=sn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,pe=I,ve=pe.tag;if((pe.mode&1)===0&&(ve===0||ve===11||ve===15)){var he=pe.alternate;he?(pe.updateQueue=he.updateQueue,pe.memoizedState=he.memoizedState,pe.lanes=he.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Le=Rf(w);if(Le!==null){Le.flags&=-257,Cf(Le,w,I,g,i),Le.mode&1&&Af(g,ne,i),i=Le,z=ne;var Ue=i.updateQueue;if(Ue===null){var ke=new Set;ke.add(z),i.updateQueue=ke}else Ue.add(z);break e}else{if((i&1)===0){Af(g,ne,i),bu();break e}z=Error(t(426))}}else if(Ft&&I.mode&1){var Vt=Rf(w);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Cf(Vt,w,I,g,i),kc(Rs(z,I));break e}}g=z=Rs(z,I),$t!==4&&($t=2),Ba===null?Ba=[g]:Ba.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=Tf(g,z,i);Zh(g,$);break e;case 1:I=z;var H=g.type,J=g.stateNode;if((g.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(fr===null||!fr.has(J)))){g.flags|=65536,i&=-i,g.lanes|=i;var Me=bf(g,I,i);Zh(g,Me);break e}}g=g.return}while(g!==null)}ap(a)}catch(Be){i=Be,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function rp(){var n=Ko.current;return Ko.current=Vo,n===null?Vo:n}function bu(){($t===0||$t===3||$t===2)&&($t=4),en===null||(Wr&268435455)===0&&(Zo&268435455)===0||gr(en,sn)}function il(n,i){var a=xt;xt|=2;var c=rp();(en!==n||sn!==i)&&(Oi=null,qr(n,i));do try{R0();break}catch(f){ip(n,f)}while(!0);if(zc(),xt=a,Ko.current=c,Wt!==null)throw Error(t(261));return en=null,sn=0,$t}function R0(){for(;Wt!==null;)sp(Wt)}function C0(){for(;Wt!==null&&!He();)sp(Wt)}function sp(n){var i=cp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?ap(n):Wt=i,vu.current=null}function ap(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=S0(a,i,Hn),a!==null){Wt=a;return}}else{if(a=M0(a,i),a!==null){a.flags&=32767,Wt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$t=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=n}while(i!==null);$t===0&&($t=5)}function Yr(n,i,a){var c=At,f=Qn.transition;try{Qn.transition=null,At=1,P0(n,i,a,c)}finally{Qn.transition=f,At=c}return null}function P0(n,i,a,c){do Ns();while(pr!==null);if((xt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(uv(n,g),n===en&&(Wt=en=null,sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Jo||(Jo=!0,up(Pt,function(){return Ns(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var w=At;At=1;var I=xt;xt|=4,vu.current=null,E0(n,a),Kf(a,n),Kv(bc),po=!!Tc,bc=Tc=null,n.current=a,T0(a),Ke(),xt=I,At=w,Qn.transition=g}else n.current=a;if(Jo&&(Jo=!1,pr=n,el=f),g=n.pendingLanes,g===0&&(fr=null),ut(a.stateNode),Pn(n,Ne()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Qo)throw Qo=!1,n=yu,yu=null,n;return(el&1)!==0&&n.tag!==0&&Ns(),g=n.pendingLanes,(g&1)!==0?n===Su?ja++:(ja=0,Su=n):ja=0,cr(),null}function Ns(){if(pr!==null){var n=qd(el),i=Qn.transition,a=At;try{if(Qn.transition=null,At=16>n?16:n,pr===null)var c=!1;else{if(n=pr,pr=null,el=0,(xt&6)!==0)throw Error(t(331));var f=xt;for(xt|=4,De=n.current;De!==null;){var g=De,w=g.child;if((De.flags&16)!==0){var I=g.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ne=I[z];for(De=ne;De!==null;){var pe=De;switch(pe.tag){case 0:case 11:case 15:Oa(8,pe,g)}var ve=pe.child;if(ve!==null)ve.return=pe,De=ve;else for(;De!==null;){pe=De;var he=pe.sibling,Le=pe.return;if(Wf(pe),pe===ne){De=null;break}if(he!==null){he.return=Le,De=he;break}De=Le}}}var Ue=g.alternate;if(Ue!==null){var ke=Ue.child;if(ke!==null){Ue.child=null;do{var Vt=ke.sibling;ke.sibling=null,ke=Vt}while(ke!==null)}}De=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,De=w;else e:for(;De!==null;){if(g=De,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,De=$;break e}De=g.return}}var H=n.current;for(De=H;De!==null;){w=De;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,De=J;else e:for(w=H;De!==null;){if(I=De,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:$o(9,I)}}catch(Be){jt(I,I.return,Be)}if(I===w){De=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,De=Me;break e}De=I.return}}if(xt=f,cr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(En,n)}catch{}c=!0}return c}finally{At=a,Qn.transition=i}}return!1}function op(n,i,a){i=Rs(a,i),i=Tf(n,i,1),n=dr(n,i,1),i=Sn(),n!==null&&(da(n,1,i),Pn(n,i))}function jt(n,i,a){if(n.tag===3)op(n,n,a);else for(;i!==null;){if(i.tag===3){op(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=Rs(a,n),n=bf(i,n,1),i=dr(i,n,1),n=Sn(),i!==null&&(da(i,1,n),Pn(i,n));break}}i=i.return}}function L0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Sn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(sn&a)===a&&($t===4||$t===3&&(sn&130023424)===sn&&500>Ne()-xu?qr(n,0):_u|=a),Pn(n,i)}function lp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var a=Sn();n=Ui(n,i),n!==null&&(da(n,i,a),Pn(n,a))}function N0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lp(n,a)}function D0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lp(n,a)}var cp;cp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Rn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,y0(n,i,a);Rn=(n.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&jh(i,No,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;qo(n,i),n=i.pendingProps;var f=ys(i,cn.current);bs(i,a),f=Kc(null,i,c,n,f,a);var g=Zc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(c)?(g=!0,Co(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gc(i),f.updater=Wo,i.stateNode=f,f._reactInternals=i,iu(i,c,n,a),i=ou(null,i,c,!0,g,a)):(i.tag=0,Ft&&g&&Dc(i),yn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(qo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=U0(c),n=si(c,n),f){case 0:i=au(null,i,c,n,a);break e;case 1:i=Uf(null,i,c,n,a);break e;case 11:i=Pf(null,i,c,n,a);break e;case 14:i=Lf(null,i,c,si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),au(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Uf(n,i,c,f,a);case 3:e:{if(Ff(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Kh(n,i),Oo(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Rs(Error(t(423)),i),i=kf(n,i,c,a,f);break e}else if(c!==f){f=Rs(Error(t(424)),i),i=kf(n,i,c,a,f);break e}else for(jn=ar(i.stateNode.containerInfo.firstChild),Bn=i,Ft=!0,ri=null,a=Yh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===f){i=ki(n,i,a);break e}yn(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&Fc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,w=f.children,Ac(c,f)?w=null:g!==null&&Ac(c,g)&&(i.flags|=32),If(n,i),yn(n,i,w,a),i.child;case 6:return n===null&&Fc(i),null;case 13:return Of(n,i,a);case 4:return Vc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Es(i,null,c,a):yn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),Pf(n,i,c,f,a);case 7:return yn(n,i,i.pendingProps,a),i.child;case 8:return yn(n,i,i.pendingProps.children,a),i.child;case 12:return yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,w=f.value,Lt(Uo,c._currentValue),c._currentValue=w,g!==null)if(ii(g.value,w)){if(g.children===f.children&&!bn.current){i=ki(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){w=g.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(g.tag===1){z=Fi(-1,a&-a),z.tag=2;var ne=g.updateQueue;if(ne!==null){ne=ne.shared;var pe=ne.pending;pe===null?z.next=z:(z.next=pe.next,pe.next=z),ne.pending=z}}g.lanes|=a,z=g.alternate,z!==null&&(z.lanes|=a),jc(g.return,a,i),I.lanes|=a;break}z=z.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),jc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}yn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,bs(i,a),f=Kn(f),c=c(f),i.flags|=1,yn(n,i,c,a),i.child;case 14:return c=i.type,f=si(c,i.pendingProps),f=si(c.type,f),Lf(n,i,c,f,a);case 15:return Nf(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:si(c,f),qo(n,i),i.tag=1,An(c)?(n=!0,Co(i)):n=!1,bs(i,a),wf(i,c,f),iu(i,c,f,a),ou(null,i,c,!0,n,a);case 19:return Bf(n,i,a);case 22:return Df(n,i,a)}throw Error(t(156,i.tag))};function up(n,i){return ie(n,i)}function I0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,c){return new I0(n,i,a,c)}function Au(n){return n=n.prototype,!(!n||!n.isReactComponent)}function U0(n){if(typeof n=="function")return Au(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===re)return 14}return 2}function vr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function rl(n,i,a,c,f,g){var w=2;if(c=n,typeof n=="function")Au(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case k:return $r(a.children,f,g,i);case le:w=8,f|=8;break;case de:return n=Jn(12,a,i,f|2),n.elementType=de,n.lanes=g,n;case ue:return n=Jn(13,a,i,f),n.elementType=ue,n.lanes=g,n;case j:return n=Jn(19,a,i,f),n.elementType=j,n.lanes=g,n;case te:return sl(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:w=10;break e;case F:w=9;break e;case ce:w=11;break e;case re:w=14;break e;case W:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function $r(n,i,a,c){return n=Jn(7,n,c,i),n.lanes=a,n}function sl(n,i,a,c){return n=Jn(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function Ru(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Cu(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function F0(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Pu(n,i,a,c,f,g,w,I,z){return n=new F0(n,i,a,I,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Jn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(g),n}function k0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function dp(n){if(!n)return lr;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return Oh(n,a,i)}return i}function hp(n,i,a,c,f,g,w,I,z){return n=Pu(a,c,!0,n,f,g,w,I,z),n.context=dp(null),a=n.current,c=Sn(),f=mr(a),g=Fi(c,f),g.callback=i??null,dr(a,g,f),n.current.lanes=f,da(n,f,c),Pn(n,c),n}function al(n,i,a,c){var f=i.current,g=Sn(),w=mr(f);return a=dp(a),i.context===null?i.context=a:i.pendingContext=a,i=Fi(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=dr(f,i,w),n!==null&&(li(n,f,w,g),ko(n,f,w)),w}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Lu(n,i){fp(n,i),(n=n.alternate)&&fp(n,i)}function O0(){return null}var pp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nu(n){this._internalRoot=n}ll.prototype.render=Nu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));al(n,i,null,null)},ll.prototype.unmount=Nu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xr(function(){al(null,n,null,null)}),i[Li]=null}};function ll(n){this._internalRoot=n}ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=Kd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ir.length&&i!==0&&i<ir[a].priority;a++);ir.splice(a,0,n),a===0&&Jd(n)}};function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mp(){}function z0(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ne=ol(w);g.call(ne)}}var w=hp(i,c,n,0,null,!1,!1,"",mp);return n._reactRootContainer=w,n[Li]=w.current,Ta(n.nodeType===8?n.parentNode:n),Xr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ne=ol(z);I.call(ne)}}var z=Pu(n,0,!1,null,null,!1,!1,"",mp);return n._reactRootContainer=z,n[Li]=z.current,Ta(n.nodeType===8?n.parentNode:n),Xr(function(){al(i,z,a,c)}),z}function ul(n,i,a,c,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var I=f;f=function(){var z=ol(w);I.call(z)}}al(i,w,n,f)}else w=z0(a,i,n,f,c);return ol(w)}Yd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Bt(i.pendingLanes);a!==0&&(ic(i,a|1),Pn(i,Ne()),(xt&6)===0&&(Ls=Ne()+500,cr()))}break;case 13:Xr(function(){var c=Ui(n,1);if(c!==null){var f=Sn();li(c,n,1,f)}}),Lu(n,1)}},rc=function(n){if(n.tag===13){var i=Ui(n,134217728);if(i!==null){var a=Sn();li(i,n,134217728,a)}Lu(n,134217728)}},$d=function(n){if(n.tag===13){var i=mr(n),a=Ui(n,i);if(a!==null){var c=Sn();li(a,n,i,c)}Lu(n,i)}},Kd=function(){return At},Zd=function(n,i){var a=At;try{return At=n,i()}finally{At=a}},Et=function(n,i,a){switch(i){case"input":if(Ct(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ao(c);if(!f)throw Error(t(90));Z(c),Ct(c,f)}}}break;case"textarea":xe(n,a);break;case"select":i=a.value,i!=null&&ee(n,!!a.multiple,i,!1)}},yt=Eu,bt=Xr;var B0={usingClientEntryPoint:!1,Events:[Ra,_s,Ao,Oe,Xe,Eu]},Ha={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=se(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||O0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{En=dl.inject(j0),gt=dl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0,Ln.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(i))throw Error(t(200));return k0(n,i,null,a)},Ln.createRoot=function(n,i){if(!Du(n))throw Error(t(299));var a=!1,c="",f=pp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Pu(n,1,!1,null,null,a,!1,c,f),n[Li]=i.current,Ta(n.nodeType===8?n.parentNode:n),new Nu(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=se(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return Xr(n)},Ln.hydrate=function(n,i,a){if(!cl(i))throw Error(t(200));return ul(null,n,i,!0,a)},Ln.hydrateRoot=function(n,i,a){if(!Du(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",w=pp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=hp(i,null,n,1,a??null,f,!1,g,w),n[Li]=i.current,Ta(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ll(i)},Ln.render=function(n,i,a){if(!cl(i))throw Error(t(200));return ul(null,n,i,!1,a)},Ln.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(Xr(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1},Ln.unstable_batchedUpdates=Eu,Ln.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!cl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,a,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var wp;function $0(){if(wp)return Fu.exports;wp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fu.exports=Y0(),Fu.exports}var Ep;function K0(){if(Ep)return hl;Ep=1;var r=$0();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var Z0=K0();const Q0=pg(Z0),zd=Re.createContext({path:"/",navigate:()=>{}});function J0({children:r}){const[e,t]=Re.useState(()=>window.location.pathname);Re.useEffect(()=>{const o=()=>t(window.location.pathname);return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]);const s=Re.useCallback((o,{replace:l=!1}={})=>{o!==window.location.pathname&&(window.history[l?"replaceState":"pushState"]({},"",o),t(o),window.scrollTo(0,0))},[]);return u.jsx(zd.Provider,{value:{path:e,navigate:s},children:r})}function e_(){return Re.useContext(zd)}function t_(){return Re.useContext(zd).path}function $l({to:r,children:e,onClick:t,...s}){const{navigate:o}=e_(),l=r&&r.startsWith("/")&&!r.startsWith("//"),h=d=>{t==null||t(d),l&&(d.defaultPrevented||d.button!==0||d.metaKey||d.ctrlKey||d.shiftKey||d.altKey||(d.preventDefault(),o(r)))};return u.jsx("a",{href:r,onClick:h,...s,children:e})}const br="ykshetty.design@gmail.com",zu={name:"Yogesh Shetty",logo:"/logos/header_logo.svg"},n_={lines:["Senior Product Designer.","I practice systems thinking —","looking past the apparent problem","to the root cause, then designing","the simplest fix the system","already supports."]},i_=[{label:"Work",href:"#work"},{label:"Practice",href:"#practice"},{label:"Instruments",href:"#instruments"},{label:"About",href:"#about"}],Va={askLabel:"What the client asked for",brief:"Make the button bigger.",replyLabel:"What the system revealed →",replyMain:"Can't tap with gloves on — so I used the scanner they had.",replyFoot:"Warehouse sorting — solved the system, not the screen."},r_=[{id:"swiftsort",index:"01",meta:"Posten Bring · 2026",metaLong:"01 · Posten Bring · Oslo · 2026 · SwiftSort",href:"/case-studies/swiftsort",brief:"Make the button bigger.",card:"Sorting sped up ~40% — decisions moved from workers' memory to the moment of scan.",cover:"/case-studies/swiftsort/images/cover.jpg",insight:"Delete touch — the scanner's already on their hand.",problem:"Sorting decisions lived in workers’ heads, so every new hire needed weeks to get up to speed.",solution:"Replaced memory with real-time, system-guided sorting — zero touch, no new hardware.",body:"Sorting lived in the veterans' memory and a mounted tablet died in trials — hands full, gloves on. I printed a static QR at every drop-off and let the ProGlove workers already wore do the reading. Zero new hardware, zero training.",stats:[{value:"~40%",label:"Faster sort · pilot"},{value:"wks→days",label:"Onboarding"}],mailto:`mailto:${br}?subject=SwiftSort`,seed:{x:.04,y:.05,r:-2.5}},{id:"cards",index:"02",meta:"ABN AMRO · 2024",metaLong:"02 · ABN AMRO · Neuflize OBC · 2024",href:"/case-studies/cards",brief:"Wall off the whole flow.",card:"A 2-hour banking task cut to 60 seconds of self-service.",cover:null,insight:"Gate only the destructive action.",problem:"Clients waited two hours on the phone just to block a lost card, and compliance wanted a login on everything.",solution:"Added authentication only where the real risk was — browsing stays free, blocking takes seconds.",body:"Private-bank clients waited two hours on the phone just to block a card, and compliance wanted authentication over everything. I authenticated at the point of commitment instead — browsing stays free, and risk signed off in a single round.",stats:[{value:"2h→60s",label:"Resolution time"},{value:"~90%",label:"Calls deflected"}],mailto:`mailto:${br}?subject=Self-service%20cards`,seed:{x:.96,y:.33,r:2}},{id:"postoffice",index:"03",meta:"Posten Bring · 2025",metaLong:"03 · Posten Bring · Oslo · 2025",href:"/case-studies/postoffice",brief:"Rebuild it screen by screen.",card:"Onboarding 65% faster — a legacy terminal re-architected as a cloud portal.",cover:null,insight:"Map the system first, then design the shared frame.",problem:"A legacy desktop terminal chained managers to one location and took weeks to learn.",solution:"Mapped the system first, then built one shared portal — now reused across the whole Nordic suite.",body:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite.",stats:[{value:"65%",label:"Faster onboarding"},{value:"1 system",label:"Reused across suite"}],mailto:`mailto:${br}?subject=Post-office%20portal`,seed:{x:.02,y:.61,r:1.6}},{id:"postbox",index:"04",meta:"ABN AMRO · multi",metaLong:"04 · ABN AMRO · iOS · Android · Web",href:"/case-studies/postbox",brief:"Sort by document type.",card:"A complex document archive made self-service — across all three platforms.",cover:null,insight:"Organise by life event — the client's mental model.",problem:"Clients needed their banker to find every document, because files were sorted the bank’s way, not theirs.",solution:"Reorganised around life events — the way clients actually think — so they self-serve.",body:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job.",stats:[{value:"3 platforms",label:"iOS · Android · Web"},{value:"Self-serve",label:"Was banker-led"}],mailto:`mailto:${br}?subject=Postbox`,seed:{x:.98,y:.89,r:-1.6}}],s_=[{id:"alignment",num:"01 · THE SEED",title:"Alignment",callout:{label:"◎ Find the overlap",text:"The business wants a metric to move; users want a task to disappear. I use research and data to find the one change that does both — not a compromise between them."},human:["User research","Read the data","Find the real need"],ai:["Cluster the notes","Surface patterns"],desc:"A hand drops the signal. I read the soil — business goals, user pain, the data underneath — and plant."},{id:"foundation",num:"02 · THE ROOTS",title:"Foundation",callout:{label:"↺ Find the real problem",text:"Sometimes a brief already comes with a solution attached. I hand it back and ask what problem we're really solving."},human:["Problem statement","In / out of scope","Feasibility check"],ai:["Edge-case list","Flag tech limits"],desc:"Roots anchor down, a first stem breaks ground. The invisible structure that holds everything up."},{id:"explore",num:"03 · THE SPROUT",title:"Explore",callout:{label:"⚑ Try many, keep one",text:"I sketch several rough directions before I commit to one — then prototype it and put it in front of real users, while it's still cheap to be wrong."},human:["Explore directions","Prototype","Usability testing"],ai:["Mockup variants","First-draft copy"],desc:"First shoots test the air in every direction. The strongest one keeps growing."},{id:"scale",num:"04 · THE CANOPY",title:"Scale",callout:{label:"⧉ Build it once",text:"I turn each decision into a design system, so the team can build the rest without me in the room."},human:["Craft & visual","Design system","Component review"],ai:["Token propagation","Doc automation"],desc:"Branches spread and repeat the same pattern. The system carries it across every limb."},{id:"loop",num:"05 · THE HARVEST",title:"Loop",callout:{label:"⟳ Learn from real use",text:"Once it's live, I stop guessing and measure. If the numbers didn't move, I say so — and that honesty writes the next brief."},human:["Track metrics","Watch real sessions","Feed the next brief"],ai:["Error & QA sweep","Analytics → insight"],desc:"Fruit ripens and falls, dissolving back into soil — feeding the next brief."}],a_=[{id:"tokenmap",logo:"/logos/tokenmap.svg",alt:"Token Map",logoStyle:{height:20,width:126},problem:"Token migrations were manual, slow and error-prone across files.",result:"Migrations that took a day now run in minutes.",href:"https://www.figma.com/community/plugin/1614997660400970378/token-map"},{id:"intent",logo:"/logos/intent.svg",alt:"Intent",logoStyle:{height:26,width:82},problem:"Detached components quietly broke consistency across the system.",result:"Detached instances detected and healed automatically.",href:"https://www.figma.com/community/plugin/1610840315625561207/intent"},{id:"focal",logo:"/logos/focalai.svg",alt:"Focal AI",logoStyle:{height:18,width:99},problem:"Attention and visual hierarchy were argued, not measured.",result:"Predicts where the eye lands in ~1 second.",href:"https://www.figma.com/community/plugin/1651583678533726308/focal-ai"}],Mi={quoteLead:`"Good enough isn't the bar. If the design doesn't `,quoteAccent:"beat the alternative",quoteTail:`, it isn't finished."`,paragraphs:["Thirteen years embedded inside regulated enterprises across India, the Netherlands and Norway. The ambiguous, unscoped brief tends to land on my desk — I turn it into a system the team can build on, keeping engineers and stakeholders in one conversation so what ships is what everyone agreed to.","Off the clock I paint watercolours — no undo, so you commit. Same instinct I bring to a room full of stakeholders."],portrait:"/assets/portrait.jpg",facts:[{label:"Status",value:"EU citizen (NL)",accent:"teal"},{label:"Open to",value:"Senior · Lead"},{label:"Off-hours",value:"Badminton · biryani"}],resume:"assets/Yogesh-Shetty-Resume.pdf",careerLine:"HCLTech '12 → TCS '15 → Qualcomm · J&J · JPMorgan · ABN AMRO → ",careerHighlight:"Posten Bring '25"},Md=[{id:"t1",quote:"Worked on a variety of topics and always delivered great designs. A pleasure to work with — always seeking the best solution.",initials:"JH",name:"Jennie Huijboom",title:"Head of Bankwide UX · ABN AMRO",rot:-2.4},{id:"t2",quote:"I've always been able to trust him with new topics, knowing he'll fully commit and deliver high-quality designs.",initials:"FD",name:"Femke van Drooge",title:"Lead Design Strategy · ABN AMRO",rot:1.9},{id:"t3",quote:"His guidance was invaluable — balancing technical and design aspects while collaborating with stakeholders.",initials:"RV",name:"Rutger Vos",title:"Product Owner · Private Banking",rot:-1.3},{id:"t4",quote:"An exceptional mentor. Approachability and investing time in others sets him apart.",initials:"NK",name:"Nikita Jaiswal",title:"UX/UI Designer",rot:2.6},{id:"t5",quote:"One of the most talented and dependable designers I've collaborated with — calm, responsible, solution-focused.",initials:"DT",name:"Douglas Tarasconi",title:"UX Designer · ABN AMRO",rot:-2},{id:"t6",quote:"Takes complex problems and distills them into simple, elegant design solutions — an incredible eye for detail.",initials:"NC",name:"Niovi D. Chatzipoufli",title:"Senior UX / Product Designer",rot:1.4}],o_="https://linkedin.com/in/ykshetty/details/recommendations/",Ks={heading:"Got something to figure out?",headingAccent:"Let's find it.",links:[{label:br,href:`mailto:${br}`,variant:"primary"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/ykshetty/",external:!0},{label:"Medium ↗",href:"https://medium.com/@ykshetty",external:!0},{label:"Dribbble ↗",href:"https://dribbble.com/yogik4all",external:!0},{label:"Résumé ↓",href:"uploads/assets-1782636208625.pdf",download:!0}],copyright:"© 2026 · Yogesh Shetty · v48"},wd="ys-theme",mg=Re.createContext({theme:"light",setTheme:()=>{},toggleTheme:()=>{}});function l_(){if(typeof window>"u")return"light";try{const r=window.localStorage.getItem(wd);if(r==="light"||r==="dark")return r}catch{}return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function c_({children:r}){const[e,t]=Re.useState(l_);Re.useEffect(()=>{const h=document.documentElement;h.setAttribute("data-theme",e),h.style.colorScheme=e;try{window.localStorage.setItem(wd,e)}catch{}},[e]),Re.useEffect(()=>{if(!window.matchMedia)return;const h=window.matchMedia("(prefers-color-scheme: dark)"),d=p=>{let m=!1;try{m=!!window.localStorage.getItem(wd)}catch{m=!1}m||t(p.matches?"dark":"light")};return h.addEventListener("change",d),()=>h.removeEventListener("change",d)},[]);const s=Re.useCallback(h=>{t(d=>h==="light"||h==="dark"?h:d)},[]),o=Re.useCallback(()=>{t(h=>h==="dark"?"light":"dark")},[]),l=Re.useMemo(()=>({theme:e,setTheme:s,toggleTheme:o}),[e,s,o]);return u.jsx(mg.Provider,{value:l,children:r})}function gg(){return Re.useContext(mg)}const Tp={fontFamily:"var(--font-mono)",fontSize:10,fontWeight:400,letterSpacing:"0.12em",textTransform:"uppercase"};function vg({subpage:r=!1}){const[e,t]=Re.useState(!1),{theme:s,toggleTheme:o}=gg(),l=Re.useCallback(()=>t(y=>!y),[]),h=Re.useCallback(()=>t(!1),[]),[d,p]=Re.useState(!1);Re.useEffect(()=>{if(r)return;let y=window.scrollY,M=null;const E=()=>{M=null;const x=window.scrollY,S=x-y;x<80?p(!1):S>4?p(!0):S<-4&&p(!1),y=x},b=()=>{M==null&&(M=requestAnimationFrame(E))};return window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),M&&cancelAnimationFrame(M)}},[r]);const m=y=>r?`/${y}`:y,v=u.jsxs(u.Fragment,{children:[u.jsx("img",{src:zu.logo,alt:zu.name,className:"theme-logo",style:{height:22,width:22,display:"block"}}),u.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:14,fontWeight:700,letterSpacing:"0.02em",color:"var(--text-primary)"},children:zu.name})]}),_={display:"flex",alignItems:"center",gap:10,height:20};return u.jsx("header",{className:e?"mobile-menu-open":"",style:{position:"sticky",top:0,zIndex:60,background:"var(--nav-bg)",backdropFilter:"blur(16px) saturate(180%)",WebkitBackdropFilter:"blur(16px) saturate(180%)",borderBottom:"1px solid var(--border-subtle)",transform:d&&!e?"translateY(-100%)":"translateY(0)",transition:"transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 clamp(22px,5vw,44px)",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",gap:14},children:r?u.jsx($l,{to:"/",style:_,children:v}):u.jsx("a",{href:"#top",style:_,children:v})}),u.jsx("button",{className:"hamburger",onClick:l,"aria-label":"Menu","aria-expanded":e,style:{display:"none",alignItems:"center",justifyContent:"center",width:36,height:36,background:"none",border:"1px solid var(--border-input)",borderRadius:8,cursor:"pointer",color:"var(--text-primary)",fontSize:15,padding:0},children:"☰"}),u.jsxs("nav",{className:"nav-links",style:{display:"flex",alignItems:"center",gap:28},children:[i_.map(y=>u.jsx("a",{href:m(y.href),onClick:h,className:"nav-link",style:Tp,children:y.label},y.href)),u.jsx("a",{href:`mailto:${br}`,onClick:h,className:"cta-pill",style:{...Tp,fontWeight:500,letterSpacing:"0.06em",padding:"8px 18px",borderRadius:100},children:"Get in touch"}),u.jsx("button",{type:"button",onClick:o,title:s==="dark"?"Switch to light mode":"Switch to dark mode","aria-label":s==="dark"?"Switch to light mode":"Switch to dark mode",className:"icon-btn",style:{width:32,height:32,borderRadius:"50%",border:"1px solid var(--border-input)",display:"grid",placeItems:"center",color:"var(--text-primary)",background:"none",cursor:"pointer",flex:"none",padding:0},children:s==="dark"?u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[u.jsx("circle",{cx:"12",cy:"12",r:"4.2"}),u.jsx("path",{d:"M12 2v2.2M12 19.8V22M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2.2M19.8 12H22M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"})]}):u.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:u.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"})})})]})]})})}const u_=[[1,400],[2,1700],[3,2900],[4,4400],[5,5600]];function d_(){const[r,e]=Re.useState(0),t=Re.useRef([]),s=Re.useRef(null),o=Re.useCallback(()=>{t.current.forEach(h=>clearTimeout(h)),t.current=[],s.current&&(cancelAnimationFrame(s.current),s.current=null)},[]),l=Re.useCallback(()=>{o(),e(0),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>{u_.forEach(([h,d])=>{t.current.push(setTimeout(()=>e(h),d))})})})},[o]);return Re.useEffect(()=>(l(),o),[l,o]),{step:r,replay:l}}function h_(r,e,t){Re.useEffect(()=>{const s=r.current,o=e.current,l=o?Array.from(o.querySelectorAll("[data-drift]")):[],h=L=>Math.max(0,Math.min(1,L)),d=()=>{const L=window.innerHeight||1,R=h(window.scrollY/L),D=1-R*.28,V=1-R*.65;if(s&&(s.style.transform=`translateX(-50%) scale(${D.toFixed(3)})`,s.style.opacity=V.toFixed(3)),t&&t.current){const O=h(window.scrollY/(L*.15));t.current.style.opacity=(1-O).toFixed(3)}};let p=1,m=1,v=null,_=!1,y=window.scrollY,M=performance.now();const E=()=>{p+=(m-p)*.12,m+=(1-m)*.04,l.forEach(L=>{L.getAnimations&&L.getAnimations().forEach(R=>{R.playbackRate=p})}),Math.abs(p-1)>.02||Math.abs(m-1)>.02?v=requestAnimationFrame(E):(p=1,m=1,l.forEach(L=>{L.getAnimations&&L.getAnimations().forEach(R=>{R.playbackRate=1})}),_=!1)},b=()=>{_||!l.length||(_=!0,v=requestAnimationFrame(E))},x=()=>{const L=performance.now(),R=Math.abs(window.scrollY-y),D=Math.max(16,L-M),V=R/D;m=Math.min(9,1+V*20),y=window.scrollY,M=L,b()},S=()=>{d(),x()};return window.addEventListener("scroll",S,{passive:!0}),d(),()=>{window.removeEventListener("scroll",S),v&&cancelAnimationFrame(v)}},[r,e,t])}const f_=[{w:"34vw",maxW:420,top:"16%",left:"24%",color:"var(--blob-1)",blur:70,anim:"drift1 9s ease-in-out infinite"},{w:"26vw",maxW:340,top:"34%",right:"22%",color:"var(--blob-2)",blur:70,anim:"drift2 11s ease-in-out infinite"},{w:"36vw",maxW:440,bottom:"12%",left:"32%",color:"var(--blob-3)",blur:90,anim:"drift3 13s ease-in-out infinite"},{w:"22vw",maxW:280,top:"26%",right:"34%",color:"var(--blob-4)",blur:80,anim:"drift4 10s ease-in-out infinite"}],bp=()=>u.jsxs("div",{className:"typing-dots",style:{display:"flex",gap:5},children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]});function p_(){const{step:r}=d_(),e=Re.useRef(null),t=Re.useRef(null),s=Re.useRef(null);return h_(e,t,s),u.jsx("div",{style:{position:"relative",height:"100vh"},children:u.jsxs("section",{className:"hero-section","data-hero-step":r,style:{position:"sticky",top:0,zIndex:1,height:"100vh",overflow:"hidden",background:"var(--bg-page)"},children:[u.jsx("div",{ref:t,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",top:-28},children:f_.map((o,l)=>u.jsx("div",{"data-drift":"",style:{position:"absolute",width:o.w,height:o.w,maxWidth:o.maxW,maxHeight:o.maxW,top:o.top,bottom:o.bottom,left:o.left,right:o.right,borderRadius:"50%",background:`radial-gradient(circle, ${o.color}, transparent 70%)`,filter:`blur(${o.blur}px)`,animation:o.anim,willChange:"transform"}},l))}),u.jsxs("div",{ref:e,className:"hero-cluster",children:[u.jsx("div",{className:"hero-req-label",style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:10},children:Va.askLabel}),u.jsxs("div",{className:"hero-bubble-wrap-1",style:{position:"relative",minHeight:46,marginBottom:16},children:[u.jsx("div",{className:"hero-typing-1",style:{position:"absolute",left:0,top:20},children:u.jsx(bp,{})}),u.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:10},children:u.jsx("div",{className:"hero-bubble-1",style:{background:"var(--bg-surface)",color:"var(--text-primary)",padding:"16px 24px",borderRadius:"4px 20px 20px 20px",fontFamily:"var(--font-display)",fontSize:"clamp(18px,2.2vw,24px)",fontWeight:500,lineHeight:1.3,boxShadow:"var(--shadow-float)"},children:Va.brief})})]}),u.jsxs("div",{style:{position:"relative",minHeight:72},children:[u.jsxs("div",{className:"hero-typing-2",style:{position:"absolute",left:0,top:16,display:"flex",alignItems:"center",gap:8},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",opacity:.7},children:"Thinking"}),u.jsx(bp,{})]}),u.jsxs("div",{className:"hero-bubble-2",style:{color:"var(--text-primary)",borderRadius:"20px 20px 4px 20px",boxShadow:"var(--shadow-lift)",background:"var(--bg-surface)",textAlign:"left",padding:"21px 31px"},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12},children:Va.replyLabel}),u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(21px,2.9vw,32px)",fontWeight:600,lineHeight:1.15,letterSpacing:"-0.02em"},children:Va.replyMain}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.5,color:"var(--text-muted)",marginTop:12},children:Va.replyFoot})]})]})]}),u.jsxs("div",{ref:s,className:"hero-scroll-cue","aria-hidden":"true",children:[u.jsx("span",{className:"hero-scroll-cue__label",children:"Scroll"}),u.jsx("span",{className:"hero-scroll-cue__track",children:u.jsx("span",{className:"hero-scroll-cue__thumb"})})]})]})})}const Ap=.18,Rp=1,m_=.85,Bu=(r,e,t)=>Math.min(t,Math.max(e,r));function g_(r,e){Re.useEffect(()=>{var p;const t=r.current,s=((p=e.current)==null?void 0:p.filter(Boolean))??[];if(!t||s.length===0)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(m=>{m.style.color=`rgba(255, 255, 255, ${Rp})`});return}let l=!1;const h=()=>{l=!1;const m=t.offsetHeight-window.innerHeight;if(m<=0)return;const v=-t.getBoundingClientRect().top,_=Bu(v/m,0,1),y=Bu(_/m_,0,1),M=1/s.length;s.forEach((E,b)=>{const x=Bu((y-b*M)/M,0,1),S=Ap+(Rp-Ap)*x;E.style.color=`rgba(255, 255, 255, ${S.toFixed(3)})`})},d=()=>{l||(l=!0,requestAnimationFrame(h))};return h(),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[r,e])}function v_(){const r=Re.useRef(null),e=Re.useRef([]);return g_(r,e),u.jsx("section",{ref:r,className:"statement-section","aria-label":"Statement",children:u.jsx("div",{className:"statement-sticky",children:u.jsx("p",{className:"statement-text",children:n_.lines.map((t,s)=>u.jsx("span",{ref:o=>{e.current[s]=o},className:"statement-line",style:{color:"rgba(255, 255, 255, 0.18)"},children:t},s))})})})}const Cp=(r,e,t)=>Math.min(t,Math.max(e,r));function __(r,e){Re.useEffect(()=>{var v;const t=r.current,s=((v=e.current)==null?void 0:v.filter(Boolean))??[];if(!t||s.length===0||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=s.length,l=s.map((_,y)=>Math.max(.5,1-(o-1-y)*.1)),h=s.map((_,y)=>y*.25);let d=!1;const p=()=>{if(d=!1,window.matchMedia("(max-width: 640px)").matches){s.forEach(b=>{b.style.transform=""});return}const _=window.innerHeight,y=t.offsetHeight-_;if(y<=0)return;const M=-t.getBoundingClientRect().top,E=Cp(M/y,0,1);s.forEach((b,x)=>{const S=h[x],L=1-S,R=L<=0?1:Cp((E-S)/L,0,1),D=1+(l[x]-1)*R;b.style.transform=`scale(${D.toFixed(4)})`})},m=()=>{d||(d=!0,requestAnimationFrame(p))};return p(),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[r,e])}const Pp=["linear-gradient(135deg, #8b7bff 0%, #5b46c4 100%)","linear-gradient(135deg, #35c2b0 0%, #0d7d72 100%)","linear-gradient(135deg, #7c8bff 0%, #3b3aa0 100%)","linear-gradient(135deg, #b58bff 0%, #7a3fd0 100%)"];function x_(){const r=Re.useRef(null),e=Re.useRef([]);return __(r,e),u.jsx("section",{id:"work",className:"case-stack-section",children:u.jsxs("div",{ref:r,className:"case-stack",children:[u.jsx("div",{className:"case-stack__intro","data-reveal":"",children:u.jsx("div",{className:"case-stack__eyebrow",children:"Case studies"})}),r_.map((t,s)=>u.jsx("div",{className:"case-stack__slot",children:u.jsx($l,{to:t.href||"#work",className:"case-stack__link","aria-label":`Read case study: ${t.card}`,children:u.jsxs("article",{ref:o=>{e.current[s]=o},className:"stack-card",style:{top:`calc(11vh + ${s*18}px)`,zIndex:s+1},children:[t.cover?u.jsx("div",{className:"stack-card__cover",children:u.jsx("img",{src:t.cover,alt:"",loading:"lazy"})}):u.jsx("div",{className:"stack-card__cover stack-card__cover--ph",style:{backgroundImage:Pp[s%Pp.length]},"aria-hidden":"true",children:u.jsx("span",{className:"stack-card__ph-index",children:t.index})}),u.jsxs("div",{className:"stack-card__body",children:[u.jsxs("div",{className:"stack-card__meta",children:[u.jsx("span",{className:"stack-card__index",children:t.index}),u.jsx("span",{children:t.meta})]}),u.jsx("h3",{className:"stack-card__headline",children:t.card}),u.jsxs("div",{className:"stack-card__footer",children:[u.jsx("div",{className:"stack-card__stats",children:t.stats.map((o,l)=>u.jsxs("div",{className:"stack-card__stat",children:[u.jsx("span",{className:"stack-card__stat-value",children:o.value}),u.jsx("span",{className:"stack-card__stat-label",children:o.label})]},l))}),u.jsx("span",{className:"stack-card__cta",children:"Read case →"})]})]})]})})},t.id))]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="161",y_=0,Lp=1,S_=2,_g=1,M_=2,Vi=3,Dr=0,Fn=1,Wi=2,Cr=0,Js=1,Ja=2,Np=3,Dp=4,w_=5,ns=100,E_=101,T_=102,Ip=103,Up=104,b_=200,A_=201,R_=202,C_=203,Ed=204,Td=205,P_=206,L_=207,N_=208,D_=209,I_=210,U_=211,F_=212,k_=213,O_=214,z_=0,B_=1,j_=2,Gl=3,H_=4,G_=5,V_=6,W_=7,xg=0,X_=1,q_=2,Pr=0,Y_=1,$_=2,K_=3,yg=4,Z_=5,Q_=6,Sg=300,ia=301,ra=302,bd=303,Ad=304,Kl=306,Rd=1e3,fi=1001,Cd=1002,wn=1003,Fp=1004,Wa=1005,In=1006,ju=1007,rs=1008,Lr=1009,J_=1010,ex=1011,jd=1012,Mg=1013,Ar=1014,Xi=1015,eo=1016,wg=1017,Eg=1018,ss=1020,tx=1021,pi=1023,nx=1024,ix=1025,as=1026,sa=1027,rx=1028,Tg=1029,sx=1030,bg=1031,Ag=1033,Hu=33776,Gu=33777,Vu=33778,Wu=33779,kp=35840,Op=35841,zp=35842,Bp=35843,Rg=36196,jp=37492,Hp=37496,Gp=37808,Vp=37809,Wp=37810,Xp=37811,qp=37812,Yp=37813,$p=37814,Kp=37815,Zp=37816,Qp=37817,Jp=37818,em=37819,tm=37820,nm=37821,Xu=36492,im=36494,rm=36495,ax=36283,sm=36284,am=36285,om=36286,Cg=3e3,os=3001,ox=3200,lx=3201,cx=0,ux=1,ni="",an="srgb",Ki="srgb-linear",Hd="display-p3",Zl="display-p3-linear",Vl="linear",It="srgb",Wl="rec709",Xl="p3",Ds=7680,lm=519,dx=512,hx=513,fx=514,Pg=515,px=516,mx=517,gx=518,vx=519,cm=35044,um="300 es",Pd=1035,Yi=2e3,ql=2001;class oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=Math.PI/180,Ld=180/Math.PI;function to(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function _x(r,e){return(r%e+e)%e}function Yu(r,e,t){return(1-t)*r+t*e}function dm(r){return(r&r-1)===0&&r!==0}function Nd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,h=this.y-e.y;return this.x=l*s-h*o+e.x,this.y=l*o+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,s,o,l,h,d,p,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m)}set(e,t,s,o,l,h,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],v=s[4],_=s[7],y=s[2],M=s[5],E=s[8],b=o[0],x=o[3],S=o[6],L=o[1],R=o[4],D=o[7],V=o[2],O=o[5],k=o[8];return l[0]=h*b+d*L+p*V,l[3]=h*x+d*R+p*O,l[6]=h*S+d*D+p*k,l[1]=m*b+v*L+_*V,l[4]=m*x+v*R+_*O,l[7]=m*S+v*D+_*k,l[2]=y*b+M*L+E*V,l[5]=y*x+M*R+E*O,l[8]=y*S+M*D+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return t*h*v-t*d*m-s*l*v+s*d*p+o*l*m-o*h*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*h-d*m,y=d*p-v*l,M=m*l-h*p,E=t*_+s*y+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(o*m-v*s)*b,e[2]=(d*s-o*h)*b,e[3]=y*b,e[4]=(v*t-o*p)*b,e[5]=(o*l-d*t)*b,e[6]=M*b,e[7]=(s*p-m*t)*b,e[8]=(h*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,h,d){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-o*m,o*p,-o*(-m*h+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply($u.makeScale(e,t)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,t){return this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new pt;function Lg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xx(){const r=Yl("canvas");return r.style.display="block",r}const hm={};function ea(r){r in hm||(hm[r]=!0,console.warn(r))}const fm=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fl={[Ki]:{transfer:Vl,primaries:Wl,toReference:r=>r,fromReference:r=>r},[an]:{transfer:It,primaries:Wl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Zl]:{transfer:Vl,primaries:Xl,toReference:r=>r.applyMatrix3(pm),fromReference:r=>r.applyMatrix3(fm)},[Hd]:{transfer:It,primaries:Xl,toReference:r=>r.convertSRGBToLinear().applyMatrix3(pm),fromReference:r=>r.applyMatrix3(fm).convertLinearToSRGB()}},yx=new Set([Ki,Zl]),Rt={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!yx.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=fl[e].toReference,o=fl[t].fromReference;return o(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return fl[r].primaries},getTransfer:function(r){return r===ni?Vl:fl[r].transfer}};function ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ku(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Is;class Ng{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=Yl("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=ta(l[h]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ta(t[s]/255)*255):t[s]=ta(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sx=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,d=o.length;h<d;h++)o[h].isDataTexture?l.push(Zu(o[h].image)):l.push(Zu(o[h]))}else l=Zu(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Zu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ng.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;class kn extends oa{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,s=fi,o=fi,l=In,h=rs,d=pi,p=Lr,m=kn.DEFAULT_ANISOTROPY,v=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=to(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===os?an:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?os:Cg}set encoding(e){ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?an:ni}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Sg;kn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,s=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,h=e.elements;return this.x=h[0]*t+h[4]*s+h[8]*o+h[12]*l,this.y=h[1]*t+h[5]*s+h[9]*o+h[13]*l,this.z=h[2]*t+h[6]*s+h[10]*o+h[14]*l,this.w=h[3]*t+h[7]*s+h[11]*o+h[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,m=p[0],v=p[4],_=p[8],y=p[1],M=p[5],E=p[9],b=p[2],x=p[6],S=p[10];if(Math.abs(v-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+x)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(m+1)/2,D=(M+1)/2,V=(S+1)/2,O=(v+y)/4,k=(_+b)/4,le=(E+x)/4;return R>D&&R>V?R<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(R),o=O/s,l=k/s):D>V?D<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),s=O/o,l=le/o):V<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),s=k/l,o=le/l),this.set(s,o,l,t),this}let L=Math.sqrt((x-E)*(x-E)+(_-b)*(_-b)+(y-v)*(y-v));return Math.abs(L)<.001&&(L=1),this.x=(x-E)/L,this.y=(_-b)/L,this.z=(y-v)/L,this.w=Math.acos((m+M+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wx extends oa{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const o={width:e,height:t,depth:1};s.encoding!==void 0&&(ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===os?an:ni),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new kn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends wx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Ig extends kn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ex extends kn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,h,d){let p=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];const y=l[h+0],M=l[h+1],E=l[h+2],b=l[h+3];if(d===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=E,e[t+3]=b;return}if(_!==b||p!==y||m!==M||v!==E){let x=1-d;const S=p*y+m*M+v*E+_*b,L=S>=0?1:-1,R=1-S*S;if(R>Number.EPSILON){const V=Math.sqrt(R),O=Math.atan2(V,S*L);x=Math.sin(x*O)/V,d=Math.sin(d*O)/V}const D=d*L;if(p=p*x+y*D,m=m*x+M*D,v=v*x+E*D,_=_*x+b*D,x===1-d){const V=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=V,m*=V,v*=V,_*=V}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,h){const d=s[o],p=s[o+1],m=s[o+2],v=s[o+3],_=l[h],y=l[h+1],M=l[h+2],E=l[h+3];return e[t]=d*E+v*_+p*M-m*y,e[t+1]=p*E+v*y+m*_-d*M,e[t+2]=m*E+v*M+d*y-p*_,e[t+3]=v*E-d*_-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(o/2),_=d(l/2),y=p(s/2),M=p(o/2),E=p(l/2);switch(h){case"XYZ":this._x=y*v*_+m*M*E,this._y=m*M*_-y*v*E,this._z=m*v*E+y*M*_,this._w=m*v*_-y*M*E;break;case"YXZ":this._x=y*v*_+m*M*E,this._y=m*M*_-y*v*E,this._z=m*v*E-y*M*_,this._w=m*v*_+y*M*E;break;case"ZXY":this._x=y*v*_-m*M*E,this._y=m*M*_+y*v*E,this._z=m*v*E+y*M*_,this._w=m*v*_-y*M*E;break;case"ZYX":this._x=y*v*_-m*M*E,this._y=m*M*_+y*v*E,this._z=m*v*E-y*M*_,this._w=m*v*_+y*M*E;break;case"YZX":this._x=y*v*_+m*M*E,this._y=m*M*_+y*v*E,this._z=m*v*E-y*M*_,this._w=m*v*_-y*M*E;break;case"XZY":this._x=y*v*_-m*M*E,this._y=m*M*_-y*v*E,this._z=m*v*E+y*M*_,this._w=m*v*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],h=t[1],d=t[5],p=t[9],m=t[2],v=t[6],_=t[10],y=s+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(h-o)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+h)/M,this._z=(l+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(l-m)/M,this._x=(o+h)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,h=e._w,d=t._x,p=t._y,m=t._z,v=t._w;return this._x=s*v+h*d+o*m-l*p,this._y=o*v+h*p+l*d-s*m,this._z=l*v+h*m+s*p-o*d,this._w=h*v-s*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,h=this._w;let d=h*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*h+t*this._w,this._x=M*s+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-t)*v)/m,y=Math.sin(t*v)/m;return this._w=h*_+this._w*y,this._x=s*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,s=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,h=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*h,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*h,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*h,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*o-d*s),v=2*(d*t-l*o),_=2*(l*s-h*t);return this.x=t+p*m+h*_-d*v,this.y=s+p*v+d*m-l*_,this.z=o+p*_+l*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,h=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*h-s*p,this.z=s*d-o*h,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(gn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new Y,mm=new la;class no{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=l.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ci):ci.fromBufferAttribute(l,h),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pl.copy(s.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),ml.subVectors(this.max,qa),Us.subVectors(e.a,qa),Fs.subVectors(e.b,qa),ks.subVectors(e.c,qa),xr.subVectors(Fs,Us),yr.subVectors(ks,Fs),Kr.subVectors(Us,ks);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Kr.z,Kr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Kr.z,0,-Kr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Kr.y,Kr.x,0];return!Ju(t,Us,Fs,ks,ml)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,Us,Fs,ks,ml))?!1:(gl.crossVectors(xr,yr),t=[gl.x,gl.y,gl.z],Ju(t,Us,Fs,ks,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ci=new Y,pl=new no,Us=new Y,Fs=new Y,ks=new Y,xr=new Y,yr=new Y,Kr=new Y,qa=new Y,ml=new Y,gl=new Y,Zr=new Y;function Ju(r,e,t,s,o){for(let l=0,h=r.length-3;l<=h;l+=3){Zr.fromArray(r,l);const d=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),p=e.dot(Zr),m=t.dot(Zr),v=s.dot(Zr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Tx=new no,Ya=new Y,ed=new Y;class Ql{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Tx.setFromPoints(e).getCenter(s);let o=0;for(let l=0,h=e.length;l<h;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Ya,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(ed)),this.expandByPoint(Ya.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new Y,td=new Y,vl=new Y,Sr=new Y,nd=new Y,_l=new Y,id=new Y;class Ug{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){td.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(td);const l=e.distanceTo(t)*.5,h=-this.direction.dot(vl),d=Sr.dot(this.direction),p=-Sr.dot(vl),m=Sr.lengthSq(),v=Math.abs(1-h*h);let _,y,M,E;if(v>0)if(_=h*p-d,y=h*d-p,E=l*v,_>=0)if(y>=-E)if(y<=E){const b=1/v;_*=b,y*=b,M=_*(_+h*y+2*d)+y*(h*_+y+2*p)+m}else y=l,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*p)+m;else y=-l,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-h*l+d)),y=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+m):(_=Math.max(0,-(h*l+d)),y=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+y*(y+2*p)+m);else y=h>0?-l:l,_=Math.max(0,-(h*y+d)),M=-_*_+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(td).addScaledVector(vl,y),M}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const s=Bi.dot(this.direction),o=Bi.dot(Bi)-s*s,l=e.radius*e.radius;if(o>l)return null;const h=Math.sqrt(l-o),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),v>=0?(l=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(l=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),s>h||l>o||((l>s||isNaN(s))&&(s=l),(h<o||isNaN(o))&&(o=h),_>=0?(d=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,s,o,l){nd.subVectors(t,e),_l.subVectors(s,e),id.crossVectors(nd,_l);let h=this.direction.dot(id),d;if(h>0){if(o)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Sr.subVectors(this.origin,e);const p=d*this.direction.dot(_l.crossVectors(Sr,_l));if(p<0)return null;const m=d*this.direction.dot(nd.cross(Sr));if(m<0||p+m>h)return null;const v=-d*Sr.dot(id);return v<0?null:this.at(v/h,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,s,o,l,h,d,p,m,v,_,y,M,E,b,x){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,h,d,p,m,v,_,y,M,E,b,x)}set(e,t,s,o,l,h,d,p,m,v,_,y,M,E,b,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=v,S[10]=_,S[14]=y,S[3]=M,S[7]=E,S[11]=b,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),h=1/Os.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*h,t[9]=s[9]*h,t[10]=s[10]*h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=h*v,M=h*_,E=d*v,b=d*_;t[0]=p*v,t[4]=-p*_,t[8]=m,t[1]=M+E*m,t[5]=y-b*m,t[9]=-d*p,t[2]=b-y*m,t[6]=E+M*m,t[10]=h*p}else if(e.order==="YXZ"){const y=p*v,M=p*_,E=m*v,b=m*_;t[0]=y+b*d,t[4]=E*d-M,t[8]=h*m,t[1]=h*_,t[5]=h*v,t[9]=-d,t[2]=M*d-E,t[6]=b+y*d,t[10]=h*p}else if(e.order==="ZXY"){const y=p*v,M=p*_,E=m*v,b=m*_;t[0]=y-b*d,t[4]=-h*_,t[8]=E+M*d,t[1]=M+E*d,t[5]=h*v,t[9]=b-y*d,t[2]=-h*m,t[6]=d,t[10]=h*p}else if(e.order==="ZYX"){const y=h*v,M=h*_,E=d*v,b=d*_;t[0]=p*v,t[4]=E*m-M,t[8]=y*m+b,t[1]=p*_,t[5]=b*m+y,t[9]=M*m-E,t[2]=-m,t[6]=d*p,t[10]=h*p}else if(e.order==="YZX"){const y=h*p,M=h*m,E=d*p,b=d*m;t[0]=p*v,t[4]=b-y*_,t[8]=E*_+M,t[1]=_,t[5]=h*v,t[9]=-d*v,t[2]=-m*v,t[6]=M*_+E,t[10]=y-b*_}else if(e.order==="XZY"){const y=h*p,M=h*m,E=d*p,b=d*m;t[0]=p*v,t[4]=-_,t[8]=m*v,t[1]=y*_+b,t[5]=h*v,t[9]=M*_-E,t[2]=E*_-M,t[6]=d*v,t[10]=b*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Ax)}lookAt(e,t,s){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Mr.crossVectors(s,Gn),Mr.lengthSq()===0&&(Math.abs(s.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Mr.crossVectors(s,Gn)),Mr.normalize(),xl.crossVectors(Gn,Mr),o[0]=Mr.x,o[4]=xl.x,o[8]=Gn.x,o[1]=Mr.y,o[5]=xl.y,o[9]=Gn.y,o[2]=Mr.z,o[6]=xl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],v=s[1],_=s[5],y=s[9],M=s[13],E=s[2],b=s[6],x=s[10],S=s[14],L=s[3],R=s[7],D=s[11],V=s[15],O=o[0],k=o[4],le=o[8],de=o[12],T=o[1],F=o[5],ce=o[9],ue=o[13],j=o[2],re=o[6],W=o[10],te=o[14],B=o[3],Q=o[7],X=o[11],N=o[15];return l[0]=h*O+d*T+p*j+m*B,l[4]=h*k+d*F+p*re+m*Q,l[8]=h*le+d*ce+p*W+m*X,l[12]=h*de+d*ue+p*te+m*N,l[1]=v*O+_*T+y*j+M*B,l[5]=v*k+_*F+y*re+M*Q,l[9]=v*le+_*ce+y*W+M*X,l[13]=v*de+_*ue+y*te+M*N,l[2]=E*O+b*T+x*j+S*B,l[6]=E*k+b*F+x*re+S*Q,l[10]=E*le+b*ce+x*W+S*X,l[14]=E*de+b*ue+x*te+S*N,l[3]=L*O+R*T+D*j+V*B,l[7]=L*k+R*F+D*re+V*Q,l[11]=L*le+R*ce+D*W+V*X,l[15]=L*de+R*ue+D*te+V*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],h=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],y=e[10],M=e[14],E=e[3],b=e[7],x=e[11],S=e[15];return E*(+l*p*_-o*m*_-l*d*y+s*m*y+o*d*M-s*p*M)+b*(+t*p*M-t*m*y+l*h*y-o*h*M+o*m*v-l*p*v)+x*(+t*m*_-t*d*M-l*h*_+s*h*M+l*d*v-s*m*v)+S*(-o*d*v-t*p*_+t*d*y+o*h*_-s*h*y+s*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],y=e[10],M=e[11],E=e[12],b=e[13],x=e[14],S=e[15],L=_*x*m-b*y*m+b*p*M-d*x*M-_*p*S+d*y*S,R=E*y*m-v*x*m-E*p*M+h*x*M+v*p*S-h*y*S,D=v*b*m-E*_*m+E*d*M-h*b*M-v*d*S+h*_*S,V=E*_*p-v*b*p-E*d*y+h*b*y+v*d*x-h*_*x,O=t*L+s*R+o*D+l*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=L*k,e[1]=(b*y*l-_*x*l-b*o*M+s*x*M+_*o*S-s*y*S)*k,e[2]=(d*x*l-b*p*l+b*o*m-s*x*m-d*o*S+s*p*S)*k,e[3]=(_*p*l-d*y*l-_*o*m+s*y*m+d*o*M-s*p*M)*k,e[4]=R*k,e[5]=(v*x*l-E*y*l+E*o*M-t*x*M-v*o*S+t*y*S)*k,e[6]=(E*p*l-h*x*l-E*o*m+t*x*m+h*o*S-t*p*S)*k,e[7]=(h*y*l-v*p*l+v*o*m-t*y*m-h*o*M+t*p*M)*k,e[8]=D*k,e[9]=(E*_*l-v*b*l-E*s*M+t*b*M+v*s*S-t*_*S)*k,e[10]=(h*b*l-E*d*l+E*s*m-t*b*m-h*s*S+t*d*S)*k,e[11]=(v*d*l-h*_*l-v*s*m+t*_*m+h*s*M-t*d*M)*k,e[12]=V*k,e[13]=(v*b*o-E*_*o+E*s*y-t*b*y-v*s*x+t*_*x)*k,e[14]=(E*d*o-h*b*o-E*s*p+t*b*p+h*s*x-t*d*x)*k,e[15]=(h*_*o-v*d*o+v*s*p-t*_*p-h*s*y+t*d*y)*k,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,h=e.x,d=e.y,p=e.z,m=l*h,v=l*d;return this.set(m*h+s,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+s,v*p-o*h,0,m*p-o*d,v*p+o*h,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,h){return this.set(1,s,l,0,e,1,h,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,h=t._y,d=t._z,p=t._w,m=l+l,v=h+h,_=d+d,y=l*m,M=l*v,E=l*_,b=h*v,x=h*_,S=d*_,L=p*m,R=p*v,D=p*_,V=s.x,O=s.y,k=s.z;return o[0]=(1-(b+S))*V,o[1]=(M+D)*V,o[2]=(E-R)*V,o[3]=0,o[4]=(M-D)*O,o[5]=(1-(y+S))*O,o[6]=(x+L)*O,o[7]=0,o[8]=(E+R)*k,o[9]=(x-L)*k,o[10]=(1-(y+b))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Os.set(o[0],o[1],o[2]).length();const h=Os.set(o[4],o[5],o[6]).length(),d=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const m=1/l,v=1/h,_=1/d;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=v,ui.elements[5]*=v,ui.elements[6]*=v,ui.elements[8]*=_,ui.elements[9]*=_,ui.elements[10]*=_,t.setFromRotationMatrix(ui),s.x=l,s.y=h,s.z=d,this}makePerspective(e,t,s,o,l,h,d=Yi){const p=this.elements,m=2*l/(t-e),v=2*l/(s-o),_=(t+e)/(t-e),y=(s+o)/(s-o);let M,E;if(d===Yi)M=-(h+l)/(h-l),E=-2*h*l/(h-l);else if(d===ql)M=-h/(h-l),E=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,h,d=Yi){const p=this.elements,m=1/(t-e),v=1/(s-o),_=1/(h-l),y=(t+e)*m,M=(s+o)*v;let E,b;if(d===Yi)E=(h+l)*_,b=-2*_;else if(d===ql)E=l*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Os=new Y,ui=new Kt,bx=new Y(0,0,0),Ax=new Y(1,1,1),Mr=new Y,xl=new Y,Gn=new Y,gm=new Kt,vm=new la;class Jl{constructor(e=0,t=0,s=0,o=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],h=o[4],d=o[8],p=o[1],m=o[5],v=o[9],_=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(gn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";class Fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const _m=new Y,zs=new la,ji=new Kt,yl=new Y,$a=new Y,Cx=new Y,Px=new la,xm=new Y(1,0,0),ym=new Y(0,1,0),Sm=new Y(0,0,1),Lx={type:"added"},Nx={type:"removed"};class On extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new Y,t=new Jl,s=new la,o=new Y(1,1,1);function l(){s.setFromEuler(t,!1)}function h(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?yl.copy(e):yl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt($a,yl,this.up):ji.lookAt(yl,$a,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),zs.setFromRotationMatrix(ji),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const h=this.children[s].getObjectByProperty(e,t);if(h!==void 0)return h}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++){const d=o[l];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),v=h(e.images),_=h(e.shapes),y=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}On.DEFAULT_UP=new Y(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new Y,Hi=new Y,rd=new Y,Gi=new Y,Bs=new Y,js=new Y,Mm=new Y,sd=new Y,ad=new Y,od=new Y;class bi{constructor(e=new Y,t=new Y,s=new Y){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){di.subVectors(o,t),Hi.subVectors(s,t),rd.subVectors(e,t);const h=di.dot(di),d=di.dot(Hi),p=di.dot(rd),m=Hi.dot(Hi),v=Hi.dot(rd),_=h*m-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(m*p-d*v)*y,E=(h*v-d*p)*y;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,s,o,l,h,d,p){return this.getBarycoord(e,t,s,o,Gi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Gi.x),p.addScaledVector(h,Gi.y),p.addScaledVector(d,Gi.z),p)}static isFrontFacing(e,t,s,o){return di.subVectors(s,t),Hi.subVectors(e,t),di.cross(Hi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let h,d;Bs.subVectors(o,s),js.subVectors(l,s),sd.subVectors(e,s);const p=Bs.dot(sd),m=js.dot(sd);if(p<=0&&m<=0)return t.copy(s);ad.subVectors(e,o);const v=Bs.dot(ad),_=js.dot(ad);if(v>=0&&_<=v)return t.copy(o);const y=p*_-v*m;if(y<=0&&p>=0&&v<=0)return h=p/(p-v),t.copy(s).addScaledVector(Bs,h);od.subVectors(e,l);const M=Bs.dot(od),E=js.dot(od);if(E>=0&&M<=E)return t.copy(l);const b=M*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(s).addScaledVector(js,d);const x=v*E-M*_;if(x<=0&&_-v>=0&&M-E>=0)return Mm.subVectors(l,o),d=(_-v)/(_-v+(M-E)),t.copy(o).addScaledVector(Mm,d);const S=1/(x+b+y);return h=b*S,d=y*S,t.copy(s).addScaledVector(Bs,h).addScaledVector(js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function ld(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Rt.workingColorSpace){if(e=_x(e,1),t=gn(t,0,1),s=gn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,h=2*s-l;this.r=ld(h,l,e+1/3),this.g=ld(h,l,e),this.b=ld(h,l,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=an){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const h=o[1],d=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(h===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const s=kg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=Ku(e.r),this.g=Ku(e.g),this.b=Ku(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Rt.fromWorkingColorSpace(pn.copy(this),e),Math.round(gn(pn.r*255,0,255))*65536+Math.round(gn(pn.g*255,0,255))*256+Math.round(gn(pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,o=pn.g,l=pn.b,h=Math.max(s,o,l),d=Math.min(s,o,l);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=v<=.5?_/(h+d):_/(2-h-d),h){case s:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-s)/_+2;break;case l:p=(s-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=an){Rt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,o=pn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Sl);const s=Yu(wr.h,Sl.h,t),o=Yu(wr.s,Sl.s,t),l=Yu(wr.l,Sl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new je;je.NAMES=kg;let Dx=0;class io extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Js,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==Td&&(s.blendDst=this.blendDst),this.blendEquation!==ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const h=[];for(const d in l){const p=l[d];delete p.metadata,h.push(p)}return h}if(t){const l=o(e.textures),h=o(e.images);l.length>0&&(s.textures=l),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Og extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Y,Ml=new wt;class mi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=cm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ea("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Xa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),o=Nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),s=Nn(s,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}}class zg extends mi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Bg extends mi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Un extends mi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Ix=0;const ei=new Kt,cd=new On,Hs=new Y,Vn=new no,Ka=new no,nn=new Y;class gi extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?Bg:zg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const s=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,h=t.length;l<h;l++){const d=t[l];Ka.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(Vn.min,Ka.min),Vn.expandByPoint(nn),nn.addVectors(Vn.max,Ka.max),Vn.expandByPoint(nn)):(Vn.expandByPoint(Ka.min),Vn.expandByPoint(Ka.max))}Vn.getCenter(s);let o=0;for(let l=0,h=e.count;l<h;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(nn));if(t)for(let l=0,h=t.length;l<h;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)nn.fromBufferAttribute(d,m),p&&(Hs.fromBufferAttribute(e,m),nn.add(Hs)),o=Math.max(o,s.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,h=t.uv.array,d=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,m=[],v=[];for(let T=0;T<d;T++)m[T]=new Y,v[T]=new Y;const _=new Y,y=new Y,M=new Y,E=new wt,b=new wt,x=new wt,S=new Y,L=new Y;function R(T,F,ce){_.fromArray(o,T*3),y.fromArray(o,F*3),M.fromArray(o,ce*3),E.fromArray(h,T*2),b.fromArray(h,F*2),x.fromArray(h,ce*2),y.sub(_),M.sub(_),b.sub(E),x.sub(E);const ue=1/(b.x*x.y-x.x*b.y);isFinite(ue)&&(S.copy(y).multiplyScalar(x.y).addScaledVector(M,-b.y).multiplyScalar(ue),L.copy(M).multiplyScalar(b.x).addScaledVector(y,-x.x).multiplyScalar(ue),m[T].add(S),m[F].add(S),m[ce].add(S),v[T].add(L),v[F].add(L),v[ce].add(L))}let D=this.groups;D.length===0&&(D=[{start:0,count:s.length}]);for(let T=0,F=D.length;T<F;++T){const ce=D[T],ue=ce.start,j=ce.count;for(let re=ue,W=ue+j;re<W;re+=3)R(s[re+0],s[re+1],s[re+2])}const V=new Y,O=new Y,k=new Y,le=new Y;function de(T){k.fromArray(l,T*3),le.copy(k);const F=m[T];V.copy(F),V.sub(k.multiplyScalar(k.dot(F))).normalize(),O.crossVectors(le,F);const ue=O.dot(v[T])<0?-1:1;p[T*4]=V.x,p[T*4+1]=V.y,p[T*4+2]=V.z,p[T*4+3]=ue}for(let T=0,F=D.length;T<F;++T){const ce=D[T],ue=ce.start,j=ce.count;for(let re=ue,W=ue+j;re<W;re+=3)de(s[re+0]),de(s[re+1]),de(s[re+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const o=new Y,l=new Y,h=new Y,d=new Y,p=new Y,m=new Y,v=new Y,_=new Y;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),b=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),h.fromBufferAttribute(t,x),v.subVectors(h,l),_.subVectors(o,l),v.cross(_),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,x),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),h.fromBufferAttribute(t,y+2),v.subVectors(h,l),_.subVectors(o,l),v.cross(_),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,y=new m.constructor(p.length*v);let M=0,E=0;for(let b=0,x=p.length;b<x;b++){d.isInterleavedBufferAttribute?M=p[b]*d.data.stride+d.offset:M=p[b]*v;for(let S=0;S<v;S++)y[E++]=m[M++]}return new mi(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,s);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let v=0,_=m.length;v<_;v++){const y=m[v],M=e(y,s);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,y=m.length;_<y;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Kt,Qr=new Ug,wl=new Ql,Em=new Y,Gs=new Y,Vs=new Y,Ws=new Y,ud=new Y,El=new Y,Tl=new wt,bl=new wt,Al=new wt,Tm=new Y,bm=new Y,Am=new Y,Rl=new Y,Cl=new Y;class $i extends On{constructor(e=new gi,t=new Og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,h=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){El.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=d[p],_=l[p];v!==0&&(ud.fromBufferAttribute(_,e),h?El.addScaledVector(ud,v):El.addScaledVector(ud.sub(t),v))}t.add(El)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wl.copy(s.boundingSphere),wl.applyMatrix4(l),Qr.copy(e.ray).recast(e.near),!(wl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(wl,Em)===null||Qr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(wm.copy(l).invert(),Qr.copy(e.ray).applyMatrix4(wm),!(s.boundingBox!==null&&Qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,h=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const x=y[E],S=h[x.materialIndex],L=Math.max(x.start,M.start),R=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=L,V=R;D<V;D+=3){const O=d.getX(D),k=d.getX(D+1),le=d.getX(D+2);o=Pl(this,S,e,s,m,v,_,O,k,le),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let x=E,S=b;x<S;x+=3){const L=d.getX(x),R=d.getX(x+1),D=d.getX(x+2);o=Pl(this,h,e,s,m,v,_,L,R,D),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const x=y[E],S=h[x.materialIndex],L=Math.max(x.start,M.start),R=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let D=L,V=R;D<V;D+=3){const O=D,k=D+1,le=D+2;o=Pl(this,S,e,s,m,v,_,O,k,le),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let x=E,S=b;x<S;x+=3){const L=x,R=x+1,D=x+2;o=Pl(this,h,e,s,m,v,_,L,R,D),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Ux(r,e,t,s,o,l,h,d){let p;if(e.side===Fn?p=s.intersectTriangle(h,l,o,!0,d):p=s.intersectTriangle(o,l,h,e.side===Dr,d),p===null)return null;Cl.copy(d),Cl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Cl);return m<t.near||m>t.far?null:{distance:m,point:Cl.clone(),object:r}}function Pl(r,e,t,s,o,l,h,d,p,m){r.getVertexPosition(d,Gs),r.getVertexPosition(p,Vs),r.getVertexPosition(m,Ws);const v=Ux(r,e,t,s,Gs,Vs,Ws,Rl);if(v){o&&(Tl.fromBufferAttribute(o,d),bl.fromBufferAttribute(o,p),Al.fromBufferAttribute(o,m),v.uv=bi.getInterpolation(Rl,Gs,Vs,Ws,Tl,bl,Al,new wt)),l&&(Tl.fromBufferAttribute(l,d),bl.fromBufferAttribute(l,p),Al.fromBufferAttribute(l,m),v.uv1=bi.getInterpolation(Rl,Gs,Vs,Ws,Tl,bl,Al,new wt),v.uv2=v.uv1),h&&(Tm.fromBufferAttribute(h,d),bm.fromBufferAttribute(h,p),Am.fromBufferAttribute(h,m),v.normal=bi.getInterpolation(Rl,Gs,Vs,Ws,Tm,bm,Am,new Y),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new Y,materialIndex:0};bi.getNormal(Gs,Vs,Ws,_.normal),v.face=_}return v}class ro extends gi{constructor(e=1,t=1,s=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:h};const d=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const p=[],m=[],v=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,s,t,e,h,l,0),E("z","y","x",1,-1,s,t,-e,h,l,1),E("x","z","y",1,1,e,s,t,o,h,2),E("x","z","y",1,-1,e,s,-t,o,h,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(v,3)),this.setAttribute("uv",new Un(_,2));function E(b,x,S,L,R,D,V,O,k,le,de){const T=D/k,F=V/le,ce=D/2,ue=V/2,j=O/2,re=k+1,W=le+1;let te=0,B=0;const Q=new Y;for(let X=0;X<W;X++){const N=X*F-ue;for(let G=0;G<re;G++){const ye=G*T-ce;Q[b]=ye*L,Q[x]=N*R,Q[S]=j,m.push(Q.x,Q.y,Q.z),Q[b]=0,Q[x]=0,Q[S]=O>0?1:-1,v.push(Q.x,Q.y,Q.z),_.push(G/k),_.push(1-X/le),te+=1}}for(let X=0;X<le;X++)for(let N=0;N<k;N++){const G=y+N+re*X,ye=y+N+re*(X+1),q=y+(N+1)+re*(X+1),oe=y+(N+1)+re*X;p.push(G,ye,oe),p.push(ye,q,oe),B+=6}d.addGroup(M,B,de),M+=B,y+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const s=aa(r[t]);for(const o in s)e[o]=s[o]}return e}function Fx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jg(r){return r.getRenderTarget()===null?r.outputColorSpace:Rt.workingColorSpace}const kx={clone:aa,merge:Mn};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?t.uniforms[o]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?t.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?t.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?t.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?t.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?t.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?t.uniforms[o]={type:"m4",value:h.toArray()}:t.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Hg extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new Y,Rm=new wt,Cm=new wt;class ti extends Hg{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Rm,Cm),t.subVectors(Cm,Rm)}setViewOffset(e,t,s,o,l,h){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qu*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;l+=h.offsetX*o/p,t-=h.offsetY*s/m,o*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,qs=1;class Bx extends On{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Xs,qs,e,t);o.layers=this.layers,this.add(o);const l=new ti(Xs,qs,e,t);l.layers=this.layers,this.add(l);const h=new ti(Xs,qs,e,t);h.layers=this.layers,this.add(h);const d=new ti(Xs,qs,e,t);d.layers=this.layers,this.add(d);const p=new ti(Xs,qs,e,t);p.layers=this.layers,this.add(p);const m=new ti(Xs,qs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,h,d,p]=t;for(const m of t)this.remove(m);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ql)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,h,d,p,m,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,h),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,p),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),e.render(t,v),e.setRenderTarget(_,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Gg extends kn{constructor(e,t,s,o,l,h,d,p,m,v){e=e!==void 0?e:[],t=t!==void 0?t:ia,super(e,t,s,o,l,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];t.encoding!==void 0&&(ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===os?an:ni),this.texture=new Gg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ro(5,5,5),l=new Ai({name:"CubemapFromEquirect",uniforms:aa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Cr});l.uniforms.tEquirect.value=t;const h=new $i(o,l),d=t.minFilter;return t.minFilter===rs&&(t.minFilter=In),new Bx(1,10,this).update(e,h),t.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(t,s,o);e.setRenderTarget(l)}}const dd=new Y,Hx=new Y,Gx=new pt;class es{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=dd.subVectors(s,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(dd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Gx.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Ql,Ll=new Y;class Vg{constructor(e=new es,t=new es,s=new es,o=new es,l=new es,h=new es){this.planes=[e,t,s,o,l,h]}set(e,t,s,o,l,h){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(h),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Yi){const s=this.planes,o=e.elements,l=o[0],h=o[1],d=o[2],p=o[3],m=o[4],v=o[5],_=o[6],y=o[7],M=o[8],E=o[9],b=o[10],x=o[11],S=o[12],L=o[13],R=o[14],D=o[15];if(s[0].setComponents(p-l,y-m,x-M,D-S).normalize(),s[1].setComponents(p+l,y+m,x+M,D+S).normalize(),s[2].setComponents(p+h,y+v,x+E,D+L).normalize(),s[3].setComponents(p-h,y-v,x-E,D-L).normalize(),s[4].setComponents(p-d,y-_,x-b,D-R).normalize(),t===Yi)s[5].setComponents(p+d,y+_,x+b,D+R).normalize();else if(t===ql)s[5].setComponents(d,_,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Ll.x=o.normal.x>0?e.max.x:e.min.x,Ll.y=o.normal.y>0?e.max.y:e.min.y,Ll.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wg(){let r=null,e=!1,t=null,s=null;function o(l,h){t(l,h),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Vx(r,e){const t=e.isWebGL2,s=new WeakMap;function o(m,v){const _=m.array,y=m.usage,M=_.byteLength,E=r.createBuffer();r.bindBuffer(v,E),r.bufferData(v,_,y),m.onUploadCallback();let b;if(_ instanceof Float32Array)b=r.FLOAT;else if(_ instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)b=r.SHORT;else if(_ instanceof Uint32Array)b=r.UNSIGNED_INT;else if(_ instanceof Int32Array)b=r.INT;else if(_ instanceof Int8Array)b=r.BYTE;else if(_ instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:m.version,size:M}}function l(m,v,_){const y=v.array,M=v._updateRange,E=v.updateRanges;if(r.bindBuffer(_,m),M.count===-1&&E.length===0&&r.bufferSubData(_,0,y),E.length!==0){for(let b=0,x=E.length;b<x;b++){const S=E[b];t?r.bufferSubData(_,S.start*y.BYTES_PER_ELEMENT,y,S.start,S.count):r.bufferSubData(_,S.start*y.BYTES_PER_ELEMENT,y.subarray(S.start,S.start+S.count))}v.clearUpdateRanges()}M.count!==-1&&(t?r.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):r.bufferSubData(_,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),v.onUploadCallback()}function h(m){return m.isInterleavedBufferAttribute&&(m=m.data),s.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const v=s.get(m);v&&(r.deleteBuffer(v.buffer),s.delete(m))}function p(m,v){if(m.isGLBufferAttribute){const y=s.get(m);(!y||y.version<m.version)&&s.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const _=s.get(m);if(_===void 0)s.set(m,o(m,v));else if(_.version<m.version){if(_.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(_.buffer,m,v),_.version=m.version}}return{get:h,remove:d,update:p}}class ec extends gi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,h=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,v=p+1,_=e/d,y=t/p,M=[],E=[],b=[],x=[];for(let S=0;S<v;S++){const L=S*y-h;for(let R=0;R<m;R++){const D=R*_-l;E.push(D,-L,0),b.push(0,0,1),x.push(R/d),x.push(1-S/p)}}for(let S=0;S<p;S++)for(let L=0;L<d;L++){const R=L+m*S,D=L+m*(S+1),V=L+1+m*(S+1),O=L+1+m*S;M.push(R,D,O),M.push(D,V,O)}this.setIndex(M),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(b,3)),this.setAttribute("uv",new Un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
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
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
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
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
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
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,sy=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`
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
}`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
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
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Vy=`struct PhysicalMaterial {
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
}`,Wy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tS=`#if defined( USE_POINTS_UV )
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
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sS=`#ifdef USE_MORPHNORMALS
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
#endif`,aS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
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
#endif`,lS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
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
#endif`,pS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ES=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,PS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,NS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,US=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
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
}`,ZS=`#if DEPTH_PACKING == 3200
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
}`,QS=`#define DISTANCE
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
}`,JS=`#define DISTANCE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,lM=`#define MATCAP
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
}`,cM=`#define MATCAP
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
}`,uM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,hM=`#define PHONG
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
}`,fM=`#define PHONG
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
}`,pM=`#define STANDARD
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
}`,mM=`#define STANDARD
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
}`,gM=`#define TOON
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
}`,vM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,SM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:$x,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Qx,batching_pars_vertex:Jx,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:uy,color_pars_fragment:dy,color_pars_vertex:hy,color_vertex:fy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:vy,displacementmap_vertex:_y,emissivemap_fragment:xy,emissivemap_pars_fragment:yy,colorspace_fragment:Sy,colorspace_pars_fragment:My,envmap_fragment:wy,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:by,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Py,fog_pars_fragment:Ly,gradientmap_pars_fragment:Ny,lightmap_fragment:Dy,lightmap_pars_fragment:Iy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Fy,lights_pars_begin:ky,lights_toon_fragment:zy,lights_toon_pars_fragment:By,lights_phong_fragment:jy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Qy,map_pars_fragment:Jy,map_particle_fragment:eS,map_particle_pars_fragment:tS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphcolor_vertex:rS,morphnormal_vertex:sS,morphtarget_pars_vertex:aS,morphtarget_vertex:oS,normal_fragment_begin:lS,normal_fragment_maps:cS,normal_pars_fragment:uS,normal_pars_vertex:dS,normal_vertex:hS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:pS,clearcoat_normal_fragment_maps:mS,clearcoat_pars_fragment:gS,iridescence_pars_fragment:vS,opaque_fragment:_S,packing:xS,premultiplied_alpha_fragment:yS,project_vertex:SS,dithering_fragment:MS,dithering_pars_fragment:wS,roughnessmap_fragment:ES,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:AS,shadowmap_vertex:RS,shadowmask_pars_fragment:CS,skinbase_vertex:PS,skinning_pars_vertex:LS,skinning_vertex:NS,skinnormal_vertex:DS,specularmap_fragment:IS,specularmap_pars_fragment:US,tonemapping_fragment:FS,tonemapping_pars_fragment:kS,transmission_fragment:OS,transmission_pars_fragment:zS,uv_pars_fragment:BS,uv_pars_vertex:jS,uv_vertex:HS,worldpos_vertex:GS,background_vert:VS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:qS,cube_vert:YS,cube_frag:$S,depth_vert:KS,depth_frag:ZS,distanceRGBA_vert:QS,distanceRGBA_frag:JS,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:lM,meshmatcap_frag:cM,meshnormal_vert:uM,meshnormal_frag:dM,meshphong_vert:hM,meshphong_frag:fM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:xM,shadow_vert:yM,shadow_frag:SM,sprite_vert:MM,sprite_frag:wM},Ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Mn([Ae.points,Ae.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Mn([Ae.common,Ae.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Mn([Ae.sprite,Ae.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Mn([Ae.lights,Ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Nl={r:0,b:0,g:0};function EM(r,e,t,s,o,l,h){const d=new je(0);let p=l===!0?0:1,m,v,_=null,y=0,M=null;function E(x,S){let L=!1,R=S.isScene===!0?S.background:null;R&&R.isTexture&&(R=(S.backgroundBlurriness>0?t:e).get(R)),R===null?b(d,p):R&&R.isColor&&(b(R,1),L=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||L)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Kl)?(v===void 0&&(v=new $i(new ro(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:aa(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,v.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,(_!==R||y!==R.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,_=R,y=R.version,M=r.toneMapping),v.layers.enableAll(),x.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new $i(new ec(2,2),new Ai({name:"BackgroundMaterial",uniforms:aa(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||y!==R.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,_=R,y=R.version,M=r.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function b(x,S){x.getRGB(Nl,jg(r)),s.buffers.color.setClear(Nl.r,Nl.g,Nl.b,S,h)}return{getClearColor:function(){return d},setClearColor:function(x,S=1){d.set(x),p=S,b(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,b(d,p)},render:E}}function TM(r,e,t,s){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),h=s.isWebGL2||l!==null,d={},p=x(null);let m=p,v=!1;function _(j,re,W,te,B){let Q=!1;if(h){const X=b(te,W,re);m!==X&&(m=X,M(m.object)),Q=S(j,te,W,B),Q&&L(j,te,W,B)}else{const X=re.wireframe===!0;(m.geometry!==te.id||m.program!==W.id||m.wireframe!==X)&&(m.geometry=te.id,m.program=W.id,m.wireframe=X,Q=!0)}B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(Q||v)&&(v=!1,le(j,re,W,te),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function y(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function M(j){return s.isWebGL2?r.bindVertexArray(j):l.bindVertexArrayOES(j)}function E(j){return s.isWebGL2?r.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function b(j,re,W){const te=W.wireframe===!0;let B=d[j.id];B===void 0&&(B={},d[j.id]=B);let Q=B[re.id];Q===void 0&&(Q={},B[re.id]=Q);let X=Q[te];return X===void 0&&(X=x(y()),Q[te]=X),X}function x(j){const re=[],W=[],te=[];for(let B=0;B<o;B++)re[B]=0,W[B]=0,te[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:W,attributeDivisors:te,object:j,attributes:{},index:null}}function S(j,re,W,te){const B=m.attributes,Q=re.attributes;let X=0;const N=W.getAttributes();for(const G in N)if(N[G].location>=0){const q=B[G];let oe=Q[G];if(oe===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(oe=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(oe=j.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;X++}return m.attributesNum!==X||m.index!==te}function L(j,re,W,te){const B={},Q=re.attributes;let X=0;const N=W.getAttributes();for(const G in N)if(N[G].location>=0){let q=Q[G];q===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(q=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(q=j.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),B[G]=oe,X++}m.attributes=B,m.attributesNum=X,m.index=te}function R(){const j=m.newAttributes;for(let re=0,W=j.length;re<W;re++)j[re]=0}function D(j){V(j,0)}function V(j,re){const W=m.newAttributes,te=m.enabledAttributes,B=m.attributeDivisors;W[j]=1,te[j]===0&&(r.enableVertexAttribArray(j),te[j]=1),B[j]!==re&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,re),B[j]=re)}function O(){const j=m.newAttributes,re=m.enabledAttributes;for(let W=0,te=re.length;W<te;W++)re[W]!==j[W]&&(r.disableVertexAttribArray(W),re[W]=0)}function k(j,re,W,te,B,Q,X){X===!0?r.vertexAttribIPointer(j,re,W,B,Q):r.vertexAttribPointer(j,re,W,te,B,Q)}function le(j,re,W,te){if(s.isWebGL2===!1&&(j.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const B=te.attributes,Q=W.getAttributes(),X=re.defaultAttributeValues;for(const N in Q){const G=Q[N];if(G.location>=0){let ye=B[N];if(ye===void 0&&(N==="instanceMatrix"&&j.instanceMatrix&&(ye=j.instanceMatrix),N==="instanceColor"&&j.instanceColor&&(ye=j.instanceColor)),ye!==void 0){const q=ye.normalized,oe=ye.itemSize,fe=t.get(ye);if(fe===void 0)continue;const be=fe.buffer,Te=fe.type,Ee=fe.bytesPerElement,Ze=s.isWebGL2===!0&&(Te===r.INT||Te===r.UNSIGNED_INT||ye.gpuType===Mg);if(ye.isInterleavedBufferAttribute){const Je=ye.data,Z=Je.stride,zt=ye.offset;if(Je.isInstancedInterleavedBuffer){for(let Ve=0;Ve<G.locationSize;Ve++)V(G.location+Ve,Je.meshPerAttribute);j.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let Ve=0;Ve<G.locationSize;Ve++)D(G.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Ve=0;Ve<G.locationSize;Ve++)k(G.location+Ve,oe/G.locationSize,Te,q,Z*Ee,(zt+oe/G.locationSize*Ve)*Ee,Ze)}else{if(ye.isInstancedBufferAttribute){for(let Je=0;Je<G.locationSize;Je++)V(G.location+Je,ye.meshPerAttribute);j.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<G.locationSize;Je++)D(G.location+Je);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Je=0;Je<G.locationSize;Je++)k(G.location+Je,oe/G.locationSize,Te,q,oe*Ee,oe/G.locationSize*Je*Ee,Ze)}}else if(X!==void 0){const q=X[N];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(G.location,q);break;case 3:r.vertexAttrib3fv(G.location,q);break;case 4:r.vertexAttrib4fv(G.location,q);break;default:r.vertexAttrib1fv(G.location,q)}}}}O()}function de(){ce();for(const j in d){const re=d[j];for(const W in re){const te=re[W];for(const B in te)E(te[B].object),delete te[B];delete re[W]}delete d[j]}}function T(j){if(d[j.id]===void 0)return;const re=d[j.id];for(const W in re){const te=re[W];for(const B in te)E(te[B].object),delete te[B];delete re[W]}delete d[j.id]}function F(j){for(const re in d){const W=d[re];if(W[j.id]===void 0)continue;const te=W[j.id];for(const B in te)E(te[B].object),delete te[B];delete W[j.id]}}function ce(){ue(),v=!0,m!==p&&(m=p,M(m.object))}function ue(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:_,reset:ce,resetDefaultState:ue,dispose:de,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:D,disableUnusedAttributes:O}}function bM(r,e,t,s){const o=s.isWebGL2;let l;function h(v){l=v}function d(v,_){r.drawArrays(l,v,_),t.update(_,l,1)}function p(v,_,y){if(y===0)return;let M,E;if(o)M=r,E="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[E](l,v,_,y),t.update(_,l,y)}function m(v,_,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<y;E++)this.render(v[E],_[E]);else{M.multiDrawArraysWEBGL(l,v,0,_,0,y);let E=0;for(let b=0;b<y;b++)E+=_[b];t.update(E,l,1)}}this.setMode=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function AM(r,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let d=t.precision!==void 0?t.precision:"highp";const p=l(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=h||e.has("WEBGL_draw_buffers"),v=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,D=h||e.has("OES_texture_float"),V=R&&D,O=h?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:d,logarithmicDepthBuffer:v,maxTextures:_,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:L,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:V,maxSamples:O}}function RM(r){const e=this;let t=null,s=0,o=!1,l=!1;const h=new es,d=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||s!==0||o;return o=y,s=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=v(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,S=r.get(_);if(!o||E===null||E.length===0||l&&!x)l?v(null):m();else{const L=l?0:s,R=L*4;let D=S.clippingState||null;p.value=D,D=v(E,y,R,M);for(let V=0;V!==R;++V)D[V]=t[V];S.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,y,M,E){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=p.value,E!==!0||x===null){const S=M+b*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<S)&&(x=new Float32Array(S));for(let R=0,D=M;R!==b;++R,D+=4)h.copy(_[R]).applyMatrix4(L,d),h.normal.toArray(x,D),x[D+3]=h.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function CM(r){let e=new WeakMap;function t(h,d){return d===bd?h.mapping=ia:d===Ad&&(h.mapping=ra),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===bd||d===Ad)if(e.has(h)){const p=e.get(h).texture;return t(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new jx(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",o),t(m.texture,h.mapping)}else return null}}return h}function o(h){const d=h.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class PM extends Hg{constructor(e=-1,t=1,s=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,h=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,h=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,Pm=[.125,.215,.35,.446,.526,.582],is=20,hd=new PM,Lm=new je;let fd=null,pd=0,md=0;const ts=(1+Math.sqrt(5))/2,Ys=1/ts,Nm=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,ts,Ys),new Y(0,ts,-Ys),new Y(Ys,0,ts),new Y(-Ys,0,ts),new Y(ts,Ys,0),new Y(-ts,Ys,0)];class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,pd,md),e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:eo,format:pi,colorSpace:Ki,depthBuffer:!1},o=Im(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LM(l)),this._blurMaterial=NM(l,e,t)}return o}_compileMaterial(e){const t=new $i(this._lodPlanes[0],e);this._renderer.compile(t,hd)}_sceneToCubeUV(e,t,s,o){const d=new ti(90,1,t,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Lm),v.toneMapping=Pr,v.autoClear=!1;const M=new Og({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),E=new $i(new ro,M);let b=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,b=!0):(M.color.copy(Lm),b=!0);for(let S=0;S<6;S++){const L=S%3;L===0?(d.up.set(0,p[S],0),d.lookAt(m[S],0,0)):L===1?(d.up.set(0,0,p[S]),d.lookAt(0,m[S],0)):(d.up.set(0,p[S],0),d.lookAt(0,0,m[S]));const R=this._cubeSize;Dl(o,L*R,S>2?R:0,R,R),v.setRenderTarget(o),b&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=y,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ia||e.mapping===ra;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const l=o?this._cubemapMaterial:this._equirectMaterial,h=new $i(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Dl(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(h,hd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Nm[(o-1)%Nm.length];this._blur(e,o-1,o,l,h)}t.autoClear=s}_blur(e,t,s,o,l){const h=this._pingPongRenderTarget;this._halfBlur(e,h,t,s,o,"latitudinal",l),this._halfBlur(h,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new $i(this._lodPlanes[o],m),y=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*is-1),b=l/E,x=isFinite(l)?1+Math.floor(v*b):is;x>is&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${is}`);const S=[];let L=0;for(let k=0;k<is;++k){const le=k/b,de=Math.exp(-le*le/2);S.push(de),k===0?L+=de:k<x&&(L+=2*de)}for(let k=0;k<S.length;k++)S[k]=S[k]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-s;const D=this._sizeLods[o],V=3*D*(o>R-Zs?o-R+Zs:0),O=4*(this._cubeSize-D);Dl(t,V,O,3*D,2*D),p.setRenderTarget(t),p.render(_,hd)}}function LM(r){const e=[],t=[],s=[];let o=r;const l=r-Zs+1+Pm.length;for(let h=0;h<l;h++){const d=Math.pow(2,o);t.push(d);let p=1/d;h>r-Zs?p=Pm[h-r+Zs-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,_=1+m,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,b=3,x=2,S=1,L=new Float32Array(b*E*M),R=new Float32Array(x*E*M),D=new Float32Array(S*E*M);for(let O=0;O<M;O++){const k=O%3*2/3-1,le=O>2?0:-1,de=[k,le,0,k+2/3,le,0,k+2/3,le+1,0,k,le,0,k+2/3,le+1,0,k,le+1,0];L.set(de,b*E*O),R.set(y,x*E*O);const T=[O,O,O,O,O,O];D.set(T,S*E*O)}const V=new gi;V.setAttribute("position",new mi(L,b)),V.setAttribute("uv",new mi(R,x)),V.setAttribute("faceIndex",new mi(D,S)),e.push(V),o>Zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Im(r,e,t){const s=new cs(r,e,t);return s.texture.mapping=Kl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function NM(r,e,t){const s=new Float32Array(is),o=new Y(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Um(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Fm(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function DM(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===bd||p===Ad,v=p===ia||p===ra;if(m||v)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let _=e.get(d);return t===null&&(t=new Dm(r)),_=m?t.fromEquirectangular(d,_):t.fromCubemap(d,_),e.set(d,_),_.texture}else{if(e.has(d))return e.get(d).texture;{const _=d.image;if(m&&_&&_.height>0||v&&_&&o(_)){t===null&&(t=new Dm(r));const y=m?t.fromEquirectangular(d):t.fromCubemap(d);return e.set(d,y),d.addEventListener("dispose",l),y.texture}else return null}}}return d}function o(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:h}}function IM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function UM(r,e,t,s){const o={},l=new WeakMap;function h(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const b=y.morphAttributes[E];for(let x=0,S=b.length;x<S;x++)e.remove(b[x])}y.removeEventListener("dispose",h),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",h),o[y.id]=!0,t.memory.geometries++),y}function p(_){const y=_.attributes;for(const E in y)e.update(y[E],r.ARRAY_BUFFER);const M=_.morphAttributes;for(const E in M){const b=M[E];for(let x=0,S=b.length;x<S;x++)e.update(b[x],r.ARRAY_BUFFER)}}function m(_){const y=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const L=M.array;b=M.version;for(let R=0,D=L.length;R<D;R+=3){const V=L[R+0],O=L[R+1],k=L[R+2];y.push(V,O,O,k,k,V)}}else if(E!==void 0){const L=E.array;b=E.version;for(let R=0,D=L.length/3-1;R<D;R+=3){const V=R+0,O=R+1,k=R+2;y.push(V,O,O,k,k,V)}}else return;const x=new(Lg(y)?Bg:zg)(y,1);x.version=b;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function v(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function FM(r,e,t,s){const o=s.isWebGL2;let l;function h(M){l=M}let d,p;function m(M){d=M.type,p=M.bytesPerElement}function v(M,E){r.drawElements(l,E,d,M*p),t.update(E,l,1)}function _(M,E,b){if(b===0)return;let x,S;if(o)x=r,S="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](l,E,d,M*p,b),t.update(E,l,b)}function y(M,E,b){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<b;S++)this.render(M[S]/p,E[S]);else{x.multiDrawElementsWEBGL(l,E,0,d,M,0,b);let S=0;for(let L=0;L<b;L++)S+=E[L];t.update(S,l,1)}}this.setMode=h,this.setIndex=m,this.render=v,this.renderInstances=_,this.renderMultiDraw=y}function kM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,h,d){switch(t.calls++,h){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function OM(r,e){return r[0]-e[0]}function zM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function BM(r,e,t){const s={},o=new Float32Array(8),l=new WeakMap,h=new on,d=[];for(let m=0;m<8;m++)d[m]=[m,0];function p(m,v,_){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const E=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,b=E!==void 0?E.length:0;let x=l.get(v);if(x===void 0||x.count!==b){let re=function(){ue.dispose(),l.delete(v),v.removeEventListener("dispose",re)};var M=re;x!==void 0&&x.texture.dispose();const R=v.morphAttributes.position!==void 0,D=v.morphAttributes.normal!==void 0,V=v.morphAttributes.color!==void 0,O=v.morphAttributes.position||[],k=v.morphAttributes.normal||[],le=v.morphAttributes.color||[];let de=0;R===!0&&(de=1),D===!0&&(de=2),V===!0&&(de=3);let T=v.attributes.position.count*de,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ce=new Float32Array(T*F*4*b),ue=new Ig(ce,T,F,b);ue.type=Xi,ue.needsUpdate=!0;const j=de*4;for(let W=0;W<b;W++){const te=O[W],B=k[W],Q=le[W],X=T*F*4*W;for(let N=0;N<te.count;N++){const G=N*j;R===!0&&(h.fromBufferAttribute(te,N),ce[X+G+0]=h.x,ce[X+G+1]=h.y,ce[X+G+2]=h.z,ce[X+G+3]=0),D===!0&&(h.fromBufferAttribute(B,N),ce[X+G+4]=h.x,ce[X+G+5]=h.y,ce[X+G+6]=h.z,ce[X+G+7]=0),V===!0&&(h.fromBufferAttribute(Q,N),ce[X+G+8]=h.x,ce[X+G+9]=h.y,ce[X+G+10]=h.z,ce[X+G+11]=Q.itemSize===4?h.w:1)}}x={count:b,texture:ue,size:new wt(T,F)},l.set(v,x),v.addEventListener("dispose",re)}let S=0;for(let R=0;R<y.length;R++)S+=y[R];const L=v.morphTargetsRelative?1:1-S;_.getUniforms().setValue(r,"morphTargetBaseInfluence",L),_.getUniforms().setValue(r,"morphTargetInfluences",y),_.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const E=y===void 0?0:y.length;let b=s[v.id];if(b===void 0||b.length!==E){b=[];for(let D=0;D<E;D++)b[D]=[D,0];s[v.id]=b}for(let D=0;D<E;D++){const V=b[D];V[0]=D,V[1]=y[D]}b.sort(zM);for(let D=0;D<8;D++)D<E&&b[D][1]?(d[D][0]=b[D][0],d[D][1]=b[D][1]):(d[D][0]=Number.MAX_SAFE_INTEGER,d[D][1]=0);d.sort(OM);const x=v.morphAttributes.position,S=v.morphAttributes.normal;let L=0;for(let D=0;D<8;D++){const V=d[D],O=V[0],k=V[1];O!==Number.MAX_SAFE_INTEGER&&k?(x&&v.getAttribute("morphTarget"+D)!==x[O]&&v.setAttribute("morphTarget"+D,x[O]),S&&v.getAttribute("morphNormal"+D)!==S[O]&&v.setAttribute("morphNormal"+D,S[O]),o[D]=k,L+=k):(x&&v.hasAttribute("morphTarget"+D)===!0&&v.deleteAttribute("morphTarget"+D),S&&v.hasAttribute("morphNormal"+D)===!0&&v.deleteAttribute("morphNormal"+D),o[D]=0)}const R=v.morphTargetsRelative?1:1-L;_.getUniforms().setValue(r,"morphTargetBaseInfluence",R),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:p}}function jM(r,e,t,s){let o=new WeakMap;function l(p){const m=s.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return _}function h(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:h}}class Xg extends kn{constructor(e,t,s,o,l,h,d,p,m,v){if(v=v!==void 0?v:as,v!==as&&v!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===as&&(s=Ar),s===void 0&&v===sa&&(s=ss),super(null,o,l,h,d,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:wn,this.minFilter=p!==void 0?p:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qg=new kn,Yg=new Xg(1,1);Yg.compareFunction=Pg;const $g=new Ig,Kg=new Ex,Zg=new Gg,km=[],Om=[],zm=new Float32Array(16),Bm=new Float32Array(9),jm=new Float32Array(4);function ca(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=km[o];if(l===void 0&&(l=new Float32Array(o),km[o]=l),e!==0){s.toArray(l,0);for(let h=1,d=0;h!==e;++h)d+=t,r[h].toArray(l,d)}return l}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function tc(r,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function HM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function WM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function XM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;jm.set(s),r.uniformMatrix2fv(this.addr,!1,jm),Qt(t,s)}}function qM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;Bm.set(s),r.uniformMatrix3fv(this.addr,!1,Bm),Qt(t,s)}}function YM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,s))return;zm.set(s),r.uniformMatrix4fv(this.addr,!1,zm),Qt(t,s)}}function $M(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function JM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function iw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);const l=this.type===r.SAMPLER_2D_SHADOW?Yg:qg;t.setTexture2D(e||l,o)}function rw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Kg,o)}function sw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Zg,o)}function aw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||$g,o)}function ow(r){switch(r){case 5126:return HM;case 35664:return GM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return KM;case 35668:case 35672:return ZM;case 35669:case 35673:return QM;case 5125:return JM;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}function lw(r,e){r.uniform1fv(this.addr,e)}function cw(r,e){const t=ca(e,this.size,2);r.uniform2fv(this.addr,t)}function uw(r,e){const t=ca(e,this.size,3);r.uniform3fv(this.addr,t)}function dw(r,e){const t=ca(e,this.size,4);r.uniform4fv(this.addr,t)}function hw(r,e){const t=ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fw(r,e){const t=ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pw(r,e){const t=ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mw(r,e){r.uniform1iv(this.addr,e)}function gw(r,e){r.uniform2iv(this.addr,e)}function vw(r,e){r.uniform3iv(this.addr,e)}function _w(r,e){r.uniform4iv(this.addr,e)}function xw(r,e){r.uniform1uiv(this.addr,e)}function yw(r,e){r.uniform2uiv(this.addr,e)}function Sw(r,e){r.uniform3uiv(this.addr,e)}function Mw(r,e){r.uniform4uiv(this.addr,e)}function ww(r,e,t){const s=this.cache,o=e.length,l=tc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2D(e[h]||qg,l[h])}function Ew(r,e,t){const s=this.cache,o=e.length,l=tc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture3D(e[h]||Kg,l[h])}function Tw(r,e,t){const s=this.cache,o=e.length,l=tc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTextureCube(e[h]||Zg,l[h])}function bw(r,e,t){const s=this.cache,o=e.length,l=tc(t,o);Zt(s,l)||(r.uniform1iv(this.addr,l),Qt(s,l));for(let h=0;h!==o;++h)t.setTexture2DArray(e[h]||$g,l[h])}function Aw(r){switch(r){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return dw;case 35674:return hw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return bw}}class Rw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=ow(t.type)}}class Cw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Aw(t.type)}}class Pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Hm(r,e){r.seq.push(e),r.map[e.id]=e}function Lw(r,e,t){const s=r.name,o=s.length;for(gd.lastIndex=0;;){const l=gd.exec(s),h=gd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===o){Hm(t,m===void 0?new Rw(d,r,e):new Cw(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new Pw(d),Hm(t,_)),t=_}}}class jl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),h=e.getUniformLocation(t,l.name);Lw(l,h,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,h=t.length;l!==h;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const h=e[o];h.id in t&&s.push(h)}return s}}function Gm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Nw=37297;let Dw=0;function Iw(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let h=o;h<l;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${t[h]}`)}return s.join(`
`)}function Uw(r){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(r);let s;switch(e===t?s="":e===Xl&&t===Wl?s="LinearDisplayP3ToLinearSRGB":e===Wl&&t===Xl&&(s="LinearSRGBToLinearDisplayP3"),r){case Ki:case Zl:return[s,"LinearTransferOETF"];case an:case Hd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Vm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const h=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+Iw(r.getShaderSource(e),h)}else return o}function Fw(r,e){const t=Uw(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kw(r,e){let t;switch(e){case Y_:t="Linear";break;case $_:t="Reinhard";break;case K_:t="OptimizedCineon";break;case yg:t="ACESFilmic";break;case Q_:t="AgX";break;case Z_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ow(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function zw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Bw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function jw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),h=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[h]={type:l.type,location:r.getAttribLocation(e,h),locationSize:d}}return t}function Qs(r){return r!==""}function Wm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(r){return r.replace(Hw,Vw)}const Gw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vw(r,e){let t=dt[e];if(t===void 0){const s=Gw.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(r){return r.replace(Ww,Xw)}function Xw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Ym(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function qw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===M_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Yw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ia:case ra:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $w(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ra:e="ENVMAP_MODE_REFRACTION";break}return e}function Kw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case X_:e="ENVMAP_BLENDING_MIX";break;case q_:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Qw(r,e,t,s){const o=r.getContext(),l=t.defines;let h=t.vertexShader,d=t.fragmentShader;const p=qw(t),m=Yw(t),v=$w(t),_=Kw(t),y=Zw(t),M=t.isWebGL2?"":Ow(t),E=zw(t),b=Bw(l),x=o.createProgram();let S,L,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Qs).join(`
`),S.length>0&&(S+=`
`),L=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Qs).join(`
`),L.length>0&&(L+=`
`)):(S=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),L=[M,Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?dt.tonemapping_pars_fragment:"",t.toneMapping!==Pr?kw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Fw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),h=Dd(h),h=Wm(h,t),h=Xm(h,t),d=Dd(d),d=Wm(d,t),d=Xm(d,t),h=qm(h),d=qm(d),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,L=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const D=R+S+h,V=R+L+d,O=Gm(o,o.VERTEX_SHADER,D),k=Gm(o,o.FRAGMENT_SHADER,V);o.attachShader(x,O),o.attachShader(x,k),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function le(ce){if(r.debug.checkShaderErrors){const ue=o.getProgramInfoLog(x).trim(),j=o.getShaderInfoLog(O).trim(),re=o.getShaderInfoLog(k).trim();let W=!0,te=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,x,O,k);else{const B=Vm(o,O,"vertex"),Q=Vm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+ce.name+`
Material Type: `+ce.type+`

Program Info Log: `+ue+`
`+B+`
`+Q)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(j===""||re==="")&&(te=!1);te&&(ce.diagnostics={runnable:W,programLog:ue,vertexShader:{log:j,prefix:S},fragmentShader:{log:re,prefix:L}})}o.deleteShader(O),o.deleteShader(k),de=new jl(o,x),T=jw(o,x)}let de;this.getUniforms=function(){return de===void 0&&le(this),de};let T;this.getAttributes=function(){return T===void 0&&le(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=o.getProgramParameter(x,Nw)),F},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=k,this}let Jw=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new t1(e),t.set(e,s)),s}}class t1{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function n1(r,e,t,s,o,l,h){const d=new Fg,p=new e1,m=new Set,v=[],_=o.isWebGL2,y=o.logarithmicDepthBuffer,M=o.vertexTextures;let E=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return m.add(T),T===0?"uv":`uv${T}`}function S(T,F,ce,ue,j){const re=ue.fog,W=j.geometry,te=T.isMeshStandardMaterial?ue.environment:null,B=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),Q=B&&B.mapping===Kl?B.image.height:null,X=b[T.type];T.precision!==null&&(E=o.getMaxPrecision(T.precision),E!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const N=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,G=N!==void 0?N.length:0;let ye=0;W.morphAttributes.position!==void 0&&(ye=1),W.morphAttributes.normal!==void 0&&(ye=2),W.morphAttributes.color!==void 0&&(ye=3);let q,oe,fe,be;if(X){const bt=Ei[X];q=bt.vertexShader,oe=bt.fragmentShader}else q=T.vertexShader,oe=T.fragmentShader,p.update(T),fe=p.getVertexShaderID(T),be=p.getFragmentShaderID(T);const Te=r.getRenderTarget(),Ee=j.isInstancedMesh===!0,Ze=j.isBatchedMesh===!0,Je=!!T.map,Z=!!T.matcap,zt=!!B,Ve=!!T.aoMap,et=!!T.lightMap,Ge=!!T.bumpMap,Ct=!!T.normalMap,st=!!T.displacementMap,P=!!T.emissiveMap,A=!!T.metalnessMap,ee=!!T.roughnessMap,_e=T.anisotropy>0,ge=T.clearcoat>0,xe=T.iridescence>0,ze=T.sheen>0,Ce=T.transmission>0,Ie=_e&&!!T.anisotropyMap,qe=ge&&!!T.clearcoatMap,ot=ge&&!!T.clearcoatNormalMap,me=ge&&!!T.clearcoatRoughnessMap,mt=xe&&!!T.iridescenceMap,ht=xe&&!!T.iridescenceThicknessMap,tt=ze&&!!T.sheenColorMap,We=ze&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,it=!!T.specularColorMap,_t=!!T.specularIntensityMap,Tt=Ce&&!!T.transmissionMap,ct=Ce&&!!T.thicknessMap,Et=!!T.gradientMap,U=!!T.alphaMap,Se=T.alphaTest>0,we=!!T.alphaHash,Oe=!!T.extensions;let Xe=Pr;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const yt={isWebGL2:_,shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:q,fragmentShader:oe,defines:T.defines,customVertexShaderID:fe,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:Ze,instancing:Ee,instancingColor:Ee&&j.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ki,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:Z,envMap:zt,envMapMode:zt&&B.mapping,envMapCubeUVHeight:Q,aoMap:Ve,lightMap:et,bumpMap:Ge,normalMap:Ct,displacementMap:M&&st,emissiveMap:P,normalMapObjectSpace:Ct&&T.normalMapType===ux,normalMapTangentSpace:Ct&&T.normalMapType===cx,metalnessMap:A,roughnessMap:ee,anisotropy:_e,anisotropyMap:Ie,clearcoat:ge,clearcoatMap:qe,clearcoatNormalMap:ot,clearcoatRoughnessMap:me,iridescence:xe,iridescenceMap:mt,iridescenceThicknessMap:ht,sheen:ze,sheenColorMap:tt,sheenRoughnessMap:We,specularMap:Fe,specularColorMap:it,specularIntensityMap:_t,transmission:Ce,transmissionMap:Tt,thicknessMap:ct,gradientMap:Et,opaque:T.transparent===!1&&T.blending===Js&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:Se,alphaHash:we,combine:T.combine,mapUv:Je&&x(T.map.channel),aoMapUv:Ve&&x(T.aoMap.channel),lightMapUv:et&&x(T.lightMap.channel),bumpMapUv:Ge&&x(T.bumpMap.channel),normalMapUv:Ct&&x(T.normalMap.channel),displacementMapUv:st&&x(T.displacementMap.channel),emissiveMapUv:P&&x(T.emissiveMap.channel),metalnessMapUv:A&&x(T.metalnessMap.channel),roughnessMapUv:ee&&x(T.roughnessMap.channel),anisotropyMapUv:Ie&&x(T.anisotropyMap.channel),clearcoatMapUv:qe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(T.sheenRoughnessMap.channel),specularMapUv:Fe&&x(T.specularMap.channel),specularColorMapUv:it&&x(T.specularColorMap.channel),specularIntensityMapUv:_t&&x(T.specularIntensityMap.channel),transmissionMapUv:Tt&&x(T.transmissionMap.channel),thicknessMapUv:ct&&x(T.thicknessMap.channel),alphaMapUv:U&&x(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ct||_e),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(Je||U),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ye,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ce.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wi,flipSided:T.side===Fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Oe&&T.extensions.derivatives===!0,extensionFragDepth:Oe&&T.extensions.fragDepth===!0,extensionDrawBuffers:Oe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Oe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&T.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return yt.vertexUv1s=m.has(1),yt.vertexUv2s=m.has(2),yt.vertexUv3s=m.has(3),m.clear(),yt}function L(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)F.push(ce),F.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(R(F,T),D(F,T),F.push(r.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function R(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function D(T,F){d.disableAll(),F.isWebGL2&&d.enable(0),F.supportsVertexTextures&&d.enable(1),F.instancing&&d.enable(2),F.instancingColor&&d.enable(3),F.matcap&&d.enable(4),F.envMap&&d.enable(5),F.normalMapObjectSpace&&d.enable(6),F.normalMapTangentSpace&&d.enable(7),F.clearcoat&&d.enable(8),F.iridescence&&d.enable(9),F.alphaTest&&d.enable(10),F.vertexColors&&d.enable(11),F.vertexAlphas&&d.enable(12),F.vertexUv1s&&d.enable(13),F.vertexUv2s&&d.enable(14),F.vertexUv3s&&d.enable(15),F.vertexTangents&&d.enable(16),F.anisotropy&&d.enable(17),F.alphaHash&&d.enable(18),F.batching&&d.enable(19),T.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.skinning&&d.enable(4),F.morphTargets&&d.enable(5),F.morphNormals&&d.enable(6),F.morphColors&&d.enable(7),F.premultipliedAlpha&&d.enable(8),F.shadowMapEnabled&&d.enable(9),F.useLegacyLights&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.alphaToCoverage&&d.enable(20),T.push(d.mask)}function V(T){const F=b[T.type];let ce;if(F){const ue=Ei[F];ce=kx.clone(ue.uniforms)}else ce=T.uniforms;return ce}function O(T,F){let ce;for(let ue=0,j=v.length;ue<j;ue++){const re=v[ue];if(re.cacheKey===F){ce=re,++ce.usedTimes;break}}return ce===void 0&&(ce=new Qw(r,F,T,l),v.push(ce)),ce}function k(T){if(--T.usedTimes===0){const F=v.indexOf(T);v[F]=v[v.length-1],v.pop(),T.destroy()}}function le(T){p.remove(T)}function de(){p.dispose()}return{getParameters:S,getProgramCacheKey:L,getUniforms:V,acquireProgram:O,releaseProgram:k,releaseShaderCache:le,programs:v,dispose:de}}function i1(){let r=new WeakMap;function e(l){let h=r.get(l);return h===void 0&&(h={},r.set(l,h)),h}function t(l){r.delete(l)}function s(l,h,d){r.get(l)[h]=d}function o(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function r1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $m(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Km(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function h(_,y,M,E,b,x){let S=r[e];return S===void 0?(S={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:x},r[e]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=M,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=b,S.group=x),e++,S}function d(_,y,M,E,b,x){const S=h(_,y,M,E,b,x);M.transmission>0?s.push(S):M.transparent===!0?o.push(S):t.push(S)}function p(_,y,M,E,b,x){const S=h(_,y,M,E,b,x);M.transmission>0?s.unshift(S):M.transparent===!0?o.unshift(S):t.unshift(S)}function m(_,y){t.length>1&&t.sort(_||r1),s.length>1&&s.sort(y||$m),o.length>1&&o.sort(y||$m)}function v(){for(let _=e,y=r.length;_<y;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:p,finish:v,sort:m}}function s1(){let r=new WeakMap;function e(s,o){const l=r.get(s);let h;return l===void 0?(h=new Km,r.set(s,[h])):o>=l.length?(h=new Km,l.push(h)):h=l[o],h}function t(){r=new WeakMap}return{get:e,dispose:t}}function a1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new je};break;case"SpotLight":t={position:new Y,direction:new Y,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function o1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let l1=0;function c1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function u1(r,e){const t=new a1,s=o1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)o.probe.push(new Y);const l=new Y,h=new Kt,d=new Kt;function p(v,_){let y=0,M=0,E=0;for(let ce=0;ce<9;ce++)o.probe[ce].set(0,0,0);let b=0,x=0,S=0,L=0,R=0,D=0,V=0,O=0,k=0,le=0,de=0;v.sort(c1);const T=_===!0?Math.PI:1;for(let ce=0,ue=v.length;ce<ue;ce++){const j=v[ce],re=j.color,W=j.intensity,te=j.distance,B=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)y+=re.r*W*T,M+=re.g*W*T,E+=re.b*W*T;else if(j.isLightProbe){for(let Q=0;Q<9;Q++)o.probe[Q].addScaledVector(j.sh.coefficients[Q],W);de++}else if(j.isDirectionalLight){const Q=t.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity*T),j.castShadow){const X=j.shadow,N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,o.directionalShadow[b]=N,o.directionalShadowMap[b]=B,o.directionalShadowMatrix[b]=j.shadow.matrix,D++}o.directional[b]=Q,b++}else if(j.isSpotLight){const Q=t.get(j);Q.position.setFromMatrixPosition(j.matrixWorld),Q.color.copy(re).multiplyScalar(W*T),Q.distance=te,Q.coneCos=Math.cos(j.angle),Q.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Q.decay=j.decay,o.spot[S]=Q;const X=j.shadow;if(j.map&&(o.spotLightMap[k]=j.map,k++,X.updateMatrices(j),j.castShadow&&le++),o.spotLightMatrix[S]=X.matrix,j.castShadow){const N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,o.spotShadow[S]=N,o.spotShadowMap[S]=B,O++}S++}else if(j.isRectAreaLight){const Q=t.get(j);Q.color.copy(re).multiplyScalar(W),Q.halfWidth.set(j.width*.5,0,0),Q.halfHeight.set(0,j.height*.5,0),o.rectArea[L]=Q,L++}else if(j.isPointLight){const Q=t.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity*T),Q.distance=j.distance,Q.decay=j.decay,j.castShadow){const X=j.shadow,N=s.get(j);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,o.pointShadow[x]=N,o.pointShadowMap[x]=B,o.pointShadowMatrix[x]=j.shadow.matrix,V++}o.point[x]=Q,x++}else if(j.isHemisphereLight){const Q=t.get(j);Q.skyColor.copy(j.color).multiplyScalar(W*T),Q.groundColor.copy(j.groundColor).multiplyScalar(W*T),o.hemi[R]=Q,R++}}L>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=y,o.ambient[1]=M,o.ambient[2]=E;const F=o.hash;(F.directionalLength!==b||F.pointLength!==x||F.spotLength!==S||F.rectAreaLength!==L||F.hemiLength!==R||F.numDirectionalShadows!==D||F.numPointShadows!==V||F.numSpotShadows!==O||F.numSpotMaps!==k||F.numLightProbes!==de)&&(o.directional.length=b,o.spot.length=S,o.rectArea.length=L,o.point.length=x,o.hemi.length=R,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=V,o.pointShadowMap.length=V,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=V,o.spotLightMatrix.length=O+k-le,o.spotLightMap.length=k,o.numSpotLightShadowsWithMaps=le,o.numLightProbes=de,F.directionalLength=b,F.pointLength=x,F.spotLength=S,F.rectAreaLength=L,F.hemiLength=R,F.numDirectionalShadows=D,F.numPointShadows=V,F.numSpotShadows=O,F.numSpotMaps=k,F.numLightProbes=de,o.version=l1++)}function m(v,_){let y=0,M=0,E=0,b=0,x=0;const S=_.matrixWorldInverse;for(let L=0,R=v.length;L<R;L++){const D=v[L];if(D.isDirectionalLight){const V=o.directional[y];V.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(S),y++}else if(D.isSpotLight){const V=o.spot[E];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(S),V.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const V=o.rectArea[b];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(S),d.identity(),h.copy(D.matrixWorld),h.premultiply(S),d.extractRotation(h),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),V.halfWidth.applyMatrix4(d),V.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const V=o.point[M];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(S),M++}else if(D.isHemisphereLight){const V=o.hemi[x];V.direction.setFromMatrixPosition(D.matrixWorld),V.direction.transformDirection(S),x++}}}return{setup:p,setupView:m,state:o}}function Zm(r,e){const t=new u1(r,e),s=[],o=[];function l(){s.length=0,o.length=0}function h(_){s.push(_)}function d(_){o.push(_)}function p(_){t.setup(s,_)}function m(_){t.setupView(s,_)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:p,setupLightsView:m,pushLight:h,pushShadow:d}}function d1(r,e){let t=new WeakMap;function s(l,h=0){const d=t.get(l);let p;return d===void 0?(p=new Zm(r,e),t.set(l,[p])):h>=d.length?(p=new Zm(r,e),d.push(p)):p=d[h],p}function o(){t=new WeakMap}return{get:s,dispose:o}}class h1 extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
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
}`;function g1(r,e,t){let s=new Vg;const o=new wt,l=new wt,h=new on,d=new h1({depthPacking:lx}),p=new f1,m={},v=t.maxTextureSize,_={[Dr]:Fn,[Fn]:Dr,[Wi]:Wi},y=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $i(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let S=this.type;this.render=function(O,k,le){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const de=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(Cr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ue=S!==Vi&&this.type===Vi,j=S===Vi&&this.type!==Vi;for(let re=0,W=O.length;re<W;re++){const te=O[re],B=te.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const Q=B.getFrameExtents();if(o.multiply(Q),l.copy(B.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Q.x),o.x=l.x*Q.x,B.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Q.y),o.y=l.y*Q.y,B.mapSize.y=l.y)),B.map===null||ue===!0||j===!0){const N=this.type!==Vi?{minFilter:wn,magFilter:wn}:{};B.map!==null&&B.map.dispose(),B.map=new cs(o.x,o.y,N),B.map.texture.name=te.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const X=B.getViewportCount();for(let N=0;N<X;N++){const G=B.getViewport(N);h.set(l.x*G.x,l.y*G.y,l.x*G.z,l.y*G.w),ce.viewport(h),B.updateMatrices(te,N),s=B.getFrustum(),D(k,le,B.camera,te,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&L(B,le),B.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(de,T,F)};function L(O,k){const le=e.update(b);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new cs(o.x,o.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(k,null,le,y,b,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(k,null,le,M,b,null)}function R(O,k,le,de){let T=null;const F=le.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)T=F;else if(T=le.isPointLight===!0?p:d,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ce=T.uuid,ue=k.uuid;let j=m[ce];j===void 0&&(j={},m[ce]=j);let re=j[ue];re===void 0&&(re=T.clone(),j[ue]=re,k.addEventListener("dispose",V)),T=re}if(T.visible=k.visible,T.wireframe=k.wireframe,de===Vi?T.side=k.shadowSide!==null?k.shadowSide:k.side:T.side=k.shadowSide!==null?k.shadowSide:_[k.side],T.alphaMap=k.alphaMap,T.alphaTest=k.alphaTest,T.map=k.map,T.clipShadows=k.clipShadows,T.clippingPlanes=k.clippingPlanes,T.clipIntersection=k.clipIntersection,T.displacementMap=k.displacementMap,T.displacementScale=k.displacementScale,T.displacementBias=k.displacementBias,T.wireframeLinewidth=k.wireframeLinewidth,T.linewidth=k.linewidth,le.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ce=r.properties.get(T);ce.light=le}return T}function D(O,k,le,de,T){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Vi)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,O.matrixWorld);const ue=e.update(O),j=O.material;if(Array.isArray(j)){const re=ue.groups;for(let W=0,te=re.length;W<te;W++){const B=re[W],Q=j[B.materialIndex];if(Q&&Q.visible){const X=R(O,Q,de,T);O.onBeforeShadow(r,O,k,le,ue,X,B),r.renderBufferDirect(le,null,ue,X,O,B),O.onAfterShadow(r,O,k,le,ue,X,B)}}}else if(j.visible){const re=R(O,j,de,T);O.onBeforeShadow(r,O,k,le,ue,re,null),r.renderBufferDirect(le,null,ue,re,O,null),O.onAfterShadow(r,O,k,le,ue,re,null)}}const ce=O.children;for(let ue=0,j=ce.length;ue<j;ue++)D(ce[ue],k,le,de,T)}function V(O){O.target.removeEventListener("dispose",V);for(const le in m){const de=m[le],T=O.target.uuid;T in de&&(de[T].dispose(),delete de[T])}}}function v1(r,e,t){const s=t.isWebGL2;function o(){let U=!1;const Se=new on;let we=null;const Oe=new on(0,0,0,0);return{setMask:function(Xe){we!==Xe&&!U&&(r.colorMask(Xe,Xe,Xe,Xe),we=Xe)},setLocked:function(Xe){U=Xe},setClear:function(Xe,yt,bt,Ht,vn){vn===!0&&(Xe*=Ht,yt*=Ht,bt*=Ht),Se.set(Xe,yt,bt,Ht),Oe.equals(Se)===!1&&(r.clearColor(Xe,yt,bt,Ht),Oe.copy(Se))},reset:function(){U=!1,we=null,Oe.set(-1,0,0,0)}}}function l(){let U=!1,Se=null,we=null,Oe=null;return{setTest:function(Xe){Xe?Ee(r.DEPTH_TEST):Ze(r.DEPTH_TEST)},setMask:function(Xe){Se!==Xe&&!U&&(r.depthMask(Xe),Se=Xe)},setFunc:function(Xe){if(we!==Xe){switch(Xe){case z_:r.depthFunc(r.NEVER);break;case B_:r.depthFunc(r.ALWAYS);break;case j_:r.depthFunc(r.LESS);break;case Gl:r.depthFunc(r.LEQUAL);break;case H_:r.depthFunc(r.EQUAL);break;case G_:r.depthFunc(r.GEQUAL);break;case V_:r.depthFunc(r.GREATER);break;case W_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=Xe}},setLocked:function(Xe){U=Xe},setClear:function(Xe){Oe!==Xe&&(r.clearDepth(Xe),Oe=Xe)},reset:function(){U=!1,Se=null,we=null,Oe=null}}}function h(){let U=!1,Se=null,we=null,Oe=null,Xe=null,yt=null,bt=null,Ht=null,vn=null;return{setTest:function(St){U||(St?Ee(r.STENCIL_TEST):Ze(r.STENCIL_TEST))},setMask:function(St){Se!==St&&!U&&(r.stencilMask(St),Se=St)},setFunc:function(St,qt,ln){(we!==St||Oe!==qt||Xe!==ln)&&(r.stencilFunc(St,qt,ln),we=St,Oe=qt,Xe=ln)},setOp:function(St,qt,ln){(yt!==St||bt!==qt||Ht!==ln)&&(r.stencilOp(St,qt,ln),yt=St,bt=qt,Ht=ln)},setLocked:function(St){U=St},setClear:function(St){vn!==St&&(r.clearStencil(St),vn=St)},reset:function(){U=!1,Se=null,we=null,Oe=null,Xe=null,yt=null,bt=null,Ht=null,vn=null}}}const d=new o,p=new l,m=new h,v=new WeakMap,_=new WeakMap;let y={},M={},E=new WeakMap,b=[],x=null,S=!1,L=null,R=null,D=null,V=null,O=null,k=null,le=null,de=new je(0,0,0),T=0,F=!1,ce=null,ue=null,j=null,re=null,W=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=Q>=2);let N=null,G={};const ye=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),oe=new on().fromArray(ye),fe=new on().fromArray(q);function be(U,Se,we,Oe){const Xe=new Uint8Array(4),yt=r.createTexture();r.bindTexture(U,yt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<we;bt++)s&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Xe):r.texImage2D(Se+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Xe);return yt}const Te={};Te[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Te[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),p.setClear(1),m.setClear(0),Ee(r.DEPTH_TEST),p.setFunc(Gl),st(!1),P(Lp),Ee(r.CULL_FACE),Ge(Cr);function Ee(U){y[U]!==!0&&(r.enable(U),y[U]=!0)}function Ze(U){y[U]!==!1&&(r.disable(U),y[U]=!1)}function Je(U,Se){return M[U]!==Se?(r.bindFramebuffer(U,Se),M[U]=Se,s&&(U===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=Se),U===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Z(U,Se){let we=b,Oe=!1;if(U)if(we=E.get(Se),we===void 0&&(we=[],E.set(Se,we)),U.isWebGLMultipleRenderTargets){const Xe=U.texture;if(we.length!==Xe.length||we[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,bt=Xe.length;yt<bt;yt++)we[yt]=r.COLOR_ATTACHMENT0+yt;we.length=Xe.length,Oe=!0}}else we[0]!==r.COLOR_ATTACHMENT0&&(we[0]=r.COLOR_ATTACHMENT0,Oe=!0);else we[0]!==r.BACK&&(we[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function zt(U){return x!==U?(r.useProgram(U),x=U,!0):!1}const Ve={[ns]:r.FUNC_ADD,[E_]:r.FUNC_SUBTRACT,[T_]:r.FUNC_REVERSE_SUBTRACT};if(s)Ve[Ip]=r.MIN,Ve[Up]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ve[Ip]=U.MIN_EXT,Ve[Up]=U.MAX_EXT)}const et={[b_]:r.ZERO,[A_]:r.ONE,[R_]:r.SRC_COLOR,[Ed]:r.SRC_ALPHA,[I_]:r.SRC_ALPHA_SATURATE,[N_]:r.DST_COLOR,[P_]:r.DST_ALPHA,[C_]:r.ONE_MINUS_SRC_COLOR,[Td]:r.ONE_MINUS_SRC_ALPHA,[D_]:r.ONE_MINUS_DST_COLOR,[L_]:r.ONE_MINUS_DST_ALPHA,[U_]:r.CONSTANT_COLOR,[F_]:r.ONE_MINUS_CONSTANT_COLOR,[k_]:r.CONSTANT_ALPHA,[O_]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(U,Se,we,Oe,Xe,yt,bt,Ht,vn,St){if(U===Cr){S===!0&&(Ze(r.BLEND),S=!1);return}if(S===!1&&(Ee(r.BLEND),S=!0),U!==w_){if(U!==L||St!==F){if((R!==ns||O!==ns)&&(r.blendEquation(r.FUNC_ADD),R=ns,O=ns),St)switch(U){case Js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.ONE,r.ONE);break;case Np:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ja:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Np:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}D=null,V=null,k=null,le=null,de.set(0,0,0),T=0,L=U,F=St}return}Xe=Xe||Se,yt=yt||we,bt=bt||Oe,(Se!==R||Xe!==O)&&(r.blendEquationSeparate(Ve[Se],Ve[Xe]),R=Se,O=Xe),(we!==D||Oe!==V||yt!==k||bt!==le)&&(r.blendFuncSeparate(et[we],et[Oe],et[yt],et[bt]),D=we,V=Oe,k=yt,le=bt),(Ht.equals(de)===!1||vn!==T)&&(r.blendColor(Ht.r,Ht.g,Ht.b,vn),de.copy(Ht),T=vn),L=U,F=!1}function Ct(U,Se){U.side===Wi?Ze(r.CULL_FACE):Ee(r.CULL_FACE);let we=U.side===Fn;Se&&(we=!we),st(we),U.blending===Js&&U.transparent===!1?Ge(Cr):Ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),p.setFunc(U.depthFunc),p.setTest(U.depthTest),p.setMask(U.depthWrite),d.setMask(U.colorWrite);const Oe=U.stencilWrite;m.setTest(Oe),Oe&&(m.setMask(U.stencilWriteMask),m.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),m.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Ze(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){ce!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),ce=U)}function P(U){U!==y_?(Ee(r.CULL_FACE),U!==ue&&(U===Lp?r.cullFace(r.BACK):U===S_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ze(r.CULL_FACE),ue=U}function A(U){U!==j&&(B&&r.lineWidth(U),j=U)}function ee(U,Se,we){U?(Ee(r.POLYGON_OFFSET_FILL),(re!==Se||W!==we)&&(r.polygonOffset(Se,we),re=Se,W=we)):Ze(r.POLYGON_OFFSET_FILL)}function _e(U){U?Ee(r.SCISSOR_TEST):Ze(r.SCISSOR_TEST)}function ge(U){U===void 0&&(U=r.TEXTURE0+te-1),N!==U&&(r.activeTexture(U),N=U)}function xe(U,Se,we){we===void 0&&(N===null?we=r.TEXTURE0+te-1:we=N);let Oe=G[we];Oe===void 0&&(Oe={type:void 0,texture:void 0},G[we]=Oe),(Oe.type!==U||Oe.texture!==Se)&&(N!==we&&(r.activeTexture(we),N=we),r.bindTexture(U,Se||Te[U]),Oe.type=U,Oe.texture=Se)}function ze(){const U=G[N];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(U){oe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function _t(U){fe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),fe.copy(U))}function Tt(U,Se){let we=_.get(Se);we===void 0&&(we=new WeakMap,_.set(Se,we));let Oe=we.get(U);Oe===void 0&&(Oe=r.getUniformBlockIndex(Se,U.name),we.set(U,Oe))}function ct(U,Se){const Oe=_.get(Se).get(U);v.get(Se)!==Oe&&(r.uniformBlockBinding(Se,Oe,U.__bindingPointIndex),v.set(Se,Oe))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),y={},N=null,G={},M={},E=new WeakMap,b=[],x=null,S=!1,L=null,R=null,D=null,V=null,O=null,k=null,le=null,de=new je(0,0,0),T=0,F=!1,ce=null,ue=null,j=null,re=null,W=null,oe.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),d.reset(),p.reset(),m.reset()}return{buffers:{color:d,depth:p,stencil:m},enable:Ee,disable:Ze,bindFramebuffer:Je,drawBuffers:Z,useProgram:zt,setBlending:Ge,setMaterial:Ct,setFlipSided:st,setCullFace:P,setLineWidth:A,setPolygonOffset:ee,setScissorTest:_e,activeTexture:ge,bindTexture:xe,unbindTexture:ze,compressedTexImage2D:Ce,compressedTexImage3D:Ie,texImage2D:We,texImage3D:Fe,updateUBOMapping:Tt,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:tt,texSubImage2D:qe,texSubImage3D:ot,compressedTexSubImage2D:me,compressedTexSubImage3D:mt,scissor:it,viewport:_t,reset:Et}}function _1(r,e,t,s,o,l,h){const d=o.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return M?new OffscreenCanvas(P,A):Yl("canvas")}function b(P,A,ee,_e){let ge=1;if((P.width>_e||P.height>_e)&&(ge=_e/Math.max(P.width,P.height)),ge<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const xe=A?Nd:Math.floor,ze=xe(ge*P.width),Ce=xe(ge*P.height);_===void 0&&(_=E(ze,Ce));const Ie=ee?E(ze,Ce):_;return Ie.width=ze,Ie.height=Ce,Ie.getContext("2d").drawImage(P,0,0,ze,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ze+"x"+Ce+")."),Ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return dm(P.width)&&dm(P.height)}function S(P){return d?!1:P.wrapS!==fi||P.wrapT!==fi||P.minFilter!==wn&&P.minFilter!==In}function L(P,A){return P.generateMipmaps&&A&&P.minFilter!==wn&&P.minFilter!==In}function R(P){r.generateMipmap(P)}function D(P,A,ee,_e,ge=!1){if(d===!1)return A;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe=A;if(A===r.RED&&(ee===r.FLOAT&&(xe=r.R32F),ee===r.HALF_FLOAT&&(xe=r.R16F),ee===r.UNSIGNED_BYTE&&(xe=r.R8)),A===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(xe=r.R8UI),ee===r.UNSIGNED_SHORT&&(xe=r.R16UI),ee===r.UNSIGNED_INT&&(xe=r.R32UI),ee===r.BYTE&&(xe=r.R8I),ee===r.SHORT&&(xe=r.R16I),ee===r.INT&&(xe=r.R32I)),A===r.RG&&(ee===r.FLOAT&&(xe=r.RG32F),ee===r.HALF_FLOAT&&(xe=r.RG16F),ee===r.UNSIGNED_BYTE&&(xe=r.RG8)),A===r.RGBA){const ze=ge?Vl:Rt.getTransfer(_e);ee===r.FLOAT&&(xe=r.RGBA32F),ee===r.HALF_FLOAT&&(xe=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(xe=ze===It?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(xe=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(xe=r.RGB5_A1)}return(xe===r.R16F||xe===r.R32F||xe===r.RG16F||xe===r.RG32F||xe===r.RGBA16F||xe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function V(P,A,ee){return L(P,ee)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function O(P){return P===wn||P===Fp||P===Wa?r.NEAREST:r.LINEAR}function k(P){const A=P.target;A.removeEventListener("dispose",k),de(A),A.isVideoTexture&&v.delete(A)}function le(P){const A=P.target;A.removeEventListener("dispose",le),F(A)}function de(P){const A=s.get(P);if(A.__webglInit===void 0)return;const ee=P.source,_e=y.get(ee);if(_e){const ge=_e[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&T(P),Object.keys(_e).length===0&&y.delete(ee)}s.remove(P)}function T(P){const A=s.get(P);r.deleteTexture(A.__webglTexture);const ee=P.source,_e=y.get(ee);delete _e[A.__cacheKey],h.memory.textures--}function F(P){const A=P.texture,ee=s.get(P),_e=s.get(A);if(_e.__webglTexture!==void 0&&(r.deleteTexture(_e.__webglTexture),h.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(ee.__webglFramebuffer[ge]))for(let xe=0;xe<ee.__webglFramebuffer[ge].length;xe++)r.deleteFramebuffer(ee.__webglFramebuffer[ge][xe]);else r.deleteFramebuffer(ee.__webglFramebuffer[ge]);ee.__webglDepthbuffer&&r.deleteRenderbuffer(ee.__webglDepthbuffer[ge])}else{if(Array.isArray(ee.__webglFramebuffer))for(let ge=0;ge<ee.__webglFramebuffer.length;ge++)r.deleteFramebuffer(ee.__webglFramebuffer[ge]);else r.deleteFramebuffer(ee.__webglFramebuffer);if(ee.__webglDepthbuffer&&r.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let ge=0;ge<ee.__webglColorRenderbuffer.length;ge++)ee.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(ee.__webglColorRenderbuffer[ge]);ee.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ge=0,xe=A.length;ge<xe;ge++){const ze=s.get(A[ge]);ze.__webglTexture&&(r.deleteTexture(ze.__webglTexture),h.memory.textures--),s.remove(A[ge])}s.remove(A),s.remove(P)}let ce=0;function ue(){ce=0}function j(){const P=ce;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),ce+=1,P}function re(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function W(P,A){const ee=s.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const _e=P.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ee,P,A);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+A)}function te(P,A){const ee=s.get(P);if(P.version>0&&ee.__version!==P.version){oe(ee,P,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+A)}function B(P,A){const ee=s.get(P);if(P.version>0&&ee.__version!==P.version){oe(ee,P,A);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+A)}function Q(P,A){const ee=s.get(P);if(P.version>0&&ee.__version!==P.version){fe(ee,P,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+A)}const X={[Rd]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[Cd]:r.MIRRORED_REPEAT},N={[wn]:r.NEAREST,[Fp]:r.NEAREST_MIPMAP_NEAREST,[Wa]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[ju]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},G={[dx]:r.NEVER,[vx]:r.ALWAYS,[hx]:r.LESS,[Pg]:r.LEQUAL,[fx]:r.EQUAL,[gx]:r.GEQUAL,[px]:r.GREATER,[mx]:r.NOTEQUAL};function ye(P,A,ee){if(A.type===Xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===ju||A.magFilter===Wa||A.magFilter===rs||A.minFilter===In||A.minFilter===ju||A.minFilter===Wa||A.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(P,r.TEXTURE_WRAP_S,X[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,X[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,X[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[A.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==fi||A.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O(A.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O(A.minFilter)),A.minFilter!==wn&&A.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,G[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===wn||A.minFilter!==Wa&&A.minFilter!==rs||A.type===Xi&&e.has("OES_texture_float_linear")===!1||d===!1&&A.type===eo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(r.texParameterf(P,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function q(P,A){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",k));const _e=A.source;let ge=y.get(_e);ge===void 0&&(ge={},y.set(_e,ge));const xe=re(A);if(xe!==P.__cacheKey){ge[xe]===void 0&&(ge[xe]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,ee=!0),ge[xe].usedTimes++;const ze=ge[P.__cacheKey];ze!==void 0&&(ge[P.__cacheKey].usedTimes--,ze.usedTimes===0&&T(A)),P.__cacheKey=xe,P.__webglTexture=ge[xe].texture}return ee}function oe(P,A,ee){let _e=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=r.TEXTURE_3D);const ge=q(P,A),xe=A.source;t.bindTexture(_e,P.__webglTexture,r.TEXTURE0+ee);const ze=s.get(xe);if(xe.version!==ze.__version||ge===!0){t.activeTexture(r.TEXTURE0+ee);const Ce=Rt.getPrimaries(Rt.workingColorSpace),Ie=A.colorSpace===ni?null:Rt.getPrimaries(A.colorSpace),qe=A.colorSpace===ni||Ce===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const ot=S(A)&&x(A.image)===!1;let me=b(A.image,ot,!1,o.maxTextureSize);me=st(A,me);const mt=x(me)||d,ht=l.convert(A.format,A.colorSpace);let tt=l.convert(A.type),We=D(A.internalFormat,ht,tt,A.colorSpace,A.isVideoTexture);ye(_e,A,mt);let Fe;const it=A.mipmaps,_t=d&&A.isVideoTexture!==!0&&We!==Rg,Tt=ze.__version===void 0||ge===!0,ct=xe.dataReady,Et=V(A,me,mt);if(A.isDepthTexture)We=r.DEPTH_COMPONENT,d?A.type===Xi?We=r.DEPTH_COMPONENT32F:A.type===Ar?We=r.DEPTH_COMPONENT24:A.type===ss?We=r.DEPTH24_STENCIL8:We=r.DEPTH_COMPONENT16:A.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===as&&We===r.DEPTH_COMPONENT&&A.type!==jd&&A.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ar,tt=l.convert(A.type)),A.format===sa&&We===r.DEPTH_COMPONENT&&(We=r.DEPTH_STENCIL,A.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ss,tt=l.convert(A.type))),Tt&&(_t?t.texStorage2D(r.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,We,me.width,me.height,0,ht,tt,null));else if(A.isDataTexture)if(it.length>0&&mt){_t&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,it[0].width,it[0].height);for(let U=0,Se=it.length;U<Se;U++)Fe=it[U],_t?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,Fe.width,Fe.height,ht,tt,Fe.data):t.texImage2D(r.TEXTURE_2D,U,We,Fe.width,Fe.height,0,ht,tt,Fe.data);A.generateMipmaps=!1}else _t?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,me.width,me.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,ht,tt,me.data)):t.texImage2D(r.TEXTURE_2D,0,We,me.width,me.height,0,ht,tt,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){_t&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,We,it[0].width,it[0].height,me.depth);for(let U=0,Se=it.length;U<Se;U++)Fe=it[U],A.format!==pi?ht!==null?_t?ct&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,Fe.width,Fe.height,me.depth,ht,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,U,We,Fe.width,Fe.height,me.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,Fe.width,Fe.height,me.depth,ht,tt,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,U,We,Fe.width,Fe.height,me.depth,0,ht,tt,Fe.data)}else{_t&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,it[0].width,it[0].height);for(let U=0,Se=it.length;U<Se;U++)Fe=it[U],A.format!==pi?ht!==null?_t?ct&&t.compressedTexSubImage2D(r.TEXTURE_2D,U,0,0,Fe.width,Fe.height,ht,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,U,We,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,Fe.width,Fe.height,ht,tt,Fe.data):t.texImage2D(r.TEXTURE_2D,U,We,Fe.width,Fe.height,0,ht,tt,Fe.data)}else if(A.isDataArrayTexture)_t?(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Et,We,me.width,me.height,me.depth),ct&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ht,tt,me.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,ht,tt,me.data);else if(A.isData3DTexture)_t?(Tt&&t.texStorage3D(r.TEXTURE_3D,Et,We,me.width,me.height,me.depth),ct&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ht,tt,me.data)):t.texImage3D(r.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,ht,tt,me.data);else if(A.isFramebufferTexture){if(Tt)if(_t)t.texStorage2D(r.TEXTURE_2D,Et,We,me.width,me.height);else{let U=me.width,Se=me.height;for(let we=0;we<Et;we++)t.texImage2D(r.TEXTURE_2D,we,We,U,Se,0,ht,tt,null),U>>=1,Se>>=1}}else if(it.length>0&&mt){_t&&Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,it[0].width,it[0].height);for(let U=0,Se=it.length;U<Se;U++)Fe=it[U],_t?ct&&t.texSubImage2D(r.TEXTURE_2D,U,0,0,ht,tt,Fe):t.texImage2D(r.TEXTURE_2D,U,We,ht,tt,Fe);A.generateMipmaps=!1}else _t?(Tt&&t.texStorage2D(r.TEXTURE_2D,Et,We,me.width,me.height),ct&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,tt,me)):t.texImage2D(r.TEXTURE_2D,0,We,ht,tt,me);L(A,mt)&&R(_e),ze.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function fe(P,A,ee){if(A.image.length!==6)return;const _e=q(P,A),ge=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+ee);const xe=s.get(ge);if(ge.version!==xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+ee);const ze=Rt.getPrimaries(Rt.workingColorSpace),Ce=A.colorSpace===ni?null:Rt.getPrimaries(A.colorSpace),Ie=A.colorSpace===ni||ze===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const qe=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,me=[];for(let U=0;U<6;U++)!qe&&!ot?me[U]=b(A.image[U],!1,!0,o.maxCubemapSize):me[U]=ot?A.image[U].image:A.image[U],me[U]=st(A,me[U]);const mt=me[0],ht=x(mt)||d,tt=l.convert(A.format,A.colorSpace),We=l.convert(A.type),Fe=D(A.internalFormat,tt,We,A.colorSpace),it=d&&A.isVideoTexture!==!0,_t=xe.__version===void 0||_e===!0,Tt=ge.dataReady;let ct=V(A,mt,ht);ye(r.TEXTURE_CUBE_MAP,A,ht);let Et;if(qe){it&&_t&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Fe,mt.width,mt.height);for(let U=0;U<6;U++){Et=me[U].mipmaps;for(let Se=0;Se<Et.length;Se++){const we=Et[Se];A.format!==pi?tt!==null?it?Tt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,0,0,we.width,we.height,tt,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,0,0,we.width,we.height,tt,We,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se,Fe,we.width,we.height,0,tt,We,we.data)}}}else{Et=A.mipmaps,it&&_t&&(Et.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Fe,me[0].width,me[0].height));for(let U=0;U<6;U++)if(ot){it?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,me[U].width,me[U].height,tt,We,me[U].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Fe,me[U].width,me[U].height,0,tt,We,me[U].data);for(let Se=0;Se<Et.length;Se++){const Oe=Et[Se].image[U].image;it?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,0,0,Oe.width,Oe.height,tt,We,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,Fe,Oe.width,Oe.height,0,tt,We,Oe.data)}}else{it?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,tt,We,me[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,Fe,tt,We,me[U]);for(let Se=0;Se<Et.length;Se++){const we=Et[Se];it?Tt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,0,0,tt,We,we.image[U]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se+1,Fe,tt,We,we.image[U])}}}L(A,ht)&&R(r.TEXTURE_CUBE_MAP),xe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function be(P,A,ee,_e,ge,xe){const ze=l.convert(ee.format,ee.colorSpace),Ce=l.convert(ee.type),Ie=D(ee.internalFormat,ze,Ce,ee.colorSpace);if(!s.get(A).__hasExternalTextures){const ot=Math.max(1,A.width>>xe),me=Math.max(1,A.height>>xe);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,xe,Ie,ot,me,A.depth,0,ze,Ce,null):t.texImage2D(ge,xe,Ie,ot,me,0,ze,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ge,s.get(ee).__webglTexture,0,et(A)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ge,s.get(ee).__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(P,A,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let _e=d===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||Ge(A)){const ge=A.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Xi?_e=r.DEPTH_COMPONENT32F:ge.type===Ar&&(_e=r.DEPTH_COMPONENT24));const xe=et(A);Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,_e,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,_e,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,_e,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const _e=et(A);ee&&Ge(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,r.DEPTH24_STENCIL8,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const _e=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ge=0;ge<_e.length;ge++){const xe=_e[ge],ze=l.convert(xe.format,xe.colorSpace),Ce=l.convert(xe.type),Ie=D(xe.internalFormat,ze,Ce,xe.colorSpace),qe=et(A);ee&&Ge(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ie,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,Ie,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const _e=s.get(A.depthTexture).__webglTexture,ge=et(A);if(A.depthTexture.format===as)Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(A.depthTexture.format===sa)Ge(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ze(P){const A=s.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ee(A.__webglFramebuffer,P)}else if(ee){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=r.createRenderbuffer(),Te(A.__webglDepthbuffer[_e],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Te(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,A,ee){const _e=s.get(P);A!==void 0&&be(_e.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Ze(P)}function Z(P){const A=P.texture,ee=s.get(P),_e=s.get(A);P.addEventListener("dispose",le),P.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=A.version,h.memory.textures++);const ge=P.isWebGLCubeRenderTarget===!0,xe=P.isWebGLMultipleRenderTargets===!0,ze=x(P)||d;if(ge){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(d&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ee.__webglFramebuffer[Ce][Ie]=r.createFramebuffer()}else ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(d&&A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(xe)if(o.drawBuffers){const Ce=P.texture;for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const ot=s.get(Ce[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&P.samples>0&&Ge(P)===!1){const Ce=xe?A:[A];ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ce.length;Ie++){const qe=Ce[Ie];ee.__webglColorRenderbuffer[Ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const ot=l.convert(qe.format,qe.colorSpace),me=l.convert(qe.type),mt=D(qe.internalFormat,ot,me,qe.colorSpace,P.isXRRenderTarget===!0),ht=et(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,mt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),ye(r.TEXTURE_CUBE_MAP,A,ze);for(let Ce=0;Ce<6;Ce++)if(d&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)be(ee.__webglFramebuffer[Ce][Ie],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ie);else be(ee.__webglFramebuffer[Ce],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);L(A,ze)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Ce=P.texture;for(let Ie=0,qe=Ce.length;Ie<qe;Ie++){const ot=Ce[Ie],me=s.get(ot);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),ye(r.TEXTURE_2D,ot,ze),be(ee.__webglFramebuffer,P,ot,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,0),L(ot,ze)&&R(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(d?Ce=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,_e.__webglTexture),ye(Ce,A,ze),d&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)be(ee.__webglFramebuffer[Ie],P,A,r.COLOR_ATTACHMENT0,Ce,Ie);else be(ee.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,Ce,0);L(A,ze)&&R(Ce),t.unbindTexture()}P.depthBuffer&&Ze(P)}function zt(P){const A=x(P)||d,ee=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let _e=0,ge=ee.length;_e<ge;_e++){const xe=ee[_e];if(L(xe,A)){const ze=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=s.get(xe).__webglTexture;t.bindTexture(ze,Ce),R(ze),t.unbindTexture()}}}function Ve(P){if(d&&P.samples>0&&Ge(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],ee=P.width,_e=P.height;let ge=r.COLOR_BUFFER_BIT;const xe=[],ze=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=s.get(P),Ie=P.isWebGLMultipleRenderTargets===!0;if(Ie)for(let qe=0;qe<A.length;qe++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let qe=0;qe<A.length;qe++){xe.push(r.COLOR_ATTACHMENT0+qe),P.depthBuffer&&xe.push(ze);const ot=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(ot===!1&&(P.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),Ie&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[qe]),ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ze]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ze])),Ie){const me=s.get(A[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,ge,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ie)for(let qe=0;qe<A.length;qe++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[qe]);const ot=s.get(A[qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function et(P){return Math.min(o.maxSamples,P.samples)}function Ge(P){const A=s.get(P);return d&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(P){const A=h.render.frame;v.get(P)!==A&&(v.set(P,A),P.update())}function st(P,A){const ee=P.colorSpace,_e=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Pd||ee!==Ki&&ee!==ni&&(Rt.getTransfer(ee)===It?d===!1?e.has("EXT_sRGB")===!0&&_e===pi?(P.format=Pd,P.minFilter=In,P.generateMipmaps=!1):A=Ng.sRGBToLinear(A):(_e!==pi||ge!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}this.allocateTextureUnit=j,this.resetTextureUnits=ue,this.setTexture2D=W,this.setTexture2DArray=te,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=Je,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ge}function x1(r,e,t){const s=t.isWebGL2;function o(l,h=ni){let d;const p=Rt.getTransfer(h);if(l===Lr)return r.UNSIGNED_BYTE;if(l===wg)return r.UNSIGNED_SHORT_4_4_4_4;if(l===Eg)return r.UNSIGNED_SHORT_5_5_5_1;if(l===J_)return r.BYTE;if(l===ex)return r.SHORT;if(l===jd)return r.UNSIGNED_SHORT;if(l===Mg)return r.INT;if(l===Ar)return r.UNSIGNED_INT;if(l===Xi)return r.FLOAT;if(l===eo)return s?r.HALF_FLOAT:(d=e.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(l===tx)return r.ALPHA;if(l===pi)return r.RGBA;if(l===nx)return r.LUMINANCE;if(l===ix)return r.LUMINANCE_ALPHA;if(l===as)return r.DEPTH_COMPONENT;if(l===sa)return r.DEPTH_STENCIL;if(l===Pd)return d=e.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(l===rx)return r.RED;if(l===Tg)return r.RED_INTEGER;if(l===sx)return r.RG;if(l===bg)return r.RG_INTEGER;if(l===Ag)return r.RGBA_INTEGER;if(l===Hu||l===Gu||l===Vu||l===Wu)if(p===It)if(d=e.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(l===Hu)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Gu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Vu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Wu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=e.get("WEBGL_compressed_texture_s3tc"),d!==null){if(l===Hu)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Gu)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Vu)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Wu)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===kp||l===Op||l===zp||l===Bp)if(d=e.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(l===kp)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Op)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===zp)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Bp)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Rg)return d=e.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===jp||l===Hp)if(d=e.get("WEBGL_compressed_texture_etc"),d!==null){if(l===jp)return p===It?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(l===Hp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Gp||l===Vp||l===Wp||l===Xp||l===qp||l===Yp||l===$p||l===Kp||l===Zp||l===Qp||l===Jp||l===em||l===tm||l===nm)if(d=e.get("WEBGL_compressed_texture_astc"),d!==null){if(l===Gp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Vp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Wp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Xp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===qp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Yp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===$p)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Kp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Zp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Qp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Jp)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===em)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===tm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===nm)return p===It?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Xu||l===im||l===rm)if(d=e.get("EXT_texture_compression_bptc"),d!==null){if(l===Xu)return p===It?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===im)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===rm)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===ax||l===sm||l===am||l===om)if(d=e.get("EXT_texture_compression_rgtc"),d!==null){if(l===Xu)return d.COMPRESSED_RED_RGTC1_EXT;if(l===sm)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===am)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===om)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===ss?s?r.UNSIGNED_INT_24_8:(d=e.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:o}}class y1 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,s),S=this._getHandJoint(m,b);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&y>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Za;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new kn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const s=t.cameras[0].viewport,o=new Ai({extensions:{fragDepth:!0},vertexShader:M1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new $i(new ec(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class T1 extends oa{constructor(e,t){super();const s=this;let o=null,l=1,h=null,d="local-floor",p=1,m=null,v=null,_=null,y=null,M=null,E=null;const b=new E1,x=t.getContextAttributes();let S=null,L=null;const R=[],D=[],V=new wt;let O=null;const k=new ti;k.layers.enable(1),k.viewport=new on;const le=new ti;le.layers.enable(2),le.viewport=new on;const de=[k,le],T=new y1;T.layers.enable(1),T.layers.enable(2);let F=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=R[q];return oe===void 0&&(oe=new vd,R[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=R[q];return oe===void 0&&(oe=new vd,R[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=R[q];return oe===void 0&&(oe=new vd,R[q]=oe),oe.getHandSpace()};function ue(q){const oe=D.indexOf(q.inputSource);if(oe===-1)return;const fe=R[oe];fe!==void 0&&(fe.update(q.inputSource,q.frame,m||h),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",re);for(let q=0;q<R.length;q++){const oe=D[q];oe!==null&&(D[q]=null,R[q].disconnect(oe))}F=null,ce=null,b.reset(),e.setRenderTarget(S),M=null,y=null,_=null,o=null,L=null,ye.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",j),o.addEventListener("inputsourceschange",re),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:o.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new cs(M.framebufferWidth,M.framebufferHeight,{format:pi,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let oe=null,fe=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?sa:as,fe=x.stencil?ss:Ar);const Te={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};_=new XRWebGLBinding(o,t),y=_.createProjectionLayer(Te),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new cs(y.textureWidth,y.textureHeight,{format:pi,type:Lr,depthTexture:new Xg(y.textureWidth,y.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ee=e.properties.get(L);Ee.__ignoreDepthValues=y.ignoreDepthValues}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await o.requestReferenceSpace(d),ye.setContext(o),ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function re(q){for(let oe=0;oe<q.removed.length;oe++){const fe=q.removed[oe],be=D.indexOf(fe);be>=0&&(D[be]=null,R[be].disconnect(fe))}for(let oe=0;oe<q.added.length;oe++){const fe=q.added[oe];let be=D.indexOf(fe);if(be===-1){for(let Ee=0;Ee<R.length;Ee++)if(Ee>=D.length){D.push(fe),be=Ee;break}else if(D[Ee]===null){D[Ee]=fe,be=Ee;break}if(be===-1)break}const Te=R[be];Te&&Te.connect(fe)}}const W=new Y,te=new Y;function B(q,oe,fe){W.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);const be=W.distanceTo(te),Te=oe.projectionMatrix.elements,Ee=fe.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Je=Te[14]/(Te[10]+1),Z=(Te[9]+1)/Te[5],zt=(Te[9]-1)/Te[5],Ve=(Te[8]-1)/Te[0],et=(Ee[8]+1)/Ee[0],Ge=Ze*Ve,Ct=Ze*et,st=be/(-Ve+et),P=st*-Ve;oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(P),q.translateZ(st),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Ze+st,ee=Je+st,_e=Ge-P,ge=Ct+(be-P),xe=Z*Je/ee*A,ze=zt*Je/ee*A;q.projectionMatrix.makePerspective(_e,ge,xe,ze,A,ee),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;b.texture!==null&&(q.near=b.depthNear,q.far=b.depthFar),T.near=le.near=k.near=q.near,T.far=le.far=k.far=q.far,(F!==T.near||ce!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,ce=T.far,k.near=F,k.far=ce,le.near=F,le.far=ce,k.updateProjectionMatrix(),le.updateProjectionMatrix(),q.updateProjectionMatrix());const oe=q.parent,fe=T.cameras;Q(T,oe);for(let be=0;be<fe.length;be++)Q(fe[be],oe);fe.length===2?B(T,k,le):T.projectionMatrix.copy(k.projectionMatrix),X(q,T,oe)};function X(q,oe,fe){fe===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ld*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(q){p=q,y!==null&&(y.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null};let N=null;function G(q,oe){if(v=oe.getViewerPose(m||h),E=oe,v!==null){const fe=v.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let be=!1;fe.length!==T.cameras.length&&(T.cameras.length=0,be=!0);for(let Ee=0;Ee<fe.length;Ee++){const Ze=fe[Ee];let Je=null;if(M!==null)Je=M.getViewport(Ze);else{const zt=_.getViewSubImage(y,Ze);Je=zt.viewport,Ee===0&&(e.setRenderTargetTextures(L,zt.colorTexture,y.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(L))}let Z=de[Ee];Z===void 0&&(Z=new ti,Z.layers.enable(Ee),Z.viewport=new on,de[Ee]=Z),Z.matrix.fromArray(Ze.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ze.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Je.x,Je.y,Je.width,Je.height),Ee===0&&(T.matrix.copy(Z.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),be===!0&&T.cameras.push(Z)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ee=_.getDepthInformation(fe[0]);Ee&&Ee.isValid&&Ee.texture&&b.init(e,Ee,o.renderState)}}for(let fe=0;fe<R.length;fe++){const be=D[fe],Te=R[fe];be!==null&&Te!==void 0&&Te.update(be,oe,m||h)}b.render(e,T),N&&N(q,oe),oe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:oe}),E=null}const ye=new Wg;ye.setAnimationLoop(G),this.setAnimationLoop=function(q){N=q},this.dispose=function(){}}}function b1(r,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,jg(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,L,R,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(x,S):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),v(x,S)):S.isMeshStandardMaterial?(l(x,S),y(x,S),S.isMeshPhysicalMaterial&&M(x,S,D)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),b(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(h(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?p(x,S,L,R):S.isSpriteMaterial?m(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Fn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Fn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const L=e.get(S).envMap;if(L&&(x.envMap.value=L,x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap){x.lightMap.value=S.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=S.lightMapIntensity*R,t(S.lightMap,x.lightMapTransform)}S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function p(x,S,L,R){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*L,x.scale.value=R*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function y(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),e.get(S).envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,L){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Fn&&x.clearcoatNormalScale.value.negate())),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function b(x,S){const L=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function A1(r,e,t,s){let o={},l={},h=[];const d=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(L,R){const D=R.program;s.uniformBlockBinding(L,D)}function m(L,R){let D=o[L.id];D===void 0&&(E(L),D=v(L),o[L.id]=D,L.addEventListener("dispose",x));const V=R.program;s.updateUBOMapping(L,V);const O=e.render.frame;l[L.id]!==O&&(y(L),l[L.id]=O)}function v(L){const R=_();L.__bindingPointIndex=R;const D=r.createBuffer(),V=L.__size,O=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,V,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,D),D}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const R=o[L.id],D=L.uniforms,V=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let O=0,k=D.length;O<k;O++){const le=Array.isArray(D[O])?D[O]:[D[O]];for(let de=0,T=le.length;de<T;de++){const F=le[de];if(M(F,O,de,V)===!0){const ce=F.__offset,ue=Array.isArray(F.value)?F.value:[F.value];let j=0;for(let re=0;re<ue.length;re++){const W=ue[re],te=b(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,ce+j,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,j),j+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(L,R,D,V){const O=L.value,k=R+"_"+D;if(V[k]===void 0)return typeof O=="number"||typeof O=="boolean"?V[k]=O:V[k]=O.clone(),!0;{const le=V[k];if(typeof O=="number"||typeof O=="boolean"){if(le!==O)return V[k]=O,!0}else if(le.equals(O)===!1)return le.copy(O),!0}return!1}function E(L){const R=L.uniforms;let D=0;const V=16;for(let k=0,le=R.length;k<le;k++){const de=Array.isArray(R[k])?R[k]:[R[k]];for(let T=0,F=de.length;T<F;T++){const ce=de[T],ue=Array.isArray(ce.value)?ce.value:[ce.value];for(let j=0,re=ue.length;j<re;j++){const W=ue[j],te=b(W),B=D%V;B!==0&&V-B<te.boundary&&(D+=V-B),ce.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=te.storage}}}const O=D%V;return O>0&&(D+=V-O),L.__size=D,L.__cache={},this}function b(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function x(L){const R=L.target;R.removeEventListener("dispose",x);const D=h.indexOf(R.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function S(){for(const L in o)r.deleteBuffer(o[L]);h=[],o={},l={}}return{bind:p,update:m,dispose:S}}class Qg{constructor(e={}){const{canvas:t=xx(),context:s=null,depth:o=!0,stencil:l=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=h;const M=new Uint32Array(4),E=new Int32Array(4);let b=null,x=null;const S=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=Pr,this.toneMappingExposure=1;const R=this;let D=!1,V=0,O=0,k=null,le=-1,de=null;const T=new on,F=new on;let ce=null;const ue=new je(0);let j=0,re=t.width,W=t.height,te=1,B=null,Q=null;const X=new on(0,0,re,W),N=new on(0,0,re,W);let G=!1;const ye=new Vg;let q=!1,oe=!1,fe=null;const be=new Kt,Te=new wt,Ee=new Y,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return k===null?te:1}let Z=s;function zt(C,K){for(let se=0;se<C.length;se++){const ae=C[se],ie=t.getContext(ae,K);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bd}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Se,!1),Z===null){const K=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&K.shift(),Z=zt(K,C),Z===null)throw zt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ve,et,Ge,Ct,st,P,A,ee,_e,ge,xe,ze,Ce,Ie,qe,ot,me,mt,ht,tt,We,Fe,it,_t;function Tt(){Ve=new IM(Z),et=new AM(Z,Ve,e),Ve.init(et),Fe=new x1(Z,Ve,et),Ge=new v1(Z,Ve,et),Ct=new kM(Z),st=new i1,P=new _1(Z,Ve,Ge,st,et,Fe,Ct),A=new CM(R),ee=new DM(R),_e=new Vx(Z,et),it=new TM(Z,Ve,_e,et),ge=new UM(Z,_e,Ct,it),xe=new jM(Z,ge,_e,Ct),ht=new BM(Z,et,P),ot=new RM(st),ze=new n1(R,A,ee,Ve,et,it,ot),Ce=new b1(R,st),Ie=new s1,qe=new d1(Ve,et),mt=new EM(R,A,ee,Ge,xe,y,p),me=new g1(R,xe,et),_t=new A1(Z,Ct,et,Ge),tt=new bM(Z,Ve,Ct,et),We=new FM(Z,Ve,Ct,et),Ct.programs=ze.programs,R.capabilities=et,R.extensions=Ve,R.properties=st,R.renderLists=Ie,R.shadowMap=me,R.state=Ge,R.info=Ct}Tt();const ct=new T1(R,Z);this.xr=ct,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=Ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize(re,W,!1))},this.getSize=function(C){return C.set(re,W)},this.setSize=function(C,K,se=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,W=K,t.width=Math.floor(C*te),t.height=Math.floor(K*te),se===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(re*te,W*te).floor()},this.setDrawingBufferSize=function(C,K,se){re=C,W=K,te=se,t.width=Math.floor(C*se),t.height=Math.floor(K*se),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,K,se,ae){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,K,se,ae),Ge.viewport(T.copy(X).multiplyScalar(te).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,K,se,ae){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,K,se,ae),Ge.scissor(F.copy(N).multiplyScalar(te).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(C){Ge.setScissorTest(G=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(C=!0,K=!0,se=!0){let ae=0;if(C){let ie=!1;if(k!==null){const Pe=k.texture.format;ie=Pe===Ag||Pe===bg||Pe===Tg}if(ie){const Pe=k.texture.type,He=Pe===Lr||Pe===Ar||Pe===jd||Pe===ss||Pe===wg||Pe===Eg,Ke=mt.getClearColor(),Ne=mt.getClearAlpha(),lt=Ke.r,nt=Ke.g,rt=Ke.b;He?(M[0]=lt,M[1]=nt,M[2]=rt,M[3]=Ne,Z.clearBufferuiv(Z.COLOR,0,M)):(E[0]=lt,E[1]=nt,E[2]=rt,E[3]=Ne,Z.clearBufferiv(Z.COLOR,0,E))}else ae|=Z.COLOR_BUFFER_BIT}K&&(ae|=Z.DEPTH_BUFFER_BIT),se&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),qe.dispose(),st.dispose(),A.dispose(),ee.dispose(),xe.dispose(),it.dispose(),_t.dispose(),ze.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",vn),ct.removeEventListener("sessionend",St),fe&&(fe.dispose(),fe=null),qt.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=Ct.autoReset,K=me.enabled,se=me.autoUpdate,ae=me.needsUpdate,ie=me.type;Tt(),Ct.autoReset=C,me.enabled=K,me.autoUpdate=se,me.needsUpdate=ae,me.type=ie}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const K=C.target;K.removeEventListener("dispose",we),Oe(K)}function Oe(C){Xe(C),st.remove(C)}function Xe(C){const K=st.get(C).programs;K!==void 0&&(K.forEach(function(se){ze.releaseProgram(se)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,se,ae,ie,Pe){K===null&&(K=Ze);const He=ie.isMesh&&ie.matrixWorld.determinant()<0,Ke=nc(C,K,se,ae,ie);Ge.setMaterial(ae,He);let Ne=se.index,lt=1;if(ae.wireframe===!0){if(Ne=ge.getWireframeAttribute(se),Ne===void 0)return;lt=2}const nt=se.drawRange,rt=se.attributes.position;let Pt=nt.start*lt,_n=(nt.start+nt.count)*lt;Pe!==null&&(Pt=Math.max(Pt,Pe.start*lt),_n=Math.min(_n,(Pe.start+Pe.count)*lt)),Ne!==null?(Pt=Math.max(Pt,0),_n=Math.min(_n,Ne.count)):rt!=null&&(Pt=Math.max(Pt,0),_n=Math.min(_n,rt.count));const Gt=_n-Pt;if(Gt<0||Gt===1/0)return;it.setup(ie,ae,Ke,se,Ne);let En,gt=tt;if(Ne!==null&&(En=_e.get(Ne),gt=We,gt.setIndex(En)),ie.isMesh)ae.wireframe===!0?(Ge.setLineWidth(ae.wireframeLinewidth*Je()),gt.setMode(Z.LINES)):gt.setMode(Z.TRIANGLES);else if(ie.isLine){let ut=ae.linewidth;ut===void 0&&(ut=1),Ge.setLineWidth(ut*Je()),ie.isLineSegments?gt.setMode(Z.LINES):ie.isLineLoop?gt.setMode(Z.LINE_LOOP):gt.setMode(Z.LINE_STRIP)}else ie.isPoints?gt.setMode(Z.POINTS):ie.isSprite&&gt.setMode(Z.TRIANGLES);if(ie.isBatchedMesh)gt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)gt.renderInstances(Pt,Gt,ie.count);else if(se.isInstancedBufferGeometry){const ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,xn=Math.min(se.instanceCount,ut);gt.renderInstances(Pt,Gt,xn)}else gt.render(Pt,Gt)};function yt(C,K,se){C.transparent===!0&&C.side===Wi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,Qi(C,K,se),C.side=Dr,C.needsUpdate=!0,Qi(C,K,se),C.side=Wi):Qi(C,K,se)}this.compile=function(C,K,se=null){se===null&&(se=C),x=qe.get(se),x.init(),L.push(x),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),C!==se&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),x.setupLights(R._useLegacyLights);const ae=new Set;return C.traverse(function(ie){const Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Ke=Pe[He];yt(Ke,se,ie),ae.add(Ke)}else yt(Pe,se,ie),ae.add(Pe)}),L.pop(),x=null,ae},this.compileAsync=function(C,K,se=null){const ae=this.compile(C,K,se);return new Promise(ie=>{function Pe(){if(ae.forEach(function(He){st.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){ie(C);return}setTimeout(Pe,10)}Ve.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let bt=null;function Ht(C){bt&&bt(C)}function vn(){qt.stop()}function St(){qt.start()}const qt=new Wg;qt.setAnimationLoop(Ht),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(C){bt=C,ct.setAnimationLoop(C),C===null?qt.stop():qt.start()},ct.addEventListener("sessionstart",vn),ct.addEventListener("sessionend",St),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,K,k),x=qe.get(C,L.length),x.init(),L.push(x),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ye.setFromProjectionMatrix(be),oe=this.localClippingEnabled,q=ot.init(this.clippingPlanes,oe),b=Ie.get(C,S.length),b.init(),S.push(b),ln(C,K,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(B,Q),this.info.render.frame++,q===!0&&ot.beginShadows();const se=x.state.shadowsArray;if(me.render(se,C,K),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&mt.render(b,C),x.setupLights(R._useLegacyLights),K.isArrayCamera){const ae=K.cameras;for(let ie=0,Pe=ae.length;ie<Pe;ie++){const He=ae[ie];so(b,C,He,He.viewport)}}else so(b,C,K);k!==null&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(R,C,K),it.resetDefaultState(),le=-1,de=null,L.pop(),L.length>0?x=L[L.length-1]:x=null,S.pop(),S.length>0?b=S[S.length-1]:b=null};function ln(C,K,se,ae){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){ae&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const He=xe.update(C),Ke=C.material;Ke.visible&&b.push(C,He,Ke,se,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const He=xe.update(C),Ke=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ee.copy(He.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(Ke)){const Ne=He.groups;for(let lt=0,nt=Ne.length;lt<nt;lt++){const rt=Ne[lt],Pt=Ke[rt.materialIndex];Pt&&Pt.visible&&b.push(C,He,Pt,se,Ee.z,rt)}}else Ke.visible&&b.push(C,He,Ke,se,Ee.z,null)}}const Pe=C.children;for(let He=0,Ke=Pe.length;He<Ke;He++)ln(Pe[He],K,se,ae)}function so(C,K,se,ae){const ie=C.opaque,Pe=C.transmissive,He=C.transparent;x.setupLightsView(se),q===!0&&ot.setGlobalState(R.clippingPlanes,se),Pe.length>0&&Ur(ie,Pe,K,se),ae&&Ge.viewport(T.copy(ae)),ie.length>0&&Ri(ie,K,se),Pe.length>0&&Ri(Pe,K,se),He.length>0&&Ri(He,K,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ur(C,K,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Pe=et.isWebGL2;fe===null&&(fe=new cs(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?eo:Lr,minFilter:rs,samples:Pe?4:0})),R.getDrawingBufferSize(Te),Pe?fe.setSize(Te.x,Te.y):fe.setSize(Nd(Te.x),Nd(Te.y));const He=R.getRenderTarget();R.setRenderTarget(fe),R.getClearColor(ue),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear();const Ke=R.toneMapping;R.toneMapping=Pr,Ri(C,se,ae),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe);let Ne=!1;for(let lt=0,nt=K.length;lt<nt;lt++){const rt=K[lt],Pt=rt.object,_n=rt.geometry,Gt=rt.material,En=rt.group;if(Gt.side===Wi&&Pt.layers.test(ae.layers)){const gt=Gt.side;Gt.side=Fn,Gt.needsUpdate=!0,Fr(Pt,se,ae,_n,Gt,En),Gt.side=gt,Gt.needsUpdate=!0,Ne=!0}}Ne===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe)),R.setRenderTarget(He),R.setClearColor(ue,j),R.toneMapping=Ke}function Ri(C,K,se){const ae=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Pe=C.length;ie<Pe;ie++){const He=C[ie],Ke=He.object,Ne=He.geometry,lt=ae===null?He.material:ae,nt=He.group;Ke.layers.test(se.layers)&&Fr(Ke,K,se,Ne,lt,nt)}}function Fr(C,K,se,ae,ie,Pe){C.onBeforeRender(R,K,se,ae,ie,Pe),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(R,K,se,ae,C,Pe),ie.transparent===!0&&ie.side===Wi&&ie.forceSinglePass===!1?(ie.side=Fn,ie.needsUpdate=!0,R.renderBufferDirect(se,K,ae,ie,C,Pe),ie.side=Dr,ie.needsUpdate=!0,R.renderBufferDirect(se,K,ae,ie,C,Pe),ie.side=Wi):R.renderBufferDirect(se,K,ae,ie,C,Pe),C.onAfterRender(R,K,se,ae,ie,Pe)}function Qi(C,K,se){K.isScene!==!0&&(K=Ze);const ae=st.get(C),ie=x.state.lights,Pe=x.state.shadowsArray,He=ie.state.version,Ke=ze.getParameters(C,ie.state,Pe,K,se),Ne=ze.getProgramCacheKey(Ke);let lt=ae.programs;ae.environment=C.isMeshStandardMaterial?K.environment:null,ae.fog=K.fog,ae.envMap=(C.isMeshStandardMaterial?ee:A).get(C.envMap||ae.environment),lt===void 0&&(C.addEventListener("dispose",we),lt=new Map,ae.programs=lt);let nt=lt.get(Ne);if(nt!==void 0){if(ae.currentProgram===nt&&ae.lightsStateVersion===He)return oo(C,Ke),nt}else Ke.uniforms=ze.getUniforms(C),C.onBuild(se,Ke,R),C.onBeforeCompile(Ke,R),nt=ze.acquireProgram(Ke,Ne),lt.set(Ne,nt),ae.uniforms=Ke.uniforms;const rt=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(rt.clippingPlanes=ot.uniform),oo(C,Ke),ae.needsLights=lo(C),ae.lightsStateVersion=He,ae.needsLights&&(rt.ambientLightColor.value=ie.state.ambient,rt.lightProbe.value=ie.state.probe,rt.directionalLights.value=ie.state.directional,rt.directionalLightShadows.value=ie.state.directionalShadow,rt.spotLights.value=ie.state.spot,rt.spotLightShadows.value=ie.state.spotShadow,rt.rectAreaLights.value=ie.state.rectArea,rt.ltc_1.value=ie.state.rectAreaLTC1,rt.ltc_2.value=ie.state.rectAreaLTC2,rt.pointLights.value=ie.state.point,rt.pointLightShadows.value=ie.state.pointShadow,rt.hemisphereLights.value=ie.state.hemi,rt.directionalShadowMap.value=ie.state.directionalShadowMap,rt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,rt.spotShadowMap.value=ie.state.spotShadowMap,rt.spotLightMatrix.value=ie.state.spotLightMatrix,rt.spotLightMap.value=ie.state.spotLightMap,rt.pointShadowMap.value=ie.state.pointShadowMap,rt.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.currentProgram=nt,ae.uniformsList=null,nt}function ao(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=jl.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function oo(C,K){const se=st.get(C);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function nc(C,K,se,ae,ie){K.isScene!==!0&&(K=Ze),P.resetTextureUnits();const Pe=K.fog,He=ae.isMeshStandardMaterial?K.environment:null,Ke=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ki,Ne=(ae.isMeshStandardMaterial?ee:A).get(ae.envMap||He),lt=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),rt=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,_n=!!se.morphAttributes.color;let Gt=Pr;ae.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Gt=R.toneMapping);const En=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gt=En!==void 0?En.length:0,ut=st.get(ae),xn=x.state.lights;if(q===!0&&(oe===!0||C!==de)){const Tn=C===de&&ae.id===le;ot.setState(ae,C,Tn)}let Ut=!1;ae.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==xn.state.version||ut.outputColorSpace!==Ke||ie.isBatchedMesh&&ut.batching===!1||!ie.isBatchedMesh&&ut.batching===!0||ie.isInstancedMesh&&ut.instancing===!1||!ie.isInstancedMesh&&ut.instancing===!0||ie.isSkinnedMesh&&ut.skinning===!1||!ie.isSkinnedMesh&&ut.skinning===!0||ie.isInstancedMesh&&ut.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ut.instancingColor===!1&&ie.instanceColor!==null||ut.envMap!==Ne||ae.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ot.numPlanes||ut.numIntersection!==ot.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==nt||ut.morphTargets!==rt||ut.morphNormals!==Pt||ut.morphColors!==_n||ut.toneMapping!==Gt||et.isWebGL2===!0&&ut.morphTargetsCount!==gt)&&(Ut=!0):(Ut=!0,ut.__version=ae.version);let Pi=ut.currentProgram;Ut===!0&&(Pi=Qi(ae,K,ie));let co=!1,vi=!1,Ji=!1;const Bt=Pi.getUniforms(),qn=ut.uniforms;if(Ge.useProgram(Pi.program)&&(co=!0,vi=!0,Ji=!0),ae.id!==le&&(le=ae.id,vi=!0),co||de!==C){Bt.setValue(Z,"projectionMatrix",C.projectionMatrix),Bt.setValue(Z,"viewMatrix",C.matrixWorldInverse);const Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(Z,Ee.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&Bt.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,vi=!0,Ji=!0)}if(ie.isSkinnedMesh){Bt.setOptional(Z,ie,"bindMatrix"),Bt.setOptional(Z,ie,"bindMatrixInverse");const Tn=ie.skeleton;Tn&&(et.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Bt.setValue(Z,"boneTexture",Tn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Bt.setOptional(Z,ie,"batchingTexture"),Bt.setValue(Z,"batchingTexture",ie._matricesTexture,P));const ua=se.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&et.isWebGL2===!0)&&ht.update(ie,se,Pi),(vi||ut.receiveShadow!==ie.receiveShadow)&&(ut.receiveShadow=ie.receiveShadow,Bt.setValue(Z,"receiveShadow",ie.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(qn.envMap.value=Ne,qn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),vi&&(Bt.setValue(Z,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&Ci(qn,Ji),Pe&&ae.fog===!0&&Ce.refreshFogUniforms(qn,Pe),Ce.refreshMaterialUniforms(qn,ae,te,W,fe),jl.upload(Z,ao(ut),qn,P)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(jl.upload(Z,ao(ut),qn,P),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(Z,"center",ie.center),Bt.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),Bt.setValue(Z,"normalMatrix",ie.normalMatrix),Bt.setValue(Z,"modelMatrix",ie.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Tn=ae.uniformsGroups;for(let kr=0,uo=Tn.length;kr<uo;kr++)if(et.isWebGL2){const us=Tn[kr];_t.update(us,Pi),_t.bind(us,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Ci(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function lo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,K,se){st.get(C.texture).__webglTexture=K,st.get(C.depthTexture).__webglTexture=se;const ae=st.get(C);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const se=st.get(C);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,se=0){k=C,V=K,O=se;let ae=!0,ie=null,Pe=!1,He=!1;if(C){const Ne=st.get(C);Ne.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(Z.FRAMEBUFFER,null),ae=!1):Ne.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ne.__hasExternalTextures&&P.rebindTextures(C,st.get(C.texture).__webglTexture,st.get(C.depthTexture).__webglTexture);const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(He=!0);const nt=st.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[K])?ie=nt[K][se]:ie=nt[K],Pe=!0):et.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?ie=st.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[se]:ie=nt,T.copy(C.viewport),F.copy(C.scissor),ce=C.scissorTest}else T.copy(X).multiplyScalar(te).floor(),F.copy(N).multiplyScalar(te).floor(),ce=G;if(Ge.bindFramebuffer(Z.FRAMEBUFFER,ie)&&et.drawBuffers&&ae&&Ge.drawBuffers(C,ie),Ge.viewport(T),Ge.scissor(F),Ge.setScissorTest(ce),Pe){const Ne=st.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,se)}else if(He){const Ne=st.get(C.texture),lt=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ne.__webglTexture,se||0,lt)}le=-1},this.readRenderTargetPixels=function(C,K,se,ae,ie,Pe,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke){Ge.bindFramebuffer(Z.FRAMEBUFFER,Ke);try{const Ne=C.texture,lt=Ne.format,nt=Ne.type;if(lt!==pi&&Fe.convert(lt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=nt===eo&&(Ve.has("EXT_color_buffer_half_float")||et.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(nt!==Lr&&Fe.convert(nt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===Xi&&(et.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ae&&se>=0&&se<=C.height-ie&&Z.readPixels(K,se,ae,ie,Fe.convert(lt),Fe.convert(nt),Pe)}finally{const Ne=k!==null?st.get(k).__webglFramebuffer:null;Ge.bindFramebuffer(Z.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,K,se=0){const ae=Math.pow(2,-se),ie=Math.floor(K.image.width*ae),Pe=Math.floor(K.image.height*ae);P.setTexture2D(K,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,C.x,C.y,ie,Pe),Ge.unbindTexture()},this.copyTextureToTexture=function(C,K,se,ae=0){const ie=K.image.width,Pe=K.image.height,He=Fe.convert(se.format),Ke=Fe.convert(se.type);P.setTexture2D(se,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,se.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ae,C.x,C.y,ie,Pe,He,Ke,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ae,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,He,K.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ae,C.x,C.y,He,Ke,K.image),ae===0&&se.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,K,se,ae,ie=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,He=C.max.y-C.min.y+1,Ke=C.max.z-C.min.z+1,Ne=Fe.convert(ae.format),lt=Fe.convert(ae.type);let nt;if(ae.isData3DTexture)P.setTexture3D(ae,0),nt=Z.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)P.setTexture2DArray(ae,0),nt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ae.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ae.unpackAlignment);const rt=Z.getParameter(Z.UNPACK_ROW_LENGTH),Pt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),_n=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Gt=Z.getParameter(Z.UNPACK_SKIP_ROWS),En=Z.getParameter(Z.UNPACK_SKIP_IMAGES),gt=se.isCompressedTexture?se.mipmaps[ie]:se.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,gt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,gt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,C.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,C.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?Z.texSubImage3D(nt,ie,K.x,K.y,K.z,Pe,He,Ke,Ne,lt,gt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(nt,ie,K.x,K.y,K.z,Pe,He,Ke,Ne,gt.data)):Z.texSubImage3D(nt,ie,K.x,K.y,K.z,Pe,He,Ke,Ne,lt,gt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,rt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Pt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,_n),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Gt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,En),ie===0&&ae.generateMipmaps&&Z.generateMipmap(nt),Ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){V=0,O=0,k=null,Ge.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hd?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Zl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?os:Cg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?an:Ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class R1 extends Qg{}R1.prototype.isWebGL1Renderer=!0;class Vd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Vd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class C1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jg extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new Kt,Id=new Ug,Il=new Ql,Ul=new Y;class Ud extends On{constructor(e=new gi,t=new Jg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(o),Il.radius+=l,e.ray.intersectsSphere(Il)===!1)return;Qm.copy(o).invert(),Id.copy(e.ray).applyMatrix4(Qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,_=s.attributes.position;if(m!==null){const y=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let E=y,b=M;E<b;E++){const x=m.getX(E);Ul.fromBufferAttribute(_,x),Jm(Ul,x,p,o,e,t,this)}}else{const y=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let E=y,b=M;E<b;E++)Ul.fromBufferAttribute(_,E),Jm(Ul,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Jm(r,e,t,s,o,l,h){const d=Id.distanceSqToPoint(r);if(d<t){const p=new Y;Id.closestPointToPoint(r,p),p.applyMatrix4(s);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class P1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let o=0;const l=s.length;let h;t?h=t:h=e*s[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=s[o]-h,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,s[o]===h)return o/(l-1);const v=s[o],y=s[o+1]-v,M=(h-v)/y;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const h=this.getPoint(o),d=this.getPoint(l),p=t||(h.isVector2?new wt:new Y);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new Y,o=[],l=[],h=[],d=new Y,p=new Kt;for(let M=0;M<=e;M++){const E=M/e;o[M]=this.getTangentAt(E,new Y)}l[0]=new Y,h[0]=new Y;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),y=Math.abs(o[0].z);v<=m&&(m=v,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],d),h[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),h[M]=h[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gn(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(p.makeRotationAxis(d,E))}h[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(gn(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],M*E)),h[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Wd(){let r=0,e=0,t=0,s=0;function o(l,h,d,p){r=l,e=d,t=-3*l+3*h-2*d-p,s=2*l-2*h+d+p}return{initCatmullRom:function(l,h,d,p,m){o(h,d,m*(d-l),m*(p-h))},initNonuniformCatmullRom:function(l,h,d,p,m,v,_){let y=(h-l)/m-(d-l)/(m+v)+(d-h)/v,M=(d-h)/v-(p-h)/(v+_)+(p-d)/_;y*=v,M*=v,o(h,d,y,M)},calc:function(l){const h=l*l,d=h*l;return r+e*l+t*h+s*d}}}const Fl=new Y,_d=new Wd,xd=new Wd,yd=new Wd;class Hl extends P1{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new Y){const s=t,o=this.points,l=o.length,h=(l-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,v;this.closed||d>0?m=o[(d-1)%l]:(Fl.subVectors(o[0],o[1]).add(o[0]),m=Fl);const _=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?v=o[(d+2)%l]:(Fl.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),M),b=Math.pow(_.distanceToSquared(y),M),x=Math.pow(y.distanceToSquared(v),M);b<1e-4&&(b=1),E<1e-4&&(E=b),x<1e-4&&(x=b),_d.initNonuniformCatmullRom(m.x,_.x,y.x,v.x,E,b,x),xd.initNonuniformCatmullRom(m.y,_.y,y.y,v.y,E,b,x),yd.initNonuniformCatmullRom(m.z,_.z,y.z,v.z,E,b,x)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(m.x,_.x,y.x,v.x,this.tension),xd.initCatmullRom(m.y,_.y,y.y,v.y,this.tension),yd.initCatmullRom(m.z,_.z,y.z,v.z,this.tension));return s.set(_d.calc(p),xd.calc(p),yd.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const o=e.points[t];this.points.push(new Y().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class L1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);const wi={bg:new je("#04060a"),fog:new je("#04060a"),soil:new je("#241813"),soilDeep:new je("#0c0806"),scan:new je("#37e6d0"),node:new je("#7bffd6"),seed:new je("#8a5a32"),bark:new je("#5b4327"),barkTip:new je("#8fe6b0"),leaf:new je("#2f9e46"),leafGloss:new je("#7fffa8"),blossom:new je("#fff3c4"),appleUnripe:new je("#7cae3a"),appleRipe:new je("#cf2130"),appleBlush:new je("#f2544a")},ls=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),$s=(r,e,t)=>r+(e-r)*t;function mn(r,e,t){const s=ls((r-e)/(t-e));return s*s*(3-2*s)}function N1(r,e,t){const s=ls((r-e)/(t-e));return Math.sin(s*Math.PI)}function D1(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function I1(r=7,e={}){const{trunkHeight:t=5.2,branchLenMul:s=1,tiltMul:o=1,leafCountMul:l=1,leafScaleMul:h=1}=e,d=D1(r),p=(S,L)=>S+d()*(L-S),m=[],v=[],_=[];let y=1e-4;function M(S,L,R,D,V,O,k){const de=[],T=new Y(0,1,0),F=new Y(p(-1,1),0,p(-1,1)).normalize(),ce=O===0?0:p(.08,.22);S.clone(),L.clone().normalize().multiplyScalar(R/7);for(let X=0;X<=7;X++){const N=X/7,G=S.clone().addScaledVector(L.clone().normalize(),R*N);G.addScaledVector(F,Math.sin(N*Math.PI)*R*.06*p(.5,1.2)),G.y-=ce*R*N*N,de.push(G)}const ue=new Hl(de),j=k+R,re={curve:ue,r0:D,r1:V,depth:O,startDist:k,endDist:j,gStart:0,gEnd:0};m.push(re);const W=m.length-1;y=Math.max(y,j);const te=de[de.length-1],B=te.clone().sub(de[de.length-2]).normalize();if(O>=2){const X=Math.floor(p(3,7)*l);for(let N=0;N<X;N++){const G=p(.35,1),ye=ue.getPoint(G),q=k+R*G,fe=new Y(ye.x,0,ye.z).normalize().clone().lerp(T,.35).addScaledVector(new Y(p(-1,1),p(-.3,1),p(-1,1)),.5).normalize();v.push({pos:ye,normal:fe,scale:p(.7,1.25)*h,spin:p(0,Math.PI*2),growth:q,branchIndex:W,branchT:G})}}if(O>=2&&d()<.55){const X=te.clone();X.y-=V*2+.15,_.push({pos:X,scale:p(.8,1.15),growth:j,anchor:te.clone(),branchIndex:W})}if(O<4){const X=O===0?4:O===1?3:2;for(let N=0;N<X;N++){const G=O===0?p(.82,1):p(.45,.95),ye=ue.getPoint(G),q=k+R*G,oe=N/X*Math.PI*2+p(-.5,.5),fe=(O===0?p(.5,.9):p(.6,1.15))*o,be=new Y(Math.cos(oe)*Math.sin(fe),Math.cos(fe)+.35,Math.sin(oe)*Math.sin(fe)).normalize();be.lerp(B,.25).normalize();const Te=R*p(.55,.75)*s,Ee=V*p(.7,.95),Ze=Ee*.55;M(ye,be,Te,Ee,Ze,O+1,q)}}}M(new Y(0,0,0),new Y(.05,1,.02),t,.55,.34,0,0);for(const S of m)S.gStart=S.startDist/y,S.gEnd=S.endDist/y;for(const S of v)S.growth/=y;for(const S of _)S.growth/=y;let E=0,b=-1/0;_.forEach((S,L)=>{const R=S.pos.y+S.pos.z*.4-Math.abs(S.pos.x)*.2;R>b&&(b=R,E=L)});const x=_.length?_[E].branchIndex:-1;return{branches:m,leaves:v,fruits:_,fallIndex:E,fallBranchIndex:x,maxDist:y}}function U1(r={}){return new Ai({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ja,uniforms:{uReveal:{value:0},uTime:{value:0},uSize:{value:r.size??2},uDrift:{value:r.drift??.14},uOpacity:{value:r.opacity??1},uFall:{value:1},uFallHeight:{value:r.fallHeight??0},uRipen:{value:-1},uUnripe:{value:new je("#7cae3a")},uRipe:{value:new je("#cf2130")},uBlush:{value:new je("#f2544a")},uAlpha:{value:.28},uDarken:{value:1}},vertexShader:`
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
    `})}const kl=new Y,tg=new la,F1=new Y(0,1,0);class Tr{constructor(){this.pos=[],this.growth=[],this.color=[],this.rand=[],this.size=[]}push(e,t,s,o,l,h){this.pos.push(e,t,s),this.growth.push(o),this.color.push(l.r,l.g,l.b),this.rand.push(Math.random()),this.size.push(h)}addCurve(e,t,s,o,l,h,d,p){for(let m=0;m<s;m++){const v=Math.random(),_=e.getPoint(v),y=t*(.3+Math.pow(Math.random(),.5))*1.1,M=Math.random()*Math.PI*2,E=(Math.random()-.5)*t;_.x+=Math.cos(M)*y,_.z+=Math.sin(M)*y,_.y+=E;const b=o+(l-o)*v;this.push(_.x,_.y,_.z,b,h,d+Math.random()*(p-d))}}addLeafPuff(e,t,s,o,l,h,d,p,m){tg.setFromUnitVectors(F1,t);for(let v=0;v<l;v++){const _=Math.pow(Math.random(),.75),y=Math.sin(Math.max(0,_)*Math.PI),M=(Math.random()*2-1)*y*o,E=_*s,b=(Math.random()*2-1)*y*o*.4;kl.set(M,E,b).applyQuaternion(tg).add(e),this.push(kl.x,kl.y,kl.z,h,d,p+Math.random()*(m-p))}}addBlob(e,t,s,o,l,h,d,p,m){for(let v=0;v<l;v++){const _=Math.random(),y=Math.random()*Math.PI*2,M=Math.acos(2*Math.random()-1),E=Math.pow(_,.6),b=e.x+E*Math.sin(M)*Math.cos(y)*t,x=e.y+E*Math.cos(M)*s,S=e.z+E*Math.sin(M)*Math.sin(y)*o;this.push(b,x,S,h,d,p+Math.random()*(m-p))}}build(e){const t=new gi;t.setAttribute("position",new Un(this.pos,3)),t.setAttribute("aGrowth",new Un(this.growth,1)),t.setAttribute("aColor",new Un(this.color,3)),t.setAttribute("aRand",new Un(this.rand,1)),t.setAttribute("aSize",new Un(this.size,1));const s=new Ud(t,e);return s.frustumCulled=!1,s}}const hi=(r,e,t)=>new Y(r,e,t),Ol=hi(1.2,-1,0);class k1{constructor(e){this.scene=e,this.tree=I1(7,{trunkHeight:5.4,branchLenMul:1.4,tiltMul:1.25,leafCountMul:2.4,leafScaleMul:1.6}),this.group=new Za,e.add(this.group),this.mats=[],this.buildEnvironment(),this.buildWaveField(),this.buildSeed(),this.buildRoots(),this.buildSeedling(),this.buildWoody(),this.buildCanopy(),this.buildFruit(),this.buildBlossoms(),this.buildFall()}_mat(e){const t=U1(e);return this.mats.push(t),t}buildEnvironment(){const{scene:e}=this;e.background=null,e.fog=new Vd(new je("#04060a"),.013);const t=1300,s=new Float32Array(t*3);for(let l=0;l<t;l++)s[l*3]=(Math.random()-.5)*46,s[l*3+1]=Math.random()*26-4,s[l*3+2]=(Math.random()-.5)*46;const o=new gi;o.setAttribute("position",new mi(s,3)),this.ambient=new Ud(o,new Jg({color:8378598,size:.05,transparent:!0,opacity:.28,depthWrite:!1,blending:Ja})),e.add(this.ambient)}buildWaveField(){const s=[],o=[];for(let h=0;h<176;h++)for(let d=0;d<176;d++){const p=-15+h/175*2*15,m=-15+d/175*2*15;Math.hypot(p,m)>15||(s.push(p,0,m),o.push(Math.random()))}const l=new gi;l.setAttribute("position",new Un(s,3)),l.setAttribute("aRand",new Un(o,1)),this.waveMat=new Ai({transparent:!0,depthWrite:!1,blending:Ja,uniforms:{uTime:{value:0},uAmp:{value:.5},uRipple:{value:0},uRippleAmp:{value:0},uRippleCenter:{value:new wt(0,0)},uSize:{value:1.5},uOpacity:{value:1},uLow:{value:new je("#0b3f7a")},uHigh:{value:new je("#4df0d6")},uAlpha:{value:.55},uDarken:{value:1}},vertexShader:`
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
      `}),this.wave=new Ud(l,this.waveMat),this.wave.frustumCulled=!1,this.group.add(this.wave)}buildSeed(){const e=new Tr,t=new je("#5c3418"),s=.45;for(let o=0;o<3200;o++){const l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),d=.7+.3*Math.pow(Math.random(),.85);let p=Math.cos(l)*Math.sin(h)*d,m=Math.cos(h)*d,v=Math.sin(l)*Math.sin(h)*d;const _=(m+1)/2,y=1-.72*Math.pow(1-_,1.8);p*=.44*y,v*=.34*y,m*=.62,e.push(p,s+m,v,0,t,.7+Math.random()*1.1)}this.seedMat=this._mat({size:1.15,drift:.05,fallHeight:8}),this.seedMat.uniforms.uReveal.value=1,this.seed=e.build(this.seedMat),this.group.add(this.seed)}buildRoots(){const e=new Tr,t=(_,y)=>_+Math.random()*(y-_),s=[];let o=.001;const l=(_,y,M,E,b,x)=>{const L=[],R=new Y(t(-1,1),0,t(-1,1)).normalize(),D=y.clone().normalize();for(let le=0;le<=6;le++){const de=le/6,T=_.clone().addScaledVector(D,M*de);T.y-=Math.pow(de,1.3)*M*.22,T.addScaledVector(R,Math.sin(de*Math.PI)*M*.13*t(.4,1.1)),L.push(T)}const V=new Hl(L),O=E*.14,k=b+M;if(s.push({curve:V,r0:E,r1:O,startDist:b,endDist:k,depth:x}),o=Math.max(o,k),x<4){const le=x===0||Math.random()<.45?3:2;for(let de=0;de<le;de++){const T=t(.35,.94),F=V.getPoint(T),ce=b+M*T,ue=t(0,Math.PI*2),j=t(.55,1.15),re=new Y(Math.cos(ue)*Math.sin(j),-Math.abs(Math.cos(j))-.3,Math.sin(ue)*Math.sin(j)).normalize(),W=M*t(.5,.72),te=$s(E,O,T)*t(.72,.95);l(F,re,W,te,ce,x+1)}}};l(hi(0,-.4,0),hi(.05,-1,.03),2.6,.16,0,0);const h=wi.seed.clone(),d=new je("#d9a066"),p=new je;for(const _ of s){const y=_.startDist/o,M=_.endDist/o,E=_.curve.getLength(),b=Math.max(50,Math.floor(E*460));for(let x=0;x<b;x++){const S=Math.random(),L=_.curve.getPoint(S),R=$s(_.r0,_.r1,S),D=R*Math.pow(Math.random(),.6),V=Math.random()*Math.PI*2;L.x+=Math.cos(V)*D,L.z+=Math.sin(V)*D,L.y+=(Math.random()-.5)*R*.4,p.copy(h).lerp(d,S*.5);const O=$s(1.9,.45,S)*(_.depth>=2?.8:1);e.push(L.x,L.y,L.z,$s(y,M,S),p,O)}}const m=s[0],v=new je("#17c7ad");this.nodeAlong=[.22,.5,.78];for(const _ of this.nodeAlong){const y=m.curve.getPoint(_),M=(m.startDist+_*(m.endDist-m.startDist))/o;e.addBlob(y,.15,.15,.15,140,M,v,1.2,2.6)}this.rootMat=this._mat({size:1,drift:.05}),this.roots=e.build(this.rootMat),this.group.add(this.roots)}buildSeedling(){const e=new Tr,t=new je("#6fce63"),s=wi.leafGloss.clone(),o=new Hl([hi(0,0,0),hi(.04,.5,.02),hi(-.03,1,-.02),hi(0,1.5,0)]);e.addCurve(o,.05,1100,0,.65,t,.8,1.8);const l=hi(0,1.5,0),h=hi(-.9,.7,.15).normalize(),d=hi(.9,.7,-.15).normalize();e.addLeafPuff(l,h,.85,.4,900,.72,s,.8,2),e.addLeafPuff(l,d,.85,.4,900,.78,s,.8,2),this.seedlingMat=this._mat({size:1.15,drift:.12}),this.seedling=e.build(this.seedlingMat),this.group.add(this.seedling)}buildWoody(){const e=new Tr,t=new je("#8a6636"),s=new je("#5e441f"),o=new je;this.tree.branches.forEach((l,h)=>{const d=l.curve.getLength(),p=Math.max(l.r1,(l.r0+l.r1)*.5),m=l.depth===0?900:230,v=Math.floor(d*m)+40,_=l.depth===0?.15:.55;o.copy(t).lerp(s,_+Math.random()*.3);let y=l.curve;if(h===this.tree.fallBranchIndex){const M=l.curve.points,E=M.map((b,x)=>b.clone().addScaledVector(Ol,x/(M.length-1)));y=new Hl(E)}e.addCurve(y,p,v,l.gStart,l.gEnd,o,1,2.6)}),this.woodyMat=this._mat({size:1.1,drift:.05}),this.woody=e.build(this.woodyMat),this.group.add(this.woody)}buildCanopy(){const e=new Tr,t=wi.leaf.clone(),s=wi.leafGloss.clone(),o=new je,l=new Y;for(const d of this.tree.leaves){l.add(d.pos),o.copy(t).lerp(s,Math.random()*.5);const p=1.15*d.scale,m=.55*d.scale,v=d.branchIndex===this.tree.fallBranchIndex?d.pos.clone().addScaledVector(Ol,d.branchT):d.pos;e.addLeafPuff(v,d.normal,p,m,70,d.growth,o,.9,2.6)}l.multiplyScalar(1/Math.max(1,this.tree.leaves.length)),this.crownCenter=l.clone();const h=4.6;for(let d=0;d<16e3;d++){const p=new Y(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),m=Math.pow(Math.random(),.6)*h,v=l.clone().addScaledVector(p,m);v.y+=(h-m)*.15,o.copy(t).lerp(s,Math.random()*.6);const _=ls(.55+m/h*.45);e.push(v.x,v.y,v.z,_,o,.7+Math.random()*1.6)}this.canopyMat=this._mat({size:1.05,drift:.18}),this.canopy=e.build(this.canopyMat),this.group.add(this.canopy)}buildFruit(){const e=new Tr,t=wi.appleRipe.clone();this.fallIndex=this.tree.fallIndex,this.fallAnchor=this.tree.fruits[this.fallIndex].pos.clone().add(Ol),this.tree.fruits.forEach((s,o)=>{o!==this.fallIndex&&e.addBlob(s.pos,.42*s.scale,.36*s.scale,.42*s.scale,200,s.growth,t,1.2,2.8)}),this.fruitMat=this._mat({size:1.1,drift:.05}),this._setRipenColors(this.fruitMat),this.fruit=e.build(this.fruitMat),this.group.add(this.fruit)}_setRipenColors(e){e.uniforms.uUnripe.value.copy(wi.appleUnripe),e.uniforms.uRipe.value.copy(wi.appleRipe),e.uniforms.uBlush.value.copy(wi.appleBlush)}buildBlossoms(){const e=new Tr,t=wi.blossom.clone();this.tree.fruits.forEach((s,o)=>{const l=o===this.tree.fallIndex?s.anchor.clone().add(Ol):s.anchor;e.addBlob(l,.16,.16,.16,40,0,t,1.6,3.6)}),this.blossomMat=this._mat({size:1.5,drift:.08}),this.blossomMat.uniforms.uReveal.value=1,this.blossoms=e.build(this.blossomMat),this.group.add(this.blossoms)}buildFall(){const e=new Tr,t=wi.appleRipe.clone();e.addBlob(hi(0,0,0),.44,.38,.44,340,0,t,1.4,3.2),this.fallMat=this._mat({size:1.1,drift:.04}),this.fallMat.uniforms.uReveal.value=1,this._setRipenColors(this.fallMat),this.fall=e.build(this.fallMat),this.fall.position.copy(this.fallAnchor),this.group.add(this.fall)}update(e,t){for(const E of this.mats)E.uniforms.uTime.value=t;this.waveMat.uniforms.uTime.value=t;const s=mn(e,0,.1);this.seedMat.uniforms.uFall.value=s;const o=mn(e,.1,.28);this.seed.position.y=-o*.8;const l=mn(e,.36,.5);this.seedMat.uniforms.uOpacity.value=1-l,this.seed.visible=l<.99,this.waveMat.uniforms.uAmp.value=$s(.55,.12,mn(e,.5,.7)),this.waveMat.uniforms.uOpacity.value=1-.45*mn(e,.55,.72);let h=0,d=0;e<.5&&(h=mn(e,.08,.42),d=.7),this.rootMat.uniforms.uReveal.value=mn(e,.2,.4),this.roots.visible=e<.52;const p=mn(e,.34,.5);this.seedlingMat.uniforms.uReveal.value=p,this.seedlingMat.uniforms.uOpacity.value=1-mn(e,.56,.66),this.seedling.visible=p>.01&&e<.68,this.woodyMat.uniforms.uReveal.value=mn(e,.48,.72),this.canopyMat.uniforms.uReveal.value=mn(e,.56,.78);const m=mn(e,.72,.8)*(1-mn(e,.82,.9));this.blossomMat.uniforms.uOpacity.value=m,this.blossoms.visible=m>.01;const v=mn(e,.72,.86),_=mn(e,.74,.92);this.fruitMat.uniforms.uReveal.value=v,this.fruitMat.uniforms.uRipen.value=_,this.fallMat.uniforms.uRipen.value=_;const y=ls((e-.86)/(.94-.86)),M=y*y;this.fall.visible=v>.01,this.fall.position.set(this.fallAnchor.x,$s(this.fallAnchor.y,.3,M),this.fallAnchor.z),this.fall.rotation.z=y*3,e>=.94?(h=mn(e,.94,1),d=1.8,this.waveMat.uniforms.uRippleCenter.value.set(this.fallAnchor.x,this.fallAnchor.z)):this.waveMat.uniforms.uRippleCenter.value.set(0,0),this.waveMat.uniforms.uRipple.value=h,this.waveMat.uniforms.uRippleAmp.value=d,this.ambient.rotation.y=t*.008}}const Dn=(r,e,t)=>new Y(r,e,t),zl=[{p:0,pos:Dn(0,6.5,21),tgt:Dn(0,1.6,0)},{p:.16,pos:Dn(2.2,5.2,18),tgt:Dn(0,.6,0)},{p:.34,pos:Dn(4.5,-1.2,14),tgt:Dn(0,-2.4,0)},{p:.5,pos:Dn(2.6,2.6,13),tgt:Dn(0,1.2,0)},{p:.72,pos:Dn(-3.2,7.5,27),tgt:Dn(0,7,0)},{p:.86,pos:Dn(6,11.5,23),tgt:Dn(.4,9.5,0)},{p:1,pos:Dn(0,8.5,34),tgt:Dn(0,8,0)}],O1=r=>r*r*(3-2*r);function z1(r){return r<.2?0:r<.4?1:r<.58?2:r<.78?3:4}function B1(r){return r<.2?0:r<.34?1:r<.5?2:r<.72?3:4}function j1(r){r.traverse(e=>{e.geometry&&e.geometry.dispose(),(Array.isArray(e.material)?e.material:e.material?[e.material]:[]).forEach(s=>{Object.values(s).forEach(o=>{o&&o.isTexture&&o.dispose()}),s.dispose()})})}function H1({sectionRef:r,onStageChange:e,onAnnotationChange:t,onWebGLUnavailable:s}){const o=Re.useRef(null),l=Re.useRef(e);l.current=e;const h=Re.useRef(t);h.current=t;const d=Re.useRef(s);return d.current=s,Re.useEffect(()=>{const p=o.current,m=r.current;if(!p||!m)return;const v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _;try{_=new Qg({canvas:p,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{d.current&&d.current();return}_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,0),_.toneMapping=yg,_.toneMappingExposure=1.1;const y=new C1,M=new ti(50,window.innerWidth/window.innerHeight,.1,400);M.position.set(0,5,12);const E=new k1(y);let b=!1;const x=new Y,S=new Y,L=(W,te)=>{let B=0;for(;B<zl.length-2&&W>zl[B+1].p;)B++;const Q=zl[B],X=zl[B+1],N=O1(ls((W-Q.p)/(X.p-Q.p)));x.lerpVectors(Q.pos,X.pos,N),S.lerpVectors(Q.tgt,X.tgt,N);const G=N1(W,.5,.72);S.y+=G*1.7,x.y+=G*.9,x.z+=G*3.2,x.x+=Math.sin(te*.22)*.3,x.y+=Math.cos(te*.18)*.18,b&&x.sub(S).multiplyScalar(1.28).add(S),M.position.copy(x),M.lookAt(S)},R=()=>{const W=window.innerWidth,te=window.innerHeight;b=W<821,M.aspect=W/te,M.clearViewOffset(),_.setSize(W,te),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),b?M.setViewOffset(W,te,0,te*.2,W,te):M.setViewOffset(W,te,W*.22,0,W,te),M.updateProjectionMatrix()};R();const D=()=>{const W=m.getBoundingClientRect(),te=m.offsetHeight-window.innerHeight,B=ls(-W.top,0,Math.max(0,te));return te>0?ls(B/te):0};let V=-1,O=-1;const k=W=>{const te=z1(W);te!==V&&(V=te,l.current&&l.current(te));const B=B1(W);B!==O&&(O=B,h.current&&h.current(B))},le=new L1;let de=D(),T=null;const F=()=>{const W=D();de=W,E.update(W,0),L(W,0),k(W),_.render(y,M)},ce=()=>{const W=Math.min(le.getDelta(),.05),te=le.elapsedTime,B=D(),Q=1-Math.pow(.0015,W);de+=(B-de)*Q,E.update(de,te),L(de,te),k(de),_.render(y,M),T=requestAnimationFrame(ce)},ue=()=>{R(),v&&F()};window.addEventListener("resize",ue);const j=W=>{W.preventDefault(),T&&(cancelAnimationFrame(T),T=null)};p.addEventListener("webglcontextlost",j,!1);let re=null;return v?(re=()=>F(),window.addEventListener("scroll",re,{passive:!0}),F()):T=requestAnimationFrame(ce),()=>{var W;T&&cancelAnimationFrame(T),window.removeEventListener("resize",ue),re&&window.removeEventListener("scroll",re),p.removeEventListener("webglcontextlost",j,!1),j1(y),y.clear(),_.dispose(),(W=_.forceContextLoss)==null||W.call(_)}},[r]),u.jsx("canvas",{ref:o,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",zIndex:0}})}class ev extends na.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){}render(){const{error:e}=this.state;if(e){const{fallback:t}=this.props;return typeof t=="function"?t(e):t!==void 0?t:null}return this.props.children}}const G1=560,V1=[0,-1.5,1.5,-2,2],W1=[0,-6,5,-5,6];function X1(r,e,t){const s=t?"0px":"-50%";if(r<=e){const l=V1[r]??0;return{transform:`translate(${W1[r]??0}px, ${t?"0px":s}) rotate(${l}deg)`,opacity:1,zIndex:10+r}}return{transform:`translate(0, ${t?"45%":"90%"}) rotate(2deg) scale(.96)`,opacity:0,zIndex:1}}function q1({card:r,style:e}){return u.jsxs("article",{className:"story-card",style:e,children:[u.jsx("div",{className:"sc-accent"}),u.jsxs("div",{className:"sc-body",children:[u.jsx("p",{className:"sc-num",children:r.num}),u.jsx("h3",{className:"sc-title",children:r.title}),r.callout&&u.jsxs("div",{className:"sc-callout",children:[u.jsx("span",{className:"sc-callout-label",children:r.callout.label}),u.jsx("p",{className:"sc-callout-text",children:r.callout.text})]}),u.jsx("div",{className:"sc-chips",children:r.human.map(t=>u.jsx("span",{className:"chip chip-human",children:t},t))}),u.jsxs("div",{className:"sc-ai",children:[u.jsxs("div",{className:"sc-ai-head",children:[u.jsx("span",{className:"sc-ai-star",children:"✦"}),u.jsx("span",{className:"sc-ai-label",children:"AI accelerates"})]}),u.jsx("div",{className:"sc-chips",style:{margin:0},children:r.ai.map(t=>u.jsx("span",{className:"chip chip-ai",children:t},t))})]})]})]})}function Y1(){const r=Re.useRef(null),{theme:e}=gg(),[t,s]=Re.useState(0),[o,l]=Re.useState(typeof window<"u"?window.innerWidth<821:!1);Re.useEffect(()=>{const _=()=>l(window.innerWidth<821);return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const h=Re.useCallback(_=>s(_),[]),[d,p]=Re.useState(!1),m=Re.useCallback(()=>p(!0),[]),v=Re.useRef(null);return u.jsxs("section",{id:"practice",ref:r,className:"practice-section",style:{position:"relative",zIndex:10,background:"var(--practice-bg)"},children:[u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(64px,9vw,120px) clamp(22px,5vw,44px) clamp(40px,6vw,72px)"},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-on-inverse-soft)",marginBottom:14},children:"Practice"}),u.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"18ch",color:"var(--text-on-inverse)"},children:"The process, end to end."})]}),u.jsx("div",{ref:v,style:{position:"relative",height:`${G1}vh`},children:u.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden"},children:[d&&u.jsx("div",{className:"practice-tree-fallback","aria-hidden":"true"}),u.jsx(ev,{fallback:null,children:u.jsx(H1,{sectionRef:v,onStageChange:h,onWebGLUnavailable:m})}),u.jsx("div",{className:"practice-card-layer","aria-live":"polite",children:u.jsx("div",{className:"practice-card-shell",children:s_.map((_,y)=>u.jsx(q1,{card:_,style:X1(y,t,o)},_.id))})})]})}),u.jsx("span",{"data-theme-marker":e,style:{display:"none"}})]})}const Bl={fontFamily:"var(--font-mono)"};function $1(){return u.jsx("section",{id:"instruments",style:{position:"relative",zIndex:10,background:"var(--bg-page)"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[u.jsxs("div",{"data-reveal":"",style:{marginBottom:"clamp(36px,5vw,52px)"},children:[u.jsx("div",{style:{...Bl,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:14},children:"Instruments"}),u.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(28px,3.8vw,44px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.03em",margin:0,maxWidth:"22ch",color:"var(--text-primary)"},children:"When the work repeats, the tool gets built."}),u.jsxs("p",{style:{fontFamily:"var(--font-body)",fontSize:"clamp(15px,1.6vw,17px)",lineHeight:1.55,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"52ch"},children:["Three tools I designed and built for my own workflow — then published to the"," ",u.jsx("span",{style:{color:"var(--text-primary)"},children:"Figma Community"}),", where other designers use them too."]})]}),u.jsx("div",{className:"instruments-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(14px,2vw,20px)",transitionDelay:"0.12s"},children:a_.map(r=>u.jsxs("a",{href:r.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${r.alt} on the Figma Community`,className:"instrument-card",style:{background:"var(--bg-surface)",borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",minHeight:280,boxShadow:"var(--shadow-card)",color:"inherit"},children:[u.jsx("div",{style:{height:28,display:"flex",alignItems:"center"},children:u.jsx("img",{src:r.logo,alt:r.alt,className:"theme-logo",style:{...r.logoStyle,opacity:1}})}),u.jsxs("div",{style:{marginTop:"auto",paddingTop:28},children:[u.jsx("div",{style:{...Bl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:8},children:"The problem"}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-secondary)"},children:r.problem}),u.jsx("div",{style:{height:1,background:"var(--border-subtle)",margin:"18px 0"}}),u.jsx("div",{style:{...Bl,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent)",fontWeight:700,marginBottom:8},children:"The result"}),u.jsx("div",{style:{fontFamily:"var(--font-body)",fontSize:15,lineHeight:1.5,color:"var(--text-primary)"},children:r.result}),u.jsxs("div",{className:"instrument-cta",style:{...Bl,fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginTop:20,display:"flex",alignItems:"center",gap:6},children:["View on Figma Community ",u.jsx("span",{className:"instrument-cta-arrow","aria-hidden":"true",children:"↗"})]})]})]},r.id))})]})})}const K1=144,ng=40;function Z1(r){const[e,t]=Re.useState(-1),s=Re.useCallback(h=>t(h),[]),o=Re.useCallback(()=>t(-1),[]),l=Re.useCallback((h,d)=>{const p=h*K1,m=r[h%r.length];if(e===-1)return{x:p,rot:m,scale:1,z:h};const v=h-e;return v===0?{x:p,rot:0,scale:1.04,z:100}:{x:p+(v<0?-ng:ng),rot:m,scale:.98,z:50-Math.abs(v)}},[e,r]);return{activeIndex:e,focus:s,rest:o,getTransform:l}}const Q1=Md.map(r=>r.rot);function J1(){const{focus:r,rest:e,getTransform:t}=Z1(Q1),s=Md.length;return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...ig,fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-tertiary)",fontWeight:700,marginBottom:22},children:"In their words"}),u.jsx("div",{className:"spread",onMouseLeave:e,style:{position:"relative",height:370,display:"flex",alignItems:"center",justifyContent:"flex-start",overflow:"visible"},children:u.jsx("div",{style:{position:"relative",width:1e3,height:240,left:0},children:Md.map((o,l)=>{const h=t(l,s);return u.jsxs("article",{onMouseEnter:()=>r(l),onClick:()=>r(l),style:{position:"absolute",top:0,left:0,width:278,minHeight:220,background:"var(--bg-surface)",borderRadius:18,padding:"22px 24px",boxShadow:"var(--shadow-float)",transformOrigin:"50% 92%",willChange:"transform",cursor:"default",display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 500ms cubic-bezier(0.16,1,0.3,1)",transform:`translateX(${h.x}px) rotate(${h.rot}deg) scale(${h.scale})`,zIndex:h.z},children:[u.jsx("div",{style:{fontSize:26,lineHeight:0,color:"var(--border-strong)",height:14},children:"“"}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.55,color:"var(--text-body)",margin:"8px 0 16px"},children:o.quote}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:"auto",paddingTop:13,borderTop:"1px solid var(--border-card)"},children:[u.jsx("span",{style:{width:32,height:32,borderRadius:"50%",background:"var(--accent-soft-bg)",color:"var(--accent)",display:"grid",placeItems:"center",...ig,fontSize:10,fontWeight:700,flex:"none"},children:o.initials}),u.jsxs("div",{style:{fontSize:11.5,lineHeight:1.45},children:[u.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-primary)",fontWeight:600},children:o.name}),u.jsx("br",{}),u.jsx("span",{style:{fontFamily:"var(--font-body)",color:"var(--text-secondary)"},children:o.title})]})]})]},o.id)})})}),u.jsx("div",{style:{marginTop:16,textAlign:"right"},children:u.jsxs("a",{href:o_,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500},children:["Read all recommendations on LinkedIn ",u.jsx("span",{style:{fontSize:11},children:"↗"})]})})]})}const ig={fontFamily:"var(--font-mono)"},rg={fontFamily:"var(--font-mono)"};function eE(){return u.jsx("section",{id:"about",style:{position:"relative",zIndex:10,background:"var(--bg-section-alt)"},children:u.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(22px,5vw,44px)"},children:[u.jsx("div",{style:{...rg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:26},children:"Who I am"}),u.jsxs("div",{className:"about-grid","data-reveal":"",style:{display:"grid",gridTemplateColumns:"1.5fr 0.7fr",gap:"clamp(28px,4vw,56px)",alignItems:"start"},children:[u.jsxs("div",{children:[u.jsxs("blockquote",{style:{margin:0,fontFamily:"var(--font-display)",fontSize:"clamp(26px,3.4vw,42px)",fontWeight:600,lineHeight:1.14,letterSpacing:"-0.025em",maxWidth:"22ch",color:"var(--text-primary)"},children:[Mi.quoteLead,u.jsx("span",{style:{color:"var(--accent)"},children:Mi.quoteAccent}),Mi.quoteTail]}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:15.5,lineHeight:1.65,color:"var(--text-secondary)",margin:"26px 0 0",maxWidth:"52ch"},children:Mi.paragraphs[0]}),u.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:14,lineHeight:1.6,color:"var(--text-secondary)",margin:"18px 0 0",maxWidth:"50ch"},children:Mi.paragraphs[1]})]}),u.jsxs("div",{children:[u.jsxs("div",{style:{borderRadius:16,overflow:"hidden",background:"var(--bg-surface)",boxShadow:"var(--shadow-card)"},children:[u.jsx("img",{src:Mi.portrait,alt:"Yogesh Shetty",style:{width:"100%",aspectRatio:"855/1024",objectFit:"cover",display:"block"}}),u.jsxs("div",{style:{padding:"16px 18px"},children:[u.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:16,fontWeight:600,color:"var(--text-primary)"},children:"Yogesh Shetty"}),u.jsx("div",{style:{...rg,fontSize:11,color:"var(--accent)",marginTop:2},children:"Senior Product Designer · Oslo"})]})]}),u.jsx("div",{style:{marginTop:14},children:Mi.facts.map(r=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)",fontSize:13},children:[u.jsx("span",{style:{color:"var(--text-secondary)"},children:r.label}),u.jsx("span",{style:{color:r.accent==="teal"?"var(--teal)":"var(--text-primary)"},children:r.value})]},r.label))}),u.jsx("a",{href:Mi.resume,download:!0,className:"cta-pill",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:16,padding:"13px 18px",borderRadius:10,fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,textAlign:"center"},children:"↓ Download résumé"})]})]}),u.jsx("div",{"data-reveal":"",style:{marginTop:"clamp(40px,5vw,60px)",paddingTop:28,borderTop:"1px solid var(--border-subtle)",transitionDelay:"0.12s"},children:u.jsx(J1,{})}),u.jsxs("div",{style:{marginTop:"clamp(28px,3.5vw,40px)",paddingTop:20,borderTop:"1px dashed var(--border-strong)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.8,color:"var(--text-secondary)"},children:[Mi.careerLine,u.jsx("span",{style:{color:"var(--teal)",fontWeight:600},children:Mi.careerHighlight})]})]})})}const sg={fontFamily:"var(--font-mono)"};function tE(){return u.jsxs("footer",{id:"contact",style:{position:"relative",zIndex:10,background:"var(--bg-page)",overflow:"hidden"},children:[u.jsxs("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:.4},children:[u.jsx("div",{style:{position:"absolute",width:"40vw",height:"40vw",maxWidth:500,maxHeight:500,top:"-20%",right:"10%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-1), transparent 70%)",filter:"blur(80px)"}}),u.jsx("div",{style:{position:"absolute",width:"30vw",height:"30vw",maxWidth:400,maxHeight:400,bottom:"10%",left:"20%",borderRadius:"50%",background:"radial-gradient(circle, var(--blob-contact-2), transparent 70%)",filter:"blur(80px)"}})]}),u.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"clamp(72px,11vw,150px) clamp(22px,5vw,44px) clamp(40px,5vw,56px)"},children:[u.jsx("div",{"data-reveal":"",style:{...sg,fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-tertiary)",marginBottom:24},children:"Got a brief?"}),u.jsxs("h2",{"data-reveal":"",style:{fontFamily:"var(--font-display)",fontSize:"clamp(36px,6.5vw,84px)",fontWeight:600,lineHeight:1.02,letterSpacing:"-0.035em",margin:0,maxWidth:"15ch",color:"var(--text-primary)",transitionDelay:"0.08s"},children:[Ks.heading," ",u.jsx("span",{style:{color:"var(--accent)"},children:Ks.headingAccent})]}),u.jsx("div",{"data-reveal":"",style:{display:"flex",gap:28,flexWrap:"wrap",alignItems:"center",marginTop:"clamp(36px,5vw,52px)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,transitionDelay:"0.14s"},children:Ks.links.map(r=>u.jsx("a",{href:r.href,className:`text-link ${r.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:r.variant==="primary"?{paddingBottom:3}:void 0,...r.external?{target:"_blank",rel:"noopener noreferrer"}:{},...r.download?{download:!0}:{},children:r.label},r.label))}),u.jsx("div",{style:{marginTop:"clamp(56px,9vw,100px)",paddingTop:18,borderTop:"1px solid var(--border-subtle)",...sg,fontSize:11,letterSpacing:"0.04em",color:"var(--text-muted)"},children:Ks.copyright})]})]})}function tv(r){Re.useEffect(()=>{const e=r.current;if(!e||typeof IntersectionObserver>"u")return;const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.setAttribute("data-reveal","visible"),t.unobserve(o.target))})},{threshold:.08,rootMargin:"0px 0px -20px 0px"});return e.querySelectorAll("[data-reveal]").forEach(s=>t.observe(s)),()=>t.disconnect()},[r])}function nE(r){Re.useEffect(()=>{},[r])}const iE=!1;function rE(){const r=Re.useRef(null);return tv(r),nE(iE),Re.useEffect(()=>{const e=window.location.hash.slice(1);if(!e)return;let t=!1;const s=()=>{t=!0};window.addEventListener("wheel",s,{passive:!0,once:!0}),window.addEventListener("touchmove",s,{passive:!0,once:!0});const o=[0,120,300,600].map(l=>setTimeout(()=>{var h;t||(h=document.getElementById(e))==null||h.scrollIntoView()},l));return()=>{o.forEach(clearTimeout),window.removeEventListener("wheel",s),window.removeEventListener("touchmove",s)}},[]),u.jsxs("div",{id:"top",ref:r,style:{minHeight:"100vh",background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",fontWeight:400},children:[u.jsx(vg,{}),u.jsxs("main",{children:[u.jsx(p_,{}),u.jsx(v_,{}),u.jsx(x_,{}),u.jsx(Y1,{}),u.jsx($1,{}),u.jsx(eE,{})]}),u.jsx(tE,{})]})}const Fd={},nv=na.createContext(Fd);function Zi(r){const e=na.useContext(nv);return na.useMemo(function(){return typeof r=="function"?r(e):{...e,...r}},[e,r])}function sE(r){let e;return r.disableParentContext?e=typeof r.components=="function"?r.components(Fd):r.components||Fd:e=Zi(r.components),na.createElement(nv.Provider,{value:e},r.children)}function iv(){return u.jsx(vg,{subpage:!0})}const vt=r=>u.jsx("path",{d:r},r),aE={user:[vt("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"),u.jsx("circle",{cx:"12",cy:"7",r:"4"},"c")],users:[vt("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"),u.jsx("circle",{cx:"9",cy:"7",r:"4"},"c"),vt("M22 21v-2a4 4 0 0 0-3-3.87"),vt("M16 3.13a4 4 0 0 1 0 7.75")],pin:[vt("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"),u.jsx("circle",{cx:"12",cy:"10",r:"3"},"c")],device:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),vt("M12 18h.01")],calendar:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"},"r"),vt("M16 2v4M8 2v4M3 10h18")],wrench:[vt("M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z")],rocket:[vt("M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"),vt("M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"),vt("M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"),vt("M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5")],trendUp:[u.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"},"a"),u.jsx("polyline",{points:"16 7 22 7 22 13"},"b")],cube:[vt("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"),vt("M3.27 6.96 12 12.01l8.73-5.05"),vt("M12 22.08V12")],layers:[u.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"},"a"),u.jsx("polyline",{points:"2 17 12 22 22 17"},"b"),u.jsx("polyline",{points:"2 12 12 17 22 12"},"c")],check:[vt("M22 11.08V12a10 10 0 1 1-5.93-9.14"),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"},"p")],ban:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),u.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},"l")],shield:[vt("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],zap:[u.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},"p")],alert:[vt("M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"),u.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"},"a"),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"},"b")],compass:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"c"),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},"p")],eye:[vt("M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"),u.jsx("circle",{cx:"12",cy:"12",r:"3"},"c")],refresh:[vt("M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"),vt("M21 3v5h-5"),vt("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"),vt("M8 16H3v5")],merge:[u.jsx("circle",{cx:"18",cy:"18",r:"3"},"a"),u.jsx("circle",{cx:"6",cy:"6",r:"3"},"b"),vt("M6 21V9a9 9 0 0 0 9 9")],minimize:[u.jsx("polyline",{points:"4 14 10 14 10 20"},"a"),u.jsx("polyline",{points:"20 10 14 10 14 4"},"b"),u.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"},"c"),u.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"},"d")],sliders:[u.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"},"a"),u.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"},"b"),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"},"c"),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"},"d"),u.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"},"e"),u.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"},"f"),u.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"},"g"),u.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"},"h"),u.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"},"i")],filter:[u.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},"p")],sparkles:[vt("M12 3l1.9 4.8L18 9.5l-4.1 1.7L12 16l-1.9-4.8L6 9.5l4.1-1.7L12 3z"),vt("M19 15l.6 1.6L21 17.2l-1.4.6L19 19l-.6-1.6L17 17.8l1.4-.6L19 15z")],flask:[vt("M9 3h6"),vt("M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3"),vt("M7 15h10")],chart:[u.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"},"a"),u.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"},"b"),u.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"},"c")],flag:[vt("M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"),u.jsx("line",{x1:"4",y1:"22",x2:"4",y2:"15"},"l")],target:[u.jsx("circle",{cx:"12",cy:"12",r:"10"},"a"),u.jsx("circle",{cx:"12",cy:"12",r:"6"},"b"),u.jsx("circle",{cx:"12",cy:"12",r:"2"},"c")],smartphone:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"},"r"),vt("M12 18h.01")],lightbulb:[vt("M9 18h6"),vt("M10 22h4"),vt("M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14")]},ag={quote:"M9.5 5C6.5 5 4 7.5 4 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C9.6 19.5 13 16 13 10.6 13 7.3 11.6 5 9.5 5Zm10 0C16.5 5 14 7.5 14 10.9c0 3.1 2.2 5.1 5 5.1.3 0 .6 0 .9-.1-.7 1.6-2.3 2.8-4.4 3.2-.4.1-.6.5-.5.9.1.4.5.6.9.5C19.6 19.5 23 16 23 10.6 23 7.3 21.6 5 19.5 5Z"};function Ir({name:r,size:e=18,strokeWidth:t=1.75,className:s,style:o,...l}){if(ag[r])return u.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false",...l,children:u.jsx("path",{d:ag[r]})});const h=aE[r];return h?u.jsx("svg",{className:s,style:o,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...l,children:h}):null}const rv=Re.createContext({});function kd(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(kd).join(" "):r&&r.props?kd(r.props.children):""}function sv(r){return kd(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function oE({children:r,eyebrow:e,icon:t,id:s,...o}){const l=s||sv(r),h=Re.useContext(rv),d=t||h[l];return u.jsxs("div",{className:"cs-heading",id:l,...o,children:[u.jsxs("div",{className:"cs-heading-eyebrow",children:[u.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),d?u.jsx(Ir,{name:d,size:14,className:"cs-heading-icon"}):null,e?u.jsx("span",{children:e}):null]}),u.jsx("h2",{className:"cs-heading-title",children:u.jsx("a",{href:`#${l}`,className:"cs-heading-anchor",children:r})})]})}function lE({children:r,id:e,...t}){const s=e||sv(r);return u.jsx("h3",{className:"cs-subheading",id:s,...t,children:r})}function av({label:r="The outcome",icon:e="rocket",items:t=[],...s}){return u.jsxs("section",{className:"cs-outcomeband","aria-label":r,...s,children:[u.jsxs("div",{className:"cs-outcomeband-label",children:[u.jsx(Ir,{name:e,size:15}),u.jsx("span",{children:r})]}),u.jsx("div",{className:"cs-outcomeband-list",children:t.map((o,l)=>u.jsxs("div",{className:"cs-outcome",children:[u.jsx("span",{className:"cs-outcome-icon","aria-hidden":"true",children:u.jsx(Ir,{name:o.icon,size:20})}),u.jsx("div",{className:"cs-outcome-text",children:o.text})]},l))})]})}function at({children:r,lead:e=!1,className:t="",...s}){return u.jsx("div",{className:`cs-prose${e?" cs-prose--lead":""}${t?` ${t}`:""}`,...s,children:r})}function Rr({children:r,variant:e="principle",cite:t,...s}){const o=e==="user"?"user":"principle";return u.jsxs("figure",{className:`cs-pullquote cs-pullquote--${o}`,...s,children:[o==="user"?u.jsx("span",{className:"cs-pullquote-glyph","aria-hidden":"true",children:u.jsx(Ir,{name:"quote",size:40})}):u.jsx("span",{className:"cs-pullquote-chip","aria-hidden":"true",children:u.jsx(Ir,{name:"lightbulb",size:18})}),u.jsx("blockquote",{className:"cs-pullquote-text",children:r}),t?u.jsx("figcaption",{className:"cs-pullquote-cite",children:t}):null]})}function Nr({src:r,alt:e="",loading:t="lazy"}){const[s,o]=Re.useState(!1);return r&&!s?u.jsx("span",{className:"cs-figure-media",children:u.jsx("img",{src:r,alt:e,loading:t,decoding:"async",onError:()=>o(!0)})}):u.jsx(cE,{alt:e,file:r})}function cE({alt:r="",file:e,bare:t=!1}){const s=typeof e=="string"?e.split("/").pop():null;return u.jsxs("div",{className:`cs-placeholder${t?" cs-placeholder--bare":""}`,role:"img","aria-label":r||"Image placeholder",children:[u.jsx("span",{className:"cs-placeholder-tag",children:"Image"}),r?u.jsx("span",{className:"cs-placeholder-alt",children:r}):null,s?u.jsx("span",{className:"cs-placeholder-file",children:s}):null]})}function Ti({src:r,alt:e="",caption:t,fullBleed:s=!1,wide:o=!1,...l}){const h=`cs-figure${s?" cs-figure--full":o?" cs-figure--wide":""}`;return u.jsxs("figure",{className:h,...l,children:[u.jsx(Nr,{src:r,alt:e}),t?u.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function ov({src:r,alt:e="",chip:t,secondary:s,bare:o,...l}){const h=["cs-hero",s&&!o?"cs-hero--multi":"",o?"cs-hero--bare":""].filter(Boolean).join(" ");return u.jsxs("div",{className:h,...l,children:[u.jsx("span",{className:"cs-hero-grid","aria-hidden":"true"}),u.jsx("span",{className:"cs-hero-glow","aria-hidden":"true"}),u.jsx("div",{className:"cs-hero-stage",children:o?u.jsx(Nr,{src:r,alt:e,loading:"eager"}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"cs-hero-device cs-hero-device--tablet",children:u.jsx("div",{className:"cs-hero-screen",children:u.jsx(Nr,{src:r,alt:e,loading:"eager"})})}),s?u.jsx("div",{className:"cs-hero-device cs-hero-device--phone",children:u.jsx("div",{className:"cs-hero-screen cs-hero-screen--phone",children:u.jsx(Nr,{src:s.src,alt:s.alt})})}):null]})}),t?u.jsxs("span",{className:"cs-hero-chip",children:[u.jsx("span",{className:"cs-hero-chip-dot","aria-hidden":"true"}),t]}):null]})}function uE({items:r=[],caption:e,...t}){const s=Math.min(Math.max(r.length,1),4);return u.jsxs("figure",{className:"cs-illrow",style:{"--cs-cols":s},...t,children:[u.jsx("div",{className:"cs-illrow-grid",children:r.map((o,l)=>u.jsxs("div",{className:"cs-illrow-cell",children:[u.jsx(Nr,{src:o.src,alt:o.alt}),o.title||o.tag?u.jsxs("div",{className:"cs-illrow-meta",children:[o.title?u.jsx("div",{className:"cs-illrow-title",children:o.title}):null,o.tag?u.jsx("span",{className:`cs-illrow-tag cs-illrow-tag--${o.tone||"neutral"}`,children:o.tag}):null]}):null]},l))}),e?u.jsx("figcaption",{className:"cs-caption",children:e}):null]})}function dE({before:r={},after:e={},caption:t,beforeLabel:s="Before",afterLabel:o="After",...l}){return u.jsxs("figure",{className:"cs-beforeafter",...l,children:[u.jsxs("div",{className:"cs-beforeafter-grid",children:[u.jsxs("div",{className:"cs-ba-col",children:[u.jsx("span",{className:"cs-ba-tag cs-ba-tag--before",children:s}),u.jsx(Nr,{src:r.src,alt:r.alt})]}),u.jsxs("div",{className:"cs-ba-col",children:[u.jsx("span",{className:"cs-ba-tag cs-ba-tag--after",children:o}),u.jsx(Nr,{src:e.src,alt:e.alt})]})]}),t?u.jsx("figcaption",{className:"cs-caption",children:t}):null]})}function qi({title:r,index:e,media:t,tradeoff:s,children:o,...l}){return u.jsxs("section",{className:"cs-decision",...l,children:[u.jsxs("div",{className:"cs-decision-rail",children:[e?u.jsx("div",{className:"cs-decision-index",children:e}):null,r?u.jsx("h3",{className:"cs-decision-title",children:r}):null]}),u.jsxs("div",{className:"cs-decision-main",children:[u.jsx("div",{className:"cs-decision-body",children:o}),t?u.jsxs("div",{className:"cs-decision-media",children:[u.jsx(Nr,{src:t.src,alt:t.alt}),t.caption?u.jsx("div",{className:"cs-caption",children:t.caption}):null]}):null,s?u.jsxs("div",{className:"cs-tradeoff",children:[s.considered?u.jsxs("div",{className:"cs-tradeoff-row",children:[u.jsx("span",{className:"cs-tradeoff-label",children:"Alternative considered"}),u.jsx("p",{className:"cs-tradeoff-text",children:s.considered})]}):null,s.why?u.jsxs("div",{className:"cs-tradeoff-row",children:[u.jsx("span",{className:"cs-tradeoff-label",children:"Why we didn’t"}),u.jsx("p",{className:"cs-tradeoff-text",children:s.why})]}):null]}):null]})]})}function hE(r){return typeof r=="string"||typeof r=="number"?String(r).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""):""}function lv({heading:r,eyebrow:e,icon:t,intro:s,coda:o,id:l,children:h,...d}){const p=l||hE(r);return u.jsxs("section",{className:"cs-decisionlist",id:p,...d,children:[u.jsxs("div",{className:"cs-decisionlist-head",children:[u.jsxs("div",{className:"cs-heading-eyebrow",children:[u.jsx("span",{className:"cs-heading-num","aria-hidden":"true"}),t?u.jsx(Ir,{name:t,size:14,className:"cs-heading-icon"}):null,e?u.jsx("span",{children:e}):null]}),r?u.jsx("h2",{className:"cs-decisionlist-title",children:u.jsx("a",{href:`#${p}`,className:"cs-heading-anchor",children:r})}):null,s?u.jsx("div",{className:"cs-prose cs-decisionlist-intro",children:s}):null]}),u.jsx("div",{className:"cs-decisionlist-rows",children:h}),o?u.jsxs("div",{className:"cs-decisionlist-coda",children:[o.title?u.jsx("h3",{className:"cs-subheading cs-decisionlist-coda-title",children:o.title}):null,o.body?u.jsx("div",{className:"cs-prose cs-decisionlist-coda-body",children:o.body}):null]}):null]})}function og({caption:r,head:e=[],rows:t=[],rowHeader:s=!0,minWidth:o,...l}){return u.jsx("div",{className:"cs-table-wrap",...l,children:u.jsx("div",{className:"cs-table-scroll",children:u.jsxs("table",{className:"cs-table",style:o?{minWidth:o}:void 0,children:[r?u.jsx("caption",{children:r}):null,e.length?u.jsx("thead",{children:u.jsx("tr",{children:e.map((h,d)=>u.jsx("th",{scope:"col",children:h},d))})}):null,u.jsx("tbody",{children:t.map((h,d)=>u.jsx("tr",{children:h.map((p,m)=>m===0&&s?u.jsx("th",{scope:"row",children:p},m):u.jsx("td",{children:p},m))},d))})]})})})}function Xd({items:r=[],...e}){return u.jsx("div",{className:"cs-metricrow",...e,children:u.jsx("div",{className:"cs-metricrow-grid",children:r.map((t,s)=>u.jsxs("div",{className:"cs-metric",children:[t.icon?u.jsx("span",{className:"cs-metric-icon","aria-hidden":"true",children:u.jsx(Ir,{name:t.icon,size:18})}):null,t.value!=null?u.jsx("div",{className:`cs-metric-value${t.valueText?" cs-metric-value--text":""}`,children:t.value}):null,t.label?u.jsx("div",{className:"cs-metric-label",children:t.label}):null,t.note?u.jsx("div",{className:"cs-metric-note",children:t.note}):null]},s))})})}const fE={h2:r=>u.jsx(oE,{...r}),h3:r=>u.jsx(lE,{...r})},pE={Role:"user",Team:"users",Region:"pin",Platform:"device",Timeline:"calendar",Tools:"wrench"};function mE({meta:r={},next:e,children:t}){const{title:s,subtitle:o,tags:l=[],glance:h=[],accent:d}=r,p=d?{"--cs-accent":d}:void 0,m=Re.useRef(null);return Re.useEffect(()=>{const v=m.current;v&&v.querySelectorAll(".cs-content > *").forEach(_=>{!_.classList.contains("cs-figure--full")&&!_.classList.contains("cs-hero")&&_.setAttribute("data-reveal","")})},[]),tv(m),u.jsxs("div",{className:"cs-page",style:p,ref:m,children:[u.jsx(gE,{}),u.jsx(iv,{}),u.jsxs("main",{children:[u.jsxs("header",{className:"cs-wrap",children:[u.jsxs("div",{className:"cs-masthead",children:[l.length?u.jsx("div",{className:"cs-tags",children:l.join("  ·  ")}):null,s?u.jsx("h1",{className:"cs-title",children:s}):null,o?u.jsx("p",{className:"cs-subtitle",children:o}):null]}),h.length?u.jsx("dl",{className:"cs-glance",children:h.map(v=>u.jsxs("div",{className:"cs-glance-item",children:[u.jsx("span",{className:"cs-glance-icon","aria-hidden":"true",children:u.jsx(Ir,{name:v.icon||pE[v.label],size:16})}),u.jsxs("div",{className:"cs-glance-textwrap",children:[u.jsx("dt",{className:"cs-glance-label",children:v.label}),u.jsx("dd",{className:"cs-glance-value",children:v.value})]})]},v.label))}):null]}),u.jsx("div",{className:"cs-wrap",children:u.jsx("article",{className:"cs-content",children:t})})]}),u.jsx(vE,{next:e})]})}function gE(){const r=Re.useRef(null);return Re.useEffect(()=>{let e=0;const t=()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{const s=document.documentElement,o=s.scrollHeight-s.clientHeight,l=o>0?Math.min(Math.max(s.scrollTop/o,0),1):0;r.current&&(r.current.style.transform=`scaleX(${l})`)})};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),cancelAnimationFrame(e)}},[]),u.jsx("div",{className:"cs-progress","aria-hidden":"true",children:u.jsx("i",{ref:r})})}function vE({next:r}){var e;return u.jsx("footer",{className:"cs-footer",children:u.jsxs("div",{className:"cs-footer-inner",children:[u.jsx("div",{className:"cs-next-label",children:r?"Next project":"More work"}),r?u.jsxs($l,{to:`/case-studies/${r.slug}`,className:"cs-next-link",children:[u.jsx("span",{children:((e=r.meta)==null?void 0:e.title)||r.slug}),u.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}):u.jsxs("a",{href:"/#work",className:"cs-next-link",children:[u.jsx("span",{children:"See all work"}),u.jsx("span",{className:"cs-next-arrow","aria-hidden":"true",children:"→"})]}),u.jsx("div",{className:"cs-footer-contact",children:Ks.links.map(t=>u.jsx("a",{href:t.href,className:`text-link ${t.variant==="primary"?"text-link--primary":"text-link--muted"}`,style:t.variant==="primary"?{paddingBottom:3}:void 0,...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},...t.download?{download:!0}:{},children:t.label},t.label))}),u.jsxs("div",{className:"cs-footer-meta",children:[u.jsx("span",{children:Ks.copyright}),u.jsx("a",{href:"/#top",className:"text-link text-link--muted",children:"Back to top ↑"})]})]})})}const Wn="/case-studies/cards/images",_E={order:2,title:"Self-service card management — a two-hour banking task, resolved in taps",subtitle:"Giving Neuflize OBC private-banking clients direct control of their debit cards — without loosening a single guardrail.",tags:["Private Banking","Native iOS & Android","Self-service","End-to-end ownership"],glance:[{label:"Role",value:"Sole designer, end to end — workshop facilitation, user flows, interaction and visual design, and design–engineering alignment"},{label:"Team",value:"1 Designer (me) · Engineering / tech lead · RMs & Operations as research stakeholders"},{label:"Client",value:"Neuflize OBC — ABN AMRO Private Banking, France"},{label:"Platform",value:"Native iOS & Android"},{label:"Design system",value:"ABN AMRO Emerald"},{label:"Status",value:"Live in production"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-hard-part-was-translation-not-requirements":"refresh","built-on-emerald":"layers","what-we-kept-with-a-human-on-purpose":"flag","the-impact-in-the-operation":"chart","the-takeaway":"target"}};function lg(r){const e={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...Zi(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,u.jsx(ov,{src:`${Wn}/01-hero.png`,alt:"The Manage card screen: a Neuflize OBC Visa Infinite card, a green ‘This card is active’ status, Card details and Block actions, and live payment and cash-withdrawal limits with progress bars.",secondary:{src:`${Wn}/02-all-cards.png`,alt:"The All cards overview — a client’s debit cards as tappable tiles, each showing the last four digits and holder name."},chip:"Live in production"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["At Neuflize OBC — ABN AMRO's private bank in France — clients had ",u.jsx(e.strong,{children:"no way to manage their own debit cards"}),". Adjusting a limit, blocking a lost card, turning on payments abroad: each one meant contacting a relationship manager and waiting."]}),u.jsxs(e.p,{children:["The feature I designed is ",u.jsx(e.strong,{children:"live in production"})," on native iOS and Android. It takes a change that used to run through two people and up to two hours, and resolves it in a few taps — while keeping every check a private bank needs."]})]}),`
`,u.jsx(av,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Shipped and live"})," on iOS and Android — clients now manage their own cards, not a prototype or a stalled pilot"]})},{icon:"zap",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Up to two hours → a matter of taps"})," — the client acts directly, with no relationship-manager handoff in the loop"]})},{icon:"users",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Routine work off two teams' desks"})," — thousands of card requests a year no longer route through RMs and operations by hand"]})}]}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"One principle held the whole thing together:"})})}),`
`,u.jsx(Rr,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Self-service doesn't mean removing friction everywhere."})," It means putting friction exactly where the ",u.jsx("em",{children:"risk"})," is — and nowhere else."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"Picture being a private-banking client who wants to raise a card limit before a large purchase. You can't just do it. You call — or email — your relationship manager (RM). They pick up, eventually. You explain. They pass it to the operations team, who log into the card-management back office and make the change by hand, then tell the RM, who tells you it's done."}),u.jsxs(e.p,{children:["Nothing about that request was complex. The wait was ",u.jsx(e.strong,{children:"entirely structural"})," — the client simply had no door into the system."]})]}),`
`,u.jsx(Rr,{variant:"user",children:"Clients weren't asking for anything clever. They wanted to change a limit or block a card — and felt powerless that they couldn't."}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"What that cost, measured across the operation:"}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:["A client could wait ",u.jsx(e.strong,{children:"up to two hours"})," for a change as small as a limit bump."]}),`
`,u.jsxs(e.li,{children:["RMs fielded ",u.jsx(e.strong,{children:"2,000+ card requests a year"})," — routine work pulling them off the advisory conversations they're actually there for."]}),`
`,u.jsxs(e.li,{children:["Operations spent roughly ",u.jsx(e.strong,{children:"80 hours a week"})," processing those requests by hand, acting as a manual layer between the client and a system that could have taken the instruction directly."]}),`
`]}),u.jsxs(e.p,{children:["The core question was blunt: ",u.jsx(e.em,{children:"could card management become fully self-service — without a private bank giving up any of its control?"})]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/03-current-journey.png`,alt:"A service blueprint of the current journey for raising a card limit: client → relationship manager → operations team → card back-office → back again, with a row of frowning faces and pain-point notes across every handoff.",caption:"The old journey for one limit change. Every column is a handoff; every handoff is a place it can stall — and the client can't act at any point in the chain."}),`
`,u.jsx(at,{children:u.jsxs(e.p,{children:["Laid out end to end, the diagnosis was obvious: ",u.jsx(e.strong,{children:"every step was a handoff, and every handoff was a failure point"})," — a person to reach, a queue to wait in, a verbal instruction that could be misheard, and no status the client could see. The job wasn't to speed the chain up. It was to collapse it into a single self-contained flow the client runs alone."]})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"I started with interviews on both sides of the counter — clients, RMs, operations, and digital support — to map where the friction actually lived rather than where the business assumed it did. Two pictures lined up: clients felt powerless over trivial tasks, and the internal teams knew these requests were routine and repetitive but still had to touch every one."}),u.jsxs(e.p,{children:["Then, before drawing anything, I ran a ",u.jsx(e.strong,{children:"workshop with stakeholders"})," to pressure-test the problem space — mapping the card tasks clients actually did against the problems they actually hit, so we designed for real behaviour, not an assumed feature list."]})]}),`
`,u.jsx(Ti,{src:`${Wn}/04-workshop.png`,alt:"A whiteboard from the discovery workshop: clustered sticky notes under Usage and Problem columns, with ‘How might we…’ questions written alongside for lost cards, managing multiple cards, changing limits, forgotten PINs and payment errors.",caption:"Mapping usage against real problems — the input that decided what to build first, and what to leave for later."}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["That mapping is where the ",u.jsx(e.strong,{children:"scope decision"})," got made. Clients hit a long tail of card problems, but four rose to the top on frequency and on how cleanly they could be solved self-service:"]}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Limit change"})," — the single most common request"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Block / unblock"})," — urgent and time-sensitive by nature"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Card removal"})," — rare, but entirely manual today"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Payments abroad"})," — recurring friction for travelling clients"]}),`
`]}),u.jsx(e.p,{children:"Everything else stayed out of v1 on purpose. Choosing four and defending the boundary mattered as much as the design itself."}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"One boundary worth naming:"})," I owned the client-facing design across those flows and the card landing page. The routing and limit ",u.jsx(e.em,{children:"policy"}),", the card-management back office, and the identity/authentication service were the bank's systems — engineering owned whether the app could even reach them, and the entire self-service premise rode on that access being there. Knowing exactly where my slice started and ended shaped every trade-off below."]})]}),`
`,u.jsx(e.h2,{children:"The hard part was translation, not requirements"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["I'll be honest about where the difficulty was on this one. The ",u.jsx(e.em,{children:"requirement"})," was never ambiguous: make card management self-service, keep it bank-grade secure. The challenge was entirely in the ",u.jsx(e.strong,{children:"design"})," — turning a task that had always been mediated by a person, with all the verification and reassurance that person quietly provided, into a screen a client trusts enough to act on alone."]}),u.jsx(e.p,{children:"Two surfaces carried most of that weight, and I explored both widely before committing:"}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The card landing page"})," had to answer a client's first two questions at a glance — ",u.jsx(e.em,{children:"what can I do here, and is my card okay?"})," — without burying the state under a menu."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"The limit-change interaction"})," had to hold a surprising amount: how much, for how long, whether it's permanent or temporary, and proof that it's really you — all without feeling like the phone call it replaced."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/05-landing-explorations.png`,alt:"Six explorations of the card landing page side by side, varying how card state, limits, management actions and payment toggles are ordered and grouped.",caption:"Landing-page explorations. The question every variant was tested against: does a client see their card's state and their next action without thinking?"}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/06-limit-explorations.png`,alt:"Explorations of the limit-change component: different ways of showing the current limit, a new amount, preset chips, and the temporary-versus-permanent choice.",caption:"Limit-change explorations — the hardest single component, because it had to carry amount, duration and identity at once."}),`
`,u.jsx(e.h2,{children:"The design decisions"}),`
`,u.jsxs(lv,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"Every decision below is the same principle applied at a different level of risk: keep the low-risk actions instant, and spend the client's attention only where a mistake would actually cost them."}),coda:{title:"Built to survive real banking states",body:u.jsx(u.Fragment,{children:"Underneath all of it, the interface had to hold states the phone call used to absorb: a blocked card, a limit that's only temporary, missing contact details, an identity that still needs proving. One decision per screen, and the card's current state visible at every step."})},children:[u.jsx(qi,{index:"01",title:"The landing page shows state first, actions second",media:{src:`${Wn}/08-manage-card-final.png`,alt:"The final Manage card landing: the card itself, an active/blocked status line, Card details and Block, then live limits with progress bars, then payment toggles, then Delete card."},tradeoff:{considered:"A flat menu of card actions — the conventional pattern.",why:u.jsxs(u.Fragment,{children:["A menu hides the one thing clients open the screen to see: ",u.jsx(e.strong,{children:"is my card okay, and what's left on it?"})," It also flattens risk — listing “view details” and “raise my limit by €30k” as equal rows. Leading with live state, then ordering actions by how often they're used, answered the real first question."]})},children:u.jsxs(e.p,{children:["The landing page opens with the card and a plain status line — ",u.jsx(e.em,{children:"this card is active"})," — then live payment and cash-withdrawal limits as progress bars, then management actions, and only then the destructive ones. It reads top to bottom as ",u.jsx(e.em,{children:"reassurance → routine → rare"}),"."]})}),u.jsx(qi,{index:"02",title:"Authenticate at the point of commitment — not on the way in",media:{src:`${Wn}/09-manage-payments.png`,alt:"The Manage payments section: simple on/off toggles for Remote payment, Cash withdrawal and Payment abroad, with no authentication step."},tradeoff:{considered:"Gating the whole feature behind a verification wall — the compliance-safe instinct to lock every action.",why:u.jsxs(u.Fragment,{children:["Uniform friction would have rebuilt the exact wait we were removing. Most card actions are low-risk and reversible; a few aren't. So I put the identity step where the ",u.jsx(e.strong,{children:"commitment"})," is — raising a limit, deleting a card — and left browsing, viewing and toggling free."]})},children:u.jsx(e.p,{children:"Viewing card state and flipping low-risk controls — remote payment, cash withdrawal, payments abroad — happen instantly, because they're reversible and carry little exposure. The identity check appears only when a client is about to do something that would actually cost them if it were the wrong person. Same feature, friction calibrated to the stakes."})}),u.jsx(qi,{index:"03",title:"Default the limit change to temporary, not permanent",media:{src:`${Wn}/10-limit-change-final.png`,alt:"The limit-change flow across screens: enter a new amount within a shown ceiling, a summary of current versus new limit with an end date, a 5-digit PIN identity step, and a success confirmation.",caption:"Enter an amount within the ceiling → confirm the summary → prove identity → done. The end date is part of the request, not an afterthought."},tradeoff:{considered:"A single permanent “new limit” field, the simplest possible control.",why:u.jsxs(u.Fragment,{children:["Watching the real requests, most limit bumps are for one reason — a large purchase, a trip — not a permanent change. A permanent-only field either over-exposes the client indefinitely or forces a ",u.jsx(e.em,{children:"second"})," call to put it back. Foregrounding a temporary increase with an automatic end date fit what clients actually needed."]})},children:u.jsxs(e.p,{children:["The flow makes duration a first-class part of the request: a client raises the limit ",u.jsx(e.em,{children:"for seven days"}),", or ",u.jsx(e.em,{children:"for thirty"}),", up to a clearly shown ceiling, and it reverts on its own. The card landing then carries a quiet “temporarily valid until…” marker so the temporary state is never a surprise. Identity is proven with a PIN step folded into the flow — not a separate hoop."]})}),u.jsx(qi,{index:"04",title:"Block is instant and reversible — cancelling stays with a human",media:{src:`${Wn}/11-block-card.png`,alt:"The block flow: a confirmation sheet to block the card, and the resulting blocked state with a padlock over the card, an Unblock action, and a note to call support to fully cancel."},tradeoff:{considered:"Treating block as a single destructive “cancel card” action.",why:u.jsxs(u.Fragment,{children:["Blocking is usually a ",u.jsx(e.em,{children:"panic"})," action — a card that's briefly missing. It should be instant and, just as importantly, ",u.jsx(e.strong,{children:"reversible in seconds"})," when the card turns up. Cancellation is destructive and rare, so it deliberately stays a call. Collapsing the two would make the common, urgent case as heavy as the rare one."]})},children:u.jsx(e.p,{children:"A client blocks a card in one confirmation, and the card visibly locks. If it resurfaces, they unblock it just as fast — no call, no wait. Permanent cancellation, which can't be undone, still routes to support on purpose."})}),u.jsxs(qi,{index:"05",title:"When verification is missing, fall back — don't dead-end",children:[u.jsx(e.p,{children:"A sensitive change needs verified contact details to confirm it's really the client. Rather than let someone reach the end of a flow and hit a wall, the design checks up front: if a verified email or phone number is on file, the change proceeds and the identity step confirms it; if not, the flow routes cleanly to the bank to sort the details out first."}),u.jsx(e.p,{children:"It's the unglamorous decision that keeps a security requirement from becoming a dead end — the app degrades to a human hand-off gracefully, instead of failing the client at the last step."})]})]}),`
`,u.jsx(e.h2,{children:"Built on Emerald"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["None of this shipped as bespoke UI. Every screen is built on ",u.jsx(e.strong,{children:"ABN AMRO's Emerald design system"}),", so the feature reads as part of the wider app rather than a bolt-on, and it moved into development faster because engineering was assembling known, governed components rather than interpreting one-off designs."]}),u.jsxs(e.p,{children:["That's the quiet leverage of designing inside a system: my slice was the ",u.jsx(e.em,{children:"flows and the decisions"}),"; the system carried the consistency and cut the handoff cost. On a regulated private-banking app, that's not a constraint to work around — it's what makes the work trustworthy and shippable."]})]}),`
`,u.jsx(Ti,{src:`${Wn}/13-emerald-cards.png`,alt:"The Neuflize OBC card family rendered in the Emerald system — Visa Classic, Visa Infinite, Visa Business and Premier variants, consistent in type, layout and treatment.",caption:"The card family in Emerald — consistent with the broader digital ecosystem, and faster to hand off because of it."}),`
`,u.jsx(e.h2,{children:"What we kept with a human, on purpose"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["The honest boundary of this release: ",u.jsx(e.strong,{children:"not every card action became self-service, and that was a design choice, not a gap I missed."})]}),u.jsxs(e.p,{children:["Two things still route to a person. ",u.jsx(e.strong,{children:"Permanently cancelling a card"})," stays with the support team — it's irreversible and identity-sensitive, and the seconds saved by automating it aren't worth the risk of getting it wrong. And ",u.jsx(e.strong,{children:"correcting stale contact details"})," — a wrong email or phone number on file — routes to the relationship manager rather than letting the client edit the very data used to verify them."]}),u.jsxs(e.p,{children:["Both are deliberate. In a private bank, the right MVP isn't the one that automates the most actions — it's the one that automates every action where self-service is clearly ",u.jsx(e.em,{children:"safer and faster"}),", and knows precisely where to stop. Naming that line is the point, not apologising for it."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Wn}/14-delete-card.png`,alt:"The delete-card flow: choose a reason (stolen, lost, fraud), opt into a replacement and a new PIN, confirm the details on file, review a summary, and a success screen — with a route to contact the RM if the details are wrong.",caption:"The most sensitive flow carries the most steps — reason, replacement, identity, and a confirm — with a human hand-off kept in reach when the details don't match."}),`
`,u.jsx(e.h2,{children:"The impact, in the operation"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"The change isn't just faster for the client — it changes who does the work."})}),`
`,u.jsx(Xd,{items:[{icon:"zap",value:"2h → taps",label:"Time to change a card limit",note:"Client acts directly — no RM in the loop"},{icon:"users",value:"2,000+/yr",label:"Card requests off RMs’ desks",note:"Freeing them for advisory work"},{icon:"ban",value:"~80 hrs/wk",label:"Manual operations work removed",note:"The middle layer, automated away"}]}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["The figures above are the operation's own numbers — measured internally rather than estimated by me, and the reason the project got prioritised. Beyond the time saved, the ",u.jsx(e.em,{children:"shape"})," of the work shifted: RMs got hours back for the advisory conversations that justify a private bank, operations stopped being a manual relay, and the client got something a phone call never gave them — the ability to act the moment they needed to."]}),u.jsx(e.p,{children:"It also set the pattern. Proving that a genuinely sensitive banking task could be made self-service — securely, inside the design system — laid the groundwork for the next self-service capabilities on the platform."})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["This wasn't a task made prettier. It was a ",u.jsx(e.strong,{children:"handoff chain collapsed into a flow the client runs alone"})," — and the discipline that made it safe to do was refusing to spread friction evenly."]}),u.jsxs(e.p,{children:["The clearest lesson: on a regulated product, self-service is a question of ",u.jsx(e.em,{children:"placement"}),", not addition. Put the guardrail exactly where the risk is, make everything else instant, and know — precisely — which few actions still belong with a human. That's what turns a two-hour call into a few taps without a bank giving up an ounce of control."]})]}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on the card-management feature, end to end."})})})]})}function xE(r={}){const{wrapper:e}={...Zi(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(lg,{...r})}):lg(r)}const yE=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Wn,default:xE,meta:_E},Symbol.toStringTag,{value:"Module"})),SE={order:4,title:"Postbox — a complex document archive, made self-service",subtitle:"Reorganising a private-bank document archive around life events — the way clients actually think — across iOS, Android and web.",tags:["Private banking","Information architecture","Multi-platform","Self-service"],glance:[{label:"Client",value:"ABN AMRO"},{label:"Platform",value:"iOS · Android · Web"},{label:"Focus",value:"Document archive · information architecture"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-takeaway":"target"}};function cg(r){const e={em:"em",h2:"h2",p:"p",...Zi(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"A complex document archive made self-service — across all three platforms."})}),`
`,u.jsx(Xd,{items:[{icon:"smartphone",value:"3 platforms",valueText:!0,label:"iOS · Android · Web"},{icon:"target",value:"Self-serve",valueText:!0,label:"Was banker-led"}]}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"Clients needed their banker to find every document, because files were sorted the bank's way, not theirs."})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"High-net-worth clients leaned on their banker for every document. I built retrieval around life events rather than the compliance taxonomy — which stays underneath, invisible, doing its job."})}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsx(Rr,{variant:"principle",children:u.jsx(e.p,{children:"Organise by life event — the client's mental model."})}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer"})})})]})}function ME(r={}){const{wrapper:e}={...Zi(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(cg,{...r})}):cg(r)}const wE=Object.freeze(Object.defineProperty({__proto__:null,default:ME,meta:SE},Symbol.toStringTag,{value:"Module"})),EE={order:3,title:"Post-office portal — a legacy terminal, re-architected as a cloud portal",subtitle:"Mapping the system first, then designing one shared frame — the portal became the foundation for the whole Nordic ProdApp suite.",tags:["Logistics","Enterprise portal","Systems thinking","Nordic"],glance:[{label:"Client",value:"Posten Bring"},{label:"Region",value:"Oslo, Norway"},{label:"Timeline",value:"2025"},{label:"Scope",value:"Legacy desktop terminal → cloud portal"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","the-takeaway":"target"}};function ug(r){const e={em:"em",h2:"h2",p:"p",strong:"strong",...Zi(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(at,{children:u.jsxs(e.p,{children:["Onboarding ",u.jsx(e.strong,{children:"65% faster"})," — a legacy terminal re-architected as a cloud portal, and reused across the whole Nordic ProdApp suite."]})}),`
`,u.jsx(Xd,{items:[{icon:"chart",value:"65%",label:"Faster onboarding"},{icon:"layers",value:"1 system",valueText:!0,label:"Reused across the suite"}]}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"A legacy desktop terminal chained managers to one location and took weeks to learn."})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"A desk-bound legacy terminal chained managers to one location. Before drawing screens I mapped the dependencies between driver tools and regional management — and the portal became the foundation for the whole Nordic ProdApp suite."})}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsx(Rr,{variant:"principle",children:u.jsx(e.p,{children:"Map the system first, then design the shared frame."})}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer"})})})]})}function TE(r={}){const{wrapper:e}={...Zi(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(ug,{...r})}):ug(r)}const bE=Object.freeze(Object.defineProperty({__proto__:null,default:TE,meta:EE},Symbol.toStringTag,{value:"Module"})),Xn="/case-studies/swiftsort/images",AE={order:1,title:"SwiftSort — from memorized routes to instant, system-guided action",subtitle:"Shifting sorting decisions from workers to the system, across high-volume Nordic logistics terminals.",tags:["Logistics UX","Mobile & wearable","End-to-end ownership","POC → production"],glance:[{label:"Role",value:"Sole designer on this project (part of a wider design team) — owned research, UX strategy, interaction design, and design–engineering alignment end to end"},{label:"Team",value:"1 Product Manager · 4 Engineers · 2 Operations Leads"},{label:"Region",value:"Nordic"},{label:"Platform",value:"Android tablet + ProGlove wearable scanner"},{label:"Timeline",value:"3 months, proof-of-concept through to production"},{label:"Tools",value:"Figma, Figma Make, Banani, MS Copilot"}],sectionIcons:{"the-outcome":"rocket","the-problem":"alert","how-i-approached-it":"compass","what-the-old-workflow-actually-looked-like":"eye","the-moment-that-changed-the-design":"refresh","working-with-engineering":"merge","how-the-workflow-shrank":"minimize","one-solution-two-form-factors":"smartphone","a-second-win-surfaced-by-the-business":"layers","how-the-work-got-made":"sparkles","exploring-then-discarding":"filter","how-ai-fit-into-the-process":"sparkles","testing-on-the-floor":"flask",outcomes:"chart","what-we-shipped-knowingly-incomplete":"flag","the-takeaway":"target"}};function dg(r){const e={em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...Zi(),...r.components};return u.jsxs(u.Fragment,{children:[`
`,`
`,`
`,`
`,u.jsx(ov,{src:`${Xn}/01-hero.png`,alt:"The finished SwiftSort screen on a terminal tablet alongside the handheld TC57, two form factors, one sorting workflow.",bare:!0,chip:"Live in production"}),`
`,u.jsx(e.h2,{children:"The outcome"}),`
`,u.jsx(at,{children:u.jsxs(e.p,{children:["SwiftSort is ",u.jsx(e.strong,{children:"live in production"}),", running across the client's Nordic terminals. It replaced memory-dependent sorting with a scan-guided workflow — and the operations side felt the difference firsthand."]})}),`
`,u.jsx(av,{items:[{icon:"rocket",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Shipped and running in live terminals"})," — not a prototype or a pilot that stalled"]})},{icon:"trendUp",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Faster onboarding and fewer gate errors"})," — reported by terminal managers to business stakeholders, not just observed by the design team"]})},{icon:"cube",text:u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Zero new hardware, zero layout changes"})," — it ran on scanners workers already used"]})}]}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"The whole project ran on one principle:"})})}),`
`,u.jsx(Rr,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"Find the behavior that already exists, and build the system around it"})," — so workers have less to learn, not more."]})}),`
`,u.jsx(e.h2,{children:"The problem"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["Imagine standing on a warehouse floor as parcels pour in. Every box looks the same — nothing tells you which has to leave ",u.jsx(e.em,{children:"today"})," and which can wait. You just have to ",u.jsx(e.em,{children:"know"}),", from experience, which gate each postal code maps to and in what order to stack."]}),u.jsx(e.p,{children:"That was the daily reality. Sorting depended entirely on what workers had memorized. When I asked one operator how he kept it all straight, he shrugged:"})]}),`
`,u.jsx(Rr,{variant:"user",children:"I just memorize it. When I forget, I ask someone."}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"That one sentence is the whole problem. Critical operational knowledge wasn't in the system — it was in people's heads, and it walked out the door every time someone changed shifts or left."}),u.jsx(e.p,{children:u.jsx(e.strong,{children:"What that cost the business:"})}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Slow throughput"})," during peak hours, because every parcel required a mental lookup"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Frequent errors"})," — urgent and low-priority goods mixed at the gate, so time-sensitive deliveries missed their trucks"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Painful onboarding"})," — a new hire couldn't be useful until they'd memorized the routes, which took weeks"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Inconsistent terminals"})," — experienced operators were fast; everyone else was slow, and no two sites ran the same way"]}),`
`]}),u.jsx(e.p,{children:"Solving this the obvious way — new equipment, more training, a redesigned floor — would have been slow, costly, and hard to roll out across sites. The stronger play was to handle more volume with what the terminals already had."}),u.jsx(e.p,{children:u.jsx(e.strong,{children:"The reframe that shaped everything:"})})]}),`
`,u.jsx(Rr,{variant:"principle",children:u.jsxs(e.p,{children:["Sorting was never a screen problem. It was a ",u.jsx(e.em,{children:"decision"})," problem. Workers were doing system-level thinking — mapping, remembering, sequencing — manually, under pressure. The real opportunity wasn't to show them information faster. It was to move the thinking out of their heads and into the system."]})}),`
`,u.jsx(e.h2,{children:"How I approached it"}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"I started on the terminal floor, not in Figma — shadowing forklift operators through full shifts, watching how goods and pallets actually got stacked, and sitting with terminal managers and ops leads to find where the informal workarounds lived."}),u.jsxs(e.p,{children:["The job wasn't to invent a new way to sort, but to find the behavior that ",u.jsx(e.em,{children:"already worked"})," — the principle that drove every decision below."]}),u.jsxs(e.p,{children:[u.jsx(e.strong,{children:"One boundary worth naming:"})," SwiftSort doesn't decide ",u.jsx(e.em,{children:"where"})," a parcel goes — planners set routing upstream. My slice was the worker-facing decision layer: the moment upstream data becomes a physical action on a noisy floor. Knowing exactly where that slice started and ended shaped every trade-off below."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Xn}/05-research-synthesis.png`,alt:"A clustered affinity view of field observations grouped into themes such as memory dependence, environmental constraints, and LIFO stacking behaviour.",caption:"Field observations, clustered into themes — memory dependence, environmental constraints, LIFO stacking behaviour."}),`
`,u.jsx(e.h2,{children:"What the old workflow actually looked like"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"A single parcel took three steps — one physical, two mental. Watch the mental load grow:"})}),`
`,u.jsx(uE,{items:[{src:`${Xn}/02-illustration-scan.png`,alt:"Comic panel — the driver calmly scans the box, an empty thought-bubble above them: no mental effort.",title:"Scan the barcode",tag:"Physical",tone:"neutral"},{src:`${Xn}/03-illustration-read.png`,alt:"Comic panel — the driver reads the label, a small thought-bubble with a magnifying glass and a question mark: mild effort.",title:"Read the postal code off the label",tag:"Mental",tone:"mental"},{src:`${Xn}/04-illustration-mental-lookup.png`,alt:"Comic panel — the driver looks overwhelmed, a huge chaotic thought-bubble tangled with gate numbers, routes and arrows.",title:"Recall which gate, which route, which order",tag:"Mental — the bottleneck",tone:"bottleneck"}]}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"Steps 2 and 3 were invisible work — and that's where the time, the errors, and the training cost all lived, none of it written down anywhere the system could see."})}),`
`,u.jsx(e.h2,{children:"The moment that changed the design"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"The most important decision in this project didn't come from the brief. It came from watching a mistake."})}),`
`,u.jsx(e.h3,{children:"The wrong direction"}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"During proof-of-concept testing, forklift drivers kept struggling to reach a button on the mounted tablet — bolted in the only spot it physically fit, which wasn't a spot a human arm could reach mid-operation."}),u.jsxs(e.p,{children:["The team's instinct was everyone's: ",u.jsx(e.strong,{children:"make the button bigger, move the tablet, add a second one."})," We spent days on placement — and no one asked whether the button should exist at all."]})]}),`
`,u.jsx(e.h3,{children:"The reframe"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["I opened the session recording from that day and watched it again the next morning — and saw what I'd missed live: ",u.jsx(e.strong,{children:"every worker was already wearing a ProGlove scanner."})," Activated, in the workflow. They weren't reaching for the tablet because they wanted to touch it — the system was asking them to confirm with a tap."]}),u.jsxs(e.p,{children:["So I asked a different question: ",u.jsx(e.em,{children:"what if the button didn't have to be reachable?"})]}),u.jsxs(e.p,{children:["I proposed a ",u.jsx(e.strong,{children:"static QR code"})," as the last card in the list — scan it with the ProGlove already on your hand, ",u.jsx(e.em,{children:"or"})," tap it. On a tablet that's sometimes out of arm's reach, the scan path makes reach irrelevant: a button you can trigger from wherever you're standing."]}),u.jsx(e.p,{children:'Getting the team there took more than the idea. The button debate had days of momentum — so rather than argue placement, I brought everyone back to the recording and let them watch the glove do the work. The question shifted from "where does the button go" to "why is reach the constraint," and the room moved on its own.'}),u.jsx(e.p,{children:"I'll be honest: it was a hunch, not a proven answer — the kind of idea that's either elegant or redundant, and I couldn't tell which from a meeting room. It hinged on one thing I couldn't settle at a desk: would a worker mid-shift, gloves on, actually reach for the scan? That question sent it to the floor instead of a polished mockup."})]}),`
`,u.jsx(Rr,{variant:"principle",children:u.jsxs(e.p,{children:[u.jsx("strong",{children:"The insight came from watching a recording a second time — not from the brief."})," The fix wasn't a bigger button or a better mount. It was giving the worker a second way in, so the mounting distance stopped being a problem to solve."]})}),`
`,u.jsx(dE,{before:{src:`${Xn}/06-reframe-before.png`,alt:"The out-of-reach button mounted on the forklift tablet — a worker stretching to reach it mid-operation."},after:{src:`${Xn}/07-reframe-after.png`,alt:"The QR “DROP” card that gives a scannable path to the same confirmation action."},caption:"Scan or tap. Reach stops mattering."}),`
`,u.jsx(e.h2,{children:"Working with engineering"}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"The static-QR idea only worked because engineering pressure-tested it early."}),u.jsxs(e.p,{children:["Engineering's first instinct was a ",u.jsx(e.strong,{children:"dynamic QR"})," — a unique code generated for every scanned parcel. Within a day, they flagged the problems: significant backend complexity, scalability concerns, and a timeline we couldn't hit."]}),u.jsxs(e.p,{children:["We landed on ",u.jsx(e.strong,{children:"static QR"})," together — and it turned out to be not just simpler but genuinely ",u.jsx(e.em,{children:"better"}),":"]}),u.jsxs(e.ul,{children:[`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Reliable"})," — no backend to fail, works offline"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Scalable"})," — print, attach, deploy; the same code works at every terminal"]}),`
`,u.jsxs(e.li,{children:[u.jsx(e.strong,{children:"Zero-config"})," — operations can place codes anywhere without involving IT"]}),`
`]}),u.jsxs(e.p,{children:["The constraint didn't compromise the design — it ",u.jsx(e.em,{children:"improved"})," it: the thing easiest to build was also the most robust on the floor."]})]}),`
`,u.jsx(e.h2,{children:"How the workflow shrank"}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"Same three steps — the two mental ones designed away, and the confirmation freed from reach."})}),`
`,u.jsx(og,{head:["","Old workflow","Final design"],rows:[["Scan the parcel","✅","✅ (unchanged)"],["Read the postal code","Manual, from the label",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Eliminated"})," — destination shown instantly"]})],["Recall gate & route","Mental lookup",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Eliminated"})," — no memory needed"]})],["Confirm drop-off","Tap a button you had to reach",u.jsxs(u.Fragment,{children:[u.jsx(e.strong,{children:"Scan or tap"})," — the QR works from anywhere"]})]]}),`
`,u.jsxs(lv,{heading:"The design decisions",eyebrow:"And what each one traded off",icon:"sliders",intro:u.jsx(u.Fragment,{children:"Every choice below came from that same principle. None of them asked workers to learn something new."}),coda:{title:"Designed for an industrial floor",body:u.jsx(u.Fragment,{children:"Underpinning all of it, the interface had to survive the environment: readable at 1–2 meters, high-contrast for outdoor glare, large glove-friendly targets, and one decision per screen."})},children:[u.jsx(qi,{index:"01",title:"The QR code doubles as the button",media:{src:`${Xn}/09-qr-scan-or-tap.png`,alt:"The QR “DROP” card as the final item in the tablet drop list — scan it with the ProGlove, or tap to confirm."},tradeoff:{considered:"ProGlove gesture events — a wave or motion to confirm.",why:u.jsx(u.Fragment,{children:"Engineering flagged them as unstable in a noisy, fast-moving environment. A scannable, tappable QR was simply more reliable."})},children:u.jsxs(e.p,{children:["The QR sits as the ",u.jsx(e.strong,{children:"last card"})," in the drop list, and the dual input is deliberate: scan it with the ProGlove, or tap it. That redundancy is the point — if one input fails, the other still works, and reach never decides whether a worker can confirm."]})}),u.jsx(qi,{index:"02",title:"Scan-first — not voice",tradeoff:{considered:"Voice commands.",why:u.jsxs(u.Fragment,{children:["In a loud warehouse, reading barcode values aloud introduced ",u.jsx(e.strong,{children:"more"})," errors than it removed — missed or forgotten, especially when a worker handles several drop-offs at once. The clearest “no” in the project."]})},children:u.jsxs(e.p,{children:["Workers already scanned barcodes constantly, so making the ",u.jsx(e.em,{children:"scan itself"})," the trigger required no new behavior."]})}),u.jsxs(qi,{index:"03",title:"The screen mirrors the physical stack (LIFO)",media:{src:`${Xn}/10-lifo-layout.png`,alt:"The main screen: a large top card “12 CD, 1726 Sarpsborg” with smaller “06 AB” and “18 CD” cards beneath — largest card = last scanned = next dropped."},children:[u.jsxs(e.p,{children:["During research I saw that forklift drivers almost always drop off the ",u.jsx(e.strong,{children:"most recently scanned"})," item first — roughly 95–99% of the time, last-in is first-out."]}),u.jsxs(e.p,{children:["So the design puts the ",u.jsx(e.strong,{children:"latest scanned pallet as the largest card at the top"}),", with smaller cards beneath. The order on screen matches the order on the forklift — no mental translation."]}),u.jsxs(e.p,{children:[u.jsx(e.em,{children:"The honest edge case:"})," that leaves 1–5% of cases where last-scanned ",u.jsx(e.em,{children:"isn't"})," next-dropped. Workers can scan any card directly to override — but the override rate is the one assumption I'd want to instrument over a full peak season before calling it settled."]})]}),u.jsxs(qi,{index:"04",title:"Priority surfaces at the moment of sorting",children:[u.jsxs(e.p,{children:["Time-sensitive shipments now appear with a distinct accent treatment, floating to the top of the stack — ",u.jsx(e.strong,{children:"before"})," the worker decides where to place the parcel."]}),u.jsx(e.p,{children:"The priority signal used to live in dispatch, far upstream. Moving it to the sorting moment is why urgent and low-priority goods stopped mixing at the gate."}),u.jsx(e.p,{children:u.jsx(e.em,{children:"Not in the brief. Found in the field."})})]})]}),`
`,u.jsx(e.h2,{children:"One solution, two form factors"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["The QR-as-button was never meant to be everywhere — it solved a ",u.jsx(e.em,{children:"specific"})," physical problem: a tablet out of reach on a forklift. Some workers don't use a mounted tablet at all; they carry a handheld ",u.jsx(e.strong,{children:"TC57"})," with a built-in scanner, already in hand. So that version ",u.jsx(e.strong,{children:"drops the QR entirely"})," and confirms with a tap on the green ",u.jsx(e.strong,{children:"Drop"})," button."]}),u.jsx(e.p,{children:"The same task, designed twice:"})]}),`
`,u.jsx(og,{head:["","Mounted tablet + ProGlove","Handheld TC57"],rows:[["Where the device lives","Bolted to the forklift, sometimes out of reach","In the worker’s hand"],["How you confirm a drop","Scan the QR card, or tap it","Tap the Drop button"],["Why","Reach varies by vehicle — the scan path removes that variable","Reach is never in question — so no QR needed"]]}),`
`,u.jsx(at,{children:u.jsxs(e.p,{children:["This is the part I'm most deliberate about: the clever solution was matched to the context that ",u.jsx(e.em,{children:"needed"})," it, and withheld from the one that didn't. A QR on the TC57 would have been a solution in search of a problem. Match the input to the device's reality; don't standardize one pattern everywhere."]})}),`
`,u.jsx(Ti,{wide:!0,src:`${Xn}/12-tc57-stacking.png`,alt:"Three TC57 handheld screens side by side: the sort list with parcel cards, the stack mode showing grouped parcels at a destination, and the drop zone grid for manual zone lookup.",caption:"The full TC57 flow: sort, stack, and drop zone lookup, all tap-driven, no QR needed."}),`
`,u.jsx(e.h2,{children:"A second win, surfaced by the business"}),`
`,u.jsxs(at,{children:[u.jsx(e.p,{children:"The QR insight came from watching the floor. This one came from the other direction — a discovery session with the business."}),u.jsxs(e.p,{children:["Going through how the terminals actually ran with managers and ops leads, a pattern surfaced that observation alone had missed: when a driver had ",u.jsx(e.strong,{children:"several loose items headed to the same destination"}),", the app made them handle each one separately — a card per item, scanned and dropped one at a time. Quietly repetitive, and slower than it needed to be at volume."]}),u.jsxs(e.p,{children:["The idea didn't come from me alone. In a brainstorm with the ",u.jsx(e.strong,{children:"tech lead and product owner"}),", we shaped the high-level solution together — let a driver ",u.jsx(e.strong,{children:"group everything bound for one destination and drop it in a single scan"}),", triggered by a barcode embedded in the primary card. Engineering pressure-tested feasibility in the room; the PO kept us anchored on what mattered most; I designed the flow around both."]})]}),`
`,u.jsx(Ti,{src:`${Xn}/11-stacking-mode.png`,alt:"The split-screen stacking view: the main sort list on the left, a “Stacking Mode” panel on the right grouping multiple parcels under one destination.",caption:"Stacking mode — group loose items under one destination, drop them in a single scan."}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:"It's the clearest example of a decision that came from the room, not the brief — and the reason I treat discovery meetings as design research, not status updates."})}),`
`,u.jsx(e.h2,{children:"How the work got made"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["AI compressed the slow early phase; the field decided what shipped. ",u.jsx(e.strong,{children:"Figma Make"})," generated six LIFO card layouts fast — and I killed most against one test: could a worker read it at arm's length, in motion, wearing gloves? The variants that looked richer on a desktop screen were the first to go. ",u.jsx(e.strong,{children:"MS Copilot"}),` clustered raw field notes into themes (that's how the "priority at the sorting moment" finding surfaced); `,u.jsx(e.strong,{children:"Banani"})," structured the stacking flow before I committed it to Figma."]}),u.jsxs(e.p,{children:["Net effect: roughly ",u.jsx(e.strong,{children:"30% faster early exploration"})," — but every decision that shipped came from on-site testing, not a generated mockup."]})]}),`
`,u.jsx(Ti,{wide:!0,src:`${Xn}/14-discarded-variants.png`,alt:"A grid of early LIFO card layout explorations with the rejected variants visibly marked.",caption:"The range Figma Make gave me. Most were killed against one test: readable at arm's length, in motion, wearing gloves."}),`
`,u.jsx(e.h2,{children:"Outcomes"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["The wins up top aren't self-assessment — the faster onboarding and fewer gate errors came from ",u.jsx(e.strong,{children:"terminal managers"}),", who raised them with business stakeholders as proof the system was working. That's the validation I trust most: the people running the operation found it real enough to report upward."]}),u.jsxs(e.p,{children:["Beyond that, the ",u.jsx(e.em,{children:"shape"})," of the operation changed. Delivery priority became visible at the moment it mattered, so time-sensitive shipments left on time; and low-volume routes could be consolidated instead of dispatched half-empty — which made fast-delivery commitments more scalable."]})]}),`
`,u.jsx(e.h2,{children:"What we shipped knowingly incomplete"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["We went live as an MVP with one known, unresolved issue: ",u.jsx(e.strong,{children:"changing a drop-off location isn't intuitive yet, and parcels don't group as cleanly as they should."})," We knew this before launch — and shipped anyway, on purpose."]}),u.jsxs(e.p,{children:["Drop-off locations come from planners upstream, and we couldn't predict how that data would behave at real volume. So rather than guess at the grouping model in a design tool, we shipped the core workflow and used the first release to ",u.jsx(e.em,{children:"learn how the data behaves in the wild"})," — then optimize grouping and location-editing against real patterns, not assumptions."]}),u.jsx(e.p,{children:`It's the trade-off I'd defend hardest: an MVP with a named, understood gap that generates real learning beats a "complete" design built on guesses about data we didn't control.`})]}),`
`,u.jsx(e.h2,{children:"The takeaway"}),`
`,u.jsxs(at,{children:[u.jsxs(e.p,{children:["SwiftSort wasn't a UI redesign. It was a redesign of ",u.jsx(e.strong,{children:"how a decision gets made"})," on a warehouse floor."]}),u.jsxs(e.p,{children:["By moving the thinking out of workers' heads and into the system — triggered by behavior they already had — sorting shifted from ",u.jsx(e.em,{children:"memory-based"})," to ",u.jsx(e.em,{children:"system-guided"}),", from ",u.jsx(e.em,{children:"experience-dependent"})," to ",u.jsx(e.em,{children:"scalable"}),"."]}),u.jsxs(e.p,{children:["The clearest lesson: in operational systems, great design usually isn't about adding features. It's about ",u.jsx(e.strong,{children:"removing constraints"})," — and the best removal in this project came from watching a recording twice and asking why ",u.jsx(e.em,{children:"reach"})," had to be the thing we designed around at all."]})]}),`
`,u.jsx(at,{children:u.jsx(e.p,{children:u.jsx(e.em,{children:"Yogesh Shetty · Product Designer — sole designer on SwiftSort, end to end"})})})]})}function RE(r={}){const{wrapper:e}={...Zi(),...r.components};return e?u.jsx(e,{...r,children:u.jsx(dg,{...r})}):dg(r)}const CE=Object.freeze(Object.defineProperty({__proto__:null,IMAGES:Xn,default:RE,meta:AE},Symbol.toStringTag,{value:"Module"})),PE=Object.assign({"./cards/index.mdx":yE,"./postbox/index.mdx":wE,"./postoffice/index.mdx":bE,"./swiftsort/index.mdx":CE}),Qa=Object.entries(PE).map(([r,e])=>{var s;const t=(s=r.match(/\.\/([^/]+)\/index\.mdx$/))==null?void 0:s[1];return{slug:t,Component:e.default,meta:{slug:t,...e.meta||{}}}}).filter(r=>r.slug).sort((r,e)=>(r.meta.order??999)-(e.meta.order??999));function LE(r){return Qa.find(e=>e.slug===r)||null}function NE(r){if(Qa.length<2)return null;const e=Qa.findIndex(t=>t.slug===r);return e===-1?null:Qa[(e+1)%Qa.length]}const DE=new Set(["swiftsort"]),IE=["5787deaa7a8ea2bd70a681eed552e3ea03c59dca5ecffa7dcab1365afe4433c1","2742ce32dae07660045ae5247b21e600b5c4834d7c665335ac1c98893e5eaf11"],cv="cs-unlocked";function hg(r){return DE.has(r)}async function UE(r){const e=new TextEncoder().encode(r),t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(s=>s.toString(16).padStart(2,"0")).join("")}async function FE(r){const e=(r??"").trim();if(!e)return!1;try{const t=await UE(e);return IE.includes(t)}catch{return!1}}function fg(){try{return sessionStorage.getItem(cv)==="1"}catch{return!1}}function kE(){try{sessionStorage.setItem(cv,"1")}catch{}}const OE="https://www.linkedin.com/in/ykshetty/";function Sd({mood:r="",avatarRef:e}){const t=`gate-avatar${r?` is-${r}`:""}`;return u.jsxs("div",{className:t,ref:e,"aria-hidden":"true",children:[u.jsx("div",{className:"gate-eye l",children:u.jsx("span",{className:"gate-pupil"})}),u.jsx("div",{className:"gate-eye r",children:u.jsx("span",{className:"gate-pupil"})})]})}function zE({title:r,onUnlock:e}){const[t,s]=Re.useState(""),[o,l]=Re.useState(!1),[h,d]=Re.useState(!1),[p,m]=Re.useState(!1),[v,_]=Re.useState(""),y=Re.useRef(null),M=Re.useRef([]),E=L=>{L&&!M.current.includes(L)&&M.current.push(L)},b=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;Re.useEffect(()=>{const L=setTimeout(()=>m(!0),b?200:1200);return()=>clearTimeout(L)},[b]),Re.useEffect(()=>{if(b)return;let L=0,R=window.innerWidth/2,D=window.innerHeight/2;const V=k=>{R=k.clientX,D=k.clientY};window.addEventListener("mousemove",V);const O=()=>{M.current.forEach(k=>{const le=k.getBoundingClientRect();if(!le.width)return;const de=le.left+le.width/2,T=le.top+le.height/2,F=Math.atan2(D-T,R-de),ce=Math.min(2.6,Math.hypot(R-de,D-T)/40);k.querySelectorAll(".gate-pupil").forEach(ue=>{ue.style.transform=`translate(calc(-50% + ${Math.cos(F)*ce}px), calc(-50% + ${Math.sin(F)*ce}px))`})}),L=requestAnimationFrame(O)};return L=requestAnimationFrame(O),()=>{window.removeEventListener("mousemove",V),cancelAnimationFrame(L)}},[b]);const x=L=>{const R=L.target.value;s(R),h&&d(!1),v!=="happy"&&_(R.length?"closed":"")},S=async L=>{if(L.preventDefault(),await FE(t)){kE(),_("happy"),setTimeout(e,b?0:420);return}d(!0),_("squint"),setTimeout(()=>_(t?"closed":""),700)};return u.jsxs("div",{className:"cs-page",children:[u.jsx(iv,{}),u.jsx("div",{className:"gate-stage",children:u.jsxs("div",{className:"gate-card",children:[u.jsxs("div",{className:"gate-chrome",children:[u.jsxs("div",{className:"gate-dots",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsx("div",{className:"gate-chrome-label",children:r?`${r.split(" ")[0]} · protected`:"Protected case study"})]}),u.jsxs("div",{className:"gate-thread",children:[u.jsx("div",{className:"gate-row them",style:{animationDelay:".05s"},children:u.jsx("div",{className:"gate-bubble",children:"Can I read the full case study?"})}),p?u.jsxs("div",{className:"gate-row me",children:[u.jsx(Sd,{avatarRef:E,mood:v}),u.jsxs("div",{className:"gate-bubble",children:[u.jsx("span",{className:"gate-kicker",children:"A quick note"}),"This one belongs to the client — I keep it behind a password out of respect for their confidentiality.",u.jsxs("small",{children:["You’ll find the password in my résumé or cover letter. Otherwise, just"," ",u.jsx("a",{href:OE,target:"_blank",rel:"noopener noreferrer",children:"ping me on LinkedIn"}),"."]})]})]}):u.jsxs("div",{className:"gate-row me",children:[u.jsx(Sd,{avatarRef:E,mood:v}),u.jsxs("div",{className:"gate-typing",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]}),h&&u.jsxs("div",{className:"gate-row me",role:"alert",children:[u.jsx(Sd,{avatarRef:E,mood:v}),u.jsx("div",{className:"gate-bubble",children:"That’s not the one — check the résumé header, it’s there. 🙂"})]})]}),u.jsxs("div",{className:"gate-composer",children:[u.jsxs("form",{className:`gate-field${h?" is-err":""}`,onSubmit:S,autoComplete:"off",children:[u.jsx("input",{ref:y,type:o?"text":"password",value:t,onChange:x,placeholder:"Type the password…","aria-label":"Case study password","aria-invalid":h,autoFocus:!0}),u.jsx("button",{type:"button",className:"gate-peek",onClick:()=>l(L=>!L),"aria-label":o?"Hide password":"Show password",title:o?"Hide":"Show",children:o?u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),u.jsx("button",{type:"submit",className:"gate-send","aria-label":"Unlock case study",title:"Unlock",children:"↑"})]}),u.jsx("a",{href:"/#work",className:"gate-back",children:"← Back to work"})]})]})})]})}function BE({slug:r}){const e=LE(r),t=hg(r),[s,o]=Re.useState(()=>!t||fg());if(Re.useEffect(()=>{o(!hg(r)||fg())},[r]),Re.useEffect(()=>{var p;if((p=e==null?void 0:e.meta)!=null&&p.title){const m=document.title;return document.title=`${e.meta.title} · Yogesh Shetty`,()=>{document.title=m}}},[e]),!e)return u.jsx(jE,{slug:r});const{Component:l,meta:h}=e,d=NE(r);return t&&!s?u.jsx(zE,{title:h.title,onUnlock:()=>o(!0)}):u.jsx(mE,{meta:h,next:d,children:u.jsx(rv.Provider,{value:h.sectionIcons||{},children:u.jsx(sE,{components:fE,children:u.jsx(l,{})})})})}function jE({slug:r}){return u.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"var(--bg-page)",color:"var(--text-primary)",fontFamily:"var(--font-display)",textAlign:"center"},children:u.jsxs("div",{style:{maxWidth:460},children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:14},children:"Case study not found"}),u.jsxs("h1",{style:{fontSize:28,fontWeight:600,margin:"0 0 16px",letterSpacing:"-0.02em"},children:["No case study “",r,"”"]}),u.jsx($l,{to:"/",className:"text-link text-link--primary",style:{fontFamily:"var(--font-body)",fontSize:15,fontWeight:500,paddingBottom:3},children:"← Back to portfolio"})]})})}function HE(){const e=t_().match(/^\/case-studies\/([^/]+)\/?$/);return e?u.jsx(BE,{slug:decodeURIComponent(e[1])}):u.jsx(rE,{})}function GE(){return u.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#f4f4f7",color:"#1a1a22",fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif",textAlign:"center"},children:u.jsxs("div",{style:{maxWidth:520},children:[u.jsx("h1",{style:{fontSize:24,fontWeight:600,margin:"0 0 12px"},children:"Yogesh Shetty · Senior Product Designer"}),u.jsx("p",{style:{margin:"0 0 20px",lineHeight:1.6,color:"#6a6a78"},children:"The interactive version of this page didn't load in your browser, but you can still reach me directly:"}),u.jsxs("p",{style:{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",margin:0},children:[u.jsx("a",{href:`mailto:${br}`,style:{color:"#5b4be0",fontWeight:500},children:"Email"}),u.jsx("a",{href:"https://www.linkedin.com/in/ykshetty/",target:"_blank",rel:"noopener noreferrer",style:{color:"#5b4be0",fontWeight:500},children:"LinkedIn"})]})]})})}Q0.createRoot(document.getElementById("root")).render(u.jsx(na.StrictMode,{children:u.jsx(ev,{fallback:u.jsx(GE,{}),children:u.jsx(c_,{children:u.jsx(J0,{children:u.jsx(HE,{})})})})}));
