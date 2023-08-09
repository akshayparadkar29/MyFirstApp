import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { SearchComponent } from './search/search.component';

export class ConfirmGuard implements CanDeactivate<SearchComponent>{

  canDeactivate(component:SearchComponent){
    if(component.isDir){
      window.alert("alert");
      return window.confirm("Are you sure");
    }
    return true;
  }
}