const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("this is server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server mera listening on port ", port);
});
