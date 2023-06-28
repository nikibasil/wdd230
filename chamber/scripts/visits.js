// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;
let numVisits = Number(window.localStorage.getItem("visits-ls"));
// console.log("this is visit number" + " " + numVisits);
// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = `This is visit number ${numVisits + 1} `;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("visits-ls", numVisits);

// A client can view the localStorage data using the Applications 
// panel in the browsers's DevTools - check it out on any major site.




