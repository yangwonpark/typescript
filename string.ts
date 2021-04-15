let myName: string = "Mark";

myName = 'Anna';


// Template String
// 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// backtick 기호로 둘러 쌓아서 표현
// 표현식은 `${expr}`같은 형태로 사용

let fullName: string = "Mark Lee";
let age: number = 39;

let sentence: string = `Hello, My name is ${fullName}.

I'll be ${age + 1} years old next month.`;

console.log(sentence);