/**
 * Ejemplo #2 de Async y Await
 * 
 */


let empleados = [{
    id: 1,
    nombre: 'Mario'
}, {
    id: 2,
    nombre: 'Oriana'
}, {
    id: 3,
    nombre: 'Maximiliano'
}, ];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]


let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getMensaje = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario}$`;
}

getMensaje(2).then(response => console.log(response)).catch(e => console.log(e));