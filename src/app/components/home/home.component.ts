import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from 'src/app/services/global-functions.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private globalFuncs: GlobalFunctionsService
  ) {}

  revealMe(elementTarg: string) {
    this.globalFuncs.revealMe(elementTarg)
  };

  hideMe(elementTarg: string) {
    this.globalFuncs.hideMe(elementTarg)
  };


  ngOnInit(): void {
    // fetched elements
    const headerTitle = document.getElementById("headerTitle")!;
    const headerSubA = document.getElementById("headerSubA")!;
    const headerSubB = document.getElementById("headerSubB")!;
    const headerSubC = document.getElementById("headerSubC")!;
    const headerSubD = document.getElementById("headerSubD")!;

    const typeBlockTitle = document.getElementById("typeBlockTitle")!;
    const typeBlockA = document.getElementById("typeBlockA")!;
    const typeBlockB = document.getElementById("typeBlockB")!;
    const typeBlockC = document.getElementById("typeBlockC")!;
    const typeBlockD = document.getElementById("typeBlockD")!;

    const homeScrollSection = document.getElementById("homeScroll")!;
    const infoContainer = document.getElementById("infoContainer")!;
    const ghAlert = document.getElementById("ghAlert")!;

    // messages
    let messageTitle = "Hi. I'm Jacob.";
    let messageSubA = "Web Developer";
    let messageSubB = "UI/Graphic Designer";
    let messageSubC = "Operations Specialist";
    let messageSubD = "Reluctant Coffee Addict ☕";


    // type cursor blinking animation
    function typeBlockBlink(typeBlock: HTMLElement) {
      if (typeBlock.style.backgroundColor === 'transparent') {
        typeBlock.style.backgroundColor = 'orange';
      } else {
        typeBlock.style.backgroundColor = 'transparent';
      };
    };

    // declare interval for blinking animation
    let IntervalTitle: any;
    let IntervalSubA: any;
    let IntervalSubB: any;
    let IntervalSubC: any;
    let IntervalSubD: any;

    // start type cursor blinking animation
    function startBlink(typeBlock: HTMLElement, intervalName: string) {
      function setBlock() {
        typeBlockBlink(typeBlock);
      };

      switch (intervalName) {
        case 'IntervalTitle':
          IntervalTitle = setInterval(setBlock, 300);
          break;
        case 'IntervalSubA':
          IntervalSubA = setInterval(setBlock, 300);
          break;
        case 'IntervalSubB':
          IntervalSubB = setInterval(setBlock, 300);
          break;
        case 'IntervalSubC':
          IntervalSubC = setInterval(setBlock, 300);
          break;
        case 'IntervalSubD':
          IntervalSubD = setInterval(setBlock, 300);
          break;
      }

    }

    // end type cursor blinking animation
    function endBlink(typeBlock: HTMLElement, intervalName: string) {
      function stopBlinking(intervalSwitch: any) {
        clearInterval(intervalSwitch);
        typeBlock.style.backgroundColor = 'orange';
      }

      switch (intervalName) {
        case 'IntervalTitle':
          stopBlinking(IntervalTitle);
          break;
        case 'IntervalSubA':
          stopBlinking(IntervalSubA);
          break;
        case 'IntervalSubB':
          stopBlinking(IntervalSubB);
          break;
        case 'IntervalSubC':
          stopBlinking(IntervalSubC);
          break;
        case 'IntervalSubD':
          stopBlinking(IntervalSubD);
          break;
      }

    }

    // recursive function that adds a letter, repeating at 50ms interval until end of text string
    function typeWriter(text: string, element: HTMLElement, speed: number, i: number) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
          typeWriter(text, element, speed, i);
        }, speed);
      };
    }

    // types, then untypes a message; pauses cursor blinking during typing
    function typeThis(text: string, element: HTMLElement, speed: number, typeBlock: HTMLElement, intervalName: string, delay: number) {

      let typeLength = text.length * speed;
      let typeStartDelay = delay;

      let i = 0;

      // types message, pauses cursor blinking
      setTimeout(function () {
        //types message
        typeWriter(text, element, speed, i);
        //stops cursor blinking
        endBlink(typeBlock, intervalName);

        //restarts cursor blinking
        setTimeout(function () {
          startBlink(typeBlock, intervalName);

          //animation sequence for other HomePage elements (starts after 'headerTitle' has completed)
          if (element == headerTitle) {
            homeScrollSection.style.top = '0';
            setTimeout(function () {
              infoContainer.style.top = '-2em';
            }, 1500)
            setTimeout(function () {
              ghAlert.style.opacity = '100%';
            }, 7000)
          };

        }, typeLength);

        //makes cursor disappear some time after typing has completed
        setTimeout(function () {
          typeBlock.remove();

        }, (typeLength + 1000));

      }, typeStartDelay);

      // untypes message, pauses cursor blinking
      // setTimeout(function () {
      //   unTypeWriter();
      //   endBlink();
      //   setTimeout(startBlink, typeLength);
      // }, intervalUnType);
    };

    // INITIALIZATION OF ALL FUNCTIONS; set type cursors to transparent and start blinking animation; begin typing all messages
    function init() {
      // set typeblock bg's to transparent
      typeBlockTitle.style.backgroundColor = 'transparent';
      typeBlockA.style.backgroundColor = 'transparent';
      typeBlockB.style.backgroundColor = 'transparent';


      startBlink(typeBlockTitle, 'IntervalTitle');

      setTimeout(function () {
        startBlink(typeBlockA, 'IntervalSubA');
        startBlink(typeBlockC, 'IntervalSubC');
      }, 1840);

      setTimeout(function () {
        startBlink(typeBlockB, 'IntervalSubB');
        startBlink(typeBlockD, 'IntervalSubD');
      }, (1840 + 200));

      //type title
      typeThis(messageTitle, headerTitle, 60, typeBlockTitle, 'IntervalTitle', 1000);

      //type sub header A
      setTimeout(function () {
        typeThis(messageSubA, headerSubA, 80, typeBlockA, 'IntervalSubA', 1000);
      }, (1840 + 200));

      //type sub header B
      setTimeout(function () {
        typeThis(messageSubB, headerSubB, 80, typeBlockB, 'IntervalSubB', 1000);
      }, 1840);

      //type sub header C
      setTimeout(function () {
        typeThis(messageSubC, headerSubC, 80, typeBlockC, 'IntervalSubC', 1000);
      }, (1840 + 500));

      //type sub header D
      setTimeout(function () {
        typeThis(messageSubD, headerSubD, 80, typeBlockD, 'IntervalSubD', 1000);
      }, (1840 + 300));

    }

    init();
  }
}
