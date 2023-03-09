const transactions = [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1, -99];

let users = [
  {
    name: "John",
    pin: "1511",
    transactions : [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1]
  },
  {
    name: "Cena",
    pin: "1011",
    transactions : [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1, -99]
  },
  {
    name: "Wank",
    pin: "1111",
    transactions : [40, 900, -50, -40, 65, 1300, -78, -90, 72, -300, -1, 99]
  }
];

console.log(users[0].transactions)


// 1. Sudėjus visus skaičius kokia suma gaunasi?
let balance = (a) =>{
   return a.reduce((acc, currentValue)=>{
    return acc + currentValue;
})}


// 2. Kiek kartų buvo įvykdytą transactions į sąskaitą (teigiamų tik reikšmių atsakymas bus 5) ir kokia suma iš viso buvo įnešta į sąskaitą (atsakymas bus 2377 kurį turite parodyti)?
let count = 0 ;
transactions.map((a) =>(a>0) ? count++ : null)
console.log(count)
// 3. Kiek kartų buvo nuimta ir kokia bendra suma, tai iš esmės kaip antroje užduotyje tik su nuskaičiuotom, kitaip tariant neigiamom reikšmėm (čia jums gali tekti pamąstyti ar pasigooglinti kaip paversti gautą neigiamą skaičių teigiamu)?
console.log(transactions.reduce((acc, currentValue)=>{
    if((currentValue>0)&&(acc>0)) return acc + currentValue;
    if((currentValue>0)&&(acc<0)) return acc*(-1) + currentValue;
    if((currentValue<0)&&(acc>0)) return acc + currentValue*(-1);
}))
// 4. Kokia didŽiausia pridėta suma? (pabandykite naudoti if else)
const max = transactions.reduce((acc, currentValue) => Math.max(acc, currentValue));
console.log(max)
// 5. Kokia mažiausia nuimta suma? (pabandykite naudoti ternary operator)
const min = transactions.reduce((acc, currentValue) => Math.min(acc, currentValue));
console.log(min)
// 6. Koks įnašų vidurkis, suapvalinti į mažesniąją pusę?
let sum = 0 ;
transactions.map((a) =>(a>0) ? sum+=a : null)
console.log(Math.floor(sum/count))
// 7. Koks nuimtų pinigų vidurkis, suapvalinti į mažesniąją pusę?
sum = 0 ;
transactions.map((a) =>(a<0) ? sum+=a*(-1) : null)
console.log(Math.floor(sum/count))

let input = document.querySelectorAll('input')[0];

let buttonAdd = document.querySelectorAll('button')[0];
let buttonWithdraw = document.querySelectorAll('button')[1];
let buttonBalance = document.querySelectorAll('button')[2];


let inputName = document.querySelectorAll('input')[1];
let inputPin = document.querySelectorAll('input')[2];

buttonAdd.addEventListener('click', () =>{



    if (inputName.value && inputPin.value) {
        users.map((a) => {
          if (a.name == inputName.value) {
            if (a.pin == inputPin.value) {


    
 
                if(input.value){
                    input.value>0 ? a.transactions.push(+input.value) : alert('Number must be positive')}
                else alert('Enter amount')
                console.log(a.transactions)


                let p = document.createElement('p');
                p.textContent = `Added ${input.value} Balance: ${balance(a.transactions)}`;
                input.value = '';
                document.body.append(p);



    }
}
});
}
else alert('Pin or Name is not entered')
})
// buttonAdd.addEventListener('click', () =>{
 
//         if(input.value){
//             input.value>0 ? transactions.push(+input.value) : alert('Number must be positive')}
//         else alert('Enter amount')
//         console.log(transactions)

//         let p = document.createElement('p');
//         p.textContent = `Added ${input.value} Balance: ${balance(transactions)}`;
//         input.value = '';
//         document.body.append(p);
// })

buttonBalance.addEventListener('click', () =>{

    if (inputName.value && inputPin.value) {
        users.map((a) => {
          if (a.name == inputName.value) {
            if (a.pin == inputPin.value) {

                


    let p = document.createElement('p');
    p.textContent = `Balance: ${balance(a.transactions)}`;
    input.value = '';
    document.body.append(p);

}
}
});
}
else alert('Pin or Name is not entered')


})

buttonWithdraw.addEventListener('click', () =>{

    if (inputName.value && inputPin.value) {
        users.map((a) => {
          if (a.name == inputName.value) {
            if (a.pin == inputPin.value) {

        console.log(a.transactions.push((+input.value)*-1))

        if(input.value){
            input.value>0 ? a.transactions.push((+input.value)*-1) : alert('Number must be positive')}
        else alert('Enter amount')
        console.log(a.transactions)


        let p = document.createElement('p');
        p.textContent = `Withdrawed ${input.value} Balance: ${balance(a.transactions)}`;
        input.value = '';
        document.body.append(p);



}
}
});
}
else alert('Pin or Name is not entered')
})



document.querySelectorAll("button")[3].addEventListener("click", () => {
  // console.log(inputName.value)
  // console.log(inputPin.value)

  if (inputName.value && inputPin.value) {
    users.map((a) => {
      if (a.name == inputName.value) {
        if (a.pin == inputPin.value) {

          console.log("toks yra"); //codemain

        }
      }
    });
  }
  else alert('Pin or Name is not entered')


});

