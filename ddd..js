// 객체 리터널
// 리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법입니다. 

// 여기서 객체 리터럴은 객체를 생성하기 위한 표기법입니다.

// 객체 리터럴은 객체를 생성하기 위해 Class를 먼저 선언하고 
// new 연산자와 함께 생성자를 호출할 필요가 없이 
// 일반적인 숫자, 문자열을 만드는것과 유사하게 객체를 생성할 수 있습니다.
// let objectLiteral = {
//   key: 'Value',
//   helloWorld: function () {
//       return "Hello world";
//   }
// };

// 객체 리터널 (예제)
// const calculator = {
//   add: function (a, b) { return a + b; },
//   sub: function (a, b) { return a - b; },
//   mul: function (a, b) { return a * b; },
//   div: function (a, b) { return a / b; },
// }

// console.log(calculator.add(3,2)); // 5
// console.log(calculator.sub(3,2)); // 1
// console.log(calculator.mul(3,2)); // 6
// console.log(calculator.div(3,2)); // 1.5
 


// 프로퍼티(Property) 란?
// 객체의 상태를 나타내는 값(Data)입니다.

// 프로퍼티는 키(Key)와 값(Value)으로 구성되어 있습니다.
// const human = {
//   // 프로퍼티 키: 'name', 프로퍼티 값: '이용우' 
//   name: '이용우',
//   // 프로퍼티 키: 'human age', 프로퍼티 값: 28 
//   'human age': 28
// }

// 메서드(Method) 란?   
// 프로퍼티를 참조하고 조작할 수 있는 동작(behavior)을 나타냅니다.
// 객체의 프로퍼티 값이 함수로 구성되어 있을 경우 메서드(Method)라고 부릅니다.

// 구조 분해 할당(Destructuring assignment) 이란?  
//   ES6에서 새롭게 도입한 문법이며 객체(Object) 나 배열(List)을 변수로 분해'할 수 있습니다.
// 객체를 분해할 때에는 반드시 변수명과 객체의 프로퍼티 이름이 일치해야 합니다.
// 프로퍼티의 이름이 유효한 식별자인 프로퍼티만 분해 후 할당됩니다.

// const obj = { name: "이용우", age: 28, tech: "Node.js" };

// const { name, age, tech, hair } = obj;
// console.log(name); // 이용우
// console.log(age); // 28
// console.log(tech); // Node.js
// console.log(hair); // undefined: obj에는 "hair" 프로퍼티가 존재하지 않습니다.

// - 배열(Array) 구조 분해 할당
    
// 배열을 분해할 때에는 변수 이름을 마음대로 선언할 수 있고, 배열의 순서대로 할당됩니다.
// 배열 구조 분해 할당으로 선언한 변수를 제외한 나머지 배열의 요소는 할당되지 않습니다.
// const arr = ["Node.js", "React", "Spring"];

// const [backEnd, frontEnd, backEnd2] = arr;
// console.log(backEnd); // Node.js
// console.log(frontEnd); // React
// console.log(backEnd2); // Soring

// - 에러 핸들링(Error handling) 이란?
// 에러 핸들링은 에러를 관리하는 방법이고, 예상치 못한 상황에 대처하는 방식입니다.   
// 에러는 예상할 수 있는 에러와 예상치 못한 에러로 구분할 수 있는데, 
// 일반적인 어플리케이션을 설계할 때에는 예상치 못한 에러 상황이 더욱 많이 일어날 것으로 가정해야 합니다.    
// 프로그래머가 작성한 코드에서 예상치 못한 에러가 일어날 가능성은 언제나 존재하고, 
// 이러한 에러 상황을 대비해 언제든지 처리할 수 있어야 합니다.

// - throw
    
// 위에서 에러를 핸들링하는 과정만 공부하였다면, 에러는 무조건 차단하고 발생시키면 안되는 걸까요?
// 아닙니다. 프로그래머의 입장에서 에러는 고의로 에러를 발생시키기도 해야합니다.
// 예를 들어서 은행 어플리케이션의 현금 인출 서비스를 만든다고 할 때, 
// 계좌의 잔고가 요청받은 금액보다 적다면 현금 인출을 막고 예외를 발생시켜야겠죠? 이럴때 사용하는 것이 `throw`입니다.

// trow를 호출하면 그즉시 현재 실행되고 있는 함수는 실행을 멈추게됩니다
// function withdraw(amount, account) {
//   if (amount > account.balance)
//     throw new Error("잔고가 부족합니다.");
//   account.balance -= amount;
// 	console.log(`현재 잔고가 ${account.balance}남았습니다.`); // 출력되지 않음
// }

