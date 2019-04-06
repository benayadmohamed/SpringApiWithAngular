import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../service/category.service";
import {Store} from "@ngrx/store";
import {CategoryState} from "../../store/category.reducer";
import {AddRequestCategory} from "../../store/category.actions";
import {selectCategoryIsLoading} from "../../store/category.selectors";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  isLoading: boolean = false;
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });


  constructor(private categoryState: Store<CategoryState>) {
  }

  ngOnInit() {
    this.categoryState.select(selectCategoryIsLoading).subscribe(value => this.isLoading = value)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.categoryState.dispatch(new AddRequestCategory({category: this.categoryForm.value}));
  }
}
