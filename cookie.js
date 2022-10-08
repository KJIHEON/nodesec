/*서버가 클라이언트로서 요청 받았을때 서버에서 가공을 하고 클라이언트에게 전달을 해준다.

 get메소드로 set-cookie 라는 api호출시 쿠키를 생성함
Set-Cookie를 사용하여 쿠키할당*/
app.get("/set-cookie", (req, res) => {
  const expire = new Date(); //만료기간은 expire로 관리를 하기떄문에 날짜를 생성
  expire.setMinutes(expire.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다. 분(minutes)을 리턴
  //setMinutes 시간을 지정한다 ,expire라는 값에서  getMinutes을 통해서 시간(분)을 가져온다 + 60은 60분
  //writeHead로 쿠키를 생성함
  res.writeHead(200, {   
    'Set-Cookie': `name=sparta; Expires=${expire.toGMTString()}; HttpOnly; Path=/`,
  }); //toGMTString()  = expire을 설정하기 위한 형식
//Set-Cookie라는 키값 :name=밸류; Expires 만료기간 언제까지설정; HttpOnly http에서만 사용가능
//path 어디서든 (경로) 사용가능하다         
  return res.status(200).end();
});


//쿠키만들기~~
// res.cookie()를 이용하여 쿠키할당 우리는 이거 쓰는게 좋음 직관적임
app.get("/set-cookie", (req, res) => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.
            //네임에는 name , 밸류에는 sparta
  res.cookie('name', 'sparta', {
    expires: expires
  });
  return res.status(200).end();
});

//쿠키 사용하기~~
//쿠키 파서(라이브러리)를 이용한 쿠키를 가공하고 쉽게 사용할 수 있게함
const cookieParser = require('cookie-parser'); //쿠키파서 변수에 할당
app.use(cookieParser()); //전역 미들웨어 사용(관리가 용이)

app.get("/get-cookie", (req, res) => { 
  const cookie = req.cookies; //req.cookies로 쿠키를 찾음
  console.log(cookie); // { name: 'sparta' } 빠르고 간결하게 변수를 관리
  return res.status(200).json({ cookie });
});
/*
세션 사용하기
  쿠키의 경우 서버를 재시작하거나 새로고침을 하더라도 로그인이 유지됩니다. 
  사용자의 입장에서는 편하게 사용할 수 있지만 서버의 입장에서는 상당히 위험한 상황입니다. 
  쿠키가 조작되거나 노출되어 보안적으로 문제가 발생할 수 있습니다.
  그렇다면 쿠키에는 어떠한 정보를 넣어줘야 할까요? 서버에서 
  해당하는 사용자가 누구인지 확실하게 구분할 수 있는 정보만 있다면 서버에서 해당 사용자의 유니크한 정보도 반환할 수 있겠죠?
  `/set-session` API를 호출했을 때 `name=sparta` 의 정보를 서버에 저장하고, 
  저장한 시점의 시간 정보를 쿠키로 반환받는 API와 
  `/get-session` API를 호출했을 때 쿠키의 시간 정보를 이용하여 서버에 저장된 name 정보를 출력하는 API를 만들어보겠습니다.*/
  




