/* 클래스 설계 예시
동물병원 --> 초코(푸들), 삐삐(고양이), 하양이(토끼)
클래스 설계 : Dog, Cat, Rabbit

Animal(부모)
속성 : 이름, 혈액형, 색깔
행위 : 먹는다, 잔다

Dog(자식) extends Animal :: 부모 클래스와 자식 클래스를 연결하는 키워드
    -> 부모의 속성과 행위를 상속 받아 사용할 수 있다.

    자식 클래스에서 부모 클래스를 사용할 때 사용하는 키워드 : super
    Animal : 일반 정보, Dog: 특성 등오로 나눔

 * 객체 지향을 사용하는 이유 : 객체의 공통적인 부분들을 모아 클래스를 만들고 재사용(React 컴포넌트 사용과 유사)
*/

// 단, Animal을 직접적으로 호출해서 사용하는 경우가 없어 굳이 class로 생성해 코드를 길게 작성할 필요가 없음 => interface로 변환
class Animal {
    name: string;
    blood: string;
    color: string;

    constructor(name: string, blood: string, color: string) {
        this.name = name;
        this.blood = blood;
        this.color = color;
    }

    sleep(): void {
        console.log(`'${this.name}'이(가) 잠을 잔다.`);
    }
}

class Dog extends Animal {
    // 상속 받은 속성은 생략 가능
    type: string;
    // name: string;
    // blood: string;
    // color: string;
    
    constructor(name: string, blood: string, color: string, type: string) {
        super(name, blood, color); // 부모의 생성자 호출
        this.type = type;
        // this.name = name;
        // this.blood = blood;
        // this.color = color;
    }

    // sleep(): void {
    //     console.log(`'${this.name}'이(가) 잠을 잔다.`);
    // }
}

class Cat extends Animal {
    type: string;

    constructor(name: string, blood: string, color: string, type: string) {
        super(name, blood, color);
        this.type = type;
    }
}

// 상속 관계의 Dog 클래스를 호출
// "초코", "A", "Brown"
const choco:Dog = new Dog("초코", "A형", "Brown", "푸들");
console.log(choco.name);
console.log(choco.blood);
console.log(choco.color);
console.log(choco.type);
choco.sleep();

// "삐삐", "B", "White"
const bbibbi:Cat = new Cat("삐삐", "B형", "White", "페르시안");
console.log(bbibbi.name);
console.log(bbibbi.blood);
console.log(bbibbi.color);
console.log(bbibbi.type);
bbibbi.sleep();