import { ITimecardRule } from "./timecard-rule";
import { IEmployee } from "../employees/employee";
import { ITimecardDetail } from "./timecard-detail";

export interface ITimecard {
   timecardId: number;
   timecardDetails: ITimecardDetail;
   employee: IEmployee;
   timecardRule: ITimecardRule;
 }
