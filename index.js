// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).groupByAsync=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function w(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,l,s,f,p,g,d,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+w(h):w(h)+p)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var x,I=Object.prototype,V=I.toString,F=I.__defineGetter__,R=I.__defineSetter__,C=I.__lookupGetter__,N=I.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var $=x;function B(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var D=/./;function G(r){return"boolean"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return L&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&U.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,q="function"==typeof X?X.toStringTag:"";var z=M()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[q],e=W(r,q);try{r[q]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[q]=t:delete r[q],n}:function(r){return Z.call(r)},Y=Boolean,J=Boolean.prototype.toString;var H=M();function K(r){return"object"==typeof r&&(r instanceof Y||(H?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!G(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;B(cr,"REGEXP",ur);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function sr(r){return null!==r&&"object"==typeof r}function fr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var pr="function"==typeof D||"object"==typeof ar||"function"==typeof or?function(r){return fr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?fr(r).toLowerCase():e};function gr(r){return"function"===pr(r)}var dr=Math.floor;function hr(r){return dr(r)===r}var yr=9007199254740991;function br(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=yr}function vr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var mr=Number.POSITIVE_INFINITY;var wr,jr=Object,_r=Object.getPrototypeOf;wr=gr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=wr;var Or=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&gr(e.constructor)&&"[object Function]"===z(e.constructor)&&W(e,"isPrototypeOf")&&gr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function Tr(r){return"number"==typeof r}var Ar=Number,Pr=Ar.prototype.toString;var kr=M();function xr(r){return"object"==typeof r&&(r instanceof Ar||(kr?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Ir(r){return Tr(r)||xr(r)}B(Ir,"isPrimitive",Tr),B(Ir,"isObject",xr);var Vr=Ar.NEGATIVE_INFINITY;function Fr(r){return r<mr&&r>Vr&&hr(r)}function Rr(r){return Tr(r)&&Fr(r)}function Cr(r){return xr(r)&&Fr(r.valueOf())}function Nr(r){return Rr(r)||Cr(r)}function $r(r){return Rr(r)&&r>0}function Br(r){return Cr(r)&&r.valueOf()>0}function Dr(r){return $r(r)||Br(r)}function Gr(r){return r!=r}function Lr(r){return Tr(r)&&Gr(r)}function Mr(r){return xr(r)&&Gr(r.valueOf())}function Zr(r){return Lr(r)||Mr(r)}function Ur(r){return"string"==typeof r}B(Nr,"isPrimitive",Rr),B(Nr,"isObject",Cr),B(Dr,"isPrimitive",$r),B(Dr,"isObject",Br),B(Zr,"isPrimitive",Lr),B(Zr,"isObject",Mr);var Wr=String.prototype.valueOf;var Xr=M();function qr(r){return"object"==typeof r&&(r instanceof String||(Xr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function zr(r){return Ur(r)||qr(r)}B(zr,"isPrimitive",Ur),B(zr,"isObject",qr);var Yr=["values","indices","*"];function Jr(r,e){return Sr(e)?(W(e,"thisArg")&&(r.thisArg=e.thisArg),W(e,"series")&&(r.series=e.series,!G(r.series))?new TypeError(vr("1RD2o","series",r.series)):W(e,"limit")&&(r.limit=e.limit,!$r(r.limit))?new TypeError(vr("1RD3P","limit",r.limit)):W(e,"returns")&&(r.returns=e.returns,-1===function(r,e,t){var n,i;if(!br(r)&&!Ur(r))throw new TypeError(k("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Rr(t))throw new TypeError(k("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Zr(e)){for(;i<n;i++)if(Zr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}(Yr,r.returns))?new TypeError(vr("1RD4S","returns",Yr.join('", "'),r.returns)):null):new TypeError(vr("1RD2V",e))}function Hr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var Kr=Hr(Object.freeze({__proto__:null,default:()=>()=>{}}))("group-by-async:limit");function Qr(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Jr(t,r))throw n;i=e}else i=r;if(!gr(i))throw new TypeError(vr("1RD3q",i));return t.series?t.limit=1:t.limit||(t.limit=mr),function(r,e){if(!br(r))throw new TypeError(vr("1RDAh",r));if(!gr(e))throw new TypeError(vr("1RD3q",e));return function(r,e,t,n){var i,o,a,c,u,l,s,f;if(u=r.length,Kr("Collection length: %d",u),s={},0===u)return Kr("Finished processing a collection."),n(null,s);for(c=u<e.limit?u:e.limit,Kr("Concurrency limit: %d",c),Kr("Number of arguments: %d",t.length),i=u-1,o=0,l=-1,f=0;f<c;f++)l<i&&p();function p(){var n,i;function o(r,t){if(!a){if(r)return a=!0,g(r);Kr("Collection element %d group: %s.",i,t),"indices"===e.returns?W(s,t)?s[t].push(i):s[t]=[i]:"*"===e.returns?W(s,t)?s[t].push([i,n]):s[t]=[[i,n]]:W(s,t)?s[t].push(n):s[t]=[n],g()}}n=r[i=l+=1],Kr("Collection element %d: %s.",i,JSON.stringify(n)),2===t.length?t.call(e.thisArg,n,o):3===t.length?t.call(e.thisArg,n,i,o):t.call(e.thisArg,n,i,r,o)}function g(r){return r?(Kr("Encountered an error: %s",r.message),n(r)):(Kr("Processed %d of %d collection elements.",o+=1,u),l<i?p():o===u?(Kr("Finished processing a collection."),n(null,s)):void 0)}}(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}}function re(r,e,t,n){if(arguments.length<4)return Qr(e)(r,t);Qr(e,t)(r,n)}return B(re,"factory",Qr),re}));
//# sourceMappingURL=index.js.map
