import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./views/list/list.component";
import {SaveComponent} from "./views/save/save.component";
import {EditComponent} from "./views/edit/edit.component";
import {MainComponent} from "./views/main/main.component";


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'list'},
      {path: 'list', component: ListComponent},
      {path: 'save', component: SaveComponent},
      {path: 'edit', component: EditComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
