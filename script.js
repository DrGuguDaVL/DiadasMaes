// Mostrar mensagem
function showMessage(){
  document.getElementById("message").style.display = "block";

  for(let i = 0; i < 20; i++){
    createHeart();
  }
}

// Criar corações
function createHeart(){
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
  Math.random() * 30 + 20 + "px";

  heart.style.animationDuration =
  Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Corações infinitos
setInterval(createHeart, 500);