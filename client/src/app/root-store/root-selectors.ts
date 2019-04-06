import {createSelector} from "@ngrx/store";
import {selectCategoryIsLoading} from "../category/store/category.selectors";


export const selectIsLoading = createSelector(
  selectCategoryIsLoading,
  (categoryIsLoading: boolean) => {
    return categoryIsLoading;
  }
);
