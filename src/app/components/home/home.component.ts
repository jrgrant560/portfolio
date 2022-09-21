import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // fetched elements
    const headerTitle = document.getElementById("headerTitle")!;
    const headerSub = document.getElementById("headerSub")!;
    // const typeBlockCollection = document.getElementsByClassName("typeBlock") as HTMLCollectionOf<HTMLElement>;
    // const typeBlocks = Array.from(typeBlockCollection);
    const typeBlockA = document.getElementById("typeBlockA")!;
    const typeBlockB = document.getElementById("typeBlockB")!;

    //array of messages
    let messageA = "Hi. I'm Jacob.";

    let messageB = "Web Developer | Coordinator | Graphic Designer";

    // type cursor blinking animation
    function typeBlockBlink(typeBlock: HTMLElement) {
      if (typeBlock.style.backgroundColor === 'transparent') {
        typeBlock.style.backgroundColor = 'orange';
      } else {
        typeBlock.style.backgroundColor = 'transparent';
      };
    };

    // declare interval for blinking animation
    let IntervalA: any;
    let IntervalB: any;

    // start type cursor blinking animation
    function startBlink(typeBlock: HTMLElement, intervalName: string) {
      if (intervalName == 'IntervalA') {
        IntervalA = setInterval(function () {
          typeBlockBlink(typeBlock)
        }, 500);
      }

      if (intervalName == 'IntervalB') {
        IntervalB = setInterval(function () {
          typeBlockBlink(typeBlock)
        }, 500);
      }
    }

    // end type cursor blinking animation
    function endBlink(typeBlock: HTMLElement, intervalName: string) {
      if (intervalName == 'IntervalA') {
        clearInterval(IntervalA);
        typeBlock.style.backgroundColor = 'orange';
      }

      if (intervalName == 'IntervalB') {
        clearInterval(IntervalB);
        typeBlock.style.backgroundColor = 'orange';
      }
    }

    // declare text to enter in headerTitle
    // let typeText = '';
    // declare speed of typing in ms
    // let typeSpeed = 50;
    // declare integer for characters in typeText
    // declare length of time to complete typing the full typeText string
    // let typeLength = 0;
    // declare duration to complete on full typing function
    // let typingDuration = 0;


    // interval to start typing
    let intervalTypeStartDelay = 2500;
    // interval between initialization + completion of typing string, and then start untyping
    // let intervalUnType = 0;


    // recursive function that adds a letter, then starts the function again with 50ms interval
    function typeWriter(text: string, element: HTMLElement, speed: number, i: number) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
          typeWriter(text, element, speed, i);
        }, speed);
      };
    }

    // recursive function that removes the end letter, then starts the function again with 50ms interval
    // function unTypeWriter() {
    //   if (i > -1) {
    //     headerTitle.innerHTML = headerTitle.innerHTML.slice(0, -1);
    //     i--;
    //     setTimeout(unTypeWriter, typeSpeed);
    //   };
    // }

    // types, then untypes a message; pauses cursor blinking during typing
    function typeThis(text: string, element: HTMLElement, speed: number, typeBlock: HTMLElement, intervalName: string) {
      //change typeText to parameter
      // typeText = text;
      // typeSpeed = speed;
      let typeLength = text.length * speed;
      // intervalUnType = (intervalTypeStartDelay * 2) + typeLength;
      // typingDuration = typeLength + intervalUnType;

      let i = 0;

      // types message, pauses cursor blinking
      setTimeout(function () {
        typeWriter(text, element, speed, i);
        endBlink(typeBlock, intervalName);
        setTimeout(function () {
          // startBlink(typeBlock, intervalName);
          typeBlock.style.backgroundColor = 'transparent';
        }, (typeLength + 1500));
      }, intervalTypeStartDelay);

      // untypes message, pauses cursor blinking
      // setTimeout(function () {
      //   unTypeWriter();
      //   endBlink();
      //   setTimeout(startBlink, typeLength);
      // }, intervalUnType);
    };

    // declare time to wait before starting next message
    // let waitToTypeNext = 0;
    // declare integer for array of messages


    // recursive function that types through all messages in the array
    // function beginAllTyping(message: string, element: HTMLElement, speed: number) {
    // if (m >= arrayOfMessages.length) {
    //   m = 0;
    // };

    // let m = 0;
    // if (m < arrayOfMessages.length) {
    // typeThis(message, element, speed);
    // waitToTypeNext = typingDuration;
    // m++;
    // recurse this function
    // setTimeout(function () {
    //   beginAllTyping(arrayOfMessages, element, speed);
    // }, waitToTypeNext);
    // };
    // };

    // set type cursor to orange and start blinking animation; begin typing all messages
    function init() {
      typeBlockA.style.backgroundColor = 'orange';
      typeBlockB.style.backgroundColor = 'orange';
      startBlink(typeBlockA, 'IntervalA');
      startBlink(typeBlockB, 'IntervalB');
      typeThis(messageA, headerTitle, 80, typeBlockA, 'IntervalA');
      typeThis(messageB, headerSub, 50, typeBlockB, 'IntervalB');
    }

    init();
  }

}
