const prompt = require("prompt");

function clasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

prompt.start();
prompt.get(["temperatura"], function (err, result) {
    if (err) return console.error("Error:", err);

    let temp = Number(result.temperatura);
    if (!isNaN(temp)) {
        console.log(clasificarTemperatura(temp));
    } else {
        console.log("Entrada inválida");
    }
});
