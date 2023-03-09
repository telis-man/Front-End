function getCookie(name) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  return cookie[name];
}

document.addEventListener("DOMContentLoaded", function(){
  if(document.cookie.includes('color')){
    document.body.style.backgroundColor = `${getCookie('color')}`;
    document.querySelector('form').remove(); 

  }
  else{
    document.querySelector('#delete').style.display = 'none'
  }
});

document.querySelector('#delete').addEventListener('click',()=>{
  document.cookie = 'color' + '=; Max-Age=0'
  location.reload()
})

document.querySelector('form').addEventListener("submit", function (e) {
  // preventDefault();
  console.log(e.target.color.value);
  document.cookie = `color=${e.target.color.value}`;
});

console.log(document.cookie);