import { useState } from 'react'
import { CONTADOR_TEXT } from './constants/contador.constans'

export function LayoutContador({ children }) {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(prev => prev + 1)
    }

    function handleDecrement() {
        setCount(prev => prev - 1)
    }

    return (
        <>
            <h2>{CONTADOR_TEXT.TITLE}</h2>
            <p>{CONTADOR_TEXT.VALUE} {count}</p>
            <button onClick={count < 5 && handleIncrement }>{CONTADOR_TEXT.INCREMENT}</button>
            <button onClick={count > 0 ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENT}</button>
        </>
    )
}