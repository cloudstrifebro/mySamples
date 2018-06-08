import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { LegendService } from './services/legend.service';

@Component({
    selector: 'pm-root',
    template: `
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item"><a [routerLink]="['/welcome']" class="nav-link">Home</a></li>
      <li class="nav-item"><a [routerLink]="['/products']" class="nav-link">Product List</a></li>
      <li class="nav-item"><a [routerLink]="['/timecards']" class="nav-link">Timecard List</a></li>
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
// <form class="form-inline my-2 my-lg-0">
//         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </form>

export class AppComponent {
  pageTitle: string = 'Acme Product Development';
}
