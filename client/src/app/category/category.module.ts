import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {ListComponent} from './views/list/list.component';
import {SaveComponent} from './views/save/save.component';
import {EditComponent} from './views/edit/edit.component';
import {MainComponent} from './views/main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';
import * as fromCategory from './store/category.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CategoryEffects} from './store/category.effects';

@NgModule({
  declarations: [ListComponent, SaveComponent, EditComponent, MainComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('category', fromCategory.reducer),
    EffectsModule.forFeature([CategoryEffects])
  ]
})
export class CategoryModule {
}
