const express = require("express"); //express 모듈 세팅
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
//app.set("views", "/views");
app.set("views", path.join(__dirname, "/"));
// 페이지 로딩 함수
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/test2", (req, res) => {
  res.render("test2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
