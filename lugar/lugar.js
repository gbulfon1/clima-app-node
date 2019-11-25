const axios = require('axios');


const getLugarLatLng = async (direccion) => {

        // encode url
    const encodeUrl = encodeURI(direccion);

    // crea una instancia de axios
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers:{'X-RapidAPI-Key':'d0ceea0fbamsh71080c7b1e2d82fp1863f1jsnd8cbe4e7e93c'}
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}

