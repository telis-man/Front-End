document.querySelector('.hamburger').addEventListener('click', () =>{
    document.querySelector('.navMenu').classList.toggle('navMenu-active');



    if(document.querySelector('button').style.transform == "translate(-50%, 0%)")
    document.querySelector('button').style.transform = "translate(-50%, -50%)"
    else{
        document.querySelector('button').style.transform = "translate(-50%, 0%)"
    }
    
})


if(sessionStorage.getItem("userID")){
    document.querySelector('.login').textContent = 'Log out';
    document.querySelector('.login').addEventListener('click', ()=>{
        sessionStorage.clear()
        location.reload();
    })
}


window.addEventListener('load', ()=>{
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
})