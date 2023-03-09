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
let displayPictures = (imgArr) =>{

    let urls = imgArr.map((x)=>x.download_url)
    for(imgUrl of urls){
    let container = document.querySelector('.container');
    let imgEl = document.createElement("img");
    imgEl.src = `${imgUrl}`;
    imgEl.style.width = '200px';
    imgEl.style.height = '200px';
    imgEl.style.objectFit = 'cover';
    imgEl.style.margin = '10px';
    container.append(imgEl);}
    
}


const url = `https://picsum.photos/v2/list?page=${Math.floor((Math.random() * (31)))}`;

fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log('ERROR');
            throw new Error('request failed');
        }
    })
    .then((responseData) => {
        if (responseData) {
            displayPictures(responseData);
        }
    })
    .catch((e) => console.log(e))





    