import { Component, OnInit } from '@angular/core';
import { ClockModel } from 'src/app/models/exp-data-model/clock-model';

@Component({
  selector: 'app-clocks-digital',
  templateUrl: './clocks-digital.component.html',
  styleUrls: ['./clocks-digital.component.css', '../project-rows.css']
})
export class ClocksDigitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clockLocal = {
      millisecondHand: document.querySelector('.clocksDigital  .clockLocal .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockLocal .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockLocal .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockLocal .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockLocalContainer .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockLocalContainer .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockLocal .midDayIndicator'),
      timeZoneHours: "local"
    };
  
    const clockC = {
      millisecondHand: document.querySelector('.clocksDigital  .clockC .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockC .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockC .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockC .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockC .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockC .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockC .midDayIndicator'),
      timeZoneHours: "local"
    }
  
    const clockD = {
      millisecondHand: document.querySelector('.clocksDigital  .clockD .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockD .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockD .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockD .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockD .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockD .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockD .midDayIndicator'),
      timeZoneHours: "local"
    }
  
    const clockE = {
      millisecondHand: document.querySelector('.clocksDigital  .clockE .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockE .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockE .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockE .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockE .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockE .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockE .midDayIndicator'),
      timeZoneHours: "local"
    }
  
    const clockF = {
      millisecondHand: document.querySelector('.clocksDigital  .clockF .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockF .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockF .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockF .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockF .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockF .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockF .midDayIndicator'),
      timeZoneHours: "local"
    }
  
    // zoneUTC: number = 0;
  
    const clockNYC = {
      millisecondHand: document.querySelector('.clocksDigital  .clockNYC .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockNYC .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockNYC .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockNYC .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockNYC .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockNYCContainer .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockNYC .midDayIndicator'),
      timeZoneHours: -4
    }
  
    const clockLosAngeles = {
      millisecondHand: document.querySelector('.clocksDigital  .clockLosAngeles .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockLosAngeles .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockLosAngeles .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockLosAngeles .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockLosAngeles .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockLosAngelesContainer .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockLosAngeles .midDayIndicator'),
      timeZoneHours: -7
    }
  
    const clockHongKong = {
      millisecondHand: document.querySelector('.clocksDigital  .clockHongKong .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockHongKong .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockHongKong .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockHongKong .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockHongKong .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockHongKongContainer .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockHongKong .midDayIndicator'),
      timeZoneHours: 8
    }
  
    const clockLondon = {
      millisecondHand: document.querySelector('.clocksDigital  .clockLondon .millisecond-hand'),
      secondHand: document.querySelector('.clocksDigital  .clockLondon .second-hand'),
      minuteHand: document.querySelector('.clocksDigital  .clockLondon .minute-hand'),
      hourHand: document.querySelector('.clocksDigital  .clockLondon .hour-hand'),
      timeZoneDisplay: document.querySelector('.clocksDigital  .clockLondon .timeZoneDisplay'),
      zoneDate: document.querySelector('.clocksDigital  .clockLondonContainer .timeZoneDate'),
      midDayIndicator: document.querySelector('.clocksDigital  .clockLondon .midDayIndicator'),
      timeZoneHours: 1
    }
  

  //runs all setDate() functions on all clocks, so there isn't a one-second delay before the clock works
    this.setDate(clockLocal);
    this.setDate(clockC);
    this.setDate(clockD);
    this.setDate(clockE);
    this.setDate(clockF);
    this.setDate(clockNYC);
    this.setDate(clockLosAngeles);
    this.setDate(clockHongKong);
    this.setDate(clockLondon);

    //sets Interval of setAllDates to every millisecond
    //setInterval() is wierd with a nested "this.____" scope from outside ngOnInit(); need to specify scope apparently. Got this from stackoverflow; not exactly sure how it fetches the scope... But it works great!
    setInterval(
      (function (scope) {
        return function () {
          scope.setDate(clockLocal);
          scope.setDate(clockC);
          scope.setDate(clockD);
          scope.setDate(clockE);
          scope.setDate(clockF);
          scope.setDate(clockNYC);
          scope.setDate(clockLosAngeles);
          scope.setDate(clockHongKong);
          scope.setDate(clockLondon);
        };
      }
      )(this),
      1
    );

    // setInterval(function () { console.log(this.message) }, 20);
  }

  setDate(clock: ClockModel) {
    let millisecondHand = clock.millisecondHand as HTMLElement | null;
    let secondHand = clock.secondHand as HTMLElement | null;
    let minuteHand = clock.minuteHand as HTMLElement | null;
    let hourHand = clock.hourHand as HTMLElement | null;
    let timeZoneDisplay = clock.timeZoneDisplay as HTMLElement | null;
    let zoneDate = clock.zoneDate as HTMLElement | null;
    let midDayIndicator = clock.midDayIndicator as HTMLElement | null;

    let timeZoneHours = clock.timeZoneHours;

    //variable for local datestamp object
    const timeLocal = new Date();
    //variable for calculatable datestamp object
    let calculatedTime: Date = new Date();

    //if timeZone given is "local"
    if (timeZoneHours === "local") {
      //sets calculatedTime to timeLocal
      calculatedTime = timeLocal;
    }
    //if timeZone given is a number
    else {
      let timeZoneHoursNumber: number = timeZoneHours as number;
      //sets calculatedTime to UTC time, then adds the timezone difference
      calculatedTime = new Date(
        timeLocal.getUTCFullYear(),
        timeLocal.getUTCMonth(),
        timeLocal.getUTCDate(),
        timeLocal.getUTCHours() + timeZoneHoursNumber,
        timeLocal.getUTCMinutes(),
        timeLocal.getUTCSeconds(),
        timeLocal.getUTCMilliseconds()
      );
    }

    // --TIME RETRIEVAL--
    //retrieves seconds from datestamp
    let milliseconds = calculatedTime.getMilliseconds();
    //retrieves seconds from datestamp
    let seconds = calculatedTime.getSeconds();
    //retrieves minutes from datestamp
    let minute = calculatedTime.getMinutes();
    //retrieves hours from datestamp
    let hour = calculatedTime.getHours();
    //retrieves seconds from datestamp

    // --DEGREES--
    //Ex: 30 seconds -> 270 degrees
    //variable for milliseconds converted to degrees of rotation
    let millisecondsDegrees = ((milliseconds / 1000) * 360) + 90;
    //variable for seconds converted to degrees of rotation
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    //variable for minutes converted to degrees of rotation
    let minuteDegrees = ((minute / 60) * 360) + ((seconds / 60) * 6) + 90;
    //variable for hours converted to degrees of rotation
    let hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;

    // --ROTATION--
    //applies 'transform:rotate' styling to millisecond-hand based on the number of degrees calculated from the milliseconds
    if (millisecondHand != undefined) {
      millisecondHand.style.transform = `rotate(${millisecondsDegrees}deg)`;
    }
    //applies 'transform:rotate' styling to second-hand based on the number of degrees calculated from the seconds
    if (secondHand != undefined) {
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }
    //applies 'transform:rotate' styling to minute-hand based on the number of degrees calculated from the minutes
    if (minuteHand != undefined) {
      minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    }
    //applies 'transform:rotate' styling to hour-hand based on the number of degrees calculated from the hours
    if (hourHand != undefined) {
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    // --TIME ZONE--
    if (timeZoneDisplay != undefined) {
      timeZoneDisplay.innerText = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    // --DAY OF WEEK--
    if (zoneDate != undefined) {
      zoneDate.innerText = new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(calculatedTime);
    }

    //--MIDDAY INDICATOR--
    if (midDayIndicator != undefined) {
      if (calculatedTime.getHours() < 12) {
        midDayIndicator.innerText = "AM";
      } else {
        midDayIndicator.innerText = "PM";
      }
    }

    // console.log("setDate works")
  };
}
