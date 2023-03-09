//pirmai uzduociai
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

//antra uzduotis
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

let returnNames = (arr) => {
  let names = [];
  arr.map((a, index) => {
    names[index] = a.name;
  });
  return names;
};

let personInArray = (arr, inp) => {
  let namesArray = arr.map((a) => {
    return a.name;
  });

  if (namesArray.includes(inp)) {
    if (inp.slice(-1) === "s") {
      console.log(`Welcome Mr. ${inp}`);
    } else {
      console.log(`Welcome Mrs. ${inp}`);
    }
  } else {
    console.log(`Unfotunately the name is not in our list`);
  }
};

let input = document.createElement("input");

input.addEventListener("blur", () => {
  personInArray(budgets, input.value);
});

document.body.append(input);

//task2

let arrCountTwos = (arr) => {
  let num = 0;

  arr.filter((a) => {
    if (a == 2) num += 1;
  });

  return num;
};

let arrCountTwos2 = (arr) => {
  let arrOfTwo = arr.filter((num) => num == 2);
  return arrOfTwo.length;
};

console.log(arrCountTwos(numbers));
console.log(arrCountTwos2(numbers));
