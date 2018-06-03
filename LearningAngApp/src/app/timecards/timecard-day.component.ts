import { Component, OnInit } from "@angular/core";
import { ITimecardDay } from "./timecard-day";

@Component({
  selector: 'pm-timecard-day',
  templateUrl: './template-day.component.html'
})

export class TimecardDayComponent implements OnInit {
  private timecardDay: ITimecardDay;
  /**
   *
   */
  constructor() {

  }

  ngOnInit(): void {
    console.log('Started oninit for timecard day compoent');
  }

}
