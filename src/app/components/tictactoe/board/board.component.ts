import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  //nine squares on the game board; an array of strings
  squares: any[] = [];
  //determines the current player using the gameboard
  xIsNext: boolean = false;
  //the winning player, either X or O
  winner: string = "";

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  //generates a new board with the necessary objects when the webpage is loaded
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  //checks which player is the current player
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  //event handler that performs an action when the user clicks on a square
  makeMove(idx: number) {
    //if statement that runs if the square has not been clicked on
    if (!this.squares[idx]) {
      //if the square is empty or null, splices the index of the square the user clicked on based on the current player
      this.squares.splice(idx, 1, this.player);
      //switches to the opposite player
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
    //added this if statement, because the "Player _ has won the game" announcement displayed the opposite player
    if (this.winner != null) {
      this.xIsNext = !this.xIsNext;
    }
  }

  //copied this code
  calculateWinner() {
    //an array of valid winning conditions (straight lines on the board)
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    //checks if...?
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
