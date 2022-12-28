# 强缓存
Expires(HTTP/1.0)和Cache-Control(HTTP1.1)，其中Cache-Control优先级高于Expires
位于请求/响应头

## Expires

```
Expires: Wed, 22 Oct 2018 08:41:00 GMT
```
由于Expires受制于客户端时间，修改客户端时间可能导致缓存失效


## Cache-Control
请求/响应头，缓存控制字段，精确控制缓存策略 这里涉及到的字段是max-age,Cache-Control还有其他字段

# 协商缓存  
1. 没有 Cache-Control 和 Expires
2. Cache-Control 和 Expires 过期
3. 设置了 no-cache


如果有更新即更新缓存 200
没有缓存则更新浏览器缓存有效期 304


## ETag 









## 对比HTTP1.x
使用HTTP/1.x，浏览器可以完全控制资源加载顺序。每个连接一次只能支持一个资源请求，服务器会尽快返回请求的内容。浏览器可以通过决定何时请求资源以及打开多少个并行连接来安排请求

1.HTTP 协议老的标准是HTTP/1.0，为了提高系统的效率，HTTP 1.0规定浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接，服务器完成请求处理后立即断开TCP连接，服务器不跟踪每个客户也不记录过去的请求。即无状态，并且HTTP1的连接无法复用导致每一次请求都会经历三次握手和四次挥手

2.