const prompt = require("prompt");

let colaClientes = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", colaClientes);

prompt.start();
prompt.get(["clientePrioritario"], function (err, result) {
    if (err) return console.error("Error:", err);

    let atendido = colaClientes.shift();
    console.log("Cliente atendido:", atendido);
    console.log("Cola después de shift:", colaClientes);

    colaClientes.unshift(result.clientePrioritario);
    console.log("Cola final:", colaClientes);
});
