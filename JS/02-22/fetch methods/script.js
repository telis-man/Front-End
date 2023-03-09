

// const url = `https://picsum.photos/v2/list?page=${Math.floor((Math.random() * (31)))}`;

// fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             console.log('ERROR');
//             throw new Error('request failed');
//         }
//     })
//     .then((responseData) => {
//         if (responseData) {
//             displayPictures(responseData);
//         }
//     })
//     .catch((e) => console.log(e))

const postUrl = `https://testapi.io/api/telisman/resource/posts`;
const getUrl = `https://testapi.io/api/telisman/resource/posts/`;

let getPosts = () =>{

    return fetch(getUrl, {
        method: 'GET',
    })
    .then((response) => {
        if(response.ok){
             return response.json();
    }
        else{
            console.log("not ok");
            throw new Error("request failed");
        }
    })
    .then((result) => {

        return result.data;
    })

}

let displayPosts = (data) =>{

    console.log(data)
    // let titles = data.map(x=>x.title)
    // let content = data.map(x=>x.content)

    // console.log(titles)
    // console.log(content)

}


document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();
    fetch(postUrl, {
        method: 'POST',
        body: new FormData(document.querySelector('form'))
    }).then((response) => response.json()).then(result => console.log(result))


    getPosts()


});


document.querySelector('.returnData').addEventListener('click', ()=>{
    

    displayPosts(getPosts())
})





//     let data = JSON.stringify()
// let formData = new FormData()
// formData.append('title', 'title')
// formData.append('content', 'content')
// fetch(URL, {
//     method: 'GET',
// }).then((response) => response.json()).then(result => console.log(result))


// const postData = (formData) => {
//     fetch(URL, {
//         method: 'POST',
//         body: formData
//     }).then((response) => response.json()).then(result => console.log(result))
// }

    