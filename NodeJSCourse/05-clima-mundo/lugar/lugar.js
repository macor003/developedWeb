const axios = require('axios');

const getInfo = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${ direccion }`);
    }
    let location = response.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getInfo
}