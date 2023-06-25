// 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature 
// var temp= 50;
// var wSpeed= 10;
// var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

// var windChill= Math.round(windChill);

// if (temp <=50 && wSpeed >3){
//   document.getElementById("windChill").innerHTML= windChill;
//   document.getElementById("wind").innerHTML= wSpeed;
//   document.getElementById("temp").innerHTML= temp;
// }
// else {
//     document.getElementById("wind").innerHTML= wSpeed;
//   document.getElementById("temp").innerHTML= temp;
// document.getElementById("windChill").innerHTML= "N/A"  ;
//   }

  const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = "http://api.openweathermap.org/geo/1.0/direct?q={Fairbanks},{AK},{US}&units=imperial&limit={limit}&appid={6f07f18d5aefc5088ddb33163720bbba}";
// const url= "https://api.openweathermap.org/data/2.5/weather?q=Brisbane,AUS&appid=6f07f18d5aefc5088ddb33163720bbba";
const url ='https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=6f07f18d5aefc5088ddb33163720bbba';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(data);
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
  
  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}