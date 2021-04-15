// Symbol
// new Symbol 사용 불가능
// Symbol을 함수로 사용해서 타입 생성

// false가 나옴
console.log(Symbol('foo') === Symbol('foo'));

// primitive type의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만들어줌
// 그래서 주로 접근을 제어하는데 사용!!!

const sym = Symbol();

const obj = {
    [sym]: "value",
};

obj[sym]
