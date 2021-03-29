const Router = require("koa-router");

// Prefix all routes with: /books

const router = new Router({
  prefix: "/books",
});

let books = [
  { id: 101, name: "Fight Club", author: "Chuck Palahniuk" },
  { id: 102, name: "Sharp Objects", author: "Gillian Flynn" },
  { id: 103, name: "Frankenstein", author: "Mary Shelley" },
  { id: 101, name: "Into The Wild", author: "John Krakauer" },
];

// Routes
router.get("/", (ctx, next) => {
  ctx.body = books;
  next();
});

// Route by Id
router.get("/:id", (ctx, next) => {
  let book = books.filter((p) => p.id == ctx.params.id);
  console.log(book);

  if (book.length > 0) {
    ctx.body = book;
  } else {
    ctx.response.status = 404;
    ctx.body = "Book not found";
  }
  next();
});

module.exports = router;
