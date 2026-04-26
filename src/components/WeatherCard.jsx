function WeatherCard({ weather }) {
  if (!weather || !weather.main || !weather.weather) {
    return <p>No weather data available</p>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].main}</p>
      <p>Temp: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;