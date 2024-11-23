/*! For license information please see main.3268d4ec3a56f8cd3409.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={148:(e,t,r)=>{var n=r(540),a=r(338),o=r(976),i=r(767),l=r(48),c=r(479),u=r(105),s=r(615);const m=function(){return n.createElement(l.A,{className:"mt-5"},n.createElement(c.A,{className:"align-items-center"},n.createElement(u.A,null,n.createElement("h1",null,"Welcome to the Ski Wax App"),n.createElement("p",null,"This app helps you choose the best ski wax based on the weather conditions."),n.createElement("video",{width:600,autoPlay:!0,loop:!0,muted:!0,source:!0,src:"/SalomonOriginalMusic.mp4",type:"video/mp4"}),n.createElement(s.A,{href:"/input",variant:"primary"},"Get Started"))))};var f=r(163),h=r(376);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const d=function(){var e,t,r=((0,i.zy)().state||{waxes:[]}).waxes,a=(e=(0,n.useState)(0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],s=a[1],m=(0,n.useRef)(null);return(0,n.useEffect)((function(){m.current&&(m.current.volume=o/100)}),[o]),n.createElement(l.A,{fluid:!0,className:"mt-3"},n.createElement("h2",{className:"mb-3"},"Wax Recommendations"),n.createElement(c.A,null,n.createElement(u.A,{xs:12,md:2,className:"mb-3 mb-md-0"},r.length>0?n.createElement(f.A,{className:"small-text"},r.map((function(e,t){return n.createElement(f.A.Item,{key:t,className:"p-2"},n.createElement("h6",null,e.name),n.createElement("p",{className:"mb-1"},"Temp: ",e.min_temperature,"° - ",e.max_temperature,"°"),e.picture&&n.createElement("img",{src:"/skiWaxPics/".concat(e.image_path),alt:e.name,className:"img-fluid mb-2"}))}))):n.createElement("p",null,"No wax recommendations available")),n.createElement(u.A,{xs:12,md:10},n.createElement("video",{ref:m,width:"100%",height:"auto",autoPlay:!0,loop:!0,muted:0===o,playsInline:!0},n.createElement("source",{src:"/SalomonOriginalMusic.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),n.createElement(h.A.Group,{className:"mt-3"},n.createElement(h.A.Label,null,"Volume"),n.createElement(h.A.Range,{min:"0",max:"100",value:o,onChange:function(e){s(e.target.value)}})),n.createElement("h3",{className:"mt-3"},"Clothing Tops"),n.createElement(c.A,null,[{name:"Ski Jacket 1",image_url:"/skiWaxPics/clothing/currentlyUsing/10056-23-91002-main01.png"},{name:"Ski Jacket 2",image_url:"/skiWaxPics/clothing/currentlyUsing/s.png"},{name:"Ski Jacket 1",image_url:"/skiWaxPics/clothing/currentlyUsing/y.png"},{name:"Ski Jacket 2",image_url:"/skiWaxPics/clothing/currentlyUsing/y2.png"}].map((function(e,t){return n.createElement(u.A,{key:t,xs:6,md:4,lg:2,className:"mb-3"},n.createElement("img",{src:e.image_url,alt:e.name,className:"img-fluid"}),n.createElement("p",null,e.name))}))),n.createElement("h3",{className:"mt-3"},"Clothing Bottoms"),n.createElement(c.A,null,[{name:"Ski Pants 1",image_url:"/skiWaxPics/clothing/currentlyUsing/3852_332972_99900_Model_1_b71c6740-3cf1-43e4-ade6-02481afecaa2-original.jpg"},{name:"Ski Pants 2",image_url:"/skiWaxPics/clothing/currentlyUsing/6982_333865_99900_Model_1_aea00abb-da2a-4595-8f8d-c015a84c2522-original.jpg"}].map((function(e,t){return n.createElement(u.A,{key:t,xs:6,md:4,lg:2,className:"mb-3"},n.createElement("img",{src:e.image_url,alt:e.name,className:"img-fluid"}),n.createElement("p",null,e.name))}))))))},y=function(){return n.createElement("div",null,n.createElement("h1",null,"Your Personal Wax Recommendation"),n.createElement(d,null)," // display the wax recommendation")};function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(){g=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),l=new T(n||[]);return a(i,"_invoke",{value:j(e,r,l)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function b(){}function E(){}function w(){}var x={};u(x,i,(function(){return this}));var A=Object.getPrototypeOf,_=A&&A(A(C([])));_&&_!==r&&n.call(_,i)&&(x=_);var k=w.prototype=b.prototype=Object.create(x);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(a,o,i,l){var c=m(e[a],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==v(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function j(t,r,n){var a=f;return function(o,i){if(a===p)throw Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var l=n.delegate;if(l){var c=L(l,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=m(t,r,n);if("normal"===u.type){if(a=n.done?d:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=d,n.method="throw",n.arg=u.arg)}}}function L(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=m(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(v(t)+" is not iterable")}return E.prototype=w,a(k,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:E,configurable:!0}),E.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,l,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new O(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return l.type="throw",l.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function b(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const x=function(){var e=E((0,n.useState)("Resolute Bay Airport, Canada"),2),t=e[0],r=e[1],a=E((0,n.useState)(""),2),o=a[0],c=a[1],u=E((0,n.useState)(""),2),m=u[0],f=u[1],p=E((0,n.useState)("no recommendation yet"),2),d=(p[0],p[1]),y=E((0,n.useState)(null),2),v=(y[0],y[1]),w=(0,i.Zp)(),x=function(){var e,r=(e=g().mark((function e(r){var n,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log(t,o,m),e.prev=2,e.next=5,fetch("/api/wax",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({location:t||"Resolute Bay Airport, Canada",date:o,time:m})});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("error status: ".concat(n.status));case 8:return e.next=10,n.json();case 10:a=e.sent,console.log("success! this data is in response to inputForm data sent: ".concat(a)),d(a.recommendation),w("/recommendation",{state:{waxes:a.recommendation}}),v(null),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.error("error: ".concat(e.t0)),v("Failed to retrieve wax recommendation data");case 21:case"end":return e.stop()}}),e,null,[[2,17]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){b(o,n,a,i,l,"next",e)}function l(e){b(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return n.createElement(l.A,{className:"mt-5"},n.createElement("h2",null,"Enter Your Ski Details"),n.createElement(h.A,{onSubmit:x},n.createElement(h.A.Group,{className:"mb-3",controlId:"formLocation"},n.createElement(h.A.Label,null,"Location"),n.createElement(h.A.Control,{type:"text",placeholder:"Enter location",value:t,onChange:function(e){return r(e.target.value)}})),n.createElement(h.A.Group,{className:"mb-3",controlId:"formDate"},n.createElement(h.A.Label,null,"Date"),n.createElement(h.A.Control,{type:"date",value:o,onChange:function(e){return c(e.target.value)}})),n.createElement(h.A.Group,{className:"mb-3",controlId:"formTime"},n.createElement(h.A.Label,null,"Time"),n.createElement(h.A.Control,{type:"time",value:m,onChange:function(e){return f(e.target.value)}})),n.createElement(s.A,{variant:"primary",type:"submit"},"Submit")))};var A=r(113),_=r(212);const k=function(){return n.createElement(A.A,{expand:"lg",bg:"dark",variant:"dark"},n.createElement(l.A,null,n.createElement(A.A.Brand,{as:o.N_,to:"/"},"Ski Wax App"),n.createElement(A.A.Toggle,{"aria-controls":"basic-navbar-nav"}),n.createElement(A.A.Collapse,{id:"basic-navbar-nav"},n.createElement(_.A,{className:"me-auto"},n.createElement(_.A.Link,{as:o.N_,to:"/"},"Home"),n.createElement(_.A.Link,{as:o.N_,to:"/input"},"Input Form"),n.createElement(_.A.Link,{as:o.N_,to:"/recommendation"},"Wax Recommendation"),n.createElement(_.A.Link,{as:o.N_,to:"/results"},"Clothing")))))},S=function(){return console.log("App component rendering"),n.createElement("div",null,n.createElement("h1",null,"App is loaded"),n.createElement(o.Kd,null,n.createElement(k,null),n.createElement(i.BV,null,n.createElement(i.qh,{path:"/",element:n.createElement(m,null)})," // render the home page component on the home route",n.createElement(i.qh,{path:"/recommendation",element:n.createElement(y,null)})," // render the wax recommendation component on the wax recommendation route",n.createElement(i.qh,{path:"/input",element:n.createElement(x,null)})," // render the input form component on the input route")))};console.log("index.js file rendering"),a.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(S,null)))}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,o),r.exports}o.m=n,e=[],o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,a]=e[s],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,n,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(a,i),a},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var s=c(o)}for(t&&t(r);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},r=self.webpackChunkski_wax_app_mvp=self.webpackChunkski_wax_app_mvp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=o.O(void 0,[299],(()=>o(148)));i=o.O(i)})();
//# sourceMappingURL=main.3268d4ec3a56f8cd3409.js.map