const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = "http://api.openweathermap.org/geo/1.0/direct?q={Fairbanks},{AK},{US}&units=imperial&limit={limit}&appid={6f07f18d5aefc5088ddb33163720bbba}"";

const url ='https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=6f07f18d5aefc5088ddb33163720bbba';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         //  console.log(data); // this is for testing the call
//         // displayResults(data);
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}