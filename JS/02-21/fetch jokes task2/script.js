class ResponseData {
  constructor(ImgUrl, updatedAt, url, joke) {
    this.ImgUrl = ImgUrl;
    this.updatedAt = updatedAt;
    this.url = url;
    this.joke = joke;
  }
}
const cardsContainer = document.querySelector(".cardsContainer");
let cardCounter = 0;
let letterCounter = 0;
const url = `https://api.chucknorris.io/jokes/random`;

document.querySelector(".deleteJokes").addEventListener("click", () => {
  cardCounter = 0;
  letterCounter = 0;
  document.querySelector(".openedCards").textContent = `Opened cards: 0`;
  document.querySelector(".lettersInCard").textContent = `Letters in jokes: 0`;

  while (document.querySelector(".cardsContainer").lastElementChild) {
    document
      .querySelector(".cardsContainer")
      .removeChild(document.querySelector(".cardsContainer").lastElementChild);
  }
});

let generateRGBA = () => {
  // "background-color:rgba(255, 99, 71, 0);"
  // linear-gradient(direction, color-stop1, color-stop2, ...);
  let color1 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  let color2 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;

  return `linear-gradient(${color1},${color2})`;
};

let responseHandler = (obj) => {
  cardCounter++;
  letterCounter += obj.joke.trim().length;

  document.querySelector(
    ".openedCards"
  ).textContent = `Opened cards: ${cardCounter}`;
  document.querySelector(
    ".lettersInCard"
  ).textContent = `Letters in jokes: ${letterCounter}`;

  let card = document.createElement("div");
  card.style.backgroundImage = generateRGBA();
  card.setAttribute("class", `card`);

  let changeBackground = document.createElement("button");
  let closeCard = document.createElement("button");
  changeBackground.textContent = `change Background`;
  closeCard.textContent = `close Card`;

  changeBackground.addEventListener("click", () => {
    card.style.backgroundImage = generateRGBA();
  });

  closeCard.addEventListener("click", () => {
    letterCounter -= obj.joke.trim().length;
    cardCounter--;
    document.querySelector(
      ".openedCards"
    ).textContent = `Opened cards: ${cardCounter}`;
    document.querySelector(
      ".lettersInCard"
    ).textContent = `Letters in jokes: ${letterCounter}`;
    card.remove();
  });

  let imgElement = document.createElement("img");
  imgElement.setAttribute(
    "src",
    `https://api.chucknorris.io/img/avatar/chuck-norris.png`
  );

  let updatedElement = document.createElement("p");
  updatedElement.textContent = obj.updatedAt;

  let linkElement = document.createElement("a");
  linkElement.setAttribute("href", `${obj.url}`);
  linkElement.textContent = `Link to joke`;

  let jokeElement = document.createElement("p");
  jokeElement.textContent = obj.joke;

  let buttonsMenu = document.createElement("div");
  buttonsMenu.setAttribute("class", `buttonsMenu`);

  cardsContainer.append(card);
  card.append(imgElement);
  card.append(updatedElement);
  card.append(linkElement);
  card.append(jokeElement);
  card.append(buttonsMenu);
  buttonsMenu.append(changeBackground);
  buttonsMenu.append(closeCard);
};

document.querySelector("button").addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("not ok");
        throw new Error("request failed");
      }
    })
    .then((responseData) => {
      if (responseData) {
        responseHandler(
          new ResponseData(
            responseData.icon_url,
            responseData.updated_at,
            responseData.url,
            responseData.value
          )
        );
      }
    })
    .catch((e) => console.log(e));
});