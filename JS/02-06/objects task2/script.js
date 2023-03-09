const person = {
  name: "Rosa",
  age: 120,
  alive: false,
  interests: ["swimming", "cards"],
};

person.name = 'Richard';
person.age = Math.floor(20+Math.random()*101);

person.age < 100 ? person.alive = true : person.alive = false;

// ternary be else

person.age < 100 ?? person.interests.push('enjoying life');

// arba

person.age < 100 ? person.interests.push('enjoying life') : null;

console.log(person)