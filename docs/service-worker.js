if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.6aee73d8.css",revision:null},{url:"/img/logo.d1ddfea6.svg",revision:null},{url:"/index.html",revision:"bb76f2b9ce5f8408a1a970cb6338d6a1"},{url:"/js/about.4376d0e2.js",revision:null},{url:"/js/app.e1cd486f.js",revision:null},{url:"/js/chunk-vendors.459cb86a.js",revision:null},{url:"/manifest.json",revision:"833d8182528a24c31b14f9eb0af10af2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
