
function mostrarMensagem() {
  document.getElementById("popup").style.display = "block";
}
function fecharMensagem() {
  document.getElementById("popup").style.display = "none";
}

// Adiciona o clique em todas as peças
document.querySelectorAll(".piece").forEach(piece => {
  piece.addEventListener("click", () => {
    const message = piece.getAttribute("data-message");
    const gif = piece.getAttribute("data-gif");

    document.getElementById("popup-text").textContent = message;
    const gifElement = document.getElementById("popup-gif");
    gifElement.src = gif;
    gifElement.style.display = "block";

    document.getElementById("popup").style.display = "block";
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


function toggleMusic() {
  const music = document.getElementById("background-music");
  const btn = document.getElementById("toggle-btn");

  if (music.paused) {
    music.play();
    btn.textContent = "⏸️";
  } else {
    music.pause();
    btn.textContent = "▶️";
  }
}
