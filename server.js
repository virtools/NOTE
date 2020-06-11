const webpack = require("webpack");
const express = require("express");
const app = new express();
const port = 3333;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use("/dist", express.static("dist"));

app.listen(port, host, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("伺服器已啟動", host, port);
  }
});
