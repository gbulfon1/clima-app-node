const axios = require('axios');

const getClima = async (lat,lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f6d49bc7bb0af16e23761b53e4324bc1&units=metric`)


    return resp.data.main.temp;

}

module.exports = {
    getClima
}