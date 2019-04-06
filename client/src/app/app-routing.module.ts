import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule',
  }, {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
