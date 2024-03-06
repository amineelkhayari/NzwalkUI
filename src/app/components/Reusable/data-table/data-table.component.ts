import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { RegioncallfuncService } from '../../../services/regioncall/regioncallfunc.service';
import { IRegion } from '../../../Interfaces/IRegion';
import { IPagination } from '../../../Interfaces/IPagination';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit{
  @Input() BaseUrl!: string;
  @Input() GridData: any[] = [];
  @Output() EventClicker:EventEmitter<any> = new EventEmitter<any>();

  deleter(id:number):void{
    
    this.EventClicker.emit({id:id});

  }


  
  Title:any=[];
  Pagination:any=[];
  constructor(private ApiService:RegioncallfuncService){
  }
  ngOnInit(): void {
    this.getAllRegion();

  }
  LoadPage(page:number){
    this.getAllRegion(page);
  }

   parentCall(e:any){
    this.LoadPage(e.page)
  }

  getAllRegion(page:number=1){
    this.ApiService.baseUrl=this.BaseUrl;

    this.ApiService.getAllRegion(page,this.BaseUrl)
    .subscribe(
      {
        next:(resSuccess)=>{
          this.GridData = resSuccess.data;
          this.Pagination =JSON.parse(resSuccess.message);

          this.Title = Object.keys(resSuccess.data[0]);
          console.log(this.Title[0])

        },
        error:(resError)=>{
          console.log(resError)
        }
      }
    )
  }

  copy(id:string){
    navigator.clipboard.writeText(id);


  }


}
