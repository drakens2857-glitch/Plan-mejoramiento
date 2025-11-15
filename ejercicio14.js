const prompt = require("prompt");

let tareas = ["Hacer cama", "Comprar pan", "Estudiar JS", "Lavar platos"];
console.log("Inicial:", tareas);

prompt.start();
prompt.get(["nuevoElemento"], function (err, result) {
    if (err) return console.error("Error:", err);

    tareas.splice(1, 1, result.nuevoElemento);
    console.log("Final:", tareas);
});
