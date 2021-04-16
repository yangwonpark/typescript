declare const maybe: unknown;

// unknown은 자료형에 바로 할당 불가능 (any는 가능)
// const aNumber: number = maybe;

// type guard : runtime시에 검사를 수행해서 자료형을 한정시킴
if (maybe === true) {
    const aBoolean: boolean = maybe;
    // const aString: string = maybe;
}

if (typeof maybe === 'string') {
    const aString: string = maybe;
    // const aBoolean: boolean = maybe;
}

