let submit = document.querySelector('button');
let input = document.querySelector('input');
let h2 = document.querySelector('h2');
let inputArr = [];

// input.addEventListener("keyup", (event) => {
//   h2.textContent = input.value;
// });

submit.addEventListener('click', ()=>{
  
  inputArr.push(input.value);
  console.log(inputArr);
  localStorage.setItem('input', JSON.stringify(inputArr))
  let randIndex = Math.floor(Math.random() * inputArr.length);
  h2.textContent = JSON.parse(localStorage.getItem('input'))[randIndex];
  console.log(randIndex)
  

})