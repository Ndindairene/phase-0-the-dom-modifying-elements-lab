// Write your code here!
main.remove();
const newElement = document.createElement('h1');
newElement.id = 'victory';
document.body.appendChild(newElement);
const newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = "YOUR-NAME is the champion";

