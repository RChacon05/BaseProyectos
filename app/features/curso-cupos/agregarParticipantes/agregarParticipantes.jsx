import useCupos from "../hooks/useCupos";
import { useState } from "react";
import {CUPOS_TEXT} from '../constants/cupos.constants';

export function AgregarParticipantes({lista, setLista}) {

    const { agregarParticipante, mensaje } = useCupos(lista, setLista);
    const [nombre, setNombre] = useState("");
    

    return (
            <div>
                <input type="text" placeholder={CUPOS_TEXT.INPUT_PLACEHOLDER} value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <button onClick={() => agregarParticipante(nombre)}>{CUPOS_TEXT.BOTON_AGREGAR}</button>
                {mensaje && <p role="alert">{mensaje}</p>}
            </div>
        
    );
}