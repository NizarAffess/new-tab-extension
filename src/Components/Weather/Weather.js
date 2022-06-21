import { useState } from "react";
import './Weather.css';

const apiKey = '32b40b115c47d06fec6b9dc66735a47c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [showBar, setShowBar] = useState(false);

  const search = (e) => {
    e.preventDefault();
    setLoadingWeather(true)
    fetch(`${apiUrl}/weather?q=${query}&units=metric&APPID=${apiKey}`)
      .then(response => {
        console.log(response.status);
        if (response.status !== 200) {
          console.log("something went wrong", response.status);
          setWeather('');
          setLoadingWeather(false);
          return false;
        }
        response.json()
          .then(result => {
            console.log(result);
            setWeather(result);
            setLoadingWeather(false);
            console.log(result.name, result.main.temp)
            setShowBar(false);
          })
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const setInputRefFocus = (input) => {
    if (input != null) {
      input.focus();
    }
  }

  const openSearchBox = () => {
    setQuery('');
    setShowBar(true);
  }

  const closeSearchBox = () => {
    setShowBar(false);
    setQuery('');
  }

  return (
    <div
      className={"weather " + (weather && (weather.main.temp > 15 ? "weather-warm" : null))}
    >
      <div className={"search-box " + (showBar ? "bar-shown" : "bar-not-shown")}>
        <form onSubmit={search}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city"
            onChange={e => setQuery(e.target.value)}
            ref={setInputRefFocus}
            value={query}
          />
        </form>
        <button
          className="btn-close"
          onClick={closeSearchBox}
        >
          X
        </button>
      </div>
      <button
        style={{ opacity: showBar ? '0' : '1' }}
        className="btn-search"
        onClick={openSearchBox}
      >
        Search
      </button>
      {
        weather ?
          <div className="weather-widget">
            <div className="weather-box">
              <div className="temp">
                <div className="celcius">
                  {weather && Math.round(weather.main.temp)}°C
                </div>
                <div className="main">
                  {weather && weather.weather[0].main}
                </div>
              </div>
              <div className="waether-icon">
                <img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"} alt="weather icon" />
              </div>
            </div>
            <div className="location">
              {weather && weather.name + ", " + weather.sys.country}
            </div>
          </div>
          :
          <div className="weather-widget">
            {
              loadingWeather ?
                <h4 className="clean-search">Loading data...</h4>
                :
                <h3 className="clean-search">Search for a proper city name</h3>
            }
          </div>

      }
    </div>
  );
}

export default Weather;