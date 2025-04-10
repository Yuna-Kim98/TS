/**
 * enum(enumeration) : 열거형으로 표현되는 데이터를 저장하는 형식 -> object literal의 확장
 * 정의 형식 :
    const(let) enum 변수명 {
        enum item 1, // 인덱스 0
        enum item 2, // 인덱스 1
        ...
    }
 * 기존에 property와 value를 모두 열거, 저장해 사용하던 object literal은 property를 정확히 알고 있어야 사용할 수 있다.
    그러나 enum의 경우 데이터를 열거하면 인덱스값으로만 사용할 수 있기 때문에 더 편리하게 사용 가능하다.
 * enum은 for문을 사용할 수 있음.
 */
const objLiteral = {
    name: "홍길동",
    age: 30
};
enum objEnum {
    TypeScript = "타입스크립트", // 0
    JavaScript = "자바스크립트",  // 1
    React = "리액트"
};

console.log(objLiteral.name); // 실제로 값을 담고 사용됨
console.log(objEnum.TypeScript); // 값이 아닌 열거된 데이터를 가리킬 수 있는 property와 같은 개념

// 출력 형식의 차이점
// objectLiteral --> for.. in 사용❌, Object.keys() : [name, age] --> for..in을 적용해서 출력
const keys = Object.keys(objLiteral);
console.log(keys); // [name, age]
console.log('key.forEach -----------------');
keys.forEach((key) => {
    console.log(`${key} : ${objLiteral[key as keyof typeof objLiteral]}`);
});

// objEnum --> for..in 사용⭕
console.log('for..in -----------------');
for (const key in objEnum) {
    console.log(`${key} : ${objEnum[key as keyof typeof objEnum]}`);
}

// 경우에 따라 어떤 타입을 사용할 지 잘 결정해야함