let postUrl = 'https://testapi.io/api/telisman/resource/users';

document.querySelector('form').addEventListener('submit', (event) => {

    // event.preventDefault();
    fetch(postUrl, {
        method: 'POST',
        body: new FormData(document.querySelector('form'))
    }).then((response) => response.json()).then(result => console.log(result))



});