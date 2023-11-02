// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).groupByAsync=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,T=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,o,a,l,s,f,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(c(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function V(r){var e,t,n;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,R=Object.prototype,C=R.toString,N=R.__defineGetter__,D=R.__defineSetter__,$=R.__lookupGetter__,G=R.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&D&&D.call(r,e,t.set),r};var B=I;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function Z(r){return"boolean"==typeof r}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return J&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"";var H=U()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[Y],e=q(r,Y);try{r[Y]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return W.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=U();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function tr(r){return Z(r)||er(r)}function nr(){return new Function("return this;")()}L(tr,"isPrimitive",Z),L(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!Z(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=cr.document&&cr.document.childNodes,sr=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;L(fr,"REGEXP",pr);var gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var hr="function"==typeof M||"object"==typeof sr||"function"==typeof lr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"function"===hr(r)}var vr=Math.floor;function mr(r){return vr(r)===r}function wr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=9007199254740991}function jr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var _r=Number.POSITIVE_INFINITY;var Er,Or=Object,Tr=Object.getPrototypeOf;Er=br(Object.getPrototypeOf)?Tr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=Er;var Ar=Object.prototype;function Pr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=Or(r),Sr(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&br(e.constructor)&&"[object Function]"===H(e.constructor)&&q(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===Ar||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function kr(r){return"number"==typeof r}var xr=Number,Fr=xr.prototype.toString;var Vr=U();function Ir(r){return"object"==typeof r&&(r instanceof xr||(Vr?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Rr(r){return kr(r)||Ir(r)}L(Rr,"isPrimitive",kr),L(Rr,"isObject",Ir);var Cr=xr.NEGATIVE_INFINITY;function Nr(r){return r<_r&&r>Cr&&mr(r)}function Dr(r){return kr(r)&&Nr(r)}function $r(r){return Ir(r)&&Nr(r.valueOf())}function Gr(r){return Dr(r)||$r(r)}function Br(r){return Dr(r)&&r>0}function Lr(r){return $r(r)&&r.valueOf()>0}function Mr(r){return Br(r)||Lr(r)}function Zr(r){return r!=r}function Jr(r){return kr(r)&&Zr(r)}function Ur(r){return Ir(r)&&Zr(r.valueOf())}function Wr(r){return Jr(r)||Ur(r)}function Xr(r){return"string"==typeof r}L(Gr,"isPrimitive",Dr),L(Gr,"isObject",$r),L(Mr,"isPrimitive",Br),L(Mr,"isObject",Lr),L(Wr,"isPrimitive",Jr),L(Wr,"isObject",Ur);var qr=String.prototype.valueOf;var zr=U();function Yr(r){return"object"==typeof r&&(r instanceof String||(zr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Hr(r){return Xr(r)||Yr(r)}L(Hr,"isPrimitive",Xr),L(Hr,"isObject",Yr);var Kr=["values","indices","*"];function Qr(r,e){return Pr(e)?(q(e,"thisArg")&&(r.thisArg=e.thisArg),q(e,"series")&&(r.series=e.series,!Z(r.series))?new TypeError(jr("1RD2o,GE","series",r.series)):q(e,"limit")&&(r.limit=e.limit,!Br(r.limit))?new TypeError(jr("1RD3P,Fv","limit",r.limit)):q(e,"returns")&&(r.returns=e.returns,-1===function(r,e,t){var n,i;if(!wr(r)&&!Xr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Dr(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Wr(e)){for(;i<n;i++)if(Wr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}(Kr,r.returns))?new TypeError(jr("1RD2X,3g,4S,GD,Gg,Jm","returns",Kr.join('", "'),r.returns)):null):new TypeError(jr("1RD2V,FD",e))}function re(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var ee=re(Object.freeze({__proto__:null,default:()=>()=>{}}))("group-by-async:limit");function te(r,e,t,n){var i,o,a,u,c,l,s,f;if(c=r.length,ee("Collection length: %d",c),s={},0===c)return ee("Finished processing a collection."),n(null,s);for(u=c<e.limit?c:e.limit,ee("Concurrency limit: %d",u),ee("Number of arguments: %d",t.length),i=c-1,o=0,l=-1,f=0;f<u;f++)l<i&&p();function p(){var n,i;function o(r,t){if(!a){if(r)return a=!0,g(r);ee("Collection element %d group: %s.",i,t),"indices"===e.returns?q(s,t)?s[t].push(i):s[t]=[i]:"*"===e.returns?q(s,t)?s[t].push([i,n]):s[t]=[[i,n]]:q(s,t)?s[t].push(n):s[t]=[n],g()}}n=r[i=l+=1],ee("Collection element %d: %s.",i,JSON.stringify(n)),2===t.length?t.call(e.thisArg,n,o):3===t.length?t.call(e.thisArg,n,i,o):t.call(e.thisArg,n,i,r,o)}function g(r){return r?(ee("Encountered an error: %s",r.message),n(r)):(ee("Processed %d of %d collection elements.",o+=1,c),l<i?p():o===c?(ee("Finished processing a collection."),n(null,s)):void 0)}}function ne(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Qr(t,r))throw n;i=e}else i=r;if(!br(i))throw new TypeError(jr("1RD3q,JV",i));return t.series?t.limit=1:t.limit||(t.limit=_r),o;function o(r,e){if(!wr(r))throw new TypeError(jr("1RDAh,O3",r));if(!br(e))throw new TypeError(jr("1RD3q,JV",e));return te(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}}function ie(r,e,t,n){if(arguments.length<4)return ne(e)(r,t);ne(e,t)(r,n)}return L(ie,"factory",ne),ie}));
//# sourceMappingURL=index.js.map
