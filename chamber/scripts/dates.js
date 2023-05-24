
// GET CURRENT DATE
const now = new Date();
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

const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const day = dayNames[now.getDay()]

greet = document.getElementById('greet')[0]

if (day != 'Monday' && day != 'Tuesday')
{
	greet.style.display = "none"
}








