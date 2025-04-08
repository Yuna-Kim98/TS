/**
 * 타입스크립트의 Primitive 데이터 타입 실습
 * 변수 정의 : const(let) 변수명:타입정의 = 값(데이터);
 */

// 정수형 데이터
let number1: number = 100;
number1 = 200;
console.log("number1 --> ", number1);

// 실수형 데이터
let dnumber1: number = 1.234;
dnumber1 = 300;
console.log("dnumber1 --> ", dnumber1);
// 타입스크립트에서 정수와 실수는 같은 Number 타입으로 정의됨

// boolean
let flag: boolean = false;
const flag2: boolean = !flag;
console.log(flag, flag2);

// 배열 : 문자열 타입 - 홍길동, 홍길순, 홍길영
// const names:string = ['홍길동', '홍길순', '홍길영'];
// 이 경우 객체로 저장되기 때문에 변수의 주소 타입을 정의하게 됨. 이는 정의할 수 없는 것으로 에러 발생. 객체는 그 객체의 타입을 정의해야 함.
const names: string[] = ['홍길동', '홍길순', '홍길영'];
console.log("names --> ", names);

// 초기값 : undefined(원시 데이터 초기값), null(참조 데이터 초기값)
const initName: undefined = undefined;
const initArray: null = null;
console.log(initName);
console.log(initArray);

// typeof
const x: number = 100;
const xx: number = 100;

console.log("값의 비교 : ", x === xx); // 변수의 타입이 각각 다른 경우 값은 아예 비교되지 않음
console.log("타입의 비교 : ", typeof(x) === typeof(xx));