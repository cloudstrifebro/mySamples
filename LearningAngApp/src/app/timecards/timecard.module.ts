import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimecardRoutingModule } from './timecard-routing.module';
import { TimecardComponent } from './timecard.component';
import { TimecardDetailComponent } from './timecard-detail.component';
import { TimecardDayComponent } from './timecard-day.component';
import { TimecardRuleComponent } from './timecard-rule.component';
import { TimecardTimeRangeComponent } from './timecard-time-range.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TimecardRoutingModule
  ],
  declarations: [TimecardComponent, TimecardDetailComponent, TimecardDayComponent, TimecardRuleComponent, TimecardTimeRangeComponent]
})
export class TimecardModule { }
