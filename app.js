import { apiKey } from './config.js';

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-section input");
const searchBtn = document.querySelector(".search-section button");
const weatherIcon = document.querySelector(".weather-icon");
const deleteTextIcon = document.querySelector(".search-bar img");
const errorContainer = document.querySelector(".error");
const weatherContainer = document.querySelector(".weather");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            handleWeatherError();
            return;
        }

        const data = await response.json();
        updateWeatherUI(data);

        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error);
        handleWeatherError();
    }
}

function updateWeatherUI(data) {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";

    weatherIcon.src = "images/" + `${data.weather[0].main}` + ".png";

    weatherContainer.style.display = "block";
    errorContainer.style.display = "none";
}

function handleWeatherError() {
    errorContainer.style.display = "block";
    weatherContainer.style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("select", () =>{
    deleteTextIcon.style.display = "block";
}
)

deleteTextIcon.addEventListener("click", () => {
    searchBox.value = "";
    deleteTextIcon.style.display = "none";
    errorContainer.style.display = "none";
});



