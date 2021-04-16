// ts에서는 void를 반환형으로 잘 안 씀
// void에는 undefined를 할당 가능
function returnVoid(message: string): void {
    console.log(message);

    return;
}

const r = returnVoid('리턴이 없다.');