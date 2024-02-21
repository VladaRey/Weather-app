function searchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  searchCity(cityInput.value);
}


function searchCity (city) {
  let apiKey = "9833co795c058e7446f0a2tc1ebbfba5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}


function showTemperature(response) {
  let h1 = document.querySelector("h1");
  let temperatureElement = response.data.temperature.current;
  let temperatureValue = document.querySelector("#temperature-value");

  h1.innerHTML = response.data.city;
  temperatureValue.innerHTML = Math.round(temperatureElement);

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${day} ${hours}:${minutes}`;
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchSubmit);


