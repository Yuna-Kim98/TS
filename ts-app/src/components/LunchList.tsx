import React from 'react';
import { Lunch, LunchPrice, LunchText } from '@interfaces/common';

type LunchListProps = {
    foodList: (Lunch | LunchPrice | LunchText)[];
}
const LunchList: React.FC<LunchListProps> = ({foodList}) => {
    return (
        <div>
            <h2>LunchList</h2>
            <ul>
                { foodList.map((food) => (
                    <li>
                        {food.name},
                        {food.emoji},
                        {'price' in food? food.price : 'text' in food? food.text : ''}
                    </li>
                )) }
            </ul>
        </div>
    );
}

export default LunchList;