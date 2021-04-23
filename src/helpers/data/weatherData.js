// weatherData.js

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = 'https://api.openweathermap.org/data/2.5';
const apid = firebaseConfig.weatherApiKey;

const locationArr = [];

const getWeather = (locationObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/weather?q=${locationObj.city}&units=imperial&appid=${apid}`).then((response) => {
    if (response.data) {
      resolve(response.data);
    } else {
      resolve([]);
    }
  }).catch((error) => reject(error));
});

const storeLocation = (locationObj) => {
  if (!locationArr.find((location) => locationObj.city === location.city)) {
    locationArr.unshift(locationObj);
  }
};

const retrieveLocations = () => (locationArr);

export { getWeather, storeLocation, retrieveLocations };
