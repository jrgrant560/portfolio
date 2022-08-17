import { Component, OnInit } from '@angular/core';
import { ClockModel } from 'src/app/models/exp-data-model/clock-model';

@Component({
  selector: 'app-clocks-analog',
  templateUrl: './clocks-analog.component.html',
  styleUrls: ['./clocks-analog.component.css']
})
export class ClocksAnalogComponent implements OnInit {

  clockModel: ClockModel = new ClockModel();

  constructor() { }

  ngOnInit(): void {

    //runs the setDate() functions on load, so there isn't a one-second delay before the clock works
    this.setAllDates();

    //sets Interval of setAllDates to every millisecond
    //setInterval() is wierd with nested "this.____()" methods; need to specify scope apparently. Got this from stackoverflow; not exactly sure how it fetches the scope...
    setInterval(
      (function (scope) {
        return function () {
          scope.setAllDates()
        };
      }
      )(this),
      1
    );

    // setInterval(function () { console.log(this.message) }, 20);

    this.consoleTestNestedNested();
  }

  message = "success!";

  consoleTestNestedNested() {
    console.log("consoleTestNestedNested successful")
    this.consoleTestNested();
  }

  consoleTestNested() {
    console.log("consoleTestNested successful")
    this.consoleTest();
  }

  consoleTest() {
    console.log("consoleTest successful")
  }

  //Repeats setDate() every millisecond
  cycleClocks() {
    setInterval(this.setAllDates, 1)
  }

  //runs all setDate() functions on all clocks
  setAllDates() {
    this.setDate(this.clockLocal);
    this.setDate(this.clockC);
    this.setDate(this.clockD);
    this.setDate(this.clockE);
    this.setDate(this.clockF);
    this.setDate(this.clockNYC);
    this.setDate(this.clockLosAngeles);
    this.setDate(this.clockHongKong);
    this.setDate(this.clockLondon);
  };

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
    console.log("testing setDate")
  };
  clockLocal = {
    millisecondHand: document.querySelector('.clockLocal .millisecond-hand'),
    secondHand: document.querySelector('.clockLocal .second-hand'),
    minuteHand: document.querySelector('.clockLocal .minute-hand'),
    hourHand: document.querySelector('.clockLocal .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockLocalContainer .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockLocalContainer .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockLocal .midDayIndicator'),
    timeZoneHours: "local"
  };

  clockC = {
    millisecondHand: document.querySelector('.clockC .millisecond-hand'),
    secondHand: document.querySelector('.clockC .second-hand'),
    minuteHand: document.querySelector('.clockC .minute-hand'),
    hourHand: document.querySelector('.clockC .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockC .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockC .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockC .midDayIndicator'),
    timeZoneHours: "local"
  }

  clockD = {
    millisecondHand: document.querySelector('.clockD .millisecond-hand'),
    secondHand: document.querySelector('.clockD .second-hand'),
    minuteHand: document.querySelector('.clockD .minute-hand'),
    hourHand: document.querySelector('.clockD .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockD .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockD .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockD .midDayIndicator'),
    timeZoneHours: "local"
  }

  clockE = {
    millisecondHand: document.querySelector('.clockE .millisecond-hand'),
    secondHand: document.querySelector('.clockE .second-hand'),
    minuteHand: document.querySelector('.clockE .minute-hand'),
    hourHand: document.querySelector('.clockE .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockE .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockE .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockE .midDayIndicator'),
    timeZoneHours: "local"
  }

  clockF = {
    millisecondHand: document.querySelector('.clockF .millisecond-hand'),
    secondHand: document.querySelector('.clockF .second-hand'),
    minuteHand: document.querySelector('.clockF .minute-hand'),
    hourHand: document.querySelector('.clockF .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockF .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockF .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockF .midDayIndicator'),
    timeZoneHours: "local"
  }

  // zoneUTC: number = 0;

  clockNYC = {
    millisecondHand: document.querySelector('.clockNYC .millisecond-hand'),
    secondHand: document.querySelector('.clockNYC .second-hand'),
    minuteHand: document.querySelector('.clockNYC .minute-hand'),
    hourHand: document.querySelector('.clockNYC .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockNYC .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockNYC .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockNYC .midDayIndicator'),
    timeZoneHours: -4
  }

  clockLosAngeles = {
    millisecondHand: document.querySelector('.clockLosAngeles .millisecond-hand'),
    secondHand: document.querySelector('.clockLosAngeles .second-hand'),
    minuteHand: document.querySelector('.clockLosAngeles .minute-hand'),
    hourHand: document.querySelector('.clockLosAngeles .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockLosAngeles .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockLosAngeles .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockLosAngeles .midDayIndicator'),
    timeZoneHours: -7
  }

  clockHongKong = {
    millisecondHand: document.querySelector('.clockHongKong .millisecond-hand'),
    secondHand: document.querySelector('.clockHongKong .second-hand'),
    minuteHand: document.querySelector('.clockHongKong .minute-hand'),
    hourHand: document.querySelector('.clockHongKong .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockHongKong .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockHongKong .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockHongKong .midDayIndicator'),
    timeZoneHours: 8
  }

  clockLondon = {
    millisecondHand: document.querySelector('.clockLondon .millisecond-hand'),
    secondHand: document.querySelector('.clockLondon .second-hand'),
    minuteHand: document.querySelector('.clockLondon .minute-hand'),
    hourHand: document.querySelector('.clockLondon .hour-hand'),
    timeZoneDisplay: document.querySelector('.clockLondon .timeZoneDisplay'),
    zoneDate: document.querySelector('.clockLondon .timeZoneDate'),
    midDayIndicator: document.querySelector('.clockLondon .midDayIndicator'),
    timeZoneHours: 1
  }

}
