import { Component, EventEmitter, Input,Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceGeniricService } from '../../../services/service-geniric.service';
import { ServiceResponse } from '../../../Interfaces/ServiceRespone';

@Component({
  selector: 'app-deleter',
  templateUrl: './deleter.component.html',
  styleUrl: './deleter.component.css'
})
export class DeleterComponent {
  constructor(private generic:ServiceGeniricService){}

  @Input() ids?: string;
  @Input() uri?:string;




  Deleterecord() {
    this.ids != null || this.generic.DeleteRecord(""+this.ids,""+this.uri)
      .subscribe(
        {
          next: (resSuccess:ServiceResponse) => {
            //this.getAllRegion();
            console.log(resSuccess)
            this.rest();

          },
          error:(error)=>{
            this.rest();
            console.log(error);
          }
        }
      )
  }
 rest(){
  this.ids='';
 }
}
