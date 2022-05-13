import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    let display = document.getElementById('display')!;

    //adds all buttons to an html collection
    let buttonHTMLcollection = document.getElementsByClassName('button');
    //converts html collection to an array
    let buttons = Array.from(buttonHTMLcollection);

    //event listener for the calculator
    buttons.map(button => {
      button.addEventListener('click', (e) => {
        let eventButton = e.target as HTMLElement;
        switch (eventButton.innerText) {
          //when 'C' is pressed, the display's contents will be set to an empty string or "cleared"
          case 'C':
            display.innerText = '';
            break;
          //when '←' is pressed...
          case '←':
            //clear display if there is an 'article' element (a previous answer) inside the dislay
            if (display.innerHTML.includes('<article>') || display.innerText == "Error!") {
              display.innerText = '';
            } else if (display.innerText) { //backspace 1 character
              display.innerText = display.innerText.slice(0, -1);
            } else { //alert if there is nothing to delete
              alert("Nothing to delete!");
            }
            break;
          case '=':
            try {
              //runs javascript code within the display and assigns the result to the display
              //SECURITY WARNING: eval() is a security risk because it will run any javascript code it is given from the client; avoid or use in testing only!
              let calcEval = eval(display.innerText);
              display.innerHTML = '<article>' + calcEval + '</article>';
              if (display.innerHTML.includes('undefined')) {
                console.log(display.innerHTML);
                display.innerHTML = 'Error!';
              }
              console.log(display.innerHTML);
            }
            catch {
              //displays this message if an error is caught;
              display.innerText = 'Error!';
            }
            break;
          //when any other button is pressed, its text will be added to the display's contents
          default:
            display.innerText += eventButton.innerText;
        }
      });
    });
  }
}