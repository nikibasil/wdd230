
// GET CURRENT DATE
const now = new Date();
// GET CURRENT TIME
const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

const cDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
const cTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
const dateTime = cDate + ' ' + cTime;
console.log(dateTime);

const formDate = document.querySelector('.date-time');
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


const dayNames = {weekday: 'long'};
let day = new Date().toLocaleDateString('en-US', dayNames);
const banner = document.querySelector('#greet')

// if (day == 'Monday' || day == "Tuesday") {
// 	banner.textContent = '🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
// };

if (day != 'Monday' && day != 'Tuesday')
{
	banner.style.display = "none"
}




// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

//output to html
// formDate.value = date;
// console.log(formDate.value);










