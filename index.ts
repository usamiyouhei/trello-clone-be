import express from "express";

const app = express();
app.use(express.json());
const PORT = 8890;

app.get("/", (req, res) => {
  res.send("Hello Web Server");
});

app.get("/test", (req, res) => {
  res.send("Hello Test");
});
app.get("/users/:id", (req, res) => {
  res.send(
    `User Id is ${req.params.id}.Name is ${req.query.name}.Age is ${req.query.age}.Sex is ${req.query.sex}`,
  );
});

// app.post("/", (req, res) => {
//   res.send("This is post request");
// });
app.post("/", (req, res) => {
  res.send(req.body);
});

app.put("/users/:id", (req, res) => {
  res.send(req.body);
});

app.delete("/users/:id", (req, res) => {
  res.send(req.params.id);
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
