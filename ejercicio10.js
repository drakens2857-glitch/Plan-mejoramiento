const prompt = require("prompt");

let temperaturas = [15, 22, 33, 45, 68, 82, 91, 100, 120, 135, 150];

prompt.start();
prompt.get(["umbral"], function (err, result) {
    if (err) return console.error("Error:", err);

    let umbral = Number(result.umbral);
    if (!isNaN(umbral)) {
        let temperaturasAltas = temperaturas.filter(temp => temp > umbral);
        console.log("Originales:", temperaturas);
        console.log(`Mayores a ${umbral}:`, temperaturasAltas);
    } else {
        console.log("Entrada inválida");
    }
});
