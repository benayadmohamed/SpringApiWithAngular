import {CategoryActions, CategoryActionTypes} from './category.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Category} from "../model/category";
import {Page} from "../../types/page";

export interface CategoryState extends EntityState<Category> {
  page: Page;
  isLoading: boolean;
  selectedCategoryId: string | null;
}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>({selectId: cat => cat._links.self.href});


export const initialCategoryState: CategoryState = categoryAdapter.getInitialState({
  // additional entity state properties
  page: {size: 2, number: 0, totalPages: 0, totalElements: 0},
  selectedCategoryId: null,
  isLoading: false
});

export function reducer(state = initialCategoryState, action: CategoryActions): CategoryState {
  switch (action.type) {
    case CategoryActionTypes.AddRequestCategory:
    case CategoryActionTypes.LoadPageRequestCategory:
    case CategoryActionTypes.LoadRequestCategory:
      return {...state, isLoading: true};
    case CategoryActionTypes.LoadSuccessCategory:
      const st = categoryAdapter.addAll(action.payload.categories, state);
      return {...st, page: action.payload.page, isLoading: false};
    case CategoryActionTypes.EffectError:
      return {...state, isLoading: false};
    case CategoryActionTypes.AddSuccessCategory:
      state = categoryAdapter.addOne(action.payload.category, state);
      return {...state, isLoading: false};

    default:
      return state;
  }
}
