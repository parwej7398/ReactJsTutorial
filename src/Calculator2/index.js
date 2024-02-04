import React, { useReducer, useState } from "react";
import { Button, Divider } from "@mui/material";

const Calculator = () => {
    const [target, setTarget] = useState("First");

    const reducer = (value, action) => {
        if (action.type === "Equal") {
            if (value.operation === "Add") {
                const display = Number(value.first) + Number(value.second);
                setTarget("Total");
                return {
                    ...value,
                    displayValue: display,

                };
            }
            if (value.operation === "Subtract") {
                const display = Number(value.first) - Number(value.second);
                setTarget("Total");
                return {
                    ...value,
                    displayValue: display,

                };
            }
            alert(`Wrong Operation : ${value.operation}`);
            return value;
        }
        if (action.type === "Input" && target === "First") {
            const display = String(value.displayValue) + String(action.value);
            return {
                ...value,
                displayValue: display,
                first: Number(display),
                second: Number(value.second),
            };
        }

        if (action.type === "Input" && target === "Second") {
            const display = String(value.displayValue) + String(action.value);
            return {
                ...value,
                displayValue: display,
                first: Number(value.first),
                second: Number(display),
            };
        }

        if (action.type === "Reset") {
            setTarget("First");
            return {
                ...value,
                displayValue: "0",
                first: 0,
                second: 0,
            };
        }

        if (action.type === "Delete" && target === "First") {
            const display = value.displayValue.slice(
                0,
                value.displayValue.toString().length - 1
            );
            return {
                ...value,
                displayValue: display,
                first: Number(display),
                second: Number(value.second),
            };
        }

        if (action.type === "Delete" && target === "Second") {
            const display = value.displayValue.slice(
                0,
                value.displayValue.toString().length - 1
            );
            return {
                ...value,
                displayValue: display,
                first: Number(value.first),
                second: Number(display),
            };
        }

        if (action.type === "Add") {
            setTarget("Second");
            return {
                ...value,
                displayValue: "0",
                first: Number(value.first),
                second: Number(value.second),
                operation: "Add",
            };
        }

        if (action.type === "Subtract") {
            setTarget("Second");
            return {
                ...value,
                displayValue: "0",
                first: Number(value.first),
                second: Number(value.second),
                operation: "Subtract",
            };
        }


        if (target === "Total") {
            return {
                ...value,
                displayValue: "0",
                first: 0,
                second: 0,
            };
        }

        alert(`Wrong Action Type : ${action.type}`);
        return value;
    };

    const [value, dispatch] = useReducer(reducer, {
        displayValue: "0",
        first: 0,
        second: 0,
        operation: null,
    });

    return (
        <div className="flex items-center justify-center h-screen gap-2 bg-gray-100">
            <div className="flex flex-col w-[350px] h-[500px] shadow-xl bg-white">
                <div className="flex w-full flex-col gap-1 p-3 font-bold">
                    {target === 'Total' && <>
                        <div className="flex w-full justify-between">
                            <p>First : </p> <p>{value.first}</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <p>Second : </p> <p>{value.second}</p>
                        </div>
                    </>}
                    <div className="flex w-full justify-between">
                        <p>{target}</p> <p>{value.displayValue}</p>
                    </div>

                </div>
                <Divider />
                <div className="grid grid-cols-5 gap-2 p-2">
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "Reset" })}
                    >
                        C
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "Delete" })}
                    >
                        D
                    </Button>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value) => (
                        <Button
                            key={value}
                            variant="contained"
                            onClick={() => dispatch({ type: "Input", value })}
                        >
                            {value}
                        </Button>
                    ))}
                    <Button variant="contained" onClick={() => dispatch({ type: "Add" })}>
                        +
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "Subtract" })}
                    >
                        -
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch({ type: "Equal" })}
                    >
                        =
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;

