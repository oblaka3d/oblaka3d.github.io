(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Xf={exports:{}},bo={};var f_;function hS(){if(f_)return bo;f_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var h_;function dS(){return h_||(h_=1,Xf.exports=hS()),Xf.exports}var St=dS(),Wf={exports:{}},ne={};var d_;function pS(){if(d_)return ne;d_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function _(L,st,xt){this.props=L,this.context=st,this.refs=M,this.updater=xt||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,st){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,st,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=_.prototype;function N(L,st,xt){this.props=L,this.context=st,this.refs=M,this.updater=xt||b}var D=N.prototype=new B;D.constructor=N,C(D,_.prototype),D.isPureReactComponent=!0;var q=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function w(L,st,xt){var j=xt.ref;return{$$typeof:o,type:L,key:st,ref:j!==void 0?j:null,props:xt}}function R(L,st){return w(L.type,st,L.props)}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function it(L){var st={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return st[xt]})}var at=/\/+/g;function ut(L,st){return typeof L=="object"&&L!==null&&L.key!=null?it(""+L.key):st.toString(36)}function pt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(st){L.status==="pending"&&(L.status="fulfilled",L.value=st)},function(st){L.status==="pending"&&(L.status="rejected",L.reason=st)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,st,xt,j,ft){var Et=typeof L;(Et==="undefined"||Et==="boolean")&&(L=null);var vt=!1;if(L===null)vt=!0;else switch(Et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(L.$$typeof){case o:case e:vt=!0;break;case v:return vt=L._init,z(vt(L._payload),st,xt,j,ft)}}if(vt)return ft=ft(L),vt=j===""?"."+ut(L,0):j,q(ft)?(xt="",vt!=null&&(xt=vt.replace(at,"$&/")+"/"),z(ft,st,xt,"",function(ie){return ie})):ft!=null&&(I(ft)&&(ft=R(ft,xt+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(at,"$&/")+"/")+vt)),st.push(ft)),1;vt=0;var Ht=j===""?".":j+":";if(q(L))for(var Pt=0;Pt<L.length;Pt++)j=L[Pt],Et=Ht+ut(j,Pt),vt+=z(j,st,xt,Et,ft);else if(Pt=y(L),typeof Pt=="function")for(L=Pt.call(L),Pt=0;!(j=L.next()).done;)j=j.value,Et=Ht+ut(j,Pt++),vt+=z(j,st,xt,Et,ft);else if(Et==="object"){if(typeof L.then=="function")return z(pt(L),st,xt,j,ft);throw st=String(L),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return vt}function K(L,st,xt){if(L==null)return L;var j=[],ft=0;return z(L,j,"","",function(Et){return st.call(xt,Et,ft++)}),j}function Z(L){if(L._status===-1){var st=L._result;st=st(),st.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=st)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},bt={map:K,forEach:function(L,st,xt){K(L,function(){st.apply(this,arguments)},xt)},count:function(L){var st=0;return K(L,function(){st++}),st},toArray:function(L){return K(L,function(st){return st})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ne.Activity=x,ne.Children=bt,ne.Component=_,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=N,ne.StrictMode=s,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ne.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ne.cache=function(L){return function(){return L.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(L,st,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var j=C({},L.props),ft=L.key;if(st!=null)for(Et in st.key!==void 0&&(ft=""+st.key),st)!V.call(st,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&st.ref===void 0||(j[Et]=st[Et]);var Et=arguments.length-2;if(Et===1)j.children=xt;else if(1<Et){for(var vt=Array(Et),Ht=0;Ht<Et;Ht++)vt[Ht]=arguments[Ht+2];j.children=vt}return w(L.type,ft,j)},ne.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ne.createElement=function(L,st,xt){var j,ft={},Et=null;if(st!=null)for(j in st.key!==void 0&&(Et=""+st.key),st)V.call(st,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ft[j]=st[j]);var vt=arguments.length-2;if(vt===1)ft.children=xt;else if(1<vt){for(var Ht=Array(vt),Pt=0;Pt<vt;Pt++)Ht[Pt]=arguments[Pt+2];ft.children=Ht}if(L&&L.defaultProps)for(j in vt=L.defaultProps,vt)ft[j]===void 0&&(ft[j]=vt[j]);return w(L,Et,ft)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(L){return{$$typeof:d,render:L}},ne.isValidElement=I,ne.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Z}},ne.memo=function(L,st){return{$$typeof:p,type:L,compare:st===void 0?null:st}},ne.startTransition=function(L){var st=O.T,xt={};O.T=xt;try{var j=L(),ft=O.S;ft!==null&&ft(xt,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(H,yt)}catch(Et){yt(Et)}finally{st!==null&&xt.types!==null&&(st.types=xt.types),O.T=st}},ne.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ne.use=function(L){return O.H.use(L)},ne.useActionState=function(L,st,xt){return O.H.useActionState(L,st,xt)},ne.useCallback=function(L,st){return O.H.useCallback(L,st)},ne.useContext=function(L){return O.H.useContext(L)},ne.useDebugValue=function(){},ne.useDeferredValue=function(L,st){return O.H.useDeferredValue(L,st)},ne.useEffect=function(L,st){return O.H.useEffect(L,st)},ne.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ne.useId=function(){return O.H.useId()},ne.useImperativeHandle=function(L,st,xt){return O.H.useImperativeHandle(L,st,xt)},ne.useInsertionEffect=function(L,st){return O.H.useInsertionEffect(L,st)},ne.useLayoutEffect=function(L,st){return O.H.useLayoutEffect(L,st)},ne.useMemo=function(L,st){return O.H.useMemo(L,st)},ne.useOptimistic=function(L,st){return O.H.useOptimistic(L,st)},ne.useReducer=function(L,st,xt){return O.H.useReducer(L,st,xt)},ne.useRef=function(L){return O.H.useRef(L)},ne.useState=function(L){return O.H.useState(L)},ne.useSyncExternalStore=function(L,st,xt){return O.H.useSyncExternalStore(L,st,xt)},ne.useTransition=function(){return O.H.useTransition()},ne.version="19.2.4",ne}var p_;function xd(){return p_||(p_=1,Wf.exports=pS()),Wf.exports}var Nn=xd(),qf={exports:{}},Ao={},Yf={exports:{}},jf={};var m_;function mS(){return m_||(m_=1,(function(o){function e(z,K){var Z=z.length;z.push(K);t:for(;0<Z;){var yt=Z-1>>>1,bt=z[yt];if(0<l(bt,K))z[yt]=K,z[Z]=bt,Z=yt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Z=z.pop();if(Z!==K){z[0]=Z;t:for(var yt=0,bt=z.length,L=bt>>>1;yt<L;){var st=2*(yt+1)-1,xt=z[st],j=st+1,ft=z[j];if(0>l(xt,Z))j<bt&&0>l(ft,xt)?(z[yt]=ft,z[j]=Z,yt=j):(z[yt]=xt,z[st]=Z,yt=st);else if(j<bt&&0>l(ft,Z))z[yt]=ft,z[j]=Z,yt=j;else break t}}return K}function l(z,K){var Z=z.sortIndex-K.sortIndex;return Z!==0?Z:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,S=3,y=!1,b=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function q(z){if(C=!1,D(z),!b)if(i(m)!==null)b=!0,H||(H=!0,it());else{var K=i(p);K!==null&&pt(q,K.startTime-z)}}var H=!1,O=-1,V=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<V)}function I(){if(M=!1,H){var z=o.unstable_now();w=z;var K=!0;try{t:{b=!1,C&&(C=!1,B(O),O=-1),y=!0;var Z=S;try{e:{for(D(z),x=i(m);x!==null&&!(x.expirationTime>z&&R());){var yt=x.callback;if(typeof yt=="function"){x.callback=null,S=x.priorityLevel;var bt=yt(x.expirationTime<=z);if(z=o.unstable_now(),typeof bt=="function"){x.callback=bt,D(z),K=!0;break e}x===i(m)&&s(m),D(z)}else s(m);x=i(m)}if(x!==null)K=!0;else{var L=i(p);L!==null&&pt(q,L.startTime-z),K=!1}}break t}finally{x=null,S=Z,y=!1}K=void 0}}finally{K?it():H=!1}}}var it;if(typeof N=="function")it=function(){N(I)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ut=at.port2;at.port1.onmessage=I,it=function(){ut.postMessage(null)}}else it=function(){_(I,0)};function pt(z,K){O=_(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Z=S;S=K;try{return z()}finally{S=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=S;S=z;try{return K()}finally{S=Z}},o.unstable_scheduleCallback=function(z,K,Z){var yt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,z){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=Z+bt,z={id:v++,callback:K,priorityLevel:z,startTime:Z,expirationTime:bt,sortIndex:-1},Z>yt?(z.sortIndex=Z,e(p,z),i(m)===null&&z===i(p)&&(C?(B(O),O=-1):C=!0,pt(q,Z-yt))):(z.sortIndex=bt,e(m,z),b||y||(b=!0,H||(H=!0,it()))),z},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(z){var K=S;return function(){var Z=S;S=K;try{return z.apply(this,arguments)}finally{S=Z}}}})(jf)),jf}var g_;function gS(){return g_||(g_=1,Yf.exports=mS()),Yf.exports}var Zf={exports:{}},An={};var __;function _S(){if(__)return An;__=1;var o=xd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},An.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.4",An}var v_;function vS(){if(v_)return Zf.exports;v_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Zf.exports=_S(),Zf.exports}var x_;function xS(){if(x_)return Ao;x_=1;var o=gS(),e=xd(),i=vS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,r=f;break}if(E===r){g=!0,r=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,r=c;break}if(E===r){g=!0,r=f,a=c;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case q:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var pt=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],bt=-1;function L(t){return{current:t}}function st(t){0>bt||(t.current=yt[bt],yt[bt]=null,bt--)}function xt(t,n){bt++,yt[bt]=t.current,t.current=n}var j=L(null),ft=L(null),Et=L(null),vt=L(null);function Ht(t,n){switch(xt(Et,n),xt(ft,t),xt(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Og(n),t=zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(j),xt(j,t)}function Pt(){st(j),st(ft),st(Et)}function ie(t){t.memoizedState!==null&&xt(vt,t);var n=j.current,a=zg(n,t.type);n!==a&&(xt(ft,t),xt(j,a))}function Ne(t){ft.current===t&&(st(j),st(ft)),vt.current===t&&(st(vt),yo._currentValue=Z)}var ue,We;function F(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",We=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+We}var Tn=!1;function ce(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var tt=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){tt=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var P=g.split(`
`),$=E.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===$.length)for(r=P.length-1,c=$.length-1;1<=r&&0<=c&&P[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==$[c]){var ct=`
`+P[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?F(a):""}function de(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return F("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=de(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,ht=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,At=o.log,It=o.unstable_setDisableYieldValue,qt=null,kt=null;function Ot(t){if(typeof At=="function"&&It(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(qt,t)}catch{}}var Qt=Math.clz32?Math.clz32:X,ae=Math.log,Oe=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(ae(t)/Oe|0)|0}var Rt=256,lt=262144,_t=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Ct(r):(g&=E,g!==0?c=Ct(g):a||(a=E&~t,a!==0&&(c=Ct(a))))):(E=r&~f,E!==0?c=Ct(E):g!==0?c=Ct(g):a||(a=r&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function on(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function mn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-Qt(a),gt=1<<ct;E[ct]=0,P[ct]=-1;var tt=$[ct];if(tt!==null)for($[ct]=null,ct=0;ct<tt.length;ct++){var ot=tt[ct];ot!==null&&(ot.lane&=-536870913)}a&=~gt}r!==0&&Lr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Lr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Qt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Nr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Qt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function bi(t,n){var a=n&-n;return a=(a&42)!==0?1:Wa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Wa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ts(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Or(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:a_(t.type))}function qa(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var pi=Math.random().toString(36).slice(2),Ze="__reactFiber$"+pi,gn="__reactProps$"+pi,Pi="__reactContainer$"+pi,zr="__reactEvents$"+pi,Bc="__reactListeners$"+pi,Ic="__reactHandles$"+pi,Go="__reactResources$"+pi,Ya="__reactMarker$"+pi;function Pr(t){delete t[Ze],delete t[gn],delete t[zr],delete t[Bc],delete t[Ic]}function A(t){var n=t[Ze];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Pi]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[Ze])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[Ze]||t[Pi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function rt(t){var n=t[Go];return n||(n=t[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[Ya]=!0}var Tt=new Set,Ut={};function Nt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Ut[t]=n,t=0;t<n.length;t++)Tt.add(n[t])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Yt={};function _e(t){return De.call(Yt,t)?!0:De.call(te,t)?!1:$t.test(t)?Yt[t]=!0:(te[t]=!0,!1)}function ve(t,n,a){if(_e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ve(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Te(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ln(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=ln(t,n,""+t[n])}}function On(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Zt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function hn(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,r,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ee(n)):t.value!==""+ee(n)&&(t.value=""+ee(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?bn(t,g,ee(n)):a!=null?bn(t,g,ee(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ee(E):t.removeAttribute("name")}function Dn(t,n,a,r,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Me(t)}function bn(t,n,a){n==="number"&&mi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ke(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function _n(t,n,a){if(n!=null&&(n=""+ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ee(a):""}function bs(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(pt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ee(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Me(t)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ud(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||ov.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ld(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ud(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ud(t,f,n[f])}function Fc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return cv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Hc=null;function Gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var As=null,Rs=null;function Nd(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[gn]||null;if(!c)throw Error(s(90));ze(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&On(r)}break t;case"textarea":_n(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(t,!!a.multiple,n,!1)}}}var Vc=!1;function Od(t,n,a){if(Vc)return t(n,a);Vc=!0;try{var r=t(n);return r}finally{if(Vc=!1,(As!==null||Rs!==null)&&(wl(),As&&(n=As,t=Rs,Rs=As=null,Nd(n),t)))for(n=0;n<t.length;n++)Nd(t[n])}}function Br(t,n){var a=t.stateNode;if(a===null)return null;var r=a[gn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Ii)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{kc=!1}var fa=null,Xc=null,ko=null;function zd(){if(ko)return ko;var t,n=Xc,a=n.length,r,c="value"in fa?fa.value:fa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return ko=c.slice(t,1<r?1-r:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Pd(){return!1}function Pn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Pd,this.isPropagationStopped=Pd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Pn(ja),Fr=x({},ja,{view:0,detail:0}),uv=Pn(Fr),Wc,qc,Hr,Yo=x({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(Wc=t.screenX-Hr.screenX,qc=t.screenY-Hr.screenY):qc=Wc=0,Hr=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),Bd=Pn(Yo),fv=x({},Yo,{dataTransfer:0}),hv=Pn(fv),dv=x({},Fr,{relatedTarget:0}),Yc=Pn(dv),pv=x({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),mv=Pn(pv),gv=x({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_v=Pn(gv),vv=x({},ja,{data:0}),Id=Pn(vv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=yv[t])?!!n[t]:!1}function jc(){return Mv}var Ev=x({},Fr,{key:function(t){if(t.key){var n=xv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tv=Pn(Ev),bv=x({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Pn(bv),Av=x({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Rv=Pn(Av),Cv=x({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=Pn(Cv),Dv=x({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=Pn(Dv),Lv=x({},ja,{newState:0,oldState:0}),Nv=Pn(Lv),Ov=[9,13,27,32],Zc=Ii&&"CompositionEvent"in window,Gr=null;Ii&&"documentMode"in document&&(Gr=document.documentMode);var zv=Ii&&"TextEvent"in window&&!Gr,Hd=Ii&&(!Zc||Gr&&8<Gr&&11>=Gr),Gd=" ",Vd=!1;function kd(t,n){switch(t){case"keyup":return Ov.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function Pv(t,n){switch(t){case"compositionend":return Xd(n);case"keypress":return n.which!==32?null:(Vd=!0,Gd);case"textInput":return t=n.data,t===Gd&&Vd?null:t;default:return null}}function Bv(t,n){if(Cs)return t==="compositionend"||!Zc&&kd(t,n)?(t=zd(),ko=Xc=fa=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hd&&n.locale!=="ko"?null:n.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Iv[t.type]:n==="textarea"}function qd(t,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Pl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Vr=null,kr=null;function Fv(t){Cg(t,0)}function jo(t){var n=nt(t);if(On(n))return t}function Yd(t,n){if(t==="change")return n}var jd=!1;if(Ii){var Kc;if(Ii){var Qc="oninput"in document;if(!Qc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Qc=typeof Zd.oninput=="function"}Kc=Qc}else Kc=!1;jd=Kc&&(!document.documentMode||9<document.documentMode)}function Kd(){Vr&&(Vr.detachEvent("onpropertychange",Qd),kr=Vr=null)}function Qd(t){if(t.propertyName==="value"&&jo(kr)){var n=[];qd(n,kr,t,Gc(t)),Od(Fv,n)}}function Hv(t,n,a){t==="focusin"?(Kd(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",Qd)):t==="focusout"&&Kd()}function Gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(kr)}function Vv(t,n){if(t==="click")return jo(n)}function kv(t,n){if(t==="input"||t==="change")return jo(n)}function Xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:Xv;function Xr(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,n){var a=Jd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jd(a)}}function tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=mi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=mi(t.document)}return n}function Jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Wv=Ii&&"documentMode"in document&&11>=document.documentMode,ws=null,$c=null,Wr=null,tu=!1;function np(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||ws==null||ws!==mi(r)||(r=ws,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Xr(Wr,r)||(Wr=r,r=Pl($c,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ws)))}function Za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ds={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},eu={},ip={};Ii&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ka(t){if(eu[t])return eu[t];if(!Ds[t])return t;var n=Ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return eu[t]=n[a];return t}var ap=Ka("animationend"),sp=Ka("animationiteration"),rp=Ka("animationstart"),qv=Ka("transitionrun"),Yv=Ka("transitionstart"),jv=Ka("transitioncancel"),op=Ka("transitionend"),lp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function gi(t,n){lp.set(t,n),Nt(n,[t])}var Zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Us=0,iu=0;function Ko(){for(var t=Us,n=iu=Us=0;n<t;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&cp(a,c,f)}}function Qo(t,n,a,r){ii[Us++]=t,ii[Us++]=n,ii[Us++]=a,ii[Us++]=r,iu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function au(t,n,a,r){return Qo(t,n,a,r),Jo(t)}function Qa(t,n){return Qo(t,null,null,n),Jo(t)}function cp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Qt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Jo(t){if(50<po)throw po=0,pf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ls={};function Zv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new Zv(t,n,a,r)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function up(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $o(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")su(t)&&(g=1);else if(typeof t=="string")g=tS(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Yn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return Ja(a.children,c,f,n);case M:g=8,c|=24;break;case _:return t=Yn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case q:return t=Yn(13,a,n,c),t.elementType=q,t.lanes=f,t;case H:return t=Yn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:g=10;break t;case B:g=9;break t;case D:g=11;break t;case O:g=14;break t;case V:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Ja(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function ru(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function fp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function ou(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},hp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var Ns=[],Os=0,tl=null,qr=0,si=[],ri=0,ha=null,Ai=1,Ri="";function Hi(t,n){Ns[Os++]=qr,Ns[Os++]=tl,tl=t,qr=n}function dp(t,n,a){si[ri++]=Ai,si[ri++]=Ri,si[ri++]=ha,ha=t;var r=Ai;t=Ri;var c=32-Qt(r)-1;r&=~(1<<c),a+=1;var f=32-Qt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ai=1<<32-Qt(n)+c|a<<c|r,Ri=f+t}else Ai=1<<f|a<<c|r,Ri=t}function lu(t){t.return!==null&&(Hi(t,1),dp(t,1,0))}function cu(t){for(;t===tl;)tl=Ns[--Os],Ns[Os]=null,qr=Ns[--Os],Ns[Os]=null;for(;t===ha;)ha=si[--ri],si[ri]=null,Ri=si[--ri],si[ri]=null,Ai=si[--ri],si[ri]=null}function pp(t,n){si[ri++]=Ai,si[ri++]=Ri,si[ri++]=ha,Ai=n.id,Ri=n.overflow,ha=t}var vn=null,ke=null,xe=!1,da=null,oi=!1,uu=Error(s(519));function pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yr(ai(n,t)),uu}function mp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ze]=t,n[gn]=r,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)he(go[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),bs(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Lg(n.textContent,a)?(r.popover!=null&&(he("beforetoggle",n),he("toggle",n)),r.onScroll!=null&&he("scroll",n),r.onScrollEnd!=null&&he("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||pa(t,!0)}function gp(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:vn=vn.return}}function zs(t){if(t!==vn)return!1;if(!xe)return gp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||wf(t.type,t.memoizedProps)),a=!a),a&&ke&&pa(t),gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Gg(t)}else n===27?(n=ke,Ca(t.type)?(t=Of,Of=null,ke=t):ke=n):ke=vn?ci(t.stateNode.nextSibling):null;return!0}function $a(){ke=vn=null,xe=!1}function fu(){var t=da;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),da=null),t}function Yr(t){da===null?da=[t]:da.push(t)}var hu=L(null),ts=null,Gi=null;function ma(t,n,a){xt(hu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=hu.current,st(hu)}function du(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function pu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),du(f.return,a,t),r||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),du(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ps(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=c.type;qn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===vt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&pu(n,t,a,r),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function es(t){ts=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xn(t){return _p(ts,t)}function nl(t,n){return ts===null&&es(t),_p(t,n)}function _p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var Kv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Qv=o.unstable_scheduleCallback,Jv=o.unstable_NormalPriority,en={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new Kv,data:new Map,refCount:0}}function jr(t){t.refCount--,t.refCount===0&&Qv(Jv,function(){t.controller.abort()})}var Zr=null,gu=0,Bs=0,Is=null;function $v(t,n){if(Zr===null){var a=Zr=[];gu=0,Bs=Sf(),Is={status:"pending",value:void 0,then:function(r){a.push(r)}}}return gu++,n.then(vp,vp),n}function vp(){if(--gu===0&&Zr!==null){Is!==null&&(Is.status="fulfilled");var t=Zr;Zr=null,Bs=0,Is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function tx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var xp=z.S;z.S=function(t,n){ng=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$v(t,n),xp!==null&&xp(t,n)};var ns=L(null);function _u(){var t=ns.current;return t!==null?t:Ge.pooledCache}function il(t,n){n===null?xt(ns,ns.current):xt(ns,n.pool)}function Sp(){var t=_u();return t===null?null:{parent:en._currentValue,pool:t}}var Fs=Error(s(460)),vu=Error(s(474)),al=Error(s(542)),sl={then:function(){}};function yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t}throw as=n,Fs}}function is(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(as=a,Fs):a}}var as=null;function Ep(){if(as===null)throw Error(s(459));var t=as;return as=null,t}function Tp(t){if(t===Fs||t===al)throw Error(s(483))}var Hs=null,Kr=0;function rl(t){var n=Kr;return Kr+=1,Hs===null&&(Hs=[]),Mp(Hs,t,n)}function Qr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ol(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bp(t){function n(Y,G){if(t){var J=Y.deletions;J===null?(Y.deletions=[G],Y.flags|=16):J.push(G)}}function a(Y,G){if(!t)return null;for(;G!==null;)n(Y,G),G=G.sibling;return null}function r(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function c(Y,G){return Y=Fi(Y,G),Y.index=0,Y.sibling=null,Y}function f(Y,G,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<G?(Y.flags|=67108866,G):J):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,G,J,dt){return G===null||G.tag!==6?(G=ru(J,Y.mode,dt),G.return=Y,G):(G=c(G,J),G.return=Y,G)}function P(Y,G,J,dt){var jt=J.type;return jt===C?ct(Y,G,J.props.children,dt,J.key):G!==null&&(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===V&&is(jt)===G.type)?(G=c(G,J.props),Qr(G,J),G.return=Y,G):(G=$o(J.type,J.key,J.props,null,Y.mode,dt),Qr(G,J),G.return=Y,G)}function $(Y,G,J,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=ou(J,Y.mode,dt),G.return=Y,G):(G=c(G,J.children||[]),G.return=Y,G)}function ct(Y,G,J,dt,jt){return G===null||G.tag!==7?(G=Ja(J,Y.mode,dt,jt),G.return=Y,G):(G=c(G,J),G.return=Y,G)}function gt(Y,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ru(""+G,Y.mode,J),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return J=$o(G.type,G.key,G.props,null,Y.mode,J),Qr(J,G),J.return=Y,J;case b:return G=ou(G,Y.mode,J),G.return=Y,G;case V:return G=is(G),gt(Y,G,J)}if(pt(G)||it(G))return G=Ja(G,Y.mode,J,null),G.return=Y,G;if(typeof G.then=="function")return gt(Y,rl(G),J);if(G.$$typeof===N)return gt(Y,nl(Y,G),J);ol(Y,G)}return null}function tt(Y,G,J,dt){var jt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return jt!==null?null:E(Y,G,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===jt?P(Y,G,J,dt):null;case b:return J.key===jt?$(Y,G,J,dt):null;case V:return J=is(J),tt(Y,G,J,dt)}if(pt(J)||it(J))return jt!==null?null:ct(Y,G,J,dt,null);if(typeof J.then=="function")return tt(Y,G,rl(J),dt);if(J.$$typeof===N)return tt(Y,G,nl(Y,J),dt);ol(Y,J)}return null}function ot(Y,G,J,dt,jt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(J)||null,E(G,Y,""+dt,jt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return Y=Y.get(dt.key===null?J:dt.key)||null,P(G,Y,dt,jt);case b:return Y=Y.get(dt.key===null?J:dt.key)||null,$(G,Y,dt,jt);case V:return dt=is(dt),ot(Y,G,J,dt,jt)}if(pt(dt)||it(dt))return Y=Y.get(J)||null,ct(G,Y,dt,jt,null);if(typeof dt.then=="function")return ot(Y,G,J,rl(dt),jt);if(dt.$$typeof===N)return ot(Y,G,J,nl(G,dt),jt);ol(G,dt)}return null}function Ft(Y,G,J,dt){for(var jt=null,be=null,Gt=G,re=G=0,ge=null;Gt!==null&&re<J.length;re++){Gt.index>re?(ge=Gt,Gt=null):ge=Gt.sibling;var Ae=tt(Y,Gt,J[re],dt);if(Ae===null){Gt===null&&(Gt=ge);break}t&&Gt&&Ae.alternate===null&&n(Y,Gt),G=f(Ae,G,re),be===null?jt=Ae:be.sibling=Ae,be=Ae,Gt=ge}if(re===J.length)return a(Y,Gt),xe&&Hi(Y,re),jt;if(Gt===null){for(;re<J.length;re++)Gt=gt(Y,J[re],dt),Gt!==null&&(G=f(Gt,G,re),be===null?jt=Gt:be.sibling=Gt,be=Gt);return xe&&Hi(Y,re),jt}for(Gt=r(Gt);re<J.length;re++)ge=ot(Gt,Y,re,J[re],dt),ge!==null&&(t&&ge.alternate!==null&&Gt.delete(ge.key===null?re:ge.key),G=f(ge,G,re),be===null?jt=ge:be.sibling=ge,be=ge);return t&&Gt.forEach(function(Na){return n(Y,Na)}),xe&&Hi(Y,re),jt}function Kt(Y,G,J,dt){if(J==null)throw Error(s(151));for(var jt=null,be=null,Gt=G,re=G=0,ge=null,Ae=J.next();Gt!==null&&!Ae.done;re++,Ae=J.next()){Gt.index>re?(ge=Gt,Gt=null):ge=Gt.sibling;var Na=tt(Y,Gt,Ae.value,dt);if(Na===null){Gt===null&&(Gt=ge);break}t&&Gt&&Na.alternate===null&&n(Y,Gt),G=f(Na,G,re),be===null?jt=Na:be.sibling=Na,be=Na,Gt=ge}if(Ae.done)return a(Y,Gt),xe&&Hi(Y,re),jt;if(Gt===null){for(;!Ae.done;re++,Ae=J.next())Ae=gt(Y,Ae.value,dt),Ae!==null&&(G=f(Ae,G,re),be===null?jt=Ae:be.sibling=Ae,be=Ae);return xe&&Hi(Y,re),jt}for(Gt=r(Gt);!Ae.done;re++,Ae=J.next())Ae=ot(Gt,Y,re,Ae.value,dt),Ae!==null&&(t&&Ae.alternate!==null&&Gt.delete(Ae.key===null?re:Ae.key),G=f(Ae,G,re),be===null?jt=Ae:be.sibling=Ae,be=Ae);return t&&Gt.forEach(function(fS){return n(Y,fS)}),xe&&Hi(Y,re),jt}function Ie(Y,G,J,dt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var jt=J.key;G!==null;){if(G.key===jt){if(jt=J.type,jt===C){if(G.tag===7){a(Y,G.sibling),dt=c(G,J.props.children),dt.return=Y,Y=dt;break t}}else if(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===V&&is(jt)===G.type){a(Y,G.sibling),dt=c(G,J.props),Qr(dt,J),dt.return=Y,Y=dt;break t}a(Y,G);break}else n(Y,G);G=G.sibling}J.type===C?(dt=Ja(J.props.children,Y.mode,dt,J.key),dt.return=Y,Y=dt):(dt=$o(J.type,J.key,J.props,null,Y.mode,dt),Qr(dt,J),dt.return=Y,Y=dt)}return g(Y);case b:t:{for(jt=J.key;G!==null;){if(G.key===jt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Y,G.sibling),dt=c(G,J.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,G);break}else n(Y,G);G=G.sibling}dt=ou(J,Y.mode,dt),dt.return=Y,Y=dt}return g(Y);case V:return J=is(J),Ie(Y,G,J,dt)}if(pt(J))return Ft(Y,G,J,dt);if(it(J)){if(jt=it(J),typeof jt!="function")throw Error(s(150));return J=jt.call(J),Kt(Y,G,J,dt)}if(typeof J.then=="function")return Ie(Y,G,rl(J),dt);if(J.$$typeof===N)return Ie(Y,G,nl(Y,J),dt);ol(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(Y,G.sibling),dt=c(G,J),dt.return=Y,Y=dt):(a(Y,G),dt=ru(J,Y.mode,dt),dt.return=Y,Y=dt),g(Y)):a(Y,G)}return function(Y,G,J,dt){try{Kr=0;var jt=Ie(Y,G,J,dt);return Hs=null,jt}catch(Gt){if(Gt===Fs||Gt===al)throw Gt;var be=Yn(29,Gt,null,Y.mode);return be.lanes=dt,be.return=Y,be}}}var ss=bp(!0),Ap=bp(!1),ga=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Jo(t),cp(t,null,a),n}return Qo(t,r,n,a),Jo(t)}function Jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}function yu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mu=!1;function $r(){if(Mu){var t=Is;if(t!==null)throw t}}function to(t,n,a,r){Mu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,$=P.next;P.next=null,g===null?f=$:g.next=$,g=P;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,E=ct.lastBaseUpdate,E!==g&&(E===null?ct.firstBaseUpdate=$:E.next=$,ct.lastBaseUpdate=P))}if(f!==null){var gt=c.baseState;g=0,ct=$=P=null,E=f;do{var tt=E.lane&-536870913,ot=tt!==E.lane;if(ot?(me&tt)===tt:(r&tt)===tt){tt!==0&&tt===Bs&&(Mu=!0),ct!==null&&(ct=ct.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,Kt=E;tt=n;var Ie=a;switch(Kt.tag){case 1:if(Ft=Kt.payload,typeof Ft=="function"){gt=Ft.call(Ie,gt,tt);break t}gt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Kt.payload,tt=typeof Ft=="function"?Ft.call(Ie,gt,tt):Ft,tt==null)break t;gt=x({},gt,tt);break t;case 2:ga=!0}}tt=E.callback,tt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ct===null?($=ct=ot,P=gt):ct=ct.next=ot,g|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ct===null&&(P=gt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ea|=g,t.lanes=g,t.memoizedState=gt}}function Rp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rp(a[t],n)}var Gs=L(null),ll=L(0);function wp(t,n){t=Qi,xt(ll,t),xt(Gs,n),Qi=t|n.baseLanes}function Eu(){xt(ll,Qi),xt(Gs,Gs.current)}function Tu(){Qi=ll.current,st(Gs),st(ll)}var jn=L(null),li=null;function xa(t){var n=t.alternate;xt($e,$e.current&1),xt(jn,t),li===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(li=t)}function bu(t){xt($e,$e.current),xt(jn,t),li===null&&(li=t)}function Dp(t){t.tag===22?(xt($e,$e.current),xt(jn,t),li===null&&(li=t)):Sa()}function Sa(){xt($e,$e.current),xt(jn,jn.current)}function Zn(t){st(jn),li===t&&(li=null),st($e)}var $e=L(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Lf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,se=null,Pe=null,nn=null,ul=!1,Vs=!1,rs=!1,fl=0,eo=0,ks=null,ex=0;function Qe(){throw Error(s(321))}function Au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Ru(t,n,a,r,c,f){return ki=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?dm:Vu,rs=!1,f=a(r,c),rs=!1,Vs&&(f=Lp(n,a,r,c)),Up(t),f}function Up(t){z.H=ao;var n=Pe!==null&&Pe.next!==null;if(ki=0,nn=Pe=se=null,ul=!1,eo=0,ks=null,n)throw Error(s(300));t===null||an||(t=t.dependencies,t!==null&&el(t)&&(an=!0))}function Lp(t,n,a,r){se=t;var c=0;do{if(Vs&&(ks=null),eo=0,Vs=!1,25<=c)throw Error(s(301));if(c+=1,nn=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=pm,f=n(a,r)}while(Vs);return f}function nx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(se.flags|=1024),n}function Cu(){var t=fl!==0;return fl=0,t}function wu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Du(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}ki=0,nn=Pe=se=null,Vs=!1,eo=fl=0,ks=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?se.memoizedState=nn=t:nn=nn.next=t,nn}function tn(){if(Pe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=nn===null?se.memoizedState:nn.next;if(n!==null)nn=n,Pe=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?se.memoizedState=nn=t:nn=nn.next=t}return nn}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=eo;return eo+=1,ks===null&&(ks=[]),t=Mp(ks,t,n),n=se,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?dm:Vu),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===N)return xn(t)}throw Error(s(438,String(t)))}function Uu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function pl(t){var n=tn();return Lu(n,Pe,t)}function Lu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,P=null,$=n,ct=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(me&gt)===gt:(ki&gt)===gt){var tt=$.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Bs&&(ct=!0);else if((ki&tt)===tt){$=$.next,tt===Bs&&(ct=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=gt,g=f):P=P.next=gt,se.lanes|=tt,Ea|=tt;gt=$.action,rs&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else tt={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=tt,g=f):P=P.next=tt,se.lanes|=gt,Ea|=gt;$=$.next}while($!==null&&$!==n);if(P===null?g=f:P.next=E,!qn(f,t.memoizedState)&&(an=!0,ct&&(a=Is,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Nu(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);qn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Np(t,n,a){var r=se,c=tn(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!qn((Pe||c).memoizedState,a);if(g&&(c.memoizedState=a,an=!0),c=c.queue,Pu(Pp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,Xs(9,{destroy:void 0},zp.bind(null,r,c,a,n),null),Ge===null)throw Error(s(349));f||(ki&127)!==0||Op(r,n,a)}return a}function Op(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=hl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function zp(t,n,a,r){n.value=a,n.getSnapshot=r,Bp(n)&&Ip(t)}function Pp(t,n,a){return a(function(){Bp(n)&&Ip(t)})}function Bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Ip(t){var n=Qa(t,2);n!==null&&Gn(n,t,2)}function Ou(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),rs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function Fp(t,n,a,r){return t.baseState=a,Lu(t,Pe,typeof r=="function"?r:Xi)}function ix(t,n,a,r,c){if(_l(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var E=a(c,r),P=z.S;P!==null&&P(g,E),Gp(t,n,E)}catch($){zu(t,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,r),Gp(t,n,f)}catch($){zu(t,n,$)}}function Gp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Vp(t,n,r)},function(r){return zu(t,n,r)}):Vp(t,n,a)}function Vp(t,n,a){n.status="fulfilled",n.value=a,kp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Hp(t,a)))}function zu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==r)}t.action=null}function kp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xp(t,n){return n}function Wp(t,n){if(xe){var a=Ge.formState;if(a!==null){t:{var r=se;if(xe){if(ke){e:{for(var c=ke,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=ci(c.nextSibling),r=c.data==="F!";break t}}pa(r)}r=!1}r&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:n},a.queue=r,a=um.bind(null,se,r),r.dispatch=a,r=Ou(!1),f=Gu.bind(null,se,!1,r.queue),r=Un(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=ix.bind(null,se,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function qp(t){var n=tn();return Yp(n,Pe,t)}function Yp(t,n,a){if(n=Lu(t,n,Xp)[0],t=pl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=no(n)}catch(g){throw g===Fs?al:g}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Xs(9,{destroy:void 0},ax.bind(null,c,a),null)),[r,f,t]}function ax(t,n){t.action=n}function jp(t){var n=tn(),a=Pe;if(a!==null)return Yp(n,a,t);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=se.updateQueue,n===null&&(n=hl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Zp(){return tn().memoizedState}function ml(t,n,a,r){var c=Un();se.flags|=t,c.memoizedState=Xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function gl(t,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&Au(r,Pe.memoizedState.deps)?c.memoizedState=Xs(n,f,a,r):(se.flags|=t,c.memoizedState=Xs(1|n,f,a,r))}function Kp(t,n){ml(8390656,8,t,n)}function Pu(t,n){gl(2048,8,t,n)}function sx(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=hl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Qp(t){var n=tn().memoizedState;return sx({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jp(t,n){return gl(4,2,t,n)}function $p(t,n){return gl(4,4,t,n)}function tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function em(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,tm.bind(null,n,t),a)}function Bu(){}function nm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Au(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function im(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Au(n,r[1]))return r[0];if(r=t(),rs){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Iu(t,n,a){return a===void 0||(ki&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ag(),se.lanes|=t,Ea|=t,a)}function am(t,n,a,r){return qn(a,n)?a:Gs.current!==null?(t=Iu(t,a,r),qn(t,n)||(an=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(me&261930)===0?(an=!0,t.memoizedState=a):(t=ag(),se.lanes|=t,Ea|=t,n)}function sm(t,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var g=z.T,E={};z.T=E,Gu(t,!1,n,a);try{var P=c(),$=z.S;if($!==null&&$(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=tx(P,r);io(t,n,ct,Jn(t))}else io(t,n,r,Jn(t))}catch(gt){io(t,n,{then:function(){},status:"rejected",reason:gt},Jn())}finally{K.p=f,g!==null&&E.types!==null&&(g.types=E.types),z.T=g}}function rx(){}function Fu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=rm(t).queue;sm(t,c,n,Z,a===null?rx:function(){return om(t),a(r)})}function rm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function om(t){var n=rm(t);n.next===null&&(n=t.alternate.memoizedState),io(t,n.next.queue,{},Jn())}function Hu(){return xn(yo)}function lm(){return tn().memoizedState}function cm(){return tn().memoizedState}function ox(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=_a(a);var r=va(n,t,a);r!==null&&(Gn(r,n,a),Jr(r,n,a)),n={cache:mu()},t.payload=n;return}n=n.return}}function lx(t,n,a){var r=Jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?fm(n,a):(a=au(t,n,a,r),a!==null&&(Gn(a,t,r),hm(a,n,r)))}function um(t,n,a){var r=Jn();io(t,n,a,r)}function io(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))fm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,g))return Qo(t,n,c,0),Ge===null&&Ko(),!1}catch{}if(a=au(t,n,c,r),a!==null)return Gn(a,t,r),hm(a,n,r),!0}return!1}function Gu(t,n,a,r){if(r={lane:2,revertLane:Sf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(s(479))}else n=au(t,a,r,2),n!==null&&Gn(n,t,2)}function _l(t){var n=t.alternate;return t===se||n!==null&&n===se}function fm(t,n){Vs=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}var ao={readContext:xn,use:dl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};ao.useEffectEvent=Qe;var dm={readContext:xn,use:dl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:Kp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var r=t();if(rs){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Un();if(a!==void 0){var c=a(n);if(rs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=lx.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=Ou(t);var n=t.queue,a=um.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(t,n){var a=Un();return Iu(a,t,n)},useTransition:function(){var t=Ou(!1);return t=sm.bind(null,se,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=se,c=Un();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(me&127)!==0||Op(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Kp(Pp.bind(null,r,f,t),[t]),r.flags|=2048,Xs(9,{destroy:void 0},zp.bind(null,r,f,a,n),null),a},useId:function(){var t=Un(),n=Ge.identifierPrefix;if(xe){var a=Ri,r=Ai;a=(r&~(1<<32-Qt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ex++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Hu,useFormState:Wp,useActionState:Wp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uu,useCacheRefresh:function(){return Un().memoizedState=ox.bind(null,se)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Vu={readContext:xn,use:dl,useCallback:nm,useContext:xn,useEffect:Pu,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:pl,useRef:Zp,useState:function(){return pl(Xi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=tn();return am(a,Pe.memoizedState,t,n)},useTransition:function(){var t=pl(Xi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Hu,useFormState:qp,useActionState:qp,useOptimistic:function(t,n){var a=tn();return Fp(a,Pe,t,n)},useMemoCache:Uu,useCacheRefresh:cm};Vu.useEffectEvent=Qp;var pm={readContext:xn,use:dl,useCallback:nm,useContext:xn,useEffect:Pu,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:Nu,useRef:Zp,useState:function(){return Nu(Xi)},useDebugValue:Bu,useDeferredValue:function(t,n){var a=tn();return Pe===null?Iu(a,t,n):am(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Nu(Xi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:Hu,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=tn();return Pe!==null?Fp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uu,useCacheRefresh:cm};pm.useEffectEvent=Qp;function ku(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Jn(),c=_a(r);c.payload=n,a!=null&&(c.callback=a),n=va(t,c,r),n!==null&&(Gn(n,t,r),Jr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Jn(),c=_a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(t,c,r),n!==null&&(Gn(n,t,r),Jr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=va(t,r,a),n!==null&&(Gn(n,t,a),Jr(n,t,a))}};function mm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,r)||!Xr(c,f):!0}function gm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Xu.enqueueReplaceState(n,n.state,null)}function os(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function _m(t){Zo(t)}function vm(t){console.error(t)}function xm(t){Zo(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Sm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Wu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function ym(t){return t=_a(t),t.tag=3,t}function Mm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Sm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Sm(n,a,r),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function cx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Dl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),_f(t,r,c)),!1;case 22:return a.flags|=65536,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),_f(t,r,c)),!1}throw Error(s(435,a.tag))}return _f(t,r,c),Dl(),!1}if(xe)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==uu&&(t=Error(s(422),{cause:r}),Yr(ai(t,a)))):(r!==uu&&(n=Error(s(423),{cause:r}),Yr(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ai(r,a),c=Wu(t.stateNode,r,c),yu(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),ho===null?ho=[f]:ho.push(f),Je!==4&&(Je=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Wu(a.stateNode,r,t),yu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ym(c),Mm(c,t,a,r),yu(a,c),!1}a=a.return}while(a!==null);return!1}var qu=Error(s(461)),an=!1;function Sn(t,n,a,r){n.child=t===null?Ap(n,null,a,r):ss(n,t.child,a,r)}function Em(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return es(n),r=Ru(t,n,a,g,f,c),E=Cu(),t!==null&&!an?(wu(t,n,c),Wi(t,n,c)):(xe&&E&&lu(n),n.flags|=1,Sn(t,n,r,c),n.child)}function Tm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(t,n,f,r,c)):(t=$o(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!tf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(g,r)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Fi(f,r),t.ref=n.ref,t.return=n,n.child=t}function bm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Xr(f,r)&&t.ref===n.ref)if(an=!1,n.pendingProps=r=f,tf(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return Yu(t,n,a,r,c)}function Am(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Rm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?wp(n,f):Eu(),Dp(n);else return r=n.lanes=536870912,Rm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(il(n,f.cachePool),wp(n,f),Sa(),n.memoizedState=null):(t!==null&&il(n,null),Eu(),Sa());return Sn(t,n,c,a),n.child}function so(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rm(t,n,a,r,c){var f=_u();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&il(n,null),Eu(),Dp(n),t!==null&&Ps(t,n,r,!0),n.childLanes=c,null}function xl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Cm(t,n,a){return ss(n,t.child,null,a),t=xl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function ux(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=xl(n,r),n.lanes=536870912,so(null,t);if(bu(n),(t=ke)?(t=Hg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,vn=n,ke=null)):t=null,t===null)throw pa(n);return n.lanes=536870912,null}return xl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(bu(n),c)if(n.flags&256)n.flags&=-257,n=Cm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Ps(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(r=Ge,r!==null&&(g=bi(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Qa(t,g),Gn(r,t,g),qu;Dl(),n=Cm(t,n,a)}else t=f.treeContext,ke=ci(g.nextSibling),vn=n,xe=!0,da=null,oi=!1,t!==null&&pp(n,t),n=xl(n,r),n.flags|=4096;return n}return t=Fi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Yu(t,n,a,r,c){return es(n),a=Ru(t,n,a,r,void 0,c),r=Cu(),t!==null&&!an?(wu(t,n,c),Wi(t,n,c)):(xe&&r&&lu(n),n.flags|=1,Sn(t,n,a,c),n.child)}function wm(t,n,a,r,c,f){return es(n),n.updateQueue=null,a=Lp(n,r,a,c),Up(t),r=Cu(),t!==null&&!an?(wu(t,n,f),Wi(t,n,f)):(xe&&r&&lu(n),n.flags|=1,Sn(t,n,a,f),n.child)}function Dm(t,n,a,r,c){if(es(n),n.stateNode===null){var f=Ls,g=a.contextType;typeof g=="object"&&g!==null&&(f=xn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},xu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?xn(g):Ls,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ku(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Xu.enqueueReplaceState(f,f.state,null),to(n,r,f,c),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=os(a,E);f.props=P;var $=f.context,ct=a.contextType;g=Ls,typeof ct=="object"&&ct!==null&&(g=xn(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==g)&&gm(n,f,r,g),ga=!1;var tt=n.memoizedState;f.state=tt,to(n,r,f,c),$r(),$=n.memoizedState,E||tt!==$||ga?(typeof gt=="function"&&(ku(n,a,gt,r),$=n.memoizedState),(P=ga||mm(n,a,P,r,tt,$,g))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=g,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Su(t,n),g=n.memoizedProps,ct=os(a,g),f.props=ct,gt=n.pendingProps,tt=f.context,$=a.contextType,P=Ls,typeof $=="object"&&$!==null&&(P=xn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||tt!==P)&&gm(n,f,r,P),ga=!1,tt=n.memoizedState,f.state=tt,to(n,r,f,c),$r();var ot=n.memoizedState;g!==gt||tt!==ot||ga||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof E=="function"&&(ku(n,a,E,r),ot=n.memoizedState),(ct=ga||mm(n,a,ct,r,tt,ot,P)||t!==null&&t.dependencies!==null&&el(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=P,r=ct):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Sl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ss(n,t.child,null,c),n.child=ss(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function Um(t,n,a,r){return $a(),n.flags|=256,Sn(t,n,a,r),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(t){return{baseLanes:t,cachePool:Sp()}}function Ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Lm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?xa(n):Sa(),(t=ke)?(t=Hg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,vn=n,ke=null)):t=null,t===null)throw pa(n);return Nf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Sa(),c=n.mode,E=yl({mode:"hidden",children:E},c),r=Ja(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Zu(a),r.childLanes=Ku(t,g,a),n.memoizedState=ju,so(null,r)):(xa(n),Qu(n,E))}var P=t.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=Ju(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),E=r.fallback,c=n.mode,r=yl({mode:"visible",children:r.children},c),E=Ja(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,ss(n,t.child,null,a),r=n.child,r.memoizedState=Zu(a),r.childLanes=Ku(t,g,a),n.memoizedState=ju,n=so(null,r));else if(xa(n),Nf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var $=g.dgst;g=$,r=Error(s(419)),r.stack="",r.digest=g,Yr({value:r,source:null,stack:null}),n=Ju(t,n,a)}else if(an||Ps(t,n,a,!1),g=(a&t.childLanes)!==0,an||g){if(g=Ge,g!==null&&(r=bi(g,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,Qa(t,r),Gn(g,t,r),qu;Lf(E)||Dl(),n=Ju(t,n,a)}else Lf(E)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,ke=ci(E.nextSibling),vn=n,xe=!0,da=null,oi=!1,t!==null&&pp(n,t),n=Qu(n,r.children),n.flags|=4096);return n}return c?(Sa(),E=r.fallback,c=n.mode,P=t.child,$=P.sibling,r=Fi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,$!==null?E=Fi($,E):(E=Ja(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,so(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Zu(a):(c=E.cachePool,c!==null?(P=en._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=Sp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Ku(t,g,a),n.memoizedState=ju,so(t.child,r)):(xa(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Qu(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Ju(t,n,a){return ss(n,t.child,null,a),t=Qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Nm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),du(t.return,n,a)}function $u(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Om(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=$e.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,xt($e,g),Sn(t,n,r,a),r=xe?qr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,a,n);else if(t.tag===19)Nm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),$u(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&cl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}$u(n,!0,a,null,f,r);break;case"together":$u(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ps(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function fx(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),ma(n,en,t.memoizedState.cache),$a();break;case 27:case 5:ie(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lm(t,n,a):(xa(n),t=Wi(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ps(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Om(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt($e,$e.current),r)break;return null;case 22:return n.lanes=0,Am(t,n,a,n.pendingProps);case 24:ma(n,en,t.memoizedState.cache)}return Wi(t,n,a)}function zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!tf(t,a)&&(n.flags&128)===0)return an=!1,fx(t,n,a);an=(t.flags&131072)!==0}else an=!1,xe&&(n.flags&1048576)!==0&&dp(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=is(n.elementType),n.type=t,typeof t=="function")su(t)?(r=os(t,r),n.tag=1,n=Dm(null,n,t,r,a)):(n.tag=0,n=Yu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Em(null,n,t,r,a);break t}else if(c===O){n.tag=14,n=Tm(null,n,t,r,a);break t}}throw n=ut(t)||t,Error(s(306,n,""))}}return n;case 0:return Yu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=os(r,n.pendingProps),Dm(t,n,r,c,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Su(t,n),to(n,r,null,a);var g=n.memoizedState;if(r=g.cache,ma(n,en,r),r!==f.cache&&pu(n,[en],a,!0),$r(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Um(t,n,r,a);break t}else if(r!==c){c=ai(Error(s(424)),n),Yr(c),n=Um(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ke=ci(t.firstChild),vn=n,xe=!0,da=null,oi=!0,a=Ap(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($a(),r===c){n=Wi(t,n,a);break t}Sn(t,n,r,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Bl(Et.current).createElement(a),r[Ze]=n,r[gn]=t,yn(r,a,t),k(r),n.stateNode=r):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ie(n),t===null&&xe&&(r=n.stateNode=kg(n.type,n.pendingProps,Et.current),vn=n,oi=!0,c=ke,Ca(n.type)?(Of=c,ke=ci(r.firstChild)):ke=c),Sn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=ke)&&(r=Gx(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,vn=n,ke=ci(r.firstChild),oi=!1,c=!0):c=!1),c||pa(n)),ie(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,wf(c,f)?r=null:g!==null&&wf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(t,n,nx,null,null,a),yo._currentValue=c),Sl(t,n),Sn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=ke)&&(a=Vx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,vn=n,ke=null,t=!0):t=!1),t||pa(n)),null;case 13:return Lm(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ss(n,null,r,a):Sn(t,n,r,a),n.child;case 11:return Em(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ma(n,n.type,r.value),Sn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,es(n),c=xn(c),r=r(c),n.flags|=1,Sn(t,n,r,a),n.child;case 14:return Tm(t,n,n.type,n.pendingProps,a);case 15:return bm(t,n,n.type,n.pendingProps,a);case 19:return Om(t,n,a);case 31:return ux(t,n,a);case 22:return Am(t,n,a,n.pendingProps);case 24:return es(n),r=xn(en),t===null?(c=_u(),c===null&&(c=Ge,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},xu(n),ma(n,en,c)):((t.lanes&a)!==0&&(Su(t,n),to(n,null,null,a),$r()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,en,r)):(r=f.cache,ma(n,en,r),r!==c.cache&&pu(n,[en],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function qi(t){t.flags|=4}function ef(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(lg())t.flags|=8192;else throw as=sl,vu}else t.flags&=-16777217}function Pm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n))if(lg())t.flags|=8192;else throw as=sl,vu}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?on():536870912,t.lanes|=n,js|=n)}function ro(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function hx(t,n,a){var r=n.pendingProps;switch(cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(en),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zs(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fu())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(Xe(n),Pm(n,f)):(Xe(n),ef(n,c,null,r,a))):f?f!==t.memoizedState?(qi(n),Xe(n),Pm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&qi(n),Xe(n),ef(n,c,t,r,a)),null;case 27:if(Ne(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=j.current,zs(n)?mp(n):(t=kg(c,r,a),n.stateNode=t,qi(n))}return Xe(n),null;case 5:if(Ne(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=j.current,zs(n))mp(n);else{var g=Bl(Et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[Ze]=n,f[gn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&qi(n)}}return Xe(n),ef(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=vn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ze]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||pa(n,!0)}else t=Bl(t).createTextNode(r),t[Ze]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ze]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ze]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Xe(n),null);case 4:return Pt(),t===null&&Tf(n.stateNode.containerInfo),Xe(n),null;case 10:return Vi(n.type),Xe(n),null;case 19:if(st($e),r=n.memoizedState,r===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ro(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,ro(r,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)up(a,t),a=a.sibling;return xt($e,$e.current&1|2),xe&&Hi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ht()>Rl&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304)}else{if(!c)if(t=cl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return Xe(n),null}else 2*ht()-r.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ht(),t.sibling=null,a=$e.current,xt($e,c?a&1|2:a&1),xe&&Hi(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return Zn(n),Tu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&st(ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(en),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function dx(t,n){switch(cu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(en),Pt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return st($e),null;case 4:return Pt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Tu(),t!==null&&st(ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(en),null;case 25:return null;default:return null}}function Bm(t,n){switch(cu(n),n.tag){case 3:Vi(en),Pt();break;case 26:case 27:case 5:Ne(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:st($e);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Tu(),t!==null&&st(ns);break;case 24:Vi(en)}}function oo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(E){Le(n,n.return,E)}}function ya(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var P=a,$=E;try{$()}catch(ct){Le(c,P,ct)}}}r=r.next}while(r!==f)}}catch(ct){Le(n,n.return,ct)}}function Im(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cp(n,a)}catch(r){Le(t,t.return,r)}}}function Fm(t,n,a){a.props=os(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Le(t,n,r)}}function lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Le(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function Hm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function nf(t,n,a){try{var r=t.stateNode;zx(r,t.type,a,n),r[gn]=n}catch(c){Le(t,t.return,c)}}function Gm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function af(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(r===27&&Ca(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(sf(t,n,a),t=t.sibling;t!==null;)sf(t,n,a),t=t.sibling}function El(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ca(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Vm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,r,a),n[Ze]=t,n[gn]=a}catch(f){Le(t,t.return,f)}}var Yi=!1,sn=!1,rf=!1,km=typeof WeakSet=="function"?WeakSet:Set,dn=null;function px(t,n){if(t=t.containerInfo,Rf=Xl,t=ep(t),Jc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,P=-1,$=0,ct=0,gt=t,tt=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(E=g+c),gt!==f||r!==0&&gt.nodeType!==3||(P=g+r),gt.nodeType===3&&(g+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)tt=gt,gt=ot;for(;;){if(gt===t)break e;if(tt===a&&++$===c&&(E=g),tt===f&&++ct===r&&(P=g),(ot=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=ot}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:t,selectionRange:a},Xl=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=os(a.type,c);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Le(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Uf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Uf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function Xm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),r&4&&oo(5,a);break;case 1:if(Zi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Le(a,a.return,g)}else{var c=os(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Le(a,a.return,g)}}r&64&&Im(a),r&512&&lo(a,a.return);break;case 3:if(Zi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(t,n)}catch(g){Le(a,a.return,g)}}break;case 27:n===null&&r&4&&Vm(a);case 26:case 5:Zi(t,a),n===null&&r&4&&Hm(a),r&512&&lo(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),r&4&&Ym(t,a);break;case 13:Zi(t,a),r&4&&jm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ex.bind(null,a),kx(t,a))));break;case 22:if(r=a.memoizedState!==null||Yi,!r){n=n!==null&&n.memoizedState!==null||sn,c=Yi;var f=sn;Yi=r,(sn=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),Yi=c,sn=f}break;case 30:break;default:Zi(t,a)}}function Wm(t){var n=t.alternate;n!==null&&(t.alternate=null,Wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Bn=!1;function ji(t,n,a){for(a=a.child;a!==null;)qm(t,n,a),a=a.sibling}function qm(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:sn||Ci(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ci(a,n);var r=Ye,c=Bn;Ca(a.type)&&(Ye=a.stateNode,Bn=!1),ji(t,n,a),vo(a.stateNode),Ye=r,Bn=c;break;case 5:sn||Ci(a,n);case 6:if(r=Ye,c=Bn,Ye=null,ji(t,n,a),Ye=r,Bn=c,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:Ye!==null&&(Bn?(t=Ye,Ig(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nr(t)):Ig(Ye,a.stateNode));break;case 4:r=Ye,c=Bn,Ye=a.stateNode.containerInfo,Bn=!0,ji(t,n,a),Ye=r,Bn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),sn||ya(4,a,n),ji(t,n,a);break;case 1:sn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Fm(a,n,r)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:sn=(r=sn)||a.memoizedState!==null,ji(t,n,a),sn=r;break;default:ji(t,n,a)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{nr(t)}catch(a){Le(n,n.return,a)}}}function jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nr(t)}catch(a){Le(n,n.return,a)}}function mx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new km),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new km),n;default:throw Error(s(435,t.tag))}}function Tl(t,n){var a=mx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Tx.bind(null,t,r);r.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ca(E.type)){Ye=E.stateNode,Bn=!1;break t}break;case 5:Ye=E.stateNode,Bn=!1;break t;case 3:case 4:Ye=E.stateNode.containerInfo,Bn=!0;break t}E=E.return}if(Ye===null)throw Error(s(160));qm(f,g,c),Ye=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zm(n,t),n=n.sibling}var _i=null;function Zm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Fn(t),r&4&&(ya(3,t,t.return),oo(3,t),ya(5,t,t.return));break;case 1:In(n,t),Fn(t),r&512&&(sn||a===null||Ci(a,a.return)),r&64&&Yi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=_i;if(In(n,t),Fn(t),r&512&&(sn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ya]||f[Ze]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,r,a),f[Ze]=t,k(f),r=f;break t;case"link":var g=Zg("link","href",c).get(r+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=Zg("meta","content",c).get(r+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ze]=t,k(f),r=f}t.stateNode=r}else Kg(c,t.type,t.stateNode);else t.stateNode=jg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Kg(c,t.type,t.stateNode):jg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Fn(t),r&512&&(sn||a===null||Ci(a,a.return)),a!==null&&r&4&&nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Fn(t),r&512&&(sn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{zn(c,"")}catch(Ft){Le(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,nf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(rf=!0);break;case 6:if(In(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(Hl=null,c=_i,_i=Il(n.containerInfo),In(n,t),_i=c,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}rf&&(rf=!1,Km(t));break;case 4:r=_i,_i=Il(t.stateNode.containerInfo),In(n,t),Fn(t),_i=r;break;case 12:In(n,t),Fn(t);break;case 31:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 13:In(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=ht()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Yi,ct=sn;if(Yi=$||c,sn=ct||P,In(n,t),sn=ct,Yi=$,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Yi||sn||ls(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=P.stateNode;var gt=P.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ft){Le(P,P.return,Ft)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(Ft){Le(P,P.return,Ft)}}}else if(n.tag===18){if(a===null){P=n;try{var ot=P.stateNode;c?Fg(ot,!0):Fg(P.stateNode,!1)}catch(Ft){Le(P,P.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Tl(t,a))));break;case 19:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Tl(t,r)));break;case 30:break;case 21:break;default:In(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Gm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=af(t);El(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(zn(g,""),a.flags&=-33);var E=af(t);El(t,E,g);break;case 3:case 4:var P=a.stateNode.containerInfo,$=af(t);sf(t,$,P);break;default:throw Error(s(161))}}catch(ct){Le(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xm(t,n.alternate,n),n=n.sibling}function ls(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),ls(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fm(n,n.return,a),ls(n);break;case 27:vo(n.stateNode);case 26:case 5:Ci(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),oo(4,f);break;case 1:if(Ki(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Le(r,r.return,$)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Rp(P[c],E)}catch($){Le(r,r.return,$)}}a&&g&64&&Im(f),lo(f,f.return);break;case 27:Vm(f);case 26:case 5:Ki(c,f,a),a&&r===null&&g&4&&Hm(f),lo(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&g&4&&Ym(c,f);break;case 13:Ki(c,f,a),a&&g&4&&jm(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),lo(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&jr(a))}function lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t))}function vi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qm(t,n,a,r),n=n.sibling}function Qm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,r),c&2048&&oo(9,n);break;case 1:vi(t,n,a,r);break;case 3:vi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t)));break;case 12:if(c&2048){vi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Le(n,n.return,P)}}else vi(t,n,a,r);break;case 31:vi(t,n,a,r);break;case 13:vi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,r):co(t,n):f._visibility&2?vi(t,n,a,r):(f._visibility|=2,Ws(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&of(g,n);break;case 24:vi(t,n,a,r),c&2048&&lf(n.alternate,n);break;default:vi(t,n,a,r)}}function Ws(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,P=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:Ws(f,g,E,P,c),oo(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?Ws(f,g,E,P,c):co(f,g):(ct._visibility|=2,Ws(f,g,E,P,c)),c&&$&2048&&of(g.alternate,g);break;case 24:Ws(f,g,E,P,c),c&&$&2048&&lf(g.alternate,g);break;default:Ws(f,g,E,P,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:co(a,r),c&2048&&of(r.alternate,r);break;case 24:co(a,r),c&2048&&lf(r.alternate,r);break;default:co(a,r)}n=n.sibling}}var uo=8192;function qs(t,n,a){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)Jm(t,n,a),t=t.sibling}function Jm(t,n,a){switch(t.tag){case 26:qs(t,n,a),t.flags&uo&&t.memoizedState!==null&&eS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:qs(t,n,a);break;case 3:case 4:var r=_i;_i=Il(t.stateNode.containerInfo),qs(t,n,a),_i=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=uo,uo=16777216,qs(t,n,a),uo=r):qs(t,n,a));break;default:qs(t,n,a)}}function $m(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];dn=r,eg(r,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tg(t),t=t.sibling}function tg(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):fo(t);break;default:fo(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];dn=r,eg(r,t)}$m(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function eg(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,dn=r;else t:for(a=t;dn!==null;){r=dn;var c=r.sibling,f=r.return;if(Wm(r),r===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}var gx={getCacheForType:function(t){var n=xn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return xn(en).controller.signal}},_x=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,fe=null,me=0,Ue=0,Kn=null,Ma=!1,Ys=!1,cf=!1,Qi=0,Je=0,Ea=0,cs=0,uf=0,Qn=0,js=0,ho=null,Hn=null,ff=!1,Al=0,ng=0,Rl=1/0,Cl=null,Ta=null,cn=0,ba=null,Zs=null,Ji=0,hf=0,df=null,ig=null,po=0,pf=null;function Jn(){return(we&2)!==0&&me!==0?me&-me:z.T!==null?Sf():Or()}function ag(){if(Qn===0)if((me&536870912)===0||xe){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Gn(t,n,a){(t===Ge&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(Ks(t,0),Aa(t,me,Qn,!1)),mn(t,a),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&(cs|=a),Je===4&&Aa(t,me,Qn,!1)),wi(t))}function sg(t,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Jt(t,n),c=r?Sx(t,n):gf(t,n,!0),f=r;do{if(c===0){Ys&&!r&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!vx(a)){c=gf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=ho;var P=E.current.memoizedState.isDehydrated;if(P&&(Ks(E,g).flags|=256),g=gf(E,g,!1),g!==2){if(cf&&!P){E.errorRecoveryDisabledLanes|=f,cs|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Ks(t,0),Aa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(r,n,Qn,!Ma);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Al+300-ht(),10<c)){if(Aa(r,n,Qn,!Ma),Dt(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=Pg(rg.bind(null,r,a,Hn,Cl,ff,n,Qn,cs,js,Ma,f,"Throttled",-0,0),c);break t}rg(r,a,Hn,Cl,ff,n,Qn,cs,js,Ma,f,null,-0,0)}}break}while(!0);wi(t)}function rg(t,n,a,r,c,f,g,E,P,$,ct,gt,tt,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Jm(n,f,gt);var Ft=(f&62914560)===f?Al-ht():(f&4194048)===f?ng-ht():0;if(Ft=nS(gt,Ft),Ft!==null){Ji=f,t.cancelPendingCommit=Ft(pg.bind(null,t,n,f,a,r,c,g,E,P,ct,gt,null,tt,ot)),Aa(t,f,g,!$);return}}pg(t,n,f,a,r,c,g,E,P)}function vx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,r){n&=~uf,n&=~cs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Qt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Lr(t,a,n)}function wl(){return(we&6)===0?(mo(0),!1):!0}function mf(){if(fe!==null){if(Ue===0)var t=fe.return;else t=fe,Gi=ts=null,Du(t),Hs=null,Kr=0,t=fe;for(;t!==null;)Bm(t.alternate,t),t=t.return;fe=null}}function Ks(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ix(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,mf(),Ge=t,fe=a=Fi(t.current,null),me=n,Ue=0,Kn=null,Ma=!1,Ys=Jt(t,n),cf=!1,js=Qn=uf=cs=Ea=Je=0,Hn=ho=null,ff=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Qt(r),f=1<<c;n|=t[c],r&=~f}return Qi=n,Ko(),a}function og(t,n){se=null,z.H=ao,n===Fs||n===al?(n=Ep(),Ue=3):n===vu?(n=Ep(),Ue=4):Ue=n===qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,fe===null&&(Je=1,vl(t,ai(n,t.current)))}function lg(){var t=jn.current;return t===null?!0:(me&4194048)===me?li===null:(me&62914560)===me||(me&536870912)!==0?t===li:!1}function cg(){var t=z.H;return z.H=ao,t===null?ao:t}function ug(){var t=z.A;return z.A=gx,t}function Dl(){Je=4,Ma||(me&4194048)!==me&&jn.current!==null||(Ys=!0),(Ea&134217727)===0&&(cs&134217727)===0||Ge===null||Aa(Ge,me,Qn,!1)}function gf(t,n,a){var r=we;we|=2;var c=cg(),f=ug();(Ge!==t||me!==n)&&(Cl=null,Ks(t,n)),n=!1;var g=Je;t:do try{if(Ue!==0&&fe!==null){var E=fe,P=Kn;switch(Ue){case 8:mf(),g=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var $=Ue;if(Ue=0,Kn=null,Qs(t,E,P,$),a&&Ys){g=0;break t}break;default:$=Ue,Ue=0,Kn=null,Qs(t,E,P,$)}}xx(),g=Je;break}catch(ct){og(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Gi=ts=null,we=r,z.H=c,z.A=f,fe===null&&(Ge=null,me=0,Ko()),g}function xx(){for(;fe!==null;)fg(fe)}function Sx(t,n){var a=we;we|=2;var r=cg(),c=ug();Ge!==t||me!==n?(Cl=null,Rl=ht()+500,Ks(t,n)):Ys=Jt(t,n);t:do try{if(Ue!==0&&fe!==null){n=fe;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,Qs(t,n,f,1);break;case 2:case 9:if(yp(f)){Ue=0,Kn=null,hg(n);break}n=function(){Ue!==2&&Ue!==9||Ge!==t||(Ue=7),wi(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:yp(f)?(Ue=0,Kn=null,hg(n)):(Ue=0,Kn=null,Qs(t,n,f,7));break;case 5:var g=null;switch(fe.tag){case 26:g=fe.memoizedState;case 5:case 27:var E=fe;if(g?Qg(g):E.stateNode.complete){Ue=0,Kn=null;var P=E.sibling;if(P!==null)fe=P;else{var $=E.return;$!==null?(fe=$,Ul($)):fe=null}break e}}Ue=0,Kn=null,Qs(t,n,f,5);break;case 6:Ue=0,Kn=null,Qs(t,n,f,6);break;case 8:mf(),Je=6;break t;default:throw Error(s(462))}}yx();break}catch(ct){og(t,ct)}while(!0);return Gi=ts=null,z.H=r,z.A=c,we=a,fe!==null?0:(Ge=null,me=0,Ko(),Je)}function yx(){for(;fe!==null&&!T();)fg(fe)}function fg(t){var n=zm(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Ul(t):fe=n}function hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=wm(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=wm(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:Du(n);default:Bm(a,n),n=fe=up(n,Qi),n=zm(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Ul(t):fe=n}function Qs(t,n,a,r){Gi=ts=null,Du(n),Hs=null,Kr=0;var c=n.return;try{if(cx(t,c,n,a,me)){Je=1,vl(t,ai(a,t.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;Je=1,vl(t,ai(a,t.current)),fe=null;return}n.flags&32768?(xe||r===1?t=!0:Ys||(me&536870912)!==0?t=!1:(Ma=t=!0,(r===2||r===9||r===3||r===6)&&(r=jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),dg(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){dg(n,Ma);return}t=n.return;var a=hx(n.alternate,n,Qi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);Je===0&&(Je=5)}function dg(t,n){do{var a=dx(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);Je=6,fe=null}function pg(t,n,a,r,c,f,g,E,P){t.cancelPendingCommit=null;do Ll();while(cn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=iu,di(t,a,f,g,E,P),t===Ge&&(fe=Ge=null,me=0),Zs=n,ba=t,Ji=a,hf=f,df=c,ig=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bx(wt,function(){return xg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=K.p,K.p=2,g=we,we|=4;try{px(t,n,a)}finally{we=g,K.p=c,z.T=r}}cn=1,mg(),gg(),_g()}}function mg(){if(cn===1){cn=0;var t=ba,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=we;we|=4;try{Zm(n,t);var f=Cf,g=ep(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&tp(E.ownerDocument.documentElement,E)){if(P!==null&&Jc(E)){var $=P.start,ct=P.end;if(ct===void 0&&(ct=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ct,E.value.length);else{var gt=E.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Ft=E.textContent.length,Kt=Math.min(P.start,Ft),Ie=P.end===void 0?Kt:Math.min(P.end,Ft);!ot.extend&&Kt>Ie&&(g=Ie,Ie=Kt,Kt=g);var Y=$d(E,Kt),G=$d(E,Ie);if(Y&&G&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),Kt>Ie?(ot.addRange(J),ot.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),ot.addRange(J))}}}}for(gt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var dt=gt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Xl=!!Rf,Cf=Rf=null}finally{we=c,K.p=r,z.T=a}}t.current=n,cn=2}}function gg(){if(cn===2){cn=0;var t=ba,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=we;we|=4;try{Xm(t,n.alternate,n)}finally{we=c,K.p=r,z.T=a}}cn=3}}function _g(){if(cn===4||cn===3){cn=0,et();var t=ba,n=Zs,a=Ji,r=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?cn=5:(cn=0,Zs=ba=null,vg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ta=null),Ts(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var E=r[g];f(E.value,{componentStack:E.stack})}}finally{z.T=n,K.p=c}}(Ji&3)!==0&&Ll(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===pf?po++:(po=0,pf=t):po=0,mo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jr(n)))}function Ll(){return mg(),gg(),_g(),xg()}function xg(){if(cn!==5)return!1;var t=ba,n=hf;hf=0;var a=Ts(Ji),r=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=df,df=null;var f=ba,g=Ji;if(cn=0,Zs=ba=null,Ji=0,(we&6)!==0)throw Error(s(331));var E=we;if(we|=4,tg(f.current),Qm(f,f.current,g,a),we=E,mo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(qt,f)}catch{}return!0}finally{K.p=c,z.T=r,vg(t,n)}}function Sg(t,n,a){n=ai(a,n),n=Wu(t.stateNode,n,2),t=va(t,n,2),t!==null&&(mn(t,2),wi(t))}function Le(t,n,a){if(t.tag===3)Sg(t,t,a);else for(;n!==null;){if(n.tag===3){Sg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))){t=ai(a,t),a=ym(2),r=va(n,a,2),r!==null&&(Mm(a,r,n,t),mn(r,2),wi(r));break}}n=n.return}}function _f(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(cf=!0,c.add(a),t=Mx.bind(null,t,n,a),n.then(t,t))}function Mx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(me&a)===a&&(Je===4||Je===3&&(me&62914560)===me&&300>ht()-Al?(we&2)===0&&Ks(t,0):uf|=a,js===me&&(js=0)),wi(t)}function yg(t,n){n===0&&(n=on()),t=Qa(t,n),t!==null&&(mn(t,n),wi(t))}function Ex(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(t,a)}function Tx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),yg(t,a)}function bx(t,n){return Xt(t,n)}var Nl=null,Js=null,vf=!1,Ol=!1,xf=!1,Ra=0;function wi(t){t!==Js&&t.next===null&&(Js===null?Nl=Js=t:Js=Js.next=t),Ol=!0,vf||(vf=!0,Rx())}function mo(t,n){if(!xf&&Ol){xf=!0;do for(var a=!1,r=Nl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(r,f))}else f=me,f=Dt(r,r===Ge?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Jt(r,f)||(a=!0,bg(r,f));r=r.next}while(a);xf=!1}}function Ax(){Mg()}function Mg(){Ol=vf=!1;var t=0;Ra!==0&&Bx()&&(t=Ra);for(var n=ht(),a=null,r=Nl;r!==null;){var c=r.next,f=Eg(r,n);f===0?(r.next=null,a===null?Nl=c:a.next=c,c===null&&(Js=a)):(a=r,(t!==0||(f&3)!==0)&&(Ol=!0)),r=c}cn!==0&&cn!==5||mo(t),Ra!==0&&(Ra=0)}function Eg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Qt(f),E=1<<g,P=c[g];P===-1?((E&a)===0||(E&r)!==0)&&(c[g]=qe(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ge,a=me,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),Ts(a)){case 2:case 8:a=Vt;break;case 32:a=wt;break;case 268435456:a=pe;break;default:a=wt}return r=Tg.bind(null,t),a=Xt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(cn!==0&&cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var r=me;return r=Dt(t,t===Ge?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(sg(t,r,n),Eg(t,ht()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function bg(t,n){if(Ll())return null;sg(t,n,!0)}function Rx(){Fx(function(){(we&6)!==0?Xt(mt,Ax):Mg()})}function Sf(){if(Ra===0){var t=Bs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ra=t}return Ra}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Cx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ag((c[gn]||null).action),g=r.submitter;g&&(n=(n=g[gn]||null)?Ag(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new qo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ra!==0){var P=g?Rg(c,g):new FormData(c);Fu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=g?Rg(c,g):new FormData(c),Fu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var yf=0;yf<nu.length;yf++){var Mf=nu[yf],wx=Mf.toLowerCase(),Dx=Mf[0].toUpperCase()+Mf.slice(1);gi(wx,"on"+Dx)}gi(ap,"onAnimationEnd"),gi(sp,"onAnimationIteration"),gi(rp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(qv,"onTransitionRun"),gi(Yv,"onTransitionStart"),gi(jv,"onTransitionCancel"),gi(op,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],P=E.instance,$=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ct){Zo(ct)}c.currentTarget=null,f=P}else for(g=0;g<r.length;g++){if(E=r[g],P=E.instance,$=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ct){Zo(ct)}c.currentTarget=null,f=P}}}}function he(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var r=t+"__bubble";a.has(r)||(wg(n,t,2,!1),a.add(r))}function Ef(t,n,a){var r=0;n&&(r|=4),wg(a,t,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[zl]){t[zl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(Ux.has(a)||Ef(a,!1,t),Ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Ef("selectionchange",!1,n))}}function wg(t,n,a,r){switch(a_(n)){case 2:var c=sS;break;case 8:c=rS;break;default:c=Ff}a=c.bind(null,n,a,t),c=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function bf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=r.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=A(E),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){r=f=g;continue t}E=E.parentNode}}r=r.return}Od(function(){var $=f,ct=Gc(a),gt=[];t:{var tt=lp.get(t);if(tt!==void 0){var ot=qo,Ft=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":ot=Tv;break;case"focusin":Ft="focus",ot=Yc;break;case"focusout":Ft="blur",ot=Yc;break;case"beforeblur":case"afterblur":ot=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Rv;break;case ap:case sp:case rp:ot=mv;break;case op:ot=wv;break;case"scroll":case"scrollend":ot=uv;break;case"wheel":ot=Uv;break;case"copy":case"cut":case"paste":ot=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Fd;break;case"toggle":case"beforetoggle":ot=Nv}var Kt=(n&4)!==0,Ie=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?tt!==null?tt+"Capture":null:tt;Kt=[];for(var G=$,J;G!==null;){var dt=G;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Y===null||(dt=Br(G,Y),dt!=null&&Kt.push(_o(G,dt,J))),Ie)break;G=G.return}0<Kt.length&&(tt=new ot(tt,Ft,null,a,ct),gt.push({event:tt,listeners:Kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",tt&&a!==Hc&&(Ft=a.relatedTarget||a.fromElement)&&(A(Ft)||Ft[Pi]))break t;if((ot||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=$,Ft=Ft?A(Ft):null,Ft!==null&&(Ie=u(Ft),Kt=Ft.tag,Ft!==Ie||Kt!==5&&Kt!==27&&Kt!==6)&&(Ft=null)):(ot=null,Ft=$),ot!==Ft)){if(Kt=Bd,dt="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Fd,dt="onPointerLeave",Y="onPointerEnter",G="pointer"),Ie=ot==null?tt:nt(ot),J=Ft==null?tt:nt(Ft),tt=new Kt(dt,G+"leave",ot,a,ct),tt.target=Ie,tt.relatedTarget=J,dt=null,A(ct)===$&&(Kt=new Kt(Y,G+"enter",Ft,a,ct),Kt.target=J,Kt.relatedTarget=Ie,dt=Kt),Ie=dt,ot&&Ft)e:{for(Kt=Lx,Y=ot,G=Ft,J=0,dt=Y;dt;dt=Kt(dt))J++;dt=0;for(var jt=G;jt;jt=Kt(jt))dt++;for(;0<J-dt;)Y=Kt(Y),J--;for(;0<dt-J;)G=Kt(G),dt--;for(;J--;){if(Y===G||G!==null&&Y===G.alternate){Kt=Y;break e}Y=Kt(Y),G=Kt(G)}Kt=null}else Kt=null;ot!==null&&Dg(gt,tt,ot,Kt,!1),Ft!==null&&Ie!==null&&Dg(gt,Ie,Ft,Kt,!0)}}t:{if(tt=$?nt($):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var be=Yd;else if(Wd(tt))if(jd)be=kv;else{be=Gv;var Gt=Hv}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?$&&Fc($.elementType)&&(be=Yd):be=Vv;if(be&&(be=be(t,$))){qd(gt,be,a,ct);break t}Gt&&Gt(t,tt,$),t==="focusout"&&$&&tt.type==="number"&&$.memoizedProps.value!=null&&bn(tt,"number",tt.value)}switch(Gt=$?nt($):window,t){case"focusin":(Wd(Gt)||Gt.contentEditable==="true")&&(ws=Gt,$c=$,Wr=null);break;case"focusout":Wr=$c=ws=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,np(gt,a,ct);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":np(gt,a,ct)}var re;if(Zc)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Cs?kd(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Hd&&a.locale!=="ko"&&(Cs||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Cs&&(re=zd()):(fa=ct,Xc="value"in fa?fa.value:fa.textContent,Cs=!0)),Gt=Pl($,ge),0<Gt.length&&(ge=new Id(ge,t,null,a,ct),gt.push({event:ge,listeners:Gt}),re?ge.data=re:(re=Xd(a),re!==null&&(ge.data=re)))),(re=zv?Pv(t,a):Bv(t,a))&&(ge=Pl($,"onBeforeInput"),0<ge.length&&(Gt=new Id("onBeforeInput","beforeinput",null,a,ct),gt.push({event:Gt,listeners:ge}),Gt.data=re)),Cx(gt,t,$,a,ct)}Cg(gt,n)})}function _o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Br(t,a),c!=null&&r.unshift(_o(t,c,f)),c=Br(t,n),c!=null&&r.push(_o(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Lx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dg(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var E=a,P=E.alternate,$=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||$===null||(P=$,c?($=Br(a,f),$!=null&&g.unshift(_o(a,$,P))):c||($=Br(a,f),$!=null&&g.push(_o(a,$,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Nx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(Nx,`
`).replace(Ox,"")}function Lg(t,n){return n=Ug(n),Ug(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||zn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&zn(t,""+r);break;case"className":Ve(t,"class",r);break;case"tabIndex":Ve(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(t,a,r);break;case"style":Ld(t,r,f);break;case"data":if(n!=="object"){Ve(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Vo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Vo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Bi);break;case"onScroll":r!=null&&he("scroll",t);break;case"onScrollEnd":r!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":he("beforetoggle",t),he("toggle",t),ve(t,"popover",r);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=lv.get(a)||a,ve(t,a,r))}}function Af(t,n,a,r,c,f){switch(a){case"style":Ld(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?zn(t,r):(typeof r=="number"||typeof r=="bigint")&&zn(t,""+r);break;case"onScroll":r!=null&&he("scroll",t);break;case"onScrollEnd":r!=null&&he("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ve(t,a,r)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,g,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=g=c=null,P=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":g=ct;break;case"checked":P=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Be(t,n,r,ct,a,null)}}Dn(t,f,E,P,$,g,c,!1);return;case"select":he("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Be(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Ke(t,!!r,n,!1):a!=null&&Ke(t,!!r,a,!0);return;case"textarea":he("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(t,n,g,E,a,null)}bs(t,r,c,f);return;case"option":for(P in a)a.hasOwnProperty(P)&&(r=a[P],r!=null)&&(P==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,P,r,a,null));return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(r=0;r<go.length;r++)he(go[r],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,$,r,a,null)}return;default:if(Fc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Af(t,n,ct,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Be(t,n,E,r,a,null))}function zx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,P=null,$=null,ct=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=gt;default:r.hasOwnProperty(ot)||Be(t,n,ot,null,r,gt)}}for(var tt in r){var ot=r[tt];if(gt=a[tt],r.hasOwnProperty(tt)&&(ot!=null||gt!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":ct=ot;break;case"value":g=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==gt&&Be(t,n,tt,ot,r,gt)}}ze(t,g,E,P,$,ct,f,c);return;case"select":ot=g=E=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ot=P;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==P&&Be(t,n,c,f,r,P)}n=E,a=g,r=ot,tt!=null?Ke(t,!!a,tt,!1):!!r!=!!a&&(n!=null?Ke(t,!!a,n,!0):Ke(t,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(t,n,E,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,g,c,r,f)}_n(t,tt,ot);return;case"option":for(var Ft in a)tt=a[Ft],a.hasOwnProperty(Ft)&&tt!=null&&!r.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Be(t,n,Ft,null,r,tt));for(P in r)tt=r[P],ot=a[P],r.hasOwnProperty(P)&&tt!==ot&&(tt!=null||ot!=null)&&(P==="selected"?t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Be(t,n,P,tt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)tt=a[Kt],a.hasOwnProperty(Kt)&&tt!=null&&!r.hasOwnProperty(Kt)&&Be(t,n,Kt,null,r,tt);for($ in r)if(tt=r[$],ot=a[$],r.hasOwnProperty($)&&tt!==ot&&(tt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Be(t,n,$,tt,r,ot)}return;default:if(Fc(n)){for(var Ie in a)tt=a[Ie],a.hasOwnProperty(Ie)&&tt!==void 0&&!r.hasOwnProperty(Ie)&&Af(t,n,Ie,void 0,r,tt);for(ct in r)tt=r[ct],ot=a[ct],!r.hasOwnProperty(ct)||tt===ot||tt===void 0&&ot===void 0||Af(t,n,ct,tt,r,ot);return}}for(var Y in a)tt=a[Y],a.hasOwnProperty(Y)&&tt!=null&&!r.hasOwnProperty(Y)&&Be(t,n,Y,null,r,tt);for(gt in r)tt=r[gt],ot=a[gt],!r.hasOwnProperty(gt)||tt===ot||tt==null&&ot==null||Be(t,n,gt,tt,r,ot)}function Ng(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Px(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&Ng(g)){for(g=0,E=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],$=P.startTime;if($>E)break;var ct=P.transferSize,gt=P.initiatorType;ct&&Ng(gt)&&(P=P.responseEnd,g+=ct*(P<E?1:(E-$)/(P-$)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rf=null,Cf=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Bx(){var t=window.event;return t&&t.type==="popstate"?t===Df?!1:(Df=t,!0):(Df=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(Hx)}:Pg;function Hx(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function Ig(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),nr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Ya]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&vo(t.ownerDocument.body);a=c}while(a);nr(n)}function Fg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Uf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Gx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function Vx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Lf(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Of=null;function Gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function kg(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pr(t)}var ui=new Map,Xg=new Set;function Il(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=K.d;K.d={f:Xx,r:Wx,D:qx,C:Yx,L:jx,m:Zx,X:Qx,S:Kx,M:Jx};function Xx(){var t=$i.f(),n=wl();return t||n}function Wx(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?om(n):$i.r(t)}var $s=typeof document>"u"?null:document;function Wg(t,n,a){var r=$s;if(r&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xg.has(c)||(Xg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),yn(n,"link",t),k(n),r.head.appendChild(n)))}}function qx(t){$i.D(t),Wg("dns-prefetch",t,null)}function Yx(t,n){$i.C(t,n),Wg("preconnect",t,n)}function jx(t,n,a){$i.L(t,n,a);var r=$s;if(r&&t&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(t)+'"]';var f=c;switch(n){case"style":f=tr(t);break;case"script":f=er(t)}ui.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),yn(n,"link",t),k(n),r.head.appendChild(n)))}}function Zx(t,n){$i.m(t,n);var a=$s;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=er(t)}if(!ui.has(f)&&(t=x({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),yn(r,"link",t),k(r),a.head.appendChild(r)}}}function Kx(t,n,a){$i.S(t,n,a);var r=$s;if(r&&t){var c=rt(r).hoistableStyles,f=tr(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(xo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&zf(t,a);var P=g=r.createElement("link");k(P),yn(P,"link",t),P._p=new Promise(function($,ct){P.onload=$,P.onerror=ct}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Fl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function Qx(t,n){$i.X(t,n);var a=$s;if(a&&t){var r=rt(a).hoistableScripts,c=er(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0},n),(n=ui.get(c))&&Pf(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Jx(t,n){$i.M(t,n);var a=$s;if(a&&t){var r=rt(a).hoistableScripts,c=er(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Pf(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function qg(t,n,a,r){var c=(c=Et.current)?Il(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=tr(a.href),a=rt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=tr(a.href);var f=rt(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(xo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||$x(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=er(a),a=rt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function tr(t){return'href="'+hn(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function $x(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),yn(n,"link",a),k(n),t.head.appendChild(n))}function er(t){return'[src="'+hn(t)+'"]'}function So(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(r)return n.instance=r,k(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),k(r),yn(r,"style",c),Fl(r,a.precedence,t),n.instance=r;case"stylesheet":c=tr(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=Yg(a),(c=ui.get(c))&&zf(r,c),f=(t.ownerDocument||t).createElement("link"),k(f);var g=f;return g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),yn(f,"link",r),n.state.loading|=4,Fl(f,a.precedence,t),n.instance=f;case"script":return f=er(a.src),(c=t.querySelector(So(f)))?(n.instance=c,k(c),c):(r=a,(c=ui.get(f))&&(r=x({},a),Pf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),yn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Fl(r,a.precedence,t));return n.instance}function Fl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hl=null;function Zg(t,n,a){if(Hl===null){var r=new Map,c=Hl=new Map;c.set(a,r)}else c=Hl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ya]||f[Ze]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(f):r.set(g,[f])}}return r}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=tr(r.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=Yg(r),(c=ui.get(c))&&zf(r,c),f=f.createElement("link"),k(f);var g=f;g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),yn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function nS(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Bf===0&&(Bf=62500*Px());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Bf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vl=new Map,n.forEach(iS,t),Vl=null,Gl.call(t))}function iS(t,n){if(!(n.state.loading&4)){var a=Vl.get(t);if(a)var r=a.get(null);else{a=new Map,Vl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Gl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function aS(t,n,a,r,c,f,g,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Jg(t,n,a,r,c,f,g,E,P,$,ct,gt){return t=new aS(t,n,a,g,P,$,ct,gt,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},xu(f),t}function $g(t){return t?(t=Ls,t):Ls}function t_(t,n,a,r,c,f){c=$g(c),r.context===null?r.context=c:r.pendingContext=c,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=va(t,r,n),a!==null&&(Gn(a,t,n),Jr(a,t,n))}function e_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){e_(t,n),(t=t.alternate)&&e_(t,n)}function n_(t){if(t.tag===13||t.tag===31){var n=Qa(t,67108864);n!==null&&Gn(n,t,67108864),If(t,67108864)}}function i_(t){if(t.tag===13||t.tag===31){var n=Jn();n=Wa(n);var a=Qa(t,n);a!==null&&Gn(a,t,n),If(t,n)}}var Xl=!0;function sS(t,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Ff(t,n,a,r)}finally{K.p=f,z.T=c}}function rS(t,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Ff(t,n,a,r)}finally{K.p=f,z.T=c}}function Ff(t,n,a,r){if(Xl){var c=Hf(r);if(c===null)bf(t,n,r,Wl,a),s_(t,r);else if(lS(c,t,n,a,r))r.stopPropagation();else if(s_(t,r),n&4&&-1<oS.indexOf(t)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Ct(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var P=1<<31-Qt(g);E.entanglements[1]|=P,g&=~P}wi(f),(we&6)===0&&(Rl=ht()+500,mo(0))}}break;case 31:case 13:E=Qa(f,2),E!==null&&Gn(E,f,2),wl(),If(f,2)}if(f=Hf(r),f===null&&bf(t,n,r,Wl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else bf(t,n,r,null,a)}}function Hf(t){return t=Gc(t),Gf(t)}var Wl=null;function Gf(t){if(Wl=null,t=A(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function a_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Vt:return 8;case wt:case Bt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Vf=!1,wa=null,Da=null,Ua=null,Mo=new Map,Eo=new Map,La=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&n_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function lS(t,n,a,r,c){switch(n){case"focusin":return wa=To(wa,t,n,a,r,c),!0;case"dragenter":return Da=To(Da,t,n,a,r,c),!0;case"mouseover":return Ua=To(Ua,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,To(Mo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,t,n,a,r,c)),!0}return!1}function r_(t){var n=A(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,qa(t.priority,function(){i_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,qa(t.priority,function(){i_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Hc=r,a.target.dispatchEvent(r),Hc=null}else return n=W(a),n!==null&&n_(n),t.blockedOn=a,!1;n.shift()}return!0}function o_(t,n,a){ql(t)&&a.delete(n)}function cS(){Vf=!1,wa!==null&&ql(wa)&&(wa=null),Da!==null&&ql(Da)&&(Da=null),Ua!==null&&ql(Ua)&&(Ua=null),Mo.forEach(o_),Eo.forEach(o_)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,Vf||(Vf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cS)))}var jl=null;function l_(t){jl!==t&&(jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Gf(r||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,Fu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function nr(t){function n(P){return Yl(P,t)}wa!==null&&Yl(wa,t),Da!==null&&Yl(Da,t),Ua!==null&&Yl(Ua,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<La.length;a++){var r=La[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[gn]||null;if(typeof f=="function")g||l_(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[gn]||null)E=g.formAction;else if(Gf(c)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),l_(a)}}}function c_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function kf(t){this._internalRoot=t}Zl.prototype.render=kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();t_(a,r,t,n,null,null)},Zl.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t_(t.current,2,null,t,null,null),wl(),n[Pi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Or();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&r_(t)}};var u_=e.version;if(u_!=="19.2.4")throw Error(s(527,u_,"19.2.4"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var uS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{qt=Kl.inject(uS),kt=Kl}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=_m,f=vm,g=xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Jg(t,1,!1,null,null,a,r,null,c,f,g,c_),t[Pi]=n.current,Tf(t),new kf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=_m,g=vm,E=xm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Jg(t,1,!0,n,a??null,r,c,P,f,g,E,c_),n.context=$g(null),a=n.current,r=Jn(),r=Wa(r),c=_a(r),c.callback=null,va(a,c,r),a=r,n.current.lanes=a,mn(n,a),wi(n),t[Pi]=n.current,Tf(t),new Zl(n)},Ao.version="19.2.4",Ao}var S_;function SS(){if(S_)return qf.exports;S_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=xS(),qf.exports}var yS=SS();const MS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E0=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();var ES={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const TS=Nn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>Nn.createElement("svg",{ref:m,...ES,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:E0("lucide",l),...d},[...h.map(([p,v])=>Nn.createElement(p,v)),...Array.isArray(u)?u:[u]]));const ni=(o,e)=>{const i=Nn.forwardRef(({className:s,...l},u)=>Nn.createElement(TS,{ref:u,iconNode:e,className:E0(`lucide-${MS(o)}`,s),...l}));return i.displayName=`${o}`,i};const bS=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Sd=ni("Box",bS);const AS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],RS=ni("ChevronDown",AS);const CS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],wS=ni("ChevronLeft",CS);const DS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],US=ni("ChevronRight",DS);const LS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],NS=ni("CircleDot",LS);const OS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],zS=ni("Download",OS);const PS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],BS=ni("Info",PS);const IS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],FS=ni("Layers",IS);const HS=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],GS=ni("Menu",HS);const VS=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],Kf=ni("Ruler",VS);const kS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],XS=ni("Settings",kS);const WS=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],qS=ni("Wind",WS);const YS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jS=ni("X",YS),ZS=[{id:"generator",label:"Генератор",icon:St.jsx(Sd,{size:20})},{id:"templates",label:"Шаблоны",icon:St.jsx(XS,{size:20})},{id:"download",label:"Скачать STL",icon:St.jsx(zS,{size:20})},{id:"about",label:"О проекте",icon:St.jsx(BS,{size:20})}];function KS({isOpen:o,onToggle:e,logoUrl:i}){const[s,l]=Nn.useState("generator");return St.jsxs(St.Fragment,{children:[St.jsx("button",{className:"mobile-menu-btn",onClick:e,"aria-label":o?"Закрыть меню":"Открыть меню",children:o?St.jsx(jS,{size:24}):St.jsx(GS,{size:24})}),St.jsxs("aside",{className:`sidebar ${o?"open":"closed"}`,children:[St.jsx("button",{className:"sidebar-toggle",onClick:e,"aria-label":o?"Свернуть меню":"Развернуть меню",children:o?St.jsx(wS,{size:20}):St.jsx(US,{size:20})}),St.jsx("div",{className:"sidebar-logo",children:i?St.jsx("img",{src:i,alt:"Logo",className:"logo-image"}):St.jsxs("div",{className:"logo-placeholder",children:[St.jsx(Sd,{size:32}),o&&St.jsx("span",{children:"CaseGen"})]})}),St.jsx("nav",{className:"sidebar-nav",children:ZS.map(u=>St.jsxs("button",{className:`nav-item ${s===u.id?"active":""}`,onClick:()=>l(u.id),title:o?void 0:u.label,children:[St.jsx("span",{className:"nav-icon",children:u.icon}),o&&St.jsx("span",{className:"nav-label",children:u.label})]},u.id))}),o&&St.jsx("div",{className:"sidebar-footer",children:St.jsx("p",{children:"Case Generator v0.1"})})]}),o&&St.jsx("div",{className:"sidebar-overlay",onClick:e})]})}const Uh=[{id:"basic-box",name:"Базовый корпус",description:"Простой прямоугольный корпус для электроники",defaultParams:{width:80,height:60,depth:40,wallThickness:2,hasVentilation:!1,hasMountingHoles:!0}},{id:"ventilated-box",name:"Вентилируемый корпус",description:"Корпус с отверстиями для вентиляции",defaultParams:{width:100,height:80,depth:50,wallThickness:2,hasVentilation:!0,hasMountingHoles:!0}},{id:"compact-case",name:"Компактный корпус",description:"Минималистичный корпус для небольших проектов",defaultParams:{width:50,height:40,depth:25,wallThickness:1.5,hasVentilation:!1,hasMountingHoles:!1}}];function QS({selectedModel:o,onSelectModel:e}){const[i,s]=Nn.useState(!1);return St.jsxs("div",{className:"model-selector",children:[St.jsxs("label",{className:"selector-label",children:[St.jsx(Sd,{size:16}),"Выберите модель"]}),St.jsxs("div",{className:"selector-dropdown",children:[St.jsxs("button",{className:"selector-trigger",onClick:()=>s(!i),children:[St.jsx("span",{className:"trigger-content",children:o?St.jsxs(St.Fragment,{children:[St.jsx("span",{className:"model-name",children:o.name}),St.jsx("span",{className:"model-desc",children:o.description})]}):St.jsx("span",{className:"placeholder",children:"Выберите шаблон корпуса..."})}),St.jsx(RS,{size:20,className:`chevron ${i?"open":""}`})]}),i&&St.jsx("div",{className:"selector-options",children:Uh.map(l=>St.jsx("button",{className:`option ${o?.id===l.id?"selected":""}`,onClick:()=>{e(l),s(!1)},children:St.jsxs("div",{className:"option-content",children:[St.jsx("span",{className:"option-name",children:l.name}),St.jsx("span",{className:"option-desc",children:l.description}),St.jsxs("div",{className:"option-params",children:[St.jsxs("span",{children:["📐 ",l.defaultParams.width,"×",l.defaultParams.height,"×",l.defaultParams.depth," мм"]}),St.jsxs("span",{children:["🧱 Стенка: ",l.defaultParams.wallThickness," мм"]})]})]})},l.id))})]})]})}function Ql({label:o,icon:e,value:i,min:s,max:l,step:u,unit:h,onChange:d}){return St.jsxs("div",{className:"param-field",children:[St.jsxs("label",{className:"param-label",children:[e,o]}),St.jsxs("div",{className:"param-input-group",children:[St.jsx("input",{type:"number",value:i,min:s,max:l,step:u,onChange:m=>d(parseFloat(m.target.value)||s),className:"param-input"}),St.jsx("span",{className:"param-unit",children:h})]}),St.jsx("input",{type:"range",min:s,max:l,step:u,value:i,onChange:m=>d(parseFloat(m.target.value)),className:"param-slider"})]})}function JS({parameters:o,onChange:e}){const i=(s,l)=>{e({...o,[s]:l})};return St.jsxs("div",{className:"parameter-form",children:[St.jsx("h3",{className:"form-title",children:"Параметры корпуса"}),St.jsxs("div",{className:"form-section",children:[St.jsx("h4",{className:"section-title",children:"Размеры"}),St.jsx(Ql,{label:"Ширина",icon:St.jsx(Kf,{size:16}),value:o.width,min:20,max:500,step:1,unit:"мм",onChange:s=>i("width",s)}),St.jsx(Ql,{label:"Высота",icon:St.jsx(Kf,{size:16}),value:o.height,min:20,max:500,step:1,unit:"мм",onChange:s=>i("height",s)}),St.jsx(Ql,{label:"Глубина",icon:St.jsx(Kf,{size:16}),value:o.depth,min:10,max:300,step:1,unit:"мм",onChange:s=>i("depth",s)})]}),St.jsxs("div",{className:"form-section",children:[St.jsx("h4",{className:"section-title",children:"Конструкция"}),St.jsx(Ql,{label:"Толщина стенки",icon:St.jsx(FS,{size:16}),value:o.wallThickness,min:.8,max:10,step:.2,unit:"мм",onChange:s=>i("wallThickness",s)}),St.jsxs("div",{className:"param-toggles",children:[St.jsxs("label",{className:"toggle-item",children:[St.jsxs("div",{className:"toggle-info",children:[St.jsx(qS,{size:16}),St.jsx("span",{children:"Вентиляция"})]}),St.jsx("input",{type:"checkbox",checked:o.hasVentilation,onChange:s=>i("hasVentilation",s.target.checked),className:"toggle-input"}),St.jsx("span",{className:"toggle-slider"})]}),St.jsxs("label",{className:"toggle-item",children:[St.jsxs("div",{className:"toggle-info",children:[St.jsx(NS,{size:16}),St.jsx("span",{children:"Монтажные отверстия"})]}),St.jsx("input",{type:"checkbox",checked:o.hasMountingHoles,onChange:s=>i("hasMountingHoles",s.target.checked),className:"toggle-input"}),St.jsx("span",{className:"toggle-slider"})]})]})]})]})}const yd="172",$S=0,y_=1,ty=2,T0=1,b0=2,sa=3,ka=0,kn=1,ra=2,Ga=0,xr=1,M_=2,E_=3,T_=4,ey=5,vs=100,ny=101,iy=102,ay=103,sy=104,ry=200,oy=201,ly=202,cy=203,Lh=204,Nh=205,uy=206,fy=207,hy=208,dy=209,py=210,my=211,gy=212,_y=213,vy=214,Oh=0,zh=1,Ph=2,Mr=3,Bh=4,Ih=5,Fh=6,Hh=7,A0=0,xy=1,Sy=2,Va=0,yy=1,My=2,Ey=3,Ty=4,by=5,Ay=6,Ry=7,R0=300,Er=301,Tr=302,Gh=303,Vh=304,Nc=306,kh=1e3,Ss=1001,Xh=1002,Ti=1003,Cy=1004,Jl=1005,Li=1006,Qf=1007,ys=1008,ua=1009,C0=1010,w0=1011,Po=1012,Md=1013,Ms=1014,oa=1015,Bo=1016,Ed=1017,Td=1018,br=1020,D0=35902,U0=1021,L0=1022,Ei=1023,N0=1024,O0=1025,Sr=1026,Ar=1027,z0=1028,bd=1029,P0=1030,Ad=1031,Rd=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Wh=35840,qh=35841,Yh=35842,jh=35843,Zh=36196,Kh=37492,Qh=37496,Jh=37808,$h=37809,td=37810,ed=37811,nd=37812,id=37813,ad=37814,sd=37815,rd=37816,od=37817,ld=37818,cd=37819,ud=37820,fd=37821,bc=36492,hd=36494,dd=36495,B0=36283,pd=36284,md=36285,gd=36286,wy=3200,Dy=3201,I0=0,Uy=1,Ha="",hi="srgb",Rr="srgb-linear",Rc="linear",Fe="srgb",ir=7680,b_=519,Ly=512,Ny=513,Oy=514,F0=515,zy=516,Py=517,By=518,Iy=519,A_=35044,R_="300 es",la=2e3,Cc=2001;class wr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,_d=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function Fy(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function Ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,i=0){Ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,s,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],S=s[2],y=s[5],b=s[8],C=l[0],M=l[3],_=l[6],B=l[1],N=l[4],D=l[7],q=l[2],H=l[5],O=l[8];return u[0]=h*C+d*B+m*q,u[3]=h*M+d*N+m*H,u[6]=h*_+d*D+m*O,u[1]=p*C+v*B+x*q,u[4]=p*M+v*N+x*H,u[7]=p*_+v*D+x*O,u[2]=S*C+y*B+b*q,u[5]=S*M+y*N+b*H,u[8]=S*_+y*D+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*h-d*p,S=d*m-v*u,y=p*u-h*m,b=i*x+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=x*C,e[1]=(l*p-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new oe;function H0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Hy(){const o=wc("canvas");return o.style.display="block",o}const C_={};function _r(o){o in C_||(C_[o]=!0,console.warn(o))}function Gy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Vy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ky(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const w_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xy(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:e,whitePoint:s,transfer:Rc,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Re=Xy();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class Wy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=wc("canvas")),ar.width=e.width,ar.height=e.height;const s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ar}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ca(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ca(i[s]/255)*255):i[s]=ca(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class G0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(eh(l[h].image)):u.push(eh(l[h]))}else u=eh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Wy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yy=0;class Xn extends wr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Li,h=ys,d=Ei,m=ua,p=Xn.DEFAULT_ANISOTROPY,v=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Io(),this.name="",this.source=new G0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kh:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case Xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kh:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case Xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=R0;Xn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],x=m[8],S=m[1],y=m[5],b=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(x-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(y+1)/2,q=(_+1)/2,H=(v+S)/4,O=(x+C)/4,V=(b+M)/4;return N>D&&N>q?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=H/s,u=O/s):D>q?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=H/l,u=V/l):q<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),s=O/u,l=V/u),this.set(s,l,u,i),this}let B=Math.sqrt((M-b)*(M-b)+(x-C)*(x-C)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(x-C)/B,this.z=(S-v)/B,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jy extends wr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Xn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new G0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends jy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class V0 extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3];const S=u[h+0],y=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(x!==C||m!==S||p!==y||v!==b){let M=1-d;const _=m*S+p*y+v*b+x*C,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const q=Math.sqrt(N),H=Math.atan2(q,_*B);M=Math.sin(M*H)/q,d=Math.sin(d*H)/q}const D=d*B;if(m=m*M+S*D,p=p*M+y*D,v=v*M+b*D,x=x*M+C*D,M===1-d){const q=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=q,p*=q,v*=q,x*=q}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=u[h],S=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+v*x+m*y-p*S,e[i+1]=m*b+v*S+p*x-d*y,e[i+2]=p*b+v*y+d*S-m*x,e[i+3]=v*b-d*x-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(u/2),S=m(s/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*v*x+p*y*b,this._y=p*y*x-S*v*b,this._z=p*v*b+S*y*x,this._w=p*v*x-S*y*b;break;case"YXZ":this._x=S*v*x+p*y*b,this._y=p*y*x-S*v*b,this._z=p*v*b-S*y*x,this._w=p*v*x+S*y*b;break;case"ZXY":this._x=S*v*x-p*y*b,this._y=p*y*x+S*v*b,this._z=p*v*b+S*y*x,this._w=p*v*x-S*y*b;break;case"ZYX":this._x=S*v*x-p*y*b,this._y=p*y*x+S*v*b,this._z=p*v*b-S*y*x,this._w=p*v*x+S*y*b;break;case"YZX":this._x=S*v*x+p*y*b,this._y=p*y*x+S*v*b,this._z=p*v*b-S*y*x,this._w=p*v*x-S*y*b;break;case"XZY":this._x=S*v*x-p*y*b,this._y=p*y*x-S*v*b,this._z=p*v*b+S*y*x,this._w=p*v*x+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],S=s+d+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(v-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),x=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*v,this.y=s+m*v+d*p-u*x,this.z=l+m*x+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new Q,U_=new Fo;class Ho{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),tc.subVectors(this.max,Co),sr.subVectors(e.a,Co),rr.subVectors(e.b,Co),or.subVectors(e.c,Co),Oa.subVectors(rr,sr),za.subVectors(or,rr),us.subVectors(sr,or);let i=[0,-Oa.z,Oa.y,0,-za.z,za.y,0,-us.z,us.y,Oa.z,0,-Oa.x,za.z,0,-za.x,us.z,0,-us.x,-Oa.y,Oa.x,0,-za.y,za.x,0,-us.y,us.x,0];return!ih(i,sr,rr,or,tc)||(i=[1,0,0,0,1,0,0,0,1],!ih(i,sr,rr,or,tc))?!1:(ec.crossVectors(Oa,za),i=[ec.x,ec.y,ec.z],ih(i,sr,rr,or,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ta=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xi=new Q,$l=new Ho,sr=new Q,rr=new Q,or=new Q,Oa=new Q,za=new Q,us=new Q,Co=new Q,tc=new Q,ec=new Q,fs=new Q;function ih(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){fs.fromArray(o,u);const d=l.x*Math.abs(fs.x)+l.y*Math.abs(fs.y)+l.z*Math.abs(fs.z),m=e.dot(fs),p=i.dot(fs),v=s.dot(fs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Ky=new Ho,wo=new Q,ah=new Q;class Oc{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ky.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(ah)),this.expandByPoint(wo.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Q,sh=new Q,nc=new Q,Pa=new Q,rh=new Q,ic=new Q,oh=new Q;class k0{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){sh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(sh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),v=Math.abs(1-h*h);let x,S,y,b;if(v>0)if(x=h*m-d,S=h*d-m,b=u*v,x>=0)if(S>=-b)if(S<=b){const C=1/v;x*=C,S*=C,y=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;else S<=-b?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p):S<=b?(x=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),y=-x*x+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(sh).addScaledVector(nc,S),y}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,s,l,u){rh.subVectors(i,e),ic.subVectors(s,e),oh.crossVectors(rh,ic);let h=this.direction.dot(oh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=d*this.direction.dot(rh.cross(Pa));if(p<0||m+p>h)return null;const v=-d*Pa.dot(oh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,s,l,u,h,d,m,p,v,x,S,y,b,C,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,v,x,S,y,b,C,M)}set(e,i,s,l,u,h,d,m,p,v,x,S,y,b,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=x,_[14]=S,_[3]=y,_[7]=b,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/lr.setFromMatrixColumn(e,0).length(),u=1/lr.setFromMatrixColumn(e,1).length(),h=1/lr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*v,y=h*x,b=d*v,C=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=y+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,y=m*x,b=p*v,C=p*x;i[0]=S+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=y*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,y=m*x,b=p*v,C=p*x;i[0]=S-C*d,i[4]=-h*x,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,y=h*x,b=d*v,C=d*x;i[0]=m*v,i[4]=b*p-y,i[8]=S*p+C,i[1]=m*x,i[5]=C*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-S*x,i[8]=b*x+y,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*x+b,i[10]=S-C*x}else if(e.order==="XZY"){const S=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=S*x+C,i[5]=h*v,i[9]=y*x-b,i[2]=b*x-y,i[6]=d*v,i[10]=C*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,Jy)}lookAt(e,i,s){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ba.crossVectors(s,$n),Ba.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ba.crossVectors(s,$n)),Ba.normalize(),ac.crossVectors($n,Ba),l[0]=Ba.x,l[4]=ac.x,l[8]=$n.x,l[1]=Ba.y,l[5]=ac.y,l[9]=$n.y,l[2]=Ba.z,l[6]=ac.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],S=s[9],y=s[13],b=s[2],C=s[6],M=s[10],_=s[14],B=s[3],N=s[7],D=s[11],q=s[15],H=l[0],O=l[4],V=l[8],w=l[12],R=l[1],I=l[5],it=l[9],at=l[13],ut=l[2],pt=l[6],z=l[10],K=l[14],Z=l[3],yt=l[7],bt=l[11],L=l[15];return u[0]=h*H+d*R+m*ut+p*Z,u[4]=h*O+d*I+m*pt+p*yt,u[8]=h*V+d*it+m*z+p*bt,u[12]=h*w+d*at+m*K+p*L,u[1]=v*H+x*R+S*ut+y*Z,u[5]=v*O+x*I+S*pt+y*yt,u[9]=v*V+x*it+S*z+y*bt,u[13]=v*w+x*at+S*K+y*L,u[2]=b*H+C*R+M*ut+_*Z,u[6]=b*O+C*I+M*pt+_*yt,u[10]=b*V+C*it+M*z+_*bt,u[14]=b*w+C*at+M*K+_*L,u[3]=B*H+N*R+D*ut+q*Z,u[7]=B*O+N*I+D*pt+q*yt,u[11]=B*V+N*it+D*z+q*bt,u[15]=B*w+N*at+D*K+q*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],S=e[10],y=e[14],b=e[3],C=e[7],M=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*d*S+s*p*S+l*d*y-s*m*y)+C*(+i*m*y-i*p*S+u*h*S-l*h*y+l*p*v-u*m*v)+M*(+i*p*x-i*d*y-u*h*x+s*h*y+u*d*v-s*p*v)+_*(-l*d*v-i*m*x+i*d*S+l*h*x-s*h*S+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],S=e[10],y=e[11],b=e[12],C=e[13],M=e[14],_=e[15],B=x*M*p-C*S*p+C*m*y-d*M*y-x*m*_+d*S*_,N=b*S*p-v*M*p-b*m*y+h*M*y+v*m*_-h*S*_,D=v*C*p-b*x*p+b*d*y-h*C*y-v*d*_+h*x*_,q=b*x*m-v*C*m-b*d*S+h*C*S+v*d*M-h*x*M,H=i*B+s*N+l*D+u*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=B*O,e[1]=(C*S*u-x*M*u-C*l*y+s*M*y+x*l*_-s*S*_)*O,e[2]=(d*M*u-C*m*u+C*l*p-s*M*p-d*l*_+s*m*_)*O,e[3]=(x*m*u-d*S*u-x*l*p+s*S*p+d*l*y-s*m*y)*O,e[4]=N*O,e[5]=(v*M*u-b*S*u+b*l*y-i*M*y-v*l*_+i*S*_)*O,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*O,e[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*y+i*m*y)*O,e[8]=D*O,e[9]=(b*x*u-v*C*u-b*s*y+i*C*y+v*s*_-i*x*_)*O,e[10]=(h*C*u-b*d*u+b*s*p-i*C*p-h*s*_+i*d*_)*O,e[11]=(v*d*u-h*x*u-v*s*p+i*x*p+h*s*y-i*d*y)*O,e[12]=q*O,e[13]=(v*C*l-b*x*l+b*s*S-i*C*S-v*s*M+i*x*M)*O,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*M-i*d*M)*O,e[15]=(h*x*l-v*d*l+v*s*m-i*x*m-h*s*S+i*d*S)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,x=d+d,S=u*p,y=u*v,b=u*x,C=h*v,M=h*x,_=d*x,B=m*p,N=m*v,D=m*x,q=s.x,H=s.y,O=s.z;return l[0]=(1-(C+_))*q,l[1]=(y+D)*q,l[2]=(b-N)*q,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(S+_))*H,l[6]=(M+B)*H,l[7]=0,l[8]=(b+N)*O,l[9]=(M-B)*O,l[10]=(1-(S+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,v=1/h,x=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=la){const m=this.elements,p=2*u/(i-e),v=2*u/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let y,b;if(d===la)y=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Cc)y=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=la){const m=this.elements,p=1/(i-e),v=1/(s-l),x=1/(h-u),S=(i+e)*p,y=(s+l)*v;let b,C;if(d===la)b=(h+u)*x,C=-2*x;else if(d===Cc)b=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const lr=new Q,Si=new je,Qy=new Q(0,0,0),Jy=new Q(1,1,1),Ba=new Q,ac=new Q,$n=new Q,L_=new je,N_=new Fo;class Oi{constructor(e=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return L_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return N_.setFromEuler(this),this.setFromQuaternion(N_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const O_=new Q,cr=new Fo,na=new je,sc=new Q,Do=new Q,tM=new Q,eM=new Fo,z_=new Q(1,0,0),P_=new Q(0,1,0),B_=new Q(0,0,1),I_={type:"added"},nM={type:"removed"},ur={type:"childadded",child:null},lh={type:"childremoved",child:null};class En extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Q,i=new Oi,s=new Fo,l=new Q(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new oe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,i){return cr.setFromAxisAngle(e,i),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(z_,e)}rotateY(e){return this.rotateOnAxis(P_,e)}rotateZ(e){return this.rotateOnAxis(B_,e)}translateOnAxis(e,i){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z_,e)}translateY(e){return this.translateOnAxis(P_,e)}translateZ(e){return this.translateOnAxis(B_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?sc.copy(e):sc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Do,sc,this.up):na.lookAt(sc,Do,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(na),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I_),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(nM),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I_),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),x=h(e.shapes),S=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new Q(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new Q,ia=new Q,ch=new Q,aa=new Q,fr=new Q,hr=new Q,F_=new Q,uh=new Q,fh=new Q,hh=new Q,dh=new He,ph=new He,mh=new He;class Mi{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),ia.subVectors(s,i),ch.subVectors(e,i);const h=yi.dot(yi),d=yi.dot(ia),m=yi.dot(ch),p=ia.dot(ia),v=ia.dot(ch),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,y=(p*m-d*v)*S,b=(h*v-d*m)*S;return u.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(dh,u.x),h.addScaledVector(ph,u.y),h.addScaledVector(mh,u.z),h}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),ia.subVectors(e,i),yi.cross(ia).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(u,s),uh.subVectors(e,s);const m=fr.dot(uh),p=hr.dot(uh);if(m<=0&&p<=0)return i.copy(s);fh.subVectors(e,l);const v=fr.dot(fh),x=hr.dot(fh);if(v>=0&&x<=v)return i.copy(l);const S=m*x-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(fr,h);hh.subVectors(e,u);const y=fr.dot(hh),b=hr.dot(hh);if(b>=0&&y<=b)return i.copy(u);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(hr,d);const M=v*b-y*x;if(M<=0&&x-v>=0&&y-b>=0)return F_.subVectors(u,l),d=(x-v)/(x-v+(y-b)),i.copy(l).addScaledVector(F_,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},rc={h:0,s:0,l:0};function gh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Re.workingColorSpace){if(e=Fy(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=gh(h,u,e+1/3),this.g=gh(h,u,e),this.b=gh(h,u,e-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(e,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const s=W0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Re.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Se(Cn.r*255,0,255))*65536+Math.round(Se(Cn.g*255,0,255))*256+Math.round(Se(Cn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=hi){Re.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(rc);const s=$f(Ia.h,rc.h,i),l=$f(Ia.s,rc.s,i),u=$f(Ia.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ye;ye.NAMES=W0;let iM=0;class Dr extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=xr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Lh&&(s.blendSrc=this.blendSrc),this.blendDst!==Nh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class q0 extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=A0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new Q,oc=new Ce;class Ni{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=A_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A_&&(e.usage=this.usage),e}}class Y0 extends Ni{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class j0 extends Ni{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Wn extends Ni{constructor(e,i,s){super(new Float32Array(e),i,s)}}let aM=0;const fi=new je,_h=new En,dr=new Q,ti=new Ho,Uo=new Ho,pn=new Q;class zi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?j0:Y0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Wn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(ti.min,Uo.min),ti.expandByPoint(pn),pn.addVectors(ti.max,Uo.max),ti.expandByPoint(pn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)pn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(pn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)pn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(e,p),pn.add(dr)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new Q,m[V]=new Q;const p=new Q,v=new Q,x=new Q,S=new Ce,y=new Ce,b=new Ce,C=new Q,M=new Q;function _(V,w,R){p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,w),x.fromBufferAttribute(s,R),S.fromBufferAttribute(u,V),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,R),v.sub(p),x.sub(p),y.sub(S),b.sub(S);const I=1/(y.x*b.y-b.x*y.y);isFinite(I)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(I),M.copy(x).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(I),d[V].add(C),d[w].add(C),d[R].add(C),m[V].add(M),m[w].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let V=0,w=B.length;V<w;++V){const R=B[V],I=R.start,it=R.count;for(let at=I,ut=I+it;at<ut;at+=3)_(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new Q,D=new Q,q=new Q,H=new Q;function O(V){q.fromBufferAttribute(l,V),H.copy(q);const w=d[V];N.copy(w),N.sub(q.multiplyScalar(q.dot(w))).normalize(),D.crossVectors(H,w);const I=D.dot(m[V])<0?-1:1;h.setXYZW(V,N.x,N.y,N.z,I)}for(let V=0,w=B.length;V<w;++V){const R=B[V],I=R.start,it=R.count;for(let at=I,ut=I+it;at<ut;at+=3)O(e.getX(at+0)),O(e.getX(at+1)),O(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new Q,u=new Q,h=new Q,d=new Q,m=new Q,p=new Q,v=new Q,x=new Q;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,S=new p.constructor(m.length*v);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*v;for(let _=0;_<v;_++)S[b++]=p[y++]}return new Ni(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,x=p.length;v<x;v++){const S=p[v],y=e(S,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,S=p.length;x<S;x++){const y=p[x];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],x=u[p];for(let S=0,y=x.length;S<y;S++)v.push(x[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new je,hs=new k0,lc=new Oc,G_=new Q,cc=new Q,uc=new Q,fc=new Q,vh=new Q,hc=new Q,V_=new Q,dc=new Q;class Mn extends En{constructor(e=new zi,i=new q0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],x=u[m];v!==0&&(vh.fromBufferAttribute(x,e),h?hc.addScaledVector(vh,v):hc.addScaledVector(vh.sub(i),v))}i.add(hc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),hs.copy(e.ray).recast(e.near),!(lc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(lc,G_)===null||hs.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(H_.copy(u).invert(),hs.copy(e.ray).applyMatrix4(H_),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,hs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=B,q=N;D<q;D+=3){const H=d.getX(D),O=d.getX(D+1),V=d.getX(D+2);l=pc(this,_,e,s,p,v,x,H,O,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const B=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);l=pc(this,h,e,s,p,v,x,B,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const M=S[b],_=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=B,q=N;D<q;D+=3){const H=D,O=D+1,V=D+2;l=pc(this,_,e,s,p,v,x,H,O,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const B=M,N=M+1,D=M+2;l=pc(this,h,e,s,p,v,x,B,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function sM(o,e,i,s,l,u,h,d){let m;if(e.side===kn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===ka,d),m===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function pc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const v=sM(o,e,i,s,cc,uc,fc,V_);if(v){const x=new Q;Mi.getBarycoord(V_,cc,uc,fc,x),l&&(v.uv=Mi.getInterpolatedAttribute(l,d,m,p,x,new Ce)),u&&(v.uv1=Mi.getInterpolatedAttribute(u,d,m,p,x,new Ce)),h&&(v.normal=Mi.getInterpolatedAttribute(h,d,m,p,x,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new Q,materialIndex:0};Mi.getNormal(cc,uc,fc,S.normal),v.face=S,v.barycoord=x}return v}class Ui extends zi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],x=[];let S=0,y=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Wn(p,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(x,2));function b(C,M,_,B,N,D,q,H,O,V,w){const R=D/O,I=q/V,it=D/2,at=q/2,ut=H/2,pt=O+1,z=V+1;let K=0,Z=0;const yt=new Q;for(let bt=0;bt<z;bt++){const L=bt*I-at;for(let st=0;st<pt;st++){const xt=st*R-it;yt[C]=xt*B,yt[M]=L*N,yt[_]=ut,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[_]=H>0?1:-1,v.push(yt.x,yt.y,yt.z),x.push(st/O),x.push(1-bt/V),K+=1}}for(let bt=0;bt<V;bt++)for(let L=0;L<O;L++){const st=S+L+pt*bt,xt=S+L+pt*(bt+1),j=S+(L+1)+pt*(bt+1),ft=S+(L+1)+pt*bt;m.push(st,xt,ft),m.push(xt,j,ft),Z+=6}d.addGroup(y,Z,w),y+=Z,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)e[l]=s[l]}return e}function rM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Z0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const oM={clone:Cr,merge:Ln};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class K0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=la}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new Q,k_=new Ce,X_=new Ce;class ei extends K0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,i){return this.getViewBounds(e,k_,X_),i.subVectors(X_,k_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Jf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class uM extends En{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(pr,mr,e,i);l.layers=this.layers,this.add(l);const u=new ei(pr,mr,e,i);u.layers=this.layers,this.add(u);const h=new ei(pr,mr,e,i);h.layers=this.layers,this.add(h);const d=new ei(pr,mr,e,i);d.layers=this.layers,this.add(d);const m=new ei(pr,mr,e,i);m.layers=this.layers,this.add(m);const p=new ei(pr,mr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===la)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(x,S,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Q0 extends Xn{constructor(e,i,s,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Er,super(e,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Q0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ui(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ga});u.uniforms.tEquirect.value=i;const h=new Mn(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Li),new uM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class hM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const xh=new Q,dM=new Q,pM=new oe;class gs{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=xh.subVectors(s,i).cross(dM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||pM.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Oc,mc=new Q;class Cd{constructor(e=new gs,i=new gs,s=new gs,l=new gs,u=new gs,h=new gs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=la){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],x=l[6],S=l[7],y=l[8],b=l[9],C=l[10],M=l[11],_=l[12],B=l[13],N=l[14],D=l[15];if(s[0].setComponents(m-u,S-p,M-y,D-_).normalize(),s[1].setComponents(m+u,S+p,M+y,D+_).normalize(),s[2].setComponents(m+h,S+v,M+b,D+B).normalize(),s[3].setComponents(m-h,S-v,M-b,D-B).normalize(),s[4].setComponents(m-d,S-x,M-C,D-N).normalize(),i===la)s[5].setComponents(m+d,S+x,M+C,D+N).normalize();else if(i===Cc)s[5].setComponents(d,x,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class J0 extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new Q,Uc=new Q,W_=new je,Lo=new k0,gc=new Oc,Sh=new Q,q_=new Q;class mM extends En{constructor(e=new zi,i=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Dc.fromBufferAttribute(i,l-1),Uc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Dc.distanceTo(Uc);e.setAttribute("lineDistance",new Wn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;W_.copy(l).invert(),Lo.copy(e.ray).applyMatrix4(W_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const _=v.getX(C),B=v.getX(C+1),N=_c(this,e,Lo,m,_,B);N&&i.push(N)}if(this.isLineLoop){const C=v.getX(b-1),M=v.getX(y),_=_c(this,e,Lo,m,C,M);_&&i.push(_)}}else{const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const _=_c(this,e,Lo,m,C,C+1);_&&i.push(_)}if(this.isLineLoop){const C=_c(this,e,Lo,m,b-1,y);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function _c(o,e,i,s,l,u){const h=o.geometry.attributes.position;if(Dc.fromBufferAttribute(h,l),Uc.fromBufferAttribute(h,u),i.distanceSqToSegment(Dc,Uc,Sh,q_)>s)return;Sh.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Sh);if(!(m<e.near||m>e.far))return{distance:m,point:q_.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}const Y_=new Q,j_=new Q;class gM extends mM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)Y_.fromBufferAttribute(i,l),j_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Y_.distanceTo(j_);e.setAttribute("lineDistance",new Wn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $0 extends Xn{constructor(e,i,s,l,u,h,d,m,p,v=Sr){if(v!==Sr&&v!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Sr&&(s=Ms),s===void 0&&v===Ar&&(s=br),super(null,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends zi{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const v=[],x=[],S=[],y=[];let b=0;const C=[],M=s/2;let _=0;B(),h===!1&&(e>0&&N(!0),i>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new Wn(x,3)),this.setAttribute("normal",new Wn(S,3)),this.setAttribute("uv",new Wn(y,2));function B(){const D=new Q,q=new Q;let H=0;const O=(i-e)/s;for(let V=0;V<=u;V++){const w=[],R=V/u,I=R*(i-e)+e;for(let it=0;it<=l;it++){const at=it/l,ut=at*m+d,pt=Math.sin(ut),z=Math.cos(ut);q.x=I*pt,q.y=-R*s+M,q.z=I*z,x.push(q.x,q.y,q.z),D.set(pt,O,z).normalize(),S.push(D.x,D.y,D.z),y.push(at,1-R),w.push(b++)}C.push(w)}for(let V=0;V<l;V++)for(let w=0;w<u;w++){const R=C[w][V],I=C[w+1][V],it=C[w+1][V+1],at=C[w][V+1];(e>0||w!==0)&&(v.push(R,I,at),H+=3),(i>0||w!==u-1)&&(v.push(I,it,at),H+=3)}p.addGroup(_,H,0),_+=H}function N(D){const q=b,H=new Ce,O=new Q;let V=0;const w=D===!0?e:i,R=D===!0?1:-1;for(let it=1;it<=l;it++)x.push(0,M*R,0),S.push(0,R,0),y.push(.5,.5),b++;const I=b;for(let it=0;it<=l;it++){const ut=it/l*m+d,pt=Math.cos(ut),z=Math.sin(ut);O.x=w*z,O.y=M*R,O.z=w*pt,x.push(O.x,O.y,O.z),S.push(0,R,0),H.x=pt*.5+.5,H.y=z*.5*R+.5,y.push(H.x,H.y),b++}for(let it=0;it<l;it++){const at=q+it,ut=I+it;D===!0?v.push(ut,ut+1,at):v.push(ut+1,ut,at),V+=3}p.addGroup(_,V,D===!0?1:2),_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends zi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=e/d,S=i/m,y=[],b=[],C=[],M=[];for(let _=0;_<v;_++){const B=_*S-h;for(let N=0;N<p;N++){const D=N*x-u;b.push(D,-B,0),C.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const N=B+p*_,D=B+p*(_+1),q=B+1+p*(_+1),H=B+1+p*_;y.push(N,D,H),y.push(D,q,H)}this.setIndex(y),this.setAttribute("position",new Wn(b,3)),this.setAttribute("normal",new Wn(C,3)),this.setAttribute("uv",new Wn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class yh extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I0,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wd extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Mh=new je,Z_=new Q,K_=new Q;class tv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cd,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Z_.setFromMatrixPosition(e.matrixWorld),i.position.copy(Z_),K_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(K_),i.updateMatrixWorld(),Mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Q_=new je,No=new Q,Eh=new Q;class xM extends tv{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),s.position.copy(No),Eh.copy(s.position),Eh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Eh),s.updateMatrixWorld(),l.makeTranslation(-No.x,-No.y,-No.z),Q_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q_)}}class SM extends wd{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new xM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ev extends K0{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yM extends tv{constructor(){super(new ev(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MM extends wd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new yM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EM extends wd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class TM extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bM extends gM{constructor(e=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const u=i/2,h=e/i,d=e/2,m=[],p=[];for(let S=0,y=0,b=-d;S<=i;S++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const C=S===u?s:l;C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3}const v=new zi;v.setAttribute("position",new Wn(m,3)),v.setAttribute("color",new Wn(p,3));const x=new J0({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function J_(o,e,i,s){const l=AM(s);switch(i){case U0:return o*e;case N0:return o*e;case O0:return o*e*2;case z0:return o*e/l.components*l.byteLength;case bd:return o*e/l.components*l.byteLength;case P0:return o*e*2/l.components*l.byteLength;case Ad:return o*e*2/l.components*l.byteLength;case L0:return o*e*3/l.components*l.byteLength;case Ei:return o*e*4/l.components*l.byteLength;case Rd:return o*e*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qh:case jh:return Math.max(o,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(o,8)*Math.max(e,8)/2;case Zh:case Kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case rd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ld:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case cd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bc:case hd:case dd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case B0:case pd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case md:case gd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AM(o){switch(o){case ua:case C0:return{byteLength:1,components:1};case Po:case w0:case Bo:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case Ms:case Md:case oa:return{byteLength:4,components:1};case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function nv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function RM(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,v);else{x.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<x.length;y++){const b=x[S],C=x[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,x[S]=C)}x.length=S+1;for(let y=0,b=x.length;y<b;y++){const C=x[y];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GM=`#ifdef USE_IRIDESCENCE
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
#endif`,VM=`#ifdef USE_BUMPMAP
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
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
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,SE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bE=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,AE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,RE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
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
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
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
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,OT=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zT=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,PT=`#define DISTANCE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,XT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,qT=`#define MATCAP
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
}`,YT=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,jT=`#define NORMAL
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
}`,ZT=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,KT=`#define PHONG
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
}`,QT=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,JT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,$T=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,tb=`#define TOON
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
}`,eb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ab=`uniform vec3 color;
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
}`,sb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,rb=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:CM,alphahash_pars_fragment:wM,alphamap_fragment:DM,alphamap_pars_fragment:UM,alphatest_fragment:LM,alphatest_pars_fragment:NM,aomap_fragment:OM,aomap_pars_fragment:zM,batching_pars_vertex:PM,batching_vertex:BM,begin_vertex:IM,beginnormal_vertex:FM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:VM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:jM,color_pars_vertex:ZM,color_vertex:KM,common:QM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:$M,displacementmap_pars_vertex:tE,displacementmap_vertex:eE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:aE,colorspace_pars_fragment:sE,envmap_fragment:rE,envmap_common_pars_fragment:oE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:SE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:hE,fog_fragment:dE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:_E,lights_lambert_pars_fragment:vE,lights_pars_begin:xE,lights_toon_fragment:yE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:TE,lights_physical_fragment:bE,lights_physical_pars_fragment:AE,lights_fragment_begin:RE,lights_fragment_maps:CE,lights_fragment_end:wE,logdepthbuf_fragment:DE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:NE,map_fragment:OE,map_pars_fragment:zE,map_particle_fragment:PE,map_particle_pars_fragment:BE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:FE,morphinstance_vertex:HE,morphcolor_vertex:GE,morphnormal_vertex:VE,morphtarget_pars_vertex:kE,morphtarget_vertex:XE,normal_fragment_begin:WE,normal_fragment_maps:qE,normal_pars_fragment:YE,normal_pars_vertex:jE,normal_vertex:ZE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:tT,opaque_fragment:eT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:aT,dithering_fragment:sT,dithering_pars_fragment:rT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:fT,shadowmask_pars_fragment:hT,skinbase_vertex:dT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:vT,tonemapping_fragment:xT,tonemapping_pars_fragment:ST,transmission_fragment:yT,transmission_pars_fragment:MT,uv_pars_fragment:ET,uv_pars_vertex:TT,uv_vertex:bT,worldpos_vertex:AT,background_vert:RT,background_frag:CT,backgroundCube_vert:wT,backgroundCube_frag:DT,cube_vert:UT,cube_frag:LT,depth_vert:NT,depth_frag:OT,distanceRGBA_vert:zT,distanceRGBA_frag:PT,equirect_vert:BT,equirect_frag:IT,linedashed_vert:FT,linedashed_frag:HT,meshbasic_vert:GT,meshbasic_frag:VT,meshlambert_vert:kT,meshlambert_frag:XT,meshmatcap_vert:WT,meshmatcap_frag:qT,meshnormal_vert:YT,meshnormal_frag:jT,meshphong_vert:ZT,meshphong_frag:KT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:$T,meshtoon_frag:tb,points_vert:eb,points_frag:nb,shadow_vert:ib,shadow_frag:ab,sprite_vert:sb,sprite_frag:rb},Lt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Di={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Di.physical={uniforms:Ln([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const vc={r:0,b:0,g:0},ps=new Oi,ob=new je;function lb(o,e,i,s,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,v,x=null,S=0,y=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:e).get(D)),D}function C(N){let D=!1;const q=b(N);q===null?_(d,m):q&&q.isColor&&(_(q,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,D){const q=b(D);q&&(q.isCubeTexture||q.mapping===Nc)?(v===void 0&&(v=new Mn(new Ui(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Cr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),ps.copy(D.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),v.material.uniforms.envMap.value=q,v.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(ob.makeRotationFromEuler(ps)),v.material.toneMapped=Re.getTransfer(q.colorSpace)!==Fe,(x!==q||S!==q.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,x=q,S=q.version,y=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new Mn(new zc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Cr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(q.colorSpace)!==Fe,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(x!==q||S!==q.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=q,S=q.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,D){N.getRGB(vc,Z0(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,D,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:M,dispose:B}}function cb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(R,I,it,at,ut){let pt=!1;const z=x(at,it,I);u!==z&&(u=z,p(u.object)),pt=y(R,at,it,ut),pt&&b(R,at,it,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,D(R,I,it,at),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function x(R,I,it){const at=it.wireframe===!0;let ut=s[R.id];ut===void 0&&(ut={},s[R.id]=ut);let pt=ut[I.id];pt===void 0&&(pt={},ut[I.id]=pt);let z=pt[at];return z===void 0&&(z=S(m()),pt[at]=z),z}function S(R){const I=[],it=[],at=[];for(let ut=0;ut<i;ut++)I[ut]=0,it[ut]=0,at[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:it,attributeDivisors:at,object:R,attributes:{},index:null}}function y(R,I,it,at){const ut=u.attributes,pt=I.attributes;let z=0;const K=it.getAttributes();for(const Z in K)if(K[Z].location>=0){const bt=ut[Z];let L=pt[Z];if(L===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),bt===void 0||bt.attribute!==L||L&&bt.data!==L.data)return!0;z++}return u.attributesNum!==z||u.index!==at}function b(R,I,it,at){const ut={},pt=I.attributes;let z=0;const K=it.getAttributes();for(const Z in K)if(K[Z].location>=0){let bt=pt[Z];bt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor));const L={};L.attribute=bt,bt&&bt.data&&(L.data=bt.data),ut[Z]=L,z++}u.attributes=ut,u.attributesNum=z,u.index=at}function C(){const R=u.newAttributes;for(let I=0,it=R.length;I<it;I++)R[I]=0}function M(R){_(R,0)}function _(R,I){const it=u.newAttributes,at=u.enabledAttributes,ut=u.attributeDivisors;it[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),ut[R]!==I&&(o.vertexAttribDivisor(R,I),ut[R]=I)}function B(){const R=u.newAttributes,I=u.enabledAttributes;for(let it=0,at=I.length;it<at;it++)I[it]!==R[it]&&(o.disableVertexAttribArray(it),I[it]=0)}function N(R,I,it,at,ut,pt,z){z===!0?o.vertexAttribIPointer(R,I,it,ut,pt):o.vertexAttribPointer(R,I,it,at,ut,pt)}function D(R,I,it,at){C();const ut=at.attributes,pt=it.getAttributes(),z=I.defaultAttributeValues;for(const K in pt){const Z=pt[K];if(Z.location>=0){let yt=ut[K];if(yt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const bt=yt.normalized,L=yt.itemSize,st=e.get(yt);if(st===void 0)continue;const xt=st.buffer,j=st.type,ft=st.bytesPerElement,Et=j===o.INT||j===o.UNSIGNED_INT||yt.gpuType===Md;if(yt.isInterleavedBufferAttribute){const vt=yt.data,Ht=vt.stride,Pt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let ie=0;ie<Z.locationSize;ie++)_(Z.location+ie,vt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ie=0;ie<Z.locationSize;ie++)M(Z.location+ie);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ie=0;ie<Z.locationSize;ie++)N(Z.location+ie,L/Z.locationSize,j,bt,Ht*ft,(Pt+L/Z.locationSize*ie)*ft,Et)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<Z.locationSize;vt++)_(Z.location+vt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<Z.locationSize;vt++)M(Z.location+vt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let vt=0;vt<Z.locationSize;vt++)N(Z.location+vt,L/Z.locationSize,j,bt,L*ft,L/Z.locationSize*vt*ft,Et)}}else if(z!==void 0){const bt=z[K];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(Z.location,bt);break;case 3:o.vertexAttrib3fv(Z.location,bt);break;case 4:o.vertexAttrib4fv(Z.location,bt);break;default:o.vertexAttrib1fv(Z.location,bt)}}}}B()}function q(){V();for(const R in s){const I=s[R];for(const it in I){const at=I[it];for(const ut in at)v(at[ut].object),delete at[ut];delete I[it]}delete s[R]}}function H(R){if(s[R.id]===void 0)return;const I=s[R.id];for(const it in I){const at=I[it];for(const ut in at)v(at[ut].object),delete at[ut];delete I[it]}delete s[R.id]}function O(R){for(const I in s){const it=s[I];if(it[R.id]===void 0)continue;const at=it[R.id];for(const ut in at)v(at[ut].object),delete at[ut];delete it[R.id]}}function V(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function ub(o,e,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,x){x!==0&&(o.drawArraysInstanced(s,p,v,x),i.update(v,s,x))}function d(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,x);let y=0;for(let b=0;b<x;b++)y+=v[b];i.update(y,s,1)}function m(p,v,x,S){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],v[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,x);let b=0;for(let C=0;C<x;C++)b+=v[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function fb(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ei&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ua&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==oa&&!V)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:q,maxSamples:H}}function hb(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new gs,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||s!==0||l;return l=S,s=x.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=v(x,S,0)},this.setState=function(x,S,y){const b=x.clippingPlanes,C=x.clipIntersection,M=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!M)u?v(null):p();else{const B=u?0:s,N=B*4;let D=_.clippingState||null;m.value=D,D=v(b,S,N,y);for(let q=0;q!==N;++q)D[q]=i[q];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,S,y,b){const C=x!==null?x.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const _=y+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,D=y;N!==C;++N,D+=4)h.copy(x[N]).applyMatrix4(B,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function db(o){let e=new WeakMap;function i(h,d){return d===Gh?h.mapping=Er:d===Vh&&(h.mapping=Tr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new fM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const vr=4,$_=[.125,.215,.35,.446,.526,.582],xs=20,Th=new ev,t0=new ye;let bh=null,Ah=0,Rh=0,Ch=!1;const _s=(1+Math.sqrt(5))/2,gr=1/_s,e0=[new Q(-_s,gr,0),new Q(_s,gr,0),new Q(-gr,0,_s),new Q(gr,0,_s),new Q(0,_s,-gr),new Q(0,_s,gr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class n0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Bo,format:Ei,colorSpace:Rr,depthBuffer:!1},l=i0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(u)),this._blurMaterial=mb(u,e,i)}return l}_compileMaterial(e){const i=new Mn(this._lodPlanes[0],e);this._renderer.compile(i,Th)}_sceneToCubeUV(e,i,s,l){const d=new ei(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(t0),v.toneMapping=Va,v.autoClear=!1;const y=new q0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new Mn(new Ui,y);let C=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,C=!0):(y.color.copy(t0),C=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const N=this._cubeSize;xc(l,B*N,_>2?N:0,N,N),v.setRenderTarget(l),C&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=M}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Er||e.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Mn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;xc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Th)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=e0[(l-u-1)%e0.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Mn(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*xs-1),C=u/b,M=isFinite(u)?1+Math.floor(v*C):xs;M>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${xs}`);const _=[];let B=0;for(let O=0;O<xs;++O){const V=O/C,w=Math.exp(-V*V/2);_.push(w),O===0?B+=w:O<M&&(B+=2*w)}for(let O=0;O<_.length;O++)_[O]=_[O]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const D=this._sizeLods[l],q=3*D*(l>N-vr?l-N+vr:0),H=4*(this._cubeSize-D);xc(i,q,H,3*D,2*D),m.setRenderTarget(i),m.render(x,Th)}}function pb(o){const e=[],i=[],s=[];let l=o;const u=o-vr+1+$_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vr?m=$_[h-o+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,b=6,C=3,M=2,_=1,B=new Float32Array(C*b*y),N=new Float32Array(M*b*y),D=new Float32Array(_*b*y);for(let H=0;H<y;H++){const O=H%3*2/3-1,V=H>2?0:-1,w=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];B.set(w,C*b*H),N.set(S,M*b*H);const R=[H,H,H,H,H,H];D.set(R,_*b*H)}const q=new zi;q.setAttribute("position",new Ni(B,C)),q.setAttribute("uv",new Ni(N,M)),q.setAttribute("faceIndex",new Ni(D,_)),e.push(q),l>vr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function i0(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Nc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function mb(o,e,i){const s=new Float32Array(xs),l=new Q(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function a0(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function s0(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function gb(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,v=m===Er||m===Tr;if(p||v){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new n0(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new n0(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function _b(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_r("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function vb(o,e,i,s){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(x){const S=[],y=x.index,b=x.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let N=0,D=B.length;N<D;N+=3){const q=B[N+0],H=B[N+1],O=B[N+2];S.push(q,H,H,O,O,q)}}else if(b!==void 0){const B=b.array;C=b.version;for(let N=0,D=B.length/3-1;N<D;N+=3){const q=N+0,H=N+1,O=N+2;S.push(q,H,H,O,O,q)}}else return;const M=new(H0(S)?j0:Y0)(S,1);M.version=C;const _=u.get(x);_&&e.remove(_),u.set(x,M)}function v(x){const S=u.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function xb(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(s,y,u,S*h),i.update(y,s,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(s,y,u,S*h,b),i.update(y,s,b))}function v(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,s,1)}function x(S,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,S,0,C,0,b);let _=0;for(let B=0;B<b;B++)_+=y[B]*C[B];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function Sb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function yb(o,e,i){const s=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==x){let R=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let q=d.attributes.position.count*D,H=1;q>e.maxTextureSize&&(H=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const O=new Float32Array(q*H*4*x),V=new V0(O,q,H,x);V.type=oa,V.needsUpdate=!0;const w=D*4;for(let I=0;I<x;I++){const it=_[I],at=B[I],ut=N[I],pt=q*H*4*I;for(let z=0;z<it.count;z++){const K=z*w;b===!0&&(l.fromBufferAttribute(it,z),O[pt+K+0]=l.x,O[pt+K+1]=l.y,O[pt+K+2]=l.z,O[pt+K+3]=0),C===!0&&(l.fromBufferAttribute(at,z),O[pt+K+4]=l.x,O[pt+K+5]=l.y,O[pt+K+6]=l.z,O[pt+K+7]=0),M===!0&&(l.fromBufferAttribute(ut,z),O[pt+K+8]=l.x,O[pt+K+9]=l.y,O[pt+K+10]=l.z,O[pt+K+11]=ut.itemSize===4?l.w:1)}}S={count:x,texture:V,size:new Ce(q,H)},s.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Mb(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,x=e.get(m,v);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const iv=new Xn,r0=new $0(1,1),av=new V0,sv=new Zy,rv=new Q0,o0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),f0=new Float32Array(4);function Ur(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=o0[l];if(u===void 0&&(u=new Float32Array(l),o0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Pc(o,e){let i=l0[e];i===void 0&&(i=new Int32Array(e),l0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function Eb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function Rb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,s))return;f0.set(s),o.uniformMatrix2fv(this.addr,!1,f0),fn(i,s)}}function Cb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,s))return;u0.set(s),o.uniformMatrix3fv(this.addr,!1,u0),fn(i,s)}}function wb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,s))return;c0.set(s),o.uniformMatrix4fv(this.addr,!1,c0),fn(i,s)}}function Db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function Lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function Nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function Ob(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function Pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function Bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function Ib(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(r0.compareFunction=F0,u=r0):u=iv,i.setTexture2D(e||u,l)}function Fb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||sv,l)}function Hb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||rv,l)}function Gb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||av,l)}function Vb(o){switch(o){case 5126:return Eb;case 35664:return Tb;case 35665:return bb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return wb;case 5124:case 35670:return Db;case 35667:case 35671:return Ub;case 35668:case 35672:return Lb;case 35669:case 35673:return Nb;case 5125:return Ob;case 36294:return zb;case 36295:return Pb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}function kb(o,e){o.uniform1fv(this.addr,e)}function Xb(o,e){const i=Ur(e,this.size,2);o.uniform2fv(this.addr,i)}function Wb(o,e){const i=Ur(e,this.size,3);o.uniform3fv(this.addr,i)}function qb(o,e){const i=Ur(e,this.size,4);o.uniform4fv(this.addr,i)}function Yb(o,e){const i=Ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function jb(o,e){const i=Ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Zb(o,e){const i=Ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Kb(o,e){o.uniform1iv(this.addr,e)}function Qb(o,e){o.uniform2iv(this.addr,e)}function Jb(o,e){o.uniform3iv(this.addr,e)}function $b(o,e){o.uniform4iv(this.addr,e)}function t1(o,e){o.uniform1uiv(this.addr,e)}function e1(o,e){o.uniform2uiv(this.addr,e)}function n1(o,e){o.uniform3uiv(this.addr,e)}function i1(o,e){o.uniform4uiv(this.addr,e)}function a1(o,e,i){const s=this.cache,l=e.length,u=Pc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||iv,u[h])}function s1(o,e,i){const s=this.cache,l=e.length,u=Pc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||sv,u[h])}function r1(o,e,i){const s=this.cache,l=e.length,u=Pc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||rv,u[h])}function o1(o,e,i){const s=this.cache,l=e.length,u=Pc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||av,u[h])}function l1(o){switch(o){case 5126:return kb;case 35664:return Xb;case 35665:return Wb;case 35666:return qb;case 35674:return Yb;case 35675:return jb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Vb(i.type)}}class u1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=l1(i.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function h0(o,e){o.seq.push(e),o.map[e.id]=e}function h1(o,e,i){const s=o.name,l=s.length;for(wh.lastIndex=0;;){const u=wh.exec(s),h=wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){h0(i,p===void 0?new c1(d,o,e):new u1(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new f1(d),h0(i,x)),i=x}}}class Ac{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);h1(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function d0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const d1=37297;let p1=0;function m1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const p0=new oe;function g1(o){Re._getMatrix(p0,Re.workingColorSpace,o);const e=`mat3( ${p0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Rc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function m0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+m1(o.getShaderSource(e),h)}else return l}function _1(o,e){const i=g1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function v1(o,e){let i;switch(e){case yy:i="Linear";break;case My:i="Reinhard";break;case Ey:i="Cineon";break;case Ty:i="ACESFilmic";break;case Ay:i="AgX";break;case Ry:i="Neutral";break;case by:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new Q;function x1(){Re.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function y1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function M1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function zo(o){return o!==""}function g0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(o){return o.replace(E1,b1)}const T1=new Map;function b1(o,e){let i=le[e];if(i===void 0){const s=T1.get(e);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return vd(i)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(o){return o.replace(A1,R1)}function R1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function w1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D1(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Tr&&(e="ENVMAP_MODE_REFRACTION"),e}function U1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case A0:e="ENVMAP_BLENDING_MULTIPLY";break;case xy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function L1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function N1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=C1(i),p=w1(i),v=D1(i),x=U1(i),S=L1(i),y=S1(i),b=y1(u),C=l.createProgram();let M,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(zo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(M=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[x0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?le.tonemapping_pars_fragment:"",i.toneMapping!==Va?v1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,_1("linearToOutputTexel",i.outputColorSpace),x1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),h=vd(h),h=g0(h,i),h=_0(h,i),d=vd(d),d=g0(d,i),d=_0(d,i),h=v0(h),d=v0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+M+h,D=B+_+d,q=d0(l,l.VERTEX_SHADER,N),H=d0(l,l.FRAGMENT_SHADER,D);l.attachShader(C,q),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(I){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(q).trim(),ut=l.getShaderInfoLog(H).trim();let pt=!0,z=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,q,H);else{const K=m0(l,q,"vertex"),Z=m0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+it+`
`+K+`
`+Z)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(at===""||ut==="")&&(z=!1);z&&(I.diagnostics={runnable:pt,programLog:it,vertexShader:{log:at,prefix:M},fragmentShader:{log:ut,prefix:_}})}l.deleteShader(q),l.deleteShader(H),V=new Ac(l,C),w=M1(l,C)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,d1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=q,this.fragmentShader=H,this}let O1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new P1(e),i.set(e,s)),s}}class P1{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}}function B1(o,e,i,s,l,u,h){const d=new X0,m=new z1,p=new Set,v=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,I,it,at){const ut=it.fog,pt=at.geometry,z=w.isMeshStandardMaterial?it.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),Z=K&&K.mapping===Nc?K.image.height:null,yt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const bt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,L=bt!==void 0?bt.length:0;let st=0;pt.morphAttributes.position!==void 0&&(st=1),pt.morphAttributes.normal!==void 0&&(st=2),pt.morphAttributes.color!==void 0&&(st=3);let xt,j,ft,Et;if(yt){const Ee=Di[yt];xt=Ee.vertexShader,j=Ee.fragmentShader}else xt=w.vertexShader,j=w.fragmentShader,m.update(w),ft=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const vt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),Pt=at.isInstancedMesh===!0,ie=at.isBatchedMesh===!0,Ne=!!w.map,ue=!!w.matcap,We=!!K,F=!!w.aoMap,Tn=!!w.lightMap,ce=!!w.bumpMap,de=!!w.normalMap,Wt=!!w.displacementMap,De=!!w.emissiveMap,Xt=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,et=w.clearcoat>0,ht=w.dispersion>0,Mt=w.iridescence>0,mt=w.sheen>0,Vt=w.transmission>0,wt=T&&!!w.anisotropyMap,Bt=et&&!!w.clearcoatMap,pe=et&&!!w.clearcoatNormalMap,At=et&&!!w.clearcoatRoughnessMap,It=Mt&&!!w.iridescenceMap,qt=Mt&&!!w.iridescenceThicknessMap,kt=mt&&!!w.sheenColorMap,Ot=mt&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,ae=!!w.specularColorMap,Oe=!!w.specularIntensityMap,X=Vt&&!!w.transmissionMap,Rt=Vt&&!!w.thicknessMap,lt=!!w.gradientMap,_t=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,Jt=!!w.extensions;let qe=Va;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(qe=o.toneMapping);const on={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:j,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ie,batchingColor:ie&&at._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&at.instanceColor!==null,instancingMorph:Pt&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:ue,envMap:We,envMapMode:We&&K.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:Tn,bumpMap:ce,normalMap:de,displacementMap:S&&Wt,emissiveMap:De,normalMapObjectSpace:de&&w.normalMapType===Uy,normalMapTangentSpace:de&&w.normalMapType===I0,metalnessMap:Xt,roughnessMap:U,anisotropy:T,anisotropyMap:wt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:pe,clearcoatRoughnessMap:At,dispersion:ht,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:mt,sheenColorMap:kt,sheenRoughnessMap:Ot,specularMap:Qt,specularColorMap:ae,specularIntensityMap:Oe,transmission:Vt,transmissionMap:X,thicknessMap:Rt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ne&&C(w.map.channel),aoMapUv:F&&C(w.aoMap.channel),lightMapUv:Tn&&C(w.lightMap.channel),bumpMapUv:ce&&C(w.bumpMap.channel),normalMapUv:de&&C(w.normalMap.channel),displacementMapUv:Wt&&C(w.displacementMap.channel),emissiveMapUv:De&&C(w.emissiveMap.channel),metalnessMapUv:Xt&&C(w.metalnessMap.channel),roughnessMapUv:U&&C(w.roughnessMap.channel),anisotropyMapUv:wt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&C(w.sheenRoughnessMap.channel),specularMapUv:Qt&&C(w.specularMap.channel),specularColorMapUv:ae&&C(w.specularColorMap.channel),specularIntensityMapUv:Oe&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:_t&&C(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(de||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!pt.attributes.uv&&(Ne||_t),fog:!!ut,useFog:w.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ht,skinning:at.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:st,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||ie)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return on.vertexUv1s=p.has(1),on.vertexUv2s=p.has(2),on.vertexUv3s=p.has(3),p.clear(),on}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)R.push(I),R.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(B(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=b[w.type];let I;if(R){const it=Di[R];I=oM.clone(it.uniforms)}else I=w.uniforms;return I}function q(w,R){let I;for(let it=0,at=v.length;it<at;it++){const ut=v[it];if(ut.cacheKey===R){I=ut,++I.usedTimes;break}}return I===void 0&&(I=new N1(o,R,w,u),v.push(I)),I}function H(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function O(w){m.remove(w)}function V(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:q,releaseProgram:H,releaseShaderCache:O,programs:v,dispose:V}}function I1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function F1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function S0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function y0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x,S,y,b,C,M){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:y,groupOrder:b,renderOrder:x.renderOrder,z:C,group:M},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=C,_.group=M),e++,_}function d(x,S,y,b,C,M){const _=h(x,S,y,b,C,M);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,S,y,b,C,M){const _=h(x,S,y,b,C,M);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||F1),s.length>1&&s.sort(S||S0),l.length>1&&l.sort(S||S0)}function v(){for(let x=e,S=o.length;x<S;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function H1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new y0,o.set(s,[h])):l>=u.length?(h=new y0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function G1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new ye};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function V1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let k1=0;function X1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function W1(o){const e=new G1,i=V1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,u=new je,h=new je;function d(p){let v=0,x=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,b=0,C=0,M=0,_=0,B=0,N=0,D=0,q=0,H=0,O=0;p.sort(X1);for(let w=0,R=p.length;w<R;w++){const I=p[w],it=I.color,at=I.intensity,ut=I.distance,pt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=it.r*at,x+=it.g*at,S+=it.b*at;else if(I.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(I.sh.coefficients[z],at);O++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,Z=i.get(I);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=pt,s.directionalShadowMatrix[y]=I.shadow.matrix,B++}s.directional[y]=z,y++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(it).multiplyScalar(at),z.distance=ut,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,s.spot[C]=z;const K=I.shadow;if(I.map&&(s.spotLightMap[q]=I.map,q++,K.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[C]=K.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=pt,D++}C++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(it).multiplyScalar(at),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=z,M++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const K=I.shadow,Z=i.get(I);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=pt,s.pointShadowMatrix[b]=I.shadow.matrix,N++}s.point[b]=z,b++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(at),z.groundColor.copy(I.groundColor).multiplyScalar(at),s.hemi[_]=z,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=S;const V=s.hash;(V.directionalLength!==y||V.pointLength!==b||V.spotLength!==C||V.rectAreaLength!==M||V.hemiLength!==_||V.numDirectionalShadows!==B||V.numPointShadows!==N||V.numSpotShadows!==D||V.numSpotMaps!==q||V.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+q-H,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=O,V.directionalLength=y,V.pointLength=b,V.spotLength=C,V.rectAreaLength=M,V.hemiLength=_,V.numDirectionalShadows=B,V.numPointShadows=N,V.numSpotShadows=D,V.numSpotMaps=q,V.numLightProbes=O,s.version=k1++)}function m(p,v){let x=0,S=0,y=0,b=0,C=0;const M=v.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const N=p[_];if(N.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(N.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function M0(o){const e=new W1(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function q1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new M0(o),e.set(l,[d])):u>=h.length?(d=new M0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function Z1(o,e,i){let s=new Cd;const l=new Ce,u=new Ce,h=new He,d=new _M({depthPacking:Dy}),m=new vM,p={},v=i.maxTextureSize,x={[ka]:kn,[kn]:ka,[ra]:ra},S=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Y1,fragmentShader:j1}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new zi;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Mn(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T0;let _=this.type;this.render=function(H,O,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),it=o.state;it.setBlending(Ga),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=_!==sa&&this.type===sa,ut=_===sa&&this.type!==sa;for(let pt=0,z=H.length;pt<z;pt++){const K=H[pt],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/yt.x),l.x=u.x*yt.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/yt.y),l.y=u.y*yt.y,Z.mapSize.y=u.y)),Z.map===null||at===!0||ut===!0){const L=this.type!==sa?{minFilter:Ti,magFilter:Ti}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Es(l.x,l.y,L),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const bt=Z.getViewportCount();for(let L=0;L<bt;L++){const st=Z.getViewport(L);h.set(u.x*st.x,u.y*st.y,u.x*st.z,u.y*st.w),it.viewport(h),Z.updateMatrices(K,L),s=Z.getFrustum(),D(O,V,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===sa&&B(Z,V),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,I)};function B(H,O){const V=e.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Es(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,V,S,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,V,y,C,null)}function N(H,O,V,w){let R=null;const I=V.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)R=I;else if(R=V.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const it=R.uuid,at=O.uuid;let ut=p[it];ut===void 0&&(ut={},p[it]=ut);let pt=ut[at];pt===void 0&&(pt=R.clone(),ut[at]=pt,O.addEventListener("dispose",q)),R=pt}if(R.visible=O.visible,R.wireframe=O.wireframe,w===sa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:x[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const it=o.properties.get(R);it.light=V}return R}function D(H,O,V,w,R){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===sa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,H.matrixWorld);const at=e.update(H),ut=H.material;if(Array.isArray(ut)){const pt=at.groups;for(let z=0,K=pt.length;z<K;z++){const Z=pt[z],yt=ut[Z.materialIndex];if(yt&&yt.visible){const bt=N(H,yt,w,R);H.onBeforeShadow(o,H,O,V,at,bt,Z),o.renderBufferDirect(V,null,at,bt,H,Z),H.onAfterShadow(o,H,O,V,at,bt,Z)}}}else if(ut.visible){const pt=N(H,ut,w,R);H.onBeforeShadow(o,H,O,V,at,pt,null),o.renderBufferDirect(V,null,at,pt,H,null),H.onAfterShadow(o,H,O,V,at,pt,null)}}const it=H.children;for(let at=0,ut=it.length;at<ut;at++)D(it[at],O,V,w,R)}function q(H){H.target.removeEventListener("dispose",q);for(const V in p){const w=p[V],R=H.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const K1={[Oh]:zh,[Ph]:Fh,[Bh]:Hh,[Mr]:Ih,[zh]:Oh,[Fh]:Ph,[Hh]:Bh,[Ih]:Mr};function Q1(o,e){function i(){let X=!1;const Rt=new He;let lt=null;const _t=new He(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!X&&(o.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Dt,Jt,qe,on){on===!0&&(Ct*=qe,Dt*=qe,Jt*=qe),Rt.set(Ct,Dt,Jt,qe),_t.equals(Rt)===!1&&(o.clearColor(Ct,Dt,Jt,qe),_t.copy(Rt))},reset:function(){X=!1,lt=null,_t.set(-1,0,0,0)}}}function s(){let X=!1,Rt=!1,lt=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const Jt=e.get("EXT_clip_control");Rt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const qe=Ct;Ct=null,this.setClear(qe)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?vt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!X&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=K1[Dt]),_t!==Dt){switch(Dt){case Oh:o.depthFunc(o.NEVER);break;case zh:o.depthFunc(o.ALWAYS);break;case Ph:o.depthFunc(o.LESS);break;case Mr:o.depthFunc(o.LEQUAL);break;case Bh:o.depthFunc(o.EQUAL);break;case Ih:o.depthFunc(o.GEQUAL);break;case Fh:o.depthFunc(o.GREATER);break;case Hh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){X=!1,lt=null,_t=null,Ct=null,Rt=!1}}}function l(){let X=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,Jt=null,qe=null,on=null;return{setTest:function(Ee){X||(Ee?vt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!X&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,mn,di){(lt!==Ee||_t!==mn||Ct!==di)&&(o.stencilFunc(Ee,mn,di),lt=Ee,_t=mn,Ct=di)},setOp:function(Ee,mn,di){(Dt!==Ee||Jt!==mn||qe!==di)&&(o.stencilOp(Ee,mn,di),Dt=Ee,Jt=mn,qe=di)},setLocked:function(Ee){X=Ee},setClear:function(Ee){on!==Ee&&(o.clearStencil(Ee),on=Ee)},reset:function(){X=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,Jt=null,qe=null,on=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,B=null,N=null,D=null,q=null,H=null,O=new ye(0,0,0),V=0,w=!1,R=null,I=null,it=null,at=null,ut=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let yt=null,bt={};const L=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),xt=new He().fromArray(L),j=new He().fromArray(st);function ft(X,Rt,lt,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(X,Dt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<lt;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Et={};Et[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Mr),ce(!1),de(y_),vt(o.CULL_FACE),F(Ga);function vt(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Ht(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Pt(X,Rt){return x[X]!==Rt?(o.bindFramebuffer(X,Rt),x[X]=Rt,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ie(X,Rt){let lt=y,_t=!1;if(X){lt=S.get(Rt),lt===void 0&&(lt=[],S.set(Rt,lt));const Ct=X.textures;if(lt.length!==Ct.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++)lt[Dt]=o.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Ne(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const ue={[vs]:o.FUNC_ADD,[ny]:o.FUNC_SUBTRACT,[iy]:o.FUNC_REVERSE_SUBTRACT};ue[ay]=o.MIN,ue[sy]=o.MAX;const We={[ry]:o.ZERO,[oy]:o.ONE,[ly]:o.SRC_COLOR,[Lh]:o.SRC_ALPHA,[py]:o.SRC_ALPHA_SATURATE,[hy]:o.DST_COLOR,[uy]:o.DST_ALPHA,[cy]:o.ONE_MINUS_SRC_COLOR,[Nh]:o.ONE_MINUS_SRC_ALPHA,[dy]:o.ONE_MINUS_DST_COLOR,[fy]:o.ONE_MINUS_DST_ALPHA,[my]:o.CONSTANT_COLOR,[gy]:o.ONE_MINUS_CONSTANT_COLOR,[_y]:o.CONSTANT_ALPHA,[vy]:o.ONE_MINUS_CONSTANT_ALPHA};function F(X,Rt,lt,_t,Ct,Dt,Jt,qe,on,Ee){if(X===Ga){C===!0&&(Ht(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),X!==ey){if(X!==M||Ee!==w){if((_!==vs||D!==vs)&&(o.blendEquation(o.FUNC_ADD),_=vs,D=vs),Ee)switch(X){case xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case M_:o.blendFunc(o.ONE,o.ONE);break;case E_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case T_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case M_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case E_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case T_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,N=null,q=null,H=null,O.set(0,0,0),V=0,M=X,w=Ee}return}Ct=Ct||Rt,Dt=Dt||lt,Jt=Jt||_t,(Rt!==_||Ct!==D)&&(o.blendEquationSeparate(ue[Rt],ue[Ct]),_=Rt,D=Ct),(lt!==B||_t!==N||Dt!==q||Jt!==H)&&(o.blendFuncSeparate(We[lt],We[_t],We[Dt],We[Jt]),B=lt,N=_t,q=Dt,H=Jt),(qe.equals(O)===!1||on!==V)&&(o.blendColor(qe.r,qe.g,qe.b,on),O.copy(qe),V=on),M=X,w=!1}function Tn(X,Rt){X.side===ra?Ht(o.CULL_FACE):vt(o.CULL_FACE);let lt=X.side===kn;Rt&&(lt=!lt),ce(lt),X.blending===xr&&X.transparent===!1?F(Ga):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function de(X){X!==$S?(vt(o.CULL_FACE),X!==I&&(X===y_?o.cullFace(o.BACK):X===ty?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),I=X}function Wt(X){X!==it&&(z&&o.lineWidth(X),it=X)}function De(X,Rt,lt){X?(vt(o.POLYGON_OFFSET_FILL),(at!==Rt||ut!==lt)&&(o.polygonOffset(Rt,lt),at=Rt,ut=lt)):Ht(o.POLYGON_OFFSET_FILL)}function Xt(X){X?vt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+pt-1),yt!==X&&(o.activeTexture(X),yt=X)}function T(X,Rt,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+pt-1:lt=yt);let _t=bt[lt];_t===void 0&&(_t={type:void 0,texture:void 0},bt[lt]=_t),(_t.type!==X||_t.texture!==Rt)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(X,Rt||Et[X]),_t.type=X,_t.texture=Rt)}function et(){const X=bt[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(X){xt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Ot(X){j.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Qt(X,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let _t=lt.get(X);_t===void 0&&(_t=o.getUniformBlockIndex(Rt,X.name),lt.set(X,_t))}function ae(X,Rt){const _t=p.get(Rt).get(X);m.get(Rt)!==_t&&(o.uniformBlockBinding(Rt,_t,X.__bindingPointIndex),m.set(Rt,_t))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,bt={},x={},S=new WeakMap,y=[],b=null,C=!1,M=null,_=null,B=null,N=null,D=null,q=null,H=null,O=new ye(0,0,0),V=0,w=!1,R=null,I=null,it=null,at=null,ut=null,xt.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:vt,disable:Ht,bindFramebuffer:Pt,drawBuffers:ie,useProgram:Ne,setBlending:F,setMaterial:Tn,setFlipSided:ce,setCullFace:de,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:Xt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:It,texImage3D:qt,updateUBOMapping:Qt,uniformBlockBinding:ae,texStorage2D:pe,texStorage3D:At,texSubImage2D:mt,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Bt,scissor:kt,viewport:Ot,reset:Oe}}function J1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,v=new WeakMap;let x;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return y?new OffscreenCanvas(U,T):wc("canvas")}function C(U,T,et){let ht=1;const Mt=Xt(U);if((Mt.width>et||Mt.height>et)&&(ht=et/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(ht*Mt.width),Vt=Math.floor(ht*Mt.height);x===void 0&&(x=b(mt,Vt));const wt=T?b(mt,Vt):x;return wt.width=mt,wt.height=Vt,wt.getContext("2d").drawImage(U,0,0,mt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Vt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,T,et,ht,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=T;if(T===o.RED&&(et===o.FLOAT&&(mt=o.R32F),et===o.HALF_FLOAT&&(mt=o.R16F),et===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.R8UI),et===o.UNSIGNED_SHORT&&(mt=o.R16UI),et===o.UNSIGNED_INT&&(mt=o.R32UI),et===o.BYTE&&(mt=o.R8I),et===o.SHORT&&(mt=o.R16I),et===o.INT&&(mt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(mt=o.RG32F),et===o.HALF_FLOAT&&(mt=o.RG16F),et===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RG8UI),et===o.UNSIGNED_SHORT&&(mt=o.RG16UI),et===o.UNSIGNED_INT&&(mt=o.RG32UI),et===o.BYTE&&(mt=o.RG8I),et===o.SHORT&&(mt=o.RG16I),et===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),et===o.UNSIGNED_INT&&(mt=o.RGB32UI),et===o.BYTE&&(mt=o.RGB8I),et===o.SHORT&&(mt=o.RGB16I),et===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),et===o.UNSIGNED_INT&&(mt=o.RGBA32UI),et===o.BYTE&&(mt=o.RGBA8I),et===o.SHORT&&(mt=o.RGBA16I),et===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Vt=Mt?Rc:Re.getTransfer(ht);et===o.FLOAT&&(mt=o.RGBA32F),et===o.HALF_FLOAT&&(mt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(mt=Vt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function D(U,T){let et;return U?T===null||T===Ms||T===br?et=o.DEPTH24_STENCIL8:T===oa?et=o.DEPTH32F_STENCIL8:T===Po&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===br?et=o.DEPTH_COMPONENT24:T===oa?et=o.DEPTH_COMPONENT32F:T===Po&&(et=o.DEPTH_COMPONENT16),et}function q(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ti&&U.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function H(U){const T=U.target;T.removeEventListener("dispose",H),V(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T)}function V(U){const T=s.get(U);if(T.__webglInit===void 0)return;const et=U.source,ht=S.get(et);if(ht){const Mt=ht[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(U),Object.keys(ht).length===0&&S.delete(et)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const et=U.source,ht=S.get(et);delete ht[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Mt=0;Mt<T.__webglFramebuffer[ht].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[ht][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let ht=0,Mt=et.length;ht<Mt;ht++){const mt=s.get(et[ht]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(U)}let I=0;function it(){I=0}function at(){const U=I;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),I+=1,U}function ut(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function pt(U,T){const et=s.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(et,U,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function z(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){j(et,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function K(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){j(et,U,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){ft(et,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const yt={[kh]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[Xh]:o.MIRRORED_REPEAT},bt={[Ti]:o.NEAREST,[Cy]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[Qf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},L={[Ly]:o.NEVER,[Iy]:o.ALWAYS,[Ny]:o.LESS,[F0]:o.LEQUAL,[Oy]:o.EQUAL,[By]:o.GEQUAL,[zy]:o.GREATER,[Py]:o.NOTEQUAL};function st(U,T){if(T.type===oa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===Qf||T.magFilter===Jl||T.magFilter===ys||T.minFilter===Li||T.minFilter===Qf||T.minFilter===Jl||T.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,yt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,bt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==Jl&&T.minFilter!==ys||T.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function xt(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",H));const ht=T.source;let Mt=S.get(ht);Mt===void 0&&(Mt={},S.set(ht,Mt));const mt=ut(T);if(mt!==U.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[mt].usedTimes++;const Vt=Mt[U.__cacheKey];Vt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(T)),U.__cacheKey=mt,U.__webglTexture=Mt[mt].texture}return et}function j(U,T,et){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const Mt=xt(U,T),mt=T.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+et);const Vt=s.get(mt);if(mt.version!==Vt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const wt=Re.getPrimaries(Re.workingColorSpace),Bt=T.colorSpace===Ha?null:Re.getPrimaries(T.colorSpace),pe=T.colorSpace===Ha||wt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let At=C(T.image,!1,l.maxTextureSize);At=De(T,At);const It=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let kt=N(T.internalFormat,It,qt,T.colorSpace,T.isVideoTexture);st(ht,T);let Ot;const Qt=T.mipmaps,ae=T.isVideoTexture!==!0,Oe=Vt.__version===void 0||Mt===!0,X=mt.dataReady,Rt=q(T,At);if(T.isDepthTexture)kt=D(T.format===Ar,T.type),Oe&&(ae?i.texStorage2D(o.TEXTURE_2D,1,kt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,It,qt,null));else if(T.isDataTexture)if(Qt.length>0){ae&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Qt[0].width,Qt[0].height);for(let lt=0,_t=Qt.length;lt<_t;lt++)Ot=Qt[lt],ae?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,It,qt,Ot.data);T.generateMipmaps=!1}else ae?(Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,It,qt,At.data)):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,It,qt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,Qt[0].width,Qt[0].height,At.depth);for(let lt=0,_t=Qt.length;lt<_t;lt++)if(Ot=Qt[lt],T.format!==Ei)if(It!==null)if(ae){if(X)if(T.layerUpdates.size>0){const Ct=J_(Ot.width,Ot.height,T.format,T.type);for(const Dt of T.layerUpdates){const Jt=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Dt,Ot.width,Ot.height,1,It,Jt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,It,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,It,qt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Ot.width,Ot.height,At.depth,0,It,qt,Ot.data)}else{ae&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Qt[0].width,Qt[0].height);for(let lt=0,_t=Qt.length;lt<_t;lt++)Ot=Qt[lt],T.format!==Ei?It!==null?ae?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,It,qt,Ot.data)}else if(T.isDataArrayTexture)if(ae){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,At.width,At.height,At.depth),X)if(T.layerUpdates.size>0){const lt=J_(At.width,At.height,T.format,T.type);for(const _t of T.layerUpdates){const Ct=At.data.subarray(_t*lt/At.data.BYTES_PER_ELEMENT,(_t+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,It,qt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,qt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,At.width,At.height,At.depth,0,It,qt,At.data);else if(T.isData3DTexture)ae?(Oe&&i.texStorage3D(o.TEXTURE_3D,Rt,kt,At.width,At.height,At.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,qt,At.data)):i.texImage3D(o.TEXTURE_3D,0,kt,At.width,At.height,At.depth,0,It,qt,At.data);else if(T.isFramebufferTexture){if(Oe)if(ae)i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height);else{let lt=At.width,_t=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,kt,lt,_t,0,It,qt,null),lt>>=1,_t>>=1}}else if(Qt.length>0){if(ae&&Oe){const lt=Xt(Qt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}for(let lt=0,_t=Qt.length;lt<_t;lt++)Ot=Qt[lt],ae?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,It,qt,Ot):i.texImage2D(o.TEXTURE_2D,lt,kt,It,qt,Ot);T.generateMipmaps=!1}else if(ae){if(Oe){const lt=Xt(At);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,qt,At)}else i.texImage2D(o.TEXTURE_2D,0,kt,It,qt,At);M(T)&&_(ht),Vt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ft(U,T,et){if(T.image.length!==6)return;const ht=xt(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const mt=s.get(Mt);if(Mt.version!==mt.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Vt=Re.getPrimaries(Re.workingColorSpace),wt=T.colorSpace===Ha?null:Re.getPrimaries(T.colorSpace),Bt=T.colorSpace===Ha||Vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!pe&&!At?It[_t]=C(T.image[_t],!0,l.maxCubemapSize):It[_t]=At?T.image[_t].image:T.image[_t],It[_t]=De(T,It[_t]);const qt=It[0],kt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),Qt=N(T.internalFormat,kt,Ot,T.colorSpace),ae=T.isVideoTexture!==!0,Oe=mt.__version===void 0||ht===!0,X=Mt.dataReady;let Rt=q(T,qt);st(o.TEXTURE_CUBE_MAP,T);let lt;if(pe){ae&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Qt,qt.width,qt.height);for(let _t=0;_t<6;_t++){lt=It[_t].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];T.format!==Ei?kt!==null?ae?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,Qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,kt,Ot,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,Qt,Dt.width,Dt.height,0,kt,Ot,Dt.data)}}}else{if(lt=T.mipmaps,ae&&Oe){lt.length>0&&Rt++;const _t=Xt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Qt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ae?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,kt,Ot,It[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Qt,It[_t].width,It[_t].height,0,kt,Ot,It[_t].data);for(let Ct=0;Ct<lt.length;Ct++){const Jt=lt[Ct].image[_t].image;ae?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Jt.width,Jt.height,kt,Ot,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,Qt,Jt.width,Jt.height,0,kt,Ot,Jt.data)}}else{ae?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Ot,It[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Qt,kt,Ot,It[_t]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];ae?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,kt,Ot,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,Qt,kt,Ot,Dt.image[_t])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,et,ht,Mt,mt){const Vt=u.convert(et.format,et.colorSpace),wt=u.convert(et.type),Bt=N(et.internalFormat,Vt,wt,et.colorSpace),pe=s.get(T),At=s.get(et);if(At.__renderTarget=T,!pe.__hasExternalTextures){const It=Math.max(1,T.width>>mt),qt=Math.max(1,T.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,Bt,It,qt,T.depth,0,Vt,wt,null):i.texImage2D(Mt,mt,Bt,It,qt,0,Vt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Mt,At.__webglTexture,0,ce(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Mt,At.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(U,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const ht=T.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,mt=D(T.stencilBuffer,Mt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ce(T);de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,mt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const ht=T.textures;for(let Mt=0;Mt<ht.length;Mt++){const mt=ht[Mt],Vt=u.convert(mt.format,mt.colorSpace),wt=u.convert(mt.type),Bt=N(mt.internalFormat,Vt,wt,mt.colorSpace),pe=ce(T);et&&de(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Bt,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const Mt=ht.__webglTexture,mt=ce(T);if(T.depthTexture.format===Sr)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Ar)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Pt(U){const T=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ht}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),vt(T.__webglDepthbuffer[ht],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),vt(T.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(U,T,et){const ht=s.get(U);T!==void 0&&Et(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Pt(U)}function Ne(U){const T=U.texture,et=s.get(U),ht=s.get(T);U.addEventListener("dispose",O);const Mt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,h.memory.textures++),mt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)et.__webglFramebuffer[wt][Bt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let wt=0,Bt=Mt.length;wt<Bt;wt++){const pe=s.get(Mt[wt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&de(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const Bt=Mt[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const pe=u.convert(Bt.format,Bt.colorSpace),At=u.convert(Bt.type),It=N(Bt.internalFormat,pe,At,Bt.colorSpace,U.isXRRenderTarget===!0),qt=ce(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),st(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Et(et.__webglFramebuffer[wt][Bt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Bt);else Et(et.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Bt=Mt.length;wt<Bt;wt++){const pe=Mt[wt],At=s.get(pe);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),st(o.TEXTURE_2D,pe),Et(et.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(pe)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),st(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Et(et.__webglFramebuffer[Bt],U,T,o.COLOR_ATTACHMENT0,wt,Bt);else Et(et.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);M(T)&&_(wt),i.unbindTexture()}U.depthBuffer&&Pt(U)}function ue(U){const T=U.textures;for(let et=0,ht=T.length;et<ht;et++){const Mt=T[et];if(M(Mt)){const mt=B(U),Vt=s.get(Mt).__webglTexture;i.bindTexture(mt,Vt),_(mt),i.unbindTexture()}}}const We=[],F=[];function Tn(U){if(U.samples>0){if(de(U)===!1){const T=U.textures,et=U.width,ht=U.height;let Mt=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(U),wt=T.length>1;if(wt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const pe=s.get(T[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,Mt,o.NEAREST),m===!0&&(We.length=0,F.length=0,We.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(We.push(mt),F.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,We))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const pe=s.get(T[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ce(U){return Math.min(l.maxSamples,U.samples)}function de(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function De(U,T){const et=U.colorSpace,ht=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Rr&&et!==Ha&&(Re.getTransfer(et)===Fe?(ht!==Ei||Mt!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=pt,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=ie,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=de}function $1(o,e){function i(s,l=Ha){let u;const h=Re.getTransfer(l);if(s===ua)return o.UNSIGNED_BYTE;if(s===Ed)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Td)return o.UNSIGNED_SHORT_5_5_5_1;if(s===D0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===C0)return o.BYTE;if(s===w0)return o.SHORT;if(s===Po)return o.UNSIGNED_SHORT;if(s===Md)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===oa)return o.FLOAT;if(s===Bo)return o.HALF_FLOAT;if(s===U0)return o.ALPHA;if(s===L0)return o.RGB;if(s===Ei)return o.RGBA;if(s===N0)return o.LUMINANCE;if(s===O0)return o.LUMINANCE_ALPHA;if(s===Sr)return o.DEPTH_COMPONENT;if(s===Ar)return o.DEPTH_STENCIL;if(s===z0)return o.RED;if(s===bd)return o.RED_INTEGER;if(s===P0)return o.RG;if(s===Ad)return o.RG_INTEGER;if(s===Rd)return o.RGBA_INTEGER;if(s===yc||s===Mc||s===Ec||s===Tc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wh||s===qh||s===Yh||s===jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zh||s===Kh||s===Qh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Zh||s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===hd||s===dd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===bc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===B0||s===pd||s===md||s===gd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const tA={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Oo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const eA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Xn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Xa({vertexShader:eA,fragmentShader:nA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aA extends wr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,S=null,y=null,b=null;const C=new iA,M=i.getContextAttributes();let _=null,B=null;const N=[],D=[],q=new Ce;let H=null;const O=new ei;O.viewport=new He;const V=new ei;V.viewport=new He;const w=[O,V],R=new TM;let I=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ft=N[j];return ft===void 0&&(ft=new Dh,N[j]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(j){let ft=N[j];return ft===void 0&&(ft=new Dh,N[j]=ft),ft.getGripSpace()},this.getHand=function(j){let ft=N[j];return ft===void 0&&(ft=new Dh,N[j]=ft),ft.getHandSpace()};function at(j){const ft=D.indexOf(j.inputSource);if(ft===-1)return;const Et=N[ft];Et!==void 0&&(Et.update(j.inputSource,j.frame,p||h),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function ut(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",pt);for(let j=0;j<N.length;j++){const ft=D[j];ft!==null&&(D[j]=null,N[j].disconnect(ft))}I=null,it=null,C.reset(),e.setRenderTarget(_),y=null,S=null,x=null,l=null,B=null,xt.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(q.width,q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(q),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let Et=null,vt=null,Ht=null;M.depth&&(Ht=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=M.stencil?Ar:Sr,vt=M.stencil?br:Ms);const Pt={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Pt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Es(S.textureWidth,S.textureHeight,{format:Ei,type:ua,depthTexture:new $0(S.textureWidth,S.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Es(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pt(j){for(let ft=0;ft<j.removed.length;ft++){const Et=j.removed[ft],vt=D.indexOf(Et);vt>=0&&(D[vt]=null,N[vt].disconnect(Et))}for(let ft=0;ft<j.added.length;ft++){const Et=j.added[ft];let vt=D.indexOf(Et);if(vt===-1){for(let Pt=0;Pt<N.length;Pt++)if(Pt>=D.length){D.push(Et),vt=Pt;break}else if(D[Pt]===null){D[Pt]=Et,vt=Pt;break}if(vt===-1)break}const Ht=N[vt];Ht&&Ht.connect(Et)}}const z=new Q,K=new Q;function Z(j,ft,Et){z.setFromMatrixPosition(ft.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const vt=z.distanceTo(K),Ht=ft.projectionMatrix.elements,Pt=Et.projectionMatrix.elements,ie=Ht[14]/(Ht[10]-1),Ne=Ht[14]/(Ht[10]+1),ue=(Ht[9]+1)/Ht[5],We=(Ht[9]-1)/Ht[5],F=(Ht[8]-1)/Ht[0],Tn=(Pt[8]+1)/Pt[0],ce=ie*F,de=ie*Tn,Wt=vt/(-F+Tn),De=Wt*-F;if(ft.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(Wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ht[10]===-1)j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Xt=ie+Wt,U=Ne+Wt,T=ce-De,et=de+(vt-De),ht=ue*Ne/U*Xt,Mt=We*Ne/U*Xt;j.projectionMatrix.makePerspective(T,et,ht,Mt,Xt,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function yt(j,ft){ft===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ft.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ft=j.near,Et=j.far;C.texture!==null&&(C.depthNear>0&&(ft=C.depthNear),C.depthFar>0&&(Et=C.depthFar)),R.near=V.near=O.near=ft,R.far=V.far=O.far=Et,(I!==R.near||it!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,it=R.far),O.layers.mask=j.layers.mask|2,V.layers.mask=j.layers.mask|4,R.layers.mask=O.layers.mask|V.layers.mask;const vt=j.parent,Ht=R.cameras;yt(R,vt);for(let Pt=0;Pt<Ht.length;Pt++)yt(Ht[Pt],vt);Ht.length===2?Z(R,O,V):R.projectionMatrix.copy(O.projectionMatrix),bt(j,R,vt)};function bt(j,ft,Et){Et===null?j.matrix.copy(ft.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(ft.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_d*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(j){m=j,S!==null&&(S.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let L=null;function st(j,ft){if(v=ft.getViewerPose(p||h),b=ft,v!==null){const Et=v.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let vt=!1;Et.length!==R.cameras.length&&(R.cameras.length=0,vt=!0);for(let Pt=0;Pt<Et.length;Pt++){const ie=Et[Pt];let Ne=null;if(y!==null)Ne=y.getViewport(ie);else{const We=x.getViewSubImage(S,ie);Ne=We.viewport,Pt===0&&(e.setRenderTargetTextures(B,We.colorTexture,S.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(B))}let ue=w[Pt];ue===void 0&&(ue=new ei,ue.layers.enable(Pt),ue.viewport=new He,w[Pt]=ue),ue.matrix.fromArray(ie.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ie.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Pt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),vt===!0&&R.cameras.push(ue)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Pt=x.getDepthInformation(Et[0]);Pt&&Pt.isValid&&Pt.texture&&C.init(e,Pt,l.renderState)}}for(let Et=0;Et<N.length;Et++){const vt=D[Et],Ht=N[Et];vt!==null&&Ht!==void 0&&Ht.update(vt,ft,p||h)}L&&L(j,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const xt=new nv;xt.setAnimationLoop(st),this.setAnimationLoop=function(j){L=j},this.dispose=function(){}}}const ms=new Oi,sA=new je;function rA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Z0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),x(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,B,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=e.get(_),N=B.envMap,D=B.envMapRotation;N&&(M.envMap.value=N,ms.copy(D),ms.x*=-1,ms.y*=-1,ms.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),M.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(ms)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,B,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const B=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oA(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const D=N.program;s.uniformBlockBinding(B,D)}function p(B,N){let D=l[B.id];D===void 0&&(b(B),D=v(B),l[B.id]=D,B.addEventListener("dispose",M));const q=N.program;s.updateUBOMapping(B,q);const H=e.render.frame;u[B.id]!==H&&(S(B),u[B.id]=H)}function v(B){const N=x();B.__bindingPointIndex=N;const D=o.createBuffer(),q=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,q,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function x(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],D=B.uniforms,q=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,O=D.length;H<O;H++){const V=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,R=V.length;w<R;w++){const I=V[w];if(y(I,H,w,q)===!0){const it=I.__offset,at=Array.isArray(I.value)?I.value:[I.value];let ut=0;for(let pt=0;pt<at.length;pt++){const z=at[pt],K=C(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,it+ut,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,ut),ut+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,N,D,q){const H=B.value,O=N+"_"+D;if(q[O]===void 0)return typeof H=="number"||typeof H=="boolean"?q[O]=H:q[O]=H.clone(),!0;{const V=q[O];if(typeof H=="number"||typeof H=="boolean"){if(V!==H)return q[O]=H,!0}else if(V.equals(H)===!1)return V.copy(H),!0}return!1}function b(B){const N=B.uniforms;let D=0;const q=16;for(let O=0,V=N.length;O<V;O++){const w=Array.isArray(N[O])?N[O]:[N[O]];for(let R=0,I=w.length;R<I;R++){const it=w[R],at=Array.isArray(it.value)?it.value:[it.value];for(let ut=0,pt=at.length;ut<pt;ut++){const z=at[ut],K=C(z),Z=D%q,yt=Z%K.boundary,bt=Z+yt;D+=yt,bt!==0&&q-bt<K.storage&&(D+=q-bt),it.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=K.storage}}}const H=D%q;return H>0&&(D+=q-H),B.__size=D,B.__cache={},this}function C(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class lA{constructor(e={}){const{canvas:i=Hy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=Va,this.toneMappingExposure=1;const D=this;let q=!1,H=0,O=0,V=null,w=-1,R=null;const I=new He,it=new He;let at=null;const ut=new ye(0);let pt=0,z=i.width,K=i.height,Z=1,yt=null,bt=null;const L=new He(0,0,z,K),st=new He(0,0,z,K);let xt=!1;const j=new Cd;let ft=!1,Et=!1;this.transmissionResolutionScale=1;const vt=new je,Ht=new je,Pt=new Q,ie=new He,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function We(){return V===null?Z:1}let F=s;function Tn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const W="webgl2";if(F=Tn(W,A),F===null)throw Tn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,de,Wt,De,Xt,U,T,et,ht,Mt,mt,Vt,wt,Bt,pe,At,It,qt,kt,Ot,Qt,ae,Oe,X;function Rt(){ce=new _b(F),ce.init(),ae=new $1(F,ce),de=new fb(F,ce,e,ae),Wt=new Q1(F,ce),de.reverseDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),De=new Sb(F),Xt=new I1,U=new J1(F,ce,Wt,Xt,de,ae,De),T=new db(D),et=new gb(D),ht=new RM(F),Oe=new cb(F,ht),Mt=new vb(F,ht,De,Oe),mt=new Mb(F,Mt,ht,De),kt=new yb(F,de,U),At=new hb(Xt),Vt=new B1(D,T,et,ce,de,Oe,At),wt=new rA(D,Xt),Bt=new H1,pe=new q1(ce),qt=new lb(D,T,et,Wt,mt,y,m),It=new Z1(D,mt,de),X=new oA(F,De,de,Wt),Ot=new ub(F,ce,De),Qt=new xb(F,ce,De),De.programs=Vt.programs,D.capabilities=de,D.extensions=ce,D.properties=Xt,D.renderLists=Bt,D.shadowMap=It,D.state=Wt,D.info=De}Rt();const lt=new aA(D,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(z,K,!1))},this.getSize=function(A){return A.set(z,K)},this.setSize=function(A,W,nt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,K=W,i.width=Math.floor(A*Z),i.height=Math.floor(W*Z),nt===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(z*Z,K*Z).floor()},this.setDrawingBufferSize=function(A,W,nt){z=A,K=W,Z=nt,i.width=Math.floor(A*nt),i.height=Math.floor(W*nt),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,W,nt,rt){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,W,nt,rt),Wt.viewport(I.copy(L).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,W,nt,rt){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,W,nt,rt),Wt.scissor(it.copy(st).multiplyScalar(Z).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Wt.setScissorTest(xt=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(A=!0,W=!0,nt=!0){let rt=0;if(A){let k=!1;if(V!==null){const Tt=V.texture.format;k=Tt===Rd||Tt===Ad||Tt===bd}if(k){const Tt=V.texture.type,Ut=Tt===ua||Tt===Ms||Tt===Po||Tt===br||Tt===Ed||Tt===Td,Nt=qt.getClearColor(),zt=qt.getClearAlpha(),$t=Nt.r,te=Nt.g,Yt=Nt.b;Ut?(b[0]=$t,b[1]=te,b[2]=Yt,b[3]=zt,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=$t,C[1]=te,C[2]=Yt,C[3]=zt,F.clearBufferiv(F.COLOR,0,C))}else rt|=F.COLOR_BUFFER_BIT}W&&(rt|=F.DEPTH_BUFFER_BIT),nt&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),Bt.dispose(),pe.dispose(),Xt.dispose(),T.dispose(),et.dispose(),mt.dispose(),Oe.dispose(),X.dispose(),Vt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Lr),lt.removeEventListener("sessionend",Nr),bi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=De.autoReset,W=It.enabled,nt=It.autoUpdate,rt=It.needsUpdate,k=It.type;Rt(),De.autoReset=A,It.enabled=W,It.autoUpdate=nt,It.needsUpdate=rt,It.type=k}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const W=A.target;W.removeEventListener("dispose",Jt),qe(W)}function qe(A){on(A),Xt.remove(A)}function on(A){const W=Xt.get(A).programs;W!==void 0&&(W.forEach(function(nt){Vt.releaseProgram(nt)}),A.isShaderMaterial&&Vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,nt,rt,k,Tt){W===null&&(W=Ne);const Ut=k.isMesh&&k.matrixWorld.determinant()<0,Nt=zr(A,W,nt,rt,k);Wt.setMaterial(rt,Ut);let zt=nt.index,$t=1;if(rt.wireframe===!0){if(zt=Mt.getWireframeAttribute(nt),zt===void 0)return;$t=2}const te=nt.drawRange,Yt=nt.attributes.position;let _e=te.start*$t,ve=(te.start+te.count)*$t;Tt!==null&&(_e=Math.max(_e,Tt.start*$t),ve=Math.min(ve,(Tt.start+Tt.count)*$t)),zt!==null?(_e=Math.max(_e,0),ve=Math.min(ve,zt.count)):Yt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,Yt.count));const Ve=ve-_e;if(Ve<0||Ve===1/0)return;Oe.setup(k,rt,Nt,nt,zt);let Te,ee=Ot;if(zt!==null&&(Te=ht.get(zt),ee=Qt,ee.setIndex(Te)),k.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*We()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(k.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),Wt.setLineWidth(Zt*We()),k.isLineSegments?ee.setMode(F.LINES):k.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else k.isPoints?ee.setMode(F.POINTS):k.isSprite&&ee.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ee.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Zt=k._multiDrawStarts,ln=k._multiDrawCounts,Me=k._multiDrawCount,On=zt?ht.get(zt).bytesPerElement:1,mi=Xt.get(rt).currentProgram.getUniforms();for(let wn=0;wn<Me;wn++)mi.setValue(F,"_gl_DrawID",wn),ee.render(Zt[wn]/On,ln[wn])}else if(k.isInstancedMesh)ee.renderInstances(_e,Ve,k.count);else if(nt.isInstancedBufferGeometry){const Zt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,ln=Math.min(nt.instanceCount,Zt);ee.renderInstances(_e,Ve,ln)}else ee.render(_e,Ve)};function Ee(A,W,nt){A.transparent===!0&&A.side===ra&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Ze(A,W,nt),A.side=ka,A.needsUpdate=!0,Ze(A,W,nt),A.side=ra):Ze(A,W,nt)}this.compile=function(A,W,nt=null){nt===null&&(nt=A),_=pe.get(nt),_.init(W),N.push(_),nt.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),A!==nt&&A.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const rt=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Tt=k.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Nt=Tt[Ut];Ee(Nt,nt,k),rt.add(Nt)}else Ee(Tt,nt,k),rt.add(Tt)}),N.pop(),_=null,rt},this.compileAsync=function(A,W,nt=null){const rt=this.compile(A,W,nt);return new Promise(k=>{function Tt(){if(rt.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){k(A);return}setTimeout(Tt,10)}ce.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let mn=null;function di(A){mn&&mn(A)}function Lr(){bi.stop()}function Nr(){bi.start()}const bi=new nv;bi.setAnimationLoop(di),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){mn=A,lt.setAnimationLoop(A),A===null?bi.stop():bi.start()},lt.addEventListener("sessionstart",Lr),lt.addEventListener("sessionend",Nr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(W),W=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,V),_=pe.get(A,N.length),_.init(W),N.push(_),Ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(Ht),Et=this.localClippingEnabled,ft=At.init(this.clippingPlanes,Et),M=Bt.get(A,B.length),M.init(),B.push(M),lt.enabled===!0&&lt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Wa(Tt,W,-1/0,D.sortObjects)}Wa(A,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(yt,bt),ue=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ue&&qt.addToRenderList(M,A),this.info.render.frame++,ft===!0&&At.beginShadows();const nt=_.state.shadowsArray;It.render(nt,A,W),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,k=M.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(k.length>0)for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];Or(rt,k,A,zt)}ue&&qt.render(A);for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];Ts(M,A,zt,zt.viewport)}}else k.length>0&&Or(rt,k,A,W),ue&&qt.render(A),Ts(M,A,W);V!==null&&O===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(D,A,W),Oe.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],ft===!0&&At.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Wa(A,W,nt,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)nt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){rt&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const Ut=mt.update(A),Nt=A.material;Nt.visible&&M.push(A,Ut,Nt,nt,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Ut=mt.update(A),Nt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ie.copy(Ut.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(Nt)){const zt=Ut.groups;for(let $t=0,te=zt.length;$t<te;$t++){const Yt=zt[$t],_e=Nt[Yt.materialIndex];_e&&_e.visible&&M.push(A,Ut,_e,nt,ie.z,Yt)}}else Nt.visible&&M.push(A,Ut,Nt,nt,ie.z,null)}}const Tt=A.children;for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++)Wa(Tt[Ut],W,nt,rt)}function Ts(A,W,nt,rt){const k=A.opaque,Tt=A.transmissive,Ut=A.transparent;_.setupLightsView(nt),ft===!0&&At.setGlobalState(D.clippingPlanes,nt),rt&&Wt.viewport(I.copy(rt)),k.length>0&&qa(k,W,nt),Tt.length>0&&qa(Tt,W,nt),Ut.length>0&&qa(Ut,W,nt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Or(A,W,nt,rt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Es(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Bo:ua,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||I;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(ut),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),ue&&qt.render(nt);const zt=D.toneMapping;D.toneMapping=Va;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),ft===!0&&At.setGlobalState(D.clippingPlanes,rt),qa(A,nt,rt),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,_e=W.length;Yt<_e;Yt++){const ve=W[Yt],Ve=ve.object,Te=ve.geometry,ee=ve.material,Zt=ve.group;if(ee.side===ra&&Ve.layers.test(rt.layers)){const ln=ee.side;ee.side=kn,ee.needsUpdate=!0,pi(Ve,nt,rt,Te,ee,Zt),ee.side=ln,ee.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(ut,pt),$t!==void 0&&(rt.viewport=$t),D.toneMapping=zt}function qa(A,W,nt){const rt=W.isScene===!0?W.overrideMaterial:null;for(let k=0,Tt=A.length;k<Tt;k++){const Ut=A[k],Nt=Ut.object,zt=Ut.geometry,$t=rt===null?Ut.material:rt,te=Ut.group;Nt.layers.test(nt.layers)&&pi(Nt,W,nt,zt,$t,te)}}function pi(A,W,nt,rt,k,Tt){A.onBeforeRender(D,W,nt,rt,k,Tt),A.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(D,W,nt,rt,A,Tt),k.transparent===!0&&k.side===ra&&k.forceSinglePass===!1?(k.side=kn,k.needsUpdate=!0,D.renderBufferDirect(nt,W,rt,k,A,Tt),k.side=ka,k.needsUpdate=!0,D.renderBufferDirect(nt,W,rt,k,A,Tt),k.side=ra):D.renderBufferDirect(nt,W,rt,k,A,Tt),A.onAfterRender(D,W,nt,rt,k,Tt)}function Ze(A,W,nt){W.isScene!==!0&&(W=Ne);const rt=Xt.get(A),k=_.state.lights,Tt=_.state.shadowsArray,Ut=k.state.version,Nt=Vt.getParameters(A,k.state,Tt,W,nt),zt=Vt.getProgramCacheKey(Nt);let $t=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,rt.programs=$t);let te=$t.get(zt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return Pi(A,Nt),te}else Nt.uniforms=Vt.getUniforms(A),A.onBeforeCompile(Nt,D),te=Vt.acquireProgram(Nt,zt),$t.set(zt,te),rt.uniforms=Nt.uniforms;const Yt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=At.uniform),Pi(A,Nt),rt.needsLights=Ic(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Yt.ambientLightColor.value=k.state.ambient,Yt.lightProbe.value=k.state.probe,Yt.directionalLights.value=k.state.directional,Yt.directionalLightShadows.value=k.state.directionalShadow,Yt.spotLights.value=k.state.spot,Yt.spotLightShadows.value=k.state.spotShadow,Yt.rectAreaLights.value=k.state.rectArea,Yt.ltc_1.value=k.state.rectAreaLTC1,Yt.ltc_2.value=k.state.rectAreaLTC2,Yt.pointLights.value=k.state.point,Yt.pointLightShadows.value=k.state.pointShadow,Yt.hemisphereLights.value=k.state.hemi,Yt.directionalShadowMap.value=k.state.directionalShadowMap,Yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Yt.spotShadowMap.value=k.state.spotShadowMap,Yt.spotLightMatrix.value=k.state.spotLightMatrix,Yt.spotLightMap.value=k.state.spotLightMap,Yt.pointShadowMap.value=k.state.pointShadowMap,Yt.pointShadowMatrix.value=k.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function gn(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Pi(A,W){const nt=Xt.get(A);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function zr(A,W,nt,rt,k){W.isScene!==!0&&(W=Ne),U.resetTextureUnits();const Tt=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,Nt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Rr,zt=(rt.isMeshStandardMaterial?et:T).get(rt.envMap||Ut),$t=rt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,te=!!nt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!nt.morphAttributes.position,_e=!!nt.morphAttributes.normal,ve=!!nt.morphAttributes.color;let Ve=Va;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Te=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ee=Te!==void 0?Te.length:0,Zt=Xt.get(rt),ln=_.state.lights;if(ft===!0&&(Et===!0||A!==R)){const Ke=A===R&&rt.id===w;At.setState(rt,A,Ke)}let Me=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==ln.state.version||Zt.outputColorSpace!==Nt||k.isBatchedMesh&&Zt.batching===!1||!k.isBatchedMesh&&Zt.batching===!0||k.isBatchedMesh&&Zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Zt.instancing===!1||!k.isInstancedMesh&&Zt.instancing===!0||k.isSkinnedMesh&&Zt.skinning===!1||!k.isSkinnedMesh&&Zt.skinning===!0||k.isInstancedMesh&&Zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Zt.instancingMorph===!1&&k.morphTexture!==null||Zt.envMap!==zt||rt.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==te||Zt.morphTargets!==Yt||Zt.morphNormals!==_e||Zt.morphColors!==ve||Zt.toneMapping!==Ve||Zt.morphTargetsCount!==ee)&&(Me=!0):(Me=!0,Zt.__version=rt.version);let On=Zt.currentProgram;Me===!0&&(On=Ze(rt,W,k));let mi=!1,wn=!1,hn=!1;const ze=On.getUniforms(),Dn=Zt.uniforms;if(Wt.useProgram(On.program)&&(mi=!0,wn=!0,hn=!0),rt.id!==w&&(w=rt.id,wn=!0),mi||R!==A){Wt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),Vy(vt),ky(vt),ze.setValue(F,"projectionMatrix",vt)):ze.setValue(F,"projectionMatrix",A.projectionMatrix),ze.setValue(F,"viewMatrix",A.matrixWorldInverse);const _n=ze.map.cameraPosition;_n!==void 0&&_n.setValue(F,Pt.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&ze.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ze.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,wn=!0,hn=!0)}if(k.isSkinnedMesh){ze.setOptional(F,k,"bindMatrix"),ze.setOptional(F,k,"bindMatrixInverse");const Ke=k.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ze.setValue(F,"boneTexture",Ke.boneTexture,U))}k.isBatchedMesh&&(ze.setOptional(F,k,"batchingTexture"),ze.setValue(F,"batchingTexture",k._matricesTexture,U),ze.setOptional(F,k,"batchingIdTexture"),ze.setValue(F,"batchingIdTexture",k._indirectTexture,U),ze.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ze.setValue(F,"batchingColorTexture",k._colorsTexture,U));const bn=nt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&kt.update(k,nt,On),(wn||Zt.receiveShadow!==k.receiveShadow)&&(Zt.receiveShadow=k.receiveShadow,ze.setValue(F,"receiveShadow",k.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Dn.envMap.value=zt,Dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Dn.envMapIntensity.value=W.environmentIntensity),wn&&(ze.setValue(F,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Bc(Dn,hn),Tt&&rt.fog===!0&&wt.refreshFogUniforms(Dn,Tt),wt.refreshMaterialUniforms(Dn,rt,Z,K,_.state.transmissionRenderTarget[A.id]),Ac.upload(F,gn(Zt),Dn,U)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ac.upload(F,gn(Zt),Dn,U),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ze.setValue(F,"center",k.center),ze.setValue(F,"modelViewMatrix",k.modelViewMatrix),ze.setValue(F,"normalMatrix",k.normalMatrix),ze.setValue(F,"modelMatrix",k.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ke=rt.uniformsGroups;for(let _n=0,bs=Ke.length;_n<bs;_n++){const zn=Ke[_n];X.update(zn,On),X.bind(zn,On)}}return On}function Bc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ic(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,W,nt){Xt.get(A.texture).__webglTexture=W,Xt.get(A.depthTexture).__webglTexture=nt;const rt=Xt.get(A);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=nt===void 0,rt.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const nt=Xt.get(A);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0};const Go=F.createFramebuffer();this.setRenderTarget=function(A,W=0,nt=0){V=A,H=W,O=nt;let rt=!0,k=null,Tt=!1,Ut=!1;if(A){const zt=Xt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(zt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(zt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const te=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?k=te[W][nt]:k=te[W],Tt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?k=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?k=te[nt]:k=te,I.copy(A.viewport),it.copy(A.scissor),at=A.scissorTest}else I.copy(L).multiplyScalar(Z).floor(),it.copy(st).multiplyScalar(Z).floor(),at=xt;if(nt!==0&&(k=Go),Wt.bindFramebuffer(F.FRAMEBUFFER,k)&&rt&&Wt.drawBuffers(A,k),Wt.viewport(I),Wt.scissor(it),Wt.setScissorTest(at),Tt){const zt=Xt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,nt)}else if(Ut){const zt=Xt.get(A.texture),$t=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,nt,$t)}else if(A!==null&&nt!==0){const zt=Xt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,nt)}w=-1},this.readRenderTargetPixels=function(A,W,nt,rt,k,Tt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Wt.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const zt=A.texture,$t=zt.format,te=zt.type;if(!de.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&nt>=0&&nt<=A.height-k&&F.readPixels(W,nt,rt,k,ae.convert($t),ae.convert(te),Tt)}finally{const zt=V!==null?Xt.get(V).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,W,nt,rt,k,Tt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){const zt=A.texture,$t=zt.format,te=zt.type;if(!de.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-rt&&nt>=0&&nt<=A.height-k){Wt.bindFramebuffer(F.FRAMEBUFFER,Nt);const Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(W,nt,rt,k,ae.convert($t),ae.convert(te),0);const _e=V!==null?Xt.get(V).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,_e);const ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Gy(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Yt),F.deleteSync(ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,nt=0){A.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const rt=Math.pow(2,-nt),k=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Ut=W!==null?W.x:0,Nt=W!==null?W.y:0;U.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,Ut,Nt,k,Tt),Wt.unbindTexture()};const Ya=F.createFramebuffer(),Pr=F.createFramebuffer();this.copyTextureToTexture=function(A,W,nt=null,rt=null,k=0,Tt=null){A.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,A=arguments[1],W=arguments[2],Tt=arguments[3]||0,nt=null),Tt===null&&(k!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=k,k=0):Tt=0);let Ut,Nt,zt,$t,te,Yt,_e,ve,Ve;const Te=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(nt!==null)Ut=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,$t=nt.min.x,te=nt.min.y,Yt=nt.isBox3?nt.min.z:0;else{const bn=Math.pow(2,-k);Ut=Math.floor(Te.width*bn),Nt=Math.floor(Te.height*bn),A.isDataArrayTexture?zt=Te.depth:A.isData3DTexture?zt=Math.floor(Te.depth*bn):zt=1,$t=0,te=0,Yt=0}rt!==null?(_e=rt.x,ve=rt.y,Ve=rt.z):(_e=0,ve=0,Ve=0);const ee=ae.convert(W.format),Zt=ae.convert(W.type);let ln;W.isData3DTexture?(U.setTexture3D(W,0),ln=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),ln=F.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),ln=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=F.getParameter(F.UNPACK_ROW_LENGTH),On=F.getParameter(F.UNPACK_IMAGE_HEIGHT),mi=F.getParameter(F.UNPACK_SKIP_PIXELS),wn=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const ze=A.isDataArrayTexture||A.isData3DTexture,Dn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const bn=Xt.get(A),Ke=Xt.get(W),_n=Xt.get(bn.__renderTarget),bs=Xt.get(Ke.__renderTarget);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,_n.__webglFramebuffer),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let zn=0;zn<zt;zn++)ze&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,k,Yt+zn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,Tt,Ve+zn)),F.blitFramebuffer($t,te,Ut,Nt,_e,ve,Ut,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||Xt.has(A)){const bn=Xt.get(A),Ke=Xt.get(W);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Ya),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pr);for(let _n=0;_n<zt;_n++)ze?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bn.__webglTexture,k,Yt+_n):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bn.__webglTexture,k),Dn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.__webglTexture,Tt,Ve+_n):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ke.__webglTexture,Tt),k!==0?F.blitFramebuffer($t,te,Ut,Nt,_e,ve,Ut,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):Dn?F.copyTexSubImage3D(ln,Tt,_e,ve,Ve+_n,$t,te,Ut,Nt):F.copyTexSubImage2D(ln,Tt,_e,ve,$t,te,Ut,Nt);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ln,Tt,_e,ve,Ve,Ut,Nt,zt,ee,Zt,Te.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(ln,Tt,_e,ve,Ve,Ut,Nt,zt,ee,Te.data):F.texSubImage3D(ln,Tt,_e,ve,Ve,Ut,Nt,zt,ee,Zt,Te):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,_e,ve,Ut,Nt,ee,Zt,Te.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,_e,ve,Te.width,Te.height,ee,Te.data):F.texSubImage2D(F.TEXTURE_2D,Tt,_e,ve,Ut,Nt,ee,Zt,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,On),F.pixelStorei(F.UNPACK_SKIP_PIXELS,mi),F.pixelStorei(F.UNPACK_SKIP_ROWS,wn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),Tt===0&&W.generateMipmaps&&F.generateMipmap(ln),Wt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,nt=null,rt=null,k=0){return A.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,rt=arguments[1]||null,A=arguments[2],W=arguments[3],k=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,nt,rt,k)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){H=0,O=0,V=null,Wt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}function cA({parameters:o}){const e=Nn.useRef(null),i=Nn.useRef(null);return Nn.useEffect(()=>{if(!e.current)return;const s=e.current,l=s.clientWidth,u=s.clientHeight,h=new hM;h.background=new ye(986906);const d=new ei(45,l/u,.1,1e3);d.position.set(150,150,150),d.lookAt(0,0,0);const m=new lA({antialias:!0});m.setSize(l,u),m.shadowMap.enabled=!0,m.shadowMap.type=b0,s.appendChild(m.domElement);const p=new EM(16777215,.4);h.add(p);const v=new MM(16777215,.8);v.position.set(100,200,100),v.castShadow=!0,v.shadow.mapSize.width=2048,v.shadow.mapSize.height=2048,h.add(v);const x=new SM(15287648,.5);x.position.set(-100,100,-100),h.add(x);const S=new bM(500,50,3355443,2236962);h.add(S);const y=new Oo;h.add(y);let b=0;const C=()=>{b+=.005,y.rotation.y=b,m.render(h,d),i.current.frameId=requestAnimationFrame(C)};i.current={scene:h,camera:d,renderer:m,mesh:y,frameId:0},C();const M=()=>{if(!e.current||!i.current)return;const _=e.current.clientWidth,B=e.current.clientHeight;i.current.camera.aspect=_/B,i.current.camera.updateProjectionMatrix(),i.current.renderer.setSize(_,B)};return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),i.current&&(cancelAnimationFrame(i.current.frameId),m.dispose(),s.removeChild(m.domElement))}},[]),Nn.useEffect(()=>{if(!i.current)return;const{mesh:s}=i.current;for(;s.children.length>0;){const V=s.children[0];V instanceof Mn&&(V.geometry.dispose(),Array.isArray(V.material)?V.material.forEach(w=>w.dispose()):V.material.dispose()),s.remove(V)}const l=new yh({color:3900150,metalness:.3,roughness:.4}),{width:u,height:h,depth:d,wallThickness:m,hasVentilation:p,hasMountingHoles:v}=o,x=u/2,S=h/2,y=m,b=new Ui(u,y,d),C=new Mn(b,l);C.position.y=-S+y/2,C.castShadow=!0,C.receiveShadow=!0,s.add(C);const M=new Ui(u,h-y,y),_=new Mn(M,l);_.position.set(0,y/2,S-y/2),_.castShadow=!0,s.add(_);const B=new Ui(u,h-y,y),N=new Mn(B,l);N.position.set(0,y/2,-S+y/2),N.castShadow=!0,s.add(N);const D=new Ui(y,h-y,d-2*y),q=new Mn(D,l);q.position.set(-x+y/2,y/2,0),q.castShadow=!0,s.add(q);const H=new Ui(y,h-y,d-2*y),O=new Mn(H,l);if(O.position.set(x-y/2,y/2,0),O.castShadow=!0,s.add(O),p){const V=new Lc(3,3,y+1,16),w=new yh({color:986906});for(let R=-2;R<=2;R++)for(let I=-1;I<=1;I++){const it=new Mn(V,w);it.rotation.x=Math.PI/2,it.position.set(R*12,y/2+I*12,S),s.add(it)}}if(v){const V=new Lc(2,2,y+1,16),w=new yh({color:986906}),R=5;[[-x+R,-S+R],[x-R,-S+R],[-x+R,S-R],[x-R,S-R]].forEach(([it,at])=>{const ut=new Mn(V,w);ut.position.set(it,-S,at),s.add(ut)})}s.position.y=5},[o]),St.jsxs("div",{className:"model-viewer",children:[St.jsxs("div",{className:"viewer-header",children:[St.jsx("h3",{children:"3D Предпросмотр"}),St.jsx("div",{className:"viewer-controls",children:St.jsx("span",{className:"viewer-hint",children:"🖱️ Авто-вращение"})})]}),St.jsx("div",{ref:e,className:"viewer-canvas"})]})}function uA(){const[o,e]=Nn.useState(!0),[i,s]=Nn.useState(Uh[0]),[l,u]=Nn.useState(Uh[0].defaultParams),h=d=>{s(d),u(d.defaultParams)};return St.jsxs("div",{className:"app",children:[St.jsx(KS,{isOpen:o,onToggle:()=>e(!o)}),St.jsx("main",{className:`main-content ${o?"sidebar-open":"sidebar-closed"}`,children:St.jsxs("div",{className:"content-wrapper",children:[St.jsxs("div",{className:"controls-panel",children:[St.jsxs("header",{className:"panel-header",children:[St.jsx("h1",{children:"Генератор корпусов"}),St.jsx("p",{className:"subtitle",children:"Создавайте 3D модели для печати за секунды"})]}),St.jsx(QS,{selectedModel:i,onSelectModel:h}),i&&St.jsx(JS,{parameters:l,onChange:u}),St.jsxs("div",{className:"action-buttons",children:[St.jsx("button",{className:"btn btn-primary",children:"Скачать STL"}),St.jsx("button",{className:"btn btn-secondary",children:"Сбросить параметры"})]})]}),St.jsx("div",{className:"viewer-panel",children:St.jsx(cA,{parameters:l})})]})})]})}yS.createRoot(document.getElementById("root")).render(St.jsx(Nn.StrictMode,{children:St.jsx(uA,{})}));
