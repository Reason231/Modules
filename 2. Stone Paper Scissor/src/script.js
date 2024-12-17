const choices = ["rock", "paper", "scissors"];
const span=document.querySelector("span")

// Attach event listeners dynamically for all images
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id; // Get player's choice from button ID
        const computerChoice = computer(); // Get computer's random choice
        
        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        const result = determineWinner(playerChoice, computerChoice); // Determine the winner
        span.innerHTML=result
    });
});

// Function to generate computer's random choice
function computer() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }
    
    // Define the winning conditions
    if (
        // Player jitni condition haru. like hami lea rock lida, ra computer lea scissor lida hami jityo so we won.
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You won!";
    } else {
        return "Computer won!";
    }
}
