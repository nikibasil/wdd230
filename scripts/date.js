// toLocaleDateString
const options = {weekday: 'long', day:'numeric', month:'long', year:'numeric'}
        
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const date = new Date(document.lastModified);
document.getElementById('lastUpdated').innerHTML = date;
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
