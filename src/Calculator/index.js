import { Divider } from '@mui/material'
import React, { useReducer } from 'react'
import CustomButton from '../Shared/CustomButton'

const Calculator = () => {
    const reducers = (value, action) => {
        if (action.type === "Input") {
            const newValue = String(value) + String(action.value)
            return newValue
        }
        if (action.type === "Reset") {
            return 0
        }
        if (action.type === "Delete") {
            const newValue = String(value).slice(0, value.length - 1)

            return newValue
        }
        if (action.type === "Total") {
            return eval(value)
        }

    }


    const [value, dispatch] = useReducer(reducers, "")

    const handleInputValue = (value) => {
        dispatch({ type: "Input", value: value })
    }
    const exp = "20 + 5"
    // const exp1 = '20' + "5"

    return (
        <div className='flex min-h-screen justify-center items-center bg-gray-100'>

            <div className='flex flex-col bg-white rounded shadow-lg h-[500px] w-[350px] p-5'>

                <div className='flex justify-end'>
                    <p>{value}</p>
                </div>
                <Divider />
                <div className='grid grid-cols-5 gap-2 p-2'>
                    <CustomButton onClick={() => dispatch({ type: "Reset" })}>C</CustomButton>
                    <CustomButton onClick={() => dispatch({ type: "Delete" })}>D</CustomButton>
                    <CustomButton onClick={() => handleInputValue(1)}>1</CustomButton>
                    <CustomButton onClick={() => handleInputValue(2)}>2</CustomButton>
                    <CustomButton onClick={() => handleInputValue(3)}>3</CustomButton>
                    <CustomButton onClick={() => handleInputValue(4)}>4</CustomButton>
                    <CustomButton onClick={() => handleInputValue(5)}>5</CustomButton>
                    <CustomButton onClick={() => handleInputValue(6)}>6</CustomButton>
                    <CustomButton onClick={() => handleInputValue(7)}>7</CustomButton>
                    <CustomButton onClick={() => handleInputValue(8)}>8</CustomButton>
                    <CustomButton onClick={() => handleInputValue(9)}>9</CustomButton>
                    <CustomButton onClick={() => handleInputValue(0)}>0</CustomButton>
                    <CustomButton onClick={() => handleInputValue('+')}>+</CustomButton>
                    <CustomButton onClick={() => handleInputValue('-')}>-</CustomButton>
                    <CustomButton onClick={() => handleInputValue('*')}>*</CustomButton>
                    <CustomButton onClick={() => handleInputValue('/')}>/</CustomButton>
                    <CustomButton onClick={() => dispatch({ type: 'Total' })}>=</CustomButton>
                </div>
                <div className='flex items-center p-2'>
                    <CustomButton>Add</CustomButton>
                    <CustomButton>Subtract</CustomButton>
                </div>


                <p>{exp} = {eval(exp)}</p>

            </div>
        </div>
    )
}

export default Calculator