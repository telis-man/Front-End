const form = document.querySelector('form');

form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(e.target);
}

confirm("Press a button!");