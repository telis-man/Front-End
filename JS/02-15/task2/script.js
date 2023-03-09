class Card {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }
}


let cardsArr = JSON.parse(localStorage.getItem('card'));
if(!cardsArr){
  cardsArr = [];
}

document.querySelector('button').addEventListener('click', ()=>{
  cardsArr.push(new Card(document.querySelector('textarea').value, document.querySelectorAll('textarea')[1].value));
  localStorage.setItem('card', JSON.stringify(cardsArr))
  document.querySelector('textarea').value = '';
  document.querySelectorAll('textarea')[1].value = '';
})

document.querySelector('form').addEventListener('submit', (e) => {
  // e.preventDefault()
  // cardsArr.push(new Card(e.target.cardFront.value, e.target.cardBack.value));
  // localStorage.setItem('card', JSON.stringify(cardsArr))
  if(cardsArr.length ==0){
    alert('There are no cards added')
    e.preventDefault()
  }

})

document.querySelector('#clear').addEventListener('click', () => {
  cardsArr = [];
  localStorage.clear()
})