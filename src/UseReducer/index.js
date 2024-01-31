import { Button, TextField } from '@mui/material';
import React, { useReducer, useState } from 'react';
import CustomButton from '../Shared/CustomButton';

const reducer = (count, action) => {

    if (action.type === "Increment")
        return count + count

    if (action.type === "Decrement")
        return count - 1

    if (action.type === "Reset")
        return 0

    if (action.type === "Add")
        // console.log(action.num);

        // console.log(typeof action.num);

        return count + Number(action.num)
}


const UseReducerDemo = () => {
    // const [state, setState] = useState('')
    const [count, dispatch] = useReducer(reducer, 10)
    const [num, setNum] = useState(0)

    // console.log(num);
    return (


        <div className='flex flex-col gap-5 p-5 '>

            <TextField type='number' placeholder='Inter Number' label="Number" onChange={(event) => setNum(event.target.value)} />
            <Button
                variant='contained'
                color='error'
                onClick={() => dispatch({ type: "Add", num: num })}>
                Add
            </Button>
            <div className='flex gap-5 items-center p-5 justify-center'>
                <Button
                    variant='contained'
                    color='error'
                    onClick={() => dispatch({ type: "Decrement" })}>
                    Decrement
                </Button>
                <Button color='inherit' variant='contained' onClick={() => dispatch({ type: "Reset", })}>{count}</Button>
                <Button variant='contained' color='success' onClick={() => dispatch({ type: "Increment" })}>Increment</Button>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='p-5'>CustomButton</p>

                <CustomButton color='secondary'>button 1</CustomButton>
                <CustomButton color='error' size='small'>button 2</CustomButton>
                <CustomButton className='!h-32'> button 2</CustomButton>
                <CustomButton disabled>button 2</CustomButton>
                <CustomButton>button 2</CustomButton>
                <CustomButton>button 2</CustomButton>
                <CustomButton>button 2</CustomButton>
                <CustomButton>button 2</CustomButton>
                <CustomButton>button 2</CustomButton>
            </div>

        </div>

    );
}

export default UseReducerDemo;
