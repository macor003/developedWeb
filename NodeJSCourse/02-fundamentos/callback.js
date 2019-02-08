// setTimeout(() => {
//     console.log('3');
//     console.log('Hola Mundo!');
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        id,
        name: 'Mario'
    }

    if (id === 63) {
        callback(`The user with id ${id}, don't exist.`);
    } else {
        callback(null, user);
    }
}

getUserById(60, (err, user) => {

    if (err) {
        return console.log(err);
    }

    console.log('User of DB', user);

})