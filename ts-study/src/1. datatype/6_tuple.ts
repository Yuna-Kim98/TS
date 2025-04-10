/**
 * 배열(Array) : 동일한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장해 놓은 객체로 Heap에 저장됨
 * 튜플(Tuple) : 다양한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장함. -> Heap에 저장
                ❗인덱스별로 데이터 타입을 정의함❗
 * 튜플 정의 방식 :
    const(let) 변수명:[데이터타입1, 데이터타입2, ...] = [데이터1, 데이터2, ...];
 */

const num: number = 100;
const numArray:number[] = [1, 2, 3, 4, 5];
/* 
    const numTuple = [1, "hong", true, 3];
    이와 같이 작성해도 에러가 발생하지 않는데, 컴파일러가 자동으로 데이터 타입을 정의하기 때문이다.
    튜플 사용시 데이터타입을 하나하나 정의해야하는 번거로움을 덜 수 있음!

    const [] = 함수명; -> 이같이 구조분해 할당을 이용하여 인덱스 별로 튜플에 저장함
*/
const numTuple:[number, string, boolean, number] = [1, "hong", true, 3];
const [a, b, c, d] = numTuple;

console.log(num);
console.log(numArray);
console.log(numTuple);
console.log("numTuple a : ", a);
console.log("numTuple b : ", b);
console.log("numTuple c : ", c);
console.log("numTuple d : ", d);