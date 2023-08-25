import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import BOOKS from "./books.js";

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/books", (req, res) => {
  res.status(200).json(BOOKS);
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

app.post("/add", (req, res) => {
  console.log(req.body);
  const { id, title, author, img, summary } = req.body;
  if (!title || !author || !img || !summary) {
    return res
      .status(400)
      .send({ success: false, msg: "Please provide all values" });
  }
  let addedBook = { id, title, author, img, summary };
  BOOKS.push(addedBook);
  return res.status(201).json([...BOOKS]);
});

app.put("/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const { id, title, author, img, summary } = req.body;
  const book = BOOKS.find((book) => book.id === bookId);
  if (!book) {
    return res
      .status(404)
      .json({ success: false, msg: `No book with id ${bookId}` });
  }
  const updatedBooks = BOOKS.map((book) => {
    if (book.id === bookId) {
      return { ...book, id, title, author, img, summary };
    }
    return book;
  });
  return res.status(200).json([...updatedBooks]);
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(`Sorry, this is an invalid URL  - this API is only for books`);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
