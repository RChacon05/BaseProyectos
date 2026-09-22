import { useState } from 'react'
import { Contador1 } from './contador1/contador1'
import { Contador2} from './contador2/contador2'
import { AgregarUsuario } from './agregarUsuario/agregarUsuario'

export function LayoutContador() {

    const [count, setCount] = useState(0)

    return (
        <>
            <Contador1 count={count} setCount={setCount} />
            <Contador2 count={count} setCount={setCount} />
            <AgregarUsuario count={count} setCount={setCount} />
        </>
    )
}