import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Category} from "../model/category";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {CategoryState} from "../store/category.reducer";
import {LoadRequestCategory} from "../store/category.actions";
import {selectAllCategories} from "../store/category.selectors";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ListResolverService implements Resolve<void> {

  constructor(private store: Store<CategoryState>) {
    // this.store.dispatch(new LoadRequestCategory());
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.store.pipe(select(selectAllCategories), take(1));
    this.store.dispatch(new LoadRequestCategory());
  }
}
