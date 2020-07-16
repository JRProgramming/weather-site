const request = require('postman-request');

const forecast = ({ longitude, latitude } = {},  callback) => {
    const url = `http://api.weatherstack.com/current?access_key=388c61a3c58ae79537d78146d80ef38d&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&units=f`;
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!');
        } else if (response.body.error) {
            callback('Unable to find location');
        } else {
            const { temperature, feelslike, weather_descriptions, humidity } = response.body.current;
            callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. It is ${humidity}% humidity.`);
        }
    });
}

module.exports = forecast;