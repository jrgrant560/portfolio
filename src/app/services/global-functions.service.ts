import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }

  //sets target element display to block
  revealMe(elementTarg: string) {
    let element = document.querySelector(elementTarg) as HTMLElement;
    element.style.display = 'block';
  }

  //sets target element display to none
  hideMe(elementTarg: string) {
    let element = document.querySelector(elementTarg) as HTMLElement;
    element.style.display = 'none';
  }
}
