import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.css', '../project-rows.css']
})
export class SimpleClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let displayDate = document.getElementsByClassName('displayDate')! as HTMLCollectionOf<HTMLElement>;
    let displayTime = document.getElementsByClassName('displayTime')! as HTMLCollectionOf<HTMLElement>;

    function createTime() {
      //Date object that is the current timestamp when the browser runs the code
      let today = new Date();

      // console.log(today);
      // console.log(today.getTimezoneOffset());

      //variable that is the current date in yyyy-mm-dd format
      let date =
        //the current 4-digit year
        today.getFullYear()
        + '-' +
        //the current numerical month; add 1 to translate index[0]
        (today.getMonth() + 1)
        + '-' +
        //the current numerical day
        today.getDate();

      //variable that is the current time in hh:mm:ss format
      let time =
        //the current hour
        today.getHours()
        + ":" +
        //the current minute
        today.getMinutes()
        + ":" +
        //the current second
        today.getSeconds();

      for (let i=0; i<displayDate.length; i++) {
        displayDate[i].innerText = date;
      }

      for (let i=0; i<displayDate.length; i++) {
        displayTime[i].innerText = time;
      }
    }

    setInterval(createTime, 1000);
  }

}
