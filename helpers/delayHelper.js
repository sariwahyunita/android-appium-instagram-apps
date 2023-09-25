/**
 * Menambahkan delay dalam milidetik
 * @param {number} milliseconds - Jumlah miidetik yang diinginkan. 
 * @returns 
 */

function delay(milliseconds){
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    })
}

module.exports = {
    delay
};