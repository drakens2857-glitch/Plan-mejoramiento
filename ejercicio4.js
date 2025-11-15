// ejercicio04.js
const prompt = require("prompt");

console.log("Este mensaje se muestra con console.log().");

prompt.start();
prompt.get(["continuar"], function () {
    console.log("Simulación de alerta completada.");
});
