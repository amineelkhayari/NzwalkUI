import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { RegioncallfuncService } from '../../services/regioncall/regioncallfunc.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent implements OnInit {
  constructor(private apicall:RegioncallfuncService){}
  allData:any[]=[];
  ngOnInit(): void {
    this.apicall.getAllRegion(1,'https://localhost:44398/api/Regions')
    .subscribe(
      {
        next:(resSuccess)=>{
          this.allData = resSuccess;
          console.log(this.allData)
        },
        error:(resError)=>{
          console.log(resError)
        }
      }
    )
  }
    //start edit 
    onEditRow(id:number){
      alert(id)
    }
    onRemoveRow(id:number){
      alert(id)

    }

  //end block
}
