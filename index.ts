import * as http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { ContentType: "text/plain; charset=utf-8" });
  res.end("Hello Node.js");
});

const PORT = 8890;
server.listen(PORT, () => {
  console.log("サーバーが起動しました");
});
