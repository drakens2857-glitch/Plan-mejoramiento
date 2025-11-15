class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    obtenerDescripcion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class VehiculoElectrico extends Auto {
    constructor(marca, modelo, autonomia) {
        super(marca, modelo);
        this.autonomiaBateria = autonomia;
    }

    mostrarInfo() {
        return `${super.obtenerDescripcion()}, Autonomía: ${this.autonomiaBateria} km`;
    }
}

const tesla = new VehiculoElectrico("Tesla", "Model 3", 500);
console.log(tesla.mostrarInfo());
