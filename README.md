# Tic-Tac-Toe
A Tic Tac Toe game you can play in your browser!
## Description

This project is a simple implementation of the classic Tic Tac Toe game built using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces on a 3x3 grid to achieve a winning combination of three markers in a row, column, or diagonal.

## Project Purpose and Architecture

This project was designed to demonstrate the implementation of the Tic Tac Toe game using JavaScript and various programming patterns, including the use of IIFE (Immediately Invoked Function Expression) modules and factory functions. The primary goals behind incorporating these concepts were:

### IIFE Modules

The game logic and data structures have been encapsulated within IIFE modules to create private scopes for better organization and prevent pollution of the global scope. Each module, such as GameBoard, Players, and displayController, is self-contained and exposes only necessary methods or data using a revealing module pattern.

### Factory Functions

The Players module utilizes factory functions to create player objects, allowing easy creation of player instances with properties like name and marker. This approach enables the creation of multiple player instances with a consistent structure.

These architectural decisions were made to promote modularity, encapsulation, and maintainability of the codebase while demonstrating the use of IIFE and factory function patterns in JavaScript projects.

Feel free to explore the codebase to understand how these patterns are applied in the implementation of the Tic Tac Toe game.

## Features

- Two Player Mode: Play against a friend on the same device, taking turns to place markers.
- Winning Conditions: Detects winning combinations and declares the winner when three markers match in a row, column, or diagonal.
- Draw Detection: Detects when all cells are filled without a winner and declares it as a draw.
- Restart Functionality: Allows players to restart the game for a new round.
## Demo

You can view a live demo of this project [here](https://zahrabateninia.github.io/Tic-Tac-Toe/index.html).

## Contributing

If you'd like to contribute to this project, fork the repository and submit a pull request with your changes.

## License

The materials and guidance from [The Odin Project](https://www.theodinproject.com) were used as a reference to complete this project. Certain code structures or concepts may have been inspired by the teachings and resources provided by The Odin Project.


To see the whole steps of solving this problem, you can check out [JavaScript Course](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe) in TOP.
