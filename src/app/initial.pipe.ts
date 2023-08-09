import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(value:any, middle:string, last:string): any {
    return value +"."+middle.charAt(0)+"."+last.charAt(0);
  }

}
