"use strict";
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];
let x = 0;
let y = 0; // Start at A (0,0) -> [row][col]

const moves = [];
moves.push(board[x][y]); // A

// Move Right to B

// Move Right to C

// Move Down to F

// Move left to E

// console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
// console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4

// moves.push(board[x][y]); // Start at A
// Define movement functions
// Move right (increase column index)
function moveRight() {
  y++; 
  moves.push(board[x][y]);
}
// Move left (decrease column index)
function moveLeft() {
  y--; 
  moves.push(board[x][y]);
}
// Move up (decrease row index)
function moveUp() {
  x--; 
  moves.push(board[x][y]);
}
// Move down (increase row index)
function moveDown() {
  x++; 
  moves.push(board[x][y]);
}
// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E
console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);