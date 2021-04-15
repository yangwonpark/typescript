"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone);
var isOk = true;
// 래퍼 객체와 primitive 타입은 구분되서 대입이 안됌
// let isNotOk: boolean = new Boolean(true);
