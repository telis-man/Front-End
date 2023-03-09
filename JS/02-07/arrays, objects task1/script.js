let createButtons = (numberOfButtons) => {
  for (let i = 0; i < numberOfButtons; i++) {
    let button = document.createElement("button");
    button.textContent = `button ${i + 1}`;
    button.style.display = "block";
    button.style.margin = "20px";
    button.setAttribute("id", `button${i + 1}`);
    document.body.append(button);
  }
};

let input = document.createElement("input");
document.body.append(input);

createButtons(4);

let mainArray = [];
let p = document.createElement("p");

document.querySelector("#button1").textContent+=' push'
document.querySelector("#button2").textContent+=' pop'
document.querySelector("#button3").textContent+=' shift'
document.querySelector("#button4").textContent+=' unshift'


button1.addEventListener("click", () => {

  mainArray.push(input.value);
  p.textContent = mainArray;
  document.body.append(p);
  input.value = '';
});

document.querySelector("#button2").addEventListener("click", () => {
  mainArray.pop();
  p.textContent = mainArray;
  document.body.append(p);
  input.value = '';
});

document.querySelector("#button3").addEventListener("click", () => {


  mainArray.shift();
  p.textContent = mainArray;
  document.body.append(p);
  input.value = '';
});

document.querySelector("#button4").addEventListener("click", () => {


    mainArray.unshift(input.value);
    p.textContent = mainArray;
    document.body.append(p);
    input.value = '';
  });
