import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {SaveComponent} from "../views/save/save.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaveCanDeactivateService implements CanDeactivate<SaveComponent> {

  constructor() {
  }

  canDeactivate(component: SaveComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(component.categoryForm.invalid);
    return confirm("Voulez-vous quitter?");
  }
}
