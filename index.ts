import express from "express";
import { AppDataSource } from "./datasource";
import { User } from "./user.entity";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

const PORT = 8899;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/test", (req, res) => {
  res.send("Hello Test");
});
// app.get("/users/:id", (req, res) => {
//   res.send(
//     `User Id is ${req.params.id}.Name is ${req.query.name}.Age is ${req.query.age}.Sex is ${req.query.sex}`,
//   );
// });

// app.post("/", (req, res) => {
//   res.send("This is post request");
// });
app.post("/", (req, res) => {
  res.send(req.body);
});

// app.put("/users/:id", (req, res) => {
//   res.send(req.body);
// });

app.delete("/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = new User();
  user.name = name;
  user.email = email;

  const UserRepository = AppDataSource.getRepository(User);
  const newUser = await UserRepository.save(user);

  res.json(newUser);
});

app.get("/users", async (req, res) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: parseInt(id) });
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userRepository = AppDataSource.getRepository(User);

  const existingUser = await userRepository.findOneBy({ id: parseInt(id) });
  existingUser!.name = name;
  existingUser!.email = email;

  const updatedUser = await userRepository.save(existingUser!);
  res.json(updatedUser);
});

app.listen(PORT, () => {
  console.log("サーバーが起動しました");
});

AppDataSource.initialize().then(() => {
  console.log("データベースに接続しました");
});
app.use(express.static("public"));
// import * as http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { ContentType: "text/plain; charset=utf-8" });
//   res.end("Hello Web server");
// });

// const PORT = 8890;
// server.listen(PORT, () => {
//   console.log("サーバーが起動しました");
// });
