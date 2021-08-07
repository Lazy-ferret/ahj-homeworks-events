(()=>{var t={99:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},533:(t,r,e)=>{"use strict";var n=e(92).forEach,o=e(341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},92:(t,r,e)=>{var n=e(974),o=e(361),i=e(908),c=e(466),u=e(417),a=[].push,s=function(t){var r=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(m,h,y,d){for(var g,x,b=i(m),S=o(b),L=n(h,y,3),E=c(S.length),w=0,j=d||u,T=r?j(m,E):e||p?j(m,0):void 0;E>w;w++)if((v||w in S)&&(x=L(g=S[w],w,b),t))if(r)T[w]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:a.call(T,g)}else switch(t){case 4:return!1;case 7:a.call(T,g)}return l?-1:s||f?f:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},341:(t,r,e)=>{"use strict";var n=e(293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},475:(t,r,e)=>{var n=e(111),o=e(157),i=e(112)("species");t.exports=function(t){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),void 0===r?Array:r}},417:(t,r,e)=>{var n=e(475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},880:(t,r,e)=>{var n=e(781),o=e(70),i=e(114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},781:(t,r,e)=>{var n=e(293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(854),o=e(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},113:(t,r,e)=>{var n=e(5);t.exports=n("navigator","userAgent")||""},392:(t,r,e)=>{var n,o,i=e(854),c=e(113),u=i.process,a=i.Deno,s=u&&u.versions||a&&a.version,f=s&&s.v8;f?o=(n=f.split("."))[0]<4?1:n[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},974:(t,r,e)=>{var n=e(99);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},5:(t,r,e)=>{var n=e(854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?o(n[t]):n[t]&&n[t][r]}},854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},656:(t,r,e)=>{var n=e(908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,r){return o.call(n(t),r)}},664:(t,r,e)=>{var n=e(781),o=e(293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},361:(t,r,e)=>{var n=e(293),o=e(326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},157:(t,r,e)=>{var n=e(326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},913:t=>{t.exports=!1},190:(t,r,e)=>{var n=e(5),o=e(307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return"function"==typeof r&&Object(t)instanceof r}},133:(t,r,e)=>{var n=e(392),o=e(293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},70:(t,r,e)=>{var n=e(781),o=e(664),i=e(670),c=e(948),u=Object.defineProperty;r.f=n?u:function(t,r,e){if(i(t),r=c(r),i(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},140:(t,r,e)=>{var n=e(111);t.exports=function(t,r){var e,o;if("string"===r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if("string"!==r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},505:(t,r,e)=>{var n=e(854);t.exports=function(t,r){try{Object.defineProperty(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},465:(t,r,e)=>{var n=e(854),o=e(505),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},309:(t,r,e)=>{var n=e(913),o=e(465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.16.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},466:(t,r,e)=>{var n=e(958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},908:(t,r,e)=>{var n=e(488);t.exports=function(t){return Object(n(t))}},593:(t,r,e)=>{var n=e(111),o=e(190),i=e(140),c=e(112)("toPrimitive");t.exports=function(t,r){if(!n(t)||o(t))return t;var e,u=t[c];if(void 0!==u){if(void 0===r&&(r="default"),e=u.call(t,r),!n(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===r&&(r="number"),i(t,r)}},948:(t,r,e)=>{var n=e(593),o=e(190);t.exports=function(t){var r=n(t,"string");return o(r)?r:String(r)}},711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},112:(t,r,e)=>{var n=e(854),o=e(309),i=e(656),c=e(711),u=e(133),a=e(307),s=o("wks"),f=n.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(u||"string"==typeof s[t])||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},747:(t,r,e)=>{var n=e(854),o=e(324),i=e(533),c=e(880);for(var u in o){var a=n[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(747);var t=document.createElement("img");t.src="./img/goblin.png",t.classList.add("goblin-img");var r,n=document.querySelectorAll(".hole"),o=document.getElementById("hit"),i=0,c=document.getElementById("miss"),u=0,a=document.querySelector(".start-button"),s=document.createElement("h2"),f=document.querySelector(".start-title"),l=0;function p(){var t=Math.floor(Math.random()*n.length);t!==l?l=t:p()}function v(){(p(),document.images)&&document.images[0].parentElement.removeChild(document.images[0]);n[l].insertAdjacentElement("afterbegin",t)}var m=function t(){v(),r=setTimeout((function(){t()}),1e3)},h=function(){r&&clearTimeout(r)};function y(){h(),f.appendChild(s)}n.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),t.target.classList.contains("goblin-img")?(h(),m(),i+=1,o.textContent=i,5===i&&(y(),s.textContent="Победа! Поздравляю!")):(u+=1,c.textContent=u,5===u&&(y(),s.textContent="Ты проиграл! Попробуй еще раз"))}))})),a.addEventListener("click",(function(t){t.preventDefault(),s.textContent&&f.removeChild(s),m(),i=0,u=0,o.textContent=i,c.textContent=u}))})()})();