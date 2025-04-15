import React from "react";
import { Employee, EmployeeEmoji } from '@interfaces/common';

// 1. interface
// interface EmployeeListProps {
//     employees: {
//         name: string;
//         age: number;
//         department: string;
//         emoji?: string;
//     }[]
// }

// 2. interface + type
// interface Employee {
//     name: string;
//     age: number;
//     department: string;
//     emoji?: string;
// }

// type EmployeeListProps = {
//     employees: Employee[];
// }

// 3. interface(부모-자식 관계 도출 : 선택 사항을 기준으로 분리) + type
// interface Employee {
//     name: string;
//     age: number;
//     department: string;
// }
// interface EmployeeEmoji extends Employee {
//     emoji: string;
// }

// 4. nterface 또는 typeAlias를 별도의 파일로 저장 후 import 해서 사용
type EmployeeListProps = {
    employees: (Employee | EmployeeEmoji)[];
}

const EmployeeList:React.FC<EmployeeListProps> = ({employees}) => {
    return (
        <div>
            <h2>EmployeeList</h2>
            <ul>
                { employees.map((employee) => (
                    <li>
                        {employee.name},
                        {employee.age},
                        {employee.department}{'emoji' in employee? ',' : ''}
                        {'emoji' in employee? employee.emoji : ''}
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default EmployeeList;