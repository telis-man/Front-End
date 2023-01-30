let ul =document.getElementById("selectDisplay");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click',function ()
{
    if(ul.style.display === "none"){
        ul.style.display="block";
    }
    else{
        ul.style.display="none";
    }
   }  ); 

   let grow = window.matchMedia('(min-width: 768px)');

   grow.onchange = (e) => {
       if (e.matches) {

        ul.style.display="flex";

     } }

    let shrink = window.matchMedia('(max-width: 768px)');

     shrink.onchange = (e) => {
         if (e.matches) {
  
          ul.style.display="none";
  
       } }