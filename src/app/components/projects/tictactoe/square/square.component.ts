import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tictactoe-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
//this is a 'Dumb' component, because it can't modify its own state; it can only be changed by the parent
export class TictactoeSquareComponent {

  @Input()
  value!: 'X' | 'O';

}
