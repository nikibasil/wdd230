const mem = 'json/data.json';
getBusinessData(mem);

async function getBusinessData(mem) {
  const response = await fetch(mem);

  if (response.ok) {
    const data = await response.json();
    console.log(data.business);
    displayBusiness(data.business);
  }
}

const displayBusiness = (business) => {
   
//   const cards = document.querySelector('article.cards'); // select the output container element
const rbars = document.querySelector('section.right-sidebar'); // select the output container element
  business.forEach((business) => {
    let gold = "1";
    if (business.member == "Gold Membership" || business.member == "Silver Membership" && gold < 4) {
    // Create elements to add to the div.cards element
    let rbar = document.createElement('section');
    let name = document.createElement('h2');
    // let address = document.createElement('p');
    let logo = document.createElement('img');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let member = document.createElement('p');

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
    rbar.appendChild(name);
    rbar.appendChild(logo);
    // rbar.appendChild(address);
    rbar.appendChild(phone);
    rbar.append(member);
    rbar.appendChild(website);


    // card.append(p)
    rbars.appendChild(rbar);
    gold ++;
    } 
  })// end of forEach loop
}
// end of function expression


const display = document.querySelector("section");



