const prompt = require("prompt");

const verificarAcceso = edad => edad >= 18 ? "Permitido" : "Denegado";

prompt.start();
prompt.get(["edad"], function (err, result) {
    if (err) return console.error("Error:", err);

    let edad = Number(result.edad);
    if (!isNaN(edad)) {
        console.log("Acceso:", verificarAcceso(edad));
    } else {
        console.log("Entrada inválida");
    }
});
