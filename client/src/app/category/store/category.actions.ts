import {Action} from '@ngrx/store';
import {Page} from "../../types/page";
import {Category} from "../model/category";

export enum CategoryActionTypes {
  LoadRequestCategory = '[Category] LoadRequestCategory Category',
  LoadPageRequestCategory = '[Category] LoadPageRequestCategory Category',
  LoadSuccessCategory = '[Category] LoadSuccessCategory Category',
  AddRequestCategory = '[Category] AddRequestCategory Category',
  AddSuccessCategory = '[Category] AddSuccessCategory Category',
  DeleteRequestCategory = '[Category] DeleteRequestCategory Category',
  DeleteSuccessCategory = '[Category] DeleteSuccessCategory Category',
  EffectError = '[Category] EffectError Category',


}

export class AddSuccessCategory implements Action {
  readonly type = CategoryActionTypes.AddSuccessCategory;

  constructor(public payload: { category: Category }) {
  }
}

export class AddRequestCategory implements Action {
  readonly type = CategoryActionTypes.AddRequestCategory;

  constructor(public payload: { category: Category }) {
  }
}

export class DeleteRequestCategory implements Action {
  readonly type = CategoryActionTypes.DeleteRequestCategory;

  constructor(public payload: { href: string }) {
  }
}

export class LoadSuccessCategory implements Action {
  readonly type = CategoryActionTypes.LoadSuccessCategory;

  constructor(public payload: { page: Page, categories: Category[] }) {
  }
}

export class EffectError implements Action {
  readonly type = CategoryActionTypes.EffectError;
}

export class LoadRequestCategory implements Action {
  readonly type = CategoryActionTypes.LoadRequestCategory;
}

export class LoadPageRequestCategory implements Action {
  readonly type = CategoryActionTypes.LoadPageRequestCategory;

  constructor(public payload: { page: number, size: number } = {page: 0, size: 2}) {
  }
}


export type CategoryActions =
  EffectError |
  LoadPageRequestCategory |
  LoadSuccessCategory |
  LoadRequestCategory |
  DeleteRequestCategory |
  AddSuccessCategory |
  AddRequestCategory;
