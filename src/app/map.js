const axios = require('axios');

let fetchMap = async function () {
  let response = await axios.get(
    "https://maps.googleapis.com/maps/api/js",
    {
      params: {
        // TODO: Add your own api key
        key: "AIzaSyBK_fkWPq0czT_0-qRKr4O9F0mVdINhoJ4",
        callback: "initMap",
        v: "weekly"
    },
    }
  );
  return response;
};

module.exports = {
  fetchMap: fetchMap,
};
