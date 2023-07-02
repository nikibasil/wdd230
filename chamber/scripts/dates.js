
// GET CURRENT DATE
const now = new Date();
// GET CURRENT TIME
const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

const cDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
const cTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
const dateTime = cDate + ' ' + cTime;
// console.log(dateTime);


/* Join */
const formDate = document.getElementById('date-time');
formDate.value = dateTime;
console.log(formDate.value);

// GET YEAR
// update = new Date(document.lastModified)
const update = new Date(document.lastModified)
document.getElementById("dateForm").innerHTML = update.toDateString();

const y = new Date().getFullYear();
document.getElementById("thisyear").innerHTML = y;

// DATE FORMAT Tue May 16 2023
// document.getElementById("currentdate").innerHTML = now.toDateString();

// DATE FORMAT Tuesday, May 16, 2023
// select the DOM elements to manipulate (we will output to these)
const datefield = document.getElementById("time");

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


datefield.textContent = fulldate;


// const dayNames = {weekday: 'long'};
// let day = new Date().toLocaleDateString('en-US', dayNames);
// const banner = document.querySelector('#greet')

// if (day == 'Monday' || day == "Tuesday") {
// 	banner.textContent = '🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
// };


// const dayNames = {weekday: 'long'};
// let day = new Date().toLocaleDateString('en-US', dayNames);
// const greet = document.querySelector('#greet')

// // if (day != 'Monday')
// if (day != 'Monday' && day != 'Tuesday' )
// {
// 		greet.style.display = "none";
// }

// console.log(day);
// console.log(banner);


const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const day = daynames[now.getDay()]
// greet = document.getElementById('greet')
greet = document.querySelector('#greet');
console.log(day);
console.log(greet);
if (day != 'Monday')
// if (day != 'Monday' && day != 'Tuesday' )
{
		greet.style.display = "none";
};
 




