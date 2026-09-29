import { useState } from "react";
import {CUPOS_TEXT, CUPOS_NUMBER} from '../constants/cupos.constants';

function useCupos(lista, setLista) {
    const [mensaje, setMensaje] = useState("");

    function agregarParticipante(participante) {
        const nombreLimpio = participante.trim();

        if (nombreLimpio === "") {
            setMensaje(CUPOS_TEXT.MENSAJE_VACIO);
            return;
        }

        if (lista.length >= CUPOS_NUMBER.MAX_CUPOS) {
            setMensaje(CUPOS_TEXT.MENSAJE_MAXIMO);
            return;
        }

        setLista((prevLista) => [...prevLista, nombreLimpio]);
        setMensaje("");
    }

    return { agregarParticipante, mensaje };
}

export default useCupos;