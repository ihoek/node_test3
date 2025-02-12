const express = require("express"); //express 모듈 세팅
const app = express();
const port = 3000;
const path = require("path");

let data = "";
let data_name = "";
const file_list = [
  "aaww1334",
  "asd14123",
  "asssjsjdj2",
  "dddw123",
  "ddjwjwjaa111",
  "djdwjw1",
  "djwjaaaw1",
  "dnansndjw1",
  "dwdwds1112",
  "dwdwwd1231",
  "hshsh12",
  "jdjsdjkkw1",
  "jsjdhdjwh1",
  "like21",
  "nnsd221",
  "nodes1",
  "user12",
  "user22221",
  "wdwdwddw1122313",
  "wdwsss124",
];
const reversed = file_list.reverse();
const userData = { id: "123", pw: "123" };
//body parser

// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
//json
app.use(express.json());

app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 페이지 로딩 함수
app.get("/", function (req, res) {
  //res.send("Hello World!");
  res.render("main");
});

//GET
app.get("/getForm", function (req, res) {
  console.log("회원 정보 검색 GET 요청 결과", req.query, "요청왔음");
  data_name = req.query;
  res.render("search", { title: "Get 요청결과", username: req.query });
});

//POST
app.post("/postForm", function (req, res) {
  console.log("회원정보 등록 ", req.body, "요청왔음");
  data = req.body;
  res.render("result", {});
  //console.log("data", data);
});

//userinfo 요청 받은 경우
app.get("/userinfo", function (req, res) {
  res.json(data);
});

//username 요청 받은 경우
app.get("/username", function (req, res) {
  res.json(data_name);
});

app.get("/axiosget", function (req, res) {
  console.log(req.query);
  res.send({ title: "왔다" });
});

app.post("/axiospost", function (req, res) {
  console.log(req.body);
  res.send({ title: "왔다" });
});

//axios test1 페이지
app.get("/axios_test1", (req, res) => {
  res.render("axios_test1");
});

//axios test2 페이지
app.get("/axios_test2", (req, res) => {
  res.render("axios_test2");
});
// axios_test2 POST 요청 처리
app.post("/axios_test2", (req, res) => {
  const { user_id, user_pw } = req.body;

  if (user_id === userData.id && user_pw === userData.pw) {
    res.json({
      success: true,
      message: "로그인 성공",
    });
  } else {
    res.json({
      success: false,
      message: "로그인 실패",
    });
  }
});
//버튼
for (let i = 0; i < 20; i++) {
  //console.log(file_list[i]);
  app.get(`/${file_list[i]}`, function (req, res) {
    res.render(`${reversed[i]}`, { title: `${reversed[i]}입니다` });
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
