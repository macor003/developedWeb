/**
 * Archivo de configuración para YARGS
 * 
 */


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea'
}


const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .argv;


module.exports = {
    argv
}