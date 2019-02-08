let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
    }
}

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: name, apellido, poder } = deadpool;

console.log(name, apellido, poder);

//console.log(deadpool.getNombre());