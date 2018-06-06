import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimecardComponent } from './timecard.component';
import { TimecardDetailComponent } from './timecard-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      // order matters
      { path: 'timecards', component: TimecardComponent},
      { path: 'products/:id', component: TimecardDetailComponent
      },
    ]),
    // SharedModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class TimecardRoutingModule { }
