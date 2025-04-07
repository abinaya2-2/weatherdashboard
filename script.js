 const apiKey = "749bed7165504de72abda544a5aed7a0";; // 🔐 Your actual key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  const url = `https://home.agromonitoring.com/users/api-keys${encodeURIComponent(city)}&appid=${749bed7165504de72abda544a5aed7a0}&units=metric`;

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
