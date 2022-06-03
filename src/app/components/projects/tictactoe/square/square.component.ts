import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tictactoe-square',
  template: `
      <button nbButton *ngIf="!value">{{value}}</button>
      <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
      <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
//this is a 'Dumb' component, because it can't modify its own state; it can only be changed by the parent
export class TictactoeSquareComponent {

  @Input()
  value!: 'X' | 'O';

}