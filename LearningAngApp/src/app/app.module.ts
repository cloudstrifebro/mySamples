import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';

import { LegendService } from './services/legend.service';
import { LegendListComponent } from './legends/legend-list.component';

import { TimecardDayComponent } from './timecards/timecard-day.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { TimecardModule } from './timecards/timecard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendowrapperComponent } from './kendowrappers/kendowrapper/kendowrapper.component';
import { CategoriesService } from './services/northwind.service';
import { EditService } from './services/edit.service';
import { DdownComponent } from './bootstrapWrappers/ddown/ddown.component';


@NgModule({
  declarations: [
    AppComponent,
    LegendListComponent,
    WelcomeComponent,
    KendowrapperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,

    // feature modules
    ProductModule,
    TimecardModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [LegendService, CategoriesService, {
            deps: [HttpClient],
            provide: EditService,
            useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
