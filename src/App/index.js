import React, { useState } from 'react';
import { getWeather } from '../helpers/data/weatherData';
// import { getWeather } from '../helpers/data/weatherData';
import './App.scss';

function App() {
  const [location, setLocation] = useState('Nashville');
  const [icon, setIcon] = useState('');
  const [temp, setTemp] = useState('');
  const [cond, setCond] = useState('');
  const [name, setName] = useState('');

  const submitEvent = (e) => {
    e.preventDefault();
    console.warn(e.target.form[0].value);
    const place = e.target.form[0].value;
    setLocation(place);
    const city = location;
    const locationObj = {
      city,
    };
    getWeather(locationObj).then((report) => {
      setTemp(report.main.temp);
      setCond(report.weather[0].main);
      setIcon(report.weather[0].icon);
      setName(report.weather.name);
    });
  };

  return (
    <div className='App'>
      <div className='weather-container'>
        <div className='card weather-card' style={{ width: '18rem' }}>
          <p>{location}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className='card-img-top' alt="current weather icon" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{temp} | {cond}</p>
          </div>
        </div>
      </div>
      <div className="weather-form-container d-flex flex-wrap align-items-center justify-content-around">
        <form className='needs-validation' style={{ width: '25em' }}>
          <div className='form-group'>
            <label htmlFor="inputCity">City</label>
            <input type="text" className='form-control' id="input-city"
              required />
          </div>
          <button type="submit" className='btn btn-primary' id="btn-submit-location"
            onClick={submitEvent}>Get Current Conditions</button>
        </form>
      </div>
    </div>
  );
}

export default App;
