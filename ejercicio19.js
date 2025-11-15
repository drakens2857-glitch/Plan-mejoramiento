const prompt = require("prompt");

function generarBienvenida(nombre, curso) {
    console.log(`¡Bienvenido, ${nombre}!`);
    console.log(`Estás inscrito en el curso: ${curso}`);
}

prompt.start();
prompt.get(["nombre", "curso"], function (err, result) {
    if (err) return console.error("Error:", err);

    generarBienvenida(result.nombre, result.curso);
});
