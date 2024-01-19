// //Import express
// const express = require("express"); 
// //Membuat object express
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express!");
// });

// //Mendefinisikan port
// app.listen(3000);

// //Membuat routing data student
// app.get("/students", (req, res) => {
//   res.send("Menampilkan semua students");
// });
// app.post("/students", (req, res) => {
//   res.send("Menambahkan data students");
// });
// app.put("/students", (req, res) => {
//   res.send("Mengedit students");
// });
// app.delete("/students", (req, res) => {
//   res.send("Menghapus data students");
// });

// import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
app.listen(3000);