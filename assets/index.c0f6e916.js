const zd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};zd();var I={exports:{}},b={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ua=Object.getOwnPropertySymbols,Id=Object.prototype.hasOwnProperty,Ld=Object.prototype.propertyIsEnumerable;function Nd(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Rd(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var ef=Rd()?Object.assign:function(e,t){for(var n,r=Nd(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var l in n)Id.call(n,l)&&(r[l]=n[l]);if(ua){i=ua(n);for(var s=0;s<i.length;s++)Ld.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=ef,vn=60103,tf=60106;b.Fragment=60107;b.StrictMode=60108;b.Profiler=60114;var nf=60109,rf=60110,of=60112;b.Suspense=60113;var lf=60115,sf=60116;if(typeof Symbol=="function"&&Symbol.for){var Ce=Symbol.for;vn=Ce("react.element"),tf=Ce("react.portal"),b.Fragment=Ce("react.fragment"),b.StrictMode=Ce("react.strict_mode"),b.Profiler=Ce("react.profiler"),nf=Ce("react.provider"),rf=Ce("react.context"),of=Ce("react.forward_ref"),b.Suspense=Ce("react.suspense"),lf=Ce("react.memo"),sf=Ce("react.lazy")}var fa=typeof Symbol=="function"&&Symbol.iterator;function jd(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}function Nr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uf={};function wn(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||af}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Nr(85));this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ff(){}ff.prototype=wn.prototype;function Jl(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||af}var es=Jl.prototype=new ff;es.constructor=Jl;Zl(es,wn.prototype);es.isPureReactComponent=!0;var ts={current:null},cf=Object.prototype.hasOwnProperty,df={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)cf.call(t,r)&&!df.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:vn,type:e,key:o,ref:l,props:i,_owner:ts.current}}function Md(e,t){return{$$typeof:vn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ns(e){return typeof e=="object"&&e!==null&&e.$$typeof===vn}function bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ca=/\/+/g;function ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bd(""+e.key):t.toString(36)}function oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case vn:case tf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ko(l,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(ca,"$&/")+"/"),oi(i,t,n,"",function(u){return u})):i!=null&&(ns(i)&&(i=Md(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ca,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+ko(o,s);l+=oi(o,t,n,a,i)}else if(a=jd(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+ko(o,s++),l+=oi(o,t,n,a,i);else if(o==="object")throw t=""+e,Error(Nr(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function Vr(e,t,n){if(e==null)return e;var r=[],i=0;return oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Fd(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var hf={current:null};function Ge(){var e=hf.current;if(e===null)throw Error(Nr(321));return e}var Ad={ReactCurrentDispatcher:hf,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:ts,IsSomeRendererActing:{current:!1},assign:Zl};b.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!ns(e))throw Error(Nr(143));return e}};b.Component=wn;b.PureComponent=Jl;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad;b.cloneElement=function(e,t,n){if(e==null)throw Error(Nr(267,e));var r=Zl({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)cf.call(t,a)&&!df.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:vn,type:e.type,key:i,ref:o,props:r,_owner:l}};b.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:rf,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:nf,_context:e},e.Consumer=e};b.createElement=pf;b.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:of,render:e}};b.isValidElement=ns;b.lazy=function(e){return{$$typeof:sf,_payload:{_status:-1,_result:e},_init:Fd}};b.memo=function(e,t){return{$$typeof:lf,type:e,compare:t===void 0?null:t}};b.useCallback=function(e,t){return Ge().useCallback(e,t)};b.useContext=function(e,t){return Ge().useContext(e,t)};b.useDebugValue=function(){};b.useEffect=function(e,t){return Ge().useEffect(e,t)};b.useImperativeHandle=function(e,t,n){return Ge().useImperativeHandle(e,t,n)};b.useLayoutEffect=function(e,t){return Ge().useLayoutEffect(e,t)};b.useMemo=function(e,t){return Ge().useMemo(e,t)};b.useReducer=function(e,t,n){return Ge().useReducer(e,t,n)};b.useRef=function(e){return Ge().useRef(e)};b.useState=function(e){return Ge().useState(e)};b.version="17.0.2";I.exports=b;var ot=I.exports,rs={exports:{}},Ee={},mf={exports:{}},gf={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var a=null,u=null,h=function(){if(a!==null)try{var E=e.unstable_now();a(!0,E),a=null}catch(N){throw setTimeout(h,0),N}};t=function(E){a!==null?setTimeout(t,0,E):(a=E,setTimeout(h,0))},n=function(E,N){u=setTimeout(E,N)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var v=window.setTimeout,p=window.clearTimeout;if(typeof console!="undefined"){var x=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof x!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,w=null,c=-1,f=5,d=0;e.unstable_shouldYield=function(){return e.unstable_now()>=d},i=function(){},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<E?Math.floor(1e3/E):5};var m=new MessageChannel,g=m.port2;m.port1.onmessage=function(){if(w!==null){var E=e.unstable_now();d=E+f;try{w(!0,E)?g.postMessage(null):(y=!1,w=null)}catch(N){throw g.postMessage(null),N}}else y=!1},t=function(E){w=E,y||(y=!0,g.postMessage(null))},n=function(E,N){c=v(function(){E(e.unstable_now())},N)},r=function(){p(c),c=-1}}function P(E,N){var M=E.length;E.push(N);e:for(;;){var Y=M-1>>>1,Z=E[Y];if(Z!==void 0&&0<z(Z,N))E[Y]=N,E[M]=Z,M=Y;else break e}}function k(E){return E=E[0],E===void 0?null:E}function T(E){var N=E[0];if(N!==void 0){var M=E.pop();if(M!==N){E[0]=M;e:for(var Y=0,Z=E.length;Y<Z;){var _t=2*(Y+1)-1,St=E[_t],On=_t+1,Vt=E[On];if(St!==void 0&&0>z(St,M))Vt!==void 0&&0>z(Vt,St)?(E[Y]=Vt,E[On]=M,Y=On):(E[Y]=St,E[_t]=M,Y=_t);else if(Vt!==void 0&&0>z(Vt,M))E[Y]=Vt,E[On]=M,Y=On;else break e}}return N}return null}function z(E,N){var M=E.sortIndex-N.sortIndex;return M!==0?M:E.id-N.id}var O=[],F=[],De=1,V=null,B=3,Xe=!1,$e=!1,Pn=!1;function vo(E){for(var N=k(F);N!==null;){if(N.callback===null)T(F);else if(N.startTime<=E)T(F),N.sortIndex=N.expirationTime,P(O,N);else break;N=k(F)}}function wo(E){if(Pn=!1,vo(E),!$e)if(k(O)!==null)$e=!0,t(xo);else{var N=k(F);N!==null&&n(wo,N.startTime-E)}}function xo(E,N){$e=!1,Pn&&(Pn=!1,r()),Xe=!0;var M=B;try{for(vo(N),V=k(O);V!==null&&(!(V.expirationTime>N)||E&&!e.unstable_shouldYield());){var Y=V.callback;if(typeof Y=="function"){V.callback=null,B=V.priorityLevel;var Z=Y(V.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?V.callback=Z:V===k(O)&&T(O),vo(N)}else T(O);V=k(O)}if(V!==null)var _t=!0;else{var St=k(F);St!==null&&n(wo,St.startTime-N),_t=!1}return _t}finally{V=null,B=M,Xe=!1}}var Td=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){$e||Xe||($e=!0,t(xo))},e.unstable_getCurrentPriorityLevel=function(){return B},e.unstable_getFirstCallbackNode=function(){return k(O)},e.unstable_next=function(E){switch(B){case 1:case 2:case 3:var N=3;break;default:N=B}var M=B;B=N;try{return E()}finally{B=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Td,e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=B;B=E;try{return N()}finally{B=M}},e.unstable_scheduleCallback=function(E,N,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,E={id:De++,callback:N,priorityLevel:E,startTime:M,expirationTime:Z,sortIndex:-1},M>Y?(E.sortIndex=M,P(F,E),k(O)===null&&E===k(F)&&(Pn?r():Pn=!0,n(wo,M-Y))):(E.sortIndex=Z,P(O,E),$e||Xe||($e=!0,t(xo))),E},e.unstable_wrapCallback=function(E){var N=B;return function(){var M=B;B=N;try{return E.apply(this,arguments)}finally{B=M}}}})(gf);mf.exports=gf;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=I.exports,U=ef,K=mf.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Xi)throw Error(_(227));var yf=new Set,cr={};function At(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(cr[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Ye=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,da=Object.prototype.hasOwnProperty,pa={},ha={};function $d(e){return da.call(ha,e)?!0:da.call(pa,e)?!1:Dd.test(e)?ha[e]=!0:(pa[e]=!0,!1)}function Ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vd(e,t,n,r){if(t===null||typeof t=="undefined"||Ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,os);te[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,os);te[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,os);te[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Vd(t,n,i,r)&&(n=null),r||i===null?$d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bn=60103,Pt=60106,Je=60107,ss=60108,Gn=60114,as=60109,us=60110,Ki=60112,Xn=60113,vi=60120,Zi=60115,fs=60116,cs=60121,ds=60128,vf=60129,ps=60130,Zo=60131;if(typeof Symbol=="function"&&Symbol.for){var X=Symbol.for;Bn=X("react.element"),Pt=X("react.portal"),Je=X("react.fragment"),ss=X("react.strict_mode"),Gn=X("react.profiler"),as=X("react.provider"),us=X("react.context"),Ki=X("react.forward_ref"),Xn=X("react.suspense"),vi=X("react.suspense_list"),Zi=X("react.memo"),fs=X("react.lazy"),cs=X("react.block"),X("react.scope"),ds=X("react.opaque.id"),vf=X("react.debug_trace_mode"),ps=X("react.offscreen"),Zo=X("react.legacy_hidden")}var ma=typeof Symbol=="function"&&Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var _o;function Hn(e){if(_o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_o=t&&t[1]||""}return`
`+_o+e}var So=!1;function Br(e,t){if(!e||So)return"";So=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s])return`
`+i[l].replace(" at new "," at ");while(1<=l&&0<=s);break}}}finally{So=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hn(e):""}function Bd(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=Br(e.type,!1),e;case 11:return e=Br(e.type.render,!1),e;case 22:return e=Br(e.type._render,!1),e;case 1:return e=Br(e.type,!0),e;default:return""}}function Jt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Je:return"Fragment";case Pt:return"Portal";case Gn:return"Profiler";case ss:return"StrictMode";case Xn:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case us:return(e.displayName||"Context")+".Consumer";case as:return(e._context.displayName||"Context")+".Provider";case Ki:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Zi:return Jt(e.type);case cs:return Jt(e._render);case fs:t=e._payload,e=e._init;try{return Jt(e(t))}catch{}}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hd(e){var t=wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=Hd(e))}function xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jo(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ga(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kf(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function el(e,t){kf(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&tl(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tl(e,t,n){(t!=="number"||wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Wd(e){var t="";return Xi.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function nl(e,t){return e=U({children:void 0},t),(t=Wd(t.children))&&(e.children=t),e}function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function _f(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var il={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,Ef=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==il.svg||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qd=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Qd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function Cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function Pf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(Yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,tn=null,nn=null;function xa(e){if(e=jr(e)){if(typeof al!="function")throw Error(_(280));var t=e.stateNode;t&&(t=io(t),al(e.stateNode,e.type,t))}}function Of(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Tf(){if(tn){var e=tn,t=nn;if(nn=tn=null,xa(e),t)for(e=0;e<t.length;e++)xa(t[e])}}function ms(e,t){return e(t)}function zf(e,t,n,r,i){return e(t,n,r,i)}function gs(){}var If=ms,Ot=!1,Eo=!1;function ys(){(tn!==null||nn!==null)&&(gs(),Tf())}function qd(e,t,n){if(Eo)return e(t,n);Eo=!0;try{return If(e,t,n)}finally{Eo=!1,ys()}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ul=!1;if(Ye)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){ul=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{ul=!1}function Gd(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Zn=!1,xi=null,ki=!1,fl=null,Xd={onError:function(e){Zn=!0,xi=e}};function Kd(e,t,n,r,i,o,l,s,a){Zn=!1,xi=null,Gd.apply(Xd,arguments)}function Zd(e,t,n,r,i,o,l,s,a){if(Kd.apply(this,arguments),Zn){if(Zn){var u=xi;Zn=!1,xi=null}else throw Error(_(198));ki||(ki=!0,fl=u)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ka(e){if($t(e)!==e)throw Error(_(188))}function Jd(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ka(i),e;if(o===r)return ka(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Nf(e){if(e=Jd(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function _a(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Rf,vs,jf,Mf,cl=!1,Ne=[],lt=null,st=null,at=null,hr=new Map,mr=new Map,In=[],Sa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Ea(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function Ln(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=dl(t,n,r,i,o),t!==null&&(t=jr(t),t!==null&&vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ep(e,t,n,r,i){switch(t){case"focusin":return lt=Ln(lt,e,t,n,r,i),!0;case"dragenter":return st=Ln(st,e,t,n,r,i),!0;case"mouseover":return at=Ln(at,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return hr.set(o,Ln(hr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mr.set(o,Ln(mr.get(o)||null,e,t,n,r,i)),!0}return!1}function tp(e){var t=Tt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Lf(n),t!==null){e.blockedOn=t,Mf(e.lanePriority,function(){K.unstable_runWithPriority(e.priority,function(){jf(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=jr(n),t!==null&&vs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ca(e,t,n){li(e)&&n.delete(t)}function np(){for(cl=!1;0<Ne.length;){var e=Ne[0];if(e.blockedOn!==null){e=jr(e.blockedOn),e!==null&&Rf(e);break}for(var t=e.targetContainers;0<t.length;){var n=_s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Ne.shift()}lt!==null&&li(lt)&&(lt=null),st!==null&&li(st)&&(st=null),at!==null&&li(at)&&(at=null),hr.forEach(Ca),mr.forEach(Ca)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,cl||(cl=!0,K.unstable_scheduleCallback(K.unstable_NormalPriority,np)))}function bf(e){function t(i){return Nn(i,e)}if(0<Ne.length){Nn(Ne[0],e);for(var n=1;n<Ne.length;n++){var r=Ne[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&Nn(lt,e),st!==null&&Nn(st,e),at!==null&&Nn(at,e),hr.forEach(t),mr.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)tp(n),n.blockedOn===null&&In.shift()}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},Co={},Ff={};Ye&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Ji(e){if(Co[e])return Co[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ff)return Co[e]=t[n];return e}var Af=Ji("animationend"),Df=Ji("animationiteration"),$f=Ji("animationstart"),Uf=Ji("transitionend"),Vf=new Map,ws=new Map,rp=["abort","abort",Af,"animationEnd",Df,"animationIteration",$f,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Uf,"transitionEnd","waiting","waiting"];function xs(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),ws.set(r,t),Vf.set(r,i),At(i,[r])}}var ip=K.unstable_now;ip();var A=8;function Wt(e){if((1&e)!==0)return A=15,1;if((2&e)!==0)return A=14,2;if((4&e)!==0)return A=13,4;var t=24&e;return t!==0?(A=12,t):(e&32)!==0?(A=11,32):(t=192&e,t!==0?(A=10,t):(e&256)!==0?(A=9,256):(t=3584&e,t!==0?(A=8,t):(e&4096)!==0?(A=7,4096):(t=4186112&e,t!==0?(A=6,t):(t=62914560&e,t!==0?(A=5,t):e&67108864?(A=4,67108864):(e&134217728)!==0?(A=3,134217728):(t=805306368&e,t!==0?(A=2,t):(1073741824&e)!==0?(A=1,1073741824):(A=8,e))))))}function op(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function lp(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(_(358,e))}}function gr(e,t){var n=e.pendingLanes;if(n===0)return A=0;var r=0,i=0,o=e.expiredLanes,l=e.suspendedLanes,s=e.pingedLanes;if(o!==0)r=o,i=A=15;else if(o=n&134217727,o!==0){var a=o&~l;a!==0?(r=Wt(a),i=A):(s&=o,s!==0&&(r=Wt(s),i=A))}else o=n&~l,o!==0?(r=Wt(o),i=A):s!==0&&(r=Wt(s),i=A);if(r===0)return 0;if(r=31-gt(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&l)===0){if(Wt(t),i<=A)return t;A=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function Bf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _i(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Qt(24&~t),e===0?_i(10,t):e;case 10:return e=Qt(192&~t),e===0?_i(8,t):e;case 8:return e=Qt(3584&~t),e===0&&(e=Qt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Qt(805306368&~t),t===0&&(t=268435456),t}throw Error(_(358,e))}function Qt(e){return e&-e}function Po(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-gt(t),e[t]=n}var gt=Math.clz32?Math.clz32:up,sp=Math.log,ap=Math.LN2;function up(e){return e===0?32:31-(sp(e)/ap|0)|0}var fp=K.unstable_UserBlockingPriority,cp=K.unstable_runWithPriority,si=!0;function dp(e,t,n,r){Ot||gs();var i=ks,o=Ot;Ot=!0;try{zf(i,e,t,n,r)}finally{(Ot=o)||ys()}}function pp(e,t,n,r){cp(fp,ks.bind(null,e,t,n,r))}function ks(e,t,n,r){if(si){var i;if((i=(t&4)===0)&&0<Ne.length&&-1<Sa.indexOf(e))e=dl(null,e,t,n,r),Ne.push(e);else{var o=_s(e,t,n,r);if(o===null)i&&Ea(e,r);else{if(i){if(-1<Sa.indexOf(e)){e=dl(o,e,t,n,r),Ne.push(e);return}if(ep(o,e,t,n,r))return;Ea(e,r)}nc(e,t,r,null,n)}}}}function _s(e,t,n,r){var i=hs(r);if(i=Tt(i),i!==null){var o=$t(i);if(o===null)i=null;else{var l=o.tag;if(l===13){if(i=Lf(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return nc(e,t,r,i,n),null}var et=null,Ss=null,ai=null;function Hf(){if(ai)return ai;var e,t=Ss,n=t.length,r,i="value"in et?et.value:et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ai=i.slice(e,1<r?1-r:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function Pa(){return!1}function me(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yr:Pa,this.isPropagationStopped=Pa,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=me(xn),Rr=U({},xn,{view:0,detail:0}),hp=me(Rr),Oo,To,Rn,to=U({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Oo=e.screenX-Rn.screenX,To=e.screenY-Rn.screenY):To=Oo=0,Rn=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Oa=me(to),mp=U({},to,{dataTransfer:0}),gp=me(mp),yp=U({},Rr,{relatedTarget:0}),zo=me(yp),vp=U({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=me(vp),xp=U({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=me(xp),_p=U({},xn,{data:0}),Ta=me(_p),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cp[e])?!!t[e]:!1}function Cs(){return Pp}var Op=U({},Rr,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tp=me(Op),zp=U({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=me(zp),Ip=U({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),Lp=me(Ip),Np=U({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=me(Np),jp=U({},to,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=me(jp),bp=[9,13,27,32],Ps=Ye&&"CompositionEvent"in window,Jn=null;Ye&&"documentMode"in document&&(Jn=document.documentMode);var Fp=Ye&&"TextEvent"in window&&!Jn,Wf=Ye&&(!Ps||Jn&&8<Jn&&11>=Jn),Ia=String.fromCharCode(32),La=!1;function Qf(e,t){switch(e){case"keyup":return bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Ap(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(La=!0,Ia);case"textInput":return e=t.data,e===Ia&&La?null:e;default:return null}}function Dp(e,t){if(qt)return e==="compositionend"||!Ps&&Qf(e,t)?(e=Hf(),ai=Ss=et=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wf&&t.locale!=="ko"?null:t.data;default:return null}}var $p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$p[e.type]:t==="textarea"}function qf(e,t,n,r){Of(r),t=Si(t,"onChange"),0<t.length&&(n=new Es("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,yr=null;function Up(e){Jf(e,0)}function no(e){var t=Xt(e);if(xf(t))return e}function Vp(e,t){if(e==="change")return t}var Gf=!1;if(Ye){var Io;if(Ye){var Lo="oninput"in document;if(!Lo){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),Lo=typeof Ra.oninput=="function"}Io=Lo}else Io=!1;Gf=Io&&(!document.documentMode||9<document.documentMode)}function ja(){er&&(er.detachEvent("onpropertychange",Xf),yr=er=null)}function Xf(e){if(e.propertyName==="value"&&no(yr)){var t=[];if(qf(t,yr,e,hs(e)),e=Up,Ot)e(t);else{Ot=!0;try{ms(e,t)}finally{Ot=!1,ys()}}}}function Bp(e,t,n){e==="focusin"?(ja(),er=t,yr=n,er.attachEvent("onpropertychange",Xf)):e==="focusout"&&ja()}function Hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(yr)}function Wp(e,t){if(e==="click")return no(t)}function Qp(e,t){if(e==="input"||e==="change")return no(t)}function Yp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ye=typeof Object.is=="function"?Object.is:Yp,qp=Object.prototype.hasOwnProperty;function vr(e,t){if(ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!qp.call(t,n[r])||!ye(e[n[r]],t[n[r]]))return!1;return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,t){var n=Ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ma(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fa(){for(var e=window,t=wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gp=Ye&&"documentMode"in document&&11>=document.documentMode,Gt=null,hl=null,tr=null,ml=!1;function Aa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||Gt==null||Gt!==wi(r)||(r=Gt,"selectionStart"in r&&pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&vr(tr,r)||(tr=r,r=Si(hl,"onSelect"),0<r.length&&(t=new Es("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}xs("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);xs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);xs(rp,2);for(var Da="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),No=0;No<Da.length;No++)ws.set(Da[No],0);dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function $a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zd(r,t,void 0,e),e.currentTarget=null}function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;$a(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;$a(i,s,u),o=a}}}if(ki)throw e=fl,ki=!1,fl=null,e}function D(e,t){var n=ic(t),r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}var Ua="_reactListening"+Math.random().toString(36).slice(2);function ec(e){e[Ua]||(e[Ua]=!0,yf.forEach(function(t){Zf.has(t)||Va(t,!1,e,null),Va(t,!0,e,null)}))}function Va(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&Zf.has(e)){if(e!=="scroll")return;i|=2,o=r}var l=ic(o),s=e+"__"+(t?"capture":"bubble");l.has(s)||(t&&(i|=4),tc(o,e,i,t),l.add(s))}function tc(e,t,n,r){var i=ws.get(t);switch(i===void 0?2:i){case 0:i=dp;break;case 1:i=pp;break;default:i=ks}n=i.bind(null,t,n,e),i=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nc(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Tt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}qd(function(){var u=o,h=hs(n),v=[];e:{var p=Vf.get(e);if(p!==void 0){var x=Es,y=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":x=Tp;break;case"focusin":y="focus",x=zo;break;case"focusout":y="blur",x=zo;break;case"beforeblur":case"afterblur":x=zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Oa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Lp;break;case Af:case Df:case $f:x=wp;break;case Uf:x=Rp;break;case"scroll":x=hp;break;case"wheel":x=Mp;break;case"copy":case"cut":case"paste":x=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=za}var w=(t&4)!==0,c=!w&&e==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var d=u,m;d!==null;){m=d;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,f!==null&&(g=pr(d,f),g!=null&&w.push(wr(d,g,m)))),c)break;d=d.return}0<w.length&&(p=new x(p,y,null,n,h),v.push({event:p,listeners:w}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&(t&16)===0&&(y=n.relatedTarget||n.fromElement)&&(Tt(y)||y[kn]))break e;if((x||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?Tt(y):null,y!==null&&(c=$t(y),y!==c||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=Oa,g="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=za,g="onPointerLeave",f="onPointerEnter",d="pointer"),c=x==null?p:Xt(x),m=y==null?p:Xt(y),p=new w(g,d+"leave",x,n,h),p.target=c,p.relatedTarget=m,g=null,Tt(h)===u&&(w=new w(f,d+"enter",y,n,h),w.target=m,w.relatedTarget=c,g=w),c=g,x&&y)t:{for(w=x,f=y,d=0,m=w;m;m=Bt(m))d++;for(m=0,g=f;g;g=Bt(g))m++;for(;0<d-m;)w=Bt(w),d--;for(;0<m-d;)f=Bt(f),m--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Bt(w),f=Bt(f)}w=null}else w=null;x!==null&&Ba(v,p,x,w,!1),y!==null&&c!==null&&Ba(v,c,y,w,!0)}}e:{if(p=u?Xt(u):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var P=Vp;else if(Na(p))if(Gf)P=Qp;else{P=Hp;var k=Bp}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Wp);if(P&&(P=P(e,u))){qf(v,P,n,h);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&tl(p,"number",p.value)}switch(k=u?Xt(u):window,e){case"focusin":(Na(k)||k.contentEditable==="true")&&(Gt=k,hl=u,tr=null);break;case"focusout":tr=hl=Gt=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Aa(v,n,h);break;case"selectionchange":if(Gp)break;case"keydown":case"keyup":Aa(v,n,h)}var T;if(Ps)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else qt?Qf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Wf&&n.locale!=="ko"&&(qt||z!=="onCompositionStart"?z==="onCompositionEnd"&&qt&&(T=Hf()):(et=h,Ss="value"in et?et.value:et.textContent,qt=!0)),k=Si(u,z),0<k.length&&(z=new Ta(z,e,null,n,h),v.push({event:z,listeners:k}),T?z.data=T:(T=Yf(n),T!==null&&(z.data=T)))),(T=Fp?Ap(e,n):Dp(e,n))&&(u=Si(u,"onBeforeInput"),0<u.length&&(h=new Ta("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:u}),h.data=T))}Jf(v,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Si(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=pr(e,n),o!=null&&r.unshift(wr(e,o,i)),o=pr(e,t),o!=null&&r.push(wr(e,o,i))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=pr(n,o),a!=null&&l.unshift(wr(n,a,s))):i||(a=pr(n,o),a!=null&&l.push(wr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}function Ei(){}var Ro=null,jo=null;function rc(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function gl(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ha=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0;function Os(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function Wa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mo=0;function Kp(e){return{$$typeof:ds,toString:e,valueOf:e}}var ro=Math.random().toString(36).slice(2),tt="__reactFiber$"+ro,Ci="__reactProps$"+ro,kn="__reactContainer$"+ro,Qa="__reactEvents$"+ro;function Tt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wa(e);e!==null;){if(n=e[tt])return n;e=Wa(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[tt]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function io(e){return e[Ci]||null}function ic(e){var t=e[Qa];return t===void 0&&(t=e[Qa]=new Set),t}var yl=[],Kt=-1;function xt(e){return{current:e}}function $(e){0>Kt||(e.current=yl[Kt],yl[Kt]=null,Kt--)}function Q(e,t){Kt++,yl[Kt]=e.current,e.current=t}var yt={},oe=xt(yt),de=xt(!1),Rt=yt;function pn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Pi(){$(de),$(oe)}function Ya(e,t,n){if(oe.current!==yt)throw Error(_(168));Q(oe,t),Q(de,n)}function oc(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,Jt(t)||"Unknown",i));return U({},n,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Rt=oe.current,Q(oe,e),Q(de,de.current),!0}function qa(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=oc(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,$(de),$(oe),Q(oe,e)):$(de),Q(de,n)}var Ts=null,Lt=null,Zp=K.unstable_runWithPriority,zs=K.unstable_scheduleCallback,vl=K.unstable_cancelCallback,Jp=K.unstable_shouldYield,Ga=K.unstable_requestPaint,wl=K.unstable_now,eh=K.unstable_getCurrentPriorityLevel,oo=K.unstable_ImmediatePriority,lc=K.unstable_UserBlockingPriority,sc=K.unstable_NormalPriority,ac=K.unstable_LowPriority,uc=K.unstable_IdlePriority,bo={},th=Ga!==void 0?Ga:function(){},Ve=null,ci=null,Fo=!1,Xa=wl(),re=1e4>Xa?wl:function(){return wl()-Xa};function hn(){switch(eh()){case oo:return 99;case lc:return 98;case sc:return 97;case ac:return 96;case uc:return 95;default:throw Error(_(332))}}function fc(e){switch(e){case 99:return oo;case 98:return lc;case 97:return sc;case 96:return ac;case 95:return uc;default:throw Error(_(332))}}function jt(e,t){return e=fc(e),Zp(e,t)}function xr(e,t,n){return e=fc(e),zs(e,t,n)}function Ae(){if(ci!==null){var e=ci;ci=null,vl(e)}cc()}function cc(){if(!Fo&&Ve!==null){Fo=!0;var e=0;try{var t=Ve;jt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Ve=null}catch(n){throw Ve!==null&&(Ve=Ve.slice(e+1)),zs(oo,Ae),n}finally{Fo=!1}}}var nh=Dt.ReactCurrentBatchConfig;function Oe(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oi=xt(null),Ti=null,Zt=null,zi=null;function Is(){zi=Zt=Ti=null}function Ls(e){var t=Oi.current;$(Oi),e.type._context._currentValue=t}function dc(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function on(e,t){Ti=e,zi=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ze=!0),e.firstContext=null)}function _e(e,t){if(zi!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(zi=e,t=1073741823),t={context:e,observedBits:t,next:null},Zt===null){if(Ti===null)throw Error(_(308));Zt=t,Ti.dependencies={lanes:0,firstContext:t,responders:null}}else Zt=Zt.next=t;return e._currentValue}var Ze=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kr(e,t,n,r){var i=e.updateQueue;Ze=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var h=e.alternate;if(h!==null){h=h.updateQueue;var v=h.lastBaseUpdate;v!==l&&(v===null?h.firstBaseUpdate=u:v.next=u,h.lastBaseUpdate=a)}}if(o!==null){v=i.baseState,l=0,h=u=a=null;do{s=o.lane;var p=o.eventTime;if((r&s)===s){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,y=o;switch(s=t,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){v=x.call(p,v,s);break e}v=x;break e;case 3:x.flags=x.flags&-4097|64;case 0:if(x=y.payload,s=typeof x=="function"?x.call(p,v,s):x,s==null)break e;v=U({},v,s);break e;case 2:Ze=!0}}o.callback!==null&&(e.flags|=32,s=i.effects,s===null?i.effects=[o]:s.push(o))}else p={eventTime:p,lane:s,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,a=v):h=h.next=p,l|=s;if(o=o.next,o===null){if(s=i.shared.pending,s===null)break;o=s.next,s.next=null,i.lastBaseUpdate=s,i.shared.pending=null}}while(1);h===null&&(a=v),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,br|=l,e.lanes=l,e.memoizedState=v}}function Za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var hc=new Xi.Component().refs;function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lo={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=ct(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),ft(e,o),dt(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=ct(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),ft(e,o),dt(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=ct(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),ft(e,i),dt(e,r,n)}};function Ja(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,o):!0}function mc(e,t,n){var r=!1,i=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(i=pe(t)?Rt:oe.current,r=t.contextTypes,o=(r=r!=null)?pn(e,i):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=hc,Ns(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_e(o):(o=pe(t)?Rt:oe.current,i.context=pn(e,o)),kr(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ii(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lo.enqueueReplaceState(i,i.state,null),kr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var qr=Array.isArray;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=r.refs;l===hc&&(l=r.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Gr(e,t){if(e.type!=="textarea")throw Error(_(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function gc(e){function t(c,f){if(e){var d=c.lastEffect;d!==null?(d.nextEffect=f,c.lastEffect=f):c.firstEffect=c.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(c,f){return c=wt(c,f),c.index=0,c.sibling=null,c}function o(c,f,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<f?(c.flags=2,f):d):(c.flags=2,f)):f}function l(c){return e&&c.alternate===null&&(c.flags=2),c}function s(c,f,d,m){return f===null||f.tag!==6?(f=Vo(d,c.mode,m),f.return=c,f):(f=i(f,d),f.return=c,f)}function a(c,f,d,m){return f!==null&&f.elementType===d.type?(m=i(f,d.props),m.ref=jn(c,f,d),m.return=c,m):(m=mi(d.type,d.key,d.props,null,c.mode,m),m.ref=jn(c,f,d),m.return=c,m)}function u(c,f,d,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Bo(d,c.mode,m),f.return=c,f):(f=i(f,d.children||[]),f.return=c,f)}function h(c,f,d,m,g){return f===null||f.tag!==7?(f=un(d,c.mode,m,g),f.return=c,f):(f=i(f,d),f.return=c,f)}function v(c,f,d){if(typeof f=="string"||typeof f=="number")return f=Vo(""+f,c.mode,d),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bn:return d=mi(f.type,f.key,f.props,null,c.mode,d),d.ref=jn(c,null,f),d.return=c,d;case Pt:return f=Bo(f,c.mode,d),f.return=c,f}if(qr(f)||Tn(f))return f=un(f,c.mode,d,null),f.return=c,f;Gr(c,f)}return null}function p(c,f,d,m){var g=f!==null?f.key:null;if(typeof d=="string"||typeof d=="number")return g!==null?null:s(c,f,""+d,m);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Bn:return d.key===g?d.type===Je?h(c,f,d.props.children,m,g):a(c,f,d,m):null;case Pt:return d.key===g?u(c,f,d,m):null}if(qr(d)||Tn(d))return g!==null?null:h(c,f,d,m,null);Gr(c,d)}return null}function x(c,f,d,m,g){if(typeof m=="string"||typeof m=="number")return c=c.get(d)||null,s(f,c,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bn:return c=c.get(m.key===null?d:m.key)||null,m.type===Je?h(f,c,m.props.children,g,m.key):a(f,c,m,g);case Pt:return c=c.get(m.key===null?d:m.key)||null,u(f,c,m,g)}if(qr(m)||Tn(m))return c=c.get(d)||null,h(f,c,m,g,null);Gr(f,m)}return null}function y(c,f,d,m){for(var g=null,P=null,k=f,T=f=0,z=null;k!==null&&T<d.length;T++){k.index>T?(z=k,k=null):z=k.sibling;var O=p(c,k,d[T],m);if(O===null){k===null&&(k=z);break}e&&k&&O.alternate===null&&t(c,k),f=o(O,f,T),P===null?g=O:P.sibling=O,P=O,k=z}if(T===d.length)return n(c,k),g;if(k===null){for(;T<d.length;T++)k=v(c,d[T],m),k!==null&&(f=o(k,f,T),P===null?g=k:P.sibling=k,P=k);return g}for(k=r(c,k);T<d.length;T++)z=x(k,c,T,d[T],m),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?T:z.key),f=o(z,f,T),P===null?g=z:P.sibling=z,P=z);return e&&k.forEach(function(F){return t(c,F)}),g}function w(c,f,d,m){var g=Tn(d);if(typeof g!="function")throw Error(_(150));if(d=g.call(d),d==null)throw Error(_(151));for(var P=g=null,k=f,T=f=0,z=null,O=d.next();k!==null&&!O.done;T++,O=d.next()){k.index>T?(z=k,k=null):z=k.sibling;var F=p(c,k,O.value,m);if(F===null){k===null&&(k=z);break}e&&k&&F.alternate===null&&t(c,k),f=o(F,f,T),P===null?g=F:P.sibling=F,P=F,k=z}if(O.done)return n(c,k),g;if(k===null){for(;!O.done;T++,O=d.next())O=v(c,O.value,m),O!==null&&(f=o(O,f,T),P===null?g=O:P.sibling=O,P=O);return g}for(k=r(c,k);!O.done;T++,O=d.next())O=x(k,c,T,O.value,m),O!==null&&(e&&O.alternate!==null&&k.delete(O.key===null?T:O.key),f=o(O,f,T),P===null?g=O:P.sibling=O,P=O);return e&&k.forEach(function(De){return t(c,De)}),g}return function(c,f,d,m){var g=typeof d=="object"&&d!==null&&d.type===Je&&d.key===null;g&&(d=d.props.children);var P=typeof d=="object"&&d!==null;if(P)switch(d.$$typeof){case Bn:e:{for(P=d.key,g=f;g!==null;){if(g.key===P){switch(g.tag){case 7:if(d.type===Je){n(c,g.sibling),f=i(g,d.props.children),f.return=c,c=f;break e}break;default:if(g.elementType===d.type){n(c,g.sibling),f=i(g,d.props),f.ref=jn(c,g,d),f.return=c,c=f;break e}}n(c,g);break}else t(c,g);g=g.sibling}d.type===Je?(f=un(d.props.children,c.mode,m,d.key),f.return=c,c=f):(m=mi(d.type,d.key,d.props,null,c.mode,m),m.ref=jn(c,f,d),m.return=c,c=m)}return l(c);case Pt:e:{for(g=d.key;f!==null;){if(f.key===g)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){n(c,f.sibling),f=i(f,d.children||[]),f.return=c,c=f;break e}else{n(c,f);break}else t(c,f);f=f.sibling}f=Bo(d,c.mode,m),f.return=c,c=f}return l(c)}if(typeof d=="string"||typeof d=="number")return d=""+d,f!==null&&f.tag===6?(n(c,f.sibling),f=i(f,d),f.return=c,c=f):(n(c,f),f=Vo(d,c.mode,m),f.return=c,c=f),l(c);if(qr(d))return y(c,f,d,m);if(Tn(d))return w(c,f,d,m);if(P&&Gr(c,d),typeof d=="undefined"&&!g)switch(c.tag){case 1:case 22:case 0:case 11:case 15:throw Error(_(152,Jt(c.type)||"Component"))}return n(c,f)}}var Li=gc(!0),yc=gc(!1),Mr={},Me=xt(Mr),_r=xt(Mr),Sr=xt(Mr);function zt(e){if(e===Mr)throw Error(_(174));return e}function kl(e,t){switch(Q(Sr,t),Q(_r,e),Q(Me,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}$(Me),Q(Me,t)}function mn(){$(Me),$(_r),$(Sr)}function tu(e){zt(Sr.current);var t=zt(Me.current),n=ol(t,e.type);t!==n&&(Q(_r,e),Q(Me,n))}function Rs(e){_r.current===e&&($(Me),$(_r))}var W=xt(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var He=null,nt=null,be=!1;function vc(e,t){var n=ve(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function _l(e){if(be){var t=nt;if(t){var n=t;if(!nu(e,t)){if(t=rn(n.nextSibling),!t||!nu(e,t)){e.flags=e.flags&-1025|2,be=!1,He=e;return}vc(He,n)}He=e,nt=rn(t.firstChild)}else e.flags=e.flags&-1025|2,be=!1,He=e}}function ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Xr(e){if(e!==He)return!1;if(!be)return ru(e),be=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!gl(t,e.memoizedProps))for(t=nt;t;)vc(e,t),t=rn(t.nextSibling);if(ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=He?rn(e.stateNode.nextSibling):null;return!0}function Ao(){nt=He=null,be=!1}var ln=[];function js(){for(var e=0;e<ln.length;e++)ln[e]._workInProgressVersionPrimary=null;ln.length=0}var nr=Dt.ReactCurrentDispatcher,ke=Dt.ReactCurrentBatchConfig,Er=0,q=null,ne=null,J=null,Ri=!1,rr=!1;function ue(){throw Error(_(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ye(e[n],t[n]))return!1;return!0}function bs(e,t,n,r,i,o){if(Er=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nr.current=e===null||e.memoizedState===null?ih:oh,e=n(r,i),rr){o=0;do{if(rr=!1,!(25>o))throw Error(_(301));o+=1,J=ne=null,t.updateQueue=null,nr.current=lh,e=n(r,i)}while(rr)}if(nr.current=Fi,t=ne!==null&&ne.next!==null,Er=0,J=ne=q=null,Ri=!1,t)throw Error(_(300));return e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?q.memoizedState=J=e:J=J.next=e,J}function Ut(){if(ne===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=J===null?q.memoizedState:J.next;if(t!==null)J=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},J===null?q.memoizedState=J=e:J=J.next=e}return J}function Re(e,t){return typeof t=="function"?t(e):t}function Mn(e){var t=Ut(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var s=l=o=null,a=i;do{var u=a.lane;if((Er&u)===u)s!==null&&(s=s.next={lane:0,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null}),r=a.eagerReducer===e?a.eagerState:e(r,a.action);else{var h={lane:u,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null};s===null?(l=s=h,o=r):s=s.next=h,q.lanes|=u,br|=u}a=a.next}while(a!==null&&a!==i);s===null?o=r:s.next=l,ye(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function bn(e){var t=Ut(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ye(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function iu(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(Er&e)===e)&&(t._workInProgressVersionPrimary=r,ln.push(t))),e)return n(t._source);throw ln.push(t),Error(_(350))}function wc(e,t,n,r){var i=se;if(i===null)throw Error(_(349));var o=t._getVersion,l=o(t._source),s=nr.current,a=s.useState(function(){return iu(i,t,n)}),u=a[1],h=a[0];a=J;var v=e.memoizedState,p=v.refs,x=p.getSnapshot,y=v.source;v=v.subscribe;var w=q;return e.memoizedState={refs:p,source:t,subscribe:r},s.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var c=o(t._source);if(!ye(l,c)){c=n(t._source),ye(h,c)||(u(c),c=ct(w),i.mutableReadLanes|=c&i.pendingLanes),c=i.mutableReadLanes,i.entangledLanes|=c;for(var f=i.entanglements,d=c;0<d;){var m=31-gt(d),g=1<<m;f[m]|=c,d&=~g}}},[n,t,r]),s.useEffect(function(){return r(t._source,function(){var c=p.getSnapshot,f=p.setSnapshot;try{f(c(t._source));var d=ct(w);i.mutableReadLanes|=d&i.pendingLanes}catch(m){f(function(){throw m})}})},[t,r]),ye(x,n)&&ye(y,t)&&ye(v,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Re,lastRenderedState:h},e.dispatch=u=Ds.bind(null,q,e),a.queue=e,a.baseQueue=null,h=iu(i,t,n),a.memoizedState=a.baseState=h),h}function xc(e,t,n){var r=Ut();return wc(r,e,t,n)}function Fn(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Re,lastRenderedState:e},e=e.dispatch=Ds.bind(null,q,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ou(e){var t=It();return e={current:e},t.memoizedState=e}function Mi(){return Ut().memoizedState}function Sl(e,t,n,r){var i=It();q.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function Fs(e,t,n,r){var i=Ut();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&Ms(r,l.deps)){ji(t,n,o,r);return}}q.flags|=e,i.memoizedState=ji(1|t,n,o,r)}function lu(e,t){return Sl(516,4,e,t)}function bi(e,t){return Fs(516,4,e,t)}function kc(e,t){return Fs(4,2,e,t)}function _c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sc(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4,2,_c.bind(null,t,e),n)}function As(){}function Ec(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cc(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rh(e,t){var n=hn();jt(98>n?98:n,function(){e(!0)}),jt(97<n?97:n,function(){var r=ke.transition;ke.transition=1;try{e(!1),t()}finally{ke.transition=r}})}function Ds(e,t,n){var r=he(),i=ct(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},l=t.pending;if(l===null?o.next=o:(o.next=l.next,l.next=o),t.pending=o,l=e.alternate,e===q||l!==null&&l===q)rr=Ri=!0;else{if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(o.eagerReducer=l,o.eagerState=a,ye(a,s))return}catch{}finally{}dt(e,i,r)}}var Fi={readContext:_e,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useOpaqueIdentifier:ue,unstable_isNewReconciler:!1},ih={readContext:_e,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,2,_c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sl(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ds.bind(null,q,e),[r.memoizedState,e]},useRef:ou,useState:Fn,useDebugValue:As,useDeferredValue:function(e){var t=Fn(e),n=t[0],r=t[1];return lu(function(){var i=ke.transition;ke.transition=1;try{r(e)}finally{ke.transition=i}},[e]),n},useTransition:function(){var e=Fn(!1),t=e[0];return e=rh.bind(null,e[1]),ou(e),[e,t]},useMutableSource:function(e,t,n){var r=It();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},wc(r,e,t,n)},useOpaqueIdentifier:function(){if(be){var e=!1,t=Kp(function(){throw e||(e=!0,n("r:"+(Mo++).toString(36))),Error(_(355))}),n=Fn(t)[1];return(q.mode&2)===0&&(q.flags|=516,ji(5,function(){n("r:"+(Mo++).toString(36))},void 0,null)),t}return t="r:"+(Mo++).toString(36),Fn(t),t},unstable_isNewReconciler:!1},oh={readContext:_e,useCallback:Ec,useContext:_e,useEffect:bi,useImperativeHandle:Sc,useLayoutEffect:kc,useMemo:Cc,useReducer:Mn,useRef:Mi,useState:function(){return Mn(Re)},useDebugValue:As,useDeferredValue:function(e){var t=Mn(Re),n=t[0],r=t[1];return bi(function(){var i=ke.transition;ke.transition=1;try{r(e)}finally{ke.transition=i}},[e]),n},useTransition:function(){var e=Mn(Re)[0];return[Mi().current,e]},useMutableSource:xc,useOpaqueIdentifier:function(){return Mn(Re)[0]},unstable_isNewReconciler:!1},lh={readContext:_e,useCallback:Ec,useContext:_e,useEffect:bi,useImperativeHandle:Sc,useLayoutEffect:kc,useMemo:Cc,useReducer:bn,useRef:Mi,useState:function(){return bn(Re)},useDebugValue:As,useDeferredValue:function(e){var t=bn(Re),n=t[0],r=t[1];return bi(function(){var i=ke.transition;ke.transition=1;try{r(e)}finally{ke.transition=i}},[e]),n},useTransition:function(){var e=bn(Re)[0];return[Mi().current,e]},useMutableSource:xc,useOpaqueIdentifier:function(){return bn(Re)[0]},unstable_isNewReconciler:!1},sh=Dt.ReactCurrentOwner,ze=!1;function fe(e,t,n,r){t.child=e===null?yc(t,null,n,r):Li(t,e.child,n,r)}function su(e,t,n,r,i){n=n.render;var o=t.ref;return on(t,i),r=bs(e,t,n,r,o,i),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,We(e,t,i)):(t.flags|=1,fe(e,t,r,i),t.child)}function au(e,t,n,r,i,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ws(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Pc(e,t,l,r,i,o)):(e=mi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return l=e.child,(i&o)===0&&(i=l.memoizedProps,n=n.compare,n=n!==null?n:vr,n(i,r)&&e.ref===t.ref)?We(e,t,o):(t.flags|=1,e=wt(l,r),e.ref=t.ref,e.return=t,t.child=e)}function Pc(e,t,n,r,i,o){if(e!==null&&vr(e.memoizedProps,r)&&e.ref===t.ref)if(ze=!1,(o&i)!==0)(e.flags&16384)!==0&&(ze=!0);else return t.lanes=e.lanes,We(e,t,o);return El(e,t,n,r,o)}function Do(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Zr(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Zr(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Zr(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Zr(t,r);return fe(e,t,i,n),t.child}function Oc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function El(e,t,n,r,i){var o=pe(n)?Rt:oe.current;return o=pn(t,o),on(t,i),n=bs(e,t,n,r,o,i),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,We(e,t,i)):(t.flags|=1,fe(e,t,n,i),t.child)}function uu(e,t,n,r,i){if(pe(n)){var o=!0;fi(t)}else o=!1;if(on(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),mc(t,n,r),xl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=pe(n)?Rt:oe.current,u=pn(t,u));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&eu(t,l,r,u),Ze=!1;var p=t.memoizedState;l.state=p,kr(t,r,l,i),a=t.memoizedState,s!==r||p!==a||de.current||Ze?(typeof h=="function"&&(Ii(t,n,h,r),a=t.memoizedState),(s=Ze||Ja(t,n,s,r,p,a,u))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4)):(typeof l.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{l=t.stateNode,pc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Oe(t.type,s),l.props=u,v=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=_e(a):(a=pe(n)?Rt:oe.current,a=pn(t,a));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||p!==a)&&eu(t,l,r,a),Ze=!1,p=t.memoizedState,l.state=p,kr(t,r,l,i);var y=t.memoizedState;s!==v||p!==y||de.current||Ze?(typeof x=="function"&&(Ii(t,n,x,r),y=t.memoizedState),(u=Ze||Ja(t,n,u,r,p,y,a))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=256),r=!1)}return Cl(e,t,n,r,o,i)}function Cl(e,t,n,r,i,o){Oc(e,t);var l=(t.flags&64)!==0;if(!r&&!l)return i&&qa(t,n,!1),We(e,t,o);r=t.stateNode,sh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Li(t,e.child,null,o),t.child=Li(t,null,s,o)):fe(e,t,s,o),t.memoizedState=r.state,i&&qa(t,n,!0),t.child}function fu(e){var t=e.stateNode;t.pendingContext?Ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ya(e,t.context,!1),kl(e,t.containerInfo)}var Kr={dehydrated:null,retryLane:0};function cu(e,t,n){var r=t.pendingProps,i=W.current,o=!1,l;return(l=(t.flags&64)!==0)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Q(W,i&1),e===null?(r.fallback!==void 0&&_l(t),e=r.children,i=r.fallback,o?(e=du(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Kr,e):typeof r.unstable_expectedLoadTime=="number"?(e=du(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Kr,t.lanes=33554432,e):(n=Qs({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=hu(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Kr,r):(n=pu(e,t,r.children,n),t.memoizedState=null,n):o?(r=hu(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Kr,r):(n=pu(e,t,r.children,n),t.memoizedState=null,n)}function du(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Qs(t,i,0,null),n=un(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function pu(e,t,n,r){var i=e.child;return e=i.sibling,n=wt(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function hu(e,t,n,r,i){var o=t.mode,l=e.child;e=l.sibling;var s={mode:"hidden",children:n};return(o&2)===0&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=s,l=n.lastEffect,l!==null?(t.firstEffect=n.firstEffect,t.lastEffect=l,l.nextEffect=null):t.firstEffect=t.lastEffect=null):n=wt(l,s),e!==null?r=wt(e,r):(r=un(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function mu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),dc(e.return,t)}function $o(e,t,n,r,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i,l.lastEffect=o)}function gu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=W.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,n);else if(e.tag===19)mu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(W,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ni(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$o(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ni(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$o(t,!0,n,null,o,t.lastEffect);break;case"together":$o(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function We(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),br|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var Tc,Pl,zc,Ic;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pl=function(){};zc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zt(Me.current);var o=null;switch(n){case"input":i=Jo(e,i),r=Jo(e,r),o=[];break;case"option":i=nl(e,i),r=nl(e,r),o=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),o=[];break;case"textarea":i=rl(e,i),r=rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}ll(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&D("scroll",e),o||s===a||(o=[])):typeof a=="object"&&a!==null&&a.$$typeof===ds?a.toString():(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ah(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return pe(t.type)&&Pi(),null;case 3:return mn(),$(de),$(oe),js(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Pl(t),null;case 5:Rs(t);var i=zt(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)zc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(_(166));return null}if(e=zt(Me.current),Xr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[Ci]=o,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(e=0;e<Wn.length;e++)D(Wn[e],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":ga(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":va(r,o),D("invalid",r)}ll(n,o),e=null;for(var l in o)o.hasOwnProperty(l)&&(i=o[l],l==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):cr.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&D("scroll",r));switch(n){case"input":Hr(r),ya(r,o,!0);break;case"textarea":Hr(r),wa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ei)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(l=i.nodeType===9?i:i.ownerDocument,e===il.html&&(e=Sf(n)),e===il.html?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tt]=t,e[Ci]=r,Tc(e,t,!1,!1),t.stateNode=e,l=sl(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wn.length;i++)D(Wn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":ga(e,r),i=Jo(e,r),D("invalid",e);break;case"option":i=nl(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),D("invalid",e);break;case"textarea":va(e,r),i=rl(e,r),D("invalid",e);break;default:i=r}ll(n,i);var s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Pf(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ef(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&dr(e,a):typeof a=="number"&&dr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&D("scroll",e):a!=null&&ls(e,o,a,l))}switch(n){case"input":Hr(e),ya(e,r,!1);break;case"textarea":Hr(e),wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?en(e,!!r.multiple,o,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ei)}rc(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));n=zt(Sr.current),zt(Me.current),Xr(t)?(r=t.stateNode,n=t.memoizedProps,r[tt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r)}return null;case 13:return $(W),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Xr(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(W.current&1)!==0?ee===0&&(ee=3):((ee===0||ee===3)&&(ee=4),se===null||(br&134217727)===0&&(Sn&134217727)===0||sn(se,ie))),(r||n)&&(t.flags|=4),null);case 4:return mn(),Pl(t),e===null&&ec(t.stateNode.containerInfo),null;case 10:return Ls(t),null;case 17:return pe(t.type)&&Pi(),null;case 19:if($(W),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,l=r.rendering,l===null)if(o)An(r,!1);else{if(ee!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(l=Ni(e),l!==null){for(t.flags|=64,An(r,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(W,W.current&1|2),t.child}e=e.sibling}r.tail!==null&&re()>Nl&&(t.flags|=64,o=!0,An(r,!1),t.lanes=33554432)}else{if(!o)if(e=Ni(l),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!be)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*re()-r.renderingStartTime>Nl&&n!==1073741824&&(t.flags|=64,o=!0,An(r,!1),t.lanes=33554432);r.isBackwards?(l.sibling=t.child,t.child=l):(n=r.last,n!==null?n.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=re(),n.sibling=null,t=W.current,Q(W,o?t&1|2:t&1),n):null;case 23:case 24:return Hs(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(_(156,t.tag))}function uh(e){switch(e.tag){case 1:pe(e.type)&&Pi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(mn(),$(de),$(oe),js(),t=e.flags,(t&64)!==0)throw Error(_(285));return e.flags=t&-4097|64,e;case 5:return Rs(e),null;case 13:return $(W),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return $(W),null;case 4:return mn(),null;case 10:return Ls(e),null;case 23:case 24:return Hs(),null;default:return null}}function $s(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Di||(Di=!0,Rl=r),Ol(e,t)},n}function Nc(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Ol(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(je===null?je=new Set([this]):je.add(this),Ol(e,t));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}var ch=typeof WeakSet=="function"?WeakSet:Set;function yu(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){pt(e,n)}else t.current=null}function dh(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Oe(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Os(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(_(163))}function ph(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Uc(n,e),kh(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Oe(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Za(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Za(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&rc(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&bf(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(_(163))}function vu(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Cf("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function wu(e,t){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Ts,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Uc(t,n);else{r=t;try{i()}catch(o){pt(r,o)}}n=n.next}while(n!==e)}break;case 1:if(yu(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){pt(t,o)}break;case 5:yu(t);break;case 4:Rc(e,t)}}function xu(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function ku(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:{for(var t=e.return;t!==null;){if(ku(t))break e;t=t.return}throw Error(_(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(_(161))}n.flags&16&&(dr(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||ku(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Tl(e,n,t):zl(e,n,t)}function Tl(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}function zl(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function Rc(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(_(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var l=e,s=n,a=s;;)if(wu(l,a),a.child!==null&&a.tag!==4)a.child.return=a,a=a.child;else{if(a===s)break e;for(;a.sibling===null;){if(a.return===null||a.return===s)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}o?(l=i,s=n.stateNode,l.nodeType===8?l.parentNode.removeChild(s):l.removeChild(s)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(wu(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Uo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Ci]=r,e==="input"&&r.type==="radio"&&r.name!=null&&kf(n,r),sl(e,i),t=sl(e,r),i=0;i<o.length;i+=2){var l=o[i],s=o[i+1];l==="style"?Pf(n,s):l==="dangerouslySetInnerHTML"?Ef(n,s):l==="children"?dr(n,s):ls(n,l,s,t)}switch(e){case"input":el(n,r);break;case"textarea":_f(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?en(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?en(n,!!r.multiple,r.defaultValue,!0):en(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(_(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,bf(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Bs=re(),vu(t.child,!0)),Su(t);return;case 19:Su(t);return;case 17:return;case 23:case 24:vu(t,t.memoizedState!==null);return}throw Error(_(163))}function Su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ch),t.forEach(function(r){var i=Eh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hh(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var mh=Math.ceil,Ai=Dt.ReactCurrentDispatcher,Us=Dt.ReactCurrentOwner,L=0,se=null,G=null,ie=0,Mt=0,Il=xt(0),ee=0,so=null,_n=0,br=0,Sn=0,Vs=0,Ll=null,Bs=0,Nl=1/0;function En(){Nl=re()+500}var C=null,Di=!1,Rl=null,je=null,vt=!1,ir=null,Qn=90,jl=[],Ml=[],Qe=null,or=0,bl=null,di=-1,Be=0,pi=0,lr=null,hi=!1;function he(){return(L&48)!==0?re():di!==-1?di:di=re()}function ct(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return hn()===99?1:2;if(Be===0&&(Be=_n),nh.transition!==0){pi!==0&&(pi=Ll!==null?Ll.pendingLanes:0),e=Be;var t=4186112&~pi;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=hn(),(L&4)!==0&&e===98?e=_i(12,Be):(e=op(e),e=_i(e,Be)),e}function dt(e,t,n){if(50<or)throw or=0,bl=null,Error(_(185));if(e=ao(e,t),e===null)return null;eo(e,t,n),e===se&&(Sn|=t,ee===4&&sn(e,ie));var r=hn();t===1?(L&8)!==0&&(L&48)===0?Fl(e):(Se(e,n),L===0&&(En(),Ae())):((L&4)===0||r!==98&&r!==99||(Qe===null?Qe=new Set([e]):Qe.add(e)),Se(e,n)),Ll=e}function ao(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Se(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-gt(l),a=1<<s,u=o[s];if(u===-1){if((a&r)===0||(a&i)!==0){u=t,Wt(a);var h=A;o[s]=10<=h?u+250:6<=h?u+5e3:-1}}else u<=t&&(e.expiredLanes|=a);l&=~a}if(r=gr(e,e===se?ie:0),t=A,r===0)n!==null&&(n!==bo&&vl(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==bo&&vl(n)}t===15?(n=Fl.bind(null,e),Ve===null?(Ve=[n],ci=zs(oo,cc)):Ve.push(n),n=bo):t===14?n=xr(99,Fl.bind(null,e)):(n=lp(t),n=xr(n,jc.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function jc(e){if(di=-1,pi=Be=0,(L&48)!==0)throw Error(_(327));var t=e.callbackNode;if(kt()&&e.callbackNode!==t)return null;var n=gr(e,e===se?ie:0);if(n===0)return null;var r=n,i=L;L|=16;var o=Ac();(se!==e||ie!==r)&&(En(),an(e,r));do try{vh();break}catch(s){Fc(e,s)}while(1);if(Is(),Ai.current=o,L=i,G!==null?r=0:(se=null,ie=0,r=ee),(_n&Sn)!==0)an(e,0);else if(r!==0){if(r===2&&(L|=64,e.hydrate&&(e.hydrate=!1,Os(e.containerInfo)),n=Bf(e),n!==0&&(r=Yn(e,n))),r===1)throw t=so,an(e,0),sn(e,n),Se(e,re()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(_(345));case 2:Et(e);break;case 3:if(sn(e,n),(n&62914560)===n&&(r=Bs+500-re(),10<r)){if(gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ha(Et.bind(null,e),r);break}Et(e);break;case 4:if(sn(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var l=31-gt(n);o=1<<l,l=r[l],l>i&&(i=l),n&=~o}if(n=i,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*mh(n/1960))-n,10<n){e.timeoutHandle=Ha(Et.bind(null,e),n);break}Et(e);break;case 5:Et(e);break;default:throw Error(_(329))}}return Se(e,re()),e.callbackNode===t?jc.bind(null,e):null}function sn(e,t){for(t&=~Vs,t&=~Sn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Fl(e){if((L&48)!==0)throw Error(_(327));if(kt(),e===se&&(e.expiredLanes&ie)!==0){var t=ie,n=Yn(e,t);(_n&Sn)!==0&&(t=gr(e,t),n=Yn(e,t))}else t=gr(e,0),n=Yn(e,t);if(e.tag!==0&&n===2&&(L|=64,e.hydrate&&(e.hydrate=!1,Os(e.containerInfo)),t=Bf(e),t!==0&&(n=Yn(e,t))),n===1)throw n=so,an(e,0),sn(e,t),Se(e,re()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e),Se(e,re()),null}function gh(){if(Qe!==null){var e=Qe;Qe=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Se(t,re())})}Ae()}function Mc(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(En(),Ae())}}function bc(e,t){var n=L;L&=-2,L|=8;try{return e(t)}finally{L=n,L===0&&(En(),Ae())}}function Zr(e,t){Q(Il,Mt),Mt|=t,_n|=t}function Hs(){Mt=Il.current,$(Il)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xp(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:mn(),$(de),$(oe),js();break;case 5:Rs(r);break;case 4:mn();break;case 13:$(W);break;case 19:$(W);break;case 10:Ls(r);break;case 23:case 24:Hs()}n=n.return}se=e,G=wt(e.current,null),ie=Mt=_n=t,ee=0,so=null,Vs=Sn=br=0}function Fc(e,t){do{var n=G;try{if(Is(),nr.current=Fi,Ri){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ri=!1}if(Er=0,J=ne=q=null,rr=!1,Us.current=null,n===null||n.return===null){ee=1,so=t,G=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=ie,s.flags|=2048,s.firstEffect=s.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a;if((s.mode&2)===0){var h=s.alternate;h?(s.updateQueue=h.updateQueue,s.memoizedState=h.memoizedState,s.lanes=h.lanes):(s.updateQueue=null,s.memoizedState=null)}var v=(W.current&1)!==0,p=l;do{var x;if(x=p.tag===13){var y=p.memoizedState;if(y!==null)x=y.dehydrated!==null;else{var w=p.memoizedProps;x=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!v}}if(x){var c=p.updateQueue;if(c===null){var f=new Set;f.add(u),p.updateQueue=f}else c.add(u);if((p.mode&2)===0){if(p.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var d=ut(-1,1);d.tag=2,ft(s,d)}s.lanes|=1;break e}a=void 0,s=t;var m=o.pingCache;if(m===null?(m=o.pingCache=new fh,a=new Set,m.set(u,a)):(a=m.get(u),a===void 0&&(a=new Set,m.set(u,a))),!a.has(s)){a.add(s);var g=Sh.bind(null,o,u,s);u.then(g,g)}p.flags|=4096,p.lanes=t;break e}p=p.return}while(p!==null);a=Error((Jt(s.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}ee!==5&&(ee=2),a=$s(a,s),p=l;do{switch(p.tag){case 3:o=a,p.flags|=4096,t&=-t,p.lanes|=t;var P=Lc(p,o,t);Ka(p,P);break e;case 1:o=a;var k=p.type,T=p.stateNode;if((p.flags&64)===0&&(typeof k.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(je===null||!je.has(T)))){p.flags|=4096,t&=-t,p.lanes|=t;var z=Nc(p,o,t);Ka(p,z);break e}}p=p.return}while(p!==null)}$c(n)}catch(O){t=O,G===n&&n!==null&&(G=n=n.return);continue}break}while(1)}function Ac(){var e=Ai.current;return Ai.current=Fi,e===null?Fi:e}function Yn(e,t){var n=L;L|=16;var r=Ac();se===e&&ie===t||an(e,t);do try{yh();break}catch(i){Fc(e,i)}while(1);if(Is(),L=n,Ai.current=r,G!==null)throw Error(_(261));return se=null,ie=0,ee}function yh(){for(;G!==null;)Dc(G)}function vh(){for(;G!==null&&!Jp();)Dc(G)}function Dc(e){var t=Vc(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?$c(e):G=t,Us.current=null}function $c(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=ah(n,t,Mt),n!==null){G=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Mt&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=uh(t),n!==null){n.flags&=2047,G=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);ee===0&&(ee=5)}function Et(e){var t=hn();return jt(99,wh.bind(null,e,t)),null}function wh(e,t){do kt();while(ir!==null);if((L&48)!==0)throw Error(_(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var l=e.eventTimes,s=e.expirationTimes;0<o;){var a=31-gt(o),u=1<<a;i[a]=0,l[a]=-1,s[a]=-1,o&=~u}if(Qe!==null&&(r&24)===0&&Qe.has(e)&&Qe.delete(e),e===se&&(G=se=null,ie=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=L,L|=32,Us.current=null,Ro=si,l=Fa(),pl(l)){if("selectionStart"in l)s={start:l.selectionStart,end:l.selectionEnd};else e:if(s=(s=l.ownerDocument)&&s.defaultView||window,(u=s.getSelection&&s.getSelection())&&u.rangeCount!==0){s=u.anchorNode,o=u.anchorOffset,a=u.focusNode,u=u.focusOffset;try{s.nodeType,a.nodeType}catch{s=null;break e}var h=0,v=-1,p=-1,x=0,y=0,w=l,c=null;t:for(;;){for(var f;w!==s||o!==0&&w.nodeType!==3||(v=h+o),w!==a||u!==0&&w.nodeType!==3||(p=h+u),w.nodeType===3&&(h+=w.nodeValue.length),(f=w.firstChild)!==null;)c=w,w=f;for(;;){if(w===l)break t;if(c===s&&++x===o&&(v=h),c===a&&++y===u&&(p=h),(f=w.nextSibling)!==null)break;w=c,c=w.parentNode}w=f}s=v===-1||p===-1?null:{start:v,end:p}}else s=null;s=s||{start:0,end:0}}else s=null;jo={focusedElem:l,selectionRange:s},si=!1,lr=null,hi=!1,C=r;do try{xh()}catch(O){if(C===null)throw Error(_(330));pt(C,O),C=C.nextEffect}while(C!==null);lr=null,C=r;do try{for(l=e;C!==null;){var d=C.flags;if(d&16&&dr(C.stateNode,""),d&128){var m=C.alternate;if(m!==null){var g=m.ref;g!==null&&(typeof g=="function"?g(null):g.current=null)}}switch(d&1038){case 2:_u(C),C.flags&=-3;break;case 6:_u(C),C.flags&=-3,Uo(C.alternate,C);break;case 1024:C.flags&=-1025;break;case 1028:C.flags&=-1025,Uo(C.alternate,C);break;case 4:Uo(C.alternate,C);break;case 8:s=C,Rc(l,s);var P=s.alternate;xu(s),P!==null&&xu(P)}C=C.nextEffect}}catch(O){if(C===null)throw Error(_(330));pt(C,O),C=C.nextEffect}while(C!==null);if(g=jo,m=Fa(),d=g.focusedElem,l=g.selectionRange,m!==d&&d&&d.ownerDocument&&Kf(d.ownerDocument.documentElement,d)){for(l!==null&&pl(d)&&(m=l.start,g=l.end,g===void 0&&(g=m),"selectionStart"in d?(d.selectionStart=m,d.selectionEnd=Math.min(g,d.value.length)):(g=(m=d.ownerDocument||document)&&m.defaultView||window,g.getSelection&&(g=g.getSelection(),s=d.textContent.length,P=Math.min(l.start,s),l=l.end===void 0?P:Math.min(l.end,s),!g.extend&&P>l&&(s=l,l=P,P=s),s=ba(d,P),o=ba(d,l),s&&o&&(g.rangeCount!==1||g.anchorNode!==s.node||g.anchorOffset!==s.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)&&(m=m.createRange(),m.setStart(s.node,s.offset),g.removeAllRanges(),P>l?(g.addRange(m),g.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),g.addRange(m)))))),m=[],g=d;g=g.parentNode;)g.nodeType===1&&m.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<m.length;d++)g=m[d],g.element.scrollLeft=g.left,g.element.scrollTop=g.top}si=!!Ro,jo=Ro=null,e.current=n,C=r;do try{for(d=e;C!==null;){var k=C.flags;if(k&36&&ph(d,C.alternate,C),k&128){m=void 0;var T=C.ref;if(T!==null){var z=C.stateNode;switch(C.tag){case 5:m=z;break;default:m=z}typeof T=="function"?T(m):T.current=m}}C=C.nextEffect}}catch(O){if(C===null)throw Error(_(330));pt(C,O),C=C.nextEffect}while(C!==null);C=null,th(),L=i}else e.current=n;if(vt)vt=!1,ir=e,Qn=t;else for(C=r;C!==null;)t=C.nextEffect,C.nextEffect=null,C.flags&8&&(k=C,k.sibling=null,k.stateNode=null),C=t;if(r=e.pendingLanes,r===0&&(je=null),r===1?e===bl?or++:(or=0,bl=e):or=0,n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Ts,n,void 0,(n.current.flags&64)===64)}catch{}if(Se(e,re()),Di)throw Di=!1,e=Rl,Rl=null,e;return(L&8)!==0||Ae(),null}function xh(){for(;C!==null;){var e=C.alternate;hi||lr===null||((C.flags&8)!==0?_a(C,lr)&&(hi=!0):C.tag===13&&hh(e,C)&&_a(C,lr)&&(hi=!0));var t=C.flags;(t&256)!==0&&dh(e,C),(t&512)===0||vt||(vt=!0,xr(97,function(){return kt(),null})),C=C.nextEffect}}function kt(){if(Qn!==90){var e=97<Qn?97:Qn;return Qn=90,jt(e,_h)}return!1}function kh(e,t){jl.push(t,e),vt||(vt=!0,xr(97,function(){return kt(),null}))}function Uc(e,t){Ml.push(t,e),vt||(vt=!0,xr(97,function(){return kt(),null}))}function _h(){if(ir===null)return!1;var e=ir;if(ir=null,(L&48)!==0)throw Error(_(331));var t=L;L|=32;var n=Ml;Ml=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],l=i.destroy;if(i.destroy=void 0,typeof l=="function")try{l()}catch(a){if(o===null)throw Error(_(330));pt(o,a)}}for(n=jl,jl=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var s=i.create;i.destroy=s()}catch(a){if(o===null)throw Error(_(330));pt(o,a)}}for(s=e.current.firstEffect;s!==null;)e=s.nextEffect,s.nextEffect=null,s.flags&8&&(s.sibling=null,s.stateNode=null),s=e;return L=t,Ae(),!0}function Eu(e,t,n){t=$s(n,t),t=Lc(e,t,1),ft(e,t),t=he(),e=ao(e,1),e!==null&&(eo(e,1,t),Se(e,t))}function pt(e,t){if(e.tag===3)Eu(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Eu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(je===null||!je.has(r))){e=$s(t,e);var i=Nc(n,e,1);if(ft(n,i),i=he(),n=ao(n,1),n!==null)eo(n,1,i),Se(n,i);else if(typeof r.componentDidCatch=="function"&&(je===null||!je.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function Sh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&62914560)===ie&&500>re()-Bs?an(e,0):Vs|=n),Se(e,t)}function Eh(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=hn()===99?1:2:(Be===0&&(Be=_n),t=Qt(62914560&~Be),t===0&&(t=4194304))),n=he(),e=ao(e,t),e!==null&&(eo(e,t,n),Se(e,n))}var Vc;Vc=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ze=!0;else if((n&r)!==0)ze=(e.flags&16384)!==0;else{switch(ze=!1,t.tag){case 3:fu(t),Ao();break;case 5:tu(t);break;case 1:pe(t.type)&&fi(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Q(Oi,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?cu(e,t,n):(Q(W,W.current&1),t=We(e,t,n),t!==null?t.sibling:null);Q(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return gu(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(W,W.current),r)break;return null;case 23:case 24:return t.lanes=0,Do(e,t,n)}return We(e,t,n)}else ze=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=pn(t,oe.current),on(t,n),i=bs(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)){var o=!0;fi(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ns(t);var l=r.getDerivedStateFromProps;typeof l=="function"&&Ii(t,r,l,e),i.updater=lo,t.stateNode=i,i._reactInternals=t,xl(t,r,e,n),t=Cl(null,t,r,!0,o,n)}else t.tag=0,fe(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Ph(i),e=Oe(i,e),o){case 0:t=El(null,t,i,e,n);break e;case 1:t=uu(null,t,i,e,n);break e;case 11:t=su(null,t,i,e,n);break e;case 14:t=au(null,t,i,Oe(i.type,e),r,n);break e}throw Error(_(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),El(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),uu(e,t,r,i,n);case 3:if(fu(t),r=t.updateQueue,e===null||r===null)throw Error(_(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,pc(e,t),kr(t,r,null,n),r=t.memoizedState.element,r===i)Ao(),t=We(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(nt=rn(t.stateNode.containerInfo.firstChild),He=t,o=be=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],ln.push(o);for(n=yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else fe(e,t,r,n),Ao();t=t.child}return t;case 5:return tu(t),e===null&&_l(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gl(r,i)?l=null:o!==null&&gl(r,o)&&(t.flags|=16),Oc(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&_l(t),null;case 13:return cu(e,t,n);case 4:return kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Li(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),su(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value;var s=t.type._context;if(Q(Oi,s._currentValue),s._currentValue=o,l!==null)if(s=l.value,o=ye(s,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(s,o):1073741823)|0,o===0){if(l.children===i.children&&!de.current){t=We(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){s.tag===1&&(u=ut(-1,n&-n),u.tag=2,ft(s,u)),s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dc(s.return,n),a.lanes|=n;break}u=u.next}}else l=s.tag===10&&s.type===t.type?null:s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,on(t,n),i=_e(i,o.unstable_observedBits),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return i=t.type,o=Oe(i,t.pendingProps),o=Oe(i.type,o),au(e,t,i,o,r,n);case 15:return Pc(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,pe(r)?(e=!0,fi(t)):e=!1,on(t,n),mc(t,r,i),xl(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return gu(e,t,n);case 23:return Do(e,t,n);case 24:return Do(e,t,n)}throw Error(_(156,t.tag))};function Ch(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ve(e,t,n,r){return new Ch(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ph(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ki)return 11;if(e===Zi)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Je:return un(n.children,i,o,t);case vf:l=8,i|=16;break;case ss:l=8,i|=1;break;case Gn:return e=ve(12,n,t,i|8),e.elementType=Gn,e.type=Gn,e.lanes=o,e;case Xn:return e=ve(13,n,t,i),e.type=Xn,e.elementType=Xn,e.lanes=o,e;case vi:return e=ve(19,n,t,i),e.elementType=vi,e.lanes=o,e;case ps:return Qs(n,i,o,t);case Zo:return e=ve(24,n,t,i),e.elementType=Zo,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case as:l=10;break e;case us:l=9;break e;case Ki:l=11;break e;case Zi:l=14;break e;case fs:l=16,r=null;break e;case cs:l=22;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ve(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=ve(7,e,r,t),e.lanes=n,e}function Qs(e,t,n,r){return e=ve(23,e,r,t),e.elementType=ps,e.lanes=n,e}function Vo(e,t,n){return e=ve(6,e,null,t),e.lanes=n,e}function Bo(e,t,n){return t=ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oh(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.mutableSourceEagerHydrationData=null}function Th(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $i(e,t,n,r){var i=t.current,o=he(),l=ct(i);e:if(n){n=n._reactInternals;t:{if($t(n)!==n||n.tag!==1)throw Error(_(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(pe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(s!==null);throw Error(_(171))}if(n.tag===1){var a=n.type;if(pe(a)){n=oc(n,a,s);break e}}n=s}else n=yt;return t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),ft(i,t),dt(i,l,o),l}function Ho(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){Cu(e,t),(e=e.alternate)&&Cu(e,t)}function zh(){return null}function qs(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new Oh(e,t,n!=null&&n.hydrate===!0),t=ve(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,Ns(t),e[kn]=n.current,ec(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}qs.prototype.render=function(e){$i(e,this._internalRoot,null,null)};qs.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;$i(null,e,null,function(){t[kn]=null})};function Fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new qs(e,0,t?{hydrate:!0}:void 0)}function uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o._internalRoot;if(typeof i=="function"){var s=i;i=function(){var u=Ho(l);s.call(u)}}$i(t,l,e,i)}else{if(o=n._reactRootContainer=Ih(n,r),l=o._internalRoot,typeof i=="function"){var a=i;i=function(){var u=Ho(l);a.call(u)}}bc(function(){$i(t,l,e,i)})}return Ho(l)}Rf=function(e){if(e.tag===13){var t=he();dt(e,4,t),Ys(e,4)}};vs=function(e){if(e.tag===13){var t=he();dt(e,67108864,t),Ys(e,67108864)}};jf=function(e){if(e.tag===13){var t=he(),n=ct(e);dt(e,n,t),Ys(e,n)}};Mf=function(e,t){return t()};al=function(e,t,n){switch(t){case"input":if(el(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=io(r);if(!i)throw Error(_(90));xf(r),el(r,i)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};ms=Mc;zf=function(e,t,n,r,i){var o=L;L|=4;try{return jt(98,e.bind(null,t,n,r,i))}finally{L=o,L===0&&(En(),Ae())}};gs=function(){(L&49)===0&&(gh(),kt())};If=function(e,t){var n=L;L|=2;try{return e(t)}finally{L=n,L===0&&(En(),Ae())}};function Bc(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fr(t))throw Error(_(200));return Th(e,t,null,n)}var Lh={Events:[jr,Xt,io,Of,Tf,kt,{current:!1}]},Dn={findFiberByHostInstance:Tt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Nh={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nf(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{Ts=Jr.inject(Nh),Lt=Jr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh;Ee.createPortal=Bc;Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):Error(_(268,Object.keys(e)));return e=Nf(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e,t){var n=L;if((n&48)!==0)return e(t);L|=1;try{if(e)return jt(99,e.bind(null,t))}finally{L=n,Ae()}};Ee.hydrate=function(e,t,n){if(!Fr(t))throw Error(_(200));return uo(null,e,t,!0,n)};Ee.render=function(e,t,n){if(!Fr(t))throw Error(_(200));return uo(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Fr(e))throw Error(_(40));return e._reactRootContainer?(bc(function(){uo(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Ee.unstable_batchedUpdates=Mc;Ee.unstable_createPortal=function(e,t){return Bc(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fr(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return uo(e,t,n,!1,r)};Ee.version="17.0.2";function Hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hc)}catch(e){console.error(e)}}Hc(),rs.exports=Ee;var Rh=rs.exports;var jh="/Apologize_website/assets/section-1.f4e67de0.webp",Mh="/Apologize_website/assets/section-3.fffbf972.webp",bh="/Apologize_website/assets/section-2.5f123dcb.webp",Fh="/Apologize_website/assets/bear.0ed4f052.gif",Ah="/Apologize_website/assets/rain1.c71f46be.wav",Dh="/Apologize_website/assets/letter.a0ea524d.mp3",Gs={exports:{}},Ar={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=I.exports,Wc=60103;Ar.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Pu=Symbol.for;Wc=Pu("react.element"),Ar.Fragment=Pu("react.fragment")}var Uh=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vh=Object.prototype.hasOwnProperty,Bh={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vh.call(t,r)&&!Bh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Wc,type:e,key:o,ref:l,props:i,_owner:Uh.current}}Ar.jsx=Qc;Ar.jsxs=Qc;Gs.exports=Ar;const j=Gs.exports.jsx,ei=Gs.exports.jsxs,Hh=()=>{const e=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Message</title>
    <style type="text/css">
        @import "compass/reset";

        .stars, .twinkling, .clouds {
            position: absolute;
            display: block;
            top: 0; bottom: 0;
            left: 0; right: 0;
            width: 100%; height: 100%;
        }

        .stars {
            z-index: 0;
            background: #000 url('https://i.ibb.co/g91MwKZ/stars.png') repeat top center;
        }

        .twinkling {
            z-index: 1;
            background: transparent url('https://i.ibb.co/pnJQm6V/twinkling.png') repeat top center;
            animation: move-twink-back 200s linear infinite;
        }

        .clouds {
            z-index: 2;
            background: transparent url('https://i.ibb.co/BsG8rYZ/clouds.png') repeat top center;
            animation: move-clouds-back 200s linear infinite;
        }

        @keyframes move-twink-back {
            from { background-position: 0 0; }
            to { background-position: -10000px 5000px; }
        }

        @keyframes move-clouds-back {
            from { background-position: 0 0; }
            to { background-position: 10000px 0; }
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
        }
        @media (min-width: 300px) and (max-width: 600px) {
        html, body {
            height: 100%;
            padding-top: 150px;
        }
}
        body {
            width: 100%;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        @media (max-height: 500px) {
            body {
                margin: 25% 0 25% 0;
            }
        }

        .envelop {
            width: 15rem;
            height: 10rem;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }

        @media (min-width: 400px) and (max-width: 600px) {
            .envelop {
                width: 20rem;
                height: 15rem;
            }
        }

        @media (min-width: 600px) {
            .envelop {
                width: 25rem;
                height: 20rem;
            }
        }

        @media (min-width: 600px) and (min-height: 600px) {
            .envelop {
                bottom: 20%;
            }
        }

        .envelop__front-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            border-radius: 0.7rem;
            border: 0.35rem solid #967b5c;
            background-color: #ba9872;
            clip-path: polygon(100% 0%, 50% 70%, 0% 0%, 0% 100%, 100% 100%);
            z-index: 300;
        }

        .envelop__back-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            border-radius: 0.7rem;
            background-color: #967b5c;
            clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 90%);
            z-index: 100;
        }

        .envelop__up-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: relative;
            border-radius: 0.7rem;
            background-color: #967b5c;
            z-index: 400;
            clip-path: polygon(0% 0%, 100% 0%, 50% 81%);
        }

        .envelop__sticker {
            width: 100%;
            height: 20%;
            position: absolute;
            margin: auto;
            top: 30%;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 400;
            background-image: url("https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png");
            background-color: #f9f9f9;
            border: 0.3rem solid #e2e2e2;
            background-size: 2rem;
            background-position: center;
        }

        @media (max-width: 400px) {
            .envelop__sticker {
                background-size: 1.2rem;
            }
        }

        @media (min-width: 600px) {
            .envelop__sticker {
                height: 15%;
            }
        }

        .envelop__false-sticker {
            width: 20%;
            height: 20%;
            position: absolute;
            margin: auto;
            top: 30%;
            left: 80%;
            bottom: 0;
            right: 0;
            z-index: 300;
            background-image: url("https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png");
            background-color: #f9f9f9;
            border: 0.3rem solid #e2e2e2;
            background-size: 2rem;
            background-position: center;
        }

        @media (max-width: 400px) {
            .envelop__false-sticker {
                background-size: 1.2rem;
            }
        }

        @media (min-width: 600px) {
            .envelop__false-sticker {
                height: 15%;
            }
        }

        .envelop__content {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            z-index: 200;
        }

        .love-notes {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: left;
        }

        .note {
            width: 95%;
            height: 30%;
            background-color: #f9f9f9;
            position: absolute;
            overflow: hidden;
            transition: height 0.5s, opacity 0.25s;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        }

        .note:nth-child(1) {
            bottom: 64%;
        }

        .note:nth-child(2) {
            bottom: 42%;
        }

        .note:nth-child(3) {
            bottom: 20%;
        }

        .note:hover {
            cursor: pointer;
            height: 50%;
        }

        .note__text {
            font-family: "Roboto";
            padding: 1rem;
        }

        .note__text p {
            font-size: 16px;
            margin-bottom: 1rem;
            text-align: left;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }

        @media (min-width: 300px) and (max-width: 600px) {
            .note__text p {
                font-size: 16px;
            }
        }

        @media (min-width: 600px) {
            .note__text p {
                font-size: 16px;
            }
        }

        .scissors {
            cursor: url("https://i.postimg.cc/GtLCdKxR/sisors.png"), pointer;
        }

        .scissors:active {
            cursor: url("https://i.postimg.cc/GtXQ7WPZ/pngwing-com.png"), pointer;
        }

        .cursor {
            cursor: pointer;
        }

        .heading {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 50px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 400;
            text-align: center;
        }
        .sub-heading{
        position: absolute;
        padding-top:30px;
            top: 15%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 25px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 400;
            text-align: center;
        }
        @media (min-width: 300px) and (max-width: 600px) {
            .heading{
                font-size: 30px;
                top: 50%;
                
            }
            .sub-heading{
                font-size: 20px;
                top: 70%;
            }
        }
        @media (min-width: 595px) and (max-width: 1020px){
            .sub-heading{
            padding-top: 80px;
            }
        }
    </style>
</head>
<body class="scissors">
    <div class="stars">
        <div class="twinkling">
            <div class="clouds">
                <audio id="background-music" src="${Dh}"></audio>
                <div class="container-env">
                <div class="envelop">
                    <div class="envelop__front-paper"></div>
                    <div class="envelop__back-paper"></div>
                    <div class="envelop__up-paper js-up-paper"></div>
                    <div class="envelop__sticker js-sticker"></div>
                    <div class="envelop__false-sticker"></div>
                    <div class="envelop__content js-envelop-content">
                        <div class="love-notes">
                            <div class="note js-note">
                                <div class="note__text">
                                    <p ;">Hey Sanzida</p>
                                    <p> I hope you are in sound health & mind. 
I would like to apologize for my comment regarding the pictures that you sent me a few days ago. I realized that my words may have come across as insensitive and dismissive. It was not intended to hurt your feelings or make you feel as if you were obligated to send me anything special.</p>
                                </div>
                            </div>
                            <div class="note js-note">
                                <div class="note__text">
                                    <p>I understand why you might have felt upset with my comment, and it was not my place to question your choices. You have every right to share your photos however and wherever you want, and I regret making you feel as though you needed to provide me with something special.
I am sorry for that and I apologize.I hope you know how much I value our friendship and that your feelings matter to me.</p>
                                </div>
                            </div>
                            <div class="note js-note">
                                <div class="note__text">
                                    <p> I hope you will forgive me for my thoughtless words. I\u2019d love to talk things over and rebuild the trust that may have been hurt.</p>
                                    <p>Thank you for considering my apology. I genuinely hope to hear from you soon.</p>
                                    </br>
                                    <p >With all my heart</p>
                                    <p >Ziad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="heading">A special message awaits</div>
    <div class="sub-heading">Click to Unwrap My Heartfelt Words</div>
    <script type="text/javascript">
        //->Made it by 1vanbrav0
        //Variables
        let mobile_media_query = window.matchMedia("(max-width: 400px)");
        let tablet_media_query = window.matchMedia("(min-width: 400px) and (max-width: 600px)");
        const notes = document.querySelectorAll(".js-note");
        const music = document.getElementById("background-music");

        //-> Function that resets the size of the notes.
        function recize_notes() {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].classList.contains("active")) {
                    notes[i].classList.remove("active");
                    gsap.set(notes[i], {
                        height: "30%",
                        clearProps: "all"
                    });
                }
            }
        }

        //-> Main function that enables all the notes.
        function notes_ready() {
            gsap.to(".js-envelop-content", {
                height: "130%",
                duration: 0.5
            });

            for (let i = 0; i < notes.length; i++) {
                notes[i].addEventListener("click", function () {
                    if (mobile_media_query.matches) {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 125 + 40 * i + "%"
                            });
                        }
                    } else if (tablet_media_query.matches) {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 80 + 21 * i + "%"
                            });
                        }
                    } else {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 70 + 20 * i + "%"
                            });
                        }
                    }
                });
            }
        }

        //-> Function that set up the up paper of the envelope.
        function set_up_paper() {
    var arr = [0, 0, 100, 0, 50, 61];
    gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath: "polygon(" +
            arr[0] + "%" +
            arr[1] + "%," +
            arr[2] + "%" +
            arr[3] + "%," +
            arr[4] + "%" +
            arr[5] + "%)",
        onComplete: notes_ready
    });
}


        //-> Function that starts the up paper transition.
        function envelop_transition() {
            gsap.to(".js-up-paper", {
                bottom: "1%",
                duration: 0.25,
                onComplete: set_up_paper
            });
            document.querySelector(".js-up-paper").removeEventListener("click", envelop_transition);
            document.querySelector(".js-up-paper").classList.remove("cursor");

            // Play the background music when the envelope opens
            music.play();
        }

        //-> Function that allows cut the sticker.
        function sticker() {
            gsap.set(".js-sticker", { width: "20%", left: "-80%" });
            document.body.classList.remove("scissors");
            document.querySelector(".js-sticker").removeEventListener("click", sticker);
            document.querySelector(".js-up-paper").addEventListener("click", envelop_transition);
            document.querySelector(".js-up-paper").classList.add("cursor");
        }

        document.querySelector(".js-sticker").addEventListener("click", sticker);

        window.onresize = function (event) {
            recize_notes();
        };
    <\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>
</body>
</html>

  `;return j("div",{className:"preview-container",children:j("iframe",{srcDoc:e,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"preview"})})};let Xs=$r();const R=e=>Dr(e,Xs);let Ks=$r();R.write=e=>Dr(e,Ks);let fo=$r();R.onStart=e=>Dr(e,fo);let Zs=$r();R.onFrame=e=>Dr(e,Zs);let Js=$r();R.onFinish=e=>Dr(e,Js);let fn=[];R.setTimeout=(e,t)=>{let n=R.now()+t,r=()=>{let o=fn.findIndex(l=>l.cancel==r);~o&&fn.splice(o,1),it-=~o?1:0},i={time:n,handler:e,cancel:r};return fn.splice(Yc(n),0,i),it+=1,qc(),i};let Yc=e=>~(~fn.findIndex(t=>t.time>e)||~fn.length);R.cancel=e=>{fo.delete(e),Zs.delete(e),Xs.delete(e),Ks.delete(e),Js.delete(e)};R.sync=e=>{Al=!0,R.batchedUpdates(e),Al=!1};R.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,R.onStart(n)}return r.handler=e,r.cancel=()=>{fo.delete(n),t=null},r};let ea=typeof window!="undefined"?window.requestAnimationFrame:()=>{};R.use=e=>ea=e;R.now=typeof performance!="undefined"?()=>performance.now():Date.now;R.batchedUpdates=e=>e();R.catch=console.error;R.frameLoop="always";R.advance=()=>{R.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Xc()};let rt=-1,it=0,Al=!1;function Dr(e,t){Al?(t.delete(e),e(0)):(t.add(e),qc())}function qc(){rt<0&&(rt=0,R.frameLoop!=="demand"&&ea(Gc))}function Wh(){rt=-1}function Gc(){~rt&&(ea(Gc),R.batchedUpdates(Xc))}function Xc(){let e=rt;rt=R.now();let t=Yc(rt);t&&(Kc(fn.splice(0,t),n=>n.handler()),it-=t),fo.flush(),Xs.flush(e?Math.min(64,rt-e):16.667),Zs.flush(),Ks.flush(),Js.flush(),it||Wh()}function $r(){let e=new Set,t=e;return{add(n){it+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return it-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,it-=t.size,Kc(t,r=>r(n)&&e.add(r)),it+=e.size,t=e)}}}function Kc(e,t){e.forEach(n=>{try{t(n)}catch(r){R.catch(r)}})}function Dl(){}const Qh=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),S={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function Ue(e,t){if(S.arr(e)){if(!S.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const H=(e,t)=>e.forEach(t);function qe(e,t,n){if(S.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const xe=e=>S.und(e)?[]:S.arr(e)?e:[e];function sr(e,t){if(e.size){const n=Array.from(e);e.clear(),H(n,t)}}const qn=(e,...t)=>sr(e,n=>n(...t)),Zc=()=>typeof window=="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ta,Jc,ht=null,ed=!1,na=Dl;const Yh=e=>{e.to&&(Jc=e.to),e.now&&(R.now=e.now),e.colors!==void 0&&(ht=e.colors),e.skipAnimation!=null&&(ed=e.skipAnimation),e.createStringInterpolator&&(ta=e.createStringInterpolator),e.requestAnimationFrame&&R.use(e.requestAnimationFrame),e.batchedUpdates&&(R.batchedUpdates=e.batchedUpdates),e.willAdvance&&(na=e.willAdvance),e.frameLoop&&(R.frameLoop=e.frameLoop)};var Fe=Object.freeze({__proto__:null,get createStringInterpolator(){return ta},get to(){return Jc},get colors(){return ht},get skipAnimation(){return ed},get willAdvance(){return na},assign:Yh});const ar=new Set;let we=[],Wo=[],Ui=0;const co={get idle(){return!ar.size&&!we.length},start(e){Ui>e.priority?(ar.add(e),R.onStart(qh)):(td(e),R($l))},advance:$l,sort(e){if(Ui)R.onFrame(()=>co.sort(e));else{const t=we.indexOf(e);~t&&(we.splice(t,1),nd(e))}},clear(){we=[],ar.clear()}};function qh(){ar.forEach(td),ar.clear(),R($l)}function td(e){we.includes(e)||nd(e)}function nd(e){we.splice(Gh(we,t=>t.priority>e.priority),0,e)}function $l(e){const t=Wo;for(let n=0;n<we.length;n++){const r=we[n];Ui=r.priority,r.idle||(na(r),r.advance(e),r.idle||t.push(r))}return Ui=0,Wo=we,Wo.length=0,we=t,we.length>0}function Gh(e,t){const n=e.findIndex(t);return n<0?e.length:n}const Xh={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Ie="[-+]?\\d*\\.?\\d+",Vi=Ie+"%";function po(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Kh=new RegExp("rgb"+po(Ie,Ie,Ie)),Zh=new RegExp("rgba"+po(Ie,Ie,Ie,Ie)),Jh=new RegExp("hsl"+po(Ie,Vi,Vi)),e0=new RegExp("hsla"+po(Ie,Vi,Vi,Ie)),t0=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,n0=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,r0=/^#([0-9a-fA-F]{6})$/,i0=/^#([0-9a-fA-F]{8})$/;function o0(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=r0.exec(e))?parseInt(t[1]+"ff",16)>>>0:ht&&ht[e]!==void 0?ht[e]:(t=Kh.exec(e))?(Ht(t[1])<<24|Ht(t[2])<<16|Ht(t[3])<<8|255)>>>0:(t=Zh.exec(e))?(Ht(t[1])<<24|Ht(t[2])<<16|Ht(t[3])<<8|zu(t[4]))>>>0:(t=t0.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=i0.exec(e))?parseInt(t[1],16)>>>0:(t=n0.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Jh.exec(e))?(Ou(Tu(t[1]),ti(t[2]),ti(t[3]))|255)>>>0:(t=e0.exec(e))?(Ou(Tu(t[1]),ti(t[2]),ti(t[3]))|zu(t[4]))>>>0:null}function Qo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ou(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Qo(i,r,e+1/3),l=Qo(i,r,e),s=Qo(i,r,e-1/3);return Math.round(o*255)<<24|Math.round(l*255)<<16|Math.round(s*255)<<8}function Ht(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Tu(e){return(parseFloat(e)%360+360)%360/360}function zu(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function ti(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Iu(e){let t=o0(e);if(t===null)return e;t=t||0;let n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,o=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${o})`}const Cr=(e,t,n)=>{if(S.fun(e))return e;if(S.arr(e))return Cr({range:e,output:t,extrapolate:n});if(S.str(e.output[0]))return ta(e);const r=e,i=r.output,o=r.range||[0,1],l=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",a=r.easing||(u=>u);return u=>{const h=s0(u,o);return l0(u,o[h],o[h+1],i[h],i[h+1],a,l,s,r.map)}};function l0(e,t,n,r,i,o,l,s,a){let u=a?a(e):e;if(u<t){if(l==="identity")return u;l==="clamp"&&(u=t)}if(u>n){if(s==="identity")return u;s==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function s0(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}function Ul(){return Ul=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}const gn=Symbol.for("FluidValue.get"),bt=Symbol.for("FluidValue.observers"),ge=e=>Boolean(e&&e[gn]),ce=e=>e&&e[gn]?e[gn]():e,Lu=e=>e[bt]||null;function a0(e,t){e.eventObserved?e.eventObserved(t):e(t)}function Pr(e,t){let n=e[bt];n&&n.forEach(r=>{a0(r,t)})}class rd{constructor(t){if(this[gn]=void 0,this[bt]=void 0,!t&&!(t=this.get))throw Error("Unknown getter");u0(this,t)}}const u0=(e,t)=>id(e,gn,t);function Ur(e,t){if(e[gn]){let n=e[bt];n||id(e,bt,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Or(e,t){let n=e[bt];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[bt]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const id=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),gi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,f0=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Nu=new RegExp(`(${gi.source})(%|[a-z]+)`,"i"),c0=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ho=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,od=e=>{const[t,n]=d0(e);if(!t||Zc())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&ho.test(n))return od(n);if(n)return n}return e},d0=e=>{const t=ho.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Yo;const p0=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,ld=e=>{Yo||(Yo=ht?new RegExp(`(${Object.keys(ht).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(o=>ce(o).replace(ho,od).replace(f0,Iu).replace(Yo,Iu)),n=t.map(o=>o.match(gi).map(Number)),i=n[0].map((o,l)=>n.map(s=>{if(!(l in s))throw Error('The arity of each "output" value must be equal');return s[l]})).map(o=>Cr(Ul({},e,{output:o})));return o=>{var l;const s=!Nu.test(t[0])&&((l=t.find(u=>Nu.test(u)))==null?void 0:l.replace(gi,""));let a=0;return t[0].replace(gi,()=>`${i[a++](o)}${s||""}`).replace(c0,p0)}},sd="react-spring: ",ad=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${sd}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},h0=ad(console.warn);function m0(){h0(`${sd}The "interpolate" function is deprecated in v9 (use "to" instead)`)}ad(console.warn);function mo(e){return S.str(e)&&(e[0]=="#"||/\d/.test(e)||!Zc()&&ho.test(e)||e in(ht||{}))}const Tr=e=>I.exports.useEffect(e,g0),g0=[];function y0(){const e=I.exports.useState()[1],t=I.exports.useState(v0)[0];return Tr(t.unmount),()=>{t.current&&e({})}}function v0(){const e={current:!0,unmount:()=>()=>{e.current=!1}};return e}function Bi(e,t){const[n]=I.exports.useState(()=>({inputs:t,result:e()})),r=I.exports.useRef(),i=r.current;let o=i;return o?Boolean(t&&o.inputs&&w0(t,o.inputs))||(o={inputs:t,result:e()}):o=n,I.exports.useEffect(()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)},[o]),o.result}function w0(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const x0=typeof window!="undefined"&&window.document&&window.document.createElement?I.exports.useLayoutEffect:I.exports.useEffect,zr=Symbol.for("Animated:node"),k0=e=>!!e&&e[zr]===e,Le=e=>e&&e[zr],ra=(e,t)=>Qh(e,zr,t),go=e=>e&&e[zr]&&e[zr].getPayload();class ud{constructor(){this.payload=void 0,ra(this,this)}getPayload(){return this.payload||[]}}class Cn extends ud{constructor(t){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=t,S.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new Cn(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,n){return S.num(t)&&(this.lastPosition=t,n&&(t=Math.round(t/n)*n,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,S.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}}class yn extends Cn{constructor(t){super(0),this._string=null,this._toString=void 0,this._toString=Cr({output:[t,t]})}static create(t){return new yn(t)}getValue(){let t=this._string;return t==null?this._string=this._toString(this._value):t}setValue(t){if(S.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=Cr({output:[this.getValue(),t]})),this._value=0,super.reset()}}const Hi={dependencies:null};class yo extends ud{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const n={};return qe(this.source,(r,i)=>{k0(r)?n[i]=r.getValue(t):ge(r)?n[i]=ce(r):t||(n[i]=r)}),n}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&H(this.payload,t=>t.reset())}_makePayload(t){if(t){const n=new Set;return qe(t,this._addToPayload,n),Array.from(n)}}_addToPayload(t){Hi.dependencies&&ge(t)&&Hi.dependencies.add(t);const n=go(t);n&&H(n,r=>this.add(r))}}class ia extends yo{constructor(t){super(t)}static create(t){return new ia(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const n=this.getPayload();return t.length==n.length?n.map((r,i)=>r.setValue(t[i])).some(Boolean):(super.setValue(t.map(_0)),!0)}}function _0(e){return(mo(e)?yn:Cn).create(e)}function Vl(e){const t=Le(e);return t?t.constructor:S.arr(e)?ia:mo(e)?yn:Cn}function Wi(){return Wi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}const Ru=(e,t)=>{const n=!S.fun(e)||e.prototype&&e.prototype.isReactComponent;return I.exports.forwardRef((r,i)=>{const o=I.exports.useRef(null),l=n&&I.exports.useCallback(y=>{o.current=C0(i,y)},[i]),[s,a]=E0(r,t),u=y0(),h=()=>{const y=o.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,s.getValue(!0)):!1)===!1&&u()},v=new S0(h,a),p=I.exports.useRef();x0(()=>{const y=p.current;p.current=v,H(a,w=>Ur(w,v)),y&&(H(y.deps,w=>Or(w,y)),R.cancel(y.update))}),I.exports.useEffect(h,[]),Tr(()=>()=>{const y=p.current;H(y.deps,w=>Or(w,y))});const x=t.getComponentProps(s.getValue());return I.exports.createElement(e,Wi({},x,{ref:l}))})};class S0{constructor(t,n){this.update=t,this.deps=n}eventObserved(t){t.type=="change"&&R.write(this.update)}}function E0(e,t){const n=new Set;return Hi.dependencies=n,e.style&&(e=Wi({},e,{style:t.createAnimatedStyle(e.style)})),e=new yo(e),Hi.dependencies=null,[e,n]}function C0(e,t){return e&&(S.fun(e)?e(t):e.current=t),t}const ju=Symbol.for("AnimatedComponent"),P0=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new yo(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=l=>{const s=Mu(l)||"Anonymous";return S.str(l)?l=o[l]||(o[l]=Ru(l,i)):l=l[ju]||(l[ju]=Ru(l,i)),l.displayName=`Animated(${s})`,l};return qe(e,(l,s)=>{S.arr(e)&&(s=Mu(l)),o[s]=o(l)}),{animated:o}},Mu=e=>S.str(e)?e:e&&S.str(e.displayName)?e.displayName:S.fun(e)&&e.name||null;function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function Ct(e,...t){return S.fun(e)?e(...t):e}const ur=(e,t)=>e===!0||!!(t&&e&&(S.fun(e)?e(t):xe(e).includes(t))),fd=(e,t)=>S.obj(e)?t&&e[t]:e,cd=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,O0=e=>e,dd=(e,t=O0)=>{let n=T0;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const o=t(e[i],i);S.und(o)||(r[i]=o)}return r},T0=["config","onProps","onStart","onChange","onPause","onResume","onRest"],z0={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function I0(e){const t={};let n=0;if(qe(e,(r,i)=>{z0[i]||(t[i]=r,n++)}),n)return t}function pd(e){const t=I0(e);if(t){const n={to:t};return qe(e,(r,i)=>i in t||(n[i]=r)),n}return le({},e)}function Ir(e){return e=ce(e),S.arr(e)?e.map(Ir):mo(e)?Fe.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Bl(e){return S.fun(e)||S.arr(e)&&S.obj(e[0])}const hd={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Qi=1.70158,ni=Qi*1.525,bu=Qi+1,Fu=2*Math.PI/3,Au=2*Math.PI/4.5,ri=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,L0={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>bu*e*e*e-Qi*e*e,easeOutBack:e=>1+bu*Math.pow(e-1,3)+Qi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((ni+1)*2*e-ni)/2:(Math.pow(2*e-2,2)*((ni+1)*(e*2-2)+ni)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Fu),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Fu)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Au))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Au)/2+1,easeInBounce:e=>1-ri(1-e),easeOutBounce:ri,easeInOutBounce:e=>e<.5?(1-ri(1-2*e))/2:(1+ri(2*e-1))/2},Hl=le({},hd.default,{mass:1,damping:1,easing:L0.linear,clamp:!1});class N0{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Hl)}}function R0(e,t,n){n&&(n=le({},n),Du(n,t),t=le({},n,t)),Du(e,t),Object.assign(e,t);for(const l in Hl)e[l]==null&&(e[l]=Hl[l]);let{mass:r,frequency:i,damping:o}=e;return S.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i),e}function Du(e,t){if(!S.und(t.decay))e.duration=void 0;else{const n=!S.und(t.tension)||!S.und(t.friction);(n||!S.und(t.frequency)||!S.und(t.damping)||!S.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}const $u=[];class j0{constructor(){this.changed=!1,this.values=$u,this.toValues=null,this.fromValues=$u,this.to=void 0,this.from=void 0,this.config=new N0,this.immediate=!1}}function md(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise((l,s)=>{var a;let u,h,v=ur((a=n.cancel)!=null?a:r==null?void 0:r.cancel,t);if(v)y();else{S.und(n.pause)||(i.paused=ur(n.pause,t));let w=r==null?void 0:r.pause;w!==!0&&(w=i.paused||ur(w,t)),u=Ct(n.delay||0,t),w?(i.resumeQueue.add(x),o.pause()):(o.resume(),x())}function p(){i.resumeQueue.add(x),i.timeouts.delete(h),h.cancel(),u=h.time-R.now()}function x(){u>0&&!Fe.skipAnimation?(i.delayed=!0,h=R.setTimeout(y,u),i.pauseQueue.add(p),i.timeouts.add(h)):y()}function y(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(p),i.timeouts.delete(h),e<=(i.cancelId||0)&&(v=!0);try{o.start(le({},n,{callId:e,cancel:v}),l)}catch(w){s(w)}}})}const oa=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?cn(e.get()):t.every(n=>n.noop)?gd(e.get()):Te(e.get(),t.every(n=>n.finished)),gd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Te=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),cn=e=>({value:e,cancelled:!0,finished:!1});function yd(e,t,n,r){const{callId:i,parentId:o,onRest:l}=t,{asyncTo:s,promise:a}=n;return!o&&e===s&&!t.reset?a:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=dd(t,(c,f)=>f==="onRest"?void 0:c);let h,v;const p=new Promise((c,f)=>(h=c,v=f)),x=c=>{const f=i<=(n.cancelId||0)&&cn(r)||i!==n.asyncId&&Te(r,!1);if(f)throw c.result=f,v(c),c},y=(c,f)=>{const d=new Uu,m=new Vu;return(async()=>{if(Fe.skipAnimation)throw Lr(n),m.result=Te(r,!1),v(m),m;x(d);const g=S.obj(c)?le({},c):le({},f,{to:c});g.parentId=i,qe(u,(k,T)=>{S.und(g[T])&&(g[T]=k)});const P=await r.start(g);return x(d),n.paused&&await new Promise(k=>{n.resumeQueue.add(k)}),P})()};let w;if(Fe.skipAnimation)return Lr(n),Te(r,!1);try{let c;S.arr(e)?c=(async f=>{for(const d of f)await y(d)})(e):c=Promise.resolve(e(y,r.stop.bind(r))),await Promise.all([c.then(h),p]),w=Te(r.get(),!0,!1)}catch(c){if(c instanceof Uu)w=c.result;else if(c instanceof Vu)w=c.result;else throw c}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?a:void 0)}return S.fun(l)&&R.batchedUpdates(()=>{l(w,r,r.item)}),w})()}function Lr(e,t){sr(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Uu extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Vu extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Wl=e=>e instanceof la;let M0=1;class la extends rd{constructor(...t){super(...t),this.id=M0++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=Le(this);return t&&t.getValue()}to(...t){return Fe.to(this,t)}interpolate(...t){return m0(),Fe.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,n=!1){Pr(this,{type:"change",parent:this,value:t,idle:n})}_onPriorityChange(t){this.idle||co.sort(this),Pr(this,{type:"priority",parent:this,priority:t})}}const Ft=Symbol.for("SpringPhase"),vd=1,Ql=2,Yl=4,qo=e=>(e[Ft]&vd)>0,Ke=e=>(e[Ft]&Ql)>0,$n=e=>(e[Ft]&Yl)>0,Bu=(e,t)=>t?e[Ft]|=Ql|vd:e[Ft]&=~Ql,Hu=(e,t)=>t?e[Ft]|=Yl:e[Ft]&=~Yl;class b0 extends la{constructor(t,n){if(super(),this.key=void 0,this.animation=new j0,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!S.und(t)||!S.und(n)){const r=S.obj(t)?le({},t):le({},n,{from:t});S.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ke(this)||this._state.asyncTo)||$n(this)}get goal(){return ce(this.animation.to)}get velocity(){const t=Le(this);return t instanceof Cn?t.lastVelocity||0:t.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return qo(this)}get isAnimating(){return Ke(this)}get isPaused(){return $n(this)}get isDelayed(){return this._state.delayed}advance(t){let n=!0,r=!1;const i=this.animation;let{config:o,toValues:l}=i;const s=go(i.to);!s&&ge(i.to)&&(l=xe(ce(i.to))),i.values.forEach((h,v)=>{if(h.done)return;const p=h.constructor==yn?1:s?s[v].lastPosition:l[v];let x=i.immediate,y=p;if(!x){if(y=h.lastPosition,o.tension<=0){h.done=!0;return}let w=h.elapsedTime+=t;const c=i.fromValues[v],f=h.v0!=null?h.v0:h.v0=S.arr(o.velocity)?o.velocity[v]:o.velocity;let d;if(S.und(o.duration))if(o.decay){const m=o.decay===!0?.998:o.decay,g=Math.exp(-(1-m)*w);y=c+f/(1-m)*(1-g),x=Math.abs(h.lastPosition-y)<.1,d=f*g}else{d=h.lastVelocity==null?f:h.lastVelocity;const m=o.precision||(c==p?.005:Math.min(1,Math.abs(p-c)*.001)),g=o.restVelocity||m/10,P=o.clamp?0:o.bounce,k=!S.und(P),T=c==p?h.v0>0:c<p;let z,O=!1;const F=1,De=Math.ceil(t/F);for(let V=0;V<De&&(z=Math.abs(d)>g,!(!z&&(x=Math.abs(p-y)<=m,x)));++V){k&&(O=y==p||y>p==T,O&&(d=-d*P,y=p));const B=-o.tension*1e-6*(y-p),Xe=-o.friction*.001*d,$e=(B+Xe)/o.mass;d=d+$e*F,y=y+d*F}}else{let m=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,h.durationProgress>0&&(h.elapsedTime=o.duration*h.durationProgress,w=h.elapsedTime+=t)),m=(o.progress||0)+w/this._memoizedDuration,m=m>1?1:m<0?0:m,h.durationProgress=m),y=c+o.easing(m)*(p-c),d=(y-h.lastPosition)/t,x=m==1}h.lastVelocity=d,Number.isNaN(y)&&(console.warn("Got NaN while animating:",this),x=!0)}s&&!s[v].done&&(x=!1),x?h.done=!0:n=!1,h.setValue(y,o.round)&&(r=!0)});const a=Le(this),u=a.getValue();if(n){const h=ce(i.to);(u!==h||r)&&!o.decay?(a.setValue(h),this._onChange(h)):r&&o.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(t){return R.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ke(this)){const{to:t,config:n}=this.animation;R.batchedUpdates(()=>{this._onStart(),n.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,n){let r;return S.und(t)?(r=this.queue||[],this.queue=[]):r=[S.obj(t)?t:le({},n,{to:t})],Promise.all(r.map(i=>this._update(i))).then(i=>oa(this,i))}stop(t){const{to:n}=this.animation;return this._focus(this.get()),Lr(this._state,t&&this._lastCallId),R.batchedUpdates(()=>this._stop(n,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const n=this.key||"";let{to:r,from:i}=t;r=S.obj(r)?r[n]:r,(r==null||Bl(r))&&(r=void 0),i=S.obj(i)?i[n]:i,i==null&&(i=void 0);const o={to:r,from:i};return qo(this)||(t.reverse&&([r,i]=[i,r]),i=ce(i),S.und(i)?Le(this)||this._set(r):this._set(i)),o}_update(t,n){let r=le({},t);const{key:i,defaultProps:o}=this;r.default&&Object.assign(o,dd(r,(a,u)=>/^on/.test(u)?fd(a,i):a)),Qu(this,r,"onProps"),Vn(this,"onProps",r,this);const l=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return md(++this._lastCallId,{key:i,props:r,defaultProps:o,state:s,actions:{pause:()=>{$n(this)||(Hu(this,!0),qn(s.pauseQueue),Vn(this,"onPause",Te(this,Un(this,this.animation.to)),this))},resume:()=>{$n(this)&&(Hu(this,!1),Ke(this)&&this._resume(),qn(s.resumeQueue),Vn(this,"onResume",Te(this,Un(this,this.animation.to)),this))},start:this._merge.bind(this,l)}}).then(a=>{if(r.loop&&a.finished&&!(n&&a.noop)){const u=wd(r);if(u)return this._update(u,!0)}return a})}_merge(t,n,r){if(n.cancel)return this.stop(!0),r(cn(this));const i=!S.und(t.to),o=!S.und(t.from);if(i||o)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(cn(this));const{key:l,defaultProps:s,animation:a}=this,{to:u,from:h}=a;let{to:v=u,from:p=h}=t;o&&!i&&(!n.default||S.und(v))&&(v=p),n.reverse&&([v,p]=[p,v]);const x=!Ue(p,h);x&&(a.from=p),p=ce(p);const y=!Ue(v,u);y&&this._focus(v);const w=Bl(n.to),{config:c}=a,{decay:f,velocity:d}=c;(i||o)&&(c.velocity=0),n.config&&!w&&R0(c,Ct(n.config,l),n.config!==s.config?Ct(s.config,l):void 0);let m=Le(this);if(!m||S.und(v))return r(Te(this,!0));const g=S.und(n.reset)?o&&!n.default:!S.und(p)&&ur(n.reset,l),P=g?p:this.get(),k=Ir(v),T=S.num(k)||S.arr(k)||mo(k),z=!w&&(!T||ur(s.immediate||n.immediate,l));if(y){const V=Vl(v);if(V!==m.constructor)if(z)m=this._set(k);else throw Error(`Cannot animate between ${m.constructor.name} and ${V.name}, as the "to" prop suggests`)}const O=m.constructor;let F=ge(v),De=!1;if(!F){const V=g||!qo(this)&&x;(y||V)&&(De=Ue(Ir(P),k),F=!De),(!Ue(a.immediate,z)&&!z||!Ue(c.decay,f)||!Ue(c.velocity,d))&&(F=!0)}if(De&&Ke(this)&&(a.changed&&!g?F=!0:F||this._stop(u)),!w&&((F||ge(u))&&(a.values=m.getPayload(),a.toValues=ge(v)?null:O==yn?[1]:xe(k)),a.immediate!=z&&(a.immediate=z,!z&&!g&&this._set(u)),F)){const{onRest:V}=a;H(F0,Xe=>Qu(this,n,Xe));const B=Te(this,Un(this,u));qn(this._pendingCalls,B),this._pendingCalls.add(r),a.changed&&R.batchedUpdates(()=>{a.changed=!g,V==null||V(B,this),g?Ct(s.onRest,B):a.onStart==null||a.onStart(B,this)})}g&&this._set(P),w?r(yd(n.to,n,this._state,this)):F?this._start():Ke(this)&&!y?this._pendingCalls.add(r):r(gd(P))}_focus(t){const n=this.animation;t!==n.to&&(Lu(this)&&this._detach(),n.to=t,Lu(this)&&this._attach())}_attach(){let t=0;const{to:n}=this.animation;ge(n)&&(Ur(n,this),Wl(n)&&(t=n.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;ge(t)&&Or(t,this)}_set(t,n=!0){const r=ce(t);if(!S.und(r)){const i=Le(this);if(!i||!Ue(r,i.getValue())){const o=Vl(r);!i||i.constructor!=o?ra(this,o.create(r)):i.setValue(r),i&&R.batchedUpdates(()=>{this._onChange(r,n)})}}return Le(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,Vn(this,"onStart",Te(this,Un(this,t.to)),this))}_onChange(t,n){n||(this._onStart(),Ct(this.animation.onChange,t,this)),Ct(this.defaultProps.onChange,t,this),super._onChange(t,n)}_start(){const t=this.animation;Le(this).reset(ce(t.to)),t.immediate||(t.fromValues=t.values.map(n=>n.lastPosition)),Ke(this)||(Bu(this,!0),$n(this)||this._resume())}_resume(){Fe.skipAnimation?this.finish():co.start(this)}_stop(t,n){if(Ke(this)){Bu(this,!1);const r=this.animation;H(r.values,o=>{o.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Pr(this,{type:"idle",parent:this});const i=n?cn(this.get()):Te(this.get(),Un(this,t!=null?t:r.to));qn(this._pendingCalls,i),r.changed&&(r.changed=!1,Vn(this,"onRest",i,this))}}}function Un(e,t){const n=Ir(t),r=Ir(e.get());return Ue(r,n)}function wd(e,t=e.loop,n=e.to){let r=Ct(t);if(r){const i=r!==!0&&pd(r),o=(i||e).reverse,l=!i||i.reset;return ql(le({},e,{loop:t,default:!1,pause:void 0,to:!o||Bl(n)?n:void 0,from:l?e.from:void 0,reset:l},i))}}function ql(e){const{to:t,from:n}=e=pd(e),r=new Set;return S.obj(t)&&Wu(t,r),S.obj(n)&&Wu(n,r),e.keys=r.size?Array.from(r):null,e}function Wu(e,t){qe(e,(n,r)=>n!=null&&t.add(r))}const F0=["onStart","onRest","onChange","onPause","onResume"];function Qu(e,t,n){e.animation[n]=t[n]!==cd(t,n)?fd(t[n],e.key):void 0}function Vn(e,t,...n){var r,i,o,l;(r=(i=e.animation)[t])==null||r.call(i,...n),(o=(l=e.defaultProps)[t])==null||o.call(l,...n)}const A0=["onStart","onChange","onRest"];let D0=1;class xd{constructor(t,n){this.id=D0++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),t&&this.start(le({default:!0},t))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((n,r)=>t[r]=n.get()),t}set(t){for(const n in t){const r=t[n];S.und(r)||this.springs[n].set(r)}}update(t){return t&&this.queue.push(ql(t)),this}start(t){let{queue:n}=this;return t?n=xe(t).map(ql):this.queue=[],this._flush?this._flush(this,n):(_d(this,n),$0(this,n))}stop(t,n){if(t!==!!t&&(n=t),n){const r=this.springs;H(xe(n),i=>r[i].stop(!!t))}else Lr(this._state,this._lastAsyncId),this.each(r=>r.stop(!!t));return this}pause(t){if(S.und(t))this.start({pause:!0});else{const n=this.springs;H(xe(t),r=>n[r].pause())}return this}resume(t){if(S.und(t))this.start({pause:!1});else{const n=this.springs;H(xe(t),r=>n[r].resume())}return this}each(t){qe(this.springs,t)}_onFrame(){const{onStart:t,onChange:n,onRest:r}=this._events,i=this._active.size>0,o=this._changed.size>0;(i&&!this._started||o&&!this._started)&&(this._started=!0,sr(t,([a,u])=>{u.value=this.get(),a(u,this,this._item)}));const l=!i&&this._started,s=o||l&&r.size?this.get():null;o&&n.size&&sr(n,([a,u])=>{u.value=s,a(u,this,this._item)}),l&&(this._started=!1,sr(r,([a,u])=>{u.value=s,a(u,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;R.onFrame(this._onFrame)}}function $0(e,t){return Promise.all(t.map(n=>kd(e,n))).then(n=>oa(e,n))}async function kd(e,t,n){const{keys:r,to:i,from:o,loop:l,onRest:s,onResolve:a}=t,u=S.obj(t.default)&&t.default;l&&(t.loop=!1),i===!1&&(t.to=null),o===!1&&(t.from=null);const h=S.arr(i)||S.fun(i)?i:void 0;h?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):H(A0,w=>{const c=t[w];if(S.fun(c)){const f=e._events[w];t[w]=({finished:d,cancelled:m})=>{const g=f.get(c);g?(d||(g.finished=!1),m&&(g.cancelled=!0)):f.set(c,{value:null,finished:d||!1,cancelled:m||!1})},u&&(u[w]=t[w])}});const v=e._state;t.pause===!v.paused?(v.paused=t.pause,qn(t.pause?v.pauseQueue:v.resumeQueue)):v.paused&&(t.pause=!0);const p=(r||Object.keys(e.springs)).map(w=>e.springs[w].start(t)),x=t.cancel===!0||cd(t,"cancel")===!0;(h||x&&v.asyncId)&&p.push(md(++e._lastAsyncId,{props:t,state:v,actions:{pause:Dl,resume:Dl,start(w,c){x?(Lr(v,e._lastAsyncId),c(cn(e))):(w.onRest=s,c(yd(h,w,v,e)))}}})),v.paused&&await new Promise(w=>{v.resumeQueue.add(w)});const y=oa(e,await Promise.all(p));if(l&&y.finished&&!(n&&y.noop)){const w=wd(t,l,i);if(w)return _d(e,[w]),kd(e,w,!0)}return a&&R.batchedUpdates(()=>a(y,e,e.item)),y}function U0(e,t){const n=new b0;return n.key=e,t&&Ur(n,t),n}function V0(e,t,n){t.keys&&H(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function _d(e,t){H(t,n=>{V0(e.springs,n,r=>U0(r,e))})}function B0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const H0=["children"],sa=e=>{let{children:t}=e,n=B0(e,H0);const r=I.exports.useContext(Yi),i=n.pause||!!r.pause,o=n.immediate||!!r.immediate;n=Bi(()=>({pause:i,immediate:o}),[i,o]);const{Provider:l}=Yi;return I.exports.createElement(l,{value:n},t)},Yi=W0(sa,{});sa.Provider=Yi.Provider;sa.Consumer=Yi.Consumer;function W0(e,t){return Object.assign(e,I.exports.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}let Yu;(function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"})(Yu||(Yu={}));class Q0 extends la{constructor(t,n){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=t,this.calc=Cr(...n);const r=this._get(),i=Vl(r);ra(this,i.create(r))}advance(t){const n=this._get(),r=this.get();Ue(n,r)||(Le(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&qu(this._active)&&Go(this)}_get(){const t=S.arr(this.source)?this.source.map(ce):xe(ce(this.source));return this.calc(...t)}_start(){this.idle&&!qu(this._active)&&(this.idle=!1,H(go(this),t=>{t.done=!1}),Fe.skipAnimation?(R.batchedUpdates(()=>this.advance()),Go(this)):co.start(this))}_attach(){let t=1;H(xe(this.source),n=>{ge(n)&&Ur(n,this),Wl(n)&&(n.idle||this._active.add(n),t=Math.max(t,n.priority+1))}),this.priority=t,this._start()}_detach(){H(xe(this.source),t=>{ge(t)&&Or(t,this)}),this._active.clear(),Go(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=xe(this.source).reduce((n,r)=>Math.max(n,(Wl(r)?r.priority:0)+1),0))}}function Y0(e){return e.idle!==!1}function qu(e){return!e.size||Array.from(e).every(Y0)}function Go(e){e.idle||(e.idle=!0,H(go(e),t=>{t.done=!0}),Pr(e,{type:"idle",parent:e}))}Fe.assign({createStringInterpolator:ld,to:(e,t)=>new Q0(e,t)});function aa(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const q0=["style","children","scrollTop","scrollLeft"],Sd=/^--/;function G0(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!Sd.test(e)&&!(fr.hasOwnProperty(e)&&fr[e])?t+"px":(""+t).trim()}const Gu={};function X0(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",r=t,{style:i,children:o,scrollTop:l,scrollLeft:s}=r,a=aa(r,q0),u=Object.values(a),h=Object.keys(a).map(v=>n||e.hasAttribute(v)?v:Gu[v]||(Gu[v]=v.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));o!==void 0&&(e.textContent=o);for(let v in i)if(i.hasOwnProperty(v)){const p=G0(v,i[v]);Sd.test(v)?e.style.setProperty(v,p):e.style[v]=p}h.forEach((v,p)=>{e.setAttribute(v,u[p])}),l!==void 0&&(e.scrollTop=l),s!==void 0&&(e.scrollLeft=s)}let fr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const K0=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),Z0=["Webkit","Ms","Moz","O"];fr=Object.keys(fr).reduce((e,t)=>(Z0.forEach(n=>e[K0(n,t)]=e[t]),e),fr);const J0=["x","y","z"],em=/^(matrix|translate|scale|rotate|skew)/,tm=/^(translate)/,nm=/^(rotate|skew)/,Xo=(e,t)=>S.num(e)&&e!==0?e+t:e,yi=(e,t)=>S.arr(e)?e.every(n=>yi(n,t)):S.num(e)?e===t:parseFloat(e)===t;class rm extends yo{constructor(t){let{x:n,y:r,z:i}=t,o=aa(t,J0);const l=[],s=[];(n||r||i)&&(l.push([n||0,r||0,i||0]),s.push(a=>[`translate3d(${a.map(u=>Xo(u,"px")).join(",")})`,yi(a,0)])),qe(o,(a,u)=>{if(u==="transform")l.push([a||""]),s.push(h=>[h,h===""]);else if(em.test(u)){if(delete o[u],S.und(a))return;const h=tm.test(u)?"px":nm.test(u)?"deg":"";l.push(xe(a)),s.push(u==="rotate3d"?([v,p,x,y])=>[`rotate3d(${v},${p},${x},${Xo(y,h)})`,yi(y,0)]:v=>[`${u}(${v.map(p=>Xo(p,h)).join(",")})`,yi(v,u.startsWith("scale")?1:0)])}}),l.length&&(o.transform=new im(l,s)),super(o)}}class im extends rd{constructor(t,n){super(),this._value=null,this.inputs=t,this.transforms=n}get(){return this._value||(this._value=this._get())}_get(){let t="",n=!0;return H(this.inputs,(r,i)=>{const o=ce(r[0]),[l,s]=this.transforms[i](S.arr(o)?o:r.map(ce));t+=" "+l,n=n&&s}),n?"none":t}observerAdded(t){t==1&&H(this.inputs,n=>H(n,r=>ge(r)&&Ur(r,this)))}observerRemoved(t){t==0&&H(this.inputs,n=>H(n,r=>ge(r)&&Or(r,this)))}eventObserved(t){t.type=="change"&&(this._value=null),Pr(this,t)}}const om=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],lm=["scrollTop","scrollLeft"];Fe.assign({batchedUpdates:rs.exports.unstable_batchedUpdates,createStringInterpolator:ld,colors:Xh});const sm=P0(om,{applyAnimatedValues:X0,createAnimatedStyle:e=>new rm(e),getComponentProps:e=>aa(e,lm)}),Gl=sm.animated;function Nt(){return Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nt.apply(this,arguments)}function Ed(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const am=["horizontal","factor","offset","speed","sticky"],um=["pages","innerStyle","config","enabled","horizontal","children"],Xl=I.exports.createContext(null);function Ko(e){return e?"scrollLeft":"scrollTop"}function Kl(e,t){const n=r=>r.type?r.type===I.exports.Fragment:r===I.exports.Fragment;return I.exports.Children.map(e,r=>n(r)?Kl(r.props.children,t):t(r))}const Xu="translate3d(0px,0px,0px)",ii="translate(0px,0px)",Pe=I.exports.memo(I.exports.forwardRef((e,t)=>{let{horizontal:n,factor:r=1,offset:i=0,speed:o=0,sticky:l}=e,s=Ed(e,am);const a=I.exports.useContext(Xl),u=Bi(()=>{let y;if(l)y=(l.start||0)*a.space;else{const w=Math.floor(i)*a.space,c=a.space*i+w*o;y=-(a.current*o)+c}return new xd({space:l?a.space:a.space*r,translate:y})},[]),h=Bi(()=>({horizontal:n===void 0||l?a.horizontal:n,sticky:void 0,isSticky:!1,setPosition(y,w,c=!1){if(l)p(y,w);else{const f=Math.floor(i)*y,d=y*i+f*o;u.start({translate:-(w*o)+d,config:a.config,immediate:c})}},setHeight(y,w=!1){u.start({space:l?y:y*r,config:a.config,immediate:w})}}),[]);Tr(()=>{if(l){const y=l.start||0,w=l.end||y+1;h.sticky={start:y,end:w}}}),I.exports.useImperativeHandle(t,()=>h);const v=I.exports.useRef(),p=(y,w)=>{const c=h.sticky.start*y,f=h.sticky.end*y,d=w>=c&&w<=f;if(d===h.isSticky)return;h.isSticky=d;const m=v.current;m.style.position=d?"sticky":"absolute",u.set({translate:d?0:w<c?c:f})};Tr(()=>{if(a)return a.layers.add(h),a.update(),()=>{a.layers.delete(h),a.update()}});const x=u.springs.translate.to(h.horizontal?y=>`translate3d(${y}px,0,0)`:y=>`translate3d(0,${y}px,0)`);return I.exports.createElement(Gl.div,Nt({},s,{ref:v,style:Nt({position:"absolute",top:0,bottom:0,left:0,right:0,backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform",[h.horizontal?"height":"width"]:"100%",[h.horizontal?"width":"height"]:u.springs.space,WebkitTransform:x,msTransform:x,transform:x},s.style)}))})),fm=I.exports.memo(I.exports.forwardRef((e,t)=>{const[n,r]=I.exports.useState(!1),{pages:i,config:o=hd.slow,enabled:l=!0,horizontal:s=!1,children:a}=e,u=Ed(e,um),h=I.exports.useRef(),v=I.exports.useRef(),p=Bi(()=>({config:o,horizontal:s,busy:!1,space:0,current:0,offset:0,controller:new xd({scroll:0}),layers:new Set,container:h,content:v,update:()=>x(),scrollTo:f=>y(f),stop:()=>p.controller.stop()}),[]);I.exports.useEffect(()=>{p.config=o},[o]),I.exports.useImperativeHandle(t,()=>p);const x=()=>{const f=h.current;if(!f)return;const d=s?"clientWidth":"clientHeight";p.space=f[d];const m=Ko(s);l?p.current=f[m]:f[m]=p.current=p.offset*p.space;const g=v.current;if(g){const P=s?"width":"height";g.style[P]=`${p.space*i}px`}p.layers.forEach(P=>{P.setHeight(p.space,!0),P.setPosition(p.space,p.current,!0)})},y=f=>{const d=h.current,m=Ko(s);p.offset=f,p.controller.set({scroll:p.current}),p.controller.stop().start({scroll:f*p.space,config:o,onChange({value:{scroll:g}}){d[m]=g}})},w=f=>{p.busy||(p.busy=!0,p.current=f.target[Ko(s)],R.onStart(()=>{p.layers.forEach(d=>d.setPosition(p.space,p.current)),p.busy=!1}))};I.exports.useEffect(()=>p.update()),Tr(()=>{r(!0);const f=()=>{const d=()=>p.update();R.onFrame(d),setTimeout(d,150)};return window.addEventListener("resize",f,!1),()=>window.removeEventListener("resize",f,!1)});const c=l?{overflowY:s?"hidden":"scroll",overflowX:s?"scroll":"hidden"}:{overflowY:"hidden",overflowX:"hidden"};return I.exports.createElement(Gl.div,Nt({},u,{ref:h,onScroll:w,onWheel:l?p.stop:void 0,onTouchStart:l?p.stop:void 0,style:Nt({position:"absolute",width:"100%",height:"100%"},c,{WebkitOverflowScrolling:"touch",WebkitTransform:ii,msTransform:ii,transform:Xu},u.style)}),n&&I.exports.createElement(I.exports.Fragment,null,I.exports.createElement(Gl.div,{ref:v,style:Nt({overflow:"hidden",position:"absolute",[s?"height":"width"]:"100%",[s?"width":"height"]:p.space*i,WebkitTransform:ii,msTransform:ii,transform:Xu},e.innerStyle)},I.exports.createElement(Xl.Provider,{value:p},Kl(a,f=>!f.props.sticky&&f))),I.exports.createElement(Xl.Provider,{value:p},Kl(a,f=>f.props.sticky&&f))))}));var cm="/Apologize_website/assets/nope.a494e446.mp3",dm="/Apologize_website/assets/yes.fa0a5d2d.mp3",pm="/Apologize_website/assets/pls.4d61845e.gif";const hm=()=>{const e=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Will You Go on a Date With Me?</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

      <link rel="icon" href="https://em-content.zobj.net/source/skype/289/red-heart_2764-fe0f.png" type="image/x-icon">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
        }

        body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: sans-serif;
          font-size: 1.2rem;
          background-color: #f2f2f2;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .gif-container {
          margin-bottom: 1rem;
        }

        .gif-container img {
          max-width: 100%;
          height: auto;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        button {
          padding: 1rem 2rem;
          margin: 0 1rem;
          border-radius: 5px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }

        button:hover {
          transform: scale(1.1);
        }

        #no-button {
          background-color: #e74c3c;
          color: #fff;
        }

        #no-button:hover {
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }

        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-5px, 0);
          }
          50% {
            transform: translate(0, -5px);
          }
          75% {
            transform: translate(5px, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        #yes-button {
          background-color: #2ecc71;
          color: #fff;
        }

        #confetti-canvas {
          width: 0%;
          height: 0%;
        }

        .octo-arm {
          animation: rotateTail 2s ease-in-out infinite;
        }

        @keyframes rotateTail {
          0% {
            transform: rotate(0);
          }
          20% {
            transform: rotate(20deg);
          }
          40% {
            transform: rotate(0deg);
          }
          60% {
            transform: rotate(-20deg);
          }
          80% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0);
          }
        }

        @media screen and (max-width: 768px) {
          header {
            font-size: 1.5rem;
          }
          main {
            padding: 1rem;
          }
          .gif-container {
            margin-bottom: 0.5rem;
          }
          button {
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            font-size: 1rem;

          }
        }
          
      </style>
    </head>
    <body>
      <header id="main">
        <h1>Will You Forgive Me, \u{1F9E0}\u{1F91D}? \u{1F97A}</h1>
      </header>
      <main>
        <canvas id="confetti-canvas"></canvas>
        <div class="gif-container">
          <img id="gif" src="${pm}" alt="Please">
        </div>
        <div class="button-container">
          <button id="no-button">No</button>
          <button id="yes-button">Yes</button>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"><\/script>
     <script>
  // Define the notify function to use the Firebase Realtime Database
  window.notifyYesClicked = () => {
    const databaseURL = 'https://myapp-e5581-default-rtdb.asia-southeast1.firebasedatabase.app/'; // Replace with your Firebase Realtime Database URL
    const ref = '/response'; // Replace with your Firebase Realtime Database path

    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;

    fetch(\`\${databaseURL}/\${ref}.json\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clicked: true,
        timestamp: timestamp,
        device: userAgent
      }),
    });
  };

  const nopeAudio = new Audio("${cm}");
  const yesAudio = new Audio("${dm}");

  const noButton = document.getElementById("no-button");
  noButton.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const adjustedX = Math.min(x, maxX);
    const adjustedY = Math.min(y, maxY);
    nopeAudio.play();
    noButton.style.position = "absolute";
    noButton.style.left = adjustedX + "px";
    noButton.style.top = adjustedY + "px";
  });

  const yesButton = document.getElementById("yes-button");
  yesButton.addEventListener("click", () => {
    yesAudio.play();
    const confettiElement = document.getElementById("confetti-canvas");
    const confettiSettings = {
      target: confettiElement,
      max: 200,
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      clock: 25,
      rotate: true,
      start_from_edge: true,
      respawn: true
    };

    yesButton.style.display = "none";
    noButton.style.display = "none";
    document.getElementById("gif").style.display = "none";
    document.getElementById("main").style.display = "none";

    confettiElement.style.position = "absolute";
    confettiElement.style.top = "0";
    confettiElement.style.left = "0";
    confettiElement.style.width = "100%";
    confettiElement.style.height = "100%";
    confettiElement.style.zIndex = "1000";

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    const p = document.createElement("p");
    p.innerText = "Thank You So Much! \u{1F389} \\nYour forgiveness means the world to me.\\nLet\u2019s reconnect and create new memories together. \u{1F496}\u{1F31F}";
    p.style.fontSize = "2rem";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    p.style.position = "absolute";
    p.style.top = "50%";
    p.style.left = "50%";
    p.style.transform = "translate(-50%, -50%)";
    p.style.zIndex = "1001"; // Ensure text is above other elements
    document.body.appendChild(p);

    // Create social media links with FontAwesome icons
    const linksContainer = document.createElement("div");
    linksContainer.style.position = "absolute";
    linksContainer.style.bottom = "10px";
    linksContainer.style.left = "50%";
    linksContainer.style.transform = "translateX(-50%)";
    linksContainer.style.textAlign = "center";
    linksContainer.style.fontSize = "2rem";
    linksContainer.style.zIndex = "1001"; // Ensure icons are above other elements

    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/m.rahmanziad";
    facebookLink.target = "_blank";
    facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
    facebookLink.style.margin = "0 15px";
    facebookLink.style.color = "#3b5998";

    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/rz_iad/";
    instagramLink.target = "_blank";
    instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
    instagramLink.style.margin = "0 15px";
    instagramLink.style.color = "#C13584";

    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/01521712644";
    whatsappLink.target = "_blank";
    whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappLink.style.margin = "0 15px";
    whatsappLink.style.color = "#25D366";

    const messengerLink = document.createElement("a");
    messengerLink.href = "https://m.me/m.rahmanziad"; // Replace with your Messenger link
    messengerLink.target = "_blank";
    messengerLink.innerHTML = '<i class="fab fa-facebook-messenger"></i>';
    messengerLink.style.margin = "0 15px";
    messengerLink.style.color = '0099FF'



    linksContainer.appendChild(facebookLink);
    linksContainer.appendChild(instagramLink);
    linksContainer.appendChild(whatsappLink);
    linksContainer.appendChild(messengerLink);
    document.body.appendChild(linksContainer);

    // Notify the server
    window.notifyYesClicked();
  });
<\/script>



    </body>
    </html>
  `;return j("div",{className:"sorry-container",children:j("iframe",{srcDoc:e,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"sorry"})})},mm=()=>j("div",{className:"Slider-container",children:j("iframe",{srcDoc:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slick Carousel with Bokeh Effect</title>
  <!-- Slick Carousel CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

    body {
      overflow: hidden;
      background: #a2cffe;
    }

    .wrapper {
      width: 100%;
      padding-top: 20px;
      text-align: center;
      position: relative;
      z-index: 1; /* Ensure wrapper is above bokeh effect */
    }

    h1, h2 {
      color: #333333;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }

    .carousel {
      width: 60%; /* Adjusted width for smaller slider */
      margin: 0 auto;
    }

    .slick-slide {
      margin: 10px;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Smooth transitions */
    }

    .slick-slide img {
      width: 100%;
      border: 2px solid #fff;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Smooth transitions for images */
    }

    /* Center slide larger and zoomed */
    .slick-center img {
      transform: scale(1.1); /* Slightly smaller scale */
      z-index: 1; /* Ensure center slide is above others */
    }

    /* Side slides smaller and reduced opacity */
    .slick-slide:not(.slick-center) img {
      transform: scale(0.7); /* Smaller scale */
      opacity: 0.5; /* Reduced opacity */
    }

    /* Hide slick dots */
    .slick-dots {
      display: none;
    }

    .bokeh {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0; /* Ensure bokeh effect is behind carousel */
    }

    .bokeh div {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      animation: move 20s linear infinite;
    }

    @keyframes move {
      from {
        transform: translateY(0) scale(1);
      }
      to {
        transform: translateY(-1000px) scale(0.5);
      }
    }
  </style>
</head>
<body>
  <div class="bokeh">
    <!-- Bokeh circles will be generated here by JavaScript -->
  </div>
  <div class="wrapper">
    <h1>Memories that Matter</h1>
    <h2>Reflecting on the Best Moments</h2>
    <p style="color: #333333; font-size: 1.2em; margin: 0 auto; width: 80%; padding-bottom:50px;">
      Every moment we've shared has been a treasure. I can't bear to lose such a wonderful friend and our priceless friendship..
    </p>
    <div class="carousel">
      <div><img src="https://i.ibb.co/Jdfdzj5/image.jpg" alt="Image 1"></div>
      <div><img src="https://i.ibb.co/w4y49zz/1.jpg" alt="Image 2"></div>
      <div><img src="https://i.ibb.co/JzcxTn3/2.jpg" alt="Image 3"></div>
      <div><img src="https://i.ibb.co/GJqRWT8/3.jpg" alt="Image 4"></div>
      <div><img src="https://i.ibb.co/GCzPRDv/4.jpg" alt="Image 5"></div>
      <div><img src="https://i.ibb.co/8gbnc2H/5.jpg" alt="Image 6"></div>
      <div><img src="https://i.ibb.co/X2VMTgp/6.jpg" alt="Image 7"></div>
      <div><img src="https://i.ibb.co/jgp7X17/7.jpg" alt="Image 8"></div>
      <div><img src="https://i.ibb.co/VHqZtHV/8.jpg" alt="Image 9"></div>
      <div><img src="https://i.ibb.co/hc0MBYD/9.jpg" alt="Image 10"></div>
      <div><img src="https://i.ibb.co/YRwynxZ/10.jpg" alt="Image 11"></div>
      <div><img src="https://i.ibb.co/G3f329n/11.jpg" alt="Image 12"></div>
    </div>
  </div>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>
  <!-- Slick Carousel JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"><\/script>
  <script>
    $(document).ready(function(){
      $('.carousel').slick({
        slidesToShow: 3,
        dots: false, // Dots are hidden via CSS
        centerMode: true,
        centerPadding: '10px', // Adjust centerPadding for a more compact look
        focusOnSelect: true,
        speed: 800, // Adjust the speed of the slide transition
        responsive: [
          {
            breakpoint: 768, // Example breakpoint
            settings: {
              slidesToShow: 1,
              centerPadding: '10px',
            }
          }
        ]
      });
    });

    // Bokeh Effect JavaScript
    const bokehContainer = document.querySelector('.bokeh');
    const bokehCount = 50; // Number of bokeh circles

    for (let i = 0; i < bokehCount; i++) {
      const bokeh = document.createElement('div');
      const size = Math.random() * 100 + 50; // Random size between 50px and 150px
      bokeh.style.width = size + 'px';
      bokeh.style.height = size + 'px';
      bokeh.style.left = Math.random() * 100 + '%';
      bokeh.style.top = Math.random() * 100 + '%';
      bokeh.style.animationDuration = (Math.random() * 20 + 10) + 's'; // Random duration between 10s and 30s
      bokehContainer.appendChild(bokeh);
    }
  <\/script>
</body>
</html>




    
    `,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"slider"})});var gm="/Apologize_website/assets/video.88d61c62.mp4";const ym=()=>{const e=`
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Reel Player</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .moving-gradient {
            background: linear-gradient(270deg, #b3e0ff, #99ccff, #66b3ff, #3399ff, #0099ff);
            background-size: 600% 600%;
            animation: gradientMove 12s ease infinite;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 2rem;
        }

        .container {
            position: relative;
            width: 100%;
            max-width: 400px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .heading {
            font-size: 2.5rem;
            margin-bottom: 20px;
            font-weight: bold;
            padding-top: 10px;
        }

        video {
            width: 90%;
            max-width: 400px;
            aspect-ratio: 9/16; /* Instagram Reels aspect ratio */
            border-radius: 10px;
            display: none;
        }

        .play-button {
            font-size: 18px;
            padding: 15px 30px;
            background: linear-gradient(135deg, #ff6f61, #ff9a9e);
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            text-transform: uppercase;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        .play-button:hover {
            background: linear-gradient(135deg, #ff9a9e, #ff6f61);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            transform: translateY(-4px);
        }

        .play-button:active {
            transform: translateY(2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <div class="moving-gradient">
        <div class="container">
            <div class="heading">And, one last thing...</div>
            <button class="play-button" id="playButton">What?</button>
            <video id="reel" playsinline>
                <source src="${gm}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <script>
        document.getElementById('playButton').addEventListener('click', function() {
            const video = document.getElementById('reel');
            video.style.display = 'block';
            video.play();
            this.style.display = 'none';
        });
    <\/script>
</body>
</html>

  `;return j("div",{className:"playerv-container",children:j("iframe",{srcDoc:e,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"Playerv"})})};var Cd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ku=ot.createContext&&ot.createContext(Cd),vm=["attr","size","title"];function wm(e,t){if(e==null)return{};var n=xm(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function xm(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}function Zu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zu(Object(n),!0).forEach(function(r){km(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function km(e,t,n){return t=_m(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _m(e){var t=Sm(e,"string");return typeof t=="symbol"?t:t+""}function Sm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pd(e){return e&&e.map((t,n)=>ot.createElement(t.tag,Gi({key:n},t.attr),Pd(t.child)))}function Od(e){return t=>ot.createElement(Em,qi({attr:Gi({},e.attr)},t),Pd(e.child))}function Em(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=wm(e,vm),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),ot.createElement("svg",qi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Gi(Gi({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ot.createElement("title",null,o),e.children)};return Ku!==void 0?ot.createElement(Ku.Consumer,null,n=>t(n)):t(Cd)}function Cm(e){return Od({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)}function Pm(e){return Od({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"},child:[]}]})(e)}function Om(){const[e,t]=I.exports.useState(!0),n=I.exports.useRef(new Audio(Ah)),r=()=>{t(!1);const i=n.current;i.loop=!1,i.play().catch(o=>console.log("Error playing audio:",o))};return I.exports.useEffect(()=>{const i=n.current,o=new IntersectionObserver(u=>{u.forEach(h=>{h.isIntersecting&&i.play().catch(v=>console.log("Error playing audio:",v))})},{threshold:.5}),l=new IntersectionObserver(u=>{u.forEach(h=>{h.isIntersecting&&i.play().catch(v=>console.log("Error playing audio:",v))})},{threshold:.5}),s=document.querySelector("#section-2"),a=document.querySelector("#section-3");return s&&o.observe(s),a&&l.observe(a),()=>{s&&o.disconnect(),a&&l.disconnect()}},[]),ei("div",{children:[e&&j("div",{style:Tm,children:ei("div",{style:zm,children:[j("h2",{style:Im,children:"Embark on a Heartfelt Journey"}),ei("p",{style:Lm,children:[j(Cm,{style:Ju})," Best experienced on desktop. ",j("br",{}),j(Pm,{style:Ju})," Use earphones for an immersive experience."]}),j("button",{onClick:r,style:Nm,children:"Let's Begin"})]})}),ei(fm,{pages:7,children:[j(Pe,{offset:0,speed:0,factor:1,style:{backgroundImage:`url(${jh})`,backgroundSize:"cover"},children:j("div",{className:"rain",children:Array.from({length:200}).map((i,o)=>j("div",{className:"rain-drop",style:{left:`${Math.random()*100}%`,"--i":o}},o))})}),j(Pe,{id:"section-2",offset:1,speed:0,factor:1,style:{backgroundImage:`url(${bh})`,backgroundSize:"cover"},children:j("div",{className:"rain",children:Array.from({length:200}).map((i,o)=>j("div",{className:"rain-drop",style:{left:`${Math.random()*100}%`,"--i":o}},o))})}),j(Pe,{id:"section-3",offset:2,speed:0,factor:1,style:{backgroundImage:`url(${Mh})`,backgroundSize:"cover"},children:j("div",{className:"rain",children:Array.from({length:200}).map((i,o)=>j("div",{className:"rain-drop",style:{left:`${Math.random()*100}%`,"--i":o}},o))})}),j(Pe,{offset:3,speed:0,factor:1,style:{backgroundColor:"black",color:"white",textAlign:"center"},children:j(Hh,{})}),j(Pe,{offset:4,speed:0,style:{backgroundColor:"white",color:"white",textAlign:"center"},children:j(mm,{})}),j(Pe,{offset:5,speed:0,style:{backgroundColor:"black",color:"white",textAlign:"center"},children:j(hm,{})}),j(Pe,{offset:6,speed:0,children:j(ym,{})}),j(Pe,{sticky:{start:.9,end:2.1},style:{textAlign:"center"},children:j("img",{src:Fh,alt:"Cat"})}),j(Pe,{offset:.2,speed:.15,children:j("h2",{children:"I'm SORRY, SANZIDA"})}),j(Pe,{offset:1.5,speed:2,children:j("h2",{children:"Please, forgive me!"})}),j(Pe,{offset:2.5,speed:1.5,children:j("h3",{children:"ACCEPT THIS HEARTFELT APOLOGY, PLEASE!!!"})})]})]})}const Tm={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.9)",padding:"30px",borderRadius:"12px",textAlign:"center",zIndex:1e3,boxShadow:"0px 0px 20px rgba(255, 255, 255, 0.2)"},zm={backgroundColor:"#282828",padding:"20px",borderRadius:"10px"},Im={fontSize:"24px",color:"#FFD700",marginBottom:"15px",textShadow:"2px 2px 5px rgba(0, 0, 0, 0.3)"},Lm={color:"#fff",fontSize:"16px",marginBottom:"20px",lineHeight:"1.5"},Nm={marginTop:"20px",padding:"12px 25px",fontSize:"18px",cursor:"pointer",backgroundColor:"#FFD700",color:"#000",border:"none",borderRadius:"5px",boxShadow:"0px 0px 10px rgba(255, 255, 255, 0.3)"},Ju={marginRight:"8px",verticalAlign:"middle"};Rh.render(j(ot.StrictMode,{children:j(Om,{})}),document.getElementById("root"));
