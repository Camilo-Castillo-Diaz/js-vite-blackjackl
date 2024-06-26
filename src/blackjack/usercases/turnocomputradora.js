import { crearCartaHTML, pedirCarta, valorCarta, } from ".";

/**
 turno de la computadora
 * 
 * @param {Number} puntosMinimos  puntos minimos dque la pcnecesita paraganar 
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cratas
 * @param {Array<string>} deck 
 * 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) {
        throw new error("puntos minimos son necsesarios")

    }
    if (!deck) {
        throw new error("el deck es necsesarios")

    }
    let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        // todo crear carta
        const imgCarta= crearCartaHTML(carta)
        
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
