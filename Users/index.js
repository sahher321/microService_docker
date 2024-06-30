const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("this is Users Service");
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("User server listening on port ", port);
});
