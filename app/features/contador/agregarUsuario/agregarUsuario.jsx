import useContador from '../hooks/useContador'
import { CONTADOR_TEXT } from '../constants/contador.constans'

export function AgregarUsuario({count, setCount}) {

    const { handleIncrement, handleDecrement } = useContador(setCount)

    return (
        <>
            <h2>{CONTADOR_TEXT.USER_TITLE}</h2>
            <input type="text" placeholder={CONTADOR_TEXT.NAME_PLACEHOLDER}
            />
            <input type="text" placeholder={CONTADOR_TEXT.AGE_PLACEHOLDER}/>
            <button onClick={handleIncrement }>{CONTADOR_TEXT.ADD_BUTTON}</button>
            <p>{CONTADOR_TEXT.USERS_COUNT} {count}</p>
        </>
    )
}