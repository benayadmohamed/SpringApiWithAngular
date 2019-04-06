import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryModule} from "../category/category.module";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from "@ngrx/effects";
import {environment} from "../../environments/environment";
import {reducers, metaReducers} from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class RootStoreModule {
}
