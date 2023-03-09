let p = document.querySelector('p');
// p.textContent = 'Random text generated with JS'

setTimeout(() => {
  p.textContent = 'Random text generated with JS'
  alert(p.textContent);

}, 1000)

p.style.color = '#84a59d';