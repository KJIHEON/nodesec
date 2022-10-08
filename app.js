
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
const Todo = require('./models/todo');


mongoose.connect("mongodb://localhost:27017/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));


const port = 8080
const app = express();

router.get('/',(req,res)=>{
  res.send('Hi')
})

router.get("/todos", async (req, res) => {
  const todos =  await Todo.find().sort('-order').exec() 
  //디비에서 목록을 찾는데 오더를 기준으로 내린차순 .exec는 실행 하곘다 라는거인듯 없어두됨
  res.send({todos})
});

//할일 추가하기
router.post('/todos', async (req,res)=>{
  const { value } = req.body //밸류를 찾아옴
  //이미 값이 저장되어 있을수도있으니깐 디비에 데이터부터 확인 해서 제일
  //높은값 보다 높게 넣어야함
  const maxOrderTodo = await Todo.findOne().sort('-order').exec(); //오더를 기준으로 내림차순
  //exec()넣어서 실행한다(결과값이 프로미스 값이기 때문에 await 써야함)
  let order = 1 ; //1부터 시작하니깐 1을 넣어줘야함
  //없으면 빈캆이기 때문에 1부터 시작
  if (maxOrderTodo) { //maxOrderTodo가져와서 있는지 없는지 검사한다. 
    order = maxOrderTodo.order +1 //큰값의 오더값에 +1해서 중복이 없게끔함
  } //const = maxOrderTodo ? maxOrderTodo+1 : 1 줄일수도 있음
  const todo = new Todo({value, order}) //Todo 모델을 만들어서 한번에 저장
  await todo.save(); //세이브 하는데 프로미스라서 await 넣어줌
  res.send({todo}) //프론트 앤드로 보내줌
})



//수정하기
router.patch('/todos/:todoId',async (req,res)=>{
  const { todoId } = req.params //아이디값 받아옴
  const {order, value, done} = req.body
  const todo = await Todo.findById(todoId).exec(); //같은 아이디 값을 가져옴
  if (order){ //오더가 있다면
    const targetTodo = await Todo.findOne({order}).exec(); //오더를 찾아온다
    if (targetTodo) { //찾아온 오더값이 있으면
      targetTodo.order = todo.order //찾아온 오더값을 지금 오더값으로 바꿔준다
      await targetTodo.save(); //저장 
    }
    todo.order = order; //나는 바디의 오더값으로 바꿔줌
  } else if(value) { //벨류(할일)은 
    todo.value = value //바디로 받아온 벨류
  }else if(done !== undefined){ //던값이 비어있지 않다면 
    todo.doneAt = done ? new Date() : null;  //비어있지 않다면 true, new Date() 들어감 ,아니면 null이 들어감
  }
await todo.save();
res.send({})
})


/// 삭제하기
router.delete('/todos/:todoId', async (req,res)=>{
  const { todoId } = req.params
   await Todo.deleteOne({todoId}).exec()
   res.send({"msg":"삭제완료!!"})
})

app.use("/api", bodyParser.json(), router);
app.use(express.static("./assets"));

app.listen(port, () => {
  console.log("서버가 켜졌어요!");
});


//set-session
let session = {}; //빈객체 생성 
app.get('/set-session', function (req, res, next) {
  const name = 'sparta';
  const uniqueInt = Date.now();
        //별도의 시간을 가짐
  session[uniqueInt] = { name };
        //키 값넣고      밸류값 넣음
  res.cookie('sessionKey', uniqueInt);
        
  return res.status(200).end();
});


app.get('/get-session', function (req, res, next) {
  const { sessionKey } = req.cookies;
  //세션키에 해당하는 값을 req로 받아온다
  const name = session[sessionKey]; //네임이라는 변수에 담는다.
  return res.status(200).json({ name });
});
