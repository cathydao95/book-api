import express from "express";
import cors from "cors";
import path from "path";
import books from "./books.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
