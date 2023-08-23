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

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
