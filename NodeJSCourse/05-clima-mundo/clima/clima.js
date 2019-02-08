const axios = require('axios');

const getClima = async(lat, lng) => {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=563420653865063f2713a074f6767ee8`)
    return Math.round(response.data.main.temp);
}

module.exports = {
    getClima
}