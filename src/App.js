import { useState, useEffect } from 'react'
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import Footer from './components/Footer'

function App() {
  const accessKey = REACT_APP_API_KEY
  const [city, setCity] = useState('Lincoln')
  const [state, setState] = useState('Nebraska')
  const [currentWeather, setCurrentWeather] = useState([])
  const [updateCitySearch, setUpdateCitySearch] = useState('')
  const [updateStateSearch, setUpdateStateSearch] = useState('')


  const weatherDataLink = `http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city},${state}&units=f`

  useEffect(() => {
    getWeatherData()
  }, [])

  const getWeatherData = async () => {
    console.log(weatherDataLink)
    const response = await fetch(weatherDataLink)
    const data = await response.json()
    setCurrentWeather(data.current)
  }

  const updateCitySearchInput = e => {
    setUpdateCitySearch(e.target.value)
  }

  const updateStateSearchInput = e => {
    setUpdateStateSearch(e.target.value)
  }

  const newSearch = e => {
    e.preventDefault()
    setCity(updateCitySearch)
    setState(updateStateSearch)
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
              onChange={updateCitySearchInput}
              placeholder="Enter a city, e.g. Chicago" />
            <input
              className="search-input"
              type="text"
              onChange={updateStateSearchInput}
              placeholder="Enter a state, e.g. Illinois" />
            <br />
            <button
              className="search-btn"
              onClick={newSearch}
              type="submit">
              Search
            </button>
          </form>
        </div>
        <CurrentWeather city={city} state={state} currentWeather={currentWeather} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// https://weatherstack.com/documentation
// forecast
//http://api.weatherstack.com/forecast
// ? access_key = YOUR_ACCESS_KEY
// & query = New York
// http://api.weatherstack.com/forecast?access_key=1d87575377207dd950a67f434e01e23c&query=Lincoln,Nebraska&units=f

export default App;


