function showMessage() {
  const message = document.getElementById("message");
  message.style.display = "block";
  for (let i = 0; i < 25; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  // Define posição horizontal aleatória
  heart.style.left = Math.random() * 100 + "vw";
  // Duração de animação aleatória
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  // Tamanho de fonte aleatório
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";

  document.body.appendChild(heart);
  // Remove o elemento após a animação
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Gera corações constantemente (efeito de fundo)
setInterval(createHeart, 700);
