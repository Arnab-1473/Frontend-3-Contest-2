const fetchDataBtn = document.getElementById("fetch-data-btn");
const weatherDataDiv = document.getElementById("weather-data");
const mapDiv = document.getElementById("map");

fetchDataBtn.addEventListener("click", () => {
    // console.log("hi");
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(lat);
        // console.log(lng);
        


        const apiKey = "8898424ac09393eb94dbab93c5d4f85d";
        const api = "https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=apiKey";
        const firstHalfApi = "https://api.openweathermap.org/data/2.5/weather?lat=";
        const secondHalfApi = "&lon=";
        const thirdHalfApi = "&appid=";
        const fullAPI = firstHalfApi + latitude + secondHalfApi + longitude + thirdHalfApi + apiKey;

        retData(fullAPI);
        async function retData(fullAPi) {
            const apiUrlData = await fetch(fullAPi);
            const DataApi = await apiUrlData.json();
            console.log(DataApi);


            const container = document.querySelector(".container");
            container.classList.remove("hide");
            container.innerHTML = `
            <h3>WEATHER DATA</h3>
            <div class="data-container">
            <div class="location">Location: ${DataApi.name}</div>
            <div class="position">
                <div class="lat">Lat:${DataApi.coord.lat}</div>
                <div class="long">Long:${DataApi.coord.lon}</div>
            </div>
            <div class="timeZone">TimeZone:${DataApi.timezone}</div>
            <div class="windSpeed">Wind Speed:${DataApi.wind.speed}</div>
            <div class="pressure">Pressure:${DataApi.main.pressure}</div>
            <div class="humidity">Humidity:${DataApi.main.humidity}</div>
            <div class="windDir">Wind Direction:${DataApi.wind.deg}</div>
            <div class="uvIndex">UV Index:${DataApi.wind.gust}</div>
            <div class="feelsLike">Feels Like:${DataApi.main.feels_like}</div>
            </div>
       
        `

        const coordinate = document.querySelector(".coordinate");
        coordinate.classList.remove("hide");
        coordinate.innerHTML = `
        <div class="lat">Lat: ${latitude}</div>
        <div class="long">Long: ${longitude}</div>
        `

        const button = document.querySelector(".fetch-btn");
        button.classList.add("hide");
        }

        const map = document.querySelector(".map");
        map.classList.remove("hide");
    });
});