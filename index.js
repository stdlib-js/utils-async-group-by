// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).groupByAsync={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&f&&f.call(t,r,e.set),t};var a=e;function s(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&m.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(t){var r,e,n;if(null==t)return g.call(t);e=t[h],r=d(t,h);try{t[h]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[h]=e:delete t[h],n}:function(t){return g.call(t)},w=Boolean.prototype.toString;var _=v();function O(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return y(t)||O(t)}function E(){return new Function("return this;")()}s(S,"isPrimitive",y),s(S,"isObject",O);var T="object"==typeof self?self:null,P="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof A?A:null;var N=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(P)return P;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),B=N.document&&N.document.childNodes,V=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;s(x,"REGEXP",F);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function k(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(k));var M="function"==typeof p||"object"==typeof V||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===M(t)}var R=Math.floor;function U(t){return R(t)===t}function Y(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function J(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var X=Number.POSITIVE_INFINITY;var q,z=Object.getPrototypeOf;q=L(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var H=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&d(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===H||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function Q(t){return"number"==typeof t}var W=Number,Z=W.prototype.toString;var $=v();function tt(t){return"object"==typeof t&&(t instanceof W||($?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function rt(t){return Q(t)||tt(t)}s(rt,"isPrimitive",Q),s(rt,"isObject",tt);var et=W.NEGATIVE_INFINITY;function nt(t){return t<X&&t>et&&U(t)}function ot(t){return Q(t)&&nt(t)}function it(t){return tt(t)&&nt(t.valueOf())}function ut(t){return ot(t)||it(t)}function ft(t){return ot(t)&&t>0}function ct(t){return it(t)&&t.valueOf()>0}function lt(t){return ft(t)||ct(t)}function at(t){return t!=t}function st(t){return Q(t)&&at(t)}function pt(t){return tt(t)&&at(t.valueOf())}function yt(t){return st(t)||pt(t)}function bt(t){return"string"==typeof t}s(ut,"isPrimitive",ot),s(ut,"isObject",it),s(lt,"isPrimitive",ft),s(lt,"isObject",ct),s(yt,"isPrimitive",st),s(yt,"isObject",pt);var vt=String.prototype.valueOf;var gt=v();function mt(t){return"object"==typeof t&&(t instanceof String||(gt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function dt(t){return bt(t)||mt(t)}s(dt,"isPrimitive",bt),s(dt,"isObject",mt);var ht=["values","indices","*"];function jt(t,r){return K(r)?(d(r,"thisArg")&&(t.thisArg=r.thisArg),d(r,"series")&&(t.series=r.series,!y(t.series))?new TypeError(J("0iS30","series",t.series)):d(r,"limit")&&(t.limit=r.limit,!ft(t.limit))?new TypeError(J("0iS3b","limit",t.limit)):d(r,"returns")&&(t.returns=r.returns,-1===function(t,r,e){var n,o;if(!Y(t)&&!bt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!ot(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(yt(r)){for(;o<n;o++)if(yt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}(ht,t.returns))?new TypeError(J("0iS3t","returns",ht.join('", "'),t.returns)):null):new TypeError(J("0iS2h",r))}var wt=()=>{};function _t(t,r,e,n){var o,i,u,f,c,l,a,s;if(c=t.length,a={},0===c)return n(null,a);for(f=c<r.limit?c:r.limit,wt("Number of arguments: %d",e.length),o=c-1,i=0,l=-1,s=0;s<f;s++)l<o&&p();function p(){var n,o;function i(t,e){if(!u){if(t)return u=!0,y(t);"indices"===r.returns?d(a,e)?a[e].push(o):a[e]=[o]:"*"===r.returns?d(a,e)?a[e].push([o,n]):a[e]=[[o,n]]:d(a,e)?a[e].push(n):a[e]=[n],y()}}n=t[o=l+=1],wt("Collection element %d: %s.",o,JSON.stringify(n)),2===e.length?e.call(r.thisArg,n,i):3===e.length?e.call(r.thisArg,n,o,i):e.call(r.thisArg,n,o,t,i)}function y(t){return t?(wt("Encountered an error: %s",t.message),n(t)):(i+=1,l<o?p():i===c?n(null,a):void 0)}}function Ot(t,r){var e,n,o;if(e={},arguments.length>1){if(n=jt(e,t))throw n;o=r}else o=t;if(!L(o))throw new TypeError(J("0iS43",o));return e.series?e.limit=1:e.limit||(e.limit=X),i;function i(t,r){if(!Y(t))throw new TypeError(J("0iSBO",t));if(!L(r))throw new TypeError(J("0iS43",r));return _t(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function St(t,r,e,n){if(arguments.length<4)return Ot(r)(t,e);Ot(r,e)(t,n)}s(St,"factory",Ot),t.default=St,t.factory=Ot,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
