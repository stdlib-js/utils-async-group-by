// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,m,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var x=String.fromCharCode,S=isNaN,V=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,t,a,o,p,l,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,t,n;for(i=[],n=0,t=F.exec(e);t;)(r=e.slice(n,F.lastIndex-t[0].length)).length&&i.push(r),i.push(I(t)),n=F.lastIndex,t=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function O(e){return"string"==typeof e}function A(e){var r,i;if(!O(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return j.apply(null,r)}var _,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,N=C.__lookupGetter__,L=C.__lookupSetter__;_=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var W=_;function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function X(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Y.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"",H=B()?function(e){var r,i,t;if(null==e)return z.call(e);i=e[q],r=D(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[q]=i:delete e[q],t}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ie(e){return X(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}G(ie,"isPrimitive",X),G(ie,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,me=/\.0*e/,ye=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":le(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,ye,"$1e"),i=ge.call(i,me,"e"),i=ge.call(i,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,be,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Se=String.fromCharCode,Ve=isNaN,Te=Array.isArray;function je(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fe(e){var r,i,t,n,a,o,s,c,p;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(pe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=je(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ve(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ve(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ve(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ve(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Oe(e){var r,i,t,n;for(i=[],n=0,t=Ie.exec(e);t;)(r=e.slice(n,Ie.lastIndex-t[0].length)).length&&i.push(r),i.push($e(t)),n=Ie.lastIndex,t=Ie.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ae(e){return"string"==typeof e}function _e(e){var r,i;if(!Ae(e))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Oe(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Fe.apply(null,r)}function Ce(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Pe="object"==typeof window?window:null,Ze="object"==typeof globalThis?globalThis:null,Ne=function(e){if(arguments.length){if(!X(e))throw new TypeError(_e("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Ze)return Ze;if(Re)return Re;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),Le=Ne.document&&Ne.document.childNodes,We=Int8Array;function Ge(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;G(Ge,"REGEXP",Ue);var Xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Me(e){return"number"==typeof e}function Be(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ze(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Be(n):Be(n)+e,t&&(e="-"+e)),e}var Ye=String.prototype.toLowerCase,De=String.prototype.toUpperCase;function Je(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Me(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ze(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ze(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===De.call(e.specifier)?De.call(i):Ye.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function qe(e){return"string"==typeof e}var He=Math.abs,Ke=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase,er=String.prototype.replace,rr=/e\+(\d)$/,ir=/e-(\d)$/,tr=/^(\d+)$/,nr=/^(\d+)e/,ar=/\.0$/,or=/\.0*e/,sr=/(\..*[^0])0*e/;function cr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Me(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":He(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=er.call(i,sr,"$1e"),i=er.call(i,or,"e"),i=er.call(i,ar,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=er.call(i,rr,"e+0$1"),i=er.call(i,ir,"e-0$1"),e.alternate&&(i=er.call(i,tr,"$1."),i=er.call(i,nr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Qe.call(e.specifier)?Qe.call(i):Ke.call(i)}function pr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function lr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+pr(t):pr(t)+e}var ur=String.fromCharCode,fr=isNaN,gr=Array.isArray;function dr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function hr(e){var r,i,t,n,a,o,s,c,p;if(!gr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(qe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=dr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,fr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,fr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Je(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!fr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=fr(a)?String(t.arg):ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=cr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ze(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=lr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function br(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vr(e){var r,i,t,n;for(i=[],n=0,t=wr.exec(e);t;)(r=e.slice(n,wr.lastIndex-t[0].length)).length&&i.push(r),i.push(br(t)),n=wr.lastIndex,t=wr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function mr(e){return"string"==typeof e}function yr(e){var r,i;if(!mr(e))throw new TypeError(yr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return hr.apply(null,r)}function Er(e){return null!==e&&"object"==typeof e}function kr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Ue.exec(t.toString()))return r[1]}return Er(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(Er,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(yr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Xe(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Er));var xr="function"==typeof U||"object"==typeof We||"function"==typeof Le?function(e){return kr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?kr(e).toLowerCase():r};function Sr(e){return"function"===xr(e)}var Vr=Math.floor;function Tr(e){return Vr(e)===e}function jr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Tr(e.length)&&e.length>=0&&e.length<=9007199254740991}function Fr(e){return"number"==typeof e}function Ir(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function $r(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ir(n):Ir(n)+e,t&&(e="-"+e)),e}var Or=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase;function _r(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Fr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=$r(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=$r(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ar.call(e.specifier)?Ar.call(i):Or.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Cr(e){return"string"==typeof e}var Rr=Math.abs,Pr=String.prototype.toLowerCase,Zr=String.prototype.toUpperCase,Nr=String.prototype.replace,Lr=/e\+(\d)$/,Wr=/e-(\d)$/,Gr=/^(\d+)$/,Ur=/^(\d+)e/,Xr=/\.0$/,Mr=/\.0*e/,Br=/(\..*[^0])0*e/;function zr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Fr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Rr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Nr.call(i,Br,"$1e"),i=Nr.call(i,Mr,"e"),i=Nr.call(i,Xr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Nr.call(i,Lr,"e+0$1"),i=Nr.call(i,Wr,"e-0$1"),e.alternate&&(i=Nr.call(i,Gr,"$1."),i=Nr.call(i,Ur,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Zr.call(e.specifier)?Zr.call(i):Pr.call(i)}function Yr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Dr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Yr(t):Yr(t)+e}var Jr=String.fromCharCode,qr=isNaN,Hr=Array.isArray;function Kr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Qr(e){var r,i,t,n,a,o,s,c,p;if(!Hr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Cr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Kr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,qr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,qr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=_r(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!qr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=qr(a)?String(t.arg):Jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=zr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=$r(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Dr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ei=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ri(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ii(e){var r,i,t,n;for(i=[],n=0,t=ei.exec(e);t;)(r=e.slice(n,ei.lastIndex-t[0].length)).length&&i.push(r),i.push(ri(t)),n=ei.lastIndex,t=ei.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ti(e){return"string"==typeof e}function ni(e){var r,i,t;if(!ti(e))throw new TypeError(ni("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ii(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Qr.apply(null,i)}var ai,oi=Number.POSITIVE_INFINITY,si=Object,ci=Object.getPrototypeOf;ai=Sr(Object.getPrototypeOf)?ci:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var pi=ai,li=Object.prototype;function ui(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!Xe(e)}(e)&&(r=function(e){return null==e?null:(e=si(e),pi(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&Sr(r.constructor)&&"[object Function]"===H(r.constructor)&&D(r,"isPrototypeOf")&&Sr(r.isPrototypeOf)&&(r===li||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function fi(e){return"number"==typeof e}var gi=Number,di=gi.prototype.toString,hi=B();function wi(e){return"object"==typeof e&&(e instanceof gi||(hi?function(e){try{return di.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function bi(e){return fi(e)||wi(e)}G(bi,"isPrimitive",fi),G(bi,"isObject",wi);var vi=gi.NEGATIVE_INFINITY;function mi(e){return e<oi&&e>vi&&Tr(e)}function yi(e){return fi(e)&&mi(e)}function Ei(e){return wi(e)&&mi(e.valueOf())}function ki(e){return yi(e)||Ei(e)}function xi(e){return yi(e)&&e>0}function Si(e){return Ei(e)&&e.valueOf()>0}function Vi(e){return xi(e)||Si(e)}function Ti(e){return e!=e}function ji(e){return fi(e)&&Ti(e)}function Fi(e){return wi(e)&&Ti(e.valueOf())}function Ii(e){return ji(e)||Fi(e)}function $i(e){return"string"==typeof e}G(ki,"isPrimitive",yi),G(ki,"isObject",Ei),G(Vi,"isPrimitive",xi),G(Vi,"isObject",Si),G(Ii,"isPrimitive",ji),G(Ii,"isObject",Fi);var Oi=String.prototype.valueOf,Ai=B();function _i(e){return"object"==typeof e&&(e instanceof String||(Ai?function(e){try{return Oi.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function Ci(e){return $i(e)||_i(e)}function Ri(e){return"number"==typeof e}function Pi(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Zi(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Pi(n):Pi(n)+e,t&&(e="-"+e)),e}G(Ci,"isPrimitive",$i),G(Ci,"isObject",_i);var Ni=String.prototype.toLowerCase,Li=String.prototype.toUpperCase;function Wi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ri(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Zi(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Zi(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Li.call(e.specifier)?Li.call(i):Ni.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Gi(e){return"string"==typeof e}var Ui=Math.abs,Xi=String.prototype.toLowerCase,Mi=String.prototype.toUpperCase,Bi=String.prototype.replace,zi=/e\+(\d)$/,Yi=/e-(\d)$/,Di=/^(\d+)$/,Ji=/^(\d+)e/,qi=/\.0$/,Hi=/\.0*e/,Ki=/(\..*[^0])0*e/;function Qi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ri(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ui(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Bi.call(i,Ki,"$1e"),i=Bi.call(i,Hi,"e"),i=Bi.call(i,qi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Bi.call(i,zi,"e+0$1"),i=Bi.call(i,Yi,"e-0$1"),e.alternate&&(i=Bi.call(i,Di,"$1."),i=Bi.call(i,Ji,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Mi.call(e.specifier)?Mi.call(i):Xi.call(i)}function et(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function rt(e,r,i){var t=r-e.length;return t<0?e:e=i?e+et(t):et(t)+e}var it=String.fromCharCode,tt=isNaN,nt=Array.isArray;function at(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ot(e){var r,i,t,n,a,o,s,c,p;if(!nt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Gi(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=at(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,tt(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,tt(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Wi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!tt(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=tt(a)?String(t.arg):it(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Qi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Zi(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=rt(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var st=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ct(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pt(e){var r,i,t,n;for(i=[],n=0,t=st.exec(e);t;)(r=e.slice(n,st.lastIndex-t[0].length)).length&&i.push(r),i.push(ct(t)),n=st.lastIndex,t=st.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function lt(e){return"string"==typeof e}function ut(e){var r,i;if(!lt(e))throw new TypeError(ut("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[pt(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return ot.apply(null,r)}var ft=["values","indices","*"];function gt(e,r){return ui(r)?(D(r,"thisArg")&&(e.thisArg=r.thisArg),D(r,"series")&&(e.series=r.series,!X(e.series))?new TypeError(ni("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):D(r,"limit")&&(e.limit=r.limit,!xi(e.limit))?new TypeError(ni("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):D(r,"returns")&&(e.returns=r.returns,-1===function(e,r,i){var t,n;if(!jr(e)&&!$i(e))throw new TypeError(ut("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(t=e.length))return-1;if(3===arguments.length){if(!yi(i))throw new TypeError(ut("invalid argument. Third argument must be an integer. Value: `%s`.",i));if(i>=0){if(i>=t)return-1;n=i}else(n=t+i)<0&&(n=0)}else n=0;if(Ii(r)){for(;n<t;n++)if(Ii(e[n]))return n}else for(;n<t;n++)if(e[n]===r)return n;return-1}(ft,e.returns))?new TypeError(ni('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",ft.join('", "'),e.returns)):null):new TypeError(ni("invalid argument. Options argument must be an object. Value: `%s`.",r))}function dt(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var t=Function.bind.apply(r,i);return new t}return r.apply(this,arguments)};i.prototype=r.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(i,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),i}var ht=dt(Object.freeze({__proto__:null,default:()=>()=>{}}))("group-by-async:limit");function wt(e,r,i,t){var n,a,o,s,c,p,l,u;if(c=e.length,ht("Collection length: %d",c),l={},0===c)return ht("Finished processing a collection."),t(null,l);for(s=c<r.limit?c:r.limit,ht("Concurrency limit: %d",s),ht("Number of arguments: %d",i.length),n=c-1,a=0,p=-1,u=0;u<s;u++)p<n&&f();function f(){var t,n;function a(e,i){if(!o){if(e)return o=!0,g(e);ht("Collection element %d group: %s.",n,i),"indices"===r.returns?D(l,i)?l[i].push(n):l[i]=[n]:"*"===r.returns?D(l,i)?l[i].push([n,t]):l[i]=[[n,t]]:D(l,i)?l[i].push(t):l[i]=[t],g()}}t=e[n=p+=1],ht("Collection element %d: %s.",n,JSON.stringify(t)),2===i.length?i.call(r.thisArg,t,a):3===i.length?i.call(r.thisArg,t,n,a):i.call(r.thisArg,t,n,e,a)}function g(e){return e?(ht("Encountered an error: %s",e.message),t(e)):(ht("Processed %d of %d collection elements.",a+=1,c),p<n?f():a===c?(ht("Finished processing a collection."),t(null,l)):void 0)}}function bt(e,r){var i,t,n;if(i={},arguments.length>1){if(t=gt(i,e))throw t;n=r}else n=e;if(!Sr(n))throw new TypeError(ni("invalid argument. Last argument must be a function. Value: `%s`.",n));return i.series?i.limit=1:i.limit||(i.limit=oi),a;function a(e,r){if(!jr(e))throw new TypeError(ni("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!Sr(r))throw new TypeError(ni("invalid argument. Last argument must be a function. Value: `%s`.",r));return wt(e,i,n,(function(e,i){if(e)return r(e);r(null,i)}))}}function vt(e,r,i,t){if(arguments.length<4)return bt(r)(e,i);bt(r,i)(e,t)}return G(vt,"factory",bt),vt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).groupByAsync=r();
//# sourceMappingURL=browser.js.map
