// 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature 

  const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');

 const url= "https://api.openweathermap.org/data/2.5/weather?q=Armidale,AUS&units=metric&appid=6f07f18d5aefc5088ddb33163720bbba";
// const url ='https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=6f07f18d5aefc5088ddb33163720bbba';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            //  console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
  windSpeed.innerHTML =  `<strong>${weatherData.wind.speed.toFixed(0)} m/h</strong>`
  
  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  
}

const temp = weatherData.main.temp;
const wSpeed = weatherData.wind.speed;
// const wSpeed = weatherData.wind.speed.toFixed(0);
// console.log(temp);
// console.log(wSpeed);

if (temp <= 50 && wSpeed > 3.0) {

  // const windChill = calculateWindChill(weatherData.main.temp, weatherData.wind.speed);
  // document.getElementById('windChill').textContent = windChill + ' °F';
  // var wChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
  let wc = Math.round(35.74 + (0.6215 * temp) - (35.75 * (wSpeed**0.16)) + (0.4257 * temp * (wSpeed**0.16)));
  let wind = ((wChill - 32) * 5/9); // its value in celsius

  document.getElementById("windChill").innerHTML = wind;
  
} else {
  document.getElementById("windChill").textContent = 'N/A';

}

