import express from "express";

const app = express();
const PORT = 8890;

app.get("/", (req, res) => {
  res.send("Hello Web Server");
});

app.get("/test", (req, res) => {
  res.send("Hello Test");
});

app.listen(PORT, () => {
  console.log("サーバーが起動しました");
});

// import * as http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { ContentType: "text/plain; charset=utf-8" });
//   res.end("Hello Web server");
// });

// const PORT = 8890;
// server.listen(PORT, () => {
//   console.log("サーバーが起動しました");
// });
