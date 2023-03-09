let input = document.querySelector("input");
let form = document.querySelector("form");
let messageBox = document.createElement("div");
messageBox.style.width = "402px";
messageBox.style.padding = "10px";
messageBox.style.marginTop = "10px";
messageBox.style.marginBottom = "10px";
messageBox.style.color = "#f7ede2";

displayRejectedValue = () => {
  messageBox.style.backgroundColor = "#f28482";
  messageBox.textContent =
    "That is not a number, or it doesnt fit the requirements";
  form.append(messageBox);
};

displayAcceptedValue = () => {
  messageBox.style.backgroundColor = "#84a59d";

  messageBox.textContent = "Number is between 0 and 99";

  form.prepend(messageBox);
};

input.addEventListener("blur", (event) => {
  event.preventDefault();

  if (document.querySelector("div")) {
    messageBox.remove();
  }

  let inputValue = +event.target.value;

  if (0 < inputValue && inputValue < 99) {
    displayAcceptedValue();
  } else {
    displayRejectedValue();
  }
});
