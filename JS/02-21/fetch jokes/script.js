// const url = 'https://reqres.in/api/users';
// fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             console.log('SUCCESS');
//             return response.json();
//         } else {
//             console.log('ERROR');
//             throw new Error('request failed');
//         }
//     })
//     .then((responseData) => {
//         if (responseData) {
//             console.log(responseData);
//         }
//     })
//     .catch((e) => console.log(e))

// let displayPictures = (imgArr) =>{

//     let urls = imgArr.map((x)=>x.download_url)
//     for(imgUrl of urls){
//     let container = document.querySelector('.container');
//     let imgEl = document.createElement("img");
//     imgEl.src = `${imgUrl}`;
//     imgEl.style.width = '200px';
//     imgEl.style.height = '200px';
//     imgEl.style.objectFit = 'cover';
//     imgEl.style.margin = '10px';
//     container.append(imgEl);}
    
// }

let saveToLocal = (joke) =>{
    localStorage.setItem(localStorage.getItem('counter'), joke);
    localStorage.setItem('counter', localStorage.getItem('counter')++);
}

document.querySelectorAll('button')[1].addEventListener('click',()=>{
    localStorage.clear();
    while (document.querySelector('.jokeArea').lastElementChild) {
        document.querySelector('.jokeArea').removeChild(document.querySelector('.jokeArea').lastElementChild);
      }
})

let displayJoke = (joke) =>{

    if(joke){
        let p = document.createElement('p');
        let hr = document.createElement('hr');
        p.textContent = joke;
        document.querySelector('.jokeArea').append(p);
        document.querySelector('.jokeArea').append(hr);
        saveToLocal(joke);
        document.querySelector('#numOfJokesDisplay').textContent = localStorage.getItem('counter');
    }
    else{

        for (let i = 0 ; i<localStorage.length ; i++){
            let p = document.createElement('p');
            let hr = document.createElement('hr');
            p.textContent = localStorage.getItem(`${i}`);
            document.querySelector('.jokeArea').append(p);
            document.querySelector('.jokeArea').append(hr);
            document.querySelector('#numOfJokesDisplay').textContent = localStorage.getItem('counter');
        }
    }




}

window.addEventListener("load", displayJoke());



const url = `https://api.chucknorris.io/jokes/random`;

document.querySelector('button').addEventListener('click', ()=>{

    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("not ok");
        throw new Error("request failed");
      }
    })
    .then((responseData) => {
      if (responseData) {
        displayJoke(responseData.value);
      }
    })
    .catch((e) => console.log(e));
  

})




// jokeCounter fucked

    