const prompt = require("prompt");

function esMayorDeEdad(edad) {
    return edad >= 18;
}

prompt.start();
prompt.get(["edad"], function (err, result) {
    if (err) return console.error("Error:", err);

    let edad = Number(result.edad);
    if (!isNaN(edad)) {
        console.log(`¿Es mayor de edad? ${esMayorDeEdad(edad)}`);
    } else {
        console.log("Entrada inválida");
    }
});
