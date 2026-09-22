import useContador from '../hooks/useContador'
import { CONTADOR_TEXT } from '../constants/contador.constans'

export function Contador1({count, setCount}) {

    const { handleIncrement, handleDecrement } = useContador(setCount)

    return (
        <>
            <h2>{CONTADOR_TEXT.TITLE}</h2>
            <p>{CONTADOR_TEXT.VALUE} {count}</p>
            <button onClick={count < 5 && handleIncrement }>{CONTADOR_TEXT.INCREMENT}</button>
            <button onClick={count > 0 ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENT}</button>
        </>
    )
}