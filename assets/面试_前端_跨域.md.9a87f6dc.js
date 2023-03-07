import{_ as e,c as r,o as s,a as i}from"./app.2d7c98c1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"跨域","slug":"跨域","link":"#跨域","children":[]},{"level":2,"title":"jsonp","slug":"jsonp","link":"#jsonp","children":[]},{"level":2,"title":"CORS（Cross-Origin Resource Sharing）,跨域资源共享","slug":"cors-cross-origin-resource-sharing-跨域资源共享","link":"#cors-cross-origin-resource-sharing-跨域资源共享","children":[]},{"level":2,"title":"代理跨域请求(Nginx)","slug":"代理跨域请求-nginx","link":"#代理跨域请求-nginx","children":[]},{"level":2,"title":"基于websocket","slug":"基于websocket","link":"#基于websocket","children":[]}],"relativePath":"面试/前端/跨域.md"}'),n={name:"面试/前端/跨域.md"},o=i('<h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-hidden="true">#</a></h2><p>跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的</p><p>解决方案如下</p><h2 id="jsonp" tabindex="-1">jsonp <a class="header-anchor" href="#jsonp" aria-hidden="true">#</a></h2><p>利用了 script 不受同源策略的限制</p><p>缺点：只能 get 方式，易受到 XSS攻击</p><h2 id="cors-cross-origin-resource-sharing-跨域资源共享" tabindex="-1">CORS（Cross-Origin Resource Sharing）,跨域资源共享 <a class="header-anchor" href="#cors-cross-origin-resource-sharing-跨域资源共享" aria-hidden="true">#</a></h2><p>当使用XMLHttpRequest发送请求时，如果浏览器发现违反了同源策略就会自动加上一个请求头 origin；</p><p>后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；</p><p>浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同，匹配成功后才继续响应处理，否则报错</p><p>缺点：忽略 cookie，浏览器版本有一定要求</p><h2 id="代理跨域请求-nginx" tabindex="-1">代理跨域请求(Nginx) <a class="header-anchor" href="#代理跨域请求-nginx" aria-hidden="true">#</a></h2><p>前端向发送请求，经过代理，请求需要的服务器资源</p><p>缺点：需要额外的代理服务器</p><h2 id="基于websocket" tabindex="-1">基于websocket <a class="header-anchor" href="#基于websocket" aria-hidden="true">#</a></h2><p>websocket 是 Html5 一种新的协议，基于该协议可以做到浏览器与服务器全双工通信，允许跨域请求</p><p>缺点：浏览器一定版本要求，服务器需要支持 websocket 协议</p>',17),a=[o];function t(c,l,h,p,d,_){return s(),r("div",null,a)}const k=e(n,[["render",t]]);export{u as __pageData,k as default};
