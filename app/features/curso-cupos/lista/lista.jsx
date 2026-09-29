import {CUPOS_TEXT, CUPOS_NUMBER} from '../constants/cupos.constants';

export function Lista({ lista }) {
    return (
        <section>
            <h2>{CUPOS_TEXT.REGISTRADOS}</h2>

            {lista.length === CUPOS_NUMBER.LISTA_VACIA ? (
                <p>{CUPOS_TEXT.NO_REGISTRADOS}.</p>
            ) : (
                <ul>
                    {lista.map((participante, index) => (
                        <li key={`${participante}-${index}`}>
                            {participante}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}