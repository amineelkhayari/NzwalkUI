import { Component, Input, OnInit } from '@angular/core';
import { IRegionAddInerfaces } from '../../../Interfaces/IRegionAddInerfaces';
import { IForm } from '../../../Interfaces/formInterface';
import { editForm, registrationForms } from '../../../Interfaces/contat';
import { IMainContent } from '../../../Interfaces/IMainContent';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.FormData);
  }
  @Input()
  FormData!: IMainContent;
  metaDataAdd:IRegionAddInerfaces={btnTitle:"Add Region",Id:"addEmployeeModal",Title:"Add New region"};
  form:IForm = registrationForms;
  editfro:IForm = editForm;

  ids:string="aaaa"

  fn(e:any){
    this.ids = e.id;
  }

}
