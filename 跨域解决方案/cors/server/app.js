const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
app.use(cors({
  headers:{
    'Access-Control-Allow-Origin': 'http://localhost:3007'
  }
}))

// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", ctx.headers.origin);
//   ctx.set("Access-Control-Allow-Credentials", true);
//   ctx.set("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
//   ctx.set(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, cc"
//   );
//   if (ctx.method === "OPTIONS") {
//     ctx.status = 204;
//     return;
//   }
//   await next();
// })
app.use(async (ctx) => {
  console.log(ctx)
  if (ctx.url === '/api/cors/list' && ctx.method === 'POST') {
    ctx.body = { data: [{ label: '苹果', value: 'apple' }] }
  }
})

const PORT = 8080
console.log(`服务运行成功，端口号：${PORT}`)
app.listen(PORT)
