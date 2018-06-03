import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { LegendListComponent } from './legends/legend-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LegendService } from './services/legend.service';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { TimecardDayComponent } from './timecards/timecard-day.component';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LegendListComponent,
    ConvertToSpacesPipe,
    TimecardDayComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
