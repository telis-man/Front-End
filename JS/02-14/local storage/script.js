let submit = document.querySelector('button');
let input = document.querySelector('input');
let h2 = document.querySelector('h2');


input.addEventListener("keyup", (event) => {
  h2.textContent = input.value;
});

submit.addEventListener('click', ()=>{
  localStorage.setItem('input', input.value)
})