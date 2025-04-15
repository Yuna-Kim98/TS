import React from "react";
import { Menu, MenuPrice, MenuSource } from '@interfaces/common';

// tsx에서 컴포넌트를 만드는 형식 - 화살표 함수를 주로 사용하며 제너릭으로 타입을 정의한다
// jsx와 구분할 것!

// tsx에서는 props의 타입을 체크해야 한다. 컴포넌트로 넘어올 때 체크, 정의해야하므로 컴포넌트가 정의되기 전에 체크해준다.
// property의 이름과 갯수가 동일해야 한다.

// 1. props의 타입 체크 : interface
// interface MenuListProps {
//     menus: {
//         name: string;
//         emoji: string;
//         price?: number; // ? 기호가 붙으면 옵션이기 때문에 부모 컴포넌트에서 정의되지 않아도 됨
//         source?: string;
//     }[]
// }


// 2. props 타입 체크 : interface + type
// interface Menu {
//     name: string;
//     emoji: string;
//     price?: number;
//     source?: string;
// }

// type MenuListProps = {
//     menus: Menu[];
// }


// 3. props 타입 체크 : interface(부모-자식 관계 도출) + type -> 좀 더 객체지향적으로 사용
// 타입스크립트를 사용하는 이유: OOP적으로 코드를 짜고 중복을 최소화하고 객체를 재사용한다.
// interface Menu {
//     name: string;
//     emoji: string;
// }
// interface MenuPrice extends Menu {
//     price?: number;
// }

// interface MenuSource extends Menu {
//     source?: string;
// }

// type MenuListProps = {
//     menus: (Menu | MenuPrice | MenuSource)[];
// }


// 4. interface 또는 typeAlias를 별도의 파일로 저장 후 import 해서 사용
// tsconfig.json 파일에 저장된 파일의 경로를 path와 별칭으로 추가한 후 import한다.
type MenuListProps = {
    menus: (Menu | MenuPrice | MenuSource)[];
}


const MenuList:React.FC<MenuListProps> = ({menus}) => {
    return (
        <div>
            <h2>MenuList</h2>
            <ul>
                { menus.map((menu) => (
                    <li>
                        {menu.name},
                        {menu.emoji},
                        {/* {'price' in menu && menu.price}
                        {'source' in menu && menu.source} */}
                        {'price' in menu? menu.price : 'source' in menu? menu.source : ''}
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default MenuList;