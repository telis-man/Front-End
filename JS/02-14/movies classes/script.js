let name = document.querySelector("#name");
let year = document.querySelector("#year");
let director = document.querySelector("#director");
let budget = document.querySelector("#budget");
let income = document.querySelector("#income");

class Movie {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
  nameAndAuthor = ()=> {
    return `${this.author}:"${this.name}"`;
  };
}

console.log(document.querySelector('form').target);

document.querySelector('button').addEventListener('click', ()=>{
    console.log(document.querySelector('form').target);
}
)
