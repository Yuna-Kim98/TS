/**
 * MenuList interface
**/
export interface Menu {
    name: string;
    emoji: string;
}
export interface MenuPrice extends Menu {
    price?: number;
}

export interface MenuSource extends Menu {
    source?: string;
}

/**
 * EmployeeList interface
**/
export interface Employee {
    name: string;
    age: number;
    department: string;
}

export interface EmployeeEmoji extends Employee {
    emoji: string;
}

/**
 * LunchList interface
**/
export interface Lunch {
    name: string;
    emoji: string;
}

export interface LunchPrice extends Lunch {
    price: number;
}

export interface LunchText extends Lunch {
    text: string;
}