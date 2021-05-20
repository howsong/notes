## 跨域解决方案
- jsonp 利用script标签不受同源策略影响的特性
- CORS (Cross-Origin Resource Sharing)
- Node代理
- Nginx反向代理
- websocket
- window.postMessage
- document.domain + Iframe
- window.location.hash + Iframe
- window.name + Iframe
- 修改浏览器安全配置

### 1、CORS
> 跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器「不同的域、协议或端口」请求一个资源时，资源会发起一个「跨域 HTTP 请求」
### 2、Node正向代理
> 利用服务端不存在跨域限制的原理，使用node创建同源的服务器，客户端直接调用node，node转发到业务的服务器
### 3、WebSocket
> WebSocket实现原理不是http，不受浏览器同源策略限制
### 4、Nginx反向代理
> 正向代理代理客户端，反向代理代理服务器
### 5、postMessage
> postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递

## 简单请求和复杂请求
> 满足一下条件的即为简单请求
- 请求方法：GET、POST、HEAD
- 除了以下的请求头字段之外，没有自定义的请求头
  + Accept
  + Accept-Language
  + Content-Language
  + Content-Type
  + DPR
  + Downlink
  + Save-Data
  + Viewport-Width
  + Width
- Content-Type的值只有以下三种(Content-Type一般是指在post请求中，get请求中设置没有实际意义)
  + text/plain
  + multipart/form-data
  + application/x-www-form-urlencoded
- 请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器 (未验证)
  XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问
- 请求中没有使用 ReadableStream 对象 (未验证)