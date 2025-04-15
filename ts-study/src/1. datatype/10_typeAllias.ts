/*
 * 타입 별칭 : 객체의 타입을 정의한다. 인터페이스와 같은 역할로 사용된다.
 * 타입스크립트에서만 사용 된다. 인터페이스와 마찬가지로 메모리 생성이 불가능하다.
 */
type AnimalType = {
    name: string;
    blood: string;
    color: string;

    sleep(): void;
}

// 타입을 구현하기 위한 클래스 정의
class typeClass implements AnimalType {
    name: string;
    blood: string;
    color: string;

    constructor(name: string, blood: string, color: string) {
        this.name = name;
        this.blood = blood;
        this.color = color;
    }

    sleep(): void {} // 인터페이스는 부모의 모든 요소를 반드시 오버라이딩 해주어야 하기 때문에 사용하지 않더라도 작성해야 한다.
    info(): void {
        console.log(`${this.name}의 혈액형은 ${this.blood}이고, 색깔은 ${this.color}이다.`);
    }
}

// AnimalType의 객체 생성
//  객체 타입이 AnimalType이므로 info() 메소드 호출 불가
// const haha2: AnimalType = new typeClass("초코", "A형", "Brown");

// 객체 타입이 typeClass이므로 info() 메소드 호출 가능
const haha2: typeClass = new typeClass("초코", "A형", "Brown");
haha2.info();

// 타입스크립트에서는 interface와 type을 많이 사용함