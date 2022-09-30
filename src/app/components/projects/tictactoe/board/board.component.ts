import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class TictactoeBoardComponent implements OnInit {
  //nine squares on the game board; an array of strings
  squares: any[] = [];
  //determines the current player using the gameboard
  xIsNext: boolean = false;
  //the winning player, either X or O
  winner: string = "";

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  //generates a new board with the necessary objects when the webpage is loaded
  newGame() {
    this.resetBoard();

    // sets all square values to null
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

    let tttButtonsCollection = document.getElementsByClassName('tttButton')! as HTMLCollectionOf<HTMLElement>;
    let tttButtonsArray = Array.from(tttButtonsCollection);

     //if statement that runs victory animation
     if (this.winner != null && this.player == 'X') {
      tttButtonsArray.forEach(tttButton => {
        tttButton.style.transition = '500ms';
        this.buttonVictory(tttButton, 'tttButtonX');
      });
    } else if (this.winner != null && this.player == 'O') {
      tttButtonsArray.forEach(tttButton => {
        tttButton.style.transition = '500ms';
        this.buttonVictory(tttButton, 'tttButtonO');
      });
    }

    this.playerTitleBGset();
  }

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
    //for loop that checks if...?
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

// function that applies color changes to target button element
  buttonVictory(button: HTMLElement, className: string) {
    setTimeout(function () {
      button.classList.add('tttButtonWhite');
    }, 100);
    setTimeout(function () {
      button.classList.remove('tttButtonWhite');
      button.classList.add(className);
    }, 600);
  }

  //changes PlayerTitle background color depending on active player
  playerTitleBGset() {
    let playerBlocksCollection = document.getElementsByClassName('playerBlock')! as HTMLCollectionOf<HTMLElement>;
    let playerBlocksArray = Array.from(playerBlocksCollection);

    //if statement that changes the background color for the playerTitle
    if (this.player == 'X') {
      playerBlocksArray.forEach(playerBlock => {
        playerBlock.style.backgroundColor = 'orange';
      });
    } else if (this.player == 'O') {
      playerBlocksArray.forEach(playerBlock => {
        playerBlock.style.backgroundColor = '#29abe0';
      });
    }
  }

  //function that resets the board
  resetBoard() {
    let tttButtonsCollection = document.getElementsByClassName('tttButton')! as HTMLCollectionOf<HTMLElement>;
    let tttButtonsArray = Array.from(tttButtonsCollection);

    tttButtonsArray.forEach(tttButton => {
      tttButton.style.removeProperty('transition');
      tttButton.classList.remove('tttButtonX', 'tttButtonO', 'tttButtonWhite');
    });
  }

}
