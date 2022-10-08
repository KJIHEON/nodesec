const mongoose = require("mongoose")
//스키마는 클래스 라서 new를 써야함
const TodoScema = new mongoose.Schema({
    value : String, //할일하기 양치하기라서
    doneAt : Date, //할일목록이 있다고 가정 체크한시간 시간 체크안하면 null
    order : Number //처음추가시 1로시작
})

TodoScema.virtual("todoId").get(function(){
  return this._id.toHexString();
})
TodoScema.set("toJSON",{
      virtuals : true,
})
module.exports = mongoose.model("todo",TodoScema)