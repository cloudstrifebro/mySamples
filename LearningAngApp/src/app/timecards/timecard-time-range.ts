import { ICalendarItem } from './calendar-item';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface ITimecardTimeRange {
  timeIn: NgbDateStruct;
  timeOut: NgbDateStruct;
  timeType: string;
}
