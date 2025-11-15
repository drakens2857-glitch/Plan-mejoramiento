const prompt = require('prompt');

prompt.start();

prompt.get(['numero1', 'numero2'], function
    (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    let suma = parseFloat(result.numero1) + parseFloat(result.numero2);
    console.log(`La suma es: ${suma}`);
});
