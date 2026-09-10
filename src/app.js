const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Bonjour depuis MyShop !";
});
