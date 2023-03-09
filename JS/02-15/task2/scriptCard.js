// class Card {
//   constructor(front, back) {
//     this.front = front;
//     this.back = back;
//   }
// }

// let cardsArr = JSON.parse(localStorage.getItem('card'));

// document.querySelector('form').addEventListener('submit', (e) => {

//   cardsArr.push(new Card(e.target.cardFront.value, e.target.cardBack.value));
//   localStorage.setItem('card', JSON.stringify(cardsArr))

// })

let cardsArr = JSON.parse(localStorage.getItem('card'));
console.log(cardsArr)
let card = document.querySelector('#cardText')
let counter = 0;
let flipButton = document.querySelector('button');
let label = document.querySelector('#label');
let flag = 0;
let cardFront = true;

console.log(counter)
let toggleCard = (state) => {
  if ((flag == 1 && cardFront == true) || (state == true)) {
    card.style.opacity = 0;
    card.style.borderColor = "#84a59d";
    setTimeout(() => {card.textContent = cardsArr[counter - 1].front;}, 200);
    setTimeout(() => {card.style.opacity = 1;}, 200);
    cardFront = false;
    label.textContent = `Front of the ${counter} card`;
  } else if ((flag == 1 && cardFront == false) || (state == false)) {
    card.style.opacity = 0;
    card.style.borderColor = "#473C33";
    setTimeout(() => {card.textContent = cardsArr[counter - 1].back;}, 200);
    setTimeout(() => {card.style.opacity = 1;}, 200);
    cardFront = true;
    label.textContent = `Back of the ${counter} card`;
  } else if (flag == 0) alert("First, click on the card");
};

card.addEventListener('click', ()=>{
  flag = 1;
  cardsArr.length !== counter ? toggleCard(true) : alert('There are no more cards');
  counter<cardsArr.length && (counter+=1);
  label.textContent = `Front of the ${counter} card`;

})

flipButton.addEventListener('click', ()=>{
  toggleCard();
})
