import { ITimecardDay } from "./timecard-day";

export interface ITimecardDetail {
   weekNumber: number;
   startDate: Date;
   endDate: Date;
   totalHoursWorked: number;
   totalOverTime: number;
   totalDoubleTime: number;
   payTotal: number;
   paidTimeOffTotal: number;
   holidayPay: number;
   timecardDays: ITimecardDay;
}
