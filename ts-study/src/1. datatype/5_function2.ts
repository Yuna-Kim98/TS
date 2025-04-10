/**
 * 타입스크립트 함수 선언 확장
 */

// 함수 선언 후 차후 구현하는 방법 : 함수 표현식(arrow function)
// 
// let greet5 : (pname: string) => string;
let greet5 : (pname: string) => string;
greet5 = (pname:string): string => {
    return `이름 - ${pname}`;
}
console.log(greet5("홍길동"));


/** 함수의 오버로딩(Overrloading) : 가상 함수로 정의(abstract function) **/
// 오버로딩(Overrloading) : 동일한 이름의 함수가 여러 개 존재하는 것
// 단, 함수의 파라미터(매개변수)의 갯수와 타입은 달라야 함
function add(p1: number, p2: number) : number; // body(구현부) 없이 header만 선언
function add(p1: string, p2: string) : string;
// ❗반드시 가상 함수를 기본 함수로 정의해야 한다❗
function add(p1: any, p2: any): any {
    return p1 + p2;
}
console.log(add(100, 200));
console.log(add("홍", "길동"));


// 함수에서의 제너릭(Generic) : 객체 타입의 제한을 두는 경우 사용
// 함수 선언시 제너릭을 사용하여 매개변수와 리턴타입을 통일할 수 있음. 호출 시에도 제너릭을 부여한 형태로 호출해야 함
// 제너릭을 통해 함수를 선언하는 경우 매개변수 이름은 중립적으로 정의하는 것을 권장
// 원시타입 string, number, boolean 타입은 Wrapper Class 형식으로 빌트인 되어 있음
function greet6<T>(value: T): T {
    return value;
}
console.log(greet6<string>("홍길동")); // 원시타입인 string 타입의 Wrapper Class인 String Class로 자동 변환. Wrapper Class로 바로 작성해도 됨
console.log(greet6<number>(100));
console.log(greet6<boolean>(true));
console.log(greet6<Array<number>>([1,2,3,4,5])); // 더 일반적인 방법
console.log(greet6<Array<number>>(new Array(1,2,3,4,5))); // 11.2.0 이상에서 실행되므로 버전 이슈가 발생

/* 
💥함수의 리턴 타입 : void, never
    void : 리턴값이 없는 경우 사용
    리턴이 없으면 컴파일할때 알아서 void 를 붙여준다 하지만 리턴타입을 내가 작성해주는게 좋다.
    never : 에러 또는 익셉션 값을 리턴하는 경우 사용 
*/
function test(name:string): void {
    console.log(`안녕하세요 ${name}님`);    
}
test('홍길순');

// function neverr(): never {
//     // throw new Error("never 테스트 에러");   // 에러를 발생시키는 키워드임
// }
// neverr();

/*
💥 콜백함수  - 함수의 매개변수로 입력되는 함수이며, 함수명이 별도로 존재하지 않으며 독립적으로 실행하지 못한다.
    콜백함수가 뭔가 ? 함수안에서 또 함수를 호출하는 형식 ( 위키백과 가서 찾아보셈 )
        콜백함수는 별도로 호출이 안된다. 따라서 함수명이 필요가 없다
        ex) ~~.map(()=>{})  ()=>{}이 부분이 콜백함수임 (함수명없음)
    함수타입 : const,let 함수명() => 리턴타입 ;
    콜백함수타입 : () => 리턴타입 ;
*/

// 매개변수(파라미터)로 name:문자열, 콜백함수를 인자로 갖는다.
function processCall(name: string, callback: (message: string) => number ) {
    console.log(`${name}`);
    const message = `반갑습니다 ${name}님!`;
    const result: number = callback(message);
    console.log('result',result);
    
}
processCall('김철수', (message)=>{
    console.log(message); // 이 콜백함수가 리턴하면 이 함수를 호출한 곳(= callback(message);)으로 넘어간다
    return 100;
});
