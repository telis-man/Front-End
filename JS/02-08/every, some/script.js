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

//task1

const monies = budgets.map((person) => person.budget);

let isNegative = (arr) => {
  arr.some((a) => a < 0) ? console.log("True") : console.log("False");
};

// isNegative(monies);

//task2

let belowHundred = (arr) => {
  return arr.some((a) => a < 100)
    ? arr.filter((a) => a < 100)
    : console.log("All numbers are above 100");
};
// console.log(belowHundred(monies))

//task3

const names = budgets.map((person) => person.name);

let symbolified = (arr) => {

  let newArr = arr.map((a) => {

    if (arr.every((a) => a.length > 3)) {

      if (a.includes("a")) {
        // return a.substring(0, a.indexOf("a")) + "@" + a.substring(a.indexOf("a") + 1); arba
        // return a.replace("a", "@");
        return a.splice(a.indexOf("a"),1, "@");
      }
      else return a
    }

  });

  return newArr;

};

console.log(symbolified(names));
