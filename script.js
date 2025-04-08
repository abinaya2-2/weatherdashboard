//  const apiKey = "565f737fdb0fae9cf24af5e36b85ccbd"; // 🔐 Your actual key

// async function getWeather() {
//   const city = document.getElementById("cityInput").value.trim();
//   const result = document.getElementById("weatherResult");

//   if (!city) {
//     result.innerHTML = "<p>Please enter a city.</p>";
//     return;
//   }

//   // const url = `https://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65&appid={565f737fdb0fae9cf24af5e36b85ccbd}`
//   const url=`https://api.openweathermap.org/data/3.0/onecall?lat={-90; 90}&lon={-180; 180}&exclude={part}&appid={565f737fdb0fae9cf24af5e36b85ccbd}`;
//    try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.cod === 200) {
//       result.innerHTML = `
//         <h2>${data.name}, ${data.sys.country}</h2>
//         <p>${data.weather[0].description}</p>
//         <p>🌡️ Temp: ${data.main.temp}°C</p>
//         <p>💧 Humidity: ${data.main.humidity}%</p>
//         <p>🌬️ Wind: ${data.wind.speed} m/s</p>
//       `;
//     } else {
//       result.innerHTML = `<p>❌ ${data.message}</p>`;
//     }
//   } catch (error) {
//     result.innerHTML = `<p>⚠️ Failed to fetch weather. Check console.</p>`;
//     console.error(error);
//   }
// }


//     eg 2

// const apiKey = "565f737fdb0fae9cf24af5e36b85ccbd";

// async function getWeather() {
//   const city = document.getElementById("cityInput").value.trim();
//   const result = document.getElementById("weatherResult");

//   if (!city) {
//     result.innerHTML = "<p>Please enter a city.</p>";
//     return;
//   }

//   try {
//     // Step 1: Get coordinates using Geocoding API
//     const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;
//     const geoRes = await fetch(geoUrl);
//     const geoData = await geoRes.json();

//     if (!geoData.length) {
//       result.innerHTML = `<p>❌ City not found.</p>`;
//       return;
//     }

//     const { lat, lon, name, country } = geoData[0];

//     // Step 2: Get weather data using One Call API
//     const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;
//     const weatherRes = await fetch(weatherUrl);
//     const weatherData = await weatherRes.json();

//     const current = weatherData.current;

//     // Step 3: Display weather
//     result.innerHTML = `
//       <h2>${name}, ${country}</h2>
//       <p>${current.weather[0].description}</p>
//       <p>🌡️ Temp: ${current.temp}°C</p>
//       <p>💧 Humidity: ${current.humidity}%</p>
//       <p>🌬️ Wind: ${current.wind_speed} m/s</p>
//     `;
//   } catch (error) {
//     console.error(error);
//     result.innerHTML = `<p>⚠️ Failed to fetch weather. Try again later.</p>`;
//   }
// }

//eg 3

const apiKey = "565f737fdb0fae9cf24af5e36b85ccbd";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      result.innerHTML = `<p>❌ ${data.message}</p>`;
      return;
    }

    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].description}</p>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error(error);
    result.innerHTML = `<p>⚠️ Failed to fetch weather. Try again later.</p>`;
  }
}
