
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


let ul = document.querySelector('ul');


for (let i = 0 ; i < 3 ; i++){

    let li = document.createElement("li");
    li.textContent = `li item no. ${i}`;
    ul.appendChild(li);
}

function grybas (arr){
    

}