!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(self,(()=>(()=>{"use strict";var e={d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}e.r(r),e.d(r,{adjustCaretPosition:()=>v,conformToMask:()=>d,createTextMaskInputElement:()=>k});var n="_",o="function",i=[];function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;if(!l(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(r))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+"The placeholder character that was received is: ".concat(JSON.stringify(r),"\n\n")+"The mask that was received is: ".concat(JSON.stringify(e)));return e.map((function(e){return e instanceof RegExp?r:e})).join("")}function l(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function u(e){return"string"==typeof e||e instanceof String}function s(e){for(var r,t=[];-1!==(r=e.indexOf("[]"));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}var f=[],c="";function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!l(r)){if(t(r)!==o)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=s(r=r(e,i)).maskWithoutCaretTraps}var u=i.guide,d=void 0===u||u,p=i.previousConformedValue,h=void 0===p?c:p,v=i.placeholderChar,m=void 0===v?n:v,g=i.placeholder,y=void 0===g?a(r,m):g,b=i.currentCaretPosition,O=i.keepCharPositions,C=!1===d&&void 0!==h,P=e.length,k=h.length,w=y.length,x=r.length,j=P-k,T=j>0,S=b+(T?-j:0),V=S+Math.abs(j);if(!0===O&&!T){for(var E=c,M=S;M<V;M++)y[M]===m&&(E+=m);e=e.slice(0,S)+E+e.slice(S,P)}for(var A=e.split(c).map((function(e,r){return{char:e,isNew:r>=S&&r<V}})),N=P-1;N>=0;N--){var D=A[N].char;if(D!==m){var R=N>=S&&k===x;D===y[R?N-j:N]&&A.splice(N,1)}}var I=c,J=!1;e:for(var W=0;W<w;W++){var _=y[W];if(_===m){if(A.length>0)for(;A.length>0;){var q=A.shift(),F=q.char,L=q.isNew;if(F===m&&!0!==C){I+=m;continue e}if(r[W].test(F)){if(!0===O&&!1!==L&&h!==c&&!1!==d&&T){for(var z=A.length,B=null,G=0;G<z;G++){var H=A[G];if(H.char!==m&&!1===H.isNew)break;if(H.char===m){B=G;break}}null!==B?(I+=F,A.splice(B,1)):W--}else I+=F;continue e}J=!0}!1===C&&(I+=y.substr(W,w));break}I+=_}if(C&&!1===T){for(var K=null,Q=0;Q<I.length;Q++)y[Q]===m&&(K=Q);I=null!==K?I.substr(0,K+1):c}return{conformedValue:I,meta:{someCharsRejected:J}}}var p=[],h="";function v(e){var r=e.previousConformedValue,t=void 0===r?h:r,n=e.previousPlaceholder,o=void 0===n?h:n,i=e.currentCaretPosition,a=void 0===i?0:i,l=e.conformedValue,u=e.rawValue,s=e.placeholderChar,f=e.placeholder,c=e.indexesOfPipedChars,d=void 0===c?p:c,v=e.caretTrapIndexes,m=void 0===v?p:v;if(0===a||!u.length)return 0;var g=u.length,y=t.length,b=f.length,O=l.length,C=g-y,P=C>0;if(C>1&&!P&&0!==y)return a;var k,w,x=0;if(!P||t!==l&&l!==f){var j=l.toLowerCase(),T=u.toLowerCase().substr(0,a).split(h).filter((function(e){return-1!==j.indexOf(e)}));w=T[T.length-1];var S=o.substr(0,T.length).split(h).filter((function(e){return e!==s})).length,V=f.substr(0,T.length).split(h).filter((function(e){return e!==s})).length!==S,E=void 0!==o[T.length-1]&&void 0!==f[T.length-2]&&o[T.length-1]!==s&&o[T.length-1]!==f[T.length-1]&&o[T.length-1]===f[T.length-2];!P&&(V||E)&&S>0&&f.indexOf(w)>-1&&void 0!==u[a]&&(k=!0,w=u[a]);for(var M=d.map((function(e){return j[e]})).filter((function(e){return e===w})).length,A=T.filter((function(e){return e===w})).length,N=f.substr(0,f.indexOf(s)).split(h).filter((function(e,r){return e===w&&u[r]!==e})).length+A+M+(k?1:0),D=0,R=0;R<O&&(x=R+1,j[R]===w&&D++,!(D>=N));R++);}else x=a-C;if(P){for(var I=x,J=x;J<=b;J++)if(f[J]===s&&(I=J),f[J]===s||-1!==m.indexOf(J)||J===b)return I}else if(k){for(var W=x-1;W>=0;W--)if(l[W]===w||-1!==m.indexOf(W)||0===W)return W}else for(var _=x;_>=0;_--)if(f[_-1]===s||-1!==m.indexOf(_)||0===_)return _}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b="none",O="object",C="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),P="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;function k(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(i){var l,f,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,p=c.inputElement,h=c.mask,m=c.guide,g=c.pipe,b=c.placeholderChar,C=void 0===b?n:b,P=c.keepCharPositions,k=void 0!==P&&P,j=c.showMask,T=void 0!==j&&j;if(void 0===i&&(i=p.value),i!==r.previousConformedValue&&(t(h)===O&&void 0!==h.pipe&&void 0!==h.mask&&(g=h.pipe,h=h.mask),h instanceof Array&&(l=a(h,C)),!1!==h)){var S,V=x(i),E=p.selectionEnd,M=r.previousConformedValue,A=r.previousPlaceholder;if(t(h)===o){if(!1===(f=h(V,{currentCaretPosition:E,previousConformedValue:M,placeholderChar:C})))return;var N=s(f),D=N.maskWithoutCaretTraps,R=N.indexes;S=R,l=a(f=D,C)}else f=h;var I={previousConformedValue:M,guide:m,placeholderChar:C,pipe:g,placeholder:l,currentCaretPosition:E,keepCharPositions:k},J=d(V,f,I),W=J.conformedValue,_=t(g)===o,q={};_&&(!1===(q=g(W,y({rawValue:V},I)))?q={value:M,rejected:!0}:u(q)&&(q={value:q}));var F=_?q.value:W,L=v({previousConformedValue:M,previousPlaceholder:A,conformedValue:F,placeholder:l,rawValue:V,currentCaretPosition:E,placeholderChar:C,indexesOfPipedChars:q.indexesOfPipedChars,caretTrapIndexes:S}),z=F===l&&0===L,B=T?l:"",G=z?B:F;r.previousConformedValue=G,r.previousPlaceholder=l,p.value!==G&&(p.value=G,w(p,L))}}}}function w(e,r){document.activeElement===e&&(C?P((function(){return e.setSelectionRange(r,r,b)}),0):e.setSelectionRange(r,r,b))}function x(e){if(u(e))return e;if("number"!=typeof(r=e)||void 0!==r.length||isNaN(r)){if(null==e)return"";throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value "+"received was:\n\n ".concat(JSON.stringify(e)))}return String(e);var r}return r})()));