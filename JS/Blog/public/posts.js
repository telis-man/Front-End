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
        window.location.href = "login.html";
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

            if(result.data[post].userID == id){

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add("deleteButton");
            deleteButton.setAttribute('id',result.data[post].id);
                        
                        
            deleteButton.addEventListener("click", () => {
                console.log(result.data[post].id);

                fetch(
                "https://testapi.io/api/telisman/resource/posts/" + deleteButton.id,
                {
                    method: "DELETE",
                }
                )
                .then((res) => res.text()) // or res.json()
                .then((res) => {
                    console.log(res);
                    location.reload();
                });
            });


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
            postElement.append(deleteButton)

            document.querySelector('.posts').append(postElement);
            // console.log(userName)

          }}
          // console.log(userID)
        });


  });
 
