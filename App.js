const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

//config para recibir comandos desde la consola
const argv = require("yargs").options({
  direccion: {
    demand: true,
    alias: "d",
    desc: "Ubicacion en la ciudad para obtener el clima",
  },
}).argv;

const getInfo = async (locacion) => {
  try {
      //obtenemos las coordenadas y el clima actual
    const coords = await lugar.getLatLong(locacion);
    const current_weather = await clima.getClima(
      coords.latitud,
      coords.longitud
    );
    return `El clima de ${coords.ciudad} es ${current_weather} grados`;
  } catch (error) {
    return `No se pudo determinar el clima de ${locacion}`;
  }
};

getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(error => console.log(error))
