import { Component, Input, OnInit } from '@angular/core';
import { IForm } from '../../../Interfaces/formInterface';
import { registrationForms,editForm } from '../../../Interfaces/contat';
import { IMainContent } from '../../../Interfaces/IMainContent';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})

export class RegionComponent implements OnInit {
  @Input() title:string='';
  DataFor:IMainContent = {
    PageTitle:"Region Manager",
    UrlApi:"http://nzwalk.runasp.net/api/Regions",
    FormsDrawer:registrationForms
  }
  ngOnInit(): void {
      
  }
  

}
