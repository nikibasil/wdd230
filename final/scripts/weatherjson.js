// LAST ISSUE CAN ONLY SHOW ICON OR DESRIPTION


function GetTemp() {
    

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=34.420963573474225&lon=-119.69389394516783&units=imperial&appid=6f07f18d5aefc5088ddb33163720bbba')

.then(response => response.json())
.then(data => {

    // for(let i = 0; i < 5; i ++) {
    //     document.querySelector('#day' + (i + 1)).textContent = weekDay[CheckDay(i)];
    //     // document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    // }
    for(i = 0; i < 3; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekDay[CheckDay(i)];
        console.log()
    }

    for(i = 0; i < 3; i++){
        document.querySelector('#img' + (i + 1)).src = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
   }

   for(i = 0; i < 3; i++){
        document.querySelector('#temp' + (i + 1)).innerHTML = `${data.list[i].main.temp.toFixed(0)} &deg;C`;
    }

    for(i = 0; i < 3; i++){
        document.querySelector('#des' + (i + 1)).textContent = data.list[i].weather[0].description;
    }
    console.log(data);
})

// .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}


    GetTemp();


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
        console.log(day)
        console.log(d)
    }
    else{
        return day + d.getDay();
        console.log(day)
        console.log(d)
    }
}

// var allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var dayweek = new Date(data.list[0].dt * 1000); // to get the DateTime. 
// var dayName = allDays[dayweek.getDay()]; // It will give day index, and based on index we can get day name from the array. 
// console.log(dayName)

// function getDay{

// }

    // for(i = 0; i<5; i++){
    //     document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    //     console.log()
    // }

    // for(i = 0; i<5; i++){
    //     document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    //     console.log()
    // }
    //------------------------------------------------------------


/*
document.getElementById("day1Min").innerHTML = Math.round(data.list[0].main.temp_min - 273.15, -2);
document.getElementById("day2Min").innerHTML = Math.round(data.list[1].main.temp_min - 273.15, -2);
document.getElementById("day3Min").innerHTML = Math.round(data.list[2].main.temp_min - 273.15, -2);
document.getElementById("day4Min").innerHTML = Math.round(data.list[3].main.temp_min - 273.15, -2);
document.getElementById("day5Min").innerHTML = Math.round(data.list[4].main.temp_min - 273.15, -2);*/

/*document.getElementById("day1Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day2Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day3Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day4Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day5Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);*/

/*document.getElementById("img1").src = "http://openweathermap.org/img/w/"+
data.list[0].weather[0].icon
+".png";
document.getElementById("img2").src = "http://openweathermap.org/img/w/"+
data.list[1].weather[0].icon
+".png";
document.getElementById("img3").src = "http://openweathermap.org/img/w/"+
data.list[2].weather[0].icon
+".png";
document.getElementById("img4").src = "http://openweathermap.org/img/w/"+
data.list[3].weather[0].icon
+".png";
document.getElementById("img5").src = "http://openweathermap.org/img/w/"+
data.list[4].weather[0].icon
+".png";*/

/*
document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
document.getElementById("day3").innerHTML = weekday[CheckDay(2)];
document.getElementById("day4").innerHTML = weekday[CheckDay(3)];
document.getElementById("day5").innerHTML = weekday[CheckDay(4)];*/

/*weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";*/