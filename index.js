const Koa = require('koa')
const app = new Koa()


app.use( async (ctx) => {
    ctx.body='test main project'
})

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')