// const account = { balance: 1000 };
// withdraw(2000, account);

// // Error: 잔고가 부족합니다.

// - finally
    
// `try` 에서는 HTTP연결이 되고 있거나 파일과 같은 특정한자원을 가지고 처리할 때가 있습니다. 하지만 해당 자원을 계속 가지고 있으면, 
// 무의미한 메모리를 차지하게 될 것 이므로 에러 여부와 상관없이 일정 시점에서는 해당 자'을 삭제 시켜야합니다.
// 그렇다면 이 자원을 삭제하는 시점은 언제가 되어야 할까요? 
// 에러가 언제든지 발생할 수 있는 `try`? 아니면 에러가 일어났을 때 실행되는 `catch`? 이런 상황에서는 `finally`가 필요합니다.
// `finally`는 에러가 발생했는지 여부와 상관없이 언제든지 실행됩니다
// function errorException(isThrow) {
//   try {
//     console.log('자원을 할당하였습니다.');
//     if (isThrow) throw new Error();
//   } catch (error) {
//     console.log('에러가 발생했습니다.');
//   } finally {
//     console.log('자원을 제거하였습니다.');
//   }
// }

// errorException(false);
// // 자원을 할당하였습니다.
// // 자원을 제거하였습니다.
// errorException(true);
// // 자원을 할당하였습니다.
// // 에러가 발생했습니다.
// // 자원을 제거하였습니다.

// class

// 클래스는 정보를 묶는 것입니다!

// 현실과 비슷한 개념(객체)을 나타내기 위한 도구를 클래스(Class)라고 부릅니다.
// 클래스는 미리 정의해놓으면 필요할 때마다 해당 클래스로 동일한 틀을 가진 객체를 만들 수 있습니다.
// 여기서 동일한 클래스를 이용해 생성한 객체를 인스턴스(Instance)라고 부릅니다.
// class User { 
// }

// const user = new User();
// user.name = "하이염";
// user.age = 28;
// user.tech = "Node.js";

// console.log(user.name); // 이
// console.log(user.age); // 28
// console.log(user.tech); // Node.js

// 생성자(Constructor)

//  클래스 내부에서 `constructor()`로 정의한 메서드를 생성자라고 부릅니다.
// 미리 정의한 클래스를 기반으로 인스턴스를 생성할 때 Javascript 내부에서 호출되는 메서드인데요. 
// 아래와 같이 사용할 수 있습니다.
// class User {
//   constructor(name, age, tech) { // User 클래스의 생성자
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
//   }
// }

// const user = new User("이용우", 28, "Node.js"); // user 인스턴스 생성

// console.log(user.name); // 이용우
// console.log(user.age); // 28
// console.log(user.tech); // Node.js


// this와 프로퍼티(Property)
// 우리가 바꾸고 싶은 건 빵틀의 값이 아니라 실제 빵의 값입니다.
// this 라고 표시함으로써, 빵틀 전체의 값을 바꾸는게 아니라 빵 하나의 값만 바꾸는 것이죠!

// 생성자의 바디에서 this 키워드를 사용합니다. 이 this는 클래스를 사용해 만들어 질 객체 자신을 의미하고 
// this 뒤에 붙는 name, age, tech는 클래스를 이용해서 만들어질 객체의 속성(Propety)입니다.

// class User {
//   constructor(name, age, tech) { // User 클래스의 생성자
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
//   }
// }
// const user = new User("이용우", "28", "Node.js"); // user 인스턴스 생성
// console.log(user.name); // 이용우
// console.log(user.age); // 28
// console.log(user.tech); // Node.js


// - 메서드(Method)
    
// 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있는데요. 
// 프로퍼티 값이 함수일 경우**에는 일반 함수와 구분하기 위해 메서드(Method)라고 부릅니다. 
    
// 즉, 메서드는 객체(Object) 에 묶여 있는 함수를 의미합니다.
    
// 클래스에서도 데이터를 나타내는 속성뿐만아니라 함수와 같이 특정 코드를 실행할 수 있는 
// 문법을 사용할 수 있는데요
// 여기서는 Class라는 객체(Object)에 묶여있는 함수를 메서드(Method)**라고 부릅니다.
// class User {
//   constructor(name, age, tech) { // User 클래스의 생성자
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
//   }

//   getName() { return this.name; } // getName 메서드
//   getAge() { return this.age; }.  // getAge 메서드
//   getTech() { return this.tech; } // getTech 메서드
// }

