import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import { IPagination } from '../../../Interfaces/IPagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
  @Input() totalePage:number=0;
  @Input() CurrentPage:number=0;
  @Input() TotalCount:number=0;
  @Input() HasNext:boolean=false;

  @Input() HasPrev:boolean=false;

  @Output() EventClicker:EventEmitter<any> = new EventEmitter<any>();



  Pagination:IPagination[] = [];

  ngOnInit(): void {
  }
  PrevNextPage(page?:number):void{
    
    this.EventClicker.emit({page:page});

  }
  Prev(){
    alert(this.CurrentPage-1);

  }
  Next(){
    alert(this.CurrentPage+1);
  }

}
