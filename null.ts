// null
// 무언가 있는데 사용할 준비가 덜 된 상태
// null type은 null값만 가질 수 있음
// 런타임에서 typeof를 이용하면 object로 나옴


// 아래처럼 하면 에러 발생
// let MyName: string = null;

// void엔 undefined넣을 수 있음
let v: void = undefined;

// union 타입 (합집합 느낌)
let union: string | null = null;

union = "Mark";

