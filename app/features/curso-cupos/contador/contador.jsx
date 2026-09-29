import {CUPOS_TEXT, CUPOS_NUMBER} from '../constants/cupos.constants';

export function Contador({ lista }) {
    const cantidadPersonas = lista.length;

    return (
        <>
            <p>{CUPOS_TEXT.PARTICIPANTES} {cantidadPersonas}</p>
            <p>{CUPOS_TEXT.CUPOS} {CUPOS_NUMBER.MAX_CUPOS - cantidadPersonas}</p>
        </>
    );
}