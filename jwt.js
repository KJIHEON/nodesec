/*- 1) 간략한 정리!
    - JSON 형태의 데이터를 안전하게 교환하여 사용할 수 있게 해줍니다.
    - 인터넷 표준으로서 자리잡은 규격입니다.
    - 여러가지 암호화 알고리즘을 사용할 수 있습니다.
    - `header.payload.signature` 의 형식으로 3가지의 데이터를 포함합니다. 
    (개미처럼 머리, 가슴, 배)
    때문에 JWT 형식으로 변환 된 데이터는 항상 2개의 `.` 이 포함된 데이터여야 합니다

  로그인을 했다면 토큰이 존재 한다
- header(머리)는 signature(배)에서 어떤 암호화를 사용하여 생성된 데이터인지 표현합니다.
- payload(가슴)는 개발자가 원하는 데이터를 저장합니다.
- signature(배)는 이 토큰이 변조되지 않은 정상적인 토큰인지 확인할 수 있게 도와줍니다

JWT라이브러리

npm init
npm i jsonwebtoken -S   */
// json 라이브러리 불러와서 토큰 넣어주기
//복호화 하기
// const jwt = require("jsonwebtoken");    
                                                   //시크릿 키가 들어감(매우 중요함 노출 X)
// const token = jwt.sign({ myPayloadData: 1234 }, "mysecretkey");
// console.log(token);

//복호화 확인 myPayloadData :1234
// const jwt = require("jsonwebtoken");

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjoxMjM0fQ.6XFgtNglH9hIzz5y8jAcI0g5kDnlAvnTTbxKIcL2CHY";
// const decodedValue = jwt.decode(token);

//디코드
// const jwt = require("jsonwebtoken");

/*const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjoxMjM0fQ.6XFgtNglH9hIzz5y8jAcI0g5kDnlAvnTTbxKIcL2CHY";
const decodedValue = jwt.verify(token, "myesecretkey");
- 보통 암호화 된 데이터는 클라이언트(브라우저)가 전달받아 다양한 수단(쿠키, 로컬스토리지 등)을 통해 저장하여 API 서버에 요청을 할 때 서버가 요구하는 HTTP 인증 양식에 맞게 보내주어 인증을 시도합니다!
- 비유하자면, 놀이공원의 자유이용권과 비슷한거죠!
회원가입: 회원권 구매
로그인: 회원권으로 놀이공원 입장
로그인 확인: 놀이기구 탑승 전마다 유효한 회원권인지 확인
내 정보 조회: 내 회원권이 목에 잘 걸려 있는지 확인하고, 내 이름과 사진, 바코드 확인*/

/*

1.Refresh Token
Refresh Token은 Access Token 처럼 해당하는 사용자의 모든 인증 정보를 관리하는 것이 아닌, 
특정한 사용자가 Access Token을 발급받을 수 있게 하기 위한 용도로만 사용됩니다.

2.Access Token
Access Token은 사용자의 권한이 
확인(ex: 로그인) 되었을 경우 해당 사용자를 인증하는 용도로 발급하게됩니다*/
