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

  public timecardWeek: Date;
  public timecardDate: Date;
  public radioItem: any;
  public radioItem1: boolean;
  public radioItem2: boolean;
  public radioItem3: boolean;
  public radioItem4: boolean;
  public selectedRadio: number;

  public isSelected1: boolean;
  public isSelected2: boolean;
  public isSelected3: boolean;
  public isSelected4: boolean;

  constructor() { }

  ngOnInit() {

    this.timecardDate = new Date();

    this.radioItem1 = false;
    this.radioItem2 = false;
    this.radioItem3 = false;
    this.radioItem4 = false;

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

  onRadioChange(selectedValue) {
    // this.selectedRadio = selectedValue;

    this.isSelected1 = false;
    this.isSelected2 = false;
    this.isSelected3 = false;
    this.isSelected4 = false;

    switch (selectedValue) {
      case 1:
      {
        this.isSelected1 = true;
        break;
      }
        case 2:
        {
          this.isSelected2 = true;
          break;
        }
        case 3:
        {
          this.isSelected3 = true;
          break;
        }
        case 4:
        {
          this.isSelected4 = true;
          break;
        }
        default:
        {
          // this.selectedRadio = false;
        }
    }

  }

}
