/**
 * 타입스크립트 함수 선언
 * 기본함수 선언:
    function 함수명(parameter: 타입) { // 매개변수에 타입 지정
        실행로직
        return 반환값;
    }
 */

// greet1("홍길동") --> 화면출력 : 반갑습니다. 홍길동 님!
function greet1(pname:string) {
    console.log(`반갑습니다. ${pname} 님!`);
} 
greet1("홍길동");


// greet2("홍길동", 30); --> 반환값 : 홍길동의 나이는 30입니다. -> 반환값 화면 출력
function greet2(pname:string, age:number): string {
    return `${pname}의 나이는 ${age}살 입니다.`;
}
const str:string = greet2("홍길동", 30);
console.log("str --> ", str);
console.log(greet2("홍길동", 30));


// greet3("Alice", "서울시 강남구") : 화살표 함수를 통해 함수 표현식으로 생성
// 화면출력 : 이름 - Alice, 주소 - 서울시 강남구
// age 나이를 입력받는 변수 매개변수 추가. 단, 타입은 정해지지 않음
// 이름과 주소는 필수요소, 나이는 선택요소로 설정함 -> 변수 뒤에 '?'를 붙여주면 됨
const greet3 = (pname: string, address: string, age?: any) => {
    age ? 
        console.log(`이름 - ${pname}, 주소 - ${address}, 나이 - ${age}`) : 
        console.log(`이름 - ${pname}, 주소 - ${address}`);
}
greet3("Alice", "서울시 강남구");
greet3("Alice", "서울시 강남구", "30");
greet3("Alice", "서울시 강남구", 20);


// greet4(1, 2, 3, 4, 5) 값을 입력받아 배열객체로 화면 출력
const greet4 = (...params: any[]) => {
    console.log("params --> ", params); 
}
greet4(1, 2, 3, 4, 5);
greet4('❤️', '🧡', '💛', '💚', '💙', '💜');