const prompt = require("prompt");

const TASA_IMPUESTO = 0.15;

prompt.start();

prompt.get(["precio"], function (err, result) {
    if (err) {
        console.error("Error al ingresar datos:", err);
        return;
    }

    let precio = Number(result.precio);

    if (!isNaN(precio)) {
        let impuesto = precio * TASA_IMPUESTO;
        let total = precio + impuesto;

        console.log("Precio base:", precio);
        console.log("Impuesto (15%):", impuesto.toFixed(2));
        console.log("Total a pagar:", total.toFixed(2));
    } else {
        console.log("Error: Entrada inválida");
    }
});
