if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"16107.html",revision:"73eaf0f447d25e69a00bcbb7584e9bbb"},{url:"243.html",revision:"98640de05c22acd4107b1f39334f330e"},{url:"33851.html",revision:"7cd283b9b2bd566d436d7e41bac13be8"},{url:"archives/2021/04/index.html",revision:"3e9c72f7acb697cef055abee6b0ef6bd"},{url:"archives/2021/index.html",revision:"9e0936b98ef11c15b056ec38e6b875fc"},{url:"archives/index.html",revision:"b9180e6c3bbc49431b05f626571bb61c"},{url:"categories/index.html",revision:"6b9c25154971b53e49c85b316084f7fe"},{url:"categories/编程/index.html",revision:"cc05581106f19a8aa065ce9fddabdbed"},{url:"css/index.css",revision:"b757eb3a8684fb05e730ac7301c11970"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"b1932c97f9d5e4c1748c5c5859d12514"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"tags/bilibili/index.html",revision:"40190ea6d797ba55f459ef7d447c6988"},{url:"tags/github-actions/index.html",revision:"06aa714a234ebea0a2bc399365eef010"},{url:"tags/index-1.html",revision:"709b23188daf03dad93160fe1eba44b1"},{url:"tags/index.html",revision:"727bb13e8226db70d39d9a05c6e182af"},{url:"tags/python/index.html",revision:"02a5b4bf8593680c0aabdd2b1e301f4d"},{url:"tags/编程/index.html",revision:"495e2005d56c6cf14fb3c43c48a25185"},{url:"tags/装扮机器人/index.html",revision:"57b450b1093362357e2b2a51d5279058"}],{})}));
//# sourceMappingURL=service-worker.js.map
