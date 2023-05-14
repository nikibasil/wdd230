// select the DOM elements to manipulate (we will output to these)
// const datefield = document.querySelector("time");
// // for european/family history format with day first.
// const datefieldUK = document.querySelector("aside");
// const datemessage = document.querySelector("today");

// derive the current date using a date object

// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
// 	now
// );
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"
// }).format(now);
// // "full" or long, medium, short options ... try them

// datefield.textContent = fulldate;
// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
// datemessage.innerHTML = `Today is <strong>${fulldate}</strong>.`;


// let y = now.getFullYear();
// document.getElementById("demo").innerHTML = y;
// GET CURRENT DATE
const now = new Date();
// GET YEAR
// update = new Date(document.lastModified)
const update = new Date(document.lastModified)
document.getElementById("dateForm").innerHTML = update.toDateString();
// theMonth = update.getMonth() + 1
// theDate = update.getDate()
// theYear = update.getFullYear()
// document.querySelector('#dateForm').textContent = 'Last updated: ' + theMonth +'/'+ theDate +'/' + theYear;

const y = new Date().getFullYear();
document.getElementById("thisyear").innerHTML = y;

// toLocaleDateString
// const options = {weekday: 'long', day:'numeric', month:'long', year:'numeric'}
        
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// const date = new Date(document.lastModified);
// document.getElementById('lastUpdated').innerHTML = date;
// document.getElementById('copyrightYear').textContent = new Date().getFullYear();


// toLocaleDateString
// const options = {weekday: 'long', day:'numeric', month:'long', year:'numeric'}
        
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
// // // LAST MODIFIED DATE
// document.querySelector('#lastUpdated').textContent = new Date().lastModified();

// todaysdate = new Date();
// console.log(todaysdate);


// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
// document.getElementById('lastUpdated').textContent = new Date().lastModified();

// todaysdate = new Date();
// console.log(todaysdate);

// document.getElementById("#copyrightYear").textContent = new Date().getFullYear();



// document.getElementById('lastUpdated').textContent = new Date().lastModified();