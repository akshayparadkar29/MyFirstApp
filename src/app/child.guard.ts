import { CanActivateChildFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (route, state) => {
  var employee = true;

  if(employee){
    return true;
  }else{
    return false;
  }
};

