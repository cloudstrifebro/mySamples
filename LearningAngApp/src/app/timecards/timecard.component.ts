import { Component, OnInit } from '@angular/core';
import { ITimecardDay } from './timecard-day';
import { ITimecard } from './timecard';
import { ICalendarItem } from './calendar-item';
import { ITimecardTimeRange } from './timecard-time-range';
import { sampleTime } from 'rxjs/operators';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pm-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {

  private _timecardDays: ITimecardDay[];
  public timecardDays: ITimecardDay[];

  constructor() { }

  ngOnInit() {
    // const now: Date = new Date();
    // const timecardInDay: NgbDateStruct = {
    //   year: 1,
    //   month: 1,
    //   day: now.getDate()
    // };
    // const timecardOutDay: NgbDateStruct = {
    //   year: 1,
    //   month: 1,
    //   day: now.getDate()
    // };
    // const sampleTimeBlock: ITimecardTimeRange = {
    //   timeIn: timecardInDay,
    //   timeOut: timecardOutDay,
    //   timeType: ''
    // };
    // const sampleTimecardDay: ITimecardDay = {
    //   timeblocks: [
    //     sampleTimeBlock
    //   ]
    // };

    // this.timecardDays = [
    //   sampleTimecardDay
    // ];
    // this._timecardDays = this.timecardDays;
  }

}
