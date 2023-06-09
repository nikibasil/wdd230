const member = 'json/data.json';


async function getBusinessData(member) {
  const response = await fetch(member);

  if (response.ok) {
    const data = await response.json();
    console.log(data.business);
    displayBusiness(data.business);
  }
}

getBusinessData(member);

const displayBusiness = (business) => {
  // const cards = document.querySelector('article.cards'); // select the output container element
  // let divSpot = "1";
  business.forEach((business) => {
    if (business.member == "Gold Membership" || item.member == "Silver Membership" && divSpot < 4) {
    // Create elements to add to the div.cards element
    let rbar = document.querySelector(".right-sidebar");
    let spotSec = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let member = document.createElement('p');

    // spotSec.setAttribute("class", `spot${divSpot} color`);
    // genPara.setAttribute("class", "pspot");
    // cmpInfo.setAttribute("class", "contact");


    // Build the h2 content 
    name.textContent = `${business.name} `;
    // address.innerHTML = `<strong>Address</strong>: ${business.address}`;
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
    spotSec.appendChild(name);
    spotSec.appendChild(logo);
    // card.appendChild(address);
    spotSec.appendChild(phone);
    spotSec.append(member);
    spotSec.appendChild(website);


    // card.append(p)
    rbar.appendChild(spotSec);
    divSpot ++;
       } 
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
