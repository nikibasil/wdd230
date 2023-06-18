const url = 'https://nikibasil.github.io/wdd230/chamber/json/data.json';
getBusinessData(url);

async function getBusinessData(url) {
    const response = await fetch(url);
   
    if (response.ok) {
        const data = await response.json();
        // console.log(data.business);
        displayBusiness(data.business);
    }
        
    
      
    // note that we reference the prophet array of the data object given the structure of the json file
    // document.getElementById("prophet").innerHTML = await myPromise;
    displayBusiness(data.business);
    }

// }
  
  

  const displayBusiness = (business) => {
    const cards = document.querySelector('article.cards'); // select the output container element
  
    business.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let logo = document.createElement('img');
      let phone = document.createElement('p');
      let website = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      name.textContent = `${business.name} `;
      address.innerHTML = `<strong>Address</strong>: ${business.address}`;
      // Build the image logo by setting all the relevant attribute
      phone.textContent = `${business.phone}`;
      website.textContent = `${business.website}`;
      logo.setAttribute('src', business.imageurl);
      logo.setAttribute('alt', `Logo of ${business.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '340');
      logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(logo);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
    
      // card.append(p)
      cards.appendChild(card);
    } )// end of forEach loop
  }
   // end of function expression

   const gridbutton = document.querySelector("#gridBtn");
const listbutton = document.querySelector("#listBtn");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}
