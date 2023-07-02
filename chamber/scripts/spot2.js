const url = 'json/data.json';
getBusinessData(url);

async function getBusinessData(url) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    console.log(data.business);
    displayBusiness(data.business);
  }
}

const displayBusiness = (business) => {
  const cards = document.querySelector('article.cards'); // select the output container element

  business.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let member = document.createElement('p');

    // Build the h2 content 
    name.textContent = `${business.name} `;
    address.innerHTML = `<strong>Address</strong>: ${business.address}`;
    // Build the image logo by setting all the relevant attribute
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;
    member.textContent = `${business.member}`;
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo of ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');
    logo.setAttribute('height', '440');
    website.setAttribute('href', business.website);
    website.setAttribute('target', '_blank')

    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.append(member);
    card.appendChild(website);


    // card.append(p)
    cards.appendChild(card);
  })// end of forEach loop
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
