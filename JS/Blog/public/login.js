let getUrl = "https://testapi.io/api/telisman/resource/users";
let form = document.querySelector("form");
let userID;
// console.log(userID)

form.addEventListener("submit", (event) => {
  // console.log(event.target.username.value)
  event.preventDefault();
  fetch(getUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      for (user in result.data) {
        if (result.data[user].username === event.target.username.value) {
          if (result.data[user].password === event.target.password.value) {
            userID = result.data[user].username;
            sessionStorage.setItem("userID", userID);
            window.location.replace("index.html");
          } else {
            console.log("username and password do not match");
            break;
          }
        }
      }
      // console.log(userID)
    });
});
