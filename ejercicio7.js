const prompt = require("prompt");

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}

prompt.start();
prompt.get(["numero"], function (err, result) {
    if (err) return console.error("Error:", err);

    let numero = Number(result.numero);
    if (!isNaN(numero)) {
        verificarParImpar(numero);
    } else {
        console.log("Entrada inválida");
    }
});
