import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RootState} from "./root-store/reducers";
import {selectIsLoading} from "./root-store/root-selectors";
import {selectAllCategories} from "./category/store/category.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isLoading: boolean = false;

  constructor(private rootState: Store<RootState>) {
  }

  ngOnInit(): void {
    this.rootState.select(selectIsLoading).subscribe(value => {
      console.warn("main", value)
      this.isLoading = value;
    })
    this.rootState.select(selectAllCategories).subscribe(value => {
      console.warn("main", value)
    })
  }
}
