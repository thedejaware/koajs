const Koa = require('koa');
const koaBody = require('koa-body');

// Create app instance of Koa
const app = new Koa();

// middleware funcionts
app.use(koaBody());

// Require router
let books = require('./routes/books.js');

// Use the Router on the sub route /books
app.use(books.routes());

// Koa js ile CTX kullanılarak request ve response objeleri encapsulate edilmiştir.
// app.use(async ctx => {
//     ctx.body = "Hello Bro"
// });

// request and response objects in ExpressJS
//app.use((request, response) => {
	// ... rest of the route
//});

app.listen(3002, () => {
    console.log("Koa server started.");
});


