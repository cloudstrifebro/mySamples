import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { LegendService } from './services/legend.service';
import { CategoriesService } from './services/northwind.service';

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    providers: [ ProductService, LegendService, CategoriesService ]
})

export class AppComponent {
  pageTitle: string = 'CloudStrifeBro';
}
