import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      // order matters
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ProductGuardService],
        component: ProductDetailComponent
      },
    ]),
    // SharedModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ProductRoutingModule { }
