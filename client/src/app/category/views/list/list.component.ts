import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {select, Store} from "@ngrx/store";
import {CategoryState} from "../../store/category.reducer";
import {LoadPageRequestCategory, LoadRequestCategory} from "../../store/category.actions";
import {Observable} from "rxjs";
import {selectAllCategories, selectPage} from "../../store/category.selectors";
import {Page} from "../../../types/page";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories: Category[] = [];
  categories$: Observable<Category[]>;
  page: Page;
  pages: Array<number>;

  constructor(private store: Store<CategoryState>, private route: ActivatedRoute) {
    this.store.pipe(select(selectAllCategories)).subscribe(value => {
      this.categories = value;
    });

    this.store.pipe(select(selectPage)).subscribe(value => {
      this.pages = new Array(value.totalPages);
      this.page = value;
      this.pages = this.pages.fill(0).map((value1, index) => index);
    })
  }

  ngOnInit() {
    /*this.route.data
      .subscribe((data: any) => {
        // console.warn(data)
        // this.categories = data.categories;
      });*/
  }

  changePage(p: any) {
    this.store.dispatch(new LoadPageRequestCategory({page: p, size: this.page.size}));
  }

  delete(href: string) {

  }
}
