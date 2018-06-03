import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { LegendService } from './services/legend.service';

@Component({
    selector: 'pm-root',
    template: `
    <div>
    <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
      <pm-legends></pm-legends>
    </div>
    `,
    providers: [ ProductService, LegendService ]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Development';
}
