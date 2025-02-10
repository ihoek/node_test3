const express = require("express"); //express 모듈 세팅
const app = express();
const port = 3000;
const path = require("path");

let data = "";
let data_name = "";
//body parser

// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
//json
app.use(express.json());
//app.use(express.static(path.join(__dirname, "/")));
//app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 페이지 로딩 함수
app.get("/", function (req, res) {
  //res.send("Hello World!");
  res.render("main");
});

app.get("/getForm", function (req, res) {
  console.log("회원 정보 검색 GET 요청 결과", req.query, "요청왔음");
  data_name = req.query;
  res.render("search", { title: "Get 요청결과", username: req.query });
});

app.post("/postForm", function (req, res) {
  console.log("회원정보 등록 ", req.body, "요청왔음");
  data = req.body;
  res.render("result", {
    title: "post 요청결과",
    userinfo: req.body,
  });
  //console.log("data", data);
});

//userinfo 요청 받음
app.get("/userinfo", function (req, res) {
  res.json(data);
});

app.get("/username", function (req, res) {
  res.json(data_name);
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
