
// let num = 2;

// switch (num){

//     case 1:
//         console.log(`Nelygus 4, lygus ${num}`);
//         break;
//     case 2:
//         console.log(`Nelygus 4, lygus ${num}`);
//         break;
//     case 4:
//         console.log(`Lygus ${num}`);
//         break;
//     case 5:
//         console.log(`Nelygus 4, lygus ${num}`);
//         break;
//     case 6:
//         console.log(`Nelygus 4, lygus ${num}`);
//         break;
//     default:
//         console.log(`None of them`);
// }

// let x = Math.floor(Math.random() * 10);

// let i = 0;

// console.log(`Skaicius ${x}`);

// while(i<3){

//     i++;
//     console.log(`${i}`);

// }

// i=0;

// do{
//     console.log(`${i}`);
//     i++;
// }while(i<3)

// let p = document.querySelector('p');

// p.textContent = 'Changed';

// let p2 = document.querySelectorAll('p')[1];

// p2.innerHTML = "Changed2";

// let p3 = document.querySelector('.par3');


// p3.textContent = 'Changed3';

// let arr = [1,2,3,5];
// console.log(arr);

// let arr1 = new Array();

// arr1 = ['grg', 'ggagggg'];

// console.log(arr1);


// let ul = document.querySelector('ul');


// for (let i = 0 ; i < 3 ; i++){

//     let li = document.createElement("li");
//     li.textContent = `li item no. ${i}`;
//     ul.appendChild(li);
// }

let p1 = document.querySelector('p');
let p2 = document.querySelectorAll('p')[1];
let p3 = document.querySelectorAll('p')[2];
let p4 = document.querySelectorAll('p')[3];

let b1 = document.querySelector('button');
let b2 = document.querySelectorAll('button')[1];
let b3 = document.querySelectorAll('button')[2];
let b4 = document.querySelectorAll('button')[3];


b1.addEventListener("click", ()=>{
    console.log('clicked');
    p1.innerHTML = 'changed p1';
})

b2.addEventListener("click", ()=>{
    let newText = document.createTextNode("This just got added ");
    p2.appendChild(newText);
})

b3.addEventListener("click", ()=>{
    p3.style.color = 'red';
})

let check = 0;

b4.addEventListener("click", ()=>{

    if(check ===0){
        let newText1 = document.createTextNode("Random created text");
        p4.appendChild(newText1);
        check = 1;
    }
    else{}
})

div1 = document.querySelectorAll('div')[0];
div2 = document.querySelectorAll('div')[1];
div3 = document.querySelectorAll('div')[2];

div1.addEventListener("click", ()=>{
    div1.style.opacity = '0';
});

div2.addEventListener("click", ()=>{
    div2.style.opacity = '0';
});

div3.addEventListener("click", ()=>{
    div3.style.opacity = '0';
});



