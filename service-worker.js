if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"16107.html",revision:"645b2146c3732ad047cd3ed8cf4345c0"},{url:"243.html",revision:"7e46f8e9f91189583042d8f18ac47929"},{url:"33851.html",revision:"f483f0e039e4fdb166341201e3fcda65"},{url:"44265.html",revision:"6c89c73dee93a8859afae90721e66989"},{url:"about/index.html",revision:"d4002de3ed2430ed16d0aafdecf9c3f1"},{url:"archives/2021/04/index.html",revision:"64c757d601ebc61c436da917208cfddf"},{url:"archives/2021/index.html",revision:"344641dcf70cbff3081df04ca95fdc2b"},{url:"archives/index.html",revision:"9f5ccde5ef0994ddc278c34ed01445eb"},{url:"categories/index.html",revision:"d15bfae59990cd4eb65cc2572b5ba0a4"},{url:"categories/编程/index.html",revision:"eea8251ad5debcdd28d8177a44e77ca2"},{url:"css/index.css",revision:"b757eb3a8684fb05e730ac7301c11970"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"d45207d160eb1ad54bd216ea22fdc921"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"7bbc65f7ddb9abd884b02c16b109de99"},{url:"tags/bilibili/index.html",revision:"81b4b3ab236280dc7b080abfed98789d"},{url:"tags/github-actions/index.html",revision:"a4051183398bd1df57eefcb8f7f53df8"},{url:"tags/index-1.html",revision:"4d1e2d42eaa2aa8a1a13b943a6a809c6"},{url:"tags/index.html",revision:"6d4e8a455c306db43d7bd187c08621b1"},{url:"tags/python/index.html",revision:"0d0dc7b347a4db08f732054b7e0ba090"},{url:"tags/编程/index.html",revision:"cf4628d2bbf2b1cdf3993542e647b958"},{url:"tags/装扮机器人/index.html",revision:"03e468fa64ddcea9ab186a54b29c22d7"}],{})}));
//# sourceMappingURL=service-worker.js.map
