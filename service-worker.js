if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,c,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return i;case"module":return a;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"16107.html",revision:"9371b3658c780528ebff796cb5423a61"},{url:"243.html",revision:"efa44ec3956553fea962db7caa03f864"},{url:"33851.html",revision:"dac9aa7844d4ac5e7bca5c6491fceb1d"},{url:"archives/2021/04/index.html",revision:"6cdc678964c8fbf5c40a7862cd606552"},{url:"archives/2021/index.html",revision:"cfe50ee751837f15074b52a0d2368256"},{url:"archives/index.html",revision:"ff40451089f7b6fc685c72d914098f0b"},{url:"css/index.css",revision:"b757eb3a8684fb05e730ac7301c11970"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"d82adb030930e65e216c87562e723ff4"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"}],{})}));
//# sourceMappingURL=service-worker.js.map
