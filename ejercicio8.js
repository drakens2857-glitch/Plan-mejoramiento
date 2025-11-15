const prompt = require("prompt");

let pilaLibros = ["El Quijote", "100 Años de Soledad", "Fahrenheit 451"];
console.log("Libros iniciales:", pilaLibros.length);

prompt.start();
prompt.get(["nuevoLibro"], function (err, result) {
    if (err) return console.error("Error:", err);

    pilaLibros.push(result.nuevoLibro);
    console.log("Después de push:", pilaLibros.length);
    console.log("Libros:", pilaLibros);

    let libroEliminado = pilaLibros.pop();
    console.log("Libro removido:", libroEliminado);
    console.log("Libros finales:", pilaLibros.length);
});
