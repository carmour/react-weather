import './App.css';
import React, { useState } from 'react';


const api = {
  key: "be520ce17cb65a32424217c0d7665159",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

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
    <div className='app warm'>
      <main>
        <div className="search-box">
          <input type='text' className='search-bar' placeholder='Search' />
        </div>
        <div className='location-box'>
          <div className='location'>Vancouver, CA</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'> 15 degrees </div>
          <div className='weather'>sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
