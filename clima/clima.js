const axios = require('axios');
const apikey = "95e682c149dd73a4604004ba9a09b728";

const getClima = async (latitud, longitud) =>{
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric`);
    return response.data.main.temp;
}

module.exports = {
    getClima
}