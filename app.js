const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)


// Se devuelve una promesa, asi que hay que implementar then y catch
// clima.getClima(35.0,139.0)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async  (direccion) => {

    try{
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${direccion} es de ${temp}.`
    
    }
    catch (e){
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

