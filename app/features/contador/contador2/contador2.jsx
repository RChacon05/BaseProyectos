import useContador from '../hooks/useContador'
import { CONTADOR_TEXT } from '../constants/contador.constans'

export function Contador2({count, setCount}) {

    const { handleIncrement, handleDecrement } = useContador(setCount)

    return (
        <>
            <h2>{CONTADOR_TEXT.TITLE}</h2>
            <p>{CONTADOR_TEXT.VALUE} {count}</p>
            <button onClick={handleIncrement } disabled={count >= 5}>
                {CONTADOR_TEXT.INCREMENT}
            </button>
            <button onClick={handleDecrement } disabled={count <= 0}>
                {CONTADOR_TEXT.DECREMENT}
            </button>
        </>
    )
}