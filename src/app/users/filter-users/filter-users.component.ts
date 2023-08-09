import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent {
  @Input()
  productName:string="";

  @Input()
  productPrice:number=0;

  productBrand:string="HP";

  @Output()
  emitter = new EventEmitter();

  emitproductbrand(){
    this.emitter.emit(this.productBrand);
    //console.log(this.emitter);
  }
}
