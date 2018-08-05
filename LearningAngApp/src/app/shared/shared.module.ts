import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DdownComponent } from '../bootstrapWrappers/ddown/ddown.component';
import { CustomGridComponent } from '../kendoWrappers/customGrid/customGrid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    GridModule,
    ExcelModule,
    NgbModule.forRoot()
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
    DdownComponent,
    CustomGridComponent
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
    ExcelModule,
    CustomGridComponent,
    // NgbdDatepickerPopupComponent,
    ConvertToSpacesPipe,
    DdownComponent
  ]
})
export class SharedModule { }
