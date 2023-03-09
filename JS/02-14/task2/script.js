window.addEventListener("load", (event) => {
  if(confirm('Agree to terms and conditions'))
  sessionStorage.setItem('consent', 'accepted');
});

