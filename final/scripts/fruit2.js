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

//* get the form so we can read what was entered in it.
const formDrink = document.forms[0];
//* add a 'listener' to wait for a submission of our form. When that happens run the code below.
formDrink.addEventListener('submit', function(event) {
    //* Prevent default action.
    event.preventDefault();

    let orders = document.createElement('ul');
    let orderBy = document.createElement('h3');
    orderBy.textContent = 'Order By';
    order.append(orders);
    order.append(orderBy);
    
    order.innerHTML = '{orders}';
    order.innerHTML = '{orderBy}';

    fullName = (formDrink.firstname.value) + (formDrink.lastname.value);
    order.innerHTML = `Name: ${fullName}<br>Email: ${formDrink.email.value}<br>Phone: ${formDrink.phone.value}<br>${formDrink.comment.value} `;
    // order.innerHTML = `Ordered by: ${formDrink.firstname.value}<br> ${formDrink.lastname.value}<br>Email: ${formDrink.email.value}<br>Phone: ${formDrink.phone.value}<br>${formDrink.comment.value} `;

    let mix = document.createElement('h3');
    mix.textContent = 'Your Fruit Mix';    
    order.append(mix);

    let fruitList = document.createElement('ul');
    let combo = [];
    elements.forEach(element => {
        let fruit = document.createElement('li');
        fruit.style.listStyle = 'none';
        fruit.innerText = element.value;
        fruitList.append(fruit);
        combo.push(fruit.innerText);
 
    })
    
    order.append(fruitList);
    order.style.display = 'block';
    order.style.textAlign = 'center';
    
    //* add a class to move everything down so our message doesn't cover it.
    document.body.classList.toggle('moveDown');

    let info = document.createElement('ul');
    let nutritionalInfo = document.createElement('h3');
    nutritionalInfo.textContent = 'Nutritional Information';
    
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
        
        order.append(info);

        let formDate = document.createElement('p');
        formDate.innerText = `Date And Time: ${fullDateandTime}`;
        formDate.style.padding = '15px 0px 0px 0px';
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