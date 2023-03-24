// Write your code here!

// remove the main element with id 'main'
document.querySelector('main#main').remove();

// create a new h1 element with id 'victory' and text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Kelly is the champion';

// append the new h1 element to the body
document.body.appendChild(newHeader);