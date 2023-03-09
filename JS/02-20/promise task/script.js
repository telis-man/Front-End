// const makePizza = (string) => {
//     return new Promise((resolve, reject) => {
//         let num = Math.random();
//         if (string) {
//             resolve(`oh yess! ${num}`);
//         } else {
//             reject(`oh noo! ${num}`);
//         }
//     })
// }
// makePizza()
//     .then((string) => { console.log(string) })
//     .catch((e) => { console.log(e) });

// const makePizza = (string) => {
//     return new Promise((resolve, reject) => {
//         let num = Math.random();
//         if (string) {
//             resolve(`oh yess! ${num}`);
//         } else {
//             reject(`oh noo! ${num}`);
//         }
//     })
// }
// const peperoni = makePizza('peperoni');
// peperoni.then((string) => console.log(string));



// sukurkite funkcija calculateSum, kuri priima skaiciu masyva kaip argumenta ir grazina promise.
// Promise turetu resolvinti tuomet, jeigu skaiciu masyvas nera tuscias ir visi skaiciai yra type - number;
// Kitu atveju turetu ivykti reject su atitinkama zinute, arba masyvas yra tuscias arba yra ne skaiciu jame.



let calculateSum = (numArr) =>{
    return new Promise ((resolve, reject) =>{
        let flag =0;
        numArr.map(x=>{if(typeof x !=='number') flag=1})
     

        if((numArr.length==0)||(flag == 1)){
            reject('Array is empty')
        }
        else{
            resolve(numArr.reduce((x,y) =>x+y))
        }
    })
}

let arr1 = calculateSum([1,2,4,4]);
let arr2 = calculateSum([0,2,'tree',4]);


arr1.then((value)=>console.log(value)).catch((value)=>console.log(value))
arr2.then((value)=>console.log(value)).catch((value)=>console.log(value))

// let arr3 = [1,2,4,4];

// console.log('-------------')
// let rand = 0;
// console.log(rand)
// arr3.map(x=>{ 
//     console.log(typeof x);
//     if(typeof x !=='number') {rand=1};
// })

// console.log(arr3.reduce((x,y) =>x+y))