// never를 리턴
// 아무것도 리턴 안됌
// 함수의 바디가 끝나면 안된다

// 모든 타입의 subtype => 모든 타입에 할당 가능
// never에 그 어떤 것도 할당할 수 없음
// 잘못된 타입을 넣는 것을 방지하는데 사용
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    while(true) {

    }
}

let a: string = 'hello';

if (typeof a !== 'string') {
    a;      // never
}

declare const b: string | number;

if (typeof b !== "string") {
    b;      // number
}

// 조건부 타입
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

// {} 는 string이 아니니까 never
type ObjectIndexable = Indexable<{}>;

type ObjectIndexable1 = Indexable<'g'>;


