if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"16107.html",revision:"73eaf0f447d25e69a00bcbb7584e9bbb"},{url:"243.html",revision:"98640de05c22acd4107b1f39334f330e"},{url:"33851.html",revision:"7cd283b9b2bd566d436d7e41bac13be8"},{url:"about/index.html",revision:"c0ef93b68e7d5a26f53da2af504e6410"},{url:"archives/2021/04/index.html",revision:"454ea350bc98226b1d537ff79db1afe2"},{url:"archives/2021/index.html",revision:"a5d74ba328815f3d025cd4f3aaa45fe3"},{url:"archives/index.html",revision:"d2f1a5de0aa5dacc3f83290125ef92ec"},{url:"categories/index.html",revision:"87fb7bc419a8d62e272d3f0c637405f1"},{url:"categories/编程/index.html",revision:"a12ae59b400a15f1439a837028ff2531"},{url:"css/index.css",revision:"b757eb3a8684fb05e730ac7301c11970"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"35b5740f0283a852ce4fdb08afc43ef7"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"ccf3d9161fc4726a24035068286c5c72"},{url:"tags/bilibili/index.html",revision:"f446931dabc51483132e411ebe96e018"},{url:"tags/github-actions/index.html",revision:"952d59109c88122e181b08f848ab6fdb"},{url:"tags/index-1.html",revision:"963b30b0aa3286465cd1cdebe59a3b19"},{url:"tags/index.html",revision:"3fe6de9605f1555050e45e8e0e9ecb1c"},{url:"tags/python/index.html",revision:"386d6b14a87ddfa5403a9334702ae663"},{url:"tags/编程/index.html",revision:"87eeec5782ac9f7a72521a62a4d05142"},{url:"tags/装扮机器人/index.html",revision:"807a87f3d4dceb649e57d99bfec154bf"}],{})}));
//# sourceMappingURL=service-worker.js.map
