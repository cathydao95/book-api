import express from "express";
import cors from "cors";
import path from "path";
import BOOKS from "./books.js";

const app = express();

const port = 3000;

app.use(cors());

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", (req, res) => {
  res.json(BOOKS);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const book = BOOKS.find((book) => book.id === id);
  if (!book) {
    res.status(404).send("Book not available");
  }
  res.json(book);
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(`Sorry, this is an invalid URL  - this API is only for books`);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
