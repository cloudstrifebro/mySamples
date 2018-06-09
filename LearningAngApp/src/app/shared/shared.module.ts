import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { NgbdDatepickerPopupComponent } from './datepicker-popup.component';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
    // NgbdDatepickerPopupComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    // NgbdDatepickerPopupComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
