import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eyeball',
  templateUrl: './eyeball.component.html',
  styleUrls: ['./eyeball.component.css']
})
export class EyeballComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let eyelidImages: string[] = [
      'assets/images/eyelid2-06.png',
      'assets/images/eyelid2-07.png',
      'assets/images/eyelid2-08.png',
      'assets/images/eyelid2-09.png',
  ]
  
  const eyelid: HTMLImageElement = document.querySelector('.eyelidImg') as HTMLImageElement;
  
  let interval: number = 8000;
  
  setInterval(() => {
      setTimeout(function() {
          eyelid.src = eyelidImages[1]
      },0);
      setTimeout(function() {
          eyelid.src = eyelidImages[2]
      },10);
      setTimeout(function() {
          eyelid.src = eyelidImages[3]
      },20);
      setTimeout(function() {
          eyelid.src = eyelidImages[2]
      },50);
      setTimeout(function() {
          eyelid.src = eyelidImages[1]
      },60);
      setTimeout(function() {
          eyelid.src = eyelidImages[0]
      },70);
      // console.log("interval");
  }, interval);
  }

}
