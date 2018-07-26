import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GridModule } from '@progress/kendo-angular-grid';
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
    ReactiveFormsModule,
    // third-party modules
    NgbModule,
    AngularFontAwesomeModule,
    GridModule,
    // NgbdDatepickerPopupComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
