import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './views/list/list.component';
import { EditComponent } from './views/edit/edit.component';
import { SaveComponent } from './views/save/save.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [ListComponent, EditComponent, SaveComponent, MainComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
