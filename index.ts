import * as http from "http";

const serveer = http.createServer((req, res) => {
  res.writeHead(200, { ContentType: "text/plain; charset=utf-8" });
});
