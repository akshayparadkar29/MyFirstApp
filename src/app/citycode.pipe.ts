import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citycode'
})
export class CitycodePipe implements PipeTransform {

  transform(value:string): any {
    if(value == "Pondicherry"){
      return '0413';
      }else if(value =="Cuddalore"){
      return '04142';
      }else if(value =="Virudhachalam"){
      return '04143';
      }else if(value =="Chidambaram"){
      return '04144';
      }else if(value =="Gingee"){
      return '04145';
      }else if(value =="Villupuram"){
      return '04146';
      }else if(value =="Tindivanam"){
      return '04147';
      }else{
      return "City Code Not available";
      }
  }

}
