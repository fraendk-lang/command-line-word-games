// scripts/rockPaperScissors.js — yours to write.
//
// The markers below name requirements from README.md, so the brief, your
// Issues, the agent and this file all use the same words. Nothing reads them.

// FR005 — Rock Paper Scissors.
// Read the player's move from process.argv, generate a random move for the
// computer, decide the winner (or a draw) by the rules of the game, and print
// the result to the console.
//
// node scripts/rockPaperScissors.js rock
// # You chose rock. Computer chose scissors. You win!

// FR008 — Reject an invalid or missing move.
// If no move is given, or it isn't one of rock, paper or scissors, print a
// usage message instead of letting the program crash or silently guess.
const playerMove = process.argv[2];
const moves = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);
const computerMove = moves[randomIndex];
if (
    playerMove !== "rock" &&
    playerMove !== "paper" &&
    playerMove !== "scissors"
) {
    console.log("Bitte gib rock, paper oder scissors ein.");
} else {
    console.log(playerMove);
    console.log(computerMove);
    if (playerMove === computerMove) {
        console.log("Unentschieden!");
       } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper") 
    ) {
        console.log("Du gewinnst!");
        } else {
        console.log("Computer gewinnt!");
    }
}