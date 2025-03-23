const element = document.createElement("div");

const ul = document.createElement("h1");

const header = document.createElement("h1");
header.innerHTML = "Hello World";


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.innerHTML = "Your Name is the champion";  


document.body.appendChild(newHeader);


const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

