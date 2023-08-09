import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  var isadmin = true;

  if(isadmin){
    return true;
  }else{
    return false;
  }
  
};
