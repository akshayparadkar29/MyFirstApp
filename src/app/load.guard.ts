import { CanLoadFn } from '@angular/router';

export const loadGuard: CanLoadFn = (route, state) => {
  
  var isload = true;

  if(isload){
    return true;
  }else{
    return false;
  }
};
