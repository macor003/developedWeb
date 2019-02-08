/**
 * 
 * Async Await
 * 
 */

// Se agrega la palabra async y retorna una promesa
let getNombre = async() => {
    return 'Mario';
};

// El ejemplo con async hace referencia a que se haga de esta manera.
// let getNombre = () => {
//     new Promise((resolve,reject)=>{
//         resolve('Mario');
//     });
// }


//console.log(getNombre());

getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error en ASYNC', e);
})