// const user = new User("이용우", "28", "Node.js"); // user 인스턴스 생성
// console.log(user.getName()); // 이용우
// console.log(user.getAge()); // 28
// console.log(user.getTech()); // Node.js

// - 상속이란?
    
// 일반적으로 클래스의 인스턴스는 선언한 클래스의 기능을 모두 상속합니다.
// 상속을 이용해 부모 클래스와 자식 클래스로 나뉠 수 있는데요. 부모 클래스의 경우 메서드, 
// 내부 변수와 같은 정보를 자식 클래스에게 할당해줄 수 있습니다.    
// 그렇다면 상속을 이용하여 자식 클래스를 생성해볼까요?
// class User { // User 부모 클래스
//   constructor(name, age, tech) { // 부모 클래스 생성자
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
//   }
//   getTech(){ return this.tech; } // 부모 클래스 getTech 메서드
// }

// class Employee extends User{ // Employee 자식 클래스
//   constructor(name, age, tech) { // 자식 클래스 생성자
//     super(name, age, tech);
//   }
// }

// const employee = new Employee("이용우", "28", "Node.js");
// console.log(employee.name); // 이용우
// console.log(employee.age); // 28
// console.log(employee.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js
// `super` 키워드를 호출하면 부모 클래스의 생성자(constructor)를 호출합니다.
// `super` 키워드를 참조하면 부모 클래스의 메서드(Method)를 호출할 수 있습니다.

// {
// class Unit {
//   constructor(name, hp) {
//     this.name = name;
//     this.hp = hp;
//   }
//   healing(heal) {
//     if (this.hp <= 0) return;
//     this.hp += heal;
//     if (this.hp >= 100) this.hp = 100;
//   }
//   damaged(damage) {
//     if (this.hp <= 0) return;
//     this.hp -= damage;
//     if (this.hp <= 0) this.hp = 0;
//   }
// }

// const unit = new Unit('유닛', 100);
// unit.damaged(70); // 30
// unit.healing(10); // 40
// unit.damaged(50); // 0
// unit.healing(100); // 0
// }

// async & await 기본 문법
// 이제 async await의 기본 문법을 알아보겠습니다.

// async function 함수명() {
//   await 비동기_처리_메서드_명();
// }

// 먼저 함수의 앞에 async 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP
// 통신을 하는 비동기 처리 코드 앞에 await를 붙입니다. 
// 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작합니다.
// 일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.

// async & await 기본 문법
// 이제 async await의 기본 문법을 알아보겠습니다.

// async function 함수명() {
//   await 비동기_처리_메서드_명();
// }
// 먼저 함수의 앞에 async 라는 예약어를 붙입니다. 
// 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙입니다. 
// 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작합니다.
// 일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.

// node.js는 프로그래밍 언어이다??
// Node.js는 JavaScript를 브라우저 없이 단독으로 실행할 수 있는 하나의 플랫폼입니다. 

// npm은 node.js와 같은프로그램이다?
// npm은 여러분이 Node.js에서 오픈소스 라이브러리를 쉽게 사용하기 위해 개발된 "패키지 관리자"라는 형식의 프로그램입니다.

// express는 서버로 불러도된다?>
// 라이브러리는 여러분이 쉽게 서버 프로그램을 구성할 수 있게 만들어진 "오픈소스 라이브러리"입니다

// 1.HTTP란? 우리가 일반적으로 데이터를 주고 받을 때 사용되는 통신 규약! (모두의 약속 )

// 2.웹 브라우저는? HTML로 이루어진 데이터를 읽어서 화면에 그려주는 역할!
// 단순히 웹 문서를 가져와 보여주는것 뿐만 아니라, 
// 여러가지 프로토콜(http, ftp, file 등)을 지원하며 다른 웹 서버에 데이터를 보낼수 있기도 합니다.
//  웹 개발자들에게는 그 무엇보다 제일 중요한 도구중 하나인것이죠!   

// 3.  쿠키란? 웹 브라우저에 구현된 기술 중 하나. 보통 상태를 저장하기 위해서 사용합니다.       
// 서버에서 쿠키를 노릇노릇 구워서 Response에 담아 보내면 웹 브라우저는 받은 데이터를 그대로 저장합니다.
// 브라우저는 가지고 있는 쿠키가 있다면 서버에 Request를 할 때 항상 가지고 있는 쿠키 데이터를 포함해서 보냅니다.
// 단, 쿠키는 별도의 암호화 없이 데이터를 그대로 주고받기 때문에 클라이언트에서 마음대로 조작하기 쉬워 보안에 취약합니다.        

