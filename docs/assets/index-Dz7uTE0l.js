(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},Uo={};var xg;function Tx(){if(xg)return Uo;xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var yg;function bx(){return yg||(yg=1,Qf.exports=Tx()),Qf.exports}var xt=bx(),Jf={exports:{}},ne={};var Mg;function Ax(){if(Mg)return ne;Mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function g(L,st,St){this.props=L,this.context=st,this.refs=M,this.updater=St||b}g.prototype.isReactComponent={},g.prototype.setState=function(L,st){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,st,"setState")},g.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=g.prototype;function N(L,st,St){this.props=L,this.context=st,this.refs=M,this.updater=St||b}var D=N.prototype=new B;D.constructor=N,C(D,g.prototype),D.isPureReactComponent=!0;var q=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function w(L,st,St){var j=St.ref;return{$$typeof:o,type:L,key:st,ref:j!==void 0?j:null,props:St}}function R(L,st){return w(L.type,st,L.props)}function I(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function it(L){var st={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return st[St]})}var at=/\/+/g;function ut(L,st){return typeof L=="object"&&L!==null&&L.key!=null?it(""+L.key):st.toString(36)}function pt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(st){L.status==="pending"&&(L.status="fulfilled",L.value=st)},function(st){L.status==="pending"&&(L.status="rejected",L.reason=st)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,st,St,j,ft){var Et=typeof L;(Et==="undefined"||Et==="boolean")&&(L=null);var vt=!1;if(L===null)vt=!0;else switch(Et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(L.$$typeof){case o:case e:vt=!0;break;case v:return vt=L._init,P(vt(L._payload),st,St,j,ft)}}if(vt)return ft=ft(L),vt=j===""?"."+ut(L,0):j,q(ft)?(St="",vt!=null&&(St=vt.replace(at,"$&/")+"/"),P(ft,st,St,"",function(ie){return ie})):ft!=null&&(I(ft)&&(ft=R(ft,St+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(at,"$&/")+"/")+vt)),st.push(ft)),1;vt=0;var Ht=j===""?".":j+":";if(q(L))for(var zt=0;zt<L.length;zt++)j=L[zt],Et=Ht+ut(j,zt),vt+=P(j,st,St,Et,ft);else if(zt=y(L),typeof zt=="function")for(L=zt.call(L),zt=0;!(j=L.next()).done;)j=j.value,Et=Ht+ut(j,zt++),vt+=P(j,st,St,Et,ft);else if(Et==="object"){if(typeof L.then=="function")return P(pt(L),st,St,j,ft);throw st=String(L),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return vt}function Q(L,st,St){if(L==null)return L;var j=[],ft=0;return P(L,j,"","",function(Et){return st.call(St,Et,ft++)}),j}function Z(L){if(L._status===-1){var st=L._result;st=st(),st.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=st)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},bt={map:Q,forEach:function(L,st,St){Q(L,function(){st.apply(this,arguments)},St)},count:function(L){var st=0;return Q(L,function(){st++}),st},toArray:function(L){return Q(L,function(st){return st})||[]},only:function(L){if(!I(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ne.Activity=S,ne.Children=bt,ne.Component=g,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=N,ne.StrictMode=s,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ne.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ne.cache=function(L){return function(){return L.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(L,st,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var j=C({},L.props),ft=L.key;if(st!=null)for(Et in st.key!==void 0&&(ft=""+st.key),st)!V.call(st,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&st.ref===void 0||(j[Et]=st[Et]);var Et=arguments.length-2;if(Et===1)j.children=St;else if(1<Et){for(var vt=Array(Et),Ht=0;Ht<Et;Ht++)vt[Ht]=arguments[Ht+2];j.children=vt}return w(L.type,ft,j)},ne.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ne.createElement=function(L,st,St){var j,ft={},Et=null;if(st!=null)for(j in st.key!==void 0&&(Et=""+st.key),st)V.call(st,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ft[j]=st[j]);var vt=arguments.length-2;if(vt===1)ft.children=St;else if(1<vt){for(var Ht=Array(vt),zt=0;zt<vt;zt++)Ht[zt]=arguments[zt+2];ft.children=Ht}if(L&&L.defaultProps)for(j in vt=L.defaultProps,vt)ft[j]===void 0&&(ft[j]=vt[j]);return w(L,Et,ft)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(L){return{$$typeof:d,render:L}},ne.isValidElement=I,ne.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Z}},ne.memo=function(L,st){return{$$typeof:p,type:L,compare:st===void 0?null:st}},ne.startTransition=function(L){var st=O.T,St={};O.T=St;try{var j=L(),ft=O.S;ft!==null&&ft(St,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(H,yt)}catch(Et){yt(Et)}finally{st!==null&&St.types!==null&&(st.types=St.types),O.T=st}},ne.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ne.use=function(L){return O.H.use(L)},ne.useActionState=function(L,st,St){return O.H.useActionState(L,st,St)},ne.useCallback=function(L,st){return O.H.useCallback(L,st)},ne.useContext=function(L){return O.H.useContext(L)},ne.useDebugValue=function(){},ne.useDeferredValue=function(L,st){return O.H.useDeferredValue(L,st)},ne.useEffect=function(L,st){return O.H.useEffect(L,st)},ne.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ne.useId=function(){return O.H.useId()},ne.useImperativeHandle=function(L,st,St){return O.H.useImperativeHandle(L,st,St)},ne.useInsertionEffect=function(L,st){return O.H.useInsertionEffect(L,st)},ne.useLayoutEffect=function(L,st){return O.H.useLayoutEffect(L,st)},ne.useMemo=function(L,st){return O.H.useMemo(L,st)},ne.useOptimistic=function(L,st){return O.H.useOptimistic(L,st)},ne.useReducer=function(L,st,St){return O.H.useReducer(L,st,St)},ne.useRef=function(L){return O.H.useRef(L)},ne.useState=function(L){return O.H.useState(L)},ne.useSyncExternalStore=function(L,st,St){return O.H.useSyncExternalStore(L,st,St)},ne.useTransition=function(){return O.H.useTransition()},ne.version="19.2.4",ne}var Eg;function Ad(){return Eg||(Eg=1,Jf.exports=Ax()),Jf.exports}var Pn=Ad(),$f={exports:{}},Lo={},th={exports:{}},eh={};var Tg;function Rx(){return Tg||(Tg=1,(function(o){function e(P,Q){var Z=P.length;P.push(Q);t:for(;0<Z;){var yt=Z-1>>>1,bt=P[yt];if(0<l(bt,Q))P[yt]=Q,P[Z]=bt,Z=yt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Q=P[0],Z=P.pop();if(Z!==Q){P[0]=Z;t:for(var yt=0,bt=P.length,L=bt>>>1;yt<L;){var st=2*(yt+1)-1,St=P[st],j=st+1,ft=P[j];if(0>l(St,Z))j<bt&&0>l(ft,St)?(P[yt]=ft,P[j]=Z,yt=j):(P[yt]=St,P[st]=Z,yt=st);else if(j<bt&&0>l(ft,Z))P[yt]=ft,P[j]=Z,yt=j;else break t}}return Q}function l(P,Q){var Z=P.sortIndex-Q.sortIndex;return Z!==0?Z:P.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,S=null,x=3,y=!1,b=!1,C=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Q=i(p);Q!==null;){if(Q.callback===null)s(p);else if(Q.startTime<=P)s(p),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=i(p)}}function q(P){if(C=!1,D(P),!b)if(i(m)!==null)b=!0,H||(H=!0,it());else{var Q=i(p);Q!==null&&pt(q,Q.startTime-P)}}var H=!1,O=-1,V=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<V)}function I(){if(M=!1,H){var P=o.unstable_now();w=P;var Q=!0;try{t:{b=!1,C&&(C=!1,B(O),O=-1),y=!0;var Z=x;try{e:{for(D(P),S=i(m);S!==null&&!(S.expirationTime>P&&R());){var yt=S.callback;if(typeof yt=="function"){S.callback=null,x=S.priorityLevel;var bt=yt(S.expirationTime<=P);if(P=o.unstable_now(),typeof bt=="function"){S.callback=bt,D(P),Q=!0;break e}S===i(m)&&s(m),D(P)}else s(m);S=i(m)}if(S!==null)Q=!0;else{var L=i(p);L!==null&&pt(q,L.startTime-P),Q=!1}}break t}finally{S=null,x=Z,y=!1}Q=void 0}}finally{Q?it():H=!1}}}var it;if(typeof N=="function")it=function(){N(I)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ut=at.port2;at.port1.onmessage=I,it=function(){ut.postMessage(null)}}else it=function(){g(I,0)};function pt(P,Q){O=g(function(){P(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var Z=x;x=Q;try{return P()}finally{x=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=x;x=P;try{return Q()}finally{x=Z}},o.unstable_scheduleCallback=function(P,Q,Z){var yt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=Z+bt,P={id:v++,callback:Q,priorityLevel:P,startTime:Z,expirationTime:bt,sortIndex:-1},Z>yt?(P.sortIndex=Z,e(p,P),i(m)===null&&P===i(p)&&(C?(B(O),O=-1):C=!0,pt(q,Z-yt))):(P.sortIndex=bt,e(m,P),b||y||(b=!0,H||(H=!0,it()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var Q=x;return function(){var Z=x;x=Q;try{return P.apply(this,arguments)}finally{x=Z}}}})(eh)),eh}var bg;function Cx(){return bg||(bg=1,th.exports=Rx()),th.exports}var nh={exports:{}},Cn={};var Ag;function wx(){if(Ag)return Cn;Ag=1;var o=Ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Cn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.4",Cn}var Rg;function Dx(){if(Rg)return nh.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nh.exports=wx(),nh.exports}var Cg;function Ux(){if(Cg)return Lo;Cg=1;var o=Cx(),e=Ad(),i=Dx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case g:return"Profiler";case M:return"StrictMode";case q:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var pt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],bt=-1;function L(t){return{current:t}}function st(t){0>bt||(t.current=yt[bt],yt[bt]=null,bt--)}function St(t,n){bt++,yt[bt]=t.current,t.current=n}var j=L(null),ft=L(null),Et=L(null),vt=L(null);function Ht(t,n){switch(St(Et,n),St(ft,t),St(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?k_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=k_(n),t=X_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(j),St(j,t)}function zt(){st(j),st(ft),st(Et)}function ie(t){t.memoizedState!==null&&St(vt,t);var n=j.current,a=X_(n,t.type);n!==a&&(St(ft,t),St(j,a))}function Ne(t){ft.current===t&&(st(j),st(ft)),vt.current===t&&(st(vt),Ro._currentValue=Z)}var fe,qe;function F(t){if(fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);fe=n&&n[1]||"",qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fe+t+qe}var An=!1;function ue(t,n){if(!t||An)return"";An=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var tt=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){tt=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var z=_.split(`
`),$=E.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===$.length)for(r=z.length-1,c=$.length-1;1<=r&&0<=c&&z[r]!==$[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==$[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==$[c]){var ct=`
`+z[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=c);break}}}finally{An=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?F(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return F(t.type);case 16:return F("Lazy");case 13:return t.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return ue(t.type,!1);case 11:return ue(t.type.render,!1);case 1:return ue(t.type,!0);case 31:return F("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,ht=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,_e=o.unstable_IdlePriority,At=o.log,It=o.unstable_setDisableYieldValue,qt=null,kt=null;function Ot(t){if(typeof At=="function"&&It(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(qt,t)}catch{}}var Qt=Math.clz32?Math.clz32:X,se=Math.log,Oe=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(se(t)/Oe|0)|0}var Rt=256,lt=262144,gt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Ct(r):(_&=E,_!==0?c=Ct(_):a||(a=E&~t,a!==0&&(c=Ct(a))))):(E=r&~f,E!==0?c=Ct(E):_!==0?c=Ct(_):a||(a=r&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ye(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _i(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-Qt(a),_t=1<<ct;E[ct]=0,z[ct]=-1;var tt=$[ct];if(tt!==null)for($[ct]=null,ct=0;ct<tt.length;ct++){var ot=tt[ct];ot!==null&&(ot.lane&=-536870913)}a&=~_t}r!==0&&Ir(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Qt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Fr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Qt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ci(t,n){var a=n&-n;return a=(a&42)!==0?1:Za(a),(a&(t.suspendedLanes|n))!==0?0:a}function Za(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ws(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hr(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:dg(t.type))}function Ka(t,n){var a=Q.p;try{return Q.p=t,n()}finally{Q.p=a}}var gi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+gi,vn="__reactProps$"+gi,Fi="__reactContainer$"+gi,Gr="__reactEvents$"+gi,Xc="__reactListeners$"+gi,Wc="__reactHandles$"+gi,qo="__reactResources$"+gi,Qa="__reactMarker$"+gi;function Vr(t){delete t[Ke],delete t[vn],delete t[Gr],delete t[Xc],delete t[Wc]}function A(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Q_(t);t!==null;){if(a=t[Ke])return a;t=Q_(t)}return n}t=a,a=t.parentNode}return null}function W(t){if(t=t[Ke]||t[Fi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function rt(t){var n=t[qo];return n||(n=t[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[Qa]=!0}var Tt=new Set,Ut={};function Nt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Ut[t]=n,t=0;t<n.length;t++)Tt.add(n[t])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Yt={};function Se(t){return De.call(Yt,t)?!0:De.call(te,t)?!1:$t.test(t)?Yt[t]=!0:(te[t]=!0,!1)}function xe(t,n,a){if(Se(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ee(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=cn(t,n,""+t[n])}}function zn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Zt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function pn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pe(t,n,a,r,c,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ee(n)):t.value!==""+ee(n)&&(t.value=""+ee(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Rn(t,_,ee(n)):a!=null?Rn(t,_,ee(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ee(E):t.removeAttribute("name")}function Ln(t,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ee(t);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ee(t)}function Rn(t,n,a){n==="number"&&vi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Sn(t,n,a){if(n!=null&&(n=""+ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ee(a):""}function Ds(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(pt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ee(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ee(t)}function Bn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Sv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Gd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Hd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Hd(t,f,n[f])}function qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return yv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Yc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Us=null,Ls=null;function Vd(t){var n=W(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[vn]||null;if(!c)throw Error(s(90));Pe(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&zn(r)}break t;case"textarea":Sn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var Zc=!1;function kd(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(Us!==null||Ls!==null)&&(Ol(),Us&&(n=Us,t=Ls,Ls=Us=null,Vd(n),t)))for(n=0;n<t.length;n++)Vd(t[n])}}function kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[vn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Gi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Kc=!1}var pa=null,Qc=null,jo=null;function Xd(){if(jo)return jo;var t,n=Qc,a=n.length,r,c="value"in pa?pa.value:pa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return jo=c.slice(t,1<r?1-r:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Wd(){return!1}function In(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Wd,this.isPropagationStopped=Wd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=In(Ja),Wr=S({},Ja,{view:0,detail:0}),Mv=In(Wr),Jc,$c,qr,Jo=S({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(Jc=t.screenX-qr.screenX,$c=t.screenY-qr.screenY):$c=Jc=0,qr=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),qd=In(Jo),Ev=S({},Jo,{dataTransfer:0}),Tv=In(Ev),bv=S({},Wr,{relatedTarget:0}),tu=In(bv),Av=S({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=In(Av),Cv=S({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wv=In(Cv),Dv=S({},Ja,{data:0}),Yd=In(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nv[t])?!!n[t]:!1}function eu(){return Ov}var Pv=S({},Wr,{key:function(t){if(t.key){var n=Uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=In(Pv),Bv=S({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=In(Bv),Iv=S({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Fv=In(Iv),Hv=S({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=In(Hv),Vv=S({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=In(Vv),Xv=S({},Ja,{newState:0,oldState:0}),Wv=In(Xv),qv=[9,13,27,32],nu=Gi&&"CompositionEvent"in window,Yr=null;Gi&&"documentMode"in document&&(Yr=document.documentMode);var Yv=Gi&&"TextEvent"in window&&!Yr,Zd=Gi&&(!nu||Yr&&8<Yr&&11>=Yr),Kd=" ",Qd=!1;function Jd(t,n){switch(t){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function jv(t,n){switch(t){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return t=n.data,t===Kd&&Qd?null:t;default:return null}}function Zv(t,n){if(Ns)return t==="compositionend"||!nu&&Jd(t,n)?(t=Xd(),jo=Qc=pa=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Kv[t.type]:n==="textarea"}function ep(t,n,a,r){Us?Ls?Ls.push(r):Ls=[r]:Us=r,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var jr=null,Zr=null;function Qv(t){B_(t,0)}function $o(t){var n=nt(t);if(zn(n))return t}function np(t,n){if(t==="change")return n}var ip=!1;if(Gi){var iu;if(Gi){var au="oninput"in document;if(!au){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),au=typeof ap.oninput=="function"}iu=au}else iu=!1;ip=iu&&(!document.documentMode||9<document.documentMode)}function sp(){jr&&(jr.detachEvent("onpropertychange",rp),Zr=jr=null)}function rp(t){if(t.propertyName==="value"&&$o(Zr)){var n=[];ep(n,Zr,t,jc(t)),kd(Qv,n)}}function Jv(t,n,a){t==="focusin"?(sp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",rp)):t==="focusout"&&sp()}function $v(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Zr)}function tS(t,n){if(t==="click")return $o(n)}function eS(t,n){if(t==="input"||t==="change")return $o(n)}function nS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:nS;function Kr(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!Zn(t[c],n[c]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,n){var a=op(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vi(t.document)}return n}function su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var iS=Gi&&"documentMode"in document&&11>=document.documentMode,Os=null,ru=null,Qr=null,ou=!1;function fp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Os==null||Os!==vi(r)||(r=Os,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Gl(ru,"onSelect"),0<r.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Os)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ps={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},lu={},hp={};Gi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function ts(t){if(lu[t])return lu[t];if(!Ps[t])return t;var n=Ps[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return lu[t]=n[a];return t}var dp=ts("animationend"),pp=ts("animationiteration"),mp=ts("animationstart"),aS=ts("transitionrun"),sS=ts("transitionstart"),rS=ts("transitioncancel"),_p=ts("transitionend"),gp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function Si(t,n){gp.set(t,n),Nt(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],zs=0,uu=0;function el(){for(var t=zs,n=uu=zs=0;n<t;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&vp(a,c,f)}}function nl(t,n,a,r){ri[zs++]=t,ri[zs++]=n,ri[zs++]=a,ri[zs++]=r,uu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function fu(t,n,a,r){return nl(t,n,a,r),il(t)}function es(t,n){return nl(t,null,null,n),il(t)}function vp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Qt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function il(t){if(50<xo)throw xo=0,yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Bs={};function oS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new oS(t,n,a,r)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")hu(t)&&(_=1);else if(typeof t=="string")_=hx(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Kn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return ns(a.children,c,f,n);case M:_=8,c|=24;break;case g:return t=Kn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case q:return t=Kn(13,a,n,c),t.elementType=q,t.lanes=f,t;case H:return t=Kn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break t;case B:_=9;break t;case D:_=11;break t;case O:_=14;break t;case V:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ns(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function du(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function xp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function pu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var yp=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},yp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var Is=[],Fs=0,sl=null,Jr=0,li=[],ci=0,ma=null,wi=1,Di="";function ki(t,n){Is[Fs++]=Jr,Is[Fs++]=sl,sl=t,Jr=n}function Mp(t,n,a){li[ci++]=wi,li[ci++]=Di,li[ci++]=ma,ma=t;var r=wi;t=Di;var c=32-Qt(r)-1;r&=~(1<<c),a+=1;var f=32-Qt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,wi=1<<32-Qt(n)+c|a<<c|r,Di=f+t}else wi=1<<f|a<<c|r,Di=t}function mu(t){t.return!==null&&(ki(t,1),Mp(t,1,0))}function _u(t){for(;t===sl;)sl=Is[--Fs],Is[Fs]=null,Jr=Is[--Fs],Is[Fs]=null;for(;t===ma;)ma=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null}function Ep(t,n){li[ci++]=wi,li[ci++]=Di,li[ci++]=ma,wi=n.id,Di=n.overflow,ma=t}var xn=null,Xe=null,ye=!1,_a=null,ui=!1,gu=Error(s(519));function ga(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(oi(n,t)),gu}function Tp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ke]=t,n[vn]=r,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)de(Mo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Ln(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Ds(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||G_(n.textContent,a)?(r.popover!=null&&(de("beforetoggle",n),de("toggle",n)),r.onScroll!=null&&de("scroll",n),r.onScrollEnd!=null&&de("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||ga(t,!0)}function bp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:xn=xn.return}}function Hs(t){if(t!==xn)return!1;if(!ye)return bp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zf(t.type,t.memoizedProps)),a=!a),a&&Xe&&ga(t),bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=K_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xe=K_(t)}else n===27?(n=Xe,Ua(t.type)?(t=Gf,Gf=null,Xe=t):Xe=n):Xe=xn?hi(t.stateNode.nextSibling):null;return!0}function is(){Xe=xn=null,ye=!1}function vu(){var t=_a;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),_a=null),t}function $r(t){_a===null?_a=[t]:_a.push(t)}var Su=L(null),as=null,Xi=null;function va(t,n,a){St(Su,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=Su.current,st(Su)}function xu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),xu(f.return,a,t),r||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),xu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Gs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;Zn(c.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(c===vt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}c=c.return}t!==null&&yu(n,t,a,r),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ss(t){as=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return Ap(as,t)}function ol(t,n){return as===null&&ss(t),Ap(t,n)}function Ap(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(s(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var lS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},cS=o.unstable_scheduleCallback,uS=o.unstable_NormalPriority,nn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new lS,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&cS(uS,function(){t.controller.abort()})}var eo=null,Eu=0,Vs=0,ks=null;function fS(t,n){if(eo===null){var a=eo=[];Eu=0,Vs=Rf(),ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,n.then(Rp,Rp),n}function Rp(){if(--Eu===0&&eo!==null){ks!==null&&(ks.status="fulfilled");var t=eo;eo=null,Vs=0,ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Cp=P.S;P.S=function(t,n){f_=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fS(t,n),Cp!==null&&Cp(t,n)};var rs=L(null);function Tu(){var t=rs.current;return t!==null?t:Ve.pooledCache}function ll(t,n){n===null?St(rs,rs.current):St(rs,n.pool)}function wp(){var t=Tu();return t===null?null:{parent:nn._currentValue,pool:t}}var Xs=Error(s(460)),bu=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function Dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t}throw ls=n,Xs}}function os(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,Xs):a}}var ls=null;function Lp(){if(ls===null)throw Error(s(459));var t=ls;return ls=null,t}function Np(t){if(t===Xs||t===cl)throw Error(s(483))}var Ws=null,no=0;function fl(t){var n=no;return no+=1,Ws===null&&(Ws=[]),Up(Ws,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Op(t){function n(Y,G){if(t){var J=Y.deletions;J===null?(Y.deletions=[G],Y.flags|=16):J.push(G)}}function a(Y,G){if(!t)return null;for(;G!==null;)n(Y,G),G=G.sibling;return null}function r(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function c(Y,G){return Y=Vi(Y,G),Y.index=0,Y.sibling=null,Y}function f(Y,G,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<G?(Y.flags|=67108866,G):J):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,G,J,dt){return G===null||G.tag!==6?(G=du(J,Y.mode,dt),G.return=Y,G):(G=c(G,J),G.return=Y,G)}function z(Y,G,J,dt){var jt=J.type;return jt===C?ct(Y,G,J.props.children,dt,J.key):G!==null&&(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===V&&os(jt)===G.type)?(G=c(G,J.props),io(G,J),G.return=Y,G):(G=al(J.type,J.key,J.props,null,Y.mode,dt),io(G,J),G.return=Y,G)}function $(Y,G,J,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=pu(J,Y.mode,dt),G.return=Y,G):(G=c(G,J.children||[]),G.return=Y,G)}function ct(Y,G,J,dt,jt){return G===null||G.tag!==7?(G=ns(J,Y.mode,dt,jt),G.return=Y,G):(G=c(G,J),G.return=Y,G)}function _t(Y,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=du(""+G,Y.mode,J),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return J=al(G.type,G.key,G.props,null,Y.mode,J),io(J,G),J.return=Y,J;case b:return G=pu(G,Y.mode,J),G.return=Y,G;case V:return G=os(G),_t(Y,G,J)}if(pt(G)||it(G))return G=ns(G,Y.mode,J,null),G.return=Y,G;if(typeof G.then=="function")return _t(Y,fl(G),J);if(G.$$typeof===N)return _t(Y,ol(Y,G),J);hl(Y,G)}return null}function tt(Y,G,J,dt){var jt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return jt!==null?null:E(Y,G,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===jt?z(Y,G,J,dt):null;case b:return J.key===jt?$(Y,G,J,dt):null;case V:return J=os(J),tt(Y,G,J,dt)}if(pt(J)||it(J))return jt!==null?null:ct(Y,G,J,dt,null);if(typeof J.then=="function")return tt(Y,G,fl(J),dt);if(J.$$typeof===N)return tt(Y,G,ol(Y,J),dt);hl(Y,J)}return null}function ot(Y,G,J,dt,jt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(J)||null,E(G,Y,""+dt,jt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return Y=Y.get(dt.key===null?J:dt.key)||null,z(G,Y,dt,jt);case b:return Y=Y.get(dt.key===null?J:dt.key)||null,$(G,Y,dt,jt);case V:return dt=os(dt),ot(Y,G,J,dt,jt)}if(pt(dt)||it(dt))return Y=Y.get(J)||null,ct(G,Y,dt,jt,null);if(typeof dt.then=="function")return ot(Y,G,J,fl(dt),jt);if(dt.$$typeof===N)return ot(Y,G,J,ol(G,dt),jt);hl(G,dt)}return null}function Ft(Y,G,J,dt){for(var jt=null,Ae=null,Gt=G,oe=G=0,ve=null;Gt!==null&&oe<J.length;oe++){Gt.index>oe?(ve=Gt,Gt=null):ve=Gt.sibling;var Re=tt(Y,Gt,J[oe],dt);if(Re===null){Gt===null&&(Gt=ve);break}t&&Gt&&Re.alternate===null&&n(Y,Gt),G=f(Re,G,oe),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re,Gt=ve}if(oe===J.length)return a(Y,Gt),ye&&ki(Y,oe),jt;if(Gt===null){for(;oe<J.length;oe++)Gt=_t(Y,J[oe],dt),Gt!==null&&(G=f(Gt,G,oe),Ae===null?jt=Gt:Ae.sibling=Gt,Ae=Gt);return ye&&ki(Y,oe),jt}for(Gt=r(Gt);oe<J.length;oe++)ve=ot(Gt,Y,oe,J[oe],dt),ve!==null&&(t&&ve.alternate!==null&&Gt.delete(ve.key===null?oe:ve.key),G=f(ve,G,oe),Ae===null?jt=ve:Ae.sibling=ve,Ae=ve);return t&&Gt.forEach(function(za){return n(Y,za)}),ye&&ki(Y,oe),jt}function Kt(Y,G,J,dt){if(J==null)throw Error(s(151));for(var jt=null,Ae=null,Gt=G,oe=G=0,ve=null,Re=J.next();Gt!==null&&!Re.done;oe++,Re=J.next()){Gt.index>oe?(ve=Gt,Gt=null):ve=Gt.sibling;var za=tt(Y,Gt,Re.value,dt);if(za===null){Gt===null&&(Gt=ve);break}t&&Gt&&za.alternate===null&&n(Y,Gt),G=f(za,G,oe),Ae===null?jt=za:Ae.sibling=za,Ae=za,Gt=ve}if(Re.done)return a(Y,Gt),ye&&ki(Y,oe),jt;if(Gt===null){for(;!Re.done;oe++,Re=J.next())Re=_t(Y,Re.value,dt),Re!==null&&(G=f(Re,G,oe),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re);return ye&&ki(Y,oe),jt}for(Gt=r(Gt);!Re.done;oe++,Re=J.next())Re=ot(Gt,Y,oe,Re.value,dt),Re!==null&&(t&&Re.alternate!==null&&Gt.delete(Re.key===null?oe:Re.key),G=f(Re,G,oe),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re);return t&&Gt.forEach(function(Ex){return n(Y,Ex)}),ye&&ki(Y,oe),jt}function Ie(Y,G,J,dt){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var jt=J.key;G!==null;){if(G.key===jt){if(jt=J.type,jt===C){if(G.tag===7){a(Y,G.sibling),dt=c(G,J.props.children),dt.return=Y,Y=dt;break t}}else if(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===V&&os(jt)===G.type){a(Y,G.sibling),dt=c(G,J.props),io(dt,J),dt.return=Y,Y=dt;break t}a(Y,G);break}else n(Y,G);G=G.sibling}J.type===C?(dt=ns(J.props.children,Y.mode,dt,J.key),dt.return=Y,Y=dt):(dt=al(J.type,J.key,J.props,null,Y.mode,dt),io(dt,J),dt.return=Y,Y=dt)}return _(Y);case b:t:{for(jt=J.key;G!==null;){if(G.key===jt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(Y,G.sibling),dt=c(G,J.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,G);break}else n(Y,G);G=G.sibling}dt=pu(J,Y.mode,dt),dt.return=Y,Y=dt}return _(Y);case V:return J=os(J),Ie(Y,G,J,dt)}if(pt(J))return Ft(Y,G,J,dt);if(it(J)){if(jt=it(J),typeof jt!="function")throw Error(s(150));return J=jt.call(J),Kt(Y,G,J,dt)}if(typeof J.then=="function")return Ie(Y,G,fl(J),dt);if(J.$$typeof===N)return Ie(Y,G,ol(Y,J),dt);hl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(Y,G.sibling),dt=c(G,J),dt.return=Y,Y=dt):(a(Y,G),dt=du(J,Y.mode,dt),dt.return=Y,Y=dt),_(Y)):a(Y,G)}return function(Y,G,J,dt){try{no=0;var jt=Ie(Y,G,J,dt);return Ws=null,jt}catch(Gt){if(Gt===Xs||Gt===cl)throw Gt;var Ae=Kn(29,Gt,null,Y.mode);return Ae.lanes=dt,Ae.return=Y,Ae}}}var cs=Op(!0),Pp=Op(!1),Sa=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=il(t),vp(t,null,a),n}return nl(t,r,n,a),il(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Fr(t,a)}}function Cu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var wu=!1;function so(){if(wu){var t=ks;if(t!==null)throw t}}function ro(t,n,a,r){wu=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,$=z.next;z.next=null,_===null?f=$:_.next=$,_=z;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,E=ct.lastBaseUpdate,E!==_&&(E===null?ct.firstBaseUpdate=$:E.next=$,ct.lastBaseUpdate=z))}if(f!==null){var _t=c.baseState;_=0,ct=$=z=null,E=f;do{var tt=E.lane&-536870913,ot=tt!==E.lane;if(ot?(ge&tt)===tt:(r&tt)===tt){tt!==0&&tt===Vs&&(wu=!0),ct!==null&&(ct=ct.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,Kt=E;tt=n;var Ie=a;switch(Kt.tag){case 1:if(Ft=Kt.payload,typeof Ft=="function"){_t=Ft.call(Ie,_t,tt);break t}_t=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Kt.payload,tt=typeof Ft=="function"?Ft.call(Ie,_t,tt):Ft,tt==null)break t;_t=S({},_t,tt);break t;case 2:Sa=!0}}tt=E.callback,tt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ct===null?($=ct=ot,z=_t):ct=ct.next=ot,_|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ct===null&&(z=_t),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Aa|=_,t.lanes=_,t.memoizedState=_t}}function zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}var qs=L(null),dl=L(0);function Ip(t,n){t=ta,St(dl,t),St(qs,n),ta=t|n.baseLanes}function Du(){St(dl,ta),St(qs,qs.current)}function Uu(){ta=dl.current,st(qs),st(dl)}var Qn=L(null),fi=null;function Ma(t){var n=t.alternate;St(tn,tn.current&1),St(Qn,t),fi===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(fi=t)}function Lu(t){St(tn,tn.current),St(Qn,t),fi===null&&(fi=t)}function Fp(t){t.tag===22?(St(tn,tn.current),St(Qn,t),fi===null&&(fi=t)):Ea()}function Ea(){St(tn,tn.current),St(Qn,Qn.current)}function Jn(t){st(Qn),fi===t&&(fi=null),st(tn)}var tn=L(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,re=null,ze=null,an=null,ml=!1,Ys=!1,us=!1,_l=0,oo=0,js=null,dS=0;function Je(){throw Error(s(321))}function Nu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Ou(t,n,a,r,c,f){return qi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Mm:Zu,us=!1,f=a(r,c),us=!1,Ys&&(f=Gp(n,a,r,c)),Hp(t),f}function Hp(t){P.H=uo;var n=ze!==null&&ze.next!==null;if(qi=0,an=ze=re=null,ml=!1,oo=0,js=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&rl(t)&&(sn=!0))}function Gp(t,n,a,r){re=t;var c=0;do{if(Ys&&(js=null),oo=0,Ys=!1,25<=c)throw Error(s(301));if(c+=1,an=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Em,f=n(a,r)}while(Ys);return f}function pS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(re.flags|=1024),n}function Pu(){var t=_l!==0;return _l=0,t}function zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Bu(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}qi=0,an=ze=re=null,Ys=!1,oo=_l=0,js=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=t:an=an.next=t,an}function en(){if(ze===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,ze=t;else{if(t===null)throw re.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?re.memoizedState=an=t:an=an.next=t}return an}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,js===null&&(js=[]),t=Up(js,t,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Mm:Zu),t}function vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===N)return yn(t)}throw Error(s(438,String(t)))}function Iu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function Sl(t){var n=en();return Fu(n,ze,t)}function Fu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=_=null,z=null,$=n,ct=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(ge&_t)===_t:(qi&_t)===_t){var tt=$.revertLane;if(tt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Vs&&(ct=!0);else if((qi&tt)===tt){$=$.next,tt===Vs&&(ct=!0);continue}else _t={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=_t,_=f):z=z.next=_t,re.lanes|=tt,Aa|=tt;_t=$.action,us&&a(f,_t),f=$.hasEagerState?$.eagerState:a(f,_t)}else tt={lane:_t,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=tt,_=f):z=z.next=tt,re.lanes|=_t,Aa|=_t;$=$.next}while($!==null&&$!==n);if(z===null?_=f:z.next=E,!Zn(f,t.memoizedState)&&(sn=!0,ct&&(a=ks,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Hu(t){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Zn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Vp(t,n,a){var r=re,c=en(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Zn((ze||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,ku(Wp.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Zs(9,{destroy:void 0},Xp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(qi&127)!==0||kp(r,n,a)}return a}function kp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=gl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xp(t,n,a,r){n.value=a,n.getSnapshot=r,qp(n)&&Yp(t)}function Wp(t,n,a){return a(function(){qp(n)&&Yp(t)})}function qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Yp(t){var n=es(t,2);n!==null&&kn(n,t,2)}function Gu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),us){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function jp(t,n,a,r){return t.baseState=a,Fu(t,ze,typeof r=="function"?r:Yi)}function mS(t,n,a,r,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var E=a(c,r),z=P.S;z!==null&&z(_,E),Kp(t,n,E)}catch($){Vu(t,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(c,r),Kp(t,n,f)}catch($){Vu(t,n,$)}}function Kp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Qp(t,n,r)},function(r){return Vu(t,n,r)}):Qp(t,n,a)}function Qp(t,n,a){n.status="fulfilled",n.value=a,Jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zp(t,a)))}function Vu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==r)}t.action=null}function Jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $p(t,n){return n}function tm(t,n){if(ye){var a=Ve.formState;if(a!==null){t:{var r=re;if(ye){if(Xe){e:{for(var c=Xe,f=ui;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=hi(c.nextSibling),r=c.data==="F!";break t}}ga(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$p,lastRenderedState:n},a.queue=r,a=Sm.bind(null,re,r),r.dispatch=a,r=Gu(!1),f=ju.bind(null,re,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=mS.bind(null,re,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function em(t){var n=en();return nm(n,ze,t)}function nm(t,n,a){if(n=Fu(t,n,$p)[0],t=Sl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lo(n)}catch(_){throw _===Xs?cl:_}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Zs(9,{destroy:void 0},_S.bind(null,c,a),null)),[r,f,t]}function _S(t,n){t.action=n}function im(t){var n=en(),a=ze;if(a!==null)return nm(n,a,t);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Zs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=re.updateQueue,n===null&&(n=gl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function am(){return en().memoizedState}function xl(t,n,a,r){var c=Nn();re.flags|=t,c.memoizedState=Zs(1|n,{destroy:void 0},a,r===void 0?null:r)}function yl(t,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;ze!==null&&r!==null&&Nu(r,ze.memoizedState.deps)?c.memoizedState=Zs(n,f,a,r):(re.flags|=t,c.memoizedState=Zs(1|n,f,a,r))}function sm(t,n){xl(8390656,8,t,n)}function ku(t,n){yl(2048,8,t,n)}function gS(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=gl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function rm(t){var n=en().memoizedState;return gS({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function om(t,n){return yl(4,2,t,n)}function lm(t,n){return yl(4,4,t,n)}function cm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function um(t,n,a){a=a!=null?a.concat([t]):null,yl(4,4,cm.bind(null,n,t),a)}function Xu(){}function fm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function hm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nu(n,r[1]))return r[0];if(r=t(),us){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Wu(t,n,a){return a===void 0||(qi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=d_(),re.lanes|=t,Aa|=t,a)}function dm(t,n,a,r){return Zn(a,n)?a:qs.current!==null?(t=Wu(t,a,r),Zn(t,n)||(sn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(ge&261930)===0?(sn=!0,t.memoizedState=a):(t=d_(),re.lanes|=t,Aa|=t,n)}function pm(t,n,a,r,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var _=P.T,E={};P.T=E,ju(t,!1,n,a);try{var z=c(),$=P.S;if($!==null&&$(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=hS(z,r);co(t,n,ct,ei(t))}else co(t,n,r,ei(t))}catch(_t){co(t,n,{then:function(){},status:"rejected",reason:_t},ei())}finally{Q.p=f,_!==null&&E.types!==null&&(_.types=E.types),P.T=_}}function vS(){}function qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=mm(t).queue;pm(t,c,n,Z,a===null?vS:function(){return _m(t),a(r)})}function mm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function _m(t){var n=mm(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},ei())}function Yu(){return yn(Ro)}function gm(){return en().memoizedState}function vm(){return en().memoizedState}function SS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=xa(a);var r=ya(n,t,a);r!==null&&(kn(r,n,a),ao(r,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function xS(t,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?xm(n,a):(a=fu(t,n,a,r),a!==null&&(kn(a,t,r),ym(a,n,r)))}function Sm(t,n,a){var r=ei();co(t,n,a,r)}function co(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))xm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Zn(E,_))return nl(t,n,c,0),Ve===null&&el(),!1}catch{}if(a=fu(t,n,c,r),a!==null)return kn(a,t,r),ym(a,n,r),!0}return!1}function ju(t,n,a,r){if(r={lane:2,revertLane:Rf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=fu(t,a,r,2),n!==null&&kn(n,t,2)}function Ml(t){var n=t.alternate;return t===re||n!==null&&n===re}function xm(t,n){Ys=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ym(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Fr(t,a)}}var uo={readContext:yn,use:vl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};uo.useEffectEvent=Je;var Mm={readContext:yn,use:vl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:sm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,cm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(us){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(us){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=xS.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Gu(t);var n=t.queue,a=Sm.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Nn();return Wu(a,t,n)},useTransition:function(){var t=Gu(!1);return t=pm.bind(null,re,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=re,c=Nn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ge&127)!==0||kp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,sm(Wp.bind(null,r,f,t),[t]),r.flags|=2048,Zs(9,{destroy:void 0},Xp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=Ve.identifierPrefix;if(ye){var a=Di,r=wi;a=(r&~(1<<32-Qt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Iu,useCacheRefresh:function(){return Nn().memoizedState=SS.bind(null,re)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:yn,use:vl,useCallback:fm,useContext:yn,useEffect:ku,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Sl,useRef:am,useState:function(){return Sl(Yi)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=en();return dm(a,ze.memoizedState,t,n)},useTransition:function(){var t=Sl(Yi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Vp,useId:gm,useHostTransitionStatus:Yu,useFormState:em,useActionState:em,useOptimistic:function(t,n){var a=en();return jp(a,ze,t,n)},useMemoCache:Iu,useCacheRefresh:vm};Zu.useEffectEvent=rm;var Em={readContext:yn,use:vl,useCallback:fm,useContext:yn,useEffect:ku,useImperativeHandle:um,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Hu,useRef:am,useState:function(){return Hu(Yi)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=en();return ze===null?Wu(a,t,n):dm(a,ze.memoizedState,t,n)},useTransition:function(){var t=Hu(Yi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Vp,useId:gm,useHostTransitionStatus:Yu,useFormState:im,useActionState:im,useOptimistic:function(t,n){var a=en();return ze!==null?jp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:vm};Em.useEffectEvent=rm;function Ku(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ei(),c=xa(r);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,r),n!==null&&(kn(n,t,r),ao(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ei(),c=xa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,r),n!==null&&(kn(n,t,r),ao(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),r=xa(a);r.tag=2,n!=null&&(r.callback=n),n=ya(t,r,a),n!==null&&(kn(n,t,a),ao(n,t,a))}};function Tm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(c,f):!0}function bm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qu.enqueueReplaceState(n,n.state,null)}function fs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Am(t){tl(t)}function Rm(t){console.error(t)}function Cm(t){tl(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function wm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ju(t,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function Dm(t){return t=xa(t),t.tag=3,t}function Um(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){wm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){wm(n,a,r),typeof c!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function yS(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Pl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Tf(t,r,c)),!1;case 22:return a.flags|=65536,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Tf(t,r,c)),!1}throw Error(s(435,a.tag))}return Tf(t,r,c),Pl(),!1}if(ye)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(t=Error(s(422),{cause:r}),$r(oi(t,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),$r(oi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=oi(r,a),c=Ju(t.stateNode,r,c),Cu(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),So===null?So=[f]:So.push(f),$e!==4&&($e=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ju(a.stateNode,r,t),Cu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Dm(c),Um(c,t,a,r),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var $u=Error(s(461)),sn=!1;function Mn(t,n,a,r){n.child=t===null?Pp(n,null,a,r):cs(n,t.child,a,r)}function Lm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return ss(n),r=Ou(t,n,a,_,f,c),E=Pu(),t!==null&&!sn?(zu(t,n,c),ji(t,n,c)):(ye&&E&&mu(n),n.flags|=1,Mn(t,n,r,c),n.child)}function Nm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Om(t,n,f,r,c)):(t=al(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(_,r)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Vi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Om(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Kr(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,lf(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,ji(t,n,c)}return tf(t,n,a,r,c)}function Pm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return zm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):Du(),Fp(n);else return r=n.lanes=536870912,zm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ll(n,f.cachePool),Ip(n,f),Ea(),n.memoizedState=null):(t!==null&&ll(n,null),Du(),Ea());return Mn(t,n,c,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zm(t,n,a,r,c){var f=Tu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),Du(),Fp(n),t!==null&&Gs(t,n,r,!0),n.childLanes=c,null}function Tl(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Bm(t,n,a){return cs(n,t.child,null,a),t=Tl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function MS(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=Tl(n,r),n.lanes=536870912,fo(null,t);if(Lu(n),(t=Xe)?(t=Z_(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=xp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw ga(n);return n.lanes=536870912,null}return Tl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Lu(n),c)if(n.flags&256)n.flags&=-257,n=Bm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Gs(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(r=Ve,r!==null&&(_=Ci(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,es(t,_),kn(r,t,_),$u;Pl(),n=Bm(t,n,a)}else t=f.treeContext,Xe=hi(_.nextSibling),xn=n,ye=!0,_a=null,ui=!1,t!==null&&Ep(n,t),n=Tl(n,r),n.flags|=4096;return n}return t=Vi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function tf(t,n,a,r,c){return ss(n),a=Ou(t,n,a,r,void 0,c),r=Pu(),t!==null&&!sn?(zu(t,n,c),ji(t,n,c)):(ye&&r&&mu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Im(t,n,a,r,c,f){return ss(n),n.updateQueue=null,a=Gp(n,r,a,c),Hp(t),r=Pu(),t!==null&&!sn?(zu(t,n,f),ji(t,n,f)):(ye&&r&&mu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Fm(t,n,a,r,c){if(ss(n),n.stateNode===null){var f=Bs,_=a.contextType;typeof _=="object"&&_!==null&&(f=yn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Au(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?yn(_):Bs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ku(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Qu.enqueueReplaceState(f,f.state,null),ro(n,r,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=fs(a,E);f.props=z;var $=f.context,ct=a.contextType;_=Bs,typeof ct=="object"&&ct!==null&&(_=yn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==_)&&bm(n,f,r,_),Sa=!1;var tt=n.memoizedState;f.state=tt,ro(n,r,f,c),so(),$=n.memoizedState,E||tt!==$||Sa?(typeof _t=="function"&&(Ku(n,a,_t,r),$=n.memoizedState),(z=Sa||Tm(n,a,z,r,tt,$,_))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ru(t,n),_=n.memoizedProps,ct=fs(a,_),f.props=ct,_t=n.pendingProps,tt=f.context,$=a.contextType,z=Bs,typeof $=="object"&&$!==null&&(z=yn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||tt!==z)&&bm(n,f,r,z),Sa=!1,tt=n.memoizedState,f.state=tt,ro(n,r,f,c),so();var ot=n.memoizedState;_!==_t||tt!==ot||Sa||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof E=="function"&&(Ku(n,a,E,r),ot=n.memoizedState),(ct=Sa||Tm(n,a,ct,r,tt,ot,z)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=z,r=ct):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,bl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=cs(n,t.child,null,c),n.child=cs(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function Hm(t,n,a,r){return is(),n.flags|=256,Mn(t,n,a,r),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:wp()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function Gm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?Ma(n):Ea(),(t=Xe)?(t=Z_(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ma!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=xp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw ga(n);return Hf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ea(),c=n.mode,E=Al({mode:"hidden",children:E},c),r=ns(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,_,a),n.memoizedState=ef,fo(null,r)):(Ma(n),sf(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=r.fallback,c=n.mode,r=Al({mode:"visible",children:r.children},c),E=ns(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,cs(n,t.child,null,a),r=n.child,r.memoizedState=nf(a),r.childLanes=af(t,_,a),n.memoizedState=ef,n=fo(null,r));else if(Ma(n),Hf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var $=_.dgst;_=$,r=Error(s(419)),r.stack="",r.digest=_,$r({value:r,source:null,stack:null}),n=rf(t,n,a)}else if(sn||Gs(t,n,a,!1),_=(a&t.childLanes)!==0,sn||_){if(_=Ve,_!==null&&(r=Ci(_,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,es(t,r),kn(_,t,r),$u;Ff(E)||Pl(),n=rf(t,n,a)}else Ff(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Xe=hi(E.nextSibling),xn=n,ye=!0,_a=null,ui=!1,t!==null&&Ep(n,t),n=sf(n,r.children),n.flags|=4096);return n}return c?(Ea(),E=r.fallback,c=n.mode,z=t.child,$=z.sibling,r=Vi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,$!==null?E=Vi($,E):(E=ns(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,fo(null,r),r=n.child,E=t.child.memoizedState,E===null?E=nf(a):(c=E.cachePool,c!==null?(z=nn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=wp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=af(t,_,a),n.memoizedState=ef,fo(t.child,r)):(Ma(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function sf(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return cs(n,t.child,null,a),t=sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xu(t.return,n,a)}function of(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function km(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,St(tn,_),Mn(t,n,r,a),r=ye?Jr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,a,n);else if(t.tag===19)Vm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f,r);break;case"together":of(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Gs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function ES(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),va(n,nn,t.memoizedState.cache),is();break;case 27:case 5:ie(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(t,n,a):(Ma(n),t=ji(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Gs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return km(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Pm(t,n,a,n.pendingProps);case 24:va(n,nn,t.memoizedState.cache)}return ji(t,n,a)}function Xm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return sn=!1,ES(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,ye&&(n.flags&1048576)!==0&&Mp(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=os(n.elementType),n.type=t,typeof t=="function")hu(t)?(r=fs(t,r),n.tag=1,n=Fm(null,n,t,r,a)):(n.tag=0,n=tf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Lm(null,n,t,r,a);break t}else if(c===O){n.tag=14,n=Nm(null,n,t,r,a);break t}}throw n=ut(t)||t,Error(s(306,n,""))}}return n;case 0:return tf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=fs(r,n.pendingProps),Fm(t,n,r,c,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Ru(t,n),ro(n,r,null,a);var _=n.memoizedState;if(r=_.cache,va(n,nn,r),r!==f.cache&&yu(n,[nn],a,!0),so(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hm(t,n,r,a);break t}else if(r!==c){c=oi(Error(s(424)),n),$r(c),n=Hm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xe=hi(t.firstChild),xn=n,ye=!0,_a=null,ui=!0,a=Pp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(is(),r===c){n=ji(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,r=Vl(Et.current).createElement(a),r[Ke]=n,r[vn]=t,En(r,a,t),k(r),n.stateNode=r):n.memoizedState=eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ie(n),t===null&&ye&&(r=n.stateNode=J_(n.type,n.pendingProps,Et.current),xn=n,ui=!0,c=Xe,Ua(n.type)?(Gf=c,Xe=hi(r.firstChild)):Xe=c),Mn(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=r=Xe)&&(r=$S(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,xn=n,Xe=hi(r.firstChild),ui=!1,c=!0):c=!1),c||ga(n)),ie(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,zf(c,f)?r=null:_!==null&&zf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Ou(t,n,pS,null,null,a),Ro._currentValue=c),bl(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=Xe)&&(a=tx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,xn=n,Xe=null,t=!0):t=!1),t||ga(n)),null;case 13:return Gm(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=cs(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return Lm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,va(n,n.type,r.value),Mn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ss(n),c=yn(c),r=r(c),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return Nm(t,n,n.type,n.pendingProps,a);case 15:return Om(t,n,n.type,n.pendingProps,a);case 19:return km(t,n,a);case 31:return MS(t,n,a);case 22:return Pm(t,n,a,n.pendingProps);case 24:return ss(n),r=yn(nn),t===null?(c=Tu(),c===null&&(c=Ve,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Au(n),va(n,nn,c)):((t.lanes&a)!==0&&(Ru(t,n),ro(n,null,null,a),so()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,nn,r)):(r=f.cache,va(n,nn,r),r!==c.cache&&yu(n,[nn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(t){t.flags|=4}function cf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(g_())t.flags|=8192;else throw ls=ul,bu}else t.flags&=-16777217}function Wm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rg(n))if(g_())t.flags|=8192;else throw ls=ul,bu}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,$s|=n)}function ho(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function TS(t,n,a){var r=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Wi(nn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Hs(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Zi(n),f!==null?(We(n),Wm(n,f)):(We(n),cf(n,c,null,r,a))):f?f!==t.memoizedState?(Zi(n),We(n),Wm(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Zi(n),We(n),cf(n,c,t,r,a)),null;case 27:if(Ne(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=j.current,Hs(n)?Tp(n):(t=J_(c,r,a),n.stateNode=t,Zi(n))}return We(n),null;case 5:if(Ne(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=j.current,Hs(n))Tp(n);else{var _=Vl(Et.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Ke]=n,f[vn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Zi(n)}}return We(n),cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Hs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||G_(t.nodeValue,a)),t||ga(n,!0)}else t=Vl(t).createTextNode(r),t[Ke]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Hs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ke]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Hs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ke]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),We(n),null);case 4:return zt(),t===null&&Uf(n.stateNode.containerInfo),We(n),null;case 10:return Wi(n.type),We(n),null;case 19:if(st(tn),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ho(r,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,ho(r,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sp(a,t),a=a.sibling;return St(tn,tn.current&1|2),ye&&ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ht()>Ll&&(n.flags|=128,c=!0,ho(r,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),ho(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ye)return We(n),null}else 2*ht()-r.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,ho(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ht(),t.sibling=null,a=tn.current,St(tn,c?a&1|2:a&1),ye&&ki(n,r.treeForkCount),t):(We(n),null);case 22:case 23:return Jn(n),Uu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&st(rs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(nn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bS(t,n){switch(_u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(nn),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return st(tn),null;case 4:return zt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Jn(n),Uu(),t!==null&&st(rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(nn),null;case 25:return null;default:return null}}function qm(t,n){switch(_u(n),n.tag){case 3:Wi(nn),zt();break;case 26:case 27:case 5:Ne(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:st(tn);break;case 10:Wi(n.type);break;case 22:case 23:Jn(n),Uu(),t!==null&&st(rs);break;case 24:Wi(nn)}}function po(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){Le(n,n.return,E)}}function Ta(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var z=a,$=E;try{$()}catch(ct){Le(c,z,ct)}}}r=r.next}while(r!==f)}}catch(ct){Le(n,n.return,ct)}}function Ym(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bp(n,a)}catch(r){Le(t,t.return,r)}}}function jm(t,n,a){a.props=fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Le(t,n,r)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Le(t,n,c)}}function Ui(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function Zm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function uf(t,n,a){try{var r=t.stateNode;YS(r,t.type,a,n),r[vn]=n}catch(c){Le(t,t.return,c)}}function Km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ua(t.type)||t.tag===4}function ff(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(r!==4&&(r===27&&Ua(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Cl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ua(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cl(t,n,a),t=t.sibling;t!==null;)Cl(t,n,a),t=t.sibling}function Qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,r,a),n[Ke]=t,n[vn]=a}catch(f){Le(t,t.return,f)}}var Ki=!1,rn=!1,df=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function AS(t,n){if(t=t.containerInfo,Of=Zl,t=up(t),su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,z=-1,$=0,ct=0,_t=t,tt=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(E=_+c),_t!==f||r!==0&&_t.nodeType!==3||(z=_+r),_t.nodeType===3&&(_+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)tt=_t,_t=ot;for(;;){if(_t===t)break e;if(tt===a&&++$===c&&(E=_),tt===f&&++ct===r&&(z=_),(ot=_t.nextSibling)!==null)break;_t=tt,tt=_t.parentNode}_t=ot}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:t,selectionRange:a},Zl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=fs(a.type,c);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){Le(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)If(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function $m(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&po(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Le(a,a.return,_)}else{var c=fs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Le(a,a.return,_)}}r&64&&Ym(a),r&512&&mo(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bp(t,n)}catch(_){Le(a,a.return,_)}}break;case 27:n===null&&r&4&&Qm(a);case 26:case 5:Ji(t,a),n===null&&r&4&&Zm(a),r&512&&mo(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&n_(t,a);break;case 13:Ji(t,a),r&4&&i_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=PS.bind(null,a),ex(t,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||rn,c=Ki;var f=rn;Ki=r,(rn=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=c,rn=f}break;case 30:break;default:Ji(t,a)}}function t_(t){var n=t.alternate;n!==null&&(t.alternate=null,t_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)e_(t,n,a),a=a.sibling}function e_(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:rn||Ui(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ui(a,n);var r=je,c=Fn;Ua(a.type)&&(je=a.stateNode,Fn=!1),Qi(t,n,a),To(a.stateNode),je=r,Fn=c;break;case 5:rn||Ui(a,n);case 6:if(r=je,c=Fn,je=null,Qi(t,n,a),je=r,Fn=c,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,Y_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),or(t)):Y_(je,a.stateNode));break;case 4:r=je,c=Fn,je=a.stateNode.containerInfo,Fn=!0,Qi(t,n,a),je=r,Fn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),rn||Ta(4,a,n),Qi(t,n,a);break;case 1:rn||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jm(a,n,r)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Qi(t,n,a),rn=r;break;default:Qi(t,n,a)}}function n_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{or(t)}catch(a){Le(n,n.return,a)}}}function i_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{or(t)}catch(a){Le(n,n.return,a)}}function RS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jm),n;default:throw Error(s(435,t.tag))}}function wl(t,n){var a=RS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=zS.bind(null,t,r);r.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Ua(E.type)){je=E.stateNode,Fn=!1;break t}break;case 5:je=E.stateNode,Fn=!1;break t;case 3:case 4:je=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(je===null)throw Error(s(160));e_(f,_,c),je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)a_(n,t),n=n.sibling}var xi=null;function a_(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),r&4&&(Ta(3,t,t.return),po(3,t),Ta(5,t,t.return));break;case 1:Hn(n,t),Gn(t),r&512&&(rn||a===null||Ui(a,a.return)),r&64&&Ki&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=xi;if(Hn(n,t),Gn(t),r&512&&(rn||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qa]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,r,a),f[Ke]=t,k(f),r=f;break t;case"link":var _=ag("link","href",c).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;case"meta":if(_=ag("meta","content",c).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ke]=t,k(f),r=f}t.stateNode=r}else sg(c,t.type,t.stateNode);else t.stateNode=ig(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?sg(c,t.type,t.stateNode):ig(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),r&512&&(rn||a===null||Ui(a,a.return)),a!==null&&r&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),r&512&&(rn||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{Bn(c,"")}catch(Ft){Le(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(df=!0);break;case 6:if(Hn(n,t),Gn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(Wl=null,c=xi,xi=kl(n.containerInfo),Hn(n,t),xi=c,Gn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}df&&(df=!1,s_(t));break;case 4:r=xi,xi=kl(t.stateNode.containerInfo),Hn(n,t),Gn(t),xi=r;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=ht()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Ki,ct=rn;if(Ki=$||c,rn=ct||z,Hn(n,t),rn=ct,Ki=$,Gn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Ki||rn||hs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=z.stateNode;var _t=z.memoizedProps.style,tt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ft){Le(z,z.return,Ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ft){Le(z,z.return,Ft)}}}else if(n.tag===18){if(a===null){z=n;try{var ot=z.stateNode;c?j_(ot,!0):j_(z.stateNode,!1)}catch(Ft){Le(z,z.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,wl(t,a))));break;case 19:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Km(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ff(t);Cl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Bn(_,""),a.flags&=-33);var E=ff(t);Cl(t,E,_);break;case 3:case 4:var z=a.stateNode.containerInfo,$=ff(t);hf(t,$,z);break;default:throw Error(s(161))}}catch(ct){Le(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function s_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;s_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(t,n.alternate,n),n=n.sibling}function hs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hs(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),hs(n);break;case 27:To(n.stateNode);case 26:case 5:Ui(n,n.return),hs(n);break;case 22:n.memoizedState===null&&hs(n);break;case 30:hs(n);break;default:hs(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:$i(c,f,a),po(4,f);break;case 1:if($i(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Le(r,r.return,$)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)zp(z[c],E)}catch($){Le(r,r.return,$)}}a&&_&64&&Ym(f),mo(f,f.return);break;case 27:Qm(f);case 26:case 5:$i(c,f,a),a&&r===null&&_&4&&Zm(f),mo(f,f.return);break;case 12:$i(c,f,a);break;case 31:$i(c,f,a),a&&_&4&&n_(c,f);break;case 13:$i(c,f,a),a&&_&4&&i_(c,f);break;case 22:f.memoizedState===null&&$i(c,f,a),mo(f,f.return);break;case 30:break;default:$i(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function yi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)r_(t,n,a,r),n=n.sibling}function r_(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,r),c&2048&&po(9,n);break;case 1:yi(t,n,a,r);break;case 3:yi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){yi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Le(n,n.return,z)}}else yi(t,n,a,r);break;case 31:yi(t,n,a,r);break;case 13:yi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,r):_o(t,n):f._visibility&2?yi(t,n,a,r):(f._visibility|=2,Ks(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&pf(_,n);break;case 24:yi(t,n,a,r),c&2048&&mf(n.alternate,n);break;default:yi(t,n,a,r)}}function Ks(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,z=r,$=_.flags;switch(_.tag){case 0:case 11:case 15:Ks(f,_,E,z,c),po(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?Ks(f,_,E,z,c):_o(f,_):(ct._visibility|=2,Ks(f,_,E,z,c)),c&&$&2048&&pf(_.alternate,_);break;case 24:Ks(f,_,E,z,c),c&&$&2048&&mf(_.alternate,_);break;default:Ks(f,_,E,z,c)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:_o(a,r),c&2048&&pf(r.alternate,r);break;case 24:_o(a,r),c&2048&&mf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var go=8192;function Qs(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)o_(t,n,a),t=t.sibling}function o_(t,n,a){switch(t.tag){case 26:Qs(t,n,a),t.flags&go&&t.memoizedState!==null&&dx(a,xi,t.memoizedState,t.memoizedProps);break;case 5:Qs(t,n,a);break;case 3:case 4:var r=xi;xi=kl(t.stateNode.containerInfo),Qs(t,n,a),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,Qs(t,n,a),go=r):Qs(t,n,a));break;default:Qs(t,n,a)}}function l_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,u_(r,t)}l_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c_(t),t=t.sibling}function c_(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):vo(t);break;default:vo(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,u_(r,t)}l_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function u_(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=t;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(t_(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var CS={getCacheForType:function(t){var n=yn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(nn).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,he=null,ge=0,Ue=0,$n=null,ba=!1,Js=!1,_f=!1,ta=0,$e=0,Aa=0,ds=0,gf=0,ti=0,$s=0,So=null,Vn=null,vf=!1,Ul=0,f_=0,Ll=1/0,Nl=null,Ra=null,un=0,Ca=null,tr=null,ea=0,Sf=0,xf=null,h_=null,xo=0,yf=null;function ei(){return(we&2)!==0&&ge!==0?ge&-ge:P.T!==null?Rf():Hr()}function d_(){if(ti===0)if((ge&536870912)===0||ye){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),ti=t}else ti=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ti}function kn(t,n,a){(t===Ve&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(er(t,0),wa(t,ge,ti,!1)),gn(t,a),((we&2)===0||t!==Ve)&&(t===Ve&&((we&2)===0&&(ds|=a),$e===4&&wa(t,ge,ti,!1)),Li(t))}function p_(t,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Jt(t,n),c=r?LS(t,n):Ef(t,n,!0),f=r;do{if(c===0){Js&&!r&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!DS(a)){c=Ef(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;c=So;var z=E.current.memoizedState.isDehydrated;if(z&&(er(E,_).flags|=256),_=Ef(E,_,!1),_!==2){if(_f&&!z){E.errorRecoveryDisabledLanes|=f,ds|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){er(t,0),wa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(r,n,ti,!ba);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ul+300-ht(),10<c)){if(wa(r,n,ti,!ba),Dt(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=W_(m_.bind(null,r,a,Vn,Nl,vf,n,ti,ds,$s,ba,f,"Throttled",-0,0),c);break t}m_(r,a,Vn,Nl,vf,n,ti,ds,$s,ba,f,null,-0,0)}}break}while(!0);Li(t)}function m_(t,n,a,r,c,f,_,E,z,$,ct,_t,tt,ot){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},o_(n,f,_t);var Ft=(f&62914560)===f?Ul-ht():(f&4194048)===f?f_-ht():0;if(Ft=px(_t,Ft),Ft!==null){ea=f,t.cancelPendingCommit=Ft(E_.bind(null,t,n,f,a,r,c,_,E,z,ct,_t,null,tt,ot)),wa(t,f,_,!$);return}}E_(t,n,f,a,r,c,_,E,z)}function DS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,r){n&=~gf,n&=~ds,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Qt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Ir(t,a,n)}function Ol(){return(we&6)===0?(yo(0),!1):!0}function Mf(){if(he!==null){if(Ue===0)var t=he.return;else t=he,Xi=as=null,Bu(t),Ws=null,no=0,t=he;for(;t!==null;)qm(t.alternate,t),t=t.return;he=null}}function er(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,KS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,Mf(),Ve=t,he=a=Vi(t.current,null),ge=n,Ue=0,$n=null,ba=!1,Js=Jt(t,n),_f=!1,$s=ti=gf=ds=Aa=$e=0,Vn=So=null,vf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Qt(r),f=1<<c;n|=t[c],r&=~f}return ta=n,el(),a}function __(t,n){re=null,P.H=uo,n===Xs||n===cl?(n=Lp(),Ue=3):n===bu?(n=Lp(),Ue=4):Ue=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,he===null&&($e=1,El(t,oi(n,t.current)))}function g_(){var t=Qn.current;return t===null?!0:(ge&4194048)===ge?fi===null:(ge&62914560)===ge||(ge&536870912)!==0?t===fi:!1}function v_(){var t=P.H;return P.H=uo,t===null?uo:t}function S_(){var t=P.A;return P.A=CS,t}function Pl(){$e=4,ba||(ge&4194048)!==ge&&Qn.current!==null||(Js=!0),(Aa&134217727)===0&&(ds&134217727)===0||Ve===null||wa(Ve,ge,ti,!1)}function Ef(t,n,a){var r=we;we|=2;var c=v_(),f=S_();(Ve!==t||ge!==n)&&(Nl=null,er(t,n)),n=!1;var _=$e;t:do try{if(Ue!==0&&he!==null){var E=he,z=$n;switch(Ue){case 8:Mf(),_=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var $=Ue;if(Ue=0,$n=null,nr(t,E,z,$),a&&Js){_=0;break t}break;default:$=Ue,Ue=0,$n=null,nr(t,E,z,$)}}US(),_=$e;break}catch(ct){__(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Xi=as=null,we=r,P.H=c,P.A=f,he===null&&(Ve=null,ge=0,el()),_}function US(){for(;he!==null;)x_(he)}function LS(t,n){var a=we;we|=2;var r=v_(),c=S_();Ve!==t||ge!==n?(Nl=null,Ll=ht()+500,er(t,n)):Js=Jt(t,n);t:do try{if(Ue!==0&&he!==null){n=he;var f=$n;e:switch(Ue){case 1:Ue=0,$n=null,nr(t,n,f,1);break;case 2:case 9:if(Dp(f)){Ue=0,$n=null,y_(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==t||(Ue=7),Li(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Dp(f)?(Ue=0,$n=null,y_(n)):(Ue=0,$n=null,nr(t,n,f,7));break;case 5:var _=null;switch(he.tag){case 26:_=he.memoizedState;case 5:case 27:var E=he;if(_?rg(_):E.stateNode.complete){Ue=0,$n=null;var z=E.sibling;if(z!==null)he=z;else{var $=E.return;$!==null?(he=$,zl($)):he=null}break e}}Ue=0,$n=null,nr(t,n,f,5);break;case 6:Ue=0,$n=null,nr(t,n,f,6);break;case 8:Mf(),$e=6;break t;default:throw Error(s(462))}}NS();break}catch(ct){__(t,ct)}while(!0);return Xi=as=null,P.H=r,P.A=c,we=a,he!==null?0:(Ve=null,ge=0,el(),$e)}function NS(){for(;he!==null&&!T();)x_(he)}function x_(t){var n=Xm(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?zl(t):he=n}function y_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Im(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Im(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Bu(n);default:qm(a,n),n=he=Sp(n,ta),n=Xm(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?zl(t):he=n}function nr(t,n,a,r){Xi=as=null,Bu(n),Ws=null,no=0;var c=n.return;try{if(yS(t,c,n,a,ge)){$e=1,El(t,oi(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;$e=1,El(t,oi(a,t.current)),he=null;return}n.flags&32768?(ye||r===1?t=!0:Js||(ge&536870912)!==0?t=!1:(ba=t=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),M_(n,t)):zl(n)}function zl(t){var n=t;do{if((n.flags&32768)!==0){M_(n,ba);return}t=n.return;var a=TS(n.alternate,n,ta);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);$e===0&&($e=5)}function M_(t,n){do{var a=bS(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);$e=6,he=null}function E_(t,n,a,r,c,f,_,E,z){t.cancelPendingCommit=null;do Bl();while(un!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,_i(t,a,f,_,E,z),t===Ve&&(he=Ve=null,ge=0),tr=n,Ca=t,ea=a,Sf=f,xf=c,h_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,BS(wt,function(){return C_(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=Q.p,Q.p=2,_=we,we|=4;try{AS(t,n,a)}finally{we=_,Q.p=c,P.T=r}}un=1,T_(),b_(),A_()}}function T_(){if(un===1){un=0;var t=Ca,n=tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Q.p;Q.p=2;var c=we;we|=4;try{a_(n,t);var f=Pf,_=up(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&cp(E.ownerDocument.documentElement,E)){if(z!==null&&su(E)){var $=z.start,ct=z.end;if(ct===void 0&&(ct=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ct,E.value.length);else{var _t=E.ownerDocument||document,tt=_t&&_t.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Ft=E.textContent.length,Kt=Math.min(z.start,Ft),Ie=z.end===void 0?Kt:Math.min(z.end,Ft);!ot.extend&&Kt>Ie&&(_=Ie,Ie=Kt,Kt=_);var Y=lp(E,Kt),G=lp(E,Ie);if(Y&&G&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var J=_t.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),Kt>Ie?(ot.addRange(J),ot.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),ot.addRange(J))}}}}for(_t=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var dt=_t[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Zl=!!Of,Pf=Of=null}finally{we=c,Q.p=r,P.T=a}}t.current=n,un=2}}function b_(){if(un===2){un=0;var t=Ca,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Q.p;Q.p=2;var c=we;we|=4;try{$m(t,n.alternate,n)}finally{we=c,Q.p=r,P.T=a}}un=3}}function A_(){if(un===4||un===3){un=0,et();var t=Ca,n=tr,a=ea,r=h_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,tr=Ca=null,R_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ra=null),ws(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=Q.p,Q.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{P.T=n,Q.p=c}}(ea&3)!==0&&Bl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===yf?xo++:(xo=0,yf=t):xo=0,yo(0)}}function R_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Bl(){return T_(),b_(),A_(),C_()}function C_(){if(un!==5)return!1;var t=Ca,n=Sf;Sf=0;var a=ws(ea),r=P.T,c=Q.p;try{Q.p=32>a?32:a,P.T=null,a=xf,xf=null;var f=Ca,_=ea;if(un=0,tr=Ca=null,ea=0,(we&6)!==0)throw Error(s(331));var E=we;if(we|=4,c_(f.current),r_(f,f.current,_,a),we=E,yo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(qt,f)}catch{}return!0}finally{Q.p=c,P.T=r,R_(t,n)}}function w_(t,n,a){n=oi(a,n),n=Ju(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(gn(t,2),Li(t))}function Le(t,n,a){if(t.tag===3)w_(t,t,a);else for(;n!==null;){if(n.tag===3){w_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ra===null||!Ra.has(r))){t=oi(a,t),a=Dm(2),r=ya(n,a,2),r!==null&&(Um(a,r,n,t),gn(r,2),Li(r));break}}n=n.return}}function Tf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new wS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(_f=!0,c.add(a),t=OS.bind(null,t,n,a),n.then(t,t))}function OS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ge&a)===a&&($e===4||$e===3&&(ge&62914560)===ge&&300>ht()-Ul?(we&2)===0&&er(t,0):gf|=a,$s===ge&&($s=0)),Li(t)}function D_(t,n){n===0&&(n=ln()),t=es(t,n),t!==null&&(gn(t,n),Li(t))}function PS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),D_(t,a)}function zS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),D_(t,a)}function BS(t,n){return Xt(t,n)}var Il=null,ir=null,bf=!1,Fl=!1,Af=!1,Da=0;function Li(t){t!==ir&&t.next===null&&(ir===null?Il=ir=t:ir=ir.next=t),Fl=!0,bf||(bf=!0,FS())}function yo(t,n){if(!Af&&Fl){Af=!0;do for(var a=!1,r=Il;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Qt(42|t)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,O_(r,f))}else f=ge,f=Dt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Jt(r,f)||(a=!0,O_(r,f));r=r.next}while(a);Af=!1}}function IS(){U_()}function U_(){Fl=bf=!1;var t=0;Da!==0&&ZS()&&(t=Da);for(var n=ht(),a=null,r=Il;r!==null;){var c=r.next,f=L_(r,n);f===0?(r.next=null,a===null?Il=c:a.next=c,c===null&&(ir=a)):(a=r,(t!==0||(f&3)!==0)&&(Fl=!0)),r=c}un!==0&&un!==5||yo(t),Da!==0&&(Da=0)}function L_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Qt(f),E=1<<_,z=c[_];z===-1?((E&a)===0||(E&r)!==0)&&(c[_]=Ye(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ve,a=ge,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),ws(a)){case 2:case 8:a=Vt;break;case 32:a=wt;break;case 268435456:a=_e;break;default:a=wt}return r=N_.bind(null,t),a=Xt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function N_(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var r=ge;return r=Dt(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(p_(t,r,n),L_(t,ht()),t.callbackNode!=null&&t.callbackNode===a?N_.bind(null,t):null)}function O_(t,n){if(Bl())return null;p_(t,n,!0)}function FS(){QS(function(){(we&6)!==0?Xt(mt,IS):U_()})}function Rf(){if(Da===0){var t=Vs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Da=t}return Da}function P_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function z_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function HS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=P_((c[vn]||null).action),_=r.submitter;_&&(n=(n=_[vn]||null)?P_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Qo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Da!==0){var z=_?z_(c,_):new FormData(c);qu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=_?z_(c,_):new FormData(c),qu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],GS=wf.toLowerCase(),VS=wf[0].toUpperCase()+wf.slice(1);Si(GS,"on"+VS)}Si(dp,"onAnimationEnd"),Si(pp,"onAnimationIteration"),Si(mp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(aS,"onTransitionRun"),Si(sS,"onTransitionStart"),Si(rS,"onTransitionCancel"),Si(_p,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function B_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],z=E.instance,$=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ct){tl(ct)}c.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(E=r[_],z=E.instance,$=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ct){tl(ct)}c.currentTarget=null,f=z}}}}function de(t,n){var a=n[Gr];a===void 0&&(a=n[Gr]=new Set);var r=t+"__bubble";a.has(r)||(I_(n,t,2,!1),a.add(r))}function Df(t,n,a){var r=0;n&&(r|=4),I_(a,t,r,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Uf(t){if(!t[Hl]){t[Hl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(kS.has(a)||Df(a,!1,t),Df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Df("selectionchange",!1,n))}}function I_(t,n,a,r){switch(dg(n)){case 2:var c=gx;break;case 8:c=vx;break;default:c=qf}a=c.bind(null,n,a,t),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Lf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=A(E),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}E=E.parentNode}}r=r.return}kd(function(){var $=f,ct=jc(a),_t=[];t:{var tt=gp.get(t);if(tt!==void 0){var ot=Qo,Ft=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":ot=zv;break;case"focusin":Ft="focus",ot=tu;break;case"focusout":Ft="blur",ot=tu;break;case"beforeblur":case"afterblur":ot=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Fv;break;case dp:case pp:case mp:ot=Rv;break;case _p:ot=Gv;break;case"scroll":case"scrollend":ot=Mv;break;case"wheel":ot=kv;break;case"copy":case"cut":case"paste":ot=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=jd;break;case"toggle":case"beforetoggle":ot=Wv}var Kt=(n&4)!==0,Ie=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?tt!==null?tt+"Capture":null:tt;Kt=[];for(var G=$,J;G!==null;){var dt=G;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Y===null||(dt=kr(G,Y),dt!=null&&Kt.push(Eo(G,dt,J))),Ie)break;G=G.return}0<Kt.length&&(tt=new ot(tt,Ft,null,a,ct),_t.push({event:tt,listeners:Kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",tt&&a!==Yc&&(Ft=a.relatedTarget||a.fromElement)&&(A(Ft)||Ft[Fi]))break t;if((ot||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=$,Ft=Ft?A(Ft):null,Ft!==null&&(Ie=u(Ft),Kt=Ft.tag,Ft!==Ie||Kt!==5&&Kt!==27&&Kt!==6)&&(Ft=null)):(ot=null,Ft=$),ot!==Ft)){if(Kt=qd,dt="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=jd,dt="onPointerLeave",Y="onPointerEnter",G="pointer"),Ie=ot==null?tt:nt(ot),J=Ft==null?tt:nt(Ft),tt=new Kt(dt,G+"leave",ot,a,ct),tt.target=Ie,tt.relatedTarget=J,dt=null,A(ct)===$&&(Kt=new Kt(Y,G+"enter",Ft,a,ct),Kt.target=J,Kt.relatedTarget=Ie,dt=Kt),Ie=dt,ot&&Ft)e:{for(Kt=XS,Y=ot,G=Ft,J=0,dt=Y;dt;dt=Kt(dt))J++;dt=0;for(var jt=G;jt;jt=Kt(jt))dt++;for(;0<J-dt;)Y=Kt(Y),J--;for(;0<dt-J;)G=Kt(G),dt--;for(;J--;){if(Y===G||G!==null&&Y===G.alternate){Kt=Y;break e}Y=Kt(Y),G=Kt(G)}Kt=null}else Kt=null;ot!==null&&F_(_t,tt,ot,Kt,!1),Ft!==null&&Ie!==null&&F_(_t,Ie,Ft,Kt,!0)}}t:{if(tt=$?nt($):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Ae=np;else if(tp(tt))if(ip)Ae=eS;else{Ae=$v;var Gt=Jv}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?$&&qc($.elementType)&&(Ae=np):Ae=tS;if(Ae&&(Ae=Ae(t,$))){ep(_t,Ae,a,ct);break t}Gt&&Gt(t,tt,$),t==="focusout"&&$&&tt.type==="number"&&$.memoizedProps.value!=null&&Rn(tt,"number",tt.value)}switch(Gt=$?nt($):window,t){case"focusin":(tp(Gt)||Gt.contentEditable==="true")&&(Os=Gt,ru=$,Qr=null);break;case"focusout":Qr=ru=Os=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,fp(_t,a,ct);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":fp(_t,a,ct)}var oe;if(nu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ns?Jd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Zd&&a.locale!=="ko"&&(Ns||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ns&&(oe=Xd()):(pa=ct,Qc="value"in pa?pa.value:pa.textContent,Ns=!0)),Gt=Gl($,ve),0<Gt.length&&(ve=new Yd(ve,t,null,a,ct),_t.push({event:ve,listeners:Gt}),oe?ve.data=oe:(oe=$d(a),oe!==null&&(ve.data=oe)))),(oe=Yv?jv(t,a):Zv(t,a))&&(ve=Gl($,"onBeforeInput"),0<ve.length&&(Gt=new Yd("onBeforeInput","beforeinput",null,a,ct),_t.push({event:Gt,listeners:ve}),Gt.data=oe)),HS(_t,t,$,a,ct)}B_(_t,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=kr(t,a),c!=null&&r.unshift(Eo(t,c,f)),c=kr(t,n),c!=null&&r.push(Eo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function XS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F_(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,z=E.alternate,$=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||$===null||(z=$,c?($=kr(a,f),$!=null&&_.unshift(Eo(a,$,z))):c||($=kr(a,f),$!=null&&_.push(Eo(a,$,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var WS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function H_(t){return(typeof t=="string"?t:""+t).replace(WS,`
`).replace(qS,"")}function G_(t,n){return n=H_(n),H_(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Bn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Bn(t,""+r);break;case"className":ke(t,"class",r);break;case"tabIndex":ke(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,a,r);break;case"style":Gd(t,r,f);break;case"data":if(n!=="object"){ke(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Yo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":de("beforetoggle",t),de("toggle",t),xe(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xe(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xv.get(a)||a,xe(t,a,r))}}function Nf(t,n,a,r,c,f){switch(a){case"style":Gd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Bn(t,r):(typeof r=="number"||typeof r=="bigint")&&Bn(t,""+r);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):xe(t,a,r)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,_,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=_=c=null,z=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":_=ct;break;case"checked":z=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Be(t,n,r,ct,a,null)}}Ln(t,f,E,z,$,_,c,!1);return;case"select":de("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Be(t,n,c,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Qe(t,!!r,n,!1):a!=null&&Qe(t,!!r,a,!0);return;case"textarea":de("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(t,n,_,E,a,null)}Ds(t,r,c,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(r=a[z],r!=null)&&(z==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,z,r,a,null));return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(r=0;r<Mo.length;r++)de(Mo[r],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,$,r,a,null)}return;default:if(qc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Nf(t,n,ct,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Be(t,n,E,r,a,null))}function YS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,z=null,$=null,ct=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=_t;default:r.hasOwnProperty(ot)||Be(t,n,ot,null,r,_t)}}for(var tt in r){var ot=r[tt];if(_t=a[tt],r.hasOwnProperty(tt)&&(ot!=null||_t!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":ct=ot;break;case"value":_=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==_t&&Be(t,n,tt,ot,r,_t)}}Pe(t,_,E,z,$,ct,f,c);return;case"select":ot=_=E=tt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==z&&Be(t,n,c,f,r,z)}n=E,a=_,r=ot,tt!=null?Qe(t,!!a,tt,!1):!!r!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(t,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,_,c,r,f)}Sn(t,tt,ot);return;case"option":for(var Ft in a)tt=a[Ft],a.hasOwnProperty(Ft)&&tt!=null&&!r.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Be(t,n,Ft,null,r,tt));for(z in r)tt=r[z],ot=a[z],r.hasOwnProperty(z)&&tt!==ot&&(tt!=null||ot!=null)&&(z==="selected"?t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Be(t,n,z,tt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)tt=a[Kt],a.hasOwnProperty(Kt)&&tt!=null&&!r.hasOwnProperty(Kt)&&Be(t,n,Kt,null,r,tt);for($ in r)if(tt=r[$],ot=a[$],r.hasOwnProperty($)&&tt!==ot&&(tt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Be(t,n,$,tt,r,ot)}return;default:if(qc(n)){for(var Ie in a)tt=a[Ie],a.hasOwnProperty(Ie)&&tt!==void 0&&!r.hasOwnProperty(Ie)&&Nf(t,n,Ie,void 0,r,tt);for(ct in r)tt=r[ct],ot=a[ct],!r.hasOwnProperty(ct)||tt===ot||tt===void 0&&ot===void 0||Nf(t,n,ct,tt,r,ot);return}}for(var Y in a)tt=a[Y],a.hasOwnProperty(Y)&&tt!=null&&!r.hasOwnProperty(Y)&&Be(t,n,Y,null,r,tt);for(_t in r)tt=r[_t],ot=a[_t],!r.hasOwnProperty(_t)||tt===ot||tt==null&&ot==null||Be(t,n,_t,tt,r,ot)}function V_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&V_(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],$=z.startTime;if($>E)break;var ct=z.transferSize,_t=z.initiatorType;ct&&V_(_t)&&(z=z.responseEnd,_+=ct*(z<E?1:(E-$)/(z-$)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Of=null,Pf=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function k_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function ZS(){var t=window.event;return t&&t.type==="popstate"?t===Bf?!1:(Bf=t,!0):(Bf=null,!1)}var W_=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,q_=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof q_<"u"?function(t){return q_.resolve(null).then(t).catch(JS)}:W_;function JS(t){setTimeout(function(){throw t})}function Ua(t){return t==="head"}function Y_(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),or(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&To(t.ownerDocument.body);a=c}while(a);or(n)}function j_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $S(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function tx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function Z_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$?"||t.data==="$~"}function Hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ex(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gf=null;function K_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Q_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function J_(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vr(t)}var di=new Map,$_=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=Q.d;Q.d={f:nx,r:ix,D:ax,C:sx,L:rx,m:ox,X:cx,S:lx,M:ux};function nx(){var t=na.f(),n=Ol();return t||n}function ix(t){var n=W(t);n!==null&&n.tag===5&&n.type==="form"?_m(n):na.r(t)}var ar=typeof document>"u"?null:document;function tg(t,n,a){var r=ar;if(r&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),$_.has(c)||($_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),En(n,"link",t),k(n),r.head.appendChild(n)))}}function ax(t){na.D(t),tg("dns-prefetch",t,null)}function sx(t,n){na.C(t,n),tg("preconnect",t,n)}function rx(t,n,a){na.L(t,n,a);var r=ar;if(r&&t&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(t)+'"]';var f=c;switch(n){case"style":f=sr(t);break;case"script":f=rr(t)}di.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),En(n,"link",t),k(n),r.head.appendChild(n)))}}function ox(t,n){na.m(t,n);var a=ar;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(r)+'"][href="'+pn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(t)}if(!di.has(f)&&(t=S({rel:"modulepreload",href:t},n),di.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),En(r,"link",t),k(r),a.head.appendChild(r)}}}function lx(t,n,a){na.S(t,n,a);var r=ar;if(r&&t){var c=rt(r).hoistableStyles,f=sr(t);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(bo(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(f))&&Vf(t,a);var z=_=r.createElement("link");k(z),En(z,"link",t),z._p=new Promise(function($,ct){z.onload=$,z.onerror=ct}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Xl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function cx(t,n){na.X(t,n);var a=ar;if(a&&t){var r=rt(a).hoistableScripts,c=rr(t),f=r.get(c);f||(f=a.querySelector(Ao(c)),f||(t=S({src:t,async:!0},n),(n=di.get(c))&&kf(t,n),f=a.createElement("script"),k(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ux(t,n){na.M(t,n);var a=ar;if(a&&t){var r=rt(a).hoistableScripts,c=rr(t),f=r.get(c);f||(f=a.querySelector(Ao(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=di.get(c))&&kf(t,n),f=a.createElement("script"),k(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function eg(t,n,a,r){var c=(c=Et.current)?kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=rt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=sr(a.href);var f=rt(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(bo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),f||fx(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=rt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function sr(t){return'href="'+pn(t)+'"'}function bo(t){return'link[rel="stylesheet"]['+t+"]"}function ng(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function fx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),k(n),t.head.appendChild(n))}function rr(t){return'[src="'+pn(t)+'"]'}function Ao(t){return"script[async]"+t}function ig(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(r)return n.instance=r,k(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),k(r),En(r,"style",c),Xl(r,a.precedence,t),n.instance=r;case"stylesheet":c=sr(a.href);var f=t.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=ng(a),(c=di.get(c))&&Vf(r,c),f=(t.ownerDocument||t).createElement("link"),k(f);var _=f;return _._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),En(f,"link",r),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=rr(a.src),(c=t.querySelector(Ao(f)))?(n.instance=c,k(c),c):(r=a,(c=di.get(f))&&(r=S({},a),kf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),En(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xl(r,a.precedence,t));return n.instance}function Xl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function ag(t,n,a){if(Wl===null){var r=new Map,c=Wl=new Map;c.set(a,r)}else c=Wl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Qa]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function sg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=sr(r.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=ng(r),(c=di.get(c))&&Vf(r,c),f=f.createElement("link"),k(f);var _=f;_._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),En(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function px(t,n){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*jS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(mx,t),Yl=null,ql.call(t))}function mx(t,n){if(!(n.state.loading&4)){var a=Yl.get(t);if(a)var r=a.get(null);else{a=new Map,Yl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=ql.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function _x(t,n,a,r,c,f,_,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function og(t,n,a,r,c,f,_,E,z,$,ct,_t){return t=new _x(t,n,a,_,z,$,ct,_t,E),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Au(f),t}function lg(t){return t?(t=Bs,t):Bs}function cg(t,n,a,r,c,f){c=lg(c),r.context===null?r.context=c:r.pendingContext=c,r=xa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(t,r,n),a!==null&&(kn(a,t,n),ao(a,t,n))}function ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Wf(t,n){ug(t,n),(t=t.alternate)&&ug(t,n)}function fg(t){if(t.tag===13||t.tag===31){var n=es(t,67108864);n!==null&&kn(n,t,67108864),Wf(t,67108864)}}function hg(t){if(t.tag===13||t.tag===31){var n=ei();n=Za(n);var a=es(t,n);a!==null&&kn(a,t,n),Wf(t,n)}}var Zl=!0;function gx(t,n,a,r){var c=P.T;P.T=null;var f=Q.p;try{Q.p=2,qf(t,n,a,r)}finally{Q.p=f,P.T=c}}function vx(t,n,a,r){var c=P.T;P.T=null;var f=Q.p;try{Q.p=8,qf(t,n,a,r)}finally{Q.p=f,P.T=c}}function qf(t,n,a,r){if(Zl){var c=Yf(r);if(c===null)Lf(t,n,r,Kl,a),pg(t,r);else if(xx(c,t,n,a,r))r.stopPropagation();else if(pg(t,r),n&4&&-1<Sx.indexOf(t)){for(;c!==null;){var f=W(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ct(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var z=1<<31-Qt(_);E.entanglements[1]|=z,_&=~z}Li(f),(we&6)===0&&(Ll=ht()+500,yo(0))}}break;case 31:case 13:E=es(f,2),E!==null&&kn(E,f,2),Ol(),Wf(f,2)}if(f=Yf(r),f===null&&Lf(t,n,r,Kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Lf(t,n,r,null,a)}}function Yf(t){return t=jc(t),jf(t)}var Kl=null;function jf(t){if(Kl=null,t=A(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Vt:return 8;case wt:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Zf=!1,La=null,Na=null,Oa=null,Co=new Map,wo=new Map,Pa=[],Sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(t,n){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=W(n),n!==null&&fg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function xx(t,n,a,r,c){switch(n){case"focusin":return La=Do(La,t,n,a,r,c),!0;case"dragenter":return Na=Do(Na,t,n,a,r,c),!0;case"mouseover":return Oa=Do(Oa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,r,c)),!0}return!1}function mg(t){var n=A(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ka(t.priority,function(){hg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ka(t.priority,function(){hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=W(a),n!==null&&fg(n),t.blockedOn=a,!1;n.shift()}return!0}function _g(t,n,a){Ql(t)&&a.delete(n)}function yx(){Zf=!1,La!==null&&Ql(La)&&(La=null),Na!==null&&Ql(Na)&&(Na=null),Oa!==null&&Ql(Oa)&&(Oa=null),Co.forEach(_g),wo.forEach(_g)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yx)))}var $l=null;function gg(t){$l!==t&&($l=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=W(a);f!==null&&(t.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function or(t){function n(z){return Jl(z,t)}La!==null&&Jl(La,t),Na!==null&&Jl(Na,t),Oa!==null&&Jl(Oa,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<Pa.length;a++){var r=Pa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)mg(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[vn]||null;if(typeof f=="function")_||gg(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[vn]||null)E=_.formAction;else if(jf(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),gg(a)}}}function vg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Kf(t){this._internalRoot=t}tc.prototype.render=Kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();cg(a,r,t,n,null,null)},tc.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cg(t.current,2,null,t,null,null),Ol(),n[Fi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&mg(t)}};var Sg=e.version;if(Sg!=="19.2.4")throw Error(s(527,Sg,"19.2.4"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Mx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{qt=ec.inject(Mx),kt=ec}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Am,f=Rm,_=Cm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=og(t,1,!1,null,null,a,r,null,c,f,_,vg),t[Fi]=n.current,Uf(t),new Kf(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Am,_=Rm,E=Cm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=og(t,1,!0,n,a??null,r,c,z,f,_,E,vg),n.context=lg(null),a=n.current,r=ei(),r=Za(r),c=xa(r),c.callback=null,ya(a,c,r),a=r,n.current.lanes=a,gn(n,a),Li(n),t[Fi]=n.current,Uf(t),new tc(n)},Lo.version="19.2.4",Lo}var wg;function Lx(){if(wg)return $f.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=Ux(),$f.exports}var Nx=Lx();const Ox=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P0=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();var Px={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zx=Pn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>Pn.createElement("svg",{ref:m,...Px,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:P0("lucide",l),...d},[...h.map(([p,v])=>Pn.createElement(p,v)),...Array.isArray(u)?u:[u]]));const si=(o,e)=>{const i=Pn.forwardRef(({className:s,...l},u)=>Pn.createElement(zx,{ref:u,iconNode:e,className:P0(`lucide-${Ox(o)}`,s),...l}));return i.displayName=`${o}`,i};const Bx=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Rd=si("Box",Bx);const Ix=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fx=si("ChevronDown",Ix);const Hx=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Gx=si("ChevronLeft",Hx);const Vx=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kx=si("ChevronRight",Vx);const Xx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],Wx=si("CircleDot",Xx);const qx=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Yx=si("Download",qx);const jx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zx=si("Info",jx);const Kx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Qx=si("Layers",Kx);const Jx=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],$x=si("Menu",Jx);const ty=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],ih=si("Ruler",ty);const ey=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ny=si("Settings",ey);const iy=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],ay=si("Wind",iy);const sy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ry=si("X",sy),oy=[{id:"generator",label:"Генератор",icon:xt.jsx(Rd,{size:20})},{id:"templates",label:"Шаблоны",icon:xt.jsx(ny,{size:20})},{id:"download",label:"Скачать STL",icon:xt.jsx(Yx,{size:20})},{id:"about",label:"О проекте",icon:xt.jsx(Zx,{size:20})}];function ly({isOpen:o,onToggle:e,logoUrl:i}){const[s,l]=Pn.useState("generator");return xt.jsxs(xt.Fragment,{children:[xt.jsx("button",{className:"mobile-menu-btn",onClick:e,"aria-label":o?"Закрыть меню":"Открыть меню",children:o?xt.jsx(ry,{size:24}):xt.jsx($x,{size:24})}),xt.jsxs("aside",{className:`sidebar ${o?"open":"closed"}`,children:[xt.jsx("button",{className:"sidebar-toggle",onClick:e,"aria-label":o?"Свернуть меню":"Развернуть меню",children:o?xt.jsx(Gx,{size:20}):xt.jsx(kx,{size:20})}),xt.jsx("div",{className:"sidebar-logo",children:i?xt.jsx("img",{src:i,alt:"Logo",className:"logo-image"}):xt.jsxs("div",{className:"logo-placeholder",children:[xt.jsx(Rd,{size:32}),o&&xt.jsx("span",{children:"CaseGen"})]})}),xt.jsx("nav",{className:"sidebar-nav",children:oy.map(u=>xt.jsxs("button",{className:`nav-item ${s===u.id?"active":""}`,onClick:()=>l(u.id),title:o?void 0:u.label,children:[xt.jsx("span",{className:"nav-icon",children:u.icon}),o&&xt.jsx("span",{className:"nav-label",children:u.label})]},u.id))}),o&&xt.jsx("div",{className:"sidebar-footer",children:xt.jsx("p",{children:"Case Generator v0.1"})})]}),o&&xt.jsx("div",{className:"sidebar-overlay",onClick:e})]})}const Ih=[{id:"basic-box",name:"Базовый корпус",description:"Простой прямоугольный корпус для электроники",defaultParams:{width:80,height:60,depth:40,wallThickness:2,hasVentilation:!1,hasMountingHoles:!0}},{id:"ventilated-box",name:"Вентилируемый корпус",description:"Корпус с отверстиями для вентиляции",defaultParams:{width:100,height:80,depth:50,wallThickness:2,hasVentilation:!0,hasMountingHoles:!0}},{id:"compact-case",name:"Компактный корпус",description:"Минималистичный корпус для небольших проектов",defaultParams:{width:50,height:40,depth:25,wallThickness:1.5,hasVentilation:!1,hasMountingHoles:!1}}];function cy({selectedModel:o,onSelectModel:e}){const[i,s]=Pn.useState(!1);return xt.jsxs("div",{className:"model-selector",children:[xt.jsxs("label",{className:"selector-label",children:[xt.jsx(Rd,{size:16}),"Выберите модель"]}),xt.jsxs("div",{className:"selector-dropdown",children:[xt.jsxs("button",{className:"selector-trigger",onClick:()=>s(!i),children:[xt.jsx("span",{className:"trigger-content",children:o?xt.jsxs(xt.Fragment,{children:[xt.jsx("span",{className:"model-name",children:o.name}),xt.jsx("span",{className:"model-desc",children:o.description})]}):xt.jsx("span",{className:"placeholder",children:"Выберите шаблон корпуса..."})}),xt.jsx(Fx,{size:20,className:`chevron ${i?"open":""}`})]}),i&&xt.jsx("div",{className:"selector-options",children:Ih.map(l=>xt.jsx("button",{className:`option ${o?.id===l.id?"selected":""}`,onClick:()=>{e(l),s(!1)},children:xt.jsxs("div",{className:"option-content",children:[xt.jsx("span",{className:"option-name",children:l.name}),xt.jsx("span",{className:"option-desc",children:l.description}),xt.jsxs("div",{className:"option-params",children:[xt.jsxs("span",{children:["📐 ",l.defaultParams.width,"×",l.defaultParams.height,"×",l.defaultParams.depth," ","мм"]}),xt.jsxs("span",{children:["🧱 Стенка: ",l.defaultParams.wallThickness," мм"]})]})]})},l.id))})]})]})}function nc({label:o,icon:e,value:i,min:s,max:l,step:u,unit:h,onChange:d}){return xt.jsxs("div",{className:"param-field",children:[xt.jsxs("label",{className:"param-label",children:[e,o]}),xt.jsxs("div",{className:"param-input-group",children:[xt.jsx("input",{type:"number",value:i,min:s,max:l,step:u,onChange:m=>d(parseFloat(m.target.value)||s),className:"param-input"}),xt.jsx("span",{className:"param-unit",children:h})]}),xt.jsx("input",{type:"range",min:s,max:l,step:u,value:i,onChange:m=>d(parseFloat(m.target.value)),className:"param-slider"})]})}function uy({parameters:o,onChange:e}){const i=(s,l)=>{e({...o,[s]:l})};return xt.jsxs("div",{className:"parameter-form",children:[xt.jsx("h3",{className:"form-title",children:"Параметры корпуса"}),xt.jsxs("div",{className:"form-section",children:[xt.jsx("h4",{className:"section-title",children:"Размеры"}),xt.jsx(nc,{label:"Ширина",icon:xt.jsx(ih,{size:16}),value:o.width,min:20,max:500,step:1,unit:"мм",onChange:s=>i("width",s)}),xt.jsx(nc,{label:"Высота",icon:xt.jsx(ih,{size:16}),value:o.height,min:20,max:500,step:1,unit:"мм",onChange:s=>i("height",s)}),xt.jsx(nc,{label:"Глубина",icon:xt.jsx(ih,{size:16}),value:o.depth,min:10,max:300,step:1,unit:"мм",onChange:s=>i("depth",s)})]}),xt.jsxs("div",{className:"form-section",children:[xt.jsx("h4",{className:"section-title",children:"Конструкция"}),xt.jsx(nc,{label:"Толщина стенки",icon:xt.jsx(Qx,{size:16}),value:o.wallThickness,min:.8,max:10,step:.2,unit:"мм",onChange:s=>i("wallThickness",s)}),xt.jsxs("div",{className:"param-toggles",children:[xt.jsxs("label",{className:"toggle-item",children:[xt.jsxs("div",{className:"toggle-info",children:[xt.jsx(ay,{size:16}),xt.jsx("span",{children:"Вентиляция"})]}),xt.jsx("input",{type:"checkbox",checked:o.hasVentilation,onChange:s=>i("hasVentilation",s.target.checked),className:"toggle-input"}),xt.jsx("span",{className:"toggle-slider"})]}),xt.jsxs("label",{className:"toggle-item",children:[xt.jsxs("div",{className:"toggle-info",children:[xt.jsx(Wx,{size:16}),xt.jsx("span",{children:"Монтажные отверстия"})]}),xt.jsx("input",{type:"checkbox",checked:o.hasMountingHoles,onChange:s=>i("hasMountingHoles",s.target.checked),className:"toggle-input"}),xt.jsx("span",{className:"toggle-slider"})]})]})]})]})}const Cd="172",br={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fy=0,Dg=1,hy=2,z0=1,B0=2,la=3,Ya=0,qn=1,ca=2,Wa=0,Ar=1,Ug=2,Lg=3,Ng=4,dy=5,ys=100,py=101,my=102,_y=103,gy=104,vy=200,Sy=201,xy=202,yy=203,Fh=204,Hh=205,My=206,Ey=207,Ty=208,by=209,Ay=210,Ry=211,Cy=212,wy=213,Dy=214,Gh=0,Vh=1,kh=2,wr=3,Xh=4,Wh=5,qh=6,Yh=7,I0=0,Uy=1,Ly=2,qa=0,Ny=1,Oy=2,Py=3,zy=4,By=5,Iy=6,Fy=7,F0=300,Dr=301,Ur=302,jh=303,Zh=304,Hc=306,Kh=1e3,Es=1001,Qh=1002,Ri=1003,Hy=1004,ic=1005,Pi=1006,ah=1007,Ts=1008,da=1009,H0=1010,G0=1011,Vo=1012,wd=1013,bs=1014,ua=1015,ko=1016,Dd=1017,Ud=1018,Lr=1020,V0=35902,k0=1021,X0=1022,Ai=1023,W0=1024,q0=1025,Rr=1026,Nr=1027,Y0=1028,Ld=1029,j0=1030,Nd=1031,Od=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,sd=37808,rd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,_d=37819,gd=37820,vd=37821,Uc=36492,Sd=36494,xd=36495,Z0=36283,yd=36284,Md=36285,Ed=36286,Gy=3200,Vy=3201,K0=0,ky=1,Xa="",mi="srgb",Or="srgb-linear",Oc="linear",Fe="srgb",lr=7680,Og=519,Xy=512,Wy=513,qy=514,Q0=515,Yy=516,jy=517,Zy=518,Ky=519,Pg=35044,zg="300 es",fa=2e3,Pc=2001;class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,Td=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function pe(o,e,i){return Math.max(e,Math.min(i,o))}function Qy(o,e){return(o%e+e)%e}function sh(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Jy={DEG2RAD:Lc};class ae{constructor(e=0,i=0){ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=pe(this.x,e.x,i.x),this.y=pe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=pe(this.x,e,i),this.y=pe(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(pe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],S=s[7],x=s[2],y=s[5],b=s[8],C=l[0],M=l[3],g=l[6],B=l[1],N=l[4],D=l[7],q=l[2],H=l[5],O=l[8];return u[0]=h*C+d*B+m*q,u[3]=h*M+d*N+m*H,u[6]=h*g+d*D+m*O,u[1]=p*C+v*B+S*q,u[4]=p*M+v*N+S*H,u[7]=p*g+v*D+S*O,u[2]=x*C+y*B+b*q,u[5]=x*M+y*N+b*H,u[8]=x*g+y*D+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=v*h-d*p,x=d*m-v*u,y=p*u-h*m,b=i*S+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(l*p-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=x*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(rh.makeScale(e,i)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,i){return this.premultiply(rh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new le;function J0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $y(){const o=zc("canvas");return o.style.display="block",o}const Bg={};function Mr(o){o in Bg||(Bg[o]=!0,console.warn(o))}function tM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function eM(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nM(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ig=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Oc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:e,whitePoint:s,transfer:Oc,toXYZ:Ig,fromXYZ:Fg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:Ig,fromXYZ:Fg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),o}const Ce=iM();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cr;class aM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cr===void 0&&(cr=zc("canvas")),cr.width=e.width,cr.height=e.height;const s=cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=cr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ha(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(oh(l[h].image)):u.push(oh(l[h]))}else u=oh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?aM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;class Yn extends Cs{constructor(e=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=Es,l=Es,u=Pi,h=Ts,d=Ai,m=da,p=Yn.DEFAULT_ANISOTROPY,v=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Xo(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kh:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kh:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=F0;Yn.DEFAULT_ANISOTROPY=1;class Ge{constructor(e=0,i=0,s=0,l=1){Ge.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],S=m[8],x=m[1],y=m[5],b=m[9],C=m[2],M=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(S-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(y+1)/2,q=(g+1)/2,H=(v+x)/4,O=(S+C)/4,V=(b+M)/4;return N>D&&N>q?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=H/s,u=O/s):D>q?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=H/l,u=V/l):q<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),s=O/u,l=V/u),this.set(s,l,u,i),this}let B=Math.sqrt((M-b)*(M-b)+(S-C)*(S-C)+(x-v)*(x-v));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(S-C)/B,this.z=(x-v)/B,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=pe(this.x,e.x,i.x),this.y=pe(this.y,e.y,i.y),this.z=pe(this.z,e.z,i.z),this.w=pe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=pe(this.x,e,i),this.y=pe(this.y,e,i),this.z=pe(this.z,e,i),this.w=pe(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Cs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ge(0,0,e,i),this.scissorTest=!1,this.viewport=new Ge(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Yn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new $0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends oM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class tv extends Yn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Yn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],S=s[l+3];const x=u[h+0],y=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(S!==C||m!==x||p!==y||v!==b){let M=1-d;const g=m*x+p*y+v*b+S*C,B=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const q=Math.sqrt(N),H=Math.atan2(q,g*B);M=Math.sin(M*H)/q,d=Math.sin(d*H)/q}const D=d*B;if(m=m*M+x*D,p=p*M+y*D,v=v*M+b*D,S=S*M+C*D,M===1-d){const q=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=q,p*=q,v*=q,S*=q}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],S=u[h],x=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+v*S+m*y-p*x,e[i+1]=m*b+v*x+p*S-d*y,e[i+2]=p*b+v*y+d*x-m*S,e[i+3]=v*b-d*S-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),S=d(u/2),x=m(s/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*v*S+p*y*b,this._y=p*y*S-x*v*b,this._z=p*v*b+x*y*S,this._w=p*v*S-x*y*b;break;case"YXZ":this._x=x*v*S+p*y*b,this._y=p*y*S-x*v*b,this._z=p*v*b-x*y*S,this._w=p*v*S+x*y*b;break;case"ZXY":this._x=x*v*S-p*y*b,this._y=p*y*S+x*v*b,this._z=p*v*b+x*y*S,this._w=p*v*S-x*y*b;break;case"ZYX":this._x=x*v*S-p*y*b,this._y=p*y*S+x*v*b,this._z=p*v*b-x*y*S,this._w=p*v*S+x*y*b;break;case"YZX":this._x=x*v*S+p*y*b,this._y=p*y*S+x*v*b,this._z=p*v*b-x*y*S,this._w=p*v*S-x*y*b;break;case"XZY":this._x=x*v*S-p*y*b,this._y=p*y*S-x*v*b,this._z=p*v*b+x*y*S,this._w=p*v*S+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],S=i[10],x=s+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(s>d&&s>S){const y=2*Math.sqrt(1+s-d-S);this._w=(v-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>S){const y=2*Math.sqrt(1+d-s-S);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+S-s-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pe(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),S=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*S+this._w*x,this._x=s*S+this._x*x,this._y=l*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Hg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-u*l),S=2*(u*s-h*i);return this.x=i+m*p+h*S-d*v,this.y=s+m*v+d*p-u*S,this.z=l+m*S+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=pe(this.x,e.x,i.x),this.y=pe(this.y,e.y,i.y),this.z=pe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=pe(this.x,e,i),this.y=pe(this.y,e,i),this.z=pe(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(pe(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new K,Hg=new Rs;class Wo{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),sc.subVectors(this.max,Oo),ur.subVectors(e.a,Oo),fr.subVectors(e.b,Oo),hr.subVectors(e.c,Oo),Ba.subVectors(fr,ur),Ia.subVectors(hr,fr),ps.subVectors(ur,hr);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-ps.z,ps.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,ps.z,0,-ps.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-ps.y,ps.x,0];return!ch(i,ur,fr,hr,sc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,ur,fr,hr,sc))?!1:(rc.crossVectors(Ba,Ia),i=[rc.x,rc.y,rc.z],ch(i,ur,fr,hr,sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ia=[new K,new K,new K,new K,new K,new K,new K,new K],Mi=new K,ac=new Wo,ur=new K,fr=new K,hr=new K,Ba=new K,Ia=new K,ps=new K,Oo=new K,sc=new K,rc=new K,ms=new K;function ch(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ms.fromArray(o,u);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=e.dot(ms),p=i.dot(ms),v=s.dot(ms);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const cM=new Wo,Po=new K,uh=new K;class Gc{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):cM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(uh)),this.expandByPoint(Po.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const aa=new K,fh=new K,oc=new K,Fa=new K,hh=new K,lc=new K,dh=new K;class Pd{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){fh.copy(e).add(i).multiplyScalar(.5),oc.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(fh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(oc),d=Fa.dot(this.direction),m=-Fa.dot(oc),p=Fa.lengthSq(),v=Math.abs(1-h*h);let S,x,y,b;if(v>0)if(S=h*m-d,x=h*d-m,b=u*v,S>=0)if(x>=-b)if(x<=b){const C=1/v;S*=C,x*=C,y=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=u,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;else x=-u,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;else x<=-b?(S=Math.max(0,-(-h*u+d)),x=S>0?-u:Math.min(Math.max(-u,-m),u),y=-S*S+x*(x+2*m)+p):x<=b?(S=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(S=Math.max(0,-(h*u+d)),x=S>0?u:Math.min(Math.max(-u,-m),u),y=-S*S+x*(x+2*m)+p);else x=h>0?-u:u,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(fh).addScaledVector(oc,x),y}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(u=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,s,l,u){hh.subVectors(i,e),lc.subVectors(s,e),dh.crossVectors(hh,lc);let h=this.direction.dot(dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,e);const m=d*this.direction.dot(lc.crossVectors(Fa,lc));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Fa));if(p<0||m+p>h)return null;const v=-d*Fa.dot(dh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,s,l,u,h,d,m,p,v,S,x,y,b,C,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,v,S,x,y,b,C,M)}set(e,i,s,l,u,h,d,m,p,v,S,x,y,b,C,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=S,g[14]=x,g[3]=y,g[7]=b,g[11]=C,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/dr.setFromMatrixColumn(e,0).length(),u=1/dr.setFromMatrixColumn(e,1).length(),h=1/dr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const x=h*v,y=h*S,b=d*v,C=d*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=y+b*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*v,y=m*S,b=p*v,C=p*S;i[0]=x+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*S,i[5]=h*v,i[9]=-d,i[2]=y*d-b,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*v,y=m*S,b=p*v,C=p*S;i[0]=x-C*d,i[4]=-h*S,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*v,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*v,y=h*S,b=d*v,C=d*S;i[0]=m*v,i[4]=b*p-y,i[8]=x*p+C,i[1]=m*S,i[5]=C*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-x*S,i[8]=b*S+y,i[1]=S,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*S+b,i[10]=x-C*S}else if(e.order==="XZY"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=x*S+C,i[5]=h*v,i[9]=y*S-b,i[2]=b*S-y,i[6]=d*v,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,fM)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ha.crossVectors(s,ni),Ha.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ha.crossVectors(s,ni)),Ha.normalize(),cc.crossVectors(ni,Ha),l[0]=Ha.x,l[4]=cc.x,l[8]=ni.x,l[1]=Ha.y,l[5]=cc.y,l[9]=ni.y,l[2]=Ha.z,l[6]=cc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],S=s[5],x=s[9],y=s[13],b=s[2],C=s[6],M=s[10],g=s[14],B=s[3],N=s[7],D=s[11],q=s[15],H=l[0],O=l[4],V=l[8],w=l[12],R=l[1],I=l[5],it=l[9],at=l[13],ut=l[2],pt=l[6],P=l[10],Q=l[14],Z=l[3],yt=l[7],bt=l[11],L=l[15];return u[0]=h*H+d*R+m*ut+p*Z,u[4]=h*O+d*I+m*pt+p*yt,u[8]=h*V+d*it+m*P+p*bt,u[12]=h*w+d*at+m*Q+p*L,u[1]=v*H+S*R+x*ut+y*Z,u[5]=v*O+S*I+x*pt+y*yt,u[9]=v*V+S*it+x*P+y*bt,u[13]=v*w+S*at+x*Q+y*L,u[2]=b*H+C*R+M*ut+g*Z,u[6]=b*O+C*I+M*pt+g*yt,u[10]=b*V+C*it+M*P+g*bt,u[14]=b*w+C*at+M*Q+g*L,u[3]=B*H+N*R+D*ut+q*Z,u[7]=B*O+N*I+D*pt+q*yt,u[11]=B*V+N*it+D*P+q*bt,u[15]=B*w+N*at+D*Q+q*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],S=e[6],x=e[10],y=e[14],b=e[3],C=e[7],M=e[11],g=e[15];return b*(+u*m*S-l*p*S-u*d*x+s*p*x+l*d*y-s*m*y)+C*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*v-u*m*v)+M*(+i*p*S-i*d*y-u*h*S+s*h*y+u*d*v-s*p*v)+g*(-l*d*v-i*m*S+i*d*x+l*h*S-s*h*x+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],S=e[9],x=e[10],y=e[11],b=e[12],C=e[13],M=e[14],g=e[15],B=S*M*p-C*x*p+C*m*y-d*M*y-S*m*g+d*x*g,N=b*x*p-v*M*p-b*m*y+h*M*y+v*m*g-h*x*g,D=v*C*p-b*S*p+b*d*y-h*C*y-v*d*g+h*S*g,q=b*S*m-v*C*m-b*d*x+h*C*x+v*d*M-h*S*M,H=i*B+s*N+l*D+u*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=B*O,e[1]=(C*x*u-S*M*u-C*l*y+s*M*y+S*l*g-s*x*g)*O,e[2]=(d*M*u-C*m*u+C*l*p-s*M*p-d*l*g+s*m*g)*O,e[3]=(S*m*u-d*x*u-S*l*p+s*x*p+d*l*y-s*m*y)*O,e[4]=N*O,e[5]=(v*M*u-b*x*u+b*l*y-i*M*y-v*l*g+i*x*g)*O,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*g-i*m*g)*O,e[7]=(h*x*u-v*m*u+v*l*p-i*x*p-h*l*y+i*m*y)*O,e[8]=D*O,e[9]=(b*S*u-v*C*u-b*s*y+i*C*y+v*s*g-i*S*g)*O,e[10]=(h*C*u-b*d*u+b*s*p-i*C*p-h*s*g+i*d*g)*O,e[11]=(v*d*u-h*S*u-v*s*p+i*S*p+h*s*y-i*d*y)*O,e[12]=q*O,e[13]=(v*C*l-b*S*l+b*s*x-i*C*x-v*s*M+i*S*M)*O,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*M-i*d*M)*O,e[15]=(h*S*l-v*d*l+v*s*m-i*S*m-h*s*x+i*d*x)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,S=d+d,x=u*p,y=u*v,b=u*S,C=h*v,M=h*S,g=d*S,B=m*p,N=m*v,D=m*S,q=s.x,H=s.y,O=s.z;return l[0]=(1-(C+g))*q,l[1]=(y+D)*q,l[2]=(b-N)*q,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+g))*H,l[6]=(M+B)*H,l[7]=0,l[8]=(b+N)*O,l[9]=(M-B)*O,l[10]=(1-(x+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=dr.set(l[0],l[1],l[2]).length();const h=dr.set(l[4],l[5],l[6]).length(),d=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ei.copy(this);const p=1/u,v=1/h,S=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=S,Ei.elements[9]*=S,Ei.elements[10]*=S,i.setFromRotationMatrix(Ei),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=fa){const m=this.elements,p=2*u/(i-e),v=2*u/(s-l),S=(i+e)/(i-e),x=(s+l)/(s-l);let y,b;if(d===fa)y=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Pc)y=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=fa){const m=this.elements,p=1/(i-e),v=1/(s-l),S=1/(h-u),x=(i+e)*p,y=(s+l)*v;let b,C;if(d===fa)b=(h+u)*S,C=-2*S;else if(d===Pc)b=u*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const dr=new K,Ei=new Ze,uM=new K(0,0,0),fM=new K(1,1,1),Ha=new K,cc=new K,ni=new K,Gg=new Ze,Vg=new Rs;class Bi{constructor(e=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],S=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-pe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const kg=new K,pr=new Rs,sa=new Ze,uc=new K,zo=new K,dM=new K,pM=new Rs,Xg=new K(1,0,0),Wg=new K(0,1,0),qg=new K(0,0,1),Yg={type:"added"},mM={type:"removed"},mr={type:"childadded",child:null},ph={type:"childremoved",child:null};class bn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new K,i=new Bi,s=new Rs,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return pr.setFromAxisAngle(e,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,i){return pr.setFromAxisAngle(e,i),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,i){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?uc.copy(e):uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(zo,uc,this.up):sa.lookAt(uc,zo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(sa),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mM),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),S=h(e.shapes),x=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new K(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new K,ra=new K,mh=new K,oa=new K,_r=new K,gr=new K,jg=new K,_h=new K,gh=new K,vh=new K,Sh=new Ge,xh=new Ge,yh=new Ge;class bi{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ti.subVectors(l,i),ra.subVectors(s,i),mh.subVectors(e,i);const h=Ti.dot(Ti),d=Ti.dot(ra),m=Ti.dot(mh),p=ra.dot(ra),v=ra.dot(mh),S=h*p-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,y=(p*m-d*v)*x,b=(h*v-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(h,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return Sh.setScalar(0),xh.setScalar(0),yh.setScalar(0),Sh.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Sh,u.x),h.addScaledVector(xh,u.y),h.addScaledVector(yh,u.z),h}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),ra.subVectors(e,i),Ti.cross(ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Ti.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;_r.subVectors(l,s),gr.subVectors(u,s),_h.subVectors(e,s);const m=_r.dot(_h),p=gr.dot(_h);if(m<=0&&p<=0)return i.copy(s);gh.subVectors(e,l);const v=_r.dot(gh),S=gr.dot(gh);if(v>=0&&S<=v)return i.copy(l);const x=m*S-v*p;if(x<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(_r,h);vh.subVectors(e,u);const y=_r.dot(vh),b=gr.dot(vh);if(b>=0&&y<=b)return i.copy(u);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(gr,d);const M=v*b-y*S;if(M<=0&&S-v>=0&&y-b>=0)return jg.subVectors(u,l),d=(S-v)/(S-v+(y-b)),i.copy(l).addScaledVector(jg,d);const g=1/(M+C+x);return h=C*g,d=x*g,i.copy(s).addScaledVector(_r,h).addScaledVector(gr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Mh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=Qy(e,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Mh(h,u,e+1/3),this.g=Mh(h,u,e),this.b=Mh(h,u,e-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(e,i=mi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=nv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ce.fromWorkingColorSpace(Dn.copy(this),e),Math.round(pe(Dn.r*255,0,255))*65536+Math.round(pe(Dn.g*255,0,255))*256+Math.round(pe(Dn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=v<=.5?S/(h+d):S/(2-h-d),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=mi){Ce.fromWorkingColorSpace(Dn.copy(this),e);const i=Dn.r,s=Dn.g,l=Dn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(fc);const s=sh(Ga.h,fc.h,i),l=sh(Ga.s,fc.s,i),u=sh(Ga.l,fc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Me;Me.NAMES=nv;let _M=0;class zr extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ar,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Hh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==Hh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class iv extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new K,hc=new ae;class zi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Pg,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(e),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class av extends zi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class sv extends zi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class jn extends zi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let gM=0;const pi=new Ze,Eh=new bn,vr=new K,ii=new Wo,Bo=new Wo,_n=new K;class Ii extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?sv:av)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new jn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ii.min,Bo.min),ii.expandByPoint(_n),_n.addVectors(ii.max,Bo.max),ii.expandByPoint(_n)):(ii.expandByPoint(Bo.min),ii.expandByPoint(Bo.max))}ii.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(e,p),_n.add(vr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new K,m[V]=new K;const p=new K,v=new K,S=new K,x=new ae,y=new ae,b=new ae,C=new K,M=new K;function g(V,w,R){p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,w),S.fromBufferAttribute(s,R),x.fromBufferAttribute(u,V),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,R),v.sub(p),S.sub(p),y.sub(x),b.sub(x);const I=1/(y.x*b.y-b.x*y.y);isFinite(I)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(S,-y.y).multiplyScalar(I),M.copy(S).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(I),d[V].add(C),d[w].add(C),d[R].add(C),m[V].add(M),m[w].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let V=0,w=B.length;V<w;++V){const R=B[V],I=R.start,it=R.count;for(let at=I,ut=I+it;at<ut;at+=3)g(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new K,D=new K,q=new K,H=new K;function O(V){q.fromBufferAttribute(l,V),H.copy(q);const w=d[V];N.copy(w),N.sub(q.multiplyScalar(q.dot(w))).normalize(),D.crossVectors(H,w);const I=D.dot(m[V])<0?-1:1;h.setXYZW(V,N.x,N.y,N.z,I)}for(let V=0,w=B.length;V<w;++V){const R=B[V],I=R.start,it=R.count;for(let at=I,ut=I+it;at<ut;at+=3)O(e.getX(at+0)),O(e.getX(at+1)),O(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new K,u=new K,h=new K,d=new K,m=new K,p=new K,v=new K,S=new K;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,S=d.normalized,x=new p.constructor(m.length*v);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*v;for(let g=0;g<v;g++)x[b++]=p[y++]}return new zi(x,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,S=p.length;v<S;v++){const x=p[v],y=e(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,x=p.length;S<x;S++){const y=p[S];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],S=u[p];for(let x=0,y=S.length;x<y;x++)v.push(S[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new Ze,_s=new Pd,dc=new Gc,Kg=new K,pc=new K,mc=new K,_c=new K,Th=new K,gc=new K,Qg=new K,vc=new K;class Tn extends bn{constructor(e=new Ii,i=new iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],S=u[m];v!==0&&(Th.fromBufferAttribute(S,e),h?gc.addScaledVector(Th,v):gc.addScaledVector(Th.sub(i),v))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(u),_s.copy(e.ray).recast(e.near),!(dc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(dc,Kg)===null||_s.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(Zg.copy(u).invert(),_s.copy(e.ray).applyMatrix4(Zg),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,_s)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],g=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=B,q=N;D<q;D+=3){const H=d.getX(D),O=d.getX(D+1),V=d.getX(D+2);l=Sc(this,g,e,s,p,v,S,H,O,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,g=C;M<g;M+=3){const B=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);l=Sc(this,h,e,s,p,v,S,B,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],g=h[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=B,q=N;D<q;D+=3){const H=D,O=D+1,V=D+2;l=Sc(this,g,e,s,p,v,S,H,O,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,g=C;M<g;M+=3){const B=M,N=M+1,D=M+2;l=Sc(this,h,e,s,p,v,S,B,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vM(o,e,i,s,l,u,h,d){let m;if(e.side===qn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Ya,d),m===null)return null;vc.copy(d),vc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:o}}function Sc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,pc),o.getVertexPosition(m,mc),o.getVertexPosition(p,_c);const v=vM(o,e,i,s,pc,mc,_c,Qg);if(v){const S=new K;bi.getBarycoord(Qg,pc,mc,_c,S),l&&(v.uv=bi.getInterpolatedAttribute(l,d,m,p,S,new ae)),u&&(v.uv1=bi.getInterpolatedAttribute(u,d,m,p,S,new ae)),h&&(v.normal=bi.getInterpolatedAttribute(h,d,m,p,S,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new K,materialIndex:0};bi.getNormal(pc,mc,_c,x.normal),v.face=x,v.barycoord=S}return v}class Oi extends Ii{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],S=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new jn(p,3)),this.setAttribute("normal",new jn(v,3)),this.setAttribute("uv",new jn(S,2));function b(C,M,g,B,N,D,q,H,O,V,w){const R=D/O,I=q/V,it=D/2,at=q/2,ut=H/2,pt=O+1,P=V+1;let Q=0,Z=0;const yt=new K;for(let bt=0;bt<P;bt++){const L=bt*I-at;for(let st=0;st<pt;st++){const St=st*R-it;yt[C]=St*B,yt[M]=L*N,yt[g]=ut,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[g]=H>0?1:-1,v.push(yt.x,yt.y,yt.z),S.push(st/O),S.push(1-bt/V),Q+=1}}for(let bt=0;bt<V;bt++)for(let L=0;L<O;L++){const st=x+L+pt*bt,St=x+L+pt*(bt+1),j=x+(L+1)+pt*(bt+1),ft=x+(L+1)+pt*bt;m.push(st,St,ft),m.push(St,j,ft),Z+=6}d.addGroup(y,Z,w),y+=Z,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)e[l]=s[l]}return e}function SM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const xM={clone:Pr,merge:On};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=SM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ov extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=fa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new K,Jg=new ae,$g=new ae;class ai extends ov{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Td*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,Jg,$g),i.subVectors($g,Jg)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,xr=1;class EM extends bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(Sr,xr,e,i);l.layers=this.layers,this.add(l);const u=new ai(Sr,xr,e,i);u.layers=this.layers,this.add(u);const h=new ai(Sr,xr,e,i);h.layers=this.layers,this.add(h);const d=new ai(Sr,xr,e,i);d.layers=this.layers,this.add(d);const m=new ai(Sr,xr,e,i);m.layers=this.layers,this.add(m);const p=new ai(Sr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===fa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Pc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(S,x,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class lv extends Yn{constructor(e,i,s,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Dr,super(e,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TM extends As{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new lv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Oi(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Wa});u.uniforms.tEquirect.value=i;const h=new Tn(l,u),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Pi),new EM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class bM extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bh=new K,AM=new K,RM=new le;class ka{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=bh.subVectors(s,i).cross(AM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||RM.getNormalMatrix(e),l=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Gc,xc=new K;class zd{constructor(e=new ka,i=new ka,s=new ka,l=new ka,u=new ka,h=new ka){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=fa){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],S=l[6],x=l[7],y=l[8],b=l[9],C=l[10],M=l[11],g=l[12],B=l[13],N=l[14],D=l[15];if(s[0].setComponents(m-u,x-p,M-y,D-g).normalize(),s[1].setComponents(m+u,x+p,M+y,D+g).normalize(),s[2].setComponents(m+h,x+v,M+b,D+B).normalize(),s[3].setComponents(m-h,x-v,M-b,D-B).normalize(),s[4].setComponents(m-d,x-S,M-C,D-N).normalize(),i===fa)s[5].setComponents(m+d,x+S,M+C,D+N).normalize();else if(i===Pc)s[5].setComponents(d,S,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cv extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new K,Ic=new K,t0=new Ze,Io=new Pd,yc=new Gc,Ah=new K,e0=new K;class CM extends bn{constructor(e=new Ii,i=new cv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Bc.fromBufferAttribute(i,l-1),Ic.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Bc.distanceTo(Ic);e.setAttribute("lineDistance",new jn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(l),yc.radius+=u,e.ray.intersectsSphere(yc)===!1)return;t0.copy(l).invert(),Io.copy(e.ray).applyMatrix4(t0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const g=v.getX(C),B=v.getX(C+1),N=Mc(this,e,Io,m,g,B);N&&i.push(N)}if(this.isLineLoop){const C=v.getX(b-1),M=v.getX(y),g=Mc(this,e,Io,m,C,M);g&&i.push(g)}}else{const y=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=p){const g=Mc(this,e,Io,m,C,C+1);g&&i.push(g)}if(this.isLineLoop){const C=Mc(this,e,Io,m,b-1,y);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Mc(o,e,i,s,l,u){const h=o.geometry.attributes.position;if(Bc.fromBufferAttribute(h,l),Ic.fromBufferAttribute(h,u),i.distanceSqToSegment(Bc,Ic,Ah,e0)>s)return;Ah.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Ah);if(!(m<e.near||m>e.far))return{distance:m,point:e0.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}const n0=new K,i0=new K;class wM extends CM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)n0.fromBufferAttribute(i,l),i0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+n0.distanceTo(i0);e.setAttribute("lineDistance",new jn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ho extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class uv extends Yn{constructor(e,i,s,l,u,h,d,m,p,v=Rr){if(v!==Rr&&v!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Rr&&(s=bs),s===void 0&&v===Nr&&(s=Lr),super(null,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ri,this.minFilter=m!==void 0?m:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fc extends Ii{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const v=[],S=[],x=[],y=[];let b=0;const C=[],M=s/2;let g=0;B(),h===!1&&(e>0&&N(!0),i>0&&N(!1)),this.setIndex(v),this.setAttribute("position",new jn(S,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(y,2));function B(){const D=new K,q=new K;let H=0;const O=(i-e)/s;for(let V=0;V<=u;V++){const w=[],R=V/u,I=R*(i-e)+e;for(let it=0;it<=l;it++){const at=it/l,ut=at*m+d,pt=Math.sin(ut),P=Math.cos(ut);q.x=I*pt,q.y=-R*s+M,q.z=I*P,S.push(q.x,q.y,q.z),D.set(pt,O,P).normalize(),x.push(D.x,D.y,D.z),y.push(at,1-R),w.push(b++)}C.push(w)}for(let V=0;V<l;V++)for(let w=0;w<u;w++){const R=C[w][V],I=C[w+1][V],it=C[w+1][V+1],at=C[w][V+1];(e>0||w!==0)&&(v.push(R,I,at),H+=3),(i>0||w!==u-1)&&(v.push(I,it,at),H+=3)}p.addGroup(g,H,0),g+=H}function N(D){const q=b,H=new ae,O=new K;let V=0;const w=D===!0?e:i,R=D===!0?1:-1;for(let it=1;it<=l;it++)S.push(0,M*R,0),x.push(0,R,0),y.push(.5,.5),b++;const I=b;for(let it=0;it<=l;it++){const ut=it/l*m+d,pt=Math.cos(ut),P=Math.sin(ut);O.x=w*P,O.y=M*R,O.z=w*pt,S.push(O.x,O.y,O.z),x.push(0,R,0),H.x=pt*.5+.5,H.y=P*.5*R+.5,y.push(H.x,H.y),b++}for(let it=0;it<l;it++){const at=q+it,ut=I+it;D===!0?v.push(ut,ut+1,at):v.push(ut+1,ut,at),V+=3}p.addGroup(g,V,D===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vc extends Ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,S=e/d,x=i/m,y=[],b=[],C=[],M=[];for(let g=0;g<v;g++){const B=g*x-h;for(let N=0;N<p;N++){const D=N*S-u;b.push(D,-B,0),C.push(0,0,1),M.push(N/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let B=0;B<d;B++){const N=B+p*g,D=B+p*(g+1),q=B+1+p*(g+1),H=B+1+p*g;y.push(N,D,H),y.push(D,q,H)}this.setIndex(y),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rh extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DM extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UM extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bd extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ch=new Ze,a0=new K,s0=new K;class fv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),i.position.copy(a0),s0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(s0),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const r0=new Ze,Fo=new K,wh=new K;class LM extends fv{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),s.position.copy(Fo),wh.copy(s.position),wh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(wh),s.updateMatrixWorld(),l.makeTranslation(-Fo.x,-Fo.y,-Fo.z),r0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r0)}}class NM extends Bd{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new LM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hv extends ov{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OM extends fv{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class PM extends Bd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new OM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zM extends Bd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class BM extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class o0{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class IM extends wM{constructor(e=10,i=10,s=4473924,l=8947848){s=new Me(s),l=new Me(l);const u=i/2,h=e/i,d=e/2,m=[],p=[];for(let x=0,y=0,b=-d;x<=i;x++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const C=x===u?s:l;C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3}const v=new Ii;v.setAttribute("position",new jn(m,3)),v.setAttribute("color",new jn(p,3));const S=new cv({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class FM extends Cs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function l0(o,e,i,s){const l=HM(s);switch(i){case k0:return o*e;case W0:return o*e;case q0:return o*e*2;case Y0:return o*e/l.components*l.byteLength;case Ld:return o*e/l.components*l.byteLength;case j0:return o*e*2/l.components*l.byteLength;case Nd:return o*e*2/l.components*l.byteLength;case X0:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case Od:return o*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $h:case ed:return Math.max(o,16)*Math.max(e,8)/4;case Jh:case td:return Math.max(o,8)*Math.max(e,8)/2;case nd:case id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Sd:case xd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Z0:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Md:case Ed:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HM(o){switch(o){case da:case H0:return{byteLength:1,components:1};case Vo:case G0:case ko:return{byteLength:2,components:1};case Dd:case Ud:return{byteLength:2,components:4};case bs:case wd:case ua:return{byteLength:4,components:1};case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);function dv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function GM(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,m,p){const v=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,v);else{S.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<S.length;y++){const b=S[x],C=S[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,S[x]=C)}S.length=x+1;for(let y=0,b=S.length;y<b;y++){const C=S[y];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
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
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
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
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eE=`#ifdef USE_IRIDESCENCE
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
#endif`,nE=`#ifdef USE_BUMPMAP
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
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fE=`#define PI 3.141592653589793
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
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dE=`vec3 transformedNormal = objectNormal;
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
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
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
}`,DE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
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
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FE=`PhysicalMaterial material;
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
#endif`,HE=`struct PhysicalMaterial {
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
}`,GE=`
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
#endif`,VE=`#if defined( RE_IndirectDiffuse )
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QE=`#if defined( USE_POINTS_UV )
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
#endif`,JE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`#ifdef USE_MORPHTARGETS
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
#endif`,aT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uT=`#ifdef USE_NORMALMAP
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
#endif`,fT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AT=`float getShadowMask() {
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
}`,RT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CT=`#ifdef USE_SKINNING
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
#endif`,wT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
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
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`#include <common>
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
}`,jT=`#if DEPTH_PACKING == 3200
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
}`,ZT=`#define DISTANCE
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
}`,KT=`#define DISTANCE
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
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
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
}`,tb=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#define LAMBERT
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
}`,ab=`#define LAMBERT
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
}`,sb=`#define MATCAP
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
}`,rb=`#define MATCAP
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
}`,ob=`#define NORMAL
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
}`,lb=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,ub=`#define PHONG
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
}`,fb=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,db=`#define TOON
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
}`,pb=`#define TOON
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
}`,mb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,vb=`uniform vec3 color;
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
}`,Sb=`uniform float rotation;
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
}`,xb=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:VM,alphahash_pars_fragment:kM,alphamap_fragment:XM,alphamap_pars_fragment:WM,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:jM,aomap_pars_fragment:ZM,batching_pars_vertex:KM,batching_vertex:QM,begin_vertex:JM,beginnormal_vertex:$M,bsdfs:tE,iridescence_fragment:eE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:rE,color_fragment:oE,color_pars_fragment:lE,color_pars_vertex:cE,color_vertex:uE,common:fE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:dE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:_E,emissivemap_pars_fragment:gE,colorspace_fragment:vE,colorspace_pars_fragment:SE,envmap_fragment:xE,envmap_common_pars_fragment:yE,envmap_pars_fragment:ME,envmap_pars_vertex:EE,envmap_physical_pars_fragment:OE,envmap_vertex:TE,fog_vertex:bE,fog_pars_vertex:AE,fog_fragment:RE,fog_pars_fragment:CE,gradientmap_pars_fragment:wE,lightmap_pars_fragment:DE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:LE,lights_pars_begin:NE,lights_toon_fragment:PE,lights_toon_pars_fragment:zE,lights_phong_fragment:BE,lights_phong_pars_fragment:IE,lights_physical_fragment:FE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:VE,lights_fragment_end:kE,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:YE,map_fragment:jE,map_pars_fragment:ZE,map_particle_fragment:KE,map_particle_pars_fragment:QE,metalnessmap_fragment:JE,metalnessmap_pars_fragment:$E,morphinstance_vertex:tT,morphcolor_vertex:eT,morphnormal_vertex:nT,morphtarget_pars_vertex:iT,morphtarget_vertex:aT,normal_fragment_begin:sT,normal_fragment_maps:rT,normal_pars_fragment:oT,normal_pars_vertex:lT,normal_vertex:cT,normalmap_pars_fragment:uT,clearcoat_normal_fragment_begin:fT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:pT,opaque_fragment:mT,packing:_T,premultiplied_alpha_fragment:gT,project_vertex:vT,dithering_fragment:ST,dithering_pars_fragment:xT,roughnessmap_fragment:yT,roughnessmap_pars_fragment:MT,shadowmap_pars_fragment:ET,shadowmap_pars_vertex:TT,shadowmap_vertex:bT,shadowmask_pars_fragment:AT,skinbase_vertex:RT,skinning_pars_vertex:CT,skinning_vertex:wT,skinnormal_vertex:DT,specularmap_fragment:UT,specularmap_pars_fragment:LT,tonemapping_fragment:NT,tonemapping_pars_fragment:OT,transmission_fragment:PT,transmission_pars_fragment:zT,uv_pars_fragment:BT,uv_pars_vertex:IT,uv_vertex:FT,worldpos_vertex:HT,background_vert:GT,background_frag:VT,backgroundCube_vert:kT,backgroundCube_frag:XT,cube_vert:WT,cube_frag:qT,depth_vert:YT,depth_frag:jT,distanceRGBA_vert:ZT,distanceRGBA_frag:KT,equirect_vert:QT,equirect_frag:JT,linedashed_vert:$T,linedashed_frag:tb,meshbasic_vert:eb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:ab,meshmatcap_vert:sb,meshmatcap_frag:rb,meshnormal_vert:ob,meshnormal_frag:lb,meshphong_vert:cb,meshphong_frag:ub,meshphysical_vert:fb,meshphysical_frag:hb,meshtoon_vert:db,meshtoon_frag:pb,points_vert:mb,points_frag:_b,shadow_vert:gb,shadow_frag:vb,sprite_vert:Sb,sprite_frag:xb},Lt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ni={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ni.physical={uniforms:On([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ec={r:0,b:0,g:0},vs=new Bi,yb=new Ze;function Mb(o,e,i,s,l,u,h){const d=new Me(0);let m=u===!0?0:1,p,v,S=null,x=0,y=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:e).get(D)),D}function C(N){let D=!1;const q=b(N);q===null?g(d,m):q&&q.isColor&&(g(q,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,D){const q=b(D);q&&(q.isCubeTexture||q.mapping===Hc)?(v===void 0&&(v=new Tn(new Oi(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Pr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),v.material.uniforms.envMap.value=q,v.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(vs)),v.material.toneMapped=Ce.getTransfer(q.colorSpace)!==Fe,(S!==q||x!==q.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,S=q,x=q.version,y=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new Tn(new Vc(2,2),new ja({name:"BackgroundMaterial",uniforms:Pr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(q.colorSpace)!==Fe,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(S!==q||x!==q.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,S=q,x=q.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function g(N,D){N.getRGB(Ec,rv(o)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,D,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,g(d,m)},render:C,addToRenderList:M,dispose:B}}function Eb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(R,I,it,at,ut){let pt=!1;const P=S(at,it,I);u!==P&&(u=P,p(u.object)),pt=y(R,at,it,ut),pt&&b(R,at,it,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,D(R,I,it,at),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function S(R,I,it){const at=it.wireframe===!0;let ut=s[R.id];ut===void 0&&(ut={},s[R.id]=ut);let pt=ut[I.id];pt===void 0&&(pt={},ut[I.id]=pt);let P=pt[at];return P===void 0&&(P=x(m()),pt[at]=P),P}function x(R){const I=[],it=[],at=[];for(let ut=0;ut<i;ut++)I[ut]=0,it[ut]=0,at[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:it,attributeDivisors:at,object:R,attributes:{},index:null}}function y(R,I,it,at){const ut=u.attributes,pt=I.attributes;let P=0;const Q=it.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const bt=ut[Z];let L=pt[Z];if(L===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),bt===void 0||bt.attribute!==L||L&&bt.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==at}function b(R,I,it,at){const ut={},pt=I.attributes;let P=0;const Q=it.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let bt=pt[Z];bt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor));const L={};L.attribute=bt,bt&&bt.data&&(L.data=bt.data),ut[Z]=L,P++}u.attributes=ut,u.attributesNum=P,u.index=at}function C(){const R=u.newAttributes;for(let I=0,it=R.length;I<it;I++)R[I]=0}function M(R){g(R,0)}function g(R,I){const it=u.newAttributes,at=u.enabledAttributes,ut=u.attributeDivisors;it[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),ut[R]!==I&&(o.vertexAttribDivisor(R,I),ut[R]=I)}function B(){const R=u.newAttributes,I=u.enabledAttributes;for(let it=0,at=I.length;it<at;it++)I[it]!==R[it]&&(o.disableVertexAttribArray(it),I[it]=0)}function N(R,I,it,at,ut,pt,P){P===!0?o.vertexAttribIPointer(R,I,it,ut,pt):o.vertexAttribPointer(R,I,it,at,ut,pt)}function D(R,I,it,at){C();const ut=at.attributes,pt=it.getAttributes(),P=I.defaultAttributeValues;for(const Q in pt){const Z=pt[Q];if(Z.location>=0){let yt=ut[Q];if(yt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const bt=yt.normalized,L=yt.itemSize,st=e.get(yt);if(st===void 0)continue;const St=st.buffer,j=st.type,ft=st.bytesPerElement,Et=j===o.INT||j===o.UNSIGNED_INT||yt.gpuType===wd;if(yt.isInterleavedBufferAttribute){const vt=yt.data,Ht=vt.stride,zt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let ie=0;ie<Z.locationSize;ie++)g(Z.location+ie,vt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ie=0;ie<Z.locationSize;ie++)M(Z.location+ie);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ie=0;ie<Z.locationSize;ie++)N(Z.location+ie,L/Z.locationSize,j,bt,Ht*ft,(zt+L/Z.locationSize*ie)*ft,Et)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<Z.locationSize;vt++)g(Z.location+vt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<Z.locationSize;vt++)M(Z.location+vt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let vt=0;vt<Z.locationSize;vt++)N(Z.location+vt,L/Z.locationSize,j,bt,L*ft,L/Z.locationSize*vt*ft,Et)}}else if(P!==void 0){const bt=P[Q];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(Z.location,bt);break;case 3:o.vertexAttrib3fv(Z.location,bt);break;case 4:o.vertexAttrib4fv(Z.location,bt);break;default:o.vertexAttrib1fv(Z.location,bt)}}}}B()}function q(){V();for(const R in s){const I=s[R];for(const it in I){const at=I[it];for(const ut in at)v(at[ut].object),delete at[ut];delete I[it]}delete s[R]}}function H(R){if(s[R.id]===void 0)return;const I=s[R.id];for(const it in I){const at=I[it];for(const ut in at)v(at[ut].object),delete at[ut];delete I[it]}delete s[R.id]}function O(R){for(const I in s){const it=s[I];if(it[R.id]===void 0)continue;const at=it[R.id];for(const ut in at)v(at[ut].object),delete at[ut];delete it[R.id]}}function V(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function Tb(o,e,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,S){S!==0&&(o.drawArraysInstanced(s,p,v,S),i.update(v,s,S))}function d(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,S);let y=0;for(let b=0;b<S;b++)y+=v[b];i.update(y,s,1)}function m(p,v,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],v[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,S);let b=0;for(let C=0;C<S;C++)b+=v[C]*x[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bb(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ai&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==da&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ua&&!V)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:q,maxSamples:H}}function Ab(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new ka,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||s!==0||l;return l=x,s=S.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){i=v(S,x,0)},this.setState=function(S,x,y){const b=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,g=o.get(S);if(!l||b===null||b.length===0||u&&!M)u?v(null):p();else{const B=u?0:s,N=B*4;let D=g.clippingState||null;m.value=D,D=v(b,x,N,y);for(let q=0;q!==N;++q)D[q]=i[q];g.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,x,y,b){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const g=y+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<g)&&(M=new Float32Array(g));for(let N=0,D=y;N!==C;++N,D+=4)h.copy(S[N]).applyMatrix4(B,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function Rb(o){let e=new WeakMap;function i(h,d){return d===jh?h.mapping=Dr:d===Zh&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===jh||d===Zh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new TM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Tr=4,c0=[.125,.215,.35,.446,.526,.582],Ms=20,Dh=new hv,u0=new Me;let Uh=null,Lh=0,Nh=0,Oh=!1;const xs=(1+Math.sqrt(5))/2,yr=1/xs,f0=[new K(-xs,yr,0),new K(xs,yr,0),new K(-yr,0,xs),new K(yr,0,xs),new K(0,xs,-yr),new K(0,xs,yr),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class h0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Lh,Nh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:ko,format:Ai,colorSpace:Or,depthBuffer:!1},l=d0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(u)),this._blurMaterial=wb(u,e,i)}return l}_compileMaterial(e){const i=new Tn(this._lodPlanes[0],e);this._renderer.compile(i,Dh)}_sceneToCubeUV(e,i,s,l){const d=new ai(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,x=v.toneMapping;v.getClearColor(u0),v.toneMapping=qa,v.autoClear=!1;const y=new iv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),b=new Tn(new Oi,y);let C=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,C=!0):(y.color.copy(u0),C=!0);for(let g=0;g<6;g++){const B=g%3;B===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):B===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const N=this._cubeSize;Tc(l,B*N,g>2?N:0,N,N),v.setRenderTarget(l),C&&v.render(b,d),v.render(e,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=x,v.autoClear=S,e.background=M}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Dr||e.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Tn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Dh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=f0[(l-u-1)%f0.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new Tn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),C=u/b,M=isFinite(u)?1+Math.floor(v*C):Ms;M>Ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const g=[];let B=0;for(let O=0;O<Ms;++O){const V=O/C,w=Math.exp(-V*V/2);g.push(w),O===0?B+=w:O<M&&(B+=2*w)}for(let O=0;O<g.length;O++)g[O]=g[O]/B;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-s;const D=this._sizeLods[l],q=3*D*(l>N-Tr?l-N+Tr:0),H=4*(this._cubeSize-D);Tc(i,q,H,3*D,2*D),m.setRenderTarget(i),m.render(S,Dh)}}function Cb(o){const e=[],i=[],s=[];let l=o;const u=o-Tr+1+c0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Tr?m=c0[h-o+Tr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,S=1+p,x=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,b=6,C=3,M=2,g=1,B=new Float32Array(C*b*y),N=new Float32Array(M*b*y),D=new Float32Array(g*b*y);for(let H=0;H<y;H++){const O=H%3*2/3-1,V=H>2?0:-1,w=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];B.set(w,C*b*H),N.set(x,M*b*H);const R=[H,H,H,H,H,H];D.set(R,g*b*H)}const q=new Ii;q.setAttribute("position",new zi(B,C)),q.setAttribute("uv",new zi(N,M)),q.setAttribute("faceIndex",new zi(D,g)),e.push(q),l>Tr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function d0(o,e,i){const s=new As(o,e,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function wb(o,e,i){const s=new Float32Array(Ms),l=new K(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function p0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function m0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Id(){return`

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
	`}function Db(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===jh||m===Zh,v=m===Dr||m===Ur;if(p||v){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new h0(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new h0(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Ub(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Lb(o,e,i,s){const l={},u=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(S){const x=[],y=S.index,b=S.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let N=0,D=B.length;N<D;N+=3){const q=B[N+0],H=B[N+1],O=B[N+2];x.push(q,H,H,O,O,q)}}else if(b!==void 0){const B=b.array;C=b.version;for(let N=0,D=B.length/3-1;N<D;N+=3){const q=N+0,H=N+1,O=N+2;x.push(q,H,H,O,O,q)}}else return;const M=new(J0(x)?sv:av)(x,1);M.version=C;const g=u.get(S);g&&e.remove(g),u.set(S,M)}function v(S){const x=u.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&p(S)}else p(S);return u.get(S)}return{get:d,update:m,getWireframeAttribute:v}}function Nb(o,e,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(s,y,u,x*h),i.update(y,s,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(s,y,u,x*h,b),i.update(y,s,b))}function v(x,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,b);let M=0;for(let g=0;g<b;g++)M+=y[g];i.update(M,s,1)}function S(x,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)p(x[g]/h,y[g],C[g]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,C,0,b);let g=0;for(let B=0;B<b;B++)g+=y[B]*C[B];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function Ob(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Pb(o,e,i){const s=new WeakMap,l=new Ge;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==S){let R=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let q=d.attributes.position.count*D,H=1;q>e.maxTextureSize&&(H=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const O=new Float32Array(q*H*4*S),V=new tv(O,q,H,S);V.type=ua,V.needsUpdate=!0;const w=D*4;for(let I=0;I<S;I++){const it=g[I],at=B[I],ut=N[I],pt=q*H*4*I;for(let P=0;P<it.count;P++){const Q=P*w;b===!0&&(l.fromBufferAttribute(it,P),O[pt+Q+0]=l.x,O[pt+Q+1]=l.y,O[pt+Q+2]=l.z,O[pt+Q+3]=0),C===!0&&(l.fromBufferAttribute(at,P),O[pt+Q+4]=l.x,O[pt+Q+5]=l.y,O[pt+Q+6]=l.z,O[pt+Q+7]=0),M===!0&&(l.fromBufferAttribute(ut,P),O[pt+Q+8]=l.x,O[pt+Q+9]=l.y,O[pt+Q+10]=l.z,O[pt+Q+11]=ut.itemSize===4?l.w:1)}}x={count:S,texture:V,size:new ae(q,H)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function zb(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,S=e.get(m,v);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const pv=new Yn,_0=new uv(1,1),mv=new tv,_v=new lM,gv=new lv,g0=[],v0=[],S0=new Float32Array(16),x0=new Float32Array(9),y0=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=g0[l];if(u===void 0&&(u=new Float32Array(l),g0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function kc(o,e){let i=v0[e];i===void 0&&(i=new Int32Array(e),v0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function Bb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function Fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function Gb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;y0.set(s),o.uniformMatrix2fv(this.addr,!1,y0),dn(i,s)}}function Vb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;x0.set(s),o.uniformMatrix3fv(this.addr,!1,x0),dn(i,s)}}function kb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;S0.set(s),o.uniformMatrix4fv(this.addr,!1,S0),dn(i,s)}}function Xb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function Yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function jb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function Qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function Jb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(_0.compareFunction=Q0,u=_0):u=pv,i.setTexture2D(e||u,l)}function $b(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||_v,l)}function t1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||gv,l)}function e1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||mv,l)}function n1(o){switch(o){case 5126:return Bb;case 35664:return Ib;case 35665:return Fb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return kb;case 5124:case 35670:return Xb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return Zb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}function i1(o,e){o.uniform1fv(this.addr,e)}function a1(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function s1(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function r1(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function o1(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function l1(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function c1(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function u1(o,e){o.uniform1iv(this.addr,e)}function f1(o,e){o.uniform2iv(this.addr,e)}function h1(o,e){o.uniform3iv(this.addr,e)}function d1(o,e){o.uniform4iv(this.addr,e)}function p1(o,e){o.uniform1uiv(this.addr,e)}function m1(o,e){o.uniform2uiv(this.addr,e)}function _1(o,e){o.uniform3uiv(this.addr,e)}function g1(o,e){o.uniform4uiv(this.addr,e)}function v1(o,e,i){const s=this.cache,l=e.length,u=kc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||pv,u[h])}function S1(o,e,i){const s=this.cache,l=e.length,u=kc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||_v,u[h])}function x1(o,e,i){const s=this.cache,l=e.length,u=kc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||gv,u[h])}function y1(o,e,i){const s=this.cache,l=e.length,u=kc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||mv,u[h])}function M1(o){switch(o){case 5126:return i1;case 35664:return a1;case 35665:return s1;case 35666:return r1;case 35674:return o1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return h1;case 35669:case 35673:return d1;case 5125:return p1;case 36294:return m1;case 36295:return _1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return y1}}class E1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=n1(i.type)}}class T1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=M1(i.type)}}class b1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function M0(o,e){o.seq.push(e),o.map[e.id]=e}function A1(o,e,i){const s=o.name,l=s.length;for(Ph.lastIndex=0;;){const u=Ph.exec(s),h=Ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){M0(i,p===void 0?new E1(d,o,e):new T1(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new b1(d),M0(i,S)),i=S}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);A1(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function E0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const R1=37297;let C1=0;function w1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const T0=new le;function D1(o){Ce._getMatrix(T0,Ce.workingColorSpace,o);const e=`mat3( ${T0.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Oc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function b0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+w1(o.getShaderSource(e),h)}else return l}function U1(o,e){const i=D1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function L1(o,e){let i;switch(e){case Ny:i="Linear";break;case Oy:i="Reinhard";break;case Py:i="Cineon";break;case zy:i="ACESFilmic";break;case Iy:i="AgX";break;case Fy:i="Neutral";break;case By:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new K;function N1(){Ce.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function P1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function z1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Go(o){return o!==""}function A0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(o){return o.replace(B1,F1)}const I1=new Map;function F1(o,e){let i=ce[e];if(i===void 0){const s=I1.get(e);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bd(i)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(o){return o.replace(H1,G1)}function G1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function w0(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function V1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function k1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Dr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ur&&(e="ENVMAP_MODE_REFRACTION"),e}function W1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case Uy:e="ENVMAP_BLENDING_MIX";break;case Ly:e="ENVMAP_BLENDING_ADD";break}return e}function q1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Y1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=V1(i),p=k1(i),v=X1(i),S=W1(i),x=q1(i),y=O1(i),b=P1(u),C=l.createProgram();let M,g,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(M=[w0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[w0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ce.tonemapping_pars_fragment:"",i.toneMapping!==qa?L1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,U1("linearToOutputTexel",i.outputColorSpace),N1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=bd(h),h=A0(h,i),h=R0(h,i),d=bd(d),d=A0(d,i),d=R0(d,i),h=C0(h),d=C0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=B+M+h,D=B+g+d,q=E0(l,l.VERTEX_SHADER,N),H=E0(l,l.FRAGMENT_SHADER,D);l.attachShader(C,q),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(I){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(q).trim(),ut=l.getShaderInfoLog(H).trim();let pt=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,q,H);else{const Q=b0(l,q,"vertex"),Z=b0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+it+`
`+Q+`
`+Z)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(at===""||ut==="")&&(P=!1);P&&(I.diagnostics={runnable:pt,programLog:it,vertexShader:{log:at,prefix:M},fragmentShader:{log:ut,prefix:g}})}l.deleteShader(q),l.deleteShader(H),V=new Nc(l,C),w=z1(l,C)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,R1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=q,this.fragmentShader=H,this}let j1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new K1(e),i.set(e,s)),s}}class K1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function Q1(o,e,i,s,l,u,h){const d=new ev,m=new Z1,p=new Set,v=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,I,it,at){const ut=it.fog,pt=at.geometry,P=w.isMeshStandardMaterial?it.environment:null,Q=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),Z=Q&&Q.mapping===Hc?Q.image.height:null,yt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const bt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,L=bt!==void 0?bt.length:0;let st=0;pt.morphAttributes.position!==void 0&&(st=1),pt.morphAttributes.normal!==void 0&&(st=2),pt.morphAttributes.color!==void 0&&(st=3);let St,j,ft,Et;if(yt){const Te=Ni[yt];St=Te.vertexShader,j=Te.fragmentShader}else St=w.vertexShader,j=w.fragmentShader,m.update(w),ft=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const vt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),zt=at.isInstancedMesh===!0,ie=at.isBatchedMesh===!0,Ne=!!w.map,fe=!!w.matcap,qe=!!Q,F=!!w.aoMap,An=!!w.lightMap,ue=!!w.bumpMap,me=!!w.normalMap,Wt=!!w.displacementMap,De=!!w.emissiveMap,Xt=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,et=w.clearcoat>0,ht=w.dispersion>0,Mt=w.iridescence>0,mt=w.sheen>0,Vt=w.transmission>0,wt=T&&!!w.anisotropyMap,Bt=et&&!!w.clearcoatMap,_e=et&&!!w.clearcoatNormalMap,At=et&&!!w.clearcoatRoughnessMap,It=Mt&&!!w.iridescenceMap,qt=Mt&&!!w.iridescenceThicknessMap,kt=mt&&!!w.sheenColorMap,Ot=mt&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,se=!!w.specularColorMap,Oe=!!w.specularIntensityMap,X=Vt&&!!w.transmissionMap,Rt=Vt&&!!w.thicknessMap,lt=!!w.gradientMap,gt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,Jt=!!w.extensions;let Ye=qa;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Ye=o.toneMapping);const ln={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:j,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ie,batchingColor:ie&&at._colorsTexture!==null,instancing:zt,instancingColor:zt&&at.instanceColor!==null,instancingMorph:zt&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Or,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:fe,envMap:qe,envMapMode:qe&&Q.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:An,bumpMap:ue,normalMap:me,displacementMap:x&&Wt,emissiveMap:De,normalMapObjectSpace:me&&w.normalMapType===ky,normalMapTangentSpace:me&&w.normalMapType===K0,metalnessMap:Xt,roughnessMap:U,anisotropy:T,anisotropyMap:wt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:At,dispersion:ht,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:mt,sheenColorMap:kt,sheenRoughnessMap:Ot,specularMap:Qt,specularColorMap:se,specularIntensityMap:Oe,transmission:Vt,transmissionMap:X,thicknessMap:Rt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===Ar&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ne&&C(w.map.channel),aoMapUv:F&&C(w.aoMap.channel),lightMapUv:An&&C(w.lightMap.channel),bumpMapUv:ue&&C(w.bumpMap.channel),normalMapUv:me&&C(w.normalMap.channel),displacementMapUv:Wt&&C(w.displacementMap.channel),emissiveMapUv:De&&C(w.emissiveMap.channel),metalnessMapUv:Xt&&C(w.metalnessMap.channel),roughnessMapUv:U&&C(w.roughnessMap.channel),anisotropyMapUv:wt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&C(w.sheenRoughnessMap.channel),specularMapUv:Qt&&C(w.specularMap.channel),specularColorMapUv:se&&C(w.specularColorMap.channel),specularIntensityMapUv:Oe&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:gt&&C(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(me||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!pt.attributes.uv&&(Ne||gt),fog:!!ut,useFog:w.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Ht,skinning:at.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:st,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ca,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||ie)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)R.push(I),R.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(B(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=b[w.type];let I;if(R){const it=Ni[R];I=xM.clone(it.uniforms)}else I=w.uniforms;return I}function q(w,R){let I;for(let it=0,at=v.length;it<at;it++){const ut=v[it];if(ut.cacheKey===R){I=ut,++I.usedTimes;break}}return I===void 0&&(I=new Y1(o,R,w,u),v.push(I)),I}function H(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function O(w){m.remove(w)}function V(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:D,acquireProgram:q,releaseProgram:H,releaseShaderCache:O,programs:v,dispose:V}}function J1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function $1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function D0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function U0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(S,x,y,b,C,M){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:x,material:y,groupOrder:b,renderOrder:S.renderOrder,z:C,group:M},o[e]=g):(g.id=S.id,g.object=S,g.geometry=x,g.material=y,g.groupOrder=b,g.renderOrder=S.renderOrder,g.z=C,g.group=M),e++,g}function d(S,x,y,b,C,M){const g=h(S,x,y,b,C,M);y.transmission>0?s.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(S,x,y,b,C,M){const g=h(S,x,y,b,C,M);y.transmission>0?s.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(S,x){i.length>1&&i.sort(S||$1),s.length>1&&s.sort(x||D0),l.length>1&&l.sort(x||D0)}function v(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function tA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new U0,o.set(s,[h])):l>=u.length?(h=new U0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Me};break;case"SpotLight":i={position:new K,direction:new K,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function nA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iA=0;function aA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sA(o){const e=new eA,i=nA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,u=new Ze,h=new Ze;function d(p){let v=0,S=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,b=0,C=0,M=0,g=0,B=0,N=0,D=0,q=0,H=0,O=0;p.sort(aA);for(let w=0,R=p.length;w<R;w++){const I=p[w],it=I.color,at=I.intensity,ut=I.distance,pt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=it.r*at,S+=it.g*at,x+=it.b*at;else if(I.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(I.sh.coefficients[P],at);O++}else if(I.isDirectionalLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,Z=i.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=pt,s.directionalShadowMatrix[y]=I.shadow.matrix,B++}s.directional[y]=P,y++}else if(I.isSpotLight){const P=e.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(it).multiplyScalar(at),P.distance=ut,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,s.spot[C]=P;const Q=I.shadow;if(I.map&&(s.spotLightMap[q]=I.map,q++,Q.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[C]=Q.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=pt,D++}C++}else if(I.isRectAreaLight){const P=e.get(I);P.color.copy(it).multiplyScalar(at),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=P,M++}else if(I.isPointLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const Q=I.shadow,Z=i.get(I);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=pt,s.pointShadowMatrix[b]=I.shadow.matrix,N++}s.point[b]=P,b++}else if(I.isHemisphereLight){const P=e.get(I);P.skyColor.copy(I.color).multiplyScalar(at),P.groundColor.copy(I.groundColor).multiplyScalar(at),s.hemi[g]=P,g++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==y||V.pointLength!==b||V.spotLength!==C||V.rectAreaLength!==M||V.hemiLength!==g||V.numDirectionalShadows!==B||V.numPointShadows!==N||V.numSpotShadows!==D||V.numSpotMaps!==q||V.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+q-H,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=O,V.directionalLength=y,V.pointLength=b,V.spotLength=C,V.rectAreaLength=M,V.hemiLength=g,V.numDirectionalShadows=B,V.numPointShadows=N,V.numSpotShadows=D,V.numSpotMaps=q,V.numLightProbes=O,s.version=iA++)}function m(p,v){let S=0,x=0,y=0,b=0,C=0;const M=v.matrixWorldInverse;for(let g=0,B=p.length;g<B;g++){const N=p[g];if(N.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(N.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function L0(o){const e=new sA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function rA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new L0(o),e.set(l,[d])):u>=h.length?(d=new L0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
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
}`;function cA(o,e,i){let s=new zd;const l=new ae,u=new ae,h=new Ge,d=new DM({depthPacking:Vy}),m=new UM,p={},v=i.maxTextureSize,S={[Ya]:qn,[qn]:Ya,[ca]:ca},x=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ii;b.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Tn(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0;let g=this.type;this.render=function(H,O,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),it=o.state;it.setBlending(Wa),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=g!==la&&this.type===la,ut=g===la&&this.type!==la;for(let pt=0,P=H.length;pt<P;pt++){const Q=H[pt],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/yt.x),l.x=u.x*yt.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/yt.y),l.y=u.y*yt.y,Z.mapSize.y=u.y)),Z.map===null||at===!0||ut===!0){const L=this.type!==la?{minFilter:Ri,magFilter:Ri}:{};Z.map!==null&&Z.map.dispose(),Z.map=new As(l.x,l.y,L),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const bt=Z.getViewportCount();for(let L=0;L<bt;L++){const st=Z.getViewport(L);h.set(u.x*st.x,u.y*st.y,u.x*st.z,u.y*st.w),it.viewport(h),Z.updateMatrices(Q,L),s=Z.getFrustum(),D(O,V,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===la&&B(Z,V),Z.needsUpdate=!1}g=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,I)};function B(H,O){const V=e.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new As(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,V,x,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,V,y,C,null)}function N(H,O,V,w){let R=null;const I=V.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)R=I;else if(R=V.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const it=R.uuid,at=O.uuid;let ut=p[it];ut===void 0&&(ut={},p[it]=ut);let pt=ut[at];pt===void 0&&(pt=R.clone(),ut[at]=pt,O.addEventListener("dispose",q)),R=pt}if(R.visible=O.visible,R.wireframe=O.wireframe,w===la?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:S[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const it=o.properties.get(R);it.light=V}return R}function D(H,O,V,w,R){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===la)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,H.matrixWorld);const at=e.update(H),ut=H.material;if(Array.isArray(ut)){const pt=at.groups;for(let P=0,Q=pt.length;P<Q;P++){const Z=pt[P],yt=ut[Z.materialIndex];if(yt&&yt.visible){const bt=N(H,yt,w,R);H.onBeforeShadow(o,H,O,V,at,bt,Z),o.renderBufferDirect(V,null,at,bt,H,Z),H.onAfterShadow(o,H,O,V,at,bt,Z)}}}else if(ut.visible){const pt=N(H,ut,w,R);H.onBeforeShadow(o,H,O,V,at,pt,null),o.renderBufferDirect(V,null,at,pt,H,null),H.onAfterShadow(o,H,O,V,at,pt,null)}}const it=H.children;for(let at=0,ut=it.length;at<ut;at++)D(it[at],O,V,w,R)}function q(H){H.target.removeEventListener("dispose",q);for(const V in p){const w=p[V],R=H.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const uA={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[wr]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:wr};function fA(o,e){function i(){let X=!1;const Rt=new Ge;let lt=null;const gt=new Ge(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!X&&(o.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Dt,Jt,Ye,ln){ln===!0&&(Ct*=Ye,Dt*=Ye,Jt*=Ye),Rt.set(Ct,Dt,Jt,Ye),gt.equals(Rt)===!1&&(o.clearColor(Ct,Dt,Jt,Ye),gt.copy(Rt))},reset:function(){X=!1,lt=null,gt.set(-1,0,0,0)}}}function s(){let X=!1,Rt=!1,lt=null,gt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const Jt=e.get("EXT_clip_control");Rt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Ct;Ct=null,this.setClear(Ye)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?vt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!X&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=uA[Dt]),gt!==Dt){switch(Dt){case Gh:o.depthFunc(o.NEVER);break;case Vh:o.depthFunc(o.ALWAYS);break;case kh:o.depthFunc(o.LESS);break;case wr:o.depthFunc(o.LEQUAL);break;case Xh:o.depthFunc(o.EQUAL);break;case Wh:o.depthFunc(o.GEQUAL);break;case qh:o.depthFunc(o.GREATER);break;case Yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){X=!1,lt=null,gt=null,Ct=null,Rt=!1}}}function l(){let X=!1,Rt=null,lt=null,gt=null,Ct=null,Dt=null,Jt=null,Ye=null,ln=null;return{setTest:function(Te){X||(Te?vt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!X&&(o.stencilMask(Te),Rt=Te)},setFunc:function(Te,gn,_i){(lt!==Te||gt!==gn||Ct!==_i)&&(o.stencilFunc(Te,gn,_i),lt=Te,gt=gn,Ct=_i)},setOp:function(Te,gn,_i){(Dt!==Te||Jt!==gn||Ye!==_i)&&(o.stencilOp(Te,gn,_i),Dt=Te,Jt=gn,Ye=_i)},setLocked:function(Te){X=Te},setClear:function(Te){ln!==Te&&(o.clearStencil(Te),ln=Te)},reset:function(){X=!1,Rt=null,lt=null,gt=null,Ct=null,Dt=null,Jt=null,Ye=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},S={},x=new WeakMap,y=[],b=null,C=!1,M=null,g=null,B=null,N=null,D=null,q=null,H=null,O=new Me(0,0,0),V=0,w=!1,R=null,I=null,it=null,at=null,ut=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=Q>=2);let yt=null,bt={};const L=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),St=new Ge().fromArray(L),j=new Ge().fromArray(st);function ft(X,Rt,lt,gt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(X,Dt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<lt;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Et={};Et[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Et[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Et[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),h.setFunc(wr),ue(!1),me(Dg),vt(o.CULL_FACE),F(Wa);function vt(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Ht(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function zt(X,Rt){return S[X]!==Rt?(o.bindFramebuffer(X,Rt),S[X]=Rt,X===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),X===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ie(X,Rt){let lt=y,gt=!1;if(X){lt=x.get(Rt),lt===void 0&&(lt=[],x.set(Rt,lt));const Ct=X.textures;if(lt.length!==Ct.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++)lt[Dt]=o.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,gt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,gt=!0);gt&&o.drawBuffers(lt)}function Ne(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const fe={[ys]:o.FUNC_ADD,[py]:o.FUNC_SUBTRACT,[my]:o.FUNC_REVERSE_SUBTRACT};fe[_y]=o.MIN,fe[gy]=o.MAX;const qe={[vy]:o.ZERO,[Sy]:o.ONE,[xy]:o.SRC_COLOR,[Fh]:o.SRC_ALPHA,[Ay]:o.SRC_ALPHA_SATURATE,[Ty]:o.DST_COLOR,[My]:o.DST_ALPHA,[yy]:o.ONE_MINUS_SRC_COLOR,[Hh]:o.ONE_MINUS_SRC_ALPHA,[by]:o.ONE_MINUS_DST_COLOR,[Ey]:o.ONE_MINUS_DST_ALPHA,[Ry]:o.CONSTANT_COLOR,[Cy]:o.ONE_MINUS_CONSTANT_COLOR,[wy]:o.CONSTANT_ALPHA,[Dy]:o.ONE_MINUS_CONSTANT_ALPHA};function F(X,Rt,lt,gt,Ct,Dt,Jt,Ye,ln,Te){if(X===Wa){C===!0&&(Ht(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),X!==dy){if(X!==M||Te!==w){if((g!==ys||D!==ys)&&(o.blendEquation(o.FUNC_ADD),g=ys,D=ys),Te)switch(X){case Ar:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.ONE,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ar:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,N=null,q=null,H=null,O.set(0,0,0),V=0,M=X,w=Te}return}Ct=Ct||Rt,Dt=Dt||lt,Jt=Jt||gt,(Rt!==g||Ct!==D)&&(o.blendEquationSeparate(fe[Rt],fe[Ct]),g=Rt,D=Ct),(lt!==B||gt!==N||Dt!==q||Jt!==H)&&(o.blendFuncSeparate(qe[lt],qe[gt],qe[Dt],qe[Jt]),B=lt,N=gt,q=Dt,H=Jt),(Ye.equals(O)===!1||ln!==V)&&(o.blendColor(Ye.r,Ye.g,Ye.b,ln),O.copy(Ye),V=ln),M=X,w=!1}function An(X,Rt){X.side===ca?Ht(o.CULL_FACE):vt(o.CULL_FACE);let lt=X.side===qn;Rt&&(lt=!lt),ue(lt),X.blending===Ar&&X.transparent===!1?F(Wa):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const gt=X.stencilWrite;d.setTest(gt),gt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),De(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function me(X){X!==fy?(vt(o.CULL_FACE),X!==I&&(X===Dg?o.cullFace(o.BACK):X===hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),I=X}function Wt(X){X!==it&&(P&&o.lineWidth(X),it=X)}function De(X,Rt,lt){X?(vt(o.POLYGON_OFFSET_FILL),(at!==Rt||ut!==lt)&&(o.polygonOffset(Rt,lt),at=Rt,ut=lt)):Ht(o.POLYGON_OFFSET_FILL)}function Xt(X){X?vt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+pt-1),yt!==X&&(o.activeTexture(X),yt=X)}function T(X,Rt,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+pt-1:lt=yt);let gt=bt[lt];gt===void 0&&(gt={type:void 0,texture:void 0},bt[lt]=gt),(gt.type!==X||gt.texture!==Rt)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(X,Rt||Et[X]),gt.type=X,gt.texture=Rt)}function et(){const X=bt[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(X){St.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Ot(X){j.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Qt(X,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let gt=lt.get(X);gt===void 0&&(gt=o.getUniformBlockIndex(Rt,X.name),lt.set(X,gt))}function se(X,Rt){const gt=p.get(Rt).get(X);m.get(Rt)!==gt&&(o.uniformBlockBinding(Rt,gt,X.__bindingPointIndex),m.set(Rt,gt))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,bt={},S={},x=new WeakMap,y=[],b=null,C=!1,M=null,g=null,B=null,N=null,D=null,q=null,H=null,O=new Me(0,0,0),V=0,w=!1,R=null,I=null,it=null,at=null,ut=null,St.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:vt,disable:Ht,bindFramebuffer:zt,drawBuffers:ie,useProgram:Ne,setBlending:F,setMaterial:An,setFlipSided:ue,setCullFace:me,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:Xt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:It,texImage3D:qt,updateUBOMapping:Qt,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:At,texSubImage2D:mt,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Bt,scissor:kt,viewport:Ot,reset:Oe}}function hA(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,v=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return y?new OffscreenCanvas(U,T):zc("canvas")}function C(U,T,et){let ht=1;const Mt=Xt(U);if((Mt.width>et||Mt.height>et)&&(ht=et/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(ht*Mt.width),Vt=Math.floor(ht*Mt.height);S===void 0&&(S=b(mt,Vt));const wt=T?b(mt,Vt):S;return wt.width=mt,wt.height=Vt,wt.getContext("2d").drawImage(U,0,0,mt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Vt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function M(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,T,et,ht,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=T;if(T===o.RED&&(et===o.FLOAT&&(mt=o.R32F),et===o.HALF_FLOAT&&(mt=o.R16F),et===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.R8UI),et===o.UNSIGNED_SHORT&&(mt=o.R16UI),et===o.UNSIGNED_INT&&(mt=o.R32UI),et===o.BYTE&&(mt=o.R8I),et===o.SHORT&&(mt=o.R16I),et===o.INT&&(mt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(mt=o.RG32F),et===o.HALF_FLOAT&&(mt=o.RG16F),et===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RG8UI),et===o.UNSIGNED_SHORT&&(mt=o.RG16UI),et===o.UNSIGNED_INT&&(mt=o.RG32UI),et===o.BYTE&&(mt=o.RG8I),et===o.SHORT&&(mt=o.RG16I),et===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),et===o.UNSIGNED_INT&&(mt=o.RGB32UI),et===o.BYTE&&(mt=o.RGB8I),et===o.SHORT&&(mt=o.RGB16I),et===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),et===o.UNSIGNED_INT&&(mt=o.RGBA32UI),et===o.BYTE&&(mt=o.RGBA8I),et===o.SHORT&&(mt=o.RGBA16I),et===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Vt=Mt?Oc:Ce.getTransfer(ht);et===o.FLOAT&&(mt=o.RGBA32F),et===o.HALF_FLOAT&&(mt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(mt=Vt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function D(U,T){let et;return U?T===null||T===bs||T===Lr?et=o.DEPTH24_STENCIL8:T===ua?et=o.DEPTH32F_STENCIL8:T===Vo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bs||T===Lr?et=o.DEPTH_COMPONENT24:T===ua?et=o.DEPTH_COMPONENT32F:T===Vo&&(et=o.DEPTH_COMPONENT16),et}function q(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ri&&U.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function H(U){const T=U.target;T.removeEventListener("dispose",H),V(T),T.isVideoTexture&&v.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),R(T)}function V(U){const T=s.get(U);if(T.__webglInit===void 0)return;const et=U.source,ht=x.get(et);if(ht){const Mt=ht[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(U),Object.keys(ht).length===0&&x.delete(et)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const et=U.source,ht=x.get(et);delete ht[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Mt=0;Mt<T.__webglFramebuffer[ht].length;Mt++)o.deleteFramebuffer(T.__webglFramebuffer[ht][Mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let ht=0,Mt=et.length;ht<Mt;ht++){const mt=s.get(et[ht]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(U)}let I=0;function it(){I=0}function at(){const U=I;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),I+=1,U}function ut(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function pt(U,T){const et=s.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(et,U,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function P(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){j(et,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function Q(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){j(et,U,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){ft(et,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const yt={[Kh]:o.REPEAT,[Es]:o.CLAMP_TO_EDGE,[Qh]:o.MIRRORED_REPEAT},bt={[Ri]:o.NEAREST,[Hy]:o.NEAREST_MIPMAP_NEAREST,[ic]:o.NEAREST_MIPMAP_LINEAR,[Pi]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[Ts]:o.LINEAR_MIPMAP_LINEAR},L={[Xy]:o.NEVER,[Ky]:o.ALWAYS,[Wy]:o.LESS,[Q0]:o.LEQUAL,[qy]:o.EQUAL,[Zy]:o.GEQUAL,[Yy]:o.GREATER,[jy]:o.NOTEQUAL};function st(U,T){if(T.type===ua&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===ah||T.magFilter===ic||T.magFilter===Ts||T.minFilter===Pi||T.minFilter===ah||T.minFilter===ic||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,yt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,bt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==ic&&T.minFilter!==Ts||T.type===ua&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",H));const ht=T.source;let Mt=x.get(ht);Mt===void 0&&(Mt={},x.set(ht,Mt));const mt=ut(T);if(mt!==U.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[mt].usedTimes++;const Vt=Mt[U.__cacheKey];Vt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(T)),U.__cacheKey=mt,U.__webglTexture=Mt[mt].texture}return et}function j(U,T,et){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const Mt=St(U,T),mt=T.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+et);const Vt=s.get(mt);if(mt.version!==Vt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const wt=Ce.getPrimaries(Ce.workingColorSpace),Bt=T.colorSpace===Xa?null:Ce.getPrimaries(T.colorSpace),_e=T.colorSpace===Xa||wt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let At=C(T.image,!1,l.maxTextureSize);At=De(T,At);const It=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let kt=N(T.internalFormat,It,qt,T.colorSpace,T.isVideoTexture);st(ht,T);let Ot;const Qt=T.mipmaps,se=T.isVideoTexture!==!0,Oe=Vt.__version===void 0||Mt===!0,X=mt.dataReady,Rt=q(T,At);if(T.isDepthTexture)kt=D(T.format===Nr,T.type),Oe&&(se?i.texStorage2D(o.TEXTURE_2D,1,kt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,It,qt,null));else if(T.isDataTexture)if(Qt.length>0){se&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Qt[0].width,Qt[0].height);for(let lt=0,gt=Qt.length;lt<gt;lt++)Ot=Qt[lt],se?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,It,qt,Ot.data);T.generateMipmaps=!1}else se?(Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,It,qt,At.data)):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,It,qt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,Qt[0].width,Qt[0].height,At.depth);for(let lt=0,gt=Qt.length;lt<gt;lt++)if(Ot=Qt[lt],T.format!==Ai)if(It!==null)if(se){if(X)if(T.layerUpdates.size>0){const Ct=l0(Ot.width,Ot.height,T.format,T.type);for(const Dt of T.layerUpdates){const Jt=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Dt,Ot.width,Ot.height,1,It,Jt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,It,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,It,qt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Ot.width,Ot.height,At.depth,0,It,qt,Ot.data)}else{se&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Qt[0].width,Qt[0].height);for(let lt=0,gt=Qt.length;lt<gt;lt++)Ot=Qt[lt],T.format!==Ai?It!==null?se?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,It,qt,Ot.data)}else if(T.isDataArrayTexture)if(se){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,At.width,At.height,At.depth),X)if(T.layerUpdates.size>0){const lt=l0(At.width,At.height,T.format,T.type);for(const gt of T.layerUpdates){const Ct=At.data.subarray(gt*lt/At.data.BYTES_PER_ELEMENT,(gt+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,At.width,At.height,1,It,qt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,qt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,At.width,At.height,At.depth,0,It,qt,At.data);else if(T.isData3DTexture)se?(Oe&&i.texStorage3D(o.TEXTURE_3D,Rt,kt,At.width,At.height,At.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,qt,At.data)):i.texImage3D(o.TEXTURE_3D,0,kt,At.width,At.height,At.depth,0,It,qt,At.data);else if(T.isFramebufferTexture){if(Oe)if(se)i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height);else{let lt=At.width,gt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,kt,lt,gt,0,It,qt,null),lt>>=1,gt>>=1}}else if(Qt.length>0){if(se&&Oe){const lt=Xt(Qt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}for(let lt=0,gt=Qt.length;lt<gt;lt++)Ot=Qt[lt],se?X&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,It,qt,Ot):i.texImage2D(o.TEXTURE_2D,lt,kt,It,qt,Ot);T.generateMipmaps=!1}else if(se){if(Oe){const lt=Xt(At);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,qt,At)}else i.texImage2D(o.TEXTURE_2D,0,kt,It,qt,At);M(T)&&g(ht),Vt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ft(U,T,et){if(T.image.length!==6)return;const ht=St(U,T),Mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const mt=s.get(Mt);if(Mt.version!==mt.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Vt=Ce.getPrimaries(Ce.workingColorSpace),wt=T.colorSpace===Xa?null:Ce.getPrimaries(T.colorSpace),Bt=T.colorSpace===Xa||Vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!_e&&!At?It[gt]=C(T.image[gt],!0,l.maxCubemapSize):It[gt]=At?T.image[gt].image:T.image[gt],It[gt]=De(T,It[gt]);const qt=It[0],kt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),Qt=N(T.internalFormat,kt,Ot,T.colorSpace),se=T.isVideoTexture!==!0,Oe=mt.__version===void 0||ht===!0,X=Mt.dataReady;let Rt=q(T,qt);st(o.TEXTURE_CUBE_MAP,T);let lt;if(_e){se&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Qt,qt.width,qt.height);for(let gt=0;gt<6;gt++){lt=It[gt].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];T.format!==Ai?kt!==null?se?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,Qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,kt,Ot,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,Qt,Dt.width,Dt.height,0,kt,Ot,Dt.data)}}}else{if(lt=T.mipmaps,se&&Oe){lt.length>0&&Rt++;const gt=Xt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(At){se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,kt,Ot,It[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Qt,It[gt].width,It[gt].height,0,kt,Ot,It[gt].data);for(let Ct=0;Ct<lt.length;Ct++){const Jt=lt[Ct].image[gt].image;se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Jt.width,Jt.height,kt,Ot,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,Qt,Jt.width,Jt.height,0,kt,Ot,Jt.data)}}else{se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Ot,It[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Qt,kt,Ot,It[gt]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];se?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,kt,Ot,Dt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,Qt,kt,Ot,Dt.image[gt])}}}M(T)&&g(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,et,ht,Mt,mt){const Vt=u.convert(et.format,et.colorSpace),wt=u.convert(et.type),Bt=N(et.internalFormat,Vt,wt,et.colorSpace),_e=s.get(T),At=s.get(et);if(At.__renderTarget=T,!_e.__hasExternalTextures){const It=Math.max(1,T.width>>mt),qt=Math.max(1,T.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,Bt,It,qt,T.depth,0,Vt,wt,null):i.texImage2D(Mt,mt,Bt,It,qt,0,Vt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Mt,At.__webglTexture,0,ue(T)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Mt,At.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(U,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const ht=T.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,mt=D(T.stencilBuffer,Mt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ue(T);me(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,mt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const ht=T.textures;for(let Mt=0;Mt<ht.length;Mt++){const mt=ht[Mt],Vt=u.convert(mt.format,mt.colorSpace),wt=u.convert(mt.type),Bt=N(mt.internalFormat,Vt,wt,mt.colorSpace),_e=ue(T);et&&me(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Bt,T.width,T.height):me(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const Mt=ht.__webglTexture,mt=ue(T);if(T.depthTexture.format===Rr)me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Nr)me(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function zt(U){const T=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ht}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),vt(T.__webglDepthbuffer[ht],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),vt(T.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(U,T,et){const ht=s.get(U);T!==void 0&&Et(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&zt(U)}function Ne(U){const T=U.texture,et=s.get(U),ht=s.get(T);U.addEventListener("dispose",O);const Mt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,h.memory.textures++),mt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)et.__webglFramebuffer[wt][Bt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let wt=0,Bt=Mt.length;wt<Bt;wt++){const _e=s.get(Mt[wt]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&me(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const Bt=Mt[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const _e=u.convert(Bt.format,Bt.colorSpace),At=u.convert(Bt.type),It=N(Bt.internalFormat,_e,At,Bt.colorSpace,U.isXRRenderTarget===!0),qt=ue(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),st(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Et(et.__webglFramebuffer[wt][Bt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Bt);else Et(et.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(T)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Bt=Mt.length;wt<Bt;wt++){const _e=Mt[wt],At=s.get(_e);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),st(o.TEXTURE_2D,_e),Et(et.__webglFramebuffer,U,_e,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(_e)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),st(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Et(et.__webglFramebuffer[Bt],U,T,o.COLOR_ATTACHMENT0,wt,Bt);else Et(et.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);M(T)&&g(wt),i.unbindTexture()}U.depthBuffer&&zt(U)}function fe(U){const T=U.textures;for(let et=0,ht=T.length;et<ht;et++){const Mt=T[et];if(M(Mt)){const mt=B(U),Vt=s.get(Mt).__webglTexture;i.bindTexture(mt,Vt),g(mt),i.unbindTexture()}}}const qe=[],F=[];function An(U){if(U.samples>0){if(me(U)===!1){const T=U.textures,et=U.width,ht=U.height;let Mt=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(U),wt=T.length>1;if(wt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const _e=s.get(T[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,Mt,o.NEAREST),m===!0&&(qe.length=0,F.length=0,qe.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(qe.push(mt),F.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const _e=s.get(T[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,_e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ue(U){return Math.min(l.maxSamples,U.samples)}function me(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function De(U,T){const et=U.colorSpace,ht=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Or&&et!==Xa&&(Ce.getTransfer(et)===Fe?(ht!==Ai||Mt!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=pt,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=ie,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=me}function dA(o,e){function i(s,l=Xa){let u;const h=Ce.getTransfer(l);if(s===da)return o.UNSIGNED_BYTE;if(s===Dd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ud)return o.UNSIGNED_SHORT_5_5_5_1;if(s===V0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===H0)return o.BYTE;if(s===G0)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===wd)return o.INT;if(s===bs)return o.UNSIGNED_INT;if(s===ua)return o.FLOAT;if(s===ko)return o.HALF_FLOAT;if(s===k0)return o.ALPHA;if(s===X0)return o.RGB;if(s===Ai)return o.RGBA;if(s===W0)return o.LUMINANCE;if(s===q0)return o.LUMINANCE_ALPHA;if(s===Rr)return o.DEPTH_COMPONENT;if(s===Nr)return o.DEPTH_STENCIL;if(s===Y0)return o.RED;if(s===Ld)return o.RED_INTEGER;if(s===j0)return o.RG;if(s===Nd)return o.RG_INTEGER;if(s===Od)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jh||s===$h||s===td||s===ed)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd||s===id||s===ad)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===nd||s===id)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===Sd||s===xd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Uc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Z0||s===yd||s===Md||s===Ed)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===yd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const pA={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),g=this._getHandJoint(p,C);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=v.position.distanceTo(S.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ho;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_A=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Yn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ja({vertexShader:mA,fragmentShader:_A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tn(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends Cs{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,S=null,x=null,y=null,b=null;const C=new gA,M=i.getContextAttributes();let g=null,B=null;const N=[],D=[],q=new ae;let H=null;const O=new ai;O.viewport=new Ge;const V=new ai;V.viewport=new Ge;const w=[O,V],R=new BM;let I=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ft=N[j];return ft===void 0&&(ft=new zh,N[j]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(j){let ft=N[j];return ft===void 0&&(ft=new zh,N[j]=ft),ft.getGripSpace()},this.getHand=function(j){let ft=N[j];return ft===void 0&&(ft=new zh,N[j]=ft),ft.getHandSpace()};function at(j){const ft=D.indexOf(j.inputSource);if(ft===-1)return;const Et=N[ft];Et!==void 0&&(Et.update(j.inputSource,j.frame,p||h),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function ut(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",pt);for(let j=0;j<N.length;j++){const ft=D[j];ft!==null&&(D[j]=null,N[j].disconnect(ft))}I=null,it=null,C.reset(),e.setRenderTarget(g),y=null,x=null,S=null,l=null,B=null,St.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(q.width,q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(q),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let Et=null,vt=null,Ht=null;M.depth&&(Ht=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=M.stencil?Nr:Rr,vt=M.stencil?Lr:bs);const zt={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(zt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new As(x.textureWidth,x.textureHeight,{format:Ai,type:da,depthTexture:new uv(x.textureWidth,x.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new As(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:da,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pt(j){for(let ft=0;ft<j.removed.length;ft++){const Et=j.removed[ft],vt=D.indexOf(Et);vt>=0&&(D[vt]=null,N[vt].disconnect(Et))}for(let ft=0;ft<j.added.length;ft++){const Et=j.added[ft];let vt=D.indexOf(Et);if(vt===-1){for(let zt=0;zt<N.length;zt++)if(zt>=D.length){D.push(Et),vt=zt;break}else if(D[zt]===null){D[zt]=Et,vt=zt;break}if(vt===-1)break}const Ht=N[vt];Ht&&Ht.connect(Et)}}const P=new K,Q=new K;function Z(j,ft,Et){P.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(Et.matrixWorld);const vt=P.distanceTo(Q),Ht=ft.projectionMatrix.elements,zt=Et.projectionMatrix.elements,ie=Ht[14]/(Ht[10]-1),Ne=Ht[14]/(Ht[10]+1),fe=(Ht[9]+1)/Ht[5],qe=(Ht[9]-1)/Ht[5],F=(Ht[8]-1)/Ht[0],An=(zt[8]+1)/zt[0],ue=ie*F,me=ie*An,Wt=vt/(-F+An),De=Wt*-F;if(ft.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(Wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ht[10]===-1)j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Xt=ie+Wt,U=Ne+Wt,T=ue-De,et=me+(vt-De),ht=fe*Ne/U*Xt,Mt=qe*Ne/U*Xt;j.projectionMatrix.makePerspective(T,et,ht,Mt,Xt,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function yt(j,ft){ft===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ft.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ft=j.near,Et=j.far;C.texture!==null&&(C.depthNear>0&&(ft=C.depthNear),C.depthFar>0&&(Et=C.depthFar)),R.near=V.near=O.near=ft,R.far=V.far=O.far=Et,(I!==R.near||it!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,it=R.far),O.layers.mask=j.layers.mask|2,V.layers.mask=j.layers.mask|4,R.layers.mask=O.layers.mask|V.layers.mask;const vt=j.parent,Ht=R.cameras;yt(R,vt);for(let zt=0;zt<Ht.length;zt++)yt(Ht[zt],vt);Ht.length===2?Z(R,O,V):R.projectionMatrix.copy(O.projectionMatrix),bt(j,R,vt)};function bt(j,ft,Et){Et===null?j.matrix.copy(ft.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(ft.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Td*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(j){m=j,x!==null&&(x.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let L=null;function st(j,ft){if(v=ft.getViewerPose(p||h),b=ft,v!==null){const Et=v.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let vt=!1;Et.length!==R.cameras.length&&(R.cameras.length=0,vt=!0);for(let zt=0;zt<Et.length;zt++){const ie=Et[zt];let Ne=null;if(y!==null)Ne=y.getViewport(ie);else{const qe=S.getViewSubImage(x,ie);Ne=qe.viewport,zt===0&&(e.setRenderTargetTextures(B,qe.colorTexture,x.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(B))}let fe=w[zt];fe===void 0&&(fe=new ai,fe.layers.enable(zt),fe.viewport=new Ge,w[zt]=fe),fe.matrix.fromArray(ie.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ie.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),zt===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),vt===!0&&R.cameras.push(fe)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const zt=S.getDepthInformation(Et[0]);zt&&zt.isValid&&zt.texture&&C.init(e,zt,l.renderState)}}for(let Et=0;Et<N.length;Et++){const vt=D[Et],Ht=N[Et];vt!==null&&Ht!==void 0&&Ht.update(vt,ft,p||h)}L&&L(j,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const St=new dv;St.setAnimationLoop(st),this.setAnimationLoop=function(j){L=j},this.dispose=function(){}}}const Ss=new Bi,SA=new Ze;function xA(o,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function s(M,g){g.color.getRGB(M.fogColor.value,rv(o)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,B,N,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),S(M,g)):g.isMeshPhongMaterial?(u(M,g),v(M,g)):g.isMeshStandardMaterial?(u(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,D)):g.isMeshMatcapMaterial?(u(M,g),b(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),C(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,B,N):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===qn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===qn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const B=e.get(g),N=B.envMap,D=B.envMapRotation;N&&(M.envMap.value=N,Ss.copy(D),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),M.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Ss)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,B,N){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*B,M.scale.value=N*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function v(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function S(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,B){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,g){g.matcap&&(M.matcap.value=g.matcap)}function C(M,g){const B=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function yA(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const D=N.program;s.uniformBlockBinding(B,D)}function p(B,N){let D=l[B.id];D===void 0&&(b(B),D=v(B),l[B.id]=D,B.addEventListener("dispose",M));const q=N.program;s.updateUBOMapping(B,q);const H=e.render.frame;u[B.id]!==H&&(x(B),u[B.id]=H)}function v(B){const N=S();B.__bindingPointIndex=N;const D=o.createBuffer(),q=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,q,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function S(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const N=l[B.id],D=B.uniforms,q=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,O=D.length;H<O;H++){const V=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,R=V.length;w<R;w++){const I=V[w];if(y(I,H,w,q)===!0){const it=I.__offset,at=Array.isArray(I.value)?I.value:[I.value];let ut=0;for(let pt=0;pt<at.length;pt++){const P=at[pt],Q=C(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,it+ut,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,ut),ut+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,N,D,q){const H=B.value,O=N+"_"+D;if(q[O]===void 0)return typeof H=="number"||typeof H=="boolean"?q[O]=H:q[O]=H.clone(),!0;{const V=q[O];if(typeof H=="number"||typeof H=="boolean"){if(V!==H)return q[O]=H,!0}else if(V.equals(H)===!1)return V.copy(H),!0}return!1}function b(B){const N=B.uniforms;let D=0;const q=16;for(let O=0,V=N.length;O<V;O++){const w=Array.isArray(N[O])?N[O]:[N[O]];for(let R=0,I=w.length;R<I;R++){const it=w[R],at=Array.isArray(it.value)?it.value:[it.value];for(let ut=0,pt=at.length;ut<pt;ut++){const P=at[ut],Q=C(P),Z=D%q,yt=Z%Q.boundary,bt=Z+yt;D+=yt,bt!==0&&q-bt<Q.storage&&(D+=q-bt),it.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=Q.storage}}}const H=D%q;return H>0&&(D+=q-H),B.__size=D,B.__cache={},this}function C(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function g(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class MA{constructor(e={}){const{canvas:i=$y(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,g=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=qa,this.toneMappingExposure=1;const D=this;let q=!1,H=0,O=0,V=null,w=-1,R=null;const I=new Ge,it=new Ge;let at=null;const ut=new Me(0);let pt=0,P=i.width,Q=i.height,Z=1,yt=null,bt=null;const L=new Ge(0,0,P,Q),st=new Ge(0,0,P,Q);let St=!1;const j=new zd;let ft=!1,Et=!1;this.transmissionResolutionScale=1;const vt=new Ze,Ht=new Ze,zt=new K,ie=new Ge,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function qe(){return V===null?Z:1}let F=s;function An(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const W="webgl2";if(F=An(W,A),F===null)throw An(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,me,Wt,De,Xt,U,T,et,ht,Mt,mt,Vt,wt,Bt,_e,At,It,qt,kt,Ot,Qt,se,Oe,X;function Rt(){ue=new Ub(F),ue.init(),se=new dA(F,ue),me=new bb(F,ue,e,se),Wt=new fA(F,ue),me.reverseDepthBuffer&&x&&Wt.buffers.depth.setReversed(!0),De=new Ob(F),Xt=new J1,U=new hA(F,ue,Wt,Xt,me,se,De),T=new Rb(D),et=new Db(D),ht=new GM(F),Oe=new Eb(F,ht),Mt=new Lb(F,ht,De,Oe),mt=new zb(F,Mt,ht,De),kt=new Pb(F,me,U),At=new Ab(Xt),Vt=new Q1(D,T,et,ue,me,Oe,At),wt=new xA(D,Xt),Bt=new tA,_e=new rA(ue),qt=new Mb(D,T,et,Wt,mt,y,m),It=new cA(D,mt,me),X=new yA(F,De,me,Wt),Ot=new Tb(F,ue,De),Qt=new Nb(F,ue,De),De.programs=Vt.programs,D.capabilities=me,D.extensions=ue,D.properties=Xt,D.renderLists=Bt,D.shadowMap=It,D.state=Wt,D.info=De}Rt();const lt=new vA(D,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(P,Q,!1))},this.getSize=function(A){return A.set(P,Q)},this.setSize=function(A,W,nt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Q=W,i.width=Math.floor(A*Z),i.height=Math.floor(W*Z),nt===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(P*Z,Q*Z).floor()},this.setDrawingBufferSize=function(A,W,nt){P=A,Q=W,Z=nt,i.width=Math.floor(A*nt),i.height=Math.floor(W*nt),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,W,nt,rt){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,W,nt,rt),Wt.viewport(I.copy(L).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,W,nt,rt){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,W,nt,rt),Wt.scissor(it.copy(st).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Wt.setScissorTest(St=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(A=!0,W=!0,nt=!0){let rt=0;if(A){let k=!1;if(V!==null){const Tt=V.texture.format;k=Tt===Od||Tt===Nd||Tt===Ld}if(k){const Tt=V.texture.type,Ut=Tt===da||Tt===bs||Tt===Vo||Tt===Lr||Tt===Dd||Tt===Ud,Nt=qt.getClearColor(),Pt=qt.getClearAlpha(),$t=Nt.r,te=Nt.g,Yt=Nt.b;Ut?(b[0]=$t,b[1]=te,b[2]=Yt,b[3]=Pt,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=$t,C[1]=te,C[2]=Yt,C[3]=Pt,F.clearBufferiv(F.COLOR,0,C))}else rt|=F.COLOR_BUFFER_BIT}W&&(rt|=F.DEPTH_BUFFER_BIT),nt&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),Bt.dispose(),_e.dispose(),Xt.dispose(),T.dispose(),et.dispose(),mt.dispose(),Oe.dispose(),X.dispose(),Vt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Ir),lt.removeEventListener("sessionend",Fr),Ci.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=De.autoReset,W=It.enabled,nt=It.autoUpdate,rt=It.needsUpdate,k=It.type;Rt(),De.autoReset=A,It.enabled=W,It.autoUpdate=nt,It.needsUpdate=rt,It.type=k}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const W=A.target;W.removeEventListener("dispose",Jt),Ye(W)}function Ye(A){ln(A),Xt.remove(A)}function ln(A){const W=Xt.get(A).programs;W!==void 0&&(W.forEach(function(nt){Vt.releaseProgram(nt)}),A.isShaderMaterial&&Vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,nt,rt,k,Tt){W===null&&(W=Ne);const Ut=k.isMesh&&k.matrixWorld.determinant()<0,Nt=Gr(A,W,nt,rt,k);Wt.setMaterial(rt,Ut);let Pt=nt.index,$t=1;if(rt.wireframe===!0){if(Pt=Mt.getWireframeAttribute(nt),Pt===void 0)return;$t=2}const te=nt.drawRange,Yt=nt.attributes.position;let Se=te.start*$t,xe=(te.start+te.count)*$t;Tt!==null&&(Se=Math.max(Se,Tt.start*$t),xe=Math.min(xe,(Tt.start+Tt.count)*$t)),Pt!==null?(Se=Math.max(Se,0),xe=Math.min(xe,Pt.count)):Yt!=null&&(Se=Math.max(Se,0),xe=Math.min(xe,Yt.count));const ke=xe-Se;if(ke<0||ke===1/0)return;Oe.setup(k,rt,Nt,nt,Pt);let be,ee=Ot;if(Pt!==null&&(be=ht.get(Pt),ee=Qt,ee.setIndex(be)),k.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*qe()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(k.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),Wt.setLineWidth(Zt*qe()),k.isLineSegments?ee.setMode(F.LINES):k.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else k.isPoints?ee.setMode(F.POINTS):k.isSprite&&ee.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ee.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Zt=k._multiDrawStarts,cn=k._multiDrawCounts,Ee=k._multiDrawCount,zn=Pt?ht.get(Pt).bytesPerElement:1,vi=Xt.get(rt).currentProgram.getUniforms();for(let Un=0;Un<Ee;Un++)vi.setValue(F,"_gl_DrawID",Un),ee.render(Zt[Un]/zn,cn[Un])}else if(k.isInstancedMesh)ee.renderInstances(Se,ke,k.count);else if(nt.isInstancedBufferGeometry){const Zt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,cn=Math.min(nt.instanceCount,Zt);ee.renderInstances(Se,ke,cn)}else ee.render(Se,ke)};function Te(A,W,nt){A.transparent===!0&&A.side===ca&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Ke(A,W,nt),A.side=Ya,A.needsUpdate=!0,Ke(A,W,nt),A.side=ca):Ke(A,W,nt)}this.compile=function(A,W,nt=null){nt===null&&(nt=A),g=_e.get(nt),g.init(W),N.push(g),nt.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),A!==nt&&A.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const rt=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Tt=k.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Nt=Tt[Ut];Te(Nt,nt,k),rt.add(Nt)}else Te(Tt,nt,k),rt.add(Tt)}),N.pop(),g=null,rt},this.compileAsync=function(A,W,nt=null){const rt=this.compile(A,W,nt);return new Promise(k=>{function Tt(){if(rt.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){k(A);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let gn=null;function _i(A){gn&&gn(A)}function Ir(){Ci.stop()}function Fr(){Ci.start()}const Ci=new dv;Ci.setAnimationLoop(_i),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){gn=A,lt.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},lt.addEventListener("sessionstart",Ir),lt.addEventListener("sessionend",Fr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(W),W=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,W,V),g=_e.get(A,N.length),g.init(W),N.push(g),Ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(Ht),Et=this.localClippingEnabled,ft=At.init(this.clippingPlanes,Et),M=Bt.get(A,B.length),M.init(),B.push(M),lt.enabled===!0&&lt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Za(Tt,W,-1/0,D.sortObjects)}Za(A,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(yt,bt),fe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,fe&&qt.addToRenderList(M,A),this.info.render.frame++,ft===!0&&At.beginShadows();const nt=g.state.shadowsArray;It.render(nt,A,W),ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,k=M.transmissive;if(g.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(k.length>0)for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const Pt=Tt[Ut];Hr(rt,k,A,Pt)}fe&&qt.render(A);for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const Pt=Tt[Ut];ws(M,A,Pt,Pt.viewport)}}else k.length>0&&Hr(rt,k,A,W),fe&&qt.render(A),ws(M,A,W);V!==null&&O===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(D,A,W),Oe.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(g=N[N.length-1],ft===!0&&At.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Za(A,W,nt,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)nt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){rt&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const Ut=mt.update(A),Nt=A.material;Nt.visible&&M.push(A,Ut,Nt,nt,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Ut=mt.update(A),Nt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ie.copy(Ut.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(Nt)){const Pt=Ut.groups;for(let $t=0,te=Pt.length;$t<te;$t++){const Yt=Pt[$t],Se=Nt[Yt.materialIndex];Se&&Se.visible&&M.push(A,Ut,Se,nt,ie.z,Yt)}}else Nt.visible&&M.push(A,Ut,Nt,nt,ie.z,null)}}const Tt=A.children;for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++)Za(Tt[Ut],W,nt,rt)}function ws(A,W,nt,rt){const k=A.opaque,Tt=A.transmissive,Ut=A.transparent;g.setupLightsView(nt),ft===!0&&At.setGlobalState(D.clippingPlanes,nt),rt&&Wt.viewport(I.copy(rt)),k.length>0&&Ka(k,W,nt),Tt.length>0&&Ka(Tt,W,nt),Ut.length>0&&Ka(Ut,W,nt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Hr(A,W,nt,rt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[rt.id]===void 0&&(g.state.transmissionRenderTarget[rt.id]=new As(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ko:da,minFilter:Ts,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||I;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(ut),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),fe&&qt.render(nt);const Pt=D.toneMapping;D.toneMapping=qa;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),g.setupLightsView(rt),ft===!0&&At.setGlobalState(D.clippingPlanes,rt),Ka(A,nt,rt),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,Se=W.length;Yt<Se;Yt++){const xe=W[Yt],ke=xe.object,be=xe.geometry,ee=xe.material,Zt=xe.group;if(ee.side===ca&&ke.layers.test(rt.layers)){const cn=ee.side;ee.side=qn,ee.needsUpdate=!0,gi(ke,nt,rt,be,ee,Zt),ee.side=cn,ee.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(ut,pt),$t!==void 0&&(rt.viewport=$t),D.toneMapping=Pt}function Ka(A,W,nt){const rt=W.isScene===!0?W.overrideMaterial:null;for(let k=0,Tt=A.length;k<Tt;k++){const Ut=A[k],Nt=Ut.object,Pt=Ut.geometry,$t=rt===null?Ut.material:rt,te=Ut.group;Nt.layers.test(nt.layers)&&gi(Nt,W,nt,Pt,$t,te)}}function gi(A,W,nt,rt,k,Tt){A.onBeforeRender(D,W,nt,rt,k,Tt),A.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(D,W,nt,rt,A,Tt),k.transparent===!0&&k.side===ca&&k.forceSinglePass===!1?(k.side=qn,k.needsUpdate=!0,D.renderBufferDirect(nt,W,rt,k,A,Tt),k.side=Ya,k.needsUpdate=!0,D.renderBufferDirect(nt,W,rt,k,A,Tt),k.side=ca):D.renderBufferDirect(nt,W,rt,k,A,Tt),A.onAfterRender(D,W,nt,rt,k,Tt)}function Ke(A,W,nt){W.isScene!==!0&&(W=Ne);const rt=Xt.get(A),k=g.state.lights,Tt=g.state.shadowsArray,Ut=k.state.version,Nt=Vt.getParameters(A,k.state,Tt,W,nt),Pt=Vt.getProgramCacheKey(Nt);let $t=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,rt.programs=$t);let te=$t.get(Pt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return Fi(A,Nt),te}else Nt.uniforms=Vt.getUniforms(A),A.onBeforeCompile(Nt,D),te=Vt.acquireProgram(Nt,Pt),$t.set(Pt,te),rt.uniforms=Nt.uniforms;const Yt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=At.uniform),Fi(A,Nt),rt.needsLights=Wc(A),rt.lightsStateVersion=Ut,rt.needsLights&&(Yt.ambientLightColor.value=k.state.ambient,Yt.lightProbe.value=k.state.probe,Yt.directionalLights.value=k.state.directional,Yt.directionalLightShadows.value=k.state.directionalShadow,Yt.spotLights.value=k.state.spot,Yt.spotLightShadows.value=k.state.spotShadow,Yt.rectAreaLights.value=k.state.rectArea,Yt.ltc_1.value=k.state.rectAreaLTC1,Yt.ltc_2.value=k.state.rectAreaLTC2,Yt.pointLights.value=k.state.point,Yt.pointLightShadows.value=k.state.pointShadow,Yt.hemisphereLights.value=k.state.hemi,Yt.directionalShadowMap.value=k.state.directionalShadowMap,Yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Yt.spotShadowMap.value=k.state.spotShadowMap,Yt.spotLightMatrix.value=k.state.spotLightMatrix,Yt.spotLightMap.value=k.state.spotLightMap,Yt.pointShadowMap.value=k.state.pointShadowMap,Yt.pointShadowMatrix.value=k.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function vn(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Fi(A,W){const nt=Xt.get(A);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function Gr(A,W,nt,rt,k){W.isScene!==!0&&(W=Ne),U.resetTextureUnits();const Tt=W.fog,Ut=rt.isMeshStandardMaterial?W.environment:null,Nt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Or,Pt=(rt.isMeshStandardMaterial?et:T).get(rt.envMap||Ut),$t=rt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,te=!!nt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!nt.morphAttributes.position,Se=!!nt.morphAttributes.normal,xe=!!nt.morphAttributes.color;let ke=qa;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ke=D.toneMapping);const be=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ee=be!==void 0?be.length:0,Zt=Xt.get(rt),cn=g.state.lights;if(ft===!0&&(Et===!0||A!==R)){const Qe=A===R&&rt.id===w;At.setState(rt,A,Qe)}let Ee=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==cn.state.version||Zt.outputColorSpace!==Nt||k.isBatchedMesh&&Zt.batching===!1||!k.isBatchedMesh&&Zt.batching===!0||k.isBatchedMesh&&Zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Zt.instancing===!1||!k.isInstancedMesh&&Zt.instancing===!0||k.isSkinnedMesh&&Zt.skinning===!1||!k.isSkinnedMesh&&Zt.skinning===!0||k.isInstancedMesh&&Zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Zt.instancingMorph===!1&&k.morphTexture!==null||Zt.envMap!==Pt||rt.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==te||Zt.morphTargets!==Yt||Zt.morphNormals!==Se||Zt.morphColors!==xe||Zt.toneMapping!==ke||Zt.morphTargetsCount!==ee)&&(Ee=!0):(Ee=!0,Zt.__version=rt.version);let zn=Zt.currentProgram;Ee===!0&&(zn=Ke(rt,W,k));let vi=!1,Un=!1,pn=!1;const Pe=zn.getUniforms(),Ln=Zt.uniforms;if(Wt.useProgram(zn.program)&&(vi=!0,Un=!0,pn=!0),rt.id!==w&&(w=rt.id,Un=!0),vi||R!==A){Wt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),eM(vt),nM(vt),Pe.setValue(F,"projectionMatrix",vt)):Pe.setValue(F,"projectionMatrix",A.projectionMatrix),Pe.setValue(F,"viewMatrix",A.matrixWorldInverse);const Sn=Pe.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,zt.setFromMatrixPosition(A.matrixWorld)),me.logarithmicDepthBuffer&&Pe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Pe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Un=!0,pn=!0)}if(k.isSkinnedMesh){Pe.setOptional(F,k,"bindMatrix"),Pe.setOptional(F,k,"bindMatrixInverse");const Qe=k.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Pe.setValue(F,"boneTexture",Qe.boneTexture,U))}k.isBatchedMesh&&(Pe.setOptional(F,k,"batchingTexture"),Pe.setValue(F,"batchingTexture",k._matricesTexture,U),Pe.setOptional(F,k,"batchingIdTexture"),Pe.setValue(F,"batchingIdTexture",k._indirectTexture,U),Pe.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Pe.setValue(F,"batchingColorTexture",k._colorsTexture,U));const Rn=nt.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&kt.update(k,nt,zn),(Un||Zt.receiveShadow!==k.receiveShadow)&&(Zt.receiveShadow=k.receiveShadow,Pe.setValue(F,"receiveShadow",k.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Ln.envMapIntensity.value=W.environmentIntensity),Un&&(Pe.setValue(F,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Xc(Ln,pn),Tt&&rt.fog===!0&&wt.refreshFogUniforms(Ln,Tt),wt.refreshMaterialUniforms(Ln,rt,Z,Q,g.state.transmissionRenderTarget[A.id]),Nc.upload(F,vn(Zt),Ln,U)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Nc.upload(F,vn(Zt),Ln,U),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Pe.setValue(F,"center",k.center),Pe.setValue(F,"modelViewMatrix",k.modelViewMatrix),Pe.setValue(F,"normalMatrix",k.normalMatrix),Pe.setValue(F,"modelMatrix",k.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Qe=rt.uniformsGroups;for(let Sn=0,Ds=Qe.length;Sn<Ds;Sn++){const Bn=Qe[Sn];X.update(Bn,zn),X.bind(Bn,zn)}}return zn}function Xc(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Wc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,W,nt){Xt.get(A.texture).__webglTexture=W,Xt.get(A.depthTexture).__webglTexture=nt;const rt=Xt.get(A);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=nt===void 0,rt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const nt=Xt.get(A);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0};const qo=F.createFramebuffer();this.setRenderTarget=function(A,W=0,nt=0){V=A,H=W,O=nt;let rt=!0,k=null,Tt=!1,Ut=!1;if(A){const Pt=Xt.get(A);if(Pt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Pt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Pt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Pt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const te=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?k=te[W][nt]:k=te[W],Tt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?k=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?k=te[nt]:k=te,I.copy(A.viewport),it.copy(A.scissor),at=A.scissorTest}else I.copy(L).multiplyScalar(Z).floor(),it.copy(st).multiplyScalar(Z).floor(),at=St;if(nt!==0&&(k=qo),Wt.bindFramebuffer(F.FRAMEBUFFER,k)&&rt&&Wt.drawBuffers(A,k),Wt.viewport(I),Wt.scissor(it),Wt.setScissorTest(at),Tt){const Pt=Xt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,nt)}else if(Ut){const Pt=Xt.get(A.texture),$t=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,nt,$t)}else if(A!==null&&nt!==0){const Pt=Xt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,nt)}w=-1},this.readRenderTargetPixels=function(A,W,nt,rt,k,Tt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Wt.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const Pt=A.texture,$t=Pt.format,te=Pt.type;if(!me.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&nt>=0&&nt<=A.height-k&&F.readPixels(W,nt,rt,k,se.convert($t),se.convert(te),Tt)}finally{const Pt=V!==null?Xt.get(V).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,W,nt,rt,k,Tt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){const Pt=A.texture,$t=Pt.format,te=Pt.type;if(!me.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-rt&&nt>=0&&nt<=A.height-k){Wt.bindFramebuffer(F.FRAMEBUFFER,Nt);const Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(W,nt,rt,k,se.convert($t),se.convert(te),0);const Se=V!==null?Xt.get(V).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,Se);const xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tM(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Yt),F.deleteSync(xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,nt=0){A.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const rt=Math.pow(2,-nt),k=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Ut=W!==null?W.x:0,Nt=W!==null?W.y:0;U.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,Ut,Nt,k,Tt),Wt.unbindTexture()};const Qa=F.createFramebuffer(),Vr=F.createFramebuffer();this.copyTextureToTexture=function(A,W,nt=null,rt=null,k=0,Tt=null){A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,A=arguments[1],W=arguments[2],Tt=arguments[3]||0,nt=null),Tt===null&&(k!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=k,k=0):Tt=0);let Ut,Nt,Pt,$t,te,Yt,Se,xe,ke;const be=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(nt!==null)Ut=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,Pt=nt.isBox3?nt.max.z-nt.min.z:1,$t=nt.min.x,te=nt.min.y,Yt=nt.isBox3?nt.min.z:0;else{const Rn=Math.pow(2,-k);Ut=Math.floor(be.width*Rn),Nt=Math.floor(be.height*Rn),A.isDataArrayTexture?Pt=be.depth:A.isData3DTexture?Pt=Math.floor(be.depth*Rn):Pt=1,$t=0,te=0,Yt=0}rt!==null?(Se=rt.x,xe=rt.y,ke=rt.z):(Se=0,xe=0,ke=0);const ee=se.convert(W.format),Zt=se.convert(W.type);let cn;W.isData3DTexture?(U.setTexture3D(W,0),cn=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),cn=F.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),cn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),zn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),Un=F.getParameter(F.UNPACK_SKIP_ROWS),pn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const Pe=A.isDataArrayTexture||A.isData3DTexture,Ln=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Rn=Xt.get(A),Qe=Xt.get(W),Sn=Xt.get(Rn.__renderTarget),Ds=Xt.get(Qe.__renderTarget);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Bn=0;Bn<Pt;Bn++)Pe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,k,Yt+Bn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(W).__webglTexture,Tt,ke+Bn)),F.blitFramebuffer($t,te,Ut,Nt,Se,xe,Ut,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||Xt.has(A)){const Rn=Xt.get(A),Qe=Xt.get(W);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Qa),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vr);for(let Sn=0;Sn<Pt;Sn++)Pe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rn.__webglTexture,k,Yt+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rn.__webglTexture,k),Ln?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,Tt),k!==0?F.blitFramebuffer($t,te,Ut,Nt,Se,xe,Ut,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):Ln?F.copyTexSubImage3D(cn,Tt,Se,xe,ke+Sn,$t,te,Ut,Nt):F.copyTexSubImage2D(cn,Tt,Se,xe,$t,te,Ut,Nt);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(cn,Tt,Se,xe,ke,Ut,Nt,Pt,ee,Zt,be.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(cn,Tt,Se,xe,ke,Ut,Nt,Pt,ee,be.data):F.texSubImage3D(cn,Tt,Se,xe,ke,Ut,Nt,Pt,ee,Zt,be):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,Se,xe,Ut,Nt,ee,Zt,be.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,Se,xe,be.width,be.height,ee,be.data):F.texSubImage2D(F.TEXTURE_2D,Tt,Se,xe,Ut,Nt,ee,Zt,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pn),Tt===0&&W.generateMipmaps&&F.generateMipmap(cn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,nt=null,rt=null,k=0){return A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,rt=arguments[1]||null,A=arguments[2],W=arguments[3],k=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,nt,rt,k)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){H=0,O=0,V=null,Wt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const N0={type:"change"},Fd={type:"start"},vv={type:"end"},Ac=new Pd,O0=new ka,EA=Math.cos(70*Jy.DEG2RAD),fn=new K,Wn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bh=1e-6;class TA extends FM{constructor(e,i=null){super(e,i),this.state=He.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Rs,this._lastTargetPosition=new K,this._quat=new Rs().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new o0,this._sphericalDelta=new o0,this._scale=1,this._panOffset=new K,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new K,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AA.bind(this),this._onPointerDown=bA.bind(this),this._onPointerUp=RA.bind(this),this._onContextMenu=OA.bind(this),this._onMouseWheel=DA.bind(this),this._onKeyDown=UA.bind(this),this._onTouchStart=LA.bind(this),this._onTouchMove=NA.bind(this),this._onMouseDown=CA.bind(this),this._onMouseMove=wA.bind(this),this._interceptControlDown=PA.bind(this),this._interceptControlUp=zA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(N0),this.update(),this.state=He.NONE}update(e=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<EA?this.object.lookAt(this.target):(O0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(O0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bh||this._lastTargetPosition.distanceToSquared(this.target)>Bh?(this.dispatchEvent(N0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),u=.5*(e.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ae,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function bA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function AA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function RA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vv),this.state=He.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function CA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=He.DOLLY;break;case br.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}break;case br.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Fd)}function wA(o){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function DA(o){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(o.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(vv))}function UA(o){this.enabled!==!1&&this._handleKeyDown(o)}function LA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=He.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=He.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Fd)}function NA(o){switch(this._trackPointer(o),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=He.NONE}}function OA(o){this.enabled!==!1&&o.preventDefault()}function PA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BA({parameters:o}){const e=Pn.useRef(null),i=Pn.useRef(null);return Pn.useEffect(()=>{if(!e.current)return;const s=e.current,l=s.clientWidth,u=s.clientHeight,h=new bM;h.background=new Me(986906);const d=new ai(45,l/u,.1,1e3);d.position.set(150,150,150),d.lookAt(0,0,0);const m=new MA({antialias:!0});m.setSize(l,u),m.shadowMap.enabled=!0,m.shadowMap.type=B0,s.appendChild(m.domElement);const p=new TA(d,m.domElement);p.enableDamping=!0,p.dampingFactor=.05,p.minDistance=50,p.maxDistance=500;const v=new zM(16777215,.4);h.add(v);const S=new PM(16777215,.8);S.position.set(100,200,100),S.castShadow=!0,S.shadow.mapSize.width=2048,S.shadow.mapSize.height=2048,h.add(S);const x=new NM(15287648,.5);x.position.set(-100,100,-100),h.add(x);const y=new IM(500,50,3355443,2236962);h.add(y);const b=new Ho;h.add(b);const C=()=>{requestAnimationFrame(C),p.update(),m.render(h,d)};i.current={scene:h,camera:d,renderer:m,controls:p,mesh:b},C();const M=()=>{if(!e.current||!i.current)return;const g=e.current.clientWidth,B=e.current.clientHeight;i.current.camera.aspect=g/B,i.current.camera.updateProjectionMatrix(),i.current.renderer.setSize(g,B)};return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),i.current&&(i.current.controls.dispose(),i.current.renderer.dispose(),s.removeChild(m.domElement))}},[]),Pn.useEffect(()=>{if(!i.current)return;const{mesh:s}=i.current;for(;s.children.length>0;){const V=s.children[0];V instanceof Tn&&(V.geometry.dispose(),Array.isArray(V.material)?V.material.forEach(w=>w.dispose()):V.material.dispose()),s.remove(V)}const l=new Rh({color:3900150,metalness:.3,roughness:.4}),{width:u,height:h,depth:d,wallThickness:m,hasVentilation:p,hasMountingHoles:v}=o,S=u/2,x=h/2,y=m,b=new Oi(u,y,d),C=new Tn(b,l);C.position.y=-x+y/2,C.castShadow=!0,C.receiveShadow=!0,s.add(C);const M=new Oi(u,h-y,y),g=new Tn(M,l);g.position.set(0,y/2,x-y/2),g.castShadow=!0,s.add(g);const B=new Oi(u,h-y,y),N=new Tn(B,l);N.position.set(0,y/2,-x+y/2),N.castShadow=!0,s.add(N);const D=new Oi(y,h-y,d-2*y),q=new Tn(D,l);q.position.set(-S+y/2,y/2,0),q.castShadow=!0,s.add(q);const H=new Oi(y,h-y,d-2*y),O=new Tn(H,l);if(O.position.set(S-y/2,y/2,0),O.castShadow=!0,s.add(O),p){const V=new Fc(3,3,y+1,16),w=new Rh({color:986906});for(let R=-2;R<=2;R++)for(let I=-1;I<=1;I++){const it=new Tn(V,w);it.rotation.x=Math.PI/2,it.position.set(R*12,y/2+I*12,x),s.add(it)}}if(v){const V=new Fc(2,2,y+1,16),w=new Rh({color:986906}),R=5;[[-S+R,-x+R],[S-R,-x+R],[-S+R,x-R],[S-R,x-R]].forEach(([it,at])=>{const ut=new Tn(V,w);ut.position.set(it,-x,at),s.add(ut)})}s.position.y=5},[o]),xt.jsxs("div",{className:"model-viewer",children:[xt.jsxs("div",{className:"viewer-header",children:[xt.jsx("h3",{children:"3D Предпросмотр"}),xt.jsx("div",{className:"viewer-controls",children:xt.jsx("span",{className:"viewer-hint",children:"🖱️ Вращение мышкой"})})]}),xt.jsx("div",{ref:e,className:"viewer-canvas"})]})}function IA(){const[o,e]=Pn.useState(!0),[i,s]=Pn.useState(Ih[0]),[l,u]=Pn.useState(Ih[0].defaultParams),h=d=>{s(d),u(d.defaultParams)};return xt.jsxs("div",{className:"app",children:[xt.jsx(ly,{isOpen:o,onToggle:()=>e(!o)}),xt.jsx("main",{className:`main-content ${o?"sidebar-open":"sidebar-closed"}`,children:xt.jsxs("div",{className:"content-wrapper",children:[xt.jsxs("div",{className:"controls-panel",children:[xt.jsxs("header",{className:"panel-header",children:[xt.jsx("h1",{children:"Генератор корпусов"}),xt.jsx("p",{className:"subtitle",children:"Создавайте 3D модели для печати за секунды"})]}),xt.jsx(cy,{selectedModel:i,onSelectModel:h}),i&&xt.jsx(uy,{parameters:l,onChange:u}),xt.jsxs("div",{className:"action-buttons",children:[xt.jsx("button",{className:"btn btn-primary",children:"Скачать STL"}),xt.jsx("button",{className:"btn btn-secondary",children:"Сбросить параметры"})]})]}),xt.jsx("div",{className:"viewer-panel",children:xt.jsx(BA,{parameters:l})})]})})]})}Nx.createRoot(document.getElementById("root")).render(xt.jsx(Pn.StrictMode,{children:xt.jsx(IA,{})}));
