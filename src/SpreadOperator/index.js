import React from 'react';

const SpreadOperator = () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]


    const arr3 = [...arr1, ...arr2]

    //[1,2,3,4,5,6]

    return (
        <div>
            {arr3.join('  ')}
        </div>
    );
}

export default SpreadOperator;
