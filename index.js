// npm init -y
// npm install express body-parser axios

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

const users = [
  { username: "funke", password: "pass" },
  { username: "funke2", password: "pass2" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.send({ status: "success", message: "Login successful!" });
  } else {
    res
      .status(401)
      .send({ status: "error", message: "Invalid username or password." });
  }
});

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});

// node index.js
