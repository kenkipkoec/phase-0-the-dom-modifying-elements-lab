// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'Your Name is the champion'; 

document.body.appendChild(newHeader);