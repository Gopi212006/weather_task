/** @format */

let searchbtn = document.getElementById("searchbtn");

let weather = async (city) => {
  let weatherapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8042b4f5b9580620c4a5aa4a8f086451&units=metric`;

  let weatherGet = await fetch(weatherapi);
  let weatherOutput = await weatherGet.json();

  return weatherOutput;
};
function showWeather(city) {
  weather(city).then((data) => {
    let maincontainer = document.getElementById("weather-info");
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(icon);
    maincontainer.innerHTML = `
             <div id="icon">  <img src="${icon}" alt=""></div>
            <div id="temp">${data.main.temp}°C</div>
            <div id="location">${data.name}</div>
            <div id="details">
                <div>Humidity: ${data.main.humidity}%</div>
                <div>Wind: ${data.wind.speed} km/h</div>
                <div>Description: ${data.weather[0].description}</div>
            </div>
        `;
  });
}
showWeather("chennai");
searchbtn.addEventListener("click", () => {
  let place = document.getElementById("inputValue").value;
  if (place == "") {
    alert("Enter any place");
  } else {
    showWeather(place);
  }
  document.getElementById("inputValue").value = "";
});
