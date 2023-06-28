
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

// Display a number of visits for user to see.
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
console.log("this is visit number" + " " + numVisits);
if (numVisits !== 0) {
  visitsDisplay.textContent = `This is visit number ${numVisits + 1} of the day`;
} else {
  visitsDisplay.textContent = `This is your first visit`;
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);


// const today = Date.now()

// Initialize display element variable
// const visitsDisplay = document.querySelector(".visits");

// // Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// // let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;
// let numVisits = Number(window.localStorage.getItem("visits-ls"));
// console.log("this is visit number" + " " + numVisits);
// // Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit. Welcome!`;
// }

// // increment the number of visits by one.
// numVisits++;

// // store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem("visits-ls", numVisits);

// A client can view the localStorage data using the Applications 
// panel in the browsers's DevTools - check it out on any major site.




//visits
 
// const today = Date.now()

// if (!localStorage.getItem("visit-container")) {
// 	localStorage.setItem("visit-container", today);
// }

// console.log(localStorage.getItem("visit-container"));

// const toSet = parseInt(today) - parseInt(localStorage.getItem("visit-container"));

// localStorage.setItem("visit-container", today);

// const days = toSet*1.1574e-8

// const visitsDisplay = document.getElementsByClassName("visits")[0]
// if (visits){
// 	//Verify
// 	visits.innerHTML = "Days Since Last Visit: " + days.toFixed(0) + " Days"
// }




