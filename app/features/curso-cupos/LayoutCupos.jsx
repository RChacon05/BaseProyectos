import {AgregarParticipantes} from "./agregarParticipantes/agregarParticipantes";
import { useState } from 'react'
import { Lista } from "./lista/lista";
import { Contador } from "./contador/contador";

export default function LayoutContador() {

    const [lista, setLista] = useState([]);

    return (
        <>
            <Contador lista={lista} />
            <AgregarParticipantes lista={lista} setLista={setLista} />
            <Lista lista={lista} />
        </>
    );
}