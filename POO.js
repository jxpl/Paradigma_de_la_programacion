class pizza {
    constructor(masa, tamaño, ingredientes) {
        this.masa = masa;
        this.tamaño = tamaño;
        this.ingredientes = ingredientes;
    }

    preparar() {
        console.log(`Preparando una pizza de ${this.tamaño} con masa ${this.masa} y los 
        siguientes ingredientes: ${this.ingredientes}`);
        return this;
    };

    hornear() {
         console.log("La pizza esta en el horno...");
         return this;
    };

    empacar() {
         console.log("Empacando la pizza...");
         return this;
    };

};

const pizzaHawaiana = new pizza("Doble", "Grande", ["Peperoni", "jamon", "queso"]);

console.log(pizzaHawaiana.preparar());
console.log(pizzaHawaiana.hornear());
console.log(pizzaHawaiana.empacar());

class Combos extends Pizza {
     constructor(combo, cantidad, tamaño, masa, ingredientes, bebida, postre) {
        super(masa, tamaño, ingredientes);
        this.combo = combo;
        this.cantidad = cantidad;
        this.bebida = bebida 
        this.postre = postre
     }

}