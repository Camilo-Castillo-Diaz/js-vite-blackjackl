// valor carta;
/**
 * obtener el valor dw e la carta 
 * @param {String <string>} carta 
 * @returns {number} valor de la carta
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}
