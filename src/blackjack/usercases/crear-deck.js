
import _ from "underscore"
/**
// Esta función crea un nuevo deck
 * 
 * @param {Array<string>} tiposDeCarta  ejemplo['C', 'D', 'H', 'S'];
 * @param {Array<string>} tiposEpeciales  ejemplo  ['A', 'J', 'Q', 'K'];
 * @returns {Array <string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEpeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) {
        throw new error("tipos de carta  es obligatorio como un arreglo de string ")
    }
    if (!tiposEpeciales || tiposEpeciales.length === 0) {
        throw new error("tipos especiales de carta  es obligatorio como un arreglo de string ")
    }

    let deck = []

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEpeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}