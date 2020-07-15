const request = require('postman-request');
const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoianJhbWlyZXoyNiIsImEiOiJjazh2cjc3M3gwb254M2pudjdldzlvenBkIn0.riep1hpptcWrUjJyGJIGxw&limit=1`;
    request({ url: url, json: true}, (error, { body } = {}) => {
        if(error) {
            return callback('Unable to connect to location services');
        } 
        if(body.features.length === 0) {
            return callback('Unable to find location. Try another search');
        }
        const { [0]: longitude, [1]: latitude } = body.features[0].center;
        return callback(undefined, { 
            longitude, 
            latitude, 
            location: body.features[0].place_name
        });
    })
}
module.exports = geocode;