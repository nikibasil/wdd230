const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const pick1 = document.querySelector('.fruit1');
const pick2 = document.querySelector('.fruit2');
const pick3 = document.querySelector('.fruit3');
let fruitsList = [];
let data;

async function getFruitData(url) {
    const response = await fetch(url);
    if(response.ok) {
        data = await response.json();
        console.table(data.fruits);
        displayPick(data.fruits, pick1);
        displayPick(data.fruits, pick2);
        displayPick(data.fruits, pick3);
    }
}

getFruitData(url);

const displayPick = (fruit, container) => {

    fruit.forEach((fruit) => {
            
        let fruitName = document.createElement('option');

        fruitName.textContent = `${fruit.name}`;

        container.appendChild(fruitName);

    });
}

let displayInput = () => {
    //personal info
    const fname = document.querySelector('.first-name').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    //fruits
    const fruit1 = document.querySelector('.fruit1').value;
    const fruit2 = document.querySelector('.fruit2').value;
    const fruit3 = document.querySelector('.fruit3').value;
    //add to list to get nutritional value
    fruitsList.push(fruit1);
    fruitsList.push(fruit2);
    fruitsList.push(fruit3);
    console.log(fruitsList);

    const output = document.querySelector('.order-output');
    let special = document.querySelector('.special').value;
    let comment = document.querySelector('.comment')




    output.style.marginTop = "100px";

        let fullInfo = `Name: ${fname}<br>Email: ${email}<br>Phone: ${phone}<br>${fruit1},  ${fruit2},  ${fruit3}<br>${comment}`;
        output.innerHTML = `<h3>Thanks for your order!</h3>${fullInfo}`;


}




// const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
// const elements = document.querySelectorAll('select')

// fetch(url)
//     .then(fruitData => fruitData.json())
//     .then(fruitData => {
//         console.log(fruitData);
//         elements.forEach(element => {
//             fruitData.forEach(fruit => {

//                 const choice = document.createElement('option');
//                 choice.value = fruit.name;
//                 choice.innerHTML = `${fruit.name}, '${fruit.genus}'`;

//                 element.append(choice)
//             });
//         });
//     });

//     const feedbackElement = document.querySelector('#feedback');
//     const orderElement = document.querySelector('#comment');
// //* get the form so we can read what was entered in it.
// const formElement = document.forms[0];
// //* add a 'listener' to wait for a submission of our form. When that happens run the code below.
// formElement.addEventListener('submit', function(sub) {
//     //* Prevent default action.
//     // e.preventDefault();

//     feedbackElement.innerHTML = `Ordered by: ${formElement.firstname.value} <br>`;
//     orderSection.innerHTML = `Order by: ${formElement.firstname.value}<br>`;
     
    
    
    
 

//     // let email = document.createElement('p');
//     // email.innerHTML = `Email: ${formElement.email.value} <br>`;
//     // feedbackElement.append(email);

//     // let phoneNumber = `Phone Number: ${formElement.phone.value}`;
//     // phoneNumber.textContent = phoneNumber;
//     // feedbackElement.append(phoneNumber);

//     // let h3 = document.createElement('h3');
//     // h3.textContent = 'Fruit Combination';
//     // h3.style.padding = '20px 0px 0px 0px';
//     // feedbackElement.append(h3);

//     let fruitList = document.createElement('ul');
//     let combo = [];
//     // elements.forEach(element => {
//     //     let fruit = document.createElement('li');
//     //     fruit.style.listStyle = 'none';
//     //     fruit.innerText = element.value;
//     //     fruitList.append(fruit);
//     //     combo.push(fruit.innerText);
//     // })

//     const form = document.getElementById('drink');
//     form.addEventListener('submit', function (event) {

//     // Get the selected fruit IDs
//     const fruit1 = parseInt(document.getElementById('fruit1').value);
//     const fruit2 = parseInt(document.getElementById('fruit2').value);
//     const fruit3 = parseInt(document.getElementById('fruit3').value);

//     // Filter the selected fruits from the data
//     const fruitChoice = data.filter(fruit => [fruit1, fruit2, fruit3].includes(fruit.id));
    
//     // Calculate the total nutrition
//     let totalCarbohydrates = 0;
//     let totalProtein = 0;
//     let totalFat = 0;
//     let totalSugar = 0;
//     let totalCalories = 0;

//     fruitChoice.forEach(fruit => {
//         totalCarbohydrates += fruit.nutritions.carbohydrates;
//         totalProtein += fruit.nutritions.protein;
//         totalFat += fruit.nutritions.fat;
//         totalSugar += fruit.nutritions.sugar;
//         totalCalories += fruit.nutritions.calories;
//       });

//       // Get the form field values
//     const firstName = document.getElementById('first-name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const instructions = document.getElementById('special-instructions').value;
    
//     const order = `Name: ${n}<br>Email: ${email}<br>Phone: ${phone}<br>${fruit1},  ${fruitChoice.map(fruit => fruit.name).join(', ')} `;

//       // Display the output
//     const orderElement = document.getElementById('order');
//     orderElement.innerHTML = order;



// // Update the drink count in the information card
//     const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
//     localStorage.setItem('drinkCount', (drinkCount + 1).toString());
//     updateDrinkCountCard();
//     });
//     } else {
//     console.error('Error:', request.statusText);
//     }
// ,);

// function updateDrinkCountCard() {
//     const drinkCountCard = document.getElementById('num-drink');
//     const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
//     drinkCountCard.textContent = `Total Specialty Drinks: ${drinkCount}`;
//   }

//   // Update the drink count card on page load
//   updateDrinkCountCard();
// // });


//     feedbackElement.append(fruitList);

//     order.append(fruitList);

//     //* make the feedback element visible, add some styling dynamically.
//     // feedbackElement.style.display = 'block';
//     // feedbackElement.style.textAlign = 'center';
//     // feedbackElement.style.fontSize = '1.9rem';
//     // feedbackElement.style.fontFamily = 'Amatic SC';
//     // feedbackElement.style.padding = '10px';
    
//     //* add a class to move everything down so our message doesn't cover it.
//     // document.body.classList.toggle('moveDown');

//     // let info = document.createElement('ul');
//     // let nutritionalInfo = document.createElement('h3');
//     // nutritionalInfo.textContent = 'Nutritional Information';
//     // nutritionalInfo.style.padding = '15px 0px 0px 0px';
//     feedbackElement.append(nutritionalInfo);
//     order.append(nutritionalInfo);
    
//     const submitBtn = document.querySelector('.submitBtn');

//     fetch(fruitUrl).then(fruitData => fruitData.json()).then(data => {
//         //* Filter out the all the needed json data.
//         let nutritions = data.filter(fruit => {
//             //* Display all the items the user selected. 
//             return combo.includes(fruit.name);
//         }).map(fruit => {
//             //* Return all the nutritional information for the user to see.
//             return fruit.nutritions;
//         });
        
//         submitBtn.style.display = 'none';
//         Object.keys(nutritions[0]).forEach(key => {
//             let value = 0;
//             nutritions.forEach(nutrition => {
//                 value += nutrition[key];
//             });
//             let li = document.createElement('li');
//             li.innerText = `${key}: ${value.toFixed(1)}mg / 330ml`;
//             li.style.listStyle = 'none';
//             info.append(li);
//         });
//         feedbackElement.append(info);
//         order.append(info);

//         let formDate = document.createElement('p');
//         formDate.innerText = `Date And Time: ${fullDateandTime}`;
//         formDate.style.padding = '15px 0px 0px 0px';
//         feedbackElement.append(formDate);
//         order.append(formDate);


//     });
// // })
// // });