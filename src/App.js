import './App.css';
import React, { useState } from 'react';


const api = {
  key: "be520ce17cb65a32424217c0d7665159",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const buttonOnClick = () => {
    search();
  }

  const searchEnter = event => {
    if (event.key === "Enter") {
      search();
    }
  }

  const search = () => {
    // console.log(query)
    if (query !== '') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          // console.log(result);
          setQuery('');
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={
      (typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app sunny' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type='text'
            className='search-bar'
            placeholder='Search'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={searchEnter}
          />
          <button
            className="search-button"
            onClick={(e => setQuery(e.target.value), buttonOnClick)}
            value={query}
          >Search</button>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(`${weather.main.temp}`)}{'\u00b0'}C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (<div className='no-search'>Please enter a valid search term.</div>)}
      </main>
    </div>
  );
}

export default App;
