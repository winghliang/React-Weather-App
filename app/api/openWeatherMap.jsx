var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dee72487acb35b5a16de81b6cfe181a0&units=imperial';

module.exports = {
  getTemp: function (location) {
    // takes location string and properly encodes it for the browser (e.g., space)
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      
      //to handle error because of special openweathermap edge case (not common in most APIs)
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
