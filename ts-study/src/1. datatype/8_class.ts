/**
 * 타입스크립트의 클래스 타입
 * 클래스는 객체 타입으로 OOP의 Encapsulation(캡슐화)이 적용된 타입이다.
 * 클래스 간의 상속이 가능하며 이를 통해 확장성이 높다. 단, 메모리 효율성이 좋지 않다.
 * 클래스의 실행은 인스턴스를 생성하여 사용되며, new라는 키워드를 통해 실행된다.
 * 클래스 정의 형식 : 변수 + 함수 형태
    ❗클래스 정의 전 생성할 클래스에 대한 객체 설계가 필요함❗
    class 클래스명 {
        fileds명(필드명) 선언
        constructor(생성자) 선언
        function(함수) 선언
    }
 * 인스턴스 생성 형식
    class의 인스턴스 이름 = new class의 생성자함수();
    ❗class의 생성자함수는 클래스 이름과 동일❗
 */
/**
 * 객체 설계(모델링) : 객체는 실세계를 기준으로 정해지는 구체적인 값을 일반화하여 추상화하는 개념
 * 예시) 홍길동 씨는 출근 전에 메가커피에서 아이스 아메리카노 한 잔을 주문하여 사무실에 들어간다.
        -> 고객, 카페, 카페메뉴
        -> 고객: 이름, 나이, 메뉴, 주문한다.
        -> 카페: 이름, 메뉴리스트, 음료를 만든다.
        -> 카페메뉴 : 메뉴명, 가격
    -> 이와 같이 추상적인 개념을 하나하나 구체화하는 것을 뜻함
 * 타입스크립트로 서버를 연동할 때는 서버도 타입스크립트가 지원되는 Node를 사용해야한다. -> 어떤 서버를 사용하게 될 지 모르기 때문에 tuple, enum은 잘 사용하지 않음.
 */

// 고객 클래스 선언
class Customer {
    // fields : 생성자를 호출할 때 초기화 됨
    name: string;
    age: number;
    menu: Menu;
    money: number;
    
    // constructor
    constructor(name: string, age: number, menu:Menu, money: number,) { // Customer 함수
        this.name = name;
        this.age = age;
        this.menu = menu;
        this.money = money;
        console.log(`*************** ${this.name} 님이 입장! ***************`);
    }
    // function(method)
    // order() : void {
    //     console.log(`${this.name}이 ${this.menu.name}을 주문한다.`);
    // }

    addExtraCharge(money: number): void {
        this.money += money; // this.money = this.money + money;
        console.log(`${this.name} >>> 금액 충전 완료!`);
    }

    receiveOrderMenu(orderMenu:string): void {
        console.log(`${this.name} >>> 감사합니다.`);
        console.log(`*************** ${this.name} 님이 퇴장! ***************`);
    }
}

// 메뉴(Menu) 이름, 메뉴리스트, 
class Menu {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

// 주문(Order) 클래스 
class Order {
    name: string;
    payment: number;
    menu: Menu;

    constructor(name: string, payment: number, menu: Menu) {
        this.name = name;
        this.payment = payment;
        this.menu = menu;
    }
}

// 카페 클래스
class Cafe {
    name: string;
    menus: Menu[];
    orderMenu?: Menu; // ? : 옵션으로 사용하겠다는 의미

    constructor(name: string, menus: Menu[]) {
        this.name = name;
        this.menus = menus;
        console.log(`********************************************`);
        console.log(`\t\t 영업 시작`);
        console.log(`********************************************`);
        this.showMenu(); // 메뉴판 출력 --> 객체 지향 언어는 정확하게 직관적이어야 함을 기억해야한다 --> this 키워드 사용
    }
    
    showMenu():void {
        console.log(`---------------- 메뉴리스트 ----------------`);
        console.log(`-------------------------------------------`);
        console.log(`번호\t\t메뉴명\t\t메뉴가격`);
        console.log(`-------------------------------------------`);
        this.menus && this.menus.map((menu, index) => {
            menu.name.length > 5 ?
                console.log(`${index + 1}\t${menu.name}\t${menu.price}`) :
                console.log(`${index + 1}\t${menu.name}\t\t${menu.price}`); 
        });
        console.log(`-------------------------------------------`);
    }

