const express = require("express");
const app = express();

const VERSION = "v3";

app.get("/", (req, res) => {
  res.send(`Hello from Sample App 🌐 Version: ${VERSION}`);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", version: VERSION });
});

app.listen(3000, () => {
  console.log(`App running on port 3000 | Version: ${VERSION}`);
});
