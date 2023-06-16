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
    const cards = document.querySelector('div.cards'); // select the output container element
  
    business.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let address = document.createElement('p');
      let logo = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${business.name} `;
      address.innerHTML = `<strong>Address</strong>: ${business.address}`;
      // Build the image logo by setting all the relevant attribute
      logo.setAttribute('src', business.imageurl);
      logo.setAttribute('alt', `Logo of ${business.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '340');
      logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(address);
      card.appendChild(logo);
      // card.append(p)
      cards.appendChild(card);
    } )// end of forEach loop
  }
   // end of function expression