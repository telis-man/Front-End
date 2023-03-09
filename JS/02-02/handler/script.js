

let button = document.createElement('button');
let paragraph = document.createElement('p');
paragraph.setAttribute("id", "par1");

let text;
let id;

button.innerHTML = 'Click';
document.body.appendChild(button);

button.addEventListener('click', ()=>{
   text = prompt("Please enter text");
   id = prompt("Please enter ID");
})