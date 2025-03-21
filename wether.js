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
        maincontainer.innerHTML = `
            <div id="temp">${data.main.temp}°C</div>
            <div id="location">${data.name}</div>
            <div id="details">
                <div>Humidity: ${data.main.humidity}%</div>
                <div>Wind: ${data.wind.speed} km/h</div>
                <div>Description: ${data.weather[0].description}</div>
            </div>
        `;

        console.log(data.weather);
    });
}



searchbtn.addEventListener("click", () => {
    let place = document.getElementById("inputValue").value;
    if (place) {
        showWeather(place);
    }
    document.getElementById("inputValue").value = ""; 
});
