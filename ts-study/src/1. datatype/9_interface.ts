/*
 * 인터페이스 : 클래스 형식의 객체 타입 정의. body 없이 header만 정의 -> 메모리 생성 불가
 * 객체 생성을 위해서는 body가 있어야 하는데 인터페이스는 바디가 없기 때문에 메모리 생성이 불가능하다.
*/

interface AnimalInterface {
    name: string;
    blood: string;
    color: string;

    // constructor(name: string, blood: string, color: string): void;

    sleep(): void;
}

// const at:AnimalInterface = new AnimalInterface(); AnimalInterface 단독으로 객체 생성 불가

/* extends는 class-class 간의 상속에서만 사용 가능하다. 이 경우 부모인 AnimalInterface가 인터페이스이기 때문에 상속시 implements 키워드를 사용한다.
    속성과 함수를 모두 ❗반드시❗ 오버라이딩(Overriding) 해야 한다.
    오버라이딩(Overriding) : 부모가 가지고 있는 속성과 함수를 그대로 상속 받아 구현하는 것을 의미. 즉, 구현은 상속을 받는 자식 클래스에서 해주어야 한다. */
// class DogInterface implements AnimalInterface {
//     name: string;
//     blood: string;
//     color: string;
//     type: string;
    
//     constructor(name: string, blood: string, color: string, type: string) {
//         this.name = name;
//         this.blood = blood;
//         this.color = color;
//         this.type = type;
//     }

//     sleep(): void {
//         console.log(`'${this.name}'이(가) 잠을 잔다.`);
//     }
// }
// const haha: DogInterface = new DogInterface("하하", "O형", "White", "푸들");
// console.log(haha.name);
// console.log(haha.blood);
// console.log(haha.color);
// console.log(haha.type);
// haha.sleep();

// DogInterface를 인터페이스 형태로 수정(상속 받는 자식 클래스도 인터페이스로 사용할 수 있음) -> 메모리 생성❌
// 인터페이스 간에 상속이 이루어질 때는 extends 키워드를 사용한다.
interface DogInterface extends AnimalInterface {
    type: string;
}

// 구현 클래스 정의 : 메모리 생성을 위해 구현 클래스를 정의한다.
// DogInterface가 AnimalInterface의 속성까지 가지고 있으므로 상속 가능하다.
class ImplClass implements DogInterface {
    name: string;
    blood: string;
    color: string;
    type: string;

    constructor(name: string, blood: string, color: string, type: string) {
        this.name = name;
        this.blood = blood;
        this.color = color;
        this.type = type;
    }
    
    sleep(): void {
        console.log(`'${this.name}'이(가) 잠을 잔다.`);
    }
}

const haha: ImplClass = new ImplClass("하하", "O형", "White", "푸들");
console.log(haha.name);
console.log(haha.blood);
console.log(haha.color);
console.log(haha.type);
haha.sleep();