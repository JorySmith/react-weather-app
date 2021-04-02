import { useState, useEffect } from 'react'
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import Footer from './components/Footer'

function App() {
  const accessKey = process.env.REACT_APP_API_KEY;
  const [currentWeather, setCurrentWeather] = useState([]);
  const [zipcode, setZipcode] = useState('68506');
  const [updateZipcode, setUpdateZipcode] = useState('');

  // https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
  // https://api.openweathermap.org/data/2.5/weather?zip=68506,us&appid=KEY

  const weatherDataLink = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${accessKey}`;

  useEffect(() => {
    getWeatherData();
  }, [])

  const getWeatherData = async () => {
    const response = await fetch(weatherDataLink);
    const data = await response;
    setCurrentWeather(data);
  }

  const updateZipcodeSearchInput = e => {
    setUpdateZipcode(e.target.value)
  }

  const newSearch = e => {
    e.preventDefault()
    setZipcode(updateZipcodeSearchInput)
    getWeatherData()
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <form className="searchForm">
            <input
              className="search-input"
              type="text"
              onChange={updateZipcodeSearchInput}
              placeholder="Enter a Zipcode" />
            <br />
            <button
              className="search-btn"
              onClick={newSearch}
              type="submit">
              Search
            </button>
          </form>
        </div>
        <CurrentWeather zipcode={zipcode} currentWeather={currentWeather} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


