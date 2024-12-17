const btn = document.querySelectorAll(".btn");
const evenX = [];
const oddY = [];
let counter = 0;

// All possible winning patterns
let winningPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Event handler for buttons
const eventFunction = () => {
  btn.forEach(button => {
    button.addEventListener("click", () => {
      if (button.children.length > 0) return; // Prevent clicking the same button again

      if (counter % 2 === 0) {
        counter++;
        evenX.push(parseInt(button.id)); // Add even id to the evenX array
        const img = document.createElement("img");
        img.src = "cross-logo.png";
        img.style.width = "100px"; // Optional: Style the image
        img.style.height = "80px";
        button.appendChild(img);

      } else {
        counter++;
        oddY.push(parseInt(button.id)); // Add odd id to the oddY array
        const img = document.createElement("img");
        img.src = "circle-logo.png";
        img.style.width = "60px"; // Optional: Style the image
        img.style.height = "70px";
        img.style.marginLeft = "20px";
        img.style.marginTop = "3px";
        button.appendChild(img);
      }

      winningChecker();
    });
  });
};

// Function to check for a winner
function winningChecker() {
  winningPatterns.forEach(pattern => {
    // Check if all positions in the pattern are in evenX (X player)
    if (pattern.every(pos => evenX.includes(pos))) {
      setTimeout(()=>{
        alert("X won!");
        resetGame();
      },100)
    }
    // Check if all positions in the pattern are in oddY (Y player)
    else if (pattern.every(pos => oddY.includes(pos))) {
      setTimeout(()=>{
        alert("O won!");
        resetGame();
      },100)
      }
  });

  // If the games becames draw
  if(counter>=9){
    setTimeout(()=>{
      alert("Its a draw")
      resetGame()
    },100)
  }
}

// Function to reset the game
function resetGame() {
  btn.forEach(button => button.innerHTML = ""); // Clear all buttons
  evenX.length = 0; // Clear X moves
  oddY.length = 0; // Clear O moves
  counter = 0; // Reset counter
}

eventFunction();
