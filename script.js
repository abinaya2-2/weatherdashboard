 const apiKey = "565f737fdb0fae9cf24af5e36b85ccbd"; // 🔐 Your actual key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  const url = `https://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65&appid={565f737fdb0fae9cf24af5e36b85ccbd}`
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      result.innerHTML = `<p>❌ ${data.message}</p>`;
    }
  } catch (error) {
    result.innerHTML = `<p>⚠️ Failed to fetch weather. Check console.</p>`;
    console.error(error);
  }
}
