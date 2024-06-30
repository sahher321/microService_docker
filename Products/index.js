const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("this is product server");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("product server listeining on port ", port);
});
