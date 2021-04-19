### CommonJS
> 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
>CommonJS规范---是通过module.exports定义的，在前端浏览器里面并不支持module.exports,通过node.js后端使用的。Nodejs端是使用CommonJS规范的，前端浏览器一般使用AMD、CMD、ES6等定义模块化开发的
### AMD
> `Asynchronous Module Definition` 它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
> 主要用于浏览器
在没有使用AMD规范(require.js)的时候，我们通过多个script标签来按照依赖顺序依次引入js文件，
这样不但增加了HTTP请求数，更增加了维护的难度，容易出错
### CMD
是SeaJS在推广过程中对模块定义的规范化产出，是一个同步模块定义，是SeaJS的一个标准，SeaJS是CMD概念的一个实现，SeaJS是淘宝团队提供的一个模块开发的js框架.
通过define()定义，没有依赖前置，通过require加载jQuery插件，CMD是依赖就近，在什么地方使用到插件就在什么地方require该插件，即用即返，这是一个同步的概念

### ES6特性，模块化---export/import对模块进行导出导入的
