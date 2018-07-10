import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { LegendService } from './services/legend.service';

@Component({
    selector: 'pm-root',
    template: `
    <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-faded">
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="#">Logo</a>
      <!-- Links -->
      <div class="collapse navbar-collapse" id="nav-content">
        <ul class="navbar-nav">
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

/*
      <li class="nav-item"><a [routerLink]="['/welcome']" class="nav-link">Home</a></li>
      <li class="nav-item"><a [routerLink]="['/products']" class="nav-link">Product List</a></li>
      <li class="nav-item"><a [routerLink]="['/timecards']" class="nav-link">Timecard List</a></li>
*/

// <h1>{{pageTitle}}</h1>
// <pm-legends></pm-legends>
// <form class="form-inline my-2 my-lg-0">
//         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </form>

export class AppComponent {
  pageTitle: string = 'Acme Product Development';
}
