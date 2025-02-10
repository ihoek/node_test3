const express = require("express"); //express 모듈 세팅
const app = express();
const port = 3000;
const path = require("path");

//body parser

// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
//json
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/"));

// 페이지 로딩 함수
app.get("/", function (req, res) {
  //res.send("Hello World!");
  res.render("main");
});

app.get("/getForm", function (req, res) {
  console.log(req.query, "요청왔음");
  res.render("result", { title: "Get 요청결과", userinfo: req.query });
});

app.post("/postForm", function (req, res) {
  console.log(req.body, "요청왔음");
  res.render("result", { title: "post 요청결과", userinfo: req.body });
});

app.get("/getUser", function (req, res) {
  console.log("getUser ", req.query, " 요청왔음");
  res.render("result", { title: "Get 요청결과", userinfo: req.query });
});
// app.get("/test", (req, res) => {
//   res.render("test");
// });

// app.get("/test2", (req, res) => {
//   res.render("test2");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
