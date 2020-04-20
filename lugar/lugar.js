const axios = require("axios");

const getLatLong = async (locacion) => {
  const encodedURL = encodeURI(locacion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {
      "X-RapidAPI-Key": "669bdf5cb5msh50606985c134dc9p1c8457jsn89b867e12667",
    },
  });

  const response = await instance.get();

  if (response.data.Results.length <= 0) {
    throw new Error(`No hay resultados para ${locacion}`);
  }

  const data = response.data.Results[0];
  const ciudad = data.name;
  const latitud = data.lat;
  const longitud = data.lon;

  return { ciudad, latitud, longitud };
};

module.exports = {
    getLatLong
}