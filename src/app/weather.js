
const axios = require('axios');
// let getWeather = async function getWeather() {
//     let responseData = {}
//         const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
//             params: {
//                 lat: "28.4089",
//                 lon: "77.317",
//                 //TODO: ADD your own weather key and we
//                 appid: '59130320208d7132da721f3cf16b2fd8',
//             }
//         });
//         responseData['data'] = response
//         return responseData        
// }
let getWeather = async function () {
    let response = await axios.get(
      "https://api.openweathermap.org/data/2.5/onecall",
      {
        params: {
            lat: "28.4089",
            lon: "77.317",
            //TODO: ADD your own weather key and we
            appid: '59130320208d7132da721f3cf16b2fd8',
        },
      }
    );
    return response;
  };

module.exports = {
    getWeather: getWeather
}