const fetch = require("node-fetch");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(express.static("public"));

app.get("/submit", async (req, res) => {
  console.log(`Received`);
});

app.get("/reaction", async (req, res) => {
  res.render("reaction", { reaction: req.query.react });
});

app.use("/", async (req, res) => {
  res.render("index");
});

app.listen(3000, async () => {
  console.log(`Listening on http://localhost:3000/`);
});