    takeOrder(name:string, orderMenu:Menu, payment:number):boolean {
        this.orderMenu = orderMenu;
        // 4. 주문 확인 - 주문 메뉴, 결제 금액 확인 (반복 작업)
        //     4-1) 결제 불가 --> 금액 부족 메시지 전달
        //     4-2) 결제 가능

        // 주문 확인 : 메뉴 & 결제 금액 확인
        let orderCheckResult:boolean = false;
        const omenu = menus.find((menu) => menu.name === orderMenu.name);
        if (payment >= orderMenu.price) {
            console.log(`${this.name} >>> ${name}님, 주문이 완료 되었습니다. 잠시만 기다려 주세요!`);
            this.makeMenu(name);
            orderCheckResult = true;
        } else {
            console.log(`❌${this.name} >>> ${name}님, 결제 금액이 부족합니다.`);
        }
        return orderCheckResult;
    }
    
    makeMenu(name:string) {
        console.log(`..........메뉴 제조 중..........`);
        console.log(`${this.name} >>> ${name}}님, 음료가 준비되었습니다.`);
    }
    
    getOrderMenu(): string {
        // console.log(`${this.name} >>> ${this.name}}님, 메뉴가 준비되었습니다!`);
        const menuName: string = this.orderMenu ? this.orderMenu.name : '';
        return menuName;
    }
}

// const honghong:Customer = new Customer("홍길동", 30, new Menu("아이스아메리카노", 10), 100);
// console.log("honghong --> ", honghong.name);
// console.log("honghong --> ", honghong.age);
// console.log("honghong --> ", honghong.menu);
// console.log("honghong --> ", honghong.money);
// honghong.order();

// 어떤 db를 사용할지 정해지지 않은 상태일때 이러한 클래스는 React와 연동하면서는 잘 쓰지 않는다.


/* 인스턴스(객체) 생성 */
// 0. 메뉴판 생성
const menuData:{name:string, price:number}[] = [
    { name: "아메리카노", price: 1700 },
    { name: "아이스 아메리카노", price: 2000 },
    { name: "바닐라라떼", price: 3000 }
];
const menus:Menu[] = menuData.map((menu) => new Menu(menu.name, menu.price));

// 1. 메가커피 영업 시작 --> 메뉴판 출력
const megaCoffe:Cafe = new Cafe("메가커피☕", menus);

// 2. 고객 입장(한글도 사용 가능하지만 실제 작업은 영문으로 진행할 것!)
// 고객 리스트 생성 : 부상길(아이스 아메리카노), 오애순(바닐라라떼),  양관식(아메리카노)
const customers:{name:string, age:number, menu:Menu, money:number}[] = [
    { name: "부상길🙍‍♂️", age: 40, menu: new Menu(menuData[1].name, menuData[1].price), money: 1000 },
    { name: "오애순🙍‍♀️", age: 35, menu: new Menu(menuData[2].name, menuData[2].price), money: 5000 },
    { name: "양관식🙍‍♂️", age: 36, menu: new Menu(menuData[0].name, menuData[0].price), money: 3000 },
];

customers.map((customerData) => {
    const customer:Customer = new Customer( customerData.name,
                                            customerData.age,
                                            customerData.menu,
                                            customerData.money );

    // 3~5. 메뉴 선택 후 주문 : 고객 <-----> 카페
    let orderFlag = true;
    while(orderFlag) { // while문을 사용할 때는 boolean 값을 직접 넣으면 계속해서 작업이 실행되므로 주의해야 한다.
        if(megaCoffe.takeOrder(customer.name, customer.menu, customer.money)) {
            // 음료 제조 중
            console.log(`음료 제조 중...`);
            orderFlag = false;
        } else {
            // 결제 금액 부족 ---> 고객이 추가 지불
            customer.addExtraCharge(200);
            console.log(`충전 완료`);
        };
    }   

    // 6. 고객이 주문 메뉴 수령 후 퇴장
    customer.receiveOrderMenu(megaCoffe.getOrderMenu());
});

// 3~5. 메뉴 선택 후 주문 : 고객 <-----> 카페
// let orderFlag = true;
// while(orderFlag) { // while문을 사용할 때는 boolean 값을 직접 넣으면 계속해서 작업이 실행되므로 주의해야 한다.
//     if(megaCoffe.takeOrder(sang.name, sang.menu, sang.money)) {
//         // 음료 제조 중
//         console.log(`음료 제조 중...`);
//         orderFlag = false;
//     } else {
//         // 결제 금액 부족 ---> 고객이 추가 지불
//         sang.addExtraCharge(200);
//         console.log(`충전 완료`);
//     };
// }

// // 6. 고객이 주문 메뉴 수령 후 퇴장
// sang.receiveOrderMenu(megaCoffe.getOrderMenu());