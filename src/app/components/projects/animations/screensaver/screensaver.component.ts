import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.css']
})
export class ScreensaverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Tutorial: https://www.youtube.com/watch?v=wMIARRCox9k

    function filePather(name: string) {
      return "assets/images/Tokens/ScreenSaver/SS_" + name + ".png";
    };

    const screensaverImages = [
      filePather("DotNet"),
      filePather("HTML"),
      filePather("CSS"),
      filePather("JavaScript"),
      filePather("CSharp"),
      filePather("TypeScript"),
      filePather("SQL"),
      filePather("Java"),
      filePather("C"),
      filePather("Python"),
      filePather("PHP"),
      filePather("Swift"),
      filePather("Go"),
      filePather("R"),
      filePather("AWS"),
      filePather("GitHub"),
      filePather("Angular")
    ];


    const screensaverScreen = document.querySelector("#screensaverScreen") as HTMLElement;
    // const screensaverTravelBar = document.querySelector("#screensaver .travelBar");
    const screensaverObject = document.querySelector("#screensaverImgContainer") as HTMLElement;
    const screensaverImg = document.querySelector("#screensaverImg") as HTMLImageElement;

    let xPos = 10;
    let yPos = 10;
    let xSpeed = 2;
    let ySpeed = 2;
    const FPS = 60;

    function move() {
      screensaverObject.style.left = xPos + 'px';
      screensaverObject.style.top = yPos + 'px';
    }

    let i = 0;

    function imgSwitch() {
      screensaverImg.src = screensaverImages[i];

      if (i >= 16) {
        i = 0;
      } else {
        i++;
      }
    }

    setInterval(function () {
      if (xPos + screensaverObject.offsetWidth >= screensaverScreen.offsetWidth || xPos <= 0) {
        xSpeed = -xSpeed;
        imgSwitch();
        console.log(i);
      }
      if (yPos + screensaverObject.offsetHeight >= screensaverScreen.offsetHeight || yPos <= 0) {
        ySpeed = -ySpeed;
        imgSwitch();
        console.log(i);
      }

      xPos += xSpeed;
      yPos += ySpeed;
      move();
    }, 1000 / FPS)
  }

}
