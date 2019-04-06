import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, concatMap, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {
  CategoryActionTypes,
  CategoryActions,
  LoadSuccessCategory,
  AddSuccessCategory,
  EffectError
} from './category.actions';
import {CategoryService} from "../service/category.service";
import {select, Store} from "@ngrx/store";
import {CategoryState} from "./category.reducer";
import {selectAllCategories, selectPage} from "./category.selectors";
import {Page} from "../../types/page";


@Injectable()
export class CategoryEffects {


  @Effect()
  loadCategorys$ = this.actions$.pipe(
    ofType(CategoryActionTypes.LoadRequestCategory),
    withLatestFrom(this.categoryState.pipe(select(selectPage))),
    switchMap(value => {
      const page: Page = value[1];
      console.warn(page)

      return this.categoryService.findAll(page.number, page.size)
    }), map(value => {
      return new LoadSuccessCategory(value);
    })
  );

  @Effect()
  loadPageCategorys$ = this.actions$.pipe(
    ofType(CategoryActionTypes.LoadPageRequestCategory), switchMap(value => {
      return this.categoryService.findAll(value.payload.page)
    }), map(value => {
      return new LoadSuccessCategory(value);
    })
  );

  @Effect()
  addategory$ = this.actions$.pipe(
    ofType(CategoryActionTypes.AddRequestCategory), switchMap(value => {
      return this.categoryService.save(value.payload.category)
    }), map(value => {
      return new AddSuccessCategory({category: value});
    }),
    catchError(err => of(new EffectError()))
  );

  // The Error handler ...
  @Effect() public onLoadError$ = this.actions$.pipe(
    ofType(CategoryActionTypes.EffectError)
    , switchMap((value, index) => {

      // ... you can check the payload here to show different messages
      // like if error.statusCode === 501 etc.

      alert("erreur" + value);/*
      this.snackBar.open('Error', 'Ok', {
        duration: 2500
      });*/

      // remap to noop Action if no state needs to be updated.
      // or for example on 401 Errors dispach a re-login action etc.

      return of({type: 'noop'});
    }));

  constructor(private actions$: Actions<CategoryActions>, private categoryService: CategoryService, private categoryState: Store<CategoryState>) {
  }

}
