// fileName: index.js

// import express framework
let express = require("express");

// initialize app express
let app = express();

// import API Router
let api_Routers = require("./DataSiswa");

// setup server
var port = process.env.PORT || 8080;

// send message for default URL
app.get("/", (req, res) =>
  res.send("Selamat Datang Di Data Center Siswa Indonesia")
);

// use API Router
app.use("/api", api_Routers);

// launch app to listen specified PORT
app.listen(port, function() {
  console.log("Runing Server Tugas-1-NodeJS on PORT: " + port);
});
