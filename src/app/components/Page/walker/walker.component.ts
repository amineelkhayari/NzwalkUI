import { Component, OnInit } from '@angular/core';
import { IMainContent } from '../../../Interfaces/IMainContent';
import { RegioncallfuncService } from '../../../services/regioncall/regioncallfunc.service';
import { IForm, IOption } from '../../../Interfaces/formInterface';
import { ServiceResponse } from '../../../Interfaces/ServiceRespone';
import { Route, Router, UrlSerializer } from '@angular/router';
import { Serializer } from '@angular/compiler';
import { HttpParams } from '@angular/common/http';
import { IPageParam } from '../../../Interfaces/IPagination';
import { ServiceGeniricService } from '../../../services/service-geniric.service';

@Component({
    selector: 'app-walker',
    templateUrl: './walker.component.html',
    styleUrl: './walker.component.css'
})
export class WalkerComponent implements OnInit {
    constructor(private regionCall: RegioncallfuncService, private generic:ServiceGeniricService) { }
    optionsiD?: IOption[];
    ngOnInit(): void {
        this.LoadSelect()
  
    
        
    }

    WalkerDrawerForm: IForm = {
        formTitle: "Add And Upadate Walker",
        saveBtnTitle: "Save Walker",
        id: "addEmployeeModal",
        class: "",
        formControls: [{
            "name": "Name",
            "label": "Name Walker",
            "value": "",
            "placerHolder": "Enter Name Walker",
            "class": "form-control",
            "type": "text",
            "validators": [{
                "validatorName": "Required",
                "required": true
            }]

        },
        {
            "name": "Description",
            "label": "Description walker",
            "value": "",
            "placerHolder": "Eneter Description walker",
            "class": "form-control",
            "type": "text",
            "validators": [{
                "validatorName": "Required",
                "required": true
            }]

        },
        {
            "name": "LenghtInKm",
            "label": "LenghtInKm",
            "value": "",
            "placerHolder": "Enter LenghtInKm",
            "class": "form-control",
            "type": "number",
            "validators": [{
                "validatorName": "Required",
                "required": true
            }]

        },
        {
            "name": "WalkImageUrl",
            "label": "Walker Image Uploader",
            "value": "",
            "placerHolder": "Enter Image",
            "class": "form-control",
            "type": "file",
            "validators": [{
                "validatorName": "Required",
                "required": true
            }]

        },
        {
            "name": "Difficulty",
            "label": "Select Difficulty",
            "value": "",
            "placerHolder": "Select Difficulty Id",
            "class": "form-control",
            "options": [],
            "type": "select",
            "validators": [{
                "validatorName": "Required",
                "required": true
            }]

        },
        {
            "name": "Region",
            "label": "Select Region",
            "value": "",
            "placerHolder": "Select Region Id",
            "options": [],
            "class": "form-control",
            "type": "select",
            "validators": [{
                "validatorName": "Required",
                "required": true
            }]

        },
        ]

    }

    DataForm: IMainContent = {
        PageTitle: "Walker Manager",
        UrlApi: "http://nzwalk.runasp.net/api/Walks",
        FormsDrawer: this.WalkerDrawerForm
    }

    LoadSelect(){
        // let page:IPageParam={
        //     itemPerPage:5,
        //     page:1
        // }
        // this.generic.GetAllData("http://nzwalk.runasp.net/api/regions",page)
        // .subscribe({
        //     next:(res)=>{
        //         console.log("result",res)
        //     }
        // });
        this.regionCall.getAllRegion(0, "http://nzwalk.runasp.net/api/Regions/OptionId")
        .subscribe({
            next: (resSuccess:ServiceResponse) => {
                
                this.optionsiD = resSuccess.data;
                this.WalkerDrawerForm.formControls[5].options=resSuccess.data
                console.log('ppp',this.WalkerDrawerForm.formControls[5]
                
                )
            }
        });
        
        return this.optionsiD;
    }
   


}
