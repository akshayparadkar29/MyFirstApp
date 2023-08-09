import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  memory:any;
  storage:any;
  isDir=true;

  constructor(private act:ActivatedRoute){
    this.act.queryParams.subscribe((queryParams)=>{
      //console.log(queryParams['ram'])
      this.memory=queryParams['ram'];
      this.storage=queryParams['storage'];
    })
  }
}
