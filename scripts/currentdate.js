// toLocaleDateString
const options = {weekday: 'long', day:'numeric', month:'long', year:'numeric'}
        
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// todaysdate = new Date();
// console.log(todaysdate);


// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
// document.getElementById('lastUpdated').textContent = new Date().lastModified();

// todaysdate = new Date();
// console.log(todaysdate);

// document.getElementById("#copyrightYear").textContent = new Date().getFullYear();
document.querySelector('#lastUpdated').textContent = new Date().lastModified();

// document.getElementById('lastUpdated').textContent = new Date().lastModified();