import { Component, OnInit } from '@angular/core';
import { ITimecardTimeRange } from './timecard-time-range';
import { ICalendarItem } from './calendar-item';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pm-timecard-time-range',
  templateUrl: './timecard-time-range.component.html',
  styleUrls: ['./timecard-time-range.component.css']
})
export class TimecardTimeRangeComponent implements OnInit {

  public timecardTimeRange: ITimecardTimeRange;
  private _timecardTimeRange: ITimecardTimeRange;

  constructor() { }

  public inDate: {year: number, month: number};
  public outDate: {year: number, month: number};
  public timeOut;
  public timeIn;
  public timeType: string;

  private _timeOut;
  private _timeIn;
  private _timeType: string;


  ngOnInit() {
    // this.timecardTimeRange = {

    // };
    const now: Date = new Date();
    const timecardInDay: NgbDateStruct = {
      year: 1900,
      month: 1,
      day: now.getDate()
    };
    const timecardOutDay: NgbDateStruct = {
      year: 1900,
      month: 1,
      day: now.getDate()
    };

    this.timeIn = timecardInDay;
    this.timeOut = timecardOutDay;

    this._timeIn = this.timeIn;
    this._timeOut = this.timeOut;
    // const sampleRange: ITimecardTimeRange = {
    //   timeIn: timecardInDay,
    //   timeOut: timecardOutDay,
    //   timeType: ''
    // };

    // this.timecardTimeRange = sampleRange;
    // this._timecardTimeRange = this.timecardTimeRange;
  }

}
