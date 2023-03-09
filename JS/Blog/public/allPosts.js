let postUrl = "https://testapi.io/api/telisman/resource/posts";
let getUrl = 'https://testapi.io/api/telisman/resource/posts';
let form = document.querySelector("form");
let id = '';
// import {userName} from './login.js';


document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".navMenu").classList.toggle("navMenu-active");
});

document.querySelector(".postToggler").addEventListener("click", () => {
  form.classList.toggle("displayNone");
});

document.querySelector("form").addEventListener("submit", (event) => {
    let formPost = new FormData(document.querySelector("form"));

    formPost.append('userID', id);
    console.log(formPost, id);

  event.preventDefault();
  fetch(postUrl, {
    method: "POST",
    body: formPost

  })
    .then((response) => response.json())
    .then((result) => {
      document.querySelector("input").value = "";
      document.querySelectorAll("input")[1].value = "";
      document.querySelector("textArea").value = "";
      form.classList.toggle("displayNone");
      location.reload();
    });
});



window.addEventListener("load", (event) => {
    
    form.classList.add("displayNone");
    if(!sessionStorage.getItem("userID")){
        document.querySelector('.createPost').style.display = "none";
    }
    else{
        id = sessionStorage.getItem("userID");
        document.querySelector('.login').remove();
        let a = document.createElement('a');
        a.textContent = 'Log out';
        a.classList.add("logOut");
        a.addEventListener('click', ()=>{
            sessionStorage.clear()
            window.location.href = "index.html";
        })
        document.querySelector('.liLogin').append(a);
    }




    fetch(getUrl, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {

            
          for (post in result.data) {

            let postElement = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.textContent = result.data[post].header;
            let p = document.createElement('p');
            p.textContent = result.data[post].content;
            let p2 = document.createElement('p');
            p2.textContent = result.data[post].userID;
            let img = document.createElement('img');
            img.src= result.data[post].img;
 

            postElement.classList.add("post");

            postElement.append(h2);
            postElement.append(p2);
            postElement.append(p);
            postElement.append(img);

            document.querySelector('.posts').append(postElement);
            // console.log(userName)

          }
          // console.log(userID)
        });


  });
 
