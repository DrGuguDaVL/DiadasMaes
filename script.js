function showMessage() {

  const message = document.getElementById("message");

  message.style.display = "block";

  for(let i = 0; i < 25; i++) {
    createHeart();
  }

}

function createHeart() {

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration =
    Math.random() * 3 + 3 + "s";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);

}

setInterval(createHeart, 700);