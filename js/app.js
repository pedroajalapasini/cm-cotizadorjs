function convertir() {
    let valores = parseInt(document.getElementById("valor").value);
    let resultado = 0;

    /* valores al dia 23/10 */
    let dolar = 292;
    let euro = 152;
    let usdc = 300;
    let reales = 30;

    if (document.getElementById("coinUno").checked) {
        resultado = valores / dolar;
        alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("coinDos").checked) {
        resultado = valores / euro;
        alert("El cambio de Pesos a Euros es: €" + resultado.toFixed(2));
    }
    else if (document.getElementById("coinTres").checked) {
        resultado = valores / usdc;
        alert("El cambio de Pesos a USDC es: USCD" + resultado.toFixed(2));
    }
    else if (document.getElementById("coinCuatro").checked) {
        resultado = valores / reales;
        alert("El cambio de Pesos a Reales es: R$" + resultado.toFixed(2));
    }
    else {
        alert("Debes completar todos los campos.")
    }
}
console.log(convertir);
