const prompt = require("prompt");

let preciosBase = [100, 250, 399, 75];

prompt.start();
prompt.get(["porcentaje"], function (err, result) {
    if (err) return console.error("Error:", err);

    let aumento = Number(result.porcentaje);
    if (!isNaN(aumento)) {
        let preciosConAumento = preciosBase.map(precio => precio * (1 + aumento / 100));
        console.log("Originales:", preciosBase);
        console.log(`Con ${aumento}% aumento:`, preciosConAumento);
    } else {
        console.log("Entrada inválida");
    }
});
