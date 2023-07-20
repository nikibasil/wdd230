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

