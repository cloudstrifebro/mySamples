import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LegendService } from './services/legend.service';
import { LegendListComponent } from './legends/legend-list.component';

import { TimecardDayComponent } from './timecards/timecard-day.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LegendListComponent,
    TimecardDayComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // feature modules
    ProductModule,
    SharedModule,
    AppRoutingModule

  ],
  providers: [LegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
