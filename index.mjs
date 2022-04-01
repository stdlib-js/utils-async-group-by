// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";function c(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var m=o,f=s,d=l.isPrimitive,p=u.isPrimitive,h=a,g=n,v=["values","indices","*"];var w=function(e,t){return m(t)?(f(t,"thisArg")&&(e.thisArg=t.thisArg),f(t,"series")&&(e.series=t.series,!d(e.series))?new TypeError(g("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):f(t,"limit")&&(e.limit=t.limit,!p(e.limit))?new TypeError(g("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):f(t,"returns")&&(e.returns=t.returns,-1===h(v,e.returns))?new TypeError(g('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",v.join('", "'),e.returns)):null):new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",t))},b="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function j(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}var T=j,x=y;function E(e){if(T===setTimeout)return setTimeout(e,0);if((T===j||!T)&&setTimeout)return T=setTimeout,setTimeout(e,0);try{return T(e,0)}catch(t){try{return T.call(null,e,0)}catch(t){return T.call(this,e,0)}}}"function"==typeof b.setTimeout&&(T=setTimeout),"function"==typeof b.clearTimeout&&(x=clearTimeout);var O,A=[],_=!1,N=-1;function P(){_&&O&&(_=!1,O.length?A=O.concat(A):N=-1,A.length&&L())}function L(){if(!_){var e=E(P);_=!0;for(var t=A.length;t;){for(O=A,A=[];++N<t;)O&&O[N].run();N=-1,t=A.length}O=null,_=!1,function(e){if(x===clearTimeout)return clearTimeout(e);if((x===y||!x)&&clearTimeout)return x=clearTimeout,clearTimeout(e);try{x(e)}catch(t){try{return x.call(null,e)}catch(t){return x.call(this,e)}}}(e)}}function k(e,t){this.fun=e,this.array=t}k.prototype.run=function(){this.fun.apply(null,this.array)};function C(){}var D=C,M=C,V=C,F=C,q=C,z=C,J=C;var S=b.performance||{},B=S.now||S.mozNow||S.msNow||S.oNow||S.webkitNow||function(){return(new Date).getTime()};var G=new Date;var H={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];A.push(new k(e,t)),1!==A.length||_||E(L)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:D,addListener:M,once:V,off:F,removeListener:q,removeAllListeners:z,emit:J,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*B.call(S),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-G)/1e3}};module.exports=void 0!==H&&"renderer"===H.type?require("./browser.js"):require("./node.js");var I=s,K=c(Object.freeze({__proto__:null}))("group-by-async:limit");var Q=t,R=r,U=n,W=i,X=w,Y=function(e,t,r,n){var i,o,s,l,u,a,c,m;if(u=e.length,K("Collection length: %d",u),c={},0===u)return K("Finished processing a collection."),n(null,c);for(l=u<t.limit?u:t.limit,K("Concurrency limit: %d",l),K("Number of arguments: %d",r.length),i=u-1,o=0,a=-1,m=0;m<l;m++)a<i&&f();function f(){var n,i;function o(e,r){if(!s){if(e)return s=!0,d(e);K("Collection element %d group: %s.",i,r),"indices"===t.returns?I(c,r)?c[r].push(i):c[r]=[i]:"*"===t.returns?I(c,r)?c[r].push([i,n]):c[r]=[[i,n]]:I(c,r)?c[r].push(n):c[r]=[n],d()}}n=e[i=a+=1],K("Collection element %d: %s.",i,JSON.stringify(n)),2===r.length?r.call(t.thisArg,n,o):3===r.length?r.call(t.thisArg,n,i,o):r.call(t.thisArg,n,i,e,o)}function d(e){return e?(K("Encountered an error: %s",e.message),n(e)):(K("Processed %d of %d collection elements.",o+=1,u),a<i?f():o===u?(K("Finished processing a collection."),n(null,c)):void 0)}};var Z=function(e,t){var r,n,i;if(r={},arguments.length>1){if(n=X(r,e))throw n;i=t}else i=e;if(!Q(i))throw new TypeError(U("invalid argument. Last argument must be a function. Value: `%s`.",i));return r.series?r.limit=1:r.limit||(r.limit=W),o;function o(e,t){if(!R(e))throw new TypeError(U("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!Q(t))throw new TypeError(U("invalid argument. Last argument must be a function. Value: `%s`.",t));return Y(e,r,i,(function(e,r){if(e)return t(e);t(null,r)}))}},$=Z;var ee=function(e,t,r,n){if(arguments.length<4)return $(t)(e,r);$(t,r)(e,n)},te=Z;e(ee,"factory",te);var re=ee;export{re as default,te as factory};
//# sourceMappingURL=index.mjs.map
