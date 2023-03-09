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







let makePizza = (toppings) =>{
    return new Promise ((resolve, reject) =>{
        if(toppings.includes('pineapple')){
            reject('I hate pineapple')
        }
        else{
            resolve(`Pizza toppings are ${toppings}`)
        }
    })
}

let hawaii = makePizza(['pineapple','cheese']);
console.log('faasn')
let pepperoni = makePizza(['pepperoni','cheese']);

hawaii.then((value) => console.log(value)).catch((value) => console.log(value)); //promisas realiai suveikia kai tikrini su then arba catch

pepperoni.then((value) => console.log(value)).catch((value) => console.log(value));


