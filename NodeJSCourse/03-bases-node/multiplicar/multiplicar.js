/**
 * Archivo para realizar las operaciones
 */

const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        console.log('================='.green);
        console.log(`  Tabla del ${base}   `.green);
        console.log('================='.green);

        if (!Number(base)) {
            reject(`El valor "${base}" ingresado como base no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor "${limite}" ingresado como limite no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            resolve(console.log(`${base} * ${i} = ${base * i}`));
        }
    });

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor ingresado "${base}" no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor "${limite}" ingresado como limite no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}