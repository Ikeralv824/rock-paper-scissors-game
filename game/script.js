let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  userChoice = userChoice.toLowerCase();

  const opciones = ["piedra", "papel", "tijera"];

  const eleccionCPU = opciones[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === eleccionCPU) {
    result = "Empate";
  } else if (
    (userChoice === "piedra" && eleccionCPU === "tijera") ||
    (userChoice === "papel" && eleccionCPU === "piedra") ||
    (userChoice === "tijera" && eleccionCPU === "papel")
  ) {
    playerScore++;
    result = "¡Ganaste!";
  } else {
    computerScore++;
    result = "Perdiste";
  }

  document.getElementById("player-score").textContent =
    ` Jugador: ${playerScore}`;
  document.getElementById("computer-score").textContent =
    ` CPU: ${computerScore}`;

  document.getElementById("img-jugador").src = "img/" + userChoice + ".png";
  document.getElementById("img-cpu").src = "img/" + eleccionCPU + ".png";

  const overlay = document.getElementById("overlay");
  const texto = document.getElementById("texto-resultado");
  const modal = document.querySelector(".modal");

  texto.textContent = result;
  overlay.style.display = "flex";

  document.getElementById("overlay").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
  });

  window.onload = function () {
    document.getElementById("img-jugador").src = "img/interrogacion.png";
    document.getElementById("img-cpu").src = "img/interrogacion.png";
  };
}
