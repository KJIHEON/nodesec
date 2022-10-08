/*1. POST `/set-key` 를 호출했을 때, 
Request로 들어온 정보를 jwt 쿠키로 만들어 할당해주세요!
2. GET `/get-key` 를 호출했을 때, 등록된 
jwt 쿠키를 복호화해서 반환하는 API를 만들어주세요!
3. SecretKey는 `sparta`로 설정해주세요!
4. cookie-parser 라이브러리를 사용해서 구현해주세요!
5. Thunder Client로 테스트 해주세요!*/

const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const port = 8080

app.use(cookieParser())
app.use(express.json())

//쿠키 만들기(암호화)
app.post("/set-key", (req, res) => {
  const {key} = req.body;  //정보를 req.body 로 받아옴
  console.log(key)
  const token = jwt.sign({ key }, "sparta"); //그 키 값과 sparta라는 비밀키를 설정하여 쿠키로 만들어서 할당
  console.log(token)
  res.cookie('token', token) //그 토큰을 보내준다 만든 토큰을
  return res.status(200).end()
})

app.get('/get-key',(req,res)=>{
  const { token }= req.cookies //요청을 하면 지금 등록되어 있는 쿠키 값을 받아온다. 
  console.log(token)
  const {key} = jwt.decode(token); //토큰을 복호화 시킨다
  console.log(key)
  return res.status(200).json({key})
})


/*
토큰 만들기
const token = jwt.sign({ myPayloadData: 1234 }, "sparta");
console.log(token);

//토큰 복호화
const jwt = require("jsonwebtoken");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjoxMjM0fQ.6XFgtNglH9hIzz5y8jAcI0g5kDnlAvnTTbxKIcL2CHY";
const decodedValue = jwt.decode(token);

const cookieParser = require('cookie-parser'); //쿠키파서 변수에 할당
app.use(cookieParser()); //전역 미들웨어 사용(관리가 용이)

app.get("/get-cookie", (req, res) => { 
  const cookie = req.cookies; //req.cookies로 쿠키를 찾음
  console.log(cookie); // { name: 'sparta' } 빠르고 간결하게 변수를 관리
  return res.status(200).json({ cookie });
});
*/

app.listen(port,(req,res)=>{
console.log('서버실행중')
})