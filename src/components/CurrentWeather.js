const CurrentWeather = ({ city, state, currentWeather }) => {
  return (
    <div>
      <h1 className="current-weather">Current Weather</h1>
      <hr />
      <h2 className="citySate">{city}, {state}</h2>
      <p>Temperature: {currentWeather.temperature}&#730; F</p>
      <p>Precipitation: {currentWeather.precip}%</p>
      <p>Cloud Cover: {currentWeather.cloudcover}%</p>
      <p>Wind Speed: {currentWeather.wind_speed} mph</p>
      <p>Humidity: {currentWeather.humidity}%</p>


    </div>
  )
}


export default CurrentWeather
