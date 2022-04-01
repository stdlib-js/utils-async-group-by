// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var l=function(r,e,t){var n,l,f,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),f="get"in t,p="set"in t,l&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},f=n,p=l,v=t()?f:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,h=/./;var d=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,E=y;var j=function(r){return E.call(r)},T=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&T.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",_=P,V=O,x=y;var S=j,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[V],e=_(r,V);try{r[V]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[V]=t:delete r[V],n},A=w()?k:S,F=Boolean.prototype.toString;var I=A,N=function(r){try{return F.call(r),!0}catch(r){return!1}},C=w();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(C?N(r):"[object Boolean]"===I(r)))},R=d,$=M;var L=m,B=function(r){return R(r)||$(r)},G=M;L(B,"isPrimitive",d),L(B,"isObject",G);var Z=B;var z="object"==typeof self?self:null,D="object"==typeof window?window:null,W="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X=Z.isPrimitive,q=function(){return new Function("return this;")()},U=z,Y=D,J=r(Object.freeze({__proto__:null}));var H=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(U)return U;if(Y)return Y;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")},K=H(),Q=K.document&&K.document.childNodes,rr=Int8Array,er=h,tr=Q,nr=rr;var ir=function(){return"function"==typeof er||"object"==typeof nr||"function"==typeof tr};var or=function(){return/^\s*function\s*([^(]*)/i},ar=or;m(ar,"REGEXP",or());var ur=ar,cr=A;var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===cr(r)},lr=sr;var fr=function(r){return null!==r&&"object"==typeof r};m(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var pr=fr;var vr=A,gr=ur.REGEXP,mr=function(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=vr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},dr=hr;var br=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e},yr=function(r){return br(r).toLowerCase()},Er=ir()?yr:wr;var jr=function(r){return"function"===Er(r)},Tr=Math.floor;var Pr=function(r){return Tr(r)===r},Or=Pr;var _r=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=9007199254740991};var Vr=function(r){return"string"==typeof r},xr=String.prototype.valueOf;var Sr=A,kr=function(r){try{return xr.call(r),!0}catch(r){return!1}},Ar=w();var Fr=function(r){return"object"==typeof r&&(r instanceof String||(Ar?kr(r):"[object String]"===Sr(r)))},Ir=Vr,Nr=Fr;var Cr=m,Mr=function(r){return Ir(r)||Nr(r)},Rr=Fr;Cr(Mr,"isPrimitive",Vr),Cr(Mr,"isObject",Rr);var $r=Mr;var Lr=function(r){return"number"==typeof r},Br=Number,Gr=Br.prototype.toString;var Zr=A,zr=Br,Dr=function(r){try{return Gr.call(r),!0}catch(r){return!1}},Wr=w();var Xr=function(r){return"object"==typeof r&&(r instanceof zr||(Wr?Dr(r):"[object Number]"===Zr(r)))},qr=Lr,Ur=Xr;var Yr=m,Jr=function(r){return qr(r)||Ur(r)},Hr=Xr;Yr(Jr,"isPrimitive",Lr),Yr(Jr,"isObject",Hr);var Kr=Jr,Qr=Number.POSITIVE_INFINITY,re=Br.NEGATIVE_INFINITY,ee=Qr,te=re,ne=Pr;var ie=function(r){return r<ee&&r>te&&ne(r)},oe=Kr.isPrimitive,ae=ie;var ue=function(r){return oe(r)&&ae(r)},ce=Kr.isObject,se=ie;var le=function(r){return ce(r)&&se(r.valueOf())},fe=ue,pe=le;var ve=m,ge=function(r){return fe(r)||pe(r)},me=le;ve(ge,"isPrimitive",ue),ve(ge,"isObject",me);var he=ge;var de=function(r){return r!=r},be=Kr.isPrimitive,we=de;var ye=function(r){return be(r)&&we(r)},Ee=Kr.isObject,je=de;var Te=function(r){return Ee(r)&&je(r.valueOf())},Pe=ye,Oe=Te;var _e=m,Ve=function(r){return Pe(r)||Oe(r)},xe=Te;_e(Ve,"isPrimitive",ye),_e(Ve,"isObject",xe);var Se=Ve,ke=_r,Ae=he.isPrimitive,Fe=$r.isPrimitive,Ie=Se.isPrimitive;var Ne=function(r,e,t){var n,i,o;if(!ke(r)&&!Fe(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ae(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Fe(r)){if(!Fe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ie(e)){for(o=i;o<n;o++)if(Ie(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Ce=$r.isPrimitive;var Me=function(r){if(!Ce(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Re=$r.isPrimitive;var $e=function(r){if(!Re(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Le=Me,Be=$e,Ge=$r.isPrimitive;var Ze=function(r){return Ge(r)&&r===Be(r)&&r!==Le(r)},ze=Qr,De=re;var We=function(r){return r==r&&r>De&&r<ze},Xe=he.isPrimitive;var qe=function(r){return Xe(r)&&r>=0},Ue=he.isObject;var Ye=function(r){return Ue(r)&&r.valueOf()>=0},Je=qe,He=Ye;var Ke=m,Qe=function(r){return Je(r)||He(r)},rt=Ye;Ke(Qe,"isPrimitive",qe),Ke(Qe,"isObject",rt);var et=Qe.isPrimitive,tt=$r.isPrimitive;var nt=function(r,e){var t,n;if(!tt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!et(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},it=he.isPrimitive,ot=$r.isPrimitive;var at=nt,ut=function(r,e,t){var n,i;if(!ot(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!it(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ct=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ut(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+at("0",i):at("0",i)+r,n&&(r="-"+r)),r},st=Ze,lt=$e,ft=Me,pt=We,vt=Kr.isPrimitive,gt=ct;var mt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!pt(n)){if(!vt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=st(r.specifier)?lt(t):ft(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},ht=$r.isPrimitive,dt=/[-\/\\^$*+?.()|[\]{}]/g;var bt=function(r){var e,t;if(!ht(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(dt,"\\$&"):(e=(e=r.substring(1,t)).replace(dt,"\\$&"),r=r[0]+e+r.substring(t))},wt=RegExp.prototype.exec;var yt=A,Et=function(r){try{return wt.call(r),!0}catch(r){return!1}},jt=w();var Tt=bt,Pt=jr,Ot=$r.isPrimitive,_t=function(r){return"object"==typeof r&&(r instanceof RegExp||(jt?Et(r):"[object RegExp]"===yt(r)))};var Vt=Ze,xt=$e,St=Me,kt=function(r,e,t){if(!Ot(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Ot(e))e=Tt(e),e=new RegExp(e,"g");else if(!_t(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Ot(t)&&!Pt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},At=We,Ft=Kr.isPrimitive,It=function(r){return Math.abs(r)},Nt=/e\+(\d)$/,Ct=/e-(\d)$/,Mt=/^(\d+)$/,Rt=/^(\d+)e/,$t=/\.0$/,Lt=/\.0*e/,Bt=/(\..*[^0])0*e/;var Gt=function(r){var e,t,n=parseFloat(r.arg);if(!At(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":It(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=kt(t,Bt,"$1e"),t=kt(t,Lt,"e"),t=kt(t,$t,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=kt(t,Nt,"e+0$1"),t=kt(t,Ct,"e-0$1"),r.alternate&&(t=kt(t,Mt,"$1."),t=kt(t,Rt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Vt(r.specifier)?xt(t):St(t)},Zt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var zt=nt;var Dt=$r.isPrimitive,Wt=Ne,Xt=de,qt=mt,Ut=Gt,Yt=function(r){var e,t,n,i,o;for(e=0,n=[],o=Zt.exec(r);o;)(t=r.slice(e,Zt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Zt.lastIndex,o=Zt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Jt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+zt(" ",n):zt(" ",n)+r},Ht=ct,Kt=String.fromCharCode;var Qt=function(r){var e,t,n,i,o,a,u,c,s;if(!Dt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Yt(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Dt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Wt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Xt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Xt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Xt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Xt(o)?String(n.arg):Kt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Ut(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ht(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Jt(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},rn=sr;var en=function(r){return"object"==typeof r&&null!==r&&!rn(r)},tn=Object.getPrototypeOf;var nn=function(r){return r.__proto__},on=A,an=nn;var un=function(r){var e=an(r);return e||null===e?e:"[object Function]"===on(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},cn=tn,sn=un,ln=jr(Object.getPrototypeOf)?cn:sn;var fn=en,pn=jr,vn=function(r){return null==r?null:(r=Object(r),ln(r))},gn=P,mn=A,hn=Object.prototype;var dn=function(r){var e;return!!fn(r)&&(!(e=vn(r))||!gn(r,"constructor")&&gn(e,"constructor")&&pn(e.constructor)&&"[object Function]"===mn(e.constructor)&&gn(e,"isPrototypeOf")&&pn(e.isPrototypeOf)&&(e===hn||function(r){var e;for(e in r)if(!gn(r,e))return!1;return!0}(r)))},bn=dn,wn=he.isPrimitive;var yn=function(r){return wn(r)&&r>0},En=he.isObject;var jn=function(r){return En(r)&&r.valueOf()>0},Tn=yn,Pn=jn;var On=m,_n=function(r){return Tn(r)||Pn(r)},Vn=jn;On(_n,"isPrimitive",yn),On(_n,"isObject",Vn);var xn=Se,Sn=_r,kn=$r.isPrimitive,An=he.isPrimitive;var Fn=bn,In=P,Nn=Z.isPrimitive,Cn=_n.isPrimitive,Mn=function(r,e,t){var n,i;if(!Sn(r)&&!kn(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!An(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(xn(e)){for(;i<n;i++)if(xn(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1},Rn=Qt,$n=["values","indices","*"];var Ln=function(r,e){return Fn(e)?(In(e,"thisArg")&&(r.thisArg=e.thisArg),In(e,"series")&&(r.series=e.series,!Nn(r.series))?new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","series",r.series)):In(e,"limit")&&(r.limit=e.limit,!Cn(r.limit))?new TypeError(Rn("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",r.limit)):In(e,"returns")&&(r.returns=e.returns,-1===Mn($n,r.returns))?new TypeError(Rn('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",$n.join('", "'),r.returns)):null):new TypeError(Rn("invalid argument. Options argument must be an object. Value: `%s`.",e))};function Bn(){throw new Error("setTimeout has not been defined")}function Gn(){throw new Error("clearTimeout has not been defined")}var Zn=Bn,zn=Gn;function Dn(r){if(Zn===setTimeout)return setTimeout(r,0);if((Zn===Bn||!Zn)&&setTimeout)return Zn=setTimeout,setTimeout(r,0);try{return Zn(r,0)}catch(e){try{return Zn.call(null,r,0)}catch(e){return Zn.call(this,r,0)}}}"function"==typeof W.setTimeout&&(Zn=setTimeout),"function"==typeof W.clearTimeout&&(zn=clearTimeout);var Wn,Xn=[],qn=!1,Un=-1;function Yn(){qn&&Wn&&(qn=!1,Wn.length?Xn=Wn.concat(Xn):Un=-1,Xn.length&&Jn())}function Jn(){if(!qn){var r=Dn(Yn);qn=!0;for(var e=Xn.length;e;){for(Wn=Xn,Xn=[];++Un<e;)Wn&&Wn[Un].run();Un=-1,e=Xn.length}Wn=null,qn=!1,function(r){if(zn===clearTimeout)return clearTimeout(r);if((zn===Gn||!zn)&&clearTimeout)return zn=clearTimeout,clearTimeout(r);try{zn(r)}catch(e){try{return zn.call(null,r)}catch(e){return zn.call(this,r)}}}(r)}}function Hn(r,e){this.fun=r,this.array=e}Hn.prototype.run=function(){this.fun.apply(null,this.array)};function Kn(){}var Qn=Kn,ri=Kn,ei=Kn,ti=Kn,ni=Kn,ii=Kn,oi=Kn;var ai=W.performance||{},ui=ai.now||ai.mozNow||ai.msNow||ai.oNow||ai.webkitNow||function(){return(new Date).getTime()};var ci=new Date;var si={nextTick:function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Xn.push(new Hn(r,e)),1!==Xn.length||qn||Dn(Jn)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:Qn,addListener:ri,once:ei,off:ti,removeListener:ni,removeAllListeners:ii,emit:oi,binding:function(r){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(r){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(r){var e=.001*ui.call(ai),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-ci)/1e3}};module.exports=void 0!==si&&"renderer"===si.type?require("./browser.js"):require("./node.js");var li=P,fi=r(Object.freeze({__proto__:null}))("group-by-async:limit");var pi=jr,vi=_r,gi=Qt,mi=Qr,hi=Ln,di=function(r,e,t,n){var i,o,a,u,c,s,l,f;if(c=r.length,fi("Collection length: %d",c),l={},0===c)return fi("Finished processing a collection."),n(null,l);for(u=c<e.limit?c:e.limit,fi("Concurrency limit: %d",u),fi("Number of arguments: %d",t.length),i=c-1,o=0,s=-1,f=0;f<u;f++)s<i&&p();function p(){var n,i;function o(r,t){if(!a){if(r)return a=!0,v(r);fi("Collection element %d group: %s.",i,t),"indices"===e.returns?li(l,t)?l[t].push(i):l[t]=[i]:"*"===e.returns?li(l,t)?l[t].push([i,n]):l[t]=[[i,n]]:li(l,t)?l[t].push(n):l[t]=[n],v()}}n=r[i=s+=1],fi("Collection element %d: %s.",i,JSON.stringify(n)),2===t.length?t.call(e.thisArg,n,o):3===t.length?t.call(e.thisArg,n,i,o):t.call(e.thisArg,n,i,r,o)}function v(r){return r?(fi("Encountered an error: %s",r.message),n(r)):(fi("Processed %d of %d collection elements.",o+=1,c),s<i?p():o===c?(fi("Finished processing a collection."),n(null,l)):void 0)}};var bi=function(r,e){var t,n,i;if(t={},arguments.length>1){if(n=hi(t,r))throw n;i=e}else i=r;if(!pi(i))throw new TypeError(gi("invalid argument. Last argument must be a function. Value: `%s`.",i));return t.series?t.limit=1:t.limit||(t.limit=mi),o;function o(r,e){if(!vi(r))throw new TypeError(gi("invalid argument. First argument must be a collection. Value: `%s`.",r));if(!pi(e))throw new TypeError(gi("invalid argument. Last argument must be a function. Value: `%s`.",e));return di(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}},wi=bi;var yi=function(r,e,t,n){if(arguments.length<4)return wi(e)(r,t);wi(e,t)(r,n)},Ei=bi;m(yi,"factory",Ei);var ji=yi;export{ji as default,Ei as factory};
//# sourceMappingURL=mod.js.map
