import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./views/list/list.component";
import {SaveComponent} from "./views/save/save.component";
import {EditComponent} from "./views/edit/edit.component";
import {MainComponent} from "./views/main/main.component";
import {ListResolverService} from "./route-guards/list-resolver.service";
import {SaveCanDeactivateService} from "./route-guards/save-can-deactivate.service";

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'list'},
      {
        path: 'list', component: ListComponent,
        resolve: {
          categories: ListResolverService
        }
      },
      {path: 'save', component: SaveComponent, canDeactivate: [SaveCanDeactivateService]},
      {path: 'edit', component: EditComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
