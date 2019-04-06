import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from "../../../environments/environment";
import * as fromCat from "../../category/store/category.reducer";


export interface RootState {
  category: fromCat.CategoryState
}

export const reducers: ActionReducerMap<RootState> = {
  category: fromCat.reducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
