/**
 * 타입스크립트 배열 형식
 * const(let) 배열변수명:타입정의[] = [];
 * const(let) 배열변수명:Array<타입정의> = new Array(); -> Class 타입
 * 배열에서 타입정의 시 단순히 타입만 정의하면 힙에 저장된 주소의 타입을 정의하게 되어 에러가 발생하므로 위와 같은 형식으로 선언해주어야 함
 */

// 1, 2, 3, 4, 5 숫자를 저장하는 배열 생성
const numArray1: number[] = [1, 2, 3, 4, 5]; // 주로 사용하는 방법
const numArray2: Array<number> = new Array(1, 2, 3, 4, 5); // 클래스&제너릭<> 사용

console.log(numArray1[0]);
console.log(numArray2[0]);

// forEach, for... in, for...of, map... 사용하여 데이터 출력 가능 -> 즉, 자바스크립트에서 사용하는 제어문 그대로 사용 가능!
// forEach
numArray1.forEach((num) => console.log('numArray1 --> ', num));
numArray2.forEach((num) => console.log('numArray1 --> ', num));
// for...of : 변수 타입 지정하지 않음
for (const n of numArray1) console.log(n);
for (const n of numArray2) console.log(n);