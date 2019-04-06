import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../../environments/environment";
import {Page} from "../../types/page";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  page: Page;

  constructor(private http: HttpClient) {
  }


  public findAll(page: number = 0, size: number = 2): Observable<{ page: Page, categories: Category[] }> {
    return this.http.get<{ page: Page, categories: Category[] }>
    (environment.apiUrl + 'categories' + '?size=' + size + '&page=' + page).pipe(
      map((value: any) => {
        return {page: value.page, categories: value._embedded.categories};
      }));
  }

  public save(category: Category): Observable<Category> {
    return this.http.post<Category>(environment.apiUrl + 'categories', category);
  }


}
