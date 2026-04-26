function WeatherCard({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].main}</p>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;