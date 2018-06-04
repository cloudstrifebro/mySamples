import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { LegendListComponent } from './legends/legend-list.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { LegendService } from './services/legend.service';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { TimecardDayComponent } from './timecards/timecard-day.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LegendListComponent,
    ConvertToSpacesPipe,
    TimecardDayComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // order matters
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ProductGuardService],
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
      // { path: '**', component: PageNotFoundComponent},
    ], {useHash: true}),
  ],
  bootstrap: [AppComponent],
  providers: [ProductGuardService]
})
export class AppModule { }
