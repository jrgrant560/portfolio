import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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

  constructor(
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.newGame();

    const victoryFlair = document.querySelector('.victoryFlair') as HTMLElement;

    //monitors viewport breakpoints and runs code if the observed viewpoint is reached
    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        victoryFlair.style.display = 'none'
      } else {
        victoryFlair.style.removeProperty('display');
      }
    });
  
  }

  //generates a new board with the necessary objects when the webpage is loaded
  newGame() {
    let winningPlayerTitle = document.getElementById('winningPlayer') as HTMLElement;
    let currentPlayerTitle = document.getElementById('currentPlayer') as HTMLElement;

    // swaps displays for player titles
    winningPlayerTitle.style.display = 'none';
    currentPlayerTitle.style.display = 'inline-block';

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
    //if statement that runs if the square has not been clicked on???
    if (!this.squares[idx]) {
      //if the square is empty or null, splices the index of the square the user clicked on based on the current player
      this.squares.splice(idx, 1, this.player);
      //switches to the opposite player
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();

    //if statement that runs if there is a winner
    if (this.winner != null) {
      let winningPlayerTitle = document.getElementById('winningPlayer') as HTMLElement;
      let currentPlayerTitle = document.getElementById('currentPlayer') as HTMLElement;

      // swaps displays for player titles
      winningPlayerTitle.style.display = 'inline-block';
      currentPlayerTitle.style.display = 'none';

      //added this if statement, because the "Player _ has won the game" announcement displayed the opposite player
      this.xIsNext = !this.xIsNext;

      //run victory Flair Animation
      this.victoryFlair();

      let tttButtonsCollection = document.getElementsByClassName('tttButton')! as HTMLCollectionOf<HTMLElement>;
      let tttButtonsArray = Array.from(tttButtonsCollection);

      //if statement that runs style changes for victory, depending on player
      if (this.player == 'X') {
        winningPlayerTitle.style.color = 'orange';
        tttButtonsArray.forEach(tttButton => {
          tttButton.style.transition = '500ms';
          this.buttonVictory(tttButton, 'tttButtonX');
        });
      } else if (this.player == 'O') {
        winningPlayerTitle.style.color = '#29abe0';
        tttButtonsArray.forEach(tttButton => {
          tttButton.style.transition = '500ms';
          this.buttonVictory(tttButton, 'tttButtonO');
        });
      }

      //sets all buttons to disabled from player input; had to set a timing function on this to make it work, or the last button would remain enabled
      //probably a better way to code this part, but I need to move on!...
      setTimeout(function () { 
      //re-fetch all tttButtons
      tttButtonsCollection = document.getElementsByClassName('tttButton')! as HTMLCollectionOf<HTMLElement>;
      tttButtonsArray = Array.from(tttButtonsCollection);

      //disable all buttons from inputs
      tttButtonsArray.forEach(tttButton => {
        tttButton.setAttribute("disabled", "true")
      });
        console.log(tttButtonsArray);
      }, 100);

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

  // function that applies color changes to target button element after victory
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
    let playerBlocksFlairCollection = document.getElementsByClassName('playerBlockFlair')! as HTMLCollectionOf<HTMLElement>;
    let playerBlocksFlairArray = Array.from(playerBlocksFlairCollection);


    //if statement that changes the background color for the playerTitle
    if (this.player == 'X') {
      playerBlocksArray.forEach(playerBlock => {
        playerBlock.style.backgroundColor = 'orange';
      });
      playerBlocksFlairArray.forEach(playerBlockFlair => {
        playerBlockFlair.style.color = 'orange';
      });
    } else if (this.player == 'O') {
      playerBlocksArray.forEach(playerBlock => {
        playerBlock.style.backgroundColor = '#29abe0';
      });
      playerBlocksFlairArray.forEach(playerBlockFlair => {
        playerBlockFlair.style.color = '#29abe0';
      });
    }
  }

  // victory flair animation on all flair elements
  victoryFlair() {
    let playerBlockFlairContainer1 = document.querySelector('.playerBlockFlairContainer1') as HTMLElement;
    let playerBlockFlairContainer2 = document.querySelector('.playerBlockFlairContainer2') as HTMLElement;
    let playerBlockFlairContainer3 = document.querySelector('.playerBlockFlairContainer3') as HTMLElement;
    let playerBlockFlairContainer4 = document.querySelector('.playerBlockFlairContainer4') as HTMLElement;
    let playerBlockFlairContainer5 = document.querySelector('.playerBlockFlairContainer5') as HTMLElement;

    let playerBlockFlair1 = document.querySelector('.playerBlockFlair1') as HTMLElement;
    let playerBlockFlair2 = document.querySelector('.playerBlockFlair2') as HTMLElement;
    let playerBlockFlair3 = document.querySelector('.playerBlockFlair3') as HTMLElement;
    let playerBlockFlair4 = document.querySelector('.playerBlockFlair4') as HTMLElement;
    let playerBlockFlair5 = document.querySelector('.playerBlockFlair5') as HTMLElement;

    playerBlockFlairContainer1.style.left = 'calc(var(--blockFlair1-left) * 2)';
    playerBlockFlairContainer1.style.top = 'calc(var(--blockFlair1-top) * 2)';

    playerBlockFlairContainer2.style.left = 'calc(var(--blockFlair2-left) * 2)';
    playerBlockFlairContainer2.style.top = 'calc(var(--blockFlair2-top) * 8)';

    playerBlockFlairContainer3.style.left = 'calc(var(--blockFlair3-left) * 2)';
    playerBlockFlairContainer3.style.top = 'calc(var(--blockFlair3-top) * 4)';

    playerBlockFlairContainer4.style.left = 'calc(var(--blockFlair4-left) * 2)';
    playerBlockFlairContainer4.style.top = 'calc(var(--blockFlair4-top) * 6)';

    playerBlockFlairContainer5.style.left = 'calc(var(--blockFlair5-left) * 2)';
    playerBlockFlairContainer5.style.top = 'calc(var(--blockFlair5-top) * 3)';

    //resets position of all playerBlockFlairContainers after 1500ms
    setTimeout(function () {
      playerBlockFlairContainer1.style.left = 'calc(var(--blockFlair1-left))';
      playerBlockFlairContainer1.style.top = 'calc(var(--blockFlair1-top))';

      playerBlockFlairContainer2.style.left = 'calc(var(--blockFlair2-left))';
      playerBlockFlairContainer2.style.top = 'calc(var(--blockFlair2-top))';

      playerBlockFlairContainer3.style.left = 'calc(var(--blockFlair3-left))';
      playerBlockFlairContainer3.style.top = 'calc(var(--blockFlair3-top))';

      playerBlockFlairContainer4.style.left = 'calc(var(--blockFlair4-left))';
      playerBlockFlairContainer4.style.top = 'calc(var(--blockFlair4-top))';

      playerBlockFlairContainer5.style.left = 'calc(var(--blockFlair5-left))';
      playerBlockFlairContainer5.style.top = 'calc(var(--blockFlair5-top))';
    }, 1500);


    //sets playerBlockFlairs to 100%
    playerBlockFlair1.style.opacity = '100%';
    playerBlockFlair2.style.opacity = '100%';
    playerBlockFlair3.style.opacity = '100%';
    playerBlockFlair4.style.opacity = '100%';
    playerBlockFlair5.style.opacity = '100%';

    //sets playerBlockFlairs to 0% after 750ms
    setTimeout(function () {
      playerBlockFlair1.style.opacity = '0%';
      playerBlockFlair2.style.opacity = '0%';
      playerBlockFlair3.style.opacity = '0%';
      playerBlockFlair4.style.opacity = '0%';
      playerBlockFlair5.style.opacity = '0%';
    }, 750);
  }

  //function that resets the board
  resetBoard() {
    let tttButtonsCollection = document.getElementsByClassName('tttButton')! as HTMLCollectionOf<HTMLElement>;
    let tttButtonsArray = Array.from(tttButtonsCollection);

    tttButtonsArray.forEach(tttButton => {
      //remove disabled attribute from all buttons
      tttButton.removeAttribute("disabled")
      tttButton.style.removeProperty('transition');
      tttButton.classList.remove('tttButtonX', 'tttButtonO', 'tttButtonWhite');
    });
  }

}
