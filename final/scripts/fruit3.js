const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

const elements = document.querySelectorAll('select')

fetch(url)
    .then(fruitData => fruitData.json())
    .then(fruitData => {
        console.log(fruitData);
        elements.forEach(element => {
            fruitData.forEach(fruit => {

                const choice = document.createElement('option');
                choice.value = fruit.name;
                choice.innerHTML = `${fruit.name}, '${fruit.genus}'`;

                element.append(choice)
            });
        });
    });

//* get the order div element so we can do something with it.
const order = document.querySelector('#order');
// const feedbackElement = document.querySelector('#feedback');
// order.style.margin = '0px auto 20px auto';
// feedbackElement.style.backgroundColor = '#6C0F23';
// feedbackElement.style.color = '#BBCDE5';
//* get the form so we can read what was entered in it.
const formElement = document.forms[0];
//* add a 'listener' to wait for a submission of our form. When that happens run the code below.
// formElement.addEventListener('submit', function(e) {
    //* Prevent default action.
    // e.preventDefault();

    const formDrink = document.getElementById('drink');
        formDrink.addEventListener('submit', function (event) {
          event.preventDefault();

    // feedbackElement.innerHTML = `Ordered by: ${formElement.firstname.value}! <br>`;
    order.innerHTML = `Ordered by: ${formElement.firstname.value} ! <br>`;
    
    let email = document.createElement('p');
    email.innerHTML = `Email: ${formElement.email.value} <br>`;
    // feedbackElement.append(email);
    order.append(email);

    let phoneNumber = `Phone Number: ${formElement.phone.value}`;
    phoneNumber.textContent = phoneNumber;
    // feedbackElement.append(phoneNumber);
    order.append(phoneNumber);

    let comment = `Phone Number: ${formElement.comment.value}`;
    comment.textContent = comment;
    // feedbackElement.append(comment);
    order.append(comment);

    let h3 = document.createElement('h3');
    h3.textContent = 'Fruit Combination';
    h3.style.padding = '20px 0px 0px 0px';
    // feedbackElement.append(h3);
    order.append(h3);

    let fruitList = document.createElement('ul');
    let combo = [];
    elements.forEach(element => {
        let fruit = document.createElement('li');
        fruit.style.listStyle = 'none';
        fruit.innerText = element.value;
        fruitList.append(fruit);
        combo.push(fruit.innerText);

    //  feedbackElement.innerHTML = `Comments: ${formElement.comment.value}! <br>`;

    // let comment = 'Comments: ${formElement.comment.value}`; 
    // feedbackElement.append(comment);
    })
    // feedbackElement.append(fruitList);
    order.append(fruitList);

    //* make the feedback element visible, add some styling dynamically.
    // feedbackElement.style.display = 'block';
    // feedbackElement.style.textAlign = 'center';
    // feedbackElement.style.fontSize = '1.9rem';
    // feedbackElement.style.fontFamily = 'Amatic SC';
    // feedbackElement.style.padding = '10px';
    order.style.display = 'block';
    order.style.textAlign = 'center';
    
    //* add a class to move everything down so our message doesn't cover it.
    document.body.classList.toggle('moveDown');

    let info = document.createElement('ul');
    let nutritionalInfo = document.createElement('h3');
    nutritionalInfo.textContent = 'Nutritional Information';
    nutritionalInfo.style.padding = '15px 0px 0px 0px';
    // feedbackElement.append(nutritionalInfo);
    order.append(nutritionalInfo);

    const submitBtn = document.querySelector('.submitBtn');

    fetch(url).then(fruitData => fruitData.json()).then(data => {
        //* Filter out the all the needed json data.
        let nutritions = data.filter(fruit => {
            //* Display all the items the user selected. 
            return combo.includes(fruit.name);
        }).map(fruit => {
            //* Return all the nutritional information for the user to see.
            return fruit.nutritions;
        });
        
        submitBtn.style.display = 'none';
        Object.keys(nutritions[0]).forEach(key => {
            let value = 0;
            nutritions.forEach(nutrition => {
                value += nutrition[key];
            });
            let li = document.createElement('li');
            li.innerText = `${key}: ${value.toFixed(1)}mg / 330ml`;
            li.style.listStyle = 'none';
            info.append(li);
        });
        // feedbackElement.append(info);
        order.append(info);

        let formDate = document.createElement('p');
        formDate.innerText = `Date And Time: ${fullDateandTime}`;
        formDate.style.padding = '15px 0px 0px 0px';
        // feedbackElement.append(formDate);
        order.append(formDate);

        function countDrink() {
            const numDrink = document.getElementById('num-drink');
            const drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;
            numDrink.textContent = `Total Specialty Drinks: ${drinkCount}`;
          }
        
          // Update the drink count card on page load
          countDrink();
    });
});