const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));

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

app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;
