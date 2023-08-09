import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productid:any;
  productname:any;

  constructor(private act:ActivatedRoute){
    this.act.params.subscribe((params)=>{
      //console.log(params['pid']);
      this.productid=params['pid'];
      this.productname=params['pname'];
    })
  }
}
