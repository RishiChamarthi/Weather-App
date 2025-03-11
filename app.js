const apiKey = "your api key here";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather(city) {
    const response = await fetch(url+`&q=${city}`+`&appid=${apiKey}`);
    let data = await response.json();
    document.querySelector(".error").style.display = "none";
    if(data.message === "city not found"){
        document.querySelector(".error").style.display = "block";
    }
    else{

        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";
        
        let weatherCondition = data.weather[0].main;
        let weatherIcon = document.querySelector(".weather-icon");
        switch(weatherCondition){
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Thunderstorm":
                weatherIcon.src = "images/thunder.png";
                break;
        }                     
    }
}


let searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click" , ()=>{
    let city = document.querySelector(".search input").value;
    checkWeather(city);
})

checkWeather("hyderabad");


