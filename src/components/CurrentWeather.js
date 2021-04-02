
const CurrentWeather = ({ zipcode, currentWeather }) => {
  return (
    <div>
      <h1 className="current-weather">Current Weather</h1>
      <hr />
      <h2 className="zipcode">{zipcode}</h2>
      <p>Conditions: {currentWeather.weather[0].description}</p>
      <p>Temperature: {currentWeather.main.temp}&#730; F</p>
      <p>Cloud Cover: {currentWeather.clouds.clouds.all}%</p>
      <p>Wind Speed: {currentWeather.wind.speed} mph</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>


    </div>
  )
}

export default CurrentWeather
