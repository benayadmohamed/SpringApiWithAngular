import {categoryAdapter, CategoryState} from "./category.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = categoryAdapter.getSelectors();


export const selectFeatureCategory = createFeatureSelector<CategoryState>('category');


export const selectAllCategories = createSelector(selectFeatureCategory, selectAll);

export const selectPage = createSelector(selectFeatureCategory, s1 => s1.page);

export const selectCategoryIsLoading = createSelector(selectFeatureCategory, s1 => s1.isLoading);
