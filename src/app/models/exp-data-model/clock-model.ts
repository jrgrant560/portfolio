export class ClockModel {
    millisecondHand: Element | null = null;
    secondHand: Element | null = null;
    minuteHand: Element | null = null;
    hourHand: Element | null = null;
    timeZoneDisplay: Element | null = null;
    zoneDate: Element | null = null;
    midDayIndicator: Element | null = null;
    timeZoneHours: string | number = "";
}
