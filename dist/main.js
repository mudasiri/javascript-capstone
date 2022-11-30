(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"body {\r\n  background-color: bisque;\r\n}\r\n\r\nheader {\r\n  padding-top: 20px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n#astronaut {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 30px;\r\n  padding: 5%;\r\n}\r\n\r\n.person {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.person-img {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.title-area {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.heart {\r\n  color: tomato;\r\n}\r\n\r\n.overlay-project {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  background-color: #c1c7d0e7;\r\n  z-index: 2;\r\n  overflow: auto;\r\n}\r\n\r\n.displayover {\r\n  display: flex;\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.flexbox-popup {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.info {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100vw;\r\n}\r\n\r\n.popup-title {\r\n  text-align: center;\r\n}\r\n\r\n.close {\r\n  transform: scale(3);\r\n}\r\n\r\nimg.popup-image {\r\n  width: 50vh;\r\n}\r\n\r\nfooter {\r\n  bottom: 0;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=t.base?s[0]+t.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),s=r.n(c),l=r(216),u=r.n(l),p=r(589),d=r.n(p),f=r(426),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.getElementById("astronaut");document.querySelector(".close").addEventListener("click",(()=>{document.getElementById("overlay-project").style.display="none"})),window.addEventListener("DOMContentLoaded",(()=>{(async()=>{try{const e=await fetch("https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json"),n=await e.json();if(!e.ok)return n;const r=n.people;(e=>{y.innerHTML="",e.forEach((e=>{y.insertAdjacentHTML("beforeend",`<div class='person'><img class='person-img' src= '${e.image}' alt='${e.name}-image'> <div class='title-area'><h2>${e.name}</h2> <i class="heart fa-regular fa-heart"></i> </div> <button class="comment-${e.id}">Comments</button><button>Reservations</button></div>`),document.querySelector(`.comment-${e.id}`).addEventListener("click",(()=>{document.getElementById("overlay-project").style.display="block",document.querySelector(".popup-image").src=`${e.image}`,document.querySelector(".popup-title").innerHTML=`${e.name}`,document.querySelector(".country").innerHTML=`Country: ${e.country}`,document.querySelector(".agency").innerHTML=`Agency: ${e.agency}`,document.querySelector(".position").innerHTML=`Position: ${e.position}`,document.querySelector(".spacecraft").innerHTML=`Spacecraft: ${e.spacecraft}`}))}))})(r)}catch(e){return e}})()}))})()})();