(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\r\n  margin: 0;\r\n  background-color: #e5e5f7;\r\n  background-image: radial-gradient(#444cf7 0.8500000000000001px, transparent 0.8500000000000001px), radial-gradient(#444cf7 0.8500000000000001px, #e5e5f7 0.8500000000000001px);\r\n  background-size: 34px 34px;\r\n  background-position: 0 0, 17px 17px;\r\n}\r\n\r\nheader {\r\n  height: 10vh;\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-around;\r\n}\r\n\r\n#astronaut {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 30px;\r\n  margin-top: 50px;\r\n  padding: 5%;\r\n}\r\n\r\ni.fas.fa-user-astronaut {\r\n  transform: scale(3);\r\n}\r\n\r\nform {\r\n  width: 60vw;\r\n  padding: 10px;\r\n}\r\n\r\na {\r\n  font-size: x-large;\r\n  text-decoration: none;\r\n  color: #586b6a;\r\n  font-weight: 500;\r\n  padding: 5px;\r\n}\r\n\r\n.person {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #5fb8b5;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n  gap: 10px;\r\n}\r\n\r\n.person:hover {\r\n  transition: all 300ms ease-in-out;\r\n  transform: scale(1.02);\r\n  opacity: 1;\r\n  border-radius: 10px;\r\n}\r\n\r\n.person-img {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.title-area {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.heart {\r\n  color: tomato;\r\n}\r\n\r\n.fixed-top {\r\n  z-index: 2;\r\n}\r\n\r\n.overlay-project {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  padding: 4rem;\r\n  padding-top: 0;\r\n  background-color: #c1c7d0e7;\r\n  overflow-x: scroll;\r\n  z-index: 4;\r\n}\r\n\r\n.info > p {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-size: x-large;\r\n}\r\n\r\n.displayover {\r\n  display: flex;\r\n  padding: 60px;\r\n  height: fit-content;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transform: scale(0.7);\r\n  \r\n}\r\n\r\n.flexbox-popup {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.info {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  align-items: center;\r\n  justify-items: center;\r\n  width: 100vw;\r\n}\r\n\r\n.popup-title {\r\n  text-align: center;\r\n}\r\n\r\nh2.comment-title {\r\n  text-align: center;\r\n}\r\n\r\n.close {\r\n  transform: scale(3);\r\n  align-items: flex-end;\r\n}\r\n\r\nimg.popup-image {\r\n  width: 20vh;\r\n}\r\n\r\nfooter {\r\n  bottom: 0;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  #astronaut {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1px;\r\n    margin-top: 60px;\r\n  }\r\n\r\n  i.fas.fa-user-astronaut {\r\n    transform: scale(1);\r\n  }\r\n\r\n  a {\r\n    font-size: x-small;\r\n  }\r\n\r\n  .person {\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y="lv3bo7lVqNrhL88bp1Z3",g=document.getElementById("comment-submit"),v=async n=>{try{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${y}/comments?item_id=${n}`),t=await e.json();if(!e.ok)return t;const r=t;return(n=>{const e=document.getElementById("comments-data");n.forEach((n=>{e.insertAdjacentHTML("beforeend",`<b class="comm">${n.creation_date} : ${n.username} : ${n.comment} </b><br>`),(()=>{const n=document.querySelectorAll(".comm");document.getElementById("comment-Count").innerHTML=`${n.length}`})()}))})(r),r}catch(n){return n}};g.addEventListener("submit",(n=>{n.preventDefault();const e=document.getElementById("name"),t=document.getElementById("comment"),r=document.getElementById("item-id"),o={item_id:r.value,username:e.value,comment:t.value};e.value="",t.value="",r.value="",(async n=>{try{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${y}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});e.ok?v(n.item_id):e.status}catch(n){return n}})(o)}));const h=document.getElementById("astronaut"),b=n=>{h.innerHTML="",n.forEach((n=>{h.insertAdjacentHTML("beforeend",`<div class='person p-3 mb-2 bg-light text-white"'><img class='person-img' src= '${n.image}' alt='${n.name}-image'> <div class='title-area'><h2>${n.name}</h2> <i class="heart fa-regular fa-heart" id="${n.id}">0</i> </div> <button class="comment-${n.id} btn btn-primary">Comments</button><button class="btn btn-primary">Reservations</button></div>`),document.getElementById(`${n.id}`).addEventListener("click",(()=>{(async n=>{try{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${y}/likes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok)return e.status;const t=document.getElementById(`${n.item_id}`),r=Number(document.getElementById(`${n.item_id}`).innerText);t.innerHTML=r+1}catch(n){return n}})({item_id:n.id})})),document.querySelector(`.comment-${n.id}`).addEventListener("click",(()=>{document.getElementById("overlay-project").style.display="block",document.querySelector(".popup-image").src=`${n.image}`,document.querySelector(".popup-title").innerHTML=`${n.name}`,document.querySelector(".country").innerHTML=`Country: ${n.country}`,document.querySelector(".agency").innerHTML=`Agency: ${n.agency}`,document.querySelector(".position").innerHTML=`Position: ${n.position}`,document.querySelector(".spacecraft").innerHTML=`Spacecraft: ${n.spacecraft}`,document.getElementById("item-id").setAttribute("value",`${n.id}`),v(n.id)}))})),(()=>{const n=document.querySelectorAll(".person").length;document.getElementById("count-items").innerHTML=`(${n})`})()};document.querySelector(".close").addEventListener("click",(()=>{document.getElementById("overlay-project").style.display="none",document.getElementById("comments-data").innerHTML="",document.getElementById("comment-Count").innerHTML="0"})),window.addEventListener("DOMContentLoaded",(()=>{(async()=>{try{const n=await fetch("https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json"),e=await n.json();if(!n.ok)return e;const t=e.people;b(t),(async()=>{try{const n=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${y}/likes`),e=await n.json();if(!n.ok)return e;const t=e;t.forEach((n=>{document.getElementById(`${n.item_id}`).innerHTML=`${n.likes}`}))}catch(n){return n}})()}catch(n){return n}})()}))})()})();