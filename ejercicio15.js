const prompt = require("prompt");

const areaTriangulo = (base, altura) => (base * altura) / 2;

prompt.start();
prompt.get(["base", "altura"], function (err, result) {
    if (err) return console.error("Error:", err);

    let base = Number(result.base);
    let altura = Number(result.altura);

    if (!isNaN(base) && !isNaN(altura)) {
        console.log("Área:", areaTriangulo(base, altura));
    } else {
        console.log("Entrada inválida");
    }
});