// 4. 세션이란?** 웹 브라우저에 구현된 기술중 하나. 그러나 세션은 쿠키의 특성을 이용한 기술입니다.
// 세션 데이터는 서버에 저장되고 데이터마다 고유한 세션 ID가 만들어집니다.
// 이 ID를 쿠키를 이용해 주고 받기 때문에 세션 데이터에 접근이 가능한것은 오직 서버뿐이기 때문에 쿠키가 가지고 있던 보안 취약점을 해결합니다.

// 5.서버(Server) 프로그램이란?** 일반적으로 클라이언트에게 요청을 받아 응답을 주는 프로그램의 유형입니다.

// 6.서버(Server) 컴퓨터란?** 위에서 설명된 "서버 프로그램"을 실행하고 있는 컴퓨터입니다.

// 1. `express`를 이용하여 서버를 만들 수 있다.
// 2. 미들웨어의 개념을 이해할 수 있다.
// 3. 내가 만든 서버로 "정적 파일(Static file)"을 제공할 수 있다.
// 정적 파일?말 그대로 "변하지 않는 파일"이라고 생각하면 좋습니다.
// 서버에서 파일 내용을 변형하여 사용하지 않고, 클라이언트(요청자)에게 그대로 전달하기 위한 목적의 파일입니다.
// 우리가 사용하는 `express` 라는 라이브러리는 정적 파일을 쉽게 제공할 수 있게 해주는 미들웨어가 존재합니다.
// 4. 라우터를 이용해 원하는 Method와 경로로 HTTP 요청을 받아 처리하는 방법을 안다.

// joi라이브러리 사용법

// const Joi = require('joi');

// const schema = Joi.object({
//     username: Joi.string()
//         .alphanum() 알파벳과 숫자로만 이루어져있어야함
//         .min(3) 최소길이
//         .max(30) 최대길이
//         .required(), 필수

//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//     repeat_password: Joi.ref('password'),

//     access_token: [
//         Joi.string(),
//         Joi.number()
//     ],

//     birth_year: Joi.number()
//         .integer()
//         .min(1900)
//         .max(2013),

//     email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// })
//     .with('username', 'birth_year')
//     .xor('password', 'access_token')
//     .with('password', 'repeat_password');


// schema.validate({ username: 'abc', birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// // Also -

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }


// 쿠키와 세션이란?
// 쿠키(Cookie): 브라우저가 서버로부터 응답으로 Set-Cookie 헤더를 받은 경우 
// 해당 데이터를 저장한 뒤 모든 요청에 포함하여 보냅니다.
// 데이터를 여러 사이트에 공유할 수 있기 때문에 보안에 취약할 수 있습니다.
// 쿠키는 `userId=user-1321;userName=sparta` 와 같이 문자열 형식으로 존재하며 
// 쿠키 간에는 세미콜론`(;)` 으로 구분됩니다

// 세션(Session): 쿠키를 기반으로 구성된 기술입니다. 
// 단, 클라이언트가 마음대로 데이터를 확인 할 수 있던 쿠키와는 다르게 세션은 
// 데이터를 서버에만 저장하기 때문에 보안이 좋으나, 
// 반대로 사용자가 많은 경우 서버에 저장해야 할 데이터가 많아져서 
// 서버 컴퓨터가 감당하지 못하는 문제가 생기기 쉽습니다.



// - 1) 관계형 데이터베이스(SQL)와 비관계형 데이터베이스(NoSQL)의 개념
    
// 그 동안 우리가 사용했던 MongoDB는 비관계형 데이터베이스에 해당합니다.
// 그리고 이번 수업에서 사용해 볼 MySQL라는게 바로 관계형 데이터베이스예요!
// 데이터 형식이 자유로웠던 MongoDB와 달리 관계형 데이터베이스는 "스키마" 라는 개념이 존재하는데요,
// MySQL에서는 "스키마"가 MySQL 서버의 가상 개념인 "데이터베이스"와 동일합니다.
// 그리고 제일 언급이 많이 되는 "테이블"이라는 개념은 쉽게 말해서 스키마 하위의 개념입니다.

// - 2) sequelize라는 라이브러리를 사용해 MySQL에 데이터 읽고 쓰기
    
// 비관계형 데이터베이스인 MongoDB를 이용할때는 ODM 도구중 하나인 mongoose라는 라이브러리를 사용했었죠?
// 관계형 데이터베이스인 MySQL를 이용할때는 ODM 대신 ORM(Object Relational Mapper)를 사용할 수 있습니다!   
// 그리고 우리는 ORM중 가장 유명한 Sequlize라는 라이브러리를 사용해볼 예정입니다.