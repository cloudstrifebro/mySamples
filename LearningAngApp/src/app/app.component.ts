import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { LegendService } from './services/legend.service';

@Component({
    selector: 'pm-root',
    template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
            <li><a [routerLink]="['/timecards']">Timecard List</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
    providers: [ ProductService, LegendService ]
})

// <h1>{{pageTitle}}</h1>
// <pm-legends></pm-legends>

export class AppComponent {
  pageTitle: string = 'Acme Product Development';
}
