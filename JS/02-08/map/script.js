let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];

let arrDoubled = (arr) =>{

    let doubledArr = [];
    arr.map((a, index) =>{
        doubledArr[index]=a*2;
    })

    return doubledArr;
}

let arrMult = (arr, multiplier) =>{

    let arrDone = arr.map((a) =>{
        return a*multiplier;
    })

    return arrDone;
}


let budCalc = (arr) =>{

    let sum = 0;
    arr.map((a) =>{
        sum+=a.budget;
    })
    return sum;
 
}

let returnNames = (arr) =>{

    let names = [];
    arr.map((a, index) =>{
        names[index]=a.name;
    })
    return names;
 
}



console.log(arrDoubled(numbers));
console.log(arrMult(numbers, 3));
console.log(budCalc(budgets));
console.log(returnNames(budgets));
